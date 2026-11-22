---
title: Charts
description: "A saved chart draws the result of a connector query as bars, lines, areas or a pie: an X column, one or more series with their colour and axis, and an aggregation. Built in Liberty Next → Insight → Charts or saved from a screen's Chart view, then reused in dashboards."
keywords: [Liberty Next, charts, bar, line, area, pie, series, aggregation, dual axis, dashboards, Chart view, charts.toml]
---

# Charts

A **chart** draws the result of a connector's query: an X column, one or more series, and an aggregation for the rows that share the same X value. It is saved under a name and reused in [dashboards](./dashboards.md); the same chart settings are available on the fly in a screen's **Chart** view.

Four types are available: **bar**, **line**, **area** and **pie**.

---

## At a glance

<svg viewBox="0 0 1200 482" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="che-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="che-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="che-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="che-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="448" rx="14" fill="url(#che-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▥</text>
  <text x="258" y="46" fill="#e2e8f0" fontSize="11.5" fontWeight="700" fontFamily="system-ui, sans-serif">Revenue by month</text>
  <text x="370" y="46" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">sales · revenue_by_month</text>
  <rect x="916" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="927.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <rect x="942" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="221" y1="62" x2="979" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="244" y="84" fill="#94a3b8" fontSize="10.5" fontFamily="system-ui, sans-serif">☰  General</text>
  <text x="328.8" y="84" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▥  Chart</text>
  <line x1="324.8" y1="95" x2="381.84000000000003" y2="95" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="221" y1="96" x2="979" y2="96" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="116" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHART</text>
  <rect x="240" y="122" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="136.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Line              ▾</text>
  <text x="380" y="116" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">X AXIS</text>
  <rect x="380" y="122" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="136.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">MONTH            ▾</text>
  <text x="520" y="116" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PIVOT BY</text>
  <rect x="520" y="122" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="136.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">One series per value  ▾</text>
  <text x="240" y="164" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERIES</text>
  <rect x="240" y="170" width="460" height="36" rx="6" fill="none" stroke="#334155" strokeWidth="1.2" strokeDasharray="4 3"/>
  <rect x="248" y="175" width="210" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="253" y="179" width="104" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="263" y="191.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">REVENUE        ▾</text>
  <rect x="364" y="181" width="14" height="14" rx="3" fill="#4a9eff"/>
  <rect x="384" y="179" width="18" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="393.0" y="191.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">L</text>
  <rect x="406" y="179" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="415.0" y="191.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">R</text>
  <text x="440" y="192" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="464" y="175" width="210" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="469" y="179" width="104" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="479" y="191.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">MARGIN        ▾</text>
  <rect x="580" y="181" width="14" height="14" rx="3" fill="#4ade80"/>
  <rect x="600" y="179" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="609.0" y="191.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">L</text>
  <rect x="622" y="179" width="18" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="631.0" y="191.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">R</text>
  <text x="656" y="192" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="688" y="193" fill="#94a3b8" fontSize="13" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="714" y="164" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AGGREGATE</text>
  <rect x="714" y="170" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="724" y="184.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Sum              ▾</text>
  <rect x="240" y="216" width="720" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <line x1="280" y1="236.0" x2="940" y2="236.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="274" y="239.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">120k</text>
  <line x1="280" y1="271.0" x2="940" y2="271.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="274" y="274.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">90k</text>
  <line x1="280" y1="306.0" x2="940" y2="306.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="274" y="309.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">60k</text>
  <line x1="280" y1="341.0" x2="940" y2="341.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="274" y="344.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">30k</text>
  <line x1="280" y1="376.0" x2="940" y2="376.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="274" y="379.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="946" y="239.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">40%</text>
  <text x="946" y="274.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">30%</text>
  <text x="946" y="309.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">20%</text>
  <text x="946" y="344.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">10%</text>
  <text x="946" y="379.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">0%</text>
  <polyline points="300.0,316.0 424.0,304.0 548.0,310.0 672.0,278.0 796.0,256.0 920.0,264.0" fill="none" stroke="#4a9eff" strokeWidth="2"/>
  <polyline points="300.0,296.0 424.0,290.0 548.0,306.0 672.0,284.0 796.0,272.0 920.0,280.0" fill="none" stroke="#4ade80" strokeWidth="2"/>
  <text x="300.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <text x="424.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <text x="548.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <text x="672.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <text x="796.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <text x="920.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <circle cx="530.0" cy="402" r="3.5" fill="#4ade80"/>
  <text x="537.0" y="405" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">MARGIN</text>
  <circle cx="600.0" cy="402" r="3.5" fill="#4a9eff"/>
  <text x="607.0" y="405" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">REVENUE</text>
  <line x1="221" y1="424" x2="979" y2="424" stroke="#1f2937" strokeWidth="1"/>
  <rect x="896" y="434" width="64" height="22" rx="5" fill="url(#che-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="928.0" y="448.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="826" y="434" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="857.0" y="448.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two tabs</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">General: id, label, query</text>
  <line x1="200" y1="83.0" x2="244" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
  <rect x="20" y="126" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="141" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type, X axis, pivot</text>
  <text x="30" y="154" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bar, line, area, pie</text>
  <line x1="200" y1="143.0" x2="240" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Live preview</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a sample of the query's rows</text>
  <line x1="200" y1="287.0" x2="280" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One block per series</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colour · L / R axis · ✕</text>
  <line x1="1000" y1="117.0" x2="415" y2="179" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aggregate</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rows sharing the same X</text>
  <line x1="1000" y1="187.0" x2="844" y2="181" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Second Y axis</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as soon as a series is on R</text>
  <line x1="1000" y1="267.0" x2="950" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
</svg>

---

## Liberty Next → Insight → Charts \{#list\}

Charts are grouped by connector: the **Connector** chips at the top pick one, **Add scope** adds a connector that has no chart yet, and **Filter…** narrows the list. Each line shows the chart's id, its label, then its query, its type and its X column (`sales.revenue_get · line · x: MONTH`), with an *override* badge when it is marked as a local customisation. **Add chart** and **Reload config** are in the page header. Each line has:

| Button | Effect |
|---|---|
| **Find usages** | The dashboards that show the chart. |
| **Find dependencies** | Lists what the chart depends on (query, connector…) and downloads the chart with the ticked items as a package. |
| **Rename** | Changes the chart's id. |
| **Clone** | Copies the chart under a new id. |
| **Delete** | Removes the chart. |

**Add chart** opens the editor for a new chart in the current scope; clicking a line opens it for editing.

---

## The editor \{#editor\}

The editor opens in a window titled by the chart's label, followed by its connector and its id (*Revenue by month* `sales · revenue_by_month`), and has two tabs, **General** and **Chart**. **Cancel** and **Save** are in its footer; closing it with unsaved changes asks whether to save them, discard them or keep editing.

### General \{#general\}

| Field | Effect |
|---|---|
| **Id** | The chart's identifier: letters, digits, underscores and hyphens. Dashboards refer to the chart by this id. |
| **Label** | The chart's title in lists and dashboards. |
| **Description** | Optional. |
| **Keep this one as it is on upgrade (an upgrade of the application then leaves it as saved here)** | Ticked, an upgrade of the application that ships the chart leaves it as saved here — see [Upgrades](#override). |
| **Connector** | The connector of the scope — fixed; to move a chart to another connector, recreate it in that scope. |
| **Query** | The read query whose result the chart draws. The buttons next to it edit the query, clone it or create a new one without leaving the editor. |

### Chart \{#chart\}

The tab loads a sample of the query's rows and draws the chart as it is set:

| Field | Effect |
|---|---|
| **Chart** | The type: bar, line, area or pie. |
| **X axis** | The column along the X axis — the slice labels on a pie. |
| **Series** | One block per Y column: the column, a colour swatch, **L** / **R** to put the series on the left or the right Y axis, and **✕** to remove it. **+** adds a series. A pie uses the first series only. |
| **Pivot by** | Optional, not on a pie. A column whose distinct values become the series: one series per value (a process, a status), each the aggregate of the first Y column. A query returning *refresh date · process · lines* gives one bar per refresh, stacked by process, without pivoting in SQL. |
| **Options** | How the chart is drawn, each box showing what the chart does now: **Stacked** (bar and area only), **Legend**, **Grid lines** (not on a pie) and **Sort the X axis**. |
| **Aggregate** | How rows sharing the same X value are combined: **Sum**, **Average**, **Count** (counts rows, ignores the Y value), **Min**, **Max**, or **None (per row)** to keep each row — for a time series whose X is already unique. |

The Y axis shows compact ticks (1.2k, 27.5M); the tooltip gives the full figure. As soon as one series is on the right axis, the chart gets a second Y axis — useful for two scales, such as an amount and a count. Unless **Legend** says otherwise, the legend shows when there is more than one series. Without a colour, a series takes the next colour of the palette.

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

The *override* badge flags a chart marked as a local customisation — the **Keep this one as it is on upgrade** box of its editor: an upgrade package does not overwrite it. See [Packages](./build/packages.md).

---

## What's next

- [Dashboards](./dashboards.md) — put charts, figures and tables side by side.
- [Connectors](./connectors.md) — the queries a chart reads.
- [Saved views](./saved-views.md) — what a user can keep from a screen.
