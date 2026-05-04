---
title: Fetch Input
description: "Batch-automated equivalent of Extract and Process — scan a directory or the BIP Print Queue, pick items in a checkbox list, and run the same Extract → Process pipeline on every selected item."
keywords: [NomaUBL, sync, fetch input, batch, BIP, directory, last job number, JD Edwards, SAP, NetSuite, custom ERP, scan, select, process]
---

# Fetch Input

The **Fetch Input** screen is the **batch automation** of [*Processing → Extract and Process*](../processing/extract-and-process.md). It scans a directory of files or the BIP Print Queue, lists every candidate, and runs the same Extract → Process pipeline on every selected item.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — except for the BIP source, which is JD Edwards-specific.

The per-item semantics (mode resolution, validation, persistence, PA submission, BIP post-generation) are documented on [*Extract and Process*](../processing/extract-and-process.md). This page documents only what is specific to batch operation: the scan-then-select flow, the source modes, the **Last Job Number** incremental retrieval, and the aggregated results.

---

## Pipeline at a glance

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="fi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="fi-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="fi-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="370" y="20" width="260" height="60" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Configure</text>
  <text x="500" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Process Type + source + parameters</text>
  <rect x="410" y="110" width="180" height="60" rx="10" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="500" y="146" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔎 Scan</text>
  <line x1="500" y1="80" x2="500" y2="110" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
  <rect x="410" y="200" width="180" height="50" rx="10" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="222" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Source</text>
  <text x="500" y="240" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">decision</text>
  <line x1="500" y1="170" x2="500" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
  <rect x="40" y="290" width="280" height="80" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="180" y="316" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 List BIP jobs</text>
  <text x="180" y="334" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">jobNumber &gt; Last Job Number</text>
  <text x="180" y="354" fill="currentColor" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">BIP Queue</text>
  <rect x="680" y="290" width="280" height="80" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="820" y="316" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📁 List .xml files</text>
  <text x="820" y="334" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">dirInput/template/ or /ubl/</text>
  <text x="820" y="354" fill="currentColor" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">Input Directory</text>
  <path d="M 410 230 L 380 230 L 380 300 L 320 300" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#fi-arrow)"/>
  <path d="M 590 230 L 620 230 L 620 300 L 680 300" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#fi-arrow)"/>
  <rect x="370" y="300" width="260" height="80" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="326" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☑ Candidate list</text>
  <text x="500" y="346" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">checkboxes</text>
  <text x="500" y="362" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Select / Deselect All</text>
  <line x1="320" y1="350" x2="370" y2="340" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#fi-arrow)"/>
  <line x1="680" y1="350" x2="630" y2="340" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#fi-arrow)"/>
  <rect x="370" y="410" width="260" height="60" rx="10" fill="url(#fi-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="500" y="436" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ For each selected item</text>
  <text x="500" y="454" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Extract and Process pipeline</text>
  <line x1="500" y1="380" x2="500" y2="410" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
  <text x="510" y="395" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">Process selection</text>
  <rect x="370" y="490" width="260" height="44" rx="9" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="500" y="510" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📊 Aggregated Results</text>
  <text x="500" y="525" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">Total / Succeeded / Failed</text>
  <line x1="500" y1="470" x2="500" y2="490" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
</svg>

The flow is **two-step**: a Scan call lists candidates without running any processing; the user then ticks the items to keep and clicks Process. The processing step iterates over the selection, applying the Extract and Process pipeline per item.

---

## Processing Options

The first section configures **how each selected item is processed**. The semantics match [*Extract and Process — Processing*](../processing/extract-and-process.md#processing); this page just exposes the same controls so the same options apply to every selected item.

| Field | Description |
|---|---|
| **Source** *(read-only display)* | `XML` or `UBL`. Inferred from the chosen template's `source` property — set on the [Documents](../management/documents.md) page, not here. Selects which pipeline runs. See [*Process Document*](../processing/document.md) for the per-item semantics. |
| **Mode** *(XML source only)* | `AUTO`, `SINGLE`, `BURST` or `UBL`. See [*Process Document — Modes (XML source)*](../processing/document.md#modes-xml-source). |
| **Mode** *(UBL only)* | `Process & Validate` or `Validate only`. |
| **Replace** | `Skip` keeps existing invoices untouched; `Overwrite` re-imports them. |
| **Send to PA** | `Use settings` (default), `Skip sending`, or `Force send` (UBL only). |

These settings apply uniformly to **every** selected item in the run. To process a subset with different options, run the page twice — once per option set.

---

## Extract Options

The second section picks the **source** and any source-specific parameters.

| Field | Description |
|---|---|
| **Template** | Required when *Process As = XML*. Selects the XSL pipeline applied to each item. Hidden in UBL mode (UBL files are picked up directly from `dirInput/ubl/`). |
| **Source** | `BIP Queue` (JD Edwards-specific) or `Input Directory`. |

### Source = BIP Queue

| Field | Description |
|---|---|
| **Language** | Optional BIP language filter (e.g. `FR`). |
| **Extract Mode** | `Extract Input (XML)`, `Extract Output` or `Extract Both`. See [*Extract BIP*](../extract/extract-bip.md) for the semantics. |
| **Last Job Number** | Pre-filled from `global.lastBipJobNumber`. The Scan call returns only jobs with `jobNumber > Last Job Number`. The field can be edited to re-scan a different range, but the global config is updated to the highest processed job number after each batch — incremental retrieval is the default. |

### Source = Input Directory

The Scan lists every `.xml` file present in:

- `dirInput/<template>/` for *Process As = XML*;
- `dirInput/ubl/` for *Process As = UBL*.

No additional parameters — every file in the directory is a candidate.

---

## Scan and select

Click **Scan** to populate the **candidate list**. The list shows one row per candidate with a checkbox; rows are selected by default. Above the list:

| Element | Description |
|---|---|
| **Selection counter** | `N file(s) found in <directory>` (Directory mode) or `N new job(s) after #<lastJob>` (BIP mode). |
| **Select All / Deselect All** | Mass toggles. |

Each row carries the file basename (Directory mode) or the BIP job's base name (BIP mode). Untick rows to exclude them from the next Process call without altering the underlying directory or BIP queue.

Click **Process (N)** to run the selection. The button disables itself while the run is in progress and during the scan.

---

## Results

After processing, the section displays an aggregated summary plus a per-item result list.

### Summary bar

| Metric | Description |
|---|---|
| **Total** | Number of items processed. |
| **Succeeded** | Items that finished with no `ERROR` / `FATAL` rows. `WARNING` rows do not count as failure. |
| **Failed** | Items that produced at least one blocking row. |

### Per-item rows

Each item appears as a row with a green ✓ (success) or red ✗ (failure) marker. **Clicking a row expands** the underlying log table (same columns as on the [*Process Document*](../processing/document.md) page: `Severity / Module / Submodule / Message`).

When the BIP source is used and processing succeeds, the **Apply post-generation** call runs after each item — exactly as on [*Extract and Process*](../processing/extract-and-process.md). The global `lastBipJobNumber` is also refreshed to the highest processed job number, so the next Scan returns only newer jobs.

---

## Tips & best practices

- **Use Fetch Input for unattended runs.** The page is the batch counterpart to *Extract and Process*; the manual selection step makes it suitable for end-of-day batches or scheduled runs.
- **Keep `Last Job Number` as the watermark.** The default value is the last successfully processed job number — leaving it untouched is the supported way to do incremental retrieval. Lowering it manually re-scans older jobs (useful for replays).
- **Scan first, process second.** The two-step flow exists deliberately: a stale candidate list, an unintended template choice, or a wrong source mode shows up as zero / wrong rows in the candidate list before any side effect happens.
- **`Select All` and `Deselect All` are top-of-list shortcuts.** When the candidate list runs into hundreds of rows, mass-toggle then fine-tune is faster than ticking individually.
- **Untick rather than delete.** Removing the underlying file or BIP job to skip it is destructive; an untick on this page is reversible — the row reappears on the next Scan if the underlying source still has it.
- **For BIP, `Apply post-generation` shifts the watermark.** A successful processed job updates `global.lastBipJobNumber` automatically — nothing to maintain by hand.
