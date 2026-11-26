---
title: Promotion
description: "Move NomaUBL configuration between instances item by item — document templates with their XSL, RTF and Schematron files, PDF templates, lists, notification rules, digests, auto-retries, lifecycle checks, connectors and settings templates — in a package whose instance keys never travel, with a preview, a field diff and a version snapshot before every write."
keywords: [NomaUBL, promotion, export, import, package, environments, dev, test, production, configuration transport, preview, diff, snapshot, instance keys, JD Edwards, SAP, NetSuite, custom ERP]
---

# Promotion

The **Promotion** page moves configuration from one instance to another — development to test, test to production — **item by item**, with the files each item uses. Export builds a package; import shows what the package would change, field by field, then writes it after a version snapshot. The keys that belong to an instance — passwords, URLs, hosts, the license, the environment name… — **never travel** and are never overwritten on the target.

Open it from **Management → Promotion**. The page opens on three cards, one per task: **Build a package** (pick items and their files, download a package or promote it straight to another instance), **Import a package** (apply a package to this instance, after a preview) and **History** (the packages exported, imported and promoted). The chosen card is highlighted and its view shows below.

---

## At a glance

<svg viewBox="0 0 1200 444" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pmoen-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pmoen-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pmoen-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pmoen-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="404" rx="14" fill="url(#pmoen-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Promotion</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Move templates, lists, jobs, connectors and settings between instances, item by item, with their files.</text>
  <rect x="240.0" y="80" width="232.0" height="60" rx="9" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="252.0" y="97.0" width="26" height="26" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="265.0" y="113.5" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇</text>
  <text x="288.0" y="108.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Build a package</text>
  <text x="288.0" y="122.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="484.0" y="80" width="232.0" height="60" rx="9" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="496.0" y="97.0" width="26" height="26" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="509.0" y="113.5" fill="#c084fc" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬆</text>
  <text x="532.0" y="108.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Import a package</text>
  <text x="532.0" y="122.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="728.0" y="80" width="232.0" height="60" rx="9" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="740.0" y="97.0" width="26" height="26" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="753.0" y="113.5" fill="#fb923c" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <text x="776.0" y="108.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">History</text>
  <text x="776.0" y="122.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="288.0" y="122" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pick items and their files, download</text>
  <text x="288.0" y="133" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">a package or promote it</text>
  <text x="532.0" y="122" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Apply a package to this instance,</text>
  <text x="532.0" y="133" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">after a preview</text>
  <text x="776.0" y="122" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The packages exported, imported</text>
  <text x="776.0" y="133" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">and promoted</text>
  <rect x="240" y="154" width="470" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="164" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="178.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Filter items…</text>
  <rect x="252" y="195" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M254.5,200.5 L256.8,202.8 L260.8,198" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="269" y="204" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">DOCUMENT (2)</text>
  <rect x="266" y="217" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M268.5,222.5 L270.8,224.8 L274.8,220" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="283" y="226" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">invoices</text>
  <text x="340" y="226" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">— Customer invoices</text>
  <rect x="282" y="232" width="117" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="340.5" y="243.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">pdf-template:standard</text>
  <rect x="405" y="232" width="94" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="452.0" y="243.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">xsl/invoices.xsl</text>
  <rect x="505" y="232" width="113" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="561.5" y="243.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ubl/invoices-ubl.xsl</text>
  <rect x="266" y="257" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="283" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">credit_notes</text>
  <text x="356" y="266" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">— Credit notes</text>
  <rect x="252" y="285" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="294" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">PDF-TEMPLATE (1)</text>
  <rect x="266" y="307" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M268.5,312.5 L270.8,314.8 L274.8,310" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="283" y="316" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">standard</text>
  <rect x="336" y="304" width="65" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="368.5" y="315.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">dependency</text>
  <rect x="252" y="335" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="344" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">API-CONNECTOR (3)  ›</text>
  <rect x="252" y="357" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="366" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">LIST (29)  ›</text>
  <rect x="722" y="154" width="238" height="250" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="734" y="174" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Selection</text>
  <text x="734" y="192" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">1 item(s), 1 dependency(ies), 3 file(s)</text>
  <text x="734" y="212" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Passwords, secrets, URLs, hosts,</text>
  <text x="734" y="225" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">the license… are never exported.</text>
  <rect x="734" y="238" width="214" height="22" rx="5" fill="url(#pmoen-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="841.0" y="252.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Export package</text>
  <rect x="734" y="268" width="214" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.0" y="282.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Clear selection</text>
  <line x1="722" y1="304" x2="960" y2="304" stroke="#1f2937" strokeWidth="1"/>
  <text x="734" y="324" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Promote to an instance</text>
  <rect x="734" y="334" width="214" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="744" y="348.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Target instance: TEST ▾</text>
  <rect x="734" y="366" width="214" height="22" rx="5" fill="url(#pmoen-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="841.0" y="380.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Promote…</text>
  <rect x="20" y="88" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="103" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three mode cards</text>
  <text x="30" y="116" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">build · import · history</text>
  <line x1="200" y1="105.0" x2="240" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmoen-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tree by kind</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tick a kind to take all</text>
  <line x1="200" y1="217.0" x2="252" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmoen-arrow)"/>
  <rect x="20" y="395" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="410" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dependencies</text>
  <text x="30" y="423" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">files and PDF template follow</text>
  <line x1="200" y1="412.0" x2="350" y2="319" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmoen-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Selection count</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">items, dependencies, files</text>
  <line x1="1000" y1="177.0" x2="950" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmoen-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export package</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ZIP with manifest, items, files</text>
  <line x1="1000" y1="247.0" x2="948" y2="249" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmoen-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Promote</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">straight to a target instance</text>
  <line x1="1000" y1="347.0" x2="948" y2="376" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmoen-arrow)"/>
</svg>

<svg viewBox="0 0 760 170" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: '760px', margin: '24px 0', fontFamily: 'system-ui, sans-serif'}}>
  <defs><marker id="pr-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#4a9eff"/></marker></defs>
  <rect x="10" y="30" width="200" height="110" rx="10" fill="rgba(74,158,255,0.08)" stroke="#4a9eff"/>
  <text x="110" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Source instance</text>
  <text x="110" y="80" textAnchor="middle" fontSize="12" fill="currentColor">Export: tick the items</text>
  <text x="110" y="100" textAnchor="middle" fontSize="12" fill="currentColor">dependencies added</text>
  <text x="110" y="120" textAnchor="middle" fontSize="12" fill="currentColor">Export package</text>
  <line x1="210" y1="85" x2="280" y2="85" stroke="#4a9eff" strokeWidth="2" markerEnd="url(#pr-arrow)"/>
  <rect x="285" y="30" width="190" height="110" rx="10" fill="rgba(148,163,184,0.08)" stroke="rgba(148,163,184,0.6)"/>
  <text x="380" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Package (.zip)</text>
  <text x="380" y="80" textAnchor="middle" fontSize="12" fill="currentColor">manifest.json</text>
  <text x="380" y="100" textAnchor="middle" fontSize="12" fill="currentColor">items/ · files/</text>
  <text x="380" y="120" textAnchor="middle" fontSize="12" fill="currentColor">no instance keys</text>
  <line x1="475" y1="85" x2="545" y2="85" stroke="#4a9eff" strokeWidth="2" markerEnd="url(#pr-arrow)"/>
  <rect x="550" y="30" width="200" height="110" rx="10" fill="rgba(50,215,75,0.08)" stroke="rgb(50,215,75)"/>
  <text x="650" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Target instance</text>
  <text x="650" y="80" textAnchor="middle" fontSize="12" fill="currentColor">Import: preview and diff</text>
  <text x="650" y="100" textAnchor="middle" fontSize="12" fill="currentColor">policy and comment</text>
  <text x="650" y="120" textAnchor="middle" fontSize="12" fill="currentColor">Apply, after snapshot</text>
</svg>

---

## What can be promoted

| Kind | Content of the item | Travels with it |
|---|---|---|
| **Document template** | A [document](./documents.md). | Its files — pre-processing XSL, indexation XSL, RTF, UBL XSLT and its PDF companion (`.pdf.json`), custom Schematron — and the [PDF template](./pdf-templates.md) it names. |
| **PDF template** | A PDF template. | — |
| **Entry form** | An [entry form](../configuration/entry-forms.md) of the invoice editor. | — (role grants stay with each environment's roles) |
| **List** | A [reference list](../configuration/reference-lists.md) or a [custom list](../configuration/custom-lists.md). | — |
| **Notification rule** | A [notification rule](./notification-rules.md). | — |
| **Explorer analysis** · **Explorer dashboard** | A saved [Explorer](../application/explorer.md) analysis or dashboard. | A dashboard brings the analyses of its tiles. |
| **Daily digest** · **Auto-retry** · **Lifecycle check** | A [daily digest](../sync/scheduled-jobs/daily-digest.md), an [auto-retry](../sync/scheduled-jobs/auto-retry.md) or a [lifecycle check](../sync/scheduled-jobs/lifecycle-checks.md). | — |
| **Connector** | An API, SQL, database or FTP connector, without its secrets and targets. | — |
| **Settings template** | E-invoicing, e-reporting, directory lookup, watched folders, integrity checks, report queries or JDE print queue, without its instance keys. | — |
| **File** | The shared UBL defaults file (`ubl-defaults.xsl`, the operator values of the common XSL), and **each file a document uses** — transform, XSL, RTF, UBL stylesheet, customer Schematron, PDF layout — listed by its path with *Used by …* the documents that use it. A file can be promoted alone, for example a stylesheet shared by several documents. | — |

The global settings, single sign-on and the column overrides of the NomaUBL database are never promoted: they describe the instance itself.

---

## Export

On the **Build a package** card:

1. **Pick the items** in the tree, grouped by kind with their count. The kind check box selects every visible item of the kind; **Filter items…** narrows the tree.
2. **Read the dependencies** shown under each item: the files it uses and the items added with it. A PDF template named by a selected document is ticked automatically and flagged *dependency*.
3. **Export package** downloads the ZIP. The side panel counts the items, dependencies and files of the selection; **Clear selection** starts again.

### Package content

| Entry | Content |
|---|---|
| `manifest.json` | The items with their kind and checksum, the source instance and release, the author and the date. |
| `items/` | One JSON fragment per item. |
| `files/` | The referenced files, with their path **relative to the environment root** — the `%APP_HOME%` and `%ENV%` placeholders of the properties stay valid on the target. |

### What never travels \{#instance-keys\}

Passwords, secrets, tokens, API keys, the license, URLs, hosts, users, the database schema, the environment name and colour, and the watermarks of the jobs (last BIP job, last scan, last retrieval) are **never exported**. On import, the target keeps its own values for these keys.

---

## Import

On the **Import a package** card, the package is read, previewed, then applied:

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '12.5px', overflowX: 'auto'}}>
  <div style={{opacity: 0.7, fontFamily: 'monospace', fontSize: '11px', marginBottom: '8px'}}>From DEV · release 10.24.1 · admin · 2026-10-24 09:15</div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr minmax(200px, 280px)', gap: '12px'}}>
    <table style={{width: '100%', borderCollapse: 'collapse'}}>
      <thead><tr style={{textAlign: 'left', opacity: 0.7}}><th>Kind</th><th>Item</th><th>State</th><th>Changes</th><th>Detail</th><th>Applied</th></tr></thead>
      <tbody>
        <tr><td>Document template</td><td><code>invoices</code></td><td><span style={{color: '#f59e0b', fontWeight: 700}}>changed</span></td><td>3</td><td></td><td></td></tr>
        <tr><td>PDF template</td><td><code>standard</code></td><td><span style={{fontWeight: 700, opacity: 0.7}}>identical</span></td><td>0</td><td></td><td></td></tr>
        <tr><td>File</td><td><code>xsl/invoices.xsl</code></td><td><span style={{color: 'rgb(50,215,75)', fontWeight: 700}}>new</span></td><td>0</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '10px', lineHeight: 1.6}}>
      <b>Preview</b><br/>
      <span style={{fontFamily: 'monospace', fontSize: '11px', opacity: 0.7}}>Items: 0 new, 1 changed, 1 identical, 0 skipped<br/>Files: 1 new, 0 changed, 0 identical, 0 skipped</span><br/>
      Changed items and files<br/>
      <span style={{display: 'inline-block', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Replace with the package ▾</span><br/>
      <span style={{display: 'inline-block', marginTop: '6px', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>Comment for the snapshots and the log</span><br/>
      <span style={{display: 'inline-block', marginTop: '6px', padding: '3px 10px', borderRadius: '6px', background: '#4a9eff', color: '#fff'}}>✓ Apply</span>
    </div>
  </div>
</div>

1. **Choose a promotion package (.zip).** The page reads the manifest — source environment, release, author, date — and computes the **preview** without writing anything.
2. **Read the preview.** Each item and each file has a state: **new**, **changed**, **identical** or **skipped**. The grid gives the number of changed fields per item; a row opens the **field diff** — key, change (*set*, *added*, *changed*, *removed*), *Target* value and *Package* value.
3. **Choose the policy** for changed items and files:
   - **Replace with the package** — changed items and files take the package version;
   - **Keep the target, write only new ones** — only new items and files are written.
4. **Add a comment**, recorded with the snapshots and in the log.
5. **Apply** and confirm. The panel switches to **Result**, the *Applied* column marks what was written, and **Choose another package** clears the page.

What *Apply* writes:

- each item is **inserted or updated by name** in its own configuration file;
- each file is written **after a version snapshot**, visible and restorable in [File versions](./file-versions.md);
- the instance keys already present on the target **keep their value**;
- the import is **one entry of the versioning log**, with its author and comment.

The grid is the shared data table; its view is listed in the [List views](../configuration/list-views.md) editor.

---

## Promote to another instance \{#promote\}

When the two instances can reach each other, the selection of the **Build a package** card is sent straight to a target instance, without handling a ZIP file. The package is built as for an export, sent to the target's own preview, then to its import.

1. **Pick the items** under *Build a package* (with their dependencies).
2. Under **Promote to an instance**, at the bottom of the side panel of *Build a package*, choose the **Target instance** (the last one used is remembered) and click **Promote…**.
3. The **Promote to …** window shows the target's own preview — new, changed, identical, skipped, with the field diffs. Nothing is written yet: *Promote checks the selection on the target first and shows what would change there; nothing is written until you confirm.*
4. In the same window, choose the policy for **Changed items and files** — *Replace with the package* or *Keep the target, write only new ones* — and a comment, then click **Promote n item(s) and n file(s)**. The target takes a version snapshot before each write, and its instance keys keep their values. The window then reads *Promoted to …: n item(s) and n file(s) written*.

The ZIP export stays for instances that cannot reach each other.

### Target instances \{#targets\}

The targets are defined once in **Settings → Promotion targets** (Platform area); while none is defined, the Settings header offers **Add promotion targets**. Each target has:

| Field | Description |
|---|---|
| **Name** | Shown in the target list of the Promotion page. |
| **URL** | Root of the target instance, with its path prefix when it has one (e.g. `https://test.example/nomaubl`). |
| **Username** / **Password** | Account on the target, which must hold the *Settings access* feature there; leave blank when the target runs without sign-in. The password is stored encoded and decoded on the server only for the call. |
| **Check the server certificate** | Ticked by default. When a promotion fails with *The target's certificate is not trusted*, the target has a self-signed or internal certificate: untick the option. |

The account is never sent to the browser and never travels in a package. This editor is in English in the application.

---

## History \{#history\}

The **History** card lists every package exported, import applied and promotion applied on the instance, newest first:

| Column | Description |
|---|---|
| **When** | Date and time. |
| **Direction** | *Export*, *Import* or *Promoted*. |
| **Counterpart** | The target of a promotion, the source of an import. |
| **Author** | Who ran it. |
| **Policy** | *replace* or *keep*. |
| **Items** / **Files** | Counts. |
| **Comment** | The comment entered. |

A row opens the entry with its full plan and diffs. A source instance keeps its promotions, a target its imports. Each entry is a JSON file under the environment's `promotions` folder.

---

## Access

Grant **Promotion** in the Management group on the [Roles](../configuration/security/roles.md) page. The settings grant is also required.

The *Package mode* of [File versions](./file-versions.md#package-mode) remains available for raw files that belong to no item.

---

## Tips & best practices

- **Promote from the lower environment up.** Edit in development, check in test, then import the same package in production: the package is the record of what was moved.
- **Read the diff before applying.** A *changed* item with an unexpected key often reveals an edit made directly on the target.
- **Use Keep the target to add without overwriting** — for example to bring a new document to an instance whose existing documents have been tuned locally.
- **Write a meaningful comment.** It is the label of the snapshots to restore if the import has to be undone.
