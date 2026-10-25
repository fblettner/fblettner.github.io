---
title: Statistics
description: "The NomaUBL Statistics dashboard: where the invoices of the period stand in five stages, how they flowed over the period, how long the open ones have waited, the statuses and most frequent reasons, splits per transaction type and activity code, and a detail table by activity, status and reason, all compared with the previous period, with Excel and PDF exports."
keywords: [NomaUBL, statistics, status statistics, stages, trend, waiting time, reasons, pivot, activity code, transaction type, previous period, Excel export, PDF export, sales, purchases, JD Edwards, SAP, NetSuite, custom ERP]
---

# Statistics

The **Statistics** dashboard answers three questions about the invoices of the period: **where do they stand**, **how did they flow**, and **how long have the open ones been waiting**. Each figure is compared with the previous period, and every bar or row opens the invoices behind it. It also holds the detail table by activity code, status and reason. The dashboard reads the NomaUBL database, whatever the source system (JD Edwards, SAP, NetSuite or a custom ERP).

Open it from **Statistics** in the Navigation group, after the [IT dashboard](./tech-dashboard.md).

---

## At a glance

<svg viewBox="0 0 1320 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="stat-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="stat-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="stat-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="stat-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="540" rx="14" fill="url(#stat-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Statistics</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Where the invoices of the period stand, how they flowed and how long the open ones have waited.</text>
  <rect x="240" y="82" width="126" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="83" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="266.0" y="97.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sales</text>
  <line x1="292" y1="87" x2="292" y2="101" stroke="#334155" strokeWidth="1"/>
  <text x="329.0" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Purchases</text>
  <rect x="376" y="83" width="218" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="386" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 1 – 31 Oct 2026 · Document date ▾</text>
  <rect x="606" y="89" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M608.5,94.5 L610.8,96.8 L614.8,92" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="623" y="98" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Exclude reviewed errors</text>
  <rect x="976" y="83" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1002.0" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="1036" y="83" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1058.0" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="240.0" y="122" width="202.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="140" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INVOICES ISSUED</text>
  <text x="252.0" y="166" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">2 361</text>
  <text x="430.5" y="166" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">+3.1 %</text>
  <text x="252.0" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1 312 400 € excl. VAT</text>
  <rect x="452.5" y="122" width="202.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="464.5" y="140" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REACHED THE PLATFORM</text>
  <text x="464.5" y="166" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">94.8 %</text>
  <text x="643.0" y="166" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">+1.2 pts</text>
  <text x="464.5" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 102 completed · 136 at the platform</text>
  <rect x="665.0" y="122" width="202.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="677.0" y="140" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TO HANDLE</text>
  <text x="677.0" y="166" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">27</text>
  <text x="855.5" y="166" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">−12 %</text>
  <text x="677.0" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">8 to correct · 19 decision needed</text>
  <rect x="877.5" y="122" width="202.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="889.5" y="140" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPEN FOR MORE THAN 7 DAYS</text>
  <text x="889.5" y="166" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <text x="889.5" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">of 259 invoices still open</text>
  <rect x="240" y="208" width="840" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="228" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Where the invoices stand</text>
  <text x="409.12" y="228" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 361 invoices of the period, by stage</text>
  <rect x="254.0" y="238" width="4.0" height="10" fill="#f87171" fillOpacity="0.85"/>
  <rect x="258.0" y="238" width="6.5" height="10" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="264.5" y="238" width="33.0" height="10" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="297.6" y="238" width="46.8" height="10" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="344.3" y="238" width="722.9" height="10" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="254.0" y="258" width="156.0" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="262.0" y="266" width="8" height="8" rx="2" fill="#f87171"/>
  <text x="274.0" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">To correct</text>
  <text x="262.0" y="286" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">8 · 0.3 %</text>
  <rect x="418.0" y="258" width="156.0" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="426.0" y="266" width="8" height="8" rx="2" fill="#fb923c"/>
  <text x="438.0" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Decision needed</text>
  <text x="426.0" y="286" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">19 · 0.8 %</text>
  <rect x="582.0" y="258" width="156.0" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="590.0" y="266" width="8" height="8" rx="2" fill="#4a9eff"/>
  <text x="602.0" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Processing</text>
  <text x="590.0" y="286" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">96 · 4.1 %</text>
  <rect x="746.0" y="258" width="156.0" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="754.0" y="266" width="8" height="8" rx="2" fill="#c084fc"/>
  <text x="766.0" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">At the platform</text>
  <text x="754.0" y="286" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">136 · 5.8 %</text>
  <rect x="910.0" y="258" width="156.0" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="918.0" y="266" width="8" height="8" rx="2" fill="#4ade80"/>
  <text x="930.0" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Completed</text>
  <text x="918.0" y="286" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">2 102 · 89.0 %</text>
  <rect x="240" y="314" width="420" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="334" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Invoices by stage over the period</text>
  <text x="254" y="347" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Per week</text>
  <rect x="268.0" y="449.8" width="49.9" height="0.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="268.0" y="449.4" width="49.9" height="0.5" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="268.0" y="446.3" width="49.9" height="3.1" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="268.0" y="442.5" width="49.9" height="3.8" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="268.0" y="378.2" width="49.9" height="64.3" fill="#4ade80" fillOpacity="0.85"/>
  <text x="293.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">W40</text>
  <rect x="346.0" y="449.7" width="49.9" height="0.3" fill="#f87171" fillOpacity="0.85"/>
  <rect x="346.0" y="449.1" width="49.9" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="346.0" y="446.3" width="49.9" height="2.8" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="346.0" y="441.7" width="49.9" height="4.6" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="346.0" y="371.4" width="49.9" height="70.4" fill="#4ade80" fillOpacity="0.85"/>
  <text x="371.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">W41</text>
  <rect x="424.0" y="449.8" width="49.9" height="0.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="424.0" y="449.1" width="49.9" height="0.8" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="424.0" y="445.7" width="49.9" height="3.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="424.0" y="441.4" width="49.9" height="4.3" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="424.0" y="368.0" width="49.9" height="73.4" fill="#4ade80" fillOpacity="0.85"/>
  <text x="449.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">W42</text>
  <rect x="502.0" y="449.5" width="49.9" height="0.5" fill="#f87171" fillOpacity="0.85"/>
  <rect x="502.0" y="448.9" width="49.9" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="502.0" y="445.7" width="49.9" height="3.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="502.0" y="441.0" width="49.9" height="4.7" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="502.0" y="372.1" width="49.9" height="68.8" fill="#4ade80" fillOpacity="0.85"/>
  <text x="527.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">W43</text>
  <rect x="580.0" y="449.8" width="49.9" height="0.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="580.0" y="449.4" width="49.9" height="0.5" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="580.0" y="447.1" width="49.9" height="2.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="580.0" y="443.7" width="49.9" height="3.4" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="580.0" y="399.1" width="49.9" height="44.7" fill="#4ade80" fillOpacity="0.85"/>
  <text x="605.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">W44</text>
  <rect x="670" y="314" width="410" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="684" y="334" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Open invoices by waiting time</text>
  <text x="684" y="347" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Days since the last status change</text>
  <rect x="697.8" y="448.8" width="48.9" height="1.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="697.8" y="446.4" width="48.9" height="2.4" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="697.8" y="416.2" width="48.9" height="30.1" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="697.8" y="368.0" width="48.9" height="48.2" fill="#c084fc" fillOpacity="0.85"/>
  <text x="722.2" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">≤ 1 d</text>
  <rect x="774.2" y="448.2" width="48.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <rect x="774.2" y="445.2" width="48.9" height="3.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="774.2" y="427.1" width="48.9" height="18.1" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="774.2" y="403.0" width="48.9" height="24.1" fill="#c084fc" fillOpacity="0.85"/>
  <text x="798.6" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2–3 d</text>
  <rect x="850.6" y="449.4" width="48.9" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="850.6" y="447.0" width="48.9" height="2.4" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="850.6" y="441.0" width="48.9" height="6.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="850.6" y="434.9" width="48.9" height="6.0" fill="#c084fc" fillOpacity="0.85"/>
  <text x="875.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">4–7 d</text>
  <rect x="927.0" y="449.4" width="48.9" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="927.0" y="447.0" width="48.9" height="2.4" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="927.0" y="444.6" width="48.9" height="2.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="927.0" y="443.4" width="48.9" height="1.2" fill="#c084fc" fillOpacity="0.85"/>
  <text x="951.4000000000001" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">8–30 d</text>
  <rect x="1003.4" y="449.4" width="48.9" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="1003.4" y="448.2" width="48.9" height="1.2" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="1003.4" y="447.0" width="48.9" height="1.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="1003.4" y="444.6" width="48.9" height="2.4" fill="#c084fc" fillOpacity="0.85"/>
  <text x="1027.8" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">&gt; 30 d</text>
  <rect x="240" y="478" width="840" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="498" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Detail by activity, status and reason</text>
  <text x="254" y="522" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GROUP BY</text>
  <rect x="316.32" y="510" width="83" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="357.82" y="522.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Activity code</text>
  <rect x="405.32" y="510" width="48" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="429.32" y="522.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Status</text>
  <rect x="459.32" y="510" width="73" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="495.82" y="522.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Reason code</text>
  <text x="552.3199999999999" y="522" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MEASURE</text>
  <rect x="607.5999999999999" y="509" width="163" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="608.5999999999999" y="510" width="87" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="652.0999999999999" y="522.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Invoice count</text>
  <line x1="696.5999999999999" y1="514" x2="696.5999999999999" y2="524" stroke="#334155" strokeWidth="1"/>
  <text x="733.5999999999999" y="522.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Net amount</text>
  <rect x="1016" y="508" width="50" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1041.0" y="521.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four key figures</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with the change vs previous</text>
  <line x1="200" y1="157.0" x2="240" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="20" y="248" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="263" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five stages</text>
  <text x="30" y="276" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a button opens the invoices</text>
  <line x1="200" y1="265.0" x2="254" y2="274" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="20" y="374" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="389" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trend</text>
  <text x="30" y="402" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per day, week or month</text>
  <line x1="200" y1="391.0" x2="254" y2="404" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="20" y="492" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="507" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Detail table</text>
  <text x="30" y="520" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">levels and measure to pick</text>
  <line x1="200" y1="509.0" x2="254" y2="518" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="1120" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel and PDF</text>
  <text x="1130" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the whole page</text>
  <line x1="1120" y1="97.0" x2="1030" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="1120" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Open for more than 7 days</text>
  <text x="1130" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no comparison shown</text>
  <line x1="1120" y1="157.0" x2="1070" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="1120" y="374" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="389" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Waiting time</text>
  <text x="1130" y="402" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">open invoices only</text>
  <line x1="1120" y1="391.0" x2="970" y2="414" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="1120" y="492" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="507" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table export</text>
  <text x="1130" y="520" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as shown + the rows behind</text>
  <line x1="1120" y1="509.0" x2="1066" y2="518" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
</svg>

---

## Header

The header is the same as on the [Billing overview](./billing-overview.md#header): **Sales / Purchases**, the [period picker](../configuration/default-periods.md#period-picker) (date basis *Document date* by default, also *Activity date* or *Archive date*), **Exclude reviewed errors** (on by default) the *Compared to …* tag and **↻** to reload. The previous period follows the [same rule](./billing-overview.md#previous-period). Two buttons export the whole page:

| Button | Content |
|---|---|
| **Excel** | One sheet per block: *Stages*, *Statuses*, *Trend*, *Waiting time*, *Transaction types*, *Activities*, *Reasons*, *Pivot*, and a *Data* sheet with the invoices behind them. |
| **PDF** | Key figures, stages, trend, waiting time, statuses, types, activities, the detail table and reasons. |

---

## Key figures

| Figure | Value | Change |
|---|---|---|
| **Invoices issued** *(Purchases: Invoices received)* | Number of invoices, with the amount excl. VAT below. | in % |
| **Reached the platform** *(Purchases: Integrated)* | Share of the invoices *At the platform* or *Completed*. | in points |
| **To handle** | *To correct* + *Decision needed*, shown in red when above zero. | in %, a decrease counts as good |
| **Open for more than 7 days** | Invoices not completed whose last status change is more than 7 days old, out of the open ones. | — |

---

## Stages \{#stages\}

Every status belongs to one of **five stages**, the same as the [status by stage](./invoices.md#status-by-stage) filter of E-Invoicing:

| Stage | Statuses |
|---|---|
| **To correct** | Technical errors: 213 Rejected, 9904 Send failed, 9905 Validation failed, 9907 PA import failed, 9909 PA export failed. |
| **Decision needed** | Business errors: 206, 207, 208, 210, 221, 501, 600. |
| **Processing** | Created, sent or pending in NomaUBL: 9900, 9901, 9902, 9903, 9906, 9912. |
| **At the platform** | Being transmitted by the platform: 201, 202, 203, 204, 214, 224, 225, 226, 227, 9911, 9913. |
| **Completed** | Final or approved statuses: 200, 205, 209, 211, 212, 220, 228, 9908, 9914. |

An **Other** stage appears only when a status outside these groups has invoices. The groups come from the [statuses template](../configuration/system/statuses.md).

The **Where the invoices stand** block shows a strip of the five stages, then one button per stage with its count, its share and the change from the previous period. A button opens [E-Invoicing](./invoices.md) on the statuses of that stage.

---

## Trend and waiting time

| Block | Content |
|---|---|
| **Invoices by stage over the period** | Stacked bars by stage, **per day** up to 35 days, **per week** up to 120 days, **per month** beyond. With *All*, the last twelve months. A bar opens the invoices of that bucket and stage. |
| **Open invoices by waiting time** | The invoices not completed, by days since their last status change: `≤ 1 day`, `2–3 days`, `4–7 days`, `8–30 days`, `> 30 days`, stacked by the four open stages. |

---

## Statuses, reasons and splits

| Block | Content |
|---|---|
| **Statuses** | One row per status: label, code, bar, count, share of the period and change. A row opens the invoices in that status. |
| **Most frequent reasons** | The eight reasons recorded most often on the invoices of the period, each with its main status. |
| **Per transaction type** / **Per activity code** | A stacked bar by stage for each transaction type and for the eight main activity codes. |

---

## Detail by activity, status and reason \{#detail-table\}

A ready-made pivot of the invoices: rows by **activity code → status → reason code**, one column per **transaction type** (`B2B`, `B2BINT`, `B2C`, `B2G`). Every value carries its share of the level above — a reason as a share of its status, a status as a share of its activity, an activity as a share of the whole.

| Control | Effect |
|---|---|
| **Group by** | *Activity code*, *Status*, *Reason code*, in any combination; at least one stays on. Expansion, shares and export follow the grouping. |
| **Measure** | *Invoice count* (default) or *Net amount* (BT-109). A handful of invoices can carry most of the money. |
| **Excel** | This table as shown, with the rows behind it (`statistics-count.xlsx` or `statistics-amount.xlsx`). |

Rows expand and collapse with subtotals at every level; a status with a single reason shows as one compact line.

---

## Access

Grant the **Statistics** page in the Navigation group on the [Roles](../configuration/security/roles.md) page; the server and the AI assistant's `status_statistics` tool check the same grant. Figures follow the companies and the [row filters](../configuration/security/roles.md#row-filters) of the signed-in user's role.

---

## Tips & best practices

- **Watch *Open for more than 7 days*.** It is the backlog nobody moves; the waiting-time block shows at which stage it is stuck.
- **Compare like with like.** *This month* is compared with the whole previous month, *This year* with the same dates a year earlier — pick the period accordingly before reading the changes.
- **Switch the detail table to *Net amount*** before a meeting with finance: the ranking of activities often changes.
- **Build a recurring report in the [Explorer](./explorer.md)** when a breakdown is needed that the page does not offer; the ready-made *Status statistics* analysis is a good starting point.
- **Send it by email.** A [daily digest](../sync/scheduled-jobs/daily-digest.md#business-dashboards) can send the page as PDF or Excel, over last month or the month to date, as a given role sees it.
