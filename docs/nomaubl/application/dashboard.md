---
title: Dashboard
description: "The NomaUBL home page — a 12-column widget grid with hero KPI cards (Total / In flight / Rejected — IT / Rejected — Business), pipeline funnel, volume chart, recent activity, stale invoices, top failing rules, per-company breakdown, e-reporting coverage, PA round-trip and scheduler health — all governed by a single date-range filter."
keywords: [NomaUBL, dashboard, KPI, hero cards, pipeline funnel, volume chart, recent activity, stale invoices, top failing rules, e-reporting coverage, round-trip, scheduler health, date range, JD Edwards, SAP, NetSuite, custom ERP]
---

# Dashboard

The **Dashboard** is the NomaUBL home page. It opens by default after sign-in and surfaces the operational state of the platform on a **12-column widget grid** — four hero KPI cards at the top, then a sequence of paired widgets that cover ingestion volume, dispatcher pipeline, recent + stale invoices, top failing validation rules, per-company breakdown, e-reporting coverage, PA round-trip times and scheduler health.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. Every number is read from the local NomaUBL database, so the dashboard reflects what NomaUBL has processed and persisted, not directly what the source system or the Plateforme Agréée holds.

:::info[Refreshed in 2026.05.4]
The dashboard was rebuilt as a 12-column widget grid in 2026.05.4. The previous stacked layout of status counter cards was replaced by four hero KPIs (Total / In flight / Rejected — IT / Rejected — Business) plus eight paired widgets. Click-throughs from the hero cards now use a multi-status filter, so *In flight* lands on the actual in-flight invoices instead of dropping the status filter.
:::

---

## At a glance

<svg viewBox="0 0 1000 720" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dash-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dash-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dash-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="dash-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.28"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="dash-g-red" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87171" stopOpacity="0.32"/><stop offset="100%" stopColor="#dc2626" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="dash-g-orange" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fb923c" stopOpacity="0.32"/><stop offset="100%" stopColor="#ea580c" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="690" rx="14" fill="url(#dash-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Dashboard</text>
  <rect x="640" y="30" width="146" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">📅 Yesterday ▾</text>

  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="132" height="58" rx="8" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="102" fill="#94a3b8" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TOTAL INVOICES</text>
  <text x="252" y="124" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace">1 247</text>
  <polyline points="312,134 322,128 332,132 342,124 352,126 362,118 366,120" stroke="#94a3b8" strokeWidth="1.2" fill="none" opacity="0.6"/>

  <rect x="380" y="84" width="132" height="58" rx="8" fill="url(#dash-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="392" y="102" fill="#4a9eff" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">IN FLIGHT</text>
  <text x="392" y="124" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace">184</text>
  <polyline points="452,134 462,130 472,132 482,126 492,128 502,122 506,124" stroke="#4a9eff" strokeWidth="1.2" fill="none" opacity="0.7"/>

  <rect x="520" y="84" width="132" height="58" rx="8" fill="url(#dash-g-red)" stroke="#f87171" strokeWidth="1.2"/>
  <text x="532" y="102" fill="#f87171" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REJECTED — IT</text>
  <text x="532" y="124" fill="#f87171" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace">12</text>

  <rect x="660" y="84" width="132" height="58" rx="8" fill="url(#dash-g-orange)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="672" y="102" fill="#fb923c" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REJECTED — BUSINESS</text>
  <text x="672" y="124" fill="#fb923c" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace">5</text>

  <rect x="240" y="158" width="552" height="86" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="178" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline funnel</text>
  <rect x="254" y="190" width="100" height="40" rx="6" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/>
  <text x="304" y="206" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">VALIDATED</text>
  <text x="304" y="222" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">1 102</text>
  <text x="362" y="214" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">→</text>
  <rect x="378" y="190" width="92" height="40" rx="6" fill="rgba(74,158,255,0.16)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="424" y="206" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">SENT TO PA</text>
  <text x="424" y="222" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">1 080</text>
  <text x="482" y="214" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">→</text>
  <rect x="498" y="190" width="84" height="40" rx="6" fill="rgba(74,158,255,0.16)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="540" y="206" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">PENDING</text>
  <text x="540" y="222" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">184</text>
  <text x="594" y="214" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">→</text>
  <rect x="610" y="190" width="76" height="40" rx="6" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/>
  <text x="648" y="206" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">DEPOSITED</text>
  <text x="648" y="222" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">896</text>
  <rect x="700" y="190" width="84" height="40" rx="6" fill="rgba(248,113,113,0.16)" stroke="#f87171" strokeWidth="1"/>
  <text x="742" y="206" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">REJECTED</text>
  <text x="742" y="222" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">17</text>

  <rect x="240" y="260" width="552" height="84" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="278" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Daily volume — 30 days</text>
  <polyline points="252,330 282,322 312,316 342,300 372,294 402,288 432,302 462,290 492,278 522,284 552,272 582,266 612,278 642,260 672,266 702,256 732,272 762,260 792,266"
    stroke="#4a9eff" strokeWidth="1.5" fill="none"/>
  <polyline points="252,330 282,322 312,316 342,300 372,294 402,288 432,302 462,290 492,278 522,284 552,272 582,266 612,278 642,260 672,266 702,256 732,272 762,260 792,266 792,338 252,338"
    fill="rgba(74,158,255,0.10)" stroke="none"/>

  <rect x="240" y="360" width="270" height="160" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="378" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Recent activity</text>
  <text x="254" y="396" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12345 RI 00070 · Deposited</text>
  <text x="490" y="396" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">2 min</text>
  <line x1="254" y1="403" x2="496" y2="403" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="416" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12300 RI 00001 · Sent to PA</text>
  <text x="490" y="416" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">14:32</text>
  <line x1="254" y1="423" x2="496" y2="423" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="436" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12299 RI 00001 · Pending</text>
  <text x="490" y="436" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">Yesterday</text>
  <line x1="254" y1="443" x2="496" y2="443" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="456" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12298 RI 00001 · Validated</text>
  <text x="490" y="456" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">Yesterday</text>

  <rect x="522" y="360" width="270" height="76" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="378" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Stale invoices &gt; 7 d</text>
  <text x="536" y="395" fill="#fb923c" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">9</text>
  <text x="552" y="395" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">unchanged status &gt; 7 days</text>
  <text x="536" y="416" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12099 RI 00070 · Pending · 11 d</text>
  <text x="536" y="429" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12087 RI 00001 · Validated · 9 d</text>

  <rect x="522" y="444" width="270" height="76" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="462" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Top failing rules</text>
  <rect x="710" y="452" width="76" height="20" rx="4" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="466" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">ALL · UBL · INTEG</text>
  <text x="540" y="486" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">①</text>
  <text x="556" y="486" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">BR-CL-23</text>
  <text x="780" y="486" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">52</text>
  <text x="556" y="498" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">CurrencyCode must use ISO 4217</text>
  <text x="540" y="514" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">②</text>
  <text x="556" y="514" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">BR-FR-12</text>
  <text x="780" y="514" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">38</text>

  <rect x="240" y="536" width="270" height="76" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="554" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Per company</text>
  <rect x="254" y="566" width="184" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="0.6"/>
  <rect x="254" y="566" width="138" height="14" rx="3" fill="rgba(74,222,128,0.5)"/>
  <rect x="392" y="566" width="34" height="14" rx="3" fill="rgba(74,158,255,0.5)"/>
  <rect x="426" y="566" width="12" height="14" rx="3" fill="rgba(248,113,113,0.5)"/>
  <text x="446" y="577" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">00070</text>
  <rect x="254" y="586" width="172" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="0.6"/>
  <rect x="254" y="586" width="120" height="14" rx="3" fill="rgba(74,222,128,0.5)"/>
  <rect x="374" y="586" width="40" height="14" rx="3" fill="rgba(74,158,255,0.5)"/>
  <rect x="414" y="586" width="12" height="14" rx="3" fill="rgba(248,113,113,0.5)"/>
  <text x="446" y="597" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">00001</text>

  <rect x="522" y="536" width="270" height="76" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="554" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">E-Reporting coverage</text>
  <text x="536" y="572" fill="#4ade80" fontSize="14" fontWeight="700" fontFamily="ui-monospace, monospace">98 %</text>
  <text x="572" y="572" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">B2C declared this month</text>
  <text x="536" y="592" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Flux 10.1 · 28 / 28 deposited</text>
  <text x="536" y="606" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Flux 10.3 · 4 / 4 deposited</text>

  <rect x="240" y="628" width="270" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="646" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">PA round-trip</text>
  <text x="254" y="664" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Send → Deposit · avg 3.2 h</text>
  <text x="254" y="680" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Send → Reject · avg 1.4 h</text>

  <rect x="522" y="628" width="270" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="646" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Scheduler health</text>
  <text x="536" y="664" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">● fetchImportInterval · last run 2 min ago</text>
  <text x="536" y="680" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">● fetchStatusInterval · last run 2 min ago</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hero KPI cards</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click → filtered invoice list</text>
  <line x1="200" y1="115" x2="240" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline funnel</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click a stage → multi-status filter</text>
  <line x1="200" y1="216" x2="240" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="20" y="288" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="303" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">30-day volume</text>
  <text x="30" y="316" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">daily ingestion sparkline</text>
  <line x1="200" y1="304" x2="240" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="820" y="380" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Stale invoices</text>
  <text x="830" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">stuck &gt; 7 days</text>
  <line x1="820" y1="396" x2="794" y2="392" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="820" y="460" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="475" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Top failing rules</text>
  <text x="830" y="488" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ALL / UBL / INTEG toggle</text>
  <line x1="820" y1="476" x2="794" y2="472" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="20" y="556" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="571" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per-company stack</text>
  <text x="30" y="584" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">OK / pending / error</text>
  <line x1="200" y1="572" x2="240" y2="568" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="820" y="556" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="571" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">E-Reporting coverage</text>
  <text x="830" y="584" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">% B2C / B2BINT declared</text>
  <line x1="820" y1="572" x2="794" y2="568" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="20" y="648" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="663" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PA round-trip</text>
  <text x="30" y="676" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avg send → deposit / reject</text>
  <line x1="200" y1="664" x2="240" y2="660" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="820" y="648" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="663" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Scheduler health</text>
  <text x="830" y="676" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">last-run + interval per job</text>
  <line x1="820" y1="664" x2="794" y2="660" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>
</svg>

The grid collapses to a single column below ~900 px. Hero cards keep their 220 px minimum on every screen, so the four KPIs always sit on the same horizontal band.

---

## The date-range filter

A single filter sits at the very top of the page. It restricts every widget that depends on a time window — hero KPI counts, pipeline funnel, recent activity, top failing rules, per-company breakdown.

| Preset | Window |
|---|---|
| **Today** | Today only. |
| **Yesterday** *(default)* | The previous full day. |
| **Last 7 days** | The last seven full days, ending yesterday. |
| **This month** | The current month from day 1 to today. |
| **Last month** | The previous full month. |
| **Custom range** | Pick the **From** and **To** dates manually. |

A small set of widgets ignore the date filter on purpose — *Stale invoices* (always counts the last 90 days), *E-Reporting coverage* (always the current month), *Scheduler health* (always live). Each carries its own time-window indicator so the difference is obvious.

---

## Hero KPI cards

Four cards summarise the operational state of the platform at a glance. Each card carries a label, the count, a 7-day sparkline of daily volume, a one-line caption explaining the underlying status set, and — on full-licence installations — a click-through to the [E-Invoicing](./invoices.md) page with the right filter pre-applied.

| Card | Counts | Statuses behind it | Click-through |
|---|---|---|---|
| **Total invoices** | All invoices in the date range | every status | E-Invoicing with date range only |
| **In flight** | Dispatcher pipeline + PA in-transit | `9900` `9901` `9902` `9903` `9906` (internal in-progress) and `201` `202` `203` `204` `214` `224`–`227` (PA in-transit) | E-Invoicing with `status=9900,9901,9902,9903,9906,201,202,…` |
| **Rejected — IT** | Tech failures owned by the IT / dev team | `9904` `9905` `9907` (internal failures) and `213` (PA technical rejection) | E-Invoicing with `status=9904,9905,9907,213` |
| **Rejected — Business** | Failures owned by customer-services | `206` `207` `208` `210` `221` `501` `600` (commercial disputes, refusals, suspensions, routing, recovery, e-mail-delivery) | E-Invoicing with the matching multi-status filter |

The **In flight** / **Rejected — IT** / **Rejected — Business** cards used to drop the status filter entirely on click — `/api/invoices?status=` was a single-value parameter, so a list of codes was rejected and the page fell back to the full list. The hero cards now pass a comma list (`/api/invoices?status=A,B,C`) which the backend parses into a multi-status `IN (…)` clause, so the click lands on the actual subset.

A red border + red value on **Rejected — IT** signals a non-zero count; same orange treatment on **Rejected — Business**.

---

## The widget grid

Below the hero row, a 12-column grid hosts eight widgets paired to balance content density.

### Pipeline funnel *(12 cols)*

Five horizontal stages — *Validated / Sent to PA / Pending / Deposited / Rejected* — with the count under each label. Clicking a stage opens E-Invoicing pre-filtered on the matching status set. The funnel reads left to right: anything sitting on *Pending* for too long flows into the *Stale invoices* widget below; anything on *Rejected* needs the [Integration Errors](./integration-errors.md) page.

### Daily volume *(12 cols)*

A 30-day area chart of daily ingestion volume — the same series feeding the hero card sparklines, rendered full-width so a single weekday slump is visible at a glance.

### Recent activity *(6 cols)* + Stale + Top failing rules *(6 cols)*

This row used to be 8/4, which made the right column visibly thinner than the left. It was rebalanced to 6/6 in 2026.05.4 so all subsequent rows align on the same column boundary.

| Widget | What it shows |
|---|---|
| **Recent activity** | The last few invoices touched in the date range, with their canonical triplet (`doc · dct · kco`), status label and relative timestamp. Clicking a row opens the [E-Invoicing](./invoices.md) list filtered on that status. |
| **Stale invoices** | Up to 50 rows where the status has not changed in the last 7 days. Each row carries the triplet, the current status and the days-since-last-update count. |
| **Top failing rules** | Top 10 validation rules by failure count over the date range. Each row shows a rank badge, the rule code, the rule's description as a secondary line, and the count. A header toggle scopes the list to **ALL** / **UBL** (Schematron / XSD) / **INTEG** (lifecycle / runtime errors). The *View all* link opens the [Integration Errors](./integration-errors.md) page on its **by-rule** tab; clicking a specific rule lands on the **by-event** tab with that rule chip pre-applied. |

The proportional bars of the previous version made counts of *160* and *10* almost indistinguishable. The new ranked rows give every rule the same visual weight, with the count on the right.

### Per company *(6 cols)* + E-Reporting coverage *(6 cols)*

| Widget | What it shows |
|---|---|
| **Per company** | One stacked horizontal bar per `KCO` (`UHKCO` from `F564231`) split into *OK* (green) / *Pending* (blue) / *Error* (red), labelled with the count and the company code. Useful when a spike is concentrated on a single company. |
| **E-Reporting coverage** | A percentage and three rows summarising the current month's e-reporting submission state: *Flux 10.1* (B2BINT detail) and *Flux 10.3* (B2C / OUTOFSCOPE aggregated) — *deposited* / *generated*. Clicking the widget opens the [E-Reporting](./ereporting.md) page. |

### PA round-trip *(6 cols)* + Scheduler health *(6 cols)*

| Widget | What it shows |
|---|---|
| **PA round-trip** | Average duration *Send → Deposit* and *Send → Reject* over the date range, computed from the lifecycle table. A spike on one of these reveals a slowdown on the PA side that is otherwise invisible from the daily counts alone. |
| **Scheduler health** | One row per scheduled job (`fetchImportInterval`, `fetchStatusInterval`, `fetchAll.N.…`, `ereportingInterval`) with the configured interval and the *last run* timestamp. A green dot when the last run is recent, a red dot if it is older than 2× the interval. |

---

## Quick actions + About

Below the grid, three shortcut buttons remain:

| Button | Behaviour |
|---|---|
| **Create invoice** | Opens the *new invoice* modal directly on the dashboard. After saving, navigation hands off to the [E-Invoicing](./invoices.md) page. |
| **Status reference** | Navigates to *References → Status Reference* — the catalogue of every lifecycle status code. |
| **Reason codes** | Navigates to *References → Reason Codes* — the catalogue of every refusal / rejection / irregularity reason code. |

The *About this release* card sits at the very bottom and lists the release number, build date, AFNOR profile version and the bundled Schematron versions per module (EN 16931, BR-FR Flux 2, BR-FR CPRO, EXTENDED-CTC-FR).

---

## Tips & best practices

- **Read the hero row first.** The four KPIs answer the question *"is anything broken right now?"* in one glance — a non-zero red border on *Rejected — IT* takes priority over anything else on the page.
- **Use the date-range presets.** *Yesterday* fits a morning monitoring routine; *This month* fits a finance overview; *Custom range* covers month-end reconciliation or specific incident windows.
- **Match the funnel against the hero counts.** *In flight* should equal the *Sent to PA* + *Pending* stages of the funnel. A divergence is usually a status that has not been mapped yet on either side.
- **Top failing rules drives the work.** A single rule with hundreds of hits often points to one upstream change (a renamed field, a stale tax code) — fixing the rule typically clears most of the integration errors.
- **The dashboard is the right place to spot trends, not investigate a row.** For a single-invoice deep-dive use the [E-Invoicing](./invoices.md) detail modal; for a rule-level analysis use the [Integration Errors](./integration-errors.md) page.
- **Bookmark the dashboard.** It is the natural daily landing page; bookmarks survive session expiry, so the next sign-in lands on the same view.
