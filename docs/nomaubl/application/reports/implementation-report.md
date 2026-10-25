---
title: Implementation Report
description: "Generate the technical and functional documentation of a NomaUBL instance from its configuration and database — context, architecture, built-in rules, documents, UBL transform and mappings, platform settings, operations, security and reference data — as a PDF or Markdown file, in French or English, with secrets masked."
keywords: [NomaUBL, implementation report, documentation, technical documentation, functional documentation, PDF, Markdown, configuration, UBL mapping, BT, pre-transform, XSL, audit trail, JD Edwards, SAP, NetSuite, custom ERP]
---

# Implementation Report

The **Implementation report** card of the [Reports](./overview.md) page writes the documentation of the instance you are signed in to: what is configured, how each document is turned into UBL, which rules apply, who can do what. Everything is read from the configuration files and the database at the time of generation, so the report always describes the instance as it runs — whatever the source system (JD Edwards, SAP, NetSuite or a custom ERP).

Typical uses: the hand-over file of a project, the description an auditor or a tax adviser asks for, the snapshot taken before an upgrade, the reference a support team keeps next to the production instance.

Open it from **Reports → Implementation report**.

---

## At a glance

<svg viewBox="0 0 1200 492" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rpim-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rpim-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rpim-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rpim-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="452" rx="14" fill="url(#rpim-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Reports</text>
  <rect x="240.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250.0" y="72" width="22" height="22" rx="6" fill="#4ade80" fillOpacity="0.18"/>
  <text x="280.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Integrity</text>
  <text x="280.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Compare with JDE, integrate</text>
  <rect x="422.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432.5" y="72" width="22" height="22" rx="6" fill="#fb923c" fillOpacity="0.18"/>
  <text x="462.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Audit report</text>
  <text x="462.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Key figures of a period</text>
  <rect x="605.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="#4a9eff" strokeWidth="1.4"/>
  <rect x="615.0" y="72" width="22" height="22" rx="6" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="645.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Implementation report</text>
  <text x="645.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">How this instance works</text>
  <rect x="787.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
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
  <rect x="254" y="261" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="271" y="270" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Show technical keys</text>
  <rect x="502" y="120" width="458" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="516" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Contents</text>
  <text x="946" y="142" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">9 of 11 sections · All · None</text>
  <rect x="516.0" y="154.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="162.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,167.5 L530.8,169.8 L534.8,165.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="171.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="171.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Context</text>
  <text x="544.0" y="184.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Instance, environment, connections</text>
  <rect x="735.0" y="154.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="162.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,167.5 L749.8,169.8 L753.8,165.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="171.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="171.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="763.0" y="184.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Components and processing chain</text>
  <rect x="516.0" y="198.3" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="206.33333333333334" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,211.83333333333334 L530.8,214.13333333333335 L534.8,209.33333333333334" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="215.33333333333334" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="215.33333333333334" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">How it works and rules</text>
  <text x="544.0" y="228.33333333333334" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Pages, lifecycle, dashboards</text>
  <rect x="735.0" y="198.3" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="206.33333333333334" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,211.83333333333334 L749.8,214.13333333333335 L753.8,209.33333333333334" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="215.33333333333334" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="215.33333333333334" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Documents</text>
  <text x="763.0" y="228.33333333333334" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Source, files, options, rules</text>
  <rect x="516.0" y="242.7" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="250.66666666666669" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,256.1666666666667 L530.8,258.4666666666667 L534.8,253.66666666666669" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="259.6666666666667" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="259.6666666666667" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">UBL transform and rules</text>
  <text x="544.0" y="272.6666666666667" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Defaults, mappings, packs</text>
  <rect x="735.0" y="242.7" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="250.66666666666669" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,256.1666666666667 L749.8,258.4666666666667 L753.8,253.66666666666669" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="259.6666666666667" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="259.6666666666667" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Platform settings</text>
  <text x="763.0" y="272.6666666666667" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Document types, Explorer</text>
  <rect x="516.0" y="287.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="295.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,300.5 L530.8,302.8 L534.8,298.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="304.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="304.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Operations</text>
  <text x="544.0" y="317.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Jobs, folders, notifications</text>
  <rect x="735.0" y="287.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="295.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,300.5 L749.8,302.8 L753.8,298.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="304.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="304.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Security</text>
  <text x="763.0" y="317.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Roles and users</text>
  <rect x="516.0" y="331.3" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="339.33333333333337" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,344.83333333333337 L530.8,347.1333333333334 L534.8,342.33333333333337" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="348.33333333333337" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="348.33333333333337" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Reference data</text>
  <text x="544.0" y="361.33333333333337" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Statuses, lists and tables</text>
  <rect x="735.0" y="331.3" width="211.0" height="38.3" rx="6" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <rect x="745.0" y="339.33333333333337" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="762.0" y="348.33333333333337" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="348.33333333333337" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Appendix: configuration keys</text>
  <text x="763.0" y="361.33333333333337" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Every key, secrets masked</text>
  <rect x="516.0" y="375.7" width="211.0" height="38.3" rx="6" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <rect x="526.0" y="383.6666666666667" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="543.0" y="392.6666666666667" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="392.6666666666667" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Appendix: API reference</text>
  <text x="544.0" y="405.6666666666667" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">The operations of the API</text>
  <rect x="240" y="432" width="89" height="22" rx="5" fill="url(#rpim-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="284.5" y="446.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Download PDF</text>
  <rect x="337" y="432" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="370.0" y="446.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Markdown</text>
  <text x="419" y="447" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">9 sections · English</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Report cards</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one per report</text>
  <line x1="200" y1="83.0" x2="240" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpim-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Settings</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on the left</text>
  <line x1="200" y1="187.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpim-arrow)"/>
  <rect x="20" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF or Markdown</text>
  <text x="30" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copy kept in reports/</text>
  <line x1="200" y1="445.0" x2="240" y2="443" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpim-arrow)"/>
  <rect x="1000" y="126" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="141" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">All / None</text>
  <text x="1010" y="154" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">count of the sections</text>
  <line x1="1000" y1="143.0" x2="950" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpim-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Section tiles</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a line on each section</text>
  <line x1="1000" y1="257.0" x2="950" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpim-arrow)"/>
</svg>

| Control | Description |
|---|---|
| **Language** | **Français** or **English**. Defaults to the language of the interface. Labels of settings, statuses and lists follow the language. |
| **Date label (cover)** | Free text printed on the cover (e.g. *Go-live V2*). Blank = today's date. |
| **Show technical keys next to setting labels** | Adds the configuration key after each label (`Allow reprocess · allowReprocess`). Useful for a technical reader; off by default. |
| **Contents** | One tile per section with a line on what it holds; the first nine are ticked by default, the two appendices are optional because of their length. The header gives the count and the **All** / **None** links. |
| **Download PDF** / **Markdown** | Generates the file and downloads it. A copy is kept in the environment's `reports` folder (`<appHome>/<env>/reports/nomaubl-implementation-<date>-<time>.pdf` or `.md`). |

---

## What the report contains

| Section | Content |
|---|---|
| **Context** | Environment, release and standard version (XP Z12-014), generation date, application home, database type and schema, companies, number of documents, author, and whether the instance is a demo instance. |
| **Architecture** | The flows enabled on the instance and their trigger: sending to the PA, import poll, status poll, received invoices, e-reporting, directory check, scheduled batch jobs, watched folders, JDE print queue reports, connectors per type, authentication. A flow shown as *off* is configured without a trigger and can still be run on demand. Then the processing chain: sources, transform, validation, archive tables, directions. |
| **How it works and built-in rules** | The functional guide: what every page is for (in menu order — Billing overview, Operations, IT dashboard, Statistics, … Explorer, Schematrons), the invoice lifecycle, the protection of deposited invoices, the rules of edit / fix buyer / resend / validate / set status / e-mail with the permission each one requires, the two reprocess modes, the status poll with the integrity and ordering checks, the review flag and notifications, a quick reference of the platform statuses (AFNOR XP Z12-014) and of the internal `99xx` stages, then **Dashboards, lists and exports**: sales or purchases, the comparison period, the five stages, *Exclude reviewed errors*, *Yesterday*, exports with labels, list views, and the table of the instance's [default periods](../../configuration/default-periods.md) (every view and per view, with their key). |
| **Documents** | One table of every document (source, direction, processing type, PDF template), the path variables with their value on this instance, then one subsection per document: folders, XSL and RTF files, UBL sheet, reprocess options, links to its pre-transform and UBL sheet, index fields and other settings. Then the PDF templates: documents that use each one, layout, logo, colours, sections and their options. |
| **UBL transform and rules** | Shared defaults (currency, specification identifier, schemes, defaults per BT), issuing companies, mapping tables and rules (transaction type, VAT category, exemption, payment means, unit of measure…), validation packs with their version and rule counts, house rules, coverage per document, then one subsection per pre-transform (renames, custom rules, drops) and per UBL sheet: profile, redefined mappings, and the full **source field → BT → UBL path** mapping. |
| **Platform settings** | E-invoicing settings (default and per company), e-reporting, directory, document types with their send and validation flags. |
| **Operations** | Scheduled jobs with their trigger, watched folders, notification rules with the actions they trigger, invoice actions, integrity checks, connectors with their host and authentication type, then the [Explorer](../explorer.md) analyses and dashboards saved on the instance. |
| **Security** | Authentication mode and session timeout, roles (pages, actions, companies, features, users), users with role, state and pending password change. |
| **Reference data** | The status catalogue (labels, PA codes, groups), every reference and custom list with its entries, the configured table names. |
| **Appendix: configuration keys** | Every property of every system template, secrets masked. |
| **Appendix: API reference** | The API document of the instance, operation by operation. |

:::info[Secrets are never printed]
Passwords, tokens, client secrets, API keys, URLs of connectors and instance keys appear as `••••••`. The report can be handed to a third party without editing; check only that the business content (customer e-mails in notification rules, user names) may be shared.
:::

---

## PDF layout

The PDF follows the document conventions of the product: a cover with the environment, date, author and version; a clickable table of contents and a PDF outline; a running header and a page *x / y* footer; reading notes in shaded boxes; path variables (`APP_HOME`, `ENV`, `PROCESS_HOME`, `TEMPLATE`, `FILE_NAME`) shown as chips inside paths; *see § 5.10* links between a document and its UBL sheet. The Markdown file carries the same content for a wiki or a Git repository.

---

## Command line

The same report is available without the interface, for a scheduled snapshot or a pipeline:

```bash
java -jar nomaubl.jar -report <configFile> [--lang fr|en] [--format md|pdf] [--out <file>] \
     [--date <label>] [--keys] [--sections context,architecture,...]
```

Defaults: the first nine sections, Markdown, French. See [Command line](../../management/command-line.md#report).

---

## Access

The tab belongs to the *Reports* page: grant **Reports** in the Navigation group on the [Roles](../../configuration/security/roles.md) page. The API route is `GET /api/reports/implementation`.

---

## Tips & best practices

- **Generate it after each go-live and each upgrade.** The copy kept in the `reports` folder becomes the dated history of the configuration, next to [File versions](../../management/file-versions.md).
- **Keep the technical keys off for a business reader.** Labels are enough for a project team; turn the keys on for the people who edit configuration files or read the API.
- **Add the appendices for an audit file only.** The configuration-keys and API appendices make the PDF several times longer.
