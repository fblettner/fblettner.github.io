---
title: Bundled jobs
description: "The Nomaflow job catalogue shipped with the liberty-apps wheel — install / preload / refresh / sync / collection / report / audit jobs that drive Nomasx-1 and Nomajde without the operator writing a single line of TOML. Run from Nomaflow → Operations → Jobs → Run now, schedule via the standard scheduler, or trigger from CI."
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
| **Collection** | One job collects everything Nomasx-1 needs for one or several applications: JD Edwards security, segregation of duties, licences, Object Usage Tracking, and optionally the directory, the activity log, the Oracle database properties and the cross reference. | [Collection job](#collect) |
| **Reports** | The two audit reports, rendered every month and mailed to the auditors. | [Report jobs](#reports) |
| **Audit trail** | LogMiner-driven change capture from the audit-source DB. | [Audit-trail jobs](#audit-trail) |
| **Maintenance** | Materialised-view refresh, cross-reference dump, configuration versions purge. | [Maintenance jobs](#maintenance) |

All bundled jobs ship with **`enabled = false`** — they appear in the catalogue but don't fire automatically. The operator enables a schedule (or runs them on demand) once the install is wired.

---

## At a glance

<svg viewBox="0 0 1320 448" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfbj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfbj-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfbj-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfbj-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="408" rx="14" fill="url(#nfbj-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Jobs</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">nomaflow — scheduled ETL + task jobs</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="108" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="268" y="108" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">☆</text>
  <text x="284" y="108" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Main jobs</text>
  <text x="344.4" y="108" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">4</text>
  <rect x="240" y="118" width="840" height="30" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="137" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <text x="440" y="137" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Daily sync of JDE control + dictionary tables</text>
  <text x="660" y="137" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="750" y="137" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">30 2 ∗ ∗ ∗</text>
  <rect x="860" y="124" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="136.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">disabled</text>
  <text x="942" y="137" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="137" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="137" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="137" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="137" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="148" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="167" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <text x="440" y="167" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Collect everything for one application</text>
  <text x="660" y="167" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="750" y="167" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Manual only</text>
  <rect x="860" y="154" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="166.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">disabled</text>
  <text x="942" y="167" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="167" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="167" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="167" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="167" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="178" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="197" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1-report-licences</text>
  <text x="440" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Monthly licence audit report (PDF)</text>
  <text x="660" y="197" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="750" y="197" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 6 1 ∗ ∗</text>
  <rect x="860" y="184" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="196.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">disabled</text>
  <text x="942" y="197" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="197" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="197" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="197" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="197" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="208" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="227" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1-report-security-sox</text>
  <text x="440" y="227" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Monthly security &amp; SoD assessment (PDF)</text>
  <text x="660" y="227" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="750" y="227" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 6 1 ∗ ∗</text>
  <rect x="860" y="214" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="226.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">disabled</text>
  <text x="942" y="227" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="227" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="227" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="227" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="227" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="248" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="266" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="268" y="266" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">nomasx1</text>
  <text x="317.2" y="266" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">15</text>
  <rect x="240" y="284" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="302" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="268" y="302" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">nomajde</text>
  <text x="317.2" y="302" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">9</text>
  <rect x="240" y="320" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="338" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="268" y="338" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Framework</text>
  <text x="328.4" y="338" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="348" width="840" height="30" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="367" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">config-versions-purge</text>
  <text x="440" y="367" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Purge old configuration versions</text>
  <rect x="658" y="355" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="687.0" y="366.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="750" y="367" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 3 ∗ ∗ ∗</text>
  <rect x="860" y="354" width="72" height="18" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="896" y="366.5" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">enabled</text>
  <text x="942" y="367" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="367" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="367" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="367" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="367" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="378" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="397" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">deploy-databases</text>
  <text x="440" y="397" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">First-deploy database provisioning</text>
  <text x="660" y="397" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="750" y="397" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Manual only</text>
  <rect x="860" y="384" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="396.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">disabled</text>
  <text x="942" y="397" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="397" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="397" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="397" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="397" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shipped jobs</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the liberty-apps package</text>
  <line x1="200" y1="117.0" x2="252" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfbj-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One group per application</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Nomasx-1, Nomajde, demo…</text>
  <line x1="200" y1="247.0" x2="240" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfbj-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Switched off</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enable once the install is wired</text>
  <line x1="1120" y1="127.0" x2="932" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfbj-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run now</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens Run with parameters</text>
  <line x1="1120" y1="227.0" x2="942" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfbj-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A framework job, on</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">config-versions-purge, 03:00</text>
  <line x1="1120" y1="317.0" x2="896" y2="363" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfbj-arrow)"/>
</svg>

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
| `target_connector` | `nomasx1` | The connector to **write to**. Override for a parallel install (`nomasx1-clone`). |
| `target_schema` | `nomasx1` | The schema name inside the target connector. |

Overrides at run time: **Run now** on the job's line opens *Run with parameters*. Per-schedule overrides: set them on the `[[jobs.schedules]]` block in your override `jobs.toml`.

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

**One-time setup of a parallel Nomasx-1 deployment.** Clones the existing `nomasx1` app configuration under a new name (`nomasx1-clone`) — refuses if the target already exists — and creates the Nomasx-1 schema on the database of that cloned application. Used for multi-tenant hosting (one Liberty install serving two independent customer-data sets).

| Step | Callable |
|---|---|
| `clone-app` | `liberty.web.clone:clone_app_step` — duplicates the source app's screens / menus / connector binding under the new name + pool. |
| `init-schema` | `nomasx1.db:init_schema` — schema bootstrap on the new DB. |

**Parameters**

| Key | Default | What |
|---|---|---|
| `source_app` | `nomasx1` | The app to clone from. |
| `new_app` | `nomasx1-clone` | The new app's name. Will become the menu / screens / connector name. |
| `new_pool` | `nomasx1-clone` | The new pool name to wire under the cloned connector. |
| `target_connector` *(init-schema step)* | `nomasx1-clone` | The connector of the cloned application: keep it equal to `new_app`. |

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

**When to run** — the server's upgrade (`./liberty upgrade`, or `liberty-admin migrate` — see the [CLI](../references/cli.md)) applies the same migrations after every upgrade of the framework or of the applications; the job is the way to run them from Nomaflow, for example when a release adds a table such as the inventory of user defined objects. Pair with a database backup; the migrations are forward-only.

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

### `nomasx1-roles` \{#nomasx1-roles\}

**Create or refresh the predefined roles of Nomasx-1, as shipped.** The same four roles can be added one by one under Access → Roles → *Add a predefined role…* (see [Predefined roles](../framework/build/secure/roles-and-permissions.md#predefined)). Running the job again gives a role changed in Access its shipped rights back; users are not touched.

| Role | Grants |
|---|---|
| `nomasx1_auditor` | *Auditor* — reads everything and runs the two audit reports; the monthly reports are mailed to it. Changes no setting. |
| `nomasx1_security_officer` | *Security officer* — security and segregation of duties in read and change, with their settings, the security collection and its report; the rest in read. |
| `nomasx1_licence_manager` | *Licence manager* — licences and database in read and change, with the licence settings, the licence collection and its report; the rest in read. |
| `nomasx1_admin` | *Administrator* — everything in the application, its settings included; the job also gives it every `nomasx1-*` job. |

Run it once after the install, then assign the roles to users under **Liberty Next → Administer → Access**. Idempotent; shipped disabled.

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

**Load a curated Nomasx-1 reference bundle into `target_connector`.** Operator must create the target application in *Nomasx-1 → Settings → Global → Applications* first — the import precheck refuses to start otherwise. Set `replace = true` for a destructive TRUNCATE-then-INSERT cycle.

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

**Schedule** — `30 2 * * *` (02:30 daily, Europe/Paris timezone in the bundle). `enabled = false` by default — enable it from its line on the Jobs page once `jdedwards` is wired and the first run succeeded as a manual ▶ Run now.

**Retry / alerts** — 2 retry attempts, alert when the run exceeds 120 minutes.

---

### `nomajde-remerge-security` \{#nomajde-remerge-security\}

**Re-merge the JDE security (F00950 / F00950W / F9006) of every parent role affected by a change captured in the active draft package.** Driven by the `nomajde.security:j_remerge_security` plugin with `scope = "package"`.

This job — and its `-all` sibling — solves the JDE-specific problem that role security is **derived** from a tree of parent → child role assignments. Changing a child role's permissions only affects production once every parent that includes it has been re-merged. Doing that by hand on a wide change is tedious and error-prone; the job walks the change package, derives the impacted parents from the captured writes, and re-runs the merge for each.

| Step | Callable |
|---|---|
| `REMERGE_SECURITY` | `nomajde.security:j_remerge_security` — reads the active draft package, derives the impacted parent set via the anchored `F00926` role queries, re-merges F00950 / F00950W / F9006 per parent. |

**Parameters**

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

**Re-merge the JDE security of every parent role in the system, regardless of recent changes.** Same plugin as above (`nomajde.security:j_remerge_security`) but with `scope = "all"`.

| Step | Callable |
|---|---|
| `REMERGE_SECURITY_ALL` | `nomajde.security:j_remerge_security` with `scope = "all"`. |

**When to run** — once after a clean import of the JDE security tables (`F00950` / `F00926` from a fresh extract), or as a recovery step after a known-bad merge. Not scheduled by default; not idempotent in the trivial sense (re-running on a stable system is a no-op data-wise but writes the same rows again, which can take minutes on a large JDE install).

For a partial re-merge — only the parents affected by *this* change — use `nomajde-remerge-security` (`scope = "package"`).

---

## JD Edwards monitoring and AIS jobs \{#nomajde-jde\}

Jobs that reach the JD Edwards servers themselves: Server Manager for the health of the instances, the AIS server for reports and data.

### `nomajde-jde-health` \{#nomajde-jde-health\}

**Health check of the JD Edwards servers through Server Manager.** The `nomajde.monitoring:health_check` step asks the `jde_server_manager` API connector for the instances (`instancesinfo`), runs Server Manager's health check (`health`) on every running enterprise, web and REST server, and writes one row per instance to the `jde_health` table of the Nomajde database. The rows feed [Monitoring → JDE Health Check](../nomajde/monitoring/jde-servers.md) and the overview tiles.

| Parameter | Default | What |
|---|---|---|
| `checks` | `UBE, BSFN, Port Test, Login, Interactive App, OVR` | The Server Manager checks that count; blank = all of them. |
| `groups` | blank | JSON `{"<host>-<enterprise server>": ["<host>-<instance>", …]}` — an enterprise server down or unhealthy fails its instances without checking them; when set, only the instances listed are monitored. |
| `auto_stop` | `false` | Stops a running instance that failed (`stopinstance`), and the running instances of a failed enterprise server. |
| `keep_days` | `30` | Rows older than this are removed at each run. |

**Schedule** — `*/5 * * * *` (Europe/Paris), `enabled = false`: set the Server Manager address with its account (`jde_admin`) and its password on the `jde_server_manager` pool in **Liberty Next → Administer → Pools**, then enable the job. *Nomajde → Jobs → Check the JDE servers* runs it on demand.

**Alerts** — the run fails when an instance did not pass (`failed`, `down` or `error`), after writing the rows; `on_failure` alerts are on.

---

### `nomajde-platform-reading` \{#nomajde-platform-reading\}

**Read the platform ahead of time.** Each step runs one reading of [Platform synthesis](../nomajde/synthesis.md) and its pages and keeps the answer, so those pages open at once with the moment of the reading; their *Read again* still reads live. Steps: `ARCHITECTURE`, `SERVERS`, `PERFORMANCE`, `DATABASE_INSTANCE`, `DATABASE_TABLESPACES`, `DATABASE_REDO`, `DATABASE_ACTIVITY`, `DATABASE_SESSIONS`, `DATABASE_OBJECTS`, `DATABASE_SIZE`, `CAPACITY` (30 days), `HISTORY` (90 days), `SIZES`, `PROPOSALS`. A step that fails does not stop the others. Read-only on JD Edwards.

**Schedule** — `0 6 * * *` (Europe/Paris), `enabled = false`: enable it so that the first person to open the pages in the morning does not wait.

---

### `nomajde-ais-report` \{#nomajde-ais-report\}

**Run a JD Edwards report (UBE) through AIS and wait until it is done.** Step `nomajde.ais_steps:j_ais_report` over the `ais_connection` connector.

| Parameter | Default | What |
|---|---|---|
| `report` | — | The report to run, e.g. `R0010P`. Asked at launch, required. |
| `version` | `XJDE0001` | The version. |
| `queue` | blank | The job queue; blank = the default queue. |
| `po_values` | blank | Processing options by id, JSON: `{"1": "20261029"}` (dates `yyyyMMdd`). |
| `wait` | `true` | Waits for the end of the report. |
| `timeout_seconds` | `3600` | The run fails when the report is still running after this delay. |

The run fails when the report ends in error. The log gives the job number, the server and the final status. Run it by hand with **Run with parameters**, or copy it with fixed parameters and a schedule.

---

### `nomajde-ais-export` \{#nomajde-ais-export\}

**Export a JD Edwards table or business view to an xlsx file.** Step `nomajde.ais_steps:j_ais_export`: browses the table or view through AIS and writes `<run>-<name>.xlsx` among the files of the run, the headers being AIS's column titles. The file is downloaded from the run detail, and a `send` step sends it to whoever started the run — in the portal, and by e-mail when the account has an address. A scheduled run has no such person: add recipients to the `send` step for it.

| Parameter | Default | What |
|---|---|---|
| `table` / `view` | — | The table (`F0101`) or the business view to export — one of the two. |
| `columns` | blank | Data items separated by commas (`AN8, ALPH`; `F4102.LITM` for a view's column); blank = every column. |
| `conditions` | blank | JSON: `{"AT1": "C"}` (equals) or `[["AN8", ">=", 500]]`. |
| `max_rows` | `5000` | The row limit; `0` = no limit. The log warns when JD Edwards holds more rows. |
| `filename` | blank | The file name; blank = the table or view name. |

---

### The AIS steps \{#ais-steps\}

The `nomajde.ais_steps` entry points appear in the job editor's callable picker for a `python` step and in the list of the `call_plugin` screen action. All use the `ais_connection` connector.

| Entry point | Does |
|---|---|
| `j_ais_report` | Runs a report / version, on a queue, with processing options; waits for its end. |
| `j_ais_export` | Exports a table or a view to an xlsx file of the run. |
| `j_ais_count` | Counts the rows of a table or a view matching conditions. |
| `j_ais_bsfn` | Calls a business function with its parameters; returns its output values. |
| `j_ais_orchestration` | Runs an orchestration with its inputs; returns its response. |
| `j_ais_scheduler` | Starts or stops the JD Edwards scheduler of an environment (`action = start` / `stop`). |
| `j_ais_form_flow` | Plays a sequence of steps on JD Edwards forms in one session: the first opens a form, the next act on that form or the one on top; `{{name}}` in a step is replaced from `values`. Returns the last form's fields and rows, and the state after each step. |
| `j_ais_grid_row` | Adds, changes or deletes **one** row of a form's grid (`operation = add` / `change` / `delete`). The row is looked for first (`find`, on the filter line): nothing is done unless exactly one row is found — none, for an add. `cells` gives the grid values; the buttons are the form's control ids. |
| `j_ais_record` | Adds, changes or deletes **one** record of an application whose list opens another form to edit it: found in the list form, opened with its button, `edit_form` filled (`fields`) and saved. Nothing is done unless exactly one record is found; `on_warning = refuse` saves nothing on a warning. |
| `j_ais_tests` | Plays a non-regression test suite — the step of the [`nomajde-jde-tests`](#nomajde-jde-tests) job. |

Conditions, processing options, parameters, inputs, steps and field values are given as TOML tables in the job, or as JSON text when typed in **Run with parameters** or an action's parameters. An empty text means *not set*. On an AIS error, the step fails with AIS's own message.

---

### `nomajde-jde-tests` \{#nomajde-jde-tests\}

**Plays a test suite on JD Edwards** and fails when a case fails or differs from the reference. Step `tests` — `nomajde.ais_steps:j_ais_tests`, through the suite's own connector: `ais_connection` for the AIS suites, `jde_security` for the security suite.

| Parameter | Default | What |
|---|---|---|
| `suite` | `smoke` | The suite to play — a list of the suites in **Run with parameters**. |
| `mode` | `compare` | `compare` with the reference, or `record` it. |
| `only` | blank | Only these cases (ids separated by commas); blank = all. |
| `allow_writes` | `no` | `yes` plays the cases that write on JD Edwards; otherwise they are skipped. |
| `fail_on_change` | `true` | A case that differs from the reference fails the run. |

Shipped switched off, without a schedule. See [Nomajde → Tests](../nomajde/tests.md#job).

---

### `nomajde-upgrade-load-release` and `nomajde-upgrade-collect` \{#nomajde-upgrade\}

The two steps of the [upgrade analysis](../nomajde/upgrade/analysis.md#steps); JD Edwards is only read.

| Job | Steps | What |
|---|---|---|
| `nomajde-upgrade-load-release` | `tables` (creates the tables when missing), `load` (`file_load`), `dates` | Loads Oracle's object list of a release or an update — the Excel file Oracle publishes — under a name (`release`, e.g. `UN9`). A list loaded again under the same name replaces it. The file is given when the job is run. |
| `nomajde-upgrade-collect` | `collect` | Reads the customer's objects of a path code, compares them with an object list and says what is to retrofit, how hard and for how many days. What was decided on an object is kept from one run to the next. |

Parameters of `nomajde-upgrade-collect`:

| Parameter | Default | In **Run with parameters** | What |
|---|---|---|---|
| `path_code` | `PD920` | *Path code the upgrade starts from* | The path code read. |
| `release` | blank | *Object list to compare with (its name; blank = none)* | The object list loaded by `nomajde-upgrade-load-release`. |
| `current_release` | blank | *Object list the customer already runs (optional: only what changed after it counts)* | An object then counts as updated only when Oracle changed it after that list. |
| `central_objects` | blank | *Central objects schema, when not the pool's (PD920)* | The schema of the path code's central objects. |
| `nomasx1_apps_id` | blank | *JDE of nomasx1 to read: usage kept, cross reference, UDOs (blank: the only one)* | The Nomasx-1 application that holds the same JD Edwards — needed only when Nomasx-1 holds several. |
| `nomasx1_connector` | `nomasx1` | — | The Nomasx-1 database; blank = Nomasx-1 is not read. |
| `usage` | `true` | — | An object's last use is the latest known by Object Usage Tracking, the submitted jobs and the usage Nomasx-1 kept. |
| `cross_reference` | `true` | — | The links between the customer's objects come from JD Edwards' cross reference **and** from the one Nomasx-1 builds ([`nomasx1-xref`](#nomasx1-xref)). |
| `udos` | `true` | — | The user defined objects that sit on or use an object the upgrade touches are listed and counted on each object — the inventory written by the `JDE_UDO` step of Nomasx-1. |

---

## Collection job \{#collect\}

### `nomasx1-collect-all` \{#nomasx1-collect-all\}

**Collect everything Nomasx-1 needs for an application, in order**, then refresh the materialised views once at the end.

| Family | Steps | On by default |
|---|---|---|
| JD Edwards security | `JDE_OBJECTS`, `JDE_OBJECTS_VERSIONS`, `JDE_SEC_OBJECTS`, `JDE_SEC_MENUS`, `SECURITY_USERS`, `SECURITY_USERS_DATA`, `SECURITY_ROLES`, `SECURITY_ASSIGNMENTS`, `JDE_TASKS`, `JDE_MENUS`, `SECURITY_MENUS`, `SECURITY_RIGHTS_*` (menus, applications, actions, per user, audit) | Yes |
| Segregation of duties | `SOD_CONFLICT_DETAILS`, `SOD_CONFLICT_SUMMARY` — the matrix of *Settings → Segregation of duties* against the security just collected | Yes |
| Licences | `LICENSE_JDE_EMPLOYEES`, `LICENSE_JDE_USERS` | Yes |
| Object Usage Tracking | `LICENSE_JDE_OUT`, `LICENSE_JDE_OUT_OBJECTS`, `LICENSE_JDE_OUT_USERS`, `LICENSE_JDE_OUT_PURGE` | Yes |
| Directory | `SECURITY_LDAP` — the LDAP / Active Directory set in *Settings → LDAP* | No |
| Activity log | `SECURITY_ACTIVITY_LOG` | No |
| Oracle database | `DB_ORA_PROPERTIES`, `DB_ORA_OPTIONS`, `DB_ORA_FEATURES`, `DB_ORA_PARTITIONS`, `DB_ORA_LICENSES` | No |
| Cross reference | `JDE_XREF_APPS`, `JDE_XREF_REPORTS`, `JDE_XREF_SPECS` — applications, reports, business views | No |
| User defined objects | `JDE_UDO` — the inventory of the user defined objects (F9860W, F9861W) and what each one names — composite pages, E1 pages, orchestrations and their steps, service requests, notifications, CafeOne layouts, One View reports, searches, processes, form extensions, watchlists; needs **JDE_UDO_OL** in *Settings → Global → JD Edwards* | No |
| Views | `REFRESH_VIEWS` | Yes |
| Kept answers | `KEEP_SOD_REVIEW`, `KEEP_WHAT_TO_FIX`, `KEEP_LICENSING_REVIEW` — prepare the answers of the [Segregation of duties review](../nomasx1/sod-review.md), [What to fix](../nomasx1/security-analysis.md) and the [Licensing review](../nomasx1/licensing-review.md), so they open at once; a failure there never fails the collection | Yes |

**Presets**

| Preset | Runs |
|---|---|
| **Security and SoD** | The security and the segregation of duties — the licence and OUT steps off. |
| **Licences** | The licences and OUT — the security and SoD steps off. |
| **Everything** | Every step, the directory, the activity log, the database and the applications' cross reference (`JDE_XREF_APPS`) included; the other cross-reference steps and `JDE_UDO` stay off — the [`nomasx1-xref`](#nomasx1-xref) job runs them. |

**Composite pages and E1 pages** — `SECURITY_MENUS` reads, for the applications flagged *E1 Composite* / *E1 Pages*, everything a composite page or an E1 page lets a user run: the application or report a tile opens, the forms shown in its panes, the tasks under a landing page's menu, the applications and reports an E1 page's code names. These access paths count in the rights, the segregation of duties and the licence figures of the collection.

**Applications** — the job offers the applications of *Nomasx-1 → Settings → Global → Applications* as checkboxes, with **All**. It runs once per application ticked, one after the other. On a schedule or in a preset, `apps_id = "all"` collects every application at each fire.

**Params** — `source_connector = jdedwards`, `target_connector = nomasx1`. Two attempts on failure; an alert after 90 minutes.

**Menu** — *Nomasx-1 → Jobs → Collect security and SoD* and *Collect licences* run the two presets. See [Nomasx-1 jobs](../nomasx1/jobs.md).

**When to run** — daily on an active install, with a schedule on a preset: *Security and SoD* every night, *Licences* weekly.

---

## Report jobs \{#reports\}

### `nomasx1-report-licences` and `nomasx1-report-security-sox` \{#nomasx1-reports\}

**Render an audit report and mail it.** A [`report` step](./steps.md#report) renders the PDF — the [licence audit](../nomasx1/reports/audit-licences.md) or the [Security & SoD assessment](../nomasx1/reports/security-sox.md) — for one application; a [`notify` step](./steps.md#notify) sends it to the `nomasx1_auditor` role with the file attached.

| Parameter | Use |
|---|---|
| **Applications** | One or several applications, or **All** — one report per application. |
| **Language** | `fr` or `en`. |

**Schedule** — the 1st of each month at 06:00 (Europe/Paris); shipped disabled. Enable it once the e-mail account is set in [Notifications](./notifications.md#smtp).

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

### `nomasx1-audit-trail-purge-values-1` \{#nomasx1-audit-trail-purge-values-1\}

**Purge the audit-trail values to reclaim space.** Deletes rows of `AUDIT_TRAIL_VALUES` — the field-level before / after values the Audit Lookup screen filters on. The captured statements (`AUDIT_TRAIL_QUERY`) are kept, so any period can be rebuilt later with [`nomasx1-audit-trail-rebuild-values-1`](#nomasx1-audit-trail-rebuild-values-1).

| Step | Callable |
|---|---|
| `AUDIT_TRAIL_PURGE_VALUES` | `nomasx1.audit_trail:j_audit_trail_purge_values` |

**Params** — standard shape, plus:

| Param | Default | Meaning |
|---|---|---|
| `older_than_days` | `0` | `0` or less: delete every value of the application. More than `0`: delete only the values whose statement is older than that number of days. |
| `table` | `""` | Limit the purge to one table. Empty: every table. |

Records the number of value rows deleted.

**When to run** — on demand, when the values table grows too large. Not scheduled.

---

### `nomasx1-audit-trail-rebuild-values-1` \{#nomasx1-audit-trail-rebuild-values-1\}

**Rebuild the audit-trail values of a table and a period** by parsing again the statements kept in `AUDIT_TRAIL_QUERY` — after a purge, when value-level analysis is needed again. The audited columns set per table are applied, so the rebuilt values match what live capture would have written.

| Step | Callable |
|---|---|
| `AUDIT_TRAIL_REBUILD_VALUES` | `nomasx1.audit_trail:j_audit_trail_rebuild_values` |

**Params** — standard shape, plus:

| Param | Default | Meaning |
|---|---|---|
| `table` | `""` | The table to rebuild. Empty: every table. |
| `date_from`, `date_to` | `""` | The period, `YYYY-MM-DD`, end date included. Empty: no bound. |
| `replace` | `true` | Clear the values of the window first, so that running the job twice gives the same result. |

Records the number of value rows written.

**When to run** — on demand, after a purge. Not scheduled.

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

### `nomasx1-xref` and `nomasx1-xref-object` \{#nomasx1-xref\}

**The cross reference of the JD Edwards objects** — applications, reports, views, tables, structures, functions, event rules — written to the Nomasx-1 database.

| Job | Steps | What |
|---|---|---|
| `nomasx1-xref` | `JDE_XREF_APPS`, `JDE_XREF_REPORTS`, `JDE_XREF_SPECS`, `JDE_UDO` | Builds the cross reference: what JD Edwards changed since the last run (`object_id = changed`, the default) or everything (`all`). |
| `nomasx1-xref-object` | `JDE_XREF_OBJECT` | Reads one object again (`object_id`, required: `P01012`, `R0006P`, `F0101`…) — a few seconds. |

Both ask for the JD Edwards source (`apps_id`, a list of the Nomasx-1 applications) in **Run with parameters**. Shipped switched off, without a schedule.

---

### `nomajde-dictionary-refresh` \{#nomajde-dictionary-refresh\}

**Creates the dictionary entries the Explorer models of Nomajde lack**, from the JD Edwards data dictionary (description, type, decimals, UDC lookup), one scan per table; the connectors are rebuilt at the end so the labels show at once. `models` (a list of the models; blank = every model) limits it. Step `refresh` — `liberty.jobs.dictionary:refresh_model_dictionary`.

---

### The sales demo jobs \{#nomademo\}

The `nomademo-*` jobs (create the tables, load the items, companies and sales files, refresh the periods, load the sample files, create the demo accounts, the monthly digest) serve the demo application — see [The sales demo](../framework/demo-app.md#loads).

---

### `nomasx1-xref-dump-object-1` \{#nomasx1-xref-dump-object-1\}

**Diagnostic: dump the raw definition of one JD Edwards object.** Writes to files the decompressed OMW XML of the object's forms (F98751) and the text it references (F98750), to inspect the raw structure — for example a missing tab or control id. Read-only: nothing is written to the target database.

| Step | Callable |
|---|---|
| `JDE_XREF_DUMP_OBJECT` | `nomasx1.xref:j_jde_xref_dump_object` |

**Params** — standard shape, plus:

| Param | Default | Meaning |
|---|---|---|
| `object_id` | `P01012` | The object to dump — set it in *Run with parameters*. |
| `output_dir` | `""` | The folder of the files. Empty: a temporary folder on the server. |

**When to run** — on demand, to analyse a cross-reference gap. Not scheduled.

---

### `config-versions-purge` \{#config-versions-purge\}

**Purge the old configuration versions** kept by the [configuration history](../framework/configuration/config-history.md) — file snapshots and screen bundles. For each file, a version is removed when it is beyond the 20 most recent or older than 90 days; the newest version of each file is always kept, so the history never empties.

| Step | Callable |
|---|---|
| `purge` | `liberty.jobs.maintenance:purge_config_versions` |

**Step arguments** — `max_versions = 20`, `max_age_days = 90`; `0` or less turns that rule off.

Records the number of versions removed. Two attempts in all on failure.

**Schedule** — **enabled**, every day at 03:00 (Europe/Paris).

The size of the stored versions, a dry-run preview of what the job would remove and a run on the spot are on [Monitoring → Retention](../monitoring/retention.md#stores), with the other stores the server keeps.

---

## Scheduling tips

A typical cadence on an active install:

| Time | Job |
|---|---|
| 02:30 | `nomajde-daily-sync` (the shipped schedule). |
| 03:00 | `nomasx1-collect-all`, preset *Security and SoD*, every application. |
| Sunday 04:00 | `nomasx1-collect-all`, preset *Licences*. |
| 1st of the month 06:00 | The two report jobs. |

Audit-trail (`nomasx1-audit-trail-1`) typically runs every 15-60 minutes — a separate cadence from the collection.

The bundled jobs are **enabled = false** out of the box. Set a schedule in the job editor, on the job or on a preset, then switch the job on from its line on the Jobs page. The main ones — the collection, the two reports, the JD Edwards sync — head the list under **Main jobs**.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| A delivered job whose steps were changed is not updated by a wheel upgrade. | The upgrade lists it as kept. | Schedules, presets, alerts and parameter values survive an upgrade on their own; keep the steps as delivered, or mark the job `override = true` — see [Deploy prebuilt apps](../installation/deploy-prebuilt-apps.md#merge). |
| Collection job fails with `No module named 'nomasx1'`. | Plugin code isn't in the framework's plugins path. | Run `liberty-apps install --target $LIBERTY_APPS_DIR` to materialise the payload; reload the framework. |
| `nomasx1-import-reference` fails with *"target application not found"*. | Application not created in *Nomasx-1 → Settings → Global → Applications*. | Create the app in the UI first; the precheck refuses to start otherwise. |
| `deploy-databases` errors with permission denied. | `default` pool can't create DBs / roles. | Temporarily point `default` at a Postgres superuser; revert after the run. |
| Schedule set but job doesn't fire. | The job is disabled (the bundle ships `enabled = false`). | Switch it on from its line on the Jobs page after setting the schedule. |
| Daily sync runs but Nomajde tables remain empty. | The `jdedwards` connector isn't configured (the sync job silently runs zero rows). | *Liberty Next → Data → Connectors → jdedwards* — test the connection from the UI before the next run. |
| Audit trail starts producing thousands of rows per minute. | The job started from SCN 0 — replaying the whole archive log. | Run `nomasx1-audit-trail-reset-scn-1` (default `scn = 0` → next run picks current SCN) to start fresh. |
| Materialised views show stale data after a custom SQL fix. | The collection job's end-of-run REFRESH_VIEWS step didn't run (you bypassed it). | Run `nomasx1-refresh-views` manually. |

---

## What's next

- [Deploy prebuilt apps](../installation/deploy-prebuilt-apps.md) — how the bundle reaches the install in the first place.
- [Nomaflow → Jobs → Catalog](./jobs/catalog.md) — the Jobs page: enabling schedules, running on demand, *Run with parameters*.
- [Nomaflow → Runs → History](./runs/history.md) — the per-run detail page where the bundled jobs' output lands.
- [Nomaflow → Custom Python](./custom-python.md) — how to write your own callables alongside the bundled `nomasx1.*` ones.
