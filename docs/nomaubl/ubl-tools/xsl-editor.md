---
title: XSL Editor
description: "Map source XML spool fields to UBL 2.1 business terms (BT codes) through a visual form — no hand-written XSLT required. AI-assisted auto-mapping included."
keywords: [NomaUBL, XSL, XSLT, editor, UBL, mapping, BT, BG, EN 16931, AI, auto-map, JD Edwards, SAP, NetSuite, custom ERP, ubl-template, TAG_ROOT, TAG_VAT_LINE, TAG_LINE_ITEM]
---

# XSL Editor

The **XSL Editor** is the cornerstone of NomaUBL's source-to-UBL mapping. It turns the daunting task of writing a UBL transformation by hand into a guided, **form-based mapping** between the fields of a source XML spool and the business terms (BT codes) of a UBL 2.1 invoice.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The same editor works against any well-formed XML spool that carries invoice data.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xeui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="xeui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="xeui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <linearGradient id="xeui-g-purple" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" stopOpacity="0.28"/><stop offset="100%" stopColor="#a855f7" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#xeui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">XSL Editor</text>
  <rect x="690" y="30" width="90" height="22" rx="5" fill="url(#xeui-g-purple)" stroke="#c084fc" strokeWidth="1"/>
  <text x="735" y="45" fill="#e9d5ff" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">✦ AI Auto-Map</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">XSL FILE</text>
  <rect x="320" y="82" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices.xsl ▾</text>
  <rect x="540" y="82" width="60" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="570" y="98" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Load</text>
  <rect x="606" y="82" width="120" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="666" y="98" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ New transform</text>

  <text x="240" y="124" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">/app/xsl/invoices/</text>

  <rect x="240" y="138" width="170" height="26" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="325" y="155" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Variable Mapping</text>
  <rect x="414" y="138" width="120" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">XSL Editor</text>

  <rect x="240" y="172" width="540" height="28" rx="5" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <rect x="252" y="178" width="60" height="16" rx="3" fill="rgba(74,158,255,0.20)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="282" y="189" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">TAG_ROOT</text>
  <text x="324" y="189" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">scope: //Invoices/Invoice</text>
  <text x="752" y="189" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">context</text>

  <rect x="240" y="206" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="221" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BT · DESCRIPTION · MAPPING</text>

  <rect x="240" y="230" width="540" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="236" width="40" height="14" rx="3" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268" y="246" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BT-1</text>
  <text x="294" y="246" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Invoice number</text>
  <rect x="430" y="234" width="320" height="18" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="246" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">Header/DocNumber</text>
  <text x="760" y="246" fill="#94a3b8" fontSize="11" textAnchor="middle">↓</text>

  <rect x="240" y="260" width="540" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="266" width="40" height="14" rx="3" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268" y="276" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BT-2</text>
  <text x="294" y="276" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Issue date</text>
  <rect x="430" y="264" width="320" height="18" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="276" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">Header/IssueDate</text>
  <text x="760" y="276" fill="#94a3b8" fontSize="11" textAnchor="middle">↓</text>

  <rect x="240" y="290" width="540" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="296" width="40" height="14" rx="3" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268" y="306" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BT-13</text>
  <text x="294" y="306" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Purchase order</text>
  <rect x="430" y="294" width="320" height="18" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="306" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">Header/PoNumber</text>
  <text x="760" y="306" fill="#94a3b8" fontSize="11" textAnchor="middle">↓</text>

  <rect x="240" y="324" width="540" height="28" rx="5" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <rect x="252" y="330" width="92" height="16" rx="3" fill="rgba(74,158,255,0.20)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="298" y="341" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">TAG_LINE_ITEM</text>
  <text x="356" y="341" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">scope: Lines/Line</text>
  <text x="752" y="341" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">context</text>

  <rect x="240" y="358" width="540" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="364" width="48" height="14" rx="3" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="272" y="374" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BT-129</text>
  <text x="302" y="374" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Quantity</text>
  <rect x="430" y="362" width="320" height="18" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="374" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">Quantity</text>
  <text x="760" y="374" fill="#94a3b8" fontSize="11" textAnchor="middle">↓</text>

  <rect x="240" y="402" width="160" height="28" rx="6" fill="url(#xeui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="320" y="420" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">💾 Save mappings ●</text>
  <rect x="416" y="402" width="160" height="28" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="496" y="420" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬆ Load XML source</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">File selector</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">core files hidden</text>
  <line x1="220" y1="98" x2="320" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xeui-arrow)"/>

  <rect x="820" y="30" width="160" height="34" rx="8" fill="rgba(192,132,252,0.06)" stroke="rgba(192,132,252,0.40)" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="45" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">AI assistance</text>
  <text x="830" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">XML + PDF → JSON map</text>
  <line x1="820" y1="46" x2="780" y2="42" stroke="#c084fc" strokeWidth="1.2" markerEnd="url(#xeui-arrow)"/>

  <rect x="20" y="172" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Scope contexts</text>
  <text x="30" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">paths resolve relative</text>
  <line x1="220" y1="188" x2="240" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xeui-arrow)"/>

  <rect x="820" y="262" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">BT-coded rows</text>
  <text x="830" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">↓ opens XML browser</text>
  <line x1="820" y1="278" x2="780" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xeui-arrow)"/>
</svg>

---

## What the editor does

A NomaUBL transform is just an XSLT file that derives `TAG_*` variables from the source XML; the rest of the work — namespaces, element ordering, EN 16931 conformance, French extensions — is delegated to a shared `ubl-template.xsl` provided by NomaUBL. Customising a transform therefore boils down to **mapping XML paths to TAG_ variables**, which the editor surfaces as a form.

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xsl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="xsl-arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#c084fc"/></marker>
    <linearGradient id="xsl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="xsl-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="xsl-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="xsl-g-purple" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" stopOpacity="0.16"/><stop offset="100%" stopColor="#c084fc" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="20" y="100" width="170" height="80" rx="12" fill="url(#xsl-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="105" y="130" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Source XML</text>
  <text x="105" y="150" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">JDE / SAP / NS</text>
  <text x="105" y="166" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">custom ERP output</text>
  <rect x="220" y="20" width="170" height="60" rx="10" fill="url(#xsl-g-purple)" stroke="#c084fc" strokeWidth="1.3" strokeDasharray="4 3"/>
  <text x="305" y="44" fill="#c084fc" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📑 Sample PDF</text>
  <text x="305" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">(optional)</text>
  <rect x="220" y="100" width="200" height="80" rx="12" fill="url(#xsl-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="320" y="130" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">✏️ XSL Editor</text>
  <text x="320" y="152" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Variable Mapping form</text>
  <rect x="450" y="100" width="200" height="80" rx="12" fill="url(#xsl-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="550" y="130" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">📜 Custom XSLT</text>
  <text x="550" y="150" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">TAG_* variables</text>
  <text x="550" y="166" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">+ ubl-template.xsl</text>
  <rect x="680" y="100" width="200" height="80" rx="12" fill="url(#xsl-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="780" y="124" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 UBL 2.1</text>
  <text x="780" y="143" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">EN 16931 / Factur-X</text>
  <text x="780" y="159" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">extended-ctc-fr</text>
  <rect x="910" y="100" width="80" height="80" rx="12" fill="url(#xsl-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="950" y="134" fill="currentColor" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 PA</text>
  <text x="950" y="152" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Plateforme</text>
  <text x="950" y="166" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Agréée</text>
  <line x1="190" y1="140" x2="220" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xsl-arrow)"/>
  <text x="205" y="133" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Load</text>
  <path d="M 305 80 L 305 100" stroke="#c084fc" strokeWidth="1.3" strokeDasharray="3 3" markerEnd="url(#xsl-arrow-purple)"/>
  <text x="365" y="92" fontSize="9" fill="#c084fc" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">AI Auto-Map</text>
  <line x1="420" y1="140" x2="450" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xsl-arrow)"/>
  <text x="435" y="133" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Save</text>
  <line x1="650" y1="140" x2="680" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xsl-arrow)"/>
  <text x="665" y="133" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Run</text>
  <line x1="880" y1="140" x2="910" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xsl-arrow)"/>
  <text x="895" y="133" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Submit</text>
</svg>

The editor never edits the UBL output directly — that would mean re-implementing EN 16931 every time. Instead, it edits the **mapping** that the UBL template will read; the template stays untouched.

---

## Toolbar

The page header carries a fixed toolbar:

| Element | Description |
|---|---|
| **File selector** | Drop-down listing every `.xsl` file found in the configured XSL directory (`e-invoicing.ublXslt`). Three shared NomaUBL files (`ubl-common.xsl`, `ubl-template.xsl`, `ubl-defaults.xsl`) are filtered out — they hold the core UBL plumbing and are not meant to be edited per template. |
| **Directory badge** | Displays the resolved XSL directory. Configured in *Configuration → System → e-invoicing → ublXslt*. |
| **Load** | Reads the selected file from disk into the editor (both tabs share the same buffer). |
| **New Transform** | Opens the *New Transform* modal — copies `ubl-template.xsl` to a new file name and selects it. Use this to bootstrap a per-customer or per-document-type transform. |

---

## Tabs

The editor exposes two tabs that operate on the same XSLT file. The left tab is the visual mapping form; the right tab is the raw XSLT source.

### Variable Mapping (default)

This is the form-based mapping editor — the visual replacement for hand-written XSLT.

#### Action bar

| Button | Behaviour |
|---|---|
| **Load XML Source** | Loads a sample XML file (browser-side) and extracts every element path. Paths populate the picker dropdowns next to each variable field, so values can be filled by clicking rather than typing. |
| **Load connector sample** *(2026.05.16)* | When the active document template has `source = Connector`, this button calls the configured SQL query or REST endpoint once and feeds the response into the same path picker. The XPath dropdowns then autocomplete against actual data — same UX as a real XML spool, no file needed. The button is hidden for `XML` and `UBL` templates. |
| **AI Auto-Map** ✦ | Opens the *AI Auto-Map* modal. Provide a sample XML (and optionally a rendered PDF) — the AI returns a JSON mapping of `TAG_*` variables to XML paths, scoped correctly. See [AI Auto-Map](#ai-auto-map) below. |
| **Save Mappings** | Writes the current values of all `TAG_*` variables back into the XSLT file. The dot indicator (`●`) appears when mappings have changed but are not saved. |

#### Sections

The form is organised by UBL document area. Each section appears only when at least one of its `TAG_*` variables is present in the loaded XSLT — sections are not shown if the underlying template has no slot for them.

| Section | UBL area | Notable variables |
|---|---|---|
| **Document Root** | Invoice group element name | `TAG_ROOT` — the XML element wrapping a single invoice. |
| **Invoice Header** | BT-1, BT-2, BT-3, BT-9, BT-10, BT-12, BT-13, BT-19 | Document number, dates, references. |
| **Billing References** | BT-11, BT-14 to BT-18, BT-122 to BT-124 | Project, contract, dispatch, supporting documents. |
| **Seller / Supplier** | BT-27 to BT-43 | Seller party identification, address, contact. |
| **Buyer / Customer** | BT-44 to BT-58, BT-163 | Buyer party identification, address, contact. |
| **Agent Party** | extended-ctc-fr | Optional intermediate agent party. |
| **Delivery** | BT-70 to BT-80 | Delivery date and address. |
| **Payment** | BT-20, BT-81 to BT-91 | Means, IBAN, BIC, mandate, terms. |
| **VAT** | BT-110, BT-116 to BT-121 | VAT breakdown rows — see [scoping](#scoping) below. |
| **Invoice Lines** | BT-126 to BT-161 | Line item details — see [scoping](#scoping) below. |
| **Item Properties** *(BG-32)* | BG-32 | Repeating product attributes attached to a line. |
| **Line Allowances/Charges** *(BG-27 / BG-28)* | BG-27 / BG-28 | Per-line discount or charge. |
| **Line Document References** *(BT-128, BT-132)* | BT-128, BT-132 | Per-line document references — supporting documents (BT-128, UNTDID 1153 scheme) and the referenced purchase-order line via `TAG_LINE_ORDER_LINE_REF` → `cac:OrderLineReference/cbc:LineID` (BT-132, group EXT-FR-FE-BG-09, placed between InvoicePeriod and DocumentReference per the UBL 2.1 sequence). |
| **Line Delivery** *(EXT-FR-FE-BG-10)* | French extension | Per-line delivery group. |
| **Line Notes** *(BT-127)* | BT-127 | Free-text notes attached to a line. |
| **Invoice Notes** *(BT-22)* | BT-22 | Document-level free-text notes. |
| **Loop Notes** | BT-22 | Repeating note groups at document level. |

Each variable field shows the human-readable description of the BT, the BT code as a coloured badge, the current value (an XML path or expression), and a `↓` picker that opens the [XML Browser drawer](#xml-browser-drawer) on the right.

:::info[Full field coverage *(2026.06.15)*]
The field reference now lists every Business Group and Business Term that the extended Schematron (BR-FR / CTC-FR 1.3.1) checks and the editor can map — BG-3 through BG-32 and the Business Terms they wrap (preceding invoice BT-25/26, VAT accounting currency BT-6 / BT-111, tax point date BT-7, seller tax registration BT-32, buyer / deliver-to country subdivisions BT-54 / BT-79, buyer contact BT-56, deliver-to location BT-71, card PAN BT-87, invoiced-quantity unit BT-130, line charge base + reason BT-142/145, deliver-to address line 3 BT-165, and more). What you can map here now matches exactly what the [validator](./validate.md) checks.
:::

#### Combining and matching source values

A `TAG_*` select isn't limited to a single XML path:

- **Concatenation (`+`).** Glue several source tags into one UBL value with a ` + ` operator — `'FirstName + LastName'` joins them with a single space, `'First + ", " + Last'` sets a custom joiner, and quoted literals are emitted verbatim. No more XSL preprocessing step when a UBL field combines several source columns.
- **Conditional value list.** The `cond_value` argument of the `ubl:emit-item-prop` / `ubl:emit-note` helpers accepts a single value (as before) or a comma-separated whitelist — `'KWH,M3,LTR'` matches when the source value is any of the three. Whitespace around each item is trimmed.
- **Parent axis (`..`).** *(2026.06.14)* A path may step up to the parent element: `../FIELD` reaches a sibling of the current line element, `../../FIELD/Sub` two levels up. It unblocks source XML that nests line items under a parent element which also carries the line-level references (for example the referenced customer order, BT-132); paths without `..` resolve exactly as before.

#### Scoping

`TAG_ROOT`, `TAG_VAT_LINE` and `TAG_LINE_ITEM` are **scope contexts**: every other variable below them resolves *relative* to the path they define.

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xsl-sc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
    <marker id="xsl-sc-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="xsl-sc-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="xsl-sc-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
  </defs>
  <rect x="400" y="20" width="200" height="50" rx="10" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="50" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Document</text>
  <rect x="400" y="100" width="200" height="60" rx="10" fill="url(#xsl-sc-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">TAG_ROOT</text>
  <text x="500" y="143" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">e.g. Invoices</text>
  <line x1="500" y1="70" x2="500" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xsl-sc-arrow-blue)"/>
  <rect x="40" y="200" width="240" height="80" rx="10" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="160" y="226" fill="currentColor" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Header / Seller / Buyer</text>
  <text x="160" y="244" fill="currentColor" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Delivery / Payment / Notes</text>
  <text x="160" y="266" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.75">relative to TAG_ROOT</text>
  <rect x="320" y="200" width="240" height="80" rx="10" fill="url(#xsl-sc-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="440" y="228" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">TAG_VAT_LINE</text>
  <text x="440" y="252" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">e.g. Tax_Summary/Tax_Line</text>
  <rect x="600" y="200" width="240" height="80" rx="10" fill="url(#xsl-sc-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="720" y="228" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">TAG_LINE_ITEM</text>
  <text x="720" y="252" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">e.g. Lines_Group/Line_Item</text>
  <path d="M 500 160 L 500 180 L 160 180 L 160 200" stroke="#64748b" strokeWidth="1.4" fill="none" markerEnd="url(#xsl-sc-arrow)"/>
  <path d="M 500 160 L 500 180 L 440 180 L 440 200" stroke="#64748b" strokeWidth="1.4" fill="none" markerEnd="url(#xsl-sc-arrow)"/>
  <path d="M 500 160 L 500 180 L 720 180 L 720 200" stroke="#64748b" strokeWidth="1.4" fill="none" markerEnd="url(#xsl-sc-arrow)"/>
  <rect x="320" y="320" width="240" height="50" rx="9" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="440" y="340" fill="currentColor" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">TAG_VAT_*</text>
  <text x="440" y="358" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">relative to VAT line</text>
  <line x1="440" y1="280" x2="440" y2="320" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#xsl-sc-arrow)"/>
  <rect x="600" y="320" width="170" height="36" rx="8" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="615" y="335" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">TAG_LINE_*</text>
  <text x="755" y="335" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.7">line scope</text>
  <text x="615" y="350" fill="currentColor" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif" opacity="0.7">core line fields</text>
  <rect x="600" y="362" width="170" height="22" rx="6" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1"/>
  <text x="685" y="377" fill="currentColor" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Item Properties (BG-32)</text>
  <rect x="600" y="388" width="170" height="22" rx="6" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1"/>
  <text x="685" y="403" fill="currentColor" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Allow. / Charges (BG-27/28)</text>
  <rect x="780" y="362" width="170" height="22" rx="6" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1"/>
  <text x="865" y="377" fill="currentColor" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Line Notes (BT-127)</text>
  <rect x="780" y="388" width="170" height="22" rx="6" fill="url(#xsl-sc-g-slate)" stroke="#94a3b8" strokeWidth="1"/>
  <text x="865" y="403" fill="currentColor" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Doc References (BT-128)</text>
  <line x1="720" y1="280" x2="720" y2="320" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#xsl-sc-arrow)"/>
  <line x1="685" y1="356" x2="685" y2="362" stroke="#94a3b8" strokeWidth="1"/>
  <line x1="685" y1="384" x2="685" y2="388" stroke="#94a3b8" strokeWidth="1"/>
  <path d="M 720 280 L 865 280 L 865 362" stroke="#64748b" strokeOpacity="0.55" strokeWidth="1.2" fill="none"/>
  <line x1="865" y1="384" x2="865" y2="388" stroke="#94a3b8" strokeWidth="1"/>
</svg>

A blue scope hint banner appears below each context variable to remind which prefix is currently active. The XML Browser drawer also filters its entries to that scope so the path picker only shows what is actually addressable from the current context.

#### XML Browser drawer

When **Load XML Source** has been used, clicking the `↓` button next to any field opens an **XML Browser drawer** along the right edge of the page. The drawer lists every element path inside the current scope along with its sample value, so the right path can be picked by inspection rather than by typing. Closing the drawer leaves the editor in its previous state.

### XSL Editor

The right-hand tab opens the same file in a full **Monaco editor** (the engine VS Code uses) with XML syntax highlighting, line numbers, and a minimap. Use this tab when the form does not cover what is needed:

- Custom XPath expressions outside of TAG_ variables.
- Conditional logic via `<xsl:if>` / `<xsl:choose>`.
- Calling templates defined in `ubl-common.xsl`.
- Inspecting how the form's mappings end up serialised.

The save button shows a `●` dot when the buffer differs from the on-disk file.

---

## AI Auto-Map

The AI Auto-Map modal is a shortcut for building a fresh mapping from scratch.

| Field | Description |
|---|---|
| **Upload XML from computer** | Loads the source XML spool sample. |
| **Upload PDF** *(optional)* | Loads a rendered PDF of the same invoice. The AI uses it as a visual reference to disambiguate fields. |
| **Invoice root element** | The XML element wrapping a single invoice (e.g. `Invoices`). Pre-filled from the loaded XML's root, editable. |
| **XML content** | The XML spool body. Auto-populated by the upload, editable manually. |

Click **Auto-Map** to send the XML (and PDF if any) to the AI, along with the list of `TAG_*` variables and their BT/BG context. The AI returns a JSON mapping that respects the scoping rules (paths relative to `TAG_ROOT`, line-relative paths inside `TAG_LINE_ITEM`, etc.). The mapping is merged into the form; review and click **Save Mappings** to commit.

The AI is conservative — it omits any variable it is not confident about rather than guessing. Manual review remains necessary; the editor speeds up the work, it does not replace expertise.

---

## New Transform

The *New Transform* modal copies `ubl-template.xsl` to a new file name in the same XSL directory.

| Field | Description |
|---|---|
| **File name (without .xsl)** | The new transform's basename. The `.xsl` extension is added automatically. |

After creation, the new file becomes the selected file and is loaded into the editor — ready for mapping.

---

## Tips & best practices

- **Start with AI Auto-Map on a representative sample.** It usually covers 70–90% of the mapping in one pass; the remaining work is review and edge cases.
- **Always provide a sample XML before mapping.** With **Load XML Source** active, the picker dropdowns shrink the manual typing dramatically and prevent typos.
- **Set TAG_ROOT, TAG_VAT_LINE and TAG_LINE_ITEM first.** All other fields resolve relative to those scopes; setting them first makes every subsequent picker correctly scoped.
- **One transform per source layout.** Different source systems — or different document types from the same system — usually warrant their own `.xsl`. Use *New Transform* to bootstrap rather than copy-paste in the file system.
- **Do not edit the shared files.** `ubl-common.xsl`, `ubl-template.xsl` and `ubl-defaults.xsl` are filtered out of the file selector for a reason: changes there break every transform and may not survive a NomaUBL upgrade.
- **Use the XSL Editor tab for what the form does not cover.** Conditional logic, custom XPath, named templates — Monaco gives the full power of XSLT 1.0 / 2.0 alongside the form's mappings.
- **Validate after every mapping change.** Use *UBL Tools → Validate* with `Source = XML` to run the transformation and the Schematron rules in one pass; the log table flags any wrong path or missing variable.
