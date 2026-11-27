---
title: Metrics
description: "Catalog of licensing metrics — Application User, Named User Plus, Processor, Employee, etc."
keywords: [Nomasx-1, settings, metrics, licensing metric, NUP, Application User, Processor]
---

# Metrics

The **Metrics** screen is the short list of licensing metrics Nomasx-1 supports. One line per metric. Each row carries the metric identifier (referenced by the lines of the [contracts](../../licenses/csi.md) and by [Pricing](./pricing.md)) and its Oracle name.

The metric defines *how* a component is counted — by named user, by processor, by employee, by application user…. Changing a metric on a contract changes how compliance is computed.

---

## At a glance

<svg viewBox="0 0 1320 346" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="gmt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="gmt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="gmt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="gmt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="266" rx="14" fill="url(#gmt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="238" y="38" width="16" height="16" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <line x1="238" y1="44" x2="254" y2="44" stroke="#4a9eff" strokeWidth="1"/>
  <text x="264" y="51" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - Licenses Metrics</text>
  <line x1="220" y1="68" x2="1100" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="90" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">8 rows · 6 ms</text>
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
  <text x="378" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">METRIC ID (ID)</text>
  <text x="388" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">METRIC ID</text>
  <text x="588" y="151.5" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">METRIC</text>
  <rect x="238" y="162" width="844" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="378" y="176.5" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">10</text>
  <text x="388" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Application User</text>
  <text x="588" y="176.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Application User</text>
  <rect x="238" y="184" width="844" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="378" y="198.5" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">20</text>
  <text x="388" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Processor</text>
  <text x="588" y="198.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Processor</text>
  <rect x="238" y="206" width="844" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="378" y="220.5" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">40</text>
  <text x="388" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Named User Plus</text>
  <text x="588" y="220.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Named User Plus</text>
  <rect x="238" y="228" width="844" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="378" y="242.5" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">80</text>
  <text x="388" y="242.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Enterprise $M</text>
  <text x="588" y="242.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Enterprise $M</text>
  <text x="238" y="274" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens an empty form</text>
  <line x1="200" y1="113.0" x2="238" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gmt-arrow)"/>
  <rect x="20" y="44" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="59" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Import</text>
  <text x="30" y="72" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rows from an Excel file</text>
  <line x1="200" y1="61.0" x2="431.0" y2="102" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gmt-arrow)"/>
  <rect x="20" y="193" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="208" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="30" y="221" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the form</text>
  <line x1="200" y1="210.0" x2="238" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gmt-arrow)"/>
  <rect x="1120" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1130" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the file to fill and import back</text>
  <line x1="1120" y1="113.0" x2="1065.5" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gmt-arrow)"/>
  <rect x="248" y="300" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="258" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Metric ID</text>
  <text x="258" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the number a contract line names</text>
  <line x1="358.0" y1="300" x2="358" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gmt-arrow)"/>
  <rect x="498" y="300" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="508" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Metric</text>
  <text x="508" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">how the line is counted</text>
  <line x1="608.0" y1="300" x2="608" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#gmt-arrow)"/>
</svg>

---

## Goal of the view

- **Declare the licensing metrics** the contracts use. Each metric is referenced by the lines of the contracts and by *Pricing*.
- **Short by design.** Most contracts use a handful: *Application User*, *Named User Plus*, *Processor*, *Employee*, *Enterprise $M*.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Metric ID (ID)** · **Metric ID** | `MET_ID` — identifier, and its name. | The number a contract line and a price name. |
| **Metric** | `MET_DESCRIPTION` — friendly label. | Oracle name of the metric (`Application User`, `Named User Plus`, `Processor`, `Enterprise $M`…). |

---

## Edit dialog \{#edit\}

The grid is writable. **Add row** opens an empty form; a click on a row opens it; **Bulk edit** changes the rows in place, in the grid. The form, **Edit · Settings - Licenses Metrics** (**New · Settings - Licenses Metrics** on a new row), carries **Delete**, **Duplicate**, **Cancel** and **Save**; a new row has **Cancel** and **Save** only.

<svg viewBox="0 0 1200 234" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="spm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="spm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="spm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="spm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="200" rx="14" fill="url(#spm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Settings - Licenses Metrics</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="82" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">METRIC ID</text>
  <rect x="240" y="88" width="720" height="24" rx="5" fill="#111827" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="104" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">10 — Application User</text>
  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">METRIC</text>
  <rect x="240" y="134" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Application User</text>
  <line x1="220" y1="174" x2="980" y2="174" stroke="#1f2937" strokeWidth="1"/>
  <rect x="916" y="186" width="44" height="22" rx="5" fill="url(#spm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="938.0" y="200.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="853" y="186" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="880.5" y="200.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="773" y="186" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.0" y="200.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Duplicate</text>
  <rect x="710" y="186" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="737.5" y="200.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="20" y="83" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="98" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Key</text>
  <text x="30" y="111" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read-only once saved</text>
  <line x1="200" y1="100.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#spm-arrow)"/>
  <rect x="1000" y="129" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="144" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Metric</text>
  <text x="1010" y="157" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">how a line is counted</text>
  <line x1="1000" y1="146.0" x2="960" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#spm-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Delete · Duplicate</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on a saved row</text>
  <line x1="200" y1="197.0" x2="710" y2="197" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#spm-arrow)"/>
</svg>

| Field | What to enter |
|---|---|
| **Metric ID** | The number of the metric, typed when the row is added — any number not yet used, so a new metric can be created. Read-only on a saved row. |
| **Metric** | The Oracle name of the metric. |


The [Licensing review](../../licensing-review.md) counts a line after its metric number: 10 *Application User* and 40 *Named User Plus* in people (a count on a technology product), 20 *Processor*, 30 *Employee*, 80 *Enterprise $M*; any other metric is not counted (see [How a contract is counted](../../how-a-contract-is-counted.md#lines)). A metric added here is therefore listed, never compared.

### Import from Excel \{#import\}

**Import** loads rows from an Excel (`.xlsx`) or `.csv` file whose columns match the grid's — **Export** the grid, edit the file and import it back. **Existing rows** says what to do with a row whose key is already there: **Update or insert** (the default: rows found are updated, the others added), **Insert only** or **Update only**.

<svg viewBox="0 0 1320 296" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="imt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="imt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="imt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="imt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="300" y="20" width="720" height="258" rx="14" fill="url(#imt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <text x="660.0" y="174" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="ui-monospace, monospace">metrics.xlsx · 8 rows</text>
  <text x="320" y="210" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">8 rows</text>
  <rect x="380" y="198" width="63" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="411.5" y="210.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ 8 valid</text>
  <line x1="300" y1="228" x2="1020" y2="228" stroke="#1f2937" strokeWidth="1"/>
  <rect x="879" y="240" width="121" height="24" rx="5" fill="url(#imt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="939.5" y="255.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save 8 valid rows</text>
  <rect x="816" y="240" width="55" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="843.5" y="255.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="12" y="80" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Existing rows</text>
  <text x="22" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">update or insert, insert only, update only</text>
  <line x1="282" y1="97.0" x2="320" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#imt-arrow)"/>
  <rect x="12" y="142" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="157" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Drop the file</text>
  <text x="22" y="170" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">.xlsx or .csv, columns by name</text>
  <line x1="282" y1="159.0" x2="320" y2="159" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#imt-arrow)"/>
  <rect x="1034" y="190" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Check</text>
  <text x="1044" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rules and database, before saving</text>
  <line x1="1034" y1="207.0" x2="460" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#imt-arrow)"/>
  <rect x="1034" y="240" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save the valid rows</text>
  <text x="1044" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the invalid ones are skipped</text>
  <line x1="1034" y1="257.0" x2="1000" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#imt-arrow)"/>
</svg>

1. Drop the file in the dialog, then click **Check**: every row is checked against the screen's rules and the database, and each invalid row is listed with the reason.
2. **Save N valid rows** writes the valid rows; the invalid ones are left out.

The file carries these columns:

| Column | What it holds |
|---|---|
| **Metric ID** | Key — the metric. |
| **Metric** | Name of the metric (Application User, Named User Plus, Processor, Employee…). |

---

## Tips & best practices

- **Keep the catalog minimal.** A handful of metrics is enough — invent more only when a contract actually requires it.
- **Always describe the metric** with the Oracle official label so the auditor can match it against the contract.
