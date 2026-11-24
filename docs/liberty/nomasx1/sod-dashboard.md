---
title: "Segregation of duties: trend"
description: "The Nomasx-1 Segregation-of-duties monitoring dashboard: users in conflict, conflict lines, conflicts exercised and roles involved, the conflicts per refresh by risk level, the risks hit, the role pairs behind them, the users with the most conflicts, per process, and the links to the conflict screens and the Explorer."
keywords: [Nomasx-1, segregation of duties, SoD, dashboard, conflicts, exercised conflicts, proven conflicts, risks, role pairs, trend, risk level, monitoring]
---

# Segregation of duties: trend

**Segregation of duties: trend**, in the **Reviews** folder of the Nomasx-1 menu, follows the conflicts the [SoD matrix](./settings/sod/matrix.md) finds in the access of every connected application: how many, which risks, which roles cause them, which conflicts were actually exercised, and how it evolves from one refresh to the next.

---

## At a glance

<svg viewBox="0 0 1320 770" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxsod-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxsod-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxsod-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxsod-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="730" rx="14" fill="url(#nxsod-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Segregation-of-duties monitoring</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The users in conflict, the risks and role pairs behind them, the conflicts proven by activity, and the trend per refresh.</text>
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
  <text x="252.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Users in conflict</text>
  <text x="252.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">At the latest refresh</text>
  <text x="252.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">37</text>
  <text x="252.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">3 privileged · refreshed 2026-11-21</text>
  <rect x="452.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="464.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Conflict lines</text>
  <text x="464.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">User × risk × activity pair</text>
  <text x="464.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">1,204</text>
  <text x="464.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">18 risks hit in 4 processes</text>
  <rect x="665.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="677.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Exercised</text>
  <text x="677.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Both activities done by the user</text>
  <text x="677.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">9 users</text>
  <text x="677.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">41 conflicts exercised (user × rule)</text>
  <rect x="877.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="889.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Roles involved</text>
  <text x="889.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Roles carrying one side of a conflict</text>
  <text x="889.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">26</text>
  <text x="889.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">31 role pairs</text>
  <rect x="240" y="260" width="520" height="176" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Conflicts per refresh</text>
  <text x="254" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Conflict lines by risk level over the period</text>
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
  <rect x="306.9" y="386.2" width="63.3" height="13.8" fill="#e5484d" fillOpacity="0.85"/>
  <rect x="306.9" y="347.6" width="63.3" height="38.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="306.9" y="326.4" width="63.3" height="21.2" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="338.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-05-27</text>
  <rect x="419.9" y="387.1" width="63.3" height="12.9" fill="#e5484d" fillOpacity="0.85"/>
  <rect x="419.9" y="352.2" width="63.3" height="35.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="419.9" y="331.9" width="63.3" height="20.2" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="451.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-08-28</text>
  <rect x="532.9" y="389.9" width="63.3" height="10.1" fill="#e5484d" fillOpacity="0.85"/>
  <rect x="532.9" y="359.5" width="63.3" height="30.4" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="532.9" y="341.1" width="63.3" height="18.4" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="564.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-28</text>
  <rect x="645.9" y="391.7" width="63.3" height="8.3" fill="#e5484d" fillOpacity="0.85"/>
  <rect x="645.9" y="364.1" width="63.3" height="27.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="645.9" y="347.6" width="63.3" height="16.6" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="677.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11-21</text>
  <rect x="440" y="418" width="9" height="9" rx="2" fill="#e5484d"/>
  <text x="453" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">C</text>
  <rect x="469.76" y="418" width="9" height="9" rx="2" fill="#fb923c"/>
  <text x="482.76" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">H</text>
  <rect x="499.52" y="418" width="9" height="9" rx="2" fill="#2b8cff"/>
  <text x="512.52" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">M</text>
  <rect x="770" y="260" width="310" height="176" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="784" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Risks hit</text>
  <text x="784" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Most users first; the dot is the risk level</text>
  <circle cx="788" cy="316" r="3.2" fill="#f87171"/>
  <text x="800" y="319" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Create a supplier and pay it</text>
  <text x="800" y="330" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Procure to pay</text>
  <text x="1066" y="319" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">14 users</text>
  <text x="1066" y="330" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">212 lines</text>
  <line x1="784" y1="335" x2="1066" y2="335" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="346" r="3.2" fill="#f87171"/>
  <text x="800" y="349" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Post and approve journal entries</text>
  <text x="800" y="360" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Finance</text>
  <text x="1066" y="349" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">9 users</text>
  <text x="1066" y="360" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">128 lines</text>
  <line x1="784" y1="365" x2="1066" y2="365" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="376" r="3.2" fill="#fb923c"/>
  <text x="800" y="379" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Change prices and invoice</text>
  <text x="800" y="390" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Order to cash</text>
  <text x="1066" y="379" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">6 users</text>
  <text x="1066" y="390" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">74 lines</text>
  <line x1="784" y1="395" x2="1066" y2="395" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="406" r="3.2" fill="#4a9eff"/>
  <text x="800" y="409" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Receive and adjust stock</text>
  <text x="800" y="420" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Inventory</text>
  <text x="1066" y="409" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">3 users</text>
  <text x="1066" y="420" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">20 lines</text>
  <rect x="240" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Role pairs</text>
  <text x="254" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">The roles that create the most conflicts</text>
  <circle cx="258" cy="504" r="3.2" fill="#f87171"/>
  <text x="270" y="507" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">SYSADMIN</text>
  <text x="270" y="518" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Conflict inside one role</text>
  <text x="499.33333333333326" y="507" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">212 lines</text>
  <text x="499.33333333333326" y="518" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">14 users</text>
  <line x1="254" y1="521" x2="499.33333333333326" y2="521" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="532" r="3.2" fill="#fb923c"/>
  <text x="270" y="535" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">AP_CLERK + AP_MGR</text>
  <text x="270" y="546" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Two roles held together</text>
  <text x="499.33333333333326" y="535" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">96 lines</text>
  <text x="499.33333333333326" y="546" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">6 users</text>
  <line x1="254" y1="549" x2="499.33333333333326" y2="549" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="560" r="3.2" fill="#fb923c"/>
  <text x="270" y="563" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">AR_MGR + GL_ACCT</text>
  <text x="270" y="574" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Two roles held together</text>
  <text x="499.33333333333326" y="563" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">40 lines</text>
  <text x="499.33333333333326" y="574" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">3 users</text>
  <rect x="523.3333333333333" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="537.3333333333333" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users with the most conflicts</text>
  <text x="537.3333333333333" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Privileged accounts flagged</text>
  <circle cx="541.3333333333333" cy="504" r="3.2" fill="#f87171"/>
  <text x="553.3333333333333" y="507" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">JDOE</text>
  <text x="553.3333333333333" y="518" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">John Doe</text>
  <text x="782.6666666666665" y="507" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">64 lines</text>
  <text x="782.6666666666665" y="518" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">3 processes</text>
  <line x1="537.3333333333333" y1="521" x2="782.6666666666665" y2="521" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="541.3333333333333" cy="532" r="3.2" fill="#fb923c"/>
  <text x="553.3333333333333" y="535" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">ASMITH</text>
  <text x="553.3333333333333" y="546" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Anna Smith</text>
  <text x="782.6666666666665" y="535" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">41 lines</text>
  <text x="782.6666666666665" y="546" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">2 processes</text>
  <line x1="537.3333333333333" y1="549" x2="782.6666666666665" y2="549" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="541.3333333333333" cy="560" r="3.2" fill="#fb923c"/>
  <text x="553.3333333333333" y="563" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">BMARTIN</text>
  <text x="553.3333333333333" y="574" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Bruno Martin</text>
  <text x="782.6666666666665" y="563" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">28 lines</text>
  <text x="782.6666666666665" y="574" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">2 processes</text>
  <rect x="806.6666666666665" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="820.6666666666665" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Per process</text>
  <text x="820.6666666666665" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Users in conflict per business process</text>
  <text x="820.6666666666665" y="507" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Procure to pay</text>
  <text x="1065.9999999999998" y="507" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">22</text>
  <rect x="820.6666666666665" y="512" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="820.6666666666665" y="512" width="245" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="820.6666666666665" y="535" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Order to cash</text>
  <text x="1065.9999999999998" y="535" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">9</text>
  <rect x="820.6666666666665" y="540" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="820.6666666666665" y="540" width="101" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="820.6666666666665" y="563" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Finance</text>
  <text x="1065.9999999999998" y="563" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <rect x="820.6666666666665" y="568" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="820.6666666666665" y="568" width="66" height="5" rx="2.5" fill="#2b8cff"/>
  <rect x="240" y="600" width="840" height="130" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="620" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Investigate</text>
  <text x="254" y="633" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">The conflict screens and the SoD model of the Data Explorer</text>
  <rect x="254" y="644" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="266.0" y="661" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="282.0" y="661" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Summary</text>
  <text x="282.0" y="674" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Per process and risk, per refresh</text>
  <text x="508.66666666666674" y="661" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="527" y="644" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="538.6666666666667" y="661" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="554.6666666666667" y="661" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Details</text>
  <text x="554.6666666666667" y="674" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Every conflict line</text>
  <text x="781.3333333333335" y="661" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="799" y="644" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="811.3333333333334" y="661" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="827.3333333333334" y="661" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Proven</text>
  <text x="827.3333333333334" y="674" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Conflicts confirmed by the activity log</text>
  <text x="1054.0" y="661" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="254" y="684" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="266.0" y="701" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="282.0" y="701" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="282.0" y="714" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">The users in conflict</text>
  <text x="508.66666666666674" y="701" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="527" y="684" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="538.6666666666667" y="701" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="554.6666666666667" y="701" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="554.6666666666667" y="714" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">The role pairs in conflict</text>
  <text x="781.3333333333335" y="701" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="799" y="684" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="811.3333333333334" y="701" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="827.3333333333334" y="701" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="827.3333333333334" y="714" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Model sod: your own analyses</text>
  <text x="1054.0" y="701" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">applies to the trend</text>
  <line x1="200" y1="117.0" x2="292" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">All = the totals</text>
  <line x1="200" y1="207.0" x2="476" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trend</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">stacked by risk level</text>
  <line x1="200" y1="357.0" x2="300" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="20" y="500" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="515" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Role pairs</text>
  <text x="30" y="528" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">red: inside one role</text>
  <line x1="200" y1="517.0" x2="260" y2="505" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="20" y="650" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="665" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Investigate</text>
  <text x="30" y="678" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conflict screens, Explorer</text>
  <line x1="200" y1="667.0" x2="254" y2="660" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel · PDF · ↻</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">export the page as it stands</text>
  <line x1="1120" y1="117.0" x2="893.84" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="1120" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Proven</text>
  <text x="1130" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">both activities used</text>
  <line x1="1120" y1="207.0" x2="837.5" y2="203" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="1120" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Risks hit</text>
  <text x="1130" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the dot is the level</text>
  <line x1="1120" y1="337.0" x2="1060" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="1120" y="480" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="495" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per process</text>
  <text x="1130" y="508" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users in conflict</text>
  <line x1="1120" y1="497.0" x2="1059.9999999999998" y2="518" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
</svg>

---

## The bar \{#bar\}

The **Period** — *Last 12 months* when the page opens — applies to the trend chart. **Application**: **All** gives the totals across the applications; picking one narrows every widget to it. **Excel** and **PDF** export the page as it stands.

---

## The four figures \{#figures\}

| Card | Figure | Detail line |
|---|---|---|
| **Users in conflict** — at the latest refresh | The users carrying at least one conflict. | The privileged ones, and the date of the latest refresh. |
| **Conflict lines** — user × risk × activity pair | Every conflict found. | The risks hit and the processes concerned. |
| **Exercised** — both conflicting activities done by the user: usage tracking, activity log or tables written | The users who did both sides of a conflict. | The conflicts exercised (user × rule). |
| **Roles involved** — roles carrying one side of a conflict | The roles involved. | The role pairs behind the conflicts. |

A conflict is **exercised** when what was collected shows the user did both incompatible activities — ran both programs (Object Usage Tracking), wrote through both programs (activity log) or wrote tables of both programs — at the strength of its weaker side. The figure reads the same statement as the [Segregation of duties review](./sod-review.md#same-statement), which shows these conflicts one by one with their evidence.

---

## Trend and detail \{#detail\}

| Widget | Shows |
|---|---|
| **Conflicts per refresh** | The conflict lines at each refresh of the period, stacked by risk level — the trend of the remediation. |
| **Risks hit** | The risks with the most users first; the dot gives the risk level — red for high or critical, orange for medium, blue otherwise. |
| **Role pairs** | The pairs of roles that create the most conflicts, with the users concerned: red for a conflict inside a single role — fix the role and every holder is resolved —, orange for two roles held together. |
| **Users with the most conflicts** | The users carrying the most conflict lines, with the number of processes; privileged accounts are flagged. |
| **Per process** | The users in conflict per business process. |
| **Investigate** | Links to the conflict screens — Summary, Details, Proven, Users, Roles — and to the Data Explorer, where the *Segregation of duties* model goes further. |

---

## Who sees it \{#access\}

Each widget shows only when the user may run its query, and the row-level scope of the user's roles applies to every figure and to the export.

---

## Related

- [Overview — Audit synthesis](./audit-synthesis.md) — the synthesis of the whole application.
- [Segregation of duties review](./sod-review.md) — the conflicts exercised, with their evidence.
- [Security review](./security-review.md) — the accounts and rights to review.
- [Jobs](./jobs.md) — refresh the conflicts: *Collect security and SoD*.
