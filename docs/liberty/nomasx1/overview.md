---
title: Nomasx-1 — Overview
description: "Nomasx-1 is an enterprise security and compliance application — centralised view of users and roles, Oracle and JD Edwards licence compliance, and automated Segregation of Duties analysis."
keywords: [Nomasx-1, nomasx1, enterprise security, compliance, segregation of duties, SoD, JD Edwards, JDE, Oracle, licence, CSI, LDAP, audit]
---

# Nomasx-1 — Overview

**Nomasx-1** is an **enterprise security and compliance** application. In one screen, it answers the questions an auditor, a security officer or a licence manager asks every quarter:

- Who has access to what, on which environment?
- Has any role been granted that should have expired?
- How many of the Oracle and JD Edwards licences we paid for are actually used?
- Are there users who can post a journal entry and approve it at the same time?

The application reads its source data directly — JDE security workbench, Oracle DBA views, LDAP — and presents it on a small set of grids, dashboards and reports. No exports to prepare, no spreadsheets to maintain.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nx1-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nx1-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="920" height="380" rx="14" fill="url(#nx1-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">🛡 NOMASX-1 · Sidebar</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="280" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="68" y="110" width="184" height="22" rx="4" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="80" y="124" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">📊 Dashboard</text>

  <text x="76" y="148" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Security</text>
  <text x="86" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Users · Roles · Sessions</text>
  <text x="86" y="180" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">SoD conflicts · Exceptions</text>

  <text x="76" y="204" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Applications</text>
  <text x="86" y="222" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">JDE applications · forms</text>

  <text x="76" y="246" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Database</text>
  <text x="86" y="264" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Version · options · users</text>

  <text x="76" y="288" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Licences</text>
  <text x="86" y="306" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">CSI · JDE · Oracle</text>
  <text x="86" y="320" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Subscribed licences</text>
  <text x="86" y="334" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Usage report</text>
  <text x="86" y="348" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Financial report</text>

  <text x="76" y="372" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">⚙ Settings</text>

  <rect x="280" y="100" width="220" height="280" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="300" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">👥 SECURITY & USERS</text>

  <text x="300" y="150" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Users — creation, last login,</text>
  <text x="300" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">expired roles, duplicates.</text>

  <text x="300" y="190" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Roles — assignments with</text>
  <text x="300" y="206" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">effective / expiration dates.</text>

  <text x="300" y="230" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">LDAP / AD check — does the</text>
  <text x="300" y="246" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">account still exist?</text>

  <text x="300" y="270" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Activity tracking — without</text>
  <text x="300" y="286" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">turning JDE audit on.</text>

  <text x="300" y="310" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Custom attributes — tag</text>
  <text x="300" y="326" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">technical vs functional</text>
  <text x="300" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">accounts.</text>

  <rect x="520" y="100" width="220" height="280" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="540" y="124" fill="#fb923c" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📊 LICENCE COMPLIANCE</text>

  <text x="540" y="150" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">CSI — Customer Support</text>
  <text x="540" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Identifier + acquired licences.</text>

  <text x="540" y="190" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Active vs declared — what</text>
  <text x="540" y="206" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">JDE counts vs what was bought.</text>

  <text x="540" y="230" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Module usage — who really</text>
  <text x="540" y="246" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">uses Financials / Distribution.</text>

  <text x="540" y="270" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Database — Oracle version,</text>
  <text x="540" y="286" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">options enabled.</text>

  <text x="540" y="310" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Financial risk — money</text>
  <text x="540" y="326" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">figure + remediation</text>
  <text x="540" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">suggestions.</text>

  <rect x="760" y="100" width="180" height="280" rx="10" fill="rgba(248,113,113,0.08)" stroke="rgba(248,113,113,0.30)" strokeWidth="1"/>
  <text x="780" y="124" fill="#f87171" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚖ SoD</text>

  <text x="780" y="150" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Automated conflict</text>
  <text x="780" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">detection.</text>

  <text x="780" y="190" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Predefined and</text>
  <text x="780" y="206" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">custom matrices.</text>

  <text x="780" y="230" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Conflicts by</text>
  <text x="780" y="246" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">process / activity</text>
  <text x="780" y="262" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">/ risk.</text>

  <text x="780" y="286" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Auto-extract</text>
  <text x="780" y="302" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">of security data.</text>

  <text x="780" y="326" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Reports —</text>
  <text x="780" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">CSV / Excel,</text>
  <text x="780" y="358" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">sign-off trail.</text>
</svg>

---

## What it covers

Nomasx-1 brings three areas together under one application:

### Security and users

The day-to-day view of who has access to what.

- **Users**: every user the source systems know, with creation date and last login. Dormant accounts surface immediately; recent additions are flagged.
- **Roles and assignments**: each role assignment carries effective and expiration dates. Roles that should have expired but were never removed appear in red.
- **Risk spotters**: unassigned roles, duplicate users, technical accounts mixed with functional ones — all flagged automatically without manual review.
- **Directory check**: every user is verified against LDAP or Active Directory — does the account still exist there, is it active?
- **Custom attributes**: each user and each role can carry your own metadata — business owner, department, technical-vs-functional flag — and the reports use it.
- **Activity tracking**: tracks user activity **without** turning JDE auditing on, so there is no operational impact on the source system.

### Oracle and JD Edwards licence compliance

Side-by-side view of what was bought versus what is actually used.

- **CSI and acquired licences**: import the Oracle Customer Support Identifier and the licences attached to it.
- **Active versus declared users**: what JDE counts as a user versus what the contract entitles you to. The two diverge more often than expected.
- **Module access and transaction usage**: per-module access trace — who really touches Financials, Distribution, Manufacturing. Drives the "do we still need this module?" conversation.
- **Database picture**: Oracle version, edition, options enabled. The page an auditor asks to see when they want to know whether Advanced Compression or Partitioning is in use.
- **Usage versus entitlement**: a single screen with what is used, what is bought, and the gap.
- **Financial risk report**: the gap turned into a monetary figure, with remediation suggestions. The output an audit committee will read.

### Segregation of Duties

Automated SoD analysis — the heart of an SoX-style compliance review.

- **Automated detection**: every user's effective rights are crossed with the SoD matrix; conflicts surface per user × company, ranked by risk.
- **Predefined and custom matrices**: shipped matrices for common ERP risks (post and approve, vendor and payment, …). You can layer your own matrices on top.
- **Process · activity · risk model**: conflicts are described at the process and activity level — easier to read than raw role-against-role pairs.
- **Automatic data extraction**: security data is pulled from JDE and Oracle on a schedule — no manual prep before each scan.
- **Reports**: per-user, per-company and per-risk reports, exportable to CSV or Excel, with an audit trail of who cleared what and when.

---

## The application map

The sidebar of Nomasx-1 follows the three areas above plus a Settings section.

| Section | What you find here |
|---|---|
| **Dashboard** | A compliance snapshot: number of users, role expirations, open SoD conflicts, licence gap, last refresh status. Each card is a drill-through to the corresponding screen. |
| **Security** | The user catalogue, roles, role assignments, sessions, SoD conflicts and the exception register. |
| **Applications** | The catalogue of JDE applications (programs and forms) with the rights each carries. |
| **Database** | The Oracle database picture — version, edition, options enabled, declared users. |
| **Licences** | CSI, JD Edwards licences, Oracle licences, subscribed licences, the usage report and the financial risk report. |
| **Settings** | Source systems, scan schedules, SoD matrices, notification rules. |

---

## Who uses it

| Role | What they typically open Nomasx-1 for |
|---|---|
| **Internal auditor** | The quarterly SoD review — *which conflicts are open, who signed off the exceptions, what trend over time?* |
| **Security officer** | *Who effectively has access to X right now?* The day-to-day what-if before granting a new role. |
| **JDE security administrator** | The full user-and-role catalogue across environments — easier than navigating the fat-client security workbench. |
| **Licence manager** | *Are we paying for modules nobody uses?* The usage report and the financial risk report are read together. |
| **CISO / Risk** | The compliance dashboard — the SoD posture trend, the licence gap, the user-account hygiene KPIs. |

---

## Roles inside Nomasx-1

The application itself ships four roles. They control what each user sees and what they can change.

| Role | What it grants |
|---|---|
| **Viewer** | Read every screen, run reports, no edits. |
| **Editor** | Everything a Viewer does, plus update the SoD matrices, schedule scans, manage notification rules. |
| **Auditor** | Everything a Viewer does, plus sign off exceptions. The only role that can close a flagged conflict. |
| **Administrator** | Everything above, plus manage the source-system configuration (JDE pools, Oracle DBA accounts, LDAP / AD mapping). |

A typical deployment keeps **Auditor** separate from **Administrator** — the rule of thumb is the same SoD principle Nomasx-1 itself enforces: the person who configures the analysis should not be the one who signs off its findings.
