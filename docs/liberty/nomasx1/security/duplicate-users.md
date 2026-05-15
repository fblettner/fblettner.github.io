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

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="dup-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#dup-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · Duplicate users</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PERSON</text>
  <text x="450" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="560" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CREATED</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LAST LOGIN</text>
  <text x="820" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LINKED ?</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="340" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">200714</text>
  <rect x="450" y="136" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="470" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="560" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="700" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-12</text>
  <text x="820" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">→ J.DOE</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">J.DOE</text>
  <text x="340" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">200714</text>
  <rect x="450" y="168" width="40" height="16" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="470" y="180" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactive</text>
  <text x="560" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-02-10</text>
  <text x="700" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-13</text>
  <text x="820" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">→ JDOE</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">M.SMITH</text>
  <text x="340" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">203128</text>
  <rect x="450" y="200" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="470" y="212" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="560" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2022-09-11</text>
  <text x="700" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="820" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">M.SMITH2</text>
  <text x="340" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">203128</text>
  <rect x="450" y="232" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="470" y="244" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="560" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2024-11-04</text>
  <text x="700" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="820" y="245" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">2 duplicate groups · 4 accounts to review</text>
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
