---
title: Apps
description: "What an app is in Liberty Next — a connector with a menu, shown in the app picker — what belongs to it (queries, dictionary scope, screens, menu, charts), how users switch between apps, and how an app is copied, moved between environments or installed ready-made."
keywords: [Liberty Next, app, app picker, connector, menu, show_in_switcher, home, clone, packages, licensed apps]
---

# Apps

In Liberty Next, an **app** is a **connector that has a menu**: its name appears in the app picker at the top of the sidebar, and picking it shows its menu. There is no separate app object to create — the connector is the app.

---

## At a glance

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="app-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="app-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="app-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="app-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="410" rx="14" fill="url(#app-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="220" height="380" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="56" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <rect x="252" y="70" width="196" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="350.0" y="84.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm ▾</text>
  <rect x="252" y="96" width="196" height="72" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="116" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">crm</text>
  <text x="264" y="138" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">sales</text>
  <text x="254" y="190" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Pool</text>
  <rect x="252" y="196" width="196" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="210.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Default ▾</text>
  <text x="260" y="250" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📊 Pipeline</text>
  <text x="260" y="276" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📁 Sales</text>
  <text x="260" y="302" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">   👥 Customers</text>
  <text x="260" y="328" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">   📈 Deals</text>
  <rect x="480" y="30" width="480" height="380" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="56" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline</text>
  <rect x="496" y="72" width="144" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="508" y="90" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPEN</text>
  <text x="508" y="116" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">173 500</text>
  <rect x="650" y="72" width="144" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="662" y="90" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WON</text>
  <text x="662" y="116" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">18 000</text>
  <rect x="804" y="72" width="144" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="816" y="90" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEALS</text>
  <text x="816" y="116" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <rect x="496" y="156" width="452" height="236" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="508" y="176" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline by stage</text>
  <rect x="544.0" y="323.3" width="85.3" height="34.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="544.0" y="323.3" width="85.3" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="586.6666666666666" y="369" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Qualified</text>
  <rect x="677.3" y="271.3" width="85.3" height="86.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="677.3" y="271.3" width="85.3" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="720.0" y="369" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Proposal</text>
  <rect x="810.7" y="202.0" width="85.3" height="156.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="810.7" y="202.0" width="85.3" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="853.3333333333334" y="369" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Negotiation</text>
  <rect x="10" y="66" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">App picker</text>
  <text x="20" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">apps whose menu you see</text>
  <line x1="210" y1="83.0" x2="252" y2="81" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#app-arrow)"/>
  <rect x="10" y="190" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool picker</text>
  <text x="20" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">multi-pool connectors</text>
  <line x1="210" y1="207.0" x2="252" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#app-arrow)"/>
  <rect x="10" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The app's menu</text>
  <text x="20" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">switches with the app</text>
  <line x1="210" y1="307.0" x2="260" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#app-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">home</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the entry opened first</text>
  <line x1="1000" y1="217.0" x2="960" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#app-arrow)"/>
</svg>

---

## What belongs to an app \{#scope\}

Everything an app shows is filed under its connector's name:

| Element | Where it is set | Stored under |
|---|---|---|
| Queries (tables, queries, sequences, lookups) | Liberty Next → Build → Connectors | The connector itself. |
| Dictionary entries, enums, lookups, sequences | Liberty Next → Build → Dictionary, the connector's **scope** | `[connectors.<app>.*]` — on top of the shared entries. |
| Screens | Liberty Next → Build → Screens, the app's chip | `[screens.<app>.<id>]` |
| Menu | Liberty Next → Build → Menus, the app's chip | `[menus.<app>]` |
| Charts | Liberty Next → Build → Charts, the connector's scope | `[charts.<app>.<id>]` |
| Dashboards | Liberty Next → Build → Dashboards, the app | `[dashboards.<app>.<id>]` — a menu item opens it with the target `<app>.<id>`. |

Shared actions have a single namespace. Nomaflow jobs are not tied to an app.

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

1. **Liberty Next → Build → Connectors** — create the SQL connector and its pool, then its queries (the CRUD wizard writes them from a table).
2. **Liberty Next → Build → Screens** — build the screens on these queries.
3. **Liberty Next → Build → Menus** — **+ Add scope**, pick the connector, add the items that open the screens.
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
