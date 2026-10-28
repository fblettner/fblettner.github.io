---
title: Run a job from an application's menu
description: "A job menu item puts a Nomaflow job in an application's menu: the user picks the files and parameters the job asks for, runs it, follows its log live and finds the previous runs — without access to Nomaflow itself. The job permission, user parameters, files and history."
keywords: [Nomaflow, job menu item, run a job, job page, file upload, user parameters, user_params, job permission, live log, Liberty Next]
---

# Run a job from an application's menu

A **job** menu item puts a Nomaflow job in an application's menu, for users who do not administer Nomaflow: the person who loads the month's sales file, the security officer who collects the security data before a review. The item opens the job's own page — the files it needs, its parameters, **Run**, the log followed live and the previous runs. Nothing else of Nomaflow is shown.

---

## At a glance

<svg viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jbp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jbp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jbp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jbp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="472" rx="14" fill="url(#jbp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">▶ Load a month of sales</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Load one month of invoice lines; a closed period is refused.</text>
  <rect x="240" y="74" width="720" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="94" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Company ∗</text>
  <rect x="254" y="100" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="114.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">(all) ▾</text>
  <text x="420" y="94" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">File for the step “load” · sheet “Sales”</text>
  <rect x="420" y="100" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="114.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sales_2026-03.xlsx</text>
  <rect x="696" y="100" width="80" height="22" rx="5" fill="url(#jbp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="736.0" y="114.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Run</text>
  <rect x="240" y="146" width="720" height="168" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="166" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Log</text>
  <rect x="312" y="154" width="51" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="337.5" y="165.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Running</text>
  <rect x="254" y="176" width="692" height="92" rx="6" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="194" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:11  load: 4 812 read · 4 806 inserted · 6 rejected</text>
  <text x="264" y="212" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:12  load: partitions replaced 2026-03 / 00001, 00002</text>
  <text x="264" y="230" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:13  customers: 3 rows</text>
  <text x="264" y="248" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:13  periods: 14 rows</text>
  <text x="254" y="290" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Files of the run</text>
  <rect x="254" y="294" width="107" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="307.5" y="306.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ load-rejects.csv</text>
  <rect x="240" y="324" width="720" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="344" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Previous runs</text>
  <rect x="254" y="354" width="692" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="368.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STARTED</text>
  <text x="414" y="368.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="524" y="368.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURATION</text>
  <text x="634" y="368.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BY</text>
  <text x="774" y="368.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="254" y="380" width="692" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="395.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 h ago</text>
  <rect x="414" y="384.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="444.0" y="395.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Succeeded</text>
  <text x="524" y="395.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">18 s</text>
  <text x="634" y="395.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">j.martin</text>
  <text x="774" y="395.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4,806 row(s)</text>
  <rect x="254" y="408" width="692" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="423.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">yesterday</text>
  <rect x="414" y="412.0" width="46" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="437.0" y="423.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Failed</text>
  <text x="524" y="423.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 s</text>
  <text x="634" y="423.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">a.dupont</text>
  <text x="774" y="423.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">period 2026-02 is closed</text>
  <rect x="10" y="86" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="101" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">User parameters</text>
  <text x="20" y="114" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">declared by the job</text>
  <line x1="210" y1="103.0" x2="254" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One file per step</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">only steps without a path</text>
  <line x1="1000" y1="47.0" x2="620" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one run at a time</text>
  <line x1="1000" y1="167.0" x2="776" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
  <rect x="10" y="210" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Live log</text>
  <text x="20" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">refreshed every 2 s</text>
  <line x1="210" y1="227.0" x2="254" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
  <rect x="1000" y="280" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Files of the run</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rejected rows to download</text>
  <line x1="1000" y1="297.0" x2="380" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
  <rect x="1000" y="400" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">History</text>
  <text x="1010" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click shows that run's log</text>
  <line x1="1000" y1="417.0" x2="946" y2="410" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
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

In **Settings → Menus**, add an item of type **Job (run it, follow its log)** and pick the job in **Target**: the dropdown lists every job with the first line of its description. No connector is set. See [Menu item types](../../framework/build/menus/item-types.md#job).

---

### A preset in the menu \{#preset\}

An item can pin one of the job's [presets](./schedules.md#schedulable-presets) with `params = { preset = "Licences" }`: the page then runs the job with that preset's parameters and step switches. One job thus gives several menu entries — *Collect security and SoD*, *Collect licences* —, each a preset. The menu item's label names the page.

---

## Who may run it \{#access\}

The item and its page need the permission `job:<id>` — in **Settings → Access → Roles**, **Beyond the menus**, rule type **Job**, then the job. A deny (`!job:<id>`) hides the item even when the menu would show it. Superusers see every job.

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
| `choices_from` | `explorer_models:<app>` — the Data Explorer models of an application; or `query:<connector>/<query>:<value column>:<label column>` — the rows of a read query, such as the applications of Nomasx-1. |
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
