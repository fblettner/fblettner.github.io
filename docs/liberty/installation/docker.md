---
title: Docker
description: "Stand up Liberty Next as a Docker Compose stack — three ready-made layouts (light SQLite, full 5-service production, Docker Swarm) shipped in the release/ directory of the repo. install.sh drives Compose, deploy-swarm.sh drives Swarm, backup.sh snapshots every named volume."
keywords: [Liberty Framework, Docker, Docker Compose, Docker Swarm, install.sh, deploy-swarm.sh, backup.sh, light, full, swarm, Traefik, Postgres, pgAdmin, Portainer, ghcr.io, healthcheck]
---

# Docker

The repository's [`release/`](https://github.com/fblettner/liberty-next/tree/main/release) directory carries everything you need: three compose files (`docker-compose.light.yml`, `docker-compose.full.yml`, `docker-compose.swarm.yml`), three helper scripts (`install.sh`, `deploy-swarm.sh`, `backup.sh`) and a `.env.example` documenting every variable. The image lives at `ghcr.io/fblettner/liberty-next` (public).

This page walks each layout end-to-end. For the conceptual overview + the four-shape comparison, read [Overview](./overview.md) first.

---

## Prerequisites

| Tool | Version |
|---|---|
| Docker Engine | ≥ 24 |
| Docker Compose | v2 (the `docker compose` plugin) — `install.sh` checks for it |
| Host disk | ~2 GB image + your DB volume (light: ~50 MB; full: a few GB once Postgres has data) |
| Host RAM | ≥ 1 GB free (light); ≥ 4 GB free (full — Postgres `shared_buffers=2GB` by default) |

A Linux host (Ubuntu / Debian / Rocky / Alpine) is the typical target. Docker Desktop on macOS / Windows works for local testing.

---

## Layout 1 — Light (`docker-compose.light.yml`) \{#light\}

One container, SQLite framework DB, no Postgres, no Traefik, no TLS. Use for a local trial, single-user demo or any install that doesn't need the licensed connectors (Nomasx-1 / Nomajde / NomaUBL all need Postgres — use [Full](#full) for those).

### Install

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release

./install.sh light
```

What happens:

| Step | What |
|---|---|
| 1. Generates `.env` with random secrets (no `$` chars). | Skipped if `.env` already exists. |
| 2. `docker compose -f docker-compose.light.yml pull` | Fetches `ghcr.io/fblettner/liberty-next:latest`. |
| 3. `docker compose -f docker-compose.light.yml up -d` | Starts the `liberty-next` container. |
| 4. Waits up to 120 s for the container healthcheck (`GET /info`). | Reports `healthy` once ready. |
| 5. Prints the SPA URL + the generated `admin` password. | Read once; also in `.env` mode `0600`. |

The compose file:

```yaml title="docker-compose.light.yml (excerpt)"
services:
  liberty-next:
    image: ghcr.io/fblettner/liberty-next:${LIBERTY_IMAGE_TAG:-latest}
    container_name: liberty-next
    restart: unless-stopped
    ports:
      - "${LIBERTY_PORT:-8000}:8000"
    environment:
      LIBERTY_JWT_SECRET: "${LIBERTY_JWT_SECRET:?LIBERTY_JWT_SECRET is required}"
      LIBERTY_MASTER_KEY: "${LIBERTY_MASTER_KEY:?LIBERTY_MASTER_KEY is required}"
      LIBERTY_DB_URL: "${LIBERTY_DB_URL:-sqlite+aiosqlite:////data/liberty.db}"
      LIBERTY_ADMIN_PASSWORD: "${LIBERTY_ADMIN_PASSWORD:-}"
      LIBERTY_LICENSE_KEY: "${LIBERTY_LICENSE_KEY:-}"
      ANTHROPIC_API_KEY: "${ANTHROPIC_API_KEY:-}"
    volumes:
      - liberty-data:/data              # SQLite DB + auth.toml
      - liberty-config:/app/config      # operator-edited TOMLs
    healthcheck:
      test: ["CMD", "curl", "-fsS", "http://127.0.0.1:8000/info"]
      interval: 30s
      timeout: 5s
      start_period: 40s
      retries: 3
```

### What you get

On port `8000`:

| Path | What |
|---|---|
| `/` | React SPA — sign in with `admin` + the password `install.sh` printed. |
| `/docs` | Swagger UI. |
| `/redoc` | ReDoc API reference. |
| `/openapi.json` | OpenAPI 3 spec. |
| `/info` | Public liveness + counts (the healthcheck hits this). |

Two named volumes:

| Volume | What | Backup strategy |
|---|---|---|
| `liberty-data` | SQLite DB + `auth.toml` (Argon2 password hashes). | `backup.sh` snapshots it. |
| `liberty-config` | Every TOML the operator edits via *Settings → …*. | Same. |

### Upgrade

```bash
./backup.sh                                       # snapshot first (always)
docker compose -f docker-compose.light.yml pull
docker compose -f docker-compose.light.yml up -d
```

The entrypoint runs `liberty-admin init-db` on every boot — idempotent, adds any new framework tables a newer release brings, leaves existing rows alone. To pin a specific version, set `LIBERTY_IMAGE_TAG=0.2.0` in `.env`.

---

## Layout 2 — Full (`docker-compose.full.yml`) \{#full\}

Five services behind Traefik on a single host. The production / staging layout — and the layout licensed bundles (Nomasx-1, Nomajde, NomaUBL) deploy against.

### Install

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release

./install.sh full
```

`install.sh` generates `.env` with random secrets for **every** value the full stack needs — `LIBERTY_JWT_SECRET`, `LIBERTY_MASTER_KEY`, `POSTGRES_PASSWORD`, `PGADMIN_PASSWORD`, `LIBERTY_ADMIN_PASSWORD` — then pulls every image and brings the stack up. Total install time on a warm cache: ~30 s.

### What you get

Routing on port `80` (or `443` once TLS is wired):

| Path | Service | What |
|---|---|---|
| `/` *(catchall, priority 1)* | liberty-next | SPA + REST API + admin + docs. |
| `/pgadmin` *(priority 100)* | pgAdmin | Postgres GUI — sign in with `admin@example.com` + `PGADMIN_PASSWORD` from `.env`. |
| `/portainer` *(priority 100)* | Portainer | Docker UI. |
| `/traefik` *(priority 1000)* | Traefik dashboard | Basic-auth gated — default `admin/admin`, **change it** in `traefik/dynamic/dynamic.yml`. |

The full layout's six named volumes:

| Volume | What | In `backup.sh`? |
|---|---|---|
| `liberty-config` | Operator-edited TOMLs. | Yes. |
| `pg-data` | Postgres database files. | Yes. |
| `pg-logs` | Rotated Postgres log files. | No (regenerates on boot). |
| `pgadmin-data` | pgAdmin server registrations + preferences. | Yes. |
| `portainer-data` | Portainer state. | Yes. |
| `traefik-acme` | Let's Encrypt certificate storage (when TLS is wired). | No (re-acquirable). |

### Postgres tuning

The bundled Postgres ships with pgtune-style defaults for a ~8 GB host:

```yaml title="docker-compose.full.yml (Postgres command)"
command:
  - postgres
  - -c
  - shared_buffers=2GB
  - -c
  - work_mem=256MB
  - -c
  - maintenance_work_mem=128MB
  - -c
  - max_wal_size=8GB
  - -c
  - wal_level=minimal            # disables replication/PITR — single-instance + nightly backups
  - -c
  - max_wal_senders=0
  - -c
  - synchronous_commit=off       # ~1 s of writes can be lost on a hard crash — fine for ETL
  - -c
  - checkpoint_timeout=20min
  - -c
  - logging_collector=on
```

| Host size | Adjustment |
|---|---|
| ≤ 4 GB RAM | Halve `shared_buffers` and `work_mem`. |
| ~8 GB RAM | Defaults. |
| ≥ 16 GB RAM | Bump `shared_buffers` to ~25% of RAM, `work_mem` to 512 MB. |

Two settings trade durability for throughput — review before strict-durability workloads:

| Setting | Tradeoff |
|---|---|
| `wal_level=minimal` + `max_wal_senders=0` | Disables physical replication / PITR / logical decoding. Fine for single-instance + nightly backups; switch to `wal_level=replica` for a hot standby. |
| `synchronous_commit=off` | A hard crash can lose the last few committed transactions (< 1 s of writes). Flip to `on` for financial workloads. |

The Postgres port (`5432`) is exposed on the host by default — useful for DBeaver from your laptop. Comment the `ports:` block to keep Postgres internal-only.

### Wire TLS (Let's Encrypt)

1. Point your domain at the server.
2. In `.env`, set:
   ```
   LIBERTY_DOMAIN=liberty.example.com
   ACME_EMAIL=ops@example.com
   ```
3. In `docker-compose.full.yml`, uncomment the `websecure` entrypoint + the `certificatesresolvers.le.*` flags + the `:443` port mapping.
4. Add `traefik.http.routers.<name>.tls.certresolver: "le"` to each router label.
5. `docker compose -f docker-compose.full.yml up -d`. Traefik requests certificates on first hit.

Full TLS walk-through: [Traefik](./traefik.md).

### Change the Traefik dashboard password

The default `admin/admin` works for the first 30 seconds you spend looking at the dashboard. Then change it:

```bash
docker run --rm httpd:alpine htpasswd -nbB admin "<your-password>"
# admin:$2y$05$abc...
```

Paste the one line of output into `release/traefik/dynamic/dynamic.yml` under `http.middlewares.traefik-auth.basicAuth.users`. `file.watch=true` reloads the dynamic config in seconds — no container restart needed.

### Upgrade

```bash
./backup.sh                                  # snapshot first
docker compose -f docker-compose.full.yml pull
docker compose -f docker-compose.full.yml up -d
```

Same idempotent `init-db` runs on liberty-next boot. Pin via `LIBERTY_IMAGE_TAG=0.2.0` in `.env`.

---

## Layout 3 — Docker Swarm (`docker-compose.swarm.yml`) \{#swarm\}

Same five services as Full, adapted for Swarm. Works for single-node swarms (one VM, staging) and multi-node swarms (one manager + N workers).

### Why a separate compose file

`docker stack deploy` ignores several Compose-only constructs (`container_name`, `depends_on: condition: service_healthy`, `restart: unless-stopped`) and needs others Compose doesn't (`deploy.*` keys, `--providers.swarm`, overlay networks). The swarm compose is the full layout, ported to Swarm grammar.

### Install

One-time on the manager:

```bash
docker swarm init                                    # single-node
docker swarm init --advertise-addr <manager-ip>      # multi-node
```

Then:

```bash
cd liberty-next/release

./install.sh prepare              # generate .env only (random secrets, no $ chars)
./deploy-swarm.sh                 # deploy the stack — defaults to 'liberty'
```

What `deploy-swarm.sh` does:

| Step | What |
|---|---|
| **1. `set -a; . .env; set +a`** | Sources `.env` into the shell — `docker stack deploy` has no `--env-file` flag and reads env from the shell. |
| **2. Sanity-check the required vars** | `LIBERTY_JWT_SECRET`, `LIBERTY_MASTER_KEY`, `POSTGRES_PASSWORD`, `PGADMIN_PASSWORD` must be non-empty. |
| **3. `docker stack deploy --with-registry-auth --prune --resolve-image always`** | Deploys the stack. `--with-registry-auth` forwards the manager's auth tokens so workers can pull private images; `--prune` removes services no longer in the compose file. |
| **4. Waits up to 180 s for service convergence** | All services report `1/1` replicas. |
| **5. Prints the stack table + URLs** | Including the swarm-specific reset command and rollback command. |

Other helper invocations:

```bash
./deploy-swarm.sh --stack mystack       # custom stack name
./deploy-swarm.sh --status              # show current service state, no deploy
./deploy-swarm.sh --rm                  # tear the stack down (volumes survive)
```

### The env var question

Sourcing `.env` into the shell, then `docker stack deploy` substitutes the `${VAR}`s into the service spec. Once substituted, the values are **baked into the swarm raft store** — changing `.env` after deploy has no effect. Re-run `./deploy-swarm.sh` to push new values.

For long-term secrets, Docker Secrets is the swarm-native alternative — they're encrypted at rest in the raft store and mounted as files (not env vars) in target containers. See the comment block at the bottom of `docker-compose.swarm.yml` for the upgrade-to-secrets recipe.

### Update one service to a new image tag

`docker stack deploy` reconciles the spec against what's running — re-running it IS the update mechanism. To bump just one service without touching the others:

```bash
docker service update --image ghcr.io/fblettner/liberty-next:0.2.0 liberty_liberty-next
docker service rollback liberty_liberty-next       # if something looks wrong
```

### Placement constraints

The swarm compose pins **every service to a manager** by default — fine for single-node swarms and small clusters. For larger setups:

| Service | Where to pin | Why |
|---|---|---|
| `pg` | A specific node — `node.hostname == <your-pg-node>` | The volume must reattach in place. Multiple managers without this constraint = Postgres reschedules onto a node with an empty volume. |
| `liberty-next` | Optionally `node.role == worker` | Move to dedicated app-tier nodes if you have them. |
| `traefik` | Stays on a manager | `--providers.swarm` reads the Docker socket, which only managers expose. |

### Multi-replica notes

`replicas: 1` is the default for every service. Stateful services (`pg`, `pgadmin`, `portainer`) should stay there — none have built-in replication. `liberty-next` keeps Socket.IO state in-process, so bumping its replicas without a shared backplane (Redis adapter) gives clients an inconsistent view of live dashboards / chat streams. The Traefik sticky cookie helps but isn't a substitute. **Scale once Redis is wired in.**

### Backups + restores

`backup.sh` works the same — volume names (`liberty-config`, `pg-data`, …) are identical across Compose and Swarm. Run it from the manager.

---

## Backups — `backup.sh` \{#backups\}

Tar-snapshots every Liberty named volume into a timestamped directory. Works for Compose AND Swarm — volumes are named the same way. Safe to run while the stack is up (Docker handles read consistency); for a cold-perfect snapshot, stop the stack first.

```bash
./backup.sh                              # → ./backups/YYYY-MM-DD_HHMMSS/
./backup.sh /mnt/nas/liberty             # → /mnt/nas/liberty/YYYY-MM-DD_HHMMSS/
./backup.sh --layout light               # back up only the light layout's volumes
./backup.sh --layout full                # back up only the full layout's volumes
./backup.sh --keep 30                    # delete backups older than 30 days from the destination
```

Each run produces one directory:

| File | Layout |
|---|---|
| `liberty-config.tar.gz` | Both. |
| `liberty-data.tar.gz` | Light only (SQLite + auth.toml). |
| `pg-data.tar.gz`, `pgadmin-data.tar.gz`, `portainer-data.tar.gz` | Full only. |
| `.env.snapshot` | Both (mode `0600` — strip before off-site sync if you don't want secrets in the backup). |
| `docker-compose.*.yml` | The compose file(s) in this directory at backup time. |

### Run weekly from cron

```cron
0 3 * * 0  cd /opt/liberty-next/release && ./backup.sh /mnt/nas/liberty --keep 60
```

### Restore one volume

`backup.sh` prints the exact command on success. The general shape:

```bash
docker compose -f docker-compose.full.yml down     # MUST be down — never restore on a live volume
docker volume rm pg-data                            # wipe (skip if you want to overlay)
docker run --rm -v pg-data:/data -v "$PWD/backups/<dir>:/backup" alpine \
    sh -c 'rm -rf /data/* /data/.[!.]* && tar xzf /backup/pg-data.tar.gz -C /data'
docker compose -f docker-compose.full.yml up -d
```

For Swarm: tear the stack down first (`./deploy-swarm.sh --rm`), restore, then re-deploy.

---

## Common operations \{#common-operations\}

| Need | Compose | Swarm |
|---|---|---|
| Reset the admin password | `docker compose exec liberty-next liberty-admin set-password admin <new>` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-admin set-password admin <new>` |
| Add another superuser | `docker compose exec liberty-next liberty-admin create-user <name> --superuser` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-admin create-user <name> --superuser` |
| Inspect the license key | `docker compose exec liberty-next liberty-license verify` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-license verify` |
| Tail logs | `docker compose -f docker-compose.full.yml logs -f liberty-next` | `docker service logs -f liberty_liberty-next` |
| Open a shell | `docker compose exec liberty-next bash` | `docker exec -it $(docker ps -qf name=liberty_liberty-next) bash` |
| List services | `docker compose ps` | `docker stack services liberty` |
| Reload config (TOML change) | `POST /admin/reload` (Settings UI button does this) | Same. |

See `liberty-admin --help` / `liberty-license --help` for the full CLI.

---

## Troubleshooting

### Container exits immediately

```bash
docker compose -f docker-compose.<layout>.yml logs liberty-next
```

| Log line | Cause | Fix |
|---|---|---|
| `LIBERTY_JWT_SECRET is required` | The required env var didn't propagate. | `install.sh` should have generated it — check `.env`. |
| `Could not connect to database` *(full layout)* | Postgres isn't healthy yet. | Wait 10 s — the `depends_on: condition: service_healthy` should normally cover it; check `docker compose ps pg`. |
| Healthcheck never goes healthy | The container is up but `/info` doesn't respond. | Tail the logs — most often a config TOML on the `liberty-config` volume has a syntax error. |

### Login page renders, sign-in fails

The bootstrap admin's password is in `.env` as `LIBERTY_ADMIN_PASSWORD`. Reset:

```bash
docker compose exec liberty-next liberty-admin set-password admin <new>
```

### Apps repo changes don't show up

TOML edits via *Settings → …* hot-reload automatically. For Python plugin changes (if you mounted `plugins/` from the host), restart the container:

```bash
docker compose restart liberty-next
```

### Port 8000 / 80 is taken

Light: `LIBERTY_PORT=8001` in `.env`. Full: `TRAEFIK_HTTP_PORT=8080` in `.env`. Then `docker compose up -d`.

### Swarm: services stay in `0/1`

```bash
docker stack ps liberty --no-trunc                 # shows the placement decision + error
docker service logs liberty_<service-name>         # tail the service's logs
```

Most common: a placement constraint can't be satisfied (Postgres pinned to a node that's not in the swarm), or the manager can't pull the image (network / registry auth).

---

## What's next

- [Python server](./python-server.md) — the no-Docker alternative (pipx).
- [Traefik](./traefik.md) — wire TLS + the friendly hostname.
- [Portainer](./portainer.md) — what the bundled Portainer is good for.
- [Production](./production.md) — hardening, OIDC, scheduler pin.
- [Upgrading](./upgrading.md) — the upgrade procedure (it's `pull && up -d`).
- [Deploy prebuilt apps](./deploy-prebuilt-apps.md) — NomaUBL / Nomasx-1 / Nomajde on top of this stack.
