---
title: XML Viewer
description: "Open any XML file — local or server-side — in a Monaco editor with syntax highlighting, pretty-print, line numbers and save-to-server. The lightweight companion to the validator and the XSL Editor."
keywords: [NomaUBL, XML, viewer, editor, Monaco, format, pretty-print, JD Edwards, SAP, NetSuite, custom ERP, UBL, source spool, BIP]
---

# XML Viewer

The **XML Viewer** opens any `.xml` file — either picked from the local computer or from a path on the NomaUBL server — in a full **Monaco editor** with XML syntax highlighting, line numbers, minimap and pretty-print. The buffer can be edited inline and written back to a server-side path.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. It is a generic editor for any XML the platform handles: UBL documents, raw source spools, BIP data XMLs, validation reports, configuration extracts.

The viewer does no validation, no transformation and no submission — it is a deliberately lightweight tool, complementary to the more specialised screens:

- For **transforming** a source XML into UBL: *UBL Tools → XSL Editor*.
- For **validating** a UBL or source XML: *UBL Tools → Validate*.
- For **inspecting an archived invoice** by document key: *Extract → Extract Archive*.

---

## At a glance

<svg viewBox="0 0 1000 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xvui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="xvui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="xvui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="400" rx="14" fill="url(#xvui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">XML Viewer</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="80" width="130" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="305" y="96" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📂 From computer</text>
  <rect x="378" y="80" width="130" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="443" y="96" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗄 From server</text>
  <rect x="640" y="80" width="70" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="675" y="96" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">{`{ } Format`}</text>
  <rect x="716" y="80" width="64" height="24" rx="5" fill="url(#xvui-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="748" y="96" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">💾 Save</text>

  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVER PATH</text>
  <rect x="340" y="118" width="440" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="133" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">/app/input/invoices/INV-2026-0143.xml</text>

  <rect x="240" y="150" width="540" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="252" y="165" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">ℹ Loaded: INV-2026-0143.xml</text>

  <rect x="240" y="182" width="540" height="226" rx="8" fill="#020617" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="182" width="540" height="22" rx="8" fill="#0d1220"/>
  <text x="248" y="197" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">INV-2026-0143.xml · 87 lines · XML · UTF-8</text>

  <text x="262" y="222" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">1</text>
  <text x="272" y="222" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;?xml </text>
  <text x="302" y="222" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">version</text>
  <text x="338" y="222" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">=</text>
  <text x="346" y="222" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">"1.0"</text>
  <text x="380" y="222" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">encoding</text>
  <text x="420" y="222" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">=</text>
  <text x="428" y="222" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">"UTF-8"</text>
  <text x="470" y="222" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">?&gt;</text>

  <text x="262" y="240" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">2</text>
  <text x="272" y="240" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Invoice </text>
  <text x="312" y="240" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">xmlns</text>
  <text x="340" y="240" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">=</text>
  <text x="348" y="240" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">"urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"</text>
  <text x="540" y="240" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&gt;</text>

  <text x="262" y="258" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">3</text>
  <text x="280" y="258" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cbc:CustomizationID</text>
  <text x="372" y="258" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&gt;</text>
  <text x="378" y="258" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">urn:cen.eu:en16931:2017</text>
  <text x="492" y="258" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/cbc:CustomizationID&gt;</text>

  <text x="262" y="276" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">4</text>
  <text x="280" y="276" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cbc:ID&gt;</text>
  <text x="320" y="276" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV-2026-0143</text>
  <text x="392" y="276" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/cbc:ID&gt;</text>

  <text x="262" y="294" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">5</text>
  <text x="280" y="294" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cbc:IssueDate&gt;</text>
  <text x="354" y="294" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-05-07</text>
  <text x="412" y="294" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/cbc:IssueDate&gt;</text>

  <text x="262" y="312" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">6</text>
  <text x="280" y="312" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cac:AccountingSupplierParty&gt;</text>

  <text x="262" y="330" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">7</text>
  <text x="288" y="330" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cac:Party&gt;</text>

  <text x="262" y="348" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">8</text>
  <text x="296" y="348" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cac:PartyName&gt;</text>

  <text x="262" y="366" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">9</text>
  <text x="304" y="366" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cbc:Name&gt;</text>
  <text x="356" y="366" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME France SAS</text>
  <text x="438" y="366" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/cbc:Name&gt;</text>

  <text x="252" y="384" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">10</text>
  <text x="296" y="384" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/cac:PartyName&gt;</text>

  <rect x="744" y="208" width="32" height="180" rx="3" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="746" y="210" width="28" height="32" rx="2" fill="rgba(74,158,255,0.15)"/>
  <rect x="746" y="246" width="28" height="60" rx="2" fill="rgba(255,255,255,0.04)"/>

  <rect x="20" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two load sources</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">local file or server path</text>
  <line x1="220" y1="96" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xvui-arrow)"/>

  <rect x="820" y="80" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Format + Save</text>
  <text x="830" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pretty-print and persist</text>
  <line x1="820" y1="96" x2="780" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xvui-arrow)"/>

  <rect x="20" y="182" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="197" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Monaco editor</text>
  <text x="30" y="210" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">syntax · line numbers · minimap</text>
  <line x1="220" y1="198" x2="240" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xvui-arrow)"/>
</svg>

---

## Toolbar

| Element | Description |
|---|---|
| **Load from computer** | Opens the operating-system file picker. Reads the selected `.xml` file in the browser, pretty-prints it and loads it into the editor. The server path field is pre-filled with the local filename so a subsequent **Save to server** writes the file under that name. |
| **Load from server** | Opens a server-side file browser. The selected file is read via the API and loaded into the editor; the server path field is set to the absolute path so **Save to server** writes the file back in place. |
| **Server path** | Editable absolute path used by **Save to server**. Pre-filled by the two load actions; can be edited freely before saving — convenient for a *Save As* effect. |
| **Format** | Pretty-prints the current buffer (re-indent, line breaks). Active once a file is loaded. |
| **Save to server** | Writes the current buffer to **Server path** via the API. Active once a file is loaded and the path is filled. |

---

## Editor area

When a file is loaded, the editor takes the rest of the page. It uses the same Monaco engine and theme as the *XSL Editor*:

- XML syntax highlighting and bracket matching
- Line numbers, minimap, dark theme
- `tabSize: 2`, `wordWrap: 'off'`, format-on-paste enabled

When no file is loaded, an **empty state** placeholder is shown instead — clicking it triggers the local file picker (same effect as **Load from computer**).

---

## Status messages

Inline feedback at the top of the editor area auto-refreshes after each action:

- `Loaded: <name>` (info, blue) when a file is loaded.
- `Saved to: <path>` (success, green) on a successful save.
- The error message returned by the API on a load or save failure (red).

---

## Tips & best practices

- **Use Format after pasting.** Format-on-paste handles inline edits, but for an XML that arrived collapsed on one line, the **Format** button restores readability.
- **Edit the Server path field before saving** to write the file to a different location — a built-in *Save As*.
- **The viewer never overwrites silently except on Save.** Loading a different file replaces the buffer with no on-disk change; only **Save to server** persists.
- **For repeatable transformations, prefer the XSL Editor.** Hand-editing XML produces a one-off result; the XSL Editor lets the same mapping run on every future invoice.
- **For validation, prefer the Validate screen.** The viewer never runs XSD or Schematron — it just shows the raw XML.
