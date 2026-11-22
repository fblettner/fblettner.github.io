---
title: Step 5 — Roles and sign-in
description: "Decide who sees what in the CRM: a read-only role and a sales role set on the app's menu — read, or read and change —, two test users, a data scope by country from a user attribute, and sign-in with the company's identity provider."
keywords: [Liberty Next, tutorial, CRM, roles, permissions, menu tree, read, read and change, users, data scope, attributes, OIDC]
---

# Step 5 — Roles and sign-in

So far everything was done as a superuser, who sees everything. This step adds two roles, two users to test them, a data scope, and sign-in with the company account.

---

## At a glance

<svg viewBox="0 0 1320 560" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tcrm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tcrm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tcrm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tcrm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="524" rx="14" fill="url(#tcrm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Access</text>
  <rect x="974" y="32" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1027.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload config</text>
  <rect x="240" y="66" width="415.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="84" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="254" y="98" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Accounts, their roles and attributes</text>
  <rect x="665.0" y="66" width="415.0" height="40" rx="8" fill="rgba(168,85,247,0.10)" stroke="#a855f7" strokeWidth="1.2"/>
  <text x="679.0" y="84" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="679.0" y="98" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What each role may open and the data it sees</text>
  <rect x="320" y="120" width="110" height="22" rx="5" fill="url(#tcrm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="375.0" y="134.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add role</text>
  <rect x="240" y="150" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="164.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Add a predefined role…  ▾</text>
  <rect x="240" y="184" width="190" height="50" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="202" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-viewer</text>
  <text x="252" y="216" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Reads the CRM</text>
  <text x="252" y="228" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">1 rule(s)</text>
  <rect x="240" y="242" width="190" height="50" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="252" y="260" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-sales</text>
  <text x="252" y="274" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Works the deals</text>
  <text x="252" y="286" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">2 rule(s)</text>
  <rect x="444" y="120" width="636" height="410" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="144" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">crm-sales</text>
  <rect x="984" y="130" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1024.0" y="144.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <line x1="444" y1="156" x2="1080" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="173" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Access</text>
  <line x1="456" y1="181" x2="495.92" y2="181" stroke="#4a9eff" strokeWidth="2"/>
  <text x="524" y="173" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Data scope · 1</text>
  <line x1="444" y1="182" x2="1080" y2="182" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="200" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE NAME</text>
  <text x="624" y="200" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="460" y="205" width="154" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="470" y="219.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">crm-sales</text>
  <rect x="624" y="205" width="440" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="634" y="219.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Works the deals</text>
  <text x="460" y="250" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Baseline</text>
  <rect x="510" y="237" width="168" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="511" y="238" width="77" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="549.5" y="250.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘ No access</text>
  <line x1="589" y1="242" x2="589" y2="252" stroke="#334155" strokeWidth="1"/>
  <text x="633.5" y="250.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Full access</text>
  <text x="688" y="250" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">nothing, plus what you allow below</text>
  <text x="460" y="280" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <rect x="460" y="290" width="604" height="140" rx="7" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <rect x="460" y="290" width="604" height="28" rx="7" fill="#1e293b" stroke="#1f2937" strokeWidth="1"/>
  <text x="470" y="308" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="494" y="308" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 3 of 3 shown</text>
  <text x="958" y="308" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">the whole application</text>
  <rect x="966" y="295" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="977.0" y="307.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="298" x2="988" y2="310" stroke="#334155" strokeWidth="1"/>
  <path d="M994,300 L999,301.5 L1004,300 L1004,308 L999,309.5 L994,308 Z M999,301.5 L999,309.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <rect x="1011" y="296" width="20" height="16" rx="3" fill="rgba(74,158,255,0.20)"/>
  <line x1="1010" y1="298" x2="1010" y2="310" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="307.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="298" x2="1032" y2="310" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="307.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="320" width="602" height="27" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="347" x2="1064" y2="347" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="337" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Pipeline</text>
  <text x="572" y="337" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">2 to read · 0 to change</text>
  <text x="938" y="337" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read and change</text>
  <text x="952" y="337" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="324" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="325" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="336.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="327" x2="988" y2="339" stroke="#334155" strokeWidth="1"/>
  <path d="M994,329 L999,330.5 L1004,329 L1004,337 L999,338.5 L994,337 Z M999,330.5 L999,338.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="327" x2="1010" y2="339" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="336.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="327" x2="1032" y2="339" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="336.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="347" width="602" height="27" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="374" x2="1064" y2="374" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="364" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">▾ Sales</text>
  <text x="938" y="364" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read and change</text>
  <rect x="966" y="351" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="352" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="363.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="354" x2="988" y2="366" stroke="#334155" strokeWidth="1"/>
  <path d="M994,356 L999,357.5 L1004,356 L1004,364 L999,365.5 L994,364 Z M999,357.5 L999,365.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="354" x2="1010" y2="366" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="363.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="354" x2="1032" y2="366" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="363.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="374" width="602" height="27" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="401" x2="1064" y2="401" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="391" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="572" y="391" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">1 to read · 3 to change</text>
  <text x="938" y="391" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read and change</text>
  <text x="952" y="391" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="378" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="379" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="390.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="381" x2="988" y2="393" stroke="#334155" strokeWidth="1"/>
  <path d="M994,383 L999,384.5 L1004,383 L1004,391 L999,392.5 L994,391 Z M999,384.5 L999,392.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="381" x2="1010" y2="393" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="390.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="381" x2="1032" y2="393" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="390.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="401" width="602" height="27" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="428" x2="1064" y2="428" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="418" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="572" y="418" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">2 to read · 3 to change</text>
  <text x="938" y="418" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">follows its folder: read and change</text>
  <text x="952" y="418" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="405" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="406" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="417.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="408" x2="988" y2="420" stroke="#334155" strokeWidth="1"/>
  <path d="M994,410 L999,411.5 L1004,410 L1004,418 L999,419.5 L994,418 Z M999,411.5 L999,419.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="408" x2="1010" y2="420" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="417.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="408" x2="1032" y2="420" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="417.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <text x="460" y="452" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Beyond the menus</text>
  <text x="460" y="468" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Nothing beyond the menus.</text>
  <rect x="984" y="498" width="80" height="22" rx="5" fill="url(#tcrm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1024.0" y="512.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="912" y="498" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="512.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two roles</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">viewer and sales</text>
  <line x1="200" y1="207.0" x2="240" y2="209" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Each entry follows</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what a tick gives, in figures</text>
  <line x1="200" y1="397.0" x2="568" y2="391" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="20" y="450" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nothing by hand</text>
  <text x="30" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes come with Read and change</text>
  <line x1="200" y1="467.0" x2="460" y2="464" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The whole crm app</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Read (viewer) · Read and change (sales)</text>
  <line x1="1120" y1="267.0" x2="1032" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Data scope</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">COUNTRY = user's country</text>
  <line x1="1120" y1="177.0" x2="644" y2="172" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
</svg>

---

## Two roles

**Liberty Next → Administer → Access → Roles**: create each role. The **Access** tab shows the menu tree of every app, with a four-level control on each node — *Follows its folder*, **Read**, **Read and change**, **Hidden** — and the same choice for the whole application above its menu. The server works out what the screens need: in **Read**, their queries, lists and record-form tabs; in **Read and change**, also what they write and run. See [Roles & permissions](../build/secure/roles-and-permissions.md).

### `crm-viewer` — reads the CRM

| Setting | Value |
|---|---|
| Baseline | **No access** |
| Menus | **Read** on the whole `crm` application (above its menu). |

The holders see the screens and the dashboard, but every write is refused: the write queries (`customers_put`, `deals_post`…) come only with **Read and change**.

### `crm-sales` — works the deals

| Setting | Value |
|---|---|
| Baseline | **No access** |
| Menus | **Read and change** on the whole `crm` application. |

Nothing to add under *Beyond the menus*: the writes of Customers and Deals come with **Read and change**. **Save** each role.

---

## Two users

**Liberty Next → Administer → Access → Users → ＋ Add user**:

| User | Role | Attribute |
|---|---|---|
| `alice` | `crm-viewer` | — |
| `bob` | `crm-sales` | `country = FR` |

Give each a password. Sign in as `alice` in a private window: the CRM shows *Sales* and *Pipeline*; changing a customer is refused. As `bob`: the dialogs save. See [Users](../build/secure/users.md).

---

## A data scope — each salesperson's country

Bob should only see the customers of his country.

1. Make the deals carry the country: in `deals_get`, join the customer and select its country:

```sql
SELECT d.ID, d.CUSTOMER_ID, d.NAME, d.STAGE, d.AMOUNT, d.CLOSE_DATE, d.OWNER, c.COUNTRY
FROM deals d JOIN customers c ON c.ID = d.CUSTOMER_ID
```

2. In the `crm-sales` role, **Data scope** tab, a rule: column `COUNTRY`, connector `crm`, **From the user's attribute** `country`. Save.

Bob signs out and in again: Customers and Deals show the French customers only — ACME Industries and Beta SARL — and a write outside his scope is refused. The scope is applied by the server, to the screens, the dashboard and the AI assistant alike. Alice's role has no rule: she still sees everything. See [Roles & permissions → Data scope](../build/secure/roles-and-permissions.md#data-scope).

---

## Sign in with the company account

To let users sign in with their company account (Entra ID, Keycloak, Okta…), fill **Liberty Next → Administer → App → OpenID Connect (SSO)** with the values of the application registered at the provider. Once **Enabled** is ticked, a **Sign in with OIDC** button appears on the sign-in page; new users arrive without roles, an administrator gives them `crm-viewer` or `crm-sales`.

Full recipe: [OIDC sign-in](../cookbook/oidc-sso.md).

---

## What you have now

Two roles cut from the app's own menu, users who see their part, and rows filtered by the server according to each user.

→ **[Step 6 — AI and jobs](./06-ai-and-jobs.md)**: questions in plain language and a daily job.
