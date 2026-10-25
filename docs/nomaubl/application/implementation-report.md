---
title: Implementation Report
description: "Generate the technical and functional documentation of a NomaUBL instance from its configuration and database — context, architecture, built-in rules, documents, UBL transform and mappings, platform settings, operations, security and reference data — as a PDF or Markdown file, in French or English, with secrets masked."
keywords: [NomaUBL, implementation report, documentation, technical documentation, functional documentation, PDF, Markdown, configuration, UBL mapping, BT, pre-transform, XSL, audit trail, JD Edwards, SAP, NetSuite, custom ERP]
---

# Implementation Report

The **Implementation report** tab of the [Reports](./reports.md) page writes the documentation of the instance you are signed in to: what is configured, how each document is turned into UBL, which rules apply, who can do what. Everything is read from the configuration files and the database at the time of generation, so the report always describes the instance as it runs — whatever the source system (JD Edwards, SAP, NetSuite or a custom ERP).

Typical uses: the hand-over file of a project, the description an auditor or a tax adviser asks for, the snapshot taken before an upgrade, the reference a support team keeps next to the production instance.

Open it from **Reports → Implementation report**.

---

## At a glance

<svg viewBox="0 0 1200 411" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ir-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ir-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ir-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ir-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="367" rx="14" fill="url(#ir-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="32" width="107" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="293.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Status statistics</text>
  <rect x="352" y="32" width="67" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="385.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Integrity</text>
  <rect x="424" y="32" width="82" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="465.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit report</text>
  <rect x="511" y="32" width="127" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="574.5" y="46.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Implementation report</text>
  <rect x="643" y="32" width="102" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="694.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Technical report</text>
  <line x1="220" y1="66" x2="980" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="88" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Technical and functional description of this instance, generated from its configuration and database. Secrets are masked.</text>
  <text x="240" y="117" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language</text>
  <rect x="410" y="103" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="117.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Français ▾</text>
  <text x="240" y="149" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Date label (cover)</text>
  <rect x="410" y="135" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="149.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">default: today</text>
  <rect x="410" y="172" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="427" y="181" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Show technical keys next to setting labels</text>
  <text x="240" y="211" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <rect x="410" y="202" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,207.5 L414.8,209.8 L418.8,205" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="211" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Context</text>
  <rect x="670" y="202" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,207.5 L674.8,209.8 L678.8,205" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687" y="211" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Architecture</text>
  <rect x="410" y="223" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,228.5 L414.8,230.8 L418.8,226" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="232" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">How it works and built-in rules</text>
  <rect x="670" y="223" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,228.5 L674.8,230.8 L678.8,226" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687" y="232" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Documents</text>
  <rect x="410" y="244" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,249.5 L414.8,251.8 L418.8,247" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="253" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">UBL transform and rules</text>
  <rect x="670" y="244" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,249.5 L674.8,251.8 L678.8,247" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687" y="253" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Platform settings</text>
  <rect x="410" y="265" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,270.5 L414.8,272.8 L418.8,268" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="274" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Operations</text>
  <rect x="670" y="265" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,270.5 L674.8,272.8 L678.8,268" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687" y="274" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Security</text>
  <rect x="410" y="286" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,291.5 L414.8,293.8 L418.8,289" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="295" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Reference data</text>
  <rect x="670" y="286" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="687" y="295" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Appendix: configuration keys</text>
  <rect x="410" y="307" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="427" y="316" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Appendix: API reference</text>
  <rect x="240" y="341" width="100" height="26" rx="5" fill="url(#ir-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="290.0" y="357.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Download PDF</text>
  <rect x="348" y="341" width="128" height="26" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="412.0" y="357.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Download Markdown</text>
  <rect x="20" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fourth tab of Reports</text>
  <text x="30" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">next to the audit report</text>
  <line x1="200" y1="43.0" x2="240" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ir-arrow)"/>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">labels follow the language</text>
  <line x1="200" y1="117.0" x2="410" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ir-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">first nine ticked by default</text>
  <line x1="200" y1="237.0" x2="410" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ir-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Technical keys</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">for a technical reader</text>
  <line x1="1000" y1="177.0" x2="710" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ir-arrow)"/>
  <rect x="1000" y="335" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="350" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF or Markdown</text>
  <text x="1010" y="363" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copy kept in reports/</text>
  <line x1="1000" y1="352.0" x2="500" y2="354" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ir-arrow)"/>
</svg>

| Control | Description |
|---|---|
| **Language** | Drop-down: French or English. Defaults to the language of the interface. Labels of settings, statuses and lists follow the language. |
| **Date label (cover)** | Free text printed on the cover (e.g. *Go-live V2*). Blank = today's date. |
| **Show technical keys next to setting labels** | Adds the configuration key after each label (`Allow reprocess · allowReprocess`). Useful for a technical reader; off by default. |
| **Sections** | Tick the parts to include. The first nine are ticked by default; the two appendices are optional because of their length. |
| **Download PDF / Download Markdown** | Generates the file and downloads it. A copy is kept in the environment's `reports` folder (`<appHome>/<env>/reports/nomaubl-implementation-<date>-<time>.pdf` or `.md`). |

---

## What the report contains

| Section | Content |
|---|---|
| **Context** | Environment, release and standard version (XP Z12-014), generation date, application home, database type and schema, companies, number of documents, author. |
| **Architecture** | The flows enabled on the instance and their trigger: sending to the PA, import poll, status poll, received invoices, e-reporting, directory check, scheduled batch jobs, watched folders, JDE print queue reports, connectors per type, authentication. A flow shown as *off* is configured without a trigger and can still be run on demand. Then the processing chain: sources, transform, validation, archive tables, directions. |
| **How it works and built-in rules** | The functional guide: what every page is for (in menu order), the invoice lifecycle, the protection of deposited invoices, the rules of edit / fix buyer / resend / validate / set status / e-mail with the permission each one requires, the two reprocess modes, the status poll with the integrity and ordering checks, the review flag and notifications, and a quick reference of the platform statuses (AFNOR XP Z12-014) and of the internal `99xx` stages. |
| **Documents** | One table of every document (source, direction, processing type, PDF template), the path variables with their value on this instance, then one subsection per document: folders, XSL and RTF files, UBL sheet, reprocess options, links to its pre-transform and UBL sheet, index fields and other settings. Then the PDF templates: documents that use each one, layout, logo, colours, sections and their options. |
| **UBL transform and rules** | Shared defaults (currency, specification identifier, schemes, defaults per BT), issuing companies, mapping tables and rules (transaction type, VAT category, exemption, payment means, unit of measure…), validation packs with their version and rule counts, house rules, coverage per document, then one subsection per pre-transform (renames, custom rules, drops) and per UBL sheet: profile, redefined mappings, and the full **source field → BT → UBL path** mapping. |
| **Platform settings** | E-invoicing settings (default and per company), e-reporting, directory, document types with their send and validation flags. |
| **Operations** | Scheduled jobs with their trigger, watched folders, notification rules with the actions they trigger, invoice actions, integrity checks, connectors with their host and authentication type. |
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

Defaults: the first nine sections, Markdown, French. See [Command line](../management/command-line.md#report).

---

## Access

The tab belongs to the *Reports* page: grant **Reports** in the Navigation group on the [Roles](../configuration/security/roles.md) page. The API route is `GET /api/reports/implementation`.

---

## Tips & best practices

- **Generate it after each go-live and each upgrade.** The copy kept in the `reports` folder becomes the dated history of the configuration, next to [File versions](../management/file-versions.md).
- **Keep the technical keys off for a business reader.** Labels are enough for a project team; turn the keys on for the people who edit configuration files or read the API.
- **Add the appendices for an audit file only.** The configuration-keys and API appendices make the PDF several times longer.
