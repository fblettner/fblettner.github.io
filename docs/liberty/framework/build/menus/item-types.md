---
title: Item types
description: "The seven leaf kinds — screen / query / endpoint / dashboard / page / job / url — what each opens, the target field's shape, the connector rule, and when to reach for each."
keywords: [Liberty Framework, menu item, screen, query, endpoint, dashboard, page, target, connector, leaf, folder]
---

# Item types

A menu item is either a **folder** (no `type`) or a **leaf** that opens something. The leaf's `type` decides what that something is and what the `target` / `connector` fields mean.

Seven leaf kinds:

| `type` | Opens | `target` is | `connector` |
|---|---|---|---|
| **`screen`** | A designed screen. | The screen's id, picked from the application's screens. | Usually blank — the screen's own connector runs it. |
| **`query`** | The same grid view, picked from the raw queries. | A SELECT query name. | The connector that owns the query. Blank = the app's own connector. |
| **`endpoint`** | The HttpRunner — fires one API connector endpoint. | An endpoint name. | The API connector. Blank = the app's. |
| **`dashboard`** | A dashboard (charts + KPIs). | `<app>.<id>` of the dashboard. | Must NOT be set (the app is in the target). |
| **`page`** | A registered frontend route — a custom feature area like `/nomaflow`. | The route path. | Must NOT be set. |
| **`url`** | An external address, in a new browser tab. | The address: `https://…`, a path of this server, or `#URL.NAME#/…` — see [External addresses](../settings-app.md#external-urls). | Must NOT be set. |
| **`job`** | The page of a Nomaflow job: its files and parameters, Run, the live log, the previous runs. | The job id. | Must NOT be set. |

This page walks each in detail with concrete examples.

---

## At a glance

<svg viewBox="0 0 1320 490" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mit-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mit-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mit-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mit-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="360" y="20" width="600" height="450" rx="14" fill="url(#mit-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="380" y="40" width="560" height="410" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="394" y="62" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="452.92" y="62" fill="#94a3b8" fontSize="8.6" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="829" y="50" width="99" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="878.5" y="63.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Find dependencies</text>
  <rect x="753" y="50" width="72" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="789.0" y="63.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Find usages</text>
  <rect x="704" y="50" width="45" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="726.5" y="63.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Clone</text>
  <rect x="655" y="52.5" width="41" height="15" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="675.5" y="63.3" fill="#4a9eff" fontSize="7.8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">screen</text>
  <line x1="380" y1="78" x2="940" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="392" y="88" width="53" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="418.5" y="102.3" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="478.0" y="102.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <text x="549.5" y="102.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <line x1="392" y1="116" x2="928" y2="116" stroke="#1f2937" strokeWidth="1"/>
  <text x="392" y="130" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ICON</text>
  <rect x="392" y="135" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="401" y="149.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">users</text>
  <text x="392" y="172" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TYPE</text>
  <rect x="392" y="177" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="401" y="191.5" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">screen</text>
  <text x="439.736" y="191.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Screen (designed view)</text>
  <rect x="392" y="202" width="536" height="140" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="396" y="206" width="528" height="20" rx="4" fill="rgba(74,158,255,0.14)" stroke="transparent" strokeWidth="1"/>
  <text x="404" y="220" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">screen</text>
  <text x="480" y="220" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Screen (designed view)</text>
  <text x="404" y="242" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">query</text>
  <text x="480" y="242" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Query (raw table view)</text>
  <text x="404" y="264" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">endpoint</text>
  <text x="480" y="264" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Endpoint (API call)</text>
  <text x="404" y="286" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">dashboard</text>
  <text x="480" y="286" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Dashboard (widget grid)</text>
  <text x="404" y="308" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">page</text>
  <text x="480" y="308" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Page (frontend route)</text>
  <text x="404" y="330" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">job</text>
  <text x="480" y="330" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Job (run it, follow its log)</text>
  <text x="392" y="362" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="392" y="367" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="401" y="381.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="916" y="381.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="392" y="404" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TARGET</text>
  <rect x="392" y="409" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="401" y="423.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">customers  Customers</text>
  <text x="916" y="423.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="20" y="171" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="186" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type</text>
  <text x="30" y="199" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">blank = folder</text>
  <line x1="200" y1="188.0" x2="392" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="20" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The leaf kinds</text>
  <text x="30" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">screen, query, endpoint, dashboard…</text>
  <line x1="200" y1="249.0" x2="392" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="20" y="403" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="418" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Target</text>
  <text x="30" y="431" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listed for the chosen type</text>
  <line x1="200" y1="420.0" x2="392" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="1120" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Picked entry</text>
  <text x="1130" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its kind as a chip</text>
  <line x1="1120" y1="77.0" x2="605" y2="63" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="1120" y="306" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="321" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">job</text>
  <text x="1130" y="334" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a Nomaflow job to run</text>
  <line x1="1120" y1="323.0" x2="680" y2="326" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="1120" y="370" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="385" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connector</text>
  <text x="1130" y="398" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">query / endpoint only; blank = app's</text>
  <line x1="1120" y1="387.0" x2="928" y2="386" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
</svg>

---

## `screen` and `query` — open a screen

The most common leaf kinds. They open a grid, but not from the same target:

- **`screen`** opens a designed screen. The target is the **screen's id** (`customers`), within the menu's application: the screen opens with its own columns, filters, views and record form — even when another screen reads the same query. The Inspector's *Target* list offers the application's screens, each with its label and id.
- **`query`** opens a query's rows. The target is the **query name** (`customers_get`): the list offers each table's read query (`<table>_get`, labelled with the table) and the standalone queries. When a screen is designed on that query, its column settings apply; otherwise the rows show in a plain grid.

### Fields

| Field | Notes |
|---|---|
| **`type`** | `screen` or `query`. |
| **`target`** | `screen`: the screen id — `customers`, `security_users`. `query`: the query name — `customers_get`. The dropdown lists the valid targets for the chosen type and connector. |
| **`connector`** | `query`: the connector that owns the query; blank = the menu's app (most common case). `screen`: usually blank — the screen's own connector runs its queries. |
| **`params`** | Optional. Fixed values for the query's `:placeholder` parameters — e.g. a *My open tickets* leaf with `params = { OWNER = "#LOGIN_USER#", STATUS = "OPEN" }`. |

### Who sees the leaf

A `screen` leaf shows to whoever may run the screen's read query on the screen's connector (`sql:<connector>:<read query>`); a `query` leaf, to whoever may run the query itself. The entry's `roles` narrow it further — see [Permissions and roles](./permissions-and-roles.md).

### Example

```toml
[[menus.crm.items]]
id = "pipeline.customers"
parent = "pipeline"
label = "Customers"
l.fr = "Clients"
icon = "users"
type = "screen"
target = "customers"
```

Opens the screen `customers` of the `crm` application.

```toml
[[menus.crm.items]]
id = "my_open_tickets"
label = "My open tickets"
icon = "ticket"
type = "query"
target = "tickets_get"
params = { OWNER = "#LOGIN_USER#", STATUS = "OPEN" }
```

Opens the rows of `tickets_get`, with the screen designed on that query, bound to the user's own open tickets. The `#LOGIN_USER#` token resolves from the JWT — see [Parameter binding](../queries/parameter-binding.md).

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
| **Tests pages** | `/liberty/tests` and `/liberty/test-results` put the [Tests](../tests.md) and [Test results](../../../monitoring/test-results.md) pages in an application's menu; the entries show to the holders of `tests:view`. |
| **`connector`** | **Must not be set**. The target is a route, not a connector resource. |
| **`params`** | Optional. The runtime appends them as query-string parameters on the route. |

### The Data Explorer \{#explorer\}

`/explorer` opens the [Data Explorer](../../explorer/overview.md) on the application's first model; the entry shows to whoever may use one of the application's models. `/explorer/<app>/<model>` opens it on one model — `/explorer/crm/sales` — and the model picker still lets the user switch; the entry asks for `explorer:<app>:<model>`.

A saved and shared analysis or dashboard of the Explorer is put in a menu from the Explorer itself, with **Add to a menu** (application, folder, label) — see [Add to a menu](../../explorer/saved-and-dashboards.md#menu). The entry it creates is a `page` leaf whose target is:

| Target | Opens |
|---|---|
| `/explorer/<app>/<model>/a/<id>` | The saved analysis `<id>`, its result at once. |
| `/explorer/<app>/<model>/d/<id>` | The Explorer dashboard `<id>`. |

Like a link to the model, it shows to whoever may use the model (`explorer:<app>:<model>`).

### A page an application ships \{#app-page\}

`/app/<app>/<page>` opens a page an application ships with its plugins — a structure to browse, a guided flow, anything that is neither a grid nor a form. The entry needs the permission `page:<app>:<page>`. See [Plugins → Pages an application ships](../../apps/plugins.md#pages).

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

## `job` — run a Nomaflow job \{#job\}

A `job` leaf opens the page of a Nomaflow job for users who do not administer Nomaflow: a file picker per load step that needs a file, the parameters the job declares for its users, **Run**, the log followed live and the previous runs.

### Fields

| Field | Value |
|---|---|
| **`type`** | `job` — *Job (run it, follow its log)* in the type list. |
| **`target`** | The job id. The dropdown lists every job with the first line of its description. |
| **`connector`** | Must NOT be set. |
| **`params`** | Optional: `{ preset = "Licences" }` runs the job with one of its presets — one job, several menu entries. |

The item needs the permission `job:<id>` (rule type **Job** in a role's *Beyond the menus*); `!job:<id>` hides it. See [Run a job from an application's menu](../../../nomaflow/jobs/run-from-menu.md).

### Example

```toml title="menus.toml"
[[menus.sales.items]]
id = "import_sales"
parent = "import"
label = "Sales file (one month)"
type = "job"
target = "sales-load-month"
```

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
| A hand-written React feature (Nomaflow-style), or a page an application ships. | `page`. |
| A Nomaflow job users run themselves (file, parameters, log). | `job`. |
| Another application, in a new browser tab. | `url`. |

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
