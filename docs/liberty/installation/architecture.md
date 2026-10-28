---
title: Architecture
description: "What a Liberty Next install is made of, whatever the way it is installed (Docker light, Docker full, Python with systemd): one server process, a framework database, configuration files, the optional licensed-apps bundle and two secrets — where each one lives, how the server starts, how its health is checked."
keywords: [Liberty Next, architecture, Docker, pipx, systemd, Traefik, PostgreSQL, SQLite, LIBERTY_APPS_DIR, app.toml, auth.toml, jobs.toml, liberty-config, pg-data, master key, JWT secret, health, ready]
---

# Architecture

A Liberty Next install always has the same parts. Docker or Python only changes **where** each part lives and which command drives it (`./liberty` or `liberty-ops`).

| Part | What it is |
|---|---|
| **The server** | One Python process: the web application, the REST API, the Nomaflow job scheduler and the live updates (Socket.IO) on the same port. |
| **The framework database** | Nomaflow run history, saved grid views, change packages, notifications, upgrade history — and users and roles when they are kept in the database rather than in `auth.toml`. |
| **The configuration** | TOML files: pools, connectors, dictionary, menus, screens, dashboards, charts, notification rules, Nomaflow jobs, application settings. Everything saved in **Settings** is written there. |
| **The licensed apps** *(optional)* | Nomasx-1, Nomajde and their jobs: configuration files, Python code (`plugins/`) and reference data, delivered as one wheel. |
| **Two secrets** | The master key, which encrypts the passwords stored in the configuration, and the key that signs the sessions. |

The data the applications show stays in **your** databases (Oracle, PostgreSQL…): Liberty Next reads them through the pools of its configuration and copies nothing unless a Nomaflow job is told to.

---

## At a glance — the full Docker layout

<svg viewBox="0 0 1200 590" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="arch-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="arch-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="arch-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="10" y="10" width="1180" height="506" rx="14" fill="url(#arch-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="30" y="76" width="150" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="105.0" y="101.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Browser</text>
  <text x="105.0" y="116.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">users · API clients</text>
  <rect x="210" y="30" width="760" height="470" rx="12" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="230" y="54" fill="#64748b" fontSize="9.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DOCKER HOST — FULL LAYOUT</text>
  <rect x="240" y="70" width="700" height="50" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="590.0" y="92.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Traefik</text>
  <text x="590.0" y="107.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">:80 / :443 — routes /, /pgadmin, /portainer, /traefik · TLS</text>
  <line x1="180" y1="104" x2="240" y2="95" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <rect x="240" y="150" width="440" height="200" rx="10" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="172" fill="#4a9eff" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">liberty-next</text>
  <text x="664" y="172" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">one process</text>
  <rect x="256" y="186" width="200" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="356.0" y="208.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Web app</text>
  <text x="356.0" y="223.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">screens, dashboards, Settings</text>
  <rect x="468" y="186" width="200" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="568.0" y="208.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">API</text>
  <text x="568.0" y="223.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">/api · /admin · /auth</text>
  <rect x="256" y="248" width="200" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="356.0" y="270.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Scheduler</text>
  <text x="356.0" y="285.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Nomaflow jobs</text>
  <rect x="468" y="248" width="200" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="568.0" y="270.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Live updates</text>
  <text x="568.0" y="285.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Socket.IO: bell, locks</text>
  <text x="256" y="336" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">reads its configuration, writes its history</text>
  <line x1="460" y1="120" x2="460" y2="150" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <rect x="240" y="390" width="210" height="60" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="345.0" y="417.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PostgreSQL</text>
  <text x="345.0" y="432.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">framework + app databases</text>
  <text x="345" y="468" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">volume pg-data</text>
  <line x1="345" y1="350" x2="345" y2="390" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <rect x="470" y="390" width="210" height="60" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="575.0" y="417.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Configuration</text>
  <text x="575.0" y="432.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">TOML saved by Settings</text>
  <text x="575" y="468" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">volume liberty-config · ./apps</text>
  <line x1="575" y1="350" x2="575" y2="390" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <rect x="720" y="330" width="220" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="830.0" y="352.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">pgAdmin</text>
  <text x="830.0" y="367.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">database console · /pgadmin</text>
  <rect x="720" y="400" width="220" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="830.0" y="422.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Portainer</text>
  <text x="830.0" y="437.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">container console · /portainer</text>
  <line x1="720" y1="355" x2="452" y2="410" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#arch-flow)"/>
  <rect x="1000" y="150" width="170" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="1085.0" y="175.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Your databases</text>
  <text x="1085.0" y="190.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Oracle · PostgreSQL</text>
  <rect x="1000" y="222" width="170" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="1085.0" y="247.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">REST APIs</text>
  <text x="1085.0" y="262.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">API connectors</text>
  <rect x="1000" y="294" width="170" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="1085.0" y="319.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Services</text>
  <text x="1085.0" y="334.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">SMTP · OIDC · Anthropic</text>
  <text x="1085" y="372" fill="#64748b" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">outside the host</text>
  <line x1="680" y1="178" x2="1000" y2="178" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <line x1="680" y1="250" x2="1000" y2="250" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <line x1="680" y1="322" x2="1000" y2="322" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <rect x="30" y="540" width="280" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="40" y="555" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One URL</text>
  <text x="40" y="568" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Traefik sends each path to its service</text>
  <line x1="30" y1="557.0" x2="90" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arch-arrow)"/>
  <rect x="620" y="540" width="330" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="630" y="555" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Licensed apps</text>
  <text x="630" y="568" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">./apps mounted on /apps: config + plugins</text>
  <line x1="620" y1="557.0" x2="600" y2="470" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arch-arrow)"/>
</svg>

---

## Three ways to run it \{#layouts\}

| | Docker — light | Docker — full | Python |
|---|---|---|---|
| **Server** | `liberty-next` container | `liberty-next` container | pipx package run by systemd |
| **Around it** | — | PostgreSQL 16, Traefik, pgAdmin, Portainer containers | Your PostgreSQL, your reverse proxy |
| **Framework database** | SQLite | Bundled PostgreSQL | Your PostgreSQL (SQLite for a trial) |
| **Address** | `http://<host>:8000/` | `http(s)://<host>/` | `http://<host>:8000/` behind your proxy |
| **HTTPS** | Your own proxy | Traefik ([HTTPS and Traefik](./traefik.md)) | Your own proxy |
| **Licensed apps** | Possible, but they need PostgreSQL | Yes | Yes |
| **Operations command** | `./liberty` | `./liberty` | `liberty-ops` |
| **Page** | [Docker](./docker.md#light) | [Docker](./docker.md#full) | [Python server](./python-server.md) |

On the full layout Traefik is the only entry point: it sends `/` to Liberty Next and `/pgadmin`, `/portainer`, `/traefik` to the tools. PostgreSQL is published on `127.0.0.1:5432` only — reachable from the host or through an SSH tunnel, not from the network.

---

## Where the configuration lives \{#configuration\}

The configuration is split in two places — the same rule for Docker and Python:

| Files | Location |
|---|---|
| `app.toml` (application settings, licence, AI, SSO, SMTP) and `auth.toml` (local users and roles) | The `config/` folder of the server's working directory — or the file named by `LIBERTY_APP_CONFIG` for `app.toml`. |
| `connectors.toml`, `dictionary.toml`, `menus.toml`, `screens.toml`, `dashboards.toml`, `charts.toml`, `notifications.toml`… | The folder named by **`LIBERTY_APPS_DIR`** when it is set — the `config/` folder of the licensed apps — otherwise the same `config/` folder. |
| `jobs.toml` (Nomaflow) | `plugins/nomaflow/jobs.toml` next to that folder (`LIBERTY_APPS_DIR/../plugins/…`), otherwise `config/jobs.toml`. |
| History of the configuration and of the upgrades (`.versions/`) | Next to `connectors.toml`. |

Hence the layout of the licensed apps folder, the same in Docker and in Python:

```text
apps/
├── config/      ← LIBERTY_APPS_DIR: connectors, screens, menus, dictionary… and .bundled/ (what was delivered)
├── plugins/     ← the apps' Python code, and nomaflow/jobs.toml
└── data/        ← reference data loaded at installation
```

---

## Where everything lives \{#volumes\}

| What | Docker — light | Docker — full | Python (paths of the [Python server](./python-server.md) page) |
|---|---|---|---|
| `app.toml`, `auth.toml` | volume `liberty-config` | volume `liberty-config` | `/var/lib/liberty-next/config/` |
| Other configuration files | volume `liberty-config`, or `release/apps/config/` with the licensed apps | same | `/var/lib/liberty-next/apps/config/` |
| Licensed apps code and data | `release/apps/plugins/`, `release/apps/data/` (mounted on `/apps`) | same | `/var/lib/liberty-next/apps/plugins/`, `…/data/` |
| Framework database | SQLite in volume `liberty-data` | PostgreSQL in volume `pg-data` | your PostgreSQL server |
| Licensed apps databases (`nomasx1`, `nomajde`) | — | PostgreSQL in `pg-data` | your PostgreSQL server |
| Secrets | `release/.env` | `release/.env` | `/etc/liberty/secrets.env` |
| Tools, certificates | — | volumes `pgadmin-data`, `portainer-data`, `traefik-acme` | — |
| Backups | `release/backups/` | `release/backups/` | `backups/` next to the configuration folder |

On Docker, stopping, recreating or upgrading the containers never touches the volumes nor `release/apps/`; only `docker compose down -v` or `./liberty install --reset` deletes the volumes. What each backup contains is on [Operations](./operations.md#backup).

---

## The two secrets \{#secrets\}

The Docker installation generates both into `release/.env` (mode `0600`); on a Python install you generate them into the service's environment file. Keep a copy outside the server.

| Secret | Used for | If it changes |
|---|---|---|
| `LIBERTY_MASTER_KEY` | Encrypts every `ENC:` value of the configuration: pool passwords, the licence key, the AI key, the OIDC secret, the SMTP password. | Every encrypted value becomes unreadable — the pools stop connecting. Never change it on an existing install. |
| `LIBERTY_JWT_SECRET` | Signs the session tokens. | Everybody is signed out and signs in again. Nothing else is lost. |

`doctor` (Docker or Python) checks that both are at least 32 characters long and that the master key really decrypts every pool password. Every `LIBERTY_*` and `POSTGRES_*` variable can also be read from a file: `LIBERTY_MASTER_KEY_FILE=/run/secrets/master_key` (Docker, Swarm or Kubernetes secrets).

---

## What happens when the server starts \{#startup\}

1. The settings are read; `${VARIABLE}` references in the TOML files are replaced by the environment.
2. *Docker only:* secrets given as files are read, the ownership of the configuration volume and of the apps folder is fixed, then the process drops root and runs as the `liberty` user (uid 1000). On a first start without licensed apps, the default configuration files are copied into `liberty-config` — an existing file is never overwritten.
3. *Docker only:* `liberty-admin init-db` creates the framework tables that are missing and, on the very first start, the `admin` user. On a Python install you run it once yourself.
4. The framework's own tables are compared with the version of the code: a missing column is added and recorded in **Liberty Next → Deploy → History → Upgrades**.
5. Pending schema migrations of the licensed apps are reported in the log; they are applied by the upgrade or by `migrate` (Docker: also at start-up with `LIBERTY_AUTO_MIGRATE=1`).
6. The server starts answering, even if the framework database is still unreachable — so that a pool can be fixed from **Settings**. `/ready` says when the database answers.

---

## Health and versions \{#health\}

| URL | Answers | Used by |
|---|---|---|
| `/health` | The process is up. | Liveness probes. |
| `/ready` | The framework database answers (`503` when it does not). | The Docker healthcheck — a stack whose database is down shows **unhealthy** — and `liberty-ops start`, which waits for it. |
| `/info` | Version and counts; connector and pool names only for a signed-in user. | Quick checks, support. |
| `/docs`, `/redoc` | The REST API reference. | Developers — see [REST API](../references/rest-api.md). |

Versions, pending migrations and the last upgrade are gathered by `status` — see [Operations](./operations.md#status).
