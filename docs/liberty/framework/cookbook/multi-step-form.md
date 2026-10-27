---
title: Multi-step form / workflow
description: "Recipe — an approval workflow on a status column: one guarded query per transition, row-menu actions with confirmation and a prompt for the reason, permissions per transition, fields shown or locked by status, read-only closed rows, notifications and a daily reminder job."
keywords: [Liberty Next, cookbook, workflow, approval, status, transitions, actions, prompt_fields, form conditions, editable_when, notifications, Nomaflow]
---

# Multi-step form / workflow

## The problem

An expense claim goes through *Draft → Submitted → Approved / Rejected*. Each transition belongs to a given role; some fields only matter in some states; a claim waiting too long must be chased.

## The pattern

| Need | Mechanism |
|---|---|
| A transition that only applies from the right state | One write query per transition, with `AND STATUS = '<expected>'` in its WHERE. |
| A button per transition | A row-menu action: a `chain` with confirmation, prompt and query. |
| Only managers approve | The transition query's permission, granted to the managers' role. |
| Fields by state | `visible_when`, `required_when`, `disabled_when` on the columns. |
| Frozen once decided | The screen's `editable_when`. |
| Warn the right people | Notification rules on the screen's writes. |
| Chase stalled claims | A daily Nomaflow job. |

## The recipe

### 1. Table

```sql
CREATE TABLE expense_claims (
  id            INTEGER PRIMARY KEY,
  employee      VARCHAR(64) NOT NULL,
  amount        DECIMAL(10,2) NOT NULL,
  description   VARCHAR(2000),
  status        VARCHAR(16) NOT NULL DEFAULT 'DRAFT',
  submitted_at  TIMESTAMP,
  decided_by    VARCHAR(64),
  decided_at    TIMESTAMP,
  reject_reason VARCHAR(500),
  reminded_at   TIMESTAMP
);
```

### 2. Status list

**Settings → Dictionary → Enums**: an enum `CLAIM_STATUS` with the values `DRAFT` (Draft), `SUBMITTED` (Submitted), `APPROVED` (Approved), `REJECTED` (Rejected). The `STATUS` entry gets **Rules** `ENUM`, **Rules values** `CLAIM_STATUS`: the grid shows the labels and the dialog a list.

### 3. One query per transition

In **Settings → Connectors → expenses → Queries**, three writable queries:

```sql
-- submit_claim
UPDATE expense_claims
SET STATUS = 'SUBMITTED', SUBMITTED_AT = {{SYSTIMESTAMP}}
WHERE ID = :ID AND STATUS = 'DRAFT' AND EMPLOYEE = {{LOGIN}}

-- approve_claim
UPDATE expense_claims
SET STATUS = 'APPROVED', DECIDED_BY = {{LOGIN}}, DECIDED_AT = {{SYSTIMESTAMP}}
WHERE ID = :ID AND STATUS = 'SUBMITTED'

-- reject_claim
UPDATE expense_claims
SET STATUS = 'REJECTED', DECIDED_BY = {{LOGIN}}, DECIDED_AT = {{SYSTIMESTAMP}},
    REJECT_REASON = :REJECT_REASON
WHERE ID = :ID AND STATUS = 'SUBMITTED'
```

The `AND STATUS = …` guard makes a transition from the wrong state change nothing; `EMPLOYEE = {{LOGIN}}` lets employees submit only their own claims (`{{LOGIN}}` is the user name in upper case, as `EMPLOYEE` must be stored).

### 4. The transition buttons

In the screen editor, **Row menu** tab, one entry per transition:

```toml
[[screens.expenses.expense_claims.row_menu]]
type  = "chain"
id    = "reject"
label = "Reject"
prompt_title  = "Reject the claim"
prompt_fields = [{ name = "REJECT_REASON", label = "Reason", required = true }]
steps = [
  { type = "run_query", id = "do", query = "reject_claim",
    param_binds = [{ param = "ID", source = "ID" },
                   { param = "REJECT_REASON", source = "INPUT.REJECT_REASON" }] },
  { type = "refresh", id = "reload" },
]
```

*Approve* follows the same shape with a `confirm` step instead of the prompt; *Submit* with `submit_claim`. To show a clear message when the claim is not in the right state, wrap the steps in an `if` on `STATUS` (`equals` `SUBMITTED`): `then_steps` run the query, `else_steps` a `notify`. See [Actions and lifecycle](../build/screens/actions-and-lifecycle.md).

### 5. Who may do what

Each query has its own permission: `sql:expenses:submit_claim`, `sql:expenses:approve_claim`, `sql:expenses:reject_claim`. In **Settings → Access → Roles**, grant the first one to employees and the other two to managers only: an employee who clicks *Approve* gets a refusal. See [Roles & permissions](../build/secure/roles-and-permissions.md).

### 6. Fields by state

On the columns (Edit and Filter tabs of the inspector):

| Column | Setting |
|---|---|
| `DESCRIPTION`, `AMOUNT` | `required_when` STATUS = `DRAFT` |
| `SUBMITTED_AT` | `visible_when` STATUS = `SUBMITTED`, `APPROVED`, `REJECTED`; `disabled` |
| `DECIDED_BY`, `DECIDED_AT` | `visible_when` STATUS = `APPROVED`, `REJECTED`; `disabled` |
| `REJECT_REASON` | `visible_when` STATUS = `REJECTED`; `disabled` |

And on the **General** tab, `editable_when` STATUS = `DRAFT`: once submitted, the claim opens read-only and only the row-menu transitions change it. See [Form conditions](../form-conditions.md).

### 7. Notifications

In **Settings → Notifications**, a rule on the screen's **update** event, *Only when the written row has* `STATUS = SUBMITTED`, channel `portal` and `email`, recipients `role:managers`, subject `Claim {ID} of {EMPLOYEE} to approve`. A second rule on `STATUS = REJECTED` can warn the requester. See [Notifications](../../nomaflow/notifications.md).

### 8. Reminders

A Nomaflow job, every morning, with a `sql_query` step:

```sql
UPDATE expense_claims SET REMINDED_AT = CURRENT_TIMESTAMP
WHERE STATUS = 'SUBMITTED' AND SUBMITTED_AT < CURRENT_TIMESTAMP - INTERVAL '5' DAY
```

and a notification rule on that job's `succeeded` event: `{ROWS} claims waiting for more than 5 days`, to `role:managers`.

## Variations

| Need | How |
|---|---|
| **History of every transition** | The screen's `audit_table` — see [Audit trail](./audit-trail.md). |
| **Reopen a rejected claim** | A `reopen_claim` query (`STATUS = 'DRAFT' … WHERE STATUS = 'REJECTED'`) and its row-menu entry. |
| **A long form in steps** | Dialog tabs, with `hide_on_add` / `hide_on_edit` for the tabs that only make sense in one mode. |

## What's next

- [Actions and lifecycle](../build/screens/actions-and-lifecycle.md) — chains, prompts, conditions.
- [Form conditions](../form-conditions.md) — fields by state.
- [Notifications](../../nomaflow/notifications.md) — rules and recipients.
