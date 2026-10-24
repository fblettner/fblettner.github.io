---
title: Scheduled Jobs
description: "One NomaUBL page for every job the server runs on a schedule — PA import poll and status retrieval, e-reporting cycle, received invoices, batch document jobs, daily digests, auto-retries, lifecycle checks and the retention purge — with trigger, state, last and next run, Run now, Pause / Resume, run history and an in-place editor."
keywords: [NomaUBL, scheduled jobs, scheduler, batch jobs, polling, import poll, status retrieval, daily digest, auto-retry, lifecycle check, retention purge, run now, pause, run history, BIP, watched folders, JD Edwards, SAP, NetSuite, custom ERP]
---

# Scheduled Jobs

The **Scheduled jobs** page lists **every job the server runs on a schedule**, in one table: the PA polls, the e-reporting cycle, the received-invoices fetch, the batch document jobs, the daily digests, the auto-retries, the lifecycle checks and the retention purge. For each one it shows the trigger, the state, the last run with its duration and result, and the next run; from the same row a job can be run now, paused, or opened in its editor.

Open it from **Synchronization → Scheduled jobs**. The *Scheduler* card of the [Tech dashboard](../../application/tech-dashboard.md) links to the page.

---

## At a glance

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '12.5px', overflowX: 'auto'}}>
  <div style={{fontWeight: 700, fontSize: '15px'}}>Scheduled jobs</div>
  <div style={{opacity: 0.7, margin: '4px 0 12px'}}>Every job the server runs on a schedule — trigger, state, last and next run. Run now, pause the PA polls, or open the job's settings.</div>
  <div style={{display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '12px'}}>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>All kinds ▾</span>
    <span>☑ Auto-refresh</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Refresh</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontWeight: 600}}>New job</span>
    <span style={{opacity: 0.7, marginLeft: 'auto'}}>9 active of 12 job(s) · quiet window 06:00–07:00</span>
  </div>
  <table style={{width: '100%', borderCollapse: 'collapse'}}>
    <thead><tr style={{textAlign: 'left', opacity: 0.7}}><th>Kind</th><th>Job</th><th>Trigger</th><th>State</th><th>Last run</th><th>Duration</th><th>Result</th><th>Next run</th><th>Actions</th></tr></thead>
    <tbody>
      <tr><td>Poll</td><td style={{color: '#4a9eff'}}>PA import poll</td><td>every 5 min</td><td>On</td><td>2 min ago</td><td>3s</td><td>total=12 success=12</td><td>in 3 min</td><td>▶ ⏸ ⟲</td></tr>
      <tr><td>Poll</td><td style={{color: '#4a9eff'}}>PA status retrieval</td><td>every 15 min</td><td>Paused</td><td>1 h ago</td><td>12s</td><td>OK</td><td>—</td><td>▶ ▷ ⟲</td></tr>
      <tr><td>Batch</td><td style={{color: '#4a9eff'}}>Nightly BIP</td><td>daily 04:00</td><td>On</td><td>4 h ago</td><td>6 min</td><td>Processed 420/420, 0 failed</td><td>in 20 h</td><td>▶ ⏸ ⟲</td></tr>
      <tr><td>Digest</td><td style={{color: '#4a9eff'}}>ops-digest</td><td>daily 06:00</td><td>On</td><td>2 h ago</td><td>1s</td><td>sent to 2 recipients</td><td>in 22 h</td><td>▶ ⏸ ⟲</td></tr>
      <tr><td>Auto-retry</td><td style={{color: '#4a9eff'}}>retry-send-failed</td><td>daily 03:00</td><td>Running</td><td>now</td><td>—</td><td>—</td><td>in 24 h</td><td>▶ ⏸ ⟲</td></tr>
      <tr><td>System</td><td style={{color: '#4a9eff'}}>Retention purge</td><td>daily · keep 90 days</td><td>On</td><td>5 h ago</td><td>450 ms</td><td>purged 0 row(s)</td><td>in 19 h</td><td>▶ ⏸ ⟲</td></tr>
      <tr style={{opacity: 0.6}}><td>Poll</td><td>Received invoices fetch</td><td>—</td><td>Off</td><td>—</td><td>—</td><td>—</td><td>—</td><td>▶</td></tr>
    </tbody>
  </table>
  <div style={{opacity: 0.6, marginTop: '8px'}}>▶ Run now · ⏸ Pause · ▷ Resume · ⟲ Run history — the job name opens its editor</div>
</div>

---

## The jobs

| Kind | Jobs | Trigger set in |
|---|---|---|
| **Poll** | *PA import poll* (pending invoices, status `9906`), *PA status retrieval* (lifecycle events), *E-reporting cycle* (generation and submission of the due flows), *Received invoices fetch* (supplier invoices received on the platform). | The job's editor: interval in minutes, plus the quiet window for the two PA polls. |
| **Batch** | Batch document jobs: from the JDE print queue (BIP), from the input directory, or from the [watched folders](../../management/watched-folders.md). | The job's editor: interval or daily time, and the batch parameters below. |
| **Digest** | [Daily digests](./daily-digest.md) — e-mail of errors or archived invoices. | The digest form. |
| **Auto-retry** | [Auto-retries](./auto-retry.md) — daily resend of invoices in an error status. | The auto-retry form. |
| **Lifecycle check** | [Lifecycle checks](./lifecycle-checks.md) — daily integrity and ordering check of the statuses. | The check form. |
| **System** | *Retention purge* — the daily sweep of the database stores (see [Retention purge](#retention)). | The job's editor; days per store. |

Disabled jobs are listed too, as **Off**, so they can be enabled from the page.

---

## Columns

| Column | Description |
|---|---|
| **Kind** | Poll, Batch, Digest, Auto-retry, Lifecycle check, System. |
| **Job** | Name of the job; a click opens its editor. |
| **Trigger** | *every 5 min*, *daily 04:00*, *daily · keep 90 days*. |
| **State** | **On**, **Off**, **Paused**, **Running**. |
| **Last run** | When the last run started, with *Duration* and *Result* (the one-line outcome of the run). Kept across server restarts. |
| **Next run** | When the next scheduled run fires. |
| **Actions** | Run now, Pause / Resume, Run history. |

The toolbar filters by **kind**, refreshes the table (**Refresh**, **Auto-refresh**), creates a job (**New job**) and exports the grid. Its summary line counts the active jobs and shows the quiet window, highlighted while it is active.

---

## Actions

- **Run now** — runs the job at once, outside its schedule, after a confirmation. The pause switch and the quiet window are ignored for this run; a job already running is not started twice. The run is recorded like a scheduled one.
- **Pause / Resume** — available on every job. A paused job keeps its schedule but its fires are skipped until it is resumed or the server restarts — a pause can therefore never be forgotten for good. *Run now* ignores the pause.
- **Run history** — opens the last runs of the job: when, event (start, end, error), duration, result and run id. Every run of a scheduled job — fired by the schedule, by *Run now* or by the matching command-line switch — writes a start row and an end or error row in the runtime processing log. The run id also appears in the server log lines of that run, so the two can be joined in the [Server log](../../application/diagnostics/server-log.md). Failed runs show in [Diagnostics → Failures](../../application/diagnostics/failures.md).

---

## The editor

A click on the job name opens its editor in a window. **Save & apply** saves the settings and **reloads the schedules at once** — a changed hour or interval no longer waits for a server restart; the pauses survive the reload. The digest, auto-retry and lifecycle-check editors also offer **Send test** and **Delete**.

### Polls

| Job | Fields |
|---|---|
| **PA import poll** | **Import poll interval (min)** — minutes between import-status polls for pending invoices (status `9906`); `0` = disabled. **Quiet window from / to (HH:mm)** — see below. |
| **PA status retrieval** | **Status retrieval interval (min)** — minutes between lifecycle status retrievals from the PA; `0` = disabled. **Quiet window from / to (HH:mm)**. |
| **E-reporting cycle** | **E-reporting cycle interval (min)** — minutes between e-reporting cycles (generation and submission of the due flows); `0` = disabled. |
| **Received invoices fetch** | **Received invoices interval (min)** — minutes between fetches of the supplier invoices received on the platform; `0` = disabled. |

The **quiet window** is a daily time range during which the import poll and the status retrieval skip their runs — set it over a send campaign so per-invoice polls don't pile up while the PA integrates the batch. It may cross midnight; leave both bounds empty to disable it. The same two fields appear in [Job defaults](../../configuration/system/global.md#tab-7--job-defaults).

### Batch jobs

| Field | Description |
|---|---|
| **Label** | Name shown in the list (e.g. `BIP invoices`). |
| **Interval (min)** | Minutes between runs. `0` = disabled, unless a daily time is set. |
| **Daily at (HH:mm)** | Fires once a day at this local time instead of the interval. Empty = use the interval. |

| Field | Values | Description |
|---|---|---|
| **Process type** | `xml` / `ubl` | `xml` = full pipeline (transform + process); `ubl` = direct UBL processing (input is already UBL). |
| **Template** *(when Process type = `xml`)* | from list | Document to apply. Lists templates of type `document`. |
| **Mode** *(when Process type = `xml`)* | `AUTO` / `SINGLE` / `BURST` / `UBL` | Processing mode — `AUTO` lets NomaUBL decide; `SINGLE` and `BURST` force the corresponding output strategy; `UBL` produces UBL only. |
| **Source** | `bip` / `directory` / `watch-folders` | Where to fetch documents from: `bip` = JDE Print Queue *(JDE-specific)*; `directory` = scan the **Input Directory** of the [global settings](../../configuration/system/global.md) (a [watched folder](../../management/watched-folders.md#input-folder-mode) pointing at the input folder does the same); `watch-folders` = run the [Watched folders](../../management/watched-folders.md) pickup — the job then targets one configured directory (picked from a dropdown) or all of them. |
| **Extract mode** *(when Source = `bip`)* | `input` / `output` / `both` | Which BIP artefacts to pull: `input` = source XML only; `output` = generated output files only; `both` = both. |
| **Language filter** *(when Source = `bip`)* | text | Optional BIP language filter (e.g. `FR`). Empty = all languages. |
| **Replace existing** | `Y` / `N` | When `Y`, re-import documents that already exist in NomaUBL (overwrite); when `N`, skip duplicates. |
| **Skip PA send** *(when Process type = `xml`)* | `Y` / `N` | When `Y`, the job never sends to the Plateforme Agréée — it only produces UBL/PDF locally. |
| **Validate only** *(when Process type = `ubl`)* | `Y` / `N` | When `Y`, validate the UBL without sending it to the PA. |
| **Send to PA** *(when Process type = `ubl`)* | *(use settings)* / `Y` / `N` | Override the per-document-type "send to PA" decision: empty = use default; `Y` = force send; `N` = force skip. |

### Digests, auto-retries, lifecycle checks

The editor shows the full form of each kind, unchanged: see [Daily digest](./daily-digest.md), [Auto-retry](./auto-retry.md) and [Lifecycle checks](./lifecycle-checks.md).

### Retention purge \{#retention\}

The daily retention purge bounds the stores that nothing else bounds. It runs every 24 hours, the first time five minutes after the server starts.

| Field | Default | Store |
|---|---|---|
| **Processing log (days)** | `0` | Per-file START / END / error rows of the runtime log (`F564237`). Suggested `180`. |
| **Step timings (days)** | `0` | Per-step timing rows written by `debugProfile` (`F564237`). Suggested `30`. |
| **Job runs (days)** | `0` | Run rows of the scheduled jobs (`F564237`). Suggested `90`. |
| **Validation errors of finished invoices (days)** | `0` | Errors (`F564236`) of invoices in a terminal status. Suggested `365`. |
| **Notifications (days)** | `90` | Inbox notifications (`F564253`). Empty = 90 days; `0` = keep forever. |

Empty or `0` keeps a store forever. The purge is therefore **off by default except for the notifications**, which keep their 90 days: an upgrade deletes nothing by itself. **Count only** reports what each store would lose with the days **saved on the server** — save first, then count. The same values are in [Job defaults → Retention](../../configuration/system/global.md#retention); the command line offers `java -jar nomaubl.jar -purge <configFile> [--dry-run]`.

---

## New job

**New job** opens a window to pick the **kind** and a **name**:

| Kind | Creates |
|---|---|
| **Batch** | Document processing from BIP, a directory or the watched folders. The job starts disabled until its trigger is set. |
| **Digest** | Daily e-mail of errors or archived invoices. |
| **Auto-retry** | Daily resend of invoices in an error status. |
| **Lifecycle check** | Daily integrity and ordering check of the statuses. |

A digest, auto-retry or check name uses letters, digits, dash and underscore: it becomes the name of its configuration file. **Create** opens the new job in its editor.

---

## Access

Grant **Scheduled jobs** in the Synchronization group on the [Roles](../../configuration/security/roles.md) page. *Run now*, *Pause* and *Save & apply* require the **integration-run** action. The former Daily digest, Auto-retry and Lifecycle checks page grants are ignored.

---

## Tips & best practices

- **Read the State column before a campaign.** Pause the status retrieval or set a quiet window, send, then resume.
- **Use Run now to test a new batch job** before giving it a trigger.
- **Open the run history of a failing job** before its editor: the result of each run often names the cause.
- **Turn the retention on progressively** — start with the suggested days, *Count only*, then save.
