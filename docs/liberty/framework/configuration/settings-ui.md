---
title: The Liberty Next workspace
description: "The Liberty Next workspace for superusers: the framework's pages in the app picker, opening on Overview and grouped in the order an application is built — Build (Studio, assistant), Data (connectors, dictionary), Screens (screens, menus), Logic (services, tests, notifications, AI), Insight (dashboards, charts, Explorer, report templates) — then Administer, Operate, Deploy and Document; one frame for every editor, Reload config, how a save is validated and applied."
keywords: [Liberty Next, workspace, settings, Build, Administer, Operate, Deploy, Document, editors, connectors, screens, app settings, reload config, superuser]
---

# The Liberty Next workspace

The framework's own pages — the editors of the configuration, the administration of the install, its operation, its deployment and its documentation — form a workspace of their own, **Liberty Next**, offered to superusers in the application picker after the applications. The applications' menus keep their space for the end users.

---

## At a glance

<svg viewBox="0 0 1320 514" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lws-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lws-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lws-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lws-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="474" rx="14" fill="url(#lws-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="232" y="32" width="210" height="450" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="56" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <rect x="242" y="68" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="82.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <text x="420" y="82.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="246" y="112" fill="#64748b" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIBERTY NEXT</text>
  <text x="262" y="132" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="246" y="156" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="156" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Build</text>
  <text x="246" y="180" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="180" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Data</text>
  <text x="246" y="204" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="204" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Screens</text>
  <text x="246" y="228" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="228" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Logic</text>
  <text x="246" y="252" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="252" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Insight</text>
  <rect x="240" y="261" width="194" height="22" rx="5" fill="rgba(255,255,255,0.05)"/>
  <text x="246" y="276" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="262" y="276" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Administer</text>
  <rect x="258" y="285" width="174" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="276" y="300" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">App</text>
  <text x="276" y="323" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Pools</text>
  <text x="276" y="346" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Access</text>
  <text x="276" y="369" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Theme</text>
  <text x="246" y="394" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="394" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Operate</text>
  <text x="246" y="418" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="418" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Deploy</text>
  <text x="246" y="442" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="442" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Document</text>
  <line x1="442" y1="220" x2="442" y2="280" stroke="#4a9eff" strokeWidth="2"/>
  <rect x="948" y="32" width="24" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="960.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">EN</text>
  <rect x="976" y="32" width="24" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="988.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="1004" y="32" width="24" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1016.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◐</text>
  <rect x="1032" y="32" width="24" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1044.0" y="47.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <rect x="1060" y="32" width="24" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1072.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⏻</text>
  <rect x="456" y="32" width="70" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="491.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">App  ✕</text>
  <rect x="472" y="78" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="494" y="90" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">App</text>
  <rect x="973" y="74" width="99" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1022.5" y="88.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload config</text>
  <rect x="926" y="74" width="41" height="22" rx="5" fill="url(#lws-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="946.5" y="88.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="853" y="74" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="886.5" y="88.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Discard</text>
  <line x1="456" y1="106" x2="1088" y2="106" stroke="#1f2937" strokeWidth="1"/>
  <text x="478" y="140" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">The installation</text>
  <rect x="474" y="148" width="188" height="24" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="484" y="164" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Server</text>
  <rect x="474" y="176" width="188" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="192" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Display</text>
  <rect x="474" y="204" width="188" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="220" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">License</text>
  <text x="478" y="242" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Signing in</text>
  <rect x="474" y="250" width="188" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="266" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Sign-in</text>
  <rect x="474" y="278" width="188" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="294" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">OpenID Connect (SSO)</text>
  <rect x="468" y="120" width="200" height="192" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="680" y="120" width="396" height="192" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="694" y="140" fill="#e2e8f0" fontSize="9.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SERVER</text>
  <line x1="680" y1="150" x2="1076" y2="150" stroke="#1f2937" strokeWidth="1"/>
  <text x="694" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APP NAME</text>
  <rect x="694" y="174" width="177.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="704" y="188.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME ERP</text>
  <text x="885.0" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONMENT</text>
  <rect x="885.0" y="174" width="177.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="895.0" y="188.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">production</text>
  <text x="694" y="216" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BIND HOST</text>
  <rect x="694" y="222" width="177.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="704" y="236.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">0.0.0.0</text>
  <text x="885.0" y="216" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PORT</text>
  <rect x="885.0" y="222" width="177.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="895.0" y="236.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">8000</text>
  <rect x="694" y="271" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M696.5,276.5 L698.8,278.8 L702.8,274" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="711" y="280" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Hot-reload config TOML files on change</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The app picker</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Liberty Next, after the apps</text>
  <line x1="200" y1="57.0" x2="242" y2="79" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Overview first</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the apps and the way to build one</text>
  <line x1="200" y1="147.0" x2="258" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Build → Insight</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the order an app is built in</text>
  <line x1="200" y1="227.0" x2="258" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Administer, Operate…</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the install, its runs, delivery</text>
  <line x1="200" y1="317.0" x2="258" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="20" y="410" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="425" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deploy, Document</text>
  <text x="30" y="438" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">check, deliver, reference</text>
  <line x1="200" y1="427.0" x2="258" y2="438" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="1120" y="20" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="35" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The framework's pages</text>
  <text x="1130" y="48" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from any app; Back to &lt;app&gt;</text>
  <line x1="1120" y1="37.0" x2="1044" y2="44" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Header buttons</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Discard, Save, Reload config</text>
  <line x1="1120" y1="127.0" x2="956" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">List, then the picked item</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the same frame everywhere</text>
  <line x1="1120" y1="317.0" x2="1076" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
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
| | **Report templates** | The report templates written by the operators; the PDF branding of the install is under App. | [Report templates](../report-templates.md) |
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

---

## Saving \{#save\}

1. **Save** sends the edited configuration; the server validates it against its model and refuses an invalid one with the reason.
2. The file is written. A version of the previous content is kept in **Deploy → History**.
3. The change is applied: at once when the server watches its files (**Hot-reload config TOML files on change** in Administer → App → Server, the default), or with **Reload config** otherwise.

**Reload config**, at the top of every editor page, re-reads every configuration file into the running server — *Reloaded — 12 connectors, 340 dictionary entries, 4 apps.* A reload rebuilds the connectors from the new files; if they fail, the previous configuration stays active. The pools are not reloaded by the file watcher, so that a running query never loses its connection: after changing a pool, use **Reload config**.

Files are rewritten from the saved model: comments written by hand in a file are not kept.

---

## Tips \{#tips\}

- Save one editor at a time and check the result before moving to the next.
- Keep the configuration under version control on the server; **History** keeps the recent versions, not the whole story.
- Prefer the editors to hand edits: they refuse what the server would refuse. The [Developer reference](./developer-reference.md) says, for every setting, which page edits it.
