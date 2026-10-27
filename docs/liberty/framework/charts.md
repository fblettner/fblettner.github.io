---
title: Charts
description: "A saved chart draws the result of a connector query as bars, lines, areas or a pie: an X column, one or more series with their colour and axis, and an aggregation. Built in Settings → Charts or saved from a screen's Chart view, then reused in dashboards."
keywords: [Liberty Next, charts, bar, line, area, pie, series, aggregation, dual axis, dashboards, Chart view, charts.toml]
---

# Charts

A **chart** draws the result of a connector's query: an X column, one or more series, and an aggregation for the rows that share the same X value. It is saved under a name and reused in [dashboards](./dashboards.md); the same chart settings are available on the fly in a screen's **Chart** view.

Four types are available: **bar**, **line**, **area** and **pie**.

---

## At a glance

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cht-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cht-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cht-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cht-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="400" rx="14" fill="url(#cht-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">[charts.sales.revenue_by_month]</text>
  <rect x="240" y="58" width="115" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="271.5" y="73.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="304" y="59" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="329.0" y="73.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <text x="240" y="100" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="240" y="106" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="120.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Line ▾</text>
  <text x="366" y="100" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">X axis</text>
  <rect x="366" y="106" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="376" y="120.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">MONTH ▾</text>
  <text x="502" y="100" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Series</text>
  <rect x="502" y="106" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="512" y="120.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">REVENUE ▾</text>
  <rect x="616" y="109" width="16" height="16" rx="3" fill="#4a9eff"/>
  <rect x="636" y="106" width="22" height="22" rx="5" fill="url(#cht-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="647.0" y="120.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">L</text>
  <rect x="660" y="106" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="671.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">R</text>
  <rect x="690" y="106" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="700" y="120.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">MARGIN ▾</text>
  <rect x="794" y="109" width="16" height="16" rx="3" fill="#22c55e"/>
  <rect x="814" y="106" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">L</text>
  <rect x="838" y="106" width="22" height="22" rx="5" fill="url(#cht-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="849.0" y="120.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">R</text>
  <rect x="868" y="106" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="880.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="240" y="152" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Aggregate</text>
  <rect x="240" y="158" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="172.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Sum ▾</text>
  <rect x="240" y="196" width="720" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <line x1="280" y1="230" x2="920" y2="230" stroke="#1f2937" strokeWidth="1"/>
  <line x1="280" y1="270" x2="920" y2="270" stroke="#1f2937" strokeWidth="1"/>
  <line x1="280" y1="310" x2="920" y2="310" stroke="#1f2937" strokeWidth="1"/>
  <line x1="280" y1="350" x2="920" y2="350" stroke="#1f2937" strokeWidth="1"/>
  <polyline points="333,330 440,310 547,325 653,285 760,260 867,272" fill="none" stroke="#4a9eff" strokeWidth="2.5"/>
  <polyline points="333,300 440,290 547,312 653,270 760,262 867,280" fill="none" stroke="#22c55e" strokeWidth="2.5"/>
  <text x="333.3333333333333" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <text x="440.0" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <text x="546.6666666666667" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <text x="653.3333333333333" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <text x="760.0" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <text x="866.6666666666666" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="10" y="50" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two tabs</text>
  <text x="20" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">data source, then the chart</text>
  <line x1="210" y1="67.0" x2="240" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cht-arrow)"/>
  <rect x="10" y="140" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type and X axis</text>
  <text x="20" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bar, line, area, pie</text>
  <line x1="210" y1="157.0" x2="240" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cht-arrow)"/>
  <rect x="10" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aggregate</text>
  <text x="20" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rows sharing the same X</text>
  <line x1="210" y1="277.0" x2="240" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cht-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per series</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">column, colour, left/right axis</text>
  <line x1="1000" y1="77.0" x2="780" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cht-arrow)"/>
  <rect x="1000" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Live preview</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sample of the query's rows</text>
  <line x1="1000" y1="267.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cht-arrow)"/>
</svg>

---

## Settings → Charts \{#list\}

Charts are grouped by connector: the **scope** chips at the top pick a connector, and **Add a connector scope** opens a new one. The list shows each chart of the scope with its label, its id and an *override* badge when it is marked as a local customisation. Each row has:

| Button | Effect |
|---|---|
| **Find usages** | The dashboards that show the chart. |
| **Find dependencies** | Lists what the chart depends on (query, connector…) and downloads the chart with the ticked items as a package. |
| **Rename** | Changes the chart's id. |
| **Clone** | Copies the chart under a new id. |
| **Delete** | Removes the chart. |

**Add chart** opens the editor for a new chart in the current scope; clicking a row opens it for editing.

---

## The editor \{#editor\}

The editor has two tabs.

### General \{#general\}

| Field | Effect |
|---|---|
| **Id** | The chart's identifier: letters, digits, underscores and hyphens. Dashboards refer to the chart by this id. |
| **Label** | The chart's title in lists and dashboards. |
| **Description** | Optional. |
| **Connector** | The connector of the scope — fixed; to move a chart to another connector, recreate it in that scope. |
| **Query** | The read query whose result the chart draws. The buttons next to it edit the query, clone it or create a new one without leaving the editor. |

### Chart \{#chart\}

The tab loads a sample of the query's rows and draws the chart as it is set:

| Field | Effect |
|---|---|
| **Chart** | The type: bar, line, area or pie. |
| **X axis** | The column along the X axis — the slice labels on a pie. |
| **Series** | One line per Y column: the column, a colour swatch, and **L** / **R** to put the series on the left or the right Y axis. **+** adds a series. A pie uses the first series only. |
| **Pivot by** | Optional, not on a pie. A column whose distinct values become the series: one series per value (a process, a status), each the aggregate of the first Y column. A query returning *refresh date · process · lines* gives one bar per refresh, stacked by process, without pivoting in SQL. |
| **Aggregate** | How rows sharing the same X value are combined: **Sum**, **Average**, **Count** (counts rows, ignores the Y value), **Min**, **Max**, or **None (per row)** to keep each row — for a time series whose X is already unique. |

The Y axis shows compact ticks (1.2k, 27.5M); the tooltip gives the full figure. As soon as one series is on the right axis, the chart gets a second Y axis — useful for two scales, such as an amount and a count. The legend shows when there is more than one series. Without a colour, a series takes the next colour of the palette.

An X column and at least one series are required to save.

---

## From a screen's Chart view \{#from-a-screen\}

The **Chart** button of a screen switches the grid to a chart of the rows on display, with the same settings (type, X axis, series, aggregation). Two extras appear there:

- **Load saved** — applies a saved chart built on the same connector and query;
- **Save…** — saves the current chart under an id, a label and a description, ready for dashboards. Only a superuser sees this button.

---

## In a dashboard \{#in-a-dashboard\}

A dashboard's **Chart** widget shows a saved chart by its id, or holds its own chart definition. A change to the saved chart shows on every dashboard that uses it. See [Dashboards](./dashboards.md).

---

## Upgrades \{#override\}

The *override* badge flags a chart marked as a local customisation: an upgrade package does not overwrite it. See [Packages](./build/packages.md).

---

## What's next

- [Dashboards](./dashboards.md) — put charts, figures and tables side by side.
- [Connectors](./connectors.md) — the queries a chart reads.
- [Saved views](./saved-views.md) — what a user can keep from a screen.
