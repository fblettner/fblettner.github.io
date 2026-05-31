---
title: Installation — overview
description: "Stand up Liberty Next from the release/ directory — three Docker layouts (light SQLite, full 5-service stack, Docker Swarm), TLS overlays (Let's Encrypt or operator-provided certs), licensed-apps overlay — all driven by ./install.sh, ./install-apps.sh, ./deploy-swarm.sh and ./backup.sh. Plus a pipx alternative for hosts that don't run Docker. Image lives at ghcr.io/fblettner/liberty-next."
keywords: [Liberty Framework, installation, deploy, install.sh, install-apps.sh, deploy-swarm.sh, backup.sh, Docker, Compose, Swarm, light, full, pipx, --tag, --reset, --apps, --ssl, letsencrypt, provided, COMPOSE_FILE, ghcr.io, Traefik, Postgres, pgAdmin, Portainer]
---

# Installation — overview

Liberty Next ships as a public OCI image (`ghcr.io/fblettner/liberty-next`) plus a [`release/`](https://github.com/fblettner/liberty-next/tree/main/release) directory carrying **three compose files** + **two TLS overlays** + **an apps overlay** + **four helper scripts** that wire them together. Pick a layout, run one command, you're in.

| Layout | Runtime | Services | Use case |
|---|---|---|---|
| **Light** | Docker Compose | liberty-next + SQLite (on a volume) | Local trial, single-user demo, quick eval. |
| **Full** | Docker Compose | liberty-next + PostgreSQL 16 + Traefik + pgAdmin + Portainer | Production / staging on a single host. |
| **Swarm** | Docker Swarm | same five services, with `deploy.*` constraints + overlay networking | Single or multi-node swarm. |
| **pipx** | Plain Python | liberty-next only (default SQLite, point at any DB) | Docker-averse hosts, Python-only environments. |

Both **Light** and **Full** can be layered with TLS (Let's Encrypt or operator-provided certs) and with the licensed-apps overlay (Nomasx-1 / Nomajde / Nomaflow plugins). All four overlays are wired automatically by `./install.sh` flags; you never juggle `-f` flags by hand.

---

## The 60-second install

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release

./install.sh                                  # interactive — asks light vs full
# OR — non-interactive
./install.sh light                            # single container, SQLite
./install.sh full                             # 5-service production stack (latest tag)
./install.sh full --tag 7.0.2                 # full stack, pinned to a specific release
```

What `install.sh` does on the first run:

| Step | What |
|---|---|
| 1. Detects stale Docker volumes from a previous install. | If `pg-data` / `pgadmin-data` / `liberty-data` exist but `.env` is missing, the script REFUSES to start and tells the operator to re-run with `--reset` (wipe + start fresh) or restore the previous `.env` (the secrets baked into the volumes must match). |
| 2. Generates `.env` with cryptographically-random secrets (no `$` chars — Compose substitution can't eat them). | First run only — re-runs preserve an existing `.env`. |
| 3. Writes `COMPOSE_FILE=docker-compose.<layout>.yml[:overlays...]` to `.env`. | Every subsequent `docker compose <cmd>` (without `-f`) auto-merges the right files. **Critical** — operators must NOT pass `-f` manually after install. |
| 4. Pulls images via `docker compose pull` and runs `docker compose up -d`. | Idempotent — re-running against an up stack just re-applies the compose file. |
| 5. Waits up to 120 s for the container healthcheck (`GET /info`). | Reports `healthy` once the SPA + API are ready. |
| 6. Prints the SPA URL + the generated `admin` password + the pgAdmin / Portainer / Traefik dashboard URLs. | The password is also in `.env` (mode `0600`). |

For Docker Swarm, the equivalent helper is `./deploy-swarm.sh` (covered in [Docker → Swarm](./docker.md#swarm)).

---

## The four install.sh flags worth knowing

| Flag | Purpose |
|---|---|
| **`--tag <version>`** | Pin `LIBERTY_IMAGE_TAG` at install time (e.g. `--tag 7.0.2`). Default `latest` (every merge to main → new release; `latest` always reflects current main). Ignored when `.env` already exists — edit the var directly there. |
| **`--reset`** | `docker compose down -v` + delete `.env` first. Use when a previous install left stale `pg-data` with the old password (postgres init only runs on a brand-new volume — fresh secrets + stale volume = auth-fails-forever). |
| **`--apps <wheel-or-URL>`** | After bringing up the base stack, chain to `install-apps.sh` with the given wheel — licensed apps (Nomasx-1 / Nomajde / Nomaflow) deploy in the same command. The license key is set **afterwards** via *Settings → App → License* in the UI (encrypted at rest in `app.toml`). |
| **`--ssl letsencrypt --domain --email`** *(full only)* | Wire Let's Encrypt automatically. Requires the host be reachable from the public internet on `:80`/`:443` for the TLS-ALPN challenge. |
| **`--ssl provided --cert-dir --cert-file --key-file`** *(full only)* | Wire operator-provided certs (corporate CA, internal PKI, air-gapped install). `install.sh` validates the files exist, bind-mounts the cert directory, generates `traefik/dynamic/tls.yml`. |

The four flags compose together — `./install.sh full --tag 7.0.2 --ssl letsencrypt --domain liberty.example.com --email ops@example.com --apps ./liberty_apps-7.0.1-py3-none-any.whl` is a single-command production install with TLS + the licensed bundle. After the UI is up, paste the license key into *Settings → App → License*. (`--license-key` was removed from `install.sh` — the key now lives in `app.toml` encrypted at rest, not in `.env`.)

A wipe-and-exit flag is also worth knowing:

| Flag | Purpose |
|---|---|
| **`--reset`** | `docker compose down` + `docker volume rm` of every Liberty data volume (`pg-data`, `pgadmin-data`, `portainer-data`, `liberty-data`, `liberty-config`) + deletes `.env`, then **exits**. The `traefik-acme` volume is intentionally preserved (Let's Encrypt rate-limits at 5 certs / 7 days / domain set — wiping it on every reset cycle would burn through that immediately). Combining `--reset` with `--apps` / `--ssl` errors out — re-run `install.sh` with your flags after the reset finishes. Use when a previous install left stale volumes whose credentials no longer match a freshly-generated `.env`. |

---

## The COMPOSE_FILE mental model

After `./install.sh full --ssl letsencrypt --apps <wheel>`, `.env` carries:

```env title=".env (excerpt)"
COMPOSE_FILE=docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml
```

Docker Compose reads `COMPOSE_FILE` for every command — `docker compose ps` / `pull` / `up -d` / `down` / `logs` / `restart` automatically merge **every overlay listed**. The operator never types `-f`.

| Do | Don't |
|---|---|
| `docker compose pull && docker compose up -d` *(picks up every overlay)* | `docker compose -f docker-compose.full.yml up -d` *(drops the apps + TLS overlays)* |
| `docker compose logs -f liberty-next` *(merged context)* | `docker compose -f docker-compose.full.yml logs -f` *(no overlays)* |

`install-apps.sh` and the `--ssl` flag both **append** to `COMPOSE_FILE` — re-running `install.sh` with a new `--ssl` mode (or chaining `install-apps.sh`) updates the value cleanly. Manual edits to `.env` are also fine; the chain is colon-separated, order matters (overlays apply right-to-left).

---

## The three Docker layouts

### Light — single container, SQLite

What you get:

- One container (`liberty-next`) on port `8000`.
- SQLite framework DB (auth + Nomaflow run history) persisted on a Docker volume.
- Operator-edited TOML files persisted on a second volume — saved through *Settings → …* in the SPA; no host bind-mount needed.
- **No** Postgres, **no** Traefik, **no** TLS — the framework is exposed directly on `:8000`.

Use for trials, demos, evaluation, single-user installs. The licensed apps (Nomasx-1 / Nomajde) work on Light too if you don't need a multi-user Postgres — `./install.sh light --apps <wheel>` is supported.

Volumes:

| Volume | Carries |
|---|---|
| `liberty-data` | SQLite DB + `auth.toml` (Argon2 password hashes). |
| `liberty-config` | Every TOML the operator edits (connectors / dictionary / menus / screens / charts / dashboards). |

### Full — production stack behind Traefik

Five services on the host's port `80` (or `443` once TLS is wired):

| Service | Path | What |
|---|---|---|
| **Traefik** | `/traefik` | Reverse proxy + dashboard. Basic-auth (default `admin/admin` — **change in `traefik/dynamic/dynamic.yml`**). |
| **liberty-next** | `/` (catchall) | SPA + API + admin. Connects to the bundled Postgres for the framework DB. |
| **Postgres 16** | (internal `:5432`, exposed by default) | Framework DB (auth, Nomaflow run history) + a place to host customer pools (Nomasx-1 / Nomajde data). |
| **pgAdmin** | `/pgadmin` | Postgres GUI. |
| **Portainer** | `/portainer` | Docker UI. |

Volumes:

| Volume | Carries |
|---|---|
| `liberty-config` | Operator-edited TOMLs. |
| `pg-data` | Postgres database files. |
| `pgadmin-data` | pgAdmin registrations + preferences. |
| `portainer-data` | Portainer state. |
| `traefik-acme` | Let's Encrypt certificate storage (when TLS Let's Encrypt is on). |

This is the layout the licensed bundles (Nomasx-1, Nomajde) deploy against — the bundled Postgres hosts their default pool. See [Deploy prebuilt apps](./deploy-prebuilt-apps.md).

### Swarm — Docker Swarm, single or multi-node

Same five services, but with `deploy.*` keys, overlay networking, Traefik's `--providers.swarm` and stateful services pinned to a single manager. Deploy / update / status with `./deploy-swarm.sh` — `docker stack deploy` has no `--env-file` flag, so the helper sources `.env` into the shell first.

Note: the `--apps` and `--ssl` flags on `install.sh` are **Compose-only** — Swarm operators apply overlays by editing the stack file or by chaining a separate `docker stack deploy` with the overlay merged in.

---

## The licensed-apps overlay

Nomasx-1, Nomajde and the bundled Nomaflow jobs ship as a single **`liberty_apps-<version>-py3-none-any.whl`** wheel. Two install paths:

### Single-command (fresh host)

```bash
./install.sh full --apps ./liberty_apps-7.0.1-py3-none-any.whl
```

That's everything — base stack + licensed apps in one go. Once the SPA is up, paste the vendor-signed license JWT into *Settings → App → License* (encrypted at rest with the install master key, live on save — connectors rebuild without restart). See [App settings](../framework/build/settings-app.md).

### Or split it: base first, apps later

```bash
./install.sh full                                              # base stack
./install-apps.sh ./liberty_apps-7.0.1-py3-none-any.whl        # add the apps
```

What `install-apps.sh` does:

1. **Materializes the wheel** into `./apps/` via a throwaway `python:3.12-slim` container — your host needs **no** local pip or Python install. The wheel ships with a `liberty-apps install --target DIR` CLI that copies `config/` + `plugins/` into the destination, preserving operator-edited TOMLs.
2. **Updates `.env`** — appends `docker-compose.apps.yml` to `COMPOSE_FILE` and sets `APPS_HOST_PATH=<absolute path>`. The license key is **not** written to `.env` — set it via the UI after the apps are visible.
3. **Restarts the stack** — `docker compose up -d` picks up the apps overlay automatically via `COMPOSE_FILE` (no `-f` juggling).

Full detail: [Deploy prebuilt apps](./deploy-prebuilt-apps.md).

---

## The pipx path — no Docker at all

If you don't want containers (small install on a single host, locked into a Python-only environment):

```bash
pipx install liberty-next
liberty-next             # → API + SPA on http://localhost:8000
```

pipx puts Liberty Next in its own isolated venv so its dependencies can't conflict with system Python. The four CLI commands (`liberty-next`, `liberty-admin`, `liberty-license`, `liberty-crypto`) land on the PATH. Upgrades: `pipx upgrade liberty-next`. See [Python server](./python-server.md).

You'll point `LIBERTY_DB_URL` at an existing Postgres (or stick with the default SQLite — `./liberty.db` in the working directory). Config TOMLs are read from `./config/<name>.toml`; set `LIBERTY_APPS_DIR=/etc/liberty-next/` to keep them somewhere stable.

---

## At a glance

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="io-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="360" rx="14" fill="url(#io-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next — install.sh composes everything via COMPOSE_FILE</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="220" height="240" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="150" y="112" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGHT</text>
  <text x="150" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">./install.sh light</text>
  <line x1="60" y1="148" x2="240" y2="148" stroke="#22c55e" strokeOpacity="0.3"/>
  <text x="150" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">1 container · :8000</text>
  <text x="150" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">SQLite (volume)</text>
  <text x="150" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">no TLS · no Traefik</text>
  <text x="150" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Trial / demo / eval</text>
  <text x="150" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">2 volumes to back up</text>

  <rect x="272" y="84" width="220" height="240" rx="10" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="382" y="112" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FULL</text>
  <text x="382" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">./install.sh full</text>
  <line x1="292" y1="148" x2="472" y2="148" stroke="#4a9eff" strokeOpacity="0.3"/>
  <text x="382" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">5 services · :80 (or :443)</text>
  <text x="382" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Traefik + Postgres 16</text>
  <text x="382" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">pgAdmin · Portainer</text>
  <text x="382" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Production / staging</text>
  <text x="382" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Licensed apps land here</text>

  <rect x="504" y="84" width="220" height="240" rx="10" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="614" y="112" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SWARM</text>
  <text x="614" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">./deploy-swarm.sh</text>
  <line x1="524" y1="148" x2="704" y2="148" stroke="#c084fc" strokeOpacity="0.3"/>
  <text x="614" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">5 services · overlay net</text>
  <text x="614" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">manager placement</text>
  <text x="614" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">deploy.* update_config</text>
  <text x="614" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Single or multi-node swarm</text>
  <text x="614" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Rolling updates baked in</text>

  <rect x="736" y="84" width="224" height="240" rx="10" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)"/>
  <text x="848" y="112" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PIPX</text>
  <text x="848" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">pipx install liberty-next</text>
  <line x1="756" y1="148" x2="940" y2="148" stroke="#fb923c" strokeOpacity="0.3"/>
  <text x="848" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">No Docker required</text>
  <text x="848" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PATH: liberty-next +</text>
  <text x="848" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-admin / -license</text>
  <text x="848" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Docker-averse hosts</text>
  <text x="848" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Python-only environments</text>

  <rect x="40" y="338" width="920" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937"/>
  <text x="500" y="358" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">install.sh --ssl letsencrypt|provided  +  --apps &lt;wheel&gt;  →  composes overlays into COMPOSE_FILE · license set via Settings → App after install</text>
</svg>

---

## Required environment variables

Two values are **required** regardless of layout — `install.sh` generates both with `openssl rand`. When using pipx or rolling your own compose, generate them yourself.

| Variable | Why | How to generate |
|---|---|---|
| **`LIBERTY_JWT_SECRET`** | Signs every access + refresh token. Must be stable across restarts — a rotated key invalidates every outstanding token (forces every user to re-sign-in). | `python -c "import secrets;print(secrets.token_urlsafe(48))"` |
| **`LIBERTY_MASTER_KEY`** | Field-level encryption key — encrypts secrets (pool passwords, API tokens) at rest in the TOMLs. Must stay constant or `ENC:` values become unreadable. | `python -c "import secrets;print(secrets.token_urlsafe(32))"` |

Common optional vars (the full list is in `release/.env.example`):

| Variable | Default | What |
|---|---|---|
| `LIBERTY_IMAGE_TAG` | `latest` | Pin to a specific release tag for stability (`7.0.1`, `7.0.2`, etc.). Use `./install.sh --tag <ver>` to set it at install time. |
| `LIBERTY_ADMIN_PASSWORD` | (generated, **shown once** in the install summary) | Bootstrap password for the first-run `admin` user. `install.sh` generates a random value, exports it to the shell for the boot, then drops it — **not** written to `.env`. On re-runs the existing admin keeps its prior password; reset with `docker exec liberty-next liberty-admin reset-admin-password`. |
| `POSTGRES_PASSWORD` | (generated) | Full layout only — bundled Postgres password. |
| `PGADMIN_PASSWORD` | (generated) | Full layout only — pgAdmin admin password. The default email is `admin@liberty.fr` (override with `PGADMIN_EMAIL`). |
| `APPS_HOST_PATH` | (set by `install-apps.sh`) | Absolute path to the materialized `./apps/` directory. The apps overlay bind-mounts this at `/apps:ro`. |
| `COMPOSE_FILE` | (set by `install.sh` + `install-apps.sh`) | Colon-separated chain of compose files Docker Compose auto-merges. |
| `LIBERTY_DOMAIN`, `ACME_EMAIL` | (set by `--ssl letsencrypt`) | TLS hostname + ACME contact. |
| `CERT_HOST_PATH` | (set by `--ssl provided`) | Host directory bind-mounted at `/etc/certs:ro` for operator certs. |

The **license key, Anthropic API key and OIDC client secret** used to live as env vars (`LIBERTY_LICENSE_KEY`, `ANTHROPIC_API_KEY`, `LIBERTY_OIDC_CLIENT_SECRET`). They now live in `app.toml` encrypted at rest with the install master key — **edit them via *Settings → App* in the SPA** after the stack is up. The env-var path still works as a fallback (set the var + reference it from `app.toml` as `${VAR}`). See [App settings](../framework/build/settings-app.md).

:::info[A note on `$` in passwords]
Docker Compose performs `${VAR}` substitution on every value in `.env` too — a literal `$` in a password gets eaten (e.g. `POSTGRES_PASSWORD=foo$bar` becomes `foo` because Compose tries to expand `$bar`). Either generate passwords without `$` (recommended — `install.sh` does this), or escape every `$` as `$$`.
:::

---

## Read in order

| Step | Page |
|---|---|
| **0** | This overview. |
| **1** | Pick a path: [Docker](./docker.md) (covers all three Docker layouts) or [Python server](./python-server.md) (pipx). |
| **2** | Wire TLS — [Traefik](./traefik.md) walks the two `--ssl` modes (Let's Encrypt and operator-provided). |
| **3** | Use the bundled visual tools — [Portainer + pgAdmin](./portainer.md). |
| **4** | Production hardening — OIDC, JWT rotation, backups, multi-replica caveats: [Production](./production.md). |
| **5** | Deploy NomaUBL / Nomasx-1 / Nomajde on top: [Deploy prebuilt apps](./deploy-prebuilt-apps.md). |
| **6** | When a new release ships: [Upgrading](./upgrading.md). |

---

## Sanity check — what "installed" looks like

After the chosen path:

- `curl http://<host>:<port>/info` returns a JSON payload with `version`, `frontend_built`, counts of loaded screens / menus / connectors.
- The SPA renders at `http://<host>:<port>/`.
- Sign in as `admin` with the password printed by `install.sh` (shown once during the install; not stored in `.env`).
- The container `liberty-next` reports healthy in `docker ps` (the bundled healthcheck hits `/info` every 30 s).

If any of those don't hold, jump to the path's troubleshooting section.

---

## What's next

- [Docker](./docker.md) — the three Docker layouts in detail, with the helper-script walk-throughs and the COMPOSE_FILE discipline.
- [Python server](./python-server.md) — pipx-based install for Docker-averse hosts.
- [Production](./production.md) — TLS, backups, hardening.
