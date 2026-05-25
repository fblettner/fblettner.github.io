---
title: Parameter binding
description: "How parameters flow from a screen, chart or dashboard into the SQL query or HTTP endpoint behind it. Declared in the connector builder, surfaced as form inputs on the consuming page, with sane defaults (today, current week, session user) and cascading filters."
keywords: [Liberty Framework, parameters, named params, filter_from, cascading filter, defaults, session user, lookup, settings, connector builder]
---

# Parameter binding

Every SQL query and HTTP endpoint receives its values through a consistent **parameter model**: the connector builder declares the parameters; the page that consumes the connector (a screen, a chart, a dashboard) **surfaces them as form inputs**; the framework resolves each input through a small chain of fall-backs before running the query.

This page covers how parameters appear in the UI on each surface, where defaults come from, how cascading filters narrow a dropdown based on another, and the special `session` context every query gets for free.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="qp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="qp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#qp-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Where does a parameter value come from?</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="220" height="160" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="170" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · CALLER</text>
  <text x="170" y="148" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">screen toolbar input</text>
  <text x="170" y="166" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">dashboard filter</text>
  <text x="170" y="184" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">chart fixed value</text>
  <text x="170" y="244" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">explicit user input</text>

  <rect x="300" y="100" width="220" height="160" rx="10" fill="rgba(192,132,252,0.06)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="410" y="124" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · DEFAULTS</text>
  <text x="410" y="148" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">declared on the connector</text>
  <text x="410" y="166" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">date tokens (today, last month…)</text>
  <text x="410" y="244" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">applied when caller omits</text>

  <rect x="540" y="100" width="220" height="160" rx="10" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="650" y="124" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · SESSION CONTEXT</text>
  <text x="650" y="148" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">session.user</text>
  <text x="650" y="166" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">session.lang</text>
  <text x="650" y="184" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">session.roles</text>
  <text x="650" y="244" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">always available, server-side</text>

  <rect x="780" y="100" width="160" height="160" rx="10" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · QUERY</text>
  <text x="860" y="200" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">runs against the</text>
  <text x="860" y="218" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">resolved parameter map</text>

  <line x1="280" y1="180" x2="300" y2="180" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#qp-arrow)"/>
  <line x1="520" y1="180" x2="540" y2="180" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#qp-arrow)"/>
  <line x1="760" y1="180" x2="780" y2="180" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#qp-arrow)"/>
</svg>

---

## Declaring a parameter

In **Settings → Connectors**, open a connector and switch to the **Parameters** tab. The tab is a table — one row per parameter — with the editor fields below.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 700}}>tasks → Parameters</div>
  <div style={{display: 'grid', gridTemplateColumns: '130px 90px 80px 1.5fr 90px 60px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Name</div><div>Type</div><div>Required</div><div>Default</div><div>Lookup</div><div></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '130px 90px 80px 1.5fr 90px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>status</div><div>string</div><div>—</div><div>open</div><div>statuses</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '130px 90px 80px 1.5fr 90px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>from_date</div><div>date</div><div>—</div><div style={{fontFamily: 'ui-monospace, monospace'}}>{"${month.first}"}</div><div>—</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '130px 90px 80px 1.5fr 90px 60px', padding: '10px 14px', alignItems: 'center'}}>
    <div>to_date</div><div>date</div><div>—</div><div style={{fontFamily: 'ui-monospace, monospace'}}>{"${month.last}"}</div><div>—</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
</div>

| Editor field | Description |
|---|---|
| **Name** | The parameter identifier. Surfaces as the placeholder name in the query (`:name`) and as the form-input label fallback. |
| **Type** | `string` / `int` / `float` / `bool` / `date` / `datetime` / `decimal`. Drives the widget type on screens (text input vs date picker vs checkbox) and the coercion before the query runs. |
| **Label** | Display label of the input on the consuming page. Falls back to *Name* when empty. Localised through the [dictionary](./dictionary.md). |
| **Required** | When on, the consuming page **must** provide a value or the request fails with `400 Bad Request`. With *Required* off, *Default* fills in when omitted. |
| **Default** | Value applied when the caller omits the parameter. See [Defaults](#defaults). |
| **Lookup** | Dropdown of dictionary lookups. When set, the form-input becomes a dropdown of `{ value, label }` pairs from the lookup. |
| **Multiple** | When on, the input accepts a list; the query receives an `IN (...)` clause. |
| **Filter from** | Multi-select of other parameters this one cascades from — see [Cascading filters](#cascading-filters). |

Parameters that appear in the query (`:name`) but aren't declared still bind from the caller — they just have no UI widget and no default. Useful when the value is always set by another mechanism (a chart's fixed value, a job's params).

The connector builder's **Parameters tab** validates each row in real time — an invalid combination (e.g. *Required* on without a *Default* and no *Lookup*) is flagged before save.

---

## Where parameters surface

A parameter shows up on every page that consumes the connector:

### Screens

A screen's toolbar surfaces one input per declared parameter. The widget depends on *Type* and *Lookup*:

| Type / lookup | Widget |
|---|---|
| `string` | Text input |
| `int` / `float` / `decimal` | Numeric input |
| `bool` | Checkbox |
| `date` / `datetime` | Date / datetime picker |
| Any type with *Lookup* set | Dropdown populated from the lookup |
| `string` + *Multiple* on | Multi-select |

The toolbar's *Apply* / *Run* button re-runs the read query with the current values. The framework debounces text inputs (~300 ms) so typing doesn't hammer the database.

### Charts

Each chart entry has a **Fixed parameters** panel in its builder. Operators set the value once; the chart always runs against those values. Useful for "Q1 only" or "billing app only" charts. The `${month.first}` style tokens are accepted here so the chart tracks the calendar.

### Dashboards

Dashboards add a step: the dashboard's **Shared filter bar** (top of the layout) can expose a parameter once, and every chart referencing the same parameter name inherits the value. Operators see one filter at the top of the dashboard, not one per panel.

### Jobs

A job step's *Parameters* table is the same shape as the connector's declaration — one row per parameter, name read-only, value editable. Substitutions like `${params.period}` chain across steps.

---

## Defaults

Three forms of *Default* are accepted on the connector builder:

| Form | Resolves to |
|---|---|
| **Literal** — `open`, `5`, `true` | The literal value. |
| **Date token** — `${today}`, `${yesterday}`, `${week.monday}`, `${week.sunday}`, `${month.first}`, `${month.last}`, `${month.previous}` | The matching date in the server's timezone, re-evaluated at every call. So the default tracks the calendar. |
| **Session value** — `${session.user}`, `${session.lang}`, `${session.roles}` | The calling user's identity / language / roles. Documented below. |

A *Required* parameter without a *Default* and without a caller value causes the call to fail with `400 Bad Request: missing required parameter`.

---

## Session context

Three values are always available to every query, even when not declared:

| Variable | Source |
|---|---|
| `session.user` | The `sub` claim of the JWT — usually the local username or the OIDC email. |
| `session.lang` | The active language (`X-Liberty-Lang` header, falling back to the user's preference). |
| `session.roles` | A list of the caller's roles. |

These are useful for **row-level filters** that should never come from the user. In the connector builder's *Query* field, write the query as:

```sql
SELECT * FROM contracts WHERE owner = :session_user;
```

The framework rewrites `session.user` to the placeholder `:session_user` at parse time (SQLAlchemy doesn't accept dots in placeholder names).

---

## Cascading filters

A common pattern: a screen has a *Company* dropdown and a *Contract* dropdown — the contracts must narrow based on the company. In the connector builder's *Parameters* tab, set the *Contract* parameter's **Filter from** field to `company`:

| Setup |
|---|
| Both parameters set *Lookup* — `company` lookup pulls companies, `contract` lookup pulls contracts. |
| *Contract* sets *Filter from* = `[company]`. |
| The lookup query for *Contract* references `:company` in its `WHERE` clause (typically with `IS NULL OR` to handle the "no company picked" case). |

When the operator picks a company, the framework **clears** the *Contract* selection and re-fetches the dropdown with the new company. Multiple dependencies are supported — `Filter from = [company, region]`.

The cascade is set up entirely from the [dictionary](./dictionary.md) (lookup definitions) and the connector builder; no SQL is written from the consuming screen.

---

## Multiple values

A parameter with *Multiple* on accepts a **list** of values and binds it as `IN (:name)` in the query. The form widget becomes a multi-select.

In the query field, write `WHERE status IN (:statuses)` — the framework expands the placeholder behind the scenes; the literal `IN (:statuses)` is what the operator types. An empty list is rejected (the SQL `IN ()` is illegal in most databases); pair *Multiple* with *Required: off* + a sensible default to handle the empty case.

---

## How it looks at runtime

For a screen of the *tasks* connector with no toolbar value set, the framework builds the resolved parameter map at request time:

```text
status         = "open"          (default)
from_date      = 2026-05-01      (date token expanded)
to_date        = 2026-05-31      (date token expanded)
session.user   = "alice"         (session)
session.lang   = "en"            (session)
session.roles  = ["viewer", "editor"]  (session)
```

…and runs the query with it. The browser dev-tools network panel shows the request; the framework's debug logger (with `LIBERTY_LOG_LEVEL=DEBUG`) prints the resolved parameter map next to the SQL.

---

## Permissions

A query inherits the connector's permission code (`sql:<connector>:<query>`, `api:<connector>:<endpoint>`). The framework refuses any call to a query the caller can't run; the consuming page (screen / chart / dashboard) also prunes the surface so the operator doesn't see an unusable widget. See [Roles & permissions](./auth/roles-permissions.md).

---

## Under the hood

Parameter declarations live on the connector entry inside `connectors.toml`. Operators **do not edit this file by hand**; the connector builder is the canonical interface. Advanced operators can reach for the *Raw TOML* tab as an escape hatch when a builder gap blocks them.

---

## What's next

- [Concepts → Connectors](./connectors.md) — the connector definition that holds the queries.
- [Concepts → Dictionary](./dictionary.md) — the lookup definitions referenced by the *Lookup* field.
- [Concepts → Form conditions](./form-conditions.md) — conditional `visible_when` / `required_when` rules on screens.
