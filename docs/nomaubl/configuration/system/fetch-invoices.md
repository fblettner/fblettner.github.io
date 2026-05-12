---
title: Fetch Invoices
description: "Configure which JD Edwards BI Publisher (BIP) jobs NomaUBL retrieves for batch processing, and which document template to use for each."
keywords: [NomaUBL, fetch invoices, BIP, BI Publisher, JD Edwards, JDE, batch processing, scheduler, document template, report filter]
---

# Fetch Invoices

The **Fetch Invoices** editor controls which **JD Edwards BI Publisher (BIP)** jobs NomaUBL pulls in for processing. It is used by the batch import and the background scheduler to decide *which BIP outputs are eligible* and *how each one should be parsed*.

:::info[JD Edwards–specific page]
This page is one of the **JDE-specific** parts of NomaUBL — it talks to a JD Edwards BIP server. The other configuration pages are source-agnostic.
:::

---

## At a glance

<svg viewBox="0 0 1000 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="380" rx="14" fill="url(#fi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Fetch Invoices — BIP filters</text>
  <rect x="704" y="30" width="76" height="22" rx="5" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="742" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Save</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">BIP Report Filters</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Only jobs whose Report (and Version, unless All Versions is set) match a row are queued.</text>

  <rect x="240" y="124" width="540" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="145" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPORT · VERSION · ALL VERSIONS · TEMPLATE</text>

  <rect x="240" y="162" width="540" height="30" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="181" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="356" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FBL00001</text>
  <rect x="476" y="170" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="181" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">off</text>
  <rect x="556" y="170" width="160" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="636" y="181" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">invoices</text>
  <text x="752" y="181" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="196" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="215" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="356" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FBL00002</text>
  <rect x="476" y="204" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="215" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">off</text>
  <rect x="556" y="204" width="160" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="636" y="215" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">credit_notes</text>
  <text x="752" y="215" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="230" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="249" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">R42UI19</text>
  <text x="356" y="249" fill="#475569" fontSize="10" fontFamily="ui-monospace, monospace">— disabled —</text>
  <rect x="476" y="238" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="483" y="249" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="506" y="249" fill="#4ade80" fontSize="10" fontFamily="system-ui, sans-serif">All versions</text>
  <rect x="600" y="238" width="120" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="660" y="249" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">debit_notes</text>
  <text x="752" y="249" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="280" width="140" height="26" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="310" y="297" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Add Report</text>

  <rect x="240" y="320" width="540" height="64" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="252" y="340" fill="#fb923c" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">⚠ JD EDWARDS-SPECIFIC PAGE</text>
  <text x="252" y="358" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Empty filter list = all BIP jobs are picked up.</text>
  <text x="252" y="374" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Used by the batch importer and by the background scheduler in serve mode.</text>

  <rect x="20" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Report name + version</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">e.g. R42565 · FBL00001</text>
  <line x1="220" y1="186" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fi-arrow)"/>

  <rect x="20" y="232" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">All Versions checkbox</text>
  <text x="30" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">disables the Version column</text>
  <line x1="220" y1="248" x2="476" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fi-arrow)"/>

  <rect x="820" y="200" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Document template</text>
  <text x="830" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">required to render the PDF</text>
  <line x1="820" y1="216" x2="720" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fi-arrow)"/>
</svg>

---

## BIP Report Filters

A list of the BIP reports NomaUBL is allowed to pick up. Each row is a filter: NomaUBL only enqueues BIP jobs whose **Report** name (and optionally **Version**) matches one of the rows. If the table is **empty**, NomaUBL fetches **all jobs** — handy for testing, almost never what you want in production.

### Per-row fields

| Column | Description |
|---|---|
| **Report** | Name of the BIP report (e.g. `R42565`). |
| **Version** | Specific report version to allow (e.g. `FBL00001`). Disabled when **All Versions** is checked. |
| **All Versions** | When ticked, every version of the report is accepted and the **Version** field is cleared / disabled. |
| **Template** | The NomaUBL **document template** used to **produce the PDF attachment** when generating the UBL from this BIP output. **Required** when the document type produces a UBL with a PDF attachment (the dropdown lists templates of type `document` defined in your environment — see *Configuration → Documents*). |

Use the **+ Add Report** button to append a row, and the **×** button on a row to remove it.

### How it's used

- **Batch processing** — when you run the import manually, only jobs whose Report (and Version, unless All Versions is set) match a row are queued.
- **Scheduler** — when serve mode is enabled, the same filter applies on each polling tick.
- **Template** — once a job matches, NomaUBL uses the configured **document template** to produce the PDF that gets attached to the UBL during generation. The template provides the RTF / XSL chain defined in *Configuration → Documents*. It is **required** whenever the document type produces a UBL with a PDF attachment.

---

## Tips & best practices

- **Always configure at least one filter in production.** Leaving the list empty pulls in every BIP job from the connected JDE environment, which is usually too broad.
- **Use All Versions sparingly.** It's useful when you have many ad-hoc versions of the same report; otherwise, prefer pinning a specific Version per row so you know exactly what's being processed.
- **One row per (Report, Version, Template) tuple.** If the same report needs different templates for different versions, add multiple rows.
- **Don't forget to assign a Template.** A row without a template can still match jobs, but the UBL generation will fail to produce a PDF attachment when one is expected.
