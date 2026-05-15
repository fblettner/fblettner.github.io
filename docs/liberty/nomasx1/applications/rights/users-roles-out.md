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

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgout-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#rgout-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Rights · Users / Roles / OUT</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="250" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="400" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CHG</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DEL</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="250" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>
  <text x="400" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="250" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">*ALL (observed)</text>
  <text x="400" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="250" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">*ALL (observed)</text>
  <text x="400" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R31410</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="660" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>

  <rect x="60" y="232" width="880" height="48" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="250" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DECLARED vs OBSERVED</text>
  <text x="72" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Rows marked *ALL (observed) come from Object Usage Tracking — the user did run that object regardless of whether a declared rule covers it.</text>
</svg>

---

## Goal of the view

For each connected application:

- **Declared + observed in one place.** Audit the right *as written* (declared rows) and the right *as exercised* (observed rows) without juggling two screens.
- **Spot the over-grants.** A user with declared rights they have never exercised is the cleanest revocation candidate — the *Activity log* and *OUT* views are the supporting evidence.
- **Spot the under-grants.** A user appearing on `*ALL (observed)` rows for an object that has no declared coverage points to either an inherited rule the analysis missed or a bypass that needs investigation.

:::info[JDE-specific]
This view is JDE-specific: the *observed* half comes from `LICENSE_JDE_OUT`, joined to the JDE objects and licence component tables. Other source systems can populate the same view by exposing an equivalent usage log.
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
