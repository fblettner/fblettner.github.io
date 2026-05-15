---
title: Oracle
description: "Oracle licence overview — product, version, CPU and named-users data, restricted to applications running on an Oracle database."
keywords: [Nomasx-1, licenses, Oracle, NUP, CPU, Oracle audit, named users plus]
---

# Oracle

The **Oracle** licence screen replicates the *Database → Oracle* inventory, restricted to applications whose database is Oracle (`APPS_DBTYPE = 'ORACLE'`) and enriched with the application name. One line per `(Application, Product / Instance)`.

It is the same data as the database properties page but framed as a *licence deliverable*: the data set Oracle's LMS auditor will ask for during the annual review.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="loracle-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#loracle-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licenses · Oracle</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="130" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUCT</text>
  <text x="290" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HOST</text>
  <text x="510" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">INSTANCE</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CPU</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIVE</text>
  <text x="740" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TOTAL</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TECH</text>
  <text x="870" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SIZE GB</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Enterprise Edition</text>
  <text x="290" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="510" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="660" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="740" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="800" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="870" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostic Pack</text>
  <text x="290" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="510" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="660" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="740" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="870" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <text x="290" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="510" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="660" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="740" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="800" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="870" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>
</svg>

---

## Goal of the view

Same role as *Database → Oracle*, framed for the licensing review:

- **Per-application slice.** The connector only returns rows for applications whose database is Oracle — the licence team rarely needs the others.
- **NUP-ready figures.** Active, Total, Technical users — the three counts that drive the named-user plus calculation.
- **Audit pack starting point.** Sort by *Hostname* to discuss server by server with the LMS auditor.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier. | The connected Oracle-backed application. |
| **Product** | `ORAP_PRODUCT` — product / pack name. | What is licensed (Enterprise Edition, packs, options). |
| **Full version** | `ORAP_FULL_VERSION` — full version string. | Patch level. |
| **Version** | `ORAP_VERSION` — major version. | Oracle major version. |
| **Hostname** | `ORAP_HOSTNAME` — host. | Server. |
| **Instance** | `ORAP_NAME` — instance. | Oracle instance / SID. |
| **Instances count** | `ORAP_COUNT_INST` — instance count. | RAC distinguisher. |
| **CPU** | `ORAP_CPU` — CPU core count. | Processor-licensing input. |
| **Active users** | `ORAP_ACTIVE_USERS` — count. | Active named accounts. |
| **Total users** | `ORAP_TOTAL_USERS` — count. | All named accounts. |
| **Technical users** | `ORAP_TECHNICAL_USERS` — count. | Accounts tagged technical in Nomasx-1. |
| **Pack** | `ORAP_PACK` — pack code. Hidden. | Internal — drives the licence compliance computation. |
| **Size GB** | `ORAP_SIZE_GB` — total size. | Storage footprint. |

---

## Context menu

Right-click a row to open the row menu.

| Action | Where it lands |
|---|---|
| **Display Required Licenses** | Computed licence requirement for the selected instance — feeds the compliance comparison. |

---

## Tips & best practices

- **Export the grid as the *Oracle LMS data sheet*** — the columns above match the standard collection form auditors use.
- **Filter on *Product* containing "Pack"** to highlight the heavy packs first. They are the easiest line items to challenge during the audit.
- **The same row is *not* duplicated by Data Guard standby instances** — Nomasx-1 reads them once. If the audit expects to count standbys, build the row count manually.
- **Cross-reference with *Subscribed Licenses*** to know whether a product surfaced here is actually entitled.
