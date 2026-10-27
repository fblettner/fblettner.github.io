---
title: Apps
description: "What an app is in Liberty Next — a connector with a menu, shown in the app picker — what belongs to it (queries, dictionary scope, screens, menu, charts), how users switch between apps, and how an app is copied, moved between environments or installed ready-made."
keywords: [Liberty Next, app, app picker, connector, menu, show_in_switcher, home, clone, packages, licensed apps]
---

# Apps

In Liberty Next, an **app** is a **connector that has a menu**: its name appears in the app picker at the top of the sidebar, and picking it shows its menu. There is no separate app object to create — the connector is the app.

---

## What belongs to an app \{#scope\}

Everything an app shows is filed under its connector's name:

| Element | Where it is set | Stored under |
|---|---|---|
| Queries (tables, queries, sequences, lookups) | Settings → Connectors | The connector itself. |
| Dictionary entries, enums, lookups, sequences | Settings → Dictionary, the connector's **scope** | `[connectors.<app>.*]` — on top of the shared entries. |
| Screens | Settings → Screens, the app's chip | `[screens.<app>.<id>]` |
| Menu | Settings → Menus, the app's chip | `[menus.<app>]` |
| Charts | Settings → Charts, the connector's scope | `[charts.<app>.<id>]` |

Dashboards and shared actions have a single namespace; a menu item of the app opens them by id. Nomaflow jobs are not tied to an app.

---

## The app picker \{#picker\}

The picker sits at the top of the sidebar:

- it lists the apps whose menu the user can see, and appears only when there are at least two;
- picking an app switches the sidebar menu and the workspace tabs to that app — it is a switch, not a filter;
- the choice is remembered in the browser;
- when the app's connector has several pools, a **Pool** picker next to it chooses the database instance every screen runs against — see [Connectors → Multi-pool](../connectors.md#multi-pool).

A connector's **show_in_switcher** (on by default) and **home** settings decide whether it is offered in the picker and which menu item opens first. See [Make a connector an app](../build/menus/make-connector-an-app.md).

---

## Creating an app \{#create\}

1. **Settings → Connectors** — create the SQL connector and its pool, then its queries (the CRUD wizard writes them from a table).
2. **Settings → Screens** — build the screens on these queries.
3. **Settings → Menus** — **+ Add scope**, pick the connector, add the items that open the screens.
4. Back on the connector, check **show_in_switcher** and, optionally, set **home**.

The [Screen Creation Assistant](../build/screen-assistant.md) chains steps 1 to 3 for one table. The [CRM tutorial](../tutorial-crm/01-setup.md) builds a complete app.

---

## Copying and moving an app \{#copy\}

| Need | Tool |
|---|---|
| A second app built on an existing one (another database, a test copy). | **Clone** on the connector: copies the queries with the dictionary scope, screens, menu, charts and dashboards under the new name. See [Clone a query or a connector](../build/queries/clone.md). |
| Move an app, or part of it, to another environment (development → production). | **Packages**: pick the screens, menus, dashboards… to ship, download the ZIP with everything they depend on, import it on the target. See [Packages](../build/packages.md). |
| Rename a connector, a screen or a query. | **Rename** in its editor — every reference is rewritten. |

---

## Ready-made apps \{#ready-made\}

**Nomasx-1** and **Nomajde** are delivered as ready-made apps with their Nomaflow jobs. They are installed and upgraded as described in [Deploy the licensed apps](../../installation/deploy-prebuilt-apps.md). Their screens, menus and dictionary are visible and editable in Settings like any app; an entry marked **override** keeps local changes through upgrades.

---

## Who sees an app \{#access\}

An app appears for a user when its menu has items that user may open. Roles decide which menu items, screens and queries each user reaches — see [Roles & permissions](../build/secure/roles-and-permissions.md) and [Menus → Permissions and roles](../build/menus/permissions-and-roles.md).

---

## What's next

- [Make a connector an app](../build/menus/make-connector-an-app.md) — the two settings that put a connector in the picker.
- [Plugins](./plugins.md) — Python functions called from jobs and screen actions.
- [Translations](./i18n.md) — labels per language.
