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

## At a glance

<svg viewBox="0 0 1200 370" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pbd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pbd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pbd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pbd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="340" rx="14" fill="url(#pbd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">invoices_put</text>
  <rect x="240" y="58" width="188" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="59" width="61" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="271.5" y="73.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <line x1="303" y1="63" x2="303" y2="77" stroke="#334155" strokeWidth="1"/>
  <text x="331.5" y="73.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Params</text>
  <line x1="360" y1="63" x2="360" y2="77" stroke="#334155" strokeWidth="1"/>
  <text x="394.0" y="73.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <line x1="240" y1="92" x2="960" y2="92" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="107" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M242.5,112.5 L244.8,114.8 L248.8,110" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="257" y="116" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">writable</text>
  <rect x="770" y="102" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="810.0" y="116.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Token ▾</text>
  <rect x="858" y="102" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="913.0" y="116.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Pool schemas ▾</text>
  <rect x="240" y="132" width="720" height="120" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="152" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE invoices</text>
  <text x="254" y="172" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SET    STATUS = :STATUS,</text>
  <text x="254" y="192" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">       UPDATED_BY = &#123;&#123;LOGIN&#125;&#125;,</text>
  <text x="254" y="212" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">       UPDATED_AT = &#123;&#123;SYSTIMESTAMP&#125;&#125;</text>
  <text x="254" y="232" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">WHERE  INVOICE_ID = :INVOICE_ID_ORIGINAL</text>
  <rect x="680" y="128" width="260" height="150" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="692" y="150" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;LOGIN&#125;&#125;</text>
  <text x="820" y="150" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">current user</text>
  <text x="692" y="176" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;SYSDATE&#125;&#125;</text>
  <text x="820" y="176" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">current date</text>
  <text x="692" y="202" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;SYSTIMESTAMP&#125;&#125;</text>
  <text x="820" y="202" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">date and time</text>
  <text x="692" y="228" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;JDEDATE&#125;&#125;</text>
  <text x="820" y="228" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">CYYDDD</text>
  <text x="692" y="254" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;PID&#125;&#125;</text>
  <text x="820" y="254" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">connector name</text>
  <text x="240" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMS</text>
  <rect x="240" y="284" width="420" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="301.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="390" y="301.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <text x="550" y="301.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT</text>
  <rect x="240" y="316" width="420" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="390" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Status</text>
  <text x="550" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">PAID</text>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">:name parameters</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bound by the caller</text>
  <line x1="210" y1="167.0" x2="254" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="10" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Declared params</text>
  <text x="20" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">label and default</text>
  <line x1="210" y1="307.0" x2="240" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Token menu</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">values filled by the server</text>
  <line x1="1000" y1="77.0" x2="810" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1000" y="240" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server tokens</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;&#123;LOGIN&#125;&#125;, &#123;&#123;SYSDATE&#125;&#125;…</text>
  <line x1="1000" y1="257.0" x2="940" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
</svg>

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
