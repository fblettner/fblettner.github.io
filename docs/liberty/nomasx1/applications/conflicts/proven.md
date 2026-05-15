---
title: Conflicts — Proven
description: "Segregation-of-duties conflicts confirmed by activity log evidence — the user holds the rights AND has actually exercised them on both sides."
keywords: [Nomasx-1, applications, conflicts, segregation of duties, SoD, proven, activity log, evidence]
---

# Conflicts — Proven

The **Conflicts — Proven** screen keeps only the SoD rows where the activity log proves the user **actually exercised** both incompatible activities. The view intersects the *Details* set with `SECURITY_ACTIVITY_LOG` through the cross-reference table that maps each SoD object to the source-system tables it touches.

A row here is no longer a theoretical conflict — it is a fact, with database traces on both sides.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#sodp-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflicts · Proven</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISK</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 1</text>
  <text x="520" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJ 1</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE 1</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 2</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJ 2</text>
  <text x="870" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE 2</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>
  <text x="340" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">JDOE</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="520" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND_ADMIN</text>
  <text x="700" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="790" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="870" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AP_APPROVER</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-02</text>
  <text x="340" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">JDOE</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO-MOD</text>
  <text x="520" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_OWNER</text>
  <text x="700" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RCT-APV</text>
  <text x="790" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4312</text>
  <text x="870" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_RECEIVER</text>

  <rect x="60" y="196" width="880" height="32" rx="8" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.30)" strokeWidth="1"/>
  <text x="72" y="218" fill="#f87171" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EVIDENCE</text>
  <text x="72" y="232" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">12 of 247 detail rows are confirmed by activity log evidence on both sides</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Sorted by Process · Risk · User · Activity 1 · Activity 2 — same shape as the Details screen</text>
</svg>

---

## Goal of the view

The proven-conflicts list answers one question: **which conflicts are not just theoretical?**

- **Audit priority.** Proven conflicts come first in every remediation plan — they are documented behaviour, not a hypothetical capability.
- **Evidence-driven cleanup.** Each row has database-level evidence on both sides via the cross-reference table — useful when a user disputes the finding.
- **Smaller list, sharper conversation.** A few dozen proven rows are easier to discuss with a business owner than the few hundred theoretical rows of *Details*.

---

## Columns

Same shape as *Conflicts — Details* (the dataset is a strict subset). Refer to that page for the per-column documentation. The only difference is the filter logic — proven rows are limited to users with activity log evidence on **both** sides of the conflict, joined via `SECURITY_XREF` and `SECURITY_ACTIVITY_LOG`.

---

## Tips & best practices

- **Start every quarterly SoD review here.** Proven rows are the entries you absolutely need to remediate before reporting.
- **Cross-reference with the *Activity log*** to retrieve the timestamps and transaction counts behind each entry.
- **A user appearing on both *Details* and *Proven* for the same risk is the most urgent case** — they have the right and they exercised it. Document the compensating control or revoke.
- **A user on *Details* but not on *Proven*** is a *latent risk* — capability without usage. Still worth cleaning, lower priority.
