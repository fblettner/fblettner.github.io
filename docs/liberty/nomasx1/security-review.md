---
title: Security review
description: "The Nomasx-1 Security review dashboard: the holes in the access of a connected application — enabled, privileged and dormant accounts, accounts missing from the directory or whose directory account expired, generic accounts, objects open to *PUBLIC — twelve checks with their severity, the accounts to review first, logins by age, and the screens to act on."
keywords: [Nomasx-1, security review, access review, dormant accounts, privileged accounts, directory, LDAP, leavers, generic accounts, PUBLIC, orphan roles, dashboard]
---

# Security review

**Security review**, under **Overview** in the Nomasx-1 menu, is the page for an access review: it lists what is wrong in the access of each connected application, the accounts to look at first, and the screens where to act.

---

## At a glance

<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="456" rx="14" fill="url(#nxr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security review</text>
  <text x="240" y="74" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="240" y="80" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="94.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">All ▾</text>
  <rect x="240.0" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Enabled accounts</text>
  <text x="252.0" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Can sign in</text>
  <text x="252.0" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">380</text>
  <text x="252.0" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">41 dormant · 12 never logged in</text>
  <rect x="422.5" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Privileged accounts</text>
  <text x="434.5" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Enabled, super-user</text>
  <text x="434.5" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="434.5" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">2 unused for 90 days</text>
  <rect x="605.0" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Missing from the directory</text>
  <text x="617.0" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">No directory account</text>
  <text x="617.0" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">7</text>
  <text x="617.0" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">LDAP collected</text>
  <rect x="787.5" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Open to ∗PUBLIC</text>
  <text x="799.5" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Every user can run them</text>
  <text x="799.5" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">54</text>
  <text x="799.5" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">11 users with own rights</text>
  <rect x="240" y="218" width="360" height="236" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="236" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">The checks</text>
  <text x="252" y="249" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Red first, green when clean</text>
  <circle cx="256" cy="271" r="3.5" fill="#f87171"/>
  <text x="268" y="273" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Privileged accounts left dormant</text>
  <text x="588" y="273" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <circle cx="256" cy="301" r="3.5" fill="#f87171"/>
  <text x="268" y="303" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Enabled accounts missing from the directory</text>
  <text x="588" y="303" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">7</text>
  <circle cx="256" cy="331" r="3.5" fill="#f87171"/>
  <text x="268" y="333" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Directory account expired, still enabled</text>
  <text x="588" y="333" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <circle cx="256" cy="361" r="3.5" fill="#fb923c"/>
  <text x="268" y="363" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Dormant enabled accounts</text>
  <text x="588" y="363" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">41</text>
  <circle cx="256" cy="391" r="3.5" fill="#fb923c"/>
  <text x="268" y="393" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Generic / shared accounts enabled</text>
  <text x="588" y="393" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <circle cx="256" cy="421" r="3.5" fill="#4ade80"/>
  <text x="268" y="423" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Several accounts for one person</text>
  <text x="588" y="423" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="610" y="218" width="350" height="236" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="622" y="236" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts to review first</text>
  <text x="622" y="249" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">The figure is the days since the last login</text>
  <circle cx="626" cy="271" r="3.5" fill="#f87171"/>
  <text x="638" y="273" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">JDOE</text>
  <text x="638" y="285" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">privileged · dormant</text>
  <text x="948" y="273" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">212</text>
  <circle cx="626" cy="311" r="3.5" fill="#f87171"/>
  <text x="638" y="313" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">MLEROY</text>
  <text x="638" y="325" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">missing from the directory</text>
  <text x="948" y="313" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">18</text>
  <circle cx="626" cy="351" r="3.5" fill="#fb923c"/>
  <text x="638" y="353" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">BATCH01</text>
  <text x="638" y="365" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">generic account</text>
  <text x="948" y="353" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <circle cx="626" cy="391" r="3.5" fill="#fb923c"/>
  <text x="638" y="393" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">PDURAND</text>
  <text x="638" y="405" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">never logged in</text>
  <text x="948" y="393" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <rect x="10" y="130" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four figures</text>
  <text x="20" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">accounts, privileges, directory, ∗PUBLIC</text>
  <line x1="210" y1="147.0" x2="240" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxr-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Twelve checks</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">count and severity</text>
  <line x1="210" y1="317.0" x2="256" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxr-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts first</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the ones to act on</text>
  <line x1="1000" y1="317.0" x2="960" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxr-arrow)"/>
</svg>

---

## The four figures \{#figures\}

| Card | Figure | Detail line |
|---|---|---|
| **Enabled accounts** — accounts that can sign in | The enabled accounts. | Dormant — no login for 90 days — and never logged in. |
| **Privileged accounts** — enabled, with super-user access | The enabled privileged accounts. | Those unused for 90 days. |
| **Missing from the directory** — enabled named accounts with no directory account | The accounts no directory entry matches. | Whether the directory is collected. |
| **Open to \*PUBLIC** — objects every user can run | The objects granted to *PUBLIC. | The users holding rights of their own. |

The **Application** filter works as on the other dashboards: **All** gives the totals.

---

## The checks \{#checks\}

Each check with its count, red first, green when there is nothing to report.

| Check | Severity | What to do |
|---|---|---|
| **Privileged accounts left dormant** | Red | Super-user access unused for 90 days: disable it or re-certify its owner. |
| **Enabled accounts missing from the directory** | Red | No matching directory account: a leaver, or an account nobody owns. |
| **Directory account expired, still enabled** | Red | The person's directory account has expired: disable the account. |
| **Dormant enabled accounts** | Orange | No login within 90 days: disable or re-certify. |
| **Never used after a month** | Orange | Created over 30 days ago and never logged in: provisioned by mistake, or no longer needed. |
| **Generic / shared accounts enabled** | Orange | Actions cannot be traced to a person: replace them by named accounts. |
| **Several accounts for one person** | Orange | Enabled accounts sharing an address book number: keep one per person. |
| **Objects open to \*PUBLIC** | Orange | Every user can use these objects by default: confirm none is sensitive. |
| **Rights given to users directly** | Blue | Rights set on a user instead of a role, outside role-based control. |
| **Enabled accounts without roles** | Blue | Incomplete provisioning, or accounts to disable. |
| **Expired role assignments on file** | Blue | Assignments past their expiry date: clean them up. |
| **Orphan roles** | Blue | Roles assigned to nobody: remove or repurpose them. |

The two directory checks need the directory collected — the *Everything* collection, or the LDAP step switched on; until then they say *No directory collected*.

---

## The accounts and the objects \{#detail\}

| Widget | Shows |
|---|---|
| **Accounts to review first** | The privileged and dormant accounts, the leavers, the generic accounts; the figure is the days since the last login. |
| **Last login** | The enabled accounts by time since their last login: within 30 days, 30 to 90 days, 3 to 12 months, over a year, never. |
| **Objects open to \*PUBLIC** | The objects every user can run, those that also allow changes first. |
| **Act on it** | Links to the screens behind each check: Users, Users without AD, Duplicate users, Users without roles, Roles not used, Users properties. |

---

## Related

- [Users](./security/users.md), [Users without roles](./security/users-without-roles.md), [Roles not used](./security/roles-not-used.md) — the screens to act on.
- [LDAP users without AD](./security/ldap/users-without-ad.md) — the accounts missing from the directory.
- [Segregation of duties](./sod-dashboard.md) — the conflicts.
