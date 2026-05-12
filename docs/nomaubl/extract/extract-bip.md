---
title: Extract BIP
description: "Extract a BIP (BI Publisher) job's payload from the JD Edwards Print Queue — input XML (F95630) or rendered output (F95631) or both — to a directory on the NomaUBL server."
keywords: [NomaUBL, BIP, BI Publisher, JD Edwards, JDE, extract, F9563110, F95630, F95631, Print Queue, RJJOBNBR, XDJOBNBR, XML, PDF]
---

# Extract BIP

The **Extract BIP** screen extracts the payload of a single **BI Publisher (BIP) Print Queue** job from a JD Edwards database to a directory on the NomaUBL server. The payload comes from the three BIP tables configured in *Database Connectors → JD Edwards*:

- `F9563110` — Report Definition Job Control (the job index, keyed by `RJJOBNBR`).
- `F95630` — XMLP Data Output Repository (the **input XML** BLOBs).
- `F95631` — XMLP Output Repository (the **rendered output** BLOBs — typically PDF).

:::info[Page spécifique à JD Edwards]
This page is part of the **JDE-specific** components of NomaUBL. Other Extract pages are source-agnostic; this one only applies when the source is JD Edwards and the BIP Print Queue is the extraction channel.
:::

The screen is split into two sections: **Parameters** and **Output**.

---

## At a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ebui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ebui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ebui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="340" rx="14" fill="url(#ebui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Extract BIP</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Parameters</text>

  <text x="240" y="118" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEMPLATE</text>
  <rect x="340" y="108" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="124" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <text x="556" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOB NUMBER</text>
  <rect x="640" y="108" width="140" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="710" y="124" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">42803</text>

  <text x="240" y="152" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANGUAGE</text>
  <rect x="340" y="142" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="157" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">FR</text>

  <text x="240" y="184" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Extract Mode</text>
  <rect x="340" y="174" width="120" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="400" y="189" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Input (XML)</text>
  <rect x="464" y="174" width="120" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="524" y="189" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Output</text>
  <rect x="588" y="174" width="120" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="648" y="189" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Both</text>

  <line x1="240" y1="212" x2="780" y2="212" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="236" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Output</text>
  <text x="240" y="262" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DIRECTORY</text>
  <rect x="340" y="252" width="370" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="267" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">%APP_HOME%/input/%TEMPLATE%</text>
  <rect x="716" y="252" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="746" y="267" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📁</text>

  <rect x="240" y="286" width="160" height="28" rx="6" fill="url(#ebui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="320" y="304" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Extract</text>

  <line x1="240" y1="326" x2="780" y2="326" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="348" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Result</text>
  <rect x="320" y="336" width="460" height="22" rx="5" fill="#0d1220" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="332" y="351" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ R42565_FBL00001_42803.xml written (1 file · F95630)</text>

  <rect x="20" y="108" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="123" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">RJJOBNBR / XDJOBNBR</text>
  <text x="30" y="136" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">indexes F9563110 / F95630</text>
  <line x1="220" y1="124" x2="640" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ebui-arrow)"/>

  <rect x="820" y="174" width="160" height="44" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="830" y="189" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">⚠ JDE-specific</text>
  <text x="830" y="202" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requires DB Connector</text>
  <text x="830" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">→ JD Edwards</text>
  <line x1="820" y1="184" x2="708" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ebui-arrow)"/>

  <rect x="20" y="252" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="267" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server-side path</text>
  <text x="30" y="280" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">%APP_HOME% resolved</text>
  <line x1="220" y1="268" x2="340" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ebui-arrow)"/>
</svg>

---

## Parameters

| Field | Description |
|---|---|
| **Template** | Document template (e.g. `invoices`, `credit_notes`). Used only to resolve the `%TEMPLATE%` placeholder of the default output directory inherited from `global.dirInput`. |
| **Job Number** | JDE BIP job number (`RJJOBNBR` in `F9563110` / `XDJOBNBR` in `F95630`). Required. |
| **Language** | Optional BIP language code filter (e.g. `FR`). When set, only the outputs matching this language are extracted. |
| **Extract Mode** | What to extract from the job — `Extract Input (XML)`, `Extract Output`, or `Extract Both`. See below. |

### Extract modes

| Mode | Source table | Content |
|---|---|---|
| **Extract Input (XML)** | `F95630` | The data XML fed to BI Publisher to render the report. Useful for re-running the BIP job locally or for transforming the data via a custom XSL. |
| **Extract Output** | `F95631` | The rendered output BLOBs — typically PDF, but XLS / HTML / RTF / ETEXT are also supported by BIP and extracted as-is. |
| **Extract Both** | `F95630` + `F95631` | Both halves at once. |

---

## Output

| Field | Description |
|---|---|
| **Output Directory** | Local path on the NomaUBL server where the extracted files will be written. Pre-filled from `global.dirInput` with `%TEMPLATE%` substituted; editable directly or via the **folder** button which opens a server-side directory browser. |
| **Extract** | Triggers the extraction. The button activates once both the job number and the output directory are filled. |

The file naming convention is driven by the JDE report metadata — typically `<report>_<version>_<job>.<ext>` (e.g. `R42565_XJDE0001_123456.xml`). When *Extract Both* is selected, the `.xml` and the rendered output share the same base name, so they sit next to each other in the output directory.

---

## Result

After the extraction completes, the **Result** section displays:

- A green **Extraction successful** message — or the error returned by the API on failure.
- The detail message returned by the server (typically the absolute paths of the files written).

---

## Tips & best practices

- **The connection settings come from *Database Connectors → JD Edwards*.** The schema and the three table names (`F95630` / `F95631` / `F9563110`) are configured there; no override is possible on this screen.
- **Use *Extract Input (XML)* when iterating on an XSL template.** The BIP data XML is exactly what the rendering engine consumes — feeding it into a local BIP or NomaUBL pipeline reproduces the report deterministically.
- **Use *Extract Output* when the rendered PDF is the deliverable.** This is the typical path for archival or e-mail distribution flows that consume the PDF directly.
- **The Language filter only narrows the output side.** When *Extract Mode* is set to *Extract Input (XML)*, the language has no effect — the data XML is language-agnostic.
- **For batch extraction across many jobs**, use *Sync → Fetch Input* with the BIP source, which discovers new jobs and applies the same extraction modes per template.
- **Keep the output directory dedicated.** Files are written under their JDE-derived names; an existing file with the same name is overwritten without warning.
