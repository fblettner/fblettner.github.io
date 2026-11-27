---
title: Jobs
description: "The Jobs folder of the Nomasx-1 menu: collect the security and segregation-of-duties data or the licence data of one or several applications, render the licence audit and the Security & SoD assessment and mail them — run on demand with a live log, or monthly on a schedule. The four predefined roles."
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
The built-in collections read JD Edwards EnterpriseOne. Another application gives its users, roles, assignments, menus and rights through its own [custom queries](./settings/global/custom-queries.md) — segregation of duties then runs on it too; the licence collections stay JD Edwards only.

The effective rights include the access paths of the user defined objects: a composite page gives the applications and reports its tiles open, the forms its panes show and the tasks of its menu; an E1 page gives the applications and reports its content calls. The other user defined objects — orchestrations, service requests, notifications… — give no access path. The rights, the segregation-of-duties conflicts and the licence figures that follow from them take these paths into account. Which pages are read depends on the **E1 Composite** and **E1 Pages** flags of the [application](./settings/global/applications.md): switching one on or off changes these figures at the next collection.
:::

---

## What a collection reads \{#steps\}

The two collection entries run the same job with a different set of steps: **Collect security and SoD** leaves the licence steps out, **Collect licences** leaves the security and SoD steps out. Neither reads the directory (LDAP), the activity log, the Oracle database properties, the cross reference of the JD Edwards objects or the inventory of the user defined objects. The operators collect the first three with the job's *Everything* preset in Nomaflow, or on its schedule; the cross reference and the inventory of the user defined objects (step `JDE_UDO`) come from the [`nomasx1-xref`](../nomaflow/bundled-jobs.md#nomasx1-xref) job, which Nomajde's cross reference and upgrade analysis read. Until the directory is read, the directory checks of the [Security review](./security-review.md) say *No directory collected*.

On a JD Edwards application, two steps of the security collection follow the Security Workbench's own: `JDE_SEC_ROWS` reads the **row security** and `JDE_SEC_UDO` the whole **UDO security** — every category and every kind of line —, each into its own table, shown under [Row security](./applications/rights/row-security.md) and [UDO security](./applications/rights/udo-security.md). Neither changes the rights, the licence figures or the segregation of duties: row security does not decide what a user may open, and the rights keep taking from the UDO security only the view lines of the composite and E1 pages. [What to fix](./security-analysis.md) reads both. The UDO security is read only when **JDE_UDO_SEC** is set in the [JD Edwards settings](./settings/global/jd-edwards.md); the [UDO libraries](./settings/global/udo-libraries.md) screen gives the library to set.

A step that fails does not stop the others: the run goes on and ends failed, naming the step.

### The answers kept for the reviews \{#kept\}

Both entries end with three steps that prepare the long pages of the **Reviews** folder, so that they open at once with what the collection has just gathered:

| Step | Prepares |
|---|---|
| `KEEP_SOD_REVIEW` | The [Segregation of duties review](./sod-review.md). |
| `KEEP_WHAT_TO_FIX` | [What to fix](./security-analysis.md). |
| `KEEP_LICENSING_REVIEW` | The [Licensing review](./licensing-review.md), in English and in French — and with it the licence exposure read by the [Audit synthesis](./audit-synthesis.md), the [Data Explorer](./data-explorer.md) and the *License - Financial report* screen. |

A failure in one of these three steps never makes the collection fail: the page then computes its answer when it is opened, or on **Read again**.

:::tip[A collection job changed on your platform]
When the steps of `nomasx1-collect-all` were changed on your platform, an upgrade keeps your version of the job, without these three steps. Add them in the job's editor in Nomaflow, or take the shipped job again; until then, the three pages compute at their first opening and the licence exposure stays empty until the Licensing review is read again once.
:::

---

## On a schedule \{#reports\}

The operators schedule the same jobs in Nomaflow: the collection every night on every application, the two reports on the 1st of each month — mailed to the holders of the `nomasx1_auditor` role, the PDF attached, once the e-mail account is set. The jobs are delivered switched off. See [Bundled jobs](../nomaflow/bundled-jobs.md#collect).

---

## Demonstration data \{#demo\}

`nomasx1-demo-licences` is for **demonstration platforms only**. It is not in the Nomasx-1 menu: the operators run it from Nomaflow, delivered switched off. It gives an application a demonstration contract that shows every case the [Licensing review](./licensing-review.md) knows, and usage for the application's users.

| Parameter | What it sets |
|---|---|
| **Application** | The application that receives the demonstration. |
| **Write the demonstration data, or remove it** | `add` writes it (after removing a previous one); `remove` takes everything it wrote away. |

What `add` writes is its own, on a contract of its own (*DEMO — licensing review*): two bundles — a small one whose modules are also in the large one —, lines counted on the revenue with a declared revenue above the subscription, a line on the employees, a line on the processors, a module line, a database and a pack per Named User Plus with users declared for another application, people who use a module no line covers, and an Oracle Data Integrator and an Oracle Analytics Server installation with their contract lines. When Nomajde is installed, it also states demonstration machines in [Server sizes](../nomajde/monitoring/server-sizes.md) — their names start with `DEMO-`. It never touches a real contract.

The usage it writes is replaced by the next licence collection: run the job again after one.

---

## Who may run them \{#access\}

An entry shows to whoever may run its job: a role that sets the entry, or its folder, to **Read and change** — or that holds the `job:<id>` permission. *Read* alone never shows it. Each holder sees every run of the job, not only their own.

Nomasx-1 ships four predefined roles; the auditor and the two managers run the reports and collections of their part, the administrator every job:

| Role | For |
|---|---|
| **Auditor** (`nomasx1_auditor`) | Reads everything and runs the two audit reports. Changes no setting. The monthly reports are mailed to it. |
| **Security officer** (`nomasx1_security_officer`) | Security and segregation of duties in read and change, with their settings, the security collection and its report. The rest in read. |
| **Licence manager** (`nomasx1_licence_manager`) | Licences and database in read and change, with the licence settings, the licence collection and its report. The rest in read. |
| **Administrator** (`nomasx1_admin`) | Everything in the application: read and change, the settings and the jobs of its menu included. |

Each role names menu folders, so it follows them when a version adds screens to a folder. A person may hold several — a security officer who is also the licence manager: the rights add up.

Add them one at a time under **Liberty Next → Administer → Access → Roles → Add a predefined role…** (see [Predefined roles](../framework/build/secure/roles-and-permissions.md#predefined)), or all four at once with the [`nomasx1-roles`](../nomaflow/bundled-jobs.md#nomasx1-roles) job, which also gives the administrator every `nomasx1-*` job. Run again, the job puts the shipped rights back on a role changed in Access; users are not touched.
