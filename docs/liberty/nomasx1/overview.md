---
title: Nomasx-1 — Overview
description: "Nomasx-1 is an enterprise security & compliance application built on Liberty Next. Centralized user / role management, JD Edwards and Oracle licence compliance, and automated Segregation of Duties analysis — full visibility, risk mitigation, regulatory compliance."
keywords: [Nomasx-1, nomasx1, enterprise security, compliance, segregation of duties, SoD, JD Edwards, JDE, Oracle, licence, CSI, LDAP, audit]
---

# Nomasx-1 — Overview

**Nomasx-1** is an **enterprise security & compliance** application built on [Liberty Next](../framework/overview.md). It centralises **user and role management**, monitors **JD Edwards and Oracle licence usage** against the entitlements actually acquired, and runs **automated Segregation of Duties (SoD) analysis** — three pillars under one UI, with native JD Edwards integration.

Nomasx-1 is a **licensed application**: it ships as a set of connectors, screens and dashboards gated by an RS256 license key. The framework itself is free; Nomasx-1 and [Nomajde](../nomajde/overview.md) are sold together under a single key.

:::info[Work in progress]
This overview is the entry point. Per-screen documentation (Security Maintenance, Applications, Database, Licences, SoD matrices, reports) will arrive in follow-up commits.
:::

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nx1-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nx1-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nx1-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="220" height="380" rx="14" fill="url(#nx1-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">🗄 SOURCE SYSTEMS</text>

  <rect x="56" y="84" width="188" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">JD Edwards</text>
  <text x="68" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">security workbench, roles, env.</text>

  <rect x="56" y="140" width="188" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="160" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Oracle Database</text>
  <text x="68" y="176" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">version, options, DBA views</text>

  <rect x="56" y="196" width="188" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="216" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">LDAP / Active Directory</text>
  <text x="68" y="232" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">account verification</text>

  <rect x="56" y="252" width="188" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="272" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">CSI / licence entitlement</text>
  <text x="68" y="288" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Oracle Support customer ID</text>

  <rect x="56" y="308" width="188" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="328" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">SoD matrices</text>
  <text x="68" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">predefined + customisable</text>

  <rect x="56" y="360" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="380" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Custom attributes</text>
  <text x="68" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">technical / functional accounts</text>

  <line x1="260" y1="220" x2="380" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#nx1-arrow)"/>

  <rect x="380" y="40" width="240" height="380" rx="14" fill="url(#nx1-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="400" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ NOMASX-1 PILLARS</text>

  <rect x="396" y="84" width="208" height="100" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">👥 Security & Users</text>
  <text x="408" y="122" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• users, roles, last login</text>
  <text x="408" y="136" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• role expiration dates</text>
  <text x="408" y="150" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• unassigned / duplicate users</text>
  <text x="408" y="164" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• LDAP / AD verification</text>
  <text x="408" y="178" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• activity tracking · no JDE audit on</text>

  <rect x="396" y="192" width="208" height="100" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.35)" strokeWidth="1"/>
  <text x="408" y="212" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">📊 Oracle / JDE compliance</text>
  <text x="408" y="230" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• CSI + acquired licences</text>
  <text x="408" y="244" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• active vs declared users</text>
  <text x="408" y="258" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• module access & usage</text>
  <text x="408" y="272" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• DB versions & options</text>
  <text x="408" y="286" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• financial risk reports</text>

  <rect x="396" y="300" width="208" height="100" rx="8" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.35)" strokeWidth="1"/>
  <text x="408" y="320" fill="#f87171" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">⚖ Segregation of Duties</text>
  <text x="408" y="338" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• automated conflict detection</text>
  <text x="408" y="352" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• predefined + custom matrices</text>
  <text x="408" y="366" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• conflicts by process / activity / risk</text>
  <text x="408" y="380" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• auto-extract of security data</text>
  <text x="408" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">• reports on risks & conflicts</text>

  <line x1="620" y1="220" x2="720" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#nx1-arrow)"/>

  <rect x="720" y="40" width="240" height="380" rx="14" fill="url(#nx1-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="740" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📊 OUTPUT</text>

  <rect x="736" y="84" width="208" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Compliance dashboard</text>
  <text x="748" y="118" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">last refresh · KPIs · drill-through</text>

  <rect x="736" y="136" width="208" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="156" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Per-user audit</text>
  <text x="748" y="170" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">effective rights, history</text>

  <rect x="736" y="188" width="208" height="44" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="748" y="208" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Usage report</text>
  <text x="748" y="222" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">usage vs entitlements</text>

  <rect x="736" y="240" width="208" height="44" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="748" y="260" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Financial report</text>
  <text x="748" y="274" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">risk amount · remediation</text>

  <rect x="736" y="292" width="208" height="44" rx="8" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.30)" strokeWidth="1"/>
  <text x="748" y="312" fill="#f87171" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">SoD report</text>
  <text x="748" y="326" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">conflicts per user · per company</text>

  <rect x="736" y="344" width="208" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="364" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Export · CSV / Excel</text>
  <text x="748" y="378" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">filtered grids</text>
</svg>

---

## What it does

### Security & user management

Centralised view of users, roles and assignments — across JDE, AD and any database / API connector you point Nomasx-1 at.

| Feature | What it gives you |
|---|---|
| **User catalogue** | Creation date and last-login per user. Spot dormant accounts, recent additions, unusual activity windows. |
| **Roles & assignments** | Effective and expiration dates per role assignment. Roles that expired but were not unassigned surface in red. |
| **Risk detection** | Unassigned roles, duplicate users, technical accounts mixed with functional ones — flagged automatically. |
| **LDAP / AD integration** | Each user is verified against the directory: does the account still exist? Is it active? |
| **Data enrichment** | Add custom attributes per user / role: business owner, department, technical-account flag, … Drives the reports. |
| **Activity tracking** | Tracks user activity **without** turning JD Edwards auditing on — no operational impact on the source system. |
| **Native JD Edwards** | Reads the JDE security workbench directly (no exports, no scheduled extracts) — what the screen shows is the live state. |

### Oracle & JD Edwards compliance

Nomasx-1 also doubles as a **licence-compliance** workbench: what was bought, what is actually used, where the gap is.

| Feature | What it gives you |
|---|---|
| **CSI & acquired licences** | Track the Oracle Customer Support Identifier and the licences actually attached to it. |
| **Active vs declared users** | What JDE actually counts versus what the contract entitles. The two diverge more often than expected. |
| **Module access & transaction usage** | Per-module access trace — *who really touches Financials / Distribution / Manufacturing*. Drives the "do we need this module?" conversation. |
| **Database version & options** | Oracle DB version, edition, options enabled. Required when the auditor asks whether *Advanced Compression* is used. |
| **Usage vs entitlement** | Side-by-side: what is used, what is bought, the delta. |
| **Financial risk reports** | Money figure on the gap, with remediation suggestions. The output an audit committee will read. |

### Segregation of Duties

Automated SoD analysis — the core of an SoX-style compliance review.

| Feature | What it gives you |
|---|---|
| **Automated conflict detection** | Cross-product of every user's effective rights with the SoD matrix — conflicts surfaced per user × company. |
| **Predefined + customisable matrices** | Ship-out-of-the-box matrices for common ERP risks (post + approve, vendor + payment, …). Custom matrices added on top. |
| **Process · activity · risk model** | Conflicts are defined at the process and activity level, ranked by risk. Easier to read than raw role-vs-role pairs. |
| **Automatic extraction** | Security data is pulled from JDE / Oracle on a schedule — no manual prep before a scan. |
| **Reports** | Per-user, per-company and per-risk reports, exportable to CSV / Excel, with the audit trail of who-cleared-what. |

---

## Application structure

The Nomasx-1 sidebar follows the three pillars above plus a settings group:

| Section | Sub-sections |
|---|---|
| **Dashboard** | Compliance overview, last-refresh status, drill-through to the underlying screens. |
| **Security** | User management, role management, role relationships, environments, JDE security workbench. |
| **Applications** | JDE application catalogue, versions, processing options. |
| **Database** | Oracle version, options enabled, DBA inventory. |
| **Licences** | CSI · JD Edwards · Oracle · Subscribed licences · Usage report · Financial report. |
| **Settings** | Source connectors, scheduling, SoD matrices, notification rules. |

---

## Who is it for

| Persona | Day-to-day questions Nomasx-1 answers |
|---|---|
| **Internal auditor** | Are there users with conflicting rights on the production company? Has anyone been added to a sensitive role in the last quarter? |
| **Security officer** | Who effectively has access to *Post a journal entry*? Which exceptions are open and signed off, by whom? |
| **JDE administrator** | What roles does this user hold across environments? What forms can they reach? |
| **Licence manager** | How many of our purchased modules are actively used? Where is the financial gap and who owns the remediation? |
| **CISO / Risk** | What is our SoD posture trending toward — same conflicts every quarter, or new ones? |

---

## Users, roles and segregation of duties — inside Nomasx-1 itself

The authentication of Nomasx-1 (the application managing the analysis — not the JDE source it reads) goes through Liberty Next's [auth backend](../framework/overview.md#auth). Typical roles:

| Liberty role | What it grants in Nomasx-1 |
|---|---|
| `nomasx1.viewer` | Read every screen, run dashboards, no edits. |
| `nomasx1.editor` | Create / update the SoD matrices, schedule scans, manage notification rules. |
| `nomasx1.auditor` | Read + sign off exceptions (the only role that can close a flagged conflict). |
| `nomasx1.admin` | All of the above + manage source connectors and the AD / LDAP mapping. |

A typical deployment keeps **auditor** separate from **admin** — that is the SoD rule that protects the SoD tool itself.

---

## Next steps

| Where to go | Why |
|---|---|
| [Liberty Next → Overview](../framework/overview.md) | The framework Nomasx-1 sits on. |
| Per-screen documentation *(coming soon)* | Security · Applications · Database · Licences · SoD reports. |
| [Nomajde overview](../nomajde/overview.md) | Companion application — JD Edwards screens, real-time data, modern UI. |
