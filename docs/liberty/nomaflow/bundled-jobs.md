---
title: Bundled jobs
description: "The Nomaflow job catalogue shipped with the liberty-apps wheel — install / preload / refresh / sync / SOD / audit jobs that drive Nomasx-1 and Nomajde without the operator writing a single line of TOML. Run from Nomaflow → Catalogue → ▶ Run now, schedule via the standard scheduler, or trigger from CI."
keywords: [Nomaflow, bundled jobs, jobs.toml, Nomasx-1, Nomajde, liberty-apps, preload, install, refresh, sync, SOD, audit trail, LDAP, deploy-databases, init-schema, security, license]
---

# Bundled jobs

The **`liberty-apps`** wheel ships a curated catalogue of Nomaflow jobs in `plugins/nomaflow/jobs.toml`. They land in Nomaflow's catalogue automatically after the wheel install + a framework reload — no `[[jobs]]` block to author, no scheduling to wire by hand.

Each job is a thin wrapper over a Python callable shipped in the **`nomasx1`** plugin package (`plugins/nomasx1/`). The bundle keeps the orchestration **declarative** (the `[[jobs]]` block in `jobs.toml`) and the work **imperative** (the callable in Python) — same pattern Liberty uses everywhere.

| Family | Purpose | Read |
|---|---|---|
| **Install** | One-time provisioning of databases + schema. | [Install jobs](#install) |
| **Preload** | Curated reference data export / import — for fresh customer installs or cross-env promotion. | [Preload jobs](#preload) |
| **Sync** | Copy upstream control + dictionary tables to the local Nomajde mirror. | [Sync jobs](#sync) |
| **Security collection** | Read JD Edwards security + LDAP into the Nomasx-1 schema. | [Security collection jobs](#security) |
| **License collection** | Read JDE license / employee / OUT data into the Nomasx-1 schema. | [License collection jobs](#license) |
| **SoD detection** | Run the segregation-of-duties matrix against the collected security data. | [SoD jobs](#sod) |
| **Database properties** | Read Oracle database metadata (options, features, partitioning, licenses). | [Database jobs](#database) |
| **Audit trail** | LogMiner-driven change capture from the audit-source DB. | [Audit-trail jobs](#audit-trail) |
| **Maintenance** | Materialised-view refresh, cross-reference rebuild, SCN reset, schema upgrade. | [Maintenance jobs](#maintenance) |

All bundled jobs ship with **`enabled = false`** — they appear in the catalogue but don't fire automatically. The operator enables a schedule (or runs them on demand) once the install is wired.

---

## How the bundle is delivered

The path of a bundled job from the wheel to the catalogue:

| Step | What |
|---|---|
| **1. Wheel install** | `pip install liberty_apps-*.whl` puts the carried payload inside the framework's site-packages. |
| **2. `liberty-apps install`** | Copies `plugins/nomaflow/jobs.toml` to `${LIBERTY_APPS_DIR}/../plugins/nomaflow/jobs.toml` and `plugins/nomasx1/` to `${LIBERTY_APPS_DIR}/../plugins/nomasx1/`. |
| **3. Reload** | Nomaflow re-reads `jobs.toml`; the framework re-imports the `nomasx1` package; the new jobs appear in the catalogue. |

Full procedure: [Installation → Deploy prebuilt apps](../installation/deploy-prebuilt-apps.md).

### Editing or extending the bundle

The bundled `jobs.toml` is **operator-editable** — it lives in your install's plugins directory after `liberty-apps install`. Add custom jobs by appending `[[jobs]]` blocks; the bundle's vendor jobs stay alongside yours. On the next wheel upgrade, the installer **replaces the file by default**, so commit your local additions to source control or move them to a separate `jobs.toml` next to the bundle's.

The Python callables (`plugins/nomasx1/`) are vendor-owned and refreshed on every wheel upgrade — don't edit them in place.

---

## Common parameters

Most jobs in the bundle share the same parameter shape under `[jobs.params]`:

| Parameter | Default | What |
|---|---|---|
| `apps_id` | `10` | The Nomasx-1 application id the job operates against. Override when running multi-tenant against several `nomasx1` apps. |
| `source_connector` | varies | The connector to **read from** — `jdedwards`, `unused` (for jobs that don't read upstream), `oracle-target` (for DB-introspection jobs). |
| `target_connector` | `nomasx1` | The connector to **write to**. Override for a parallel install (`nomasx1b`). |
| `target_schema` | `nomasx1` | The schema name inside the target connector. |

Overrides at run time: open *Run with parameters* on the job card before ▶ Run now. Per-schedule overrides: set them on the `[[jobs.schedules]]` block in your override `jobs.toml`.

---

## Install jobs \{#install\}

One-time provisioning. Run **once** at customer-stand-up; safe to re-run (idempotent) but pointless.

### `deploy-databases` \{#deploy-databases\}

**First-deploy DB provisioning.** Creates the application login roles and the per-target Postgres databases on the framework's `default` pool, then runs the Nomasx-1 schema bootstrap on the freshly-created database. The companion-step for the Nomajde mirror is created (empty schema — the sync jobs populate it).

| Step | Callable |
|---|---|
| `create-roles-and-databases` | `nomasx1.db:create_databases` — creates the `nomasx1` + `nomajde` roles and databases. `create_roles = true` provisions the login roles too. |
| `init-schema-nomasx1` | `nomasx1.db:init_schema` — runs the Nomasx-1 schema bootstrap on the `nomasx1` DB. |

**Parameters**

| Key | Default | What |
|---|---|---|
| `admin_connector` | `default` | The pool to issue the `CREATE DATABASE` / `CREATE ROLE` statements through. Must have those rights on the Postgres server. |
| `targets` | `["nomasx1", "nomajde"]` | Per-target databases / roles to provision. |
| `create_roles` | `true` | Set `false` if your DBA created the login roles by hand. |
| `target_connector` *(init-schema step)* | `nomasx1` | The freshly-created DB to bootstrap. |

**When to run** — once on a fresh install, right after `liberty-apps install` + reload. The deploy-databases run typically takes 5-30 seconds.

---

### `nomasx1-init-db` \{#nomasx1-init-db\}

**One-time setup of a parallel Nomasx-1 deployment.** Clones the existing `nomasx1` app configuration under a new name (e.g. `nomasx1b`) — refuses if the target already exists — and provisions a parallel database. Used for multi-tenant hosting (one Liberty install serving two independent customer-data sets).

| Step | Callable |
|---|---|
| `clone-app` | `liberty.web.clone:clone_app_step` — duplicates the source app's screens / menus / connector binding under the new name + pool. |
| `init-schema` | `nomasx1.db:init_schema` — schema bootstrap on the new DB. |

**Parameters**

| Key | Default | What |
|---|---|---|
| `source_app` | `nomasx1` | The app to clone from. |
| `new_app` | `nomasx1b` | The new app's name. Will become the menu / screens / connector name. |
| `new_pool` | `nomasx1b` | The new pool name to wire under the cloned connector. |
| `target_connector` *(init-schema step)* | `nomasx1b` | Same as `new_app` by convention. |

**When to run** — once per additional Nomasx-1 instance. For **recurring schema upgrades** after Python model changes, use `nomasx1-init-schema-1` (below) instead — it skips the clone step.

---

### `nomasx1-init-schema-1` \{#nomasx1-init-schema-1\}

**Create any missing Nomasx-1 tables + materialised views on `target_connector`.** Idempotent — safe to re-run after `models.py` changes that add new tables. Does NOT drop columns that disappeared from the model (use `nomasx1-upgrade-schema-1` for that).

| Step | Callable |
|---|---|
| `init-schema` | `nomasx1.db:init_schema` |

**Parameters**

| Key | Default | What |
|---|---|---|
| `target_connector` | `nomasx1` | The DB to add the missing objects to. |

**When to run** — after every wheel upgrade that adds new tables (release notes will flag it).

---

### `nomasx1-upgrade-schema-1` \{#nomasx1-upgrade-schema-1\}

**Apply pending alembic migrations on `target_connector`.** Runs `alembic upgrade head` against the Nomasx-1 schema. Idempotent — no-op when already at head.

| Step | Callable |
|---|---|
| `upgrade-schema` | `nomasx1.db:upgrade_schema` |

**Parameters**

| Key | Default | What |
|---|---|---|
| `target_connector` | `nomasx1` | The DB to upgrade. |

**When to run** — after every wheel upgrade that ships schema deltas (release notes will say so). Pair with a database backup; alembic migrations are forward-only.

---

### `nomasx1-audit-trail-precheck-1` \{#nomasx1-audit-trail-precheck-1\}

**Read-only verification that the audit-source DB has every AUDIT_TRAIL prerequisite.** Checks LogMiner availability, archive-log mode, supplemental-logging settings, and the schema rights the audit-trail collector needs. Reports remediation SQL for any failing check.

| Step | Callable |
|---|---|
| `AUDIT_TRAIL_PRECHECK` | `nomasx1.audit_trail:j_audit_trail_precheck` |

**Parameters**

| Key | Default | What |
|---|---|---|
| `apps_id` | `10` | Nomasx-1 app id. |
| `source_connector` | `unused` | Not used by the precheck — it reads via the audit-source connector configured in the application's settings. |
| `target_connector` | `nomasx1` | Where the precheck report is written. |

**When to run** — once before enabling `nomasx1-audit-trail-1`; the report's remediation SQL goes to your DBA.

---

## Preload jobs \{#preload\}

The curated **reference bundle** ships in `${LIBERTY_APPS_DIR}/nomasx1-reference.tar.gz`. The export job builds the bundle from a source install; the import job loads it into a target install.

### `nomasx1-export-reference` \{#nomasx1-export-reference\}

**Dump the curated Nomasx-1 reference tables to a `.tar.gz` bundle.** The bundle contains `settings_*` + `sod_*` baseline rows (~2k rows, ~35 KB) — the curated reference data Nomasx-1 ships with, suitable for seeding fresh customer installs. Override `output_path` / `source_connector` via *Run with parameters*.

| Step | Callable |
|---|---|
| `export` | `nomasx1.preload:j_export_reference` |

**Parameters**

| Key | Default | What |
|---|---|---|
| `source_connector` | `nomasx1` | The DB to read the reference rows from. |
| `schema` | `nomasx1` | The schema name inside the source connector. |
| `output_path` | `/tmp/nomasx1-reference.tar.gz` | Where to write the bundle. The framework's service user needs write access. |

**When to run** — when curating a vendor release (NOMANA-IT-internal); not part of typical customer ops.

---

### `nomasx1-import-reference` \{#nomasx1-import-reference\}

**Load a curated Nomasx-1 reference bundle into `target_connector`.** Operator must create the target application in *Settings → Applications* first — the import precheck refuses to start otherwise. Set `replace = true` for a destructive TRUNCATE-then-INSERT cycle.

| Step | Callable |
|---|---|
| `import` | `nomasx1.preload:j_import_reference` |

**Parameters**

| Key | Default | What |
|---|---|---|
| `target_connector` | `nomasx1` | The DB to import into. |
| `schema` | `nomasx1` | The schema name inside the target connector. |
| `bundle_path` | `/tmp/nomasx1-reference.tar.gz` | The bundle to load. After `liberty-apps install`, the default bundle lives at `${LIBERTY_APPS_DIR}/nomasx1-reference.tar.gz` — set this parameter accordingly. |
| `replace` | `false` | When `true`, TRUNCATE each target table before INSERT. Use only for a clean re-seed. |
| `target_apps_ids` | `""` | Comma-separated app ids to restrict the import to (e.g. `"10,20"`). Empty = all apps in the bundle. |

**When to run** — once after `deploy-databases`, to seed the SoD baseline + reference settings. The job is safe to re-run with `replace = false` (only adds missing rows).

---

## Sync jobs \{#sync\}

Mirror upstream control / dictionary tables from JD Edwards into the local Nomajde database. Schedule daily — the data they read changes infrequently.

### `nomajde-daily-sync` \{#nomajde-daily-sync\}

**Daily sync of JDE control + data-dictionary tables to Nomajde.** Reads from the configured `jdedwards` connector and overwrites the matching tables in the `nomajde` connector. Each step is a single-table `sql_copy` with `mode = "overwrite"` — full-table refresh per run.

**Tables synced**

| Source (JDE) | Target (Nomajde) | What it carries |
|---|---|---|
| `PS920CTL.F0004` | `nomajde.f0004` | UDC types. |
| `PS920CTL.F0005` | `nomajde.f0005` | UDC values. Trailing whitespace on `DRKY` is trimmed via `strip_both_columns`. |
| `DD920.F9200` | `nomajde.f9200` | Data dictionary master. |
| `DD920.F9202` | `nomajde.f9202` | Data dictionary text. |
| `DD920.F9210` | `nomajde.f9210` | Data dictionary glossary. |
| `OL920.F9860` | `nomajde.f9860` | Object librarian master. |
| `OL920.F9865` | `nomajde.f9865` | Object librarian dependencies. |

**Type coercion**

Each step uses `type_coercion = "jde"` + `decimal_mode = "truncate"` — JDE column types are mapped to standard SQL on the way in (e.g. `JULIANDATE` → `DATE`, `STRING(N)` trimmed to `VARCHAR`), with truncation rather than rounding on decimals.

**Schedule** — `30 2 * * *` (02:30 daily, Europe/Paris timezone in the bundle). `enabled = false` by default — enable from the catalogue card once `jdedwards` is wired and the first run succeeded as a manual ▶ Run now.

**Retry / alerts** — 2 retry attempts, alert when the run exceeds 120 minutes.

---

### `nomajde-remerge-security` \{#nomajde-remerge-security\}

*Added 2026.06.09.*

**Re-merge the JDE security (F00950 / F00950W / F9006) of every parent role affected by a change captured in the active draft package.** Driven by the `nomajde.security:j_remerge_security` plugin with `scope = "package"`.

This job — and its `-all` sibling — solves the JDE-specific problem that role security is **derived** from a tree of parent → child role assignments. Changing a child role's permissions only affects production once every parent that includes it has been re-merged. Doing that by hand on a wide change is tedious and error-prone; the job walks the change package, derives the impacted parents from the captured writes, and re-runs the merge for each.

| Step | Callable |
|---|---|
| `REMERGE_SECURITY` | `nomajde.security:j_remerge_security` — reads the active draft package, derives the impacted parent set via the anchored `F00926` role queries, re-merges F00950 / F00950W / F9006 per parent. |

**Parameters** *(2026.06.09)*

| Key | Default | What |
|---|---|---|
| `apps_id` | `10` | Nomajde application id. |
| `source_connector` | `nomajde` | Where the merged security tables live (the Nomajde mirror that holds the F564* tables). |
| `target_connector` | `jdedwards` | The live JDE database the re-merged rows write back to. |
| `scope` | `package` | `package` → only the parents impacted by the active draft. `all` → every parent (use `nomajde-remerge-security-all` instead). |

**When to run** — as a **post-apply step** on a change package that touches roles or role-to-role assignments. Register the job's id (`nomajde-remerge-security`) on the contributing screen's `Screen.post_apply`; the framework then runs it once on the target after the bundle's rows land. Manual ▶ Run now works too, in which case the active draft on the configured application is used.

The job's diagnostics land in the run log under the `nomajde.*` logger namespace (registered by the plugin) — useful when the merge skipped a parent because its `F00926` row was missing.

**Idempotent** — re-running on the same draft package re-merges the same parents and produces the same rows. Safe to retry after a partial failure.

---

### `nomajde-remerge-security-all` \{#nomajde-remerge-security-all\}

*Added 2026.06.09.*

**Re-merge the JDE security of every parent role in the system, regardless of recent changes.** Same plugin as above (`nomajde.security:j_remerge_security`) but with `scope = "all"`.

| Step | Callable |
|---|---|
| `REMERGE_SECURITY_ALL` | `nomajde.security:j_remerge_security` with `scope = "all"`. |

**When to run** — once after a clean import of the JDE security tables (`F00950` / `F00926` from a fresh extract), or as a recovery step after a known-bad merge. Not scheduled by default; not idempotent in the trivial sense (re-running on a stable system is a no-op data-wise but writes the same rows again, which can take minutes on a large JDE install).

For a partial re-merge — only the parents affected by *this* change — use `nomajde-remerge-security` (`scope = "package"`).

---

## Security collection jobs \{#security\}

Read JD Edwards security data into the Nomasx-1 schema. The shape is a long chain of single-callable steps — one Python function per JDE entity / Nomasx-1 derived table.

### `nomasx1-security-1` \{#nomasx1-security-1\}

**Collect all security data for an application** — Users / Roles / Assignments / Menus / Access. Each step extracts one JDE entity (objects, sec objects, sec menus, etc.) or builds one Nomasx-1 derived table (security_users, security_rights_actions, etc.).

| Family | Steps | What |
|---|---|---|
| JDE entities | `JDE_OBJECTS`, `JDE_OBJECTS_VERSIONS`, `JDE_SEC_OBJECTS`, `JDE_SEC_MENUS`, `JDE_TASKS`, `JDE_MENUS` | Raw extraction from F00950, F0094, F0092, F9012, F9001, F9000. |
| Nomasx-1 catalogs | `SECURITY_USERS`, `SECURITY_USERS_DATA`, `SECURITY_ROLES`, `SECURITY_ASSIGNMENTS`, `SECURITY_MENUS` | Per-app users + roles + role assignments + menu trees. |
| Derived rights | `SECURITY_RIGHTS_MENUS`, `SECURITY_RIGHTS_APPS`, `SECURITY_RIGHTS_ACTIONS`, `SECURITY_RIGHTS_APPS_USERS`, `SECURITY_RIGHTS_ACTIONS_USERS` | Effective rights — by role, by user, on menus / apps / actions. |
| Audit | `SECURITY_RIGHTS_AUDIT` | Audit trail of right grants/revocations. |
| Refresh | `REFRESH_VIEWS` | Materialised-view refresh at the end. |

All steps run sequentially (no parallelism — order matters for the derived tables).

**Standard params** (`apps_id`, `source_connector = jdedwards`, `target_connector = nomasx1`, `target_schema = nomasx1`).

**Retry / alerts** — 2 attempts, long-run alert at 30 minutes.

**When to run** — daily for active installs (read-only against JDE). The first run after a new role / user / right grant in JDE refreshes the Nomasx-1 catalog; until then the UI shows the previous snapshot.

---

### `nomasx1-ldap-1` \{#nomasx1-ldap-1\}

**Collect Active Directory users** through the LDAP / AD connection configured in *Settings → LDAP*. Populates the Nomasx-1 `security_ldap` table that backs the LDAP reconciliation pages.

| Step | Callable |
|---|---|
| `SECURITY_LDAP` | `nomasx1.ldap:j_security_ldap` |

**Params** — standard shape (`source_connector = unused` — the LDAP server is configured separately).

**When to run** — daily, after the LDAP source has been refreshed; or on-demand before a quarterly access review.

---

## License collection jobs \{#license\}

Read JDE license-relevant data — employees, transactional users, Object Usage Tracking — into the Nomasx-1 schema. Drive the *Licenses → JD Edwards* dashboards.

### `nomasx1-employees-1` \{#nomasx1-employees-1\}

**Collect employees from JD Edwards HR modules** — internal + external. Populates the `license_jde_employees` table; refresh the materialised views at the end.

| Step | Callable |
|---|---|
| `LICENSE_JDE_EMPLOYEES` | `nomasx1.license:j_license_jde_employees` |
| `REFRESH_VIEWS` | `nomasx1.security:j_refresh_views` |

**Long-run alert** — 5 minutes.

**When to run** — weekly. The HR data doesn't change daily.

---

### `nomasx1-license-1` \{#nomasx1-license-1\}

**Collect users from JD Edwards tables — transactions only.** Reads who's actually transacted in JDE over the recent window (used as the input for licensable-user counting). Populates `license_jde_users`.

| Step | Callable |
|---|---|
| `LICENSE_JDE_USERS` | `nomasx1.license:j_license_jde_users` |
| `REFRESH_VIEWS` | `nomasx1.security:j_refresh_views` |

**Long-run alert** — 30 minutes.

**When to run** — daily (active installs) or weekly (slower installs). Pair with `nomasx1-employees-1` so transactional users join back to employee records.

---

### `nomasx1-out-1` \{#nomasx1-out-1\}

**Collect Object Usage Tracking from JD Edwards.** Aggregates the OUT data and purges retained rows per the retention defined in *Nomasx-1 → Settings → JDE → OUT retention*. Drives the OUT dashboards (components, users, objects).

| Step | What |
|---|---|
| `LICENSE_JDE_OUT` | Raw OUT extraction from JDE. |
| `LICENSE_JDE_OUT_OBJECTS` | Per-object aggregation. |
| `LICENSE_JDE_OUT_USERS` | Per-user aggregation. |
| `LICENSE_JDE_OUT_PURGE` | Purge rows older than the retention setting. |
| `REFRESH_VIEWS` | Materialised-view refresh. |

**Long-run alert** — 15 minutes.

**When to run** — daily. OUT data accumulates fast; running daily keeps the dashboard relevant and the purge step keeps the DB bounded.

---

## SoD jobs \{#sod\}

### `nomasx1-sod-1` \{#nomasx1-sod-1\}

**Collect Segregation of Duties (SoD) based on the security data and the matrix defined in *Nomasx-1 → Settings → SoD*.** Security data is a prerequisite — run after `nomasx1-security-1`.

| Step | What |
|---|---|
| `SOD_CONFLICT_DETAILS` | Per-user-per-conflict detail rows. |
| `SOD_CONFLICT_SUMMARY` | Aggregated counts driving the SoD dashboard. |
| `REFRESH_VIEWS` | Materialised-view refresh. |

**Long-run alert** — 10 minutes.

**When to run** — daily, scheduled after `nomasx1-security-1` (so the SoD scan sees the freshest assignments). Or on-demand after a major access-review action.

---

## Database jobs \{#database\}

Read Oracle metadata from the JDE-hosting database (or any Oracle target wired as `oracle-target`). Drives the *Database → Oracle* page.

### `nomasx1-database-1` \{#nomasx1-database-1\}

**Collect Oracle database properties.**

| Step | What |
|---|---|
| `DB_ORA_PROPERTIES` | Version, edition, parameters. |
| `DB_ORA_OPTIONS` | Installed options (Spatial, OLAP, RAC, etc.). |
| `DB_ORA_FEATURES` | Feature usage from `DBA_FEATURE_USAGE_STATISTICS`. |
| `DB_ORA_PARTITIONS` | Partitioning usage per schema. |
| `DB_ORA_LICENSES` | Aggregated license-relevant signals (option + feature + partitioning use). |

**Source connector** — `oracle-target` (a connector you configure pointing at the Oracle DB you want introspected). The job won't read from `jdedwards` — by design, so a separate Oracle target can be audited without giving Nomasx-1's JDE connector extra read rights.

**Long-run alert** — 10 minutes.

**When to run** — monthly is typically enough. The data feeding the Oracle dashboards changes slowly.

---

## Audit-trail jobs \{#audit-trail\}

LogMiner-driven change-data capture from the audit-source database — Oracle archive logs. Operate independently of the security / license / SoD jobs.

### `nomasx1-audit-trail-1` \{#nomasx1-audit-trail-1\}

**Capture LogMiner-driven change-data — Audit Trail using Oracle archive logs.**

| Step | Callable |
|---|---|
| `AUDIT_TRAIL` | `nomasx1.audit_trail:j_audit_trail` |

**Source connector** — `unused` here (the audit-source connector is read from the application's settings, not the job's params).

**Long-run alert** — 30 minutes.

**When to run** — typically scheduled hourly or every 15 minutes. Before enabling, run [`nomasx1-audit-trail-precheck-1`](#nomasx1-audit-trail-precheck-1) and fix any reported gaps.

---

### `nomasx1-audit-trail-reset-scn-1` \{#nomasx1-audit-trail-reset-scn-1\}

**Reset the last SCN used by Audit Trail for an application.** Use after a long pause (audit-trail catching up on too much history would be slow) or after switching audit sources. Default `scn = 0` makes the next run pick up the current SCN — i.e. start fresh from "now". Override `scn` via *Run with parameters* to set a specific SCN.

| Step | Callable |
|---|---|
| `AUDIT_TRAIL_RESET_SCN` | `nomasx1.audit_trail:j_audit_trail_reset_scn` |

**Params** — standard shape + `scn = 0` (the default).

**When to run** — on demand. Not scheduled.

---

## Maintenance jobs \{#maintenance\}

### `nomasx1-refresh-views` \{#nomasx1-refresh-views\}

**Refresh materialised views** — speeds up Nomasx-1 queries. All major collection jobs run this at their end, so a dedicated invocation is rarely needed. Useful after a manual SQL data fix or a bulk import.

| Step | Callable |
|---|---|
| `refresh-views` | `nomasx1.db:refresh_views` |

**Params** — `target_connector = nomasx1`.

**When to run** — after a manual data fix; not scheduled.

---

### `nomasx1-xref-1` \{#nomasx1-xref-1\}

**Generate cross-reference for JD Edwards objects.** Builds the JDE_XREF_APPS table that backs the cross-reference views (which app references which object).

| Step | Callable |
|---|---|
| `JDE_XREF_APPS` | `nomasx1.xref:j_jde_xref_apps` |

**Params** — `object_id = "all"` (default — process every object). Override to a specific object id for a targeted rebuild.

**Long-run alert** — 30 minutes.

**When to run** — weekly. XRef data changes slowly; only objects added/modified in JDE matter.

---

### `nomasx1-activity-log-1` \{#nomasx1-activity-log-1\}

**Refresh Activity Log.** Queries every JDE table that has been modified recently and aggregates records for user + date. **Only the modified tables are scanned** — the job tracks per-table watermarks so it doesn't re-read the whole history each run.

| Step | Callable |
|---|---|
| `SECURITY_ACTIVITY_LOG` | `nomasx1.activity_log:j_security_activity_log` |

**Long-run alert** — 15 minutes.

**When to run** — daily.

---

## Scheduling tips

A typical daily cadence on an active install:

| Time | Job |
|---|---|
| 02:30 | `nomajde-daily-sync` (the shipped schedule). |
| 03:00 | `nomasx1-security-1`. |
| 03:30 | `nomasx1-license-1`. |
| 04:00 | `nomasx1-out-1`. |
| 04:30 | `nomasx1-ldap-1`. |
| 05:00 | `nomasx1-sod-1` (after security so it has the freshest assignments). |
| 05:30 | `nomasx1-activity-log-1`. |

Audit-trail (`nomasx1-audit-trail-1`) typically runs every 15-60 minutes — it's a separate cadence from the security / license refresh.

The bundled jobs are **enabled = false** out of the box. Set the schedule per job from *Nomaflow → Catalogue → \<job\> → Schedules tab*, then toggle `Enabled` on the catalogue card.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Bundle's `jobs.toml` overwritten on wheel upgrade — local edits lost. | Custom `[[jobs]]` blocks disappear after `liberty-apps install`. | Keep custom jobs in a separate `jobs.toml` outside the bundle's plugin dir; or back up the file before upgrading. |
| Collection job fails with `No module named 'nomasx1'`. | Plugin code isn't in the framework's plugins path. | Run `liberty-apps install --target $LIBERTY_APPS_DIR` to materialise the payload; reload the framework. |
| `nomasx1-import-reference` fails with *"target application not found"*. | Application not created in *Settings → Applications*. | Create the app in the UI first; the precheck refuses to start otherwise. |
| `deploy-databases` errors with permission denied. | `default` pool can't create DBs / roles. | Temporarily point `default` at a Postgres superuser; revert after the run. |
| Schedule set but job doesn't fire. | Toggle on the catalogue card is OFF (the bundle ships `enabled = false`). | Toggle `Enabled` on the card AFTER setting the schedule. |
| Daily sync runs but Nomajde tables remain empty. | The `jdedwards` connector isn't configured (the sync job silently runs zero rows). | *Settings → Connectors → jdedwards* — test the connection from the UI before the next run. |
| Audit trail starts producing thousands of rows per minute. | The job started from SCN 0 — replaying the whole archive log. | Run `nomasx1-audit-trail-reset-scn-1` (default `scn = 0` → next run picks current SCN) to start fresh. |
| Materialised views show stale data after a custom SQL fix. | The collection job's end-of-run REFRESH_VIEWS step didn't run (you bypassed it). | Run `nomasx1-refresh-views` manually. |

---

## What's next

- [Deploy prebuilt apps](../installation/deploy-prebuilt-apps.md) — how the bundle reaches the install in the first place.
- [Nomaflow → Jobs → Catalog](./jobs/catalog.md) — the catalogue card UI: enabling schedules, running on demand, *Run with parameters*.
- [Nomaflow → Runs → History](./runs/history.md) — the per-run detail page where the bundled jobs' output lands.
- [Nomaflow → Custom Python](./custom-python.md) — how to write your own callables alongside the bundled `nomasx1.*` ones.
