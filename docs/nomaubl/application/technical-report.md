---
title: Technical Report
description: "The NomaUBL technical report — the developer documentation of the release generated from the code scans bundled at build: architecture, data model, flows, configuration reference, status model, impact matrix, API reference, command line, build and packaging, as PDF or Markdown, in French or English."
keywords: [NomaUBL, technical report, developer documentation, data model, flows, configuration reference, status model, impact matrix, API reference, command line, build, packaging, PDF, Markdown, -techreport, JD Edwards, SAP, NetSuite, custom ERP]
---

# Technical Report

The **Technical report** tab of the [Reports](./reports.md) page writes the **developer documentation of the release**: how NomaUBL is built, what each table and configuration key is for, which flows touch them, what the API offers. It is generated from the code scans bundled in the application at build — the same sources as the [Developer reference](../references/developer.md) — so it is **identical on every instance of a release**, whatever the source system (JD Edwards, SAP, NetSuite or a custom ERP).

It complements the two other documents of the page: the [implementation report](./implementation-report.md) describes how *this* instance is configured, the [audit report](./audit-report.md) what happened over a period.

---

## At a glance

<svg viewBox="0 0 1200 421" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="377" rx="14" fill="url(#tr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="32" width="107" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="293.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Status statistics</text>
  <rect x="352" y="32" width="67" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="385.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Integrity</text>
  <rect x="424" y="32" width="82" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="465.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit report</text>
  <rect x="511" y="32" width="127" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="574.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Implementation report</text>
  <rect x="643" y="32" width="102" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="694.0" y="46.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Technical report</text>
  <line x1="220" y1="66" x2="980" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="88" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Developer documentation of the release, generated from the code scans bundled at build. Identical on every instance of a release.</text>
  <text x="240" y="117" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language</text>
  <rect x="410" y="103" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="117.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Français ▾</text>
  <text x="240" y="149" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Date label (cover)</text>
  <rect x="410" y="135" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="149.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">default: today</text>
  <text x="240" y="181" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <rect x="410" y="172" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,177.5 L414.8,179.8 L418.8,175" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="181" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Scope</text>
  <text x="459.6" y="181" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">scope</text>
  <rect x="680" y="172" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M682.5,177.5 L684.8,179.8 L688.8,175" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="697" y="181" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="766.84" y="181" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">architecture</text>
  <rect x="410" y="193" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,198.5 L414.8,200.8 L418.8,196" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="202" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Data model</text>
  <text x="486.2" y="202" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">data</text>
  <rect x="680" y="193" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M682.5,198.5 L684.8,200.8 L688.8,196" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="697" y="202" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Flows</text>
  <text x="729.6" y="202" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">flows</text>
  <rect x="410" y="214" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,219.5 L414.8,221.8 L418.8,217" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="223" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Configuration reference</text>
  <text x="555.36" y="223" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">configuration</text>
  <rect x="680" y="214" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M682.5,219.5 L684.8,221.8 L688.8,217" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="697" y="223" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Status model</text>
  <text x="766.84" y="223" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">statuses</text>
  <rect x="410" y="235" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,240.5 L414.8,242.8 L418.8,238" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="244" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Impact matrix</text>
  <text x="502.16" y="244" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">impact</text>
  <rect x="680" y="235" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M682.5,240.5 L684.8,242.8 L688.8,238" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="697" y="244" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">API reference</text>
  <text x="772.16" y="244" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">api</text>
  <rect x="410" y="256" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,261.5 L414.8,263.8 L418.8,259" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="265" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Command line</text>
  <text x="496.84000000000003" y="265" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">cli</text>
  <rect x="680" y="256" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M682.5,261.5 L684.8,263.8 L688.8,259" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="697" y="265" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Build and packaging</text>
  <text x="804.08" y="265" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">build</text>
  <rect x="410" y="277" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,282.5 L414.8,284.8 L418.8,280" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="286" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Appendix: code references</text>
  <text x="566.0" y="286" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">appendix</text>
  <rect x="410" y="304" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="427" y="313" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Detail every API operation (description and parameters)</text>
  <rect x="410" y="325" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="427" y="334" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Include the code snippets in the appendix (long)</text>
  <rect x="240" y="351" width="100" height="26" rx="5" fill="url(#tr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="290.0" y="367.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Download PDF</text>
  <rect x="348" y="351" width="128" height="26" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="412.0" y="367.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Download Markdown</text>
  <rect x="20" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fifth tab of Reports</text>
  <text x="30" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">next to the implementation report</text>
  <line x1="200" y1="43.0" x2="240" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tr-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Eleven sections</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">all ticked by default</text>
  <line x1="200" y1="217.0" x2="410" y2="202" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tr-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Same on every instance</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">built from the release itself</text>
  <line x1="1000" y1="117.0" x2="780" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tr-arrow)"/>
  <rect x="1000" y="301" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="316" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two options</text>
  <text x="1010" y="329" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">API detail · code snippets</text>
  <line x1="1000" y1="318.0" x2="740" y2="319" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tr-arrow)"/>
  <rect x="1000" y="347" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="362" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF or Markdown</text>
  <text x="1010" y="375" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copy kept in reports/</text>
  <line x1="1000" y1="364.0" x2="500" y2="364" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tr-arrow)"/>
</svg>

---

## Controls

| Control | Description |
|---|---|
| **Language** | French or English; defaults to the interface language. |
| **Date label (cover)** | Free text printed on the cover; blank = today's date. |
| **Sections** | The eleven sections, all ticked by default; each shows its id. |
| **Detail every API operation (description and parameters)** | Shown when *API reference* is ticked. Off by default: the reference then lists the operations with their access only. |
| **Include the code snippets in the appendix (long)** | Shown when *Appendix: code references* is ticked. Off by default. |
| **Download PDF / Download Markdown** | Generates the file and downloads it (`nomaubl-technical-<date>-<time>.pdf` or `.md`). A copy is kept in the environment's `reports` folder. |

---

## Sections

| Section (id) | Content |
|---|---|
| **Scope** (`scope`) | The NomaUBL release, its build date, the code scan behind the document, the generation date and author, and the environment whose table names are resolved. |
| **Architecture** (`architecture`) | Components (interface, server, platform clients, reports), runtime (one folder and one server per environment) and security (authentication, sessions). |
| **Data model** (`data`) | Every table with its columns, the configuration keys, flows and call sites that use them, and the name resolved in this instance when it differs. |
| **Flows** (`flows`) | The flow documents — process a file, import poll, status poll, e-reporting, watched folders, reprocess — each completed with the tables, statuses and keys its code touches. |
| **Configuration reference** (`configuration`) | Every key with its settings field, where it is edited, the flows that read it, its call sites and its state, with a summary of the gaps. |
| **Status model** (`statuses`) | Invoice and e-reporting statuses: tags, codes, labels, groups and the flows that set them. |
| **Impact matrix** (`impact`) | Per flow, the most referenced columns and keys. |
| **API reference** (`api`) | The operations of the API with the access each requires; with the option, their description and parameters. |
| **Command line** (`cli`) | The switches, from the built-in help. |
| **Build and packaging** (`build`) | The build steps, the generated artefacts and the layout of the jar. |
| **Appendix: code references** (`appendix`) | The code references behind the sections; with the option, the snippets. |

---

## Command line and API

```bash
java -jar nomaubl.jar -techreport /opt/nomaubl/demo/config/config.json [--lang fr|en] [--format md|pdf] [--out <file>] [--date <label>] [--sections a,b,...] [--api-detail] [--snippets]
```

Defaults: every section, Markdown, French, output `nomaubl-technical-<lang>.md` in the current folder (the command line keeps no copy in `reports`). See [Command line](../management/command-line.md#techreport).

The API route is `GET /api/reports/technical` with the parameters `lang`, `format`, `date`, `sections`, `apiDetail` and `snippets`.

---

## Access

The tab belongs to the *Reports* page — grant **Reports** on the [Roles](../configuration/security/roles.md) page. Generating the report also requires the *Settings access* feature.

---

## Tips & best practices

- **Generate it at each upgrade** and keep it with the release notes: it is the developer view of what changed.
- **Hand it to an integrator** with the [implementation report](./implementation-report.md) of the instance: the first explains the product, the second its configuration.
- **Tick only the sections needed** for a focused document — the data model and the configuration reference for a database or settings question, the API reference for an integration.
