---
title: Promotion
description: "Move NomaUBL configuration between instances item by item — document templates with their XSL, RTF and Schematron files, PDF templates, lists, notification rules, digests, auto-retries, lifecycle checks, connectors and settings templates — in a package whose instance keys never travel, with a preview, a field diff and a version snapshot before every write."
keywords: [NomaUBL, promotion, export, import, package, environments, dev, test, production, configuration transport, preview, diff, snapshot, instance keys, JD Edwards, SAP, NetSuite, custom ERP]
---

# Promotion

The **Promotion** page moves configuration from one instance to another — development to test, test to production — **item by item**, with the files each item uses. Export builds a package; import shows what the package would change, field by field, then writes it after a version snapshot. The keys that belong to an instance — passwords, URLs, hosts, the license, the environment name… — **never travel** and are never overwritten on the target.

Open it from **Management → Promotion**. The page has three views: **Export** (build a package, or promote the selection straight to another instance), **Import** (apply a package) and **History**.

---

## At a glance

<svg viewBox="0 0 1200 392" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="346" rx="14" fill="url(#pm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Promotion</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Move templates, lists, jobs, connectors and settings between instances, item by item. Instance keys never travel.</text>
  <rect x="240" y="80" width="114" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="81" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="268.5" y="95.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>
  <line x1="297" y1="85" x2="297" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="325.5" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Import</text>
  <rect x="420" y="80" width="240" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="95.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Filter items…</text>
  <rect x="240" y="116" width="470" height="230" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="127" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M254.5,132.5 L256.8,134.8 L260.8,130" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="269" y="136" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">DOCUMENT TEMPLATE (2)</text>
  <rect x="264" y="151" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M266.5,156.5 L268.8,158.8 L272.8,154" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="281" y="160" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">invoices</text>
  <text x="340" y="160" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">— Customer invoices</text>
  <rect x="280" y="167" width="117" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="338.5" y="178.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">pdf-template:standard</text>
  <rect x="403" y="167" width="94" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="450.0" y="178.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">xsl/invoices.xsl</text>
  <rect x="503" y="167" width="113" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="559.5" y="178.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ubl/invoices-ubl.xsl</text>
  <rect x="264" y="193" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="281" y="202" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">credit_notes</text>
  <text x="356" y="202" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">— Credit notes</text>
  <rect x="252" y="223" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="232" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">PDF TEMPLATE (1)</text>
  <rect x="264" y="247" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M266.5,252.5 L268.8,254.8 L272.8,250" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="281" y="256" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">standard</text>
  <rect x="333.8" y="244" width="65" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="366.3" y="255.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">dependency</text>
  <rect x="252" y="277" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="286" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">CONNECTOR (3)  ›</text>
  <rect x="252" y="299" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="308" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">SETTINGS TEMPLATE (4)  ›</text>
  <rect x="722" y="116" width="238" height="230" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="736" y="138" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Selection</text>
  <text x="736" y="158" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">1 item(s), 1 dependency(ies), 2 file(s)</text>
  <text x="736" y="184" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">The package holds the items, their files</text>
  <text x="736" y="199" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">relative to the environment root, and a</text>
  <text x="736" y="214" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">manifest. Passwords, secrets, URLs, hosts,</text>
  <text x="736" y="229" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">the license… are never exported.</text>
  <rect x="736" y="260" width="210" height="26" rx="5" fill="url(#pm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="841.0" y="276.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Export package</text>
  <rect x="736" y="294" width="210" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.0" y="309.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Clear selection</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export or import</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">preview before every write</text>
  <line x1="200" y1="93.0" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tree by kind</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tick a kind to take all</text>
  <line x1="200" y1="157.0" x2="252" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dependencies</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">files and PDF template follow</text>
  <line x1="200" y1="247.0" x2="280" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Added automatically</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">named by a selected document</text>
  <line x1="200" y1="317.0" x2="333.8" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Selection count</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">items, dependencies, files</text>
  <line x1="1000" y1="167.0" x2="960" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Instance keys</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">never exported, never overwritten</text>
  <line x1="1000" y1="247.0" x2="960" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export package</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ZIP with manifest, items, files</text>
  <line x1="1000" y1="307.0" x2="946" y2="273" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
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
| **List** | A [reference list](../configuration/reference-lists.md) or a [custom list](../configuration/custom-lists.md). | — |
| **Notification rule** | A [notification rule](./notification-rules.md). | — |
| **Explorer analysis** · **Explorer dashboard** | A saved [Explorer](../application/explorer.md) analysis or dashboard. | A dashboard brings the analyses of its tiles. |
| **Daily digest** · **Auto-retry** · **Lifecycle check** | A [daily digest](../sync/scheduled-jobs/daily-digest.md), an [auto-retry](../sync/scheduled-jobs/auto-retry.md) or a [lifecycle check](../sync/scheduled-jobs/lifecycle-checks.md). | — |
| **Connector** | An API, SQL, database or FTP connector, without its secrets and targets. | — |
| **Settings template** | E-invoicing, e-reporting, directory lookup, watched folders, integrity checks, report queries or JDE print queue, without its instance keys. | — |
| **File** | The shared UBL defaults file (`ubl-defaults.xsl`, the operator values of the common XSL). | — |

The global settings, single sign-on and the column overrides of the NomaUBL database are never promoted: they describe the instance itself.

---

## Export

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

When the two instances can reach each other, the selection of the **Export** view is sent straight to a target instance, without handling a ZIP file. The package is built as for an export, sent to the target's own preview, then to its import.

1. **Pick the items** in the Export view (with their dependencies).
2. Under **Promote to an instance**, at the bottom of the Export side panel, choose the **Target instance** (the last one used is remembered) and click **Promote…**.
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

The account is never sent to the browser and never travels in a package. This editor is in English in the application.

---

## History \{#history\}

The **History** view lists every package exported, import applied and promotion applied on the instance, newest first:

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
