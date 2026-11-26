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
  <rect x="866" y="64" width="94" height="22" rx="5" fill="url(#inv-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="913.0" y="78.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New Invoice</text>
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
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New Invoice</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with the invoice.create action</text>
  <line x1="1000" y1="73.0" x2="960" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="1000" y="12" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="27" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Direction</text>
  <text x="1010" y="40" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">issued by default</text>
  <line x1="1000" y1="29.0" x2="606" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="1000" y="148" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="163" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clear filters</text>
  <text x="1010" y="176" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">when a status is picked</text>
  <line x1="1000" y1="165.0" x2="946" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
  <rect x="1000" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click → detail window</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7 tabs, opens on Summary</text>
  <line x1="1000" y1="377.0" x2="950" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#inv-arrow)"/>
</svg>

---

## Toolbar

Above the grid, two rows: the **period**, the **direction**, **Exclude reviewed errors** and, at the right, **+ New Invoice**; then the **status by stage**. **+ New Invoice** is shown to the roles allowed to create invoices (`invoice.create`), which opens the [Create / Edit invoice modal](./invoice-actions.md#create-invoice). The [Advanced Filters](#advanced-filters) panel and the grid toolbar (search, **Run**, bulk actions) follow.

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

The **Exclude reviewed errors** switch, next to the direction selector, hides the rows already marked *Reviewed* that still sit in an error status (`errorTech` / `errorBusiness` groups of the [statuses template](../configuration/system/statuses.md)), so the list keeps only the errors nobody has looked at yet. Reviewed rows in any other status stay listed. The switch is on by default; a list opened from a dashboard ([Billing overview](./billing-overview.md), [Statistics](./statistics.md), [Operations](./dashboard.md#exclude-reviewed)) takes the dashboard's choice. The `GET /api/invoices` endpoint takes the same filter as `excludeReviewedErrors=true`.

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
A text filter matches from the **start** of the value and uses the column's index, so the list stays fast on a large table. To search for text anywhere in the value, wrap it in percent signs — `%acme%` matches *acme* wherever it appears, at the cost of a full scan. The **DOC** filter takes a shortcut: an all-digits value seeks the document number directly rather than scanning. Filters on columns backed by a reference list (status, routing…) accept **several values at once** and an operator — include, exclude, empty, not empty — described [below](#list-filters).
:::

The set of columns that can be filtered is defined in the spec's `filter: true` allow-list — operators decide which columns they actually query and trim the rest from the panel without losing them from the grid. See [List Views](../configuration/list-views.md) for the editor.

The page runs in **hybrid client-side mode**: each *Run* loads one capped slice from the server (`spec.maxRows`, the *Rows loaded* of [Settings › Navigation & lists](../configuration/default-periods.md#lists) unless the view sets its own — 100 000 by default) and the grid handles filter / sort / paginate / group within that slice — no roundtrip while typing in the per-column filter row, filters survive pagination naturally. When the slice cap is hit, an `X / Y rows` notice next to *Run* tells the operator to narrow the period or the *Advanced Filters*.

#### Filters on a list \{#list-filters\}

RefList columns (Status, eReporting Status, custom lists) get a **multi-select picker** in both the Advanced Filters panel and the per-column filter row, preceded by an **operator button**:

| Operator | Button | Rows kept |
|---|---|---|
| **include** *(default)* | `=` | The value is one of the selected values. |
| **exclude** | `≠` | The value is none of the selected values — the rows with no value are kept too. |
| **is empty** | `∅` | The field has no value. No value to pick. |
| **is not empty** | `≠∅` | The field has any value. No value to pick. |

Pick any number of codes: the trigger shows `N selected` past the inline cap, and a `✕` on the right resets the selection in one click. *include* with three statuses returns the union of the three; *exclude* returns every other row. A code can also be typed in the search box of the picker (Enter, comma-separated for several), so a list that is incomplete or still empty still filters. A [saved view](./saved-views.md) keeps the operator with the values.

### Grid toolbar

Next to the search box of the grid: **Run** (reloads the list with the current filters), then **Resend selected (N)**, **Reprocess selected (N)** and **Mark reviewed (N)** when rows are ticked (see [Bulk resend](#bulk-resend), [Reprocess](#reprocess) and [Mark reviewed](#mark-reviewed)). The **view picker** saves and brings back the display of the list — columns, widths, sort, filters, period: see [Saved views](saved-views.md).

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
| **Send to PA** | Destination of the invoice: *For the platform*, *Not for the platform* or *Held for review before sending* (`list-send-pa`), filterable. |
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

### Mark reviewed \{#mark-reviewed\}

Customer service marks the invoices in error it has handled as **reviewed**, so they leave the error counts and lists while *Exclude reviewed errors* is on. The invoice keeps its status.

- **From the list** — tick the invoices, then **Mark reviewed (N)**. The button shows when at least one ticked invoice is in error and not yet reviewed. A confirmation says that *the selected invoice(s) will be considered handled and will no longer appear among the errors to handle*; only invoices still in error are marked.
- **From the invoice window** — the **Reviewed** chip at the right of the tabs sets the mark (dashed when not set) or clears it (green when set), each time after a confirmation. Clearing brings the invoice back among the errors to handle.

Both require the *Mark reviewed* action (`invoice.review`) on the [Roles](../configuration/security/roles.md) page. The mark is the **Review** column (`UHALRTPSD`).

### Bulk resend \{#bulk-resend\}

Each row carries a **checkbox**, and a **Resend selected (N)** button appears in the toolbar once at least one ticked row can be resent. It resends the whole batch to the [Plateforme Agréée](../configuration/system/einvoicing.md) in one action, through the same progress window used elsewhere (live counters, *Cancel*, *Run in background*). The button counts and sends only the ticked invoices that can be resent under the [resend rules](#resend-reprocess-rules) — not a *Do not send* document type, not a *Validation failed* (`9905`), not a status the platform already processed. Such a row can still be ticked for a reprocess or a review. The server applies the same rules to each invoice of the batch.

### Reprocess \{#reprocess\}

A **Reprocess selected (N)** button appears next to *Resend selected* when the ticked rows include invoices eligible for reprocessing. Reprocessing is a **reprint**: for an invoice the platform **deposited but did not transmit** (status 200, reason `NON_TRANSMISE`), it regenerates the readable PDF / XML and the UBL file from the source archived at first processing (the source XML of an XML-source document, the XML produced by the conversion of a PDF-source document), into the output and burst folders. Nothing changes in the database and the UBL is not validated again — the stored e-invoice, including a later *Fix buyer* correction, stays the reference, and its validation results are kept. The invoice keeps its current status, a *Retraitement* entry is added to its history, nothing is re-sent to the platform, and each invoice is reprocessed only once. Only invoices on a document with **Allow reprocess** enabled (an XML- or PDF-source document — see [Documents](../management/documents.md)) are eligible; the others are ignored in the selection. The same run is available from the [IT dashboard](tech-dashboard.md#to-reprocess) and the command line.

The selection also covers **validation failures**: an invoice in *Validation failed* (`9905`) on a template with **Allow full reprocess** enabled is **reprocessed in full** — enrichment queried again, UBL regenerated, validated and sent to the PA when the template and document type say so; the history is kept and a new cycle starts. The confirmation states which invoices are reprinted and which are reprocessed in full. The invoice window offers the same full reprocess through a **Reprocess** button on a `9905`.

Several invoices are reprocessed as **one batch per template**, in the background with its live log: their sources are staged in a working folder, the *Max threads* global setting bounds the parallelism and an invoice is never processed twice. A single invoice still runs on its own.

### Export

A small **Export** button in the toolbar exports the current view (filters applied) as a CSV file named `invoices.csv`.

---

## Resend and reprocess rules \{#resend-reprocess-rules\}

The server checks these rules on every resend and every reprocess, whatever starts it: the invoice window, the list selection, the [IT dashboard](tech-dashboard.md#send-failed) cards, an [Auto-retry](../sync/scheduled-jobs/auto-retry.md) job, the command line or the [API](/nomaubl/api-reference).

### Resend — the stored UBL sent to the PA again

| Condition | Rule |
|---|---|
| **Status** | Accepted for any internal `99xx` status except `9905`, `9911` and `9913`: `9900`, `9901`, `9902`, `9903`, `9904`, `9906`, `9907`, `9912`… Refused for `9905` (*Validation failed*): a UBL that failed validation is never sent — correct the invoice (edit, Fix buyer) or run a full reprocess first. Refused for every standard platform status — any numeric code that does not start with `99` (`1`, `8`, `10`, `43`, `45`, `48`, `200`, `213`…) — and for `9911` / `9913`, stages the platform has already accepted. |
| **Reason code** | Not checked. |
| **Document type** | Refused when the send flag of the [document type](../configuration/system/document-types.md) is *Do not send* (`FEEV10` = `2`). |
| **Stored UBL** | Refused when the invoice has no UBL stored in its header. |
| **User** | The *Resend to PA* action (`invoice.resend`) on the [Roles](../configuration/security/roles.md) page, and the invoice must be visible to the user. |

The invoice window hides **Resend to PA** whenever the server would refuse it: user without the permission, *Do not send* document type, `9905`, status already processed by the platform. A call made anyway (API, older screen) ends with *Validation failed (status 9905) — correct the invoice before resending* or *Already processed by the PA (status …) — resend refused*.

A bulk resend — **Resend selected**, **Resend all N** on the dashboard, an Auto-retry job — selects the invoices (by status for the dashboard and Auto-retry: `9904` by default, or a list such as `9904,9907`), then applies the same rules to each invoice.

The only opening in the protection is the [Fix buyer](./invoice-detail.md#fix-buyer) repair of a *Rejected* (`213`) invoice for an addressing reason (`ADR_ERR`, `REJ_ADR`, `DEST_INC`), through its *resend to the PA* option — sent only when the revalidation passes.

### Reprocess — two kinds, chosen from the status

| Kind | Status | Reason code | Document setting | Repeatable |
|---|---|---|---|---|
| **Reprint** — PDF and XML regenerated, nothing written to the database, no send | `200` | `NON_TRANSMISE` (exactly) | *Allow reprocess* = `Y` | No — once only: the `9912` marker left by the first reprint blocks a second one. |
| **Full reprocess** — regenerated with the enrichment queried again, validated, then sent when the settings say so | `9905` | Not checked | *Allow full reprocess* = `Y` | Yes |

Both kinds also require:

- the document recorded on the invoice (`UHTMPL`) still exists;
- that document has an **XML** or **PDF** source — a document with a UBL source cannot be reprocessed.

The send flag of the document type plays no part in the eligibility: a reprocess never sends by itself.

:::info[Any other status]
An invoice outside these rules — a `9904` for a reprint, a standard platform status for a resend — can only be moved on with **Set Status**. A `9905` is corrected, then validated again by the save or the full reprocess.
:::

## Detail and actions

- [Invoice detail](./invoice-detail.md) — the window that opens on a row: Summary (with *Fix buyer*), Parties, Lines, VAT, Notes, History and PDF tabs.
- [Invoice actions](./invoice-actions.md) — *Set status*, *E-mail*, the invoice editor (create / edit / copy) and the resend confirmation.

---

## Tips & best practices

- **Start with the period.** *Yesterday* is the typical morning view, a custom range covers month-end reconciliation; set the opening period once under [Default periods](../configuration/default-periods.md). Filters apply on top of the period.
- **The stages are the fastest filter.** *To correct* and *Decision needed* with a non-zero count are usually the right place to start when chasing exceptions; the caret narrows the stage to one status.
- **The lifecycle (History tab) is the source of truth.** It records every status the invoice has been in, with messages, rejection reasons and expected actions — the place to investigate disputes or PA-side decisions.
- **Use the Seller actions banner.** The actions surfaced for `205` / `206` / `207` / `208` / `210` / `213` / `9904` / `9907` are the platform's recommended next step. They reduce a multi-step workflow (finding the customer, drafting the credit note, etc.) to a single click when the connector is configured.
- **Set status only when needed.** Manual `Set status → DB` desynchronises the local record from the PA. Reserve it for clean-up after restoring backups or for statuses the lifecycle sweep cannot catch.
- **Edit UBL, then save** is the canonical correction path — it rewrites the database record with the new UBL and re-submits to the PA. Avoid editing the source XML directly through *UBL Tools → XML Viewer* unless the data on disk is the authoritative one.
- **Use Copy for recurring billing.** It pre-fills every party / line / VAT field; only the document number, dates, and any specific changes need to be edited.
