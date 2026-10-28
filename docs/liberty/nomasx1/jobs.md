---
title: Jobs
description: "The Jobs folder of the Nomasx-1 menu: collect the security and segregation-of-duties data or the licence data of one or several applications, render the licence audit and the Security & SoD assessment and mail them — run on demand with a live log, or monthly on a schedule. The auditor and administrator roles."
keywords: [Nomasx-1, jobs, collect security, segregation of duties, collect licences, licence audit report, security SoD report, monthly report, several applications, roles, auditor]
---

# Jobs

The **Jobs** folder, at the bottom of the Nomasx-1 menu, lets the compliance team refresh the data and produce the reports themselves — before a review, after a wave of changes in the source system — without opening Nomaflow. Each entry opens the job's page: the applications to process, **Run**, the log followed live, the previous runs with who ran them. See [Run a job from an application's menu](../nomaflow/jobs/run-from-menu.md).

---

## The entries \{#entries\}

| Entry | Does |
|---|---|
| **Collect security and SoD** | Collects the users, roles, assignments, menus and effective rights, then computes the segregation-of-duties conflicts from the [matrix](./settings/sod/matrix.md) — everything under **Security**, **Applications** and the [Segregation of duties](./sod-dashboard.md) dashboard. |
| **Collect licences** | Collects the employees, the users' transactions and the Object Usage Tracking — the input of **Licenses** and of the *Licence compliance* model of the [Data Explorer](./data-explorer.md). |
| **Licence audit report** | Renders the [licence audit](./reports/audit-licences.md) in PDF and mails it to the auditors. |
| **Security & SoD report** | Renders the [Security & SoD assessment](./reports/security-sox.md) in PDF and mails it to the auditors. |

**Applications** — each entry offers the applications as checkboxes, with **All**: the job runs once per application ticked, one after the other. The two reports also ask for the **Language**, `fr` or `en`.

After a collection, **Last Refresh** and the *Data freshness* list of the [Audit synthesis](./audit-synthesis.md) show the new date.

:::info[JDE-specific]
The collections read JD Edwards EnterpriseOne. For another source system, the collection is the one its connector provides.
:::

---

## On a schedule \{#reports\}

The operators schedule the same jobs in Nomaflow: the collection every night on every application, the two reports on the 1st of each month — mailed to the holders of the `nomasx1_auditor` role, the PDF attached, once the e-mail account is set. The jobs are delivered switched off. See [Bundled jobs](../nomaflow/bundled-jobs.md#collect).

---

## Who may run them \{#access\}

An entry shows to the holders of the `job:<id>` permission (rule type **Job** in a role's *Beyond the menus* rules). Each holder sees every run of the job, not only their own.

Nomasx-1 delivers two roles, created by a job the administrator runs once after the install and after each upgrade:

| Role | For |
|---|---|
| `nomasx1_auditor` | Reading every screen, dashboard and Explorer model, the AI assistant, and running the two reports; it receives the monthly reports. |
| `nomasx1_admin` | Everything, the settings and every Nomasx-1 job included. |

Assign them to users under **Liberty Next → Administer → Access**. See [`nomasx1-roles`](../nomaflow/bundled-jobs.md#nomasx1-roles).
