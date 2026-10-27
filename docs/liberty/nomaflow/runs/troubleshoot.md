---
title: Troubleshoot
description: "Fixing Nomaflow runs: a run that failed, a step that does the wrong thing, a run that hangs, a cancel that does not stop a Python step, a schedule that does not fire, a job missing from the list, an empty log."
keywords: [Nomaflow, troubleshoot, failed run, timeout, cancel, schedule not firing, MISSED, log, Liberty Next]
---

# Troubleshoot

Start from the run detail: the **Error** column of the failed step, then the **Log**. Run again with **Run with parameters** at `DEBUG` to see the SQL of every query.

---

## A run shows FAILED \{#failed\}

| Error in the step row | Usual cause |
|---|---|
| *step timed out after N s* | The step exceeded its `timeout_seconds` (3 600 by default). Raise it in `jobs.toml`, or split the work. |
| *→ 404*, *→ 500* (http step) | The called URL answered with that status. |
| A database error | Wrong credentials, a missing table, a constraint. Test the pool in **Settings → Pools** and the query on the connector page. |
| *cannot import module …* / *has no attribute …* (python step) | The plugin is not where `callable` says, or the server was not restarted after a change — see [Deploy and debug](../../framework/build/plugins/deploy-and-debug.md). |
| *period … is closed* (file_load) | The step's refuse query rejected the load on purpose. |
| *control total mismatch …* (file_load) | The loaded total differs from the expected one; nothing was written. |

After fixing, rerun only the failed step: **Run with parameters**, untick the steps that already succeeded, **Run**.

---

## A step succeeded but did the wrong thing \{#wrong-result\}

Look at **Rows affected** and at the step's details, then rerun at `DEBUG`: the log shows each query with its values. For a `file_load`, compare *read / inserted / rejected* and download the rejected rows.

---

## A run stays RUNNING \{#hangs\}

A step waits on something slow — a locked table, a remote API, a long sync. Each step stops at its `timeout_seconds`, the job at its own (4 hours by default). **Cancel** on the job's card stops it sooner.

---

## Cancel doesn't stop my step \{#cancellation-doesnt-stop-my-step\}

SQL, HTTP, file-load and `async` Python steps stop at once. A Python function written with `def` runs in a worker thread that cannot be interrupted: the run shows **CANCELED**, but the function goes on until it returns. Write long functions as `async` — see [Write a callable](../../framework/build/plugins/write-a-callable.md).

---

## The schedule doesn't fire \{#schedule\}

| Check | Fix |
|---|---|
| The card shows **disabled** or **Manual only** | Switch the job on, or give it a schedule. |
| The day is wrong | The scheduler counts the days of the week from 0 = Monday. Write `mon-fri`, not `1-5` — see [Schedules](../jobs/schedules.md#cron). |
| The **Next runs** preview is not what was expected | Fix the cron or the timezone. |
| The server was down at that time | The run is recorded **MISSED**; run it by hand. |
| `[jobs] enabled = false` in `app.toml` | The scheduler is stopped; only manual runs work. Set it back to `true` and restart. |

---

## The job is missing from the list \{#missing\}

`jobs.toml` was edited by hand and no longer validates: the server log names the error. A key not in the schema is refused — check the spelling against [Steps](../steps.md) and [Create a job](../jobs/create.md#toml-only). After fixing the file, **Settings → Reload config**.

---

## The log is empty \{#empty-log\}

The run's log level is `WARNING`, or a Python plugin logs under a namespace that is not registered — see [Custom Python steps](../custom-python.md#logging).

---

## 403 on the Jobs page \{#forbidden\}

The Nomaflow pages and their API are reserved to superusers.
