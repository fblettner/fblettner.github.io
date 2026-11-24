---
title: Oracle Options
description: "Catalog of Oracle database options recognised by Nomasx-1 and the licence component each one falls under."
keywords: [Nomasx-1, settings, Oracle, options, packs, licence component]
---

# Oracle Options

The **Options** screen catalogs every Oracle database option Nomasx-1 recognises — partitioning, advanced compression, advanced security, …. One line per `(Component, Option)`. Each row classifies the option under a licence component that is then matched against the contract.

The data feeds the *Database → Oracle* and *Licenses → Oracle* screens: an option installed without a subscription appears as a compliance gap.

---

## At a glance

<svg viewBox="0 0 1320 324" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="goo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="goo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="goo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="goo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="244" rx="14" fill="url(#goo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="238" y="38" width="16" height="16" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <line x1="238" y1="44" x2="254" y2="44" stroke="#4a9eff" strokeWidth="1"/>
  <text x="264" y="51" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - Oracle Options</text>
  <line x1="220" y1="68" x2="1100" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="90" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">24 rows · 7 ms</text>
  <rect x="238" y="102" width="69" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="272.5" y="116.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="313" y="102" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="353.0" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Bulk edit</text>
  <rect x="399" y="102" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="431.0" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪ Import</text>
  <rect x="469" y="102" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="479" y="116.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="605" y="102" width="48" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="629.0" y="116.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="737" y="102" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="765.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="800" y="102" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="833.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="873" y="102" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="901.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="936" y="102" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="969.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="102" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.5" y="116.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="238" y="136" width="844" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OPTION ID</text>
  <text x="468" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">COMPONENT ID (ID)</text>
  <text x="478" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPONENT ID</text>
  <text x="728" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OPTION</text>
  <rect x="238" y="162" width="844" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="248" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">1</text>
  <text x="468" y="176.5" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">2104</text>
  <text x="478" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Partitioning</text>
  <text x="728" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Partitioning</text>
  <rect x="238" y="184" width="844" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="248" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2</text>
  <text x="468" y="198.5" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">2106</text>
  <text x="478" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Advanced Compression</text>
  <text x="728" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <rect x="238" y="206" width="844" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="248" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">3</text>
  <text x="468" y="220.5" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">2101</text>
  <text x="478" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Real Application Clusters</text>
  <text x="728" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Real Application Clusters</text>
  <text x="238" y="252" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens an empty form</text>
  <line x1="200" y1="113.0" x2="238" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#goo-arrow)"/>
  <rect x="20" y="44" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="59" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Import</text>
  <text x="30" y="72" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rows from an Excel file</text>
  <line x1="200" y1="61.0" x2="431.0" y2="102" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#goo-arrow)"/>
  <rect x="20" y="193" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="208" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="30" y="221" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the form</text>
  <line x1="200" y1="210.0" x2="238" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#goo-arrow)"/>
  <rect x="1120" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1130" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the file to fill and import back</text>
  <line x1="1120" y1="113.0" x2="1065.5" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#goo-arrow)"/>
  <rect x="220" y="278" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="230" y="293" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Option ID</text>
  <text x="230" y="306" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">numbered by itself when empty</text>
  <line x1="330.0" y1="278" x2="268" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#goo-arrow)"/>
  <rect x="638" y="278" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="648" y="293" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Option</text>
  <text x="648" y="306" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as the database names it</text>
  <line x1="748.0" y1="278" x2="748" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#goo-arrow)"/>
</svg>

---

## Goal of the view

- **Map each Oracle option** to its Nomasx-1 licence component.
- **Trigger compliance checks.** An option detected in *Database → Oracle* without a matching subscription becomes a non-compliant row.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Option ID** | `OPT_ID` — internal identifier. | Numeric key. |
| **Component ID (ID)** · **Component ID** | `OPT_CPT_ID` — links to *Pricing → Components*. | The component the option maps to, by number and name. |
| **Option** | `OPT_OPTION` — option name. | The Oracle option label as exposed by the database. |

---

## Edit dialog \{#edit\}

The grid is writable. **Add row** opens an empty form; a click on a row opens it; **Bulk edit** changes the rows in place, in the grid. The form, **Edit · Settings - Oracle Options** (**New · Settings - Oracle Options** on a new row), carries **Delete**, **Duplicate**, **Cancel** and **Save**; a new row has **Cancel** and **Save** only.

<svg viewBox="0 0 1200 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="soo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="soo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="soo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="soo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="246" rx="14" fill="url(#soo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Settings - Oracle Options</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="82" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPTION ID</text>
  <rect x="240" y="88" width="720" height="24" rx="5" fill="#111827" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="104" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPONENT ID</text>
  <rect x="240" y="134" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">2104  Partitioning</text>
  <text x="948" y="149" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <text x="240" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPTION</text>
  <rect x="240" y="180" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="194.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Partitioning</text>
  <line x1="220" y1="220" x2="980" y2="220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="916" y="232" width="44" height="22" rx="5" fill="url(#soo-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="938.0" y="246.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="853" y="232" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="880.5" y="246.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="773" y="232" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.0" y="246.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Duplicate</text>
  <rect x="710" y="232" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="737.5" y="246.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="20" y="83" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="98" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Numbered by itself</text>
  <text x="30" y="111" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">left empty: next number</text>
  <line x1="200" y1="100.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#soo-arrow)"/>
  <rect x="1000" y="129" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="144" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Picked by name</text>
  <text x="1010" y="157" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the list of components</text>
  <line x1="1000" y1="146.0" x2="960" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#soo-arrow)"/>
  <rect x="20" y="226" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="241" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Delete · Duplicate</text>
  <text x="30" y="254" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on a saved row</text>
  <line x1="200" y1="243.0" x2="710" y2="243" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#soo-arrow)"/>
</svg>

| Field | What to enter |
|---|---|
| **Option ID** | Read-only. Left empty on a new line: the line takes the next number. |
| **Component ID** | Picked from the licence components, by name. |
| **Option** | The option, as the database names it. |

### Import from Excel \{#import\}

**Import** loads rows from an Excel (`.xlsx`) or `.csv` file whose columns match the grid's — **Export** the grid, edit the file and import it back. **Existing rows** says what to do with a row whose key is already there: **Update or insert** (the default: rows found are updated, the others added), **Insert only** or **Update only**.

<svg viewBox="0 0 1320 296" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ioo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ioo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ioo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ioo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="300" y="20" width="720" height="258" rx="14" fill="url(#ioo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="320" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Import from Excel</text>
  <line x1="300" y1="66" x2="1020" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="320" y="88" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Existing rows</text>
  <rect x="320" y="98" width="109" height="22" rx="11" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="374.5" y="113" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Update or insert</text>
  <rect x="437" y="98" width="82" height="22" rx="11" fill="transparent" stroke="#475569" strokeWidth="1"/>
  <text x="478.0" y="113" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Insert only</text>
  <rect x="527" y="98" width="82" height="22" rx="11" fill="transparent" stroke="#475569" strokeWidth="1"/>
  <text x="568.0" y="113" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Update only</text>
  <rect x="320" y="132" width="680" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#475569" strokeWidth="1" strokeDasharray="5 4"/>
  <text x="660.0" y="154" fill="#94a3b8" fontSize="14" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪</text>
  <text x="660.0" y="174" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="ui-monospace, monospace">options.xlsx · 24 rows</text>
  <text x="320" y="210" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">24 rows</text>
  <rect x="380" y="198" width="68" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="414.0" y="210.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ 24 valid</text>
  <line x1="300" y1="228" x2="1020" y2="228" stroke="#1f2937" strokeWidth="1"/>
  <rect x="874" y="240" width="126" height="24" rx="5" fill="url(#ioo-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="937.0" y="255.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save 24 valid rows</text>
  <rect x="811" y="240" width="55" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.5" y="255.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="12" y="80" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Existing rows</text>
  <text x="22" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">update or insert, insert only, update only</text>
  <line x1="282" y1="97.0" x2="320" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ioo-arrow)"/>
  <rect x="12" y="142" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="157" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Drop the file</text>
  <text x="22" y="170" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">.xlsx or .csv, columns by name</text>
  <line x1="282" y1="159.0" x2="320" y2="159" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ioo-arrow)"/>
  <rect x="1034" y="190" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Check</text>
  <text x="1044" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rules and database, before saving</text>
  <line x1="1034" y1="207.0" x2="460" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ioo-arrow)"/>
  <rect x="1034" y="240" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save the valid rows</text>
  <text x="1044" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the invalid ones are skipped</text>
  <line x1="1034" y1="257.0" x2="1000" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ioo-arrow)"/>
</svg>

1. Drop the file in the dialog, then click **Check**: every row is checked against the screen's rules and the database, and each invalid row is listed with the reason.
2. **Save N valid rows** writes the valid rows; the invalid ones are left out.

The file carries these columns:

| Column | What it holds |
|---|---|
| **Option ID** | Key — number of the line; empty: the next number. |
| **Component ID** | Licence component it maps to. |
| **Option** | Name of the option. |

---

## Tips & best practices

- **Keep the option list in sync with the Oracle technical price book** — Oracle occasionally renames options between releases.
- **Heavy options** (Advanced Compression, Active Data Guard, Multitenant) deserve their own row even when bundled into a broader package — the visibility is what makes the audit defensible.
