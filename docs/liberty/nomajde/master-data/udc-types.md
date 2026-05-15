---
title: UDC Types
description: "User Defined Code Types — the catalogue of UDC groups defined in JD Edwards, with inline edit and create from a single grid."
keywords: [Nomajde, UDC, User Defined Codes, JD Edwards, F0004, master data, UDC types]
---

# UDC Types

The **UDC Types** screen lists every *User Defined Code* group declared in JD Edwards. One line per `(Product Code, UDC Type)`. Each row points at a set of UDC values maintained on the *UDC Codes* screen.

It is the entry point for everything UDC-related — pick the type, then drill into its values.

---

## At a glance

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="udct-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#udct-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Master Data · UDC Types</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUCT CODE</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UDC TYPE</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">00</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CN</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Country Codes</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">01</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ST</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Address Book Search Type</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">04</text>
  <text x="220" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PT</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Payment Terms Codes</text>
</svg>

---

## Goal of the view

For each UDC type known to JD Edwards:

- **One catalogue, one grid.** Instead of opening the JDE form, picking the system, and waiting for the values to load, every UDC type sits on one page with filter and sort.
- **Create a UDC type without leaving the screen.** Click *Add* in the toolbar, fill the dialog, save — the new type is live in JDE.
- **Drill into the values.** Click a row to open *UDC Codes* filtered on the selected type — the typical next step.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Product Code** | `DTSY` — JDE system code. | The functional area the UDC belongs to (`00` for general, `01` for Address Book, `04` for Accounts Payable, …). |
| **UDC Type** | `DTRT` — two-character code. | The UDC group identifier within the product code. |
| **Description** | `DTDL01` — title. | Friendly label for the UDC group. |

Internal fields kept on the row but hidden by default: sequence flag, edit-code flag, code length, second-line indicator, number-of-codes counter, repository pointer and repository type, plus the audit columns (user, program, date, job, time).

---

## Edit dialog

Click **Add** in the toolbar to register a new UDC type. Click the edit icon on a row to update an existing one. The dialog is a single form with the three visible fields plus the optional flags from the JDE master.

| Field | What to enter |
|---|---|
| **Product Code** | The two-character product code the UDC belongs to. |
| **UDC Type** | The two-character UDC identifier — unique within the product code. |
| **Description** | Friendly label that surfaces wherever the UDC type is referenced. |

The remaining JDE flags (sequencing, edit-code list, code length, second-line indicator) keep their JDE meaning — set them when the deployment guidelines call for it.

Save writes back to JDE and the row appears in the grid immediately.

---

## Tips & best practices

- **Filter on *Product Code*** to focus on one functional area — `01` for Address Book, `04` for Accounts Payable, `41` for Inventory, …
- **Click the row** to drill into the *UDC Codes* values for the selected type — the usual workflow when maintaining a code list.
- **Renaming a UDC type breaks references** carried in the operational tables (the values use the type as a key). Prefer creating a new type and migrating the data.
- **The grid exports to Excel** — useful for sharing the catalogue with auditors or external consultants.
