---
title: Steps
description: "The ten Nomaflow step types — sql_query, sql_copy, file_load, file_export, python, http, ldap_sync, call_job, report, notify — what each one does, its fields and defaults, and what it records in the run."
keywords: [Nomaflow, steps, sql_query, sql_copy, file_load, python, http, ldap_sync, call_job, report, notify, digest, spreadsheet load, CSV, replace_partition, Liberty Next]
---

# Steps

A **step** is one unit of work in a job. Steps run in order; when one fails, the following ones are recorded as *skipped: earlier step failed*.

| The step… | Type |
|---|---|
| runs one named query of a SQL connector | **`sql_query`** |
| copies a whole table from one connector to another | **`sql_copy`** |
| loads a spreadsheet or a CSV file into a table | **`file_load`** |
| writes the result of a read query to an Excel or CSV file | **`file_export`** |
| calls a Python function of a plugin | **`python`** |
| calls a URL | **`http`** |
| reads an LDAP / Active Directory directory into a table | **`ldap_sync`** |
| runs another job and waits for it | **`call_job`** |
| renders a saved analysis, a dashboard or a report to an Excel or PDF file | **`report`** |
| sends a message, with the files of the run attached | **`notify`** |

In the job editor, the **+** on a link of the flow offers the ten types and inserts the step at that place; a click on a step's card opens its fields beside the flow. A few keys exist only in `jobs.toml` (noted below).

---

## At a glance

<svg viewBox="0 0 1320 562" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="522" rx="14" fill="url(#nfst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Job · sales-load</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Job-level settings + the step pipeline</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Back to jobs</text>
  <text x="1008" y="101" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">unsaved changes</text>
  <rect x="1018" y="86" width="62" height="22" rx="5" fill="url(#nfst-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1049.0" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="122" width="470" height="400" rx="10" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <line x1="254" y1="140" x2="702" y2="140" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="162" x2="702" y2="162" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="184" x2="702" y2="184" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="206" x2="702" y2="206" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="228" x2="702" y2="228" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="250" x2="702" y2="250" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="272" x2="702" y2="272" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="294" x2="702" y2="294" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="316" x2="702" y2="316" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="338" x2="702" y2="338" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="360" x2="702" y2="360" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="382" x2="702" y2="382" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="404" x2="702" y2="404" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="426" x2="702" y2="426" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="448" x2="702" y2="448" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="470" x2="702" y2="470" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="492" x2="702" y2="492" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="514" x2="702" y2="514" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <rect x="614" y="132" width="84" height="22" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">−</text>
  <text x="656" y="147" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="684" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">+</text>
  <rect x="256" y="180" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="270" y="197" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="284" y="197" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start</text>
  <line x1="330" y1="193" x2="356" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M354,189 L360,193 L354,197 Z" fill="#334155"/>
  <circle cx="343.0" cy="193" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="343.0" y="196.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="362" y="169" width="150" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="359" y="166" width="156" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="372" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILE_LOAD</text>
  <text x="372" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">load-sales</text>
  <text x="372" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">? → sales.fact_sales</text>
  </g>
  <line x1="514" y1="193" x2="540" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M538,189 L544,193 L538,197 Z" fill="#334155"/>
  <circle cx="527.0" cy="193" r="8" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="527.0" y="196.5" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="546" y="169" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="556" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL_QUERY</text>
  <text x="556" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refresh-totals</text>
  <text x="556" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sales.totals_refresh</text>
  </g>
  <line x1="256" y1="271" x2="282" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M280,267 L286,271 L280,275 Z" fill="#334155"/>
  <circle cx="269.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="247" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="261" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTIFY</text>
  <text x="298" y="275" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="298" y="288" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="440" y1="271" x2="466" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M464,267 L470,271 L464,275 Z" fill="#334155"/>
  <circle cx="453.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="453.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="472" y="258" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="275" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="500" y="275" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">End</text>
  <rect x="477.0" y="207" width="112" height="200" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="489.0" y="226" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">sql_copy</text>
  <text x="489.0" y="245" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">sql_query</text>
  <text x="489.0" y="264" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">python</text>
  <text x="489.0" y="283" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">ldap_sync</text>
  <text x="489.0" y="302" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">http</text>
  <text x="489.0" y="321" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">call_job</text>
  <text x="489.0" y="340" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">file_load</text>
  <text x="489.0" y="359" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">file_export</text>
  <text x="489.0" y="378" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">report</text>
  <text x="489.0" y="397" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">notify</text>
  <rect x="724" y="122" width="356" height="400" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="738" y="134" width="61" height="16" rx="4" fill="#4ade80" fillOpacity="0.14" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="745" y="145.5" fill="#4ade80" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">file_load</text>
  <text x="807" y="146" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">load-sales</text>
  <text x="879" y="146" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">? → fact_sales</text>
  <rect x="970" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="980.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="994" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1004.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="1018" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1028.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1042" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="738" y="172" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STEP NAME</text>
  <rect x="738" y="177" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="191.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">load-sales</text>
  <rect x="738" y="208" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="755" y="217" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">If this step fails, run the next steps anyway (…)</text>
  <rect x="738" y="226" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="755" y="235" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Turned off for this install — never runs (…)</text>
  <text x="738" y="255" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILE</text>
  <text x="738" y="271" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PATH ($&#123;PARAMS.X&#125; AND $&#123;RUN.ID&#125; ALLOWED…)</text>
  <rect x="738" y="276" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="290.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">/data/in/sales-$&#123;params.period&#125;.xlsx</text>
  <text x="738" y="314" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WATCHED FOLDER (USED WHEN PATH IS EMPTY)</text>
  <rect x="738" y="319" width="216" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="333.5" fill="#475569" fontSize="8.5" fontFamily="ui-monospace, monospace">/data/in/sales</text>
  <text x="962" y="314" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PATTERN</text>
  <rect x="962" y="319" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="972" y="333.5" fill="#475569" fontSize="8.5" fontFamily="ui-monospace, monospace">∗.xlsx</text>
  <text x="738" y="364" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SHEET</text>
  <rect x="738" y="369" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="383.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sales</text>
  <text x="850" y="364" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">HEADER ROW</text>
  <rect x="850" y="369" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="383.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1</text>
  <text x="962" y="364" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CSV DELIMITER</text>
  <rect x="962" y="369" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="972" y="383.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">blank = detect</text>
  <text x="738" y="412" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TARGET</text>
  <text x="738" y="428" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="738" y="433" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="447.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sales</text>
  <text x="830" y="447.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="850" y="428" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCHEMA</text>
  <rect x="850" y="433" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="447.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">public</text>
  <text x="962" y="428" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="962" y="433" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="972" y="447.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">fact_sales</text>
  <text x="738" y="478" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Columns · Constants · Load mode · Guards …</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a card</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens that step beside the flow</text>
  <line x1="200" y1="137.0" x2="400" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The + menu</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the ten step types</text>
  <line x1="200" y1="317.0" x2="477.0" y2="302" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Wraps to the next row</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a long job stays readable</text>
  <line x1="200" y1="457.0" x2="256" y2="271" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Step icons</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">up, down, clone, delete</text>
  <line x1="1120" y1="93.0" x2="1010" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Common switches</text>
  <text x="1130" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">go on after a failure · turned off</text>
  <line x1="1120" y1="207.0" x2="1066" y2="229" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fields of the type</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">here a file_load</text>
  <line x1="1120" y1="307.0" x2="1066" y2="287" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Target</text>
  <text x="1130" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">connector, schema, table</text>
  <line x1="1120" y1="437.0" x2="1066" y2="444" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
</svg>

---

## Common fields \{#common\}

| Field | Default | Notes |
|---|---|---|
| `name` | — | Shown in the run detail; unique within the job. |
| `type` | — | One of the ten types. |
| `enabled` | `true` | `false` skips the step (recorded as *skipped: disabled*). Set in `jobs.toml`, or for one run in the **Run with parameters** window. |
| `timeout_seconds` | `3600` | The step is cancelled after this time. Set in `jobs.toml`. |
| `continue_on_failure` | `false` | `true`: when the step fails (after its retries), the next steps run anyway and the run ends failed, naming it — for a job chaining independent work. A checkbox in the step editor; for every step of a job, `[jobs.step_defaults]`. |

**Turn a step off for an install.** A step the install doesn't need — the LDAP collection without LDAP — is listed in the job's `disabled_steps = ["SECURITY_LDAP"]` (the step editor's *Turned off for this install* checkbox). It never runs, even when a run or a preset selects every step: the **Run with parameters** window shows it off and not selectable, the run records it as *skipped: turned off for this install*. Unlike `enabled` — the default a run may override — it is the operator's last word, and the licensed apps installer keeps it across upgrades.

When a step fails on a database error, the run detail shows the database's own sentence — *invalid input for query argument $1: 2025 (expected str, got int)* — and the statement goes to the server log.

---

## SQL query — `sql_query` \{#sql-query\}

Runs one **named query** of a SQL connector — a query defined on the connector's page, read or write.

| Field | Required | Notes |
|---|---|---|
| `connector` | yes | The SQL connector. |
| `query` | yes | The name of the query, not SQL text. |
| `params` | no | Values bound to the query's parameters. |
| `pool` | no | Another pool of the connector's set — see [Multi-pool connectors](../framework/connectors.md#multi-pool). `jobs.toml` only. |

Records the number of rows returned or affected. To refresh a materialised view, call a procedure or purge a table, write the statement as a query of the connector, then call it here.

---

## SQL copy — `sql_copy` \{#sql-copy\}

Streams the rows of a source table to a target table, possibly on another database.

| Field | Default | Notes |
|---|---|---|
| `source` = `{connector, schema, table}` | — | Required. `pool` may be added (`jobs.toml` only). |
| `target` = `{connector, schema, table}` | — | Required. Same. |
| `mode` | `overwrite` | `overwrite`: the rows are written to a work table `<table>__new`, which then replaces the target in one transaction — the target is never empty during the copy. `append`: rows are inserted into the target as it is. |
| `type_coercion` | `jde` | `jde` applies the JD Edwards rules (scaled decimals, Julian dates, padded codes); `none` copies the values as they are. |
| `decimal_mode` | `truncate` | With `jde`: `truncate` or `preserve` the decimal part. |
| `batch_size` | `10000` | Rows per batch. |
| `strip_both_columns` | `[]` | Columns whose values are trimmed on both sides. |

`upsert` is accepted by the schema but refused at run time: for an insert-or-update, write a `MERGE` / `ON CONFLICT` query and call it with `sql_query`. Records the number of rows written.

---

## File load — `file_load` \{#file-load\}

Loads an Excel workbook (`.xlsx`, `.xlsm`) or a text file (`.csv`, `.txt`, `.tsv`) into a table — on a schedule, without anyone at the keyboard, at the volume a facts table needs, and replayable for one period without touching the others.

### The file

The file comes from, in this order of priority:

1. **a file chosen when the job is run** — the **Run with parameters** window shows a file picker for each `file_load` step (the window opens for any job that has one), and so does the job's page opened [from an application's menu](./jobs/run-from-menu.md), for the steps with neither `path` nor watched folder;
2. **`path`** — a path on the server, which may contain `${params.x}` (a run parameter), `${run.id}` and `${job.id}`: `/data/in/sales-${params.period}.xlsx`;
3. **a watched folder** — `watch_dir` and `watch_pattern` (`*.xlsx`): every matching file is loaded in name order, each in its own transaction, then moved to `done/` or `failed/` under a time-stamped name. A file that fails stops the run; the files after it stay in the folder. An empty folder is not an error.

| Field | Default | Notes |
|---|---|---|
| `sheet` | first sheet | A name or a number (1 = first). |
| `header_row` | `1` | The row of the column headers; data starts below. Empty rows are skipped. |
| `delimiter` | detected | CSV separator; detected among `;` `,` tab `|` when empty. |
| `encoding` | `utf-8-sig` | CSV only. |
| `decimal_separator` — **Numbers written as text** | *Detect* | How the file writes a number stored as text: *1,234.56 — a dot for decimals* or *1.234,56 — a comma for decimals*; the other character is then a thousands separator. Spreadsheet cells typed as numbers are read as they are. |

### The target

| Field | Notes |
|---|---|
| `target` = `{connector, schema, table}` | A SQL connector; the table must exist. |
| `columns` | Target column ← file header or position (`#3`). Headers match ignoring case, spaces, `_` and `-`; unmapped columns match by name. |
| `constants` | Target column ← value, for what the file does not carry: `period = "${params.period}"`, `batch_id = "${run.id}"`. |

Each cell is converted to the type of its target column: integers, decimals, dates (`2026-10-27`, `27/10/2026`, `27.10.2026`, `20261027`, and Excel dates), booleans (`1`, `true`, `yes`, `oui`…), text. A number typed as text keeps no leading zeros that the spreadsheet already removed.

A number written as text follows **Numbers written as text**. Spaces and apostrophes between digits are always thousands separators. With *Detect*:

- when a dot and a comma are both there, the last one is the decimal separator — `1.234,56` and `1,234.56` both read as 1234.56;
- several of the same character are thousands separators — `1,234,567`;
- a single one is the decimal separator — `12,5` and `12.5` both read as 12.5 — except in a whole-number column, where groups of three digits are thousands: `1,000` reads as 1000.

*Detect* cannot tell what `1,000` means in a decimal column — one thousand, or one — and reads it as 1: name the file's separator when it writes thousands that way.

### Load mode

| Field | Choice |
|---|---|
| `load_mode` | `append` (default) inserts the rows. `replace_partition` first deletes the rows of the partitions the file carries, then inserts — **in one transaction**: a failed load leaves the previous data in place, and a corrected month replaces that month only. |
| `partition_by` | The partition columns (`period, company`) — required with `replace_partition`. The partitions come from the constants when they cover every column, otherwise from the distinct values found in the file. |
| `on_error` | `fail` (default): the first bad cell fails the step and names the row. `skip`: bad rows are counted as rejected and written to a CSV (file, row, reason) offered in the run detail. |
| `batch_size` | `10000` rows per insert. |

### Guards

| Field | Notes |
|---|---|
| `refuse_query` | A named query run before anything is touched, with the run parameters and the constants as binds. With `partition_by`, it runs once for each partition the file carries, with the partition columns as binds (`:YEAR`, `:MONTH`, `:COMPANY_CODE`): the guard follows the file, not a parameter typed when the job is run. If it returns a row, the load is refused and the first column is the reason: *period 2026-02 is closed*. `refuse_connector`: its connector, the target's by default. |
| `control_column` + `control_total` | The column is summed over the loaded rows and compared with a value, `${params.total}`, or a cell of the file (`@B2`, `@Totals!B2`), within `control_tolerance`. A difference rolls the file's load back and names both figures. |

### In the run

The run detail shows *N read · N inserted · N rejected* and, when rows were rejected, **Rejected rows (csv)** to download them. The log adds the partitions replaced and the rows deleted.

Uploaded files and reject files go to the jobs' work area, `.nomaflow/files` next to the configuration; an upload is limited to 200 MB.

```toml title="jobs.toml"
[[jobs.steps]]
type = "file_load"
name = "load-sales"
path = "/data/in/sales-${params.period}.xlsx"
sheet = "Sales"
target = { connector = "sales", schema = "public", table = "fact_sales" }
columns = { company = "Company", article = "Item", qty = "Quantity", revenue = "Revenue" }
constants = { period = "${params.period}", batch_id = "${run.id}" }
load_mode = "replace_partition"
partition_by = ["period", "company"]
refuse_query = "period_closed_get"
control_column = "revenue"
control_total = "@Totals!B2"
```

---

## Python — `python` \{#python\}

Calls a function of a plugin: `callable = "package.module:function"`.

| Field | Notes |
|---|---|
| `callable` | `module.path:function` — checked for shape when saved, imported when the step runs. |
| `op_kwargs` | Arguments passed to the function, merged over the job's shared parameters. |

The function receives its arguments as keyword arguments and, when it declares them by name, `connectors` (the connector registry), `ctx` (the run: `ctx.run_id`, `ctx.job_id`, `ctx.trigger`) and `settings`. It may be `async` or not. Its return value: an `int` is the number of rows affected, a `dict` is kept as the step's details, `None` is fine; an exception fails the step. To reach the run log, write with a logger of a registered namespace. The full contract is in [Write a callable](../framework/build/plugins/write-a-callable.md).

---

## HTTP — `http` \{#http\}

| Field | Default | Notes |
|---|---|---|
| `url` | — | Required. Used as written. |
| `method` | `GET` | `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`. |
| `headers` | `{}` | Sent as they are. |
| `body` | none | Text, or a table sent as JSON (with `Content-Type: application/json` when none is set). |

A 2xx answer succeeds; anything else fails the step with the status. The step keeps the status, the first 4 KB of the answer and the duration. Values from the environment are written `${NAME}` in `jobs.toml` and replaced when the file is loaded.

---

## LDAP sync — `ldap_sync` \{#ldap-sync\}

Reads entries from an LDAP directory and runs a write query of a SQL connector for each entry.

| Field | Notes |
|---|---|
| `server` | `ldaps://ad.example.com:636`. |
| `bind_dn`, `bind_password` | The account used to read; write the password as `${LDAP_PASSWORD}`. |
| `search_base`, `search_filter` | Where and what to search: `DC=example,DC=com`, `(objectClass=user)`. |
| `attributes` | The attributes to read. |
| `target_connector`, `target_query` | The write query run for each entry. |
| `mapping` | LDAP attribute → query parameter. A missing attribute gives `NULL`. |

Records the number of entries read and rows written.

---

## Call a job — `call_job` \{#call-job\}

`target_job_id` names another job. The step starts it, waits for it to end and takes its result: success, failure or cancellation. The called job has its own run in the history, and inherits the caller's log level and run parameters. A job that would end up calling itself is refused.

---

## Report — `report` \{#report\}

Renders a document into the run's work area: a [saved analysis or dashboard of the Data Explorer](../framework/explorer/saved-and-dashboards.md), or a report of a plugin. Followed by a `notify` step, it makes a **scheduled digest** a plain job.

<svg viewBox="0 0 1320 486" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfdg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfdg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfdg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfdg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="446" rx="14" fill="url(#nfdg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">sales-monthly-digest</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">A click on the report card, then on the notify card: each opens its fields beside the flow.</text>
  <rect x="240" y="91" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="108" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="268" y="108" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start</text>
  <line x1="314" y1="104" x2="340" y2="104" stroke="#334155" strokeWidth="2"/>
  <path d="M338,100 L344,104 L338,108 Z" fill="#334155"/>
  <circle cx="327.0" cy="104" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="327.0" y="107.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="346" y="80" width="150" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="343" y="77" width="156" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="356" y="94" fill="#c084fc" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPORT</text>
  <text x="356" y="108" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">revenue</text>
  <text x="356" y="121" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">analysis:revenue_by_bu…</text>
  </g>
  <line x1="500" y1="104" x2="526" y2="104" stroke="#334155" strokeWidth="2"/>
  <path d="M524,100 L530,104 L524,108 Z" fill="#334155"/>
  <circle cx="513.0" cy="104" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="513.0" y="107.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="532" y="80" width="150" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="529" y="77" width="156" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="542" y="94" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTIFY</text>
  <text x="542" y="108" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="542" y="121" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="686" y1="104" x2="712" y2="104" stroke="#334155" strokeWidth="2"/>
  <path d="M710,100 L716,104 L710,108 Z" fill="#334155"/>
  <circle cx="699.0" cy="104" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="699.0" y="107.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="718" y="91" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="732" y="108" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="746" y="108" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">End</text>
  <rect x="240" y="146" width="413" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="667" y="146" width="413" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="254" y="158" width="45" height="16" rx="4" fill="#c084fc" fillOpacity="0.14" stroke="#c084fc" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="261" y="169.5" fill="#c084fc" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">report</text>
  <text x="307" y="170" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">revenue</text>
  <text x="363" y="170" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">analysis:revenue_by_business_un…</text>
  <text x="254" y="200" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO RENDER</text>
  <text x="254" y="220" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <rect x="254" y="225" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="239.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">A saved analysis…</text>
  <text x="365" y="239.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="385" y="220" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EXPLORER MODEL</text>
  <rect x="385" y="225" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="395" y="239.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">sales · sales</text>
  <text x="496" y="239.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="516" y="220" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ANALYSES</text>
  <rect x="516" y="225" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="526" y="239.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">revenue_by_bu…</text>
  <text x="627" y="239.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="254" y="272" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="254" y="277" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="291.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Excel</text>
  <text x="365" y="291.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="385" y="272" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="385" y="277" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="395" y="291.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Last month</text>
  <text x="496" y="291.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="516" y="272" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FILE NAME</text>
  <rect x="516" y="277" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="526" y="291.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">monthly-sales</text>
  <text x="254" y="324" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RENDER AS USER</text>
  <rect x="254" y="329" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="343.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="385" y="324" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RENDER AS ROLE</text>
  <rect x="385" y="329" width="123" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="395" y="343.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Unrestricted</text>
  <text x="496" y="343.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="254" y="382" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Step name and the two switches sit above, as for every step.</text>
  <rect x="681" y="158" width="45" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="688" y="169.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">notify</text>
  <text x="734" y="170" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">send</text>
  <text x="770" y="170" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">role:management · Sales digest …</text>
  <text x="681" y="200" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="681" y="220" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RECIPIENTS</text>
  <rect x="681" y="225" width="355" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="691" y="239.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">role:management</text>
  <rect x="1042" y="226" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="240" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="681" y="252" width="45" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="703.5" y="264.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="681" y="286" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SUBJECT</text>
  <rect x="681" y="291" width="355" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="691" y="305.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sales digest &#123;DATE&#125; — &#123;JOB&#125;</text>
  <rect x="1042" y="292" width="24" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1054.0" y="306" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="681" y="332" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BODY</text>
  <rect x="681" y="337" width="355" height="30" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="691" y="355.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">The monthly sales digest is attached: &#123;FILES&#125;.</text>
  <rect x="1042" y="338" width="24" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1054.0" y="352" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="681" y="386" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ATTACH (RUN FILES; ∗ = ALL)</text>
  <rect x="681" y="391" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="691" y="405.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">∗</text>
  <text x="881" y="386" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CHANNELS</text>
  <rect x="881" y="397" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M883.5,402.5 L885.8,404.8 L889.8,400" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="898" y="406" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="942.24" y="397" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M944.74,402.5 L947.04,404.8 L951.04,400" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="959.24" y="406" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">email</text>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Saved object</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shared analyses and dashboards</text>
  <line x1="200" y1="167.0" x2="258" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period preset</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">else the analysis's own</text>
  <line x1="200" y1="267.0" x2="385" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="20" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Visibility</text>
  <text x="30" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a user's or a role's data scope</text>
  <line x1="200" y1="367.0" x2="254" y2="341" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recipients</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">user:, role:, email: — one per row</text>
  <line x1="1120" y1="167.0" x2="1050" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="250" width="196" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Placeholders</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;JOB&#125; &#123;RUN_ID&#125; &#123;FILES&#125; &#123;DATE&#125; &#123;USER&#125;</text>
  <line x1="1120" y1="267.0" x2="1064" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run files attached</text>
  <text x="1130" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every file, or by name</text>
  <line x1="1120" y1="367.0" x2="841" y2="402" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
</svg>

| Field (editor) | Notes |
|---|---|
| **Source** | *A saved analysis (Explorer)*, *A dashboard of analyses (Explorer)* — one section per tile — or *A report (plugin)*. |
| **Explorer model**, **Analyses** / **Dashboards** | The model, then one of its **shared** analyses or dashboards. A private one cannot be picked. |
| **Report** | For a plugin report: the report, from the reports of the installed applications. |
| **Format** | Excel or PDF — the same documents as the Explorer's export, the charts drawn in the PDF. |
| **Period** | A preset (*Last month*, *This quarter*, *Last 7 days*…, or all dates), or *The analysis's own period*. |
| **File name** | The file's name; by default, the analysis's title. |
| **Render as user** | The document holds what that user sees: the data scope of their roles, with their attributes. A digest rendered as the manager of one company holds that company only. |
| **Render as role** | The data scope of a role. A rule whose values come from a user attribute allows nothing here: prefer **Render as user** for such roles. |

For a plugin report, the run's parameters — the job's, those chosen when running it, the user parameters — are passed to the report on top of the step's own, converted to the type the report declares (a number stays a number); a blank value leaves the report's default.

A coded column of a saved analysis is written as the analysis shows it — its label, its code or both, as set in the analysis; set the field to *Code* to keep the codes in the document.

With neither user nor role, the document is **unrestricted**. The run detail offers the file for download under the step; the log names it with its size.

---

## Notify — `notify` \{#notify\}

Sends a message through the [notification channels](./notifications.md), with the files this run produced attached.

| Field (editor) | Notes |
|---|---|
| **Recipients** | `user:<login>`, `role:<role>` or `email:<address>`, one per line. `user:{USER}` is the person who started the run — "send me the export I asked for". |
| **Subject**, **Body** | Text with placeholders: `{JOB}`, `{RUN_ID}`, `{FILES}` (the names of the attached files), `{DATE}` (today), `{USER}` (who started the run). |
| **Attach (run files; `*` = all)** | `*` attaches every file the run produced — every `report`, and the rejected rows of a `file_load`; or name the files. A named file the run did not produce fails the step. |
| **Channels** | **portal** (the bell) and **email**. The e-mail account is the one of [Notifications](./notifications.md#smtp). |

The message links to the run. The run detail lists the attached files under the step.

A run nobody started — a schedule, another job — has no one behind `user:{USER}`: that recipient is left out. A step left with no recipient at all sends nothing and says so in its log, without failing the run.

```toml title="jobs.toml — a monthly digest"
[[jobs.steps]]
type = "report"
name = "revenue"
report = "analysis:revenue_by_business_unit"
app = "sales"
model = "sales"
format = "pdf"
period = "lastMonth"
as_user = "cfo"

[[jobs.steps]]
type = "notify"
name = "send"
recipients = ["role:management"]
subject = "Sales digest {DATE}"
body = "The monthly sales digest is attached: {FILES}."
attach = ["*"]
```

Schedule the job on the first of the month (cron `0 7 1 * *`) — see [Schedules](./jobs/schedules.md).

---

## File export — `file_export` \{#file-export\}

Writes the result of a named **read** query to a file in the run's work area — for another system to pick up, or for a `notify` step to attach. A query that writes is refused.

| Field (editor) | Notes |
|---|---|
| **Connector**, **Query** | The read query to run. |
| **Parameters** | Its binds; the run's parameters are passed too. A value may use `${params.x}`. |
| **Format** | *Excel (xlsx)* (default) or *CSV*. |
| **File name (default: the query)** | May use `${params.x}` and `${run.id}`: `sales-${params.period}`. |
| **Sheet** | Excel only — the query's name by default. |
| **CSV delimiter**, **Encoding** | CSV only — `;` and `utf-8-sig` by default. |
| **Also copy to this folder (optional)** | A server folder where a copy is written as well, created if missing: `/data/out/${params.period}`. |

The rows are read from the database as they come, up to the connector's row limit — the log says when the export was capped. The header row carries the columns' labels; hidden columns are left out. The run detail offers the file under the step, and the retention of the work area applies to it — not to the copy in the other folder.

---

## Retries and timeouts \{#retry\}

The job's **Retry policy** block (`attempts`, `backoff` fixed or exponential, `base_seconds`) applies to each step: a step is tried up to `attempts` times in all (`1`, the default, means no retry), with a wait of `base_seconds` between tries — constant, or doubling with `exponential`. The job as a whole stops after `timeout_seconds` (4 hours by default).
