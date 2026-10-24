---
title: Promotion
description: "Move NomaUBL configuration between instances item by item — document templates with their XSL, RTF and Schematron files, PDF templates, lists, notification rules, digests, auto-retries, lifecycle checks, connectors and settings templates — in a package whose instance keys never travel, with a preview, a field diff and a version snapshot before every write."
keywords: [NomaUBL, promotion, export, import, package, environments, dev, test, production, configuration transport, preview, diff, snapshot, instance keys, JD Edwards, SAP, NetSuite, custom ERP]
---

# Promotion

The **Promotion** page moves configuration from one instance to another — development to test, test to production — **item by item**, with the files each item uses. Export builds a package; import shows what the package would change, field by field, then writes it after a version snapshot. The keys that belong to an instance — passwords, URLs, hosts, the license, the environment name… — **never travel** and are never overwritten on the target.

Open it from **Management → Promotion**.

---

## At a glance

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
| **Daily digest** · **Auto-retry** · **Lifecycle check** | A [daily digest](../sync/scheduled-jobs/daily-digest.md), an [auto-retry](../sync/scheduled-jobs/auto-retry.md) or a [lifecycle check](../sync/scheduled-jobs/lifecycle-checks.md). | — |
| **Connector** | An API, SQL, database or FTP connector, without its secrets and targets. | — |
| **Settings template** | E-invoicing, e-reporting, directory lookup, watched folders, integrity checks, report queries or JDE print queue, without its instance keys. | — |
| **File** | The shared UBL defaults file (`ubl-defaults.xsl`, the operator values of the common XSL). | — |

The global settings, single sign-on and the column overrides of the NomaUBL database are never promoted: they describe the instance itself.

---

## Export

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap'}}>
    <span style={{display: 'inline-flex', border: '1px solid rgba(148,163,184,0.3)', borderRadius: '999px', overflow: 'hidden'}}>
      <span style={{padding: '4px 11px', background: 'rgba(74,158,255,0.12)', color: '#4a9eff', fontWeight: 600}}>Export</span>
      <span style={{padding: '4px 11px'}}>Import</span>
    </span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', minWidth: '200px', opacity: 0.6}}>Filter items…</span>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr minmax(200px, 280px)', gap: '12px'}}>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px'}}>
      <div style={{padding: '6px 12px', fontWeight: 700, fontSize: '11px', opacity: 0.7, borderBottom: '1px solid rgba(148,163,184,0.25)'}}>☑ DOCUMENT TEMPLATE (2)</div>
      <div style={{padding: '6px 12px 6px 20px', borderBottom: '1px solid rgba(148,163,184,0.25)'}}>☑ <code>invoices</code> <span style={{opacity: 0.6}}>— Customer invoices</span><br/>
        <code style={{fontSize: '11px'}}>pdf-template:standard</code> <code style={{fontSize: '11px'}}>xsl/invoices.xsl</code> <code style={{fontSize: '11px'}}>ubl/invoices-ubl.xsl</code></div>
      <div style={{padding: '6px 12px 6px 20px', borderBottom: '1px solid rgba(148,163,184,0.25)'}}>☐ <code>credit_notes</code> <span style={{opacity: 0.6}}>— Credit notes</span></div>
      <div style={{padding: '6px 12px', fontWeight: 700, fontSize: '11px', opacity: 0.7, borderBottom: '1px solid rgba(148,163,184,0.25)'}}>☐ PDF TEMPLATE (1)</div>
      <div style={{padding: '6px 12px 6px 20px'}}>☑ <code>standard</code> <span style={{padding: '0 6px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>dependency</span></div>
    </div>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '10px', lineHeight: 1.6}}>
      <b>Selection</b><br/>
      <span style={{fontFamily: 'monospace', fontSize: '11px', opacity: 0.7}}>1 item(s), 1 dependency(ies), 2 file(s)</span><br/>
      <span style={{opacity: 0.8, fontSize: '12px'}}>The package holds the items, their files with paths relative to the environment root, and a manifest…</span><br/>
      <span style={{display: 'inline-block', marginTop: '6px', padding: '3px 10px', borderRadius: '6px', background: '#4a9eff', color: '#fff'}}>Export package</span>
      <span style={{display: 'inline-block', marginTop: '6px', padding: '3px 10px', opacity: 0.7}}>Clear selection</span>
    </div>
  </div>
</div>

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

## Access

Grant **Promotion** in the Management group on the [Roles](../configuration/security/roles.md) page. The settings grant is also required.

The *Package mode* of [File versions](./file-versions.md#package-mode) remains available for raw files that belong to no item.

---

## Tips & best practices

- **Promote from the lower environment up.** Edit in development, check in test, then import the same package in production: the package is the record of what was moved.
- **Read the diff before applying.** A *changed* item with an unexpected key often reveals an edit made directly on the target.
- **Use Keep the target to add without overwriting** — for example to bring a new document to an instance whose existing documents have been tuned locally.
- **Write a meaningful comment.** It is the label of the snapshots to restore if the import has to be undone.
