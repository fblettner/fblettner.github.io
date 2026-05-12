---
title: Document Types
description: "Configure the seven NomaUBL document type codes that anchor the French e-invoicing / e-reporting reform: per-type description, default selection, send-to-PA policy, output mode and file-retention flags."
keywords: [NomaUBL, document types, B2B, B2G, B2C, B2BINT, OUTOFSCOPE, ARCHIVEONLY, e-invoicing, e-reporting, Chorus Pro, réforme facture électronique, JD Edwards, SAP, NetSuite]
---

# Document Types

The **Document Types** editor pins down the seven document-type codes used throughout NomaUBL to drive the **French e-invoicing / e-reporting reform**.

## How the page is used

When NomaUBL processes an input spool, it normally applies the **runtime arguments** passed to the job (`Send to PA`, `Mode`, `Keep UBL`, etc.). This page lets you **override those runtime defaults per document type code** that NomaUBL detects inside the spool.

This matters because **a single spool can mix several document types**. A typical example: a spool contains one **B2B** invoice and one **B2C** invoice. Without per-type overrides, both would inherit the same runtime args; with this page you can — for example — force the B2B invoice to be sent to the PA while keeping the B2C invoice local for e-reporting only.

The seven codes themselves are fixed by the regulation; you cannot add or rename them. What you can configure here is the **policy applied to each code** when it appears in a spool.

This page applies to documents from any source system — JD Edwards, SAP, NetSuite, custom ERP — once the source is mapped to UBL.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#dt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Document Types</text>
  <rect x="704" y="30" width="76" height="22" rx="5" fill="url(#dt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="742" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Save</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Per-type runtime overrides</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">When the spool mixes codes, each row overrides the runtime args for that specific code.</text>

  <rect x="240" y="124" width="540" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="145" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE · SEND TO PA · MODE · KEEP UBL · KEEP PDF · DESCRIPTION</text>

  <rect x="240" y="162" width="540" height="30" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="170" width="48" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="276" y="181" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">B2B</text>
  <text x="312" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Yes</text>
  <text x="370" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="446" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="514" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="568" y="181" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">e-invoicing standard</text>

  <rect x="240" y="196" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="204" width="48" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="276" y="215" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">B2G</text>
  <text x="312" y="215" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Yes</text>
  <text x="370" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="446" y="215" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="514" y="215" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="568" y="215" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">public sector · Chorus Pro</text>

  <rect x="240" y="230" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="238" width="60" height="16" rx="8" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="282" y="249" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">B2BINT</text>
  <text x="324" y="249" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">No</text>
  <text x="370" y="249" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="446" y="249" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="514" y="249" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="568" y="249" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">e-reporting · intra-EU B2B</text>

  <rect x="240" y="264" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="272" width="48" height="16" rx="8" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="276" y="283" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">B2C</text>
  <text x="312" y="283" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">No</text>
  <text x="370" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="446" y="283" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="514" y="283" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="568" y="283" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">e-reporting · B2C aggregated</text>

  <rect x="240" y="298" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="306" width="92" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="317" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">OUTOFSCOPE</text>
  <text x="356" y="317" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">No</text>
  <text x="402" y="317" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="478" y="317" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="546" y="317" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="600" y="317" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">non-EU export / internal flows</text>

  <rect x="240" y="332" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="340" width="100" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="302" y="351" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">ARCHIVEONLY</text>
  <text x="362" y="351" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">— skip</text>
  <text x="424" y="351" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="500" y="351" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="568" y="351" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="600" y="351" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">internal credit · BR-FR-20</text>

  <rect x="240" y="366" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="374" width="84" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="294" y="385" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">DOCUMENT</text>
  <text x="350" y="385" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">— skip</text>
  <text x="412" y="385" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="488" y="385" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="556" y="385" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="600" y="385" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">non-invoicing document</text>

  <text x="240" y="416" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Codes are fixed by regulation; the policy applied to each one is what this page configures.</text>

  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">e-invoicing</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">B2B / B2G → sent to PA</text>
  <line x1="200" y1="186" x2="252" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dt-arrow)"/>

  <rect x="20" y="248" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="263" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">e-reporting</text>
  <text x="30" y="276" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">B2BINT / B2C → declaration only</text>
  <line x1="200" y1="264" x2="252" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dt-arrow)"/>

  <rect x="820" y="332" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="347" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">ARCHIVEONLY · BR-FR-20</text>
  <text x="830" y="360" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">internal credit · no transmission</text>
  <line x1="820" y1="348" x2="780" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dt-arrow)"/>
</svg>

---

## The seven document type codes

| Code | Regulatory meaning |
|---|---|
| **B2B** | Subject to **e-invoicing**. |
| **B2G** | Subject to **e-invoicing — public sector** (Chorus Pro). |
| **B2BINT** | Subject to **e-reporting** of international B2B sales. |
| **B2C** | Subject to **e-reporting — B2C sales**. |
| **OUTOFSCOPE** | Out of scope of the French e-invoicing reform. |
| **ARCHIVEONLY** | Internal credit note (cancellation REJECTED/REFUSED) — no flux 1, no transmission (regulatory rule **BR-FR-20**). |
| **DOCUMENT** | Non-invoicing document. |

---

## Per-row settings

Each of the seven codes is one row in the editor. The **Code** column is read-only (the codes are fixed by the regulation); every other column is editable and acts as an **override of the corresponding runtime argument** for documents carrying this code.

| Column | Values | Description |
|---|---|---|
| **Code** | fixed | One of the seven regulatory codes above. Read-only. Hover the code to see the regulatory hint. |
| **Description** | text | Free-text label shown in document templates and UI. Defaults to the regulatory description above. |
| **Default** | checkbox | When ticked, this code is **pre-selected** in newly created document templates. **Only one row can be the default at a time** — ticking another row automatically un-ticks the previous one. |
| **Send to PA** | `Y` / `N` / `F` | Per-type override of the runtime *send to Plateforme Agréée* argument: `Y` = send; `N` = do not send; `F` = **force send** even when the runtime argument says skip. Default: `Y` for B2B, `N` for every other code. |
| **GS** | checkbox | When ticked, runs **Ghostscript** post-processing on the produced PDF for this type (e.g. compression / linearisation), regardless of the runtime argument. Off by default. |
| **Mode** | *(default)* / `UBL` / `BURST` | Per-type override of the runtime *Mode* argument: empty = **no override** (the runtime mode is kept); `UBL` = force UBL-only output for this type; `BURST` = force bursted output for this type. |
| **UBL** | checkbox | When ticked, keeps the generated **UBL file** in the bursting output directory after processing for this type. Default: `Y` (kept). |
| **PDF** | checkbox | When ticked, keeps the generated **PDF file** in the bursting output directory after processing for this type. Default: `N` (not kept). |

---

## Tips & best practices

- **Think of every column except Code/Description/Default as an override of a runtime argument.** Leave a value empty / unchecked when no override is needed and let the runtime argument win.
- **Set one Default code that matches your dominant flow.** Most setups make `B2B` the default — ticking it pre-selects B2B in every new document template, saving repeated clicks.
- **Use `F` (Force send) sparingly.** It overrides the runtime *Send to PA* argument and can cause invoices to be transmitted in environments where you intended to stay offline.
- **`ARCHIVEONLY` must never reach the PA.** It exists for internally-cancelled credit notes (rule BR-FR-20); leave Send to PA at `N`.
- **`OUTOFSCOPE` is for documents the reform does not apply to.** Keep them in NomaUBL for traceability but do not send them to a PA.
- **Keep PDF off by default** unless downstream tooling consumes the bursted PDF — keeping it inflates the bursting directory and slows down housekeeping.
- **Run Ghostscript only when needed.** Enabling GS adds a post-processing step on every document of the type and can be a significant overhead on large spools.
