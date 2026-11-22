---
title: "Invoice actions"
description: "The NomaUBL invoice action windows — set a status, e-mail the PDF to the customer, create or edit an invoice in the editor, confirm a resend to the Plateforme Agréée."
keywords: [NomaUBL, e-invoicing, set status, e-mail, invoice editor, create invoice, edit invoice, resend, JD Edwards, SAP, NetSuite, custom ERP]
---

# Invoice actions

The windows below open from the [E-Invoicing](./invoices.md) list and from the [invoice detail](./invoice-detail.md) window.

## Set Status modal

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

## E-mail modal

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

## Create / Edit invoice modal \{#create-invoice\}

Opens from **+ New Invoice** in the toolbar, or from the **Edit UBL** / **Copy** buttons in the Summary tab. Lets the user create a new invoice from scratch or adjust an existing one. The modal is laid out like a printable invoice — the user fills the form and NomaUBL produces the corresponding UBL document on **Save**.

The sections and fields shown depend on the user's role: a role granted [entry forms](../configuration/entry-forms.md) opens the editor on its default form — some fields read-only or hidden, defaults filled in, required fields checked on save — and a picker in the header switches between its forms. Without any form, the role keeps the complete editor. On a line, **+ Price** opens the price details (gross price, price discount, net price) and **+ Delivery** the line delivery block; the bin closes them.

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

## Resend confirmation

The **Resend** button (in the History tab, or via Seller actions when status is `9904`/`9907`) opens a confirmation dialog before re-submitting the UBL to the Plateforme Agréée, within the [resend rules](./invoices.md#resend-reprocess-rules) — the document is transmitted immediately and its status moves to *Pending* (`9906`). After confirmation, the invoice is re-submitted; an inline banner reports success or the error returned by the PA. The lifecycle is updated to reflect the new submission.
