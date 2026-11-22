---
title: Run a job from an application's menu
description: "A job menu item puts a Nomaflow job in an application's menu: the user picks the files and parameters the job asks for, runs it, follows its log live and finds the previous runs — without access to Nomaflow itself. The job permission, user parameters, files and history."
keywords: [Nomaflow, job menu item, run a job, job page, file upload, user parameters, user_params, job permission, live log, Liberty Next]
---

# Run a job from an application's menu

A **job** menu item puts a Nomaflow job in an application's menu, for users who do not administer Nomaflow: the person who loads the month's sales file, the security officer who collects the security data before a review. The item opens the job's own page — the files it needs, its parameters, **Run**, the log followed live and the previous runs. Nothing else of Nomaflow is shown.

---

## At a glance

<svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfjp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfjp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfjp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfjp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="480" rx="14" fill="url(#nfjp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▷</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sales file (one month)</text>
  <text x="260" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Load one month of invoice lines. A closed period is refused.</text>
  <line x1="220" y1="76" x2="980" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="720" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="108" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">COMPANY ∗</text>
  <rect x="254" y="113" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="127.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">(all)</text>
  <text x="382" y="127.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="410" y="108" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">File for the step “load” · sheet “Sales”</text>
  <rect x="410" y="115" width="102" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▤ Choose a file…</text>
  <text x="520" y="130" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sales_2026-10.xlsx</text>
  <rect x="660" y="113" width="80" height="26" rx="5" fill="url(#nfjp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="700.0" y="129.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="240" y="166" width="720" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="186" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LOG · </text>
  <rect x="290.56" y="175" width="48" height="16" rx="3" fill="#4a9eff" fillOpacity="0.12" stroke="#4a9eff" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="314.56" y="186.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">RUNNING</text>
  <rect x="254" y="196" width="692" height="110" rx="6" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="214" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:11 INFO  nomaflow.runner started job=sales-load trigger=manual steps=3</text>
  <text x="264" y="232" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:11 INFO  nomaflow.file_load start step='load'</text>
  <text x="264" y="250" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:12 INFO  load: 4812 row(s) read, 4806 inserted, 6 rejected</text>
  <text x="264" y="268" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:13 INFO  nomaflow.sql_query step='customers' connector=sales</text>
  <text x="264" y="286" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:13 INFO  nomaflow.sql_query step='periods' connector=sales</text>
  <text x="254" y="330" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">File loaded:</text>
  <rect x="319.12" y="318" width="117" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="377.62" y="331.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ sales_2026-10.xlsx</text>
  <text x="470" y="330" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Files of the run</text>
  <rect x="554.16" y="318" width="107" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="607.66" y="331.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ load-rejects.csv</text>
  <rect x="240" y="374" width="720" height="112" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="394" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PREVIOUS RUNS</text>
  <rect x="254" y="402" width="692" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="416.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STARTED</text>
  <text x="414" y="416.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="564" y="416.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURATION</text>
  <text x="684" y="416.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BY</text>
  <text x="794" y="416.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="254" y="428" width="692" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="442.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 h ago</text>
  <rect x="414" y="431.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="444.0" y="442.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Succeeded</text>
  <text x="564" y="442.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">18 s</text>
  <text x="684" y="442.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="794" y="442.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4,806 row(s)</text>
  <rect x="254" y="454" width="692" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">yesterday</text>
  <rect x="414" y="457.0" width="46" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="437.0" y="468.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Failed</text>
  <text x="564" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 s</text>
  <text x="684" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="794" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">period 2026-09 is closed</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">User parameters</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">declared by the job</text>
  <line x1="200" y1="117.0" x2="254" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Live log</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">refreshed every 2 s</text>
  <line x1="200" y1="237.0" x2="254" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Previous runs</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click shows that run's log</text>
  <line x1="200" y1="417.0" x2="254" y2="436" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One file per step</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">steps without a path only</text>
  <line x1="1000" y1="77.0" x2="470" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
  <rect x="1000" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one run at a time</text>
  <line x1="1000" y1="147.0" x2="740" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
  <rect x="1000" y="310" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Files of the run</text>
  <text x="1010" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the file loaded, the rejects</text>
  <line x1="1000" y1="327.0" x2="661.16" y2="328" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
</svg>

---

## The job's page \{#page\}

| Part | Content |
|---|---|
| Title and description | The menu item's label, then the job's description. |
| Parameters | The [user parameters](#user-params) the job declares: a dropdown when the values are fixed, a text input otherwise, each pre-filled with its default. A required one carries `*`; an optional dropdown offers *(all)*. A parameter that accepts several values shows as checkboxes headed by **All**. |
| Files | One picker per `file_load` step that needs a file — **File for the step “load”**, with the sheet when the step names one. Accepted: `.xlsx`, `.xlsm`, `.csv`, `.txt`, `.tsv`. A step with its own path or a watched folder asks for nothing: it reads its file. |
| **Run** | Uploads the files and starts the run. *Pick the file(s) first.* or *“Company” is required.* when something is missing. One run at a time: while one is going, the button waits. |
| **Log** | The run's state and its log, refreshed every 2 seconds while the run is queued or running, the error in red. **Files of the run** offers the files it produced — the rejected rows of a load. |
| **File loaded** | Under the log, the file uploaded for the selected run, to download again. |
| **Previous runs** | The last 20 runs: start, state, duration, who ran it (or the trigger, for a scheduled run), rows and the start of the error. A click on a run shows its log. |

The run is an ordinary Nomaflow run: the operators see it in the [run history](../runs/history.md), its notifications and alerts apply.

---

## Putting a job in a menu \{#menu\}

In **Liberty Next → Screens → Menus**, add an item of type **Job (run it, follow its log)** and pick the job in **Target**: the dropdown lists every job with the first line of its description. No connector is set. See [Menu item types](../../framework/build/menus/item-types.md#job).

---

### A preset in the menu \{#preset\}

An item can pin one of the job's [presets](./schedules.md#schedulable-presets) with `params = { preset = "Licences" }`: the page then runs the job with that preset's parameters and step switches. One job thus gives several menu entries — *Collect security and SoD*, *Collect licences* —, each a preset. The menu item's label names the page.

### A link with values \{#link\}

`/job/<id>?<parameter>=<value>` opens the job's page with those [user parameters](#user-params) already filled in — `/job/sales-load?period=2026-10`. A link of a screen, a notification or a page can thus lead to the job ready to run; a value the job does not declare is ignored, and the permission `job:<id>` still applies.

---

## Who may run it \{#access\}

The item and its page need the permission `job:<id>` — in **Liberty Next → Administer → Access → Roles**, **Beyond the menus**, rule type **Job**, then the job. A deny (`!job:<id>`) hides the item even when the menu would show it. Superusers see every job.

Every holder of the permission sees **all** the runs of the job — the previous runs list, their logs and their files —, not only their own.

---

## User parameters \{#user-params\}

A job declares in `jobs.toml` what a user may set when running it from its page. Anything else is refused; the operator's other settings stay out of reach.

```toml title="jobs.toml"
[[jobs.user_params]]
name = "models"
label = "Explorer model (blank = every model)"
l = { fr = "Modèle Explorateur (vide = tous les modèles)" }
step = "refresh"
choices_from = "explorer_models:nomajde"
```

| Key | Meaning |
|---|---|
| `name` | The step argument the value is given to. |
| `label`, `l` | The label shown, per language. Default: the name. |
| `step` | The step that receives the value. Without it, the value goes to every step of the job. |
| `default` | The pre-filled value. |
| `required` | `true`: the job does not start without a value. |
| `choices` | A fixed list of values: the page shows a dropdown and refuses any other value. |
| `choices_from` | `explorer_models:<app>` — the Data Explorer models of an application; `query:<connector>/<query>:<value column>:<label column>` — the rows of a read query, such as the applications of Nomasx-1; or `test_suites` (`test_suites:<connector>` for one API connector) — the suites of [Tests](../../framework/build/tests.md). |
| `multiple` | `true`: several values may be ticked, with **All**. |

A blank value means *not set*: the step's own default applies. The same parameters show in the operators' **Run with parameters** window.

**One run per value.** A job that declares `for_each = "<parameter>"` runs once for each value ticked — one run after the other, each with a single value —; **All** takes every value the parameter offers. A job scheduled with the value `all` covers every value at each fire: every application of Nomasx-1, for example.

---

## What the applications ship \{#shipped\}

| Application | Folder | Jobs |
|---|---|---|
| Nomasx-1 | **Jobs** | Collect security and SoD, Collect licences, Licence audit report, Security & SoD report — see [Nomasx-1 jobs](../../nomasx1/jobs.md). |
| Nomajde | **Jobs** | Re-merge security (change package), Re-merge security (all roles), Refresh data dictionary (Explorer models) — see [Nomajde jobs](../../nomajde/jobs.md). |
| Sales demo | **Import** | Items file, Companies file, Sales file (one month), Refresh periods, Load the sample files — see [The sales demo](../../framework/demo-app.md#loads). |
