---
title: "Invoice detail"
description: "The NomaUBL invoice detail window — Summary, Parties, Lines, VAT, Notes, History and PDF tabs; fix the buyer of an addressing reject, follow the lifecycle, resend, set a status."
keywords: [NomaUBL, e-invoicing, invoice detail, summary, parties, lines, VAT, notes, history, lifecycle, PDF, fix buyer, JD Edwards, SAP, NetSuite, custom ERP]
---

# Invoice detail

Clicking a row of the [E-Invoicing](./invoices.md) list opens a modal with seven tabs along the top: **Summary**, **Parties**, **Lines**, **VAT**, **Notes**, **History**, **PDF**. The modal title shows the invoice's `DOC / DCT / KCO` triplet. At the right of the tabs, the **Reviewed** chip sets or clears the [review mark](./invoices.md#mark-reviewed) of an invoice in error. A **fullscreen toggle** in the header switches between a windowed and a full-screen view.

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

## Summary tab *(default)*

The Summary tab shows a coloured **status badge** at the top — with, under it, the status details and the **Rule set** the invoice was produced under (see [Rule sets](../ubl-tools/rule-sets.md)) — followed by **action buttons** (Edit UBL, Copy, Delete) on the right. **Delete** removes the invoice and every related record — log row (source XML, PA transaction reference, source file name), lifecycle, lines, VAT and validation — so a later run of the same document starts fresh and the [watched folders](../management/watched-folders.md) can pick its source file up again. Deletion follows the same protection as *Fix buyer*: the button is hidden once the PA has processed the invoice, except for a **213** rejection with an addressing reason. Right under the badge, when the platform returned them, the current **rejection reason**, **expected action** and **status note** are shown inline, and the full **status message** sits in a collapsed group — expand it for the platform's long error text. The same values feed the custom actions as `{message}`, `{reasonLabel}`, `{actionLabel}` and `{actionNote}` placeholders (see [Actions](../management/actions.md#custom-actions)), with no list-view column needed.

### Fix buyer \{#fix-buyer\}

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

## Parties tab

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

## Lines tab

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

## VAT tab

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

## Notes tab

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

## History tab

Three sections in this tab:

### Action bar at the top

| Button | Behaviour |
|---|---|
| **Validate UBL** | Re-runs XSD + Schematron validation on the UBL stored in the database. The result is shown inline (valid / warning / error) with details when applicable. |
| **Set status** | Opens the *Set Status modal* — see below. |
| **Resend** | Submits the UBL to the Plateforme Agréée again. Confirms before running. |
| **Download UBL** | Saves the archived UBL of the invoice. |
| **Download CII** | Shown when the document has a [post-transform](../ubl-tools/post-transform.md): the archived UBL converted on demand, named after the post-transform (*Download converted file* when it has no name). |

To change the transaction type of an invoice (B2B, B2C…) or edit its stored UBL as text, use the UBL tab of the [document window](./edocuments.md#ubl-tab-actions) on the E-Documents page.

### Lifecycle group

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

### Validation errors group

Lists the validation errors (XSD / Schematron) that were recorded for this invoice. Each row carries the severity, the rule identifier and the human-readable message. Empty when the invoice validates cleanly.

## PDF tab

The PDF tab renders a generated PDF of the invoice inline (an `<iframe>` view). The bottom of the tab carries:

| Button | Behaviour |
|---|---|
| **E-mail** | Opens the *E-mail modal* with the displayed PDF pre-attached. |
| **Download** | Saves the PDF to the local computer. |

---
