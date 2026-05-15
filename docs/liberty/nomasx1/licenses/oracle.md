---
title: Oracle
description: "Per-database list of the Oracle licence options detected by the Nomasx-1 audit scripts — the inventory used to declare the licences required to the LMS auditor."
keywords: [Nomasx-1, licenses, Oracle, NUP, CPU, Oracle audit, named users plus, required licences, LMS]
---

# Oracle

The **Oracle** licence screen lists, for each Oracle database connected to Nomasx-1, the data points that drive the licence calculation: edition and packs detected, CPU count, named-user counters and storage footprint. One line per `(Application, Product / Pack)`.

Where *Database → Oracle* details the **database properties** (options, features, partitions — the technical inventory), this screen reframes the same source for the **licence audit**: each row is a candidate licence option found on the instance by the collection scripts, with the metrics the LMS auditor will ask for. Drill into **Display Required Licenses** on a row to see the licence components actually declared as required for that database — the official deliverable for the audit.

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

For each Oracle database, the licence-side view of what is installed:

- **Per-application slice.** Only the applications that run on Oracle appear — the licence team is not interested in the other databases.
- **NUP-ready figures.** *Active*, *Total* and *Technical* user counts are the three numbers that drive the Named User Plus calculation. *Technical* users are the accounts flagged as technical in *Users properties* — they are excluded from the NUP perimeter when negotiating with Oracle.
- **The licences required.** Right-click a row → *Display Required Licenses* to see the licence components the audit scripts flagged as required on the selected database — the list to bring to the LMS auditor.

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
