---
title: Administration
description: "Operating Nomaflow at scale — single-replica vs multi-replica, the scheduler lock, restart behaviour, run history retention, permissions, backup."
keywords: [Nomaflow, administration, multi-replica, scheduler lock, retention, restart, permissions, backup, Liberty Framework]
---

# Administration

Nomaflow is meant to be **operationally boring** — install once, schedule, watch. But in production some details matter: which replica gets to fire the cron, what happens to in-flight runs across a restart, how long the run history lives, who can see what.

This page collects the framework-level settings that shape Nomaflow's behaviour.

---

## Single vs multi replica

### Single replica (the default)

One framework process serves the UI **and** runs the scheduler. Every scheduled cron fires from this process; every manual ▶ Run runs here too. No coordination needed.

This is the right shape for **most installs**. A modern host with adequate CPU and memory handles dozens of concurrent jobs (the work is mostly I/O-bound — DB calls, HTTP calls, file ops) and the simplicity of "one place to look" outweighs the redundancy concerns.

### Multi replica

Some installs run the framework behind a load balancer with two or three replicas — for redundancy or to spread UI traffic. With multiple processes, you must pin scheduler duties to **one** replica:

| Replica | `scheduler_enabled` | Behaviour |
|---|---|---|
| Replica A (primary) | `true` | Serves UI · runs scheduled crons · accepts manual triggers. |
| Replica B (secondary) | `false` | Serves UI · accepts manual triggers (which run **locally** on B). · does not fire crons. |
| Replica C (secondary) | `false` | Same as B. |

Set this in *Settings → Job runner* (or in the framework's environment file as `LIBERTY_SCHEDULER_ENABLED=true|false`).

### The scheduler lock

Even with the explicit `scheduler_enabled` setting, Nomaflow takes an **advisory lock** on a dedicated row at startup. Two processes that both try to enable the scheduler against the same database see one of them lose the lock and fall back to scheduler-disabled mode. The log records this clearly:

```
INFO  scheduler: acquired lock · this replica is the scheduler primary
INFO  scheduler: failed to acquire lock · running scheduler-disabled
```

This is a **safety net**, not the primary mechanism. The explicit setting is the source of truth; the lock catches misconfigurations.

### Manual ▶ Run on a secondary

A manual ▶ Run on replica B doesn't bounce to the primary — it runs **locally** on B. The result is the same (the run row, the step rows, the log all land in the shared database) but the work uses B's CPU and B's connections. This means:

- **Heavy operator-driven jobs** that don't fit on the primary can be steered to a secondary via the load balancer (just make sure the operator's UI session is sticky to that replica).
- **Cancellation** of a run only works from the replica it's running on — clicking ✕ on a different replica sends the request to the database, but the actual cancellation signal only reaches the worker that's running the run.

---

## Restart behaviour

What happens to runs when the framework restarts?

### In-flight runs

A scheduled cron that fires mid-restart is **lost** — Nomaflow doesn't queue missed fires for replay. The next scheduled fire is whatever the cron next matches; the missed one never runs.

A run that's **`RUNNING` when the process exits** is left as `RUNNING` in the database. On restart, the **recovery sweeper** runs once: every run in `RUNNING` state with no live owner is marked `FAILED` with the reason `lost in restart`. This happens before the scheduler starts firing crons, so the catalogue shows the correct state by the time operators see it.

### Persistent state

| Survives a restart? | What |
|---|---|
| ✓ | Run history (`ly2_job_runs`, `ly2_step_runs`, log table). |
| ✓ | Job catalogue (saved in the configured catalogue store). |
| ✓ | Saved transport credentials (encrypted at rest). |
| ✗ | In-memory run trackers (the live log subscribers reconnect on page reload). |
| ✗ | The "next fire" cached times (recomputed from cron at startup). |

In practice, restarts are uneventful — operators see a brief gap in the run history (the missed cron fires), the catalogue picks up where it left off, scheduled jobs resume firing.

### Rolling restart on multi-replica

A typical rolling restart against a 2-replica install:

1. Take secondary out of the load balancer; restart it.
2. Once secondary is healthy, take primary out, **demote it** (set `scheduler_enabled = false`), restart.
3. While primary restarts, the secondary's lock attempt succeeds — it becomes the new primary.
4. When the original primary comes back, it sees the lock held by the other replica and runs scheduler-disabled — the old primary is now a secondary.

The scheduler primary effectively moved. Crons fired during the restart window were owned by the new primary; nothing was lost.

---

## Run history retention

By default, **runs older than 90 days are pruned** by a built-in cleanup job that fires once a day at 03:00. The pruning is two-pass:

| Pass | What it removes |
|---|---|
| 1 | Log rows for runs older than the retention window. (The largest table by row count.) |
| 2 | Step rows + run rows for the same. |

The retention is configurable in *Settings → Job runner → Retention days* (or `LIBERTY_RUN_HISTORY_DAYS` in the env). The cleanup job itself is visible in the catalogue as `_internal-prune-runs` — its history rows show how many rows it pruned per pass.

| Pattern | Days |
|---|---|
| Small install, single-user dev. | 30 |
| Standard production. | 90 (default). |
| Compliance-heavy install. | 365 or 730. |

Notice: **longer retention bloats the DB**. The log table is the biggest contributor — DEBUG-level runs especially. Tune retention to what you'll actually need to query, not to "as much as possible".

For permanent records, write to an **application-level audit table** from within the steps themselves (see the [Conditional cleanup recipe](./workflows/conditional-cleanup.md)) — these survive the run-history pruning.

---

## Permissions

Three permission shapes gate Nomaflow:

| Permission | Grants |
|---|---|
| **`superuser`** | Everything. |
| **`job:*`** | Browse the catalogue, see every job, ▶ Run any job, view every run. |
| **`job:<name>`** | Browse the catalogue (filtered to this job), ▶ Run **this** job only, view its runs only. |

A user with no Nomaflow permission **doesn't see the Nomaflow menu entry** at all — the framework hides links the user can't reach.

The granular `job:<name>` form is useful when a business team should own one specific job (e.g. the daily reporting refresh) without seeing the data-platform team's ETL fleet. Most installs settle on `job:*` for the data-platform role and skip granular permissions; the operational simplicity matters more than locking down which jobs are even visible.

Editing or creating jobs is gated by **`settings:jobs`** — a separate, narrower permission. The flow:

| Action | Permission needed |
|---|---|
| See a job in the catalogue | `job:<name>` or `job:*`. |
| ▶ Run a job | Same. |
| ✕ Cancel a run | Same. |
| ✎ Edit / 🗑 Delete a job | `settings:jobs`. |
| Edit transports / routing rules | `settings:notifications`. |

The split lets you give analysts the ability to **trigger** workflows without the ability to **modify** them.

---

## Connection pooling

Nomaflow uses the framework's connectors directly — same pools, same configuration. The implication: **a Python step that opens 20 concurrent connections** to a connector with a pool of 10 will queue.

| Pattern | How |
|---|---|
| Reduce per-step concurrency. | Use a semaphore inside the Python step: `async with sem: ...`. |
| Stagger steps in time. | Schedule heavy jobs at different minutes (the [Schedules](./jobs/schedules.md) page covers this). |
| Increase the pool size. | *Settings → Connectors → \<name>* → bump `pool_size`. Beware of overwhelming the upstream DB. |

For jobs that **don't** touch the framework's main DB, declare a dedicated pool for the job's workload — `default` is for the framework's metadata + run history; ETL workloads should use their own pool to avoid starving the UI.

---

## Backup

Three things are worth backing up explicitly:

| What | Where | How |
|---|---|---|
| **The job catalogue** | The framework's catalogue store. | Export via *Settings → Job runner → Export jobs*. Lands a snapshot in your backup file. |
| **Connector credentials** | Encrypted, stored next to the catalogue. | Backup the catalogue store + the encryption key together — neither is useful without the other. |
| **Run history** | `ly2_job_runs`, `ly2_step_runs`, `ly2_job_logs` in the framework's DB. | The DB's regular backup is enough. The run history is **operational data** — recoverable in the sense of "you'll have a gap, but the jobs themselves still work". |

For **disaster recovery**, the order to restore in:

1. Restore the framework's DB (gives you connectors, users, dictionary).
2. Restore the encryption key file.
3. Restore the catalogue store snapshot.
4. Start the framework. The scheduler reads the catalogue, picks up where it left off.
5. Run history before the snapshot is gone; new runs land normally.

---

## Disk usage

Three things consume disk space inside the framework's DB:

| Table | Typical growth |
|---|---|
| **Run logs** (the largest) | One row per log line. A job that emits 100 lines × runs hourly = 2.4 MB/day = ~250 MB / 90 days at small log lines. DEBUG runs are 10× that. |
| **Step rows** | A few hundred bytes per step. Negligible compared to logs. |
| **Run rows** | One row per run. Negligible. |

For an install with a hundred jobs running daily, the run history typically settles at a few hundred MB. Bigger only if:

- Multiple jobs run at `* * * * *` (sustained high cadence).
- Some jobs are routinely at DEBUG level.
- Retention is set very high.

Monitor the DB size; if it's growing, the [Conditional cleanup recipe](./workflows/conditional-cleanup.md) on the run-history tables themselves is a fair self-applied medicine.

---

## Health checks

Two health probes are exposed:

| Endpoint | What it returns |
|---|---|
| **`GET /healthz`** | Liveness — the process is up. Used by Kubernetes / Docker / load balancer to decide whether to route traffic. |
| **`GET /admin/jobs/health`** | Readiness — the scheduler has the lock, the cron registry parsed, no internal alarms. Used by monitoring to alert on "the scheduler is down". |

For a multi-replica install, the second endpoint differs between the primary and secondaries — the primary reports `scheduler: active`, the secondaries report `scheduler: standby`. Both are healthy states; alerting should require `scheduler: error` to fire.

---

## Common operational tasks

### Pausing the entire scheduler

For a maintenance window: set `scheduler_enabled = false` on every replica, then restart. Scheduled fires stop; manual ▶ Run still works. Re-enable when you're done.

For a **brief** pause without restart, disable every job in turn — tedious but works without config changes.

### Migrating jobs between environments

| From | To | How |
|---|---|---|
| Dev → Staging | Same DB schema. | Export the catalogue from dev, import into staging. Connector names must match between envs. |
| Staging → Prod | Same. | Same export/import. The encryption key differs between envs, so credentials need re-entering. |

The export is a JSON snapshot of the catalogue (no run history). Import validates every job before activating any of them — a malformed export doesn't partially-land.

### Quarantining a job for investigation

A job that's misbehaving but you don't want to delete:

1. Disable it (toggle off on the catalogue card).
2. Add a `quarantine` tag for visibility.
3. Investigate via the Run detail history.
4. Fix; remove the tag; re-enable.

The tag makes it obvious in the calendar view and the catalogue search.

---

## What's next

- [Notifications](./notifications.md) — wiring the transports for production.
- [Troubleshoot](./runs/troubleshoot.md) — incident playbook.
- [Concepts](./concepts.md) — the mental model behind these settings.
