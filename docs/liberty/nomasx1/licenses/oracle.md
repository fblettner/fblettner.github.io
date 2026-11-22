---
title: Oracle
description: "Per-database list of Oracle licence options with a required / not required indicator — the inventory to compare with the licences actually subscribed."
keywords: [Nomasx-1, licenses, Oracle, required licences, compliance, Diagnostic Pack, Tuning Pack, Enterprise Edition Options]
---

# Oracle

The **Oracle** licence screen lists, for each connected Oracle database, every Oracle licence component checked by the Nomasx-1 collection scripts, together with a green / red indicator telling whether the component is **required** on the instance — that is, whether the collected usage matches what Oracle considers a licensable feature.

The aim of the page is to identify the licences the database *needs*, so you can compare them with what is actually subscribed in *Subscribed Licenses* and close the gap on either side — drop a licence that nothing uses, or purchase a licence that is being used without coverage.

---

## At a glance

<svg viewBox="0 0 1320 442" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lor-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lor-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lor-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lor-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="362" rx="14" fill="url(#lor-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">License - Required (ORACLE)</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Advanced filters</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">17 rows · 12 ms</text>
  <rect x="989" y="118" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="119" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="123" x2="1038" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="389" y="146" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="414.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="574" y="146" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="584" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="697" y="146" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="727.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="764" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="800.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="842" y="146" width="83" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="883.5" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group (1)</text>
  <rect x="931" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="243" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION NAME</text>
  <text x="423" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CATEGORY</text>
  <text x="673" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPONENT</text>
  <text x="923" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">REQUIRED LICENSE</text>
  <rect x="233" y="204" width="854" height="22" fill="rgba(74,158,255,0.05)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="218.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">⌄ 1 - JDE-PROD (17)</text>
  <rect x="233" y="226" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="423" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="673" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Diagnostics Pack</text>
  <circle cx="975.0" cy="237.0" r="3.2" fill="#f87171"/>
  <rect x="233" y="248" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="423" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="673" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Tuning Pack</text>
  <circle cx="975.0" cy="259.0" r="3.2" fill="#f87171"/>
  <rect x="233" y="270" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="423" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Database</text>
  <text x="673" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition</text>
  <circle cx="975.0" cy="281.0" r="3.2" fill="#4ade80"/>
  <rect x="233" y="292" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="423" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="673" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Partitioning</text>
  <circle cx="975.0" cy="303.0" r="3.2" fill="#4ade80"/>
  <rect x="233" y="314" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="423" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="673" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <circle cx="975.0" cy="325.0" r="3.2" fill="#f87171"/>
  <text x="233" y="360" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="348" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="361.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="361" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–17 of 17</text>
  <text x="1087" y="361" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Category</text>
  <text x="225.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">database, options, packs</text>
  <line x1="360.0" y1="398" x2="431" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lor-arrow)"/>
  <rect x="515.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Component</text>
  <text x="525.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">edition, option or pack</text>
  <line x1="660.0" y1="398" x2="681" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lor-arrow)"/>
  <rect x="815.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Required License</text>
  <text x="825.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">green = used, licence needed</text>
  <line x1="960.0" y1="398" x2="931" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lor-arrow)"/>
  <rect x="12" y="198.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="213.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouped by application</text>
  <text x="22" y="226.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one block per database</text>
  <line x1="197" y1="215.0" x2="247" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lor-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group (1)</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ungroup from here</text>
  <line x1="1119" y1="168.0" x2="883.5" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lor-arrow)"/>
</svg>

---

## Goal of the view

For each Oracle database:

- **What needs a licence, what doesn't.** Each row is a known Oracle licence component. A green dot in *Required* means the collection scripts detected usage on the instance — a licence is needed. A red dot means the component is installed but not in use, or not installed at all — no licence to declare.
- **Cover the whole catalogue.** The list includes the Enterprise Edition, the Database Enterprise Management packs (Diagnostics, Tuning), the Enterprise Edition options (Active Data Guard, Partitioning, Advanced Compression, Database In-Memory, RAC…) and the other Oracle products (Audit Vault, Spatial, …). Nothing is silently dropped.
- **One source for the compliance conversation.** The same data feeds the renewal discussion with Oracle and the procurement reconciliation — no parallel spreadsheet to maintain.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Category** | `CPT_CATEGORY` — licence family. | The Oracle catalogue family the component belongs to (Database, Enterprise Edition Options, Database Enterprise Management, Other Products…). |
| **Component** | `CPT_COMPONENT` — component name. | The licence option itself — *Enterprise Edition*, *Partitioning*, *Diagnostics Pack*, *Advanced Security*, … |
| **Required License** | `ORAL_USED` — `Y` / `N`. Displayed as a green / red dot. | Green: usage detected, the licence is needed on this database. Red: no usage detected, no licence to declare. |
| **Application Name** | `APPS_NAME` — application name. | The application that runs on the database. |

---

## Tips & best practices

- **Sort by *Required* descending** to bring all the green-dot lines to the top — the list to subscribe.
- **Group by *Category*** in the Group control to read the required components by Oracle catalogue family — the way the Oracle price book is structured.
- **Filter on `Component` containing "Pack"** to focus on the heavy management packs (Diagnostics, Tuning) — the most expensive lines in a typical Oracle bill.
- **Cross-reference with *Subscribed Licenses*** to check that every green-dot component is covered by an active CSI. A green dot with no subscription is the gap to close.
