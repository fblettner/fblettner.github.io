---
title: Audit Lookup
description: "Detailed audit lookup — for each audited mutation, the before / after value of every changed column."
keywords: [Nomasx-1, database, audit lookup, before / after values, column-level audit, SOX]
---

# Audit Lookup

The **Audit Lookup** screen is the detail view of the database-level audit. One line per `(Application, Row, Column, Audit type, Value)`. Each row pairs a column with its `BEFORE` and `AFTER` value at the time of the operation, joining the audit header with the audit values.

This is the screen auditors open to *see what changed inside the row* — not just *that the row changed*.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="al-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#al-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Database · Audit Lookup</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATE</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USERNAME</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="510" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COLUMN</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VALUE</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OPERATION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="430" y="149" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">BEFORE</text>
  <text x="510" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPAA</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 250.00</text>
  <text x="850" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="430" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">AFTER</text>
  <text x="510" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPAA</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 500.00</text>
  <text x="850" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="200" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="430" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">BEFORE</text>
  <text x="510" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPDOC</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VCHR-0042</text>
  <text x="850" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="200" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="320" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="430" y="245" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">AFTER</text>
  <text x="510" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPDOC</text>
  <text x="640" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VCHR-0042</text>
  <text x="850" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE</text>
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
| **Username** | `AUD_USERNAME` — application or DB user. Filterable. | Who performed the operation. |
| **Table** | `AUD_SEG_NAME` — table name. Filterable. | Object that was changed. |
| **Type** | `AUD_TYPE` — `BEFORE` / `AFTER`. | Snapshot side. |
| **Column** | `AUD_NAME` — column name. Filterable. | Which column the value applies to. |
| **Value** | `AUD_VALUE` — raw value. Filterable. | The value snapshotted. |
| **Operation** | `AUD_OPERATION` — `INSERT` / `UPDATE` / `DELETE`. | What the underlying operation was. |
| **Schema** | `AUD_SEG_OWNER` — database schema. | Where the table lives. |

---

## Tips & best practices

- **Filter on a *Column* + *Value*** to ask *who changed this field to that value, and when*.
- **Group rows by *Row ID*** to read a full before/after for the same record — the most useful view for auditors.
- **Use the *Operation* filter** to scope the search to a specific kind of mutation. `DELETE` rows have no `AFTER` value — only `BEFORE`.
- **Cross-reference with the *Audit Trail* header** to confirm the row count of an operation matches the number of rows you can see at this level.
