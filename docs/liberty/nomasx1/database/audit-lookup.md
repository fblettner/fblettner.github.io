---
title: Audit Lookup
description: "Detailed audit lookup — for each audited mutation, the before / after value of every changed column."
keywords: [Nomasx-1, database, audit lookup, before / after values, column-level audit, SOX]
---

# Audit Lookup

The **Audit Lookup** screen is the detail view of the database-level audit. One line per `(Application, Row, Column, Audit type, Value)`. Each row pairs a column with its `BEFORE` and `AFTER` value at the time of the operation, joining the audit header with the audit values.

This is the screen auditors open to *see what changed inside the row* — not just *that the row changed*. Open it from **Database → Audit Lookup**: it reads nothing until the **Advanced filters** are set (application, transaction date, user, table name, column, value — each with its operator) and **Run** is clicked.

---

## At a glance

<svg viewBox="0 0 1320 466" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="alk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="alk-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="alk-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="alk-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="386" rx="14" fill="url(#alk-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Audit - Lookup</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="114" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">⌄  ⏷  Advanced filters</text>
  <text x="245" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="245" y="128" width="20" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="255.0" y="141.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">=</text>
  <rect x="269" y="128" width="126" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="279" y="141.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">filter…</text>
  <text x="407" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRANSACTION DATE</text>
  <rect x="407" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="417" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▦ All dates</text>
  <text x="547" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="569" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <rect x="569" y="128" width="20" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="579.0" y="141.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">=</text>
  <rect x="593" y="128" width="126" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="603" y="141.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">filter…</text>
  <text x="731" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE NAME</text>
  <rect x="731" y="128" width="20" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="741.0" y="141.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">=</text>
  <rect x="755" y="128" width="126" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="765" y="141.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">filter…</text>
  <text x="893" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLUMN</text>
  <rect x="893" y="128" width="20" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="903.0" y="141.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">=</text>
  <rect x="917" y="128" width="126" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="927" y="141.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">filter…</text>
  <text x="245" y="162" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALUE</text>
  <rect x="245" y="168" width="20" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="255.0" y="181.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">=</text>
  <rect x="269" y="168" width="126" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="279" y="181.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">filter…</text>

  <text x="233" y="220" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 rows · 12 ms</text>
  <rect x="989" y="208" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="209" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="221.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="213" x2="1038" y2="223" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="221.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="236" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="250.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="389" y="236" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="414.0" y="250.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="596" y="236" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="250.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="719" y="236" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="236" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="236" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="236" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="236" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="268" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="321" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATIO…</text>
  <text x="371" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">ROW ID</text>
  <text x="385" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TRANSACTION DATE</text>
  <text x="505" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER</text>
  <text x="575" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TABLE NAME</text>
  <text x="645" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TYPE</text>
  <text x="715" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COLUMN</text>
  <text x="785" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VALUE</text>
  <text x="905" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OPERATION</text>
  <text x="975" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SCHEMA</text>
  <rect x="233" y="294" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="297" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="308.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="321" y="308.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="371" y="308.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">7</text>
  <text x="385" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18T15:55:39</text>
  <text x="505" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="575" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="645" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AFTER</text>
  <text x="715" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ABALKY</text>
  <text x="785" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FR00012345</text>
  <text x="905" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE</text>
  <text x="975" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <rect x="233" y="316" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="319" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="330.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="321" y="330.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="371" y="330.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <text x="385" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18T13:09:03</text>
  <text x="505" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="575" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="645" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AFTER</text>
  <text x="715" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ABALKY</text>
  <text x="785" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FR00012345</text>
  <text x="905" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE</text>
  <text x="975" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <rect x="233" y="338" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="341" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="352.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="321" y="352.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="371" y="352.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="385" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18T10:21:44</text>
  <text x="505" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="575" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="645" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AFTER</text>
  <text x="715" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ABAN8</text>
  <text x="785" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">4021</text>
  <text x="905" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INSERT</text>
  <text x="975" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="233" y="384" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="372" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="385.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="385" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–3 of 3</text>
  <text x="1087" y="385" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="256" y="315.0" width="164" height="54" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="321.0" width="156" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="335.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users</text>
  <text x="410" y="335.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="357.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Rights</text>
  <text x="410" y="357.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="422" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="437" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Column · Value</text>
  <text x="225.0" y="450" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line per indexed value</text>
  <line x1="435.0" y1="422" x2="723" y2="361.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#alk-arrow)"/>
  <rect x="665.0" y="422" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="437" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Operation · Schema</text>
  <text x="675.0" y="450" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">INSERT, UPDATE, DELETE</text>
  <line x1="885.0" y1="422" x2="913" y2="361.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#alk-arrow)"/>
  <rect x="12" y="107" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="122" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search by value</text>
  <text x="22" y="135" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">column = ABALKY, value = FR…</text>
  <line x1="197" y1="124.0" x2="233" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#alk-arrow)"/>
  <rect x="12" y="288.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="303.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row actions (···)</text>
  <text x="22" y="316.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Display Users · Display Rights</text>
  <line x1="197" y1="305.0" x2="248" y2="305.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#alk-arrow)"/>
  <rect x="1119" y="230" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run</text>
  <text x="1129" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nothing is read before</text>
  <line x1="1119" y1="247.0" x2="409" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#alk-arrow)"/>
</svg>

---

## Goal of the view

For each column captured in an audited operation:

- **What changed.** *BEFORE* + *AFTER* on the same column makes the modification visible in one read.
- **Joined to the user and the operation.** The header context (date, table, user, operation) is repeated on each row — handy when filtering on a specific column or value.
- **Source of evidence.** A row here is *the* proof that an operation took place. Auditors paste it into the SOX finding.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `AUD_APPS_ID` — application identifier. Filterable. | The connected application. |
| **Row ID** | `AUD_ROW_ID` — internal row identifier. | Stable reference across audit entries. |
| **Transaction date** | `AUD_DT_TRANSACTION` — date. Filterable. | When the operation happened. |
| **User** | `AUD_USERNAME` — application or DB user. Filterable. | Who performed the operation. |
| **Table Name** | `AUD_SEG_NAME` — table name. Filterable. | Object that was changed. |
| **Type** | `AUD_TYPE` — `BEFORE` / `AFTER`. | Snapshot side. |
| **Column** | `AUD_NAME` — column name. Filterable. | Which column the value applies to. |
| **Value** | `AUD_VALUE` — raw value. Filterable. | The value snapshotted. |
| **Operation** | `AUD_OPERATION` — `INSERT` / `UPDATE` / `DELETE`. | What the underlying operation was. |
| **Schema** | `AUD_SEG_OWNER` — database schema. | Where the table lives. |

---

## Context menu \{#context-menu\}

Click the **···** button at the start of a row, or right-click the row, to open its menu.

| Action | Where it lands |
|---|---|
| **Display Users** | The assignments of the application (*Security → Assignments*), to see the roles of the account behind the change. |
| **Display Rights** | The rights of the roles (*Security → Roles*, rights view), to see what lets that account change the table. |

---

## Tips & best practices

- **Filter on a *Column* + *Value*** to ask *who changed this field to that value, and when*.
- **Group rows by *Row ID*** to read a full before/after for the same record — the most useful view for auditors.
- **Filter the grid on *Operation*** to scope the search to a specific kind of mutation. `DELETE` rows have no `AFTER` value — only `BEFORE`.
- **Cross-reference with the *Audit Trail* header** to confirm the row count of an operation matches the number of rows you can see at this level.
