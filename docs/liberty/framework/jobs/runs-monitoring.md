---
title: Runs & monitoring
description: "Where to watch a Nomaflow job run: the Settings → Jobs page, the run history table, the run detail drawer with the per-step timeline, the live log tail streamed over Socket.IO, the abort flow and the retention policy."
keywords: [Liberty Framework, Nomaflow, run history, monitoring, log tail, Socket.IO, abort, ly2_job_runs, ly2_step_runs, retention]
---

# Runs & monitoring

Every Nomaflow run leaves a trail: one row in `ly2_job_runs`, one row per step in `ly2_step_runs`, every log line in `ly2_job_logs`. The *Settings → Jobs* page is where this trail is browsed, filtered and streamed live.

This page covers the run history table, the per-run detail drawer, the live log tail, the abort flow and the retention policy.

---

## At a glance

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Job runs · last 7 days</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Job ▾</span>
      <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Status ▾</span>
      <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>↻ Refresh</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 1fr 100px 110px 100px 80px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Run id</div><div>Job</div><div>Status</div><div>Started</div><div>Duration</div><div>Trigger</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 1fr 100px 110px 100px 80px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>r-1842</div>
    <div>billing-nightly-rebuild</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(74,158,255,0.55)', background: 'rgba(74,158,255,0.10)', color: '#60a5fa'}}>running</span></div>
    <div>02:00:03</div>
    <div>2m 14s ⏱</div>
    <div>cron</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 1fr 100px 110px 100px 80px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>r-1841</div>
    <div>crm-hourly-sync</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.10)', color: '#4ade80'}}>succeeded</span></div>
    <div>02:00:00</div>
    <div>0m 38s</div>
    <div>cron</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 1fr 100px 110px 100px 80px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>r-1840</div>
    <div>ad-sync</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.10)', color: '#f87171'}}>failed</span></div>
    <div>01:30:00</div>
    <div>1m 02s</div>
    <div>cron</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 1fr 100px 110px 100px 80px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>r-1839</div>
    <div>billing-monthly-close</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(94,94,94,0.55)', background: 'rgba(94,94,94,0.10)', color: '#94a3b8'}}>skipped</span></div>
    <div>00:00:00</div>
    <div>—</div>
    <div>cron</div>
  </div>
</div>

---

## The runs table

| Column | Source |
|---|---|
| **Run id** | The unique `run_id` (e.g. `r-1842`). Clickable — opens the detail drawer. |
| **Job** | Job name. The chip filter at the top narrows to one job. |
| **Status** | Coloured pill — see [statuses](#statuses) below. |
| **Started** | When the run began (local time of the operator). Sortable. |
| **Duration** | Started → ended (or "running" with a live counter for in-flight runs). |
| **Trigger** | `cron`, `manual`, `api`, `cli` — and on hover the user identifier when manual. |

The table defaults to the **last 7 days**, sorted by *Started* descending. The toolbar exposes:

- A **Job** dropdown — narrow to one job.
- A **Status** dropdown — multi-select (`running`, `succeeded`, `failed`, `aborted`, `skipped`, `partial-success`).
- A **Date range** picker — week / month / custom.
- A **↻ Refresh** button — also auto-refreshes every 5 s while at least one run is `running`.

---

## Statuses

| Status | Meaning | Final? |
|---|---|---|
| `running` | The run is in flight. | No |
| `succeeded` | Every step completed without error. | Yes |
| `failed` | A step exhausted its retries and stopped the job. | Yes |
| `partial-success` | Some steps failed with `continue_on_error = true`; the job kept going. | Yes |
| `aborted` | An operator clicked *Abort* or the job-level `timeout_seconds` fired. | Yes |
| `skipped` | The job was due to fire but a dependency / single-instance lock prevented it. | Yes |

A row's `reason` column (visible in the detail drawer) carries the qualifier — `dependency-failed: <name>`, `single-instance, previous still running`, `timeout after 1800s`, etc.

---

## The run detail drawer

Clicking a row opens a drawer on the right with three sections.

### Header

- Run id, job name, status pill, started / finished timestamps, duration, trigger.
- An **Abort** button (visible only while `status = running`, only to users with `job:<name>:abort` or the global `job:*`).
- A **Re-run** button (visible when `status` is final) that triggers a new run with the same `params` snapshot.

### Per-step timeline

A vertical list, one entry per step in declared order:

| Field | Source |
|---|---|
| **Step name** + **type pill** | From `jobs.toml`. |
| **Status pill** | `succeeded` / `failed` / `running` / `skipped`. |
| **Duration** | Started → ended (live counter while running). |
| **Input** snapshot | The `params` / `kwargs` map after all `${...}` substitution. Useful when the same step ran differently across retries. |
| **Output** snapshot | The step result — `rows_affected`, `row_count`, the first 100 rows for SQL, the full response body for HTTP (truncated to 100 KiB). |
| **Error** | When `status = failed`, the exception class, message and the relevant traceback. |

Each step entry expands inline to show the input / output / error.

### Live log tail

A scrolling pane below the timeline streams every log line from the run — both the framework's structured events (`step started`, `step finished`, `retry triggered`) and the messages emitted by `python` step callables via `logging.getLogger(__name__)`.

The pane is **streamed over Socket.IO** while the run is in flight; once the run finishes, it shows the persisted log lines from `ly2_job_logs`. Each line carries:

- A timestamp (ms precision in the server timezone, rendered in the operator's timezone).
- A level (DEBUG / INFO / WARNING / ERROR), colour-coded.
- The logger name (e.g. `billing.invoicing`).
- The message.

The toolbar at the top of the pane exposes:

- A **level filter** — show only `WARNING` and `ERROR`, for example.
- A **search** box — substring filter on the message.
- A **↻ Follow** toggle — auto-scroll to the bottom as new lines arrive.
- A **Download** button — exports the full log as a `.log` file.

---

## Aborting a run

Clicking **Abort** in the detail drawer:

1. Marks the run with `status = aborting` in the database.
2. Sends an `asyncio.CancelledError` into the in-flight step task.
3. The step's callable (or the framework's step executor) reacts:
   - SQL queries are cancelled at the driver level (`asyncpg` / `oracledb` both support cancel).
   - HTTP calls are aborted (the underlying connection is closed).
   - `python` step callables that use `await` checkpoints see the `CancelledError`; synchronous callables run to completion of the current iteration.
4. The step is recorded with `status = aborted`.
5. The job is recorded with `status = aborted` and no further steps run.

A callable that catches `CancelledError` silently can prevent the abort from taking effect — don't do this in plugin code. The default behaviour (let the exception propagate) is the right one.

---

## Replaying / re-running

The **Re-run** button on a finished run creates a new run with:

- The same `params` snapshot.
- A new `run_id`.
- `triggered_by = "user:<operator>"` and `replay_of = <original run_id>`.

The `replay_of` link is visible in the detail drawer as "↻ Replay of r-1840". This is useful for nightly jobs that failed because of a transient issue and need a fresh attempt without waiting for the next cron fire.

---

## REST API

| Endpoint | Purpose |
|---|---|
| `GET  /admin/jobs/runs?job=<name>&status=<list>&from=&to=&limit=` | Runs table — paginated, filtered. |
| `GET  /admin/jobs/runs/<run_id>` | Single run with the full step list and the latest 1000 log lines. |
| `POST /admin/jobs/<name>/run` | Trigger a manual run. Body accepts `params` overrides. |
| `POST /admin/jobs/runs/<run_id>/abort` | Abort an in-flight run. |
| `POST /admin/jobs/runs/<run_id>/replay` | Re-run with the same params. |
| `GET  /admin/jobs/runs/<run_id>/logs?level=&follow=` | Stream the log tail. `follow=true` upgrades to Socket.IO. |

Every endpoint requires the `job:<name>` permission for the targeted job (or `job:*`). The list endpoint returns only runs of jobs the caller can see — pruned automatically.

---

## Retention

Run rows and log lines are pruned by an internal job (`_default/cleanup-job-history`) that fires once a day at 03:00. The retention policy:

| Setting | Default | Meaning |
|---|---|---|
| `[jobs] history_days` | `90` | Run rows older than N days are deleted. Step rows and log lines follow. |
| `[jobs] history_keep_failed` | `true` | Failed / aborted runs are kept past the retention window — they often inform an incident review. |
| `[jobs] log_truncate_kb` | `100` | Log lines past N KiB total per run are truncated (the truncated message says so explicitly). |

For a long-term audit trail, route the log stream to your central log aggregator (Loki, Splunk, Datadog) via `LIBERTY_LOG_JSON=1` and treat the framework's internal history as an operational cache.

---

## The Technical dashboard

The *Settings → Technical* tab (gated by `settings:technical`) shows a live overview:

| Panel | Content |
|---|---|
| **In-flight runs** | Every `status = running` job, with elapsed time and current step. Click a row to open the detail drawer. |
| **Recent failures** | Last 20 `failed` / `aborted` runs. |
| **Scheduler heartbeat** | Last fire-time, next fire-time, queue depth. Useful to confirm the scheduler is alive on a quiet day. |
| **Pool stats** | Per-pool open / idle / in-use connections — surfaces pool exhaustion that would otherwise stall jobs. |

This dashboard is the first place to look when "a job didn't run" — the scheduler heartbeat tells you whether the framework even tried.

---

## Tips & best practices

- **Watch the *Recent failures* panel.** A single failed run a week is normal; a flap (one failure per night) is worth chasing.
- **Use `log.warning()` for "ok but unusual"**. A row that takes 10× longer than usual deserves a WARNING in the log, not silence. The level filter in the log tail makes them easy to find.
- **Tag the run with a meaningful identifier.** A `python` step that logs `log.info("billing.invoicing.run period=2026-05 drafts=42 dry_run=False")` makes the run history greppable.
- **Don't keep your only history in the framework.** Forward the JSON log to your aggregator — outages on the install side shouldn't take the audit trail with them.
- **Abort, don't kill.** Use the *Abort* button rather than `kill -9` on the framework process — the abort flow records the reason and preserves the partial state for the postmortem.

---

## What's next

- [`jobs.toml`](./jobs-toml.md) — the job declaration that drives every run.
- [Step types](./step-types.md) — what each step records in its result.
- [REST API reference → Jobs](../rest-api.md#jobs) — the full endpoint contract.
