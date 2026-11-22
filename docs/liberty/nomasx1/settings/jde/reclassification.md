---
title: Reclassification
description: "Override of the JDE object → SY mapping when the default classification is wrong or missing."
keywords: [Nomasx-1, settings, JDE, reclassification, object override, system code]
---

# Reclassification

The **Reclassification** screen overrides the default System Code that Nomasx-1 would otherwise apply to a JDE object. One line per object. Useful when the default SY of a program does not match its actual licence relevance — typically when a program is *technically* in `H9` but *commercially* in `Financials`.

Each row says: *for this object, use this `SY` instead of the default one*. The change propagates to every OUT view and licence report that resolves through *System Code*.

---

## At a glance

<svg viewBox="0 0 1320 342" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jrc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jrc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jrc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jrc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="262" rx="14" fill="url(#jrc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - Reclassification (JDE)</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">192 rows · 12 ms</text>
  <rect x="989" y="84" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="85" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="89" x2="1038" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="112" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="311" y="112" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="352.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Bulk edit</text>
  <rect x="400" y="112" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="433.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪ Import</text>
  <rect x="472" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="482" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="628" y="112" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="653.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
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
  <text x="243" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJECT</text>
  <text x="353" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="613" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SYSTEM CODE (ID)</text>
  <text x="723" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SYSTEM CODE</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F00092</text>
  <text x="353" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Supplemental Data</text>
  <text x="613" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00</text>
  <text x="723" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Foundation Environment</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0092</text>
  <text x="353" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">User Profiles</text>
  <text x="613" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00</text>
  <text x="723" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Foundation Environment</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="353" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Invoice Print</text>
  <text x="613" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">42</text>
  <text x="723" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Sales Management</text>
  <text x="233" y="260" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="248" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="261" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–50 of 192</text>
  <text x="1087" y="261" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="298" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Object</text>
  <text x="225.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the object moved</text>
  <line x1="435.0" y1="298" x2="251" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
  <rect x="665.0" y="298" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">System Code</text>
  <text x="675.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">counted under this code</text>
  <line x1="885.0" y1="298" x2="731" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">move one object</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
  <rect x="12" y="148" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="163" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Import</text>
  <text x="22" y="176" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a list from Excel</text>
  <line x1="197" y1="165.0" x2="425" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
  <rect x="12" y="190" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="22" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the edit dialog</text>
  <line x1="197" y1="207.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to Excel</text>
  <line x1="1119" y1="134.0" x2="1048.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
</svg>

---

## Goal of the view

- **Override the SY** when JDE's own classification does not reflect the contractual reality.
- **Keep the override list short.** Every entry is an exception — too many overrides make the licence model hard to defend in audit.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Object** | `JDES_OBJECT` — technical object. | The program being reclassified. |
| **Description** | `JDES_DESCRIPTION` — friendly label. | What the program does. |
| **System Code** | `JDES_SY` — System Code. | The SY Nomasx-1 should use instead of the JDE default. |

---

## Edit dialog

Click **Add row** to move a new object to another system code, or click a row to open it. **Import** loads a list from an Excel or `.csv` file. The dialog, **Edit · Settings - Reclassification (JDE)**, is a single form with **Delete**, **Duplicate**, **Cancel** and **Save**.

<svg viewBox="0 0 1320 353" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jrd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jrd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jrd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jrd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="272" rx="14" fill="url(#jrd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Settings - Reclassification (JDE)</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <rect x="235.0" y="98" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">R42565</text>
  <text x="235.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="235.0" y="144" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="158.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Invoice Print</text>
  <text x="235.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SYSTEM CODE</text>
  <rect x="235.0" y="190" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="204.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">42  Sales Management</text>
  <text x="1075.0" y="205" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <line x1="215" y1="238" x2="1105" y2="238" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1028" y="252" width="57" height="24" rx="5" fill="url(#jrd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1056.5" y="267.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Save</text>
  <rect x="952" y="252" width="68" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.0" y="267.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="859" y="252" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="901.5" y="267.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <rect x="794" y="252" width="57" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="822.5" y="267.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="12" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Object</text>
  <text x="22" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a JDE object name</text>
  <line x1="197" y1="109.0" x2="233.0" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrd-arrow)"/>
  <rect x="12" y="184" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="199" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">System Code</text>
  <text x="22" y="212" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked from the list</text>
  <line x1="197" y1="201.0" x2="233.0" y2="201" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrd-arrow)"/>
  <rect x="1119" y="259" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="274" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Delete</text>
  <text x="1129" y="287" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">back to its own code</text>
  <line x1="1119" y1="276.0" x2="822.5" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrd-arrow)"/>
  <rect x="1119" y="301" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="316" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1129" y="329" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">next collection uses it</text>
  <line x1="1119" y1="318.0" x2="1056.5" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrd-arrow)"/>
</svg>

| Field | What to enter |
|---|---|
| **Object** | JDE object name (e.g. `P0411Z1`). Read-only on a saved line: to reclassify another object, add a line. |
| **Description** | Friendly label of what the program does. |
| **System Code** | Picked from the list of system codes. The value Nomasx-1 uses instead of the object's own. |

---

## Tips & best practices

- **Document the rationale** of each override — a one-line description that a future auditor can read.
- **Re-validate the list after an Oracle upgrade.** JDE sometimes moves an object between system codes, retroactively making an override redundant.
- **Avoid systemic overrides** — if more than a handful of objects from the same module need reclassification, consider revisiting the mapping in *System Code* instead.
