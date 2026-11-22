---
title: Database audit
description: "Monitoring → Database audit in Nomajde: the JD Edwards EnterpriseOne database read live from Oracle's dictionary, the way an audit reads it — the instance and its parameters, what the figures say, then size, tablespaces, the largest tables, activity, the most expensive statements, sessions, redo logs, objects and statistics — without any Diagnostics or Tuning Pack view."
keywords: [Nomajde, JD Edwards, JDE E1, database audit, Oracle, tablespace, NOARCHIVELOG, redo logs, buffer cache, hard parse, sessions, invalid objects, unusable indexes, statistics, control_management_pack_access, AWR, ASH]
---

# Database audit

**Monitoring → Database audit** reads the JD Edwards database live from Oracle's dictionary, the way an audit reads it: what the instance is, what the figures say, then nine sections in four tabs. It is read-only and written for Oracle.

No AWR, ASH, ADDM or SQL-monitor view is read: they belong to packs licensed separately, and reading them would itself count as a use. The activity figures therefore count since the instance started.

---

## At a glance

<svg viewBox="0 0 1200 356" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ndb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ndb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ndb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ndb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="312" rx="14" fill="url(#ndb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Database audit</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The JD Edwards database read live from Oracle's dictionary: size, activity, what costs the most, what is broken.</text>
  <rect x="885" y="34" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="922.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="84" width="174.0" height="34" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="92" width="18" height="18" rx="4" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="272.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="272.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">The instance and what the figures say</text>
  <rect x="422.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="430.0" y="92" width="18" height="18" rx="4" fill="#4ade80" fillOpacity="0.18"/>
  <text x="454.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Storage</text>
  <text x="454.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Size, tablespaces, the largest tables</text>
  <rect x="604.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="612.0" y="92" width="18" height="18" rx="4" fill="#c084fc" fillOpacity="0.18"/>
  <text x="636.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Activity</text>
  <text x="636.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Cache and waits, statements, sessions, redo</text>
  <rect x="786.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="794.0" y="92" width="18" height="18" rx="4" fill="#fb923c" fillOpacity="0.18"/>
  <text x="818.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Objects</text>
  <text x="818.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Invalid objects, indexes, statistics</text>
  <rect x="240" y="128" width="720" height="66" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="143" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">THE INSTANCE</text>
  <text x="340" y="143" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The activity figures count since the instance started. No AWR, ASH or advisor view is read.</text>
  <line x1="241" y1="151" x2="959" y2="151" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="168" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">Oracle 19c · instance ORCL · mode ARCHIVELOG · control_management_pack_access NONE · cursor_sharing EXACT</text>
  <text x="252" y="184" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">db_block_size 8192 · open_cursors 300 · processes 600 · sga_target 0 · undo_retention 900</text>
  <rect x="240" y="204" width="720" height="112" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="220" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHAT THE FIGURES SAY</text>
  <line x1="241" y1="228" x2="959" y2="228" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="243" r="3.5" fill="#fb923c"/>
  <text x="266" y="246" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TABLESPACES</text>
  <text x="392" y="246" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Tablespace PRODDTAT is 91 % full of what it may grow to.</text>
  <circle cx="256" cy="262" r="3.5" fill="#4a9eff"/>
  <text x="266" y="265" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">REDO LOGS</text>
  <text x="392" y="265" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">3 redo log group(s) with a single member: a lost file is a lost log.</text>
  <circle cx="256" cy="281" r="3.5" fill="#4a9eff"/>
  <text x="266" y="284" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECTS AND STATISTICS</text>
  <text x="392" y="284" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">12 JDE table(s) with stale statistics.</text>
  <circle cx="256" cy="300" r="3.5" fill="#4ade80"/>
  <text x="266" y="303" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">THE INSTANCE</text>
  <text x="392" y="303" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">control_management_pack_access is NONE: the packs' features cannot be used by mistake.</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four tabs</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each says how many to review</text>
  <line x1="200" y1="97.0" x2="244" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The instance</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">version, mode, parameters</text>
  <line x1="200" y1="177.0" x2="252" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What the figures say</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">amber first, then blue, green</text>
  <line x1="200" y1="277.0" x2="254" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Storage · Activity · Objects</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nine sections in all</text>
  <line x1="1000" y1="47.0" x2="550" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">No pack view</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">figures since the start</text>
  <line x1="1000" y1="167.0" x2="920" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Licence exposure</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pack access said in clear</text>
  <line x1="1000" y1="317.0" x2="860" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
</svg>

---

## The four tabs \{#tabs\}

Each tab says, beside its description, how many of its points are to review.

| Tab | Sections |
|---|---|
| **Overview** | **The instance** — version, instance, database, mode, platform and the parameters that matter (`control_management_pack_access`, `cursor_sharing`, `db_block_size`, `open_cursors`, `processes`, `sga_target`, `undo_retention`…) — and **What the figures say**. |
| **Storage** | **Size** by what each owner holds — business data, control tables, central objects, system, object librarian, data dictionary, Oracle, other —; **Tablespaces** with what they use and may grow to; **The largest tables**, their indexes and LOBs counted in, with their description from the Object Librarian. |
| **Activity** | **Activity** — cache hit ratio, hard parses, executions, commits, sorts on disk, where time was waited —; **The most expensive statements** and who sends them; **Sessions** by program — JDE kernels, JDE batches, web / AIS servers, tools; **Redo logs** and their switches hour by hour. |
| **Objects** | **Objects and statistics** — invalid objects, unusable indexes, JDE tables never analysed or with stale statistics. |

---

## What the figures say \{#findings\}

| Flagged | Meaning |
|---|---|
| A tablespace above 85 % | Of what it may grow to. |
| NOARCHIVELOG | No recovery to a point in time. |
| Redo logs with one member, or switching too often | A lost file is a lost log; the logs are small for the activity. |
| A short cache, hard parses | The buffer cache is short for what is read; statements are not shared. |
| Tools connected to the database | Sessions of programs other than JD Edwards. |
| Invalid objects, unusable indexes, statistics never taken or stale | On the JD Edwards owners. |
| `control_management_pack_access` | Whether the Diagnostics / Tuning packs' features may be used — a licence exposure if they are not held. |

---

## Access \{#access\}

The page shows to the roles that hold its menu entry and the permission `plugin:nomajde.dbaudit:j_db_audit`. It reads the database through the JD Edwards database connection.

---

## Tips & best practices \{#tips\}

- Read the **Overview** tab first: the amber lines are the points an auditor would raise.
- Check `control_management_pack_access` on every database of the platform: `NONE` keeps the packs' features out of reach.
- The activity figures count since the instance started: compare two readings a few days apart rather than one reading after a restart.

---

## Related

- [Performance](./performance.md) — the database's blocked sessions, slow statements and waits beside the servers'.
- [Platform analysis](./platform-analysis.md) — the servers.
