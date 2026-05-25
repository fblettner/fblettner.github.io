---
title: Multi-step form / workflow
description: "Recipe — model an approval workflow with status transitions, per-state visibility of fields, role-gated actions and scheduled escalations. The framework's form conditions + custom actions do the work."
keywords: [Liberty Framework, cookbook, workflow, approval, status, transitions, form conditions, escalation]
---

# Multi-step form / workflow

## The problem

A document goes through a sequence of states — *Draft → Submitted → Approved / Rejected → Closed*. Each transition is a button visible only to the right role. Some fields appear only after submit; others freeze after approval. Stalled documents need to nudge someone after N days.

## The pattern

Three framework features compose to model the workflow:

| Feature | What it does |
|---|---|
| **Status column with `ENUM` rule** | Renders the current state as a coloured chip. |
| **Custom actions on the dialog** | One button per transition (Submit, Approve, Reject). Each action's `Visible when` expression hides the button outside its valid state. |
| **Form conditions** (`Visible when`, `Required when`, `Disabled when`) | Show / hide / freeze fields based on the current status. |
| **Nomaflow job** | A nightly escalation that nudges stalled documents. |

## The recipe

### 1. Schema

```sql
CREATE TABLE expense_claims (
  id           SERIAL PRIMARY KEY,
  employee     VARCHAR(64) NOT NULL,
  amount       DECIMAL(10,2) NOT NULL,
  description  TEXT,
  status       VARCHAR(16) NOT NULL DEFAULT 'draft',
  submitted_at TIMESTAMP,
  approved_by  VARCHAR(64),
  approved_at  TIMESTAMP,
  rejected_by  VARCHAR(64),
  rejected_at  TIMESTAMP,
  reject_reason TEXT,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP
);
```

### 2. Dictionary — the status enum

| Value | Label | Colour |
|---|---|---|
| `draft` | Draft | `#94a3b8` |
| `submitted` | Submitted | `#60a5fa` |
| `approved` | Approved | `#4ade80` |
| `rejected` | Rejected | `#f87171` |
| `closed` | Closed | `#475569` |

### 3. Per-status write queries (one per transition)

```sql
-- submit
UPDATE expense_claims
SET status = 'submitted', submitted_at = CURRENT_TIMESTAMP,
    updated_at = CURRENT_TIMESTAMP
WHERE id = :id AND status = 'draft';

-- approve
UPDATE expense_claims
SET status = 'approved', approved_by = :session_user, approved_at = CURRENT_TIMESTAMP,
    updated_at = CURRENT_TIMESTAMP
WHERE id = :id AND status = 'submitted';

-- reject
UPDATE expense_claims
SET status = 'rejected', rejected_by = :session_user, rejected_at = CURRENT_TIMESTAMP,
    reject_reason = :reject_reason, updated_at = CURRENT_TIMESTAMP
WHERE id = :id AND status = 'submitted';
```

The `AND status = '<expected>'` guard at the SQL level prevents accidental double transitions (a submitter can't re-submit; a manager can't approve a rejected claim).

### 4. Screen — actions + conditions

**Settings → Screens → expense-claims**.

#### Actions

| Action | Connector / Query | Visible when | Roles |
|---|---|---|---|
| **Submit** | `expense-claims` / `submit` | `status == 'draft' && employee == session.user` | All (gated by the row-level filter) |
| **Approve** | `expense-claims` / `approve` | `status == 'submitted' && 'manager' in session.roles` | Manager |
| **Reject** | `expense-claims` / `reject` | `status == 'submitted' && 'manager' in session.roles` | Manager. Confirmation dialog asks for `reject_reason`. |

#### Field conditions

| Field | Visible when | Required when | Disabled when |
|---|---|---|---|
| **Description** | always | `status == 'draft'` | `status != 'draft'` |
| **Amount** | always | `status == 'draft'` | `status != 'draft'` |
| **Submitted at** | `status != 'draft'` | — | always (read-only) |
| **Approved by / at** | `status == 'approved'` | — | always |
| **Reject reason** | `status == 'rejected'` | — | always |

The dialog is the same row — it just hides / freezes different fields based on the status.

### 5. Permission codes

The transitions auto-generate three write codes:

- `sql:expense-claims:submit:write`
- `sql:expense-claims:approve:write`
- `sql:expense-claims:reject:write`

Roles:

| Role | Codes granted |
|---|---|
| `employee` | `sql:expense-claims:submit:write` *(can only submit their own — the SQL guard handles the rest)* |
| `manager` | `sql:expense-claims:approve:write` + `sql:expense-claims:reject:write` |

### 6. The escalation job

Stale-claim nudge — same pattern as the [CRM nightly stale-deal job](../tutorial-crm/06-ai-and-jobs.md):

```sql
-- nag-stale-submissions
SELECT id, employee, amount, submitted_at
FROM expense_claims
WHERE status = 'submitted'
  AND submitted_at < CURRENT_TIMESTAMP - INTERVAL '5 days';
```

Nomaflow job, daily at 09:00, posts to `#expenses-managers` Slack channel.

## Variations

| You want… | Do this |
|---|---|
| **A free-form approver chain** (variable list of approvers) | Add an `approval_steps` child table; status becomes `awaiting:<step_n>`. Approve queries advance the step counter. More complex but the same primitives. |
| **A history log of every transition** | Add an `expense_audit` table; each transition query inserts a row from a Python step. |
| **Reopen rejected** | Add a `reopen` action visible when `status == 'rejected'`, flips back to `draft`. |
| **Email the requester on every transition** | Notifications block on each write query — see [Jobs → Notifications](../jobs/jobs-toml.md). |

## What's next

- [Form conditions](../form-conditions.md) for the per-field expression syntax.
- [Roles & permissions](../auth/roles-permissions.md) for gating actions per role.
- [Cookbook → Audit trail](./audit-trail.md) for the `submitted_at` / `approved_at` columns.
