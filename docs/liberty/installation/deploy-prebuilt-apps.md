---
title: Deploy prebuilt apps
description: "Stand up the three NOMANA-IT product apps on a Liberty install — NomaUBL (separate Java service), Nomasx-1 / Nomajde (liberty-apps wheel installer), Nomaflow (delivered alongside Nomasx-1). Covers what each one is, where it lives on disk, the one-line install command and the first-deploy job that provisions the databases."
keywords: [Liberty Framework, prebuilt apps, deploy, install, NomaUBL, Nomasx-1, Nomajde, Nomaflow, liberty-apps, wheel, payload, plugins, deploy-databases, init-schema, preload]
---

# Deploy prebuilt apps

Three NOMANA-IT applications are designed to be **deployed on top of a Liberty install**, not built from scratch. Each ships as a prebuilt bundle the operator drops in place and wires through one or two commands.

| App | Shape | How it reaches the install |
|---|---|---|
| **NomaUBL** | Standalone Java service (its own JAR + wrapper + database). | Not a Liberty plugin — its own install procedure. Liberty optionally links to it for unified navigation. |
| **Nomasx-1** + **Nomajde** | Liberty plugins (Python code under `plugins/nomasx1`) + a full TOML config (`screens.toml`, `menus.toml`, `dashboards.toml`, `dictionary.toml`, etc.). | Delivered as a single **`liberty-apps` wheel**. `pip install` it on the framework host, then run `liberty-apps install`. |
| **Nomaflow** | Built into Liberty Next (the framework's scheduler + workflow engine). The **bundled jobs** that drive Nomasx-1 install and refresh ship inside the **`liberty-apps`** wheel's `plugins/nomaflow/jobs.toml`. | Comes with the same wheel — no separate install. |

This page walks each deployment path. The order to read in is: NomaUBL first (if you need it), then the Nomasx-1 / Nomajde wheel install, then run the bundled jobs to materialise the databases.

---

## NomaUBL — separate Java service

NomaUBL is **not a Liberty plugin**. It runs as its own JVM process, with its own database (Oracle or PostgreSQL), its own web UI on a separate port, its own `nomaubl.sh` / `nomaubl.cmd` wrapper. The integration with Liberty is at the **menu** level only: a Liberty operator can add a menu item that opens the NomaUBL UI in a new tab.

Install procedure: see the dedicated NomaUBL docs.

| Page | What |
|---|---|
| [NomaUBL → Installation → Overview](../../nomaubl/installation/overview.md) | The 5-step install — prerequisites, JAR install, configuration via Settings UI, service supervision, upgrade. |
| [NomaUBL → Installation → Requirements](../../nomaubl/installation/requirements.md) | JDK 17, Oracle or PostgreSQL, ports, optional reverse proxy. |
| [NomaUBL → Installation → Upgrade](../../nomaubl/installation/upgrade.md) | One-command upgrade with rollback. |

The rest of this page focuses on **Liberty plugins** — Nomasx-1, Nomajde and the Nomaflow jobs bundle.

---

## Nomasx-1 / Nomajde / Nomaflow — the `liberty-apps` wheel

The `liberty-apps` wheel carries everything Liberty needs to operate the three integrated apps:

| Carried | What it is | Where it lands on the target |
|---|---|---|
| **`config/*.toml`** | The full app config — `screens.toml`, `menus.toml`, `dashboards.toml`, `dictionary.toml`, `charts.toml`, `connectors.toml`, `theme.toml`. | `${LIBERTY_APPS_DIR}/*.toml` — the directory the framework already reads. |
| **`plugins/nomasx1/`** | Python package — the security collector, license collector, SOD detector, audit-trail reader, materialised-view refresher, schema bootstrap. Callables referenced from `jobs.toml`. | `${LIBERTY_APPS_DIR}/../plugins/nomasx1/` — the framework's plugins folder (sibling of `config/`). |
| **`plugins/nomaflow/jobs.toml`** | The bundled Nomaflow job catalogue — install jobs, daily syncs, weekly refreshes, ad-hoc reset jobs. | `${LIBERTY_APPS_DIR}/../plugins/nomaflow/jobs.toml` — picked up by Nomaflow at next reload. |
| **`config/nomasx1-reference.tar.gz`** | Curated reference rows (SoD baseline, custom lists). Loaded by the `nomasx1-import-reference` job. | Same place — read by the import job. |

### Prerequisites on the target host

| What | Why |
|---|---|
| **Liberty Next is installed and running** | The wheel materialises on top of the framework; it doesn't install the framework. See [Installation → Python server](./python-server.md) or [Docker](./docker.md). |
| **`pip` is available in the framework's venv** | The wheel installs via pip. On Docker installs, the wheel is typically baked into the image at build time. |
| **`LIBERTY_APPS_DIR` is set** | Points at the framework's `config/` dir. The wheel installer materialises the payload into this directory + its sibling `../plugins/`. |
| **A PostgreSQL server reachable from the framework's `default` pool** | The deploy job creates the per-app databases (`nomasx1`, `nomajde`) on this server. Requires `CREATE DATABASE` / `CREATE ROLE` rights — typically `postgres` superuser or an equivalent. |

### Install the wheel

Receive the wheel from NOMANA-IT (e.g. `liberty_apps-0.2.0-py3-none-any.whl`) and install it inside the framework's environment.

```bash title="Python source install"
# in the framework's venv
pip install /path/to/liberty_apps-0.2.0-py3-none-any.whl
```

```bash title="Docker install — bake into the image"
# Add to the framework's Dockerfile (or a child image):
COPY liberty_apps-0.2.0-py3-none-any.whl /tmp/
RUN pip install /tmp/liberty_apps-0.2.0-py3-none-any.whl && rm /tmp/liberty_apps-0.2.0-py3-none-any.whl
```

Verify the install:

```bash
liberty-apps --version
# liberty-apps 0.2.0
```

### Materialise the payload

The wheel ships every config TOML + the Python plugins inside a private `_payload/` folder. The `liberty-apps install` command **copies** those files into the target install's `LIBERTY_APPS_DIR` and its sibling `../plugins/` directory.

```bash
# Target is the framework's config dir — plugins land in its sibling.
liberty-apps install --target $LIBERTY_APPS_DIR
```

The output lists every file:

```text
liberty-apps 0.2.0: materializing payload
  config  → /opt/liberty-apps/config
  plugins → /opt/liberty-apps/plugins
  copy      connectors.toml → /opt/liberty-apps/config/connectors.toml
  copy      dictionary.toml → /opt/liberty-apps/config/dictionary.toml
  copy      menus.toml      → /opt/liberty-apps/config/menus.toml
  copy      screens.toml    → /opt/liberty-apps/config/screens.toml
  copy      charts.toml     → /opt/liberty-apps/config/charts.toml
  copy      dashboards.toml → /opt/liberty-apps/config/dashboards.toml
  copy      theme.toml      → /opt/liberty-apps/config/theme.toml
  copy      nomasx1-reference.tar.gz → /opt/liberty-apps/config/nomasx1-reference.tar.gz
  refresh   plugin nomaflow → /opt/liberty-apps/plugins/nomaflow
  refresh   plugin nomasx1  → /opt/liberty-apps/plugins/nomasx1
done: 8 config file(s) copied, 0 preserved, 2 plugin package(s) refreshed.

next: point liberty-next at this config dir
  export LIBERTY_APPS_DIR=/opt/liberty-apps/config
then create + initialize the app databases (deploy job / liberty-apps initdb).
```

Two install flags worth knowing:

| Flag | Effect |
|---|---|
| **`--dry-run`** | Print what would change without writing. Run this first on an existing install. |
| **`--force-config`** | Overwrite existing `*.toml` files. By default the installer **preserves** them so an operator's UI-saved edits survive a wheel upgrade. Use with care — typically only on a fresh install or after exporting your edits via [Settings → Package](../framework/build/packages.md). |

Plugin code is **always refreshed** — no `--force` needed. The installer assumes plugin code is vendor-owned and replaces the directory wholesale.

### Reload the framework

After the materialisation, Liberty has the new TOMLs on disk and the new Python packages in its plugins folder, but the running process still holds the old config in memory. Reload:

```bash
curl -X POST -H "Authorization: Bearer <superuser-token>" \
     https://<liberty-host>/admin/reload
```

Or from the UI: *Settings → Reload* button.

Once reloaded, the framework boot logs show the loaded apps:

```text
INFO  liberty.config menus loaded for apps: nomasx1, nomajde
INFO  liberty.config screens loaded for apps: nomasx1, nomajde
INFO  liberty.plugins importable from /opt/liberty-apps/plugins
```

The app switcher in the top bar now lists *Nomasx-1* and *Nomajde*.

---

## Provision the databases — the `deploy-databases` job

The wheel install dropped the config and the plugin code in place. The next step is to **create the application databases** Nomasx-1 and Nomajde write to — `nomasx1` (security, license, SOD, audit data) and `nomajde` (replicated JDE control + dictionary tables).

The bundled `deploy-databases` job in `jobs.toml` does this in one run:

| Step | What it does |
|---|---|
| **1. `create-roles-and-databases`** | Creates the application login roles and the per-target databases on the `default` pool's PostgreSQL server (the framework's own DB host). Idempotent — skips roles / databases already present. |
| **2. `init-schema-nomasx1`** | Runs the Nomasx-1 schema bootstrap on the freshly-created `nomasx1` database — every table + materialised view from `models.py`. Idempotent. |

Run it from *Nomaflow → Catalogue → `deploy-databases` → ▶ Run now*. The job is `enabled = false` by default in the bundle — don't enable the schedule (it has none), just run it once.

| Detail | What |
|---|---|
| **First-deploy job** | Run **once** after the wheel install. Re-running on an existing install is safe (idempotent) but pointless. |
| **DB rights** | The framework's `default` pool must reach a Postgres server with `CREATE DATABASE` + `CREATE ROLE` rights. The recommended pattern is to point `default` at a Postgres `postgres` superuser for the deploy run, then later point it at a less-privileged user. |
| **Output** | The Run detail page lists every role and database created, plus the schema bootstrap log per table. |

For full details of the job (parameters, alternative invocations, recovery), see [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md#deploy-databases).

### Connect Nomasx-1 to a JD Edwards source

Nomasx-1 reads JDE security / license data through a JDBC connector named `jdedwards`. Configure it once via *Settings → Connectors → `jdedwards`*:

| Setting | Value |
|---|---|
| **Pool** | A `jdedwards` pool wired to the JDE database (Oracle in most installs). |
| **Credentials** | A read-only account with `SELECT` on the F* tables Nomasx-1 reads. |
| **Per-environment URL** | One install can swap between JDE environments by editing the JDBC URL — the framework reloads on save. |

Once `jdedwards` is reachable, run the collection jobs (`nomasx1-security-1`, `nomasx1-license-1`, etc.) to populate the Nomasx-1 tables — see [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md) for the full catalogue.

### Load the reference bundle

Nomasx-1 ships with a curated set of **reference rows** — SoD baseline, settings, custom lists. These are not part of the schema bootstrap; they're loaded by a dedicated job:

```text title="Nomaflow → Catalogue → nomasx1-import-reference → ▶ Run now"
```

The job reads `${LIBERTY_APPS_DIR}/nomasx1-reference.tar.gz` and inserts the rows into the matching tables. Safe to re-run — set `replace = true` in *Run with parameters* for a destructive TRUNCATE + INSERT cycle.

See [Bundled jobs → nomasx1-import-reference](../nomaflow/bundled-jobs.md#nomasx1-import-reference) for the parameter reference.

---

## Upgrade an existing install

When NOMANA-IT delivers a new `liberty-apps` wheel:

| Step | What |
|---|---|
| **1. Take a config backup** | `cp -r $LIBERTY_APPS_DIR $LIBERTY_APPS_DIR.bak.$(date +%Y%m%d)`. The wheel installer preserves your edits by default but a backup is cheap insurance. |
| **2. `pip install --upgrade <new wheel>`** | Same command, points at the new file. |
| **3. `liberty-apps install --target $LIBERTY_APPS_DIR`** | The installer copies plugin code unconditionally and **preserves existing config files** (your edits survive). New config files in the bundle (e.g. a new dashboard) ARE copied. |
| **4. Use `--force-config` only when you want vendor defaults** | This overwrites your edits. The right way to take selective vendor updates is to export your edits via [Settings → Package](../framework/build/packages.md) before, then apply vendor + your package back. |
| **5. Reload** | `POST /admin/reload`. New screens / dashboards / jobs are live. |
| **6. Schema upgrade (only if release notes mention DB changes)** | Run *Nomaflow → Catalogue → `nomasx1-upgrade-schema-1`*. Alembic-driven, idempotent. |

The wheel installer never touches the application databases — only the framework's config and plugin directories. Schema changes are always operator-triggered via the `*-upgrade-schema-*` jobs in the bundle.

---

## A second Nomasx-1 deployment side by side

For multi-customer hosting — running two independent Nomasx-1 instances against two different JDE sources on the same Liberty server — the bundled `nomasx1-init-db` job clones the `nomasx1` app config under a new name (e.g. `nomasx1b`) and provisions a parallel database.

| Step | What |
|---|---|
| **1. Run `nomasx1-init-db`** | Clones the `nomasx1` app config → `nomasx1b`, creates the `nomasx1b` pool + database, runs the schema bootstrap on it. The job refuses if `nomasx1b` already exists. |
| **2. Wire the second JDE source** | Add a `jdedwards2` connector / pool pointing at the second JDE instance. |
| **3. Run the collection jobs** | The collection jobs accept a `target_connector` parameter. Run them once per Nomasx-1 instance (`nomasx1` and `nomasx1b`). |

See [Nomaflow → Bundled jobs → nomasx1-init-db](../nomaflow/bundled-jobs.md#nomasx1-init-db) for the parameter shape and the clone semantics.

---

## What goes through this channel vs. the Package screen

| Channel | What it carries | Cadence |
|---|---|---|
| **`liberty-apps` wheel installer** *(this page)* | The **full** licensed bundle — every TOML, every plugin, the reference tarball. Vendor-owned. | Per release (a few per year). |
| **Settings → Package screen** *(see [Packages](../framework/build/packages.md))* | A **slice** of config — selected screens / menu items / dashboards + their dependency closure. Operator-owned. | Per change (daily, on demand). |

Use the wheel for **vendor delivery**. Use the Package screen for **per-customer slices**, **staging → prod promotions**, and **screen-level upgrades** of a curated set without touching anything else.

The two channels are designed to coexist — the wheel preserves operator edits on config files by default, so wheel upgrades and Package-screen edits don't fight each other.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Ran `liberty-apps install` without `LIBERTY_APPS_DIR` set. | `error: no target — pass --target DIR or set LIBERTY_APPS_DIR`. | Set the env var in the framework's environment file / systemd unit / Docker env. |
| Wheel install succeeded but Liberty doesn't see the new screens. | The framework wasn't reloaded — old config still in memory. | `POST /admin/reload` or click *Settings → Reload*. |
| `deploy-databases` job fails with `permission denied for database`. | The framework's `default` pool can't create DBs / roles. | Point `default` at a Postgres superuser for the deploy run; revert afterwards. |
| Connection refused from a Nomasx-1 collection job. | The `jdedwards` connector isn't configured or the credentials are wrong. | *Settings → Connectors → jdedwards* → fix the JDBC URL / credentials → test from the UI before retrying the job. |
| `nomasx1-import-reference` errors with *"target application not found"*. | The target app (default `nomasx1`) isn't created in *Settings → Applications*. | Add the application from the UI first (the precheck refuses to start otherwise). |
| Upgraded the wheel but jobs don't show the new schedules. | Nomaflow's job registry caches `jobs.toml`. | Reload the framework; the bundled `jobs.toml` is re-read at reload time. |
| Tried to ship Nomasx-1 to a brand-new install via the Settings → Package screen instead of the wheel. | Plugin code is missing — every Python-step job fails with `No module named 'nomasx1'`. | Use the wheel for full deliveries; the Package screen is for config slices only. |

---

## What's next

- [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md) — every job in `liberty-apps/plugins/nomaflow/jobs.toml`, what it does, when to run it.
- [Packages](../framework/build/packages.md) — the per-slice deployment channel for screens / menu items / dashboards.
- [Installation → Upgrading](./upgrading.md) — upgrading the Liberty framework itself (underneath the apps).
