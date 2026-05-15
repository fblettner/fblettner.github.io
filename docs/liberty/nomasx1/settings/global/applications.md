---
title: Applications
description: "Registry of every connected application — identifier, type, database, host and credentials Nomasx-1 uses to reach the source system."
keywords: [Nomasx-1, settings, applications, registry, connection, JDBC, source system]
---

# Applications

The **Applications** screen is the central registry of every application Nomasx-1 connects to. One line per application. Each row holds the identifier displayed across the rest of the product, the type of the source system, the database backend and the connection details (host, port, JDBC URL, user, password).

It is the first screen to populate when bringing a new source system in, and the last one to touch once everything else works.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sapp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#sapp-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · Global · Applications</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DB</text>
  <text x="560" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HOST</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="340" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ORACLE</text>
  <text x="560" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01.corp.local</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">13</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Test</text>
  <text x="340" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ORACLE</text>
  <text x="560" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-tst-jde-01.corp.local</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SAP Production</text>
  <text x="340" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SAP</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">HANA</text>
  <text x="560" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-sap-01.corp.local</text>
</svg>

---

## Goal of the view

Maintain the registry that every other screen references:

- **Declare each source system.** One row per application — ID, name, type (`JDE`, `SAP`, custom…), database type (`ORACLE`, `HANA`, `MSSQL`, `POSTGRES`…), host.
- **Carry the connection details.** Port, database, JDBC URL, user, password, direct-DB / DB-link flags are stored here, hidden from the default grid layout. The values are read by the Nomasx-1 scanners.
- **Establish the application ID** that flows through every other screen — the connection between user, role, conflict, licence and audit data.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **ID** | `APPS_ID` — numeric identifier. | The application identifier referenced everywhere else in the product. |
| **Name** | `APPS_NAME` — friendly name. | Human-readable label. |
| **Type** | `APPS_TYPE` — source-system type. | `JDE`, `SAP`, custom… Used by the connector to know which catalog to read. |
| **Database type** | `APPS_DBTYPE` — backend type. | `ORACLE`, `HANA`, `MSSQL`, `POSTGRES`, … |
| **Country** | `APPS_CTRY_ID` — ISO country code. | Country tag on the connector. |
| **Host** | `APPS_HOST` — server. | Hostname / IP. |
| **Port** | `APPS_PORT` — port. Hidden. | Database port. |
| **Database** | `APPS_DATABASE` — schema / SID. Hidden. | DB-side identifier. |
| **User / Password** | `APPS_USER`, `APPS_PASSWORD` — credentials. Hidden. | Used by Nomasx-1 to read the source. |
| **Direct DB / DB Link** | `APPS_DIRECTDB`, `APPS_DBLINK` — flags. Hidden. | Indicates whether the connector goes through a DB link or directly. |
| **JDBC** | `APPS_JDBC` — JDBC URL. Hidden. | Connection string used when not via DB link. |

Audit columns `APPS_AUDIT_USER`, `APPS_AUDIT_DATE` are kept on the row.

---

## Tips & best practices

- **Application IDs should be stable.** Once an application is referenced across roles, conflicts, licences and audit trail, renumbering the ID breaks the history.
- **Pick a meaningful name.** The application name surfaces on every export — short, recognisable labels make the deliverables easier to read.
- **Keep the credentials current.** A connector failing on credentials is the most common reason scans go stale.
- **For non-JDE sources** (`SAP`, custom ERPs), make sure the `Type` value matches what the Nomasx-1 connectors expect — the scanners branch on it.
