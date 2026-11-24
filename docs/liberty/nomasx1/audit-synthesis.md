---
title: Overview — Audit synthesis
description: "The Nomasx-1 home page: the Audit synthesis dashboard — users, roles, segregation-of-duties conflicts and licence exposure at a glance, the conflicts per refresh by process, the findings that need a decision, per process, per licence component, data freshness, activity and the users with the most conflicts — with an application filter, a period and Excel / PDF export."
keywords: [Nomasx-1, overview, audit synthesis, dashboard, segregation of duties, SoD, licence exposure, dormant accounts, privileged accounts, data freshness, export, PDF]
---

# Overview — Audit synthesis

**Overview**, the first entry of the Nomasx-1 menu, opens the **Audit synthesis**: on one page, the accounts, the segregation-of-duties conflicts and the licence position of every connected application, what needs a decision, and how fresh the data is. It is the page to open before an internal review, and the one to export for a steering committee.

---

## At a glance

<svg viewBox="0 0 1320 790" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxaud-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxaud-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxaud-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxaud-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="750" rx="14" fill="url(#nxaud-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Audit synthesis</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The accounts, the segregation-of-duties conflicts and the licence position at a glance, what needs a decision, and how fresh the data is.</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="107" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="254" y="113" width="196" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="128.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▣  Nov 23, 2025 – Nov 22, 2026  ▾</text>
  <text x="466" y="107" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="466" y="113" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="476" y="128.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">All</text>
  <text x="656" y="128.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="1066" y="129" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Updated at 09:15</text>
  <rect x="953.84" y="115" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="966.84" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="901.84" y="115" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="924.84" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⎙ PDF</text>
  <rect x="843.84" y="115" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.84" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⎙ Excel</text>
  <rect x="240.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Users</text>
  <text x="252.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Declared accounts</text>
  <text x="252.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">412</text>
  <text x="252.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">380 enabled · 32 disabled · 41 dormant</text>
  <rect x="452.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="464.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="464.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Defined roles and their assignment</text>
  <text x="464.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">96</text>
  <text x="464.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">81 assigned · 15 orphan · 3 users &gt; 10 roles</text>
  <rect x="665.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="677.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Segregation of duties</text>
  <text x="677.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Users carrying a conflict</text>
  <text x="677.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">37</text>
  <text x="677.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">1,204 conflict lines · 3 privileged</text>
  <rect x="877.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="889.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Licence exposure</text>
  <text x="889.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Beyond the subscription</text>
  <text x="889.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">€84,500</text>
  <text x="889.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">4 of 22 components · 18 users over</text>
  <rect x="240" y="260" width="520" height="176" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Conflicts per refresh</text>
  <text x="254" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">The conflict lines at each SoD refresh over the period, by business process</text>
  <text x="276" y="311.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">1K</text>
  <line x1="282" y1="308.0" x2="734" y2="308.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="334.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">750</text>
  <line x1="282" y1="331.0" x2="734" y2="331.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="357.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">500</text>
  <line x1="282" y1="354.0" x2="734" y2="354.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="380.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">250</text>
  <line x1="282" y1="377.0" x2="734" y2="377.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="403.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="282" y1="400.0" x2="734" y2="400.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <rect x="306.9" y="361.4" width="63.3" height="38.6" fill="#2b8cff" fillOpacity="0.85"/>
  <rect x="306.9" y="337.4" width="63.3" height="23.9" fill="#d4a017" fillOpacity="0.85"/>
  <rect x="306.9" y="320.9" width="63.3" height="16.6" fill="#e5484d" fillOpacity="0.85"/>
  <text x="338.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-05-27</text>
  <rect x="419.9" y="365.0" width="63.3" height="35.0" fill="#2b8cff" fillOpacity="0.85"/>
  <rect x="419.9" y="343.0" width="63.3" height="22.1" fill="#d4a017" fillOpacity="0.85"/>
  <rect x="419.9" y="327.3" width="63.3" height="15.6" fill="#e5484d" fillOpacity="0.85"/>
  <text x="451.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-08-28</text>
  <rect x="532.9" y="369.6" width="63.3" height="30.4" fill="#2b8cff" fillOpacity="0.85"/>
  <rect x="532.9" y="351.2" width="63.3" height="18.4" fill="#d4a017" fillOpacity="0.85"/>
  <rect x="532.9" y="338.4" width="63.3" height="12.9" fill="#e5484d" fillOpacity="0.85"/>
  <text x="564.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-28</text>
  <rect x="645.9" y="372.4" width="63.3" height="27.6" fill="#2b8cff" fillOpacity="0.85"/>
  <rect x="645.9" y="355.8" width="63.3" height="16.6" fill="#d4a017" fillOpacity="0.85"/>
  <rect x="645.9" y="344.8" width="63.3" height="11.0" fill="#e5484d" fillOpacity="0.85"/>
  <text x="677.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11-21</text>
  <rect x="390" y="418" width="9" height="9" rx="2" fill="#2b8cff"/>
  <text x="403" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Procure to pay</text>
  <rect x="481.64" y="418" width="9" height="9" rx="2" fill="#d4a017"/>
  <text x="494.64" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Order to cash</text>
  <rect x="568.52" y="418" width="9" height="9" rx="2" fill="#e5484d"/>
  <text x="581.52" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Finance</text>
  <rect x="770" y="260" width="310" height="176" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="784" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">What needs a decision</text>
  <text x="784" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">The findings of the assessment report, by severity</text>
  <circle cx="788" cy="316" r="3.2" fill="#fb923c"/>
  <text x="800" y="319" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Active SoD violations</text>
  <text x="800" y="330" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">12 of 140 matrix rules triggered</text>
  <text x="1066" y="319" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">37</text>
  <line x1="784" y1="335" x2="1066" y2="335" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="346" r="3.2" fill="#f87171"/>
  <text x="800" y="349" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Self-conflicting roles</text>
  <text x="800" y="360" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">fix the role, every holder is resolved</text>
  <text x="1066" y="349" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <line x1="784" y1="365" x2="1066" y2="365" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="376" r="3.2" fill="#4ade80"/>
  <text x="800" y="379" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Conflicting role combinations</text>
  <text x="800" y="390" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">split the duties or revise assignments</text>
  <text x="1066" y="379" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="784" y1="395" x2="1066" y2="395" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="406" r="3.2" fill="#f87171"/>
  <text x="800" y="409" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Components over subscription</text>
  <text x="800" y="420" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">buy, or remove rights</text>
  <text x="1066" y="409" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">€84,500</text>
  <text x="1066" y="420" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <rect x="240" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Per process</text>
  <text x="254" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Users in conflict per process, privileged in red</text>
  <circle cx="258" cy="504" r="3.2" fill="#fb923c"/>
  <text x="270" y="507" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Procure to pay</text>
  <text x="499.33333333333326" y="507" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">22 users</text>
  <text x="499.33333333333326" y="518" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">612 conflict lines</text>
  <line x1="254" y1="521" x2="499.33333333333326" y2="521" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="532" r="3.2" fill="#f87171"/>
  <text x="270" y="535" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Order to cash</text>
  <text x="499.33333333333326" y="535" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">9 users</text>
  <text x="499.33333333333326" y="546" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">344 conflict lines</text>
  <line x1="254" y1="549" x2="499.33333333333326" y2="549" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="560" r="3.2" fill="#fb923c"/>
  <text x="270" y="563" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Finance</text>
  <text x="499.33333333333326" y="563" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">6 users</text>
  <text x="499.33333333333326" y="574" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">248 conflict lines</text>
  <rect x="523.3333333333333" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="537.3333333333333" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Per licence component</text>
  <text x="537.3333333333333" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Users with rights, against the subscribed quantity</text>
  <text x="537.3333333333333" y="507" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">General Accounting</text>
  <text x="782.6666666666665" y="507" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">64</text>
  <rect x="537.3333333333333" y="512" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="537.3333333333333" y="512" width="245" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="537.3333333333333" y="535" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Accounts Payable</text>
  <text x="782.6666666666665" y="535" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">41</text>
  <rect x="537.3333333333333" y="540" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="537.3333333333333" y="540" width="157" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="537.3333333333333" y="563" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Sales Order Management</text>
  <text x="782.6666666666665" y="563" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">28</text>
  <rect x="537.3333333333333" y="568" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="537.3333333333333" y="568" width="108" height="5" rx="2.5" fill="#2b8cff"/>
  <rect x="806.6666666666665" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="820.6666666666665" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Data freshness</text>
  <text x="820.6666666666665" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">The last collection per module</text>
  <circle cx="824.6666666666665" cy="504" r="3.2" fill="#4ade80"/>
  <text x="836.6666666666665" y="507" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">SECURITY</text>
  <rect x="883.1946666666665" y="496" width="60" height="14" rx="7.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="913.1946666666665" y="506.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11-21</text>
  <text x="1065.9999999999998" y="507" fill="#94a3b8" fontSize="7.8" textAnchor="end" fontFamily="system-ui, sans-serif">1 day ago</text>
  <circle cx="824.6666666666665" cy="532" r="3.2" fill="#fb923c"/>
  <text x="836.6666666666665" y="535" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">LICENSE</text>
  <rect x="878.3786666666665" y="524" width="60" height="14" rx="7.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="908.3786666666665" y="534.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11-17</text>
  <text x="1065.9999999999998" y="535" fill="#94a3b8" fontSize="7.8" textAnchor="end" fontFamily="system-ui, sans-serif">5 days ago</text>
  <circle cx="824.6666666666665" cy="560" r="3.2" fill="#f87171"/>
  <text x="836.6666666666665" y="563" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">AUDIT_TRAIL</text>
  <rect x="897.6426666666665" y="552" width="60" height="14" rx="7.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="927.6426666666665" y="562.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-07-04</text>
  <text x="1065.9999999999998" y="563" fill="#94a3b8" fontSize="7.8" textAnchor="end" fontFamily="system-ui, sans-serif">141 days ago</text>
  <rect x="240" y="600" width="520" height="150" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="620" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Transacting users per month</text>
  <text x="254" y="633" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Distinct users with transactions, per application summed</text>
  <text x="276" y="649.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">400</text>
  <line x1="282" y1="646.0" x2="734" y2="646.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="667.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">300</text>
  <line x1="282" y1="664.5" x2="734" y2="664.5" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="686.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">200</text>
  <line x1="282" y1="683.0" x2="734" y2="683.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="704.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">100</text>
  <line x1="282" y1="701.5" x2="734" y2="701.5" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="723.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="282" y1="720.0" x2="734" y2="720.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <rect x="298.6" y="697.1" width="42.2" height="22.9" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="319.6666666666667" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-06</text>
  <rect x="373.9" y="695.6" width="42.2" height="24.4" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="395.0" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-07</text>
  <rect x="449.2" y="698.5" width="42.2" height="21.5" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="470.3333333333333" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-08</text>
  <rect x="524.6" y="694.8" width="42.2" height="25.2" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="545.6666666666666" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-09</text>
  <rect x="599.9" y="693.4" width="42.2" height="26.6" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="620.9999999999999" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10</text>
  <rect x="675.2" y="694.1" width="42.2" height="25.9" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="696.3333333333333" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11</text>
  <rect x="770" y="600" width="310" height="150" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="784" y="620" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users with the most conflicts</text>
  <text x="784" y="633" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Conflict lines per user, privileged accounts flagged</text>
  <circle cx="788" cy="656" r="3.2" fill="#f87171"/>
  <text x="800" y="659" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">JDOE</text>
  <text x="800" y="670" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">John Doe</text>
  <text x="1066" y="659" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">64 lines</text>
  <text x="1066" y="670" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">3 processes</text>
  <line x1="784" y1="675" x2="1066" y2="675" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="686" r="3.2" fill="#fb923c"/>
  <text x="800" y="689" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">ASMITH</text>
  <text x="800" y="700" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Anna Smith</text>
  <text x="1066" y="689" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">41 lines</text>
  <text x="1066" y="700" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">2 processes</text>
  <line x1="784" y1="705" x2="1066" y2="705" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="716" r="3.2" fill="#fb923c"/>
  <text x="800" y="719" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">BMARTIN</text>
  <text x="800" y="730" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Bruno Martin</text>
  <text x="1066" y="719" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">28 lines</text>
  <text x="1066" y="730" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">2 processes</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">applies to the two time charts</text>
  <line x1="200" y1="117.0" x2="292" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">All = the totals</text>
  <line x1="200" y1="207.0" x2="476" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trend</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">stacked by business process</text>
  <line x1="200" y1="357.0" x2="300" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="20" y="500" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="515" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per process</text>
  <text x="30" y="528" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">privileged users in red</text>
  <line x1="200" y1="517.0" x2="260" y2="533" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="20" y="660" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="675" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Monthly activity</text>
  <text x="30" y="688" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users with transactions</text>
  <line x1="200" y1="677.0" x2="300" y2="690" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel · PDF · ↻</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">export the page as it stands</text>
  <line x1="1120" y1="117.0" x2="893.84" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="1120" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four figures</text>
  <text x="1130" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users, roles, SoD, licences</text>
  <line x1="1120" y1="207.0" x2="1050" y2="203" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="1120" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Decision list</text>
  <text x="1130" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by severity, with the figure</text>
  <line x1="1120" y1="337.0" x2="1060" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="1120" y="480" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="495" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Freshness</text>
  <text x="1130" y="508" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">green &lt; 2 days, red &gt; 8</text>
  <line x1="1120" y1="497.0" x2="1059.9999999999998" y2="508" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="1120" y="640" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="655" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Top users</text>
  <text x="1130" y="668" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">most conflict lines</text>
  <line x1="1120" y1="657.0" x2="1074" y2="658" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
</svg>

---

## The bar \{#bar\}

| Control | Effect |
|---|---|
| **Period** | Opens on *Last 12 months*. It applies to the two time charts: the conflicts per refresh and the transacting users per month. |
| **Application** | **All** shows the totals across the applications; picking one narrows every widget to it. |
| **Excel**, **PDF** | Export the page as it stands — the application picked and the period. The PDF is a synthesis: a cover naming the period and the filter, the four figures as cards, the charts drawn, the lists as tables. |
| **↻** | Reloads every widget; *Updated at* gives the time of the data. |

---

## The four figures \{#figures\}

| Card | Figure | Detail line |
|---|---|---|
| **Users** — declared accounts | The accounts collected. | Enabled · disabled · **dormant**: enabled without a login in the last 90 days. |
| **Roles** — defined roles and their assignment | The roles defined. | Assigned · **orphan** (assigned to no user) · users holding more than 10 roles, with the maximum. |
| **Segregation of duties** — users carrying a conflict | The users with at least one conflict. | Conflict lines · privileged users in conflict · business processes concerned. |
| **Licence exposure** — components deployed beyond the subscription | The value of the users over the subscribed quantities: list price plus three years of support per user over. | Components over the subscription out of all components · users over. |

The exposure reads the [Subscribed Licenses](./licenses/subscribed-licences.md) and the [pricing catalogue](./settings/pricing/pricing.md): a component without a price counts zero.

---

## What needs a decision \{#decisions\}

The findings of the [Security & SoD assessment report](./reports/security-sox.md), one line each, with a coloured dot — red to act on, orange to review, blue for information, green when nothing is found — and the count or the amount on the right:

| Finding | What to do |
|---|---|
| **Active SoD violations** — or *No SoD violation*, or *No SoD matrix defined* | The matrix rules triggered out of all rules, and the privileged pairings. Red when a privileged user is concerned. Without a matrix, define it under [Settings → SoD](./settings/sod/matrix.md). |
| **Self-conflicting roles** | A role grants both sides of an incompatible pair on its own: fix the role, and every holder is resolved. |
| **Conflicting role combinations** | Pairs of roles that breach SoD only when held together: split the duties or revise the assignments. |
| **Components over subscription** | More users with rights than licences: buy, or remove rights. The amount is the exposure; red from 250,000, orange from 25,000. |
| **Privileged accounts** | Super-user access: confirm each one is owned, justified and reviewed quarterly. |
| **Dormant enabled accounts** | No login within 90 days, with those that never logged in: disable or re-certify. |
| **Generic / shared accounts** | Actions cannot be attributed to a person: replace them with nominative accounts. |
| **\*PUBLIC object grants** | Objects open to every user by default: confirm none is a sensitive transaction. |
| **Enabled accounts without roles** | Incomplete provisioning, or accounts to disable. |
| **Direct user-level grants** | Rights granted to a user instead of a role, outside role-based access control. |
| **Users with more than 10 roles** | Broad role accumulation: right-size, then run the detection again. |
| **Orphan roles** | Roles assigned to no user: remove or repurpose. |

---

## Trend and detail \{#detail\}

| Widget | Shows |
|---|---|
| **Conflicts per refresh** | The conflict lines at each SoD refresh over the period, stacked by business process — the trend of the remediation. |
| **Per process** | Users in conflict per business process, with the number of conflict lines; red when privileged users are among them. |
| **Per licence component** | Users with rights per component, against the subscribed quantity. Technical and linked accounts are excluded; active users are those with a login in the last 90 days. |
| **Data freshness** | The last collection per module, with its age: green under 2 days, orange under 8, red beyond. A red line means the figures above it are old. |
| **Transacting users per month** | The distinct users with transactions each month, the applications added up. |
| **Users with the most conflicts** | The users carrying the most conflict lines, with the number of processes; privileged accounts are tagged. |

The detail behind each widget is in the screens: [Conflicts](./applications/conflicts/summary.md), [Users](./security/users.md), [Roles](./security/roles.md), [Licensing review](./licensing-review.md).

---

## Who sees it \{#access\}

Each widget shows only when the user may run its query: a user without access to the segregation-of-duties data sees the page without those widgets. The row-level scope of the user's roles applies to every figure and to the export.

---

## Related

- [Data Explorer](./data-explorer.md) — to go beyond the synthesis, by any field.
- [Security & SoD assessment](./reports/security-sox.md) — the full report behind the decision list.
