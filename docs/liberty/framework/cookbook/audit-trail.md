---
title: Audit trail
description: "Recipe — record who created and last changed each row, and keep the history of every write, without trusting the browser: {{LOGIN}} / {{SYSTIMESTAMP}} tokens in the write queries, dictionary rules, and the screen's audit table."
keywords: [Liberty Next, cookbook, audit, created_by, updated_by, "{{LOGIN}}", "{{SYSTIMESTAMP}}", LOGIN, SYSDATE, audit_table, AUD_ACTION]
---

# Audit trail

## The problem

Who created this row, who changed it last, and what did it look like before? The answer must not depend on what the browser sends.

## The pattern

Two levels, which combine:

| Level | Mechanism | Result |
|---|---|---|
| **Last change, on the row** | Tokens `{{LOGIN}}` / `{{SYSTIMESTAMP}}` in the write queries. | `CREATED_BY`, `CREATED_AT`, `UPDATED_BY`, `UPDATED_AT` filled by the server. |
| **Every write, in a history table** | The screen's **audit_table**. | One row per insert, update or delete, with the action, the user and the date. |

## The recipe

### 1. Audit columns on the table

```sql
ALTER TABLE customers ADD created_by VARCHAR(64);
ALTER TABLE customers ADD created_at TIMESTAMP;
ALTER TABLE customers ADD updated_by VARCHAR(64);
ALTER TABLE customers ADD updated_at TIMESTAMP;
```

### 2. Stamp them in the write queries

In **Settings → Connectors**, edit the insert and update queries of the table:

```sql
-- customers_post
INSERT INTO customers (ID, NAME, STATUS, CREATED_BY, CREATED_AT)
VALUES (:ID, :NAME, :STATUS, {{LOGIN}}, {{SYSTIMESTAMP}})

-- customers_put
UPDATE customers
SET NAME = :NAME, STATUS = :STATUS,
    UPDATED_BY = {{LOGIN}}, UPDATED_AT = {{SYSTIMESTAMP}}
WHERE ID = :ID_ORIGINAL
```

The server replaces the tokens at execution — the signed-in user's name in upper case, the current date and time — whatever the form sends. The update query does not touch `CREATED_BY` / `CREATED_AT`, which keep their values.

:::note[Dictionary rules instead of tokens]
The `LOGIN` and `SYSDATE` [dictionary rules](../dictionary.md#rules) do the same on any write that binds the column — but `LOGIN` rewrites the column on **every** write, updates included, and `SYSDATE` only fills an **empty** value. They suit `UPDATED_BY` on a query that binds it; for creation columns, the tokens in the insert query are the safer choice.
:::

### 3. Show the columns

On the screen, give the four columns labels (dictionary entries) and a datetime format, tick **disabled** (read-only), and place them on a *History* tab of the dialog — or leave them out of the dialog and show them in the grid only.

### 4. Keep every write — `audit_table`

On the screen's **General** tab, set **audit_table** to `AUD_CUSTOMERS`. From then on, each insert, update or delete made through the screen also writes a row into `AUD_CUSTOMERS`:

| Column | Content |
|---|---|
| The table's columns | The values sent with the write. |
| `AUD_ACTION` | `INSERT`, `UPDATE` or `DELETE`. |
| `AUD_USER` | The user's name. |
| `AUD_DATE` | The server's date and time. |

The table is created on the first write from the structure of the source table. Several screens can share one audit table.

## Why it is safe

| Attempt | Result |
|---|---|
| Change the form to send `UPDATED_BY = 'someone else'`. | The token is resolved by the server; the form's value is not used. |
| Call the REST API directly with a forged body. | Same: tokens and rules are applied by the server, after the request is read. |
| Write without signing in. | The write needs an authenticated user with the query's permission. |

## Variations

| Need | How |
|---|---|
| **A version number** | `SET VERSION = VERSION + 1` in the update query. |
| **History of a whole application** | One shared audit table for its screens (`AUD_SECURITY`). |
| **Changes shipped from one environment to another** | Change tracking on the screen — see [Change packages](../../nomaflow/change-packages.md). |

## What's next

- [Parameter binding → Tokens](../build/queries/parameter-binding.md#tokens)
- [Dictionary → Rules](../dictionary.md#rules)
- [CRUD over an existing table](./crud-existing-table.md)
