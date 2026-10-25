---
title: Billing overview
description: "The NomaUBL Billing overview, the landing page: the invoices of the period in amounts (revenue and VAT net of credit notes, invoice count, transmission or acceptance rate) compared with the previous period, twelve months of invoiced amounts, what needs a decision in amounts, and the split per company, per transaction type and the e-reporting position, for sales or purchases."
keywords: [NomaUBL, billing overview, synthèse, landing page, revenue, VAT, credit notes, transmission rate, acceptance rate, previous period, e-reporting, business dashboard, sales, purchases, PDF export, JD Edwards, SAP, NetSuite, custom ERP]
---

# Billing overview

The **Billing overview** is the page NomaUBL opens on after sign-in. It is written for finance and customer service: the invoices of the period **in amounts**, what became of them, what still **needs a decision**, and where each company stands in e-reporting. Every figure is compared with the previous period. The page reads the NomaUBL database, so it works the same whatever the source system (JD Edwards, SAP, NetSuite or a custom ERP).

Open it from **Billing overview**, first entry of the Navigation group. The day-to-day work queues are on the [Operations](./dashboard.md) dashboard, the stage-by-stage analysis on [Statistics](./statistics.md).

---

## At a glance

<svg viewBox="0 0 1200 562" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="syn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="syn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="syn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="syn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="522" rx="14" fill="url(#syn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Billing overview</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Invoices of the period in amounts, what needs a decision and the e-reporting position.</text>
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
  <rect x="916" y="83" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="938.0" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="240" y="114" width="146" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="313.0" y="126.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Compared to 1 – 30 Sep 2026</text>
  <rect x="240.0" y="140" width="172.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REVENUE EXCL. VAT</text>
  <text x="252.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1 284 560 €</text>
  <text x="400.5" y="184" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">+6.2 %</text>
  <text x="252.0" y="200" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Invoices 1 312 400 · Credit notes −27 840</text>
  <rect x="422.5" y="140" width="172.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VAT</text>
  <text x="434.5" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">256 912 €</text>
  <text x="583.0" y="184" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">+6.0 %</text>
  <rect x="605.0" y="140" width="172.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INVOICES AND CREDIT NOTES</text>
  <text x="617.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">2 418</text>
  <text x="765.5" y="184" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">+3.1 %</text>
  <text x="617.0" y="200" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 361 invoices · 57 credit notes</text>
  <rect x="787.5" y="140" width="172.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRANSMISSION RATE</text>
  <text x="799.5" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">96.4 %</text>
  <text x="948.0" y="184" fill="#f87171" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">−0.8 pts</text>
  <text x="799.5" y="200" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 276 issued · 85 not issued</text>
  <rect x="240" y="226" width="460" height="190" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="246" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Amount invoiced excl. VAT per month</text>
  <text x="254" y="260" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Last 12 months, by what became of the invoice</text>
  <rect x="260.4" y="311.5" width="22.9" height="70.5" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="260.4" y="306.0" width="22.9" height="5.5" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="260.4" y="305.1" width="22.9" height="0.9" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="260.4" y="302.3" width="22.9" height="2.7" fill="#f87171" fillOpacity="0.85"/>
  <text x="271.9166666666667" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <rect x="296.3" y="304.1" width="22.9" height="77.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="296.3" y="299.6" width="22.9" height="4.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="296.3" y="298.7" width="22.9" height="0.9" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="296.3" y="298.7" width="22.9" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <text x="307.75" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">D</text>
  <rect x="332.1" y="317.9" width="22.9" height="64.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="332.1" y="311.5" width="22.9" height="6.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="332.1" y="306.9" width="22.9" height="4.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="332.1" y="305.1" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="343.58333333333337" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">J</text>
  <rect x="367.9" y="295.0" width="22.9" height="87.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="367.9" y="285.8" width="22.9" height="9.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="367.9" y="284.9" width="22.9" height="0.9" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="367.9" y="284.0" width="22.9" height="0.9" fill="#f87171" fillOpacity="0.85"/>
  <text x="379.4166666666667" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">F</text>
  <rect x="403.8" y="303.2" width="22.9" height="78.8" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="403.8" y="295.9" width="22.9" height="7.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="403.8" y="293.2" width="22.9" height="2.7" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="403.8" y="291.3" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="415.25000000000006" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">M</text>
  <rect x="439.6" y="295.9" width="22.9" height="86.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="439.6" y="291.3" width="22.9" height="4.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="439.6" y="290.4" width="22.9" height="0.9" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="439.6" y="288.6" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="451.08333333333337" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">A</text>
  <rect x="475.4" y="312.4" width="22.9" height="69.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="475.4" y="308.7" width="22.9" height="3.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="475.4" y="303.2" width="22.9" height="5.5" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="475.4" y="301.4" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="486.9166666666667" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">M</text>
  <rect x="511.3" y="295.0" width="22.9" height="87.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="511.3" y="289.5" width="22.9" height="5.5" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="511.3" y="287.7" width="22.9" height="1.8" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="511.3" y="286.7" width="22.9" height="0.9" fill="#f87171" fillOpacity="0.85"/>
  <text x="522.75" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">J</text>
  <rect x="547.1" y="309.6" width="22.9" height="72.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="547.1" y="304.1" width="22.9" height="5.5" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="547.1" y="298.7" width="22.9" height="5.5" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="547.1" y="296.8" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="558.5833333333334" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">J</text>
  <rect x="583.0" y="316.1" width="22.9" height="65.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="583.0" y="306.9" width="22.9" height="9.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="583.0" y="302.3" width="22.9" height="4.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="583.0" y="300.5" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="594.4166666666666" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">A</text>
  <rect x="618.8" y="298.7" width="22.9" height="83.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="618.8" y="292.2" width="22.9" height="6.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="618.8" y="287.7" width="22.9" height="4.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="618.8" y="286.7" width="22.9" height="0.9" fill="#f87171" fillOpacity="0.85"/>
  <text x="630.25" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">S</text>
  <rect x="654.6" y="313.3" width="22.9" height="68.7" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="654.6" y="308.7" width="22.9" height="4.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="654.6" y="305.1" width="22.9" height="3.7" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="654.6" y="303.2" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="666.0833333333334" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">O</text>
  <rect x="254" y="400" width="9" height="9" rx="2" fill="#4ade80"/>
  <text x="267" y="408" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Transmitted</text>
  <rect x="331.36" y="400" width="9" height="9" rx="2" fill="#4a9eff"/>
  <text x="344.36" y="408" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">In progress</text>
  <rect x="408.72" y="400" width="9" height="9" rx="2" fill="#fb923c"/>
  <text x="421.72" y="408" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">To correct</text>
  <rect x="481.32000000000005" y="400" width="9" height="9" rx="2" fill="#f87171"/>
  <text x="494.32000000000005" y="408" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Refused / disputed</text>
  <rect x="710" y="226" width="250" height="190" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="724" y="246" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">What needs a decision</text>
  <text x="724" y="260" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">All dates · 48 210 € incl. VAT</text>
  <rect x="724" y="272" width="3" height="28" rx="1.5" fill="#fb923c"/>
  <text x="734" y="284" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Disputed</text>
  <text x="734" y="296" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">12 invoices</text>
  <text x="946" y="284" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">21 600 €</text>
  <rect x="724" y="307" width="3" height="28" rx="1.5" fill="#fb923c"/>
  <text x="734" y="319" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Refused</text>
  <text x="734" y="331" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">7 invoices</text>
  <text x="946" y="319" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">14 980 €</text>
  <rect x="724" y="342" width="3" height="28" rx="1.5" fill="#f87171"/>
  <text x="734" y="354" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Rejected by the platform</text>
  <text x="734" y="366" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">5 invoices</text>
  <text x="946" y="354" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">8 430 €</text>
  <rect x="724" y="377" width="3" height="28" rx="1.5" fill="#f87171"/>
  <text x="734" y="389" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">To correct before sending</text>
  <text x="734" y="401" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 invoices</text>
  <text x="946" y="389" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">3 200 €</text>
  <rect x="240.0" y="430" width="233.33333333333334" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="448" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per company</text>
  <text x="252.0" y="468" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">00001</text>
  <text x="461.33333333333337" y="468" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">62 %</text>
  <text x="252.0" y="486" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">00002</text>
  <text x="461.33333333333337" y="486" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">38 %</text>
  <rect x="483.33333333333337" y="430" width="233.33333333333334" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="495.33333333333337" y="448" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per transaction type</text>
  <text x="495.33333333333337" y="468" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">B2B national</text>
  <text x="704.6666666666667" y="468" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">71 %</text>
  <text x="495.33333333333337" y="486" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">B2B international</text>
  <text x="704.6666666666667" y="486" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 %</text>
  <text x="495.33333333333337" y="504" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">B2C</text>
  <text x="704.6666666666667" y="504" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">20 %</text>
  <rect x="726.6666666666667" y="430" width="233.33333333333334" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738.6666666666667" y="448" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">E-reporting</text>
  <text x="738.6666666666667" y="468" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">00001</text>
  <text x="948.0000000000001" y="468" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Next: 1 – 10 Nov</text>
  <text x="738.6666666666667" y="486" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">00002</text>
  <text x="948.0000000000001" y="486" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Next: 1 – 30 Nov</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sales or purchases</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">switches every figure</text>
  <line x1="200" y1="97.0" x2="240" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four key figures</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">net of credit notes</text>
  <line x1="200" y1="187.0" x2="240" y2="185" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="20" y="296" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="311" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Twelve months</text>
  <text x="30" y="324" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ending at the period end</text>
  <line x1="200" y1="313.0" x2="254" y2="326" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="20" y="460" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="475" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lower row</text>
  <text x="30" y="488" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">company · type · e-reporting</text>
  <line x1="200" y1="477.0" x2="240" y2="476" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="20" y="116" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="131" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period and date basis</text>
  <text x="30" y="144" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens on the default period</text>
  <line x1="200" y1="133.0" x2="416" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="1000" y="158" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="173" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Change vs previous</text>
  <text x="1010" y="186" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">% or points, green / red</text>
  <line x1="1000" y1="175.0" x2="950" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="1000" y="296" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="311" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A row opens the invoices</text>
  <text x="1010" y="324" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">those statuses, all dates</text>
  <line x1="1000" y1="313.0" x2="946" y2="331" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">audit report layout</text>
  <line x1="1000" y1="97.0" x2="960" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
</svg>

---

## Header \{#header\}

| Control | Default | Description |
|---|---|---|
| **Sales / Purchases** | Sales | Switches every figure of the page between the invoices issued and the invoices received. |
| **Period** | This month, or the [default period](../configuration/default-periods.md) set for this view | The [period picker](../configuration/default-periods.md#period-picker): presets, two-month calendar and the date basis. |
| **Date basis** | Document date | *Document date*, *Activity date* or *Archive date*, chosen in the footer of the period picker. |
| **Exclude reviewed errors** | On | Hides the invoices already reviewed by customer service that still sit in an error status. Reviewed invoices in other statuses stay counted. |
| **Compared to …** | — | Shows the previous period used for the changes (see below). Hidden when the period is *All*. |
| **PDF** | — | Key figures, chart and tables in the layout of the [audit report](reports/audit-report.md) (`billing-overview.pdf`). |

The period, the date basis, the switch and the direction are remembered in the browser, so the page opens again as it was left.

### Previous period \{#previous-period\}

The change shown next to each figure compares the period with the one before it, chosen as follows:

| Period | Compared with |
|---|---|
| Starts on 1 January (e.g. *This year*) | The same dates one year earlier. |
| Starts on the 1st of a month (*This month*, *Last month*, *This quarter*…) | The same dates moved back by the length of the period in months: *This month* to date compares with the same days of last month, a whole month with the previous month, a quarter with the previous quarter. |
| Any other period (*Last 7 days*, a custom range…) | The period of the same length just before. |

The [Statistics](./statistics.md) dashboard uses the same rule.

---

## Key figures

| Figure | Value | Sub-line | Change |
|---|---|---|---|
| **Revenue excl. VAT** *(Purchases: Purchases excl. VAT)* | Invoices minus credit notes. | `Invoices … · Credit notes −…` | in % |
| **VAT** | VAT of the invoices minus that of the credit notes. | — | in % |
| **Invoices and credit notes** | Number of documents. | `… invoices · … credit notes` | in % |
| **Transmission rate** *(Purchases: Acceptance rate)* | Share of the invoices transmitted to the customer (accepted, for purchases). | `… issued · … not issued` (`… accepted`) | in points |

A change is green when it goes up and red when it goes down, followed by the previous value (`vs …`).

---

## Amount invoiced per month

A stacked bar chart of the **last twelve months**, ending with the month of the period end, by what became of the invoice: *Transmitted to the customer* (purchases: *Accepted*), *In progress*, *To correct*, *Refused or disputed*. Credit notes are left out of the chart. The title reads *Amount received excl. VAT per month* for purchases.

---

## What needs a decision

The invoices waiting for someone, **all dates together**, in amounts including VAT. The subtitle gives the total.

| Row | Content | Next step shown |
|---|---|---|
| One row per business-error status (*Disputed*, *Refused*…) | Biggest amount first. | *Decision to take with the customer* |
| **Rejected by the platform** | Status 213. | *Correct, then send again* |
| **To correct before sending** | The other technical-error statuses together. | *A check or the platform import failed* |

Each row gives the amount and the number of invoices; a click opens [E-Invoicing](./invoices.md) filtered on those statuses, over all dates. When nothing waits, the block reads *Nothing awaits a decision.*

---

## Per company, per transaction type, e-reporting

| Block | Content |
|---|---|
| **Per company** | Invoice count, amount excl. VAT and share transmitted, per company. |
| **Per transaction type** | One bar per type with its flow: *B2B national* (e-invoicing), *B2B international* (e-reporting 10.1), *B2C* (e-reporting 10.3), *Other*. National B2B goes through the platform; international B2B and B2C are declared in [e-reporting](./ereporting.md). |
| **E-reporting** *(sales only)* | Per company: the end of the last declared period (or *No declaration yet*), the next period to declare and its status. |

---

## Access \{#access\}

Grant the **Billing overview** page in the Navigation group on the [Roles](../configuration/security/roles.md) page; the server and the AI assistant's `billing_overview` tool check the same grant. Figures follow the companies and the [row filters](../configuration/security/roles.md#row-filters) of the signed-in user's role. A role with this page opens on it after sign-in; under a restricted licence, the application opens on the [Operations](./dashboard.md) dashboard.

---

## Tips & best practices

- **Leave *Exclude reviewed errors* on for the monthly review.** The amounts then show only the errors nobody has handled yet.
- **Use *Document date* to reconcile with accounting.** It is the date printed on the invoice, the one the VAT declaration also relies on; *Archive date* matches the processing reports.
- **Start from *What needs a decision*.** A click lands on the invoices concerned, all dates, ready to be handled.
- **Set the opening period once for everyone** under [Default periods](../configuration/default-periods.md) — for example *Last month* for a team that reviews the closed month.
- **Send it by email.** A [daily digest](../sync/scheduled-jobs/daily-digest.md#business-dashboards) can send the page as PDF or Excel — for example on the 1st, last month's overview, as a given role sees it.
