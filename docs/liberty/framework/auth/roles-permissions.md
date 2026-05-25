---
title: Roles & permissions
description: "Access control is split between roles (named groups of permissions) and permissions (atomic codes that gate a surface). Roles are edited from Settings → Roles, assigned from Settings → Users, and the framework prunes every surface against the caller's effective permission set."
keywords: [Liberty Framework, roles, permissions, RBAC, access control, permission codes, settings, roles editor, pruning]
---

# Roles & permissions

Access control is split between **roles** (named groups of permissions) and **permissions** (atomic codes that gate one surface). A user carries one or more roles; the framework collects every permission of every role into a flat **permission set** and uses it to **prune** every surface the user sees — menus, screens, connectors, AI tools, the Settings page itself.

The design goal is *invisible failure*: a user without a permission doesn't see the surface, doesn't get a 403 — the entry simply isn't rendered. The Settings UI is the canonical place to define both ends — *Settings → Roles* for the role definitions, *Settings → Users* for the assignment.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '16px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>USER</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}><b>alice</b><br/>roles = [viewer, editor]</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '16px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>ROLES</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}><b>viewer</b> → sql:billing:*, screens:billing:*<br/><b>editor</b> → + sql:billing:*:write, api:crm:contacts</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '16px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>EFFECTIVE</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>flattened permission set<br/>used to prune every surface</div>
  </div>
</div>

---

## Editing a role — Settings → Roles

Open **Settings → Roles**. The page lists every role with its member count, member's roles, description and inheritance. Clicking a row opens the role editor.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Roles → editor</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Cancel</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Save</span>
    </div>
  </div>
  <div style={{padding: '14px 16px', display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{opacity: 0.75}}>Display name</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Editor</span></div>
    <div style={{opacity: 0.75}}>Description</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Viewer + write on billing</span></div>
    <div style={{opacity: 0.75}}>Inherits from</div><div><span style={{padding: '3px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>viewer</span></div>
  </div>
  <div style={{padding: '14px 16px'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff'}}>Permissions granted</div>
      <span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Add permission</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 60px', rowGap: '4px', alignItems: 'center', fontSize: '11px'}}>
      <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontFamily: 'ui-monospace, monospace'}}>sql:billing:*:write</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✕</div>
      <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontFamily: 'ui-monospace, monospace'}}>api:crm:contacts</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✕</div>
    </div>
  </div>
</div>

| Field | Effect |
|---|---|
| **Display name** | Shown in the role picker and on user pages. |
| **Description** | Free text — surfaces as a tooltip in the Roles list. |
| **Inherits from** | Multi-select of other roles whose permissions are merged into this one. Cycles are refused at save. |
| **Permissions granted** | The list of permission codes this role carries. Each row has an `✕` to remove. *+ Add permission* opens the **Permission picker**. |
| **Members** *(read-only)* | Count of users who carry this role — linked to the Users tab filtered to them. |

The role editor surfaces the **effective permissions** at the bottom — the union of *Permissions granted* + every inherited role's effective set. Useful for confirming that an `inherits` chain produces the expected total.

### Permission picker

*+ Add permission* opens a dialog with the framework's canonical permission codes grouped by category — *SQL*, *API*, *Screens*, *Menus*, *Dashboards*, *Charts*, *Jobs*, *AI*, *Settings*, *Users / Roles*, *License*. Each row offers the wildcard form first (`sql:billing:*`, `screen:billing:*`) and the per-entity rows underneath.

Typing in the search box narrows the list — searching `billing` finds every code in the *billing* app / connector across categories.

---

## The permission codes

Every gated surface has a **canonical permission code** generated by the framework. The picker shows them grouped by category; the table below is the conceptual map.

| Surface | Code template | Example |
|---|---|---|
| **SQL query** *(read)* | `sql:<connector>:<query>` | `sql:billing:monthly-invoice-counts` |
| **SQL query** *(write)* | `sql:<connector>:<query>:write` | `sql:tasks:update:write` |
| **HTTP / API endpoint** | `api:<connector>:<endpoint>` | `api:crm:get-customer` |
| **Screen** | `screen:<app>:<id>` | `screen:billing:invoices` |
| **Menu** | `menu:<app>:<leaf>` | `menu:billing:invoices` |
| **Dashboard** | `dashboard:<id>` | `dashboard:sales-overview` |
| **Chart** *(direct access)* | `chart:<id>` | `chart:invoices-by-month` |
| **Job (Nomaflow)** | `job:<name>` | `job:nightly-sync` |
| **Settings — read** | `settings:read` | grants visibility of the Settings link |
| **Settings — per tab** | `settings:<section>` | `settings:connectors`, `settings:dictionary`, … |
| **Settings — reload** | `settings:reload` | grants `POST /admin/reload` |
| **Users / Roles** | `users:read`, `users:write` | view / edit users |
| **License** | `license:read` | view the license payload |
| **AI assistant** | `ai:chat`, `ai:tool:<name>` | use chat, allow a specific tool |

Wildcards are supported on the connector / app axis: `sql:billing:*` grants every query of the `billing` connector; `screen:billing:*` grants every screen of the `billing` app; `*` alone is reserved for the built-in `admin` role.

---

## Built-in roles

The framework ships two roles you can't remove:

| Role | Permissions |
|---|---|
| **admin** | `*` — every code, including the Settings page itself. |
| **anon** | None. Assigned automatically to unauthenticated requests on public endpoints (rare; the framework defaults to authenticated). |

A fresh `./start.sh init-db` seeds an `admin` user with the `admin` role; no other user starts with elevated permissions.

---

## Assigning roles to users — Settings → Users

In the **Users** tab, each user row exposes a multi-select of roles. Adding a role is a single click. The framework recomputes the user's effective permission set on save; the next API call from that user uses the new set.

When OIDC is the source of truth (see [Authentication → OIDC](./authentication.md#oidc)), the IdP's groups claim is mapped 1:1 to Liberty role names. The Roles tab defines what each role can do — the IdP just decides who carries it.

---

## How pruning works

Pruning runs **per request**, against the JWT's permission set. Each surface follows the same recipe:

| Surface | Pruning rule |
|---|---|
| **Menus** | A leaf is hidden when its underlying permission isn't granted. A folder with zero visible leaves is hidden as well. |
| **Connectors catalogue** | Connectors with no granted query / endpoint are hidden entirely. |
| **AI assistant tools** | The tool list passed to the LLM only contains queries the caller can run. |
| **Settings page** | The Settings link disappears from the header without `settings:read`. Each builder tab is hidden without its own permission. |
| **Dashboards** | A panel referencing a query the caller can't run is silently removed. The dashboard renders without the panel. |
| **Screens** | A user without `screen:<app>:<id>` gets a 403 on direct navigation (the URL is reachable). The Settings UI never exposes the screen in pickers when this permission is missing. |

The 403 on direct navigation to a screen is the **only place** the framework returns a hard failure — every other surface is pruned silently. The reason: screen URLs may have been bookmarked or copy-pasted, and rendering nothing would feel like a broken page.

---

## Server-side enforcement

Pruning is a UX optimisation; the **gate is on the server**. For every REST call:

1. The framework parses the JWT and extracts the user's permission set.
2. The route handler computes the required permission from the URL (`POST /api/sql/billing/customer-create` → `sql:billing:customer-create:write`).
3. The handler runs a flat **wildcard match** against the permission set.
4. On miss, the handler returns `403 Forbidden` with the missing code in the body.

A user crafting a request to a non-permitted query gets the 403; the UI's pruning only matters for usability.

---

## Granting Settings UI access

The Settings page itself is gated. The minimum set for a typical operator editing one builder:

| Permission | Effect |
|---|---|
| `settings:read` | The Settings link appears in the header. |
| `settings:connectors` *(or whichever tab)* | The corresponding tab is visible. |
| `settings:reload` | The *Save & reload* button works (otherwise the form saves and a warning says "reload required"). |

Reading without writing is also possible — grant `settings:read` + `settings:connectors` (without `:reload`) for an auditor profile.

The Raw TOML editor is gated separately with `settings:raw`; this lets you allow a regular operator to edit every builder but withhold the escape hatch.

---

## Common role recipes

The Roles editor's *Templates* button proposes a few starting points — pick one, then trim.

| Template | Effective permissions |
|---|---|
| **Viewer** | Every read query (`sql:*:*`), every API GET (`api:*:*`), every screen (`screen:*:*`), every menu (`menu:*:*`), every dashboard (`dashboard:*`), every chart (`chart:*`), AI chat (`ai:chat`). |
| **Editor** | Inherits *Viewer* + every write query (`sql:*:*:write`). |
| **Settings editor** | `settings:read` + every per-tab `settings:*` + `settings:reload`. No `sql:*`. Can wire the framework without seeing the underlying data. |
| **Job operator** | `settings:read` + `settings:jobs` + `job:*`. Trigger any job manually, see all run history. |
| **Auditor** | `settings:read` + `settings:technical` + `users:read` + `license:read` + read access to audit-specific connectors. |

Use *Templates* as a starting point; rename and trim before saving.

---

## Inspecting effective permissions

| Method | What it shows |
|---|---|
| *Settings → Users* → click a user → *Effective permissions* tab | Flat list of every permission granted, with the role that contributed it. |
| `liberty-admin show alice` | Same list on the CLI. |
| `GET /auth/me` | Returns the JWT payload of the calling user, including the permission array. |
| Server log with `LIBERTY_LOG_LEVEL=DEBUG` | Prints the matched permission on every gated call. |

---

## Tips & best practices

- **Prefer wildcards on connectors.** `sql:billing:*` is easier to reason about than 20 individual permissions and survives the addition of a new query. Reserve named permissions for cross-cutting concerns.
- **Never grant `*`.** It's reserved for the built-in `admin` role; granting it to a custom role bypasses every future gate the framework adds.
- **Use *Inherits from* to layer roles.** `editor` inherits from `viewer`, `manager` inherits from `editor`. Linear inheritance is easier to debug than parallel grants.
- **Audit the *anon* role.** Even though there's no user assigned to it by default, a setting somewhere might add a public endpoint. Make sure *anon* carries nothing it shouldn't.
- **Mirror the IdP groups.** When OIDC is the source of truth, name your Liberty roles to match the IdP group names — the 1:1 mapping is the cleanest contract.

---

## Under the hood

Roles live alongside users — in `config/auth.toml` for the TOML backend, in the `ly2_roles` / `ly2_role_permissions` tables for the database backend. Operators **do not edit these by hand**; the Roles editor is the canonical interface.

---

## What's next

- [Authentication](./authentication.md) — local backend, OIDC, JWT lifecycle.
- [License key](./license-key.md) — feature gates on top of permissions.
- [Configuration → Settings UI](../configuration/settings-ui.md) — which builder lives behind which permission.
