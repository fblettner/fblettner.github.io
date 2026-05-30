---
title: Parameter binding
description: "How `:placeholder` params get values at runtime — declared defaults, screen-column sources, reserved built-ins like #LOGIN_USER# / #SYSDATE#, and per-call literal overrides."
keywords: [Liberty Framework, parameter binding, ParamBind, source, value, LOGIN_USER, SYSDATE, default, query params]
---

# Parameter binding

A query without parameters runs every time with the same data. A query with `:placeholder` parameters runs against different rows, scopes or filters at each call — that's where Liberty's screens, actions and dictionary rules cash in. This page covers how each `:placeholder` gets its value.

There are **two** moving pieces:

| Piece | Where it lives | What it does |
|---|---|---|
| **`ParamDef`** | On the query (`params` block). | Declares a parameter — gives it a label and a default. |
| **`ParamBind`** | On the caller (screen column, action, menu item, nested tab). | Binds a value to a parameter — literal, or sourced from another field at call time. |

The query owns the *declaration*; every caller owns the *binding*. The same query can be called from ten places with ten different bindings.

---

## Declaring a parameter — `ParamDef`

In the query editor's **`params`** block (Unclassified / Sequences / Lookups tab), each row is a `ParamDef`:

| Field | What it does |
|---|---|
| **`name`** | The `:placeholder` name in the SQL (without the colon). Matched case-insensitively. |
| **`label`** | Form label shown above the field when a UI surfaces this parameter. Defaults to `name`. |
| **`default`** | Pre-filled value when the caller doesn't bind one. Blank = the engine binds SQL `NULL`. |

A simple example:

```sql
SELECT *
FROM   invoices
WHERE  invoice_date BETWEEN :from_date AND :to_date
  AND  status = :status
```

The declared params:

| `name` | `label` | `default` |
|---|---|---|
| `from_date` | Period start | `2026-01-01` |
| `to_date` | Period end | `2026-12-31` |
| `status` | Status | `OPEN` |

When a screen wires this query without binding any of them, the defaults are bound and the query returns 2026 invoices with status `OPEN`. When the screen binds `:from_date` to a date picker, the picker value wins over the default.

You can leave the `params` block empty for ad-hoc parameters — the engine still binds whatever the caller sends. Declaring them is for **labels** and **defaults**; the engine doesn't require declaration.

---

## Binding a value — `ParamBind`

Wherever Liberty calls a query — a screen's read, a lookup combo, an action's `run_query`, a menu item that opens a screen with a filter, a nested-tab read — the call carries a list of `ParamBind` entries. Each binds one parameter:

| Field | What it does |
|---|---|
| **`param`** | The target parameter name (the `:placeholder` on the destination query). Normalised to UPPERCASE on save. |
| **`value`** | A literal value to bind. Set this **or** `source`, not both. |
| **`source`** | A column / field / chain-context path read at call time. Set this **or** `value`. Normalised to UPPERCASE on save. |
| **`default`** | Fallback bound when `source` resolves to NULL / empty at call time. Ignored in value mode. |

Two modes:

### Value mode — literal

```toml
[[actions.run_query.params]]
param = "STATUS"
value = "PAID"
```

The bound value is exactly `"PAID"`, every call. Same as if the SQL hard-coded it — only useful when one caller wants a value the others don't.

### Source mode — runtime

```toml
[[actions.run_query.params]]
param  = "INVOICE_ID"
source = "INVOICE_ID"
```

At call time, the engine reads the **`INVOICE_ID`** column of the row the user clicked (or the form field, or the chain-context path) and binds that value. The source string is **the name of a column / field**, not the value.

The most common bind: a row click on a master grid passes the row's key columns to the detail screen — every key column gets a `ParamBind` with `source = "<KEY_COL>"`.

### Source mode with a default

```toml
[[actions.run_query.params]]
param   = "UPMJ"
source  = "UPMJ"
default = "#SYSDATE#"
```

If the source resolves to NULL / empty (the user didn't type anything in the field), the engine binds `#SYSDATE#` instead. Useful when the underlying database column shouldn't accept NULL — give the bind a sane fallback.

---

## Reserved sources — the built-in `#…#` tokens

Two source values aren't column names — they're tokens Liberty substitutes at call time:

| Token | Resolves to |
|---|---|
| **`#LOGIN_USER#`** | The username of the user making the call (from the JWT). |
| **`#SYSDATE#`** | The current timestamp (`datetime.now(UTC)`) — one value per call, so two `#SYSDATE#` bindings in the same call get the same instant. |

Use them in `source` (not `value`) — the engine sees the `#…#` shape and resolves it instead of looking for a column of that name.

```toml
# Row insert — stamp creator + creation timestamp from the session
[[actions.run_query.params]]
param  = "CREATED_BY"
source = "#LOGIN_USER#"

[[actions.run_query.params]]
param  = "CREATED_AT"
source = "#SYSDATE#"
```

For column-level pre-fill (a screen field that shows the current user when the dialog opens), use the dictionary's **`LOGIN`** and **`SYSDATE`** rules instead — they fire on the form layer, not at SQL execute time. The bind tokens are for *call-time* parameter substitution; the dictionary rules are for *form-time* field population.

---

## Where bindings are declared in the UI

| Caller | Where the binding lives |
|---|---|
| **Screen read query** | The screen's `params` list (Settings → Screens → \<screen> → *Params* tab). |
| **Dialog Save (UPDATE / INSERT / DELETE)** | The screen auto-binds every key + non-key column to its same-named placeholder. You don't usually declare anything — the convention does the work. |
| **Action `run_query`** | The action editor's `params` list. |
| **Action `navigate`** | Same — the params bind into the destination screen's read query. |
| **Menu item with target params** | Menu editor — the `params` list on the menu entry. |
| **Nested-form / nested-tab read** | The nested tab's `params` list. |
| **Lookup combo with a cascading filter** | The column's `filter_from` (which translates to a `ParamBind` under the hood). |

In each case the editor surfaces a *Param* dropdown listing the destination query's declared params, a mode toggle (literal / source), and value / source inputs. The dropdown is populated from the live connectors registry — switching the destination query refreshes the list.

---

## Resolution order — what binds what

When a query is called, the engine resolves each `:placeholder` in this order:

1. The matching `ParamBind` on the caller — `value` literal, or `source` (column lookup or `#…#` token), or `default` when source is NULL / empty.
2. The matching dictionary rule — `SYSDATE` / `LOGIN` / `SEQUENCE` / `DEFAULT` fire if the column has one (writes only — those rules don't override caller-supplied values).
3. The query's `ParamDef.default`.
4. SQL `NULL`.

The first match wins. So a screen that binds `:status = "PAID"` overrides the query's `default = "OPEN"`; a query that leaves `:from_date` unbound and undeclared receives SQL `NULL`.

---

## Naming conventions

| Pattern | Why |
|---|---|
| **UPPER snake case for placeholders** | The engine normalises to UPPERCASE on save and matches case-insensitively at runtime. `:USER_ID` and `:user_id` work; `:UserId` works but reads oddly next to the saved UPPERCASE form. |
| **Match column names** | When the placeholder corresponds to a screen column, name it the same — the binding then collapses to `source = "<NAME>"` with the same value, easier to read. |
| **`:NAME_ORIGINAL` for UPDATE WHERE** | The dialog Save convention — the column's value at dialog open. The CRUD Wizard wires this for you; hand-written `_put` queries should mirror it. |
| **`:LOGIN_USER` / `:SYSDATE` as suffixes for audit columns** | A column named `:CREATED_BY` bound to `#LOGIN_USER#` reads obvious; `:UID` bound to `#LOGIN_USER#` reads cryptic. |

---

## Worked example — a multi-bind action

A screen for *Invoices* has a row action **Mark paid**. Clicking it on row N runs an UPDATE that:

- Sets `status = 'PAID'`.
- Sets `paid_at = SYSDATE`.
- Sets `paid_by = <logged-in user>`.
- Matches on the row's `INVOICE_ID`.

The query (under Unclassified, `writable = true`):

```sql
UPDATE invoices
SET    status  = :STATUS,
       paid_at = :PAID_AT,
       paid_by = :PAID_BY
WHERE  invoice_id = :INVOICE_ID
```

The action editor's `params` list:

| `param` | mode | value / source | default |
|---|---|---|---|
| `STATUS` | value | `PAID` | — |
| `PAID_AT` | source | `#SYSDATE#` | — |
| `PAID_BY` | source | `#LOGIN_USER#` | — |
| `INVOICE_ID` | source | `INVOICE_ID` | — |

Calling the action on a row binds each placeholder, fires the UPDATE, and the grid refreshes. No screen field input from the user — the action does its job from row context + session identity alone.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Set both `value` and `source`. | The save fails validation ("set exactly one of value or source"). | Pick one. |
| `source = "#SYSDATE#"` on a SELECT screen filter. | The filter applies SYSDATE at call time — the user can't pick a date. | Don't bind. Let the user fill the field; the dictionary's SYSDATE rule pre-fills the input but the user can override. |
| `value = "#LOGIN_USER#"`. | The literal string `"#LOGIN_USER#"` is bound — no substitution. | Use `source`, not `value`. |
| Bind a placeholder the query doesn't have. | The engine ignores it; nothing happens, nothing fails. | Open the destination query, declare the param or pick the right placeholder name from the dropdown. |
| Forget the `_ORIGINAL` suffix on a hand-written `_put`. | The UPDATE matches on the **edited** key, not the original — the row isn't found when the operator changed the key. | Mirror the CRUD Wizard convention: `WHERE key = :key_ORIGINAL`. |

---

## What's next

- [Per-dialect SQL variants](./per-dialect-sql.md) — for parameters that need different SQL syntax across Postgres / Oracle.
- [Concepts → Dictionary](../../dictionary.md) — the `SEQUENCE` / `LOOKUP` / `LOGIN` / `SYSDATE` rules that pre-fill form fields.
- [Concepts → Form conditions](../../form-conditions.md) — when a field should appear only under specific filter values.
