---
title: Custom Queries
description: "User-defined SQL fragments overriding the default Nomasx-1 queries on a per-application basis."
keywords: [Nomasx-1, settings, custom queries, override, SQL, JDBC, per-application]
---

# Custom Queries

The **Custom Queries** screen lets each application override the SQL Nomasx-1 runs by default. One line per `(Application, Method)` pair — *Method* is the connector hook (for example `get_users`, `get_assignments`, `get_object_usage`) and *SQL Blob* carries the replacement SQL. Optional dedicated JDBC / user / password let the override target a different schema than the application's main one.

This is the extension point. When a source system stores its security tables differently from the canonical Nomasx-1 expectation, override the method here rather than touching the product.

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="scq-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#scq-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · Global · Custom Queries</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">METHOD</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AUDIT USER</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AUDIT DATE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21 — SAP Prod</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">get_users</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">admin</text>
  <text x="800" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-04-22</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">99 — Custom ERP</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">get_object_usage</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">admin</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-02</text>
</svg>

---

## Goal of the view

- **Override per application.** A row replaces the default query Nomasx-1 would run for the named method on the named application.
- **Add a separate connection if needed.** When the override SQL targets a different schema or different credentials, the dedicated *JDBC / User / Password* columns carry them; otherwise the override runs against the application's main connection.
- **Trace the change.** *Audit user* + *Audit date* record who introduced the override and when — useful when a scan starts behaving differently.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `SQL_APPS_ID` — application identifier. Joined to *Applications* for the friendly name. | Which application the override applies to. |
| **Method** | `SQL_METHOD` — connector hook name. | The query slot being overridden. |
| **SQL Blob** | `SQL_BLOB` — text. Hidden by default. | The replacement SQL fragment. |
| **JDBC / User / Password** | `SQL_JDBC`, `SQL_USER`, `SQL_PASSWORD` — optional. Hidden. | Dedicated connection used by the override. |
| **Audit user / date** | `SQL_AUDIT_USER`, `SQL_AUDIT_DATE` — who / when. | Change traceability. |

---

## Edit dialog

Click **Add** in the toolbar to declare a new override, or double-click a row to edit. The dialog has three tabs.

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="scq-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#scq-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit override — SAP Prod · get_users</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="120" height="28" rx="6" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="120" y="118" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Properties</text>
  <rect x="190" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Database</text>
  <rect x="320" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Query</text>

  <text x="60" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Application</text>
  <rect x="60" y="166" width="300" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21 — SAP Prod ▾</text>

  <text x="380" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Method</text>
  <rect x="380" y="166" width="300" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="392" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">get_users</text>

  <rect x="60" y="216" width="860" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="234" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">TABS</text>
  <text x="72" y="252" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Properties: pair (Application, Method) that the override targets. Database: optional dedicated JDBC URL + credentials. Query: the replacement SQL.</text>
</svg>

### Tab 1 — Properties

The pair that identifies the override. Both fields are mandatory.

| Field | What to enter |
|---|---|
| **Application** | Drop-down list of declared applications. The override applies to this one only. |
| **Method** | Name of the connector hook (`get_users`, `get_assignments`, `get_object_usage`, …) being overridden. |

### Tab 2 — Database

Optional dedicated connection. Leave the three fields empty to run the override against the application's main connection.

| Field | What to enter |
|---|---|
| **User** | Read-only account used to run the override SQL. |
| **Password** | Password for the account. Stored encrypted. |
| **JDBC** | JDBC URL when the override targets a different schema than the application's main one. |

### Tab 3 — Query

The replacement SQL itself. Required.

| Field | What to enter |
|---|---|
| **SQL Blob** | Multi-line text. Paste the SQL Nomasx-1 should run instead of the default for the method declared on the *Properties* tab. |

---

## Tips & best practices

- **Test the SQL outside Nomasx-1 first** — a syntactically broken override surfaces as an empty grid on the consuming screen.
- **Keep override scopes tight.** Override one method at a time rather than rewriting an entire branch — easier to maintain and to roll back.
- **Document the *why* in the change description** during code review or in a ticket — six months later, the override has to be readable by a different administrator.
- **Remove the row when no longer needed** so Nomasx-1 falls back to the default behaviour for that method.
