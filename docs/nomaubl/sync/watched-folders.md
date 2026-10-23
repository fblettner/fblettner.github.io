---
title: Watched Folders
description: "Watched folders pick up JD Edwards PDF / XML outputs from mounted directories, convert PDFs to XML in parallel, and run one batch per document template — scheduled from global → Scheduling, on demand from the page, or from the command line."
keywords: [NomaUBL, watched folders, watch-folders, PDF pickup, pdf2xml, batch, scheduler, mounted share, overlap window, JD Edwards, SAP, NetSuite, custom ERP]
---

# Watched Folders

The **Watched folders** page lets NomaUBL fetch source documents straight from directories — typically the network share where JD Edwards drops its report outputs — instead of waiting for files to be pushed into the input folder. Each run lists the configured folders, keeps the new files, **converts PDFs to XML in parallel** (XML and UBL files are copied as is) into the document template's input folder, then runs **one batch per template** — the single-JVM batch for an XML or PDF template, the per-file loop for a UBL template.

Open it from the sidebar under **Sync → Watched folders**; **Save** and **Refresh** sit in the page header. The configuration ships empty: nothing runs until a folder is configured and a job is scheduled.

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

Each watched folder is a **collapsible card**: its header shows the number, the directory and a one-line summary; click it to open the fields, **×** removes the folder, **＋ Add folder** appends one. **Parallel conversions** (default `4`), above the cards, sets how many PDFs are converted at once; the batch itself keeps its own thread pool.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <span style={{fontSize: '14px', fontWeight: 700}}>Watched folders</span>
    <span style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)'}}>↻ Refresh</span>
      <span style={{padding: '4px 12px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontWeight: 600}}>💾 Save</span>
    </span>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px'}}>
    <div style={{display: 'flex', gap: '10px', padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.08)', alignItems: 'center'}}>
      <span style={{fontFamily: 'monospace', opacity: 0.5}}>#1</span><span style={{fontFamily: 'monospace', fontWeight: 600}}>/data/mnt/jde_outputs</span><span style={{opacity: 0.6}}>R42565_* → invoices · since last scan</span><span style={{flex: 1}} /><span style={{color: '#f87171'}}>×</span>
    </div>
    <div style={{padding: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px'}}>
      <div><div style={{fontWeight: 700, opacity: 0.7, marginBottom: '4px'}}>Folder</div><div>Directory · Pattern · Template · Manifest</div></div>
      <div><div style={{fontWeight: 700, opacity: 0.7, marginBottom: '4px'}}>Scan</div><div>Window · Overlap (hours) · Last scan · Require mount</div></div>
      <div><div style={{fontWeight: 700, opacity: 0.7, marginBottom: '4px'}}>Batch</div><div>Replace · Send to PA · Mode</div></div>
    </div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', display: 'flex', gap: '10px', padding: '8px 10px'}}>
    <span style={{fontFamily: 'monospace', opacity: 0.5}}>#2</span><span style={{fontFamily: 'monospace', fontWeight: 600}}>%APP_HOME%/%ENV%/input/credit_notes</span><span style={{opacity: 0.6}}>→ credit_notes · input folder</span>
  </div>
  <span style={{opacity: 0.7}}>＋ Add folder</span>
</div>

### Folder

| Field | Description |
|---|---|
| **Directory** | The folder to scan — a mounted share or a local folder (e.g. `/data/mnt/jde_outputs`); `%APP_HOME%` / `%ENV%` accepted. When it **is** the template's own input folder, the row is a plain batch trigger — see [Input folder mode](#input-folder-mode). |
| **Pattern** | File-name glob of the files to pick up (e.g. `R42565_*`). Defaults to `*.xml` on the template's input folder. |
| **Template** | The document template the files are processed with — XML, PDF and UBL templates are all supported. |
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
3. **Convert** — PDFs are converted to XML in parallel into the template's input folder; XML and UBL files are copied as is. For a [PDF-source template](../management/documents.md#pdf-extraction), any text PDF goes through the template's PDF extraction settings instead of the JD Edwards converter.
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

- **Scheduled** — under [global → Scheduling → Batch Document Processing](../configuration/system/global.md), add a batch job with the source **Watched folders**, every *N* minutes or **daily at** a fixed time. The job can target a single folder (picked from the configured directories) or all of them. The *Directory* and *BIP* sources remain available.
- **Command line** — `nomaubl.sh watch-folders <env> [--folder N] [--since <date>] [--dry-run] [--no-process]`.
- **API** — `POST /api/watch-folders/run`.

---

## Tips & best practices

- **Keep the overlap larger than the copy time.** A file still being written when the scan passes is picked up on the next run as long as it stays inside the window.
- **Tick *Require mount* on network shares.** An unmounted share otherwise looks like an empty folder and nothing is processed, silently.
- **Start with a dry run.** It shows exactly which files a new folder would pick up before anything is converted.
- **Give one template one set of batch options.** Two folders feeding the same template with different options are processed with the first row's options.
