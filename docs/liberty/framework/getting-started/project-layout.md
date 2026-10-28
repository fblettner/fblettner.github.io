---
title: Project layout
description: "File map of the two repositories — liberty-next (framework binary) and liberty-apps (per-installation configuration). What lives where, what is committed, what is per-installation, and how LIBERTY_APPS_DIR routes the framework to the apps repo."
keywords: [Liberty Framework, project layout, liberty-next, liberty-apps, file structure, LIBERTY_APPS_DIR, config, TOML, plugins, auth.toml]
---

# Project layout

The Liberty Framework is split between **two repositories** that work together at runtime: the framework binary (`liberty-next`) reads its per-section configuration from the apps repo (`liberty-apps`). This page is the file map — where each piece lives, what is committed, what is per-installation.

---

## At a glance

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pjl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pjl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pjl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pjl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="260" rx="14" fill="url(#pjl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="40" width="350" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="62" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">liberty-next  (the framework)</text>
  <text x="258" y="88" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">liberty/</text>
  <text x="576" y="88" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">backend</text>
  <text x="258" y="110" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">frontend/</text>
  <text x="576" y="110" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">React</text>
  <text x="258" y="132" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">config/app.toml</text>
  <text x="576" y="132" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Administer → App</text>
  <text x="258" y="154" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">config/auth.toml</text>
  <text x="576" y="154" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">users, roles</text>
  <text x="258" y="176" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">tests/</text>
  <rect x="610" y="40" width="350" height="216" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="624" y="62" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">liberty-apps  (your configuration)</text>
  <text x="628" y="88" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">config/  ← LIBERTY_APPS_DIR</text>
  <text x="642" y="110" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <text x="946" y="110" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Connectors, Pools</text>
  <text x="642" y="132" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">dictionary.toml</text>
  <text x="946" y="132" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Dictionary</text>
  <text x="642" y="154" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">screens.toml · menus.toml</text>
  <text x="946" y="154" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Screens, Menus</text>
  <text x="642" y="176" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">dashboards.toml · charts.toml</text>
  <text x="642" y="198" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">actions.toml · theme.toml</text>
  <text x="628" y="220" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">plugins/</text>
  <text x="946" y="220" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Python packages</text>
  <text x="642" y="242" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">nomaflow/jobs.toml</text>
  <text x="946" y="242" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Nomaflow jobs</text>
  <rect x="10" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The framework</text>
  <text x="20" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">upgraded, not edited</text>
  <line x1="210" y1="97.0" x2="240" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pjl-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Your configuration</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">written by the Settings pages</text>
  <line x1="1000" y1="77.0" x2="960" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pjl-arrow)"/>
  <rect x="1000" y="220" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">plugins/</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">next to config/</text>
  <line x1="1000" y1="237.0" x2="960" y2="222" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pjl-arrow)"/>
</svg>

The framework is told where the apps repo lives via the `LIBERTY_APPS_DIR` environment variable. Out of the box, with `LIBERTY_APPS_DIR` unset, the framework reads its per-section TOML from `liberty-next/config/` — convenient for local experimentation but not the production layout.

---

## `liberty-next` — the framework binary

```text
liberty-next/
├── start.sh                  ← run/dev helper (build, init-db, init-config, …)
├── pyproject.toml            ← Python deps + CLI entry points
├── liberty/                  ← FastAPI backend (Python 3.12)
│   ├── main.py               ← app factory, lifespan, routers
│   ├── config.py             ← TOML loading + env expansion
│   ├── connectors/           ← SQL / API connector engine, dictionary (dictionary.py)
│   ├── auth/                 ← local users, OIDC, JWT, permissions
│   ├── screens/              ← screen engine (grid + dialog runtime)
│   ├── dashboards/           ← dashboard layout + widget rendering
│   ├── charts/               ← chart definitions
│   ├── menus/                ← menu tree + permission pruning
│   ├── jobs/                 ← Nomaflow (jobs, steps, scheduler)
│   ├── actions/              ← shared actions
│   ├── notify/               ← notifications
│   ├── ai/                   ← Anthropic tool-use assistant
│   ├── licensing/            ← RS256 license-key verification
│   ├── web/                  ← HTTP routes (one module per area)
│   └── *_cli.py              ← CLI entry points (admin, connectors, crypto, license)
│
├── frontend/                 ← React 19 + Vite SPA (built to frontend/dist/)
│   └── src/
│       ├── pages/            ← pages, including Settings/ (one editor per configuration type)
│       ├── common/           ← shared UI parts (fields, lists, dialogs, SQL editor…)
│       ├── components/       ← layout (sidebar, app picker, tabs)
│       ├── locales/          ← interface texts, en and fr
│       └── api/              ← REST client
│
├── config/                   ← bundled templates + per-installation files
│   ├── app.toml              ← application settings — edited in Liberty Next → Administer → App
│   ├── auth.toml             ← local users — created by init-db, gitignored
│   ├── *.toml.example        ← templates for connectors / dictionary / menus / screens / charts / dashboards
│   └── *.toml                ← real per-section files (only when LIBERTY_APPS_DIR is unset)
│
├── tests/                    ← pytest suite
└── docs/                     ← framework-internal planning notes (not the public docs)
```

| File | Status | Edited by |
|---|---|---|
| `liberty/`, `frontend/`, `pyproject.toml`, `start.sh` | Committed | Framework maintainers — *don't* edit per-installation. |
| `config/app.toml` | Per-installation | Liberty Next → Administer → App. |
| `config/auth.toml` | Per-installation, gitignored | `liberty-admin` CLI / the Liberty Next pages. |
| `config/*.toml.example` | Committed | Framework maintainers — bundled templates. |
| `config/*.toml` (without `.example`) | Per-installation, gitignored | Editable from the Liberty Next pages when `LIBERTY_APPS_DIR` is unset. |

---

## `liberty-apps` — your configuration

```text
liberty-apps/
├── README.md
├── config/                   ← per-section TOML — read by liberty-next at runtime
│   ├── connectors.toml       ← pools, connectors and their queries / endpoints
│   ├── dictionary.toml       ← data items, enums, lookups, sequences
│   ├── menus.toml            ← one menu per app
│   ├── screens.toml          ← grids and dialogs
│   ├── charts.toml           ← saved charts
│   ├── dashboards.toml       ← dashboards
│   ├── actions.toml          ← shared actions
│   └── theme.toml            ← colours and branding
│
├── plugins/                  ← Python packages (functions called by steps and actions)
│   ├── <package>/            ← one folder per package, with __init__.py
│   └── nomaflow/
│       └── jobs.toml         ← the Nomaflow job catalogue
│
└── docs/                     ← deployment & operations notes (per-installation)
```

| File | Edited by | Notes |
|---|---|---|
| `config/connectors.toml` | *Build → Connectors* | Owns the pool registry plus every connector. |
| `config/dictionary.toml` | *Build → Dictionary* | Per-column metadata reused by screens and charts. |
| `config/menus.toml` | *Build → Menus* | One root per app, optional folder/leaf hierarchy. |
| `config/screens.toml` | *Build → Screens* | Grids + dialogs + per-field conditions. |
| `config/dashboards.toml` | *Build → Dashboards* | KPI, chart and table widgets. |
| `config/charts.toml` | *Build → Charts* | Chart definitions referenced by dashboards. |
| `config/actions.toml` | *Build → Actions* | Shared actions called by screens. |
| `config/theme.toml` | *Administer → Theme* | Colours and branding. |
| `plugins/nomaflow/jobs.toml` | Nomaflow → *Jobs* | The job catalogue. |
| `plugins/*/*.py` | Developer | Custom step callables — exposed to the framework via `sys.path`. |

Every file is plain TOML you can read with `cat`, diff with `git`, edit in `vim`. The Liberty Next pages uses the same on-disk format — what you save in the browser is what `git status` reports.

---

## How the framework finds your config

The wiring is one environment variable:

```bash
export LIBERTY_APPS_DIR="$HOME/work/liberty-apps/config"
```

When `LIBERTY_APPS_DIR` is **set**:

| Config | Read from |
|---|---|
| `connectors.toml`, `dictionary.toml`, `menus.toml`, `screens.toml`, `charts.toml`, `dashboards.toml` | `${LIBERTY_APPS_DIR}/<name>.toml` |
| `app.toml` | `liberty-next/config/app.toml` *(stays per-host)* |
| `auth.toml` | `liberty-next/config/auth.toml` *(stays per-host)* |
| `plugins/` packages | `${LIBERTY_APPS_DIR}/../plugins/` added to `sys.path` |

When `LIBERTY_APPS_DIR` is **unset**, every file is read from `liberty-next/config/`. Convenient for a single-host dev install; in production keep them separate.

The full env-var contract is documented under [Configuration → Environment variables](../configuration/environment-variables.md).

---

## Naming conventions

- **App identifier** — every screen, menu and job carries an `app` field (e.g. `nomajde`, `nomasx1`, `tutorial`). It's the namespace for screen ids and the prefix of the sidebar entry.
- **Connector name** — short, kebab-case (`jdedwards`, `tasks`, `crm-sql`). The same name surfaces in the catalog page, the AI assistant tool list and the URL of a query.
- **Pool name** — short, lowercase. `default` is reserved for the framework's own pool.
- **Permission code** — `sql:<connector>:<query>` for SQL queries and `api:<connector>:<endpoint>` for HTTP/API endpoints. The Liberty Next pages builds them automatically; no manual code is needed.

---

## Version control conventions

- `liberty-next` is upgraded by **switching git tags** — the framework binary is treated as an external dependency, not modified in place. The `liberty-apps` repo stays untouched across framework upgrades.
- `liberty-apps` is committed normally — every TOML edit done in the Liberty Next pages ends up as a diff in the repo. Commits made by the operator are reviewable like any other code change.
- Secrets — JWT signing key, master key, license key, AI key — live in the **environment**, not in either repo. See [Encryption & secrets](../configuration/encryption-secrets.md).

---

## What's next

- [The Liberty Next workspace](../configuration/settings-ui.md) — the in-browser editor for everything under `liberty-apps/config/`.
- [Apps & Plugins → Apps](../apps/overview.md) — how to organise multiple apps inside `liberty-apps`.
