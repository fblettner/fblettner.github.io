---
title: Dashboards
description: "A dashboard lays out KPIs and charts over named connector queries. Bar, line, pie and stat panels are configured in TOML — the React DashboardView renders the layout, the API streams the rows."
keywords: [Liberty Next, dashboard, chart, bar, line, pie, KPI, panel, dashboards.toml, layout]
---

# Dashboards

A **Dashboard** is a layout of charts and KPI cards over the same connector queries the [Screens](./screens.md) use. One file (`config/dashboards.toml`) declares every dashboard the app ships. The React `DashboardView` reads the layout, fans out one query per panel, and renders the grid.

Dashboards are hot-reloadable along with the rest of the config.

---

## At a glance

<svg viewBox="0 0 1000 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="db-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="db-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="db-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="920" height="380" rx="14" fill="url(#db-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">📊 Users overview · Dashboard</text>
  <rect x="860" y="50" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="900" y="65" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Refresh</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="80" rx="10" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1.2"/>
  <text x="76" y="120" fill="#64748b" fontSize="9" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USERS · TOTAL</text>
  <text x="76" y="152" fill="#4a9eff" fontSize="28" fontWeight="800" fontFamily="system-ui, sans-serif">1 248</text>
  <text x="76" y="170" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">+12 this month</text>

  <rect x="280" y="100" width="200" height="80" rx="10" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.35)" strokeWidth="1.2"/>
  <text x="296" y="120" fill="#64748b" fontSize="9" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIVE</text>
  <text x="296" y="152" fill="#4ade80" fontSize="28" fontWeight="800" fontFamily="system-ui, sans-serif">1 102</text>
  <text x="296" y="170" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">88 % of total</text>

  <rect x="500" y="100" width="200" height="80" rx="10" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.35)" strokeWidth="1.2"/>
  <text x="516" y="120" fill="#64748b" fontSize="9" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">INACTIVE</text>
  <text x="516" y="152" fill="#f87171" fontSize="28" fontWeight="800" fontFamily="system-ui, sans-serif">146</text>
  <text x="516" y="170" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">12 % of total</text>

  <rect x="720" y="100" width="200" height="80" rx="10" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.35)" strokeWidth="1.2"/>
  <text x="736" y="120" fill="#64748b" fontSize="9" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ADMINS</text>
  <text x="736" y="152" fill="#c084fc" fontSize="28" fontWeight="800" fontFamily="system-ui, sans-serif">18</text>
  <text x="736" y="170" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">3 added · 1 removed</text>

  <rect x="60" y="200" width="440" height="200" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="222" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USERS PER STATUS · BAR</text>
  <line x1="80" y1="380" x2="480" y2="380" stroke="#334155" strokeWidth="1"/>

  <rect x="100" y="270" width="40" height="110" fill="rgba(74,158,255,0.45)"/>
  <text x="120" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Active</text>
  <rect x="160" y="320" width="40" height="60" fill="rgba(255,159,10,0.45)"/>
  <text x="180" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Pending</text>
  <rect x="220" y="350" width="40" height="30" fill="rgba(248,113,113,0.45)"/>
  <text x="240" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Disabled</text>
  <rect x="280" y="305" width="40" height="75" fill="rgba(192,132,252,0.45)"/>
  <text x="300" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Admin</text>
  <rect x="340" y="290" width="40" height="90" fill="rgba(50,215,75,0.45)"/>
  <text x="360" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Read-only</text>
  <rect x="400" y="345" width="40" height="35" fill="rgba(148,163,184,0.45)"/>
  <text x="420" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Other</text>

  <rect x="520" y="200" width="400" height="200" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="536" y="222" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CREATED PER MONTH · LINE</text>
  <line x1="540" y1="380" x2="900" y2="380" stroke="#334155" strokeWidth="1"/>

  <polyline points="560,360 620,330 680,300 740,310 800,260 860,240 900,250" fill="none" stroke="#4a9eff" strokeWidth="2"/>
  <circle cx="560" cy="360" r="3" fill="#4a9eff"/>
  <circle cx="620" cy="330" r="3" fill="#4a9eff"/>
  <circle cx="680" cy="300" r="3" fill="#4a9eff"/>
  <circle cx="740" cy="310" r="3" fill="#4a9eff"/>
  <circle cx="800" cy="260" r="3" fill="#4a9eff"/>
  <circle cx="860" cy="240" r="3" fill="#4a9eff"/>
  <circle cx="900" cy="250" r="3" fill="#4a9eff"/>

  <text x="560" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Jan</text>
  <text x="620" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Feb</text>
  <text x="680" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Mar</text>
  <text x="740" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Apr</text>
  <text x="800" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">May</text>
  <text x="860" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Jun</text>
  <text x="900" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Jul</text>
</svg>

---

## Defining a dashboard

```toml
[dashboards.myapp.overview]
label       = "Users overview"
description = "Snapshot of accounts, statuses and recent growth."
auto_load   = true

# One panel per KPI / chart
[[dashboards.myapp.overview.panels]]
id          = "users_total"
type        = "stat"
label       = "Users · total"
query       = "users_count"          # any SELECT — first row, first column wins
columns     = 3                       # CSS-grid width inside the dashboard
delta_field = "delta_month"           # optional secondary number

[[dashboards.myapp.overview.panels]]
id      = "users_per_status"
type    = "bar"
label   = "Users per status"
query   = "users_by_status"           # SELECT status, count(*) FROM users GROUP BY status
columns = 6
x       = "status"
y       = "count"

[[dashboards.myapp.overview.panels]]
id      = "created_per_month"
type    = "line"
label   = "Created per month"
query   = "users_created_per_month"
columns = 6
x       = "month"
y       = "count"

[[dashboards.myapp.overview.panels]]
id      = "users_by_role"
type    = "pie"
label   = "Users by role"
query   = "users_by_role"
columns = 4
slice   = "role"
value   = "count"
```

The CSS-grid width is **12 columns**. A panel with `columns = 6` takes half a row; two `columns = 3` plus one `columns = 6` share a row.

---

## Panel types

| `type` | What it renders | Required fields |
|---|---|---|
| `stat` | A single big number with an optional delta below. | `query`. Reads the first row's first column. `delta_field` optional. |
| `bar` | Vertical bars per category. | `x` (category), `y` (numeric). |
| `line` | A line over a time / ordered axis. | `x`, `y`. Sorted by `x` as returned. |
| `pie` | Pie chart per slice. | `slice` (category), `value` (numeric). |
| `grid` *(planned)* | A small DataTable inline. | `query`, optional `columns` hints. |

Each panel binds to **one** named query on the screen's connector — or another connector when the panel sets `connector = "other"`. Permission is `sql:<connector>:<query>` — a panel the caller cannot run is dropped, the grid collapses around it.

---

## Layout

A dashboard's panels render in declaration order, flowing left-to-right inside a 12-column grid. A panel with no `columns` defaults to `4` (three side-by-side).

Optional layout knobs:

| Field | Effect |
|---|---|
| `columns` | Panel width (1 – 12). Wraps to the next row when overflowing. |
| `rows` | Optional vertical span. Default `1`. |
| `group` | Tag panels with a group label — the React UI prints a section header above the first panel of each group. |
| `auto_load` | Run the panel's query on dashboard open. Defaults to the dashboard-level `auto_load`. |

---

## REST endpoints

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/api/dashboards` | Every accessible dashboard per app. |
| `GET` | `/api/dashboards/{app}` | One app's dashboards. |
| `GET` | `/api/dashboards/{app}/{id}` | The dashboard's full layout. |
| `POST` | `/api/dashboards/{app}/{id}/refresh` | Re-fetch every panel server-side (proxied to the underlying `/api/query/…`). |

The `DashboardView` calls `/api/query/{connector}/{name}` directly per panel — the same gate as a TableView. A panel without the required permission is silently dropped.

---

## Tips & best practices

- **Reuse the screen's queries.** A dashboard rarely needs new SQL — a `users_by_status` `GROUP BY` is one extra query alongside `users_get`, in the same connector. Keeps the dictionary one and the same.
- **Stat panels are cheap; pie panels are not.** A pie over thousands of slices reads poorly. When the cardinality grows past 8, switch to a bar with a `LIMIT N` plus an *Other* bucket.
- **Pick a default `columns` per panel type.** Stats look right at 3 (four-up); bar / line at 6 (two-up); pie at 4. The grid then accommodates the mix without arithmetic.
- **A dashboard is permission-pruned.** Panels whose query the caller cannot run are dropped. The layout collapses cleanly — design with that in mind: do not chain panels that depend on each other.
