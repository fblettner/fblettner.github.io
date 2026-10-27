---
title: Dashboards
description: "Liberty Next dashboards: KPIs, charts and tables over connector queries on a 12-column grid, a period with presets and comparison with the previous period, dictionary filters, a cache with Refresh — built in Settings → Dashboards and opened from the menu."
keywords: [Liberty Next, dashboard, KPI, chart, table, widget, period, previous period, compare_previous, PERIOD_FROM, filters, dashboards.toml, cache]
---

# Dashboards

A dashboard puts several **widgets** — figures, charts, tables — side by side, each fed by a query of a connector. It opens from the menu like a screen, and it is built in **Settings → Dashboards**.

---

## At a glance

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dsh-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dsh-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dsh-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dsh-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="400" rx="14" fill="url(#dsh-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sales overview</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Revenue and orders by company</text>
  <text x="240" y="96" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Period</text>
  <rect x="284" y="80" width="178" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="294" y="94.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">This month · 01/10 – 27/10 ▾</text>
  <text x="476" y="96" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Company</text>
  <rect x="526" y="80" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="94.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">All ▾</text>
  <rect x="830" y="80" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="844.0" y="94.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="960" y="95" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Updated at 14:05</text>
  <line x1="240" y1="116" x2="960" y2="116" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="128" width="236" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="146" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REVENUE</text>
  <text x="252" y="172" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1,284,500</text>
  <text x="464" y="172" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▲ +12.4%</text>
  <text x="252" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">previous: 1,142,700</text>
  <rect x="488" y="128" width="236" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="146" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ORDERS</text>
  <text x="500" y="172" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">3 412</text>
  <text x="712" y="172" fill="#f87171" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▼ -3.1%</text>
  <text x="500" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">previous: 3 521</text>
  <rect x="736" y="128" width="224" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="146" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MARGIN RATE</text>
  <text x="748" y="172" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">31.2 %</text>
  <text x="948" y="172" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▲ +1.4 pts</text>
  <text x="748" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">previous: 29.8 %</text>
  <rect x="240" y="218" width="470" height="180" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="238" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Revenue by month</text>
  <rect x="272.9" y="327.6" width="45.9" height="42.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="272.9" y="306.4" width="45.9" height="21.2" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="295.8333333333333" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <rect x="344.6" y="317.0" width="45.9" height="53.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="344.6" y="295.8" width="45.9" height="21.2" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="367.5" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <rect x="416.2" y="327.6" width="45.9" height="42.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="416.2" y="295.8" width="45.9" height="31.8" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="439.1666666666667" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <rect x="487.9" y="306.4" width="45.9" height="63.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="487.9" y="274.6" width="45.9" height="31.8" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="510.8333333333333" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <rect x="559.6" y="295.8" width="45.9" height="74.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="559.6" y="264.0" width="45.9" height="31.8" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="582.5000000000001" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <rect x="631.2" y="306.4" width="45.9" height="63.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="631.2" y="264.0" width="45.9" height="42.4" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="654.1666666666667" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="722" y="218" width="238" height="180" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="734" y="238" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Top customers</text>
  <text x="734" y="262" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="948" y="262" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">212 400</text>
  <text x="734" y="288" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="948" y="288" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">184 900</text>
  <text x="734" y="314" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="948" y="314" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">97 300</text>
  <text x="734" y="340" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Delta</text>
  <text x="948" y="340" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">65 100</text>
  <rect x="10" y="70" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="20" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">presets, calendar, date basis</text>
  <line x1="210" y1="87.0" x2="290" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compare</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">change vs the previous period</text>
  <line x1="210" y1="167.0" x2="420" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chart widget</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a saved chart or inline</text>
  <line x1="210" y1="317.0" x2="260" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one dropdown per dictionary item</text>
  <line x1="1000" y1="77.0" x2="620" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="1000" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Refresh</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bypasses the cache · fetch time</text>
  <line x1="1000" y1="147.0" x2="844" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table widget</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chosen columns, row cap</text>
  <line x1="1000" y1="317.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
</svg>

---

## Widgets \{#widgets\}

Widgets sit on a 12-column grid, in the order they are declared. Each one takes a width of 1 to 12 columns and a height of 1 to 8 rows, and may carry a title.

| Widget | Shows | Settings |
|---|---|---|
| **KPI** | One figure computed over every row of a query. | Connector, query, column, aggregation (`count`, `sum`, `avg`, `min`, `max`, or `none` for the first row's value), format, and **compare with the previous period**. |
| **Chart** | A bar, line, area or pie chart. | A chart saved in **Settings → Charts**, or a connector, a query and a chart definition written in the widget — see [Charts](./charts.md). |
| **Table** | The rows of a query. | Connector, query, the columns to show (all when empty), a row limit. |

A widget whose query the user may not run is hidden; the rest of the dashboard still shows.

---

## The period \{#period\}

A dashboard can carry a **period**: a date range control in its bar that applies to every widget.

- **Presets**: Today, Yesterday, Last 7 days, Last 30 days, This month, Last month, This quarter, This year, Last year, Last 12 months, All dates. The *Yesterday* preset covers yesterday and today.
- **A free range**: pick a start date, then an end date, in the two-month calendar, then **Apply**.
- **Date basis**: when the dashboard offers several dates (*Document date*, *Paid on*), a **Date** choice at the bottom of the panel picks the one the range applies to.

The dashboard opens on its own default preset, otherwise on the application's default (**Settings → App → Default period (dashboards)**, *This month* by default). A choice lasts as long as the dashboard tab stays open.

### What the queries receive

| Bind | Value |
|---|---|
| `:PERIOD_FROM`, `:PERIOD_TO` | The chosen range, as dates. *All dates* binds `0001-01-01` to `9999-12-31`. |
| `:PREV_FROM`, `:PREV_TO` | The period before (see below). |
| `:PERIOD_BASIS` | The chosen date basis, when the dashboard offers several. |

A query that does not mention them is not affected. When the period names its date column — directly or through a dictionary item found in the widget's screen — the widget is also filtered on the server on that column, **without any change to its SQL**.

### The previous period

| Range | Compared with |
|---|---|
| Starting on 1 January (*This year*, *Last year*) | The same dates one year earlier. |
| Starting on the 1st of a month | The same number of months just before — *Last month* with the month before, a whole quarter with the quarter before; *This month* on the 27th with the 1st–27th of the previous month. |
| Anything else | The same number of days just before. |

### Comparing a KPI

With **Compare with the previous period** ticked, a KPI runs its query a second time on the previous period and shows, under the figure, the change — in percent, in points for a percent KPI — in green or red, and the previous value. Nothing is compared on *All dates*.

---

## Filters \{#filters\}

A dashboard can also carry **filters**, shown as dropdowns in its bar. Each filter has a label, a dictionary item and a query that provides its choices (value column and label column), and an optional default value. Choosing a value reloads every widget whose screen has a column carrying that dictionary item; the other widgets are left as they are.

---

## Refresh and cache \{#cache\}

When a dashboard is opened again, each widget reuses its last result for **Settings → App → Dashboard cache (seconds, 0 = none)** — 60 seconds by default. The **↻** button in the bar reloads everything, and *Updated at 14:05* says when the data was fetched. The cache is kept in the browser, per user, until the page is reloaded.

---

## Building a dashboard \{#builder\}

In **Settings → Dashboards**, pick the application, then add or open a dashboard. The editor has:

| Part | Content |
|---|---|
| General | Title, description. |
| Period | **Add a period**: *Opens on* (a preset, or *App default*), *Date column* or *dictionary item*, and optional **Date bases** (key, label, date column or dictionary item). |
| Filters | The dropdowns of the bar. |
| Widgets | **Add widget**: Chart, KPI or Table. Each widget has buttons to make it narrower or wider (W−, W+), lower or taller (H−, H+), and to move it earlier or later in the grid. |

The editor's labels are in English. To make the dashboard reachable, add a **dashboard** entry to a menu ([Menus](./build/menus/item-types.md)); its permission is `dashboard:<app>.<id>`.

### In TOML

```toml title="dashboards.toml"
[dashboards.sales.overview]
label = "Sales overview"
period = { column = "DOC_DATE", default = "thisMonth" }

  [[dashboards.sales.overview.widgets]]
  type = "kpi"
  label = "Revenue"
  connector = "sales"
  query = "revenue_by_company_get"
  column = "REVENUE"
  aggregation = "sum"
  compare_previous = true
  col_span = 4

  [[dashboards.sales.overview.widgets]]
  type = "chart"
  chart = "revenue_by_month"
  col_span = 8
  row_span = 2
```

---

## Tips \{#tips\}

- Give the dashboard a period rather than date filters in each query: one control, and the comparison comes for free.
- A KPI with `none` shows the first row's value: let the query compute the figure when the aggregation is complex.
- Keep the cache on for dashboards opened often; **↻** always gives fresh figures.
