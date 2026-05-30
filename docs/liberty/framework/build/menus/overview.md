---
title: Menus — overview
description: "The Menus page, the flat-items-linked-by-parent model, the four leaf kinds (query / endpoint / dashboard / page), and how attaching a menu turns a connector into an app."
keywords: [Liberty Framework, menus, MenusBuilder, app, navigation, tree, folder, leaf, items, parent]
---

# Menus — overview

A **menu** in Liberty is what the user sees in the left navigation panel when they open one of your apps. It groups screens, endpoints, dashboards and routes into a tree of folders and leaves.

Three things are worth knowing up front:

| Fact | Implication |
|---|---|
| There is **no separate "app" object** in Liberty. | An "app" is just a **connector that has a menu attached** *and* whose `show_in_switcher` flag is on. Both conditions are required for the top app switcher to show its tile. |
| Menus are stored as a **flat list of items** linked by `parent`. | The tree is assembled by the backend — easier to hand-edit, round-trips cleanly through TOML, drag operations only ever mutate one list. |
| Every menu key is a connector name (`[menus.<connector>]`). | The connector named `crm` carries the menu under `[menus.crm]`; the screen `customers` on `crm` is reached from a leaf with `target = "customers_get"`. |

The page that manages menus is **Settings → Menus**.

---

## The Menus page at a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="mov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#mov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Menus</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="80" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="128" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="168" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde</text>
  <rect x="216" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="256" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="306" y="78" width="280" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="446" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add a menu for a connector</text>
  <rect x="700" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="740" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="788" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="828" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>

  <text x="40" y="130" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">[menus.crm] · 7 items</text>
  <rect x="600" y="118" width="80" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="640" y="133" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Folder</text>
  <rect x="686" y="118" width="70" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="721" y="133" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Item</text>
  <rect x="762" y="118" width="64" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="794" y="133" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Clone</text>
  <rect x="832" y="118" width="100" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="882" y="133" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🔗 Find usages</text>

  <rect x="40" y="156" width="400" height="200" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="176" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TREE</text>
  <text x="56" y="198" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">▾ 🛡 Security</text>
  <text x="80" y="216" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Users</text>
  <text x="80" y="234" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Roles</text>
  <text x="56" y="256" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">▾ 💼 Pipeline</text>
  <text x="80" y="274" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Customers</text>
  <text x="80" y="292" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📊 Deals dashboard</text>
  <text x="56" y="314" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Reports</text>
  <text x="56" y="338" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">↑ ↓ ← →  reorder · indent · outdent</text>

  <rect x="452" y="156" width="508" height="200" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="468" y="176" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSPECTOR · Customers</text>
  <text x="468" y="200" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">id=customers</text>
  <text x="468" y="218" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">label=Customers</text>
  <text x="468" y="236" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">parent=pipeline</text>
  <text x="468" y="254" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">type=query</text>
  <text x="468" y="272" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">connector=(uses the app's — crm)</text>
  <text x="468" y="290" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">target=customers_get</text>
  <text x="468" y="308" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">icon=users</text>
  <text x="468" y="326" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">l.fr=Clients</text>
  <text x="468" y="344" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">roles=[user, manager]</text>
</svg>

Three regions:

| Region | What it carries |
|---|---|
| **Top scope bar** | One chip per app (a connector that has a menu). Click a chip → its tree loads below. The *＋ Add a menu for a connector* button registers a new connector under Menus. *Discard* / *Save* on the right commit or revert page-wide edits. |
| **Tree (left column)** | The selected app's menu tree. Click a row to select it for editing. On hover, action icons appear over the row's right edge — *Move up / down*, *Indent / Outdent*, *Add child*, *Delete*. A filter input narrows the list. |
| **Inspector (right column)** | The full editor for the selected item — a generic form over the `MenuItem` schema. Fields adapt to the selected `type` (a folder shows fewer fields than a leaf). |

---

## What a menu carries

The schema's top-level shape:

| Field | Notes |
|---|---|
| `label` | The app's display name. Falls back to the connector name. Shown in the top app switcher. |
| `items` | A flat list of menu items, linked by their `parent` field. |

Each item:

| Field | Required | What it does |
|---|---|---|
| `id` | yes | Unique inside this menu. Referenced by children's `parent`. |
| `parent` | no | Pick a folder, or leave blank for a top-level item. |
| `label` | yes | The sidebar text. |
| `l` | no | Per-language label overrides — `l.fr`, `l.de`, etc. |
| `icon` | no | A [Lucide icon](https://lucide.dev) name (`shield`, `users`, `chart-bar`, …). |
| `type` | no | Blank = folder. Otherwise one of `query`, `endpoint`, `dashboard`, `page` (see [Item types](./item-types.md)). |
| `connector` | no | Connector hosting the target. Blank = the app's own connector (the menu key). |
| `target` | conditional | Required on every leaf; ignored on folders. |
| `params` | no | Fixed parameters passed to the target when the item opens. |
| `roles` | no | Restrict to these roles. Empty = visible whenever the user can run the target. |

---

## Folder vs leaf

The `type` field decides:

| Setting | Behaviour |
|---|---|
| `type` blank | The item is a **folder** — groups children. No `target`, no `connector`, no `params`. A folder is hidden when none of its descendants are visible (the runtime collapses empty folders). |
| `type` set | The item is a **leaf** — points at a thing the user can open. Must have a `target`. |

Folders can nest indefinitely. Leaves can't have children — they're terminal nodes.

---

## The four leaf kinds

| `type` | Opens | `target` is | `connector` |
|---|---|---|---|
| **`query`** | A screen (TableView) — uses the screen wired to this query. | A SELECT query name (`customers_get`). | The connector that owns the query. Blank = the app's. |
| **`endpoint`** | The HttpRunner — fires an API connector endpoint. | An endpoint name. | The API connector. Blank = the app's. |
| **`dashboard`** | A dashboard (charts + KPIs). | A dashboard id (from `[dashboards.*]`). | Must NOT be set (dashboards live in their own flat namespace). |
| **`page`** | A registered frontend route (a custom feature area, e.g. `/nomaflow`). | The route path. | Must NOT be set (the target is a route, not a connector resource). |

The schema validator enforces:

- A leaf needs a `target` — saving fails without one.
- A `dashboard` or `page` leaf with a `connector` is rejected (misconfiguration).
- A folder with `target` / `connector` / `params` is rejected (those fields only make sense on leaves).

---

## Save and reload

The *Save* button validates the whole `MenusFile` (unique ids, parents exist, no cycles), writes `menus.toml` and triggers a hot reload. New menus appear in the top switcher immediately — no process restart.

The validation is strict on three things:

| Check | Why |
|---|---|
| Every `parent` reference must point at an existing item. | A dangling parent would orphan the subtree. |
| No cycles (a parent chain that loops). | An infinite-loop guard. |
| No duplicate `id` within the same menu. | Children reference parents by id; duplicates break the link. |

Cross-menu duplicates are fine — `[menus.crm.security]` and `[menus.nomasx1.security]` coexist without conflict.

---

## How a connector becomes an app

**A connector becomes visible in the top app switcher only when both conditions are true:**

1. A menu exists — `[menus.<connector>]` is set up in *Settings → Menus*.
2. `show_in_switcher = true` on the connector — set in *Settings → Connectors → \<connector> → Settings*.

Miss either one and the connector exists but doesn't appear in the switcher. Setting up the menu first and **then** ticking `show_in_switcher` is the usual order.

Note: the Connectors page's own *Apps* / *Data sources* grouping is based on menu existence alone — connectors with a menu but `show_in_switcher = false` still show under *Apps* there. That grouping is an internal Settings-UI affordance; the user-facing top switcher is what `show_in_switcher` gates.

The next page covers the wiring from both sides.

---

## Permission pruning

When the user opens the app, `GET /api/menus` returns the tree **filtered to what the user can run**:

- Each leaf's underlying permission (`sql:<connector>:<target>` for `query`, `api:<connector>:<target>` for `endpoint`, see [Permissions and roles](./permissions-and-roles.md)) is checked.
- Items the user lacks permission for are dropped.
- A folder with no surviving children is collapsed away.
- Items with a `roles` filter are kept only when the user's roles intersect the list.

A user sees only the parts of the menu they can actually use — no greyed-out items, no clicks on dead-end links.

---

## What you actually do — quick map

| Goal | Read |
|---|---|
| Make a connector show up as an app in the top switcher. | [Make a connector an app](./make-connector-an-app.md). |
| Build the tree — folders, leaves, drag/reorder, indent. | [Build the tree](./build-the-tree.md). |
| Pick the right leaf type (screen / endpoint / dashboard / route). | [Item types](./item-types.md). |
| Restrict items to specific roles. | [Permissions and roles](./permissions-and-roles.md). |
| Add icons + per-language labels. | [Translations and icons](./translations-and-icons.md). |

---

## What's next

- [Make a connector an app](./make-connector-an-app.md) — wire `show_in_switcher`, `home` and the menu.
- [Concepts → Menus](./overview.md) — the deep reference.
