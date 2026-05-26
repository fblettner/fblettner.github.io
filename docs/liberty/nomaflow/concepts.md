---
title: Concepts
description: "The Nomaflow mental model — jobs, runs, steps, schedules, triggers, retry, parameters. Read this once and the rest of the documentation maps cleanly."
keywords: [Nomaflow, concepts, job, run, step, schedule, trigger, retry, parameters, log level, Liberty Framework]
---

# Concepts

Nomaflow has a small vocabulary — six concepts that the rest of the documentation builds on. Read this once and every other page (the Job editor, the Run detail, the recipes) will read in one pass.

---

## The six pieces

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="cn-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="320" rx="14" fill="url(#cn-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow vocabulary — one diagram</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="86" width="260" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="170" y="108" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOB</text>
  <text x="170" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">id · description · schedule</text>
  <text x="170" y="140" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">a workflow you define once</text>

  <rect x="370" y="86" width="260" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="500" y="108" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STEP</text>
  <text x="500" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">type · name · config</text>
  <text x="500" y="140" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">one unit of work inside a job</text>

  <rect x="700" y="86" width="260" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="108" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHEDULE</text>
  <text x="830" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cron + timezone</text>
  <text x="830" y="140" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">when the job auto-fires</text>

  <rect x="40" y="174" width="260" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="170" y="196" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRIGGER</text>
  <text x="170" y="214" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · manual · API</text>
  <text x="170" y="228" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">what fired this run</text>

  <rect x="370" y="174" width="260" height="60" rx="10" fill="rgba(244,114,182,0.08)" stroke="rgba(244,114,182,0.40)" strokeWidth="1"/>
  <text x="500" y="196" fill="#f472b6" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="500" y="214" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">one execution of a job</text>
  <text x="500" y="228" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">QUEUED → RUNNING → terminal state</text>

  <rect x="700" y="174" width="260" height="60" rx="10" fill="rgba(245,158,11,0.10)" stroke="rgba(245,158,11,0.40)" strokeWidth="1"/>
  <text x="830" y="196" fill="#f59e0b" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <text x="830" y="214" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">shared params + step kwargs</text>
  <text x="830" y="228" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">data the steps receive</text>

  <rect x="40" y="262" width="920" height="60" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="58" y="282" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HOW THEY RELATE</text>
  <text x="58" y="302" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">A <tspan fontWeight="600" fill="#cbd5e1">JOB</tspan> has many <tspan fontWeight="600" fill="#cbd5e1">STEPS</tspan> and an optional <tspan fontWeight="600" fill="#cbd5e1">SCHEDULE</tspan>. Each <tspan fontWeight="600" fill="#cbd5e1">TRIGGER</tspan> creates a <tspan fontWeight="600" fill="#cbd5e1">RUN</tspan>; the run executes the steps in order, merging the job's <tspan fontWeight="600" fill="#cbd5e1">PARAMETERS</tspan> with any per-fire overrides.</text>
</svg>

---

## Job

A **job** is the unit you define and operate. One job has:

| Property | What it means |
|---|---|
| **Id** | URL-safe identifier (`my-job`, `nomajde-daily-sync`). Used in run URLs and in the database as the foreign key for every run. Immutable once created — rename it via an export-then-recreate. |
| **Description** | Free text shown on the catalogue card. Use it to explain *why* the job exists — your future self at 3 AM will thank you. |
| **Schedule** | Optional cron expression. Empty = the job is **manual-only**. |
| **Timezone** | IANA name (`Europe/Paris`, `UTC`, `America/New_York`). The cron is evaluated in this zone — important if the framework runs on UTC but your business hours don't. |
| **Tags** | Free labels — `etl`, `nightly`, `legal`. Shown as chips on the catalogue card; useful for grouping in the search bar. |
| **Enabled** | When `false`, the schedule is ignored. Manual ▶ Run now still works. |
| **Steps** | Ordered list of work units (described below). At least one step is required. |
| **Retry policy** | Optional. Applies on **step** failure, not on whole-job failure. |
| **Alerts** | Optional. Notifications on failure or on long-running detection. |
| **Parameters** | Optional shared kwargs (described below). |
| **Log level** | `INFO` (default) or `DEBUG`. Per-fire overridable in the Run-with-parameters modal. |

A job is **defined once** and runs many times. Each fire is a new **run**.

---

## Step

A **step** is one unit of work inside a job. Steps run **in order** — step 2 starts only after step 1 succeeds. There's no parallel branching inside a single job (use chained jobs for that, or a Python step that fans out internally).

The five step types:

| Type | What it does |
|---|---|
| **`sql_query`** | Runs one SQL statement on a connector. Captures the row count. |
| **`sql_copy`** | Streams rows from one connector + schema + table to another. Handles type coercion, batched inserts, atomic swap. |
| **`python`** | Calls a Python function in your plugins (`module.path:function`). The escape hatch — anything declarative steps can't express. |
| **`http`** | Calls an HTTP endpoint with optional headers / body. |
| **`ldap_sync`** | Pulls a directory subtree, maps attributes through a config block, upserts into a connector. |

Each step has a **name** (label in the run history), a **type** and the type-specific configuration. Steps can be individually **disabled** — useful for chained jobs where only some phases need re-running after an upstream failure.

The full reference is on the [Steps](./steps.md) page.

---

## Schedule

A **schedule** is a 5- or 6-field cron expression that tells Nomaflow when to auto-fire the job.

| Field | Range | Example |
|---|---|---|
| Minute | `0-59` | `0` = on the hour. |
| Hour | `0-23` | `2` = 02:00. |
| Day of month | `1-31` | `1` = the 1st. |
| Month | `1-12` | `*` = every month. |
| Day of week | `0-6` (Sunday=0) | `1` = Monday. |
| (optional) Second | `0-59` | rarely used; only set if the schedule must trigger more than once per minute. |

A few common patterns:

| Goal | Cron |
|---|---|
| Every day at 02:00. | `0 2 * * *` |
| Every Monday at 09:30. | `30 9 * * 1` |
| Every hour, on minute 15. | `15 * * * *` |
| Every 5 minutes. | `*/5 * * * *` |
| First day of each month at midnight. | `0 0 1 * *` |

**Empty schedule = manual-only.** The job is in the catalogue, ▶-runnable, but never auto-fires. This is the right shape for one-off rebuilds, operator-driven sends and any workflow where "the human decides when".

The Schedule view (a calendar of upcoming fires across every job) and the full cron syntax reference live on [Jobs → Schedules](./jobs/schedules.md).

---

## Trigger

Every run records **what fired it** — the `triggered_by` field on the run row.

| Trigger | Source field | When |
|---|---|---|
| **`cron`** | Auto-fire on schedule. | Happens silently inside the framework. |
| **`user:<name>`** | An operator clicked ▶ Run now or ran with parameters. | Their account name lands in the field for the audit trail. |
| **`api`** | An external caller hit `POST /admin/jobs/<id>/run`. | Useful when an external scheduler (Airflow, Dagster, a CI pipeline) drives Nomaflow as a step runner. |
| **`cli`** | A shell call. | Power-user / scripting path. |

All four go through the **same dispatch** — same step engine, same retry policy, same persistence. The trigger source is the only thing that varies.

---

## Run

A **run** is one execution of a job. Each run has:

| Field | What it carries |
|---|---|
| **Run id** | A short identifier (`run_a8c4d`) used in URLs and logs. |
| **Job id** | The job this run belongs to. |
| **State** | `QUEUED` → `RUNNING` → `SUCCEEDED` / `FAILED` / `CANCELED`. |
| **Started at / Finished at** | Timestamps in the application's timezone. |
| **Triggered by** | One of `cron`, `user:<name>`, `api`, `cli`. |
| **Parameters snapshot** | The merged params + op_kwargs the run actually used — the audit answer to "what kwargs did this run see?" three weeks later. |
| **Per-step rows** | For each step: name, type, started_at, finished_at, state, rows_affected, error (if any). |
| **Log stream** | Every `log.info()` / `log.warning()` / `log.error()` the step emitted, plus the framework's own progress markers. |

The run terminates in one of four states:

| State | Meaning |
|---|---|
| **`SUCCEEDED`** | Every step ran and returned without raising. |
| **`FAILED`** | A step raised after all retries were exhausted. The remaining steps did not run. |
| **`CANCELED`** | An operator clicked **✕ Cancel** while the run was in flight. In-flight steps roll back where they can. |
| **`QUEUED`** | The dispatcher accepted the run but execution hasn't started yet — visible for at most a few milliseconds in practice. |

The **Run detail** page shows the per-step timeline, the inputs and outputs, and the live log tail. See [Runs → History](./runs/history.md).

---

## Parameters

Parameters are the data steps receive at run time. There are two layers:

| Layer | Where it lives | What it's for |
|---|---|---|
| **Job-level `params`** | Section on the job editor. | Values **shared across every step** — typical: `apps_id`, `source_connector`, `target_connector`. |
| **Step-level `op_kwargs`** | Inside each Python step. | Values **scoped to one step** — typical: a per-step flag, a query parameter. |

At runtime the runner **merges** the two: job-level params are passed first, step-level op_kwargs override them on key conflict. So a job-wide `target_connector = "nomasx1"` can be overridden in one step with `target_connector = "nomasx1-backup"`.

### Per-fire overrides

The **Run-with-parameters modal** (opened by ▶ Run now when a job has params, op_kwargs or multiple steps) lets the operator change any of these for **one fire only**, without editing the job definition. The form is type-aware — booleans render as checkboxes, numbers as number inputs, and keys ending in `_connector` show a connector picker (saves typos vs. free text).

```
Layer order at runtime (later wins on conflict):
  1. job.params              ← saved in the job editor
  2. step.op_kwargs          ← saved per step
  3. modal params override   ← one fire only
  4. modal op_kwargs override ← one fire only
```

A typical use: a `nomasx1-security` job with `[params] apps_id = 10` runs nightly against production; the operator opens the modal and overrides `apps_id = 99` to run the same job against a sandbox tenant without editing TOML.

---

## Retry policy

A retry policy applies to **steps**, not to the whole job.

| Field | What it means |
|---|---|
| **`attempts`** | Total tries (1 = no retry). 2 = initial try + one retry. |
| **`backoff`** | `fixed` (constant wait) or `exponential` (doubling wait). |
| **`base_seconds`** | Wait before the first retry. With `exponential`, the second wait is doubled, the third quadrupled. |

If step 1 has attempts = 3 and fails three times, the **run** moves to `FAILED` — the remaining steps don't execute. If step 1 succeeds and step 2 fails three times, step 1's effect stays committed (Nomaflow has no run-wide rollback — design idempotent steps).

The default is **no retry** (`attempts = 1`). For network-touching steps (HTTP, LDAP) a `attempts = 3` with `exponential` backoff is the most common setting.

---

## Log level

Per-run logging verbosity. `INFO` (default) gives operator-level signal — row counts, business progress markers. `DEBUG` also emits the full SQL of every query — useful when troubleshooting a specific run.

Two ways to set it:

- **Per job** in the editor → applies to every fire.
- **Per fire** in the Run-with-parameters modal → only this one run.

The `DEBUG` setting is for **investigation**, not for steady state — debug logs are verbose and the framework retains them for the same 90 days as INFO, so a runaway DEBUG job can swell the log table noticeably.

---

## Alerts

A job's **alerts** block routes failure (and long-running) events to the framework's notification channels.

| Field | What it means |
|---|---|
| **`on_failure`** | When `true`, a FAILED run emits an alert. Default `true` once an alerts block is declared. |
| **`on_long_run_minutes`** | If the run is still in flight after N minutes, emit an alert. The run keeps going — this is a heads-up, not an abort. |
| **`recipients`** | Channel-specific identifiers (Slack handles, email addresses, webhook IDs) — overrides the framework defaults. |

The transports themselves (Slack workspace, SMTP server, webhook URLs) are configured **once at framework level**; the job just picks recipients. See [Notifications](./notifications.md) for the wiring.

---

## How they relate — a concrete example

You define a job `nightly-reporting-refresh`:

```
JOB nightly-reporting-refresh
├── description: "refresh the reporting materialised views from the OLTP DB"
├── schedule: "0 2 * * *"  (timezone Europe/Paris)
├── tags: [etl, nightly]
├── params: { target_connector: "reporting" }
├── retry: { attempts: 2, backoff: fixed, base_seconds: 60 }
└── steps:
    1. refresh-orders     (sql_query, connector "reporting")
    2. refresh-customers  (sql_query, connector "reporting")
    3. send-summary       (python,    callable "reports:summary")
```

Every night at 02:00 Paris time, the scheduler creates a new **run** of `nightly-reporting-refresh`. The run executes step 1 — if the SQL query fails, the runner waits 60 seconds and retries once before declaring the step FAILED. If it succeeds, step 2 runs. Then step 3.

When step 3 runs, the Python function receives `target_connector="reporting"` from the job's `params`, plus anything in its own `op_kwargs`. The function emits `log.info("summary email sent")` — that line lands in the run's log stream.

The operator opens the **Runs** page the next morning, sees the run with a green SUCCEEDED badge, clicks it, sees three green checkmarks and the log. Everything you'd want to know about last night's refresh is on one screen.

---

## What's next

- [Jobs → Catalogue](./jobs/catalog.md) — the Jobs page, every action.
- [Jobs → Create a job](./jobs/create.md) — the editor walkthrough.
- [Steps](./steps.md) — what each step type does, the fields it accepts.
- [Runs → History](./runs/history.md) — the Run detail page.
