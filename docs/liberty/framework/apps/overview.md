---
title: Apps
description: "A Liberty app groups connectors, screens, menus, dashboards, charts and jobs around one business domain. Apps are surfaced in the workspace selector at the top of the sidebar, edited per-entity from each Settings tab, and packaged as zip exports for transfer between environments."
keywords: [Liberty Framework, app, workspace, multi-tenant, app export, app import, settings, packaged app]
---

# Apps

A Liberty **app** is a **namespace** — a logical grouping of connectors, screens, menus, dashboards, charts and jobs that belong to one business domain (CRM, billing, JD Edwards admin, internal HR…). The framework collects every entity's *App* field at load time and exposes the resulting list as the **workspace selector** in the header — switching workspaces changes the sidebar to that app's menu tree.

Apps aren't a separate concept to wire — every Settings builder exposes an *App* dropdown on each entity. This page covers how the workspace selector works, how to package an app for transfer between environments, and the per-app permission pattern.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>WORKSPACE SELECTOR</div>
    <div style={{fontSize: '12px'}}>Top of the header. Lists every app the caller can see, sorted by display order.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>APP FIELD</div>
    <div style={{fontSize: '12px'}}>Every connector / screen / menu / chart / dashboard / job carries one. Defaults to <code>_default</code>.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>SETTINGS → APPS</div>
    <div style={{fontSize: '12px'}}>Friendly labels, icons, display order — plus zip export / import for transfer between environments.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>PERMISSIONS</div>
    <div style={{fontSize: '12px'}}><code>{"sql:<app>-*:*"}</code>, <code>{"screen:<app>:*"}</code>, <code>{"menu:<app>:*"}</code> — one role per app keeps things tidy.</div>
  </div>
</div>

---

## How an app is created

Apps don't have a "create" action of their own. **An app exists as soon as one entity references it.** Open *Settings → Connectors → New connector*, type `billing` in the *App* field — `billing` is now an app with one connector. Add a menu under *Settings → Menus → New menu* with the same *App* value, and the workspace selector starts showing *Billing*.

To give the app a friendly label, icon and display order, the **Settings → Apps** tab provides per-app metadata:

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Apps</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 12px', borderRadius: '6px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '11px', fontWeight: 600}}>↑ Import app</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ New app</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '40px 110px 1.4fr 70px 80px 60px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div></div><div>ID</div><div>Display name</div><div>Icon</div><div>Order</div><div></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '40px 110px 1.4fr 70px 80px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>📜</div><div style={{fontFamily: 'ui-monospace, monospace'}}>billing</div><div>Billing</div><div>receipt</div><div>10</div><div style={{textAlign: 'right', opacity: 0.55}}>⬇ ✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '40px 110px 1.4fr 70px 80px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>👥</div><div style={{fontFamily: 'ui-monospace, monospace'}}>crm</div><div>CRM</div><div>users</div><div>20</div><div style={{textAlign: 'right', opacity: 0.55}}>⬇ ✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '40px 110px 1.4fr 70px 80px 60px', padding: '10px 14px', alignItems: 'center'}}>
    <div>📊</div><div style={{fontFamily: 'ui-monospace, monospace'}}>nomajde</div><div>NomaJDE</div><div>server</div><div>30</div><div style={{textAlign: 'right', opacity: 0.55}}>⬇ ✏️</div>
  </div>
</div>

| Field | Effect |
|---|---|
| **ID** | The app identifier — short, kebab-case (`billing`, `crm`). Used as namespace prefix throughout. Renaming triggers a rewrite of every reference. |
| **Display name** | Shown in the workspace selector and as the sidebar header. Localised through the dictionary. |
| **Icon** | A [Lucide icon](https://lucide.dev/icons) name. Appears next to the workspace name. |
| **Order** | Drives the position in the workspace selector. Lower numbers first. |
| **Description** | Free text — appears as the tooltip in the workspace selector. |

Per-row actions:

- **⬇ Export** — produces a zip of every entity carrying this app's identifier (see [Export / import](#export-import)).
- **✏️ Edit** — opens the metadata editor.

The framework still works with apps that have no metadata entry — the workspace selector just shows the raw identifier instead of the friendly name.

---

## The workspace selector

The header shows a workspace chip with a dropdown. The dropdown lists every app the calling user can see at least one menu of (filtered by per-app permissions), sorted by *Order* then alphabetically.

| Behaviour | When |
|---|---|
| **Selector visible** | At least two apps have menus the caller can see. |
| **Selector hidden** | Only one app (the default case for single-tenant installs). |
| **Remembered per user** | The last picked workspace is stored in `localStorage`. |

A user with permission to only one app sees no selector — the framework defaults straight to that workspace.

---

## Conventions per app

| Convention | Reason |
|---|---|
| **One menu per app** under *Settings → Menus*. The menu's *App* drives the workspace key. | Declaring a menu is what makes the workspace selectable. |
| **Prefix connectors with the app** (`billing-customers`, `crm-contacts`). | Keeps the connector catalogue readable and prevents collisions when two apps query the same database. |
| **Namespace screen ids by app** (`billing/invoices`, `crm/customers`). | The framework allows the same screen id under two apps; the namespace prevents the wrong one being picked. |
| **Dictionary entries can be shared.** | The dictionary is global by default — labels and lookups defined once are referenced from every app. |
| **Jobs live in the app's namespace** (the job builder's *App* dropdown). | Keeps the *Settings → Jobs* catalogue organised; framework-wide jobs sit under `_default`. |

---

## Export / import \{#export-import\}

Apps move between environments (dev → staging → prod) via the **Settings → Apps** export / import flow.

### Exporting

Click **⬇ Export** on an app row, or open the app's metadata editor and use the *Export* action. The framework produces a zip containing:

| Path inside the zip | Content |
|---|---|
| `manifest.toml` | Metadata: app id, version, exported timestamp, dependencies (other apps required), framework version compatible. |
| `connectors.toml` | The connector entries whose *App* matches. Plus the pools they reference (a warning appears when a pool is shared with another app). |
| `dictionary.toml` | The dictionary entries referenced by the app's screens (lookups, formats, labels). |
| `screens.toml` | The app's screens. |
| `menus.toml` | The app's menu tree. |
| `dashboards.toml` | The app's dashboards. |
| `charts.toml` | The charts referenced by the dashboards. |
| `jobs.toml` | The app's Nomaflow jobs. |
| `plugins/` *(if any)* | The whole plugin directory (custom Python callables). |

The zip is downloaded by the browser. For multi-app exports, tick the checkboxes on each row + *Export selected*.

### Importing

Click **↑ Import app** at the top of the *Apps* tab. A dialog asks for the zip file, then surfaces a **diff preview** before applying:

| Section | What the preview shows |
|---|---|
| **Will add** | Entities present in the zip and absent on the install. |
| **Will replace** | Entities present in both; the diff is shown inline ("label change", "extra column"). |
| **Will refuse** | Identifier collisions across apps (e.g. zip's `billing` collides with an existing screen). Operator clears them before *Confirm*. |

*Confirm* applies the import in one transaction. A failure rolls back; the install stays on its previous state.

For installations under version control, the easier path is a **git patch** on `liberty-apps` — the change is reviewable in the PR, partial imports are possible and rollback is `git revert`. The zip flow is for installs that don't share a git repo (vendor-shipped customer apps, demo data).

---

## Packaged vendor apps

Some apps ship pre-built from Nomana-IT — **NomaUBL** (e-invoicing), **NomaSX-1** (security maintenance), **NomaJDE** (JD Edwards admin). They follow the same convention: an app identifier, a menu tree, screens, dashboards. Installing one is a **license-gated *Import app*** — the license key's `features.apps` list controls which can be imported.

A packaged app is opaque to the customer in the sense that the content is delivered as-is and meant to be used as-is, but every entity is still **visible and editable** from the Settings UI. Customer-side modifications survive vendor upgrades when they sit in a **separate customer namespace** (`billing-customer` next to vendor's `billing`) — see [Deployment → Upgrading](../deployment/upgrading.md) for the recommended layout.

---

## Permissions per app

The role engine integrates with apps via the `<surface>:<app>:*` wildcard pattern. A typical pair of roles for a two-app install:

| Role | Permissions |
|---|---|
| **billing-user** | `sql:billing-*:*`, `screen:billing:*`, `menu:billing:*`, `dashboard:billing-*` |
| **crm-user** | `sql:crm-*:*`, `screen:crm:*`, `menu:crm:*`, `dashboard:crm-*` |

A user carrying both roles sees both workspaces. A user carrying only `billing-user` sees the *Billing* workspace and isn't aware of the *CRM* one. See [Roles & permissions](../build/secure/roles-and-permissions.md).

---

## Tips & best practices

- **Pick app identifiers early.** Renaming an app triggers a propagation rewrite, but the simpler path is to start with the right name. Renames are supported through the Apps editor's *Rename* action.
- **Use the default app for single-tenant installs.** Don't manufacture an app identifier just to fill the field.
- **Group connectors per app even when sharing a pool.** A `billing-invoices` + `billing-credits` querying the same `default` pool is clearer than `invoices` + `credits`.
- **Keep dictionary entries shared.** A `currency` lookup defined once and referenced from `billing` and `crm` is preferable to two parallel definitions.
- **Export before a risky vendor upgrade.** A `billing.zip` snapshot of the current state is a one-click rollback path if the new vendor version regresses.

---

## Under the hood

Each entity's *App* field is stored on the entity itself in the per-section TOML. App metadata (display name, icon, order) lives under `dictionary.toml` → `apps`. Operators **do not edit these files by hand**; the Settings UI is the canonical interface. The export / import flow round-trips through zip files containing the same TOML excerpts; the *Apps* tab is the canonical surface for that too.

---

## What's next

- [Plugins](./plugins.md) — custom Python callables packaged with apps.
- [i18n](./i18n.md) — adding languages and per-app label packs.
- [Deployment → Upgrading](../deployment/upgrading.md) — moving customer customisations across framework and vendor-app upgrades.
