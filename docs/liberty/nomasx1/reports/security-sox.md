---
title: Security & SoD Assessment
description: "A one-click security-posture and segregation-of-duties review for a connected application — user lifecycle, privileged access, role and object-security hygiene, SoD conflicts and a remediation plan, rendered as a PDF or Markdown deliverable."
keywords: [Nomasx-1, reports, security assessment, segregation of duties, SoD, SOX, JD Edwards, Security Workbench, dormant accounts, privileged access, ITGC, compliance]
---

# Security & SoD Assessment

The **Security & Segregation of Duties Assessment** is a generated report, not a grid. It runs against one connected application and assembles a full security-posture deliverable: who can sign in, which accounts are dormant or privileged, how clean the role and object-security setup is, where segregation-of-duties (SoD) conflicts sit, and how to close them. The output is a polished PDF — or Markdown — ready to hand to a steering committee or an auditor.

It draws on the data Nomasx-1 already collects — the user registry, roles and assignments, the object-security grants (Security Workbench) and the segregation-of-duties matrix — and turns it into a single narrative document, driven by **Sarbanes-Oxley (SOX)** IT general-control expectations. It is framed as a general security-posture review, not a formal control attestation.

:::info[JDE-specific]
The **segregation-of-duties** sections build on the SoD conflict refresh (the *Security and SoD* collection, `nomasx1-collect-all`), which today evaluates **JD Edwards EnterpriseOne** `SECURITY_RIGHTS` rows. The user, role and object-security hygiene sections read the `security_*` tables directly and apply to any connected application; the SoD matrix and `*PUBLIC` / Security Workbench language is JDE-flavoured.
:::

---

## At a glance

<svg viewBox="0 0 1320 668" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxrepsox-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxrepsox-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxrepsox-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxrepsox-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="628" rx="14" fill="url(#nxrepsox-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <rect x="1004" y="122" width="62" height="22" rx="5" fill="url(#nxrepsox-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1035.0" y="136.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="240" y="176" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="198" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Security &amp; Segregation of Duties Assessment</text>
  <text x="507.616" y="198" fill="#64748b" fontSize="8.3" fontFamily="ui-monospace, monospace">nomasx1:security-sox</text>
  <text x="254" y="218" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Security &amp; SoD review for one apps_id… Available in English or French.</text>
  <rect x="1004" y="186" width="62" height="22" rx="5" fill="url(#nxrepsox-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1035.0" y="200.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="370" y="200" width="580" height="436" rx="12" fill="#111827" stroke="#334155" strokeWidth="1.4"/>
  <text x="388" y="224" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Security &amp; Segregation of Duties Assessment</text>
  <line x1="370" y1="236" x2="950" y2="236" stroke="#1f2937" strokeWidth="1"/>
  <text x="388" y="254" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Security &amp; SoD review for one apps_id… Available in English or French.</text>
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
  <text x="398" y="412.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">en  English</text>
  <text x="922" y="412.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="388" y="432" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DORMANCY WINDOW (DAYS)</text>
  <rect x="388" y="438" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="452.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">90</text>
  <text x="388" y="472" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPORT DATE LABEL</text>
  <rect x="388" y="478" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="492.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="388" y="512" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT NAME</text>
  <rect x="388" y="518" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="532.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="388" y="552" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="388" y="558" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="572.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PDF</text>
  <text x="488" y="572.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <line x1="370" y1="598" x2="950" y2="598" stroke="#1f2937" strokeWidth="1"/>
  <rect x="828" y="608" width="104" height="24" rx="5" fill="url(#nxrepsox-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="880.0" y="623.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Run &amp; download</text>
  <rect x="758" y="608" width="62" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="789.0" y="623.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The reports</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one card per report, ▷ Run</text>
  <line x1="200" y1="147.0" x2="240" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▷ Run</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the parameters</text>
  <line x1="1120" y1="147.0" x2="1035" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="20" y="352" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="367" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application (required)</text>
  <text x="30" y="380" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked by name</text>
  <line x1="200" y1="369.0" x2="388" y2="375" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="20" y="272" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="287" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connector · schema</text>
  <text x="30" y="300" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where the Nomasx-1 tables are</text>
  <line x1="200" y1="289.0" x2="388" y2="295" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="1120" y="392" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language</text>
  <text x="1130" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">English by default</text>
  <line x1="1120" y1="409.0" x2="932" y2="415" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="1120" y="439" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="454" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dormancy window</text>
  <text x="1130" y="467" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">90 days by default</text>
  <line x1="1120" y1="456.0" x2="932" y2="455" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="1120" y="512" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="527" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cover page</text>
  <text x="1130" y="540" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">date label, client name</text>
  <line x1="1120" y1="529.0" x2="932" y2="535" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="20" y="559" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="574" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Format</text>
  <text x="30" y="587" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PDF or markdown</text>
  <line x1="200" y1="576.0" x2="388" y2="575" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="1120" y="588" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="603" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run &amp; download</text>
  <text x="1130" y="616" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the file comes back to the browser</text>
  <line x1="1120" y1="605.0" x2="920" y2="620" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
</svg>

---

## The deliverable

A branded document of roughly twenty to thirty pages — PDF for the steering committee or the auditor, Markdown when you want to edit or embed it. The cover carries the title *Security & SoD Assessment – \{client\}* (in French, *Évaluation Sécurité & Séparation des tâches – \{client\}*), a security-review subtitle, and an **Application / Date / Prepared by: NOMANA-IT** block. The report is generated in **English by default**; switch the **Language** parameter to `Français` for a fully French deliverable.

---

## Headline KPIs and inline charts

The executive summary opens on a **KPI band** and a small set of inline SVG charts, sized to make the security story readable at a glance:

- **Stat band** — headline metrics: total users, dormant accounts, privileged accounts and total SoD violations.
- **Findings-by-severity donut** — how the report's findings distribute across `high` / `medium` / `low`.
- **Most-conflicted roles bar** — the roles that carry the most conflicts, ranked by user count and distinct SoD rules.
- **Conflicts-by-process bar** — the SoD violations grouped by the business process the matrix assigns them to (when the matrix carries a process dimension).
- **SoD trend line** — the total-violations curve across recent refreshes; prints a *not enough history* note when only one refresh exists.

The charts render inline in both PDF and Markdown output — no external image assets, no dependency on a chart engine at render time.

It is an **internal** security-and-compliance document — the basis for your own remediation decisions and for an access review, not an attestation to file with a regulator.

---

## What the report contains

Eight sections plus a glossary, each built from the data Nomasx-1 has collected:

1. **Executive summary** — a KPI band, the principal findings each with a severity (high / medium / low), a severity breakdown, the key indicators, and a one-line SoD trend versus the previous refresh.
2. **Scope & methodology** — the application scope (name, id, type, database), the method (how a conflict is defined), and a **data-freshness** table that dates every input.
3. **User access & lifecycle** — the declared population, then **dormant and never-used accounts** (an enabled account with no sign-in within the dormancy window), **generic / shared accounts**, and **technical / service accounts**.
4. **Privileged access review** — the privileged accounts, with the count of privileged accounts and of privileged SoD pairings.
5. **Role & object-security hygiene** — role metrics (roles-per-user distribution, the most-entitled users, orphan roles) and **object security** read from the Security Workbench grants.
6. **Segregation of duties** — the core of the report: matrix coverage, the violation summary, **self-conflicting roles** (fix the role), the most-conflicted roles, the **most common conflicting role combinations** (fix the assignments), and — when the matrix carries them — conflicts by risk and by process.
7. **SoD trend** — a multi-refresh trend table and trend line; it needs at least two refreshes, otherwise it prints a *not enough history* note.
8. **Findings & recommendations** — every finding and a matching **recommended actions** table.

A closing **glossary** defines the ten terms the report uses (SoD, conflict matrix, self-conflicting role, conflicting role combination, privileged / generic / technical account, `*PUBLIC`, dormant account, ITGC).

---

## How a conflict is read

A **conflict** is a single enabled user who can perform **both** sides of an incompatible activity pair declared in the SoD **matrix**. The report does not list user-by-user; it groups the conflicts into the unit you actually remediate:

- **Self-conflicting role** — one role grants both sides of a pair. That is a role-design defect: **fix the role**.
- **Conflicting role combination** — the conflict only appears because a user holds *two* roles. That is an assignment problem: **fix the assignment**.
- **Most-conflicted roles** — ranked by the number of users and distinct conflict rules they carry, so you know which role to clean up first.

Severity comes from the operator's own levels on the matrix — the **Risk Level** (the primary sort) and, as a fallback, the **Critical Level** on the risk dimension. The headline *total violations* is a count of **user × matrix-entry pairings** (how many users trip each rule), not a raw count of rules.

The matrix itself — processes, activities, objects, risks and the incompatible pairs — is maintained under **Settings → Segregation of duties**, and refreshed into the conflict tables by the collection job, `nomasx1-collect-all` (*Jobs → Collect security and SoD*). Run it before the report so the figures are current.

---

## Running the report

The report lives under **Reports** in the Nomasx-1 menu: one card per report, with its description. **Run** on the **Security & Segregation of Duties Assessment** card opens its parameters; fill them, choose a **Format**, then **Run & download**.

| Parameter | Required | Default | What it sets |
|---|---|---|---|
| **Application** | Yes | — | The application to assess. Picked **by name** from the registered applications (*Settings → Global → Applications*) — the run form resolves the name to the underlying `apps_id`. |
| **Target connector** | No | `nomasx1` | Dropdown of the SQL connectors on the install. |
| **Schema** | No | `public` | Dropdown of the schemas of the picked target connector. |
| **Language** | No | `English` | Report language — `English` or `Français`. |
| **Dormancy window (days)** | No | `90` | An enabled account with no sign-in within this many days counts as dormant. |
| **Report date label** | No | current month + year | The label printed on the cover page (e.g. *June 2026*). |
| **Client name** | No | the application name | The client name on the cover page. |

Every dropdown resolves server-side against live catalogs — *Application* against the applications registry, *Target connector* against the configured SQL connectors and *Schema* against the schemas of the picked connector. Cascading defaults mean picking a connector re-lists its own schemas.

**Format** — `PDF` for the steering-committee deliverable, `markdown` when you want to edit or embed the content. The run streams the file straight back to the browser.

**Every month, by e-mail** — *Jobs → Security & SoD report* renders the same PDF for one or several applications and mails it to the auditors' role; scheduled on the 1st of the month once enabled. See [Nomasx-1 jobs](../jobs.md#reports).

---

## Before you run

The audit reads the data Nomasx-1 has already collected for the application — it does not collect on the fly. For an accurate picture, make sure the latest collection and the SoD refresh have run first. The report draws on:

- **The user registry** — declared accounts, status and last sign-in, plus the curated flags (privileged / technical / generic / linked) maintained on each user.
- **Roles and assignments** — the role catalog and the user-role assignments.
- **Object security** — the Security Workbench grants (run / add / change / delete, direct or via `*ROLE`, and `*PUBLIC` grants).
- **The SoD conflict tables** — refreshed by `nomasx1-collect-all`, decorated by the matrix and its process / activity / object / risk dimensions.
- **The applications registry** — for the cover and scope.

A run against an application with no collected data still produces the document, but the affected sections read as empty rather than wrong.

---

## Tips & best practices

- **Refresh SoD first.** Run *Jobs → Collect security and SoD* right before the report so the conflict counts and the trend match reality.
- **Start with the role-level findings.** Self-conflicting roles and the most-conflicted roles are the fastest wins — one fix clears conflicts for every user who holds the role.
- **Set the *Report date label* and *Client name*** for an external-ready cover page; leave them empty for an internal draft.
- **Use *markdown* to iterate, *PDF* to deliver.** The Markdown output is the same content without the cover styling, handy for review before the final export.
- **Read it next to the source screens.** Every figure traces back to a screen — *Users*, *Roles*, *Security Workbench*, *Segregation of duties* — so a reviewer can drill from the report into the live data.
