---
title: Conflicts — Proven
description: "Segregation-of-duties conflicts the users exercised — both activities done, shown by Object Usage Tracking, the activity log or the tables written — one row per user and rule, with the evidence, the programs and the dates of each side."
keywords: [Nomasx-1, applications, conflicts, segregation of duties, SoD, proven, exercised, evidence, Object Usage Tracking, activity log]
---

# Conflicts — Proven

The **Conflicts — Proven** screen (*SOD - Proven*) keeps the conflicts the users **exercised**: what was collected shows that the user did both incompatible activities. One row per application, user and rule, with the evidence and, for each activity, the programs with evidence and the date they were last seen.

A row here is no longer a capability — it is a fact, with evidence on both sides. The screen reads the same statement as the [Segregation of duties review](../../sod-review.md), whose *Exercised* tab shows the same rows with the names of the processes, activities and risks.

---

## At a glance

<svg viewBox="0 0 1320 332" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="296" rx="14" fill="url(#cfp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">SOD - Proven</text>
  <line x1="220" y1="76" x2="1100" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="88" width="840" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="104" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Advanced filters</text>
  <text x="250.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="250.0" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="457.5" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESS ID</text>
  <rect x="457.5" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="467.5" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="665.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RISK ID</text>
  <rect x="665.0" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="675.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="872.5" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EVIDENCE</text>
  <rect x="872.5" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="882.5" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="240" y="154" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="168.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="418" y="154" width="47" height="22" rx="5" fill="url(#cfp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="441.5" y="168.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="1020" y="154" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1050.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="959" y="154" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="898" y="154" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="847" y="154" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="186" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="324" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="430" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RISK</text>
  <text x="492" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="562" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY 1</text>
  <text x="628" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY 2</text>
  <text x="694" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EVIDENCE</text>
  <text x="886" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACT. 1: PROGRAMS</text>
  <text x="982" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACT. 1: LAST SEEN</text>
  <rect x="240" y="218" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="324" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC001 · Order To Cash</text>
  <text x="430" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTCR05</text>
  <text x="492" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="562" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC02</text>
  <text x="628" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC05</text>
  <rect x="694" y="222.0" width="179" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="783.5" y="233.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ran both programs (usage tracking)</text>
  <text x="886" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="982" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-18</text>
  <rect x="240" y="246" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="324" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC001 · Order To Cash</text>
  <text x="430" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTCR09</text>
  <text x="492" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="562" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC02</text>
  <text x="628" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC11</text>
  <rect x="694" y="250.0" width="179" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="783.5" y="261.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ran both programs (usage tracking)</text>
  <text x="886" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="982" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-18</text>
  <rect x="240" y="274" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="324" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP001 · Procure To Pay</text>
  <text x="430" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTPR12</text>
  <text x="492" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="562" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP05</text>
  <text x="628" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP16</text>
  <rect x="694" y="278.0" width="156" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="772.0" y="289.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Wrote tables of both programs</text>
  <text x="886" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="982" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-10-30</text>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Evidence filter</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ran · wrote through · tables</text>
  <line x1="1120" y1="117.0" x2="1031.25" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One row per user and rule</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the detail by role: Details</text>
  <line x1="200" y1="267.0" x2="250" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Evidence</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the weaker side of the two</text>
  <line x1="200" y1="187.0" x2="704" y2="214" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Programs and dates</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">for each activity</text>
  <line x1="1120" y1="267.0" x2="1020" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
</svg>

---

## Goal of the view

The proven-conflicts list answers one question: **which conflicts are not just theoretical?**

- **Audit priority.** Exercised conflicts come first in every remediation plan — they are documented behaviour, not a hypothetical capability.
- **Evidence-driven cleanup.** Each row names its evidence and the programs behind it on both sides — useful when a user disputes the finding.
- **Smaller list, sharper conversation.** A few dozen exercised rows are easier to discuss with a business owner than the few hundred rows of *Details*.

---

## The evidence \{#evidence\}

| Evidence | Read from |
|---|---|
| **Ran both programs (usage tracking)** | Object Usage Tracking: the user ran a program of each activity. |
| **Wrote through both programs (activity log)** | The activity log: rows written under the user's name by a program of each activity. |
| **Wrote tables of both programs** | The tables each program writes (cross reference), against the transactions, the audit trail or the activity log. Weaker: another program may write the same table. |

A conflict is exercised at the strength of its **weaker side**. A conflict with no evidence on one side is not listed — the [review](../../sod-review.md#tabs) shows it under *Possible only*. See [Possible or exercised](../../sod-review.md#evidence) for the detail.

:::info[JDE-specific]
The evidence comes from what Nomasx-1 collects from JD Edwards EnterpriseOne: Object Usage Tracking, the activity log, the transactions, the audit trail and the cross reference. The conflicts themselves are computed on the effective rights, which include the access paths of the composite pages and E1 pages for the applications flagged **E1 Composite** / **E1 Pages** in [Applications](../../settings/global/applications.md).
:::

---

## Columns

| Column | What it tells |
|---|---|
| **Application ID** · **Process ID** · **Risk ID** | The application, the process and the risk, each with its name. Filters above the grid. |
| **User ID** | The user who exercised the conflict. |
| **Privileged (Y/N)** | Whether the user is flagged privileged. |
| **Activity 1** · **Activity 2** | The two activities of the rule, with their names. |
| **Evidence** | The kind of evidence, the strongest first. Filter above the grid. |
| **Activity 1: programs with evidence** · **Activity 2: programs with evidence** | The programs of each activity the evidence was found on. |
| **Activity 1: last seen** · **Activity 2: last seen** | The latest date of the evidence of each activity. |

The detail by role and by object stays in [Conflicts — Details](./details.md).

---

## Tips & best practices

- **Start every SoD review here** — or on the *Exercised* tab of the [review](../../sod-review.md), which adds the names and the users' figures.
- **Weigh the evidence.** *Ran both programs* is the strongest; *wrote tables of both programs* calls for a look at the programs before a conclusion.
- **A user on *Details* but not on *Proven*** is a *latent risk* — capability without evidence. Worth cleaning, at a lower priority; check first that the usage tracking and the activity log are collected.
- **Document the compensating control or revoke** — then collect again: the row leaves the list at the next collection.
