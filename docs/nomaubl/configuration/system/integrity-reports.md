---
title: Integrity Reports
description: "Integrity reports are read-only SQL checks that list what is missing or wrong in NomaUBL compared with a source system — print jobs never integrated, amounts that differ — shown on Reports → Integrity, with an optional action on the selected rows."
keywords: [NomaUBL, integrity reports, integrity checks, SQL, reconciliation, anomalies, missing invoices, database connector, BI Publisher, fetch-single, JD Edwards, SAP, NetSuite, custom ERP]
---

# Integrity Reports

The **Integrity reports** system template holds a list of **SQL checks** that compare NomaUBL with a source system and list what is **missing or wrong**: print jobs that were never integrated, accounting records whose amounts differ from the e-invoices… Each check is a `SELECT` run read-only against a database connector, and **every row it returns is one anomaly**. The results are shown on the **Integrity** tab of the [Reports](../../application/reports.md#integrity) page, where a check can also carry an **action** on the selected rows.

Open it under **Configuration → System → Integrity reports**. On an installation that does not have the template yet, an **Add integrity reports** button creates it without restarting the service. The template ships empty: nothing appears on the Reports page until a check is defined.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ir-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
  </defs>
  <rect x="20" y="60" width="200" height="160" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="120" y="88" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Check</text>
  <text x="120" y="112" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">missing-pdf</text>
  <text x="120" y="132" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">SELECT … NOT IN F564230</text>
  <text x="120" y="160" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">connector · key columns</text>
  <text x="120" y="178" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">optional action</text>

  <line x1="222" y1="140" x2="290" y2="140" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ir-arrow)"/>

  <rect x="294" y="60" width="200" height="160" rx="12" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="394" y="88" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only run</text>
  <text x="394" y="114" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">period → date placeholders</text>
  <text x="394" y="132" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT / WITH only</text>
  <text x="394" y="160" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">row cap · timeout</text>

  <line x1="496" y1="140" x2="564" y2="140" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ir-arrow)"/>

  <rect x="568" y="60" width="190" height="160" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="663" y="88" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Reports → Integrity</text>
  <text x="663" y="114" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">one row = one anomaly</text>
  <text x="663" y="132" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">search · filters · export</text>
  <text x="663" y="160" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">tick the rows to fix</text>

  <line x1="760" y1="140" x2="828" y2="140" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ir-arrow)"/>

  <rect x="832" y="60" width="148" height="160" rx="12" fill="rgba(50,215,75,0.06)" stroke="rgba(50,215,75,0.45)" strokeWidth="1.2"/>
  <text x="906" y="88" fill="#4ade80" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Action</text>
  <text x="906" y="114" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Integrate BIP jobs</text>
  <text x="906" y="132" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">fetch-single … bip</text>
  <text x="906" y="160" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">check run again</text>

  <path d="M906,222 C906,270 394,270 394,224" fill="none" stroke="#4ade80" strokeWidth="1.2" strokeDasharray="4 4" markerEnd="url(#ir-arrow)"/>
  <text x="650" y="262" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">integrated rows disappear from the next result</text>
</svg>

---

## Global settings

| Field | Default | Description |
|---|---|---|
| **Max rows** | `5000` | Row cap per run. A larger result is cut and flagged *result truncated at the row cap* on the Reports page. |
| **Timeout (s)** | `120` | Statement timeout, in seconds. |

---

## Checks

Each check is a collapsible group — click its title to open it, **×** removes it, **+ Add check** appends one.

| Field | Description |
|---|---|
| **Name** | Identifier shown on the Reports page (e.g. `missing-pdf`). Keep it stable. |
| **Description** | One line explaining what the check finds (e.g. *PDF print jobs not integrated*). |
| **Connector** | The [database connector](../database-connectors/nomaubl.md) the `SELECT` runs against — the JD Edwards database, the NomaUBL database or any other connector declared on the platform. |
| **Key columns** | Optional. Comma-separated result columns that identify the record an action works on (e.g. `JCPID, JCVERS, JCJOBNBR`, or document number + type + company). |
| **SQL (SELECT only)** | The query. A single `SELECT` (or `WITH`) statement; anything else is refused before it reaches the database. The connection is opened read-only. |
| **Action** | What the Reports page can do with the selected rows: *none*, or **Integrate BIP jobs**. |

### Date placeholders

The SQL can use the period picked on the Reports page. Placeholders are replaced before the run; without a period, the range is `1900-01-01` → today.

| Placeholder | Format | Example |
|---|---|---|
| `{from}` / `{to}` | `yyyy-MM-dd` | `2026-09-01` |
| `{fromJde}` / `{toJde}` | JDE Julian date (`CYYDDD`) | `126244` |
| `{fromDMY}` / `{toDMY}` | `dd-MM-yyyy` | `01-09-2026` |

The SQL field suggests the usual shape of a check — the source records of the period that never reached the NomaUBL log (`F564230`):

```sql
SELECT … FROM … WHERE JCSTDTIM > TO_DATE('{fromDMY}','dd-MM-yyyy')
  AND … NOT IN (SELECT TRIM(FEWDS1) FROM PRODDTA.F564230 WHERE FEUPMJ > {fromJde})
```

### Action *Integrate BIP jobs*

:::info[JDE-specific]
This action extracts JD Edwards BI Publisher jobs. Checks without an action work on any source system.
:::

When **Action** is set to **Integrate BIP jobs**, the selected rows are integrated exactly like the command `fetch-single <template> bip <job>` (see [Command line](../../management/command-line.md)), through the [Fetch Invoices](./fetch-invoices.md) batch. Five fields map the result columns:

| Field | Description |
|---|---|
| **Job column** | Result column holding the JDE job number (`RJJOBNBR`). Required. |
| **Template column** | Result column holding the document template name. Leave empty to use the fixed template. |
| **Fixed template** | Document template used when the template column is empty or missing. |
| **Host column** | Result column holding the JDE execution host — only on JD Edwards installations with several hosts. Optional. |
| **Processing type** | `AUTO` *(default)*, `SINGLE`, `BURST`, `UBL` or `BOTH`. |

---

## On the Reports page \{#reports-integrity\}

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}>
    <span style={{fontSize: '12px', opacity: 0.7}}>Check</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', fontFamily: 'monospace'}}>missing-pdf ▾</span>
    <span style={{padding: '6px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '12px', fontWeight: 600, color: '#4a9eff'}}>📅 Last 30 days</span>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600, border: '1px solid #4a9eff'}}>▶ Run</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>Show SQL</span>
  </div>
  <div style={{fontSize: '12px', opacity: 0.7, margin: '12px 0 8px'}}>Connector: <strong>db-jde</strong> · Key columns: <strong>JCPID, JCVERS, JCJOBNBR</strong> · Action: <strong>fetch-single invoices bip {'{JCJOBNBR}'}</strong></div>
  <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px'}}>
    <span style={{fontSize: '12px', fontWeight: 700, color: '#f87171'}}>3 anomaly(ies)</span>
    <span style={{flex: 1}} />
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>Integrate selection (2)</span>
  </div>
  <div style={{fontFamily: 'monospace', fontSize: '11px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px'}}>
    <div style={{display: 'grid', gridTemplateColumns: '30px 1fr 1fr 1fr 1.4fr', padding: '6px 8px', opacity: 0.6, borderBottom: '1px solid rgba(255,255,255,0.08)'}}><span /><span>JCPID</span><span>JCVERS</span><span>JCJOBNBR</span><span>JCSTDTIM</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '30px 1fr 1fr 1fr 1.4fr', padding: '6px 8px', background: 'rgba(74,158,255,0.06)'}}><span>☑</span><span>R42565</span><span>ZJDE0001</span><span>1353306</span><span>2026-10-08 06:12</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '30px 1fr 1fr 1fr 1.4fr', padding: '6px 8px', background: 'rgba(74,158,255,0.06)'}}><span>☑</span><span>R42565</span><span>ZJDE0001</span><span>1353412</span><span>2026-10-09 06:10</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '30px 1fr 1fr 1fr 1.4fr', padding: '6px 8px'}}><span>☐</span><span>R42565</span><span>ZJDE0002</span><span>1353520</span><span>2026-10-10 06:11</span></div>
  </div>
</div>

1. **Pick a check** and a **period** (last 30 days by default), then **Run**. **Show SQL** displays the query of the check.
2. The header line recalls the connector, the key columns and the configured action. The result reads **No anomaly** or *N anomaly(ies)*, every row being one anomaly in the standard grid — search, filters, column chooser and export.
3. When the check carries an action, tick the rows and click **Integrate selection (N)**. A confirmation recalls that the jobs are extracted and processed like a normal run — validation, storage and sending follow the template settings.
4. After the action, the check runs again: integrated rows drop out of the result, and a summary banner shows *N integrated, N failed out of N*, with the name of every failed job.

---

## API

| Endpoint | Purpose |
|---|---|
| `GET /api/reports/integrity` | Lists the configured checks (name, description, connector, key columns, SQL). |
| `POST /api/reports/integrity/run` | Runs one check — body `{ "name", "dateFrom", "dateTo" }` — and returns the result columns and rows. |
| `POST /api/reports/integrity/action` | Runs the check's action on the selected rows — body `{ "name", "jobs": [...], "templates": [...], "hosts": [...] }` — and returns the per-job result and the summary. |

See the [API reference](/nomaubl/api-reference) for the full schemas.

---

## Tips & best practices

- **One question per check.** A check that answers a single question (*jobs not integrated*, *amounts that differ*) gives a result that can be acted on row by row.
- **Return the key columns.** Even without an action, key columns make each anomaly easy to trace back to its source record.
- **Bound the query with the period.** The date placeholders keep the query on the window the user picked and well under the timeout.
- **Point the action at the job number, not a label.** The job column must contain the JDE job number; rows without one are ignored by *Integrate selection*.
