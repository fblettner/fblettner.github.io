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

<svg viewBox="0 0 1320 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="488" rx="14" fill="url(#exg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorer</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Build an analysis from the invoice data…</text>
  <rect x="1034" y="34" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1057.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ PDF</text>
  <rect x="972" y="34" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1000.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Excel</text>
  <rect x="940" y="34" width="26" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="953.0" y="48.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="878" y="34" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="906.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Save</text>
  <rect x="240" y="80" width="198" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="81" width="94" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="288.0" y="95.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (12)</text>
  <line x1="336" y1="85" x2="336" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="387.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboards (3)</text>
  <rect x="448" y="81" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="458" y="95.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Amounts per status ▾</text>
  <rect x="658" y="81" width="96" height="22" rx="5" fill="url(#exg-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="706.0" y="95.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Definition</text>
  <rect x="240" y="118" width="200" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="126" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="140.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">🔍 Search a field…</text>
  <rect x="392" y="126" width="18" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="401.0" y="140.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇕</text>
  <rect x="414" y="126" width="18" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="423.0" y="140.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇳</text>
  <text x="250" y="166" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Invoices</text>
  <text x="430" y="166" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1..1</text>
  <text x="258" y="186" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Company</text>
  <text x="430" y="186" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">kco</text>
  <text x="258" y="204" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="430" y="204" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">customerName</text>
  <text x="258" y="222" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Issued</text>
  <text x="430" y="222" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">issueDate</text>
  <text x="258" y="240" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Transaction type</text>
  <text x="430" y="240" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">barCode</text>
  <text x="258" y="258" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Status</text>
  <text x="430" y="258" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">statusCode</text>
  <text x="258" y="276" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Reason code</text>
  <text x="430" y="276" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">reasonCode</text>
  <text x="258" y="296" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">Σ MEASURES</text>
  <text x="258" y="314" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Total HT</text>
  <text x="430" y="314" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">totalHT</text>
  <text x="258" y="332" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Total TTC</text>
  <text x="430" y="332" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">totalTTC</text>
  <line x1="246" y1="344" x2="434" y2="344" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="358" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">› Lifecycle events</text>
  <line x1="246" y1="368" x2="434" y2="368" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="382" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">› Validation findings</text>
  <line x1="246" y1="392" x2="434" y2="392" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="406" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">› Invoice lines</text>
  <line x1="246" y1="416" x2="434" y2="416" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="430" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">› Calculated fields  +</text>
  <rect x="456" y="118" width="624" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="464" y="126.0" width="18" height="18" rx="5" fill="none" stroke="#4a9eff" strokeWidth="1"/>
  <text x="473" y="138.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="488" y="138.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIEW</text>
  <rect x="540" y="124" width="84" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="138.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <rect x="632" y="124" width="22" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="643.0" y="138.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <rect x="654" y="124" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="665.0" y="138.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <rect x="676" y="124" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="687.0" y="138.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▮</text>
  <rect x="698" y="124" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="709.0" y="138.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⟋</text>
  <rect x="720" y="124" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="731.0" y="138.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <rect x="742" y="124" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="753.0" y="138.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◎</text>
  <rect x="770" y="124" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="799.0" y="138.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Detail</text>
  <text x="838" y="139" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Top</text>
  <rect x="860" y="124" width="48" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="870" y="138.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1000</text>
  <rect x="1022" y="124" width="50" height="22" rx="5" fill="url(#exg-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1047.0" y="138.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run</text>
  <rect x="456" y="160" width="624" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="464" y="168.0" width="18" height="18" rx="5" fill="none" stroke="#c084fc" strokeWidth="1"/>
  <text x="473" y="180.5" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◷</text>
  <text x="488" y="180.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="540" y="166" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="180.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Issued — Invoices ▾</text>
  <rect x="698" y="166" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="708" y="180.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">📅 Nov 1 – Nov 30, 2026 ▾</text>
  <rect x="930" y="172" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M932.5,177.5 L934.8,179.8 L938.8,175" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="947" y="181" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Exclude reviewed errors</text>
  <rect x="456" y="202" width="624" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="464" y="210.0" width="18" height="18" rx="5" fill="none" stroke="#4a9eff" strokeWidth="1"/>
  <text x="473" y="222.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="488" y="222.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROWS</text>
  <rect x="540" y="208" width="170" height="22" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="550" y="223" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Status</text>
  <rect x="592" y="211" width="96" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="602" y="222.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Label ▾</text>
  <text x="700" y="223" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">×</text>
  <rect x="718" y="208" width="121" height="22" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="728" y="223" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Issued</text>
  <rect x="767" y="211" width="58" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="777" y="222.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Month ▾</text>
  <rect x="456" y="244" width="624" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="464" y="252.0" width="18" height="18" rx="5" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <text x="473" y="264.5" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Σ</text>
  <text x="488" y="264.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MEASURES</text>
  <rect x="540" y="252" width="93" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="586.5" y="264.2" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Count of rows ×</text>
  <rect x="641" y="252" width="103" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="692.5" y="264.2" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Sum ▾  Total HT ×</text>
  <rect x="456" y="286" width="624" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="464" y="294.0" width="18" height="18" rx="5" fill="none" stroke="#fb923c" strokeWidth="1"/>
  <text x="473" y="306.5" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷</text>
  <text x="488" y="306.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILTERS</text>
  <rect x="540" y="294" width="149" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="614.5" y="306.2" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Transaction type  ≠  B2C ×</text>
  <rect x="456" y="330" width="624" height="158" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="468" y="348" fill="#e2e8f0" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="507" y="348" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 group(s) from 42 row(s)</text>
  <line x1="456" y1="358" x2="1080" y2="358" stroke="#1f2937" strokeWidth="1"/>
  <rect x="466" y="366" width="604" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="381.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="646" y="381.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ISSUED</text>
  <text x="756" y="381.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COUNT</text>
  <text x="846" y="381.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUM OF TOTAL HT</text>
  <rect x="466" y="394" width="604" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="408.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Deposited</text>
  <text x="646" y="408.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">2026-11</text>
  <text x="756" y="408.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">18</text>
  <text x="846" y="408.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">19 280,50</text>
  <rect x="466" y="420" width="604" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="434.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Made available</text>
  <text x="646" y="434.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">2026-11</text>
  <text x="756" y="434.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">14</text>
  <text x="846" y="434.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">20 753,89</text>
  <rect x="466" y="446" width="604" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="460.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Payment transmitted</text>
  <text x="646" y="460.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">2026-11</text>
  <text x="756" y="460.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">10</text>
  <text x="846" y="460.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">13 457,20</text>
  <rect x="20" y="34" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="49" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save · Delete · Excel · PDF</text>
  <text x="30" y="62" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in the page header</text>
  <line x1="200" y1="51.0" x2="878" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Definition</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">hides the fields and the shelves</text>
  <line x1="200" y1="101.0" x2="660" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fields list</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">expand / collapse all · name</text>
  <line x1="200" y1="157.0" x2="410" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="1120" y="222" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="237" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code or label</text>
  <text x="1130" y="250" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">code — label, label, code, 2 columns</text>
  <line x1="1120" y1="239.0" x2="688" y2="219" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">View by icon</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">table, pivot, bars, line, pie, KPI</text>
  <line x1="1120" y1="117.0" x2="698" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One card each</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">view, period, rows, measures, filters</text>
  <line x1="1120" y1="177.0" x2="1080" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">≠ on a coded field</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">keeps the rows with no value</text>
  <line x1="1120" y1="317.0" x2="716" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="1120" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Result panel</text>
  <text x="1130" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">says what the run returned</text>
  <line x1="1120" y1="367.0" x2="656" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
</svg>

---

## Analyses and Dashboards tabs \{#tabs\}

The page header holds **Save**, the delete button once a saved analysis or dashboard is open, **Excel** and **PDF**. Below it, the first row holds two tabs, **Analyses** (the default) and **[Dashboards](#dashboards)**, each with the number saved, then the picker of the saved analyses (*Saved analyses…*, *— New analysis —*) or dashboards (*Dashboards…*, *— New dashboard —*), and **Definition** for an analysis or **Edit layout** for a dashboard.

### Definition button \{#definition\}

**Definition** shows or hides the fields list and the cards of the definition. Hidden, the result takes the whole page and only the **View** card stays, with the view buttons, the period, **Top** and **Run**: the period moves onto the View line, so the analysis can be run again over another period without opening the definition. A saved analysis opens on its result, definition hidden; a new analysis opens on its definition.

---

## The fields

The left pane lists the fields of seven entities, with a search box and two buttons, **Expand all** and **Collapse all**, that open or close every entity at once. Each field shows its label and, at the right, its name — the one to type in a [calculated field](#calculated-fields) (`statusCode`, `totalHT`, `issueDate`…):

| Entity | One row per |
|---|---|
| **Invoices** | Invoice: status, amounts, counterparty, dates. |
| **Documents (archive)** | Archived document. |
| **Lifecycle events** | Status event of an invoice. |
| **Validation findings** | Validation finding of an invoice. |
| **Invoice lines** | Invoice line. |
| **VAT breakdown** | VAT breakdown row. |
| **Notifications** | Notification. |

The entity picked on the **View** card decides what a row of the result counts; fields of the other entities join through the invoice. A filter on lifecycle events, findings or lines selects the invoices that have such a row.

A field is dragged onto a shelf, or clicked to add it. Amounts are in their real unit. A coded field — status, transaction type… — shows the labels of the list chosen for that column in [List views](../configuration/list-views.md) (Invoices, E-Documents, Integration errors), so a short list set there applies to the Explorer too.

---

## Building an analysis

The definition is a column of cards, one per part of the analysis, above the result:

| Card | Use |
|---|---|
| **View** | The entity, then the view: one icon button per view — table, pivot, bars, line, pie, KPI — and **Detail**. **Top** limits the result to the largest groups; **Run** executes the analysis. |
| **Options** | Shown for a chart or a pivot: the measure drawn, *Horizontal*, *Stacked*, *Area*, *Donut*, the pivot's measure and **Share**, the field laid out as **Columns** (pivot) or **Series** (chart). |
| **Period** | A date field of any entity and its range, or *No period filter*. The switch **Exclude reviewed errors** leaves out the errors customer service has already handled. |
| **Rows** | The fields the result is grouped by. A date groups by **day**, **week**, **month**, **quarter** or **year**; a coded field chooses what it shows (see below). In a chart, the second row field gives the series. In the Detail view, this card lists the **Columns**. |
| **Measures** | The values computed per group: **Count**, **Distinct**, **Sum**, **Average**, **Min**, **Max**. *Count of rows* is offered by default. |
| **Filters** | Conditions on any field — *contains*, `=`, `≠`, `<`, `≤`, `>`, `≥`, *between*, *in*, *is empty*, *is not empty*. On a coded field, `≠` also keeps the rows where the field is empty. |

The result sits in a panel below the cards. Its heading names the view and says what the run returned: *3 group(s) from 42 row(s)* for a grouped result — with *truncated to the top rows* when **Top** cut it — or the number of rows in the Detail view.

### Code or label of a coded field \{#code-or-label\}

A row on a coded field — status, reason, transaction type… — carries a selector, *What the column shows*:

| Choice | Shown |
|---|---|
| **Code — label** *(default)* | Code and label in one cell — `200 — Deposited`. |
| **Label** | The label alone. |
| **Code** | The code alone. |
| **Two columns** | In the table, the code (column heading followed by `(ID)`) and the label side by side; the pivot, the charts, the PDF and the Excel show code and label in one cell. |

The table, the pivot, the charts, the PDF and the Excel follow the choice, which is saved with the analysis. A [daily digest](../sync/scheduled-jobs/daily-digest.md) sending the analysis always shows code and label.

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

The **Dashboards** tab gathers saved analyses as **tiles** on a four-column grid, each with its width, its height and its view — chart, table or pivot. The **Period** card at the top applies to every tile; **Refresh** runs the tiles again. A tile drills like its analysis, and its pencil opens the analysis in the editor.

### Edit layout \{#edit-layout\}

**Edit layout** turns the grid into a layout editor:

| Action | How |
|---|---|
| **Add a tile** | Pick an analysis in *Analysis to add…* on the Period card: it is added at the end of the grid. |
| **Move a tile** | Drag it by its grip (⠿, *Drag to move*) onto another tile; a blue bar shows where it lands. |
| **Size a tile** | Drag its bottom-right corner (*Drag to size*): the width snaps to one to four columns, the height to S, M or L. The tile heading shows the size — `2 × M`. |
| **Keyboard** | On the grip, ← and → move the tile before or after its neighbour; Shift + arrows change its width and height. |
| **Remove a tile** | The bin of the tile heading. |

**Save**, in the page header, records the layout.

<svg viewBox="0 0 1320 422" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="386" rx="14" fill="url(#exd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorer</text>
  <rect x="1034" y="34" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1057.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ PDF</text>
  <rect x="972" y="34" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1000.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Excel</text>
  <rect x="940" y="34" width="26" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="953.0" y="48.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="878" y="34" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="906.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Save</text>
  <rect x="240" y="76" width="198" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="288.0" y="91.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (12)</text>
  <rect x="337" y="77" width="100" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="387.0" y="91.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboards (3)</text>
  <rect x="448" y="77" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="458" y="91.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Month end ▾</text>
  <rect x="658" y="77" width="94" height="22" rx="5" fill="url(#exd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="705.0" y="91.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Edit layout</text>
  <rect x="240" y="112" width="840" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="120.0" width="18" height="18" rx="5" fill="none" stroke="#c084fc" strokeWidth="1"/>
  <text x="257" y="132.5" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◷</text>
  <text x="272" y="132.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="324" y="118" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="334" y="132.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">📅 Last 30 days ▾</text>
  <rect x="810" y="118" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="820" y="132.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Analysis to add… ▾</text>
  <rect x="998" y="118" width="74" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1035.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Refresh</text>
  <rect x="240" y="156" width="840" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#4a9eff" strokeWidth="1" strokeDasharray="0"/>
  <text x="252.0" y="174" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="266.0" y="174" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">VAT per month and rate</text>
  <text x="1050.0" y="174" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4 × M</text>
  <text x="1068.0" y="174" fill="#f87171" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">🗑</text>
  <path d="M1076,262 L1076,272 L1066,272" fill="none" stroke="#94a3b8" strokeWidth="1.6"/>
  <rect x="278.0" y="240.0" width="64.0" height="20.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="278.0" y="233.3" width="64.0" height="6.7" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="378.0" y="233.3" width="64.0" height="26.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="378.0" y="226.7" width="64.0" height="6.7" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="478.0" y="226.7" width="64.0" height="33.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="478.0" y="213.3" width="64.0" height="13.3" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="578.0" y="233.3" width="64.0" height="26.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="578.0" y="226.7" width="64.0" height="6.7" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="678.0" y="220.0" width="64.0" height="40.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="678.0" y="206.7" width="64.0" height="13.3" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="778.0" y="226.7" width="64.0" height="33.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="778.0" y="220.0" width="64.0" height="6.7" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="878.0" y="213.3" width="64.0" height="46.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="878.0" y="200.0" width="64.0" height="13.3" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="978.0" y="220.0" width="64.0" height="40.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="978.0" y="206.7" width="64.0" height="13.3" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="240" y="286" width="415" height="110" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="252.0" y="304" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="266.0" y="304" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Amounts per status</text>
  <text x="625.0" y="304" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2 × M</text>
  <text x="643.0" y="304" fill="#f87171" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">🗑</text>
  <path d="M651,382 L651,392 L641,392" fill="none" stroke="#94a3b8" strokeWidth="1.6"/>
  <text x="256.0" y="326" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Deposited</text>
  <text x="639.0" y="326" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">19 280,50</text>
  <text x="256.0" y="346" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Made available</text>
  <text x="639.0" y="346" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">20 753,89</text>
  <text x="256.0" y="366" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Payment transmitted</text>
  <text x="639.0" y="366" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">13 457,20</text>
  <rect x="665" y="286" width="415" height="110" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="677.0" y="304" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="691.0" y="304" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Top customers</text>
  <text x="1050.0" y="304" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2 × M</text>
  <text x="1068.0" y="304" fill="#f87171" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">🗑</text>
  <path d="M1076,382 L1076,392 L1066,392" fill="none" stroke="#94a3b8" strokeWidth="1.6"/>
  <text x="681.0" y="326" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="755" y="318" width="274" height="10" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <text x="681.0" y="348" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="755" y="340" width="183" height="10" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <text x="681.0" y="370" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Gamma SAS</text>
  <rect x="755" y="362" width="107" height="10" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="1120" y="74" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit layout</text>
  <text x="1130" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">add, move and size tiles</text>
  <line x1="1120" y1="91.0" x2="752" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="168" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="183" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grip</text>
  <text x="30" y="196" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drag to move · arrow keys</text>
  <line x1="200" y1="185.0" x2="254.0" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Size by the corner</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Shift + arrows from the grip</text>
  <line x1="200" y1="347.0" x2="647.0" y2="392" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1120" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save · Excel · PDF</text>
  <text x="1130" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one sheet per tile in Excel</text>
  <line x1="1120" y1="43.0" x2="1080" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="112" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One period for all</text>
  <text x="30" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">applies to every tile</text>
  <line x1="200" y1="129.0" x2="324" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Width × height</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">4 columns · S, M, L</text>
  <line x1="1120" y1="217.0" x2="1040.0" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
</svg>

---

## Ready-made analyses and dashboards

NomaUBL installs twelve analyses and three dashboards, once; they are never overwritten afterwards, so they can be adapted.

| Audience | Dashboard | Analyses |
|---|---|---|
| **IT** | Operations | Volume per document · Findings per day: validation / integration · Send and import failures · Invoices in a workflow status |
| **Accounting** | Month end | VAT per month and rate · Amounts per status · Top customers · Invoices and credit notes per month |
| **Audit** | Audit period | Findings per rule · Refusals and rejections per reason · Status events per month · Status statistics |

*Status statistics* reproduces the detail table of the [Statistics](./statistics.md#detail-table) dashboard. *Findings per day* splits each day's findings into **validation** (the invoice data broke a Schematron or XSD rule, customer packs included) and **integration** (a technical step failed: platform, database, transformation, PDF, XML, UBL generation, validator, processing).

---

## Exports and digests

| Export | Content |
|---|---|
| **PDF** | An analysis or a dashboard in the [audit report](reports/audit-report.md) layout: cover with environment, period, date, author and version, contents for a dashboard, running headers, each chart with all its data, filters noted. |
| **Excel** | The result as shown: the cross table for a pivot, otherwise its columns and rows; a dashboard as one sheet per tile. |
| **PNG** | The chart of an analysis. |

A [daily digest](../sync/scheduled-jobs/daily-digest.md) can send a saved analysis or a whole dashboard, run over the digest's window, as Excel or as a PDF in the same layout.

---

## Access

Grant the **Explorer** page in the Navigation group on the [Roles](../configuration/security/roles.md) page. The results follow the company visibility of the signed-in user.

---

## Tips & best practices

- **Start from a ready-made analysis** and *Save as* to adapt it; the original stays available.
- **Hide the definition to read a saved analysis.** The period stays on the View line: change it and **Run**.
- **Show the label alone** on a coded row for a report read by people who do not know the codes; keep the code for a technical analysis.
- **Pick the entity first.** It decides what is counted: invoices, lines, events or findings.
- **Use the pivot with share of parent** to read a distribution — statuses per company, VAT rates per month.
- **Give a short list to coded fields** in *List views*: the Explorer reuses it.
- **Send the Month end dashboard by digest** at the start of the month, as PDF, to the accounting team.
