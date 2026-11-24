---
title: SoD — Matrix
description: "Pairs of incompatible activities — the SoD matrix that defines which activity combinations trigger which risk."
keywords: [Nomasx-1, settings, SoD, matrix, incompatible activities, risk pairing]
---

# SoD — Matrix

The **Matrix** screen lists the pairs of activities that produce an SoD risk. One line per `(Application, Process, Activity 1, Activity 2)`. Each row maps the pair to a *Risk* and a *Risk level* — the **rules engine** behind every conflict the *Conflicts* views surface.

This is the most operationally important SoD setting: editing a row here changes what every conflict screen computes from the next refresh.

---

## At a glance

<svg viewBox="0 0 1320 342" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="262" rx="14" fill="url(#sdm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - Matrix (SOD)</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">149 rows · 12 ms</text>
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
  <text x="437" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID</text>
  <text x="527" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ACTIVITY 1 ID</text>
  <text x="667" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ACTIVITY 2 ID</text>
  <text x="807" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISK ID</text>
  <text x="897" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISK LEVEL</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="527" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create supplier</text>
  <text x="667" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Pay supplier</text>
  <text x="807" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PR01</text>
  <text x="897" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">High</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="527" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Enter voucher</text>
  <text x="667" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Approve voucher</text>
  <text x="807" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PR03</text>
  <text x="897" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Medium</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">O2C01</text>
  <text x="527" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create customer</text>
  <text x="667" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Post receipts</text>
  <text x="807" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">O2CR02</text>
  <text x="897" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">High</text>
  <text x="233" y="260" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="248" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="261" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–50 of 149</text>
  <text x="1087" y="261" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="298" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activity 1 × Activity 2</text>
  <text x="225.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the incompatible pair</text>
  <line x1="435.0" y1="298" x2="535" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdm-arrow)"/>
  <rect x="665.0" y="298" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Risk ID</text>
  <text x="675.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the risk the pair raises</text>
  <line x1="885.0" y1="298" x2="815" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdm-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Import</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">add or update from Excel</text>
  <line x1="197" y1="123.0" x2="258" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdm-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read-only grid</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no dialog on click</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdm-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the file to fill back</text>
  <line x1="1119" y1="134.0" x2="1048.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdm-arrow)"/>
</svg>

---

## Goal of the view

- **Encode the SoD rule book** — every pair declared here generates a row in *Conflicts → Details* whenever a user holds the two activities.
- **Tie each pair to a named risk.** The *Risk* column is what auditors read; the *Risk level* drives weighting.
- **Maintain symmetrically.** `(A, B)` and `(B, A)` mean the same thing — declare one and let the engine traverse both ways.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `MATRIX_APPS_ID` — application. | The application the rule applies to. |
| **Process ID** | `MATRIX_PROCESS_ID` — process. | The business process. |
| **Activity 1 ID** | `MATRIX_ACT1_ID` — links to *Activities*. | First incompatible action. |
| **Activity 2 ID** | `MATRIX_ACT2_ID` — links to *Activities*. | Second incompatible action. |
| **Risk ID** | `MATRIX_RISK_ID` — links to *Risks*. | The named risk the pair instantiates. |
| **Risk Level** | `MATRIX_RISK_LEVEL` — severity. | Multiplier applied to the conflicts produced. |

---

## Edit dialog \{#edit-dialog\}

**Add row** opens an empty form; a click on a row opens it, titled **Edit · Settings - Matrix (SOD)**, with **Delete**, **Duplicate**, **Cancel** and **Save**. **Bulk edit** changes several rows in the grid itself.

<svg viewBox="0 0 1320 428" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdmatd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdmatd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdmatd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdmatd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="388" rx="14" fill="url(#sdmatd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Settings - Matrix (SOD)</text>
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
  <text x="240" y="174" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY 1 ID</text>
  <rect x="240" y="180" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="195.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">OTC02 — Process sales orders</text>
  <rect x="240" y="180" width="840" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="none"/>
  <text x="240" y="220" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY 2 ID</text>
  <rect x="240" y="226" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="241.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">OTC05 — Process credit / debit notes</text>
  <rect x="240" y="226" width="840" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="none"/>
  <text x="240" y="266" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RISK ID</text>
  <rect x="240" y="272" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="287.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">OTCR05 — An individual can create…  ▾</text>
  <text x="240" y="312" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RISK LEVEL</text>
  <rect x="240" y="318" width="840" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="333.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">H</text>
  <line x1="220" y1="358" x2="1100" y2="358" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1033" y="372" width="47" height="22" rx="5" fill="url(#sdmatd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1056.5" y="386.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="968" y="372" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="996.5" y="386.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="887" y="372" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="923.5" y="386.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Duplicate</text>
  <rect x="822" y="372" width="57" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="850.5" y="386.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="20" y="74" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Keys</text>
  <text x="30" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read-only once saved</text>
  <line x1="200" y1="91.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdmatd-arrow)"/>
  <rect x="20" y="267" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="282" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Picked from a list</text>
  <text x="30" y="295" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the risks of the process</text>
  <line x1="200" y1="284.0" x2="240" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdmatd-arrow)"/>
  <rect x="1120" y="74" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lists by parent</text>
  <text x="1130" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtered on the fields above</text>
  <line x1="1120" y1="91.0" x2="1060" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdmatd-arrow)"/>
  <rect x="1120" y="338" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="353" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Delete · Duplicate</text>
  <text x="1130" y="366" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on a saved row</text>
  <line x1="1120" y1="355.0" x2="923.5" y2="383" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdmatd-arrow)"/>
</svg>

| Field | What to enter |
|---|---|
| **Application ID** | The application, picked from the list. |
| **Process ID** | The process, picked among those of the application. |
| **Activity 1 ID** · **Activity 2 ID** | The two incompatible activities, picked among those of the process. |
| **Risk ID** | The risk the pair carries, picked among the risks of the process. It can be changed on a saved rule. |
| **Risk Level** | Level of the rule. |

The keys — Application ID, Process ID and the two activities — are read-only once the row is saved: to change one, delete the row and add it again.

---

## Import from Excel \{#import\}

Many rows at once are added or changed with **Import**, from an Excel (`.xlsx`) or `.csv` file whose columns match the grid's — the easiest way is to **Export** the grid, edit the file and import it back.

<svg viewBox="0 0 1320 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdmi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdmi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdmi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdmi-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="300" y="20" width="720" height="266" rx="14" fill="url(#sdmi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <text x="660.0" y="174" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="ui-monospace, monospace">sod_matrix.xlsx · 149 rows</text>
  <text x="320" y="214" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">149 rows</text>
  <rect x="380" y="202" width="73" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="416.5" y="214.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ 149 valid</text>
  <line x1="300" y1="234" x2="1020" y2="234" stroke="#1f2937" strokeWidth="1"/>
  <rect x="870" y="246" width="130" height="24" rx="5" fill="url(#sdmi-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="935.0" y="261.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save 149 valid rows</text>
  <rect x="805" y="246" width="57" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="833.5" y="261.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="12" y="101" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="116" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Existing rows</text>
  <text x="22" y="129" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">update or insert · insert · update</text>
  <line x1="282" y1="118.0" x2="360" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdmi-arrow)"/>
  <rect x="12" y="143" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="158" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Drop the file</text>
  <text x="22" y="171" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">.xlsx or .csv, columns by name</text>
  <line x1="282" y1="160.0" x2="320" y2="159" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdmi-arrow)"/>
  <rect x="1034" y="203" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="218" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Check</text>
  <text x="1044" y="231" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rules and database, before saving</text>
  <line x1="1034" y1="220.0" x2="430" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdmi-arrow)"/>
  <rect x="1034" y="253" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="268" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save the valid rows</text>
  <text x="1044" y="281" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the invalid ones are skipped</text>
  <line x1="1034" y1="270.0" x2="935.0" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdmi-arrow)"/>
</svg>

1. Pick what happens to **Existing rows**: **Update or insert** (the default), **Insert only** or **Update only**.
2. Drop the file in the dialog, then click **Check**: every row is checked against the screen's rules and the database, and each invalid row is listed with the reason.
3. **Save N valid rows** writes the valid rows; the invalid ones are left out.

The file carries these columns:

| Column | What it holds |
|---|---|
| **Application ID** | Key — the application (its ID). |
| **Process ID** | Key — the process. |
| **Activity 1 ID** | Key — first activity of the pair. |
| **Activity 2 ID** | Key — second activity of the pair. |
| **Risk ID** | The risk the pair raises. |
| **Risk Level** | Level of the pair. |

---

## Tips & best practices

- **[What to fix](../../security-analysis.md#consistency) lists the rules that cannot work** — a risk or an activity missing.
- **Adding a row** generates new conflicts at the next SoD refresh — coordinate with the security administrator and HR.
- **Removing a row** clears existing conflicts at the next refresh. Document the rationale: an auditor reviewing the SoD framework will ask why.
- **Risk level here should match the *Risks* catalog level** — keeping the two in sync avoids confusing dashboard rendering.
- **A pair of activities with low business interaction** should not be a rule — keep the matrix to the conflicts that actually happen in practice.
