---
title: Notification Rules
description: "Define which invoice status changes generate a notification, what they say, who receives them and through which channels (portal inbox, email, external API call). Each rule is a notification-rule resource saved in config-notifications.json; a synchronous Test panel lets you fire a rule end-to-end before flipping it on for production."
keywords: [NomaUBL, notification rules, notification-rule, trigger, status, rejection reason, channels, portal, email, action, connector, attachPdf, recipientType, JD Edwards, SAP, NetSuite, custom ERP]
---

# Notification Rules

The **Notification Rules** screen is the **write** side of the notification system — a library of `notification-rule` resources that decide:

- **when** a notification fires (status code and / or rejection reason);
- **what** it says (subject and body, or the dispatcher defaults);
- **to whom** (a portal user / role, an email list, or both);
- **on which channels** (portal inbox, e-mail, external API call), with the rendered PDF attached to the e-mail by default.

Rules are matched by `InvoiceStatusCatalog.StatusTransition.apply()` after the database write of every status change, by the manual `SetStatusModal`, and by the CLI flows (`-process`, `-fetch-import`, `-fetch-status`, `-fetch-single`, `-fetch-all`). A failure in dispatch never aborts the underlying status update.

The **read** side of the system — the inbox where users acknowledge notifications and the navbar bell — is documented on the [Notifications](../application/notifications.md) page.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. Triggers reference the standard *statuses* and *rejection-reason-codes* catalogues, not source-system-specific codes.

---

## Opening the editor

- Sidebar → **Management → Notification Rules**.
- A fresh installation ships with no rules — the dispatcher emits nothing until the first rule is created. Use **Add** to create one.

---

## At a glance

<svg viewBox="0 0 1320 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nrlen-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nrlen-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nrlen-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nrlen-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="414" rx="14" fill="url(#nrlen-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Notification Rules</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Define which invoice status/reason changes should notify whom</text>
  <rect x="1036" y="34" width="44" height="22" rx="5" fill="url(#nrlen-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1058.0" y="48.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="975" y="34" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1002.5" y="48.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="925" y="34" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="947.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <rect x="869" y="34" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add</text>
  <rect x="240" y="84" width="200" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="92" width="184" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="106.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="246" y="124" width="188" height="38" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="139" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">pa-rejection</text>
  <text x="254" y="153" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Alert on PA rejection</text>
  <rect x="394" y="134" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="410.0" y="145.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">on</text>
  <rect x="246" y="168" width="188" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="183" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">pa-deposit</text>
  <text x="254" y="197" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">PA deposit confirmation</text>
  <rect x="394" y="178" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="410.0" y="189.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">on</text>
  <rect x="246" y="212" width="188" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="227" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">validation-failure</text>
  <text x="254" y="241" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">XSD / Schematron errors</text>
  <rect x="394" y="222" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="410.0" y="233.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">off</text>
  <rect x="454" y="84" width="626" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="468" y="104" fill="#e2e8f0" fontSize="11.5" fontWeight="700" fontFamily="ui-monospace, monospace">pa-rejection</text>
  <text x="574" y="104" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Alert on PA rejection</text>
  <rect x="454" y="112" width="626" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="466" y="122" width="190" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="474" y="129" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="482.0" y="140.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <text x="496" y="140.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GENERAL</text>
  <text x="475" y="158" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">Active</text>
  <line x1="657" y1="144.0" x2="669" y2="144.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#nrlen-flow)"/>
  <rect x="672" y="122" width="190" height="44" rx="8" fill="rgba(168,85,247,0.14)" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="680" y="129" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="688.0" y="140.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ϟ</text>
  <text x="702" y="140.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRIGGER</text>
  <text x="681" y="158" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">9904, 9907</text>
  <line x1="863" y1="144.0" x2="875" y2="144.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#nrlen-flow)"/>
  <rect x="878" y="122" width="190" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="886" y="129" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="894.0" y="140.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <text x="908" y="140.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANNELS</text>
  <text x="887" y="158" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Portal (bell + inbox), Email</text>
  <rect x="454" y="166" width="626" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="466" y="176" width="190" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="474" y="183" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="482.0" y="194.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✉</text>
  <text x="496" y="194.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EMAIL</text>
  <text x="475" y="212" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sent</text>
  <line x1="657" y1="198.0" x2="669" y2="198.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#nrlen-flow)"/>
  <rect x="672" y="176" width="190" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="680" y="183" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="688.0" y="194.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <text x="702" y="194.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="681" y="212" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1 call(s)</text>
  <line x1="863" y1="198.0" x2="875" y2="198.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#nrlen-flow)"/>
  <rect x="878" y="176" width="190" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="886" y="183" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="894.0" y="194.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="908" y="194.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEST</text>
  <text x="887" y="212" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Try on an invoice</text>
  <line x1="454" y1="230" x2="1080" y2="230" stroke="#1f2937" strokeWidth="1"/>
  <text x="468" y="252" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STATUS CODES</text>
  <rect x="594" y="240" width="48" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="618.0" y="252.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">9904 ×</text>
  <rect x="648" y="240" width="48" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="672.0" y="252.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">9907 ×</text>
  <text x="468" y="282" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REASON CODES</text>
  <rect x="594" y="270" width="63" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="625.5" y="282.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">REJ_ADR ×</text>
  <text x="468" y="312" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIRECTION</text>
  <rect x="594" y="297" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="604" y="311.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Any (issued + received) ▾</text>
  <text x="468" y="342" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Same codes used in the invoice history tab. Empty = match any.</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule list</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on / off pill per rule</text>
  <line x1="200" y1="137.0" x2="248" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrlen-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trigger chips</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">status + reason multi-select</text>
  <line x1="200" y1="307.0" x2="464" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrlen-arrow)"/>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toolbar</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">add / copy / remove / save</text>
  <line x1="1120" y1="47.0" x2="1080" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrlen-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Steps of the rule</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the selected one opens below</text>
  <line x1="1120" y1="137.0" x2="1076" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrlen-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">State per card</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what each part holds</text>
  <line x1="1120" y1="227.0" x2="1076" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrlen-arrow)"/>
</svg>

The page is split between the **rule list** on the left and the **rule editor** on the right. Each rule is a `notification-rule` resource saved in `config-notifications.json`; the dispatcher reloads them at startup and after every save.

---

## Toolbar actions

| Action | Effect |
|---|---|
| **Add** | Opens a modal asking for a name and a description. Creates a new rule in disabled-when-empty state — no trigger, channels defaulted to `portal`, recipient type defaulted to `user`. |
| **Copy** | Duplicates the selected rule under a new name. Convenient for deriving a B2C variant from a B2B rule, or a per-region rule from a generic one. |
| **Remove** | Deletes the selected rule after a confirmation. |
| **Save** | Writes the editor state back to `config-notifications.json` and signals the dispatcher to reload. The next status change picks up the new rule. |

---

## The rule list

Every rule in the catalogue appears with two visual cues:

- **Description** in italic underneath the rule name — the same field the *Add* modal asked for, free text.
- **`on` / `off` pill** at the right of each row — bound to the `enabled` property. A rule with `off` stays in the catalogue but is skipped at dispatch time. Useful while iterating on a rule without losing it.

A search box at the top of the sidebar filters the list by substring on the rule name.

---

## The rule editor

The editor shows the rule as **six step cards** across the top — **General**, **Trigger**, **Channels**, **Email**, **Actions** and **Test** — each with its state in a few words:

| Card | State shown |
|---|---|
| **General** | *Active* (in green) or *Disabled*. |
| **Trigger** | The status codes of the trigger, or *Any status*. |
| **Channels** | The channels ticked (*Portal (bell + inbox)*, *Email*, *API call*), or *None*. |
| **Email** | *Sent* when the email channel is ticked, *Not used* otherwise. |
| **Actions** | The number of connector calls (*2 call(s)*). |
| **Test** | *Try on an invoice*. |

Click a card to edit its fields below the cards. The editor opens on *General* when you switch rules.

### General

| Field | Description |
|---|---|
| **Description** | Free-form sentence shown under the rule name in the rule list. The first place to read what the rule does. |
| **Enabled** | Single checkbox. When off, the rule stays in the catalogue but is skipped at dispatch time. The same value drives the `on` / `off` pill on the rule list. |

### Trigger

The trigger decides **when** the rule fires. Three fields combine, all optional:

| Field | Source | Behaviour |
|---|---|---|
| **Status codes** | *statuses* catalogue | Chip multi-select. The rule fires when the status code of the new transition is in this list. Empty = match every status. |
| **Reason codes** | *rejection-reason-codes* catalogue | Chip multi-select. The rule fires only when the reason code of the new transition is in this list. Empty = match every reason. |
| **Direction** | `Any` *(default)* / `Issued only (sales)` / `Received only (purchases)` | Picks which side of the workflow the rule applies to. `Any` keeps the rule active on both directions. `Issued only` skips the rule on supplier-received invoices; `Received only` skips it on customer-issued ones. Evaluated against the `UHDRIN` flag stored on the row (see [Invoices → Direction chip](../application/invoices.md#direction-chip)). |

Both fields are surfaced as **chip multi-selects** — picking from a dropdown adds a chip; the × on a chip removes it. The dropdown is populated from the same `statuses` and `rejection-reason-codes` resources used by the *Set Status* modal and the invoice *History* tab, so a rule cannot reference a code that the application does not recognise.

When several fields are filled, they all must match (logical AND) for the rule to fire — so a `Status = 207`, `Direction = Received only` rule wires the supplier-side rejection notification without colliding with the customer-side `Status = 207` rule that already exists on the same template.

### Channels

Two delivery channels, plus the recipient settings:

- **`portal`** — writes a row in `F564253` for the recipient. The user sees it in the [Notifications](../application/notifications.md) inbox and the bell.
- **`email`** — sends an SMTP message via the configured `e-invoicing` mail account.

Action calls fire automatically when the rule has at least one entry on the *Actions* card. To suppress action calls, disable the rule on the *General* card.

The recipient model has two independent halves: a **portal target** (user / role) and an **email list**.

| Field | Description |
|---|---|
| **Portal target** | Picks the portal target — `User (by username)`, `Role`, or **Everyone** (empty). *Everyone* writes a single `F564253` row under the `*` sentinel, visible in every inbox — with sign-in enabled or not. |
| **Username / Role name** | The username or role name selected by *Portal target*. Free text — auto-completion comes from the connected database when available. |
| **Email list** | Independent list of e-mail addresses, separated by `,` or `;`. Each address gets its own email (no shared `To:` header). Independent of the portal target above. |

When auth is enabled, a portal target with an email on its `F564250` row also receives the email channel automatically.

### Email

The *Email* card always shows its fields. Whether the rule actually sends an email depends on the `email` checkbox of the *Channels* card — which the *Email* card's state reflects (*Sent* / *Not used*).

| Field | Default | Description |
|---|---|---|
| **Subject** | `Invoice {doc} {dct} {kco} — {statusLabel}` | Subject line. Placeholders are resolved at dispatch time. |
| **Body** | `Status: {statusLabel}\nReason: {reasonLabel}\nAction: {actionLabel}\n{message}` | Plain-text body. Multi-line input. |
| **Attach PDF** | `Y` | Render the invoice PDF (via the resolved `pdf-template`) and attach it to the e-mail. The PDF is rendered once per dispatch and reused across every recipient; a render failure is logged but never fails the e-mail. |

Available placeholders in subject / body: the 10 canonical notification fields — `{doc}`, `{dct}`, `{kco}`, `{statusCode}`, `{statusLabel}`, `{statusMessage}`, `{reasonCode}`, `{reasonLabel}`, `{actionCode}`, `{actionLabel}`, `{ruleName}`, `{message}` — plus `{call.N.fieldName}` for outputs of earlier action calls in this rule (see *Actions* below).

The placeholder set also merges every column from the [Invoices](../application/invoices.md) view's catalog — `{customerName}`, `{contractRef}`, `{totalHT}`, `{currency}`, `{logBusinessUnit}`, `{logPaUuid}`, … — pulled in a single `F564231 LEFT JOIN F564230` SELECT alongside the canonical fields. Amounts are surfaced with two decimals, JDE Julian dates as ISO, CHAR columns trimmed. Canonical fields take precedence when a catalog column happens to share a name, so `{doc}` / `{status}` keep their familiar meaning.

A `{ }` button sits next to the Subject input and the Body textarea. Click it to open a searchable picker of every available placeholder; pick one and the `{name}` snippet splices into the field at the caret (or appends with a leading space when the input is not focused). Escape / outside-click closes.

The portal `NTSUBJ` uses the same subject; the portal `NTMSGE` defaults to just `{statusLabel}` because the inbox UI already shows the doc reference inline — duplicating it in the body would be noise.

### Actions \{#actions-tab\}

The *Actions* card holds a **list** of connector calls. Each call is rendered as a collapsible card. The card header shows the call index (`#1`, `#2`, …) and either the *Description* field or `connector · target` when no description is set; clicking it expands the editor.

| Field | Description |
|---|---|
| **Description** | Free-form short label for the call (e.g. *Update CRM customer status*). Rendered as the collapsed-card header so a binding with several calls reads as a punch-list at a glance. Persisted only as UI metadata. |
| **Connector** | Dropdown listing every `api-connector` and `sql-connector`, merged with `· API` / `· SQL` suffixes so the kind is visible. |
| **Target** | Dropdown loaded from `api.connectors.listEndpoints(connector)` for an API connector, or `api.sqlConnectors.listQueries(connector)` for a SQL connector. Disabled until a connector is picked. |
| **Parameters** | One row per parameter declared by the target, plus an *Add parameter* button for ad-hoc keys. Values may contain `{placeholders}` — see below. |
| **On failure** | Single checkbox. When ticked, a failure on this call halts the chain and skips every remaining call (`STOP · N remaining call(s) skipped` in the audit trail). Default off — the chain continues by default, mirroring the email channel's continue-on-error semantics. |

**+ Add Call** at the bottom of the list appends a new call. New calls auto-expand; loading a rule collapses everything.

#### Placeholders

Parameter values support the same `{placeholders}` as the email subject / body — the 10 canonical fields, every Invoices catalog column, and the `{call.N.fieldName}` form that references the output of an earlier call in the same rule. Each parameter row carries its own `{ }` picker.

#### Response chaining

Every call's outputs are folded back into the dispatch context under `call.N.*` keys, where `N` is the 1-based index of the call within the rule. Subsequent calls reference them as `{call.N.fieldName}` in their parameter values.

| Field | Source — API connector call | Source — SQL connector call |
|---|---|---|
| `call.N.success` | `true` when HTTP status &lt; 400. | `true` when the statement ran without error. |
| `call.N.statusCode` | HTTP status code returned by the endpoint. | — |
| `call.N.statementType` | — | `SELECT` / `INSERT` / `UPDATE` / `DELETE` / `MERGE`. |
| `call.N.rowCount` | — | For `SELECT` — number of rows returned. |
| `call.N.updateCount` | — | For non-`SELECT` — number of rows affected. |
| `call.N.error` | Error message when `success` is `false`. | Same. |
| `call.N.<name>` | Every `endpoint.N.response.<name>` mapping the connector defines. | Every column of the **first row** of the result, by name. |

Example: a rule that first reads the customer's email via a SQL query, then sends a follow-up HTTP webhook, would set the webhook payload's `to` parameter to `{call.1.EMAIL}` (the `EMAIL` column of the first row of call #1).

#### Action calls fire before email

Action calls run **before** the email channel, so a hung SMTP `transport.close()` can never block them. The portal write goes first; emails follow once the action chain has run.

### Test

A synchronous *Test* runner. It accepts a `(doc, dct, kco)` triplet, optionally a status code and a custom message, and **actually fires the rule** through every enabled channel — the portal write lands in the inbox, the action chain executes, the e-mail goes out via SMTP. The resulting banner reports the dispatch counts (`✓ Dispatched · 1 portal · 2 email · 3 action(s) ran`) or the first error.

The test panel does not save the rule — only fires whatever is currently in the form. Use it to validate edits before clicking *Save*.

---

## How a notification gets dispatched

When a status transition is applied (every database write that touches `F564231.UHK74RSCD`), the dispatcher walks the catalogue in three steps.

```text
StatusTransition.apply()
   ↓
NotificationDispatcher.fire(doc, dct, kco, status, reason, action, message)
   ↓ — for each rule where enabled = Y
   ↓     match trigger.status (CSV) ∋ status
   ↓     AND  match trigger.reason (CSV) ∋ reason   (or trigger.reason = '')
   ↓ → resolve recipient (portal target + email list)
   ↓ → render the invoice PDF once if attachPdf = Y
   ↓ → run the action chain (before email, so a hung SMTP can't block it)
   ↓     for each call N in declaration order:
   ↓        api-action  → HTTP call to connector.endpoint with resolved params
   ↓        sql-action  → JDBC call to connector.query with bound :params
   ↓        outputs folded into context under call.N.*
   ↓        if call failed AND stopOnFailure → STOP · skip remaining
   ↓        else continue (continue-on-error default)
   ↓     append per-call audit footer to NTK74MSG2
   ↓ → portal → INSERT into F564253 (with audit footer)
   ↓ → email  → SMTP one message per recipient (transport.close bounded 5s)
   ↓ all exceptions caught — failures never abort the status update
```

The dispatcher uses a singleton with a 2-thread asynchronous worker pool, so the calling code returns immediately. A JVM shutdown hook drains the pool with a 2-second grace before the process dies, so CLI flows that exit right after a status update still deliver their notifications.

Every dispatch emits structured `INFO` lines on stdout: `dispatch rule=X status=Y channels=… actions=N`, then `dispatching N action call(s)`, then `call #N → connector/endpoint`, then `api-action … HTTP 200` / `sql-action … ok (N row(s))`. `WARN` lines mark stop-on-failure hits and slow SMTP closes; `ERROR` lines carry the failure reason. The same audit lines feed the colour-coded chips on the [Notifications](../application/notifications.md) inbox.

---

## REST API

The page reads and writes via the standard template endpoints; the dispatcher exposes one extra route for the test panel.

| Method + path | Purpose |
|---|---|
| `GET /api/templates` | Lists all templates; the page filters by `type = notification-rule`. |
| `GET /api/templates/{name}` | Loads a single rule. |
| `POST /api/templates` | Creates a new rule (Add). |
| `POST /api/templates/{from}/copy/{to}` | Duplicates (Copy). |
| `PUT /api/templates/{name}` | Saves edits. |
| `DELETE /api/templates/{name}` | Removes a rule. |
| `POST /api/notifications/test` | Fires the rule's payload synchronously against every enabled channel — used by the *Test* panel. |

---

## Tips & best practices

- **Start narrow, widen later.** A trigger of `9904 + REJ_ADR` is easier to validate than a catch-all `''`, and you keep the noise low while the recipient list and the body are still being tuned.
- **Use the Test panel before saving.** Especially for the *action* channel — the dispatcher swallows failures, so a misconfigured connector silently no-ops at production time. The test runner surfaces the same error inline.
- **Keep one rule per *purpose*, not per status code.** Group several status codes behind a single rule when the body is identical (`9904, 9907 → Rejected`); split into separate rules only when the recipient list or the body differs.
- **PDFs are heavy.** `attachPdf` renders the invoice once per dispatch — fine for low-volume rules, expensive for fleet-wide alerts. Disable it on rules that fire on `9900` (just-created) or `9901` (validated), where the PDF rarely adds value.
- **Use `role` over `user` whenever possible.** A role-based recipient survives staff changes; a `user`-based one needs an edit each time the assignee leaves. The role list on `F564251` is the source of truth.
- **Disable, don't delete.** While iterating, flip the rule `off` instead of removing it — the catalogue keeps the history, the dispatcher skips it, and the test runner remains available.
- **Read the inbox after a release.** Rules sometimes drift from the codes they reference (a status renamed in the catalogue, a reason retired) — the [Notifications](../application/notifications.md) page is the fastest cross-check that the production catalogue is still consistent with the rules in this page.
