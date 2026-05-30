---
title: Permissions and roles
description: "The roles filter on a menu item, the underlying sql / api permission inherited from the target, how empty folders collapse, and how the menu prunes per user."
keywords: [Liberty Framework, menu permissions, roles, sql permission, api permission, pruning, folder collapse]
---

# Permissions and roles

The menu the user sees is **not** the menu you saved — it's the menu **filtered to what the user is allowed to use**. Liberty prunes the tree at fetch time so users never click on items they can't open.

Two filters apply:

| Filter | When it kicks in |
|---|---|
| **Implicit permission** | Every leaf inherits the permission of its **target** — `sql:<connector>:<target>` for a `query`, `api:<connector>:<target>` for an `endpoint`. Users without the permission don't see the leaf. |
| **Explicit roles** | The leaf's `roles` field is an additional gate — when set, the user must have at least one of the listed roles. |

After both filters run, folders with no surviving children are collapsed away.

---

## The implicit permission

Every leaf is gated by the permission of its target:

| `type` | Required permission |
|---|---|
| `query` | `sql:<connector>:<target>` (the query's permission). |
| `endpoint` | `api:<connector>:<target>` (the endpoint's permission). |
| `dashboard` | None at this layer — the dashboard's own access rules apply. |
| `page` | None at this layer — the route's own access rules apply. |

A user with `sql:crm:customers_get` sees the menu leaf that opens the Customers screen. A user without it doesn't — the leaf vanishes from the rendered menu.

This is the **same permission** the screen / endpoint already checks. The menu doesn't introduce a second permission; it just hides links the user couldn't follow anyway. Result: no greyed-out items, no clicks that take the user to a *403 forbidden* page.

---

## The explicit `roles` filter

The `roles` field on a menu item is a list of role names. When set:

- The user must have **at least one** of the listed roles.
- The check is in addition to the implicit permission — both must hold.

| `roles` value | Behaviour |
|---|---|
| Empty (default) | Visibility determined by the implicit permission alone. |
| `["manager"]` | Visible only to users with the `manager` role. |
| `["manager", "admin"]` | Visible to users with either `manager` or `admin`. |

### Use cases

| Pattern | Example |
|---|---|
| Hide an item that's open to read but only meaningful for a subset of users. | A *Reports* leaf where every user has read on the underlying query, but only managers actually use it. |
| Surface different sections to different audiences in the same app. | An `admin` folder visible only when `roles = ["admin"]` matches. |
| Stage a rollout. | Tag a new section `roles = ["beta-testers"]`; flip to empty when launching to everyone. |

The `roles` field is **not** an alternative to the implicit permission — both must hold. If you want operators to see and use a screen, they need both the SQL permission and one of the listed roles.

---

## Folder collapse

A folder with **no visible children** disappears from the rendered menu. This means:

- A folder that wraps three leaves, all gated by `roles = ["admin"]`, vanishes entirely for a non-admin user — they don't see an empty *Admin* folder.
- A folder whose children are all gated by SQL permissions the user lacks similarly vanishes.

This happens at every level — a nested folder structure prunes from the leaves up. The user sees a minimal, useful tree.

The runtime walks the tree once per request, applying the filters and collapsing empties in one pass.

---

## A worked example

A menu with mixed visibility:

```toml
[menus.crm]
label = "CRM"

# Top-level — always visible
[[menus.crm.items]]
id = "pipeline"
label = "Pipeline"
icon = "briefcase"

[[menus.crm.items]]
id = "pipeline.customers"
parent = "pipeline"
label = "Customers"
type = "query"
target = "customers_get"
# implicit: sql:crm:customers_get

[[menus.crm.items]]
id = "pipeline.deals"
parent = "pipeline"
label = "Deals"
type = "query"
target = "deals_get"
# implicit: sql:crm:deals_get

[[menus.crm.items]]
id = "reports"
label = "Reports"
icon = "chart-bar"

[[menus.crm.items]]
id = "reports.monthly"
parent = "reports"
label = "Monthly revenue"
type = "query"
target = "monthly_revenue_get"
roles = ["manager", "admin"]

[[menus.crm.items]]
id = "reports.cohort"
parent = "reports"
label = "Cohort analysis"
type = "query"
target = "cohort_get"
roles = ["analyst", "admin"]

[[menus.crm.items]]
id = "admin"
label = "Admin"
icon = "shield"

[[menus.crm.items]]
id = "admin.config"
parent = "admin"
label = "Config"
type = "query"
target = "config_get"
roles = ["admin"]
```

What different users see:

| User | Roles | Has `sql:crm:*` | Visible menu |
|---|---|---|---|
| **Alice** (user) | `["user"]` | `customers_get`, `deals_get` only | Pipeline → Customers, Deals. *(no Reports, no Admin)* |
| **Bob** (manager) | `["manager"]` | every `sql:crm:*` | Pipeline → Customers, Deals · Reports → Monthly revenue. *(no Cohort: not analyst; no Admin)* |
| **Carol** (admin) | `["admin"]` | every `sql:crm:*` | Pipeline → Customers, Deals · Reports → Monthly revenue, Cohort · Admin → Config. |
| **Dave** (manager + analyst) | `["manager", "analyst"]` | every `sql:crm:*` | Pipeline → Customers, Deals · Reports → Monthly revenue, Cohort. *(no Admin)* |
| **Eve** (no permission) | `["guest"]` | none | Empty tree — app's switcher tile hides itself. |

Note how the *Reports* folder doesn't appear for Alice (her roles don't intersect any child); the *Admin* folder doesn't appear for Alice / Bob / Dave; the app's tile in the top switcher hides for Eve.

---

## Permission shapes

Liberty's permission strings follow a simple pattern:

| String | Grants |
|---|---|
| `sql:<connector>:<query>` | Run that specific SQL query. |
| `sql:<connector>:*` | Run every query on that connector. |
| `sql:*` | Run every query on every connector. |
| `api:<connector>:<endpoint>` | Call that specific API endpoint. |
| `api:<connector>:*` | Call every endpoint on that connector. |
| `screen:<app>:<id>` | Reach that specific screen (less common — most installs gate by `sql:` instead). |
| `superuser` | Bypasses every check. |

For menu pruning, the relevant permissions are `sql:` and `api:` (matching the leaf's `target`). A role granting `sql:crm:*` opens every `query` leaf on the `crm` app.

Granular vs broad:

| Granular `sql:<c>:<query>` | Broad `sql:<c>:*` |
|---|---|
| Per-screen control — pick which screens this role sees. | Whole-app control — this role sees every screen on the connector. |
| Tedious to maintain for apps with 50+ screens. | One permission per role per app. |
| Useful for compliance scenarios. | The default for most installs. |

Most teams settle on broad `sql:<c>:*` per role per app, and use the `roles` filter on individual items for fine-grained exceptions.

---

## How the pruning runs

`GET /api/menus` fires when the user opens the app. The runtime:

1. Loads the user's roles + permissions from the JWT.
2. Walks the tree depth-first.
3. For each **leaf**:
   - Check the implicit permission. If the user lacks it, the leaf is dropped.
   - Check the `roles` filter. If the list is non-empty and the user has none of them, the leaf is dropped.
4. For each **folder**: drop it if no descendants survived.
5. Return the pruned tree.

The pruning is **per-request** — it picks up permission changes the moment the user re-authenticates. No restart needed.

---

## Dashboards and pages — different gating

Dashboards and routes don't inherit a `sql:` / `api:` permission. They have their own access rules:

| Leaf type | Default visibility |
|---|---|
| `query` | Hidden unless `sql:<connector>:<target>` is granted. |
| `endpoint` | Hidden unless `api:<connector>:<target>` is granted. |
| `dashboard` | Visible to everyone by default. Use `roles` to gate. |
| `page` | Visible to everyone by default. Use `roles` to gate. |

For dashboards, the underlying chart queries still need their `sql:` permissions — a user without permission opens the dashboard and sees empty charts. For pages, the React component handles its own auth.

The right pattern for both: **always set `roles`** on dashboard and page leaves you want to scope. Liberty's default-visible behaviour is deliberate (most dashboards / pages are general-audience), but it means you must opt into restriction.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| `roles = ["Manager"]` (capitalised). | Users with the lowercase `manager` role don't see the item. | Roles are case-sensitive. Use the exact spelling from the roles config. |
| Granting `sql:crm:*` to a role but the screen still doesn't appear. | The user's session was issued before the grant. | Sign out / sign back in to refresh the JWT. |
| `roles = []` (explicit empty list). | Equivalent to leaving the field blank — implicit permission alone. | If you meant "only admins", use `roles = ["admin"]`. |
| Folder visible despite all leaves being hidden. | The pruning ran on stale data (rare race condition during a hot reload). | Refresh the page. |
| Dashboard visible to everyone but its charts empty. | The user has dashboard visibility but no underlying `sql:` permissions. | Either grant the `sql:` permissions OR add a `roles` filter to hide the dashboard from those users. |
| Menu shows nothing for a brand-new user. | The user's role grants no `sql:` / `api:` permissions on this app. | Verify the role has at least one matching permission. |

---

## What's next

- [Translations and icons](./translations-and-icons.md) — per-language labels and Lucide icons.
- [Build the tree](./build-the-tree.md) — the editor surface.
- [Concepts → Authentication → Roles and permissions](../../auth/roles-permissions.md) — the deeper reference behind the permission strings.
