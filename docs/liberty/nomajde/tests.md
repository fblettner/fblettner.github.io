---
title: Non-regression tests
description: "The Tests folder of Nomajde: non-regression tests for JD Edwards played through the AIS server — cases drawn as a flow of calls (a form, a data query, a business function), what each call must answer, a reference run recorded before a change and compared after an ESU, a tools release or an upgrade; results, the job that plays a suite and its Excel report."
keywords: [Nomajde, JD Edwards, non-regression tests, AIS, test suite, test case, reference run, ESU, tools release, upgrade, smoke test, form service, data service]
---

# Non-regression tests

The **Tests** folder checks that JD Edwards **still behaves the same** after a change — an ESU, a tools release, an upgrade, a package build. A test calls JD Edwards the way an integration does, through the AIS server: it opens a form, reads a table, runs a business function, and compares the answer with what is expected and with a **reference run** recorded before the change.

Nothing is installed in JD Edwards, and no script is written: a case is built by picking calls in a list and letting JD Edwards' own answer fill in what to expect.

---

## At a glance

<svg viewBox="0 0 1320 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="400" rx="14" fill="url(#njt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tests</text>
  <line x1="232" y1="58" x2="1088" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="70" width="170" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="80" width="150" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="321.0" y="94.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New suite</text>
  <text x="248" y="118" fill="#94a3b8" fontSize="7.2" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE — WHAT MUST KEEP WORKING</text>
  <circle cx="253" cy="138" r="4" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="263" y="141.5" fill="#e2e8f0" fontSize="7.6" fontFamily="system-ui, sans-serif">AIS answers and says what it r…</text>
  <circle cx="253" cy="162" r="4" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="263" y="165.5" fill="#e2e8f0" fontSize="7.6" fontFamily="system-ui, sans-serif">The UDC types of system 00 a…</text>
  <rect x="242" y="176" width="158" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <circle cx="253" cy="186" r="4" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="263" y="189.5" fill="#e2e8f0" fontSize="7.6" fontFamily="system-ui, sans-serif">The Address Book search for…</text>
  <circle cx="253" cy="210" r="4" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="263" y="213.5" fill="#e2e8f0" fontSize="7.6" fontFamily="system-ui, sans-serif">A table that does not exist i…</text>
  <text x="250" y="236" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">+ New case</text>
  <rect x="416" y="70" width="41" height="22" rx="5" fill="url(#njt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="436.5" y="84.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="462" y="70" width="93" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="508.5" y="84.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run this case</text>
  <rect x="560" y="70" width="93" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="606.5" y="84.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run the suite</text>
  <rect x="658" y="70" width="126" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="721.0" y="84.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⚑ Record the reference</text>
  <rect x="418" y="101" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="435" y="110" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">also the cases that write</text>
  <rect x="702" y="99" width="98" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="751.0" y="113.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete the suite</text>
  <rect x="416" y="128" width="384" height="272" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="428" cy="140" r="0.6" fill="#334155"/>
  <circle cx="428" cy="156" r="0.6" fill="#334155"/>
  <circle cx="428" cy="172" r="0.6" fill="#334155"/>
  <circle cx="428" cy="188" r="0.6" fill="#334155"/>
  <circle cx="428" cy="204" r="0.6" fill="#334155"/>
  <circle cx="428" cy="220" r="0.6" fill="#334155"/>
  <circle cx="428" cy="236" r="0.6" fill="#334155"/>
  <circle cx="428" cy="252" r="0.6" fill="#334155"/>
  <circle cx="428" cy="268" r="0.6" fill="#334155"/>
  <circle cx="428" cy="284" r="0.6" fill="#334155"/>
  <circle cx="428" cy="300" r="0.6" fill="#334155"/>
  <circle cx="428" cy="316" r="0.6" fill="#334155"/>
  <circle cx="428" cy="332" r="0.6" fill="#334155"/>
  <circle cx="428" cy="348" r="0.6" fill="#334155"/>
  <circle cx="428" cy="364" r="0.6" fill="#334155"/>
  <circle cx="428" cy="380" r="0.6" fill="#334155"/>
  <circle cx="428" cy="396" r="0.6" fill="#334155"/>
  <circle cx="444" cy="140" r="0.6" fill="#334155"/>
  <circle cx="444" cy="156" r="0.6" fill="#334155"/>
  <circle cx="444" cy="172" r="0.6" fill="#334155"/>
  <circle cx="444" cy="188" r="0.6" fill="#334155"/>
  <circle cx="444" cy="204" r="0.6" fill="#334155"/>
  <circle cx="444" cy="220" r="0.6" fill="#334155"/>
  <circle cx="444" cy="236" r="0.6" fill="#334155"/>
  <circle cx="444" cy="252" r="0.6" fill="#334155"/>
  <circle cx="444" cy="268" r="0.6" fill="#334155"/>
  <circle cx="444" cy="284" r="0.6" fill="#334155"/>
  <circle cx="444" cy="300" r="0.6" fill="#334155"/>
  <circle cx="444" cy="316" r="0.6" fill="#334155"/>
  <circle cx="444" cy="332" r="0.6" fill="#334155"/>
  <circle cx="444" cy="348" r="0.6" fill="#334155"/>
  <circle cx="444" cy="364" r="0.6" fill="#334155"/>
  <circle cx="444" cy="380" r="0.6" fill="#334155"/>
  <circle cx="444" cy="396" r="0.6" fill="#334155"/>
  <circle cx="460" cy="140" r="0.6" fill="#334155"/>
  <circle cx="460" cy="156" r="0.6" fill="#334155"/>
  <circle cx="460" cy="172" r="0.6" fill="#334155"/>
  <circle cx="460" cy="188" r="0.6" fill="#334155"/>
  <circle cx="460" cy="204" r="0.6" fill="#334155"/>
  <circle cx="460" cy="220" r="0.6" fill="#334155"/>
  <circle cx="460" cy="236" r="0.6" fill="#334155"/>
  <circle cx="460" cy="252" r="0.6" fill="#334155"/>
  <circle cx="460" cy="268" r="0.6" fill="#334155"/>
  <circle cx="460" cy="284" r="0.6" fill="#334155"/>
  <circle cx="460" cy="300" r="0.6" fill="#334155"/>
  <circle cx="460" cy="316" r="0.6" fill="#334155"/>
  <circle cx="460" cy="332" r="0.6" fill="#334155"/>
  <circle cx="460" cy="348" r="0.6" fill="#334155"/>
  <circle cx="460" cy="364" r="0.6" fill="#334155"/>
  <circle cx="460" cy="380" r="0.6" fill="#334155"/>
  <circle cx="460" cy="396" r="0.6" fill="#334155"/>
  <circle cx="476" cy="140" r="0.6" fill="#334155"/>
  <circle cx="476" cy="156" r="0.6" fill="#334155"/>
  <circle cx="476" cy="172" r="0.6" fill="#334155"/>
  <circle cx="476" cy="188" r="0.6" fill="#334155"/>
  <circle cx="476" cy="204" r="0.6" fill="#334155"/>
  <circle cx="476" cy="220" r="0.6" fill="#334155"/>
  <circle cx="476" cy="236" r="0.6" fill="#334155"/>
  <circle cx="476" cy="252" r="0.6" fill="#334155"/>
  <circle cx="476" cy="268" r="0.6" fill="#334155"/>
  <circle cx="476" cy="284" r="0.6" fill="#334155"/>
  <circle cx="476" cy="300" r="0.6" fill="#334155"/>
  <circle cx="476" cy="316" r="0.6" fill="#334155"/>
  <circle cx="476" cy="332" r="0.6" fill="#334155"/>
  <circle cx="476" cy="348" r="0.6" fill="#334155"/>
  <circle cx="476" cy="364" r="0.6" fill="#334155"/>
  <circle cx="476" cy="380" r="0.6" fill="#334155"/>
  <circle cx="476" cy="396" r="0.6" fill="#334155"/>
  <circle cx="492" cy="140" r="0.6" fill="#334155"/>
  <circle cx="492" cy="156" r="0.6" fill="#334155"/>
  <circle cx="492" cy="172" r="0.6" fill="#334155"/>
  <circle cx="492" cy="188" r="0.6" fill="#334155"/>
  <circle cx="492" cy="204" r="0.6" fill="#334155"/>
  <circle cx="492" cy="220" r="0.6" fill="#334155"/>
  <circle cx="492" cy="236" r="0.6" fill="#334155"/>
  <circle cx="492" cy="252" r="0.6" fill="#334155"/>
  <circle cx="492" cy="268" r="0.6" fill="#334155"/>
  <circle cx="492" cy="284" r="0.6" fill="#334155"/>
  <circle cx="492" cy="300" r="0.6" fill="#334155"/>
  <circle cx="492" cy="316" r="0.6" fill="#334155"/>
  <circle cx="492" cy="332" r="0.6" fill="#334155"/>
  <circle cx="492" cy="348" r="0.6" fill="#334155"/>
  <circle cx="492" cy="364" r="0.6" fill="#334155"/>
  <circle cx="492" cy="380" r="0.6" fill="#334155"/>
  <circle cx="492" cy="396" r="0.6" fill="#334155"/>
  <circle cx="508" cy="140" r="0.6" fill="#334155"/>
  <circle cx="508" cy="156" r="0.6" fill="#334155"/>
  <circle cx="508" cy="172" r="0.6" fill="#334155"/>
  <circle cx="508" cy="188" r="0.6" fill="#334155"/>
  <circle cx="508" cy="204" r="0.6" fill="#334155"/>
  <circle cx="508" cy="220" r="0.6" fill="#334155"/>
  <circle cx="508" cy="236" r="0.6" fill="#334155"/>
  <circle cx="508" cy="252" r="0.6" fill="#334155"/>
  <circle cx="508" cy="268" r="0.6" fill="#334155"/>
  <circle cx="508" cy="284" r="0.6" fill="#334155"/>
  <circle cx="508" cy="300" r="0.6" fill="#334155"/>
  <circle cx="508" cy="316" r="0.6" fill="#334155"/>
  <circle cx="508" cy="332" r="0.6" fill="#334155"/>
  <circle cx="508" cy="348" r="0.6" fill="#334155"/>
  <circle cx="508" cy="364" r="0.6" fill="#334155"/>
  <circle cx="508" cy="380" r="0.6" fill="#334155"/>
  <circle cx="508" cy="396" r="0.6" fill="#334155"/>
  <circle cx="524" cy="140" r="0.6" fill="#334155"/>
  <circle cx="524" cy="156" r="0.6" fill="#334155"/>
  <circle cx="524" cy="172" r="0.6" fill="#334155"/>
  <circle cx="524" cy="188" r="0.6" fill="#334155"/>
  <circle cx="524" cy="204" r="0.6" fill="#334155"/>
  <circle cx="524" cy="220" r="0.6" fill="#334155"/>
  <circle cx="524" cy="236" r="0.6" fill="#334155"/>
  <circle cx="524" cy="252" r="0.6" fill="#334155"/>
  <circle cx="524" cy="268" r="0.6" fill="#334155"/>
  <circle cx="524" cy="284" r="0.6" fill="#334155"/>
  <circle cx="524" cy="300" r="0.6" fill="#334155"/>
  <circle cx="524" cy="316" r="0.6" fill="#334155"/>
  <circle cx="524" cy="332" r="0.6" fill="#334155"/>
  <circle cx="524" cy="348" r="0.6" fill="#334155"/>
  <circle cx="524" cy="364" r="0.6" fill="#334155"/>
  <circle cx="524" cy="380" r="0.6" fill="#334155"/>
  <circle cx="524" cy="396" r="0.6" fill="#334155"/>
  <circle cx="540" cy="140" r="0.6" fill="#334155"/>
  <circle cx="540" cy="156" r="0.6" fill="#334155"/>
  <circle cx="540" cy="172" r="0.6" fill="#334155"/>
  <circle cx="540" cy="188" r="0.6" fill="#334155"/>
  <circle cx="540" cy="204" r="0.6" fill="#334155"/>
  <circle cx="540" cy="220" r="0.6" fill="#334155"/>
  <circle cx="540" cy="236" r="0.6" fill="#334155"/>
  <circle cx="540" cy="252" r="0.6" fill="#334155"/>
  <circle cx="540" cy="268" r="0.6" fill="#334155"/>
  <circle cx="540" cy="284" r="0.6" fill="#334155"/>
  <circle cx="540" cy="300" r="0.6" fill="#334155"/>
  <circle cx="540" cy="316" r="0.6" fill="#334155"/>
  <circle cx="540" cy="332" r="0.6" fill="#334155"/>
  <circle cx="540" cy="348" r="0.6" fill="#334155"/>
  <circle cx="540" cy="364" r="0.6" fill="#334155"/>
  <circle cx="540" cy="380" r="0.6" fill="#334155"/>
  <circle cx="540" cy="396" r="0.6" fill="#334155"/>
  <circle cx="556" cy="140" r="0.6" fill="#334155"/>
  <circle cx="556" cy="156" r="0.6" fill="#334155"/>
  <circle cx="556" cy="172" r="0.6" fill="#334155"/>
  <circle cx="556" cy="188" r="0.6" fill="#334155"/>
  <circle cx="556" cy="204" r="0.6" fill="#334155"/>
  <circle cx="556" cy="220" r="0.6" fill="#334155"/>
  <circle cx="556" cy="236" r="0.6" fill="#334155"/>
  <circle cx="556" cy="252" r="0.6" fill="#334155"/>
  <circle cx="556" cy="268" r="0.6" fill="#334155"/>
  <circle cx="556" cy="284" r="0.6" fill="#334155"/>
  <circle cx="556" cy="300" r="0.6" fill="#334155"/>
  <circle cx="556" cy="316" r="0.6" fill="#334155"/>
  <circle cx="556" cy="332" r="0.6" fill="#334155"/>
  <circle cx="556" cy="348" r="0.6" fill="#334155"/>
  <circle cx="556" cy="364" r="0.6" fill="#334155"/>
  <circle cx="556" cy="380" r="0.6" fill="#334155"/>
  <circle cx="556" cy="396" r="0.6" fill="#334155"/>
  <circle cx="572" cy="140" r="0.6" fill="#334155"/>
  <circle cx="572" cy="156" r="0.6" fill="#334155"/>
  <circle cx="572" cy="172" r="0.6" fill="#334155"/>
  <circle cx="572" cy="188" r="0.6" fill="#334155"/>
  <circle cx="572" cy="204" r="0.6" fill="#334155"/>
  <circle cx="572" cy="220" r="0.6" fill="#334155"/>
  <circle cx="572" cy="236" r="0.6" fill="#334155"/>
  <circle cx="572" cy="252" r="0.6" fill="#334155"/>
  <circle cx="572" cy="268" r="0.6" fill="#334155"/>
  <circle cx="572" cy="284" r="0.6" fill="#334155"/>
  <circle cx="572" cy="300" r="0.6" fill="#334155"/>
  <circle cx="572" cy="316" r="0.6" fill="#334155"/>
  <circle cx="572" cy="332" r="0.6" fill="#334155"/>
  <circle cx="572" cy="348" r="0.6" fill="#334155"/>
  <circle cx="572" cy="364" r="0.6" fill="#334155"/>
  <circle cx="572" cy="380" r="0.6" fill="#334155"/>
  <circle cx="572" cy="396" r="0.6" fill="#334155"/>
  <circle cx="588" cy="140" r="0.6" fill="#334155"/>
  <circle cx="588" cy="156" r="0.6" fill="#334155"/>
  <circle cx="588" cy="172" r="0.6" fill="#334155"/>
  <circle cx="588" cy="188" r="0.6" fill="#334155"/>
  <circle cx="588" cy="204" r="0.6" fill="#334155"/>
  <circle cx="588" cy="220" r="0.6" fill="#334155"/>
  <circle cx="588" cy="236" r="0.6" fill="#334155"/>
  <circle cx="588" cy="252" r="0.6" fill="#334155"/>
  <circle cx="588" cy="268" r="0.6" fill="#334155"/>
  <circle cx="588" cy="284" r="0.6" fill="#334155"/>
  <circle cx="588" cy="300" r="0.6" fill="#334155"/>
  <circle cx="588" cy="316" r="0.6" fill="#334155"/>
  <circle cx="588" cy="332" r="0.6" fill="#334155"/>
  <circle cx="588" cy="348" r="0.6" fill="#334155"/>
  <circle cx="588" cy="364" r="0.6" fill="#334155"/>
  <circle cx="588" cy="380" r="0.6" fill="#334155"/>
  <circle cx="588" cy="396" r="0.6" fill="#334155"/>
  <circle cx="604" cy="140" r="0.6" fill="#334155"/>
  <circle cx="604" cy="156" r="0.6" fill="#334155"/>
  <circle cx="604" cy="172" r="0.6" fill="#334155"/>
  <circle cx="604" cy="188" r="0.6" fill="#334155"/>
  <circle cx="604" cy="204" r="0.6" fill="#334155"/>
  <circle cx="604" cy="220" r="0.6" fill="#334155"/>
  <circle cx="604" cy="236" r="0.6" fill="#334155"/>
  <circle cx="604" cy="252" r="0.6" fill="#334155"/>
  <circle cx="604" cy="268" r="0.6" fill="#334155"/>
  <circle cx="604" cy="284" r="0.6" fill="#334155"/>
  <circle cx="604" cy="300" r="0.6" fill="#334155"/>
  <circle cx="604" cy="316" r="0.6" fill="#334155"/>
  <circle cx="604" cy="332" r="0.6" fill="#334155"/>
  <circle cx="604" cy="348" r="0.6" fill="#334155"/>
  <circle cx="604" cy="364" r="0.6" fill="#334155"/>
  <circle cx="604" cy="380" r="0.6" fill="#334155"/>
  <circle cx="604" cy="396" r="0.6" fill="#334155"/>
  <circle cx="620" cy="140" r="0.6" fill="#334155"/>
  <circle cx="620" cy="156" r="0.6" fill="#334155"/>
  <circle cx="620" cy="172" r="0.6" fill="#334155"/>
  <circle cx="620" cy="188" r="0.6" fill="#334155"/>
  <circle cx="620" cy="204" r="0.6" fill="#334155"/>
  <circle cx="620" cy="220" r="0.6" fill="#334155"/>
  <circle cx="620" cy="236" r="0.6" fill="#334155"/>
  <circle cx="620" cy="252" r="0.6" fill="#334155"/>
  <circle cx="620" cy="268" r="0.6" fill="#334155"/>
  <circle cx="620" cy="284" r="0.6" fill="#334155"/>
  <circle cx="620" cy="300" r="0.6" fill="#334155"/>
  <circle cx="620" cy="316" r="0.6" fill="#334155"/>
  <circle cx="620" cy="332" r="0.6" fill="#334155"/>
  <circle cx="620" cy="348" r="0.6" fill="#334155"/>
  <circle cx="620" cy="364" r="0.6" fill="#334155"/>
  <circle cx="620" cy="380" r="0.6" fill="#334155"/>
  <circle cx="620" cy="396" r="0.6" fill="#334155"/>
  <circle cx="636" cy="140" r="0.6" fill="#334155"/>
  <circle cx="636" cy="156" r="0.6" fill="#334155"/>
  <circle cx="636" cy="172" r="0.6" fill="#334155"/>
  <circle cx="636" cy="188" r="0.6" fill="#334155"/>
  <circle cx="636" cy="204" r="0.6" fill="#334155"/>
  <circle cx="636" cy="220" r="0.6" fill="#334155"/>
  <circle cx="636" cy="236" r="0.6" fill="#334155"/>
  <circle cx="636" cy="252" r="0.6" fill="#334155"/>
  <circle cx="636" cy="268" r="0.6" fill="#334155"/>
  <circle cx="636" cy="284" r="0.6" fill="#334155"/>
  <circle cx="636" cy="300" r="0.6" fill="#334155"/>
  <circle cx="636" cy="316" r="0.6" fill="#334155"/>
  <circle cx="636" cy="332" r="0.6" fill="#334155"/>
  <circle cx="636" cy="348" r="0.6" fill="#334155"/>
  <circle cx="636" cy="364" r="0.6" fill="#334155"/>
  <circle cx="636" cy="380" r="0.6" fill="#334155"/>
  <circle cx="636" cy="396" r="0.6" fill="#334155"/>
  <circle cx="652" cy="140" r="0.6" fill="#334155"/>
  <circle cx="652" cy="156" r="0.6" fill="#334155"/>
  <circle cx="652" cy="172" r="0.6" fill="#334155"/>
  <circle cx="652" cy="188" r="0.6" fill="#334155"/>
  <circle cx="652" cy="204" r="0.6" fill="#334155"/>
  <circle cx="652" cy="220" r="0.6" fill="#334155"/>
  <circle cx="652" cy="236" r="0.6" fill="#334155"/>
  <circle cx="652" cy="252" r="0.6" fill="#334155"/>
  <circle cx="652" cy="268" r="0.6" fill="#334155"/>
  <circle cx="652" cy="284" r="0.6" fill="#334155"/>
  <circle cx="652" cy="300" r="0.6" fill="#334155"/>
  <circle cx="652" cy="316" r="0.6" fill="#334155"/>
  <circle cx="652" cy="332" r="0.6" fill="#334155"/>
  <circle cx="652" cy="348" r="0.6" fill="#334155"/>
  <circle cx="652" cy="364" r="0.6" fill="#334155"/>
  <circle cx="652" cy="380" r="0.6" fill="#334155"/>
  <circle cx="652" cy="396" r="0.6" fill="#334155"/>
  <circle cx="668" cy="140" r="0.6" fill="#334155"/>
  <circle cx="668" cy="156" r="0.6" fill="#334155"/>
  <circle cx="668" cy="172" r="0.6" fill="#334155"/>
  <circle cx="668" cy="188" r="0.6" fill="#334155"/>
  <circle cx="668" cy="204" r="0.6" fill="#334155"/>
  <circle cx="668" cy="220" r="0.6" fill="#334155"/>
  <circle cx="668" cy="236" r="0.6" fill="#334155"/>
  <circle cx="668" cy="252" r="0.6" fill="#334155"/>
  <circle cx="668" cy="268" r="0.6" fill="#334155"/>
  <circle cx="668" cy="284" r="0.6" fill="#334155"/>
  <circle cx="668" cy="300" r="0.6" fill="#334155"/>
  <circle cx="668" cy="316" r="0.6" fill="#334155"/>
  <circle cx="668" cy="332" r="0.6" fill="#334155"/>
  <circle cx="668" cy="348" r="0.6" fill="#334155"/>
  <circle cx="668" cy="364" r="0.6" fill="#334155"/>
  <circle cx="668" cy="380" r="0.6" fill="#334155"/>
  <circle cx="668" cy="396" r="0.6" fill="#334155"/>
  <circle cx="684" cy="140" r="0.6" fill="#334155"/>
  <circle cx="684" cy="156" r="0.6" fill="#334155"/>
  <circle cx="684" cy="172" r="0.6" fill="#334155"/>
  <circle cx="684" cy="188" r="0.6" fill="#334155"/>
  <circle cx="684" cy="204" r="0.6" fill="#334155"/>
  <circle cx="684" cy="220" r="0.6" fill="#334155"/>
  <circle cx="684" cy="236" r="0.6" fill="#334155"/>
  <circle cx="684" cy="252" r="0.6" fill="#334155"/>
  <circle cx="684" cy="268" r="0.6" fill="#334155"/>
  <circle cx="684" cy="284" r="0.6" fill="#334155"/>
  <circle cx="684" cy="300" r="0.6" fill="#334155"/>
  <circle cx="684" cy="316" r="0.6" fill="#334155"/>
  <circle cx="684" cy="332" r="0.6" fill="#334155"/>
  <circle cx="684" cy="348" r="0.6" fill="#334155"/>
  <circle cx="684" cy="364" r="0.6" fill="#334155"/>
  <circle cx="684" cy="380" r="0.6" fill="#334155"/>
  <circle cx="684" cy="396" r="0.6" fill="#334155"/>
  <circle cx="700" cy="140" r="0.6" fill="#334155"/>
  <circle cx="700" cy="156" r="0.6" fill="#334155"/>
  <circle cx="700" cy="172" r="0.6" fill="#334155"/>
  <circle cx="700" cy="188" r="0.6" fill="#334155"/>
  <circle cx="700" cy="204" r="0.6" fill="#334155"/>
  <circle cx="700" cy="220" r="0.6" fill="#334155"/>
  <circle cx="700" cy="236" r="0.6" fill="#334155"/>
  <circle cx="700" cy="252" r="0.6" fill="#334155"/>
  <circle cx="700" cy="268" r="0.6" fill="#334155"/>
  <circle cx="700" cy="284" r="0.6" fill="#334155"/>
  <circle cx="700" cy="300" r="0.6" fill="#334155"/>
  <circle cx="700" cy="316" r="0.6" fill="#334155"/>
  <circle cx="700" cy="332" r="0.6" fill="#334155"/>
  <circle cx="700" cy="348" r="0.6" fill="#334155"/>
  <circle cx="700" cy="364" r="0.6" fill="#334155"/>
  <circle cx="700" cy="380" r="0.6" fill="#334155"/>
  <circle cx="700" cy="396" r="0.6" fill="#334155"/>
  <circle cx="716" cy="140" r="0.6" fill="#334155"/>
  <circle cx="716" cy="156" r="0.6" fill="#334155"/>
  <circle cx="716" cy="172" r="0.6" fill="#334155"/>
  <circle cx="716" cy="188" r="0.6" fill="#334155"/>
  <circle cx="716" cy="204" r="0.6" fill="#334155"/>
  <circle cx="716" cy="220" r="0.6" fill="#334155"/>
  <circle cx="716" cy="236" r="0.6" fill="#334155"/>
  <circle cx="716" cy="252" r="0.6" fill="#334155"/>
  <circle cx="716" cy="268" r="0.6" fill="#334155"/>
  <circle cx="716" cy="284" r="0.6" fill="#334155"/>
  <circle cx="716" cy="300" r="0.6" fill="#334155"/>
  <circle cx="716" cy="316" r="0.6" fill="#334155"/>
  <circle cx="716" cy="332" r="0.6" fill="#334155"/>
  <circle cx="716" cy="348" r="0.6" fill="#334155"/>
  <circle cx="716" cy="364" r="0.6" fill="#334155"/>
  <circle cx="716" cy="380" r="0.6" fill="#334155"/>
  <circle cx="716" cy="396" r="0.6" fill="#334155"/>
  <circle cx="732" cy="140" r="0.6" fill="#334155"/>
  <circle cx="732" cy="156" r="0.6" fill="#334155"/>
  <circle cx="732" cy="172" r="0.6" fill="#334155"/>
  <circle cx="732" cy="188" r="0.6" fill="#334155"/>
  <circle cx="732" cy="204" r="0.6" fill="#334155"/>
  <circle cx="732" cy="220" r="0.6" fill="#334155"/>
  <circle cx="732" cy="236" r="0.6" fill="#334155"/>
  <circle cx="732" cy="252" r="0.6" fill="#334155"/>
  <circle cx="732" cy="268" r="0.6" fill="#334155"/>
  <circle cx="732" cy="284" r="0.6" fill="#334155"/>
  <circle cx="732" cy="300" r="0.6" fill="#334155"/>
  <circle cx="732" cy="316" r="0.6" fill="#334155"/>
  <circle cx="732" cy="332" r="0.6" fill="#334155"/>
  <circle cx="732" cy="348" r="0.6" fill="#334155"/>
  <circle cx="732" cy="364" r="0.6" fill="#334155"/>
  <circle cx="732" cy="380" r="0.6" fill="#334155"/>
  <circle cx="732" cy="396" r="0.6" fill="#334155"/>
  <circle cx="748" cy="140" r="0.6" fill="#334155"/>
  <circle cx="748" cy="156" r="0.6" fill="#334155"/>
  <circle cx="748" cy="172" r="0.6" fill="#334155"/>
  <circle cx="748" cy="188" r="0.6" fill="#334155"/>
  <circle cx="748" cy="204" r="0.6" fill="#334155"/>
  <circle cx="748" cy="220" r="0.6" fill="#334155"/>
  <circle cx="748" cy="236" r="0.6" fill="#334155"/>
  <circle cx="748" cy="252" r="0.6" fill="#334155"/>
  <circle cx="748" cy="268" r="0.6" fill="#334155"/>
  <circle cx="748" cy="284" r="0.6" fill="#334155"/>
  <circle cx="748" cy="300" r="0.6" fill="#334155"/>
  <circle cx="748" cy="316" r="0.6" fill="#334155"/>
  <circle cx="748" cy="332" r="0.6" fill="#334155"/>
  <circle cx="748" cy="348" r="0.6" fill="#334155"/>
  <circle cx="748" cy="364" r="0.6" fill="#334155"/>
  <circle cx="748" cy="380" r="0.6" fill="#334155"/>
  <circle cx="748" cy="396" r="0.6" fill="#334155"/>
  <circle cx="764" cy="140" r="0.6" fill="#334155"/>
  <circle cx="764" cy="156" r="0.6" fill="#334155"/>
  <circle cx="764" cy="172" r="0.6" fill="#334155"/>
  <circle cx="764" cy="188" r="0.6" fill="#334155"/>
  <circle cx="764" cy="204" r="0.6" fill="#334155"/>
  <circle cx="764" cy="220" r="0.6" fill="#334155"/>
  <circle cx="764" cy="236" r="0.6" fill="#334155"/>
  <circle cx="764" cy="252" r="0.6" fill="#334155"/>
  <circle cx="764" cy="268" r="0.6" fill="#334155"/>
  <circle cx="764" cy="284" r="0.6" fill="#334155"/>
  <circle cx="764" cy="300" r="0.6" fill="#334155"/>
  <circle cx="764" cy="316" r="0.6" fill="#334155"/>
  <circle cx="764" cy="332" r="0.6" fill="#334155"/>
  <circle cx="764" cy="348" r="0.6" fill="#334155"/>
  <circle cx="764" cy="364" r="0.6" fill="#334155"/>
  <circle cx="764" cy="380" r="0.6" fill="#334155"/>
  <circle cx="764" cy="396" r="0.6" fill="#334155"/>
  <circle cx="780" cy="140" r="0.6" fill="#334155"/>
  <circle cx="780" cy="156" r="0.6" fill="#334155"/>
  <circle cx="780" cy="172" r="0.6" fill="#334155"/>
  <circle cx="780" cy="188" r="0.6" fill="#334155"/>
  <circle cx="780" cy="204" r="0.6" fill="#334155"/>
  <circle cx="780" cy="220" r="0.6" fill="#334155"/>
  <circle cx="780" cy="236" r="0.6" fill="#334155"/>
  <circle cx="780" cy="252" r="0.6" fill="#334155"/>
  <circle cx="780" cy="268" r="0.6" fill="#334155"/>
  <circle cx="780" cy="284" r="0.6" fill="#334155"/>
  <circle cx="780" cy="300" r="0.6" fill="#334155"/>
  <circle cx="780" cy="316" r="0.6" fill="#334155"/>
  <circle cx="780" cy="332" r="0.6" fill="#334155"/>
  <circle cx="780" cy="348" r="0.6" fill="#334155"/>
  <circle cx="780" cy="364" r="0.6" fill="#334155"/>
  <circle cx="780" cy="380" r="0.6" fill="#334155"/>
  <circle cx="780" cy="396" r="0.6" fill="#334155"/>
  <circle cx="796" cy="140" r="0.6" fill="#334155"/>
  <circle cx="796" cy="156" r="0.6" fill="#334155"/>
  <circle cx="796" cy="172" r="0.6" fill="#334155"/>
  <circle cx="796" cy="188" r="0.6" fill="#334155"/>
  <circle cx="796" cy="204" r="0.6" fill="#334155"/>
  <circle cx="796" cy="220" r="0.6" fill="#334155"/>
  <circle cx="796" cy="236" r="0.6" fill="#334155"/>
  <circle cx="796" cy="252" r="0.6" fill="#334155"/>
  <circle cx="796" cy="268" r="0.6" fill="#334155"/>
  <circle cx="796" cy="284" r="0.6" fill="#334155"/>
  <circle cx="796" cy="300" r="0.6" fill="#334155"/>
  <circle cx="796" cy="316" r="0.6" fill="#334155"/>
  <circle cx="796" cy="332" r="0.6" fill="#334155"/>
  <circle cx="796" cy="348" r="0.6" fill="#334155"/>
  <circle cx="796" cy="364" r="0.6" fill="#334155"/>
  <circle cx="796" cy="380" r="0.6" fill="#334155"/>
  <circle cx="796" cy="396" r="0.6" fill="#334155"/>
  <rect x="430" y="146" width="356" height="22" rx="11" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="608.0" y="160.5" fill="#e2e8f0" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">The Address Book search form opens and still has its columns</text>
  <rect x="476" y="198" width="150" height="50" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="486" y="213" fill="#4ade80" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">✓ AIS</text>
  <text x="486" y="227" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">describe</text>
  <text x="486" y="240" fill="#94a3b8" fontSize="7.5" fontFamily="ui-monospace, monospace">2 value(s)</text>
  <circle cx="454" cy="223" r="7" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
  <text x="454" y="226.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <circle cx="648" cy="223" r="7" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
  <text x="648" y="226.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <line x1="461" y1="223" x2="476" y2="223" stroke="#475569" strokeWidth="1.2"/>
  <line x1="626" y1="223" x2="641" y2="223" stroke="#475569" strokeWidth="1.2"/>
  <rect x="662" y="211" width="56" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.5)" strokeWidth="1.2"/>
  <text x="690" y="226.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚑ End</text>
  <rect x="810" y="70" width="274" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="822" y="90" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">The step</text>
  <text x="822" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="920" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINT CALLED</text>
  <rect x="822" y="114" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="832" y="128.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">describe</text>
  <rect x="920" y="114" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="930" y="128.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ais  AIS service … ▾</text>
  <text x="822" y="154" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <rect x="822" y="160" width="250" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="830" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVICE</text>
  <rect x="830" y="179" width="100" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="840" y="192.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">formservice</text>
  <rect x="936" y="179" width="128" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="946" y="192.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">&#123;"formName": "P01012_W01012B", …</text>
  <text x="822" y="230" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is expected</text>
  <rect x="948" y="218" width="124" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.0" y="232.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Fill from the answer</text>
  <text x="822" y="248" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE CALL</text>
  <rect x="822" y="253" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="832" y="266.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">must work ▾</text>
  <text x="822.0" y="290" fill="#64748b" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">ROWS, AT LEAST</text>
  <rect x="822.0" y="295" width="78.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="832.0" y="308.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="908.0" y="290" fill="#64748b" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">ROWS, EXACTLY</text>
  <rect x="908.0" y="295" width="78.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="918.0" y="308.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="994.0" y="290" fill="#64748b" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">ROWS, AT MOST</text>
  <rect x="994.0" y="295" width="78.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1004.0" y="308.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="822" y="332" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE FIRST ROW HOLDS</text>
  <rect x="822" y="337" width="250" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="832" y="350.5" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">+ Add a line</text>
  <rect x="824" y="373" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="841" y="382" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">Played even after a failure (a cleanup)</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Suites and cases</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its last result</text>
  <line x1="200" y1="107.0" x2="246" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A case is a flow</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one card per call</text>
  <line x1="200" y1="217.0" x2="476" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The + adds a step</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on the link, at that place</text>
  <line x1="200" y1="317.0" x2="454" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Record the reference</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">before the change</text>
  <line x1="1120" y1="57.0" x2="718" y2="72" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Endpoint and parameters</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one field per parameter</text>
  <line x1="1120" y1="127.0" x2="1064" y2="130" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fill from the answer</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">proposes what to expect</text>
  <line x1="1120" y1="217.0" x2="1072.0" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A cleanup step</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">runs even after a failure</text>
  <line x1="1120" y1="317.0" x2="1044" y2="380" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njt-arrow)"/>
</svg>

---

## The three entries \{#entries\}

| Menu entry | Use |
|---|---|
| **Tests → Results** | How the last runs went: cases passed, failed, changed or never played, the last runs of each suite as bars, each case with its last results. |
| **Tests → Cases** | The suites and their cases, drawn and edited as flows of calls. |
| **Tests → Run the tests** | The job that plays a suite — on demand here, or on a schedule. |

**Results** and **Cases** are the test pages of Liberty Next, described in full in [Tests](../framework/build/tests.md); this page covers what is specific to JD Edwards.

---

## A case, step by step \{#case\}

A **suite** holds **cases**; a case is a sequence of **steps**; a step is one call to JD Edwards with what is expected of its answer.

1. In **Tests → Cases**, pick the suite and choose **New case**. Say what it checks, and tick *This case changes data* when one of its steps writes in JD Edwards.
2. The **+** on the flow adds a step. Pick the **Endpoint called** in the list of the AIS connector: one of the [catalogue's services](./ais/services.md) — a table read, a business function — or an endpoint made with [Create from…](./ais/create-from.md) for a form, a report or an orchestration.
3. Fill the **Parameters**: one labelled field per parameter of the endpoint, with its help.
4. **Fill from the answer** plays the call now and proposes what to expect — the number of rows and the values of the first row, by JD Edwards alias (`AN8`, `ALPH`). Keep the lines that must stay true, delete the others.
5. **Save**, then **Run this case**.

What a step can expect:

| Expectation | Meaning |
|---|---|
| **The call** *must work* / *must be refused* | A refusal is a valid expectation: a table that does not exist, a value the form rejects. **The refusal says** checks the message. |
| **Rows, at least / exactly / at most** | The number of rows returned. |
| **The first row holds** | Values of the first row, by column name. |
| **A warning says** | A warning of JD Edwards (*Duplicate Address Book record*) reported with the answer. |

A value read at one step — an address number just created — can be kept and given to the next steps. A step marked *Played even after a failure (a cleanup)* always runs: this is how a case that writes removes what it created.

---

## Reference and comparison \{#reference\}

Expectations say what must be true. The **reference** catches what nobody thought of writing down: the columns of a form, the labels of a grid, the values of a set-up table.

1. **Before the change**, record the reference: **Record the reference** on the Cases page, or the job with *record*. Each step keeps the parts of its answer it was asked to keep.
2. **After the change**, run the suite again. Each case ends as:

| Result | Meaning |
|---|---|
| **Passed** | Every expectation holds and nothing differs from the reference. |
| **Changed** | The expectations hold, but a kept value differs from the reference — a column gone, a new one, another value. The difference is listed value by value. |
| **Failed** | An expectation is not met, or the call failed. |
| **Skipped** | The case writes on JD Edwards and the run did not allow it. |

A *Changed* is not always a defect — an update may legitimately add a column — but it is always something to read. Record the reference again once the change is accepted.

---

## The job \{#job\}

**Tests → Run the tests** plays a suite outside the page — on demand, or on a schedule after each package deployment.

| Parameter | Default | Meaning |
|---|---|---|
| **Suite** | `smoke` | The suite to play, among the suites of the AIS connector. |
| **Compare with the reference, or record it** | compare | *compare* checks the cases and reports what differs; *record* keeps the run as the new reference. |
| **Only these cases** | blank | Case identifiers separated by commas; blank plays them all. |
| **Cases that write on JDE** | no | *yes* also plays the cases marked as changing data. |

The run **fails** when a case fails or has changed, which triggers the job's alerts. Its files hold an Excel report, one line per step: case, label, case status, step, endpoint, step status, duration and what was found. The results also appear in **Tests → Results**.

---

## The suite shipped \{#smoke\}

Nomajde ships a first suite, **smoke** — *JDE — what must keep working* — made of reading cases any JD Edwards answers:

| Case | Checks |
|---|---|
| `ais-is-up` | AIS answers and says what it runs. |
| `udc-types-of-system-00` | The UDC types of system 00 are read from `F0004`. |
| `address-book-form` | The Address Book search form opens and still has its columns. |
| `unknown-table-is-refused` | A table that does not exist is refused, not answered empty. |

Use it to check the connection, then add the cases that matter to the business: the forms the users live in, the business functions the interfaces call, the set-up tables an update must not touch.

---

## Access \{#access\}

| To | A role needs |
|---|---|
| See the suites and the results | **See the test suites and their results** |
| Play a case or a suite | **Play the tests (and see them)** |
| Write suites, cases and steps | **Write the tests: suites, cases, steps (and play them)** |
| Run the job from the menu | The job's permission |

The three test permissions are in a role's *Beyond the menus* rules, type **Tests**: a functional team can write and play the tests without being administrators. Every call runs under the JD Edwards account of the AIS connector: JD Edwards security applies to that account.

---

## Tips & best practices \{#tips\}

- Record the reference on the environment that will be changed, **just before** the change.
- Prefer many small reading cases to a few long ones: a failure then names what broke.
- Keep the writing cases apart, each with its cleanup step, and play them on a test environment.
- Schedule the job after the nightly package deployment: a regression is known in the morning, with the difference listed.
- The AI assistant knows the procedure: ask it to *check that JDE still behaves the same after a change*.

---

## Related

- [Tests](../framework/build/tests.md) — the Cases page in full; [Test results](../monitoring/test-results.md).
- [JD Edwards services (AIS)](./ais/services.md) and [Create from…](./ais/create-from.md) — the calls a step can make.
- [Prepare for upgrade](./upgrade/analysis.md) — what to retrofit before the tests are played.
