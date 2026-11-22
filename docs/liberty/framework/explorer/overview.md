---
title: Data Explorer
description: "The Liberty Next Data Explorer: free analysis of an app's data without writing SQL — fields pane, rows, measures and filters, a period, table, pivot, charts and KPI views, detail rows and drill, calculated fields, saved analyses, dashboards and Excel / PDF export, over a model built in Liberty Next → Insight → Explorer."
keywords: [Liberty Next, Data Explorer, explorer, analysis, pivot, ad hoc reporting, self-service BI, measures, dimensions, drill, data mart]
---

# Data Explorer

The Data Explorer lets users analyse an app's data on their own: they pick fields, group, filter, choose a period, then read the result as a table, a pivot, a chart or KPI cards — without writing a query. It works on any connected application whose data is reached through a SQL connector, or through the endpoints of an API connector.

An operator first describes the data once, as a **model**, in **Liberty Next → Insight → Explorer**. Users then open the explorer from the **compass** in the header, which appears when at least one model is available to them, or from a menu entry that opens it on a model, a saved analysis or a dashboard.

---

## At a glance

<svg viewBox="0 0 1320 570" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="530" rx="14" fill="url(#exo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <rect x="446" y="84" width="270" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="456" y="99.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">won_by_country  sales · Won deals by country   ▾</text>
  <rect x="724" y="84" width="86" height="24" rx="5" fill="url(#exo-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="767.0" y="99.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☷ Definition</text>
  <rect x="240" y="118" width="200" height="400" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="126" width="184" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="140.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Search fields…</text>
  <text x="250" y="166" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Deals</text>
  <rect x="400" y="156" width="34" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="417.0" y="166.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="260" y="186" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">#</text>
  <text x="272" y="186" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Amount</text>
  <text x="430" y="186" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">AMOUNT</text>
  <text x="260" y="204" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">T</text>
  <text x="272" y="204" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Stage</text>
  <text x="430" y="204" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">STAGE</text>
  <text x="260" y="222" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">▤</text>
  <text x="272" y="222" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Close date</text>
  <text x="430" y="222" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">CLOSE_DATE</text>
  <text x="260" y="240" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">T</text>
  <text x="272" y="240" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Country</text>
  <text x="430" y="240" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <text x="260" y="258" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">T</text>
  <text x="272" y="258" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Owner</text>
  <text x="430" y="258" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">OWNER</text>
  <text x="250" y="284" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">› Customers</text>
  <rect x="400" y="274" width="34" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="417.0" y="284.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="250" y="306" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">› Activities</text>
  <rect x="400" y="296" width="34" height="14" rx="7.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="417.0" y="306.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n</text>
  <line x1="248" y1="346" x2="432" y2="346" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="252" y="364" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">+ New calculated field</text>
  <rect x="452" y="118" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="127.0" width="20" height="20" rx="6" fill="#4a9eff" fillOpacity="0.15" stroke="#4a9eff" strokeWidth="1"/>
  <text x="472" y="140.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="490" y="140.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VIEW</text>
  <rect x="582" y="126" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592" y="140.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">deals  Deals     ▾</text>
  <rect x="702" y="126" width="132" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="713" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <rect x="725" y="127" width="20" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="735" y="141" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <text x="757" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▥</text>
  <text x="779" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">∿</text>
  <text x="801" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <text x="823" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◠</text>
  <rect x="840" y="126" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.0" y="140.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Detail</text>
  <text x="904" y="141" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Top</text>
  <rect x="926" y="126" width="44" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="936" y="140.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">100</text>
  <rect x="1018" y="126" width="54" height="22" rx="5" fill="url(#exo-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="140.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="452" y="164" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="173.0" width="20" height="20" rx="6" fill="#4a9eff" fillOpacity="0.15" stroke="#4a9eff" strokeWidth="1"/>
  <text x="472" y="186.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">≡</text>
  <text x="490" y="186.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OPTIONS</text>
  <text x="582" y="187" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Measure</text>
  <rect x="623.32" y="172" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="633.32" y="186.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Sum of Amount  ▾</text>
  <text x="735.32" y="187" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="776.6400000000001" y="172" width="84" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="786.6400000000001" y="186.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Automatic ▾</text>
  <text x="868.6400000000001" y="187" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Share</text>
  <rect x="900.44" y="172" width="164" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="920.94" y="186.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">None</text>
  <line x1="941.44" y1="177" x2="941.44" y2="189" stroke="#334155" strokeWidth="1"/>
  <text x="973.44" y="186.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">of parent</text>
  <rect x="1006.44" y="173" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1034.94" y="186.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">of total</text>
  <rect x="452" y="210" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="219.0" width="20" height="20" rx="6" fill="#c084fc" fillOpacity="0.15" stroke="#c084fc" strokeWidth="1"/>
  <text x="472" y="232.5" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="490" y="232.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="582" y="218" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592" y="232.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">deals.CLOSE_DATE  Close date  ▾</text>
  <rect x="780" y="218" width="96" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="828.0" y="232.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▤ This year  ▾</text>
  <rect x="452" y="256" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="265.0" width="20" height="20" rx="6" fill="#4a9eff" fillOpacity="0.15" stroke="#4a9eff" strokeWidth="1"/>
  <text x="472" y="278.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">≣</text>
  <text x="490" y="278.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROWS</text>
  <rect x="582" y="266" width="60" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="612.0" y="278.2" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Country ✕</text>
  <rect x="648" y="266" width="51" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="673.5" y="278.2" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Stage ✕</text>
  <rect x="452" y="302" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="311.0" width="20" height="20" rx="6" fill="#4ade80" fillOpacity="0.15" stroke="#4ade80" strokeWidth="1"/>
  <text x="472" y="324.5" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Σ</text>
  <text x="490" y="324.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MEASURES</text>
  <rect x="582" y="312" width="89" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="626.5" y="324.2" fill="#4ade80" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Sum of Amount ✕</text>
  <circle cx="686" cy="321" r="8" fill="none" stroke="#475569" strokeDasharray="2 2"/>
  <text x="686" y="324.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="452" y="348" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="357.0" width="20" height="20" rx="6" fill="#fb923c" fillOpacity="0.15" stroke="#fb923c" strokeWidth="1"/>
  <text x="472" y="370.5" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷</text>
  <text x="490" y="370.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FILTERS</text>
  <rect x="582" y="358" width="108" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="636.0" y="370.2" fill="#fb923c" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Industry = Retail ✕</text>
  <rect x="452" y="396" width="628" height="140" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="466" y="416" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PIVOT</text>
  <text x="511.8" y="416" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">4 group(s) from 120 row(s)</text>
  <rect x="1048" y="404" width="24" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060.0" y="416.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">&lt;/&gt;</text>
  <line x1="453" y1="428" x2="1079" y2="428" stroke="#1f2937" strokeWidth="1"/>
  <text x="468" y="446" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ France</text>
  <text x="1020" y="446" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="ui-monospace, monospace">165 000</text>
  <text x="1066" y="446" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">86 %</text>
  <text x="486" y="466" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Negotiation</text>
  <text x="1020" y="466" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">120 000</text>
  <text x="1066" y="466" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">63 %</text>
  <text x="486" y="486" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Proposal</text>
  <text x="1020" y="486" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">45 000</text>
  <text x="1066" y="486" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">23 %</text>
  <text x="468" y="506" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Belgium</text>
  <text x="1020" y="506" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="ui-monospace, monospace">27 000</text>
  <text x="1066" y="506" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">14 %</text>
  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyses, dashboards</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">saved, shared, exported</text>
  <line x1="200" y1="101.0" x2="240" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fields pane</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click, funnel or drag</text>
  <line x1="200" y1="197.0" x2="272" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Calculated fields</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">typed, tested on the server</text>
  <line x1="200" y1="377.0" x2="252" y2="360" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="30" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save, export, menu</text>
  <text x="1150" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in the page header</text>
  <line x1="1140" y1="47.0" x2="907.0" y2="31" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="84" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Definition</text>
  <text x="1150" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">hides fields and shelves</text>
  <line x1="1140" y1="101.0" x2="810" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="140" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Views</text>
  <text x="1150" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">table, pivot, charts, KPI, detail</text>
  <line x1="1140" y1="157.0" x2="768" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="1150" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on a date field of the entity</text>
  <line x1="1140" y1="257.0" x2="876" y2="229" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="330" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shelves</text>
  <text x="1150" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rows, measures, filters</text>
  <line x1="1140" y1="347.0" x2="732" y2="367" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="470" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click drills</text>
  <text x="1150" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to the rows behind a figure</text>
  <line x1="1140" y1="487.0" x2="1020" y2="462" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
</svg>

---

## The pieces \{#pieces\}

| Piece | What it is | Page |
|---|---|---|
| **Model** | One data mart of an app: a central entity (the **hub**, such as deals or invoice lines) and the entities around it (customers, activities…), each read by a query or a table of a SQL connector (or an endpoint of an API connector), joined by relations. An app can have several models. | [Build a model](./model.md) |
| **Analysis** | What the user puts together on the page: rows, measures, filters, a period, a view. | [Analyse data](./analysis.md) |
| **Calculated field** | A field computed from the others (`AMOUNT * 0.6`, `year(CLOSE_DATE)`), typed and checked on the server. | [Calculated fields](./calculated-fields.md) |
| **Saved analysis, dashboard** | An analysis kept under a name, private or shared; a dashboard is a grid of saved analyses. Both export to Excel and PDF. | [Saved analyses and dashboards](./saved-and-dashboards.md) |

---

## Who sees what \{#access\}

- A model is offered to the holders of a role that grants it: in **Liberty Next → Administer → Access → Roles**, **Beyond the menus**, type **Data Explorer**, then a model, or every model of an app. Superusers see every model. See [Roles & permissions](../build/secure/roles-and-permissions.md#access).
- The role's **data scope** applies inside every query the explorer runs: a user who sees one company's rows in the screens sees the same rows in the explorer, the totals included. See [Data scope](../build/secure/roles-and-permissions.md#data-scope).
- A menu entry can open the explorer on one model (`/explorer/<app>/<model>`), so each functional folder of an app reaches its own data; the model picker still lets the user switch. See [Menu item types](../build/menus/item-types.md#explorer).
- A shared analysis or dashboard can become a menu entry of its own: a superuser uses **Add to a menu**, and one click on the entry opens the explorer on it, its result at once. See [Add to a menu](./saved-and-dashboards.md#menu).
- Only a superuser edits **Liberty Next → Insight → Explorer**, and sees the SQL of an analysis and the model's warnings (a column that disappeared, a measure that is not numeric).

---

## What it is not \{#limits\}

- **Not a SQL editor.** Users never type SQL: the explorer builds one statement from the model, the same on Oracle, PostgreSQL and SQLite. A calculated field is a small expression language, compiled by the server.
- **Not unlimited.** An aggregate reads at most 50,000 grouped rows (beyond that, a note says the figures are partial) and shows the **Top** N groups (up to 10,000). The detail view pages through the rows; an export holds up to 3,000 rows per section.
- **Not a replacement for dashboards.** [Dashboards](../dashboards.md) are designed by an operator over chosen queries; the explorer lets users build their own views over a model.

---

## What's next

- [Build a model](./model.md) — Liberty Next → Insight → Explorer, from scratch or from a Screen Assistant preset.
- [Analyse data](./analysis.md) — the page, step by step.
