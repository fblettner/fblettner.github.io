---
title: Framework Overview
description: "The Liberty Framework is layered around pools, connectors, the dictionary, screens, dashboards, menus, charts and jobs — each layer is a TOML file. The schema of a query result is discovered at runtime, no schema duplication. Everything is hot-reloadable, every config tab in the Settings UI maps to one file."
keywords: [Liberty Framework, architecture, pool, connector, dictionary, screen, dashboard, menu, chart, job, TOML, hot-reload, settings UI]
---

# Framework Overview

The Liberty Framework is a connector-driven low-code platform: a FastAPI backend + React 19 frontend, configured entirely through TOML files. The platform sits on a small number of well-defined concepts that combine into apps; an app can be assembled, edited and shipped without writing Python or React.

This page is the map — every concept has its own page linked from here. New to the framework? Start with [Getting Started → Installation](./getting-started/installation.md) to set up your first install, then walk through [Getting Started → First app](./getting-started/first-app.md) for an end-to-end "pool → connector → screen → menu" loop in five minutes.

The platform sits on a handful of configuration files under `config/` (in `liberty-apps`) and one framework-wide file under `liberty-next/config/`. Each file defines one layer; together they describe a fully working application.

| Layer | File | What it carries |
|---|---|---|
| **Pools** | `connectors.toml` (`[pools.*]`) | Database connections — URL, dialect, optional `password` / `schemas` / `max_rows`. |
| **Connectors** | `connectors.toml` (`[connectors.*]`) | SQL connectors (named queries) and API connectors (named endpoints). |
| **Dictionary** | `dictionary.toml` | Per-column metadata: labels, formats, `BOOLEAN` / `ENUM` / `LOOKUP` rules. |
| **Screens** | `screens.toml` | One screen per business object: which query to read, edit, insert, delete; the dialog tabs and fields. |
| **Dashboards** | `dashboards.toml` | Charts, KPIs and grouped layouts over the same named queries. |
| **Menus** | `menus.toml` | The sidebar tree — folders, items, permissions. |

Everything is **hot-reloadable**. `POST /admin/reload` rebuilds the registry; in-flight requests keep the version they started with.

---

## At a glance

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fov-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fov-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fov-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="240" height="380" rx="14" fill="url(#fov-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">CONFIG · TOML</text>

  <rect x="56" y="84" width="208" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="102" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <text x="68" y="118" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">pools + connectors</text>

  <rect x="56" y="136" width="208" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="158" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">dictionary.toml</text>

  <rect x="56" y="180" width="208" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="202" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">screens.toml</text>

  <rect x="56" y="224" width="208" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="246" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">dashboards.toml</text>

  <rect x="56" y="268" width="208" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="290" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">menus.toml</text>

  <rect x="56" y="312" width="208" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="334" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">auth.toml · app.toml</text>

  <rect x="56" y="358" width="208" height="46" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="68" y="378" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">POST /admin/reload</text>
  <text x="68" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">hot-reload</text>

  <line x1="280" y1="230" x2="380" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#fov-arrow)"/>

  <rect x="380" y="40" width="260" height="380" rx="14" fill="url(#fov-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="400" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ LIBERTY NEXT CORE</text>

  <rect x="396" y="84" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="102" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">PoolRegistry</text>
  <text x="408" y="118" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">async engines · ENC: decrypt</text>

  <rect x="396" y="136" width="228" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="154" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">ConnectorRegistry</text>
  <text x="408" y="170" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">SQL connector · API connector</text>
  <text x="408" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">writable gate · param bind</text>

  <rect x="396" y="204" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="222" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">DictionaryFile</text>
  <text x="408" y="238" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">labels · format · rules · i18n</text>

  <rect x="396" y="256" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="274" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">ScreensFile</text>
  <text x="408" y="290" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">read · update · insert · delete</text>

  <rect x="396" y="308" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="326" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">DashboardsFile · MenusFile</text>
  <text x="408" y="342" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">charts · KPIs · sidebar tree</text>

  <rect x="396" y="360" width="228" height="44" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.35)" strokeWidth="1"/>
  <text x="408" y="378" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">AuthBackend</text>
  <text x="408" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">TOML or DB · JWT · OIDC</text>

  <line x1="640" y1="230" x2="740" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#fov-arrow)"/>

  <rect x="740" y="40" width="220" height="380" rx="14" fill="url(#fov-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="760" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚛️ REACT UI</text>

  <rect x="756" y="84" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="106" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">📋 TableView</text>

  <rect x="756" y="128" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="150" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">📊 DashboardView</text>

  <rect x="756" y="172" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="194" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Settings (Builders)</text>

  <rect x="756" y="216" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="238" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">🌐 HttpRunner</text>

  <rect x="756" y="260" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="282" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">💬 AI Chat</text>

  <rect x="756" y="304" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="326" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">🗂 Workspace · Sidebar</text>

  <rect x="756" y="348" width="188" height="56" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="768" y="368" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">i18n EN / FR</text>
  <text x="768" y="384" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">labels from the dictionary</text>
  <text x="768" y="398" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">localized per request</text>

  <rect x="40" y="440" width="920" height="30" rx="6" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="60" y="460" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">License key gates `licensed = true` connectors (nomasx1 · nomajde). The framework runs without one — just without those apps.</text>
</svg>

---

## Layers

### Pools

A **pool** is one SQLAlchemy async engine — `postgresql+asyncpg://…`, `oracle+oracledb://…`, `sqlite+aiosqlite://…`. Defined under `[pools.<name>]` in `connectors.toml`:

```toml
[pools.myapp]
url = "postgresql+asyncpg://myapp@db:5432/myapp"
password = "ENC:…"       # ENC: blob, ${ENV} ref, or plaintext
pool_size = 10
max_rows = 5000          # default SELECT row cap for this pool

[pools.myapp.schemas]
PROD = "myapp_prod"      # `#SCHEMA.PROD#` in a query becomes `myapp_prod` at execute time
```

The `default` pool is special — it is the framework pool and the home of the `ly2_*` auth tables when `[auth] backend = "db"`. A fresh checkout points it at a local SQLite file so the app boots without a database.

### Connectors

A **connector** is the named target a screen, a dashboard or the assistant talks to. Two types:

- **SQL connector** — list of named queries against a pool. Schema is discovered from `cursor.description`; the dictionary supplies labels and rules per column.
- **API connector** — list of named endpoints against an `httpx.AsyncClient`. Auth: `none` / `basic` / `bearer` / `api_key` / `oauth2` (token-endpoint POST + dot-path extraction + TTL cache + one refresh on 401).

See [Connectors](./connectors.md) for the full reference.

### Dictionary

The **dictionary** defines per-column metadata: labels (with per-language translations), formats and display rules. Each entry pins a column's identity once; every screen that returns that column inherits them automatically:

```toml
[entries.USER_STATUS]
label = "Status"
[entries.USER_STATUS.l]
fr = "Statut"

[enums.USER_STATUS]
values = [
  { value = "Y", label = "Active", l = { fr = "Actif" } },
  { value = "N", label = "Inactive", l = { fr = "Inactif" } },
]
```

A `column.dd = "USER_STATUS"` on the query lifts the label and the `ENUM` rule onto the grid — the cell renders the localized label, the per-column filter offers the multi-select picker, no further code. See [Dictionary](./dictionary.md).

### Screens

A **screen** is the definition of one business object: the read query that drives the grid, the optional write queries, and the inline modal form. Defined under `[screens.<app>.<id>]` in `screens.toml`:

```toml
[screens.myapp.users]
label  = "Users"
read_query   = "users_get"
update_query = "users_put"
audit  = true
auto_load = true

[[screens.myapp.users.dialog.tabs]]
id    = "main"
label = "General"
cols  = 2
fields = [
  { column = "ID",     hidden = true },
  { column = "NAME",   required = true },
  { column = "STATUS", colspan = 2 },
]
```

Clicking a row in the grid opens a typed modal form built from this. The widget per field is picked from the read query's column rule (BOOLEAN → checkbox, ENUM → searchable dropdown, LOOKUP → searchable dropdown narrowed by `lookup_param_binds`, plus date / number / text from `format` / `type`). See [Screens](./screens.md).

### Dashboards

A **dashboard** is a grid of KPIs and charts over the same named queries. Each panel binds to a query, picks an aggregation, and lays out under one of the standard chart types. See [Dashboards](./dashboards.md).

### Menus

The **sidebar tree**. Folders nest; leaves bind to a query (`TableView`), a dashboard (`DashboardView`), an endpoint (`HttpRunner`) or a static slug. The tree is **pruned to what the caller may run** — a leaf without the corresponding `sql:{conn}:{name}` / `api:{conn}:{name}` permission is dropped, and a folder left empty collapses away. See [Menus](./menus.md).

---

## Auth

Two backends, picked in `[auth]`:

| Backend | Where users live | Why |
|---|---|---|
| `toml` *(default)* | `config/auth.toml` | No database needed at startup. Hot-reloaded on every call. Right for small deployments and tests. |
| `db` | The `ly2_*` tables on the framework pool | Operator-managed users via the React Settings → Users editor. `argon2` password hashes. |

Tokens are JWTs signed with `LIBERTY_JWT_SECRET` (or an ephemeral key when unset). OIDC against any provider is wired via `authlib`.

The `permissions` list on a role gates what the caller may run: `sql:<connector>:<query>`, `api:<connector>:<endpoint>`, `admin:*`. The same gate applies on the menu tree, so the operator never sees a leaf they cannot click.

---

## License

The framework is free. Licensed connectors (`licensed = true` in `connectors.toml`) are unlocked by `LIBERTY_LICENSE_KEY` — an RS256-signed JWT generated by the vendor. The same JWT shape and key-pair as NomaUBL's license. A configured-but-broken key (expired or bad signature) surfaces a banner in the React UI; no key at all simply hides the licensed connectors.

This is what gates **nomasx1** and **nomajde** — both bundled under a single key.

---

## Frontend in one paragraph

React 19 + Vite + TypeScript, built once into `frontend/dist` and served as static by the backend. Dark default with a light theme swap, `react-i18next` EN / FR, `lucide-react` icons, DM Sans, `@tanstack/react-table` for the grid, `react-markdown` + `remark-gfm` for the assistant, `@monaco-editor/react` for the raw TOML escape hatch. Visual model is the same "liquid-glass" look used by NomaUBL — `@emotion/styled` themed components.

---

## Where to go from here

| You want to… | Read |
|---|---|
| Install the framework on your machine | [Getting Started → Installation](./getting-started/installation.md) |
| Build your first app | [Getting Started → First app](./getting-started/first-app.md) |
| Understand the file layout of `liberty-apps` | [Getting Started → Project layout](./getting-started/project-layout.md) |
| Edit configuration in the browser | [Configuration → Settings UI](./configuration/settings-ui.md) |
| Reference every key of `app.toml` | [Configuration → `app.toml`](./configuration/app-toml.md) |
| Set environment variables for production | [Configuration → Environment variables](./configuration/environment-variables.md) |
| Encrypt connector passwords | [Configuration → Encryption & secrets](./configuration/encryption-secrets.md) |
| Wire authentication / OIDC | [Authentication](./auth/authentication.md) |
| Define roles and permissions | [Authentication → Roles & permissions](./auth/roles-permissions.md) |
| Install a license key | [Authentication → License key](./auth/license-key.md) |
| Organise multiple apps | [Apps & Plugins → Apps](./apps/overview.md) |
| Write a custom Python step | [Apps & Plugins → Plugins](./apps/plugins.md) |
| Add a language | [Apps & Plugins → i18n](./apps/i18n.md) |
| Schedule recurring jobs | [Jobs → Overview](./jobs/overview.md) |
| Talk to the AI assistant | [AI Assistant](./ai-assistant.md) |
| Use the CLIs | [CLI reference](./cli-reference.md) |
| Build a REST integration | [REST API reference](./rest-api.md) |
| Deploy to production | [Deployment → Running in production](./deployment/running-production.md) |
| Move across versions | [Deployment → Upgrading](./deployment/upgrading.md) |
