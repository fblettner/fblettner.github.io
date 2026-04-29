---
title: Release Notes
description: "NomaUBL release notes — every user-visible change shipped in the platform, version by version, in reverse chronological order. Mirrors the in-app Release Notes page."
keywords: [NomaUBL, release notes, changelog, version, e-reporting, processing log, dashboard, AFNOR XP Z12-014, Schematron, RFE, Réforme de la Facturation Électronique]
---

# Release Notes

Every user-visible change to NomaUBL — UI, REST API, CLI, behaviour — is consigned here. The most recent release sits at the top. This page mirrors the **About this release** card and the dedicated *Release Notes* screen surfaced inside the application.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 18px', margin: '24px 0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', alignItems: 'center'}}>
  <span style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, opacity: 0.65, marginRight: '6px'}}>Versions</span>
  <a href="#v2026-04-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}>2026.04.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v1-0-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>1.0.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· Initial release</span></a>
</div>

---

## 2026.04.2 — 2026-04-29 \{#v2026-04-2\}

### Validation

- Fixed: re-validating an existing invoice from **InvoiceDetailModal → History** (and the standalone `validateUblDirect` path) failed with `cvc-elt.1.a: Cannot find the declaration of element 'Invoice'`. The `DocumentBuilderFactory` used to parse the UBL was not namespace-aware by default, so the XSD validator couldn't bind `<Invoice>` / `<CreditNote>` to the UBL 2.1 schema. `setNamespaceAware(true)` is now set on both parser instances.

---

## 2026.04.1 — 2026-04-29 \{#v2026-04-1\}

### Processing Log

- UBL processing now writes a `START` / `END` pair to `F564237` so the Processing Log covers ProcessUBL (`/api/process-ubl`), fetch-invoices in UBL mode and the `-ubl` CLI — same as `-xml` already did. `FEMODE = PROCESS` for these rows; `FETMPL` is empty (no document template applies to UBL processing).

### UBL Validation page

- Fixed: uploading a UBL file no longer lands in `<input>/_ubl/` (a literal substitution of the `_ubl` sentinel template). Uploads now use the conventional `<input>/ubl/` folder, matching the fetch / list-files convention.
- Fixed: validating an uploaded UBL file no longer fails with `No such file or directory`. Basenames in the form's file field are resolved against `<dirInput>/ubl/` before parsing; absolute paths from the file browser keep working as before.

### Validation

- New **EXTENDED-CTC-FR** schematron (FNFE-MPE `EXTENDED-CTC-FR-UBL-V1.3.0`) bundled and wired into `UBLValidator`.
- Schematron flavour is now driven by `cbc:CustomizationID` (BT-24). When the URN contains `EXTENDED` / `extension`, the EXTENDED-CTC-FR ruleset is run **instead of** EN 16931 + CIUS-FR (it's a derived superset that intentionally relaxes some EN 16931 rules — e.g. `UBL-CR-550` is commented out so `InvoiceLine/Delivery` is permitted). All other values keep the previous behaviour: EN 16931 base + CIUS-FR (BR-FR Flux 2) overlay. CPRO-B2G still self-gates on `cbc:Note` `#ADN#B2G` regardless of profile.

### Configuration / UBL Defaults

- New `customization-ids` system list (BT-24) seeded with the standard French URNs (EN 16931 base, FNFE-MPE Basic / Extended CTC, Factur-X Minimum / Basic / Basic WL / Extended, Peppol BIS Billing 3) — fully editable in **Settings → Customization IDs**.
- **UBL Defaults → Header**: BT-24 is now a dropdown populated from the `customization-ids` list (free-text remains as fallback when the list is empty or the value is not registered).

### Replace mode

- Replace-mode reprocessing now purges `F564235` (lifecycle) and `F564236` (validation errors) in addition to `F564231` / `F564233` / `F564234`. Previously these two append-only tables kept growing across re-runs, leaving stale lifecycle history and validation errors mixed with the latest run's data.
- New `UBLDatabaseHandler.purgeForReplace()` does a one-shot purge of all five UBL tables for a given `(doc, dct, kco)`. Called by `UBLInvoiceProcessor.process` (UBL path) and `CustomUBL` (XML path) whenever `replaceMode=true`, so both paths now have identical replace-mode semantics regardless of whether the F564230 row already exists.

---

## 2026.04.0 — 2026-04-29 \{#v2026-04-0\}

### E-Reporting (Flux 10.1 / 10.3)

- New top-level **E-Reporting** page: list, detail modal, generate dialog.
- New tables `F564240`, `F564241`, `F564242` (configurable in `db-nomaubl` settings; created by **Initialize Database**).
- New `e-reporting` system template + per-company `e-reporting-{kco}` overrides; submission reuses the `e-invoicing[-{kco}]` PA token via a new `report-import` endpoint.
- CLI: `-ereporting <config> [start=YYYYMMDD] [end=YYYYMMDD] [kco=...] [flux=10.1,10.3] [type=IN]`.
- Background scheduler: new `ereportingInterval` job in `global`.
- Detail modal: invoices tab uses `DataTable` with CSV / Excel export.
- Detail modal: download generated XML button (replaces the inline XML tab).

### Processing Log

- New **Processing Log** entry under the *Management* menu, backed by `F564237`.
- Grouped view (default) collapses every job into a single `START → END` row, with status badge, duration and an expandable list of intermediate steps; flat view kept for power users.
- Toolbar: dropdowns for **Mode** and **Template**, period picker (default: last 7 days), file-name search.

### Dashboard

- New **About this release** card pinned at the bottom of the dashboard with the release number, build date, AFNOR profile version and schematron versions per module (EN 16931, BR-FR Flux 2, BR-FR CPRO).

### Documentation

- New **Release Notes** page (Documentation menu) rendering this file.
- Maintained in two languages — `RELEASE.md` (English) and `RELEASE.fr.md` (French) bundled in the JAR; the page picks the right one from the active UI language.
- Top-of-page table of contents with one chip per release linking to its section.
- In-house Markdown renderer with lazy list-continuation handling so hard-wrapped bullets render as a single item.

### Settings

- `db-nomaubl` editor exposes the three new e-reporting table names (`tableEReporting`, `tableEReportingHist`, `tableEReportingMap`), defaulted to `F564240` / `F564241` / `F564242`.
- **Initialize Database** now creates the three e-reporting tables in addition to the existing UBL / auth tables.
- **Roles** page-permission picker exposes the new `processinglog` and `releasenotes` pages so existing roles can be granted access.

### Backend

- `DatabaseDialect.writeText` / `readText` defaults — XML stored as `CLOB` (Oracle) / `TEXT` (Postgres) using portable `setString` / `getString` (avoids the pgjdbc `getClob → OID` pitfall).
- `nodeToBytes` in `UBLDatabaseHandler` now sets `OutputKeys.INDENT="no"` so document XML written to `F564230.FETXFT` does not pick up Saxon's pretty-print under fat-jar runs (same fix already applied to UBL).
- `/api/build-info` (public) returns release metadata + bundled `RELEASE.md` / `RELEASE.fr.md`.

---

## 1.0.0 — Initial release \{#v1-0-0\}

NomaUBL is a Java 17 + React e-invoicing platform that turns ERP output (JD Edwards, SAP, NetSuite, custom) into standards-compliant **UBL 2.1** documents, validates them, submits them to a French **Plateforme Agréée (PA)**, and tracks the full invoice lifecycle.

### Core pipeline (Source ERP → UBL → PA)

- **JDE XML extraction** from the BIP Print Queue (`F95630` / `F95631` / `F9563110`), JDE Archive, SFTP and the local filesystem; routed by document-type templates (`invoices`, `credit_notes`, …).
- **XSLT 2.0 transformation** via Saxon-HE — generates UBL 2.1 invoices and credit notes, with a configurable XSL framework (`ubl-common.xsl` + `ubl-template.xsl`).
- **Validation**: XSD (UBL 2.1) + Schematron — **EN 16931**, **BR-FR Flux 2** (CIUS-FR / FNFE-MPE) and **BR-FR CPRO** (Chorus Pro for B2G), with severities (`fatal`, `error`, `warning`, `info`).
- **PA submission** over HTTP (Java 11 `HttpClient`), with OAuth2 bearer-token caching and auto-refresh on 401, plus an SFTP fallback channel.
- **Per-company PA overrides** via `e-invoicing-{kco}` system templates — independent credentials, endpoints and tokens per issuing company.
- **PPF directory pre-flight** (non-blocking) via the `e-directory` template — looks the customer up before sending and surfaces a warning when the recipient is unreachable.
- **PDF generation** via Oracle BI Publisher (`oracle.xdo`) with optional Ghostscript post-processing and an iText-based embed of the PDF as `cac:AdditionalDocumentReference` in the UBL.
- **Mock PA** (`paUseMock=Y`) with success / failure / token-expiry behaviours for end-to-end tests without a live platform.

### Document, status and lifecycle storage

Oracle / PostgreSQL schema (configurable in `db-nomaubl`):

| Table | Purpose |
|---|---|
| `F564230` | Source archive — original JDE XML, processing flags |
| `F564231` | UBL header — EN 16931 BT-* fields, generated UBL XML, current status |
| `F564233` | UBL invoice lines |
| `F564234` | UBL VAT summary per category / rate |
| `F564235` | Lifecycle events (history) |
| `F564236` | XSD / Schematron validation errors |
| `F564237` | Runtime processing log (one row per START / END / error event) |
| `F564250` / `F564251` / `F564252` | Users / Roles / Sessions |

- **Dialect-aware DDL** via `DatabaseDialect` — Oracle (`BLOB`, `NUMBER`, `VARCHAR2`) and PostgreSQL (`BYTEA`, `INTEGER`, `VARCHAR`).
- **Initialize Database** action in *Settings* creates the full schema and bootstraps default `admin` / `viewer` roles.
- **JDE Julian dates** stored as integers (`CYYDDD - 1900000`) and converted on the fly for the UI.

### Invoice status catalog

- 30+ status codes covering the full **AFNOR XP Z12-014 V1.3** lifecycle: `STATUS_CREATED → STATUS_VALIDATED → STATUS_SENT_TO_PA → STATUS_PENDING → STATUS_DEPOSITED → …` plus dispute, factoring and routing-error states.
- Internal workflow codes (`9900`–`9907`) and PA-mapped UNTDID 1373 codes (`1`, `8`, `10`, `37`, `43`, `45`–`51`).
- All codes / labels / PA mappings are **data-driven** from the `statuses` system template — editable in *Settings*.
- `StatusTransition.apply()` updates `F564231` and inserts an `F564235` lifecycle event in one call.

### CLI

Long-running and one-shot modes — all driven from a single `config.json`:

| Mode | Purpose |
|---|---|
| `-config` | Open the Swing GUI (FlatLaf dark) |
| `-xml` | Process JDE XML files: SINGLE / BURST / UBL / AUTO |
| `-ubl` | Validate + load existing UBL files into the DB |
| `-fetch-single`, `-fetch-all` | Pull from BIP / archive / directory + process |
| `-fetch-import` | Poll PA for status of pending invoices (9906) |
| `-fetch-status` | Retrieve PA lifecycle events and update DB |
| `-extract` | Extract input/output files from a JDE BIP job |
| `-serve` | Embedded HTTP server + background scheduler |
| `-install` | Bootstrap an environment directory tree |
| `-password` | Encode a password for storage |
| `-updUser` | Update JDE user on submitted jobs |

### Web UI (React 19 + Vite)

- **Dashboard** with status counters, integration-error tile, quick actions and license / build info.
- **Invoices** — paged + filterable list, detail modal (Summary, Parties, Lines, VAT, Notes, History, PDF tabs), in-place create / edit / copy / resend, set-status (PA or DB-only), email with PDF attachment.
- **Integration Errors** — every validation row in `F564236` that has no matching invoice (broken submissions).
- **Extract & Process** — single and batch fetchers from BIP, FTP, archive or local files.
- **Process UBL** — load and validate existing UBL XML.
- **Validate** — XSD + Schematron tester for ad-hoc UBL files.
- **XSL Editor** — Monaco-based editor with XML browser, template-aware variable picker and per-template framework installer.
- **XML Viewer** — Monaco-based viewer / formatter with local + server load and save.
- **UBL Defaults** — per-company defaults (currency, payment means, tax categories, etc.).
- **Status Reference** — full AFNOR XP Z12-014 V1.3 reference.
- **Reason Codes** — full AFNOR XP Z12-012 Annexe A reference.
- **UBL Reference** — BT-* glossary.
- **File Versions** — SQLite-backed version history for editable XSL / XSD / Schematron / RTF / config files, with upload / restore / download.

### Settings (configuration manager)

- Live-edit `config.json` from the browser. System templates: `global`, `e-invoicing`, `e-directory`, `statuses`, `db-nomaubl`, `db-jde`, `ftp-jde`, `fetch-invoices`.
- Code lists: `invoice-types`, `vat-categories`, `vatex-codes`, `payment-means`, `scheme-ids`, `unit-codes`, `countries`, `note-types`, `currency-codes`, `rejection-reason-codes`, `action-codes`, `document-reference-codes`, `profile-ids`.
- Document-type templates: per-document RTF / XSL / burst-key / routing / processing-type bindings.
- API connector templates with placeholder substitution (`{{username}}`, `{{token}}`, `{{content}}`, …) and pluggable auth (`NONE`, `BASIC`, `BEARER`, `API_KEY`, `OAUTH2`).
- Per-company `e-invoicing-{kco}` overrides.

### Authentication & RBAC

- Built-in user / role / session tables (`F564250` – `F564252`).
- **PBKDF2-HMAC-SHA256** password hashes, force-password-change on first login, per-role page allow-list and per-role company filter.
- Toggleable via `authEnabled` in `global` (off → no login).
- Default `admin` (full) and `viewer` (read-only subset) roles bootstrapped on Initialize Database.

### Background scheduler

Driven from `global.fetch*Interval` (minutes — 0 disables):

- `fetchImportInterval` — periodic PA import-status polling.
- `fetchStatusInterval` — periodic PA lifecycle retrieval.
- `fetchAll.N.{interval,label,params}` — multiple batch document-processing jobs.

### Embedded HTTP API

A minimal REST + static file server (`com.sun.net.httpserver`) hosts the React bundle at `/` and exposes `/api/*` for invoices, templates, fetch / extract, validation, file system, license, packaging, authentication, and OpenAPI documentation at `/api/docs`.

### Email & i18n

- SMTP send (TLS / SSL) with per-invoice PDF attachment.
- Full English / French translations across the UI.

### Licensing

- RS256-signed JWT licenses verified at runtime against a bundled PEM public key — `full` (all features) or `restricted` (read-only views) modes.
