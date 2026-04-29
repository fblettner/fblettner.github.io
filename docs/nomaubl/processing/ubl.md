---
title: UBL
description: "Process a UBL 2.1 file already in UBL format — XSD + Schematron validation, database persistence and optional submission to the Plateforme Agréée. No XSL transformation."
keywords: [NomaUBL, processing, UBL, validate, database, Plateforme Agréée, PA, send, JD Edwards, SAP, NetSuite, custom ERP, DOC_DCT_KCO]
---

# UBL

The **UBL** processing screen runs a file **already in UBL 2.1 format** through NomaUBL's validation, persistence and submission pipeline. No XSL transformation is involved — the file is consumed as-is. Use this page when:

- the upstream system emits UBL natively (no NomaUBL transformation needed);
- a UBL document was generated elsewhere (the *XML* page in a previous run, an external tool, a Process API call) and now needs to be persisted and / or submitted.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — as long as the input is a well-formed UBL 2.1 document.

For lighter use cases:

- *UBL Tools → Validate* runs validation only, without writing to the database or submitting.
- *UBL Tools → XML Viewer* opens any XML for inspection or light editing.
- *Sync → Fetch Input* runs the same pipeline in batch over the UBL directory.

---

## Pipeline at a glance

<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="up-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="up-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="up-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="up-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="380" y="20" width="240" height="74" rx="10" fill="url(#up-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 UBL 2.1 file</text>
  <text x="500" y="62" fill="currentColor" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">DOC_DCT_KCO.xml</text>
  <text x="500" y="80" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">in dirInput/ubl/</text>
  <rect x="400" y="120" width="200" height="50" rx="10" fill="url(#up-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="142" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔎 Parse filename</text>
  <text x="500" y="160" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">→ DOC + DCT + KCO</text>
  <line x1="500" y1="94" x2="500" y2="120" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#up-arrow)"/>
  <rect x="400" y="200" width="200" height="50" rx="10" fill="url(#up-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="222" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Mode</text>
  <text x="500" y="240" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">decision</text>
  <line x1="500" y1="170" x2="500" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#up-arrow)"/>
  <rect x="50" y="290" width="240" height="60" rx="10" fill="url(#up-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="170" y="316" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ Validate only</text>
  <text x="170" y="334" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">XSD + Schematron</text>
  <rect x="50" y="380" width="240" height="50" rx="10" fill="url(#up-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="170" y="408" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Results</text>
  <line x1="170" y1="350" x2="170" y2="380" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#up-arrow)"/>
  <path d="M 400 230 L 170 230 L 170 290" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#up-arrow)"/>
  <text x="280" y="222" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Validate only</text>
  <rect x="700" y="290" width="240" height="60" rx="10" fill="url(#up-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="820" y="316" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ Validate</text>
  <text x="820" y="334" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">XSD + Schematron</text>
  <path d="M 600 230 L 820 230 L 820 290" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#up-arrow)"/>
  <text x="710" y="222" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Process &amp; Validate</text>
  <rect x="700" y="380" width="240" height="56" rx="10" fill="url(#up-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="820" y="402" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 DB persist</text>
  <text x="820" y="420" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">Replace: Skip / Overwrite</text>
  <line x1="820" y1="350" x2="820" y2="380" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#up-arrow)"/>
  <rect x="700" y="466" width="240" height="50" rx="10" fill="url(#up-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="820" y="487" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Send to PA</text>
  <text x="820" y="503" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">decision</text>
  <line x1="820" y1="436" x2="820" y2="466" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#up-arrow)"/>
  <rect x="350" y="560" width="200" height="56" rx="10" fill="url(#up-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="450" y="584" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 PA</text>
  <text x="450" y="602" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Use settings · Force send</text>
  <rect x="700" y="560" width="240" height="56" rx="10" fill="url(#up-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="820" y="584" fill="currentColor" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🏠 Local 99XX</text>
  <text x="820" y="602" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Skip sending</text>
  <path d="M 760 516 L 760 540 L 510 540 L 510 560" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#up-arrow)"/>
  <text x="630" y="535" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Use settings · Force send</text>
  <line x1="820" y1="516" x2="820" y2="560" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#up-arrow)"/>
  <text x="850" y="540" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">Skip sending</text>
</svg>

No XSL transformation runs — the file is consumed as-is. Only the validation, persistence and submission steps execute.

---

## Filename convention

The filename must follow the **`DOC_DCT_KCO.xml`** pattern, where:

| Token | Meaning |
|---|---|
| `DOC` | Document number (e.g. `12345`). |
| `DCT` | Document type code (e.g. `RI`, `RN`). |
| `KCO` | Company code (e.g. `00070`). |

Example: `12345_RI_00070.xml`. The pipeline parses the database key directly from the filename — files that don't follow this convention are rejected at parse time.

The file lives in the **UBL directory** — `dirInput/ubl/` (the `dirInput` global path resolved with all placeholders, then a fixed `ubl` subdirectory). No template is involved at this stage; the input is already UBL.

---

## Input

| Field | Description |
|---|---|
| **File** | Use **Upload** to send a local `.xml` file to the UBL directory, or **Browse** to pick an existing file from the server. The selected file's full server-side path appears under **Selected**. |
| **Mode** | `Process & Validate` runs the full pipeline (validate + persist + optional submit); `Validate only` runs validation alone (no DB, no submit). |
| **Replace Mode** | `Overwrite existing` (the default here) re-imports the invoice if it already exists in the database; `Skip` leaves the existing record untouched. |
| **Send to PA** | `Use settings` honours the e-invoicing template; `Force send` always submits regardless of settings; `Skip sending` never submits. |

In `Validate only` mode, the **Replace Mode** and **Send to PA** options are hidden — they have no effect when nothing is persisted or submitted.

A **Clear** button next to the run button removes the current selection without running the pipeline.

---

## Pipeline

When `Process & Validate` is selected, the pipeline runs in sequence:

1. **Parse** — read the UBL document and extract the database key (DOC + DCT + KCO) from the filename.
2. **Validate** — XSD schema and Schematron business rules.
3. **Persist** — insert invoice header, lines, VAT subtotals, lifecycle and validation results in the NomaUBL database (subject to **Replace Mode**).
4. **Submit** — optionally send the UBL to the configured Plateforme Agréée (subject to **Send to PA**).

In `Validate only` mode, only step 2 runs — no DB write, no submission.

### Replace Mode

| Value | Behaviour |
|---|---|
| **Overwrite existing** *(default)* | The existing invoice header, lines, VAT and lifecycle are deleted and re-imported. The default for this page because UBL files are typically updated in place during template iteration. |
| **Skip** | The existing invoice is left untouched; the run logs a duplicate-skipped message. |

Overwriting also resets the lifecycle to its initial state — any PA-side history is decoupled from the local record. Reserve `Overwrite` for genuine re-imports, not for incremental updates after a PA submission.

### Send to PA

| Value | Behaviour |
|---|---|
| **Use settings** | Honours the **sendToPA** flag of the *e-invoicing* template. |
| **Force send** | Submits to the PA regardless of the e-invoicing template's setting. Useful when the global setting disables submission for the environment but a specific document needs to be pushed. |
| **Skip sending** | Runs validation and persistence locally without submitting. The invoice ends up in a local `99XX` status — the exact code depends on the validation outcome (success, warnings or errors). A subsequent **Resend** action from *Application → E-Invoicing* can submit it later. See the [Status Reference](../references/status-reference.mdx) for the meaning of each code. |

---

## Results

After processing completes, the **Results** section displays:

- A green status line summarising the outcome — `<filename>: <status message>` on success, an error message otherwise.
- A **structured log table** with one row per validation result. Each row carries:

| Column | Description |
|---|---|
| **Severity** | `FATAL`, `ERROR`, `WARNING` or `INFO`. `FATAL` and `ERROR` block submission to the PA; `WARNING` and `INFO` are informational. |
| **Module** | Validation engine — `XSD` (schema check), `Schematron` (business rules) or `PROCESS` (pipeline-level events). |
| **Submodule** | Specific rule identifier or filename. |
| **Message** | Human-readable explanation of the failure, warning or progress event. |

A run with no `ERROR` / `FATAL` row is considered successful even if `WARNING` rows are present — warnings do not block submission.

---

## Tips & best practices

- **The UBL directory is fixed.** Files always go to `dirInput/ubl/`, regardless of the template — this page never carries a template selector.
- **Stick to the `DOC_DCT_KCO.xml` filename convention.** Diverging from it breaks the database key parser; the file is uploaded but cannot be processed.
- **Use `Validate only` to test a UBL document before committing.** No database write, no PA submission — only the validation engines run. Useful when troubleshooting a Schematron failure on an externally-generated UBL.
- **`Force send` is the manual override.** When the global setting disables submission (e.g. in a non-production environment) but a specific document needs to reach the PA, `Force send` is the right escape hatch — log the reason in the lifecycle.
- **Avoid `Overwrite` after a PA submission.** A submitted invoice carries a PA-side identity; overwriting locally desynchronises the local record from the PA. Use *Application → E-Invoicing → Resend* if a re-submission is genuinely needed.
- **For batch UBL processing, prefer *Sync → Fetch Input*.** It iterates the same `dirInput/ubl/` directory and applies the same pipeline per file.
