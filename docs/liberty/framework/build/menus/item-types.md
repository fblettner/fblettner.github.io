---
title: Item types
description: "The four leaf kinds — query / endpoint / dashboard / page — what each opens, the target field's shape, the connector rule, and when to reach for each."
keywords: [Liberty Framework, menu item, query, endpoint, dashboard, page, target, connector, leaf, folder]
---

# Item types

A menu item is either a **folder** (no `type`) or a **leaf** that opens something. The leaf's `type` decides what that something is and what the `target` / `connector` fields mean.

Four leaf kinds:

| `type` | Opens | `target` is | `connector` |
|---|---|---|---|
| **`query`** | A TableView screen — driven by the screen wired to this query. | A SELECT query name. | The connector that owns the query. Blank = the app's own connector. |
| **`endpoint`** | The HttpRunner — fires one API connector endpoint. | An endpoint name. | The API connector. Blank = the app's. |
| **`dashboard`** | A dashboard (charts + KPIs). | A dashboard id. | Must NOT be set (dashboards live in a flat namespace). |
| **`page`** | A registered frontend route — a custom feature area like `/nomaflow`. | The route path. | Must NOT be set. |

This page walks each in detail with concrete examples.

---

## `query` — open a screen

The most common leaf kind. The menu item points at a SELECT query; the framework finds the screen wired to that query (see [Create a screen from a query](../screens/create-from-query.md)) and opens it as a TableView.

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
| **`target`** | The dashboard id (matches a `[dashboards.<id>]` key). The dropdown lists every dashboard. |
| **`connector`** | **Must not be set**. Dashboards live in a flat namespace; the validator rejects a stray `connector`. |
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
target = "deals_overview"
```

Opens the dashboard with id `deals_overview` — note no `connector` field.

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
| A list of rows with optional filter / add / edit. | `query`. |
| A pre-filtered list (e.g. *My open tickets*). | `query` with `params`. |
| A custom write or read-only API call. | `endpoint`. |
| A page of charts and KPIs. | `dashboard`. |
| A hand-written React feature (Nomaflow-style). | `page`. |

When in doubt, start with `query` — most user-facing screens are list-based. Promote to `dashboard` when the layout is multiple charts; reach for `endpoint` only for API operations that don't fit a screen; reserve `page` for custom React.

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
- [Translations and icons](./translations-and-icons.md) — per-language labels and the Lucide icon picker.
- [Create a screen from a query](../screens/create-from-query.md) — the screen a `query` leaf opens.
