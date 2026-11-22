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

<svg viewBox="0 0 1320 386" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ora-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ora-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ora-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ora-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="306" rx="14" fill="url(#ora-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Database - Oracle Properties</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">2 rows · 12 ms</text>
  <rect x="989" y="84" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="85" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="89" x2="1038" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="389" y="112" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="414.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="596" y="112" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="719" y="112" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="112" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="359" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="373" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="459" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPONENT</text>
  <text x="649" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">FULL VERSION</text>
  <text x="733" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VERSION</text>
  <text x="783" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">HOSTNAME</text>
  <text x="863" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="969" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace"># INSTAN…</text>
  <text x="1009" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">CPU</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="173" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="184.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Database 19c Enterprise E…</text>
  <text x="649" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">19.0.0.0.0</text>
  <text x="733" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">19</text>
  <text x="783" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dbhost01</text>
  <text x="863" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDEPRD</text>
  <text x="969" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="1009" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">8</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="195" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="206.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="373" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-TEST</text>
  <text x="459" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Database 19c Standard Edi…</text>
  <text x="649" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">19.0.0.0.0</text>
  <text x="733" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">19</text>
  <text x="783" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dbhost02</text>
  <text x="863" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDETST</text>
  <text x="969" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="1009" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="459" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="649" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="733" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="783" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="863" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="969" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="1009" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="459" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="649" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="733" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="783" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="863" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="969" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="1009" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="258" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="272.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="459" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="649" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="733" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="783" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="863" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="969" y="272.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="1009" y="272.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="233" y="304" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="292" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="305.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="305" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–2 of 2</text>
  <text x="1087" y="305" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="256" y="191.0" width="185" height="98" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="197.0" width="177" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="211.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users</text>
  <text x="431" y="211.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="233.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Options</text>
  <text x="431" y="233.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="255.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Features</text>
  <text x="431" y="255.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="277.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Partitions</text>
  <text x="431" y="277.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Component</text>
  <text x="225.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">edition read from the database</text>
  <line x1="360.0" y1="342" x2="467" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
  <rect x="515.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hostname · Name</text>
  <text x="525.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where the instance runs</text>
  <line x1="660.0" y1="342" x2="791" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
  <rect x="815.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif"># Instance · CPU</text>
  <text x="825.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">processor licence basis</text>
  <line x1="960.0" y1="342" x2="1001" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
  <rect x="12" y="164.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="179.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row actions (···)</text>
  <text x="22" y="192.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or right-click the row</text>
  <line x1="197" y1="181.0" x2="248" y2="181.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
  <rect x="12" y="272.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="287.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Users · Options · Features · Partitions</text>
  <text x="22" y="300.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">four drill-downs</text>
  <line x1="197" y1="289.0" x2="276" y2="289.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Columns</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users, pack OEM, Data Guard, size…</text>
  <line x1="1119" y1="134.0" x2="967.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
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
| **Component** | `ORAP_PRODUCT` — product / pack / option name. | What is installed (Enterprise Edition, Diagnostic Pack, Advanced Compression, …). |
| **Full Version** | `ORAP_FULL_VERSION` — full version string. | Exact installed patch level. |
| **Version** | `ORAP_VERSION` — major version. | Major version (19c, 21c, …). |
| **Hostname** | `ORAP_HOSTNAME` — host. | Server hosting the instance. |
| **Name** | `ORAP_NAME` — instance name. | Oracle SID / DB unique name. |
| **# Instance** | `ORAP_COUNT_INST` — number of instances. | RAC distinguishes from single-instance. |
| **CPU** | `ORAP_CPU` — CPU core count. | Used for processor-based licensing. |
| **# Active users** | `ORAP_ACTIVE_USERS` — count. | Active named accounts on the database. |
| **# Total users** | `ORAP_TOTAL_USERS` — count. | All named accounts on the database. |
| **# Technical Users** | `ORAP_TECHNICAL_USERS` — count derived from `USRP_TECHNICAL`. | Users flagged as technical in Nomasx-1 — excluded from NUP. |
| **Pack OEM** | `ORAP_PACK` — pack code. Hidden. | Used by the licence compliance computation. |
| **Data Guard (Y/N)** | `ORAP_DG` — boolean. | Whether the instance is part of a Data Guard configuration. |
| **Size GB** | `ORAP_SIZE_GB` — total size. | Storage footprint. |

---

## Context menu

Click the **···** button at the start of a row, or right-click the row, to open its menu. Each shortcut opens the dedicated screen pre-filtered on the selected database — the four drill-downs that complete the Oracle technical picture.

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
