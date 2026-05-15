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

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="acl-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#acl-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Activity log</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="250" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SCHEMA</text>
  <text x="370" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TRANSACTION DATE</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COUNT</text>
  <text x="810" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT ID</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="250" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="370" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14 09:42</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">42</text>
  <text x="810" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="250" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="370" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0413</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14 11:17</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">8</text>
  <text x="810" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="250" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="370" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F4101</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14 02:00</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 481</text>
  <text x="810" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R41549</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="120" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">BENEMGR</text>
  <text x="250" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SAP_PRD</text>
  <text x="370" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PA0008</text>
  <text x="540" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13 16:24</text>
  <text x="720" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">3</text>
  <text x="810" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PA20</text>
</svg>

---

## Goal of the view

For each connected application:

- **What did each user actually do?** *Schema + Table + Transaction date + Count* tells how many rows of which table a user touched on a given timestamp.
- **Cross-check theoretical rights.** Combined with the *Rights* matrix, an empty activity log on a user with extensive rights is the strongest revocation argument.
- **Feed the proven SoD analysis.** The *Proven* conflicts screen intersects this dataset with the SoD details — if a user does not appear here for the relevant tables, the conflict is theoretical only.

The activity log is built from database-level triggers / auditing on the source-system tables — outside of any application-layer permission. It captures what *the database* recorded, not what the application *believes* happened.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `ACL_APPS_ID` — application identifier. Filterable. | The connected application. |
| **User ID** | `ACL_USER_ID` — user identifier, trimmed. Filterable, scoped to the application. | Who performed the transaction. |
| **Schema** | `ACL_SCHEMA` — database schema. | Where the data lives — useful when several environments share the same Nomasx-1 instance. |
| **Table** | `ACL_TABLE_NAME` — database table. Filterable. | Object that was written to. |
| **Transaction date** | `ACL_DT_TRANSACTION` — timestamp. | When the activity happened. |
| **Count** | `ACL_COUNT` — number of rows touched. | Volume — distinguishes a one-off update from a mass operation. |
| **Object ID** | `ACL_OBJECT_ID` — source-system program. | Which program triggered the write — links the row back to the rights matrix. |

---

## Tips & best practices

- **Filter on a single *User ID*** + sort by *Transaction date* descending — the latest activity narrative for that user. Quick way to know whether an account that holds risky rights is dormant or active.
- **Filter on *Table*** to investigate a specific data set — *Who touched F0411 last quarter?* is answered in one filter.
- **Combine with *OUT — Components*** — *Activity log* is the database picture, *OUT* is the application picture. Both should tell similar stories; large discrepancies point to direct database writes that bypass the application.
- **Watch *Count*** — a single-row update is normal, a mass operation deserves a justification check.
