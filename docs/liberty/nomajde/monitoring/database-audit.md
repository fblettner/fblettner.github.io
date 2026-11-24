---
title: Database audit
description: "Monitoring → Database audit in Nomajde: the JD Edwards EnterpriseOne database read live from its own dictionary — Oracle, SQL Server, Db2 for Linux / UNIX / Windows or Db2 for i (IBM i) — the way an audit reads it — the instance and its parameters, what the figures say, then size, tablespaces, the largest tables, activity, the most expensive statements, sessions, redo logs, objects and statistics — without any Diagnostics or Tuning Pack view."
keywords: [Nomajde, JD Edwards, JDE E1, database audit, Oracle, tablespace, NOARCHIVELOG, redo logs, buffer cache, hard parse, sessions, invalid objects, unusable indexes, statistics, control_management_pack_access, AWR, ASH, SQL Server, transaction log, data files, Db2, Db2 for i, IBM i, AS/400, disk pools, ASP, journals]
---

# Database audit

**Monitoring → Database audit** reads the JD Edwards database live from its own dictionary, the way an audit reads it: what the instance is, what the figures say, then nine sections in four tabs. It is read-only. Four databases are read — **Oracle**, **SQL Server**, **Db2 for Linux / UNIX / Windows** and **Db2 for i** (IBM i, AS/400) — with the same sections and the same rules, each in its own words: see [Per database](#databases). On another database, the page says the database the JD Edwards pool is on and reads nothing.

On Oracle, no AWR, ASH, ADDM or SQL-monitor view is read: they belong to packs licensed separately, and reading them would itself count as a use. The activity figures therefore count since the instance started.

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
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The JD Edwards database read live from its own dictionary: size, activity, what costs the most, what is broken.</text>
  <rect x="885" y="34" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="922.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <text x="875" y="48.5" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Read at 14:02</text>
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
| **Activity** | **Activity** — five figures on one strip: cache hit ratio, hard parses, executions, commits, sorts on disk —; **Where time was waited** beside **Sessions** by program — JDE kernels, JDE batches, web / AIS servers, tools; **Redo logs** and their switches hour by hour, across the page; **The most expensive statements** and who sends them, last. |
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

These are Oracle's rules; the other databases follow the same ones in their own words, with a few of their own — see [Per database](#databases).

---

## What the page keeps \{#kept\}

What the page read is kept while the browser session lasts: opening it again draws it at once, and the header says when it was read — *Read at 14:02*, with the day when the reading is older than today. **Read again** reads every section anew.

The Monitoring pages share their readings: once [Platform synthesis](../synthesis.md) is read, this page reads only the two sections the synthesis does not show, and what one page reads again is fresh in the others. The readings are kept per user, in the browser's memory only: reloading the browser reads again.

---

## Per database \{#databases\}

The database is the one the JD Edwards pool points at; its type decides the reading. The tabs and the rules stay the same; the sections and the columns take the database's own words, in both languages, on the page and in the [platform report](../synthesis.md#report). A section the database has nothing of says so (*SQL Server has nothing of this kind.*); a section that fails shows the database's own message, and the others are still read.

The pool must be of the database's type, and Liberty Next must carry that database's driver — see the pool's [Database stage](../../framework/connectors.md#pool-stages).

### Oracle \{#oracle\}

The sections described above, from the `v$` and `dba_` views. The account needs to read them.

### SQL Server \{#sql-server\}

A JD Edwards on SQL Server is several databases — the business data and the control tables in one, the system tables, the server map, the Object Librarian and the data dictionary in another, each path code's central objects in its own. An owner is therefore a database **and** a schema: the pool's schemas name a table of another database than the pool's own as `DATABASE.SCHEMA` (`JDE_PRODUCTION.PRODDTA`); a plain name is a schema of the pool's database.

| Section | What it shows |
|---|---|
| **The instance** | Version, edition, collation, the settings that matter (`max server memory (MB)`…), and the JD Edwards databases with their **Recovery**, **Compatibility**, **Read committed snapshot**, automatic statistics, **Auto shrink**, **Auto close** and **Page verify**. |
| **Size** | Per **Database.schema**. |
| **Data files** | In place of the tablespaces: how full each file is of what it may grow to — its own limit, or the room left on its volume. |
| **The largest tables** | With their **Statistics** date. |
| **Transaction logs** | One per database: **Recovery**, size, **Used %**, what it **Waits on**, **Last log backup**, **Virtual files**. |
| **Activity** | Cache, **Batches compiled** in place of the hard parses, the page life, the waits. |
| **The most expensive statements** | Those still in the plan cache. |
| **Objects and statistics** | **Disabled indexes**, statistics **Never computed** or **Stale** — SQL Server has no invalid object. |

Its own rules flag `max server memory` not set, a JD Edwards database with auto shrink, auto close, automatic statistics off or a page verify other than `CHECKSUM`, a transaction log 80 % full, a log in full recovery never backed up or not for more than 24 hours, a database in SIMPLE recovery, and a log cut in more than 1 000 virtual files.

The account needs `VIEW SERVER STATE` and to be a user of the JD Edwards databases.

### Db2 for Linux, UNIX and Windows \{#db2\}

The same sections, from the monitor functions and the catalog: the tablespaces, the **Transaction log** and the log files archived per hour, the buffer pools and the package cache (**Not in the package cache** in place of the hard parses, **Sort overflows** for the sorts on disk), the time waited by cause, lock waits, **Indexes to rebuild**, the tables **Used, never analysed**. Its own rules flag circular logging, automatic statistics off, the self-tuning memory off, a log nearly full, and deadlocks or lock timeouts since the database was activated.

The account needs to run the monitor functions (`SQLADM` or `DBADM`) and to read the catalog.

### Db2 for i (IBM i) \{#db2-for-i\}

On an IBM i, the database is the system: there is no instance, tablespace, redo log or buffer cache. The sections keep their place and show what the system has instead:

| Section | What it shows |
|---|---|
| **The system** | Its release and PTF levels, processors, memory, the last IPL, the system values that matter. |
| **Libraries** | The size per library — the pool's schemas name them. |
| **Disk pools (ASP)** | How full each disk pool is. |
| **The largest files** | With their **Deleted rows** and **Last used** date. |
| **Journals** | Their **Receivers**, who manages them, whether they delete their receivers, the files journaled, and the receivers attached per hour. |
| **Activity** | **Processor in use**, **Active jobs**, **Jobs in the system**, temporary storage; **Memory pools** with their faults in place of the waits. |
| **What the jobs run now** | The statements the active jobs run at this moment. The plan cache is read only through a procedure that writes a file, which this reading never runs. |
| **Jobs** | The active jobs, by name, client address and user. |
| **Indexes and deleted rows** | **Indexes not valid**, the files **To reorganise**, the **Indexes the system advises**. |

Its own rules flag a journal that is not active, a journal that keeps its receivers on line, files holding many deleted rows, and the indexes the system advises. A figure counts since the last IPL.

The account needs to read the `QSYS2` services; the statement a job runs and the locks of another job ask for more (`*JOBCTL`, or the function usage `QIBM_DB_SQLADM`).
---

## Access \{#access\}

The page shows to the roles that hold its menu entry and the permission `plugin:nomajde.dbaudit:j_db_audit`. It reads the database through the JD Edwards database connection; what the account needs is said for each database under [Per database](#databases).

---

## Tips & best practices \{#tips\}

- Read the **Overview** tab first: the amber lines are the points an auditor would raise.
- On Oracle, check `control_management_pack_access` on every database of the platform: `NONE` keeps the packs' features out of reach.
- On SQL Server, write in the pool's schemas the `DATABASE.SCHEMA` of each library that is not in the pool's own database: the largest tables, the disabled indexes and the statistics are read only for the databases the pool names.
- The activity figures count since the database started (since the last IPL on an IBM i): compare two readings a few days apart rather than one reading after a restart.

---

## Related

- [Performance](./performance.md) — the database's blocked sessions, slow statements and waits beside the servers'.
- [Platform analysis](./platform-analysis.md) — the servers.
