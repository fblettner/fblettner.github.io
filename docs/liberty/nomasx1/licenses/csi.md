---
title: CSI
description: "Customer Support Identifier — list of the Oracle support contracts the connected applications are entitled to."
keywords: [Nomasx-1, licenses, CSI, Customer Support Identifier, Oracle, support contract, entitlement]
---

# CSI

The **CSI** screen lists every Oracle *Customer Support Identifier* declared in Nomasx-1. One line per contract. Each row carries the identifier, a friendly description, the contract validity dates and its current status.

The CSI is the contractual anchor: its lines — components alone and bundles —, the figures the customer declares and the users of other applications are what the [Licensing review](../licensing-review.md) reads, the way [How a contract is counted](../how-a-contract-is-counted.md) describes.

---

## At a glance

<svg viewBox="0 0 1320 342" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="csi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="csi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="csi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="csi-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="262" rx="14" fill="url(#csi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">License - Contracts</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 rows · 12 ms</text>
  <rect x="989" y="84" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="85" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="89" x2="1038" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="112" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="311" y="112" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="352.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Bulk edit</text>
  <rect x="400" y="112" width="128" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="534" y="112" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="559.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
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
  <text x="349" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">CSI NUMBER</text>
  <text x="363" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="663" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">FROM DATE</text>
  <text x="773" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TO DATE</text>
  <text x="883" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ENABLED (Y/N)</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="363" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME — JD Edwards support</text>
  <text x="663" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-01-01</text>
  <text x="773" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <circle cx="920.0" cy="181.0" r="3.2" fill="#4ade80"/>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000002</text>
  <text x="363" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME — Oracle Database support</text>
  <text x="663" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-01-01</text>
  <text x="773" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <circle cx="920.0" cy="203.0" r="3.2" fill="#4ade80"/>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000003</text>
  <text x="363" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Beta SARL — former contract</text>
  <text x="663" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2022-01-01</text>
  <text x="773" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2024-12-31</text>
  <circle cx="920.0" cy="225.0" r="3.2" fill="#f87171"/>
  <text x="233" y="260" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="248" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="261" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–3 of 3</text>
  <text x="1087" y="261" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="298" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">CSI Number</text>
  <text x="225.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Oracle support identifier</text>
  <line x1="360.0" y1="298" x2="341" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
  <rect x="515.0" y="298" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">From · To</text>
  <text x="525.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">contract period</text>
  <line x1="660.0" y1="298" x2="781" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
  <rect x="815.0" y="298" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enabled</text>
  <text x="825.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">counts in the reports</text>
  <line x1="960.0" y1="298" x2="891" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens an empty contract</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the contract</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to Excel</text>
  <line x1="1119" y1="134.0" x2="1048.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
</svg>

---

## Goal of the view

For each CSI under management:

- **Inventory the support contracts.** Every active CSI must be associated with at least one application — otherwise it is a contract for an application that has nothing left.
- **Track validity windows.** *From* / *To* dates drive the renewal calendar.
- **Say whether it counts.** *Enabled (Y/N)* is ticked while the contract is in force. A contract that ended stays on the list with the box cleared.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **CSI Number** | `CSI_ID` — numeric contract identifier. | The Oracle reference. |
| **Description** | `CSI_DESCRIPTION` — text. | Friendly label. |
| **From Date** | `CSI_FROM_DATE` — date. | Start of the support coverage. |
| **To Date** | `CSI_TO_DATE` — date. | End of the current support window. |
| **Enabled (Y/N)** | `CSI_STATUS` — `Y` / `N`, a green or red dot. | Whether the contract is still in force. |

Audit columns (`CSI_AUDIT_USER`, `CSI_AUDIT_DATE`) are hidden but tracked on the row.

---

## Edit dialog

Click **Add row** to register a new CSI, or click a row to open it. The dialog has seven tabs. Only *Contract Support* shows on a new contract — the six grids appear once the CSI is saved. Each grid has **Add row** and **Bulk edit**, and a click on one of its rows opens its own form (**Edit · License - Bundles**…). The footer carries **Delete**, **Duplicate**, **Cancel** and **Save**.

<svg viewBox="0 0 1320 382" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="csd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="csd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="csd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="csd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="90" width="880" height="274" rx="14" fill="url(#csd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="116" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · License - Contracts</text>
  <line x1="220" y1="130" x2="1100" y2="130" stroke="#1f2937" strokeWidth="1"/>
  <text x="292.664" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Contract Support</text>
  <text x="387.576" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Applications</text>
  <text x="466.8640000000001" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Components</text>
  <text x="533.1320000000001" y="154" fill="#e2e8f0" fontSize="9.3" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Bundles</text>
  <line x1="503.9040000000001" y1="162" x2="562.3600000000001" y2="162" stroke="#4a9eff" strokeWidth="2"/>
  <text x="617.6280000000002" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Bundle components</text>
  <text x="725.5600000000002" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Declared figures</text>
  <text x="859.5320000000002" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Users of other applications</text>
  <line x1="240" y1="163" x2="1080" y2="163" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="176" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="276.0" y="190.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="318" y="176" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="359.5" y="190.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Bulk edit</text>
  <rect x="407" y="176" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="417" y="190.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="240" y="210" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CSI NUMBER</text>
  <text x="360" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUNDLE</text>
  <text x="460" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="680" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">METRIC ID</text>
  <text x="840" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUANTITY</text>
  <text x="930" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPONENTS</text>
  <rect x="240" y="242" width="840" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="360" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DIST</text>
  <text x="460" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Distribution suite</text>
  <text x="680" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10 · Application User</text>
  <text x="840" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">25</text>
  <text x="930" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <rect x="240" y="272" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="360" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">INV-SALES</text>
  <text x="460" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Inventory and Sales</text>
  <text x="680" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10 · Application User</text>
  <text x="840" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">40</text>
  <text x="930" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <line x1="220" y1="316" x2="1100" y2="316" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1036" y="328" width="44" height="22" rx="5" fill="url(#csd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1058.0" y="342.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="973" y="328" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1000.5" y="342.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="893" y="328" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="929.0" y="342.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Duplicate</text>
  <rect x="830" y="328" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="857.5" y="342.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="160" y="8" width="205" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="170" y="23" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bundles</text>
  <text x="170" y="36" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a line counted once for its modules</text>
  <line x1="262.5" y1="42" x2="533.1320000000001" y2="144" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="377" y="8" width="205" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="387" y="23" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bundle components</text>
  <text x="387" y="36" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the modules of each bundle</text>
  <line x1="479.5" y1="42" x2="617.6280000000002" y2="144" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="594" y="8" width="205" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="604" y="23" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Declared figures</text>
  <text x="604" y="36" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">revenue, employees, dated</text>
  <line x1="696.5" y1="42" x2="725.5600000000002" y2="144" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="851" y="8" width="205" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="861" y="23" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Users of other applications</text>
  <text x="861" y="36" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">added to Named User Plus</text>
  <line x1="953.5" y1="42" x2="859.5320000000002" y2="144" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="1120" y="252" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="267" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Components</text>
  <text x="1130" y="280" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">how many modules it holds</text>
  <line x1="1120" y1="269.0" x2="940" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="20" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="30" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a bundle of this contract</text>
  <line x1="200" y1="193.0" x2="240" y2="187" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
</svg>

### Tab 1 — Contract Support

The contract identity.

| Field | What to enter |
|---|---|
| **CSI Number** | Numeric Oracle contract identifier. Read-only once the contract is saved. |
| **Description** | Friendly label for the contract. |
| **From Date** | Start of the support coverage (date picker). |
| **To Date** | End of the current support window. |
| **Enabled (Y/N)** | Ticked while the contract is in force, cleared once it ends. |

### Tab 2 — Applications

Grid linking the CSI to the applications it covers (*CSI Number*, *Application ID*, with the application's type and database, read-only: they come from [Applications](../settings/global/applications.md)). On a saved line, *CSI Number* and *Application ID* are read-only. Add one row per application with **Add row**: an entry here is what makes the contract count for that application in the [Licensing review](../licensing-review.md) and the [licence audit report](../reports/audit-licences.md). Hidden on **Add**.

### Tab 3 — Components

Grid listing the components licensed alone on the CSI: *Component ID*, *Metric ID* and *Quantity*, one row per component and metric. Each one is a line of the contract (see [How a contract is counted](../how-a-contract-is-counted.md#lines)). Hidden on **Add**.

### Tab 4 — Bundles \{#tab-bundles\}

The bundles of the contract: several modules sold as one line, where a user is counted once for all of them.

| Field | What to enter |
|---|---|
| **CSI Number** | The contract, filled in; read-only on a saved row. |
| **Bundle** | Required. A short code of the bundle on this contract (`DIST`, `INV-SALES`…). |
| **Description** | The name the pages show (*Distribution suite*). |
| **Metric ID** | Picked from the metrics: usually *Application User*. |
| **Quantity** | What was subscribed. |
| **Components** | Read-only: how many modules the bundle holds, from the next tab. |

A bundle with no component is listed on [Subscribed licences](./subscribed-licences.md) and said empty; it covers nothing.

### Tab 5 — Bundle components \{#tab-bundle-components\}

The modules of each bundle, one row per bundle and module: *CSI Number*, **Bundle** (picked from the bundles of this contract) and **Component ID** (picked from the components, by name). Both are required.

### Tab 6 — Declared figures \{#tab-declared\}

What the customer declares for the contract, dated: the latest date is the one the [Licensing review](../licensing-review.md#lines-other) reads.

| Field | What to enter |
|---|---|
| **Declared on** | Required. The date of the declaration. |
| **Revenue declared (millions)** | Compared with the lines in *Enterprise $M*. |
| **Employees declared** | Compared with the lines in *Employee*. Empty: the employees collected from JD Edwards are used. |
| **Comment** | Where the figure comes from (annual report, HR count…). |

### Tab 7 — Users of other applications \{#tab-other-users\}

The users of an application whose users cannot be collected — a reporting portal, a tool that signs in to the same database —, one row per application. They are added to the count of a database licensed per Named User Plus (see [Named User Plus on a database](../how-a-contract-is-counted.md#named)).

| Field | What to enter |
|---|---|
| **Application** | Required. The name of the application. |
| **Users** | Required. How many people use it. |
| **Counted on** | The date of the count. |
| **Comment** | How they were counted. |

---

## Tips & best practices

- **Sort by *To Date* ascending** to surface the next renewals — the budget-planning view.
- **Confirm every active CSI maps to at least one application** in [Subscribed licences](./subscribed-licences.md). An orphan CSI is a contract paid for an application that no longer uses it.
- **Ended contracts remain visible** for audit traceability — clear *Enabled* rather than deleting the row.
- **The screen is writable** — only the licence administrator should edit it. Each change is captured in the audit columns and surfaces in the *Audit Trail* if the underlying table is being audited.
