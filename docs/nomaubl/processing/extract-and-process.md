---
title: Extract and Process
description: "Chain an extraction (Archive / FTP / BIP) and a processing run (XML or UBL) in a single click — equivalent to running an Extract page then the matching Processing page back-to-back."
keywords: [NomaUBL, processing, extract, chained, archive, FTP, BIP, XML, UBL, JD Edwards, SAP, NetSuite, custom ERP]
---

# Extract and Process

The **Extract and Process** screen runs an **extraction** followed by a **processing** step in a single click. It is the runtime equivalent of running one of the *Extract* pages and then the matching *Processing* page back-to-back, with the same parameters gathered on one page.

The page follows **four steps**, shown as cards across the top: **Source** (where the file comes from), **Processing** (the document and its options), **Extraction Result** and **Processing Result**. Each card shows its state in a few words — the source and its key, the document and its mode, then the outcome in green (success) or red (failure); a step still missing its key or its document is marked in red. A single **Extract & Process** button, in the page header, runs both halves: the page shows the extraction result, then moves to the processing result once it is known.

The extraction half offers the same three sources documented under *Extract*:

- [Extract Archive](../extract/extract-archive.md) — pull an archived document from the NomaUBL database (`F564230` source XML or `F564231` generated UBL) by document key.
- [Extract FTP](../extract/extract-ftp.md) — download a file from an SFTP server using the JDE-style report / version / language / job key.
- [Extract BIP](../extract/extract-bip.md) — extract a JD Edwards BIP Print Queue job (input XML, rendered output, or both).

The processing half offers the same two pipelines documented under *Processing*:

- [Process Document](./document.md) — single processing entry point. The pipeline (XML transformation or direct UBL validation) is selected by the document's `source` property.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — except for the BIP source, which is JD Edwards-specific.

---

## At a glance

<svg viewBox="0 0 1200 374" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="eapui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="eapui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="eapui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="eapui-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="330" rx="14" fill="url(#eapui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Extract &amp; Process</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Extract a spool from Archive, FTP, or BIP, then process with XML or UBL pipeline.</text>
  <rect x="840" y="34" width="120" height="22" rx="5" fill="url(#eapui-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="900.0" y="48.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Extract &amp; Process</text>
  <rect x="220" y="80" width="760" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="232" y="90" width="170" height="44" rx="8" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="240" y="97" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="248.0" y="108.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <text x="262" y="108.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="241" y="126" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">BIP · 42803</text>
  <line x1="403" y1="112.0" x2="415" y2="112.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#eapui-flow)"/>
  <rect x="418" y="90" width="170" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="426" y="97" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="434.0" y="108.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙</text>
  <text x="448" y="108.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSING</text>
  <text x="427" y="126" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">invoices · AUTO</text>
  <line x1="589" y1="112.0" x2="601" y2="112.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#eapui-flow)"/>
  <rect x="604" y="90" width="170" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="612" y="97" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="620.0" y="108.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓</text>
  <text x="634" y="108.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXTRACTION RESULT</text>
  <text x="613" y="126" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">BIP job 42803 extracted</text>
  <line x1="775" y1="112.0" x2="787" y2="112.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#eapui-flow)"/>
  <rect x="790" y="90" width="170" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="798" y="97" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="806.0" y="108.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="820" y="108.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSING RESULT</text>
  <text x="799" y="126" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">Processing completed successf…</text>
  <line x1="220" y1="144" x2="980" y2="144" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="170" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EXTRACT OPTIONS</text>
  <text x="240" y="196" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="370" y="182" width="143" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="371" y="183" width="38" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="390.0" y="197.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">BIP</text>
  <line x1="410" y1="187" x2="410" y2="201" stroke="#334155" strokeWidth="1"/>
  <text x="441.5" y="197.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Archive</text>
  <line x1="473" y1="187" x2="473" y2="201" stroke="#334155" strokeWidth="1"/>
  <text x="493.0" y="197.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">FTP</text>
  <text x="240" y="229" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Job Number</text>
  <rect x="370" y="214" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="228.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">42803</text>
  <text x="240" y="259" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Language</text>
  <rect x="370" y="244" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="258.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">FR</text>
  <text x="240" y="289" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Extract Mode</text>
  <rect x="370" y="274" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="288.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Extract Input (XML) ▾</text>
  <text x="240" y="319" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Input File</text>
  <rect x="370" y="304" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="318.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">R42565_XJDE0001_42803</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four steps</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each card shows its state</text>
  <line x1="200" y1="113.0" x2="232" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eapui-arrow)"/>
  <rect x="20" y="174" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="189" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source step</text>
  <text x="30" y="202" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">BIP · Archive · FTP</text>
  <line x1="200" y1="191.0" x2="238" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eapui-arrow)"/>
  <rect x="20" y="284" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="299" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fields of the source</text>
  <text x="30" y="312" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">change with the source</text>
  <line x1="200" y1="301.0" x2="238" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eapui-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One run button</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">extraction, then processing</text>
  <line x1="1000" y1="47.0" x2="960" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eapui-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Result steps</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">green = success, red = failure</text>
  <line x1="1000" y1="167.0" x2="920" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eapui-arrow)"/>
</svg>

---

## Pipeline at a glance

<svg viewBox="0 0 1000 760" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="ep-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#f87171"/></marker>
    <marker id="ep-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ep-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ep-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="ep-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ep-g-red" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87171" stopOpacity="0.16"/><stop offset="100%" stopColor="#f87171" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="405" y="20" width="190" height="50" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="50" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Extract &amp; Process</text>
  <rect x="410" y="100" width="180" height="50" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Source</text>
  <text x="500" y="140" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">decision</text>
  <line x1="500" y1="70" x2="500" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ep-arrow)"/>
  <rect x="40" y="190" width="220" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="150" y="214" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📦 Extract Archive</text>
  <text x="150" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564230 / F564231</text>
  <rect x="380" y="190" width="240" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="214" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🌐 Extract FTP</text>
  <text x="500" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">SFTP server</text>
  <rect x="740" y="190" width="220" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="850" y="214" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🖨 Extract BIP</text>
  <text x="850" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">JDE Print Queue</text>
  <path d="M 410 130 L 150 130 L 150 190" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="280" y="122" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Archive</text>
  <line x1="500" y1="150" x2="500" y2="190" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#ep-arrow)"/>
  <text x="510" y="172" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">FTP</text>
  <path d="M 590 130 L 850 130 L 850 190" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="720" y="122" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BIP</text>
  <rect x="380" y="290" width="240" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="314" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Extracted file</text>
  <text x="500" y="332" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">in dirInput/template/</text>
  <line x1="150" y1="250" x2="380" y2="295" stroke="#4a9eff" strokeWidth="1.3" markerEnd="url(#ep-arrow)"/>
  <line x1="500" y1="250" x2="500" y2="290" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#ep-arrow)"/>
  <line x1="850" y1="250" x2="620" y2="295" stroke="#4a9eff" strokeWidth="1.3" markerEnd="url(#ep-arrow)"/>
  <rect x="410" y="380" width="180" height="50" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="402" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Extraction OK?</text>
  <text x="500" y="420" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">decision</text>
  <line x1="500" y1="350" x2="500" y2="380" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ep-arrow)"/>
  <rect x="40" y="380" width="220" height="50" rx="10" fill="url(#ep-g-red)" stroke="#f87171" strokeWidth="1.4"/>
  <text x="150" y="402" fill="#f87171" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⛔ Halt</text>
  <text x="150" y="420" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">skip processing</text>
  <line x1="410" y1="405" x2="260" y2="405" stroke="#f87171" strokeWidth="1.4" markerEnd="url(#ep-arrow-red)"/>
  <text x="335" y="397" fontSize="9" fill="#f87171" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">No</text>
  <rect x="410" y="460" width="180" height="50" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="482" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Document source</text>
  <text x="500" y="500" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">decision</text>
  <line x1="500" y1="430" x2="500" y2="460" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ep-arrow)"/>
  <text x="510" y="448" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">Yes</text>
  <rect x="100" y="550" width="280" height="60" rx="10" fill="url(#ep-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="240" y="576" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Process Document (XML)</text>
  <text x="240" y="594" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">SINGLE / BURST / UBL / AUTO</text>
  <rect x="620" y="550" width="280" height="60" rx="10" fill="url(#ep-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="760" y="576" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Process Document (UBL)</text>
  <text x="760" y="594" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">Validate / Persist / Submit</text>
  <path d="M 410 510 L 240 510 L 240 550" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="320" y="502" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">XML</text>
  <path d="M 590 510 L 760 510 L 760 550" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="680" y="502" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">UBL</text>
  <rect x="40" y="660" width="200" height="60" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="4 3"/>
  <text x="140" y="684" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Post-generation</text>
  <text x="140" y="702" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">JDE job status update</text>
  <rect x="410" y="660" width="180" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="684" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Processing Result</text>
  <text x="500" y="702" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">aggregated outcome</text>
  <path d="M 100 580 L 60 580 L 60 690 L 40 690" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#ep-arrow-slate)"/>
  <line x1="240" y1="690" x2="410" y2="690" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#ep-arrow-slate)"/>
  <path d="M 380 580 L 410 580 L 410 660" stroke="#94a3b8" strokeWidth="1.3" fill="none" markerEnd="url(#ep-arrow-slate)"/>
  <line x1="760" y1="610" x2="590" y2="690" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#ep-arrow-slate)"/>
</svg>

The run has two phases. The extraction phase writes a file to `dirInput/<template>/`; on success, the matching processing pipeline picks it up. Any failure on the extraction step stops the chain — the processing phase is skipped and only the **Extraction Result** carries a message.

---

## Source

The **Source** step (*Extract Options*) picks one of the three extraction channels — **BIP**, **Archive** or **FTP** — and the fields below adapt to the chosen source. The step ends with the **Input File** line: the name the extracted file will take.

### Archive

Pulls an archived document by its database key.

| Field | Description |
|---|---|
| **DOC** | Document number — primary key of the archived document. |
| **DCT** | Document type code (e.g. `RI`, `RN`). |
| **KCO** | Company code (e.g. `00070`). |

The extracted file is written to `dirInput/<template>/` (with `%TEMPLATE%` resolved) under the name `<DOC>_<DCT>_<KCO>.xml` (or `_ubl.xml` if the source side is UBL). See [Extract Archive](../extract/extract-archive.md) for the full reference.

### FTP

Downloads a file from the configured SFTP server.

| Field | Description |
|---|---|
| **Report** | JDE-style report name (e.g. `R42565`). |
| **Version** | Report version (e.g. `XJDE0001`). |
| **Language** | Language code (e.g. `FR`). |
| **Job** | JDE job number. |

The extracted file is written to `dirInput/<template>/<REPORT>_<VERSION>_<LANG>_<JOB>.xml`. See [Extract FTP](../extract/extract-ftp.md) for the full reference.

### BIP

Extracts a job from the JDE BIP Print Queue.

| Field | Description |
|---|---|
| **Job Number** | JDE BIP job number (`RJJOBNBR`). |
| **Language** | Optional BIP language filter. |
| **Extract Mode** | `Extract Input (XML)`, `Extract Output` or `Extract Both`. See [Extract BIP](../extract/extract-bip.md) for the semantics of each. |

The extracted file's base name (`<report>_<version>_<job>`) is reused as the input for the processing step.

---

## Processing

The **Processing** step (*Processing Options*) starts with the **Template** — the document to run. The pipeline follows the document's source, shown read-only under it (*XML spool* or *UBL — already-formed UBL*), and the options below change with it. A **Debug profile** option (`No` / `Yes`) is available in both cases. With no document selected, the step card reads *No document* in red.

### XML-source document

Equivalent to running the [Process Document](./document.md) page on the just-extracted file when the chosen template's `source = XML`.

| Field | Description |
|---|---|
| **Template** | Document — required. Drives the XSL pipeline and the validation rule set. |
| **Mode** | `AUTO`, `SINGLE`, `BURST` or `UBL`. See [Process Document — Modes (XML source)](./document.md#modes-xml-source). |
| **Replace** | `Skip` keeps existing invoices untouched; `Overwrite` re-imports them. |
| **Send to PA** | `Use settings` (default) or `Skip sending`. |

After a successful run, when the source is **BIP**, an additional **Apply post-generation** call updates the JDE job status — typically marking the BIP job as processed.

### UBL-source document

Equivalent to running the [Process Document](./document.md) page on the just-extracted file when the chosen template's `source = UBL`. The extracted file must already be UBL — typical when:

- the **Archive** source is set with the UBL flavour;
- the upstream system emits UBL directly;
- the **BIP** source is set with `Extract Output` and the JDE report emits UBL XML as its output (not PDF). In that case the UBL files retrieved from `F95631` are picked up directly by the UBL pipeline — no XSL transformation runs.

| Field | Description |
|---|---|
| **Mode** | `Process & Validate` (full pipeline) or `Validate only`. |
| **Replace Mode** | `Overwrite existing` (default) or `Skip`. |
| **Send to PA** | `Use settings`, `Force send` or `Skip sending`. |

The `(doc, dct, kco)` primary key is parsed from the invoice's `cbc:ID` via the document's `idPattern` regex — filenames can be anything. See [Documents → Key extraction from cbc:ID](../management/documents.md#key-extraction-from-cbcid-when-source--ubl) for the regex setup.

#### Combinations not supported

| Source | Document source | Status |
|---|---|---|
| BIP, *Extract Mode = Both* | UBL | Not supported — the extracted set contains both XML and rendered output, which cannot be processed as UBL. |
| BIP, *Extract Mode = Both* with multiple output rows | XML | Rejected — the extraction produces several files, the XML pipeline expects a single file per run. |

A clear error appears in the **Processing Result** step when one of these combinations is attempted.

---

## Results

The outcome is split over the last two steps:

- **Extraction Result** — the message returned by the extraction API; populated first, and the step the page shows while the run goes on.
- **Processing Result** — the structured log table from the processing step (same columns as on the *XML* and *UBL* pages: Severity / Module / Submodule / Message); populated only when the extraction succeeded and the processing actually ran.

If the extraction fails, the processing step is skipped — the chained run halts on the first failure.

---

## Tips & best practices

- **Use *Extract and Process* for single ad-hoc runs.** The page combines two operations on one screen, so retrieving and processing one document needs a single click. For repeated unattended runs, prefer *Sync → Fetch Input* — it iterates the same pipeline in batch.
- **Match the document's source to the extraction output.** The combinations table above lists the unsupported pairs; cross-check the BIP extract mode against the document's source before running.
- **For a BIP-driven workflow, pick an XML-source document.** It runs `Apply post-generation` on success, which updates the JDE job status — without it, the same job will be re-extracted on the next run.
- **The Extract Result keeps the raw API output.** When something goes wrong on the extraction side (missing job, file not found, SFTP credentials), the message returned by the extract API is the canonical diagnostic — read it before re-running.
- **Skip sending while iterating on a template.** Both halves expose the option (`No send` / `Skip sending`) — use it during template development to avoid producing duplicate PA submissions across iterations.
