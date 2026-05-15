---
title: SoD — Objects
description: "Source-system programs attached to each SoD activity — the technical objects whose execution counts as performing the activity."
keywords: [Nomasx-1, settings, SoD, objects, activity mapping, source-system programs]
---

# SoD — Objects

The **Objects** screen attaches source-system programs to SoD activities. One line per `(Application, Process, Activity, Row, Object)`. Each row says: *running this object counts as performing this activity*. An activity typically maps to several objects — interactive forms, batch programs, the same program with different versions.

This is the bridge between the abstract SoD model and the concrete programs the source system runs.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodo-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#sodo-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · SoD · Objects</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="240" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIVITY</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROW</text>
  <text x="450" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT ID</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="240" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="450" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Vendor Master Maintenance</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="240" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="450" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Address Book Vendor</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="240" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="450" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Manual Payment</text>
</svg>

---

## Goal of the view

- **Tell Nomasx-1 what counts as "doing" an activity.** Each row pins an SoD activity to a concrete source-system object.
- **Multiple rows per activity is normal.** *Row* numbers them — the engine considers any of them as evidence the activity was performed.
- **Source for *Conflicts → Proven*.** Without an object mapping the activity has no observable footprint, so the proven analysis cannot work.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `OBJECT_APPS_ID` — application. | The application. |
| **Process ID** | `OBJECT_PROCESS_ID` — process. | The SoD process. |
| **Activity ID** | `OBJECT_ACT_ID` — activity. | The activity the object backs. |
| **Row ID** | `OBJECT_ROW_ID` — sequence. | Stable identifier among the objects of the same activity. |
| **Object ID** | `OBJECT_ID` — technical object. | Program code (e.g. JDE `P0401`). |
| **Object Name** | `OBJECT_NAME` — friendly label. | Human-readable name of the program. |

---

## Tips & best practices

- **Map every program that touches the activity** — the *Proven* view depends on a complete mapping. Missing rows produce false negatives on the conflict analysis.
- **Re-check the mapping after a source-system patch** — new versions of a program (or a new alternative entry point) need to be added here.
- **Per-activity mappings should not overlap.** The same object on two different activities makes the model ambiguous.
