---
title: Overview and Studio
description: "The two pages Liberty Next opens on for whoever builds: Overview — the applications of the installation with their figures and the eight steps an application is built in — and the Studio, the map of one application (menu, screens, data, services) where a selection lights what it is linked to, what nothing uses is shown, and every editor opens in place."
keywords: [Liberty Next, Studio, Overview, application map, low-code, screens, queries, endpoints, services, dependencies, unused, integrity, edit in place]
---

# Overview and Studio

Two pages give the whole picture before any editor is opened. **Overview** lists the applications of the installation and the path that builds one. The **Studio** shows one application as a **map** — its menu, its screens, the data they use, the services they call — and edits any of it without leaving the page.

Access: **Liberty Next → Overview** and **Liberty Next → Build → Studio**, for superusers.

---

## At a glance

<svg viewBox="0 0 1200 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="stu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="stu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="stu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="stu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="342" rx="14" fill="url(#stu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Studio</text>
  <rect x="240" y="60" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="74.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">crm ▾</text>
  <rect x="338" y="60" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="348" y="74.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Find a screen, a query, a service…</text>
  <rect x="578" y="62" width="63" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="609.5" y="74.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">6 Screens</text>
  <rect x="647" y="62" width="48" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="671.0" y="74.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">9 Data</text>
  <rect x="701" y="62" width="68" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="735.0" y="74.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 Services</text>
  <rect x="775" y="62" width="128" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="839.0" y="74.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 screen nothing opens</text>
  <rect x="236" y="96" width="130" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="114" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MENU</text>
  <text x="356" y="114" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <rect x="374" y="96" width="130" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="384" y="114" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCREENS</text>
  <text x="494" y="114" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <rect x="512" y="96" width="130" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="522" y="114" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="632" y="114" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <rect x="650" y="96" width="130" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="660" y="114" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SERVICES</text>
  <text x="770" y="114" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <path d="M358,135 C370.0,135 370.0,135 382,135" fill="none" stroke="#4a9eff" strokeWidth="1.2" opacity="0.8"/>
  <path d="M496,135 C508.0,135 508.0,135 520,135" fill="none" stroke="#4a9eff" strokeWidth="1.2" opacity="0.8"/>
  <path d="M496,135 C508.0,135 508.0,163 520,163" fill="none" stroke="#4a9eff" strokeWidth="1.2" opacity="0.8"/>
  <path d="M496,219 C508.0,219 508.0,219 520,219" fill="none" stroke="#4a9eff" strokeWidth="1.2" opacity="0.8"/>
  <path d="M496,135 C508.0,135 508.0,219 520,219" fill="none" stroke="#4a9eff" strokeWidth="1.2" opacity="0.8"/>
  <rect x="244" y="124" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="244" y="124" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="252" y="138.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="244" y="152" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="244" y="152" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="166.3" fill="#475569" fontSize="8.8" fontFamily="system-ui, sans-serif">Deals</text>
  <rect x="244" y="180" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="244" y="180" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="194.3" fill="#475569" fontSize="8.8" fontFamily="system-ui, sans-serif">Activities</text>
  <rect x="244" y="208" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="244" y="208" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="222.3" fill="#475569" fontSize="8.8" fontFamily="system-ui, sans-serif">Pipeline</text>
  <rect x="382" y="124" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="382" y="124" width="114" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="390" y="138.3" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="382" y="152" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="382" y="152" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="390" y="166.3" fill="#475569" fontSize="8.8" fontFamily="ui-monospace, monospace">deals</text>
  <rect x="382" y="180" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="382" y="180" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="390" y="194.3" fill="#475569" fontSize="8.8" fontFamily="ui-monospace, monospace">activities</text>
  <rect x="382" y="208" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="382" y="208" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="390" y="222.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">contacts</text>
  <rect x="382" y="236" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="382" y="236" width="114" height="22" rx="5" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.5)" strokeWidth="1"/>
  <text x="390" y="250.3" fill="#fb923c" fontSize="8.8" fontFamily="ui-monospace, monospace">old_import</text>
  <rect x="520" y="124" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="520" y="124" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="528" y="138.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">customers_get</text>
  <rect x="520" y="152" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="520" y="152" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="528" y="166.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">customers_put</text>
  <rect x="520" y="180" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="520" y="180" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="528" y="194.3" fill="#475569" fontSize="8.8" fontFamily="ui-monospace, monospace">deals_get</text>
  <rect x="520" y="208" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="520" y="208" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="528" y="222.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">contacts_get</text>
  <rect x="520" y="236" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="520" y="236" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="528" y="250.3" fill="#475569" fontSize="8.8" fontFamily="ui-monospace, monospace">activities_get</text>
  <rect x="658" y="124" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="658" y="124" width="114" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="666" y="138.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">check_credit</text>
  <rect x="658" y="152" width="114" height="22" rx="5" fill="#0d1220"/>
  <rect x="658" y="152" width="114" height="22" rx="5" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <text x="666" y="166.3" fill="#475569" fontSize="8.8" fontFamily="ui-monospace, monospace">close_deal</text>
  <rect x="794" y="96" width="170" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="806" y="114" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCREEN</text>
  <text x="806" y="134" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="806" y="144" width="97" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="854.5" y="158.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Open the screen</text>
  <rect x="909" y="144" width="52" height="22" rx="5" fill="url(#stu-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="935.0" y="158.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Design</text>
  <text x="806" y="188" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA IT USES</text>
  <text x="806" y="206" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">customers_get</text>
  <text x="952" y="206" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">reads</text>
  <text x="806" y="224" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">customers_put</text>
  <text x="952" y="224" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">saves</text>
  <text x="806" y="256" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVICES IT CALLS</text>
  <text x="806" y="274" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">check_credit</text>
  <text x="806" y="302" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCREENS INSIDE ITS FORM</text>
  <text x="806" y="320" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">contacts</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One application</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its map, searched at once</text>
  <line x1="200" y1="77.0" x2="240" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click selects</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">linked items light up</text>
  <line x1="200" y1="167.0" x2="382" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nothing opens it</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no menu entry, no form</text>
  <line x1="200" y1="267.0" x2="382" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is loose</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">counted at the top</text>
  <line x1="1000" y1="77.0" x2="903" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit in place</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the editor opens over the map</text>
  <line x1="1000" y1="157.0" x2="961" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What it uses</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reads · saves · calls</text>
  <line x1="1000" y1="267.0" x2="956" y2="203" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stu-arrow)"/>
</svg>

---

## Overview \{#overview\}

The page has a header and two sections.

**Header** — **Open the Studio**, **A new screen, with the assistant** (the [Screen Assistant](./build/screen-assistant.md)), and two status pills: the integrity of the configuration — *Nothing broken*, or the number of errors and warnings, which opens **Deploy → Integrity** — and, once test cases exist, the totals of the [tests](./build/tests.md), which opens **Operate → Test results**.

**The applications** — one card per application: its number of **screens**, **menu entries**, **data** (queries and endpoints) and **services**, and one line on its state: *Every screen is reachable*, or how many screens nothing opens and how many references are broken. A card opens the application in the Studio.

**How an application is built** — eight steps, in order; each says in one sentence what it is for, shows what the installation already holds, and opens the page where it is done.

| # | Step | Opens |
|---|---|---|
| 1 | **Connect the data** — a connector reaches a database or an API; its queries and endpoints are the only place where data is read and written. | Data → Connectors |
| 2 | **Name the fields** — the dictionary gives every field its label, its format, its list of values, once for every screen. | Data → Dictionary |
| 3 | **Build the screens** — a screen is a query shown as a grid, with its filters, its record form, its actions. | Build → Studio |
| 4 | **Organise the menu** — folders and entries that open a screen, a dashboard, a page. | Screens → Menus |
| 5 | **Add the logic** — a service is steps composed into one call; a job runs steps on a schedule; a notification tells someone. | Logic → Services |
| 6 | **Show the figures** — dashboards and charts for what is watched every day; the Data Explorer for what is asked freely. | Insight → Dashboards |
| 7 | **Give access** — roles say who sees which menu, runs which query, and which rows are theirs. | Administer → Access |
| 8 | **Check and deliver** — the integrity check finds what is broken; a package carries the configuration to another environment. | Deploy → Package |

---

## The Studio \{#studio\}

Pick an application at the top left. Its map has four columns, each with its count:

| Column | Holds |
|---|---|
| **Menu** | The entries of the application's menu. |
| **Screens** | Its screens. Icons say *Has a record form* and *Read only*. |
| **Data** | The queries and endpoints its screens use. A pen marks what *changes data*. |
| **Services** | The services its screens call. **All services…** opens the [Services](./build/services.md) page. |

The search box — *Find a screen, a query, a service…* — narrows every column at once.

### Follow the links \{#links\}

A click selects an item: **everything it is linked to lights up**, the links are drawn across the columns, and the rest fades. The selection follows the links all the way — a query lights the screens that use it and their menu entries; a menu entry lights its screen and everything that screen leads to. A second click clears the selection.

This answers, in one click, the questions that otherwise mean opening five editors: *what breaks if I change this query? which screens call this service? how does a user reach this screen?*

### What is loose \{#loose\}

The Studio shows what an application carries for nothing, and what is broken:

| Sign | Meaning |
|---|---|
| Warning on a screen | *No menu entry and no form opens this screen.* |
| Warning on a data item or a service | *It no longer exists: what points at it is broken.* |
| **Show the N no screen uses** (Data column) | The application's queries and endpoints no screen uses. |
| Orange chip at the top | The number of screens nothing opens. |

The integrity chip beside it opens the full check.

### Edit in place \{#edit\}

The panel on the right says what the selection is, what it uses and what uses it — and carries the way to change it:

| Selection | The panel shows | Buttons |
|---|---|---|
| Nothing | **To look at** (what is loose) and the application's dashboards, tagged *not in the menu* when no entry opens them. | — |
| A **screen** | *Data it uses* — each tagged *reads*, *saves* or *calls* —, *Services it calls*, *Screens inside its form*. | **Design**, **Open the screen** |
| A **query** or an **endpoint** | *Used by*, *Served by the service*. | **Edit the query** / **Edit the endpoint** |
| A **service** | Its number of steps, *Used by*, *Exposed as*. | **Design the flow**, **Run** |
| A **menu entry** | *Opens*. | **Edit the menu** |

The editors open **over the map** and come back to it, reloaded: the [Screen Designer](./build/screens/overview.md), the query editor, the endpoint editor, the service designer, the menu and the dashboards. A double click on a screen or a service opens its editor directly.

---

## Tips & best practices \{#tips\}

- Open the Studio **before** changing a shared query or service: the lit items are the test plan.
- Clear the loose items before a delivery — a screen nothing opens is either a missing menu entry or dead configuration.
- New to an application? Select its menu entries one by one: the map is its documentation.
- The Studio is one application at a time; **Find usages**, in each editor, searches the whole installation.

---

## Related

- [The Liberty Next workspace](./configuration/settings-ui.md) — the menu and how a save is applied.
- [Services](./build/services.md), [Tests](./build/tests.md), [API endpoints](./build/api-endpoints.md).
