---
title: Jobs
description: "The Jobs folder of the Nomasx-1 menu: collect the security data and the licence transactions of a connected application on demand, follow the log live and find the previous runs — without opening Nomaflow."
keywords: [Nomasx-1, jobs, collect security, collect licences, collection, refresh, run, log]
---

# Jobs

The **Jobs** folder, at the bottom of the Nomasx-1 menu, lets the compliance team refresh the data themselves — before a review, after a wave of changes in the source system — without opening Nomaflow. Each entry opens the job's page: **Run**, the log followed live, the previous runs with who ran them.

The scheduled collections keep running as usual; these entries run the same jobs on demand.

---

## The entries \{#entries\}

| Entry | Job | Refreshes |
|---|---|---|
| **Collect security** | [`nomasx1-security-1`](../nomaflow/bundled-jobs.md#nomasx1-security-1) | Users, roles, assignments, menus and effective rights of the application — everything under **Security** and **Applications**, and the figures of the [Audit synthesis](./audit-synthesis.md). |
| **Collect licences** | [`nomasx1-license-1`](../nomaflow/bundled-jobs.md#nomasx1-license-1) | The users' transactions — the input of the licence usage under **Licenses** and of the *Licence compliance* model of the [Data Explorer](./data-explorer.md). |

After a collection, **Last Refresh** and the *Data freshness* list of the Audit synthesis show the new date.

:::info[JDE-specific]
Both jobs read JD Edwards EnterpriseOne. For another source system, the collection is the one its connector provides.
:::

---

## Who may run them \{#access\}

An entry shows to the holders of the `job:<id>` permission (rule type **Job** in a role's *Beyond the menus* rules). Each holder sees every run of the job, not only their own. See [Run a job from an application's menu](../nomaflow/jobs/run-from-menu.md).
