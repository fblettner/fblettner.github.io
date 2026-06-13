---
title: Config history & versioning
description: "Every config save is snapshotted, every screen save captures its dependency closure as a restorable bundle, version changes are logged, and the bundled release notes are readable in-app — all under Settings → History."
keywords: [Liberty Framework, config history, versioning, snapshot, restore, retention purge, upgrade history, release notes, bundle, dependency closure]
---

# Config history & versioning

Liberty keeps a history of your configuration. Every time you save a config file from the Settings UI, the previous state is snapshotted; every time you save a **screen**, the framework also captures that screen *with its dependencies* as a restorable bundle. You can diff any snapshot against what is live, restore it, prune the history, and see exactly when the application version last changed — all from **Settings → History**.

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
