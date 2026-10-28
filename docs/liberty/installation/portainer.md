---
title: Bundled visual tools
description: "How to use the Portainer and pgAdmin instances that ship with the Liberty Full Docker layout — first-run setup, common operator tasks, Docker socket security trade-offs, Swarm specifics."
keywords: [Liberty Framework, Portainer, pgAdmin, bundled, Docker socket, full layout, Swarm, Traefik, visual ops, operator]
---

# Bundled visual tools — Portainer & pgAdmin

The [Full Docker layout](./docker.md#full) and [Swarm layout](./docker.md#swarm) ship with two visual ops tools pre-wired behind Traefik:

| Tool | Path | What it's for |
|---|---|---|
| [Portainer CE](https://www.portainer.io) | `/portainer` | Container-level UI — see every service, tail logs, restart, exec a shell, browse volumes. |
| [pgAdmin](https://www.pgadmin.org) | `/pgadmin` | Postgres GUI — browse schemas, run SQL, inspect query plans, manage roles. |

No separate install, no extra compose file. Bring up the Full or Swarm stack and both tools are live on the same host name as Liberty itself.

:::info[Not in the Light layout]
The Light layout is a single container with a SQLite DB — no Postgres, no Traefik. Portainer and pgAdmin only ship with the Full and Swarm layouts. If you started on Light and want these tools, move to [Full](./docker.md#full).
:::

---

## At a glance

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="30" width="760" height="260" rx="14" fill="url(#dgo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="110" width="160" height="60" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="320.0" y="137.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Portainer</text>
  <text x="320.0" y="152.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">stack editor</text>
  <rect x="440" y="50" width="500" height="220" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="456" y="72" fill="#4a9eff" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Stack liberty</text>
  <rect x="460" y="100" width="140" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="530.0" y="125.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-next</text>
  <text x="530.0" y="140.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">:8000</text>
  <rect x="620" y="100" width="140" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="690.0" y="125.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">postgres</text>
  <text x="690.0" y="140.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">full only</text>
  <rect x="780" y="100" width="140" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="850.0" y="125.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">traefik</text>
  <text x="850.0" y="140.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">option</text>
  <rect x="460" y="190" width="300" height="50" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="610.0" y="212.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Environment variables</text>
  <text x="610.0" y="227.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">LIBERTY_MASTER_KEY…</text>
  <line x1="400" y1="140" x2="460" y2="128" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgo-flow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Same images</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as the release folder</text>
  <line x1="210" y1="217.0" x2="530" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Variables</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">set in the stack</text>
  <line x1="1000" y1="217.0" x2="760" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
</svg>

---

## What you get out of the box

Open the host in a browser and Traefik routes the three paths:

| Path | Behind it | First-run state |
|---|---|---|
| `/` *(catchall)* | liberty-next | Sign in with `admin` + `LIBERTY_ADMIN_PASSWORD` from `.env`. |
| `/portainer` | Portainer CE | Empty — first browser visit becomes the admin-setup wizard. |
| `/pgadmin` | pgAdmin 4 | Sign in with `admin@liberty.fr` (`PGADMIN_EMAIL`) + `PGADMIN_PASSWORD` from `.env`. |

`./liberty install full` generates random secrets for both passwords on first run and stores them in `.env` mode `0600`. Read them once with `grep -E '^(PGADMIN_PASSWORD|LIBERTY_ADMIN_PASSWORD)=' .env`.

---

## Portainer — first run

1. Open `http://<host>/portainer` (or `https://` once [TLS is wired](./traefik.md)).
2. The page is the **initial admin-setup wizard** — Portainer treats the first visitor as the bootstrap operator. Create the admin account: username (often `admin`) + a 12+ character password.
3. The local Docker endpoint is auto-detected (the compose mounts the socket — see below). No need to add an environment.
4. Skip the licensing prompt — Community Edition is free for self-hosted use.

After the wizard, the dashboard lists every container running on the host. The Liberty stack shows up as the `liberty` Compose project (or `liberty` Swarm stack).

:::warning[The first visit IS the admin setup]
If the URL sits exposed before someone you trust visits it, the first stranger to reach it claims the admin account. Open the URL yourself right after `./liberty install full` finishes, or block public access at the firewall until you've completed the wizard.
:::

---

## The Docker socket mount — what makes Portainer work

Portainer needs to talk to the Docker daemon to inspect and manage containers. The bundled service does this with a bind-mount of the host socket:

```yaml title="docker-compose.full.yml (portainer service)"
portainer:
  image: portainer/portainer-ce:latest
  restart: unless-stopped
  command: -H unix:///var/run/docker.sock
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock   # privileged surface
    - portainer-data:/data
  labels:
    - "traefik.enable=true"
    - "traefik.http.routers.portainer.rule=PathPrefix(`/portainer`)"
    - "traefik.http.routers.portainer.priority=100"
    - "traefik.http.services.portainer.loadbalancer.server.port=9000"
    - "traefik.http.middlewares.portainer-strip.stripprefix.prefixes=/portainer"
    - "traefik.http.routers.portainer.middlewares=portainer-strip"
```

The Docker socket is a **privileged surface**: anything that can read it has root-equivalent control over every container on the host, including the ability to read environment variables (master key, JWT secret, Postgres password) from a running Liberty container.

| Implication | Mitigation |
|---|---|
| A Portainer admin = root over every container on the host. | Pick a strong admin password during the wizard; rotate it via *My account → Change password*. |
| Anyone who can reach `/portainer` over the network can attempt to claim it. | Restrict the path at the edge (firewall, [Traefik basic-auth middleware](./traefik.md), IP allow-list) until TLS + a real admin exists. |
| You may not want this surface in the stack at all. | Delete the `portainer:` service block plus the `portainer-data:` volume from `docker-compose.full.yml` and `docker compose up -d`. The rest of the stack is unaffected. |

The `portainer-data` named volume holds Portainer's own DB — admin account, settings, endpoint definitions. `backup.sh` snapshots it.

---

## What you can do from the bundled Portainer

Click **Containers** in the left nav. The Full layout shows five services:

| Service | At-a-glance |
|---|---|
| `liberty-next` | Status, ports, restart count, image tag. |
| `pg` | Postgres health, volume size, port. |
| `pgadmin` | Status — and yes, you can manage pgAdmin from Portainer (or vice versa). |
| `portainer` | Itself — meta-management. |
| `traefik` | Edge router status + the live dashboard link. |

Common operations:

| Task | Where in Portainer | CLI equivalent |
|---|---|---|
| Tail logs from any service | Containers → *service* → *Logs* (auto-refresh, filter by level) | `docker compose logs -f <service>` |
| Restart a service | Containers → *service* → *Restart* | `docker compose restart <service>` |
| Recreate a service (pull new image first) | Containers → *service* → *Recreate* → tick *Pull latest image* | `docker compose pull <service> && docker compose up -d <service>` |
| Open a shell inside a container | Containers → *service* → *Console* → *Connect* | `docker compose exec <service> bash` |
| Inspect environment variables (read-only) | Containers → *service* → *Inspect* tab → `Config.Env` | `docker inspect <container>` |
| Check resource usage (CPU / RAM) | Containers → *service* → *Stats* | `docker stats` |
| Browse / inspect a volume | Volumes → *volume* → *Browse* | `docker run --rm -it -v <vol>:/data alpine sh` |

Environment variables shown in Portainer are **read-only** — changing them needs an edit to `.env` followed by a recreate. The values displayed include secrets (master key, JWT secret); treat the Portainer admin login accordingly.

---

## pgAdmin — first run

Same single URL story: open `http://<host>/pgadmin` and sign in with:

| Field | Value |
|---|---|
| Email | `admin@liberty.fr` (the default user provisioned by the compose) |
| Password | `PGADMIN_PASSWORD` from `.env` |

The compose pre-wires two things that make the path-prefixed setup work:

```yaml title="docker-compose.full.yml (pgadmin service excerpt)"
pgadmin:
  image: dpage/pgadmin4:9.18
  environment:
    PGADMIN_DEFAULT_EMAIL: "${PGADMIN_EMAIL:-admin@liberty.fr}"
    PGADMIN_DEFAULT_PASSWORD: "${PGADMIN_PASSWORD:?PGADMIN_PASSWORD is required}"
    SCRIPT_NAME: /pgadmin            # tells pgAdmin its links live under /pgadmin
  volumes:
    - pgadmin-data:/var/lib/pgadmin
  labels:
    - "traefik.enable=true"
    - "traefik.http.routers.pgadmin.rule=PathPrefix(`/pgadmin`)"
    - "traefik.http.routers.pgadmin.priority=100"
    - "traefik.http.services.pgadmin.loadbalancer.server.port=80"
```

`SCRIPT_NAME=/pgadmin` is what stops pgAdmin from generating absolute links to `/login`, `/static/...` (which would 404 because Traefik routes `/pgadmin/*` here, not `/`). Don't change it without also updating the Traefik router rule.

The `pgadmin-data` volume holds the saved server registrations, query history and preferences. `backup.sh` snapshots it.

### Register the bundled Postgres

First login lands you on an empty dashboard. Right-click **Servers → Register → Server…**:

| Field | Value |
|---|---|
| Name (General tab) | `liberty` (anything you like) |
| Host (Connection tab) | `pg` (the compose service name — the two containers share the default network) |
| Port | `5432` |
| Username | `postgres` (or whatever `POSTGRES_USER` resolves to in `.env`) |
| Password | `POSTGRES_PASSWORD` from `.env` (tick *Save password*) |

The Liberty schema lives in the `liberty` database by default. From there it's the usual pgAdmin tree: schemas → tables → query tool.

---

## Common operator tasks via the bundled tools

| I need to… | Tool | Path |
|---|---|---|
| Tail liberty-next logs while reproducing a bug | Portainer | Containers → `liberty-next` → *Logs* → *Auto-refresh* |
| Restart Liberty after editing `.env` | Portainer | Containers → `liberty-next` → *Recreate* (so the new env is read) |
| Recreate Liberty pulling the latest image | Portainer | Containers → `liberty-next` → *Recreate* → tick *Pull latest image* |
| See how big the Postgres volume has grown | Portainer | Volumes → `pg-data` → size column |
| Run an ad-hoc `SELECT` on the Liberty DB | pgAdmin | Servers → liberty → Databases → liberty → *Query Tool* |
| Check that a migration created its table | pgAdmin | Servers → liberty → Databases → liberty → Schemas → public → Tables |
| Watch live Postgres sessions | pgAdmin | Servers → liberty → *Dashboard* → Server activity |

For everything else (admin password resets, license inspection, `liberty-admin` commands) the table in [Operations → Common tasks](./operations.md#tasks) still applies — those are CLI workflows.

---

## Swarm specifics

In the [Swarm layout](./docker.md#swarm), both Portainer and pgAdmin are deployed the same way, with two extra constraints:

| Constraint | Why |
|---|---|
| Portainer pinned to `node.role == manager` | It needs `/var/run/docker.sock`, which only managers expose. The compose sets this for you. |
| pgAdmin pinned to a manager (or wherever `pg` runs) | The `pgadmin-data` volume must reattach in place — same logic as `pg`. |

```yaml title="docker-compose.swarm.yml (portainer deploy block)"
portainer:
  image: portainer/portainer-ce:latest
  command: -H unix:///var/run/docker.sock
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
    - portainer-data:/data
  deploy:
    replicas: 1
    placement:
      constraints:
        - node.role == manager
```

Don't try to scale Portainer beyond `replicas: 1` — it stores its admin DB on `portainer-data` and has no built-in clustering. Same for pgAdmin.

---

## Common pitfalls

| Pitfall | What actually happens | Avoid by |
|---|---|---|
| **Recreating `liberty-next` to reload a TOML edit.** | Portainer's *Recreate* kills and restarts the container — and TOML changes pushed via the Liberty Next pages are already live. Useless restart, ~10 s of downtime. | TOMLs reload on save. The framework-wide button is `POST /admin/reload` (or *Reload config (at the top of any Liberty Next editor page)*). Only recreate to apply a new image tag or a `.env` change. |
| **Restarting `pg` without first stopping `liberty-next`.** | Liberty's pool sees half its connections drop mid-query; the next requests fail until the pool recovers. | Stop `liberty-next` first (Portainer → *Stop*), restart `pg`, start `liberty-next`. Or restart the whole stack in order. |
| **Editing env vars in Portainer.** | Portainer's env tab is read-only — there's no *Save* button. Operators sometimes copy them out, edit, paste back, and nothing happens. | Edit `.env` on the host, then *Recreate* the container so the new values are read at startup. |
| **Exposing `/portainer` to the public internet before completing the wizard.** | The first stranger to load the page claims the admin account. | Run the wizard immediately after `./liberty install full`. Or firewall the path until you have. |
| **Treating the Docker socket as harmless.** | It isn't — Portainer + socket = root on every container, including Liberty's env (master key, JWT secret, DB password). | Strong Portainer admin password; consider deleting the service entirely if no one needs it. |

---

## When to remove the bundled tools

The bundled services are convenient, not mandatory. Remove them if:

- **Compliance forbids the Docker socket inside the application stack.** Delete the `portainer:` block + `portainer-data:` volume; manage Docker from a separate, locked-down host.
- **You have a central pgAdmin / DBeaver / DataGrip already.** Delete the `pgadmin:` block + `pgadmin-data:` volume; connect your central tool through an SSH tunnel to `127.0.0.1:5432` on the host (PostgreSQL is published on the loopback only).
- **You're tight on RAM (≤ 2 GB).** Each tool adds ~50–150 MB resident — small but not zero.

After removing either service:

```bash
docker compose up -d                                   # COMPOSE_FILE picks the right files; reconciles the stack
docker volume rm <removed-volume>                       # only if you're sure
```

The rest of the Liberty stack (liberty-next, pg, traefik) is unaffected.

---

## What's next

- [Docker → Full](./docker.md#full) — the full layout overview, including the volume table.
- [Docker → Swarm](./docker.md#swarm) — Swarm-specific placement + deploy notes.
- [Traefik](./traefik.md) — add TLS in front of `/portainer` and `/pgadmin` (same `Host` rule as liberty-next).
- [Production](./production.md) — hardening checklist (admin password rotation, source-IP allow-lists, off-host monitoring).
