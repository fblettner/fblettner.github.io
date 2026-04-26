---
title: Users
description: "Manage NomaUBL user accounts: create, edit, deactivate or delete users, assign them a role and reset their password."
keywords: [NomaUBL, users, accounts, role assignment, password reset, deactivate, RBAC]
---

# Users

This screen manages NomaUBL user accounts: create new users, assign each one a **role** (defined in *Configuration → Security → Roles*), edit profile data, deactivate accounts and reset passwords.

User accounts are application-wide and source-agnostic — they apply equally whether NomaUBL is plugged into JD Edwards, SAP, NetSuite or a custom ERP. The default `admin` user (and the seed roles) is provisioned by the **Initialize Database** action in *Database Connectors → NomaUBL*.

---

## Users list

The table at the bottom of the page lists every user account.

| Column | Description |
|---|---|
| **Username** | Login identifier of the account. |
| **Full Name** | Display name shown in the UI. |
| **Email** | Account email — used for notifications and password-reset workflows. |
| **Role** | Role currently assigned to the user (one of the entries from *Configuration → Security → Roles*). |
| **Active** | `Yes` (green) when the account can log in; `No` (red) when it is disabled but kept for traceability. |
| **Actions** | **✏️** opens the edit form for the user; **🗑** deletes the user after a browser confirmation prompt. |

When the table is empty, a message points to *Initialize Database* — the seed `admin` account is created during that step.

---

## New User

Click **+ New User** at the top right of the section to open the create form. Fields:

| Field | Description |
|---|---|
| **Username** | Login identifier. Must be unique. **Cannot be changed after creation.** |
| **Password** | Initial password set on the account. |
| **Full Name** | Display name shown in the UI. |
| **Email** | Account email. |
| **Role** | Role assigned to the user (dropdown listing roles defined in *Security → Roles*). |

Click **Create** to persist or **Cancel** to discard.

---

## Edit user

Click **✏️** on any row to open the edit form for that user. The form is the same as for creation, with three differences:

| Field | Behaviour when editing |
|---|---|
| **Username** | Hidden — usernames are immutable. |
| **Password** | Hidden — use **Reset Password** below instead. |
| **Active** | `Yes` / `No` — toggles whether the account can log in. Disabling preserves the user's history without granting access. |
| **Reset Password** | Optional field. **Leave empty to keep the current password**; type a new value to overwrite it. |

Click **Save** to persist or **Cancel** to discard.

---

## Delete a user

Click **🗑** on any row. A native browser confirmation appears (`Delete user "X"?`). Confirming deletes the account immediately — there is no soft-delete recovery, so prefer **Active = No** when you only need to revoke access temporarily.

---

## Status messages

Inline feedback appears below the table:

- `User created` / `User updated` / `User deleted` on success.
- The original error message from the API on failure (e.g. duplicate username, missing field).

---

## Tips & best practices

- **Match Username to your SSO / corporate identifier** when applicable, even if NomaUBL is not federated yet — it makes future SSO migration painless.
- **Set a strong initial password** on creation, then ask the user to change it on first login.
- **Prefer *Active = No* over deletion** when an employee leaves — keeps the audit trail intact while immediately revoking access.
- **Use Reset Password sparingly.** When users can change their own password elsewhere, this field is mostly for unlocking accounts after a password loss.
- **Re-run *Initialize Database*** *(Database Connectors → NomaUBL)* on a fresh deployment if no users exist — it provisions the seed `admin`.
- **Bind every user to a role.** Without a valid role, the user lands without permissions and sees an empty navigation.
