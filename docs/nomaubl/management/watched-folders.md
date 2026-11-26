---
title: Watched Folders
description: "Watched folders pick up JD Edwards PDF / XML outputs from mounted directories, convert PDFs to XML in parallel, and run one batch per document — scheduled as a batch job on the Scheduled jobs page, on demand from the page, or from the command line."
keywords: [NomaUBL, watched folders, watch-folders, PDF pickup, pdf2xml, batch, scheduler, mounted share, overlap window, JD Edwards, SAP, NetSuite, custom ERP]
---

# Watched Folders

The **Watched folders** page lets NomaUBL fetch source documents straight from directories — typically the network share where JD Edwards drops its report outputs — instead of waiting for files to be pushed into the input folder. Each run lists the configured folders, keeps the new files, **converts PDFs to XML in parallel** (XML and UBL files are copied as is) into the document's input folder, then runs **one batch per template** — the single-JVM batch for an XML or PDF template, the per-file loop for a UBL template.

Open it from the sidebar under **Management → Watched folders**, next to File versions — the page configures the folders, their schedule is a batch job of the [Scheduled jobs](../sync/scheduled-jobs/overview.md) page; **Save** and **Refresh** sit in the page header. The configuration ships empty: nothing runs until a folder is configured and a job is scheduled.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="wf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
  </defs>
  <rect x="20" y="70" width="200" height="150" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="120" y="98" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Watched folder</text>
  <text x="120" y="122" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">/data/mnt/jde_outputs</text>
  <text x="120" y="142" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">pattern R42565_*</text>
  <text x="120" y="170" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">new since last scan − overlap</text>
  <text x="120" y="188" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">already processed → skipped</text>

  <line x1="222" y1="145" x2="300" y2="145" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#wf-arrow)"/>

  <rect x="304" y="70" width="200" height="150" rx="12" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="404" y="98" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Conversion</text>
  <text x="404" y="124" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF → XML (pdf2xml)</text>
  <text x="404" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">in parallel</text>
  <text x="404" y="170" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">XML copied as is</text>

  <line x1="506" y1="145" x2="584" y2="145" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#wf-arrow)"/>

  <rect x="588" y="70" width="180" height="150" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="678" y="98" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Template input</text>
  <text x="678" y="124" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">dirInput/invoices</text>

  <line x1="770" y1="145" x2="828" y2="145" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#wf-arrow)"/>

  <rect x="832" y="70" width="148" height="150" rx="12" fill="rgba(50,215,75,0.06)" stroke="rgba(50,215,75,0.45)" strokeWidth="1.2"/>
  <text x="906" y="98" fill="#4ade80" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Batch</text>
  <text x="906" y="124" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">one per template</text>
  <text x="906" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL · PDF · PA</text>
</svg>

---

## Folders

Each watched folder is a **collapsible card**: its header shows the number, the directory and a one-line summary; click it to open the folder, **×** removes it, **＋ Add folder** appends one. An open folder shows four step cards — **Folder**, **Document**, **Scan** and **Batch** — each with its state in a few words (directory and pattern, document, scan window and last scan, batch mode); a missing directory or document shows in red. Click a card to edit its fields below. **Parallel conversions** (default `4`), above the cards, sets how many PDFs are converted at once; the batch itself keeps its own thread pool.

<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="wfoen-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="wfoen-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="wfoen-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="wfoen-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="424" rx="14" fill="url(#wfoen-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Watched folders</text>
  <rect x="800" y="34" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="840.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Refresh</text>
  <rect x="886" y="34" width="74" height="22" rx="5" fill="url(#wfoen-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="923.0" y="48.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <text x="240" y="92" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Parallel conversions</text>
  <rect x="380" y="78" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="92.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">4</text>
  <rect x="240" y="110" width="720" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="130" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">#1</text>
  <text x="276" y="130" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">/data/mnt/jde_outputs</text>
  <text x="440" y="130" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">R42565_∗ → invoices · since last scan</text>
  <text x="942" y="130" fill="#f87171" fontSize="13" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="140" width="720" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="252" y="150" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="157" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268.0" y="168.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣</text>
  <text x="282" y="168.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FOLDER</text>
  <text x="261" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">/data/mnt/jde_outputs · R42…</text>
  <line x1="415" y1="172.0" x2="427" y2="172.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#wfoen-flow)"/>
  <rect x="430" y="150" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="438" y="157" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="446.0" y="168.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="460" y="168.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOCUMENT</text>
  <text x="439" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">invoices</text>
  <line x1="593" y1="172.0" x2="605" y2="172.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#wfoen-flow)"/>
  <rect x="608" y="150" width="162" height="44" rx="8" fill="rgba(255,159,10,0.14)" stroke="#fb923c" strokeWidth="1.3"/>
  <rect x="616" y="157" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="624.0" y="168.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⌕</text>
  <text x="638" y="168.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCAN</text>
  <text x="617" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Since last scan · 2026-11-2…</text>
  <line x1="771" y1="172.0" x2="783" y2="172.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#wfoen-flow)"/>
  <rect x="786" y="150" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="794" y="157" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="802.0" y="168.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="816" y="168.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BATCH</text>
  <text x="795" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">AUTO</text>
  <line x1="240" y1="204" x2="960" y2="204" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="230" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Window</text>
  <rect x="390" y="215" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="229.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Since last scan ▾</text>
  <text x="256" y="260" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Overlap (hours)</text>
  <rect x="390" y="245" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="259.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">2</text>
  <text x="256" y="290" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Last scan</text>
  <rect x="390" y="275" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="289.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">2026-11-25T22:00:00Z</text>
  <rect x="256" y="311" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M258.5,316.5 L260.8,318.8 L264.8,314" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="273" y="320" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Require mount</text>
  <rect x="240" y="372" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="391" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">#2</text>
  <text x="276" y="391" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">%APP_HOME%/%ENV%/input/credit_notes</text>
  <text x="540" y="391" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">→ credit_notes · input folder</text>
  <rect x="240" y="412" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.0" y="426.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add folder</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Parallel conversions</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PDFs converted at once</text>
  <line x1="200" y1="97.0" x2="236" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wfoen-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Steps of the folder</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each card shows its state</text>
  <line x1="200" y1="177.0" x2="252" y2="175" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wfoen-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Collapsed folder</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click the header to open it</text>
  <line x1="200" y1="397.0" x2="240" y2="387" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wfoen-arrow)"/>
  <rect x="1000" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Folder header</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">directory · one-line summary</text>
  <line x1="1000" y1="127.0" x2="930" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wfoen-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Selected step</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its fields below the cards</text>
  <line x1="1000" y1="247.0" x2="620" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wfoen-arrow)"/>
</svg>

### Folder

| Field | Description |
|---|---|
| **Directory** | The folder to scan — a mounted share or a local folder (e.g. `/data/mnt/jde_outputs`); `%APP_HOME%` / `%ENV%` accepted. When it **is** the template's own input folder, the row is a plain batch trigger — see [Input folder mode](#input-folder-mode). |
| **Pattern** | File-name glob of the files to pick up (e.g. `R42565_*`). Defaults to `*.xml` on the template's input folder. |

### Document

| Field | Description |
|---|---|
| **Template** | The document the files are processed with — XML, PDF and UBL templates are all supported. |
| **Manifest** | JD Edwards PDF only: optional pdf2xml manifest (a JDE-native XML sample). Blank = DD-alias mode. |

### Scan

| Field | Description |
|---|---|
| **Window** | **Since last scan** *(default)*: files newer than the last scan minus the overlap. **All files**: every matching file whatever its date, with no watermark — the check against already processed files alone prevents a second run. |
| **Overlap (hours)** | *Since last scan* only — rescan window below the last scan (default `2`); a failed file is retried while it stays inside it. |
| **Last scan** | *Since last scan* only — the watermark written by every run (UTC instant). Clear it or type a date (`yyyy-MM-dd`, `yyyy-MM-ddTHH:mm:ss` in server time, or an ISO instant) to rescan from that point; a first scan without one takes only the overlap. |
| **Require mount** | When ticked, the directory must be a mounted share — an unmounted mount point is reported instead of being read as empty. |

### Batch

The options of the template's batch, as on a scheduled *Directory* job:

| Field | Description |
|---|---|
| **Replace** | Replace mode: a file already processed is taken again. Avoid it with *All files* unless the files are removed after processing. |
| **Send to PA** | **Template settings** *(default)*, **Y – Force (UBL templates)** or **N – Skip**. |
| **Mode** | Processing mode of an XML batch: `AUTO` *(default, resolved per document)*, `SINGLE`, `BURST` or `UBL`. |

Folders feeding the **same template** must carry the same batch options: the first row wins, and a mismatch is logged.

---

## How a run works

1. **List** — every folder is listed for files matching its pattern — newer than *last scan − overlap*, or all of them with *All files*. A folder scanned for the first time, without a date, only takes the overlap window — use a backfill date for history.
2. **Filter** — files already processed (source file name found in the archive) or already waiting as XML in the template's input folder are dropped, unless the folder is in replace mode.
3. **Convert** — PDFs are converted to XML in parallel into the template's input folder; XML and UBL files are copied as is. For a [PDF-source template](./documents.md#pdf-extraction), any text PDF goes through the template's PDF extraction settings instead of the JD Edwards converter.
4. **Process** — once every conversion is done, one batch runs per template: the single-JVM batch for an XML or PDF template, with the batch's own parallelism; the per-file loop for a UBL template, failed files being moved to the errors folder.

The last-scan date advances on every run. A file that fails is **retried** while it stays inside the overlap window and reported **by name** — it never blocks the others: inside a batch, a file that fails is marked failed and moved to the errors folder while the other files finish.

**One batch at a time.** A template's batch locks its input folder for its whole duration, so a second batch cannot start on the same files. A manual or scheduled scan that finds the folder locked still converts the new files, leaves the batch to the running one and says so in its log.

### Input folder mode \{#input-folder-mode\}

A folder whose **Directory is the template's own input folder** is a plain batch trigger: no copy, no date, no check against processed files — the batch takes what the folder holds. It is the watched-folder form of a scheduled *Directory* job.

---

## Run now

The **Run now** group runs the saved configuration on demand:

- **Dry run** — only lists what would be converted and processed.
- **Scan and process** — runs the full pickup **in the background**: the run's log shows live under the buttons, so the page never waits on a request that outlives the proxy timeout.
- An optional **backfill date** widens every folder's window for this run only.

---

## Scheduling and command line

- **Scheduled** — on the [Scheduled jobs](../sync/scheduled-jobs/overview.md) page, **New job → Batch** with the source **Watched folders**, run every *N* minutes or **daily at** a fixed time. The job can target a single folder (picked from the configured directories) or all of them. The *Directory* and *BIP* sources remain available.
- **Command line** — `nomaubl.sh watch-folders <env> [--folder N] [--since <date>] [--dry-run] [--no-process]`.
- **API** — `POST /api/watch-folders/run`.

---

## Tips & best practices

- **Keep the overlap larger than the copy time.** A file still being written when the scan passes is picked up on the next run as long as it stays inside the window.
- **Tick *Require mount* on network shares.** An unmounted share otherwise looks like an empty folder and nothing is processed, silently.
- **Start with a dry run.** It shows exactly which files a new folder would pick up before anything is converted.
- **Give one template one set of batch options.** Two folders feeding the same template with different options are processed with the first row's options.
