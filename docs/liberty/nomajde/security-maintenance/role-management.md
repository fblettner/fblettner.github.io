---
title: Role Management
description: "Maintain JD Edwards users and roles in one place — descriptions, attached roles, environments, and the security workbench import workflow."
keywords: [Nomajde, JD Edwards, JDE security, role management, F00926, user role description, security workbench import, role inheritance]
---

# Role Management

The **Role Management** screen is the editor for JD Edwards users and roles. JDE stores the description of each user and each role in the same table — the screen lets you maintain both from a single grid. One line per `(User or Role)`.

Open a row to edit the description, attach roles, set the environments, run the security workbench import. The actions that JDE normally splits across the *User Profile*, *Role Description* and *Security Workbench* forms are collapsed into one dialog.

---

## At a glance

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njrm-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#njrm-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Security Maintenance · Role Management</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="750" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SEQUENCE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AP and GL bookkeeper</text>
  <text x="750" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Dupont, Julien — Finance</text>
  <text x="750" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">20</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC_BUYER</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Procurement buyer (PO release)</text>
  <text x="750" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">15</text>
</svg>

---

## Goal of the view

For each user or role in the JDE security catalogue:

- **One screen for users and roles.** JDE stores user and role descriptions in the same table; this page does too — a role and a user both appear in the grid, sortable side by side.
- **One dialog for the whole maintenance.** Editing a row gives access to the description, the attached roles, the environments and the security workbench import — without navigating between three separate JDE forms.
- **Bulk-friendly.** Standard grid actions (add, edit, delete) plus the upload action of Nomajde — useful when onboarding a new role definition delivered by the system integrator as a spreadsheet.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **User / Role** | `AUUSER` — JDE identifier. | Either a sign-on user ID or a role ID — JDE stores both in the same table. |
| **Description** | `AUROLEDESC` — friendly label. | The label that surfaces on JDE forms and on the Nomajde reports. |
| **Sequence** | `AUSEQNO` — sequence number. | Display order used when a user holds several roles — lower number wins. |

Other JDE attributes carried on the row but hidden by default: language, e-mail, last login, intensive-user flag, action / inactive marker, and the audit columns (program, job, date, time).

---

## Edit dialog

Click **Add** in the toolbar to register a new user or role, or double-click a row to edit. The dialog has four tabs. The *Roles*, *Assignments* and *Environments* tabs are hidden on **Add** — they appear only after the user / role record exists.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njrm-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#njrm-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit User / Role — DUPONT.J</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="120" height="28" rx="6" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="120" y="118" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Default</text>
  <rect x="190" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Roles</text>
  <rect x="320" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Assignments</text>
  <rect x="450" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Environments</text>

  <text x="60" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">User / Role</text>
  <rect x="60" y="166" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>

  <text x="260" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="260" y="166" width="540" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Dupont, Julien — Finance</text>

  <text x="820" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Sequence</text>
  <rect x="820" y="166" width="100" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="832" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">20</text>

  <rect x="60" y="216" width="540" height="60" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="76" y="236" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLES TAB — SECURITY WORKBENCH WORKFLOW</text>
  <text x="76" y="254" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Click Import Security to copy the security workbench setup from another user / role, in six</text>
  <text x="76" y="268" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">guided steps. Click Merge Roles to combine the setups of several source roles into the target.</text>

  <rect x="620" y="216" width="300" height="60" rx="10" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.30)" strokeWidth="1"/>
  <text x="636" y="236" fill="#22c55e" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ON SAVE — AUTOMATIC ENVIRONMENTS</text>
  <text x="636" y="254" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Default environments are computed and</text>
  <text x="636" y="268" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">inserted automatically on save.</text>
</svg>

### Tab 1 — Default

The user / role identification and the JDE display preferences (language, country, date format, decimal separator, currency, time zone). All four columns shown on the grid live here; the JDE display attributes are below.

| Field | What to enter |
|---|---|
| **User / Role** | The JDE identifier — the sign-on user for a user, the role ID for a role. Mandatory. |
| **Description** | Friendly label that surfaces on JDE forms and in the Nomajde reports. |
| **Sequence** | Display order when the same user holds several roles — lower number first. |

The JDE display fields (language, country, date format, decimal separator, currency, time zone, time format, OMW logging, right-to-left, intensive user) keep their JDE semantics. Leave them empty to inherit the JDE default, or set them per user when the deployment guidelines require it.

### Tab 2 — Roles

Nested table listing the roles attached to the user (or the parent roles of the role being edited). Add a row to attach a role, with effective and expiration dates. Hidden on **Add**.

The toolbar of the Roles tab carries two workflow buttons — *Import Security* and *Merge Roles* — that automate the bulk of the JDE security-cloning work in a single click. Both apply across three JDE catalogues:

| Catalogue | What it carries |
|---|---|
| **Security Workbench** | Application, action, row, column, processing-option, tab, exit, hyper-exit, external-call security. |
| **UDO Security** | User-Defined Object security — saved queries, watch lists, personal forms, advanced queries, E1 Pages. |
| **Menu Filtering** | The Solution Explorer task variants the user is allowed to launch. |

Each workflow walks through the three catalogues, deleting the target rows first and inserting the source rows next — a delete-then-insert per catalogue, six steps in total.

#### Import Security — clone a reference user / role

The button copies the **full security setup** of a single source user or role into the target. The target's prior security is removed first — the result is an exact clone.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njrm-import" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#njrm-import)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Import Security — clone a source user / role onto the target</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="135" height="64" rx="10" fill="rgba(248,113,113,0.08)" stroke="rgba(248,113,113,0.35)" strokeWidth="1"/>
  <text x="127" y="120" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · DELETE</text>
  <text x="127" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Workbench</text>
  <text x="127" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">target rows</text>

  <text x="200" y="138" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="215" y="100" width="135" height="64" rx="10" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.35)" strokeWidth="1"/>
  <text x="282" y="120" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · INSERT</text>
  <text x="282" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Workbench</text>
  <text x="282" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">from source</text>

  <text x="355" y="138" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="370" y="100" width="135" height="64" rx="10" fill="rgba(248,113,113,0.08)" stroke="rgba(248,113,113,0.35)" strokeWidth="1"/>
  <text x="437" y="120" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · DELETE</text>
  <text x="437" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UDO Security</text>
  <text x="437" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">target rows</text>

  <text x="510" y="138" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="525" y="100" width="135" height="64" rx="10" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.35)" strokeWidth="1"/>
  <text x="592" y="120" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · INSERT</text>
  <text x="592" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UDO Security</text>
  <text x="592" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">from source</text>

  <text x="665" y="138" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="680" y="100" width="135" height="64" rx="10" fill="rgba(248,113,113,0.08)" stroke="rgba(248,113,113,0.35)" strokeWidth="1"/>
  <text x="747" y="120" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5 · DELETE</text>
  <text x="747" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Menu Filtering</text>
  <text x="747" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">target rows</text>

  <text x="820" y="138" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="835" y="100" width="115" height="64" rx="10" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.35)" strokeWidth="1"/>
  <text x="892" y="120" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">6 · INSERT</text>
  <text x="892" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Menu Filtering</text>
  <text x="892" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">from source</text>
</svg>

| Step | Catalogue | What it does |
|---|---|---|
| 1 | Security Workbench | Removes every existing workbench entry on the target. |
| 2 | Security Workbench | Copies every workbench entry from the source onto the target, line for line. |
| 3 | UDO Security | Removes every existing UDO entry on the target. |
| 4 | UDO Security | Copies every UDO entry from the source — a fresh row identifier is allocated so the target's rows do not collide with the source's. |
| 5 | Menu Filtering | Removes every existing menu-filter entry on the target. |
| 6 | Menu Filtering | Copies every menu-filter entry from the source. |

After the six steps run, the target user / role has the **same security as the source** — same applications, same action grants, same UDO permissions, same Solution Explorer view.

#### Merge Roles — combine the inherited roles into one consolidated set

The button looks at **every active role relationship** on the target (the *Role Relationships* attached to the row) and consolidates the security setups of all source roles into the target. Where two source roles grant a flag (e.g. *Run*), the merged result takes the most-permissive value. The target's prior security is removed first.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njrm-merge" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#njrm-merge)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Merge Roles — consolidate every active inheritance onto the target</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="80" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="160" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INHERITANCE SOURCES</text>
  <text x="160" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Every role attached to the target</text>
  <text x="160" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">via Role Relationships</text>
  <text x="160" y="178" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">restricted to active inheritances</text>

  <text x="280" y="148" fill="#4a9eff" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="300" y="100" width="320" height="80" rx="10" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.35)" strokeWidth="1"/>
  <text x="460" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MERGE — MOST-PERMISSIVE WINS</text>
  <text x="460" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">For each (security type, object, data item):</text>
  <text x="460" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">take the maximum grant across all source roles</text>
  <text x="460" y="178" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">delete-then-insert · Workbench · UDO · Menu Filtering</text>

  <text x="640" y="148" fill="#4a9eff" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="660" y="100" width="280" height="80" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="800" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TARGET ROLE — CONSOLIDATED</text>
  <text x="800" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">One security row per object,</text>
  <text x="800" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">reflecting the union of all sources</text>
  <text x="800" y="178" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">no more sign-on time computation</text>
</svg>

| Use Merge Roles when | What you get |
|---|---|
| A role inherits from three source roles and you want a single flat row set instead of resolving the inheritance at every sign-on. | A consolidated *Security Workbench* on the target — JDE no longer has to compute the union at sign-on time. |
| You are about to retire two of the source roles and want to keep the combined access on the target only. | The same effective rights, expressed on the target. After the merge, remove the inheritance from *Role Relationships*. |
| The security workbench grows beyond what a JDE sign-on can comfortably resolve on the fly. | Flatten the hierarchy once, get faster sign-ons and an easier-to-audit row set. |

Both buttons are idempotent — running them twice does not duplicate the result. They both keep the audit columns on the inserted rows (the Nomajde user, the JDE program ID, the timestamp), so the *Audit Trail* picks up the change.

:::caution[Destructive on the target]
*Import Security* and *Merge Roles* both **delete the target's existing rows** before inserting. Always run them on a freshly created user / role, or after confirming the target's current security is no longer needed.
:::

### Tab 3 — Assignments

The reverse view of the Roles tab. Lists the records where the current user / role is the **source** of a role inheritance — that is, every user or role that inherits security from this one. Hidden on **Add**.

Edit a row to extend the effective-date window or to revoke the inheritance.

### Tab 4 — Environments

Nested table listing the environments declared for the user (`PD`, `PY`, `DV`, `CRP`, …). Each environment carries the role under which the user runs there and the date window during which the access is valid. Hidden on **Add**.

When the user record is created (the **Add** flow), Nomajde automatically populates the default environments from the JDE configuration — no manual entry needed on day one.

---

## On save — what runs in the background

Saving a new user / role chains four JDE inserts in one go:

1. **Insert New Role** — writes the user / role identification row.
2. **Get Default Environments** — fetches the default environment list from the JDE configuration.
3. **Insert Default Environments** — populates the *Environments* tab with the defaults.
4. **Insert Display Preferences** — writes the display preferences row (language, country, date format…) tied to the user / role.

The four steps run as a single save — there is no half-created record to clean up if any step fails.

### Server-side security re-merge *(2026.06.09)*

Every save on a child role (a role that's *included by* other parent roles) triggers a server-side merge step that re-derives the parents' F00950 / F00950W / F9006 rows from the new child state. Without this, a permission change on a child would only surface in production after every parent that includes it was opened + re-saved by hand.

The re-merge runs through a `call_plugin` action (`nomajde.security:j_remerge_security` with `scope = "child_role"`) wired onto every role-edit screen. It's transparent in normal use — the operator just saves; the merge runs as part of the same write transaction.

When the role-edit screen is **change-tracked** (the standard configuration for promotion-target environments), the same merge also lands as a `CALL_PLUGIN` entry in the [active change package](../../nomaflow/change-packages.md) with `change_replay = true`, so the re-merge re-runs on the target environment after the package's row writes land.

For batch re-merge across every change captured in the draft package (typical when several child roles were touched together), the bundled [`nomajde-remerge-security`](../../nomaflow/bundled-jobs.md#nomajde-remerge-security) Nomaflow job runs the same plugin with `scope = "package"`. Wire it as a post-apply step on the contributing screens so it runs once on the target after every captured row lands.

For a full system re-merge — recovery after a security-table re-import, or a known-bad merge — the [`nomajde-remerge-security-all`](../../nomaflow/bundled-jobs.md#nomajde-remerge-security-all) job runs the same plugin with `scope = "all"`. Use sparingly; the full pass writes every parent's rows again.

---

## Tips & best practices

- **Use *Import Security* to onboard a new user** by cloning a reference one — much faster than rebuilding the workbench by hand.
- **The Sequence column matters** when a user holds several roles — JDE resolves the effective rights using the sequence order. Keep the most restrictive role at the lowest sequence number.
- **Maintain users and roles in the same place.** JDE stores both in *F00926*; the screen surfaces both. Apply your own naming convention (e.g. `*_USER` for users, `*_ROLE` for roles) to keep them visually separate on the grid.
- **Check *Nomasx-1 → Conflicts → Summary by User*** after onboarding a user, to confirm the attached roles do not create SoD conflicts.
