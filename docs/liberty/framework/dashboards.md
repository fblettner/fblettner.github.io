---
title: Dashboards
description: "Liberty Next dashboards: KPIs, figures, decision lists, proportion bars, charts and tables over connector queries on a 12-column grid, Excel and PDF export, a period with presets and comparison with the previous period, dictionary filters, a cache with Refresh — built in Settings → Dashboards and opened from the menu."
keywords: [Liberty Next, dashboard, KPI, figure, list, bars, synthesis, export, Excel, PDF, chart, table, widget, period, previous period, compare_previous, PERIOD_FROM, filters, dashboards.toml, cache]
---

# Dashboards

A dashboard puts several **widgets** — figures, decision lists, proportion bars, charts, tables — side by side, each fed by a query of a connector. It opens from the menu like a screen, and it is built in **Settings → Dashboards**.

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

Widgets sit on a 12-column grid, in the order they are declared. Each one takes a width of 1 to 12 columns and a height of 1 to 8 rows, and carries a title and an optional **subtitle** — one line under the title that says what the widget covers.

| Widget | Shows | Settings |
|---|---|---|
| **KPI** | One figure computed over every row of a query. | Connector, query, column, aggregation (`count`, `sum`, `avg`, `min`, `max`, or `none` for the first row's value), format, and **compare with the previous period**. |
| **Figure** | A figure card read from the query's **first row**, with a line of detail under it. | **Value column**, **Format**, **Unit**, **Sub line**. |
| **List** | A decision or ranked list: one line per row, with a coloured dot, a title, a subtitle, a figure and a tag. | **Title column** (required), **Subtitle column**, **Value column**, format, unit, **Count column** and **Count wording**, **Tone column**, **Tag column**, **Rows shown**. |
| **Bars** | A ranked list with a proportion bar under each row. | **Label column** and **Value column** (required), **Sub label column**, format, unit, **Bar as a share of**, **Note under the bars**, **Rows shown**. |
| **Chart** | A bar, line, area or pie chart. | A chart saved in **Settings → Charts**, or a connector, a query and a chart definition written in the widget — see [Charts](./charts.md). |
| **Table** | The rows of a query. | Connector, query, the columns to show (all when empty), a row limit. |
| **Text** | A block of Markdown: what the page is for, how to read it. Headings, lists and links are allowed. | **Text (Markdown)**. |
| **Jobs** | The Nomaflow jobs with their next run, their schedule in words and their last state, and **Run now** / **Pause** / **Resume**. Superusers only. | **Jobs (ids, in order)** — empty = every scheduled job —, **Only these tags**, **Max rows** (12 when blank). |
| **Links** | A card of entry points: menu items of the dashboard's application, or web addresses. | **Links per row** (1 to 4); per link a **Menu item** or a **URL**, an **Icon**, a **Label** (blank: the menu item's) and a **Description**. |

A widget whose query the user may not run is hidden; the rest of the dashboard still shows. Every card carries its title and subtitle inside it, and the page grows with its widgets: it scrolls to the last one.

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dsy-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dsy-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dsy-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dsy-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="440" rx="14" fill="url(#dsy-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sales synthesis</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">The loaded periods, the quantities and the revenue at a glance</text>
  <line x1="240" y1="72" x2="960" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="240" y="98" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="112.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Last 12 months ▾</text>
  <text x="406" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUSINESS UNIT</text>
  <rect x="406" y="98" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="112.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">All ▾</text>
  <rect x="730" y="98" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="754.0" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="784" y="98" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="802.5" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="827" y="98" width="27" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="840.5" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="862" y="113" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Updated at 08:02</text>
  <rect x="240" y="134" width="233.33333333333334" height="96" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Revenue</text>
  <text x="252" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Invoiced over the period</text>
  <text x="252" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">€1,284,350</text>
  <text x="252" y="220" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">12 companies · 4 business units</text>
  <rect x="483.33333333333337" y="134" width="233.33333333333334" height="96" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="495.33333333333337" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Invoice lines</text>
  <text x="495.33333333333337" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Loaded lines</text>
  <text x="495.33333333333337" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">48,920</text>
  <text x="495.33333333333337" y="220" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">5 periods · 2 closed</text>
  <rect x="726.6666666666667" y="134" width="233.33333333333334" height="96" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738.6666666666667" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="738.6666666666667" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">With at least one sale</text>
  <text x="738.6666666666667" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">1,135</text>
  <text x="738.6666666666667" y="220" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">38 new this month</text>
  <rect x="240" y="244" width="355.0" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="262" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Periods to look at</text>
  <text x="252" y="275" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Status of each loaded period</text>
  <circle cx="256" cy="297" r="3.5" fill="#4ade80"/>
  <text x="268" y="299" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">2026-02</text>
  <text x="268" y="311" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">validated</text>
  <text x="583.0" y="299" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9,812</text>
  <circle cx="256" cy="331" r="3.5" fill="#fb923c"/>
  <text x="268" y="333" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">2026-03</text>
  <text x="268" y="345" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">open — lines still arriving</text>
  <text x="583.0" y="333" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">4,206</text>
  <circle cx="256" cy="365" r="3.5" fill="#f87171"/>
  <text x="268" y="367" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">2026-01</text>
  <text x="268" y="379" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">closed — a reload was refused</text>
  <rect x="309.28" y="358" width="43" height="14" rx="7.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="330.78" y="368.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">closed</text>
  <text x="583.0" y="367" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">10,440</text>
  <circle cx="256" cy="399" r="3.5" fill="#4a9eff"/>
  <text x="268" y="401" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">2025-12</text>
  <text x="268" y="413" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">validated</text>
  <text x="583.0" y="401" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">8,965</text>
  <rect x="605.0" y="244" width="355.0" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="262" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Quantity by family</text>
  <text x="617.0" y="275" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Share of the largest family</text>
  <text x="617.0" y="298" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Beverages</text>
  <text x="948.0" y="298" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">18,400</text>
  <rect x="617.0" y="303" width="331.0" height="5" rx="2.5" fill="#1e293b"/>
  <rect x="617.0" y="303" width="331" height="5" rx="2.5" fill="#4a9eff"/>
  <text x="617.0" y="328" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Groceries</text>
  <text x="948.0" y="328" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">12,950</text>
  <rect x="617.0" y="333" width="331.0" height="5" rx="2.5" fill="#1e293b"/>
  <rect x="617.0" y="333" width="232" height="5" rx="2.5" fill="#4a9eff"/>
  <text x="617.0" y="358" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Fresh produce</text>
  <text x="948.0" y="358" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9,310</text>
  <rect x="617.0" y="363" width="331.0" height="5" rx="2.5" fill="#1e293b"/>
  <rect x="617.0" y="363" width="169" height="5" rx="2.5" fill="#4a9eff"/>
  <text x="617.0" y="388" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Household</text>
  <text x="948.0" y="388" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">4,120</text>
  <rect x="617.0" y="393" width="331.0" height="5" rx="2.5" fill="#1e293b"/>
  <rect x="617.0" y="393" width="73" height="5" rx="2.5" fill="#4a9eff"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Figure</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a value, a templated sub line</text>
  <line x1="210" y1="167.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsy-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">List</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tone dot, subtitle, figure, tag</text>
  <line x1="210" y1="317.0" x2="254" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsy-arrow)"/>
  <rect x="1000" y="56" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what the bar holds, to Excel or PDF</text>
  <line x1="1000" y1="73.0" x2="755" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsy-arrow)"/>
  <rect x="1000" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Subtitle</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on every widget</text>
  <line x1="1000" y1="177.0" x2="860" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsy-arrow)"/>
  <rect x="1000" y="310" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bars</text>
  <text x="1010" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">share of the total or the largest</text>
  <line x1="1000" y1="327.0" x2="950" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsy-arrow)"/>
</svg>

### Figure, List and Bars \{#synthesis\}

These three widgets turn a dashboard into a **synthesis page**: the figures that matter, what needs a decision, and the proportions, each read from a query written for it.

- **Format**: *Number*, *Integer*, *Currency* (euros, no decimals for a whole amount) or *Percent* — a ratio between 0 and 1, shown as a percentage. The **Unit** follows the figure (`users`, `lines`); a currency carries its own symbol.
- **Sub line** (Figure): a sentence with placeholders filled from the first row, `{COLUMN}` or `{COLUMN:format}` — `{ENABLED:integer} enabled · {DISABLED:integer} disabled` gives *380 enabled · 32 disabled*. A placeholder naming an unknown column stays as written.
- **Tone column** (List): a column holding `ok`, `warn`, `error` or `info` colours the dot green, orange, red or blue; any other value gives a grey dot. The query decides the tone — a period that is closed, an amount above a threshold.
- **Count wording** (List): the text around the count column, `{n} conflict lines`. The **Tag column** shows its value as a pill next to the title, in the line's tone.
- **Bar as a share of** (Bars): **The total of the rows** — the bars add up to 100 % — or **The largest row**, which gets the full bar.

The editor shows a live preview of the widget as soon as the connector, the query and the required columns are chosen.

### Jobs \{#jobs\}

A **Jobs** card puts the scheduler on a dashboard. Each line shows the job — a click opens it in Nomaflow —, its next run or *Paused*, its schedule in words (*every day at 03:00*), the state of its last run, and three buttons: **Run now** with the job's saved values, **Pause the schedule**, **Resume the schedule** — applied at once. Without ids, the card lists the scheduled jobs, the next to run first, optionally narrowed to some tags (`main`, `nomasx1`). The card refreshes itself while a run is going.

The card is for superusers only: for anyone else, it does not show on the dashboard.

### Text and Links \{#text-links\}

These two widgets turn a dashboard into the **home page of an application**: a few lines on what it does, the figures, then where to go.

- A **Text** or **Links** widget the full width of the grid (12 columns) takes the height of its content, with no scroll bar; a narrower one scrolls within its tile.
- A **Links** widget only shows the menu items the user may open: an entry their roles do not grant disappears from the card. A URL opens in a new browser tab. A URL link needs a label.
- In an export, a text keeps its Markdown and a links card becomes a table (*Link*, *Description*).

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

A dashboard can also carry **filters**, shown as dropdowns in its bar. Each filter has a label, a dictionary item and a query that provides its choices (value column and label column), and an optional default value. Choosing a value reloads every widget whose query returns a column carrying that dictionary item — through the widget's screen, or directly from the query's result columns: a column with the item's name, or with the connector's column prefix in front of it. The other widgets are left as they are. A period whose date column is given as a dictionary item finds its column the same way.

In the editor, each filter says which widgets it reaches — *Reaches: …*, with *not: …* for the others — or *Reaches no widget* when no column carries the dictionary item.

With **All**, nothing is filtered: a query that returns one total row first, then one row per value, shows the totals in its Figure and List widgets.

---

## Refresh and cache \{#cache\}

When a dashboard is opened again, each widget reuses its last result for **Settings → App → Dashboard cache (seconds, 0 = none)** — 60 seconds by default. The **↻** button in the bar reloads everything, and *Updated at 14:05* says when the data was fetched. The cache is kept in the browser, per user, until the page is reloaded.

---

## Export to Excel and PDF \{#export\}

The **Excel** and **PDF** buttons, next to **↻**, export what the bar holds: the filter picks, the period and its date basis, under the user's data scope. The server runs every widget again; nothing is taken from the screen.

| | Excel | PDF |
|---|---|---|
| Layout | One sheet per widget; the KPIs together on a *Key figures* sheet. | A cover with the dashboard, the period and the filters, then the widgets one after the other. |
| KPI, Figure | A row of values. | A card, with the sub line in small type under the figure. |
| List, Bars, Table | Its rows. | A table. |
| Text, Links | The text; the links as rows. | The text; a table of the links. |
| Chart | Its data table. | The chart drawn, with a legend and the values on the bars. |

A widget whose query fails becomes an error section; the rest of the export still renders. Numbers follow the reader's language (`1 234,5` / `1,234.5`). PDF branding is set in [Settings → App](./build/settings-app.md#branding).

---

## Building a dashboard \{#builder\}

In **Settings → Dashboards**, pick the application, then add or open a dashboard. The editor has:

| Part | Content |
|---|---|
| General | Title, description. |
| Period | **Add a period**: *Opens on* (a preset, or *App default*), *Date column* or *dictionary item*, and optional **Date bases** (key, label, date column or dictionary item). |
| Filters | The dropdowns of the bar. |
| Widgets | **Add widget**: Chart, KPI, Table, **Figure**, **List**, **Bars**, **Text**, **Links** or **Jobs**. Each widget has a **Subtitle**. Each widget has buttons to make it narrower or wider (W−, W+), lower or taller (H−, H+), and to move it earlier or later in the grid. |

A dashboard reads in the user's language: its title, its description, the filters' labels and the widgets' texts can carry a French version, and a List can read its titles from a French column of its query.

To make the dashboard reachable, add a **dashboard** entry to a menu ([Menus](./build/menus/item-types.md)); its permission is `dashboard:<app>.<id>`.

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
- For a synthesis page, write one small query per Figure or List and let the query compute the tone: the dashboard only shows it.
- A KPI with `none` shows the first row's value: let the query compute the figure when the aggregation is complex.
- Keep the cache on for dashboards opened often; **↻** always gives fresh figures.
