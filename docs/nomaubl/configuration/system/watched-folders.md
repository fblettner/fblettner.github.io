---
title: Watched Folders
description: "Watched folders pick up JD Edwards PDF / XML outputs from mounted directories, convert PDFs to XML in parallel, and run one batch per document template — scheduled from global → Scheduling, on demand from the editor, or from the command line."
keywords: [NomaUBL, watched folders, watch-folders, PDF pickup, pdf2xml, batch, scheduler, mounted share, overlap window, JD Edwards, SAP, NetSuite, custom ERP]
---

# Watched Folders

The **Watched folders** system template lets NomaUBL fetch source documents straight from directories — typically the network share where JD Edwards drops its report outputs — instead of waiting for files to be pushed into the input folder. Each run lists the configured folders, keeps the new files, **converts PDFs to XML in parallel** (XML files are copied as is) into the document template's input folder, then runs **one batch per template**.

Open it under **Configuration → System → Watched folders**. The template ships empty: nothing runs until a folder is configured and a job is scheduled.

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

Each row of the table is one watched folder; **＋ Add folder** appends a row, **×** removes it.

| Column | Description |
|---|---|
| **Directory** | The folder to scan (e.g. `/data/mnt/jde_outputs`). |
| **Pattern** | File-name pattern of the files to pick up (e.g. `R42565_*`). |
| **Template** | The document template the files are processed with — they land in its input folder. |
| **Manifest** | Optional pdf2xml manifest used to convert the PDFs of this folder. |
| **Overlap h** | Overlap window in hours (default `2`): each run looks at files newer than the last scan **minus** this window. |
| **Mount** | When ticked, the directory must be a mounted share — an unmounted mount point is reported as an error instead of being read as empty. |
| **Last scan** | The watermark written by every run (UTC instant). Clear it or type a date (`yyyy-MM-dd`, `yyyy-MM-ddTHH:mm:ss` in server time, or an ISO instant) to rescan from that point. |

Above the table, **Parallel conversions** (default `4`) sets how many PDFs are converted at once; the batch itself keeps its own thread pool.

---

## How a run works

1. **List** — every folder is listed for files matching its pattern and newer than *last scan − overlap*. A folder scanned for the first time, without a date, only takes the overlap window — use a backfill date for history.
2. **Filter** — files already processed (source file name found in the archive) or already waiting as XML in the template's input folder are dropped.
3. **Convert** — PDFs are converted to XML in parallel into the template's input folder; XML files are copied as is.
4. **Process** — one batch runs per template, with the batch's own parallelism.

The last-scan date advances on every run. A file that fails is **retried** while it stays inside the overlap window and reported **by name** — it never blocks the others.

---

## Run now

The **Run now** group runs the saved configuration on demand:

- **Dry run** — only lists what would be converted and processed.
- **Scan and process** — runs the full pickup.
- An optional **backfill date** widens every folder's window for this run only.

---

## Scheduling and command line

- **Scheduled** — under [global → Scheduling → Batch Document Processing](./global.md), add a batch job with the source **Watched folders**, every *N* minutes or **daily at** a fixed time. The job can target a single folder (picked from the configured directories) or all of them.
- **Command line** — `nomaubl.sh watch-folders <env> [--folder N] [--since <date>] [--dry-run] [--no-process]`.
- **API** — `POST /api/watch-folders/run`.

---

## Tips & best practices

- **Keep the overlap larger than the copy time.** A file still being written when the scan passes is picked up on the next run as long as it stays inside the window.
- **Tick *Mount* on network shares.** An unmounted share otherwise looks like an empty folder and nothing is processed, silently.
- **Start with a dry run.** It shows exactly which files a new folder row would pick up before anything is converted.
