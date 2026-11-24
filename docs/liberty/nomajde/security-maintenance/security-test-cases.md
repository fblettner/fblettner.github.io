---
title: Security test cases
description: "Security simulation → Test cases in Nomajde: JD Edwards EnterpriseOne security expectations (this role may run P4210, may not delete in P0411) saved as cases, replayed against the security as it is after every change, with what no longer holds and the rule that now decides; five sample cases to adapt and an editor for each case."
keywords: [Nomajde, JD Edwards, JDE E1, security test cases, non-regression, security simulation, Security Workbench, expectations, sample cases, roles]
---

# Security test cases

The **Test cases** tab of [Security simulation](./security-simulation.md) keeps the non-regression of a JD Edwards EnterpriseOne security project. A case is a list of **expectations** about one user, role or `*PUBLIC` — *may run P4210*, *may not delete in P0411* — and **Run all** replays every case against the security as it is now. After a change in the Security Workbench, a role merge or a promotion, the list says what no longer holds and which rule now decides.

Cases are kept in Nomajde's own database; replaying them only reads JD Edwards.

---

## At a glance

<svg viewBox="0 0 1200 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njtc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njtc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njtc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njtc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="414" rx="14" fill="url(#njtc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security simulation</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What a user would be allowed, before it is written — and the cases that check it stays so.</text>
  <rect x="240.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Simulate</text>
  <text x="250.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">A user, a module, a what-if</text>
  <rect x="421.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="431.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Secure a module</text>
  <text x="431.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">A whole module for a role</text>
  <rect x="603.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Consistency</text>
  <text x="613.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Lines that serve nothing or contradict</text>
  <rect x="784.5" y="78" width="175.5" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="794.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Test cases</text>
  <text x="794.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Expectations replayed against the security · 7</text>
  <rect x="240" y="126" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="270.5" y="140.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Run all</text>
  <rect x="309" y="126" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="362.0" y="140.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Add the samples</text>
  <rect x="240" y="156" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CASE</text>
  <text x="508" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ABOUT</text>
  <text x="588" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXPECTATIONS</text>
  <text x="674" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST RUN</text>
  <text x="774" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PASSED</text>
  <text x="824" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="880" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="184" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="198.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Accounts payable — JSMITH</text>
  <text x="508" y="198.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="588" y="198.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">24</text>
  <text x="674" y="198.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20 08:15</text>
  <text x="774" y="198.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">24</text>
  <rect x="824" y="187.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="198.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0</text>
  <text x="880" y="198.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Run · Edit · Delete</text>
  <rect x="240" y="210" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Accounts payable clerk</text>
  <text x="508" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APCLERK</text>
  <text x="588" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">6</text>
  <text x="674" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20 08:15</text>
  <text x="774" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4</text>
  <rect x="824" y="213.0" width="22" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="835.0" y="224.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="880" y="224.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Run · Edit · Delete</text>
  <rect x="240" y="236" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Buyer</text>
  <text x="508" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="588" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="674" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20 08:15</text>
  <text x="774" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">5</text>
  <rect x="824" y="239.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="250.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0</text>
  <text x="880" y="250.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Run · Edit · Delete</text>
  <rect x="240" y="262" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Inquiry only</text>
  <text x="508" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">INQUIRY</text>
  <text x="588" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">8</text>
  <text x="674" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">never</text>
  <text x="774" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="824" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="880" y="276.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Run · Edit · Delete</text>
  <rect x="240" y="288" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="302.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Nobody but administrators manages security</text>
  <text x="508" y="302.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="588" y="302.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="674" y="302.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20 08:15</text>
  <text x="774" y="302.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4</text>
  <rect x="824" y="291.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="302.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0</text>
  <text x="880" y="302.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Run · Edit · Delete</text>
  <text x="250" y="332" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHAT NO LONGER HOLDS  2</text>
  <rect x="240" y="340" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CASE</text>
  <text x="440" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="510" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RIGHT</text>
  <text x="580" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXPECTED</text>
  <text x="650" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE SECURITY SAYS</text>
  <text x="760" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DECIDED BY</text>
  <rect x="240" y="368" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Accounts payable clerk</text>
  <text x="440" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="510" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">delete</text>
  <rect x="580" y="371.0" width="27" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="593.5" y="382.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NO</text>
  <rect x="650" y="371.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="666.0" y="382.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <text x="760" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APCLERK on &#42;ALL</text>
  <rect x="240" y="394" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Accounts payable clerk</text>
  <text x="440" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0911</text>
  <text x="510" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">run</text>
  <rect x="580" y="397.0" width="27" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="593.5" y="408.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NO</text>
  <rect x="650" y="397.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="666.0" y="408.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">yes</text>
  <text x="760" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">no rule</text>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run all</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every case, security as it is</text>
  <line x1="200" y1="145.0" x2="250" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Samples</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">placeholder roles to adapt</text>
  <line x1="200" y1="247.0" x2="250" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What no longer holds</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with the rule that now decides</text>
  <line x1="200" y1="397.0" x2="250" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="1000" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add the samples</text>
  <text x="1010" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">five cases, never overwritten</text>
  <line x1="1000" y1="145.0" x2="415" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="1000" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Last run</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">passed / failed kept on the case</text>
  <line x1="1000" y1="237.0" x2="810" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row actions</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">replay · open the editor · delete</text>
  <line x1="1000" y1="317.0" x2="870" y2="222" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
</svg>

---

## The list of cases \{#list\}

**Run all** replays every case; **Add the samples** adds the [sample cases](#samples). The tab title shows how many cases there are.

| Column | Content |
|---|---|
| **Case** | The name given when the case was saved. |
| **About** | The user, role or `*PUBLIC` the expectations are about. |
| **Expectations** | How many expectations the case holds. |
| **Last run** | When the case was last replayed, or *never*. |
| **Passed** / **Failed** | What the last run gave: the failed count is red when an expectation broke, green at 0. |
| — | **Run** replays this case, **Edit** opens the [editor](#edit), **Delete** removes the case and its expectations. |

A case is made in three ways: [saved from a simulation](./security-simulation.md#save) (every object and right of the answer becomes an expectation), added from the samples, or written by hand in the editor from an existing case.

---

## What no longer holds \{#failures\}

After **Run** or **Run all**, a banner says *Every expectation holds.*, or the list **What no longer holds** opens under the cases, with how many lines:

| Column | Content |
|---|---|
| **Case** | The case the expectation belongs to. |
| **Object**, **Right** | The object and the right — run, add, change or delete. |
| **Expected** | What the case expects: *yes* or **NO**. |
| **The security says** | What the security as it is gives now. |
| **Decided by** | The line that decides now, as *who on what* — or *no rule* when nothing forbids it. |

The user is replayed with the roles held on the day of the run, as for a [simulation](./security-simulation.md#rule). The passed and failed counts are kept on the case.

---

## Sample cases \{#samples\}

**Add the samples** adds five cases written for typical roles. Each names a **placeholder role**, to replace with one of yours:

| Sample | About | What it expects |
|---|---|---|
| Accounts payable clerk | `APCLERK` | Enters vouchers (`P0411`: run and add), never deletes them; does not pay (`P0413M`), does not maintain suppliers (`P04012`) nor post to the ledger (`P0911`). |
| Sales order entry | `SALESORDER` | Enters orders (`P4210`: run and add); does not maintain customers (`P03013`), prices (`P4106`) nor credit (`P03B11`). |
| Buyer | `BUYER` | Enters purchase orders (`P4310`: run and add); does not receive goods (`P4312`), enter vouchers (`P0411`) nor maintain suppliers (`P04012`). |
| Inquiry only | `INQUIRY` | Opens `P0411` and `P4210` and changes nothing: add, change and delete refused. |
| Nobody but administrators manages security | `*PUBLIC` | Nobody opens the security applications (`P00950`, `P0092`, `P95921`, `P98OWSEC`). Keep `*PUBLIC`, or pick an ordinary role. |

A sample already added — changed or not — is never overwritten: adding the samples again only adds those missing, or says *The samples are already there.* Until its role is replaced, a sample fails or speaks of a role JD Edwards does not have.

---

## Editing a case \{#edit\}

**Edit** on a row opens the case above the list.

<svg viewBox="0 0 1200 345" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njce-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njce-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njce-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njce-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="282" rx="14" fill="url(#njce-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="40" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CASE</text>
  <text x="280" y="40" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample: replace APCLERK with your accounts payable role…</text>
  <line x1="220" y1="50" x2="980" y2="50" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="70" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">NAME</text>
  <rect x="240" y="75" width="350" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="89.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Sample — Accounts payable clerk</text>
  <text x="610" y="70" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">ABOUT (USER, ROLE OR &#42;PUBLIC)</text>
  <rect x="610" y="75" width="350" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="620" y="89.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">APCLERK ▾</text>
  <rect x="240" y="104" width="720" height="22" rx="5" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1"/>
  <text x="250" y="119" fill="#fb923c" fontSize="9" fontFamily="system-ui, sans-serif">APCLERK is not a user or a role of this JD Edwards: pick one of yours.</text>
  <text x="240" y="144" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">NOTE</text>
  <rect x="240" y="149" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="163.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Sample: replace APCLERK with your accounts payable role. Enters vouchers, never deletes them…</text>
  <rect x="240" y="178" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="192.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">P0411</text>
  <rect x="416" y="178" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="426" y="192.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Form</text>
  <rect x="592" y="178" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="602" y="192.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">run ▾</text>
  <rect x="748" y="178" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758" y="192.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">allowed ▾</text>
  <rect x="904" y="178" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.0" y="192.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="240" y="206" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="220.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">P0411</text>
  <rect x="416" y="206" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="426" y="220.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Form</text>
  <rect x="592" y="206" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="602" y="220.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">delete ▾</text>
  <rect x="748" y="206" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758" y="220.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">refused ▾</text>
  <rect x="904" y="206" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.0" y="220.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="240" y="234" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="248.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">P04012</text>
  <rect x="416" y="234" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="426" y="248.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Form</text>
  <rect x="592" y="234" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="602" y="248.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">run ▾</text>
  <rect x="748" y="234" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758" y="248.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">refused ▾</text>
  <rect x="904" y="234" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.0" y="248.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="240" y="264" width="112" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="296.0" y="278.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Add an expectation</text>
  <rect x="360" y="264" width="87" height="22" rx="5" fill="url(#njce-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="403.5" y="278.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save the case</text>
  <rect x="455" y="264" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="481.0" y="278.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Name and who</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rename, pick one of your roles</text>
  <line x1="200" y1="87.0" x2="240" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njce-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Unknown role</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a placeholder to replace</text>
  <line x1="200" y1="167.0" x2="240" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njce-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One expectation per line</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">object, form, right, expected</text>
  <line x1="200" y1="247.0" x2="240" y2="189" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njce-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Allowed or refused</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what the security must say</text>
  <line x1="1000" y1="247.0" x2="820" y2="189" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njce-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save the case</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">replaces the case as a whole</text>
  <line x1="200" y1="317.0" x2="360" y2="275" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njce-arrow)"/>
</svg>

| Field | Use |
|---|---|
| **Name** | The case's name; it can be changed, as long as no other case has it. |
| **About (user, role or \*PUBLIC)** | Who the case is about. When it is not a user or a role of this JD Edwards — the placeholder role of a sample — a warning says so: pick one of yours. |
| **Note** | Free text; the samples explain there what the role is meant to do. |
| Expectations | One line each: **Object**, **Form** (optional, for an expectation on one form), the **right** (run, add, change, delete) and **allowed** or **refused**. **Remove** takes the line away; **Add an expectation** adds one. |

**Save the case** replaces the case as a whole, its expectations included; lines without an object are dropped. **Cancel** closes the editor without saving.

---

## Access \{#access\}

The tab is part of the Security simulation page, in the **Security Maintenance** folder; the predefined roles **Security administrator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). Saving, editing and deleting a case writes only to Nomajde's database.

---

## Tips & best practices \{#tips\}

- **One case per role**, named after what the role is for: a failed expectation then points at one role.
- **Keep the refusals.** The expectations that matter most are often the *NO*: a supplier maintenance that an accounts payable clerk must not reach, a security application that nobody but the administrators may open.
- **Run all after every change** to the Security Workbench, after [Re-merge security](../jobs.md#remerge) and after a promotion of security to another environment.
- **Start from the samples**: replace the placeholder role, adapt the objects to the applications the customer uses, then add the expectations specific to the business.
