---
title: Technical Report
description: "The NomaUBL technical report — the developer documentation of the release generated from the code scans bundled at build: architecture, data model, flows, configuration reference, status model, impact matrix, API reference, command line, build and packaging, as PDF or Markdown, in French or English."
keywords: [NomaUBL, technical report, developer documentation, data model, flows, configuration reference, status model, impact matrix, API reference, command line, build, packaging, PDF, Markdown, -techreport, JD Edwards, SAP, NetSuite, custom ERP]
---

# Technical Report

The **Technical report** card of the [Reports](./overview.md) page writes the **developer documentation of the release**: how NomaUBL is built, what each table and configuration key is for, which flows touch them, what the API offers. It is generated from the code scans bundled in the application at build — the same sources as the [Developer reference](../../references/developer.md) — so it is **identical on every instance of a release**, whatever the source system (JD Edwards, SAP, NetSuite or a custom ERP).

It complements the two other documents of the page: the [implementation report](./implementation-report.md) describes how *this* instance is configured, the [audit report](./audit-report.md) what happened over a period.

---

## At a glance

<svg viewBox="0 0 1200 492" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rpte-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rpte-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rpte-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rpte-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="452" rx="14" fill="url(#rpte-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Reports</text>
  <rect x="240.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250.0" y="72" width="22" height="22" rx="6" fill="#4ade80" fillOpacity="0.18"/>
  <text x="280.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Integrity</text>
  <text x="280.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Compare with JDE, integrate</text>
  <rect x="422.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432.5" y="72" width="22" height="22" rx="6" fill="#fb923c" fillOpacity="0.18"/>
  <text x="462.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Audit report</text>
  <text x="462.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Key figures of a period</text>
  <rect x="605.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="615.0" y="72" width="22" height="22" rx="6" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="645.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Implementation report</text>
  <text x="645.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">How this instance works</text>
  <rect x="787.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="#8a93b0" strokeWidth="1.4"/>
  <rect x="797.5" y="72" width="22" height="22" rx="6" fill="#8a93b0" fillOpacity="0.18"/>
  <text x="827.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Technical report</text>
  <text x="827.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Developer documentation</text>
  <rect x="240" y="120" width="250" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Settings</text>
  <text x="254" y="164" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANGUAGE</text>
  <rect x="254" y="172" width="123" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="286.0" y="186.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Français</text>
  <rect x="319" y="173" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="347.5" y="186.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">English</text>
  <text x="254" y="216" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE LABEL (COVER)</text>
  <rect x="254" y="224" width="222" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="238.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">default: today</text>
  <rect x="502" y="120" width="458" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="516" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Contents</text>
  <text x="946" y="142" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">10 of 10 sections · All · None</text>
  <rect x="516.0" y="154.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="162" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,167.5 L530.8,169.8 L534.8,165" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="171" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="171" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Scope</text>
  <text x="544.0" y="184" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Release, build date, sources</text>
  <rect x="735.0" y="154.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="162" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,167.5 L749.8,169.8 L753.8,165" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="171" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="171" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="763.0" y="184" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Components, dashboards, security</text>
  <rect x="516.0" y="206.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="214" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,219.5 L530.8,221.8 L534.8,217" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="223" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="223" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Data model</text>
  <text x="544.0" y="236" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Tables and columns</text>
  <rect x="735.0" y="206.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="214" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,219.5 L749.8,221.8 L753.8,217" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="223" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="223" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Flows</text>
  <text x="763.0" y="236" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Processing flows, call sites</text>
  <rect x="516.0" y="258.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="266" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,271.5 L530.8,273.8 L534.8,269" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="275" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="275" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Configuration reference</text>
  <text x="544.0" y="288" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Every key and its readers</text>
  <rect x="735.0" y="258.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="266" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,271.5 L749.8,273.8 L753.8,269" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="275" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="275" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Status model</text>
  <text x="763.0" y="288" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Statuses and groups</text>
  <rect x="516.0" y="310.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="318" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,323.5 L530.8,325.8 L534.8,321" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="327" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="327" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Impact matrix</text>
  <text x="544.0" y="340" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Impact per flow</text>
  <rect x="735.0" y="310.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="318" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,323.5 L749.8,325.8 L753.8,321" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="327" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="327" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">API reference</text>
  <text x="763.0" y="340" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Every endpoint with its access</text>
  <rect x="516.0" y="362.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="370" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,375.5 L530.8,377.8 L534.8,373" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="379" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="379" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Command line</text>
  <text x="544.0" y="392" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Modes and built-in help</text>
  <rect x="735.0" y="362.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="370" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,375.5 L749.8,377.8 L753.8,373" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="379" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="379" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Build and packaging</text>
  <text x="763.0" y="392" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Steps, artefacts, jar layout</text>
  <rect x="240" y="432" width="89" height="22" rx="5" fill="url(#rpte-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="284.5" y="446.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Download PDF</text>
  <rect x="337" y="432" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="370.0" y="446.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Markdown</text>
  <text x="419" y="447" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">10 sections · English</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Report cards</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one per report</text>
  <line x1="200" y1="83.0" x2="240" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpte-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Settings</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on the left</text>
  <line x1="200" y1="187.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpte-arrow)"/>
  <rect x="20" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF or Markdown</text>
  <text x="30" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copy kept in reports/</text>
  <line x1="200" y1="445.0" x2="240" y2="443" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpte-arrow)"/>
  <rect x="1000" y="126" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="141" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">All / None</text>
  <text x="1010" y="154" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">count of the sections</text>
  <line x1="1000" y1="143.0" x2="950" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpte-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Section tiles</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a line on each section</text>
  <line x1="1000" y1="257.0" x2="950" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpte-arrow)"/>
</svg>

---

## Controls

| Control | Description |
|---|---|
| **Language** | **Français** or **English**; defaults to the interface language. |
| **Date label (cover)** | Free text printed on the cover; blank = today's date. |
| **Contents** | The eleven sections as tiles, each with a line on what it holds, all ticked by default; the header gives the count and the **All** / **None** links. |
| **Detail every API operation (description and parameters)** | Shown when *API reference* is ticked. Off by default: the reference then lists the operations with their access only. |
| **Include the code snippets in the appendix (long)** | Shown when *Appendix: code references* is ticked. Off by default. |
| **Download PDF** / **Markdown** | Generates the file and downloads it (`nomaubl-technical-<date>-<time>.pdf` or `.md`). A copy is kept in the environment's `reports` folder. |

---

## Sections

| Section (id) | Content |
|---|---|
| **Scope** (`scope`) | The NomaUBL release, its build date, the code scan behind the document, the generation date and author, and the environment whose table names are resolved. |
| **Architecture** (`architecture`) | Components (interface, server, platform clients, reports), runtime (one folder and one server per environment), the **dashboards and analyses** layer (`/api/dashboard/synthese`, `overview`, `tech`, `statistics`, the Explorer), the **shared interface** (value lists, the period picker and its `/api/ui/period-defaults`, the status stages) and security (authentication, sessions). |
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

Defaults: every section, Markdown, French, output `nomaubl-technical-<lang>.md` in the current folder (the command line keeps no copy in `reports`). See [Command line](../../management/command-line.md#techreport).

The API route is `GET /api/reports/technical` with the parameters `lang`, `format`, `date`, `sections`, `apiDetail` and `snippets`.

---

## Access

The tab belongs to the *Reports* page — grant **Reports** on the [Roles](../../configuration/security/roles.md) page. Generating the report also requires the *Settings access* feature.

---

## Tips & best practices

- **Generate it at each upgrade** and keep it with the release notes: it is the developer view of what changed.
- **Hand it to an integrator** with the [implementation report](./implementation-report.md) of the instance: the first explains the product, the second its configuration.
- **Tick only the sections needed** for a focused document — the data model and the configuration reference for a database or settings question, the API reference for an integration.
