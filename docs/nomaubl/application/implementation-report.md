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

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px'}}>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.75}}>Status statistics</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.75}}>Integrity</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.75}}>Query tool</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.75}}>Audit report</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid #4a9eff', background: 'rgba(74,158,255,0.10)', color: '#4a9eff', fontWeight: 600}}>Implementation report</span>
  </div>
  <div style={{opacity: 0.75, marginBottom: '12px'}}>Technical and functional description of this instance, generated from its configuration and database. Secrets and instance keys are masked.</div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '8px 12px', alignItems: 'center'}}>
    <b>Language</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '160px'}}>Français ▾</span>
    <b>Date label (cover)</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>default: today</span>
    <span></span><span>☐ Show technical keys next to setting labels</span>
    <b>Sections</b><span style={{lineHeight: 1.9}}>☑ Context · ☑ Architecture · ☑ How it works and built-in rules · ☑ Documents · ☑ UBL transform and rules · ☑ Platform settings · ☑ Operations · ☑ Security · ☑ Reference data · ☐ Appendix: configuration keys · ☐ Appendix: API reference</span>
  </div>
  <div style={{display: 'flex', gap: '8px', marginTop: '14px'}}>
    <span style={{padding: '6px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontWeight: 600}}>Download PDF</span>
    <span style={{padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.35)'}}>Download Markdown</span>
  </div>
</div>

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
