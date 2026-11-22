---
title: Duplicate users
description: "Users with several accounts pointing to the same person (Address Number / Employee ID), grouped by application."
keywords: [Nomasx-1, security, duplicate users, multiple accounts, address number, employee identity, audit]
---

# Duplicate users

The **Duplicate users** screen lists every account that shares its **person identifier** with at least one other account on the same application. One line per account in the duplicate group.

A "person identifier" is the field the source system uses to point at the underlying employee or contact — typically the *Address Number* on JDE (`AN8`), the *Personnel Number* on SAP HR (`PERNR`), or any similar foreign key. Two accounts linked to the same person mean the same individual carries two technical logins on the same application — almost always a residual of an account being created twice rather than re-activated.

---

## At a glance

<svg viewBox="0 0 1320 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxdup-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxdup-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxdup-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxdup-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="300" rx="14" fill="url(#nxdup-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security - Duplicate users</text>
  <rect x="429.15040000000005" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="451.15040000000005" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_duplicate_users_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">22 rows · 6.6 ms</text>
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
  <text x="584" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ADDRESS NUMBER</text>
  <text x="667" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="712" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CREATION DATE</text>
  <text x="790" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LOGIN DATE</text>
  <text x="860" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">IS LINKED (Y/N)</text>
  <text x="948" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LINKED USER ID</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="514" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="651" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1001</text>
  <circle cx="679" cy="197.0" r="3.2" fill="#4ade80"/>
  <text x="712" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2021-01-08</text>
  <text x="790" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-20</text>
  <text x="860" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Y</text>
  <text x="948" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE2</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE2</text>
  <text x="514" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="651" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1001</text>
  <circle cx="679" cy="220.0" r="3.2" fill="#f87171"/>
  <text x="712" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2015-03-02</text>
  <text x="790" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2020-06-11</text>
  <text x="860" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="948" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="514" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="651" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1002</text>
  <circle cx="679" cy="243.0" r="3.2" fill="#4ade80"/>
  <text x="712" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="790" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="860" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="948" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="255" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="269.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH_A</text>
  <text x="514" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="651" y="269.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1002</text>
  <circle cx="679" cy="266.0" r="3.2" fill="#4ade80"/>
  <text x="712" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2024-07-01</text>
  <text x="790" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-02</text>
  <text x="860" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="948" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="240" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="311.88" y="288" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="321.88" y="301.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="375.88" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–22 of 22</text>
  <rect x="992" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="288" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="301.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shared person number</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">several accounts, one person</text>
  <line x1="200" y1="227.0" x2="604" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxdup-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two enabled accounts</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the case to look at first</text>
  <line x1="200" y1="317.0" x2="280" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxdup-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Linked</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">already declared in properties</text>
  <line x1="1120" y1="227.0" x2="880" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxdup-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by address number</text>
  <line x1="1120" y1="137.0" x2="925.5" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxdup-arrow)"/>
</svg>

---

## Goal of the view

For each pair (or group) of accounts pointing to the same person:

- **Why does the duplicate exist?** Usually one of three cases — a renamed login (the source system couldn't rename so a second account was created), a contractor returning to the company, or a HR misconfiguration linking two logins to the same employee record.
- **Which account is the right one?** The active one with the most recent login is normally the one to keep. The other should be deactivated and, if useful, linked to the active account via the *Linked* indicator.
- **Are the duplicates already declared?** The *Linked* indicator marks accounts already declared as duplicates of another — those are documented exceptions and require no immediate action.

The screen drives both the cleanup of redundant accounts and the documentation of legitimate duplicate pairs.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — application identifier from the source system. | Which application the duplicate group lives on. |
| **User ID** | `USR_ID` — user identifier. | One account in the duplicate group. |
| **Address Number** | `USRD_AN8` — person identifier from the source system (JDE *Address Number*, SAP `PERNR`, equivalent on other ERPs). | The shared person identifier — the grouping key for the duplicate row. |
| **Status** | `USR_STATUS` — `01` means *Active*. | Active or inactive in the source system. |
| **Creation Date** | `USR_DT_CREATION` — date. | When the account was created — helps to identify the older account. |
| **Login Date** | `USR_DT_LOGIN` — date. | Last authentication — confirms which account is the one actually used. |
| **Is Linked** | `USRP_IS_LINKED` — boolean (`Y` / blank). | Whether the account is already declared as linked to another login. |
| **Linked User ID** | `USRP_ID_LINKED` — text. | If the row is linked, the other login it points to. |

Hidden columns kept for downstream screens: `USRP_PRIVILEGED`, `USRP_TECHNICAL`, `USRP_GENERIC`.

:::info[JDE-specific]
The default grouping key is JDE *Address Number* (`AN8`). On other source systems, the field is renamed but the rule is the same — Nomasx-1 still uses the foreign key the source uses to point to the person record.
:::

---

## Tips & best practices

- **Read the duplicate group as a story.** Old account *Created earlier, last login years ago, Inactive* vs new account *Created recently, last login this week, Active* → the old one is a leftover, deactivate or archive it.
- **An inactive duplicate already linked** (`Is Linked = Y`) is a closed case — leave it alone and focus on rows with no linked indicator.
- **Two active duplicates** is the alert worth investigating first — someone holds two effective logins on the same application, which doubles the surface to audit and may already be hiding an SoD breach.
- **Use the *Settings → Users properties* screen** to declare a known-good duplicate pair once and remove it from this list permanently.
