---
title: Roles and permissions
description: "Compose roles with the PermissionPicker — baseline (No access / Full access) plus allow / deny rules per surface. The full grammar, the resolution order, the standard recipes."
keywords: [Liberty Framework, roles, permissions, AccessBuilder, PermissionPicker, allow, deny, baseline, sql, menu, dashboard]
---

# Roles and permissions

A **role** in Liberty is a name + a list of permission strings. Users get roles; roles grant or deny what users can do.

The Settings → Access → Roles tab is where you build them. The page hides every permission-string detail behind a **PermissionPicker** — you don't type `sql:crm:customers_get`; you pick **Query → customers → customers_get** from dropdowns and the picker generates the string.

---

## The Roles tab

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ro-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#ro-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Access</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="80" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Users</text>
  <rect x="128" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="168" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🛡 Roles</text>
  <rect x="880" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="920" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add role</text>

  <rect x="40" y="118" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="140" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">admin</text>
  <text x="56" y="158" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Full superuser equivalent — wildcard baseline.</text>
  <rect x="850" y="130" width="100" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="900" y="145" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">Full access</text>

  <rect x="40" y="182" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="204" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">analyst</text>
  <text x="56" y="222" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Full access, except destructive operations.</text>
  <rect x="830" y="194" width="120" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="890" y="209" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">3 rules</text>

  <rect x="40" y="246" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="268" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">reader</text>
  <text x="56" y="286" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Read-only on the crm app.</text>
  <rect x="830" y="258" width="120" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="890" y="273" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">2 rules</text>

  <rect x="40" y="310" width="920" height="48" rx="8" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="500" y="338" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Click a row to open the Role editor.</text>
</svg>

Each card shows the role's id, description, and a count of allow/deny rules (or a *Full access* chip when the baseline is `*` with no further restrictions).

---

## The Role editor

Click a role row to open the editor. It has three pieces:

| Section | Notes |
|---|---|
| **Role name** | Read-only after creation. Renaming requires deleting and recreating with the new name (no cross-file rename for roles — references in users update automatically because users carry role names, not ids). |
| **Description** | Free text. Shown on the card. |
| **Permissions** | The **PermissionPicker** — baseline + allow / deny rules. |

---

## The PermissionPicker — anatomy

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="pp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#pp-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Role editor · analyst</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASELINE</text>
  <rect x="40" y="98" width="120" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="100" y="116" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘ No access</text>
  <rect x="168" y="98" width="120" height="28" rx="6" fill="rgba(34,197,94,0.20)" stroke="rgba(34,197,94,0.40)"/>
  <text x="228" y="116" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Full access</text>
  <text x="300" y="116" fill="#64748b" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">everything, minus the denies below</text>

  <text x="40" y="160" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RULES</text>
  <rect x="40" y="170" width="320" height="24" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="50" y="186" fill="#ef4444" fontSize="11" fontFamily="ui-monospace, monospace">!sql:crm:customers_delete</text>
  <text x="340" y="186" fill="#ef4444" fontSize="11" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>

  <rect x="40" y="200" width="320" height="24" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="50" y="216" fill="#ef4444" fontSize="11" fontFamily="ui-monospace, monospace">!menu:crm:admin</text>
  <text x="340" y="216" fill="#ef4444" fontSize="11" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>

  <rect x="40" y="230" width="320" height="24" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="50" y="246" fill="#ef4444" fontSize="11" fontFamily="ui-monospace, monospace">!ai:chat</text>
  <text x="340" y="246" fill="#ef4444" fontSize="11" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>

  <line x1="20" y1="276" x2="980" y2="276" stroke="#1f2937"/>
  <text x="40" y="298" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADD A RULE</text>

  <rect x="40" y="308" width="80" height="28" rx="6" fill="rgba(34,197,94,0.20)" stroke="rgba(34,197,94,0.40)"/>
  <text x="80" y="326" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Allow</text>
  <rect x="128" y="308" width="80" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="168" y="326" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘ Deny</text>

  <rect x="216" y="308" width="140" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="226" y="326" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Menu ▾</text>

  <rect x="364" y="308" width="380" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="374" y="326" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">Pick a menu…</text>

  <rect x="752" y="308" width="80" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="792" y="326" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add</text>
</svg>

### The baseline

Two buttons, mutually exclusive:

| Baseline | Permissions list | Semantics |
|---|---|---|
| **No access** | starts empty | Nothing is allowed except what you add via *Allow* rules. The right default for **least-privilege** roles. |
| **Full access** | starts with `["*"]` | Everything is allowed except what you remove via *Deny* rules. The right default for **superuser-like** roles. |

The hint below the toggle reads either *"nothing, plus the allows below"* or *"everything, minus the denies below"* depending on the choice.

### The rule list

Each rule is a coloured chip:

| Chip colour | Meaning |
|---|---|
| **Green** | An allow rule — `sql:crm:customers_get`, `menu:crm:pipeline`. |
| **Red** | A deny rule — the same shapes but prefixed `!` on storage (`!sql:crm:customers_delete`). |

The ✕ on each chip removes the rule. The list at the top of the Picker is sorted by the order rules were added.

### Adding a rule

Three controls below the chips:

| Control | What it does |
|---|---|
| **Effect** (Allow / Deny) | Two-button toggle. *Allow* adds the chip without the `!` prefix; *Deny* adds it with `!`. |
| **Type** | Dropdown — *Menu* / *Dashboard* / *Connector (all queries)* / *Query* / *API endpoint* / *AI assistant*. Drives the available items in the next dropdown. |
| **Item** | A search-select populated based on Type. For *Menu* it lists every menu item from every app; for *Connector* it lists SQL connectors; for *Query* it lists every named query; for *Dashboard* it lists every dashboard id; for *API endpoint* it lists every API connector's endpoints; for *AI assistant* there's a single entry. |
| **＋ Add** | Resolves the picked item into one or more permission patterns, prefixes `!` if Deny, appends to the rule list. |

The picker handles the **pattern composition** so you don't have to remember the `sql:<c>:<q>` syntax. You think in terms of *"allow this menu"* or *"deny this query"*; the storage looks like `menu:crm:reports` or `!sql:crm:customers_delete`.

### Menu rules have a special expansion

When you allow a **Menu** rule, the picker expands it into **multiple** permission patterns:

- `menu:<app>:<id>` — so the menu item itself shows in the navigation.
- `menu:<app>:<descendant_id>` — for each descendant leaf (so submenus show).
- `sql:<connector>:<target>` or `api:<connector>:<target>` — for each descendant leaf's underlying query / endpoint, so the screens / endpoints actually run.

This means an *Allow → Menu → Pipeline* rule grants the user the whole *Pipeline* folder and every screen inside it, in one go. The same expansion happens on *Deny* — denying *Menu → Admin* hides the folder and refuses every screen inside.

Without this expansion, you'd have to add an allow for the menu *and* a separate allow for each underlying query — an error-prone manual chore. The picker does it for you.

---

## Resolution order

When the framework checks a permission, it runs through this order:

1. **Superuser check** — if the user has `is_superuser = true`, allow everything (deny rules ignored).
2. **Explicit deny** — if any `!<pattern>` in the user's combined roles' permissions matches, reject.
3. **Explicit allow** — if any non-`!` pattern matches, allow.
4. **Default deny** — otherwise, reject.

The order matters. A `["*", "!sql:crm:customers_delete"]` permission list:

- `sql:crm:customers_get` → matches `*` (allow), no matching deny → allowed.
- `sql:crm:customers_delete` → matches `*` (allow) **and** matches `!sql:crm:customers_delete` (deny) → deny wins → rejected.
- `sql:reporting:*` → matches `*` (allow), no matching deny → allowed.

---

## Pattern syntax — the full grammar

Permission strings use colon-segmented globs:

| Operator | Meaning | Example |
|---|---|---|
| `<word>` | Literal segment. | `sql`, `crm`, `customers_get`. |
| `*` (single segment) | Matches one segment. | `sql:*:customers_get` matches `sql:crm:customers_get` and `sql:reporting:customers_get`. |
| `*` (trailing) | Matches the rest. | `sql:crm:*` matches every `sql:crm:<anything>`. |
| `!<pattern>` | Deny. | `!sql:crm:customers_delete`. |
| `*` (alone) | Wildcard everything. | The Full access baseline. |
| `!*` | Deny everything. | Rare; effectively a kill switch. |

The full surfaces:

| Pattern | Grants |
|---|---|
| `sql:<connector>:<query>` | Run one SQL query. |
| `sql:<connector>:*` | Run every SQL query on a connector. |
| `sql:*` | Run every SQL query everywhere. |
| `api:<connector>:<endpoint>` | Call one API endpoint. |
| `api:<connector>:*` | Call every endpoint on a connector. |
| `menu:<app>:<id>` | See one menu item (folder or leaf). |
| `menu:<app>:*` | See every menu item under an app. |
| `dashboard:<id>` | Open one dashboard. |
| `ai:chat` | Use the AI assistant. |
| `*` | Everything. |

---

## Standard role recipes

| Role | Baseline | Rules |
|---|---|---|
| **Superuser** | Full access | (empty) — equivalent to flipping `is_superuser` on the user. |
| **Reader on the CRM app** | No access | Allow → Menu → CRM (which expands into `menu:crm:*` + `sql:crm:*` for the read queries). |
| **Power user on CRM except delete** | Full access | Deny → Query → `customers_delete`, `deals_delete`, `activities_delete`. |
| **AI-only access** | No access | Allow → AI assistant. The user signs in and gets the AI chat surface but no menu / no screens. |
| **Reports manager** | No access | Allow → Menu → Reports + Allow → Dashboard → revenue_overview / pipeline_health / etc. |
| **Admin minus AI** | Full access | Deny → AI assistant. Everything else allowed. |

The Permissions Picker handles every case through the same Allow / Deny / Type / Item cascade.

---

## How a user's effective permissions compose

A user can have **several roles**. The framework concatenates the permission lists from every role — deny wins across roles too.

Example: Alice has both `analyst` and `reporter`:

- `analyst.permissions = ["*", "!sql:crm:customers_delete"]`
- `reporter.permissions = ["sql:reporting:*", "menu:reporting:*"]`

Alice's effective permissions:
- `sql:crm:customers_get` → allowed by `*` in analyst.
- `sql:crm:customers_delete` → denied by `analyst`'s `!sql:crm:customers_delete` even though `*` would allow it.
- `sql:reporting:monthly_revenue` → allowed by both `*` (analyst) and `sql:reporting:*` (reporter) — redundant but fine.

There's no way for one role to "override" another role's deny — deny is final across the user's complete role set.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Allow a Menu without realising it grants the underlying queries. | A user has more SQL access than expected. | Use Allow → Query for fine-grained control; reserve Allow → Menu for "grant the whole section". |
| Full access baseline + a few allow rules. | The allows are redundant (the baseline already grants them). | Either use *Full access* (and deny exceptions) or *No access* (and allow specifics). Not both. |
| `!sql:crm:*` thinking it'll override an inherited allow. | The deny works — but the user has *no SQL access on crm* even when other roles grant it. | Denies are absolute. Use them deliberately. |
| Renaming a role through editing the name. | Name is read-only after creation. | Delete the role and recreate with the new name. Re-assign users. |
| Forgetting that JWT changes lag. | A user gets a new role but doesn't see it for an hour. | The user signs out and back in, or waits for the access token TTL. |

---

## What's next

- [Users](./users.md) — assign roles to users.
- [Sign-in](./sign-in.md) — how users get their JWTs.
- [Encrypted secrets](./encrypted-secrets.md) — independent layer; orthogonal to RBAC.
