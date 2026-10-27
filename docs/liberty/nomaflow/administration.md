---
title: Administration
description: "Running Nomaflow on a server: the [jobs] settings in app.toml, one instance, what happens on restart, run history retention, the run log buffer, who can use the Jobs pages, backup and health."
keywords: [Nomaflow, administration, jobs settings, retention, run log, restart, recovery, superuser, backup, Liberty Next]
---

# Administration

Nomaflow runs inside the Liberty Next server: its scheduler, its runner and its run history need no separate service.

---

## Settings \{#settings\}

The `[jobs]` section of `app.toml`:

| Key | Default | Meaning |
|---|---|---|
| `enabled` | `true` | `false` keeps the scheduler stopped: no scheduled run (and no missed-schedule check), but **Run now** still works. A restart applies it. |
| `pool` | `default` | The pool that holds the run history. |
| `config_path` | `plugins/nomaflow/jobs.toml` next to the configuration folder | The jobs file. |
| `run_log_max_lines` | `5000` | The lines kept per run log — raise it for a job that writes a lot. |
| `files_dir` | `.nomaflow/files` next to the configuration | Uploaded files and reject files of `file_load` steps. |
| `max_upload_mb` | `200` | The largest file accepted by **Run with parameters**. |

The history lives in five tables of that pool: `nomaflow_job_runs`, `nomaflow_step_runs`, `nomaflow_run_logs`, `nomaflow_run_overrides`, `nomaflow_step_run_extras`. They are created and completed by the server at start-up.

---

## One instance \{#one-instance\}

Run **one** Liberty Next instance: the scheduler fires from the server process, with no lock shared between instances, so two instances would run every job twice. See [Production checklist](../installation/production.md#replicas).

---

## Restart \{#restart\}

- Runs in progress when the server stops are closed as **FAILED** with *abandoned: process restart during run* at the next start.
- Scheduled times that fell while the server was down are recorded as **MISSED** — see [Missed schedules](./jobs/schedules.md#missed). They are not run again on their own: run them by hand if needed.
- Jobs, presets and policies are in `jobs.toml`; the history is in the database — both survive the restart.

---

## Run history retention \{#retention\}

The **Run history retention** panel of the Jobs page (labels in English):

| Setting | Default | Meaning |
|---|---|---|
| **Auto-sweep** | on | The recurring clean-up. |
| **Days kept** | 30 | Finished runs older than this are deleted, with their steps and logs. |
| **Cap per job** | 100 | Each job keeps at most this many recent runs. |
| **Sweep interval (min)** | 60 | How often the clean-up runs. |

**Clean now** runs it at once. The policy is saved in `jobs.toml` under `[meta.retention]`.

---

## Run log \{#run-log\}

Each run collects its log lines in memory — the `liberty.*` loggers, the `nomaflow` lines and the namespaces registered by plugins — and writes them to the database when it ends. The level is the run's: `WARNING`, `INFO` or `DEBUG` (`DEBUG` adds the SQL of every query). The server log receives the same lines.

---

## Who can use Nomaflow \{#permissions\}

The Jobs pages and their API (`/admin/jobs/…`) are reserved to **superusers**. Notifications about jobs reach other users through notification rules — see [Notifications](./notifications.md).

---

## Backup \{#backup\}

`./liberty backup` (Docker) or `liberty-ops backup` (Python) saves the configuration — `jobs.toml` included — and the database that holds the history. See [Operations](../installation/operations.md#backup).

---

## Health \{#health\}

The server's `/ready` answers when the framework database — which holds the history — is reachable. The Jobs page shows the last state of each job; a notification rule on `failure` and `missed` is the simplest monitoring.

---

## Common tasks \{#tasks\}

| Task | How |
|---|---|
| Pause one job | Its **enabled** switch on the Jobs page. |
| Pause every schedule | `[jobs] enabled = false` in `app.toml`, then restart — manual runs remain possible. |
| Move a job to another server | **Export** on its card, then copy the entry into the target's `jobs.toml` — or carry it in a package. The connectors and queries it uses must exist there. |
| Investigate a job without stopping the others | Switch it off, run it by hand at `DEBUG`. |
