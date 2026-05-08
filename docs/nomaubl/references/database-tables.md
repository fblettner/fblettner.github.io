---
title: Database Tables
description: "NomaUBL database schema reference — every table that backs the application: invoice archive, UBL header / lines / VAT, lifecycle events, validation errors, processing log, e-reporting, notifications and authentication. Functional descriptions, primary keys and field references for Oracle and PostgreSQL."
keywords: [NomaUBL, database, schema, tables, F564230, F564231, F564233, F564234, F564235, F564236, F564237, F564250, F564251, F564252, F564253, F564254, F564260, F564261, F564262, JDE Julian, BLOB, BT-, Oracle, PostgreSQL]
---

# Database Tables

NomaUBL persists every artefact of the e-invoicing pipeline — the original ERP source, the generated UBL document, the per-line and per-VAT-rate breakdown, the lifecycle events, the validation errors, the runtime processing log, the e-reporting submissions and the user / role / session triplet.

The schema is **identical on Oracle and PostgreSQL** — the DDL is dialect-aware (`BLOB` ↔ `BYTEA`, `NUMBER` ↔ `INTEGER`, `VARCHAR2` ↔ `VARCHAR`) but the column names, primary keys and semantics are the same. Every table name is configurable in the `db-nomaubl` system template and created by the **Initialize Database** action of the *Settings → Database Connectors* screen.

The schema applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. Tables follow the JDE `F564XXX` naming convention because the platform was built around JDE first; the conventions are functional, not source-specific.

:::info[Schema changes — 2026.05.5]
Release **2026.05.5** introduces several structural changes:
- **E-reporting tables renumbered**: `F564240` / `F564241` / `F564242` become `F564260` / `F564261` / `F564262`. The `RGTXFT` column type moves from `CLOB` / `TEXT` to `BLOB` / `BYTEA`. Child-table FK columns shift from `RGUKID` to `RHUKID` (lifecycle) and `RIUKID` (mapping).
- **Runtime log `F564237`**: new `FEUKID` PK, columns renamed (`FEMODE` → `FERMK`, `FEMETHOD` → `FERMK2`, `FEMESSAGE` → `FEK74MSG1`).
- **Authentication overhauled**: `F564252` (sessions) renamed to `SSLSID` / `SSSTDTIM` / `SSETDTIM`. `F564251` (roles) now holds identity only — grants moved to the new `F564254` table (`PMROLE` / `PMCRAPPID` / `PMCRAPPVAL`). User columns (`F564250`) now follow JDE conventions (`USLDAPPSWD`, `USENABL`, `USSECF3`, audit `USUPMJ` / `USTDAY`).
- **Notifications `F564253`** (introduced in 2026.05.3) is now documented in this reference page.
:::

---

## Naming conventions

| Convention | Detail |
|---|---|
| **Table identifier** | `F564XXX` — JDE-style file prefix. Configurable per environment. |
| **Column prefix** | Two-letter prefix tied to the table (`FE` for archive, `UH` for UBL header, `UL` for lines, `UV` for VAT / validation, `US` for status / users, `RG`/`RH`/`RI` for e-reporting…). |
| **Dates** | JDE Julian — integer in `CYYDDD` format where `C = 1` for 2000–2099, `YY` is the last two digits of the year, `DDD` is the day of the year. Example: `125108` → 2025-04-18. Converted on the fly for the UI. |
| **Times** | Integer in `HHMMSS` format. Example: `143052` → 14:30:52. |
| **Scaled numerics** | Some amounts and rates are stored as integers scaled by a fixed factor — divide on read: `ATXA × 100` (2 decimals), `QNTY × 10000` (4 decimals), `UPRC × 10000` (4 decimals), `TXR1 × 1000` (3 decimals). |
| **XML payloads** | Stored as `BLOB` (Oracle) / `BYTEA` (Postgres) for JDE source XML, generated UBL **and e-reporting XML** (since 2026.05.5). UTF-8 bytes throughout. |
| **Auto-incremented sequences** | `SEQN` columns use `COALESCE(MAX(SEQN), 0) + 1` on insert — no Oracle sequence or Postgres serial required. |

---

## Schema overview

<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '28px 0', display: 'block'}}>
  <defs>
    <marker id="dt-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/>
    </marker>
    <marker id="dt-arrow-blue-dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff" opacity="0.6"/>
    </marker>
    <marker id="dt-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/>
    </marker>
    <marker id="dt-arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#c084fc"/>
    </marker>
    <marker id="dt-arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4ade80"/>
    </marker>
    <linearGradient id="dt-g-blue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/>
      <stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/>
    </linearGradient>
    <linearGradient id="dt-g-blue-strong" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/>
      <stop offset="100%" stopColor="#2b8cff" stopOpacity="0.1"/>
    </linearGradient>
    <linearGradient id="dt-g-purple" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#c084fc" stopOpacity="0.18"/>
      <stop offset="100%" stopColor="#c084fc" stopOpacity="0.04"/>
    </linearGradient>
    <linearGradient id="dt-g-green" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.18"/>
      <stop offset="100%" stopColor="#4ade80" stopOpacity="0.04"/>
    </linearGradient>
    <linearGradient id="dt-g-neutral" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/>
    </linearGradient>
  </defs>

  <rect x="20" y="20" width="960" height="270" rx="14" fill="#4a9eff" fillOpacity="0.03" stroke="#4a9eff" strokeOpacity="0.2" strokeWidth="1"/>
  <text x="40" y="48" fill="#4a9eff" fontSize="12" fontWeight="800" letterSpacing="1.8" fontFamily="system-ui, sans-serif">📋 INVOICE DOMAIN</text>

  <rect x="50" y="72" width="180" height="56" rx="10" fill="url(#dt-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="140" y="94" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">F564230</text>
  <text x="140" y="113" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Source archive</text>

  <rect x="50" y="156" width="180" height="56" rx="10" fill="url(#dt-g-blue)" stroke="#4a9eff" strokeWidth="1.2" strokeDasharray="4 3" strokeOpacity="0.7"/>
  <text x="140" y="178" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.92">F564237</text>
  <text x="140" y="197" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Processing log</text>

  <line x1="140" y1="128" x2="140" y2="156" stroke="#4a9eff" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" markerEnd="url(#dt-arrow-blue-dim)"/>
  <text x="155" y="146" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.7">FEWDS1</text>

  <rect x="290" y="72" width="180" height="56" rx="10" fill="url(#dt-g-blue-strong)" stroke="#60a5fa" strokeWidth="2"/>
  <text x="380" y="94" fill="#60a5fa" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">F564231</text>
  <text x="380" y="113" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.88">UBL header (BT-*)</text>

  <line x1="230" y1="100" x2="290" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#dt-arrow-blue)"/>
  <text x="260" y="93" fill="#4a9eff" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">DOC/DCT/KCO</text>

  <rect x="540" y="34" width="180" height="36" rx="8" fill="url(#dt-g-neutral)" stroke="#475569" strokeWidth="1"/>
  <text x="555" y="57" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564233</text>
  <text x="710" y="57" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.7">Lines</text>

  <rect x="540" y="82" width="180" height="36" rx="8" fill="url(#dt-g-neutral)" stroke="#475569" strokeWidth="1"/>
  <text x="555" y="105" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564234</text>
  <text x="710" y="105" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.7">VAT summary</text>

  <rect x="540" y="130" width="180" height="36" rx="8" fill="url(#dt-g-neutral)" stroke="#475569" strokeWidth="1"/>
  <text x="555" y="153" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564235</text>
  <text x="710" y="153" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.7">Lifecycle</text>

  <rect x="540" y="178" width="180" height="36" rx="8" fill="url(#dt-g-neutral)" stroke="#475569" strokeWidth="1"/>
  <text x="555" y="201" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564236</text>
  <text x="710" y="201" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.7">Validation errors</text>

  <path d="M 470 100 L 500 100" stroke="#64748b" strokeWidth="1.4" fill="none"/>
  <path d="M 500 52 L 500 196" stroke="#64748b" strokeWidth="1.4" fill="none"/>
  <line x1="500" y1="52" x2="540" y2="52" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dt-arrow-slate)"/>
  <line x1="500" y1="100" x2="540" y2="100" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dt-arrow-slate)"/>
  <line x1="500" y1="148" x2="540" y2="148" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dt-arrow-slate)"/>
  <line x1="500" y1="196" x2="540" y2="196" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dt-arrow-slate)"/>
  <text x="513" y="240" fill="currentColor" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.65">+ LNID / SEQN</text>

  <rect x="20" y="310" width="960" height="170" rx="14" fill="#c084fc" fillOpacity="0.03" stroke="#c084fc" strokeOpacity="0.2" strokeWidth="1"/>
  <text x="40" y="338" fill="#c084fc" fontSize="12" fontWeight="800" letterSpacing="1.8" fontFamily="system-ui, sans-serif">📊 E-REPORTING DOMAIN</text>

  <rect x="50" y="362" width="180" height="56" rx="10" fill="url(#dt-g-purple)" stroke="#c084fc" strokeWidth="1.5"/>
  <text x="140" y="384" fill="#c084fc" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">F564260</text>
  <text x="140" y="403" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Report log</text>

  <rect x="290" y="344" width="180" height="36" rx="8" fill="url(#dt-g-purple)" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="367" fill="#c084fc" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564261</text>
  <text x="460" y="367" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Report lifecycle</text>

  <rect x="290" y="400" width="180" height="36" rx="8" fill="url(#dt-g-purple)" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="423" fill="#c084fc" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564262</text>
  <text x="455" y="423" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Invoice mapping</text>
  <line x1="470" y1="418" x2="496" y2="418" stroke="#c084fc" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.7"/>
  <text x="500" y="421" fill="#c084fc" fontSize="10" fontFamily="ui-monospace, monospace" opacity="0.85">⇢ F564231 (cross-domain FK)</text>

  <path d="M 230 390 L 260 390" stroke="#c084fc" strokeWidth="1.4" fill="none"/>
  <path d="M 260 362 L 260 418" stroke="#c084fc" strokeWidth="1.4" fill="none"/>
  <line x1="260" y1="362" x2="290" y2="362" stroke="#c084fc" strokeWidth="1.4" markerEnd="url(#dt-arrow-purple)"/>
  <line x1="260" y1="418" x2="290" y2="418" stroke="#c084fc" strokeWidth="1.4" markerEnd="url(#dt-arrow-purple)"/>
  <text x="240" y="358" fill="#c084fc" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.85">RHUKID</text>
  <text x="240" y="431" fill="#c084fc" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.85">RIUKID</text>

  <rect x="20" y="500" width="960" height="180" rx="14" fill="#4ade80" fillOpacity="0.03" stroke="#4ade80" strokeOpacity="0.2" strokeWidth="1"/>
  <text x="40" y="528" fill="#4ade80" fontSize="12" fontWeight="800" letterSpacing="1.8" fontFamily="system-ui, sans-serif">🔐 AUTHENTICATION + NOTIFICATIONS DOMAIN</text>

  <rect x="50" y="552" width="180" height="56" rx="10" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1.5"/>
  <text x="140" y="574" fill="#4ade80" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">F564250</text>
  <text x="140" y="593" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Users</text>

  <rect x="290" y="534" width="180" height="32" rx="8" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="555" fill="#4ade80" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564251</text>
  <text x="460" y="555" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Roles</text>

  <rect x="290" y="572" width="180" height="32" rx="8" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="593" fill="#4ade80" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564254</text>
  <text x="460" y="593" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Permissions (rows)</text>

  <rect x="290" y="610" width="180" height="32" rx="8" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="631" fill="#4ade80" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564252</text>
  <text x="460" y="631" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Sessions</text>

  <rect x="540" y="552" width="180" height="56" rx="10" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1.2" strokeDasharray="4 3" strokeOpacity="0.7"/>
  <text x="630" y="574" fill="#4ade80" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.92">F564253</text>
  <text x="630" y="593" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Notifications</text>

  <path d="M 230 580 L 260 580" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" fill="none"/>
  <path d="M 260 550 L 260 626" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" fill="none"/>
  <line x1="260" y1="550" x2="290" y2="550" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#dt-arrow-green)"/>
  <line x1="260" y1="588" x2="290" y2="588" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#dt-arrow-green)"/>
  <line x1="260" y1="626" x2="290" y2="626" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#dt-arrow-green)"/>
  <line x1="470" y1="588" x2="540" y2="580" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#dt-arrow-green)"/>
  <text x="265" y="545" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.85">USROLE</text>
  <text x="265" y="660" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.85">SSUSER + PMROLE + NTUSER</text>
</svg>

<div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', margin: '0 0 24px', padding: '10px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', fontSize: '11px', opacity: 0.78}}>
  <span><span style={{display: 'inline-block', width: '24px', height: '0', verticalAlign: 'middle', borderTop: '1.5px solid #4a9eff', marginRight: '6px'}}></span>solid arrow — hard FK relationship</span>
  <span><span style={{display: 'inline-block', width: '24px', height: '0', verticalAlign: 'middle', borderTop: '1.5px dashed #4a9eff', marginRight: '6px'}}></span>dashed arrow — soft / cross-domain link</span>
  <span><span style={{display: 'inline-block', width: '12px', height: '12px', verticalAlign: 'middle', borderRadius: '3px', background: 'rgba(74,158,255,0.18)', border: '2px solid #60a5fa', marginRight: '6px'}}></span>highlighted card — domain anchor</span>
</div>

---

## Invoice domain

The seven tables that carry an invoice through its complete life — from the raw ERP payload to its definitive lifecycle status.

### F564230 — Source archive & PA submission log

Stores the **original ERP XML** alongside the routing flags and the PA transaction UUID returned after submission. One row per source document.

- **Primary key**: `FEDOC + FEDCT + FEKCO`
- **Notable**: `FETXFT` carries the source XML payload (UTF-8 bytes); `FEUKIDSZ` holds the UUID returned by the Plateforme Agréée after successful import; `FEEV10` is the *send to PA* flag (`1` = yes, `2` = no).

| Field | Type | Description |
|---|---|---|
| `FEDOC` | Integer | Document number (PK). |
| `FEDCT` | Text(2) | Document type (PK). |
| `FEKCO` | Text(5) | Company code (PK). |
| `FEAA10` | Text(10) | Activity / routing code. |
| `FEAA20` | Text(25) | Document sub-type. |
| `FEALKY` | Text(25) | Customer alpha key. |
| `FEAEXP` | Decimal × 100 | Document amount (scaled). |
| `FEIVD` | Date (Julian) | Invoice date. |
| `FEARDU` | Date (Julian) | Due date. |
| `FEUPMJ` | Date (Julian) | Last update date. |
| `FEPID` | Text(10) | Program ID. |
| `FEVERS` | Text(5) | Version. |
| `FEUSER` | Text(10) | User who created the row. |
| `FEJOBN` | Text(10) | Job name. |
| `FEUPMT` | Time (HHMMSS) | Last update time. |
| `FEWDS1` | Text(80) | Source file name. |
| `FEEV01` | Text(25) | Routing code. |
| `FEAC04` | Text(5) | Business unit / office. |
| `FEEV10` | Integer | *Send to PA* flag — `1` = yes, `2` = no. |
| `FETXFT` | BLOB | Original ERP XML (UTF-8 bytes). |
| `FEUKIDSZ` | Text(100) | PA platform transaction UUID returned on import. |

### F564231 — UBL invoice header

The **EN 16931** view of the invoice plus the generated UBL 2.1 document. One row per invoice; same primary key as F564230.

- **Primary key**: `UHDOC + UHDCT + UHKCO`
- **Notable**: `UHTXFT` stores the generated UBL document (UTF-8 bytes); `UHK74RSCD` is the current lifecycle status code from the *statuses* reference list; `UHY56BAR` is the BAR routing code (`B2B` / `B2G` / `B2C` / `B2BINT` / `OUTOFSCOPE` / …).

| Field | Type | Description |
|---|---|---|
| `UHDOC` | Integer | Document number (PK · FK → F564230). |
| `UHDCT` | Text(2) | Document type (PK). |
| `UHKCO` | Text(5) | Company code (PK). |
| `UHODOC` / `UHODCT` / `UHOKCO` | Integer / Text(2) / Text(5) | Original (referenced) document — non-empty for credit notes pointing at a prior invoice. |
| `UHK74FLEN` | Text(25) | UBL invoice number — BT-1. |
| `UHK74XMLV` | Text(50) | Profile ID — BT-23. |
| `UHK74LDDJ` | Date (Julian) | Issue date — BT-2. |
| `UHDDJ` | Date (Julian) | Due date — BT-9. |
| `UHK74LEDT` | Text(3) | Invoice type code — BT-3. |
| `UHATXA` | Decimal × 100 | Tax-exclusive amount — BT-109. |
| `UHSTAM` | Decimal × 100 | Tax amount — BT-110. |
| `UHAG` | Decimal × 100 | Tax-inclusive amount — BT-112. |
| `UHAAP` | Decimal × 100 | Amount due — BT-115. |
| `UHCRCD` | Text(3) | Currency code — BT-5. |
| `UH55RSF` | Text(40) | Order reference — BT-13. |
| `UHY74CTID` | Integer | Contract reference — BT-12. |
| `UHAN8` | Integer | Customer AN8 (JDE address book). |
| `UHALKY` | Text(25) | Customer alpha key. |
| `UHALPH` | Text(40) | Customer name — BT-44. |
| `UHTXFT` | BLOB | Generated UBL 2.1 XML (UTF-8 bytes). |
| `UHK74RSCD` | Text(4) | Current lifecycle status code (see *Status Reference*). |
| `UHK74MSG1` | Text(500) | Status message. |
| `UHY56EPID` / `UHY56EPSC` | Text(100) / Text(25) | Customer endpoint ID + scheme — BT-49 / BT-49-1. |
| `UHY56PYIN` | Text(3) | Payment means code — BT-81. |
| `UHY56BAR` | Text(10) | BAR routing code (`B2B`, `B2G`, `B2C`, `B2BINT`, `OUTOFSCOPE`, …). |
| `UHY56RSRC` / `UHY56RSRCL` | Text(50) / Text(250) | Rejection reason code + label. |
| `UHY56ACTN` / `UHY56ACTNL` | Text(10) / Text(250) | Expected action code + label. |
| `UHY56ACTND` | Text(1000) | Status note (raw JSON returned by the PA). |
| `UHUSER` / `UHPID` / `UHJOBN` / `UHUPMJ` / `UHTDAY` | — | Audit columns — created by, program, job, last-update date and time. |

### F564233 — UBL invoice lines

One row per UBL line. Stored values for quantity, price and tax rate are **scaled** — divide on read.

- **Primary key**: `ULDOC + ULDCT + ULKCO + ULLNID`
- **Notable**: `ULLNID` is the JDE line ID × 1000 (BT-126). `ULY56QNTY` ÷ 10000, `ULUPRC` ÷ 10000, `ULATXA` ÷ 100, `ULTXR1` ÷ 1000.

| Field | Type | Description |
|---|---|---|
| `ULDOC` / `ULDCT` / `ULKCO` | — | Document number / type / company (PK · FK → F564231). |
| `ULLNID` | Integer × 1000 | Line ID — BT-126. |
| `ULDSC1` | Text(40) | Item description — BT-153. |
| `ULLITM` | Text(35) | Seller item ID — BT-155. |
| `ULY56QNTY` | Decimal × 10000 | Invoiced quantity — BT-129. |
| `ULY56UM` | Text(3) | Unit of measure code — BT-130. |
| `ULUPRC` | Decimal × 10000 | Unit price — BT-146. |
| `ULATXA` | Decimal × 100 | Line extension amount — BT-131. |
| `ULREBL` | Decimal × 10000 | Allowance / charge — BT-136. |
| `ULCRCD` | Text(3) | Currency code. |
| `ULK74TVCC` | Text(2) | Tax category code — BT-151. |
| `ULTXR1` | Decimal × 1000 | Tax rate — BT-152. |
| `ULK74EXRC` | Text(100) | Tax exemption reason — BT-121. |
| `ULUSER` / `ULPID` / `ULJOBN` / `ULUPMJ` / `ULTDAY` | — | Audit columns. |

### F564234 — UBL VAT summary

One row per **(tax category, tax rate, currency)** breakdown carried by the invoice — the EN 16931 BG-23 group.

- **Primary key**: `UVDOC + UVDCT + UVKCO + UVSEQN`
- **Notable**: `UVSEQN` is auto-incremented via `COALESCE(MAX(UVSEQN), 0) + 1` on insert.

| Field | Type | Description |
|---|---|---|
| `UVDOC` / `UVDCT` / `UVKCO` | — | Document number / type / company (PK · FK → F564231). |
| `UVSEQN` | Integer | Sequence number (PK). |
| `UVK74TVCC` | Text(2) | Tax category code — BT-118. |
| `UVTXR1` | Decimal × 1000 | Tax rate — BT-119. |
| `UVATXA` | Decimal × 100 | Taxable amount — BT-116. |
| `UVSTAM` | Decimal × 100 | Tax amount — BT-117. |
| `UVCRCD` | Text(3) | Currency code. |
| `UVK74EXRC` | Text(500) | Tax exemption reason — BT-120. |
| `UVUSER` / `UVPID` / `UVJOBN` / `UVUPMJ` / `UVTDAY` | — | Audit columns. |

### F564235 — Lifecycle events

The **append-only history** of every status the invoice has been in. One row per event, in submission order. This is the source of the *History* tab in the invoice detail modal.

- **Primary key**: `USDOC + USDCT + USKCO + USSEQN`
- **Notable**: `USSEQN` is auto-incremented; events are written by `StatusTransition.apply()` together with the corresponding update of `F564231.UHK74RSCD`.

| Field | Type | Description |
|---|---|---|
| `USDOC` / `USDCT` / `USKCO` | — | Document number / type / company (PK · FK → F564231). |
| `USSEQN` | Integer | Event sequence (PK). |
| `USK74RSCD` | Text(4) | Status code at this event. |
| `USK74MSG1` | Text(500) | Status message. |
| `USTRDJ` | Date (Julian) | Event date. |
| `USY56RSRC` / `USY56RSRCL` | Text(50) / Text(250) | Rejection reason code + label. |
| `USY56ACTN` / `USY56ACTNL` | Text(10) / Text(250) | Expected action code + label. |
| `USY56ACTND` | Text(1000) | Status note (raw JSON from the PA). |
| `USUSER` / `USPID` / `USJOBN` / `USUPMJ` / `USTDAY` | — | Audit columns. |

### F564236 — UBL validation errors

XSD and Schematron errors recorded for an invoice. One row per error / warning — feeds the *History → Validation errors* group of the invoice detail modal and the *Integration Errors* page when no matching `F564231` row is found.

- **Primary key**: `UVDOC + UVDCT + UVKCO + UVSEQN`
- **Notable**: `UVY56LEVEL` is `ERROR` / `WARNING` / `INFO`. `UVSRCL` flags the validator: `XSD`, `SCH` (Schematron) or `DB`.

| Field | Type | Description |
|---|---|---|
| `UVDOC` / `UVDCT` / `UVKCO` | — | Document number / type / company (PK; can be orphan when no F564231 row). |
| `UVSEQN` | Integer | Error sequence (PK). |
| `UVY56LEVEL` | Text(10) | Severity — `ERROR`, `WARNING`, `INFO`. |
| `UVSRCL` | Text(25) | Source — `XSD` / `SCH` / `DB`. |
| `UVY56RULE` | Text(50) | Rule ID (e.g. `BR-01`, `PEPPOL-EN16931-R001`). |
| `UVK74MSG1` | Text(2000) | Error / warning message. |
| `UVUSER` / `UVPID` / `UVJOBN` / `UVUPMJ` / `UVTDAY` | — | Audit columns. |

### F564237 — Runtime processing log

Every event written by `RuntimeLogHandler` during XML / UBL / BIP / FTP processing — `START`, `END` and any intermediate method. Backs the *Processing Log* page (Management menu).

- **Primary key**: `FEUKID` (sequence computed via `COALESCE(MAX(FEUKID),0)+1` on insert — used as a tiebreaker for events sharing the same timestamp).
- **Notable**: `FERMK` is the processing type (`SINGLE`, `BURST`, `UBL`, `BOTH`, `UBL_VALIDATE`, `PROCESS`, `AUTO`); `FETMPL` is the template name (empty for UBL processing); `FERMK2` is `START` / `END` or the failing method name on errors.

| Field | Type | Description |
|---|---|---|
| `FEUKID` | Integer (BIGINT) | Sequence id (PK · stable insert order). |
| `FEWDS1` | Text(60) | Source file name — links to `F564230.FEWDS1`. |
| `FEUPMJ` | Date (Julian) | Event date. |
| `FEUPMT` | Time (HHMMSS) | Event time. |
| `FERMK` | Text(30) | Processing type (renamed from `FEMODE`). |
| `FETMPL` | Text(40) | Template name. |
| `FERMK2` | Text(30) | Operation — `START` / `END` / failing method name (renamed from `FEMETHOD`). |
| `FEK74MSG1` | Text(1024) | Status message or error detail (renamed from `FEMESSAGE`). |

---

## E-Reporting domain

Three tables that record the *(period, flux, company)* declarations submitted to the Plateforme Agréée — flux **10.1** (B2BINT detail) and **10.3** (B2C / OUTOFSCOPE aggregated).

### F564260 — Report log

One row per generated report. Stores the `<ReportDocument>` XML and the latest known status.

- **Primary key**: `RGUKID` (globally unique sequence — no flux / company component).
- **Notable**: `RGY56BAR` is `10.1` or `10.3`; `RGDCT` is the document type (`IN` initial, `RE` replacement, `CO` cancellation, `MO` modification); `RGTXFT` carries the generated XML as **UTF-8 bytes** (BLOB / BYTEA since 2026.05.5).

| Field | Type | Description |
|---|---|---|
| `RGUKID` | Integer (BIGINT) | Report sequence id (PK). |
| `RGY56BAR` | Text(10) | Flux code — `10.1` / `10.3`. |
| `RGKCO` | Text(5) | Issuing company code. |
| `RGDCT` | Text(2) | Document type — `IN` / `RE` / `CO` / `MO`. |
| `RGEFTJ` | Date (Julian) | Period start. |
| `RGEFDJ` | Date (Julian) | Period end. |
| `RGY56EPID` | Text(125) | Issuer SIREN (scheme `0002`). |
| `RGK74RSCD` | Text(10) | Current lifecycle status code. |
| `RGK74MSG1` | Text(1024) | Last status message. |
| `RGNINV` | Integer | Number of invoices included. |
| `RGTXFT` | BLOB | Generated `<ReportDocument>` XML (UTF-8 bytes). |
| `RGUSER` / `RGPID` / `RGJOBN` / `RGUPMJ` / `RGTDAY` | — | Audit columns. |

### F564261 — Report lifecycle events

The append-only history of statuses for a given report — same shape as F564235 for invoices.

- **Primary key**: `RHUKID + RHSEQN`
- **Notable**: `RHSEQN` is auto-incremented. `RHUKID` is the FK to the parent log (`F564260.RGUKID`).

| Field | Type | Description |
|---|---|---|
| `RHUKID` | Integer (BIGINT) | Report sequence id (PK · FK → F564260.RGUKID). |
| `RHY56BAR` | Text(10) | Flux code (denormalised for query convenience). |
| `RHSEQN` | Integer | Event sequence (PK). |
| `RHK74RSCD` | Text(10) | Status code at this event. |
| `RHK74MSG1` | Text(1024) | Status message. |
| `RHUSER` / `RHPID` / `RHJOBN` / `RHUPMJ` / `RHTDAY` | — | Audit columns. |

### F564262 — Report / invoice mapping

Tracks **which invoices were included in which report** — composite PK avoids re-including invoices that were already declared on a prior run.

- **Primary key**: `RIUKID + RIDOC + RIDCT + RIKCO`
- **Notable**: A secondary index on `(RIDOC, RIDCT, RIKCO, RIY56BAR)` answers "in which report was this invoice declared?" efficiently.

| Field | Type | Description |
|---|---|---|
| `RIUKID` | Integer (BIGINT) | Report sequence id (PK · FK → F564260.RGUKID). |
| `RIY56BAR` | Text(10) | Flux code. |
| `RIDOC` / `RIDCT` / `RIKCO` | — | Invoice triplet (PK · FK → F564231). |
| `RIUSER` / `RIPID` / `RIJOBN` / `RIUPMJ` / `RITDAY` | — | Audit columns. |

---

## Authentication + notifications domain

Five tables for built-in user / role / session / permissions management plus the notifications inbox. The auth block is active when `authEnabled = Y` in the *global* template.

### F564250 — Users

One row per user. Passwords are stored as **PBKDF2-HMAC-SHA256** hashes — never in clear text.

- **Primary key**: `USUSER`
- **Notable**: `USLDAPPSWD` format is `iterations:base64(salt):base64(hash)` (bytes). `USSECF3 = 'Y'` forces a password change on the next login (default for new accounts).

| Field | Type | Description |
|---|---|---|
| `USUSER` | Text(10) | Username (PK). |
| `USLDAPPSWD` | BLOB | PBKDF2-HMAC-SHA256 hash — `iterations:salt:hash` (renamed from `USPASSWD`). |
| `USROLE` | Text(36) | Role name (FK → F564251.RLROLE). |
| `USFULLNAME` | Text(50) | Display name. |
| `USEMAIL` | Text(75) | Email address. |
| `USENABL` | Text(1) | `Y` = active, `N` = disabled (renamed from `USACTIVE`). |
| `USSECF3` | Text(30) | `Y` = must change password on next login (renamed from `USFORCEPASSWD`). |
| `USUPMJ` | Date (Julian) | Account creation / last update date. |
| `USTDAY` | Time (HHMMSS) | Matching time. |

### F564251 — Roles (identity only)

One row per role. As of 2026.05.5, this table stores **role identity only** — the grants (pages, companies, read-only, settings access) live row-by-row in `F564254`.

- **Primary key**: `RLROLE`
- **Notable**: No schema change is needed to introduce a new permission dimension — just insert rows with a new `PMCRAPPID` in `F564254`.

| Field | Type | Description |
|---|---|---|
| `RLROLE` | Text(36) | Role identifier (PK). |
| `RLROLEDESC` | Text(255) | Human-readable description. |
| `RLUSER` / `RLPID` / `RLJOBN` / `RLUPMJ` / `RLTDAY` | — | Audit columns. |

### F564252 — Sessions

One row per active session. Sessions are validated on every API request; expired rows are pruned by the auth handler.

- **Primary key**: `SSLSID` (UUID, renamed from `SSTOKEN`)
- **Notable**: The token is sent as `Authorization: Bearer <SSLSID>` on every API call. Two indexes on `SSUSER` and `SSETDTIM` keep lookups and cleanup efficient.

| Field | Type | Description |
|---|---|---|
| `SSLSID` | Text(100) | Session token / UUID (PK). |
| `SSUSER` | Text(10) | Username (FK → F564250.USUSER). |
| `SSSTDTIM` | Timestamp | Session creation timestamp (renamed from `SSCREATED`). |
| `SSETDTIM` | Timestamp | Session expiry timestamp (renamed from `SSEXPIRES`). |

### F564253 — Notifications

One row per delivered notification. Backs the portal **inbox** and the **bell** in the utilities bar (see [Notifications](../application/notifications.md)).

- **Primary key**: `NTUKID` (globally unique sequence).
- **Notable**: `(NTDOC, NTDCT, NTKCO)` is the FK back to `F564231` when the notification relates to an invoice (nullable for system alerts). `NTUSER` is the recipient username, or `*` for a broadcast (auth-disabled mode). `NTEV01` is the read flag (`Y` = read, `N` = unread) — drives the bell badge.

| Field | Type | Description |
|---|---|---|
| `NTUKID` | Integer (BIGINT) | Sequence id (PK). |
| `NTUSER` | Text(10) | Recipient username (`*` = broadcast). |
| `NTY56RULE` | Text(20) | Name of the rule that fired the dispatch. |
| `NTMSGP` | Text(40) | Short subject / title. |
| `NTK74MSG2` | Text(1024) | Full message body. |
| `NTDOC` / `NTDCT` / `NTKCO` | mixed | Invoice triplet (FK → F564231 when populated). |
| `NTK74RSCD` | Text(10) | Status code that triggered the rule. |
| `NTK74MSG1` | Text(1024) | Status message. |
| `NTY56RSRC` / `NTY56RSRCL` | Text(50) / Text(250) | PA rejection reason code + label. |
| `NTY56ACTN` / `NTY56ACTNL` | Text(10) / Text(250) | Expected action code + label. |
| `NTEV01` | Text(1) | Read flag (`Y` / `N`). |
| `NTUPMJ` / `NTTDAY` | Date / Time | Creation timestamp. |

A daily sweep driven by `global.notificationsRetentionDays` (default 90, `0` = disabled) deletes rows older than the retention window.

### F564254 — Role permission grants (row-based RBAC)

New table introduced in **2026.05.5**. Replaces the CSV columns `RLPAGES` / `RLCOMPANIES` / `RLSETTINGS` / `RLREADONLY` formerly on `F564251` with typed rows. One row per `(role, permission type, value)` triplet.

- **Primary key**: `(PMROLE, PMCRAPPID, PMCRAPPVAL)`
- **Notable**: An empty result set for a given `(role, type)` means *unrestricted* on that dimension. Adding a new permission dimension is an INSERT — not a DDL change. Drop + Init Database re-seeds the default grants without touching existing role rows.

| Field | Type | Description |
|---|---|---|
| `PMROLE` | Text(36) | Role identifier (PK · FK → F564251.RLROLE). |
| `PMCRAPPID` | Text(30) | Permission type — `page` / `company` / `feature`. |
| `PMCRAPPVAL` | Text(175) | Value within the type — page id, company code, or feature name (`settings`, `readonly`, …). |
| `PMENABL` | Text(1) | `Y` = grant, `N` = explicit deny. |
| `PMUSER` / `PMPID` / `PMJOBN` / `PMUPMJ` / `PMTDAY` | — | Audit columns. |

Currently used `PMCRAPPID` values:

| Type | `PMCRAPPVAL` | Effect |
|---|---|---|
| `page` | page id (e.g. `dashboard`, `invoices`) | Page allowed for the role. |
| `company` | company code (`KCO`) | Company allowed for the role. |
| `feature` | `settings` | Role can access the *Configuration* menus. |
| `feature` | `readonly` | Role is restricted to read-only (no edit / delete / resend). |

---

## Recommended indexes

The DDL bundles a small set of indexes that every production deployment should keep — they back the most common queries from the UI:

| Index | Table | Columns | Used by |
|---|---|---|---|
| `F564231_STATUS_IX` | F564231 | `UHK74RSCD` | Dashboard counters and *E-Invoicing* status filters. |
| `F564231_DATE_IX` | F564231 | `UHK74LDDJ` | Date-range queries on the invoice list. |
| `F564231_CUST_IX` | F564231 | `UHAN8` | Customer-scoped views. |
| `F564230_UUID_IX` | F564230 | `FEUKIDSZ` | PA UUID look-up after import. |
| `F564260_PERIOD_IX` | F564260 | `RGKCO`, `RGY56BAR`, `RGEFDJ` | E-Reporting list filters. |
| `F564262_INV_IX` | F564262 | `RIDOC`, `RIDCT`, `RIKCO`, `RIY56BAR` | "In which report is this invoice?" lookup. |
| `F564250_ROLE_IX` | F564250 | `USROLE` | User → role join. |
| `F564252_USER_IX` | F564252 | `SSUSER` | Sign-out / list-sessions per user. |
| `F564252_EXP_IX` | F564252 | `SSETDTIM` | Expired-session pruning. |
| `F564253_USR_IX` | F564253 | `NTUSER`, `NTEV01`, `NTUPMJ DESC` | Bell badge + inbox sort. |
| `F564254_ROLE_IX` | F564254 | `PMROLE`, `PMCRAPPID` | Fast per-role grant resolution. |

The full DDL — including dialect-aware variants for Oracle and PostgreSQL — ships in the JAR under `sql/oracle/ddl.sql` and `sql/postgres/ddl.sql`, and is materialised on disk by **Initialize Database**.
