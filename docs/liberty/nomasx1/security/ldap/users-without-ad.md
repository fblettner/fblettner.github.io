---
title: Users without AD
description: "Users known to a connected application but absent from the corporate LDAP / Active Directory — technical accounts, ghosts, or unsynced identities."
keywords: [Nomasx-1, security, LDAP, Active Directory, users without AD, orphan accounts, technical accounts]
---

# Users without AD

The **Users without AD** screen lists every account known to a connected application that **cannot be matched** to a corporate LDAP / Active Directory entry. One line per `(Application, User)` pair.

The match runs against two AD attributes: the `Description` (typically the HR matricule) and the `samAccountName` (the Windows login). When neither resolves to an AD entry, the row lands here.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lda-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#lda-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · LDAP · Users without AD</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER NAME</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="570" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">REGISTRATION</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CREATED</text>
  <text x="840" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LAST LOGIN</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="260" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Batch service account</text>
  <rect x="460" y="136" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="480" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="570" y="149" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2017-04-02</text>
  <text x="840" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FORMER_JDOE</text>
  <text x="260" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">John Doe (left)</text>
  <rect x="460" y="168" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="480" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="570" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">200714</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-02-10</text>
  <text x="840" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">2024-09-12</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CONSULT.X</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">External consultant X</text>
  <rect x="460" y="200" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="480" y="212" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="570" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2024-01-15</text>
  <text x="840" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-04-30</text>

  <rect x="60" y="232" width="880" height="48" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="250" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 EXPECTED PROFILES</text>
  <text x="72" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Technical / batch accounts (no AD by design), externally-managed identities (consultants, AD not synced), accounts of leavers whose AD entry was already removed.</text>
</svg>

---

## Goal of the view

For every account that exists in a source system but does not exist in the corporate directory:

- **Is it a legitimate technical account?** Batch users, service accounts, integration logins are typically not provisioned in AD by design. Mark them in *Settings → Users properties* so they stop being flagged.
- **Is it an externally-managed identity?** Consultants whose AD is the consulting firm's, not the customer's, also land here. Same treatment — declare them as such once.
- **Is it a ghost account?** A real human, no AD entry, recent login. That is the row that must be investigated — the AD entry was probably removed at offboarding without the corresponding source-system account being deactivated.

The screen is the cleanest *leavers-process audit* available: every row is a potential offboarding gap.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — application identifier from the source system. | The application the unmatched account belongs to. |
| **User ID** | `USR_ID` — user identifier. | The technical login that has no AD match. |
| **User Name** | `USR_NAME` — display name. | Human-readable name. |
| **Status** | `USR_STATUS` — `01` means *Active*. | Active accounts surface here first; an inactive account without AD is normal (offboarding completed cleanly). |
| **Registration** | `USR_REGISTRATION` — HR matricule stored in the source system. | The field the LDAP join uses against the AD `Description` attribute. Empty / wrong values are the main cause of false positives. |
| **Creation Date** | `USR_DT_CREATION` — date. | When the account was created — old account + recent login = ghost candidate. |
| **Login Date** | `USR_DT_LOGIN` — date. | Last authentication. Drives the urgency. |

---

## Tips & best practices

- **Sort by *Last Login* descending** to find ghosts first — a recent login with no AD entry is the most urgent row.
- **Empty *Registration* is the first thing to check** — if the HR matricule is missing on the source-system account, the LDAP join can never succeed even though the person exists in AD. Populate the registration field in the source system and re-scan.
- **Declare known-good technical accounts** via the *Settings → Users properties* screen so they stop appearing here. The recurring exception list shortens, the real ghosts stand out.
- **Cross-reference with the AD admin** — if a row corresponds to a known person whose AD entry was removed yesterday, that is the proof that the offboarding workflow needs to also touch the source system.
