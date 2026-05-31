---
title: Python server
description: "pipx install of Liberty Next on a Linux / macOS host — one PyPI wheel (frontend bundle baked in), four CLIs on the PATH, plus the licensed-apps wheel injected into the same venv when applicable. Bootstrap with liberty-admin init-db + liberty-admin run-install-jobs. No Docker, no git clone, no npm build."
keywords: [Liberty Framework, Liberty Next, installation, pipx, PyPI, wheel, pipx inject, liberty-next, liberty-admin, liberty-license, liberty-crypto, liberty-apps, init-db, run-install-jobs, _seed_default_pool, LIBERTY_JWT_SECRET, LIBERTY_MASTER_KEY, POSTGRES_PASSWORD, LIBERTY_APPS_DIR, systemd, SQLite, PostgreSQL, OIDC, Settings App]
---

# Python server

Liberty Next ships as a self-contained wheel on PyPI — the React frontend bundle is baked in. One `pipx install` lands the server + four companion CLIs on the PATH. `pipx inject` adds the licensed apps (Nomasx-1 / Nomajde / Nomaflow) into the same venv when applicable. No clone, no `npm`, no virtualenv to manage by hand.

:::info[Pick the right shape first]
This page is the **Docker-averse single-host** install — a laptop trial, a developer box, a tiny VM where Docker is overkill. For production / multi-user environments the [Full Docker layout](./docker.md#full) bundles Postgres, Traefik, pgAdmin and Portainer behind one Compose file — that's what the licensed bundles deploy against in production. The pipx path supports the same licensed apps, but you bring the Postgres yourself.
:::

---

## At a glance

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '14px', padding: '24px', margin: '24px 0', background: 'linear-gradient(180deg, rgba(74,158,255,0.04), rgba(74,158,255,0))'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', fontSize: '13px'}}>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Requirements</div>
      <div>Python 3.12 · pipx · Postgres 13+ (for licensed apps)</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Default database</div>
      <div>SQLite (<code>./liberty.db</code>) — point at Postgres via the <code>POSTGRES_*</code> env vars; licensed apps need real Postgres</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Default port</div>
      <div>http://localhost:8000 (SPA + REST API)</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>First-run time</div>
      <div>~5 minutes from <code>pipx install</code> to admin login (with licensed apps); ~1 minute for the framework alone</div>
    </div>
  </div>
</div>

---

## Step 0 — Prerequisites

| Tool | Version | Notes |
|---|---|---|
| **Python** | 3.12 | The wheel pins `python_requires>=3.12`. |
| **pipx** | latest | `brew install pipx && pipx ensurepath` on macOS; `apt install pipx` on recent Debian/Ubuntu; `python3 -m pip install --user pipx && python3 -m pipx ensurepath` everywhere else. |
| **Postgres** | 13+ | Any reachable instance — local install (`brew install postgresql@16`, `apt install postgresql`), a managed Postgres (RDS, Cloud SQL, Aiven) or your own server. Superuser access is needed for the bootstrap (the bundled `deploy-databases` job creates per-app roles + databases). **Skip Postgres only if you want SQLite-only** — but then Nomasx-1 / Nomajde / Nomaflow won't work; they need real Postgres. |
| **`liberty-apps` wheel** *(licensed only)* | matching framework version | `liberty_apps-X.Y.Z-py3-none-any.whl` from your NOMANA-IT delivery. Skip if you only want the open framework. |

The whole flow below assumes a Linux or macOS shell. Windows works through WSL2 — the same commands, the same wheel.

---

## Step 1 — Install the framework (+ inject the licensed apps)

```bash
# The framework — required.
pipx install liberty-next

# The licensed bundle — only if you have a delivery wheel.
# `inject` adds it to the SAME pipx venv as liberty-next so the framework can import it.
pipx inject liberty-next /path/to/liberty_apps-7.0.X-py3-none-any.whl
```

pipx creates an isolated virtualenv under `~/.local/pipx/venvs/liberty-next` and exposes entry points on the PATH:

| Command | Source | Purpose |
|---|---|---|
| `liberty-next` | framework | The server — FastAPI backend + the bundled React SPA on the same port. |
| `liberty-admin` | framework | User / role / DB management. `init-db`, `run-install-jobs`, `set-password`, `reset-admin-password`, `create-user`. |
| `liberty-license` | framework | License key inspection (`verify`, expiry, included products). |
| `liberty-crypto` | framework | Encryption helpers — produce `ENC:` blobs for inline use in TOML. |
| `liberty-apps` | licensed apps wheel *(only after `pipx inject`)* | Materialiser that copies the wheel's `config/` + `plugins/` into the target directory. |

Verify:

```bash
liberty-next --version
liberty-apps --version          # only after `pipx inject`
```

---

## Step 2 — Persistent env vars

Two secrets are mandatory; the rest are conventions. Add the block below to your shell profile (`~/.bashrc`, `~/.zshrc`) so every shell sees the same values — **the master key MUST stay constant across boots or every encrypted value on disk becomes unreadable**.

```bash title="~/.bashrc (or ~/.zshrc)"
# ── Required — generate ONCE, never rotate without a plan ──────────────────
# AES-256-GCM key that encrypts pool passwords, license JWT, AI key, OIDC secret
# at rest in app.toml + connectors.toml.
export LIBERTY_MASTER_KEY="$(openssl rand -base64 32 | tr -d '\n=+/')"

# JWT signing key — rotating invalidates every active session.
export LIBERTY_JWT_SECRET="$(openssl rand -base64 48 | tr -d '\n=+/')"

# ── Postgres credentials ─────────────────────────────────────────────────────
# Read by liberty-admin init-db's _seed_default_pool to write [pools.default]
# in connectors.toml with the encrypted password. Skip if you only want SQLite.
export POSTGRES_PASSWORD="your-postgres-superuser-password"
export POSTGRES_USER="liberty"
export POSTGRES_HOST="localhost"
export POSTGRES_PORT="5432"
export POSTGRES_DB="liberty"

# ── Apps dir — where liberty-apps install materialises the licensed bundle ──
export LIBERTY_APPS_DIR="$HOME/.local/share/liberty-next/apps/config"
```

| Variable | Effect |
|---|---|
| `LIBERTY_MASTER_KEY` | AES-256-GCM key. Decrypts `ENC:…` blobs in `app.toml` / `connectors.toml` — pool passwords, license JWT, AI key, OIDC client secret. **Generate ONCE.** Losing it = every encrypted value on disk becomes unreadable; rotating it = the framework refuses to start until every `ENC:` value is re-encrypted with the new key. |
| `LIBERTY_JWT_SECRET` | Signs the JWT cookies issued at login. Rotating it invalidates every active session — every user is forced to sign in again. |
| `POSTGRES_*` | Read by `liberty-admin init-db`'s `_seed_default_pool` helper. The framework writes `[pools.default]` in `connectors.toml` with the password **encrypted** (using `LIBERTY_MASTER_KEY`). Set these BEFORE the first `init-db` — re-running later does not re-encrypt the password. |
| `LIBERTY_APPS_DIR` | Where the per-section TOMLs and the licensed-app plugins land. Created on demand. |

:::info[`LIBERTY_LICENSE_KEY` is no longer an env var]
Earlier docs (and some README versions) listed `LIBERTY_LICENSE_KEY` here. **That env var is gone** — the license key is now set via *Settings → App → License* once the UI is up, encrypted at rest in `app.toml` with the install master key (AES-256-GCM, `ENC:` prefix). The Anthropic API key and the OIDC client secret follow the same pattern. See [App settings](../framework/build/settings-app.md). The env var still works as a `${VAR}` reference in `app.toml` for installs that prefer secret-manager storage — but the canonical path is the UI.
:::

For a systemd-managed install, put the same block in `EnvironmentFile=/etc/liberty/secrets.env` (see [Step 8 — Run under systemd](#step-8--run-under-systemd) below) — mode `0640`, owned `root:liberty`.

---

## Step 3 — Bootstrap Postgres + the framework DB

The `install.sh` script handles this automatically in the Docker layouts. For pipx, run the equivalent two SQL statements once + `liberty-admin init-db`.

### Create the Postgres role + database (one-time)

```bash
# Replace 'postgres' with whichever superuser your install uses.
psql -h $POSTGRES_HOST -U postgres -c \
    "CREATE ROLE $POSTGRES_USER LOGIN SUPERUSER PASSWORD '$POSTGRES_PASSWORD';"

psql -h $POSTGRES_HOST -U postgres -c \
    "CREATE DATABASE $POSTGRES_DB OWNER $POSTGRES_USER;"
```

Skip both if your role + database already exist. The `liberty` role is created `SUPERUSER` so the later `deploy-databases` job can `CREATE ROLE` and `CREATE DATABASE` for the licensed apps. If your policy forbids superuser, grant `CREATEROLE` + `CREATEDB` instead:

```sql
ALTER ROLE liberty CREATEROLE CREATEDB;
```

### Bootstrap the framework schema

```bash
liberty-admin init-db
```

What `init-db` does:

| Action | What |
|---|---|
| Resolve `[pools.default]` from `POSTGRES_*` env. | The `_seed_default_pool` helper reads `POSTGRES_PASSWORD` / `_USER` / `_HOST` / `_PORT` / `_DB` and writes a `[pools.default]` block to `connectors.toml` with the password encrypted using `LIBERTY_MASTER_KEY`. |
| Connect via `[pools.default]`. | The framework opens the connection it just configured. |
| Run schema migrations. | Additive — creates auth tables, Nomaflow run-history tables, lifecycle metadata on the configured pool. Idempotent: existing rows are left alone. |
| Generate the admin user. | Creates the `admin` superuser with a freshly-generated random password. **Prints the password ONCE on stdout** — capture it; it isn't stored anywhere recoverable. |

```text title="liberty-admin init-db output (excerpt)"
✔ Pool 'default' seeded → [pools.default] in connectors.toml (encrypted with LIBERTY_MASTER_KEY)
✔ Schema migrated (auth, nomaflow, lifecycle)
✔ Admin user created
  username: admin
  password: 8xK2pQrM9vTzB4nF       ← only shown once; capture it
```

If you ever lose the admin password, run `liberty-admin reset-admin-password` — it generates a fresh random value and prints it once.

---

## Step 4 — Materialise the licensed apps *(licensed only)*

Skip this step if you only want the open framework.

```bash
mkdir -p "$LIBERTY_APPS_DIR"
liberty-apps install --target "$LIBERTY_APPS_DIR"
```

What lands on disk:

```text
$LIBERTY_APPS_DIR/
├── connectors.toml          ← nomasx1 / nomajde / jdedwards connector blocks
├── dictionary.toml          ← every dictionary entry
├── menus.toml               ← per-app menu trees
├── screens.toml             ← per-app screen definitions
├── dashboards.toml
├── charts.toml
├── theme.toml
├── nomasx1-reference.tar.gz ← curated reference bundle (loaded by a job below)
└── ../plugins/
    ├── nomasx1/             ← Python package with the security / license / SoD / audit callables
    └── nomaflow/
        └── jobs.toml        ← the bundled job catalogue (deploy-databases, daily syncs, …)
```

Operator-edited TOMLs are **preserved by default** on re-install. Pass `--force-config` to overwrite with vendor defaults (typically after restoring from a vendor wheel upgrade).

---

## Step 5 — Run the install-time jobs *(licensed only)*

`install.sh` ends by running `install-apps.sh` inside the Docker container; the pipx equivalent is a single command.

```bash
liberty-admin run-install-jobs
```

This walks every job tagged `install_step` in `${LIBERTY_APPS_DIR}/../plugins/nomaflow/jobs.toml` and runs them in declared order:

| Job | What it does |
|---|---|
| `deploy-databases` | Creates the `nomasx1` + `nomajde` Postgres roles + databases (using the `liberty` superuser via `[pools.default]`). Idempotent — skips what already exists. |
| `init-schema` | Runs the alembic migrations on the `nomasx1` schema. Idempotent. |
| `import-reference` | Loads the curated reference bundle (`nomasx1-reference.tar.gz`) into the SoD / settings tables. Idempotent — re-running with `replace = false` only inserts missing rows. |

The command is **idempotent end-to-end** — re-run if anything fails partway through; it skips jobs whose previous run finished `SUCCEEDED`.

Full job reference (parameters, when to re-run, edge cases): [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md).

---

## Step 6 — Start the server

```bash
liberty-next
```

The server binds on `http://localhost:8000` (override with `LIBERTY_PORT`) and serves the SPA at `/` and the REST API under `/api/*` and `/admin/*`. Sign in as `admin` with the password printed in [Step 3](#step-3--bootstrap-postgres--the-framework-db) — the Connectors catalogue lands as the home page.

---

## Step 7 — Finish via the UI

The runtime secrets are no longer env vars. Once the SPA is up, open *Settings → App* in the sidebar and fill in:

| Section | What to set |
|---|---|
| **License** | Paste the vendor-signed RS256 JWT. Encrypted at rest in `app.toml` with `LIBERTY_MASTER_KEY`. Connector registry rebuilds on save — licensed connectors that were filtered out at boot reappear immediately. |
| **AI Assistant → Anthropic API key** *(optional)* | `sk-ant-…`. Encrypted at rest. Enables the in-app chat. |
| **OpenID Connect** *(optional)* | Discovery URL + client ID + client secret + claim mappings. Encrypted at rest. SSO via Keycloak / Okta / Auth0 / Azure AD / Google. |

The full editor walkthrough: [App settings](../framework/build/settings-app.md).

For the **`jdedwards` source** Nomasx-1 reads from, open *Settings → Pools → `jdedwards`* and fill in the Oracle JDBC URL + read-only credentials. The framework's `LIBERTY_MASTER_KEY` encrypts the password before writing back to `connectors.toml`.

---

## What's installed — recap

After the seven steps above:

| Component | Lives in | Notes |
|---|---|---|
| Framework + plugins venv | `~/.local/pipx/venvs/liberty-next/` | Includes the `liberty_apps` package if you injected it. |
| CLIs on the PATH | `~/.local/bin/{liberty-next,liberty-admin,liberty-license,liberty-crypto,liberty-apps}` | Exact path depends on your `PIPX_BIN_DIR`. |
| Framework DB | Postgres `liberty` database on `$POSTGRES_HOST` | Auth, Nomaflow run history, lifecycle. |
| Licensed-app DBs | Postgres `nomasx1` + `nomajde` databases | Created by the `deploy-databases` job. |
| Licensed-app config | `$LIBERTY_APPS_DIR/` | TOMLs + reference bundle. |
| Licensed-app plugin code | `$LIBERTY_APPS_DIR/../plugins/` | The `nomasx1` Python package + `nomaflow/jobs.toml`. |
| Secrets at rest | `app.toml` / `connectors.toml` as `ENC:` values | License JWT, Anthropic key, OIDC secret, pool passwords. Decrypted at startup with `LIBERTY_MASTER_KEY`. |
| Master key + JWT secret + Postgres password | env vars (or systemd `EnvironmentFile`) | Never written to TOML on disk. |

---

## Step 8 — Run under systemd

For an unattended server use a system user, an `EnvironmentFile` for the secrets, and `Restart=on-failure` so the unit recovers from transient errors.

Create a dedicated user and the secrets file:

```bash
sudo useradd --system --create-home --shell /usr/sbin/nologin liberty
sudo install -d -m 0750 -o liberty -g liberty /etc/liberty
sudo install -d -m 0750 -o liberty -g liberty /var/lib/liberty-next
sudo install -d -m 0750 -o liberty -g liberty /etc/liberty-next
```

```bash title="/etc/liberty/secrets.env (mode 0640, root:liberty)"
LIBERTY_MASTER_KEY=<paste the openssl rand -base64 32 output>
LIBERTY_JWT_SECRET=<paste the openssl rand -base64 48 output>

POSTGRES_PASSWORD=<your-postgres-superuser-password>
POSTGRES_USER=liberty
POSTGRES_HOST=db.example.com
POSTGRES_PORT=5432
POSTGRES_DB=liberty

LIBERTY_APPS_DIR=/etc/liberty-next/
LIBERTY_PORT=8000
```

Install the wheel system-wide (one virtualenv, all users get the CLIs):

```bash
sudo PIPX_HOME=/opt/pipx PIPX_BIN_DIR=/usr/local/bin pipx install liberty-next
# licensed only:
sudo PIPX_HOME=/opt/pipx PIPX_BIN_DIR=/usr/local/bin pipx inject liberty-next /path/to/liberty_apps-7.0.X.whl
```

Run the bootstrap once **as the liberty user with the env file sourced**:

```bash
sudo -u liberty bash -c 'set -a; . /etc/liberty/secrets.env; set +a; liberty-admin init-db'
# licensed only:
sudo -u liberty bash -c 'set -a; . /etc/liberty/secrets.env; set +a; liberty-apps install --target $LIBERTY_APPS_DIR && liberty-admin run-install-jobs'
```

Then the unit:

```ini title="/etc/systemd/system/liberty-next.service"
[Unit]
Description=Liberty Next
After=network-online.target postgresql.service
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

Enable + start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now liberty-next
sudo journalctl -u liberty-next -f
```

---

## Verify the install

| Check | How |
|---|---|
| Server is up | `curl -fsS http://localhost:8000/info` returns a JSON payload with the framework version + the loaded-apps list. |
| OpenAPI loads | `http://localhost:8000/docs` — the full REST surface is browsable. |
| SPA renders | `http://localhost:8000/` — the sign-in screen appears. |
| Admin can sign in | Sign in as `admin` with the password printed by `init-db`. |
| Licensed apps loaded | `/info` shows `screens.apps` containing `nomasx1` / `nomajde`. The app switcher in the SPA's top bar lists them. |
| License active | *Settings → App → License* badge reads *configured*; `curl /info \| jq '.license.mode'` returns `"full"`. |
| AI assistant *(optional)* | After setting the Anthropic key in *Settings → App → AI*, open `/chat` — the input field is enabled. |

---

## Upgrade

The Liberty framework and the licensed bundle upgrade on separate cadences.

### Framework

```bash
pipx upgrade liberty-next
sudo systemctl restart liberty-next      # if running under systemd
```

`pipx upgrade` swaps the wheel in the isolated venv. The new framework runs `init-db` again on the first start — idempotent, additive only.

To pin a specific release:

```bash
pipx install --force liberty-next==<version>
```

### Licensed apps

```bash
pipx inject --force liberty-next /path/to/liberty_apps-NEW-VERSION.whl
liberty-apps install --target "$LIBERTY_APPS_DIR"
liberty-admin run-install-jobs           # picks up new install-step jobs (e.g. schema deltas)
sudo systemctl restart liberty-next
```

The `--force` flag on `pipx inject` replaces the previously-injected wheel. `liberty-apps install` preserves operator edits in `$LIBERTY_APPS_DIR/*.toml` unless `--force-config` is passed.

For the full upgrade picture (Docker + pipx + Swarm + rollback): [Upgrading](./upgrading.md).

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `LIBERTY_JWT_SECRET is required` on start | The env var didn't propagate. | Re-`export` it in the same shell, or add it to the systemd `EnvironmentFile`. |
| `Address already in use` on port 8000 | Another process holds the port. | Set `LIBERTY_PORT=8001` (or whatever's free). |
| `init-db` fails with `permission denied for database` | The `liberty` Postgres role isn't a superuser / lacks `CREATEDB`. | `ALTER ROLE liberty SUPERUSER` (or `CREATEROLE CREATEDB`). |
| Sign-in says "invalid credentials" | Lost the bootstrap admin password. | `liberty-admin reset-admin-password` — prints a fresh random value once. |
| `liberty-apps: command not found` after `pipx inject` | `pipx inject` doesn't auto-expose the wheel's CLI entry points unless the wheel declares them. | The shipped wheel does declare `liberty-apps` — re-run `pipx ensurepath` and reopen the shell. If still missing, call `~/.local/pipx/venvs/liberty-next/bin/liberty-apps` directly. |
| `run-install-jobs` fails with `target_connector nomasx1 not configured` | `liberty-apps install` step skipped or wrong `LIBERTY_APPS_DIR`. | Run `liberty-apps install --target "$LIBERTY_APPS_DIR"` and re-run `run-install-jobs`. |
| Config TOML edits don't show up | Wrong `LIBERTY_APPS_DIR` in the running shell vs. the one used at boot. | `liberty-next` logs the resolved path on boot — grep for `apps_dir=`. |
| `liberty-next` not found after install | pipx's bin dir isn't on the PATH. | Run `pipx ensurepath` and reopen the shell, or call `~/.local/bin/liberty-next` directly. |
| `Cannot decrypt ENC:…` on first start | `LIBERTY_MASTER_KEY` changed (or wasn't set when `init-db` ran). | Either restore the original key, or `liberty-crypto rewrap` to re-encrypt every `ENC:` value with the current key. |

---

## What's next

- [App settings](../framework/build/settings-app.md) — the Settings → App editor; masked secrets, what's live vs needs restart.
- [Deploy prebuilt apps](./deploy-prebuilt-apps.md) — the same Nomasx-1 / Nomajde / Nomaflow story for the Docker path.
- [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md) — reference for the install-step jobs `run-install-jobs` invokes.
- [Docker](./docker.md) — the Compose-based alternative. Pick the [Full layout](./docker.md#full) for production / multi-user setups.
- [Production](./production.md) — hardening checklist, OIDC, scheduler pin, backup cadence.
- [Upgrading](./upgrading.md) — the wider upgrade picture (Compose + pipx + Swarm side by side).
