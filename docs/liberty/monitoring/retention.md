---
title: Retention
description: "Monitoring → Retention in Liberty Next: every store the server keeps growing — job runs, job files, notifications, configuration versions, change packages, saved views, the server log — with its policy, its size, a dry-run Preview and Run now."
keywords: [Liberty Next, monitoring, retention, purge, job runs, job files, notifications, configuration versions, change packages, saved views, server log, disk space]
---

# Retention

**Monitoring → Retention** gathers in one place everything the server keeps and lets grow, with what is kept, where that is set, how much it takes, and a way to clean up now. Only superusers see it.

---

## At a glance

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mrt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mrt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mrt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mrt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="400" rx="14" fill="url(#mrt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Monitoring</text>
  <rect x="240" y="56" width="193" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Live</text>
  <line x1="285" y1="61" x2="285" y2="75" stroke="#334155" strokeWidth="1"/>
  <text x="323.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Server log</text>
  <rect x="363" y="57" width="69" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="397.5" y="71.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Retention</text>
  <rect x="240" y="96" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="112" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Job runs</text>
  <text x="252" y="126" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Older than 30 days, or beyond 100 per job</text>
  <text x="620" y="119" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">12,480 runs · 84 MB</text>
  <rect x="790" y="104" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.0" y="118.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Preview</text>
  <rect x="868" y="104" width="80" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="908.0" y="118.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="240" y="138" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="154" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Job files</text>
  <text x="252" y="168" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Older than 30 days</text>
  <text x="620" y="161" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">312 file(s) · 1.2 GB</text>
  <rect x="790" y="146" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.0" y="160.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Preview</text>
  <rect x="868" y="146" width="80" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="908.0" y="160.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="240" y="180" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="196" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="252" y="210" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Read, older than 90 days</text>
  <text x="620" y="203" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2,104 (1,980 read)</text>
  <rect x="790" y="188" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.0" y="202.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Preview</text>
  <rect x="868" y="188" width="80" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="908.0" y="202.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="240" y="222" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="238" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Config versions</text>
  <text x="252" y="252" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Beyond 20 per file, or older than 90 days</text>
  <text x="620" y="245" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">640 versions</text>
  <rect x="790" y="230" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.0" y="244.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Preview</text>
  <rect x="868" y="230" width="80" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="908.0" y="244.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="240" y="264" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="280" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Change packages</text>
  <text x="252" y="294" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Kept (no age set)</text>
  <text x="620" y="287" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">38 packages, 12 import logs</text>
  <rect x="240" y="306" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="322" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Saved views</text>
  <text x="252" y="336" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Kept</text>
  <text x="620" y="329" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">214 views</text>
  <rect x="240" y="348" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="364" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Server log</text>
  <text x="252" y="378" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">10 MB per file, 5 older files</text>
  <text x="620" y="371" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4.1 MB</text>
  <text x="940" y="404" fill="#4ade80" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Would delete 1,204 item(s) · 9 MB</text>
  <rect x="10" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Every store</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what grows, in one place</text>
  <line x1="210" y1="117.0" x2="240" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mrt-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The policy</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what is kept</text>
  <line x1="210" y1="217.0" x2="252" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mrt-arrow)"/>
  <rect x="1000" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Preview</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a dry run, nothing deleted</text>
  <line x1="1000" y1="107.0" x2="825" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mrt-arrow)"/>
  <rect x="1000" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run now</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">after a confirmation</text>
  <line x1="1000" y1="177.0" x2="908" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mrt-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Never purged</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the users' saved views</text>
  <line x1="210" y1="347.0" x2="252" y2="359" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mrt-arrow)"/>
</svg>

---

## The stores \{#stores\}

| Store | What goes | Set in |
|---|---|---|
| **Job runs** | Finished runs with their steps and logs, beyond the days kept or the cap per job. | Nomaflow — [Run history retention](../nomaflow/administration.md#retention). |
| **Job files** | Uploaded files, rejects reports, reports, exports, watched-folder archives. | Nomaflow — **Files kept (days)** in the same panel. |
| **Notifications** | Read notifications older than the days set. | Settings → App → Notifications — [Keep read notifications](../nomaflow/notifications.md#smtp). |
| **Config versions** | The configuration snapshots beyond the number kept per file, or too old; the newest of each file always stays. | The [`config-versions-purge` job](../nomaflow/bundled-jobs.md), else 20 per file and 90 days. |
| **Change packages** | Exported or promoted packages and import logs older than the days set. Drafts are never touched. | Kept by default. |
| **Saved views** | The users' own views and analyses. | Never purged — shown for their size. |
| **Server log** | Rotated by size: 10 MB per file, five older files. | — |

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
