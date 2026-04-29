---
title: Import
description: "Confirm that invoices submitted to the Plateforme Agréée have actually been imported — async import polling that updates each pending 9906 invoice to 10 (Deposited) or 9907 (PA rejected the import)."
keywords: [NomaUBL, sync, import, 9906, 9907, 10, Plateforme Agréée, async, polling, JD Edwards, SAP, NetSuite, custom ERP]
---

# Import

The **Import** screen confirms that invoices submitted to the Plateforme Agréée have actually been imported on the PA side. It is **not** the lifecycle / status retrieval flow (that runs separately — see *Sync → Retrieve Statuses*) but the **async import confirmation** that follows a successful PA submission.

When a PA imports invoices **asynchronously**, a successful submission only puts the invoice in a local `9906` (pending) status — the PA acknowledges receipt but defers the import itself. The Import page polls the PA for every `9906` invoice and updates the local status with the actual import outcome.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — since the PA's async import behaviour is independent of the upstream that produced the invoice.

---

## Pipeline at a glance

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="imp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="imp-arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4ade80"/></marker>
    <marker id="imp-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#f87171"/></marker>
    <marker id="imp-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="imp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="imp-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="imp-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="imp-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.18"/><stop offset="100%" stopColor="#4ade80" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="imp-g-red" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87171" stopOpacity="0.16"/><stop offset="100%" stopColor="#f87171" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="40" y="20" width="220" height="60" rx="10" fill="url(#imp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="150" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🖱 Check Import Status</text>
  <text x="150" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">user click</text>
  <rect x="40" y="110" width="220" height="60" rx="10" fill="url(#imp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="150" y="134" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔎 Query DB</text>
  <text x="150" y="152" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">invoices in status 9906</text>
  <line x1="150" y1="80" x2="150" y2="110" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#imp-arrow)"/>
  <rect x="40" y="200" width="220" height="60" rx="10" fill="url(#imp-g-blue-strong)" stroke="#4a9eff" strokeWidth="2" strokeDasharray="6 3"/>
  <text x="150" y="224" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">🔁 For each 9906</text>
  <text x="150" y="244" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">loop</text>
  <line x1="150" y1="170" x2="150" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#imp-arrow)"/>
  <rect x="320" y="200" width="290" height="60" rx="10" fill="url(#imp-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="465" y="224" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">📡 GET /api/v1/sale/invoices/import/&#123;uuid&#125;</text>
  <text x="465" y="244" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">PA endpoint</text>
  <line x1="260" y1="230" x2="320" y2="230" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#imp-arrow)"/>
  <text x="290" y="222" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">per invoice</text>
  <rect x="660" y="200" width="180" height="60" rx="10" fill="url(#imp-g-blue)" stroke="#4a9eff" strokeWidth="2" strokeDasharray="6 3"/>
  <text x="750" y="224" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ PA outcome</text>
  <text x="750" y="244" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">decision</text>
  <line x1="610" y1="230" x2="660" y2="230" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#imp-arrow)"/>
  <rect x="320" y="320" width="240" height="80" rx="10" fill="url(#imp-g-green)" stroke="#4ade80" strokeWidth="1.5"/>
  <text x="440" y="346" fill="#4ade80" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ Status → 10 Deposited</text>
  <text x="440" y="366" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">store invoice UUID</text>
  <text x="440" y="384" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">success</text>
  <rect x="600" y="320" width="240" height="80" rx="10" fill="url(#imp-g-red)" stroke="#f87171" strokeWidth="1.5"/>
  <text x="720" y="346" fill="#f87171" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Status → 9907 Rejected</text>
  <text x="720" y="366" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">store error messages</text>
  <text x="720" y="384" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">failed</text>
  <rect x="40" y="320" width="240" height="80" rx="10" fill="url(#imp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="160" y="346" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⏳ No change</text>
  <text x="160" y="366" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">retry on next sweep</text>
  <text x="160" y="384" fill="currentColor" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">still pending</text>
  <path d="M 720 260 L 720 290 L 440 290 L 440 320" stroke="#4ade80" strokeWidth="1.4" fill="none" markerEnd="url(#imp-arrow-green)"/>
  <line x1="750" y1="260" x2="720" y2="320" stroke="#f87171" strokeWidth="1.4" markerEnd="url(#imp-arrow-red)"/>
  <path d="M 700 260 L 700 290 L 160 290 L 160 320" stroke="#94a3b8" strokeWidth="1.4" fill="none" markerEnd="url(#imp-arrow-slate)"/>
  <path d="M 160 400 L 160 430 L 150 430 L 150 260" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#imp-arrow-slate)"/>
  <text x="80" y="425" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">next iteration</text>
  <rect x="780" y="20" width="180" height="60" rx="10" fill="url(#imp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="870" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Aggregated logs</text>
  <text x="870" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">all done</text>
  <path d="M 260 230 L 290 230 L 290 50 L 780 50" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#imp-arrow-slate)"/>
  <text x="540" y="42" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">when loop ends</text>
</svg>

Only invoices in `9906` are checked — those already at `10` or `9907` are skipped. Clicking the button several times is therefore safe: no invoice is processed twice and no duplicates are created.

---

## Why this page exists

Some Plateformes Agréées return a synchronous outcome on submission — the invoice's status moves directly from the local pre-submission state to a final PA-side state (`10`, `9907`, etc.) at submission time. Those PAs do not need this page.

Other PAs accept the submission immediately and import asynchronously: the invoice sits in `9906` (pending) on the local side until the PA's import worker has actually processed it. **For those PAs this page is the way to confirm the import** — without it, `9906` invoices stay pending forever locally even though the PA has long since accepted or rejected them.

---

## Status outcomes

The page only ever transitions invoices from `9906` to one of the three terminal-for-this-step states:

| From | PA reports | To | Side effects |
|---|---|---|---|
| `9906` (pending) | success | `10` (Deposited) | The PA-assigned invoice UUID is stored on the local record. |
| `9906` (pending) | failed | `9907` (PA rejected the import) | Error messages returned by the PA are stored on the local record. |
| `9906` (pending) | still pending | `9906` (unchanged) | No update — the next sweep will check again. |

A `9907` is **not** a Schematron / XSD failure (those block submission before reaching the PA's import worker, and result in a different status). `9907` covers PA-side acceptance issues that the PA only surfaces at import time.

See the [Status Reference](../references/status-reference.mdx) for the meaning of each code.

---

## Run

A single section, a single button.

| Element | Description |
|---|---|
| **Check Import Status** | Triggers the sweep. Disabled while a sweep is in progress. |
| **Status line** | Inline feedback below the button — green on success, red on failure. |

The page has no parameters: every `9906` invoice is checked in the same call. There is no per-invoice selection — for that, use *Application → E-Invoicing* and trigger a re-submission via the per-row actions.

---

## Results

The **Results** section shows the structured log table — one row per invoice processed, plus pipeline-level events. The columns match the rest of NomaUBL's log tables (`Severity / Module / Submodule / Message`).

A successful sweep over a `9906` invoice typically logs at least:

- An `INFO` row noting which invoice was checked.
- A `SUCCESS` (transition to `10`), `WARNING` (transition to `9907`) or `INFO` (still pending) row carrying the PA's response.

When the PA call fails for transport reasons (network, timeout, credentials), the page logs an `ERROR` row and leaves the invoice in `9906` — a subsequent sweep will retry.

---

## Tips & best practices

- **Schedule the sweep.** The *background scheduler* in NomaUBL can run this page periodically — see the `fetchImportInterval` property of the *e-invoicing* template (a value in minutes; `0` disables the scheduler). For PAs with async import, scheduling every 5–15 minutes is a typical setup.
- **A sweep does not generate duplicate submissions.** It only reads — the PA returns the import outcome of an already-submitted invoice. Running it manually after the scheduler is safe.
- **`9907` invoices need the corrective action elsewhere.** This page only reports the rejection; resolving it (correcting the data, then re-submitting) is done from *Application → E-Invoicing → Resend* or via *Process → UBL* on the corrected file.
- **Keep this page distinct from *Retrieve Statuses*.** *Retrieve Statuses* handles the lifecycle codes (200, 201, 206, 207, 210, 213, …) emitted by the PA after the import is complete. *Import* only handles the async confirmation step (9906 → 10 / 9907). Both can run on the same scheduler with different intervals.
- **A long-pending `9906` is a flag.** If an invoice stays in `9906` for hours despite repeated sweeps, the PA has likely lost the submission or the `uuid` does not resolve on the PA side. Inspect the PA's own dashboard before assuming a NomaUBL bug.
