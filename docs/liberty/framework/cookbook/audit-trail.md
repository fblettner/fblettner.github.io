---
title: Audit trail
description: "Recipe — automatically populate created_by, created_at, updated_by, updated_at columns on every write, without trusting the client. The framework's form-layer LOGIN and SYSDATE defaults do the work."
keywords: [Liberty Framework, cookbook, audit, created_by, updated_at, form-layer defaults, LOGIN, SYSDATE]
---

# Audit trail

## The problem

Compliance, debugging, knowing who-did-what: every write needs to record who performed it and when. Doing this in client code is wrong (the user can tamper); doing it in every `INSERT` / `UPDATE` is fragile (one missing query and the audit gap appears).

## The pattern

The framework's **form-layer defaults** populate audit columns on the server at save time. The client never sees them; the operator never types them; every connector that writes to the table gets the same audit data by construction.

Two layers:

| Layer | What it does |
|---|---|
| **Schema** | Four columns on the table — `created_by`, `created_at`, `updated_by`, `updated_at`. |
| **Dictionary** | Two dictionary entries with *Form-layer defaults* `LOGIN` + `SYSDATE`. |

The connector write queries reference these columns and the framework substitutes the values on the server.

## The recipe

### 1. Add the columns to the table

```sql
ALTER TABLE customers
  ADD COLUMN created_by VARCHAR(64),
  ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN updated_by VARCHAR(64),
  ADD COLUMN updated_at TIMESTAMP;
```

### 2. Dictionary entries

**Settings → Dictionary → Columns → + New column**:

| Field | `audit_created_by` | `audit_updated_by` |
|---|---|---|
| **Type** | string | string |
| **Rule** | LOOKUP against users *(optional, for chip display)* | LOOKUP against users |
| **Form-layer default — Create** | `LOGIN` | — |
| **Form-layer default — Update** | — | `LOGIN` |
| **Read-only on forms** | ✓ | ✓ |
| **Hide on create** | ✓ | ✓ |

Same shape for `audit_created_at` / `audit_updated_at`:

| Field | `audit_created_at` | `audit_updated_at` |
|---|---|---|
| **Type** | datetime | datetime |
| **Format** | `dd/MM/yyyy HH:mm` | `dd/MM/yyyy HH:mm` |
| **Form-layer default — Create** | `SYSDATE` | — |
| **Form-layer default — Update** | — | `SYSDATE` |
| **Read-only** | ✓ | ✓ |

### 3. Wire the column hints on the read query

On the connector's `list` query, add column hints:

| Column | Dictionary |
|---|---|
| `created_by` | `audit_created_by` |
| `created_at` | `audit_created_at` |
| `updated_by` | `audit_updated_by` |
| `updated_at` | `audit_updated_at` |

### 4. Reference the columns in the write queries

```sql
-- create
INSERT INTO customers (name, status, created_by, created_at)
VALUES (:name, :status, :session_user, CURRENT_TIMESTAMP);

-- update
UPDATE customers SET
  name = :name, status = :status,
  updated_by = :session_user, updated_at = CURRENT_TIMESTAMP
WHERE id = :id;
```

The `:session_user` placeholder is what makes this safe — it's bound on the server from the JWT, not from the dialog payload.

### 5. Done

The dialog now shows the four audit columns as read-only fields on the *History* tab (or wherever you choose to place them in the dialog editor). The grid optionally shows *Last modified* with the `updated_at` value as a right-aligned chip.

## Where it shows up

| Surface | What it shows |
|---|---|
| Grid | Optional *Last modified* / *Created by* columns (you decide). |
| Dialog | Read-only fields, typically on an *Audit* or *History* tab. |
| REST API | The columns flow through unchanged. |
| Excel export | Included if you set *Include in export* on. |
| AI assistant | Visible to queries the assistant can run. |

## Why this is safe

| What a malicious user might try | What the framework does |
|---|---|
| Edit the form's HTML to send `created_by = "victim"` on save. | The server ignores the form's value for that field — the dictionary's `LOGIN` default wins. |
| POST directly to the REST endpoint with a fake `created_by` body. | Same — the form-layer default is applied **on the server** at save time, after the request body is parsed. |
| Use `liberty-connectors run` (CLI) to bypass auth. | The CLI runs as the local user; the same `LOGIN` default substitutes the OS user. Audit trail intact. |

## Variations

| You want… | Do this |
|---|---|
| **A `version` column** | Add a `version` column, increment it in the `update` query (`SET version = version + 1`). Combined with the framework's record locks, you get optimistic concurrency control. |
| **An immutable audit log** (every change, not just last) | Add an `audit_log` child table; write a row from a Python step on every save. See [Plugins](../apps/plugins.md). |
| **Log who *viewed* a row** | Different problem. The framework records every API call in the request log; for row-level read auditing, write a Python `hook` on `screen.before_read`. |

## What's next

- [Dictionary → Form-layer defaults](../dictionary.md#form-layer-defaults).
- [Cookbook → CRUD over an existing table](./crud-existing-table.md).
- [Concepts → Screens](../screens.md) for the dialog tab where audit columns sit.
