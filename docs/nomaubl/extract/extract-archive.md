---
title: Extract Archive
description: "Extract an archived invoice document from the NomaUBL database back to disk — original source XML (F564230) or generated UBL 2.1 (F564231) — by document key (FEDOC / FEDCT / FEKCO)."
keywords: [NomaUBL, extract, archive, invoice, XML, UBL, F564230, F564231, FEDOC, FEDCT, FEKCO, JD Edwards, SAP, NetSuite, source XML, generated UBL]
---

# Extract Archive

The **Extract Archive** screen reads an archived invoice from the NomaUBL database and writes the document file back to a directory on disk. Two flavours are supported:

- **Source XML** — the original ingestion payload captured at the time the invoice entered NomaUBL, stored in table `F564230`.
- **Generated UBL 2.1** — the EN 16931 UBL document that NomaUBL produced from the source, stored in table `F564231`.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — because the archive layer is part of NomaUBL itself. The document keys (`FEDOC` / `FEDCT` / `FEKCO`) keep their JDE-flavoured names by historical convention; functionally, they are generic identifiers that index any archived document.

---

## At a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="eaui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="eaui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="eaui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="340" rx="14" fill="url(#eaui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Extract Archive</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEMPLATE</text>
  <rect x="340" y="82" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <text x="556" y="98" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <rect x="600" y="82" width="180" height="24" rx="5" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="690" y="98" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">UBL (F564231) ▾</text>

  <text x="240" y="132" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Document key</text>

  <text x="240" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FEDOC</text>
  <rect x="300" y="148" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="163" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">2026142</text>
  <text x="436" y="163" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FEDCT</text>
  <rect x="490" y="148" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="163" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">RI</text>
  <text x="586" y="163" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FEKCO</text>
  <rect x="640" y="148" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="690" y="163" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">00070</text>

  <line x1="240" y1="186" x2="780" y2="186" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="210" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT DIRECTORY</text>
  <rect x="370" y="200" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="215" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">%APP_HOME%/input/%TEMPLATE%</text>
  <rect x="716" y="200" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="746" y="215" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📁</text>

  <text x="240" y="244" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT FILE</text>
  <rect x="370" y="234" width="410" height="22" rx="5" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="380" y="249" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">2026142_RI_00070_ubl.xml</text>
  <text x="666" y="249" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">read-only preview</text>

  <rect x="240" y="276" width="160" height="28" rx="6" fill="url(#eaui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="320" y="294" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Extract</text>

  <line x1="240" y1="316" x2="780" y2="316" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="338" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Result</text>
  <rect x="320" y="326" width="460" height="22" rx="5" fill="#0d1220" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="332" y="341" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ File written to /app/input/invoices/2026142_RI_00070_ubl.xml</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source = XML or UBL</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">F564230 or F564231</text>
  <line x1="220" y1="98" x2="340" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eaui-arrow)"/>

  <rect x="20" y="148" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="163" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three-part key</text>
  <text x="30" y="176" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">doc · type · company</text>
  <line x1="220" y1="164" x2="300" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eaui-arrow)"/>

  <rect x="820" y="234" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="249" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deterministic name</text>
  <text x="830" y="262" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">_ubl suffix on UBL</text>
  <line x1="820" y1="250" x2="780" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eaui-arrow)"/>
</svg>

---

## Database Query Parameters

A single form drives the extraction.

| Field | Description |
|---|---|
| **Template** | Document template (e.g. `invoices`, `credit_notes`). Used only to resolve the `%TEMPLATE%` placeholder of the default output directory inherited from `global.dirInput`. |
| **Source** | `XML — JDE Source (F564230)` extracts the original source XML stored at ingestion. `UBL — Generated UBL 2.1 (F564231)` extracts the UBL document NomaUBL produced from it. |
| **FEDOC** | Document number — primary key of the archived document. |
| **FEDCT** | Document type (e.g. `RI`, `RN`). |
| **FEKCO** | Company code (e.g. `00070`). |
| **Output Directory** | Absolute server-side path where the file will be written. Pre-filled from `global.dirInput` with `%TEMPLATE%` substituted; editable directly or via the **folder** button which opens a server-side directory browser. |
| **Output File** | Read-only preview of the resulting file path (see naming convention below). |

Click **Extract XML** to run the extraction. The button stays disabled until all three keys (`FEDOC`, `FEDCT`, `FEKCO`) and the output directory are filled.

---

## Output file naming

The file name is built deterministically from the document keys and the selected source:

| Source | Output file |
|---|---|
| `XML` (source) | `<FEDOC>_<FEDCT>_<FEKCO>.xml` |
| `UBL` (generated) | `<FEDOC>_<FEDCT>_<FEKCO>_ubl.xml` |

The `_ubl` suffix lets both flavours coexist in the same directory without overwriting each other.

---

## Result

After the extraction completes, the **Extraction Result** section displays:

- A green **Extraction successful** message — or the error returned by the API on failure.
- The detail message returned by the server (typically the absolute path of the file written).

---

## Tips & best practices

- **Use Source = UBL to recover the document NomaUBL emitted** — useful for a side-by-side comparison with PA-side feedback, or to re-validate an already-archived UBL without re-generating it.
- **Use Source = XML to inspect the original ingestion payload** without going back to the upstream system.
- **The Template only drives the default output path.** When the manual path already points to the right directory, leave Template empty.
- **An existing file with the same name is overwritten silently.** When extracting in batch from a script that calls the API, name the output directory accordingly.
- **The folder browser respects `%APP_HOME%` and `%PROCESS_HOME%` placeholders.** Pasting a path that uses one of those in the field above is supported; the API resolves them server-side before writing.
