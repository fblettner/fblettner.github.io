---
title: Parameter binding
description: "How a query's :name parameters get their values — declared defaults on the query, param_binds on the caller (fixed value, another field, #LOGIN_USER# / #SYSDATE# built-ins), and {{LOGIN}} / {{SYSDATE}} tokens resolved by the server."
keywords: [Liberty Next, parameter binding, ParamDef, param_binds, source, value, default, LOGIN_USER, SYSDATE, tokens, "{{LOGIN}}", "{{SYSDATE}}"]
---

# Parameter binding

A query with `:name` parameters runs against different rows at each call. Three things decide what each parameter receives:

| Piece | Where it is set | Role |
|---|---|---|
| **Params** | On the query. | Declares a parameter, with a label, a default value, a help text and an example. |
| **`param_binds`** | On the caller — action, lookup column, nested tab. | Binds a value to a parameter: a fixed value, or another field read at call time. |
| **Tokens** `{{…}}` | In the SQL itself. | Values the server fills at execution: user, date, time. |

The query owns the declaration; each caller owns its binding. The same query can be called from ten places with ten different bindings.

---

## At a glance

<svg viewBox="0 0 1320 596" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pbd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pbd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pbd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pbd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="564" rx="14" fill="url(#pbd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="236" y="44" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">invoices_put</text>
  <rect x="236" y="56" width="200" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="61" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="71.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="332.24" y="71.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">INVOICES_PUT</text>
  <line x1="437" y1="68" x2="447" y2="68" stroke="#475569" strokeWidth="1" markerEnd="url(#pbd-flow)"/>
  <rect x="448" y="56" width="150" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="455" y="61" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="475" y="71.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATEMENT</text>
  <text x="538.416" y="71.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UPDATE</text>
  <line x1="599" y1="68" x2="609" y2="68" stroke="#475569" strokeWidth="1" markerEnd="url(#pbd-flow)"/>
  <rect x="610" y="56" width="190" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="617" y="61" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="637" y="71.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <text x="706.24" y="71.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1 declared</text>
  <rect x="236" y="94" width="62" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="267.0" y="108.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Token</text>
  <rect x="236" y="122" width="848" height="91.5" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="138.0" fill="#475569" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="260" y="138.0" fill="#7dd3fc" fontSize="9.5" fontFamily="ui-monospace, monospace">UPDATE invoices</text>
  <text x="250" y="153.5" fill="#475569" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="260" y="153.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">SET    STATUS = :STATUS,</text>
  <text x="250" y="169.0" fill="#475569" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="260" y="169.0" fill="#fb923c" fontSize="9.5" fontFamily="ui-monospace, monospace">       UPDATED_BY = &#123;&#123;LOGIN&#125;&#125;,</text>
  <text x="250" y="184.5" fill="#475569" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="260" y="184.5" fill="#fb923c" fontSize="9.5" fontFamily="ui-monospace, monospace">       UPDATED_AT = &#123;&#123;SYSTIMESTAMP&#125;&#125;</text>
  <text x="250" y="200.0" fill="#475569" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <text x="260" y="200.0" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">WHERE  INVOICE_ID = :INVOICE_ID_ORIGINAL</text>
  <rect x="616" y="116" width="300" height="182" rx="8" fill="#111827" stroke="#334155" strokeWidth="1.2"/>
  <text x="628" y="134" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;LOGIN&#125;&#125;</text>
  <text x="628" y="146" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Current user (uppercased)</text>
  <text x="628" y="162" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;PID&#125;&#125;</text>
  <text x="628" y="174" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Program id — the connector name</text>
  <text x="628" y="190" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;JDEDATE&#125;&#125;</text>
  <text x="628" y="202" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">JDE Julian date today — CYYDDD</text>
  <text x="628" y="218" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;SYSDATE&#125;&#125;</text>
  <text x="628" y="230" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Current date (native date column)</text>
  <text x="628" y="246" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;&#123;SYSTIMESTAMP&#125;&#125;</text>
  <text x="628" y="258" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Current date &amp; time</text>
  <text x="628" y="278" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOL SCHEMAS   #SCHEMA.SY#</text>
  <rect x="236" y="316" width="200" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="321" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="331.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="332.24" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">INVOICES_PUT</text>
  <line x1="437" y1="328" x2="447" y2="328" stroke="#475569" strokeWidth="1" markerEnd="url(#pbd-flow)"/>
  <rect x="448" y="316" width="150" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="455" y="321" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="475" y="331.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATEMENT</text>
  <text x="538.416" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UPDATE</text>
  <line x1="599" y1="328" x2="609" y2="328" stroke="#475569" strokeWidth="1" markerEnd="url(#pbd-flow)"/>
  <rect x="610" y="316" width="190" height="24" rx="12" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <rect x="617" y="321" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="637" y="331.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <text x="706.24" y="331.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1 declared</text>
  <text x="236" y="356" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMS</text>
  <rect x="236" y="364" width="848" height="200" rx="6" fill="rgba(255,255,255,0.02)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="248" y="382" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">⌄  STATUS</text>
  <text x="248" y="402" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME ∗</text>
  <rect x="248" y="408" width="406.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="421.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="666.0" y="402" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="666.0" y="408" width="406.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="675.0" y="421.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Status</text>
  <text x="248" y="440" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT</text>
  <rect x="248" y="446" width="406.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="459.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">PAID</text>
  <text x="666.0" y="440" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXAMPLE</text>
  <rect x="666.0" y="446" width="406.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="675.0" y="459.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">OPEN</text>
  <text x="248" y="478" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HELP</text>
  <rect x="248" y="484" width="824" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="497.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">The new status of the invoice.</text>
  <text x="248" y="518" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHOICES</text>
  <rect x="248" y="524" width="72" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="284.0" y="536.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">OPEN</text>
  <rect x="328" y="524" width="72" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="364.0" y="536.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PAID</text>
  <rect x="408" y="524" width="72" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="444.0" y="536.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">CANCELLED</text>
  <text x="666.0" y="518" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUIRED</text>
  <rect x="666.0" y="529" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M668.5,534.5 L670.8,536.8 L674.8,532" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="683.0" y="538" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">enabled</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Token menu</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">values filled by the server</text>
  <line x1="200" y1="77.0" x2="298" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">:name parameters</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bound by the caller</text>
  <line x1="200" y1="177.0" x2="386" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1120" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server tokens</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">user, date, time, program</text>
  <line x1="1120" y1="137.0" x2="916" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1120" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool schemas</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">at the end of the menu</text>
  <line x1="1120" y1="247.0" x2="916" y2="275" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="20" y="396" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="411" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A declared parameter</text>
  <text x="30" y="424" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line, opened to edit</text>
  <line x1="200" y1="413.0" x2="236" y2="378" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1120" y="466" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="481" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Help and example</text>
  <text x="1130" y="494" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shown where it is filled</text>
  <line x1="1120" y1="483.0" x2="1072" y2="493" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
  <rect x="1120" y="526" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="541" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choices · Required</text>
  <text x="1130" y="554" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a dropdown · refused if blank</text>
  <line x1="1120" y1="543.0" x2="754.0" y2="534" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pbd-arrow)"/>
</svg>

---

## Declaring a parameter \{#declare\}

The **Parameters** stage of the query editor lists the parameters, one line each, opened to edit it:

| Field | Role |
|---|---|
| **Name** | The parameter as written in the SQL, without the colon. |
| **Label** | The label shown above the input when a screen or the AI assistant asks for the value. Defaults to the name. |
| **Default** | The value bound when the caller sends none. |
| **Help**, **Example** | What to put in it, in a sentence, and an example value (for a JSON parameter, an example of the JSON): shown under the field where the parameter is filled, and given to the AI assistant. |
| **Choices** | The only values allowed, when there are a few: a dropdown where the parameter is filled. |
| **Required** | A call without a value for it, and without a default, is refused before anything runs. |

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
| `#POOL#` (or `#ENVIRONMENT#`) | The **Pool** picked in the sidebar. In a `confirm` / `notify` message: the environment the screen runs on — that pick when the screen's connector has it, else the connector's own pool. |
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
