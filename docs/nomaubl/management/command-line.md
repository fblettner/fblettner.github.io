---
title: Command Line
description: "NomaUBL command-line interface — service control via nomaubl.sh, direct modes of the JAR (install, serve, xml, ubl, fetch-import, fetch-status, fetch-single, fetch-all, extract) with every argument and flag explained."
keywords: [NomaUBL, command line, CLI, nomaubl.sh, java -jar, install, serve, xml, ubl, fetch-import, fetch-status, fetch-single, fetch-all, extract, scheduler, JD Edwards, SAP, NetSuite, custom ERP]
---

# Command Line

NomaUBL ships with a complete **command-line interface** that mirrors every operational action available in the web UI — installing an environment, starting the HTTP server, running an XML or UBL processing batch, polling the Plateforme Agréée, extracting from JD Edwards. The CLI is the natural choice for **system installations**, **cron / scheduler integrations**, **CI pipelines** and any **headless environment** without web access.

The CLI applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — although a few subcommands (`extract`, BIP / FTP sources of `fetch-single` / `fetch-all`) are JD-Edwards-specific.

---

## Two ways to invoke

NomaUBL exposes two equivalent layers — a **service-control wrapper** (`nomaubl.sh`) and the **direct JAR modes** (`java -jar nomaubl.jar -…`). The wrapper resolves the configuration file from a short *environment name* and adds `start` / `stop` / `restart` / `status` / `log` operations on top of the JAR.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cli-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="cli-arrow-dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cli-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="cli-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="cli-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="40" y="20" width="200" height="60" rx="10" fill="url(#cli-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="140" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Operator</text>
  <text x="140" y="64" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">cron · CI · interactive</text>
  <rect x="320" y="120" width="280" height="160" rx="14" fill="url(#cli-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="460" y="150" fill="#4a9eff" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">🛠 nomaubl.sh</text>
  <text x="460" y="172" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">environment-based wrapper</text>
  <line x1="345" y1="190" x2="575" y2="190" stroke="#4a9eff" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="460" y="210" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">start · stop · restart</text>
  <text x="460" y="228" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">status · log</text>
  <text x="460" y="252" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">+ short forms of every JAR mode</text>
  <rect x="680" y="20" width="280" height="280" rx="14" fill="url(#cli-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="820" y="50" fill="#4a9eff" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">☕ java -jar nomaubl.jar</text>
  <text x="820" y="72" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">direct modes — full args</text>
  <line x1="705" y1="92" x2="935" y2="92" stroke="#4a9eff" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="820" y="116" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">-install · -serve</text>
  <text x="820" y="135" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">-process</text>
  <text x="820" y="154" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">-fetch-import · -fetch-status</text>
  <text x="820" y="173" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">-fetch-single · -fetch-all</text>
  <text x="820" y="192" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">-extract</text>
  <path d="M 140 80 L 140 200 L 320 200" stroke="#4a9eff" strokeWidth="1.5" fill="none" markerEnd="url(#cli-arrow)"/>
  <line x1="600" y1="200" x2="680" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#cli-arrow)"/>
  <text x="640" y="190" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">resolves config</text>
  <path d="M 240 50 L 680 50" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 4" fill="none" markerEnd="url(#cli-arrow-dim)"/>
  <text x="460" y="42" fill="#94a3b8" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">direct</text>
</svg>

| Layer | When to use |
|---|---|
| **`nomaubl.sh`** *(wrapper)* | Day-to-day operations on a server hosting one or several environments. Manages a PID file per instance, takes the **environment name** instead of the full config path, exposes `start` / `stop` / `restart` / `status` / `log`. |
| **`java -jar nomaubl.jar`** *(direct)* | Shipping NomaUBL inside a container, integrating into a CI pipeline, or any context that already manages process lifecycle. Takes the **absolute path** to `config.json`. |

The wrapper resolves its config from `<script_dir>/<env>/config/config.json` — i.e. the JAR sits next to one or more environment directories, each holding a `config/config.json`.

---

## Service control with `nomaubl.sh`

Lay out the JAR and one environment per service instance, then drive each one by its short name:

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '16px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.7'}}>
  <div style={{opacity: 0.6, marginBottom: '6px'}}>/opt/nomaubl/</div>
  <div style={{paddingLeft: '14px', borderLeft: '1px solid rgba(255,255,255,0.08)', marginLeft: '6px'}}>
    <div>📦 <b>nomaubl.jar</b></div>
    <div>🛠 <b>nomaubl.sh</b></div>
    <div>📂 fonts/ &nbsp;<span style={{opacity: 0.5}}>· shared</span></div>
    <div>📂 images/ &nbsp;<span style={{opacity: 0.5}}>· shared</span></div>
    <div>📂 demo/ &nbsp;<span style={{opacity: 0.5, color: '#4a9eff'}}>· environment</span></div>
    <div style={{paddingLeft: '20px', opacity: 0.85}}>📂 config/ → config.json, xdo.cfg, …</div>
    <div style={{paddingLeft: '20px', opacity: 0.85}}>📂 input/, process/, ubl/, single/, …</div>
    <div>📂 uat/ &nbsp;<span style={{opacity: 0.5, color: '#4a9eff'}}>· environment</span></div>
    <div>📂 prod/ &nbsp;<span style={{opacity: 0.5, color: '#4a9eff'}}>· environment</span></div>
  </div>
</div>

| Subcommand | Effect |
|---|---|
| **`start <env> [port]`** | Spawn `java -jar nomaubl.jar -serve <env>/config/config.json <port>` in the background. Default port is `8090`. The PID is stored in `nomaubl-<env>.pid`; stdout / stderr are appended to `nomaubl-<env>.log`. Refuses to start if the PID file points to a live process. |
| **`stop <env>`** | Send `SIGTERM` to the recorded PID; waits up to 10 s, then `SIGKILL` if still running. Cleans up the PID file. |
| **`restart <env> [port]`** | Convenience: `stop` then `start`. |
| **`status [env]`** | With an env name, reports `running` (with PID) or `not running`. With no argument, lists every `nomaubl-*.pid` and prints the state of each instance — and prunes stale PID files for processes that are no longer alive. |
| **`log <env>`** | Tail the log file (`tail -f nomaubl-<env>.log`). |
| **`upgrade <env>`** | End-to-end upgrade of an existing environment to the JAR currently in place. See [`upgrade`](#upgrade) below. |
| **`backfill-vat <env> <fromDate> <toDate>`** | Rebuild the VAT detail table (`F564234`) for every invoice issued in `[fromDate, toDate]` from the UBL document already kept on each invoice. See [`backfill-vat`](#backfill-vat) below. |

Beyond service control, the wrapper exposes **short forms** of the JAR's processing and synchronisation modes:

| Wrapper command | JAR equivalent |
|---|---|
| `nomaubl.sh process <env> <template> <file\|dir> [type] [flags]` | `java -jar nomaubl.jar -process <env>/config/config.json <template> <file\|dir> [type] [flags]` |
| `nomaubl.sh fetch-import <env>` | `java -jar nomaubl.jar -fetch-import <env>/config/config.json` |
| `nomaubl.sh fetch-status <env>` | `java -jar nomaubl.jar -fetch-status <env>/config/config.json` |
| `nomaubl.sh fetch-single <env> <template> <source> <args…> [type] [flags]` | `java -jar nomaubl.jar -fetch-single …` |
| `nomaubl.sh fetch-all <env> <template> <source> [type] [flags]` | `java -jar nomaubl.jar -fetch-all …` |
| `nomaubl.sh extract <env> <jobNumber> [flags]` | `java -jar nomaubl.jar -extract <env>/config/config.json <jobNumber> [flags]` |
| `nomaubl.sh pdf2xml <input.pdf> <output.xml> [<manifest.xml>]` | `java -jar nomaubl.jar -pdf2xml <input.pdf> <output.xml> [<manifest.xml>]` |
| `nomaubl.sh install <targetDir>` | `java -jar nomaubl.jar -install <targetDir>` |

The remainder of the page describes each direct JAR mode in detail.

### `JAVA_OPTS` — passing JVM flags through the wrapper *(2026.06.02)*

Both wrappers (`nomaubl.sh`, `nomaubl.cmd`) expose a **`JAVA_OPTS`** variable near the top of the file. Anything in it is forwarded to every `java -jar` invocation the wrapper makes — `start`, `process`, `upgrade`, `fetch-*`, `extract`, `install`. Use it for site-wide JVM flags without editing the wrapper's command lines.

```bash title="nomaubl.sh (top of file)"
# JVM flags forwarded to every java invocation. Default: empty.
JAVA_OPTS=""
```

```cmd title="nomaubl.cmd (top of file)"
:: JVM flags forwarded to every java invocation. Default: empty.
set "JAVA_OPTS="
```

The single most common use is pinning the **master encryption key** at a fixed path outside the user profile — typically the same path across every environment on a host:

```bash
JAVA_OPTS="-Dnomaubl.master.key.file=/etc/nomaubl/master.key"
```

This survives a user reboot, a service-user change and `~/.nomaubl-*` clean-up; the system file is the canonical store regardless of which OS account runs the JVM. The same flag works under systemd (set it inside the unit's `Environment=` line) and under Windows NSSM (set it via `nssm set NomaUBL-<env> AppEnvironmentExtra`).

Other common cases:

| Flag | Use |
|---|---|
| `-Xmx8g` | Raise the JVM heap above the default for large batches. |
| `-Dnomaubl.debug.timing=true` | Print per-step timings even when `--no-debug` would otherwise hide them. |
| `-Dfile.encoding=UTF-8` | Force UTF-8 on platforms where the JVM default is something else (rare, but seen on Windows Server). |
| `-Djava.io.tmpdir=/var/tmp/nomaubl` | Steer the temp directory off `/tmp` when memory pressure mounts. |

`JAVA_OPTS` is not visible in the `--help` banner — it's an operator concern, not a CLI flag.

---

## `upgrade <env>` — move an existing environment forward \{#upgrade\}

End-to-end upgrade of an existing environment to the JAR currently in place. Replace `nomaubl.jar` next to the wrapper, run `./nomaubl.sh upgrade <env>`, and the wrapper takes care of every step — service lifecycle, schema, reference data, framework XSL, per-document XSL — and writes a complete report under `${appHome}/upgrade-reports/`. Customer mappings and customer config are kept verbatim throughout.

```bash
./nomaubl.sh upgrade prod                              # auto-detect the current version
./nomaubl.sh upgrade prod --from-version 2026.05.20    # force the baseline manually
```

### `--from-version` — manual baseline *(2026.06.02)*

By default, the upgrade reads the current installed version from the upgrade-history table and applies every migration whose target version is **strictly newer** than what's there. That works for any environment that has been upgraded through `nomaubl.sh upgrade` since the table was added.

For environments that were **hand-patched** ahead of schedule — typically because a hotfix was applied directly to a customer site between official releases — the auto-detected baseline can underestimate what's actually on disk, and the upgrade would re-run migrations the customer has already absorbed. The `--from-version <X.Y.Z>` flag overrides the detection: only migrations whose target version is strictly newer than `<X.Y.Z>` are applied.

```bash
./nomaubl.sh upgrade prod --from-version 2026.05.20    # skip everything up to and including 2026.05.20
```

| Detail | What |
|---|---|
| **Format** | `YYYY.MM.PP` (e.g. `2026.05.20`) — the version string of the release the install is currently on. |
| **Comparison** | Strict `>` — `--from-version 2026.05.20` runs every migration whose target is `2026.05.21` or later. |
| **Scope** | Database schema, reference data and framework XSL are filtered by the baseline. Per-document XSL is always re-merged (the merge is idempotent at the customer-tag level). |
| **Report** | The upgrade report records the supplied baseline in its header so audits can see which version was treated as the start point. |

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="upg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="320" rx="14" fill="url(#upg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">./nomaubl.sh upgrade prod — the steps in order</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · STOP & SNAPSHOT</text>
  <text x="160" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">SIGTERM, wait 10 s</text>
  <text x="160" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">snapshot — last 5 kept</text>

  <rect x="280" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · DATABASE</text>
  <text x="380" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">apply schema deltas</text>
  <text x="380" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">from current version</text>

  <rect x="500" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · REFERENCE DATA</text>
  <text x="600" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">merge new entries</text>
  <text x="600" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">keep customer overrides</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · FRAMEWORK XSL</text>
  <text x="830" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">refresh ubl-common + rules</text>
  <text x="830" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Schematron, XSD</text>

  <line x1="160" y1="170" x2="160" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="380" y1="170" x2="380" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="600" y1="170" x2="600" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="830" y1="170" x2="830" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>

  <rect x="60" y="210" width="420" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="270" y="234" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · PER-DOCUMENT XSL — REWRITE WITH MERGE</text>
  <text x="270" y="250" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">customer TAG_* values kept · NOMAUBL_OVERRIDES block kept</text>
  <text x="270" y="264" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">new TAGs added with defaults · removed TAGs kept and flagged</text>

  <rect x="500" y="210" width="440" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="720" y="234" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">6 · REPORT & RESTART</text>
  <text x="720" y="250" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">${`{appHome}`}/upgrade-reports/upgrade-YYYYMMDD-HHmmss.md</text>
  <text x="720" y="264" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">re-start service · status visible on Upgrade History</text>

  <line x1="270" y1="280" x2="270" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <text x="290" y="298" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">stops here on first error — service stays down, snapshot still on disk</text>
</svg>

### What the wrapper does, step by step

| # | Step | What it does | What stays untouched |
|---|---|---|---|
| 1 | **Stop & snapshot** | Stops the service via `SIGTERM` (10 s grace), copies `config/` + `template/` + `ubl/` + `nomaubl.jar` into `snapshots/<timestamp>/`. The last 5 snapshots are kept; older ones are pruned. | — |
| 2 | **Database** | Reads the current installed version from the upgrade-history table, applies the schema deltas of every release in between (idempotent — running the upgrade twice does nothing the second time). | Operational tables (`F564231`, lifecycle rows…) — only column / index / table additions and renames run. |
| 3 | **Reference data** | Merges new entries shipped with the JAR into the system templates (statuses, document-types, currency codes, action codes, etc.). | Every entry already on your side, including the rows you renamed or extended. |
| 4 | **Framework XSL** | Refreshes `ubl-common.xsl`, the Schematron rule packs and the XSD set with the version embedded in the JAR. These framework files are not customer-editable. | The `framework/` folder is fully replaced — nothing customer-side here. |
| 5 | **Per-document XSL** | For each `template/<name>/<name>.xsl`, the wrapper writes a fresh file from the latest reference template, then re-injects every `TAG_*` value the customer had filled in and the `NOMAUBL_OVERRIDES_START`…`NOMAUBL_OVERRIDES_END` block at the bottom. **New TAGs** introduced by the upgrade come in with their reference default — fill them in afterwards if needed. **TAGs removed** from the reference are kept on the customer side, flagged with a `<!-- removed in <version> -->` comment so they don't go unnoticed. | Customer TAG values · customer overrides block · per-document RTF / image / sample-xml resources. |
| 6 | **Report & restart** | Writes `${appHome}/upgrade-reports/upgrade-<timestamp>.md` with every step's outcome (added / kept / flagged TAGs per template, schema changes applied, reference-data deltas) and re-starts the service via the wrapper's `start` flow. | — |

If any step fails, the upgrade stops there. The snapshot remains on disk so a manual rollback is `cp -r snapshots/<timestamp>/* env/` then `./nomaubl.sh start <env>`. The next attempt picks up from the failed step — successful steps are not re-applied.

### Settings → Upgrade History

Every install, upgrade and migration that ran on the environment is listed under **Settings → Upgrade History**. Click a row to see the full report on the right pane — same content as the file under `${appHome}/upgrade-reports/`. The list is read-only; nothing can be re-run from this page.

### Diagnostics

When something goes wrong, the report header carries the **resolved env directory** and the **JDBC URL** so a wrong-host or wrong-path mistake is visible at a glance. Connection failures unwrap the full cause chain — `NoRouteToHost`, `Connection refused`, authentication failures, etc., instead of a vague *connection attempt failed*. At startup, the path of the master key file used to decrypt sensitive config values is logged; if the license page reports *restricted* because the key file changed, the error message points directly at the master-key resolution.

---

## `backfill-vat <env> <fromDate> <toDate>` — rebuild VAT details for past periods \{#backfill-vat\}

Rebuilds the **VAT detail table** (`F564234`) for every invoice issued in `[fromDate, toDate]` from the UBL document already kept on each invoice's header. Two situations call for it:

- **Right after turning *Store VAT details* on** under *Settings → Connectors → db-nomaubl → Tables*. Only invoices inserted from then on get their detail rows in `F564234`. The backfill brings the historical periods up to date so the [VAT Declaration](../application/vat-declaration.md) page can serve them.
- **Any time a clean rebuild is needed**, for instance after a corruption was detected on the detail rows of a period.

```bash
./nomaubl.sh backfill-vat prod 2026-04-01 2026-04-30
```

| Argument | Description |
|---|---|
| **`env`** | Environment name — same one used by `start`, `stop`, etc. The wrapper resolves the config from `<env>/config/config.json`. |
| **`fromDate`** | Earliest invoice **issue date** to backfill, `YYYY-MM-DD`. Inclusive. |
| **`toDate`** | Latest invoice **issue date** to backfill, `YYYY-MM-DD`. Inclusive. |

### What the command does

For every invoice header in the window, the wrapper re-parses the UBL document that lives next to the header and re-inserts the per-rate VAT rows into `F564234`. The window is read against the **invoice issue date** so the dates passed match the period filter on the VAT Declaration page.

The command is **safe to re-run on the same period** without creating duplicates — the existing detail rows of an invoice are removed before the rebuild, so a fresh insert can never collide with stale data. Headers that have no UBL on file are reported in the summary and skipped.

### Output

A summary is printed on stdout when the command finishes:

```text
backfill-vat — issue date 2026-04-01 → 2026-04-30
  invoices scanned       12 481
  rebuilt (UBL present)  12 476
  skipped (no UBL)            5
  rows inserted into F564234  41 902
  elapsed                  18.4 s
```

`Store VAT details` does **not** need to be on while `backfill-vat` runs — the command writes to `F564234` unconditionally. The switch only governs what happens on subsequent insertions of new invoices.

---

## `-help` — usage banner

Emit the built-in help banner and exit. Accepted as `-help`, `--help` or `-h`. Invoking the JAR without any argument has the same effect.

```bash
java -jar nomaubl.jar -help
```

---

## `-install <targetDir>` — environment setup

Provision a NomaUBL **environment** under `targetDir` plus the **shared resources** (fonts, images) one level up. Skips the configuration files (`config.json`, `xdo.cfg`, `config-documents.json`, `config-lists.json`) when they already exist, so re-running the install on an existing environment is safe — it only rebuilds the directory layout and refreshes the embedded XSL framework.

| Argument | Description |
|---|---|
| **`targetDir`** | Path of the environment to create. The directory itself is the environment (e.g. `/opt/nomaubl/demo`); its **parent** receives the shared `fonts/` and `images/` directories. Created if missing. |

**Layout produced**

```text
parent/                        ← shared across environments
  fonts/                       ← fonts copied from the JAR
  images/                      ← left empty for project assets
targetDir/                     ← one environment
  burst/    config/    input/
  process/  single/   subtmpl/
  template/ ubl/      xslt/    .versions/
```

**Configuration files installed inside `targetDir/config/`**

| File | Source | Behaviour |
|---|---|---|
| `config.json` | `config/config-template.json` (in JAR) | `appHome` resolved to the parent absolute path; `envName` resolved to `targetDir`'s basename. All other paths keep their `%APP_HOME%` / `%ENV%` placeholders, resolved at runtime. |
| `xdo.cfg` | `config/xdo.cfg` (in JAR) | `%APP_HOME%` and `%ENV%` substituted with absolute values — Oracle XDO does not resolve placeholders. |
| `config-documents.json` | `config/config-template-documents.json` | Copied as-is. |
| `config-lists.json` | `config/config-template-lists.json` | Copied as-is. |

**Example**

```bash
java -jar nomaubl.jar -install /opt/nomaubl/demo
# → creates /opt/nomaubl/demo (env) + /opt/nomaubl/{fonts,images} (shared)
```

---

## `-serve <configFile> [port]` — embedded HTTP server

Start the embedded HTTP server (web UI + REST API) and the **background scheduler**. The process keeps running until killed; HttpServer threads are daemon, so `Thread.currentThread().join()` is used to keep the JVM alive.

| Argument | Description |
|---|---|
| **`configFile`** | Absolute path to `config.json`. |
| **`port`** | TCP port (default `8080`). |

The scheduler reads the following keys from the **global** template of `config.json` to drive periodic jobs:

| Key | Effect |
|---|---|
| **`fetchImportInterval`** | Minutes between `-fetch-import` sweeps. `0` disables the job. |
| **`fetchStatusInterval`** | Minutes between `-fetch-status` sweeps. `0` disables the job. |
| **`fetchAllInterval`** | Minutes between `-fetch-all` runs. `0` disables the job. |
| **`fetchAllParams`** | JSON object holding the batch parameters — same shape as the body of `POST /api/fetch-invoices/run-batch`. Keys: `template` (its `source` property infers XML vs UBL processing), `mode` (`AUTO` \| `SINGLE` \| `BURST` \| `UBL`), `source` (`directory` \| `bip`), `extractMode` (`input` \| `output` \| `both`), `replaceMode`, `validateOnly`, `sendToPA` (`Y` \| `N`), `noSend`, `language`. |

**Example**

```bash
java -jar nomaubl.jar -serve /opt/nomaubl/demo/config/config.json 8090
# → HTTP server on :8090 + scheduler driven by global properties
```

---

## `-process` — single document-processing entry point

Process one (or many) source files against one document template — or call a SQL / REST connector when the template's `source` is `Connector`. The pipeline is selected by the template's `source` property (`XML` for XML spools requiring an XSL transform, `UBL` for already-formed UBL 2.1 invoices, `Connector` for live calls to a SQL query or REST endpoint).

```text
-process <configFile> <template> <file|dir|---> [type] [--param key=value …] [--verbose] [--replace] [--no-send] [--no-db] [--validate] [--send] [--no-debug]
```

| Argument | Description |
|---|---|
| **`configFile`** | Absolute path to `config.json`. |
| **`template`** | Document template name (e.g. `invoices`, `credit_notes`). The template's `source` property drives the pipeline — see [Documents](./documents.md). |
| **`file \| dir \| ---`** | One source file or a directory of source files. For an **XML** template, the file is expected at `<dirInput>/<file>.xml` if no extension is given. For a **UBL** template, the path may be absolute or relative to `<dirInput>/ubl/`. When a directory is given, every matching file is processed in alphabetical order. For a **Connector** template, pass `---` (three dashes) in place of the file path — the source is the connector, not a file. |
| **`type`** | XML templates only — processing type (`AUTO` \| `SINGLE` \| `BURST` \| `UBL`). Ignored on UBL and Connector templates. |

**Processing types** *(XML source only)*

| Value | Effect |
|---|---|
| **`AUTO`** | Resolve the type per document from the *Document Types* configuration. Default for spools mixing several document types. |
| **`SINGLE`** | One PDF per source file — single-document templates. |
| **`BURST`** | Split the source on `burstKey` and process every sub-document in parallel (`numProc`). |
| **`UBL`** | UBL-only — produces UBL 2.1, no PDF. |

**Optional flags** — order-independent, may follow the type:

| Flag | Effect | Applies to |
|---|---|---|
| `--param key=value` | Pass a value to the connector's parameters. Repeatable — once per declared parameter. Same names as the form fields shown on *Processing → Process Document* when the template uses a connector. | Connector |
| `--verbose` | Print per-file processing messages on stdout. | all |
| `--replace` | Purge the five UBL tables for `(doc, dct, kco)` before re-insert. | all |
| `--no-send` | Skip submission to the Plateforme Agréée. | all |
| `--no-db` | Skip the database write step (implies `--no-send`). | XML |
| `--validate` | XSD + Schematron only — no DB insert, no PA send. | UBL |
| `--send` | Force submission to the PA, overriding the configured default. | UBL |
| `--no-debug` | Skip the per-step timings (parse, validation, DB insert, send to PA) that are logged by default in every run. Recommended on heavy nightly batches where the per-step overhead is not worth the extra log volume. | all |

**Examples**

```bash
# XML template — JDE spool, AUTO routing
java -jar nomaubl.jar -process /opt/nomaubl/demo/config/config.json \
                      invoices INV-2026-001 AUTO --verbose --replace

# UBL template — validate every file in a directory, no DB / no PA
java -jar nomaubl.jar -process /opt/nomaubl/demo/config/config.json \
                      ubl-invoices /opt/nomaubl/demo/ubl/ --validate

# Connector template — pull header + lines from a SQL query, suppress debug timings
java -jar nomaubl.jar -process /opt/nomaubl/demo/config/config.json \
                      invoices-sql --- \
                      --param customer=00001234 --param docNumber=2026000125 \
                      --no-debug
```

---

## `-fetch-import` and `-fetch-status` — synchronisation sweeps

Two read-only sweeps against the Plateforme Agréée — typically scheduled via `fetchImportInterval` / `fetchStatusInterval` rather than launched manually.

| Mode | Effect |
|---|---|
| **`-fetch-import <configFile>`** | Re-poll the PA for invoices stuck in status `9906 — Pending PA import`. Each invoice that has now been ingested by the PA gets its lifecycle advanced. |
| **`-fetch-status <configFile>`** | Retrieve the lifecycle of every active invoice and persist new events (status badges, rejection reasons, expected actions) — same code path as the *Sync → Retrieve Statuses* page. |

```bash
java -jar nomaubl.jar -fetch-import /opt/nomaubl/demo/config/config.json
java -jar nomaubl.jar -fetch-status /opt/nomaubl/demo/config/config.json
```

---

## `-fetch-received` — pull supplier invoices from the PA

Receive-side sweep: ask the PA for the list of invoices addressed to the operator since the last successful run, download each UBL the operator has not seen yet, and feed it into the existing UBL processing pipeline. Equivalent of the *Sync → Fetch Input → PA inbound (supplier invoices)* page.

```text
-fetch-received <configFile> [--since YYYY-MM-DD] [--verbose]
```

| Argument / flag | Description |
|---|---|
| **`configFile`** | Absolute path to `config.json`. |
| **`--since YYYY-MM-DD`** | Earliest issue date to consider. Defaults to the timestamp of the last successful run persisted in the *global* template (`lastFetchReceivedAt`). |
| **`--verbose`** | Print per-document messages on stdout — useful on a first run when the operator wants to see how many UBLs were downloaded and what dedup decisions were made. |

The handler walks two api-connector tasks on the configured PA template:

| Task | Purpose |
|---|---|
| **`fetch-received-list`** | Returns the list of received invoice references (PA UUID + supplier metadata) since the cursor. |
| **`fetch-received`** | Downloads one UBL by PA UUID. |

Deduplication is by PA UUID against the existing F564231 rows, so re-running the sweep is safe — already-imported invoices are skipped silently. The processing pipeline runs against the document template whose `direction = R` matches the inbound flow (the bundled `received-ubl` template by default).

To schedule it automatically, set **`fetchReceivedInterval`** in the *global* template (minutes between sweeps, `0` = disabled) — same `-serve` background scheduler that drives `fetchImportInterval` / `fetchStatusInterval`.

```bash
# Manual run — pick up everything since the last cursor
java -jar nomaubl.jar -fetch-received /opt/nomaubl/demo/config/config.json --verbose

# Manual run — backfill from a given date
java -jar nomaubl.jar -fetch-received /opt/nomaubl/demo/config/config.json \
                      --since 2026-04-01
```

---

## `-fetch-single` — extract one document, then process it

Equivalent of the *Application → Extract and Process* page. Extracts a single document from a source channel, drops the resulting file into `dirInput` (XML template) or `<dirInput>/ubl/` (UBL template), then immediately runs the matching pipeline. The XML-vs-UBL choice is **inferred from the template's `source` property** — no separate `processType` argument anymore.

```text
-fetch-single <configFile> <template> <source> <sourceArgs…> [<type>] [flags…]
```

| Argument | Description |
|---|---|
| **`configFile`** | Absolute path to `config.json`. |
| **`template`** | Document template name. Its `source` property selects the pipeline (XML or UBL). |
| **`source`** | Extraction channel — see table below. |
| **`sourceArgs`** | Source-specific arguments. |
| **`type`** | Processing type for XML templates (`AUTO` \| `SINGLE` \| `BURST` \| `UBL`). Ignored on UBL templates. |

**Source channels**

| Source | Arguments | Description |
|---|---|---|
| **`archive <doc> <dct> <kco>`** | Document number, document type, company code. | Pull the source from the JDE archive directory. |
| **`ftp <report> <version> <language> <job>`** | Report code, version, language, JDE job number. | Download via FTP / SFTP. |
| **`bip <jobNumber>`** | JDE BIP job number. | Read from the BIP Print Queue (`F95630` / `F95631`). |

**Optional flags**

| Flag | Effect |
|---|---|
| `--verbose` `--replace` `--no-send` | Same as `-process`. |
| `--validate` `--send` | UBL templates only. |
| `--input` *(default)* `--output` `--both` | BIP extraction mode — input XML, output documents, or both. |

**Examples**

```bash
# XML template — pull from the archive, AUTO routing
java -jar nomaubl.jar -fetch-single /opt/nomaubl/demo/config/config.json \
                      invoices archive 12345 RI 00070 AUTO --verbose

# UBL template — single BIP job, validate-only
java -jar nomaubl.jar -fetch-single /opt/nomaubl/demo/config/config.json \
                      ubl-invoices bip 19 --validate
```

---

## `-fetch-all` — batch extract + process

Equivalent of the *Application → Fetch Input* page. Extract **every** matching document from a source, then process them all. The XML / UBL choice is again inferred from the template — no `processType` argument. Returns exit code `1` if at least one document failed.

```text
-fetch-all <configFile> <template> <source> [<type>] [flags…]
```

| Argument | Description |
|---|---|
| **`source`** | `directory` — scan `dirInput` (XML template) or `dirInput/ubl` (UBL template) for ready-to-process files. <br/>`bip` — pull every new BIP job whose number is greater than `lastBipJobNumber` (persisted in the *global* template after each successful run). |

For each `bip` job the wrapper resolves the **per-job template** from the BIP report filters when one is defined; otherwise it falls back to the `template` CLI argument. After a successful run, `lastBipJobNumber` in `config.json` is updated to the highest job number processed, so the next sweep only picks up new jobs.

The `bip` sweep also honours the **BIP Lookback (days)** floor from *Settings → Global → Batch Processing*: with a non-zero value, only jobs updated in the last N days are eligible, on top of the `lastBipJobNumber` watermark — handy on a first install or after a long gap to avoid walking years of history.

**Examples**

```bash
# Process every XML waiting in the input directory
java -jar nomaubl.jar -fetch-all /opt/nomaubl/demo/config/config.json \
                      invoices directory AUTO --verbose

# Drain new BIP jobs against a UBL template (validate + send)
java -jar nomaubl.jar -fetch-all /opt/nomaubl/demo/config/config.json \
                      ubl-invoices bip --send
```

---

## `-extract` — JDE BIP raw extraction

Low-level extraction from the JD Edwards BIP Print Queue (`F9563110` header, `F95630` input XML, `F95631` output files). Same engine as `fetch-single … bip`, but **without** running the processing pipeline afterwards — useful to drop a job's payload into a directory for off-line inspection.

```text
-extract <configFile> <jobNumber> [--input|--output|--both] [--type <outputType>] [--lang <language>] [outputDir]
```

| Argument | Description |
|---|---|
| **`jobNumber`** | JDE job number (`RJJOBNBR`). |
| **`--input`** *(default)* | Extract the input XML only. |
| **`--output`** | Extract the generated output files only. |
| **`--both`** | Extract input + output. |
| **`--type <val>`** | Filter output files by type — `XML`, `PDF`, `EXCEL`, `HTML`, `RTF`, `PPT`, `ETEXT`. |
| **`--lang <val>`** | Filter by language code (e.g. `FR`). |
| **`outputDir`** | Optional output directory — defaults to `global.dirInput`. |

**Example**

```bash
java -jar nomaubl.jar -extract /opt/nomaubl/demo/config/config.json 19 \
                      --both --type PDF --lang FR /tmp/jde-19/
```

---

## `-pdf2xml` — JD Edwards PDF → XML adapter \{#pdf2xml\}

*(2026.06.15)* Converts a JD Edwards EnterpriseOne report **PDF** into the same XML shape JDE emits natively when XML output is enabled — so a site can keep JDE in PDF-output mode and still feed the existing XML → XSL → UBL pipeline unchanged. Unlike the other modes it takes no environment: it is a standalone file-to-file converter.

```text
-pdf2xml <input.pdf> <output.xml> [<manifest.xml>]
```

| Argument | Description |
|---|---|
| **`input.pdf`** | The JDE report PDF to read. |
| **`output.xml`** | Where to write the extracted XML. |
| **`manifest.xml`** *(optional)* | A JDE-native XML sample of the same report (R-program) version. When supplied, the output is byte-identical to JDE's native XML; without it, the OWObject DD alias is used as the element prefix. |

:::info[JDE-specific]
The adapter reads the `OWObject` metadata embedded in the PDF, so the JDE INI flag that disables PDFlib stream compression (Oracle's *third-party tag readers* option) must be on — otherwise the metadata is compressed away. The universal `_ID<oi>` suffix on each element is the contract in both modes, so XSLs that key on the OI suffix work with or without a manifest.
:::

**Example**

```bash
nomaubl.sh pdf2xml ./input/R42565.pdf ./output/R42565.xml
# byte-identical to JDE's native XML, with a manifest:
nomaubl.sh pdf2xml ./input/R42565.pdf ./output/R42565.xml ./manifests/R42565_FBL0001.xml
```

---

## Flags reference

A consolidated view of every CLI flag — which modes accept it, what it does.

| Flag | Modes | Effect |
|---|---|---|
| **`--verbose`** | `xml`, `ubl`, `fetch-single`, `fetch-all` | Print processing messages on stdout. |
| **`--replace`** | `xml`, `ubl`, `fetch-single`, `fetch-all` | Overwrite the existing record (delete-then-insert for `ubl`; respects `replaceDocument` semantics for `xml`). |
| **`--validate`** | `ubl`, `fetch-single`, `fetch-all` | Validate only — no DB insert, no PA send. Implies `--no-send`. |
| **`--send`** | `ubl`, `fetch-single`, `fetch-all` | Force PA submission, overriding the configured default. |
| **`--no-send`** | `xml`, `ubl`, `fetch-single`, `fetch-all` | Skip PA submission. |
| **`--no-db`** | `xml` | Skip the database write step. Implies `--no-send`. |
| **`--input`** *(default)* | `extract`, `fetch-single` (bip), `fetch-all` (bip) | BIP extraction — input XML only. |
| **`--output`** | `extract`, `fetch-single` (bip), `fetch-all` (bip) | BIP extraction — output documents only. |
| **`--both`** | `extract`, `fetch-single` (bip), `fetch-all` (bip) | BIP extraction — input + output. |
| **`--type <t>`** | `extract` | Filter output files by type — XML, PDF, EXCEL, HTML, RTF, PPT, ETEXT. |
| **`--lang <l>`** | `extract` | Filter by language code. |

---

## Tips & best practices

- **Schedule sweeps via the `-serve` background scheduler rather than cron.** Configuring `fetchImportInterval` and `fetchStatusInterval` in the *global* template gives a single point of truth and survives an environment restart; running the same sweeps via cron risks overlapping with the in-process scheduler.
- **`fetch-all` is idempotent on `directory` source, append-only on `bip`.** A `directory` rerun re-picks files that are still in `dirInput` — typically nothing once they have been processed and removed. A `bip` rerun only fetches jobs newer than `lastBipJobNumber`, so a successful previous run is never repeated.
- **Use `--validate` when promoting UBL files between environments.** It exercises XSD + Schematron without writing to the DB or contacting the PA — a safe smoke test before flipping the real run.
- **Place `fetchAllParams` in the *global* template once, not on every cron entry.** The scheduler builds its batch run from this single JSON object, mirroring the *Configuration → System → Fetch Invoices* page.
- **Reserve `-extract` for inspection or recovery.** `fetch-single` and `fetch-all` already extract internally; the standalone `-extract` mode is for dropping a BIP job's payload onto disk for off-line review or replay.
- **Run `-install` on a fresh directory and edit `config/config.json` afterwards.** The installer never overwrites an existing `config.json`, so a stale config from a previous attempt will silently win — start from an empty `targetDir` to be sure.
