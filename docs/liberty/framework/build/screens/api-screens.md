---
title: A screen on an API endpoint
description: "In Liberty Next a screen can read the rows of an API endpoint instead of an SQL query, and save through endpoints: the same grid and record form, filters from the endpoint's parameters and from the columns, saves that go through the application that owns the data with its own rules and messages — and Saves through, for a screen read by SQL and saved by an API."
keywords: [Liberty Next, screen, API endpoint, REST, grid, record form, save through API, Saves through, filters, row limit, data scope, low-code, JD Edwards form]
---

# A screen on an API endpoint

A screen does not need a database behind it. It can **read the rows an API returns** and **save through the API's own calls**: the grid, the filters, the record form, the actions, the permissions and the AI assistant work as on any screen, and every save goes through the application that owns the data — with its rules, its defaults and its messages.

Two set-ups:

| Set-up | Read | Save |
|---|---|---|
| **A screen on an API** | An endpoint | Endpoints |
| **Saves through** | An SQL query — fast, every column, paging | Endpoints of another connector |

---

## At a glance

<svg viewBox="0 0 1200 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aps-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aps-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aps-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aps-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="340" rx="14" fill="url(#aps-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Two set-ups</text>
  <rect x="240" y="70" width="720" height="130" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="90" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">A SCREEN ON AN API</text>
  <rect x="254" y="114" width="170" height="52" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="339.0" y="137.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Read endpoint</text>
  <text x="339.0" y="152.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">its rows, its parameters</text>
  <line x1="424" y1="140" x2="490" y2="140" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <text x="457" y="132" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">reads</text>
  <rect x="492" y="104" width="190" height="80" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="502" y="120" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCREEN — GRID + RECORD FORM</text>
  <rect x="502" y="128" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="502" y="144" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="502" y="160" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <line x1="682" y1="140" x2="748" y2="140" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <text x="715" y="132" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">saves</text>
  <rect x="750" y="100" width="190" height="38" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="845.0" y="116.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Endpoints</text>
  <text x="845.0" y="131.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">insert · update · delete</text>
  <line x1="845" y1="138" x2="845" y2="154" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <rect x="750" y="156" width="190" height="30" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="845.0" y="175.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">The application's own rules</text>
  <rect x="240" y="220" width="720" height="130" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="240" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SAVES THROUGH</text>
  <rect x="254" y="264" width="170" height="52" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="339.0" y="287.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SQL query</text>
  <text x="339.0" y="302.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">fast, every column, paging</text>
  <line x1="424" y1="290" x2="490" y2="290" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <text x="457" y="282" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">reads</text>
  <rect x="492" y="254" width="190" height="80" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="502" y="270" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCREEN — GRID + RECORD FORM</text>
  <rect x="502" y="278" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="502" y="294" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="502" y="310" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <line x1="682" y1="290" x2="748" y2="290" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <text x="715" y="282" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">saves</text>
  <rect x="750" y="250" width="190" height="38" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="845.0" y="266.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Endpoints</text>
  <text x="845.0" y="281.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">insert · update · delete</text>
  <line x1="845" y1="288" x2="845" y2="304" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <rect x="750" y="306" width="190" height="30" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="845.0" y="325.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">The application's own rules</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rows from an API</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filters = its parameters</text>
  <line x1="200" y1="107.0" x2="254" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aps-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read stays in SQL</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">only the save changes</text>
  <line x1="200" y1="267.0" x2="254" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aps-arrow)"/>
  <rect x="1000" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marked "Changes data"</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its permission</text>
  <line x1="1000" y1="107.0" x2="940" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aps-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The server's refusal</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">is the save's error</text>
  <line x1="1000" y1="187.0" x2="940" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aps-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">No mapping to write</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by name or dictionary item</text>
  <line x1="1000" y1="317.0" x2="940" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aps-arrow)"/>
</svg>

---

## Read an endpoint \{#read\}

In the [Screen Designer](./overview.md), stage **Data**: choose the API connector as **Connector**, then the endpoint as **Read query**. The list offers the endpoints that say where their rows are (**Rows**, in the [endpoint editor](../api-endpoints.md#answer)).

The grid is the same. Its columns are named by the endpoint; their labels come from the screen, then the dictionary, then the server's own titles. The page is titled by the screen's label.

### Filters \{#filters\}

- **The endpoint's parameters** are shown above the grid — their example as a placeholder, their help as a tooltip, a dropdown for a closed list of values. A parameter that has a filter column of the same name goes to the filter panel instead.
- **Every column flagged as a filter** is in the advanced filters, with the operators of a query — contains, equals, not equals, starts with, ends with, a range — and a pick-list when the column has an enum or a lookup. These filters apply to the rows the endpoint returned.
- A screen's own **parameters** — the header of a detail form — can be required, so that the endpoint is never called on a blank header.

### Row limit \{#limit\}

The number of rows is the endpoint's, capped again by the screen, without paging. When the endpoint names its **Row limit parameter**, the screen fills it from its own *Max rows*. The screen says the result is truncated when the server says there is more. Sorting and grouping happen on what was returned.

### A server that has nothing to list \{#empty\}

Some servers answer an error when a list is empty. The endpoint can name the refusals that mean *no rows*: the screen then shows an empty list instead of an error.

---

## Save through endpoints \{#save\}

**Update query**, **Insert query** and **Delete query** name endpoints marked **Changes data**. The grid and the record form save as they always do:

- the values of the row go to the endpoint's parameters **by name**; the value a row held when it was loaded is available as `<COLUMN>_ORIGINAL`;
- the screen's own parameters go with every save;
- **what the server refuses is the save's error**, in the server's words; its warnings come back with the save;
- a value the endpoint returns — a number the server assigned — comes back to the form;
- a column the screen does not send is left alone by the server; a column the user cleared is sent blank;
- on a change, only what the user changed is sent to an endpoint served by a function.

The notification rules fire, and the assistant's write tools go through the same save.

---

## Saves through — read by SQL, save by API \{#saves-through\}

When the data can be read from a database but must be written through the application — a JD Edwards form, an ERP's API — keep the screen on its query and choose the API connector in **Saves through**. The update, insert and delete then name endpoints of that connector.

No mapping is written: a parameter of the endpoint takes the value of the column of its name, else of the column that carries the same dictionary item (`ALPH` from `ABALPH`).

The read stays fast and complete; the save applies the application's own rules. Integrity, *Find usages*, renaming and packages follow the save connector.

---

## What differs from a screen on a query \{#limits\}

| On a query | On an endpoint |
|---|---|
| Paging by the server | The endpoint's row limit, no paging |
| Filters translated to SQL | The endpoint's parameters, then filters on the rows returned |
| Import of rows | Not available |
| Configured workbook export | Not available — the grid's own export works |
| Server-side summary | Not available |
| Audit mirror, change packages on its saves | Not available |
| Dictionary write rules (sequence, login, date) | The server decides |
| Source of a Data Explorer model | Not available |

---

## Access \{#access\}

The permission is the endpoint's — `api:<connector>:<endpoint>` — for the read and for each save; a screen whose read endpoint the user may not call is not in their menu. The screen's *editable when* rule is enforced, and the caller's **data scope** applies to the rows returned.

---

## In packages \{#packages\}

A screen travels whole: the endpoints it reads or saves through are listed under **API endpoints** in a [package](../packages.md), ticked by default like its queries; an endpoint served by a service brings that service with it. The screen's history records them too.

---

## Tips & best practices \{#tips\}

- Read by SQL and save by API whenever both are possible: the best of each.
- Declare the endpoint's **error fields**: a refused save must look like one.
- Flag as filters the columns people search on; name the row limit parameter so that *Max rows* drives the server.
- Let a generator build the screen when one exists — **Create from…** creates the endpoints and the screen together.

---

## Related

- [API endpoints](../api-endpoints.md) · [Screens — overview](./overview.md) · [Columns](./columns.md)
- [Nomajde — a screen from a JDE form](../../../nomajde/ais/create-from.md)
