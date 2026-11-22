---
title: Documentation reports
description: "Liberty Next → Document → Documentation reports: the implementation report (technical and functional documentation of the install) and the technical report (data model, configuration, API), generated as PDF or Markdown from the installation in force, sections to tick, language and date label, secrets masked."
keywords: [Liberty Next, documentation reports, implementation report, technical report, PDF, Markdown, data model, configuration, API, deliverable]
---

# Documentation reports

**Liberty Next → Document → Documentation reports** writes the documentation of the installation as it stands — a deliverable for a project, a hand-over, an audit of the configuration — as a PDF or in Markdown. Superusers only.

---

## At a glance

<svg viewBox="0 0 1320 524" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="docrep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="docrep-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="docrep-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="docrep-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="484" rx="14" fill="url(#docrep-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Documentation reports</text>
  <text x="258" y="59" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The framework documented as PDF or Markdown: the implementation report describes this install, the technical report the release.</text>
  <line x1="220" y1="68" x2="1100" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="82" width="419.0" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#c084fc" strokeWidth="1.2"/>
  <rect x="245.0" y="92" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="255.0" cy="102" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="272.0" y="99" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Implementation report</text>
  <text x="272.0" y="112" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Technical and functional documentation of the install</text>
  <rect x="665.0" y="82" width="419.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="674.0" y="92" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <circle cx="684.0" cy="102" r="4" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="701.0" y="99" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Technical report</text>
  <text x="701.0" y="112" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Developer documentation: data model, configuration, API</text>
  <rect x="236" y="134" width="270" height="230" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="156" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Settings</text>
  <text x="250" y="174" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Technical and functional documentation of the install</text>
  <text x="250" y="196" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANGUAGE</text>
  <rect x="250" y="202" width="131" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="284.0" y="217.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Français</text>
  <rect x="319" y="203" width="61" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="349.5" y="217.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">English</text>
  <text x="250" y="246" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE LABEL (COVER PAGE)</text>
  <rect x="250" y="252" width="242" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="266.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">default: today</text>
  <rect x="518" y="134" width="566" height="230" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="156" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Content</text>
  <text x="1070" y="156" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">9 of 11 sections   All   None</text>
  <rect x="532.0" y="168" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="542.0" y="176" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M544.5,181.5 L546.8,183.8 L550.8,179" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="559.0" y="185" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Context</text>
  <rect x="806.0" y="168" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="816.0" y="176" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M818.5,181.5 L820.8,183.8 L824.8,179" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="833.0" y="185" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Architecture</text>
  <rect x="532.0" y="200" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="542.0" y="208" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M544.5,213.5 L546.8,215.8 L550.8,211" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="559.0" y="217" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Applications and menus</text>
  <rect x="806.0" y="200" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="816.0" y="208" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M818.5,213.5 L820.8,215.8 L824.8,211" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="833.0" y="217" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Screens</text>
  <rect x="532.0" y="232" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="542.0" y="240" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M544.5,245.5 L546.8,247.8 L550.8,243" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="559.0" y="249" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Connectors and pools</text>
  <rect x="806.0" y="232" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="816.0" y="240" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M818.5,245.5 L820.8,247.8 L824.8,243" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="833.0" y="249" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Dashboards and Explorer</text>
  <rect x="532.0" y="264" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="542.0" y="272" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M544.5,277.5 L546.8,279.8 L550.8,275" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="559.0" y="281" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Operations</text>
  <rect x="806.0" y="264" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="816.0" y="272" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M818.5,277.5 L820.8,279.8 L824.8,275" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="833.0" y="281" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Security</text>
  <rect x="532.0" y="296" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="542.0" y="304" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M544.5,309.5 L546.8,311.8 L550.8,307" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="559.0" y="313" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Reference data</text>
  <rect x="806.0" y="296" width="264.0" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="816.0" y="304" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="833.0" y="313" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Appendix: settings</text>
  <rect x="532.0" y="328" width="264.0" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="542.0" y="336" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="559.0" y="345" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Appendix: API reference</text>
  <rect x="236" y="376" width="848" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="385" width="117" height="22" rx="5" fill="url(#docrep-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="308.5" y="399.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Download the PDF</text>
  <rect x="375" y="385" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="412.5" y="399.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Markdown</text>
  <rect x="236" y="428" width="848" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="448" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Kept copies</text>
  <text x="1070" y="448" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Every report built is kept on the server (.reports next to the configuration)</text>
  <text x="250" y="472" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">implementation-2026-11-21.pdf</text>
  <text x="480" y="472" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe · English · 9 sections</text>
  <rect x="880" y="460" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="911.0" y="474.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Download</text>
  <rect x="964" y="460" width="97" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1012.5" y="474.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete the copy</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two reports</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one card each</text>
  <line x1="200" y1="87.0" x2="236" y2="102" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docrep-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language, date label</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">of the cover page</text>
  <line x1="200" y1="217.0" x2="250" y2="214" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docrep-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF or Markdown</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">secrets masked</text>
  <line x1="200" y1="357.0" x2="250" y2="396" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docrep-arrow)"/>
  <rect x="1120" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections to tick</text>
  <text x="1130" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">All / None, appendices on demand</text>
  <line x1="1120" y1="187.0" x2="1084" y2="309" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docrep-arrow)"/>
  <rect x="1120" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kept copies</text>
  <text x="1130" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">download again, or delete</text>
  <line x1="1120" y1="437.0" x2="1084" y2="472" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docrep-arrow)"/>
</svg>

---

## The two reports \{#reports\}

| Report | For | Sections |
|---|---|---|
| **Implementation report** — technical and functional documentation of the install | The project team, the customer. | Context, Architecture, Applications and menus, Screens, Connectors and pools, Dashboards and Explorer, Operations, Security, Reference data; on demand, the appendices *Settings* — every setting, secrets masked — and *API reference*. |
| **Technical report** — developer documentation | The people who maintain the install. | Scope, Architecture, Data model, Configuration reference, API reference, Command line, Build and packaging, Appendix: code references. |

---

## Producing one \{#run\}

1. Open the report's card.
2. Tick the sections — **All** / **None** —; the counter shows *N of M sections*. The technical report offers two options: detail every API route, and include the code snippets in the appendix — long.
3. Under **Settings**, pick the **Language** — *Français* or *English* — and, if needed, the **Date label** of the cover page; by default, today.
4. **Download the PDF**, or **Markdown** to edit it further.

Every value whose name says it is a secret — passwords, keys, tokens — is masked, and so are the connection addresses.

## Kept copies \{#copies\}

Every report produced is also kept on the server, next to the configuration — so a backup carries it. Under **Kept copies**, the report's page lists them with who built it, the language and the number of sections: **Download** fetches one again, **Delete the copy** removes the file from the server. The copies stay until they are deleted; [Retention](../../monitoring/retention.md) shows their number and size.

---

## Related

- [Developer reference](./developer-reference.md) — the same knowledge, browsable.
