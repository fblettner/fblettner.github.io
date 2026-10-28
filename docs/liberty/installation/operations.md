---
title: Operations
description: "Run a Liberty Next install day to day: ./liberty status and doctor, start, stop and logs, backups and restores, common administrator tasks, the liberty-ops twin for Python installs, and the usual problems with their fix."
keywords: [Liberty Next, operations, liberty status, liberty doctor, backup, restore, logs, liberty-ops, troubleshooting, admin password, request id, JSON logs]
---

# Operations

Everything an administrator does on a running install goes through one command: `./liberty` (run from `release/`) on Docker, `liberty-ops` on a Python install. Both have the same verbs.

---

## At a glance

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgx-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgx-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgx-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="30" width="760" height="270" rx="14" fill="url(#dgx-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="50" width="172" height="44" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="326.0" y="76.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Run</text>
  <rect x="250" y="108" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="122.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty start</text>
  <rect x="250" y="138" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="152.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty stop</text>
  <rect x="250" y="168" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="182.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty restart</text>
  <rect x="250" y="198" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="212.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty status</text>
  <rect x="250" y="228" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="242.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty logs</text>
  <rect x="422" y="50" width="172" height="44" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="508.0" y="76.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Check</text>
  <rect x="432" y="108" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="442" y="122.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty doctor</text>
  <rect x="432" y="138" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="442" y="152.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty ssl</text>
  <rect x="432" y="168" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="442" y="182.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty dashboard-password</text>
  <rect x="604" y="50" width="172" height="44" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="690.0" y="76.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Change</text>
  <rect x="614" y="108" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="624" y="122.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty upgrade</text>
  <rect x="614" y="138" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="624" y="152.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty rollback</text>
  <rect x="614" y="168" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="624" y="182.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty apps</text>
  <rect x="614" y="198" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="624" y="212.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty migrate</text>
  <rect x="786" y="50" width="172" height="44" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="872.0" y="76.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Protect</text>
  <rect x="796" y="108" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="806" y="122.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty backup</text>
  <rect x="796" y="138" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="806" y="152.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty restore</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Docker</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">release/liberty</text>
  <line x1="210" y1="77.0" x2="240" y2="72" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgx-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Python</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liberty-ops, same verbs</text>
  <line x1="210" y1="217.0" x2="250" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgx-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Before an upgrade</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">backup</text>
  <line x1="1000" y1="137.0" x2="960" y2="130" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgx-arrow)"/>
</svg>

---

## Status \{#status\}

```text title="./liberty status"
Liberty Next — /opt/liberty-next/release
  layout        full
  tls           letsencrypt (liberty.example.com)
  apps overlay  yes (/opt/liberty-next/release/apps)
  image tag     7.0.58
  chain         docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml
  database      embedded — the bundled Postgres (pg)
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
| `database` | Where the database is: *embedded — the bundled Postgres*, *embedded — SQLite* (light layout), or *external — user@host:port/name*. |
| `container` | Docker state and health — `unhealthy` when the framework database does not answer. |
| `framework`, `apps bundle` | The versions actually running. |
| `/ready` | The readiness check of the server. |
| `migrations` | Schema migrations of the licensed apps still to apply. |
| `last upgrade` | The last entry of **Liberty Next → Deploy → History → Upgrades**. |

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

With an [external database](#external-db), the database is **not** in the backup — `./liberty backup` says so: back it up on its own server (`pg_dump`, `pg_dumpall`).

---

## External database \{#external-db\}

The framework database — and the databases of the licensed apps — can live on a PostgreSQL server outside the stack: a managed database, the company's database server.

| Command | Effect |
|---|---|
| `./liberty db` | Where the database is now. |
| `./liberty db dump [file.sql.gz]` | A `pg_dumpall` of the bundled Postgres, to carry the data over — by default under `backups/`. Full layout only. |
| `./liberty db external --host H [--port P] [--user U] [--name D] [--password-env VAR] [--yes]` | Moves the install to that server: the application's connection and the pools that named the bundled server — the licensed apps' — are pointed at it, the stack restarts, and the bundled Postgres is stopped, its volume kept. The command shows the change and asks for confirmation (`--yes` skips it). |
| `./liberty db embedded [--yes]` | Comes back to the bundled Postgres (full layout) or SQLite (light layout). |

**The data is not copied.** To move an existing install:

1. `./liberty db dump` on the current install;
2. restore the dump on the new server — `gunzip -c backups/pg-dumpall-….sql.gz | psql -h <host> -U postgres -d postgres`;
3. `./liberty db external --host <host>`.

Coming back with `./liberty db embedded` does not copy back what was written on the external server in the meantime. The choice is recorded in `.env` with the compose files, so `start`, `upgrade` and `backup` follow it. `./liberty doctor` warns when the bundled Postgres still runs while the application uses the external server. A new install goes straight to an external server with `./liberty install full --db external --db-host …` — see [Install options](./docker.md#options).

---

## Common tasks \{#tasks\}

| Task | Command (Docker) |
|---|---|
| New random password for `admin` | `docker exec -u liberty liberty-next liberty-admin set-password admin` |
| Another superuser | `docker exec -u liberty liberty-next liberty-admin create-user alice --superuser` |
| Check the licence | `docker exec -u liberty liberty-next liberty-license status` |
| Apply the apps' schema migrations | `./liberty migrate` (`--dry-run` lists them) |
| Reload the configuration after editing a file | **Reload config (at the top of any Liberty Next editor page)** |
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
| A file changed on disk is not taken into account | Files are read at start-up or on reload. | **Reload config (at the top of any Liberty Next editor page)**. |
| Port 80 or 8000 already used | Another service holds it. | Set `TRAEFIK_HTTP_PORT` (full) or `LIBERTY_PORT` (light) in `.env`, then `./liberty start`. |
| The install refuses to start: *stale Docker volumes* | Volumes of a previous install exist but its `.env` is gone. | Restore the old `.env`, or `./liberty install --reset` then install again. |
