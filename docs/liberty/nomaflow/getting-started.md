---
title: Getting started
description: "Build your first scheduled Nomaflow job in ten minutes — open the Jobs page, create a job, add a SQL step, set a cron schedule, watch the first run land in the history."
keywords: [Nomaflow, getting started, first job, scheduler, cron, SQL step, run history, Liberty Framework]
---

# Getting started

This walkthrough builds your first Nomaflow job — a simple **nightly database refresh** — in about ten minutes. By the end you'll have a job that fires on a schedule, runs a step against a connector, records its run history and streams its logs live. Everything happens in the *Nomaflow* page; no TOML editing required.

The example uses a SQL step because every install has a connector to test it with. The same workflow applies to Python, HTTP and LDAP Sync steps — only the form fields change.

---

## Before you start

Make sure you have:

| Requirement | How to check |
|---|---|
| The framework is running. | Open the application — you can sign in. |
| You have a connector to use as a target. | Open *Settings → Connectors* — at least one connector should be listed. The framework's `default` pool always counts. |
| Your role has the `job:*` permission (or `superuser`). | If the *Nomaflow* link is visible in the menu, you're set. |

If any of those are missing, the [framework getting-started guide](../installation/python-server.md) covers the install path and [Authentication → Roles and permissions](../framework/build/secure/roles-and-permissions.md) covers the role wiring.

---

## Step 1 — Open the Jobs page

Click **Nomaflow** in the top navigation. The page that opens is the **Jobs catalogue** — every declared job, with its last-run state, next scheduled fire and a row of actions.

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="gs-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="320" rx="14" fill="url(#gs-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Jobs</text>
  <text x="40" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">The full catalogue of scheduled and on-demand jobs.</text>
  <line x1="20" y1="82" x2="980" y2="82" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="100" width="100" height="28" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="90" y="118" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ New Job</text>

  <rect x="150" y="100" width="130" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="215" y="118" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 Schedule view</text>

  <rect x="290" y="100" width="100" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="340" y="118" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload</text>

  <rect x="40" y="148" width="920" height="80" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="58" y="172" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">nightly-reporting-refresh</text>
  <rect x="280" y="160" width="68" height="18" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="314" y="173" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="356" y="160" width="46" height="18" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="379" y="173" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">etl</text>
  <text x="58" y="194" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Daily refresh of the reporting store from the operational DB.</text>
  <text x="58" y="212" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⏱ 0 2 * * *  ·  next: tomorrow 02:00  ·  last: 12 h ago  ·  3 steps</text>

  <rect x="800" y="190" width="56" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="828" y="205" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run now</text>
  <rect x="862" y="190" width="56" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="890" y="205" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">enabled</text>

  <rect x="40" y="244" width="920" height="80" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1" strokeDasharray="3,3"/>
  <text x="500" y="288" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">(empty placeholder — your first job lands here)</text>
</svg>

The top toolbar carries the three actions you'll use most: **New Job** (open the job builder), **Schedule view** (a calendar of upcoming fires) and **Reload** (refresh the catalogue).

---

## Step 2 — Create a job

Click **＋ New Job**. The **Job editor** opens with three sections: *Identity*, *Schedule* and *Steps*.

| Field | Set it to |
|---|---|
| **Id** | `my-first-job` (URL-safe — letters, digits, hyphens, underscores). |
| **Description** | *"My first Nomaflow job — refreshes a reporting view."* |
| **Tags** | `tutorial` *(optional — used to group jobs)*. |
| **Enabled** | Leave on. |

Save the identity block before you add steps. The job is now in the catalogue but does nothing yet.

---

## Step 3 — Add a SQL step

Inside the editor, click **＋ Add step** and pick **SQL Query** from the type menu.

| Field | Set it to |
|---|---|
| **Name** | `refresh-totals` *(used as a label in the run history)*. |
| **Type** | `sql_query`. |
| **Connector** | Pick any writable connector — the framework's `default` is fine for a smoke test. |
| **Query** | A short statement against your target — for the framework's `default` pool, `SELECT now()` is enough to prove the wiring. |

Save the step. The editor returns to the steps list with one step on it.

:::tip[Pick a real query when you can]
A `SELECT now()` works as a smoke test, but a job that runs a meaningful query (a `REFRESH MATERIALIZED VIEW`, a daily counter update, a small `INSERT … SELECT`) gives you a useful result row in the history.
:::

---

## Step 4 — Set a schedule

Back in the editor's *Schedule* section, the schedule field expects a **5-field cron expression** (with an optional 6th field for seconds).

| Goal | Cron |
|---|---|
| Every minute (good for a quick test). | `* * * * *` |
| Every day at 02:00. | `0 2 * * *` |
| Every Monday at 09:30. | `30 9 * * 1` |
| Every hour at minute :15. | `15 * * * *` |
| Manual-only (no schedule). | leave the field empty |

For a first test, set `* * * * *` and pick a **timezone** (e.g. `Europe/Paris`). The schedule field shows a live preview of the next three fires so you can sanity-check the expression before saving.

Save the job. Within a minute, the first run lands in the history.

---

## Step 5 — Watch the run

Back on the **Jobs** page, your `my-first-job` card now shows:

- A **RUNNING** badge (green pill) when the run is in flight.
- A **SUCCEEDED** or **FAILED** badge when it settles.
- The **last run** timestamp updating each minute.

Click the badge — it opens the **Run detail** page for that run, showing the step timeline, the inputs and outputs of each step and the live log tail.

<svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rd-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="300" rx="14" fill="url(#rd-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Run detail · my-first-job · run_a8c…</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="80" width="280" height="220" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="56" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STEPS</text>
  <rect x="56" y="116" width="248" height="36" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <circle cx="72" cy="134" r="6" fill="#22c55e"/>
  <text x="88" y="138" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">refresh-totals</text>
  <text x="290" y="138" fill="#22c55e" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">✓ 12 ms</text>
  <text x="56" y="180" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Started: 14:02:01</text>
  <text x="56" y="196" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Finished: 14:02:01</text>
  <text x="56" y="212" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Trigger: cron</text>
  <text x="56" y="228" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Status: SUCCEEDED</text>

  <rect x="340" y="80" width="620" height="220" rx="10" fill="rgba(0,0,0,0.40)" stroke="#1f2937" strokeWidth="1"/>
  <text x="356" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIVE LOG</text>
  <text x="356" y="124" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">14:02:01.083  INFO  run started · trigger=cron</text>
  <text x="356" y="140" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">14:02:01.085  INFO  step refresh-totals · type=sql_query</text>
  <text x="356" y="156" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">14:02:01.088  INFO  connector=default · 1 row affected</text>
  <text x="356" y="172" fill="#22c55e" fontSize="10" fontFamily="ui-monospace, monospace">14:02:01.090  INFO  step refresh-totals · SUCCEEDED · 5 ms</text>
  <text x="356" y="188" fill="#22c55e" fontSize="10" fontFamily="ui-monospace, monospace">14:02:01.091  INFO  run SUCCEEDED · 12 ms total</text>
</svg>

The log streams **live** over Socket.IO while the run is in flight — close the browser, the run keeps going; re-open the page, the log resumes where you left off.

---

## Step 6 — Switch to manual-only

A job firing every minute will fill the history quickly. Once you've confirmed the wiring:

- Open the job editor.
- Empty the *Schedule* field.
- Save.

The job is still in the catalogue and still ▶-runnable from the *Jobs* page, but no longer fires on its own. This is also the right mode for **on-demand jobs** — rebuilds, reports, one-off scripts an operator triggers manually.

Alternatively, use the **enable toggle** on the job card to disable the schedule without losing it.

---

## Step 7 — Try a manual run

Click **▶ Run now** on your job card. Three things can happen:

| What you see | When |
|---|---|
| The job fires immediately. | The job has no parameters and a single step — there's nothing the operator could usefully configure. |
| A **Run with parameters** modal opens. | The job has shared params, a Python step with op_kwargs, or more than one step. |
| The button is disabled with a spinner. | A previous run is still in flight. |

The *Run with parameters* modal is a powerful piece of the UI — it lets the operator override per-fire what would otherwise need a job edit. The full walkthrough lives in [Jobs → Catalogue](./jobs/catalog.md#run-with-parameters).

---

## What you've just built

| Behaviour | Where it came from |
|---|---|
| The job fires on a schedule. | The cron expression in the *Schedule* section. |
| The framework picks it up without a restart. | Save in the job editor calls `POST /admin/reload` automatically. |
| The run lands in the history. | Every fire creates a `run` row, every step a `step_run` row. |
| You can re-run from the UI. | **▶ Run now** dispatches through the same step engine as the cron fire. |
| Logs stream live. | The runner publishes to a Socket.IO channel the *Run detail* page subscribes to. |

You haven't written any TOML, opened a terminal or restarted a service. The whole loop — define, schedule, run, observe — lives in the Settings UI.

---

## Where to go next

| You want to… | Read |
|---|---|
| Build the mental model — what's a job, run, step, schedule? | [Concepts](./concepts.md). |
| Learn the catalogue + run-with-params modal in depth. | [Jobs → Catalogue](./jobs/catalog.md). |
| Walk through the full Job editor with every field explained. | [Jobs → Create a job](./jobs/create.md). |
| Pick the right step type. | [Steps](./steps.md). |
| See three end-to-end patterns. | [Workflow recipes](./workflows/scheduled-sync.md). |
| Set up Slack / email / webhook alerts on failure. | [Notifications](./notifications.md). |
