---
title: Action Bindings
description: "Bind the regulatory seller actions surfaced in the invoice detail modal — Payment Received, Credit Note, Corrected Invoice, Send Completed, Cancel Accounting, New Invoice, Resend to PA — to one or more API or SQL connector calls. Per-binding multi-call list with Stop on failure flag, response chaining via {call.N.fieldName}, and a Scope selector that lets each company override the default e-invoicing template."
keywords: [NomaUBL, action bindings, actions, regulatory actions, invoice modal, paymentReceived, creditNote, correctedInvoice, sendCompleted, cancelAccounting, newInvoice, resendPA, API connector, SQL connector, multi-call, response chaining, stop on failure, e-invoicing, JD Edwards, SAP, NetSuite, custom ERP]
---

# Action Bindings

The **Action Bindings** screen is where the **regulatory seller actions** — the buttons that appear inside the invoice detail modal depending on the invoice status — are wired to a sequence of connector calls. *Resend to PA* on a `9904` invoice has to call the PA again, *Payment Received* on a `204` may need to update the source ERP and notify the buyer, *Credit Note* on a `206` may run a SQL query that flags the rejected line. The list of actions is fixed by the French e-invoicing regulation; what runs when the user clicks them is configured here.

The page is on the same footing as [Notification Rules](./notification-rules.md): both surfaces hold a multi-call list of connector calls with the same `Description / Connector / Target / Parameters / Stop on failure` shape and the same `{call.N.fieldName}` response-chaining contract.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The connector dropdown lists every API and SQL connector merged with `· API` / `· SQL` suffixes, so the kind is visible at a glance.

---

## Opening the editor

- Sidebar → **Management → Action Bindings**.
- The page opens on the **default `e-invoicing` template**. Use the *Scope* selector to switch to a per-company override (`e-invoicing-{kco}`) — the binding list reloads from the selected template; the Save button writes back to the same scope.

---

## At a glance

<svg viewBox="0 0 1200 506" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="acben-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="acben-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="acben-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="acben-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="470" rx="14" fill="url(#acben-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Action Bindings</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Bind regulatory seller actions to connector calls. Unbound actions appear disabled.</text>
  <rect x="810" y="34" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="850.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Refresh</text>
  <rect x="896" y="34" width="64" height="22" rx="5" fill="url(#acben-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="928.0" y="48.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <text x="240" y="104" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Scope</text>
  <rect x="290" y="90" width="240" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="300" y="104.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Default (e-invoicing) ▾</text>
  <rect x="240" y="124" width="720" height="344" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="146" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Action</text>
  <rect x="310" y="132" width="600" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="320" y="146.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Resend to PA (status 9904/9907) ▾</text>
  <rect x="920" y="132" width="28" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="934.0" y="146.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="240" y="162" width="720" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="252" y="172" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="179" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268.0" y="190.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☝</text>
  <text x="282" y="190.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUTTON</text>
  <text x="261" y="208" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Resend to PA (status 9904/9…</text>
  <line x1="415" y1="194.0" x2="427" y2="194.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#acben-flow)"/>
  <rect x="430" y="172" width="162" height="44" rx="8" fill="rgba(255,159,10,0.14)" stroke="#fb923c" strokeWidth="1.3"/>
  <rect x="438" y="179" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="446.0" y="190.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <text x="460" y="190.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CALL #1</text>
  <text x="439" y="208" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Re-submit invoice to PA</text>
  <line x1="593" y1="194.0" x2="605" y2="194.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#acben-flow)"/>
  <rect x="608" y="172" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="616" y="179" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="624.0" y="190.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <text x="638" y="190.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CALL #2</text>
  <text x="617" y="208" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Audit row in the ERP</text>
  <line x1="771" y1="194.0" x2="783" y2="194.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#acben-flow)"/>
  <rect x="786" y="172" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="794" y="179" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="802.0" y="190.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <text x="816" y="190.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CALL #3</text>
  <text x="795" y="208" fill="#f87171" fontSize="9" fontFamily="system-ui, sans-serif">unconfigured call</text>
  <line x1="240" y1="226" x2="960" y2="226" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="236" width="700" height="128" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="254" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Call #1</text>
  <text x="330" y="254" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Re-submit invoice to PA</text>
  <text x="262" y="278" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="350" y="265" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="279.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">my-pa · API ▾</text>
  <text x="550" y="278" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINT</text>
  <rect x="610" y="265" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="620" y="279.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">import — POST /invoices ▾</text>
  <text x="262" y="308" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <rect x="350" y="295" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="309.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">ublNumber  |  &#123;&#123;ublNumber&#125;&#125;</text>
  <rect x="262" y="335" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M264.5,340.5 L266.8,342.8 L270.8,338" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="279" y="344" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Stop the chain on failure (skip remaining calls)</text>
  <text x="262" y="388" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Call #2</text>
  <text x="330" y="388" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Audit row in the ERP</text>
  <rect x="252" y="402" width="120" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="312.0" y="416.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add Call</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Scope selector</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">default + per-company overrides</text>
  <line x1="200" y1="107.0" x2="236" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acben-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Button first</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the action the binding answers</text>
  <line x1="200" y1="177.0" x2="260" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acben-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Opened call</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click a call card to open it</text>
  <line x1="200" y1="307.0" x2="252" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acben-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Calls as a chain</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">run in order, &#123;call.N.field&#125;</text>
  <line x1="1000" y1="157.0" x2="640" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acben-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Call to complete</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no connector or target yet</text>
  <line x1="1000" y1="247.0" x2="920" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acben-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Stop on failure</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">halts the chain at first error</text>
  <line x1="1000" y1="347.0" x2="570" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acben-arrow)"/>
</svg>

---

## Scope selector

The Scope selector at the top of the page picks **which template** the bindings are saved against:

| Scope | Template | Effect |
|---|---|---|
| **Default (e-invoicing)** | `e-invoicing` | The fallback bindings every company inherits. Edit here when the same call sequence applies platform-wide. |
| **Company `00070` (e-invoicing-00070)** | `e-invoicing-00070` | Per-company override. Listed in the dropdown for every `e-invoicing-{kco}` template that exists. The runtime resolver looks up the per-company template first and falls back to the default — a binding present in both is overridden by the per-company one. |

The list of available company overrides is read from the templates catalogue: any template named `e-invoicing-{kco}` shows up as `Company {kco}`. To create one, copy the default `e-invoicing` template under the new name from *Settings*; this page then loads the new scope when picked.

The *Save* button writes back to the **selected scope only** — switching scope before saving discards unsaved edits to the previous one. The *Unsaved changes* badge appears next to the scope selector when the in-memory state diverges from what is on disk.

---

## The action list

Each binding is rendered as a card. The card carries an **Action** dropdown at the top (locked to the seven regulatory IDs below) with a per-binding 🗑 delete button, then the binding drawn as a **chain**: a **Button** card naming the action, followed by one card per call (*Call #1*, *Call #2*, …) in the order they run. Below the chain, each call has its collapsible sub-card with its fields.

### Regulatory action IDs

The dropdown lists seven IDs — the same buttons the invoice detail modal renders status-aware in the *Actions* tab. An action without a binding shows as **disabled** in the modal.

| Action ID | Label | Triggered on status |
|---|---|---|
| `paymentReceived` | **Payment Received** | `205` (the regulatory status for *Encaissement constaté*). |
| `creditNote` | **Credit Note** | `206` / `207` (rejected by the buyer, reissue as a credit note). |
| `correctedInvoice` | **Corrected Invoice** | `206` / `207` (reissue with corrections instead of a credit note). |
| `sendCompleted` | **Send Completed** | `208` (suspended-by-buyer, mark the in-progress flow as resolved). |
| `cancelAccounting` | **Cancel Accounting** | `210` / `213` (litigation, reverse the accounting entry). |
| `newInvoice` | **New Invoice** | `213` (litigation closed, issue a fresh invoice for the same delivery). |
| `resendPA` | **Resend to PA** | `9904` / `9907` (PA technical rejection, resubmit the same UBL). |

Each ID can be bound at most once **per scope**. The dropdown filters out IDs that are already bound, so accidental duplicates are not possible. Removing a binding frees the ID for reuse.

### Calls list

Below the Action ID, the binding holds a **list of connector calls**, shown twice:

- **In the chain** — one card per call after the *Button* card, showing the *Description* field, or `connector · endpoint` when the description is empty. A call with no connector or no endpoint yet shows in red (*unconfigured call* when nothing is set). Click a call card to open or close that call's sub-card.
- **As collapsible sub-cards** below the chain — the header shows the call index (`#1`, `#2`, …) and the same summary; click it to expand the fields.

| Field | Description |
|---|---|
| **Description** | Free-form short label for this call (e.g. *Update CRM customer status*). Rendered as the collapsed-card header so a binding with several calls reads as a punch-list at a glance. Persisted only as UI metadata. |
| **Connector** | Dropdown listing every API and SQL connector merged with `· API` / `· SQL` suffixes so the kind is visible. |
| **Endpoint** | Dropdown loaded from `api.connectors.listEndpoints(connector)` for an API connector, or `api.sqlConnectors.listQueries(connector)` for a SQL connector. Disabled until a connector is picked. |
| **Parameters** | Pre-populated from the target's declared parameters, one labelled row per parameter. Values can mix free text and `{{placeholder}}` tokens. When the target declares no parameters, a free-form *Params* row replaces the per-row layout. |
| **On failure** | Single checkbox. When ticked, a failure on this call **halts the chain** and skips every remaining call. Default off — the chain continues by default, the same continue-on-error behaviour as notification rules. |

**+ Add Call** at the bottom of each binding appends a new call. Newly-added calls auto-expand for editing; loading a binding from disk collapses every call so the page reads as a quick overview.

### Placeholders — invoice values

Parameter values support placeholders that are resolved at click time from the row the user is acting on. Both `{field}` (single-brace, the syntax inserted by the `{ }` picker) and the legacy `{{field}}` work — unknown tokens pass through verbatim so a typo surfaces at runtime rather than being silently emptied.

Each parameter row gets a `{ }` picker next to its value input. Click it to open a searchable list of every available placeholder; pick one and the snippet splices into the field at the caret. The list merges the 10 canonical fields below with every column of the [Invoices](../application/invoices.md) view's catalog (`{customerName}`, `{contractRef}`, `{logBusinessUnit}`, `{logPaUuid}`, …) so a call to a downstream system does not need bespoke wiring.

| Placeholder | Source |
|---|---|
| `{{fedoc}}` | Document number (`UHDOC` / `UHFEDOC`). |
| `{{fedct}}` | Document type (`UHDCT`). |
| `{{kco}}` | Company code (`UHKCO`). |
| `{{ublNumber}}` | UBL identifier of the invoice (`UHK74UBLNB`). |
| `{{statusCode}}` | Current status code (`UHK74RSCD`). |
| `{{customerName}}` | Customer name (`UHALPH`). |
| `{{totalHT}}` | Total amount before VAT. |
| `{{totalTTC}}` | Total amount including VAT. |
| `{{currency}}` | ISO 4217 currency code. |
| `{{amountDue}}` | Outstanding balance. |
| `{{invoiceType}}` | Document UBL invoice type (`380`, `381`, …). |
| `{{orderRef}}` | Customer purchase-order reference. |
| `{{contractRef}}` | Customer contract reference. |
| `{{message}}` | Full status message returned by the platform. |
| `{{reasonLabel}}` | Current rejection reason (label). |
| `{{actionLabel}}` | Current expected action (label). |
| `{{actionNote}}` | Current status note. |

Free text and placeholders can mix — `Y;reason={statusCode}` is a valid value.

### Response chaining

When the binding holds two or more calls, every call's outputs are folded back into the dispatch context under `call.N.*` keys, and subsequent calls reference them with `{call.N.fieldName}` placeholders in their parameter values.

| Field | Source — API connector call | Source — SQL connector call |
|---|---|---|
| `call.N.success` | `true` when HTTP status &lt; 400. | `true` when the statement ran without error. |
| `call.N.statusCode` | HTTP status code returned by the endpoint. | — |
| `call.N.statementType` | — | `SELECT` / `INSERT` / `UPDATE` / `DELETE` / `MERGE`. |
| `call.N.rowCount` | — | For `SELECT` — number of rows returned. |
| `call.N.updateCount` | — | For non-`SELECT` — number of rows affected. |
| `call.N.error` | Error message when `success` is `false`. | Same. |
| `call.N.<name>` | Every `endpoint.N.response.<name>` mapping the connector defines. | Every column of the **first row** of the result, by name. |

Example: a *Resend to PA* binding that first re-submits the invoice to the PA via an API call, then writes an audit row in the source ERP via a SQL call, sets the SQL parameter `submission_uuid` to `{call.1.uuid}` (the `uuid` field of the API connector's response mapping). If the API call fails and *Stop on failure* is ticked, the SQL call never runs and the audit trail records `STOP · 1 remaining call(s) skipped`.

---

## Custom actions \{#custom-actions\}

A **Custom Actions** section sits below the regulatory bindings. Each entry is a free-form button that appears in the invoice detail modal under a *Custom actions* group — independent of the invoice's status. Use it for operator workflows that do not map to a regulatory transition: push the invoice to a CRM, notify a Slack channel, post to a finance API, …

Each custom action carries:

| Field | Description |
|---|---|
| **ID** | Free-form identifier (e.g. `pushToCrm`). Stored as `customAction.N.id`. The picker prevents duplicates within a scope. |
| **Label** | Button text shown in the modal (e.g. *Push to CRM*). Stored as `customAction.N.label`. |
| **Direction** | `Any` *(default)* / `Issued only (sales)` / `Received only (purchases)`. Empty = the button is visible on both sides. When set, the button is hidden on invoices of the other direction — so an emit-side *Sync to CRM* and a receive-side *Mark as paid* can live on the same template and the detail modal only surfaces what makes sense for the current invoice. Evaluated against the `UHDRIN` flag stored on the row. |
| **Statuses** | Optional list of status codes the button is limited to. Empty = every status. Set it so a *Create case* button only appears on rejected invoices, for example. |
| **Calls list** | Same chain (the *Button* card shows the label, else the ID, else *No label*) and call-card editor as regulatory bindings — connector, endpoint / query, parameters, optional *Stop on failure*. The same `{call.N.fieldName}` response-chaining contract applies. |

**+ Add custom action** at the bottom of the section appends a new entry. Remove with the per-row 🗑 button.

In the invoice detail modal, custom actions render in their own `ActionsSection` beneath the preset seller actions. A button appears only on invoices matching its **Statuses** filter (and its **Direction**); leave the filter empty to show it on every status. The result banner is anchored to the group whose button fired the chain (`actionResult.source` field), and is cleared automatically when the modal closes or switches invoice — stale banners do not carry over.

Clicking a custom action first opens a **review window** listing every value about to be sent — resolved from the invoice, and **editable** — with **Run** and **Cancel**. Adjust a value (for example the `{message}` sent to the downstream system) before it goes out, or cancel without any call being made. Alongside the invoice fields in *Placeholders* above, the review resolves the current status details — `{message}`, `{reasonLabel}`, `{actionLabel}`, `{actionNote}` — so a case opened from a rejection carries the platform's own wording.

---

## How a binding fires

When the user clicks an action button in the invoice detail modal:

1. The frontend resolves the per-company template first (`e-invoicing-{kco}`) and falls back to `e-invoicing` if no override exists.
2. The matching `action.N` block on that template is read; if no binding is found, the modal disables the button (the click never reaches step 3).
3. The bound calls fire **in declaration order**. Each call goes through `executeConnectorAction`, which routes to `/api/connectors/{name}/call/{endpoint}` for an API connector or `/api/sql-connectors/{name}/call/{query}` for a SQL connector.
4. Outputs are folded into `call.N.*`. The next call's `{{placeholder}}` and `{call.N.…}` values are resolved against the merged context.
5. A `FAIL` on a call with *Stop on failure* halts the chain and reports `STOP · N remaining call(s) skipped`. Otherwise the chain continues with the next call.
6. The aggregate result is surfaced in a banner inside the invoice modal — *Action complete · 2 of 2 calls succeeded* on success, the failure reason on error.

The dispatch is synchronous; the modal stays open until every call has returned. Long-running SQL queries are bounded by the SQL connector's *Query timeout* setting; long-running HTTP calls are bounded by the API connector's *Default timeout*.

---

## Tips & best practices

- **Start at the default scope.** Configure `e-invoicing` first, override per company only when one customer needs a different connector or extra parameter. The fallback resolver keeps the picture readable.
- **One purpose per binding.** *Resend to PA* should not also update the ERP and notify finance — split into separate calls inside the same binding instead. The *Description* field on each call makes the chain readable from the collapsed view.
- **Use *Stop on failure* on the upstream call only.** A typical chain is `submit to PA · audit in ERP · notify finance`. Tick *Stop on failure* on the first call only — if the PA submission fails, the audit row is meaningless. Failures on the audit step or the notification step are not reasons to skip the rest.
- **Reference earlier calls with `{call.N.fieldName}`.** A SQL audit row that needs the PA submission UUID grabs it from `{call.1.uuid}` rather than re-querying the PA. The chain stays consistent on retries.
- **Test with the same scope you will use.** A binding saved against `e-invoicing` but tested against an invoice on company `00070` runs the per-company override if one exists — switch scope first when validating.
- **Preserve `{{placeholder}}` exactness.** The placeholder names listed above are the only ones the runtime substitutes; a typo (`{{customer}}` instead of `{{customerName}}`) is left as the literal string and shipped to the connector as-is. The Test panel on the connector pages catches the mismatch.
- **Disable a binding by clearing it.** There is no enabled / disabled flag — to suspend an action, remove its binding (the button greys out in the modal) or remove the offending call (the rest of the chain still runs).
