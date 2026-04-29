---
title: Database Tables
description: "NomaUBL database schema reference — every table that backs the application: invoice archive, UBL header / lines / VAT, lifecycle events, validation errors, processing log, e-reporting and authentication. Functional descriptions, primary keys and field references for Oracle and PostgreSQL."
keywords: [NomaUBL, database, schema, tables, F564230, F564231, F564233, F564234, F564235, F564236, F564237, F564240, F564241, F564242, F564250, F564251, F564252, JDE Julian, BLOB, BT-, Oracle, PostgreSQL]
---

# Database Tables

NomaUBL persists every artefact of the e-invoicing pipeline — the original ERP source, the generated UBL document, the per-line and per-VAT-rate breakdown, the lifecycle events, the validation errors, the runtime processing log, the e-reporting submissions and the user / role / session triplet.

The schema is **identical on Oracle and PostgreSQL** — the DDL is dialect-aware (`BLOB` ↔ `BYTEA`, `NUMBER` ↔ `INTEGER`, `VARCHAR2` ↔ `VARCHAR`) but the column names, primary keys and semantics are the same. Every table name is configurable in the `db-nomaubl` system template and created by the **Initialize Database** action of the *Settings → Database Connectors* screen.

The schema applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. Tables follow the JDE `F564XXX` naming convention because the platform was built around JDE first; the conventions are functional, not source-specific.

---

## Naming conventions

| Convention | Detail |
|---|---|
| **Table identifier** | `F564XXX` — JDE-style file prefix. Configurable per environment. |
| **Column prefix** | Two-letter prefix tied to the table (`FE` for archive, `UH` for UBL header, `UL` for lines, `UV` for VAT / validation, `US` for status / users, `RG`/`RH`/`RI` for e-reporting…). |
| **Dates** | JDE Julian — integer in `CYYDDD` format where `C = 1` for 2000–2099, `YY` is the last two digits of the year, `DDD` is the day of the year. Example: `125108` → 2025-04-18. Converted on the fly for the UI. |
| **Times** | Integer in `HHMMSS` format. Example: `143052` → 14:30:52. |
| **Scaled numerics** | Some amounts and rates are stored as integers scaled by a fixed factor — divide on read: `ATXA × 100` (2 decimals), `QNTY × 10000` (4 decimals), `UPRC × 10000` (4 decimals), `TXR1 × 1000` (3 decimals). |
| **XML payloads** | Stored as `BLOB` (Oracle) / `BYTEA` (Postgres) for JDE source XML and generated UBL; as `CLOB` (Oracle) / `TEXT` (Postgres) for e-reporting XML. UTF-8 bytes throughout. |
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
  <text x="140" y="384" fill="#c084fc" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">F564240</text>
  <text x="140" y="403" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Report log</text>

  <rect x="290" y="344" width="180" height="36" rx="8" fill="url(#dt-g-purple)" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="367" fill="#c084fc" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564241</text>
  <text x="460" y="367" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Report lifecycle</text>

  <rect x="290" y="400" width="180" height="36" rx="8" fill="url(#dt-g-purple)" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="423" fill="#c084fc" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564242</text>
  <text x="455" y="423" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Invoice mapping</text>
  <line x1="470" y1="418" x2="496" y2="418" stroke="#c084fc" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.7"/>
  <text x="500" y="421" fill="#c084fc" fontSize="10" fontFamily="ui-monospace, monospace" opacity="0.85">⇢ F564231 (cross-domain FK)</text>

  <path d="M 230 390 L 260 390" stroke="#c084fc" strokeWidth="1.4" fill="none"/>
  <path d="M 260 362 L 260 418" stroke="#c084fc" strokeWidth="1.4" fill="none"/>
  <line x1="260" y1="362" x2="290" y2="362" stroke="#c084fc" strokeWidth="1.4" markerEnd="url(#dt-arrow-purple)"/>
  <line x1="260" y1="418" x2="290" y2="418" stroke="#c084fc" strokeWidth="1.4" markerEnd="url(#dt-arrow-purple)"/>
  <text x="260" y="455" fill="#c084fc" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.85">RGUKID</text>

  <rect x="20" y="500" width="960" height="180" rx="14" fill="#4ade80" fillOpacity="0.03" stroke="#4ade80" strokeOpacity="0.2" strokeWidth="1"/>
  <text x="40" y="528" fill="#4ade80" fontSize="12" fontWeight="800" letterSpacing="1.8" fontFamily="system-ui, sans-serif">🔐 AUTHENTICATION DOMAIN</text>

  <rect x="50" y="552" width="180" height="56" rx="10" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1.5"/>
  <text x="140" y="574" fill="#4ade80" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">F564250</text>
  <text x="140" y="593" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Users</text>

  <rect x="290" y="534" width="180" height="36" rx="8" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="557" fill="#4ade80" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564251</text>
  <text x="460" y="557" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Roles</text>

  <rect x="290" y="590" width="180" height="36" rx="8" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="613" fill="#4ade80" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564252</text>
  <text x="460" y="613" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Sessions</text>

  <path d="M 230 580 L 260 580" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" fill="none"/>
  <path d="M 260 552 L 260 608" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" fill="none"/>
  <line x1="260" y1="552" x2="290" y2="552" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#dt-arrow-green)"/>
  <line x1="260" y1="608" x2="290" y2="608" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#dt-arrow-green)"/>
  <text x="265" y="547" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.85">USROLE</text>
  <text x="265" y="630" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.85">SSUSER</text>
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

- **Primary key**: none — multiple events per file are expected.
- **Notable**: `FEMODE` is the processing type (`SINGLE`, `BURST`, `UBL`, `BOTH`, `UBL_VALIDATE`, `PROCESS`); `FETMPL` is the template name (empty for UBL processing); `FEMETHOD` is `START` / `END` or the failing method name on errors.

| Field | Type | Description |
|---|---|---|
| `FEWDS1` | Text(80) | Source file name — links to `F564230.FEWDS1`. |
| `FEUPMJ` | Date (Julian) | Event date. |
| `FEUPMT` | Time (HHMMSS) | Event time. |
| `FEMODE` | Text(20) | Processing type. |
| `FETMPL` | Text(50) | Template name. |
| `FEMETHOD` | Text(100) | Operation — `START` / `END` / failing method name. |
| `FEMESSAGE` | Text(500) | Status message or error detail. |

---

## E-Reporting domain

Three tables that record the *(period, flux, company)* declarations submitted to the Plateforme Agréée — flux **10.1** (B2C invoice detail) and **10.3** (B2BINT aggregated).

### F564240 — Report log

One row per generated report. Stores the `<ReportDocument>` XML and the latest known status.

- **Primary key**: `RGUKID` (globally unique sequence — no flux / company component).
- **Notable**: `RGY56BAR` is `10.1` or `10.3`; `RGDCT` is the document type (`IN` initial, `RE` replacement, `CO` cancellation, `MO` modification); `RGTXFT` carries the generated XML.

| Field | Type | Description |
|---|---|---|
| `RGUKID` | Integer | Report sequence id (PK). |
| `RGY56BAR` | Text(10) | Flux code — `10.1` / `10.3`. |
| `RGKCO` | Text(5) | Issuing company code. |
| `RGDCT` | Text(2) | Document type — `IN` / `RE` / `CO` / `MO`. |
| `RGEFTJ` | Date (Julian) | Period start. |
| `RGEFDJ` | Date (Julian) | Period end. |
| `RGY56EPID` | Text(60) | Issuer SIREN (scheme `0002`). |
| `RGK74RSCD` | Text(4) | Current lifecycle status code. |
| `RGK74MSG1` | Text(2000) | Last status message. |
| `RGNINV` | Integer | Number of invoices included. |
| `RGTXFT` | CLOB / TEXT | Generated `<ReportDocument>` XML. |
| `RGUSER` / `RGPID` / `RGJOBN` / `RGUPMJ` / `RGTDAY` | — | Audit columns. |

### F564241 — Report lifecycle events

The append-only history of statuses for a given report — same shape as F564235 for invoices.

- **Primary key**: `RGUKID + RHSEQN`
- **Notable**: `RHSEQN` is auto-incremented. The `RG`-prefixed `RGUKID` is the FK to the parent log (kept as-is, not renamed to an `RH` alias).

| Field | Type | Description |
|---|---|---|
| `RGUKID` | Integer | Report sequence id (PK · FK → F564240). |
| `RHY56BAR` | Text(10) | Flux code (denormalised for query convenience). |
| `RHSEQN` | Integer | Event sequence (PK). |
| `RHK74RSCD` | Text(4) | Status code at this event. |
| `RHK74MSG1` | Text(500) | Status message. |
| `RHUSER` / `RHPID` / `RHJOBN` / `RHUPMJ` / `RHTDAY` | — | Audit columns. |

### F564242 — Report / invoice mapping

Tracks **which invoices were included in which report** — composite PK avoids re-including invoices that were already declared on a prior run.

- **Primary key**: `RGUKID + RIDOC + RIDCT + RIKCO`
- **Notable**: A secondary index on `(RIDOC, RIDCT, RIKCO, RIY56BAR)` answers "in which report was this invoice declared?" efficiently.

| Field | Type | Description |
|---|---|---|
| `RGUKID` | Integer | Report sequence id (PK · FK → F564240). |
| `RIY56BAR` | Text(10) | Flux code. |
| `RIDOC` / `RIDCT` / `RIKCO` | — | Invoice triplet (PK · FK → F564231). |

---

## Authentication domain

Three tables for built-in user / role / session management — used when `authEnabled = Y` in the *global* template.

### F564250 — Users

One row per user. Passwords are stored as **PBKDF2-HMAC-SHA256** hashes — never in clear text.

- **Primary key**: `USUSER`
- **Notable**: `USPASSWD` format is `iterations:base64(salt):base64(hash)`. `USFORCEPASSWD = 'Y'` forces a password change on the next login (default for new accounts).

| Field | Type | Description |
|---|---|---|
| `USUSER` | Text(50) | Username (PK). |
| `USPASSWD` | Text(200) | PBKDF2-HMAC-SHA256 hash — `iterations:salt:hash`. |
| `USROLE` | Text(50) | Role name (FK → F564251.RLNAME). |
| `USFULLNAME` | Text(100) | Display name. |
| `USEMAIL` | Text(200) | Email address. |
| `USACTIVE` | Text(1) | `Y` = active, `N` = disabled. |
| `USFORCEPASSWD` | Text(1) | `Y` = must change password on next login. |
| `USCREATED` | Timestamp | Account creation timestamp. |

### F564251 — Roles

One row per role. Defines page allow-list, company filter and the read-only / settings flags.

- **Primary key**: `RLNAME`
- **Notable**: `RLPAGES` and `RLCOMPANIES` are comma-separated lists; an **empty** value means *unrestricted* (all pages / all companies). `RLSETTINGS = 'Y'` grants access to the *Settings* configuration manager.

| Field | Type | Description |
|---|---|---|
| `RLNAME` | Text(50) | Role identifier (PK). |
| `RLDESC` | Text(200) | Human-readable description. |
| `RLPAGES` | Text(2000) | Allowed page IDs — comma-separated (empty = all). |
| `RLCOMPANIES` | Text(500) | Allowed company codes — comma-separated (empty = all). |
| `RLSETTINGS` | Text(1) | `Y` = role grants access to the configuration manager. |
| `RLREADONLY` | Text(1) | `Y` = view only, no edit / delete / resend. |

### F564252 — Sessions

One row per active session. Sessions are validated on every API request; expired rows are pruned by the auth handler.

- **Primary key**: `SSTOKEN` (UUID)
- **Notable**: The token is sent as `Authorization: Bearer <SSTOKEN>` on every API call. Two indexes on `SSUSER` and `SSEXPIRES` keep lookups and cleanup efficient.

| Field | Type | Description |
|---|---|---|
| `SSTOKEN` | Text(100) | Session token / UUID (PK). |
| `SSUSER` | Text(50) | Username (FK → F564250.USUSER). |
| `SSCREATED` | Timestamp | Session creation timestamp. |
| `SSEXPIRES` | Timestamp | Session expiry timestamp. |

---

## Recommended indexes

The DDL bundles a small set of indexes that every production deployment should keep — they back the most common queries from the UI:

| Index | Table | Columns | Used by |
|---|---|---|---|
| `F564231_STATUS_IX` | F564231 | `UHK74RSCD` | Dashboard counters and *E-Invoicing* status filters. |
| `F564231_DATE_IX` | F564231 | `UHK74LDDJ` | Date-range queries on the invoice list. |
| `F564231_CUST_IX` | F564231 | `UHAN8` | Customer-scoped views. |
| `F564230_UUID_IX` | F564230 | `FEUKIDSZ` | PA UUID look-up after import. |
| `F564240_PERIOD_IX` | F564240 | `RGKCO`, `RGY56BAR`, `RGEFDJ` | E-Reporting list filters. |
| `F564242_INV_IX` | F564242 | `RIDOC`, `RIDCT`, `RIKCO`, `RIY56BAR` | "In which report is this invoice?" lookup. |
| `F564250_ROLE_IX` | F564250 | `USROLE` | User → role join. |
| `F564252_USER_IX` | F564252 | `SSUSER` | Sign-out / list-sessions per user. |
| `F564252_EXP_IX` | F564252 | `SSEXPIRES` | Expired-session pruning. |

The full DDL — including dialect-aware variants for Oracle and PostgreSQL — ships in the JAR under `sql/oracle/ddl.sql` and `sql/postgres/ddl.sql`, and is materialised on disk by **Initialize Database**.
