---
title: LDAP Settings
description: "Groups AD departments and drives the per-department Excel export of the Users by applications view."
keywords: [Nomasx-1, security, LDAP, settings, AD department grouping, Excel export, audit deliverable]
---

# LDAP Settings

The **LDAP Settings** screen is the grouping table behind the *Users by applications* view. Each row associates an **AD department** with an **application** and a free-form **group** label.

The same configuration drives the Excel export — one file per department, with one sheet per application inside, plus a sheet listing all LDAP entries. It is the deliverable auditors usually request to confirm *"who is in which AD department, on which application, with which roles"*.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lds-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#lds-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · LDAP · Settings</text>
  <rect x="820" y="50" width="120" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="880" y="65" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">Export Excel</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP ID</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION NAME</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GROUP</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AD DEPARTMENT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="660" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="660" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AR</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SUPPLY</text>
  <text x="660" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC-OPS</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SAP Production</text>
  <text x="460" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">HR</text>
  <text x="660" y="245" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">HR-PAYROLL</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">12 rows · export builds one .xlsx per department · one sheet per application inside</text>
</svg>

---

## Goal of the view

Two complementary purposes:

- **Group AD departments.** The *Group* column is a human label that rolls several AD departments into one functional bucket (FINANCE covers `FIN-AP`, `FIN-AR`, `FIN-CONTROL`, …). It controls how the *Users by applications* view groups its rows.
- **Drive the Excel export.** From the *Users by applications* view, an export button generates **one Excel file per department**, **one sheet per application** inside each file, and a sheet listing **all LDAP entries** as appendix. The mapping rows here are what the export iterates over.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier from the source system. | The application the row attaches the department to. |
| **Application Name** | `APPS_NAME` — name from `SETTINGS_APPLICATIONS`. | Friendly label of the application. |
| **Group** | `LDAPD_GROUP` — free text. | Human label rolling several AD departments together. Used as a sort / breakdown axis on the *Users by applications* grid. |
| **AD Department** | `LDAP_DEPARTMENT` — must match the `department` attribute of an LDAP entry. | The AD department to include in the export for the application. |

The grid is read-only here. Rows are maintained through the configuration table `SECURITY_LDAP_DPT`; the screen surfaces what is configured.

---

## Tips & best practices

- **One row per (Application × Department) pair** — duplicate rows are not needed. If a department covers several applications, add one row per application.
- **Keep the *Group* labels stable** — changing them changes the breakdown of the export and complicates the comparison with the previous quarter's deliverable.
- **A department not listed here is not exported** — even if AD users with that department exist in the *LDAP Users* screen, they will not appear on the per-department Excel file. Add a row when a new department starts producing access requests.
- **The "all LDAP entries" sheet** in the exported file is the unfiltered raw catalog — useful for the audit appendix and as a cross-check when a row seems missing from one of the per-application sheets.
