---
title: Dashboards
description: "A dashboard lays out KPIs, charts and tables over connector queries in a responsive grid. Built and edited from Settings → Dashboards with drag-and-drop panels; every panel picks a data source, a visualisation and an optional drill-down."
keywords: [Liberty Framework, dashboard, KPI, stat, chart, table, panel, drill-down, settings, layout]
---

# Dashboards

:::info[Deep reference]
This page documents dashboard architecture, panel types and the shared filter bar. The Build group doesn't currently carry a dedicated Dashboards subsection — this page is the canonical entry point for the topic.
:::

A **dashboard** is a single page that groups KPIs, charts and tables over a common context — typically *the current period* + *a chosen scope* (a company, a region, a team). Defined from **Settings → Dashboards** with a drag-and-drop **layout grid**; each panel picks a data source (a connector query or a saved chart), a panel **type** (stat / chart / table) and renders accordingly.

The dashboard is the natural surface for executive views ("how are we doing today?") and for operational overviews ("which jobs are running, which screens have the most rejections"). Each panel can drill down to a screen pre-filtered to the underlying rows.

---

## At a glance

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="db-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#db-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">A dashboard at runtime</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="78" y="120" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📅 May 2026 ▾   Company: All ▾   Status ▾   ↻ Refresh   ⬇ Export PDF</text>

  <rect x="60" y="148" width="200" height="80" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="160" y="170" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Invoices issued</text>
  <text x="160" y="200" fill="#4a9eff" fontSize="22" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">12 481</text>
  <text x="160" y="220" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▲ +12% vs prev. month</text>

  <rect x="280" y="148" width="200" height="80" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="170" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">VAT collected</text>
  <text x="380" y="200" fill="#4a9eff" fontSize="22" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">2 350 K€</text>
  <text x="380" y="220" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">declared monthly</text>

  <rect x="500" y="148" width="200" height="80" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="600" y="170" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Rejected at PA</text>
  <text x="600" y="200" fill="#f87171" fontSize="22" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">29</text>
  <text x="600" y="220" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▼ -8% vs prev. month</text>

  <rect x="720" y="148" width="220" height="80" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="830" y="170" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Avg processing time</text>
  <text x="830" y="200" fill="#4a9eff" fontSize="22" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">4.2 s</text>
  <text x="830" y="220" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▲ stable</text>

  <rect x="60" y="244" width="540" height="60" rx="10" fill="rgba(192,132,252,0.06)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="76" y="262" fill="#c084fc" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHART · Invoices issued per month</text>
  <text x="76" y="290" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">bar — last 12 months</text>

  <rect x="620" y="244" width="320" height="60" rx="10" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="636" y="262" fill="#22c55e" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE · Recent rejections</text>
  <text x="636" y="290" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">10 rows — click to drill into Invoices</text>
</svg>

The mockup shows the runtime view; the builder behind it is documented below.

---

## Settings → Dashboards

The catalogue lists every dashboard on the install.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Dashboards</div>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ New dashboard</span>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1fr 80px 60px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Id</div><div>Title</div><div>App</div><div>Panels</div><div></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1fr 80px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>billing-overview</div><div>Billing overview</div><div>billing</div><div>8</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1fr 80px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>sales-pipeline</div><div>Sales pipeline</div><div>crm</div><div>6</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1fr 80px 60px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>tech-dashboard</div><div>Technical dashboard</div><div>_default</div><div>10</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
</div>

Click *+ New dashboard* or any row to open the dashboard builder.

---

## The dashboard builder

A two-pane editor: **layout grid** on the left (drag-and-drop), **panel editor** on the right (configures the selected panel).

### General fields (top of the editor)

| Field | Effect |
|---|---|
| **Id** | Identifier — surfaces in the URL (`/dashboards/<id>`), the menu picker and the permission code (`dashboard:<id>`). |
| **Title** | Localised display title. |
| **App** | App namespace. Drives the workspace the dashboard appears in. |
| **Description** | Free text. Surfaces on the menu picker. |
| **Shared filter bar** | Optional list of parameters exposed at the top of the dashboard at runtime. Every panel that references the same parameter inherits the value. |
| **Default page** | Optional — the dashboard's home page in the same app. Sets a "home" icon on the menu entry. |

### Layout grid

A responsive 12-column grid. Each cell is a **panel** that can span 1–12 columns wide and 1–6 rows tall. The operator drags from a palette of panel types onto the grid:

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '14px'}}>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Palette</div>
      <div style={{display: 'grid', gap: '6px'}}>
        <span style={{padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>📊 Stat (KPI)</span>
        <span style={{padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>📈 Chart</span>
        <span style={{padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>📋 Table</span>
        <span style={{padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>📝 Markdown</span>
        <span style={{padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.6}}>🗂 Grid (planned)</span>
      </div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Layout · 12-col grid</div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4px'}}>
        <div style={{gridColumn: 'span 3', height: '40px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#60a5fa'}}>📊 stat</div>
        <div style={{gridColumn: 'span 3', height: '40px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#60a5fa'}}>📊 stat</div>
        <div style={{gridColumn: 'span 3', height: '40px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#60a5fa'}}>📊 stat</div>
        <div style={{gridColumn: 'span 3', height: '40px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#60a5fa'}}>📊 stat</div>
        <div style={{gridColumn: 'span 7', height: '80px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#c084fc'}}>📈 chart (bar)</div>
        <div style={{gridColumn: 'span 5', height: '80px', background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#22c55e'}}>📋 table</div>
      </div>
      <div style={{marginTop: '10px', display: 'flex', gap: '6px'}}>
        <span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Add row</span>
        <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Preview</span>
      </div>
    </div>
  </div>
</div>

| Control | Effect |
|---|---|
| **Drag from palette** | Adds a new panel at the end of the grid. |
| **Resize handles** | Drag a panel's edge to resize. Snaps to columns. |
| **Group label** | Optional. Adds a section header before a row of panels — e.g. *Sales overview*, *Operational health*. |
| **Click a panel** | Opens the **panel editor** on the right. |
| **✕ on a panel** | Removes it from the layout. |
| **Preview** | Renders the full dashboard with live data — useful before saving. |

---

## Panel types

### Stat (KPI)

A single number with optional delta vs a previous period.

| Field | Effect |
|---|---|
| **Title** | Shown above the number. |
| **Connector** / **Query** | The source. The query must return at least one row with one numeric column. |
| **Value column** | Column whose first-row value is rendered as the headline number. |
| **Format** | Number format ("`1 234`", "`1.2 K`", "`€ 12 345,00`"). |
| **Delta column** | Optional. A signed number rendered below the value as a coloured ▲ / ▼ chip. |
| **Delta direction** | `Higher is better` / `Lower is better` — drives the colour. |
| **Trend sparkline** | Optional. Points at a query returning a small time series; rendered as a 10-point sparkline. |

### Chart

Wraps a [chart](./charts.md) definition.

| Field | Effect |
|---|---|
| **Chart** | Dropdown of charts defined under *Settings → Charts*. |
| **Override parameters** | Optional per-panel overrides of the chart's fixed values. |
| **Drill-down screen** | Optional. Clicking a data point opens the named screen pre-filtered. |

### Table

A small, read-only grid (typically 5–20 rows). Useful for "top N" / "recent" lists.

| Field | Effect |
|---|---|
| **Connector** / **Query** | The source. |
| **Columns** | Sortable list of columns to show, with widths and per-column formats. |
| **Row limit** | Default 20. |
| **Click action** | `Open dialog` (uses the linked screen's dialog) / `Open screen filtered` / `None`. |

### Markdown

Static text block, useful for annotations or contextual explanations between panels.

| Field | Effect |
|---|---|
| **Content** | Markdown source. |
| **Background** | None / Subtle (default) / Accent. |

### Grid (planned)

Inline screen-style grid with the full filter toolbar. On the roadmap.

---

## The shared filter bar

The top of a dashboard shows a row of inputs derived from the **Shared filter bar** declared at the top of the builder. Each entry:

| Field | Effect |
|---|---|
| **Name** | Internal parameter name — panels reference it via `${dashboard.<name>}` in their parameter overrides. |
| **Label** | Shown above the input. |
| **Type** | `string` / `date` / `daterange` / `lookup` / `enum`. Drives the widget. |
| **Default** | Initial value. Date tokens (`${today}`, `${month.first}`) are accepted. |
| **Lookup** | When *Type* is `lookup`, points at a dictionary lookup. |

Operators set the filter once at the top of the dashboard; every panel inheriting the parameter re-runs with the new value. This is what makes dashboards feel coherent — one input, many panels updated.

---

## Drill-down

Each panel can declare a **drill-down screen** — clicking the panel (or a specific data point on charts / tables) opens the named screen pre-filtered to the underlying rows. The framework handles the parameter pass automatically: the panel knows what it queried, the screen accepts the same parameter names.

For finer control, the drill-down field accepts a *URL pattern* with `:name` placeholders that the framework fills from the click context.

---

## Permissions

A dashboard is gated by `dashboard:<id>`. Each panel inherits the underlying connector query's permission — a user without `sql:billing:monthly-invoice-counts` doesn't see the chart panel referencing it. The framework **prunes the panel silently** rather than rendering an error placeholder, so dashboards remain coherent even when the caller lacks every permission.

The Dashboards builder tab is gated by `settings:dashboards`.

---

## Tips & best practices

- **Lead with stats.** The first row of a dashboard should be 3–4 stat panels — the operator's eye lands there first.
- **Group with section headers.** Two visual rows separated by a *Group label* read much better than six panels in a wall.
- **Keep panels under 12 per dashboard.** Past that, the page scrolls and the value of "everything in one place" evaporates. Split into multiple dashboards.
- **Use the shared filter bar for time.** Most dashboards revolve around a period; expose the date range there once and every panel inherits it.
- **Wire drill-downs.** A stat that's an island is half the value of a stat that opens the relevant screen.
- **Use the Preview button.** Catches "this panel has no data on a fresh install" before saving.

---

## Under the hood

Dashboard definitions are stored in `liberty-apps/config/dashboards.toml` and the underlying charts in `charts.toml`. Operators **do not edit these files by hand** in normal operation; the Dashboards builder is the canonical interface, with the *Raw TOML* tab as the escape hatch for the rare edit a builder gap blocks.

---

## What's next

- [Charts](./charts.md) — the chart definitions a Chart panel references.
- [Screens](./build/screens/overview.md) — the screens a drill-down opens.
- [Parameter binding](./build/queries/parameter-binding.md) — how the shared filter bar feeds every panel.
- [Menus](./build/menus/overview.md) — wire the dashboard into the sidebar.
