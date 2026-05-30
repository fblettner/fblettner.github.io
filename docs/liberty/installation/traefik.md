---
title: Traefik (optional)
description: "Front Liberty Framework with Traefik — reverse proxy, friendly hostname, automatic Let's Encrypt TLS via DNS challenge or HTTP challenge. Full Docker Compose snippet for the Liberty stack."
keywords: [Liberty Framework, Traefik, reverse proxy, TLS, HTTPS, Let's Encrypt, ACME, Docker, hostname]
---

# Traefik (optional)

[Traefik](https://traefik.io) is a reverse proxy that fits Docker stacks naturally — it discovers backends from container labels, terminates TLS for them, and renews Let's Encrypt certificates automatically. For a Liberty install behind a friendly hostname (`liberty.example.com`) with HTTPS, Traefik is the path of least friction.

This page walks the canonical Docker Compose setup — Traefik + Liberty + PostgreSQL on one host with automatic TLS. nginx and Caddy are valid alternatives; the pattern's the same, only the config syntax differs.

---

## What Traefik adds

| Feature | Why it matters |
|---|---|
| **Reverse proxy** | The framework is hidden behind a single public hostname (`liberty.example.com`) instead of `host:8000`. |
| **TLS termination** | HTTPS for browsers; the framework itself stays on HTTP behind Traefik. One cert to manage instead of one per service. |
| **Let's Encrypt automation** | Traefik registers + renews certs without operator intervention. |
| **Multi-host routing** | One Traefik handles multiple apps on the same Docker host — `liberty.example.com` for the framework, `portainer.example.com` for Portainer, etc. |
| **Auto-discovery** | New containers with the right labels are picked up immediately — no restart needed when you add Portainer or a second Liberty replica. |

If you're behind a corporate reverse proxy already (nginx, F5, AWS ALB), you don't need Traefik — that upstream device terminates TLS and routes. Traefik is for self-managed installs.

---

## Prerequisites

| What | Why |
|---|---|
| A **public DNS A record** pointing `liberty.example.com` at your Docker host's public IP. | Let's Encrypt's HTTP-01 challenge needs to reach your host on port 80. |
| **Port 80 + port 443 open** on the host firewall + the cloud provider's security group. | Same. |
| An **email address** for Let's Encrypt notifications (cert expiry warnings). | Required by the ACME protocol. |

For private installs without a public DNS record, use the **DNS-01 challenge** (Traefik supports many providers — Cloudflare, AWS Route 53, Gandi, etc.) instead of HTTP-01. The compose snippet below uses HTTP-01 — swap the resolver config for the DNS-01 equivalent of your DNS provider.

---

## Step 1 — Add Traefik to `docker-compose.yml`

Starting from the Liberty Docker stack:

```yaml
# /opt/liberty/docker-compose.yml
services:

  traefik:
    image: traefik:v3
    container_name: traefik
    restart: unless-stopped
    command:
      - --providers.docker=true
      - --providers.docker.exposedbydefault=false
      - --entrypoints.web.address=:80
      - --entrypoints.websecure.address=:443
      # redirect HTTP → HTTPS at the entrypoint
      - --entrypoints.web.http.redirections.entryPoint.to=websecure
      - --entrypoints.web.http.redirections.entryPoint.scheme=https
      - --entrypoints.web.http.redirections.entryPoint.permanent=true
      # Let's Encrypt — HTTP-01 challenge
      - --certificatesresolvers.le.acme.email=${ACME_EMAIL}
      - --certificatesresolvers.le.acme.storage=/letsencrypt/acme.json
      - --certificatesresolvers.le.acme.httpchallenge=true
      - --certificatesresolvers.le.acme.httpchallenge.entrypoint=web
      # Dashboard (disable in prod or protect with auth)
      # - --api.dashboard=true
      # - --api.insecure=true
    ports:
      - "80:80"
      - "443:443"
      # - "8080:8080"   # the Traefik dashboard, only if --api.insecure=true above
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - traefik-letsencrypt:/letsencrypt

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
      LIBERTY_JWT_SECRET: ${LIBERTY_JWT_SECRET}
      LIBERTY_LICENSE_KEY: ${LIBERTY_LICENSE_KEY:-}
      DATABASE_URL: postgresql+asyncpg://liberty:${POSTGRES_PASSWORD}@postgres:5432/liberty
    volumes:
      - /opt/liberty/apps:/apps:ro
      - liberty-logs:/var/log/liberty
    # No more host-side port mapping — Traefik fronts it
    # ports:
    #   - "8000:8000"
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.liberty.rule=Host(`liberty.example.com`)"
      - "traefik.http.routers.liberty.entrypoints=websecure"
      - "traefik.http.routers.liberty.tls.certresolver=le"
      - "traefik.http.services.liberty.loadbalancer.server.port=8000"

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

volumes:
  postgres-data:
  liberty-logs:
  traefik-letsencrypt:
```

Notice four things:

| Change | Why |
|---|---|
| **`ports: 8000:8000` removed** on the `liberty` service. | Traefik routes traffic to the container's internal port 8000 over the Docker network — the host port doesn't need to be exposed. |
| **`labels:`** on the `liberty` service. | Traefik reads these labels to wire the route — the hostname rule, the entrypoint (`websecure` = port 443), the TLS resolver, the target port inside the container. |
| **HTTP → HTTPS redirect** in the Traefik `command`. | Requests to `http://liberty.example.com` redirect to `https://liberty.example.com` automatically. |
| **`/var/run/docker.sock:ro`** mounted into Traefik. | Read-only — Traefik only inspects container labels, never controls Docker. |

---

## Step 2 — Add the Traefik vars to `.env`

```bash
# /opt/liberty/.env
ACME_EMAIL=ops@example.com         # for Let's Encrypt cert expiry notices
POSTGRES_PASSWORD=...              # (unchanged from the basic Docker setup)
LIBERTY_MASTER_KEY=...
LIBERTY_JWT_SECRET=...
LIBERTY_LICENSE_KEY=
```

---

## Step 3 — Bring it up

```bash
cd /opt/liberty
docker compose up -d
```

What happens, in order:

1. Postgres + Liberty containers start as before.
2. Traefik starts and reads the Docker socket → finds the `liberty` container with the routing labels.
3. Traefik attempts the HTTP-01 challenge for `liberty.example.com`:
   - Let's Encrypt sends a request to `http://liberty.example.com/.well-known/acme-challenge/<token>`.
   - Traefik intercepts that path and responds with the expected token.
   - Let's Encrypt issues the cert.
4. The cert is stored in `traefik-letsencrypt:/letsencrypt/acme.json`.
5. `https://liberty.example.com` now serves the Liberty UI behind a valid TLS cert.

Verify:

```bash
curl -I https://liberty.example.com
# HTTP/2 200
# ... server: liberty ...
```

If Let's Encrypt issuance fails:

```bash
docker compose logs traefik | grep -E "(acme|error)"
```

Common causes are below.

---

## Common Traefik issues

| Symptom | Cause | Fix |
|---|---|---|
| Cert issuance hangs / fails. | DNS A record doesn't point at the host. | Verify with `dig liberty.example.com +short`. |
| `connection refused` from Let's Encrypt. | Port 80 is closed (firewall / cloud security group). | Open inbound 80/tcp + 443/tcp. |
| `too many failed authorizations`. | You're hitting the Let's Encrypt rate limit while debugging. | Switch to the **staging** endpoint until working: add `--certificatesresolvers.le.acme.caServer=https://acme-staging-v02.api.letsencrypt.org/directory` to the Traefik command. |
| `404 not found` from `https://liberty.example.com`. | Liberty container's labels are missing or the hostname doesn't match. | `docker inspect liberty | grep traefik` to verify labels are present. |
| Browser shows the cert but with a warning. | The cert is from Let's Encrypt **staging** (not trusted). | Remove the `caServer=...staging...` line and re-issue. |

---

## DNS-01 challenge (private installs)

For installs where port 80 isn't reachable from the public internet (corporate networks, air-gapped hosts), use **DNS-01** instead. Liberty's hostname can still be on a public DNS zone you control; Traefik proves ownership by creating a TXT record at the DNS provider.

Replace the `httpchallenge` lines with:

```yaml
- --certificatesresolvers.le.acme.dnschallenge=true
- --certificatesresolvers.le.acme.dnschallenge.provider=cloudflare
```

And add the provider credentials as env vars (provider-specific — Cloudflare uses `CF_API_EMAIL` + `CF_API_KEY`, Route 53 uses AWS creds, etc.). Traefik supports **dozens** of DNS providers — see the [Traefik ACME providers list](https://doc.traefik.io/traefik/https/acme/#providers).

The DNS challenge also unlocks **wildcard certs** (`*.example.com`) when you have multiple apps to host. HTTP-01 doesn't support wildcards.

---

## Multi-app routing

To host Portainer (or any other service) on the same Docker host behind Traefik, add labels to that service:

```yaml
portainer:
  image: portainer/portainer-ce:latest
  # ... (same as before, but remove the host-side port mapping)
  # ports:
  #   - "9443:9443"
  labels:
    - "traefik.enable=true"
    - "traefik.http.routers.portainer.rule=Host(`portainer.example.com`)"
    - "traefik.http.routers.portainer.entrypoints=websecure"
    - "traefik.http.routers.portainer.tls.certresolver=le"
    # Portainer's HTTPS port — we route HTTP from Traefik over the internal network
    - "traefik.http.services.portainer.loadbalancer.server.port=9000"
    # ... (note: port 9000 is the HTTP UI; 9443 is the self-signed HTTPS we now bypass)
```

Add a second DNS A record for `portainer.example.com`. On the next compose up, Traefik issues a second cert for that hostname and routes accordingly.

---

## The Traefik dashboard (advanced)

The dashboard at `:8080/dashboard/` shows every router, service and certificate. **Don't enable `--api.insecure=true` in production** — anyone reaching the port sees your routing config. Two safe options:

| Option | How |
|---|---|
| **Disable the dashboard entirely** | Default; no extra flags. |
| **Expose the dashboard behind Traefik itself, password-protected** | Use the `api@internal` service + a BasicAuth middleware. Walk-through in the Traefik docs. |

Most installs don't need the dashboard — Portainer surfaces what you'd inspect there (running services, restart status), and the Traefik logs cover the diagnostic cases.

---

## When NOT to use Traefik

| Pattern | Better path |
|---|---|
| Already running nginx or Caddy as the entry point. | Add a Liberty location block to your existing config; no need to introduce Traefik. |
| Behind a cloud LB (AWS ALB, GCP LB) that terminates TLS. | The cloud LB handles the same job. Use Traefik only if you need its label-driven config. |
| Single-host install with no need for TLS (intranet). | Skip the reverse proxy entirely — `host:8000` works. |
| Multiple Liberty replicas behind a hardware LB. | The LB handles routing; Liberty stays internal. |

Traefik shines on **self-managed Docker hosts with multiple services and Let's Encrypt**. For other shapes, simpler is better.

---

## What's next

- [Portainer](./portainer.md) — pair Traefik with Portainer for a fully UI-managed Docker setup.
- [Production](./production.md) — multi-replica patterns, backup strategy, log routing.
- [Docker](./docker.md) — the underlying stack Traefik fronts.
