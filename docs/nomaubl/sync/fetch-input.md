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

## At a glance

<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fip-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fip-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fip-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="460" rx="14" fill="url(#fip-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Fetch Input</text>
  <rect x="700" y="30" width="80" height="22" rx="5" fill="url(#fip-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="740" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">🔎 Scan</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Processing options</text>
  <text x="240" y="114" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESS TYPE</text>
  <rect x="340" y="104" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="120" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <text x="556" y="120" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEND TO PA</text>
  <rect x="630" y="104" width="100" height="24" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="680" y="120" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Use settings</text>

  <line x1="240" y1="146" x2="780" y2="146" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="170" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="320" y="160" width="100" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="370" y="176" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Directory</text>
  <rect x="424" y="160" width="100" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="176" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">BIP (JDE)</text>
  <text x="540" y="176" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">decides whether to walk dirInput/ or query F95630</text>

  <text x="240" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST JOB NUMBER  <text fill="#64748b" fontStyle="italic">(BIP only)</text></text>
  <rect x="400" y="198" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="213" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">42801</text>
  <text x="528" y="213" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">incremental — only jobs above this id are returned</text>

  <line x1="240" y1="238" x2="780" y2="238" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="262" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Candidates</text>
  <text x="338" y="262" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">5 found · 3 selected</text>
  <rect x="700" y="252" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="739" y="267" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Select all</text>

  <rect x="240" y="282" width="540" height="28" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="290" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="259" y="301" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="280" y="301" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">INV-2026-0142.xml · invoices · 18 KB · today 12:34</text>

  <rect x="240" y="316" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="324" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="259" y="335" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="280" y="335" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">INV-2026-0143.xml · invoices · 18 KB · today 12:35</text>

  <rect x="240" y="350" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="358" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="259" y="369" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="280" y="369" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CR-2026-0021.xml · credit_notes · 14 KB · today 12:38</text>

  <rect x="240" y="384" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="392" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="280" y="403" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">INV-2026-0144.xml · invoices · 19 KB · today 12:42</text>

  <rect x="240" y="418" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="426" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="280" y="437" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">DR-2026-0007.xml · debit_notes · 12 KB · today 12:50</text>

  <rect x="240" y="456" width="170" height="24" rx="5" fill="url(#fip-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="325" y="472" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Process selected (3)</text>

  <rect x="20" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Process type + PA policy</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drives template + send-to-PA</text>
  <line x1="220" y1="116" x2="340" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fip-arrow)"/>

  <rect x="20" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source toggle</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Directory or BIP (JDE)</text>
  <line x1="220" y1="176" x2="320" y2="172" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fip-arrow)"/>

  <rect x="820" y="200" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Last Job Number</text>
  <text x="830" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cursor for incremental BIP</text>
  <line x1="820" y1="216" x2="520" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fip-arrow)"/>

  <rect x="20" y="316" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Checkbox list</text>
  <text x="30" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">scan → select what to process</text>
  <line x1="220" y1="332" x2="252" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fip-arrow)"/>

  <rect x="820" y="448" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="463" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Process selected</text>
  <text x="830" y="476" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">runs the per-item pipeline</text>
  <line x1="820" y1="464" x2="410" y2="468" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fip-arrow)"/>
</svg>

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
| **Source** | `BIP Queue` (JD Edwards-specific), `Input Directory`, or `PA inbound (supplier invoices)` *(2026.05.17)*. |

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

### Source = PA inbound (supplier invoices) *(2026.05.17)*

Ask the Plateforme Agréée for the list of invoices addressed to the operator since the last successful sweep, then pick which ones to download and process.

| Field | Description |
|---|---|
| **Document template** | The `received-ubl` template (or any template with `direction = R`) — pre-filtered so a *PA inbound* scan never lands on an emit-side template by accident. |
| **Issued after** | Earliest issue date to consider. Defaults to the cursor saved in the *global* template (`lastFetchReceivedAt`). Edit to backfill — the cursor is reset to the highest issue date actually processed at the end of the run. |
| **Include already imported** | Off by default. The PA may return the same UUID twice; with the toggle off the deduplication against `F564231` filters them out before the scan results are shown. Tick to inspect every reference the PA returned, e.g. to re-pull a UBL whose previous import failed mid-pipeline. |

The Scan calls the `fetch-received-list` task on the PA's api-connector template. Each candidate row carries the PA UUID, the supplier name, the supplier VAT number, the issue date and the total. Tick the rows to process; **Process (N)** then calls `fetch-received` for each ticked row, downloads the UBL, and runs the standard UBL pipeline against the chosen template.

To run the same flow without picking by hand, either schedule it via `global.fetchReceivedInterval` (minutes between sweeps, see [Global settings](../configuration/system/global.md)) or invoke it from the CLI with `-fetch-received` (see [Command Line](../management/command-line.md)).

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
