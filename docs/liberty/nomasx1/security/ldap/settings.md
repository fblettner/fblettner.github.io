---
title: LDAP Settings
description: "Groups AD departments by application — the grouping behind the Users by applications view and its Excel export."
keywords: [Nomasx-1, security, LDAP, settings, AD department grouping, Excel export, audit deliverable]
---

# LDAP Settings

The **LDAP Settings** screen is the grouping table behind the *Users by applications* view. Each row associates an **AD department** with an **application** and a free-form **group** label.

The same grouping shapes the Excel export of *Users by applications* — filtered on a group or a department, **Export → Excel (.xlsx)** gives the file auditors usually request to confirm *"who is in which AD department, on which application, with which roles"*.

---

## At a glance

<svg viewBox="0 0 1320 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxlds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxlds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxlds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxlds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="300" rx="14" fill="url(#nxlds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP - Department</text>
  <rect x="380.572" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="402.572" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.ldap_department_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">12 rows · 6.9 ms</text>
  <rect x="982" y="100" width="114" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="983" y="101" width="55" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1010.5" y="113.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Table</text>
  <line x1="1039" y1="105" x2="1039" y2="115" stroke="#334155" strokeWidth="1"/>
  <text x="1067.5" y="113.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Chart</text>
  <rect x="240" y="128" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="418" y="128" width="64" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="450.0" y="142.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="673" y="128" width="107" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="683" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="786" y="128" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="839" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="902" y="128" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="955" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="1018" y="128" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="240" y="160" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="357" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="440" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION NAME</text>
  <text x="533" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">GROUP</text>
  <text x="603" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DEPARTMENT</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP production</text>
  <text x="533" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="603" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP production</text>
  <text x="533" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="603" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN-AR</text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP production</text>
  <text x="533" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SALES</text>
  <text x="603" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SALES</text>
  <rect x="240" y="255" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="269.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP production</text>
  <text x="533" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">OPERATIONS</text>
  <text x="603" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">LOG</text>
  <text x="240" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="311.88" y="288" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="321.88" y="301.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="375.88" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–12 of 12</text>
  <rect x="992" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="288" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="301.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the application of the mapping</text>
  <line x1="200" y1="227.0" x2="270" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxlds-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rolls departments together</text>
  <line x1="1120" y1="217.0" x2="553" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxlds-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">AD department</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the directory's department value</text>
  <line x1="1120" y1="307.0" x2="980" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxlds-arrow)"/>
</svg>

---

## Goal of the view

Two complementary purposes:

- **Group AD departments.** The *Group* column is a human label that rolls several AD departments into one functional bucket (FINANCE covers `FIN-AP`, `FIN-AR`, `FIN-CONTROL`, …). It controls how the *Users by applications* view groups its rows.
- **Shape the Excel export.** Only the departments listed here reach *Users by applications*, so only they reach its export; filtering that grid on one *Group* before **Export → Excel (.xlsx)** gives one file per group of departments.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier from the source system. | The application the row attaches the department to. |
| **Application Name** | `APPS_NAME` — name from `SETTINGS_APPLICATIONS`. | Friendly label of the application. |
| **Group** | `LDAPD_GROUP` — free text. | Human label rolling several AD departments together. Used as a sort / breakdown axis on the *Users by applications* grid. |
| **AD Department** | `LDAP_DEPARTMENT` — must match the `department` attribute of an LDAP entry. | The AD department to include in the export for the application. |

The grid is read-only. The group and department pairs are maintained under [Settings → Security → Department](../../settings/security/department.md).

---

## Tips & best practices

- **An empty *Group*** marks an AD department of the directory that has no pair under [Settings → Security → Department](../../settings/security/department.md) yet — declare it there.
- **Keep the *Group* labels stable** — changing them changes how the export is cut and complicates the comparison with the previous quarter's deliverable.
- **A department not listed here is not exported** — even if AD users with that department exist in the *LDAP Users* screen, they will not appear in *Users by applications* nor in its export. Declare the pair under *Settings → Security → Department* when a new department starts producing access requests.
- **The full directory** is on the [LDAP Users](./users.md) screen — export it as the audit appendix, and as a cross-check when a person seems missing from *Users by applications*.
