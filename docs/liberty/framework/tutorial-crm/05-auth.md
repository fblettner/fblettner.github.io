---
title: Step 5 — Roles and sign-in
description: "Decide who sees what in the CRM: a read-only role and a sales role built on the app's menu tree, writes granted beyond the menus, two test users, a data scope by country from a user attribute, and sign-in with the company's identity provider."
keywords: [Liberty Next, tutorial, CRM, roles, permissions, menu tree, beyond the menus, users, data scope, attributes, OIDC]
---

# Step 5 — Roles and sign-in

So far everything was done as a superuser, who sees everything. This step adds two roles, two users to test them, a data scope, and sign-in with the company account.

---

## At a glance

<svg viewBox="0 0 1320 602" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tcrm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tcrm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tcrm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tcrm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="562" rx="14" fill="url(#tcrm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Access</text>
  <rect x="985" y="28" width="99" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1034.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload config</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="419.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Accounts, their roles and attributes</text>
  <rect x="665.0" y="74" width="419.0" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#c084fc" strokeWidth="1.2"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">What each role may open and the data it sees</text>
  <rect x="391" y="124" width="75" height="22" rx="5" fill="url(#tcrm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.5" y="138.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add role</text>
  <rect x="244" y="164" width="214" height="56" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="182" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-viewer</text>
  <text x="256" y="196" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Reads the CRM</text>
  <text x="256" y="211" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">2 rule(s)</text>
  <rect x="244" y="226" width="214" height="56" rx="7" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="256" y="244" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-sales</text>
  <text x="256" y="258" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Works the deals</text>
  <text x="256" y="273" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 rule(s)</text>
  <rect x="236" y="156" width="230" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="492" y="136" width="12" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="512" y="148" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">crm-sales</text>
  <text x="1070" y="148" fill="#fb923c" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">unsaved changes</text>
  <line x1="478" y1="162" x2="1084" y2="162" stroke="#1f2937" strokeWidth="1"/>
  <text x="508" y="180" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Access</text>
  <line x1="492" y1="188" x2="558" y2="188" stroke="#4a9eff" strokeWidth="2"/>
  <text x="578" y="180" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Data scope</text>
  <line x1="478" y1="189" x2="1084" y2="189" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE NAME</text>
  <rect x="492" y="214" width="283.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="228.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">crm-sales</text>
  <text x="787.0" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="787.0" y="214" width="283.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="797.0" y="228.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Works the deals</text>
  <text x="492" y="267" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Baseline</text>
  <rect x="548" y="252" width="168" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="549" y="253" width="77" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="587.5" y="266.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸ No access</text>
  <line x1="627" y1="257" x2="627" y2="269" stroke="#334155" strokeWidth="1"/>
  <text x="671.5" y="266.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Full access</text>
  <text x="726" y="267" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">nothing, plus what you allow below</text>
  <text x="492" y="290" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <rect x="492" y="300" width="578" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="316" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="524" y="316" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 4 of 4 shown</text>
  <text x="514" y="344" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Pipeline</text>
  <text x="570.816" y="344" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">dashboard:crm.pipeline</text>
  <text x="956" y="344" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">allowed</text>
  <text x="972" y="344" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="331" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1001" y="345" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="1013" y="332" width="20" height="18" rx="4" fill="#4ade80" fillOpacity="0.2"/>
  <text x="1023" y="345" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="345" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="352" x2="1070" y2="352" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="370" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="514" y="370" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales</text>
  <text x="956" y="370" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">allowed</text>
  <rect x="990" y="357" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1001" y="371" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="1013" y="358" width="20" height="18" rx="4" fill="#4ade80" fillOpacity="0.2"/>
  <text x="1023" y="371" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="371" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="378" x2="1070" y2="378" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="396" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="594.668" y="396" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sql:crm:customers_get</text>
  <text x="956" y="396" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">inherits: allowed</text>
  <text x="972" y="396" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="383" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="384" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="397" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="397" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="397" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="404" x2="1070" y2="404" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="422" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="571.26" y="422" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sql:crm:deals_get</text>
  <text x="956" y="422" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">inherits: allowed</text>
  <text x="972" y="422" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="409" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="410" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="423" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="423" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="423" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="430" x2="1070" y2="430" stroke="#1f2937" strokeWidth="1"/>
  <rect x="492" y="326" width="578" height="110" rx="0" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="456" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Beyond the menus</text>
  <rect x="492" y="464" width="70" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="527.0" y="476.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sql:crm:∗ ×</text>
  <rect x="492" y="490" width="113" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="493" y="491" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="521.5" y="504.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Allow</text>
  <line x1="551" y1="495" x2="551" y2="507" stroke="#334155" strokeWidth="1"/>
  <text x="578.0" y="504.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸ Deny</text>
  <rect x="613" y="490" width="156" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="623" y="504.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connector (all queries)</text>
  <text x="757" y="504.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="777" y="490" width="229" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="787" y="504.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Pick…</text>
  <text x="994" y="504.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="1014" y="490" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="504.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add</text>
  <line x1="478" y1="526" x2="1084" y2="526" stroke="#1f2937" strokeWidth="1"/>
  <rect x="934" y="536" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="966.0" y="550.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="1004" y="536" width="64" height="22" rx="5" fill="url(#tcrm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1036.0" y="550.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="478" y="124" width="606" height="444" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two roles</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">viewer and sales</text>
  <line x1="200" y1="167.0" x2="244" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="1120" y="215" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="230" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Baseline</text>
  <text x="1130" y="243" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">No access: allow what follows</text>
  <line x1="1120" y1="232.0" x2="930" y2="263" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu tree</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">inherit · allow · deny</text>
  <line x1="200" y1="377.0" x2="502" y2="367" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="20" y="460" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="475" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Beyond the menus</text>
  <text x="30" y="488" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes: the whole crm connector</text>
  <line x1="200" y1="477.0" x2="492" y2="467" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Data scope</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">COUNTRY = user's country</text>
  <line x1="1120" y1="147.0" x2="708" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inherit · Allow · Deny</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one control per entry</text>
  <line x1="1120" y1="317.0" x2="1056" y2="341" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
</svg>

---

## Two roles

**Liberty Next → Administer → Access → Roles**: create each role. The **Access** tab shows the menu tree of every app, with a three-state control on each node (inherit, allow, deny); allowing a menu entry also grants the query or the dashboard it opens. See [Roles & permissions](../build/secure/roles-and-permissions.md).

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

To let users sign in with their company account (Entra ID, Keycloak, Okta…), fill **Liberty Next → Administer → App → OpenID Connect (SSO)** with the values of the application registered at the provider. A **Sign in with OIDC** button appears on the sign-in page; new users arrive without roles, an administrator gives them `crm-viewer` or `crm-sales`.

Full recipe: [OIDC sign-in](../cookbook/oidc-sso.md).

---

## What you have now

Two roles cut from the app's own menu, users who see their part, and rows filtered by the server according to each user.

→ **[Step 6 — AI and jobs](./06-ai-and-jobs.md)**: questions in plain language and a daily job.
