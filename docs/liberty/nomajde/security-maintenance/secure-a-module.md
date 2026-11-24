---
title: Secure a module
description: "Security simulation → Secure a module in Nomajde: the JD Edwards EnterpriseOne Security Workbench lines (type 3 to run, type 1 for add / change / delete) that open a whole module for a role and close it for everybody else, proposed only where the security does not already say so, never written — reviewed, exported and loaded in the Security Workbench."
keywords: [Nomajde, JD Edwards, JDE E1, secure a module, Security Workbench, F00950, application security, action security, "*PUBLIC", "*ALL", module, system code, role]
---

# Secure a module

The **Secure a module** tab of [Security simulation](./security-simulation.md) prepares the security of a whole module in JD Edwards EnterpriseOne. Pick a module, the role it is opened for and with what rights: the page **proposes the Security Workbench lines** that do it — for every application and report of the module, and only where the security as it is does not already say so.

Nothing is written. The lines are reviewed, exported from the list and loaded in the Security Workbench.

---

## At a glance

<svg viewBox="0 0 1200 424" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njsm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njsm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njsm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njsm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="384" rx="14" fill="url(#njsm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security simulation</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What a user would be allowed, before it is written — and the cases that check it stays so.</text>
  <rect x="240.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Simulate</text>
  <text x="250.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">A user, a module, a what-if</text>
  <rect x="421.5" y="78" width="175.5" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="431.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Secure a module</text>
  <text x="431.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">A whole module for a role</text>
  <rect x="603.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Consistency</text>
  <text x="613.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Lines that serve nothing or contradict</text>
  <rect x="784.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="794.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Test cases</text>
  <text x="794.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Expectations replayed against the security · 7</text>
  <rect x="240" y="126" width="720" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">MODULE</text>
  <rect x="250" y="145" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="159.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales Management · 42 · 103</text>
  <text x="440" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OR ONE SYSTEM CODE</text>
  <rect x="440" y="145" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="450" y="159.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="550" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">OPENED FOR (ROLE OR USER)</text>
  <rect x="550" y="145" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="159.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">SALESORDER ▾</text>
  <text x="720" y="140" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">WITH</text>
  <rect x="720" y="145" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="730" y="159.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">everything but delete ▾</text>
  <rect x="830" y="145" width="120" height="22" rx="5" fill="url(#njsm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="890.0" y="159.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Propose the lines</text>
  <rect x="252" y="171" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M254.5,176.5 L256.8,178.8 L260.8,174" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="269" y="180" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Closed for everybody else (&#42;PUBLIC)</text>
  <rect x="240.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="214" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">103</text>
  <text x="250.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECTS IN THE MODULE</text>
  <rect x="361.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.0" y="214" fill="#fb923c" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="371.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINES TO ADD</text>
  <rect x="482.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.0" y="214" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="492.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLOSING LINES</text>
  <rect x="603.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.0" y="214" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="613.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPENING LINES</text>
  <rect x="724.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="734.0" y="214" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="734.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTION LINES</text>
  <rect x="845.0" y="196" width="115.0" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="855.0" y="214" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">100</text>
  <text x="855.0" y="226" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECTS ALREADY RIGHT</text>
  <rect x="240" y="238" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSSETY</text>
  <text x="300" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSUSER</text>
  <text x="384" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSOBNM</text>
  <text x="448" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="588" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSRUN</text>
  <text x="632" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSA</text>
  <text x="666" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSCHNG</text>
  <text x="716" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSDLT</text>
  <text x="760" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FSIOK</text>
  <text x="802" y="253.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHY</text>
  <rect x="240" y="266" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="300" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="384" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="448" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="588" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="632" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="666" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="716" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="760" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="802" y="280.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">closed for everybody</text>
  <rect x="240" y="292" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="300" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALESORDER</text>
  <text x="384" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="448" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="588" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="632" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="666" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="716" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="760" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="802" y="306.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">opened for the role</text>
  <rect x="240" y="318" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="300" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALESORDER</text>
  <text x="384" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="448" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="588" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="632" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="666" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="716" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="760" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="802" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">the role's actions</text>
  <rect x="240" y="344" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="300" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="384" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P42101</text>
  <text x="448" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="588" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="632" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="666" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="716" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="760" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="802" y="358.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">closed for everybody</text>
  <text x="240" y="384" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Review the lines, export them (Export, above the list) and load them in the Security Workbench…</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Module or system code</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by name, with its codes</text>
  <line x1="200" y1="157.0" x2="250" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Close for &#42;PUBLIC</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">optional, ticked by default</text>
  <line x1="200" y1="227.0" x2="252" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type 3 = run</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type 1 = add / change / delete</text>
  <line x1="200" y1="317.0" x2="260" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Opened for, with</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every right · no delete · run only</text>
  <line x1="1000" y1="157.0" x2="720" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Only what is missing</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a plan applied proposes nothing</text>
  <line x1="1000" y1="247.0" x2="820" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Why each line</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">close · open · actions</text>
  <line x1="1000" y1="347.0" x2="860" y2="304" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njsm-arrow)"/>
</svg>

---

## What to fill in \{#fields\}

| Field | Use |
|---|---|
| **Module** | A licence component as Nomasx-1 defines it, by name with its system codes and number of objects — every application and report of those system codes, and the objects reclassified into it. See [Simulate → What](./security-simulation.md#what). |
| **or one system code** | One system code instead of a module. |
| **Opened for (role or user)** | The role the module is opened for — or a user, although lines on a role are easier to keep. |
| **With** | **every right**, **everything but delete**, or **run only (inquiry)**. |
| **Closed for everybody else (\*PUBLIC)** | Ticked by default: the module is closed for `*PUBLIC`, so that only the roles opened explicitly reach it. |

**Propose the lines** reads the security of the role and of `*PUBLIC` and builds the plan.

---

## The lines proposed \{#plan\}

Figures: **objects in the module**, **lines to add** (orange when there are some), **closing lines**, **opening lines**, **action lines**, and **objects already right** — those for which nothing is needed.

The list gives each line as the Security Workbench stores it (`F00950`):

| Column | Content |
|---|---|
| **FSSETY** | The security type: **3** for application security (run), **1** for action security (add / change / delete). |
| **FSUSER** | `*PUBLIC` for a closing line, the role for an opening or an action line. |
| **FSOBNM**, **Description** | The application or report. |
| **FSRUN** | On a type 3 line: `N` to close, `Y` to open. |
| **FSA**, **FSCHNG**, **FSDLT**, **FSIOK** | On a type 1 line: add, change, delete, and OK, as **With** asks. |
| **Why** | *closed for everybody*, *opened for the role*, or *the role's actions*. |

Under the list, the page recalls the next steps: review the lines, export them (**Export**, above the list), load them in the Security Workbench, then simulate the role on the module and save the answer as a test case.

---

## Only what is missing \{#only-missing\}

A line is proposed only where the security as it is would not give the expected result:

- An object `*PUBLIC` already may not run — because a `*PUBLIC` line closes `*ALL`, or one closes the object — gets **no closing line**.
- An object the role may already run gets **no opening line**; its actions get a line only when they differ from what **With** asks.
- Proposing the plan again once its lines are loaded proposes **nothing more**, and a banner says *The security already says all of this: no line to add.*

Beyond 5,000 objects the list is cut and a banner asks to narrow it.

---

## Access \{#access\}

The tab is part of the Security simulation page, in the **Security Maintenance** folder; the predefined roles **Security administrator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). Writing the lines is done in the [Security Workbench](./security-workbench.md), with the rights of that screen.

---

## Tips & best practices \{#tips\}

- **Close `*ALL` for `*PUBLIC` once** rather than every object one by one: a security closed by default makes every module plan shorter. [Consistency](./workbench-consistency.md) says when it is not.
- **Review before loading**: the plan is a proposal on the security as it is when it is read; a line written meanwhile changes it.
- **Then check the result**: simulate the role on the module, save the answer as a [test case](./security-test-cases.md), and replay it after every later change.
