---
title: Docker
description: "Install Liberty Next with Docker: prerequisites, the light layout (one container, SQLite) and the full layout (PostgreSQL, Traefik, pgAdmin, Portainer), install options, image tags, the recorded compose files, Docker Swarm."
keywords: [Liberty Next, Docker, Docker Compose, install, liberty install, light, full, Swarm, deploy-swarm.sh, LIBERTY_IMAGE_TAG, COMPOSE_FILE, ghcr.io]
---

# Docker

Docker is the recommended way to run Liberty Next. The public image is `ghcr.io/fblettner/liberty-next`; the `release/` folder of the repository holds the compose files and the `liberty` command that drives them. Nothing is built on the host.

For what the two layouts contain, see [Architecture](./architecture.md#layouts).

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
| `--reset` | **Deletes** the stack, its volumes and `.env`, then stops. Run the install again afterwards. |

A production install in one line:

```bash
./liberty install full --tag 7.0.58 \
  --ssl letsencrypt --domain liberty.example.com --email ops@example.com \
  --apps ./liberty_apps-7.0.58-py3-none-any.whl
```

The licence key is not an option: paste it in **Settings → App → License** once signed in.

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
