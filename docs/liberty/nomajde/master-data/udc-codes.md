---
title: UDC Code
description: "JD Edwards data → Master Data → UDC → UDC Code in Nomajde: the values of every JD Edwards EnterpriseOne User Defined Code type (F0005) in one searchable grid — code, descriptions, special handling, hard-coded flag — with advanced filters and Excel export."
keywords: [Nomajde, UDC, User Defined Codes, JD Edwards, F0005, master data, code values]
---

# UDC Code

**JD Edwards data → Master Data → UDC → UDC Code** lists the values of the JD Edwards UDC types (F0005): the codes the JD Edwards forms check against, one row per product code, UDC type and code.

---

## At a glance

<svg viewBox="0 0 1200 296" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="udcc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="udcc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="udcc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="udcc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="272" rx="14" fill="url(#udcc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">User Defined Code</text>
  <rect x="240" y="60" width="720" height="22" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="75" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">› Advanced filters</text>
  <text x="240" y="100" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">56,727 rows · 1,050 ms</text>
  <rect x="240" y="108" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="122.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="396" y="108" width="47" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="419.5" y="122.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="900" y="108" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="930.0" y="122.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="840" y="108" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="122.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="790" y="108" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="812.5" y="122.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="730" y="108" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="757.5" y="122.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="680" y="108" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="702.5" y="122.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="140" width="720" height="116" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="140" width="720" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="155.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">PRODUCT CODE (ID)</text>
  <text x="360" y="155.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">PRODUCT CODE</text>
  <text x="500" y="155.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">USER DEFINED CODES (ID)</text>
  <text x="650" y="155.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">USER DEFINED CODES</text>
  <text x="770" y="155.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">USER DEFINED CODE</text>
  <text x="890" y="155.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="250" y="178.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">01</text>
  <text x="360" y="178.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="500" y="178.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ST</text>
  <text x="650" y="178.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Search Type</text>
  <text x="770" y="178.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">C</text>
  <text x="890" y="178.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Customers</text>
  <line x1="241" y1="186" x2="959" y2="186" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">01</text>
  <text x="360" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="500" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ST</text>
  <text x="650" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Search Type</text>
  <text x="770" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">E</text>
  <text x="890" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Employees</text>
  <line x1="241" y1="208" x2="959" y2="208" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="222.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">01</text>
  <text x="360" y="222.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="500" y="222.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ST</text>
  <text x="650" y="222.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Search Type</text>
  <text x="770" y="222.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">V</text>
  <text x="890" y="222.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Suppliers</text>
  <line x1="241" y1="230" x2="959" y2="230" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="244.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">00</text>
  <text x="360" y="244.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Foundation Environment</text>
  <text x="500" y="244.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">CN</text>
  <text x="650" y="244.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Country Codes</text>
  <text x="770" y="244.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">FR</text>
  <text x="890" y="244.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">France</text>
  <line x1="241" y1="252" x2="959" y2="252" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="272" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Rows per page 50 · Showing 1–50 of …</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">product code, type…, then Run</text>
  <line x1="200" y1="77.0" x2="250" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udcc-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code and its label</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">(ID) = the stored value</text>
  <line x1="200" y1="187.0" x2="250" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udcc-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Excel of the rows shown</text>
  <line x1="1000" y1="117.0" x2="940" y2="119" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udcc-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read-only list</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no add, no edit here</text>
  <line x1="1000" y1="217.0" x2="920" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udcc-arrow)"/>
</svg>

---

## The grid \{#grid\}

The screen is a read-only list: every value of every type on one grid, with search, sort, filters and export — where the JD Edwards form shows one type at a time. A value is added or changed in JD Edwards.

| Column | Source | Content |
|---|---|---|
| **Product code (ID)**, **Product code** | `DRSY` | The system code of the type, and its name. |
| **User defined codes (ID)**, **User defined codes** | `DRRT` | The UDC type, and its title. |
| **User defined code** | `DRKY` | The code itself. |
| **Description**, second description | `DRDL01`, `DRDL02` | The short label shown in the forms and lookups, and the second line. |
| Special handling | `DRSPHD` | A value some JD Edwards programs branch on. |
| Hard coded | `DRHRDC` | `Y` when JD Edwards programs test the value in their code. |
| Date updated | `DRUPMJ` | When the value was last changed. |

---

## Tips & best practices \{#tips\}

- Filter on **Product code** and **User defined codes** in the advanced filters before **Run**: the table holds tens of thousands of rows.
- A value marked hard coded is tested by JD Edwards' own programs: it is changed with care, in JD Edwards.
- **Export** gives the values as an Excel file — handy to compare two environments or to review a list with the business.

---

## Related

- [UDC Types](./udc-types.md) — the catalogue of the types.
