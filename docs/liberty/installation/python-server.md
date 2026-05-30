---
title: Python server
description: "pipx-based install of Liberty Next on a Linux host — one pre-built PyPI wheel (frontend bundle baked in), four CLIs on the PATH, SQLite by default, optional Postgres. No Docker, no git clone, no npm build."
keywords: [Liberty Framework, Liberty Next, installation, pipx, PyPI, wheel, liberty-next, liberty-admin, liberty-license, liberty-crypto, LIBERTY_JWT_SECRET, LIBERTY_MASTER_KEY, LIBERTY_DB_URL, LIBERTY_APPS_DIR, LIBERTY_ADMIN_PASSWORD, systemd, SQLite, PostgreSQL, OIDC]
---

# Python server

Liberty Next ships as a self-contained wheel on PyPI — the React frontend bundle is baked in. One `pipx install` lands the server and three companion CLIs on the PATH. No clone, no `npm`, no virtualenv to manage by hand.

:::info[Pick the right shape first]
This page is the **Docker-averse single-host** install — a laptop trial, a developer box, a tiny VM where Docker is overkill. For production / multi-user environments use the [Full Docker layout](./docker.md#full) instead: it bundles Postgres, Traefik, pgAdmin and Portainer behind one Compose file, and is what the licensed bundles (Nomasx-1, Nomajde, NomaUBL) deploy against.
:::

---

## At a glance

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '14px', padding: '24px', margin: '24px 0', background: 'linear-gradient(180deg, rgba(74,158,255,0.04), rgba(74,158,255,0))'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', fontSize: '13px'}}>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Requirements</div>
      <div>Python 3.12 · pipx</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Default database</div>
      <div>SQLite (<code>./liberty.db</code>) — point at Postgres via <code>LIBERTY_DB_URL</code></div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Default port</div>
      <div>http://localhost:8000 (SPA + REST API)</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>First-run time</div>
      <div>~1 minute from <code>pipx install</code> to admin login</div>
    </div>
  </div>
</div>

---

## Prerequisites

| Tool | Version | Notes |
|---|---|---|
| Python | 3.12 | The wheel pins `python_requires>=3.12`. |
| pipx | latest | `python3 -m pip install --user pipx && python3 -m pipx ensurepath`. |
| Postgres *(optional)* | 14+ | Only if you want to swap SQLite for an external DB. The light install runs fine without it. |

---

## Step 1 — Install the wheel

```bash
pipx install liberty-next
```

pipx creates an isolated virtualenv under `~/.local/pipx/venvs/liberty-next` and exposes four entry points on the PATH:

| Command | Purpose |
|---|---|
| `liberty-next` | The server — FastAPI backend + the bundled React SPA on the same port. |
| `liberty-admin` | User / role / DB management (`init-db`, `create-user`, `set-password`, …). |
| `liberty-license` | License key inspection (`verify`, expiry, included products). |
| `liberty-crypto` | Encryption key helpers — encrypt secrets for inline use in TOML (`ENC:` blobs). |

Verify they're on the PATH:

```bash
liberty-next --version
liberty-admin --help
```

---

## Step 2 — Generate the required secrets

Two env vars are mandatory — the server refuses to start without them.

```bash
export LIBERTY_JWT_SECRET="$(python -c 'import secrets;print(secrets.token_urlsafe(48))')"
export LIBERTY_MASTER_KEY="$(python -c 'import secrets;print(secrets.token_urlsafe(32))')"
```

| Variable | What it does |
|---|---|
| `LIBERTY_JWT_SECRET` | Signs the JWT cookies issued at login. If unset or rotated, every active session is invalidated. |
| `LIBERTY_MASTER_KEY` | AES-256-GCM key that decrypts `ENC:…` blobs inside the TOML files (pool passwords, OIDC client secrets, …). See [Encryption & secrets](../framework/configuration/encryption-secrets.md). |

For a systemd-managed install, put both in an `EnvironmentFile` (see [Step 6](#step-6--run-under-systemd)) rather than the shell.

---

## Step 3 — Bootstrap the admin password

Set `LIBERTY_ADMIN_PASSWORD` **before** the first start. The entrypoint runs `liberty-admin init-db` automatically on every boot — idempotent: it creates the auth store on a fresh install, and adds any new framework tables a newer release brings without touching existing rows.

```bash
export LIBERTY_ADMIN_PASSWORD="ChangeMe-OnFirstLogin"
```

Already running and need to reset? Use the CLI:

```bash
liberty-admin set-password admin <new-password>
```

---

## Step 4 — Pick a working directory (optional but recommended)

By default Liberty reads its configuration from `./config/<name>.toml` and stores the SQLite database in `./liberty.db` — both relative to the **current working directory**. Point at a stable location so you can run `liberty-next` from anywhere:

```bash
sudo mkdir -p /etc/liberty-next /var/lib/liberty-next
sudo chown $USER /etc/liberty-next /var/lib/liberty-next

export LIBERTY_APPS_DIR=/etc/liberty-next/
```

| Variable | Effect |
|---|---|
| `LIBERTY_APPS_DIR` | Where the per-section TOML files live (`connectors.toml`, `dictionary.toml`, `screens.toml`, `menus.toml`, `dashboards.toml`, `charts.toml`). Defaults to `./config/`. |

The framework creates the missing TOML files on first boot from its bundled templates — no separate `init-config` step needed.

---

## Step 5 — Start the server

```bash
liberty-next
```

The server binds on `http://localhost:8000` (override with `LIBERTY_PORT`) and serves both the SPA at `/` and the REST API under `/api/*` and `/admin/*`. Sign in as `admin` with the password from [Step 3](#step-3--bootstrap-the-admin-password) — the Connectors catalogue lands as the home page.

### Pick a database

The default backend is SQLite — zero setup, a single `liberty.db` file in the working directory. To point at an existing Postgres instead:

```bash
export LIBERTY_DB_URL="postgresql+asyncpg://liberty:secret@db.example.com:5432/liberty"
```

| Backend | URL shape |
|---|---|
| SQLite *(default)* | `sqlite+aiosqlite:///./liberty.db` |
| PostgreSQL | `postgresql+asyncpg://<user>:<password>@<host>:<port>/<database>` |
| Oracle | `oracle+oracledb_async://<user>:<password>@<host>:<port>/?service_name=<name>` |

Switching backend after data already exists is a migration, not a swap — export from one and re-import into the other, or start a fresh DB.

---

## Step 6 — Run under systemd

For an unattended server use a system user, an `EnvironmentFile` for the secrets, and `Restart=on-failure` so the unit recovers from transient errors.

Create a dedicated user and the secrets file:

```bash
sudo useradd --system --create-home --shell /usr/sbin/nologin liberty
sudo install -d -m 0750 -o liberty -g liberty /etc/liberty
sudo install -d -m 0750 -o liberty -g liberty /etc/liberty-next
sudo install -d -m 0750 -o liberty -g liberty /var/lib/liberty-next
```

```bash title="/etc/liberty/secrets.env (mode 0640, root:liberty)"
LIBERTY_JWT_SECRET=<paste the token_urlsafe(48) output here>
LIBERTY_MASTER_KEY=<paste the token_urlsafe(32) output here>
LIBERTY_ADMIN_PASSWORD=ChangeMe-OnFirstLogin
LIBERTY_APPS_DIR=/etc/liberty-next/
LIBERTY_DB_URL=postgresql+asyncpg://liberty:secret@db.example.com:5432/liberty
LIBERTY_PORT=8000
# LIBERTY_LICENSE_KEY=eyJhbGciOi...
# ANTHROPIC_API_KEY=sk-ant-...
```

Install the wheel system-wide (one virtualenv, all users get the CLIs) and write the unit file:

```bash
sudo PIPX_HOME=/opt/pipx PIPX_BIN_DIR=/usr/local/bin pipx install liberty-next
```

```ini title="/etc/systemd/system/liberty-next.service"
[Unit]
Description=Liberty Next
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=liberty
Group=liberty
WorkingDirectory=/var/lib/liberty-next
EnvironmentFile=/etc/liberty/secrets.env
ExecStart=/usr/local/bin/liberty-next
Restart=on-failure
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ReadWritePaths=/var/lib/liberty-next /etc/liberty-next

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now liberty-next
sudo journalctl -u liberty-next -f
```

---

## Optional env vars

Everything below is optional — Liberty starts without it.

| Variable | Effect |
|---|---|
| `LIBERTY_PORT` | TCP port the server binds on (default `8000`). |
| `LIBERTY_LICENSE_KEY` | RS256 JWT unlocking the bundled vendor products (Nomasx-1, Nomajde, NomaUBL). See [License key](../framework/build/secure/license-key.md). |
| `ANTHROPIC_API_KEY` | Enables the in-app [AI assistant](../framework/ai-assistant.md). |
| `LIBERTY_OIDC_ENABLED` | Set to `true` to delegate sign-in to an external OIDC provider (Keycloak, Auth0, Azure AD, …). |
| `LIBERTY_OIDC_PROVIDER_URL` | Issuer URL of the OIDC provider, e.g. `https://auth.example.com/realms/liberty`. |
| `LIBERTY_OIDC_CLIENT_ID` | Client ID registered with the OIDC provider. |
| `LIBERTY_OIDC_CLIENT_SECRET` | Client secret registered with the OIDC provider. |

Full reference: [Environment variables](../framework/configuration/environment-variables.md).

---

## Verify the install

| Check | How |
|---|---|
| Server is up | `curl -fsS http://localhost:8000/info` returns a JSON payload with the framework version. |
| OpenAPI loads | Open `http://localhost:8000/docs` — the full REST surface is browsable. |
| SPA renders | Open `http://localhost:8000/` — the sign-in screen appears. |
| Admin can sign in | Sign in as `admin` with `LIBERTY_ADMIN_PASSWORD` — the Connectors catalogue is the landing page. |
| AI assistant *(optional)* | With `ANTHROPIC_API_KEY` set, open `/chat` — the input field is enabled. |
| License *(optional)* | `liberty-license verify` prints the included products and expiry. |

---

## Upgrade

```bash
pipx upgrade liberty-next
sudo systemctl restart liberty-next      # if running under systemd
```

The entrypoint re-runs `liberty-admin init-db` on every boot — idempotent: any new framework tables a newer release brings are created in place, existing rows are kept. No manual migration step.

To pin a specific release:

```bash
pipx install --force liberty-next==<version>
```

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `LIBERTY_JWT_SECRET is required` on start | The env var didn't propagate. | Re-`export` it in the same shell, or add it to `EnvironmentFile`. |
| `Address already in use` on port 8000 | Another process holds the port. | Set `LIBERTY_PORT=8001` (or whatever's free). |
| Sign-in says "invalid credentials" | The bootstrap password wasn't set on first boot, or was changed. | `liberty-admin set-password admin <new>`. |
| Config TOML edits don't show up | Wrong `LIBERTY_APPS_DIR`. | `liberty-next` logs the resolved path on boot — grep for `apps_dir=`. |
| `liberty-next` not found after install | pipx's bin dir isn't on the PATH. | Run `pipx ensurepath` and reopen the shell, or call `~/.local/bin/liberty-next` directly. |

---

## What's next

- [Docker](./docker.md) — the Compose-based alternative. Pick the [Full layout](./docker.md#full) for production / multi-user setups.
- [Traefik](./traefik.md) — wire TLS + a friendly hostname in front of the Python server (the same Traefik recipe works for a pipx install, just point it at `http://127.0.0.1:8000`).
- [Production](./production.md) — hardening checklist, OIDC, scheduler pin, backup cadence.
- [Upgrading](./upgrading.md) — the wider upgrade picture (CLI + Docker, side by side).
