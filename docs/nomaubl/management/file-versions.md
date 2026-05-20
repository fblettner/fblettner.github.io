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

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="440" rx="14" fill="url(#fv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">File Versions</text>
  <rect x="610" y="30" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">📦 Export</text>
  <rect x="694" y="30" width="86" height="22" rx="5" fill="url(#fv-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="737" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">⤵ Import</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="200" height="362" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="92" width="184" height="24" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="108" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Filter…</text>

  <text x="252" y="138" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">▾ 📁 xsl</text>
  <text x="266" y="156" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">invoices.xsl</text>
  <text x="266" y="172" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">credit_notes.xsl</text>
  <rect x="262" y="180" width="174" height="22" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="270" y="195" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">isc-normalize.xsl</text>
  <text x="252" y="218" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">▾ 📁 config</text>
  <text x="266" y="236" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">config.json</text>
  <text x="266" y="252" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">config-notifications.json</text>
  <text x="252" y="274" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">▾ 📁 pdf-templates</text>
  <text x="266" y="292" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">invoice-fr.rtf</text>
  <text x="252" y="314" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">▸ 📁 scripts</text>
  <text x="252" y="332" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">▸ 📁 archive</text>

  <rect x="452" y="84" width="328" height="362" rx="8" fill="rgba(74,158,255,0.04)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="464" y="108" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">isc-normalize.xsl</text>
  <rect x="608" y="92" width="80" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="648" y="107" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifier</text>
  <rect x="694" y="92" width="80" height="22" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="734" y="107" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Restaurer</text>

  <text x="464" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VERSION HISTORY</text>

  <rect x="464" y="148" width="306" height="36" rx="6" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <rect x="472" y="156" width="58" height="20" rx="10" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="501" y="171" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">CURRENT</text>
  <text x="540" y="171" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">v12 · 2026-05-12 14:32 · admin</text>
  <rect x="708" y="158" width="56" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="736" y="169" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">manual</text>

  <rect x="464" y="190" width="306" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="210" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">v11 · 2026-05-10 09:14 · admin</text>
  <rect x="708" y="198" width="56" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="736" y="209" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">manual</text>

  <rect x="464" y="228" width="306" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="248" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">v10 · 2026-04-29 17:42 · build.sh</text>
  <rect x="708" y="236" width="56" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="736" y="247" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">build</text>

  <rect x="464" y="266" width="306" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="286" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">v9  · 2026-04-15 11:08 · jde-extract</text>
  <rect x="700" y="274" width="64" height="16" rx="8" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="732" y="285" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">extract</text>

  <rect x="464" y="312" width="306" height="124" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="476" y="330" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIFF — v12 vs v11</text>
  <text x="476" y="350" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">+ &lt;xsl:template match="clientFacturation"&gt;</text>
  <text x="476" y="366" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">+   &lt;xsl:apply-templates select="*"/&gt;</text>
  <text x="476" y="382" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">- &lt;xsl:apply-templates select="raison"/&gt;</text>
  <text x="476" y="406" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">[ Monaco editor opens on Edit ]</text>
  <text x="476" y="424" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">[ PDF viewer opens on .pdf / .rtf ]</text>

  <rect x="20" y="116" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="131" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">File tree sidebar</text>
  <text x="30" y="144" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filterable · expandable folders</text>
  <line x1="200" y1="132" x2="248" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fv-arrow)"/>

  <rect x="820" y="148" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="163" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Version history</text>
  <text x="830" y="176" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">current + previous versions</text>
  <line x1="820" y1="164" x2="770" y2="164" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fv-arrow)"/>

  <rect x="820" y="232" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source badge</text>
  <text x="830" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">manual / build / extract</text>
  <line x1="820" y1="248" x2="764" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fv-arrow)"/>

  <rect x="20" y="332" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="347" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Diff + Edit + Restore</text>
  <text x="30" y="360" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Monaco · PDF viewer · revert</text>
  <line x1="200" y1="348" x2="464" y2="380" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fv-arrow)"/>
</svg>

---

## Layout

The page is split into two columns:

| Column | Contents |
|---|---|
| **Left sidebar** | Search box + tree of every versioned file in the environment. Folders are collapsible and show their file count. |
| **Main panel** | Toolbar + content area whose mode depends on the current selection (live file + history, package selection, editor or PDF viewer). |

---

## Sidebar — file tree

| Element | Description |
|---|---|
| **Search box** | Live filter on the file path (case-insensitive substring match). |
| **Folder rows** | One per directory. Click to expand / collapse. The badge on the right shows the total number of files contained recursively. |
| **File rows** | One per file with its short name and size (B / KB / MB). Click to select. |
| **Select-all row** *(package mode only)* | Toggles selection for every file currently filtered. |

When *Package mode* is active, every row also displays a checkbox; folder checkboxes show an **indeterminate state** when only some children are selected.

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
| **Comment** | Free-text comment captured at upload (e.g. `Edited in browser`). |
| **Size** | Stored size of the version. |
| **Actions** | Per-row buttons — see [row actions](#row-actions) below. |

### Source badges

| Badge | Meaning |
|---|---|
| `upload` *(blue)* | Manually uploaded from the toolbar or saved from the in-app editor. |
| `restore` *(orange)* | Generated by restoring an older version (the previous live file is automatically snapshotted under this source). |
| `jde_bip` *(purple)* | Extracted from JD Edwards BIP — JDE-specific source. |
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
