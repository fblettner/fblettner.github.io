---
title: Operations
description: "The NomaUBL Operations dashboard: what the team has to handle on the period, as three work queues (in progress, to correct and send again for IT, a new invoice to issue for customer service), the activity chart, the invoices blocked the longest, the latest events, the top failing rules, the PA round-trip time and the e-reporting coverage, for sales or purchases."
keywords: [NomaUBL, operations dashboard, work queues, in progress, to correct, rejected, disputed, refused, activity chart, stale invoices, latest events, top failing rules, round-trip, e-reporting coverage, sales, purchases, JD Edwards, SAP, NetSuite, custom ERP]
---

# Operations

The **Operations** dashboard shows **what the team has to handle** on the period. Its core is three work queues, each with the team it belongs to: what is in progress and needs nothing, what IT must correct and send again, and what customer service must settle by issuing a new invoice. Below them come the activity of the period, the invoices blocked the longest, the latest events and the rules that fail most. Every number is read from the NomaUBL database, whatever the source system (JD Edwards, SAP, NetSuite or a custom ERP).

Open it from **Operations** in the Navigation group, after the [Billing overview](./billing-overview.md). Under a restricted licence, or for a role without the Billing overview, it is the page the application opens on. The technical health of the server is on the [IT dashboard](./tech-dashboard.md).

---

## At a glance

<svg viewBox="0 0 1200 598" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ops-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ops-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ops-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ops-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="558" rx="14" fill="url(#ops-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Operations</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">2 418 invoices on the period · 2 276 approved · 115 in progress · 27 to handle</text>
  <rect x="240" y="82" width="126" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="83" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="266.0" y="97.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sales</text>
  <line x1="292" y1="87" x2="292" y2="101" stroke="#334155" strokeWidth="1"/>
  <text x="329.0" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Purchases</text>
  <rect x="376" y="83" width="184" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="386" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 Yesterday · Activity date ▾</text>
  <rect x="572" y="89" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="589" y="98" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Exclude reviewed errors</text>
  <rect x="729.8" y="83" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="742.8" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="240.0" y="120" width="233.33333333333334" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="120" width="233.3" height="3" rx="1.5" fill="#4a9eff"/>
  <text x="252.0" y="142" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">In progress</text>
  <text x="461.33333333333337" y="160" fill="#e2e8f0" fontSize="15" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">115</text>
  <text x="252.0" y="156" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Followed automatically, nothing to do</text>
  <text x="252.0" y="176" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Created, waiting to be sent</text>
  <text x="461.33333333333337" y="176" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <text x="252.0" y="198" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sent to the platform</text>
  <text x="461.33333333333337" y="198" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">31</text>
  <text x="252.0" y="220" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Waiting for the platform</text>
  <text x="461.33333333333337" y="220" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">26</text>
  <text x="252.0" y="242" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Being transmitted</text>
  <text x="461.33333333333337" y="242" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">46</text>
  <rect x="483.33333333333337" y="120" width="233.33333333333334" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="483.33333333333337" y="120" width="233.3" height="3" rx="1.5" fill="#f87171"/>
  <text x="495.33333333333337" y="142" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">To correct and send again</text>
  <text x="704.6666666666667" y="160" fill="#f87171" fontSize="15" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">8</text>
  <text x="495.33333333333337" y="156" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">To be handled by IT</text>
  <text x="495.33333333333337" y="176" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">213 Rejected</text>
  <text x="704.6666666666667" y="176" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <text x="495.33333333333337" y="198" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">9905 Validation failed</text>
  <text x="704.6666666666667" y="198" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <text x="495.33333333333337" y="220" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">9907 PA import failed</text>
  <text x="704.6666666666667" y="220" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <rect x="726.6666666666667" y="120" width="233.33333333333334" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="726.6666666666667" y="120" width="233.3" height="3" rx="1.5" fill="#fb923c"/>
  <text x="738.6666666666667" y="142" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A new invoice must be issued</text>
  <text x="948.0000000000001" y="160" fill="#fb923c" fontSize="15" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">19</text>
  <text x="738.6666666666667" y="156" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">To be handled by customer service</text>
  <text x="738.6666666666667" y="176" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">207 Disputed</text>
  <text x="948.0000000000001" y="176" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <text x="738.6666666666667" y="198" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">208 Suspended</text>
  <text x="948.0000000000001" y="198" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="738.6666666666667" y="220" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">210 Refused</text>
  <text x="948.0000000000001" y="220" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">7</text>
  <rect x="240" y="284" width="720" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="304" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activity per day</text>
  <rect x="259.2" y="342.0" width="18.5" height="40.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="259.2" y="338.6" width="18.5" height="3.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="259.2" y="336.9" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="259.2" y="335.7" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="288.0" y="347.1" width="18.5" height="34.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="288.0" y="344.3" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="288.0" y="344.3" width="18.5" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="288.0" y="343.7" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="316.9" y="337.4" width="18.5" height="44.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="316.9" y="335.1" width="18.5" height="2.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="316.9" y="334.6" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="316.9" y="334.6" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="345.7" y="346.6" width="18.5" height="35.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="345.7" y="340.9" width="18.5" height="5.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="345.7" y="339.1" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="345.7" y="339.1" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="374.5" y="343.7" width="18.5" height="38.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="374.5" y="340.9" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="374.5" y="339.1" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="374.5" y="339.1" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="403.4" y="332.9" width="18.5" height="49.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="403.4" y="330.0" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="403.4" y="329.4" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="403.4" y="328.3" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="432.2" y="336.3" width="18.5" height="45.7" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="432.2" y="334.0" width="18.5" height="2.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="432.2" y="332.3" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="432.2" y="332.3" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="461.0" y="343.7" width="18.5" height="38.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="461.0" y="341.4" width="18.5" height="2.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="461.0" y="340.9" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="461.0" y="340.3" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="489.9" y="340.3" width="18.5" height="41.7" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="489.9" y="336.9" width="18.5" height="3.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="489.9" y="336.9" width="18.5" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="489.9" y="335.7" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="518.7" y="342.6" width="18.5" height="39.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="518.7" y="335.7" width="18.5" height="6.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="518.7" y="335.1" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="518.7" y="335.1" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="547.5" y="337.4" width="18.5" height="44.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="547.5" y="333.4" width="18.5" height="4.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="547.5" y="332.3" width="18.5" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="547.5" y="332.3" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="576.4" y="338.0" width="18.5" height="44.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="576.4" y="335.1" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="576.4" y="335.1" width="18.5" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="576.4" y="334.0" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="605.2" y="344.3" width="18.5" height="37.7" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="605.2" y="338.0" width="18.5" height="6.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="605.2" y="336.3" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="605.2" y="335.7" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="634.0" y="339.7" width="18.5" height="42.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="634.0" y="333.4" width="18.5" height="6.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="634.0" y="332.3" width="18.5" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="634.0" y="331.7" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="662.9" y="343.7" width="18.5" height="38.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="662.9" y="340.3" width="18.5" height="3.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="662.9" y="339.7" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="662.9" y="339.7" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="691.7" y="337.4" width="18.5" height="44.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="691.7" y="332.9" width="18.5" height="4.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="691.7" y="331.1" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="691.7" y="330.6" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="720.5" y="334.6" width="18.5" height="47.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="720.5" y="328.3" width="18.5" height="6.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="720.5" y="327.1" width="18.5" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="720.5" y="326.0" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="749.4" y="346.6" width="18.5" height="35.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="749.4" y="343.7" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="749.4" y="342.0" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="749.4" y="342.0" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="778.2" y="334.0" width="18.5" height="48.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="778.2" y="328.9" width="18.5" height="5.1" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="778.2" y="328.3" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="778.2" y="327.7" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="807.0" y="340.3" width="18.5" height="41.7" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="807.0" y="338.0" width="18.5" height="2.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="807.0" y="338.0" width="18.5" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="807.0" y="336.9" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="835.9" y="337.4" width="18.5" height="44.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="835.9" y="332.3" width="18.5" height="5.1" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="835.9" y="331.1" width="18.5" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="835.9" y="330.0" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="864.7" y="341.4" width="18.5" height="40.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="864.7" y="335.1" width="18.5" height="6.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="864.7" y="333.4" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="864.7" y="333.4" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="893.5" y="332.9" width="18.5" height="49.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="893.5" y="330.0" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="893.5" y="328.9" width="18.5" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="893.5" y="328.3" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="922.4" y="335.1" width="18.5" height="46.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="922.4" y="332.3" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="922.4" y="332.3" width="18.5" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="922.4" y="331.1" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="254" y="388" width="9" height="9" rx="2" fill="#4ade80"/>
  <text x="267" y="396" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Approved</text>
  <rect x="317.08" y="388" width="9" height="9" rx="2" fill="#4a9eff"/>
  <text x="330.08" y="396" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">In progress</text>
  <rect x="394.44" y="388" width="9" height="9" rx="2" fill="#f87171"/>
  <text x="407.44" y="396" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">To correct</text>
  <rect x="467.03999999999996" y="388" width="9" height="9" rx="2" fill="#fb923c"/>
  <text x="480.03999999999996" y="396" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">New invoice to issue</text>
  <rect x="240.0" y="418" width="355.0" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="438" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Blocked the longest</text>
  <text x="370.4" y="438" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">oldest first</text>
  <text x="252.0" y="460" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV-10412 · RI · 00001</text>
  <text x="583.0" y="460" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">12 days ago</text>
  <text x="252.0" y="478" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV-10433 · RI · 00002</text>
  <text x="583.0" y="478" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 days ago</text>
  <rect x="605.0" y="418" width="355.0" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="438" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Latest events</text>
  <text x="701.8" y="438" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">last 10</text>
  <text x="617.0" y="460" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV-10871 · RI · 00001</text>
  <text x="948.0" y="460" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Approved</text>
  <text x="617.0" y="478" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV-10870 · RI · 00001</text>
  <text x="948.0" y="478" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Sent to PA</text>
  <rect x="240.0" y="510" width="233.33333333333334" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="530" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Top failing rules</text>
  <text x="252.0" y="546" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ALL · UBL · INTEG</text>
  <rect x="483.33333333333337" y="510" width="233.33333333333334" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="495.33333333333337" y="530" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PA round-trip time</text>
  <text x="495.33333333333337" y="546" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">avg days, sent → status</text>
  <rect x="726.6666666666667" y="510" width="233.33333333333334" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738.6666666666667" y="530" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">E-Reporting coverage</text>
  <text x="738.6666666666667" y="546" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Open page →</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sales or purchases</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">period · date basis</text>
  <line x1="200" y1="93.0" x2="240" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">In progress</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nothing to do, followed</text>
  <line x1="200" y1="187.0" x2="240" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="20" y="324" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="339" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activity chart</text>
  <text x="30" y="352" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per day, week or month</text>
  <line x1="200" y1="341.0" x2="254" y2="344" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Blocked the longest</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">oldest first</text>
  <line x1="200" y1="457.0" x2="240" y2="458" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="1000" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Summary line</text>
  <text x="1010" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">total · approved · to handle</text>
  <line x1="1000" y1="93.0" x2="940" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">For IT</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">correct, then send again</text>
  <line x1="1000" y1="167.0" x2="706.6666666666667" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="1000" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">For customer service</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a new invoice to issue</text>
  <line x1="1000" y1="237.0" x2="950" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="1000" y="510" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="525" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bottom row</text>
  <text x="1010" y="538" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rules · round-trip · e-reporting</text>
  <line x1="1000" y1="527.0" x2="960" y2="534" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
</svg>

The page description sums up the period: `… invoices on the period · … approved · … in progress · … to handle`.

---

## Filter bar

| Control | Default | Description |
|---|---|---|
| **Sales / Purchases** | Sales | Switches the whole dashboard between issued and received invoices. |
| **Period** | This month, or the [default period](../configuration/default-periods.md) set for *Operations dashboard* | The shared [period picker](../configuration/default-periods.md#period-picker). |
| **Date basis** | Activity date | *Activity date* (last update), *Document date* (BT-2) or *Archive date*, in the footer of the picker. Every block follows it. |
| **Exclude reviewed errors** | Off | See below. |
| **↻** | — | Reloads every block. |

The filters are kept while the application stays open: leaving the dashboard and coming back finds them as they were.

### Exclude reviewed errors \{#exclude-reviewed\}

The **Exclude reviewed errors** switch hides the invoices that customer service has already reviewed (*Reviewed* in the **Review** column of [E-Invoicing](./invoices.md)) but that still sit in an error status — the `errorTech` / `errorBusiness` groups of the [statuses template](../configuration/system/statuses.md). The queues then show only what is left to handle.

- Reviewed invoices in any other status stay counted, so the totals remain the real number of invoices.
- A click on a queue carries the switch to the [E-Invoicing](./invoices.md#exclude-reviewed) list, so the count on both pages agrees.

---

## Work queues

| Queue | For whom | Rows | Click |
|---|---|---|---|
| **In progress** | *Followed automatically, nothing to do* | *Created, waiting to be sent* · *Sent to the platform* · *Waiting for the platform* · *Being transmitted to the customer* (status groups `created`, `sent`, `pending`, `transmission`) | The invoices of the group. |
| **To correct and send again** | *To be handled by IT* | `213` Rejected, `9905` Validation failed, `9907` PA import failed, then any other technical-error status that has invoices. | The invoices in that status. |
| **A new invoice must be issued** | *To be handled by customer service* | `207` Disputed, `208` Suspended, `210` Refused, then any other business-error status that has invoices. | The invoices in that status. |

Each queue gives its total; the rows split it. A click on the total opens all the invoices of the queue in [E-Invoicing](./invoices.md), a click on a row only that row's (full licence).

---

## Activity chart

**Activity per day** — or **per week** above 62 days, **per month** above 400 days — stacks the invoices of the period as *Approved*, *In progress*, *To correct*, *New invoice to issue* and *Other*. A single slack day or a spike of errors shows at once.

---

## Blocked invoices and latest events

| Block | Content |
|---|---|
| **Blocked the longest** *(oldest first)* | Invoices whose status has not moved for the longest time, with the document triplet (`doc · dct · kco`), the status and the age (*12 days ago*). Empty when every invoice is in a final or transmission status. |
| **Latest events** *(last 10)* | The latest lifecycle events, with the triplet, the status and the time. |

A row opens [E-Invoicing](./invoices.md) on its status.

---

## Rules, round-trip and e-reporting

| Block | Content |
|---|---|
| **Top failing rules** | The validation rules with the most failures on the period, ranked, with their description. Tabs **ALL** / **UBL** (Schematron and XSD) / **INTEG** (lifecycle and runtime errors). *View all errors →* opens [Integration errors](diagnostics/integration-errors.md) grouped by rule; a rule opens its events. |
| **PA round-trip time** *(avg days, sent → status)* | For the invoices sent to the platform, the average number of days until the platform set one of its own statuses. A rise reveals a slowdown on the platform side. |
| **E-Reporting coverage** | The latest report per company and flow, with the number of reports and invoices. *Open page →* opens [E-Reporting](./ereporting.md). |

---

## About this build

The folded **About this build** block at the bottom gives the release, the AFNOR profile and the versions of the shipped Schematrons (see [Schematrons](../references/schematrons.md)).

---

## Access

Grant the **Operations** page in the Navigation group on the [Roles](../configuration/security/roles.md) page. The role sees the whole dashboard or nothing; the [Billing overview](./billing-overview.md) and [Statistics](./statistics.md) are granted apart. Figures follow the companies and the [row filters](../configuration/security/roles.md#row-filters) of the role. Clicks to the invoice list need a full licence.

---

## Tips & best practices

- **Read the queues by team.** *In progress* needs nobody; the red queue goes to IT, the orange one to customer service — each team starts from its own.
- **Use *Yesterday* for the morning check.** It covers yesterday and today, so the night batches are counted in full; set it as the [default period](../configuration/default-periods.md) of the view if the team always starts that way.
- **Turn *Exclude reviewed errors* on during the day.** The queues then shrink as customer service marks invoices as reviewed.
- **Top failing rules drives the corrections.** A single rule with hundreds of hits usually points to one upstream change (a renamed field, an outdated tax code); its [Schematron rule](../references/schematrons.md) says exactly what is expected.
- **Investigate elsewhere.** The dashboard spots the problem; the [E-Invoicing](./invoices.md) detail window and the [Integration errors](diagnostics/integration-errors.md) page explain it.
