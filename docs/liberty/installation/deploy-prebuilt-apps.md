---
title: Deploy prebuilt apps
description: "Stand up the NOMANA-IT product apps on a Liberty install — NomaUBL (separate Java service), Nomasx-1 / Nomajde / Nomaflow bundled jobs (delivered as one liberty-apps wheel). The wheel is materialised by install-apps.sh via a throwaway python:3.12-slim container — no host Python or pip needed — then bind-mounted into liberty-next via the docker-compose.apps.yml overlay."
keywords: [Liberty Framework, prebuilt apps, deploy, install, NomaUBL, Nomasx-1, Nomajde, Nomaflow, liberty-apps, wheel, install-apps.sh, --apps, APPS_HOST_PATH, docker-compose.apps.yml, COMPOSE_FILE, throwaway container, Settings App, license key, deploy-databases, init-schema, nomasx1-import-reference]
---

# Deploy prebuilt apps

Three NOMANA-IT applications are designed to be **deployed on top of a Liberty install**, not built from scratch. Each ships as a prebuilt bundle the operator drops in place and wires through one or two commands.

| App | Shape | How it reaches the install |
|---|---|---|
| **NomaUBL** | Standalone Java service (its own JAR + wrapper + database). | Not a Liberty plugin — its own install procedure. Liberty optionally links to it via a menu item. |
| **Nomasx-1** + **Nomajde** | Liberty plugins (Python under `plugins/nomasx1`) + a full TOML config (`screens.toml`, `menus.toml`, `dashboards.toml`, `dictionary.toml`, etc.). | Delivered as a single **`liberty-apps` wheel**. `install-apps.sh` materialises it into `./apps/` and wires the `docker-compose.apps.yml` overlay. |
| **Nomaflow** | Built into Liberty Next (the framework's scheduler + workflow engine). The **bundled jobs** that drive Nomasx-1 install + refresh ship inside the same wheel's `plugins/nomaflow/jobs.toml`. | Comes with the wheel — no separate install. |

This page walks each deployment path. The order: NomaUBL first (if you need it), then the wheel install, then run the bundled jobs to materialise the application databases.

---

## NomaUBL — separate Java service

NomaUBL is **not a Liberty plugin**. It runs as its own JVM process, with its own database (Oracle or PostgreSQL), its own web UI on a separate port, its own `nomaubl.sh` / `nomaubl.cmd` wrapper. The integration with Liberty is at the **menu** level only — a Liberty operator can add a menu item that opens the NomaUBL UI in a new tab.

| Page | What |
|---|---|
| [NomaUBL → Installation → Overview](../../nomaubl/installation/overview.md) | The 5-step install — prerequisites, JAR install, Settings UI configuration, service supervision, upgrade. |
| [NomaUBL → Installation → Requirements](../../nomaubl/installation/requirements.md) | JDK 17, Oracle or PostgreSQL, ports, optional reverse proxy. |
| [NomaUBL → Installation → Upgrade](../../nomaubl/installation/upgrade.md) | One-command upgrade with rollback. |

The rest of this page focuses on the **Liberty plugins** — Nomasx-1, Nomajde and the bundled Nomaflow jobs.

---

## The wheel — what it carries

`liberty_apps-<version>-py3-none-any.whl` is a Python wheel published by NOMANA-IT. It bundles a small CLI (`liberty-apps install --target DIR`) and an internal `_payload/` directory:

| Carried inside the wheel | What it is | Where it lands |
|---|---|---|
| **`_payload/config/*.toml`** | Full app config — `screens.toml`, `menus.toml`, `dashboards.toml`, `dictionary.toml`, `charts.toml`, `connectors.toml`, `theme.toml`. | `./apps/config/<file>.toml` on the host → `/apps/config/<file>.toml` in the liberty-next container. |
| **`_payload/plugins/nomasx1/`** | Python package — security collector, license collector, SoD detector, audit-trail reader, materialised-view refresher, schema bootstrap. Callables referenced from `jobs.toml`. | `./apps/plugins/nomasx1/` on the host → `/apps/plugins/nomasx1/` in the container. |
| **`_payload/plugins/nomaflow/jobs.toml`** | The bundled Nomaflow job catalogue — install jobs, daily syncs, weekly refreshes, ad-hoc reset jobs. | `./apps/plugins/nomaflow/jobs.toml` → `/apps/plugins/nomaflow/jobs.toml`. |
| **`_payload/config/nomasx1-reference.tar.gz`** | Curated reference rows (SoD baseline, custom lists). Loaded by the `nomasx1-import-reference` job. | Same place — read by the import job. |

---

## Single-command install (fresh host)

```bash
./install.sh full --apps ./liberty_apps-7.0.1-py3-none-any.whl
```

That's the stack + the licensed apps in one go. The license key is set **afterwards** via the UI — see [Set the license key](#set-the-license-key) below.

`install.sh` brings the base layout up first (so the credentials banner stays visible even if the apps step fails), then chains to `install-apps.sh` with the wheel.

:::info[`--license-key` flag was removed from `install.sh`]
Earlier versions accepted `--license-key <jwt>` and wrote it to `.env` as `LIBERTY_LICENSE_KEY`. The flag is gone — the license now lives in `app.toml` encrypted at rest with the install master key (AES-256-GCM, `ENC:` prefix). It's set via *Settings → App → License* after install — connector registry rebuilds on save, no restart. See [App settings → License](../framework/build/settings-app.md#section-2--license).
:::

---

## Split install — base first, apps later

```bash
./install.sh full                                          # base stack
./install-apps.sh ./liberty_apps-7.0.1-py3-none-any.whl    # apps overlay
# Then: Settings → App → License → paste the JWT
```

This is the path most installs end up using — apps land after the operator has already verified the base stack works.

### What `install-apps.sh` does

| Step | What |
|---|---|
| **1. Fetch the wheel** (when given a URL) | `curl -fsSL <url>` into a temp dir; a local path is used directly. |
| **2. Materialise the wheel into `./apps/`** | Runs a throwaway `python:3.12-slim` container that mounts the wheel read-only + the destination read-write, `pip install`s the wheel into a tmp prefix, then invokes the wheel's `liberty-apps install --target /dest/config` CLI which copies `config/` + `plugins/` into the destination. Nothing python-related stays on the host. |
| **3. Update `.env`** | Sets `APPS_HOST_PATH=<absolute path to ./apps>` and appends `docker-compose.apps.yml` to `COMPOSE_FILE` (colon-separated). The license key is NOT written to `.env` — set it via *Settings → App → License* after the apps are visible. |
| **4. Restart the stack** | `docker compose up -d` (no `-f` — `COMPOSE_FILE` picks every overlay). Liberty-next picks up the new bind mount. |
| **5. Wait for the healthcheck + print summary** | Path, the apps mount + next-step pointer to *Settings → App → License*. |

The throwaway-container approach means **your host needs no Python, no pip, no virtualenv** — only Docker. This is intentional: the framework host should not need a Python toolchain to install the apps.

### `install-apps.sh` flags

| Flag | Purpose |
|---|---|
| `<wheel-path-or-URL>` *(positional)* | Local `.whl` or an `http://` / `https://` URL. Required. |
| ~~`--license-key <jwt>`~~ | **Removed.** Set the license via *Settings → App → License* after install (encrypted at rest in `app.toml`, applied live without restart). |
| `--target <DIR>` | Destination on the host. Default: `./apps`. The directory is created if missing. |
| `--layout <full\|light>` | Which base layout's compose to use when wiring `COMPOSE_FILE`. Default: `full`. The apps overlay works on both. |
| `--force-config` | Overwrite operator-edited TOMLs in `./apps/config/` with the wheel's vendor versions. Default behaviour preserves operator edits across re-installs. |

### The `docker-compose.apps.yml` overlay

It's ~10 lines:

```yaml title="docker-compose.apps.yml"
services:
  liberty-next:
    volumes:
      - ${APPS_HOST_PATH:?APPS_HOST_PATH not set — see install-apps.sh}:/apps:ro
    environment:
      LIBERTY_APPS_DIR: /apps/config
```

That's the whole contract: bind-mount `./apps` to `/apps:ro`, redirect TOML reads to `/apps/config`.

You can run it directly without `install-apps.sh` if you've already set `APPS_HOST_PATH` in `.env` yourself and materialised the wheel another way:

```bash
docker compose -f docker-compose.full.yml -f docker-compose.apps.yml up -d
```

After that one-off, set `COMPOSE_FILE=docker-compose.full.yml:docker-compose.apps.yml` in `.env` so subsequent `docker compose` commands (no `-f`) keep the overlay live.

### Layout produced

After `install-apps.sh`:

```text
release/
├── .env                                  ← APPS_HOST_PATH + COMPOSE_FILE updated
├── apps/                                  ← bind-mount target
│   ├── config/
│   │   ├── connectors.toml
│   │   ├── dictionary.toml
│   │   ├── menus.toml
│   │   ├── screens.toml
│   │   ├── charts.toml
│   │   ├── dashboards.toml
│   │   ├── theme.toml
│   │   └── nomasx1-reference.tar.gz
│   └── plugins/
│       ├── nomasx1/                       ← Python package
│       └── nomaflow/
│           └── jobs.toml                  ← bundled job catalogue
├── docker-compose.full.yml
├── docker-compose.apps.yml
└── ...
```

Inside the liberty-next container: `./apps/` lands at `/apps:ro`. `LIBERTY_APPS_DIR=/apps/config` redirects every per-section TOML read there.

### Without a license key

`install.sh --apps` and `install-apps.sh` deliberately do NOT set a license — the framework starts in **restricted mode** (connectors flagged `licensed = true` in the wheel's `connectors.toml` aren't loaded). Useful for testing the apps' open parts. Set the key whenever you have it — see below.

---

## Set the license key \{#set-the-license-key\}

The license JWT is set via the SPA, encrypted at rest in `app.toml` with the install master key. **No restart** — the connector registry rebuilds on save, licensed connectors that were previously filtered out reappear immediately.

| Step | What |
|---|---|
| 1. Sign in to the SPA as `admin` (the password printed by `install.sh`). | The default at `http://<host>/` (or your TLS hostname). |
| 2. Open **Settings → App**. | Master settings editor — see [App settings](../framework/build/settings-app.md). |
| 3. Expand the **License** section. | The header badge shows *not set — restricted mode*. |
| 4. Click **Set** (first time) or **Replace** (rotation). | The input opens; the masked-secret pattern keeps the stored ciphertext hidden. |
| 5. Paste the vendor-signed JWT and click **Save**. | The framework encrypts the value with the install master key (`ENC:` on disk), re-verifies the license, rebuilds the connector registry. |
| 6. Refresh the SPA. | The licensed apps (Nomasx-1 / Nomajde) appear in the app switcher; their menus + screens load. |

To verify from the CLI: `curl http://<host>/info | jq '.license.mode'` returns `"full"` (was `"restricted"`).

For a **rotation** later (license expired, customer change, etc.), repeat with **Replace**. The masked-secret pattern means the old value is preserved if you accidentally save with the field empty — `clear` requires explicitly clicking *Replace* then leaving the input blank.

The env-var path (`LIBERTY_LICENSE_KEY` referenced from `app.toml`) still works as a fallback — see [License key](../framework/build/secure/license-key.md) for the full matrix.

---

## Verify the install

| Check | How |
|---|---|
| `liberty-next` is healthy | `docker compose ps liberty-next` shows `healthy`. |
| Apps are loaded | `curl http://localhost/info` shows `screens.apps` includes `nomasx1` / `nomajde`. |
| License is active | Same response: `license.mode` is `full` (not `restricted`). |
| SPA shows the apps | Open `http://localhost/` — the app switcher lists *Nomasx-1* and *Nomajde*. |
| Bundled jobs are in the catalogue | Open *Nomaflow → Catalogue* — `deploy-databases`, `nomasx1-init-db`, `nomasx1-security-1`, etc. appear (all `enabled = false` until you toggle them). |

---

## Provision the application databases — the `deploy-databases` job

The wheel install dropped the config + the plugin code in place. The next step is to **create the application databases** Nomasx-1 and Nomajde write to — `nomasx1` (security, license, SoD, audit) and `nomajde` (replicated JDE control + dictionary tables).

The bundled `deploy-databases` job in `jobs.toml` does this in one run:

| Step | What it does |
|---|---|
| **1. `create-roles-and-databases`** | Creates the application login roles + per-target Postgres databases on the framework's `default` pool (the bundled Postgres). Idempotent — skips what already exists. |
| **2. `init-schema-nomasx1`** | Runs the Nomasx-1 schema bootstrap on the freshly-created `nomasx1` database. Idempotent. |

Run it once from *Nomaflow → Catalogue → `deploy-databases` → ▶ Run now*. The job is `enabled = false` by default in the bundle — don't enable the schedule (it has none), just run it once.

| Detail | What |
|---|---|
| **First-deploy job** | Run **once** after the wheel install. Re-running on an existing install is safe (idempotent) but pointless. |
| **DB rights** | The `default` pool must reach a Postgres server with `CREATE DATABASE` + `CREATE ROLE` rights. In the bundled Full layout, the `default` pool points at the bundled Postgres and runs as `liberty` (which is a superuser via the bundled `POSTGRES_USER`). |
| **Output** | The Run detail page lists every role + database created, plus the schema-bootstrap log per table. |

For full job reference (parameters, alternative invocations, recovery), see [Nomaflow → Bundled jobs → deploy-databases](../nomaflow/bundled-jobs.md#deploy-databases).

### Connect Nomasx-1 to a JD Edwards source

Nomasx-1 reads JDE security / license data through a JDBC connector named `jdedwards`. Configure it once via *Settings → Connectors → `jdedwards`*:

| Setting | Value |
|---|---|
| **Pool** | A `jdedwards` pool wired to the JDE database (Oracle in most installs). |
| **Credentials** | A read-only account with `SELECT` on the F* tables Nomasx-1 reads. |
| **Per-environment URL** | One install can swap between JDE environments by editing the JDBC URL — the framework reloads on save. |

Once `jdedwards` is reachable, run the collection jobs (`nomasx1-security-1`, `nomasx1-license-1`, etc.) to populate the Nomasx-1 tables — see [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md) for the full catalogue.

### Load the reference bundle

Nomasx-1 ships with a curated set of **reference rows** — SoD baseline, settings, custom lists. These are loaded by a dedicated job:

```text title="Nomaflow → Catalogue → nomasx1-import-reference → ▶ Run now"
```

The job reads `${LIBERTY_APPS_DIR}/nomasx1-reference.tar.gz` (which lives at `/apps/config/nomasx1-reference.tar.gz` inside the container) and inserts the rows into the matching tables. Safe to re-run — set `replace = true` in *Run with parameters* for a destructive TRUNCATE + INSERT cycle.

See [Bundled jobs → nomasx1-import-reference](../nomaflow/bundled-jobs.md#nomasx1-import-reference) for the parameter reference.

---

## Persistence + restart + backup — what's safe?

| Event | `./apps/` content | DB / pgadmin / portainer data |
|---|---|---|
| `docker compose restart` | safe — bind mount re-attaches | safe — named volumes intact |
| Host reboot | safe — `restart: unless-stopped` brings everything back, mount re-attaches | safe |
| `docker compose down` (no `-v`) | safe — bind mount isn't a Docker volume, `-v` doesn't touch it | safe |
| `docker compose down -v` | safe — `-v` only wipes named volumes | **WIPED** |
| `./install.sh full --reset` | safe — only named volumes are dropped | **WIPED** |
| `./backup.sh` | **included** — `backup.sh` reads `APPS_HOST_PATH` from `.env` and tars `./apps/` alongside the named volumes | included (`pg-data.tar.gz` etc.) |

A backup directory after `./backup.sh` contains:

```text
backups/2026-05-30_170000/
  liberty-config.tar.gz       — framework config (seeded TOMLs the operator edited via UI)
  liberty-apps.tar.gz         — your apps bind mount (when APPS_HOST_PATH is set)
  pg-data.tar.gz              — Postgres data files
  pgadmin-data.tar.gz         — pgAdmin state
  portainer-data.tar.gz       — Portainer state
  .env.snapshot               — env vars + secrets (mode 0600)
  docker-compose.*.yml        — compose files in use
```

---

## Updating the apps later \{#updating-the-apps-later\}

Drop a new wheel and re-run:

```bash
./install-apps.sh ./liberty_apps-7.0.2-py3-none-any.whl
docker compose restart liberty-next       # picks up the new TOMLs
```

Operator-edited TOMLs in `./apps/config/` are **preserved by default** — the wheel's `liberty-apps install` CLI only overwrites when `--force-config` is passed. If `hot_reload = true` in `app.toml`, you don't even need the restart — file edits are picked up live.

For schema updates (release notes mention new tables), run *Nomaflow → Catalogue → `nomasx1-upgrade-schema-1`* after the restart. Idempotent.

---

## A second Nomasx-1 deployment side by side

For multi-customer hosting — two independent Nomasx-1 instances against two different JDE sources on the same Liberty server — the bundled `nomasx1-init-db` job clones the `nomasx1` app config under a new name (e.g. `nomasx1b`) and provisions a parallel database.

| Step | What |
|---|---|
| **1. Run `nomasx1-init-db`** | Clones the `nomasx1` app config → `nomasx1b`, creates the `nomasx1b` pool + database, runs the schema bootstrap. Refuses if `nomasx1b` already exists. |
| **2. Wire the second JDE source** | Add a `jdedwards2` connector / pool pointing at the second JDE instance. |
| **3. Run the collection jobs per Nomasx-1 instance** | The collection jobs accept a `target_connector` parameter. Run them once per instance (`nomasx1` and `nomasx1b`). |

See [Nomaflow → Bundled jobs → nomasx1-init-db](../nomaflow/bundled-jobs.md#nomasx1-init-db) for parameters + clone semantics.

---

## Vendor wheel vs Packages UI

| Channel | What it carries | Cadence |
|---|---|---|
| **`install-apps.sh` + the wheel** *(this page)* | The **full** licensed bundle — every TOML + every plugin + the reference tarball. Vendor-owned. | Per release. |
| **Settings → Package screen** *(see [Packages](../framework/build/packages.md))* | A **slice** of config — selected screens / menu items / dashboards + their dependency closure. Operator-owned. | Per change. |

Use the wheel for vendor delivery. Use the Package screen for per-customer slices, staging → prod promotions and screen-level upgrades.

The two channels coexist — `install-apps.sh` preserves operator-edited TOMLs by default, so wheel upgrades and Package-screen edits don't fight each other.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Ran `install-apps.sh` before `install.sh` brought the base stack up. | Script aborts with `.env not found`. | Run `./install.sh light` or `./install.sh full` first. |
| Passed `-f docker-compose.full.yml` after `install-apps.sh`. | TOMLs disappear on next `up -d` — the apps overlay was dropped. | Always run `docker compose <cmd>` without `-f` after install. `COMPOSE_FILE` in `.env` is the source of truth. |
| Wheel install succeeded but Liberty doesn't see the new screens. | `curl /info` shows `screens.apps: []`. | The framework wasn't reloaded — `docker compose restart liberty-next` or click *Settings → Reload*. |
| `deploy-databases` job fails with `permission denied for database`. | The `default` pool can't create DBs / roles. | The bundled Postgres's `liberty` user is created as superuser — check `docker compose exec pg psql -U liberty -c '\du'`. If you swapped to a non-superuser, temporarily grant `SUPERUSER`. |
| Connection refused from a Nomasx-1 collection job. | The `jdedwards` connector isn't configured or credentials are wrong. | *Settings → Connectors → jdedwards* → fix the JDBC URL + credentials → test from the UI before retrying the job. |
| `nomasx1-import-reference` errors with *"target application not found"*. | The target app (default `nomasx1`) isn't created in *Settings → Applications*. | Add the application from the UI first (the precheck refuses to start otherwise). |
| Upgraded the wheel but jobs don't show the new schedules. | Nomaflow caches `jobs.toml`. | `docker compose restart liberty-next` (or click *Settings → Reload*). |
| `./apps/config/connectors.toml` overwritten on wheel upgrade. | Customer edits gone. | Pass `--force-config` ONLY when you want vendor defaults. The default behaviour preserves operator edits. |
| `--apps URL` install fails with download error. | The wheel URL is auth-gated. | Pre-download the wheel and pass the local path: `./install-apps.sh ./liberty_apps-X.Y.Z.whl`. |

---

## What's next

- [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md) — every job in `liberty-apps/plugins/nomaflow/jobs.toml`, when to run, parameters.
- [Packages](../framework/build/packages.md) — the per-slice deployment channel for screens / menu items / dashboards.
- [Installation → Upgrading](./upgrading.md) — upgrading the Liberty framework itself (underneath the apps).
- [Installation → Production](./production.md) — TLS + hardening on top of the install.
