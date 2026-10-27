---
title: Parameter binding
description: "How a query's :name parameters get their values — declared defaults on the query, param_binds on the caller (fixed value, another field, #LOGIN_USER# / #SYSDATE# built-ins), and {{LOGIN}} / {{SYSDATE}} tokens resolved by the server."
keywords: [Liberty Next, parameter binding, ParamDef, param_binds, source, value, default, LOGIN_USER, SYSDATE, tokens, "{{LOGIN}}", "{{SYSDATE}}"]
---

# Parameter binding

A query with `:name` parameters runs against different rows at each call. Three things decide what each parameter receives:

| Piece | Where it is set | Role |
|---|---|---|
| **Params** | On the query. | Declares a parameter, with a label and a default value. |
| **`param_binds`** | On the caller — action, lookup column, nested tab. | Binds a value to a parameter: a fixed value, or another field read at call time. |
| **Tokens** `{{…}}` | In the SQL itself. | Values the server fills at execution: user, date, time. |

The query owns the declaration; each caller owns its binding. The same query can be called from ten places with ten different bindings.

---

## Declaring a parameter \{#declare\}

The **Params** block of the query editor lists the parameters, one line each:

| Field | Role |
|---|---|
| **name** | The parameter as written in the SQL, without the colon. |
| **label** | The label shown above the input when a screen or the AI assistant asks for the value. Defaults to the name. |
| **default** | The value bound when the caller sends none. |

```sql
SELECT *
FROM   invoices
WHERE  invoice_date BETWEEN :FROM_DATE AND :TO_DATE
  AND  status = :STATUS
```

| name | label | default |
|---|---|---|
| `FROM_DATE` | Period start | `2026-01-01` |
| `TO_DATE` | Period end | `2026-12-31` |
| `STATUS` | Status | `OPEN` |

Declaring is optional: a parameter that the caller does not send and that has no default is bound to `NULL`.

---

## Binding a value — `param_binds` \{#param-binds\}

Wherever a query is called with values from the context, the caller carries a list of `param_binds`, one per parameter:

| Field | Role |
|---|---|
| **param** | The parameter of the target query. The list offers the parameters the query declares. |
| **value** | A fixed value. |
| **source** | Where to read the value at call time: a column of the row, a field of the form, a value returned by an earlier step of an action (`step1.first_row.CUSTOMER_ID`), or a [built-in](#builtins). |
| **default** | Bound when **source** gives nothing. A fixed value, a built-in or a step path. |

When both **value** and **source** are set, **value** is used.

```toml
param_binds = [
  { param = "STATUS",     value  = "PAID" },
  { param = "INVOICE_ID", source = "INVOICE_ID" },
  { param = "UPMJ",       source = "UPMJ", default = "#SYSDATE#" },
]
```

**source** holds the **name** of a column or a field, not its value. The usual case: an action on a row passes the row's key to the query — `{ param = "INVOICE_ID", source = "INVOICE_ID" }`.

### Built-in sources \{#builtins\}

These sources are read in the browser at the time of the call:

| Source | Value |
|---|---|
| `#LOGIN_USER#` (or `#LOGIN#`, `#USER#`) | The signed-in user's name. |
| `#LOGIN_EMAIL#` (or `#EMAIL#`) | The user's e-mail address. |
| `#LANGUAGE#` (or `#LANG#`) | The interface language. |
| `#SYSDATE#` (or `#CURRENT_DATE#`, `#TODAY#`) | Today's date, `YYYY-MM-DD`. |
| `#NOW#` (or `#CURRENT_TIMESTAMP#`) | The current date and time. |
| `#CURRENT_TIME#` | The current time, `HH:MM:SS`. |

An unknown built-in binds nothing. Use them in **source** or **default**: in **value**, the text `#LOGIN_USER#` is bound as it is.

---

## Tokens resolved by the server \{#tokens\}

A writable query can write a value the server fills when it executes the statement — the browser cannot change it. The **Token** menu of the SQL editor inserts them:

| Token | Value |
|---|---|
| `{{LOGIN}}` (or `{{USER}}`) | The signed-in user's name, in upper case. |
| `{{SYSDATE}}` | The current date. |
| `{{SYSTIME}}` | The current time. |
| `{{SYSTIMESTAMP}}` (or `{{NOW}}`) | The current date and time. |
| `{{JDEDATE}}` | Today as a JD Edwards date (CYYDDD). |
| `{{JDETIME}}` | The current time as a JD Edwards time (HHMMSS). |
| `{{PID}}` | The connector name, in upper case. |
| `{{JOBN}}` | `LIBERTY`. |

```sql
UPDATE invoices
SET    status     = 'PAID',
       updated_by = {{LOGIN}},
       updated_at = {{SYSTIMESTAMP}}
WHERE  invoice_id = :INVOICE_ID
```

Dates and times use the server's local time, one instant per statement. In `COLUMN = {{TOKEN}}`, the value takes the column's format from the dictionary (a `jdedate` column receives CYYDDD). An unknown token makes the statement fail, so a typo does not go unnoticed.

---

## Where bindings are set \{#where\}

| Caller | Setting |
|---|---|
| **Dialog save** (insert, update, delete) | Nothing to declare: each column is bound to the parameter of the same name, and the update's WHERE uses `:<KEY>_ORIGINAL`, the key's value when the dialog opened. |
| **Action** (run a query, call an API or a plugin, open a screen…) | The action's `param_binds`. |
| **Lookup column** | The column's **lookup_param_binds** (Rules tab), or the dictionary entry's **Lookup params** for fixed values. |
| **Nested tab** | The tab's `param_binds` — typically the parent row's key. |
| **Menu item** | **Params** (Advanced tab): fixed values passed to the target when it opens. |
| **Dashboard** | The period and the filters bind `:PERIOD_FROM`, `:PERIOD_TO` and the filter columns — see [Dashboards](../../dashboards.md). |

---

## Resolution order \{#order\}

For each parameter of the statement:

1. the value sent by the caller — a `param_binds` entry, the dialog's field, a menu parameter;
2. otherwise the **default** declared on the query;
3. otherwise `NULL`.

On a write, the dictionary rules then apply to the bound columns: `LOGIN` always replaces the value, `SYSDATE` and `DEFAULT` fill an empty value, `SEQUENCE` numbers an insert — see [Dictionary → Rules](../../dictionary.md#rules).

---

## Naming conventions

| Convention | Why |
|---|---|
| **Upper-case parameters** | Binds are written in upper case on save (`param`, `source`), and the CRUD wizard generates upper-case names. Keeping the SQL in upper case avoids any mismatch. |
| **Same name as the column** | A parameter named after its column reads naturally and binds itself on a dialog save. |
| **`:<KEY>_ORIGINAL` in an update's WHERE** | The dialog save convention; the CRUD wizard writes it, and a hand-written `_put` must do the same. |

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| `value = "#LOGIN_USER#"`. | The text `#LOGIN_USER#` is written. | Use **source**. |
| Both **value** and **source** set. | **source** is ignored. | Keep one. |
| `#SYSDATE#` bound to a read filter. | The user cannot pick another date. | Leave the parameter free, with a default on the query. |
| A bind for a parameter the query does not have. | Nothing happens. | Pick the parameter from the list, which follows the query. |
| A hand-written `_put` without `_ORIGINAL`. | Changing the key in the dialog updates no row. | `WHERE key = :KEY_ORIGINAL`. |

---

## What's next

- [Per-dialect SQL variants](./per-dialect-sql.md) — one query, different SQL per database.
- [Dictionary](../../dictionary.md) — the `LOGIN`, `SYSDATE`, `SEQUENCE` and `DEFAULT` rules applied on writes.
- [Actions and lifecycle](../screens/actions-and-lifecycle.md) — the actions that call queries with `param_binds`.
