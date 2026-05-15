---
title: Menus
description: "The sidebar tree — folders, leaves, permissions. A leaf binds to a TableView query, a DashboardView, an HttpRunner endpoint or a static slug. The tree is pruned to what the caller may run."
keywords: [Liberty Next, menu, sidebar, navigation, permission, folder, leaf, TableView, DashboardView, HttpRunner]
---

# Menus

The **menu** drives the React sidebar. One folder structure per app, with leaves pointing at the things the app exposes — a connector query (opens a TableView), a dashboard (opens a DashboardView), an API endpoint (opens an HttpRunner), or a static slug. The tree is **pruned to what the caller may run**: a leaf whose target the caller cannot run is dropped, and a folder left empty collapses away.

Menus live in `config/menus.toml`. Hot-reloadable with the rest of the config.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="280" height="380" rx="14" fill="url(#mn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📄 menus.toml</text>

  <rect x="56" y="84" width="248" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="68" y="104" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[apps.myapp]</text>
  <text x="68" y="120" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "My App"</text>
  <text x="68" y="134" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">connector = "myapp"</text>

  <rect x="56" y="152" width="248" height="90" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="172" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">[[apps.myapp.items]]</text>
  <text x="68" y="186" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "Master data"</text>
  <text x="68" y="200" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">type = "folder"</text>
  <text x="68" y="216" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">items = [...]</text>

  <rect x="56" y="252" width="248" height="78" rx="8" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.35)" strokeWidth="1"/>
  <text x="68" y="272" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">leaf · type = "query"</text>
  <text x="68" y="286" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "Users"</text>
  <text x="68" y="300" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">query = "users_get"</text>
  <text x="68" y="314" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">screen = "users"</text>

  <rect x="56" y="338" width="248" height="60" rx="8" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.35)" strokeWidth="1"/>
  <text x="68" y="358" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">leaf · type = "dashboard"</text>
  <text x="68" y="372" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "Overview"</text>
  <text x="68" y="386" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dashboard = "overview"</text>

  <line x1="320" y1="220" x2="420" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#mn-arrow)"/>

  <rect x="420" y="40" width="240" height="380" rx="14" fill="url(#mn-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="440" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ permission gate</text>

  <rect x="436" y="84" width="208" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">sql:&#123;c&#125;:&#123;q&#125;</text>
  <text x="448" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">required for `type = "query"`</text>
  <text x="448" y="136" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">leaf dropped otherwise</text>

  <rect x="436" y="152" width="208" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="172" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">api:&#123;c&#125;:&#123;e&#125;</text>
  <text x="448" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">required for `type = "endpoint"`</text>
  <text x="448" y="204" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">leaf dropped otherwise</text>

  <rect x="436" y="220" width="208" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="240" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">roles filter</text>
  <text x="448" y="256" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">leaf with `roles = [...]`</text>
  <text x="448" y="272" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">caller must hold one</text>

  <rect x="436" y="288" width="208" height="60" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="448" y="308" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">folder collapse</text>
  <text x="448" y="324" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">an empty folder</text>
  <text x="448" y="340" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">is dropped from the tree</text>

  <rect x="436" y="356" width="208" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="448" y="376" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">GET /api/menus</text>
  <text x="448" y="392" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">resolved in the request's language</text>

  <line x1="660" y1="220" x2="740" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#mn-arrow)"/>

  <rect x="740" y="40" width="220" height="380" rx="14" fill="url(#mn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="760" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚛️ SIDEBAR</text>

  <rect x="756" y="84" width="188" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="99" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📊 Overview</text>

  <text x="768" y="124" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Master data</text>
  <rect x="776" y="130" width="170" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="788" y="145" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">📋 Users</text>
  <text x="788" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📋 Cities</text>
  <text x="788" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📋 Roles</text>

  <text x="768" y="216" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Operations</text>
  <text x="788" y="236" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📊 Daily KPIs</text>
  <text x="788" y="256" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">🌐 Health check</text>

  <text x="768" y="286" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Settings</text>
  <text x="788" y="306" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Users</text>
  <text x="788" y="326" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Roles</text>
  <text x="788" y="346" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Connectors</text>

  <rect x="756" y="360" width="188" height="46" rx="8" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="768" y="378" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">i18n</text>
  <text x="768" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">labels via l = …</text>
</svg>

---

## App roots

A menu file declares one or more apps. Each app is the top-level folder in the workspace selector.

```toml
[apps.myapp]
label       = "My App"
description = "Application backed by the `myapp` connector."
connector   = "myapp"             # default connector for leaves below

[apps.myapp.l]
fr = "Mon application"
```

The `connector` on the app is the default — every leaf inherits it unless it sets its own. Right for apps that bind to one connector; explicit connector on the leaf when crossing.

---

## Items

Each app holds an ordered list of `items`. An item is either a **folder** or a **leaf**.

```toml
[[apps.myapp.items]]
label = "Master data"
type  = "folder"

  [[apps.myapp.items.items]]      # nested
  label = "Users"
  type  = "query"
  query = "users_get"
  screen = "users"                # opens the Screen `screens.myapp.users` (else just a grid)

  [[apps.myapp.items.items]]
  label = "Cities"
  type  = "query"
  query = "cities_get"

[[apps.myapp.items]]
label     = "Overview"
type      = "dashboard"
dashboard = "overview"

[[apps.myapp.items]]
label    = "Health check"
type     = "endpoint"
endpoint = "ping"
connector = "myservice"           # overrides the app default
```

### Folder

| Field | Description |
|---|---|
| `type` | `"folder"`. |
| `label` / `l` | Folder title; `l = { fr = "…" }` translates. |
| `items` | Nested items (folders or leaves). |

An empty folder — every leaf inside dropped by the permission gate — collapses away from the tree.

### Leaves

| `type` | What it opens | Required fields |
|---|---|---|
| `"query"` | `TableView` against `connector.query`. If `screen` is set, the row click opens its dialog. | `query` (+ `connector` if not the app default) |
| `"dashboard"` | `DashboardView` for `connector.dashboard`. | `dashboard` |
| `"endpoint"` | `HttpRunner` against `connector.endpoint`. | `endpoint` (+ `connector`) |
| `"page"` | Static React route — handy for a custom screen the framework does not host. | `slug` |
| `"link"` | External URL — opens in a new tab. | `href` |

Optional on every leaf:

| Field | Effect |
|---|---|
| `icon` | `lucide-react` icon name (`Users`, `Database`, …). |
| `roles` | List of role names; the leaf is dropped when the caller holds none. |
| `description` | Tooltip / secondary line under the label. |

---

## Permission pruning

The tree returned by `GET /api/menus` is **the caller's tree** — anything they cannot run is gone.

| Leaf | Permission required |
|---|---|
| `type = "query"` | `sql:<connector>:<query>` |
| `type = "endpoint"` | `api:<connector>:<endpoint>` |
| `type = "dashboard"` | the union of every panel's `sql:<connector>:<query>` (a panel without permission is dropped — see [Dashboards](./dashboards.md)) |

Plus the leaf-level `roles` filter when set. Folders propagate the pruning upward — when every descendant is gone, the folder vanishes too.

---

## REST endpoints

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/api/menus` | Every accessible app's tree. |
| `GET` | `/api/menus/{app}` | One app's tree. |

The tree is resolved in the request's language (`X-Liberty-Lang`) — labels come back already translated. The Sidebar renders them straight; no client-side i18n lookup needed for the tree.

---

## Tips & best practices

- **One app per business domain.** Resist the temptation to bundle a whole tenant under a single app — the workspace selector is built to switch between several. Folders inside an app are the right level for grouping.
- **Set `connector` once on the app.** Most leaves stay implicit, the cross-connector ones become visible at a glance.
- **Pick the right leaf type per target.** `query` for data the operator filters / edits, `dashboard` for charts, `endpoint` for an action the operator triggers without a row context, `page` for a custom React route the framework does not host out of the box.
- **`roles` filter is a soft fence.** Permissions enforce the gate; `roles` makes the leaf vanish from the menu so the operator does not see what they cannot run. Use both together — never rely on `roles` for security.
- **Hot-reload picks up rename / reorder cleanly.** Edit `menus.toml`, call `POST /admin/reload`, refresh the tab — the sidebar repaints. Active TableView / Dashboard panels keep their data; only the tree changes.
