---
title: Config history & versioning
description: "Every config save is snapshotted, every screen save captures its dependency closure as a restorable bundle, version changes are logged, and the bundled release notes are readable in-app — all under Liberty Next → Deploy → History."
keywords: [Liberty Framework, config history, versioning, snapshot, restore, retention purge, upgrade history, release notes, bundle, dependency closure]
---

# Config history & versioning

Liberty keeps a history of your configuration. Every time you save a config file from the Liberty Next pages, the previous state is snapshotted; every time you save a **screen**, the framework also captures that screen *with its dependencies* as a restorable bundle. You can diff any snapshot against what is live, restore it, prune the history, and see exactly when the application version last changed — all from **Liberty Next → Deploy → History**.

---

## At a glance

<svg viewBox="0 0 1320 444" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="chist-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="chist-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="chist-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="chist-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="404" rx="14" fill="url(#chist-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">History</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="74" width="183" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="237" y="75" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="262.0" y="89.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Files</text>
  <line x1="288" y1="79" x2="288" y2="93" stroke="#334155" strokeWidth="1"/>
  <text x="319.5" y="89.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Screens</text>
  <line x1="351" y1="79" x2="351" y2="93" stroke="#334155" strokeWidth="1"/>
  <text x="385.0" y="89.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Upgrades</text>
  <rect x="244" y="120" width="214" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="137" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <rect x="422" y="125" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="136.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">29</text>
  <rect x="244" y="151" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="168" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">screens.toml</text>
  <rect x="422" y="156" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="167.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5</text>
  <rect x="244" y="182" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="199" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">menus.toml</text>
  <rect x="422" y="187" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="198.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5</text>
  <rect x="244" y="213" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="230" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">dashboards.toml</text>
  <rect x="422" y="218" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="229.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="244" y="244" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="261" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">actions.toml</text>
  <rect x="422" y="249" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="260.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="244" y="275" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="292" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">dictionary.toml</text>
  <rect x="422" y="280" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="291.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <rect x="244" y="306" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="323" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">pools.toml</text>
  <rect x="422" y="311" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="322.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <rect x="244" y="337" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="354" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">app.toml</text>
  <rect x="422" y="342" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="353.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="236" y="112" width="230" height="260" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="480" y="112" width="604" height="30" rx="7" fill="rgba(74,158,255,0.08)" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="131" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <text x="506" y="131" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">v12</text>
  <text x="540" y="131" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21/2026, 9:59 PM ·</text>
  <rect x="645.96" y="119" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="663.46" y="130.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">save</text>
  <rect x="992" y="116" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1004" y="131" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓</text>
  <rect x="1020" y="116" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032" y="131" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <rect x="1048" y="116" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060" y="131" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="480" y="146" width="604" height="150" rx="0" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="161" fill="#f87171" fontSize="8.5" fontFamily="ui-monospace, monospace">v12</text>
  <text x="514" y="161" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">→ live</text>
  <text x="502" y="176" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="524" y="176" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="536" y="176" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">[connectors.crm]</text>
  <text x="502" y="191" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="524" y="191" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="536" y="191" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">type = "sql"</text>
  <text x="502" y="206" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="524" y="206" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="536" y="206" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">pool = "crm"</text>
  <rect x="481" y="211" width="602" height="14" fill="rgba(255,69,58,0.14)"/>
  <text x="502" y="221" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="524" y="221" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="536" y="221" fill="#f87171" fontSize="8.5" fontFamily="ui-monospace, monospace">max_rows = 1000</text>
  <rect x="481" y="226" width="602" height="14" fill="rgba(50,215,75,0.14)"/>
  <text x="502" y="236" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="524" y="236" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="536" y="236" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">max_rows = 5000</text>
  <text x="502" y="251" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <text x="524" y="251" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <text x="536" y="251" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="502" y="266" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">6</text>
  <text x="524" y="266" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">6</text>
  <text x="536" y="266" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">[connectors.crm.queries.customers_get]</text>
  <text x="502" y="281" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">7</text>
  <text x="524" y="281" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">7</text>
  <text x="536" y="281" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">sql = "SELECT id, name FROM customers"</text>
  <rect x="480" y="304" width="604" height="30" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="323" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="506" y="323" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">v11</text>
  <text x="540" y="323" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21/2026, 9:58 PM ·</text>
  <rect x="645.96" y="311" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="663.46" y="322.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">save</text>
  <rect x="992" y="308" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1004" y="323" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓</text>
  <rect x="1020" y="308" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032" y="323" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <rect x="1048" y="308" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060" y="323" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="480" y="340" width="604" height="30" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="359" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="506" y="359" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">v10</text>
  <text x="540" y="359" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">11/21/2026, 9:57 PM ·</text>
  <rect x="645.96" y="347" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="663.46" y="358.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">save</text>
  <rect x="992" y="344" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1004" y="359" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓</text>
  <rect x="1020" y="344" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032" y="359" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <rect x="1048" y="344" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060" y="359" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="480" y="376" width="604" height="30" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="395" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="506" y="395" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">v9</text>
  <text x="540" y="395" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">11/20/2026, 3:03 PM ·</text>
  <rect x="645.96" y="383" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="663.46" y="394.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">save</text>
  <rect x="992" y="380" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1004" y="395" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓</text>
  <rect x="1020" y="380" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032" y="395" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <rect x="1048" y="380" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060" y="395" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three views</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">files, screens, upgrades</text>
  <line x1="200" y1="87.0" x2="236" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chist-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Config files</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with their number of versions</text>
  <line x1="200" y1="217.0" x2="244" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chist-arrow)"/>
  <rect x="1120" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Version actions</text>
  <text x="1130" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">download, restore, delete</text>
  <line x1="1120" y1="77.0" x2="1072" y2="127" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chist-arrow)"/>
  <rect x="1120" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Diff with the live file</text>
  <text x="1130" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">removed in red, added in green</text>
  <line x1="1120" y1="237.0" x2="1084" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chist-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One card per version</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click to open its diff</text>
  <line x1="1120" y1="397.0" x2="1084" y2="358" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chist-arrow)"/>
</svg>

---

## What gets captured

| When you… | The framework snapshots… |
|---|---|
| Save any config file (connectors, dictionary, menus, pools, …) | The file's previous bytes, before the save overwrites it. |
| Save a screen in the Designer | A **bundle**: the screen *plus its dependency closure* — the queries, lookups, sequences and dictionary entries it relies on. |
| Run the assistant, a rename, a move, a clone or an import | The whole configuration, before the operation. |

Snapshots are content-addressed, so saving a file unchanged is a no-op — the history only grows when something really changed. Capturing is best-effort: it never blocks or fails a save.

---

## Liberty Next → Deploy → History

The **History** tab has three modes:

- **Files** — pick a config file on the left, with its number of versions; its versions list on the right as cards (number, date, origin of the snapshot). Expand a version to **diff it against the live file** — removed lines in red, added lines in green —; the three buttons of the card **Download**, **Restore** or **Delete** it.
- **Screens** — pick a screen (`app.screen`); each save is a bundle card. Expand it to inspect the captured dependency closure grouped by kind (connectors, queries, dictionary entries, lookups, menus, …), then **Download bundle (.zip)** or **Restore screen + dependencies**.
- **Upgrades** — the application's version history (see [below](#upgrade-history)).

### Restoring

Restore is safe and reversible — the current state is snapshotted *first*, so a restore can itself be undone:

- A **file restore** writes the chosen version back and reloads the connectors so it is live immediately.
- A **bundle restore** re-applies the screen and its captured dependencies together. Entities you have marked `override = true` on this install are **preserved**, so a local customisation survives the revert.

### Pruning

Delete removes a single snapshot (or clears one file's / one screen's whole history). The live configuration is never touched by a delete — only the history is.

---

## Retention purge job

History grows over time, so a bundled job — **`config-versions-purge`**, every night at 03:00 — trims it, file history and screen bundles alike. It keeps the most recent versions per file and drops anything older, by **two independent rules**:

- **Max versions** — keep only the N most recent versions of each file (default **20**).
- **Max age** — drop versions older than D days (default **90**).

The two rules are OR-combined, and the single newest version of each file is always kept. A rule set to `0` is disabled. Its schedule and its `max_versions` / `max_age_days` parameters are changed in the Nomaflow job editor like any other job's. [Monitoring → Retention](../../monitoring/retention.md) shows the limits in force and the number of versions, with **Preview** and **Run now**.

---

## Upgrade history

Each time the running application version changes, the framework records it under **Liberty Next → Deploy → History → Upgrades**: a row per component — **Framework** (Liberty Next) and **Apps** (Liberty Apps) — with the version it moved from and to. The first run of a component is logged as an *install*; later version changes as an *upgrade*. The list is recorded automatically at startup and is idempotent, so restarting at the same version adds nothing. Selecting a row shows that version's section of the release notes.

---

## Release notes, in-app

The **Liberty Next → Document → Release notes** page is the full changelog bundled with the build: the framework's notes and, when Liberty Apps is installed, the apps' — a switcher at the top picks one, with the version running. The versions are a panel on the left, each with its date and its number of entries; the picked version shows each entry as a card titled by the sentence it opens on. **Search every version…** finds an entry by its words across all the versions and says which version it belongs to. The text is **bilingual** — the French notes when the UI is in French, English otherwise.

---

## Tips & best practices

- **Restore before you debug a bad save.** If a config change broke a screen, the fastest fix is often to restore the previous version and reload, then re-apply the change carefully.
- **Use a bundle restore to move a screen back as a whole.** Restoring the screen file alone can leave it pointing at a query you also changed; the bundle restore reverts the screen *and* its dependencies together.
- **Schedule the purge.** Without it the history grows unbounded; a nightly purge with the defaults (20 versions / 90 days) keeps it healthy.
- **Check Upgrades after a deployment.** It is the quickest confirmation that the new framework or apps version actually took effect.
