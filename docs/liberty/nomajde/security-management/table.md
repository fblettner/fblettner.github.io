---
title: A table
description: "Security Management → Start from a table in Nomajde: the columns of a JD Edwards EnterpriseOne table with their names and security line counts, who sees a column role by role (view, add, change), and the ranges of values of the row security."
keywords: [Nomajde, JD Edwards, JDE E1, Security Management, Security Workbench, F00950, column security, row security, data item, "*PUBLIC", "*ALL", table]
---

# A table

In **Security Management**, the starting point **a table** reads the security of one JD Edwards EnterpriseOne table where it is set: on its **columns** (column security — who may view, add, change a column) and on **ranges of values** (row security). Pick a table, then one of its columns: two tabs answer for that column.

Open it from **Security Management**, then **Start from → a table**. The other starting points are described in the [Security Management overview](./overview.md).

---

## At a glance

<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njtb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njtb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njtb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njtb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="425" rx="14" fill="url(#njtb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security Management</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The security of a user or a role, edited where it is read.</text>
  <rect x="240" y="72" width="720" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">START FROM</text>
  <rect x="326.48" y="79" width="80" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="366.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a user or role</text>
  <rect x="411.48" y="79" width="152" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="487.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">an application, form or report</text>
  <rect x="568.48" y="79" width="49" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="592.98" y="90.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">a table</text>
  <rect x="622.48" y="79" width="44" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="644.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a menu</text>
  <rect x="671.48" y="79" width="40" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="691.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a UDO</text>
  <rect x="716.48" y="79" width="53" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="742.98" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a module</text>
  <rect x="252" y="104" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="118.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">F0101  Address Book Master  ▾</text>
  <rect x="840" y="104" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.5" y="118.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="905" y="104" width="43" height="22" rx="5" fill="url(#njtb-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="926.5" y="118.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="148" width="356.0" height="34" rx="8" fill="rgba(255,159,10,0.07)" stroke="rgba(255,159,10,0.55)" strokeWidth="1.1"/>
  <text x="252" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Who sees a column</text>
  <text x="252" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">role by role: view, add, change</text>
  <rect x="604.0" y="148" width="356.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1.1"/>
  <text x="616.0" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ranges of values</text>
  <text x="616.0" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">row security: what a role may do on a range</text>
  <rect x="240" y="192" width="230" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="210" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Columns of F0101</text>
  <rect x="252" y="218" width="206" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="231.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Find a column…</text>
  <text x="252" y="259" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">AN8</text>
  <text x="273.81" y="259" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Number</text>
  <text x="458" y="259" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <line x1="241" y1="266" x2="469" y2="266" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="283" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">ALKY</text>
  <text x="279.08" y="283" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Long Address Number</text>
  <line x1="241" y1="290" x2="469" y2="290" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="307" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">TAX</text>
  <text x="273.81" y="307" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Tax ID</text>
  <text x="458" y="307" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <line x1="241" y1="314" x2="469" y2="314" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="316" width="228" height="22" fill="rgba(74,158,255,0.14)"/>
  <text x="252" y="331" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">ALPH</text>
  <text x="279.08" y="331" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Alpha Name</text>
  <text x="458" y="331" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <line x1="241" y1="338" x2="469" y2="338" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="355" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">DC</text>
  <text x="268.54" y="355" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Description - Compressed</text>
  <line x1="241" y1="362" x2="469" y2="362" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="379" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">MCU</text>
  <text x="273.81" y="379" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Business Unit</text>
  <line x1="241" y1="386" x2="469" y2="386" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="403" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">SIC</text>
  <text x="273.81" y="403" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Industry Classification</text>
  <line x1="241" y1="410" x2="469" y2="410" stroke="#1f2937" strokeWidth="1"/>
  <rect x="478" y="192" width="482" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="210" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Who sees ALPH — Alpha Name in F0101</text>
  <rect x="479" y="220" width="480" height="34" fill="rgba(255,255,255,0.03)"/>
  <text x="490" y="241" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="728" y="232" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">VIEW</text>
  <g><rect x="721.5" y="237" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="728.0" y="246.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="773" y="232" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">ADD</text>
  <g><rect x="766.5" y="237" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="773.0" y="246.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="823" y="232" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">CHANGE</text>
  <g><rect x="816.5" y="237" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="823.0" y="246.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="858" y="241" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WHY</text>
  <text x="490" y="272" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Everybody</text>
  <text x="540.84" y="272" fill="#64748b" fontSize="8.0" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <g opacity="0.42"><rect x="721.5" y="262" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="728.0" y="271.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="766.5" y="262" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="773.0" y="271.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="816.5" y="262" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="823.0" y="271.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="858" y="272" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">no line of its own</text>
  <line x1="479" y1="281" x2="959" y2="281" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="298" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="548.7" y="298" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Payables</text>
  <g opacity="0.42"><rect x="721.5" y="288" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="728.0" y="297.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="766.5" y="288" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="773.0" y="297.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="816.5" y="288" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="823.0" y="297.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="858" y="298" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">no line of its own</text>
  <line x1="479" y1="307" x2="959" y2="307" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="324" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">HR_MANAGER</text>
  <text x="548.7" y="324" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Human resources</text>
  <g><rect x="721.5" y="314" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="728.0" y="323.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g><rect x="766.5" y="314" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="773.0" y="323.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g><rect x="816.5" y="314" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="823.0" y="323.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="858" y="324" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">its own line</text>
  <line x1="479" y1="333" x2="959" y2="333" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="350" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">CONTRACTOR</text>
  <text x="548.7" y="350" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Contractor</text>
  <g><rect x="721.5" y="340" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="728.0" y="349.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g><rect x="766.5" y="340" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="773.0" y="349.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <g><rect x="816.5" y="340" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="823.0" y="349.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="858" y="350" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">its own line</text>
  <line x1="479" y1="359" x2="959" y2="359" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="376" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="522.35" y="376" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Buyer</text>
  <g opacity="0.42"><rect x="721.5" y="366" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="728.0" y="375.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="766.5" y="366" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="773.0" y="375.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <g opacity="0.42"><rect x="816.5" y="366" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="823.0" y="375.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="858" y="376" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">no line of its own</text>
  <line x1="479" y1="385" x2="959" y2="385" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="430" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Without any line, a column is seen and changed. The data dictionary gives each column its name.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start from a table</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">then pick the table</text>
  <line x1="200" y1="87.0" x2="588.48" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Columns in table order</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name · count of security lines</text>
  <line x1="200" y1="267.0" x2="250" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lines on the column</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">column and row security</text>
  <line x1="200" y1="347.0" x2="455" y2="327" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two tabs</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">who sees it · ranges of values</text>
  <line x1="1000" y1="167.0" x2="940" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
  <rect x="1000" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">View, add, change</text>
  <text x="1010" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">heading box: every role listed</text>
  <line x1="1000" y1="245.0" x2="780" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
  <rect x="1000" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Full or pale box</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">own line · all tables or everybody</text>
  <line x1="1000" y1="337.0" x2="735" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtb-arrow)"/>
</svg>

---

## Pick the table and a column \{#pick\}

**Pick a table…** offers the tables of the list the Security Workbench form uses, each with its name.

The panel **Columns of** *table* then lists its columns:

- **In the table's order**, as the database has them, each with its data item and its name from the data dictionary.
- **With a count**: how many column and row security lines name that column on this table.
- **With a search** (*Find a column…*) on the data item and its name.

When the columns cannot be read — the table is not in the database the connector reads — a banner says so, and the columns named by the table's security lines are listed instead.

Click a column: the two tabs answer for it.

---

## Who sees a column \{#who-sees-a-column\}

The tab lists the roles with three boxes — **View**, **Add**, **Change** — and **Everybody** (`*PUBLIC`) first, under the title *Who sees* *column* *in* *table*. A search (*Find a role…*) narrows the list.

What decides for a role, in this order:

1. its own line on the table for this column;
2. else its own line on every table (`*ALL`);
3. else everybody's line on the table;
4. else everybody's line on every table.

Without any line, a column is seen and changed.

A **full** box is the role's own line on this column; a **pale** one comes from a line on every table or from everybody. **Why** says *its own line* or *no line of its own*.

### Change it \{#change-column\}

- **Tick a box**: the role gets its own line on the column — added, or changed when it has one.
- **The box in a heading** sets that right for every role listed (after a search: those found), never for *Everybody*.
- **Remove its line** deletes the role's own line: it then follows the next line in the order above.
- **Save** writes the changes, **Discard** drops them; changing *Everybody* asks first.

The lines are column security lines (type **2**) written through the Security Workbench screen's own queries, with the data item and the table's product code — captured in the change package as from that screen.

---

## Ranges of values \{#ranges-of-values\}

The tab lists the row security of the column picked: **a line per role and range of values**, with the settings the Security Workbench screen shows for that kind of security, and a search (*Find a role, a data item, a value…*).

- **The lines on `*ALL`** — which govern this table too — are listed with them, marked *through \*ALL*, and are not changed from here: they are changed by picking `*ALL` as the object.
- **A box** changes a setting; **selected lines** can be allowed or denied as a whole (**Allow everything**, **Deny everything**), deleted (**Delete**) or unselected (**Clear**).
- **Copy** opens the Security Workbench form on a copy of the line: change what differs, then save.
- **Add a line** opens the Security Workbench form over the page, on the table, the column and the row security kind, with all its rules.
- **Save** writes the changes through the screen's own update and delete queries; **Discard** drops them.

A user or role in a line is a link to its own security (starting point **a user or role**).

---

## Access \{#access\}

The page is **Security Management** in the Nomajde menu; the predefined roles **Security administrator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). The lines are written with the rights of the [Security Workbench](../security-maintenance/security-workbench.md) screen.

---

## Tips & best practices \{#tips\}

- **Look at the counts first**: a column without a count has no security line — every role sees and changes it.
- **Close a sensitive column for Everybody**, then open it to the roles that need it: the pale boxes show at once who relies on everybody's line.
- **Keep the `*ALL` lines in mind**: a line on every table weighs on this one too, and is not changed from this view.
- **Check the result** in [Simulate Security](../reviews/simulate-security.md), which tries a column change before it is written.
