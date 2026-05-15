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

## Edit dialog

Click **Add** in the toolbar to create a new application, or double-click an existing row to edit. The dialog opens on the **Application** tab. The two read-only tabs *Activity Log* and *Audit Trail* are hidden on **Add** — they appear only when editing an existing row.

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sapp-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="300" rx="14" fill="url(#sapp-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit application — JDE Production</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="100" height="28" rx="6" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="110" y="118" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Application</text>
  <rect x="170" y="100" width="100" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="220" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Connection</text>
  <rect x="280" y="100" width="100" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">JD Edwards</text>
  <rect x="390" y="100" width="100" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="440" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">LDAP</text>
  <rect x="500" y="100" width="100" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Activity Log</text>
  <rect x="610" y="100" width="100" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="660" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Audit Trail</text>

  <text x="60" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="60" y="166" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>

  <text x="200" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Name</text>
  <rect x="200" y="166" width="320" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="212" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>

  <text x="540" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Type</text>
  <rect x="540" y="166" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="552" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE ▾</text>

  <text x="740" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Database type</text>
  <rect x="740" y="166" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="752" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ORACLE ▾</text>

  <rect x="60" y="216" width="860" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="236" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">REQUIRED ON ADD</text>
  <text x="72" y="254" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">ID is read-only on edit and required on add. Name, Type and Database type are required on both.</text>
  <text x="72" y="270" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Activity Log and Audit Trail tabs only appear after the row exists.</text>

  <rect x="780" y="296" width="60" height="28" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="314" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Cancel</text>
  <rect x="848" y="296" width="60" height="28" rx="5" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="878" y="314" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Save</text>
</svg>

### Tab 1 — Application

Identity of the application. ID is read-only when editing and required when adding. All four fields are mandatory.

| Field | What to enter |
|---|---|
| **ID** | Numeric identifier. Stays stable across the product — do not renumber after the application is in use. |
| **Name** | Friendly label that surfaces on every export. |
| **Type** | Source-system type: `JDE`, `SAP`, custom. Drives which connector reads the source. |
| **Database type** | Backend technology: `ORACLE`, `HANA`, `MSSQL`, `POSTGRES`, … |

### Tab 2 — Connection

Where the source database lives and how Nomasx-1 reaches it.

| Field | What to enter |
|---|---|
| **Host** | Hostname or IP of the database server. |
| **Port** | Database port (`1521` for Oracle, `1433` for MSSQL, …). |
| **Database** | Schema / SID / service name. |
| **User** | Read-only account Nomasx-1 uses to scan the source. |
| **Password** | Password for the account. Stored encrypted by Nomasx-1. |

### Tab 3 — JD Edwards

JDE-specific configuration. Only relevant when *Type* on the **Application** tab is `JDE`. The first six fields name the JDE OCM datasources Nomasx-1 reads to extract security; the rest control behaviour.

| Field | What to enter |
|---|---|
| **JDE SY** | Name of the JDE *System* datasource (security tables, OCM). |
| **JDE DTA** | *Business Data* datasource. |
| **JDE CTL** | *Control Tables* datasource. |
| **JDE SVM** | *Server Map* datasource. |
| **JDE CO** | *Central Objects* datasource. |
| **JDE OL** | *Object Librarian* datasource. |
| **F00950** | Schema or table where the JDE Security Workbench is stored. |
| **Standard Menu** | `Y` if the application uses the JDE standard menu; `N` for a customised menu. |
| **E1 Pages** | `Y` to extract E1 Pages from the source. |
| **E1 Composite** | `Y` to extract Composite Applications. |
| **Purge OUT** | `Y` to let Nomasx-1 purge old Object Usage Tracking rows automatically. |
| **OUT Retention Days** | Number of days of OUT history to retain when the purge runs. |

### Tab 4 — LDAP

LDAP / Active Directory scope for the application. The values control which AD entries are pulled when the LDAP scan runs.

| Field | What to enter |
|---|---|
| **LDAP Context** | Base DN to start the search from (e.g. `OU=Users,DC=corp,DC=local`). |
| **LDAP Filter** | LDAP search filter restricting the entries pulled. |
| **LDAP Exclude** | Comma-separated list of entries to exclude from the scan. |

### Tab 5 — Activity Log

Configures **which database objects Nomasx-1 should monitor** to feed the *Applications → Activity log* screen. Embedded grid of monitoring rules; one row per rule. Add a row to extend the surface, remove a row to narrow it. Hidden on **Add** — appears only after the application exists.

| Field | What to enter |
|---|---|
| **Type** | Kind of object the rule targets (e.g. `TABLE`, `SCHEMA`, `OWNER`). |
| **Apps Type** | Sub-class within the type — used by the connector to know how to query the rule's target. |
| **Name** | Name of the table, schema or owner the rule applies to. |
| **Rule** | Collection rule itself (column filter, include / exclude expression, retention…). |

Each row opens in its own dialog with the four fields above.

### Tab 6 — Audit Trail

Configures the **connection Nomasx-1 uses to read the Oracle archive logs** for this application. Single form, one row per application. The values are read by the connector that pulls the audit data and feeds the *Database → Audit Trail* / *Audit Lookup* screens. Hidden on **Add** — appears only after the application exists.

| Field | What to enter |
|---|---|
| **User** | Database account that can read the archive log views. |
| **Password** | Password for that account. Stored encrypted. |
| **Host** | Hostname or IP of the database holding the archive logs. |
| **Port** | Database port (`1521` on a standard Oracle install). |
| **Database** | Service name / SID of the database. |
| **SCN** | Starting *System Change Number* — where the next extraction resumes from. |
| **Last** | Read-only timestamp of the last successful extract. |

---

## Context menu

Right-click a row to open the row menu. The shortcuts jump to the dedicated screens pre-filtered on the selected application.

| Action | Where it lands |
|---|---|
| **JD Edwards** | JDE-specific settings screen for the application. |
| **LDAP** | LDAP scope screen for the application. |
| **Activity Log** | *Database → Activity Log* filtered on the current application. |

---

## Tips & best practices

- **Application IDs should be stable.** Once an application is referenced across roles, conflicts, licences and audit trail, renumbering the ID breaks the history.
- **Pick a meaningful name.** The application name surfaces on every export — short, recognisable labels make the deliverables easier to read.
- **Keep the credentials current.** A connector failing on credentials is the most common reason scans go stale.
- **For non-JDE sources** (`SAP`, custom ERPs), make sure the `Type` value matches what the Nomasx-1 connectors expect — the scanners branch on it.
