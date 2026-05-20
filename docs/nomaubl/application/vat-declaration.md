---
title: VAT Declaration
description: "Aggregate every invoice for a period on the standard French CA3 form rows — sales / purchases × domestic / intra-EU / outside-EU × VAT rate × invoice type — with drill-down to the individual invoices behind each figure, and one-click Excel and CA3-formatted PDF exports."
keywords: [NomaUBL, VAT declaration, déclaration de TVA, CA3, Cerfa 3310-CA3, French VAT, intra-EU, outside-EU, B2B, B2C, B2BINT, B2G, taxable base, JD Edwards, SAP, NetSuite, custom ERP]
---

# VAT Declaration

The **VAT Declaration** screen aggregates every invoice booked in a period on the lines of the French **CA3 form** — sales / purchases × France / intra-EU / outside-EU × VAT rate × invoice type. Each cell can be drilled down all the way to the individual invoices that make it up, and the result exports to Excel for accounting or to a CA3-styled PDF you can hand to the accountant.

Use this page when:

- you're preparing the monthly or quarterly VAT return and want a CA3-aligned summary built directly from the invoices already in the platform;
- you need to reconcile a CA3 line with the underlying invoices — which buyers, which document numbers, which amounts;
- you want a printable synthesis of the period to attach to the accounting file.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The period filter is read on the **invoice's issue date** — the date printed on the invoice itself — so the period stays stable even if the underlying data is rebuilt later. The Invoices list exposes the same date basis via its [Date basis toggle](./invoices.md#date-basis), so drilling into a VAT amount lands on the matching set on the Invoices side.

The matrix is served from the persisted VAT detail rows (`F564234`), not by re-parsing every UBL on each load — so the page opens in **a couple of seconds whether the period has 2 000 invoices or 200 000**. To keep it that way, leave *Store VAT details* on under *Settings → Connectors → db-nomaubl → Tables* — see [Detail Storage](../configuration/database-connectors/nomaubl.md#detail-storage).

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="vat-pg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="vat-pg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="vat-pg-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#vat-pg-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">VAT Declaration</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="100" height="26" rx="6" fill="url(#vat-pg-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="290" y="101" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">📅 April 2026 ▾</text>
  <rect x="348" y="84" width="64" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="101" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Month</text>
  <rect x="416" y="84" width="64" height="26" rx="6" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="448" y="101" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Quarter</text>
  <rect x="488" y="84" width="92" height="26" rx="6" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="534" y="101" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Company ▾</text>
  <rect x="660" y="84" width="56" height="26" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="688" y="101" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▣ Excel</text>
  <rect x="722" y="84" width="58" height="26" rx="6" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="751" y="101" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">📄 PDF CA3</text>

  <text x="240" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">SALES</text>
  <rect x="240" y="146" width="540" height="32" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▾  Domestic — France</text>
  <text x="572" y="166" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">128 450.00</text>
  <text x="672" y="166" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">23 110.00</text>
  <text x="772" y="166" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">412 invoices</text>

  <rect x="262" y="184" width="518" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="274" y="201" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">20%</text>
  <text x="572" y="201" fill="#cbd5e1" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">115 550.00</text>
  <text x="672" y="201" fill="#cbd5e1" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">23 110.00</text>
  <text x="772" y="201" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">370</text>

  <rect x="262" y="214" width="518" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="274" y="231" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">5.5%</text>
  <text x="572" y="231" fill="#cbd5e1" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">12 900.00</text>
  <text x="672" y="231" fill="#cbd5e1" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">709.50</text>
  <text x="772" y="231" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">42</text>

  <rect x="240" y="248" width="540" height="28" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▸  Intra-EU</text>
  <text x="572" y="266" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">18 200.00</text>
  <text x="672" y="266" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">— (exempt)</text>
  <text x="772" y="266" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">38</text>

  <rect x="240" y="280" width="540" height="28" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▸  Outside-EU</text>
  <text x="572" y="298" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">9 800.00</text>
  <text x="672" y="298" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">— (exempt)</text>
  <text x="772" y="298" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">12</text>

  <text x="240" y="334" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">PURCHASES</text>
  <rect x="240" y="342" width="540" height="28" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="360" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▸  Domestic — France</text>
  <text x="572" y="360" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">42 100.00</text>
  <text x="672" y="360" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">7 530.00</text>
  <text x="772" y="360" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">157 invoices</text>

  <rect x="240" y="374" width="540" height="28" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="392" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▸  Intra-EU acquisitions</text>
  <text x="572" y="392" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">5 600.00</text>
  <text x="672" y="392" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">1 120.00</text>
  <text x="772" y="392" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">9</text>

  <rect x="240" y="416" width="190" height="22" rx="11" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="335" y="431" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Solde · VAT due  16 169.50 €</text>

  <rect x="20" y="80" width="180" height="44" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="98" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period selector</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">defaults to last full month</text>
  <line x1="200" y1="100" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-pg-arrow)"/>

  <rect x="820" y="156" width="160" height="44" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="174" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three columns</text>
  <text x="830" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">taxable base · VAT · count</text>
  <line x1="820" y1="170" x2="780" y2="166" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-pg-arrow)"/>

  <rect x="20" y="240" width="180" height="44" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="258" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Country group</text>
  <text x="30" y="272" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">France / Intra-EU / Outside-EU</text>
  <line x1="200" y1="258" x2="240" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-pg-arrow)"/>

  <rect x="820" y="404" width="160" height="44" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="422" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Solde block</text>
  <text x="830" y="436" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">VAT due or VAT credit</text>
  <line x1="820" y1="424" x2="780" y2="427" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-pg-arrow)"/>
</svg>

---

## Toolbar

The toolbar above the matrix sets the **period**, an optional **company filter** and the **export buttons**.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}>
    <span style={{padding: '6px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '12px', fontWeight: 600, color: '#4a9eff'}}>📅 April 2026 ▾</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '12px', fontWeight: 600, color: '#4a9eff'}}>Month</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.7}}>Quarter</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.7}}>Company ▾</span>
    <span style={{flex: 1, minWidth: '8px'}} />
    <span style={{padding: '5px 12px', borderRadius: '6px', background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.4)', fontSize: '12px', fontWeight: 600, color: '#22c55e'}}>▣ Excel</span>
    <span style={{padding: '5px 12px', borderRadius: '6px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.4)', fontSize: '12px', fontWeight: 600, color: '#c084fc'}}>📄 PDF CA3</span>
  </div>
</div>

| Control | Effect |
|---|---|
| **Period selector** | Picks the period the matrix covers. Defaults to the **previous full month** — what you'd file. Switch to **Quarter** when you declare quarterly. The filter is applied against the **invoice's issue date** (the date printed on the invoice itself), so the period stays stable even if the underlying data is rebuilt later. The Invoices list exposes the same date basis via its [Date basis toggle](./invoices.md#date-basis) — drilling into a VAT amount opens the Invoices list with that toggle pre-selected, so the count matches the one you came from. |
| **Month / Quarter chips** | Toggle between monthly and quarterly granularity. The label of the period selector adapts (e.g. *Q2 2026*). |
| **Company** | Optional. Restricts the period to invoices of one company code (KCO). Defaults to *All companies*. |
| **▣ Excel** | Downloads the workbook described under [Excel export](#excel-export). |
| **📄 PDF CA3** | Downloads the CA3-styled synthesis described under [PDF export — CA3 form layout](#pdf-export--ca3-form-layout). |

---

## The CA3 matrix

The matrix opens **collapsed** at the country-group level — *Domestic (France)*, *Intra-EU* and *Outside-EU* for both *Sales* and *Purchases*. Each row shows three figures: **taxable base** (Total HT), **VAT amount** (Total TVA) and the **invoice count**.

Click the chevron on any row to expand it; click again to collapse. The matrix has **three drill-down levels** under each country group:

| Level | What appears | Example |
|---|---|---|
| **1 — VAT rate** | One row per rate found in the period inside that group. | `20%`, `10%`, `5.5%`, `2.1%`, `0%`. |
| **2 — Invoice type** | Under a rate row, one row per BAR routing — `B2B`, `B2C`, `B2BINT`, `B2G`, *unclassified*. | A `20%` row of *Domestic* breaks into B2B / B2C contributions. |
| **3 — Individual invoices** | Under a type row, one row per invoice: document number, type, company, taxable base, VAT amount. Capped at **200 rows** inline — use the Excel export for the full list. | `12345 / RI / 00070   Acme Industries SA   500.00   100.00`. |

Every amount in the matrix is **clickable**. A click jumps to the [Invoices list](./invoices.md) pre-filtered to the same set — same period, same direction, same country group, same rate, same type when applicable — so you can drop into the operational list without re-typing any filter.

### Country group rules

The classification reads from the **counterparty country** captured on each invoice at insert time (buyer country on sales, supplier country on purchases) and from the *Sales / Purchases* direction stored on the invoice (`UHDRIN`).

| Country group | Sales (issued) | Purchases (received) |
|---|---|---|
| **Domestic** | Buyer country = `FR`. | Supplier country = `FR`. |
| **Intra-EU** | Buyer country in the 26 other EU member states. | Supplier country in the 26 other EU member states. |
| **Outside-EU** | Everything else (or unknown). | Everything else (or unknown). |

VAT rates rolled up under *Intra-EU* sales and *Outside-EU* sales appear as exempt (`—`) — they do not contribute to the VAT column, only to the taxable base. *Intra-EU acquisitions* on the Purchases side carry self-assessed VAT and contribute to both the taxable base and the VAT amount.

---

## When the matrix is empty

If the database does not yet hold any VAT detail row (`F564234`) for the selected period — typically right after *Store VAT details* was turned on but before any historical data was rebuilt — the page no longer shows a misleading empty matrix. It surfaces the exact command line to run, with the dates of the selected period already filled in:

<div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,159,10,0.04)', padding: '20px 24px'}}>
  <div style={{fontSize: '13px', fontWeight: 700, color: '#fb923c', marginBottom: '6px'}}>⚠ No VAT details for April 2026</div>
  <div style={{fontSize: '12px', opacity: 0.85, marginBottom: '14px', lineHeight: 1.55}}>The database does not hold any VAT detail row for this period. Run the rebuild command once, then reopen the page:</div>
  <div style={{fontFamily: 'ui-monospace, monospace', fontSize: '12px', padding: '12px 14px', background: 'rgba(0,0,0,0.35)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)'}}>./nomaubl.sh backfill-vat prod 2026-04-01 2026-04-30</div>
  <div style={{fontSize: '11px', opacity: 0.65, marginTop: '10px', fontStyle: 'italic'}}>Safe to re-run on the same period without creating duplicates.</div>
</div>

The command is documented under [Command Line → `backfill-vat`](../management/command-line.md#backfill-vat). Once the rebuild has run, reopen the VAT page and the matrix is populated as expected.

---

## Excel export

The **▣ Excel** button downloads a workbook with two sheets:

| Sheet | Content |
|---|---|
| **Summary** | Mirrors the on-screen matrix — sales / purchases × country group × rate × type — with subtotals per country group and per direction. |
| **Details** | One row per invoice contributing to the period: document number, document type, company, counterparty name, counterparty country, BAR routing, taxable base, VAT amount, currency, issue date. |

Numeric cells are written as real numbers, not as text. Totals, pivot tables and downstream Excel formulas work without any clean-up.

---

## PDF export — CA3 form layout

The **📄 PDF CA3** button downloads a one-page synthesis styled like the official **Cerfa 3310-CA3** so it can be filed alongside the rest of the accounting paperwork without re-typing.

| Block | CA3 lines |
|---|---|
| **Section A — Operations realised** | Line **01** (sales subject to VAT), **03** (intra-EU acquisitions), **04** (exports outside EU), **06** (intra-EU deliveries), **7B** (other non-taxable operations). |
| **Section B — VAT brute then déductible** | One row per applicable rate: **08** (20%), **9B** (10%), **09** (5.5%), **10** (2.1%) and **14** (other rates), with total **16**. Then **20** (déductible VAT on goods and services) and total **23**. |
| **Solde** | Either **28** (*VAT à payer*) when the period ends in debt, or **32** (*crédit*) when déductible VAT outweighs collected VAT. |

The PDF is meant as a printable synthesis — not a substitute for filing on the DGFiP portal.

---

## Note on existing data

Invoices created before this release have no counterparty country on file. They are classified as **Domestic** by default until the underlying invoice is re-processed (so the country is captured from the UBL document and persisted). Any new invoice from now on lands with the correct country.

If you spot an intra-EU or outside-EU invoice still showing under *Domestic*, re-running it from the [Invoices list](./invoices.md) (Edit → Save, or a fresh Process from [Sync → Fetch Input](../sync/fetch-input.md)) refreshes the country.
