---
title: Data Explorer
description: "The Liberty Next Data Explorer: free analysis of an app's data without writing SQL — fields pane, rows, measures and filters, a period, table, pivot, charts and KPI views, detail rows and drill, calculated fields, saved analyses, dashboards and Excel / PDF export, over a model built in Settings → Explorer."
keywords: [Liberty Next, Data Explorer, explorer, analysis, pivot, ad hoc reporting, self-service BI, measures, dimensions, drill, data mart]
---

# Data Explorer

The Data Explorer lets users analyse an app's data on their own: they pick fields, group, filter, choose a period, then read the result as a table, a pivot, a chart or KPI cards — without writing a query. It works on any connected application whose data is reached through a SQL connector.

An operator first describes the data once, as a **model**, in **Settings → Explorer**. Users then open the explorer from the **compass** in the header, which appears when at least one model is available to them.

---

## At a glance

<svg viewBox="0 0 1200 560" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="530" rx="14" fill="url(#exo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">CRM pipeline — deals, customers, activities</text>
  <rect x="780" y="28" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="790" y="42.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">CRM pipeline · crm · pipeline ▾</text>
  <line x1="240" y1="72" x2="960" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="82" width="185" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="83" width="85" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="283.5" y="97.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (2)</text>
  <line x1="327" y1="87" x2="327" y2="101" stroke="#334155" strokeWidth="1"/>
  <text x="376.0" y="97.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboards (1)</text>
  <rect x="435" y="83" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="445" y="97.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Won deals by country ▾</text>
  <rect x="623" y="83" width="43" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="644.5" y="97.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="672" y="83" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="701.5" y="97.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save as</text>
  <rect x="737" y="83" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="761.0" y="97.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="791" y="83" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.5" y="97.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="240" y="118" width="168" height="410" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="136" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⌕  Search fields…</text>
  <line x1="240" y1="144" x2="408" y2="144" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="162" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Deals</text>
  <rect x="366" y="150" width="35" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="383.5" y="162.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="266" y="182" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Stage</text>
  <text x="266" y="200" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Owner</text>
  <text x="266" y="218" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Close date</text>
  <text x="266" y="236" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Name</text>
  <text x="266" y="256" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Σ Measures</text>
  <text x="266" y="274" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Σ  Amount</text>
  <text x="250" y="298" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Customers</text>
  <rect x="366" y="286" width="35" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="383.5" y="298.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="250" y="322" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Activities</text>
  <rect x="366" y="310" width="35" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="383.5" y="322.2" fill="#fb923c" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n</text>
  <line x1="240" y1="342" x2="408" y2="342" stroke="#334155" strokeDasharray="4 3" strokeWidth="1"/>
  <text x="250" y="360" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">+ New calculated field</text>
  <rect x="420" y="118" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="132.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Deals ▾</text>
  <rect x="518" y="117" width="168" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="531.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <rect x="545" y="118" width="24" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="557.0" y="132.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <text x="583.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▮</text>
  <text x="609.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">∿</text>
  <text x="635.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <text x="667.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">KPI</text>
  <rect x="692" y="117" width="55" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="719.5" y="132.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Detail</text>
  <text x="757" y="133" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Top</text>
  <rect x="779" y="118" width="40" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="789" y="132.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">100</text>
  <rect x="890" y="118" width="70" height="22" rx="5" fill="url(#exo-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="925.0" y="132.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run</text>
  <text x="420" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Measure</text>
  <rect x="472" y="152" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="482" y="166.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sum of Amount ▾</text>
  <text x="604" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="656" y="152" width="96" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="666" y="166.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Automatic ▾</text>
  <text x="764" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Share</text>
  <rect x="794" y="151" width="171" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="815.5" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">None</text>
  <line x1="837" y1="156" x2="837" y2="168" stroke="#334155" strokeWidth="1"/>
  <text x="870.0" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">of parent</text>
  <rect x="904" y="152" width="60" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="934.0" y="165.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">of total</text>
  <text x="420" y="200" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▣ Period</text>
  <rect x="490" y="186" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="200.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Close date ▾</text>
  <rect x="618" y="186" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="628" y="200.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">This year ▾</text>
  <rect x="420" y="220" width="540" height="28" rx="6" fill="none" stroke="#334155" strokeDasharray="4 3" strokeWidth="1"/>
  <text x="430" y="238" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Rows</text>
  <rect x="464" y="225" width="53" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="490.5" y="237.2" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Country</text>
  <rect x="523" y="225" width="43" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="544.5" y="237.2" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Stage</text>
  <rect x="420" y="254" width="540" height="28" rx="6" fill="none" stroke="#334155" strokeDasharray="4 3" strokeWidth="1"/>
  <text x="430" y="272" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Measures</text>
  <rect x="484" y="259" width="83" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="525.5" y="271.2" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Sum ▾  Amount</text>
  <text x="577" y="272" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">+</text>
  <rect x="420" y="288" width="540" height="28" rx="6" fill="none" stroke="#334155" strokeDasharray="4 3" strokeWidth="1"/>
  <text x="430" y="306" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="479" y="293" width="123" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="540.5" y="305.2" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Industry  =  Industry</text>
  <rect x="420" y="330" width="540" height="198" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="432" y="350" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">COUNTRY › STAGE</text>
  <text x="948" y="350" fill="#64748b" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">TOTAL</text>
  <line x1="420" y1="358" x2="960" y2="358" stroke="#1f2937" strokeWidth="1"/>
  <rect x="421" y="363" width="538" height="22" fill="rgba(255,255,255,0.03)"/>
  <text x="432" y="378" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  France</text>
  <text x="908" y="378" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">165 000</text>
  <text x="948" y="378" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">86 %</text>
  <text x="452" y="402" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Negotiation</text>
  <text x="908" y="402" fill="#e2e8f0" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">120 000</text>
  <text x="948" y="402" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">63 %</text>
  <text x="452" y="426" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Proposal</text>
  <text x="908" y="426" fill="#e2e8f0" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">45 000</text>
  <text x="948" y="426" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">23 %</text>
  <rect x="421" y="435" width="538" height="22" fill="rgba(255,255,255,0.03)"/>
  <text x="432" y="450" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Belgium</text>
  <text x="908" y="450" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">27 000</text>
  <text x="948" y="450" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">14 %</text>
  <text x="452" y="474" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Qualified</text>
  <text x="908" y="474" fill="#e2e8f0" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">27 000</text>
  <text x="948" y="474" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">14 %</text>
  <line x1="420" y1="490" x2="960" y2="490" stroke="#334155" strokeWidth="2"/>
  <text x="432" y="506" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Total</text>
  <text x="908" y="506" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">192 000</text>
  <text x="948" y="506" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">100 %</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyses, dashboards</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">saved, shared, exported</text>
  <line x1="210" y1="91.0" x2="240" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="10" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fields pane</text>
  <text x="20" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click, funnel or drag</text>
  <line x1="210" y1="187.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="10" y="400" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Calculated fields</text>
  <text x="20" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">typed, tested on the server</text>
  <line x1="210" y1="417.0" x2="250" y2="356" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Model</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one per data mart</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1000" y="94" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="109" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Views</text>
  <text x="1010" y="122" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">table, pivot, charts, KPI, detail</text>
  <line x1="1000" y1="111.0" x2="620" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1000" y="196" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="1010" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on any date field</text>
  <line x1="1000" y1="213.0" x2="728" y2="197" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1000" y="262" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shelves</text>
  <text x="1010" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rows, measures, filters</text>
  <line x1="1000" y1="279.0" x2="960" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1000" y="420" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click drills</text>
  <text x="1010" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to the rows behind a figure</text>
  <line x1="1000" y1="437.0" x2="908" y2="402" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
</svg>

---

## The pieces \{#pieces\}

| Piece | What it is | Page |
|---|---|---|
| **Model** | One data mart of an app: a central entity (the **hub**, such as deals or invoice lines) and the entities around it (customers, activities…), each read by a query of a connector, joined by relations. An app can have several models. | [Build a model](./model.md) |
| **Analysis** | What the user puts together on the page: rows, measures, filters, a period, a view. | [Analyse data](./analysis.md) |
| **Calculated field** | A field computed from the others (`AMOUNT * 0.6`, `year(CLOSE_DATE)`), typed and checked on the server. | [Calculated fields](./calculated-fields.md) |
| **Saved analysis, dashboard** | An analysis kept under a name, private or shared; a dashboard is a grid of saved analyses. Both export to Excel and PDF. | [Saved analyses and dashboards](./saved-and-dashboards.md) |

---

## Who sees what \{#access\}

- A model is offered to the holders of a role that grants it: in **Settings → Access → Roles**, **Beyond the menus**, type **Data Explorer**, then a model, or every model of an app. Superusers see every model. See [Roles & permissions](../build/secure/roles-and-permissions.md#access).
- The role's **data scope** applies inside every query the explorer runs: a user who sees one company's rows in the screens sees the same rows in the explorer, the totals included. See [Data scope](../build/secure/roles-and-permissions.md#data-scope).
- Only a superuser edits **Settings → Explorer**, and sees the SQL of an analysis and the model's warnings (a column that disappeared, a measure that is not numeric).

---

## What it is not \{#limits\}

- **Not a SQL editor.** Users never type SQL: the explorer builds one statement from the model, the same on Oracle, PostgreSQL and SQLite. A calculated field is a small expression language, compiled by the server.
- **Not unlimited.** An aggregate reads at most 50,000 grouped rows (beyond that, a note says the figures are partial) and shows the **Top** N groups (up to 10,000). The detail view pages through the rows; an export holds up to 3,000 rows per section.
- **Not a replacement for dashboards.** [Dashboards](../dashboards.md) are designed by an operator over chosen queries; the explorer lets users build their own views over a model.

---

## What's next

- [Build a model](./model.md) — Settings → Explorer, from scratch or from a Screen Assistant preset.
- [Analyse data](./analysis.md) — the page, step by step.
