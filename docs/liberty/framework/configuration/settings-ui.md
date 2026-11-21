---
title: The Liberty Next workspace
description: "The Liberty Next workspace for superusers: the framework's pages in the app picker, opening on Overview and grouped in the order an application is built — Build (Studio, assistant), Data (connectors, dictionary), Screens (screens, menus), Logic (services, tests, notifications, AI), Insight (dashboards, charts, Explorer, report templates) — then Administer, Operate, Deploy and Document; one frame for every editor, Reload config, how a save is validated and applied."
keywords: [Liberty Next, workspace, settings, Build, Administer, Operate, Deploy, Document, editors, connectors, screens, app settings, reload config, superuser]
---

# The Liberty Next workspace

The framework's own pages — the editors of the configuration, the administration of the install, its operation, its deployment and its documentation — form a workspace of their own, **Liberty Next**, offered to superusers in the application picker after the applications. The applications' menus keep their space for the end users.

---

## At a glance

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="wks-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="wks-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="wks-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="wks-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="432" rx="14" fill="url(#wks-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="36" width="330" height="406" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="46" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="60.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Liberty Next ▾</text>
  <text x="250" y="90" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="250" y="110" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Build</text>
  <text x="262" y="126" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Studio</text>
  <text x="262" y="141" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Assistant</text>
  <text x="250" y="168" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Data</text>
  <text x="262" y="184" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Connectors</text>
  <text x="262" y="199" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Dictionary</text>
  <text x="250" y="226" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Screens</text>
  <text x="262" y="242" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Screens</text>
  <text x="262" y="257" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="250" y="284" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Logic</text>
  <text x="262" y="300" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Services</text>
  <text x="262" y="315" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Tests</text>
  <text x="262" y="330" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="262" y="345" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">AI</text>
  <text x="250" y="372" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Insight</text>
  <text x="262" y="388" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Dashboards</text>
  <text x="262" y="403" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Charts</text>
  <text x="262" y="418" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Explorer</text>
  <text x="262" y="433" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Report templates</text>
  <text x="412" y="110" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Administer</text>
  <text x="424" y="126" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">App</text>
  <text x="424" y="141" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Pools</text>
  <text x="424" y="156" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Access</text>
  <text x="424" y="171" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Theme</text>
  <text x="412" y="198" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Operate</text>
  <text x="424" y="214" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Test results</text>
  <text x="424" y="229" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Monitoring</text>
  <text x="424" y="244" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Jobs</text>
  <text x="412" y="271" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Deploy</text>
  <text x="424" y="287" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Integrity</text>
  <text x="424" y="302" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Package</text>
  <text x="424" y="317" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Changes</text>
  <text x="424" y="332" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">History</text>
  <text x="412" y="359" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Document</text>
  <text x="424" y="375" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Developer reference</text>
  <text x="424" y="390" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Documentation reports</text>
  <text x="424" y="405" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Release notes</text>
  <rect x="580" y="36" width="384" height="400" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="596" y="62" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Screens</text>
  <rect x="684" y="48" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="711.5" y="62.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="745" y="48" width="41" height="22" rx="5" fill="url(#wks-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="765.5" y="62.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="792" y="48" width="93" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.5" y="62.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload config</text>
  <rect x="596" y="186" width="352" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="608" y="203" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm · customers</text>
  <rect x="596" y="218" width="352" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="608" y="235" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm · deals</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The app picker</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Liberty Next, after the apps</text>
  <line x1="200" y1="57.0" x2="248" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Build → Insight</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the order an app is built in</text>
  <line x1="200" y1="127.0" x2="250" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Overview first</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the apps and the path</text>
  <line x1="200" y1="347.0" x2="250" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Header buttons</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the same place on every page</text>
  <line x1="1000" y1="47.0" x2="885" y2="59" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Administer, Operate</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the install and its runs</text>
  <line x1="1000" y1="167.0" x2="562" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deploy, Document</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">check, deliver, reference</text>
  <line x1="1000" y1="317.0" x2="562" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
</svg>

---

## Opening it \{#open\}

- In the **application picker** of the sidebar, **Liberty Next** comes after the applications.
- The button at the right of the top bar — *Liberty Next — the framework's pages* — opens it from any application; inside the workspace, the same button reads *Back to &lt;app&gt;* and returns to the last application used.

Users who are not superusers see neither the entry nor the button.

---

## The menu \{#menu\}

The menu opens on **Overview** and then follows the order an application is built in.

| Group | Page | Edits | See |
|---|---|---|---|
| — | **Overview** | The applications of the installation and the eight steps that build one. | [Overview and Studio](../studio.md#overview) |
| **Build** | **Studio** | The map of an application — menu, screens, data, services — edited in place. | [Overview and Studio](../studio.md#studio) |
| | **Assistant** | Opens the Screen Assistant. | [Screen Assistant](../build/screen-assistant.md) |
| **Data** | **Connectors** | Queries, tables, sequences and lookups of SQL connectors; endpoints of API connectors; connector settings. | [Connectors](../connectors.md), [Queries](../build/queries/overview.md), [API endpoints](../build/api-endpoints.md) |
| | **Dictionary** | Entries, enums, lookups, sequences. | [Dictionary](../dictionary.md) |
| **Screens** | **Screens** | Grids, record forms, actions — the Screen Designer. | [Screens](../build/screens/overview.md) |
| | **Menus** | The sidebar tree of each application. | [Menus](../build/menus/overview.md) |
| **Logic** | **Services** | Sequences of steps drawn as a flow, run and exposed as endpoints. | [Services](../build/services.md) |
| | **Tests** | Non-regression tests of the API endpoints. | [Tests](../build/tests.md) |
| | **Notifications** | Notification rules. | [Notifications](../../nomaflow/notifications.md) |
| | **AI** | What each application ships for the AI assistant: starter questions and playbooks. | [AI assistant](../ai-assistant.md#settings-ai) |
| **Insight** | **Dashboards**, **Charts** | Dashboards and their cards; saved charts. | [Dashboards](../dashboards.md), [Charts](../charts.md) |
| | **Explorer** | The Data Explorer's models. | [Build a model](../explorer/model.md) |
| | **Report templates** | The report templates written by the operators; the PDF branding of the install is under App. | — |
| **Administer** | **App** | Every setting of the install, in four groups: the installation, signing in, what is switched on, running it. | [App settings](../build/settings-app.md) |
| | **Pools** | Database connections: address, account, schemas, database links, tuning — with **Test connection**. | [Connectors](../connectors.md) |
| | **Access** | Users and roles. | [Users](../build/secure/users.md), [Roles and permissions](../build/secure/roles-and-permissions.md) |
| | **Theme** | Palette, fonts and text size, previewed in dark and in light. | — |
| **Operate** | **Test results** | How the tests went, run after run. | [Test results](../../monitoring/test-results.md) |
| | **Monitoring** | The live view of the instance. | [The Monitoring page](../../monitoring/dashboard.md) |
| | **Jobs** | The Nomaflow jobs. | [Jobs](../../nomaflow/jobs/catalog.md) |
| **Deploy** | **Integrity** | The cross-checks of the whole configuration: check, then deliver. | — |
| | **Package**, **Changes**, **History** | Packages, change packages, configuration history. | [Packages](../build/packages.md), [Change packages](../../nomaflow/change-packages.md), [Configuration history](./config-history.md) |
| **Document** | **Developer reference**, **Documentation reports** | The reference of every setting; the generated reports. | [Developer reference](./developer-reference.md), [Documentation reports](./documentation-reports.md) |
| | **Release notes** | The notes of the running version, one version at a time, with a search across every version. | — |

Each page has its own address — `/liberty/screens`, `/liberty/app`… —, so a page can be bookmarked or sent as a link.

### One frame for every editor \{#frame\}

The editors share the same frame: the list on the left with a line that says what each item is, the picked item beside it, and the page's buttons — **Discard**, **Save**, the *Add* of the page, **Reload config** — in the page header, always at the same place. What is drawn is drawn the same way everywhere: a screen as six stages, a table as its read and write statements, a pool, an endpoint, a job and a service as flows of cards, with the picked card edited beside the flow. In the sidebar, the menu's right edge is dragged to resize it.

---|---|---|
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
