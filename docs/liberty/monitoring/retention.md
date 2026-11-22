---
title: Retention
description: "Monitoring → Retention in Liberty Next: every store the server keeps growing — job runs, job files, notifications, configuration versions, change packages, saved views, the server log — with its policy, its size, a dry-run Preview and Run now."
keywords: [Liberty Next, monitoring, retention, purge, job runs, job files, notifications, configuration versions, change packages, saved views, server log, disk space]
---

# Retention

**Monitoring → Retention** gathers in one place everything the server keeps and lets grow, with what is kept, where that is set, how much it takes, and a way to clean up now. Only superusers see it.

---

## At a glance

<svg viewBox="0 0 1320 552" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="monret-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="monret-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="monret-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="monret-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="512" rx="14" fill="url(#monret-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Monitoring</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Live</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Connected users, locks, pools and …</text>
  <rect x="450.5" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="459.5" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="469.5" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="486.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server log</text>
  <text x="486.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The log file: search, export, down…</text>
  <rect x="665.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">AI usage</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Who uses the assistant, the tokens…</text>
  <rect x="879.5" y="74" width="204.5" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#fb923c" strokeWidth="1.2"/>
  <rect x="888.5" y="84" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <circle cx="898.5" cy="94" r="4" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="915.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Retention</text>
  <text x="915.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">What each store keeps, its size, a…</text>
  <rect x="1028" y="126" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="140.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload</text>
  <text x="248" y="175" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Job runs</text>
  <text x="248" y="188" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Finished runs with their steps and logs</text>
  <text x="520" y="175" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Older than 30 days, or beyond 100 per job</text>
  <text x="520" y="188" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">jobs.toml [meta.retention]</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">12,480 runs</text>
  <rect x="932" y="167" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="181.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◉ Preview</text>
  <rect x="1010" y="167" width="64" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1042.0" y="181.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Run now</text>
  <line x1="236" y1="198" x2="1084" y2="198" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="215" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Job files</text>
  <text x="248" y="228" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Uploads, rejects, reports, exports…</text>
  <text x="520" y="215" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Older than 30 days</text>
  <text x="520" y="228" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">jobs.toml [meta.retention] files_days</text>
  <text x="800" y="221" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">312 files · 1.2 GB</text>
  <rect x="932" y="207" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="221.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◉ Preview</text>
  <rect x="1010" y="207" width="64" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1042.0" y="221.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Run now</text>
  <line x1="236" y1="238" x2="1084" y2="238" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="255" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="248" y="268" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Read notifications</text>
  <text x="520" y="255" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Read, older than 90 days</text>
  <text x="520" y="268" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">app.toml [notify] retention_days</text>
  <text x="800" y="261" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2,104 (1,980 read)</text>
  <rect x="932" y="247" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="261.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◉ Preview</text>
  <rect x="1010" y="247" width="64" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1042.0" y="261.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Run now</text>
  <line x1="236" y1="278" x2="1084" y2="278" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="295" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Config versions</text>
  <text x="248" y="308" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Config snapshots (the newest of each file is kept)</text>
  <text x="520" y="295" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Beyond 20 per file, or older than 90 days</text>
  <text x="520" y="308" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">job config-versions-purge</text>
  <text x="800" y="301" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">640 versions · 13 MB</text>
  <rect x="932" y="287" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◉ Preview</text>
  <rect x="1010" y="287" width="64" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1042.0" y="301.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Run now</text>
  <line x1="236" y1="318" x2="1084" y2="318" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="335" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Change packages</text>
  <text x="248" y="348" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Exported / promoted packages and import logs</text>
  <text x="520" y="335" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Kept (no age set)</text>
  <text x="520" y="348" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">app.toml [changesets] retention_days</text>
  <text x="800" y="341" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">38 packages, 12 import logs</text>
  <line x1="236" y1="358" x2="1084" y2="358" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="375" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">AI usage</text>
  <text x="248" y="388" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The assistant’s usage record: who, model, tokens, tools</text>
  <text x="520" y="375" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Older than 90 days</text>
  <text x="520" y="388" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">app.toml [ai] usage_retention_days</text>
  <text x="800" y="381" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">412 questions</text>
  <rect x="932" y="367" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◉ Preview</text>
  <rect x="1010" y="367" width="64" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1042.0" y="381.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Run now</text>
  <line x1="236" y1="398" x2="1084" y2="398" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="415" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Saved views</text>
  <text x="248" y="428" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The users' own views and analyses — never purged</text>
  <text x="520" y="415" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Kept</text>
  <text x="520" y="428" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace"></text>
  <text x="800" y="421" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">214 views</text>
  <line x1="236" y1="438" x2="1084" y2="438" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="455" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Documentation reports</text>
  <text x="248" y="468" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The reports generated, kept as downloaded</text>
  <text x="520" y="455" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Kept until deleted</text>
  <text x="520" y="468" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">.reports</text>
  <text x="800" y="461" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 files · 2 MB</text>
  <line x1="236" y1="478" x2="1084" y2="478" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="495" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Server log</text>
  <text x="248" y="508" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Rotated by size</text>
  <text x="520" y="495" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">10 MB per file, 5 older files</text>
  <text x="520" y="508" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">app.toml [app] log_file_max_mb / log_file_backups</text>
  <text x="800" y="501" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">6 files · 41 MB</text>
  <rect x="236" y="158" width="848" height="360" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Retention view</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the fourth card</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Every store</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what grows, in one place</text>
  <line x1="200" y1="187.0" x2="248" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The policy</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">and the setting that sets it</text>
  <line x1="200" y1="317.0" x2="520" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="20" y="470" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Never purged</text>
  <text x="30" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the users' saved views</text>
  <line x1="200" y1="487.0" x2="248" y2="418" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Preview</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a dry run, nothing deleted</text>
  <line x1="1120" y1="137.0" x2="968" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="1120" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run now</text>
  <text x="1130" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">after a confirmation</text>
  <line x1="1120" y1="237.0" x2="1042" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Size</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rows, files, megabytes</text>
  <line x1="1120" y1="347.0" x2="1010" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
</svg>

---

## The stores \{#stores\}

One line per store: its name and what goes, the policy in force with the setting that fixes it, the size, then the buttons. **Reload**, at the top, reads the figures again.

| Store | What goes | Set in |
|---|---|---|
| **Job runs** | Finished runs with their steps and logs, beyond the days kept or the cap per job. | Nomaflow — [Run history retention](../nomaflow/administration.md#retention). |
| **Job files** | Uploaded files, rejects reports, reports, exports, watched-folder archives. | Nomaflow — **Files kept (days)** in the same panel. |
| **Notifications** | Read notifications older than the days set. | Liberty Next → Administer → App → Notifications — [Keep read notifications](../nomaflow/notifications.md#smtp). |
| **AI usage** | The assistant's usage record — who, model, tokens, tools — older than the days set. | Liberty Next → Administer → App → AI Assistant — [Usage record kept](./ai-usage.md#retention), 90 days by default. |
| **Config versions** | The configuration snapshots beyond the number kept per file, or too old; the newest of each file always stays. | The [`config-versions-purge` job](../nomaflow/bundled-jobs.md), else 20 per file and 90 days. |
| **Change packages** | Exported or promoted packages and import logs older than the days set. Drafts are never touched. | Kept by default. |
| **Saved views** | The users' own views and analyses. | Never purged — shown for their size. |
| **Documentation reports** | The implementation and technical reports produced, kept as downloaded. | Kept until deleted from the [Documentation reports](../framework/configuration/documentation-reports.md#copies) page. |
| **Server log** | Rotated by size: 10 MB per file, five older files. | Liberty Next → Administer → App → [Server log](../framework/build/settings-app.md#server-log). |

Job runs and job files show when Nomaflow runs on the server.

---

## Preview and Run now \{#actions\}

| Button | Effect |
|---|---|
| **Preview** | A dry run: *Would delete N item(s)*, with the size. Nothing is deleted. |
| **Run now** | After a confirmation, applies the policy at once: *Deleted N item(s)*. |

The buttons show only where there is something to purge: not for saved views and the server log, nor for notifications and change packages while they are kept without limit. The automatic clean-ups keep running on their own schedule.

---

## Related

- [Server log](./server-log.md) — search what the server wrote.
- [Nomaflow administration](../nomaflow/administration.md) — the jobs' retention policy.
