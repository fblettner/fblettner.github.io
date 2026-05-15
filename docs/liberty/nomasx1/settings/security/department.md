---
title: Department
description: "Standalone catalog of AD department / group pairs — the source of values offered as drop-downs across the LDAP screens."
keywords: [Nomasx-1, settings, AD department, group, catalog, LDAP, drop-down]
---

# Department

The **Department** screen is the underlying catalog of `(Group, Department)` pairs that feed every other LDAP screen. One line per pair. This is where the drop-down values shown in *LDAP → Settings* and *Users by applications* come from.

It is intentionally simple — just the two text columns. The link to applications is held on the *LDAP → Settings* page (see *Security → LDAP → Settings* for details).

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sdept-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sdept-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · Security · Department</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GROUP</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AD DEPARTMENT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AR</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SUPPLY</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC-OPS</text>
</svg>

---

## Goal of the view

- **Master catalog of *(Group, Department)* pairs.** Used as the source of drop-down values in the LDAP screens.
- **Keep the pairs aligned with the AD department attribute** so the *Users by applications* matrix matches correctly.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Group** | `LDAPD_GROUP` — text. | High-level functional bucket. |
| **AD Department** | `LDAPD_DEPARTEMENT` — text. | AD department value. Must match the `department` attribute on the LDAP entries. |

---

## Edit dialog

Click **Add** to declare a new pair, or double-click a row to edit. The form is a single tab with the two fields.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sdept-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#sdept-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit department</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="60" y="116" width="420" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>

  <text x="500" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">AD Department</text>
  <rect x="500" y="116" width="420" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="512" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
</svg>

| Field | What to enter |
|---|---|
| **Group** | Free text. The functional bucket that ties departments together. |
| **AD Department** | Free text. Must match the `department` attribute on an LDAP entry, character for character. |

---

## Tips & best practices

- **Edit this list before adding rows on *Security → LDAP → Settings*** — the Settings page draws its values from here.
- **Validate the spelling against AD** — a mistyped department disappears from the LDAP join silently.
- **Remove pairs that are no longer in use** to keep the dropdowns short.
