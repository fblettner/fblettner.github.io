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

After a collection, **Last Refresh** and the *Data freshness* list of the [Audit synthesis](./audit-synthesis.md) show the new date. On **Last Refresh**, the lines are grouped by module, and a click on a line opens the run that collected it.

:::info[JDE-specific]
The collections read JD Edwards EnterpriseOne. For another source system, the collection is the one its connector provides.

The effective rights include the access paths of the user defined objects: a composite page gives the applications and reports its tiles open, the forms its panes show and the tasks of its menu; an E1 page gives the applications and reports its content calls. The other user defined objects — orchestrations, service requests, notifications… — give no access path. The rights, the segregation-of-duties conflicts and the licence figures that follow from them take these paths into account. Which pages are read depends on the **E1 Composite** and **E1 Pages** flags of the [application](./settings/global/applications.md): switching one on or off changes these figures at the next collection.
:::

---

## What a collection reads \{#steps\}

The two collection entries run the same job with a different set of steps: **Collect security and SoD** leaves the licence steps out, **Collect licences** leaves the security and SoD steps out. Neither reads the directory (LDAP), the activity log, the Oracle database properties, the cross reference of the JD Edwards objects or the inventory of the user defined objects. The operators collect the first three with the job's *Everything* preset in Nomaflow, or on its schedule; the cross reference and the inventory of the user defined objects (step `JDE_UDO`) come from the [`nomasx1-xref`](../nomaflow/bundled-jobs.md#nomasx1-xref) job, which Nomajde's cross reference and upgrade analysis read. Until the directory is read, the directory checks of the [Security review](./security-review.md) say *No directory collected*.

A step that fails does not stop the others: the run goes on and ends failed, naming the step.

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
