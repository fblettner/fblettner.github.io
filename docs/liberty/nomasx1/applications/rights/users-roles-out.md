---
title: Rights — Users / Roles / OUT
description: "Effective rights union of the declared rights matrix and the objects users actually invoked, as captured by Object Usage Tracking."
keywords: [Nomasx-1, applications, rights, OUT, Object Usage Tracking, observed rights, declared rights]
---

# Rights — Users / Roles / OUT

The **Rights — Users / Roles / OUT** screen returns the **union** of two data sets:

- **Declared rights** — every `SER_RUN = 'Y'` row from the security rights table (the rules the source system applies at runtime).
- **Observed activity** — every distinct `(user, object)` pair captured by Object Usage Tracking, marked with synthetic role `*ALL`, action `*DEFAULT` and full Y / Y / Y action flags.

The result is the *security workbench as seen through the eye of usage*: what users are allowed to do **plus** what they have actually been doing, side by side.

---

## At a glance

<svg viewBox="0 0 1320 426" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rou-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rou-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rou-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rou-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="346" rx="14" fill="url(#rou-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rights / OUT - Users by roles</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">⌄  ⏷  Advanced filters</text>
  <text x="245" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="245" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="385" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="407" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER ID</text>
  <rect x="407" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="417" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="547" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="569" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <rect x="569" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="709" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>

  <text x="233" y="180" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">860 rows · 12 ms</text>
  <rect x="989" y="168" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="169" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="181.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="173" x2="1038" y2="183" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="181.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="196" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="210.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="389" y="196" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="414.0" y="210.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="596" y="196" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="210.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="719" y="196" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="196" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="196" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="196" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="196" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="228" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="243" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="329" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID</text>
  <text x="415" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID</text>
  <text x="501" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJECT (ID)</text>
  <text x="575" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">FORM</text>
  <text x="645" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VERSION</text>
  <text x="717" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RUN</text>
  <text x="767" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">A</text>
  <text x="793" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">C</text>
  <text x="819" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">D</text>
  <rect x="233" y="254" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="329" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="415" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="501" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="575" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="645" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <circle cx="734.0" cy="265.0" r="3.2" fill="#4ade80"/>
  <circle cx="772.0" cy="265.0" r="3.2" fill="#4ade80"/>
  <circle cx="798.0" cy="265.0" r="3.2" fill="#4ade80"/>
  <circle cx="824.0" cy="265.0" r="3.2" fill="#f87171"/>
  <rect x="233" y="276" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="329" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="415" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AR_MGR</text>
  <text x="501" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P03B102</text>
  <text x="575" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W03B102E</text>
  <text x="645" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <circle cx="734.0" cy="287.0" r="3.2" fill="#4ade80"/>
  <circle cx="772.0" cy="287.0" r="3.2" fill="#4ade80"/>
  <circle cx="798.0" cy="287.0" r="3.2" fill="#4ade80"/>
  <circle cx="824.0" cy="287.0" r="3.2" fill="#f87171"/>
  <rect x="233" y="298" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="329" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BWILSON</text>
  <text x="415" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">OM_CLERK</text>
  <text x="501" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="575" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W4210E</text>
  <text x="645" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <circle cx="734.0" cy="309.0" r="3.2" fill="#4ade80"/>
  <circle cx="772.0" cy="309.0" r="3.2" fill="#4ade80"/>
  <circle cx="798.0" cy="309.0" r="3.2" fill="#4ade80"/>
  <circle cx="824.0" cy="309.0" r="3.2" fill="#f87171"/>
  <text x="233" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="332" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="345.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="345" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–50 of 860</text>
  <text x="1087" y="345" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="382" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Object · Form · Version</text>
  <text x="225.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what the right applies to</text>
  <line x1="435.0" y1="382" x2="509" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
  <rect x="665.0" y="382" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run · A · C · D</text>
  <text x="675.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">run, add, change, delete</text>
  <line x1="885.0" y1="382" x2="725" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
  <rect x="12" y="107" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="122" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters first</text>
  <text x="22" y="135" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pick, then Run</text>
  <line x1="197" y1="124.0" x2="233" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
  <rect x="12" y="190" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run</text>
  <text x="22" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the grid stays empty until then</text>
  <line x1="197" y1="207.0" x2="409" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
  <rect x="1119" y="201" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="216" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="229" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the result to Excel</text>
  <line x1="1119" y1="218.0" x2="1048.0" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
  <rect x="1119" y="270.0" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="285.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Granted AND used</text>
  <text x="1129" y="298.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">only objects seen in OUT</text>
  <line x1="1119" y1="287.0" x2="515" y2="287.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
</svg>

---

## Goal of the view

For each connected application:

- **Declared + observed in one place.** Audit the right *as written* (declared rows) and the right *as exercised* (observed rows) without juggling two screens.
- **Spot the over-grants.** A user with declared rights they have never exercised is the cleanest revocation candidate — the *Activity log* and *OUT* views are the supporting evidence.
- **Spot the under-grants.** A user appearing on `*ALL (observed)` rows for an object that has no declared coverage points to either an inherited rule the analysis missed or a bypass that needs investigation.

:::info[JDE-specific]
This view is JDE-specific: the *observed* half comes from `LICENSE_JDE_OUT`, joined to the JDE objects and licence component tables. Other source systems can populate the same view by exposing an equivalent usage log.

The access paths include those of the composite pages and E1 pages, for the applications flagged **E1 Composite** / **E1 Pages** in [Applications](../../settings/global/applications.md): a composite page gives the application or report its tiles open, the forms shown in its panes and, for a landing page, every task under its menu; an E1 page gives the applications and reports its content names. Switching a flag on or off changes these rows at the next collection.
:::

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — application identifier. Filterable. | Which application the row applies to. |
| **User ID** | `SER_USER_ID` — user. Filterable. | The effective user. |
| **Role ID** | `SER_ROLE_ID` — role granting the right, or `*ALL` for observed rows. | Provenance of the row. |
| **Object** | `SER_OBJECT` — technical object. Filterable. | What the row covers. |
| **Form** | `SERL_FORM` — form code, or `*ALL` for observed rows. | Specific form, when known. |
| **Version** | `SER_VERSION` — processing version. | Configuration variant. |
| **Run / Add / Change / Delete** | `SER_RUN`, `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Action flags. Observed rows always report `Y / Y / Y / Y` (the source system would not have run the call otherwise). |
| **Role Action ID** | `SER_ROLE_ACTION_ID` — action identifier, or `*DEFAULT` for observed rows. | Source-system action descriptor. |

---

## Tips & best practices

- **Filter on a single user** + group by *Object* — rows with several entries cross-prove that the right is both declared and exercised. Rows with only one entry (declared *or* observed, not both) are the discrepancies worth investigating.
- **Sort by *Role ID*** with `*ALL` rows at the top — that brings the observed-but-not-declared rows to the surface.
- **Trim role-level rights of objects only seen on `*ALL`** — meaning never declared, never reached from a menu — they are usually leftovers of a previous configuration.
- **For batch / service accounts**, expect the majority of rows to be `*ALL (observed)` since these accounts rarely have explicit role-level coverage. Tag them in *Settings → Users properties* so they do not pollute the analysis.
