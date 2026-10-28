---
title: Documentation reports
description: "Liberty Next → Document → Documentation reports: the implementation report (technical and functional documentation of the install) and the technical report (data model, configuration, API), generated as PDF or Markdown from the installation in force, sections to tick, language and date label, secrets masked."
keywords: [Liberty Next, documentation reports, implementation report, technical report, PDF, Markdown, data model, configuration, API, deliverable]
---

# Documentation reports

**Liberty Next → Document → Documentation reports** writes the documentation of the installation as it stands — a deliverable for a project, a hand-over, an audit of the configuration — as a PDF or in Markdown. Superusers only.

---

## At a glance

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dcr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dcr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dcr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dcr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="372" rx="14" fill="url(#dcr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Implementation report</text>
  <rect x="240" y="64" width="220" height="300" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="86" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SETTINGS</text>
  <text x="254" y="108" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Language</text>
  <rect x="254" y="114" width="123" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="286.0" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Français</text>
  <rect x="319" y="115" width="57" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="347.5" y="129.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">English</text>
  <text x="254" y="160" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Date label (cover page)</text>
  <rect x="254" y="166" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="180.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">default: today</text>
  <rect x="254" y="300" width="150" height="22" rx="5" fill="url(#dcr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="329.0" y="314.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Download the PDF</text>
  <rect x="254" y="328" width="90" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="299.0" y="342.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Markdown</text>
  <rect x="470" y="64" width="490" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="484" y="86" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONTENT</text>
  <text x="946" y="86" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">9 of 11 sections</text>
  <rect x="484" y="103" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M486.5,108.5 L488.8,110.8 L492.8,106" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="501" y="112" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Context</text>
  <rect x="484" y="137" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M486.5,142.5 L488.8,144.8 L492.8,140" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="501" y="146" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Architecture</text>
  <rect x="484" y="171" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M486.5,176.5 L488.8,178.8 L492.8,174" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="501" y="180" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Applications and menus</text>
  <rect x="484" y="205" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M486.5,210.5 L488.8,212.8 L492.8,208" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="501" y="214" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Screens</text>
  <rect x="484" y="239" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M486.5,244.5 L488.8,246.8 L492.8,242" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="501" y="248" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Connectors and pools</text>
  <rect x="484" y="273" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M486.5,278.5 L488.8,280.8 L492.8,276" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="501" y="282" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Dashboards and Explorer</text>
  <rect x="714" y="103" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M716.5,108.5 L718.8,110.8 L722.8,106" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="731" y="112" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Operations</text>
  <rect x="714" y="137" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M716.5,142.5 L718.8,144.8 L722.8,140" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="731" y="146" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Security</text>
  <rect x="714" y="171" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M716.5,176.5 L718.8,178.8 L722.8,174" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="731" y="180" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Reference data</text>
  <rect x="714" y="205" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="731" y="214" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Appendix: settings</text>
  <rect x="714" y="239" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="731" y="248" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Appendix: API reference</text>
  <rect x="10" y="110" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language</text>
  <text x="20" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">and the cover date</text>
  <line x1="210" y1="127.0" x2="254" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dcr-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF or Markdown</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">secrets masked</text>
  <line x1="210" y1="317.0" x2="254" y2="312" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dcr-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections to tick</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appendices on demand</text>
  <line x1="1000" y1="137.0" x2="950" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dcr-arrow)"/>
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

---

## Related

- [Developer reference](./developer-reference.md) — the same knowledge, browsable.
