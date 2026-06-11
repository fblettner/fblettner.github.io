---
title: JD Edwards Licence Audit
description: "A one-click compliance and optimisation audit for a JD Edwards application — licence inventory, real usage, financial exposure and a remediation plan, rendered as a PDF or Markdown deliverable."
keywords: [Nomasx-1, reports, licence audit, JD Edwards, Oracle, compliance, optimisation, Object Usage Tracking, segregation of duties, financial risk]
---

# JD Edwards Licence Audit

The **JD Edwards Licence Audit** is a generated report, not a grid. It runs against one connected application and assembles a full compliance-and-optimisation deliverable: what is subscribed, what is actually used, where the financial exposure sits, and how to close it. The output is a polished PDF — or Markdown — ready to hand to a steering committee.

It draws on the data Nomasx-1 already collects — Object Usage Tracking, role and permission assignments, the segregation-of-duties matrix and the per-application licence inventory — and turns it into a single narrative document.

:::info[JDE-specific]
This report targets a **JD Edwards EnterpriseOne** application and its Oracle technology foundation. The connected application is identified by its Nomasx-1 `apps_id`.
:::

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rpt-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="32" width="920" height="256" rx="14" fill="url(#rpt-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="60" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Reports</text>
  <line x1="40" y1="76" x2="960" y2="76" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="92" width="300" height="176" rx="10" fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.30)" strokeWidth="1.2"/>
  <text x="78" y="120" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Audit Licences JD Edwards</text>
  <text x="78" y="142" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Compliance + optimisation analysis</text>
  <text x="78" y="156" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">for one application.</text>
  <rect x="78" y="174" width="60" height="20" rx="10" fill="rgba(148,163,184,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="108" y="188" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">PDF</text>
  <rect x="146" y="174" width="84" height="20" rx="10" fill="rgba(148,163,184,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="188" y="188" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">markdown</text>

  <text x="392" y="116" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <rect x="392" y="126" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="141" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="924" y="141" fill="#f87171" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">required</text>
  <rect x="392" y="152" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="167" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Target connector</text>
  <text x="924" y="167" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">nomasx1</text>
  <rect x="392" y="178" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="193" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Schema</text>
  <text x="924" y="193" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">public</text>
  <rect x="392" y="204" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="219" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Audit date label · Client name</text>
  <text x="924" y="219" fill="#64748b" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">optional</text>

  <rect x="392" y="236" width="92" height="26" rx="6" fill="rgba(56,189,248,0.16)" stroke="rgba(56,189,248,0.45)" strokeWidth="1.2"/>
  <text x="438" y="253" fill="#7dd3fc" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Run &amp; download</text>
  <rect x="492" y="236" width="70" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="527" y="253" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Format</text>
</svg>

---

## The deliverable

A confidential, branded document of roughly thirty to forty pages — PDF for the steering committee, Markdown when you want to edit or embed it. The cover carries the title *Audit Licences JD Edwards – \{client\}*, the subtitle *Analyse de conformité et plan d'optimisation des licences Oracle*, and a **Client / Date / Author / Version** block; every page is footed *Confidentiel*. The narrative is written in French, the working language of the audit.

It is an **internal** compliance-and-optimisation document — the basis for your own decisions and for preparing a contract renewal, not a declaration to hand to the vendor.

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

The report lives under **Reports** in the Nomasx-1 sidebar, on the framework's *Run a report and download the result as PDF or markdown* page. Pick **Audit Licences JD Edwards** from the list, fill the parameters, choose a **Format**, then **Run & download**.

| Parameter | Required | Default | What it sets |
|---|---|---|---|
| **Application** | Yes | — | The `apps_id` to audit. Must exist in the applications registry (*Settings → Global → Applications*). |
| **Target connector** | No | `nomasx1` | The connector pool that holds the Nomasx-1 tables. |
| **Schema** | No | `public` | The database schema on that connector. |
| **Audit date label** | No | current month + year | The label printed on the cover page (e.g. *Mai 2026*). |
| **Client name** | No | the application name | The client name on the cover page. |

**Format** — `PDF` for the steering-committee deliverable, `markdown` when you want to edit or embed the content. The run streams the file straight back to the browser.

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
