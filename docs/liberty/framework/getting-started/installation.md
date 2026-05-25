---
title: Installation
description: "Install the Liberty Framework from source: clone liberty-next + liberty-apps, create the Python virtual environment, build the React frontend, bootstrap the auth store and launch the server on port 8000."
keywords: [Liberty Framework, installation, setup, FastAPI, React, Vite, Python 3.12, virtualenv, start.sh, init-db, init-config, LIBERTY_APPS_DIR, low-code, PostgreSQL, Oracle]
---

# Installation

The Liberty Framework ships as **two source repositories** that live side-by-side:

- **`liberty-next`** — the open framework binary: FastAPI backend + React 19 frontend, served on one port.
- **`liberty-apps`** — the per-installation configuration repo: pools, connectors, dictionary, screens, menus, dashboards, charts, jobs.

The framework reads its configuration from the `liberty-apps` repo via the `LIBERTY_APPS_DIR` environment variable. Two repos, one server, one port. No Docker required for development; production deployment is documented under [Deployment → Running in production](../deployment/running-production.md).

---

## At a glance

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '14px', padding: '24px', margin: '24px 0', background: 'linear-gradient(180deg, rgba(74,158,255,0.04), rgba(74,158,255,0))'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', fontSize: '13px'}}>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Requirements</div>
      <div>Python 3.12 · Node.js ≥ 20 · npm · git</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Default database</div>
      <div>SQLite (<code>liberty.db</code>) — switch to PostgreSQL or Oracle via env</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Default port</div>
      <div>http://127.0.0.1:8000 (frontend + API)</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>First-run time</div>
      <div>~3 minutes from clone to a working admin login</div>
    </div>
  </div>
</div>

---

## Step 1 — Clone both repositories

```bash
mkdir -p ~/work && cd ~/work
git clone <liberty-next-url> liberty-next
git clone <liberty-apps-url> liberty-apps
```

Side-by-side layout is the recommended convention — every example in the docs uses it:

```text
~/work/
├── liberty-next/    ← framework binary (open)
└── liberty-apps/    ← your configuration (per-installation)
```

The framework also runs without a separate `liberty-apps` repo — the per-section TOML files are then read from `liberty-next/config/`. Most production installs keep them split so the framework can be updated independently of the configuration.

---

## Step 2 — Python virtual environment

The backend is Python 3.12 + FastAPI. Create a virtual environment under `liberty-next/.venv`:

```bash
cd liberty-next
python3.12 -m venv .venv
.venv/bin/pip install -e ".[dev]"
```

`.[dev]` installs the framework in editable mode plus the test and tooling extras. The full test suite (≥ 335 tests) can be run with:

```bash
.venv/bin/pytest -v
```

---

## Step 3 — Configuration files

Seed the per-section TOML files from the bundled templates:

```bash
./start.sh init-config
```

This copies every `config/<name>.toml.example` to `config/<name>.toml` when the real file is absent — for `connectors`, `dictionary`, `menus`, `screens`, `charts`, `dashboards`. The templates are committed; the real files are not (per-installation / licensed-app content).

To point the framework at your `liberty-apps` repo instead of the local `config/`, export:

```bash
export LIBERTY_APPS_DIR="$HOME/work/liberty-apps/config"
```

With `LIBERTY_APPS_DIR` set, `init-config` does nothing — the per-section TOML is read from the apps repo, not from local templates. The local `config/auth.toml` and `config/app.toml` stay per-installation either way.

See [Project layout](./project-layout.md) for the full directory map.

---

## Step 4 — Bootstrap the auth store

Run **once** on a fresh install to create the auth store and an `admin` user:

```bash
./start.sh init-db
```

The command picks its backend from `[auth] backend` in `config/app.toml`:

| Backend | Effect | When to use |
|---|---|---|
| `toml` *(default)* | Creates `config/auth.toml` with a fresh Argon2-hashed `admin` password (printed once). | Single-host dev install — no external DB needed. |
| `db` | Creates the `ly2_users` / `ly2_roles` / `ly2_permissions` tables on the configured pool and seeds the same `admin`. | Production install — survives container rebuilds and shares the user base across replicas. |

The printed password is shown **once** in stdout. Capture it, or reset it later with `liberty-admin set-password admin <new>`. See [Authentication](../auth/authentication.md) for the full backend matrix.

---

## Step 5 — Launch the server

```bash
./start.sh
```

The wrapper:

1. Builds the React frontend into `frontend/dist/` if the build is stale (or missing).
2. Reads `config/app.toml` and starts FastAPI on `127.0.0.1:8000`.
3. Mounts the SPA at `/` and the REST API under `/api/*` and `/admin/*` on the same port.

Open `http://127.0.0.1:8000`, sign in as `admin` with the password from Step 4 — the Connectors catalogue lands as the home page.

### Other launch modes

| Command | Purpose |
|---|---|
| `./start.sh dev` | Same as `./start.sh` but with backend auto-reload — best when iterating on Python code. |
| `./start.sh api` | Backend only, no frontend build. Pair with `./start.sh frontend` for HMR work. |
| `./start.sh api dev` | Backend only, auto-reload. |
| `./start.sh frontend` | Vite dev server on `:5173` (HMR), proxies `/api/*` and `/admin/*` to `:8000`. |
| `./start.sh build` | Frontend build only — no server. |
| `./start.sh init-config` | Re-seed the per-section TOML files when missing. |
| `./start.sh init-db` | Re-bootstrap the auth store (idempotent — existing users are kept). |
| `./start.sh help` | Full command list. |

### Environment overrides

| Variable | Effect |
|---|---|
| `HOST` / `PORT` | Bind address and port (defaults `127.0.0.1` / `8000`). |
| `VENV` | Path to the virtualenv (default `.venv`). |
| `LIBERTY_APPS_DIR` | Per-section TOML lives in this directory instead of `liberty-next/config/`. |
| `LIBERTY_DB_URL` | Default pool URL — defaults to SQLite (`sqlite+aiosqlite:///liberty.db`). |
| `LIBERTY_JWT_SECRET` | JWT signing key. Unset = ephemeral key (tokens die on restart). |
| `LIBERTY_MASTER_KEY` | AES-256-GCM key used to decrypt `ENC:` blobs in TOML — see [Encryption & secrets](../configuration/encryption-secrets.md). |
| `LIBERTY_LICENSE_KEY` | RS256 JWT unlocking `licensed = true` connectors — see [License key](../auth/license-key.md). |
| `ANTHROPIC_API_KEY` | Enables the [AI assistant](../ai-assistant.md). |

All variables are documented one-by-one under [Environment variables](../configuration/environment-variables.md).

---

## Verify the install

| Check | How |
|---|---|
| Server is up | `curl -s http://127.0.0.1:8000/api/healthz` returns `{"ok":true}`. |
| OpenAPI loads | Open `http://127.0.0.1:8000/docs` — the full REST surface is browsable. |
| Connectors are loaded | Open the Connectors catalogue at `/` — at least the default SQLite pool is listed. |
| Admin can sign in | Sign in with the credentials from Step 4 — the Settings link appears in the header. |
| AI assistant *(optional)* | With `ANTHROPIC_API_KEY` set, open `/chat` — the input field is enabled. |

---

## What's next

- Walk through your first app with [Getting Started → First app](./first-app.md) — a pool, a query, a screen and a menu entry, end-to-end.
- Read [Project layout](./project-layout.md) for the file map of `liberty-apps`.
- Move on to [Configuration → Settings UI](../configuration/settings-ui.md) once everything works from the in-browser builders.
