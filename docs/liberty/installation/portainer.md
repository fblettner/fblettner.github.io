---
title: Portainer (optional)
description: "Manage the Liberty Docker stack visually — see container status, tail logs, restart services and edit the compose stack from a browser. Setup, the Liberty stack import, common operator tasks."
keywords: [Liberty Framework, Portainer, Docker, container management, web UI, stack, logs, restart]
---

# Portainer (optional)

[Portainer](https://www.portainer.io) is a web UI for Docker. If your team isn't fluent on the `docker compose` command line, Portainer gives them a browser-based view of the Liberty stack — container status, live logs, restart buttons, compose-file editing.

It's strictly optional — the Docker stack works the same way with or without it. Portainer is a quality-of-life layer for operations.

This page walks the Community Edition (free, self-hosted) setup and the typical operator tasks for the Liberty stack.

---

## When to install Portainer

| Reach for Portainer when… | Skip it when… |
|---|---|
| Your ops team manages Docker without a CLI workflow. | Everyone touching the host is comfortable with `docker compose`. |
| You want a one-glance status board for every container on the host. | The host runs only Liberty — `docker compose ps` already gives that. |
| You want browser-based log tails without SSH. | SSH + `docker compose logs -f` is fine for you. |
| You're standing up multiple Liberty installs across hosts and want one console. | Single host, single stack. |

Portainer adds **one more container** to your stack. If you're constrained on RAM (less than 1 GB free), the trade-off may not be worth it.

---

## Step 1 — Add Portainer to the stack

Append to your existing `/opt/liberty/docker-compose.yml`:

```yaml
services:

  # ... (postgres + liberty as before) ...

  portainer:
    image: portainer/portainer-ce:latest
    container_name: portainer
    restart: unless-stopped
    ports:
      - "9443:9443"        # HTTPS UI (self-signed cert)
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer-data:/data

volumes:
  postgres-data:
  liberty-logs:
  portainer-data:          # add this
```

Bring it up:

```bash
docker compose up -d portainer
```

The `/var/run/docker.sock` mount is what lets Portainer manage the host's Docker — it talks to the Docker daemon through the same socket the `docker` CLI uses. This is **privileged access** — anyone with admin on Portainer can do anything Docker can do, including reading the master key from container env vars.

| Implication | Mitigation |
|---|---|
| Portainer admin = full Docker access on the host. | Use a strong admin password; restrict Portainer's port 9443 to a trusted IP range with the host firewall. |
| The Docker socket is the attack surface. | Only mount it into Portainer (which you trust). Never into Liberty itself. |

---

## Step 2 — First-run admin setup

Open `https://<host>:9443/` in a browser. Portainer presents an initial setup wizard:

1. **Create the admin user** — username + password (12+ chars).
2. **Connect to the local Docker** — pick *"Docker Standalone"* → *"Connect"* (Portainer auto-detects the socket you mounted).
3. **Skip the licensing prompt** — Community Edition is free for self-hosted use.

After setup, the *Dashboard* shows every container on the host. The Liberty stack appears as the `liberty` Compose project.

---

## Step 3 — Explore the Liberty stack

Click **Containers** in the left nav. You'll see:

| Container | What you can do from Portainer |
|---|---|
| `liberty` | View live logs, exec into a shell, restart, see env vars (read-only), see ports. |
| `liberty-postgres` | Same — plus see the volume size. |
| `portainer` | Itself — meta-management. |

Useful tasks at a glance:

| Task | Where in Portainer |
|---|---|
| **Tail Liberty logs** | Containers → `liberty` → *Logs*. Auto-refresh + filter by level. |
| **Restart Liberty** | Containers → `liberty` → *Restart* button. (Same as `docker compose restart liberty`.) |
| **Shell into Liberty** | Containers → `liberty` → *Console* → *Connect*. Lands in `/app` with bash. |
| **Inspect env vars** | Containers → `liberty` → *Inspect* tab. Read-only — to change them, edit `.env` and recreate the container. |
| **Update Liberty to the latest image** | Containers → `liberty` → *Recreate* button → *Pull latest image* checkbox → *Recreate*. |

---

## Step 4 — Manage the compose stack

Portainer also surfaces the Compose project itself:

**Stacks → liberty** shows:

- The compose file (read + edit).
- Per-service status.
- Stop / start / restart the whole stack.
- Add new services without leaving the UI.

| Operation | Portainer | CLI equivalent |
|---|---|---|
| Restart everything | Stack → *Stop* → *Start* | `docker compose restart` |
| Edit the compose file | Stack → *Editor* → save | `nano docker-compose.yml` + `docker compose up -d` |
| Add a service | Stack → *Editor* → append YAML → *Deploy stack* | Same — edit file + `docker compose up -d` |
| Delete the stack (and data) | Stack → *Delete this stack* | `docker compose down -v` |

The CLI is still the source of truth — Portainer writes back to `docker-compose.yml` on disk. So whatever you edit in Portainer's editor lands in the file you cloned from your apps repo.

---

## Common operator tasks via Portainer

### Recover from a Liberty crash loop

1. Containers → `liberty` → *Logs* → identify the error.
2. Containers → `liberty` → *Console* → *Connect* → fix what's fixable (re-run `liberty-admin init-db` if the user store is empty, etc.).
3. Restart.

### Upgrade Liberty to a new image

1. Stacks → `liberty` → *Editor*.
2. Change `image: ghcr.io/fblettner/liberty-next:latest` to a pinned tag (e.g. `ghcr.io/fblettner/liberty-next:2026.06.1`).
3. *Update the stack* → tick *Re-pull image* → *Update*.

Portainer pulls the new image, swaps the container, leaves Postgres untouched. ~30 seconds downtime.

### Restart only Liberty (not Postgres)

Containers → `liberty` → *Restart*. Postgres is untouched.

### Check disk usage

**Volumes** in the left nav shows each volume's size. Watch:

- `liberty_postgres-data` — grows with audit history, run logs.
- `liberty-logs` — grows with the framework's log files.

For trim strategies, see [Production](./production.md).

---

## Limitations of the Portainer-only flow

Some things are still easier on the CLI:

| Task | Why CLI is better |
|---|---|
| Editing `.env`. | Portainer doesn't surface `.env` files — env vars are read at container-start. Edit the file with `nano` and recreate the container. |
| `liberty-admin <command>`. | Built-in commands are easier to run from a shell than via Portainer's Console (which is still a shell, but more clicks to reach). |
| Bulk backups (`pg_dump`, volume snapshots). | Cron + shell scripts. |
| Git pulls on the apps repo. | The apps repo lives outside Docker; Portainer doesn't manage it. |

Portainer covers the "what's running, why isn't it, restart it" cases. The CLI covers the data-management and Git-integration cases.

---

## Securing Portainer

A bare Portainer install on port 9443 with a self-signed cert is **fine for a private LAN**, **not for the public internet**. Three things to add for any public-facing install:

| Hardening | How |
|---|---|
| Put Portainer behind Traefik with a real TLS cert. | Add a Traefik label to the Portainer service (same pattern as Liberty — see [Traefik](./traefik.md)). |
| Restrict the source IP. | Host firewall rule (`ufw allow from <ip-range> to any port 9443`). |
| Use Portainer's RBAC. | Create a non-admin user for ops staff who only need restart / log access; keep `admin` for stack edits. |

A compromise of Portainer = compromise of every container on the host (because of the Docker socket mount). Treat it accordingly.

---

## Uninstalling

If you decide Portainer isn't worth it:

```bash
cd /opt/liberty
docker compose rm -s -v portainer
docker volume rm liberty_portainer-data
```

Remove the `portainer:` service block + the `portainer-data:` volume from `docker-compose.yml`. The Liberty stack continues unchanged.

---

## What's next

- [Traefik](./traefik.md) — add TLS to both Liberty and Portainer.
- [Production](./production.md) — hardening for the rest of the stack.
- [Monitoring](../monitoring/overview.md) — the built-in runtime view, separate from Portainer.
