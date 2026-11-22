---
title: Menus
description: "Application menu tree, level by level, with the JDE objects each leaf launches and the licence component they belong to."
keywords: [Nomasx-1, applications, menus, menu tree, JDE menus, licence component]
---

# Menus

The **Menus** screen lists every application menu entry known to Nomasx-1. One line per leaf — i.e. the action a user can actually launch from the source-system menu. Each row carries the full hierarchy of parent menus, the technical object the leaf invokes, and the licence component the object falls under.

The screen is what you open to *understand the navigation* of a connected application from a security perspective: what is reachable from where, under which licence weight.

---

## At a glance

<svg viewBox="0 0 1320 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="340" rx="14" fill="url(#mnu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security - Menus</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Advanced filters</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">4280 rows · 12 ms</text>
  <rect x="945" y="118" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="946" y="119" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="969.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="994" y1="123" x2="994" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1018.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <line x1="1043" y1="123" x2="1043" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1065.0" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Tree</text>
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
  <text x="459" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROOT</text>
  <text x="587" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJECT</text>
  <text x="659" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">FORM</text>
  <text x="731" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VERSION</text>
  <text x="897" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">COMPONENT ID (ID)</text>
  <text x="911" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPONENT ID</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="207" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="218.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">EnterpriseOne Menus</text>
  <text x="587" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="659" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W01012B</text>
  <text x="731" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="897" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1504</text>
  <text x="911" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sys…</text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="229" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="240.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">EnterpriseOne Menus</text>
  <text x="587" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="659" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="731" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="897" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1101</text>
  <text x="911" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Fin…</text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="251" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="262.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">EnterpriseOne Menus</text>
  <text x="587" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="659" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="731" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="897" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1007</text>
  <text x="911" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sal…</text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="273" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="284.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">EnterpriseOne Menus</text>
  <text x="587" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="659" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W4210E</text>
  <text x="731" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="897" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1007</text>
  <text x="911" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sal…</text>
  <rect x="233" y="292" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="295" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="306.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Accounts Payable Man…</text>
  <text x="587" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P04012</text>
  <text x="659" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W04012A</text>
  <text x="731" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="897" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1101</text>
  <text x="911" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Fin…</text>
  <text x="233" y="338" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="326" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="339.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="339" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–50 of 4280</text>
  <text x="1087" y="339" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="256" y="225.0" width="159" height="54" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="231.0" width="151" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="245.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users</text>
  <text x="405" y="245.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="267.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Roles</text>
  <text x="405" y="267.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="376" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="391" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Root, then Level 1…3</text>
  <text x="225.0" y="404" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where the entry sits in the menu</text>
  <line x1="360.0" y1="376" x2="467" y2="315.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="515.0" y="376" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="391" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Object · Form · Version</text>
  <text x="525.0" y="404" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what the entry launches</text>
  <line x1="660.0" y1="376" x2="595" y2="315.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="815.0" y="376" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="391" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Component</text>
  <text x="825.0" y="404" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">licence component of the object</text>
  <line x1="960.0" y1="376" x2="919" y2="315.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="12" y="79" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="94" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="22" y="107" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, root, object, component…</text>
  <line x1="197" y1="96.0" x2="233" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="12" y="198.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="213.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row actions (···)</text>
  <text x="22" y="226.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or right-click the row</text>
  <line x1="197" y1="215.0" x2="248" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="12" y="262.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="277.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Display Users / Display Roles</text>
  <text x="22" y="290.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">who can reach this menu entry</text>
  <line x1="197" y1="279.0" x2="276" y2="279.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="1119" y="121" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="136" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table · Chart · Tree</text>
  <text x="1129" y="149" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tree draws the menu hierarchy</text>
  <line x1="1119" y1="138.0" x2="1016.0" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="1119" y="163" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="178" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Views · Columns · Export</text>
  <text x="1129" y="191" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Level 4…10 hidden by default</text>
  <line x1="1119" y1="180.0" x2="1048.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
</svg>

---

## Goal of the view

For each menu leaf in a connected application, answer three questions:

- **What does the leaf launch?** Object, form and version — the three values the source system needs to open the screen.
- **Where does it live?** Root + up to 9 nested levels — the breadcrumb that explains *how* a user gets there.
- **What licence does it consume?** The component groups the underlying object into a billable bucket — see *Licenses → JD Edwards* for the volume rules.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `MENU_APPS_ID` — application identifier from the source system. Filterable. | Which application the menu belongs to. |
| **Root** | `MENU_ROOT` — top-level menu identifier (e.g. `G0911`). Filterable. | The role-level entry point. |
| **Object** | `MENU_OBJECT` — technical object launched (program, application, batch). Filterable. | What the leaf actually calls. |
| **Form** | `MENU_FORM` — form code within the object. | The specific form (interactive screen) within the program. |
| **Version** | `MENU_VERSION` — processing version. | Configuration variant used at runtime. |
| **Component ID** | `CPT_ID` — licence component the object falls under. Filterable. | The billable bucket — drives licence reporting. |
| **Menu ID** | `MENU_ID` — task identifier on the leaf. Filterable. | Source-system task code (e.g. JDE menu task ID). |
| **Level 1 … Level 3** | `MENU_LEVEL1`, `MENU_LEVEL2`, `MENU_LEVEL3` — nested labels. Level 1 is filterable. | First three depths of the breadcrumb. |
| **Level 4** | `MENU_LEVEL4` … `MENU_LEVEL10`. | Deeper levels — hidden by default but stored on the row for downstream screens. |

Hidden columns kept on the row: `MENU_SEQ_UKID` (stable sequence), `MENU_REFRESH` (last sync), `MENU_UKID` (technical id).

:::info[JDE-specific]
On JD Edwards EnterpriseOne, the menu tree is read directly from the JDE Solution Explorer tables. `Object`, `Form` and `Version` are the canonical JDE triplet to launch an interactive application or a batch UBE. The licence component is derived from the JDE System Code mapping (`SETTINGS_JDE_SY → SETTINGS_LIC_COMPONENTS`).
:::

---

## Context menu

Click the **···** button at the start of a row, or right-click the row, to open its menu.

| Action | Where it lands |
|---|---|
| **Display Users** | List of users that can reach the selected menu leaf, with their status, creation and login dates and the *Technical (Y/N)*, *Generic (Y/N)* and *Is Linked (Y/N)* flags of their properties. |
| **Display Roles** | List of roles that grant access to the selected menu leaf. |

---

## Tree view \{#tree\}

**Tree**, next to *Table* and *Chart*, draws the same rows as the menu hierarchy: each menu is a folder with its number of entries, each task shows its label and, in brackets, the object it launches. **Filter the tree…** keeps the nodes whose label matches, **Expand all** and **Collapse all** open or close every level, and the counter gives the nodes, the roots and the orphans — entries whose parent menu was not collected.

<svg viewBox="0 0 1320 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="358" rx="14" fill="url(#mnt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security - Menus</text>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">4280 rows · 12 ms</text>
  <rect x="897" y="84" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="921.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="946" y1="89" x2="946" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="970.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="996" y="85" width="42" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1017.0" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tree</text>
  <rect x="233" y="114" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="128.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Filter the tree…</text>
  <rect x="431" y="114" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="470.0" y="128.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Expand all</text>
  <rect x="515" y="114" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="559.5" y="128.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Collapse all</text>
  <text x="614" y="129" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1 260 nodes · 42 roots · 3 orphan(s)</text>
  <rect x="233" y="148" width="854" height="214" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="249" y="170" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="263" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▭</text>
  <text x="279" y="170" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">EnterpriseOne Menus ()</text>
  <text x="412.58000000000004" y="170" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(20)</text>
  <text x="249" y="195" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="263" y="195" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▭</text>
  <text x="279" y="195" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Accounts Payable Manager ()</text>
  <text x="442.03" y="195" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(8)</text>
  <text x="271" y="220" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="285" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▭</text>
  <text x="301" y="220" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Supplier Invoice Entry ()</text>
  <text x="452.25" y="220" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(4)</text>
  <text x="271" y="245" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif"> </text>
  <text x="285" y="245" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▤</text>
  <text x="301" y="245" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Supplier Ledger Inquiry (P0411)</text>
  <text x="271" y="270" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif"> </text>
  <text x="285" y="270" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▤</text>
  <text x="301" y="270" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Payment Approval (P0413M)</text>
  <text x="271" y="295" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif"> </text>
  <text x="285" y="295" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▤</text>
  <text x="301" y="295" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Print A/P Checks (R04572)</text>
  <text x="249" y="320" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="263" y="320" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▭</text>
  <text x="279" y="320" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Sales Order Manager ()</text>
  <text x="412.58000000000004" y="320" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(10)</text>
  <text x="249" y="345" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="263" y="345" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▭</text>
  <text x="279" y="345" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Warehouse Manager ()</text>
  <text x="400.8" y="345" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(8)</text>
  <rect x="12" y="119" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="134" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filter the tree</text>
  <text x="22" y="147" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by any part of a label</text>
  <line x1="197" y1="136.0" x2="275" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="12" y="173" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="188" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A menu (folder)</text>
  <text x="22" y="201" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with its number of entries</text>
  <line x1="197" y1="190.0" x2="279" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="12" y="223" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="238" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A task</text>
  <text x="22" y="251" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">label (object it launches)</text>
  <line x1="197" y1="240.0" x2="355" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="1119" y="87" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="102" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tree</text>
  <text x="1129" y="115" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">parent → child menu links</text>
  <line x1="1119" y1="104.0" x2="895" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="1119" y="129" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="144" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nodes · roots · orphans</text>
  <text x="1129" y="157" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">orphan = parent not collected</text>
  <line x1="1119" y1="146.0" x2="674" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
</svg>

:::info[JDE-specific]
The entries come from the task views ticked *Collect Security* on the application (*Settings → Global → Applications*, **Task Views** tab) and, depending on its JD Edwards settings, from the standard menus, the E1 pages and the composite pages. A composite page brings what its tiles open, the forms shown in its panes and the task of a task tile — for a landing page, every task under its menu. An E1 page brings the applications and reports its code calls or names. These entries feed the rights, the segregation of duties and the licence figures like any standard menu entry.
:::

---

## Tips & best practices

- **Filter by *Level 1*** to focus on a single business area (Accounts Payable, Sales Order Mgmt, etc.) before tackling its security review.
- **Filter by *Component*** to bring up every menu entry that consumes a specific licence — useful before re-negotiating module volumes.
- **Filter by *Object*** to find every place a given program is exposed in the menu tree. A program reachable from multiple roots may need different security rules per entry point.
- **Cross-reference with *Rights / Roles*** to confirm which roles grant access to each menu leaf.
