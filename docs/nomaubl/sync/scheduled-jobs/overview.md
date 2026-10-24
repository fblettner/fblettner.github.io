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

<svg viewBox="0 0 1200 444" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sj-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sj-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="384" rx="14" fill="url(#sj-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Scheduled jobs</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Every job the server runs on a schedule — trigger, state, last and next run.</text>
  <rect x="240" y="82" width="83" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="96.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">All kinds ▾</text>
  <rect x="335" y="88" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M337.5,93.5 L339.8,95.8 L343.8,91" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="352" y="97" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Auto-refresh</text>
  <rect x="431.2" y="82" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="467.2" y="96.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Refresh</text>
  <rect x="511.2" y="82" width="72" height="22" rx="5" fill="url(#sj-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="547.2" y="96.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New job</text>
  <text x="960" y="48" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 active of 12 job(s) · quiet window 06:00–07:00</text>
  <rect x="240" y="118" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND</text>
  <text x="324" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOB</text>
  <text x="460" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRIGGER</text>
  <text x="560" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATE</text>
  <text x="624" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST RUN</text>
  <text x="690" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURATION</text>
  <text x="740" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RESULT</text>
  <text x="860" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NEXT</text>
  <text x="920" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="150" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Poll</text>
  <text x="324" y="166.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">PA import poll</text>
  <text x="460" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">every 5 min</text>
  <rect x="560" y="155.0" width="27" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="573.5" y="166.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">On</text>
  <text x="624" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 min ago</text>
  <text x="690" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3 s</text>
  <text x="740" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">total=12 success=12</text>
  <text x="860" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">in 3 min</text>
  <text x="920" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ⏸ ⟲</text>
  <rect x="240" y="180" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Poll</text>
  <text x="324" y="196.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">PA status retrieval</text>
  <text x="460" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">every 15 min</text>
  <rect x="560" y="185.0" width="46" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="583.0" y="196.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Paused</text>
  <text x="624" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 h ago</text>
  <text x="690" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12 s</text>
  <text x="740" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">OK</text>
  <text x="860" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="920" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ▷ ⟲</text>
  <rect x="240" y="210" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Batch</text>
  <text x="324" y="226.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">Nightly BIP</text>
  <text x="460" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">daily 04:00</text>
  <rect x="560" y="215.0" width="27" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="573.5" y="226.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">On</text>
  <text x="624" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4 h ago</text>
  <text x="690" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">6 min</text>
  <text x="740" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">420/420, 0 failed</text>
  <text x="860" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">in 20 h</text>
  <text x="920" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ⏸ ⟲</text>
  <rect x="240" y="240" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Digest</text>
  <text x="324" y="256.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">ops-digest</text>
  <text x="460" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">daily 06:00</text>
  <rect x="560" y="245.0" width="27" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="573.5" y="256.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">On</text>
  <text x="624" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 h ago</text>
  <text x="690" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 s</text>
  <text x="740" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">sent to 2</text>
  <text x="860" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">in 22 h</text>
  <text x="920" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ⏸ ⟲</text>
  <rect x="240" y="270" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Auto-retry</text>
  <text x="324" y="286.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">retry-send-failed</text>
  <text x="460" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">daily 03:00</text>
  <rect x="560" y="275.0" width="51" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="585.5" y="286.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Running</text>
  <text x="624" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">now</text>
  <text x="690" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="740" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="860" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">in 24 h</text>
  <text x="920" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ⏸ ⟲</text>
  <rect x="240" y="300" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">System</text>
  <text x="324" y="316.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">Retention purge</text>
  <text x="460" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">daily · 90 days</text>
  <rect x="560" y="305.0" width="27" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="573.5" y="316.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">On</text>
  <text x="624" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5 h ago</text>
  <text x="690" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">450 ms</text>
  <text x="740" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">purged 0 row(s)</text>
  <text x="860" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">in 19 h</text>
  <text x="920" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ⏸ ⟲</text>
  <rect x="240" y="330" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">Poll</text>
  <text x="324" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">Received invoices</text>
  <text x="460" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="560" y="335.0" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="576.0" y="346.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Off</text>
  <text x="624" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="690" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="740" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="860" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="920" y="346.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <line x1="240" y1="366" x2="960" y2="366" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="384" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▶ Run now · ⏸ Pause · ▷ Resume · ⟲ Run history — the job name opens its editor</text>
  <rect x="20" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kind filter + refresh</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">auto-refresh every few seconds</text>
  <line x1="200" y1="99.0" x2="240" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Job name → editor</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">polls, batch, digest, retry…</text>
  <line x1="200" y1="167.0" x2="328" y2="166" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">State pill</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">On · Paused · Running · Off</text>
  <line x1="200" y1="317.0" x2="582" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
  <rect x="1000" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New job</text>
  <text x="1010" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">batch, digest, retry, check</text>
  <line x1="1000" y1="99.0" x2="583.2" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row actions</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">run now · pause · history</text>
  <line x1="1000" y1="177.0" x2="940" y2="166" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Last result</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as written by the server</text>
  <line x1="1000" y1="317.0" x2="810" y2="318" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
</svg>

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
