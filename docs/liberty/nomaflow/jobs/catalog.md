---
title: Catalogue — the Jobs page
description: "The Nomaflow Jobs page: search and filters, the jobs grouped by application with the main jobs first, what a job line shows, switching a job on or off, Run now and Run with parameters (presets, parameters, several values, steps, file uploads, log level), Cancel, Clone, Delete and Export."
keywords: [Nomaflow, jobs, catalogue, run now, run with parameters, presets, cancel, clone, delete, export, retention, missed schedules, Liberty Next]
---

# Catalogue — the Jobs page

The **Jobs** page lists every job of `jobs.toml`, one line per job, grouped by application, with its last run, its schedule and its actions. It is reserved to superusers.

---

## At a glance

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfj-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfj-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfj-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="330" rx="14" fill="url(#nfj-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Jobs</text>
  <rect x="850" y="28" width="110" height="22" rx="5" fill="url(#nfj-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="905.0" y="42.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New job</text>
  <rect x="240" y="60" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="74.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search jobs (id, description, tag)…</text>
  <rect x="500" y="60" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="74.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">All applications ▾</text>
  <rect x="658" y="60" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="668" y="74.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Any status ▾</text>
  <rect x="776" y="60" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="786" y="74.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Any tag ▾</text>
  <text x="960" y="75" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">12 of 31 jobs</text>
  <text x="244" y="116" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">★ Main jobs  (2)</text>
  <line x1="240" y1="124" x2="960" y2="124" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="146" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <text x="420" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Collect everything for an application</text>
  <rect x="620" y="134" width="55" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="647.5" y="145.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="696" y="146" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">Manual only</text>
  <rect x="782" y="134" width="56" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="810.0" y="145.2" fill="#4a9eff" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="254" y="174" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <text x="420" y="174" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Nightly JD Edwards sync</text>
  <rect x="620" y="162" width="43" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="641.5" y="173.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="696" y="174" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <rect x="782" y="162" width="56" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="810.0" y="173.2" fill="#4a9eff" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="244" y="204" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ crm  (2)</text>
  <line x1="240" y1="212" x2="960" y2="212" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="234" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">crm-daily-pipeline</text>
  <text x="420" y="234" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pipeline of the day</text>
  <rect x="620" y="222" width="55" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="647.5" y="233.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="696" y="234" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">0 8 ∗ ∗ mon-fri</text>
  <rect x="782" y="222" width="56" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="810.0" y="233.2" fill="#4a9eff" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="254" y="262" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">crm-archive</text>
  <text x="420" y="262" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Archive closed deals</text>
  <rect x="620" y="250" width="51" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="645.5" y="261.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">CANCELED</text>
  <text x="696" y="262" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">Manual only</text>
  <rect x="782" y="250" width="56" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="810.0" y="261.2" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="244" y="292" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸ Framework  (8)</text>
  <line x1="240" y1="300" x2="960" y2="300" stroke="#1f2937" strokeWidth="1"/>
  <rect x="842" y="132" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="853.0" y="145.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="868" y="132" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="145.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="894" y="132" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="145.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="920" y="132" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="931.0" y="145.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <rect x="946" y="132" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="145.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="842" y="160" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="853.0" y="173.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="868" y="160" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="173.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="894" y="160" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="173.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="920" y="160" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="931.0" y="173.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <rect x="946" y="160" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="173.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="842" y="220" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="853.0" y="233.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="868" y="220" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="233.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="894" y="220" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="233.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="920" y="220" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="931.0" y="233.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <rect x="946" y="220" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="233.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="842" y="248" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="853.0" y="261.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="868" y="248" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="261.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="894" y="248" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="261.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="920" y="248" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="931.0" y="261.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <rect x="946" y="248" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="261.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="10" y="52" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="67" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search and filters</text>
  <text x="20" y="80" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kept in the browser</text>
  <line x1="210" y1="69.0" x2="240" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
  <rect x="10" y="112" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Main jobs</text>
  <text x="20" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the jobs tagged main</text>
  <line x1="210" y1="129.0" x2="244" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
  <rect x="10" y="210" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One group per app</text>
  <text x="20" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click to fold</text>
  <line x1="210" y1="227.0" x2="244" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
  <rect x="1000" y="100" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Last run</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click to open it</text>
  <line x1="1000" y1="117.0" x2="650" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
  <rect x="1000" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enable / disable</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no reload needed</text>
  <line x1="1000" y1="197.0" x2="810" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
  <rect x="1000" y="280" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">run, edit, clone, export…</text>
  <line x1="1000" y1="297.0" x2="950" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
</svg>

---

## Search and filters \{#toolbar\}

| Element | Use |
|---|---|
| **Search** | Finds a job by its id, its description or a tag. |
| **All applications**, **Any status**, **Any tag** | Narrow the list. Status: *Enabled*, *Disabled*, *Scheduled (enabled with a next run)*, *Running now*, *Last run failed*. |
| **Clear** | Resets the search and the filters. |
| *N of M jobs* | How many jobs the filters leave. |
| **+ New job** | Opens the job editor — see [Create a job](./create.md). |

The search and the filters are kept in the browser from one visit to the next. Two folded panels hold the policies shared by every job: **Run history retention** ([Administration](../administration.md#retention)) and **Missed schedules** ([Schedules](./schedules.md#missed)).

---

## Groups \{#groups\}

- **Main jobs** comes first: the jobs tagged `main`, the ones operators run most — the collection of an application, a nightly sync.
- Then one group per **application**, in alphabetical order: a job belongs to the application its tags or its id name (`nomasx1-collect-all` → Nomasx-1); the others go to **Framework**, last.

A click on a group's title folds or unfolds it.

---

## A job line \{#card\}

| Element | Meaning |
|---|---|
| Id, description | A click on the id opens the job editor. |
| Last run | The state of the last run; a click opens its detail. |
| Schedule | The cron, or **Manual only**, with the next run. |
| **enabled** / **disabled** | A click switches the job's own schedule on or off at once, without reloading the configuration. **Run now** works either way, and preset schedules are not affected. |

The icons at the end of the line:

| Icon | Effect |
|---|---|
| **Run now** | Runs the job. When there is something to choose — parameters, step arguments, several steps, a `file_load` step — it opens **Run with parameters** first. While the job runs, it becomes **Cancel**. |
| **Edit** | Opens the job editor. |
| **Clone** | Asks for a new id and creates a disabled copy without any schedule: neither the job's own nor its presets'. |
| **Export** | Downloads a ZIP with the job's `jobs.toml` entry and a `MANIFEST.md`. The connectors and queries it uses are not included. |
| **Delete** | Removes the job from `jobs.toml` after confirmation. Its run history is kept. |

---

## Run with parameters \{#run-with-parameters\}

The window applies to this run only — `jobs.toml` is not changed.

| Part | Content |
|---|---|
| **Preset** | Pick a saved preset and **Apply** it: the window first goes back to the job's saved values, then applies the preset — as the scheduler does. *(pick a preset…)* returns to the saved values. **Save as preset…** saves the window's current state under a name, in `jobs.toml`. |
| **Shared params (apply to every step)** | The job's shared parameters, editable for this run. A parameter offered to users shows as a dropdown — its choices may come from a query, such as the applications of Nomasx-1 —, or as checkboxes headed by **All** when several values are allowed. |
| **Steps** | One line per step with a checkbox to skip it (**All** / **None**); **Edit parameters** opens a step's arguments. A `file_load` step gets a file picker — see [Steps](../steps.md#file-load). |
| **Log level** | *WARNING — warnings + errors only*, *INFO — row counts + progress markers*, *DEBUG — full SQL of every query*. |
| **Run** | Uploads the chosen files, then starts the run. |

**Several values, several runs.** A job built to run *per value* — per application, per company — runs once for each value ticked, one run after the other, each with a single value; a failed value does not stop the next ones. **All** takes every value offered. In [Job Runs](../runs/history.md), each run shows the value it ran for.

Typical uses: rerun only the step that failed, load one month again, run with `DEBUG` to see the SQL, run a preset by hand, collect three applications in one go.

---

## Cancel \{#cancel\}

**Cancel** asks the run to stop. SQL, HTTP, file-load and `async` Python steps stop at once; the run ends **CANCELED**. A synchronous Python function cannot be interrupted: the run is marked cancelled and the function finishes on its own — see [Troubleshoot](../runs/troubleshoot.md#cancellation-doesnt-stop-my-step).
