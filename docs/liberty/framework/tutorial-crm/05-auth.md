---
title: Step 5 — Roles and sign-in
description: "Decide who sees what in the CRM: a read-only role and a sales role built on the app's menu tree, writes granted beyond the menus, two test users, a data scope by country from a user attribute, and sign-in with the company's identity provider."
keywords: [Liberty Next, tutorial, CRM, roles, permissions, menu tree, beyond the menus, users, data scope, attributes, OIDC]
---

# Step 5 — Roles and sign-in

So far everything was done as a superuser, who sees everything. This step adds two roles, two users to test them, a data scope, and sign-in with the company account.

---

## At a glance

<svg viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu5-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu5-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu5-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu5-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="290" rx="14" fill="url(#tu5-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Access · Roles</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="170" height="160" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="100" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-viewer</text>
  <rect x="246" y="120" width="158" height="34" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="140" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-sales</text>
  <rect x="426" y="74" width="159" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="427" y="75" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="454.5" y="89.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Access</text>
  <line x1="483" y1="79" x2="483" y2="93" stroke="#334155" strokeWidth="1"/>
  <text x="534.0" y="89.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Data scope · 1</text>
  <text x="426" y="122" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Baseline</text>
  <rect x="496" y="108" width="148" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="497" y="109" width="67" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="530.5" y="123.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">No access</text>
  <line x1="565" y1="113" x2="565" y2="127" stroke="#334155" strokeWidth="1"/>
  <text x="604.5" y="123.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Full access</text>
  <rect x="426" y="142" width="300" height="110" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="162" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">crm · 3 of 4 shown</text>
  <text x="442" y="184" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">📊 Pipeline</text>
  <text x="706" y="184" fill="#4ade80" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">✓</text>
  <text x="442" y="202" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">📁 Sales</text>
  <text x="706" y="202" fill="#4ade80" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">✓</text>
  <text x="442" y="220" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">👥 Customers</text>
  <text x="706" y="220" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">–</text>
  <text x="442" y="238" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">📈 Deals</text>
  <text x="706" y="238" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">–</text>
  <text x="746" y="162" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Beyond the menus</text>
  <rect x="746" y="172" width="204" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="848.0" y="184.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Allow · Connector (all queries) · crm</text>
  <rect x="746" y="196" width="118" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="805.0" y="208.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Allow · AI assistant</text>
  <rect x="880" y="270" width="80" height="22" rx="5" fill="url(#tu5-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="284.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="10" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two roles</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">viewer and sales</text>
  <line x1="210" y1="117.0" x2="240" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu5-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu tree</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">allow a folder: all below</text>
  <line x1="210" y1="217.0" x2="426" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu5-arrow)"/>
  <rect x="1000" y="80" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Data scope</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">COUNTRY = user.country</text>
  <line x1="1000" y1="97.0" x2="626" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu5-arrow)"/>
  <rect x="1000" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Writes</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">whole crm connector</text>
  <line x1="1000" y1="197.0" x2="960" y2="181" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu5-arrow)"/>
</svg>

---

## Two roles

**Settings → Access → Roles**: create each role. The **Access** tab shows the menu tree of every app, with a three-state control on each node (inherit, allow, deny); allowing a menu entry also grants the query or the dashboard it opens. See [Roles & permissions](../build/secure/roles-and-permissions.md).

### `crm-viewer` — reads the CRM

| Setting | Value |
|---|---|
| Baseline | **No access** |
| Menus | **Allow** on the `crm` app's *Sales* folder and on *Pipeline*. |

The holders see the screens and the dashboard, but every write is refused: the write queries (`customers_put`, `deals_post`…) are not granted.

### `crm-sales` — works the deals

| Setting | Value |
|---|---|
| Baseline | **No access** |
| Menus | **Allow** on *Sales* and *Pipeline*. |
| Beyond the menus | **Allow** — Connector (all queries) — `crm`. |

The connector rule grants every query of `crm`, writes included. **Save** each role.

---

## Two users

**Settings → Access → Users → ＋ Add user**:

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

To let users sign in with their company account (Entra ID, Keycloak, Okta…), fill **Settings → App → OpenID Connect (SSO)** with the values of the application registered at the provider. A **Sign in with OIDC** button appears on the sign-in page; new users arrive without roles, an administrator gives them `crm-viewer` or `crm-sales`.

Full recipe: [OIDC sign-in](../cookbook/oidc-sso.md).

---

## What you have now

Two roles cut from the app's own menu, users who see their part, and rows filtered by the server according to each user.

→ **[Step 6 — AI and jobs](./06-ai-and-jobs.md)**: questions in plain language and a daily job.
