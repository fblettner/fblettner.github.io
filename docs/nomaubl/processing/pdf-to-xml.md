---
title: PDF to XML
description: "NomaUBL Processing → PDF to XML: convert a text PDF or a JD Edwards tagged PDF step by step (Source, Invoice, Company, Lines, VAT summary, Result), set the table, VAT summary, invoice number, invoice split and company lookup by clicking the rows, check each invoice's lines against its total, and save the settings to the document."
keywords: [NomaUBL, PDF to XML, PDF source, text PDF, JD Edwards PDF, manifest, table header rows, VAT summary, invoice key, company lookup, SIRET, SIREN, VAT number, business-term codes, BT codes, result per invoice, mapping, SAP, NetSuite, custom ERP]
---

# PDF to XML

The **PDF to XML** page shows the XML a PDF produces, to start or adjust the mapping of a [PDF-source document](../management/documents.md#pdf-extraction). It converts a **text PDF** from any system — JD Edwards, SAP, NetSuite, a custom ERP or any invoicing tool — or a **JD Edwards tagged PDF**, with or without a document's settings, and saves to the document the settings tried on the page. Nothing is stored by a conversion: the page is a working tool.

The settings are grouped in **steps** shown as cards across the top — Source, Invoice, Company, Lines, VAT summary, Result — each with its state. The selected step's settings sit on the left, beside the rows of the PDF and the XML it produces.

Access: **Processing → PDF to XML**. A PDF-source document also opens the page on itself from its **Open in PDF to XML** button, in the [Documents](../management/documents.md#pdf-extraction) editor.

---

## At a glance

<svg viewBox="0 0 1320 610" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="p2x-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="p2x-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="p2x-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="p2x-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="570" rx="14" fill="url(#p2x-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">PDF to XML</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">See the XML a PDF produces, to start or adjust its mapping.</text>
  <rect x="240" y="80" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="94.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤒ Choose a PDF</text>
  <text x="350" y="95" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices-2026-11.pdf</text>
  <rect x="980" y="80" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1030.0" y="94.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Download XML</text>
  <rect x="861" y="80" width="111" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="916.5" y="94.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Save to document</text>
  <rect x="792" y="80" width="61" height="22" rx="5" fill="url(#p2x-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="822.5" y="94.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Convert</text>
  <text x="782" y="95" fill="#fb923c" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">Unsaved changes</text>
  <rect x="240.0" y="116" width="133.3" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="248.0" y="124" width="14" height="14" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="0.8"/>
  <text x="268.0" y="135" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="248.0" y="152" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">invoices-2026-11.pdf</text>
  <rect x="381.3" y="116" width="133.3" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="389.3" y="124" width="14" height="14" rx="4" fill="rgba(168,85,247,0.12)" stroke="#c084fc" strokeWidth="0.8"/>
  <text x="409.3" y="135" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INVOICE</text>
  <text x="389.3" y="152" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">3 invoice(s)</text>
  <line x1="374.3" y1="138" x2="380.3" y2="138" stroke="#475569" strokeWidth="1"/>
  <rect x="522.7" y="116" width="133.3" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="530.7" y="124" width="14" height="14" rx="4" fill="rgba(168,85,247,0.12)" stroke="#c084fc" strokeWidth="0.8"/>
  <text x="550.7" y="135" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPANY</text>
  <text x="530.7" y="152" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">00001</text>
  <line x1="515.7" y1="138" x2="521.7" y2="138" stroke="#475569" strokeWidth="1"/>
  <rect x="664.0" y="116" width="133.3" height="44" rx="8" fill="rgba(255,159,10,0.12)" stroke="#fb923c" strokeWidth="1.4"/>
  <rect x="672.0" y="124" width="14" height="14" rx="4" fill="rgba(255,159,10,0.12)" stroke="#fb923c" strokeWidth="0.8"/>
  <text x="692.0" y="135" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINES</text>
  <text x="672.0" y="152" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">5 line(s) found</text>
  <line x1="657.0" y1="138" x2="663.0" y2="138" stroke="#475569" strokeWidth="1"/>
  <rect x="805.3" y="116" width="133.3" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="813.3" y="124" width="14" height="14" rx="4" fill="rgba(255,159,10,0.12)" stroke="#fb923c" strokeWidth="0.8"/>
  <text x="833.3" y="135" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VAT SUMMARY</text>
  <text x="813.3" y="152" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">3 VAT rate(s) found</text>
  <line x1="798.3" y1="138" x2="804.3" y2="138" stroke="#475569" strokeWidth="1"/>
  <rect x="946.7" y="116" width="133.3" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="954.7" y="124" width="14" height="14" rx="4" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="0.8"/>
  <text x="974.7" y="135" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RESULT</text>
  <text x="954.7" y="152" fill="#f87171" fontSize="8.5" fontFamily="system-ui, sans-serif">2 invoice(s) to check</text>
  <line x1="939.7" y1="138" x2="945.7" y2="138" stroke="#475569" strokeWidth="1"/>
  <text x="240" y="192" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Lines</text>
  <text x="240" y="208" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Click rows of the PDF to mark the table of lines.</text>
  <rect x="240" y="218" width="236" height="44" rx="6" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="248" y="234" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Click the first row after the lines</text>
  <rect x="394" y="236" width="74" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="431.0" y="249.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Start over</text>
  <text x="240" y="280" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">5 line(s) found</text>
  <text x="240" y="302" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE START</text>
  <rect x="240" y="307" width="236" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="321.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">PRESTATION</text>
  <text x="240" y="348" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HEADER ROWS</text>
  <rect x="240" y="353" width="70" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="367.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="240" y="394" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE END</text>
  <rect x="240" y="399" width="236" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="413.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">^N° contrat</text>
  <text x="240" y="440" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROWS IGNORED</text>
  <rect x="240" y="445" width="236" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="459.5" fill="#475569" fontSize="9.5" fontFamily="ui-monospace, monospace">^Sous total</text>
  <rect x="488" y="174" width="330" height="400" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="498" y="194" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows of the PDF</text>
  <rect x="725" y="180" width="83" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="726" y="181" width="42" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="747.0" y="194.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rows</text>
  <line x1="769" y1="185" x2="769" y2="197" stroke="#334155" strokeWidth="1"/>
  <text x="788.5" y="194.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <line x1="488" y1="208" x2="818" y2="208" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="230" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">FACTURE | N° : 36834.FU | Date : 12/11/2026</text>
  <text x="500" y="255" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ACME SERVICES</text>
  <text x="500" y="280" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">12 rue des Lilas</text>
  <text x="500" y="305" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">75011 PARIS</text>
  <text x="500" y="330" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Client : Beta SARL</text>
  <rect x="494" y="341" width="318" height="20" rx="4" fill="rgba(99,102,241,0.25)"/>
  <text x="500" y="355" fill="#a5b4fc" fontSize="8.5" fontFamily="ui-monospace, monospace">PRESTATION | Qté | P.U. HT | Montant HT</text>
  <rect x="494" y="366" width="318" height="20" rx="4" fill="rgba(34,197,94,0.15)"/>
  <text x="500" y="380" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">Maintenance | 1 | 900,00 | 900,00</text>
  <rect x="494" y="391" width="318" height="20" rx="4" fill="rgba(34,197,94,0.15)"/>
  <text x="500" y="405" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">Support | 2 | 50,00 | 100,00</text>
  <rect x="494" y="416" width="318" height="20" rx="4" fill="rgba(34,197,94,0.15)"/>
  <text x="500" y="430" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">Formation | 1 | 200,00 | 200,00</text>
  <rect x="494" y="441" width="318" height="20" rx="4" fill="rgba(239,68,68,0.20)"/>
  <text x="500" y="455" fill="#f87171" fontSize="8.5" fontFamily="ui-monospace, monospace">N° contrat : C-2026-17</text>
  <text x="500" y="480" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Taux TVA | Base HT | TVA</text>
  <text x="500" y="505" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">20,00 % | 1 200,00 | 240,00</text>
  <text x="500" y="530" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Total HT : 1 200,00 | Total TTC : 1 440,00</text>
  <text x="500" y="555" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">FACTURE | N° : 36835.FU | Date : 12/11/2026</text>
  <rect x="826" y="174" width="254" height="400" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="836" y="194" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Documents&gt;</text>
  <text x="845" y="214" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Document fichier="…" pages="1"&gt;</text>
  <text x="854" y="234" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;PagesPDF&gt;1&lt;/PagesPDF&gt;</text>
  <text x="854" y="254" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Date&gt;2026-11-12&lt;/Date&gt;</text>
  <text x="854" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Adresse_1&gt;…&lt;/Adresse_1&gt;</text>
  <text x="854" y="294" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Lignes&gt;</text>
  <text x="863" y="314" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Ligne n="1"&gt;</text>
  <text x="872" y="334" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;PRESTATION&gt;Maintenance</text>
  <text x="872" y="354" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Qté&gt;1&lt;/Qté&gt;</text>
  <text x="872" y="374" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Montant_HT&gt;900.00</text>
  <text x="863" y="394" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;/Ligne&gt;</text>
  <text x="863" y="414" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Ligne n="2"&gt;…&lt;/Ligne&gt;</text>
  <text x="854" y="434" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;/Lignes&gt;</text>
  <text x="854" y="454" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Recap_TVA&gt;</text>
  <text x="863" y="474" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Ligne_TVA&gt;…&lt;/Ligne_TVA&gt;</text>
  <text x="854" y="494" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;/Recap_TVA&gt;</text>
  <text x="854" y="514" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Total_HT&gt;1200.00&lt;/Total_HT&gt;</text>
  <text x="854" y="534" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Textes&gt;…&lt;/Textes&gt;</text>
  <text x="845" y="554" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;/Document&gt;</text>
  <rect x="20" y="74" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choose a PDF</text>
  <text x="30" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">converted at once</text>
  <line x1="200" y1="91.0" x2="240" y2="91" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Steps as cards</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its state</text>
  <line x1="200" y1="149.0" x2="240" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Settings of the step</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">beside the rows and the XML</text>
  <line x1="200" y1="307.0" x2="240" y2="322" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="430" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click the rows</text>
  <text x="30" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">header · lines · end row</text>
  <line x1="200" y1="447.0" x2="494" y2="351" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="26" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pending changes</text>
  <text x="1150" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one Save to document</text>
  <line x1="1140" y1="43.0" x2="916.5" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="132" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Result step</text>
  <text x="1150" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">invoices to check in red</text>
  <line x1="1140" y1="149.0" x2="1013.3333333333334" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="190" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rows or PDF</text>
  <text x="1150" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the PDF itself on demand</text>
  <line x1="1140" y1="207.0" x2="766.5" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="380" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">XML produced</text>
  <text x="1150" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read-only, downloadable</text>
  <line x1="1140" y1="397.0" x2="1070" y2="374" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
</svg>

---

## Toolbar and steps \{#steps\}

| Control | Description |
|---|---|
| **Choose a PDF** | Picks the PDF on the computer and converts it at once; its name is shown beside the button. |
| **Convert** | Converts again with the settings currently on the page, saved or not. |
| *Unsaved changes* | Orange mark shown as soon as a setting is changed on the page: it is tried at once but not saved yet. |
| **Save to document** | Writes the pending settings to the document picked in the **Source** step (see [Save to document](#save)). Enabled when changes are pending and a document is picked. |
| **Download XML** | Saves the XML as `<pdf name>.xml`. |

Each card names its step and states where it stands, in green when found, in red when still to set:

| Step | The card shows |
|---|---|
| **Source** | The PDF chosen, or *No PDF chosen*. |
| **Invoice** | *Number … · Type …* when the invoice number splits, *N invoice(s)* when the PDF is cut into invoices, else the invoice number or *One invoice per PDF*. |
| **Company** | The company code found or set, or *Not set*. |
| **Lines** | *N line(s) found*, or *No lines found*. Text PDF only. |
| **VAT summary** | *N VAT rate(s) found*, or *Not set*. Text PDF only. |
| **Result** | *N invoice(s) · N line(s)*, or *N invoice(s) to check* in red. |

The steps after **Source** open once the PDF is converted. The rows read from the PDF are shown beside the settings of a text PDF; the **Rows** / **PDF** buttons at the top of that pane swap them for the PDF itself, to compare with what was read. A row is clicked in the **Lines** and **VAT summary** steps only; in the **Result** step, the list of invoices takes the place of the rows.

---

## Source \{#source\}

| Control | Description |
|---|---|
| **Kind of PDF** | **Text PDF** (a PDF whose text can be selected, from any generator) or **JD Edwards PDF** (a BI Publisher / JD Edwards print carrying its section and field tags). |
| **Document** | **Default settings**, or a document whose settings are loaded and tried. Picking a document also sets the kind: *Text PDF* for a PDF source, *JD Edwards PDF* otherwise, with the manifest of the [watched folder](../management/watched-folders.md) that uses the document. |
| **New document** | Creates a document for the kind in use — **Name** (letters, digits, `-` and `_`) and **Description**. Its UBL XSLT points to `<name>.xsl`, to create in the [XSL editor](../ubl-tools/xsl-editor.md) if needed; the settings tried on the page stay pending, ready for **Save to document**. |

A scanned PDF (images without text) is refused with *no text found … (scanned or empty PDF?)*.

### JD Edwards PDF \{#jde-pdf\}

With **JD Edwards PDF**, the **Source** step adds two controls, and the **Lines** and **VAT summary** steps are hidden — the sections and fields come from the tags:

| Control | Description |
|---|---|
| **Manifest** | Server path of the manifest that names the tags; empty = data dictionary names. The folder button browses the server. |
| **Starter manifest** | Downloads a manifest built from the PDF, to complete. |

A PDF without JD Edwards tags shows *No JD Edwards tags in this PDF: it needs PDF compression turned off in the JDE INI.*

A JD Edwards PDF can also be processed directly from [Process Document](./document.md) on an XML-source document: it is converted with the document's invoice key and the manifest of its watched folder.

---

## Invoice \{#invoice\}

### Text PDF

| Control | Description |
|---|---|
| **Invoice number** | The element holding the invoice number. A number such as `36834.FU` (number then letters) or `FU-36834` is split into **Number** and **Type**, both read from the label printed before the value. |
| **Document type** | Shown when the number cannot be split: the fixed document type (e.g. `RI`). |
| **Several invoices** | For a PDF holding several invoices: the rule that gives one document per invoice number (*One invoice per PDF* when empty). **Split on this number** builds it from the label of the invoice number; the count then shows *N invoice(s)*. |

### JD Edwards PDF

| Control | Description |
|---|---|
| **Invoice key** | For a report that does not follow the standard invoice layout: the `section:field` holding the invoice number, shown with the number of distinct values. Gives one `<Invoice>` per value (burst key `Invoice`). *None (standard sections)* keeps the standard layout. |
| **Burst key**, **Document ID**, **Document type** | Picked among the elements of the XML. The count shows *N invoice(s)*. |

---

## Company \{#company\}

| Control | Description |
|---|---|
| **Find company by** | *Not searched*, *VAT number*, *SIRET* or *SIREN*. |
| **Identifier in the invoice** | Shown when the company is searched: the element holding the identifier. The page shows the company found among the [supplier companies](../ubl-tools/ubl-defaults/suppliers-companies.md) (`→ 00001`), or why none matches. |
| **Company** | When the company is not searched: a fixed company code for a text PDF, an element of the XML for a JD Edwards PDF. |

---

## Lines \{#lines\}

**Table start**, **Header rows** and **Table end** set the line table of a text PDF. The easiest way is to click the rows of the PDF, following the hint of the step:

1. *Click the first row of the table header*;
2. *Click the last row of the table header*;
3. *Click the first row after the lines*.

The page writes the three settings and converts again: the header rows are framed in indigo, the lines in green, the end row in red, and the count shows *N line(s) found*. **Start over** clears the clicks.

A table printed in several sections, each closed by a subtotal, needs one more setting: **Rows ignored**, a regex typed by hand (e.g. `^Sous total`) naming the rows inside the table that are not invoice lines. The table is then read to its end: set **Table end** on the row after the last section. The values printed on an ignored row stay available as fields of the document. When the header spans several rows (**Header rows** of 2 or more), each line also carries the title of its section, in `<Section>`. Left blank, the setting changes nothing; it can be tried on the page before saving.

---

## VAT summary \{#vat-summary\}

The same clicks set **VAT table start**, **Columns** and **VAT table end**: *Click the header row of the VAT summary*, *Click its last column* (one button per header cell — useful when another block is printed beside the summary), *Click the first row after the rates*. The rates become `<Recap_TVA>/<Ligne_TVA>`, and the count shows *N VAT rate(s) found*.

---

## Result \{#result\}

The **Result** step sums up what the document will process: *N invoice(s) · N line(s)*, the VAT rates found, and a **Download XML** button.

For a text PDF, a table lists **each invoice** of the PDF:

<svg viewBox="0 0 1200 262" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="p2xr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="p2xr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="p2xr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="p2xr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="222" rx="14" fill="url(#p2xr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Result</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">The XML the document will process.</text>
  <text x="240" y="92" fill="#4ade80" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">3 invoice(s) · 5 line(s)</text>
  <text x="240" y="114" fill="#f87171" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">2 invoice(s) to check</text>
  <text x="240" y="136" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">Montant_HT of the lines against Total_HT</text>
  <rect x="240" y="150" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="286.0" y="164.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Download XML</text>
  <rect x="470" y="80" width="470" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INVOICE</text>
  <text x="576" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAGES</text>
  <text x="628" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINES</text>
  <text x="680" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VAT RATES</text>
  <text x="764" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUM OF LINES</text>
  <text x="876" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOTAL</text>
  <rect x="470" y="112" width="470" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">36834.FU</text>
  <text x="576" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="628" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="680" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="764" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1200</text>
  <text x="876" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1200</text>
  <rect x="470" y="142" width="470" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">36835.FU</text>
  <text x="576" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2-3</text>
  <text x="628" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="680" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="764" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="876" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="470" y="172" width="470" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">36836.FU</text>
  <text x="576" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="628" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="680" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="764" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="876" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">300</text>
  <text x="764" y="158.5" fill="#f87171" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">550</text>
  <text x="876" y="158.5" fill="#f87171" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">600</text>
  <text x="628" y="188.5" fill="#f87171" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="470" y="220" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">A click on a row shows that invoice in the XML.</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Invoices to check</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no lines, or not adding up</text>
  <line x1="200" y1="113.0" x2="240" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2xr-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lines against total</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">column and total found alone</text>
  <line x1="200" y1="177.0" x2="240" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2xr-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lines don't add up</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sum and total in red</text>
  <line x1="1000" y1="137.0" x2="800" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2xr-arrow)"/>
  <rect x="1000" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">No lines read</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">check the table anchors</text>
  <line x1="1000" y1="207.0" x2="642" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2xr-arrow)"/>
</svg>

| Column | Description |
|---|---|
| **Invoice** | The first value of the invoice — usually its number. |
| **Pages** | The pages of the PDF the invoice covers (`2-3`); for a PDF holding one invoice, its number of pages. |
| **Lines** | The number of lines read; in red when none. |
| **VAT rates** | The number of rates read in its VAT summary. |
| **Sum of lines** | The sum of one amount column of the lines. |
| **Total** | The total of the invoice it is compared with. |

The column of the lines and the total are not settings: the page takes the pair that agrees on the most invoices — a column named like the total wins a tie — and names it above the table (*Montant_HT of the lines against Total_HT*). An invoice with no lines, or whose lines do not add up to its total, has its figures in red and is counted in *N invoice(s) to check*; *Lines agree with the total on every invoice* confirms the opposite. When no total matches the sum of the lines on any invoice, the page says so and only the invoices without lines are flagged.

A click on a row shows that invoice in the XML. The table can be searched, filtered and exported like the other lists of the application.

---

## Save to document \{#save\}

**Save to document** writes the pending settings to the document picked in the **Source** step. For a text PDF: table start, header rows, table end and rows ignored, VAT summary, invoice split, the number and type extraction rules, the company (or its lookup). A document without a burst key gets `Document`, one per invoice. For a JD Edwards PDF: the invoice key, burst key, document ID, type and company (or its lookup).

The *Unsaved changes* mark goes away once saved; a text PDF is then converted again with the saved settings. The same settings can be edited afterwards in the [PDF extraction](../management/documents.md#pdf-extraction) group of the document.

---

## How a text PDF is read \{#text-pdf-reading\}

The conversion rebuilds the page layout and writes what it reads: labelled values, party blocks, the line table, the VAT summary and every printed row. The general rules are listed under [What the XML holds](../management/documents.md#pdf-extraction); the cases below complete them.

### Invoices printed with their business-term codes \{#business-term-codes\}

Some layouts print, beside each value, the code of its business term in the standard: `Date d'échéance (BT-9)`, `Total TVA (BT-110)`, `Type de facture (BT-3)`. Such a layout is read by its labels:

- **The code is taken out of the label.** A `(BT-…)`, `(BG-…)` or `(EXT-FR-FE-…)` code, at the end of the label or in a cell of its own, is removed and the field is named after the label: `Date d'échéance | (BT-9) | 31/01/2027` gives `<Date_d_échéance>`. A code printed just below its label, at the start of the next row, still belongs to that label.
- **Text values are kept.** A coded label takes the next cell as its value, whatever it holds — currency, invoice type, payment means. When the next cell is another label, the field is written empty.
- **A code in parentheses also comes out on its own.** A value ending on a short code gives a second element named `…_code`: `Type de facture (BT-3) | Facture (380)` gives `<Type_de_facture>Facture (380)</Type_de_facture>` and `<Type_de_facture_code>380</Type_de_facture_code>`; `Euro (EUR)` gives `EUR`. For an electronic address printed as `@dresse électronique | 400208435 (0225)`, the element `Adresse_électronique` keeps the identifier and `…_code` its scheme.
- **Values printed on several rows are joined.** A long value wrapped under itself is read as one; a long unbroken token cut by the width of the column (an identifier, a reference) goes on without a space.
- **A row of codes under a table header** (`TVA | (BT-118) | (BT-119) | …`) is removed: it names the columns, it holds no value.

A URL, a URN or a colon inside a sentence in parentheses (`(ou : …`) is not taken for a *Label : value* pair.

### Party blocks \{#party-blocks\}

A party box whose first line is a block heading — *Vendeur*, *Client*, *Acheteur*, *Fournisseur*, *Émetteur*, *Destinataire*, *Facturé à*, *Livraison*, *Livré à* — writes that heading in `<Titre>`; the next line is the party's `<Nom>`. A city followed by a country code, `CITY, FR`, gives `<Ville>` and `<Pays>`.

### Line tables \{#line-tables\}

- **One cell per column.** A row with as many cells as the header has columns is read one cell per column, in order: a text left-aligned under a centred header goes to its own column, not to the one before it.
- **Name printed on two rows.** In a table read by position (header on several rows, values stacked on their line), a value wrapped above and below its line — a long name — stays in its column; the other stacked values of the line keep theirs and are not read as section titles.
- **Table continued on the next page.** The footer of the page and the header of the next page — the rows both pages print at the same height, digits aside (`Page 1 / 2`) — are not read as invoice lines.
- **Header printed again on a following page.** On an invoice of several pages, the header fields a following page prints again are read once: no second set of fields ending in `_2`.
- **VAT summary with a two-row header.** The other rows of a header printed on several rows are skipped before the first rate.

---

## Access

The page follows the **Process Document** page grant on the [Roles](../configuration/security/roles.md) page: a user who can process documents sees it.

---

## Tips & best practices

- **Start from a real PDF of each layout.** One sample per layout is enough to set the table, the VAT summary and the key. A PDF holding several invoices is better still: the **Result** step checks them all at once.
- **Click rather than type the anchors.** The page writes the shortest rule that finds the row, numbers turned into `\d+`, so the next PDF of the same layout matches too.
- **Check the Result step before saving.** Every invoice should have lines that add up to its total; an invoice in red points to an anchor that misses rows or to a table that goes on over a page.
- **Switch to the PDF view when a value looks wrong.** It shows the page as printed, beside the settings, to see whether a value is wrapped, stacked or printed in another block.
- **Search the company when one PDF layout serves several companies.** The lookup by SIRET, SIREN or VAT number avoids one document per company; an identifier missing from the supplier companies stops the invoice.
- **Use the AI Auto-Map for the values the converter merges.** Its [extraction rules](../ubl-tools/xsl-editor.md#ai-auto-map) are saved on the document and show up here on the next conversion.
