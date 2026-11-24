---
title: Rights — Row security
description: "The Nomasx-1 Row security screen: the row security of a JD Edwards EnterpriseOne application as collected — which user or role may view, add, change or delete the rows of a table whose data item falls in a range — with the table and the data item named."
keywords: [Nomasx-1, applications, rights, row security, data security, F00950, range, data item, JD Edwards]
---

# Rights — Row security

The **Row security** screen (**Applications → Rights → Row security**) lists the row security of an application as it was collected: for a user or a role, a table and a data item, the range of values (**From** … **Thru**) and what may be done on the rows that fall in it — view, add, change, delete. One line per user or role, table, data item and range.

Row security does not decide what a user may open: the rights, the licence figures and the segregation of duties do not read it. It is collected for the review of the security itself, and read by [What to fix](../../security-analysis.md).

:::info[JDE-specific]
The lines come from the Security Workbench's row security (table F00950, security type 4), read by the security collection. Another application has no row security here.
:::

---

## At a glance

<svg viewBox="0 0 1320 332" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rsec-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rsec-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rsec-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rsec-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="296" rx="14" fill="url(#rsec-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security - Row security as collected</text>
  <line x1="220" y1="76" x2="1100" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="88" width="840" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="104" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Advanced filters</text>
  <text x="250.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="250.0" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="457.5" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <rect x="457.5" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="467.5" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="665.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="665.0" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="675.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="872.5" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA ITEM</text>
  <rect x="872.5" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="882.5" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="240" y="154" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="168.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="418" y="154" width="47" height="22" rx="5" fill="url(#rsec-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="441.5" y="168.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="1020" y="154" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1050.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="959" y="154" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="898" y="154" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="847" y="154" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="186" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="330" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <text x="430" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="580" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA ITEM</text>
  <text x="720" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM</text>
  <text x="780" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THRU</text>
  <text x="840" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="890" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="945" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANGE</text>
  <text x="1005" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DELETE</text>
  <rect x="240" y="218" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="330" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APCLERK</text>
  <text x="430" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">F0411 · A/P Ledger</text>
  <text x="580" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">KCO · Document Company</text>
  <text x="720" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="780" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">00050</text>
  <text x="840" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="890" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="945" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="1005" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <rect x="240" y="246" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="330" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_FR</text>
  <text x="430" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">F4211 · Sales Order Detail</text>
  <text x="580" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">MCU · Business Unit</text>
  <text x="720" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">FR100</text>
  <text x="780" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">FR199</text>
  <text x="840" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="890" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="945" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="1005" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <rect x="240" y="274" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="330" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">GLUSER</text>
  <text x="430" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">F0911 · Account Ledger</text>
  <text x="580" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">CO · Company</text>
  <text x="720" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">00100</text>
  <text x="780" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">00010</text>
  <text x="840" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="890" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="945" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="1005" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">user or role, table, data item</text>
  <line x1="200" y1="117.0" x2="496.25" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsec-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Names shown</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">table and data item</text>
  <line x1="200" y1="267.0" x2="460" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsec-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The range</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from … thru, as written</text>
  <line x1="1120" y1="177.0" x2="730" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsec-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Reversed range</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listed by What to fix</text>
  <line x1="1120" y1="267.0" x2="740" y2="286" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsec-arrow)"/>
</svg>

---

## Filters \{#filters\}

The **Advanced filters** above the grid narrow it before **Run**: **Application ID**, **User / role** (the users and roles of the application chosen), **Table** and **Data item**.

---

## Columns

| Column | What it tells |
|---|---|
| **Application ID** | The application, with its name. |
| **User / role** | The user or the role the line applies to, with its name; `*PUBLIC` for everybody. |
| **Table** | The table secured, with its name; `*ALL` for every table. |
| **Data item** | The data item whose value is tested, with its title from JD Edwards' data dictionary, read live. |
| **From** / **Thru** | The range of values, as written in JD Edwards. |
| **View** · **Add** · **Change** · **Delete** | `Y` / `N`: what may be done on the rows whose value falls in the range. |

The names come from what was collected for the application; the data item's title is read from JD Edwards when the grid is drawn — when it cannot be read, the code alone shows.

---

## What the analysis checks \{#analysis\}

[What to fix](../../security-analysis.md) reads these lines:

- **Row security: from is after thru** — a range whose start is after its end holds no value;
- **Security lines for a user or role that no longer exists** — row security lines count with the workbench and UDO lines;
- **Roles that give exactly the same thing** — two roles are the same only when their row security is too.

---

## Tips & best practices

- **Filter on a table** to see every range set on it, users and roles together — overlapping ranges for the same holder are easier to spot that way.
- **Prefer roles to users**: row security written on a user is a special case to maintain for one person.
- **Collect again after a change in JD Edwards**: the screen shows the row security of the last security collection.
