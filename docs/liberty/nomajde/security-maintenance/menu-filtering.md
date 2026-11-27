---
title: Menu Filtering
description: "Security Maintenance → Menu Filtering in Nomajde: the JD Edwards EnterpriseOne menu-filtering lines (F9006) on one grid — a line per role, task view, parent and child task, shown or hidden — with filters, Excel export, bulk edit and load from a file; tasks picked by their name."
keywords: [Nomajde, JD Edwards, JDE E1, menu filtering, F9006, task view, parent task, child task, role, Excel import, bulk edit]
---

# Menu Filtering

The **Menu Filtering** screen lists the menu-filtering lines of JD Edwards EnterpriseOne (`F9006`) in one grid, like the [Security Workbench](./security-workbench.md) and UDO Security screens: one line per **role**, **task view**, **parent task** and **child task**, saying whether the task is **shown** to the role. Export, bulk edit and load from a file work as on the other security screens.

Open it from **Security Maintenance → Menu Filtering**. To answer *who sees this task?* or to tick a role's menu in the menu itself, use [Security Management → a menu](../security-management/menu.md) — it writes through this screen's own queries.

---

## At a glance

<svg viewBox="0 0 1200 354" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njmf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njmf-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njmf-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njmf-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="314" rx="14" fill="url(#njmf-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Menu Filtering</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Menu Filtering by role (F9006)</text>
  <rect x="240" y="72" width="720" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="88" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="252" y="102" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <rect x="252" y="106" width="150" height="14" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="116.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="414" y="102" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK VIEW</text>
  <rect x="414" y="106" width="150" height="14" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="424" y="116.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">▾</text>
  <text x="576" y="102" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <rect x="576" y="106" width="150" height="14" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="586" y="116.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">~</text>
  <rect x="240" y="134" width="67" height="22" rx="5" fill="url(#njmf-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="273.5" y="148.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="313" y="134" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="346.5" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Bulk edit</text>
  <rect x="386" y="134" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="412.0" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Import</text>
  <rect x="444" y="134" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="454" y="148.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="570" y="134" width="47" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="593.5" y="148.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run</text>
  <rect x="898" y="134" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="929.0" y="148.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="240" y="166" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE (ID)</text>
  <text x="326" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="444" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK VIEW</text>
  <text x="556" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARENT TASK</text>
  <text x="676" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHILD TASK</text>
  <text x="804" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="870" y="181.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SHOWN</text>
  <rect x="240" y="194" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="326" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Payables</text>
  <text x="444" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="556" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="676" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Accounts Receivable</text>
  <text x="804" y="208.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="870" y="197.0" width="22" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="881.0" y="208.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <rect x="240" y="220" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="326" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Payables</text>
  <text x="444" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="556" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="676" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Order Management</text>
  <text x="804" y="234.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="870" y="223.0" width="22" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="881.0" y="234.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <rect x="240" y="246" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="326" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Buyer</text>
  <text x="444" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="556" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Accounts Payable</text>
  <text x="676" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Voucher Entry</text>
  <text x="804" y="260.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">P0411</text>
  <rect x="870" y="249.0" width="22" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="881.0" y="260.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <rect x="240" y="272" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="326" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Buyer</text>
  <text x="444" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="556" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Order Management</text>
  <text x="676" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="804" y="286.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">P4210</text>
  <rect x="870" y="275.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="881.0" y="286.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Y</text>
  <rect x="240" y="298" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">HR_MANAGER</text>
  <text x="326" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Human resources</text>
  <text x="444" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="556" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">EnterpriseOne Menus</text>
  <text x="676" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="804" y="312.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="870" y="301.0" width="22" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="881.0" y="312.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">role, task view, object</text>
  <line x1="200" y1="97.0" x2="252" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add, bulk edit, import</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">load the lines from a file</text>
  <line x1="200" y1="167.0" x2="250" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per role</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">task view · parent · child task</text>
  <line x1="200" y1="277.0" x2="250" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the lines in Excel</text>
  <line x1="1000" y1="137.0" x2="940" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tasks by their name</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">never by their identifier</text>
  <line x1="1000" y1="217.0" x2="700" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
  <rect x="1000" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shown</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">N hides the task for the role</text>
  <line x1="1000" y1="297.0" x2="860" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmf-arrow)"/>
</svg>

---

## Goal of the view

- **Every menu-filtering line in one place**, for every role and task view, instead of opening the menu-filtering form task view by task view.
- **Tasks by their name.** Views and tasks are shown and picked by their name, never by their identifier.
- **Bulk-loadable.** A set of lines prepared in Excel — a new role, a roll-out — is loaded in one go.

The grid is not read when the screen opens: set the filters, then **Run**.

---

## Columns

| Column | What it tells you |
|---|---|
| **Role** | The role the line applies to, with its description. JD Edwards filters menus by role only. |
| **Task view** | The task view (the menu), by its name. |
| **Parent task** | The folder the task sits in, by its name. |
| **Child task** | The task hidden or shown, by its name. |
| **Object** | The object the child task runs, when it runs one. Read only. |
| **Shown** | Ticked: the task is shown to the role; unticked: it is hidden. A hidden folder hides everything below it. |
| **User ID**, **Date Updated**, **Time Last Updated** | Who changed the line and when — stamped on each save. Read only. |

**Advanced filters**: **Role**, **Task view**, **Object**.

---

## Edit dialog

**Add row** registers a new line; a double click on a line opens it to change it, duplicate it or delete it. The dialog has one form:

<svg viewBox="0 0 1200 290" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njmfd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njmfd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njmfd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njmfd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="250" rx="14" fill="url(#njmfd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Menu Filtering</text>
  <line x1="221" y1="60" x2="979" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE &#42;</text>
  <rect x="240" y="85" width="235" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="99.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">BUYER — Buyer</text>
  <text x="485" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TASK VIEW &#42;</text>
  <rect x="485" y="85" width="235" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="495" y="99.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">EnterpriseOne Menus  ▾</text>
  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARENT TASK</text>
  <rect x="240" y="133" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="147.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Accounts Payable  ▾</text>
  <text x="240" y="176" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHILD TASK &#42;</text>
  <rect x="240" y="181" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="195.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Voucher Entry · P0411  ▾</text>
  <text x="730" y="176" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SHOWN</text>
  <rect x="730" y="188" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="747" y="197" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">disabled</text>
  <line x1="221" y1="222" x2="979" y2="222" stroke="#1f2937" strokeWidth="1"/>
  <rect x="918" y="232" width="42" height="22" rx="5" fill="url(#njmfd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="939.0" y="246.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="860" y="232" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="886.0" y="246.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="787" y="232" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="820.5" y="246.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Duplicate</text>
  <rect x="729" y="232" width="52" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="755.0" y="246.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Role and task view</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">keys: fixed once saved</text>
  <line x1="200" y1="97.0" x2="240" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmfd-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Parent, then child task</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each list follows the one before</text>
  <line x1="200" y1="167.0" x2="240" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmfd-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lists by name</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the child shows its object</text>
  <line x1="1000" y1="97.0" x2="720" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmfd-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shown</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">unticked: hidden for the role</text>
  <line x1="1000" y1="177.0" x2="730" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmfd-arrow)"/>
  <rect x="20" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Delete</text>
  <text x="30" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the role sees the task again</text>
  <line x1="200" y1="245.0" x2="729" y2="243" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmfd-arrow)"/>
</svg>

| Field | What to enter |
|---|---|
| **Role** | The role. Mandatory. |
| **Task view** | The task view, picked in the list of task views by their name. Mandatory. |
| **Parent task** | The folder, picked in the list of the parent tasks of that task view. |
| **Child task** | The task, picked in the list of the tasks under that parent — each with its name and the object it runs. Mandatory. |
| **Shown** | Ticked by default. Untick it to hide the task from the role. |

The role, the task view and the two tasks are the line's key: they are fixed once the line is saved. Deleting a line shows the task to the role again.

---

## Change tracking

Changes on this screen are captured into the active [change package](../../nomaflow/change-packages.md) under the `security` entity, like the other security screens: a menu-filtering change can be promoted from one environment to the next as a reviewed bundle.

---

## Access

The screen sits in the **Security Maintenance** folder; the predefined roles **Security administrator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). The **Security Management** page writes through it too.

---

## Tips & best practices

- **Filter on a role or a task view first**: the table holds the lines of every role.
- **Hide a folder rather than each task**: one line is enough, and the tasks added to it later are hidden too.
- **Use the Excel import** for a new role's menu: export a reference role's lines, change the role, load the file.
- **Remember that a menu is not a security**: hiding a task does not stop a role from running its object — that is the [Security Workbench](./security-workbench.md)'s job.
