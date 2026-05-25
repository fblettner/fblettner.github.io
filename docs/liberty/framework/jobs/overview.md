---
title: Jobs — Nomaflow overview
description: "Nomaflow is the in-process job scheduler that ships inside the Liberty Framework: declarative jobs in TOML, cron + manual triggers, a small set of step types (sql_query, sql_copy, python, http, ldap_sync), retry / backoff, run history and a Socket.IO live log."
keywords: [Liberty Framework, Nomaflow, jobs, ETL, scheduler, cron, in-process, sql_query, sql_copy, python, http, ldap_sync, retry, run history]
---

# Jobs — Nomaflow

**Nomaflow** is the framework's **in-process job scheduler**. Jobs are declared in TOML, fire on a cron schedule or on demand, run as a linear sequence of typed steps, and persist their run history in the `default` pool. The whole engine sits inside the FastAPI process — no separate worker, no broker, no companion daemon — so the same `./start.sh` that serves the SPA also schedules and runs every job.

Nomaflow is meant for the operational glue most installs need: nightly ETLs, per-hour synchronisations, LDAP imports, scheduled report sends, manual one-off rebuilds. For workloads that need distributed execution, hour-scale parallelism or DAG semantics, an external orchestrator remains the right tool.

---

## At a glance

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nf-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="nf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="300" rx="14" fill="url(#nf-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow — how a job runs</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="180" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="150" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRIGGER</text>
  <text x="150" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · manual · API</text>

  <rect x="280" y="100" width="180" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="370" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUN ENGINE</text>
  <text x="370" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">linear step sequence</text>

  <rect x="500" y="100" width="180" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="590" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STEP TYPES</text>
  <text x="590" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">sql_query · sql_copy · python · http · ldap_sync</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERSIST + STREAM</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">run history · log tail · Socket.IO</text>

  <line x1="240" y1="130" x2="280" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>
  <line x1="460" y1="130" x2="500" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>
  <line x1="680" y1="130" x2="720" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>

  <rect x="60" y="200" width="880" height="120" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="222" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHEDULER — APScheduler in the FastAPI process</text>
  <text x="76" y="246" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">cron triggers fire at the configured time</text>
  <text x="76" y="266" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">manual / API triggers go through the same dispatch</text>
  <text x="76" y="286" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">retry / backoff policy applies on step failure (per job config)</text>
  <text x="76" y="306" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">run rows persisted in ly2_job_runs + ly2_step_runs</text>
</svg>

---

## Where it sits

Nomaflow is **part of the framework binary** — no separate process to install, configure or monitor. The same FastAPI worker that serves the REST API runs the scheduler and the step executor. The implications:

- **Concurrency** is bounded by the worker's thread pool + the asyncio event loop. A SQL step waits on the database, an HTTP step waits on the network; both are async and don't block other work.
- **Restart kills running jobs.** A scheduled cron fire mid-step is rolled back through the retry policy. Long-running jobs (hour-scale) should be designed to checkpoint or be safely re-runnable.
- **One scheduler per process.** Running two replicas of the framework against the same database would double-fire every cron; the bundled scheduler uses an advisory lock on the `ly2_jobs_lock` row to prevent it, but ops should still pin scheduler duties to one replica via `[jobs] scheduler_enabled = true/false`.

For workloads that don't fit those constraints, the framework's REST API allows triggering Nomaflow jobs from an external orchestrator — Airflow, Dagster, or even a plain cron + `curl`. The Liberty side then becomes a structured "step runner with a UI" instead of a scheduler.

---

## A minimal job

`plugins/billing/jobs.toml`:

```toml
[[jobs]]
name     = "billing-nightly-rebuild"
app      = "billing"
schedule = "0 2 * * *"          # cron: every day at 02:00
timezone = "Europe/Paris"
enabled  = true

[jobs.retry]
max_attempts = 3
backoff      = "exponential"
initial_delay_seconds = 60

  [[jobs.steps]]
  name      = "refresh-totals"
  type      = "sql_query"
  connector = "billing"
  query     = "refresh-totals:write"

  [[jobs.steps]]
  name      = "rebuild-vat"
  type      = "python"
  callable  = "billing.invoicing:rebuild_vat"
  kwargs    = { period = "${month.previous}" }
```

The job fires at 02:00 every day. The two steps run in order; a failure on `refresh-totals` triggers the retry policy on that step, not the whole job. The run history records each step's input, output and timing.

[`jobs.toml`](./jobs-toml.md) covers every field. [Step types](./step-types.md) covers what each `type` does and the kwargs it accepts.

---

## Triggering a job

| Trigger | Surface | Use case |
|---|---|---|
| **Cron schedule** | `schedule = "0 2 * * *"` in `jobs.toml`. Standard 5-field cron with optional 6th for seconds. | Recurring background work. |
| **Manual from UI** | *Settings → Jobs → ▶ Run* on any job. The operator can override `params` for that one run. | One-off rebuilds, on-demand sends. |
| **REST API** | `POST /admin/jobs/<name>/run` with the operator's JWT. The body accepts `params` overrides. | External schedulers, CI / CD pipelines. |
| **CLI** | `liberty-admin job run <name>`. | Shell scripts, ad-hoc operator work. |

Every trigger goes through the same dispatch — same step engine, same retry policy, same persistence. The trigger source is recorded on the run row (`triggered_by = "cron" | "user:alice" | "api" | "cli:bob"`).

---

## Step types in one paragraph

- **`sql_query`** — execute a named SQL query (read or write) on a connector. Result row count is recorded.
- **`sql_copy`** — stream rows from one pool to another, with type coercion and atomic table swap. Useful for ETL from operational DBs into reporting stores.
- **`python`** — call a Python function in `liberty-apps/plugins/`. The escape hatch for anything that doesn't fit the declarative steps.
- **`http`** — call an HTTP / API endpoint, pass the response to the next step.
- **`ldap_sync`** — pull a directory subtree, map attributes through a config block, upsert into a connector. Replaces the bespoke LDAP scripts most installs end up writing.

Each is documented under [Step types](./step-types.md) with the full kwargs reference.

---

## Run history

Every job run produces:

- One **run row** in `ly2_job_runs` — id, job name, started_at, finished_at, status, triggered_by, params snapshot.
- One **step run row per step** in `ly2_step_runs` — run id, step name, type, started_at, finished_at, status, input snapshot, output snapshot, error message.
- One **log stream** in `ly2_job_logs` — every `log.info()` / `log.warning()` / `log.error()` call from a step callable, plus the framework's own structured events.

The *Settings → Jobs → Runs* page browses the history; the *Run detail* drawer shows the per-step timeline, the inputs and outputs, the log tail (streamed live over Socket.IO while the run is in flight).

| Status | Meaning |
|---|---|
| `running` | The run is in flight. |
| `succeeded` | Every step returned successfully. |
| `failed` | A step raised after all retries were exhausted. |
| `aborted` | An operator clicked *Abort* — every in-flight step is cancelled. |
| `skipped` | The job was due to fire but its previous run hadn't completed (one-at-a-time per job). |

The retention is configured under `[jobs] history_days` in `app.toml` (default 90 days); older runs are pruned by a built-in cleanup job that fires once a day at 03:00.

---

## Live monitoring

A connected operator on the *Jobs* page receives:

- A row appearing in the *In flight* panel as soon as a run starts.
- The step list filling in real time as each step transitions through `running` → `succeeded` / `failed`.
- The log tail streamed line-by-line — the same content as `tail -f` on the server, just routed over Socket.IO.

The streaming is **passive** — closing the browser doesn't cancel the run. Re-opening the page picks the live state up from the in-memory tracker.

For operators who prefer the shell, `liberty-admin job logs --follow <run-id>` does the same against the server-side event bus.

---

## When to use Nomaflow vs. an external orchestrator

| You should reach for Nomaflow when… | You should reach for an external orchestrator when… |
|---|---|
| Workloads are install-scoped and don't span multiple services. | Workloads cross many services and need a global view. |
| The whole pipeline finishes in minutes. | A single step takes hours. |
| Cron + linear steps + retry is enough. | You need DAG semantics, dynamic task expansion, or distributed compute. |
| You want one tool, one UI, one log stream. | You already run Airflow, Dagster or Prefect for everything else. |
| You'd otherwise hand-write a Python script + a systemd timer. | You'd otherwise hand-write a Kubernetes CronJob with sidecars. |

Most installs land in the left column; the right column starts to matter once a single workload outgrows a single server.

---

## Tips & best practices

- **Pin scheduler duties to one replica.** In a multi-replica install, set `[jobs] scheduler_enabled = false` on every replica except one. The advisory lock prevents double-firing even when this is forgotten, but the explicit setting makes the topology obvious in the logs.
- **Don't put long-running work in a `python` step.** A 90-minute computation in-process blocks the worker; offload to a queue or a separate process and have the step trigger it.
- **Record what was done, not what was supposed to be done.** A step that returns `{"rows_affected": N}` makes the run history meaningful; a step that returns `None` is a black box at 3 AM.
- **Use `dry_run` on every destructive step.** A boolean kwarg that flips the step to a count-only mode lets you debug a job from the UI without mutating data.
- **Don't rely on cron alone for critical work.** If a run failure must page someone, route Nomaflow's failure events to your alerting (Slack, OpsGenie, …) via a `http` step that posts to the webhook.

---

## What's next

- [`jobs.toml`](./jobs-toml.md) — the full TOML reference.
- [Step types](./step-types.md) — what each step does.
- [Runs & monitoring](./runs-monitoring.md) — the run history page, the live log stream, the abort flow.
- [Apps & Plugins → Plugins](../apps/plugins.md) — writing the Python callable behind a `python` step.
