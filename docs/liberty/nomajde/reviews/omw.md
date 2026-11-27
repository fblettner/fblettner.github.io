---
title: Object Management Workbench
description: "Reviews → Object Management Workbench in Nomajde: the JD Edwards EnterpriseOne OMW read as one thing — a project with its objects, its users and its two logs, everything done on an object, the projects and objects of a user — and a new project, a user or an object added to a project, each done by JD Edwards itself through its web OMW."
keywords: [Nomajde, JD Edwards, JDE E1, OMW, Object Management Workbench, OMW project, project objects, OMW log, F98220, F98221, F98222, F98210, F98211, P98220W, check out, originator, AIS]
---

# Object Management Workbench

**Reviews → Object Management Workbench** reads the JD Edwards EnterpriseOne Object Management Workbench (OMW) as one thing. JD Edwards keeps it in separate tables — the projects, who works on a project and in which role, the objects a project holds, the log —; the page starts from what the question is about: **a project** (its objects, its users, its log), **an object** (the projects that hold it, everything done on it) or **a user** (its projects, the objects it holds). Statuses, types, roles and actions are named, not given as codes, and each project, object or user shown in a list is a link to it.

Three things can be done from the page — **New project**, **Add a user**, **Add an object** —, each **by JD Edwards itself**, so that the OMW does around them what it always does: the log, the originator, its checks.

---

## At a glance

<svg viewBox="0 0 1200 376" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="omp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="omp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="omp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="omp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="352" rx="14" fill="url(#omp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Object Management Workbench</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">A project with its objects, its users and its log — or everything done on an object.</text>
  <rect x="240" y="78" width="205" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="79" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="277.0" y="93.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A project</text>
  <line x1="314" y1="83" x2="314" y2="97" stroke="#334155" strokeWidth="1"/>
  <text x="351.0" y="93.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">An object</text>
  <line x1="388" y1="83" x2="388" y2="97" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="93.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">A user</text>
  <rect x="455" y="78" width="412" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="465" y="93.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">PRJ_AP01  AP check layout ▾</text>
  <rect x="877" y="78" width="83" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="918.5" y="93.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">New project</text>
  <rect x="240" y="114" width="250" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="128" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROJECT</text>
  <text x="248" y="143" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">PRJ_AP01 — AP check layout</text>
  <rect x="498" y="114" width="150" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="128" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="506" y="143" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">11 New Project Pending Review</text>
  <rect x="656" y="114" width="110" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="664" y="128" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="664" y="143" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Enhancement</text>
  <rect x="774" y="114" width="80" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="782" y="128" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RELEASE</text>
  <text x="782" y="143" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">E920</text>
  <rect x="862" y="114" width="98" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="870" y="128" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CREATED</text>
  <text x="870" y="143" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">2026-11-02</text>
  <rect x="240.0" y="160" width="174.0" height="36" rx="8" fill="rgba(168,85,247,0.10)" stroke="#a855f7" strokeWidth="1.2"/>
  <text x="250.0" y="175" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECTS</text>
  <text x="250.0" y="191" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <rect x="422.0" y="160" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="432.0" y="175" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USERS</text>
  <text x="432.0" y="191" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <rect x="604.0" y="160" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="175" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROJECT LOG</text>
  <text x="614.0" y="191" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <rect x="786.0" y="160" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="796.0" y="175" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECTS LOG</text>
  <text x="796.0" y="191" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <rect x="240" y="204" width="94" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="287.0" y="218.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Add an object</text>
  <rect x="240" y="234" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="376" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="522" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RELEASE</text>
  <text x="582" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PATH CODE</text>
  <text x="652" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="732" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHECKED OUT</text>
  <text x="808" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MACHINE</text>
  <text x="898" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADDED</text>
  <rect x="240" y="266" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="282.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">P0411</text>
  <text x="376" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="522" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">E920</text>
  <text x="582" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DV920</text>
  <text x="652" y="282.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">JSMITH</text>
  <text x="732" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">yes</text>
  <text x="808" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DEVCLIENT01</text>
  <text x="898" y="282.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-11-03</text>
  <rect x="240" y="296" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="312.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">P0411|ZJDE0001</text>
  <text x="376" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Application Version</text>
  <text x="522" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">E920</text>
  <text x="582" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DV920</text>
  <text x="652" y="312.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">JSMITH</text>
  <text x="732" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="808" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DEVCLIENT01</text>
  <text x="898" y="312.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-11-03</text>
  <rect x="240" y="326" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="342.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">B0400047</text>
  <text x="376" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Business Function</text>
  <text x="522" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">E920</text>
  <text x="582" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DV920</text>
  <text x="652" y="342.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">MDURAND</text>
  <text x="732" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">yes</text>
  <text x="808" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DEVCLIENT02</text>
  <text x="898" y="342.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-11-05</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start from</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a project, an object, a user</text>
  <line x1="200" y1="87.0" x2="240" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four tabs</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">objects · users · two logs</text>
  <line x1="200" y1="177.0" x2="240" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Names are links</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to the object, to the user</text>
  <line x1="200" y1="277.0" x2="250" y2="282" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New project</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">created by JD Edwards</text>
  <line x1="1000" y1="57.0" x2="950" y2="78" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The project's header</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">statuses and types named</text>
  <line x1="1000" y1="137.0" x2="960" y2="133" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add an object</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked in the list of its type</text>
  <line x1="1000" y1="217.0" x2="334" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#omp-arrow)"/>
</svg>

The switch at the top chooses where to start; the list beside it offers the projects (with their status and type), the objects the OMW knows (held by a project today, or only in the log) or the users that work on a project. When only one project exists, it is picked at once.

---

## From a project \{#project\}

The header gives the **Project** and its description, its **Status**, **Type**, **Release** and **Created** date — and, when the project has them, its planned and completed dates and its SAR number. Four tabs follow, each with its count:

| Tab | What it lists |
|---|---|
| **Objects** | The objects the project holds: **Object**, **Type**, **Release**, **Path code**, the **User** who holds it, whether it is **Checked out**, the **Machine** and the date it was **Added**. |
| **Users** | Who works on the project: **User**, **Role** (originator, developer, manager…), **Lead**, the date added. |
| **Project log** | What was done to the project itself: created, users and objects added. |
| **Objects log** | The work on its objects: design, check-out, check-in… |

**Add an object** sits above the Objects tab, **Add a user** above the Users tab.

---

## From an object or a user \{#object-user\}

| Start from | Tabs |
|---|---|
| **An object** | **Log** — everything done on the object, whatever the project, with the project of each line; **Projects** — the projects that hold it today, with their description and status, who holds it, checked out or not, its path code. |
| **A user** | **Projects** — the projects the user works on, with its role on each and whether it leads; **Objects** — the objects it holds in them. |

An object is offered with its type: a name used under two types gives two entries.

---

## The log \{#log\}

<svg viewBox="0 0 1200 278" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="oml-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="oml-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="oml-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="oml-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="244" rx="14" fill="url(#oml-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240.0" y="34" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="49" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECTS</text>
  <text x="250.0" y="65" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <rect x="422.0" y="34" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="432.0" y="49" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USERS</text>
  <text x="432.0" y="65" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <rect x="604.0" y="34" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="49" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROJECT LOG</text>
  <text x="614.0" y="65" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <rect x="786.0" y="34" width="174.0" height="36" rx="8" fill="rgba(168,85,247,0.10)" stroke="#a855f7" strokeWidth="1.2"/>
  <text x="796.0" y="49" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECTS LOG</text>
  <text x="796.0" y="65" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <rect x="240" y="82" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE</text>
  <text x="336" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TIME</text>
  <text x="398" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="474" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTION</text>
  <text x="600" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="676" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="786" y="99.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT HAPPENED</text>
  <rect x="240" y="114" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="130.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">▾ 2026-11-05</text>
  <text x="336" y="130.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">16:42:10</text>
  <text x="398" y="130.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">MDURAND</text>
  <text x="474" y="130.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Check Out</text>
  <text x="600" y="130.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">B0400047</text>
  <text x="676" y="130.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Business Function</text>
  <text x="786" y="130.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Action Check Out was called</text>
  <rect x="240" y="144" width="720" height="44" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="280" y="161" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">136F</text>
  <text x="316" y="161" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Action Check Out was called</text>
  <text x="280" y="178" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">153F</text>
  <text x="316" y="178" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Object B0400047 Checked Out · DV920 · DEVCLIENT02</text>
  <rect x="240" y="194" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">› 2026-11-05</text>
  <text x="336" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">09:12:44</text>
  <text x="398" y="210.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">MDURAND</text>
  <text x="474" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Add Object to Project</text>
  <text x="600" y="210.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">B0400047</text>
  <text x="676" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Business Function</text>
  <text x="786" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Action Add Object to Pro…</text>
  <rect x="240" y="224" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">› 2026-11-03</text>
  <text x="336" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">11:05:31</text>
  <text x="398" y="240.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">JSMITH</text>
  <text x="474" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Check Out</text>
  <text x="600" y="240.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">P0411</text>
  <text x="676" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="786" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Action Check Out was called</text>
  <rect x="20" y="34" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="49" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two logs</text>
  <text x="30" y="62" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the project's · its objects'</text>
  <line x1="200" y1="51.0" x2="240" y2="52" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oml-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A line opens</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JD Edwards' messages, written out</text>
  <line x1="200" y1="167.0" x2="316" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oml-arrow)"/>
  <rect x="1000" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions named</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the OMW's own codes</text>
  <line x1="1000" y1="107.0" x2="510" y2="144" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oml-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What happened</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the first messages in one line</text>
  <line x1="1000" y1="187.0" x2="920" y2="101" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oml-arrow)"/>
</svg>

Each log line is one action: **Date**, **Time**, **User**, **Action**, **Object**, **Type**, **From** and **To** (the status and path code before and after, for a promotion), **What happened** and the **Program** that wrote it. A line opens on its **detail**: the messages JD Edwards wrote for that action, written out in full with their values — *Action Check Out was called*, *User was Added To Project: …* —, each preceded by its message code. **What happened** gives the same messages on one line.

The latest 2,000 actions of a log are listed; a banner says so when there are more. The grid searches, filters, groups and exports like any list.

---

## Done by JD Edwards \{#actions\}

<svg viewBox="0 0 1200 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="oma-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="oma-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="oma-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="oma-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="244" rx="14" fill="url(#oma-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Add an object — PRJ_AP01</text>
  <line x1="230" y1="58" x2="970" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="82" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT TYPE</text>
  <rect x="240" y="88" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="102.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">APPL  Application ▾</text>
  <text x="615" y="82" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT NAME</text>
  <rect x="615" y="88" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="102.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">P0411  Supplier Ledger Inquiry ▾</text>
  <text x="240" y="132" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RELEASE</text>
  <rect x="240" y="138" width="345" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="152.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">E920 ▾</text>
  <text x="240" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Done by JD Edwards itself, through its web Object Management Workbench: it writes the log</text>
  <text x="240" y="202" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">and makes the account of the AIS connection the originator.</text>
  <line x1="230" y1="220" x2="970" y2="220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="900" y="230" width="60" height="22" rx="5" fill="url(#oma-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="930.0" y="244.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Add</text>
  <rect x="830" y="230" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="861.0" y="244.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Close</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type first</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">then its list of objects</text>
  <line x1="200" y1="87.0" x2="240" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oma-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Release</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the project's, as proposed</text>
  <line x1="200" y1="157.0" x2="240" y2="149" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oma-arrow)"/>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Object name</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked, or typed if no list</text>
  <line x1="1000" y1="87.0" x2="960" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oma-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JD Edwards adds it, then reads</text>
  <line x1="1000" y1="217.0" x2="960" y2="241" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oma-arrow)"/>
</svg>

Nothing is inserted by SQL: each action is done by JD Edwards, through its AIS server, as the JD Edwards account of the AIS connection — the account that becomes the new project's originator. The OMW then writes its log and applies its own checks, as when a developer does it in JD Edwards.

| Button | Fields | How JD Edwards does it |
|---|---|---|
| **New project** | **Project name** and **Description** (required), **Type**, **Severity**, **Product code**, **Release**. | Through the web OMW's own forms (P98220W): *Add*, a project, its revisions filled and confirmed. |
| **Add a user** | **User** (a JD Edwards user) and **Role**. | Through the *Project Members* tab of the web OMW's form, *Add User*. |
| **Add an object** | **Object type**, **Object name**, **Release** (the project's, proposed). | Through the server function the web OMW itself calls to add an object to a project. |

For **Add an object**, the type comes first; the object is then picked **in the list of that type** — applications, reports, tables, business functions, business views, data structures, UDC types, application and report versions, user defined objects —, by its name or its code, with its product code (for a version, its program). A type with no list here — a data dictionary item, a menu — is typed.

The page checks first what JD Edwards would refuse: a project that already exists, a user that already has that role on the project, an object the project already holds. When JD Edwards refuses, its message is shown in the dialog. After the action, the page reads the project again and says what was done.

---

## Access \{#access\}

The page is in the **Reviews** folder of the Nomajde menu. The predefined roles **Developer** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). The three actions need the AIS connection, and the JD Edwards account of that connection must be allowed to do them in the OMW.

The three OMW tables also have their own read-only screens under **Development → Object Management Workbench** — **OMW Projects**, **OMW Project Objects**, **OMW Log** — see [Companies, items, setup and OMW](../master-data/delivered-screens.md#omw).

---

## Tips & best practices \{#tips\}

- Before an upgrade, start from an object: its log says who changed it, in which project and when.
- Start from a user to see what a developer still holds checked out before they leave.
- Read the **Project log** to follow a project's life — who added whom, which objects came in — apart from the day-to-day work on its objects.
- The actions are done as the AIS connection's account: when the originator matters, give that account the right role in the OMW.

---

## Related

- [Back to standard](./back-to-standard.md) — the changed standard objects, with the OMW project that holds each one.
- [Prepare for upgrade](../upgrade/analysis.md) — what a release asks to retrofit.
- [Cross Reference](../cross-reference.md) — where an object is used.
