---
title: Schematrons
description: "The NomaUBL Schematrons page: read the rules of each Schematron pack the validator runs — EN 16931, CIUS-FR, extended CTC FR, Chorus Pro, NomaUBL, e-reporting, and the customer packs named by the document templates — one row per rule with severity, description and context, and the test and message of each rule."
keywords: [NomaUBL, Schematron, validation rules, EN 16931, CIUS-FR, extended CTC, Chorus Pro, e-reporting, customer Schematron, assert, report, XPath test, validation, JD Edwards, SAP, NetSuite, custom ERP]
---

# Schematrons

The **Schematrons** page lists the rules of every Schematron pack the validator runs: the packs **shipped with NomaUBL** and the **customer packs** named by a document template. Each rule is a row — its identifier, severity, description and the element it applies to — and a row opens the test the rule evaluates and the message it returns. The page answers the question that follows a validation error: *what exactly does this rule check?*

Open it from **Schematrons** in the Documentation group, after [Business Rules](./business-rules.mdx).

---

## At a glance

<svg viewBox="0 0 1200 414" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sch-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sch-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sch-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="374" rx="14" fill="url(#sch-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Schematrons</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">The rules of each Schematron pack the validator runs — shipped with NomaUBL or named by a document template.</text>
  <rect x="240" y="82" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="96.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">CIUS-FR — 312 rules ▾</text>
  <text x="512" y="97" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">CIUS-FR.xsl · version 1.4.0.04</text>
  <rect x="240" y="118" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RULE</text>
  <text x="360" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY</text>
  <text x="440" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="770" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONTEXT</text>
  <rect x="240" y="150" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-01</text>
  <rect x="360" y="155.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="380.5" y="166.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">fatal</text>
  <text x="440" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">The invoice number must not exceed 35 characters</text>
  <text x="770" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">cbc:ID</text>
  <rect x="240" y="180" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-05</text>
  <rect x="360" y="185.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="380.5" y="196.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">fatal</text>
  <text x="440" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">The mandatory legal notes must be present</text>
  <text x="770" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ubl:Invoice</text>
  <rect x="240" y="210" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-12</text>
  <rect x="360" y="215.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="380.5" y="226.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">fatal</text>
  <text x="440" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">The buyer SIREN must be present</text>
  <text x="770" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">cac:AccountingCustomerParty</text>
  <rect x="240" y="240" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-CTC-03</text>
  <rect x="360" y="245.0" width="51" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="385.5" y="256.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">warning</text>
  <text x="440" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">The billing framework should be stated</text>
  <text x="770" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">cbc:ProfileID</text>
  <rect x="600" y="278" width="360" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="614" y="296" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">BR-FR-12</text>
  <rect x="680" y="286" width="40" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="700.0" y="296.7" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">fatal</text>
  <text x="614" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MUST BE TRUE</text>
  <text x="614" y="330" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">exists(cac:Party/cac:PartyLegalEntity/cbc:CompanyID)</text>
  <text x="614" y="350" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="614" y="364" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">[BR-FR-12] The buyer SIREN must be present</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choose a Schematron</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shipped · customer packs</text>
  <line x1="200" y1="93.0" x2="240" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One row per rule</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">assert or report</text>
  <line x1="200" y1="207.0" x2="250" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="20" y="328" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="343" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grid tools</text>
  <text x="30" y="356" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">search, filters, columns, export</text>
  <line x1="200" y1="345.0" x2="240" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="1000" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">File and version</text>
  <text x="1010" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ templates using a customer pack</text>
  <line x1="1000" y1="93.0" x2="690" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Severity</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fatal · error · warning · info</text>
  <line x1="1000" y1="177.0" x2="370" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="1000" y="318" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="333" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row window</text>
  <text x="1010" y="346" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pattern, context, test, message</text>
  <line x1="1000" y1="335.0" x2="960" y2="328" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
</svg>

---

## Choosing a pack

The **Choose a Schematron** picker lists the packs in two groups, each with its number of rules:

| Group | Packs |
|---|---|
| **Shipped with NomaUBL** | EN 16931, CIUS-FR, Extended CTC FR, Chorus Pro, NomaUBL, E-reporting (flux 10). The upgrade refreshes them with the release. |
| **Customer packs** | Each precompiled stylesheet named in the [Custom Schematron](../management/documents.md#ubl) field of a document template. |

Next to the picker, the page shows the file name, the version and the date of the pack, and for a customer pack the templates that use it. The last pack consulted is reopened on the next visit.

---

## Rules grid

One row per rule (`assert` or `report`) of the pack, sorted by identifier, 100 rows per page.

| Column | Content |
|---|---|
| **Rule** | Identifier of the rule (`BR-FR-12`, `BR-CO-15`…), the one quoted in the validation errors. |
| **Severity** | `fatal`, `error`, `warning` or `info`, as a coloured pill. |
| **Description** | What the rule requires, as written in the pack. |
| **Context** | The element the rule is evaluated on (XPath). |
| **Pattern**, **Kind**, **Test** *(hidden)* | Group of rules, `assert` or `report`, and the XPath test. Shown from the column menu. |

The grid has the usual search, filters (severity, pattern), column choice and export.

### Rule window

A click on a row opens the rule: description, **Pattern**, **Context**, then the test under **Must be true** for an `assert` or **Fires when** for a `report`, and the **Message** written into the validation error.

---

## Access

The page follows the **Business Rules** grant of the Documentation group on the [Roles](../configuration/security/roles.md) page: a role that reads the business rules reads the Schematrons too.

---

## Tips & best practices

- **Start from the error.** Copy the rule identifier from the invoice's validation errors and type it into the search box of the grid.
- **Read the test, not only the message.** The message is short; the *Must be true* expression says exactly which element and which value the rule expects.
- **Check a customer pack after an edit.** The picker shows its rule count and the templates that use it; a pack that cannot be read shows its error under the picker.
- **Keep customer rules in customer packs.** The shipped packs are replaced at each upgrade; see [Rule sets](../ubl-tools/rule-sets.md) for choosing which standard packs run.
