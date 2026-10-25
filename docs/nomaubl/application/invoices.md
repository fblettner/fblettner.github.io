---
title: E-Invoicing
description: "The day-to-day NomaUBL invoice list — search, filter and inspect every invoice; open a detail view to consult parties, lines, VAT, lifecycle and PDF; edit, copy, resend or e-mail invoices; manually set a status."
keywords: [NomaUBL, e-invoicing, invoices, list, filter, search, status, detail, lifecycle, PDF, e-mail, set status, resend, edit, copy, RFE, Réforme de la Facturation Électronique, JD Edwards, SAP, NetSuite, custom ERP]
---

# E-Invoicing

The **E-Invoicing** screen is the central operational page of NomaUBL — the official entry point for the *Réforme de la Facturation Électronique* (RFE) workflow. It lists every invoice the platform has processed, with rich filters, a status-driven detail view, and the actions a user needs day to day: edit, copy, delete, manually set a status, e-mail the PDF to the customer, resend to the Plateforme Agréée.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. Every record visible here was persisted in the local NomaUBL database after going through the processing pipeline.

---

## At a glance

<svg viewBox="0 0 1200 462" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="inv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="inv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="inv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="inv-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="422" rx="14" fill="url(#inv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">E-Invoicing</text>
  <rect x="240" y="64" width="206" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="78.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 1 – 31 Oct 2026 · Update date ▾</text>
  <rect x="456" y="64" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="466" y="78.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Issued (sales) ▾</text>
  <rect x="618" y="70" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="635" y="79" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Exclude reviewed errors</text>
  <text x="240" y="113" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUS</text>
  <rect x="286" y="100" width="101" height="20" rx="10.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="336.5" y="113.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">To correct  8  ▾</text>
  <rect x="393" y="100" width="131" height="20" rx="10.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="458.5" y="113.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Decision needed  19  ▾</text>
  <rect x="530" y="100" width="106" height="20" rx="10.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="583.0" y="113.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Processing  96  ▾</text>
  <rect x="642" y="100" width="136" height="20" rx="10.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="710.0" y="113.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">At the platform  136  ▾</text>
  <rect x="784" y="100" width="116" height="20" rx="10.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="842.0" y="113.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Completed  2 102  ▾</text>
  <text x="910" y="114" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">✕ Clear filters</text>
  <rect x="393" y="126" width="210" height="112" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="403" y="135" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M405.5,140.5 L407.8,142.8 L411.8,138" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="420" y="144" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Decision needed · 19</text>
  <rect x="415" y="157" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M417.5,162.5 L419.8,164.8 L423.8,160" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="432" y="166" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <circle cx="439" cy="162.5" r="3" fill="#fb923c"/>
  <text x="447" y="166" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">207 Disputed</text>
  <text x="591" y="166" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <rect x="415" y="179" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M417.5,184.5 L419.8,186.8 L423.8,182" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="432" y="188" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <circle cx="439" cy="184.5" r="3" fill="#fb923c"/>
  <text x="447" y="188" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">210 Refused</text>
  <text x="591" y="188" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">7</text>
  <rect x="415" y="201" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="432" y="210" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <circle cx="439" cy="206.5" r="3" fill="#64748b"/>
  <text x="447" y="210" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">208 Suspended</text>
  <text x="591" y="210" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="240" y="250" width="117" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="298.5" y="264.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▸ Advanced Filters</text>
  <rect x="240" y="282" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="296.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">🔍 Search…</text>
  <rect x="470" y="282" width="48" height="22" rx="5" fill="url(#inv-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="494.0" y="296.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run</text>
  <rect x="240" y="314" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOC</text>
  <text x="320" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DCT</text>
  <text x="360" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KCO</text>
  <text x="420" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UBL</text>
  <text x="540" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ISSUED</text>
  <text x="620" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CUSTOMER</text>
  <text x="730" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOTAL</text>
  <text x="810" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="920" y="331.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REVIEW</text>
  <rect x="240" y="346" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12345</text>
  <text x="320" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="360" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="420" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">INV-2026-0142</text>
  <text x="540" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-09</text>
  <text x="620" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="730" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 200,00</text>
  <rect x="810" y="350.0" width="75" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="847.5" y="361.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">207 Disputed</text>
  <text x="920" y="361.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <rect x="240" y="374" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12346</text>
  <text x="320" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="360" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="420" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">INV-2026-0143</text>
  <text x="540" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-09</text>
  <text x="620" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="730" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">540,00</text>
  <rect x="810" y="378.0" width="75" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="847.5" y="389.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">207 Disputed</text>
  <text x="920" y="389.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="402" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12347</text>
  <text x="320" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="360" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00002</text>
  <text x="420" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">INV-2026-0144</text>
  <text x="540" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-10</text>
  <text x="620" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="730" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 980,00</text>
  <rect x="810" y="406.0" width="70" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="845.0" y="417.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">210 Refused</text>
  <text x="920" y="417.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period + date basis</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">update, issue or archive</text>
  <line x1="200" y1="77.0" x2="240" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Status by stage</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one click: the whole stage</text>
  <line x1="200" y1="113.0" x2="286" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choose statuses</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the caret opens the panel</text>
  <line x1="200" y1="213.0" x2="393" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced Filters + Run</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">server query, capped slice</text>
  <line x1="200" y1="287.0" x2="470" y2="293" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Direction</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">issued by default</text>
  <line x1="1000" y1="47.0" x2="576" y2="64" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="1000" y="138" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clear filters</text>
  <text x="1010" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">when a status is picked</text>
  <line x1="1000" y1="155.0" x2="946" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="1000" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click → detail window</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7 tabs, opens on Summary</text>
  <line x1="1000" y1="377.0" x2="950" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
</svg>

---

## Toolbar

Above the grid, two rows: the **period**, the **direction** and **Exclude reviewed errors**, then the **status by stage**. The [Advanced Filters](#advanced-filters) panel and the grid toolbar (search, **Run**, bulk actions) follow.

### Period

The shared [period picker](../configuration/default-periods.md#period-picker): presets, two-month calendar, and the date basis in its footer. The list opens on *This month*, or on the [default period](../configuration/default-periods.md#default-periods) set for the *Invoices* view. A list opened from a dashboard or a VAT drill-down takes the dates of that page.

### Date basis \{#date-basis\}

The footer of the period picker chooses **which date column the period is read against**.

| Value | Date column | When to use |
|---|---|---|
| **Update date** *(default)* | The last time the invoice was modified in NomaUBL. | Day-to-day operations. |
| **Issue date** | The date printed on the invoice itself (BT-2 from the UBL). | Reconciling against the [VAT Declaration](./vat-declaration.md) page or any external system that keys off the issue date. |
| **Archive date** | The date the document was processed into the archive. | Reconciling against the [IT dashboard](./tech-dashboard.md) and the processing reports. |

The choice is **remembered for the current session**. It is also **set automatically** when the list is opened from a dashboard or a VAT drill-down, so the count on E-Invoicing matches the count you came from.

### Direction \{#direction-chip\}

A selector next to the period: **Issued (sales)** *(default)*, **Received (purchases)**, or **All directions**.

| Value | Effect |
|---|---|
| **Issued (sales)** | Only the invoices sent to customers (`UHDRIN = '2'`). |
| **Received (purchases)** | Only the supplier invoices pulled from the PA (see [Sync → Fetch Input → PA inbound](../sync/fetch-input.md) and the bundled `received-ubl` document). |
| **All directions** | No direction filter — both are listed. |

The selector resolves against the `UHDRIN` flag stored on each row — a template's *Direction* change does not re-classify historical rows, so the result is stable over time.

On a *Received* row the **Counterparty** column reads from `AccountingSupplierParty` (the supplier), not from `AccountingCustomerParty` — so the column shows the supplier name on inbound invoices and the customer name on outbound ones. The status workflow, the detail modal and the column catalog are otherwise identical; only the emit-only seller actions (Resend to PA, Send completed, Credit note…) are hidden on received-direction rows.

### Exclude reviewed errors \{#exclude-reviewed\}

The **Exclude reviewed errors** switch, next to the direction selector, hides the rows already marked *Reviewed* that still sit in an error status (`errorTech` / `errorBusiness` groups of the [statuses template](../configuration/system/statuses.md)), so the list keeps only the errors nobody has looked at yet. Reviewed rows in any other status stay listed. The switch is set automatically when the list opens from a dashboard where it was on ([Billing overview](./billing-overview.md), [Statistics](./statistics.md), [Operations](./dashboard.md#exclude-reviewed)). The `GET /api/invoices` endpoint takes the same filter as `excludeReviewedErrors=true`.

### Status by stage \{#status-by-stage\}

The **Status** row groups the statuses of the period into the five stages of the [Statistics](./statistics.md#stages) dashboard — **To correct**, **Decision needed**, **Processing**, **At the platform**, **Completed** — plus **Other** when a status outside these groups has invoices or is selected. Each stage is a pill with its colour and count.

| Gesture | Effect |
|---|---|
| Click on the stage name | Selects every status of the stage (*Show only this stage*); a second click shows every status again. |
| Click on the caret **▾** | Opens *Choose statuses*: a checkbox for the whole stage (all, none or partial) and one per status, with its colour, label and count, biggest first. |
| Partial selection | The count reads `picked / total` and the pill gets a dashed border. |
| **✕ Clear filters** | Appears when a status is selected; clears the selection. |

A stage with no invoice on the period is greyed out. A dashboard click (a queue, a stage, a status) lands on the list with the matching statuses already picked.

### Advanced Filters \{#advanced-filters\}

A collapsible **Advanced Filters** panel sits below the status row. It offers one row per filterable column of the active [List Views](../configuration/list-views.md) spec — by default *DOC*, *DCT*, *Company*, *Party Number*, *Party Name*, *Bar code*, *Review*, *Status*, *Invoice type*, *Activity code*, *Reason code* — with a per-column operator picker (`contains`, `equals`, `≠`, `<`, `≤`, `>`, `≥`, `between`, `empty`, `not empty`). Edits stay as a draft until **Run** commits them, so typing in the panel does not spam the back-end.

:::info[How the text filters match]
A text filter matches from the **start** of the value and uses the column's index, so the list stays fast on a large table. To search for text anywhere in the value, wrap it in percent signs — `%acme%` matches *acme* wherever it appears, at the cost of a full scan. The **DOC** filter takes a shortcut: an all-digits value seeks the document number directly rather than scanning. Filters on columns backed by a reference list (status, routing…) accept **several values at once** — pick more than one and the list shows rows matching any of them.
:::

The set of columns that can be filtered is defined in the spec's `filter: true` allow-list — operators decide which columns they actually query and trim the rest from the panel without losing them from the grid. See [List Views](../configuration/list-views.md) for the editor.

The page runs in **hybrid client-side mode**: each *Run* loads one capped slice from the server (`spec.maxRows`, default 5000) and the grid handles filter / sort / paginate / group within that slice — no roundtrip while typing in the per-column filter row, filters survive pagination naturally. When the slice cap is hit, an `X / Y rows` notice next to *Run* tells the operator to narrow the period or the *Advanced Filters*.

RefList columns (Status, eReporting Status, custom lists) get a **multi-select picker** in both the Advanced Filters panel and the per-column filter row — pick any number of codes, the trigger shows `N selected` past the inline cap, and a `✕` on the right resets the selection in one click. The server applies an `IN (?,?,?)` clause so picking three statuses returns the union.

### Grid toolbar

Next to the search box of the grid: **Run** (reloads the list with the current filters), then **Resend selected (N)** and **Reprocess selected (N)** when rows are ticked (see [Bulk resend](#bulk-resend) and [Reprocess](#reprocess)). A new invoice is created from the **Quick Actions** of the [Operations](./dashboard.md) dashboard.

---

## Invoice list

The table shows one row per invoice. Default sort: most recent document number first. Click any column header to sort by that column.

The grid renders through **DataTableV2** in spec-driven mode: column shape, labels, format, alignment, width and the filter-row allow-list come from the `view.invoices` spec stored on `db-nomaubl` (with a bundled default in the JAR). Adding or removing columns is done from the [List Views](../configuration/list-views.md) editor — no code change required when the column already lives in the catalog.

The **Updated** value carries the time of day, so an *Updated* column formatted as `datetime` in the spec shows `2026-09-15 15:23:45` rather than the bare date. (The issue date stays date-only — JDE stores no time for it.)

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '70px 50px 70px 1.4fr 90px 1.6fr 100px 100px 60px 130px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '11px'}}>
    <div>Doc</div><div>Dct</div><div>Kco</div><div>UBL number</div><div>Issue date</div><div>Customer</div>
    <div style={{textAlign: 'right'}}>Total HT</div><div style={{textAlign: 'right'}}>Total TTC</div><div>Cur.</div><div>Status</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '70px 50px 70px 1.4fr 90px 1.6fr 100px 100px 60px 130px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>12345</div><div>RI</div><div>00070</div><div>FA-2026-001234</div><div>24/04/2026</div><div>Acme Industries SA</div>
    <div style={{textAlign: 'right'}}>1,250.00</div><div style={{textAlign: 'right'}}>1,500.00</div><div>EUR</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>200 Approved</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '70px 50px 70px 1.4fr 90px 1.6fr 100px 100px 60px 130px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>12346</div><div>RI</div><div>00070</div><div>FA-2026-001235</div><div>23/04/2026</div><div>Globex Logistics</div>
    <div style={{textAlign: 'right'}}>850.00</div><div style={{textAlign: 'right'}}>1,020.00</div><div>EUR</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>9906 Pending</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '70px 50px 70px 1.4fr 90px 1.6fr 100px 100px 60px 130px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>12347</div><div>RN</div><div>00070</div><div>AV-2026-000089</div><div>22/04/2026</div><div>Initech Services</div>
    <div style={{textAlign: 'right'}}>−200.00</div><div style={{textAlign: 'right'}}>−240.00</div><div>EUR</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.1)', color: '#fb923c'}}>207 Disputed</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '70px 50px 70px 1.4fr 90px 1.6fr 100px 100px 60px 130px', padding: '10px 14px', alignItems: 'center'}}>
    <div>12348</div><div>RI</div><div>00070</div><div>FA-2026-001236</div><div>22/04/2026</div><div>Hooli SAS</div>
    <div style={{textAlign: 'right'}}>3,400.00</div><div style={{textAlign: 'right'}}>4,080.00</div><div>EUR</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.1)', color: '#f87171'}}>213 Rejected</span></div>
  </div>
</div>

### Default columns

| Column | Description |
|---|---|
| **Doc** | Internal document number. |
| **Dct** | Document type. |
| **Kco** | Company code. |
| **UBL number** | The invoice number as it appears in the generated UBL document. Filterable from the **Advanced Filters** panel and via the `?ublNumber=` query parameter, on top of the free-text search box. |
| **Issue date** | BT-2 from the UBL. |
| **Customer** | Buyer party name. |
| **Country** | ISO 3166 two-letter code of the counterparty (`FR`, `DE`, `BE`, `US`…). Captured at insert from the UBL — buyer country on sales, supplier country on purchases. Drives the country-group classification used by the [VAT Declaration](./vat-declaration.md) page. |
| **Total HT** | Total amount excluding VAT. |
| **Total TTC** | Total amount including VAT. |
| **Currency** | ISO 4217 code. |
| **Status** | Status badge — code + label, coloured by family. |
| **Review** | Coloured **review badge** — *Pending* (awaiting customer service) or *Reviewed*. Lit up when the row needs operator attention — a status the dispatcher could not auto-resolve, a manual edit flagged on save, or a downstream system marking the row for re-check. It also lights up for an invoice **Deposited (200) with reason `NON_TRANSMISE`**: not an error, but the recipient has no active reception address, so the operator must forward it manually — other 200s keep a quiet dash. An invoice **corrected by hand** — saved from the invoice window or repaired with *Fix buyer* — is flagged *Reviewed* as soon as the validation that follows raises no error, whatever its status. Empty when nothing is pending: a few badges in an otherwise clear page tell you exactly where to start. |

A page-size selector at the bottom defaults to 50 rows per page; values up to 500 are accepted. The total count of matching invoices is shown next to the pagination controls.

### Catalog columns

The Invoices view's SQL now joins `F564231` (UH) and `F564230` (FE) on doc / dct / kco via a `LEFT JOIN`, so the column catalog exposes 16 additional archive / log columns. Any of them can be added to the spec via the [List Views](../configuration/list-views.md) editor's `+ Add column` picker — the `LEFT JOIN` keeps invoice rows when no log entry exists.

| Catalog column | What it carries |
|---|---|
| `logSourceFile` | Name of the source file that produced the invoice. |
| `logActivityCode` / `logSubType` | Activity code and sub-type recorded at ingestion. |
| `logAlphaKey` | Alpha-key alias used by some upstream systems. |
| `logAmount` | Amount carried by the log row (raw, no currency rebase). |
| `logInvoiceDate` / `logDueDate` | Invoice date and due date recorded at ingestion. |
| `logCreated` | Creation timestamp (`UPMJ + UPMT` composite). |
| `logUser` / `logJobn` / `logPid` / `logVersion` | JDE user, job, PID and version stamps. |
| `logBusinessUnit` | Business unit recorded at ingestion. |
| `logRouting` | BAR routing recorded at ingestion. |
| `logSendToPaFlag` | Flag captured at ingestion telling whether the row was eligible for PA submission. |
| `logPaUuid` | PA-side UUID assigned to the invoice at submission time. |

### Click-through

Clicking any row opens the **Detail modal** for that invoice. Most actions are per-invoice, but the list also supports a **bulk resend** — see below.

### Bulk resend \{#bulk-resend\}

Each row carries a **checkbox**, and a **Resend selected (N)** button appears in the toolbar once at least one row is ticked. It resends the whole batch to the [Plateforme Agréée](../configuration/system/einvoicing.md) in one action, through the same progress window used elsewhere (live counters, *Cancel*, *Run in background*). Only invoices that may actually be sent are selectable — rows whose document type is set to *Do not send* are disabled, so a non-transmissible invoice can't be swept into a batch by mistake. For the same reason, the per-invoice **Resend** action is hidden on *Do not send* rows.

### Reprocess \{#reprocess\}

A **Reprocess selected (N)** button appears next to *Resend selected* when the ticked rows include invoices eligible for reprocessing. Reprocessing is a **reprint**: for an invoice the platform **deposited but did not transmit** (status 200, reason `NON_TRANSMISE`), it regenerates the readable PDF / XML and the UBL file from the JDE XML source archived at first submission, into the output and burst folders. Nothing changes in the database and the UBL is not validated again — the stored e-invoice, including a later *Fix buyer* correction, stays the reference, and its validation results are kept. The invoice keeps its current status, a *Retraitement* entry is added to its history, nothing is re-sent to the platform, and each invoice is reprocessed only once. Only invoices on a template with **Allow reprocess** enabled (an XML-source template — see [Documents](../management/documents.md)) are eligible; the others are ignored in the selection. The same run is available from the [Tech Dashboard](tech-dashboard.md#to-reprocess) and the command line.

The selection also covers **validation failures**: an invoice in *Validation failed* (`9905`) on a template with **Allow full reprocess** enabled is **reprocessed in full** — enrichment queried again, UBL regenerated, validated and sent to the PA when the template and document type say so; the history is kept and a new cycle starts. The confirmation states which invoices are reprinted and which are reprocessed in full. The invoice window offers the same full reprocess through a **Reprocess** button on a `9905`.

Several invoices are reprocessed as **one batch per template**, in the background with its live log: their sources are staged in a working folder, the *Max threads* global setting bounds the parallelism and an invoice is never processed twice. A single invoice still runs on its own.

### Export

A small **Export** button in the toolbar exports the current view (filters applied) as a CSV file named `invoices.csv`.

---

## Detail modal

Clicking a row opens a modal with seven tabs along the top: **Summary**, **Parties**, **Lines**, **VAT**, **Notes**, **History**, **PDF**. The modal title shows the invoice's `DOC / DCT / KCO` triplet. A **fullscreen toggle** in the header switches between a windowed and a full-screen view.

**Previous / next arrows** (and the ← → keys) in the header move through the invoices of the list without closing the window — the same order and filters as the table on screen — with a position indicator (e.g. `3 / 50`). Past the last invoice, navigation loops back to the first.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0', margin: '20px 0', overflow: 'hidden'}}>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontWeight: 700, fontSize: '14px'}}>12345 / RI / 00070</div>
    <div style={{display: 'flex', gap: '6px', fontSize: '12px', opacity: 0.6}}>⛶ ✕</div>
  </div>
  <div style={{display: 'flex', gap: '0', padding: '0 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto'}}>
    <div style={{padding: '10px 16px', fontWeight: 600, borderBottom: '2px solid #4a9eff', color: '#4a9eff'}}>Summary</div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>Parties</div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>Lines <span style={{opacity: 0.5, fontSize: '11px'}}>(8)</span></div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>VAT</div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>Notes <span style={{opacity: 0.5, fontSize: '11px'}}>3</span></div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>History <span style={{opacity: 0.5, fontSize: '11px'}}>(5)</span></div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>PDF</div>
  </div>
  <div style={{padding: '14px 18px', fontSize: '12px', opacity: 0.6, fontStyle: 'italic'}}>Tab content — depends on the active tab</div>
</div>

### Summary tab *(default)*

The Summary tab shows a coloured **status badge** at the top — with, under it, the status details and the **Rule set** the invoice was produced under (see [Rule sets](../ubl-tools/rule-sets.md)) — followed by **action buttons** (Edit UBL, Copy, Delete) on the right. **Delete** removes the invoice and every related record — log row (source XML, PA transaction reference, source file name), lifecycle, lines, VAT and validation — so a later run of the same document starts fresh and the [watched folders](../management/watched-folders.md) can pick its source file up again. Deletion follows the same protection as *Fix buyer*: the button is hidden once the PA has processed the invoice, except for a **213** rejection with an addressing reason. Right under the badge, when the platform returned them, the current **rejection reason**, **expected action** and **status note** are shown inline, and the full **status message** sits in a collapsed group — expand it for the platform's long error text. The same values feed the custom actions as `{message}`, `{reasonLabel}`, `{actionLabel}` and `{actionNote}` placeholders (see [Actions](../management/actions.md#custom-actions)), with no list-view column needed.

#### Fix buyer \{#fix-buyer\}

The most frequent PA rejections are about the **buyer's identifiers** — SIREN (BT-47), SIRET (BT-46), intra-community VAT (BT-48) and electronic address (BT-49). A **Fix buyer** button opens a compact form pre-filled from the stored UBL, with the [INSEE company search](./edirectory.md) and the PPF electronic-address picker, to correct just those fields without re-editing the whole invoice. Only the changed identifiers are replaced inside the stored UBL — the rest of the document stays untouched — then the invoice is **revalidated on the spot**, an audit event records the old and new values in the history, and an option **resends to the PA** when validation passes. The button appears only while the invoice is still correctable — before the PA has taken it over, or when it was **Rejected (213) for an addressing reason**: `ADR_ERR`, `REJ_ADR` (the platform's addressing control) or `DEST_INC` (recipient unknown in the directory). In those three cases the invoice never reached the customer, which makes the resend safe; every other PA-processed status stays locked. A repair whose validation raises no error also marks the invoice *Reviewed* in the list. The buyer electronic address (BT-49) keeps the scheme already on the document — `0225` when there is none. The correction is logged as a plain history entry (*Identifiants acheteur corrigés*), without triggering the notification rule of the current status again, and the outcome of the new validation (`9901` / `9902`) is added to the history whenever it differs from the latest event. The keys stored on the row when the document was first processed (alpha key, customer number, business unit, routing code) are kept; the same applies to a save from the edit window. Format safeguards (SIREN/SIRET length and coherence, VAT shape) and the PA-protection rule apply — the same checks as the `POST /api/invoices/{doc}/{dct}/{kco}/fix-buyer` endpoint in the [API reference](/nomaubl/api-reference).

Below the status, when the invoice is in a status that requires a follow-up action by the seller (e.g. `205`, `206`, `207`, `208`, `210`, `213`, `9904`, `9907`), a blue **Seller actions** banner appears with the recommended actions:

<div style={{border: '1px solid rgba(74,158,255,0.4)', background: 'rgba(74,158,255,0.08)', borderRadius: '8px', padding: '12px 14px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
  <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff', textTransform: 'uppercase', letterSpacing: '0.07em'}}>Seller actions</div>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{padding: '5px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, background: '#4a9eff', color: '#fff', border: '1px solid #4a9eff'}}>Mark payment received</span>
    <span style={{padding: '5px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, background: 'transparent', color: '#4a9eff', border: '1px solid rgba(74,158,255,0.4)'}}>Issue credit note</span>
    <span style={{padding: '5px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, background: 'transparent', color: '#f87171', border: '1px solid rgba(248,113,113,0.4)'}}>Cancel accounting</span>
    <span style={{padding: '5px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.15)', opacity: 0.45}}>Issue corrected invoice</span>
  </div>
</div>

Status-by-status mapping:

| Status | Suggested actions |
|---|---|
| **205** Paid | *Mark payment received* |
| **206** Partially approved / **207** Disputed | *Issue credit note*, *Issue corrected invoice* |
| **208** Suspended | *Send completed* |
| **210** Refused | *Cancel accounting* |
| **213** Rejected | *Cancel accounting*, *Issue new invoice* |
| **9904** Send error / **9907** PA rejected | *Resend to PA* |

Each action is bound to an *API connector endpoint* configured in *Configuration → API Connectors* — clicking the button executes the connector with the invoice's data. Greyed-out actions (faded) indicate the connector is not configured for this deployment.

A second group sits below the regulatory one — **Custom actions**. Always-visible buttons configured on the [Actions](../management/actions.md#custom-actions) page; each fires its own chain of connector calls and is independent of the invoice's current status. The result banner is anchored to the group whose button fired — a custom-action failure does not stomp on a regulatory-action banner shown at the same time, and stale banners are cleared automatically when the modal closes or switches invoice.

The rest of the Summary tab presents collapsible groups:

- **Document** — DOC / DCT / KCO, UBL number, invoice type, profile ID, contract / buyer / order / project references, accounting cost.
- **Dates & Currency** — issue date, due date, currency, period start / end.
- **Amounts** — total HT, total TTC, amount due.
- **Payment** — payment means code, IBAN, account name, BIC, payment ID, payment terms.
- **Document allowances / charges** — document-level discounts or charges with type, reason, amount, tax category.

### Parties tab

Three collapsible groups, populated from the UBL document:

- **Supplier** — name, SIREN, SIRET, VAT identifier, electronic endpoint, postal address, contact (name, phone, e-mail).
- **Customer** — name, company ID, electronic endpoint, VAT, address, contact.
- **Agent Party** *(optional)* — for the French extension — name, address, country.
- **Delivery** *(optional)* — date, party name, location ID, address.

A group with no data on the invoice is not displayed.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', margin: '20px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.35)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '10px'}}>Supplier (BG-4)</div>
    <div style={{fontWeight: 700, fontSize: '14px', marginBottom: '6px'}}>Nomana-IT SAS</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.75'}}>
      <div>SIREN <code style={{fontSize: '11px'}}>123 456 789</code></div>
      <div>SIRET <code style={{fontSize: '11px'}}>123 456 789 00012</code></div>
      <div>VAT <code style={{fontSize: '11px'}}>FR12123456789</code></div>
      <div>📧 Endpoint <code style={{fontSize: '11px'}}>0009:12345678900012</code></div>
      <div style={{marginTop: '8px', opacity: 0.8}}>10 rue de Paris<br/>75001 Paris · FR</div>
      <div style={{marginTop: '6px', fontSize: '11px', opacity: 0.7}}>👤 Contact — accounting@nomana-it.fr</div>
    </div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '16px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', opacity: 0.75, fontWeight: 700, marginBottom: '10px'}}>Customer (BG-7)</div>
    <div style={{fontWeight: 700, fontSize: '14px', marginBottom: '6px'}}>Acme Industries SA</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.75'}}>
      <div>SIREN <code style={{fontSize: '11px'}}>987 654 321</code></div>
      <div>VAT <code style={{fontSize: '11px'}}>FR98987654321</code></div>
      <div>📧 Endpoint <code style={{fontSize: '11px'}}>0009:98765432100015</code></div>
      <div style={{marginTop: '8px', opacity: 0.8}}>50 avenue des Champs<br/>69002 Lyon · FR</div>
      <div style={{marginTop: '6px', fontSize: '11px', opacity: 0.7}}>👤 J. Dupont — j.dupont@acme.fr · +33 4 72 00 00 00</div>
    </div>
  </div>
  <div style={{border: '1px solid rgba(255,159,10,0.3)', borderRadius: '10px', padding: '16px', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '10px'}}>Delivery <span style={{opacity: 0.6, fontSize: '10px'}}>(optional · BG-13)</span></div>
    <div style={{fontWeight: 700, fontSize: '14px', marginBottom: '6px'}}>Acme — Lyon Warehouse</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.75'}}>
      <div>Delivery date <code style={{fontSize: '11px'}}>2026-04-26</code></div>
      <div>Location ID <code style={{fontSize: '11px'}}>0088:3012345600003</code></div>
      <div style={{marginTop: '8px', opacity: 0.8}}>Zone industrielle Sud<br/>69800 Saint-Priest · FR</div>
    </div>
  </div>
</div>

### Lines tab

A table of the invoice line items, one main row per line plus sub-rows that surface the additional information carried by the UBL.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '2.4fr 90px 60px 100px 110px 70px 70px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '11px'}}>
    <div>Description</div><div style={{textAlign: 'right'}}>Quantity</div><div>Unit</div><div style={{textAlign: 'right'}}>Unit price</div><div style={{textAlign: 'right'}}>Line amount</div><div>Tax cat.</div><div style={{textAlign: 'right'}}>Rate</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2.4fr 90px 60px 100px 110px 70px 70px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.04)', alignItems: 'center', fontWeight: 500}}>
    <div>Consulting service — financial reporting</div><div style={{textAlign: 'right'}}>5.00</div><div>DAY</div><div style={{textAlign: 'right'}}>800.00</div><div style={{textAlign: 'right'}}>4,000.00</div><div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '11px', fontWeight: 600, color: '#4a9eff'}}>S</span></div><div style={{textAlign: 'right'}}>20%</div>
  </div>
  <div style={{padding: '4px 14px 4px 30px', fontSize: '11px', opacity: 0.65, borderBottom: '1px solid rgba(255,255,255,0.04)'}}>↳ Period: 2026-04-01 → 2026-04-30 · Buyer ref: PO-2026-042</div>
  <div style={{display: 'grid', gridTemplateColumns: '2.4fr 90px 60px 100px 110px 70px 70px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.04)', alignItems: 'center', fontWeight: 500}}>
    <div>Office supplies — paper A4 80g/m²</div><div style={{textAlign: 'right'}}>20.00</div><div>EA</div><div style={{textAlign: 'right'}}>25.00</div><div style={{textAlign: 'right'}}>500.00</div><div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '11px', fontWeight: 600, color: '#4a9eff'}}>S</span></div><div style={{textAlign: 'right'}}>20%</div>
  </div>
  <div style={{padding: '4px 14px 4px 30px', fontSize: '11px', opacity: 0.65, borderBottom: '1px solid rgba(255,255,255,0.04)'}}>↳ Item code: SKU-A4-80 · Allowance: −2.5% volume rebate</div>
  <div style={{display: 'grid', gridTemplateColumns: '2.4fr 90px 60px 100px 110px 70px 70px', padding: '10px 14px', alignItems: 'center', fontWeight: 500}}>
    <div>Software licence — annual subscription</div><div style={{textAlign: 'right'}}>1.00</div><div>EA</div><div style={{textAlign: 'right'}}>1,200.00</div><div style={{textAlign: 'right'}}>1,200.00</div><div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(255,159,10,0.18)', border: '1px solid rgba(255,159,10,0.45)', fontSize: '11px', fontWeight: 600, color: '#fb923c'}}>AE</span></div><div style={{textAlign: 'right'}}>0%</div>
  </div>
  <div style={{padding: '4px 14px 8px 30px', fontSize: '11px', opacity: 0.65}}>↳ Note: <i>Reverse charge — VAT due by the customer (EU intra-community)</i></div>
</div>

| Column | Description |
|---|---|
| **Description** | Free-text description of the line item. |
| **Item** | Item identifier (article code, SKU). |
| **Quantity** | Quantity invoiced. |
| **Unit** | Unit-of-measure code (e.g. `EA` piece, `H87` unit, `DAY` day, `KGM` kilogram). |
| **Unit price** | Unit price excluding VAT. Shown to its full precision — up to **6 decimals** (BT-146), matching the source. EN 16931 allows finer precision on the price than on the monetary totals, which stay at 2 decimals. |
| **Line amount** | Quantity × unit price (excluding VAT). |
| **Tax category** | UBL VAT category code (`S` standard, `AE` reverse charge, `E` exempt, `Z` zero rate, `O` out of scope, `K` intra-EU, `G` export, `L` Canary Islands, `M` Ceuta/Melilla). |
| **Tax rate** | Applicable VAT rate as a percentage. |

Sub-rows appear under each main row for:

- Item description
- Period (start → end)
- Buyer / standard / classification item identifiers
- Line note (`BT-127`)
- Price-level allowance / charge (`BT-147`)
- Line-level allowances / charges (`BG-27` / `BG-28`)
- Additional item properties (`BG-32`)

When several lines share the same delivery group, document references (`BT-128`) or customer order number (`EXT-FR-FE-135`), a **delivery header**, a **document-reference header** or a **Customer Order Reference header** appears once at the top of that group rather than repeating on every line.

### VAT tab

A table of the VAT subtotals carried by the UBL: category code, rate, taxable base, VAT amount, currency, exemption code + label (when applicable).

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '90px 70px 1fr 1fr 70px 1.6fr', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '11px'}}>
    <div>Category</div><div style={{textAlign: 'right'}}>Rate</div><div style={{textAlign: 'right'}}>Taxable base</div><div style={{textAlign: 'right'}}>VAT amount</div><div>Cur.</div><div>Exemption</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 70px 1fr 1fr 70px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontWeight: 600, color: '#4a9eff', fontSize: '11px'}}>S Standard</span></div>
    <div style={{textAlign: 'right'}}>20%</div><div style={{textAlign: 'right'}}>4,500.00</div><div style={{textAlign: 'right', fontWeight: 600}}>900.00</div><div>EUR</div><div style={{opacity: 0.55}}>—</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 70px 1fr 1fr 70px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,159,10,0.18)', border: '1px solid rgba(255,159,10,0.45)', fontWeight: 600, color: '#fb923c', fontSize: '11px'}}>AE Reverse</span></div>
    <div style={{textAlign: 'right'}}>0%</div><div style={{textAlign: 'right'}}>1,200.00</div><div style={{textAlign: 'right', fontWeight: 600}}>0.00</div><div>EUR</div><div style={{fontSize: '11px', opacity: 0.85}}><code>VATEX-EU-AE</code> · Reverse charge</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 70px 1fr 1fr 70px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.15)', border: '1px solid rgba(50,215,75,0.45)', fontWeight: 600, color: '#4ade80', fontSize: '11px'}}>E Exempt</span></div>
    <div style={{textAlign: 'right'}}>0%</div><div style={{textAlign: 'right'}}>800.00</div><div style={{textAlign: 'right', fontWeight: 600}}>0.00</div><div>EUR</div><div style={{fontSize: '11px', opacity: 0.85}}><code>VATEX-FR-261</code> · Article 261 CGI</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 70px 1fr 1fr 70px 1.6fr', padding: '12px 14px', alignItems: 'center', background: 'rgba(74,158,255,0.05)', fontWeight: 700}}>
    <div style={{opacity: 0.85}}>Total</div><div></div><div style={{textAlign: 'right'}}>6,500.00</div><div style={{textAlign: 'right', color: '#4a9eff'}}>900.00</div><div>EUR</div><div></div>
  </div>
</div>

### Notes tab

Document-level notes (`BT-22`). Each note appears as a card with a **prefix badge** (e.g. `PMD`, `PMT`, `REG`) and the free-text body. The prefix label is resolved from the *note-types* reference list; hovering on the badge shows the label.

<div style={{display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 14px', background: 'rgba(255,255,255,0.02)', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span title="Payment terms" style={{padding: '3px 9px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '11px', fontWeight: 700, color: '#4a9eff', whiteSpace: 'nowrap'}}>PMD</span>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Payment terms — 30 days net, end of month. Late-payment penalty 3 × ECB rate; recovery indemnity €40.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 14px', background: 'rgba(255,255,255,0.02)', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span title="Regulatory" style={{padding: '3px 9px', borderRadius: '4px', background: 'rgba(50,215,75,0.15)', border: '1px solid rgba(50,215,75,0.45)', fontSize: '11px', fontWeight: 700, color: '#4ade80', whiteSpace: 'nowrap'}}>REG</span>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Member of an approved trade association — payment by cheque accepted.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 14px', background: 'rgba(255,255,255,0.02)', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
    <span title="Free text" style={{padding: '3px 9px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 700, opacity: 0.85, whiteSpace: 'nowrap'}}>AAI</span>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Order PO-2026-042 confirmed by the buyer on 2026-04-15.</div>
  </div>
</div>

### History tab

Three sections in this tab:

#### Action bar at the top

| Button | Behaviour |
|---|---|
| **Validate UBL** | Re-runs XSD + Schematron validation on the UBL stored in the database. The result is shown inline (valid / warning / error) with details when applicable. |
| **Set status** | Opens the *Set Status modal* — see below. |
| **Resend** | Submits the UBL to the Plateforme Agréée again. Confirms before running. |
| **Download UBL** | Saves the archived UBL of the invoice. |
| **Download CII** | Shown when the document has a [post-transform](../ubl-tools/post-transform.md): the archived UBL converted on demand, named after the post-transform (*Download converted file* when it has no name). |

#### Lifecycle group

The **lifecycle** is the audit trail of every status the invoice has been in. Each event shows:

- The status badge (code + colour-coded family).
- The status label and the message returned by the platform.
- Optional details for refusals: rejection reason code + label, expected action code + label, additional status note.

The lifecycle is append-only — events are added by the *Sync → Retrieve Statuses* sweep and never modified. Each event does carry a **delete** button (with confirmation): removing an event realigns the invoice status on the last remaining one — the clean manual fix when the platform delivered a stray status (a *Refusée* it later superseded, say). It is gated by a dedicated **Delete lifecycle event** action in the [roles](../configuration/security/roles.md).

The three refusal fields — **rejection reason**, **expected action** and **status note** — also live in the column catalog, so they can be pinned as list columns and filtered from the [List Views](../configuration/list-views.md) editor when a team needs to scan or sort by refusal reason without opening each invoice.

<div style={{margin: '22px 0', position: 'relative', paddingLeft: '28px'}}>
  <div style={{position: 'absolute', left: '9px', top: '14px', bottom: '18px', width: '2px', background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)'}} />

  <div style={{position: 'relative', marginBottom: '18px'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#94a3b8', border: '3px solid rgba(148,163,184,0.2)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(148,163,184,0.5)', background: 'rgba(148,163,184,0.1)', color: '#cbd5e1'}}>9900 UBL generated</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-24 09:14:02</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.78}}>UBL document built from source XML and persisted in NomaUBL.</div>
  </div>

  <div style={{position: 'relative', marginBottom: '18px'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#60a5fa', border: '3px solid rgba(0,122,255,0.2)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>9906 Pending PA import</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-24 09:14:18</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.78}}>Submitted to the Plateforme Agréée — awaiting acknowledgement.</div>
  </div>

  <div style={{position: 'relative', marginBottom: '18px'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#4ade80', border: '3px solid rgba(50,215,75,0.2)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>200 Submitted</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-24 09:15:47</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.78}}>Accepted by the addressing platform · technical ack returned.</div>
  </div>

  <div style={{position: 'relative', marginBottom: '18px'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#4ade80', border: '3px solid rgba(50,215,75,0.2)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>202 Received by recipient</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-24 11:32:09</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.78}}>Acme Industries SA confirmed receipt on its Plateforme Agréée.</div>
  </div>

  <div style={{position: 'relative'}}>
    <div style={{position: 'absolute', left: '-23px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#fb923c', border: '3px solid rgba(255,159,10,0.25)', boxShadow: '0 0 0 4px rgba(255,159,10,0.08)'}} />
    <div style={{display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px'}}>
      <span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.1)', color: '#fb923c'}}>207 Disputed</span>
      <span style={{fontSize: '11px', opacity: 0.6, fontFamily: 'monospace'}}>2026-04-25 14:08:51</span>
      <span style={{fontSize: '10px', opacity: 0.55, padding: '1px 6px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px'}}>current</span>
    </div>
    <div style={{fontSize: '12px', opacity: 0.85, marginBottom: '8px'}}>Customer raised a dispute — line 2 quantity does not match delivery slip.</div>
    <div style={{fontSize: '11px', padding: '8px 10px', background: 'rgba(255,159,10,0.06)', borderLeft: '3px solid rgba(255,159,10,0.5)', borderRadius: '0 6px 6px 0', lineHeight: '1.6'}}>
      <div><b>Reason</b> <code style={{fontSize: '10px'}}>RR-016</code> — Quantity mismatch with delivery</div>
      <div><b>Expected action</b> <code style={{fontSize: '10px'}}>AC-04</code> — Issue corrected invoice</div>
      <div style={{opacity: 0.75, marginTop: '4px'}}>Note — <i>« Bordereau de livraison BL-2026-018 ne mentionne que 18 unités sur la ligne 2. »</i></div>
    </div>
  </div>
</div>

#### Validation errors group

Lists the validation errors (XSD / Schematron) that were recorded for this invoice. Each row carries the severity, the rule identifier and the human-readable message. Empty when the invoice validates cleanly.

### PDF tab

The PDF tab renders a generated PDF of the invoice inline (an `<iframe>` view). The bottom of the tab carries:

| Button | Behaviour |
|---|---|
| **E-mail** | Opens the *E-mail modal* with the displayed PDF pre-attached. |
| **Download** | Saves the PDF to the local computer. |

---

## Action modals

### Set Status modal

Opens from the History tab's **Set status** button. Lets the user move an invoice to a chosen status — useful for manual corrections or for triggering a transition the platform itself did not pick up.

<div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.025)', maxWidth: '560px', boxShadow: '0 8px 24px rgba(0,0,0,0.25)'}}>
  <div style={{padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <div style={{fontWeight: 700, fontSize: '14px'}}>Set status — 12345 / RI / 00070</div>
    <span style={{opacity: 0.5, fontSize: '12px'}}>✕</span>
  </div>
  <div style={{padding: '18px'}}>
    <div style={{display: 'flex', gap: '8px', marginBottom: '14px', padding: '4px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', width: 'fit-content'}}>
      <span style={{padding: '6px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>PA</span>
      <span style={{padding: '6px 14px', borderRadius: '6px', fontSize: '12px', opacity: 0.6}}>DB</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px'}}>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Status</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><span>211 Approved with reservation</span><span style={{opacity: 0.5}}>▾</span></div>
      </div>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Status at</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>2026-04-27 10:42</div>
      </div>
    </div>
    <div style={{marginBottom: '12px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Reason</div>
      <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', minHeight: '60px'}}>Approved with reservation pending corrected delivery slip — see attached BL-2026-018.</div>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '110px 1fr', gap: '12px', marginBottom: '12px'}}>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Reason code</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>RR-016</div>
      </div>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Label</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>Quantity mismatch with delivery</div>
      </div>
    </div>
  </div>
  <div style={{padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'flex-end', gap: '8px', background: 'rgba(255,255,255,0.02)'}}>
    <span style={{padding: '7px 16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', fontWeight: 500}}>Cancel</span>
    <span style={{padding: '7px 16px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>Submit</span>
  </div>
</div>

| Field | Description |
|---|---|
| **Target** | `PA` (sends a status update to the Plateforme Agréée) or `DB` (writes the new status directly to the local database without notifying the PA). |
| **Status** | Drop-down listing every status from the *statuses* reference list, with code + label. |
| **Status at** *(PA only)* | Date / time of the status event. Default: now. |
| **Reason** | Free-text reason / message. Pre-populated with the status label; editable. |
| **Rejection reason code + label** *(when applicable)* | Code from the *rejection-reason-codes* reference list, plus its translation. |
| **Action code + label** *(when applicable)* | Code from the *action-codes* reference list, plus its translation. |

When **Target = DB** is selected, an orange notice reminds the user that the change is local-only and will not be propagated to the PA.

Click **Submit** to apply. A green banner confirms success; the modal closes after a short delay.

### E-mail modal

Opens from the PDF tab. Lets the user send the invoice PDF to the customer via SMTP using the credentials configured in the *global* template.

<div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.025)', maxWidth: '620px', boxShadow: '0 8px 24px rgba(0,0,0,0.25)'}}>
  <div style={{padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <div style={{fontWeight: 700, fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'center'}}>✉️ Send invoice by e-mail</div>
    <span style={{opacity: 0.5, fontSize: '12px'}}>✕</span>
  </div>
  <div style={{padding: '18px'}}>
    <div style={{display: 'grid', gridTemplateColumns: '60px 1fr', gap: '8px 12px', marginBottom: '10px', alignItems: 'center'}}>
      <div style={{fontSize: '12px', opacity: 0.7, textAlign: 'right'}}>To</div>
      <div style={{padding: '7px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>j.dupont@acme.fr</div>
      <div style={{fontSize: '12px', opacity: 0.7, textAlign: 'right'}}>Cc</div>
      <div style={{padding: '7px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.5, fontStyle: 'italic'}}>accounting@nomana-it.fr</div>
      <div style={{fontSize: '12px', opacity: 0.7, textAlign: 'right'}}>Subject</div>
      <div style={{padding: '7px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>Invoice FA-2026-001234</div>
    </div>
    <div style={{padding: '12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', minHeight: '120px', lineHeight: '1.6', background: 'rgba(0,0,0,0.1)'}}>
      <div>Dear Mr. Dupont,</div>
      <br/>
      <div>Please find attached invoice <b>FA-2026-001234</b> for an amount of <b>1,500.00 EUR</b>.</div>
      <br/>
      <div>For any question, please contact our accounting department.</div>
      <br/>
      <div style={{opacity: 0.75}}>Best regards,<br/>Nomana-IT SAS</div>
    </div>
    <div style={{marginTop: '12px', padding: '10px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.08)', border: '1px solid rgba(74,158,255,0.3)', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '8px'}}>
      <span style={{fontSize: '14px'}}>📎</span>
      <span><b>FA-2026-001234.pdf</b> · 142 KB · auto-attached from PDF tab</span>
    </div>
  </div>
  <div style={{padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'flex-end', gap: '8px', background: 'rgba(255,255,255,0.02)'}}>
    <span style={{padding: '7px 16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', fontWeight: 500}}>Cancel</span>
    <span style={{padding: '7px 16px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>Send</span>
  </div>
</div>

| Field | Description |
|---|---|
| **To** *(required)* | Recipient e-mail address. |
| **Cc** | Optional carbon copy. |
| **Subject** | Pre-filled with `Invoice <ublNumber>`; editable. |
| **Body** | Pre-filled with a French / English template depending on the user's language: greeting, main line referencing the invoice number and total amount, contact line, signature. Fully editable. |

The PDF currently shown in the PDF tab is automatically attached. If the PDF was not pre-loaded, the server fetches it from the database before sending.

While the e-mail is sending, an overlay covers the modal until the SMTP server confirms the send. A green banner indicates success; the modal closes automatically after ~2 s.

### Create / Edit invoice modal

Opens from **New Invoice** in the Quick Actions of the [Operations](./dashboard.md) dashboard, or from the **Edit UBL** / **Copy** buttons in the Summary tab. Lets the user create a new invoice from scratch or adjust an existing one. The modal is laid out like a printable invoice — the user fills the form and NomaUBL produces the corresponding UBL document on **Save**.

Editing an existing invoice no longer flips its `cbc:CustomizationID` back to the EN16931 default. The form now carries the `customizationId` value from the source UBL and writes it back verbatim — new invoices still default to `urn:cen.eu:en16931:2017`.

<div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.025)', boxShadow: '0 12px 32px rgba(0,0,0,0.3)'}}>
  <div style={{padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontWeight: 700, fontSize: '14px'}}>📝 New invoice</div>
    <div style={{display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px', opacity: 0.7}}><span>⛶</span><span>✕</span></div>
  </div>

  <div style={{padding: '20px 22px', background: 'linear-gradient(180deg, rgba(74,158,255,0.04), transparent 80%)'}}>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'flex-start', marginBottom: '20px'}}>
      <div>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
          <div style={{width: '38px', height: '38px', borderRadius: '8px', background: 'linear-gradient(135deg, #4a9eff, #2b8cff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff'}}>N</div>
          <div style={{fontWeight: 700, fontSize: '13px'}}>Nomana-IT SAS</div>
        </div>
        <div style={{fontSize: '11px', opacity: 0.7, lineHeight: '1.6'}}>10 rue de Paris · 75001 Paris · FR<br/>SIREN 123 456 789 · VAT FR12123456789</div>
      </div>
      <div style={{textAlign: 'right'}}>
        <div style={{fontSize: '24px', fontWeight: 800, letterSpacing: '0.05em', color: '#4a9eff', marginBottom: '4px'}}>INVOICE</div>
        <div style={{fontSize: '12px', opacity: 0.85}}>N° <b>FA-2026-001234</b></div>
        <div style={{fontSize: '11px', opacity: 0.7, marginTop: '6px'}}>Issue <b>2026-04-24</b> · Due <b>2026-05-24</b></div>
      </div>
    </div>

    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px'}}>
      <div style={{padding: '12px 14px', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '8px'}}>
        <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.6, marginBottom: '4px'}}>Bill from</div>
        <div style={{fontSize: '12px', fontWeight: 600}}>Nomana-IT SAS</div>
        <div style={{fontSize: '11px', opacity: 0.75, lineHeight: '1.5', marginTop: '2px'}}>10 rue de Paris<br/>75001 Paris · FR</div>
      </div>
      <div style={{padding: '12px 14px', border: '1px solid rgba(74,158,255,0.35)', borderRadius: '8px', background: 'rgba(74,158,255,0.04)', position: 'relative'}}>
        <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4a9eff', marginBottom: '4px'}}>Bill to</div>
        <div style={{fontSize: '12px', fontWeight: 600}}>Acme Industries SA</div>
        <div style={{fontSize: '11px', opacity: 0.75, lineHeight: '1.5', marginTop: '2px'}}>50 avenue des Champs<br/>69002 Lyon · FR</div>
        <span style={{position: 'absolute', top: '10px', right: '12px', fontSize: '10px', padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.2)', color: '#4a9eff', fontWeight: 600}}>🔎 PPF lookup</span>
      </div>
    </div>

    <div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden', marginBottom: '14px', fontSize: '12px'}}>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 80px 70px 100px 110px 70px 30px', padding: '8px 12px', background: 'rgba(255,255,255,0.04)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.75, fontWeight: 600}}>
        <div>Description</div><div style={{textAlign: 'right'}}>Qty</div><div>Unit</div><div style={{textAlign: 'right'}}>Unit price</div><div style={{textAlign: 'right'}}>Amount</div><div>VAT</div><div></div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 80px 70px 100px 110px 70px 30px', padding: '8px 12px', borderTop: '1px solid rgba(255,255,255,0.04)', alignItems: 'center'}}>
        <div>Consulting service — financial reporting</div><div style={{textAlign: 'right'}}>5.00</div><div>DAY</div><div style={{textAlign: 'right'}}>800.00</div><div style={{textAlign: 'right'}}>4,000.00</div><div>S 20%</div><div style={{opacity: 0.5}}>✕</div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 80px 70px 100px 110px 70px 30px', padding: '8px 12px', borderTop: '1px solid rgba(255,255,255,0.04)', alignItems: 'center'}}>
        <div>Office supplies — paper A4 80g/m²</div><div style={{textAlign: 'right'}}>20.00</div><div>EA</div><div style={{textAlign: 'right'}}>25.00</div><div style={{textAlign: 'right'}}>500.00</div><div>S 20%</div><div style={{opacity: 0.5}}>✕</div>
      </div>
      <div style={{padding: '8px 12px', borderTop: '1px solid rgba(255,255,255,0.04)', fontSize: '11px'}}>
        <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px dashed rgba(74,158,255,0.4)', color: '#4a9eff', fontWeight: 500}}>+ Add line</span>
      </div>
    </div>

    <div style={{display: 'grid', gridTemplateColumns: '1fr 260px', gap: '14px'}}>
      <div style={{padding: '12px 14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', fontSize: '11px', opacity: 0.85, lineHeight: '1.7'}}>
        <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.07em', opacity: 0.7, marginBottom: '6px'}}>Payment</div>
        <div>SEPA · IBAN <code style={{fontSize: '10px'}}>FR76 3000 4000 0312 3456 7890 143</code></div>
        <div>BIC <code style={{fontSize: '10px'}}>BNPAFRPP</code> · Terms 30 days net EOM</div>
      </div>
      <div style={{padding: '12px 14px', border: '1px solid rgba(74,158,255,0.35)', borderRadius: '8px', background: 'rgba(74,158,255,0.05)'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '11px', opacity: 0.85, marginBottom: '4px'}}><span>Subtotal HT</span><span>4,500.00</span></div>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '11px', opacity: 0.85, marginBottom: '4px'}}><span>VAT 20%</span><span>900.00</span></div>
        <div style={{height: '1px', background: 'rgba(255,255,255,0.1)', margin: '6px 0'}} />
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 700, color: '#4a9eff'}}><span>Total TTC</span><span>5,400.00 EUR</span></div>
      </div>
    </div>
  </div>

  <div style={{padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', opacity: 0.6}}>📄 UBL will be generated and submitted to the Plateforme Agréée on save</div>
    <div style={{display: 'flex', gap: '8px'}}>
      <span style={{padding: '7px 16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', fontWeight: 500}}>Cancel</span>
      <span style={{padding: '7px 18px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>Save & generate UBL</span>
    </div>
  </div>
</div>

The modal is split into vertical sections:

- **Document** — invoice number, type, profile ID, contract / buyer / order references.
- **Header** — issue / due dates, currency, period start / end, the **Despatch advice** (BT-16 — number and date), plus a **Preceding invoices** block (BG-3, 0..n): each row a reference number (BT-25) and an optional issue date (BT-26), added or removed with **＋ Add a preceding invoice (BG-3)**. On a credit note this is the reference to the corrected invoice.
- **Supplier** — pre-populates from the supplier directory (*UBL Defaults → Suppliers / Companies*); editable per invoice.
- **Customer** — filled end to end from the company search: results show the badge, name and identifier on one line with the address below; searching a bare SIREN or SIRET lists every establishment (the same second INSEE lookup as [E-Directory](./edirectory.md)), and an optional SIRET field completes the SIREN. The electronic address is **not guessed** from the SIREN/SIRET — a PPF electronic-address list (opened automatically after picking a company, or anytime via the button next to the identifier field) shows the addresses registered for the SIREN with their active/disabled state; picking one fills the identifier and its scheme, then the list closes. An **Other ids (BT-46)** block adds any number of extra buyer identifiers, each with its scheme from the EAS list — a routing code or a second SIRET carried on the document is now visible, editable and removable instead of travelling invisibly.
- **Delivery** — optional document-level delivery group (BG-13). It shows only the delivery set at document level; deliveries carried by the lines stay on the lines and are never copied up to the header.
- **Payment** — payment means code, IBAN, BIC, mandate, terms.
- **Allowances / charges** — document-level discounts / charges.
- **Notes** — free-text notes per `BT-22` prefix.
- **Lines** — invoice lines with item, quantity, unit, price, allowances, item properties. The unit-price input accepts fine precision (up to 6 decimals), to match prices that carry more than 2 decimals at source. A per-line **Price (BG-29)** block sets the gross unit price (**BT-148**) and the price discount (**BT-147**); the net price is derived and drives the line amount, and the line amount divides by the **price base quantity** (BT-149) so a price per 100 or 1,000 units is computed correctly. The line *References* block also holds per-line **Preceding invoice** references (EXT-FR-FE-136) — number, optional date and a **DocumentStatusCode** picked from `INFORMATION` / `DETAIL` / `GROUP`. Three quick-add buttons in the same block fill the **order references** of the line, all carried by `cac:OrderLineReference`: **Customer Order Reference** (the buyer's order number, EXT-FR-FE-135 — the key the PDF groups lines on), **Order number** (the seller's order number, EXT-FR-FE-144) and **Customer line no.** (the line number inside the buyer's order, BT-132). A fourth button, **Despatch advice**, adds the line's despatch advice reference and date (EXT-FR-FE-BG-07).
- **VAT summary** — auto-computed from the lines (read-only — line edits are reflected here).
- **Totals** — auto-computed (read-only).

The **Save** button at the bottom validates the input, writes to the database, generates the UBL document and submits it to the PA according to the e-invoicing template's settings. The modal closes after a successful save.

A **fullscreen toggle** in the header swaps between windowed and full-screen edit, useful for invoices with many lines.

### Resend confirmation

The **Resend** button (in the History tab, or via Seller actions when status is `9904`/`9907`) opens a confirmation dialog before re-submitting the UBL to the Plateforme Agréée — the document is transmitted immediately and its status moves to *Pending* (`9906`). After confirmation, the invoice is re-submitted; an inline banner reports success or the error returned by the PA. The lifecycle is updated to reflect the new submission.

---

## Tips & best practices

- **Start with the period.** *Yesterday* is the typical morning view, a custom range covers month-end reconciliation; set the opening period once under [Default periods](../configuration/default-periods.md). Filters apply on top of the period.
- **The stages are the fastest filter.** *To correct* and *Decision needed* with a non-zero count are usually the right place to start when chasing exceptions; the caret narrows the stage to one status.
- **The lifecycle (History tab) is the source of truth.** It records every status the invoice has been in, with messages, rejection reasons and expected actions — the place to investigate disputes or PA-side decisions.
- **Use the Seller actions banner.** The actions surfaced for `205` / `206` / `207` / `208` / `210` / `213` / `9904` / `9907` are the platform's recommended next step. They reduce a multi-step workflow (finding the customer, drafting the credit note, etc.) to a single click when the connector is configured.
- **Set status only when needed.** Manual `Set status → DB` desynchronises the local record from the PA. Reserve it for clean-up after restoring backups or for statuses the lifecycle sweep cannot catch.
- **Edit UBL, then save** is the canonical correction path — it rewrites the database record with the new UBL and re-submits to the PA. Avoid editing the source XML directly through *UBL Tools → XML Viewer* unless the data on disk is the authoritative one.
- **Use Copy for recurring billing.** It pre-fills every party / line / VAT field; only the document number, dates, and any specific changes need to be edited.
