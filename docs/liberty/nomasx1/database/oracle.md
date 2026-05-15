---
title: Oracle
description: "Oracle database properties read from each connected application — product, version, CPU, named-users counts, options and storage."
keywords: [Nomasx-1, database, Oracle, properties, NUP, CPU, options, Data Guard, audit]
---

# Oracle

The **Oracle** screen lists the properties of every Oracle database used by a connected application. One line per `(Application, Product / Instance)`. The data is collected by the Nomasx-1 connector through standard `V$` views.

It is the technical inventory of each Oracle instance — the source of truth for the licence-side analysis carried out on *Licenses → Oracle*.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="dboracle-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#dboracle-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Database · Oracle</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUCT</text>
  <text x="270" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="360" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HOST</text>
  <text x="490" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">INSTANCE</text>
  <text x="580" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CPU</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIVE</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TOTAL</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TECH</text>
  <text x="830" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DG</text>
  <text x="880" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SIZE GB</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Enterprise Edition</text>
  <text x="270" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="360" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="490" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="580" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="830" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="880" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostic Pack</text>
  <text x="270" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="360" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="490" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="580" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="830" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="880" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <text x="270" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="360" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="490" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="580" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="830" y="213" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="880" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>
</svg>

---

## Goal of the view

For each Oracle database backing a connected application:

- **Inventory of installed products.** Database edition, packs, options — what is actually deployed on the server.
- **Sizing data.** CPU count + active vs total users + technical users + storage size — the inputs of the Oracle licence calculation, whether NUP (named-user plus) or processor-based.
- **Data Guard footprint.** The `DG` flag tells whether the instance participates in a Data Guard configuration — relevant for failover sizing and licence dual-counting questions.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `ORAP_APPS_ID` — application identifier. | The connected application. |
| **Product** | `ORAP_PRODUCT` — product / pack / option name. | What is installed (Enterprise Edition, Diagnostic Pack, Advanced Compression, …). |
| **Full version** | `ORAP_FULL_VERSION` — full version string. | Exact installed patch level. |
| **Version** | `ORAP_VERSION` — major version. | Major version (19c, 21c, …). |
| **Hostname** | `ORAP_HOSTNAME` — host. | Server hosting the instance. |
| **Instance** | `ORAP_NAME` — instance name. | Oracle SID / DB unique name. |
| **Instances count** | `ORAP_COUNT_INST` — number of instances. | RAC distinguishes from single-instance. |
| **CPU** | `ORAP_CPU` — CPU core count. | Used for processor-based licensing. |
| **Active users** | `ORAP_ACTIVE_USERS` — count. | Active named accounts on the database. |
| **Total users** | `ORAP_TOTAL_USERS` — count. | All named accounts on the database. |
| **Technical users** | `ORAP_TECHNICAL_USERS` — count derived from `USRP_TECHNICAL`. | Users flagged as technical in Nomasx-1 — excluded from NUP. |
| **Pack** | `ORAP_PACK` — pack code. Hidden. | Used by the licence compliance computation. |
| **Data Guard** | `ORAP_DG` — boolean. | Whether the instance is part of a Data Guard configuration. |
| **Size GB** | `ORAP_SIZE_GB` — total size. | Storage footprint. |

---

## Context menu

Right-click a row to open the row menu. Each shortcut opens the dedicated screen pre-filtered on the selected database — the four drill-downs that complete the Oracle technical picture.

| Action | What it shows |
|---|---|
| **Display Users** | The list of accounts declared on the application — for an Oracle-only application those are the database users. Columns: user ID, status, creation date, last login, last usage, plus the technical / generic / linked flags. |
| **Display Options** | The Oracle options collected from the instance. One row per `(component, parameter, value)` — the parameters that switch a licensable option on or off, mapped to the licence component each belongs to. |
| **Display Features** | The Oracle features observed on the instance from the feature-usage history. One row per feature with the licence component, first and last usage date. The first / last dates tell whether a feature was ever used, and whether it is still used today. |
| **Display Partitions** | The tables and indexes that use the Partitioning option. One row per `(owner, segment type, segment name)` with the creation date and the date of the last DDL. The owner is flagged when it is a technical account, so a partitioned object held by a vendor schema can be told apart from one created by the business. |

---

## Tips & best practices

- **Filter on *Product* containing "Pack"** to extract the management packs in use — the heaviest audit topic.
- **Cross-check *Active users* against *Total users*** — a large gap means dormant accounts on the database itself, separate from the source-system accounts.
- **The *Technical users* column** lets you compute a "real human" NUP figure when negotiating the renewal.
- **A *Data Guard* configuration** doubles the licence requirement unless the standby is configured as a *passive* failover — clarify with Oracle.
