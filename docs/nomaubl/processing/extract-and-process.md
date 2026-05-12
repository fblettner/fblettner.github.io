---
title: Extract and Process
description: "Chain an extraction (Archive / FTP / BIP) and a processing run (XML or UBL) in a single click — equivalent to running an Extract page then the matching Processing page back-to-back."
keywords: [NomaUBL, processing, extract, chained, archive, FTP, BIP, XML, UBL, JD Edwards, SAP, NetSuite, custom ERP]
---

# Extract and Process

The **Extract and Process** screen runs an **extraction** followed by a **processing** step in a single click. It is the runtime equivalent of running one of the *Extract* pages and then the matching *Processing* page back-to-back, with the same parameters surfaced on a single form.

The extraction half offers the same three sources documented under *Extract*:

- [Extract Archive](../extract/extract-archive.md) — pull an archived document from the NomaUBL database (`F564230` source XML or `F564231` generated UBL) by document key.
- [Extract FTP](../extract/extract-ftp.md) — download a file from an SFTP server using the JDE-style report / version / language / job key.
- [Extract BIP](../extract/extract-bip.md) — extract a JD Edwards BIP Print Queue job (input XML, rendered output, or both).

The processing half offers the same two pipelines documented under *Processing*:

- [Process Document](./document.md) — single processing entry point. The pipeline (XML transformation or direct UBL validation) is selected by the document template's `source` property. Replaces the legacy *Process XML* and *Process UBL* pages.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — except for the BIP source, which is JD Edwards-specific.

---

## At a glance

<svg viewBox="0 0 1000 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="epui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="epui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="epui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="480" rx="14" fill="url(#epui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Extract and Process</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="320" y="82" width="100" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="370" y="98" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Archive</text>
  <rect x="424" y="82" width="100" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="98" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">FTP</text>
  <rect x="528" y="82" width="100" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="578" y="98" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">BIP (JDE)</text>

  <text x="240" y="130" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOB NUMBER</text>
  <rect x="340" y="120" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="135" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">42803</text>
  <text x="476" y="135" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANG</text>
  <rect x="514" y="120" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="544" y="135" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">FR</text>
  <text x="588" y="135" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXTRACT MODE</text>
  <rect x="676" y="120" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="726" y="135" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Input (XML) ▾</text>

  <line x1="240" y1="158" x2="780" y2="158" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="182" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Process Type</text>
  <rect x="340" y="172" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="380" y="187" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">XML</text>
  <rect x="424" y="172" width="80" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="464" y="187" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL</text>

  <text x="240" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEMPLATE</text>
  <rect x="340" y="210" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="225" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <text x="560" y="225" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODE</text>
  <rect x="600" y="210" width="100" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="650" y="225" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">AUTO</text>

  <text x="240" y="258" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Send to PA</text>
  <rect x="340" y="248" width="120" height="22" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="400" y="263" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Use settings</text>

  <rect x="240" y="288" width="180" height="28" rx="6" fill="url(#epui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="330" y="306" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Run extract + process</text>

  <line x1="240" y1="328" x2="780" y2="328" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="352" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Extraction Result</text>
  <rect x="240" y="362" width="540" height="22" rx="5" fill="#0d1220" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="252" y="377" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ BIP job 42803 extracted → dirInput/invoices/R42565_FBL00001_42803.xml</text>

  <text x="240" y="408" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Process Result</text>
  <rect x="240" y="418" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="433" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY · MODULE · SUBMODULE · MESSAGE</text>

  <rect x="240" y="444" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="448" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="458" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="458" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">XSL · transform · 1 document → UBL 2.1</text>

  <rect x="240" y="470" width="540" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="474" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="484" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="484" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PA · submit · 200 Submitted · post-gen applied to BIP 42803</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source selector</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Archive · FTP · BIP</text>
  <line x1="220" y1="98" x2="320" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epui-arrow)"/>

  <rect x="820" y="120" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source-specific fields</text>
  <text x="830" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reshape with source</text>
  <line x1="820" y1="136" x2="780" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epui-arrow)"/>

  <rect x="20" y="172" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Process type</text>
  <text x="30" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chains XML or UBL pipeline</text>
  <line x1="220" y1="188" x2="340" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epui-arrow)"/>

  <rect x="20" y="288" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="303" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Single CTA</text>
  <text x="30" y="316" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">runs both steps</text>
  <line x1="220" y1="304" x2="240" y2="302" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epui-arrow)"/>

  <rect x="820" y="362" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="377" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two result panels</text>
  <text x="830" y="390" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">extraction halts processing</text>
  <line x1="820" y1="378" x2="780" y2="376" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epui-arrow)"/>
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
  <rect x="430" y="20" width="140" height="50" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="50" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run</text>
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
  <text x="500" y="482" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Process Type</text>
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
  <text x="500" y="684" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Process Result</text>
  <text x="500" y="702" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">aggregated outcome</text>
  <path d="M 100 580 L 60 580 L 60 690 L 40 690" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#ep-arrow-slate)"/>
  <line x1="240" y1="690" x2="410" y2="690" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#ep-arrow-slate)"/>
  <path d="M 380 580 L 410 580 L 410 660" stroke="#94a3b8" strokeWidth="1.3" fill="none" markerEnd="url(#ep-arrow-slate)"/>
  <line x1="760" y1="610" x2="590" y2="690" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#ep-arrow-slate)"/>
</svg>

The chain runs in two steps. The extraction step writes a file to `dirInput/<template>/`; on success, the matching processing pipeline picks it up. Any failure on the extraction step stops the chain — the processing step is skipped and only the **Extraction Result** carries a message.

---

## Source

The **Source** selector at the top picks one of the three extraction channels. The form below adapts to the chosen source.

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

Below the source selector, the **Process Type** picks between the two pipelines.

### Process Type = XML

Equivalent to running the [Process Document](./document.md) page on the just-extracted file when the chosen template's `source = XML`.

| Field | Description |
|---|---|
| **Template** | Document template — required. Drives the XSL pipeline and the validation rule set. |
| **Mode** | `AUTO`, `SINGLE`, `BURST` or `UBL`. See [Process Document — Modes (XML source)](./document.md#modes-xml-source). |
| **Replace** | `Skip` keeps existing invoices untouched; `Overwrite` re-imports them. |
| **Send to PA** | `Use settings` (default) or `Skip sending`. |

After a successful run, when the source is **BIP**, an additional **Apply post-generation** call updates the JDE job status — typically marking the BIP job as processed.

### Process Type = UBL

Equivalent to running the [Process Document](./document.md) page on the just-extracted file when the chosen template's `source = UBL`. The extracted file must already be UBL — typical when:

- the **Archive** source is set with the UBL flavour;
- the upstream system emits UBL directly;
- the **BIP** source is set with `Extract Output` and the JDE report emits UBL XML as its output (not PDF). In that case the UBL files retrieved from `F95631` are picked up directly by the UBL pipeline — no XSL transformation runs.

| Field | Description |
|---|---|
| **Mode** | `Process & Validate` (full pipeline) or `Validate only`. |
| **Replace Mode** | `Overwrite existing` (default) or `Skip`. |
| **Send to PA** | `Use settings`, `Force send` or `Skip sending`. |

The `(doc, dct, kco)` primary key is parsed from the invoice's `cbc:ID` via the document template's `idPattern` regex — filenames can be anything. See [Documents → Key extraction from cbc:ID](../management/documents.md#key-extraction-from-cbcid-when-source--ubl) for the regex setup.

#### Combinations not supported

| Source | Process Type | Status |
|---|---|---|
| BIP, *Extract Mode = Both* | UBL | Not supported — the extracted set contains both XML and rendered output, which cannot be processed as UBL. |
| BIP, *Extract Mode = Both* with multiple output rows | XML | Rejected — the extraction produces several files, the XML pipeline expects a single file per run. |

A clear error appears in the **Process Result** section when one of these combinations is attempted.

---

## Results

The screen splits the outcome into two sections:

- **Extraction Result** — the message returned by the extraction API; populated first.
- **Process Result** — the structured log table from the processing step (same columns as on the *XML* and *UBL* pages: Severity / Module / Submodule / Message); populated only when the extraction succeeded and the processing actually ran.

If the extraction fails, the processing step is skipped — the chained run halts on the first failure.

---

## Tips & best practices

- **Use *Extract and Process* for single ad-hoc runs.** The page combines two operations on one screen, so retrieving and processing one document needs a single click. For repeated unattended runs, prefer *Sync → Fetch Input* — it iterates the same pipeline in batch.
- **Match the Process Type to the extraction output.** The combinations table above lists the unsupported pairs; cross-check the BIP extract mode against the chosen process type before clicking Run.
- **For a BIP-driven workflow, leave the Process Type at XML.** It runs `Apply post-generation` on success, which updates the JDE job status — without it, the same job will be re-extracted on the next run.
- **The Extract Result keeps the raw API output.** When something goes wrong on the extraction side (missing job, file not found, SFTP credentials), the message returned by the extract API is the canonical diagnostic — read it before re-running.
- **Skip sending while iterating on a template.** Both halves expose the option (`No send` / `Skip sending`) — use it during template development to avoid producing duplicate PA submissions across iterations.
