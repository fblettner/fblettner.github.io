---
title: VAT Declaration
description: "Aggregate every invoice for a period on the standard French CA3 form rows — sales / purchases × domestic / intra-EU / outside-EU × VAT rate × invoice type — with drill-down to the individual invoices behind each figure, and one-click Excel and CA3-formatted PDF exports."
keywords: [NomaUBL, VAT declaration, déclaration de TVA, CA3, Cerfa 3310-CA3, French VAT, intra-EU, outside-EU, B2B, B2C, B2BINT, B2G, taxable base, JD Edwards, SAP, NetSuite, custom ERP]
---

# VAT Declaration

The **VAT Declaration** screen aggregates every invoice booked in a period on the lines of the French **CA3 form** — sales / purchases × France / intra-EU / outside-EU × VAT rate × invoice type. Each rate unfolds into its transaction types and the individual invoices that make it up, and the result exports to Excel for accounting or to a CA3-styled PDF you can hand to the accountant.

Use this page when:

- you're preparing the monthly or quarterly VAT return and want a CA3-aligned summary built directly from the invoices already in the platform;
- you need to reconcile a CA3 line with the underlying invoices — which buyers, which document numbers, which amounts;
- you want a printable synthesis of the period to attach to the accounting file.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The period filter is read on the **invoice's issue date** — the date printed on the invoice itself — so the period stays stable even if the underlying data is rebuilt later.

The matrix is served from the persisted VAT detail rows (`F564234`), not by re-parsing every UBL on each load — so the page opens in **a couple of seconds whether the period has 2 000 invoices or 200 000**. To keep it that way, leave *Store VAT details* on under *Settings → Connectors → db-nomaubl → Tables* — see [Detail Storage](../configuration/database-connectors/nomaubl.md#detail-storage).

---

## At a glance

<svg viewBox="0 0 1320 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="vat-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0.10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="vat-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="vat-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="vat-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0.10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="430" rx="14" fill="url(#vat-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">VAT declaration</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">The VAT of a period in the CA3 layout: collected, deductible and net; each rate unfolds into transaction types, then invoices.</text>
  <rect x="240" y="82" width="115" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="83" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="266.0" y="97.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Month</text>
  <line x1="292" y1="87" x2="292" y2="101" stroke="#334155" strokeWidth="1"/>
  <text x="323.5" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Quarter</text>
  <rect x="363" y="83" width="55" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="373" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">2026 ▾</text>
  <rect x="426" y="83" width="83" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="436" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">September ▾</text>
  <rect x="517" y="83" width="106" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="527" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">All companies ▾</text>
  <rect x="635" y="89" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M637.5,94.5 L639.8,96.8 L643.8,92" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="652" y="98" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Exclude refused and rejected</text>
  <rect x="805.12" y="89" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="822.12" y="98" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Exclude invoices not at the platform</text>
  <rect x="976" y="112" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1002.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="1036" y="112" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1058.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <text x="240" y="126" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">1 Sep 2026 – 30 Sep 2026</text>
  <text x="390" y="126" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">compared with 1 Aug 2026 – 31 Aug 2026</text>
  <rect x="240.0" y="138" width="273.3333333333333" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="156" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VAT COLLECTED</text>
  <text x="252.0" y="180" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">250,631.56 €</text>
  <text x="252.0" y="195" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1,253,157.80 € excl. VAT · 2,361 invoices</text>
  <text x="252.0" y="208" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">+4.2 % vs 240,524.10 €</text>
  <rect x="523.3333333333333" y="138" width="273.3333333333333" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="535.3333333333333" y="156" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VAT DEDUCTIBLE</text>
  <text x="535.3333333333333" y="180" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">98,412.30 €</text>
  <text x="535.3333333333333" y="195" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">492,061.50 € excl. VAT · 418 invoices</text>
  <text x="535.3333333333333" y="208" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">−1.8 % vs 100,216.00 €</text>
  <rect x="806.6666666666666" y="138" width="273.3333333333333" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="818.6666666666666" y="156" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VAT DUE</text>
  <text x="818.6666666666666" y="180" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">152,219.26 €</text>
  <text x="818.6666666666666" y="195" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Collected − deductible</text>
  <text x="818.6666666666666" y="208" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">+8.6 % vs 140,308.10 €</text>
  <rect x="240" y="230" width="840" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="245.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINE</text>
  <text x="720" y="245.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE HT</text>
  <text x="860" y="245.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VAT</text>
  <text x="1000" y="245.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INVOICES</text>
  <rect x="240" y="258" width="840" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales (VAT collected)</text>
  <text x="720" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1,253,157.80</text>
  <text x="860" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">250,631.56</text>
  <text x="1000" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2,361</text>
  <rect x="240" y="284" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="298.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">   France</text>
  <text x="720" y="298.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1,101,840.00</text>
  <text x="860" y="298.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">220,368.00</text>
  <text x="1000" y="298.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2,102</text>
  <rect x="240" y="310" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="324.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">      ▸ 20 %</text>
  <text x="720" y="324.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1,080,000.00</text>
  <text x="860" y="324.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">216,000.00</text>
  <text x="1000" y="324.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2,050</text>
  <rect x="240" y="336" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="350.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">      ▸ 10 %</text>
  <text x="720" y="350.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">21,840.00</text>
  <text x="860" y="350.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2,184.00</text>
  <text x="1000" y="350.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">52</text>
  <rect x="240" y="362" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="376.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">   Intra-EU</text>
  <text x="720" y="376.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">151,317.80</text>
  <text x="860" y="376.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">30,263.56</text>
  <text x="1000" y="376.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">259</text>
  <rect x="240" y="388" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="402.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Purchases (VAT deductible)</text>
  <text x="720" y="402.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">492,061.50</text>
  <text x="860" y="402.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">98,412.30</text>
  <text x="1000" y="402.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">418</text>
  <rect x="240" y="414" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="428.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">VAT due — Collected − deductible</text>
  <text x="720" y="428.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="860" y="428.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">152,219.26</text>
  <text x="1000" y="428.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="78" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="93" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Month or quarter</text>
  <text x="30" y="106" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">last full month by default</text>
  <line x1="200" y1="95.0" x2="240" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three headline figures</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vs previous month or quarter</text>
  <line x1="200" y1="177.0" x2="240" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Direction, zone, rate</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">totals on each line</text>
  <line x1="200" y1="277.0" x2="250" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Net VAT</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">due or credit</text>
  <line x1="200" y1="417.0" x2="250" y2="426" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="1120" y="52" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="67" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Company</text>
  <text x="1130" y="80" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the list of companies</text>
  <line x1="1120" y1="69.0" x2="577" y2="82" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="1120" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two exclusions</text>
  <text x="1130" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">explained on hover</text>
  <line x1="1120" y1="113.0" x2="933.48" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel and PDF</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">summary + details · CA3</text>
  <line x1="1120" y1="177.0" x2="1080" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A rate unfolds</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">into types, then invoices</text>
  <line x1="1120" y1="307.0" x2="280" y2="325" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
</svg>

---

## Filter bar

One bar sets the period, the company and the two exclusions, as on the dashboards.

| Control | Effect |
|---|---|
| **Month / Quarter** | Monthly or quarterly declaration. The page opens on the **previous full month** — the one you file. |
| **Year** and **month** / **quarter** | The period: the current year and the five before it; a month name, or `Q1` to `Q4`. The tag below the bar shows the dates and the previous period used for the changes (*compared with …*). The period is read on the **invoice's issue date**, so it stays stable even if the data is rebuilt later. |
| **Company** | A picker of the companies (the `list-companies` [custom list](../configuration/custom-lists.md#ready-made-lists)); *All companies* by default. |
| **Exclude refused and rejected** | On by default. Refused (`210`) and rejected (`213`) invoices call for an internal credit note: on, all are left out; off, only those customer service marked reviewed — see [Invoices left out](#excluded-invoices). The explanation shows on hover. |
| **Exclude invoices not at the platform** | Off by default. Also leaves out the invoices flagged to be sent whose status is still internal: validation, send or import failure, or not yet sent. |
| **Excel** | Downloads the workbook described under [Excel export](#excel-export). |
| **PDF** | Downloads the CA3-styled synthesis described under [PDF export — CA3 form layout](#pdf-export--ca3-form-layout). |

---

## Headline figures

| Figure | Value | Sub-line |
|---|---|---|
| **VAT collected** | VAT of the sales. | Base excl. VAT and number of invoices. |
| **VAT deductible** | VAT of the purchases. | Base excl. VAT and number of invoices. |
| **VAT due** / **VAT credit** | Collected minus deductible; shown as *VAT credit*, in green, when it is negative. | *Collected − deductible*. |

Below each figure, the change from the previous month or quarter (`+4.2 %`) and the previous amount (`vs …`), computed with the same company and the same exclusions.

---

## Invoices left out \{#excluded-invoices\}

The declaration counts the invoices issued in the period, minus:

| Case | Left out when |
|---|---|
| Refused by the buyer (`210`) or rejected by the platform (`213`) | *Exclude all refused and rejected* is checked (default) — or, unchecked, once customer service has marked the invoice reviewed in its window, the internal credit note being done. |
| To be sent, never reached the platform | *Exclude to-send invoices not at the platform* is checked: the invoice is flagged to be sent and its status is still internal (`99xx` other than `9906`, pending at the platform, and `9911`, export validated). |

The two rules apply to the matrix, the unfolded invoices, the Excel export and the PDF, whose footer states the rules applied. Over the API, the same choices are the `excludeMode` (`all` or `reviewed`) and `excludeUnsent` parameters.

---

## The CA3 matrix

The table reads by **direction**, then by **country group**, then by **rate**:

| Row | Content |
|---|---|
| **Sales (VAT collected)** / **Purchases (VAT deductible)** | The direction with its totals — taxable base (*Base HT*), VAT and invoice count. Sales come first; a direction without invoices is not shown. |
| **France**, **Intra-EU**, **Outside EU** | Each country group once, with its subtotal. |
| **Rate** (`20 %`, `10 %`…, *No rate*) | One row per rate found in the group, highest first, collapsed. Its chevron opens one row per BAR routing (`B2B`, `B2C`, `B2BINT`, `B2G`…), whose chevron opens the invoices — document, type, company, base and VAT, up to **200 rows** (the Excel export holds the full list). |
| **VAT due** / **VAT credit** | The net VAT of the period, *Collected − deductible*. |

The amounts are not links to the [Invoices list](./invoices.md), which cannot filter by VAT rate nor apply the two exclusions: the invoices behind a figure are read by unfolding its rate and routing rows, or in the *Details* sheet of the Excel export. Amounts, rates and percentages follow the number format of the interface language.

### Country group rules

The classification reads from the **counterparty country** captured on each invoice at insert time (buyer country on sales, supplier country on purchases) and from the *Sales / Purchases* direction stored on the invoice (`UHDRIN`).

| Country group | Sales (issued) | Purchases (received) |
|---|---|---|
| **France** | Buyer country = `FR`, or unknown. | Supplier country = `FR`, or unknown. |
| **Intra-EU** | Buyer country in the 26 other EU member states. | Supplier country in the 26 other EU member states. |
| **Outside EU** | Any other country. | Any other country. |

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

A server-side failure — a database error, for instance — is never shown as an empty period: the page displays the error message, and the error is written to the server log.

---

## Excel export

The **Excel** button downloads `vat-declaration-<from>-<to>.xlsx`, with two sheets:

| Sheet | Content |
|---|---|
| **Summary** | Mirrors the on-screen matrix — sales / purchases × country group × rate × type — with subtotals per country group and per direction. |
| **Details** | One row per invoice contributing to the period: document number, document type, company, counterparty name, counterparty country, BAR routing, taxable base, VAT amount, currency, issue date. |

Numeric cells are written as real numbers, not as text. Totals, pivot tables and downstream Excel formulas work without any clean-up.

---

## PDF export — CA3 form layout

The **PDF** button downloads a one-page synthesis styled like the official **Cerfa 3310-CA3** (`vat-declaration-<from>-<to>.pdf`), so it can be filed alongside the rest of the accounting paperwork without re-typing. The PDF is in French whatever the interface language, with French number formats: amounts `125 315,78`, rates `5,5 %`, period `01/09/2026 – 30/09/2026`. Its footer states the exclusion rules applied.

| Block | CA3 lines |
|---|---|
| **Section A — Operations realised** | Line **01** (sales subject to VAT), **03** (intra-EU acquisitions), **04** (exports outside EU), **06** (intra-EU deliveries), **7B** (purchases of goods and services outside the EU). |
| **Section B — VAT brute then déductible** | One row per applicable rate: **08** (20%), **9B** (10%), **09** (5.5%), **10** (2.1%) and **14** (other rates), with total **16**. Then **20** (déductible VAT on goods and services) and total **23**. |
| **Solde** | Either **28** (*VAT à payer*) when the period ends in debt, or **32** (*crédit*) when déductible VAT outweighs collected VAT. |

The PDF is meant as a printable synthesis — not a substitute for filing on the DGFiP portal.

---

## Note on existing data

Invoices created before this release have no counterparty country on file. They are classified as **Domestic** by default until the underlying invoice is re-processed (so the country is captured from the UBL document and persisted). Any new invoice from now on lands with the correct country.

If you spot an intra-EU or outside-EU invoice still showing under *Domestic*, re-running it from the [Invoices list](./invoices.md) (Edit → Save, or a fresh Process from [Sync → Fetch Input](../sync/fetch-input.md)) refreshes the country.
