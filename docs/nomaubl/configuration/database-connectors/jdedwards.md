---
title: JD Edwards
description: "Configure the access to the JD Edwards database NomaUBL reads from when extracting BIP outputs: JDBC URL, credentials, schema, BIP table names and post-extraction record handling."
keywords: [NomaUBL, JD Edwards, JDE, database, JDBC, Oracle, BIP, BI Publisher, F95630, F95631, F9563110, BLOB, extraction, XDJOBNBR, RJJOBNBR]
---

# JD Edwards

This screen configures the access to the **JD Edwards database** NomaUBL reads from when extracting **BIP (BI Publisher) outputs** — both the XML data BLOBs and the rendered PDFs. It defines the JDBC connection, credentials, target schema, and the three JDE BIP tables NomaUBL traverses to recover a job's payload.

:::info[JD Edwards-specific page]
This is one of the **JDE-specific** parts of NomaUBL. Other Configuration pages are source-agnostic (JDE, SAP, NetSuite, custom ERP); this one only applies when the source is JD Edwards.
:::

The editor has **two tabs**:

1. **Connection** — JDBC URL, credentials, post-extraction record handling.
2. **Tables** — schema and the three JDE BIP tables.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jde-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jde-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jde-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#jde-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="92" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="286" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Connection</text>
  <rect x="338" y="28" width="64" height="24" rx="4" fill="transparent"/>
  <text x="370" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Tables</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Connection</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDBC URL</text>
  <rect x="340" y="98" width="440" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="114" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">jdbc:oracle:thin:@dbserver:1521/jde92t</text>

  <text x="240" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DB USER</text>
  <rect x="340" y="128" width="220" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="144" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">JDE_RO_USER</text>

  <text x="240" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DB PASSWORD</text>
  <rect x="340" y="158" width="220" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="174" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">••••••••••••</text>

  <text x="240" y="198" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REMOVE RD</text>
  <rect x="340" y="188" width="180" height="24" rx="5" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="430" y="204" fill="#fb923c" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">N ▾</text>
  <text x="528" y="204" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">delete BIP row after extract</text>

  <line x1="240" y1="226" x2="780" y2="226" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="248" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Tables tab — preview</text>
  <text x="240" y="270" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHEMA</text>
  <rect x="340" y="260" width="180" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="276" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>

  <rect x="240" y="296" width="540" height="22" rx="4" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="311" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Job Search Table     |  F95630   <text fill="#64748b">— JDE BIP job search</text></text>

  <rect x="240" y="320" width="540" height="22" rx="4" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="335" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">XML Data Table       |  F95631   <text fill="#64748b">— XML data BLOBs</text></text>

  <rect x="240" y="344" width="540" height="22" rx="4" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="359" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Rendered Output      |  F9563110 <text fill="#64748b">— rendered PDFs</text></text>

  <rect x="240" y="380" width="540" height="50" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="252" y="398" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">⚠ JD EDWARDS-SPECIFIC PAGE</text>
  <text x="252" y="416" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Only used when extracting BIP outputs directly from the JDE database.</text>

  <rect x="20" y="98" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="113" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Oracle JDBC</text>
  <text x="30" y="126" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">host:port/service_name</text>
  <line x1="200" y1="114" x2="340" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jde-arrow)"/>

  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Remove RD</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Y → delete BIP row after extract</text>
  <line x1="200" y1="206" x2="340" y2="202" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jde-arrow)"/>

  <rect x="820" y="318" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="333" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three BIP tables</text>
  <text x="830" y="346" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">job · XML BLOB · rendered PDF</text>
  <line x1="820" y1="334" x2="780" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jde-arrow)"/>
</svg>

---

## Tab 1 — Connection

### Connection

| Field | Description |
|---|---|
| **JDBC URL** | Oracle JDBC connection string for the JDE database (e.g. `jdbc:oracle:thin:@dbserver:1521/jde92t`). Format: `jdbc:oracle:thin:@host:port/service_name`. |

### Credentials

| Field | Description |
|---|---|
| **DB User** | JDE database account name with `SELECT` (and `DELETE` / `UPDATE` if Remove RD is set accordingly) on the BIP tables. |
| **DB Password** | Password for the DB account. |

### BIP Extraction

What NomaUBL does with the BIP **report-definition record** after a successful extraction.

| Field | Values | Description |
|---|---|---|
| **Remove RD** | `NO` / `REMOVE` / `UPDATE` | `NO` = leave the record untouched; `REMOVE` = delete the record from `F9563110`; `UPDATE` = write the rendered PDF back into the BLOB column (PDF only). |

Pick `NO` while validating an integration, switch to `REMOVE` once you trust the pipeline (keeps the queue clean), and use `UPDATE` only when downstream JDE consumers expect to find the rendered PDF in the BLOB.

---

## Tab 2 — Tables

### Schema

| Field | Description |
|---|---|
| **Schema SY** | JDE *System* schema where the three BIP tables live (e.g. `SY920`). All table names below are resolved within this schema. |

### Table Names

NomaUBL only needs read access to three JDE BIP tables to recover a job's full output. Defaults follow the JDE naming convention.

| Field | Default | Role |
|---|---|---|
| **F95630 – XMLP Data Output Repository** | `F95630` | Holds the **XML BLOBs** (`xdrpdubblb`). Acts as the join key for PDF retrieval. Job key column: `XDJOBNBR`. |
| **F95631 – XMLP Output Repository** | `F95631` | Holds the **PDF BLOBs** (`xorpdxpblb`). Joined to `F95630` on the output-GUID columns. |
| **F9563110 – Report Definition Job Control** | `F9563110` | Tracks the BIP report job request. Deleted by NomaUBL when **Remove RD = `REMOVE`**. Job key column: `RJJOBNBR`. |

The traversal is straightforward: NomaUBL identifies the candidate jobs in `F9563110`, picks the matching XML BLOB in `F95630`, and joins to `F95631` on the output GUID to fetch the PDF.

---

## Tips & best practices

- **Keep the BIP user separate from a regular JDE business account.** A dedicated DB account makes audit and revocation easier.
- **Grant the smallest set of privileges that matches the chosen Remove RD.** `SELECT` only is enough for `NO`; add `DELETE` for `REMOVE`; add `UPDATE` for `UPDATE`.
- **Validate the JDBC URL with a SQL client before saving.** Connection-string typos are the most common reason the connector fails to authenticate.
- **Override the table names only if your JDE deployment renamed them.** Stock JDE always uses `F95630` / `F95631` / `F9563110`; any deviation reflects a custom JDE setup.
- **Use `Remove RD = REMOVE` in production.** Leaving processed jobs in `F9563110` indefinitely bloats the queue and slows down subsequent BIP scans.
