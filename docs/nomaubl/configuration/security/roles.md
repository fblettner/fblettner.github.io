---
title: Roles
description: "Manage NomaUBL roles: per-role page permissions, configuration access, read-only mode, company scoping, and assigned-members listing."
keywords: [NomaUBL, roles, permissions, RBAC, access control, page permissions, read-only, settings access, companies, JD Edwards, SAP, NetSuite]
---

# Roles

This screen manages NomaUBL's **role-based access control**. Each role bundles a set of permissions: which **pages** users see in the navigation, whether they can reach the **Configuration** menus, whether they're **read-only**, and which **companies** they're allowed to act on.

Roles are application-wide and source-agnostic — they apply equally whether NomaUBL is plugged into JD Edwards, SAP, NetSuite or a custom ERP. Default roles (`admin`, `user`, …) are provisioned by the **Initialize Database** action in *Database Connectors → NomaUBL*.

---

## Roles list

The top of the page shows every existing role as a card:

| Element | Description |
|---|---|
| **Name** | Internal identifier of the role (e.g. `admin`, `operator`, `auditor`). Used to link users to the role. |
| **Description** | Free-text human-readable summary. |
| **Member count** | Number of users currently assigned to the role. |
| **Badge** | `Admin` when *Settings Access* is `Yes`; `User` otherwise. Quick read of the role's reach. |
| **🗑** button | Deletes the role (a confirmation dialog warns that members will lose their permissions). |

Click any card to open the **Edit panel** below the list. Use **+ New Role** at the top right of the section to create a new one — the same edit panel opens, with the **Name** field editable.

---

## Edit panel — Permissions tab

| Field | Description |
|---|---|
| **Name** | *(visible only when creating)* Internal identifier of the role. Must be unique. |
| **Description** | Human-readable summary shown in the role list. |
| **Settings Access** | `Yes` / `No` — when `Yes`, members can reach the **Configuration** menus and edit application settings. The role is then displayed with the `Admin` badge. |
| **Readonly** | `Yes` / `No` — when `Yes`, members can browse the application but every write action is disabled. Useful for auditors / observers. |
| **Companies** | Comma-separated list of company codes the role is scoped to. **Leave empty to grant access to all companies** (the typical default). |

### Allowed Pages

A grouped checklist matching the application's left-hand navigation. Tick the pages members of the role should be able to reach.

| Group | Pages |
|---|---|
| **Navigation** | `dashboard`, `invoices`, `ereporting`, `edirectory`, `integrationerrors` |
| **Processing** | `fetchinput`, `import`, `retrievestatuses` |
| **Operations** | `xml`, `ubl`, `extractandprocess`, `processapi` |
| **UBL** | `validate`, `xsleditor`, `xmlviewer`, `ubldefaults` |
| **Extract** | `extractbip` *(JD Edwards-specific)*, `extract`, `extractftp` |
| **Documentation** | `statusreference`, `reasoncodes`, `ublreference` |
| **Management** | `fileversions` |

Helpers:

- **All** / **None** buttons at the top of the checklist — instantly grant or revoke every page.
- Per-group checkbox + **check all / uncheck all** toggle — flip an entire group in one click.
- A group's checkbox shows an **indeterminate state** when only some pages of the group are selected.

### Save / Cancel

- **Create** / **Save** persists the role and refreshes the list.
- **Cancel** discards changes and closes the panel.
- Inline status messages are shown below the panel (`Role created`, `Role updated`, `Role deleted`, error messages).

---

## Edit panel — Members tab

Available only when editing an existing role (hidden during creation).

Lists every user currently assigned to the role:

| Column | Description |
|---|---|
| **Username** | The user's login. |
| **Full name** | The user's display name (or `–` if not set). |
| **Status** | `Active` (green) or `Inactive` (red). |

This view is **read-only** — to add or remove a user from a role, edit the user from *Configuration → Security → Users*.

---

## Delete a role

Clicking the **🗑** icon on a role card opens a confirmation modal:

> *Delete role "X"? Users assigned to this role will lose their permissions.*

Confirming triggers the deletion. Users previously bound to the role keep their account but lose every permission until they're re-assigned to another role.

---

## Tips & best practices

- **Create one role per persona, not per individual.** `operator`, `auditor`, `admin` scale better than per-user roles.
- **Grant *Settings Access* sparingly.** It opens the entire Configuration menu — limit it to a small admin group.
- ***Readonly* is ideal for compliance / audit accounts.** Combined with *Settings Access = No*, it provides a non-destructive walk-through of the system.
- **Use Companies to enforce multi-tenant isolation.** Leaving the field empty defeats company-level filtering for the role.
- **Re-run *Initialize Database*** *(Database Connectors → NomaUBL)* if the default roles are missing — it provisions them without touching custom roles.
- **Delete a role only after re-binding its members.** Once deleted, members lose access to everything until reassigned.
