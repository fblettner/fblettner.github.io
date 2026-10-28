---
title: The Liberty Next workspace
description: "The Liberty Next workspace for superusers: the framework's pages in the app picker, grouped as Build (connectors, dictionary, screens, menus, actions, charts, dashboards, Explorer, report templates, notifications, AI, integrity), Administer (app, pools, access, theme), Operate (monitoring, jobs), Deploy (package, changes, history) and Document (developer reference, documentation reports, release notes); one page per editor, Reload config, how a save is validated and applied."
keywords: [Liberty Next, workspace, settings, Build, Administer, Operate, Deploy, Document, editors, connectors, screens, app settings, reload config, superuser]
---

# The Liberty Next workspace

The framework's own pages — the editors of the configuration, the administration of the install, its operation, its deployment and its documentation — form a workspace of their own, **Liberty Next**, offered to superusers in the application picker after the applications. The applications' menus keep their space for the end users.

---

## At a glance

<svg viewBox="0 0 1200 560" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="wks-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="wks-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="wks-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="wks-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="530" rx="14" fill="url(#wks-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="220" y="14" width="760" height="40" rx="14" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="39" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <rect x="830" y="23" width="26" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="843.0" y="37.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣</text>
  <rect x="234" y="64" width="210" height="476" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="76" width="186" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="90.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Liberty Next ▾</text>
  <text x="248" y="116" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Build</text>
  <text x="260" y="131" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Assistant</text>
  <text x="260" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Connectors</text>
  <text x="260" y="161" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Dictionary</text>
  <text x="260" y="176" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">Screens</text>
  <text x="260" y="191" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="260" y="206" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Actions</text>
  <text x="260" y="221" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Charts</text>
  <text x="352" y="131" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Dashboards</text>
  <text x="352" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Explorer</text>
  <text x="352" y="161" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Report templates</text>
  <text x="352" y="176" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="352" y="191" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">AI</text>
  <text x="352" y="206" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Integrity</text>
  <text x="248" y="246" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Administer</text>
  <text x="260" y="261" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">App</text>
  <text x="260" y="276" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pools</text>
  <text x="260" y="291" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Access</text>
  <text x="260" y="306" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Theme</text>
  <text x="248" y="331" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Operate</text>
  <text x="260" y="346" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Monitoring</text>
  <text x="260" y="361" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Jobs</text>
  <text x="248" y="386" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Deploy</text>
  <text x="260" y="401" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Package</text>
  <text x="260" y="416" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Changes</text>
  <text x="260" y="431" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">History</text>
  <text x="248" y="456" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Document</text>
  <text x="260" y="471" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Developer reference</text>
  <text x="260" y="486" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Documentation reports</text>
  <text x="260" y="501" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Release notes</text>
  <rect x="460" y="64" width="506" height="476" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="90" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">▦ Screens</text>
  <rect x="830" y="74" width="124" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="892.0" y="88.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload config</text>
  <text x="476" y="112" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">The Screen Designer — grids, dialogs, actions</text>
  <rect x="476" y="128" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="488" y="145" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm · customers</text>
  <rect x="476" y="162" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="488" y="179" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm · deals</text>
  <rect x="476" y="196" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="488" y="213" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm · activities</text>
  <rect x="476" y="230" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="488" y="247" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">sales · invoices</text>
  <rect x="476" y="264" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="488" y="281" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">sales · credit_notes</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The app picker</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Liberty Next, after the apps</text>
  <line x1="210" y1="77.0" x2="246" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Build</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the application's configuration</text>
  <line x1="210" y1="167.0" x2="248" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Administer, Operate</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the install and its jobs</text>
  <line x1="210" y1="317.0" x2="248" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="10" y="450" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deploy, Document</text>
  <text x="20" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">packages, references, reports</text>
  <line x1="210" y1="467.0" x2="248" y2="430" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="1000" y="20" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="35" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Back to the app</text>
  <text x="1010" y="48" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the last one used</text>
  <line x1="1000" y1="37.0" x2="856" y2="36" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="1000" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One page per editor</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with Reload config</text>
  <line x1="1000" y1="107.0" x2="954" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
</svg>

---

## Opening it \{#open\}

- In the **application picker** of the sidebar, **Liberty Next** comes after the applications.
- The button at the right of the top bar — *Liberty Next — the framework's pages* — opens it from any application; inside the workspace, the same button reads *Back to &lt;app&gt;* and returns to the last application used.

Users who are not superusers see neither the entry nor the button.

---

## The menu \{#menu\}

**Build** — the configuration of the applications, in the order an application is built:

| Page | Edits | See |
|---|---|---|
| **Assistant** | Opens the AI assistant. | [AI assistant](../ai-assistant.md) |
| **Connectors** | Queries, tables, sequences and lookups of SQL connectors; endpoints of API connectors; connector settings. | [Connectors](../connectors.md), [Queries](../build/queries/overview.md) |
| **Dictionary** | Entries, enums, lookups, sequences. | [Dictionary](../dictionary.md) |
| **Screens** | Grids, dialogs, tabs, actions — the Screen Designer. | [Screens](../build/screens/overview.md) |
| **Menus** | The sidebar tree of each application. | [Menus](../build/menus/overview.md) |
| **Actions** | Shared actions reused by screens. | [Actions and lifecycle](../build/screens/actions-and-lifecycle.md) |
| **Charts** | Saved charts. | [Charts](../charts.md) |
| **Dashboards** | Dashboards and their widgets. | [Dashboards](../dashboards.md) |
| **Explorer** | The Data Explorer's models. | [Build a model](../explorer/model.md) |
| **Report templates** | The report templates written by the operators; the PDF branding of the install is under App. | — |
| **Notifications** | Notification rules. | [Notifications](../../nomaflow/notifications.md) |
| **AI** | What each application ships for the AI assistant: starter questions and playbooks. | [AI assistant](../ai-assistant.md#settings-ai) |
| **Integrity** | The cross-checks of the whole configuration. | — |

**Administer** — the install:

| Page | Edits | See |
|---|---|---|
| **App** | Every setting of the install: application, server log, sign-in, Nomaflow, change packages, licence, AI assistant, notifications, OpenID Connect, PDF branding. | [App settings](../build/settings-app.md) |
| **Pools** | Database connections: address, credentials, size, schema and DB-link maps. | [Connectors](../connectors.md) |
| **Access** | Users and roles. | [Users](../build/secure/users.md), [Roles and permissions](../build/secure/roles-and-permissions.md) |
| **Theme** | Colours and branding. | — |

**Operate** — **Monitoring** ([The Monitoring page](../../monitoring/dashboard.md)) and **Jobs**, the Nomaflow jobs ([Jobs](../../nomaflow/jobs/catalog.md)).

**Deploy** — **Package** ([Packages](../build/packages.md)), **Changes** ([Change packages](../../nomaflow/change-packages.md)), **History** ([Configuration history](./config-history.md)).

**Document** — the [Developer reference](./developer-reference.md), the [Documentation reports](./documentation-reports.md) and the **Release notes** of the running version.

Each page has its own address — `/liberty/screens`, `/liberty/app`… —, so a page can be bookmarked or sent as a link. The former addresses of the Settings page and of the Nomaflow Package, Changes and Integrity pages lead to the new pages.

---

## Saving \{#save\}

1. **Save** sends the edited configuration; the server validates it against its model and refuses an invalid one with the reason.
2. The file is written. A version of the previous content is kept in **Deploy → History**.
3. The change is applied: at once when the server watches its files (**Hot reload** in Administer → App, the default), or with **Reload config** otherwise.

**Reload config**, at the top of every editor page, re-reads every configuration file into the running server — *Reloaded — 12 connectors, 340 dictionary entries, 4 apps.* A reload rebuilds the connectors from the new files; if they fail, the previous configuration stays active. The pools are not reloaded by the file watcher, so that a running query never loses its connection: after changing a pool, use **Reload config**.

Files are rewritten from the saved model: comments written by hand in a file are not kept.

---

## Tips \{#tips\}

- Save one editor at a time and check the result before moving to the next.
- Keep the configuration under version control on the server; **History** keeps the recent versions, not the whole story.
- Prefer the editors to hand edits: they refuse what the server would refuse. The [Developer reference](./developer-reference.md) says, for every setting, which page edits it.
