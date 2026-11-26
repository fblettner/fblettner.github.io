---
title: Retrieve Statuses
description: "Pull lifecycle status events from the Plateforme Agréée — XP Z12-012 codes 200, 201, 206, 207, 210, 213… — and apply them to the local lifecycle table and the invoice header. Watermark-based incremental retrieval."
keywords: [NomaUBL, sync, retrieve statuses, lifecycle, XP Z12-012, status events, 200, 201, 206, 207, 210, 213, F564231, F564235, watermark, JD Edwards, SAP, NetSuite, custom ERP]
---

# Retrieve Statuses

The **Retrieve Statuses** screen pulls **invoice lifecycle events** from the Plateforme Agréée — the status codes defined by the French e-invoicing reform (XP Z12-012): `200` Submitted, `201` Acknowledged, `206` Partially approved, `207` Disputed, `210` Refused, `213` Rejected, and the rest of the lifecycle. Each event is appended to the local lifecycle table and the invoice's current status is updated.

This screen is **distinct from *Sync → Import***:

- *Sync → Import* handles the **async import confirmation** that follows a successful submission (`9906` → `10` / `9907`).
- *Retrieve Statuses* handles the **lifecycle codes** the PA emits *after* the import is complete (`200`, `201`, `206`, `207`, `210`, `213`, …).

Both can run on the same scheduler with independent intervals — see *Tips* below.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — since the lifecycle reporting is a PA-side responsibility.

---

## At a glance

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rsui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rsui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rsui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rsui-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="380" rx="14" fill="url(#rsui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Retrieve Statuses</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Fetch invoice lifecycle status events from the Platform Agréée and update the database.</text>
  <rect x="240.0" y="82" width="354.0" height="50" rx="9" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="252.0" y="94.0" width="26" height="26" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="265.0" y="110.5" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="288.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Retrieve statuses</text>
  <text x="288.0" y="119.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ask the platform for the new statuses now</text>
  <rect x="606.0" y="82" width="354.0" height="50" rx="9" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="618.0" y="94.0" width="26" height="26" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="631.0" y="110.5" fill="#fb923c" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="654.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Checks</text>
  <text x="654.0" y="119.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Events missing from the history, events out of order</text>
  <rect x="240" y="146" width="720" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="168" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STATUS RETRIEVAL</text>
  <text x="256" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Calls the PA status events endpoint from the last retrieval date; updates the lifecycle and the current status.</text>
  <rect x="256" y="200" width="117" height="22" rx="5" fill="url(#rsui-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="314.5" y="214.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Retrieve Statuses</text>
  <text x="387" y="215" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">✓ Status retrieval completed.</text>
  <rect x="240" y="250" width="720" height="128" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="272" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RESULTS</text>
  <rect x="256" y="282" width="688" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="297.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY</text>
  <text x="356" y="297.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODULE</text>
  <text x="426" y="297.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <rect x="256" y="310" width="688" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="266" y="314.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="291.5" y="325.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCESS</text>
  <text x="356" y="325.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">PA</text>
  <text x="426" y="325.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">INV-2026-0142 · 201 Acknowledged → lifecycle + header updated</text>
  <rect x="256" y="338" width="688" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="266" y="342.0" width="37" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="284.5" y="353.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">INFO</text>
  <text x="356" y="353.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">PA</text>
  <text x="426" y="353.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Last retrieval date moved to 26/11/2026 18:04</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two mode cards</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retrieve or check</text>
  <line x1="200" y1="107.0" x2="240" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One button</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the last retrieval date</text>
  <line x1="200" y1="217.0" x2="256" y2="211" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>
  <rect x="1000" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Checks</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">missing statuses · ordering</text>
  <line x1="1000" y1="107.0" x2="950" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Results</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one row per event applied</text>
  <line x1="1000" y1="317.0" x2="944" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>
</svg>

---

## Pipeline at a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="rs-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="rs-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="rs-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="40" y="20" width="240" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="160" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🖱 Retrieve Statuses</text>
  <text x="160" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">user click</text>
  <rect x="40" y="110" width="240" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="160" y="134" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 Read watermark</text>
  <text x="160" y="152" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">last retrieval date</text>
  <line x1="160" y1="80" x2="160" y2="110" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <rect x="350" y="100" width="320" height="80" rx="10" fill="url(#rs-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="510" y="126" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 Call PA status-events</text>
  <text x="510" y="146" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">since = last retrieval date</text>
  <text x="510" y="164" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">codes = configured statuses</text>
  <line x1="280" y1="140" x2="350" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <rect x="730" y="100" width="220" height="80" rx="10" fill="url(#rs-g-blue-strong)" stroke="#4a9eff" strokeWidth="2" strokeDasharray="6 3"/>
  <text x="840" y="128" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">🔁 For each event</text>
  <text x="840" y="148" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">loop</text>
  <line x1="670" y1="140" x2="730" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <rect x="40" y="240" width="380" height="80" rx="10" fill="url(#rs-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="230" y="266" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📜 Append to lifecycle</text>
  <text x="230" y="286" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564235 — append-only event</text>
  <text x="230" y="304" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">code · message · reason · action</text>
  <rect x="500" y="240" width="380" height="80" rx="10" fill="url(#rs-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="690" y="266" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Update invoice header</text>
  <text x="690" y="286" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564231 — current status</text>
  <text x="690" y="304" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">= event code</text>
  <path d="M 840 180 L 840 220 L 230 220 L 230 240" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#rs-arrow)"/>
  <text x="510" y="213" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">per event</text>
  <line x1="420" y1="280" x2="500" y2="280" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <path d="M 690 320 L 690 350 L 920 350 L 920 180" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#rs-arrow-slate)"/>
  <text x="930" y="270" fontSize="9" fill="#94a3b8" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">next event</text>
  <rect x="350" y="380" width="220" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="460" y="404" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 Advance watermark</text>
  <text x="460" y="422" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">last retrieval date</text>
  <path d="M 950 140 L 980 140 L 980 360 L 460 360 L 460 380" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#rs-arrow-slate)"/>
  <text x="720" y="352" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">all events done</text>
  <rect x="640" y="380" width="200" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="740" y="404" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Aggregated logs</text>
  <text x="740" y="422" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">UI summary</text>
  <line x1="570" y1="410" x2="640" y2="410" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
</svg>

Each run reads only the events newer than the watermark and advances it after a successful sweep — the next run picks up exactly where this one stopped.

---

## How it works

Each click runs four steps:

1. **Read the watermark.** The last retrieval date is stored in the *e-invoicing* template configuration. It is used as the `since` parameter of the PA call.
2. **Call the PA status-events endpoint.** The list of status codes to subscribe to is configured in the same template (the *configured status names*). By default it matches the standard XP Z12-012 set; only the codes in the configured list are returned.
3. **Apply each event.** For every event the PA returns:
   - A new row is appended to the **lifecycle table** (`F564235`) — this builds the full audit trail of every status the invoice has been through.
   - The **invoice header** (`F564231`) is updated so the *current status* on the invoice list matches the latest event.
4. **Advance the watermark.** The `lastRetrievalDate` value in the template is updated to the timestamp of the latest event received. The next run starts from there.

The lifecycle table is **append-only**: each event adds a row, no row is ever modified or removed. Re-running the retrieval cannot create duplicates because the watermark only ever moves forward.

---

## Status codes retrieved

The lifecycle covers the **post-submission** codes from XP Z12-012 — `200` to `228`, plus `500` / `501`. The full list is documented in the [Status Reference](../references/status-reference.mdx); the set actually retrieved by each run is governed by the *configured status names* property of the *e-invoicing* template.

Common subsets:

- **All-codes** *(default)* — subscribes to every code in the standard reference list. Suitable for any deployment that needs full traceability.
- **Mandatory-only** — limits retrieval to the PPF-mandatory codes (`200`, `201`, `213` …). Reduces the volume on very high-throughput installations where intermediate statuses are not consumed downstream.

The `9906` / `9907` codes are **not** part of this retrieval — those are local NomaUBL statuses tied to the async-import confirmation flow handled by *Sync → Import*.

---

## Run

The page opens on two cards: **Retrieve statuses** (*Ask the platform for the new statuses now*), selected by default, and **Checks** (*Events missing from the history, events out of order*), which holds the [integrity checks](#integrity-checks). The cards and the run button are shown to roles granted the **Run batch jobs** action; other users see the help text only.

Under **Retrieve statuses**, a single section holds a single button.

| Element | Description |
|---|---|
| **Retrieve Statuses** | Triggers the retrieval. Disabled while a run is in progress. |
| **Status line** | Inline feedback below the button — green on success, red on failure. |

The page has no parameters: every event newer than the watermark, for every code in the configured list, is fetched in the same call. There is no per-invoice scope.

---

## Results

The **Results** section shows the structured log table — one row per event applied, plus pipeline-level events. The columns match the rest of NomaUBL's log tables (`Severity / Module / Submodule / Message`).

Typical log content for a successful run:

- An `INFO` row reporting how many events were returned by the PA.
- One `INFO` or `SUCCESS` row per event applied — invoice key + new status code.
- A final `INFO` row reporting the new watermark date.

When the PA call fails for transport reasons (network, timeout, credentials), the page logs an `ERROR` row and leaves the watermark unchanged — the next run retries from the same `since` date.

---

## Integrity checks \{#integrity-checks\}
Behind the **Checks** card, beyond the incremental retrieval, the page offers two on-demand checks that reconcile the recorded lifecycle with the platform and with itself. Both run in the **background** and are safe to re-run at any time. To run them daily without an operator, schedule them on the [Lifecycle Checks](scheduled-jobs/lifecycle-checks.md) page (or the matching CLI modes).

### Missing statuses

Pick a period — **from** a date **until** another (empty end = now) — and optionally **one company**, and the check compares **every platform event of that window** with the lifecycle already recorded. A run scoped to a company only queries that company's status connector and only looks up its invoices, so a per-company backfill doesn't pull every company's events. The end bound reaches the connector as the `{{toDate}}` / `{{toDateRaw}}` placeholders (Esker `updatedBefore`); plain dates are widened to the full day. Anything missing is listed in a **selectable table** — apply all of them or only the rows you pick, optionally firing the [notification rules](../management/notification-rules.md) (off by default). Events that don't apply are reported **separately** so nothing is silently changed: an obsolete internal status (a platform stage the invoice has already moved past), an unknown invoice, or a code with no mapping.

A recovered event is inserted at its **chronological position** — from the event's platform timestamp — not appended at the end, and the invoice's current status only moves when the recovered event is genuinely the most recent. Backfilling an old missing status therefore can't knock an invoice back to a past state. The same chronological insertion applies to the regular status poll.

While the check runs, its **progress shows live** under the section: pages fetched from the platform, events compared every thousand with the running counts, then a final summary. Events outside the requested window are dropped with a logged count (a connector bounding only the start date returns everything up to now), events delivered twice are collapsed, and each invoice is looked up once. The list of missing events is not capped, so **Apply** backfills them all in one pass; only the informational *not found* and *unmapped* rows stop being listed past two thousand, with a log line saying so.

**Resent invoices.** After a rejection and a resend, the statuses of the new cycle (deposited, received, transmitted…) are recorded like the first ones: a code counts as already recorded only since the invoice's last send, pending or reprocess event, while the exact same platform event — same code, same timestamp — is still recognised across cycles. The regular status poll follows the same rule.

### Lifecycle ordering

The second check scans the database for lifecycle rows that are **out of order** — an internal platform stage recorded after a standard status, and standard statuses recorded in the wrong order (e.g. `202` *Reçue* before `200` *Déposée*, the numeric order of standard codes being canonical) — plus **invalid codes** (raw platform text stored by a mapping mistake). The repair **re-sequences** the events into the correct order (nothing is deleted; internal statuses keep their positions) and realigns the invoice's current status, with a before/after preview and per-invoice selection.

Two cases are handled on their own terms:

- **Re-emitted invoices.** An invoice sent again after a correction (*Fix buyer*, edit window, reprocess) carries several PA cycles. Each cycle — opened by a sent, pending or reprocess event — is ordered on its own, an event belonging to the cycle its timestamp falls in.
- **Disputed (`207`) and suspended (`208`).** These interim statuses may be followed by a lower code such as `205` *Approved* or `210` *Refused*: they keep their chronological position within their cycle and never count as an inversion.

Histories ordered wrongly by an earlier rule are detected and put back in order by the next run.

The check also reports an **invoice whose status differs from the latest real state of its history**, shown as *current → expected*, and realigns it on apply. The *latest real state* looks past the reprocess marker (`9912`) and the mail-sent marker (`9908`) in whatever order they appear — so a deposited `200` `NON_TRANSMISE` stays as such. The same rule applies to every header realignment: integrity backfill, status poll and deletion of a history event. The mail-sent marker counts as an application event: it is never reported as misordered. A generation event sitting directly under a reprocess marker — the trace an earlier reprocess left — is ignored like the marker, and so is a history row without a code.

**Check ordering** and **Clean N selected** run **in the background**: the page shows the run's log as it goes, then the findings. The status-drift scan reads the history once, in a single pass, logs its progress every 50 000 rows, the result by *current → expected* pair and a closing summary — a large database no longer ends in a proxy error.

---

## Tips & best practices

- **Schedule the retrieval.** The *background scheduler* in NomaUBL can run this page periodically — see the `fetchStatusInterval` property of the *e-invoicing* template (a value in minutes; `0` disables the scheduler). Every 15 minutes to 1 hour is typical.
- **Distinct from *Sync → Import*.** *Import* handles the post-submission `9906` → `10` / `9907` async confirmation; *Retrieve Statuses* handles the lifecycle codes the PA emits afterwards. Both can run on the same scheduler with different intervals.
- **The watermark only ever moves forward.** Re-running the page has no effect on already-applied events. To replay a window (e.g. after restoring an old database backup), lower `lastRetrievalDate` manually in the *e-invoicing* template — the next run will re-pull every event since that date.
- **Trim the configured status names if volume is an issue.** The default set covers every reform code; high-throughput installations that only need the PPF-mandatory codes can shrink the list to reduce PA-side and local-side load.
- **The lifecycle is the audit trail.** The lifecycle table (`F564235`) is append-only and represents the complete history; the invoice header (`F564231`) only carries the most recent status. Use the lifecycle when investigating disputes or chasing a missing PA-side update.
