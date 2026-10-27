---
title: Environment variables
description: "The environment variables Liberty Next reads — secrets, configuration folders, database bootstrap, container behaviour, operations — the ${VARIABLE} references allowed in every TOML file, and the variables of the Docker .env file."
keywords: [Liberty Next, environment variables, LIBERTY_MASTER_KEY, LIBERTY_JWT_SECRET, LIBERTY_APPS_DIR, LIBERTY_APP_CONFIG, POSTGRES, _FILE, .env, Docker]
---

# Environment variables

The environment holds what must not be written in the configuration files — the secrets — and what depends on the host — folders, ports. The configuration files then refer to it.

---

## References in the TOML files \{#references\}

Any value of any configuration file can be written `${NAME}` or `${NAME:-default}`: it is replaced by the environment variable when the file is loaded (the default when the variable is unset or empty).

```toml
[auth]
jwt_secret = "${LIBERTY_JWT_SECRET}"

[pools.reporting]
url = "postgresql+asyncpg://report@${REPORTING_HOST:-db}:5432/reporting"
password = "${REPORTING_PASSWORD}"
```

Settings shows such a reference as it is written. For a secret field (a password, a key), saving a new value from Settings replaces the reference with an encrypted `ENC:` value.

---

## Read by the server \{#server\}

| Variable | Use |
|---|---|
| `LIBERTY_MASTER_KEY` | The key of every `ENC:` value (through `[crypto] master_key = "${LIBERTY_MASTER_KEY}"`). Never change it on an existing install. |
| `LIBERTY_JWT_SECRET` | Signs the sessions (through `[auth] jwt_secret`). At least 32 characters. |
| `LIBERTY_LICENSE_KEY` | The licence key, when it is not pasted in Settings → App. |
| `ANTHROPIC_API_KEY` | The AI assistant's key, when it is not entered in Settings → App. |
| `LIBERTY_APPS_DIR` | The folder of the configuration files (connectors, screens, menus…); the plugins are in `../plugins`. See [Architecture](../../installation/architecture.md#configuration). |
| `LIBERTY_APP_CONFIG` | Another `app.toml` than `config/app.toml`. |
| `LIBERTY_ORACLE_CLIENT_LIB` | The Oracle Instant Client folder for the thick mode (set in the Docker image). |

---

## Database bootstrap \{#bootstrap\}

Read by `liberty-admin init-db` (run by the container at each start) to write the `default` pool when it is empty:

| Variable | Use |
|---|---|
| `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_PORT`, `POSTGRES_DB` | A PostgreSQL framework database; the password is stored encrypted. Without `POSTGRES_PASSWORD`, a SQLite file is used. |
| `LIBERTY_DB_URL` | The framework database address used by the containers (SQLite in the light layout). |
| `LIBERTY_ADMIN_PASSWORD` | The password of the first `admin`; otherwise a random one is printed. |

---

## Container behaviour \{#container\}

| Variable | Default | Use |
|---|---|---|
| `LIBERTY_AUTO_MIGRATE` | off | `1`: apply the licensed apps' schema migrations at start-up. |
| `LIBERTY_RUN_AS_ROOT` | off | `1`: keep running as root instead of the `liberty` user. |
| `LIBERTY_SKIP_INITDB` | off | `1`: skip `init-db` at start-up. |
| `LIBERTY_DB_WAIT_TRIES` | `30` | Seconds to wait for the framework database before `init-db`. |
| `<NAME>_FILE` | — | For any `LIBERTY_*`, `POSTGRES_*` or `PGADMIN_*` variable: read its value from this file (Docker, Swarm or Kubernetes secrets). |

`liberty-ops` also reads `LIBERTY_SERVICE` — the systemd unit name, `liberty-next` by default.

---

## The Docker .env file \{#env-file\}

`release/.env`, written by `./liberty install`, holds the secrets above and the install's choices:

| Variable | Use |
|---|---|
| `LIBERTY_IMAGE_TAG` | `latest` or a version. Changed by `./liberty upgrade --tag`. |
| `COMPOSE_FILE` | The compose files in use — changed only by `./liberty ssl` and `./liberty apps`. |
| `LIBERTY_PORT` | Port of the light layout (`8000`). |
| `TRAEFIK_HTTP_PORT`, `TRAEFIK_HTTPS_PORT` | Ports of the full layout (`80`, `443`). |
| `POSTGRES_BIND`, `POSTGRES_PORT` | Where PostgreSQL is published (`127.0.0.1:5432`). |
| `PGADMIN_EMAIL`, `PGADMIN_PASSWORD` | pgAdmin's sign-in. |
| `TRAEFIK_DASHBOARD_USERS` | The Traefik dashboard's user and password hash. |
| `LIBERTY_DOMAIN`, `ACME_EMAIL`, `CERT_HOST_PATH` | HTTPS settings. |
| `APPS_HOST_PATH` | The licensed apps folder on the host. |
| `LIBERTY_ROLLBACK_TAG`, `LIBERTY_LAST_BACKUP`, `LIBERTY_LAST_REPORT` | Written by `./liberty upgrade` for `./liberty rollback`. |

Edit it only for a port or an address; let the `./liberty` commands manage the rest.
