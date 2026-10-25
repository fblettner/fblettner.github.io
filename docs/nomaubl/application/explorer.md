---
title: Explorer
description: "The NomaUBL Explorer — build your own analyses of the invoice data without SQL: fields of seven entities on Rows, Measures and Filters shelves, table, pivot, detail and charts, calculated fields, drill-down to the invoices, dashboards, ready-made analyses for IT, accounting and audit, exports to Excel, PDF and PNG, daily digests."
keywords: [NomaUBL, Explorer, analysis, self-service, pivot, cross table, dashboard, chart, bar chart, KPI, calculated field, drill-down, Excel export, PDF export, saved analysis, daily digest, JD Edwards, SAP, NetSuite, custom ERP]
---

# Explorer

The **Explorer** builds analyses of the invoice data without writing SQL. The fields of seven entities around the invoice are dropped onto **Rows**, **Measures** and **Filters**; the result shows as a table, a pivot, detail rows or a chart, and any value opens the invoices behind it. Analyses are saved, shared and gathered into **dashboards**. Ready-made analyses and dashboards come for IT, accounting and audit. The Explorer works the same whatever the source system (JD Edwards, SAP, NetSuite or a custom ERP) and on every supported database.

Open it from **Explorer**, in the Navigation group of the menu, next to [Reports](reports/overview.md). It replaces the former *Query tool* tab of the Reports page; the reports saved there are converted into analyses automatically.

---

## At a glance

<svg viewBox="0 0 1320 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ex-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ex-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ex-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ex-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="400" rx="14" fill="url(#ex-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorer</text>
  <rect x="370" y="32" width="143" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="371" y="33" width="64" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="403.0" y="46.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Analysis</text>
  <line x1="436" y1="37" x2="436" y2="49" stroke="#334155" strokeWidth="1"/>
  <text x="474.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboards</text>
  <rect x="525" y="32" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="535" y="46.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Top customers ▾</text>
  <rect x="1036" y="32" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1058.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="938" y="32" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="984.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Save</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="78" width="190" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="86" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="100.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Search a field…</text>
  <text x="252" y="128" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INVOICES ▾</text>
  <text x="256" y="147" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="272" y="147" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Company</text>
  <text x="256" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="272" y="166" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="256" y="185" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="272" y="185" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Status</text>
  <text x="256" y="204" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">📅</text>
  <text x="272" y="204" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Issue date</text>
  <text x="256" y="223" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Σ</text>
  <text x="272" y="223" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Total incl. VAT</text>
  <text x="256" y="242" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Σ</text>
  <text x="272" y="242" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Total excl. VAT</text>
  <text x="252" y="268" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIFECYCLE EVENTS ›</text>
  <text x="252" y="289" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VALIDATION FINDINGS ›</text>
  <text x="252" y="310" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INVOICE LINES ›</text>
  <text x="252" y="331" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VAT BREAKDOWN ›</text>
  <text x="252" y="356" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CALCULATED FIELDS ›</text>
  <rect x="442" y="78" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="452" y="92.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Invoices ▾</text>
  <rect x="540" y="78" width="308" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="563.5" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="587" y1="83" x2="587" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="610.5" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Pivot</text>
  <line x1="634" y1="83" x2="634" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="660.0" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Detail</text>
  <rect x="687" y="79" width="41" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="707.5" y="92.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Bars</text>
  <line x1="729" y1="83" x2="729" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="750.5" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Line</text>
  <line x1="772" y1="83" x2="772" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="791.0" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Pie</text>
  <line x1="810" y1="83" x2="810" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="829.0" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">KPI</text>
  <rect x="948" y="78" width="50" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="958" y="92.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Top 10</text>
  <rect x="1006" y="78" width="74" height="22" rx="5" fill="url(#ex-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1043.0" y="92.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run</text>
  <rect x="442" y="112" width="638" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="452" y="130" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROWS</text>
  <rect x="532" y="116" width="58" height="20" rx="10.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="561.0" y="129.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Customer</text>
  <rect x="596" y="116" width="108" height="20" rx="10.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="650.0" y="129.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Issue date · Month</text>
  <rect x="442" y="146" width="638" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="452" y="164" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MEASURES</text>
  <rect x="532" y="150" width="123" height="20" rx="10.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="593.5" y="163.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sum · Total incl. VAT</text>
  <rect x="661" y="150" width="43" height="20" rx="10.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="682.5" y="163.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Count</text>
  <rect x="442" y="180" width="638" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="452" y="198" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILTERS</text>
  <rect x="532" y="184" width="118" height="20" rx="10.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="591.0" y="197.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Period: last 90 days</text>
  <rect x="656" y="184" width="103" height="20" rx="10.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="707.5" y="197.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Status in 205, 10</text>
  <rect x="442" y="220" width="638" height="188" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="480" y="249" width="80" height="133" rx="3" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="520.1666666666666" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="576" y="281" width="80" height="101" rx="3" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="616.5" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="673" y="301" width="80" height="81" rx="3" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="712.8333333333333" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Gamma SAS</text>
  <rect x="769" y="325" width="80" height="57" rx="3" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="809.1666666666666" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delta &amp; Co</text>
  <rect x="865" y="336" width="80" height="46" rx="3" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="905.4999999999999" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Epsilon</text>
  <rect x="962" y="344" width="80" height="38" rx="3" fill="#64748b" fillOpacity="0.85"/>
  <text x="1001.8333333333333" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Others</text>
  <text x="1070" y="236" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⬇ PNG</text>
  <rect x="20" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyses and dashboards</text>
  <text x="30" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">saved, shared, promotable</text>
  <line x1="200" y1="43.0" x2="370" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fields of 7 entities</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drag or click onto a shelf</text>
  <line x1="200" y1="137.0" x2="252" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Calculated fields</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">age(dueDate) &gt; 30 ? …</text>
  <line x1="200" y1="357.0" x2="252" y2="350" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
  <rect x="1120" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Seven views</text>
  <text x="1130" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">table, pivot, detail, charts</text>
  <line x1="1120" y1="87.0" x2="742" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rows · Measures · Filters</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dates by day … year; sum, count…</text>
  <line x1="1120" y1="137.0" x2="1080" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Drill down</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a bar opens the rows behind it</text>
  <line x1="1120" y1="317.0" x2="1040" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
</svg>

---

## The fields

The left pane lists the fields of seven entities, with a search box:

| Entity | One row per |
|---|---|
| **Invoices** | Invoice: status, amounts, counterparty, dates. |
| **Documents (archive)** | Archived document. |
| **Lifecycle events** | Status event of an invoice. |
| **Validation findings** | Validation finding of an invoice. |
| **Invoice lines** | Invoice line. |
| **VAT breakdown** | VAT breakdown row. |
| **Notifications** | Notification. |

The **Entity** of the toolbar decides what a row of the result counts; fields of the other entities join through the invoice. A filter on lifecycle events, findings or lines selects the invoices that have such a row.

A field is dragged onto a shelf, or clicked to add it. Amounts are in their real unit. A coded field — status, transaction type… — shows the labels of the list chosen for that column in [List views](../configuration/list-views.md) (Invoices, E-Documents, Integration errors), so a short list set there applies to the Explorer too.

---

## Building an analysis

| Shelf | Use |
|---|---|
| **Rows** | The fields the result is grouped by. A date groups by **day**, **week**, **month**, **quarter** or **year**. In a chart, the second row field gives the series. |
| **Measures** | The values computed per group: **Count**, **Distinct**, **Sum**, **Average**, **Min**, **Max**. *Count of rows* is offered by default. |
| **Filters** | Conditions on any field — *contains*, `=`, `≠`, `<`, `≤`, `>`, `≥`, *between*, *in*, *is empty*, *is not empty*. A **Period** applies to any date field, or *No period filter*. |

**Top** limits the result to the largest groups; **Run** executes the analysis. Every analysis has an option **Exclude reviewed errors**, which leaves out the errors customer service has already handled.

### Views

| View | Result |
|---|---|
| **Table** | One row per group, with the measures. |
| **Pivot** | A cross table: row fields nested with collapsible subtotals (*Expand all*, *Collapse all*), an optional column axis, and each cell's **share** of its parent or of the total. |
| **Detail** | The rows themselves, page by page; a row opens the invoice. |
| **Bars** | Vertical or horizontal, grouped or stacked. |
| **Line** | Line or area. |
| **Pie** | Pie or donut. |
| **KPI** | Cards with the totals over every row of the result. |

In a chart, the ten largest series are drawn and the rest grouped as *Others*; dates read in order, other categories by size. Hovering shows the values. Switching between views does not run the query again, and the options of the chart are saved with the analysis.

### Drilling down

A result row, a pivot cell, a bar, a point or a slice opens the **rows behind it**; a detail row opens the invoice window.

---

## Calculated fields \{#calculated-fields\}

An analysis can define its own fields with a small expression language, under **Calculated fields** → **New calculated field**:

| Field | Description |
|---|---|
| **Name** | Letters, digits and `_`. |
| **Label** / **French label** | Shown in the field list and the results. |
| **Expression** | Arithmetic on amounts, functions and conditions. *Insert a field…* and *Insert a function…* insert at the cursor. |
| **Test** | Runs the expression on a few rows before use. |

| Function | Result |
|---|---|
| `age(date)` | Days since the date. |
| `days(from, to)` | Days between two dates. |
| `year(date)`, `month(date)` | Year, month. |
| `round(x, decimals)`, `abs(x)` | Rounding, absolute value. |
| `coalesce(x, value if empty)` | A value when the field is empty. |
| `condition ? 'a' : 'b'` | A choice — `age(dueDate) > 30 ? 'late' : 'on time'`. |
| `in ('a', 'b')` | Membership. |

A number can be used as a measure, a text as a row or a filter. The expression runs the same on every supported database.

---

## Saving and sharing

**Save** opens a window with the **Name** (in the interface's language), **Visible to** — *Every user who can open the Explorer* or *Only me* — then **Save** or **Save as**. *Save* replaces the analysis; *Save as* creates a copy under the new name, which is how a provided analysis is adapted while keeping the original. The saved analyses are listed by audience (IT, Accounting, Audit, Custom) and name; picking one runs it at once with its own period.

Each analysis and each dashboard is one JSON file under the environment's configuration folder (`analyses/`, `dashboards/`). Both can be carried to another instance with [Promotion](../management/promotion.md) — a dashboard brings its analyses — and the [implementation report](reports/implementation-report.md) lists them.

---

## Dashboards \{#dashboards\}

The **Dashboards** mode gathers saved analyses as **tiles** on a four-column grid, each with its width, its height and its view — chart, table or pivot. One **period** at the top applies to every tile. A tile drills like its analysis and opens it in the editor. **Edit layout** adds tiles (*Analysis to add…*, *Add tile*), moves them and sets their size.

<svg viewBox="0 0 1200 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ed-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ed-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ed-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ed-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="368" rx="14" fill="url(#ed-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorer · Dashboards</text>
  <rect x="240" y="76" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="90.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Month end ▾</text>
  <rect x="418" y="76" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="428" y="90.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 Last 30 days ▾</text>
  <rect x="916" y="32" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="938.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="854" y="32" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="882.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="698" y="32" width="150" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="773.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit layout</text>
  <line x1="220" y1="66" x2="980" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <line x1="220" y1="110" x2="980" y2="110" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="120" width="720.0" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="138" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">VAT per month and rate</text>
  <text x="950.0" y="138" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">↗</text>
  <rect x="260" y="210" width="10" height="18" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="272" y="212" width="10" height="16" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="284" y="222" width="10" height="6" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="317" y="204" width="10" height="24" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="329" y="217" width="10" height="11" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="341" y="221" width="10" height="7" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="373" y="198" width="10" height="30" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="385" y="214" width="10" height="14" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="397" y="223" width="10" height="5" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="430" y="207" width="10" height="21" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="442" y="210" width="10" height="18" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="454" y="222" width="10" height="6" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="487" y="201" width="10" height="27" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="499" y="215" width="10" height="13" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="511" y="220" width="10" height="8" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="543" y="210" width="10" height="18" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="555" y="212" width="10" height="16" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="567" y="222" width="10" height="6" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="600" y="204" width="10" height="24" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="612" y="217" width="10" height="11" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="624" y="221" width="10" height="7" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="657" y="198" width="10" height="30" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="669" y="214" width="10" height="14" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="681" y="223" width="10" height="5" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="713" y="207" width="10" height="21" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="725" y="210" width="10" height="18" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="737" y="222" width="10" height="6" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="770" y="201" width="10" height="27" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="782" y="215" width="10" height="13" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="794" y="220" width="10" height="8" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="827" y="210" width="10" height="18" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="839" y="212" width="10" height="16" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="851" y="222" width="10" height="6" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="883" y="204" width="10" height="24" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="895" y="217" width="10" height="11" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="907" y="221" width="10" height="7" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="240.0" y="248" width="357.0" height="130" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="266" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Amounts per status</text>
  <text x="587.0" y="266" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">↗</text>
  <circle cx="320.0" cy="323" r="38" fill="none" stroke="#4a9eff" strokeWidth="18" strokeDasharray="140 240"/>
  <circle cx="320.0" cy="323" r="38" fill="none" stroke="#22c55e" strokeWidth="18" strokeDasharray="60 240" strokeDashoffset="-140"/>
  <circle cx="320.0" cy="323" r="38" fill="none" stroke="#f97316" strokeWidth="18" strokeDasharray="39 240" strokeDashoffset="-200"/>
  <rect x="390.0" y="298" width="10" height="10" rx="2" fill="#4a9eff"/>
  <text x="406.0" y="307" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">205</text>
  <rect x="390.0" y="318" width="10" height="10" rx="2" fill="#22c55e"/>
  <text x="406.0" y="327" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">10</text>
  <rect x="390.0" y="338" width="10" height="10" rx="2" fill="#f97316"/>
  <text x="406.0" y="347" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">213</text>
  <rect x="603.0" y="248" width="357.0" height="130" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="615.0" y="266" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Top customers</text>
  <text x="950.0" y="266" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">↗</text>
  <text x="615.0" y="292" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="693.0" y="283" width="222" height="12" rx="3" fill="#4a9eff" fillOpacity="0.8"/>
  <text x="615.0" y="314" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="693.0" y="305" width="161" height="12" rx="3" fill="#4a9eff" fillOpacity="0.8"/>
  <text x="615.0" y="336" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Gamma SAS</text>
  <rect x="693.0" y="327" width="124" height="12" rx="3" fill="#4a9eff" fillOpacity="0.8"/>
  <text x="615.0" y="358" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Delta &amp; Co</text>
  <rect x="693.0" y="349" width="86" height="12" rx="3" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ready-made dashboards</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Operations · Month end · Audit period</text>
  <line x1="200" y1="87.0" x2="240" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ed-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tiles = saved analyses</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">width and height per tile</text>
  <line x1="200" y1="197.0" x2="240" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ed-arrow)"/>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One period for all</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">applied to every tile</text>
  <line x1="1000" y1="87.0" x2="598" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ed-arrow)"/>
  <rect x="1000" y="20" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="35" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1010" y="48" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Excel one sheet per tile · PDF</text>
  <line x1="1000" y1="37.0" x2="910" y2="54" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ed-arrow)"/>
  <rect x="1000" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Open the analysis</text>
  <text x="1010" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drill or edit from the tile</text>
  <line x1="1000" y1="279.0" x2="950" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ed-arrow)"/>
</svg>

---

## Ready-made analyses and dashboards

NomaUBL installs twelve analyses and three dashboards, once; they are never overwritten afterwards, so they can be adapted.

| Audience | Dashboard | Analyses |
|---|---|---|
| **IT** | Operations | Volume per document · Findings per day and source · Send and import failures · Invoices in a workflow status |
| **Accounting** | Month end | VAT per month and rate · Amounts per status · Top customers · Invoices and credit notes per month |
| **Audit** | Audit period | Findings per rule · Refusals and rejections per reason · Status events per month · Status statistics |

*Status statistics* reproduces the pivot of the [Reports](reports/overview.md) page, whose tab stays as it is.

---

## Exports and digests

| Export | Content |
|---|---|
| **PDF** | An analysis or a dashboard in the [audit report](reports/audit-report.md) layout: cover with environment, period, date, author and version, contents for a dashboard, running headers, each chart with all its data, filters noted. |
| **Excel** | The cross table; a dashboard as one sheet per tile. |
| **PNG** | The chart of an analysis. |

A [daily digest](../sync/scheduled-jobs/daily-digest.md) can send a saved analysis or a whole dashboard, run over the digest's window, as Excel or as a PDF in the same layout.

---

## Access

Grant the **Explorer** page in the Navigation group on the [Roles](../configuration/security/roles.md) page. The results follow the company visibility of the signed-in user.

---

## Tips & best practices

- **Start from a ready-made analysis** and *Save as* to adapt it; the original stays available.
- **Pick the entity first.** It decides what is counted: invoices, lines, events or findings.
- **Use the pivot with share of parent** to read a distribution — statuses per company, VAT rates per month.
- **Give a short list to coded fields** in *List views*: the Explorer reuses it.
- **Send the Month end dashboard by digest** at the start of the month, as PDF, to the accounting team.
