---
title: Server log
description: "Monitoring → Server log in Liberty Next: the server log kept on disk and rotated by size, searched by level, module, text and period, an exception opened, one request followed, the matches exported, the files downloaded, and the log level of each module changed at once."
keywords: [Liberty Next, monitoring, server log, log file, rotation, search, level, module, request id, exception, export, log levels]
---

# Server log

**Monitoring → Server log** searches what the server has written: the framework, the applications and the libraries they use, whatever started the server. The log is kept on disk, in files rotated by size — 10 MB per file, the five previous files kept —, so it survives a restart. Only superusers see the Monitoring page.

---

## At a glance

<svg viewBox="0 0 1320 474" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="monlog-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="monlog-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="monlog-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="monlog-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="434" rx="14" fill="url(#monlog-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Monitoring</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Live</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Connected users, locks, pools and …</text>
  <rect x="450.5" y="74" width="204.5" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="459.5" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="469.5" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="486.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server log</text>
  <text x="486.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The log file: search, export, down…</text>
  <rect x="665.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">AI usage</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Who uses the assistant, the tokens…</text>
  <rect x="879.5" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="888.5" y="84" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <circle cx="898.5" cy="94" r="4" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="915.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Retention</text>
  <text x="915.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">What each store keeps, its size, a…</text>
  <rect x="236" y="126" width="230" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="141.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Search a message, a logger, an error, a request id…</text>
  <rect x="472" y="126" width="120" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="482" y="141.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">WARNING and above</text>
  <text x="580" y="141.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="598" y="126" width="120" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="141.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Any module</text>
  <text x="706" y="141.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="724" y="126" width="110" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="734" y="141.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Last 24 hours</text>
  <text x="822" y="141.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="990" y="126" width="94" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1037.0" y="141.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Download files</text>
  <rect x="939" y="126" width="46" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="962.0" y="141.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>
  <rect x="878" y="126" width="56" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="906.0" y="141.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload</text>
  <text x="236" y="168" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">184 entries (from 52,310 lines) · liberty.log 4.1 MB</text>
  <rect x="236" y="178" width="848" height="28" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="196" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">11/22, 10:42:11</text>
  <rect x="360" y="184" width="60" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="390.0" y="195.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ERROR</text>
  <text x="436" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">liberty.jobs</text>
  <text x="612" y="196" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">step 'load' failed: period 2026-02 is closed</text>
  <text x="1074" y="196" fill="#c084fc" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">[a91f03c2]</text>
  <rect x="236" y="206" width="848" height="28" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="224" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">11/22, 10:40:02</text>
  <rect x="360" y="212" width="60" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="390.0" y="223.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">WARNING</text>
  <text x="436" y="224" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">liberty.connectors.sql</text>
  <text x="612" y="224" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">slow query sales_get (8.2 s)</text>
  <text x="1074" y="224" fill="#c084fc" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">[5be2d0e1]</text>
  <rect x="236" y="234" width="848" height="28" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="252" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">11/22, 09:58:37</text>
  <rect x="360" y="240" width="60" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="390.0" y="251.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">WARNING</text>
  <text x="436" y="252" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security</text>
  <text x="612" y="252" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">user JDOE has no address book entry</text>
  <rect x="236" y="262" width="848" height="28" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="280" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">11/22, 09:00:00</text>
  <rect x="360" y="268" width="60" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="390.0" y="279.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">INFO</text>
  <text x="436" y="280" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">liberty.jobs</text>
  <text x="612" y="280" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">nightly_sync succeeded in 72 s</text>
  <text x="250" y="324" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Log levels per module</text>
  <text x="250" y="339" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Applied at once and saved to app.toml (●). Inherit = the parent module's level.</text>
  <text x="250" y="364" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">liberty ●</text>
  <rect x="850" y="352" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="366.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">INFO</text>
  <text x="988" y="366.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="250" y="390" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">liberty.jobs ●</text>
  <rect x="850" y="378" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="392.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">DEBUG</text>
  <text x="988" y="392.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="250" y="406" width="580" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="420.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">A module (liberty.jobs, nomasx1…)</text>
  <text x="818" y="420.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="850" y="406" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="420.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">DEBUG</text>
  <text x="988" y="420.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="1010" y="406" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="420.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Add</text>
  <rect x="236" y="304" width="848" height="136" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server log view</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the file on disk</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">text, level, module, period</text>
  <line x1="200" y1="167.0" x2="236" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a line</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens its exception</text>
  <line x1="200" y1="267.0" x2="236" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Levels per module</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">applied at once</text>
  <line x1="200" y1="417.0" x2="236" y2="393" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export, download</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the matches, the files</text>
  <line x1="1120" y1="57.0" x2="1040" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
  <rect x="1120" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Request id</text>
  <text x="1130" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click: that request only</text>
  <line x1="1120" y1="197.0" x2="1084" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
</svg>

---

## Searching \{#search\}

| Control | Effect |
|---|---|
| **Search** | Text in the message, the module, the exception or the request id. |
| Level | *Any level*, or a floor: *WARNING and above* keeps the warnings, the errors and the critical messages. |
| **Any module** | One module and its sub-modules — `liberty.jobs`, `nomasx1`. A name can be typed. |
| Period | *Last hour*, *Last 24 hours* (the default), *Last 7 days*, *Everything kept*. |
| **Reload** | Reads the files again. |

The filters are kept in the browser. The page shows the 500 newest matches — *N entries (from M lines)*, with the files read and their size —; when there are more, it says so: narrow the search.

A click on a line opens it: the full message and its exception. The request id in brackets after a message — the one an error page shows the user — keeps that request only: every line written while serving it.

The same message written many times in a row is kept once, followed by *(previous message repeated N times)*.

---

## Export and download \{#export\}

| Button | Gives |
|---|---|
| **Export** | The matching entries as a text file, oldest first — up to 100,000. |
| **Download files** | The log files themselves, current and previous, in a ZIP. |

---

## Log levels per module \{#levels\}

The card at the bottom sets how much each module writes. Pick a level for a module — *Inherit* takes its parent's —, or add a module by name. A change applies at once, without a restart, and is kept for the next start (● marks a module set this way). Raise a module to `DEBUG` while investigating, then set it back: a verbose module fills the files quickly.

---

## Related

- [The Monitoring page](./dashboard.md) — the live view.
- [Retention](./retention.md) — what the server keeps, and for how long.
