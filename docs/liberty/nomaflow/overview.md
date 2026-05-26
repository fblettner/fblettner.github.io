---
title: What is Nomaflow
description: "Nomaflow is the scheduler and orchestration engine bundled with the Liberty Framework — cron-scheduled jobs, linear step pipelines, retry / backoff, run history with live log tail. No external worker, no broker, no companion daemon."
keywords: [Nomaflow, scheduler, orchestration, cron, jobs, runs, workflow, ETL, Liberty Framework, in-process]
---

# What is Nomaflow

**Nomaflow** is the scheduler and orchestration engine that ships with the Liberty Framework. It runs **inside the framework process** — no separate worker, no broker (Redis / RabbitMQ), no companion daemon. The framework you've already installed for screens and dashboards now also schedules cron jobs, runs ETL pipelines, mirrors LDAP directories, fans out HTTP calls and lets operators watch every run live from a UI.

If a team already has the framework, they have Nomaflow. If they don't, the framework is the install path.

---

## What it solves

Most teams that operate internal applications end up needing the same kind of "background work" infrastructure:

- A **nightly database refresh** that pulls data from an operational store into a reporting store.
- A **periodic API pull** from a third-party service, with retry on failure.
- An **LDAP / Active Directory sync** that mirrors users + groups into the application.
- A **cleanup job** that prunes old records, archives PDFs, deletes expired sessions.
- A **conditional flow** that runs only when something specific happened (a file landed, a count crossed a threshold).
- A **manual one-off** that an operator triggers from a button after a release.

Doing this without Nomaflow usually means cron tabs scattered across hosts, Python scripts in different repos, no shared retry logic, no single place to see "what just ran". Doing it with Nomaflow means **one catalogue of jobs, one history of runs, one live log tail**, all in the same UI as the rest of the application.

---

## At a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nf-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="nf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="320" rx="14" fill="url(#nf-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow — what it does, end to end</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="80" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · CATALOGUE</text>
  <text x="160" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">jobs you define</text>
  <text x="160" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cron + manual</text>
  <text x="160" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">Settings → Jobs</text>

  <rect x="280" y="100" width="200" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · SCHEDULER</text>
  <text x="380" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">in-process</text>
  <text x="380" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · interval · trigger</text>
  <text x="380" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">single-instance lock</text>

  <rect x="500" y="100" width="200" height="80" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · STEP ENGINE</text>
  <text x="600" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">SQL · Python · HTTP</text>
  <text x="600" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">retry · timeout · branch</text>
  <text x="600" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">async, cancellable</text>

  <rect x="720" y="100" width="220" height="80" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · RUN HISTORY</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">timeline of every run</text>
  <text x="830" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">live log tail · abort · replay</text>
  <text x="830" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">90 days retention</text>

  <line x1="260" y1="140" x2="280" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>
  <line x1="480" y1="140" x2="500" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>
  <line x1="700" y1="140" x2="720" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>

  <rect x="60" y="210" width="880" height="120" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPERATOR SURFACES</text>
  <text x="76" y="256" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">↳ <tspan fontWeight="600" fill="#cbd5e1">Jobs page</tspan> — catalogue, search, ▶ Run now, ▶▶ Run with overrides</text>
  <text x="76" y="274" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">↳ <tspan fontWeight="600" fill="#cbd5e1">Runs page</tspan> — timeline of every run, per-step status, click a run to drill in</text>
  <text x="76" y="292" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">↳ <tspan fontWeight="600" fill="#cbd5e1">Run detail</tspan> — input/output per step, live log tail, Abort / Replay</text>
  <text x="76" y="310" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">↳ <tspan fontWeight="600" fill="#cbd5e1">Notifications</tspan> — Slack / email / webhook on success or failure</text>
</svg>

---

## What you can build

| Pattern | What it looks like with Nomaflow |
|---|---|
| **Scheduled database sync** | Cron at 02:00 → SQL Copy step from source pool to target pool → success notification. [Recipe](./workflows/scheduled-sync.md). |
| **External API pull** | Cron every hour → HTTP step with bearer auth → Python step transforms the payload → SQL write into target table. [Recipe](./workflows/api-pull.md). |
| **LDAP / AD mirror** | Cron every 4 hours → LDAP Sync step → upsert into the users table. |
| **Conditional cleanup** | Cron daily → SQL Query to count old rows → conditional Python step deletes them only past a threshold. [Recipe](./workflows/conditional-cleanup.md). |
| **Manual one-off** | No schedule → operator opens *Jobs* page → ▶ Run now with parameters → watches the live log. |
| **File watcher → batch** | Cron every 5 minutes → Python step lists a folder → for each new file, SQL Copy + archive move. |
| **Smoke test** | Cron every 5 minutes → HTTP step against your own healthz → email alert if it fails 3 times in a row. |

The pieces are deliberately small (a step does one thing). The pipelines compose them; the run history surfaces what happened.

---

## When to use Nomaflow

| Reach for Nomaflow when… | Reach for something else when… |
|---|---|
| Workloads are install-scoped and don't cross multiple systems. | Workloads span a dozen services and need a global DAG view. |
| The whole pipeline finishes in seconds to minutes. | A single step takes hours and needs autoscaling. |
| Cron + linear steps + retry is enough. | You need dynamic task expansion, fan-out / fan-in DAGs, distributed compute. |
| You want one tool, one UI, one log stream. | You already run Airflow / Dagster / Prefect for everything else and a second tool is overhead. |
| You'd otherwise hand-write a Python script + a systemd timer. | You'd otherwise hand-write a Kubernetes CronJob with sidecars. |

The framework's design point is "the operational glue most internal apps need" — not "every orchestration use case". For the 80 % case, it removes a lot of pipe-laying.

---

## How it fits inside the framework

Nomaflow uses the framework's **connectors** to reach databases and APIs (the same connectors your screens and dashboards use), the framework's **permission model** to gate who can trigger what, the framework's **encryption layer** to hold credentials safely, and the framework's **Settings UI** to define everything. There's no "Nomaflow database" to install, no "Nomaflow user accounts" to manage.

| Framework piece | What Nomaflow gets from it |
|---|---|
| **Connectors** (SQL / HTTP / LDAP) | Reach data sources and APIs through declared queries / endpoints. |
| **Pools** | Database connections. |
| **Authentication + roles** | `job:<name>` permission gates per role. `:session_user` for audit on triggers. |
| **Encryption** | Connector credentials, webhook URLs, OAuth secrets — all 🔒 encrypted. |
| **Settings UI** | The Jobs builder + step editor live there. |
| **Socket.IO** | Live updates on run state, step transitions, log tail. |
| **Notifications channels** | Slack / email / webhook — defined once at framework level, used by every job. |

The Liberty Framework documentation covers these underlying pieces; Nomaflow's documentation focuses on what you build **with them**.

---

## Tour of the documentation

| Page | Read it to… |
|---|---|
| [Getting started](./getting-started.md) | Build a first scheduled job in 10 minutes. |
| [Concepts](./concepts.md) | Understand the *job / run / step / schedule* mental model. |
| [Jobs → Catalogue](./jobs/catalog.md) | Browse, search, trigger jobs from the Jobs page. |
| [Jobs → Create a job](./jobs/create.md) | Walk through the job builder. |
| [Jobs → Schedules](./jobs/schedules.md) | Cron syntax, intervals, calendar preview. |
| [Steps](./steps.md) | What each step type does (SQL Query, SQL Copy, Python, HTTP, LDAP Sync). |
| [Runs → History](./runs/history.md) | The Runs page — filter, status, drill into a run. |
| [Runs → Troubleshoot](./runs/troubleshoot.md) | When a run fails — how to find out why. |
| [Workflow recipes](./workflows/scheduled-sync.md) | Three end-to-end patterns ready to adapt. |
| [Custom Python steps](./custom-python.md) | Drop in your own logic when declarative steps aren't enough. |
| [Notifications](./notifications.md) | Slack / email / webhook on outcomes. |
| [Administration](./administration.md) | Multi-replica scheduler, retention, restart behaviour. |

---

## Where Nomaflow doesn't go

A short honesty list, so expectations match what's there:

- **No DAG of jobs with parallel branches.** Steps inside a job are linear; you can chain jobs through *Dependencies*, but the model is "step by step" not "graph". Most operational workloads fit that fine.
- **No autoscaling worker pool.** The scheduler runs in the framework process. Heavy parallel batches (thousands of concurrent steps) are not its strong suit.
- **No data lineage / catalog.** Nomaflow knows which steps ran; it doesn't track what columns flowed from which source to which target. Use a dedicated catalog tool if that matters.
- **No SaaS-grade backfill UI.** You can replay a finished run; you don't get "re-run for every day in the past 90 days" out of the box (write a Python step for that).

These are tradeoffs, not gaps to fix — the design point is the small, install-scoped case.

---

## Ready to go

→ **[Getting started](./getting-started.md)** — your first scheduled job in 10 minutes.

Or if you prefer to read first: **[Concepts](./concepts.md)** for the mental model, then **[Jobs → Create a job](./jobs/create.md)** for the walkthrough.
