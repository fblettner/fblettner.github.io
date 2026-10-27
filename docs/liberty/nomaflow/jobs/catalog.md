---
title: Catalogue — the Jobs page
description: "The Nomaflow Jobs page: the toolbar, the retention and missed-schedule panels, what a job card shows, switching a job on or off, Run now and Run with parameters (presets, steps, file uploads, log level), Cancel, Clone, Delete and Export."
keywords: [Nomaflow, jobs, catalogue, run now, run with parameters, presets, cancel, clone, delete, export, retention, missed schedules, Liberty Next]
---

# Catalogue — the Jobs page

The **Jobs** page lists every job of `jobs.toml` as a card, with its state, its schedule and its last run. It is reserved to superusers.

---

## At a glance

<svg viewBox="0 0 1200 414" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="job-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="job-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="job-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="job-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="386" rx="14" fill="url(#job-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Jobs</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">nomaflow — scheduled ETL + task jobs</text>
  <rect x="680" y="34" width="72" height="22" rx="5" fill="url(#job-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="716.0" y="48.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New job</text>
  <rect x="760" y="34" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="793.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Schedule</text>
  <rect x="834" y="34" width="27" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="847.5" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="240" y="97" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Filter:</text>
  <rect x="286" y="85" width="33" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="302.5" y="97.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">etl</text>
  <rect x="324" y="85" width="53" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="350.5" y="97.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="390" y="85" width="53" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="97.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">install</text>
  <rect x="240" y="110" width="720" height="26" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="127" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▸ Run history retention · 30 days · 100 per job</text>
  <rect x="240" y="142" width="720" height="26" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="159" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▸ Missed schedules · grace 10 min · every 5 min</text>
  <rect x="240" y="182" width="720" height="130" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="204" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">sales-load</text>
  <text x="256" y="222" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Monthly sales files into the facts table</text>
  <rect x="256" y="232" width="33" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="272.5" y="244.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">etl</text>
  <rect x="680" y="192" width="53" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="706.5" y="204.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">enabled</text>
  <rect x="760" y="192" width="63" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="791.5" y="204.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0 2 ∗ ∗ ∗</text>
  <rect x="840" y="192" width="118" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="899.0" y="204.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 preset schedule(s)</text>
  <text x="256" y="272" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">next  tomorrow 02:00   ·   last  SUCCEEDED · 4 min   ·   3 steps</text>
  <rect x="256" y="282" width="72" height="22" rx="5" fill="url(#job-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="292.0" y="296.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run now</text>
  <rect x="336" y="282" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="358.0" y="296.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <rect x="388" y="282" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="413.0" y="296.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Clone</text>
  <rect x="446" y="282" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="473.5" y="296.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="509" y="282" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="536.5" y="296.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>
  <rect x="240" y="324" width="720" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="346" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <rect x="680" y="334" width="58" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="709.0" y="346.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">disabled</text>
  <rect x="760" y="334" width="73" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="796.5" y="346.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Manual only</text>
  <text x="256" y="368" fill="#f87171" fontSize="9.5" fontFamily="system-ui, sans-serif">last  FAILED · 12 s   ·   5 steps</text>
  <rect x="10" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filter by tag</text>
  <text x="20" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chips of every tag in use</text>
  <line x1="210" y1="97.0" x2="286" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
  <rect x="10" y="140" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two policies</text>
  <text x="20" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retention · missed schedules</text>
  <line x1="210" y1="157.0" x2="240" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
  <rect x="10" y="280" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run now</text>
  <text x="20" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens Run with parameters when needed</text>
  <line x1="210" y1="297.0" x2="280" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
  <rect x="1000" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enabled switch</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click to pause the job's cron</text>
  <line x1="1000" y1="177.0" x2="710" y2="201" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
  <rect x="1000" y="240" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Last run</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click opens the run detail</text>
  <line x1="1000" y1="257.0" x2="560" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Card actions</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">edit, clone, delete, export ZIP</text>
  <line x1="1000" y1="347.0" x2="592" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
</svg>

---

## The toolbar \{#toolbar\}

| Element | Use |
|---|---|
| **+ New job** | Opens the job editor — see [Create a job](./create.md). |
| **Schedule** | Every schedule by next run — see [Schedules](./schedules.md#schedule-view). |
| **↻** | Reloads the list. |
| **Filter:** | One chip per tag in use; pick some to show only those jobs, **Clear** to show all. |

Below it, two folded panels hold the policies shared by every job: **Run history retention** ([Administration](../administration.md#retention)) and **Missed schedules** ([Schedules](./schedules.md#missed)).

---

## A job card \{#card\}

| Element | Meaning |
|---|---|
| Id, description, tags | From the job's settings. |
| **enabled** / **disabled** | Click to switch the job's own schedule on or off. **Run now** works either way, and preset schedules are not affected. |
| Schedule chip | The cron, or **Manual only**. |
| *N preset schedule(s)* | Presets that carry their own schedule. |
| next · last | The next scheduled run, and the state and duration of the last one — click it to open its detail. |
| *N steps* | The number of steps. |

The card's buttons:

| Button | Effect |
|---|---|
| **▶ Run now** | Runs the job. When there is something to choose — shared parameters, step arguments, several steps, a `file_load` step — it opens **Run with parameters** first. |
| **Cancel** | Shown while the job runs: cancels the run in progress. |
| **Edit** | Opens the job editor. |
| **Clone** | Asks for a new id (`<id>_copy` proposed) and creates a disabled copy without any schedule: neither the job's own nor its presets'. |
| **Delete** | Removes the job from `jobs.toml` after confirmation. Its run history is kept. |
| **Export** | Downloads a ZIP with the job's `jobs.toml` entry and a `MANIFEST.md`. The connectors and queries it uses are not included. |

---

## Run with parameters \{#run-with-parameters\}

The window applies to this run only — `jobs.toml` is not changed. Its labels are in English.

| Part | Content |
|---|---|
| **Preset** | Pick a saved preset and **Apply** it; **Save as preset…** saves the window's current state under a name, in `jobs.toml`. |
| **Shared params (apply to every step)** | The job's shared parameters, editable for this run. |
| **Steps** | One line per step with a checkbox to skip it (**All** / **None**); **Edit parameters** opens a step's arguments. A `file_load` step gets a file picker — see [Steps](../steps.md#file-load). |
| **Log level** | *WARNING — warnings + errors only*, *INFO — row counts + progress markers*, *DEBUG — full SQL of every query*. |
| **Run** | Uploads the chosen files, then starts the run. |

Typical uses: rerun only the step that failed, load one month again, run with `DEBUG` to see the SQL, run a preset by hand.

---

## Cancel \{#cancel\}

**Cancel** asks the run to stop. SQL, HTTP, file-load and `async` Python steps stop at once; the run ends **CANCELED**. A synchronous Python function cannot be interrupted: the run is marked cancelled and the function finishes on its own — see [Troubleshoot](../runs/troubleshoot.md#cancellation-doesnt-stop-my-step).
