---
title: Performance
description: "Monitoring → Performance in Nomajde: what slows the JD Edwards EnterpriseOne platform down now, read live from Server Manager, the database and the cross reference — a short list of advice, the heaviest first, each with what was measured, what it means and what to do."
keywords: [Nomajde, JD Edwards, JDE E1, performance, Server Manager, business functions, init-remote-env, kernel, zombie, Java heap, JDBj cache, Oracle, blocked sessions, statistics, redo logs, Resource Manager, tuning]
---

# Performance

**Monitoring → Performance** answers one question: **what slows the JD Edwards platform down now, and what to look at first?** The page reads Server Manager, the database and the cross reference — live, read-only, in about seven seconds — and turns the figures into a short list of advice, the heaviest first. Each line says what was measured, what it means and what to do.

---

## At a glance

<svg viewBox="0 0 1200 464" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nperf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nperf-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nperf-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nperf-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="420" rx="14" fill="url(#nperf-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Performance</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">What slows the JD Edwards platform down now, and what to look at first.</text>
  <rect x="885" y="34" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="922.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <text x="875" y="48.5" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Read at 14:02</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="86" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="105" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">12,480</text>
  <text x="250.0" y="118" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUSINESS FUNCTION CALLS</text>
  <rect x="385.6" y="86" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="395.6" y="105" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">94</text>
  <text x="395.6" y="118" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SECONDS SPENT IN THEM</text>
  <rect x="531.2" y="86" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="541.2" y="105" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">8</text>
  <text x="541.2" y="118" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MS PER CALL</text>
  <rect x="676.8" y="86" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="686.8" y="105" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="686.8" y="118" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TIMEOUTS</text>
  <rect x="822.4" y="86" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="832.4" y="105" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="832.4" y="118" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUESTS WAITING</text>
  <rect x="240.0" y="132" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="151" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">62</text>
  <text x="250.0" y="164" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">% JAVA HEAP, HIGHEST</text>
  <rect x="385.6" y="132" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="395.6" y="151" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">88</text>
  <text x="395.6" y="164" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">% CACHE HITS, LOWEST</text>
  <rect x="531.2" y="132" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="541.2" y="151" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">99.1</text>
  <text x="541.2" y="164" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">% DATABASE CACHE HITS</text>
  <rect x="676.8" y="132" width="137.6" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="686.8" y="151" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="686.8" y="164" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SESSIONS BLOCKED</text>
  <text x="242" y="190" fill="#94a3b8" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TO ACT ON FIRST  (1)</text>
  <rect x="240" y="198" width="720" height="76" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="198" width="3" height="76" fill="#f87171"/>
  <text x="252" y="214" fill="#f87171" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">BUSINESS FUNCTIONS</text>
  <text x="356.232" y="214" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">B4200310 takes 41% of all the time measured — 38 s over 920 call(s), 41 ms each</text>
  <text x="252" y="231" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WHAT IT MEANS</text>
  <text x="360" y="231" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">This is where the time goes: improving it is what users will feel most.</text>
  <text x="252" y="247" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WHAT TO DO</text>
  <text x="360" y="247" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Start here. Look at who calls it and at what it reads.</text>
  <text x="360" y="262" fill="#94a3b8" fontSize="8.2" fontFamily="ui-monospace, monospace">Called from 6 object(s), 14 place(s): P4210 · W4210A — Sales Order Entry …</text>
  <rect x="899" y="204" width="51" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="924.5" y="216.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Details</text>
  <text x="242" y="292" fill="#94a3b8" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TO REVIEW  (1)</text>
  <rect x="240" y="300" width="720" height="62" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="300" width="3" height="62" fill="#fb923c"/>
  <text x="252" y="316" fill="#fb923c" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ENTERPRISE SERVER</text>
  <text x="351.108" y="316" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">2 zombie process(es) on ENT_PD</text>
  <text x="252" y="333" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WHAT IT MEANS</text>
  <text x="360" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Processes that ended without being cleaned up: a kernel crashed.</text>
  <text x="252" y="349" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WHAT TO DO</text>
  <text x="360" y="349" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Read the enterprise server's logs, then clear the zombies from Server Manager.</text>
  <rect x="899" y="306" width="51" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="924.5" y="318.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Details</text>
  <text x="242" y="380" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Nothing to flag: Web and AIS, Caches, Database.</text>
  <rect x="240" y="390" width="720" height="34" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="404" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HOW TO READ THIS PAGE</text>
  <text x="252" y="417" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">• Every figure is the present moment or a counter since the servers started: there is no history yet. • Thresholds …</text>
  <rect x="1000" y="36" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read again</text>
  <text x="1010" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one live read, ~7 seconds</text>
  <line x1="1000" y1="53.0" x2="960" y2="44" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The figures</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">red / amber past a threshold</text>
  <line x1="200" y1="127.0" x2="240" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Heaviest first</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">act first · review · know</text>
  <line x1="200" y1="237.0" x2="242" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Details</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the rows behind the line, live</text>
  <line x1="1000" y1="167.0" x2="940" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Who calls it</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the cross reference</text>
  <line x1="1000" y1="247.0" x2="860" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="1000" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Meaning and action</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line each</text>
  <line x1="1000" y1="337.0" x2="820" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quiet areas named</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">silence is not 'not read'</text>
  <line x1="200" y1="417.0" x2="242" y2="376" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
  <rect x="1000" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The limits</text>
  <text x="1010" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no history, no AWR / ASH</text>
  <line x1="1000" y1="437.0" x2="950" y2="404" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nperf-arrow)"/>
</svg>

---

## The figures \{#figures\}

Nine figures head the page: **business function calls**, **seconds spent in them**, **ms per call**, **timeouts**, **requests waiting**, **% Java heap, highest**, **% cache hits, lowest**, **% database cache hits** and **sessions blocked**. A figure turns amber or red past its threshold.

What the page read is kept while the browser session lasts: opening it again draws it at once, and the header says when it was read (*Read at 14:02*). **Read again**, at the top right, reads everything once more. The Monitoring pages — Platform synthesis, Architecture, Platform analysis, Performance and Database audit — share their readings: what one page has read, the others draw at once, and what one page reads again is fresh in the others. The readings are kept per user, in the browser's memory only: reloading the browser reads again.

---

## The advice \{#advice\}

The lines are grouped by weight — **To act on first**, **To review**, **To know** — and each one names its area.

| Area | What is flagged |
|---|---|
| **Business functions** | A function that timed out, failed on the system side, takes most of the time measured, is slow at each call, or had one long wait. The line lists the applications and reports whose event rules call it, from the [cross reference](../cross-reference.md). |
| **Enterprise server** | A server step such as `init-remote-env` (opening the user's environment at sign-in), a kernel with requests waiting, a process that keeps transactions open, zombie processes. |
| **Web and AIS** | A Java heap close to its maximum. |
| **Caches** | A JDBj cache that answers too rarely. |
| **Database** | Blocked sessions, unusable indexes, a low cache hit ratio, statements parsed from scratch, a statement slow at each execution (its schema, its tables, who sends it, its text), redo logs that switch too often, missing or stale statistics, CPU held back by the Resource Manager, and the three largest waits. |

An area read with nothing to flag is named under the list (*Nothing to flag: …*): silence is not "not read". A source that did not answer is said in a warning; the rest of the page is still read.

### Details \{#details\}

Most lines carry a **Details** button, at their right: it reads, live, the rows behind the figure and shows them under the line, in a grid with search, filters, columns and export. **Hide** closes them.

| Line | What **Details** lists |
|---|---|
| Tables never analysed, or with stale statistics | Each table: owner, table, its description, rows, last analysis, state of its statistics. |
| Unusable indexes | Each index, its table and its type. |
| Blocked sessions | The sessions waiting, and who blocks them: session, user, program, machine, wait. |
| A slow statement | Its full text and the plan the database runs it with. |
| Low database cache hit ratio | The statements that read the disk most. |
| Statements parsed from scratch | The statements sent with their values written in the text. |
| Redo logs switching too often | The switches by hour. |
| A business function | Who calls it: the applications and reports whose event rules name it, up to 200 places. |
| Zombie processes, kernel with requests waiting, open transactions | The processes of the enterprise server named — the zombies themselves when Server Manager says which they are, otherwise every process of the server. |
| Java heap, server step, cache | The nodes, the business function calls or the caches of the server named. |

A database detail is read from Oracle, SQL Server and Db2 (Db2 for i included), each in its own words; a line a database has no rows for says *This detail is not read on this database.* On an IBM i, which counts the jobs waiting on a lock without saying for how long, the line gives how many jobs wait and how many hold them. Like the rest of the page, **Details** only reads: on Oracle, no AWR, no ASH.

---

## How to read the page \{#limits\}

The box at the bottom of the page states its limits:

- every figure is the present moment or a counter since the servers started: there is no history yet, so the page says what is slow, not since when;
- the thresholds: a function is flagged from a share of the time measured or a time per call, a Java heap from 80 %, a cache under 80 % of hits, a statement from a time per execution, the database cache under 90 %;
- the timeouts are the business functions' own counters — the enterprise server's log files are not reachable through Server Manager;
- the database is read from its own counters — on Oracle without the Diagnostics Pack: no AWR, no ASH.

---

## Access \{#access\}

The page shows to the roles that hold its menu entry and the permissions `plugin:nomajde.performance:*`; **Details** needs nothing more. It reads Server Manager through the `jde_server_manager` pool (see [Server Manager](./server-manager.md#connection)) and the JD Edwards database.

The assistant is told what the page shows — the heaviest advice — and offers its own questions: *What should I look at first, and why?* See [AI assistant](../ai-assistant.md).

---

## Tips & best practices \{#tips\}

- Start with **To act on first**: one business function that takes a large share of the time is where users feel an improvement most.
- Open the callers of a slow function in the [cross reference](../cross-reference.md) to know which screens and reports are affected.
- After a restart, the counters start from zero: read the page again once the platform has worked for a while.
- **Details** first, for the rows behind a line; then [Platform analysis](./platform-analysis.md) (servers, processes, functions, INI) or [Database audit](./database-audit.md) for the whole picture.

---

## Related

- [Platform synthesis](../synthesis.md) · [Platform analysis](./platform-analysis.md) · [Database audit](./database-audit.md) · [Server Manager](./server-manager.md) · [JDE Health Check](./jde-servers.md).
