---
title: Config history & versioning
description: "Every config save is snapshotted, every screen save captures its dependency closure as a restorable bundle, version changes are logged, and the bundled release notes are readable in-app — all under Settings → History."
keywords: [Liberty Framework, config history, versioning, snapshot, restore, retention purge, upgrade history, release notes, bundle, dependency closure]
---

# Config history & versioning

Liberty keeps a history of your configuration. Every time you save a config file from the Settings UI, the previous state is snapshotted; every time you save a **screen**, the framework also captures that screen *with its dependencies* as a restorable bundle. You can diff any snapshot against what is live, restore it, prune the history, and see exactly when the application version last changed — all from **Settings → History**.

---

## At a glance

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="chi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="chi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="chi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="chi-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="360" rx="14" fill="url(#chi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · History</text>
  <rect x="720" y="28" width="183" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="721" y="29" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="746.0" y="43.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Files</text>
  <line x1="772" y1="33" x2="772" y2="47" stroke="#334155" strokeWidth="1"/>
  <text x="803.5" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Screens</text>
  <line x1="835" y1="33" x2="835" y2="47" stroke="#334155" strokeWidth="1"/>
  <text x="869.0" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Upgrades</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="190" height="290" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="82" width="178" height="24" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="98" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <text x="256" y="128" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">dictionary.toml</text>
  <text x="256" y="158" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">menus.toml</text>
  <text x="256" y="188" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">screens.toml</text>
  <text x="256" y="218" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">dashboards.toml</text>
  <text x="256" y="248" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">charts.toml</text>
  <rect x="446" y="74" width="514" height="140" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="458" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">27/10/2026 14:05</text>
  <text x="596" y="94" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <rect x="458" y="106" width="240" height="70" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="708" y="106" width="240" height="70" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="466" y="122" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">version</text>
  <text x="716" y="122" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">live file</text>
  <text x="466" y="140" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">- max_rows = 1000</text>
  <text x="716" y="140" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">+ max_rows = 5000</text>
  <rect x="458" y="184" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="491.0" y="198.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Download</text>
  <rect x="530" y="184" width="61" height="22" rx="5" fill="url(#chi-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="560.5" y="198.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Restore</text>
  <rect x="597" y="184" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="624.5" y="198.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="446" y="224" width="514" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="458" y="244" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">27/10/2026 11:42</text>
  <text x="596" y="244" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <rect x="446" y="264" width="514" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="458" y="284" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">26/10/2026 17:10</text>
  <text x="596" y="284" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">bob</text>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three views</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">files, screens, upgrades</text>
  <line x1="1000" y1="47.0" x2="960" y2="40" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chi-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Config files</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one list per file</text>
  <line x1="210" y1="217.0" x2="240" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chi-arrow)"/>
  <rect x="1000" y="110" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Diff</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">version vs live file</text>
  <line x1="1000" y1="127.0" x2="960" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chi-arrow)"/>
  <rect x="1000" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Restore</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">written back, reloaded</text>
  <line x1="1000" y1="247.0" x2="682" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chi-arrow)"/>
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

## Settings → History

The **History** tab has three modes:

- **Files** — pick a config file on the left; its versions list on the right as cards. Expand a version to **diff it against the live file** side by side, then **Download**, **Restore** or **Delete** it.
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

History grows over time, so the framework ships a bundled job — **`purge config versions`** — that trims it. It keeps the most recent versions per file and drops anything older, by **two independent rules**:

- **Max versions** — keep only the N most recent versions of each file (default **20**).
- **Max age** — drop versions older than D days (default **90**).

The two rules are OR-combined, and the single newest version of each file is always kept. A rule set to `0` is disabled. Schedule it from the NomaFlow job editor like any other job — for example a nightly run — and adjust `max_versions` / `max_age_days` in its parameters.

---

## Upgrade history

Each time the running application version changes, the framework records it under **Settings → History → Upgrades**: a row per component — **Framework** (Liberty Next) and **Apps** (Liberty Apps) — with the version it moved from and to. The first run of a component is logged as an *install*; later version changes as an *upgrade*. The list is recorded automatically at startup and is idempotent, so restarting at the same version adds nothing. Selecting a row shows that version's section of the release notes.

---

## Release notes, in-app

The **Settings → Release notes** tab is the full changelog bundled with the build. It reads the framework's release notes (and the apps' notes, when Liberty Apps is installed), with a per-version table of contents and a component switcher when more than one set is present. The changelog text is **bilingual** — it shows the French notes when the UI is in French, English otherwise.

---

## Tips & best practices

- **Restore before you debug a bad save.** If a config change broke a screen, the fastest fix is often to restore the previous version and reload, then re-apply the change carefully.
- **Use a bundle restore to move a screen back as a whole.** Restoring the screen file alone can leave it pointing at a query you also changed; the bundle restore reverts the screen *and* its dependencies together.
- **Schedule the purge.** Without it the history grows unbounded; a nightly purge with the defaults (20 versions / 90 days) keeps it healthy.
- **Check Upgrades after a deployment.** It is the quickest confirmation that the new framework or apps version actually took effect.
