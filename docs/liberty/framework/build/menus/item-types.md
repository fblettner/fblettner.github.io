---
title: Item types
description: "The five leaf kinds — screen / query / endpoint / dashboard / page — what each opens, the target field's shape, the connector rule, and when to reach for each."
keywords: [Liberty Framework, menu item, screen, query, endpoint, dashboard, page, target, connector, leaf, folder]
---

# Item types

A menu item is either a **folder** (no `type`) or a **leaf** that opens something. The leaf's `type` decides what that something is and what the `target` / `connector` fields mean.

Five leaf kinds:

| `type` | Opens | `target` is | `connector` |
|---|---|---|---|
| **`screen`** | A designed screen. | The screen's read query, picked from the designed screens. | The connector that owns it. Blank = the app's own connector. |
| **`query`** | The same grid view, picked from the raw queries. | A SELECT query name. | The connector that owns the query. Blank = the app's own connector. |
| **`endpoint`** | The HttpRunner — fires one API connector endpoint. | An endpoint name. | The API connector. Blank = the app's. |
| **`dashboard`** | A dashboard (charts + KPIs). | `<app>.<id>` of the dashboard. | Must NOT be set (the app is in the target). |
| **`page`** | A registered frontend route — a custom feature area like `/nomaflow`. | The route path. | Must NOT be set. |

This page walks each in detail with concrete examples.

---

## At a glance

<svg viewBox="0 0 1200 350" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mit-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mit-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mit-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mit-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="320" rx="14" fill="url(#mit-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Menus</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="300" height="240" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="100" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▾ 📁 Sales</text>
  <text x="274" y="130" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">👥 Customers</text>
  <text x="274" y="160" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📈 Deals</text>
  <rect x="246" y="174" width="288" height="24" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="190" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">📊 Pipeline</text>
  <text x="256" y="220" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Nomaflow</text>
  <text x="560" y="92" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inspector</text>
  <text x="560" y="119" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">label</text>
  <rect x="640" y="104" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="118.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Pipeline</text>
  <text x="560" y="151" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">type</text>
  <rect x="640" y="136" width="230" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="755.0" y="150.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">dashboard ▾</text>
  <text x="560" y="183" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">target</text>
  <rect x="640" y="168" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="182.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">crm.pipeline ▾</text>
  <text x="560" y="215" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">connector</text>
  <rect x="640" y="200" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="214.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">—</text>
  <text x="560" y="247" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">icon</text>
  <rect x="640" y="232" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="246.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">barchart ▾</text>
  <rect x="640" y="160" width="0.1" height="0.1" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="560" y="290" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">screen · query · endpoint · dashboard · page</text>
  <rect x="10" y="180" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A leaf</text>
  <text x="20" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">folders have no type</text>
  <line x1="210" y1="197.0" x2="256" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five types</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what the entry opens</text>
  <line x1="1000" y1="137.0" x2="870" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="1000" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">target</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&lt;app&gt;.&lt;id&gt; for a dashboard</text>
  <line x1="1000" y1="207.0" x2="870" y2="179" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
</svg>

---

## `screen` and `query` — open a screen

The most common leaf kinds. `screen` and `query` open the same view: the target is a read query, and if a screen is designed for it, that screen opens; otherwise the query's rows show in a plain grid. They differ only in what the Inspector's *Target* list offers — designed screens for `screen`, every query for `query`.

The menu item points at a SELECT query; the framework finds the screen wired to that query (see [Create a screen from a query](../screens/create-from-query.md)) and opens it as a TableView.

### Fields

| Field | Notes |
|---|---|
| **`type`** | `query`. |
| **`target`** | The query name — `customers_get`, `security_users_get`. The dropdown is populated with valid queries on the picked connector. |
| **`connector`** | The connector that owns the query. Blank = the menu's app (most common case). Set explicitly only when reading from a different connector. |
| **`params`** | Optional. Bind values into the query's `:placeholder` parameters. The user opens the screen with these values already bound — e.g. a *My open tickets* leaf with `params = { OWNER = "#LOGIN_USER#", STATUS = "OPEN" }`. |

### How the screen resolves

The runtime looks up the screen whose `read_query` matches the menu's `target`:

```
menu leaf → screen with read_query = <target> on connector <connector>
```

When several screens share the same `read_query` (rare), the first match wins.

If no screen is registered for that query, the menu item still opens — the runtime renders a default TableView with the query's columns. Useful for ad-hoc queries that don't justify a full screen definition.

### Example

```toml
[[menus.crm.items]]
id = "pipeline.customers"
parent = "pipeline"
label = "Customers"
l.fr = "Clients"
icon = "users"
type = "query"
target = "customers_get"
```

Opens the screen `crm.customers` (the screen whose `read_query = customers_get`).

```toml
[[menus.crm.items]]
id = "my_open_tickets"
label = "My open tickets"
icon = "ticket"
type = "query"
target = "tickets_get"
params = { OWNER = "#LOGIN_USER#", STATUS = "OPEN" }
```

Same `tickets_get` screen, but the user lands on a pre-filtered view scoped to their own open tickets. The `#LOGIN_USER#` token resolves from the JWT — see [Parameter binding](../queries/parameter-binding.md).

---

## `endpoint` — fire an API endpoint

The second leaf kind: open the HttpRunner with one API connector endpoint pre-selected. The user gets a form prompting for the endpoint's parameters and a *Run* button.

### Fields

| Field | Notes |
|---|---|
| **`type`** | `endpoint`. |
| **`target`** | An endpoint name declared on the API connector. The dropdown lists every endpoint on the picked connector. |
| **`connector`** | The API connector. Blank = the menu's app (works when the app is itself an API connector). |
| **`params`** | Optional. Pre-fill the form fields. |

### When to use

- Custom integrations the user triggers manually (sync from an external system, refresh a cache).
- Operations that aren't naturally a screen — webhook tests, ad-hoc POST.
- Tools and diagnostic endpoints.

### Example

```toml
[[menus.nomaubl.items]]
id = "ppf.sync_directory"
parent = "ppf"
label = "Sync PPF directory"
icon = "refresh-cw"
type = "endpoint"
connector = "ppf"
target = "sync_directory"
```

Opens the HttpRunner for the `ppf` API connector's `sync_directory` endpoint. The user fills any required form fields and clicks *Run*.

---

## `dashboard` — open a dashboard

A dashboard is a page of charts and KPIs declared in `[dashboards.*]`. The menu item points at the dashboard's id.

### Fields

| Field | Notes |
|---|---|
| **`type`** | `dashboard`. |
| **`target`** | `<app>.<id>` — the dashboard `[dashboards.<app>.<id>]`, for example `crm.pipeline`. The dropdown lists every dashboard. |
| **`connector`** | **Must not be set** — the app is part of the target; the validator rejects a stray `connector`. |
| **`params`** | Optional. Pre-fill the dashboard's filters. |

### When to use

- Executive overviews (revenue by region, pipeline by stage).
- Operational dashboards (jobs status, system health).
- Anything that's a layout of charts rather than a single table.

### Example

```toml
[[menus.crm.items]]
id = "pipeline.deals_dashboard"
parent = "pipeline"
label = "Deals dashboard"
icon = "chart-bar"
type = "dashboard"
target = "crm.deals_overview"
```

Opens the dashboard `deals_overview` of the `crm` app — note no `connector` field.

---

## `page` — open a registered frontend route

The escape hatch. A `page` leaf navigates to a hand-written React route — a custom feature area the framework doesn't compose from queries / screens / dashboards. The classic example is the Nomaflow product, which has its own routes (`/nomaflow`, `/nomaflow/jobs/:id`, `/nomaflow/runs/:runId`) for the scheduler UI.

### Fields

| Field | Notes |
|---|---|
| **`type`** | `page`. |
| **`target`** | The route path — `/nomaflow`, `/runs/dashboard`, etc. Routes must be **registered** in the frontend (the menu doesn't create them; it just points at them). |
| **`connector`** | **Must not be set**. The target is a route, not a connector resource. |
| **`params`** | Optional. The runtime appends them as query-string parameters on the route. |

### When to use

- A bundled product (Nomaflow, Nomasx-1's specialised dashboards).
- A custom React component for something queries / screens can't express (live-streaming logs, complex interactive visualisations).
- A third-party component embedded into Liberty.

The `page` type is rare in user-built apps — most teams build with queries / screens / dashboards. Reach for `page` when one of the other three genuinely can't express the surface you need.

### Example

```toml
[[menus.crm.items]]
id = "ops"
label = "Operations"
icon = "settings"

[[menus.crm.items]]
id = "ops.nomaflow"
parent = "ops"
label = "Job scheduler"
icon = "calendar"
type = "page"
target = "/nomaflow"
```

A *Job scheduler* leaf in the `crm` app's Operations folder, pointing at the Nomaflow product's main route.

---

## Folders — group leaves

A folder is the only item kind **without** a `type`. It carries no `target`, no `connector`, no `params` — just `id`, `label`, `icon` and `l` (translations).

### Validation

The schema's validator rejects a folder with any of:

- `target` set — folders don't have targets.
- `connector` set — folders don't open anything.
- `params` non-empty — same.

### Behaviour

Folders are **collapsed away when empty**. If every child of a folder is hidden (e.g. because the user lacks permission on each), the folder itself disappears from the rendered menu. The user never sees an empty folder.

### Nesting

Folders can nest indefinitely. A typical Liberty app uses 2-3 levels:

```
Pipeline (folder)
├── Customers (query)
├── Deals (query)
├── Activities (query)
└── Reports (folder)
    ├── Daily summary (dashboard)
    └── Monthly revenue (query)
```

Deeper than 3 levels usually means the app is over-grouped — flatten when you can.

---

## Cross-cutting rules

### The `connector` field defaults to the app

For `query` and `endpoint` leaves, leaving `connector` blank means "the app's own connector" — i.e. the connector named by the menu key (`[menus.crm]` → `connector = "crm"`).

Set `connector` explicitly when:

- The query lives on a **different** connector — `crm` app showing a leaf that reads from `reporting`.
- You're reading shared data (a `default` connector for framework-wide queries).

For `dashboard` and `page`, the field is **always blank** — the validator enforces it.

### `params` carries fixed values

`params` is a flat map of key → value passed to the target at open time:

```toml
params = { STATUS = "OPEN", REGION = "EU" }
```

For `query` leaves, the values bind to the query's `:placeholder` parameters. For `endpoint`, they pre-fill the HttpRunner's form. For `page`, they become query-string parameters.

The two reserved tokens — `#LOGIN_USER#` and `#SYSDATE#` — work here too: a *My data* leaf with `params = { OWNER = "#LOGIN_USER#" }` lands the user on a view scoped to their own rows.

### Switching `type` resets the fields

In the Inspector, changing `type` from `query` to `dashboard` clears `connector` (since `dashboard` rejects it). Switching from leaf to folder clears `target`, `connector`, `params`. The form prevents invalid combinations from reaching the save.

---

## Picking the right type

| You want to open… | Use |
|---|---|
| A list of rows with optional filter / add / edit. | `screen`. |
| A pre-filtered list (e.g. *My open tickets*). | `screen` with `params`. |
| A query that has no designed screen yet. | `query`. |
| A custom write or read-only API call. | `endpoint`. |
| A page of charts and KPIs. | `dashboard`. |
| A hand-written React feature (Nomaflow-style). | `page`. |

When in doubt, start with `screen` — most user-facing pages are lists. Promote to `dashboard` when the layout is multiple charts; reach for `endpoint` only for API operations that don't fit a screen; reserve `page` for custom React.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| `query` leaf with a `target` that's not a query name. | Clicking the leaf opens a default TableView with no columns. | Pick a real query from the dropdown. |
| `endpoint` leaf on a SQL connector. | Save validation may pass, but at runtime the connector doesn't expose endpoints. | Point at an API connector. |
| `dashboard` with `connector`. | Save validation fails. | Drop the `connector` field. |
| `page` with `connector`. | Save validation fails. | Drop the `connector` field. |
| `params` referencing a placeholder the target query doesn't have. | The bind is silently ignored. | Open the target query, declare the param. |
| `page` pointing at a route that isn't registered. | Clicking the leaf shows a 404 page. | Verify the route exists in the frontend bundle; mistypes are the usual cause. |

---

## What's next

- [Permissions and roles](./permissions-and-roles.md) — the `roles` filter + permission inheritance per leaf type.
- [Translations and icons](./translations-and-icons.md) — per-language labels and icons.
- [Create a screen from a query](../screens/create-from-query.md) — the screen a `query` leaf opens.
