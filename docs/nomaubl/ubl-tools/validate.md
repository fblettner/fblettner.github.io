---
title: Validate
description: "Validate a UBL document against XSD schema and Schematron business rules — straight UBL or upstream XML transformed to UBL via a template's XSL pipeline."
keywords: [NomaUBL, UBL, validation, XSD, Schematron, EN 16931, BR-FR, business rules, XSL, transform, JD Edwards, SAP, NetSuite, custom ERP]
---

# Validate

The **Validate** screen runs **XSD schema** and **Schematron business rules** checks on a UBL document. Two source types are supported:

- **XML (transform to UBL)** — the upstream XML is first transformed to UBL 2.1 via the selected template's XSL pipeline, then validated.
- **UBL (validate directly)** — the document is already UBL 2.1; validation runs as-is.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. Validation never writes to the database, never sends to a Plateforme Agréée, and never triggers any other side effect — it is a read-only check.

:::info[Refreshed in 2026.05.9]
Three changes shipped in 2026.05.9 on the validation side:

- **Precompiled Schematron** — the runtime no longer compiles `.sch` files. `UBLValidator` loads precompiled `.xsl` straight from the JAR classpath, failing fast at startup if any expected file is missing. AFNOR's three packs ship as published; the two locally-authored rules (`BR-FR-CPRO-Schematron-UBL` + `BR-NOMAUBL-rules`) are precompiled at build time by `build.sh` via Saxon CLI + `xmlresolver`. Cold-start drops a noticeable beat — three XSLT compiles × five packs no longer happen per JVM.
- **Flux 2 always runs** — AFNOR XP Z12-012 V1.3.1 splits validation into 4 steps: Step 2 picks EN 16931 *or* Extended-CTC-FR (based on `CustomizationID`), Step 3 runs **BR-FR-Flux 2 unconditionally** on top. The previous code treated Extended-CTC-FR as a superset and skipped Flux 2 — missing the reform-specific `BR-FR-*` / `EXT-FR-FE-*` rules the PA still enforces server-side. The Extended profile now runs both steps.
- **New `BR-NOMAUBL-rules.sch` pack** — captures AIFE-side rules the public Schematron packs do not ship yet. First rule (`BR-NOMAUBL-01`, fatal): if BT-3 ∈ `{261, 381, 396, 502, 503}`, at least one `cac:BillingReference/cac:InvoiceDocumentReference` with both `cbc:ID` (BT-25) and `cbc:IssueDate` (BT-26) must be present. PAs reject these credit notes today with a model-validation error; the rule surfaces it locally so the failure lands in `F564236` before the round-trip. Wired through `BuildInfo` (`schematron.nomaubl` version in `/api/build-info`) and runs as the final layer after CPRO-B2G.

The **directory check** also moved to validation time in 2026.05.9 — an unknown counterparty surfaces in `F564236` before the document is queued, instead of waiting for the send step to fail.
:::

---

## At a glance

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="vlui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="vlui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="vlui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="360" rx="14" fill="url(#vlui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Validate</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="320" y="82" width="180" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="410" y="98" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">XML → UBL</text>
  <rect x="504" y="82" width="180" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="594" y="98" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL (direct)</text>

  <text x="240" y="130" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEMPLATE</text>
  <rect x="340" y="120" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="136" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices ▾</text>

  <text x="240" y="162" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INPUT FILE</text>
  <rect x="340" y="152" width="290" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="168" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoice_2026_0143</text>
  <rect x="634" y="152" width="40" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="654" y="168" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📁</text>
  <rect x="678" y="152" width="40" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="698" y="168" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬆</text>

  <rect x="240" y="186" width="180" height="28" rx="6" fill="url(#vlui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="330" y="204" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">✅ Validate UBL</text>

  <line x1="240" y1="228" x2="780" y2="228" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="250" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Validation Results</text>
  <text x="380" y="250" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">✓ Validation completed · 0 fatal · 2 warnings</text>

  <rect x="240" y="262" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="277" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY · MODULE · SUBMODULE · MESSAGE</text>

  <rect x="240" y="288" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="292" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="302" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="302" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">XSD · UBL 2.1 · structure OK</text>

  <rect x="240" y="314" width="540" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="318" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="328" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="328" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Schematron · EN 16931 + BR-FR-Flux-2 · all rules passed</text>

  <rect x="240" y="340" width="540" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="344" width="56" height="14" rx="3" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="276" y="354" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">WARNING</text>
  <text x="312" y="354" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Schematron · BR-NOMAUBL-rules · BT-46 optional but recommended</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source toggle</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">XML→UBL · UBL direct</text>
  <line x1="220" y1="98" x2="320" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vlui-arrow)"/>

  <rect x="20" y="152" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="167" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Browse + Upload</text>
  <text x="30" y="180" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">server-side or local pick</text>
  <line x1="220" y1="168" x2="340" y2="164" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vlui-arrow)"/>

  <rect x="20" y="186" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read-only check</text>
  <text x="30" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no DB write · no PA send</text>
  <line x1="220" y1="202" x2="240" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vlui-arrow)"/>

  <rect x="820" y="288" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="303" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Layered packs</text>
  <text x="830" y="316" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">XSD · EN16931 · BR-FR · …</text>
  <line x1="820" y1="304" x2="780" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vlui-arrow)"/>
</svg>

---

## Input Configuration

| Field | Description |
|---|---|
| **Source** | `XML (transform to UBL)` runs the template's XSL transformation first, then validates the resulting UBL. `UBL (validate directly)` validates the file as-is. |
| **Template** | Document template (e.g. `invoices`, `credit_notes`). Required when *Source* is `XML`; hidden when *Source* is `UBL`. The template selects which XSL pipeline runs and which Schematron rule set applies. |
| **Input File** | Basename (without extension) of the file to validate (e.g. `invoice_001`). For `XML` source, the file is resolved in the template's `dirInput` directory; for `UBL`, in `dirInput/ubl/`. |

Two helpers sit next to the **Input File** field:

| Button | Behaviour |
|---|---|
| **Browse** (folder icon) | Opens a server-side file browser to pick an existing file. |
| **Upload** (upload icon) | Uploads a local `.xml` file to the appropriate server-side directory (template's `dirInput` for `XML`, `dirInput/ubl/` for `UBL`) and selects it as the input. For `XML` source, a template must be selected first. |

Click **Validate UBL** to run the validation.

---

## Validation Results

After validation completes, the **Validation Results** section displays:

- A green **Validation completed** message — or the error returned by the API on failure.
- A **structured log table** with one row per check. Each row carries:

| Column | Description |
|---|---|
| **Severity** | `FATAL`, `ERROR`, `WARNING` or `INFO`. `FATAL` and `ERROR` block submission to the PA; `WARNING` and `INFO` are informational. |
| **Module** | Validation engine that produced the entry — typically `XSD` (schema check) or `Schematron` (business rules). |
| **Submodule** | Rule identifier or XPath that triggered the entry (e.g. `BR-FR-12`, `cbc:CustomizationID`). |
| **Message** | Human-readable explanation of the failure or warning. |

XSD failures indicate a structural problem (missing required element, wrong type). Schematron entries map to business rules (EN 16931 core rules, French `BR-FR-*` extensions, etc.); their severity comes from the rule's own `flag` / `role` attribute in the Schematron file.

---

## Validation profile sequence

NomaUBL runs validation in **four layered steps** following AFNOR XP Z12-012 V1.3.1. The profile is auto-selected from the document's `CustomizationID` — the user picks a template, the engine does the rest.

| Step | Pack | Applied to | Source `.sch` |
|---|---|---|---|
| **1** | **XSD 2.1** | Every UBL document — structural check. | `UBL-2.1.xsd` (W3C XML Schema). |
| **2a** | **EN 16931** | Documents declaring the EN 16931 customization (the European core profile). | `EN16931-UBL-validation.sch`. |
| **2b** | **Extended-CTC-FR** *(alternative to 2a)* | Documents declaring the French Extended CTC profile (most B2B / B2G invoices for the French reform). | `CIUS-FR-validation.sch` + `EXTENDED-CTC-FR-validation.sch`. |
| **3** | **BR-FR-Flux 2** *(always runs since 2026.05.9)* | Every French-profile document, **including Extended-CTC-FR** — surfaces the reform-specific `BR-FR-*` / `EXT-FR-FE-*` rules the PA enforces server-side. | `BR-FR-Flux-2-UBL.sch`. |
| **4a** | **CPRO-B2B** | French B2B documents — `BR-FR-CPRO` profile. | `BR-FR-CPRO-Schematron-UBL.sch` *(locally authored, precompiled at build)*. |
| **4b** | **NomaUBL house rules** *(new in 2026.05.9)* | Every document — the AIFE-side rules the public packs do not ship yet. | `BR-NOMAUBL-rules.sch` *(locally authored, precompiled at build)*. |

Step 2 is **exclusive** (one profile per document); Steps 3 and 4 stack on top. A document that fails any rule with `flag="fatal"` blocks submission to the PA; warnings and informational entries are logged but never block the pipeline.

### NomaUBL house rules

The new `BR-NOMAUBL-rules.sch` pack captures rules the AIFE enforces server-side but that the public Schematron packs have not picked up yet. Surfacing them locally means a failing document lands in `F564236` before the PA round-trip — saves a network hop and gives the operator the human-readable explanation immediately.

| Rule | Severity | Trigger | What it checks |
|---|---|---|---|
| **`BR-NOMAUBL-01`** | `fatal` | `cbc:InvoiceTypeCode` (BT-3) ∈ `{261, 381, 396, 502, 503}` *(credit-note codes)*. | At least one `cac:BillingReference/cac:InvoiceDocumentReference` must be present, **with both `cbc:ID` (BT-25) and `cbc:IssueDate` (BT-26)**. Without it, PAs reject the credit note with the `precedingInvoices` model-validation error. |

The pack version is exposed at `GET /api/build-info` under `schematron.nomaubl` — the dashboard footer reads it for the per-pack version stamp.

---

## Tips & best practices

- **Use Source = UBL when the document is already UBL** — typically when re-validating an archived document or a file produced by another tool. No template is needed in this mode.
- **Use Source = XML to validate the upstream payload and the XSL transformation in one pass** — useful when iterating on a new template before going live, since both the XSL output and the Schematron rules are exercised.
- **The template selector is also the rule-set selector.** Different templates may pin different Schematron versions (e.g. EN 16931 vs French `extended-ctc-fr`). Pick the template that matches the regulatory profile to validate against.
- **Validation is read-only.** To actually persist and submit, use *Processing → UBL* for a single document or *Sync → Fetch Input* for batch.
- **Upload writes the file in the correct server-side directory.** After a successful upload, the input field is populated with the resolved basename, ready for validation or for any subsequent processing run that scans the same directory.
