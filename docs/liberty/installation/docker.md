---
title: Docker
description: "Install Liberty Next with Docker: prerequisites, the light layout (one container, SQLite) and the full layout (PostgreSQL, Traefik, pgAdmin, Portainer), install options, image tags, the recorded compose files, Docker Swarm."
keywords: [Liberty Next, Docker, Docker Compose, install, liberty install, light, full, Swarm, deploy-swarm.sh, LIBERTY_IMAGE_TAG, COMPOSE_FILE, ghcr.io]
---

# Docker

Docker is the recommended way to run Liberty Next. The public image is `ghcr.io/fblettner/liberty-next`; the `release/` folder of the repository holds the compose files and the `liberty` command that drives them. Nothing is built on the host.

For what the two layouts contain, see [Architecture](./architecture.md#layouts).

---

## At a glance

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="320" rx="14" fill="url(#dgd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="120" width="120" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="300.0" y="145.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Browser</text>
  <text x="300.0" y="160.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">https://host</text>
  <rect x="390" y="40" width="560" height="280" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="406" y="62" fill="#4a9eff" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">release/  ·  ./liberty</text>
  <rect x="410" y="120" width="130" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="475.0" y="145.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Traefik</text>
  <text x="475.0" y="160.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">HTTPS (option)</text>
  <rect x="570" y="120" width="160" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="650.0" y="145.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-next</text>
  <text x="650.0" y="160.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">:8000</text>
  <rect x="760" y="120" width="170" height="56" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="845.0" y="145.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PostgreSQL</text>
  <text x="845.0" y="160.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">framework + apps DBs</text>
  <line x1="360" y1="148" x2="410" y2="148" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgd-flow)"/>
  <line x1="540" y1="148" x2="570" y2="148" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgd-flow)"/>
  <line x1="730" y1="148" x2="760" y2="148" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgd-flow)"/>
  <rect x="410" y="230" width="160" height="56" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="490.0" y="255.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">./apps</text>
  <text x="490.0" y="270.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">config + plugins</text>
  <rect x="590" y="230" width="160" height="56" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="670.0" y="255.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-config</text>
  <text x="670.0" y="270.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">app.toml · auth.toml</text>
  <rect x="770" y="230" width="160" height="56" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="850.0" y="255.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">pg-data</text>
  <text x="850.0" y="270.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">databases</text>
  <line x1="650" y1="176" x2="490" y2="230" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dgd-flow)"/>
  <line x1="650" y1="176" x2="670" y2="230" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dgd-flow)"/>
  <line x1="845" y1="176" x2="850" y2="230" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dgd-flow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Light or full</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bundled PostgreSQL or yours</text>
  <line x1="1000" y1="137.0" x2="930" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgd-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One command</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">install · start · upgrade…</text>
  <line x1="1000" y1="77.0" x2="620" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgd-arrow)"/>
  <rect x="1000" y="240" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Volumes</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kept across upgrades</text>
  <line x1="1000" y1="257.0" x2="950" y2="258" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgd-arrow)"/>
</svg>

---

## Before you start \{#prerequisites\}

| Need | Detail |
|---|---|
| A Linux host | Any distribution that runs Docker Engine. A macOS or Windows machine with Docker Desktop is fine for a trial. |
| Docker Engine and the Compose plugin | `docker compose version` must answer (Compose v2). |
| `git` and `curl` | To fetch `release/` and, if needed, a wheel by URL. |
| Free ports | Full layout: `80` (and `443` for HTTPS). Light layout: `8000`. |
| Disk | About 2 GB free for the images; `./liberty doctor` warns below 2 GB. |
| Memory | The bundled PostgreSQL is tuned with `shared_buffers = 2GB`: give the full layout a host with several GB of memory. |

Fetch the release folder:

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release
```

Every command on this page and on the following ones is run from this `release/` folder.

---

## Full layout \{#full\}

```bash
./liberty install full
```

The command:

1. checks Docker and Compose;
2. writes `release/.env` with random secrets (master key, JWT secret, PostgreSQL, pgAdmin and Traefik dashboard passwords) and the list of compose files in use;
3. pulls the images and starts the five containers;
4. waits until `liberty-next` reports **healthy**;
5. prints the addresses and the passwords.

```text title="End of the output (example)"
  Liberty:    http://liberty.example.com/
  ReDoc:      http://liberty.example.com/redoc
  pgAdmin:    http://liberty.example.com/pgadmin
  Portainer:  http://liberty.example.com/portainer

  Sign in to Liberty as:
    username:  admin
    password:  Xq7…

  pgAdmin:        admin@liberty.fr / …
  Traefik:        admin / …   (dashboard at …/traefik — shown once; ./liberty dashboard-password regenerates)
  Postgres:       published on 127.0.0.1:5432 only (POSTGRES_BIND=0.0.0.0 in .env to open it)
```

Write the passwords down: the Traefik dashboard password is shown only once (`.env` keeps only its hash). The Liberty and pgAdmin passwords stay in `.env`.

Open the Liberty address, sign in as **`admin`**, then go on with the [licence and the licensed apps](./deploy-prebuilt-apps.md) and [HTTPS](./traefik.md).

---

## Light layout \{#light\}

```bash
./liberty install light
```

One container, a SQLite database, port `8000`: open `http://<host>:8000/` and sign in as **`admin`** with the printed password. Change the port with `LIBERTY_PORT` in `.env`, then `./liberty restart`.

The light layout has no Traefik, so no HTTPS of its own: on a shared network, put it behind your own reverse proxy or use the full layout.

---

## Install options \{#options\}

`./liberty install` accepts the layout and these options; they can be combined.

| Option | Effect |
|---|---|
| `light` / `full` | The layout. Without it, the command asks. |
| `--tag 7.0.58` | Pin a release instead of `latest` (see [Image tags](#tags)). |
| `--apps <wheel or URL>` | Install the licensed apps right after the stack is up — see [Licensed apps](./deploy-prebuilt-apps.md). |
| `--ssl letsencrypt --domain D --email E` | HTTPS with a Let's Encrypt certificate (full layout). |
| `--ssl provided --domain D --cert-dir DIR --cert-file F --key-file K` | HTTPS with your own certificate (full layout). |
| `--db external --db-host H [--db-port 5432] [--db-user liberty] [--db-name liberty] [--db-password-env VAR]` | The database on a PostgreSQL server outside the stack: no bundled Postgres is started. Without `--db-password-env`, the password is asked; it may not contain `$`. See [External database](./operations.md#external-db). |
| `--reset` | **Deletes** the stack, its volumes and `.env`, then stops. Run the install again afterwards. |

A production install in one line:

```bash
./liberty install full --tag 7.0.58 \
  --ssl letsencrypt --domain liberty.example.com --email ops@example.com \
  --apps ./liberty_apps-7.0.58-py3-none-any.whl
```

The licence key is not an option: paste it in **Liberty Next → Administer → App → License** once signed in.

### Running the install again \{#rerun\}

Running `./liberty install` on a host that already has a `.env` is safe: the secrets, the volumes and the recorded compose files are kept, and the stack is started again if it was stopped. To change HTTPS or the apps afterwards, use `./liberty ssl …` and `./liberty apps …` rather than a new install.

If a previous install left volumes behind but its `.env` is gone, the install refuses to start: the old database was created with passwords nobody has any more. Restore the old `.env`, or wipe everything with `./liberty install --reset` and install again.

---

## Image tags \{#tags\}

| `LIBERTY_IMAGE_TAG` in `.env` | Meaning |
|---|---|
| `latest` (default) | The most recent release. Each upgrade takes the newest one. |
| `7.0.58` | That release, until you choose another. Recommended in production. |

Change it with `./liberty upgrade --tag <version>`, which also takes a backup and applies the migrations — see [Upgrade and rollback](./upgrading.md).

---

## The recorded compose files \{#compose-file\}

The install writes in `.env` which compose files make up the stack — the layout, then the HTTPS file, then the licensed apps file:

```env title="release/.env (excerpt)"
COMPOSE_FILE=docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml
```

Only `./liberty ssl …` and `./liberty apps …` change this line; every other command reuses it as it is. Two consequences:

- Use `./liberty start`, `stop`, `restart`, `logs`, `upgrade` for day-to-day work.
- A plain `docker compose ps` or `docker compose logs` without `-f` is fine (Compose reads the same line). **Never** pass `-f docker-compose.full.yml`: Compose would then ignore the other files, recreate the container without the licensed apps and without HTTPS, and the install would look empty.

---

## Docker Swarm \{#swarm\}

`docker-compose.swarm.yml` is the full layout adapted to `docker stack deploy`: same five services, overlay network, every service placed on a manager node.

```bash
docker swarm init                     # once, on the manager
./install.sh prepare                  # writes .env only, starts nothing
./deploy-swarm.sh                     # deploys or updates the stack "liberty"
./deploy-swarm.sh --status            # state of the services
./deploy-swarm.sh --rm                # removes the stack (volumes are kept)
```

`docker stack deploy` does not read `.env`: `deploy-swarm.sh` loads it into the shell first, so the values are fixed when the stack is deployed. After a change in `.env`, run `./deploy-swarm.sh` again.

What differs from Compose:

- The `liberty` command, `--ssl` and `--apps` work with the Compose layouts only. On Swarm, add the HTTPS or apps settings to the stack file yourself.
- PostgreSQL must stay on one node so that its volume follows it: add `node.hostname == <node>` to its placement constraints on a multi-node swarm. Traefik must run on a manager.
- Keep one replica of `liberty-next`: live updates are held in the process, so several replicas would show users different states.
- Upgrade one service with `docker service update --image ghcr.io/fblettner/liberty-next:<version> liberty_liberty-next`, undo it with `docker service rollback liberty_liberty-next`.
- `backup.sh` works the same way (the volume names are identical); restore with the stack removed.
