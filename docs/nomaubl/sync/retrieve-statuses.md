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

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rsui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rsui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rsui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="360" rx="14" fill="url(#rsui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Retrieve Statuses</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Run</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Pulls every lifecycle event newer than the watermark; advances on success.</text>

  <text x="240" y="132" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WATERMARK</text>
  <rect x="340" y="122" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="450" y="137" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">2026-05-07T14:32:18Z</text>
  <text x="568" y="137" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">lastRetrievalDate — advances after each successful run</text>

  <rect x="240" y="158" width="220" height="30" rx="6" fill="url(#rsui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="350" y="177" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">📥 Retrieve Statuses</text>
  <rect x="480" y="158" width="300" height="30" rx="6" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="495" y="177" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">✓ 24 events · 18 applied · 6 duplicates skipped</text>

  <line x1="240" y1="208" x2="780" y2="208" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Results</text>

  <rect x="240" y="246" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="261" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY · MODULE · INVOICE · MESSAGE</text>

  <rect x="240" y="272" width="540" height="24" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="278" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="288" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="288" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PA · INV-2026-0142 · 201 Acknowledged → lifecycle + header updated</text>

  <rect x="240" y="300" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="306" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="316" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="316" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PA · INV-2026-0124 · 207 Disputed (reason: amount mismatch)</text>

  <rect x="240" y="328" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="334" width="56" height="14" rx="3" fill="rgba(148,163,184,0.18)" stroke="rgba(148,163,184,0.40)" strokeWidth="1"/>
  <text x="276" y="344" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">INFO</text>
  <text x="312" y="344" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Watermark advanced to 2026-05-07T18:04:55Z</text>

  <rect x="20" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Watermark cursor</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read-only — moves forward only</text>
  <line x1="220" y1="135" x2="340" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>

  <rect x="820" y="158" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="173" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sweep summary</text>
  <text x="830" y="186" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">events applied / skipped</text>
  <line x1="820" y1="174" x2="780" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>

  <rect x="820" y="288" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="303" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per-event log</text>
  <text x="830" y="316" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lifecycle + header changes</text>
  <line x1="820" y1="304" x2="780" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>
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

A single section, a single button.

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

## Tips & best practices

- **Schedule the retrieval.** The *background scheduler* in NomaUBL can run this page periodically — see the `fetchStatusInterval` property of the *e-invoicing* template (a value in minutes; `0` disables the scheduler). Every 15 minutes to 1 hour is typical.
- **Distinct from *Sync → Import*.** *Import* handles the post-submission `9906` → `10` / `9907` async confirmation; *Retrieve Statuses* handles the lifecycle codes the PA emits afterwards. Both can run on the same scheduler with different intervals.
- **The watermark only ever moves forward.** Re-running the page has no effect on already-applied events. To replay a window (e.g. after restoring an old database backup), lower `lastRetrievalDate` manually in the *e-invoicing* template — the next run will re-pull every event since that date.
- **Trim the configured status names if volume is an issue.** The default set covers every reform code; high-throughput installations that only need the PPF-mandatory codes can shrink the list to reduce PA-side and local-side load.
- **The lifecycle is the audit trail.** The lifecycle table (`F564235`) is append-only and represents the complete history; the invoice header (`F564231`) only carries the most recent status. Use the lifecycle when investigating disputes or chasing a missing PA-side update.
