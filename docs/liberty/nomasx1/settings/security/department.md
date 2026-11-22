---
title: Department
description: "Nomasx-1 Settings → Security → Department: the editable list of group / AD department pairs that groups the directory's departments for Users by applications, its Excel export and the read-only LDAP Settings view."
keywords: [Nomasx-1, settings, AD department, group, LDAP, Users by applications, Excel export]
---

# Department

The **Department** screen (**Settings → Security → Department**) is where the `(Group, Department)` pairs are maintained: one line per pair, the group rolling one or several AD departments into one functional bucket. *Users by applications* and its Excel export only show the departments listed here, grouped as declared here.

It is intentionally simple — just the two text columns. The read-only [Security → LDAP → Settings](../../security/ldap/settings.md) screen shows the result: for each application, the AD departments found in the directory with the group they belong to here — an empty group means a department still to declare.

---

## At a glance

<svg viewBox="0 0 1320 364" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dep-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dep-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dep-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="284" rx="14" fill="url(#dep-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - LDAP Department</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">4 rows · 12 ms</text>
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
  <text x="243" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">GROUP</text>
  <text x="543" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DEPARTMENT</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Finance</text>
  <text x="543" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Accounting</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Finance</text>
  <text x="543" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Treasury</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Supply Chain</text>
  <text x="543" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Purchasing</text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Supply Chain</text>
  <text x="543" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Warehouse</text>
  <text x="233" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="270" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="283.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="283" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–4 of 4</text>
  <text x="1087" y="283" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="320" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group</text>
  <text x="225.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">groups departments for the export</text>
  <line x1="435.0" y1="320" x2="251" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dep-arrow)"/>
  <rect x="665.0" y="320" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Department</text>
  <text x="675.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as written in the directory</text>
  <line x1="885.0" y1="320" x2="551" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dep-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row · Bulk edit · Import</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one pair, many, or a file</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dep-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the edit dialog</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dep-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to Excel</text>
  <line x1="1119" y1="134.0" x2="1048.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dep-arrow)"/>
</svg>

---

## Goal of the view

- **Master list of *(Group, Department)* pairs.** The only place where the grouping of AD departments is edited; *Security → LDAP → Settings* and *Users by applications* read it.
- **Keep the pairs aligned with the AD department attribute** so the *Users by applications* matrix matches correctly.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Group** | `LDAPD_GROUP` — text. | High-level functional bucket. |
| **Department** | `LDAPD_DEPARTEMENT` — text. | AD department value. Must match the `department` attribute on the LDAP entries. |

---

## Edit dialog

Click **Add row** to declare a new pair, or click a row to open it; **Bulk edit** changes several rows in the grid and **Import** loads them from Excel. The form holds the two fields.

<svg viewBox="0 0 1320 276" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ded-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ded-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ded-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ded-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="226" rx="14" fill="url(#ded-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">New · Settings - LDAP Department</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GROUP</text>
  <rect x="235.0" y="98" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Finance</text>
  <text x="235.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEPARTMENT</text>
  <rect x="235.0" y="144" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="158.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Accounting</text>
  <line x1="215" y1="192" x2="1105" y2="192" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1028" y="206" width="57" height="24" rx="5" fill="url(#ded-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1056.5" y="221.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Save</text>
  <rect x="952" y="206" width="68" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.0" y="221.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="859" y="206" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="901.5" y="221.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <rect x="12" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group</text>
  <text x="22" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name of the export file</text>
  <line x1="197" y1="109.0" x2="233.0" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ded-arrow)"/>
  <rect x="12" y="138" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Department</text>
  <text x="22" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">AD department attribute</text>
  <line x1="197" y1="155.0" x2="233.0" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ded-arrow)"/>
  <rect x="1119" y="213" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="228" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1129" y="241" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Cancel leaves without saving</text>
  <line x1="1119" y1="230.0" x2="1056.5" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ded-arrow)"/>
</svg>

| Field | What to enter |
|---|---|
| **Group** | Free text. The functional bucket that ties departments together. |
| **Department** | Free text. Must match the `department` attribute on an LDAP entry, character for character. |

Both fields can be changed on a saved line: saving moves the department to another group, or corrects its spelling.

---

## Tips & best practices

- **Check *Security → LDAP → Settings* after a directory collection** — a department shown there with an empty group has no pair here yet, so it stays out of *Users by applications* and its export.
- **Validate the spelling against AD** — a mistyped department disappears from the LDAP join silently.
- **Remove pairs that are no longer in use** to keep the groups readable.
