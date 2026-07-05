---
title: Audit Trail
description: "Header of the database-level audit trail — one row per audited operation, grouped by application, date, schema and table. Each row expands to a field-level BEFORE / AFTER diff parsed on demand from the stored DML statement, plus purge and rebuild-values jobs to manage the history."
keywords: [Nomasx-1, database, audit trail, DML audit, INSERT, UPDATE, DELETE, source-system audit, value diff, before after, audit columns, purge, rebuild]
---

# Audit Trail

The **Audit Trail** screen is the header view of the database-level audit. One line per `(Application, Transaction date, Operation, Schema, Table, User)`. Each row counts how many records were touched in a given audited operation on a connected application — `INSERT`, `UPDATE`, `DELETE` or `TRUNCATE`.

It complements *Activity log* (which captures usage tracking) with low-level database mutations — the kind of trace SOX-style controls expect.

---

## At a glance

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="at-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#at-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Database · Audit Trail</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TRANSACTION DATE</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OPERATION</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SCHEMA</text>
  <text x="580" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COUNT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14 09:42</text>
  <text x="320" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">UPDATE</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="580" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="850" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">42</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14 02:14</text>
  <text x="320" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">INSERT</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="580" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F4101</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="850" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 481</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13 18:51</text>
  <text x="320" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">DELETE</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="580" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411Z1</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DBA_OPS</text>
  <text x="850" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">3 102</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13 11:08</text>
  <text x="320" y="245" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">UPDATE</text>
  <text x="460" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="580" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="720" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MSMITH</text>
  <text x="850" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">7</text>
</svg>

---

## Goal of the view

For every audited database mutation on a connected application:

- **The header.** Date, operation type, schema, table, user, row count. Enough to identify the operation without yet reading every changed column.
- **Volume signal.** *Count* surfaces mass updates and deletes — typical inputs of a SOX walkthrough.
- **Drill-down entry point.** A click into a row opens the *Audit Lookup* screen with the before / after column values.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `AUD_APPS_ID` — application identifier. | The connected application. |
| **Transaction date** | `AUD_DT_TRANSACTION` — timestamp. | When the operation hit the database. |
| **Operation** | `AUD_OPERATION` — `INSERT` / `UPDATE` / `DELETE` / `TRUNCATE`. | What was done. |
| **Schema** | `AUD_SEG_OWNER` — database schema. | Where the table lives. |
| **Table** | `AUD_SEG_NAME` — table name. | Object touched. |
| **User** | `AUD_USER` — database account. | Who executed the operation at the DB level. |
| **Count** | `AUD_COUNT` — number of rows affected. | Volume of the operation. |

---

## Field-level diff — expandable rows

Every row expands via the native chevron on the left to a **BEFORE / AFTER diff** at the column level. Column values are **parsed on demand from the stored DML statement** (`AUDIT_TRAIL_QUERY`) — the diff is built when you expand the row, not stored twice. Consequences:

- The values table can be **purged** to reclaim space, and the diff still reconstructs from the DML alone.
- Only the columns that changed are highlighted; unchanged columns are shown greyed out for context (and can be hidden through the row toolbar).
- `INSERT` shows all persisted values as *AFTER*; `DELETE` shows them as *BEFORE*; `UPDATE` shows both, with changed cells outlined.

The summary view replaces the previous nested grid — expandable **sub-rows** are native, so keyboard navigation and column resizing behave like the rest of the grid.

---

## Auditing scope — Audit Columns tab

Each connected application decides **how much of each audited table** is indexed into the values table via the *Audit Columns* tab on the application editor. Three modes per table:

| Rule set on the table | Effect |
|---|---|
| **No row for the table** | Default — every column of the row is indexed into `AUDIT_TRAIL_VALUES`. |
| **One or more column rows** | Only the listed columns are indexed. Other columns still appear in the on-demand diff (parsed from `AUDIT_TRAIL_QUERY`), just not searchable in the values table. |
| **A single `*SQL*` row** | Journal-only — the full DML statement is retained in `AUDIT_TRAIL_QUERY` and **nothing is indexed** into `AUDIT_TRAIL_VALUES`. Use it on the widest tables where per-column search is not needed. |

The full DML statement is always retained in `AUDIT_TRAIL_QUERY`, so nothing is lost regardless of the rule set. The tab is the lever to keep the values table's volume in check on wide tables (a `F0911` row would otherwise index tens of columns per operation).

---

## Purge and rebuild jobs

Two Nomaflow jobs sit alongside this screen to keep the history in shape:

| Job | What it does |
|---|---|
| **Audit trail purge** | Deletes rows from `AUDIT_TRAIL_HEADER` (and cascading values) older than a cutoff date. The DML statement, the header and its values are all removed — use this to enforce a retention policy. |
| **Rebuild values** | Re-parses `AUDIT_TRAIL_QUERY` for a chosen date range and re-populates `AUDIT_TRAIL_VALUES` from the raw DML. Useful after enlarging the *Audit Columns* rule on a table (previously-indexed rows get the freshly-listed columns without re-collecting from source), or after a values purge. |

Both jobs run under Nomaflow with progress in the run log and reach into the standard audit-trail scope (connectors and applications).

---

## Tips & best practices

- **Filter on *Operation = DELETE*** in the audit period — every deletion has to be justifiable.
- **Expand the row before opening *Audit Lookup*.** For a single-record diff, the expanded row already shows every changed column; *Audit Lookup* is the drill-down for a multi-record `UPDATE` where you want to walk each affected row.
- **Filter on a *User*** to retrieve the database-level activity of a specific account. Match against the corresponding *Activity log* row to see whether the change was driven through the application or directly on the database.
- **A *Count* above the day's typical range** for the same table is the kind of anomaly worth a question to the DBA team.
- **Trim wide tables via *Audit Columns*.** On a `F0911`-style table, list only the columns you would ever search on — the values table stays small, and the field-level diff still shows everything from the parsed DML.
- **Run the purge on a schedule** aligned with your retention policy; use *Rebuild values* after enlarging the audit scope of a table to backfill the values that would otherwise be missing.
- **The screen is read-only for everyone except an administrator.** Editable entry points exist (`audit_trail_post` / `audit_trail_put`) but are intended for the Nomasx-1 ingestion pipeline, not manual data entry.
