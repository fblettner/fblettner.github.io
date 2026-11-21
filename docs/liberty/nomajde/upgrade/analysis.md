---
title: Upgrade analysis
description: "The Upgrade menu of Nomajde: load the object list Oracle publishes for a JD Edwards release or update, build the analysis of a path code, and get for every custom, copied or modified object whether it has to be retrofitted, how complex it is and how many days it takes — with usage, dependencies, assignment and follow-up, and the summaries in the Data Explorer."
keywords: [Nomajde, JD Edwards, upgrade, retrofit, object list, release, update, UN9, path code, Object Librarian, F9861, custom objects, complexity, days, cross reference]
---

# Upgrade analysis

The **Upgrade** menu answers the first question of a JD Edwards upgrade or update: **what has to be retrofitted, and for how many days?** Nomajde reads the customer's objects of a path code, compares them with the list of objects Oracle changed in the target release, and gives each object a kind, a retrofit decision, a complexity and a number of days. JD Edwards is only read; the analysis is kept in Nomajde's own database.

---

## At a glance

<svg viewBox="0 0 1200 394" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="upg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="upg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="upg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="354" rx="14" fill="url(#upg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Upgrade</text>
  <rect x="240" y="64" width="170" height="44" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="325.0" y="83.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Oracle's object list</text>
  <text x="325.0" y="98.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel file · UN9</text>
  <rect x="240" y="118" width="170" height="44" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="325.0" y="137.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards — PD920</text>
  <text x="325.0" y="152.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">objects, usage, references</text>
  <line x1="410" y1="86" x2="466" y2="106" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <line x1="410" y1="140" x2="466" y2="120" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="468" y="88" width="170" height="50" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="553.0" y="110.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Build the analysis</text>
  <text x="553.0" y="125.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards is only read</text>
  <line x1="638" y1="113" x2="690" y2="113" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="692" y="84" width="84" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="702" y="102" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TO RETROFIT</text>
  <text x="702" y="128" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">86</text>
  <rect x="782" y="84" width="84" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="792" y="102" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DAYS</text>
  <text x="792" y="128" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">142.5</text>
  <rect x="872" y="84" width="84" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="882" y="102" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECTS</text>
  <text x="882" y="128" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1 240</text>
  <text x="240" y="180" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OBJECTS TO RETROFIT</text>
  <rect x="240" y="190" width="720" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="316" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT TYPE</text>
  <text x="394" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND</text>
  <text x="466" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RETROFIT</text>
  <text x="520" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPLEXITY</text>
  <text x="626" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DAYS</text>
  <text x="666" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST USED</text>
  <text x="766" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ASSIGNED TO</text>
  <text x="844" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUS</text>
  <rect x="240" y="220" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P554210</text>
  <text x="316" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="394" y="224.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="417.0" y="235.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Copied</text>
  <rect x="466" y="224.0" width="22" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="477.0" y="235.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Y</text>
  <text x="520" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Hard</text>
  <text x="626" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">3</text>
  <text x="666" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">18/11/2026</text>
  <text x="766" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">M. Dupont</text>
  <text x="844" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">In progress</text>
  <rect x="240" y="248" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">R5503B</text>
  <text x="316" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">UBE</text>
  <rect x="394" y="252.0" width="46" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="417.0" y="263.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Custom</text>
  <rect x="466" y="252.0" width="22" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="477.0" y="263.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <text x="520" y="263.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">Retrofit not needed</text>
  <text x="626" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">0</text>
  <text x="666" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">02/11/2026</text>
  <text x="766" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="844" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="276" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">B4200310</text>
  <text x="316" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">BSFN</text>
  <rect x="394" y="280.0" width="56" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="422.0" y="291.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Modified</text>
  <rect x="466" y="280.0" width="22" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="477.0" y="291.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Y</text>
  <text x="520" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Medium</text>
  <text x="626" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">1</text>
  <text x="666" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">20/11/2026</text>
  <text x="766" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">A. Martin</text>
  <text x="844" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="304" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">R55042</text>
  <text x="316" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">UBE</text>
  <rect x="394" y="308.0" width="56" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="422.0" y="319.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Modified</text>
  <rect x="466" y="308.0" width="22" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="477.0" y="319.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Y</text>
  <text x="520" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Hard</text>
  <text x="626" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">3</text>
  <text x="666" y="319.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">14/03/2023</text>
  <text x="766" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="844" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="332" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">V5501A</text>
  <text x="316" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">BSVW</text>
  <rect x="394" y="336.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="417.0" y="347.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Copied</text>
  <rect x="466" y="336.0" width="22" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="477.0" y="347.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <text x="520" y="347.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">Not updated</text>
  <text x="626" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">0</text>
  <text x="666" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">19/11/2026</text>
  <text x="766" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="844" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Load the list</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the file Oracle publishes</text>
  <line x1="200" y1="77.0" x2="240" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Build the analysis</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">for a path code</text>
  <line x1="200" y1="147.0" x2="240" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kind of object</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">custom, copied, modified</text>
  <line x1="200" y1="277.0" x2="240" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The figure</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">objects and days to plan</text>
  <line x1="1000" y1="77.0" x2="958" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Retrofit, complexity, days</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">computed, then yours to adjust</text>
  <line x1="1000" y1="217.0" x2="620" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Your follow-up</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kept at each new analysis</text>
  <line x1="1000" y1="307.0" x2="950" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
</svg>

---

## The two steps \{#steps\}

### 1. Load an object list from Oracle \{#load\}

**Upgrade → Load an object list from Oracle** takes the Excel file Oracle publishes for a release or an update — columns *Object*, *Version*, *Description*, *System Code*, *Date* — and stores it under the name given in **Name of the list (UN9)**. Loading a list again under the same name replaces it. The loaded lists are shown in **Upgrade → Oracle's object lists**.

Load two lists when the platform already runs an update: the target one (`UN9`) and the one in place (`UN2`).

### 2. Build the analysis \{#build\}

**Upgrade → Build the analysis** reads JD Edwards and writes the result.

| Parameter | Default | Meaning |
|---|---|---|
| **Path code the upgrade starts from** | `PD920` | The path code whose objects are analysed. |
| **Object list to compare with (its name; blank = none)** | blank | The target list. Without one, no object is marked as changed by Oracle. |
| **Object list the customer already runs** | blank | Optional. With it, only what Oracle changed **after** that list counts. |
| **Central objects schema, when not the pool's (PD920)** | blank | The schema of the central objects when it differs from the one of the connection. |

The run collects, for the path code: the objects added or changed by the customer in the Object Librarian, the original of each copy, what is really used (object usage tracking and the history of submitted jobs), and the cross reference between the customer's objects. It can be run again at any time: the decisions typed in the grid are kept.

---

## How an object is judged \{#rules\}

| Kind | When | Retrofit |
|---|---|---|
| **Audit Trail** | An audit table of the database audit. | No — complexity `Configuration`, 0 day. |
| **Custom** | An object created by the customer, with no JD Edwards original. | No — `Retrofit not needed`. |
| **Copied** | A copy of a standard object: its original is found by the application identifier the copy kept. | Yes when Oracle changed **the original** in the list. |
| **Modified** | A standard object changed by the customer. | Yes when Oracle changed it in the list. |

An object Oracle did not change is `Not updated`: nothing to retrofit. For the others, the complexity and the days follow the object type:

| Object type | Complexity | Days |
|---|---|---|
| Applications, reports | `Hard` | 3 |
| Business functions | `Medium` | 1 |
| Everything else | `Easy` | 0.5 |

---

## Objects to retrofit \{#objects\}

**Upgrade → Objects to retrofit** is the working list: one row per customer object of the path code.

| Columns | Content |
|---|---|
| **Path code**, **Object**, **Description**, **Object type**, **System code** | The object as the Object Librarian knows it. |
| **Kind**, **Original** | The kind above and, for a copy, the standard object it comes from. |
| **Retrofit**, **Complexity**, **Days** | The result of the analysis. |
| **Updated by Oracle on** | The date of the object — or of its original — in the target list. |
| **Last used**, **Users**, **Uses** | The usage found in JD Edwards: an object nobody uses is a candidate to drop rather than retrofit. |
| **Used by**, **Waiting for** | The customer objects that use it, and the objects it uses that are themselves to retrofit: the order of the work. |
| **Modified by**, **Modified on**, **Release**, **Analysed at** | Who last changed the object, the list compared with, the time of the analysis. |

### What is yours \{#yours\}

Eight columns are typed by the team and survive every new analysis: **Complexity (your choice)**, **Days (your choice)**, **Module**, **Assigned to**, **Status**, **Start**, **Finish** and **Note**. A complexity of `Easy`, `Medium` or `Hard` typed there replaces the computed one; days typed there replace the computed days of an object to retrofit. Open a row to edit them, or use the grid's bulk edit to assign a selection at once.

---

## The other screens \{#screens\}

| Screen | Use |
|---|---|
| **What uses what** | Which customer object uses which, with the retrofit and the complexity of each: an object waits for the ones it uses. |
| **Outside the reference path code** | Customer objects found only in another path code — never promoted, to review before the upgrade. |
| **Oracle's object lists** | The lists loaded: object, version of the object, description, system code, date. |

---

## Summaries \{#summaries\}

The [Data Explorer](../data-explorer.md) model **Upgrade analysis** gives the totals, with four saved analyses: *Retrofit by complexity and object type*, *Days of retrofit by complexity and object type*, *Days of retrofit by assignee and module*, *The customer's objects by kind*. The Nomajde [home page](../home.md) shows the number of objects to retrofit, the days by object type and the objects by complexity.

---

## Access \{#access\}

The screens show to the roles that hold their menu entries; the two jobs to the holders of their `job:` permission. The connection used to read JD Edwards needs read access to the Object Librarian tables of the central objects.

---

## Tips & best practices \{#tips\}

- Load the list **already in place** as well: without it every object Oracle ever touched counts, and the estimate is too high.
- Filter **Retrofit** = `Y` and sort on **Waiting for** to plan: the objects that wait for nothing come first.
- Look at **Last used** before estimating: a modified report nobody has run for three years is a decision to take, not three days to plan.
- The days are a first estimate by object type; correct them in **Days (your choice)** for the objects the team knows.
- The AI assistant knows the procedure: ask it to *prepare an upgrade* and it runs the two jobs and reads the result with you.

---

## Related

- [Jobs](../jobs.md) — running a job from the Nomajde menu.
- [Non-regression tests](../tests.md) — check that JD Edwards still behaves the same once the upgrade is done.
