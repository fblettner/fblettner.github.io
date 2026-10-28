---
title: Jobs
description: "The Jobs folder of the Nomajde menu: re-merge the JD Edwards security of the roles touched by a change package or of every role, and refresh the data dictionary of the Explorer models — run on demand with a live log."
keywords: [Nomajde, jobs, re-merge security, change package, roles, data dictionary, Explorer, refresh, JD Edwards]
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

---

## Who may run them \{#access\}

An entry shows to the holders of the `job:<id>` permission (rule type **Job** in a role's *Beyond the menus* rules). Each holder sees every run of the job, not only their own.
