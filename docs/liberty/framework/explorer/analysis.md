---
title: Analyse data
description: "Using the Liberty Next Data Explorer: the fields pane, the Rows, Measures and Filters shelves, the period, Top N, the table, pivot, bar, line, pie and KPI views, the detail view, the drill to the rows behind a figure and the record dialog."
keywords: [Liberty Next, Data Explorer, analysis, fields pane, shelves, rows, measures, filters, period, pivot, chart, KPI, detail, drill]
---

# Analyse data

The explorer opens from the **compass** in the header. The model picker at the top right switches between the models available; picking an app in the left navigation opens that app's model.

The analysis runs on its own a moment after each change; **Run** runs it again on demand.

---

## Fields pane \{#fields\}

The left pane lists the model's entities — the analysed one opened, the others folded — with their **1..1** or **1..n** badge. In each entity, the dimensions come first, then the **Σ Measures**. The search box filters the fields of every entity.

| Action | Result |
|---|---|
| Click a field | A dimension goes to **Rows**, a measure to **Measures**. |
| Funnel on a field | The field goes to **Filters**. |
| Drag a field | Drops it on the shelf of choice. |
| Double-click an entity | Makes it the **analysed entity** — the one the analysis starts from (the hub by default). The selector at the left of the toolbar does the same. |

Fields already in use are highlighted. **New calculated field**, at the bottom of the pane, opens the [calculated-field editor](./calculated-fields.md).

---

## Shelves \{#shelves\}

| Shelf | Content |
|---|---|
| **Rows** | The dimensions to group by. A date gets a grouping: *Exact value*, *Day*, *Week*, *Month* (the default), *Quarter*, *Year*. In the detail view, this shelf lists the columns shown. |
| **Measures** | One aggregate per chip: *Sum*, *Average*, *Min*, *Max*, *Count*, *Distinct count* for a number; *Count* or *Distinct count* otherwise. **+** adds a row count. A dimension dropped here counts its distinct values. |
| **Filters** | A field, an operator, a value. Text: *contains*, `=`, `≠`, *starts with*, *ends with*, *in*, *is empty*, *is not empty*. Numbers and dates: `=`, `≠`, *between*, `<`, `≤`, `>`, `≥`, *in*, *is empty*, *is not empty*. A field with a list of values offers its values; *in* takes a comma-separated list. On a date or date-time field, a day stands for the whole day: `≤` and the end of *between* keep that day's rows whatever their time, `=` and `≠` mean within or outside that day; the date is picked with the application's date picker. |

Chips move by drag within a shelf; the cross removes one. A filter value applies on **Enter** or when leaving the field.

---

## Period and Top N \{#period\}

The **Period** bar appears when the analysed entity has a date field: pick the date field (the entity's default date first), then a preset — *Today*, *Yesterday*, *Last 7 days*, *Last 30 days*, *This month*, *Last month*, *This quarter*, *This year*, *Last year*, *Last 12 months* — or a custom range on the calendar. *All dates* removes the period.

**Top** keeps the first N groups (up to 10,000). The note in the toolbar reads *N group(s) from M row(s)*, and says when the list was cut or when the figures are partial.

---

## Views \{#views\}

The buttons of the toolbar switch the view without running the query again.

| View | Shows |
|---|---|
| **Table** | One row per group, sortable by header. A click on a row drills to its rows. |
| **Pivot** | The rows as a collapsible hierarchy with subtotals, one dimension spread as **Columns** (*Automatic*: the last one), a grand total, and a **Share** — *of parent* or *of total* — beside each value. Subtotals appear only for a sum or a count: a sum of averages means nothing. Toolbar: expand all, collapse all, Excel export. A click on a value drills. |
| **Bars**, **Lines** | The first dimension on the x axis, the second one (or the measures) as **Series**; the top 10 series, the rest folded into *Others*; dates in order, other categories by value; **Stacked** option. |
| **Pie** | The first dimension as slices, top 10 plus *Others*. |
| **KPI** | One card per measure with its total. |
| **Detail** | The rows themselves, 50 per page, with the **Rows** shelf as columns (the analysed entity's fields when empty). |

**Measure** picks the measure of the pivot or the chart (the first one by default).

---

## Drill and record \{#drill\}

A click on a group of the table or on a value of the pivot lists the **rows behind that figure**: the key, the dimensions and the measures' fields of each row. The values of the cell show above the list (*Country: France*, *Stage: Negotiation*); **Back to the analysis** returns to the figures.

In the detail view, and after a drill, a row of an entity linked to a screen opens that screen's **dialog**: the record shows as it does in the screen, and can be edited with the same rights. The analysis refreshes after a save.

---

## The page \{#page\}

What an analysis is made of reads as cards, each with its icon and its colour: **View**, **Period**, **Rows** (**Columns** in the Detail view), **Measures**, **Filters** — and **Options** for a pivot or a chart. Fields are still clicked or dragged onto a shelf, and chips reorder by drag. The result is a panel whose head says the view and what the run answered — *N group(s) from N row(s)*, *first N shown*. **Save**, **Save as**, **Delete**, **Add to a menu** (a superuser's, see [Add to a menu](./saved-and-dashboards.md#menu)), **Excel** and **PDF** are in the page header, beside the model picker.

<svg viewBox="0 0 1320 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="410" rx="14" fill="url(#exr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">◎</text>
  <text x="260" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="260" y="60" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">CRM pipeline — deals, customers, activities</text>
  <rect x="930" y="31" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="45.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">crm · CRM pipeline     ▾</text>
  <rect x="892" y="31" width="30" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="907.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="848" y="31" width="39" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="766" y="31" width="77" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="804.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Add to a menu</text>
  <rect x="717" y="31" width="44" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="739.0" y="45.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="663" y="31" width="49" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="687.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save as</text>
  <rect x="623" y="31" width="35" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="640.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <line x1="221" y1="72" x2="1099" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="84" width="198" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="85" width="92" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="287.0" y="99.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚗ Analyses (3)</text>
  <line x1="334" y1="89" x2="334" y2="103" stroke="#334155" strokeWidth="1"/>
  <text x="386.0" y="99.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Dashboards (1)</text>
  <rect x="446" y="84" width="280" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="456" y="99.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">won_by_company  sales · Won deals by company   ▾</text>
  <rect x="734" y="84" width="86" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="777.0" y="99.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">☷ Definition</text>
  <rect x="240" y="118" width="840" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="127" width="20" height="20" rx="6" fill="#4a9eff" fillOpacity="0.15" stroke="#4a9eff" strokeWidth="1"/>
  <text x="260" y="140.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="278" y="140.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VIEW</text>
  <rect x="350" y="126" width="132" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="351" y="127" width="20" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="361" y="141" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="383" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <text x="405" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▥</text>
  <text x="427" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">∿</text>
  <text x="449" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <text x="471" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◠</text>
  <rect x="488" y="126" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="517.0" y="140.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Detail</text>
  <rect x="552" y="126" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="140.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">deals.CLOSE_DATE  Close date  ▾</text>
  <rect x="748" y="126" width="96" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="796.0" y="140.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▤ This year  ▾</text>
  <text x="852" y="141" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Top</text>
  <rect x="874" y="126" width="44" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="884" y="140.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">100</text>
  <rect x="1016" y="126" width="54" height="22" rx="5" fill="url(#exr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1043.0" y="140.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="240" y="166" width="840" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="186" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="297.8" y="186" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">3 group(s) from 120 row(s)</text>
  <rect x="1048" y="174" width="24" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060.0" y="186.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">&lt;/&gt;</text>
  <line x1="241" y1="198" x2="1079" y2="198" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="208" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="222.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="1003" y="208" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1035.5" y="222.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Export ▾</text>
  <rect x="938" y="208" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="222.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="882" y="208" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="907.5" y="222.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⊟ Group</text>
  <rect x="817" y="208" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="847.0" y="222.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="252" y="240" width="816" height="22" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="255" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPANY (ID)  ⇅</text>
  <text x="422" y="255" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPANY  ⇅</text>
  <text x="722" y="255" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUM OF AMOUNT  ⇅</text>
  <line x1="252" y1="287" x2="1068" y2="287" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="280" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00001</text>
  <text x="422" y="280" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="722" y="280" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">165 000</text>
  <line x1="252" y1="309" x2="1068" y2="309" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="302" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00002</text>
  <text x="422" y="302" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="722" y="302" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">27 000</text>
  <line x1="252" y1="331" x2="1068" y2="331" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="324" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00003</text>
  <text x="422" y="324" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="722" y="324" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">12 400</text>
  <text x="254" y="404" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="323.88" y="390" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="333.88" y="403.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50   ▾</text>
  <text x="385.88" y="404" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–3 of 3</text>
  <text x="1060" y="404" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  [1]  ›  »</text>
  <rect x="1140" y="84" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Definition</text>
  <text x="1150" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shows the fields and shelves</text>
  <line x1="1140" y1="101.0" x2="820" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code + label</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">two columns, each its own</text>
  <line x1="200" y1="237.0" x2="300" y2="251" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A row drills</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to the rows behind it</text>
  <line x1="200" y1="347.0" x2="262" y2="302" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="1140" y="30" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save, export, menu</text>
  <text x="1150" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in the page header</text>
  <line x1="1140" y1="47.0" x2="907.0" y2="31" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="1140" y="140" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line</text>
  <text x="1150" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">view, period, Top, Run</text>
  <line x1="1140" y1="157.0" x2="934" y2="130" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="1140" y="196" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SQL</text>
  <text x="1150" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">superusers only</text>
  <line x1="1140" y1="213.0" x2="1060" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="1140" y="250" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The shared grid</text>
  <text x="1150" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">search, filters, group, export</text>
  <line x1="1140" y1="267.0" x2="952" y2="219" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
</svg>

- **Definition**, beside the analysis picker, hides the fields and the shelves: **the result takes the page**, with the view, the period, the Top and **Run** on one line. A saved analysis opens that way, a new one on its definition.
- **The table is the grid of the data screens**: search, a filter per column, sort on several columns, grouping, the column chooser and its own CSV / Excel export of what is shown. A row still drills; a detail row still opens its record; the detail stays paged by the server.
- **A coded field shows its label, its code, or both** — the chip of a field read through an enum or a lookup offers **Label**, **Code + label**, **Code**. In the table, *Code + label* gives two columns — `Company (ID)` then `Company` —, each sorted, filtered and exported by itself; a pivot writes `101 · Alpine Foods SA` in its label cell. The choice is saved with the analysis and followed by the dashboard tiles.
- An export cut by the analysis's own Top says so: *first 20 of 44 groups*.

---

## Things to know

| Situation | What happens |
|---|---|
| A measure of a 1..n entity next to hub dimensions. | Summed per hub row, without duplicating the hub's rows. |
| Two 1..n entities in the rows. | Refused, with a message: one many-side entity at a time. |
| The note says the figures are partial. | More than 50,000 grouped rows were read: narrow the period or add a filter. |
| A superuser wants to see the query. | The `</>` button, in the head of the result, shows the statement and its values. |

## What's next

- [Calculated fields](./calculated-fields.md) — fields of your own.
- [Saved analyses and dashboards](./saved-and-dashboards.md) — keep, share, export.
