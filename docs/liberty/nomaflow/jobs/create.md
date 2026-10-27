---
title: Create a job
description: "The Nomaflow job editor: the Job section (id, schedule, timezone, tags, enabled), presets and their schedules, the retry policy, alerts, shared parameters and the step pipeline — and what is set only in jobs.toml."
keywords: [Nomaflow, create job, job editor, schedule, timezone, presets, retry policy, alerts, shared params, steps, jobs.toml, Liberty Next]
---

# Create a job

**+ New job** on the Jobs page, or **Edit** on a card, opens the job editor. One **Save** at the top writes the whole job to `jobs.toml`, reloads the scheduler and goes back to the Jobs page; **Cancel** leaves without saving. An invalid job is refused with a message at the top of the editor.

---

## The sections \{#sections\}

### Job

| Field | Notes |
|---|---|
| **Id** | Letters, digits, `-` and `_`. Fixed once the job exists — it keys the run history. To rename, **Clone** under the new id, then delete the old job. |
| **Description** | Shown on the card. |
| **Schedule (cron)** | Ready-made choices (Manual, Hourly, Daily, Weekly, Monthly) or a five-field cron; **Next runs** previews the next five. Blank: manual only. See [Schedules](./schedules.md). |
| **Timezone** | The IANA name the schedule is evaluated in. |
| **Tags** | Free labels, used by the filter of the Jobs page. |
| **Enabled** | Switches the job's own schedule on or off. |

### Presets & schedules

Presets are saved from **Run with parameters → Save as preset…**. Here each one can get its own **Schedule (cron)**, **Timezone** and **Schedule enabled** — see [Schedulable presets](./schedules.md#schedulable-presets).

### Retry policy

**Retry failed steps**, then **Attempts** (tries in all), **Backoff** (`fixed` or `exponential`) and **Base seconds** between tries. The policy applies to each step.

### Alerts

**Send alerts** with **On failure** sends a notification to the **Recipients** when a run fails, in the bell and by e-mail. Write recipients as `user:alice`, `role:ops` or `email:ops@example.com` — an entry without a prefix is taken as an e-mail address. To be warned of long runs, use a notification rule with the `long_run` event: see [Notifications](../notifications.md#job-alerts).

### Shared params

Name / value pairs merged into the arguments of every `python` step (a step's own value wins). They also appear, editable, in **Run with parameters**.

### Steps

The **Add step:** bar has one button per type — `sql_query`, `sql_copy`, `file_load`, `python`, `http`, `ldap_sync`, `call_job`. Each step is a card: click it to open or fold its form; the arrows move it up or down; the copy icon clones it; the bin removes it. The fields of each type are on [Steps](../steps.md).

---

## Only in jobs.toml \{#toml-only\}

A few settings have no field in the editor; set them in `jobs.toml`:

| Key | Default | Meaning |
|---|---|---|
| `log_level` (job) | `INFO` | The level of scheduled runs: `WARNING`, `INFO` or `DEBUG`. A manual run picks its own in **Run with parameters**. |
| `timeout_seconds` (job) | `14400` | The whole run stops after this time. |
| `enabled` (step) | `true` | `false` always skips the step. |
| `timeout_seconds` (step) | `3600` | The step stops after this time. |
| `pool` (`sql_query`, `sql_copy` endpoints) | — | Another pool of the connector — see [Steps](../steps.md#sql-query). |

```toml title="jobs.toml"
[[jobs]]
id = "sales-load"
description = "Monthly sales files into the facts table"
schedule = "0 2 * * *"
timezone = "Europe/Paris"
tags = ["etl"]
log_level = "INFO"

[jobs.params]
period = "2026-10"

[jobs.retry]
attempts = 3
backoff = "exponential"
base_seconds = 60

[[jobs.steps]]
type = "file_load"
name = "load-sales"
# … see Steps → File load
```

---

## Tips \{#tips\}

- Give each step a short verb-noun name (`load-sales`, `refresh-totals`): it is what the run detail shows.
- Keep one job per business flow; chain jobs with a `call_job` step rather than copying steps.
- Save, then run once by hand with **Run with parameters** in `DEBUG` before enabling the schedule.
