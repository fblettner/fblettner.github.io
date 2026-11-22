---
title: Dashboards
description: "Liberty Next dashboards: KPIs, figures, decision lists, proportion bars, charts and tables over connector queries on a 12-column grid, Excel and PDF export, a period with presets and comparison with the previous period, dictionary filters, a cache with Refresh — built in Liberty Next → Insight → Dashboards and opened from the menu."
keywords: [Liberty Next, dashboard, KPI, figure, list, bars, synthesis, export, Excel, PDF, chart, table, widget, period, previous period, compare_previous, PERIOD_FROM, filters, dashboards.toml, cache]
---

# Dashboards

A dashboard puts several **widgets** — figures, decision lists, proportion bars, charts, tables — side by side, each fed by a query of a connector. It opens from the menu like a screen, and it is built in **Liberty Next → Insight → Dashboards**.

---

## At a glance

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dbv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dbv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dbv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dbv-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="436" rx="14" fill="url(#dbv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">▦</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sales overview</text>
  <text x="260" y="62" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Revenue and orders by company, over the period</text>
  <line x1="221" y1="76" x2="979" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="88" width="720" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="106" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="254" y="113" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="128.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▤  Oct 1, 2026 – Oct 31, 2026  ▾</text>
  <text x="468" y="106" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPANY</text>
  <rect x="468" y="113" width="150" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="478" y="128.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">All                       ▾</text>
  <text x="946" y="129" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Updated at 14:05</text>
  <rect x="829.36" y="115" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="842.36" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="775.36" y="115" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="798.36" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▯ PDF</text>
  <rect x="715.36" y="115" width="54" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="742.36" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▯ Excel</text>
  <rect x="240.0" y="156" width="232.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="174" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Revenue</text>
  <text x="252.0" y="200" fill="#e2e8f0" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">1,284,500</text>
  <text x="252.0" y="216" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Sum · Revenue</text>
  <text x="252.0" y="233" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">↗ +12.4%</text>
  <text x="302.32" y="233" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">previous: 1,142,700</text>
  <rect x="484.0" y="156" width="232.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496.0" y="174" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="496.0" y="200" fill="#e2e8f0" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">3,412</text>
  <text x="496.0" y="216" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Count · Order</text>
  <text x="496.0" y="233" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">↘ -3.1%</text>
  <text x="541.28" y="233" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">previous: 3,521</text>
  <rect x="728.0" y="156" width="232.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="740.0" y="174" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Margin rate</text>
  <text x="740.0" y="200" fill="#e2e8f0" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">31.2 %</text>
  <text x="740.0" y="216" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Average · Margin rate</text>
  <text x="740.0" y="233" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">↗ +1.4 pts</text>
  <text x="800.4" y="233" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">previous: 29.8 %</text>
  <rect x="240" y="256" width="470" height="180" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="276" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Revenue by month</text>
  <text x="254" y="290" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Invoiced, per month of the year</text>
  <rect x="278.0" y="349.3" width="42.0" height="60.7" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="299.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <rect x="348.0" y="341.5" width="42.0" height="68.5" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="369.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <rect x="418.0" y="345.4" width="42.0" height="64.6" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="439.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <rect x="488.0" y="327.8" width="42.0" height="82.2" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="509.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <rect x="558.0" y="316.0" width="42.0" height="94.0" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="579.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <rect x="628.0" y="321.9" width="42.0" height="88.1" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="649.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="722" y="256" width="238" height="180" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="736" y="276" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Top customers</text>
  <text x="736" y="298" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CUSTOMER</text>
  <text x="946" y="298" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="system-ui, sans-serif">REVENUE</text>
  <line x1="732" y1="305" x2="950" y2="305" stroke="#1f2937" strokeWidth="1"/>
  <text x="736" y="320" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="946" y="320" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">212 400</text>
  <line x1="732" y1="331" x2="950" y2="331" stroke="#1f2937" strokeWidth="1"/>
  <text x="736" y="346" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="946" y="346" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">184 900</text>
  <line x1="732" y1="357" x2="950" y2="357" stroke="#1f2937" strokeWidth="1"/>
  <text x="736" y="372" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="946" y="372" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">97 300</text>
  <line x1="732" y1="383" x2="950" y2="383" stroke="#1f2937" strokeWidth="1"/>
  <text x="736" y="398" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Delta</text>
  <text x="946" y="398" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">65 100</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">presets, calendar, date basis</text>
  <line x1="200" y1="113.0" x2="254" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compare</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">change vs the previous period</text>
  <line x1="200" y1="213.0" x2="254" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chart widget</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a saved chart or its own</text>
  <line x1="200" y1="347.0" x2="264" y2="350" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
  <rect x="1000" y="50" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <text x="1010" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one dropdown per dictionary item</text>
  <line x1="1000" y1="67.0" x2="550" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export, refresh</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Excel / PDF · ↻ bypasses the cache</text>
  <line x1="1000" y1="177.0" x2="742.36" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table widget</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chosen columns, row limit</text>
  <line x1="1000" y1="347.0" x2="950" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
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
| **Chart** | A bar, line, area or pie chart. | A chart saved in **Liberty Next → Insight → Charts**, or a connector, a query and a chart definition written in the widget — see [Charts](./charts.md). |
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

The dashboard opens on its own default preset, otherwise on the application's default (**Liberty Next → Administer → App → Default period (dashboards)**, *This month* by default). A choice lasts as long as the dashboard tab stays open.

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

When a dashboard is opened again, each widget reuses its last result for **Liberty Next → Administer → App → Dashboard cache (seconds, 0 = none)** — 60 seconds by default. The **↻** button in the bar reloads everything, and *Updated at 14:05* says when the data was fetched. The cache is kept in the browser, per user, until the page is reloaded.

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

A widget whose query fails becomes an error section; the rest of the export still renders. Numbers follow the reader's language (`1 234,5` / `1,234.5`). PDF branding is set in [Liberty Next → Administer → App](./build/settings-app.md#branding).

---

## Building a dashboard \{#builder\}

**Liberty Next → Insight → Dashboards** lists the dashboards of one application: the **Connector** chips at the top pick it, **Add scope** adds another, and **Filter…** narrows the list. Each line gives the id, the title, the number of widgets and filters, and the description. **Add dashboard** and **Reload config** are in the page header, and each line has:

| Button | Effect |
|---|---|
| **Find dependencies** | Lists what the dashboard relies on (queries, charts, connector…) and downloads it with the ticked items as a package. |
| **Rename** | Changes the dashboard's id. |
| **Clone** | Copies the dashboard under a new id. |
| **Delete** | Removes the dashboard. |

A click on a line, or **Add dashboard**, opens the editor over the whole window. Its title bar names the dashboard (`[dashboards.<app>.<id>]`).

<svg viewBox="0 0 1200 674" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dbe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dbe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dbe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dbe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="638" rx="14" fill="url(#dbe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">▦</text>
  <text x="260" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[dashboards.sales.overview]</text>
  <rect x="916" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="927.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <rect x="942" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="221" y1="62" x2="979" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TITLE</text>
  <rect x="240" y="86" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales overview</text>
  <text x="482" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="482" y="86" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Revenue and orders by company, over the period</text>
  <text x="240" y="134" fill="#94a3b8" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Add widget:</text>
  <rect x="320.52" y="120" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="344.02" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="373.52" y="120" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="392.02" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">KPI</text>
  <rect x="416.52" y="120" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="440.02" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <rect x="469.52" y="120" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="495.52" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Figure</text>
  <rect x="527.52" y="120" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="548.52" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">List</text>
  <rect x="575.52" y="120" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="596.52" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Bars</text>
  <rect x="623.52" y="120" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="644.52" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Text</text>
  <rect x="671.52" y="120" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="695.02" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Links</text>
  <rect x="724.52" y="120" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="745.52" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Jobs</text>
  <text x="244.0" y="165" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Revenue</text>
  <rect x="240.0" y="170" width="233.33333333333334" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Revenue</text>
  <text x="252.0" y="214" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">€1,284,350</text>
  <text x="252.0" y="234" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">12 companies · 4 units</text>
  <text x="487.33333333333337" y="165" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Orders</text>
  <rect x="483.33333333333337" y="170" width="233.33333333333334" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="495.33333333333337" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="495.33333333333337" y="214" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">3,412</text>
  <text x="495.33333333333337" y="234" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">98 open · 3,314 closed</text>
  <text x="730.6666666666667" y="165" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="726.6666666666667" y="170" width="233.33333333333334" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738.6666666666667" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="738.6666666666667" y="214" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">1,135</text>
  <text x="738.6666666666667" y="234" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">38 new this month</text>
  <rect x="723.6666666666667" y="153" width="239.33333333333334" height="98" rx="8" fill="none" stroke="#4a9eff" strokeWidth="1.2" strokeDasharray="4 3"/>
  <rect x="842.0000000000001" y="174" width="112" height="20" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="853.0000000000001" y="188" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="882.0000000000001" y="188" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">4 × 1</text>
  <line x1="908.0000000000001" y1="178" x2="908.0000000000001" y2="190" stroke="#334155" strokeWidth="1.2"/>
  <text x="922.0000000000001" y="188" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="942.0000000000001" y="188" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <path d="M946.0000000000001,249 L961.0000000000001,249 L961.0000000000001,234" fill="none" stroke="#4a9eff" strokeWidth="3"/>
  <text x="244.0" y="265" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Revenue by month</text>
  <rect x="240.0" y="270" width="476.6666666666667" height="136" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="288" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Revenue by month</text>
  <rect x="274.9" y="336.8" width="44.7" height="45.2" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="297.22222222222223" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <rect x="349.3" y="331.0" width="44.7" height="51.0" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="371.6666666666667" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <rect x="423.8" y="333.9" width="44.7" height="48.1" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="446.11111111111114" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <rect x="498.2" y="320.8" width="44.7" height="61.2" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="520.5555555555555" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <rect x="572.7" y="312.0" width="44.7" height="70.0" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="595.0" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <rect x="647.1" y="316.4" width="44.7" height="65.6" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="669.4444444444443" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <text x="730.6666666666667" y="265" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Periods to look at</text>
  <rect x="726.6666666666667" y="270" width="233.33333333333334" height="136" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738.6666666666667" y="288" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Periods to look at</text>
  <circle cx="742.6666666666667" cy="309" r="3.5" fill="#fb923c"/>
  <text x="752.6666666666667" y="312" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10</text>
  <text x="948.0000000000001" y="312" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">4,206</text>
  <circle cx="742.6666666666667" cy="333" r="3.5" fill="#4ade80"/>
  <text x="752.6666666666667" y="336" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-09</text>
  <text x="948.0000000000001" y="336" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">9,812</text>
  <circle cx="742.6666666666667" cy="357" r="3.5" fill="#4ade80"/>
  <text x="752.6666666666667" y="360" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-08</text>
  <text x="948.0000000000001" y="360" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">8,965</text>
  <rect x="240" y="416" width="720" height="82" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="436" fill="#94a3b8" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <rect x="293.92" y="423" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="352.42" y="437.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Remove the period</text>
  <text x="252" y="458" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPENS ON</text>
  <rect x="252" y="464" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="478.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">This month            ▾</text>
  <text x="392" y="458" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE COLUMN</text>
  <rect x="392" y="464" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="402" y="478.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">DOC_DATE</text>
  <text x="532" y="458" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OR DICTIONARY ITEM</text>
  <rect x="532" y="464" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="542" y="478.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="686" y="477" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Date bases (optional) ·</text>
  <rect x="801.48" y="464" width="87" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="844.98" y="478.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add a basis</text>
  <rect x="240" y="508" width="720" height="94" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="528" fill="#94a3b8" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="299.24" y="515" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="340.24" y="529.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add filter</text>
  <text x="252" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="252" y="556" width="68" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">company</text>
  <text x="326" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="326" y="556" width="74" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="336" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Company</text>
  <text x="406" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DICTIONARY KEY</text>
  <rect x="406" y="556" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">COMPANY_ID</text>
  <text x="524" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="524" y="556" width="76" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="534" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sales ▾</text>
  <text x="606" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERY</text>
  <rect x="606" y="556" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">companies_get ▾</text>
  <text x="724" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALUE COLUMN</text>
  <rect x="724" y="556" width="88" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="734" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ID</text>
  <text x="818" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL COLUMN</text>
  <rect x="818" y="556" width="88" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="828" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">NAME</text>
  <rect x="912" y="556" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="923.0" y="570.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="252" y="592" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Reaches: Revenue, Orders, Revenue by month · </text>
  <text x="466.20000000000005" y="592" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">not: Customers, Periods to look at</text>
  <line x1="221" y1="614" x2="979" y2="614" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="638" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">5 widget(s)</text>
  <rect x="896" y="624" width="64" height="22" rx="5" fill="url(#dbe-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="928.0" y="638.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="826" y="624" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="857.0" y="638.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Title, description</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shown in the dashboard's bar</text>
  <line x1="200" y1="93.0" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="20" y="136" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="151" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add widget</text>
  <text x="30" y="164" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nine kinds; opens its dialog</text>
  <line x1="200" y1="153.0" x2="320.52" y2="131" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="1000" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grip: drag to move</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">arrows move, Shift + arrows size</text>
  <line x1="1000" y1="127.0" x2="853.0000000000001" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Live widgets</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the same cards as the dashboard</text>
  <line x1="200" y1="317.0" x2="358.33333333333337" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="20" y="446" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="461" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="30" y="474" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">default preset, date column</text>
  <line x1="200" y1="463.0" x2="252" y2="474" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="1000" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Size and edit</text>
  <text x="1010" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">4 columns × 1 row · ✎ · 🗑</text>
  <line x1="1000" y1="193.0" x2="932.0000000000001" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="1000" y="246" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="261" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Corner: drag to size</text>
  <text x="1010" y="274" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">whole columns and rows</text>
  <line x1="1000" y1="263.0" x2="962.0000000000001" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="1000" y="568" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="583" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What the filter reaches</text>
  <text x="1010" y="596" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">widgets with the dictionary key</text>
  <line x1="1000" y1="585.0" x2="780" y2="589" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="1000" y="610" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="625" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cancel / Save</text>
  <text x="1010" y="638" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">unsaved changes are confirmed</text>
  <line x1="1000" y1="627.0" x2="896" y2="635" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
</svg>

| Part | Content |
|---|---|
| **Title**, **Description** | Shown at the top of the dashboard; the *In the other languages* block under them gives both in the other languages — see [Texts in other languages](#languages). |
| **Keep this one as it is on upgrade (an upgrade of the application then leaves it as saved here)** | Ticked, an upgrade of the application that ships the dashboard leaves it as saved here. |
| **Add widget** | Chart, KPI, Table, **Figure**, **List**, **Bars**, **Text**, **Links** or **Jobs**: the widget's dialog opens on that kind, and **Cancel** leaves nothing behind. |
| The grid | The real widgets, drawn with live data as the dashboard shows them, each under its label. Hovering a card shows its tools: the **grip**, its size (`4 × 1`, columns × rows), **✎** to edit it and the bin to remove it. A card is moved by **drag and drop** — its grip dragged onto another card, a bar showing on which side it will land — and sized by its **bottom-right corner**, in whole columns (1 to 12) and rows (1 to 8). The grip takes the keyboard too: arrows move the card, Shift + arrows size it. |
| **Period** | **Add a period** / **Remove the period**: **Opens on** (a preset, or *App default (Liberty Next → Administer → App)*), **Date column** or **or dictionary item**, and optional **Date bases** (key, label, date column or dictionary item). |
| **Filters** | **Add filter**: **Id**, **Label**, **Dictionary key**, then the **Connector**, the **Query**, the **Value column** and the **Label column** that fill the dropdown. Under each filter, *Reaches: …* names the widgets it filters — see [Filters](#filters) —, and an *In the other languages* block gives its label in the other languages. A filter left without an id or a label stops the save: *A filter has no id or no label yet: complete it or remove it.* |

The footer counts the widgets and holds **Cancel** and **Save**. Closing the editor with unsaved changes asks whether to save them, discard them or keep editing.

### The widget dialog \{#widget-dialog\}

The **✎** of a card opens the **Widget** dialog: the nine kinds as tabs at the top — a widget can change kind —, then **Label**, **Width (1–12)**, **Height (rows)**, **Subtitle**, the connector and the query, and the fields of the kind (see [Widgets](#widgets)). Below the fields, a preview draws the widget with live data as soon as the required fields are set. The footer shows the widget's kind (`stat`, `list`…) on the left, **Cancel** and **Save** on the right.

### Texts in other languages \{#languages\}

A dashboard reads in the user's language. Every text it shows is given in the other languages in the editor itself, in an **In the other languages** block under the field: one line per language, one box per text. A box left blank shows the text as written (*Left blank, the text above is shown.*).

<svg viewBox="0 0 1200 422" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dbl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dbl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dbl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dbl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="380" rx="14" fill="url(#dbl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[dashboards.sales.overview]</text>
  <line x1="220" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="84" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TITLE</text>
  <rect x="240" y="89" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="103.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sales overview</text>
  <text x="606.0" y="84" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="606.0" y="89" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="103.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Orders, revenue and margin of the month</text>
  <rect x="240" y="124" width="720" height="58" rx="8" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="250" y="139" fill="#94a3b8" fontSize="7.6" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">IN THE OTHER LANGUAGES</text>
  <text x="383.7216" y="139" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">Left blank, the text above is shown.</text>
  <text x="250" y="169" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">French</text>
  <text x="326.0" y="152" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Title</text>
  <rect x="326.0" y="156" width="308" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="336.0" y="169.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Vue d'ensemble des ventes</text>
  <text x="642.0" y="152" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="642.0" y="156" width="308" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="652.0" y="169.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Commandes, chiffre d'affaires et marge du mois</text>
  <rect x="240" y="195" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="257" y="204" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Keep this one as it is on upgrade (an upgrade of the application then leaves it as saved here)</text>
  <text x="240" y="237" fill="#94a3b8" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">Add widget:</text>
  <rect x="302.976" y="222" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="325.476" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="353.976" y="222" width="36" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="371.976" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">KPI</text>
  <rect x="395.976" y="222" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="418.476" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <rect x="446.976" y="222" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="471.976" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Figure</text>
  <rect x="502.976" y="222" width="41" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="523.476" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">List</text>
  <rect x="549.976" y="222" width="41" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="570.476" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Bars</text>
  <rect x="596.976" y="222" width="41" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="617.476" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Text</text>
  <rect x="643.976" y="222" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="666.476" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Links</text>
  <rect x="694.976" y="222" width="41" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="715.476" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Jobs</text>
  <line x1="220" y1="252" x2="980" y2="252" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="266" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Widget — Figure</text>
  <text x="240" y="284" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="240" y="289" width="232" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="303.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="484.0" y="284" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SUBTITLE</text>
  <rect x="484.0" y="289" width="232" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="494.0" y="303.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">This month</text>
  <text x="728.0" y="284" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SUB LINE</text>
  <rect x="728.0" y="289" width="232" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="738.0" y="303.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">&#123;AMOUNT:integer&#125; €</text>
  <rect x="240" y="324" width="720" height="58" rx="8" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="250" y="339" fill="#94a3b8" fontSize="7.6" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">IN THE OTHER LANGUAGES</text>
  <text x="383.7216" y="339" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">Left blank, the text above is shown.</text>
  <text x="250" y="369" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">French</text>
  <text x="326.0" y="352" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Label</text>
  <rect x="326.0" y="356" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="336.0" y="369.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Commandes</text>
  <text x="484.0" y="352" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Subtitle</text>
  <rect x="484.0" y="356" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="494.0" y="369.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Ce mois-ci</text>
  <text x="642.0" y="352" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Sub line</text>
  <rect x="642.0" y="356" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="652.0" y="369.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif"></text>
  <text x="800.0" y="352" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Unit</text>
  <rect x="800.0" y="356" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810.0" y="369.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Title and description</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as written</text>
  <line x1="200" y1="101.0" x2="240" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
  <rect x="20" y="142" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="157" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">In the other languages</text>
  <text x="30" y="170" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line per language</text>
  <line x1="200" y1="159.0" x2="240" y2="154" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
  <rect x="1000" y="142" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="157" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Blank = the text above</text>
  <text x="1010" y="170" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nothing to fill twice</text>
  <line x1="1000" y1="159.0" x2="920" y2="172" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
  <rect x="20" y="182" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="197" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Keep on upgrade</text>
  <text x="30" y="210" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the application leaves it</text>
  <line x1="200" y1="199.0" x2="240" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
  <rect x="20" y="336" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="351" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Each card too</text>
  <text x="30" y="364" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its own texts, by kind</text>
  <line x1="200" y1="353.0" x2="240" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
  <rect x="1000" y="336" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="351" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fields of the card's kind</text>
  <text x="1010" y="364" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sub line, unit, note…</text>
  <line x1="1000" y1="353.0" x2="900" y2="374" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
</svg>

| Where | The block gives |
|---|---|
| The dashboard | Its **Title** and its **Description**. |
| A widget (its dialog) | Its **Label** and **Subtitle**, and by kind: the **Sub line** and **Unit** of a Figure; the **Count wording**, **Unit**, and the **Title column**, **Subtitle column** and **Tag column (a pill)** of a List; the **Note under the bars**, **Unit**, **Label column** and **Sub label column** of Bars; the **Text (Markdown)** of a Text. |
| A link of a Links widget | Its **Label** and its **Description**. |
| A filter | Its **Label**. |

A column given in another language names the column to read for the users of that language — for a query that returns one column per language (`TITLE`, `TITLE_FR`).

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
