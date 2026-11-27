---
title: A UDO
description: "Security Management → Start from a UDO in Nomajde: the kinds of JD Edwards EnterpriseOne user defined objects with their counts, the UDOs of a kind from the Object Librarian catalogue, and the roles with whether they see the UDO picked."
keywords: [Nomajde, JD Edwards, JDE E1, Security Management, UDO, user defined object, UDO security, F00950W, F9860W, watchlist, query, "*PUBLIC", role]
---

# A UDO

In **Security Management**, the starting point **a UDO** answers *who sees this user defined object?* — a query, a watchlist, a grid format, an EnterpriseOne page… Pick a kind of UDO, then one UDO of that kind: the roles are listed beside it, **Everybody** (`*PUBLIC`) first, each with whether it sees the UDO.

Open it from **Security Management**, then **Start from → a UDO**. The other starting points are described in the [Security Management overview](./overview.md).

---

## At a glance

<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njud-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njud-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njud-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njud-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="425" rx="14" fill="url(#njud-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security Management</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The security of a user or a role, edited where it is read.</text>
  <rect x="240" y="72" width="720" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">START FROM</text>
  <rect x="326.48" y="79" width="80" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="366.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a user or role</text>
  <rect x="411.48" y="79" width="152" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="487.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">an application, form or report</text>
  <rect x="568.48" y="79" width="49" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="592.98" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a table</text>
  <rect x="622.48" y="79" width="44" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="644.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a menu</text>
  <rect x="671.48" y="79" width="40" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="691.48" y="90.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">a UDO</text>
  <rect x="716.48" y="79" width="53" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="742.98" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a module</text>
  <text x="252" y="117" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pick a kind, then a UDO: the roles are listed with who sees it.</text>
  <rect x="840" y="104" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.5" y="118.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="905" y="104" width="43" height="22" rx="5" fill="url(#njud-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="926.5" y="118.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="148" width="720" height="34" rx="8" fill="rgba(50,215,75,0.07)" stroke="rgba(50,215,75,0.55)" strokeWidth="1.1"/>
  <text x="252" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="252" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">user defined objects: feature, action, view, content</text>
  <rect x="240" y="192" width="170" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="210" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Kind of UDO</text>
  <text x="252" y="233" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Composite Page</text>
  <text x="400" y="233" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">161</text>
  <line x1="241" y1="240" x2="409" y2="240" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="257" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">EnterpriseOne Pages</text>
  <text x="400" y="257" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">471</text>
  <line x1="241" y1="264" x2="409" y2="264" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="281" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Grid Format</text>
  <text x="400" y="281" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">522</text>
  <line x1="241" y1="288" x2="409" y2="288" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="305" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">One View Reports</text>
  <text x="400" y="305" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">247</text>
  <line x1="241" y1="312" x2="409" y2="312" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="314" width="168" height="22" fill="rgba(74,158,255,0.14)"/>
  <text x="252" y="329" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">One View Watchlist</text>
  <text x="400" y="329" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">505</text>
  <line x1="241" y1="336" x2="409" y2="336" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="353" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Personal Forms</text>
  <text x="400" y="353" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">16</text>
  <line x1="241" y1="360" x2="409" y2="360" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="377" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Query</text>
  <text x="400" y="377" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1122</text>
  <line x1="241" y1="384" x2="409" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="401" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Rule</text>
  <text x="400" y="401" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">34</text>
  <line x1="241" y1="408" x2="409" y2="408" stroke="#1f2937" strokeWidth="1"/>
  <rect x="416" y="192" width="210" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="426" y="200" width="190" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="436" y="213.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Find a UDO, an application…</text>
  <text x="426" y="242" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Open Vouchers</text>
  <text x="426" y="255" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">P0411 · W0411G · ZJDE0001</text>
  <line x1="417" y1="262" x2="625" y2="262" stroke="#1f2937" strokeWidth="1"/>
  <rect x="417" y="264" width="208" height="34" fill="rgba(74,158,255,0.14)"/>
  <text x="426" y="278" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Late Receipts</text>
  <text x="426" y="291" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">P43081 · W43081A · ZJDE0002</text>
  <line x1="417" y1="298" x2="625" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <text x="426" y="314" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Orders on Hold</text>
  <text x="426" y="327" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">P4210 · W4210A · ZJDE0003</text>
  <line x1="417" y1="334" x2="625" y2="334" stroke="#1f2937" strokeWidth="1"/>
  <text x="426" y="350" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Credit Limit Exceeded</text>
  <text x="426" y="363" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">P03B2002 · W03B2002A · ZJDE0001</text>
  <line x1="417" y1="370" x2="625" y2="370" stroke="#1f2937" strokeWidth="1"/>
  <text x="426" y="386" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Unposted Batches</text>
  <text x="426" y="399" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">P0011 · W0011A · ZJDE0004</text>
  <line x1="417" y1="406" x2="625" y2="406" stroke="#1f2937" strokeWidth="1"/>
  <rect x="632" y="192" width="328" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="642" y="210" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Who sees Late Receipts</text>
  <rect x="633" y="220" width="326" height="34" fill="rgba(255,255,255,0.03)"/>
  <text x="642" y="241" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="832" y="232" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">SEES IT</text>
  <g><rect x="825.5" y="237" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="832.0" y="246.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="854" y="241" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WHY</text>
  <text x="642" y="272" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Everybody</text>
  <text x="692.84" y="272" fill="#64748b" fontSize="8.0" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <g opacity="0.42"><rect x="825.5" y="262" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="832.0" y="271.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="854" y="272" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">no line of its own</text>
  <line x1="633" y1="281" x2="959" y2="281" stroke="#1f2937" strokeWidth="1"/>
  <text x="642" y="298" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="700.7" y="298" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <g opacity="0.42"><rect x="825.5" y="288" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="832.0" y="297.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="854" y="298" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">no line of its own</text>
  <line x1="633" y1="307" x2="959" y2="307" stroke="#1f2937" strokeWidth="1"/>
  <text x="642" y="324" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="674.35" y="324" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <g><rect x="825.5" y="314" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="832.0" y="323.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="854" y="324" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">its own line</text>
  <line x1="633" y1="333" x2="959" y2="333" stroke="#1f2937" strokeWidth="1"/>
  <text x="642" y="350" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">PURCH_MGR</text>
  <text x="695.43" y="350" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <g><rect x="825.5" y="340" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="832.0" y="349.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="854" y="350" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">its own line</text>
  <line x1="633" y1="359" x2="959" y2="359" stroke="#1f2937" strokeWidth="1"/>
  <text x="642" y="376" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_REP</text>
  <text x="695.43" y="376" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <g opacity="0.42"><rect x="825.5" y="366" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="832.0" y="375.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="854" y="376" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">no line of its own</text>
  <line x1="633" y1="385" x2="959" y2="385" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="430" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">A full box is the role's own line on this UDO; a pale one comes from a line on all UDOs or from everybody. Without any line, a UDO is not seen.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start from a UDO</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its kind, then the UDO</text>
  <line x1="200" y1="87.0" x2="686.48" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kinds of UDO</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its count</text>
  <line x1="200" y1="267.0" x2="260" y2="325" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The UDOs of the kind</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Object Librarian catalogue, search</text>
  <line x1="200" y1="357.0" x2="436" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">changes wait for it</text>
  <line x1="1000" y1="117.0" x2="935" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
  <rect x="1000" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Heading box</text>
  <text x="1010" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every role listed, not Everybody</text>
  <line x1="1000" y1="245.0" x2="839" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
  <rect x="1000" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Full or pale box</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">own line · all UDOs or everybody</text>
  <line x1="1000" y1="337.0" x2="839" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njud-arrow)"/>
</svg>

---

## Pick the UDO \{#pick\}

Three panels, from left to right:

| Panel | Content |
|---|---|
| **Kind of UDO** | The kinds of UDO by name, each with how many UDOs it holds. The first kind is picked when the page opens. |
| **The UDOs of the kind** | From the Object Librarian's catalogue: each UDO by its name, with the application, form and version it belongs to. A search (*Find a UDO, an application…*) looks in the name, the identifier, the application and the form. The first 300 are listed: a few letters narrow the list. |
| **Who sees** *UDO* | The roles, with one box, **Sees it**. |

When the catalogue cannot be read, a banner says so and only the UDOs already named by the UDO security are listed.

---

## Who sees a UDO \{#who-sees\}

What decides for a role, in this order:

1. its own line on the UDO;
2. else its own line on all UDOs (`*ALL`) of the kind;
3. else everybody's line on the UDO;
4. else everybody's line on all UDOs.

Without any line, a UDO is not seen.

A **full** box is the role's own line on this UDO; a **pale** one comes from a line on all UDOs or from everybody. **Why** says *its own line* or *no line of its own*; hovering the box gives the line that decides.

### Change it \{#change\}

- **Tick or untick a box**: the role gets its own line on the UDO — added, or changed when it has one.
- **The box in the column's heading** sets every role listed (after a search: those found), never *Everybody*.
- **Remove its line** deletes the role's own line: it then follows the next line in the order above.
- Changes wait for **Save**; **Discard** drops them. Changing *Everybody* asks first.

The lines are view lines of the UDO security, written through the UDO Security screen's own queries — captured in the change package as from that screen. A new line carries the UDO's kind, its identifier and name, its application, form and version, and *All Product Codes* (`*ALL`).

A role's code is a link: it opens that role in the starting point **a user or role**, on its **UDO** tab, where its UDO security lines are listed one kind of security at a time.

---

## Access \{#access\}

The page is **Security Management** in the Nomajde menu; the predefined roles **Security administrator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). The lines are written with the rights of the UDO Security screen (**Security Maintenance → UDO Security**).

---

## Tips & best practices \{#tips\}

- **Close a kind for Everybody, then open UDO by UDO**: with a line on all UDOs for `*PUBLIC`, each UDO reaches only the roles given it.
- **Search by application** to find the UDOs built on one program — a watchlist and a query on the same application often go together.
- **Check the result** in [Simulate Security](../reviews/simulate-security.md), which tries a UDO change before it is written.
