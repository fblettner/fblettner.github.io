---
title: Oracle
description: "Nomasx-1 Database → Oracle page — the Oracle database of a connected application as it was collected: its figures (size, processors, users, options on, features used, partitioned segments), then its options, features, partitions and instances."
keywords: [Nomasx-1, database, Oracle, options, feature usage, partitioning, instances, processors, Named User Plus, Data Guard, management packs]
---

# Oracle

The **Oracle** database page shows the Oracle database of a connected application **as it was collected**: its figures on top — what it is, its size, its processors, its users, how many options are on, how many features were used, how many segments are partitioned — then one tab per list: **options**, **features**, **partitions** and **instances**.

It is the technical inventory behind [Licences → Oracle](../licenses/oracle.md): where a component reads *in use*, this page says which option is on, which feature was used and when, and who owns the partitioned segments.

Open it from **Database → Oracle**.

---

## At a glance

<svg viewBox="0 0 1320 426" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="orad-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="orad-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="orad-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="orad-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="880" height="388" rx="14" fill="url(#orad-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Oracle database</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">What the database is, the options it has on, the features it uses.</text>
  <rect x="1002" y="36" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1041.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <rect x="824" y="36" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="834" y="50.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1 · JDE-PROD ▾</text>
  <text x="808" y="51" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="221" y1="78" x2="1099" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="113" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">JDEPRD</text>
  <text x="250.0" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE</text>
  <text x="250.0" y="137" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">JDEDB01</text>
  <rect x="361.1428571428571" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.1428571428571" y="113" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">850</text>
  <text x="371.1428571428571" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SIZE (GB)</text>
  <rect x="482.2857142857143" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.2857142857143" y="113" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">16</text>
  <text x="492.2857142857143" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSORS</text>
  <rect x="603.4285714285714" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.4285714285714" y="113" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">118 / 164</text>
  <text x="613.4285714285714" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERS (ACTIVE / ALL)</text>
  <rect x="724.5714285714286" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="734.5714285714286" y="113" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="734.5714285714286" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPTIONS ON</text>
  <rect x="845.7142857142857" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="855.7142857142857" y="113" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="855.7142857142857" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FEATURES USED</text>
  <rect x="966.8571428571429" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="976.8571428571429" y="113" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">42</text>
  <text x="976.8571428571429" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARTITIONED SEGMENTS</text>
  <text x="240" y="166" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Oracle Database 19c Enterprise Edition 19.0.0.0.0 · collected on 2026-11-20 · management packs: DIAGNOSTIC+TUNING · Data Guard: no</text>
  <rect x="240.0" y="176" width="204.0" height="36" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="184" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="276.0" y="192" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Options</text>
  <text x="276.0" y="205" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">What the database has installed · 7</text>
  <rect x="452.0" y="176" width="204.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="460.0" y="184" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <text x="488.0" y="192" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Features</text>
  <text x="488.0" y="205" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">What was used, and when · 9</text>
  <rect x="664.0" y="176" width="204.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="672.0" y="184" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <text x="700.0" y="192" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Partitions</text>
  <text x="700.0" y="205" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The partitioned segments · 42</text>
  <rect x="876.0" y="176" width="204.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="884.0" y="184" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <text x="912.0" y="192" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Instances</text>
  <text x="912.0" y="205" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The databases collected · 1</text>
  <rect x="240" y="222" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="236.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="1022" y="222" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1051.0" y="236.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="963" y="222" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="989.5" y="236.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="914" y="222" width="43" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="935.5" y="236.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="855" y="222" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="881.5" y="236.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="806" y="222" width="43" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="827.5" y="236.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="252" width="840" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="267.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPTION</text>
  <text x="550" y="267.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ON</text>
  <text x="750" y="267.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LICENSED AS</text>
  <rect x="240" y="280" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Partitioning</text>
  <text x="550" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">yes</text>
  <text x="750" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Partitioning</text>
  <rect x="240" y="308" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Real Application Clusters</text>
  <text x="550" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">no</text>
  <text x="750" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Real Application Clusters</text>
  <rect x="240" y="336" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="351.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Oracle Label Security</text>
  <text x="550" y="351.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">no</text>
  <text x="750" y="351.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Label Security</text>
  <rect x="240" y="364" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="379.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Spatial</text>
  <text x="550" y="379.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">no</text>
  <text x="750" y="379.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Oracle Enterprise Edition</text>
  <rect x="20" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The database's figures</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">size, processors, users…</text>
  <line x1="205" y1="109.0" x2="240" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#orad-arrow)"/>
  <rect x="20" y="170" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What it is</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">product, collection date, packs</text>
  <line x1="205" y1="187.0" x2="240" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#orad-arrow)"/>
  <rect x="20" y="300" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Option → licence</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the component each one needs</text>
  <line x1="205" y1="317.0" x2="240" y2="305" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#orad-arrow)"/>
  <rect x="1115" y="36" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="1125" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each Oracle database collected</text>
  <line x1="1115" y1="53.0" x2="909" y2="58" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#orad-arrow)"/>
  <rect x="1115" y="210" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four tabs</text>
  <text x="1125" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one grid per list</text>
  <line x1="1115" y1="227.0" x2="1070" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#orad-arrow)"/>
</svg>

---

## The header \{#header\}

| Control | What it does |
|---|---|
| **Application** | The application whose Oracle database is shown, as `id · name`. Only the applications an Oracle database was collected for are offered. The page reopens on the last application and the last tab. |
| **Read again** | Reads the application again. |

The assistant is given the database name, its size, the options on and the features used.

---

## The figures \{#figures\}

| Figure | What it shows |
|---|---|
| **Database** | The database name, its host below. |
| **Size (GB)** | The size collected. |
| **Processors** | The CPU count collected. |
| **Users (active / all)** | The active accounts of the database against all its accounts. |
| **Options on** | How many options are on. Orange when there is one. |
| **Features used** | How many features were used at least once. |
| **Partitioned segments** | How many tables and indexes are partitioned. Orange when one of them belongs to an owner that is not flagged technical. |

The line under the figures gives the product and its version, the collection date, the management packs the database allows and whether it runs Data Guard.

---

## The tabs \{#tabs\}

Each tab card gives the number of lines of its list. The grid has the usual search, sort, filters, grouping, columns and export.

### Options \{#tab-options\}

What the database has installed: *Option*, *On* (*yes* / *no*), *Licensed as* — the licence component the option needs, as set on [Settings → Licences → Oracle → Options](../settings/oracle/options.md). The options on come first.

### Features \{#tab-features\}

What was used, and when: *Feature*, *Detected usages*, *First used*, *Last used*, *Licensed as* (from [Settings → Licences → Oracle → Features](../settings/oracle/features.md)). The first and last dates tell whether a feature was used once long ago or is still used today.

### Partitions \{#tab-partitions\}

The segments that use Partitioning: *Owner*, *Technical owner* (*yes* when the owner is flagged technical on [Users properties](../settings/security/users-properties.md)), *Type*, *Segment*, *Created*, *Last change*. A segment held by a vendor schema reads apart from one created by the business.

### Instances \{#tab-instances\}

The databases collected for the application, one line each: *Database*, *Host*, *Product*, *Version*, *Instances* (more than one under Real Application Clusters), *Processors*, *Active users*, *Users*, *Packs*, *Data Guard*, *Size (GB)*, *Collected*.

---

## Tips & best practices

- **Start from *Licences → Oracle*.** A component *in use, NOT subscribed* there is explained here: the option on, the feature with its last date, the partitioned segment with its owner.
- **A feature used once, years ago** is not the same story as one used last week: read *Last used* before any estimate.
- **Partitioned segments of technical owners** usually come with a vendor product; those of business owners were created on site.
- **Active against all users** shows the dormant accounts of the database itself, apart from those of the application.
