---
title: Menus
description: "Development → Menus in Nomajde: the tasks of the JD Edwards EnterpriseOne menus on one page — every task (F9000) with its descriptions in other languages (F9002), where a task is used, and a task view drawn as the tree it is, where a task is added under a folder or moved through its relationship (F9001)."
keywords: [Nomajde, JD Edwards, JDE E1, menus, tasks, task view, task relationships, F9000, F9001, F9002, GetUID, EnterpriseOne Menus, where used, change package]
---

# Menus

**Development → Menus** puts the tasks of the JD Edwards EnterpriseOne menus on one page. A JD Edwards menu is made of **tasks** — a folder, an application, a report, a URL — placed in **task views** by **relationships**: a task under a parent, at a sequence. The page has three tabs: **Tasks** lists every task and opens it to change it, **Where used** says where one task sits and what it holds, **The menu** draws a task view as the tree it is, where a task is added under a folder or moved.

Every change goes to JD Edwards through the forms of the three JD Edwards tables behind it — the tasks (F9000), the relationships (F9001) and the descriptions in other languages (F9002) — with their rules, and is captured in the active [change package](../../nomaflow/change-packages.md).

---

## At a glance

<svg viewBox="0 0 1200 364" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="340" rx="14" fill="url(#mnt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The tasks of the JD Edwards menus: what they are, where they are used, how a menu is built.</text>
  <rect x="240.0" y="76" width="234.7" height="40" rx="8" fill="rgba(168,85,247,0.10)" stroke="#a855f7" strokeWidth="1.2"/>
  <text x="250.0" y="91" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TASKS</text>
  <text x="250.0" y="107" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">18432 task(s)</text>
  <rect x="482.7" y="76" width="234.7" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.7" y="91" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WHERE USED</text>
  <text x="492.7" y="107" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">pick a task</text>
  <rect x="725.3" y="76" width="234.7" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3" y="91" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">THE MENU</text>
  <text x="735.3" y="107" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">12905 relationship(s)</text>
  <rect x="240" y="128" width="78" height="22" rx="5" fill="url(#mnt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="279.0" y="142.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Add a task</text>
  <text x="330" y="143" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">A click opens the task: change it, duplicate it, delete it, describe it in other languages.</text>
  <rect x="240" y="162" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="440" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK NAME</text>
  <text x="540" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="660" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="730" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="806" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRODUCT</text>
  <text x="868" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PLACES</text>
  <rect x="240" y="194" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Address Book Revisions</text>
  <text x="440" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">JDE000051</text>
  <text x="540" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Interactive Application</text>
  <text x="660" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="730" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="806" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">01</text>
  <text x="868" y="210.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="224" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Daily Processing</text>
  <text x="440" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">G0110</text>
  <text x="540" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Folder</text>
  <text x="660" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="730" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="806" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">01</text>
  <text x="868" y="240.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="240" y="254" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Supplier Ledger Inquiry</text>
  <text x="440" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">JDE000412</text>
  <text x="540" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Interactive Application</text>
  <text x="660" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="730" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="806" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">04</text>
  <text x="868" y="270.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <rect x="240" y="284" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Print Checks</text>
  <text x="440" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">JDE000437</text>
  <text x="540" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Batch Application</text>
  <text x="660" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">R04572</text>
  <text x="730" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="806" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">04</text>
  <text x="868" y="300.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="240" y="314" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Custom Reports</text>
  <text x="440" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ACME0001</text>
  <text x="540" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Folder</text>
  <text x="660" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="730" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="806" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">55</text>
  <text x="868" y="330.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">0</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three tabs</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tasks · where used · the menu</text>
  <line x1="200" y1="97.0" x2="240" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add a task</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its identifier comes from JDE</text>
  <line x1="200" y1="167.0" x2="240" y2="139" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a row</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the task's form</text>
  <line x1="200" y1="257.0" x2="340" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The menu</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a task view as a tree</text>
  <line x1="1000" y1="97.0" x2="843" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Places</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click: where it is used</text>
  <line x1="1000" y1="267.0" x2="920" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
</svg>

The three cards at the top are the tabs, each with its count: the tasks, the places of the task picked, the relationships of the task view picked.

---

## Tasks \{#tasks\}

The grid lists every task of the menus: search, filters, groups, columns, views and export, as on any list.

| Column | What it shows |
|---|---|
| **Description** | The task's name as the menu shows it. |
| **Task name** | Its code in the menus. |
| **Type** | Folder, interactive application, batch application, URL… named from the task types of JD Edwards. |
| **Object** | The application or the report the task runs. |
| **Version** | The version it runs with. |
| **Product** | Its product code. |
| **Places** | In how many places of the task views it sits. A click opens it in **Where used**. |

A click on a row opens the task's form; **Add a task** opens it empty.

### The task's form \{#task-form\}

<svg viewBox="0 0 1200 336" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnf-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnf-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnf-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="300" rx="14" fill="url(#mnf-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Tasks</text>
  <line x1="230" y1="58" x2="970" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Task</text>
  <line x1="236" y1="88" x2="280" y2="88" stroke="#4a9eff" strokeWidth="2"/>
  <text x="304" y="80" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Other languages</text>
  <text x="240" y="112" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK NAME</text>
  <rect x="240" y="118" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="132.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">JDE000412</text>
  <text x="490" y="112" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="490" y="118" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="132.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Supplier Ledger Inquiry</text>
  <text x="240" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK TYPE</text>
  <rect x="240" y="164" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="178.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Interactive Application ▾</text>
  <text x="490" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT NAME</text>
  <rect x="490" y="164" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="178.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">P0411 ▾</text>
  <text x="740" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION</text>
  <rect x="740" y="164" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="750" y="178.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="240" y="204" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FORM NAME</text>
  <rect x="240" y="210" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="224.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">W0411G</text>
  <text x="490" y="204" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRODUCT CODE</text>
  <rect x="490" y="210" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="224.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">04 Accounts Payable ▾</text>
  <text x="740" y="204" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRODUCT SYSTEM CODE</text>
  <rect x="740" y="210" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="750" y="224.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="240" y="250" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMMAND LINE OR URL</text>
  <rect x="240" y="256" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="270.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="230" y1="290" x2="970" y2="290" stroke="#1f2937" strokeWidth="1"/>
  <rect x="882" y="298" width="78" height="22" rx="5" fill="url(#mnf-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="921.0" y="312.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="806" y="298" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.0" y="312.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="720" y="298" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="760.0" y="312.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Duplicate</text>
  <rect x="646" y="298" width="68" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="680.0" y="312.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Other languages</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">descriptions per language</text>
  <line x1="1000" y1="77.0" x2="390" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnf-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The task's own fields</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">titled from the JDE dictionary</text>
  <line x1="200" y1="167.0" x2="240" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnf-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Object and version</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what the task runs</text>
  <line x1="1000" y1="167.0" x2="970" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnf-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Duplicate</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a copy, a new identifier</text>
  <line x1="1000" y1="257.0" x2="800" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnf-arrow)"/>
</svg>

The **Task** tab holds the task's own fields, titled from the JD Edwards data dictionary: the task name, the description and the task type (required), the object and its version, the form, the product codes, the option code, the command line or URL and its parameters. The **Other languages** tab lists the task's descriptions in other languages, one per language, added, changed and deleted there; it shows on an existing task.

| Button | What it does |
|---|---|
| **Save** | Writes the task in JD Edwards. |
| **Duplicate** | Opens a copy of the task, to change and save as a new task. |
| **Delete** | Deletes the task. |

A new task takes its identifier **from JD Edwards itself**: when the form opens to add a task, or after **Duplicate**, it asks JD Edwards for one, through the AIS server, before anything is typed. The identifier is technical: the form does not show it. When JD Edwards does not answer, the form stops and says why.

---

## Where used \{#where-used\}

<svg viewBox="0 0 1200 326" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="290" rx="14" fill="url(#mnu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Where used</text>
  <text x="240" y="88" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK</text>
  <rect x="240" y="94" width="560" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="108.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">JDE000437  Print Checks ▾</text>
  <rect x="810" y="94" width="94" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="857.0" y="108.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Open the task</text>
  <text x="240" y="134" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDE000437 · Batch Application · R04572</text>
  <text x="240" y="160" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">It sits in</text>
  <rect x="240" y="168" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="185.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK VIEW</text>
  <text x="420" y="185.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UNDER</text>
  <text x="800" y="185.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEQUENCE</text>
  <text x="890" y="185.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVE</text>
  <rect x="240" y="200" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="216.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">91 EnterpriseOne Menus</text>
  <text x="420" y="216.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Financials › Accounts Payable › Automatic Payment Processing</text>
  <text x="800" y="216.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">30</text>
  <text x="890" y="216.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">yes</text>
  <rect x="240" y="230" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="246.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">91 EnterpriseOne Menus</text>
  <text x="420" y="246.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Financials › Accounts Payable › Manual Payment Processing</text>
  <text x="800" y="246.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">50</text>
  <rect x="890" y="235.0" width="27" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="903.5" y="246.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NO</text>
  <text x="240" y="278" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">It holds</text>
  <text x="240" y="296" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">This task holds nothing.</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pick a task</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">search by name or code</text>
  <line x1="200" y1="107.0" x2="240" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a place</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shows it in The menu</text>
  <line x1="200" y1="217.0" x2="240" y2="214" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="1000" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Open the task</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its form, to change it</text>
  <line x1="1000" y1="107.0" x2="904" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inactive place</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the relation is switched off</text>
  <line x1="1000" y1="217.0" x2="910" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="1000" y="258" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="273" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">It holds</text>
  <text x="1010" y="286" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">for a folder: its tasks</text>
  <line x1="1000" y1="275.0" x2="390" y2="292" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
</svg>

**Where used** answers for one task, picked in the list (by its description or its code — **Places** in the Tasks tab opens it here directly). Under the task, its code, type and object.

| Block | What it lists |
|---|---|
| **It sits in** | Each place the task holds: the **Task view**, the way down to it (**Under** — the folders from the top of the view, several ways when the folder sits in more than one place), its **Sequence** and whether the relationship is **Active**. A click on a row opens the task view in **The menu**, searched on the task. |
| **It holds** | For a folder, the tasks under it, view by view, in the menu's order: sequence, name, task name, type, object. A click on one makes it the task picked. |

**Open the task** opens its form.

---

## The menu \{#menu\}

<svg viewBox="0 0 1200 382" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="358" rx="14" fill="url(#mnm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The menu</text>
  <text x="240" y="88" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK VIEW</text>
  <rect x="240" y="94" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="108.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">91 EnterpriseOne Menus ▾</text>
  <rect x="470" y="94" width="360" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="108.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">search a menu, a task or an application…</text>
  <rect x="840" y="94" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="890.0" y="108.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Add at the top</text>
  <text x="240" y="143" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Picked — Accounts Payable · Financials</text>
  <rect x="437" y="128" width="117" height="22" rx="5" fill="url(#mnm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="495.5" y="142.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Add a task under it</text>
  <rect x="560" y="128" width="102" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="611.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Change its place</text>
  <rect x="668" y="128" width="87" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="711.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Open the task</text>
  <rect x="761" y="128" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="797.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Where used</text>
  <rect x="240" y="166" width="720" height="196" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="184" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="266" y="184" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="948" y="184" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">10</text>
  <line x1="241" y1="192" x2="959" y2="192" stroke="#1f2937" strokeWidth="1"/>
  <text x="270" y="208" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▸</text>
  <text x="284" y="208" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">General Accounting</text>
  <text x="948" y="208" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">10</text>
  <rect x="241" y="216" width="718" height="24" fill="rgba(74,158,255,0.12)"/>
  <line x1="241" y1="216" x2="959" y2="216" stroke="#1f2937" strokeWidth="1"/>
  <text x="270" y="232" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="284" y="232" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts Payable</text>
  <text x="948" y="232" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">20</text>
  <line x1="241" y1="240" x2="959" y2="240" stroke="#1f2937" strokeWidth="1"/>
  <text x="288" y="256" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▸</text>
  <text x="302" y="256" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Daily Processing</text>
  <text x="948" y="256" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">10</text>
  <line x1="241" y1="264" x2="959" y2="264" stroke="#1f2937" strokeWidth="1"/>
  <text x="288" y="280" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▸</text>
  <text x="302" y="280" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Automatic Payment Processing</text>
  <text x="948" y="280" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">20</text>
  <line x1="241" y1="288" x2="959" y2="288" stroke="#1f2937" strokeWidth="1"/>
  <text x="288" y="304" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">·</text>
  <text x="302" y="304" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Supplier Ledger Inquiry</text>
  <text x="440.36" y="304" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="948" y="304" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">40</text>
  <line x1="241" y1="312" x2="959" y2="312" stroke="#1f2937" strokeWidth="1"/>
  <text x="270" y="328" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▸</text>
  <text x="284" y="328" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts Receivable</text>
  <text x="948" y="328" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">30</text>
  <line x1="241" y1="336" x2="959" y2="336" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="352" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▸</text>
  <text x="266" y="352" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Logistics Management</text>
  <text x="948" y="352" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">20</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each match with its path</text>
  <line x1="200" y1="107.0" x2="540" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnm-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a folder</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens it and picks it</text>
  <line x1="200" y1="257.0" x2="280" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnm-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add at the top</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">directly under the view</text>
  <line x1="1000" y1="57.0" x2="900" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnm-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">On the place picked</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">add under it · change its place</text>
  <line x1="1000" y1="137.0" x2="833" y2="139" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnm-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sequence</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the order in the folder</text>
  <line x1="1000" y1="267.0" x2="924" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnm-arrow)"/>
</svg>

**The menu** draws one **task view** — the one with the most tasks first — as JD Edwards builds it: the folders open on a click, each line with the object it runs and its sequence. The search box (two characters at least) lists the menus, tasks and applications that match, each with the way down to it; the first 300 are listed.

A click on a line picks it. On the place picked:

| Button | What it does |
|---|---|
| **Add a task under it** | For a folder: opens the relationship's form on the view and that folder, the sequence proposed after the last one (in steps of ten), active. The task to place is picked in the form. |
| **Change its place** | Opens the relationship's form: change its **Sequence** or untick **Active**; **Delete** takes the task out of this folder — the task itself stays. |
| **Open the task** | Opens the task's form. |
| **Where used** | Opens the task in **Where used**. |

**Add at the top** places a task directly under the view itself.

The relationship's form has the **Task view**, the **Parent task** and the **Child task** — fixed on an existing relationship —, the **Sequence**, **Active**, and the two release fields JD Edwards keeps on each relationship. After a save, the tree, the list and the places are read again.

---

## Access \{#access\}

The page is in the **Development** folder of the Nomajde menu. The predefined role **Developer** holds it in read and change (see [Predefined roles](../overview.md#roles)), as does **Administrator**. The page reads and writes the three tables through their own screens: whoever holds the page holds what those screens need — read, and change when the role may change the page.

Adding a task asks JD Edwards for its identifier through the AIS server: the AIS connection must be set up.

---

## Tips & best practices \{#tips\}

- Before deleting a task, open **Where used**: a task that sits in several views disappears from all of them.
- To take a task out of one folder only, use **Change its place → Delete** in **The menu**: the task stays in its other places.
- Leave room between sequences (steps of ten): a task added later between two others then needs no renumbering.
- Changes made here are captured in the change package like those of any screen: build a menu in development, then promote it.

---

## Related

- [Menu Filtering](../security-maintenance/menu-filtering.md) — which roles see a task of a task view.
- [Security Management → a menu](../security-management/menu.md) — who sees a menu task, role by role.
- [Object Management Workbench](../reviews/omw.md) — the OMW projects, their objects and their log.
