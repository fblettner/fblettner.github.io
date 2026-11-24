---
title: Activity log
description: "Database-level activity log — every transaction recorded by user on tables of the connected application."
keywords: [Nomasx-1, applications, activity log, transactions, audit trail, database log]
---

# Activity log

The **Activity log** screen lists every recorded transaction on a connected application, captured at the database level. One line per `(Application, User, Table, Transaction date)` — the raw evidence used by the *Proven* conflicts view and the *Object Usage Tracking* statistics.

It is the *fact ledger* of Nomasx-1 — the data set that turns a theoretical conflict into a documented finding.

---

## At a glance

<svg viewBox="0 0 1320 426" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="acl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="acl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="acl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="acl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="346" rx="14" fill="url(#acl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Activity Log</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">⌄  ⏷  Advanced filters</text>
  <text x="245" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="245" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="385" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="407" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER ID</text>
  <rect x="407" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="417" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="547" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="569" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE NAME</text>
  <rect x="569" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="709" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>

  <text x="233" y="180" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">5870 rows · 12 ms</text>
  <rect x="989" y="168" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="169" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="181.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="173" x2="1038" y2="183" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="181.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="196" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="210.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="389" y="196" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="414.0" y="210.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="596" y="196" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="210.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="719" y="196" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="196" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="196" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="196" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="196" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="228" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="337" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="351" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="437" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID (ID)</text>
  <text x="529" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID</text>
  <text x="639" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OWNER</text>
  <text x="719" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TABLE NAME</text>
  <text x="799" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TRANSACTION DATE</text>
  <text x="985" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">RECORD COUNT</text>
  <text x="999" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJECT</text>
  <rect x="233" y="254" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="268.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="529" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="639" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="719" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="799" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="985" y="268.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">42</text>
  <text x="999" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <rect x="233" y="276" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="290.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="529" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="639" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="719" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F03B13</text>
  <text x="799" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="985" y="290.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">17</text>
  <text x="999" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P03B102</text>
  <rect x="233" y="298" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="312.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BWILSON</text>
  <text x="529" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bob Wilson</text>
  <text x="639" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="719" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F4211</text>
  <text x="799" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-17</text>
  <text x="985" y="312.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">96</text>
  <text x="999" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="233" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="332" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="345.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="345" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–50 of 5870</text>
  <text x="1087" y="345" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="382" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Owner · Table</text>
  <text x="225.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the table written</text>
  <line x1="360.0" y1="382" x2="727" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="515.0" y="382" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Transaction date</text>
  <text x="525.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line per day</text>
  <line x1="660.0" y1="382" x2="807" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="815.0" y="382" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Record count</text>
  <text x="825.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rows written that day</text>
  <line x1="960.0" y1="382" x2="977" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="12" y="107" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="122" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters first</text>
  <text x="22" y="135" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, user, table</text>
  <line x1="197" y1="124.0" x2="233" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="12" y="190" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run</text>
  <text x="22" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the grid stays empty until then</text>
  <line x1="197" y1="207.0" x2="409" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="1119" y="201" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="216" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group</text>
  <text x="1129" y="229" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by user, table or day</text>
  <line x1="1119" y1="218.0" x2="894.5" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
</svg>

---

## Goal of the view

For each connected application:

- **What did each user actually do?** *Schema + Table + Transaction date + Count* tells how many rows of which table a user touched on a given timestamp.
- **Cross-check theoretical rights.** Combined with the *Rights* matrix, an empty activity log on a user with extensive rights is the strongest revocation argument.
- **Feed the exercised SoD analysis.** The activity log is one of the sources of evidence of [Conflicts — Proven](./conflicts/proven.md) and of the [Segregation of duties review](../sod-review.md#evidence): the program that wrote a row, or the table written, shows an activity done.

The activity log is built from database-level triggers / auditing on the source-system tables — outside of any application-layer permission. It captures what *the database* recorded, not what the application *believes* happened.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `ACL_APPS_ID` — application identifier. Filterable. | The connected application. |
| **User ID** | `ACL_USER_ID` — user identifier, trimmed. Filterable, scoped to the application. | Who performed the transaction. |
| **Owner** | `ACL_SCHEMA` — database schema. | Where the data lives — useful when several environments share the same Nomasx-1 instance. |
| **Table Name** | `ACL_TABLE_NAME` — database table. Filterable. | Object that was written to. |
| **Transaction date** | `ACL_DT_TRANSACTION` — timestamp. | When the activity happened. |
| **Record count** | `ACL_COUNT` — number of rows touched. | Volume — distinguishes a one-off update from a mass operation. |
| **Object** | `ACL_OBJECT_ID` — source-system program. | Which program triggered the write — links the row back to the rights matrix. |

---

## Tips & best practices

- **Filter on a single *User ID*** + sort by *Transaction date* descending — the latest activity narrative for that user. Quick way to know whether an account that holds risky rights is dormant or active.
- **Filter on *Table*** to investigate a specific data set — *Who touched F0411 last quarter?* is answered in one filter.
- **Combine with *OUT — Components*** — *Activity log* is the database picture, *OUT* is the application picture. Both should tell similar stories; large discrepancies point to direct database writes that bypass the application.
- **Watch *Count*** — a single-row update is normal, a mass operation deserves a justification check.
