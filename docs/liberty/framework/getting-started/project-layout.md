---
title: Project layout
description: "File map of the two repositories — liberty-next (framework binary) and liberty-apps (per-installation configuration). What lives where, what is committed, what is per-installation, and how LIBERTY_APPS_DIR routes the framework to the apps repo."
keywords: [Liberty Framework, project layout, liberty-next, liberty-apps, file structure, LIBERTY_APPS_DIR, config, TOML, plugins, auth.toml, app.toml]
---

# Project layout

The Liberty Framework is split between **two repositories** that work together at runtime: the framework binary (`liberty-next`) reads its per-section configuration from the apps repo (`liberty-apps`). This page is the file map — where each piece lives, what is committed, what is per-installation.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '18px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '18px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>liberty-next</div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '6px'}}>The framework binary</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Open source — FastAPI backend + React frontend, every concept built into the core. Cloned once per host, upgraded by switching tags.</div>
  </div>
  <div style={{border: '1px solid rgba(192,132,252,0.40)', borderRadius: '10px', padding: '18px', background: 'rgba(192,132,252,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#c084fc', marginBottom: '8px'}}>liberty-apps</div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '6px'}}>Your configuration</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Per-installation — pools, connectors, screens, menus, dashboards, charts, jobs and any custom Python plugins. Versioned separately.</div>
  </div>
</div>

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
│   ├── connectors/           ← SQL / HTTP / API connector engine
│   ├── auth/                 ← local users, OIDC, JWT, permissions
│   ├── dictionary/           ← shared field metadata
│   ├── screens/              ← screen engine (grid + dialog runtime)
│   ├── dashboards/           ← dashboard layout + widget rendering
│   ├── charts/               ← chart definitions
│   ├── menus/                ← menu tree + permission pruning
│   ├── jobs/                 ← Nomaflow (ETL + scheduler)
│   ├── ai/                   ← Anthropic tool-use assistant
│   ├── licensing/            ← RS256 license-key verification
│   ├── web/                  ← HTTP route handlers (*_router.py)
│   └── *_cli.py              ← CLI entry points (admin, connectors, crypto, license)
│
├── frontend/                 ← React 19 + Vite SPA (built to frontend/dist/)
│   └── src/
│       ├── pages/            ← lazy-loaded route components
│       ├── builders/         ← Settings UI builders (one per config type)
│       ├── components/       ← shared UI atoms (table, dialog, chart, …)
│       └── api/              ← REST client wrappers
│
├── config/                   ← bundled templates + per-installation files
│   ├── app.toml              ← framework settings (auth, OIDC, AI, crypto, license)
│   ├── auth.toml             ← local users — created by init-db, gitignored
│   ├── *.toml.example        ← templates for connectors / dictionary / menus / screens / charts / dashboards
│   └── *.toml                ← real per-section files (only when LIBERTY_APPS_DIR is unset)
│
├── tests/                    ← pytest suite (≥ 335 tests)
└── docs/                     ← framework-internal planning notes (not the public docs)
```

| File | Status | Edited by |
|---|---|---|
| `liberty/`, `frontend/`, `pyproject.toml`, `start.sh` | Committed | Framework maintainers — *don't* edit per-installation. |
| `config/app.toml` | Per-installation | Operator — auth backend, OIDC issuer, AI key reference, license file path. |
| `config/auth.toml` | Per-installation, gitignored | `liberty-admin` CLI / the Settings UI. |
| `config/*.toml.example` | Committed | Framework maintainers — bundled templates. |
| `config/*.toml` (without `.example`) | Per-installation, gitignored | Editable from the Settings UI when `LIBERTY_APPS_DIR` is unset. |

---

## `liberty-apps` — your configuration

```text
liberty-apps/
├── README.md
├── config/                   ← per-section TOML — read by liberty-next at runtime
│   ├── connectors.toml       ← pools + named queries / endpoints
│   ├── dictionary.toml       ← reusable field metadata
│   ├── menus.toml            ← sidebar trees per app
│   ├── screens.toml          ← grid + dialog definitions
│   ├── charts.toml           ← Recharts wrapper config
│   └── dashboards.toml       ← dashboard layouts
│
├── plugins/                  ← custom Python modules (job step callables, hooks, …)
│   └── <package>/            ← one folder per app
│       ├── __init__.py
│       └── jobs.toml         ← Nomaflow job catalogue for this app
│
└── docs/                     ← deployment & operations notes (per-installation)
```

| File | Edited by | Notes |
|---|---|---|
| `config/connectors.toml` | Settings UI → *Connectors* | Owns the pool registry plus every connector. |
| `config/dictionary.toml` | Settings UI → *Dictionary* | Per-column metadata reused by screens and charts. |
| `config/menus.toml` | Settings UI → *Menus* | One root per app, optional folder/leaf hierarchy. |
| `config/screens.toml` | Settings UI → *Screens* | Grids + dialogs + per-field conditions. |
| `config/dashboards.toml` | Settings UI → *Dashboards* | Stat / bar / line / pie panels. |
| `config/charts.toml` | Settings UI → *Charts* | Chart definitions referenced by dashboards. |
| `plugins/*/jobs.toml` | Settings UI → *Jobs* | Nomaflow catalogue — one file per app package. |
| `plugins/*/*.py` | Developer | Custom step callables — exposed to the framework via `sys.path`. |

Every file is plain TOML you can read with `cat`, diff with `git`, edit in `vim`. The Settings UI uses the same on-disk format — what you save in the browser is what `git status` reports.

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
- **Permission code** — `sql:<connector>:<query>` for SQL queries and `api:<connector>:<endpoint>` for HTTP/API endpoints. The Settings UI builds them automatically; no manual code is needed.

---

## Version control conventions

- `liberty-next` is upgraded by **switching git tags** — the framework binary is treated as an external dependency, not modified in place. The `liberty-apps` repo stays untouched across framework upgrades.
- `liberty-apps` is committed normally — every TOML edit done in the Settings UI ends up as a diff in the repo. Commits made by the operator are reviewable like any other code change.
- Secrets — JWT signing key, master key, license key, AI key — live in the **environment**, not in either repo. See [Encryption & secrets](../configuration/encryption-secrets.md).

---

## What's next

- [Configuration → Settings UI](../configuration/settings-ui.md) — the in-browser editor for everything under `liberty-apps/config/`.
- [Configuration → app.toml reference](../configuration/app-toml.md) — every key documented.
- [Apps & Plugins → Apps](../apps/overview.md) — how to organise multiple apps inside `liberty-apps`.
