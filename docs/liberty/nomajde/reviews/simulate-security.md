---
title: Simulate Security
description: "Reviews → Simulate Security in Nomajde: try a change of the JD Edwards EnterpriseOne security — an application, a form, a report or a whole module, a menu or a task, a UDO, a table's column or rows — for an existing role, several roles merged, a user or a new role designed from scratch, see what it would do before and after with the rule that decides, then apply it as security lines or keep it as a test case."
keywords: [Nomajde, JD Edwards, JDE E1, simulate security, what-if, Security Workbench, F00950, menu filtering, F9006, UDO security, F00950W, column security, row security, "*PUBLIC", "*ALL", role sequence, new role, test case]
---

# Simulate Security

**Reviews → Simulate Security** answers the question the Security Workbench cannot answer at a glance: *what would this change do?* A JD Edwards EnterpriseOne security grows line by line — on users, on roles, on `*PUBLIC`, on one object or on `*ALL`, in the Security Workbench, the menu filtering and the UDO security — and the effect of one more line is hard to read from the lines themselves. The page evaluates them the way JD Edwards does: pick **who**, try a change, and each tab shows **before and after**, with the rule that decides.

Nothing is written while changes are tried. **Apply…** writes them as security lines, through the screens that hold them, once they say what is wanted; **Keep as a test case…** keeps what they show, as the security is today, among the [security test cases](../security-maintenance/security-test-cases.md).

The page works in two steps: **1 · Who** and **2 · The security**, in five tabs.

---

## At a glance

<svg viewBox="0 0 1200 474" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsim-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsim-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsim-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsim-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="440" rx="14" fill="url(#njsim-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Simulate Security</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Try a change of the security and see what it would do — nothing is written.</text>
  <rect x="240" y="76" width="720" height="82" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="78" width="3" height="78" rx="1.5" fill="#4a9eff"/>
  <circle cx="263" cy="94" r="9" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="263" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="280" y="98" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Who</text>
  <rect x="893" y="84" width="53" height="22" rx="5" fill="url(#njsim-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="919.5" y="98.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Apply…</text>
  <rect x="757" y="84" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="821.0" y="98.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Keep as a test case…</text>
  <rect x="254" y="110" width="218" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="255" y="111" width="142" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="326.0" y="124.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">An existing role or user</text>
  <line x1="398" y1="115" x2="398" y2="127" stroke="#334155" strokeWidth="1"/>
  <text x="435.0" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">A new role</text>
  <rect x="482" y="112" width="83" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="523.5" y="124.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AP_MANAGER  ×</text>
  <rect x="575" y="110" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="585" y="124.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">add a role or a user…  ▾</text>
  <text x="254" y="148" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">JD Edwards looks in this order: AP_MANAGER → &#42;PUBLIC</text>
  <rect x="240" y="166" width="720" height="276" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="168" width="3" height="272" rx="1.5" fill="#c084fc"/>
  <circle cx="263" cy="184" r="9" fill="none" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="263" y="187.5" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="280" y="188" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">The security — as it is, and what you try</text>
  <rect x="254.0" y="198" width="133.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="264.0" y="212" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CURRENT</text>
  <text x="264.0" y="226" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">183 line(s)</text>
  <rect x="393.6" y="198" width="133.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="403.6" y="212" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <text x="403.6" y="226" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">nothing tried</text>
  <rect x="533.2" y="198" width="133.6" height="36" rx="8" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="543.2" y="212" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENUS</text>
  <text x="543.2" y="226" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">1 tried · 1 of 1 change</text>
  <rect x="672.8" y="198" width="133.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="682.8" y="212" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDOS</text>
  <text x="682.8" y="226" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">nothing tried</text>
  <rect x="812.4" y="198" width="133.6" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="822.4" y="212" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="822.4" y="226" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">nothing tried</text>
  <text x="254" y="252" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FOR</text>
  <rect x="254" y="258" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="272.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">AP_MANAGER  ▾</text>
  <text x="394" y="252" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK VIEW</text>
  <rect x="394" y="258" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="404" y="272.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">91 EnterpriseOne Menus  ▾</text>
  <text x="574" y="252" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENU OR TASK</text>
  <rect x="574" y="258" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="584" y="272.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Supplier Master</text>
  <rect x="734" y="258" width="88" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="735" y="259" width="42" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="756.0" y="272.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Hide</text>
  <line x1="778" y1="263" x2="778" y2="275" stroke="#334155" strokeWidth="1"/>
  <text x="800.0" y="272.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Show</text>
  <rect x="830" y="258" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="272.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Try it</text>
  <rect x="254" y="288" width="692" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="302.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER: hide Supplier Master</text>
  <text x="934" y="302.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="254" y="316" width="692" height="22" rx="6" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="264" y="330.5" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">Supplier Master also sits under Daily Processing, where it stays shown: what is under it is still reached from there.</text>
  <rect x="254" y="349" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="271" y="358" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Only what changes</text>
  <text x="254" y="378" fill="#cbd5e1" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">How it is decided</text>
  <text x="334.874" y="378" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">— Menu filtering is kept per role (and for &#42;PUBLIC), never per user. A task is hidden for a role when its line says so…</text>
  <rect x="254" y="390" width="692" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="405.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENU / TASK</text>
  <text x="514" y="405.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUNS</text>
  <text x="634" y="405.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SHOWN</text>
  <text x="804" y="405.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT CHANGES</text>
  <rect x="254" y="418" width="692" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="432.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Supplier Master</text>
  <text x="514" y="432.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P04012</text>
  <text x="634" y="432.5" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NO</text>
  <text x="652.08" y="432.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">(was yes)</text>
  <text x="804" y="432.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">shown: yes → no</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Who</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a role, roles merged, a user, a new role</text>
  <line x1="200" y1="117.0" x2="254" y2="121" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five tabs</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Current, then four kinds of change</text>
  <line x1="200" y1="217.0" x2="254" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="20" y="268" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="283" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A change to try</text>
  <text x="30" y="296" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked in a list, for the role you say</text>
  <line x1="200" y1="285.0" x2="254" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="20" y="390" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="405" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Before and after</text>
  <text x="30" y="418" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the answer, and what changes</text>
  <line x1="200" y1="407.0" x2="254" y2="430" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Apply… / Keep as a test case…</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">for every change tried</text>
  <line x1="1000" y1="87.0" x2="860" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shown elsewhere</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">hidden here, still reached there</text>
  <line x1="1000" y1="317.0" x2="946" y2="327" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
  <rect x="1000" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The rule that decides</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">said for each kind of change</text>
  <line x1="1000" y1="377.0" x2="860" y2="375" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsim-arrow)"/>
</svg>

---

## 1 · Who \{#who\}

<svg viewBox="0 0 1200 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsimw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsimw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsimw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsimw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="244" rx="14" fill="url(#njsimw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="34" width="720" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="36" width="3" height="96" rx="1.5" fill="#4a9eff"/>
  <circle cx="263" cy="52" r="9" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="263" y="55.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="280" y="56" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Who</text>
  <text x="310.48" y="56" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Several roles are read together, as a merge would join them.</text>
  <rect x="254" y="68" width="218" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="255" y="69" width="142" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="326.0" y="82.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">An existing role or user</text>
  <line x1="398" y1="73" x2="398" y2="85" stroke="#334155" strokeWidth="1"/>
  <text x="435.0" y="82.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">A new role</text>
  <rect x="482" y="70" width="83" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="523.5" y="82.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AP_MANAGER  ×</text>
  <rect x="571" y="70" width="73" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="607.5" y="82.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AP_CLERK  ×</text>
  <rect x="654" y="68" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="664" y="82.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">add a role or a user…  ▾</text>
  <text x="254" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">JD Edwards looks in this order: AP_MANAGER → AP_CLERK → &#42;PUBLIC</text>
  <rect x="240" y="148" width="720" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="150" width="3" height="96" rx="1.5" fill="#4a9eff"/>
  <circle cx="263" cy="166" r="9" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="263" y="169.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="280" y="170" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Who</text>
  <rect x="254" y="182" width="218" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="326.0" y="196.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">An existing role or user</text>
  <rect x="399" y="183" width="72" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="435.0" y="196.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A new role</text>
  <rect x="482" y="182" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="196.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">FIN_CLOSE</text>
  <text x="254" y="224" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">A new role has no line yet: only what everybody gets (&#42;PUBLIC) applies. Try what it should hold, then Apply creates it.</text>
  <rect x="20" y="62" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="77" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">An existing role or user</text>
  <text x="30" y="90" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one, or several roles merged</text>
  <line x1="200" y1="79.0" x2="254" y2="79" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimw-arrow)"/>
  <rect x="20" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A new role</text>
  <text x="30" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">designed from scratch</text>
  <line x1="200" y1="193.0" x2="254" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimw-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles merged</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each pill adds one; × takes it out</text>
  <line x1="1000" y1="57.0" x2="780" y2="74" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimw-arrow)"/>
  <rect x="1000" y="95" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="110" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The order JD Edwards reads</text>
  <text x="1010" y="123" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the user, its roles, then everybody</text>
  <line x1="1000" y1="112.0" x2="780" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimw-arrow)"/>
  <rect x="1000" y="205" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="220" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Only everybody applies</text>
  <text x="1010" y="233" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">until Apply creates the role</text>
  <line x1="1000" y1="222.0" x2="920" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimw-arrow)"/>
</svg>

A switch at the top of the step chooses between **An existing role or user** and **A new role**.

| Choice | What is read |
|---|---|
| **A role** | The role's own lines, then `*PUBLIC`. A role that holds other roles is read alone: it gets nothing from them until a merge writes them into its own lines. |
| **Several roles** | The roles read together, as a merge would join them: each role picked appears as a pill, **×** takes it back. |
| **A user** | The user's own lines, then the lines of every role the user holds today, then `*PUBLIC` — what the user gets when signing on with `*ALL`, the default sign-on role that combines all the roles assigned to them. |
| **A new role** | A name typed in the field (ten characters at most): the role does not exist yet and has no line, so only what everybody gets (`*PUBLIC`) applies. The changes tried say what it should hold; **Apply…** creates it. |

The field **add a role or a user…** lists the users and the roles of JD Edwards, and `*PUBLIC`; its *Type* column filters one kind or the other. Once someone is picked, only roles are offered.

Under the pills, **JD Edwards looks in this order** gives the sequence the page reads: the user, its roles from the highest sequence, then `*PUBLIC`.

The page reads its address: `…/app/nomajde/secsim?who=AP_MANAGER,AP_CLERK` opens it on those roles. A link of this kind fits in a ticket that asks *"what would happen if…?"*.

---

## 2 · The security \{#what\}

The second step shows the security in five tabs. Each tab heading gives its count: the lines that apply for **Current**; for the four others, how many changes were tried there and how many rows they change (*1 tried · 3 of 12 change*), or *nothing tried*. A tab where something changes shows its count in orange.

| Tab | What it holds |
|---|---|
| **Current** | Every security line that applies today, read only. |
| **Applications** | A change of the right to run: an application, a form or a report, or a whole module. |
| **Menus** | A menu or a task shown or hidden (menu filtering). |
| **UDOs** | A user defined object shown or hidden, or all the UDOs of one kind. |
| **Tables** | A column (view, add, change) or rows (a range of values) of a table. |

### Current \{#current\}

<svg viewBox="0 0 1200 248" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsimc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsimc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsimc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsimc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="210" rx="14" fill="url(#njsimc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240.0" y="36" width="139.2" height="36" rx="8" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="250.0" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CURRENT</text>
  <text x="250.0" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">183 line(s)</text>
  <rect x="385.2" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="395.2" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <text x="395.2" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">nothing tried</text>
  <rect x="530.4" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="540.4" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENUS</text>
  <text x="540.4" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">nothing tried</text>
  <rect x="675.6" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="685.5999999999999" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDOS</text>
  <text x="685.5999999999999" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">nothing tried</text>
  <rect x="820.8" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="830.8" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="830.8" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">nothing tried</text>
  <rect x="240" y="86" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="101.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHERE</text>
  <text x="330" y="101.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND</text>
  <text x="450" y="101.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ON WHAT</text>
  <text x="650" y="101.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT SAYS</text>
  <text x="870" y="101.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINE OF</text>
  <rect x="240" y="114" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="128.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="330" y="128.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="450" y="128.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">P0411</text>
  <text x="650" y="128.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Run Application (Y/N) ✓ · Update Action ✓</text>
  <text x="870" y="128.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <rect x="240" y="140" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="154.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="330" y="154.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="450" y="154.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">P4310</text>
  <text x="650" y="154.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Run Application (Y/N) ✕</text>
  <text x="870" y="154.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <rect x="240" y="166" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="330" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="450" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Watchlist · OVW0411G_1607110002JDE</text>
  <text x="650" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Viewable: 1</text>
  <text x="870" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <rect x="240" y="192" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="330" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Application Security</text>
  <text x="450" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">&#42;ALL</text>
  <text x="650" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Run Application (Y/N) ✕</text>
  <text x="870" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <rect x="20" y="36" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Current</text>
  <text x="30" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read only: what applies today</text>
  <line x1="200" y1="53.0" x2="240" y2="54" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimc-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menu, application or UDO</text>
  <line x1="200" y1="167.0" x2="260" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimc-arrow)"/>
  <rect x="1000" y="121" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="136" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What the line says</text>
  <text x="1010" y="149" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">✓ allowed · ✕ denied</text>
  <line x1="1000" y1="138.0" x2="870" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimc-arrow)"/>
  <rect x="1000" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Whose line it is</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the user, its roles, &#42;PUBLIC</text>
  <line x1="1000" y1="237.0" x2="900" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimc-arrow)"/>
</svg>

**Current** lists, read only, every line that applies to who was picked — for a new role, only the `*PUBLIC` lines:

| Column | Content |
|---|---|
| **Where** | *Menu*, *Application* or *UDO*. |
| **Kind** | The kind of security line, as JD Edwards names it. |
| **On what** | What the line secures: the object, the menu task, the UDO with its kind. |
| **What it says** | The settings of the line; a box setting is shown as ✓ (allowed) or ✕ (denied). |
| **Line of** | The user, the role or `*PUBLIC` the line is written on. |

The grid has the usual search, filters, columns and **Export**.

### Trying a change \{#try\}

The four other tabs work the same way. A row of fields describes the change, every value picked in a list:

- **For** — who the line would be written on: who was picked, the roles of a user, or `*PUBLIC`. A menu change is never written on a user: menu filtering is kept per role.
- What the change is about — the fields of the tab, described below.
- **Deny** / **Allow** (**Hide** / **Show** on the Menus and UDOs tabs), then **Try it**.

Each change tried appears under the fields, in words — *AP_MANAGER: hide Supplier Master* — with **×** to take it back. What it would do shows at once underneath:

- **Only what changes** keeps the rows whose answer moves;
- **How it is decided** restates the rule JD Edwards applies for this kind of security;
- the grid gives each row as it would be; a value that moves shows what it was — *NO (was yes)* — and **What changes** sums it up, as `run: yes → no`.

The changes tried stay on the page while the tabs are visited: **Apply…** and **Keep as a test case…** act on all of them.

### Applications \{#applications\}

<svg viewBox="0 0 1200 356" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsima-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsima-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsima-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsima-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="292" rx="14" fill="url(#njsima-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240.0" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CURRENT</text>
  <text x="250.0" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">183 line(s)</text>
  <rect x="385.2" y="36" width="139.2" height="36" rx="8" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="395.2" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <text x="395.2" y="64" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">1 tried · 3 of 3 change</text>
  <rect x="530.4" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="540.4" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENUS</text>
  <text x="540.4" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">nothing tried</text>
  <rect x="675.6" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="685.5999999999999" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDOS</text>
  <text x="685.5999999999999" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">nothing tried</text>
  <rect x="820.8" y="36" width="139.2" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="830.8" y="50" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLES</text>
  <text x="830.8" y="64" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">nothing tried</text>
  <text x="240" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FOR</text>
  <rect x="240" y="110" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="124.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">AP_MANAGER  ▾</text>
  <text x="370" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SECURE</text>
  <rect x="370" y="110" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="124.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">a whole module  ▾</text>
  <text x="530" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODULE</text>
  <rect x="530" y="110" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="540" y="124.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Accounts Payable  ▾</text>
  <rect x="700" y="110" width="93" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="701" y="111" width="42" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="722.0" y="124.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Deny</text>
  <line x1="744" y1="115" x2="744" y2="127" stroke="#334155" strokeWidth="1"/>
  <text x="768.5" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Allow</text>
  <rect x="801" y="110" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="827.5" y="124.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Try it</text>
  <rect x="240" y="140" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="154.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER: deny the module Accounts Payable</text>
  <text x="948" y="154.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="173" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M242.5,178.5 L244.8,180.8 L248.8,176" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="257" y="182" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Only what changes</text>
  <text x="390" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">How it is decided — JD Edwards allows what no rule forbids…</text>
  <rect x="240" y="194" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="320" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="470" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SYSTEM</text>
  <text x="530" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="580" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="685" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DECIDED BY</text>
  <text x="830" y="209.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT CHANGES</text>
  <rect x="240" y="222" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="236.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="320" y="236.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Standard Voucher Entry</text>
  <text x="470" y="236.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">04</text>
  <text x="530" y="236.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <text x="580" y="236.5" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NO</text>
  <text x="598.08" y="236.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">(was yes)</text>
  <text x="685" y="236.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER on P0411</text>
  <text x="830" y="236.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">run: yes → no</text>
  <rect x="240" y="248" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="262.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="320" y="262.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Manual Payments</text>
  <text x="470" y="262.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">04</text>
  <text x="530" y="262.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <text x="580" y="262.5" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NO</text>
  <text x="598.08" y="262.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">(was yes)</text>
  <text x="685" y="262.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER on P0413M</text>
  <text x="830" y="262.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">run: yes → no</text>
  <rect x="240" y="274" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">R04570</text>
  <text x="320" y="288.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Create Payment Control Groups</text>
  <text x="470" y="288.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">04</text>
  <text x="530" y="288.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UBE</text>
  <text x="580" y="288.5" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NO</text>
  <text x="598.08" y="288.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">(was yes)</text>
  <text x="685" y="288.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER on R04570</text>
  <text x="830" y="288.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">run: yes → no</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">An application or a module</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a form, a report (run) too</text>
  <line x1="200" y1="83.0" x2="370" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsima-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The changes tried</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">× takes one back</text>
  <line x1="200" y1="177.0" x2="240" y2="151" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsima-arrow)"/>
  <rect x="20" y="304" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="319" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Before and after</text>
  <text x="30" y="332" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the right to run</text>
  <line x1="200" y1="321.0" x2="600" y2="296" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsima-arrow)"/>
  <rect x="1000" y="94" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="109" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Allow or deny</text>
  <text x="1010" y="122" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">then Try it</text>
  <line x1="1000" y1="111.0" x2="820" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsima-arrow)"/>
  <rect x="1000" y="304" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="319" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The line that decides</text>
  <text x="1010" y="332" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the line tried wins</text>
  <line x1="1000" y1="321.0" x2="740" y2="296" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsima-arrow)"/>
</svg>

**Secure** chooses between **an application, a form or a report** and **a whole module**:

| Field | Content |
|---|---|
| **Application, form or report** | Picked in the list of the Object Librarian, with its type (`APPL`, `FORMS`, `UBE`) as a filter. The change is on the right to run. |
| **Module** | A licence component as Nomasx-1 defines it (*Settings → Licences*), filtered by category: the change is the right to run every application and report of the module. |

The grid lists the objects concerned: **Object**, **Description**, **System**, **Type**, **Run** (*yes* or **NO**, the line that decides on hover), **Decided by** — the line that decides, as *who on what* (`AP_MANAGER on P0411`, `BUYER on *ALL`) or *no rule* — and **What changes**.

### Menus \{#menus\}

**Task view** lists the task views of JD Edwards; the largest is proposed. **Menu or task** opens **Choose a menu or a task**: the menus of that view drawn as a tree, folders opened with a click. A search of two characters or more lists the matches — menus, tasks or the application they run — each with the path of folders where it sits; **Choose** (or a double click) takes the one selected.

The grid lists the menu or task tried and everything under it: **Menu / task**, **Runs** (the application it opens), **Shown** and **What changes**. A task hidden in one folder that also sits in another, where it stays shown, gets a warning: *Supplier Master also sits under Daily Processing, where it stays shown: what is under it is still reached from there.*

### UDOs \{#udos\}

**Kind of UDO** picks the kind (watchlist, grid format, composite page…); **UDO** picks one of them, or stays blank for **all the UDOs of this kind**. The grid gives **Type**, **Name**, **UDO**, **Object**, **Seen**, **Decided by** and **What changes**.

### Tables \{#tables\}

<svg viewBox="0 0 1200 376" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsimt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsimt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsimt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsimt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="338" rx="14" fill="url(#njsimt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FOR</text>
  <rect x="240" y="52" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">AP_MANAGER  ▾</text>
  <text x="358" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="358" y="52" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="368" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">F0101  ▾</text>
  <text x="456" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SECURE</text>
  <rect x="456" y="52" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="466" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">rows (a range of values)  ▾</text>
  <text x="664" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLUMN</text>
  <rect x="664" y="52" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="674" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">AC01  ▾</text>
  <text x="752" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM</text>
  <rect x="752" y="52" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="762" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">100</text>
  <text x="820" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THRU</text>
  <rect x="820" y="52" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="830" y="66.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">199</text>
  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ON THESE ROWS, MAY</text>
  <rect x="240" y="101" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M242.5,106.5 L244.8,108.8 L248.8,104" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="257" y="110" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">view</text>
  <rect x="293.16" y="101" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="310.16" y="110" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">add</text>
  <rect x="341.28000000000003" y="101" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="358.28000000000003" y="110" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">change</text>
  <rect x="404.52000000000004" y="101" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="421.52000000000004" y="110" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">delete</text>
  <rect x="477.76000000000005" y="98" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="504.26000000000005" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Try it</text>
  <rect x="240" y="128" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="142.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER: deny view on F060116.SSN</text>
  <text x="948" y="142.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="154" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="168.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER: rows of F0101.AC01 from 100 to 199 — may view</text>
  <text x="948" y="168.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="190" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="320" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLUMN</text>
  <text x="390" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="500" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="560" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANGE</text>
  <text x="630" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DECIDED BY</text>
  <text x="800" y="205.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT CHANGES</text>
  <rect x="240" y="218" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="232.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F060116</text>
  <text x="320" y="232.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SSN</text>
  <text x="390" y="232.5" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NO</text>
  <text x="408.08" y="232.5" fill="#fb923c" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">(was yes)</text>
  <text x="500" y="232.5" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">yes</text>
  <text x="560" y="232.5" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">yes</text>
  <text x="630" y="232.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER on F060116</text>
  <text x="800" y="232.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">view: yes → no</text>
  <text x="240" y="256" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Ranges of values that apply (row security: listed, not evaluated)</text>
  <rect x="240" y="266" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <text x="360" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="420" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLUMN</text>
  <text x="484" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FROM</text>
  <text x="534" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THRU</text>
  <text x="584" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="634" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="690" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANGE</text>
  <text x="752" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DELETE</text>
  <text x="818" y="281.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT HAPPENS</text>
  <rect x="240" y="294" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="360" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="420" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AC01</text>
  <text x="484" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">100</text>
  <text x="534" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">199</text>
  <text x="584" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="634" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="690" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="752" y="308.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="818" y="308.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">starts to apply</text>
  <rect x="240" y="320" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="360" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="420" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AC01</text>
  <text x="484" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="534" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">999</text>
  <text x="584" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="634" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="690" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="752" y="334.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="818" y="334.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="46" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="61" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A column or rows</text>
  <text x="30" y="74" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">table and column picked in lists</text>
  <line x1="200" y1="63.0" x2="240" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimt-arrow)"/>
  <rect x="20" y="124" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="139" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two changes tried</text>
  <text x="30" y="152" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a column right, a range</text>
  <line x1="200" y1="141.0" x2="240" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimt-arrow)"/>
  <rect x="20" y="206" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Columns: before and after</text>
  <text x="30" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">view, add, change</text>
  <line x1="200" y1="223.0" x2="390" y2="222" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimt-arrow)"/>
  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">On these rows, may</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">view, add, change, delete</text>
  <line x1="200" y1="101.0" x2="240" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimt-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ranges that apply</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listed, not evaluated</text>
  <line x1="1000" y1="307.0" x2="960" y2="311" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimt-arrow)"/>
</svg>

**Table** is picked in the list of tables; **Secure** chooses between **a column** and **rows (a range of values)**.

| Change | Fields |
|---|---|
| **A column** | **Column** (the data items of the table) and **Right**: *view*, *add*, *change*, or *view, add and change*. |
| **Rows** | **Column**, **From**, **Thru**, and **On these rows, may**: one box each for *view*, *add*, *change* and *delete*. |

The grid gives each column of the tables tried: **Table**, **Column**, **View**, **Add**, **Change**, **Decided by** and **What changes**. Under it, **Ranges of values that apply** lists the row security of these tables — who, table, column, from, thru, and the four rights — and marks *starts to apply* for a range tried. Ranges are listed, not evaluated.

---

## How it is decided \{#rule\}

Under each tab, **How it is decided** restates the rule the page applies:

| Tab | Rule |
|---|---|
| **Applications** | JD Edwards allows what no rule forbids. The user's own rules come first, then the roles' (highest sequence first), then `*PUBLIC`; at one level the most precise rule wins — a line on the object before a line on `*ALL`, a line on a form or a version before a line on the whole object. |
| **Menus** | Menu filtering is kept per role (and for `*PUBLIC`), never per user. A task is hidden for a role when its line says so — else when `*PUBLIC`'s does; a hidden folder hides what is under it. A user sees a task when at least one of the roles shows it. |
| **UDOs** | A UDO is seen when the first line found says so: the user's own, then the roles' (highest sequence first), then `*PUBLIC`'s — for each, the line on the UDO before the line on `*ALL`. No line: not seen. |
| **Tables** | The first line found decides, from the user to its roles (highest sequence first) to `*PUBLIC` — for each, the line on the table before the line on `*ALL`. No line: allowed. Ranges of values are listed, not evaluated. |

A change tried wins over the line already written on the same place.

---

## Apply \{#apply\}

<svg viewBox="0 0 1200 330" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsimp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsimp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsimp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsimp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="20" width="680" height="300" rx="14" fill="url(#njsimp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="280" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Write the changes to JD Edwards</text>
  <line x1="260" y1="58" x2="940" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <rect x="280" y="70" width="640" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="84.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER: deny the module Accounts Payable</text>
  <rect x="280" y="98" width="640" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="112.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER: hide Supplier Master</text>
  <rect x="280" y="126" width="640" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="140.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AP_MANAGER: deny view on F060116.SSN</text>
  <text x="280" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WRITE THEM</text>
  <rect x="280" y="176" width="363" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="367.5" y="191.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">on the role each was tried for</text>
  <line x1="455" y1="181" x2="455" y2="195" stroke="#334155" strokeWidth="1"/>
  <text x="504.5" y="191.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">on another role</text>
  <rect x="555" y="177" width="87" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="598.5" y="191.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">on a new role</text>
  <text x="280" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME OF THE NEW ROLE</text>
  <rect x="280" y="226" width="240" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="240.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">AP_SUPERVISOR</text>
  <text x="280" y="266" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The role is created with the Role Management form, then the lines are written on it.</text>
  <line x1="260" y1="280" x2="940" y2="280" stroke="#1f2937" strokeWidth="1"/>
  <rect x="872" y="290" width="48" height="22" rx="5" fill="url(#njsimp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="896.0" y="304.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Write</text>
  <rect x="816" y="290" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="840.0" y="304.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Close</text>
  <rect x="20" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Every change tried</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">whatever the tab</text>
  <line x1="220" y1="107.0" x2="280" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimp-arrow)"/>
  <rect x="20" y="175" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="190" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where they are written</text>
  <text x="30" y="203" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the role tried, another, a new one</text>
  <line x1="220" y1="192.0" x2="280" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimp-arrow)"/>
  <rect x="980" y="225" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="240" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A new role</text>
  <text x="990" y="253" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">created first, by its own form</text>
  <line x1="980" y1="242.0" x2="520" y2="237" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimp-arrow)"/>
  <rect x="980" y="285" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="300" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Write</text>
  <text x="990" y="313" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">after a confirmation</text>
  <line x1="980" y1="302.0" x2="912" y2="301" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsimp-arrow)"/>
</svg>

**Apply…**, at the top of the page once a change has been tried, opens **Write the changes to JD Edwards** with every change tried, whatever the tab. **Write them** says where:

| Choice | Effect |
|---|---|
| **on the role each was tried for** | Each line goes to the user, role or `*PUBLIC` given in its **For** field. |
| **on another role** | Every line goes to one existing role, picked in the list. |
| **on a new role** | Every line goes to a role that does not exist yet: its name is typed, and the role is created first with the **Role Management** form, which opens filled with that name and the next free sequence. |

For a [new role designed from scratch](#who), the dialog says that the role is created with the Role Management form, then the lines are written on it: there is no other choice.

**Write** prepares the lines and asks for a confirmation that gives how many go to each screen — Security Workbench, Menu Filtering, UDO Security — and warns when they change what **everybody** gets (`*PUBLIC`). The lines are then written one by one, through the screens' own forms and checks:

- an application, a form or a report becomes a run line of the Security Workbench; a **module** only on the objects whose answer changes, so a module already closed by a wider line needs none;
- a column or a range becomes a column or row security line of the Security Workbench;
- a menu becomes a Menu Filtering line, a UDO a UDO Security line;
- a line already written on the same place is updated rather than doubled.

A menu change cannot be written on a user: the dialog says so and writes nothing. When a line fails, the dialog says at which line it stopped and why. Once everything is written, a banner gives how many lines went to whom, and the changes tried are cleared.

---

## Keep as a test case \{#keep\}

<svg viewBox="0 0 1200 230" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njtck-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njtck-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njtck-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njtck-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="320" y="20" width="560" height="194" rx="14" fill="url(#njtck-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="340" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Keep as a test case</text>
  <line x1="320" y1="58" x2="880" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <text x="340" y="78" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What is listed, as the security is today, becomes a case of the tests</text>
  <text x="340" y="91" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">(Tests → Cases, suite jde-security).</text>
  <rect x="340" y="100" width="520" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="114.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">AP_MANAGER — month end</text>
  <rect x="340" y="134" width="203" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="441.5" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Bring my 3 former case(s) into Tests</text>
  <line x1="320" y1="172" x2="880" y2="172" stroke="#1f2937" strokeWidth="1"/>
  <rect x="817" y="182" width="43" height="22" rx="5" fill="url(#njtck-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="838.5" y="196.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="761" y="182" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="785.0" y="196.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Close</text>
  <rect x="20" y="96" width="260" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The name of the case</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a case of the same name is replaced</text>
  <line x1="280" y1="113.0" x2="340" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtck-arrow)"/>
  <rect x="20" y="150" width="260" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Former cases</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">offered once, while some are left</text>
  <line x1="280" y1="167.0" x2="340" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtck-arrow)"/>
  <rect x="920" y="170" width="260" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="930" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="930" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as the security is today</text>
  <line x1="920" y1="187.0" x2="860" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtck-arrow)"/>
</svg>

**Keep as a test case…**, beside **Apply…**, keeps what the tabs list — **as the security is today**, not as it would be with the changes tried — as a case of the tests (**Tests → Cases**, suite `jde-security`). It is offered when one role or one user is looked at. A name is typed, and **Save** writes the case:

- an application listed becomes an expectation on its right to run;
- a menu or a task, a UDO, a table's column (view, add, change) become expectations on what they answer now — 200 menus and 200 UDOs at most;
- a case of the same name is replaced.

The case is then played, compared and scheduled like every other test: see [Security test cases](../security-maintenance/security-test-cases.md). Apply the changes first, then keep the case, to make the new security the expected one.

When security cases kept in Nomajde's own database are not in the tests yet, the dialog offers **Bring my n former case(s) into Tests**: each comes in under its name, with its expectations. The samples that database held are not brought: the suite has its own.

---

## Access \{#access\}

The page is in the **Reviews** folder of the Nomajde menu. The predefined roles **Security administrator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). Writing through **Apply…** needs the right to change the Security Maintenance screens, as the **Security administrator** role gives.

The connection used to read JD Edwards needs read access to the Security Workbench (`F00950`), the menu filtering (`F9006`) and the menus (`F9000`, `F9001`), the UDO security (`F00950W`) and catalogue (`F9860W`), the profiles (`F0092`), the roles and their sequence (`F00926`), the role assignments (`F95921`) and the Object Librarian (`F9860`). The modules come from the licence settings of Nomasx-1.

---

## Tips & best practices \{#tips\}

- **Simulate before writing.** A role about to be given, a `*PUBLIC` line about to be closed, a module to take away: each tab shows what moves, row by row, before anything is written.
- **Design a role from scratch** with **A new role**: try what it should hold, check the answer tab by tab, then **Apply…** creates it and writes its lines.
- **Read *Decided by*** when an answer surprises: the line that decides is named, so the fix goes to the right user, role or `*ALL` line.
- **Check the role sequence** when a user holds roles that disagree: the role with the highest sequence is read first.
- **Keep the case after applying**, then play it after every change: [Security test cases](../security-maintenance/security-test-cases.md).
- **Read [Security consistency](./security-consistency.md)** first on a security inherited from years of changes: lines for nobody or that say nothing new make every simulation harder to read.
- **To work on one role, one object, one menu or one table directly**, use [Security Management](../security-management/overview.md); a whole module for a role is in [Secure a module](../security-management/secure-a-module.md).
