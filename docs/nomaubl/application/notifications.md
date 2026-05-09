---
title: Notifications
description: "Portal inbox for status-change alerts emitted by NomaUBL — All / Unread tabs, mark-all-read, per-row dismiss, click-through to the linked invoice. Combined with the navbar bell that polls every 30 s and previews the last six entries, the page is the read-side of the notification system shipped in 2026.05.3."
keywords: [NomaUBL, notifications, inbox, bell, NotificationBell, F564253, NTUKID, NTUSER, NTEV01, status changes, mark read, dismiss, invoice, JD Edwards, SAP, NetSuite, custom ERP]
---

# Notifications

The **Notifications** screen is the **portal inbox** that surfaces every notification routed to the current user. Each row is a single delivery — one invoice status change matched by a [Notification Rule](../management/notification-rules.md), wrapped with the right subject, message and metadata, and persisted in the `F564253` table.

The page is the *read* side of the notification system. The *write* side — which event triggers what notification, sent to whom, on which channels — lives in the [Notification Rules](../management/notification-rules.md) editor.

A complementary **bell** in the top utility bar polls the unread count every 30 s and previews the last six entries without leaving the current page; clicking a preview opens the linked invoice modal directly.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — since the notification payload is built from the persisted UBL invoice, not from the raw source XML.

---

## Opening the inbox

- Sidebar → **Management → Notifications**.
- Or click the **🔔 bell** in the top utility bar, then **View all** at the bottom of the dropdown.
- The inbox always opens on the **All** tab; switch to **Unread** to focus on what has not been acknowledged yet.

---

## At a glance

<svg viewBox="0 0 1000 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="notif-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="notif-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="notif-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="240" y="20" width="540" height="540" rx="14" fill="url(#notif-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="262" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications</text>
  <rect x="554" y="30" width="68" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="588" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Refresh</text>
  <rect x="626" y="30" width="138" height="22" rx="5" fill="url(#notif-g-blue)" stroke="#4a9eff" strokeWidth="1"/><text x="695" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">✓ Mark all read</text>

  <rect x="710" y="30" width="46" height="22" rx="5" fill="rgba(248,113,113,0.18)" stroke="#f87171" strokeWidth="1"/>

  <line x1="240" y1="68" x2="780" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="262" y="84" width="80" height="26" rx="6" fill="url(#notif-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="302" y="101" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">All</text>
  <rect x="350" y="84" width="100" height="26" rx="6" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="101" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Unread (3)</text>

  <rect x="262" y="124" width="498" height="74" rx="8" fill="rgba(56,139,253,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="262" y="124" width="3" height="74" fill="#4a9eff"/>
  <rect x="278" y="138" width="44" height="22" rx="5" fill="rgba(248,113,113,0.18)" stroke="#f87171" strokeWidth="1"/><text x="300" y="153" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9904</text>
  <text x="334" y="148" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Invoice 12345 RI 00070 — PA Reject</text>
  <text x="334" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">REJ_ADR — Recipient unknown on the PPF directory</text>
  <text x="334" y="182" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">12345 · RI · 00070 · REJ_ADR · INV-correction · pa-rejection</text>
  <text x="730" y="148" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2 min ago</text>
  <rect x="736" y="140" width="14" height="14" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/><text x="743" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle">×</text>

  <rect x="262" y="208" width="498" height="62" rx="8" fill="rgba(56,139,253,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="262" y="208" width="3" height="62" fill="#4a9eff"/>
  <rect x="278" y="220" width="44" height="22" rx="5" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/><text x="300" y="235" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">10</text>
  <text x="334" y="230" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Invoice 12300 RI 00001 — Deposited</text>
  <text x="334" y="248" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">PA confirms deposit</text>
  <text x="334" y="262" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">12300 · RI · 00001 · pa-success</text>
  <text x="730" y="230" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">14:32</text>

  <rect x="262" y="280" width="498" height="62" rx="8" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <rect x="278" y="292" width="44" height="22" rx="5" fill="rgba(251,146,60,0.18)" stroke="#fb923c" strokeWidth="1"/><text x="300" y="307" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9906</text>
  <text x="334" y="302" fill="#cbd5e1" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">Invoice 12299 RI 00001 — PA Pending</text>
  <text x="334" y="320" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">Awaiting PA import</text>
  <text x="334" y="334" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">12299 · RI · 00001 · pa-pending</text>
  <text x="730" y="302" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">Yesterday</text>

  <rect x="262" y="352" width="498" height="62" rx="8" fill="rgba(56,139,253,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="262" y="352" width="3" height="62" fill="#4a9eff"/>
  <rect x="278" y="364" width="44" height="22" rx="5" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/><text x="300" y="379" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9903</text>
  <text x="334" y="374" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Invoice 12299 RI 00001 — Sent to PA</text>
  <text x="334" y="392" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">submission_id=ABC-42</text>
  <text x="334" y="406" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">12299 · RI · 00001 · pa-sent</text>
  <text x="730" y="374" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">Yesterday</text>

  <rect x="262" y="424" width="498" height="62" rx="8" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <rect x="278" y="436" width="44" height="22" rx="5" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/><text x="300" y="451" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9901</text>
  <text x="334" y="446" fill="#cbd5e1" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">Invoice 12298 RI 00001 — Validated</text>
  <text x="334" y="478" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">12298 · RI · 00001 · validation-success</text>
  <text x="730" y="446" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">Yesterday</text>

  <rect x="800" y="36" width="180" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="52" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Toolbar</text>
  <text x="810" y="65" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">refresh + mark all read</text>
  <line x1="800" y1="55" x2="770" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="20" y="84" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="100" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Filter tabs</text>
  <text x="30" y="113" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">All vs Unread (count)</text>
  <line x1="220" y1="102" x2="262" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="20" y="150" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="166" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Unread accent</text>
  <text x="30" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">left blue stripe + tinted bg</text>
  <line x1="220" y1="168" x2="262" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="800" y="180" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="196" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Per-row dismiss</text>
  <text x="810" y="209" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remove without marking read</text>
  <line x1="800" y1="198" x2="755" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="20" y="252" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="268" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Status badge</text>
  <text x="30" y="281" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">catalog-driven colours</text>
  <line x1="220" y1="270" x2="278" y2="304" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="20" y="392" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="408" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Meta line</text>
  <text x="30" y="421" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">doc · dct · kco · reason · action · rule</text>
  <line x1="220" y1="410" x2="334" y2="406" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="800" y="392" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="408" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Click → invoice modal</text>
  <text x="810" y="421" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">marks the row read in passing</text>
  <line x1="800" y1="410" x2="760" y2="382" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>
</svg>

A notification row carries five visual cues: the **status badge** at the left (colour from the *statuses* catalogue), the **subject** (default `Invoice {doc} {dct} {kco} — {statusLabel}`), the **message** (the rule's body or the dispatcher's default), the **meta line** with the canonical identifiers, and a **right column** with relative time + the dismiss button.

---

## Toolbar actions

| Action | Effect |
|---|---|
| **Refresh** | Re-fetches the inbox from `/api/notifications`, honouring the active tab filter (All vs Unread). |
| **Mark all read** | Posts to `/api/notifications/mark-all-read`. Every row that was unread switches to read; the bell badge clears at the next 30 s poll, or immediately on the next focus event. Disabled when there are no unread rows. |
| **Filter tabs** | *All* shows every undismissed row; *Unread* keeps only the rows where `read = false`. The unread tab carries the `( N )` count next to its label. |

---

## A row, in detail

| Element | Source | Meaning |
|---|---|---|
| **Left accent stripe + tinted background** | `read = false` | Unread rows. The stripe disappears the moment the row is marked read. |
| **Status badge** | `NTEV01` joined to the *statuses* catalogue | The status that fired the notification. The badge background, foreground and border come from the catalogue colours, so `9904 / PA Reject` is red, `10 / Deposited` is green, `9906 / PA Pending` is orange, etc. |
| **Subject (top line)** | `NTSUBJ` (rule's `emailSubject`, or the dispatcher default) | Short, human-readable headline. The default is `Invoice {doc} {dct} {kco} — {statusLabel}`. |
| **Message (second line)** | `NTMSGE` (rule's `emailBody`, or the dispatcher default) | The fuller body text. Truncated on overflow; the modal that opens on click carries the full lifecycle. |
| **Meta line** | `NTDOC · NTDCT · NTKCO · reason · action · rule` | Canonical invoice identifiers, plus the PA rejection reason / expected action / rule name when present. The reason and action are resolved against the *rejection-reason-codes* and *action-codes* catalogues, so the user reads the human label, not the bare code. |
| **Action audit chips** *(2026.05.7)* | `NTK74MSG2` audit footer | One coloured chip per connector call the dispatcher fired for the rule. See [Action audit chips](#action-audit-chips) below. |
| **Relative time** | `NTUPMJ` + `NTTDAY` | *just now*, *2 min ago*, *14:32* (today), *Yesterday*, then the absolute `dd/mm/yyyy hh:mm` for older entries. |
| **Dismiss button** | per-row | Removes the row from the inbox without marking the rest as read. |

Clicking anywhere in the row body opens the **invoice detail modal** for the linked `(doc, dct, kco)` triplet — same seven tabs as the [E-Invoicing](./invoices.md) page (Summary, Parties, Lines, VAT, Notes, History, PDF). The row is marked read on the way through.

---

## Action audit chips

Since 2026.05.7, every notification dispatched by a [Notification Rule](../management/notification-rules.md) that defines one or more action calls carries a permanent **audit trail** stored in the `NTK74MSG2` column. The inbox renders the trail as a row of colour-coded chips below the message, one chip per call:

| Chip | Colour | Meaning |
|---|---|---|
| **`OK`** | green | The call ran without error. For an api-action: HTTP &lt; 400. For a sql-action: the statement returned without an exception. |
| **`FAIL`** | red | The call returned an error. The message text on the chip carries the failure reason — HTTP status + body for an api-action, JDBC exception for a sql-action. |
| **`STOP`** | orange | The call was a `STOP · N remaining call(s) skipped` marker. Set by a previous `FAIL` on a call whose *On failure* flag was `Stop the chain on failure`. |
| **`SKIP`** | muted | A call that was skipped because an earlier call in the chain hit a `STOP`. |

Because the audit lives in `NTK74MSG2` rather than the body, it survives the body's line-clamp truncation and remains readable at a glance — a row whose message ends with `OK · OK · FAIL` is easier to triage than one where the audit was buried in the body text. The audit footer is capped at the column width minus a safety margin; long error messages are truncated, but the *Status* and *count* fields always fit.

---

## The 🔔 bell in the navbar

A complementary entry sits in the top utility bar of every page. Three things it does:

1. **Polls every 30 s** the unread count (`GET /api/notifications/unread-count`). A red badge shows the count when greater than zero.
2. **Drops down the last 6 entries** on click — same shape as an inbox row, but condensed: subject, message, doc reference, relative time. Unread rows carry the same blue dot used in the inbox. When the rule fired one or more action calls, the bell preview strips the `NTK74MSG2` audit footer and shows a compact summary line in its place: *2 action(s) ran* (muted) when every call returned `OK`, *1 of 2 action(s) failed* (red) when at least one chip is `FAIL`. A glance at the bell is enough to know whether to drill into the inbox.
3. **Clicking a preview** marks the entry read and opens the invoice modal directly. The bell uses a small dance to handle both cases: when the user is already on the inbox, it dispatches a `nomaubl:open-notification` window event so the modal opens without a remount; otherwise it stores the payload in `sessionStorage` under `notif-auto-open` and navigates to `/notifications`, which drains the entry on cold mount.

A *View all* footer at the bottom of the dropdown links to `/notifications` for the full inbox.

The bell stays visible regardless of authentication state: when `global.authEnabled != "Y"`, the inbox shows the broadcast notifications written under the `NTUSER='*'` sentinel, and the bell counts them.

---

## Storage & retention

Every delivered notification is one row in **`F564253`** (Oracle + Postgres). The columns the inbox cares about are:

| Column | Type | Role |
|---|---|---|
| `NTUKID` | numeric | Primary key. Unique across the whole table — the row addresses no longer carry the `(doc, dct, kco)` triplet. |
| `NTUSER` | string | Resolved username, or `*` when running with auth disabled (broadcast). |
| `NTEV01` | string | `0` for unread, `1` for read. The bell badge counts rows where `NTEV01 = 0`. |
| `NTSUBJ` / `NTMSGE` | string | Subject / message body. |
| `NTK74MSG2` | string | Action audit footer written by the dispatcher (`OK / FAIL / STOP / SKIP` per call) — drives the chips section. New in 2026.05.7. |
| `NTDOC / NTDCT / NTKCO` | mixed | The invoice triplet; nullable for system-level alerts that don't link to a specific invoice. |
| `NTUPMJ` / `NTTDAY` | jul / hms | Issue date and time. The composite index on `(NTUSER, NTEV01, NTUPMJ DESC)` keeps the bell badge query and the inbox sort fast. |

A daily retention sweep in `BackgroundScheduler` deletes rows older than `global.notificationsRetentionDays` (default 90 days). Set the property to `0` to disable the sweep — useful for installations that want to keep notifications indefinitely or that drive their own retention policy.

---

## Tips & best practices

- **Triage with the *Unread* tab.** Switching to *Unread* is faster than scrolling the *All* feed; *Mark all read* clears every row in one click when the day-end review is done.
- **Use the meta line for context.** The `reason · action · rule` fragment tells you *why* a notification fired — useful when several rules cover overlapping status codes.
- **The bell is a peek, not the inbox.** It only shows the last six entries; for triage of every undismissed row, open *Notifications*. The *View all* footer of the dropdown is the one-click shortcut.
- **Dismissing is not the same as marking read.** *Dismiss* removes the row from your inbox; *Mark read* leaves it in *All* with no accent. Use *Dismiss* for entries that don't need an audit trail.
- **For PA rejections, click through.** A `9904 / PA Reject` row carries the reason in the meta line, but the lifecycle on the invoice modal's *History* tab carries the full PA payload and the expected action.
- **Configure retention.** Notifications can grow fast — every status change of every invoice produces a row when a matching rule fires. The 90-day default fits most installations; raise or lower it via `global.notificationsRetentionDays`.
