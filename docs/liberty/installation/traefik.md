---
title: Traefik
description: "The Traefik reverse proxy is pre-wired into the Full Docker and Swarm layouts — basic-auth-gated dashboard at /traefik, security-headers middleware, sticky cookies for Socket.IO. Wire Let's Encrypt by uncommenting four lines + setting two env vars. The dynamic config file reloads in seconds without a restart."
keywords: [Liberty Framework, Traefik, reverse proxy, TLS, Let's Encrypt, dashboard, basic-auth, dynamic config, security headers, sticky cookie, Socket.IO, --providers.swarm]
---

# Traefik

Traefik is **bundled** in the Full Docker layout (`docker-compose.full.yml`) and the Swarm layout (`docker-compose.swarm.yml`). It runs as the `traefik` service, terminates HTTP on `:80`, routes by path prefix and exposes a dashboard at `/traefik`. There's nothing to install separately — `./install.sh full` or `./deploy-swarm.sh` bring it up alongside the other services.

This page covers what's pre-wired, how to change the dashboard password, how to add TLS (Let's Encrypt) and how Swarm differs from Compose.

For the layout walk-through, read [Docker → Full](./docker.md#full) and [Docker → Swarm](./docker.md#swarm) first.

---

## What's pre-wired

### Routing priorities

The full layout uses path-prefix routing on a single Traefik HTTP entrypoint (`:80`). Higher priority wins; the catchall liberty-next router runs last:

| Router | Rule | Priority | Service |
|---|---|---|---|
| `traefik-dashboard` | `` PathPrefix(`/traefik`) `` + a strict allow-list of `/api/*` GETs | **1000** | Traefik's internal `api@internal` service. |
| `pgadmin` | `` PathPrefix(`/pgadmin`) `` | **100** | pgAdmin container on `:80`. |
| `portainer` | `` PathPrefix(`/portainer`) `` (stripped to `/`) | **100** | Portainer container on `:9000`. |
| `liberty-next` | `` PathPrefix(`/`) `` *(catchall)* | **1** | liberty-next container on `:8000`. |

Liberty-next stays the catchall — every request that doesn't match a more specific prefix lands there. Adding a new app behind the same Traefik just means a new router at priority `> 1`.

### Sticky cookies for Socket.IO

Liberty-next keeps Socket.IO state in-process. When you scale it to more than one replica, the sticky cookie pins each client to the replica it first hit:

```yaml title="docker-compose.full.yml (excerpt)"
traefik.http.services.liberty-next.loadbalancer.sticky.cookie.name: "liberty_sticky"
```

The cookie is already on by default — harmless at `replicas: 1`, essential at `> 1`. Note: stickiness keeps a given client pinned, but it does NOT share Socket.IO state across replicas. Live dashboards / chat streams emitted by one replica won't reach clients pinned to another. For real multi-replica, a Redis adapter is needed — not yet built in.

### The dynamic config

Traefik reads two kinds of configuration:

| Source | What |
|---|---|
| **Container labels** | Per-service routes and middlewares, declared inline in the compose file. |
| **`traefik/dynamic/*.yml`** | Shared middlewares whose values contain `$` (basic-auth bcrypt hashes — Compose substitution would eat them) and middlewares meant to be reusable across routers. |

Two flags wire it up:

```yaml title="docker-compose.full.yml (Traefik command)"
- --providers.file.directory=/etc/traefik/dynamic
- --providers.file.watch=true
```

`file.watch=true` means **edits reload in seconds, no container restart needed**. Drop a new middleware into `traefik/dynamic/dynamic.yml` and it's live.

The bundled dynamic file ships three middlewares:

| Middleware | What it does | Use |
|---|---|---|
| `traefik-auth` | Basic-auth gate (default `admin / admin` — bcrypt hash). | Attached to the dashboard router via `traefik-auth@file`. |
| `security-headers` | `frameDeny`, `contentTypeNosniff`, `browserXssFilter`, `referrerPolicy: no-referrer-when-downgrade`. STS lines commented out (uncomment when serving HTTPS). | Attach to any router with `<router>.middlewares: "security-headers@file"`. |
| `redirect-to-https` | 301 redirect HTTP → HTTPS. | Attach to every HTTP-entrypoint router once the websecure entrypoint is enabled. |

---

## Change the dashboard password

The default `admin / admin` works for the first 30 seconds. Then change it.

```bash
docker run --rm httpd:alpine htpasswd -nbB admin "<your-password>"
# admin:$2y$05$abc...
```

Paste the one line of output into `release/traefik/dynamic/dynamic.yml` under `http.middlewares.traefik-auth.basicAuth.users`:

```yaml title="release/traefik/dynamic/dynamic.yml"
http:
  middlewares:
    traefik-auth:
      basicAuth:
        users:
          - "admin:$2y$05$<your-new-hash>"
          # Multiple users? Add one per line:
          # - "ops:$2y$05$..."
```

`file.watch=true` picks it up within seconds — no container restart. Refresh the dashboard, sign in with the new credentials.

:::info[bcrypt vs apr1]
`htpasswd -nbB` produces a bcrypt hash (`$2y$`). Traefik also accepts `apr1` (`$apr1$`) but bcrypt is the recommended modern choice — works in any env without escaping issues.
:::

---

## Wire TLS (Let's Encrypt)

The compose file ships with TLS **commented out** so the install is one-step. Adding TLS is five edits.

### 1. Point your domain at the server

DNS `A` (and / or `AAAA`) record from `liberty.example.com` to the server's public IP. Let's Encrypt's HTTP-01 / TLS-01 challenge can't issue a cert otherwise.

### 2. Set the two env vars

In `.env`:

```
LIBERTY_DOMAIN=liberty.example.com
ACME_EMAIL=ops@example.com
```

`ACME_EMAIL` receives Let's Encrypt's expiry-notice mail — use a real address you read.

### 3. Uncomment the websecure entrypoint + ACME resolver

In `docker-compose.full.yml`, under the `traefik` service's `command:`:

```yaml title="docker-compose.full.yml (Traefik command — UNCOMMENTED)"
command:
  - --api.dashboard=true
  - --providers.docker=true
  - --providers.docker.exposedbydefault=false
  - --providers.docker.network=liberty-network
  - --providers.file.directory=/etc/traefik/dynamic
  - --providers.file.watch=true
  - --entrypoints.web.address=:80
  - --entrypoints.websecure.address=:443                                # ← uncomment
  - --certificatesresolvers.le.acme.email=${ACME_EMAIL:?ACME_EMAIL required for TLS}  # ← uncomment
  - --certificatesresolvers.le.acme.storage=/etc/traefik/acme/acme.json # ← uncomment
  - --certificatesresolvers.le.acme.tlschallenge=true                    # ← uncomment
ports:
  - "${TRAEFIK_HTTP_PORT:-80}:80"
  - "443:443"                                                            # ← uncomment
```

### 4. Add `tls.certresolver` to each router

For every router that should serve HTTPS (liberty-next, pgadmin, portainer, traefik-dashboard), add three labels:

```yaml
traefik.http.routers.<name>.entrypoints: "websecure"
traefik.http.routers.<name>.tls.certresolver: "le"
traefik.http.routers.<name>.rule: "Host(`${LIBERTY_DOMAIN}`) && PathPrefix(`/<path>`)"
```

The `Host()` matcher in the rule is what tells Traefik which cert to serve (otherwise it has no idea which domain a request is for). Bind your routes to `LIBERTY_DOMAIN` once and the cert resolver does the rest.

### 5. Apply

```bash
docker compose -f docker-compose.full.yml up -d
```

On the first request to `https://liberty.example.com/`, Traefik runs the TLS-01 challenge and stores the cert in the `traefik-acme` named volume. Auto-renewal happens every 60 days, transparently.

### Force HTTP → HTTPS

Add the `redirect-to-https@file` middleware (already defined in `dynamic.yml`) to every router on the `web` entrypoint:

```yaml
traefik.http.routers.<name>.middlewares: "redirect-to-https@file"
traefik.http.routers.<name>.entrypoints: "web"
```

Browsers hitting `http://liberty.example.com/` get a `301` to `https://`.

---

## Compose vs Swarm

The two compose files differ in how Traefik discovers services:

| | Compose (`docker-compose.full.yml`) | Swarm (`docker-compose.swarm.yml`) |
|---|---|---|
| **Provider flag** | `--providers.docker=true` | `--providers.swarm=true` |
| **Network filter** | `--providers.docker.network=liberty-network` | `--providers.swarm.network=liberty-network` |
| **Endpoint** | implicit (docker.sock) | `--providers.swarm.endpoint=unix:///var/run/docker.sock` |
| **Labels location** | Top-level `labels:` block per service | `deploy.labels:` block per service (Swarm reads labels from there) |
| **Middleware suffix** | `@docker` (e.g. `traefik-strip@docker`) | `@swarm` (e.g. `traefik-strip@swarm`) |
| **File-provider middlewares** | `@file` (same on both) | `@file` (same on both) |

Both layouts:
- Mount the Docker socket read-only.
- Mount `./traefik:/etc/traefik:ro` for the dynamic config + ACME.
- Use the `traefik-acme` named volume for cert storage (survives stack tear-downs).

### Swarm caveat — Traefik must run on a manager

The Swarm provider reads the Docker API on the socket — only manager nodes expose it. The bundled compose pins Traefik via:

```yaml title="docker-compose.swarm.yml (Traefik deploy block)"
deploy:
  placement:
    constraints:
      - node.role == manager
```

Don't change this constraint unless you've also enabled the Docker API on workers (rare and not recommended).

---

## The published-port mode (Swarm)

Swarm has two port-publishing modes:

| Mode | Behaviour |
|---|---|
| **`mode: ingress`** *(default)* | Swarm's routing mesh balances traffic across every node, dropping the real client IP along the way. |
| **`mode: host`** *(bundled compose uses this)* | Each Traefik container binds the host port directly. Keeps the real client IP — essential for IP-based access logs / rate limiting. |

The trade-off: `host` mode means you can only have one Traefik container per node (port binding). With Swarm's manager-pinned Traefik at `replicas: 1`, that's fine. If you ever scale Traefik > 1, switch to `ingress` and accept the IP-rewrite.

---

## Common operations

### Reload the dynamic config

`file.watch=true` is on — just edit `traefik/dynamic/dynamic.yml` and save. Traefik picks it up in ~5 s and emits a log line. No restart.

### Reload after a static-config change

Anything in the `command:` block of the Traefik service is **static** config — needs a container restart:

```bash
docker compose -f docker-compose.full.yml up -d traefik
```

Or, in Swarm:

```bash
docker service update --force liberty_traefik
```

### View live routers and services

The dashboard at `/traefik` shows every router with its rule, entrypoint, middleware chain and the backing service. Useful when debugging "why isn't this route matching" — Traefik shows you what it sees.

### Tail Traefik logs

```bash
docker compose -f docker-compose.full.yml logs -f traefik
# or in Swarm:
docker service logs -f liberty_traefik
```

ACME issuance / renewal lands here. So do routing errors (`no available server`) when a backend service is down.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Forgot to add `` Host(`${LIBERTY_DOMAIN}`) `` to the rule after enabling TLS. | Traefik serves the default certificate (`TRAEFIK DEFAULT CERT`) and the browser shows a warning. | Bind every router's rule to the domain you got the cert for. |
| Domain doesn't resolve to the server when Traefik tries to issue. | Logs show `acme: error 400 — DNS problem` or `unauthorized`. | Verify `dig <domain>` returns the server's IP from a public resolver. |
| Port 80 / 443 not exposed (firewall, cloud LB ahead). | TLS-01 challenge fails. | Open `:80` (and `:443` once issued) at the host firewall + the cloud LB. ACME needs `:80` open even when you only serve HTTPS — challenge uses it. |
| Edit to `dynamic.yml` doesn't reload. | Old basic-auth password still works. | Confirm `--providers.file.watch=true` is set in the static command block. Check Traefik logs for parse errors in the YAML. |
| Swarm Traefik fails to start with `cannot connect to Docker socket`. | `traefik_1` reports `Cannot connect to the Docker daemon`. | Traefik is on a worker — Swarm rescheduled it. Pin to manager: `deploy.placement.constraints: [node.role == manager]`. |
| Catchall liberty-next router intercepts /pgadmin / /portainer. | Pgadmin / Portainer URLs return Liberty's SPA. | Check the router priorities — liberty-next must be priority `1`; pgadmin / portainer at `100`. Priorities live on the router labels. |
| Sticky cookie present but live dashboard events don't reach a second client. | Two browsers see different live data. | Stickiness pins a client to one replica; it doesn't share state. Either run `replicas: 1` (the default) or wire a Redis adapter for Socket.IO. |

---

## What's next

- [Docker → Full](./docker.md#full) — the full layout walkthrough.
- [Docker → Swarm](./docker.md#swarm) — the Swarm layout walkthrough.
- [Portainer](./portainer.md) — what the bundled Portainer + pgAdmin are for.
- [Production](./production.md) — the rest of the hardening checklist.
