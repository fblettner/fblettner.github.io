---
title: JD Edwards
description: "JD Edwards licence overview — active users, transactional users, dormant accounts and orphan transactional accounts per JDE application."
keywords: [Nomasx-1, licenses, JD Edwards, JDE licence, active users, transactional users, dormant accounts]
---

# JD Edwards

The **JD Edwards** screen summarises the licence-relevant figures for every JDE application connected to Nomasx-1. One line per JDE application (filter `APPS_TYPE = 'JDE'`).

This is the dashboard Oracle's JDE licence team asks for: how many distinct human users are active, how many actually transacted in the last 90 days, and how many accounts are missing from one side or the other.

---

## At a glance

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ljde-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#ljde-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licenses · JD Edwards</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIVE USERS</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TRANSACTIONAL (90 D)</text>
  <text x="740" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TRANSACTIONAL · NO USER</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="320" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">218</text>
  <text x="500" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">182</text>
  <text x="740" y="149" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">4</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">13 — JDE Test</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">62</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">38</text>
  <text x="740" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">0</text>

  <rect x="60" y="196" width="880" height="32" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="216" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">READING THE NUMBERS</text>
  <text x="72" y="230" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Active = security users · Transactional = touched a JDE table in 90 d · Transactional · No user = transactions without a security account behind them.</text>
</svg>

---

## Goal of the view

For each JDE application:

- **Headline active count.** *Active users* is the number of distinct accounts with `USR_STATUS = '01'` and at least one role assignment — the JDE side of the headcount.
- **Real usage.** *Transactional* counts how many of those active users actually wrote something in the last 90 days. This is the figure to bring to an Oracle licence renegotiation.
- **Detect orphan transactions.** *Transactional · No user* counts source-system transactions whose JDE user has been deleted from the security table — a strong indicator of clean-up gaps.

The hidden *No-transaction users* column is the inverse — active users with zero transaction over the window — visible in deeper drilldowns but not on the headline.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier. | The JDE application. |
| **Active users** | `JDE_ACTIVE_USERS` — distinct active users with at least one role. | Effective licence headcount. |
| **Transactional users** | `JDE_TRANSACTION_USERS` — active users that transacted in the last 90 days. | "Used the system" cohort. |
| **No-transaction users** | `JDE_NOTRANSACTION_USERS` — active users with no transaction. Hidden. | Inactive accounts — candidates for revocation. |
| **Transactional · No user** | `JDE_TRANSACTION_NOUSERS` — transactions in the window without a matching security user. | Cleanup gap. |

---

## Tips & best practices

- **Transactional × component rate** is the most useful negotiation lever — if the *Transactional* count is well below the *Active* count, the licence is over-sized.
- **Address *Transactional · No user* first** — every transaction without a security user means either the user was deleted while keeping rights, or a non-JDE program writes through a service account that should be tagged.
- **The view is JDE-specific.** For other source systems, equivalent screens can be built around their own usage tables (see *Object Usage Tracking* for the underlying mechanism).
- **Combine with *Subscribed Licenses*** to compare the *Transactional* number against the contractual entitlement.
