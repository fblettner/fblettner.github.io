---
title: Python server
description: "Install Liberty Next without Docker: pipx install from PyPI, secrets in an environment file, PostgreSQL bootstrap with liberty-admin init-db, the licensed apps, a systemd unit, and liberty-ops for status, backups and upgrades."
keywords: [Liberty Next, pipx, PyPI, Python, systemd, liberty-ops, liberty-admin, init-db, run-install-jobs, LIBERTY_APPS_DIR, LIBERTY_MASTER_KEY, LIBERTY_JWT_SECRET, PostgreSQL]
---

# Python server

For hosts where Docker is not an option, Liberty Next installs from PyPI as a Python application. The web application is included in the package: there is nothing to build. You bring the PostgreSQL server; `liberty-ops` then does what `./liberty` does on Docker — status, checks, backups, upgrades.

---

## Before you start \{#prerequisites\}

| Need | Detail |
|---|---|
| Python 3.12 or later | `python3 --version`. |
| pipx | `apt install pipx` (Debian, Ubuntu), `brew install pipx` (macOS), or `python3 -m pip install --user pipx`; then `pipx ensurepath`. |
| PostgreSQL 13 or later | Needed for the licensed apps and the Nomaflow jobs. A local server, a managed service or an existing server — with a role allowed to create roles and databases. Without licensed apps, SQLite is enough for a trial. |
| The apps wheel *(licensed only)* | `liberty_apps-<version>-py3-none-any.whl`, same version as the framework. |
| systemd *(recommended)* | To run the server unattended; `liberty-ops start / stop / logs` drive it. |

---

## 1 — Install the package \{#install\}

```bash
pipx install 'liberty-next[all]'
```

On a server, install it as the service user created in [step 2](#secrets) — `sudo -u liberty pipx install 'liberty-next[all]'` — so that the systemd unit finds it in that user's home.

`[all]` adds the optional parts: PDF reports, the LDAP job step and the schema migrations of the licensed apps. pipx puts these commands on the `PATH`:

| Command | Use |
|---|---|
| `liberty-next` | Starts the server (web application and API on the same port). |
| `liberty-ops` | Operations: status, doctor, backup, restore, upgrade, rollback — see [Operations](./operations.md#liberty-ops). |
| `liberty-admin` | Database bootstrap, users and roles, schema migrations — see [CLI](../references/cli.md). |
| `liberty-license` | Checks a licence key. |
| `liberty-crypto` | Encrypts a value into an `ENC:` string. |

---

## 2 — Create the system user and the secrets \{#secrets\}

```bash
sudo useradd --system --create-home --shell /usr/sbin/nologin liberty
sudo install -d -m 0750 -o liberty -g liberty /etc/liberty /var/lib/liberty-next /var/lib/liberty-next/apps/config
openssl rand -base64 48 | tr -d '\n=+/'     # run twice: one value per secret
```

```bash title="/etc/liberty/secrets.env  (mode 0640, owner root:liberty)"
LIBERTY_MASTER_KEY=<first random value>
LIBERTY_JWT_SECRET=<second random value>

POSTGRES_USER=liberty
POSTGRES_PASSWORD=<password of the liberty role>
POSTGRES_HOST=db.example.com
POSTGRES_PORT=5432
POSTGRES_DB=liberty

LIBERTY_APPS_DIR=/var/lib/liberty-next/apps/config
```

| Variable | Role |
|---|---|
| `LIBERTY_MASTER_KEY` | Encrypts every `ENC:` value of the configuration. Generate it once and never change it — see [Architecture](./architecture.md#secrets). |
| `LIBERTY_JWT_SECRET` | Signs the sessions. At least 32 characters. |
| `POSTGRES_*` | Read once by `init-db` to write the `default` pool, with its password encrypted by the master key. |
| `LIBERTY_APPS_DIR` | The folder of the configuration files (connectors, screens, menus…). The licensed apps' code goes next to it, in `../plugins`. `app.toml` and `auth.toml` stay in `config/` under the working directory, `/var/lib/liberty-next` — see [Architecture](./architecture.md#configuration). |

Every command below runs **as the `liberty` user with this file loaded**:

```bash
sudo -u liberty bash -c 'set -a; . /etc/liberty/secrets.env; set +a; <command>'
```

---

## 3 — Prepare PostgreSQL \{#postgres\}

Once, with a PostgreSQL superuser:

```sql
CREATE ROLE liberty LOGIN PASSWORD '<password of the liberty role>' CREATEROLE CREATEDB;
CREATE DATABASE liberty OWNER liberty;
```

`CREATEROLE` and `CREATEDB` let the licensed apps' installation create their own roles and databases (`nomasx1`, `nomajde`).

Then create the framework tables and the first user:

```bash
liberty-admin init-db
```

`init-db` writes the `default` pool, creates the framework tables and the `admin` superuser, and prints its password once. Run again, it changes nothing. To choose the password yourself: `liberty-admin init-db --password-env ADMIN_PASSWORD`.

---

## 4 — Add the licensed apps *(licensed only)* \{#apps\}

```bash
pipx inject liberty-next ./liberty_apps-<version>-py3-none-any.whl
liberty-apps install --target "$LIBERTY_APPS_DIR"
liberty-admin run-install-jobs
```

1. `pipx inject` adds the apps package to the same environment as the framework.
2. `liberty-apps install` writes the configuration files into `$LIBERTY_APPS_DIR` and the Python code into `../plugins` next to it. On an existing folder it merges entity by entity and keeps your changes — see [Licensed apps](./deploy-prebuilt-apps.md#merge).
3. `run-install-jobs` runs the installation jobs in order: `deploy-databases` (application roles and databases, then the Nomasx-1 schema) and `nomasx1-import-reference` (reference data). A job already completed is skipped; `--force` runs everything again.

---

## 5 — Run under systemd \{#systemd\}

```ini title="/etc/systemd/system/liberty-next.service"
[Unit]
Description=Liberty Next
After=network-online.target postgresql.service
Wants=network-online.target

[Service]
Type=simple
User=liberty
Group=liberty
WorkingDirectory=/var/lib/liberty-next
EnvironmentFile=/etc/liberty/secrets.env
ExecStart=/home/liberty/.local/bin/liberty-next
Restart=on-failure
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ReadWritePaths=/var/lib/liberty-next

[Install]
WantedBy=multi-user.target
```

Adjust `ExecStart` to the path `which liberty-next` gives for the `liberty` user. Then:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now liberty-next
liberty-ops status
```

`liberty-ops` drives the unit named `liberty-next`; set `LIBERTY_SERVICE` if yours has another name.

The server listens on `http://<host>:8000/` (`[app] port` in `app.toml`). Sign in as **`admin`**, then paste the licence key in **Settings → App → License**. For HTTPS, put the reverse proxy of your choice in front and forward WebSocket traffic (`/socket.io`) as well.

---

## Day to day \{#day-to-day\}

| Task | Command |
|---|---|
| Health, versions, pending migrations | `liberty-ops status` |
| Find what is wrong | `liberty-ops doctor` |
| Start, stop, restart, follow the log | `liberty-ops start` · `stop` · `restart` · `logs -f` |
| Back up | `liberty-ops backup --keep 30` |
| Upgrade | `liberty-ops upgrade` — see [Upgrade and rollback](./upgrading.md#python) |
| New admin password | `liberty-admin set-password admin` (prints a random one) |

Run them as the `liberty` user with the secrets loaded, as in [step 2](#secrets). The full list is on [Operations](./operations.md#liberty-ops).
