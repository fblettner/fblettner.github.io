---
title: Employees
description: "Nomasx-1 employee headcount of a connected JD Edwards application — internal and external people over time, a daily summary and the list behind it, for licences counted per employee."
keywords: [Nomasx-1, applications, employees, headcount, licence metric, Employee, JD Edwards, payroll]
---

# Employees

The **Employees** menu counts the people a connected application knows as employees — the basis of the licences sold per employee. Three entries: **Dashboard** draws the headcount over time, **Summary** gives it per collection day and group, **Details** lists the people behind each figure. Open them from **Applications → Employees**.

Each collection takes a snapshot of the day: the history grows run after run, so a trend appears after a few collections.

---

## At a glance \{#dashboard\}

The **Dashboard** draws one line per group — **INTERNAL_COUNT** and **EXTERNAL_COUNT** — with one point per collection day. **Application** narrows it to one application (or **All**); **Excel** and **PDF** export it, the refresh button reads it again.

<svg viewBox="0 0 1320 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="emd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="emd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="emd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="emd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="366" rx="14" fill="url(#emd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="261" y="50" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Employees</text>
  <text x="261" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">JDE employees — internal vs external headcount over time, per application.</text>
  <rect x="233" y="84" width="854" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="102" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="245" y="108" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="121.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">All   ⌄</text>
  <rect x="805" y="106" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="830.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="861" y="106" width="38" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="880.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="905" y="106" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="918.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="941" y="121" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Updated at 08:12</text>
  <rect x="233" y="146" width="854" height="220" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="247" y="168" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Employees — Internal vs External</text>
  <line x1="285" y1="190.0" x2="1055" y2="190.0" stroke="#1f2937" strokeWidth="0.8"/>
  <text x="277" y="193.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">240</text>
  <line x1="285" y1="225.0" x2="1055" y2="225.0" stroke="#1f2937" strokeWidth="0.8"/>
  <text x="277" y="228.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">180</text>
  <line x1="285" y1="260.0" x2="1055" y2="260.0" stroke="#1f2937" strokeWidth="0.8"/>
  <text x="277" y="263.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">120</text>
  <line x1="285" y1="295.0" x2="1055" y2="295.0" stroke="#1f2937" strokeWidth="0.8"/>
  <text x="277" y="298.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">60</text>
  <line x1="285" y1="330.0" x2="1055" y2="330.0" stroke="#1f2937" strokeWidth="0.8"/>
  <text x="277" y="333.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <path d="M285,206 L478,205 L670,205 L862,203 L1055,201" fill="none" stroke="#4a9eff" strokeWidth="2"/>
  <circle cx="285" cy="206" r="2.5" fill="#4a9eff"/>
  <circle cx="478" cy="205" r="2.5" fill="#4a9eff"/>
  <circle cx="670" cy="205" r="2.5" fill="#4a9eff"/>
  <circle cx="862" cy="203" r="2.5" fill="#4a9eff"/>
  <circle cx="1055" cy="201" r="2.5" fill="#4a9eff"/>
  <path d="M285,308 L478,306 L670,303 L862,304 L1055,300" fill="none" stroke="#4ade80" strokeWidth="2"/>
  <circle cx="285" cy="308" r="2.5" fill="#4ade80"/>
  <circle cx="478" cy="306" r="2.5" fill="#4ade80"/>
  <circle cx="670" cy="303" r="2.5" fill="#4ade80"/>
  <circle cx="862" cy="304" r="2.5" fill="#4ade80"/>
  <circle cx="1055" cy="300" r="2.5" fill="#4ade80"/>
  <text x="285.0" y="344" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-07-01</text>
  <text x="477.5" y="344" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-08-01</text>
  <text x="670.0" y="344" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-09-01</text>
  <text x="862.5" y="344" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-01</text>
  <text x="1055.0" y="344" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11-01</text>
  <rect x="560.0" y="352" width="9" height="9" rx="2" fill="#4ade80"/>
  <text x="573.0" y="360" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">EXTERNAL_COUNT</text>
  <rect x="651.64" y="352" width="9" height="9" rx="2" fill="#4a9eff"/>
  <text x="664.64" y="360" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">INTERNAL_COUNT</text>
  <rect x="12" y="101" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="116" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="22" y="129" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one or all JDE systems</text>
  <line x1="197" y1="118.0" x2="245" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emd-arrow)"/>
  <rect x="12" y="185.83333333333331" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="200.83333333333331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Internal</text>
  <text x="22" y="213.83333333333331" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">search type E, from payroll</text>
  <line x1="197" y1="202.83333333333331" x2="862.5" y2="202.83333333333331" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emd-arrow)"/>
  <rect x="12" y="289.0833333333333" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="304.0833333333333" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">External</text>
  <text x="22" y="317.0833333333333" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every other search type</text>
  <line x1="197" y1="306.0833333333333" x2="477.5" y2="306.0833333333333" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emd-arrow)"/>
  <rect x="1119" y="99" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="114" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel · PDF · Refresh</text>
  <text x="1129" y="127" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">export or read again</text>
  <line x1="1119" y1="116.0" x2="815" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emd-arrow)"/>
  <rect x="1119" y="339" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="354" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One point per collection day</text>
  <text x="1129" y="367" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a snapshot each run</text>
  <line x1="1119" y1="356.0" x2="660.0" y2="356" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emd-arrow)"/>
</svg>

---

## Summary \{#summary\}

**Summary** (*License - JDE Employees*) gives, for each application and collection day, the number of distinct people of each group.

<svg viewBox="0 0 1320 364" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ems-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ems-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ems-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ems-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="284" rx="14" fill="url(#ems-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">License - JDE Employees</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">10 rows · 12 ms</text>
  <rect x="989" y="84" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="85" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="89" x2="1038" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="389" y="112" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="414.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="596" y="112" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="719" y="112" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="112" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="359" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="373" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="459" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">EXTRACT DATE</text>
  <text x="599" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">EMPLOYEES GROUP</text>
  <text x="845" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace"># EMPLOYEES</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="173" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="184.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-01</text>
  <text x="599" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">External</text>
  <text x="845" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">52</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="195" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="206.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-01</text>
  <text x="599" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Internal</text>
  <text x="845" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">221</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="217" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="228.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-01</text>
  <text x="599" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">External</text>
  <text x="845" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">44</text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="239" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="250.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-01</text>
  <text x="599" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Internal</text>
  <text x="845" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">218</text>
  <text x="233" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="270" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="283.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="283" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–10 of 10</text>
  <text x="1087" y="283" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="256" y="191.0" width="180" height="32" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="197.0" width="172" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="211.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Employees</text>
  <text x="426" y="211.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Extract Date</text>
  <text x="225.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one snapshot per day</text>
  <line x1="360.0" y1="320" x2="467" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
  <rect x="515.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Employees Group</text>
  <text x="525.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Internal · External</text>
  <line x1="660.0" y1="320" x2="607" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
  <rect x="815.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif"># Employees</text>
  <text x="825.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">distinct address numbers</text>
  <line x1="960.0" y1="320" x2="837" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
  <rect x="12" y="164.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="179.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row actions (···)</text>
  <text x="22" y="192.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or right-click the row</text>
  <line x1="197" y1="181.0" x2="248" y2="181.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
  <rect x="12" y="206.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="221.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Display Employees</text>
  <text x="22" y="234.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the people behind the count</text>
  <line x1="197" y1="223.0" x2="276" y2="223.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to Excel</text>
  <line x1="1119" y1="134.0" x2="1048.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
</svg>

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `LEMP_APPS_ID` — application identifier. | The connected application. |
| **Extract Date** | `LEMP_DT_EXTRACT` — day of the collection. | Day of the snapshot. |
| **Employees Group** | `Internal` / `External`. | *Internal*: search type `E`. *External*: any other search type. |
| **# Employees** | Distinct address numbers. | Headcount of the group that day. |

The **···** button of a row (or a right-click) offers **Display Employees**: the *Details* of that application, filtered on the day and the group. **Back**, above the details, returns to the summary.

---

## Details \{#details\}

**Details** (*License - JDE Employees - Details*) lists the people, one line per address number and collection day.

<svg viewBox="0 0 1320 376" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="emp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="emp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="emp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="emp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="296" rx="14" fill="url(#emp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">License - JDE Employees - Details</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Advanced filters</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">273 rows · 12 ms</text>
  <rect x="989" y="118" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="119" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="123" x2="1038" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="389" y="146" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="414.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="596" y="146" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="719" y="146" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="146" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="337" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="351" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="437" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">EXTRACT DATE</text>
  <text x="581" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">EMPLOYEE ID</text>
  <text x="595" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">EMPLOYEE NAME</text>
  <text x="705" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">EMPLOYEE TY…</text>
  <text x="781" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TYPE</text>
  <text x="867" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPANY</text>
  <text x="927" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">START DATE</text>
  <text x="1007" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LAST WORK DATE</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-01</text>
  <text x="581" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4021</text>
  <text x="595" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Doe, John</text>
  <text x="705" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">E</text>
  <text x="781" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Employees</text>
  <text x="867" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00001</text>
  <text x="927" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2019-03-04</text>
  <text x="1007" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-01</text>
  <text x="581" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4388</text>
  <text x="595" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Smith, Anna</text>
  <text x="705" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">E</text>
  <text x="781" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Employees</text>
  <text x="867" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00001</text>
  <text x="927" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2021-09-01</text>
  <text x="1007" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-01</text>
  <text x="581" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">7710</text>
  <text x="595" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Wilson, Bob</text>
  <text x="705" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">V</text>
  <text x="781" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Suppliers</text>
  <text x="867" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00200</text>
  <text x="927" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-20</text>
  <text x="1007" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-31</text>
  <text x="233" y="294" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="282" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="295.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="295" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–50 of 273</text>
  <text x="1087" y="295" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="332" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="347" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Employee</text>
  <text x="225.0" y="360" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">address number and name</text>
  <line x1="360.0" y1="332" x2="573" y2="271.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emp-arrow)"/>
  <rect x="515.0" y="332" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="347" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Employee Type · Type</text>
  <text x="525.0" y="360" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">search type and its description</text>
  <line x1="660.0" y1="332" x2="713" y2="271.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emp-arrow)"/>
  <rect x="815.0" y="332" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="347" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start · Last work date</text>
  <text x="825.0" y="360" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the payroll tables</text>
  <line x1="960.0" y1="332" x2="1015" y2="271.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emp-arrow)"/>
  <rect x="12" y="79" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="94" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="22" y="107" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, date, group</text>
  <line x1="197" y1="96.0" x2="233" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emp-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">e.g. by company or type</text>
  <line x1="1119" y1="168.0" x2="894.5" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emp-arrow)"/>
</svg>

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `LEMP_APPS_ID` — application identifier. Filterable. | The connected application. |
| **Extract Date** | `LEMP_DT_EXTRACT` — day. Filterable. | Day of the snapshot. |
| **Employee ID** | `LEMP_ID` — address number. | The person. |
| **Employee Name** | `LEMP_NAME` — name in the address book. | Who it is. |
| **Employee Type** | `LEMP_TYPE` — search type code. | `E` for an employee, another code otherwise. |
| **Type** | `LEMP_TYPE_DESC` — description of the search type. | What the code means. |
| **Company** | `LEMP_COMPANY` — home company. | Where the person works. |
| **Start Date** | `LEMP_DT_START` — first date known. | Start of employment or of the first time entry. |
| **Last work date** | `LEMP_DT_WORK` — last date worked. | Latest time entry. |
| **Employees Group** | `Internal` / `External`. Filterable. | Group the person is counted in. |

:::info[JDE-specific]
The people are read from the JD Edwards EnterpriseOne payroll tables — the employee master (F060116) for the employees, and the time entry tables (F06116, F06116Z1) for the others — joined to the address book (F0101) for the name and the search type, whose description comes from the UDC 01/ST. A person found in several tables is counted once per day. The step runs with the licence collection (*Jobs → Collect licences*).
:::

---

## Tips & best practices

- **Compare the last point with the contract.** The figure that matters is the headcount on the date the licences are counted; the Dashboard shows whether it is stable or growing.
- **Read the *External* group carefully.** People paid through time entry without an employee record (contractors, temporary staff) land there — check with HR whether the contract counts them.
- **Export the details** of the day used for the licence count and keep the file with the compliance records.
