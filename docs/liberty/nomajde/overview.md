---
title: Nomajde — Overview
description: "Nomajde is a JD Edwards integration application built on Liberty Next. Full JDE connectivity, custom screens against live data, security & access management, automated reporting and live monitoring — modern responsive UI on top of OneWorld."
keywords: [Nomajde, JD Edwards, JDE, integration, custom screens, security workbench, AIS, BIP, automated reporting, live monitoring, responsive UI]
---

# Nomajde — Overview

**Nomajde** is a **JD Edwards integration** application built on [Liberty Next](../framework/overview.md). Full JDE connectivity to interact with live JDE data, **custom screens** that extend OneWorld with a modern responsive UI, **security and access management** for users / roles / applications, **automated reporting** (schedule and archive BIP outputs) and **live monitoring** of JDE transactions and performance.

Nomajde is **not** a replacement for the JDE fat client. It is a faster, web-native path for the operations that benefit from a clean UI — typically the ones operators run dozens of times a day — plus the administrative workbenches a security or reporting team needs.

Nomajde is a **licensed application**: bundled with [Nomasx-1](../nomasx1/overview.md) under a single RS256 license key.

:::info[Work in progress]
This overview is the entry point. Per-screen pages (Master Data, Security Maintenance, Environments, AIS orchestrations, reports) will arrive in follow-up commits.
:::

---

## At a glance

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nje-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nje-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nje-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="220" height="420" rx="14" fill="url(#nje-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">🗄 JD EDWARDS</text>

  <rect x="56" y="84" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Master data tables</text>
  <text x="68" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">address book, customer, supplier</text>

  <rect x="56" y="136" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="156" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Security workbench</text>
  <text x="68" y="172" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">users, roles, role relationships</text>

  <rect x="56" y="188" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="208" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Transactions</text>
  <text x="68" y="224" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">F0411, F03B11, F0911</text>

  <rect x="56" y="240" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="260" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Environments</text>
  <text x="68" y="276" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PD / PY / DV / CRP</text>

  <rect x="56" y="292" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="312" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">UDC tables · F0005</text>
  <text x="68" y="328" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">codes + descriptions</text>

  <rect x="56" y="344" width="188" height="44" rx="8" fill="rgba(255,159,10,0.06)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="68" y="364" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">AIS connector</text>
  <text x="68" y="380" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">forms, orchestrations, batch</text>

  <rect x="56" y="396" width="188" height="44" rx="8" fill="rgba(255,159,10,0.06)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="68" y="416" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">BIP outputs</text>
  <text x="68" y="432" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">job control, generated PDF</text>

  <line x1="260" y1="240" x2="380" y2="240" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#nje-arrow)"/>

  <rect x="380" y="40" width="260" height="420" rx="14" fill="url(#nje-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="400" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ NOMAJDE CAPABILITIES</text>

  <rect x="396" y="84" width="228" height="56" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">🔌 Full JDE connectivity</text>
  <text x="408" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">live data · no exports</text>
  <text x="408" y="134" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">read + write through AIS</text>

  <rect x="396" y="148" width="228" height="56" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="168" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">📋 Custom JDE applications</text>
  <text x="408" y="184" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">real-time data screens</text>
  <text x="408" y="198" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">defined in TOML, no codegen</text>

  <rect x="396" y="212" width="228" height="56" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="232" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">👥 Security & access</text>
  <text x="408" y="248" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">users · roles · applications</text>
  <text x="408" y="262" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">role relationships · environments</text>

  <rect x="396" y="276" width="228" height="56" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="296" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">📱 Modern responsive UI</text>
  <text x="408" y="312" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">desktop · tablet · mobile</text>
  <text x="408" y="326" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">API automation</text>

  <rect x="396" y="340" width="228" height="56" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.35)" strokeWidth="1"/>
  <text x="408" y="360" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">📊 Automated reporting</text>
  <text x="408" y="376" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">schedule + archive BIP outputs</text>
  <text x="408" y="390" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">resend / e-mail / download</text>

  <rect x="396" y="404" width="228" height="50" rx="8" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.35)" strokeWidth="1"/>
  <text x="408" y="424" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">📈 Live monitoring</text>
  <text x="408" y="440" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">transactions · jobs · performance</text>

  <line x1="640" y1="240" x2="740" y2="240" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#nje-arrow)"/>

  <rect x="740" y="40" width="220" height="420" rx="14" fill="url(#nje-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="760" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚛️ NOMAJDE UI</text>

  <text x="760" y="92" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📊 Dashboard</text>

  <text x="760" y="116" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Master Data</text>
  <text x="772" y="134" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Address book</text>
  <text x="772" y="150" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Customer · Supplier</text>
  <text x="772" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Items · GL accounts</text>

  <text x="760" y="190" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Security Maintenance</text>
  <rect x="768" y="198" width="180" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="776" y="212" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">User Management</text>
  <text x="772" y="232" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Role Management</text>
  <text x="772" y="248" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Role Relationships</text>
  <text x="772" y="264" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Environments</text>
  <text x="772" y="280" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Security Workbench</text>

  <text x="760" y="304" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Transactions</text>
  <text x="772" y="322" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">AP · AR · GL</text>

  <text x="760" y="346" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Reporting</text>
  <text x="772" y="364" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Schedule a report</text>
  <text x="772" y="380" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Archive · BIP outputs</text>

  <text x="760" y="404" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Monitoring</text>
  <text x="772" y="422" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Transactions · Jobs</text>
  <text x="772" y="438" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Performance</text>
</svg>

---

## What it does

### Full JD Edwards connectivity

Nomajde reads and writes JDE data **live** — no nightly extracts, no staged copies, no shadow tables.

| Capability | What it gives you |
|---|---|
| **Live SQL** | SQL connectors on every JDE environment (`PD`, `PY`, `DV`, `CRP`, …). Each screen reads what JDE itself reads. |
| **AIS integration** | API connector against the JDE AIS Server: form-service calls, orchestrations, scheduled jobs. Write paths go through AIS so the same business logic applies. |
| **Cross-environment** | Switch the environment from a dropdown — same screens, same dialogs, different pool. |

### Custom JDE applications

A Nomajde screen is one TOML entry under [`screens.toml`](../framework/screens.md): the query that drives the grid, the dialog that opens on a row click, the per-field conditions, the audit tab. **No code generation.** Add a new screen and the React UI picks it up after a `POST /admin/reload`.

Right for:

- exposing a clean web form for a OneWorld application that operators run dozens of times a day,
- packaging several JDE forms into one screen (e.g. address book + customer + supplier on one row),
- giving non-licensed users a curated view without a full JDE seat.

### Security & access management

Nomajde ships the JDE security maintenance workbench as native Liberty Next screens:

| Sub-section | What it covers |
|---|---|
| **User Management** | JDE users — creation, role assignments, environments allowed, account state. |
| **Role Management** | Role catalog, applications attached to a role, processing options. |
| **Role Relationships** | Role inheritance and effective-date windows. |
| **Environments** | `PD` / `PY` / `DV` / `CRP` definitions and the per-environment role assignment. |
| **Security Workbench** | The full `F00950` view — application security, action security, row security, column security, processing-option security — searchable and filtered. |

The data the workbench surfaces is also what [Nomasx-1](../nomasx1/overview.md) reads for SoD analysis. The two applications share the same connector definitions.

### Modern responsive UI

The same React frontend as Liberty Next — dark default with light theme, DM Sans, lucide icons, `@tanstack/react-table` for the grids, modal `ScreenDialog` for the forms. Responsive: a Nomajde screen renders cleanly on a tablet (auditor in a warehouse, field service stopping at a customer). `react-i18next` EN / FR — labels come from the dictionary, JDE UDC translations included.

### Automated reporting

| Feature | What it gives you |
|---|---|
| **Schedule a report** | Form-based scheduling of a JDE batch job (R-program) — choose the version, the data selection, the recurrence. |
| **Archive BIP outputs** | The generated BIP output (PDF / XML) is captured and stored next to the job. Searchable, downloadable, re-sendable. |
| **Distribution** | E-mail a generated output to an operator-defined recipient list with one click. |
| **History** | Every run is logged: who scheduled it, when it ran, the output stored. The audit trail an internal auditor expects. |

### Live monitoring

| Feature | What it gives you |
|---|---|
| **Transaction monitoring** | Live counters of AP / AR / GL transactions per environment, with drill-through to the underlying screen. |
| **Job monitoring** | The JDE job-control queue exposed as a Nomajde grid — status, owner, run time, output. |
| **Performance** | DB latency, transaction throughput, AIS response time. Right for an ops engineer keeping a watch on the production environment. |

---

## Application structure

The Nomajde sidebar groups the capabilities into folders:

| Section | Sub-sections |
|---|---|
| **Dashboard** | KPI roll-up, latest activity, drill-through. |
| **Master Data** | Address book, customer master, supplier master, item master, GL accounts. |
| **Security Maintenance** | User Management, Role Management, Role Relationships, Environments, Security Workbench. |
| **Transactions** | AP / AR / GL grids with filtering and modal dialogs. |
| **Reporting** | Schedule a report, archive, BIP outputs. |
| **Monitoring** | Transactions, jobs, performance. |
| **Settings** | Source pools, AIS connector, environment definitions, role mapping. |

---

## Who is it for

| Persona | Why a Nomajde screen beats the JDE fat client |
|---|---|
| **AP / AR operator** | One web tab, multi-filter grid over `F0411` / `F03B11` — no row-by-row navigation. |
| **Master-data steward** | Address book + customer + supplier in one shape, with per-field conditions and required validations. |
| **JDE security administrator** | The five security maintenance screens are the day-to-day workbench — instant filtering across users / roles / objects, no fat-client wait. |
| **Reporting analyst** | Schedule a BIP job, archive the output, e-mail it — without a OneWorld licence per analyst. |
| **Ops engineer** | Live monitoring view of jobs + transactions + performance; alerting through Liberty Next's notification rules. |

---

## Users, roles and permissions inside Nomajde

The authentication of Nomajde (the application — not the JDE source it reads) goes through Liberty Next's [auth backend](../framework/overview.md#auth). Typical roles:

| Liberty role | What it grants |
|---|---|
| `nomajde.viewer` | Read every screen, run dashboards, no edits. |
| `nomajde.operator` | All of the above + AP / AR / master edits + AIS orchestration calls + report scheduling. |
| `nomajde.security` | Security Maintenance — User / Role / Role Relationships / Environments / Security Workbench. |
| `nomajde.admin` | All of the above + source connector / pool management + AIS configuration. |

A typical deployment splits **operator** from **security** — Nomasx-1 itself would flag the combination as a SoD conflict.

---

## How it pairs with Nomasx-1

Nomajde and Nomasx-1 are sold together. They complement each other:

- **Nomajde** lets users *do things* in JDE — clean entry points for the day-to-day work, plus a security maintenance workbench.
- **Nomasx-1** monitors *what they can do* — the rights, the conflicts, the licence usage.

The pair runs on the same Liberty Next instance, on the same license key. A typical install configures Nomajde first (operators need it daily), Nomasx-1 second (auditors need it on a cadence).

---

## Next steps

| Where to go | Why |
|---|---|
| [Liberty Next → Overview](../framework/overview.md) | The framework Nomajde sits on. |
| Per-screen documentation *(coming soon)* | Master Data · Security Maintenance · Transactions · Reporting · Monitoring. |
| [Nomasx-1 overview](../nomasx1/overview.md) | Companion application — segregation-of-duties analysis. |
