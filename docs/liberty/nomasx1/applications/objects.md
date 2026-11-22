---
title: Objects
description: "Nomasx-1 catalogue of the JD Edwards EnterpriseOne objects of a connected application — applications, reports, business functions, tables, views — with their system code and type."
keywords: [Nomasx-1, applications, objects, JD Edwards, object librarian, system code, object type]
---

# Objects

The **Objects** screen (*JD Edwards Objects* in its header) is the catalogue of the objects of a connected JD Edwards application: one line per object, with its description, its system code and its type — interactive application (`APPL`), report (`UBE`), business function (`BSFN`), table (`TBLE`), business view (`BSVW`)… Open it from **Applications → Objects**.

Every other Nomasx-1 screen names objects by their code; this one says what each code is, and under which system code it is counted for the licences.

---

## At a glance

<svg viewBox="0 0 1320 386" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="obj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="obj-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="obj-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="obj-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="306" rx="14" fill="url(#obj-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">JD Edwards Objects</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">68775 rows · 12 ms</text>
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
  <text x="339" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="353" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJECT (ID)</text>
  <text x="453" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJECT</text>
  <text x="663" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="883" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SYSTEM CODE</text>
  <text x="973" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJECT TYPE</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="339" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="353" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="453" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="663" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="883" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">01</text>
  <text x="973" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">APPL</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="339" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="353" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="453" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Invoice Print</text>
  <text x="663" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Invoice Print</text>
  <text x="883" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">42</text>
  <text x="973" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UBE</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="339" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="353" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">B0100016</text>
  <text x="453" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Validate Address Number</text>
  <text x="663" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Validate Address Number</text>
  <text x="883" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">01</text>
  <text x="973" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BSFN</text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="339" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="353" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="453" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book Master</text>
  <text x="663" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book Master</text>
  <text x="883" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">01</text>
  <text x="973" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">TBLE</text>
  <rect x="233" y="258" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="339" y="272.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="353" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">V0101A</text>
  <text x="453" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book View</text>
  <text x="663" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book View</text>
  <text x="883" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">01</text>
  <text x="973" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BSVW</text>
  <text x="233" y="304" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="292" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="305.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="305" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–50 of 68775</text>
  <text x="1087" y="305" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Object</text>
  <text x="225.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">code and name</text>
  <line x1="360.0" y1="342" x2="361" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#obj-arrow)"/>
  <rect x="515.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">System Code</text>
  <text x="525.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drives the licence component</text>
  <line x1="660.0" y1="342" x2="891" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#obj-arrow)"/>
  <rect x="815.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Object Type</text>
  <text x="825.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">APPL, UBE, BSFN, TBLE, BSVW…</text>
  <line x1="960.0" y1="342" x2="981" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#obj-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">any object, name or code</text>
  <line x1="197" y1="123.0" x2="273" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#obj-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters · Group</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">e.g. group by object type</text>
  <line x1="1119" y1="134.0" x2="822.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#obj-arrow)"/>
</svg>

---

## Goal of the view

- **Name an object.** A code met in *Menus*, *Rights* or *OUT* — `P0411`, `R42565` — is found here with its description.
- **See where it is counted.** The *System Code* drives the licence component of the object (*Settings → Licenses → JD Edwards → System Code*).
- **Measure the catalogue.** Grouped by *Object Type*, the grid gives the number of applications, reports and functions of the installation.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `JDEO_APPS_ID` — application identifier. | The connected application. |
| **Object** | `JDEO_OBJECT` — object code, with its name. | The JD Edwards object. |
| **Description** | `JDEO_DESCRIPTION` — text. | What the object is. |
| **System Code** | `JDEO_SY` — two-character code. | The system code the object is counted under. |
| **Object Type** | `JDEO_TYPE` — `APPL`, `UBE`, `BSFN`, `TBLE`, `BSVW`, `DSTR`… | Kind of object. |

The grid is read-only. It has no row menu: **Search**, **Filters**, **Group** and **Export** are the tools.

:::info[JDE-specific]
The catalogue is copied from the Object Librarian (F9860) of the application at each security collection (*Jobs → Collect security and SoD*). The system code of an object is then replaced by the one set on *Settings → Licenses → JD Edwards → Reclassification* when the object is listed there.
:::

---

## Tips & best practices

- **Search before filtering.** The search box looks in every visible column — a word of the description finds the object as well as its code.
- **Group by *System Code*** to see which modules carry the most objects, then check the licence component of each code.
- **Reclassify rather than edit.** An object counted under the wrong system code is moved on *Reclassification*; the next collection applies it.
