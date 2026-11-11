---
title: Entry forms
description: "NomaUBL entry forms: simpler invoice editors defined in Settings — per section and field shown, read-only or hidden, default values, required fields, rule-set warning — granted per role, with a picker in the invoice editor."
keywords: [NomaUBL, entry forms, invoice editor, simple form, required fields, default values, hidden fields, roles, rule set, EN 16931, promotion, JD Edwards, SAP, NetSuite, custom ERP]
---

# Entry forms

An **entry form** is a simpler version of the [invoice editor](../application/invoices.md#create-invoice): for each section and field, it decides whether the field is shown, read-only or hidden, gives a default value and makes a field required. Forms are granted per role, so a customer-service team can enter invoices on a short form while accountants keep the complete editor.

Access: **Settings → Add entry form**; forms are listed under **Views & UI** as *Entry form: name*. The editor stays in English, except the section and field names, which follow the invoice editor's language.

---

## At a glance

<svg viewBox="0 0 1200 606" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ef-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ef-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ef-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ef-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="566" rx="14" fill="url(#ef-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Entry form: simple</text>
  <text x="240" y="74" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENTRY FORM</text>
  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL (ENGLISH)</text>
  <rect x="240" y="96" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="110.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Simple invoice</text>
  <text x="476" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL (FRENCH)</text>
  <rect x="476" y="96" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="110.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Facture simple</text>
  <rect x="712" y="96" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="748.0" y="110.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">👁 Preview</text>
  <text x="240" y="134" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Granted per role (Roles › Actions). A hidden field keeps its value.</text>
  <rect x="240" y="146" width="720" height="30" rx="6" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="252" y="165" fill="#fb923c" fontSize="9" fontFamily="system-ui, sans-serif">Required by the rule set EN 16931, but not editable in this form and without a value: Payment › Payment Means. Show the field…</text>
  <text x="240" y="200" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SECTIONS AND FIELDS</text>
  <rect x="240" y="210" width="720" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="230" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Invoice Header</text>
  <text x="450" y="230" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">5/14 fields</text>
  <rect x="880" y="221" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M882.5,226.5 L884.8,228.8 L888.8,224" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="897" y="230" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Shown</text>
  <rect x="254" y="245" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="271" y="254" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Folded when the editor opens</text>
  <rect x="790" y="242" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="821.0" y="256.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Show all</text>
  <rect x="860" y="242" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="891.0" y="256.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Hide all</text>
  <text x="254" y="286" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">FIELD</text>
  <text x="444" y="286" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">IN THE FORM</text>
  <text x="694" y="286" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">REQUIRED</text>
  <text x="784" y="286" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">DEFAULT VALUE</text>
  <text x="254" y="310" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Invoice Number</text>
  <rect x="444" y="298" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="445" y="299" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="468.5" y="311.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <line x1="493" y1="303" x2="493" y2="313" stroke="#334155" strokeWidth="1"/>
  <text x="527.5" y="311.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <line x1="562" y1="303" x2="562" y2="313" stroke="#334155" strokeWidth="1"/>
  <text x="589.0" y="311.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="303" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="312" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="298" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="311.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="254" y="337" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Issue Date</text>
  <rect x="444" y="325" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="445" y="326" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="468.5" y="338.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <line x1="493" y1="330" x2="493" y2="340" stroke="#334155" strokeWidth="1"/>
  <text x="527.5" y="338.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <line x1="562" y1="330" x2="562" y2="340" stroke="#334155" strokeWidth="1"/>
  <text x="589.0" y="338.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="330" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M700.5,335.5 L702.8,337.8 L706.8,333" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="715" y="339" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="325" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="338.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">today</text>
  <text x="254" y="364" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Due Date</text>
  <rect x="444" y="352" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="445" y="353" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="468.5" y="365.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <line x1="493" y1="357" x2="493" y2="367" stroke="#334155" strokeWidth="1"/>
  <text x="527.5" y="365.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <line x1="562" y1="357" x2="562" y2="367" stroke="#334155" strokeWidth="1"/>
  <text x="589.0" y="365.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="357" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="366" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="352" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="365.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">today+30</text>
  <text x="254" y="391" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Currency</text>
  <rect x="444" y="379" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="468.5" y="392.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <rect x="494" y="380" width="67" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="527.5" y="392.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <line x1="562" y1="384" x2="562" y2="394" stroke="#334155" strokeWidth="1"/>
  <text x="589.0" y="392.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="384" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="393" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="379" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="392.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">EUR</text>
  <text x="254" y="418" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Profile ID</text>
  <rect x="444" y="406" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="468.5" y="419.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <line x1="493" y1="411" x2="493" y2="421" stroke="#334155" strokeWidth="1"/>
  <text x="527.5" y="419.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <rect x="563" y="407" width="52" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="589.0" y="419.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="411" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="420" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="406" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="419.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="254" y="445" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Contract Ref.</text>
  <rect x="444" y="433" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="468.5" y="446.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <line x1="493" y1="438" x2="493" y2="448" stroke="#334155" strokeWidth="1"/>
  <text x="527.5" y="446.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <rect x="563" y="434" width="52" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="589.0" y="446.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="438" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="447" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="433" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="446.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="472" width="720" height="30" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="491" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Customer</text>
  <text x="450" y="491" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">6/15 fields</text>
  <rect x="880" y="482" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M882.5,487.5 L884.8,489.8 L888.8,485" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="897" y="491" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Shown</text>
  <rect x="240" y="508" width="720" height="30" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="527" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Delivery</text>
  <text x="450" y="527" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">0/9 fields</text>
  <rect x="880" y="518" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="897" y="527" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Shown</text>
  <rect x="240" y="544" width="720" height="30" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="563" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Invoice Lines</text>
  <text x="450" y="563" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">7/14 fields</text>
  <text x="946" y="563" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Always shown</text>
  <rect x="20" y="86" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="101" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Labels + Preview</text>
  <text x="30" y="114" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Preview opens the editor</text>
  <line x1="200" y1="103.0" x2="240" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule-set warning</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">required but hidden, no value</text>
  <line x1="200" y1="167.0" x2="240" y2="161" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shown · Read-only · Hidden</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a hidden field keeps its value</text>
  <line x1="200" y1="347.0" x2="444" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
  <rect x="1000" y="214" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="229" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Section shown</text>
  <text x="1010" y="242" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or folded at opening</text>
  <line x1="1000" y1="231.0" x2="880" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Required + default</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">today, today+30, a list value…</text>
  <line x1="1000" y1="347.0" x2="860" y2="334" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
  <rect x="1000" y="490" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="505" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fixed sections</text>
  <text x="1010" y="518" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">keys and lines always shown</text>
  <line x1="1000" y1="507.0" x2="920" y2="555" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
</svg>

---

## Creating a form

**Add entry form** asks for a name and a description; the form is stored as `entry-form-<name>`. A new form starts as the whole editor — every section and field shown — and **Copy** duplicates an existing form.

| Field | Description |
|---|---|
| **Label (English)** · **Label (French)** | Name shown in the editor's picker, in the user's language (English when no French label). |
| **Preview** | Opens the invoice editor on the form as it stands, with Save disabled. |

---

## Sections and fields \{#fields\}

One card per section of the invoice editor: header, customer, delivery, payment, lines… Each card shows *shown/total fields*, a **Shown** box to hide the whole section, **Folded when the editor opens**, and **Show all** / **Hide all**. *Document Keys* and *Invoice Lines* are **Always shown**; *VAT Summary* and *Totals* are computed.

| Column | Description |
|---|---|
| **In the form** | **Shown**, **Read-only** (greyed, no input) or **Hidden**. A hidden field keeps its value and is saved with the invoice, so a simple form never loses data from a rich invoice. |
| **Required** | The save is refused while the field is empty — *Required: …* — on single-value fields; a line field is required on every line. |
| **Default value** | Value of a new invoice (and of each new line for line fields). A list field takes a value of its list; a date takes `today`, `today+N`, `today-N` or a date. |

A section or field added to the editor after the form was saved shows a **new** tag; until the form is saved again, it counts as hidden.

### Warnings \{#warnings\}

- Under a field: *Required, but the user cannot fill it and it has no default.* — required, not shown, without default.
- At the top: *Required by the rule set …, but not editable in this form and without a value: Section › Field, … Show the field or give it a default, or the invoice fails validation.* The check uses the default [rule set](../ubl-tools/xsl-editor.md): every business term it requires must be shown, or have a value.

---

## In the invoice editor \{#in-the-editor\}

- The editor opens on the role's default form. With several forms granted, a picker in its header switches form; what was typed is kept, and only empty fields take the new form's defaults.
- Defaults apply to a new invoice and to each new line. Opening an existing invoice (edit, copy) keeps its values.
- The required check adds to the XSD and Schematron validation; it does not replace it. A form is a convenience of the editor, not a security rule: the server stores the hidden fields like any other.

---

## Access \{#access\}

In the [role editor](./security/roles.md), tab **Actions**, the block **Invoice entry forms** lists *Complete* (the whole editor) and every form. Tick the forms the role may use; with several, **Opens on** picks the one the editor opens on. A role without any form ticked keeps the complete editor.

Forms move between environments by [promotion](../management/promotion.md) (kind *Entry form*); the role grants stay with the roles of each environment.

---

## Tips & best practices

- **Start from the fields the team actually types.** Hide the rest rather than removing it: hidden values stay on the invoice.
- **Give constant values a default and lock them.** A currency, a payment means or a profile shown read-only with a default avoids typing errors.
- **Clear every rule-set warning before granting the form.** A required term the user cannot fill produces invoices that fail validation.
- **Use Preview after each change.** It shows the editor exactly as the role will see it.
