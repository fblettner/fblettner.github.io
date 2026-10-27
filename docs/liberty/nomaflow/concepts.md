---
title: Concepts
description: "The Nomaflow vocabulary: job, step, schedule, preset, trigger, run, parameters, retry policy, log level, alerts — what each one is and where it is set."
keywords: [Nomaflow, concepts, job, step, schedule, preset, trigger, run, parameters, op_kwargs, retry, log level, Liberty Next]
---

# Concepts

---

## Job \{#job\}

A **job** is an entry of `jobs.toml`: an **id** (letters, digits, `-`, `_`; fixed once created), a description, tags, a schedule and timezone, an enabled switch, shared parameters, presets, a retry policy, alerts, a log level, a timeout — and an ordered list of steps. It is edited on the Jobs pages ([Create a job](./jobs/create.md)).

## Step \{#step\}

A **step** is one unit of work, of one of seven types: `sql_query`, `sql_copy`, `file_load`, `python`, `http`, `ldap_sync`, `call_job` ([Steps](./steps.md)). Steps run in order; a failed step stops the job, and the following ones are recorded as skipped.

## Schedule \{#schedule\}

A five-field **cron** evaluated in the job's **timezone**. The days of the week count from 0 = Monday: write them as names (`mon-fri`). No schedule means the job runs only on demand ([Schedules](./jobs/schedules.md)).

## Preset \{#preset\}

A saved set of run values — shared parameters, step arguments, steps switched off, log level — created from **Run with parameters**. A preset can carry its own schedule: one job, several schedules with different inputs.

## Trigger \{#trigger\}

What started a run: `scheduled` (the job's or a preset's schedule) or `manual` (a user, recorded by name). A job started by a `call_job` step records `call_job:<job>@<run>` as its starter.

## Run \{#run\}

One execution of a job, with an id, its trigger, its start and end, the rows affected, its steps and its log. States: `QUEUED`, `RUNNING`, `SUCCEEDED`, `FAILED`, `CANCELED`, and `MISSED` for a scheduled time that did not run ([Run history](./runs/history.md)).

## Parameters \{#parameters\}

| Level | Where | Applies to |
|---|---|---|
| Shared params | The job | Every `python` step's arguments. |
| Step arguments (`op_kwargs`) | The step | That step — they win over shared params. |
| Run with parameters | One run | That run only; `jobs.toml` is not changed. |

`file_load` reads the run parameters as `${params.x}` in its path and constants; `sql_query` takes its own `params`.

## Retry policy \{#retry\}

`attempts` (tries in all, 1 = no retry), `backoff` (`fixed` or `exponential`), `base_seconds`. Applies to each step.

## Log level \{#log-level\}

`WARNING`, `INFO` (default) or `DEBUG` (adds the SQL of every query). The job's level applies to scheduled runs; a manual run picks its own.

## Alerts \{#alerts\}

A job can notify its **recipients** when a run fails, without any rule. Anything else — success, cancel, missed schedule, long run, a set of jobs — goes through notification rules ([Notifications](./notifications.md)).

---

## An example \{#example\}

The job `sales-load` has three steps: `file_load` (load the month's file), `sql_query` (refresh the aggregates), `http` (call a downstream service). Its schedule is `0 2 * * *` in `Europe/Paris`; a preset *month-end* runs it on `0 6 1 * *` with `period` set to the previous month. Each night a run is recorded; when the server was down at 02:00, a `MISSED` run is recorded and the `ops` role receives an e-mail from the rule on `missed`.
