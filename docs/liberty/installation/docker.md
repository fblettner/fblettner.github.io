---
title: Docker
description: "Stand up Liberty Next as a Docker Compose stack — three layouts (light SQLite, full 5-service production, Swarm) + two TLS overlays + an apps overlay, all wired by ./install.sh and the COMPOSE_FILE chain in .env. ./install-apps.sh adds the licensed apps. ./deploy-swarm.sh drives Swarm. ./backup.sh snapshots every named volume + the apps bind mount."
keywords: [Liberty Framework, Docker, Docker Compose, Docker Swarm, install.sh, install-apps.sh, deploy-swarm.sh, backup.sh, light, full, swarm, COMPOSE_FILE, --tag, --reset, --apps, --ssl, Traefik, Postgres, pgAdmin, Portainer, Settings App, ghcr.io]
---

# Docker

The repository's [`release/`](https://github.com/fblettner/liberty-next/tree/main/release) directory carries everything you need:

| Files | What |
|---|---|
| `docker-compose.light.yml` | Single container + SQLite (trial layout). |
| `docker-compose.full.yml` | 5 services behind Traefik (production layout). |
| `docker-compose.swarm.yml` | The full layout, ported to Swarm grammar. |
| `docker-compose.tls-letsencrypt.yml` | TLS overlay — Let's Encrypt via TLS-ALPN challenge. |
| `docker-compose.tls-provided.yml` | TLS overlay — operator-provided certs (corporate CA, internal PKI). |
| `docker-compose.apps.yml` | Licensed-apps overlay — bind-mounts `./apps` at `/apps:ro` + sets `LIBERTY_APPS_DIR`. |
| `install.sh` | Generates `.env`, pulls images, brings the stack up, prints credentials. |
| `install-apps.sh` | Materialises the licensed-apps wheel into `./apps/` + wires the overlay. |
| `deploy-swarm.sh` | Sources `.env` into the shell + `docker stack deploy`. |
| `backup.sh` | Tars every Liberty named volume + the apps bind mount into a timestamped directory. |
| `.env.example` | Reference env file with every supported variable documented. |
| `traefik/dynamic/dynamic.yml` | Basic-auth + security-headers + redirect-to-https middlewares. |

The image lives at `ghcr.io/fblettner/liberty-next` (public).

This page walks each layout end-to-end and explains the **COMPOSE_FILE discipline** — the rule that keeps every overlay live across `docker compose` commands. For the conceptual overview + the four-shape comparison, read [Overview](./overview.md) first.

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

## The COMPOSE_FILE discipline \{#compose-file-discipline\}

`install.sh` writes a line like this into `.env`:

```env title=".env (excerpt)"
COMPOSE_FILE=docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml
```

Docker Compose reads this env var on every command and **automatically merges every listed file**. Operators never type `-f`.

| Command (right) | Command (wrong) |
|---|---|
| `docker compose pull` *(merges every overlay)* | `docker compose -f docker-compose.full.yml pull` *(drops TLS + apps overlays)* |
| `docker compose up -d` | `docker compose -f docker-compose.full.yml up -d` |
| `docker compose logs -f liberty-next` | `docker compose -f docker-compose.full.yml logs -f liberty-next` |
| `docker compose down` | `docker compose -f docker-compose.full.yml down` |

**Rule**: after `./install.sh` (or `./install-apps.sh`) has wired `COMPOSE_FILE`, NEVER pass `-f` manually. Passing `-f` overrides `COMPOSE_FILE` and silently drops every overlay — the next `up -d` would remove the apps mount and the TLS routes.

When you genuinely need a one-off run with a specific compose file (debug, smoke test), use `COMPOSE_FILE=docker-compose.full.yml docker compose <cmd>` to scope the override to that invocation.

:::info[`install.sh` repairs older `.env` files]
On installs that pre-date the `COMPOSE_FILE` discipline, re-running `install.sh` detects the missing line and **adds it automatically** (`COMPOSE_FILE=docker-compose.<layout>.yml`). Without that fix, Compose's project discovery walks up the tree looking for a `compose.yaml` and can pick the wrong file. The repair is logged: `Existing .env lacks COMPOSE_FILE — adding 'COMPOSE_FILE=...'`.
:::

---

## Layout 1 — Light (`docker-compose.light.yml`) \{#light\}

One container, SQLite framework DB, no Postgres, no Traefik, no TLS. Use for a local trial, single-user demo or any install that doesn't need a multi-user Postgres.

### Install

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release

./install.sh light                              # latest tag
./install.sh light --tag 7.0.2                  # pin to a specific release
```

What happens:

| Step | What |
|---|---|
| 1. Stale-volume check. | If `pg-data` / `pgadmin-data` / `liberty-data` exist from a previous install but `.env` is missing, the script refuses to proceed — postgres init only runs on a brand-new volume, so reusing old volumes with fresh secrets would auth-fail forever. Re-run with `--reset` to wipe + start fresh, or restore the previous `.env`. |
| 2. Generates `.env` with random secrets (no `$` chars). | First run only. |
| 3. Writes `COMPOSE_FILE=docker-compose.light.yml` to `.env`. | Every subsequent `docker compose` cmd uses this. |
| 4. `docker compose pull` | Fetches `ghcr.io/fblettner/liberty-next:<tag>`. |
| 5. `docker compose up -d` | Starts the `liberty-next` container. |
| 6. Waits up to 120 s for the container healthcheck (`GET /info`). | Reports `healthy` once ready. |
| 7. Prints the SPA URL + the generated `admin` password. | Read once; also in `.env` mode `0600`. |

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
      LIBERTY_ADMIN_PASSWORD: "${LIBERTY_ADMIN_PASSWORD:-}"     # first-boot only — install.sh exports it; not stored in .env
      # License key, Anthropic API key, OIDC client_secret no longer live here —
      # edit them via Settings → App in the SPA (encrypted at rest in app.toml).
      LIBERTY_LICENSE_KEY: "${LIBERTY_LICENSE_KEY:-}"             # legacy env-var fallback — leave empty for UI-managed
      ANTHROPIC_API_KEY: "${ANTHROPIC_API_KEY:-}"                 # legacy env-var fallback
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
./backup.sh                       # snapshot first (always)
docker compose pull               # COMPOSE_FILE picks the right files
docker compose up -d
```

The entrypoint runs `liberty-admin init-db` on every boot — idempotent, adds new framework tables a newer release brings, leaves existing rows alone. To pin a specific version, set `LIBERTY_IMAGE_TAG=7.0.2` in `.env` (or pass `--tag 7.0.2` at first install).

---

## Layout 2 — Full (`docker-compose.full.yml`) \{#full\}

Five services behind Traefik on a single host. The production / staging layout — and the canonical target for licensed bundles (Nomasx-1, Nomajde) since they need a multi-user Postgres.

### Install

```bash
./install.sh full                                       # latest tag, no TLS
./install.sh full --tag 7.0.2                           # pinned tag
./install.sh full --ssl letsencrypt \                   # + Let's Encrypt
    --domain liberty.example.com --email ops@example.com
./install.sh full --apps ./liberty_apps-7.0.1.whl       # + licensed apps in one command
```

`install.sh` generates `.env` with random secrets for the values the full stack needs — `LIBERTY_JWT_SECRET`, `LIBERTY_MASTER_KEY`, `POSTGRES_PASSWORD`, `PGADMIN_PASSWORD` — then pulls every image and brings the stack up. The first-boot `LIBERTY_ADMIN_PASSWORD` is generated, exported to the shell so the boot picks it up, **then printed once in the install summary** and not written to `.env` (on re-runs the existing admin user keeps its prior password). Total install time on a warm cache: ~30 s.

The **license key** is set after install via *Settings → App → License* in the SPA — encrypted at rest in `app.toml` with the install master key, applied live on save (no restart). See [App settings](../framework/build/settings-app.md). The `--license-key` flag was removed from `install.sh`.

### What you get

Routing on port `80` (or `443` once TLS is wired):

| Path | Service | What |
|---|---|---|
| `/` *(catchall, priority 1)* | liberty-next | SPA + REST API + admin + docs. |
| `/pgadmin` *(priority 100)* | pgAdmin | Postgres GUI — sign in with `admin@liberty.fr` (override with `PGADMIN_EMAIL` in `.env`) + `PGADMIN_PASSWORD` from `.env`. |
| `/portainer` *(priority 100)* | Portainer | Docker UI. |
| `/traefik` *(priority 1000)* | Traefik dashboard | Basic-auth gated — default `admin/admin`, **change in `traefik/dynamic/dynamic.yml`**. |

The full layout's five named volumes:

| Volume | What | In `backup.sh`? |
|---|---|---|
| `liberty-config` | Operator-edited TOMLs. | Yes. |
| `pg-data` | Postgres database files. | Yes. |
| `pgadmin-data` | pgAdmin server registrations + preferences. | Yes. |
| `portainer-data` | Portainer state. | Yes. |
| `traefik-acme` | Let's Encrypt certificate storage (mounted at `/acme` in Traefik). | No (re-acquirable on demand). |

When the apps overlay is on, `./apps/` (a host directory, not a Docker volume) is **also** backed up by `backup.sh` — it reads `APPS_HOST_PATH` from `.env`.

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
  - log_destination=stderr       # logs to stderr (visible via docker compose logs pg)
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

### Postgres logging

Postgres logs to **stderr** — visible via `docker compose logs -f pg`. The bundled compose attaches a Docker `json-file` logging driver with rotation (`max-size: 100m`, `max-file: 3`) so the host's `/var/lib/docker/containers/<id>/<id>-json.log` doesn't grow unbounded.

The compose file does NOT enable `logging_collector=on` + a `pg-logs` named volume — the postgres image runs as UID 70 and a freshly-created named volume mounts as `root:root`, so logging_collector would crash with "Permission denied" on first write. If you want file-backed logs, configure a host-side logging driver (`json-file`, `syslog`, `fluentd`) on the Docker daemon or per service.

### Postgres port exposure

`5432:5432` is mapped to the host by default — useful for DBeaver from your laptop. Comment the `ports:` block (or set `POSTGRES_PORT=""` in `.env`) to keep Postgres internal-only.

### Wire TLS

Two modes, both wired by `install.sh --ssl`. Choose at install time, or re-run later (re-running keeps `.env` secrets but updates the SSL config + `COMPOSE_FILE`).

#### Let's Encrypt (demo / public-internet hosts)

```bash
./install.sh full --ssl letsencrypt \
    --domain liberty.example.com \
    --email ops@example.com
```

Requirements:
- The hostname resolves to this host (DNS A/AAAA record).
- `:80` and `:443` are reachable from the public internet (the TLS-ALPN challenge needs them).

What it does:
- Appends `docker-compose.tls-letsencrypt.yml` to `COMPOSE_FILE` in `.env`.
- Sets `LIBERTY_DOMAIN` + `ACME_EMAIL` in `.env`.
- Traefik handles cert request + renewal via the ACME resolver. Certs persist in the `traefik-acme` named volume (mounted at `/acme` inside Traefik).

#### Operator-provided certs (corporate / air-gapped hosts)

```bash
./install.sh full --ssl provided \
    --domain liberty.internal.example.com \
    --cert-dir  /etc/pki/tls \
    --cert-file liberty.crt \
    --key-file  liberty.key
```

Requirements:
- A directory on the host containing the cert (`.crt` / `.pem`) and the private key. `install.sh` validates both exist before continuing.

What it does:
- Appends `docker-compose.tls-provided.yml` to `COMPOSE_FILE`.
- Sets `CERT_HOST_PATH=<cert-dir>` in `.env` — Traefik bind-mounts that directory at `/etc/certs:ro`.
- Generates `traefik/dynamic/tls.yml` (gitignored) with the cert + key filenames baked in. Traefik watches this file via `file.watch=true` — edit it to add more certs / SNI rules without restarting.

#### Switching modes later

Re-run `./install.sh full --ssl <new-mode> …` with the same secrets in place. The script swaps the overlay in `COMPOSE_FILE`, rewrites `tls.yml` (or removes it for LE mode), and `docker compose up -d` picks up the new config.

#### No SSL (default)

`./install.sh full` without `--ssl` runs HTTP-only on `:80`. Fine for local dev / behind another reverse proxy that terminates TLS upstream.

Full TLS reference: [Traefik](./traefik.md).

### Add the licensed apps

Single command at install time:

```bash
./install.sh full --apps ./liberty_apps-7.0.1.whl
```

Or split (base first, apps later):

```bash
./install.sh full
./install-apps.sh ./liberty_apps-7.0.1.whl
```

After either form, set the vendor license JWT via *Settings → App → License* — connectors rebuild on save without a restart.

The wheel is materialised into `./apps/` via a throwaway `python:3.12-slim` container — your host needs no Python or pip. Full procedure + flags: [Deploy prebuilt apps](./deploy-prebuilt-apps.md).

### Change the Traefik dashboard password

The default `admin/admin` works for the first 30 seconds you spend looking at the dashboard. Then change it:

```bash
docker run --rm httpd:alpine htpasswd -nbB admin "<your-password>"
# admin:$2y$05$abc...
```

Paste the one line of output into `release/traefik/dynamic/dynamic.yml` under `http.middlewares.traefik-auth.basicAuth.users`. `file.watch=true` reloads the dynamic config in seconds — no container restart needed.

### Upgrade

```bash
./backup.sh                       # snapshot first
docker compose pull               # COMPOSE_FILE merges every overlay
docker compose up -d
```

Same idempotent `init-db` runs on `liberty-next` boot. Pin via `LIBERTY_IMAGE_TAG=7.0.2` in `.env`.

---

## Layout 3 — Docker Swarm (`docker-compose.swarm.yml`) \{#swarm\}

Same five services as Full, adapted for Swarm. Works for single-node swarms (one VM, staging) and multi-node swarms (one manager + N workers).

### Why a separate compose file

`docker stack deploy` ignores several Compose-only constructs (`container_name`, `depends_on: condition: service_healthy`, `restart: unless-stopped`) and needs others Compose doesn't (`deploy.*` keys, `--providers.swarm`, overlay networks). The swarm compose is the full layout ported to Swarm grammar.

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

`./install.sh prepare` writes `.env` without starting any Compose stack (Swarm doesn't use the Compose runtime). `./deploy-swarm.sh` does the rest:

| Step | What |
|---|---|
| **1. `set -a; . .env; set +a`** | Sources `.env` into the shell — `docker stack deploy` has no `--env-file` flag and reads env from the shell. |
| **2. Sanity-check the required vars** | `LIBERTY_JWT_SECRET`, `LIBERTY_MASTER_KEY`, `POSTGRES_PASSWORD`, `PGADMIN_PASSWORD` must be non-empty. |
| **3. `docker stack deploy --with-registry-auth --prune --resolve-image always`** | Deploys the stack. `--with-registry-auth` forwards the manager's auth tokens so workers can pull private images; `--prune` removes services no longer in the compose file. |
| **4. Waits up to 180 s for service convergence** | All services report `1/1` replicas. |
| **5. Prints the stack table + URLs** | Including the swarm-specific reset and rollback commands. |

Other helper invocations:

```bash
./deploy-swarm.sh --stack mystack       # custom stack name
./deploy-swarm.sh --status              # show current service state, no deploy
./deploy-swarm.sh --rm                  # tear the stack down (volumes survive)
```

### The env var question

Sourcing `.env` into the shell, then `docker stack deploy` substitutes the `${VAR}`s into the service spec. Once substituted, the values are **baked into the swarm raft store** — changing `.env` after deploy has no effect. Re-run `./deploy-swarm.sh` to push new values.

For long-term secrets, Docker Secrets is the swarm-native alternative — they're encrypted at rest in the raft store and mounted as files (not env vars) in target containers. See the comment block at the bottom of `docker-compose.swarm.yml` for the upgrade-to-secrets recipe.

### `install.sh` flags vs Swarm

The Compose-only `install.sh` flags — `--apps`, `--ssl letsencrypt|provided` — do NOT carry over to Swarm. For Swarm operators:

| Goal | How |
|---|---|
| Pin the image tag | Set `LIBERTY_IMAGE_TAG=7.0.2` in `.env` before `./deploy-swarm.sh`. |
| Apply TLS | Manually merge the TLS overlay: `docker stack deploy -c docker-compose.swarm.yml -c docker-compose.tls-letsencrypt.yml liberty` (Swarm accepts `-c` repeated). |
| Apply the apps overlay | Same: `-c docker-compose.swarm.yml -c docker-compose.apps.yml`, with `APPS_HOST_PATH` set in the shell environment. Materialise the wheel first via `./install-apps.sh ./liberty_apps-*.whl --target ./apps` from a manager (it skips the Compose restart on Swarm — the volume is already in place). |
| Update one service | `docker service update --image ghcr.io/fblettner/liberty-next:0.2.0 liberty_liberty-next`. |
| Rollback | `docker service rollback liberty_liberty-next`. |

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

Tar-snapshots every Liberty named volume + the apps bind mount (when set) into a timestamped directory. Works for Compose AND Swarm. Safe to run while the stack is up (Docker handles read consistency); for a cold-perfect snapshot, stop the stack first.

```bash
./backup.sh                              # → ./backups/YYYY-MM-DD_HHMMSS/
./backup.sh /mnt/nas/liberty             # → /mnt/nas/liberty/YYYY-MM-DD_HHMMSS/
./backup.sh --layout light               # back up only the light layout's volumes
./backup.sh --layout full                # back up only the full layout's volumes
./backup.sh --keep 30                    # delete backups older than 30 days from the destination
```

Each run produces one directory:

| File | When present |
|---|---|
| `liberty-config.tar.gz` | Always. |
| `liberty-data.tar.gz` | Light layout (SQLite + auth.toml). |
| `pg-data.tar.gz`, `pgadmin-data.tar.gz`, `portainer-data.tar.gz` | Full layout. |
| `liberty-apps.tar.gz` | When `APPS_HOST_PATH` is set in `.env` (apps overlay is active). |
| `.env.snapshot` | Always (mode `0600` — strip before off-site sync if you don't want secrets in the backup). |
| `docker-compose.*.yml` | The compose file(s) in the directory at backup time. |

### Run weekly from cron

```cron
0 3 * * 0  cd /opt/liberty-next/release && ./backup.sh /mnt/nas/liberty --keep 60
```

### Restore one volume

`backup.sh` prints the exact command on success. The general shape:

```bash
docker compose down                                 # MUST be down — COMPOSE_FILE picks the right files
docker volume rm pg-data                            # wipe (skip if you want to overlay)
docker run --rm -v pg-data:/data -v "$PWD/backups/<dir>:/backup" alpine \
    sh -c 'rm -rf /data/* /data/.[!.]* && tar xzf /backup/pg-data.tar.gz -C /data'
docker compose up -d
```

For Swarm: tear the stack down first (`./deploy-swarm.sh --rm`), restore, then re-deploy.

### Restore the apps bind mount

The apps directory is a host folder, not a Docker volume:

```bash
docker compose down                                 # so liberty-next isn't holding the mount
rm -rf ./apps                                       # or back it up before wiping
tar xzf backups/<dir>/liberty-apps.tar.gz -C ./apps
docker compose up -d
```

---

## Recovery — `--reset` flag \{#reset\}

When a previous install left stale volumes (the `pg-data` was initialised with an old password, then `.env` was lost) the next `install.sh` would generate fresh secrets that don't match — postgres auth fails forever because postgres init only runs on a brand-new volume.

`install.sh` catches this case and refuses to start. Two ways out:

| Option | What |
|---|---|
| **`./install.sh <layout> --reset`** | `docker compose down` + `docker volume rm` of every Liberty **data** volume (`pg-data`, `pgadmin-data`, `portainer-data`, `liberty-data`, `liberty-config`) + deletes `.env`, then **exits**. Re-run `./install.sh` with your install flags afterwards. The `traefik-acme` volume is intentionally preserved — Let's Encrypt rate-limits at 5 certs / 7 days / domain set; wiping it on every reset would burn through the quota. To force a fresh cert (domain change, key compromise), drop it manually: `docker volume rm traefik-acme`. |
| **Restore the previous `.env`** | Drop the old `.env` file back in `release/`, then re-run `./install.sh`. It detects the existing `.env` and just brings the stack up — the secrets match the volumes. |

The `.env.snapshot` produced by `backup.sh` is the canonical "previous `.env`" — keep it alongside your volume snapshots.

:::info[`--reset` is wipe-and-exit, not auto-reinstall]
Combining `--reset` with `--apps`, `--ssl` or any other install flag errors out — earlier behaviour silently dropped the install flags into the void. The error message gives the two-command sequence you probably meant:
```bash
./install.sh full --reset                                      # 1) wipe
./install.sh full --ssl letsencrypt --domain ... --apps ./...  # 2) install with your flags
```
:::

---

## Common operations

| Need | Compose | Swarm |
|---|---|---|
| Reset the admin password | `docker compose exec liberty-next liberty-admin set-password admin <new>` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-admin set-password admin <new>` |
| Add another superuser | `docker compose exec liberty-next liberty-admin create-user <name> --superuser` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-admin create-user <name> --superuser` |
| Inspect the license key | `docker compose exec liberty-next liberty-license verify` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-license verify` |
| Tail logs | `docker compose logs -f liberty-next` | `docker service logs -f liberty_liberty-next` |
| Open a shell | `docker compose exec liberty-next bash` | `docker exec -it $(docker ps -qf name=liberty_liberty-next) bash` |
| List services | `docker compose ps` | `docker stack services liberty` |
| Reload config (TOML change) | `POST /admin/reload` (Settings UI button does this) | Same. |

See `liberty-admin --help` / `liberty-license --help` for the full CLI.

---

## Troubleshooting

### Container exits immediately

```bash
docker compose logs liberty-next             # no -f needed — COMPOSE_FILE picks the right files
```

| Log line | Cause | Fix |
|---|---|---|
| `LIBERTY_JWT_SECRET is required` | The required env var didn't propagate. | `install.sh` should have generated it — check `.env`. |
| `Could not connect to database` *(full layout)* | Postgres isn't healthy yet. | Wait 10 s — the `depends_on: condition: service_healthy` should normally cover it; check `docker compose ps pg`. |
| `password authentication failed for user "liberty"` | Stale `pg-data` volume from a previous install; `.env` now has fresh secrets. | `./install.sh full --reset` (wipes + exits — then re-run `install.sh` with your flags) or restore the old `.env`. |
| Healthcheck never goes healthy | Container up but `/info` doesn't respond. | Tail the logs — most often a config TOML on the `liberty-config` volume has a syntax error. |

### Login page renders, sign-in fails

The bootstrap admin's password is printed once by `install.sh` and not stored in `.env`. To reset it on demand:

```bash
docker exec liberty-next liberty-admin reset-admin-password    # generates + prints a new one
# or:
docker compose exec liberty-next liberty-admin set-password admin <new>
```

### Apps overlay was added but TOMLs aren't loaded

Check `COMPOSE_FILE` in `.env` — it should end in `:docker-compose.apps.yml`. Re-run `./install-apps.sh <wheel>` if missing. After the var is set, `docker compose up -d` picks it up.

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
- [Traefik](./traefik.md) — wire TLS via the `--ssl` flag.
- [Portainer + pgAdmin](./portainer.md) — what the bundled visual tools are for.
- [Production](./production.md) — hardening, OIDC, scheduler pin.
- [Upgrading](./upgrading.md) — the upgrade procedure (it's `pull && up -d`).
- [Deploy prebuilt apps](./deploy-prebuilt-apps.md) — Nomasx-1 / Nomajde / Nomaflow on top of this stack.
