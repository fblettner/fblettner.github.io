---
title: Installation — overview
description: "Stand up a NomaUBL server — JDK 17 + an Oracle or PostgreSQL database + the JAR. Runs as a long-lived Java process, one per environment, started through the nomaubl.sh wrapper. Optional systemd unit and reverse proxy for production."
keywords: [NomaUBL, installation, deploy, server, JDK, Oracle, PostgreSQL, nomaubl.sh, systemd, environment, JD Edwards, SAP, NetSuite, custom ERP]
---

# Installation — overview

NomaUBL ships as a single self-contained Java application — the JAR (`nomaubl.jar` on Linux / macOS, `nomaubl-fat.jar` on Windows) plus two equivalent service-control wrappers: **`nomaubl.sh`** (Bash) and **`nomaubl.cmd`** (Windows batch). Both wrappers expose the same subcommands (`start` / `stop` / `restart` / `status` / `log` / `install` / `upgrade` / processing modes) and call the JAR with the same arguments — pick the one that matches your host. There's no Docker image; the JAR runs against a JDK 17 process and writes its lifecycle data to an Oracle or PostgreSQL database. The web UI, REST API and background scheduler all live inside that one process.

This section walks every step from a fresh Linux server to a running environment.

---

## The pieces

| Component | Why |
|---|---|
| **JDK 17** | The Java runtime that hosts the JAR. |
| **Database** | NomaUBL's persistent store — invoice lifecycle, reference data, configuration history. **Oracle** (19c+) or **PostgreSQL** (13+); same instance as your JD Edwards / SAP / NetSuite / custom ERP, or a dedicated schema. |
| **The JAR** | The application binary — bundled web UI, CLI, scheduler. Shipped as `nomaubl.jar` (Linux / macOS) or `nomaubl-fat.jar` (Windows). |
| **The wrapper** | A service-control script that manages the JAR lifecycle per environment and exposes shorthand forms of every CLI mode. `nomaubl.sh` on Linux / macOS, `nomaubl.cmd` on Windows. |
| **An *environment* directory** | Per-instance state on disk — `config/`, `input/`, `process/`, `ubl/`, `single/`, `template/`, `xslt/`, `.versions/`. Created by `<wrapper> install <targetDir>` (which calls `-install` on the JAR). |
| **Shared resources** | One level above the environment — `fonts/` (PDF generation) and `images/` (project assets). Created at install. |

A single host can run **multiple environments** (`demo`, `uat`, `prod`) side by side, each with its own port and PID file.

---

## At a glance

<svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="iov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="300" rx="14" fill="url(#iov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">NomaUBL install — from a fresh server to a running environment</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="180" height="80" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)"/>
  <text x="130" y="106" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · PREREQUISITES</text>
  <text x="130" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">JDK 17</text>
  <text x="130" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Oracle / PostgreSQL</text>
  <text x="130" y="158" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">requirements page</text>

  <rect x="232" y="84" width="180" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="322" y="106" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · INSTALL</text>
  <text x="322" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">nomaubl.sh install …</text>
  <text x="322" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">nomaubl.cmd install …</text>

  <rect x="424" y="84" width="180" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="514" y="106" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · CONFIGURE</text>
  <text x="514" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Settings UI in browser</text>
  <text x="514" y="142" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">DB · PA · connectors</text>

  <rect x="616" y="84" width="180" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="706" y="106" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · START</text>
  <text x="706" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">nomaubl.sh start demo</text>
  <text x="706" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">nomaubl.cmd start demo</text>

  <rect x="808" y="84" width="152" height="80" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="884" y="106" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · OPS</text>
  <text x="884" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">systemd / Windows svc</text>
  <text x="884" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">reverse proxy · upgrade</text>

  <rect x="40" y="186" width="920" height="50" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="208" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAYOUT PRODUCED</text>
  <text x="58" y="226" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">app-home/  ←  the JAR · the wrapper · fonts/ · images/ ·  demo/ · uat/ · prod/  ←  one env per directory</text>

  <rect x="40" y="252" width="920" height="50" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="274" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT'S NEXT</text>
  <text x="58" y="292" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Sign in to the web UI on  http://&lt;host&gt;:8090  ·  Configure connectors + templates  ·  Wire your ERP source</text>
</svg>

---

## Read in order

| Step | Page |
|---|---|
| **0** | This overview. |
| **1** | [Requirements](./requirements.md) — JDK, database, OS, ports, optional reverse proxy. |
| **2** | [Install and layout](./install-and-layout.md) — run `install`, understand the directory layout, install several environments. |
| **3** | [Configure](./configure.md) — start the service, sign in, configure connectors and system settings through the UI. |
| **4** | [Service and systemd](./service-and-systemd.md) — wrapper lifecycle, optional systemd unit (Linux) / Windows service (Windows), optional nginx reverse proxy. |
| **5** | [Upgrade](./upgrade.md) — when a new release ships, drop the new JAR and run `<wrapper> upgrade <env>`. |

---

## Sanity check — what "installed" looks like

After the four steps:

- `./nomaubl.sh status` (or `nomaubl.cmd status`) shows your environment(s) as `running`.
- `curl http://<host>:8090/api/build-info` returns the version + build timestamp.
- `curl http://<host>:8090/api/license` returns the license state.
- The sign-in page renders at `http://<host>:8090/`.
- The admin user you created (via the in-app *Init Database* step on first open) can sign in.

If any of those don't hold, the per-step page covers troubleshooting.

---

## What this section does NOT cover

| Topic | Where it lives instead |
|---|---|
| Day-to-day CLI operations. | [Management → Command Line](../management/command-line.md). |
| The web UI page-by-page. | The Application / Sync / Processing / UBL Tools sections of the sidebar. |
| Upgrading an existing environment. | [Upgrade](./upgrade.md). |
| Live runtime observation. | [Monitoring](../monitoring/overview.md). |
| What a "Platform Agréée" template is and how to configure one. | [Configuration → System → E-invoicing](../configuration/system/einvoicing.md). |

---

## What's next

- [Requirements](./requirements.md) — what the host needs before you start.
- [Install and layout](./install-and-layout.md) — provision the first environment.
