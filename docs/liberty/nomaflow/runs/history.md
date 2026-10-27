---
title: Run history
description: "Where Nomaflow runs are recorded and how to read one: the run states, the Run detail page (summary, per-fire overrides, steps, log with Follow and Download), the Job Runs list, and how long the history is kept."
keywords: [Nomaflow, run history, run detail, run states, log, MISSED, CANCELED, retention, Liberty Next]
---

# Run history

Every run of a job — scheduled, manual, called by another job, or missed — is recorded with its steps and its log.

---

## Where to find runs \{#where\}

| From | Opens |
|---|---|
| *last* on a job card | The detail of the job's last run. |
| The **Job Runs** list (the Nomaflow menu; **Job Runs** at the top of a run detail) | The latest runs of every job. |
| A notification about a run | Its detail, through the notification's link. |

---

## Run states \{#states\}

| State | Meaning |
|---|---|
| `QUEUED` | Accepted, waiting to start. |
| `RUNNING` | In progress. |
| `SUCCEEDED` | Every step succeeded or was skipped on purpose. |
| `FAILED` | A step failed after its retries. The following steps are recorded `CANCELED` with *skipped: earlier step failed*. |
| `CANCELED` | Cancelled by an operator or by a timeout. |
| `MISSED` | A scheduled time at which the job did not run — see [Missed schedules](../jobs/schedules.md#missed). |

A run interrupted by a server restart is closed as failed with *abandoned: process restart during run* when the server starts again.

---

## The Run detail page \{#detail\}

The page refreshes itself every two seconds while the run is in progress (*live*).

| Part | Content |
|---|---|
| **Summary** | Job, Trigger (`scheduled` or `manual`, and who started it — a user name, or `call_job:<job>@<run>` for a job called by another), Started, Finished, Rows affected. |
| **Run with parameters** | Shown when the run was started with overrides: the values chosen for this run (shared parameters, step arguments, skipped steps, log level). |
| **Steps** | One row per step: #, name, Type, Attempt, State, Error. A `file_load` step also shows *N read · N inserted · N rejected* and, if needed, **Rejected rows (csv)**. |
| **Log** | The lines written during the run, at the run's log level. **Follow** keeps the newest lines in view (**Pause** stops it); **Download** saves the whole log. |

The log keeps the last 5,000 lines of a run.

---

## How long runs are kept \{#retention\}

The **Run history retention** panel of the Jobs page deletes old runs with their steps and logs: by default runs older than 30 days, keeping at most 100 runs per job, checked every 60 minutes. See [Administration](../administration.md#retention).
