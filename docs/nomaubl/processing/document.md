---
title: Process Document
description: "Single processing entry point for one or many invoice files. The pipeline is selected automatically by the document template's source property — XML spool (XSL → UBL) or already-formed UBL 2.1 — so the same form covers both flows."
keywords: [NomaUBL, processing, document, XML, UBL, source, idPattern, cbc:ID, AUTO, SINGLE, BURST, validate-only, send to PA, JD Edwards, SAP, NetSuite, custom ERP]
---

# Process Document

The **Process Document** screen is the single processing entry point of NomaUBL. It runs one document template against one (or many) source files and:

1. resolves the template's `source` property (`XML` or `UBL`);
2. dispatches to the matching pipeline — XSL transform for XML spools, direct validation for already-formed UBL invoices;
3. validates against XSD + Schematron, persists to the database, and (depending on the *Send to PA* option) submits to the Plateforme Agréée or stops at a local-only status.

The **Process XML** and **Process UBL** pages of earlier releases are gone — the form below switches its controls to match the template you pick. One page, one REST route (`POST /api/process`), one CLI flag (`-process`).

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP.

---

## Picking the source

The first decision a document template makes is its **Source**. It is set on the **[Documents](../management/documents.md) → Document tab → Source** field and read here:

| Source | When to pick it | What runs |
|---|---|---|
| **XML** | XML spool from any ERP needing transformation to UBL. JDE BIP output, SAP IDoc-derived XML, NetSuite saved-search XML, custom ERP exports. | XSL transform → UBL 2.1 → XSD + Schematron → DB → optional PA submit. The page exposes the *Mode* selector (AUTO / SINGLE / BURST / UBL) and the *Send to PA* toggle. |
| **UBL** | The file is already a UBL 2.1 invoice (your ERP emits UBL natively, or the file came from an upstream PA in UBL form). | Parse the invoice, extract `(doc, dct, kco)` from `cbc:ID`, validate, persist, optionally submit. The page exposes a *Validate only* mode and a *Send to PA* toggle. |

Once the template is selected, the **Source** field on the form shows the resolved value and the rest of the form reconfigures itself.

---

## Pipeline at a glance

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="pd-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="pd-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="pd-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="380" y="20" width="240" height="56" rx="10" fill="url(#pd-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Source file</text>
  <text x="500" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">picked or uploaded</text>
  <rect x="400" y="100" width="200" height="50" rx="10" fill="url(#pd-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ template.source</text>
  <text x="500" y="140" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">decision</text>
  <line x1="500" y1="76" x2="500" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#pd-arrow)"/>
  <rect x="60" y="200" width="280" height="60" rx="10" fill="url(#pd-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="200" y="226" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ XML pipeline</text>
  <text x="200" y="244" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">XSL → UBL · AUTO / SINGLE / BURST / UBL</text>
  <rect x="660" y="200" width="280" height="60" rx="10" fill="url(#pd-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="800" y="226" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ UBL pipeline</text>
  <text x="800" y="244" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">parse cbc:ID · validate · persist</text>
  <path d="M 400 130 L 200 130 L 200 200" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#pd-arrow)"/>
  <text x="270" y="122" fontSize="10" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">XML</text>
  <path d="M 600 130 L 800 130 L 800 200" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#pd-arrow)"/>
  <text x="730" y="122" fontSize="10" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">UBL</text>
  <rect x="380" y="300" width="240" height="56" rx="10" fill="url(#pd-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="500" y="324" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ Validate</text>
  <text x="500" y="340" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">XSD + Schematron</text>
  <line x1="200" y1="260" x2="380" y2="305" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#pd-arrow)"/>
  <line x1="800" y1="260" x2="620" y2="305" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#pd-arrow)"/>
  <rect x="380" y="380" width="240" height="50" rx="10" fill="url(#pd-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="500" y="402" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 DB persist</text>
  <text x="500" y="420" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564231 + UHTMPL = template</text>
  <line x1="500" y1="356" x2="500" y2="380" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#pd-arrow)"/>
  <rect x="160" y="460" width="240" height="60" rx="10" fill="url(#pd-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="280" y="484" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 Plateforme Agréée</text>
  <text x="280" y="502" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Use settings · Force send</text>
  <rect x="600" y="460" width="240" height="60" rx="10" fill="url(#pd-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="720" y="484" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🏠 Local 99XX</text>
  <text x="720" y="502" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Skip sending</text>
  <path d="M 380 410 L 280 410 L 280 460" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#pd-arrow)"/>
  <text x="335" y="402" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">send</text>
  <path d="M 620 410 L 720 410 L 720 460" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#pd-arrow)"/>
  <text x="675" y="402" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">skip</text>
</svg>

`replaceMode = Y` purges the five UBL tables (`F564231` / `F564233` / `F564234` / `F564235` / `F564236`) for the matching `(doc, dct, kco)` triplet before reprocessing — same semantics on the XML and UBL paths.

---

## The form

The form has four common controls plus per-source extras.

| Field | Source | Description |
|---|---|---|
| **Template** | both | Document template (the resource type `document`). The selector lists every template in `config-documents.json`. |
| **Source** | both | Read-only display of the template's resolved `source`. Switching templates updates this field and reshapes the form. |
| **Select File** | both | Two buttons — *Upload File* (browser file picker) or *Browse Server* (open the embedded file browser against `dirInput`). XML uploads are copied to the template's working directory; UBL uploads land in `<dirInput>/ubl/`. |
| **Mode** | XML | `AUTO` (default), `SINGLE`, `BURST` or `UBL`. See [Modes (XML source)](#modes-xml-source) below. |
| **Send to PA** | XML | `Use settings` (default) or `Skip sending`. |
| **Mode** | UBL | `Process & Validate` (default) or `Validate only`. |
| **Send to PA** | UBL | `Use settings`, `Force send` or `Skip sending`. *Force send* is the UBL-only override that bypasses the e-invoicing template's `sendToPA` flag. |
| **Replace** | both | `Skip` keeps existing rows untouched; `Overwrite` purges the five UBL tables for the same `(doc, dct, kco)` and re-imports cleanly. |

---

## Modes (XML source)

| Mode | Output | Typical use |
|---|---|---|
| **AUTO** | PDF or UBL | Resolves the per-document mode from *UBL Defaults → Document Type / BAR Routing*. Recommended default in production — handy when a single XML spool mixes invoices (resolved to `UBL`) and non-invoice documents (resolved to `SINGLE` / `BURST`). |
| **SINGLE** | PDF | Renders the entire XML spool as a **single PDF**. Useful for non-invoice documents that need PDF formatting only. |
| **BURST** | PDF + XML index | Bursts the source spool on a key (typical of multi-document spools), produces **one PDF per key value** and an **XML index file** describing the resulting set. The index is consumed by downstream applications that need to dispatch each output independently. |
| **UBL** | UBL 2.1 + PDF | Runs the document XSL to UBL 2.1, validates, persists, and (per *Send to PA*) submits. Recommended explicit setting once *AUTO*'s routing has been validated for a template. |

`AUTO` is *not* its own pipeline — it dispatches each document of the source XML to `SINGLE`, `BURST` or `UBL` according to *Document Types*. Only the `UBL` branch chains validation, persistence and PA submission; `SINGLE` / `BURST` produce PDF output and stop there.

---

## Modes (UBL source)

| Mode | What runs |
|---|---|
| **Process & Validate** *(default)* | Parse the UBL invoice, extract `(doc, dct, kco)` from `cbc:ID` (regex on the template), validate XSD + Schematron, persist to `F564231` / `F564233` / `F564234` / `F564235` / `F564236`, write the lifecycle event. *Send to PA* applies. |
| **Validate only** | Run XSD + Schematron only. No DB write, no PA submission. The result table shows every error with severity / source / rule / message — same columns as the [Integration Errors](../application/integration-errors.md) page. Use it as a quick check before committing the file to the database. |

**No more filename convention.** UBL processing always derives `(doc, dct, kco)` from the invoice's `cbc:ID` via the template's `idPattern` regex. The `DOC_DCT_KCO_ubl.xml` naming convention is no longer required — filenames can be anything.

---

## REST API

```http
POST /api/process
Content-Type: application/json

{
  "template":     "invoices",
  "file":         "/path/to/file.xml",
  "mode":         "AUTO",            // XML source
  "validateOnly": false,             // UBL source
  "sendToPA":     "",                // UBL: "" | "Y" | "N"
  "noSend":       false,             // XML: skip submit
  "replaceMode":  false              // both: purge before re-insert
}
```

The route replaces the legacy `/api/run` (XML) and `/api/process-ubl` (UBL) endpoints, and the response is streamed as a series of log events plus a final outcome marker — same shape on both sides, so a single client integration covers both pipelines.

---

## CLI

```bash
nomaubl.sh process <config.json> <template> <fileOrDir> [type] [flags]
```

Replaces the legacy `-xml` and `-ubl` flags. The CLI reads the template's `source` from `config-documents.json` and dispatches to the matching pipeline. See [Command Line](../management/command-line.md) for the full flag set.

---

## Tips & best practices

- **Pick the right source on the template, not at run time.** `Source` lives on the document template — the *Process Document* form just reads it. Setting it once in [Documents](../management/documents.md) keeps every entry point (this page, *Fetch Input*, the CLI, the scheduler) consistent.
- **Use *Validate only* before persisting.** When importing UBL files from a new upstream system, run *Validate only* first to surface XSD / Schematron failures without polluting the database.
- **`AUTO` for production, explicit for debugging.** Production templates usually want `AUTO` so the document-types table drives the per-row dispatch. When debugging a single template, switch to the explicit `UBL` mode so the trace is unambiguous.
- **`Replace = Overwrite` purges five tables.** Header (`F564231`), lines (`F564233`), VAT (`F564234`), lifecycle (`F564235`) and validation errors (`F564236`) — the previous run's lifecycle and errors won't bleed into the new run.
- **For batch unattended runs, prefer [Sync → Fetch Input](../sync/fetch-input.md).** This page is the right tool for ad-hoc one-document or one-spool runs. *Fetch Input* iterates the same pipeline on multiple files at once with the per-template config baked in.
