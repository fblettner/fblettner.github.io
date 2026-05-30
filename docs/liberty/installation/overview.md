---
title: Installation — overview
description: "Stand up Liberty Next from a curated release/ directory — three Docker layouts (light SQLite trial, full 5-service production stack, Docker Swarm) all driven by ./install.sh and ./deploy-swarm.sh helpers, plus a pipx alternative for Docker-averse hosts. Image lives at ghcr.io/fblettner/liberty-next."
keywords: [Liberty Framework, installation, deploy, server, Docker, Docker Compose, Docker Swarm, install.sh, deploy-swarm.sh, backup.sh, pipx, light, full, swarm, Traefik, Postgres, pgAdmin, Portainer, ghcr.io]
---

# Installation — overview

Liberty Next ships as a public OCI image (`ghcr.io/fblettner/liberty-next`) plus a [`release/`](https://github.com/fblettner/liberty-next/tree/main/release) directory in the repository that carries **three ready-to-run layouts** and **three helper scripts**. Pick a layout, run one command, you're in.

| Layout | Runtime | Services | Use case |
|---|---|---|---|
| **Light** | Docker Compose | liberty-next + SQLite (in a volume) | Local trial, single-user demo, quick eval. |
| **Full** | Docker Compose | liberty-next + PostgreSQL 16 + Traefik + pgAdmin + Portainer | Production / staging on a single host. |
| **Swarm** | Docker Swarm | same five services, with `deploy.*` constraints + overlay networking | Single or multi-node swarm. |
| **pipx** | Plain Python | liberty-next only (default SQLite, point at any DB) | Docker-averse hosts, Python-only environments. |

The four are **not exclusive** — pick the one that matches your operations.

---

## The 90-second install

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release

./install.sh            # interactive — asks light vs full
# OR
./install.sh light      # single container, SQLite
./install.sh full       # 5-service production stack
```

What `install.sh` does:

| Step | What |
|---|---|
| Generates `.env` with cryptographically-random secrets (none contain `$` so Docker Compose substitution never eats them). | First run only — re-runs preserve an existing `.env`. |
| Pulls the image(s) and runs `docker compose up -d` against the chosen layout. | Idempotent — re-running `install.sh` against an up stack just re-applies the compose file. |
| Waits up to 120 s for liberty-next's container healthcheck (`GET /info`) to report healthy. | If it doesn't, prints how to read the logs. |
| Prints the generated `admin` password + the URLs to reach the SPA / pgAdmin / Portainer / Traefik dashboard. | Read once — the password is also in `.env` (mode 0600) for later reference. |

For Docker Swarm, the equivalent helper is `./deploy-swarm.sh` (covered in [Docker](./docker.md#swarm)).

---

## The three Docker layouts

### Light — single container, SQLite

What you get:

- One container (`liberty-next`) on port `8000`.
- SQLite framework DB (auth + Nomaflow run history) persisted on a Docker volume.
- Operator-edited TOML files persisted on a second volume — saved through *Settings → …* in the SPA; no host bind-mount needed.
- **No** Postgres, **no** Traefik, **no** TLS — just the framework exposed directly on `:8000`.

Use for:

- Trying the framework locally / on a single VPS.
- Demo + evaluation environments.
- A connector-only install (the licensed apps — Nomasx-1 / Nomajde — need Postgres, so use full for those).

Volumes:

| Volume | Carries |
|---|---|
| `liberty-data` | SQLite DB + `auth.toml` (Argon2 password hashes). |
| `liberty-config` | Every TOML file the operator edits (connectors / dictionary / menus / screens / charts / dashboards). |

### Full — production stack behind Traefik

Five services, all on the host's port `80` (or `443` with TLS):

| Service | Path | What |
|---|---|---|
| **Traefik** | `/traefik` | Reverse proxy + dashboard. Basic-auth (default `admin/admin` — **change it** in `traefik/dynamic/dynamic.yml`). |
| **liberty-next** | `/` (catchall) | SPA + API + admin. Connects to the bundled Postgres for the framework DB. |
| **Postgres 16** | (internal) | Framework DB (auth, Nomaflow run history) + a place to host customer pools (Nomasx-1 / Nomajde data, etc.). |
| **pgAdmin** | `/pgadmin` | Postgres GUI. |
| **Portainer** | `/portainer` | Docker UI. |

Volumes:

| Volume | Carries |
|---|---|
| `liberty-config` | Operator-edited TOMLs. |
| `pg-data` | Postgres database files. |
| `pg-logs` | Rotated Postgres log files. |
| `pgadmin-data` | pgAdmin registrations + preferences. |
| `portainer-data` | Portainer state. |
| `traefik-acme` | Let's Encrypt certificate storage (when TLS is wired). |

This is the layout licensed bundles (Nomasx-1, Nomajde, NomaUBL) deploy against — the bundled Postgres is what their `default` pool uses. See [Deploy prebuilt apps](./deploy-prebuilt-apps.md).

### Swarm — Docker Swarm, single or multi-node

Same five services, but adapted for Swarm's runtime model:

- `deploy.*` keys instead of `restart: unless-stopped`.
- Overlay networking (single- AND multi-node ready).
- Traefik uses `--providers.swarm` (the swarm-aware variant).
- Stateful services pinned to a single manager via placement constraints.
- liberty-next defaults to `replicas: 1` — bump only after wiring a shared Socket.IO backplane (Redis adapter).

Deploy / update / status with `./deploy-swarm.sh` — `docker stack deploy` has no `--env-file` flag, so the helper sources `.env` into the shell first then runs the stack deploy.

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

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="io-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#io-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next — four deployment shapes</text>
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
</svg>

---

## Required environment variables

Two values are **required** regardless of layout — the rest have sensible defaults.

| Variable | Why | How to generate |
|---|---|---|
| **`LIBERTY_JWT_SECRET`** | Signs every access + refresh token. Must be stable across restarts — a rotated key invalidates every outstanding token (forces every user to re-sign-in). | `python -c "import secrets;print(secrets.token_urlsafe(48))"` |
| **`LIBERTY_MASTER_KEY`** | Field-level encryption key — encrypts secrets (pool passwords, API tokens) at rest in the TOMLs. Must be the same value across restarts or `ENC:` values become unreadable. | `python -c "import secrets;print(secrets.token_urlsafe(32))"` |

`install.sh` generates both with `openssl rand` (no `$` chars, no compose-substitution footguns). When using pipx or rolling your own compose, generate them yourself.

Common optional vars:

| Variable | Default | What |
|---|---|---|
| `LIBERTY_IMAGE_TAG` | `latest` | Pin to a specific release tag for stability (`0.2.0`, `edge`, etc.). |
| `LIBERTY_ADMIN_PASSWORD` | (generated + printed once) | Bootstrap password for the first-run `admin` user. |
| `LIBERTY_LICENSE_KEY` | (none — `restricted` mode) | RS256 JWT unlocking the licensed connectors (Nomasx-1 / Nomajde / Nomaflow premium). |
| `ANTHROPIC_API_KEY` | (none — AI assistant disabled) | Enables the in-app AI assistant chat. |
| `LIBERTY_OIDC_ENABLED` | `false` | Set to `true` + fill OIDC provider details for SSO. |
| `POSTGRES_PASSWORD` | (generated) | Full layout only — bundled Postgres password. |
| `PGADMIN_PASSWORD` | (generated) | Full layout only — pgAdmin admin password. |

Full reference: `release/.env.example`.

:::info[A note on `$` in passwords]
Docker Compose performs `${VAR}` substitution on every value in `.env` too — a literal `$` in a password gets eaten (e.g. `POSTGRES_PASSWORD=foo$bar` becomes `foo` because Compose tries to expand `$bar`). Either generate passwords without `$` (recommended — `install.sh` does this), or escape every `$` as `$$`.
:::

---

## Read in order

| Step | Page |
|---|---|
| **0** | This overview. |
| **1** | Pick a path: [Docker](./docker.md) (covers all three Docker layouts) or [Python server](./python-server.md) (pipx). |
| **2** | Wire TLS + the friendly hostname: [Traefik](./traefik.md). |
| **3** | Use the bundled visual tools: [Portainer](./portainer.md). |
| **4** | Production hardening — OIDC, JWT rotation, scheduler pin: [Production](./production.md). |
| **5** | Deploy NomaUBL / Nomasx-1 / Nomajde on top: [Deploy prebuilt apps](./deploy-prebuilt-apps.md). |
| **6** | When a new release ships: [Upgrading](./upgrading.md). |

---

## Sanity check — what "installed" looks like

After the chosen path:

- `curl http://<host>:<port>/info` returns a JSON payload with `version`, `frontend_built`, counts of loaded screens / menus / connectors.
- The SPA renders at `http://<host>:<port>/`.
- Sign in as `admin` with the password printed by `install.sh` (or from `LIBERTY_ADMIN_PASSWORD` in `.env`).
- The container `liberty-next` reports healthy in `docker ps` (the bundled healthcheck hits `/info` every 30 s).

If any of those don't hold, jump to the path's troubleshooting section.

---

## What's next

- [Docker](./docker.md) — the three Docker layouts in detail, with the helper-script walk-throughs.
- [Python server](./python-server.md) — pipx-based install for Docker-averse hosts.
- [Production](./production.md) — TLS, backups, hardening.
