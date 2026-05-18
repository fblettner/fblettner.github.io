---
title: Action Bindings
description: "Bind the regulatory seller actions surfaced in the invoice detail modal — Payment Received, Credit Note, Corrected Invoice, Send Completed, Cancel Accounting, New Invoice, Resend to PA — to one or more API or SQL connector calls. Per-binding multi-call list with Stop on failure flag, response chaining via {call.N.fieldName}, and a Scope selector that lets each company override the default e-invoicing template."
keywords: [NomaUBL, action bindings, actions, regulatory actions, invoice modal, paymentReceived, creditNote, correctedInvoice, sendCompleted, cancelAccounting, newInvoice, resendPA, API connector, SQL connector, multi-call, response chaining, stop on failure, e-invoicing, JD Edwards, SAP, NetSuite, custom ERP]
---

# Action Bindings

The **Action Bindings** screen is where the **regulatory seller actions** — the buttons that appear inside the invoice detail modal depending on the invoice status — are wired to a sequence of connector calls. *Resend to PA* on a `9904` invoice has to call the PA again, *Payment Received* on a `204` may need to update the source ERP and notify the buyer, *Credit Note* on a `206` may run a SQL query that flags the rejected line. The list of actions is fixed by the French e-invoicing regulation; what runs when the user clicks them is configured here.

The page is on the same footing as [Notification Rules](./notification-rules.md): both surfaces hold a multi-call list of connector calls with the same `Description / Connector / Target / Parameters / Stop on failure` shape and the same `{call.N.fieldName}` response-chaining contract.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The connector dropdown lists every API and SQL connector merged with `· API` / `· SQL` suffixes, so the kind is visible at a glance.

:::info[Refreshed in 2026.05.7]
Action bindings used to hold a **single** call per action. Since 2026.05.7 each binding holds a **list** of connector calls, with a per-call *Stop on failure* flag, response chaining via `{call.N.fieldName}` placeholders, and SQL-connector support next to api-connector. Existing single-call bindings keep working — the legacy flat keys are read into a one-entry call list on load and rewritten into the canonical `action.N.call.M.*` shape on the next save. See the [2026.05.7 release notes](../release-notes.md#v2026-05-7) for the full list.
:::

---

## Opening the editor

- Sidebar → **Management → Action Bindings**.
- The page opens on the **default `e-invoicing` template**. Use the *Scope* selector to switch to a per-company override (`e-invoicing-{kco}`) — the binding list reloads from the selected template; the Save button writes back to the same scope.

---

## At a glance

<svg viewBox="0 0 1000 660" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="action-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="action-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="action-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="620" rx="14" fill="url(#action-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Action Bindings</text>
  <rect x="608" y="30" width="68" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="642" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Refresh</text>
  <rect x="680" y="30" width="100" height="22" rx="5" fill="url(#action-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="730" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Save</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="10" letterSpacing="0.06em" fontFamily="system-ui, sans-serif" fontWeight="700">SCOPE</text>
  <rect x="288" y="80" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="95" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">Default (e-invoicing) ▾</text>
  <text x="500" y="95" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">switch to e-invoicing-00070 to override per company</text>

  <rect x="240" y="116" width="540" height="220" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="138" fill="#94a3b8" fontSize="10" letterSpacing="0.06em" fontFamily="system-ui, sans-serif" fontWeight="700">ACTION</text>
  <rect x="306" y="126" width="280" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="316" y="141" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">Resend to PA (status 9904 / 9907) ▾</text>
  <rect x="600" y="126" width="22" height="22" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="611" y="141" fill="#f87171" fontSize="11" textAnchor="middle">🗑</text>

  <rect x="252" y="158" width="528" height="32" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="266" y="178" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▾</text>
  <text x="284" y="178" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Call #1</text>
  <text x="328" y="178" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Re-submit invoice to PA via api-connector</text>
  <rect x="754" y="166" width="22" height="22" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="765" y="181" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <text x="266" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="266" y="214" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="276" y="229" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">my-pa · API ▾</text>
  <text x="476" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TARGET</text>
  <rect x="476" y="214" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="229" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">import — POST /invoices ▾</text>

  <text x="266" y="252" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <rect x="266" y="258" width="510" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="276" y="273" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UBL number   |  &#123;&#123;ublNumber&#125;&#125;</text>
  <rect x="266" y="282" width="510" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="276" y="297" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Force resend |  Y</text>

  <rect x="266" y="312" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="273" y="323" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="288" y="323" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Stop the chain on failure (skip remaining calls)</text>

  <rect x="252" y="346" width="528" height="32" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="366" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="284" y="366" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Call #2</text>
  <text x="328" y="366" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Audit row in source ERP via sql-connector</text>
  <rect x="588" y="354" width="60" height="16" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="618" y="365" fill="rgb(255,159,10)" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SQL</text>
  <rect x="754" y="354" width="22" height="22" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="765" y="369" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="252" y="386" width="160" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="332" y="401" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Add Call</text>
  <text x="424" y="401" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">Calls run in order. Reference earlier outputs with {`{call.N.fieldName}`}.</text>

  <rect x="240" y="426" width="540" height="180" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="448" fill="#94a3b8" fontSize="10" letterSpacing="0.06em" fontFamily="system-ui, sans-serif" fontWeight="700">ACTION</text>
  <rect x="306" y="436" width="280" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="316" y="451" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">Payment Received (status 205) ▾</text>

  <rect x="252" y="468" width="528" height="32" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="488" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="284" y="488" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Call #1</text>
  <text x="328" y="488" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Update payment status in CRM</text>

  <rect x="252" y="508" width="528" height="32" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="528" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="284" y="528" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Call #2</text>
  <text x="328" y="528" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Notify buyer via email webhook — uses {`{call.1.confirmationId}`}</text>

  <rect x="240" y="618" width="540" height="20" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="510" y="632" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Add Binding</text>

  <rect x="20" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Scope selector</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">default + per-company overrides</text>
  <line x1="220" y1="96" x2="288" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>

  <rect x="820" y="118" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Action ID</text>
  <text x="830" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7 regulatory ids, fixed list</text>
  <line x1="820" y1="134" x2="586" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>

  <rect x="20" y="166" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="181" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Multi-call list</text>
  <text x="30" y="194" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">collapsible cards · runs in order</text>
  <line x1="220" y1="182" x2="252" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>

  <rect x="820" y="270" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">{`{{placeholder}}`} values</text>
  <text x="830" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">resolved at click time</text>
  <line x1="820" y1="286" x2="780" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>

  <rect x="20" y="310" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Stop on failure</text>
  <text x="30" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">halts the chain at first error</text>
  <line x1="220" y1="326" x2="266" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>

  <rect x="820" y="510" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="525" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Response chaining</text>
  <text x="830" y="538" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">{`{call.N.fieldName}`} from earlier calls</text>
  <line x1="820" y1="526" x2="780" y2="524" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>
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

Each binding is rendered as a card. The card carries an **Action** dropdown at the top (locked to the seven regulatory IDs below), a list of connector calls in collapsible sub-cards, and a per-binding 🗑 delete button.

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

Below the Action ID, the binding holds a **list of connector calls** rendered as collapsible cards. The card header shows the call index (`#1`, `#2`, …) and either the *Description* field or `connector · target` when the description is empty.

| Field | Description |
|---|---|
| **Description** | Free-form short label for this call (e.g. *Update CRM customer status*). Rendered as the collapsed-card header so a binding with several calls reads as a punch-list at a glance. Persisted only as UI metadata. |
| **Connector** | Dropdown listing every API and SQL connector merged with `· API` / `· SQL` suffixes so the kind is visible. |
| **Target** | Dropdown loaded from `api.connectors.listEndpoints(connector)` for an API connector, or `api.sqlConnectors.listQueries(connector)` for a SQL connector. Disabled until a connector is picked. |
| **Parameters** | Pre-populated from the target's declared parameters, one labelled row per parameter. Values can mix free text and `{{placeholder}}` tokens. When the target declares no parameters, a free-form *Params* row replaces the per-row layout. |
| **On failure** | Single checkbox. When ticked, a failure on this call **halts the chain** and skips every remaining call. Default off — the chain continues by default, the same continue-on-error behaviour as notification rules. |

**+ Add Call** at the bottom of each binding appends a new call. Newly-added calls auto-expand for editing; loading a binding from disk collapses every call so the page reads as a quick overview.

### Placeholders — invoice values

Parameter values support placeholders that are resolved at click time from the row the user is acting on. Both `{field}` (single-brace, the syntax inserted by the `{ }` picker) and the legacy `{{field}}` work — unknown tokens pass through verbatim so a typo surfaces at runtime rather than being silently emptied.

Since 2026.05.15 each parameter row gets a `{ }` picker next to its value input. Click it to open a searchable list of every available placeholder; pick one and the snippet splices into the field at the caret. The list merges the 10 canonical fields below with every column of the [Invoices](../application/invoices.md) view's catalog (`{customerName}`, `{contractRef}`, `{logBusinessUnit}`, `{logPaUuid}`, …) so a call to a downstream system does not need bespoke wiring.

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

Since 2026.05.15, a **Custom Actions** section sits below the regulatory bindings. Each entry is a free-form button that appears in the invoice detail modal under a *Custom actions* group — independent of the invoice's status. Use it for operator workflows that do not map to a regulatory transition: push the invoice to a CRM, notify a Slack channel, post to a finance API, …

Each custom action carries:

| Field | Description |
|---|---|
| **ID** | Free-form identifier (e.g. `pushToCrm`). Stored as `customAction.N.id`. The picker prevents duplicates within a scope. |
| **Label** | Button text shown in the modal (e.g. *Push to CRM*). Stored as `customAction.N.label`. |
| **Direction** *(2026.05.18)* | `Any` *(default)* / `Issued only (sales)` / `Received only (purchases)`. Empty = the button is visible on both sides (back-compat behaviour). When set, the button is hidden on invoices of the other direction — so an emit-side *Sync to CRM* and a receive-side *Mark as paid* can live on the same template and the detail modal only surfaces what makes sense for the current invoice. Evaluated against the `UHDRIN` flag persisted on the row. |
| **Calls list** | Same call-card editor as regulatory bindings — connector, endpoint / query, parameters, optional *Stop on failure*. The same `{call.N.fieldName}` response-chaining contract applies. |

**+ Add custom action** at the bottom of the section appends a new entry. Remove with the per-row 🗑 button.

In the invoice detail modal, custom actions render in their own `ActionsSection` beneath the preset seller actions. Always visible — there is no status-driven enable / disable for this group; the user picks the action they need. The result banner is anchored to the group whose button fired the chain (`actionResult.source` field), and is cleared automatically when the modal closes or switches invoice — stale banners do not carry over.

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
