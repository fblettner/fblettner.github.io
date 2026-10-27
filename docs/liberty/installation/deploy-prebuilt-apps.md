---
title: Licensed apps
description: "Install Nomasx-1 and Nomajde on Liberty Next: the licence key, the apps wheel, the application databases created by the installation jobs, the per-entity merge that keeps your changes on every upgrade, and the first connection to the source system."
keywords: [Liberty Next, licensed apps, Nomasx-1, Nomajde, Nomaflow, wheel, liberty apps, install-apps.sh, licence, deploy-databases, import reference, override, merge, --force-config]
---

# Licensed apps

Nomasx-1, Nomajde and their Nomaflow jobs are delivered as one Python wheel, `liberty_apps-<version>-py3-none-any.whl`, and unlocked by a licence key. The framework runs without them; adding them takes one command.

---

## 1 — The licence key \{#set-the-license-key\}

Sign in as a superuser and open **Settings → App → License**. Paste the key you were delivered and save: the key is encrypted with the install's master key and the licensed connectors appear at once, without a restart.

Without a key, the apps install but their licensed connectors stay hidden. `liberty-license status` (in the container: `docker exec -u liberty liberty-next liberty-license status`) shows what the key covers and when it expires — see [Licence key](../framework/build/secure/license-key.md).

---

## 2 — Install the apps \{#install\}

On a Docker install, from `release/`:

```bash
./liberty apps ./liberty_apps-7.0.58-py3-none-any.whl     # or an https:// URL
```

The command:

1. prints the **merge plan** — what will be added, refreshed, kept or removed in the configuration (see [below](#merge));
2. unpacks the wheel into `release/apps/` (`config/`, `plugins/`, `data/`) with the Liberty Next image already on the host — the host needs no Python;
3. adds the apps folder to the recorded compose files and restarts the stack; the folder is mounted on `/apps`, and what **Settings** saves for the apps is written there;
4. runs the **installation jobs** in order:
   - `deploy-databases` — creates the `nomasx1` and `nomajde` roles and databases on the bundled PostgreSQL, then the Nomasx-1 schema;
   - `nomasx1-import-reference` — loads the reference data (Segregation of Duties baseline, settings, lists);
5. applies the pending schema migrations.

To install the apps together with the stack: `./liberty install full --apps ./liberty_apps-….whl`.

On a Python install, the same steps are three commands — see [Python server](./python-server.md#apps).

| Option | Effect |
|---|---|
| `--dry-run` | Prints the merge plan and stops: nothing is written. |
| `--force-config` | Also refreshes the vendor entities you changed without marking them as yours (see below). |

---

## 3 — Connect the source system \{#source\}

The apps read their data from your source system through a pool. Open **Settings → Pools**, fill in the pool the apps expect (`jdedwards` for JD Edwards EnterpriseOne) with a read-only account, test it, then run the collection jobs from **Nomaflow**. The order and the parameters of these jobs are on [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md).

---

## Upgrading the apps — your changes are kept \{#merge\}

A new wheel brings new screens, menu items, dictionary entries, queries and dashboards, while you may have changed some of the delivered ones. The installer compares three versions of every entity — what was delivered last time, what is on the server now, what the new wheel brings — and decides entity by entity:

| Entity | What happens |
|---|---|
| New in the wheel | Added. |
| Delivered, never changed on the server | Refreshed with the new version. |
| Changed on the server | **Kept**, and listed at the end for review. |
| Marked `override = true` (the *Override* switch of the entity's General tab) | Always kept. |
| Created on the server | Always kept. |
| Withdrawn by the vendor | Removed only if it was never changed. |
| Pools and every `ENC:` secret | Always taken from your configuration. |
| `theme.toml` | Always yours. |

What was delivered is recorded under `config/.bundled/`, so the next upgrade knows "never changed" from "changed". The entities kept because they were changed locally are listed at the end of the run: mark them `override = true` to keep them for good, or install again with `--force-config` to take the vendor version.

The apps upgrade together with the framework with `./liberty upgrade --apps <wheel>` — see [Upgrade and rollback](./upgrading.md#apps).

---

## Check the installation \{#verify\}

| Check | Where |
|---|---|
| Apps version | `./liberty status` → `apps bundle` |
| Licence | **Settings → App → License** |
| Apps in the switcher | Nomasx-1 and Nomajde appear at the top of the sidebar |
| Installation jobs | The Nomaflow run history: `deploy-databases` and `nomasx1-import-reference` succeeded |
| Schema up to date | `./liberty status` → `migrations: up to date` |

---

## A second Nomasx-1 side by side \{#second-instance\}

To analyse two source systems separately on one server, the `nomasx1-init-db` job clones the Nomasx-1 configuration under a new name (for example `nomasx1b`) with its own database. See [Bundled jobs → nomasx1-init-db](../nomaflow/bundled-jobs.md#nomasx1-init-db).

---

## Wheel or packages? \{#packages\}

| Channel | Carries | Owned by |
|---|---|---|
| The apps wheel (this page) | The whole product: every configuration file, the Python code, the reference data. | The vendor — one per release. |
| The **Packages** screen | A selection of screens, menu items or dashboards with what they depend on. | You — to move your own changes from test to production. See [Packages](../framework/build/packages.md). |

Both use the same per-entity merge, so a wheel upgrade and a package import never overwrite each other's changes.

---

## Common problems \{#pitfalls\}

| Symptom | Fix |
|---|---|
| The licensed apps are missing from the switcher | Check the licence in **Settings → App → License**; `./liberty doctor` checks that the apps folder is in the recorded compose files. |
| After a manual `docker compose -f … up -d` the install looks empty | The apps folder was left out. Run `./liberty apps <wheel>` again (it changes nothing else) — then keep to `./liberty` commands. |
| `deploy-databases` fails with *permission denied* | The `default` pool needs a role allowed to create roles and databases. On the full layout it is the bundled `liberty` superuser. |
| A new vendor screen did not appear | It was kept because you changed it locally: see the list printed at the end, or install again with `--force-config`. |
| The wheel URL cannot be downloaded | Download it first and pass the local file. |
