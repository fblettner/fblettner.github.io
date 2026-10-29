---
title: Jobs
description: "The Jobs folder of the Nomajde menu: re-merge the JD Edwards security of the roles touched by a change package or of every role, refresh the data dictionary of the Explorer models, check the JD Edwards servers — run on demand with a live log; and the AIS jobs that run a report or export a table from Nomaflow."
keywords: [Nomajde, jobs, re-merge security, change package, roles, data dictionary, Explorer, refresh, JD Edwards, Server Manager, health check, AIS, report, UBE, export, xlsx]
---

# Jobs

The **Jobs** folder, at the bottom of the Nomajde menu, runs the JD Edwards maintenance jobs on demand without opening Nomaflow. Each entry opens the job's page: its parameters, **Run**, the log followed live, the previous runs with who ran them. See [Run a job from an application's menu](../nomaflow/jobs/run-from-menu.md).

---

## Re-merge security (change package) \{#remerge\}

Re-merges the JD Edwards security — Security Workbench, UDO security, menu filtering — of the parent roles touched by the active change package, each parent once. Run it after applying a package that changed roles or role relationships. Details: [`nomajde-remerge-security`](../nomaflow/bundled-jobs.md#nomajde-remerge-security).

## Re-merge security (all roles) \{#remerge-all\}

Re-merges the security of every active parent role, whatever the change package — after a bulk import, or to recover from a missed re-merge. On a large instance it takes several minutes. Details: [`nomajde-remerge-security-all`](../nomaflow/bundled-jobs.md#nomajde-remerge-security-all).

## Refresh data dictionary (Explorer models) \{#dictionary\}

Creates the dictionary entries the [Data Explorer](./data-explorer.md) models lack, from the JD Edwards data dictionary (F9200 / F9202 / F9210: description, type, decimals, UDC lookup), one scan per table. The labels show at once: no restart.

| Parameter | Meaning |
|---|---|
| **Explorer model (blank = every model)** | One of the Nomajde models, or blank for all. |

The log lists, per model, the tables scanned and the entries created.

## Check the JDE servers \{#jde-health\}

Runs the health check of the JD Edwards servers through Server Manager at once, without waiting for the five-minute schedule, and records the result shown in [Monitoring → JDE Servers](./monitoring/jde-servers.md). The run fails when an instance did not pass. Details: [`nomajde-jde-health`](../nomaflow/bundled-jobs.md#nomajde-jde-health).

---

## JD Edwards AIS jobs \{#ais\}

Two jobs reach JD Edwards through its AIS server (connector `ais_connection`). They are not in the Nomajde menu: they are run from **Nomaflow → Jobs** with **Run with parameters**, or copied into a job of their own with fixed parameters and a schedule.

| Job | What it does | Parameters asked at launch |
|---|---|---|
| [`nomajde-ais-report`](../nomaflow/bundled-jobs.md#nomajde-ais-report) | Runs a JD Edwards report (UBE) and waits until it is done; the run fails when the report ends in error or is still running after the time limit. | **Report**, **Version** (`XJDE0001` by default), **Queue**, **Processing options (JSON)**. |
| [`nomajde-ais-export`](../nomaflow/bundled-jobs.md#nomajde-ais-export) | Exports a table or a business view to an xlsx file of the run, with AIS's column titles as headers; the file is downloaded from the run detail. | **Table** or **Business view**, **Columns**, **Conditions (JSON)**, **Max rows** (`5000` by default). |

The same AIS calls — and a few more: count rows, call a business function, run an orchestration, start or stop the scheduler — are available as Python steps of a job and as screen actions: see [the AIS steps](../nomaflow/bundled-jobs.md#ais-steps).

---

## Who may run them \{#access\}

An entry shows to the holders of the `job:<id>` permission (rule type **Job** in a role's *Beyond the menus* rules). Each holder sees every run of the job, not only their own.
