---
title: PDF to XML
description: "NomaUBL Processing → PDF to XML: convert a text PDF or a JD Edwards tagged PDF, read the XML it produces, set the table, VAT summary, invoice number, invoice split and company lookup of a document by clicking the rows, and save them to the document."
keywords: [NomaUBL, PDF to XML, PDF source, text PDF, JD Edwards PDF, manifest, table header rows, VAT summary, invoice key, company lookup, SIRET, SIREN, VAT number, mapping, SAP, NetSuite, custom ERP]
---

# PDF to XML

The **PDF to XML** page shows the XML a PDF produces, to start or adjust the mapping of a [PDF-source document](../management/documents.md#pdf-extraction). It converts a **text PDF** from any system — JD Edwards, SAP, NetSuite, a custom ERP or any invoicing tool — or a **JD Edwards tagged PDF**, with or without a document's settings, and saves to the document the settings tried on the page. Nothing is stored by a conversion: the page is a working tool.

Access: **Processing → PDF to XML**.

---

## At a glance

<svg viewBox="0 0 1320 588" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="p2x-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="p2x-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="p2x-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="p2x-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="538" rx="14" fill="url(#p2x-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">PDF to XML</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">See the XML a PDF produces, to start or adjust its mapping.</text>
  <rect x="240" y="82" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="284.5" y="96.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Choose a PDF</text>
  <text x="337" y="97" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">invoice-2026-0412.pdf</text>
  <rect x="479" y="82" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="489" y="96.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Text PDF ▾</text>
  <rect x="597" y="82" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="607" y="96.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">invoices ▾</text>
  <rect x="725" y="82" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="769.5" y="96.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">New document</text>
  <rect x="822" y="82" width="61" height="22" rx="5" fill="url(#p2x-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="852.5" y="96.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Convert</text>
  <rect x="891" y="82" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="935.5" y="96.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Download XML</text>
  <text x="240" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE START</text>
  <rect x="240" y="130" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">PRESTATION</text>
  <text x="370" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HEADER ROWS</text>
  <rect x="370" y="130" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">2</text>
  <text x="470" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE END</text>
  <rect x="470" y="130" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">N° contrat</text>
  <rect x="588" y="132" width="93" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="634.5" y="144.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 line(s) found</text>
  <text x="740" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VAT TABLE START</text>
  <rect x="740" y="130" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="750" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">^Taux TVA</text>
  <text x="860" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VAT TABLE END</text>
  <rect x="860" y="130" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="870" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">^Totaux</text>
  <rect x="958" y="132" width="113" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="1014.5" y="144.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 VAT rate(s) found</text>
  <text x="240" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INVOICE NUMBER</text>
  <rect x="240" y="174" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="188.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">36834.FU · Numero ▾</text>
  <rect x="418" y="176" width="128" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="482.0" y="188.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Number 36834 · Type FU</text>
  <text x="600" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FIND COMPANY BY</text>
  <rect x="600" y="174" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="188.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SIRET ▾</text>
  <rect x="686" y="174" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="696" y="188.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SIRET ▾</text>
  <text x="776" y="189" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">→ 00001</text>
  <rect x="900" y="174" width="180" height="22" rx="5" fill="url(#p2x-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="990.0" y="188.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save to document</text>
  <rect x="240" y="208" width="380" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="218" width="94" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="297.0" y="232.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Invoice lines</text>
  <rect x="360" y="218" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="401.5" y="232.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">VAT summary</text>
  <rect x="520" y="218" width="90" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="565.0" y="232.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Start over</text>
  <text x="250" y="258" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Click the first row after the lines</text>
  <text x="256" y="276" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">FACTURE | N° : 36834.FU</text>
  <text x="256" y="300" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ACME SERVICES | 12 rue des Lilas</text>
  <rect x="248" y="310" width="364" height="20" rx="4" fill="none" stroke="#818cf8" strokeWidth="1"/>
  <text x="256" y="324" fill="#818cf8" fontSize="9" fontFamily="ui-monospace, monospace">PRESTATION | Qté | P.U. HT | Montant HT</text>
  <rect x="248" y="334" width="364" height="20" rx="4" fill="none" stroke="#818cf8" strokeWidth="1"/>
  <text x="256" y="348" fill="#818cf8" fontSize="9" fontFamily="ui-monospace, monospace">| | (€) | (€)</text>
  <rect x="248" y="358" width="364" height="20" rx="4" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <text x="256" y="372" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">Maintenance | 1 | 991,29 | 991,29</text>
  <rect x="248" y="382" width="364" height="20" rx="4" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <text x="256" y="396" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">Support | 2 | 50,00 | 100,00</text>
  <rect x="248" y="406" width="364" height="20" rx="4" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <text x="256" y="420" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">Formation | 1 | 98,26 | 98,26</text>
  <rect x="248" y="430" width="364" height="20" rx="4" fill="none" stroke="#f87171" strokeWidth="1"/>
  <text x="256" y="444" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">N° contrat : C-2026-17</text>
  <text x="256" y="468" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Taux TVA | Base HT | TVA</text>
  <text x="256" y="492" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">20,00 % | 1 189,55 | 237,91</text>
  <text x="256" y="516" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Totaux | 1 427,46</text>
  <rect x="630" y="208" width="450" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="642.0" y="232" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Document fichier="invoice-2026-0412.pdf"&gt;</text>
  <text x="652.8" y="254" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Numero&gt;36834&lt;/Numero&gt;</text>
  <text x="652.8" y="276" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;TypeJDE&gt;FU&lt;/TypeJDE&gt;</text>
  <text x="652.8" y="298" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;CompanyCode&gt;00001&lt;/CompanyCode&gt;</text>
  <text x="652.8" y="320" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Lignes&gt;</text>
  <text x="663.6" y="342" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Ligne&gt;&lt;PRESTATION&gt;Maintenance&lt;/PRESTATION&gt;…</text>
  <text x="663.6" y="364" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Ligne&gt;&lt;PRESTATION&gt;Support&lt;/PRESTATION&gt;…</text>
  <text x="652.8" y="386" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/Lignes&gt;</text>
  <text x="652.8" y="408" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Recap_TVA&gt;</text>
  <text x="663.6" y="430" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Ligne_TVA&gt;&lt;Taux_TVA&gt;20.00&lt;/Taux_TVA&gt;…</text>
  <text x="652.8" y="452" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/Recap_TVA&gt;</text>
  <text x="652.8" y="474" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;FichierPDF&gt;invoice-2026-0412.pdf&lt;/FichierPDF&gt;</text>
  <text x="642.0" y="496" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/Document&gt;</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Converter + document</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">text PDF or JD Edwards PDF</text>
  <line x1="200" y1="93.0" x2="479" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="124" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="139" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table settings</text>
  <text x="30" y="152" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filled by clicking rows</text>
  <line x1="200" y1="141.0" x2="240" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="182" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="197" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Document key</text>
  <text x="30" y="210" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">36834.FU → number + type</text>
  <line x1="200" y1="199.0" x2="240" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="328" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="343" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click the rows</text>
  <text x="30" y="356" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">header · lines · end row</text>
  <line x1="200" y1="345.0" x2="248" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="26" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Convert</text>
  <text x="1150" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">draft settings, nothing saved</text>
  <line x1="1140" y1="43.0" x2="852" y2="82" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="132" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Company found</text>
  <text x="1150" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">VAT · SIRET · SIREN</text>
  <line x1="1140" y1="149.0" x2="810" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="182" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="197" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save to document</text>
  <text x="1150" y="210" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes the settings</text>
  <line x1="1140" y1="199.0" x2="1080" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="358" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="373" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">XML produced</text>
  <text x="1150" y="386" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read-only, downloadable</text>
  <line x1="1140" y1="375.0" x2="1070" y2="368" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
</svg>

---

## Converting a PDF

| Control | Description |
|---|---|
| **Choose a PDF** | Picks the PDF on the computer and converts it at once. |
| Converter | **Text PDF** (a PDF whose text can be selected, from any generator) or **JD Edwards PDF** (a BI Publisher / JD Edwards print carrying its section and field tags). |
| Document | **Default settings**, or a document whose settings are loaded and tried. Picking a document also sets the converter: *Text PDF* for a PDF source, *JD Edwards PDF* otherwise, with the manifest of the [watched folder](../management/watched-folders.md) that uses the document. |
| **New document** | Creates a document for the converter in use — **Name** (letters, digits, `-` and `_`) and **Description**. Its UBL XSLT points to `<name>.xsl`, to create in the [XSL editor](../ubl-tools/xsl-editor.md) if needed; the settings tried on the page stay pending, ready for **Save to document**. |
| **Convert** | Converts again with the settings currently on the page, saved or not. |
| **Download XML** | Saves the XML as `<pdf name>.xml`. |

The XML appears on the right, read-only. A scanned PDF (images without text) is refused with *no text found … (scanned or empty PDF?)*.

---

## Text PDF \{#text-pdf\}

### Invoice lines

**Table start**, **Header rows** and **Table end** set the line table. The easiest way is to click the rows in the left pane, with **Invoice lines** selected:

1. *Click the first row of the table header*;
2. *Click the last row of the table header*;
3. *Click the first row after the lines*.

The page writes the three settings and converts again: the header rows are framed in indigo, the lines in green, the end row in red, and the count shows *N line(s) found*. **Start over** clears the clicks.

### VAT summary

With **VAT summary** selected, the same clicks set **VAT table start**, **Columns** and **VAT table end**: *Click the header row of the VAT summary*, *Click its last column* (one button per header cell — useful when another block is printed beside the summary), *Click the first row after the rates*. The rates become `<Recap_TVA>/<Ligne_TVA>`, and the count shows *N VAT rate(s) found*.

### Document key

| Control | Description |
|---|---|
| **Invoice number** | The element holding the invoice number. A number such as `36834.FU` (number then letters) or `FU-36834` is split into **Number** and **Type**, both read from the label printed before the value. |
| **Document type** | Shown when the number cannot be split: the fixed document type (e.g. `RI`). |
| **Several invoices** | For a PDF holding several invoices: the rule that gives one document per invoice number (*One invoice per PDF* when empty). **Split on this number** builds it from the label of the invoice number; the count then shows *N invoice(s)*. |
| **Find company by** | *Not searched*, *VAT number*, *SIRET* or *SIREN*, then the element holding the identifier: the page shows the company found among the [supplier companies](../ubl-tools/ubl-defaults/suppliers-companies.md) (`→ 00001`), or why none matches. |
| **Company** | Fixed company code, when the company is not searched. |

### Save to document

**Save to document** writes the settings to the document picked: table start, header rows and table end, VAT summary, invoice split, the number and type extraction rules, the company (or its lookup). A document without a burst key gets `Document`, one per invoice. The same settings can be edited afterwards in the [PDF extraction](../management/documents.md#pdf-extraction) group of the document.

---

## JD Edwards PDF \{#jde-pdf\}

| Control | Description |
|---|---|
| **Manifest** | Server path of the manifest that names the tags; empty = data dictionary names. The folder button browses the server. |
| **Starter manifest** | Downloads a manifest built from the PDF, to complete. |
| **Invoice key** | For a report that does not follow the standard invoice layout: the `section:field` holding the invoice number, shown with the number of distinct values. Gives one `<Invoice>` per value (burst key `Invoice`). *None (standard sections)* keeps the standard layout. |
| **Burst key**, **Document ID**, **Document type**, **Company** | Picked among the elements of the XML; **Find company by** replaces the fixed company as for a text PDF. The count shows *N invoice(s)*. |
| **Save to document** | Writes the invoice key, burst key, document ID, type and company (or its lookup) to the document. |

A PDF without JD Edwards tags shows *No JD Edwards tags in this PDF: it needs PDF compression turned off in the JDE INI.*

A JD Edwards PDF can also be processed directly from [Process Document](./document.md) on an XML-source document: it is converted with the document's invoice key and the manifest of its watched folder.

---

## Access

The page follows the **Process Document** page grant on the [Roles](../configuration/security/roles.md) page: a user who can process documents sees it.

---

## Tips & best practices

- **Start from a real PDF of each layout.** One sample per layout is enough to set the table, the VAT summary and the key.
- **Click rather than type the anchors.** The page writes the shortest rule that finds the row, numbers turned into `\d+`, so the next PDF of the same layout matches too.
- **Check the counts before saving.** *Lines found*, *VAT rates found* and *invoices* must match the PDF; a red count means an anchor is wrong.
- **Search the company when one PDF layout serves several companies.** The lookup by SIRET, SIREN or VAT number avoids one document per company; an identifier missing from the supplier companies stops the invoice.
- **Use the AI Auto-Map for the values the converter merges.** Its [extraction rules](../ubl-tools/xsl-editor.md#ai-auto-map) are saved on the document and show up here on the next conversion.
