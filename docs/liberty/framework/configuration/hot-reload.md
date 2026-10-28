---
title: Hot reload
description: "How Liberty Next applies configuration changes without a restart: Reload config (POST /admin/reload), the file watcher of [app] hot_reload and what it reloads per file, pools, Liberty Next → Administer → App, and what still needs a restart."
keywords: [Liberty Next, hot reload, reload config, admin reload, file watcher, hot_reload, pools, restart]
---

# Hot reload

Configuration changes apply without restarting the server, in two ways.

---

## Reload config \{#reload\}

**Reload config** at the top of every Liberty Next editor page — or `POST /admin/reload` (superuser) — re-reads every configuration file and rebuilds the server's connectors, screens, menus, dashboards, charts, jobs and notification rules from them. If the new files fail to load, the previous configuration stays active and the error is shown.

Requests in progress finish with the configuration they started with; the next ones use the new one.

---

## The file watcher \{#watcher\}

With **Hot reload** on in **Liberty Next → Administer → App** — the default — the server watches its configuration files and reloads the part concerned a moment after a file changes (a save from Settings, an edit on the server, a `git pull`):

| File | Reloaded |
|---|---|
| `menus.toml`, `screens.toml`, `charts.toml`, `dashboards.toml` | That part. |
| `dictionary.toml` | The connectors' column information and the screens. |
| `jobs.toml` | The jobs and their schedules. |
| `notifications.toml` | The notification rules. |
| `connectors.toml` | The connectors and their queries — **not the pools**. |

Changes made within half a second are applied together.

---

## Pools \{#pools\}

A pool change (address, password, size) is not applied by the watcher, so that a query in progress never loses its connection: after editing a pool, use **Reload config**.

---

## Liberty Next → Administer → App \{#app\}

Saving Liberty Next → Administer → App applies the licence, the AI assistant, OpenID Connect, the notifications and the UI defaults at once. The listening address, the port and the log level need a restart; so does the Oracle thick mode.

---

## What needs a restart \{#restart\}

| Change | How |
|---|---|
| Address, port, log level and Oracle thick mode in **Liberty Next → Administer → App** | `./liberty restart` or `liberty-ops restart`. |
| An environment variable (`.env`, the service's environment file) | A restart — `./liberty restart` recreates nothing; for a changed `.env`, `./liberty start`. |
| A plugin's Python code | A restart: modules are imported once. |
| A new release | `./liberty upgrade` — see [Upgrade and rollback](../../installation/upgrading.md). |
