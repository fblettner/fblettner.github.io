---
title: Release Notes
description: "NomaUBL release notes — every user-visible change shipped in the platform, version by version, in reverse chronological order. Mirrors the in-app Release Notes page."
keywords: [NomaUBL, release notes, changelog, version, e-reporting, processing log, dashboard, AFNOR XP Z12-014, Schematron, RFE, Réforme de la Facturation Électronique]
---

# Release Notes

Every user-visible change to NomaUBL — UI, REST API, CLI, behaviour — is consigned here. The most recent release sits at the top. This page mirrors the **About this release** card and the dedicated *Release Notes* screen surfaced inside the application.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 18px', margin: '24px 0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', alignItems: 'center'}}>
  <span style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, opacity: 0.65, marginRight: '6px'}}>Versions</span>
  <a href="#v2026-05-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}>2026.05.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-05</span></a>
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
