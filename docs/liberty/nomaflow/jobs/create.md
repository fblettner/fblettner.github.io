---
title: Create a job
description: "The Nomaflow job editor, a tab per job: the Job section (id, schedule, timezone, tags, enabled, timeout, position in the installation, keep on upgrade), presets and their schedules, the retry policy, alerts, shared parameters, what the user may set when starting the job, the step pipeline — and how unsaved changes are kept."
keywords: [Nomaflow, create job, job editor, schedule, timezone, timeout, install_step, override, presets, retry policy, alerts, shared params, user parameters, user_params, for_each, unsaved changes, steps, jobs.toml, Liberty Next]
---

# Create a job

**New job** on the Jobs page, or **Edit** on a job's line, opens the job editor in a tab of its own — *Job · &lt;id&gt;*, one per job edited. **The job is drawn as its flow** — **Start**, a card per step with its kind, its name and what it does, **End** — and what is picked is edited beside it: the job itself at the start, or a step. One **Save** at the top — active once something changed, with *unsaved changes* beside it — writes the whole job to `jobs.toml`, reloads the scheduler and goes back to the Jobs page. An invalid job is refused with a message at the top of the editor.

The edits stay in the tab while the user goes to another page and comes back: the tab then carries an orange dot. **Back to jobs**, closing the tab, closing every tab, switching the language or reloading the browser asks first — *Unsaved changes*, with **Lose the changes** or **Stay**. See [Unsaved changes](#unsaved).

Only the jobs that changed are rewritten: the other jobs of `jobs.toml` keep their text as it is — comments, `${…}` references, `step_defaults` —, and the saved job gets its `${…}` references back wherever its value still matches.

---

## At a glance

<svg viewBox="0 0 1320 728" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfed-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfed-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfed-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfed-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="688" rx="14" fill="url(#nfed-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Job · sales-load</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Job-level settings + the step pipeline</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Back to jobs</text>
  <text x="1008" y="101" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">unsaved changes</text>
  <rect x="1018" y="86" width="62" height="22" rx="5" fill="url(#nfed-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1049.0" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="122" width="400" height="566" rx="10" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <line x1="254" y1="140" x2="632" y2="140" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="162" x2="632" y2="162" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="184" x2="632" y2="184" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="206" x2="632" y2="206" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="228" x2="632" y2="228" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="250" x2="632" y2="250" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="272" x2="632" y2="272" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="294" x2="632" y2="294" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="316" x2="632" y2="316" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="338" x2="632" y2="338" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="360" x2="632" y2="360" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="382" x2="632" y2="382" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="404" x2="632" y2="404" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="426" x2="632" y2="426" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="448" x2="632" y2="448" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="470" x2="632" y2="470" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="492" x2="632" y2="492" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="514" x2="632" y2="514" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="536" x2="632" y2="536" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="558" x2="632" y2="558" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="580" x2="632" y2="580" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="602" x2="632" y2="602" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="624" x2="632" y2="624" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="646" x2="632" y2="646" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="668" x2="632" y2="668" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <rect x="544" y="132" width="84" height="22" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="556" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">−</text>
  <text x="586" y="147" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="614" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">+</text>
  <rect x="256" y="180" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="270" y="197" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="284" y="197" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start</text>
  <line x1="330" y1="193" x2="356" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M354,189 L360,193 L354,197 Z" fill="#334155"/>
  <circle cx="343.0" cy="193" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="343.0" y="196.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="362" y="169" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="372" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILE_LOAD</text>
  <text x="372" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">load-sales</text>
  <text x="372" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">→ sales.fact_sales</text>
  </g>
  <line x1="256" y1="271" x2="282" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M280,267 L286,271 L280,275 Z" fill="#334155"/>
  <circle cx="269.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="247" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="261" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL_QUERY</text>
  <text x="298" y="275" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refresh-totals</text>
  <text x="298" y="288" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sales.totals_refresh</text>
  </g>
  <line x1="256" y1="349" x2="282" y2="349" stroke="#334155" strokeWidth="2"/>
  <path d="M280,345 L286,349 L280,353 Z" fill="#334155"/>
  <circle cx="269.0" cy="349" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="352.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="325" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="339" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTIFY</text>
  <text x="298" y="353" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="298" y="366" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="440" y1="349" x2="466" y2="349" stroke="#334155" strokeWidth="2"/>
  <path d="M464,345 L470,349 L464,353 Z" fill="#334155"/>
  <circle cx="453.0" cy="349" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="453.0" y="352.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="472" y="336" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="353" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="500" y="353" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">End</text>
  <rect x="654" y="122" width="426" height="566" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="668" y="144" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">⛓  Job</text>
  <text x="668" y="164" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="668" y="169" width="193" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="183.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">sales-load</text>
  <text x="873" y="175" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">The id is fixed once a job exists — it keys</text>
  <text x="873" y="185.5" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">the run history.</text>
  <text x="668" y="211" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="668" y="216" width="398" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="230.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Monthly sales files into the facts table</text>
  <text x="668" y="254" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Schedule (cron)</text>
  <rect x="668" y="261" width="40" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="688.0" y="274.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Manual</text>
  <rect x="712" y="261" width="40" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="732.0" y="274.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Hourly</text>
  <rect x="756" y="261" width="36" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="774.0" y="274.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Daily</text>
  <rect x="796" y="261" width="40" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="816.0" y="274.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Weekly</text>
  <rect x="840" y="261" width="45" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="862.5" y="274.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Monthly</text>
  <rect x="668" y="286" width="398" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="300.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <text x="668" y="322" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">Next runs · 11/23/2026, 2:00:00 AM · 11/24/2026, 2:00:00 AM …</text>
  <text x="668" y="340" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TIMEZONE</text>
  <rect x="668" y="345" width="193" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="359.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Europe/Paris</text>
  <text x="873" y="340" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TAGS</text>
  <rect x="873" y="345" width="193" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="883" y="359.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="879" y="348" width="50" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="886" y="359.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">sales ✕</text>
  <rect x="934" y="348" width="40" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="941" y="359.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">etl ✕</text>
  <text x="668" y="382" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TIMEOUT (SECONDS)</text>
  <rect x="668" y="387" width="193" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="401.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">14400</text>
  <rect x="873" y="393" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M875.5,398.5 L877.8,400.8 L881.8,396" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="890" y="402" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Enabled</text>
  <text x="668" y="422" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">A run still going after this is stopped.</text>
  <text x="668" y="432.5" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Blank: 4 hours.</text>
  <text x="668" y="454" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RUN AT INSTALLATION, IN POSITION</text>
  <rect x="668" y="459" width="193" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="473.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="873" y="459" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="890" y="468" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Keep this job as it is on upgrade</text>
  <text x="668" y="494" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Blank: not part of the installation. With a</text>
  <text x="668" y="504.5" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">number, the installation runs this job</text>
  <text x="668" y="515.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">once, the lowest number first.</text>
  <text x="873" y="494" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">An upgrade then leaves the whole job as</text>
  <text x="873" y="504.5" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">saved here.</text>
  <rect x="664" y="538" width="406" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="672" y="552" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Presets &amp; schedules</text>
  <rect x="664" y="562" width="406" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="672" y="576" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Retry policy</text>
  <rect x="664" y="586" width="406" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="672" y="600" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Alerts</text>
  <rect x="664" y="610" width="406" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="672" y="624" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Shared params</text>
  <rect x="664" y="634" width="406" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="672" y="648" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">What the user may set when starting it</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start = the job</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its settings open beside</text>
  <line x1="200" y1="137.0" x2="260" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ on a link</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">inserts a step at that place</text>
  <line x1="200" y1="227.0" x2="337.0" y2="199" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Long flows wrap</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on the next row; zoom − / % / +</text>
  <line x1="200" y1="317.0" x2="254" y2="271" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A step card</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click opens its fields here</text>
  <line x1="200" y1="417.0" x2="306" y2="371" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One Save</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes the job, back to the list</text>
  <line x1="1120" y1="93.0" x2="1018" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ready-made schedules</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or a five-field cron</text>
  <line x1="1120" y1="217.0" x2="1066" y2="271" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Timeout</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the whole run stops after it</text>
  <line x1="1120" y1="317.0" x2="861" y2="398" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Installation and upgrade</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">position · keep as it is</text>
  <line x1="1120" y1="397.0" x2="1066" y2="470" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="520" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="535" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Policies, run parameters</text>
  <text x="1130" y="548" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">further down the panel</text>
  <line x1="1120" y1="537.0" x2="1070" y2="628" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
</svg>

---

## The sections \{#sections\}

### Job

| Field | Notes |
|---|---|
| **Id** | Letters, digits, `-` and `_`. Fixed once the job exists — it keys the run history. To rename, **Clone** under the new id, then delete the old job. |
| **Description** | Shown on the job's line and on its page. |
| **Schedule (cron)** | Ready-made choices (Manual, Hourly, Daily, Weekly, Monthly) or a five-field cron; **Next runs** previews the next five. Blank: manual only. See [Schedules](./schedules.md). |
| **Timezone** | The IANA name the schedule is evaluated in. |
| **Tags** | Free labels, used by the filter of the Jobs page. |
| **Enabled** | Switches the job's own schedule on or off. |
| **Timeout (seconds)** | A run still going after this is stopped. Blank: 4 hours. |
| **Run at installation, in position** | Blank: the job is not part of the installation. With a number, installing the application runs this job once, the lowest number first — the databases, then the schema, then the reference data. |
| **Keep this job as it is on upgrade** | An upgrade of the application leaves the whole job as saved here. Unticked, its steps are refreshed from the product and only the installation's own settings are kept (enabled, schedule, presets…). |

### Presets & schedules

Presets are saved from **Run with parameters → Save as preset…**. Here each one can get its own **Schedule (cron)**, **Timezone** and **Schedule enabled** — see [Schedulable presets](./schedules.md#schedulable-presets).

### Retry policy

**Retry failed steps**, then **Attempts** (tries in all), **Backoff** (`fixed` or `exponential`) and **Base seconds** between tries. The policy applies to each step.

### Alerts

**Send alerts** with **On failure** sends a notification to the **Recipients** when a run fails, in the bell and by e-mail. Write recipients as `user:alice`, `role:ops` or `email:ops@example.com` — an entry without a prefix is taken as an e-mail address. **Warn if a run exceeds (minutes)** sends them a second notification when a run lasts at least that long, whatever its outcome. **Must have succeeded by** sets a deadline (`07:00`, in the job's timezone): on a day the job is scheduled, if no run has succeeded by then, the recipients get *Job &lt;id&gt; is late* — still running, failed, or never started. For several jobs at once or other events, use a notification rule: see [Notifications](../notifications.md#job-alerts).

### Shared params

Name / value pairs merged into the arguments of every `python` step (a step's own value wins). They also appear, editable, in **Run with parameters**.

### What the user may set when starting it \{#user-params\}

The parameters the job's page asks for when a user starts it [from an application's menu](./run-from-menu.md) — and the choices shown for them in **Run with parameters**. A user can set nothing else. **Add a parameter** adds a card:

<svg viewBox="0 0 1320 626" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfup-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfup-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfup-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfup-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="60" width="880" height="538" rx="14" fill="url(#nfup-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="220" y="20" width="104" height="34" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="234" y="34" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Nomaflow</text>
  <text x="234" y="46" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Jobs</text>
  <text x="312" y="42" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="332" y="20" width="162" height="34" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="346" y="41" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="362" y="41" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Job · sales-report</text>
  <circle cx="470.8" cy="37" r="3.5" fill="#fb923c"/>
  <text x="484.8" y="41" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="240" y="92" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">What the user may set when starting it</text>
  <text x="240" y="110" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">The parameters the job's page asks for when a user starts it from the menu — and the choices shown for them in Run with parameters. A user can set nothing else.</text>
  <rect x="240" y="138" width="840" height="268" rx="8" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="158" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">company</text>
  <rect x="1046" y="146" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="160" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="254" y="180" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NAME</text>
  <rect x="254" y="185" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="199.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">company</text>
  <text x="528" y="180" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="528" y="185" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="199.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Company</text>
  <text x="802" y="180" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">GOES TO</text>
  <rect x="802" y="185" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="812" y="199.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Every step</text>
  <text x="1052" y="199.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="254" y="220" width="812" height="52" rx="6" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="264" y="235" fill="#94a3b8" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">IN THE OTHER LANGUAGES</text>
  <text x="393.5" y="235" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Left blank, the text above is shown.</text>
  <text x="264" y="258" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">French</text>
  <text x="364" y="244" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Label</text>
  <rect x="364" y="246" width="688" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="374" y="259.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Société</text>
  <text x="254" y="286" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CHOICES</text>
  <rect x="254" y="291" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="305.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The rows of a query</text>
  <text x="504" y="305.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="528" y="286" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="528" y="291" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="305.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">sales</text>
  <text x="778" y="305.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="802" y="286" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">QUERY</text>
  <rect x="802" y="291" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="812" y="305.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">companies_get</text>
  <text x="1052" y="305.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="254" y="326" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VALUE COLUMN</text>
  <rect x="254" y="331" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="345.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">COMPANY_CODE</text>
  <text x="528" y="326" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL COLUMN</text>
  <rect x="528" y="331" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="345.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">COMPANY_NAME</text>
  <text x="254" y="366" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DEFAULT</text>
  <rect x="254" y="371" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="385.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="528" y="377" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="545" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Required</text>
  <rect x="802" y="377" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M804.5,382.5 L806.8,384.8 L810.8,380" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="819" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Several values</text>
  <text x="802" y="400" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Shown as checkboxes, with All.</text>
  <rect x="240" y="416" width="840" height="78" rx="8" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="436" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">lang</text>
  <text x="294" y="436" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">· Language — Langue</text>
  <rect x="1046" y="424" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="438" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="254" y="458" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CHOICES</text>
  <rect x="254" y="463" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="477.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">A fixed list</text>
  <text x="504" y="477.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="528" y="458" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VALUES</text>
  <rect x="528" y="463" width="70" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="477.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">fr</text>
  <rect x="602" y="464" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="612.0" y="478" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="632" y="463" width="70" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="642" y="477.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">en</text>
  <rect x="706" y="464" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="716.0" y="478" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="736" y="465" width="45" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="758.5" y="477.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <rect x="240" y="506" width="107" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="293.5" y="520.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add a parameter</text>
  <text x="240" y="546" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ONE RUN PER VALUE OF</text>
  <rect x="240" y="551" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="565.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">company</text>
  <text x="448" y="565.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="476" y="558" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">When that parameter holds several values (or "all"), the job runs once per value, one after another.</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A tab per job edited</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">orange dot: changes not saved</text>
  <line x1="200" y1="83.0" x2="470.8" y2="41" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Name, label, step</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the argument and who receives it</text>
  <line x1="200" y1="177.0" x2="254" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Label per language</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">blank: the label above</text>
  <line x1="200" y1="267.0" x2="254" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="20" y="470" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A fixed list</text>
  <text x="30" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the page refuses other values</text>
  <line x1="200" y1="487.0" x2="254" y2="474" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="20" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One run per value</text>
  <text x="30" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one after another</text>
  <line x1="200" y1="577.0" x2="240" y2="562" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="1120" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where the choices come from</text>
  <text x="1130" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">typed · list · query · models · suites</text>
  <line x1="1120" y1="277.0" x2="1074" y2="302" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Several values</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ticked on the page, with All</text>
  <line x1="1120" y1="397.0" x2="960" y2="382" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
</svg>

| Field | Notes |
|---|---|
| **Name** | The argument the value is given to (`company`, `apps_id`). |
| **Label**, then **In the other languages** | The label the page shows, then the same label per language — left blank, the label above is shown. Default: the name. |
| **Goes to** | The step that receives the value; **Every step** by default. |
| **Choices** | *A value typed freely*; *A fixed list* (**Values**, one per row: the page refuses any other value); *The rows of a query* (**Connector**, **Query**, **Value column**, **Label column**); *The Explorer models of an application* (**Application**); *The test suites* (**Of the connector**, or **Every suite**). |
| **Default** | The pre-filled value. |
| **Required** | The job does not start without a value. |
| **Several values** | Shown as checkboxes, with **All**. |
| **One run per value of** | Below the cards: a parameter that holds several values (or `all`) runs the job once per value, one after another. *None: one run* by default. |

The card's bin removes the parameter. Saving writes exactly what was loaded plus the change: a choices source the editor does not know is kept as written, and what is blank or unticked is left out of `jobs.toml`.

### Steps

The **+** on a link of the flow inserts a step at that place, among the types `sql_copy`, `sql_query`, `python`, `ldap_sync`, `http`, `call_job`, `file_load`, `file_export`, `report`, `notify`. A click on a step's card opens it beside the flow: its **Step name**, the fields of its type, and its icons — **Up**, **Down**, **Clone step**, **Delete**. A step can be *Turned off for this install*: it never runs, even when a run or a preset selects every step. A long flow continues on the next row, and the zoom (− / % / +) is kept on the device. The fields of each type are on [Steps](../steps.md).

---

## Only in jobs.toml \{#toml-only\}

A few settings have no field in the editor; set them in `jobs.toml`:

| Key | Default | Meaning |
|---|---|---|
| `log_level` (job) | `INFO` | The level of scheduled runs: `WARNING`, `INFO` or `DEBUG`. A manual run picks its own in **Run with parameters**. |
| `enabled` (step) | `true` | `false` always skips the step. |
| `timeout_seconds` (step) | `3600` | The step stops after this time. |
| `pool` (`sql_query`, `sql_copy` endpoints) | — | Another pool of the connector — see [Steps](../steps.md#sql-query). |

```toml title="jobs.toml"
[[jobs]]
id = "sales-load"
description = "Monthly sales files into the facts table"
schedule = "0 2 * * *"
timezone = "Europe/Paris"
tags = ["etl"]
log_level = "INFO"

[jobs.params]
period = "2026-10"

[jobs.retry]
attempts = 3
backoff = "exponential"
base_seconds = 60

[[jobs.steps]]
type = "file_load"
name = "load-sales"
# … see Steps → File load
```

---

## Unsaved changes \{#unsaved\}

The job editor follows the rule of every editor of Liberty Next — the Settings builders and their windows, a data grid in bulk edit, an open record form:

- **Moving to another page loses nothing**: the page keeps its tab, edits included — also in single-tab mode and when the tab limit is reached, where the oldest tab with nothing unsaved closes instead, and when switching application closes the tabs (see [Display settings](../../framework/build/settings-app.md#display)).
- **A tab that holds unsaved changes carries an orange dot** — *Changes not saved yet — kept while this tab stays open*.
- **What would lose them asks first**: closing that tab, **Close all tabs** (*N open pages hold changes that are not saved*), switching the language (every open page is drawn again); the browser itself asks before a reload or a closed window.
- Nothing is asked when nothing is unsaved.

---

## Tips \{#tips\}

- Give each step a short verb-noun name (`load-sales`, `refresh-totals`): it is what the run detail shows.
- Keep one job per business flow; chain jobs with a `call_job` step rather than copying steps.
- Save, then run once by hand with **Run with parameters** in `DEBUG` before enabling the schedule.
