---
title: User Management
description: "Add, edit and provision JD Edwards users from a single grid — SQL writes the user master and display preferences, AIS REST provisions the security record and the password."
keywords: [Nomajde, JD Edwards, JDE security, user management, F0092, F00921, F98OWSEC, AIS, JDE password reset, user provisioning, address book]
---

# User Management

The **User Management** screen is the JD Edwards user master, condensed into one editable grid. One line per JDE account. From a single page the security administrator can add a new user, change their JDE attributes (language, country, date format, …), reset the password, attach roles and declare environments.

It is the entry point for every user-related security operation — what the JDE *P0092 Work With User Profiles*, *P98OWSEC Work With User Security* and parts of *P95921* do, on one screen.

---

## At a glance

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njum-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#njum-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Security Maintenance · User Management</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ALPHA NAME</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LANGUAGE</text>
  <text x="610" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATE FORMAT</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COUNTRY</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Dupont, Julien — Finance</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F — Français</text>
  <text x="610" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DMY · /</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FR</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MARTIN.S</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Martin, Sarah — Procurement</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">E — English</text>
  <text x="610" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MDY · /</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">US</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">GARCIA.L</text>
  <text x="220" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Garcia, Lucia — Finance</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">S — Español</text>
  <text x="610" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DMY · /</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ES</text>
</svg>

---

## Goal of the view

For each JDE user:

- **The user master, editable on the grid.** Add a new user, change the language, swap the date format — all inline. The screen owns the same data as the JDE *Work With User Profiles* form.
- **Full provisioning, end to end.** A new user requires a SQL write on the user master *and* an AIS REST call to create the JDE security record and set the password. Nomajde chains the two on a single save — no manual *Work With User Security* step.
- **Password reset in one click.** The *Reset Password* button on the dialog calls the JDE AIS endpoint directly; the new password is active on the user's next sign-on.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **User** | `ULUSER` — JDE user ID. | The sign-on user. |
| **Alpha name** | `ABALPH` — Address Book alpha name. | Friendly name pulled from the Address Book record. |
| **Language** | `ULLNGP` — preferred language code. | Drives the language of the JDE forms. |
| **Date format** | `ULFRMT` — date format pattern. | Controls how dates are typed and rendered (DMY, MDY, …). |
| **Country** | `ULCTR` — country code. | Default country for new transactions entered by the user. |

The hidden JDE attributes carried on the row (output queue, job queue, message logging, decimal separator, currency, time zone, time format, OMW logging, right-to-left, intensive-user flag, action / inactive marker, audit columns) are kept on the row so the edit dialog opens with the full picture.

---

## Edit dialog

Click **Add** in the toolbar to register a new JDE user, or double-click a row to edit an existing one. The dialog has three tabs. The *Roles* and *Environments* tabs are hidden on **Add** — they appear once the user record exists.

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njum-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="300" rx="14" fill="url(#njum-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit user — DUPONT.J</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="120" height="28" rx="6" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="120" y="118" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Default</text>
  <rect x="190" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Roles</text>
  <rect x="320" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Environments</text>

  <text x="60" y="156" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">User</text>
  <rect x="60" y="162" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="179" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>

  <text x="260" y="156" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Alpha name</text>
  <rect x="260" y="162" width="380" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="179" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Dupont, Julien — Finance</text>

  <text x="660" y="156" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Language</text>
  <rect x="660" y="162" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="672" y="179" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F ▾</text>

  <text x="800" y="156" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Country</text>
  <rect x="800" y="162" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="812" y="179" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FR ▾</text>

  <text x="60" y="208" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Date format</text>
  <rect x="60" y="214" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="231" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DMY · /</text>

  <text x="260" y="208" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Decimal separator</text>
  <rect x="260" y="214" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="231" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">,</text>

  <text x="400" y="208" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Currency</text>
  <rect x="400" y="214" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="412" y="231" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">EUR</text>

  <text x="540" y="208" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Time zone</text>
  <rect x="540" y="214" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="552" y="231" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Europe/Paris</text>

  <rect x="60" y="260" width="280" height="40" rx="8" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="200" y="278" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <text x="200" y="292" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">SQL writes + AIS provisioning, in one go</text>

  <rect x="360" y="260" width="240" height="40" rx="8" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="480" y="278" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Reset Password</text>
  <text x="480" y="292" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">AIS REST · active on next sign-on</text>

  <rect x="620" y="260" width="200" height="40" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="720" y="278" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Upload Excel</text>
  <text x="720" y="292" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Onboard a batch of users</text>
</svg>

### Tab 1 — Default

The user identification and the JDE display preferences. Every field corresponds to a column on the JDE user master.

| Field | What to enter |
|---|---|
| **User** | JDE sign-on user. Mandatory. Cannot be changed after creation. |
| **Alpha name** | Friendly name pulled from the Address Book — appears on every report and form. |
| **Language** | Preferred language code (F, E, S, …). Drives the language of the JDE forms. |
| **Country** | Country code — default country for new transactions. |
| **Date format** | Day / month / year ordering and separator (`DMY /`, `MDY /`, `YMD -`, …). |
| **Decimal separator** | Decimal character (`,` or `.`). |
| **Currency** | Default currency for new transactions. |
| **Time zone** | User's time zone — drives the timestamp display in JDE. |
| **Time format** | 12 h or 24 h. |
| **Right-to-left**, **OMW logging**, **Intensive user** | JDE display behaviour switches. Leave at the JDE default unless the deployment guidelines call for a specific value. |

The hidden JDE fields (output queue, job queue, message logging defaults) carry standard values populated by Nomajde — typically `QPRINT`, `*NOLIST`, severity `00`.

### Tab 2 — Roles

Nested table listing the roles attached to the user — the same data the *Role Relationships* screen edits, scoped to this user. Each row carries the role, the effective date and the expiration date.

Add a row to attach a role; double-click to extend the date window; delete to revoke. Hidden on **Add**.

### Tab 3 — Environments

Nested table listing the environments the user can sign on to (`PD910`, `PY910`, `DV910`, `CRP910`, …), with the display sequence. The default environments are populated automatically when the user is created — adjust here if a specific entry has to be added or removed. Hidden on **Add**.

---

## What runs on save

Adding a JDE user is not just a SQL insert. Nomajde chains the SQL writes and the AIS REST calls so the operator never has to switch screen.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njum-flow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#njum-flow)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">On save — the five chained steps</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="160" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="140" y="120" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · SQL</text>
  <text x="140" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">User master</text>
  <text x="140" y="156" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">JDE F0092</text>
  <text x="140" y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">user identification</text>

  <text x="226" y="143" fill="#4a9eff" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="240" y="100" width="160" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="320" y="120" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · SQL</text>
  <text x="320" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Display preferences</text>
  <text x="320" y="156" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">JDE F00921</text>
  <text x="320" y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">language · date · currency</text>

  <text x="406" y="143" fill="#4a9eff" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="420" y="100" width="160" height="80" rx="10" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="500" y="120" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · AIS REST</text>
  <text x="500" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Get token</text>
  <text x="500" y="156" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">AIS authentication</text>
  <text x="500" y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">session for next calls</text>

  <text x="586" y="143" fill="#fb923c" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="600" y="100" width="160" height="80" rx="10" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="680" y="120" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · AIS REST</text>
  <text x="680" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Security record</text>
  <text x="680" y="156" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">JDE F98OWSEC</text>
  <text x="680" y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">JDE sign-on row</text>

  <text x="766" y="143" fill="#fb923c" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="780" y="100" width="160" height="80" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="860" y="120" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5 · AIS REST</text>
  <text x="860" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Initial password</text>
  <text x="860" y="156" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">User Security</text>
  <text x="860" y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">active immediately</text>
</svg>

| Step | Channel | What it does |
|---|---|---|
| 1 | **SQL** | Writes the user identification row in the JDE user master. |
| 2 | **SQL** | Writes the display preferences row (language, date format, currency, time zone, …). |
| 3 | **AIS REST** | Authenticates the Nomajde service account against AIS to obtain a token for the next two calls. |
| 4 | **AIS REST** | Checks whether the user already has a JDE security record, then creates one if missing — this is what makes the user known to the JDE sign-on layer. |
| 5 | **AIS REST** | Sets the initial password. The new account is ready on the next sign-on. |

If any step fails, the chain stops and the operator is notified — there is no half-provisioned user to clean up.

---

## Reset Password

The **Reset Password** button on the dialog calls the JDE AIS *change password* endpoint directly. The administrator enters the new password once, clicks the button, and the change is active on the user's next sign-on. The same flow can be used to unlock an account whose password has expired.

---

## Tips & best practices

- **Onboard via *Add*, not via SQL.** A direct SQL insert into the user master skips the AIS security record provisioning — the user appears in the table but cannot sign on. The five-step save chain is what makes the new user usable.
- **Excel upload** for SI-delivered user lists — the upload runs the same five-step chain for every row, so 50 new users are provisioned in a single import.
- **Reset Password** is the right tool when an operator reports a forgotten password. It is also what the help desk uses for the *unlock* request — a fresh password resets the failed-attempt counter on the JDE side.
- **Keep the Roles and Environments tabs in sync.** A user without an environment cannot sign on; a user without a role has no rights. The default environments populate automatically, but the role attachment is a manual step on the *Roles* tab.
