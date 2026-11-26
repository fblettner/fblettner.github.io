---
title: Documents
description: "NomaUBL Documents editor: configure, step by step in run order (Source, Identification, Enrichment, Rules, UBL, Output, Advanced), how each document type is read from an XML spool, a text PDF, a UBL invoice or a SQL / REST connector, given its activity and type, transformed to UBL and rendered as PDF."
keywords: [NomaUBL, documents, XPath, bursting, source, idPattern, cbc:ID, UHTMPL, UBL, XSL, PDF template, activity, type, rules, processing rules, ERP, JD Edwards, SAP, NetSuite, custom ERP, SQL connector, API connector]
---

# Documents

The **Documents** editor defines how NomaUBL turns a raw **source XML spool**, a **text PDF** or an **already-formed UBL invoice** into the record on which the rest of the platform operates. NomaUBL is **source-agnostic**: the same configuration model works whether the spool comes from **JD Edwards**, SAP, NetSuite, a custom ERP, or any other system that can emit XML, PDF or UBL. (Only the *Extract* and *BIP sync* features are JD Edwards-specific.)

Open it from **Management → Documents**. A document is edited through **steps shown as cards, in the order of a run**:

1. **Source** — where the data comes from: an XML spool, a text PDF, a UBL 2.1 invoice, or a **SQL or REST connector** that returns the data live without any file.
2. **Identification** — which document it is: activity, type, key, dates, amount, customer.
3. **Enrichment** — data missing from the spool, fetched from a connector.
4. **Rules** — activity and type by rule, and the processing rules (treat as another type, exclude).
5. **UBL** — the XSL chain to UBL 2.1, validation rule set, post-transform.
6. **Output** — attachments, readable PDF and its layout, reprocessing.
7. **Advanced** — threads.

---

## At a glance

<svg viewBox="0 0 1320 592" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="docst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="docst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="docst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="docst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="552" rx="14" fill="url(#docst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Documents</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Per-document templates that drive UBL transformation, processing options and the PDF layout.</text>
  <rect x="858" y="34" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="883.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add</text>
  <rect x="914" y="34" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="941.5" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Import</text>
  <rect x="975" y="34" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="997.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <rect x="1025" y="34" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1052.5" y="48.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <line x1="220" y1="76" x2="1100" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="234" y="88" width="190" height="470" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="242" y="96" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="110.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="242" y="128" width="174" height="38" rx="6" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="252" y="144" fill="#4a9eff" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">invoices</text>
  <text x="252" y="158" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">XML spool · issued</text>
  <rect x="242" y="172" width="174" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="188" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">credit_notes</text>
  <text x="252" y="202" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">XML spool · issued</text>
  <rect x="242" y="216" width="174" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="232" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">invoices-pdf</text>
  <text x="252" y="246" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">text PDF · issued</text>
  <rect x="242" y="260" width="174" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="276" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">received-ubl</text>
  <text x="252" y="290" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">UBL · received</text>
  <rect x="436" y="88" width="650" height="470" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="448" y="110" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="526" y="96" width="440" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="110.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Customer invoices from the ERP spool</text>
  <rect x="974" y="96" width="100" height="22" rx="5" fill="url(#docst-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1024.0" y="110.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <line x1="436" y1="128" x2="1086" y2="128" stroke="#1f2937" strokeWidth="1"/>
  <rect x="450" y="140" width="138" height="44" rx="9" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.4"/>
  <rect x="459" y="147" width="14" height="14" rx="4" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="479" y="158" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="459" y="175" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">XML · issued</text>
  <line x1="590" y1="162" x2="608" y2="162" stroke="#334155" strokeWidth="1.6"/>
  <path d="M608,162 l-5,-3 l0,6 Z" fill="#334155"/>
  <rect x="610" y="140" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="619" y="147" width="14" height="14" rx="4" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.55)" strokeWidth="1"/>
  <text x="639" y="158" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFICATION</text>
  <text x="619" y="175" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Activity STORES · type …</text>
  <line x1="750" y1="162" x2="768" y2="162" stroke="#334155" strokeWidth="1.6"/>
  <path d="M768,162 l-5,-3 l0,6 Z" fill="#334155"/>
  <rect x="770" y="140" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="779" y="147" width="14" height="14" rx="4" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.55)" strokeWidth="1"/>
  <text x="799" y="158" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENRICHMENT</text>
  <text x="779" y="175" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1 lookup(s)</text>
  <line x1="910" y1="162" x2="928" y2="162" stroke="#334155" strokeWidth="1.6"/>
  <path d="M928,162 l-5,-3 l0,6 Z" fill="#334155"/>
  <rect x="930" y="140" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="939" y="147" width="14" height="14" rx="4" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.55)" strokeWidth="1"/>
  <text x="959" y="158" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RULES</text>
  <text x="939" y="175" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 rule(s)</text>
  <rect x="450" y="196" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="459" y="203" width="14" height="14" rx="4" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.55)" strokeWidth="1"/>
  <text x="479" y="214" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UBL</text>
  <text x="459" y="231" fill="#f87171" fontSize="9" fontFamily="system-ui, sans-serif">No stylesheet</text>
  <line x1="590" y1="218" x2="608" y2="218" stroke="#334155" strokeWidth="1.6"/>
  <path d="M608,218 l-5,-3 l0,6 Z" fill="#334155"/>
  <rect x="610" y="196" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="619" y="203" width="14" height="14" rx="4" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1"/>
  <text x="639" y="214" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT</text>
  <text x="619" y="231" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Attachment none · re…</text>
  <line x1="750" y1="218" x2="768" y2="218" stroke="#334155" strokeWidth="1.6"/>
  <path d="M768,218 l-5,-3 l0,6 Z" fill="#334155"/>
  <rect x="770" y="196" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="779" y="203" width="14" height="14" rx="4" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1"/>
  <text x="799" y="214" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADVANCED</text>
  <text x="779" y="231" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Default</text>
  <line x1="436" y1="260" x2="1086" y2="260" stroke="#1f2937" strokeWidth="1"/>
  <rect x="450" y="270" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="508.5" y="284.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤒ Load XML sample</text>
  <text x="577" y="285" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">invoices_sample.xml — 142 paths</text>
  <rect x="1002" y="270" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1037.0" y="284.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Export</text>
  <line x1="436" y1="302" x2="1086" y2="302" stroke="#1f2937" strokeWidth="1"/>
  <text x="450" y="324" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="450" y="348" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="586" y="334" width="486" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="348.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">XML spool (XSL transform → UBL)  ▾</text>
  <text x="450" y="380" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Direction</text>
  <rect x="586" y="366" width="486" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="380.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Issued — operator is the seller (sales invoice)  ▾</text>
  <text x="450" y="418" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BURSTING (DOCUMENT ROOT)</text>
  <text x="450" y="442" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">JDE invoice key</text>
  <rect x="586" y="428" width="486" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="442.5" fill="#475569" fontSize="10" fontFamily="ui-monospace, monospace">11:3</text>
  <text x="450" y="474" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Burst Key</text>
  <rect x="586" y="460" width="452" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="474.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Invoice</text>
  <rect x="1046" y="460" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1059.0" y="474.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <text x="450" y="506" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">XML tag name used to split the spool into individual documents.</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Documents list</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">search · one card per document</text>
  <line x1="200" y1="157.0" x2="242" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Steps in run order</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each card shows its state</text>
  <line x1="200" y1="237.0" x2="450" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Load XML sample</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">.xml or .pdf → tag picker</text>
  <line x1="200" y1="317.0" x2="450" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Selected step's fields</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">here: Source, XML spool</text>
  <line x1="200" y1="457.0" x2="450" y2="418" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="1120" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1130" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes the document</text>
  <line x1="1120" y1="107.0" x2="1074" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="1120" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Steps of this source</text>
  <text x="1130" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">UBL: no Enrichment · Connector: …</text>
  <line x1="1120" y1="187.0" x2="908" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">State in red</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a value still to set</text>
  <line x1="1120" y1="267.0" x2="588" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the document as JSON</text>
  <line x1="1120" y1="347.0" x2="1072" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="1120" y="456" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="471" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tag picker</text>
  <text x="1130" y="484" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">once a sample is loaded</text>
  <line x1="1120" y1="473.0" x2="1059" y2="471" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
</svg>

---

## Steps of the editor \{#steps\}

Each card shows the step's name and its state in a few words; a value still to set shows in red. Clicking a card opens its settings under the strip. Steps that do not apply to the document's source are hidden.

| Step | What its card shows | Shown for |
|---|---|---|
| **Source** | The source and the direction, e.g. `XML · issued`. | Every source. |
| **Identification** | `Activity … · type …`, or **No activity** in red. | XML, PDF and UBL sources — not a connector source. |
| **Enrichment** | The number of lookups, or `None`. | XML, PDF and connector sources; a UBL source shows it only when lookups were set on it. |
| **Rules** | The number of rules (activity and type rules plus processing rules), or `None`. | Every source. |
| **UBL** | The file name of the UBL stylesheet, `Already UBL` for a UBL source, or **No stylesheet** in red. | Every source. |
| **Output** | `Attachment … · readable PDF …`. | Every source. |
| **Advanced** | The number of threads, or `Default`. | Every source. |

**Save** writes the whole document, whatever step is open.

---

## Load an XML sample (optional, recommended)

Under the steps, click **Load XML sample** and pick a representative spool file from your source system — or a PDF for a PDF-source document, converted server-side with the document's saved settings. Once loaded, every XPath field shows a small **⊞** browser button — clicking it opens a side drawer that lists all tag paths found in the sample, so you can pick the right tag without typing it. The drawer supports filtering and shows the value of each path as a hint.

The sample also feeds the *Dry run* of the [Enrichment](#enrichment) step and *Try on the sample* in the [Rules](#rules) step. **Export**, at the other end of the bar, downloads the document's settings as a JSON file.

You can configure documents without loading a sample, but the picker makes it much faster to avoid typos.

---

## Source \{#source\}

The first step tells NomaUBL **where the data comes from**.

### Source and direction

| Field | Values | Description |
|---|---|---|
| **Source** | `XML` (default) / `UBL` / `Connector` / `PDF` | Picks the input pipeline. **`PDF`** — a text PDF from any system, converted into a flat XML and then processed exactly like an XML spool — see [PDF extraction](#pdf-extraction). **`XML`** — an XML spool from any source system, transformed to UBL 2.1 by the XSL pipeline. **`UBL`** — files that are already UBL 2.1 invoices (your ERP emits UBL natively, or the file came from an upstream system in UBL form); no XSL transform runs. **`Connector`** — no file at all: NomaUBL calls a SQL query or a REST endpoint that returns the document, then runs the same XSL pipeline against the result. |
| **Direction** | `Issued` (default) / `Received` | What side of the transaction this template handles. **`Issued`** — invoices the operator emits to a customer. **`Received`** — invoices the operator gets from a supplier; the row's counterparty is the supplier party, the emit-only seller actions (Resend to PA, Send completed, Credit note…) are hidden in the detail modal, and the Invoices list shows the row under the *Received* filter chip. Set on the `received-ubl` bundled template by default. |

The Source choice changes the fields of this step and of the *Identification* step, and hides the steps that do not apply. The Direction field is independent: any combination of Source × Direction is valid, although *Received* is most often paired with *UBL* (PA-pushed supplier invoices).

:::info[Direction is stored on the row]
The Direction value is written once on the row at insert time (column `UHDRIN` on F564231 — `'1'` for received, `'2'` for issued). Changing the template's *Direction* afterwards does **not** re-classify the rows that already exist — the Invoices list filter, notification rules and e-Reporting envelopes read the frozen value, not the live template setting. Pick the right Direction before processing the first invoice on a new template; flip it later only if you accept that historical rows stay on the previous side.
:::

### Bursting (Document Root) *(when Source = XML or PDF)*

| Field | Description |
|---|---|
| **Burst Key** | XML tag name used to split the spool into individual documents. This element marks the **root of one document** — every occurrence in the spool produces one output document. |
| **JDE invoice key** | XML source only. JD Edwards PDF whose sections differ from the standard invoice print: `section:field` of the invoice number (e.g. `11:3`). Gives one `<Invoice>` per value, with the burst key `Invoice`. Set it from the [PDF to XML](../processing/pdf-to-xml.md) page. |

### PDF extraction *(when Source = PDF)* \{#pdf-extraction\}

With **Source = PDF**, the template takes a **text PDF** from any system — not only JD Edwards — and converts it into a flat XML that the [XSL editor](../ubl-tools/xsl-editor.md) maps like a spool. The conversion rebuilds the page layout and writes what it reads; it knows nothing about invoices. Scanned PDFs (images without text) are refused with an explicit error.

The **PDF extraction** group opens with an **Open in PDF to XML** button: it opens the [PDF to XML](../processing/pdf-to-xml.md) page on this document, where the table, the VAT summary, the invoice number and the company are set by clicking the rows of a sample PDF. The button is available once the document has a name.

<svg viewBox="0 0 1000 230" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pdfx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
  </defs>
  <rect x="20" y="40" width="190" height="150" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="115" y="70" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Text PDF</text>
  <text x="115" y="94" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">any generator</text>
  <text x="115" y="114" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">invoice, credit note…</text>
  <text x="115" y="150" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">scans refused</text>
  <line x1="212" y1="115" x2="270" y2="115" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#pdfx-arrow)"/>
  <rect x="274" y="20" width="300" height="190" rx="12" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="424" y="46" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Flat XML</text>
  <text x="294" y="74" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;Montant_TTC&gt;1189.55&lt;/Montant_TTC&gt;</text>
  <text x="294" y="94" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;TVA&gt; + &lt;TVA_taux&gt;</text>
  <text x="294" y="114" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;Lignes&gt;&lt;Ligne&gt;…</text>
  <text x="294" y="134" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;Adresse_1&gt; Nom · Rue · Ville</text>
  <text x="294" y="154" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;Textes&gt;&lt;Texte&gt;…</text>
  <text x="294" y="174" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;FichierPDF&gt;</text>
  <text x="294" y="196" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">+ regex fields of the template</text>
  <line x1="576" y1="115" x2="634" y2="115" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#pdfx-arrow)"/>
  <rect x="638" y="60" width="150" height="110" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="713" y="98" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">XSL</text>
  <text x="713" y="122" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">mapping like a spool</text>
  <line x1="790" y1="115" x2="830" y2="115" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#pdfx-arrow)"/>
  <rect x="834" y="60" width="146" height="110" rx="12" fill="rgba(50,215,75,0.06)" stroke="rgba(50,215,75,0.45)" strokeWidth="1.2"/>
  <text x="907" y="98" fill="#4ade80" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL 2.1</text>
  <text x="907" y="122" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">validate · store · send</text>
</svg>

#### What the XML holds

| What the PDF holds | What the XML gets |
|---|---|
| A row read as *Label : value* (or label and value in two columns) | One element named after the label — `Montant TTC 1 189,55 €` → `<Montant_TTC>1189.55</Montant_TTC>`. Amounts and percents use a dot decimal, `dd/MM/yyyy` dates become ISO, identifiers printed with spaces (VAT number, SIREN, postal code) are compacted. |
| A rate inside a label (`TVA 20,00%`) | A sibling element, so the name stays stable: `<TVA>198.26</TVA><TVA_taux>20.00</TVA_taux>`. |
| A value made of segments separated by ` / `, some carrying their own label (`VIREMENT / IBAN : FR76 … / BIC : CCBPFRPPBDX / Titulaire : ACME SA`) | The unlabelled part stays in the element and each labelled segment becomes a sibling — `Paiement`, `Paiement_IBAN`, `Paiement_BIC`, `Paiement_Titulaire` — each mappable on its own; grouping spaces inside the IBAN are removed. |
| A period (`01/09/2026 – 30/09/2026`) | Its two bounds as `<…_debut>` and `<…_fin>`, each mappable to its own UBL field. |
| A label printed with its business-term code (`Date d'échéance (BT-9)`) | One element named after the label, the code removed; the next cell is its value even when it is text, and a trailing code in parentheses (`Facture (380)`) also gives `<…_code>` — see [Invoices printed with their business-term codes](../processing/pdf-to-xml.md#business-term-codes). |
| The table between the start and end anchors | `<Lignes>/<Ligne>`, columns named after the header row (inferred from the first row when the header is a single cell); wrapped labels are merged, a ruled line closes the table. A table going on over a page break leaves out the page footer and the next page header — see [Line tables](../processing/pdf-to-xml.md#line-tables). |
| The party boxes | `<Adresse_N>` blocks — `Titre` (a heading such as *Vendeur* or *Client*), `Nom`, `Rue` lines, `Code_postal`, `Ville`, `Pays` (also read from `CITY, FR`), plus the labelled lines printed in the box (supplier code, SIRET, VAT, phone, e-mail). |
| Every printed row | `<Textes>/<Texte n="…" page="…">`, cells separated by ` \| `, so anything the rules above missed stays reachable by XPath. |
| The file itself | `<FichierPDF>` with its path — use `{FichierPDF}` as an [additional attachment](#additional-attachments) to embed the original PDF in the UBL. |

#### PDF extraction fields

The **PDF extraction** group sets the conversion:

| Field | Description |
|---|---|
| **Table start** | Regex matched on a row: that row's cells name the table columns (e.g. `PRESTATION \| Qté \| P.U. HT \| Montant HT`). |
| **Header rows** | Number of rows of a table header printed on several rows, the *Table start* row being the first (default `1`). The header is merged per column and cells stacked on a line are placed in their own column. With more than one row, the table stops at the first end anchor. |
| **Table end** | Regex matched on the first row after the table — the row itself is not part of it. |
| **Rows ignored** | Regex matched on the rows inside the table that are not lines, such as the subtotal closing a section (e.g. `^Sous total`): the table goes on after them, and their labelled values stay fields of the document. Case is ignored. With it, **Table end** is the row after the last section. Empty = no row ignored. |
| **Invoice split** | Regex whose first group is the invoice number, for a PDF holding several invoices (e.g. `N° de facture :\s*(\S+)`): one `<Document>` per number, each with its own pages. Empty = one invoice per PDF. |
| **VAT table start** | Regex on the header row of the VAT summary: its rows become `<Recap_TVA>/<Ligne_TVA>`, one per rate. Empty = no VAT summary read. |
| **VAT columns** | Header cells kept from the left, when another block is printed beside the summary. Empty = all. |
| **VAT table end** | Regex on the first row after the rates; empty = the first row without a value. |
| **Layout match** | Optional regex the page text must contain; a file that does not match is refused — useful when a folder mixes several layouts. |
| **Page match** | Optional regex: only the pages whose text matches are converted — a print holding a statement and the invoice keeps the invoice pages only. |
| **Field 1** … **Field 5** | `Name\|regex` run on the page text; the first group (else the whole match) becomes `<Name>`. Add `=>text` to rewrite the match, `$1` allowed — `Type_JDE\|^FACTURE=>F9`. Two fields may share a name when only one of them can match. |

The table, VAT summary, invoice number and company settings are easiest to set on the [PDF to XML](../processing/pdf-to-xml.md) page, by clicking the rows of a sample PDF.

#### A converted sample

```xml
<Document fichier="invoice-2026-0412.pdf" pages="1">
  <Numero>F2026-0412</Numero>
  <Date_document>2026-10-05</Date_document>
  <Période>01/09/2026 – 30/09/2026</Période>
  <Période_debut>2026-09-01</Période_debut>
  <Période_fin>2026-09-30</Période_fin>
  <TVA>198.26</TVA>
  <TVA_taux>20.00</TVA_taux>
  <Montant_TTC>1189.55</Montant_TTC>
  <Adresse_1>
    <Nom>ACME SERVICES</Nom>
    <Rue>12 rue des Lilas</Rue>
    <Code_postal>75011</Code_postal>
    <Ville>PARIS</Ville>
    <SIRET>80320631700015</SIRET>
  </Adresse_1>
  <Lignes>
    <Ligne><PRESTATION>Maintenance</PRESTATION><Qté>1</Qté><P_U_HT>991.29</P_U_HT><Montant_HT>991.29</Montant_HT></Ligne>
  </Lignes>
  <Textes>
    <Texte n="1" page="1">FACTURE | N° : F2026-0412</Texte>
  </Textes>
  <FichierPDF>/data/input/invoices/invoice-2026-0412.pdf</FichierPDF>
</Document>
```

The document editor and the XSL editor both **load a sample straight from a PDF** — the PDF is converted server-side with the template's saved settings (save the template first after changing the anchors). The [Process Document](../processing/document.md) page, the [watched folders](./watched-folders.md) and the command line process PDF-source templates like XML ones; `-pdf2xml <in.pdf> <out.xml> --text` converts a single file on its own (see [Command line](./command-line.md)).

### Connector source *(when Source = Connector)*

When *Source* is `Connector`, NomaUBL fetches the document data live from a [SQL connector](../configuration/sql-connectors.md) or an [API connector](../configuration/api-connectors.md) instead of reading a file. The same XSLT pipeline then turns the result into UBL — no spool, no file watcher, no transient directory.

Two patterns are supported:

| Mode | When to use it |
|---|---|
| **Single call** | One query / endpoint returns the header **and** the nested line array in one shot. Best when the source can join the header with its lines server-side (typical for a SQL view or a REST endpoint built for invoicing). |
| **Two calls** | One call returns the header, a second one returns the lines. Useful when the line endpoint accepts the header keys as parameters (`{customer}`, `{docNumber}`…) — line parameters can reuse any value returned by the header call via `{header.field}` placeholders. |

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', margin: '20px 0'}}>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '6px'}}>Header source</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Pick a SQL or API connector, then its query or endpoint. Optional parameters become the form fields shown on <em>Process Document</em>.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#22c55e', fontWeight: 700, marginBottom: '6px'}}>Lines source <em>(optional)</em></div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Leave empty for single-call mode. Otherwise pick a second connector — its parameters can read every value the header call returned, including the keys themselves.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#c084fc', fontWeight: 700, marginBottom: '6px'}}>Output shape</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>The connector response is materialised as an XML document with the same shape an XML spool would have, so the existing XSLT chain runs without change. Every XPath you already use still applies.</div>
  </div>
</div>

A connector-source document has no *Identification* step: its settings are the connector ones above. Use **Load connector sample** in the [XSL Editor](../ubl-tools/xsl-editor.md) to pull a real response so the XPath picker autocompletes against actual data.

Running a connector-sourced document is described on [Processing → Process Document](../processing/document.md): the page replaces the file picker with the parameter form derived from the header connector. The same parameters are passed from the CLI via repeatable `--param key=value` arguments (see [Command Line](./command-line.md)).

### UBL source: input folder and routing *(when Source = UBL)*

A UBL-source template reads its **own** input folder `<input>/<template>` — the same per-template convention as an XML template — so several UBL templates can run on schedule against different folders. A UBL file that processes successfully is removed from the folder; a file that fails, and validation-only runs, keep it.

Each UBL invoice is validated and routed by **its own** transaction type — B2B, B2G, B2C or B2B international — read from the invoice's routing note, so a batch mixing types is handled file by file. A file that carries no routing note uses the template's default document type.

---

## Identification \{#identification\}

This step tells NomaUBL **which document it is**: its activity and type, its key, and the functional data read from the spool. Its fields depend on the source; it is not shown for a connector source.

### Document Identification *(when Source = XML or PDF)*

NomaUBL uses these five fields to know **which document it is**, who owns it, and what business type it belongs to. Each field takes an XML tag and a default for cases where the tag is absent.

| Field | Maps to source-system concept |
|---|---|
| **Activity** | Business activity / module the document belongs to. |
| **Type** | Document type code as known in NomaUBL. |
| **Document ID** | Invoice number / document number. |
| **Document Type (JDE)** | Document type as defined in the source system (named after JD Edwards' RI/RM codes, but works with any source value). |
| **Company (JDE)** | Company / business unit owning the document in the source system (legacy field name, applies to any ERP). |

The activity and type found here can be replaced, document by document, by the [activity and type rules](#activity-and-type-rules) of the *Rules* step.

### Document Data (XPath) *(when Source = XML or PDF)*

Functional data NomaUBL reads from the spool to populate the UBL invoice and to drive routing.

| Field | Description |
|---|---|
| **Find company by** | *Company (JDE) above* (default) / *VAT number* / *SIRET* / *SIREN*. Searches the [supplier companies](../ubl-tools/ubl-defaults/suppliers-companies.md) with the identifier read from **Identifier element**, and adds the company found as `<CompanyCode>` (map `TAG_COMPANY_CODE` to `CompanyCode`). A SIRET without a match falls back to its SIREN. **No match stops the invoice**, with the reason in the processing log (*… not found in the supplier companies*, *… is on several supplier companies*). |
| **Identifier element** | Element holding the identifier searched (e.g. `TaxId2_ID7`). Shown once *Find company by* is set. |
| **Customer Number** | Customer / address book number. |
| **Amount** | Document gross amount. |
| **Document Date** | Issue date of the document. |
| **Due Date** | Payment due date. |
| **Routing Code** | Code used to route the document to the correct **delivery channel**: archive, email, postal mail, dispatch to a Plateforme Agréée, etc. |
| **Office** | XML tag in the spool that contains the **office / business unit** code. |
| **Processing Type** | XML tag carrying the processing-type code (B2B, B2BINT…). Leave empty to fall back to the **default defined in Document Types**. |

> 💡 Each Document Data field has its own **default value**. Defaults are used when the XML tag is missing or empty, which is useful when a value is constant for a given template.

### Date format *(when Source = XML or PDF)*

| Field | Default | Description |
|---|---|---|
| **Input format** | `yyyy-MM-dd` *(ISO)* | Pattern used to parse the **document and due dates** extracted from the source XML before they are written to `F564230` / `F564231`. UBL sources are always ISO (the XSL emits ISO); on XML sources the spool format is locale-dependent (`dd/MM/yyyy` for many French ERPs, `MM/dd/yyyy` for North-American spools, etc.). |

Pick the pattern that matches the source dates literally. The list offers:

| Source date sample | Pattern |
|---|---|
| `2024-12-31` | `yyyy-MM-dd` *(default — ISO)* |
| `31/12/2024` | `dd/MM/yyyy` |
| `31/12/24` | `dd/MM/yy` |
| `12/31/2024` | `MM/dd/yyyy` |
| `31-12-2024` | `dd-MM-yyyy` |
| `20241231` | `yyyyMMdd` |

UBL sources keep emitting ISO through the XSL, so the field does not apply to them.

### Document Identification *(when Source = UBL)* \{#document-identification-ubl\}

A UBL file carries no spool to extract from, so the **Activity** and **Type** that the XML source pulls by XPath are entered here as plain text. Both fields are **mandatory** — they are written to the `F564230` tracking row that the PA send and fetch-import rely on.

| Field | Description |
|---|---|
| **Activity** | The activity code stamped on the row (e.g. `UBL`). Stored in `F564230.FEAA10`. |
| **Type** | The document type (e.g. `FACTURE`). Stored in `F564230.FEAA20`. |

These two values can be replaced per invoice by the [activity and type rules](#activity-and-type-rules), which read the UBL itself (seller, buyer, type code, currency…).

:::info[Why the row matters]
The UBL-source pipeline inserts the same `F564230` tracking row the XML pipeline produces, reading the rest of its values straight from the UBL: BT-47 buyer SIREN → `FEALKY`, BT-115 PayableAmount → `FEAEXP`, BT-2 IssueDate → `FEIVD`, BT-9 DueDate → `FEARDU`. Without it the PA send would have no row to stamp with its transaction id, `FEUKIDSZ` would stay empty and fetch-import would have nothing to poll. Replace mode updates the existing row instead of duplicating it; non-replace mode skips an already-processed invoice with the usual warning.
:::

### Document key *(when Source = UBL)* \{#key-extraction-from-cbcid-when-source--ubl\}

The **Document key (doc / dct / kco)** group decides how a UBL document gets its `(doc, dct, kco)` primary key — the same triplet that identifies the document everywhere else in NomaUBL. The **Key mode** selector offers two ways:

| Key mode | Behaviour |
|---|---|
| **From cbc:ID (regex pattern)** *(default)* | The key is parsed from the invoice's `cbc:ID` with a regex — see below. |
| **Sequence (NomaUBL numbers the document)** | NomaUBL hands out the document number itself, under a fixed document type and company. |

**Find company by** — *As configured below* (default) / *VAT number* / *SIRET* / *SIREN* / *VAT, then SIREN, then SIRET*: searches the [supplier companies](../ubl-tools/ubl-defaults/suppliers-companies.md) with the seller's identifier in the UBL (the buyer's when the direction is `R`) to set the company. No match stops the document.

#### Sequence mode

Meant for **received invoices**, whose `cbc:ID` follows each supplier's own format, and usable for emitted UBL when the numbering format is not known.

| Field | Description |
|---|---|
| **Document type (dct)** | Fixed JDE document type of the sequence — `II` (incoming invoice) when empty. Pick a type JD Edwards does not use for the same company. |
| **Company (kco)** | Fixed company code. Required. |
| **Sequence start** | First number handed out; afterwards, one above the highest number stored for this document type and company. |

The supplier's invoice number stays stored as the **UBL number** (BT-1). Each processing hands out a new number: a document received twice gets two numbers.

#### From cbc:ID (regex pattern)

The key is parsed from the invoice's `cbc:ID` via a regex with **named groups**. There is no filename convention to follow; the file can be named anything.

| Field | Description |
|---|---|
| **ID Pattern** | Regex applied to `cbc:ID`. Allowed groups: `doc`, `dct`, `kco`. Any subset is allowed; missing groups fall back to the defaults below. |
| **doc default** | Used when the regex does not match or the `doc` group is missing. |
| **dct default** | Used when the `dct` group is missing. |
| **kco default** | Used when the `kco` group is missing — common when the `cbc:ID` does not include a company code. |

#### Sample cbc:ID + Suggest + Test helper

To avoid writing the regex by hand, the section includes a small inline assistant:

| Action | Effect |
|---|---|
| **Sample cbc:ID** | Paste a real ID from one of your invoices (e.g. `38706889RI00001` or `F202600025`). |
| **Suggest** | Generates an `idPattern` by splitting the sample on letter / digit transitions, fills in the matching defaults, and runs *Test* on the result. |
| **Test** | Runs the current `idPattern` + defaults against the sample and shows the extracted `(doc, dct, kco)` live — green when it matches, red on a regex error. |

Worked examples:

| Sample | Suggested `idPattern` | Defaults | Extracted |
|---|---|---|---|
| `F202600025` | `^(?<dct>[A-Z]+)(?<doc>\d+)$` | `kcoDefault = 00001` | `doc=202600025`, `dct=F`, `kco=00001` |
| `38706889RI00001` | `^(?<doc>\d+)(?<dct>[A-Z]+)(?<kco>\d+)$` | (none) | `doc=38706889`, `dct=RI`, `kco=00001` |

### Document number lookup *(when Source = UBL)*

On a **Received** template, the UBL's `cbc:ID` is the *supplier's* invoice number — not the operator's internal key. The regex on `cbc:ID` then no longer makes sense: the operator needs to look the internal `(doc, dct, kco)` triplet up from supplier-side fields (UBL number, supplier name, supplier VAT, etc.).

The **Document number lookup (received invoices)** group, at the end of the *Document key* group, wires the lookup against a [SQL connector](../configuration/sql-connectors.md) or an [API connector](../configuration/api-connectors.md).

| Field | Description |
|---|---|
| **Connector** | Name of the SQL or API connector that holds the lookup query / endpoint. |
| **Endpoint / query** | The named query (SQL) or endpoint (API) on that connector. It must return the `doc`, `dct` and `kco` fields (names set below). |
| **Parameters** | Semicolon-separated `key=value` pairs, e.g. `ublNumber={ublNumber};supplierVat={supplierVat}`. Placeholders read from the UBL: `{ublNumber}`, `{issueDate}`, `{supplierName}`, `{supplierVat}`, `{supplierEndpoint}`, `{currency}`. |
| **doc field** / **dct field** / **kco field** | Response fields that hold the resolved `doc`, `dct` and `kco` (default `doc`, `dct`, `kco`). |

When the group is filled in, the regex on `cbc:ID` is bypassed and the connector's answer gives the key. Leave the group empty to keep the regex assistant and the `(doc, dct, kco)` defaults above.

The bundled `received-ubl` template ships with this group **present but empty**: pick the connector and the endpoint, fill in the parameters, and the receive-side flow is wired end-to-end.

---

## Enrichment \{#enrichment\}

When the source spool is missing data the invoice needs — a customer's VAT number, a label from a reference table — the **Enrichment** step fetches it from a [SQL](../configuration/sql-connectors.md) or [API connector](../configuration/api-connectors.md) and injects it into the spool **before** the XSL transform runs. The fetched values then map in the [XSL editor](../ubl-tools/xsl-editor.md) like any other spool field, and are archived with the source. A UBL source is not enriched: the step is hidden for it unless lookups were set on it.

Each **rule** describes one lookup:

| Setting | What it does |
|---|---|
| **Scope** | An XPath that picks where the rule applies — the whole document, or a repeating node such as each invoice line. Fields from that scope feed the lookup, and the results are written back inside it. |
| **Connector + query / endpoint** | The SQL query or REST endpoint to call. |
| **Parameters** | Fields taken from the scope, sent as query / endpoint parameters. |
| **Output** | Each returned column / field → the name of the new element written into the spool. |
| **Target** | Where the new elements land — on the scope node itself, in a new group, or in an existing group. |
| **Result** | A single flat set of fields, or a repeating group (one child per returned row). |

Rules run in order, so a later rule can use what an earlier one added; identical lookups are cached, so the connector is called once per distinct key. The enriched spool is stored with the archived source (`F564230`), so a reprint doesn't call the connector again. A full reprocess queries it again, and the enrichment then **replaces** the rows of the previous run instead of adding to them (single-row rules already overwrote their fields). Nothing runs unless a rule is configured.

**Dry run** — with a sample spool loaded, *Dry run* tries the rules against it: it calls the real connectors and shows the enriched XML, a summary and any warnings, without changing anything. Download the result (named after the sample, e.g. `26000001CG00005_enrich.xml`) to build the XSL mapping straight away.

---

## Rules \{#rules\}

The **Rules** step holds two lists, read in this order when a document is processed:

1. **Activity and type** — gives the document an activity, a type or both, from what it contains.
2. **Processing: treat as another type, or exclude** — routes the document to another document type, or only records it.

<svg viewBox="0 0 1320 582" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="docru-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="docru-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="docru-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="docru-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="546" rx="14" fill="url(#docru-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ACTIVITY AND TYPE</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Applied when the document is processed. Rules are read from top to bottom: the first one that matches and gives an activity sets it, same for the type.</text>
  <text x="240" y="77" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">With no match the document keeps the activity and type of its Identification step. A save by hand in the invoice or document window never changes them.</text>
  <rect x="240" y="90" width="840" height="104" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="98" width="590" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Store sales</text>
  <rect x="850" y="98" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="863.0" y="112.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="880" y="98" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="112.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="910" y="98" width="86" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="953.0" y="112.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Remove</text>
  <text x="252" y="145" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">if</text>
  <rect x="286" y="130" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="296" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Element of the document…  ▾</text>
  <rect x="552" y="130" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">=  ▾</text>
  <rect x="708" y="130" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="718" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Invoice_Header/Channel</text>
  <rect x="914" y="130" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">STORE</text>
  <rect x="1044" y="130" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="144.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <text x="252" y="175" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">then</text>
  <text x="286" y="175" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">activity</text>
  <rect x="340" y="160" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="174.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">STORES  ▾</text>
  <text x="520" y="175" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">type</text>
  <rect x="552" y="160" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="174.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">B2C</text>
  <rect x="710" y="160" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="765.0" y="174.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add condition</text>
  <rect x="240" y="202" width="840" height="134" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="210" width="590" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="224.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Central billing</text>
  <rect x="850" y="210" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="863.0" y="224.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="880" y="210" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="224.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="910" y="210" width="86" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="953.0" y="224.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Remove</text>
  <text x="252" y="257" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">if</text>
  <rect x="286" y="242" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="296" y="256.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Company (societeJDE)  ▾</text>
  <rect x="552" y="242" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="256.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">=  ▾</text>
  <rect x="708" y="242" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="718" y="256.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">00001</text>
  <rect x="1044" y="242" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="256.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <text x="252" y="287" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">and</text>
  <rect x="286" y="272" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="296" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Customer number (numClient)  ▾</text>
  <rect x="552" y="272" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">not in list  ▾</text>
  <rect x="708" y="272" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="718" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">C9001, C9002</text>
  <rect x="1044" y="272" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="286.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <text x="252" y="317" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">then</text>
  <text x="286" y="317" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">activity</text>
  <rect x="340" y="302" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="316.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">CENTRAL  ▾</text>
  <text x="520" y="317" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">type</text>
  <rect x="552" y="302" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="316.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">B2B</text>
  <rect x="710" y="302" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="765.0" y="316.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add condition</text>
  <rect x="240" y="346" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="279.0" y="360.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add rule</text>
  <rect x="326" y="346" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="390.0" y="360.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Try on the sample</text>
  <text x="464" y="361" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Invoice (first) → activity STORES (rule “Store sales”) · type B2C (rule “Store sales”)</text>
  <line x1="240" y1="386" x2="1080" y2="386" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="408" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PROCESSING: TREAT AS ANOTHER TYPE, OR EXCLUDE</text>
  <text x="240" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Evaluated per document after the document type is resolved; the first matching rule wins, no rule = normal processing.</text>
  <rect x="240" y="438" width="840" height="76" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="446" width="370" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="460.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Gratuities</text>
  <rect x="628" y="446" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="638" y="460.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Treat as document type  ▾</text>
  <rect x="804" y="446" width="110" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="859.0" y="460.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ARCHIVEONLY  ▾</text>
  <rect x="920" y="446" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.0" y="460.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="950" y="446" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="963.0" y="460.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="980" y="446" width="86" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1023.0" y="460.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Remove</text>
  <text x="252" y="493" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">if</text>
  <rect x="286" y="478" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="296" y="492.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Invoice amount (montant)  ▾</text>
  <rect x="552" y="478" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="492.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">is zero / empty  ▾</text>
  <rect x="240" y="522" width="840" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="660.0" y="536.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add rule</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule name</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shown in the processing log</text>
  <line x1="200" y1="117.0" x2="250" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Conditions</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">all must hold (if … and …)</text>
  <line x1="200" y1="177.0" x2="286" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activity and / or type</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">empty = unchanged</text>
  <line x1="200" y1="253.0" x2="340" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="20" y="448" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="463" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Processing rules</text>
  <text x="30" y="476" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">treat as another type · exclude</text>
  <line x1="200" y1="465.0" x2="240" y2="476" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Order matters</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">↑ ↓ — first match per value</text>
  <line x1="1120" y1="117.0" x2="863" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="1120" y="276" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Element or path</text>
  <text x="1130" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked in the loaded sample</text>
  <line x1="1120" y1="293.0" x2="800" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="1120" y="377" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="392" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Try on the sample</text>
  <text x="1130" y="405" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">which rule applies, and why</text>
  <line x1="1120" y1="394.0" x2="840" y2="357" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
</svg>

### Activity and type by rule \{#activity-and-type-rules\}

A single document template often receives documents that do not all belong to the same activity. The canonical case is a spool that **mixes B2B and B2C** invoices: the store sales should land under the activity *Stores* with the type `B2C`, the central billing under *Central* with the type `B2B`. Instead of one template per case, the rules read each document and set its activity and type.

Each rule has a name (shown in the processing log), one or more conditions (*if … and …*, all must hold) and a result:

| Result | Description |
|---|---|
| **activity** | An activity code from the [`list-activite`](../configuration/custom-lists.md) list, or a code typed by hand (10 characters max). `— unchanged —` leaves the activity as it is. |
| **type** | The document type, typed by hand (20 characters max). Empty = unchanged. |

A rule needs at least one condition and an activity or a type: a rule without result is not saved (the editor says so in red).

#### How the rules are read

- Rules are read **from top to bottom**; **↑** / **↓** reorder them. The first rule that matches **and gives an activity** sets the activity; the first one that matches **and gives a type** sets the type — so one rule can set the activity and a later one the type.
- With **no match**, the document keeps the activity and type of its [Identification](#identification) step (the tag read in the spool, or the default).
- The rules run **when the document is processed**, in both pipelines: spool (XML, PDF, connector) and UBL. The values they give are written to the document's tracking row (`F564230`).
- A **save by hand** — from the invoice window or the document window — never runs them: the stored activity and type stay as they are.
- The [processing rules](#processing-rules) below are evaluated afterwards, so they can test the activity set by a rule.

#### Conditions

The fields offered depend on the source:

| Source | Fields |
|---|---|
| **XML, PDF, connector** | JDE document type (typeJDE), Company (societeJDE), Invoice amount (montant), Customer number (numClient), Document number, **Element of the document…** — any element of the spool, as an element name or a path. |
| **UBL** | Seller legal registration identifier, Seller VAT identifier, Buyer legal registration identifier, Buyer country code, Invoice type code, Credit note type code, Invoice currency code, Buyer reference, **Other element of the UBL…** — any element, as a path of element names (prefixes ignored, e.g. `AccountingCustomerParty/Party/PartyName/Name`). |

The operators are those of the processing rules: in list / not in list (`A, B`), `=`, `≠`, is zero / empty, is not zero, `<`, `>`, is empty, is not empty, matches regex. With a sample loaded, the **⊞** button beside an element field picks the element in the sample.

#### Try on the sample

With a sample loaded, **Try on the sample** runs the rules being edited — saved or not — on it and says which rule applies: for a spool, on the first element of the document's *Burst Key*; for a UBL, on the invoice itself. The answer reads, for example, `Invoice (first) → activity STORES (rule “Store sales”) · type B2C (rule “Store sales”)`, or *no rule, the document's own value applies* for a value no rule sets. Nothing is written.

:::info[Type of the document and transaction type]
The type given by a rule is the **Type** of the *Identification* step. The transaction type that drives validation and sending (B2B, B2C, B2BINT… — see [Document Types](../configuration/system/document-types.md)) is read from the *Processing Type* tag, or set by a *Treat as document type* processing rule below.
:::

### Processing rules \{#processing-rules\}

The **Processing: treat as another type, or exclude** list routes the documents of the XML pipeline **before anything is generated**. Each rule combines one or more conditions on the document with one outcome. Rules are evaluated per document once its document type is resolved, **in order — the first match wins**; no matching rule means normal processing. They apply to every XML ingestion path: scheduler, [watched folders](./watched-folders.md), *process*, *fetch-single* and *Fetch Input*. The list is not shown for a UBL source — the transaction type of a UBL document is already written in it.

| Outcome | Effect |
|---|---|
| **Treat as document type** | The document continues as the chosen [document type](../configuration/system/document-types.md), with that type's send / validate / mode / keep settings — e.g. a zero-amount gratuity routed to `ARCHIVEONLY`. The document also carries that type as its transaction type in the UBL (the `#BAR#` / `#ADN#` routing note): the **Doc. Type** column of the lists, the statistics, the type and the archive-only flag given to the platform, the public-sector checks and [e-reporting](../application/ereporting.md) follow the rule. A rule that moves B2C or international B2B invoices to another type takes them out of the e-reporting declaration. |
| **Exclude (record only)** | The document is only recorded: its source is archived and its header stored, with the status **Excluded by rule** (`9914`, the message being the rule name) and a lifecycle event. It is visible in the invoice list and counted by the integrity checks, but never validated, output nor sent. |

**Conditions** — every condition of a rule must match (*if … and …*). Fields: JDE document type, resolved document type, processing type (raw spool value), invoice amount, company, activity code, type piece, customer number, document number, or **XPath on the document…**. Operators: in list / not in list (`RM, RX`), `=`, `≠`, is zero / empty, is not zero, `<`, `>`, is empty, is not empty, matches regex. **↑** / **↓** reorder the rules; the rule name shows in the log and in the status message.

**XPath on the document…** takes an element name or a path, read from the document's root element (the *Burst Key* element):

- a bare name (`Code_Nature_ID12`) is the first element of that name anywhere in the document;
- a path (`Invoice_Header/Document_Type`), a predicate or an attribute is evaluated as an XPath from the document's root; a path that starts with the root's own name is read from it too;
- a path that finds nothing falls back on its **last element name**, searched anywhere in the document.

---

## UBL \{#ubl\}

This step sets the XSL chain that produces the UBL 2.1 and how it is validated. Several fields (XSL, RTF) are only meaningful on the XML pipeline.

### XSL Transformation

| Field | Values | Description |
|---|---|---|
| **Transform** | `Y` / `N` | Whether to apply an XSL transformation pipeline before generating UBL. |
| **XSL Pre-processing** | path | Optional XSL applied before indexation, e.g. to normalise the raw source XML (JD Edwards, SAP, NetSuite, custom ERP…). It must be **safe to run twice**: a reprocess replays the archived source, which already went through it — guard every element the XSL adds with `not(...)` so a second pass adds nothing. |
| **XSL Indexation** | path | XSL used to generate the indexation / metadata applied to the document. Produces an XML file paired with the generated PDF for indexing purposes. |
| **RTF Template** | path | RTF template used by BI Publisher to render the human-readable PDF. A document without an RTF template, run with no processing mode set anywhere, produces its UBL only. |

### UBL settings \{#ubl-settings\}

| Field | Values | Description |
|---|---|---|
| **UBL XSLT** | path | XSL transform from the source XML to **UBL 2.1**. The placeholder `%APP_HOME%` is expanded to the NomaUBL install root. Its file name is the state shown on the *UBL* card. |
| **Invert sign** | `N – No` (default) / `Credit notes only` / `All documents` | Flips the sign of the amounts read from the source: line net amounts, document totals, prepaid and rounding amounts, total VAT and every VAT breakdown row. The unit price is always emitted as a positive value, allowance and charge amounts are read as absolute values, and the quantity takes the sign of its line amount. *Credit notes only* applies to documents resolved as `381`, `396`, `261`, `262`, `502` or `503`. A spool that prints a credit note with negative amounts thus yields the positive CreditNote the standard expects, with no change to the document XSL. |
| **Custom Schematron** | path(s) | One or more **precompiled** Schematron stylesheets (`.xsl`, comma-separated, `%APP_HOME%` / `%ENV%` accepted) holding this customer's own rules — a mandatory classification, a buyer-reference pattern… They run **after** the standard packs, on this template only, so customer rules never touch the shipped packs the upgrade refreshes. A stylesheet is loaded once per file stamp: an edited file is picked up on the next validation without a restart. Findings land in the validation errors under a short source derived from the file name (`BR-ACME-rules.xsl` → `ACME`); a missing or broken file is reported as an error on the invoice. Batch and single processing, the *Validate* button and the validate API all honour it. |
| **Rule set** | *(blank = derived)* / `EN 16931 basic` / `EN 16931` / `France extended (CTC)` | The standard the document is produced under: the validation packs and the required fields shown in the XSL editor's mapping tab come from this set. Blank keeps the choice derived from the customization id of the UBL defaults. See [Rule sets](../ubl-tools/rule-sets.md). |
| **Post-transform** | path | Stylesheet run on the validated UBL to write another syntax next to it — for example the shipped `ubl-to-cii.xsl` (UBL to CII D16B). Blank = none. See [Post-transform](../ubl-tools/post-transform.md). |
| **Post-transform output** | suffix, default `-cii.xml` | Replaces the `.xml` of the UBL file name; the download of the invoice and document windows uses the same name. |
| **Post-transform name** | text | Short name of the converted syntax on the download buttons (`CII` → *Download CII*). The platform connector can send the converted file with `{{derivedContent}}` / `{{derivedFilePath}}`. |

---

## Output \{#output\}

This step sets what goes with the UBL — the main PDF, the readable copy, extra attachments — and whether an invoice can be reprocessed.

### Attachments and reprocessing

| Field | Values | Description |
|---|---|---|
| **Attachment** | `— None` / `create` / `attach` / `generate` | How the main PDF is associated with the UBL. `create` = render via RTF / BI Publisher and embed it. `attach` = reuse a PDF already in the input directory. `generate` = render the PDF with the [PDF-template designer](./pdf-templates.md) and attach it as a **PJA** (`cac:AdditionalDocumentReference`) — use it when the designed PDF isn't a compliant French readable copy. Empty = no PDF. Independent of **LISIBLE** below. For a PDF source, `source` attaches the input PDF itself as a **PJA** — with *Invoice split*, only that invoice's pages. |
| **LISIBLE** | `Y` / `N` / `source` | When `Y`, render a readable PDF from the UBL through the resolved PDF template and embed it as the LISIBLE copy (`cbc:ID="LISIBLE"`). Independent of *Attachment* — both can be on. For a PDF source, `source` embeds the input PDF as the LISIBLE copy instead of a rendered one — with *Invoice split*, only that invoice's pages. The input PDF is not kept after processing, so a full reprocess cannot embed it again. |
| **Allow reprocess** | `Y` / `N` (default `N`) | When `Y`, invoices produced from this template can be **reprocessed** — rebuilt from the source archived at first processing (source XML, or the XML produced from a PDF source) — when they were **deposited but not transmitted** (status 200, reason `NON_TRANSMISE`). Reprocessing regenerates the e-invoice, PDF and XML, keeps the invoice's current status, records a *Retraitement* entry in its history and never re-sends to the platform; each invoice is reprocessed once. XML and PDF sources. Triggered from the [Invoices list](../application/invoices.md#reprocess), the [IT dashboard](../application/tech-dashboard.md#to-reprocess) or the CLI; the full set of conditions is in the [reprocess rules](../application/invoices.md#resend-reprocess-rules). |
| **Allow full reprocess** | `Y` / `N` (default `N`) | When `Y`, an invoice in *Validation failed* (`9905`) can be **reprocessed in full** from its archived source once the data was corrected at the source: the enrichment is queried again, the UBL regenerated, validated and sent to the PA when the template and document type say so. The status history is kept and a reprocess marker opens a new cycle. XML and PDF sources. Triggered from the invoice window (*Reprocess* button on a `9905`), the [Invoices list](../application/invoices.md#reprocess), the [IT dashboard](../application/tech-dashboard.md#to-reprocess-full), the API (`kind: "full"`) or `-reprocess --full`. |

### PDF Template

The **PDF Template** group picks the **PDF layout** applied when this document is rendered. Layouts are shareable resources edited on the dedicated [PDF Templates](./pdf-templates.md) page — this field simply references one of them **by name** via the template's `pdfTemplate` property.

| Field | Description |
|---|---|
| **Template** | Dropdown listing every saved layout (the `pdf-template` resources from *PDF Templates*), plus the bundled `built-in`. Leave empty to fall back to the global default (`global.defaultPdfTemplate`); empty + no global default falls back to `built-in`. |

The resolution chain at render time is therefore: this field → `global.defaultPdfTemplate` → `built-in`. Every stored invoice carries the document name in `F564231.UHTMPL`, so the PDF generator re-renders on demand against the layout that was active for that document.

:::tip[Editing the layout itself]
The visual editor — section list, per-section drawer, live preview, block sections — lives on [Management → PDF Templates](./pdf-templates.md). Open it once to author or tune a layout, then come back here to point the document at it. A single layout can serve many documents.
:::

### Additional Attachments \{#additional-attachments\}

Beyond the main human-readable PDF, a document type can embed **extra files into the UBL** — a delivery note, a purchase order, bank details, an annex. Add one row per file:

| Field | Description |
|---|---|
| **Code** | The attachment's business code, picked from a dropdown (delivery note, purchase order, RIB, annex…). It tags the embedded file inside the UBL so the recipient knows what each attachment is. |
| **Path** | Where to read the file from. Supports the path placeholders `%APP_HOME%`, `%ENV%`, `%DOCNAME%`, `%KCO%`, `%DOC%`, `%DCT%` and any `{{token}}` from the invoice catalogue, so the path resolves per invoice — e.g. `%APP_HOME%/cgv/CGV_{{kco}}.pdf`. A single-brace `{…}` reads a value from the source spool, e.g. `%APP_HOME%/pj/{Attachment_ID}.pdf`. |

A single-brace placeholder reads the spool the same way as the *XPath on the document…* field of a [processing rule](#processing-rules): an element name, or a path such as `{Invoice_Header/Attachment_ID}` read from the document's root, falling back on its last element name when the path finds nothing.

The **`{ }`** button next to the path field opens a searchable token list and inserts the chosen token at the cursor — the invoice catalogue tokens (`{{kco}}`, `{{fedoc}}`, …) and the path constants `%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%` — so you don't have to remember the exact spelling. **Add attachment** adds another row.

:::info[UBL-source templates embed attachments too]
A template with *Source = UBL* embeds the same PDFs as the XML flow — after validation and before the database insert, so the stored UBL matches what is sent to the PA:

- **Attachment `attach`** embeds a sibling PDF from the input directory under `cbc:ID="PJA"`.
- **The readable PDF (`lisible`)** is rendered straight from the parsed UBL by the PDF engine and embedded under `cbc:ID="LISIBLE"` (DocumentTypeCode 916).
- **Additional Attachments** loop exactly as above; the path tokens resolve per invoice.

`attachment=create` is not supported for a UBL source — it needs BI Publisher rendering from a source XML, which a UBL file doesn't have. Use `attach` or `lisible` instead.
:::

### No-data key and locale

| Field | Description |
|---|---|
| **No-Data Key** | Name of an XML element that **must exist** in the spool. If absent, NomaUBL considers the document empty and skips it. Useful to filter out spool sections that aren't real invoices. |
| **Set Locale** | Locale used to render the PDF (e.g. `en_US`, `fr_FR`). Affects date and number formatting in the PDF only. |

---

## Advanced \{#advanced\}

| Field | Description |
|---|---|
| **Number of CPUs** | Number of parallel threads used by the processing pipeline for this document type. Increase to speed up large spools, decrease if the host is under memory pressure. Default: `4`. |

---

## Tips & best practices

- **Follow the cards from left to right.** They are in the order of a run; a state in red points at the value still missing.
- **Always set defaults** on Document Identification fields — they save you from spool variations that omit a tag occasionally.
- **One template for a mixed spool.** When a spool mixes B2B and B2C documents, or several activities, set the activity and type with [rules](#activity-and-type-rules) rather than duplicating the template, and check them with *Try on the sample*.
- **For UBL sources, use *Suggest*** to bootstrap the regex — it handles the common patterns (digits-only, letters + digits, digits + letters + digits). Tweak by hand only when the format is unusual.
- **Leave Processing Type empty** unless this template needs to override the per-document-type default; this keeps the configuration in one place.
- For new document types, **start by loading an XML sample**, configure *Source* and *Identification* using the picker, then test on a few documents before tuning the XSL chain in *UBL*.
- The **Burst Key is the most critical XML field** — getting it wrong produces either one giant document or no documents at all.
- **Edit the PDF layout on its own page.** [PDF Templates](./pdf-templates.md) hosts the visual editor with the live preview; the *Output* step just picks the right one. Sharing one layout across several documents avoids editing N copies when a legal mention or a column set changes.
