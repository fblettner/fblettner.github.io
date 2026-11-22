---
title: Users without AD
description: "Users known to a connected application but absent from the corporate LDAP / Active Directory — technical accounts, ghosts, or unsynced identities."
keywords: [Nomasx-1, security, LDAP, Active Directory, users without AD, orphan accounts, technical accounts]
---

# Users without AD

The **Users without AD** screen lists every account known to a connected application that **cannot be matched** to a corporate LDAP / Active Directory entry. One line per `(Application, User)` pair.

The match runs against two AD attributes: the `Description` (typically the HR matricule) and the `samAccountName` (the Windows login). When neither resolves to an AD entry, the row lands here. The directory compared with is the one collected for the applications of type `LDAP` declared in [Applications](../../settings/global/applications.md), whatever their ID.

---

## At a glance

<svg viewBox="0 0 1320 317" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxldx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxldx-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxldx-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxldx-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="277" rx="14" fill="url(#nxldx-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP - Users undefined</text>
  <rect x="412.86400000000003" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="434.86400000000003" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.ldap_undefined_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">9 rows · 8.1 ms</text>
  <rect x="982" y="100" width="114" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="983" y="101" width="55" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1010.5" y="113.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Table</text>
  <line x1="1039" y1="105" x2="1039" y2="115" stroke="#334155" strokeWidth="1"/>
  <text x="1067.5" y="113.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Chart</text>
  <rect x="240" y="128" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="418" y="128" width="64" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="450.0" y="142.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="673" y="128" width="107" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="683" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="786" y="128" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="839" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="902" y="128" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="955" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="1018" y="128" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="240" y="160" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="357" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="440" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID (ID)</text>
  <text x="514" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID</text>
  <text x="606" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER NAME</text>
  <text x="698" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="743" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">REGISTRATION</text>
  <text x="817" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CREATION DATE</text>
  <text x="895" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LOGIN DATE</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BATCH01</text>
  <text x="514" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Batch user</text>
  <text x="606" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Batch user</text>
  <circle cx="710" cy="197.0" r="3.2" fill="#4ade80"/>
  <text x="743" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="817" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2017-06-02</text>
  <text x="895" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">CONSULT1</text>
  <text x="514" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Consultant</text>
  <text x="606" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Consultant</text>
  <circle cx="710" cy="220.0" r="3.2" fill="#4ade80"/>
  <text x="743" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="817" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2025-02-10</text>
  <text x="895" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-14</text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">LEGACY01</text>
  <text x="514" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Legacy account</text>
  <text x="606" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Legacy account</text>
  <circle cx="710" cy="243.0" r="3.2" fill="#f87171"/>
  <text x="743" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E0990</text>
  <text x="817" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2014-06-22</text>
  <text x="895" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2023-11-04</text>
  <text x="240" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="311.88" y="265" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="321.88" y="278.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="375.88" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–9 of 9</text>
  <rect x="992" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="265" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="278.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">No directory match</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line per application × user</text>
  <line x1="200" y1="227.0" x2="250" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldx-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Registration</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">empty = the join cannot work</text>
  <line x1="1120" y1="167.0" x2="763" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldx-arrow)"/>
  <rect x="1120" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recent login</text>
  <text x="1130" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the account to look at first</text>
  <line x1="1120" y1="257.0" x2="1040" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldx-arrow)"/>
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
