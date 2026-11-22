---
title: Jobs
description: "The Jobs folder of the Nomajde menu: re-merge the JD Edwards security, refresh the data dictionary of the Explorer models, check the JD Edwards servers, keep the platform's figures, watch the instances and restart them when told, mail the platform synthesis and the weekly upgrade report, compare a path code with the standard — run on demand with a live log; and the AIS jobs that run a report or export a table from Nomaflow."
keywords: [Nomajde, jobs, re-merge security, change package, roles, data dictionary, Explorer, refresh, JD Edwards, Server Manager, health check, instances, restart, platform snapshot, capacity, platform synthesis, weekly upgrade report, PDF, back to standard, AIS, report, UBE, export, xlsx]
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

Runs the health check of the JD Edwards servers through Server Manager at once, without waiting for the five-minute schedule, and records the result shown in [Monitoring → JDE Health Check](./monitoring/jde-servers.md). The run fails when an instance did not pass. Details: [`nomajde-jde-health`](../nomaflow/bundled-jobs.md#nomajde-jde-health).

## Platform snapshot \{#platform-snapshot\}

Keeps the platform's figures of the moment, so that their trend can be read in the **Capacity** tab of the [Platform synthesis](./synthesis.md): users online, sessions, instances running, response time and timeouts of the business functions, requests waiting, the enterprise servers' processor and memory in use and their kernels, the Java heap of the web and AIS instances (used and its maximum), cache, the database's sessions, blocked sessions, load and size, and the day's batch jobs — in error and waiting included. One row per figure in the Nomajde database, kept **400 days**.

Hourly as shipped, **off** until it is turned on. A source that does not answer leaves its figures out of that snapshot and is named in the run; the run fails only when nothing could be read. Read-only on JD Edwards.

## Instances watch \{#instances-watch\}

Watches the JD Edwards instances through Server Manager — every enterprise server, HTML server and AIS server — every **15 minutes** as shipped, **off** until it is turned on. Everything goes through Server Manager's REST API: nothing is installed on the JD Edwards servers.

### What it checks \{#instances-watch-checks\}

For each instance: its state, and for a running instance the console's own health checks (the port, the login, an application, a report…). An instance is **ok**, **unhealthy** (a check failed, with the console's message), **stopped**, or **not checked** (its health could not be read). What is wrong is kept in the Nomajde database for 90 days, and **the run fails** when something is still wrong at its end — the message names each instance and why — so the job's alert goes out.

The console's check of an enterprise server runs a report each time: keep the schedule reasonable.

### Restart and start: two questions \{#instances-watch-cure\}

The job can also cure. Two questions at launch, both **no** as shipped:

| Question | When **yes** |
|---|---|
| **Restart an instance whose health checks fail** | An unhealthy instance is stopped, Server Manager is asked until it says it is stopped, then it is started and asked until it runs. An instance that does not stop is not started again. |
| **Start an instance found stopped** | A stopped instance is started — leave it on **no** when instances are stopped on purpose. |

Each wait lasts up to five minutes. The same restart is the row action **Restart this instance** of the *JDE instances* screen — see [Server Manager](./monitoring/server-manager.md).

### Guard rails \{#instances-watch-guards\}

A restart is never repeated in a loop:

- **at most one instance per run**, enterprise servers first; the others are left for the next run, and the run says so;
- an instance restarted or started — or whose restart failed — **less than an hour ago** is not restarted a second time: the restart did not cure it, the run fails and says that a person must look.

### Health checks that count \{#instances-watch-checks-that-count\}

**Health checks that count (blank: all — e.g. Login, Port Test, BSFN)** names the checks to follow, separated by commas. Leave out a check that fails for a reason a restart does not cure — a certificate, a report server that is not installed: it would otherwise mark the instance unhealthy at every run.

---

## Documents by mail \{#reports\}

Two jobs make a PDF document — in French or in English — and send it by mail with the file attached. Both are **off** as shipped: turn them on once the mail settings are in place, or run them by hand. The same documents come from a button on their page and from the **Reports** page.

### Platform synthesis report \{#report-platform\}

The platform synthesis as a document: a summary, what needs attention, the architecture on a landscape page with each server's size, the capacity, what could be improved, what each analysis says — and, when asked, the target on Oracle Cloud Infrastructure with its estimate (see [OCI target](./monitoring/oci-target.md)). A source that did not answer is named in the document. Monthly as shipped (the 1st at 07:00), mailed to the users of the **Platform operator** role. The same document is **Get the report (PDF)** on the [Platform synthesis](./synthesis.md) page.

| Parameter | Default | Meaning |
|---|---|---|
| **Language** | `fr` | `fr` or `en`. |
| **Customer name on the cover** | blank | Written on the cover. |
| **With the OCI estimate** | `no` | `yes` adds the OCI target and its estimate. |

### Weekly upgrade report \{#report-upgrade\}

Not the list of the objects: **what moved this week, and what comes next** — see [Weekly upgrade report](./upgrade/analysis.md#weekly-report). The job first keeps the week's figures, so that each report says what moved since the last one, then makes the document and mails it to the users of the **Developer** role. Every Monday at 07:00 as shipped. The same document is **Weekly report (PDF)** on [Prepare for upgrade](./upgrade/analysis.md).

| Parameter | Default | Meaning |
|---|---|---|
| **Language** | `fr` | `fr` or `en`. |
| **Path code (blank: the one analysed last)** | blank | The upgrade analysis the report reads. |
| **Customer name on the cover** | blank | Written on the cover. |

---

## Upgrade and tests \{#upgrade-tests\}

The two jobs of the upgrade analysis are started from the **Prepare for upgrade** page, with **Load Oracle's list** and **Run the analysis** — see [Prepare for upgrade](./upgrade/analysis.md#steps). **Tests → Run the tests** sits in the Tests folder of the menu — see [Non-regression tests](./tests.md#job).

## Compare with the standard \{#standard-compare\}

Compares every standard object a path code holds as changed, and every copy of a standard object, with Oracle's own in another path code — `PS920`, Oracle's objects as delivered, or any other —, record by record, and keeps the verdict of each: which are identical and can go back to standard, which differ and by how much. The result is read on [Back to standard](./development/back-to-standard.md), whose **Compare again** button opens this job with its values filled in.

| Parameter | Default | Meaning |
|---|---|---|
| **Path code to examine** | `PD920` | The path code whose changed objects and copies are compared. |
| **Path code to compare with (PS920: Oracle's objects as delivered — or another)** | `PS920` | The reference. |

No schedule: run it when needed, before an upgrade for instance. Read-only on JD Edwards; comparing a path code again replaces what was kept for it.

---

## JD Edwards AIS jobs \{#ais\}

Two jobs reach JD Edwards through its AIS server (connector `ais_connection`). They are not in the Nomajde menu: they are run from **Nomaflow → Jobs** with **Run with parameters**, or copied into a job of their own with fixed parameters and a schedule.

| Job | What it does | Parameters asked at launch |
|---|---|---|
| [`nomajde-ais-report`](../nomaflow/bundled-jobs.md#nomajde-ais-report) | Runs a JD Edwards report (UBE) and waits until it is done; the run fails when the report ends in error or is still running after the time limit. | **Report**, **Version** (`XJDE0001` by default), **Queue**, **Processing options (JSON)**. |
| [`nomajde-ais-export`](../nomaflow/bundled-jobs.md#nomajde-ais-export) | Exports a table or a business view to an xlsx file of the run, with AIS's column titles as headers; the file is sent to whoever started the run and stays downloadable from the run detail. | **Table** or **Business view**, **Columns**, **Conditions (JSON)**, **Max rows** (`5000` by default). |

The same AIS calls — and a few more: count rows, call a business function, run an orchestration, start or stop the scheduler — are available as Python steps of a job and as screen actions: see [the AIS steps](../nomaflow/bundled-jobs.md#ais-steps). Two of them keep several forms open in one JD Edwards session — a flow over several forms, one row of a grid: see [Several forms in one session](./ais/services.md#flow).

---

## Who may run them \{#access\}

An entry shows to whoever may run the job: a role that sets the entry — or its folder — to **Read and change**, or that holds the `job:<id>` permission (rule type **Job** in its *Beyond the menus* rules). **Read** alone never shows it: reading never starts anything. Each person who may run the job sees every run of it, not only their own. As shipped, the **Platform operator** role runs *Platform snapshot*, *Instances watch* and *Platform synthesis report*; the **Developer** role runs *Weekly upgrade report* and *Compare with the standard*; the **Administrator** runs them all — see [Predefined roles](./overview.md#roles).
