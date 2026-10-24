---
title: Rule Sets
description: "NomaUBL rule sets — EN 16931 basic, EN 16931 and France extended (CTC): which UBL fields a standard requires, which validation packs apply, how a document chooses its set, and how the XSL editor's mapping tab, the invoice window and the reference pages read it."
keywords: [NomaUBL, rule set, EN 16931, CIUS-FR, extended CTC, Factur-X extended, validation packs, Schematron, required fields, conditional fields, mapping, XSL editor, Check mapping, JD Edwards, SAP, NetSuite, custom ERP]
---

# Rule Sets

A **rule set** describes one standard an invoice can be produced under: the UBL fields it requires, those it requires under a condition, those it leaves optional, and the validation packs that check it. NomaUBL ships three sets, generated from the [UBL reference](../references/ubl-reference.mdx) data so they never drift from it. A document names its set; the validator then runs the packs of that set, and the mapping tab of the [XSL editor](./xsl-editor.md) shows, tag by tag, what the set expects — whatever the source system, JD Edwards, SAP, NetSuite or a custom ERP.

---

## At a glance

<svg viewBox="0 0 1200 408" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="348" rx="14" fill="url(#rs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">XSL Editor · Variable Mapping</text>
  <text x="240" y="79" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule set</text>
  <rect x="320" y="64" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="78.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">France extended (CTC) ▾</text>
  <rect x="522" y="64" width="312" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="554.0" y="78.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">All tags</text>
  <rect x="587" y="65" width="142" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="658.0" y="78.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Required and conditional</text>
  <line x1="730" y1="69" x2="730" y2="81" stroke="#334155" strokeWidth="1"/>
  <text x="782.0" y="78.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Missing required</text>
  <rect x="240" y="102" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="257" y="111" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Show tags outside the set</text>
  <rect x="830" y="96" width="130" height="22" rx="5" fill="url(#rs-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="895.0" y="110.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Check mapping</text>
  <rect x="240" y="130" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="149" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INVOICE HEADER</text>
  <text x="948" y="149" fill="#fb923c" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Required mapped 4 / 5</text>
  <rect x="240" y="168" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="187" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TAG_DOCUMENT_ID</text>
  <text x="440" y="187" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">BT-1</text>
  <rect x="490" y="172" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="186.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">InvoiceNumber</text>
  <rect x="752" y="174" width="56" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="780.0" y="186.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">required</text>
  <rect x="240" y="202" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="221" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TAG_ISSUE_DATE</text>
  <text x="440" y="221" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">BT-2</text>
  <rect x="490" y="206" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="220.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">InvoiceDate</text>
  <rect x="752" y="208" width="56" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="780.0" y="220.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">required</text>
  <rect x="240" y="236" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="255" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TAG_INVOICE_TYPE_CODE</text>
  <text x="440" y="255" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">BT-3</text>
  <rect x="490" y="240" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="254.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">XML tag name</text>
  <rect x="752" y="242" width="65" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="784.5" y="254.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">by default</text>
  <rect x="240" y="270" width="720" height="30" rx="6" fill="#0d1220" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="252" y="289" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TAG_DUE_DATE</text>
  <text x="440" y="289" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">BT-9</text>
  <rect x="490" y="274" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="288.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">XML tag name</text>
  <rect x="752" y="276" width="70" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="787.0" y="288.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">conditional</text>
  <rect x="240" y="304" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="323" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TAG_ORDER_REF</text>
  <text x="440" y="323" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">BT-13</text>
  <rect x="490" y="308" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="322.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">OrderNumber</text>
  <rect x="752" y="310" width="56" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="780.0" y="322.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">optional</text>
  <text x="252" y="346" fill="#fb923c" fontSize="9" fontFamily="system-ui, sans-serif">BR-CO-25 — a due date or payment terms is required when the amount due is positive</text>
  <rect x="20" y="58" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule set</text>
  <text x="30" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">preselected on the template's set</text>
  <line x1="200" y1="75.0" x2="320" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group completeness</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">required with a source or default</text>
  <line x1="200" y1="167.0" x2="252" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Status badge</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">required · conditional · optional…</text>
  <line x1="200" y1="267.0" x2="752" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Condition note</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with the rule ids</text>
  <line x1="200" y1="347.0" x2="252" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="1000" y="58" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <text x="1010" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">all · required · missing</text>
  <line x1="1000" y1="75.0" x2="950" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Check mapping</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">missing fields + sample validated</text>
  <line x1="1000" y1="137.0" x2="960" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filled by the defaults</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">UBL defaults cover the field</text>
  <line x1="1000" y1="247.0" x2="820" y2="243" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
</svg>

---

## The shipped sets

| Set | Fields | Customization id | Validation packs |
|---|---|---|---|
| **EN 16931 basic** (`en16931-basic`) | 155 — the BASIC subset every French invoice carries | `urn:cen.eu:en16931:2017` | EN 16931, Flux 2 (CIUS-FR), CPRO B2G, house rules |
| **EN 16931** (`en16931`) | 243 — the full EN 16931 model under the French CIUS | `urn:cen.eu:en16931:2017` | EN 16931, Flux 2 (CIUS-FR), CPRO B2G, house rules |
| **France extended (CTC)** (`fr-extended-ctc`) | 455 — EN 16931 plus the French extension (EXT-FR-FE fields) | `urn:cen.eu:en16931:2017#conformant#urn:factur-x.eu:1p0:extended` | Extended CTC-FR (in place of EN 16931), Flux 2, CPRO B2G, house rules |

Each field of a set has a status:

| Status | Meaning |
|---|---|
| **required** | The set requires the field on every invoice. |
| **conditional** | Required under a condition — a due date or payment terms when an amount is due (BR-CO-25), a tax point date or period code (BR-CO-03), the seller's identifiers (BR-CO-26)… The note gives the condition and the rule ids. |
| **optional** | Allowed, not required. |
| **by default** | Required, and filled by the [UBL defaults](./ubl-defaults/overview.md) when the mapping leaves it empty. |
| **not in this set** | The set does not know the field — for example the EXT-FR-FE tags under the two EN 16931 sets. |

A [custom Schematron](../management/documents.md#ubl) on the document still runs after the packs of the set.

---

## Choosing the set of a document

On the **UBL** tab of the [document](../management/documents.md#ubl), the **Rule set** field names the set:

- **blank** — *Derived from the UBL defaults (customization id and profile)*: the behaviour of a document that names no set. The set follows the customization id the UBL defaults emit — France extended for the extended profiles, EN 16931 otherwise;
- **a set** — the validator runs the packs of that set in every pipeline: batch and single processing, the Process page, the invoice window's validation and the XSL editor's check.

The two EN 16931 sets and the France extended set list exactly the packs the derived choice applies, so naming the set of an existing document changes no finding. An unknown set id is reported as a warning and the derived choice applies.

---

## In the XSL editor

The **Variable Mapping** tab of the [XSL editor](./xsl-editor.md#rule-sets) reads a rule set:

- **Rule set** — preselected on the set of the document, switchable to preview another one; the choice is remembered in the browser per file and changes nothing in the files;
- **a badge per tag** — required, conditional, optional, by default, not in this set — with the note of the condition in its tooltip;
- **filters** — *All tags*, *Required and conditional*, *Missing required*; the tags outside the set stay hidden unless **Show tags outside the set** is ticked, so the French extension tags appear only under the extended set;
- **completeness per group** — *Required mapped 4 / 5*: a required field counts when it has a source, a constant or a UBL default;
- **Check mapping** — lists the required fields of the set with no source and no default, then transforms the loaded sample with the mapping as edited and validates it with the packs of the set and the document's custom packs. The report groups the findings by field and highlights the tags concerned. Nothing is written to the database and nothing is sent.

---

## Elsewhere in the application

- **Invoice window** — names the set the invoice was produced under, read from its archived UBL.
- **[UBL reference](../references/ubl-reference.mdx)** — a set filter shows the fields of a set with their status.
- **[Business rules](../references/business-rules.mdx)** — the same filter keeps the rules that touch a field of the set.

---

## Adapting a set

The sets are bundled in the application and generated at build from the UBL reference data. An environment can override one with a file of the same name under `<env>/config/rulesets/` (for example `en16931.json`), read before the bundled one. Other UBL-based standards — Peppol BIS Billing, XRechnung… — are added as bundled sets with their packs. National formats that are not UBL go through a [post-transform](./post-transform.md).

---

## Tips & best practices

- **Name the set on every document.** The derived choice works, but an explicit set states the standard the document is meant to meet and keeps the mapping tab on it.
- **Run Check mapping with a real sample** before the first batch on a new document: the missing required fields come first, then the findings by field.
- **Use the Missing required filter while mapping.** It shrinks the form to what still blocks the set.
- **Keep a custom Schematron for the customer's own rules.** The rule set covers the standard; customer-specific checks stay in the document's custom packs.
