---
title: Settings UI
description: "The Liberty Next Settings page: one editor per configuration file, grouped per connector (connectors, dictionary, actions, menus, screens, charts, dashboards, reports, notifications) or shared (pools, theme, access, app, history, release notes), how a save is validated and applied, and Reload config."
keywords: [Liberty Next, Settings UI, editors, connectors, dictionary, actions, menus, screens, charts, dashboards, reports, notifications, pools, theme, access, app, history, reload]
---

# Settings UI

**Settings** in the sidebar opens the editors of the configuration. Each editor is a form built from the same model the server uses to load the file, so what it accepts is what the server accepts. The page is reserved to superusers.

---

## At a glance

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sui-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="360" rx="14" fill="url(#sui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings</text>
  <rect x="840" y="28" width="120" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="900.0" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Reload config</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="84" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PER CONNECTOR</text>
  <rect x="240" y="92" width="458" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="278.5" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Connectors</text>
  <line x1="317" y1="97" x2="317" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="355.5" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dictionary</text>
  <line x1="394" y1="97" x2="394" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="424.5" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Actions</text>
  <line x1="455" y1="97" x2="455" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="480.0" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Menus</text>
  <rect x="506" y="93" width="59" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="535.5" y="107.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Screens</text>
  <line x1="566" y1="97" x2="566" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="593.5" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Charts</text>
  <line x1="621" y1="97" x2="621" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="659.5" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboards</text>
  <text x="240" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SHARED</text>
  <rect x="240" y="146" width="348" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="265.0" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Pools</text>
  <line x1="290" y1="151" x2="290" y2="165" stroke="#334155" strokeWidth="1"/>
  <text x="315.0" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Theme</text>
  <line x1="340" y1="151" x2="340" y2="165" stroke="#334155" strokeWidth="1"/>
  <text x="367.5" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Access</text>
  <line x1="395" y1="151" x2="395" y2="165" stroke="#334155" strokeWidth="1"/>
  <text x="414.5" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">App</text>
  <line x1="434" y1="151" x2="434" y2="165" stroke="#334155" strokeWidth="1"/>
  <text x="464.5" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">History</text>
  <line x1="495" y1="151" x2="495" y2="165" stroke="#334155" strokeWidth="1"/>
  <text x="541.5" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Release notes</text>
  <line x1="240" y1="184" x2="960" y2="184" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="210" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Scope:</text>
  <rect x="290" y="198" width="33" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="306.5" y="210.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="329" y="198" width="43" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="350.5" y="210.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="380" y="196" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="421.5" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add scope</text>
  <rect x="790" y="196" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="830.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="880" y="196" width="80" height="22" rx="5" fill="url(#sui-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="210.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="232" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="430" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <text x="650" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">READ QUERY</text>
  <text x="850" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="264" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="280.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="430" y="280.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="650" y="280.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">customers_get</text>
  <rect x="850" y="269.0" width="56" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="878.0" y="280.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">override</text>
  <rect x="240" y="294" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="310.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">deals</text>
  <text x="430" y="310.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="650" y="310.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">deals_get</text>
  <text x="850" y="310.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="324" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="340.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">activities</text>
  <text x="430" y="340.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Activities</text>
  <text x="650" y="340.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">activities_get</text>
  <text x="850" y="340.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="10" y="92" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per-connector tabs</text>
  <text x="20" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pick a scope, then edit</text>
  <line x1="210" y1="109.0" x2="240" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sui-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shared tabs</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one for the whole install</text>
  <line x1="210" y1="177.0" x2="240" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sui-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Reload config</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">re-read every file</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sui-arrow)"/>
  <rect x="1000" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Discard / Save</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per page, validated</text>
  <line x1="1000" y1="207.0" x2="960" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sui-arrow)"/>
  <rect x="1000" y="270" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Override badge</text>
  <text x="1010" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kept on upgrades</text>
  <line x1="1000" y1="287.0" x2="916" y2="279" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sui-arrow)"/>
</svg>

---

## The tabs \{#tabs\}

**Per connector** — each editor first asks which connector (application or data source) it works on:

| Tab | Edits | See |
|---|---|---|
| **Connectors** | Queries, tables, sequences and lookups of SQL connectors; endpoints of API connectors; connector settings. | [Connectors](../connectors.md), [Queries](../build/queries/overview.md) |
| **Dictionary** | Entries, enums, lookups, sequences. | [Dictionary](../dictionary.md) |
| **Actions** | Shared actions reused by screens. | [Actions and lifecycle](../build/screens/actions-and-lifecycle.md) |
| **Menus** | The sidebar tree of each application. | [Menus](../build/menus/overview.md) |
| **Screens** | Grids, dialogs, tabs, actions — the Screen Designer. | [Screens](../build/screens/overview.md) |
| **Charts** | Saved charts. | [Charts](../charts.md) |
| **Dashboards** | Dashboards and their widgets. | [Dashboards](../dashboards.md) |
| **Explorer** | The Data Explorer's models. | [Build a model](../explorer/model.md) |
| **Reports** | Custom reports. | — |
| **Notifications** | Notification rules. | [Notifications](../../nomaflow/notifications.md) |

**Shared** — install-wide:

| Tab | Edits | See |
|---|---|---|
| **Pools** | Database connections: address, credentials, size, schema and DB-link maps. | [Connectors](../connectors.md) |
| **Theme** | Colours and branding. | — |
| **Access** | Users and roles. | [Users](../build/secure/users.md), [Roles and permissions](../build/secure/roles-and-permissions.md) |
| **App** | Application settings, licence, AI assistant, notifications (e-mail), OpenID Connect, PDF branding. | [App settings](../build/settings-app.md) |
| **History** | Versions of each configuration file and of each screen, upgrade history and reports. | [Config history](./config-history.md) |
| **Release notes** | The release notes of the running version. | — |

**Reload config**, at the right of the tabs, re-reads every configuration file into the running server.


---

## Saving \{#save\}

1. **Save** sends the edited configuration; the server validates it against its model and refuses an invalid one with the reason.
2. The file is written. A version of the previous content is kept in **History**.
3. The change is applied: at once when the server watches its files (**Hot reload** on in Settings → App, the default), or with **Reload config** otherwise. A reload rebuilds the connectors from the new files; if they fail, the previous configuration stays active.

The pools are not reloaded by the file watcher, so that a running query never loses its connection: after changing a pool, use **Reload config**. Settings → **App** applies its own changes at once, except the address, port and log level, which need a restart.

Files are rewritten from the saved model: comments written by hand in a file are not kept.

---

## Outside the editors \{#outside\}

- The **Monitoring** page, in the sidebar, shows the server's live state — see [The Monitoring page](../../monitoring/dashboard.md).
- Nomaflow jobs are edited on the Jobs pages — see [Create a job](../../nomaflow/jobs/create.md).
- `GET /admin/config/raw` reads a file as it is on disk; there is no raw-text editor. Edit the file on the server and **Reload config** when an editor lacks a field.
- Every editor talks to `/admin/config/<section>/parsed` — see [REST API](../../references/rest-api.md#admin-config).

---

## Tips \{#tips\}

- Save one editor at a time and check the result before moving to the next.
- Keep the configuration under version control on the server; **History** keeps the recent versions, not the whole story.
- Prefer the editors to hand edits: they refuse what the server would refuse.
