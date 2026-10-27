---
title: Getting started
description: "A first Nomaflow job in a few minutes: open the Jobs page, create a job, add a sql_query step, set a schedule, run it by hand and read the run."
keywords: [Nomaflow, getting started, first job, sql_query, schedule, run now, run detail, Liberty Next]
---

# Getting started

A first job: refresh a summary table every night, then run it by hand to check it.

---

## Before you start \{#before\}

- A **superuser** account — the Jobs pages are reserved to superusers.
- A SQL connector with a **write query** that does the work, for instance `daily_summary_refresh` (`INSERT … SELECT …`, `REFRESH MATERIALIZED VIEW …`, `CALL …`). A step calls a named query of a connector, not SQL typed in the job. See [Create a custom query](../framework/build/queries/create-custom.md).

---

## 1 — Open the Jobs page \{#open\}

Open **Jobs** from the Nomaflow menu (address `/nomaflow`). Each job is a card; the toolbar has **+ New job** and **Schedule**. See [Jobs page](./jobs/catalog.md).

## 2 — Create the job \{#create\}

**+ New job**. In the **Job** section: **Id** `daily-summary`, a **Description**, the tag `reporting`, **Enabled** on.

## 3 — Add a step \{#step\}

In **Steps**, the **Add step:** bar: click `sql_query`. Give the step a **Step name** (`refresh-summary`), pick the **Connector**, then the **Query** `daily_summary_refresh`.

## 4 — Set the schedule \{#schedule\}

Back in the **Job** section: **Schedule (cron)** `0 2 * * *`, **Timezone** `Europe/Paris`. **Next runs** lists the next five nights — check them. Then **Save** at the top: the job appears on the Jobs page with its next run.

## 5 — Run it by hand \{#run\}

On the card, **▶ Run now**. The card shows the run in progress, then *last SUCCEEDED*; click it to open the run detail: the summary, the step with its state, the rows affected and the log. See [Run history](./runs/history.md).

## 6 — Be told when it fails \{#notify\}

In **Settings → Notifications**, add a rule: trigger *A job event*, job `daily-summary`, events `failure` and `missed`, channel `email`, recipient `role:ops`. See [Notifications](./notifications.md).

---

## What next \{#next\}

- More step types — loading files, copying tables, calling an API: [Steps](./steps.md).
- Run the same job with different parameters on several schedules: [Schedulable presets](./jobs/schedules.md#schedulable-presets).
- Ready-made patterns: [Workflow recipes](./workflows/scheduled-sync.md).
