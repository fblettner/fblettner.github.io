---
title: Extract FTP
description: "Browse a remote SFTP server and download a file to a local directory on the NomaUBL server — uses the SFTP credentials configured in FTP Connectors."
keywords: [NomaUBL, SFTP, FTP, extract, browse, download, JD Edwards, SAP, NetSuite, custom ERP, server-side download, file browser, dirInput]
---

# Extract FTP

The **Extract FTP** screen browses a remote SFTP server and downloads a selected file to a directory on the local NomaUBL server. The connection credentials are read from *FTP Connectors → SFTP Server*; this page only handles browsing and download.

The page works regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — as long as the source files are reachable on an SFTP server.

---

## At a glance

<svg viewBox="0 0 1000 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="efui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="efui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="efui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="400" rx="14" fill="url(#efui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Extract FTP</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="80" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="265" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">..</text>
  <rect x="296" y="80" width="484" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="306" y="95" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/exports/jde/invoices/2026/05/</text>

  <rect x="240" y="112" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="127" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME · SIZE · MODIFIED</text>

  <rect x="240" y="138" width="540" height="24" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="153" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">📁 ../</text>
  <rect x="240" y="166" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">📁 archive/</text>

  <rect x="240" y="194" width="540" height="24" rx="5" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="252" y="209" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">📄 R42565_FBL00001_42803.xml</text>
  <text x="640" y="209" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">18 KB</text>
  <text x="720" y="209" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">today 12:34</text>

  <rect x="240" y="222" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="237" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">📄 R42565_FBL00001_42804.xml</text>
  <text x="640" y="237" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">19 KB</text>

  <line x1="240" y1="262" x2="780" y2="262" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="284" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SELECTED</text>
  <rect x="320" y="274" width="460" height="22" rx="5" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="330" y="289" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">/exports/jde/invoices/2026/05/R42565_FBL00001_42803.xml</text>

  <text x="240" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT DIRECTORY</text>
  <rect x="370" y="306" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="321" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">/app/input/invoices</text>
  <rect x="716" y="306" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="746" y="321" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📁</text>

  <rect x="240" y="340" width="160" height="28" rx="6" fill="url(#efui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="320" y="358" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">⬇ Download</text>

  <line x1="240" y1="380" x2="780" y2="380" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="402" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Result</text>
  <rect x="320" y="390" width="460" height="22" rx="5" fill="#0d1220" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="332" y="405" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ 18 KB downloaded → /app/input/invoices/R42565_FBL00001_42803.xml</text>

  <rect x="20" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Path bar + parent</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">starts at SFTP root</text>
  <line x1="220" y1="96" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#efui-arrow)"/>

  <rect x="20" y="194" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="209" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click to select</text>
  <text x="30" y="222" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one file at a time</text>
  <line x1="220" y1="210" x2="240" y2="206" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#efui-arrow)"/>

  <rect x="820" y="306" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="321" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Local destination</text>
  <text x="830" y="334" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">defaults to dirInput</text>
  <line x1="820" y1="322" x2="780" y2="318" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#efui-arrow)"/>
</svg>

---

## FTP Browser

The screen is a single section combining a server-side file browser, the local output directory and the download button.

### Path bar

The bar at the top of the file list shows the current SFTP path. On the initial load the path is empty (root of the `Directory` configured in *FTP Connectors*). The `..` button navigates one level up.

### File list

One row per entry. Folders are styled in the accent colour with a folder icon — clicking a folder opens its contents. Files use the XML icon and display their size in B / KB / MB — clicking a file selects it. An empty directory shows a `No files found` placeholder row.

### Form

| Field | Description |
|---|---|
| **Selected** | Read-only preview of the SFTP path of the currently selected file. Shown once a file is selected. |
| **Output Directory** | Local path on the NomaUBL server where the file will be written. Pre-filled from `global.dirInput` with all placeholders (`%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`) resolved and `%TEMPLATE%` removed. Editable. |
| **Download** | Triggers the SFTP fetch. The button activates once a file is selected and the output directory is filled. |

---

## Result

After the download, the **Result** section displays the success or error message returned by the API. The section appears once a download has been attempted.

---

## Tips & best practices

- **The starting directory is the `Directory` defined in *FTP Connectors → SFTP Server*.** Navigation above that root is allowed; the directories accessible above it depend on the SFTP user's home configuration on the server.
- **The output directory accepts any absolute path** — the resolved default value can be edited manually before download.
- **The page downloads one file at a time.** For batch downloads, use *Sync → Fetch Input*, which iterates the SFTP directory according to the configured rules.
- **The file keeps its remote name** on the local side — there is no rename option here. Rename it locally afterwards if a different name is needed.
