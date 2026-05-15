---
title: UDC Codes
description: "User Defined Codes — the individual values inside each UDC type, with inline grid editing for bulk maintenance."
keywords: [Nomajde, UDC, User Defined Codes, JD Edwards, F0005, master data, code values]
---

# UDC Codes

The **UDC Codes** screen lists the values that belong to a UDC type — the actual codes the JDE forms validate against. One line per `(Product Code, UDC Type, Code Value)`.

Where the JDE form lets you enter one code at a time, this grid shows them all together and supports inline editing on every column.

---

## At a glance

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="udcc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#udcc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Master Data · UDC Codes</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROD.</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VALUE</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION 1</text>
  <text x="620" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION 2</text>
  <text x="820" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HARD-CODED</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">00</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CN</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FR</text>
  <text x="340" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">France</text>
  <text x="620" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">EU member state</text>
  <text x="845" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">N</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">00</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CN</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DE</text>
  <text x="340" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Germany</text>
  <text x="620" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">EU member state</text>
  <text x="845" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">N</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">00</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CN</text>
  <text x="220" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">US</text>
  <text x="340" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">United States</text>
  <text x="620" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">North America</text>
  <text x="845" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">Y</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">3 of 217 values · UDC type CN · Country Codes</text>
</svg>

---

## Goal of the view

For each value inside a UDC type:

- **All values in one grid.** The JDE form opens the type, then paginates the values one row at a time. Here every value is on one page — filter by Description, sort by Value, click a row to edit.
- **Two descriptions per code.** *Description 1* is the short label used on most JDE screens; *Description 2* carries the longer or contextual label. Both can be edited.
- **Hard-coded flag.** A value flagged *hard-coded* is one that JDE programs check explicitly in their source code — deleting or renaming it breaks behaviour. The flag is read-only in practice; treat hard-coded codes as system-managed.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Product Code** | `DRSY` — JDE system code. | The functional area. |
| **UDC Type** | `DRRT` — UDC type identifier. | The group the value belongs to. |
| **Code Value** | `DRKY` — code itself. | The value JDE forms compare against. |
| **Description 1** | `DRDL01` — main label. | Short label used in lists and lookups. |
| **Description 2** | `DRDL02` — secondary label. | Long or contextual label. |
| **Special Handling** | `DRSPHD` — flag. | Used by JDE programs that branch on the value. |
| **Hard-coded** | `DRHRDC` — `Y` / `N`. | `Y` marks codes JDE relies on in source code — do not edit. |
| **Last update** | `DRUPMJ` — Julian date. | When the value was last changed. |

Internal columns kept on the row but hidden: UDC-only flag, audit user, program, job and timestamp.

---

## Edit dialog

Click **Add** in the toolbar to register a new value, or click the edit icon on a row to update one. The dialog has the three identifying fields plus the descriptions and flags.

| Field | What to enter |
|---|---|
| **Product Code** | Inherited from the calling UDC Type — read-only when opened by drill-down. |
| **UDC Type** | Same — read-only when opened by drill-down. |
| **Code Value** | The value itself. Must be unique within the `(Product, Type)` pair. |
| **Description 1** | Short label shown wherever JDE displays the code. |
| **Description 2** | Long label — typically the audit-friendly variant. |
| **Special Handling** | Optional flag — fill only when the deployment guidelines mention it. |
| **Hard-coded** | Leave `N` for business-managed codes; `Y` is reserved for JDE-managed values. |

Save writes back to JDE; the row appears in the grid immediately and is usable by the calling forms on the next refresh.

---

## Tips & best practices

- **Open from *UDC Types*** rather than from the menu — the Product / Type filter is pre-set, so the grid shows only the values you want.
- **Use *Description 1* as the short label, *Description 2* for the long form.** JDE programs read both; keeping them consistent avoids audit confusion.
- **Never edit a hard-coded value.** `Y` in the *Hard-coded* column means a JDE program tests the value against a literal — renaming it changes behaviour silently.
- **For mass loads**, use the Excel export, edit it offline, then re-import via the upload action — much faster than typing each row.
