---
title: Security & SoD Assessment
description: "A one-click security-posture and segregation-of-duties review for a connected application — user lifecycle, privileged access, role and object-security hygiene, SoD conflicts and a remediation plan, rendered as a PDF or Markdown deliverable."
keywords: [Nomasx-1, reports, security assessment, segregation of duties, SoD, SOX, JD Edwards, Security Workbench, dormant accounts, privileged access, ITGC, compliance]
---

# Security & SoD Assessment

The **Security & Segregation of Duties Assessment** is a generated report, not a grid. It runs against one connected application and assembles a full security-posture deliverable: who can sign in, which accounts are dormant or privileged, how clean the role and object-security setup is, where segregation-of-duties (SoD) conflicts sit, and how to close them. The output is a polished PDF — or Markdown — ready to hand to a steering committee or an auditor.

It draws on the data Nomasx-1 already collects — the user registry, roles and assignments, the object-security grants (Security Workbench) and the segregation-of-duties matrix — and turns it into a single narrative document, driven by **Sarbanes-Oxley (SOX)** IT general-control expectations. It is framed as a general security-posture review, not a formal control attestation.

:::info[JDE-specific]
The **segregation-of-duties** sections build on the SoD conflict refresh (`nomasx1-sod-1`), which today evaluates **JD Edwards EnterpriseOne** `SECURITY_RIGHTS` rows. The user, role and object-security hygiene sections read the `security_*` tables directly and apply to any connected application; the SoD matrix and `*PUBLIC` / Security Workbench language is JDE-flavoured.
:::

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sox-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="32" width="920" height="256" rx="14" fill="url(#sox-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="60" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Reports</text>
  <line x1="40" y1="76" x2="960" y2="76" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="92" width="300" height="176" rx="10" fill="rgba(192,132,252,0.06)" stroke="rgba(192,132,252,0.30)" strokeWidth="1.2"/>
  <text x="78" y="120" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Security &amp; SoD Assessment</text>
  <text x="78" y="142" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">SOX-driven security-posture review</text>
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
  <text x="404" y="167" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Target connector · Schema</text>
  <text x="924" y="167" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">nomasx1 · public</text>
  <rect x="392" y="178" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="193" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Language · Dormancy window (days)</text>
  <text x="924" y="193" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">en · 90</text>
  <rect x="392" y="204" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="219" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Report date label · Client name</text>
  <text x="924" y="219" fill="#64748b" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">optional</text>

  <rect x="392" y="236" width="92" height="26" rx="6" fill="rgba(192,132,252,0.16)" stroke="rgba(192,132,252,0.45)" strokeWidth="1.2"/>
  <text x="438" y="253" fill="#d8b4fe" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Run &amp; download</text>
  <rect x="492" y="236" width="70" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="527" y="253" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Format</text>
</svg>

---

## The deliverable

A branded document of roughly twenty to thirty pages — PDF for the steering committee or the auditor, Markdown when you want to edit or embed it. The cover carries the title *Security & SoD Assessment – \{client\}* (in French, *Évaluation Sécurité & Séparation des tâches – \{client\}*), a security-review subtitle, and an **Application / Date / Prepared by: NOMANA-IT** block. The report is generated in **English by default**; switch the **Language** parameter to `Français` for a fully French deliverable.

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

The matrix itself — processes, activities, objects, risks and the incompatible pairs — is maintained under **Settings → Segregation of duties**, and refreshed into the conflict tables by the `nomasx1-sod-1` job. Run that job before the report so the figures are current.

---

## Running the report

The report lives under **Reports** in the Nomasx-1 sidebar, on the framework's *Run a report and download the result as PDF or markdown* page. Pick **Security & SoD Assessment** from the list, fill the parameters, choose a **Format**, then **Run & download**.

| Parameter | Required | Default | What it sets |
|---|---|---|---|
| **Application** | Yes | — | The `apps_id` to assess. Picked by name from the applications registry (*Settings → Global → Applications*). |
| **Target connector** | No | `nomasx1` | The connector pool that holds the Nomasx-1 tables. |
| **Schema** | No | `public` | The database schema on that connector. |
| **Language** | No | `English` | Report language — `English` or `Français`. |
| **Dormancy window (days)** | No | `90` | An enabled account with no sign-in within this many days counts as dormant. |
| **Report date label** | No | current month + year | The label printed on the cover page (e.g. *June 2026*). |
| **Client name** | No | the application name | The client name on the cover page. |

**Format** — `PDF` for the steering-committee deliverable, `markdown` when you want to edit or embed the content. The run streams the file straight back to the browser.

---

## Before you run

The audit reads the data Nomasx-1 has already collected for the application — it does not collect on the fly. For an accurate picture, make sure the latest collection and the SoD refresh have run first. The report draws on:

- **The user registry** — declared accounts, status and last sign-in, plus the curated flags (privileged / technical / generic / linked) maintained on each user.
- **Roles and assignments** — the role catalog and the user-role assignments.
- **Object security** — the Security Workbench grants (run / add / change / delete, direct or via `*ROLE`, and `*PUBLIC` grants).
- **The SoD conflict tables** — refreshed by `nomasx1-sod-1`, decorated by the matrix and its process / activity / object / risk dimensions.
- **The applications registry** — for the cover and scope.

A run against an application with no collected data still produces the document, but the affected sections read as empty rather than wrong.

---

## Tips & best practices

- **Refresh SoD first.** Run `nomasx1-sod-1` right before the report so the conflict counts and the trend match reality.
- **Start with the role-level findings.** Self-conflicting roles and the most-conflicted roles are the fastest wins — one fix clears conflicts for every user who holds the role.
- **Set the *Report date label* and *Client name*** for an external-ready cover page; leave them empty for an internal draft.
- **Use *markdown* to iterate, *PDF* to deliver.** The Markdown output is the same content without the cover styling, handy for review before the final export.
- **Read it next to the source screens.** Every figure traces back to a screen — *Users*, *Roles*, *Security Workbench*, *Segregation of duties* — so a reviewer can drill from the report into the live data.
