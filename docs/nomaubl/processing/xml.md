---
title: XML
description: "Process a single source XML file — render it as a PDF document (SINGLE / BURST) or transform it into a UBL 2.1 e-invoice with validation, persistence and optional submission to the Plateforme Agréée (UBL)."
keywords: [NomaUBL, processing, XML, UBL, PDF, transform, XSL, validate, send, PA, AUTO, SINGLE, BURST, JD Edwards, SAP, NetSuite, custom ERP]
---

# XML

The **XML** processing screen runs a single source XML file through NomaUBL's processing pipeline. The selected mode determines the output:

- **PDF document rendering** (modes `SINGLE` / `BURST`) — apply the template's XSL to format the source XML as one or several PDF files. Used primarily for documents that are not invoices (delivery notes, statements, internal documents) that just need a styled PDF output.
- **UBL 2.1 e-invoice generation** (mode `UBL`) — apply the template's XSL to produce a UBL 2.1 invoice, run XSD + Schematron validation, persist invoice header / lines / VAT / lifecycle in the NomaUBL database and optionally submit to the Plateforme Agréée.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The template selected at the top determines which XSL transformation runs and therefore which source layout is supported.

For lighter use cases:

- *UBL Tools → Validate* runs only the transformation and validation (no DB writes, no submission).
- *UBL Tools → XSL Editor* edits the transformation itself.
- *Sync → Fetch Input* runs the same pipeline in batch over a directory of files.

---

## Pipeline at a glance

<svg viewBox="0 0 1000 720" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="xp-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="xp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="xp-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="xp-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="400" y="20" width="200" height="50" rx="10" fill="url(#xp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="40" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Source XML file</text>
  <text x="500" y="58" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">JDE / SAP / NS / custom</text>
  <rect x="410" y="100" width="180" height="50" rx="10" fill="url(#xp-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Mode</text>
  <text x="500" y="140" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">decision</text>
  <line x1="500" y1="70" x2="500" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xp-arrow)"/>
  <rect x="20" y="190" width="200" height="60" rx="10" fill="url(#xp-g-slate)" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3"/>
  <text x="120" y="214" fill="currentColor" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AUTO resolution</text>
  <text x="120" y="232" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">per-document Document Types</text>
  <rect x="240" y="190" width="200" height="60" rx="10" fill="url(#xp-g-blue)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="340" y="214" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 SINGLE</text>
  <text x="340" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">XSL → 1 PDF</text>
  <rect x="460" y="190" width="200" height="60" rx="10" fill="url(#xp-g-blue)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="560" y="214" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📚 BURST</text>
  <text x="560" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">XSL + split → PDFs</text>
  <rect x="680" y="190" width="200" height="60" rx="10" fill="url(#xp-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="780" y="214" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">📜 UBL</text>
  <text x="780" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">XSL → UBL 2.1</text>
  <path d="M 410 130 L 220 130 L 220 190" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#xp-arrow)"/>
  <text x="290" y="122" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">AUTO</text>
  <line x1="410" y1="135" x2="340" y2="190" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#xp-arrow)"/>
  <line x1="500" y1="150" x2="540" y2="190" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#xp-arrow)"/>
  <path d="M 590 130 L 780 130 L 780 190" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#xp-arrow)"/>
  <text x="710" y="122" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">UBL</text>
  <path d="M 120 190 L 120 80 L 410 80 L 410 100" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#xp-arrow-slate)"/>
  <text x="200" y="74" fontSize="9" fill="#94a3b8" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">→ SINGLE / BURST / UBL</text>
  <rect x="680" y="290" width="200" height="56" rx="10" fill="url(#xp-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="780" y="312" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ Validate</text>
  <text x="780" y="328" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">XSD + Schematron</text>
  <line x1="780" y1="250" x2="780" y2="290" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xp-arrow)"/>
  <rect x="680" y="386" width="200" height="56" rx="10" fill="url(#xp-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="780" y="408" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 DB persist</text>
  <text x="780" y="424" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">Replace: Skip / Overwrite</text>
  <line x1="780" y1="346" x2="780" y2="386" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xp-arrow)"/>
  <rect x="680" y="482" width="200" height="50" rx="10" fill="url(#xp-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="780" y="503" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Send to PA</text>
  <text x="780" y="519" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">decision</text>
  <line x1="780" y1="442" x2="780" y2="482" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xp-arrow)"/>
  <rect x="540" y="580" width="200" height="60" rx="10" fill="url(#xp-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="640" y="606" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 Plateforme Agréée</text>
  <text x="640" y="624" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Use settings</text>
  <rect x="780" y="580" width="200" height="60" rx="10" fill="url(#xp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="880" y="606" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🏠 Local 99XX</text>
  <text x="880" y="624" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Skip sending</text>
  <path d="M 740 532 L 740 555 L 640 555 L 640 580" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#xp-arrow)"/>
  <text x="690" y="548" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Use settings</text>
  <path d="M 820 532 L 820 555 L 880 555 L 880 580" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#xp-arrow)"/>
  <text x="850" y="548" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Skip sending</text>
</svg>

`AUTO` does not run a pipeline of its own — it dispatches each document in the source XML to `SINGLE`, `BURST` or `UBL` based on the per-document-type configuration in *Document Types*. Only the `UBL` branch runs validation, persistence and PA submission; `SINGLE` and `BURST` produce PDF output and stop there.

---

## Input Configuration

| Field | Description |
|---|---|
| **Template** | Document template (e.g. `invoices`, `credit_notes`, `delivery_notes`). Selects the XSL pipeline applied to the source XML. |
| **Input File** | Basename (without extension) of the source XML file (e.g. `invoice_001`). Resolved in the template's `dirInput` directory. |
| **Mode** | Processing mode — `AUTO`, `SINGLE`, `BURST` or `UBL`. See the table below. |
| **Replace** | `Skip` keeps existing invoices in the database untouched if they already exist; `Overwrite` re-imports them, replacing the previous version. *Only applies when the output is UBL.* |
| **Send to PA** | `Use settings` honours the global / e-invoicing template's submission settings; `Skip sending` runs the full pipeline locally without submitting. *Only applies when the output is UBL.* |

Two helpers sit next to the **Input File** field:

| Button | Behaviour |
|---|---|
| **Browse** (folder icon) | Opens a server-side file browser to pick an existing file. |
| **Upload** (upload icon) | Uploads a local `.xml` file into the template's `dirInput` directory and selects it as the input. A template must be selected first. |

Click **Generate** to run the pipeline.

---

## Modes

The mode controls **what is produced** from the source XML.

| Mode | Output | Behaviour |
|---|---|---|
| **AUTO** | PDF or UBL | Resolves the appropriate mode per document by looking up *Configuration → System → Document Types*. The recommended default in production — typical when a single spool mixes invoices (resolved to `UBL`) and non-invoice documents (resolved to `SINGLE` or `BURST`). |
| **SINGLE** | PDF | Renders the entire source XML as a **single PDF**. Used essentially for documents that are not invoices — the app also formats source XML into a styled PDF. |
| **BURST** | PDFs + XML index | Splits the source PDF on a key field (typical of a multi-document spool), produces **one PDF per key value** and an **XML index file** describing the resulting set. The index is consumed by downstream applications that need to dispatch each document independently. |
| **UBL** | UBL 2.1 | Generates a **UBL 2.1 invoice** from the source XML. Runs the full pipeline: transformation, XSD + Schematron validation, database persistence and optional submission to the Plateforme Agréée. |

Typical use case for `AUTO`: a single spool covering several customers and several document types — the invoices are resolved to `UBL` and submitted, the delivery notes to `SINGLE` and rendered as PDF, all in one run.

---

## UBL pipeline detail

When the output is UBL (mode `UBL`, or `AUTO` resolved to `UBL` for a given document), the pipeline runs four steps in sequence:

1. **Transform** — apply the template's XSL pipeline to produce a UBL 2.1 document.
2. **Validate** — XSD schema and Schematron business rules.
3. **Persist** — insert invoice header, lines, VAT subtotals, lifecycle and validation results in the NomaUBL database.
4. **Submit** — optionally send the UBL to the configured Plateforme Agréée.

The two options below — **Replace** and **Send to PA** — control steps 3 and 4 respectively. They have no effect when the output is PDF.

### Replace

Controls what happens when the database already holds an invoice with the same key (DOC + DCT + KCO).

| Value | Behaviour |
|---|---|
| **Skip existing** | The existing invoice is left untouched; the run logs a duplicate-skipped message. The default for production runs. |
| **Overwrite existing** | The existing invoice header, lines, VAT and lifecycle are deleted and re-imported from the new transformation. Useful for reprocessing after a template fix. |

Overwriting also resets the lifecycle to its initial state — any PA-side history is decoupled from the local record. Reserve `Overwrite` for genuine re-imports, not for incremental updates.

### Send to PA

Controls whether the produced UBL is submitted to the Plateforme Agréée.

| Value | Behaviour |
|---|---|
| **Use settings** | Honours the **sendToPA** flag of the *e-invoicing* template. Production behaviour. |
| **Skip sending** | Runs transformation, validation and database persistence locally without submitting to the PA. The invoice ends up in a local `99XX` status — the exact code depends on the validation outcome (success, warnings or errors). A subsequent **Resend** action from *Application → E-Invoicing* can submit it later. See the [Status Reference](../references/status-reference.mdx) for the meaning of each code. |

Skip sending is useful when validating a new template or replaying an already-submitted batch — the local pipeline runs fully without producing a duplicate submission.

---

## Results

After processing completes, the **Results** section displays:

- A green **Document generated successfully** message — or the error returned by the API on failure.
- A **structured log table** with one row per pipeline step. Each row carries:

| Column | Description |
|---|---|
| **Severity** | `FATAL`, `ERROR`, `WARNING` or `INFO`. `FATAL` and `ERROR` block submission to the PA; `WARNING` and `INFO` are informational. |
| **Module** | Pipeline component that produced the entry — `XSL`, `XSD`, `Schematron`, `Database`, `PA` or `Pipeline`. |
| **Submodule** | Specific step or rule identifier (e.g. `BR-FR-12`, `cbc:CustomizationID`, `F564231 INSERT`). |
| **Message** | Human-readable explanation of the failure, warning or progress event. |

A successful run logs at least one row per executed step; failures stop the pipeline at the offending step.

---

## Tips & best practices

- **Use `AUTO` in production.** Mode resolution is delegated to *Document Types*, which is the supported way to mix invoices and non-invoice documents in a single spool. `SINGLE`, `BURST` and `UBL` are the right choices only when the spool is known to be uniform.
- **Validate the template before going live.** Run a representative XML with **Send to PA = Skip sending** first, then iterate on the *XSL Editor* until the log table is clean (no `ERROR` / `FATAL` rows).
- **Use `BURST` when downstream applications consume the index XML.** The XML index lists each split PDF along with its key value — the typical pattern is to pair it with a delivery / archival application that uses the keys to file the PDFs.
- **Avoid `Overwrite` once an invoice has been submitted.** A submitted invoice carries a PA-side identity; overwriting locally desynchronises the local record from the PA. Use *Application → E-Invoicing → Resend* if a re-submission is genuinely needed.
- **Upload places the file in the template's `dirInput` directory.** That same directory is scanned by *Sync → Fetch Input* in batch mode, so the upload makes the file part of the next batch run by default.
