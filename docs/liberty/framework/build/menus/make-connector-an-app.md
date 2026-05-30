---
title: Make a connector an app
description: "A connector becomes an 'app' visible in the top switcher when it has a menu attached and show_in_switcher is on. Plus how the optional home field decides the landing page."
keywords: [Liberty Framework, app, show_in_switcher, home, connector, menu, top switcher, app picker]
---

# Make a connector an app

Liberty has **no separate Apps configuration**. The thing users call "an app" — what shows up in the top switcher, what carries a menu in the left navigation — is just a **connector with a menu attached** and the `show_in_switcher` flag on.

This page walks the wiring from both sides: the connector flag + the menu key.

---

## The three pieces

| Piece | Where it lives | Required for an app? |
|---|---|---|
| **`show_in_switcher`** | On the connector (Settings → Connectors → Settings tab). | Yes — when off, the connector exists but doesn't appear in the top switcher. |
| **`[menus.<connector>]`** | The menu file (Settings → Menus). | Yes — without a menu, the connector is treated as a *data source*, not an app. |
| **`home`** | On the connector (Settings → Connectors → Settings tab). | Optional — sets the landing menu item when the user picks this app in the switcher. |

Two separate effects, decided by different flags:

| Effect | Triggered by |
|---|---|
| The connector chip moves from *Data sources* to *Apps* on the Connectors page. | Menu existence alone — `[menus.<connector>]` is set up. |
| A tile for the app appears in the top switcher (the user-facing app picker). | Both menu existence **and** `show_in_switcher = true`. |

Set up the menu first; flip `show_in_switcher` on second. Miss the second step and the connector still classifies as an "app" on the Connectors page but doesn't show up for end users in the switcher.

---

## Where each flag is set

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ma-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#ma-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Connectors · [connectors.crm] · Settings</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">type</text>
  <rect x="200" y="80" width="200" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="95" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">sql</text>

  <text x="40" y="122" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">pool</text>
  <rect x="200" y="110" width="200" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="125" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">default</text>

  <text x="40" y="152" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">licensed</text>
  <rect x="200" y="142" width="20" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>

  <line x1="40" y1="180" x2="960" y2="180" stroke="#1f2937"/>
  <text x="40" y="204" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VISIBILITY IN THE TOP SWITCHER</text>

  <text x="40" y="232" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">show_in_switcher</text>
  <rect x="200" y="222" width="20" height="20" rx="3" fill="rgba(34,197,94,0.30)" stroke="rgba(34,197,94,0.60)"/>
  <text x="210" y="237" fill="#22c55e" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="234" y="236" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">show this connector as an app in the top switcher</text>

  <text x="40" y="266" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">home</text>
  <rect x="200" y="256" width="300" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="271" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">pipeline.customers ▾</text>
  <text x="510" y="270" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">landing menu item when this app is picked</text>

  <text x="40" y="296" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">max_rows</text>
  <rect x="200" y="286" width="100" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="301" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">(default)</text>

  <text x="40" y="340" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">For an app, also create [menus.crm] from Settings → Menus → ＋ Add a menu for a connector.</text>
</svg>

---

## Step 1 — On the connector

Open **Settings → Connectors**, pick the connector, switch to the **Settings** tab. The fields relevant to "this is an app":

| Field | Notes |
|---|---|
| **`show_in_switcher`** | Default `true`. When on, the connector shows in the top app switcher (provided it has a menu). When off, the connector is reachable only by URL — useful for hidden / admin connectors. |
| **`home`** | Dropdown sourced from this connector's menu items. Picks the landing menu item when the user clicks the app in the switcher. Blank → the first visible top-level item. |

Save the connector page — the change applies immediately (hot reload).

---

## Step 2 — On the menu

Open **Settings → Menus**. If the connector doesn't have a menu yet, the *＋ Add a menu for a connector* button opens a modal listing every connector **without** a menu — pick yours. The modal:

- Creates a new `[menus.<connector>]` entry with no items.
- Selects the new app chip.
- Reveals the empty tree.

If the connector already has a menu, its chip is in the scope bar — click it.

Add items via **＋ Folder** / **＋ Item** at the top of the tree pane. See [Build the tree](./build-the-tree.md) for the editor walkthrough.

---

## What changes after the wiring

Before:

- The connector shows up under **Data sources** on the Connectors page.
- It doesn't appear in the top switcher.
- Screens that point at its queries are reachable only by URL.

After:

- The connector shows up under **Apps** on the Connectors page.
- It appears in the top switcher as a tile.
- Clicking the tile takes the user to the `home` item (or the first visible top-level item).
- The left navigation shows the menu tree.

The Connectors page reads the menus file to decide the grouping — there's no separate "this is an app" flag beyond *"has a menu + is in the switcher"*.

---

## Cloning an app

The Connectors page has a **Clone** action (covered in [Queries → Clone a query or a connector](../queries/clone.md#clone-app--the-whole-application)) that copies the connector + its dictionary overlay + its screens + its menu + its dashboards + its charts under a new connector key. The cloned connector inherits `show_in_switcher`; its menu is wired automatically — the cloned app appears in the top switcher as soon as the clone completes.

This is the right move when:

- You need a parallel deployment (`nomasx1` → `nomasx1b` for regression testing).
- You're standing up a per-tenant instance.
- You're forking an app for a major refactor while keeping the original running.

---

## Hiding an app temporarily

Two ways to take an app out of the switcher without deleting it:

| Option | Effect |
|---|---|
| Turn off `show_in_switcher` on the connector. | The app vanishes from the switcher. Its screens are still reachable by URL; users with the URL keep working. |
| Delete the `[menus.<connector>]` entry. | The connector returns to *Data sources*. Screens still resolve, but the user has no nav to find them. |

The first is the right choice for maintenance windows — fully reversible in one click. The second is for genuinely retiring the app's UI.

---

## Multi-app installs

A typical Liberty install carries several apps:

| Connector | Role |
|---|---|
| `crm` | Customer-facing CRM. |
| `nomasx1` | Security review. |
| `nomajde` | JDE master data. |
| `nomaflow` | Job scheduler (its own product). |
| `default` | The framework's own pool — usually no menu, just a data source for shared queries. |

Each gets its own `[menus.<name>]` block, its own chip on the Menus page, its own switcher tile. They share the same framework process, the same authentication, the same dictionary (with per-connector overlays).

A user signing in sees only the apps they have permission for — `GET /api/menus` returns an empty tree for an app where the user can't run anything (and the switcher tile hides itself accordingly).

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Connector has `show_in_switcher = true` but no menu. | The connector shows in the Connectors page's *Data sources* group; the top switcher doesn't list it. | Add a menu in *Settings → Menus*. |
| Connector has a menu but `show_in_switcher = false`. | The menu exists but the switcher hides the tile. | Either turn `show_in_switcher` on, or accept that users will reach the app by URL only. |
| `home` points at a menu item that no longer exists. | Clicking the switcher tile lands on the first visible top-level item, ignoring the stale `home`. | Re-pick a valid item — the dropdown lists the live menu items. |
| Adding `[menus.<X>]` where `<X>` isn't a connector. | The page rejects the entry on save — the menu key must match a known connector. | Create the connector first, then attach the menu. |
| Cloning an app but the new pool doesn't exist. | The clone modal refuses to submit. | Create the pool in *Settings → Pools* before cloning. |

---

## What's next

- [Build the tree](./build-the-tree.md) — folders, leaves, drag and reorder.
- [Item types](./item-types.md) — pick between `query`, `endpoint`, `dashboard`, `page`.
- [Queries → Clone a query or a connector](../queries/clone.md) — the whole-app clone flow.
