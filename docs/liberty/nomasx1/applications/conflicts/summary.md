---
title: Conflicts — Summary
description: "Headline view of segregation-of-duties conflicts — number of users in conflict, broken down by business process and risk."
keywords: [Nomasx-1, applications, conflicts, segregation of duties, SoD, summary, risk]
---

# Conflicts — Summary

The **Conflicts — Summary** screen is the *headline view* of segregation-of-duties conflicts on a connected application. One line per `(Application, Process, Risk)` triplet. Each row carries the count of users that hold the incompatible role combinations defined by the SoD matrix.

It is the screen you open at the start of a quarterly review and the one you screenshot for the steering committee.

---

## At a glance

<svg viewBox="0 0 1320 442" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="362" rx="14" fill="url(#cfs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">SOD - Summary</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Advanced filters</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">36 rows · 12 ms</text>
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
  <text x="359" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="373" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="459" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID (ID)</text>
  <text x="555" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID</text>
  <text x="675" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISK ID (ID)</text>
  <text x="765" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISK ID</text>
  <text x="1031" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">COUNT</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="207" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="218.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="555" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Procure to Pay</text>
  <text x="675" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PR01</text>
  <text x="765" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create a supplier and pay it</text>
  <text x="1031" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="229" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="240.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="555" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Procure to Pay</text>
  <text x="675" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PR03</text>
  <text x="765" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Enter and approve a voucher</text>
  <text x="1031" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="251" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="262.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">O2C01</text>
  <text x="555" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Order to Cash</text>
  <text x="675" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">O2CR02</text>
  <text x="765" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create a customer and post receipts</text>
  <text x="1031" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">7</text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="273" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="284.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">GL01</text>
  <text x="555" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Finance &amp; Accounting</text>
  <text x="675" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">GLR05</text>
  <text x="765" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Post journal entries and close periods</text>
  <text x="1031" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <rect x="233" y="292" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="295" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="306.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">GL01</text>
  <text x="555" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Finance &amp; Accounting</text>
  <text x="675" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">GLR08</text>
  <text x="765" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Maintain accounts and post entries</text>
  <text x="1031" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <rect x="233" y="314" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="317" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="328.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV01</text>
  <text x="555" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Inventory</text>
  <text x="675" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INVR01</text>
  <text x="765" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Adjust stock and count it</text>
  <text x="1031" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="233" y="360" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="348" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="361.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="361" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–36 of 36</text>
  <text x="1087" y="361" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="256" y="225.0" width="169" height="98" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="231.0" width="161" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="245.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users</text>
  <text x="415" y="245.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="267.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Roles</text>
  <text x="415" y="267.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="289.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Objects</text>
  <text x="415" y="289.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="311.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Details</text>
  <text x="415" y="311.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Process</text>
  <text x="225.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from Settings → SoD</text>
  <line x1="360.0" y1="398" x2="563" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
  <rect x="515.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Risk</text>
  <text x="525.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the conflicting pair of activities</text>
  <line x1="660.0" y1="398" x2="773" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
  <rect x="815.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Count</text>
  <text x="825.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users in conflict</text>
  <line x1="960.0" y1="398" x2="1023" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
  <rect x="12" y="198.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="213.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row actions (···)</text>
  <text x="22" y="226.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or right-click the row</text>
  <line x1="197" y1="215.0" x2="248" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
  <rect x="12" y="306.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="321.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four drill-downs</text>
  <text x="22" y="334.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users, roles, objects, details</text>
  <line x1="197" y1="323.0" x2="276" y2="323.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the summary to Excel</text>
  <line x1="1119" y1="168.0" x2="1048.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
</svg>

---

## Goal of the view

For each connected application:

- **Where do the SoD risks land in the business?** The breakdown by *Process* (P2P, O2C, R2R, HR…) maps the conflict map to a chart everyone understands.
- **How many users are exposed per risk?** The *Users* column is the headline number. Tracking its evolution quarter over quarter is the simplest SoD KPI.
- **When was the data last computed?** *Refresh date* tells whether the analysis is current. A stale refresh date undermines the value of the rest of the chart.

The dataset is summarised — only rows with `CFS_COUNT > 0` surface, sorted by *Application → Process → Risk*. The *Details* screen is the drill-down.

:::info[JDE-specific]
The conflicts are computed on the effective rights, which include the access paths of the composite pages and E1 pages for the applications flagged **E1 Composite** / **E1 Pages** in [Applications](../../settings/global/applications.md) — what their tiles open, the forms in their panes, the applications and reports an E1 page names. Switching a flag on or off changes the conflicts at the next collection.
:::

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `CFS_APPS_ID` — application identifier. | The connected application. |
| **Process ID** | `CFS_PROCESS_ID` — business process. Looked up against the *SoD Process* catalog. | The functional process the risk belongs to (P2P, O2C, R2R, HR…). |
| **Risk ID** | `CFS_RISK_ID` — incompatibility rule. Looked up against the *SoD Risks* catalog. | The named risk being measured. |
| **Count** | `CFS_COUNT` — number of users holding the incompatible combination. | How many people are in conflict on this row. The headline number. |
| **Refresh date** | `CFS_REFRESH` — date the row was computed. | Freshness of the analysis. |

---

## Context menu

Click the **···** button at the start of a row, or right-click the row, to open its menu.

| Action | Where it lands |
|---|---|
| **Display Users** | List of users in conflict for the selected `(Process, Risk)` pair. |
| **Display Roles** | Pairs of incompatible roles for the selected `(Process, Risk)` pair. |
| **Display Objects** | Source-system objects backing the conflict. |
| **Display Details** | Full *Conflicts → Details* set filtered on the selected `(Process, Risk)`. |

---

## Tips & best practices

- **Sort by *Users count* descending** to land on the highest-impact risk first. That is the row you discuss at the steering committee.
- **Group by *Process*** to see which business area carries the most SoD weight — often the data point a CFO or COO asks for.
- **Watch *Refresh date*** — a row that hasn't refreshed in weeks usually means the SoD job did not run. Trigger a re-scan.
- **Click into the *Details* screen** for the line-by-line backing data of a given row.
