---
title: E-Reporting
description: "E-reporting declarations to the Plateforme Agréée — generate French flux 10.1 (B2C invoice detail) and flux 10.3 (B2BINT aggregated) for a chosen company, type and period; track each report's lifecycle, resend on demand, download the submitted XML."
keywords: [NomaUBL, e-reporting, B2C, intra-EU, B2BINT, OUTOFSCOPE, flux 10.1, flux 10.3, IN, RE, CO, MO, AFNOR XP Z12-014, RFE, Réforme de la Facturation Électronique, JD Edwards, SAP, NetSuite, custom ERP, French e-invoicing reform]
---

# E-Reporting

The **E-Reporting** screen is the operational entry point for the **e-reporting workflow** of NomaUBL — the declaration track of the French *Réforme de la Facturation Électronique* (RFE). Where *E-Invoicing* sends a structured invoice to the recipient's Plateforme Agréée, *E-Reporting* sends an **aggregated declaration** to the tax authority through the same PA — covering the transactions that fall *outside* the e-invoicing flow:

- **B2C transactions** — sales to private individuals.
- **Intra-EU B2B transactions** — sales to a buyer in another EU member state.
- **Export and other out-of-scope transactions** — sales to non-EU buyers, intra-group internal flows, etc.

For these transactions the buyer never receives a structured invoice via the PA; the seller still declares the turnover so the tax authority can compute the VAT obligation. NomaUBL groups the relevant transactions, builds the corresponding XML, submits it to the PA and tracks its lifecycle.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP.

---

## Where e-reporting fits

E-reporting is the **declaration-only** track of the French reform — the e-invoicing flow handles the structured B2B invoice, while e-reporting covers everything that does not go through that flow but still needs to be reported for VAT.

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '28px 0', display: 'block'}}>
  <defs>
    <marker id="er-pos-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/>
    </marker>
    <marker id="er-pos-arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#c084fc"/>
    </marker>
    <marker id="er-pos-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/>
    </marker>
    <linearGradient id="er-pos-g-slate" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/>
      <stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/>
    </linearGradient>
    <linearGradient id="er-pos-g-blue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/>
      <stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/>
    </linearGradient>
    <linearGradient id="er-pos-g-purple" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#c084fc" stopOpacity="0.22"/>
      <stop offset="100%" stopColor="#c084fc" stopOpacity="0.06"/>
    </linearGradient>
    <linearGradient id="er-pos-g-purple-strong" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#c084fc" stopOpacity="0.32"/>
      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.12"/>
    </linearGradient>
  </defs>

  <rect x="410" y="130" width="240" height="190" rx="14" fill="#c084fc" fillOpacity="0.04" stroke="#c084fc" strokeOpacity="0.25" strokeWidth="1.3"/>
  <text x="425" y="152" fill="#c084fc" fontSize="11" fontWeight="800" letterSpacing="1.6" fontFamily="system-ui, sans-serif">📊 E-REPORTING TRACK</text>

  <rect x="40" y="160" width="140" height="70" rx="10" fill="url(#er-pos-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="110" y="188" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sale</text>
  <text x="110" y="208" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.72">(any source system)</text>

  <rect x="220" y="160" width="140" height="70" rx="10" fill="url(#er-pos-g-slate)" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="6 3"/>
  <text x="290" y="188" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">BAR routing</text>
  <text x="290" y="208" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.72">decision</text>

  <line x1="180" y1="195" x2="220" y2="195" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#er-pos-arrow-slate)"/>

  <rect x="430" y="30" width="200" height="60" rx="10" fill="url(#er-pos-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="530" y="56" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📤 E-Invoicing</text>
  <text x="530" y="75" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">structured invoice via PA</text>

  <path d="M 360 175 L 395 175 L 395 60 L 430 60" stroke="#4a9eff" strokeWidth="1.5" fill="none" markerEnd="url(#er-pos-arrow-blue)"/>
  <text x="370" y="130" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">B2B / B2G</text>

  <rect x="440" y="170" width="200" height="50" rx="8" fill="url(#er-pos-g-purple-strong)" stroke="#c084fc" strokeWidth="1.5"/>
  <text x="540" y="190" fill="#c084fc" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">Flux 10.1</text>
  <text x="540" y="207" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">B2BINT detail · per invoice</text>

  <rect x="440" y="240" width="200" height="50" rx="8" fill="url(#er-pos-g-purple-strong)" stroke="#c084fc" strokeWidth="1.5"/>
  <text x="540" y="260" fill="#c084fc" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">Flux 10.3</text>
  <text x="540" y="277" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">B2C / OUTOFSCOPE · aggregated</text>

  <line x1="360" y1="195" x2="440" y2="195" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#er-pos-arrow-purple)"/>
  <text x="383" y="187" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">B2BINT</text>

  <path d="M 360 215 L 405 215 L 405 265 L 440 265" stroke="#c084fc" strokeWidth="1.5" fill="none" markerEnd="url(#er-pos-arrow-purple)"/>
  <text x="370" y="234" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">B2C / OUTOFSCOPE</text>

  <rect x="730" y="30" width="220" height="60" rx="10" fill="url(#er-pos-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="840" y="56" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🏢 Buyer's PA</text>
  <text x="840" y="75" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">structured invoice received</text>

  <line x1="630" y1="60" x2="730" y2="60" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#er-pos-arrow-blue)"/>

  <rect x="730" y="200" width="220" height="60" rx="10" fill="url(#er-pos-g-purple)" stroke="#c084fc" strokeWidth="1.5"/>
  <text x="840" y="226" fill="#c084fc" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🏛 Tax authority</text>
  <text x="840" y="245" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">aggregated declaration · via PA</text>

  <path d="M 640 195 L 690 195 L 690 230 L 730 230" stroke="#c084fc" strokeWidth="1.5" fill="none" markerEnd="url(#er-pos-arrow-purple)"/>
  <path d="M 640 265 L 690 265 L 690 230" stroke="#c084fc" strokeWidth="1.5" fill="none"/>
</svg>

The BAR routing rule defined in *UBL Defaults → Document Type / BAR Routing* drives the split — set it correctly upstream and the right transactions land in the right flux automatically.

---

## Two flux, four document types

The French e-reporting specification defines **two flux** for outgoing declarations and **four document types** that describe whether a report is an initial submission or a correction.

| Flux | Scope | Content shape |
|---|---|---|
| **`10.1`** | **B2BINT** invoice detail | One `<Invoice>` element per international B2B invoice in the period — ID, issue date, type code, currency, Seller (declarer), Buyer (counterparty), monetary totals, and one `<TaxSubTotal>` per VAT rate. B2C invoices are *never* emitted here, in line with the routing rule of the specification. |
| **`10.3`** | **B2C / OUTOFSCOPE** aggregated | One `<Transactions>` block per *(category code, currency)*, with nested `<TaxSubTotal>` entries per rate carrying the taxable base (in source currency) and the VAT amount (always in EUR). |

| Code | Meaning | Typical use |
|---|---|---|
| **`IN`** | **Initial** | First declaration for the period — the default. |
| **`RE`** | **Replacement** | Replaces a previously submitted report for the same period after a correction. |
| **`CO`** | **Cancellation** | Cancels a previously submitted report (e.g. submitted by mistake). |
| **`MO`** | **Modification** | Adjusts specific lines of a previous report without full replacement. |

Reports follow a configurable **frequency** — `MONTHLY` (calendar month, default), `DECADAL` (1-10, 11-20, 21-end of month) or `WEEKLY` (ISO Monday → Sunday) — defined in the *e-reporting* template of `config.json`.

### Transaction category codes (flux 10.3)

The `<Transactions>` block in flux 10.3 carries a `<CategoryCode>` (TT-81) that classifies the underlying operation against the four codes accepted by the specification:

| Code | Meaning | Typical use |
|---|---|---|
| **`TLB1`** | Taxable goods deliveries | Standard sales of goods subject to French VAT. |
| **`TPS1`** | Taxable services | Service supplies subject to French VAT. |
| **`TNT1`** | Non-taxable | Operations outside the scope of French VAT — intra-EU distance sales, services covered by Article 259 B CGI, exports. |
| **`TMA1`** | Margin regime | Operations under the VAT-on-margin regime (Articles 266 e, 268, 297 A CGI). |

NomaUBL derives the category from the underlying invoice line. When a source line carries a value outside the accepted set, the platform falls back automatically to `TLB1` (positive rate) or `TNT1` (zero rate).

:::info[VAT amounts are always in EUR]
Every `<TaxAmount>` and `<TaxTotal>` element produced by NomaUBL is forced to euros, regardless of the source invoice's currency. The `<TaxableAmount>` keeps the source invoice's original currency so the underlying operation amount stays auditable.
:::

---

## Lifecycle statuses

E-reporting reports go through a **dedicated lifecycle** distinct from the invoice statuses. NomaUBL writes one of these eight codes on each transition between *generation* and *PA acknowledgement (or rejection)*:

<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', margin: '18px 0', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', fontSize: '11px'}}>
  <span style={{fontSize: '10px', opacity: 0.7, marginRight: '4px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700}}>Happy path</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(148,163,184,0.55)', background: 'rgba(148,163,184,0.12)', color: '#cbd5e1', fontWeight: 600}}>9950 Created</span>
  <span style={{opacity: 0.5}}>→</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa', fontWeight: 600}}>9952 Sent to PA</span>
  <span style={{opacity: 0.5}}>→</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa', fontWeight: 600}}>9953 Pending</span>
  <span style={{opacity: 0.5}}>→</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.12)', color: '#4ade80', fontWeight: 600}}>9955 Deposited ✓</span>
  <span style={{flex: '1 1 100%', height: '4px'}} />
  <span style={{fontSize: '10px', opacity: 0.7, marginRight: '4px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700}}>Failure / variants</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(148,163,184,0.55)', background: 'rgba(148,163,184,0.12)', color: '#cbd5e1', fontWeight: 600}}>9951 Submit skipped</span>
  <span style={{opacity: 0.5}}>·</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.12)', color: '#fb923c', fontWeight: 600}}>9954 Error sent</span>
  <span style={{opacity: 0.5}}>·</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.12)', color: '#fb923c', fontWeight: 600}}>9956 Failed import</span>
  <span style={{opacity: 0.5}}>·</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.12)', color: '#f87171', fontWeight: 600}}>9957 Rejected ✗</span>
</div>

| Code | Tag | Meaning |
|---|---|---|
| **`9950`** | `EREPORT_CREATED` | Report XML built and persisted; no submission attempt yet. |
| **`9951`** | `EREPORT_SUBMIT_SKIPPED` | Report generated; submission to the PA disabled (`sendToPA=N` on the *e-reporting* template). The XML is available for download but never reaches the PA. |
| **`9952`** | `EREPORT_SENT_TO_PA` | Report submitted to the PA over HTTP; awaiting initial acknowledgement. |
| **`9953`** | `EREPORT_PENDING` | PA has acknowledged receipt and is processing the report. |
| **`9954`** | `EREPORT_ERROR_SENT` | Submission to the PA failed at the network or HTTP level — typically transient. **Resend** can recover. |
| **`9955`** | `EREPORT_DEPOSITED` | PA accepted and registered the report — terminal success. |
| **`9956`** | `EREPORT_FAILED_IMPORT` | PA could not import the report (post-acknowledgement processing error). |
| **`9957`** | `EREPORT_REJECTED` | PA rejected the report on a validation rule — terminal failure. The next attempt requires a corrected `RE`. |

Codes `9950` – `9954` are *transient* (the report is still moving). `9955` – `9957` are *terminal* (no further automatic transition); a `RE` (replacement) report is the only way to override a `9957` for the same period.

---

## At a glance

<svg viewBox="0 0 1000 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="er-pg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="er-pg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="er-pg-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="540" rx="14" fill="url(#er-pg-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">E-Reporting</text>
  <rect x="612" y="30" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="652" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Refresh</text>
  <rect x="696" y="30" width="84" height="22" rx="5" fill="url(#er-pg-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="738" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">+ Generate</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="170" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="102" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Company (KCO)…</text>
  <rect x="418" y="84" width="170" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="102" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Period (YYYY-MM)…</text>
  <rect x="596" y="84" width="140" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">All flux ▾</text>

  <rect x="240" y="124" width="540" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="145" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE · KCO · PERIOD · FLUX · TYPE · STATUS · SUBMITTED ID</text>

  <rect x="240" y="162" width="540" height="30" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-01 · 00070 · 2026-04 · 10.1 · IN</text>
  <rect x="556" y="170" width="100" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="606" y="181" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">9955 · Accepted</text>
  <text x="668" y="181" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">ERS-2026-0042</text>

  <rect x="240" y="196" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-01 · 00070 · 2026-04 · 10.3 · IN</text>
  <rect x="556" y="204" width="100" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="606" y="215" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">9955 · Accepted</text>
  <text x="668" y="215" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">ERS-2026-0043</text>

  <rect x="240" y="230" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="249" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-04-01 · 00070 · 2026-03 · 10.1 · IN</text>
  <rect x="556" y="238" width="100" height="16" rx="8" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="606" y="249" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">9957 · Rejected</text>
  <text x="668" y="249" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">ERS-2026-0021</text>

  <rect x="240" y="264" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-04-02 · 00070 · 2026-03 · 10.1 · RE</text>
  <rect x="556" y="272" width="100" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="606" y="283" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">9955 · Accepted</text>
  <text x="668" y="283" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">ERS-2026-0022</text>

  <rect x="240" y="298" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="317" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-01 · 00001 · 2026-04 · 10.3 · IN</text>
  <rect x="556" y="306" width="100" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="606" y="317" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">9952 · Sent</text>
  <text x="668" y="317" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">ERS-2026-0044</text>

  <rect x="240" y="332" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="351" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-01 · 00001 · 2026-04 · 10.1 · IN</text>
  <rect x="556" y="340" width="100" height="16" rx="8" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="606" y="351" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">9951 · Pending</text>
  <text x="668" y="351" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">ERS-2026-0045</text>

  <line x1="240" y1="378" x2="780" y2="378" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="398" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 of 386</text>
  <text x="780" y="398" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="end">Page 1 ▾ · 50 ▾  ‹  ›</text>

  <rect x="240" y="420" width="540" height="120" rx="10" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="252" y="442" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">GENERATE DIALOG</text>
  <text x="252" y="462" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">Company · Period · Type — pick a single row to submit a new report.</text>

  <rect x="252" y="476" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="493" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">00070 ▾</text>
  <rect x="380" y="476" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="493" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">2026-04</text>
  <rect x="508" y="476" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="518" y="493" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">IN — Initial ▾</text>
  <rect x="636" y="476" width="138" height="26" rx="5" fill="url(#er-pg-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="705" y="493" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Generate &amp; submit</text>

  <text x="252" y="520" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Produces Flux 10.1 (B2BINT detail) + Flux 10.3 (B2C / OUTOFSCOPE aggregated) in one call.</text>

  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">company · period · flux</text>
  <line x1="200" y1="100" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#er-pg-arrow)"/>

  <rect x="820" y="206" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Status badge</text>
  <text x="830" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">9951 / 9952 / 9955 / 9957</text>
  <line x1="820" y1="222" x2="660" y2="222" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#er-pg-arrow)"/>

  <rect x="20" y="266" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="281" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Replacement (RE)</text>
  <text x="30" y="294" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">overrides a 9957 rejection</text>
  <line x1="200" y1="282" x2="240" y2="282" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#er-pg-arrow)"/>

  <rect x="820" y="476" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="491" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Generate dialog</text>
  <text x="830" y="504" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one click → 10.1 + 10.3</text>
  <line x1="820" y1="492" x2="774" y2="492" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#er-pg-arrow)"/>
</svg>

---

## Toolbar

The toolbar above the table combines three free-text filters with two quick actions.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Company</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Flux</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Status</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>↻ Refresh</span>
    <span style={{flex: 1, minWidth: '8px'}} />
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600, border: '1px solid #4a9eff'}}>Generate report</span>
  </div>
</div>

| Field | What it matches |
|---|---|
| **Company** | The company code (`Kco`) the report is bound to (e.g. `00070`). |
| **Flux** | The flux code — `10.1` (B2BINT invoice detail) or `10.3` (B2C / OUTOFSCOPE aggregated). |
| **Status** | Free-text match on the lifecycle status code or label. |
| **Refresh** | Re-runs the current query without changing filters. |
| **Generate report** | Opens the *Generate dialog* — described below. Hidden on read-only sessions. |

---

## Reports list

The table shows one row per report. Default sort: most recent `RGDOC` first. Click any column header to sort by that column; click any row to open the **Detail modal**.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '60px 60px 80px 60px 1.4fr 70px 1.5fr 1.4fr 110px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '11px'}}>
    <div>ID</div><div>Flux</div><div>Company</div><div>Type</div><div>Period</div>
    <div style={{textAlign: 'right'}}>Invoices</div><div>Status</div><div>PA UUID</div><div>Created</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 60px 80px 60px 1.4fr 70px 1.5fr 1.4fr 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>1042</div><div>10.1</div><div>00070</div><div>IN</div><div>2026-04-01 → 2026-04-30</div>
    <div style={{textAlign: 'right'}}>142</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>9955 Deposited</span></div>
    <div style={{fontFamily: 'monospace', opacity: 0.6, fontSize: '11px'}}>a1b2c3d4…f9e8</div>
    <div style={{opacity: 0.65}}>2026-05-02 09:30</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 60px 80px 60px 1.4fr 70px 1.5fr 1.4fr 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>1041</div><div>10.3</div><div>00070</div><div>IN</div><div>2026-04-01 → 2026-04-30</div>
    <div style={{textAlign: 'right'}}>38</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>9955 Deposited</span></div>
    <div style={{fontFamily: 'monospace', opacity: 0.6, fontSize: '11px'}}>f6a7b8c9…d4e5</div>
    <div style={{opacity: 0.65}}>2026-05-02 09:31</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 60px 80px 60px 1.4fr 70px 1.5fr 1.4fr 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>1040</div><div>10.1</div><div>00070</div><div>RE</div><div>2026-03-01 → 2026-03-31</div>
    <div style={{textAlign: 'right'}}>12</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>9953 Pending</span></div>
    <div style={{opacity: 0.4}}>—</div>
    <div style={{opacity: 0.65}}>2026-04-15 14:22</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 60px 80px 60px 1.4fr 70px 1.5fr 1.4fr 110px', padding: '10px 14px', alignItems: 'center'}}>
    <div>1039</div><div>10.3</div><div>00080</div><div>IN</div><div>2026-03-01 → 2026-03-31</div>
    <div style={{textAlign: 'right'}}>27</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.1)', color: '#f87171'}}>9957 Rejected</span></div>
    <div style={{fontFamily: 'monospace', opacity: 0.6, fontSize: '11px'}}>9d8e7f6a…2b1c</div>
    <div style={{opacity: 0.65}}>2026-04-02 11:15</div>
  </div>
</div>

### Default columns

| Column | Description |
|---|---|
| **ID** | Internal report identifier (`RGDOC`). Auto-incremented. |
| **Flux** | `10.1` (B2C detail) or `10.3` (B2BINT aggregated). |
| **Company** | Company code (`Kco`) the report applies to. |
| **Type** | Document type — `IN` / `RE` / `CO` / `MO`. |
| **Period** | Declaration period — `start → end` (ISO 8601). |
| **Invoices** | Number of source invoices included in the report. |
| **Status** | Lifecycle status badge — code + label, coloured by family. |
| **PA UUID** | Universally-unique identifier returned by the PA after acceptance. Truncated to `8…8`; full value visible on hover. |
| **Created** | Generation timestamp. |

A page-size selector at the bottom defaults to 50 rows per page; values up to 500 are accepted. The total count of matching reports is shown next to the pagination controls.

### CSV export

The standard `Export` button in the toolbar exports the current view (filters applied) as a CSV file named `ereporting.csv`.

---

## Detail modal

Clicking a row opens a modal with three tabs along the top: **Header**, **Invoices**, **History**. The modal title shows the report's `Flux / Kco / Rgdoc` triplet.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0', margin: '20px 0', overflow: 'hidden'}}>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontWeight: 700, fontSize: '14px'}}>Report detail — 10.1 / 00070 / 1042</div>
    <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
      <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontWeight: 500}}>⬇ Download XML</span>
      <span style={{padding: '4px 10px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 600}}>Resend to PA</span>
      <span style={{opacity: 0.5, fontSize: '12px'}}>✕</span>
    </div>
  </div>
  <div style={{display: 'flex', gap: '0', padding: '0 18px', borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
    <div style={{padding: '10px 16px', fontWeight: 600, borderBottom: '2px solid #4a9eff', color: '#4a9eff'}}>Header</div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>Invoices <span style={{opacity: 0.5, fontSize: '11px'}}>(142)</span></div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>History <span style={{opacity: 0.5, fontSize: '11px'}}>(3)</span></div>
  </div>
  <div style={{padding: '14px 18px', fontSize: '12px', opacity: 0.6, fontStyle: 'italic'}}>Tab content — depends on the active tab</div>
</div>

### Header tab *(default)*

Field grid summarising the report identity and submission outcome.

| Field | Description |
|---|---|
| **RGDOC** | Internal report identifier. |
| **FLUX** | `10.1` or `10.3`. |
| **KCO** | Company code. |
| **Type** | `IN` / `RE` / `CO` / `MO`. |
| **Period start / Period end** | ISO 8601 dates of the declaration window. |
| **Sender** | Transmitter matricule, list ID `0238` — typically the entity registered with the PA. |
| **Issuer** | Legal issuer's identifier, list ID `0002` (SIREN). |
| **PA UUID** | Identifier returned by the PA on acceptance. Empty until the report has been accepted. |
| **Status** | Current lifecycle status — code + label. |
| **Status message** | Last message received from the PA — typically the rejection reason for failed submissions. |
| **Invoices** | Number of source invoices included in the report. |
| **Created** | Generation timestamp. |

### Invoices tab

Tabular view of every source invoice included in the report. The columns map directly to the underlying e-invoicing record so the report and its sources can be cross-referenced.

| Column | Description |
|---|---|
| **Number** | Invoice number — UBL `BT-1` when set, otherwise `DOC/DCT/KCO`. |
| **Date** | Issue date (`BT-2`). |
| **BAR** | BAR routing code carried by the invoice (`B2C`, `B2BINT`, `OUTOFSCOPE`, …). |
| **Customer** | Buyer party name. |
| **HT** | Total amount excluding VAT. |
| **VAT** | Total VAT amount. |
| **TTC** | Total amount including VAT. |
| **CCY** | ISO 4217 currency code. |

The list reflects the rows persisted at generation time — re-running a report (`RE`) does not retroactively reshape the prior `IN` view.

### History tab

The **lifecycle** of the report — every status it has been in, append-only, in submission order.

| Column | Description |
|---|---|
| **#** | Sequence number — `1` is the initial state at generation, subsequent rows are events from the PA. |
| **Status** | Status code + label drawn from the e-reporting catalogue (e.g. `9950 Created`, `9952 Sent to PA`, `9953 Pending`, `9955 Deposited`, `9957 Rejected`). See *Lifecycle statuses* above. |
| **Message** | Free-text message returned by the PA — typically the rejection reason or acceptance note. |
| **Date** | Event timestamp. |

The lifecycle is read-only here; the only action is **Resend to PA** at the modal header, which appends a new event after a successful resubmission.

### Header actions

| Button | Behaviour |
|---|---|
| **Download XML** | Downloads the formatted XML of the report (filename pattern `ereporting-<flux>-<kco>-<rgdoc>.xml`). The XML is pretty-printed when possible, with a fallback to the raw stored content. |
| **Resend to PA** | Re-submits the existing report XML to the Plateforme Agréée. Useful after a transient PA error. Hidden on read-only sessions. The lifecycle is updated with the new submission outcome. |
| **Close** *(✕)* | Closes the modal without modification. |

---

## Generate dialog

Opens from **Generate report** in the toolbar. Builds and submits one or several reports for a chosen company / flux / period combination.

<div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.025)', maxWidth: '520px', boxShadow: '0 8px 24px rgba(0,0,0,0.25)'}}>
  <div style={{padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <div style={{fontWeight: 700, fontSize: '14px'}}>Generate e-reporting</div>
    <span style={{opacity: 0.5, fontSize: '12px'}}>✕</span>
  </div>
  <div style={{padding: '18px'}}>
    <div style={{marginBottom: '14px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Company (kco)</div>
      <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', minHeight: '20px'}}>00070</div>
      <div style={{fontSize: '10px', opacity: 0.55, marginTop: '4px'}}>Leave blank to apply to all configured companies.</div>
    </div>
    <div style={{marginBottom: '14px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '6px'}}>Flux to generate</div>
      <div style={{display: 'flex', gap: '8px'}}>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1px solid rgba(74,158,255,0.5)', background: 'rgba(74,158,255,0.12)', color: '#4a9eff'}}>10.1</span>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1px solid rgba(74,158,255,0.5)', background: 'rgba(74,158,255,0.12)', color: '#4a9eff'}}>10.3</span>
      </div>
    </div>
    <div style={{marginBottom: '14px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '6px'}}>Document type</div>
      <div style={{display: 'flex', gap: '8px'}}>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1px solid rgba(74,158,255,0.5)', background: 'rgba(74,158,255,0.12)', color: '#4a9eff'}}>IN</span>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.15)', opacity: 0.7}}>RE</span>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.15)', opacity: 0.7}}>CO</span>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.15)', opacity: 0.7}}>MO</span>
      </div>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px'}}>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Period start</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>2026-04-01</div>
      </div>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Period end</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>2026-04-30</div>
      </div>
    </div>
    <div>
      <span style={{padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '12px', fontWeight: 500}}>📅 Compute period</span>
    </div>
  </div>
  <div style={{padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'flex-end', gap: '8px', background: 'rgba(255,255,255,0.02)'}}>
    <span style={{padding: '7px 16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', fontWeight: 500}}>Cancel</span>
    <span style={{padding: '7px 16px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>Generate</span>
  </div>
</div>

| Field | Description |
|---|---|
| **Company (kco)** | Restricts the generation to a single company. Leave blank to apply to **all** companies declared in the *e-reporting* template. |
| **Flux to generate** | Multi-select between `10.1` and `10.3`. Both are selected by default — the generator emits one report per active flux. |
| **Document type** | One of `IN` (initial), `RE` (replacement), `CO` (cancellation), `MO` (modification). The default is `IN`. |
| **Period start / end** | ISO 8601 dates that delimit the declaration window. |
| **Compute period** | Auto-fills *Period start* / *Period end* with the next due window using the configured frequency (`MONTHLY` / `DECADAL` / `WEEKLY`). |
| **Cancel** | Closes the dialog without generating. |
| **Generate** | Builds the XML for each selected flux, persists the report row, and submits to the PA. The list refreshes on success. |

When the generator builds a report, it derives the per-invoice **Sender**, **Issuer** and **Business Process** blocks (TT-7 / TT-12 / TT-28 / TT-29) from the *e-reporting* template — those defaults are configured once in *Settings → System → E-Reporting* (Sender / PA matricule + role `WK`, Issuer / SIREN scheme `0002` for French companies, Business Process emitted only on B2BINT invoices). When no transmission ID is provided manually, the report is identified as **`{siren}-{flux}-{start}-{end}`** so it stays stable across regenerations of the same period and lets the PA deduplicate identical retransmissions.

After a successful run, the new reports appear at the top of the list with a `9950` (Created) status that quickly progresses through `9952` (Sent to PA) and `9953` (Pending), then lands on `9955` (Deposited) once the PA acknowledges receipt. When the *Send to PA* flag is off (`sendToPA=N`), the report stays at `9951` (Submit skipped) and the XML can still be downloaded for offline review.

---

## Tips & best practices

- **Set the BAR routing first.** The list of invoices that ends up in flux 10.1 / 10.3 is driven by *UBL Defaults → Document Type / BAR Routing*. `B2BINT` feeds flux 10.1 (per-invoice detail); `B2C` and `OUTOFSCOPE` feed flux 10.3 (aggregated). A misclassified invoice will be missed by *both* tracks — ensure every document type maps to one of `B2B`, `B2G`, `B2C`, `B2BINT`, `OUTOFSCOPE` before the first run.
- **Use *Compute period* rather than manual dates.** It honours the frequency configured in the *e-reporting* template, so the suggested window matches the regulatory deadline (previous full month for `MONTHLY`, previous decade for `DECADAL`, previous ISO week for `WEEKLY`).
- **`IN` first, then `RE` for corrections.** A late-arriving invoice or a corrected amount calls for a `RE` report covering the same period — never re-issue an `IN` for a period that has already been declared.
- **Reserve `CO` for full cancellation.** Use it when an entire period has been declared in error; the `RE` track handles partial corrections.
- **The PA UUID is the receipt.** It is empty between submission and acceptance (statuses `9952` and `9953`), and final once the PA acknowledges with `9955` (Deposited). Use it as the legal proof of the declaration when responding to an audit.
- **Resend after a transient PA error, not after a Schematron rejection.** A `9954` (Error sent) is a network or HTTP failure — *Resend* recovers. A `9957` (Rejected) carries a Schematron or business-rule reason in the *Status message* — fix the upstream BAR or invoice data and generate a fresh `RE`, do not blindly resend. A `9956` (Failed import) sits between the two: read the message before deciding to resend or rebuild.
- **The Invoices tab is a snapshot.** It records the source invoices as they were at generation time. Edits to those invoices afterwards do not retroactively alter the submitted report — they appear in the next `RE` if material.
- **VAT data is read from the UBL document first.** When generating a report, NomaUBL parses the document-level `cac:TaxTotal/cac:TaxSubtotal` of each invoice's stored UBL XML — line-level subtotals are skipped to avoid double-counting. The VAT-summary table is consulted only as a fallback. If a B2C report ships with empty `<Transactions>` blocks even though the invoices and their UBL documents are present, the VAT summary is most likely stale relative to the UBL — regenerating from the UBL closes the gap.
- **Configure the Sender / Issuer / Business Process defaults once.** Settings → System → E-Reporting groups the PA matricule (Sender, default role `WK`), the issuer SIREN (Issuer, default scheme `0002` for French companies; `0223` / `0227` / `0228` / `0229` for international cases) and the per-invoice business process (emitted only in B2BINT). Maintaining them at the template level keeps every generated report consistent and avoids per-report overrides.
- **Out-of-list category codes are auto-mapped.** A source line carrying a tax category outside `TLB1` / `TPS1` / `TNT1` / `TMA1` is silently coerced to `TLB1` (positive rate) or `TNT1` (zero rate) at generation time. Set the category explicitly on the source line whenever the default is wrong (e.g. a service that should land on `TPS1` rather than `TLB1`).
