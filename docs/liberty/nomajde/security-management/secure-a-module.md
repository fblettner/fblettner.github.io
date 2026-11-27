---
title: Secure a module
description: "Security Management → Start from a module in Nomajde: the JD Edwards EnterpriseOne Security Workbench lines (type 3 to run, type 1 for add / change / delete) that open a whole module for a role — or take it away — and close it for everybody else, proposed only where the security does not already say so, then written through the Security Workbench after a confirmation."
keywords: [Nomajde, JD Edwards, JDE E1, secure a module, Security Management, Security Workbench, F00950, application security, action security, "*PUBLIC", "*ALL", module, system code, role]
---

# Secure a module

**Secure a module** is the starting point **a module** of **Security Management**: it prepares the security of a whole JD Edwards EnterpriseOne module. Pick a module, the role it is for and with what rights: the page **proposes the Security Workbench lines** that do it — for every application and report of the module, and only where the security as it is does not already say so.

The lines are reviewed first. **Write these lines** then writes them through the Security Workbench, after a confirmation; they can also be exported from the list and loaded by hand.

Open it from **Security Management**, then **Start from → a module**: the page shows one tab, **Secure a module**. The other starting points are described in the [Security Management overview](./overview.md).

---

## At a glance

<svg viewBox="0 0 1200 496" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="462" rx="14" fill="url(#njsm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <rect x="671.48" y="79" width="40" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="691.48" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">a UDO</text>
  <rect x="716.48" y="79" width="53" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="742.98" y="90.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">a module</text>
  <text x="252" y="117" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">A module, or the whole security: pick the module and the role in the tab below.</text>
  <rect x="240" y="148" width="720" height="34" rx="8" fill="rgba(255,159,10,0.07)" stroke="rgba(255,159,10,0.55)" strokeWidth="1.1"/>
  <text x="252" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Secure a module</text>
  <text x="252" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">the lines that open it for a role</text>
  <rect x="240" y="190" width="720" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="205" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">MODULE</text>
  <rect x="250" y="210" width="170" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="223.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Management · 42 · 103</text>
  <text x="428" y="205" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OR ONE SYSTEM CODE</text>
  <rect x="428" y="210" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="223.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="546" y="205" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">FOR (ROLE OR USER)</text>
  <rect x="546" y="210" width="140" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="556" y="223.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">SALES_REP  ▾</text>
  <text x="694" y="205" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">WITH</text>
  <rect x="694" y="210" width="130" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="704" y="223.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">everything but delete  ▾</text>
  <rect x="832" y="210" width="102" height="20" rx="5" fill="url(#njsm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="883.0" y="223.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Propose the lines</text>
  <rect x="252" y="235" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M254.5,240.5 L256.8,242.8 L260.8,238" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="269" y="244" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Closed for everybody else (&#42;PUBLIC)</text>
  <rect x="240.0" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248.0" y="279" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">103</text>
  <text x="248.0" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OBJECTS IN THE MODULE</text>
  <rect x="360.8333333333333" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="368.8333333333333" y="279" fill="#fb923c" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="368.8333333333333" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LINES TO ADD</text>
  <rect x="481.66666666666663" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="489.66666666666663" y="279" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="489.66666666666663" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">CLOSING LINES</text>
  <rect x="602.5" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="610.5" y="279" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="610.5" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OPENING LINES</text>
  <rect x="723.3333333333333" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="731.3333333333333" y="279" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="731.3333333333333" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">ACTION LINES</text>
  <rect x="844.1666666666666" y="262" width="115.83333333333333" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="852.1666666666666" y="279" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">100</text>
  <text x="852.1666666666666" y="291" fill="#64748b" fontSize="6.3" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OBJECTS ALREADY RIGHT</text>
  <rect x="240" y="304" width="720" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSSETY</text>
  <text x="296" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSUSER</text>
  <text x="376" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSOBNM</text>
  <text x="436" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="564" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSRUN</text>
  <text x="608" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSA</text>
  <text x="642" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSCHNG</text>
  <text x="690" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSDLT</text>
  <text x="732" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSIOK</text>
  <text x="774" y="318.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHY</text>
  <rect x="240" y="330" width="720" height="20" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="296" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="376" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="436" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="564" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="608" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="642" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="690" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="732" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="774" y="343.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">closed for everybody</text>
  <rect x="240" y="354" width="720" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="296" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_REP</text>
  <text x="376" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="436" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="564" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="608" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="642" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="690" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="732" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="774" y="367.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">opened for the role</text>
  <rect x="240" y="378" width="720" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="296" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_REP</text>
  <text x="376" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="436" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="564" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="608" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="642" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="690" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="732" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="774" y="391.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">the role's actions</text>
  <rect x="240" y="402" width="720" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="296" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="376" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P42101</text>
  <text x="436" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="564" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="608" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="642" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="690" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="732" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="774" y="415.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">closed for everybody</text>
  <text x="240" y="438" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Review the lines, then write them — or export them (Export, above the list) to load them yourself.</text>
  <rect x="240" y="446" width="117" height="22" rx="5" fill="url(#njsm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="298.5" y="460.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Write these 9 lines</text>
  <text x="367" y="461" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Each line is added through the Security Workbench, as if entered there.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start from a module</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one tab: Secure a module</text>
  <line x1="200" y1="87.0" x2="736.48" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Module or system code</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by name, with its codes</text>
  <line x1="200" y1="213.0" x2="260" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="20" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Close for &#42;PUBLIC</text>
  <text x="30" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">optional, ticked by default</text>
  <line x1="200" y1="279.0" x2="252" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type 3 = run</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type 1 = add / change / delete</text>
  <line x1="200" y1="357.0" x2="252" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">With</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">four levels, no access included</text>
  <line x1="1000" y1="167.0" x2="754" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Only what is missing</text>
  <text x="1010" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a plan applied proposes nothing</text>
  <line x1="1000" y1="279.0" x2="920" y2="279" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="416" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="431" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Write the lines</text>
  <text x="1010" y="444" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">after a confirmation that counts them</text>
  <line x1="1000" y1="433.0" x2="347" y2="457" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
</svg>

---

## What to fill in \{#fields\}

| Field | Use |
|---|---|
| **Module** | A licence component as Nomasx-1 defines it, by name with its system codes and number of objects — every application and report of those system codes, and the objects reclassified into it. With no module set in Nomasx-1 (*Settings → Licences → JD Edwards → System codes*), the list says so: pick a system code instead. |
| **or one system code** | One system code instead of a module. |
| **For (role or user)** | The role the module is secured for — or a user, although lines on a role are easier to keep. |
| **With** | **every right**, **everything but delete**, **run only (inquiry)**, or **no access** — the module taken away from the role. |
| **Closed for everybody else (\*PUBLIC)** | Ticked by default: the module is closed for `*PUBLIC`, so that only the roles opened explicitly reach it. |

**Propose the lines** reads the security of the role and of `*PUBLIC` and builds the plan.

With **no access**, the module is closed for the role on each object it can run today; its actions are left as they are.

---

## The lines proposed \{#plan\}

Figures: **objects in the module**, **lines to add** (orange when there are some), **closing lines**, **opening lines**, **action lines**, and **objects already right** — those for which nothing is needed.

The list gives each line as the Security Workbench stores it (`F00950`):

| Column | Content |
|---|---|
| **FSSETY** | The security type: **3** for application security (run), **1** for action security (add / change / delete). |
| **FSUSER** | `*PUBLIC` for a line that closes for everybody, the role for the other lines. |
| **FSOBNM**, **Description** | The application or report. |
| **FSRUN** | On a type 3 line: `N` to close, `Y` to open. |
| **FSA**, **FSCHNG**, **FSDLT**, **FSIOK** | On a type 1 line: add, change, delete as **With** asks, and OK. |
| **Why** | *closed for everybody*, *closed for the role*, *opened for the role*, or *the role's actions*. |

An action line carries the **product code** of the object and leaves **OK**, **copy** and **scroll to end** allowed, as the Security Workbench form writes it: left blank, they would be read as forbidden.

Under the list, the page recalls the next steps: review the lines, write them — or export them (**Export**, above the list) to load them yourself — then simulate the role on the module and save the answer as a test case.

---

## Write the lines \{#write\}

**Write these *n* lines** asks for a confirmation first:

- *n line(s) will be added to the Security Workbench for* the role — or, when some lines close objects for `*PUBLIC`, how many of them do, that is for everybody who is not given the objects. That confirmation is shown as a warning.

Each line is then written through the Security Workbench screen's own queries, as if entered there — checked, stamped and captured in the change package. Where the holder already has a line of that type on the object, it is **changed**; otherwise it is **added**, and a new run line also allows install, as the form writes it.

A progress counter shows the line being written. If a line fails, the writing stops on it and says how many lines were written before. Once done, the plan is proposed again on the security as it now is.

---

## Only what is missing \{#only-missing\}

A line is proposed only where the security as it is would not give the expected result:

- An object `*PUBLIC` already may not run — because a `*PUBLIC` line closes `*ALL`, or one closes the object — gets **no closing line**.
- An object the role may already run gets **no opening line**; its actions get a line only when they differ from what **With** asks.
- With **no access**, only the objects the role can run today get a line.
- Proposing the plan again once its lines are written proposes **nothing more**, and a banner says *The security already says all of this: no line to add.*

Beyond 5,000 objects the list is cut and a banner asks to narrow it.

---

## Access \{#access\}

The starting point is part of the **Security Management** page; the predefined roles **Security administrator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). The lines are written with the rights of the [Security Workbench](../security-maintenance/security-workbench.md) screen.

---

## Tips & best practices \{#tips\}

- **Close `*ALL` for `*PUBLIC` once** rather than every object one by one: a security closed by default makes every module plan shorter. [Security consistency](../reviews/security-consistency.md) says when it is not.
- **Review before writing**: the plan is a proposal on the security as it is when it is read; a line written meanwhile changes it.
- **Take a module away with no access** when a role changes job: the lines close only what the role can still run.
- **Then check the result**: simulate the role on the module in [Simulate Security](../reviews/simulate-security.md), save the answer as a [test case](../security-maintenance/security-test-cases.md), and replay it after every later change.
