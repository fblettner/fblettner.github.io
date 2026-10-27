---
title: Settings UI
description: "The Liberty Next Settings page: one editor per configuration file, grouped per connector (connectors, dictionary, actions, menus, screens, charts, dashboards, reports, notifications) or shared (pools, theme, access, app, history, release notes), how a save is validated and applied, and Reload config."
keywords: [Liberty Next, Settings UI, editors, connectors, dictionary, actions, menus, screens, charts, dashboards, reports, notifications, pools, theme, access, app, history, reload]
---

# Settings UI

**Settings** in the sidebar opens the editors of the configuration. Each editor is a form built from the same model the server uses to load the file, so what it accepts is what the server accepts. The page is reserved to superusers.

---

## The tabs \{#tabs\}

**Per connector** — each editor first asks which connector (application or data source) it works on:

| Tab | Edits | See |
|---|---|---|
| **Connectors** | Queries, tables, sequences and lookups of SQL connectors; endpoints of API connectors; connector settings. | [Connectors](../connectors.md), [Queries](../build/queries/overview.md) |
| **Dictionary** | Entries, enums, lookups, sequences. | [Dictionary](../dictionary.md) |
| **Actions** | Shared actions reused by screens. | [Actions and lifecycle](../build/screens/actions-and-lifecycle.md) |
| **Menus** | The sidebar tree of each application. | [Menus](../build/menus/overview.md) |
| **Screens** | Grids, dialogs, tabs, actions — the Screen Designer. | [Screens](../build/screens/overview.md) |
| **Charts** | Saved charts. | [Charts](../charts.md) |
| **Dashboards** | Dashboards and their widgets. | [Dashboards](../dashboards.md) |
| **Explorer** | The data explorer's model. | — |
| **Reports** | Custom reports. | — |
| **Notifications** | Notification rules. | [Notifications](../../nomaflow/notifications.md) |

**Shared** — install-wide:

| Tab | Edits | See |
|---|---|---|
| **Pools** | Database connections: address, credentials, size, schema and DB-link maps. | [Connectors](../connectors.md) |
| **Theme** | Colours and branding. | — |
| **Access** | Users and roles. | [Users](../build/secure/users.md), [Roles and permissions](../build/secure/roles-and-permissions.md) |
| **App** | `app.toml`: application settings, licence, AI assistant, notifications (e-mail), OpenID Connect, PDF branding. | [App settings](../build/settings-app.md) |
| **History** | Versions of each configuration file and of each screen, upgrade history and reports. | [Config history](./config-history.md) |
| **Release notes** | The release notes of the running version. | — |

**Reload config**, at the right of the tabs, re-reads every configuration file into the running server.


---

## Saving \{#save\}

1. **Save** sends the edited configuration; the server validates it against its model and refuses an invalid one with the reason.
2. The file is written. A version of the previous content is kept in **History**.
3. The change is applied: at once when the server watches its files (`[app] hot_reload = true`, the setting shipped in `app.toml`), or with **Reload config** otherwise. A reload rebuilds the connectors from the new files; if they fail, the previous configuration stays active.

The pools are not reloaded by the file watcher, so that a running query never loses its connection: after changing a pool, use **Reload config**. Settings → **App** applies its own changes at once, except the address, port and log level, which need a restart.

Files are rewritten from the saved model: comments written by hand in a file are not kept.

---

## Outside the editors \{#outside\}

- The **Monitoring** page, in the sidebar, shows the server's live state — see [The Monitoring page](../../monitoring/dashboard.md).
- Nomaflow jobs are edited on the Jobs pages — see [Create a job](../../nomaflow/jobs/create.md).
- `GET /admin/config/raw` reads a file as it is on disk; there is no raw-text editor. Edit the file on the server and **Reload config** when an editor lacks a field.
- Every editor talks to `/admin/config/<section>/parsed` — see [REST API](../../references/rest-api.md#admin-config).

---

## Tips \{#tips\}

- Save one editor at a time and check the result before moving to the next.
- Keep the configuration under version control on the server; **History** keeps the recent versions, not the whole story.
- Prefer the editors to hand edits: they refuse what the server would refuse.
