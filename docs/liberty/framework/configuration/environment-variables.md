---
title: Environment variables
description: "The environment variables Liberty Next reads — secrets, configuration folders, database bootstrap, container behaviour, operations — the ${VARIABLE} references allowed in every TOML file, and the variables of the Docker .env file."
keywords: [Liberty Next, environment variables, LIBERTY_MASTER_KEY, LIBERTY_JWT_SECRET, LIBERTY_APPS_DIR, LIBERTY_APP_CONFIG, POSTGRES, _FILE, .env, Docker]
---

# Environment variables

The environment holds what must not be written in the configuration files — the secrets — and what depends on the host — folders, ports. The configuration files then refer to it.

---

## At a glance

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dge-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dge-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dge-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dge-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="40" width="760" height="230" rx="14" fill="url(#dge-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="60" width="220" height="70" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="350.0" y="92.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Install</text>
  <text x="350.0" y="107.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">release/.env · service env file</text>
  <rect x="510" y="60" width="200" height="70" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="610.0" y="92.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Environment</text>
  <text x="610.0" y="107.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">LIBERTY_MASTER_KEY · LIBERTY_JWT_SECRET</text>
  <rect x="760" y="60" width="190" height="70" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="855.0" y="92.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-next</text>
  <text x="855.0" y="107.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">reads them at start</text>
  <line x1="460" y1="95" x2="510" y2="95" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dge-flow)"/>
  <line x1="710" y1="95" x2="760" y2="95" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dge-flow)"/>
  <rect x="510" y="180" width="200" height="60" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="610.0" y="207.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">$&#123;VARIABLE&#125;</text>
  <text x="610.0" y="222.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">in a setting value</text>
  <rect x="760" y="180" width="190" height="60" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="855.0" y="207.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">&lt;NAME&gt;_FILE</text>
  <text x="855.0" y="222.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Docker / K8s secrets</text>
  <line x1="610" y1="180" x2="610" y2="130" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dge-flow)"/>
  <line x1="855" y1="180" x2="855" y2="130" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dge-flow)"/>
  <rect x="10" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Generated</text>
  <text x="20" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by the installation</text>
  <line x1="210" y1="97.0" x2="240" y2="95" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dge-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">File secrets</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">value read from a file</text>
  <line x1="1000" y1="217.0" x2="950" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dge-arrow)"/>
</svg>

---

## References in the TOML files \{#references\}

Any value of any configuration file can be written `${NAME}` or `${NAME:-default}`: it is replaced by the environment variable when the file is loaded (the default when the variable is unset or empty).

```toml
[pools.reporting]
url = "postgresql+asyncpg://report@${REPORTING_HOST:-db}:5432/reporting"
password = "${REPORTING_PASSWORD}"
```

Settings shows such a reference as it is written. For a secret field (a password, a key), saving a new value from Settings replaces the reference with an encrypted `ENC:` value.

---

## Read by the server \{#server\}

| Variable | Use |
|---|---|
| `LIBERTY_MASTER_KEY` | The key of every `ENC:` value. Never change it on an existing install. |
| `LIBERTY_JWT_SECRET` | Signs the sessions. At least 32 characters. |
| `LIBERTY_LICENSE_KEY` | The licence key, when it is not pasted in Settings → App. |
| `ANTHROPIC_API_KEY` | The AI assistant's key, when it is not entered in Settings → App. |
| `LIBERTY_APPS_DIR` | The folder of the configuration files (connectors, screens, menus…); the plugins are in `../plugins`. See [Architecture](../../installation/architecture.md#configuration). |
| `LIBERTY_APP_CONFIG` | The path of the application settings file, when it is not `config/app.toml`. |
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
