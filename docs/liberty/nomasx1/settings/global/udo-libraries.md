---
title: UDO libraries
description: "The Nomasx-1 UDO libraries screen: for each JD Edwards EnterpriseOne table of the user defined objects (F00950W, F9860W, F9861W), every library that holds it, the setting to fill (JDE UDO SEC or JDE UDO OL) and whether the table there has the 9.2 layout — the library to use is the one marked."
keywords: [Nomasx-1, settings, JD Edwards, UDO libraries, user defined objects, F00950W, F9860W, F9861W, JDE_UDO_SEC, JDE_UDO_OL, Tools 9.2]
---

# UDO libraries

The **UDO libraries** screen (**Settings → Global → UDO libraries**) answers one question before the [JD Edwards settings](./jd-edwards.md) are filled: *which library goes in **JDE UDO SEC** and **JDE UDO OL**?*

The security collection reads the security of the user defined objects (F00950W) from the library set as **JDE UDO SEC**, and the user defined objects themselves (F9860W, F9861W) from the one set as **JDE UDO OL**. A JD Edwards database often holds these tables in several libraries — a system library kept from 9.1 next to the 9.2 one — and a wrong library makes the step fail, with an Oracle message such as `ORA-00904: "WSWOBNM"`. The screen reads the JD Edwards database and lists, for each of the three tables, every library that holds it.

:::info[JDE-specific]
The screen reads the dictionary of the JD Edwards database through the JD Edwards connector (Oracle), behind the pool's database link when it has one. It is read-only.
:::

---

## At a glance

<svg viewBox="0 0 1320 294" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="udol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="udol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="udol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="udol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="258" rx="14" fill="url(#udol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">JD Edwards - the library of each UDO table</text>
  <line x1="220" y1="76" x2="1100" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="88" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="102.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="418" y="88" width="47" height="22" rx="5" fill="url(#udol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="441.5" y="102.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="1020" y="88" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1050.0" y="102.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="959" y="88" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="102.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="898" y="88" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="102.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="847" y="88" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.5" y="102.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="120" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SETTING TO FILL</text>
  <text x="510" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="680" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBRARY</text>
  <text x="880" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">9.2 LAYOUT</text>
  <rect x="240" y="152" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="167.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE UDO SEC</text>
  <text x="510" y="167.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F00950W</text>
  <text x="680" y="167.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SY920</text>
  <rect x="880" y="156.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="891.0" y="167.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <rect x="240" y="180" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="195.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE UDO SEC</text>
  <text x="510" y="195.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F00950W</text>
  <text x="680" y="195.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SY910</text>
  <text x="880" y="195.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="208" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="223.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE UDO OL</text>
  <text x="510" y="223.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F9860W</text>
  <text x="680" y="223.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">OL920</text>
  <rect x="880" y="212.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="891.0" y="223.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <rect x="240" y="236" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="251.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE UDO OL</text>
  <text x="510" y="251.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F9861W</text>
  <text x="680" y="251.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">OL920</text>
  <rect x="880" y="240.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="891.0" y="251.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The setting to fill</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JDE UDO SEC or JDE UDO OL</text>
  <line x1="200" y1="147.0" x2="250" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udol-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per library</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">that holds the table</text>
  <line x1="200" y1="227.0" x2="690" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udol-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">9.2 layout</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the library to use</text>
  <line x1="1120" y1="147.0" x2="910" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udol-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">No mark</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">an older layout: not this one</text>
  <line x1="1120" y1="227.0" x2="910" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udol-arrow)"/>
</svg>

---

## Columns

| Column | What it tells |
|---|---|
| **Setting to fill** | **JDE UDO SEC** for F00950W, **JDE UDO OL** for F9860W and F9861W. |
| **Table** | The table: F00950W (UDO security), F9860W and F9861W (the user defined objects and their location). |
| **Library** | A library that holds the table. |
| **9.2 layout** | Marked when the table in that library has the 9.2 layout. |

**The library to use is the one marked.** A line with no mark is an older copy of the table: setting it fails the collection step.

---

## Tips & best practices

- **Open this screen before filling JDE_UDO_SEC and JDE_UDO_OL** in [JD Edwards](./jd-edwards.md), or when the security collection fails on a UDO step.
- **F9860W and F9861W go together**: both lines of **JDE UDO OL** should name the same library.
- **Collect again after correcting a library**: [UDO security](../../applications/rights/udo-security.md) and the access paths of the composite and E1 pages are read at the next security collection.
