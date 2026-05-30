---
title: Upgrade
description: "Move an installed NomaUBL environment forward to a new release. One command — nomaubl.sh upgrade on Linux/macOS or nomaubl.cmd upgrade on Windows — handles the JAR swap, schema migrations, reference-data merge, customer XSL merge and service restart. Writes a full report and keeps a rollback backup."
keywords: [NomaUBL, upgrade, release, nomaubl.sh upgrade, nomaubl.cmd upgrade, schema migration, customer XSL merge, rollback, backup, upgrade history, JD Edwards, SAP, NetSuite, custom ERP]
---

# Upgrade

NomaUBL releases ship as a new `nomaubl.jar`. A single command — **`nomaubl.sh upgrade <env>`** on Linux/macOS or **`nomaubl.cmd upgrade <env>`** on Windows — takes an installed environment from whatever release it currently runs to the release of the JAR in place. It stops the service, runs the Java-side `-upgrade` arm (schema migrations, reference-data merge, framework XSL refresh, per-document XSL merge) and restarts the service. A full report lands under `${appHome}/upgrade-reports/` and a rollback backup under `${appHome}/backup/<timestamp>/`.

The same command runs on every supported platform — there is **no Linux-only** or **Windows-only** upgrade path. Pick the wrapper that matches your host.

---

## Two ways to invoke

```bash title="Linux / macOS"
# Option A — the JAR is already in place
./nomaubl.sh upgrade prod

# Option B — let the wrapper swap the JAR for you first
./nomaubl.sh upgrade prod /tmp/nomaubl-2026.06.0.jar
```

```cmd title="Windows"
REM Option A — the JAR is already in place
nomaubl.cmd upgrade prod

REM Option B — let the wrapper swap the JAR for you first
nomaubl.cmd upgrade prod C:\downloads\nomaubl-2026.06.0.jar
```

| Argument | Description |
|---|---|
| **`env`** | Environment name — same one used by `start`, `stop`, etc. The wrapper resolves the config from `<env>/config/config.json`. |
| **`new_jar`** *(optional)* | Path to the JAR to upgrade to. The wrapper copies it over the existing `nomaubl.jar` (Linux) or `nomaubl-fat.jar` (Windows) before running the upgrade. Omit if you already replaced the JAR by hand. |

Both forms produce the same end state. Use the second when you want a single command to do everything; use the first when your release pipeline already drops the new JAR in place.

---

## At a glance — what the upgrade does

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upgi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="upgi-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="320" rx="14" fill="url(#upgi-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">nomaubl.sh / nomaubl.cmd upgrade &lt;env&gt; — the steps in order</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · STOP &amp; BACKUP</text>
  <text x="160" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">stop service if running</text>
  <text x="160" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">snapshot under backup/</text>

  <rect x="280" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · DATABASE</text>
  <text x="380" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">apply schema deltas</text>
  <text x="380" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Oracle and PostgreSQL</text>

  <rect x="500" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · REFERENCE DATA</text>
  <text x="600" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">merge new entries</text>
  <text x="600" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">keep customer overrides</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · FRAMEWORK XSL</text>
  <text x="830" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">refresh ubl-common + rules</text>
  <text x="830" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Schematron, XSD</text>

  <line x1="160" y1="170" x2="160" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upgi-arrow)"/>
  <line x1="380" y1="170" x2="380" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upgi-arrow)"/>
  <line x1="600" y1="170" x2="600" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upgi-arrow)"/>
  <line x1="830" y1="170" x2="830" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upgi-arrow)"/>

  <rect x="60" y="210" width="420" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="270" y="234" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · PER-DOCUMENT XSL — REWRITE WITH MERGE</text>
  <text x="270" y="250" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">customer TAG_ values kept · OVERRIDES block kept</text>
  <text x="270" y="264" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">new TAGs added with defaults · removed TAGs flagged</text>

  <rect x="500" y="210" width="440" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="720" y="234" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">6 · REPORT &amp; RESTART</text>
  <text x="720" y="250" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">${`{appHome}`}/upgrade-reports/upgrade-YYYYMMDD-HHmmss.md</text>
  <text x="720" y="264" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">re-start service (only if it was running before)</text>

  <line x1="270" y1="280" x2="270" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upgi-arrow)"/>
  <text x="290" y="298" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">stops here on first error — service stays down, backup still on disk</text>
</svg>

The per-step reference (what `-upgrade` does internally, what's preserved, what's refreshed) lives on the [Command Line → upgrade](../management/command-line.md#upgrade) page.

---

## Before you upgrade

| Check | Why |
|---|---|
| **The new JAR is the one you intend** — `java -jar nomaubl.jar -help` prints the version at the top. | Catches a wrong build sitting next to the wrapper. |
| **The service user can write to the env directory + the parent**. | The upgrade rewrites `template/`, `xslt/`, `.versions/` and creates a backup. A read-only filesystem stops the upgrade at step 1. |
| **The database account has the same DDL rights as on install** (create tables, indexes, sequences, views). | Step 2 applies schema deltas — DDL rights are required even on a same-version idempotent run. |
| **A real database backup is in place** *(not just the per-env `backup/` snapshot)*. | The `backup/` directory keeps a copy of files on disk; it does not snapshot the database. Take your usual DB backup before a major release. |
| **A maintenance window** wide enough for a restart — typically 1-5 minutes per environment. | The service is unavailable from step 1 until step 6. |

You don't need to put NomaUBL into any special "maintenance mode" beyond stopping the service — the wrapper handles that automatically.

---

## Run it

### Linux / macOS

```bash
cd /opt/nomaubl
./nomaubl.sh upgrade prod
```

Sample output:

```text
[upgrade] env: prod
[upgrade] stopping service...
NomaUBL [prod] stopped
[upgrade] running -upgrade (this may take a minute)...
... (Java-side step log) ...
[upgrade] starting service...
Starting NomaUBL [prod] (port=8090)...
NomaUBL [prod] started (PID 12347)
  URL: http://localhost:8090/
  Log: /opt/nomaubl/nomaubl-prod.log
```

### Windows

```cmd
cd C:\nomaubl
nomaubl.cmd upgrade prod
```

Same output, same exit code semantics — `0` on success, non-zero on failure.

### Several environments

The upgrade is per-environment. With three environments on the same host, run the command three times:

```bash title="Linux / macOS"
./nomaubl.sh upgrade demo
./nomaubl.sh upgrade uat
./nomaubl.sh upgrade prod
```

```cmd title="Windows"
nomaubl.cmd upgrade demo
nomaubl.cmd upgrade uat
nomaubl.cmd upgrade prod
```

Promote in the order your release process dictates (typically demo → uat → prod). Each run uses the **same JAR** — the JAR is shared across environments on the host.

---

## If something fails

The wrapper exits non-zero and **leaves the service stopped**. You'll see:

```text
[upgrade] ⚠ FAILED — service left stopped.
[upgrade] Inspect the report under ${appHome}/upgrade-reports/ and
[upgrade] roll back from ${appHome}/backup/<latest>/ if needed.
```

The two files to look at:

| File | Where | What it tells you |
|---|---|---|
| **The upgrade report** | `${appHome}/upgrade-reports/upgrade-<timestamp>.md` | Per-step outcome. The report header carries the resolved env directory and the JDBC URL so a wrong-host / wrong-path mistake is obvious at a glance. |
| **The backup snapshot** | `${appHome}/backup/<timestamp>/` | A pre-upgrade copy of the env directory + the old JAR. Use this for a rollback. |

### Rollback

```bash title="Linux / macOS"
./nomaubl.sh stop prod                       # safety — usually already stopped
cp -r /opt/nomaubl/backup/<timestamp>/* /opt/nomaubl/prod/
cp /opt/nomaubl/backup/<timestamp>/nomaubl.jar /opt/nomaubl/   # restore the previous JAR
./nomaubl.sh start prod
```

```cmd title="Windows"
nomaubl.cmd stop prod
xcopy /E /I /Y C:\nomaubl\backup\<timestamp>\* C:\nomaubl\prod\
copy /Y C:\nomaubl\backup\<timestamp>\nomaubl-fat.jar C:\nomaubl\nomaubl-fat.jar
nomaubl.cmd start prod
```

After a rollback, take a fresh database backup before retrying the upgrade — the schema deltas may have partially applied before the failure.

### Retry

The Java-side `-upgrade` is **idempotent**: re-running on the same environment skips the steps that already succeeded and resumes from the failed one. Once the underlying issue is fixed (network, missing privilege, etc.), simply re-run:

```bash
./nomaubl.sh upgrade prod      # or nomaubl.cmd upgrade prod
```

---

## Settings → Upgrade History

Every install, upgrade and migration that ran on the environment is listed under **Settings → Upgrade History**. Click a row to see the full report on the right pane — same content as the file under `${appHome}/upgrade-reports/`. The list is read-only; nothing can be re-run from this page.

This is the operator-facing audit trail — useful for confirming "yes, we ran 2026.06.0 on prod last Tuesday" without SSH'ing to the host.

---

## Common upgrade pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Running `upgrade` against the wrong env. | Wrong environment goes down for a minute. | Read the `[upgrade] env: <env>` line at the start; cancel with Ctrl+C if it's not the intended one. |
| The new JAR is missing or corrupt. | `[upgrade] new JAR not found: <path>` or `Error: Unable to access jarfile`. | Verify the file exists and has the expected size; re-download if needed. |
| The service was started by hand outside the wrapper. | Wrapper sees no PID file → thinks the service isn't running → upgrade proceeds without stopping the JVM. Two processes briefly contend for the database. | Always use the wrapper to start/stop the service. |
| Schema delta fails because the DB user lost DDL rights. | The report logs `ORA-01031: insufficient privileges` (Oracle) or `permission denied for schema` (PostgreSQL). | Re-grant `CREATE TABLE`, `CREATE INDEX`, `CREATE SEQUENCE`, `CREATE VIEW`; re-run the upgrade. |
| The custom XSL has stale TAGs flagged. | The report lists per-template entries under *"removed TAGs"*. | Open the template's `.xsl` and remove the `<!-- removed in <version> -->` lines once you've adapted to the change. |
| Disk full on the env partition. | Backup step fails. | Free space; re-run. The `backup/` directory grows with retained snapshots — prune old ones to keep disk usage bounded. |

---

## What's next

- [Service and systemd](./service-and-systemd.md) — supervise the upgraded service.
- [Management → Command Line → upgrade](../management/command-line.md#upgrade) — full reference of the Java-side `-upgrade` arm.
- [Monitoring → Service and logs](../monitoring/service-and-logs.md) — confirm the upgrade landed (`/api/build-info` shows the new version).
