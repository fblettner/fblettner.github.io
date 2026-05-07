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

<svg viewBox="0 0 1000 660" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nrule-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nrule-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nrule-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <linearGradient id="nrule-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.28"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="240" y="20" width="540" height="620" rx="14" fill="url(#nrule-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="262" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Notification Rules</text>
  <rect x="558" y="30" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="580" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">+ Add</text>
  <rect x="606" y="30" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="630" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">⎘ Copy</text>
  <rect x="658" y="30" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="688" y="45" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">🗑 Remove</text>
  <rect x="722" y="30" width="44" height="22" rx="5" fill="url(#nrule-g-blue)" stroke="#4a9eff" strokeWidth="1"/><text x="744" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Save</text>

  <line x1="240" y1="68" x2="780" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="262" y="84" width="180" height="540" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="270" y="92" width="164" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/><text x="278" y="107" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <line x1="262" y1="124" x2="442" y2="124" stroke="#1f2937" strokeWidth="1"/>

  <rect x="262" y="124" width="180" height="50" fill="rgba(255,255,255,0.04)"/>
  <text x="276" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">pa-rejection</text>
  <text x="276" y="156" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Alert on PA rejection</text>
  <rect x="402" y="142" width="32" height="14" rx="7" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/><text x="418" y="152" fill="#4ade80" fontSize="8" fontFamily="ui-monospace, monospace" textAnchor="middle">on</text>

  <line x1="262" y1="174" x2="442" y2="174" stroke="#1f2937" strokeWidth="1"/>
  <text x="276" y="192" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">pa-success</text>
  <text x="276" y="206" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">PA deposit confirmation</text>
  <rect x="402" y="192" width="32" height="14" rx="7" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/><text x="418" y="202" fill="#4ade80" fontSize="8" fontFamily="ui-monospace, monospace" textAnchor="middle">on</text>

  <line x1="262" y1="224" x2="442" y2="224" stroke="#1f2937" strokeWidth="1"/>
  <text x="276" y="242" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">validation-failure</text>
  <text x="276" y="256" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">XSD / Schematron errors</text>
  <rect x="402" y="242" width="40" height="14" rx="7" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/><text x="422" y="252" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace" textAnchor="middle">off</text>

  <rect x="462" y="84" width="298" height="540" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="470" y="92" width="282" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="113" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">pa-rejection</text>
  <text x="566" y="113" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">Alert on PA rejection</text>

  <text x="478" y="148" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">TRIGGER</text>
  <text x="478" y="170" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Status</text>
  <rect x="540" y="160" width="60" height="16" rx="8" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="570" y="171" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9904 ×</text>
  <rect x="606" y="160" width="60" height="16" rx="8" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="636" y="171" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9907 ×</text>
  <text x="478" y="194" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Reason</text>
  <rect x="540" y="184" width="80" height="16" rx="8" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="580" y="195" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">REJ_ADR ×</text>

  <text x="478" y="226" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">CHANNELS</text>
  <rect x="478" y="232" width="58" height="20" rx="10" fill="url(#nrule-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="507" y="246" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">☑ portal</text>
  <rect x="540" y="232" width="56" height="20" rx="10" fill="url(#nrule-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="568" y="246" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">☑ email</text>
  <rect x="600" y="232" width="58" height="20" rx="10" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="629" y="246" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">☐ action</text>

  <text x="478" y="278" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">RECIPIENT</text>
  <text x="478" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Type</text>
  <rect x="540" y="288" width="80" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="546" y="302" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">role ▾</text>
  <text x="478" y="320" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Value</text>
  <rect x="540" y="310" width="200" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="548" y="324" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">accountants</text>
  <text x="478" y="340" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">CC</text>
  <rect x="540" y="332" width="200" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="548" y="346" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">supervisor@nomana-it.fr</text>

  <text x="478" y="380" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">EMAIL CONTENT</text>
  <text x="478" y="400" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Subject</text>
  <rect x="540" y="390" width="200" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="548" y="404" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Invoice &#123;doc&#125; &#123;dct&#125; &#123;kco&#125; — Rejected</text>
  <text x="478" y="420" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Body</text>
  <rect x="540" y="412" width="200" height="34" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="548" y="426" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Status: &#123;statusLabel&#125;</text>
  <text x="548" y="438" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Reason: &#123;reasonLabel&#125;</text>
  <rect x="540" y="450" width="14" height="14" rx="3" fill="url(#nrule-g-green)" stroke="#4ade80" strokeWidth="1"/>
  <text x="558" y="461" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">attachPdf · attach the rendered invoice</text>

  <text x="478" y="496" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">ACTION CALL · disabled</text>
  <text x="478" y="516" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">Connector / endpoint / params — only when ☑ action above</text>

  <text x="478" y="552" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">TEST</text>
  <rect x="478" y="560" width="60" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="574" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">12345</text>
  <rect x="544" y="560" width="40" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="552" y="574" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">RI</text>
  <rect x="590" y="560" width="60" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="598" y="574" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00070</text>
  <rect x="656" y="560" width="84" height="20" rx="4" fill="url(#nrule-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="698" y="574" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">▶ Run test</text>

  <rect x="478" y="592" width="262" height="20" rx="4" fill="rgba(74,222,128,0.10)" stroke="#4ade80" strokeWidth="1"/>
  <text x="488" y="606" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ Dispatched · 1 portal · 2 email</text>

  <rect x="20" y="36" width="200" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="52" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Toolbar</text>
  <text x="30" y="65" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">add / copy / remove / save</text>
  <line x1="220" y1="50" x2="240" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="20" y="138" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="154" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Rule list</text>
  <text x="30" y="167" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on / off pill per row</text>
  <line x1="220" y1="156" x2="262" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="800" y="148" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="164" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Trigger chips</text>
  <text x="810" y="177" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">status + reason multi-select</text>
  <line x1="800" y1="166" x2="690" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="800" y="232" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="248" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Channels</text>
  <text x="810" y="261" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">portal · email · action</text>
  <line x1="800" y1="250" x2="660" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="20" y="296" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="312" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Recipient</text>
  <text x="30" y="325" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">portal target + email list</text>
  <line x1="220" y1="314" x2="478" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="800" y="396" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="412" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Subject + body</text>
  <text x="810" y="425" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;placeholders&#125; resolved live</text>
  <line x1="800" y1="414" x2="744" y2="402" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="20" y="552" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="568" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Test panel</text>
  <text x="30" y="581" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fires the rule end-to-end</text>
  <line x1="220" y1="570" x2="478" y2="570" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>
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

The editor is structured as four section groups plus a synchronous test panel.

### Trigger

The trigger decides **when** the rule fires. Two fields combine, both optional:

| Field | Source | Behaviour |
|---|---|---|
| **Status** | *statuses* catalogue | Comma-separated list of status codes (e.g. `9904,9907`). The rule fires when the status code of the new transition is in this list. Empty = match every status. |
| **Reason** | *rejection-reason-codes* catalogue | Comma-separated list of rejection-reason codes (e.g. `REJ_ADR,REJ_FMT`). The rule fires only when the reason code of the new transition is in this list. Empty = match every reason. |

Both fields are surfaced as **chip multi-selects** — picking from a dropdown adds a chip; the × on a chip removes it. The dropdown is populated from the same `statuses` and `rejection-reason-codes` resources used by the *Set Status* modal and the invoice *History* tab, so a rule cannot reference a code that the application does not recognise.

When both fields are filled, both must match (logical AND) for the rule to fire.

### Channels

Three boxes, any combination:

- **`portal`** — writes a row in `F564253` for the recipient. The user sees it in the [Notifications](../application/notifications.md) inbox and the bell.
- **`email`** — sends an SMTP message via the configured `e-invoicing` mail account.
- **`action`** — fires an outbound HTTP call against an *API Connector* endpoint.

A rule that emits zero channels is useless and rejected at save time.

### Recipient

The recipient model has two independent halves: a **portal target** and an **email list**.

| Field | Description |
|---|---|
| **Type** | Picks the portal target — `user` (a single F564250 username), `role` (every user that carries this role on their `URROLE` value), or empty. When auth is disabled, the empty option reads *Broadcast — all portal users* and writes a single `F564253` row under the `*` sentinel. |
| **Value** | The username or role name selected by *Type*. Free text — auto-completion comes from the connected database when available. |
| **CC** | Independent list of e-mail addresses, separated by `,` or `;`. Each address goes on the `To:` header of the dispatched email. The portal target's `USEMAIL`, when present on its `F564250` row, is added automatically. |

When the portal target carries a `USEMAIL`, the *email* channel sends to both that address and every entry in **CC** in a **single SMTP transaction**. When the F564250 lookup fails, the portal channel still emits (the row is keyed by the literal username), so the inbox stays populated even during a transient database outage.

### Email content

| Field | Default | Description |
|---|---|---|
| **Subject** | `Invoice {doc} {dct} {kco} — {statusLabel}` | Subject line. Placeholders are resolved at dispatch time. |
| **Body** | `Status: {statusLabel}` `\n` `Reason: {reasonLabel}` `\n` `Action: {actionLabel}` | Plain-text body. Multi-line input. |
| **Attach PDF** | `Y` | Render the invoice PDF (via the resolved `pdf-template`) and attach it to the e-mail. The PDF is rendered once per dispatch and reused across every recipient; a render failure is logged but never fails the e-mail. |

Available placeholders in subject / body: `{doc}`, `{dct}`, `{kco}`, `{statusCode}`, `{statusLabel}`, `{statusMessage}`, `{reasonCode}`, `{reasonLabel}`, `{actionCode}`, `{actionLabel}`, `{ruleName}`, `{message}`.

The portal `NTSUBJ` uses the same subject; the portal `NTMSGE` defaults to just `{statusLabel}` because the inbox UI already shows the doc reference inline — duplicating it in the body would be noise.

### Action call

When the **`action`** channel is enabled, three additional rows appear:

| Field | Description |
|---|---|
| **Connector** | Dropdown listing every `api-connector` template. Same set as on [Process API](../processing/process-api.md). |
| **Endpoint** | Dropdown populated by `api.connectors.listEndpoints(connector)` once a connector is picked. |
| **Parameters** | Pre-populated from the endpoint's defined parameter list. Each row carries a key (locked) and a value (editable). Values may contain the same `{placeholders}` as the e-mail subject / body. |

The action call is fired in the same dispatch transaction as the portal write and the e-mail send. Failures are logged and do not abort the underlying status update or the other channels.

### Test panel

A synchronous *Test* runner sits at the bottom of the form. It accepts a `(doc, dct, kco)` triplet, optionally a status code and a custom message, and **actually fires the rule** through every enabled channel — the portal write lands in the inbox, the e-mail goes out via SMTP, the action call is made. The resulting banner reports the dispatch counts (`✓ Dispatched · 1 portal · 2 email`) or the first error.

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
   ↓ — for each enabled channel:
   ↓     • portal → INSERT into F564253
   ↓     • email  → SMTP one message with everyone on To:
   ↓     • action → HTTP call to connector.endpoint with resolved params
   ↓ all exceptions caught — failures never abort the status update
```

The dispatcher uses a singleton with a 2-thread asynchronous worker pool, so the calling code returns immediately. A JVM shutdown hook drains the pool with a 2-second grace before the process dies, so CLI flows that exit right after a status update still deliver their notifications.

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
