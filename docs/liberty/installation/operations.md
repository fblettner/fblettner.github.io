---
title: Operations
description: "Run a Liberty Next install day to day: ./liberty status and doctor, start, stop and logs, backups and restores, common administrator tasks, the liberty-ops twin for Python installs, and the usual problems with their fix."
keywords: [Liberty Next, operations, liberty status, liberty doctor, backup, restore, logs, liberty-ops, troubleshooting, admin password, request id, JSON logs]
---

# Operations

Everything an administrator does on a running install goes through one command: `./liberty` (run from `release/`) on Docker, `liberty-ops` on a Python install. Both have the same verbs.

---

## Status \{#status\}

```text title="./liberty status"
Liberty Next — /opt/liberty-next/release
  layout        full
  tls           letsencrypt (liberty.example.com)
  apps overlay  yes (/opt/liberty-next/release/apps)
  image tag     7.0.58
  chain         docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml
  container     running/healthy
  framework     7.0.58
  apps bundle   7.0.58
  /ready        {"status":"ok","version":"7.0.58","pool":"default"}
  migrations    up to date
  last upgrade  stack 7.0.57 → 7.0.58 (2026-10-27T08:12:40)
```

| Line | Meaning |
|---|---|
| `layout`, `tls`, `apps overlay`, `chain` | What was installed and the compose files recorded in `.env`. |
| `image tag` | `latest` or the pinned release. |
| `container` | Docker state and health — `unhealthy` when the framework database does not answer. |
| `framework`, `apps bundle` | The versions actually running. |
| `/ready` | The readiness check of the server. |
| `migrations` | Schema migrations of the licensed apps still to apply. |
| `last upgrade` | The last entry of **Settings → History → Upgrades**. |

---

## Doctor \{#doctor\}

`./liberty doctor` checks the install and prints, for each problem, the command that fixes it. It ends with exit code `1` when something is wrong — a support request starts with its output.

It checks:

- `.env`, the recorded compose files and that each one exists;
- that the licensed apps folder is in the compose files when one is configured — the usual cause of an install that "looks empty";
- the length of the master key and of the JWT secret;
- the Traefik dashboard password and the PostgreSQL port exposure (full layout);
- the certificate files or the Let's Encrypt domain when HTTPS is on;
- the volumes, the container and `/ready`;
- the pending schema migrations;
- that the master key decrypts every pool password;
- the free disk space.

---

## Start, stop, logs \{#lifecycle\}

| Command | Effect |
|---|---|
| `./liberty start` | Starts the stack with the recorded compose files and waits until it is healthy. |
| `./liberty stop` | Stops the containers. Volumes and `.env` are kept. |
| `./liberty restart` | Restarts `liberty-next` only. |
| `./liberty logs` / `logs -f` | The last 200 lines of the server log / follow it. |

Every log line written while a request is handled carries that request's id, which is also returned in the `X-Request-ID` response header: quote it to find the matching lines.toml` writes one JSON object per line.

---

## Backup and restore \{#backup\}

```bash
./liberty backup                  # → release/backups/<YYYY-MM-DD_HHMMSS>/
./liberty backup --keep 30        # and delete backups older than 30 days
./liberty restore backups/2026-10-27_030000
```

A backup folder holds one archive per volume (`liberty-config`, `pg-data` or `liberty-data`, `pgadmin-data`, `portainer-data`), the licensed apps folder (`liberty-apps.tar.gz`), a copy of `.env` (`.env.snapshot`, mode `0600`, with the secrets) and the compose files. A backup can run while the stack is up.

`./liberty restore` stops the stack, puts every archive of the folder back in its volume and in the apps folder, and starts again. Everything written since the backup is lost.

A weekly backup kept 60 days, from cron:

```cron
0 3 * * 0  cd /opt/liberty-next/release && ./backup.sh /mnt/backup/liberty --keep 60
```

Copy the backups off the server. `.env.snapshot` contains the master key: without it the restored configuration cannot decrypt its passwords.

---

## Common tasks \{#tasks\}

| Task | Command (Docker) |
|---|---|
| New random password for `admin` | `docker exec -u liberty liberty-next liberty-admin set-password admin` |
| Another superuser | `docker exec -u liberty liberty-next liberty-admin create-user alice --superuser` |
| Check the licence | `docker exec -u liberty liberty-next liberty-license status` |
| Apply the apps' schema migrations | `./liberty migrate` (`--dry-run` lists them) |
| Reload the configuration after editing a file | **Settings → Reload config** |
| New Traefik dashboard password | `./liberty dashboard-password` |
| A shell in the container | `docker exec -it -u liberty liberty-next bash` |

`-u liberty` matters: the server runs as `liberty`, and a command run as root would leave files the server can no longer write. `./liberty` passes it on its own. Without `--password`, `set-password` and `create-user` generate a password and print it.

---

## Python installs: liberty-ops \{#liberty-ops\}

Run as the service user with its environment loaded (`sudo -u liberty bash -c 'set -a; . /etc/liberty/secrets.env; set +a; liberty-ops status'`).

| Command | Effect |
|---|---|
| `liberty-ops status` | Versions, configuration folder, apps folder, service state, `/ready`, pending migrations, last upgrade. |
| `liberty-ops doctor` | Python version, secrets, configuration files, apps and plugins, master key, service, `/ready`, migrations, disk — each problem with its fix. |
| `liberty-ops start` · `stop` · `restart` · `logs [-f]` | The systemd unit (`liberty-next`, or `LIBERTY_SERVICE`). |
| `liberty-ops backup [--dest DIR] [--keep DAYS]` | Configuration folder (with its history), apps folder, the SQLite file, and a `pg_dump` when the default pool is PostgreSQL and `pg_dump` is installed. Default destination: `backups/` next to the configuration folder. |
| `liberty-ops restore <dir> [--yes]` | Puts a backup back, stopping and starting the service around it. A PostgreSQL dump is not restored automatically: the command to run is printed. |
| `liberty-ops migrate [--dry-run]` | The apps' schema migrations. |
| `liberty-ops upgrade` · `rollback` | See [Upgrade and rollback](./upgrading.md#python). |

---

## Troubleshooting \{#troubleshooting\}

| Symptom | Cause | Fix |
|---|---|---|
| The install looks empty after an upgrade or a restart | The container was recreated without the licensed apps folder (a `docker compose -f …` by hand). | `./liberty doctor`, then `./liberty apps <wheel>` — and keep to `./liberty` commands. |
| `docker ps` shows `liberty-next` **unhealthy** | The framework database does not answer `/ready`. | `./liberty logs`; on the full layout check the `liberty-pg` container. |
| Sign-in answers *Too many failed logins — try again in N s* | Ten failed sign-ins in five minutes for that user (see [Sign-in](../framework/build/secure/sign-in.md)). | Wait for the time given, or reset the password. |
| Pools fail with a decryption error | `LIBERTY_MASTER_KEY` is not the key the passwords were encrypted with. | Put back the original key (see `.env.snapshot` in a backup). |
| The server says schema migrations are pending | A new apps release brings database changes. | `./liberty migrate`. |
| A file changed on disk is not taken into account | Files are read at start-up or on reload. | **Settings → Reload config**. |
| Port 80 or 8000 already used | Another service holds it. | Set `TRAEFIK_HTTP_PORT` (full) or `LIBERTY_PORT` (light) in `.env`, then `./liberty start`. |
| The install refuses to start: *stale Docker volumes* | Volumes of a previous install exist but its `.env` is gone. | Restore the old `.env`, or `./liberty install --reset` then install again. |
