---
title: Release Notes
description: "NomaUBL release notes — every user-visible change shipped in the platform, version by version, in reverse chronological order. Mirrors the in-app Release Notes page."
keywords: [NomaUBL, release notes, changelog, version, e-reporting, processing log, dashboard, AFNOR XP Z12-014, Schematron, RFE, Réforme de la Facturation Électronique]
---

# Release Notes

Every user-visible change to NomaUBL — UI, REST API, CLI, behaviour — is consigned here. The most recent release sits at the top. This page mirrors the **About this release** card and the dedicated *Release Notes* screen surfaced inside the application.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 18px', margin: '24px 0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', alignItems: 'center'}}>
  <span style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, opacity: 0.65, marginRight: '6px'}}>Versions</span>
  <a href="#v2026-05-10" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}>2026.05.10 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-13</span></a>
  <a href="#v2026-05-9" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.9 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-12</span></a>
  <a href="#v2026-05-8" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.8 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-09</span></a>
  <a href="#v2026-05-7" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.7 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-09</span></a>
  <a href="#v2026-05-6" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.6 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-09</span></a>
  <a href="#v2026-05-5" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.5 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-08</span></a>
  <a href="#v2026-05-4" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.4 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-07</span></a>
  <a href="#v2026-05-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-06</span></a>
  <a href="#v2026-05-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-06</span></a>
  <a href="#v2026-05-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-05</span></a>
  <a href="#v2026-05-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-05</span></a>
  <a href="#v2026-04-10" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.10 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-04</span></a>
  <a href="#v2026-04-9" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.9 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-30</span></a>
  <a href="#v2026-04-8" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.8 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-7" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.7 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-6" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.6 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-5" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.5 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-4" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.4 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v1-0-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>1.0.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· Initial release</span></a>
</div>

---

## 2026.05.10 — 2026-05-13 \{#v2026-05-10\}

Spec-driven list views release. Every list page — [Integration Errors](./application/integration-errors.md), [Processing Log](./management/processing-log.md), [E-Reporting](./application/ereporting.md), [Invoices](./application/invoices.md) — now renders through **DataTableV2** with column shape, labels, formats, alignment, width and the filter-row allow-list driven from a JSON spec stored on `db-nomaubl` (with a bundled default in the JAR). The legacy V1 layout has been removed from those four pages — V2 is the only mode. A new **column catalog** per view exposes every column the underlying tables can `SELECT` or filter on, and the new [List Views editor](./configuration/list-views.md) lets operators **+ Add column** without writing code as long as the column lives in the catalog. The Invoices view picks up `F564230` via a `LEFT JOIN`, so 16 archive/log columns (source file, business unit, JDE user/job, due date, PA UUID…) are now available from the picker. Plus a fix for the dashboard *Recent errors* drill-through (filters were not being passed) and a CustomizationID round-trip bug in the Invoice Modal.

### Spec-driven list views (Phase A + Phase B)

- New `ListViewSpec` schema stored under `db-nomaubl.view.<name>` (e.g. `view.invoices`), with a bundled default in `config/list-views/view.<name>.json` for each of the four migrated pages. Drives column visibility, English / French labels, type, format (`date` / `datetime` / `amount` / `percent`), alignment, width and the `filter: true` allow-list.
- New endpoint `GET /api/list-views/<name>` resolves the spec (stored property wins, bundled default otherwise); the editor reads / writes it via the same path.
- Built-in column catalog per view (`ColumnCatalog` + `ColumnCatalogs`) exposes every column the Java handler can `SELECT`: SQL expression, type (`STRING` / `NUMBER` / `DATE` / `JDE_DATE` / `JDE_DATETIME`), filter behaviour (`exact` / `LIKE` / `inList` / `between`), and projection flags (`cents → /100`, `asInt → parseInt`, `trimForFilter`). Available via `GET /api/list-views/<name>/catalog`.
- **Phase B** wiring: the Java handlers for `/api/invoices`, `/api/integration-errors`, `/api/processing-log` and `/api/ereporting` now build the SELECT projection and the WHERE clauses from the spec + catalog. The shared `SpecQueryHelper` resolves filter operators in exactly one place. Adding a column to the spec via the editor surfaces it in the grid (and as a filter in the [Advanced Filters](#advanced-filters-panel) panel when `filter: true`) with no code change required.
- New **List Views** editor with one collapsible card per view, drag-and-drop column reordering via a `GripVertical` handle, English + French label fields, type / format / alignment / width inputs, a `Visible / Filter` toggle pair and a `+ Add column` picker populated from the catalog. The bundled-default vs stored state shows as an `override` / `default` badge per card. See the new [List Views](./configuration/list-views.md) configuration page.

### Invoices — F564231 LEFT JOIN F564230

- The Invoices spec-driven SQL now joins `F564231` (UH) and `F564230` (FE) on doc / dct / kco, so 16 archive / log columns are reachable from the editor's `+ Add column` picker: `logSourceFile`, `logActivityCode`, `logSubType`, `logAlphaKey`, `logAmount`, `logInvoiceDate`, `logDueDate`, `logCreated` (UPMJ+UPMT), `logUser`, `logJobn`, `logPid`, `logVersion`, `logBusinessUnit`, `logRouting`, `logSendToPaFlag`, `logPaUuid`. The `LEFT JOIN` keeps invoice rows when no log entry exists.

### Advanced Filters panel

- New `ServerFilterPanel` component: collapsible **Advanced Filters** panel keyed by spec column name with per-column operator pickers (`contains`, `equals`, `≠`, `<`, `≤`, `>`, `≥`, `between`, `empty`, `not empty`). The panel emits a draft state; an explicit **Run** button commits it as `appliedFilters` — typing in the panel does not spam the back-end.
- Operator vocabulary is translated end-to-end: column labels pick the French variant (`labelFr`) when the active locale starts with `fr`, falling back to `label`.

### DataTableV2 polish

- Tables now use `width: 100% + table-layout: fixed` and feed explicit per-column widths to a `<colgroup>` — columns without a width share whatever space the table has left. Single scrollbar inside the table body (no more nested page + table scroll).
- Page area uses `PageLayout fill` for V2 pages so the table body fills the leftover vertical space; sticky header works correctly inside the inner scroller.

### Dashboard drill-through fixes

- The Tech Dashboard's **Recent errors** card now passes `{ doc, dct, kco }` when drilling into Integration Errors, and the target page seeds its filter bag from those props. A visible chip shows the active drill-through and offers a one-click `×` clear (the slim V2 toolbar and collapsed *Advanced Filters* panel made the filter invisible before).
- Business Dashboard's status cards (`Déposée`, `Validation réussie`, *In flight* multi-bucket…) now filter Invoices via `filters.statusCode` end-to-end; the catalog's `inList()` flag splits comma-separated buckets into an `IN (?,?,?,?,?)` clause.
- Tech Dashboard throughput-bar drill-through into Processing Log now seeds the V2 `DateRangeFilter` via `initialRange` so the scoped date stays applied.

### Invoice Modal — CustomizationID round-trip

- Editing an existing invoice no longer silently flips its `cbc:CustomizationID` back to the EN16931 default. The form now carries `customizationId` (defaulting to `urn:cen.eu:en16931:2017` for new invoices); `parseUblXml` reads the source UBL's value, `buildUblXml` writes it back verbatim.

### Smaller cleanups

- **Status chips overflow** — the Invoices status filter caps at 5 inline chips, the rest fold into a `+N more` dropdown with a coloured dot per code. Multi-status drill-throughs (e.g. *In flight* = 5 codes) hoist the active value back into the inline group when applicable.
- **List Views editor UX** — drag-and-drop reorder via a single `GripVertical` handle (no more arrow-pair), per-row remove button, dedicated English / French label columns, width input, bundled vs override badge per card.
- **List Views catalog** — the `+ Add column` picker lists every catalog entry the current spec does not contain (name / English label / type). Adding seeds a new spec column with the catalog's labels; the operator can tweak afterwards.
- **Processing Log default tab** — restored to **Grouped** (the day-to-day reading mode); the operator's Grouped / Flat choice persists in localStorage as before.
- **Status badge alignment** — Invoices `statusCode` now uses `type: "string"` so the badge sits left-aligned in its cell (was right-aligned because of the previous `number` type).
- **Phase B SQL by example** — the Invoices view now runs a joined query of the form `SELECT <spec cols> FROM F564231 UH LEFT JOIN F564230 FE ON FE.FEDOC=UH.UHDOC AND FE.FEDCT=UH.UHDCT AND FE.FEKCO=UH.UHKCO WHERE … ORDER BY <spec defaultSort> OFFSET ? ROWS FETCH NEXT ? ROWS ONLY` — add a column to the spec via the catalog and it surfaces in the grid without a code change.

---

## 2026.05.9 — 2026-05-12 \{#v2026-05-9\}

Validation pipeline + inbound webhooks release. The Schematron stack is now driven by **precompiled XSLT** loaded from the JAR — the ISO compile-on-startup pipeline is gone, and locally-authored rules are precompiled at build time. **Flux 2** runs on every profile (a missing Step 3 from the AFNOR XP Z12-012 sequence was silently skipped on Extended-CTC-FR invoices). A new **NomaUBL house-rules pack** captures AIFE-side rules the public Schematron packs do not ship yet (first rule: credit-note codes 261/381/396/502/503 require a preceding-invoice reference). On the operator side, **inbound webhooks** are now first class: HMAC-verified POSTs to `/api/webhook/{connector}/{event}` look the invoice up by PA UUID, apply the lifecycle status and dedupe at-least-once retries — generic enough to plug any PA in via the api-connector template. The [Integration Errors](./application/integration-errors.md) list dropped its unreadable Message column in favour of a dedicated detail modal that splits the Schematron debug context from the French explanation.

### Inbound webhooks (generic framework)

- New `/api/webhook/{connector}/{event}` route — public (bypasses session auth), verifies the request via **HMAC-SHA256** over a canonical `timestamp\nMETHOD\npath\nbodyChecksum`, dedupes on the payload's event id (in-memory LRU+TTL cache, 10k entries × 1 h), and dispatches to a per-event handler. Status events apply the resolved `InvoiceStatusCatalog.StatusTransition` against the matching `F564230` row (looked up via `FEUKIDSZ`).
- Configuration lives on the [api-connector](./configuration/api-connectors.md) template (new **Webhooks** tab in `ApiConnectorEditor`): shared secret (encrypted at rest via the `*Secret` suffix), JSON path overrides for `idField` / `statusField` / `eventIdField`, and a `paStatus:logical` map (`success` / `pending` / `failed`) reused from `ImportStatusHandler`. The tab shows the read-only URL hint operators paste into the PA's webhook settings.
- Returns 2xx on internal errors so the sender stops retrying; 401 on signature failure (loud) and 404 on unknown connector name. JVM restart drops the dedup cache safely — status applications are described in clear: replaying the same event a second time has no observable effect.

### Schematron pipeline — precompiled only

- Runtime no longer compiles `.sch` files. `UBLValidator` loads precompiled `.xsl` straight from the classpath, failing fast at startup if any expected file is missing. AFNOR's three packs are shipped as published; the two locally-authored rules (`BR-FR-CPRO-Schematron-UBL` + `BR-NOMAUBL-rules`) are precompiled at build time by `build.sh` via Saxon CLI + `xmlresolver` so the same pipeline applies to everything.
- The ISO skeleton XSLs (`iso_dsdl_include.xsl`, `iso_abstract_expand.xsl`, `iso_svrl_for_xslt2.xsl`) and the `compileSchematron` helper are gone from runtime. Cold-start drops a noticeable beat — three XSLT compiles × five packs no longer happen per JVM.
- Dashboard footer keeps showing per-pack versions: `BuildInfo` still reads the `.sch` source for the version stamp (priority to the `yyyymmdd_VX.Y.Z` filename pattern; falls back to the header comment), so nothing breaks even though the runtime payload is now `.xsl`. See the [UBL Validate](./ubl-tools/validate.md) page.

### Validation profile fix — Flux 2 always runs

- AFNOR XP Z12-012 V1.3.1 splits validation into 4 steps: Step 2 picks EN 16931 *or* Extended-CTC-FR (depending on `CustomizationID`), Step 3 runs **BR-FR-Flux 2 unconditionally** on top. The previous code treated Extended-CTC-FR as a superset and skipped Flux 2 — missing the reform-specific `BR-FR-*` / `EXT-FR-FE-*` rules the PA still enforces server-side. The Extended profile now runs both steps.

### NomaUBL house rules

- New `BR-NOMAUBL-rules.sch` for AIFE-side rules missing from the public Schematron packs. First rule (`BR-NOMAUBL-01`, fatal): if BT-3 ∈ `{261, 381, 396, 502, 503}`, at least one `cac:BillingReference/cac:InvoiceDocumentReference` with both `cbc:ID` (BT-25) and `cbc:IssueDate` (BT-26) must be present. PAs reject these credit notes today with the `precedingInvoices` model-validation error; surface it locally so failures land in `F564236` instead of after a round-trip.
- Wired through `BuildInfo` (`schematron.nomaubl` version in `/api/build-info`) and runs as the final layer after CPRO-B2G.

### Validation message rendering

- The CTC-FR `BR-FREXT-*` rules emit a single string mixing a comma-separated debug context (`Num Fact: …, Code: S, rate: 20, …`) and a French explanation prefixed by another `[RULE-ID] -` marker. Both `InvoiceDetailModal` (Validate button + persisted `F564236` errors) and the new `ErrorDetailModal` (see below) now split the blob on the last `, [RULE-ID] -` marker: the French explanation becomes the main line, the debug fields render as a small monospace grid in a faint card underneath. The rule-id pattern accepts the FNFE-MPE `ini` / `rev` suffixes (regex flag fix — the warning variants were rendering as raw text).
- `ConfigJson.jsonUnescape` now covers the full RFC 8259 backslash set including `\uXXXX`, `\b`, `\f`, `\/`. PA error messages with accented French characters (`é` → `é`) and embedded newlines no longer surface as literal escape sequences in the lifecycle message. `PAImportStatusClient.parseJsonErrors` calls it on every extracted error token.

### Integration Errors — readable detail view

- Removed the Message column from the table — Schematron / XPath messages are too long for a grid cell. The column was eating ~720 px and still cut off context. Row click opens the detail view instead.
- Matched rows (with a real invoice in `F564231`) keep opening the full `InvoiceDetailModal` on the History tab.
- Unmatched / orphan rows now open a new **`ErrorDetailModal`** — level badge, rule + description (from `useRuleCatalog`), source, date, doc / dct / kco (with a *no matching invoice in F564231* hint), customer, and the full message rendered through the same `splitValidationMessage` helper. Every row in the page is now click-actionable.
- New **Date column** mirrors the time context of the Tech Dashboard's recent-errors card without opening a row.

### Per-document date input format

- `UBLDatabaseHandler.insertDocumentLog` / `updateDocumentLog` were hardcoded to parse source dates as `yyyy-MM-dd`. That worked for UBL-source flows (the XSL emits ISO) but silently failed on XML-source documents where the source dates are `dd/MM/yyyy` etc. New **`dateInputFormat`** property on the doc-template (set in [Document Editor](./management/documents.md) → Document tab → *Date format* section) drives the parser, with ISO as the back-compat default. `CustomUBL` reads it from the doc-template resource and threads it through to the database handler.

### TAG_INVOICE_TYPE_CODE — BT-3 separated from DCT

- `TAG_DOCUMENT_TYPE` was misleadingly commented as BT-3 but is actually the Type / DCT Code used for `cbc:ID` concatenation. New separate `TAG_INVOICE_TYPE_CODE` (BT-3, UNTDID 1001 — 380, 381, 384, …) in `ubl-template.xsl`: when set and the source XML carries a value, that value wins over UBLDefault rules / `$invoiceType_default`. Emitted inline via `ubl:type-code-qname` so the resolved code actually reaches the wire instead of being shadowed by a second `ubl:resolve-invoice-type` call inside the legacy template.
- XSL Editor metadata fixed (`TAG_DOCUMENT_TYPE` no longer claims BT-3) and the new variable surfaces in the Header section's two-column layout as soon as the template declares it.

### api-connector — multipart, status check

- New `endpoint.N.contentType` property + multipart body builder so api-connector endpoints can submit `multipart/form-data` (the IOPOLE invoice-import endpoint expects a `file=@{{filePath}};contentType=text/xml` part). UI: **Content-Type** selector in the [API Connectors](./configuration/api-connectors.md) endpoint panel.
- `ImportStatusHandler` decision tree relaxed — non-`failed` / non-`pending` statuses are treated as success (covers the IOPOLE `EMITTED` / `RECEIVED` vocabulary without per-PA config).

### Per-step debug profiling

- New optional **`debugProfile`** toggle on [global](./configuration/system/global.md) writes per-step timing rows to `F564237` (header, lines, validation, UBL emit, PA send). Surfaces in the [Tech Dashboard](./application/tech-dashboard.md) for spotting the slow stage in a batch run without ad-hoc logging.

### Smaller cleanups

- `UHALRTPSD` review flag surfaces on the [E-Invoicing list](./application/invoices.md) (column + coloured badge) so operators can spot rows flagged for retrospective review.
- Directory check now runs at validation time (not just at send time) so an unknown counterparty surfaces in `F564236` before the document is even queued. Reachability check is mapping-aware (LIKE search cast through the dialect helper so Oracle's `NCHAR` padding does not break partial matches).
- Pre-transform improvements in `isc-normalize.xsl`: `clientFacturation` / `clientConsommation` templates now pass through non-`adresse` children (so `consIdentite` and similar per-line tags resolve), and zero `prixUnitairekWh` values on credit / charge lines fall back to the sibling `montantHT` made unsigned (BT-146 must be ≥ 0 in UBL).
- New `e2e/` folder with a Playwright suite exercising the major pages (Dashboard, Invoices, Integration Errors, Settings → all editors, Notifications). Not yet wired into CI — run with `npx playwright test` on demand.

---

## 2026.05.8 — 2026-05-09 \{#v2026-05-8\}

Connector hardening release. The PA configuration story is now consistent across **e-invoicing**, **e-directory** and **e-reporting** — every system template references a reusable api-connector instead of carrying inline auth and endpoints, and the legacy inline shape is gone (no fallback). The mock infrastructure (`MockPlatformApiClient`, `MockTokenManager`, `paUseMock`/`paMockBehavior`) was retired. OAuth2 token requests gained form-encoded body support (`authTokenContentType` / `grant_type=client_credentials`) and per-request custom headers (`authTokenHeaders`) so PAs that need a tenant header on the auth call itself are now reachable. **E-Reporting** is fully decoupled from e-invoicing: it picks its own api-connector, its own endpoint, its own `paMode`, and can submit reports over **SFTP** as well as REST. The three system-template editors were reorganised into consistent multi-tab layouts.

### PA submission — E-Reporting decoupled from E-Invoicing

- E-reporting's submission backend used to share the e-invoicing template's connector, `paMode` and credentials. It now reads its own `connector` / `endpoint.report-import` / `paMode` from the [`e-reporting` template](./configuration/system/ereporting.md) (and per-company `e-reporting-{kco}` overrides), so reporting can target a different platform — or use different credentials on the same platform — than invoice import.
- New **SFTP transport** for report submission. Reuses the existing `PlatformFtpClient` (the class is resource-agnostic — it just needs `paFtp*` properties on whichever resource is passed in), so no new transport class. Branching happens in `EReportingHandler`: `paMode=API` goes through the api-connector, `paMode=FTP` spools the XML to a temp file and uploads via SFTP, empty `paMode` skips submission.
- The legacy `sendToPA` Y/N flag on `e-reporting` was replaced by `paMode` (API / FTP / empty). Same semantics, single field, consistent with e-invoicing.
- Configuration check now flags `paMode=API` without a `connector` and `paMode=FTP` without `paFtpHost` as errors, replacing the old `sendToPA=Y` / `issuerSiren` check.

### OAuth2 token — form-encoded + custom headers

- `ApiConnectorClient.fetchAndCacheOauth2Token` now reads `authTokenContentType` (`application/json` default, `application/x-www-form-urlencoded` to switch to form mode) and `authTokenHeaders` (semicolon-separated `Key:Value` pairs sent only on the token request — for PAs that need a tenant-id header on the auth call itself).
- New defaults when the body template is empty: form mode emits `grant_type=client_credentials&client_id={user}&client_secret={pass}` (URL-encoded); JSON mode keeps the JD Edwards AIS payload. Empty `authTokenField` now auto-tries `access_token` then `token`, so the standard OAuth2 client_credentials flow works without extra config.
- The [API Connectors](./configuration/api-connectors.md) Auth tab gained the matching **Body Content-Type** selector and **Token request headers** textarea.

### System-template editors reorganised

- All three system templates now follow the same multi-tab pattern.
  - **[E-Invoicing](./configuration/system/einvoicing.md)** (4 tabs): UBL Validation · PA Connection (connector + Timeout / SSL Verify) · FTP/SFTP (Send Mode + SFTP server, with the SFTP card dimmed when Send Mode ≠ FTP) · Status (Status Retrieval; polling intervals point users to *global → Scheduling*).
  - **[E-Directory](./configuration/system/edirectory.md)** (2 tabs): Directory (Enable Check + INSEE Search) · Connector (api-connector + per-task endpoint overrides). The legacy inline *API Connection* + *Credentials* groups were dropped — they were dead code since `PaConnectorResolver` was made strict.
  - **[E-Reporting](./configuration/system/ereporting.md)** (4 tabs, new shape): Identity · Reporting · PA Connection · FTP/SFTP — mirrors e-invoicing.
- **Send Mode** moved out of e-invoicing's PA Connection tab and into the FTP/SFTP tab where it logically belongs (default `API`; the toggle is only relevant when configuring FTP).
- **Background Scheduling** group removed from e-invoicing — it was writing to `fetchImportInterval` / `fetchStatusInterval` on the e-invoicing template, but `BackgroundScheduler` only reads them from `global`. The dead-write footgun is gone; users get a one-liner pointer to the right place.

### Mock infrastructure retired

- Deleted `MockPlatformApiClient`, `MockTokenManager`, and the `paUseMock` / `paMockBehavior` plumbing across `CustomUBL` / `UBLInvoiceProcessor` / `LogCatalog`. PA mock mode was only useful before the api-connector refactor — operators wanting offline tests now point an api-connector at a Postman mock or a local stub.
- The `EInvoicingEditor` lost the *Mock / Testing* tab (the editor is down to 4 tabs from 5). The Tech Dashboard no longer surfaces a PA mode / mock indicator. Configuration files and the `/api/system` payload no longer carry the dead `paUseMock` flag.

### Smaller cleanups

- ConfigApi check rewritten to walk the new connector reference shape end-to-end (per-template connector ref → resolves to api-connector → validates baseUrl + auth fields + per-task endpoint name resolution).
- `DirectoryApiClient` enforces the connector-reference shape via `PaConnectorResolver` (no fallback to inline). Same strict pattern as e-invoicing and e-reporting.
- Tombstone comments and dead `// retired in 2026.05` markers removed from `CustomUBL`, `UBLInvoiceProcessor`, `LogCatalog`, `IPlatformApiClient`, and `EInvoicingEditor`.

---

## 2026.05.7 — 2026-05-09 \{#v2026-05-7\}

Big release on the connector + notification side. New **SQL connector** template type lets you define named SQL queries the way the api-connector defines HTTP endpoints, with a parameter editor and a test panel. Both connector kinds can now be wired into **action bindings** and **notification rules**, which themselves grew a multi-call list with stop-on-failure and response chaining (`{call.N.fieldName}` placeholders). The notification-rule editor was reorganised into six tabs, action calls collapse behind a description header, and the inbox renders the action audit as colour-coded chips. Several long-standing dispatcher and editor bugs are also fixed.

### SQL connectors *(new)*

- New `sql-connector` template type — connection settings (Oracle / PostgreSQL / URL / DBUser / DBPassword / schema / timeout / maxRows) plus a list of named queries. Each query carries a name, label, free-form description, parameter spec (`name|label|default;…`), the SQL itself with `:param` placeholders, and a `Writable` flag. See [SQL Connectors](./configuration/sql-connectors.md).
- Parameter binding goes through `PreparedStatement` — `:name` tokens are rewritten to positional `?` and bound positionally, so values are never string-substituted into SQL. The parser respects single-quote string literals, double-quoted identifiers, line + block comments, and the PostgreSQL `::type` cast operator.
- Statement-type allow-list: `SELECT` / `INSERT` / `UPDATE` / `DELETE` / `MERGE`. `DROP` / `TRUNCATE` / `ALTER` / `GRANT` etc. are rejected before the connection opens. Non-`SELECT` statements additionally require `Writable=Yes` on the specific query — typos in a notification rule cannot accidentally fire `DELETE FROM …`.
- New backend route `/api/sql-connectors` (list + execute), parallel to `/api/connectors`. New `SqlConnectorEditor` in *Settings* with three tabs: **Connection** / **Queries** (collapsible per-query cards) / **Test** (runs the query against the live DB, shows columns + rows or affected count).
- **+ Add SQL** button on the Settings header next to **+ Add API**; SQL connectors get their own sidebar group with an `sql` badge.

### Multi-call action bindings + notification rules

- Action bindings (the regulatory buttons in the invoice modal) and notification rules now hold a **list of connector calls** instead of a single call. Calls fire in declaration order; the default is *continue on error*, mirroring the email channel's semantics.
- Per-call **Stop on failure** flag halts the chain on the first failure, reported in the audit trail as `STOP · N remaining call(s) skipped`.
- Per-call **Description** field shown as the collapsed-card header so a binding with several calls reads as a punch-list at a glance. New calls auto-expand; loading a rule collapses everything.
- **Response chaining**: each call's outputs are folded back into the context under `call.N.*` keys, and subsequent calls reference them with `{call.N.fieldName}` in their payload.
  - api-connector calls expose every `endpoint.N.response.*` mapping the connector defines, plus `success` / `statusCode` / `error`.
  - sql-connector calls expose the first row's columns by name, plus `success` / `rowCount` / `updateCount` / `statementType` / `error`.
- Backward-compat shim: existing single-action rules and bindings keep working — the legacy flat keys are read into a one-entry call list on load and rewritten into the canonical `action.N.call.M.*` shape on the next save.
- The frontend `executeConnectorAction` helper routes by the connector's template type (api/sql) and returns a uniform envelope, so the invoice-modal action runner does not care about kind.

### Notification rule editor refactor

- The single long form is replaced by **six tabs**: General · Trigger · Channels · Email · Actions · Test. The tab resets to *General* when you switch rules.
- Recipient settings sit under *Channels* with the deliver-via checkboxes. *Email* and *Actions* tabs show their content unconditionally; the action-channel checkbox is retired (action calls fire automatically when the rule has at least one — disable the rule itself to suppress them).
- Connector dropdown lists api-connectors and sql-connectors merged with `· API` / `· SQL` suffixes; the target dropdown loads endpoints or queries depending on the picked connector kind.

### Notification audit trail in the inbox

- The dispatcher now appends a per-call audit footer to the rendered body (stored in `NTK74MSG2`) so the portal record carries a permanent trail of *what fired with this alert*. Capped at the column width minus a safety margin.
- The inbox renders the audit as colour-coded chips below the message — `OK` green, `FAIL` red, `STOP` orange, `SKIP` muted — instead of leaking the audit lines inside the line-clamped body.
- The bell preview strips the audit footer and surfaces a one-line summary in its place: *2 action(s) ran* (muted) or *1 of 2 action(s) failed* (red), so a glance at the bell is enough to know whether to drill into the inbox.

### Notification dispatcher fixes

- **Actions never fired from notifications.** Three causes, all gone:
  - The dispatch loop required the legacy *action* channel checkbox; the gate is removed — a non-empty action list is now sufficient.
  - The dispatcher early-returned when `recipients.isEmpty()`, suppressing action-only rules and rules whose recipient lookup failed; the early return is gone (portal/email loops naturally no-op on an empty list).
  - Most importantly, `EmailDispatcher.send()` could hang on `transport.close()` against picky SMTP servers (Gmail's `QUIT`). The worker thread stayed blocked forever, silently suppressing every subsequent step. Fixed by (a) running actions **before** email so a hung SMTP teardown can never block them, and (b) bounding `transport.close()` on a daemon thread with a 5-second budget — the message has already been delivered by `sendMessage`, so abandoning the close is safe.
- Diagnostics: per-dispatch and per-call structured `INFO` lines on stdout (`dispatch rule=X status=Y channels=… actions=N`, `dispatching N action call(s)`, `call #N → connector/endpoint`, `api-action … HTTP 200` / `sql-action … ok (N row(s))`), with `WARN` on stop-on-failure and slow SMTP close, and `ERROR` lines carrying the failure reason.

### Editor bug fixes

- **`ConfigApi.updateTemplate` now full-replaces** the resource's properties instead of merging the new map over the old set. Without this, editors that renumber indexed lists (action calls, endpoints, queries, status codes) leaked stale entries — a deleted call #2 would resurrect on the next load because `action.2.*` was never removed. The fix applies to every editor that round-trips a structured props map.
- **api-connector *Add mapping* button works** — the local-state effect in `ResponseMappingsEditor` now uses a JSON-stringified dependency so empty rows survive the parent re-render. Previously the new row vanished the moment you clicked because the parent's empty Record was a fresh object reference each time.
- New `Resource.removeProperty(name)` and `Resource.clearProperties()` helpers used by the full-replace save path.

### Live process events tail (Tech Dashboard)

- `/api/dashboard/log-tail` rebuilt around `F564237` (runtime processing log) instead of `F564236` (validation errors). The Tech Dashboard widget now shows scheduler-driven jobs starting and finishing in real time with method badges (`START` green, `END` blue, errors red).
- Query bounded to today (`FEUPMJ = today AND FEUPMT > since`) with a cross-midnight fallback that drops the time floor when the widget was paused across the date boundary — the predicate stays on the index regardless of historical depth.

### Filesystem widget — group by partition

- `File.getFreeSpace()` reports partition-level numbers, so every path on the same mount used to render an identical disk-usage bar. The backend now emits an `fsId` per path; the widget groups paths by `fsId` and shows the disk usage once per filesystem with the path rows underneath.

---

## 2026.05.6 — 2026-05-09 \{#v2026-05-6\}

New IT-team **Tech Dashboard** with 14 widgets covering JVM / DB / disk / throughput / errors / scheduler — separate page from the existing business dashboard so the operations and ops audiences each get a view sized to what they care about. Business dashboard rebalanced for alignment, configuration check rewritten against the connector-style schema, and an in-memory IP tracker fills in for *Active sessions* when auth is disabled.

### Tech Dashboard (new page)

- New **Documentation → Tech Dashboard** route bundling everything an IT operator needs at a glance: System Health (JVM heap / GC / threads / uptime), DB ping, build info, Filesystem widget (free/total + file count for `appHome` / `processHome` / `dirInput` / `singleOutput` / `burstOutput` / `dirArchive` / `dirError`), Throughput chart, Error trend sparkline, Retry rate, Template processing time, Active sessions, Live process events (START / END from running jobs, errors highlighted), Configuration check, Database tables, Recent errors, Scheduler. See [Tech Dashboard](./application/tech-dashboard.md).
- New backend endpoints under `/api/system`, `/api/dashboard/tech`, `/api/dashboard/log-tail`, `/api/dashboard/config-check` — bundled payloads keep the page on a single round-trip per refresh.
- Filesystem widget walks each path recursively (capped at 5000 files for cheap calls) and handles runtime placeholders (`%TEMPLATE%`, `%FILE_NAME%`) by truncating at the first one and reporting on the deepest existing-by-shape directory above it. `dirOutput` removed from the list — it's covered by `processHome`.
- Template processing time card pulls flat START/END events from `F564237` and pairs them in Java keyed on `(FEWDS1|FEUPMJ)` with `hhmmssToSeconds()` for proper duration arithmetic — replaces a broken self-join SQL that had ambiguous `FETMPL` and incorrect `e.FEUPMT - s.FEUPMT` math.

### Business Dashboard cleanup

- Scheduler widget removed (it lives on the Tech Dashboard now — the business audience does not need it).
- Bottom row reorganised from `(Per-company 6 | E-Reporting 6)` + `(Round-trip 6 | Scheduler 6)` to a single `Per-company 4 | E-Reporting 4 | Round-trip 4` row so three short widgets share one balanced row instead of leaving a half-empty cell.
- Grid switched to `align-items: stretch`, panels grow with `flex: 1` inside their Span — Recent Activity now reaches the same bottom edge as the stacked Needs Attention + Top Failing Rules column next to it. Same fix lines up the new ops row.

### Active sessions when auth is disabled

- New in-memory `ActivityTracker` (per-IP `lastSeen` map) updated on every request from `WebServer.handle()`. When `authEnabled=N` there are no `F564252` rows to count, so the dashboard's *Active sessions* card now falls back to *Active clients · 15m* populated from this tracker — the IT team finally sees whether anyone is hitting the app and from where, without enabling auth first.

### Configuration Check rewrite

- `/api/dashboard/config-check` was validating obsolete property names (`paApiBaseUrl` / `paApiLoginEndpoint` / `paApiImportEndpoint` / `paApiUsername` / `paApiPassword` / `paApiDirectoryEndpoint` / `paApiEReportingEndpoint` / `ublXsdPath` / `ublSchematronPath`) — none of which exist on the connector-style schema in use today. Card was showing 8 false errors on a perfectly-good config.
- Now validates: `baseUrl`, `authType`, credentials per auth type (OAUTH2 / BASIC / BEARER), and the existence of an endpoint named `import` (and warns if `import-status` is missing). E-directory validates `baseUrl` + `directory-check` endpoint when `checkDirectory=Y`. E-reporting validates `issuerSiren` / `frequency` / `flux` when `sendToPA=Y`. Obsolete UBL XSD/Schematron path checks removed — validation assets are bundled in the JAR.

### Other

- Sidebar *Documentation* group now contains the Tech Dashboard link.
- ProcessingLog grouped view tiebreaker uses `FEUKID` so two events with the same `UPMJ`+`UPMT` keep stable order across refreshes.

---

## 2026.05.5 — 2026-05-08 \{#v2026-05-5\}

Architectural pass driven by the column-name refactor: every SQL site in the backend now goes through `UBLColumnConfig` (no more hardcoded `UHKCO` / `FETXFT` literals) and through `UBLTableConfig` (auth + notification tables join the rest as configurable). Role permissions become rows (`F564254`) instead of CSV columns, so adding a new permission dimension is an INSERT rather than a DDL change. Status-code grouping, runtime log, and e-reporting BLOBs all got reshaped to be JDE-compatible and dialect-aware. Two long-standing Oracle bugs around NCHAR padding and quoted comments are fixed.

### Column / table configuration refactor

- All Java sub-handlers (`InvoiceApi`, `EReportingApi`, `IntegrationApi`, `DashboardApi`, `AiAssistant`, `WebApiHandler`, `UBLDatabaseHandler`, `RuntimeLogHandler`, `UBLInvoiceProcessor`, …) now resolve column names exclusively through `cols.<accessor>`. The `db-nomaubl-columns` template overrides them all consistently — no more silent drift on customer-renamed columns.
- Auth tables (`F564250` users, `F564251` roles, `F564252` sessions, new `F564254` permissions) and the notifications table (`F564253`) are now first-class entries in `UBLTableConfig` and the *Settings → db-nomaubl → Tables* tab, on the same footing as invoice / e-reporting tables. They participate in DDL substitution if renamed.
- `WebServer.java` is JDBC-free: `resolveKeysByUblNumber`, `readTemplateName`, the auth-validate middleware, and the UBL blob read all moved to the `api/*` sub-handlers; `WebServer` only routes now.
- New build-time **Cross-Reference** page (Documentation → Cross-Ref) shows every Java call site that reads `tables.<X>` or `cols.<X>`, with an "unused accessors" toggle to surface dead code. Generated by `XrefScanner` on every `bash build.sh`, no manual upkeep.

### Role permissions — row-based grants (F564254)

- New `F564254` table (`PMROLE`, `PMCRAPPID`, `PMCRAPPVAL`, `PMENABL`) replaces the four CSV columns `RLPAGES` / `RLCOMPANIES` / `RLSETTINGS` / `RLREADONLY` on `F564251`. Each grant is a row keyed by type (`page` / `company` / `feature`); adding a new permission dimension is now an INSERT, not a DDL change.
- Idempotent bootstrap: dropping `F564254` and re-running *Init Database* re-seeds admin/viewer grants without touching existing role rows. Reports the count of newly-inserted grants.
- Roles editor (*Settings → users-roles → Roles*) redesigned: card list with copy / delete actions, expanded edit panel with per-feature checkbox + helper text, companies as an add-row table (no more comma-separated text), *Allowed Pages* with friendly labels (i18n `nav.*` keys reused from the Sidebar) plus the page id beside it in muted monospace. *Tag* column is read-only — it's referenced by Java factory methods so renaming would silently break callers.
- `F564252` (sessions) renamed to JDE conventions: `SSLSID` (UUID token) / `SSUSER` / `SSSTDTIM` (start) / `SSETDTIM` (end). `F564251` / `F564254` carry the JDE audit fields (`USER` / `PID` / `JOBN` / `UPMJ` / `TDAY`).

### Status-code groups + Dashboard cleanup

- *Statuses* template gains a 6th pipe-field for groups: top-level (`inflight` / `errorTech` / `errorBusiness` / `terminal`) and funnel stages (`created` / `sent` / `pending` / `transmission` / `approved` / `rejected`). New `/api/status-codes/groups` endpoint serves them.
- Backend `DashboardApi` SQL counters and frontend dashboard cards (`PipelineFunnel`, `EReportingCoverage`, `StaleInvoices`, `RecentActivity`, `invoiceHelpers.statusColors`) now read from this single source instead of inlining literal `IN ('9904','9905',…)` lists. Adding a new PA status code is one line in `config-template-lists.json`.
- React `statusGroupsStore` loaded once at app boot triggers a one-shot global re-render when the cache hydrates; status colours show correctly on first paint after login (no more "navigate away and back" workaround).
- *Statuses* editor: each status row now expands into a 4-column form with chip + dropdown groups picker and search across code / tag / labels / PA code / group labels. Tag is read-only.

### Runtime processing log (F564237)

- Added `FEUKID` PK (sequence-based, computed via `COALESCE(MAX(FEUKID),0)+1` at insert time, dialect-neutral).
- Renamed columns to JDE convention: `FEMODE` → `FERMK`, `FEMETHOD` → `FERMK2`, `FEMESSAGE` → `FEK74MSG1` (1024). `FETMPL` width brought down to 40.
- Insert truncations match the new widths exactly. Process-log REST payload now includes `id`, used as a stable React key and as a third-level sort tiebreaker so two events with the same `UPMJ`+`UPMT` no longer flip order between page loads.
- Grouped-jobs view: same `FEUKID` tiebreaker fixed the `START` / `END` ordering bug where the badge claimed both as orphans even though they paired up. FATAL error rows now show a compact `FATAL ERROR` / `ERROR` / `FAILED` badge + the full path in the message column (was overflowing the row before).

### E-Reporting binary XML (F564260.RGTXFT)

- Schema column changed from `TEXT` / `CLOB` to `BYTEA` / `BLOB`. Backend writes XML as UTF-8 bytes via `dialect.writeBlob` / reads via `dialect.readBlob` (was using `writeText` / `readText` which break on the new binary type).
- Note: the e-reporting tables are renumbered — `F564240` / `F564241` / `F564242` become `F564260` / `F564261` / `F564262`. Child-table FK columns shift from `RGUKID` to `RHUKID` (lifecycle) and `RIUKID` (mapping). See [Database Tables](./references/database-tables.md).

### Dialect-aware TRIM (Oracle NCHAR padding)

- New `DatabaseDialect.trimChar(col)` helper — wraps with `TRIM(col)` on Oracle (handles JDE `NCHAR`'s blank-padding silently breaking equality binds), returns the column verbatim on PostgreSQL `VARCHAR` (no padding, no wasted function call → indexes stay usable).
- Fixed the customer-platform notification bell that was permanently empty: with NCHAR-padded `*` and a JDBC string bind, the WHERE clause was evaluating `'*         '` (10 chars) vs `'*'` and silently not matching. Same root cause was hiding behind the dispatcher's broadcast inbox semantic too — both addressed.
- Sweep through 9 files / 47 occurrences: `InvoiceApi`, `DashboardApi`, `IntegrationApi`, `EReportingApi`, `EReportingFetcher`, `AiAssistant`, `JDEBipExtractor`, `InvoiceStatusesHandler`, `ApiCommons.categoryFilter`. All now route through `dialect.trimChar`.

### DDL runner

- Statement splitter is now quote- and line-comment-aware. Previously any `;` inside a `'…'` literal (e.g. inside a `COMMENT ON COLUMN IS '…; …'` body) cut the statement in half, producing `Unterminated string literal` errors at init time.

### UI / settings

- *Settings → db-nomaubl → Tables* exposes *Auth · Users / Roles / Sessions / Permissions* and the *Notifications* table alongside the existing invoice + e-reporting tables.
- *Validation Errors* panel of the Invoice detail modal lays each row on two lines now (level + rule + date on top, message wrapped below) so long localized rule text stops competing with the rule code for horizontal space.
- `db-nomaubl` *Initialize* tab log area fills the available height instead of capping at 200 px with empty room beneath.

---

## 2026.05.4 — 2026-05-07 \{#v2026-05-4\}

Dashboard rebuilt as a 12-column widget grid + Integration Errors page upgraded into a proper failure-analysis tool, with rule descriptions extracted from the bundled Schematron files so users no longer have to decode a rule code by hand. Light mode is now the default. Two Oracle-dialect bugs that silently emptied dashboard panels on customer installs are fixed.

### Dashboard

- Twelve-column widget grid replaces the previous stacked layout. Hero row (Total / In flight / Rejected — IT / Rejected — Business) drives off the existing per-status counts; below it, a Pipeline funnel, a Volume chart, paired Recent activity / Stale + Top failing rules, Per-company / E-Reporting coverage, and Round-trip / Scheduler health rows.
- Recent activity / Top failing rules row split 6/6 down the middle to match the rows below — the previous 8/4 split made the Recent activity card visibly wider than its right-hand neighbour.
- Top failing rules widget gets an `ALL / UBL / INTEG` category toggle in its header and replaces the proportional bars with equal-width ranked rows (rank badge + rule code + secondary description line + count). The old proportional bars made counts of 160 vs 10 visually almost identical.
- Hero stat cards click through with a multi-status filter (`/api/invoices?status=A,B,C`) so the *In flight* / *Rejected — IT* / *Rejected — Business* cards land on a properly filtered list instead of dropping the status filter.

### Integration Errors page

- View toggle: by-event (existing flat table) and by-rule (ranked cards grouped by rule + source, each card showing invoice count and per-severity chips). Cards stay equal-width via `auto-fill` so a short last row no longer stretches a lone card across the full row.
- New `Unmatched only` checkbox — keeps the previous behaviour (errors with no joined invoice) one click away while letting the default view show all errors.
- Category filter (`UBL validation` / `Integration / lifecycle`) on both views, mapped to a `UVSRCL IN (...)` list on the backend so Schematron / XSD rules can be analysed separately from runtime / dispatcher errors (PDF, PA, DB, …).
- Row click on the by-event view opens the invoice detail modal on its History tab (mirrors Notifications).
- Deep-links from the dashboard's Top failing rules widget — the *View all* link opens the by-rule tab and clicking a specific rule lands on the by-event view with that rule pre-applied as a filter chip.

### Validation rule catalogue

- New `ValidationRuleCatalog` (Java) parses the bundled `.sch` files at first call and extracts a `{rule id → human description}` map by matching `[<id>]<sep><description>` lines inside each `<assert>` block. The separator is permissive (`-` or `:`, optional surrounding whitespace) so it covers the three formats in the four bundled schematrons:
  - EN 16931: `[BR-CL-23]-Description` (no spaces)
  - FREXT-IC: `[BR-FREXT-IC-08] - Description` (spaces)
  - CIUS-FR: `[BR-FR-23/BT-49] : Description` (colon, plus the FNFE-MPE convention where the assert id uses `_` and the bracket label uses `/` — the lookup retries with `_`→`/` automatically).
- The opening-tag matcher captures attributes as a single blob so it finds `id="…"` regardless of attribute order — the earlier draft required `id` to be the first attribute and silently skipped every CIUS-FR rule.
- Twelve lifecycle / integration rules from `ErrorCatalog` (`UBL_CREATION`, `DB_INSERT`, `PA_SEND`, …) are seeded with FR descriptions in the same map.
- New endpoint `GET /api/integration-errors/catalog` returns the merged catalogue. The frontend caches it once per page load via a small `useRuleCatalog` hook.
- Where rule codes appear (Top failing rules widget, by-rule cards, by-event Rule column) the description is shown as a tooltip and as a secondary line under the code.
- Known gap: the `BR-FR-CPRO` schematron's 34 asserts have no `id` attribute, so the validator records empty rule codes — those rows remain unlabelled.

### Oracle dialect fixes

- `loadByCompany` and `loadRoundTripStats` both used `column <> ''` to guard against empty rows. On Oracle, empty strings are stored as `NULL`, and `NULL <> ''` evaluates to `NULL` (treated as false), so the WHERE collapsed and both queries returned zero rows on customer Oracle installs while working fine on the local Postgres. Replaced by `LENGTH(TRIM(column)) > 0` (loadByCompany) and removed entirely from `loadRoundTripStats` where the IN-list already filters NULLs on both dialects.

### Theme

- Light mode is now the default for first-time visitors. The toggle still persists the user's choice in `localStorage`, so anyone who previously selected dark mode keeps it.

---

## 2026.05.3 — 2026-05-06 \{#v2026-05-3\}

Notification system — invoice status changes now reach users through a portal inbox, email (with the rendered invoice PDF attached by default), and external API calls, all governed by user-defined rules.

### Storage + dispatcher

- New `F564253` table (Oracle + Postgres DDL, plus `AuthManager.initTables` so a fresh install creates it automatically). One row per delivered notification, keyed by `NTUKID` alone, with `(NTDOC, NTDCT, NTKCO)` referencing the invoice. Composite indexes on `(NTUSER, NTEV01, NTUPMJ DESC)` for the bell badge / inbox queries and `(NTDOC, NTDCT, NTKCO)` for invoice-level history.
- New `custom.ubl.notify` package: `NotificationDispatcher` (singleton with a 2-thread asynchronous worker pool), `NotificationDatabaseHandler` (CRUD on `F564253` with insert-time width truncation matching the column sizes), `EmailDispatcher` and the `NotificationRule` POJO.
- Rules persist as `notification-rule` resources in a dedicated `config-notifications.json` file alongside the main config; `ConfigJson` dispatches to the right file based on the resource type.
- Daily retention sweep in `BackgroundScheduler` driven by `global.notificationsRetentionDays` (default 90, `0` disables).
- The dispatcher registers a JVM shutdown hook on first `initialize()` so CLI runs that exit immediately after a status update still drain the worker pool (2-second grace) before the process dies.

### Status-change integration points

- Hook in `InvoiceStatusCatalog.StatusTransition.apply()` after the DB writes — rules are matched and dispatched on every status change. All exceptions are caught: a notification failure never aborts the underlying status update.
- The just-applied status / reason / action data is passed straight to `NotificationDispatcher.fire(...)` so the dispatcher does not re-read `F564231` from a separate JDBC connection — that read returned a stale snapshot when the calling transaction (e.g. `ImportStatusHandler`) had not committed yet, surfacing the previous status's label in the notification body.
- The UI-driven `SetStatusModal` (DB target) now also fires notifications — that path bypassed `StatusTransition.apply` and was previously silent.
- CLI modes (`-process`, `-fetch-import`, `-fetch-status`, `-fetch-single`, `-fetch-all`, legacy `-run`) now call a shared `initRuntimeCatalogs` helper that initialises both `InvoiceStatusCatalog` and the `NotificationDispatcher`. Without this, batch flows updated statuses but skipped notifications because the dispatcher singleton was never initialised.

### Email channel

- Single SMTP transaction per dispatch — every address (the portal user's resolved email plus every entry in `emailRecipients`) goes on the message's `To:` header in one `Transport.sendMessage` call. The previous per-address loop hung whenever an SMTP server mishandled the connection close mid-loop, silently swallowing every send after the first.
- Explicit `Transport.connect` / `sendMessage` / `close` inside `try/finally` with hard socket timeouts (`connectiontimeout`, `timeout`, `writetimeout` — all 20 s). Close failures are swallowed so a stuck cleanup cannot poison the next dispatch.
- Auto-rendered invoice PDF attached by default — controlled by the rule's `attachPdf` flag (default `Y`). Rendered once per dispatch and reused across every recipient. PDF render failures are logged but never fail the email itself.
- Default subject and body when the rule's `emailSubject` / `emailBody` are blank — `Invoice {doc} {dct} {kco} — {statusLabel}` for the email subject, `Status / Reason / Action` lines for the body. The portal `NTMSGP` keeps just the status label since the inbox UI already shows `NTDOC · NTDCT · NTKCO` alongside it.

### Recipient model

- Portal target (user / role) and `emailRecipients` are independent fields — set either or both. The portal target also receives the email channel automatically when their account has a `USEMAIL` on file.
- `emailRecipients` accepts both `,` and `;` separators.
- Backward compat: legacy rules with `recipientType=email` are migrated on load — the address moves into `emailRecipients`, the type clears.
- Recipient resolution is now tolerant: when the `F564250` lookup fails (no `db-nomaubl` connector, missing table, transient outage), a portal-only recipient is still emitted using the literal username instead of dropping the rule with a *No recipients resolved* message.

### Auth-disabled installations

- When `global.authEnabled != "Y"`, the dispatcher writes portal rows under a single broadcast sentinel (`NTUSER='*'`) and the inbox / bell endpoints query the same sentinel when no user is logged in. Notifications work without any `F564250` row.
- The bell stays visible in the top utility bar regardless of auth state (previously hidden inside the auth-only branch).
- The recipient editor adapts its labels: when auth is disabled, the empty option reads *Broadcast — all portal users* instead of *None — emails only*.

### Frontend

- New **Notifications** page (promoted from Management to Application in 2026.05.4) — inbox with All / Unread tabs, mark-all-read, per-row dismiss, status badge with catalog-driven colours, accent stripe for unread rows, and a meta line showing `doc · dct · kco · reason · action · rule`. Clicking a row opens the linked invoice in `InvoiceDetailModal`. See [Notifications](./application/notifications.md).
- New **Notification Rules** editor — sidebar list + form with sections for trigger, channels, recipient, email content, action call, and a synchronous Test panel that actually fires the rule. Trigger codes use chip multi-selects fed from the `statuses` and `rejection-reason-codes` resources, so the rule trigger and the codes assignable to an invoice cannot drift apart. The action section mirrors *Process API*: connector dropdown, endpoint dropdown populated from `api.connectors.listEndpoints(...)`, and parameter rows pre-populated from the endpoint's defined params. See [Notification Rules](./management/notification-rules.md).
- New **NotificationBell** in the top utility bar — polls `/api/notifications/unread-count` every 30 s, shows a red badge with the unread count, and drops down the last 6 notifications. Clicking a notification marks it read and opens the invoice modal directly via a `nomaubl:open-notification` window event (so it works even when the user is already on the inbox page and the component does not remount).
- Role grants for the two new pages plus a new `bell` icon in the central icon set.

---

## 2026.05.2 — 2026-05-06 \{#v2026-05-2\}

French B2B PA submission — qualified PDF attachments (LISIBLE + co-attached documents) and several round-trip-integrity fixes that surfaced while shipping it.

### LISIBLE attachment + qualified additional attachments

- New `lisible` Y/N flag on doc-templates. When `Y`, a PDF is rendered from the freshly-built UBL via the resolved `pdf-template` and embedded back as the human-readable invoice attachment (`cbc:ID = "LISIBLE"`). Independent of the existing `attachment` dropdown — both can fire on the same invoice.
- New `additionalAttachments` JSON property — list of `{code, path}` entries embedded as `cac:AdditionalDocumentReference` blocks. UI editor in the Document tab with a code dropdown (`RIB`, `BON_LIVRAISON`, `BON_COMMANDE`, `PJA`, `BORDEREAU_SUIVI`, `BORDEREAU_SUIVI_VALIDATION`, `DOCUMENT_ANNEXE`, `ETAT_ACOMPTE`, `FACTURE_PAIEMENT_DIRECT`, `RECAPITULATIF_COTRAITANCE`, `FEUILLE_DE_STYLE`) and a path field. Paths support `%APP_HOME%`, `%ENV%`, `%DOCNAME%`, `%KCO%`, `%DOC%`, `%DCT%` placeholders. Missing files are logged and skipped — they do not fail the surrounding processing.
- `Tranform.embedPdfInUBL` gains a new String-code overload. The qualifier becomes `cbc:ID` of the inserted `cac:AdditionalDocumentReference`. `cbc:DocumentTypeCode` is **not** emitted (UBL-SR-43 reserves it for invoiced objects 130 / 50) and `cbc:DocumentDescription` is **not** emitted either (the PA returned HTTP 400 when it was present alongside the embedded attachment). The 3-arg signature is unchanged so callers using the legacy `PDF_Invoice` shape are unaffected.
- `PdfTemplateEngine.render` and `InvoicePdfGenerator.generate` gain a `mergeAttachment` boolean. The LISIBLE flow passes `false` so the rendered PDF does not inherit any already-embedded attachment from the legacy `create` / `attach` flow — otherwise LISIBLE would visibly duplicate the original PDF inside itself.

### XML format fixes for PA acceptance

The Plateforme Agréée parser turned out to be byte-sensitive in ways the legacy code did not honour:

- `embedPdfInUBL` used to round-trip the UBL through JDK's Xalan transformer which emits `<?xml version = '1.0' encoding = 'UTF-8'?>` (spaces around `=`, single quotes). Switched to Saxon (the same engine `convertToUBL` uses) so the output matches `<?xml version="1.0" encoding="UTF-8" standalone="no"?>` byte-for-byte. Explicit `STANDALONE = "no"` output property; `filename` attribute emitted before `mimeCode` to match the legacy ordering.
- `convertToUBL` also forces `standalone="no"` so flows that bypass `embedPdfInUBL` (no-attachment runs) get the same XML declaration the PA accepts.
- New `AdditionalDocumentReference` is inserted on its own line — the indent text is copied from the existing whitespace text-node, with extra leading-indent injection when the previous sibling is an Element (consecutive attachments + the trailing `<cac:AccountingSupplierParty>` each keep their `\n   ` separator).

### ConfigJson re-indent guard

`tryReIndentJson` was unwrapping every string that started with `{` or `[` as nested JSON — including template placeholders like `"{content}"`, `"{statusAt}"`, `"{reportName}"` used by other templates. The unwrap "succeeded" because the bracket structure balanced, producing object-of-bare-words garbage that left `config.json` unparseable on the next reload. New `looksLikeJson()` heuristic requires either an empty container or a real JSON value-starter (quoted key after `{`, etc.) before recursing. Existing templates with `{placeholder}` strings now round-trip cleanly.

### Misc

- `parseUblXml` reads `cbc:LineExtensionAmount` (BT-131) directly and `InvoiceDetailModal` displays it as the line amount instead of recomputing `qty × price ± allowances` — the recompute double-counted when the unit price was already net (a 45 × 12,75 line with a 489,15 line allowance was showing 84,60 instead of 573,75 in the modal while the PDF was correct).
- `ubl-template.xsl`: new `TAG_CUSTOMER_SIRET` slot (BT-46) alongside the existing buyer SIREN.

---

## 2026.05.1 — 2026-05-05 \{#v2026-05-1\}

PDF template engine — Phase 2: PDF templates become first-class shareable resources, gain a generic XPath-driven `block` section, and a full visual canvas editor.

### PDF templates as first-class resources (Phase 2a)

- New resource type `pdf-template`, persisted in `config-pdf.json` (renamed from the original `config-pdf-templates.json` for brevity).
- New top-level **PDF Templates** page (sidebar entry under Management) for creating, copying, importing, exporting and editing layouts independently of any document template. See [PDF Templates](./management/pdf-templates.md) for the full reference.
- Documents reference a layout via the `pdfTemplate` property on the doc-template resource. Many documents can share one PDF template — edit once, propagate everywhere.
- Resolution chain: doc-template's `pdfTemplate` → `defaultPdfTemplate` on `global` → bundled built-in. The reserved name `built-in` is read-only and always available as a safety fallback.
- Pretty-printed JSON on disk: nested `template` / `config` objects are emitted as real JSON objects (with proper indentation), not escaped strings, so they remain readable in any editor. Round-tripped via the shared `ConfigJson.readPropertyValue` so loaders stay agnostic of the on-disk shape.

### Generic `block` section (Phase 2b)

- New section type `block` — XPath-driven layout primitives that compose into arbitrary content without needing a bespoke section class:
  - `text` (literal), `field` (XPath value, with optional inline label and `date` / `currency` / `number` / `percent` formatting);
  - `image`, `spacer`, `hr`;
  - `row` / `column` containers (alignment + gap);
  - `repeat` (XPath → list, renders its `child` per match);
  - `if` (XPath → boolean, renders `child` when true);
  - `table` — `rows × cols` grid with optional cell borders and a styled header row. Setting `xpath` makes it iterate (one row per match), with children acting as the per-row template.
- Table cell XPaths inside an iterating table are auto-relativized: an absolute path that starts with the iterator's xpath is stripped at render time so each row evaluates against its own iterated context node.
- Row `align: end | center` shrinks the row to ~50% width and aligns the whole table to that side, instead of stretching equal cells across the page (so "label + value" stays grouped on the right).

### Visual canvas editor (Phase 2c)

- New `BlockCanvasEditor` mounted inside any `block` section's drawer: three stacked panes (tree, toolbar, inspector) plus a JSON escape hatch.
- Inspector: per-kind attribute forms with a style sub-panel; the **Kind** select at the top morphs the selected node in place (column → repeat without a delete-and-re-add) via a `transmuteKind` helper that carries over compatible fields.
- Sample XML loader lifted to the template-level header — load once, every block reuses the entries for XPath autocomplete.
- The XPath picker preserves `cbc:` / `cac:` namespace prefixes (required by the namespace-aware backend) and emits **`/*/<full-path>`** so picks are unambiguous and root-agnostic (Invoice and CreditNote alike). Inside an iterating ancestor, the picker further strips the iterator prefix so cells start with relative paths (`cbc:TaxAmount` instead of `/*/cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount`).
- Live preview moved to the top of the form and opens in a 960 × 85vh modal — no more scroll-down / scroll-up loop while iterating on a layout.
- Section picker moved to the top and converted to chips: one click adds a section at the top of the list, auto-expanded so the inspector is immediately visible. `block` can be added several times per template; each block has a user-friendly `name` shown next to the section row.

### Preset section drawer rewrite

- Toggles use the shared `Checkbox` component (consistent rounded-blue style instead of the native dark-mode checkboxes).
- Toggles are parsed by their `Category · Name` prefix and grouped into side-by-side columns mirroring the actual PDF layout — *Header* reads as **METAS** | **SUPPLIERS**, *Line Table* as **Group headers** | **Columns** | **Sub-details** instead of one long flat list.
- Drawer border softened: thin solid border with a 2 px blue accent on the left.

### Critical correctness fixes

- **JSON top-level scanner:** the bespoke parser used naive `indexOf` to locate `"<key>"`, which silently matched the first nested occurrence. A table with `children` listed before `xpath` ended up with the table's `xpath` resolved to the *first child's* xpath, the iterator returned 0 nodes, and the entire table vanished from the rendered PDF. Replaced by `findTopLevelValueStart` that respects bracket / string state and only matches keys at depth 1. Affects `readString`, `readFloat`, `readBool`, `readStringArray`, and the `tree` / `children` / `child` / `style` lookups in `parseNode`.
- **Editor echo loop:** `parseConfig` was dropping the block's `name` field and `PdfTemplateForm`'s `useEffect [value]` re-parsed on every echo — combined, every keystroke triggered `setSelectedPath([])` and remounted the inspector, stealing focus and (for repeated emits) freezing the page. Both functions now preserve `name`, and both seed effects skip when the incoming value matches the last value emitted (`lastEmittedRef`).
- **Iterating tables:** an empty NodeList now returns `null` cleanly so OpenPDF doesn't choke on a 0-row table, per-cell renders are wrapped in their own try/catch so a single bad cell becomes an inline `[ERROR]` placeholder instead of breaking the whole row layout.

### Backend / shared helpers

- `PdfContext` now carries the parsed namespace-aware `Document` so block sections can run XPath without re-parsing the UBL XML.
- `ConfigJson` exposes `readPropertyValue`, `findStringEnd`, `findMatchingBracket`, `jsonUnescape`, `compactJson` and `tryReIndentJson` so other resource types can opt into pretty-printed nested JSON storage.

---

## 2026.05.0 — 2026-05-05 \{#v2026-05-0\}

A large refactor across the document-processing pipeline, the PDF generator, and the invoice REST surface.

### Document-template-driven processing (XML or UBL)

- New `source` property (`XML` | `UBL`) on every document template. The Document tab in **Management → Documents** picks it.
- `XML` keeps today's behaviour (XSL transform → UBL → DB → PA send).
- `UBL` is for files that are already UBL 2.1 invoices. The `(doc, dct, kco)` primary key is parsed from the invoice's `cbc:ID` via a regex with named groups (`idPattern` + per-key `docDefault` / `dctDefault` / `kcoDefault` fallbacks). Examples:
  - `F202600025` → `^(?<dct>[A-Z]+)(?<doc>\d+)$` (`kcoDefault = 00001`)
  - `38706889RI00001` → `^(?<doc>\d+)(?<dct>[A-Z]+)(?<kco>\d+)$`
- The Document tab includes a **Sample cbc:ID + Suggest + Test** helper so the regex doesn't have to be written by hand: paste a real ID, *Suggest* fills the regex by splitting on letter / digit transitions, *Test* runs the current pattern + defaults and shows the extracted `(doc, dct, kco)` live.
- The `DOC_DCT_KCO_ubl.xml` filename convention is no longer required — UBL processing always derives the keys from `cbc:ID`. Filenames can be anything.

### Single processing entry point

- The **Process XML** and **Process UBL** pages are gone. One **Process Document** page replaces them; the form switches XML vs UBL controls based on the picked template's `source`.
- One backend route: `POST /api/process` (replaces `/api/run` and `/api/process-ubl`).
- One CLI flag: `-process <config> <template> <fileOrDir> [type] [flags]` (replaces `-xml` and `-ubl`). `nomaubl.sh process …`.
- `-fetch-single` and `-fetch-all` drop their `processType` argument — inferred from the template. **Fetch Input** and **Settings → Scheduling** both lose the *Process type* toggle.

### New Documents page

- **Sidebar → Management → Documents** opens a dedicated page for document templates (the rows in `config-documents.json` referenced by `F564231.UHTMPL`). Carries its own **Add / Import / Copy / Remove** buttons plus a **Description** input. Settings keeps **Add Connector / Copy / Remove** for system templates and connectors.

### F564231.UHTMPL — invoice → template link

- New column `UHTMPL VARCHAR2(40)` on the invoice header table. Persisted at processing time (XML and UBL paths) so the PDF generator can resolve the per-document `pdfTemplate` JSON when rendering.
- DDL added to `sql/oracle/ddl.sql` and `sql/postgres/ddl.sql`.

### Invoice REST surface — clean primary key

- Every `/api/invoices/{…}` route now uses `(doc, dct, kco)` directly (`/api/invoices/{doc}/{dct}/{kco}/lines`, `/lifecycle`, `/errors`, `/vat`, `/notes`, `/xml`, `/resend`, `/validate`, `/status`, plus `PUT` / `DELETE`). The composite-string id, the `castToVarchar(UHDOC)` helper, and the `||UHDCT||UHKCO` concat in WHERE clauses are gone for every key lookup. Faster (index-friendly) and Postgres-clean.
- New `bindDoc()` helper binds the numeric `UHDOC` parameter via `setInt`; Postgres no longer rejects `setString` against an `INTEGER` column.

### `/invoice/view` (PDF) — dual-form lookup

- `GET /invoice/view?id=<UBL invoice number>` (matched against `UHK74FLEN`) **or** `?doc=&dct=&kco=`. The page can be linked from anywhere — including pasted-into-browser URLs — without needing a composite identifier.

### PDF generator refactor

- `InvoicePdfGenerator` collapsed from a 1027-line monolith into a `custom.ubl.pdf` package: `PdfTheme`, `UblXmlHelpers`, `InvoiceData`, `UblParser`, `PdfDrawing`, `PdfContext`, `PdfTemplate` / `PdfTemplateEngine` / `PdfTemplateLoader` / `DefaultPdfTemplate`, `PdfSection` registry, and one class per section under `custom.ubl.pdf.sections/` (Header, Parties, Agent, LineTable, DocAllowances, VatBreakdown, TotalsBox, Payment, NoteBlock).
- New JSON template engine — sections are listed and reordered in the template, each with its own per-section `config` (column visibility, sub-detail toggles, group-header behaviour, page-break per delivery, …). Edited in **Documents → 🖼 PDF Template** with drag-and-drop reorder, expandable per-section config drawer, and a live preview iframe (`POST /api/pdf-templates/preview`).
- Per-document override is stored as the `pdfTemplate` JSON property on the doc-template resource (linked by `F564231.UHTMPL`). When unset, the bundled default layout is used.

### Frontend polish

- Sidebar — new **Documents** entry under Management; *Process Document* entry replaces *Process XML* / *Process UBL*; thin themed scrollbar so overflowing groups are reachable in both light and dark modes.
- Path placeholders (`%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`) in the Process Document page are expanded server-side before the absolute-path / basename branching, so files picked via *Browse* work even when `dirInput` is a placeholder template.
- *XML — JDE spool* renamed to *XML spool* everywhere — the XSL pipeline is generic, only BIP is JDE-specific.
- Various small fixes: Documents row description binding, Settings modal cleanup, status modal / send-status / email path migrated to `(doc, dct, kco)`, AiAssistant `augmentPromptWithSitemap` removed.

### Roles / Permissions

- New `documents` page key in the role editor (under **Management**) so installations with restricted roles can grant or deny the new page.

---

## 2026.04.10 — 2026-05-04 \{#v2026-04-10\}

### E-Invoicing settings — hybrid FTP send / API status configuration

- The PA Connection tab used to hide the API config (Base URL, Auth, Status Retrieval, Background Scheduling) when **Send Mode = FTP**, making it impossible to configure a hybrid setup where invoices ship via SFTP but import polling, status retrieval and seller actions still go through the API. All sections are now always visible; the mode select is renamed *Send Mode* with a hint clarifying it only governs outbound transport. Each non-active section's title gains a small grey hint (*used for status retrieval / import / seller actions* or *used when Send Mode = FTP*) so the relationship between fields and operations is obvious at a glance.

### XSL — BT-46 (Buyer SIRET)

- Fixed `XTSE0680: Parameter siren is not declared in the called template` in `ubl-common.xsl`: the call to `ubl:party-siret` was passing `<xsl:with-param name="siren">` instead of `name="siret"` (copy-paste from the adjacent `ubl:company-siren` block).
- Fixed `cvc-complex-type.2.4.a` XSD validation when emitting BT-46: `<cac:PartyIdentification>` is a child of `<cac:Party>`, **not** `<cac:PartyLegalEntity>`. The SIRET emit moved out of `ubl:party-legal-entity` (the embedded helper call was structurally invalid) and now lives directly in the doc XSL's `cac:Party` block, before `cac:PartyTaxScheme` / `cac:PostalAddress`. Doc XSLs that need BT-46 should follow the same pattern.
- Added `TAG_CUSTOMER_SIRET` (BT-46) to the XSL editor catalogue and promoted it to the buyer section's main list so it appears next to `TAG_CUSTOMER_SIREN` in *Variables*.

---

## 2026.04.9 — 2026-04-30 \{#v2026-04-9\}

### Settings — fix stale editor state when switching between reference lists

- Switching from one template to another sometimes opened the right editor with rows from the previously-viewed list. Two issues: editors that seed internal state from props on mount (the 14 list editors, StatusesEditor, DocumentTypesEditor, …) kept showing the previous template's rows because their `useState` initialiser ran only once; and `selectTemplate()` flipped `selected` immediately but `props` only updated once the fetch returned, so rapid clicks could land a stale fetch on the wrong template.
- Fix: editor render is now wrapped in a keyed `<div key={selected}>` with `display: contents` so React unmounts the previous editor and mounts a fresh one whenever the user picks a different template. `selectTemplate()` now clears `editData / props / rawProps` synchronously and tracks a fetch-sequence counter, dropping any response that's been superseded by a later click.

### Invoice detail — Download UBL button

- New *Download UBL* button on the *History* tab of the invoice detail modal, next to *Validate UBL*. Saves the raw UBL XML stored in `F564231.UHTXFT` to a local file named `{doc}-{dct}-{kco}.xml`. Reuses the `GET /api/invoices/{id}/xml` endpoint and the `ublRawXml` already loaded into modal state, so there's no extra round-trip. Disabled with a tooltip until the XML has finished loading.

### AI Assistant — auto-greeting on first open

- Opening the chat panel with no history now auto-sends a localised greeting (*Bonjour* / *Hello* depending on the UI language), so the assistant introduces itself and lists its main capabilities without the user typing a first prompt. One-shot per page load: closing / reopening the panel mid-session doesn't repeat the greeting, and existing conversations stay intact.

---

## 2026.04.8 — 2026-04-29 \{#v2026-04-8\}

### AI Assistant — lifecycle history tool + REST delegation

- New `lifecycle_history` local tool: returns every status transition for an invoice from F564235 (sequence, status code + label, message, date / time, PA rejection reason + label, expected action + label, status note) — same payload the *History* tab of the invoice detail modal renders. Lets the AI answer *"why was invoice X rejected / what did the PA say"* without falling back to *"I don't have access to this history"*.
- `validation_errors` and `lifecycle_history` now delegate to the existing `WebApiHandler.handleInvoiceErrors` / `handleInvoiceLifecycle` REST handlers (the React UI's *History* tab uses the same calls). Removed the duplicate hardcoded SQL in the AI tools so the AI automatically benefits from the configurable `UBLTableConfig` table names, dialect-aware queries (Oracle vs Postgres), and status-label resolution maintained on the REST side. One source of truth.
- The full invoice + e-reporting status catalogues are now appended to the system prompt at chat time (read from `InvoiceStatusCatalog` and `EReportingStatusCatalog`, so user customisations apply). The model used to guess codes from words like *litige* (picking 49 instead of the real 207) — now it has the table in context and uses the exact code with `list_invoices` / `list_ereports`.
- `AIChatPanel`: the textarea is re-focused as soon as the assistant finishes streaming, so follow-up questions don't require clicking back into the input each time.

---

## 2026.04.7 — 2026-04-29 \{#v2026-04-7\}

### AI Assistant — fix `url_not_allowed` from web_fetch

- Anthropic's `web_fetch` only fetches URLs that have previously appeared in user messages or prior tool results. The 2026.04.6 sitemap-injection put the URLs in the system prompt where they don't count, so every fetch returned `url_not_allowed`. A first attempt to expose the catalogue through a custom `list_docs_pages` tool returning JSON also failed — Anthropic's URL extractor scans tool_result content as plain text and doesn't recognise URLs wrapped in JSON quotes.
- Final fix: `list_docs_pages` now returns the sitemap as **plain text**, one bare URL per line. Anthropic's extractor picks them up, and the subsequent `web_fetch` call succeeds. Claude follows a clean two-step flow: `list_docs_pages` → `web_fetch` → answer.
- Server-tool calls + their results are now surfaced in the chat as inline pills (📖 `web_fetch · <url>`, 📥 `web_fetch_result · ✓ <url>` or ❌ `<error_code>`), so failure modes are visible instead of swallowed — this is what made the JSON-vs-text bug debuggable.

---

## 2026.04.6 — 2026-04-29 \{#v2026-04-6\}

### AI Assistant — sitemap-driven docs lookup

- The model used to know it could fetch `docs.nomana-it.fr` but had no idea which URLs existed; it would either guess and miss, or give up and answer from prior knowledge. The backend now fetches `sitemap.xml` once on startup, filters entries to the documentation prefix (default `https://docs.nomana-it.fr/nomaubl`), and injects the resulting page list into the system prompt — so the model picks a real URL instead of guessing.
- Sitemap is cached for 6 hours and capped at 200 pages. Failures are silent (the previous snapshot keeps serving) and never block the chat call.
- Two new optional `global` properties: `aiDocsSitemapUrl` (default `https://docs.nomana-it.fr/sitemap.xml`, empty disables sitemap injection) and `aiDocsPathPrefix` (default `https://docs.nomana-it.fr/nomaubl`).

---

## 2026.04.5 — 2026-04-29 \{#v2026-04-5\}

### AI Assistant — web_fetch backward-compat fix

- Existing configs that predate 2026.04.4 don't have the new `aiDocsDomains` property in their `global` template, so the assistant launched with no `web_fetch` tool and would (correctly) reply that it didn't have access to docs lookup.
- New semantics for `aiDocsDomains` in `AiAssistant`: missing property → default to `docs.nomana-it.fr` (backward-compat — no manual edit required); empty string → explicitly disabled; `"a,b,c"` → use that list. No DB or API changes; only a server-side default.

---

## 2026.04.4 — 2026-04-29 \{#v2026-04-4\}

### AI Assistant — tool use (docs lookup + read-only data tools)

- The chat panel now lets the model call tools mid-conversation instead of replying from prior knowledge alone. Two layers: documentation lookup via Anthropic's server-managed `web_fetch_20250910` tool, with `allowed_domains` locked to the list in `global.aiDocsDomains` (default `docs.nomana-it.fr`) — and read-only operational tools executed locally against the same DB the web UI uses (`list_invoices`, `explain_status_code`, `validation_errors`, `list_ereports`). Toggled via `global.aiToolsEnabled` (default Y).
- New `global.anthropicSystemPrompt` overrides the built-in NomaUBL assistant prompt. Empty = use the bundled default which describes the product, points the model at the docs URL, and lists status-code ranges (1373 / 99xx / 9950 – 9957).
- Backend rewritten as `AiAssistant.java`: agentic loop with up to 5 tool turns, streams text deltas as `{type:"token"}` and surfaces tool invocations as `{type:"tool_call",name,summary}` so the UI can render an inline pill (📖 web_fetch, 🔍 local tool) above the assistant bubble while the call is in flight.
- Settings → System → Global → AI tab gains three new fields: System Prompt (textarea), Allowed Doc Domains (comma list), Custom Tools (Y/N).
- Assistant replies are now rendered as Markdown via `react-markdown` + `remark-gfm`: headings, bold, lists, GFM tables, fenced code blocks, inline code and links all render correctly. External links open in a new tab.

See [AI Capabilities](./application/ai-capabilities.md) for the full user-facing reference.

---

## 2026.04.3 — 2026-04-29 \{#v2026-04-3\}

### E-Reporting XML — Flux 10 specification compliance

- `EReportingXmlBuilder` rewritten to match the official FNFE-MPE Flux 10 element names (TT-1..TT-99, TG-8..TG-39). Old custom names (`<Identifier>`, `<DocumentType>`, `<Flux>`, `<Period>`, `<Customer>`, `<Totals>`, `<TaxBreakdown>`) replaced with the spec's `<Id>`, `<IssueDateTime><DateTimeString>`, `<TypeCode>`, `<Sender><Id schemeId>+<Name>+<RoleCode>`, `<Issuer><Id schemeId>+<Name>+<RoleCode>`, `<TransactionsReport><ReportPeriod><StartDate>+<EndDate>`. Dates emitted as `yyyymmdd` (period) and `yyyymmddhhmmss` (issue datetime), no separators.
- B2C / B2BINT routing rule **G6.28** enforced: B2C transactions **never** emit individual `<Invoice>` blocks — only aggregated `<Transactions>` (one per CategoryCode + currency, with nested per-rate `<TaxSubtotal>` carrying TaxPercent / TaxableAmount / TaxTotal). B2BINT keeps emitting one `<Invoice>` per invoice with ID, IssueDate, TypeCode, CurrencyCode, Seller (declarant), Buyer (counterparty), MonetaryTotal, and per-rate `<TaxSubTotal>`.
- Per **G6.23**, every `TaxAmount` / `TaxTotal` is now expressed in EUR (the `currencyId` attribute is locked to `EUR`) regardless of the source invoice's currency. Taxable amounts retain the source currency.
- `<TransactionsReport><Transactions><CategoryCode>` (TT-81) restricted to the spec subset `TLB1` (goods VAT-able), `TPS1` (services VAT-able), `TNT1` (non-VAT-able), `TMA1` (margin scheme); falls back to `TLB1` / `TNT1` based on the rate when the source row carries an out-of-list value.
- New optional configuration on the `e-reporting` template: `senderName`, `senderRoleCode` (default `WK`), `issuerName`, `issuerSchemeId` (default `0002`, with `0223` / `0227` / `0228` / `0229` selectable for international cases), `issuerRoleCode` (`SE` / `BY`), `businessProcessId` and `businessProcessTypeId` (TT-28 / TT-29 emitted on per-invoice `<BusinessProcess>` for B2BINT only), and `flowName` (TT-2). The Settings → System → E-Reporting editor exposes them as three grouped sections: Sender (PA), Issuer (Declarant), Business Process.
- `<ReportDocument><Id>` defaults to `{siren}-{flux}-{start}-{end}` when no transmission ID is supplied — a stable per-period value the PA can deduplicate against.
- Dedicated e-reporting status catalogue (codes **9950 – 9957**), independent from the invoice 99xx range. New `EReportingStatusCatalog` loads from the new `ereporting-statuses` system template (FR / EN labels editable in **Settings → System → ereporting-statuses**, alongside the existing `statuses` template). Codes: `9950 EREPORT_CREATED`, `9951 EREPORT_SUBMIT_SKIPPED`, `9952 EREPORT_SENT_TO_PA`, `9953 EREPORT_PENDING`, `9954 EREPORT_ERROR_SENT`, `9955 EREPORT_DEPOSITED`, `9956 EREPORT_FAILED_IMPORT`, `9957 EREPORT_REJECTED`. The catalogue seeds itself with built-in defaults if the template is missing, so existing installs keep working without manual migration. `EReportingHandler` rewired to use these codes (was previously reusing the invoice ones); the PA-submission-skipped case now lands on its own code instead of reusing `STATUS_CREATED`.
- `EReportingFetcher` now reads VAT subtotals primarily from the UBL XML stored in `F564231.UHTXFT` (parses the document-level `cac:TaxTotal/cac:TaxSubtotal` nodes — line-level subtotals are ignored to avoid double-counting). The previous behaviour (querying `F564234`) is kept as a fallback so deployments that don't materialise the per-tax summary table still produce reports. Fixes the "empty `<Transactions>` block" symptom in B2C reports where `F564234` was not populated even though the invoices and their UBL XML were correctly stored.

### Settings → list editors (focus loss when typing)

- Fixed across **15** list editors (Statuses, Countries, ActionCodes, CurrencyCodes, CustomizationIds, InvoiceTypes, PaymentMeans, NoteTypes, DocumentReferenceCodes, RejectionReasonCodes, SchemeIds, UnitCodes, ProfileIds, VatexCodes, VatCategories): typing into any row would lose focus after every character — and freshly-added rows could never be filled in.
- Root cause: each editor had a `useEffect(() => setRowsState(...), [props])` that re-derived the local rows from the parent props on every render. Because the editor itself echoes rows back to the parent on every keystroke (and the parent re-renders), this created a round-trip that recreated the rows array → React unmounted / remounted the inputs → caret was kicked out of the field. Worse, `*RowsToProps` filters out rows whose code / key is empty, so any new row vanished entirely from the parent's props on the first keystroke in a non-key column.
- Fix: removed the props → rows resync. Each editor seeds its local rows from props once on mount and is the sole writer afterwards. React keys stay tied to the array index so existing rows keep their input identity across re-renders.
- For `StatusesEditor` specifically, the `type` and `description` template fields are now preserved when echoing back to the parent (they were silently dropped before, which would corrupt the `statuses` template on Save).

### E-Reporting schema rework

- F564240, F564241 and F564242 column names overhauled to match the JDE-style structure:
  - F564240: `RGDOC → RGUKID` (PK = RGUKID alone, no flux / kco component; declared as `NUMBER(15)` on Oracle / `BIGINT` on Postgres in both the static DDL and `AuthManager.initTables`), `RGFLUX → RGY56BAR`, `RGTYPCD → RGDCT`, `RGPSTART → RGEFTJ`, `RGPEND → RGEFDJ`, `RGISSUID → RGY56EPID`, `RGINVCNT → RGNINV`. **Dropped** `RGSENDID` (sender stays in config + XML, not persisted) and `RGUKIDSZ` (PA UUID no longer stored — PA outcome tracked through status + lifecycle only).
  - F564241: FK column to F564240 keeps the parent's prefix (`RGUKID`); `RHFLUX → RHY56BAR`; `RHKCO` dropped (reach KCO via the parent). PK = `(RGUKID, RHSEQN)`.
  - F564242: FK column is `RGUKID`; `RIFLUX → RIY56BAR`; report-side `RIKCO` dropped. The invoice triplet drops the `INV` infix: `RIINVDOC / RIINVDCT / RIINVKCO → RIDOC / RIDCT / RIKCO`. PK = `(RGUKID, RIDOC, RIDCT, RIKCO)`.
- Mirrored across Oracle DDL, Postgres DDL and `AuthManager.initTables` (so the **Initialize Database** action creates the new structure).
- `EReportingDatabaseHandler`: field rename `rgdoc → rgukid`; `kco` no longer carried at the handler level (only F564240 has it, set at insertReport time). `nextSequence()` now does `MAX(RGUKID) + 1` (globally unique). `insertReport(typeCode, kco, …)` signature: `senderId` parameter removed. `updatePATransactionId()` removed (column gone). All child-table inserts updated to the new column names.
- `EReportingFetcher` NOT EXISTS check rewritten to the new `RIDOC / RIDCT / RIKCO / RIY56BAR` columns.
- REST API simplified accordingly: `/api/ereporting/{flux}/{kco}/{rgdoc}` → **`/api/ereporting/{rgukid}`**. `/api/ereporting/{flux}/{kco}/{rgdoc}/resend` → **`/api/ereporting/{rgukid}/resend`**. JSON output: `rgdoc` → `rgukid`; `sender` and `paUuid` fields removed.
- Frontend types, API client, list page, detail modal, columns and i18n updated to match (resend echoes the PA UUID once in its response so it can still be displayed in the success banner).
- Detail modal → Invoices tab: dropped the *Number* column. The DOC / DCT / KCO triplet is the canonical identifier; the UBL invoice number was just a display copy of the same data, removed alongside its i18n key, the `invoiceNumber` field on `EReportInvoiceLink`, and the matching `UHK74FLEN` join in the backend SQL.

### Dashboard / About card

- The EXTENDED-CTC-FR schematron is now listed in the *About this release* card (key `frExtendedCtc`, label *EXTENDED-CTC-FR*) — it was shipped with the JAR but missing from `/api/build-info`.
- `BuildInfo` now picks the FNFE-MPE version stamp (`Schematron yyyymmdd_NAME_VX.Y.Z …`) **before** the generic `Schematron version X.Y.Z` pattern; both Flux 2 and Extended-CTC-FR embed the underlying EN 16931 source version (1.3.15) in their comments which previously misled the parser.
- Tightened the EN 16931 date capture to ISO `yyyy-mm-dd` so the rendered last-update no longer carries the trailing `--` from the source's `--&gt;` close tag.

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
