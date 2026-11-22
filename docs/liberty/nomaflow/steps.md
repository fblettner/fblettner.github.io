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

In the job editor, the **+** on a link of the flow offers the ten types, said in words — *Copy a table*, *Run a query*, *Run a function*, *Read a directory*, *Call an address*, *Start another job*, *Load a file*, *Export to a file*, *Produce a report*, *Send a message* — and inserts the step at that place; a click on a step's card opens its fields beside the flow. The cards and the head of the form show the kind the same way. Every dropdown of a step's form opens with its search box ready: typing filters at once, and a list of *code — description* lines is ordered on the code, a description being found by typing it.

---

## At a glance

<svg viewBox="0 0 1320 822" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="782" rx="14" fill="url(#nfst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Job · sales-load</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Job-level settings + the step pipeline</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Back to jobs</text>
  <text x="1008" y="101" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">unsaved changes</text>
  <rect x="1018" y="86" width="62" height="22" rx="5" fill="url(#nfst-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1049.0" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="122" width="330" height="660" rx="10" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <line x1="254" y1="140" x2="562" y2="140" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="162" x2="562" y2="162" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="184" x2="562" y2="184" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="206" x2="562" y2="206" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="228" x2="562" y2="228" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="250" x2="562" y2="250" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="272" x2="562" y2="272" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="294" x2="562" y2="294" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="316" x2="562" y2="316" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="338" x2="562" y2="338" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="360" x2="562" y2="360" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="382" x2="562" y2="382" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="404" x2="562" y2="404" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="426" x2="562" y2="426" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="448" x2="562" y2="448" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="470" x2="562" y2="470" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="492" x2="562" y2="492" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="514" x2="562" y2="514" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="536" x2="562" y2="536" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="558" x2="562" y2="558" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="580" x2="562" y2="580" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="602" x2="562" y2="602" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="624" x2="562" y2="624" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="646" x2="562" y2="646" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="668" x2="562" y2="668" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="690" x2="562" y2="690" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="712" x2="562" y2="712" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="734" x2="562" y2="734" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="756" x2="562" y2="756" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <rect x="474" y="132" width="84" height="22" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">−</text>
  <text x="516" y="147" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="544" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">+</text>
  <rect x="256" y="180" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="270" y="197" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="284" y="197" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start</text>
  <line x1="330" y1="193" x2="356" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M354,189 L360,193 L354,197 Z" fill="#334155"/>
  <circle cx="343.0" cy="193" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="343.0" y="196.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="362" y="169" width="140" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="359" y="166" width="146" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="372" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOAD A FILE</text>
  <text x="372" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">load-sales</text>
  <text x="372" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">→ sales.fact_sales</text>
  </g>
  <line x1="256" y1="271" x2="282" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M280,267 L286,271 L280,275 Z" fill="#334155"/>
  <circle cx="269.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="247" width="140" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="261" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUN A QUERY</text>
  <text x="298" y="275" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refresh-totals</text>
  <text x="298" y="288" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sales.totals_refresh</text>
  </g>
  <line x1="256" y1="349" x2="282" y2="349" stroke="#334155" strokeWidth="2"/>
  <path d="M280,345 L286,349 L280,353 Z" fill="#334155"/>
  <circle cx="269.0" cy="349" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="352.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="325" width="140" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="339" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEND A MESSAGE</text>
  <text x="298" y="353" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="298" y="366" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="430" y1="349" x2="456" y2="349" stroke="#334155" strokeWidth="2"/>
  <path d="M454,345 L460,349 L454,353 Z" fill="#334155"/>
  <circle cx="443.0" cy="349" r="8" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="443.0" y="352.5" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="462" y="336" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="476" y="353" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="490" y="353" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">End</text>
  <rect x="387.0" y="363" width="150" height="200" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="399.0" y="382" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Copy a table</text>
  <text x="399.0" y="401" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Run a query</text>
  <text x="399.0" y="420" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Run a function</text>
  <text x="399.0" y="439" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Read a directory</text>
  <text x="399.0" y="458" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Call an address</text>
  <text x="399.0" y="477" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Start another job</text>
  <text x="399.0" y="496" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Load a file</text>
  <text x="399.0" y="515" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Export to a file</text>
  <text x="399.0" y="534" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Produce a report</text>
  <text x="399.0" y="553" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Send a message</text>
  <rect x="584" y="122" width="496" height="660" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="598" y="134" width="66" height="16" rx="4" fill="#4ade80" fillOpacity="0.14" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="605" y="145.5" fill="#4ade80" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Load a file</text>
  <text x="672" y="146" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">load-sales</text>
  <text x="744" y="146" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">→ sales.fact_sales</text>
  <rect x="970" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="980.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="994" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1004.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="1018" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1028.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="1042" y="132" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="146" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="598" y="172" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STEP NAME</text>
  <rect x="598" y="177" width="468" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="191.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">load-sales</text>
  <rect x="598" y="206" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="615" y="215" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">If this step fails, run the next steps anyway (…)</text>
  <rect x="598" y="222" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="615" y="231" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Turned off for this install — never runs (…)</text>
  <text x="598" y="249" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">▸ More settings</text>
  <text x="598" y="267" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">THE FILE</text>
  <text x="598" y="283" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHERE THE FILE COMES FROM</text>
  <rect x="598" y="288" width="468" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="302.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Given by the person who starts the job</text>
  <text x="1054" y="302.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="598" y="322" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">The window that starts the job asks for the file. Nothing else to set here.</text>
  <text x="598" y="346.5" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HOW TO READ IT</text>
  <text x="598" y="362.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SHEET (EXCEL)</text>
  <rect x="598" y="367.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="382.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sales</text>
  <text x="756" y="362.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ROW OF THE COLUMN TITLES</text>
  <rect x="756" y="367.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="766" y="382.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1</text>
  <text x="914" y="362.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SEPARATOR (CSV)</text>
  <rect x="914" y="367.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="382.0" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">blank: detected</text>
  <text x="598" y="396.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NUMBERS WRITTEN AS TEXT</text>
  <rect x="598" y="401.5" width="308" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="416.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Detected (1,5 is read 1.5 — say which…</text>
  <text x="894" y="416.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="914" y="396.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENCODING</text>
  <rect x="914" y="401.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="416.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">utf-8-sig</text>
  <text x="598" y="446.5" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">THE TABLE IT FILLS</text>
  <text x="598" y="462.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="598" y="467.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="482.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sales</text>
  <text x="736" y="482.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="756" y="462.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCHEMA</text>
  <rect x="756" y="467.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="766" y="482.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">public</text>
  <text x="894" y="482.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="914" y="462.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="914" y="467.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="482.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">fact_sales</text>
  <text x="1052" y="482.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="598" y="502.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">COLUMNS NAMED DIFFERENTLY IN THE FILE</text>
  <text x="598" y="518.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Column of the table</text>
  <text x="823" y="518.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Its title in the file, or its position</text>
  <rect x="598" y="522.5" width="217" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="536.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">revenue</text>
  <text x="805" y="536.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="823" y="522.5" width="217" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="833" y="536.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Revenue</text>
  <rect x="1046" y="522.5" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="536.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="598" y="550.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VALUES WRITTEN ON EVERY ROW</text>
  <rect x="598" y="556.5" width="217" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="570.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">period</text>
  <text x="805" y="570.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="823" y="556.5" width="217" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="833" y="570.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">$&#123;params.period&#125;</text>
  <rect x="1046" y="556.5" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="570.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="598" y="600.5" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HOW IT IS LOADED</text>
  <text x="598" y="616.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ROWS ALREADY IN THE TABLE</text>
  <rect x="598" y="621.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="636.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Replaced, for wh…</text>
  <text x="736" y="636.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="756" y="616.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REPLACED BY</text>
  <rect x="756" y="621.5" width="308" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="766" y="636.0" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="762" y="624.5" width="56" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="769" y="636.0" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">period ✕</text>
  <rect x="823" y="624.5" width="61" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="830" y="636.0" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">company ✕</text>
  <text x="598" y="652.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">A CELL THAT CANNOT BE READ</text>
  <rect x="598" y="657.5" width="308" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="672.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Stops the load</text>
  <text x="894" y="672.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="914" y="652.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BATCH SIZE</text>
  <rect x="914" y="657.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="672.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">10000</text>
  <text x="598" y="702.5" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CHECKS</text>
  <text x="598" y="718.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">QUERY THAT REFUSES THE FILE</text>
  <rect x="598" y="723.5" width="308" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="738.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">period_closed_get</text>
  <text x="894" y="738.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="914" y="718.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">READ ON</text>
  <rect x="914" y="723.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="738.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">the connector of…</text>
  <text x="1052" y="738.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="598" y="754.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">COLUMN TO TOTAL</text>
  <rect x="598" y="759.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="774.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">revenue</text>
  <text x="736" y="774.0" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="756" y="754.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EXPECTED TOTAL</text>
  <rect x="756" y="759.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="766" y="774.0" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">@Totals!B2</text>
  <text x="914" y="754.5" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ACCEPTED DIFFERENCE</text>
  <rect x="914" y="759.5" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="774.0" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">0</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a card</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens that step beside the flow</text>
  <line x1="200" y1="137.0" x2="400" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The + menu</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the ten kinds, said in words</text>
  <line x1="200" y1="417.0" x2="387.0" y2="458" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="20" y="600" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="615" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table's columns offered</text>
  <text x="30" y="628" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as a list, once the table is picked</text>
  <line x1="200" y1="617.0" x2="598" y2="532.5" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">More settings</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by default · timeout · environment</text>
  <line x1="200" y1="267.0" x2="598" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Step icons</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">up, down, clone, delete</text>
  <line x1="1120" y1="93.0" x2="1010" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Where the file comes from</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one choice, only its own fields</text>
  <line x1="1120" y1="227.0" x2="1076" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · How to read it</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sheet, titles, separators</text>
  <line x1="1120" y1="307.0" x2="1076" y2="343.5" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · The table it fills</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the table picked in the schema</text>
  <line x1="1120" y1="397.0" x2="1076" y2="478.5" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="500" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="515" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">4 · The rows already there</text>
  <text x="1130" y="528" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kept, or replaced for the file</text>
  <line x1="1120" y1="517.0" x2="1076" y2="597.5" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
  <rect x="1120" y="610" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="625" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">5 · What is checked</text>
  <text x="1130" y="638" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a refusing query, a total</text>
  <line x1="1120" y1="627.0" x2="1076" y2="734.5" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfst-arrow)"/>
</svg>

---

## Common fields \{#common\}

| Field | Default | Notes |
|---|---|---|
| `name` | — | Shown in the run detail; unique within the job. |
| `type` | — | One of the ten types. |
| **Runs by default** — `enabled` | `true` | Unticked, the step is skipped (recorded as *skipped: disabled*) unless the person who starts the job ticks it in the **Run with parameters** window. |
| **Stopped after (seconds)** — `timeout_seconds` | `3600` | The step is cancelled after this time. Blank: one hour. |
| **Environment** — `pool` | the connector's own | The environment (database or server) the step works on, when its connector runs on several — see [Multi-pool connectors](../framework/connectors.md#multi-pool). |
| `continue_on_failure` | `false` | `true`: when the step fails (after its retries), the next steps run anyway and the run ends failed, naming it — for a job chaining independent work. A checkbox in the step editor; for every step of a job, `[jobs.step_defaults]`. |

**Runs by default**, **Stopped after (seconds)** and **Environment** are under **More settings** in the step's form, folded until one of them is set. **Environment** lists the environments of the step's connector, or every environment of the installation for a step that names no connector; *the connector's own* leaves it to the connector. A *Copy a table* step names an environment on each side instead (see [below](#sql-copy)); a *Read a directory* step has its directory pool.

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
| `pool` | no | **Environment**, under **More settings**: another pool of the connector's set — see [Multi-pool connectors](../framework/connectors.md#multi-pool). |

Records the number of rows returned or affected. To refresh a materialised view, call a procedure or purge a table, write the statement as a query of the connector, then call it here.

---

## SQL copy — `sql_copy` \{#sql-copy\}

Streams the rows of a source table to a target table, possibly on another database.

| Field | Default | Notes |
|---|---|---|
| `source` = `{connector, schema, table}` | — | Required. **Schema** and **Table** are picked in the connector's database — the tables and views of the schema, each with its number of columns; a name can still be typed (a table not created yet, a database that cannot be read). **Environment** (`pool`) appears when the connector runs on several. |
| `target` = `{connector, schema, table}` | — | Required. Same. |
| `mode` | `overwrite` | *Replace everything* (`overwrite`): the rows are written to a work table `<table>__new`, which then replaces the target in one transaction — the target is never empty during the copy. *Add to what is there* (`append`): rows are inserted into the target as it is. |
| `type_coercion` | `jde` | *JD Edwards types (dates, amounts)* (`jde`) applies the JD Edwards rules (scaled decimals, Julian dates, padded codes); *As they are* (`none`) copies the values unchanged. |
| `decimal_mode` | `truncate` | With `jde`: *Cut the extra decimals* (`truncate`) or *Keep every decimal* (`preserve`). |
| `batch_size` | `10000` | Rows per batch. |
| `strip_both_columns` | `[]` | Columns whose values are trimmed on both sides. |

*Add the new rows, update the others* (`upsert`) is offered but refused at run time: for an insert-or-update, write a `MERGE` / `ON CONFLICT` query and call it with `sql_query`. Records the number of rows written.

---

## File load — `file_load` \{#file-load\}

Loads an Excel workbook (`.xlsx`, `.xlsm`) or a text file (`.csv`, `.txt`, `.tsv`) into a table — on a schedule, without anyone at the keyboard, at the volume a facts table needs, and replayable for one period without touching the others.

The step's form asks five questions, in the order a person asks them — **The file**, **How to read it**, **The table it fills**, **How it is loaded**, **Checks**. Each field has a short label and, written under it, what it is for.

### The file \{#file-load-source\}

**Where the file comes from** is one choice, which shows only its own fields:

| Choice | Fields | Notes |
|---|---|---|
| *Given by the person who starts the job* | — | The window that starts the job asks for the file: **Run with parameters** shows a file picker for each such step, and so does the job's page opened [from an application's menu](./jobs/run-from-menu.md). Nothing else to set. |
| *A file on the server* | **File on the server** (`path`) | Its full path, which may contain `${params.x}` (a value given when the job is started), `${run.id}` and `${job.id}`: `/data/in/sales-${params.period}.xlsx`. |
| *A folder watched for new files* | **Folder** (`watch_dir`), **Files to take** (`watch_pattern`, `*` by default) | Every matching file is loaded in name order, each in its own transaction, then moved to its `done/` or `failed/` sub-folder under a time-stamped name. A file that fails stops the run; the files after it stay in the folder. An empty folder is not an error. |

Picking a source empties the fields of the others. A file given when the job is started always wins.

### How to read it \{#file-load-reading\}

| Field | Default | Notes |
|---|---|---|
| **Sheet (Excel)** — `sheet` | the first | A name or a number (1 = first). |
| **Row of the column titles** — `header_row` | `1` | Data starts below. Empty rows are skipped. |
| **Separator (CSV)** — `delimiter` | detected | Detected among `;` `,` tab `\|` when blank. |
| **Numbers written as text** — `decimal_separator` | *Detected* | How the file writes a number stored as text: *1,234.56 — a dot for the decimals* or *1.234,56 — a comma for the decimals*; the other character is then a thousands separator. Spreadsheet cells typed as numbers are read as they are. |
| **Encoding** — `encoding` | `utf-8-sig` | CSV only. |

A number written as text follows **Numbers written as text**. Spaces and apostrophes between digits are always thousands separators. With *Detected*:

- when a dot and a comma are both there, the last one is the decimal separator — `1.234,56` and `1,234.56` both read as 1234.56;
- several of the same character are thousands separators — `1,234,567`;
- a single one is the decimal separator — `12,5` and `12.5` both read as 12.5 — except in a whole-number column, where groups of three digits are thousands: `1,000` reads as 1000.

*Detected* cannot tell what `1,000` means in a decimal column — one thousand, or one — and reads it as 1: name the file's separator when it writes thousands that way.

### The table it fills \{#file-load-table\}

| Field | Notes |
|---|---|
| **Connector**, **Schema**, **Table** — `target` | A SQL connector; the table, picked among the tables of the schema (or typed), must exist. Once the table is named, its columns are offered as lists in the fields below. |
| **Columns named differently in the file** — `columns` | Rows of **Column of the table** and **Its title in the file, or its position** (`#3` for a file without titles). A column with the same name in the file and in the table is matched by itself: list only the others. Titles match ignoring case, spaces, `_` and `-`. **Add a column** adds a row. |
| **Values written on every row** — `constants` | Rows of **Column of the table** and **Value**, for a column the file does not hold: `${run.id}` (the number of the run), `${params.period}` (a value given when the job is started) or a fixed text. **Add a value** adds a row. |

Each cell is converted to the type of its column: integers, decimals, dates (`2026-10-27`, `27/10/2026`, `27.10.2026`, `20261027`, and Excel dates), booleans (`1`, `true`, `yes`, `oui`…), text. A number typed as text keeps no leading zeros that the spreadsheet already removed.

### How it is loaded \{#file-load-mode\}

| Field | Choice |
|---|---|
| **Rows already in the table** — `load_mode` | *Kept — the file is added to them* (`append`, default). *Replaced, for what the file carries* (`replace_partition`): the rows of the table that have the same values as the file in the **Replaced by** columns are deleted, then the file is loaded — **in one transaction**: a failed load leaves the previous data in place, and a corrected month replaces that month only. |
| **Replaced by** — `partition_by` | The columns that delimit what is replaced (`period`, `company`), picked among the table's columns — required with *Replaced*. The values come from the values written on every row when they cover every column, otherwise from the distinct values found in the file. |
| **A cell that cannot be read** — `on_error` | *Stops the load* (`fail`, default): the first bad cell fails the step and names the row. *Its row is left out, and counted as rejected* (`skip`): bad rows are written to a CSV (file, row, reason) offered in the run detail. |
| **Batch size** — `batch_size` | `10000` rows per insert. |

### Checks \{#file-load-checks\}

| Field | Notes |
|---|---|
| **Query that refuses the file** — `refuse_query`, **Read on** — `refuse_connector` | A query, picked among the read queries of the connector (**Read on**: the connector of the table by default), run before anything is touched. It receives the values given when the job is started and the values written on every row. With **Replaced by**, it runs once for each set of values the file carries, those columns as binds (`:YEAR`, `:MONTH`, `:COMPANY_CODE`): the check follows the file, not a value typed when the job is started. If it returns a row, the load is refused and the first column is the reason shown: *period 2026-02 is closed*. |
| **Column to total** — `control_column`, **Expected total** — `control_total`, **Accepted difference** — `control_tolerance` | The column, picked among the table's columns, is added up over the loaded rows and compared with the expected total: a number, `${params.total}`, or a cell of the file (`@B2`, `@Totals!B2`). Another total, beyond the accepted difference, cancels the load and names both figures. |

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

Calls a function of an application's plugin.

| Field | Notes |
|---|---|
| **Function** — `callable` | Picked in the list of the functions the applications ship: see below. Stored as `module.path:function` — checked for shape when saved, imported when the step runs. |
| **Values given to the function** — `op_kwargs` | Name / value rows passed to the function, merged over the job's shared parameters. |

**The function picker** is the same everywhere a function is chosen — this step, a [service's](../framework/build/services.md) function step, an endpoint served by a function, a tool of the assistant, the steps run after a change package:

<svg viewBox="0 0 1200 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfcp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfcp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfcp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="358" rx="14" fill="url(#nfcp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#c084fc" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">python</text>
  <text x="292" y="46" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">refresh-totals</text>
  <text x="240" y="74" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FUNCTION</text>
  <rect x="240" y="80" width="720" height="24" rx="5" fill="#0a0e1a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="250" y="96" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_refresh_totals</text>
  <text x="352.24" y="96" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Rebuild the monthly totals from the loaded sales</text>
  <text x="946" y="96" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="240" y="110" width="720" height="216" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="248" y="118" width="704" height="22" rx="5" fill="#0a0e1a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="258" y="133" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Search or type a value…</text>
  <line x1="258" y1="123" x2="258" y2="136" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="164" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SALES · LOADS</text>
  <text x="254" y="187" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_load_items</text>
  <text x="334.68" y="187" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Load the item file into the items table</text>
  <text x="254" y="209" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_refresh_periods</text>
  <text x="364.13" y="209" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rebuild the period rows from the loaded sales</text>
  <rect x="246" y="217" width="708" height="20" rx="4" fill="rgba(74,158,255,0.14)"/>
  <text x="254" y="231" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_refresh_totals</text>
  <text x="358.24" y="231" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rebuild the monthly totals from the loaded sales</text>
  <text x="254" y="252" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SALES · REPORTS</text>
  <text x="254" y="275" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_month_digest</text>
  <text x="346.46" y="275" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The monthly digest: revenue by business unit</text>
  <text x="254" y="296" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STOCK · CHECKS</text>
  <text x="254" y="319" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">j_negative_stock</text>
  <text x="358.24" y="319" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">List the items whose stock is below zero</text>
  <text x="240" y="348" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">sales.loads:j_refresh_totals</text>
  <text x="393.56" y="348" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">— Rebuild the monthly totals from the loaded sales</text>
  <text x="240" y="364" fill="#475569" fontSize="8" fontStyle="italic" fontFamily="system-ui, sans-serif">(under the field once the list is closed: what is stored, and the description in full)</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Typing filters at once</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the search box has the focus</text>
  <line x1="200" y1="87.0" x2="248" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application · module</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one group each, by name</text>
  <line x1="200" y1="187.0" x2="254" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is stored</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">module:function, full description</text>
  <line x1="200" y1="317.0" x2="240" y2="344" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The function picked</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its application comes first</text>
  <line x1="1000" y1="87.0" x2="930" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Name and what it does</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ordered by name</text>
  <line x1="1000" y1="217.0" x2="920" y2="227" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
</svg>

- the list is **grouped by application and module**, each line the function's name and what it does in plain words, ordered by name; the application of the function already picked comes first;
- the search box has the focus when the list opens: typing filters at once, on the name or the description;
- under the field, what is stored (`module:function`) and the description in full; a name the list does not hold can still be typed, and the line under it says *not among the functions the applications ship: check the name*.

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
| **Directory pool** (`pool`) | An [LDAP directory pool](../framework/connectors.md#pool-ldap), set up under Liberty Next → Administer → Pools: its server, its account and its base are used, and the three fields below are not needed — the form hides them. |
| **LDAP server** (`server`) | Without a pool: `ldaps://ad.example.com:636`. |
| **Bind DN**, **Bind password** (`bind_dn`, `bind_password`) | Without a pool: the account used to read; write the password as `${LDAP_PASSWORD}`. |
| **Search base**, **Search filter** (`search_base`, `search_filter`) | Where and what to search: `DC=example,DC=com`, `(objectClass=user)`. With a pool, a blank search base takes the pool's base DN; a pool without one makes the step fail and ask for the search base. |
| **Attributes** (`attributes`) | The attributes to read. |
| **Target connector**, **Target query** (`target_connector`, `target_query`) | The write query run for each entry. |
| **Attribute → column mapping** (`mapping`) | LDAP attribute → query parameter. A missing attribute gives `NULL`. |

Records the number of entries read and rows written.

---

## Call a job — `call_job` \{#call-job\}

`target_job_id` names another job. The step starts it, waits for it to end and takes its result: success, failure or cancellation. The called job has its own run in the history, and inherits the caller's log level and run parameters. A job that would end up calling itself is refused.

---

## Report — `report` \{#report\}

Renders a document into the run's work area: a [saved analysis or dashboard of the Data Explorer](../framework/explorer/saved-and-dashboards.md), or a report of a plugin. Followed by a `notify` step, it makes a **scheduled digest** a plain job.

<svg viewBox="0 0 1320 482" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfdg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfdg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfdg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfdg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="442" rx="14" fill="url(#nfdg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">sales-monthly-digest</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">A click on the report card, then on the message card: each opens its fields beside the flow.</text>
  <rect x="240" y="93" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="110" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="268" y="110" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start</text>
  <line x1="314" y1="106" x2="340" y2="106" stroke="#334155" strokeWidth="2"/>
  <path d="M338,102 L344,106 L338,110 Z" fill="#334155"/>
  <circle cx="327.0" cy="106" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="327.0" y="109.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="346" y="82" width="154" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="343" y="79" width="160" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="356" y="96" fill="#c084fc" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRODUCE A REPORT</text>
  <text x="356" y="110" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">revenue</text>
  <text x="356" y="123" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">analysis:revenue_by_bu…</text>
  </g>
  <line x1="502" y1="106" x2="528" y2="106" stroke="#334155" strokeWidth="2"/>
  <path d="M526,102 L532,106 L526,110 Z" fill="#334155"/>
  <circle cx="515.0" cy="106" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="515.0" y="109.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="534" y="82" width="154" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="531" y="79" width="160" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="544" y="96" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEND A MESSAGE</text>
  <text x="544" y="110" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="544" y="123" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="690" y1="106" x2="716" y2="106" stroke="#334155" strokeWidth="2"/>
  <path d="M714,102 L720,106 L714,110 Z" fill="#334155"/>
  <circle cx="703.0" cy="106" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="703.0" y="109.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="722" y="93" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="736" y="110" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="750" y="110" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">End</text>
  <rect x="240" y="150" width="410" height="296" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="670" y="150" width="410" height="296" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="254" y="162" width="90" height="16" rx="4" fill="#c084fc" fillOpacity="0.14" stroke="#c084fc" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="261" y="173.5" fill="#c084fc" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Produce a report</text>
  <text x="352" y="174" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">revenue</text>
  <text x="254" y="200" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WHAT TO RENDER</text>
  <text x="254" y="216" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <rect x="254" y="221" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="235.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">A saved analysis…</text>
  <text x="364" y="235.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="384" y="216" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EXPLORER MODEL</text>
  <rect x="384" y="221" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="394" y="235.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sales · sales</text>
  <text x="494" y="235.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="514" y="216" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ANALYSES</text>
  <rect x="514" y="221" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="524" y="235.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">revenue_by_bu…</text>
  <text x="624" y="235.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="254" y="262" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="254" y="267" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="281.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">PDF</text>
  <text x="364" y="281.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="384" y="262" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="384" y="267" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="394" y="281.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Last month</text>
  <text x="494" y="281.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="514" y="262" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FILE NAME</text>
  <rect x="514" y="267" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="524" y="281.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">monthly-sales</text>
  <text x="254" y="308" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FROM (FIXED DATE)</text>
  <rect x="254" y="313" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="327.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="384" y="308" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TO (FIXED DATE)</text>
  <rect x="384" y="313" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="394" y="327.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="514" y="320" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Fixed dates in place of the</text>
  <text x="514" y="330.5" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">period: give both, or</text>
  <text x="514" y="341.0" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">neither.</text>
  <text x="254" y="354" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RENDER AS USER</text>
  <rect x="254" y="359" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="373.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">cfo</text>
  <text x="514" y="354" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RENDER AS ROLE</text>
  <rect x="514" y="359" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="524" y="373.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Unrestricted</text>
  <text x="624" y="373.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="254" y="404" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Step name, the two checkboxes and More settings sit above, as for every step.</text>
  <rect x="684" y="162" width="80" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="691" y="173.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Send a message</text>
  <text x="772" y="174" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">send</text>
  <text x="684" y="200" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="684" y="216" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RECIPIENTS</text>
  <rect x="684" y="223" width="104" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="691" y="234.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Role · management ✕</text>
  <rect x="796" y="221" width="31" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="811.5" y="234.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Role</text>
  <rect x="827" y="221" width="31" height="20" rx="0" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="842.5" y="234.5" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">User</text>
  <rect x="858" y="221" width="45" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="880.5" y="234.5" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Address</text>
  <text x="684" y="246" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif"></text>
  <rect x="684" y="251" width="376" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="265.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pick or type…</text>
  <text x="1048" y="265.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="684" y="280" width="128" height="18" rx="5" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="692" y="292" fill="#94a3b8" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">+ whoever started the run</text>
  <text x="684" y="312" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SUBJECT</text>
  <rect x="684" y="317" width="352" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="331.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">Sales digest &#123;DATE&#125; — &#123;JOB&#125;</text>
  <rect x="1042" y="318" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="332" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="684" y="352" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BODY</text>
  <rect x="684" y="357" width="352" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="371.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">The monthly sales digest is attached: &#123;FILES&#125;.</text>
  <rect x="1042" y="358" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="372" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="684" y="392" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ATTACH (RUN FILES; ∗ = ALL)</text>
  <rect x="684" y="397" width="185" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="411.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">∗</text>
  <text x="881" y="392" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CHANNELS</text>
  <rect x="881" y="403" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M883.5,408.5 L885.8,410.8 L889.8,406" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="898" y="412" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="941" y="403" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M943.5,408.5 L945.8,410.8 L949.8,406" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="958" y="412" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">email</text>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Saved object</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shared analyses and dashboards</text>
  <line x1="200" y1="177.0" x2="254" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period, or fixed dates</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">both dates, or neither</text>
  <line x1="200" y1="257.0" x2="384" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Visibility</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a user's or a role's data scope</text>
  <line x1="200" y1="347.0" x2="254" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recipients picked</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">role, user or address</text>
  <line x1="1120" y1="177.0" x2="903" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Whoever started it</text>
  <text x="1130" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">user:&#123;USER&#125;, left out on a schedule</text>
  <line x1="1120" y1="253.0" x2="812" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="310" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Placeholders</text>
  <text x="1130" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;JOB&#125; &#123;RUN_ID&#125; &#123;FILES&#125; &#123;DATE&#125;…</text>
  <line x1="1120" y1="327.0" x2="1062" y2="328" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bell and e-mail only</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">an endpoint call is its own step</text>
  <line x1="1120" y1="397.0" x2="1026" y2="408" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfdg-arrow)"/>
</svg>

| Field (editor) | Notes |
|---|---|
| **Source** | *A saved analysis (Explorer)*, *A dashboard of analyses (Explorer)* — one section per tile — or *A report (plugin)*. |
| **Explorer model**, **Analyses** / **Dashboards** | The model, then one of its **shared** analyses or dashboards. A private one cannot be picked. |
| **Report** | For a plugin report: the report, from the reports of the installed applications. |
| **Format** | Excel or PDF — the same documents as the Explorer's export, the charts drawn in the PDF. |
| **Period** | A period by name — *Last month*, *This month*, *Last year*, *This year*, *This quarter*, *Last 30 days*, *Last 7 days*, *Yesterday*, *Today*, *All dates* — or *The analysis's own period*. |
| **From (fixed date)**, **To (fixed date)** | Fixed dates in place of the period: both, or neither — the job is not saved with one only. |
| **File name** | The file's name; by default, the analysis's title. |
| **Render as user** | The document holds what that user sees: the data scope of their roles, with their attributes. A digest rendered as the manager of one company holds that company only. |
| **Render as role** | The data scope of a role. A rule whose values come from a user attribute allows nothing here: prefer **Render as user** for such roles. |
| **What the report asks for** | For a plugin report: its own parameters, as **Parameter of the report** / **Value** lines (`YEAR` = `2026`); **Add a value** adds one. |

For a plugin report, the run's parameters — the job's, those chosen when running it, the user parameters — are passed to the report on top of the step's own, converted to the type the report declares (a number stays a number); a blank value leaves the report's default.

A coded column of a saved analysis is written as the analysis shows it — its label, its code or both, as set in the analysis; set the field to *Code* to keep the codes in the document.

With neither user nor role, the document is **unrestricted**. The run detail offers the file for download under the step; the log names it with its size.

---

## Notify — `notify` \{#notify\}

Sends a message through the [notification channels](./notifications.md), with the files this run produced attached.

| Field (editor) | Notes |
|---|---|
| **Recipients** | Picked like the [alert recipients](./jobs/create.md#alerts): **Role**, **User** or **Address**, then the name or the address. **+ whoever started the run** adds `user:{USER}` — "send me the export I asked for". In `jobs.toml`: `user:<login>`, `role:<role>` or `email:<address>`. |
| **Subject**, **Body** | Text with placeholders: `{JOB}`, `{RUN_ID}`, `{FILES}` (the names of the attached files), `{DATE}` (today), `{USER}` (who started the run). |
| **Attach (run files; `*` = all)** | `*` attaches every file the run produced — every `report`, and the rejected rows of a `file_load`; or name the files. A named file the run did not produce fails the step. |
| **Channels** | **portal** (the bell) and **email** — the only two. The e-mail account is the one of [Notifications](./notifications.md#smtp). |

The *query or endpoint* channel belongs to [notification rules](./notifications.md#channels), not to this step: a job that must call an endpoint does it with a *Call an address* step ([`http`](#http)).

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
