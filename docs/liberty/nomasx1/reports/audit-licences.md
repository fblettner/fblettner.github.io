---
title: JD Edwards Licence Audit
description: "A one-click compliance and optimisation audit for a JD Edwards application — licence inventory, real usage, financial exposure and a remediation plan, rendered as a PDF or Markdown deliverable. Bilingual (French default, English available); the report opens on a headline KPI band and inline charts (active-users donut, components-by-usage bar, financial risk by component)."
keywords: [Nomasx-1, reports, licence audit, JD Edwards, Oracle, compliance, optimisation, Object Usage Tracking, segregation of duties, financial risk, KPI, bilingual, French, English]
---

# JD Edwards Licence Audit

The **JD Edwards Licence Audit** is a generated report, not a grid. It runs against one connected application and assembles a full compliance-and-optimisation deliverable: what is subscribed, what is actually used, where the financial exposure sits, and how to close it. The output is a polished PDF — or Markdown — ready to hand to a steering committee.

It draws on the data Nomasx-1 already collects — Object Usage Tracking, role and permission assignments, the segregation-of-duties matrix and the per-application licence inventory — and turns it into a single narrative document.

:::info[JDE-specific]
This report targets a **JD Edwards EnterpriseOne** application and its Oracle technology foundation. The connected application is identified by its Nomasx-1 `apps_id`.
:::

---

## At a glance

<svg viewBox="0 0 1320 628" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxrepaud-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxrepaud-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxrepaud-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxrepaud-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="588" rx="14" fill="url(#nxrepaud-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Reports</text>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Run a report and download the result as PDF or markdown.</text>
  <rect x="1000" y="40" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="54.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1004" y="88" width="76" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="99.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 reports</text>
  <rect x="240" y="112" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="134" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Audit Licences JD Edwards</text>
  <text x="404.8" y="134" fill="#64748b" fontSize="8.3" fontFamily="ui-monospace, monospace">nomasx1:audit-licences</text>
  <text x="254" y="154" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Compliance + optimisation analysis for one apps_id… Available in French or English.</text>
  <rect x="1004" y="122" width="62" height="22" rx="5" fill="url(#nxrepaud-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1035.0" y="136.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="240" y="176" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="198" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Security &amp; Segregation of Duties Assessment</text>
  <text x="507.616" y="198" fill="#64748b" fontSize="8.3" fontFamily="ui-monospace, monospace">nomasx1:security-sox</text>
  <text x="254" y="218" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Security &amp; SoD review for one apps_id… Available in English or French.</text>
  <rect x="1004" y="186" width="62" height="22" rx="5" fill="url(#nxrepaud-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1035.0" y="200.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="370" y="200" width="580" height="396" rx="12" fill="#111827" stroke="#334155" strokeWidth="1.4"/>
  <text x="388" y="224" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Audit Licences JD Edwards</text>
  <line x1="370" y1="236" x2="950" y2="236" stroke="#1f2937" strokeWidth="1"/>
  <text x="388" y="254" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Compliance + optimisation analysis for one apps_id… Available in French or English.</text>
  <text x="388" y="272" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TARGET CONNECTOR</text>
  <rect x="388" y="278" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="292.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">nomasx1</text>
  <text x="922" y="292.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="388" y="312" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHEMA</text>
  <rect x="388" y="318" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="332.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">public</text>
  <text x="922" y="332.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="388" y="352" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION &#42;</text>
  <rect x="388" y="358" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="372.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Select…</text>
  <text x="922" y="372.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="388" y="392" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANGUAGE</text>
  <rect x="388" y="398" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="412.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">fr  Français</text>
  <text x="922" y="412.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="388" y="432" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUDIT DATE LABEL</text>
  <rect x="388" y="438" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="452.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="388" y="472" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT NAME</text>
  <rect x="388" y="478" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="492.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="388" y="512" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="388" y="518" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="532.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PDF</text>
  <text x="488" y="532.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <line x1="370" y1="558" x2="950" y2="558" stroke="#1f2937" strokeWidth="1"/>
  <rect x="828" y="568" width="104" height="24" rx="5" fill="url(#nxrepaud-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="880.0" y="583.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Run &amp; download</text>
  <rect x="758" y="568" width="62" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="789.0" y="583.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The reports</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one card per report, ▷ Run</text>
  <line x1="200" y1="147.0" x2="240" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▷ Run</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the parameters</text>
  <line x1="1120" y1="147.0" x2="1035" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="20" y="352" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="367" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application (required)</text>
  <text x="30" y="380" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked by name</text>
  <line x1="200" y1="369.0" x2="388" y2="375" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="20" y="272" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="287" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connector · schema</text>
  <text x="30" y="300" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where the Nomasx-1 tables are</text>
  <line x1="200" y1="289.0" x2="388" y2="295" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="1120" y="392" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language</text>
  <text x="1130" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">French by default</text>
  <line x1="1120" y1="409.0" x2="932" y2="415" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="1120" y="472" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="487" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cover page</text>
  <text x="1130" y="500" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">date label, client name</text>
  <line x1="1120" y1="489.0" x2="932" y2="495" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="20" y="519" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="534" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Format</text>
  <text x="30" y="547" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PDF or markdown</text>
  <line x1="200" y1="536.0" x2="388" y2="535" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="1120" y="548" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="563" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run &amp; download</text>
  <text x="1130" y="576" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the file comes back to the browser</text>
  <line x1="1120" y1="565.0" x2="920" y2="580" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
</svg>

---

## The deliverable

A confidential, branded document of roughly thirty to forty pages — PDF for the steering committee, Markdown when you want to edit or embed it. The cover carries the title *Audit Licences JD Edwards – \{client\}*, the subtitle *Analyse de conformité et plan d'optimisation des licences Oracle*, and a **Client / Date / Author / Version** block; every page is footed *Confidentiel*.

The report is generated in **French by default** (the working language of the audit); switch the **Language** parameter to `English` for a fully English deliverable.

It is an **internal** compliance-and-optimisation document — the basis for your own decisions and for preparing a contract renewal, not a declaration to hand to the vendor.

---

## Headline KPIs and inline charts

The executive summary opens on a **KPI band** and a small set of inline SVG charts, so the message reads in seconds before the reader dives into the detail:

- **Stat band** — active users, never-used accounts, quantifiable financial risk (€) and unassigned roles.
- **Active-users donut** — used vs never-used across the audited population.
- **Components-by-usage bar** — the Oracle components in use ranked by consumption.
- **Financial-risk-by-component bar** — the euro-denominated exposure sized per component.

The charts render inline in both PDF and Markdown output — no external image assets, no dependency on a chart engine at render time.

---

## What the report contains

Nine sections, each built from the data Nomasx-1 has collected:

1. **Synthèse** — executive summary: context and objectives, the principal findings each with a risk level, the estimated financial exposure, and the key recommendations.
2. **Périmètre de l'audit** — audited components, what is out of scope, the JD Edwards environments table (production vs non-production), and the **technical architecture**: software versions, a server inventory, and an architecture diagram the report generates automatically.
3. **Méthodologie** — the tools and data used, the analysis rules (usage is measured from real consumption, not from authorisations), and a **data-sources** table that dates every input.
4. **Licences acquises** — the subscribed inventory: Oracle Database Enterprise Edition (NUP), the options and packs, the components detected in use, the *règle des minimas* and the NUP minimum computed from the processor count; then the JD Edwards Oracle Technology Foundation and the application modules.
5. **Utilisation et conformité** — the core of the report:
   - JD Edwards modules cross-referenced **OUT × transactions** — real consumption versus write activity — with a drill-down on low-usage modules (which user touched which object);
   - **authorisations versus real usage** per module (authorised users vs OUT vs transactions vs number of roles), which surfaces access far wider than actual use;
   - the **optimisation analysis** (see below);
   - the Oracle Technology Foundation user analysis (declared / active / disabled, technical accounts, role assignments) and the Oracle database user count.
6. **Risque financier** — the calculation method (Oracle public price list plus three years of support arrears), each identified risk costed line by line, a consolidated figure, the prioritised levers, and an analysis of any Oracle quotes currently in negotiation.
7. **Plan de remédiation** — concrete clean-up: deactivating never-used accounts, and rationalising roles and access (dropping unassigned roles, reviewing excessive role stacking, aligning access to real use).
8. **Recommandations et plan d'action** — every action ranked by priority, effort and financial impact, an indicative four-phase schedule, and the follow-up indicators to track afterwards.
9. **Annexes** — the detailed list of users to deactivate (with creation and last-update dates, and the validation cautions to apply before disabling) and a glossary.

---

## The optimisation analysis

Beyond pure compliance, the report mines the **detailed OUT extract** — one row per user × module × object — to size licences to real need rather than to the blanket "full use" grant:

- the distribution of modules-per-user (most users touch only a handful of modules);
- the most frequent module combinations, which cluster around a commercial / logistics core;
- two usage profiles — **Standard** (the core) and **Étendu** (the core plus at least one specialised module);
- a proposed split into **differentiated bundles** to take into a contract renewal.

This is what turns the audit from a compliance snapshot into a cost-optimisation lever — the section the renewal negotiation is built on.

---

## Running the report

The report lives under **Reports** in the Nomasx-1 menu: one card per report, with its description. **Run** on the **Audit Licences JD Edwards** card opens its parameters; fill them, choose a **Format**, then **Run & download**.

| Parameter | Required | Default | What it sets |
|---|---|---|---|
| **Application** | Yes | — | The application to audit. Picked **by name** from the registered applications (*Settings → Global → Applications*) — the run form resolves the name to the underlying `apps_id`. |
| **Target connector** | No | `nomasx1` | Dropdown of the SQL connectors on the install. |
| **Schema** | No | `public` | Dropdown of the schemas of the picked target connector. |
| **Language** | No | `Français` | Report language — `Français` or `English`. |
| **Audit date label** | No | current month + year | The label printed on the cover page (e.g. *Mai 2026*). |
| **Client name** | No | the application name | The client name on the cover page. |

Every dropdown resolves server-side against live catalogs — *Application* against the applications registry, *Target connector* against the configured SQL connectors and *Schema* against the schemas of the picked connector. Cascading defaults mean picking a connector re-lists its own schemas.

**Format** — `PDF` for the steering-committee deliverable, `markdown` when you want to edit or embed the content. The run streams the file straight back to the browser.

**Every month, by e-mail** — *Jobs → Licence audit report* renders the same PDF for one or several applications and mails it to the auditors' role; scheduled on the 1st of the month once enabled. See [Nomasx-1 jobs](../jobs.md#reports).

---

## Before you run

The audit reads the data Nomasx-1 has already collected for the application — it does not collect on the fly. For an accurate picture, make sure the latest collection has run first. The report draws on:

- **Object Usage Tracking** — the synthesis (distinct users per module), the detail (users / objects / dates) and the fine detail (one row per user × module × object) that drives the *Utilisation et conformité* and optimisation sections.
- **Modules with transactions** — users who generated at least one write per module.
- **The JD Edwards user list** — declared, active and disabled users, with creation and last-usage dates.
- **Roles, user-role assignments and access rights per role**, plus the **JDE menus** (object → module mapping) that link usage to modules.
- **The database options and packs inventory** — Oracle components in use versus subscribed.
- **The licence inventory and pricing** (*Licenses* and *Settings → Pricing*), otherwise the financial figures drift from the real price book.

A run against an application with no collected usage still produces the document, but the usage and financial sections will read as empty rather than wrong.

---

## Tips & best practices

- **Run it after a fresh collection.** The audit is a snapshot of the current tables — schedule it right after the nightly collection so the figures match reality.
- **Set the *Audit date label* and *Client name*** for an external-ready cover page; leave them empty for an internal draft.
- **Use *markdown* to iterate, *PDF* to deliver.** The Markdown output is the same content without the cover styling, handy for review before the final export.
- **Read it next to the source screens.** Every figure traces back to a screen — *Object Usage Tracking*, *Conflicts*, *Licenses* — so a reviewer can drill from the audit into the live data.
