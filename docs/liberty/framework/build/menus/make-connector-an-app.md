---
title: Make a connector an app
description: "A connector becomes an 'app' visible in the application picker when it has a menu attached and show_in_switcher is on. Plus how the optional home field decides the landing page."
keywords: [Liberty Framework, app, show_in_switcher, home, connector, menu, application picker, app picker]
---

# Make a connector an app

Liberty has **no separate Apps configuration**. The thing users call "an app" — what shows up in the application picker, what carries a menu in the left navigation — is just a **connector with a menu attached** and the `show_in_switcher` flag on.

This page walks the wiring from both sides: the connector flag + the menu key.

---

## The three pieces

| Piece | Where it lives | Required for an app? |
|---|---|---|
| **`show_in_switcher`** | On the connector (Liberty Next → Data → Connectors → stage **Settings**). | Yes — when off, the connector exists but doesn't appear in the application picker. |
| **`[menus.<connector>]`** | The menu file (Liberty Next → Screens → Menus). | Yes — without a menu, the connector is treated as a *data source*, not an app. |
| **`home`** | On the connector (Liberty Next → Data → Connectors → stage **Settings**). | Optional — sets the landing menu item when the user picks this app in the picker. |

Two separate effects, decided by different flags:

| Effect | Triggered by |
|---|---|
| The connector chip moves from *Data sources* to *Apps* on the Connectors page. | Menu existence alone — `[menus.<connector>]` is set up. |
| A tile for the app appears in the application picker (the user-facing app picker). | Both menu existence **and** `show_in_switcher = true`. |

Set up the menu first; flip `show_in_switcher` on second. Miss the second step and the connector still classifies as an "app" on the Connectors page but doesn't show up for end users in the switcher.

---

## Where each flag is set

<svg viewBox="0 0 1320 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mca-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mca-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mca-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mca-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="416" rx="14" fill="url(#mca-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="47" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">◎</text>
  <text x="260" y="47" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Connectors</text>
  <rect x="987" y="33" width="95" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1034.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload config</text>
  <rect x="941" y="33" width="40" height="22" rx="5" fill="url(#mca-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="961.0" y="47.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="870" y="33" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="902.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Discard</text>
  <rect x="789" y="33" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="826.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Connector</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238" y="80" width="220" height="340" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="248" y="90" width="200" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="103.3" fill="#475569" fontSize="8.4" fontFamily="system-ui, sans-serif">⌕ filter 6…</text>
  <text x="250" y="128" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">APPS</text>
  <rect x="248" y="136" width="200" height="36" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="258" y="158" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="151" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="ui-monospace, monospace">crm</text>
  <text x="276" y="164" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">sql · 12 table(s) · 30 query(ies)</text>
  <rect x="248" y="178" width="200" height="36" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="200" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="193" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1</text>
  <text x="276" y="206" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">sql · 116 table(s) · 33 query(ies)</text>
  <text x="250" y="234" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DATA SOURCES</text>
  <rect x="248" y="242" width="200" height="36" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="264" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="257" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="ui-monospace, monospace">default</text>
  <text x="276" y="270" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">sql</text>
  <rect x="248" y="284" width="200" height="36" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="306" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="299" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="ui-monospace, monospace">reporting</text>
  <text x="276" y="312" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">sql · 4 table(s)</text>
  <rect x="248" y="326" width="200" height="36" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="348" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="341" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="ui-monospace, monospace">helpdesk</text>
  <text x="276" y="354" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">api · 12 endpoint(s)</text>
  <rect x="470" y="80" width="612" height="340" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="102" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm]</text>
  <text x="589.2" y="102" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">· sql</text>
  <rect x="1030" y="90" width="40" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1050.0" y="103.5" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="977" y="90" width="49" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.5" y="103.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Rename</text>
  <rect x="928" y="90" width="45" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="950.5" y="103.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Clone</text>
  <rect x="852" y="90" width="72" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="888.0" y="103.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Find usages</text>
  <rect x="482.0" y="116" width="106.4" height="44" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="490.0" y="124" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="510.0" y="135" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SETTINGS</text>
  <text x="490.0" y="151" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">pool crm</text>
  <line x1="588.4" y1="138.0" x2="601.4" y2="138.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#mca-flow)"/>
  <rect x="602.4" y="116" width="106.4" height="44" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="610.4" y="124" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="630.4" y="135" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="610.4" y="151" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">12 table(s)</text>
  <line x1="708.8" y1="138.0" x2="721.8" y2="138.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#mca-flow)"/>
  <rect x="722.8" y="116" width="106.4" height="44" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="730.8" y="124" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="750.8" y="135" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERIES</text>
  <text x="730.8" y="151" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">30 query(ies)</text>
  <line x1="829.2" y1="138.0" x2="842.2" y2="138.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#mca-flow)"/>
  <rect x="843.2" y="116" width="106.4" height="44" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="851.2" y="124" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="871.2" y="135" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEQUENCES</text>
  <text x="851.2" y="151" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 sequence(s)</text>
  <line x1="949.6" y1="138.0" x2="962.6" y2="138.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#mca-flow)"/>
  <rect x="963.6" y="116" width="106.4" height="44" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="971.6" y="124" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="991.6" y="135" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOOKUPS</text>
  <text x="971.6" y="151" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">5 lookup(s)</text>
  <text x="482" y="176" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">POOL</text>
  <rect x="482" y="181" width="588" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="491" y="195.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">crm</text>
  <text x="1058" y="195.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="482" y="212" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">POOLS</text>
  <rect x="482" y="217" width="46" height="18" rx="4" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="505" y="229.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="482" y="248" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SHOW IN SWITCHER</text>
  <rect x="482" y="259" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M484.5,264.5 L486.8,266.8 L490.8,262" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="499" y="268" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="482" y="282" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Show this connector in the top app switcher.</text>
  <text x="482" y="294" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">HOME</text>
  <rect x="482" y="299" width="588" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="491" y="313.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">overview  Overview</text>
  <text x="1058" y="313.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="482" y="333" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Landing menu item id when this app is picked.</text>
  <text x="482" y="344" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">HOME BY ROLE</text>
  <rect x="482" y="349" width="46" height="18" rx="4" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="505" y="361.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="482" y="382" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">A landing menu item per role: a user lands on the item of their first role listed here, else on home.</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Apps</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">connectors that have a menu</text>
  <line x1="200" y1="137.0" x2="250" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
  <rect x="20" y="264" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="279" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Data sources</text>
  <text x="30" y="292" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no menu: not an application</text>
  <line x1="200" y1="281.0" x2="250" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
  <rect x="1120" y="172" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Settings stage</text>
  <text x="1130" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where the app flags sit</text>
  <line x1="1120" y1="189.0" x2="540" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
  <rect x="1120" y="247" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="262" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Show In Switcher</text>
  <text x="1130" y="275" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ a menu = listed in the picker</text>
  <line x1="1120" y1="264.0" x2="560" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Home</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">landing entry of the app</text>
  <line x1="1120" y1="317.0" x2="1070" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
  <rect x="1120" y="368" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Home By Role</text>
  <text x="1130" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a landing entry per role</text>
  <line x1="1120" y1="385.0" x2="530" y2="358" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mca-arrow)"/>
</svg>

---

## Step 1 — On the connector

Open **Liberty Next → Data → Connectors** and pick the connector in the list — connectors with a menu are under **Apps**, the others under **Data sources**. Its **Settings** stage opens first. The fields relevant to "this is an app" (labelled **Show In Switcher**, **Home** and **Home By Role** in the form):

| Field | Notes |
|---|---|
| **`show_in_switcher`** | Default `true`. When on, the connector shows in the application picker (provided it has a menu). When off, the connector is reachable only by URL — useful for hidden / admin connectors. |
| **`home`** | Dropdown sourced from this connector's menu items. Picks the landing menu item when the user picks the app in the picker. Blank → the first visible top-level item. |
| **`home_by_role`** | A start page per role: one line per role, each with a menu item picked from the lists. A user lands on the item of their first role listed here, else on `home` — the auditors on the audit synthesis, the administrators on the settings screens. |

Save the connector page — the change applies immediately (hot reload).

---

## Step 2 — On the menu

Open **Liberty Next → Screens → Menus**. If the connector doesn't have a menu yet, the **+ Add scope** button opens a modal listing every connector **without** a menu — pick yours. The modal:

- Creates a new `[menus.<connector>]` entry with no items.
- Selects the new app chip.
- Reveals the empty tree.

If the connector already has a menu, its chip is in the scope bar — click it.

Add items via **＋ Folder** / **＋ Item** at the top of the tree pane. See [Build the tree](./build-the-tree.md) for the editor walkthrough.

---

## What changes after the wiring

Before:

- The connector shows up under **Data sources** on the Connectors page.
- It isn't listed in the application picker.
- Screens that point at its queries are reachable only by URL.

After:

- The connector shows up under **Apps** on the Connectors page.
- It is listed in the application picker (shown in the sidebar when there is more than one application).
- Picking it takes the user to the `home` item (or the first visible top-level item).
- The left navigation shows the menu tree.

The Connectors page reads the menus file to decide the grouping — there's no separate "this is an app" flag beyond *"has a menu + is in the switcher"*.

---

## Cloning an app

The Connectors page has a **Clone** action (covered in [Queries → Clone a query or a connector](../queries/clone.md#clone-app--the-whole-application)) that copies the connector + its dictionary overlay + its screens + its menu + its dashboards + its charts under a new connector key. The cloned connector inherits `show_in_switcher`; its menu is wired automatically — the cloned app appears in the application picker as soon as the clone completes.

This is the right move when:

- You need a parallel deployment (`nomasx1` → `nomasx1b` for regression testing).
- You're standing up a per-tenant instance.
- You're forking an app for a major refactor while keeping the original running.

---

## Hiding an app temporarily

Two ways to take an app out of the picker without deleting it:

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

Each gets its own `[menus.<name>]` block, its own chip on the Menus page, its own entry in the application picker. They share the same framework process, the same authentication, the same dictionary (with per-connector overlays).

A user signing in sees only the apps they have permission for — `GET /api/menus` returns an empty tree for an app where the user can't run anything (and the app is left out of the picker).

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Connector has `show_in_switcher = true` but no menu. | The connector shows in the Connectors page's *Data sources* group; the application picker doesn't list it. | Add a menu in *Liberty Next → Screens → Menus*. |
| Connector has a menu but `show_in_switcher = false`. | The menu exists but the switcher hides the tile. | Either turn `show_in_switcher` on, or accept that users will reach the app by URL only. |
| `home` points at a menu item that no longer exists. | Picking the app lands on the first visible top-level item, ignoring the stale `home`. | Re-pick a valid item — the dropdown lists the live menu items. |
| Adding `[menus.<X>]` where `<X>` isn't a connector. | The page rejects the entry on save — the menu key must match a known connector. | Create the connector first, then attach the menu. |
| Cloning an app but the new pool doesn't exist. | The clone modal refuses to submit. | Create the pool in *Liberty Next → Administer → Pools* before cloning. |

---

## What's next

- [Build the tree](./build-the-tree.md) — folders, leaves, drag and reorder.
- [Item types](./item-types.md) — pick between `query`, `endpoint`, `dashboard`, `page`.
- [Queries → Clone a query or a connector](../queries/clone.md) — the whole-app clone flow.
