---
title: File Versions
description: "Browse the NomaUBL environment file tree, view and restore previous versions, edit text files in-app, view PDFs, and export / import multi-file packages between environments."
keywords: [NomaUBL, file versions, version history, restore, package, export, import, Monaco editor, PDF viewer, environment files, JD Edwards, SAP, NetSuite]
---

# File Versions

The **File Versions** page browses every file managed in a NomaUBL environment (XSL, RTF, XML, configuration, scripts…), shows the **version history** of each file, and lets administrators **edit text files**, **view PDFs**, **restore a previous version**, or **package files** for transfer between environments.

The file repository is shared across all NomaUBL deployments — the page applies whether the source ERP is JD Edwards, SAP, NetSuite or a custom system. JDE-extracted artefacts coexist with hand-edited files; their origin is recorded in the version history (see *Source* badge below).

---

## At a glance

<svg viewBox="0 0 1200 476" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fvui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fvui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fvui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="fvui-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="436" rx="14" fill="url(#fvui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">File Versions</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Track and restore previous versions of config and template files</text>
  <rect x="236" y="80" width="230" height="362" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="244" y="88" width="214" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="102.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Filter by filename…</text>
  <text x="248" y="136" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">▾ CONFIG</text>
  <text x="454" y="136" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <rect x="244" y="148" width="214" height="32" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="154.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="167.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="163" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">config.json</text>
  <text x="280" y="176" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">48.2 KB</text>
  <rect x="244" y="184" width="214" height="32" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="190.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="203.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="199" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">config-notifications.json</text>
  <text x="280" y="212" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">3.1 KB</text>
  <text x="248" y="232" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">▾ XSL</text>
  <text x="454" y="232" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <rect x="244" y="244" width="214" height="32" rx="8" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="252" y="250.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="263.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="259" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">invoices.xsl</text>
  <text x="280" y="272" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">21.4 KB</text>
  <rect x="244" y="280" width="214" height="32" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="286.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="299.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="295" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">credit_notes.xsl</text>
  <text x="280" y="308" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">19.8 KB</text>
  <rect x="244" y="316" width="214" height="32" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="322.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="335.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="331" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">invoices-pre.xsl</text>
  <text x="280" y="344" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">4.0 KB</text>
  <text x="248" y="364" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">▸ TEMPLATE</text>
  <text x="454" y="364" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <text x="248" y="388" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">▸ UBL</text>
  <text x="454" y="388" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">10</text>
  <text x="480" y="98" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">xsl/invoices.xsl</text>
  <rect x="842" y="86" width="122" height="22" rx="5" fill="url(#fvui-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="903.0" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Upload New Version</text>
  <rect x="775" y="86" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="805.5" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Compare</text>
  <rect x="708" y="86" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="738.5" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Package</text>
  <text x="480" y="130" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VERSION HISTORY</text>
  <rect x="480" y="140" width="484" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="155.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="546" y="155.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE</text>
  <text x="656" y="155.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="732" y="155.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BY</text>
  <text x="792" y="155.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMMENT</text>
  <rect x="480" y="168" width="484" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="183.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">live</text>
  <text x="546" y="183.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">26/11/2026 14:32</text>
  <rect x="656" y="172.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="679.0" y="183.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">upload</text>
  <text x="732" y="183.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="792" y="183.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Edited in browser</text>
  <rect x="480" y="196" width="484" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="211.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">v12</text>
  <text x="546" y="211.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">20/11/2026 09:14</text>
  <rect x="656" y="200.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="679.0" y="211.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">upload</text>
  <text x="732" y="211.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="792" y="211.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Edited in browser</text>
  <rect x="480" y="224" width="484" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="239.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">v11</text>
  <text x="546" y="239.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12/11/2026 17:42</text>
  <rect x="656" y="228.0" width="51" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="681.5" y="239.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">restore</text>
  <text x="732" y="239.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="792" y="239.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="480" y="252" width="484" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="267.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">v10</text>
  <text x="546" y="267.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">02/11/2026 11:08</text>
  <rect x="656" y="256.0" width="60" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="686.0" y="267.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">promotion</text>
  <text x="732" y="267.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">system</text>
  <text x="792" y="267.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Release R1</text>
  <rect x="486" y="288" width="472" height="82" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="500" y="308" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Unsaved changes</text>
  <text x="500" y="325" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The changes to xsl/invoices.xsl are not saved. Open the other file and lose them?</text>
  <rect x="891" y="338" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="918.5" y="352.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="757" y="338" width="128" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="821.0" y="352.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Open the other file</text>
  <rect x="20" y="112" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Folders as headings</text>
  <text x="30" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">open / close · file count</text>
  <line x1="200" y1="129.0" x2="248" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fvui-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Files as cards</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name and size · click to open</text>
  <line x1="200" y1="247.0" x2="244" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fvui-arrow)"/>
  <rect x="1000" y="50" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toolbar</text>
  <text x="1010" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">upload · compare · package</text>
  <line x1="1000" y1="67.0" x2="960" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fvui-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Version history</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">live file + previous versions</text>
  <line x1="1000" y1="177.0" x2="960" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fvui-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Unsaved changes</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">asked before opening another file</text>
  <line x1="1000" y1="317.0" x2="958" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fvui-arrow)"/>
</svg>

---

## Layout

The page is split into two columns:

| Column | Contents |
|---|---|
| **Left sidebar** | Search box + every versioned file of the environment, grouped by folder: folders are headings that open and close and show their file count, files are cards. |
| **Main panel** | Toolbar + content area whose mode depends on the current selection (live file + history, package selection, editor or PDF viewer). |

---

## Sidebar — file tree

| Element | Description |
|---|---|
| **Search box** | Live filter on the file path (case-insensitive substring match). |
| **Folder headings** | One per directory, in capitals, with a chevron. Click to expand / collapse. The number on the right is the total number of files contained recursively; sub-folders are indented under their parent. |
| **File cards** | One card per file: a file icon, the short name and the size (B / KB / MB). Click to select; the selected file is outlined in blue. |
| **Select-all row** *(package mode only)* | Toggles selection for every file currently filtered. |

When *Package mode* is active, the file icon gives way to a checkbox on every card and every folder heading; folder checkboxes show an **indeterminate state** when only some children are selected.

---

## Single-file mode (default)

Selecting a file in the sidebar opens its **version history** in the main panel.

The toolbar shows the file path and a primary **Upload new version** action (file picker — uploading replaces the live file and snapshots the previous live file as a new historic version).

### Version history table

| Column | Description |
|---|---|
| **Version** | `live` for the current file, `v1`, `v2`… for historic versions. |
| **Date** | When the version was created. |
| **Source** | How the version was produced — see [source badges](#source-badges) below. |
| **By** | Who produced the version: the signed-in user for a change made from the application, `system` for a change made by a job, the command line or an upgrade. |
| **Comment** | Free-text comment captured at upload (e.g. `Edited in browser`). |
| **Size** | Stored size of the version. |
| **Actions** | Per-row buttons — see [row actions](#row-actions) below. |

### Source badges

| Badge | Meaning |
|---|---|
| `upload` *(blue)* | Manually uploaded from the toolbar or saved from the in-app editor. |
| `restore` *(orange)* | Generated by restoring an older version (the previous live file is automatically snapshotted under this source). |
| `upstream` *(slate)* | The shipped version of a file preserved by a framework upgrade. Written by the upgrade under `<name>.upstream` — its purpose is to give you the vendor baseline to compare against a customised live file (see [Upstream comparison](#upstream) below). |
| `jde_bip` *(purple)* | Extracted from JD Edwards BIP — JDE-specific source. |
| `promotion` *(grey)* | Snapshot taken by a [Promotion](./promotion.md) import before the file is overwritten; the comment is the one entered on import. |
| *(other)* | Any other origin recognised by the API. |

### Row actions

| Icon | Available on | Description |
|---|---|---|
| 👁 **View** | Live row, **PDF** files | Opens the PDF inline in the main panel via an `<iframe>`. |
| ✏️ **Edit** | Live row, **text** files | Opens the file in the built-in Monaco editor. |
| ⇄ **Compare with previous** | Every row except the oldest, **text** files | Opens the side-by-side comparison of this version against the one just before it — see [Compare mode](#compare-mode) below. |
| ⬇ **Download** | Every row | Downloads the file (live or historic). Historic downloads are named `<filename>.v<n>`. |
| 🔄 **Restore** | Historic rows only | Promotes the historic version to the new live file. A confirmation dialog appears first; the previous live file is snapshotted as a new `restore` version. |

---

## Edit mode (text files)

Clicking the **Edit** icon on the live row of a text file opens the **Monaco editor** (the same engine VS Code uses) directly inside the main panel.

| Aspect | Behaviour |
|---|---|
| **Languages auto-detected** | `.xml` / `.xsl` / `.xslt` → XML; `.json` → JSON; `.css` → CSS; `.js` → JavaScript; `.html` / `.htm` → HTML; everything else → plain text. |
| **Recognised text extensions** | `xml`, `xsl`, `xslt`, `json`, `txt`, `cfg`, `csv`, `html`, `htm`, `css`, `js`, `properties`, `md`, `log`. |
| **Save** | Uploads the buffer as a new version with the comment `Edited in browser`. The previous live file is snapshotted automatically. |
| **Cancel** | Closes the editor without saving. |
| **Another file** | Choosing another file in the sidebar closes the editor and opens that file. When the editor holds unsaved changes, an **Unsaved changes** dialog asks first — *The changes to … are not saved. Open the other file and lose them?* — with **Open the other file** or **Cancel** (stay in the editor). The PDF viewer closes the same way. |
| **Editor options** | Monospace font, minimap on, `wordWrap: off`, tab size 2, paste-formatting on, dark theme. |

---

## Compare mode \{#compare-mode\}

For any **text** file (XSL, XML, JSON, SQL, properties, MD, CSS, JS, HTML, TXT, CSV, CFG, LOG…), two versions can be opened side-by-side — the same diff view VS Code shows, useful when reviewing what a template or configuration file picked up over time. The current live file is included in the picker, so you can also compare any historic snapshot against today's state.

### Opening the comparison

Two ways to enter the comparison:

- **One-click — compare with previous.** Click the **⇄** icon on any row of the history. The selected version opens on the right, the version just before it on the left. This is the common case when you only want to see what that snapshot introduced.
- **Compare two arbitrary versions.** Turn on **Compare** in the toolbar, then click two rows in the history table — the order picked sets which side each version lands on. The toolbar caption shows the selected pair and offers a **Confirm** button to open the comparison.

### The side-by-side view

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontWeight: 700, fontSize: '13px'}}>invoices/invoices.xsl — v3 ↔ v4</div>
    <div style={{display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px'}}>
      <span style={{padding: '3px 9px', borderRadius: '999px', background: 'rgba(255,159,10,0.10)', border: '1px solid rgba(255,159,10,0.40)', color: '#fb923c', fontWeight: 600}}>3 changes</span>
      <span style={{opacity: 0.6}}>✕ Close</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
    <div style={{padding: '8px 14px', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderRight: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>v3 — 2026-04-12</div>
    <div style={{padding: '8px 14px', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, background: 'rgba(255,255,255,0.03)'}}>v4 — 2026-05-02 <span style={{marginLeft: 8, opacity: 0.55, fontStyle: 'italic', textTransform: 'none', letterSpacing: 0}}>live</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', fontFamily: 'ui-monospace, monospace', fontSize: '11px', lineHeight: '1.7'}}>
    <div style={{padding: '10px 14px', borderRight: '1px solid rgba(255,255,255,0.08)'}}>
      <div><span style={{opacity: 0.4, marginRight: 10}}>17</span>&lt;xsl:variable name="<span style={{color: '#60a5fa'}}>currency</span>"&gt;</div>
      <div style={{background: 'rgba(255,69,58,0.10)'}}><span style={{opacity: 0.4, marginRight: 10}}>18</span>  <span style={{color: '#f87171'}}>EUR</span></div>
      <div><span style={{opacity: 0.4, marginRight: 10}}>19</span>&lt;/xsl:variable&gt;</div>
      <div style={{opacity: 0.5}}>…</div>
      <div style={{background: 'rgba(255,69,58,0.10)'}}><span style={{opacity: 0.4, marginRight: 10}}>42</span>&lt;xsl:value-of select="<span style={{color: '#f87171'}}>$amount</span>"/&gt;</div>
    </div>
    <div style={{padding: '10px 14px'}}>
      <div><span style={{opacity: 0.4, marginRight: 10}}>17</span>&lt;xsl:variable name="<span style={{color: '#60a5fa'}}>currency</span>"&gt;</div>
      <div style={{background: 'rgba(50,215,75,0.10)'}}><span style={{opacity: 0.4, marginRight: 10}}>18</span>  <span style={{color: '#4ade80'}}>$header/cbc:DocumentCurrencyCode</span></div>
      <div><span style={{opacity: 0.4, marginRight: 10}}>19</span>&lt;/xsl:variable&gt;</div>
      <div style={{opacity: 0.5}}>…</div>
      <div style={{background: 'rgba(50,215,75,0.10)'}}><span style={{opacity: 0.4, marginRight: 10}}>42</span>&lt;xsl:value-of select="<span style={{color: '#4ade80'}}>format-number($amount, '0.00')</span>"/&gt;</div>
    </div>
  </div>
</div>

| Aspect | Behaviour |
|---|---|
| **Layout** | Full-screen, older version on the left, newer on the right. The header bar shows the file path, the two version labels and the running count of changed lines. |
| **Highlighting** | Each row coloured by change — green for added, red for removed, both shades for modified. Unchanged regions can be folded. |
| **Syntax colouring** | The same Monaco-based engine used in [Edit mode](#edit-mode-text-files) — language auto-detected from the file extension. |
| **Scroll** | Synchronised between both panes — scrolling either side moves the other in lockstep. |
| **Close** | **Escape** or the **Close** button in the header returns to the history table. |

Binary files (PDF, ZIP, images…) do not appear in the picker — comparison is only available on the text extensions listed under [Edit mode](#edit-mode-text-files).

### Compare a customised file with its upstream version \{#upstream\}

When a framework upgrade **preserves** a customised file (for example a forked `ubl-defaults.xsl` you edited by hand), the upgrade saves the newly-shipped vendor version alongside it as `<name>.upstream`. It surfaces in the version history as an extra row with the `upstream` badge, and it appears in the *Compare* picker exactly like any other historic version.

The intended workflow:

1. Open the customised file's version history.
2. Turn on **Compare** in the toolbar.
3. Pick your live customised file on one side and the `upstream` row on the other side.
4. Open the diff to see precisely what the new framework version changed, and merge those changes into your customised file by hand.

The `upstream` row is refreshed on every upgrade that keeps preserving the file — so `<name>.upstream` always tracks the current vendor baseline, not the one from a past release. When the upgrade eventually stops preserving the file (because the operator's changes have been merged back, or the file has been reset to the shipped default), the `upstream` row stops being refreshed.

---

## PDF viewer

Clicking the **View** icon on the live row of a PDF opens the file inline in the main panel via a secured `<iframe>` (the auth token is forwarded as a query parameter when present). Click **Close** in the toolbar to return to the version history.

---

## Package mode

Toggling **Package mode** in the toolbar switches the page from single-file actions to **multi-file selection** for transfer between environments.

| Action | Description |
|---|---|
| **Export** | Exports every selected file as a package to download. The toolbar caption shows the number of selected files and the total size. |
| **Import** | Imports a previously exported package (`.zip`). The status message reports the number of files imported. |

Selection helpers:

- **Per-file checkboxes** in the tree
- **Per-folder checkbox** — toggles every descendant file at once; shows an *indeterminate* state when partial.
- **Select all** row at the top — toggles every file in the current filter.

Quitting package mode (toggling the button off again) clears the selection.

---

## Status messages

Inline feedback at the top of the main panel auto-clears after 4 seconds:

- `Upload success — version N created`
- `Restore success — version N restored`
- `Export success — N files`
- `Import success — N files`
- API error message on failure.

---

## Tips & best practices

- **Use the editor for in-place tweaks**, the upload for bulk replacements. The editor saves a new version with a clear `Edited in browser` comment, which is easy to spot in the history.
- **Restore is non-destructive.** It snapshots the current live file before promoting the historic one, so an accidental restore can itself be rolled back.
- **Package mode is the supported way to ship XSL / RTF templates between dev → recette → production.** Avoid hand-copying files across environments — packaging preserves the version metadata.
- **Skip JDE-extracted files (`jde_bip` source) when packaging** unless the receiving environment also runs against the same JDE — they are typically environment-specific outputs, not portable assets.
- **Keep an eye on the file count badge per folder** when working on large XSL trees — it's the quickest way to spot a mis-packaged subset.
- **Download a historic version before restoring** if you want to keep a local copy of both the current and the historic file outside NomaUBL.
