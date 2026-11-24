---
title: SoD — Activities
description: "Named activities within each business process — the atomic units the segregation-of-duties matrix combines."
keywords: [Nomasx-1, settings, SoD, activities, atomic actions, business process]
---

# SoD — Activities

The **Activities** screen lists the named activities within each business process. One line per `(Application, Process, Activity)`. An activity is the *atomic unit* of the SoD analysis — for example *Create vendor*, *Approve payment*, *Post journal entry*.

The *Matrix* combines pairs of activities to express incompatibilities. The *Objects* screen attaches each activity to the source-system programs that back it.

---

## At a glance

<svg viewBox="0 0 1320 364" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sda-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sda-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sda-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sda-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="284" rx="14" fill="url(#sda-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - Activities (SOD)</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">64 rows · 12 ms</text>
  <rect x="989" y="84" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="85" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="89" x2="1038" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="112" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="266.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪ Import</text>
  <rect x="305" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="315" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="461" y="112" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="486.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
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
  <text x="337" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="351" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="437" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID (ID)</text>
  <text x="537" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID</text>
  <text x="687" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ACTIVITY ID</text>
  <text x="787" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ACTIVITY</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="537" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Procure to Pay</text>
  <text x="687" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PA01</text>
  <text x="787" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create supplier</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="537" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Procure to Pay</text>
  <text x="687" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PA02</text>
  <text x="787" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Enter voucher</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="537" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Procure to Pay</text>
  <text x="687" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PA03</text>
  <text x="787" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Pay supplier</text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">O2C01</text>
  <text x="537" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Order to Cash</text>
  <text x="687" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">O2CA01</text>
  <text x="787" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create customer</text>
  <text x="233" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="270" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="283.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="283" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–50 of 64</text>
  <text x="1087" y="283" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="320" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Process</text>
  <text x="225.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the activity belongs to it</text>
  <line x1="435.0" y1="320" x2="545" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sda-arrow)"/>
  <rect x="665.0" y="320" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activity</text>
  <text x="675.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a business task</text>
  <line x1="885.0" y1="320" x2="795" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sda-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Import</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">add or update from Excel</text>
  <line x1="197" y1="123.0" x2="258" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sda-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read-only grid</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no dialog on click</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sda-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the file to fill back</text>
  <line x1="1119" y1="134.0" x2="1048.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sda-arrow)"/>
</svg>

---

## Goal of the view

- **Define the atomic actions** the SoD model reasons about.
- **Stable identifiers across audit cycles** — *Activity ID* feeds the matrix and the conflict reports.
- **One row per granular action.** Keep the activities tight: *Create vendor* and *Modify vendor* are different activities, not one combined entry.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `ACT_APPS_ID` — application. | The application the activity applies to. |
| **Process ID** | `ACT_PROCESS_ID` — links to *Process*. | The business process the activity belongs to. |
| **Activity ID** | `ACT_ID` — short identifier. | Reference used by *Matrix*, *Objects* and the *Conflicts* views. |
| **Activity** | `ACT_NAME` — friendly label. | Human-readable name. |

---

## Edit dialog \{#edit-dialog\}

**Add row** opens an empty form; a click on a row opens it, titled **Edit · Settings - Activities (SOD)**, with **Delete**, **Duplicate**, **Cancel** and **Save**. **Bulk edit** changes several rows in the grid itself.

<svg viewBox="0 0 1320 336" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdactd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdactd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdactd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdactd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="296" rx="14" fill="url(#sdactd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Settings - Activities (SOD)</text>
  <rect x="1054" y="34" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1066" y="49" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="82" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="240" y="88" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="103.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">1 — JDE-PROD</text>
  <rect x="240" y="88" width="840" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="none"/>
  <text x="240" y="128" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESS ID</text>
  <rect x="240" y="134" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="149.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">OTC001 — Order To Cash</text>
  <rect x="240" y="134" width="840" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="none"/>
  <text x="240" y="174" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY ID</text>
  <rect x="240" y="180" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="195.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">OTC02</text>
  <rect x="240" y="180" width="840" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="none"/>
  <text x="240" y="220" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY</text>
  <rect x="240" y="226" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="241.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Process sales orders</text>
  <line x1="220" y1="266" x2="1100" y2="266" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1033" y="280" width="47" height="22" rx="5" fill="url(#sdactd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1056.5" y="294.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="968" y="280" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="996.5" y="294.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="887" y="280" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="923.5" y="294.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Duplicate</text>
  <rect x="822" y="280" width="57" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="850.5" y="294.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="20" y="74" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Keys</text>
  <text x="30" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read-only once saved</text>
  <line x1="200" y1="91.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdactd-arrow)"/>
  <rect x="1120" y="74" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lists by parent</text>
  <text x="1130" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtered on the fields above</text>
  <line x1="1120" y1="91.0" x2="1060" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdactd-arrow)"/>
  <rect x="1120" y="246" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="261" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Delete · Duplicate</text>
  <text x="1130" y="274" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on a saved row</text>
  <line x1="1120" y1="263.0" x2="923.5" y2="291" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdactd-arrow)"/>
</svg>

| Field | What to enter |
|---|---|
| **Application ID** | The application, picked from the list. |
| **Process ID** | The process, picked among those of the application. |
| **Activity ID** | Short code of the activity (`OTC02`…), referenced by the matrix and the objects. |
| **Activity** | Name of the activity. |

The keys — Application ID, Process ID and Activity ID — are read-only once the row is saved: to change one, delete the row and add it again.

---

## Import from Excel \{#import\}

Many rows at once are added or changed with **Import**, from an Excel (`.xlsx`) or `.csv` file whose columns match the grid's — the easiest way is to **Export** the grid, edit the file and import it back.

<svg viewBox="0 0 1320 358" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdai-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdai-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdai-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="300" y="20" width="720" height="314" rx="14" fill="url(#sdai-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="320" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Import from Excel</text>
  <line x1="300" y1="66" x2="1020" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="320" y="88" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXISTING ROWS</text>
  <rect x="320" y="96" width="111" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="375.5" y="110.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Update or insert</text>
  <rect x="437" y="96" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="478.5" y="110.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Insert only</text>
  <rect x="526" y="96" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="567.5" y="110.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Update only</text>
  <rect x="320" y="130" width="680" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#475569" strokeWidth="1" strokeDasharray="5 4"/>
  <text x="660.0" y="154" fill="#94a3b8" fontSize="14" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪</text>
  <text x="660.0" y="174" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="ui-monospace, monospace">sod_activities.xlsx · 64 rows</text>
  <text x="320" y="214" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">64 rows</text>
  <rect x="380" y="202" width="68" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="414.0" y="214.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ 63 valid</text>
  <rect x="454" y="202" width="73" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="490.5" y="214.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ 1 invalid</text>
  <rect x="320" y="230" width="680" height="40" rx="6" fill="rgba(255,69,58,0.06)" stroke="rgba(255,69,58,0.35)" strokeWidth="1"/>
  <text x="332" y="245" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Row 12 · ACT_ID=P2PA12</text>
  <text x="988" y="245" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">insert</text>
  <text x="332" y="261" fill="#f87171" fontSize="9" fontFamily="system-ui, sans-serif">Process ID: not in the list of values</text>
  <line x1="300" y1="282" x2="1020" y2="282" stroke="#1f2937" strokeWidth="1"/>
  <rect x="876" y="294" width="124" height="24" rx="5" fill="url(#sdai-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="938.0" y="309.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save 63 valid rows</text>
  <rect x="811" y="294" width="57" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="839.5" y="309.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="12" y="101" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="116" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Existing rows</text>
  <text x="22" y="129" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">update or insert · insert · update</text>
  <line x1="282" y1="118.0" x2="360" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdai-arrow)"/>
  <rect x="12" y="143" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="158" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Drop the file</text>
  <text x="22" y="171" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">.xlsx or .csv, columns by name</text>
  <line x1="282" y1="160.0" x2="320" y2="159" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdai-arrow)"/>
  <rect x="1034" y="203" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="218" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Check</text>
  <text x="1044" y="231" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rules and database, before saving</text>
  <line x1="1034" y1="220.0" x2="430" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdai-arrow)"/>
  <rect x="1034" y="245" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="260" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Each invalid row</text>
  <text x="1044" y="273" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with the reason</text>
  <line x1="1034" y1="262.0" x2="1000" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdai-arrow)"/>
  <rect x="1034" y="301" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="316" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save the valid rows</text>
  <text x="1044" y="329" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the invalid ones are skipped</text>
  <line x1="1034" y1="318.0" x2="938.0" y2="318" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdai-arrow)"/>
</svg>

1. Pick what happens to **Existing rows**: **Update or insert** (the default), **Insert only** or **Update only**.
2. Drop the file in the dialog, then click **Check**: every row is checked against the screen's rules and the database, and each invalid row is listed with the reason.
3. **Save N valid rows** writes the valid rows; the invalid ones are left out.

The file carries these columns:

| Column | What it holds |
|---|---|
| **Application ID** | Key — the application (its ID). |
| **Process ID** | Key — the process the activity belongs to. |
| **Activity ID** | Key — short code of the activity. |
| **Activity** | Name of the activity. |

---

## Tips & best practices

- **Name from the business angle.** Use verbs (*Create*, *Modify*, *Approve*, *Post*) — easier to discuss with the business owners than technical names.
- **Keep activity names stable.** Renaming breaks the comparison between SoD reports across cycles.
- **Group activity definitions per process.** Activities that span two processes typically point to a misclassification of either the activity or the process.
