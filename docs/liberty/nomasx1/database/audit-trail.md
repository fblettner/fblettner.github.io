---
title: Audit Trail
description: "Nomasx-1 database audit trail — every INSERT, UPDATE and DELETE read from Oracle archive logs, grouped by schema, table, operation and day, each opening on a field-level before / after diff read from the stored statement; collection, purge and rebuild jobs."
keywords: [Nomasx-1, database, audit trail, DML audit, INSERT, UPDATE, DELETE, source-system audit, value diff, before after, audit columns, purge, rebuild]
---

# Audit Trail

The **Audit Trail** screen (*Audit - Query* in its header) lists the changes made in the database of a connected application, as Oracle's archive logs record them: one line per change — `INSERT`, `UPDATE` or `DELETE` — with the schema, the table, the time, the database user, the row and the *System Change Number*. Open it from **Database → Audit Trail**.

It complements *Activity log* (who wrote how many rows each day) with each change itself — the kind of trace SOX-style controls expect.

---

## At a glance

<svg viewBox="0 0 1320 496" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="atr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="atr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="atr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="atr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="454" rx="14" fill="url(#atr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Audit - Query</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Advanced filters</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">7 rows · 10 ms</text>
  <rect x="930" y="118" width="157" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="954.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="979" y1="123" x2="979" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1003.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="1029" y="119" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1057.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Summary</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="719" y="146" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="146" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="180" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="243" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SCHEMA</text>
  <text x="383" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TABLE NAME</text>
  <text x="493" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OPERATION</text>
  <text x="593" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TRANSACTION DATE</text>
  <text x="753" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="843" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROW ID</text>
  <text x="913" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LAST SCN</text>
  <text x="1003" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJECT TYPE</text>
  <rect x="233" y="206" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="220.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="257" y="220.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="302.06" y="220.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(1)</text>
  <text x="383" y="220.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="493" y="220.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">DELETE</text>
  <text x="593" y="220.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <rect x="233" y="228" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="242.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="257" y="242.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="302.06" y="242.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(2)</text>
  <text x="383" y="242.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="493" y="242.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INSERT</text>
  <text x="593" y="242.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <rect x="233" y="250" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="264.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="257" y="264.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="302.06" y="264.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(3)</text>
  <text x="383" y="264.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="493" y="264.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE</text>
  <text x="593" y="264.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <rect x="233" y="272" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="259" y="286.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="273" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="383" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="493" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE</text>
  <text x="593" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18T15:55:39</text>
  <text x="753" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1</text>
  <text x="843" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">7</text>
  <text x="913" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">717044471</text>
  <text x="1003" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">TABLE</text>
  <rect x="233" y="294" width="854" height="96" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="265" y="310" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">92 fields · 2 changed</text>
  <rect x="385" y="302" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M387.5,307.5 L389.8,309.8 L393.8,305" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="402" y="311" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Changed only</text>
  <rect x="265" y="320" width="600" height="62" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="277" y="334" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">FIELD</text>
  <text x="385" y="334" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">BEFORE</text>
  <text x="635" y="334" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">AFTER</text>
  <rect x="267" y="340" width="596" height="19" fill="rgba(74,158,255,0.12)"/>
  <text x="277" y="353" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">ABALKY</text>
  <text x="385" y="353" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="615" y="353" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="635" y="353" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">FR00012345</text>
  <rect x="267" y="360" width="596" height="19" fill="rgba(74,158,255,0.12)"/>
  <text x="277" y="373" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">ABUPMT</text>
  <text x="385" y="373" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">130903</text>
  <text x="615" y="373" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="635" y="373" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">155539</text>
  <rect x="233" y="390" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="259" y="404.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="273" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="383" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="493" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE</text>
  <text x="593" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18T13:09:03</text>
  <text x="753" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1</text>
  <text x="843" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">5</text>
  <text x="913" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">716994795</text>
  <text x="1003" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">TABLE</text>
  <rect x="233" y="412" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="426.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="257" y="426.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="302.06" y="426.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(1)</text>
  <text x="383" y="426.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F4301</text>
  <text x="493" y="426.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INSERT</text>
  <text x="593" y="426.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="233" y="456" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page   50 ⌄     Showing 1–7 of 7</text>
  <rect x="12" y="79" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="94" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="22" y="107" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, date, operation, schema, table</text>
  <line x1="197" y1="96.0" x2="233" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
  <rect x="12" y="244" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="259" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Summary row</text>
  <text x="22" y="272" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">schema · table · operation · day (count)</text>
  <line x1="197" y1="261.0" x2="263" y2="261" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
  <rect x="12" y="286" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="301" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One change</text>
  <text x="22" y="314" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">row, SCN, time — expand it</text>
  <line x1="197" y1="303.0" x2="653" y2="283" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
  <rect x="1119" y="121" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="136" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Summary view</text>
  <text x="1129" y="149" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens grouped by day</text>
  <line x1="1119" y1="138.0" x2="1047" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
  <rect x="1119" y="291" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="306" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Changed only</text>
  <text x="1129" y="319" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">untick to see every field</text>
  <line x1="1119" y1="308.0" x2="405" y2="308" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
  <rect x="1119" y="343" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="358" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Before → After</text>
  <text x="1129" y="371" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read from the stored statement</text>
  <line x1="1119" y1="360.0" x2="865" y2="360" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
</svg>

---

## Summary view \{#summary\}

The screen opens on **Summary** (next to *Table* and *Chart*): the changes are grouped by **Schema**, **Table Name**, **Operation** and **Transaction date** (by day), and each group says how many changes it holds, in brackets. The chevron of a group lists its changes; **Table** shows the flat list instead.

---

## Field-level diff — expandable rows \{#diff\}

The chevron of a change opens its **before / after** diff, field by field: the header line says how many fields the row has and how many changed (*92 fields · 2 changed*), and **Changed only** — ticked by default — hides the fields that did not change. The values are **read on demand from the stored DML statement** (`AUDIT_TRAIL_QUERY`): the diff is built when you open it, not stored twice. Consequences:

- The values table (`AUDIT_TRAIL_VALUES`, the source of *Audit Lookup*) can be **purged** to reclaim space; the diff still rebuilds from the statement alone.
- `INSERT` shows the values written as *After*; `DELETE` shows them as *Before*; `UPDATE` shows both, the changed fields highlighted.

---

## Columns \{#columns\}

| Column | Source | What it tells you |
|---|---|---|
| **Schema** | `AUD_SEG_OWNER` — database schema. | Where the table is. |
| **Table Name** | `AUD_SEG_NAME` — table name. | Object changed. |
| **Operation** | `AUD_OPERATION` — `INSERT` / `UPDATE` / `DELETE`. | What was done. |
| **Transaction date** | `AUD_DT_TRANSACTION` — timestamp. | When the change reached the database. |
| **Application ID** | `AUD_APPS_ID` — application identifier. | The connected application. |
| **Row ID** | `AUD_ROW_ID` — row identifier. | Which row of the table. |
| **Last SCN** | `AUD_SCN` — *System Change Number*. | Position of the change in the archive logs. |
| **Object Type** | `AUD_SEG_TYPE` — `TABLE`. | Kind of object. |
| **User** | `AUD_USERNAME` — database account. | Who made the change at database level. |

**Advanced filters** narrow the list on the application, the transaction date, the operation, the schema, the table and the user.

---

## Auditing scope — Audit Columns tab \{#scope\}

Each connected application decides **how much of each audited table** is indexed into the values table, on the *Audit Columns* tab of its settings ([Applications](../settings/global/applications.md)). Three cases per table:

| Rules on the table | Effect |
|---|---|
| **No row for the table** | Default — every column of the row is indexed into `AUDIT_TRAIL_VALUES`. |
| **One or more column rows** | Only the listed columns are indexed. The other columns still appear in the on-demand diff, they just cannot be searched in *Audit Lookup*. |
| **A single `*SQL*` row** | Journal only — the full DML statement is kept in `AUDIT_TRAIL_QUERY` and **nothing is indexed** into `AUDIT_TRAIL_VALUES`. Use it on the widest tables where per-column search is not needed. |

The full DML statement is always kept, whatever the rules. The tab is the lever to keep the values table's volume in check on wide tables (an `F0911` row would otherwise index tens of columns per change).

---

## Collection, purge and rebuild jobs \{#jobs\}

The changes are collected by Nomaflow jobs, run on the application:

| Job | What it does |
|---|---|
| **nomasx1-audit-trail-1** | Reads the archive logs (LogMiner) from the last SCN of the application and adds the new changes. |
| **nomasx1-audit-trail-precheck-1** | Read-only check that the audited database has every prerequisite; gives the SQL to fix what is missing. |
| **nomasx1-audit-trail-reset-scn-1** | Resets the last SCN of the application — by default the next run starts from the current SCN. |
| **nomasx1-audit-trail-purge-values-1** | Purges `AUDIT_TRAIL_VALUES` to reclaim space — everything for the application (optionally one table), or only the values of statements older than N days. The statements are kept. |
| **nomasx1-audit-trail-rebuild-values-1** | Rebuilds `AUDIT_TRAIL_VALUES` for a table and a period by reading the stored statements again — after a purge, or after widening the *Audit Columns* rules of a table. |

---

## Tips & best practices

- **Filter on *Operation = DELETE*** over the audit period — every deletion has to be justifiable.
- **Open the change before *Audit Lookup*.** For one record, the diff already shows every changed field; *Audit Lookup* searches the indexed values across changes ("every change that wrote this value in this column").
- **Filter on a *User*** to read the database activity of one account. Compare with the *Activity log* to tell a change made through the application from one made directly in the database.
- **A group whose count is above the usual range** for the same table is worth a question to the DBA team.
- **Trim wide tables with *Audit Columns*.** On an `F0911`-style table, list only the columns you would search on — the values table stays small and the diff still shows everything from the statement.
- **Schedule the purge of values** in line with your retention policy, and run *rebuild values* on a period when a value-level search is needed again.
