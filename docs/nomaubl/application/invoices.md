---
title: E-Invoicing
description: "The day-to-day NomaUBL invoice list — search, filter and inspect every invoice; open a detail view to consult parties, lines, VAT, lifecycle and PDF; edit, copy, resend or e-mail invoices; manually set a status."
keywords: [NomaUBL, e-invoicing, invoices, list, filter, search, status, detail, lifecycle, PDF, e-mail, set status, resend, edit, copy, RFE, Réforme de la Facturation Électronique, JD Edwards, SAP, NetSuite, custom ERP]
---

# E-Invoicing

The **E-Invoicing** screen is the central operational page of NomaUBL — the official entry point for the *Réforme de la Facturation Électronique* (RFE) workflow. It lists every invoice the platform has processed, with rich filters, a status-driven detail view, and the actions a user needs day to day: edit, copy, delete, manually set a status, e-mail the PDF to the customer, resend to the Plateforme Agréée.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. Every record visible here was persisted in the local NomaUBL database after going through the processing pipeline.

---

## Toolbar

The toolbar above the table combines date filtering, free-text search, status chips and quick actions.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}>
    <span style={{padding: '6px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '12px', fontWeight: 600, color: '#4a9eff'}}>📅 Yesterday</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Doc</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Dct</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Kco</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Contract</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Customer name</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.7}}>BAR ▾</span>
    <span style={{flex: 1, minWidth: '8px'}} />
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>↻ Refresh</span>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600, border: '1px solid #4a9eff'}}>+ New invoice</span>
  </div>
</div>

### Date range

The date filter on the left applies to the **last update** date of each invoice. The default preset is *Yesterday*; other presets are *Today*, *Last 7 days*, *This month*, *Last month* and *Custom range* (manual From / To dates).

### Free-text filters

Each input narrows the list as you type — the search updates after a brief pause:

| Field | What it matches |
|---|---|
| **Doc** | The internal document number (e.g. `12345`). |
| **Dct** | The document type code (e.g. `RI`, `RN`). |
| **Kco** | The company code (e.g. `00070`). |
| **Contract** | The contract reference carried by the invoice. |
| **Customer name** | The buyer party name. |

### BAR routing dropdown

A separate dropdown filters by **BAR routing** code (`B2B`, `B2G`, `B2BINT`, `B2C`, `OUTOFSCOPE`, `ARCHIVEONLY`, `DOCUMENT`) — the channel classification documented in *UBL Defaults → Document Type / BAR Routing*.

### Status chips

To the right, a row of **status chips** appears: one per status currently present in the date range. Each chip shows the status label, the count, and a colour matching its family. Clicking a chip toggles a status filter on the list — clicking it again clears it.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '14px 0 4px'}}>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>Approved <span style={{opacity: 0.65}}>(982)</span></span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>Pending <span style={{opacity: 0.65}}>(184)</span></span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.1)', color: '#fb923c'}}>Disputed <span style={{opacity: 0.65}}>(52)</span></span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.1)', color: '#f87171'}}>Rejected <span style={{opacity: 0.65}}>(29)</span></span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', opacity: 0.7}}>✕ Clear filter</span>
</div>

### Clear filters

When at least one filter is active, an **✕ Clear filter** chip appears at the end of the chip row. It clears every active filter except the date range.

### Refresh and New invoice

Two buttons sit at the right:

| Button | Behaviour |
|---|---|
| **Refresh** (circular arrow) | Re-runs the current query without changing the filters. |
| **+ New invoice** | Opens the *Create / Edit invoice modal*. Hidden on read-only sessions. |

---

## Invoice list

The table shows one row per invoice. Default sort: most recent document number first. Click any column header to sort by that column.

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
| **UBL number** | The invoice number as it appears in the generated UBL document. |
| **Issue date** | BT-2 from the UBL. |
| **Customer** | Buyer party name. |
| **Total HT** | Total amount excluding VAT. |
| **Total TTC** | Total amount including VAT. |
| **Currency** | ISO 4217 code. |
| **Status** | Status badge — code + label, coloured by family. |

A page-size selector at the bottom defaults to 50 rows per page; values up to 500 are accepted. The total count of matching invoices is shown next to the pagination controls.

### Click-through

Clicking any row opens the **Detail modal** for that invoice. Every action on this page is per-invoice — no multi-row selection.

### Export

A small **Export** button in the toolbar exports the current view (filters applied) as a CSV file named `invoices.csv`.

---

## Detail modal

Clicking a row opens a modal with seven tabs along the top: **Summary**, **Parties**, **Lines**, **VAT**, **Notes**, **History**, **PDF**. The modal title shows the invoice's `DOC / DCT / KCO` triplet. A **fullscreen toggle** in the header switches between a windowed and a full-screen view.

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

The Summary tab shows a coloured **status badge** at the top, followed by **action buttons** (Edit UBL, Copy, Delete) on the right.

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
| **Unit price** | Unit price excluding VAT. |
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

When several lines share the same delivery group or document references (`BT-128`), a **delivery header** or **document-reference header** appears once at the top of that group rather than repeating on every line.

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

#### Lifecycle group

The **lifecycle** is the audit trail of every status the invoice has been in. Each event shows:

- The status badge (code + colour-coded family).
- The status label and the message returned by the platform.
- Optional details for refusals: rejection reason code + label, expected action code + label, additional status note.

The lifecycle is append-only — events are added by the *Sync → Retrieve Statuses* sweep and never modified.

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

Opens from **+ New invoice** in the toolbar, or from the **Edit UBL** / **Copy** buttons in the Summary tab. Lets the user create a new invoice from scratch or adjust an existing one. The modal is laid out like a printable invoice — the user fills the form and NomaUBL produces the corresponding UBL document on **Save**.

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
- **Header** — issue / due dates, currency, period start / end.
- **Supplier** — pre-populates from the supplier directory (*UBL Defaults → Suppliers / Companies*); editable per invoice.
- **Customer** — manual or via PPF directory lookup.
- **Delivery** — optional delivery group.
- **Payment** — payment means code, IBAN, BIC, mandate, terms.
- **Allowances / charges** — document-level discounts / charges.
- **Notes** — free-text notes per `BT-22` prefix.
- **Lines** — invoice lines with item, quantity, unit, price, allowances, item properties.
- **VAT summary** — auto-computed from the lines (read-only — line edits are reflected here).
- **Totals** — auto-computed (read-only).

The **Save** button at the bottom validates the input, writes to the database, generates the UBL document and submits it to the PA according to the e-invoicing template's settings. The modal closes after a successful save.

A **fullscreen toggle** in the header swaps between windowed and full-screen edit, useful for invoices with many lines.

### Resend confirmation

The **Resend** button (in the History tab, or via Seller actions when status is `9904`/`9907`) opens a confirmation dialog before re-submitting the UBL to the Plateforme Agréée. After confirmation, the invoice is re-submitted; an inline banner reports success or the error returned by the PA. The lifecycle is updated to reflect the new submission.

---

## Tips & best practices

- **Start with a date range.** *Yesterday* (default) is the typical morning view; *Custom range* covers month-end reconciliation. Filters apply on top of the date range.
- **Status chips are the fastest filter.** A red chip with a non-zero count is usually the right place to start when chasing exceptions.
- **The lifecycle (History tab) is the source of truth.** It records every status the invoice has been in, with messages, rejection reasons and expected actions — the place to investigate disputes or PA-side decisions.
- **Use the Seller actions banner.** The actions surfaced for `205` / `206` / `207` / `208` / `210` / `213` / `9904` / `9907` are the platform's recommended next step. They reduce a multi-step workflow (finding the customer, drafting the credit note, etc.) to a single click when the connector is configured.
- **Set status only when needed.** Manual `Set status → DB` desynchronises the local record from the PA. Reserve it for clean-up after restoring backups or for statuses the lifecycle sweep cannot catch.
- **Edit UBL, then save** is the canonical correction path — it rewrites the database record with the new UBL and re-submits to the PA. Avoid editing the source XML directly through *UBL Tools → XML Viewer* unless the data on disk is the authoritative one.
- **Use Copy for recurring billing.** It pre-fills every party / line / VAT field; only the document number, dates, and any specific changes need to be edited.
