---
title: Running in production
description: "Production hardening of the Full Docker / Swarm layouts — TLS, password rotation, OIDC, backups, Postgres tuning."
keywords: [Liberty Framework, production, hardening, TLS, OIDC, JWT secret, master key, backups, Postgres tuning, multi-replica]
---

# Running in production

This page is a hardening overlay on top of the [Full Docker layout](./docker.md#full) or the [Swarm layout](./docker.md#swarm). Both layouts ship from the repository's `release/` directory and are driven by `install.sh` / `deploy-swarm.sh` / `backup.sh`. The job of this page is to walk every knob you should turn before the install is allowed to face users — TLS, default passwords, OIDC, the long-lived secrets, backups, Postgres durability, scaling caveats.

It does **not** repeat the install steps — read [Docker](./docker.md) first.

---

## 1 — Pick the layout

| Layout | Production-ready? | When |
|---|---|---|
| **Light** ([docker.md#light](./docker.md#light)) | No — SQLite, no TLS, no licensed connectors. | Local trial, single-user demo. |
| **Full** ([docker.md#full](./docker.md#full)) | Yes. | Single host. Five services behind Traefik. The layout licensed bundles (Nomasx-1, Nomajde, NomaUBL) deploy against. |
| **Swarm** ([docker.md#swarm](./docker.md#swarm)) | Yes. | Single-node swarm (one VM, staging) or multi-node swarm. Same services as Full, ported to Swarm grammar. Pick by ops style — both cover production. |

The rest of this page assumes Full or Swarm. Bare-metal systemd, Podman from-scratch and Kubernetes from-scratch are no longer the recommended paths — the `release/` workflow IS the production path.

---

## 2 — Required env vars (and the `$` substitution caveat)

Every secret lives in `release/.env`. `install.sh` generates it with random values that avoid `$` characters; if you set values by hand, mind the caveat below.

| Variable | Purpose | Notes |
|---|---|---|
| `LIBERTY_IMAGE_TAG` | Pin the image version. | See [section 3](#3--pin-the-image-tag). |
| `LIBERTY_JWT_SECRET` | Signs every access token. | Rotating it invalidates all outstanding tokens — see [section 7](#7--jwt-secret-rotation). |
| `LIBERTY_MASTER_KEY` | Decrypts `ENC:` values in TOML. | MUST stay constant — see [section 8](#8--master-key-handling). |
| `LIBERTY_ADMIN_PASSWORD` | Bootstrap password for the local `admin` user. | Change after first sign-in via `liberty-admin set-password` — see [section 5](#5--change-every-default-password). |
| `POSTGRES_PASSWORD` | Postgres superuser password. | Full / Swarm only. |
| `PGADMIN_EMAIL` / `PGADMIN_PASSWORD` | pgAdmin sign-in. | Default email is `admin@example.com` — change both. |
| `LIBERTY_LICENSE_KEY` | License JWT (licensed bundles only). | Optional for the framework alone. |
| `LIBERTY_OIDC_ENABLED` / `LIBERTY_OIDC_*` | SSO wiring. | See [section 6](#6--oidc-for-sso). |
| `LIBERTY_DOMAIN` / `ACME_EMAIL` | TLS hostname + Let's Encrypt contact. | See [section 4](#4--wire-tls). |

### The `$` substitution caveat

Docker Compose interpolates `$VAR` and `${VAR}` inside `.env` values. A literal `$` in a password becomes empty (or worse, the value of an unrelated variable). Two safe paths:

| Approach | How |
|---|---|
| **Generate without `$`** *(recommended)* | `install.sh` already does this — every random password it writes is `$`-free. |
| **Escape as `$$`** | If you must keep a `$` in a password, double it: `POSTGRES_PASSWORD=ab$$cd` becomes `ab$cd` inside the container. |

If sign-in or DB connection fails right after a manual `.env` edit, suspect this first.

---

## 3 — Pin the image tag

`install.sh` defaults to `:latest`. Acceptable for the first install (you want the freshest image), unacceptable for production: a `docker compose pull` six months later picks up a major version you didn't sign off on.

```env title=".env"
LIBERTY_IMAGE_TAG=0.2.0
```

Roll forward on your cadence:

```bash
# Compose
cd /opt/liberty-next/release
./backup.sh                              # always snapshot first
# bump LIBERTY_IMAGE_TAG in .env, then:
docker compose -f docker-compose.full.yml pull
docker compose -f docker-compose.full.yml up -d

# Swarm
./backup.sh
# bump LIBERTY_IMAGE_TAG in .env, then:
./deploy-swarm.sh
```

Never run `latest` in prod. Full upgrade procedure: [Upgrading](./upgrading.md).

---

## 4 — Wire TLS

The Full / Swarm layouts both ship Traefik fronting every service. TLS is wired in five steps; the deep walk-through (DNS-01, multi-app routing, dashboard exposure) lives at [Traefik](./traefik.md).

1. Point your domain at the host (DNS A record for `liberty.example.com`).
2. Open inbound `80/tcp` + `443/tcp` on the host firewall and the cloud security group.
3. In `release/.env`:
   ```env
   LIBERTY_DOMAIN=liberty.example.com
   ACME_EMAIL=ops@example.com
   ```
4. In `release/docker-compose.full.yml`, uncomment the `websecure` entrypoint, the `certificatesresolvers.le.*` flags, and the `:443` port mapping. Add `traefik.http.routers.<name>.tls.certresolver: "le"` to each router label.
5. `docker compose -f docker-compose.full.yml up -d` (or `./deploy-swarm.sh`). Traefik requests certificates on first hit.

For installs without a public DNS record, switch the challenge type to DNS-01 in Traefik's `command:` (`--certificatesresolvers.le.acme.dnschallenge.provider=<your-DNS-provider>`) and supply the provider credentials as env vars — see Traefik's [Let's Encrypt docs](https://doc.traefik.io/traefik/https/acme/) for the provider matrix.

---

## 5 — Change every default password

`install.sh` generates random secrets for the values it controls; three passwords still ship with known defaults and **must** be changed before the install faces users.

| Where | Default | Change |
|---|---|---|
| **Traefik dashboard** | `admin/admin` | Bcrypt-hash a new password, paste into `release/traefik/dynamic/dynamic.yml`. `file.watch=true` reloads in seconds — no restart needed. |
| **pgAdmin** | `admin@example.com / PGADMIN_PASSWORD` from `.env` | Set `PGADMIN_EMAIL` to a real address and rotate `PGADMIN_PASSWORD`. Restart the `pgadmin` service. |
| **liberty-next admin** | `LIBERTY_ADMIN_PASSWORD` from `.env` | Run `liberty-admin set-password` after first sign-in (see below). |

### Traefik dashboard

```bash
docker run --rm httpd:alpine htpasswd -nbB admin "<your-password>"
# admin:$2y$05$abc...
```

Paste the single line of output into `release/traefik/dynamic/dynamic.yml` under `http.middlewares.traefik-auth.basicAuth.users`.

### pgAdmin

```env title=".env"
PGADMIN_EMAIL=ops@example.com
PGADMIN_PASSWORD=<new-strong-password>
```

```bash
# Compose
docker compose -f docker-compose.full.yml up -d pgadmin

# Swarm
./deploy-swarm.sh
```

### liberty-next admin

```bash
# Compose
docker compose exec liberty-next liberty-admin set-password admin <new>

# Swarm
docker exec $(docker ps -qf name=liberty_liberty-next) \
    liberty-admin set-password admin <new>
```

Once changed, the value in `.env` is no longer authoritative — the Argon2 hash lives in `auth.toml` on the `liberty-config` volume.

---

## 6 — OIDC for SSO

Wire your IdP (Keycloak, Auth0, Azure AD, Okta, …) once the install is reachable over TLS.

```env title=".env"
LIBERTY_OIDC_ENABLED=true
LIBERTY_OIDC_PROVIDER_URL=https://login.example.com/realms/liberty
LIBERTY_OIDC_CLIENT_ID=liberty-next
LIBERTY_OIDC_CLIENT_SECRET=<from-the-IdP>
```

Then restart liberty-next:

```bash
# Compose
docker compose -f docker-compose.full.yml restart liberty-next

# Swarm
./deploy-swarm.sh
```

Local sign-in stays available as the fallback path — the `admin` user keeps working when OIDC is down (provider outage, misconfigured client). Don't disable it.

---

## 7 — JWT secret rotation

`LIBERTY_JWT_SECRET` signs every access + refresh token. Rotating it **invalidates every outstanding token in one move** — every user is signed out and forced to sign in again.

| When to rotate | Why |
|---|---|
| **Incident response** | Suspected leak of the secret, or you need to instantly revoke every session. |
| **Scheduled rotation** | Optional. If you do it, schedule a maintenance window — users will see a sign-in screen mid-session. |

Otherwise leave it stable across upgrades. The value lives in `.env`; bumping it requires a `docker compose up -d liberty-next` (or `./deploy-swarm.sh`) to pick up the new value.

---

## 8 — Master key handling

`LIBERTY_MASTER_KEY` decrypts the `ENC:` values inside every TOML (database passwords, API keys, OIDC client secret in the apps repo). If it changes, every `ENC:` value becomes unreadable — the framework can't open connectors, can't verify the license, won't start.

| Rule | Why |
|---|---|
| **MUST stay constant across restarts and upgrades.** | Changing it loses access to every encrypted secret. There is no recovery — you re-enter every connector secret by hand. |
| **Back it up alongside the volumes.** | A volume restore without the master key is a paperweight. |
| **Keep it out of git.** | Same threat model as a CA private key. |

`backup.sh` writes a `.env.snapshot` (mode `0600`) into every backup directory — the master key rides along with the volume snapshots. Strip it before off-site sync if your storage policy forbids secrets in backups.

---

## 9 — Backups via backup.sh

`backup.sh` tar-snapshots every Liberty named volume. Safe to run while the stack is up — Docker handles read consistency. For a cold-perfect snapshot, `docker compose down` (or `./deploy-swarm.sh --rm`) first.

### Weekly cron

```cron title="/etc/cron.d/liberty-backup"
0 3 * * 0  cd /opt/liberty-next/release && ./backup.sh /mnt/nas/liberty --keep 60
```

`--keep 60` deletes backups older than 60 days from the destination. Pair with off-site sync of `/mnt/nas/liberty` for disaster recovery.

What ships in each run:

| File | Layout |
|---|---|
| `liberty-config.tar.gz` | Both. |
| `pg-data.tar.gz`, `pgadmin-data.tar.gz`, `portainer-data.tar.gz` | Full / Swarm only. |
| `.env.snapshot` *(mode 0600)* | Carries the master key + every other secret. |
| `docker-compose.*.yml` | The compose file(s) in this directory at backup time. |

Restore walk-through: [Docker → Restore one volume](./docker.md#backups).

---

## 10 — Postgres tuning for production

The bundled Postgres in `docker-compose.full.yml` ships with two settings that trade durability for throughput. Both are fine for the typical ETL / app-server workload; flip them for strict-durability use cases.

| Setting | Ships as | Tradeoff | Flip to |
|---|---|---|---|
| `wal_level` | `minimal` | Disables physical replication, PITR, logical decoding. Fine for single-instance + nightly `backup.sh`. | `replica` for hot standby / PITR. |
| `synchronous_commit` | `off` | A hard crash can lose up to ~1 s of committed writes. | `on` for financial / audit workloads. |
| `max_wal_senders` | `0` | No replication slots. | `≥ 1` if you switch `wal_level=replica`. |

Tuning lives in the `postgres` service `command:` block in `docker-compose.full.yml` — inline comments call out each setting. Edit there, then `docker compose -f docker-compose.full.yml up -d pg` (or `./deploy-swarm.sh`).

RAM-based sizing for `shared_buffers` / `work_mem`: see [Docker → Postgres tuning](./docker.md#full).

---

## 11 — Comment out the Postgres host port

`docker-compose.full.yml` exposes Postgres on the host:

```yaml title="docker-compose.full.yml (default)"
pg:
  ports:
    - "5432:5432"
```

Useful for connecting DBeaver from your laptop while bootstrapping the install. A production smell once the install is live — you've widened the attack surface to anyone who can reach the host on port 5432. Comment the block out:

```yaml title="docker-compose.full.yml (production)"
pg:
  # ports:
  #   - "5432:5432"
```

`docker compose -f docker-compose.full.yml up -d pg` (or `./deploy-swarm.sh`) drops the host port. pgAdmin still reaches Postgres over the internal `liberty-net` network — nothing user-facing changes.

---

## 12 — Multi-replica caveat

`liberty-next` defaults to `replicas: 1` in `docker-compose.swarm.yml`. **Don't bump it yet.**

| Concern | Detail |
|---|---|
| **In-process Socket.IO state** | Live dashboards, the AI chat, and the job-status stream all push over Socket.IO. Two replicas without a shared backplane = clients sticky-routed to replica A miss events emitted from replica B. |
| **No Redis adapter built in (yet).** | The fix is a Redis pub/sub adapter for Socket.IO. Not yet wired. Track the roadmap. |
| **Sticky cookies help but aren't a substitute.** | Traefik can set a `liberty_sticky` cookie to keep one browser on one replica. That hides the symptom for individual users but doesn't fix cross-replica fan-out (a job triggered on A doesn't notify users sticky-routed to B). |

Scale `liberty-next` once Redis is wired in. Until then, vertical scale (give the single replica more CPU / RAM) is the supported path. Stateful services (`pg`, `pgadmin`, `portainer`) stay at `replicas: 1` regardless — none have built-in replication.

---

## 13 — Docker socket exposure

Two services in the bundled stack mount the host Docker socket:

| Service | Why | Risk |
|---|---|---|
| **Traefik** *(Compose: docker provider)* | Reads container labels to wire routes. Read-only mount. | A compromised Traefik can enumerate every container — but cannot start / stop / pull. |
| **Portainer** | Full Docker UI — start, stop, pull, exec, inspect. Read-write mount. | A compromised Portainer = root on the Docker host. |

Both are privileged surfaces. Two hardening moves:

1. **Restrict admin access** to both. Traefik dashboard behind BasicAuth (already wired). Portainer behind a strong password + 2FA (Portainer Settings → Authentication).
2. **Remove the portainer service entirely** if your ops standard doesn't allow `/var/run/docker.sock` in a long-lived container. Delete the `portainer` service block from `docker-compose.full.yml` (or `docker-compose.swarm.yml`), redeploy. You lose the GUI; `docker compose` / `docker service` cover the same operations from the shell.

For Swarm, Traefik uses the swarm provider (`--providers.swarm`) which only managers expose — workers don't carry the socket. Compose has no equivalent constraint.

---

## 14 — Log routing

| Source | Where | How to ship |
|---|---|---|
| **liberty-next** | stdout. | `docker compose logs -f liberty-next` / `docker service logs -f liberty_liberty-next` / journald (via the runtime's log driver). |
| **Postgres** | `pg-logs` volume (rotated). | Mount-export, or switch the `pg` service to a logging driver that ships to your aggregator. |
| **Traefik** | stdout. | Same as liberty-next. |
| **pgAdmin / Portainer** | stdout. | Same. |

For Loki / ELK / Datadog / Splunk aggregation: configure the **container runtime's logging driver** (Docker has `loki`, `fluentd`, `journald`, `gelf`, `awslogs`, etc.), not anything inside the framework. The framework writes one JSON-friendly line per event to stdout and lets the runtime own the transport.

```yaml title="docker-compose.full.yml (logging override example)"
services:
  liberty-next:
    logging:
      driver: loki
      options:
        loki-url: "http://loki.example.com:3100/loki/api/v1/push"
        loki-batch-size: "400"
```

For Swarm, the same `logging:` block applies — Swarm honours it per-service.

---

## 15 — Healthchecks

liberty-next ships a built-in healthcheck wired in both compose files:

```yaml title="docker-compose.full.yml (excerpt)"
healthcheck:
  test: ["CMD", "curl", "-fsS", "http://127.0.0.1:8000/info"]
  interval: 30s
  timeout: 5s
  start_period: 40s
  retries: 3
```

| Field | Value | Why |
|---|---|---|
| `test` | `GET /info` | Lightweight — no DB call, no auth. |
| `interval` | `30s` | Standard cadence. |
| `timeout` | `5s` | Generous — `/info` returns in milliseconds. |
| `start_period` | `40s` | Covers the first-boot `init-db` run. |
| `retries` | `3` | One transient blip doesn't flip the status. |

No need to add a healthcheck — the bundled one is correct. `docker compose ps` and `docker service ps` both surface the `healthy` / `unhealthy` state Traefik uses to gate traffic.

---

## 16 — Monitoring

Beyond the container healthcheck, the framework exposes deeper monitoring endpoints — useful for external load balancers, Kubernetes probes, and uptime-checker services.

| Endpoint | Use |
|---|---|
| `GET /info` | Liveness — container healthcheck and LB liveness probe. |
| `GET /api/health` | Readiness — exercises DB connectivity. Use for LB readiness probe. |
| `GET /api/license` | License-verified probe — confirms the license JWT is still accepted. |

Full surface: [Monitoring → Health endpoints](../monitoring/health-endpoints.md).

---

## Hardening checklist

Walk this list before exposing the install to users.

| # | Check | Done? |
|---|---|---|
| 1 | Layout chosen — Full or Swarm. Not Light. | |
| 2 | `.env` reviewed; no literal `$` in passwords. | |
| 3 | `LIBERTY_IMAGE_TAG` pinned to a specific version. | |
| 4 | TLS wired via Traefik + Let's Encrypt. HTTP → HTTPS redirect on. | |
| 5 | Traefik dashboard password changed (bcrypt). | |
| 5 | pgAdmin email + password changed. | |
| 5 | liberty-next `admin` password changed via `liberty-admin set-password`. | |
| 6 | OIDC wired (if SSO is in scope). Local `admin` still works as fallback. | |
| 7 | `LIBERTY_JWT_SECRET` is the install-generated value (don't rotate without reason). | |
| 8 | `LIBERTY_MASTER_KEY` backed up out-of-band; documented in the runbook. | |
| 9 | `backup.sh` wired into cron, destination off-host, `--keep` set. | |
| 10 | Postgres `wal_level` / `synchronous_commit` reviewed against the workload. | |
| 11 | Postgres `ports: 5432:5432` commented out. | |
| 12 | `liberty-next` left at `replicas: 1` (until Redis backplane lands). | |
| 13 | Portainer admin account hardened (or service removed). | |
| 14 | Log driver configured for aggregation (if applicable). | |
| 15 | Container healthcheck reports `healthy`. | |
| 16 | External monitor (Pingdom / UptimeRobot / k8s probe) points at `/api/health`. | |

---

## What's next

- [Docker](./docker.md) — the Full and Swarm layouts this page hardens.
- [Traefik](./traefik.md) — deep TLS walk-through, DNS-01, multi-app routing.
- [Upgrading](./upgrading.md) — the `pull && up -d` upgrade procedure.
- [Monitoring → Health endpoints](../monitoring/health-endpoints.md) — LB / Kubernetes probe surface.
- [Deploy prebuilt apps](./deploy-prebuilt-apps.md) — NomaUBL / Nomasx-1 / Nomajde on top of the hardened stack.
