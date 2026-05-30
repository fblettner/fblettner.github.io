---
title: Docker
description: "Stand up Liberty Framework as a Docker Compose stack — Liberty, PostgreSQL, optional Traefik. Concrete compose file, env vars, mount points and the first-run bootstrap."
keywords: [Liberty Framework, Docker, docker-compose, container, PostgreSQL, mount, bootstrap, init-db]
---

# Docker

The Docker path runs the framework as a container against a separate PostgreSQL container, with the `liberty-apps` repo mounted as a volume. Add Traefik in the same compose for TLS + a friendly hostname (covered separately on [Traefik](./traefik.md)); manage the stack visually with [Portainer](./portainer.md).

This page walks the minimum self-contained stack — Liberty + PostgreSQL — without TLS. Production-grade additions are layered on top.

---

## Prerequisites

| Tool | Version |
|---|---|
| Docker Engine | ≥ 24 |
| Docker Compose | v2 (the `docker compose` plugin, not the deprecated `docker-compose` binary) |
| Host disk | ~2 GB for the framework image + your DB volume |
| Host RAM | ≥ 1 GB free for the framework container + Postgres |

A Linux host (Ubuntu / Debian / Rocky / Alpine) is the typical target. Docker Desktop on macOS / Windows works for local testing.

---

## Step 1 — Clone the apps repo

The framework reads its configuration from `liberty-apps`:

```bash
git clone https://github.com/<your-org>/liberty-apps.git /opt/liberty/apps
```

The directory layout after clone:

```
/opt/liberty/apps/
├── config/        ← the TOML files (LIBERTY_APPS_DIR points here)
│   ├── app.toml
│   ├── connectors.toml
│   ├── dictionary.toml
│   ├── screens.toml
│   ├── menus.toml
│   ├── dashboards.toml
│   ├── charts.toml
│   └── jobs.toml
└── plugins/       ← your Python plugins (importable at startup)
    └── <your-plugin>/
```

For a fresh install with no apps repo yet, start with the [empty template repo](https://github.com/fblettner/liberty-apps-template) — clone, rename, push to your own Git.

---

## Step 2 — Write `docker-compose.yml`

A minimal stack with Liberty + PostgreSQL:

```yaml
# /opt/liberty/docker-compose.yml
services:

  postgres:
    image: postgres:16
    container_name: liberty-postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: liberty
      POSTGRES_USER: liberty
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U liberty -d liberty"]
      interval: 10s
      timeout: 5s
      retries: 5

  liberty:
    image: ghcr.io/fblettner/liberty-next:latest
    container_name: liberty
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      LIBERTY_APPS_DIR: /apps/config
      LIBERTY_MASTER_KEY: ${LIBERTY_MASTER_KEY}
      LIBERTY_LICENSE_KEY: ${LIBERTY_LICENSE_KEY:-}
      LIBERTY_JWT_SECRET: ${LIBERTY_JWT_SECRET}
      ANTHROPIC_API_KEY: ${ANTHROPIC_API_KEY:-}
      OIDC_CLIENT_SECRET: ${OIDC_CLIENT_SECRET:-}
      # Database URL — uses the postgres service above
      DATABASE_URL: postgresql+asyncpg://liberty:${POSTGRES_PASSWORD}@postgres:5432/liberty
    volumes:
      - /opt/liberty/apps:/apps:ro      # the apps repo, read-only
      - liberty-logs:/var/log/liberty
    ports:
      - "8000:8000"

volumes:
  postgres-data:
  liberty-logs:
```

Three things to notice:

| Detail | Why |
|---|---|
| `:ro` on the apps mount. | Liberty doesn't write to the apps repo — make it read-only so a runaway process can't corrupt the config. |
| `depends_on` with `service_healthy`. | Liberty waits for PostgreSQL to accept connections before starting; otherwise the first connect race fails. |
| Secrets via `${...}` env vars. | Never inline a secret in `docker-compose.yml`. Use the `.env` file below. |

---

## Step 3 — Write `.env`

Sibling of `docker-compose.yml`:

```bash
# /opt/liberty/.env
POSTGRES_PASSWORD=replace-with-a-real-password
LIBERTY_MASTER_KEY=$(openssl rand -hex 32)
LIBERTY_JWT_SECRET=$(openssl rand -hex 32)
LIBERTY_LICENSE_KEY=
ANTHROPIC_API_KEY=
OIDC_CLIENT_SECRET=
```

Generate the two random values once and **back them up** — losing the master key means losing every `ENC:` value on disk; losing the JWT secret invalidates every signed token (not catastrophic but every user has to sign in again).

| File permission | Owner | Mode |
|---|---|---|
| `.env` | root (or the Docker user) | `0600` |

```bash
chmod 600 /opt/liberty/.env
```

---

## Step 4 — Bring the stack up

```bash
cd /opt/liberty
docker compose up -d
```

This pulls the images, starts PostgreSQL, waits for it to become healthy, then starts Liberty. After 10-30 seconds:

```bash
docker compose ps
# NAME              STATUS              PORTS
# liberty-postgres  Up 30s (healthy)    5432/tcp
# liberty           Up 20s              0.0.0.0:8000->8000/tcp

curl http://localhost:8000/health
# {"status":"ok"}
```

---

## Step 5 — Bootstrap the first user

The framework starts with no users — log in is impossible. Bootstrap a superuser:

```bash
docker compose exec liberty liberty-admin init-db --superuser admin
# Prompts for a password (8+ chars).
```

Now `http://<host>:8000/` shows the login screen — sign in as `admin`.

---

## Step 6 — Confirm the install

A quick smoke test:

| Check | How |
|---|---|
| Liberty responds. | `curl http://<host>:8000/health` → `{"status":"ok"}`. |
| The plugins folder was found. | `docker compose logs liberty | grep "liberty.plugins"` → `liberty.plugins importable from /apps/../plugins`. *(Or no line if you have no `plugins/` dir, which is fine.)* |
| The Postgres connection works. | `docker compose logs liberty | grep "ConnectorRegistry"` → shows the connectors loaded. |
| The login page renders. | Open `http://<host>:8000/` in a browser. |
| You can sign in. | Use the `admin` user from Step 5. |

If any of those fail, jump to [Troubleshooting](#troubleshooting) below.

---

## Volumes — what to back up

The stack has two volumes:

| Volume | What it carries | Backup strategy |
|---|---|---|
| `postgres-data` | Liberty's metadata (auth, jobs, locks, run history) and your operational data **if you point operational pools at the same Postgres**. | `pg_dump` on a schedule. Restore by replaying the dump into a fresh Postgres. |
| `liberty-logs` | Application logs. | Tail with `docker compose logs liberty`. Long-term retention: route to your logging backend (Loki, ELK, Datadog). |

The `liberty-apps` repo on the host is a git checkout — back it up with git, not Docker.

The `.env` file with the master key + JWT secret is your **most critical backup**. Lose it and you can't restore secrets from a postgres-data backup.

---

## Updates

To pull a newer framework image:

```bash
cd /opt/liberty
docker compose pull liberty
docker compose up -d liberty
```

`pull` fetches the new image without restarting. `up -d liberty` swaps the container (5-10 second downtime). Postgres is untouched.

For the upgrade procedure including DB migrations and rollback, see [Upgrading](./upgrading.md).

---

## Troubleshooting

### Liberty container exits immediately

```bash
docker compose logs liberty
```

Common causes:

| Log line | Cause | Fix |
|---|---|---|
| `LIBERTY_APPS_DIR not set` | The env var didn't propagate. | Verify the `environment:` block in `docker-compose.yml`. |
| `Could not connect to database` | Postgres isn't healthy yet, or `DATABASE_URL` is wrong. | Check `docker compose ps`; verify the password matches between Postgres and the env var. |
| `Plugins directory not found` | The apps mount is missing or empty. | Verify `/opt/liberty/apps/plugins/` exists; check the mount path in compose. |
| `Master key not set` and you have `ENC:` values | The master key env var is empty. | Set `LIBERTY_MASTER_KEY` in `.env`. |

### Login page renders, but sign-in fails

The framework's user store is empty until you ran `liberty-admin init-db`. Re-run it.

### Apps repo changes don't show up

The framework picks up `.toml` edits via *Settings → Reload* in the UI (or `POST /admin/reload`). For Python plugin changes, restart:

```bash
docker compose restart liberty
```

### Port 8000 is taken

Change the host-side port in `docker-compose.yml`:

```yaml
ports:
  - "8001:8000"   # external:internal
```

The container still listens on 8000 internally; only the host port changes.

---

## What's next

- [Traefik](./traefik.md) — add TLS and a friendly hostname.
- [Portainer](./portainer.md) — visual management for the stack.
- [Production](./production.md) — multi-replica, log routing, hardening.
- [Upgrading](./upgrading.md) — the upgrade procedure.
