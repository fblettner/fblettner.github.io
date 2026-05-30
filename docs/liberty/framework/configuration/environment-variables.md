---
title: Environment variables
description: "Every LIBERTY_* environment variable documented — database URL, JWT signing key, master encryption key, license key, AI key, apps directory, OIDC settings — with the file it overrides and the default applied when unset."
keywords: [Liberty Framework, environment variables, LIBERTY_DB_URL, LIBERTY_JWT_SECRET, LIBERTY_MASTER_KEY, LIBERTY_LICENSE_KEY, LIBERTY_APPS_DIR, ANTHROPIC_API_KEY, OIDC, configuration]
---

# Environment variables

The framework reads every secret and most location-dependent settings from the **process environment**, not from disk. `app.toml` references these variables via `${NAME}` interpolation so the same file can be committed without leaking credentials.

This page lists every variable the framework looks at, what it overrides, and what happens when it is left unset.

---

## Reading order

Each variable goes through three layers:

1. **Process environment** — the highest priority. Anything exported in the shell, the systemd unit or the container manifest wins.
2. **`.env` file** *(optional)* — when present at `liberty-next/.env`, it is loaded by `start.sh` before the server boots. Useful for developer machines; never used in production.
3. **Default** — applied by `app.toml` (`${NAME:-default}`) or hard-coded in the framework. Documented in the table below.

---

## Variables

### `LIBERTY_APPS_DIR`

| Effect | Path of the `liberty-apps` `config/` directory. When set, every per-section TOML is loaded from `${LIBERTY_APPS_DIR}/<name>.toml`. The plugin folder `${LIBERTY_APPS_DIR}/../plugins/` is added to `sys.path`. |
| --- | --- |
| Default | unset → per-section TOML is read from `liberty-next/config/` |
| Example | `export LIBERTY_APPS_DIR="$HOME/work/liberty-apps/config"` |

### `LIBERTY_DB_URL`

| Effect | SQLAlchemy async URL for the `default` pool. Read from `[default_pool] url` in `app.toml`, which defaults to `${LIBERTY_DB_URL:-sqlite+aiosqlite:///liberty.db}`. |
| --- | --- |
| Default | `sqlite+aiosqlite:///liberty.db` (local SQLite file) |
| PostgreSQL | `postgresql+asyncpg://user:pass@host:5432/db` |
| Oracle (thin mode) | `oracle+oracledb://user:pass@host:1521/?service_name=PDB1` |

The `default` pool is used by the auth backend (when `[auth] backend = "db"`), by Nomaflow's run history tables, and by any connector that doesn't name a pool explicitly.

### `LIBERTY_JWT_SECRET`

| Effect | Symmetric key used to sign access and refresh tokens (HS256). |
| --- | --- |
| Default | unset → an **ephemeral** key is generated per process. Every restart invalidates every token. |
| Length | At least 32 random bytes. Generate with `openssl rand -hex 32`. |

Production installs **must** set this. Two replicas sharing the same secret can mint and verify each other's tokens; replicas with different secrets cannot.

### `LIBERTY_MASTER_KEY`

| Effect | AES-256-GCM key used to decrypt every `ENC:` blob found in the per-section TOML — pool passwords, API tokens, OIDC client secret, etc. |
| --- | --- |
| Default | unset → `ENC:` blobs cannot be decrypted; connectors that depend on them refuse to load and the Settings UI flags them red. |
| Length | 32 bytes, hex- or base64-encoded. Generate with `liberty-crypto genkey`. |

See [Encryption & secrets](./encryption-secrets.md) for the encryption format and the rotation procedure.

### `LIBERTY_LICENSE_KEY`

| Effect | RS256-signed JWT that unlocks the bundled vendor products (Nomasx-1, Nomajde, NomaUBL …). Loaded into `[license] key` at startup. |
| --- | --- |
| Default | unset → only the open-source connector subset is available. The Settings UI shows the rest as *Licensed*. |
| Format | A long JWT — see [License key](../build/secure/license-key.md) for the claim list. |

### `ANTHROPIC_API_KEY`

| Effect | API key used by the AI assistant. Loaded into `[ai] api_key`. |
| --- | --- |
| Default | unset → the `/chat` page renders a "configure an API key to enable the assistant" notice. |
| Where to get one | https://console.anthropic.com → *API keys*. |

### `LIBERTY_OIDC_ISSUER` / `LIBERTY_OIDC_CLIENT_ID` / `LIBERTY_OIDC_CLIENT_SECRET` / `LIBERTY_OIDC_REDIRECT`

| Effect | The four OIDC values referenced from `[auth.oidc]`. `LIBERTY_OIDC_CLIENT_SECRET` may also be an `ENC:` blob in `app.toml` rather than an env var. |
| --- | --- |
| Default | unset → `[auth.oidc] enabled = false` and the *Sign in with SSO* button is hidden. |

See [Authentication → OIDC](../build/secure/sign-in.md#oidc) for the full setup with Authentik, Keycloak and Azure AD.

### `HOST`

| Effect | Bind address of the FastAPI server. |
| --- | --- |
| Default | `127.0.0.1` (localhost only). Set to `0.0.0.0` to accept connections from the network. |

### `PORT`

| Effect | TCP port of the FastAPI server. |
| --- | --- |
| Default | `8000`. |

### `VENV`

| Effect | Path of the Python virtualenv used by `start.sh`. |
| --- | --- |
| Default | `.venv` (next to `start.sh`). |

### `LIBERTY_DEBUG_CONFIG`

| Effect | When set to `1`, the resolved configuration is printed at startup with secret values masked. Useful when a setting doesn't take effect and the env layer is suspect. |
| --- | --- |
| Default | unset → no debug print. |

### `LIBERTY_LOG_LEVEL`

| Effect | Logging level — `DEBUG`, `INFO`, `WARNING`, `ERROR`. |
| --- | --- |
| Default | `INFO`. |

### `LIBERTY_LOG_JSON`

| Effect | When set to `1`, every log line is emitted as one JSON object — required for ingestion by Loki, Datadog, Splunk, etc. |
| --- | --- |
| Default | unset → human-readable plain text on stdout. |

---

## Variable lifecycle

| When the variable is read | Variables |
|---|---|
| **Once at startup** | All of them. Interpolation of `${NAME}` happens when `app.toml` is loaded. |
| **Re-read on `POST /admin/reload`** | None — a config reload re-parses the per-section TOML but does **not** re-read the environment. To pick up a new value, restart the process. |

This is why secrets that rotate (JWT signing key, master key, license key) require a rolling restart, not a hot-reload.

---

## Putting it together

A minimal **systemd** unit for a production install:

```ini
[Service]
Environment=LIBERTY_APPS_DIR=/opt/liberty-apps/config
Environment=LIBERTY_DB_URL=postgresql+asyncpg://liberty:%i@db.internal/liberty
EnvironmentFile=/etc/liberty/secrets.env
WorkingDirectory=/opt/liberty-next
ExecStart=/opt/liberty-next/.venv/bin/uvicorn liberty.main:app --host 0.0.0.0 --port 8000
Restart=on-failure
```

`/etc/liberty/secrets.env` (mode `0600`, root-owned):

```env
LIBERTY_JWT_SECRET=...
LIBERTY_MASTER_KEY=...
LIBERTY_LICENSE_KEY=...
ANTHROPIC_API_KEY=...
LIBERTY_OIDC_CLIENT_SECRET=...
```

The framework cares about three categories: **where the configuration is** (`LIBERTY_APPS_DIR`, `LIBERTY_DB_URL`), **how to mint and verify identity** (`LIBERTY_JWT_SECRET`, the OIDC quadruple, `LIBERTY_LICENSE_KEY`), and **how to decrypt the rest** (`LIBERTY_MASTER_KEY`, `ANTHROPIC_API_KEY`). Everything else has a sensible default.

---

## What's next

- [`app.toml` reference](./app-toml.md) — every key explained.
- [Encryption & secrets](./encryption-secrets.md) — how `LIBERTY_MASTER_KEY` is used.
- [Deployment → Running in production](../deployment/running-production.md) — the systemd / Docker / Kubernetes variants in detail.
