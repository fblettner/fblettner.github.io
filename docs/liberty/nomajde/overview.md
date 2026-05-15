---
title: Nomajde — Overview
description: "Nomajde is a JD Edwards companion application — live screens on the JDE data, security maintenance workbench, automated BIP reporting and live monitoring of transactions and jobs."
keywords: [Nomajde, JD Edwards, JDE, master data, security workbench, BIP, reporting, monitoring]
---

# Nomajde — Overview

**Nomajde** is a **JD Edwards companion** application. It sits next to JDE EnterpriseOne and consolidates what JDE typically spreads across many separate screens into a smaller set of simplified ones, with **grid editing** for bulk updates. The day-to-day work — what would take five JDE screens and dozens of clicks — collapses into one Nomajde page:

- consult and edit master data (address book, customers, suppliers, items, GL accounts),
- maintain JDE security — users, roles, role relationships, environments, security workbench,
- inspect transactions across companies and environments without navigating row by row,
- schedule BIP reports, archive their outputs and resend them,
- watch JDE in production — transactions, jobs, performance — live.

Every screen reads JDE data in real time. There is no nightly extract, no staged copy — what the screen shows is what JDE is showing right now.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nje-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nje-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="920" height="380" rx="14" fill="url(#nje-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">🟧 NOMAJDE · Sidebar</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="300" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="120" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📊 Dashboard</text>

  <text x="76" y="144" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Master Data</text>
  <text x="86" y="162" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Address book</text>
  <text x="86" y="176" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Customers · Suppliers</text>
  <text x="86" y="190" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Items · GL accounts</text>

  <text x="76" y="214" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Security Maintenance</text>
  <rect x="84" y="222" width="172" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="92" y="236" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">User Management</text>
  <text x="86" y="256" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Role Management</text>
  <text x="86" y="270" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Role Relationships</text>
  <text x="86" y="284" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Environments</text>
  <text x="86" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Security Workbench</text>

  <text x="76" y="322" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Transactions</text>
  <text x="86" y="340" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">AP · AR · GL</text>

  <text x="76" y="362" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Reporting</text>
  <text x="76" y="386" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Monitoring</text>

  <rect x="280" y="100" width="320" height="300" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="300" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">👥 USER MANAGEMENT</text>

  <text x="300" y="154" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Search a user, see every role,</text>
  <text x="300" y="170" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">every environment, every security</text>
  <text x="300" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">entry that applies to them.</text>

  <text x="300" y="218" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Add / update / disable a user</text>
  <text x="300" y="234" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">without leaving the page.</text>

  <text x="300" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Edits go straight to JDE — the</text>
  <text x="300" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">change is live on the fat-client</text>
  <text x="300" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">on the next refresh.</text>

  <text x="300" y="330" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Audit trail: who changed what,</text>
  <text x="300" y="346" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">when, from which page.</text>

  <text x="300" y="378" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Same shape on Role Management,</text>
  <text x="300" y="394" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Environments and Security Workbench.</text>

  <rect x="620" y="100" width="320" height="140" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="640" y="124" fill="#fb923c" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📊 REPORTING</text>
  <text x="640" y="150" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Schedule a JDE batch job from</text>
  <text x="640" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">a form. Output is archived next</text>
  <text x="640" y="182" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">to the run — download, resend,</text>
  <text x="640" y="198" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">e-mail in one click. Audit log</text>
  <text x="640" y="214" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">of every run.</text>

  <rect x="620" y="260" width="320" height="140" rx="10" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.30)" strokeWidth="1"/>
  <text x="640" y="284" fill="#4ade80" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📈 MONITORING</text>
  <text x="640" y="310" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Live counters of AP / AR / GL</text>
  <text x="640" y="326" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">transactions. The job-control</text>
  <text x="640" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">queue as a grid. Performance</text>
  <text x="640" y="358" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">indicators (DB latency, AIS</text>
  <text x="640" y="374" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">response time, transaction</text>
  <text x="640" y="390" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">throughput).</text>
</svg>

---

## What it covers

### Master data

The day-to-day master-data work, in one shape per business object.

- **Address book** — search any address, see who / what / where on a single row. Edit a name, a phone, a postal address without opening three screens.
- **Customers and suppliers** — the full master, per company. Edit the credit terms, the bank account, the payment instructions.
- **Items** — item master, with item branch / plant on the same page.
- **GL accounts** — chart of accounts per business unit and per company.

Every grid lets you filter by any column, sort, export to Excel, and click a row to open the edit form.

### Security Maintenance

The same JDE security work, condensed into five screens that each consolidate what JDE spreads across many forms. Every grid supports inline editing — change a value on a row, the update is written back without leaving the page.

| Screen | What you do here |
|---|---|
| **User Management** | Search a user; see every role, environment and security entry that applies on a single page. Add, update or disable a user; assign or revoke a role inline in the grid. The change goes to JDE immediately. |
| **Role Management** | The catalogue of roles, with the applications attached to each. Add a role, attach an application, set processing-option security — without navigating between separate JDE forms. |
| **Role Relationships** | Role inheritance and effective-date windows in one grid. Promote a junior role to inherit a senior one, with a start and an end date, in a single edit. |
| **Environments** | The list of environments (`PD`, `PY`, `DV`, `CRP`, …) and the role assignments per environment, side by side. |
| **Security Workbench** | The whole security catalogue — application security, action security, row security, column security, processing-option security — on one searchable grid with inline edits, instead of a separate JDE screen per security type. |

Edits are written straight to JDE — no extract, no replay. The audit trail records every change with the user, the timestamp and the page it came from.

### Transactions

Grids over AP, AR and GL. Filter on any column — company, business unit, supplier, document number, amount range, date range — and click a row to drill into the details. Right for spotting an open invoice, an unposted batch, or a journal that did not balance.

### Reporting

Schedule and archive JDE BIP reports.

- Pick the program and the version, fill the data selection, choose when it runs. The job goes to JDE through a single form — no chain of separate scheduling screens.
- The generated output (PDF or XML) is archived next to the run. Download it later, e-mail it to a recipient list, resend it through the same connector.
- Every run is logged — who scheduled it, when it ran, what was produced.

### Monitoring

A live view of JDE in production.

- AP / AR / GL transaction counters with drill-through to the underlying screen.
- The JDE job-control queue as a grid — status, owner, runtime, output.
- Performance indicators: database latency, AIS response time, transaction throughput.

Right for an ops engineer keeping a watch on the day's load.

---

## The application map

| Section | What you find here |
|---|---|
| **Dashboard** | Daily activity summary: open transactions, jobs running, recent users, latest alerts. |
| **Master Data** | Address book, customers, suppliers, items, GL accounts. |
| **Security Maintenance** | User Management, Role Management, Role Relationships, Environments, Security Workbench. |
| **Transactions** | AP, AR, GL grids with filters and edit forms. |
| **Reporting** | Schedule a BIP job, archive of past runs, distribution. |
| **Monitoring** | Live transaction counters, job-control queue, performance indicators. |
| **Settings** | Environment definitions, e-mail server, archive retention. |

---

## Who uses it

| Role | What they typically open Nomajde for |
|---|---|
| **AP / AR operator** | The transaction grid — every open invoice across companies and environments on one page, with bulk filters and inline edits. |
| **Master-data steward** | Address book, customer and supplier maintenance, with required-field validation in the form and grid edits for mass updates. |
| **JDE security administrator** | The five Security Maintenance pages — five screens that consolidate what JDE spreads across many separate forms, all with inline editing. |
| **Reporting analyst** | The Reporting section — one form to schedule, archive and distribute a BIP job, where JDE walks through several separate screens. |
| **Ops engineer** | The Monitoring section — live transaction counters, job queue, performance, on one dashboard. |

---

## Roles inside Nomajde

The application itself ships four roles.

| Role | What it grants |
|---|---|
| **Viewer** | Read every screen, run reports, no edits. |
| **Operator** | Everything a Viewer does, plus AP / AR / master-data edits and scheduling reports. |
| **Security** | The Security Maintenance section — User, Role, Role Relationships, Environments, Security Workbench. |
| **Administrator** | Everything above, plus environment configuration and archive retention. |

A typical deployment keeps **Operator** separate from **Security** — the person processing transactions is not the same one managing access rights.
