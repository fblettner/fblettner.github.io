---
title: Installation — overview
description: "Two install paths — a Python source install (uvicorn on a Linux host) or a Docker Compose stack with optional Portainer and Traefik. Pick one; the rest of the section walks each path step by step."
keywords: [Liberty Framework, installation, deploy, server, Python, Docker, uvicorn, Portainer, Traefik, reverse proxy]
---

# Installation — overview

Liberty Framework ships as a small FastAPI process serving a React SPA on one HTTP port. There's nothing exotic to install — Python 3.12, a database for the framework's own metadata, and (optionally) a reverse proxy in front. You can run it from source on a Linux host or as a Docker Compose stack.

This section walks both paths plus the optional pieces most production installs add.

---

## The two paths

| Path | When to pick | Reads |
|---|---|---|
| **Python source install** | Dev shell. Single Linux server. You're comfortable with systemd and want minimal moving parts. | [Python server](./python-server.md). |
| **Docker Compose** | Multi-service stack, easier onboarding for ops. Reproducible across envs (dev / staging / prod). | [Docker](./docker.md). |

Both paths give the same runtime — same UI, same REST API, same Nomaflow scheduler. The choice is operational.

If your team already runs containers, Docker is the path of least friction. If you're starting fresh on a fresh Linux box and prefer plain processes, Python source + systemd works fine and adds no Docker layer to debug.

---

## What you always need

Regardless of the path:

| Component | Why |
|---|---|
| **Python 3.12** (Python source path only — Docker bakes it in) | The framework runtime. |
| **Node.js ≥ 20 + npm** (Python source path only — Docker bakes it in) | Build the React frontend bundle. |
| **A database** | The framework's own pool — auth, jobs, locks, run history. PostgreSQL is the default; SQLite works for dev. Oracle is supported when a customer ERP requires it. |
| **The `liberty-apps` repo** | Your configuration: `connectors.toml`, `dictionary.toml`, `screens.toml`, `menus.toml`, `dashboards.toml`, `charts.toml`, `jobs.toml`, plus any Python plugins under `plugins/`. |
| **An HTTP port** | One. The framework serves the API and the SPA on the same port. |

---

## What you optionally add

| Component | Why |
|---|---|
| **Reverse proxy** (Traefik / nginx / Caddy) | Terminate TLS, hide the framework behind a friendly hostname, route multiple apps on the same host. See [Traefik](./traefik.md) for the canonical Docker setup. |
| **Portainer** | Visual management for the Docker stack — see status, logs, restart services without typing `docker compose` commands. See [Portainer](./portainer.md). |
| **A multi-replica deployment** | When one replica isn't enough for the load. Pin the scheduler to one replica per the Nomaflow rules. See [Production](./production.md). |
| **External monitoring** (Prometheus / Grafana / OpenTelemetry) | When the built-in [Monitoring](../monitoring/overview.md) page isn't enough. |

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="io-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="280" rx="14" fill="url(#io-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty install — two paths, same runtime</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="440" height="200" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="60" y="106" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PATH 1 · PYTHON SOURCE</text>
  <text x="60" y="130" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">git clone liberty-next + liberty-apps</text>
  <text x="60" y="148" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">python -m venv .venv && pip install -e .</text>
  <text x="60" y="166" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">cd frontend && npm install && npm run build</text>
  <text x="60" y="184" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">liberty-admin init-db</text>
  <text x="60" y="202" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">uvicorn liberty.main:app --port 8000</text>
  <text x="60" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Wrap with a systemd unit for prod.</text>
  <text x="60" y="240" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">→ Python server</text>
  <text x="60" y="258" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">→ Production hardening</text>

  <rect x="500" y="84" width="440" height="200" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)"/>
  <text x="520" y="106" fill="#c084fc" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PATH 2 · DOCKER COMPOSE</text>
  <text x="520" y="130" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">git clone liberty-apps</text>
  <text x="520" y="148" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">curl -O docker-compose.yml + .env</text>
  <text x="520" y="166" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">docker compose up -d</text>
  <text x="520" y="184" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">docker compose exec liberty liberty-admin init-db</text>
  <text x="520" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Adds Postgres, Liberty, Traefik in one stack.</text>
  <text x="520" y="240" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">→ Docker · Portainer · Traefik</text>
</svg>

---

## Read in order

| Step | Page |
|---|---|
| **0** | This overview. |
| **1** | Pick a path: [Python server](./python-server.md) or [Docker](./docker.md). |
| **2** | (Optional) Add a reverse proxy and TLS: [Traefik](./traefik.md). |
| **3** | (Optional) Add a visual Docker manager: [Portainer](./portainer.md). |
| **4** | Production hardening (multi-replica, logs, backup): [Production](./production.md). |
| **5** | When a new version ships: [Upgrading](./upgrading.md). |

---

## Sanity check — what "installed" looks like

After either path:

- `curl http://<host>:8000/health` returns `{"status":"ok"}`.
- The login page renders at `http://<host>:8000/`.
- The framework log shows `liberty.plugins importable from <path>` (your `plugins/` dir was found).
- The admin user you bootstrapped with `liberty-admin init-db` can sign in.

If any of those don't hold, jump to the path's troubleshooting section.

---

## What's next

- [Python server](./python-server.md) — the source-install path.
- [Docker](./docker.md) — the Docker Compose path.
- [Production](./production.md) — once it's installed, run it like prod.
