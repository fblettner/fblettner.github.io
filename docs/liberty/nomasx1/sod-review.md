---
title: Segregation of duties review
description: "The Nomasx-1 Segregation of duties review: for a JD Edwards EnterpriseOne application, the conflicts the security allows and those the users actually exercised — ran both programs, wrote through both programs or wrote the tables of both — with the evidence, each user, each rule, what was collected, and the conflicts reached only through a form or row exit."
keywords: [Nomasx-1, segregation of duties, SoD, SoD review, exercised conflicts, proven conflicts, evidence, Object Usage Tracking, activity log, cross reference, form exit, row exit, JD Edwards]
---

# Segregation of duties review

**Segregation of duties**, in the **Reviews** folder of the Nomasx-1 menu, answers the question an auditor asks after the list of conflicts: *which of them did the users actually do?* A conflict says that a user's security **allows** two activities that should not meet in one person. The review tells, for each user and each rule of the [matrix](./settings/sod/matrix.md), whether what was collected shows that the user **did both** — and with which evidence.

The page reads one application at a time, picked at the top right. The page opens at once on the answer kept by the server, with the moment it was computed next to **Read again** (*Computed on 24 Nov at 06:15*): the collection prepares it each time it runs, so the first person to open the page after the night's collection does not wait. **Read again** computes the answer now, however long it takes, and replaces the kept one for everybody. Nothing is changed: the page reads what the collections wrote.

:::info[JDE-specific]
The review reads the JD Edwards EnterpriseOne applications: its evidence comes from Object Usage Tracking, the activity log, the transactions, the audit trail and JD Edwards' cross reference. The picker lists the JD Edwards applications only.
:::

---

## At a glance

<svg viewBox="0 0 1320 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdrv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdrv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdrv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdrv-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="404" rx="14" fill="url(#sdrv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">◈</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Segregation of duties review</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The conflicts security allows, and those the users actually exercised.</text>
  <text x="997" y="52.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Computed on 24 Nov at 06:15</text>
  <rect x="1005" y="38" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="52.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <rect x="707" y="38" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="717" y="52.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">1 · JDE-PROD ▾</text>
  <text x="699" y="53" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="114" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">22</text>
  <text x="250.0" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERS IN CONFLICT</text>
  <text x="250.0" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">2 privileged</text>
  <rect x="381.33333333333337" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="391.33333333333337" y="114" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">858</text>
  <text x="391.33333333333337" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONFLICTS (USER × RULE)</text>
  <text x="391.33333333333337" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">39 rules</text>
  <rect x="522.6666666666667" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="532.6666666666667" y="114" fill="#f87171" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="532.6666666666667" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXERCISED</text>
  <text x="532.6666666666667" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">ran both 3 · wrote</text>
  <text x="532.6666666666667" y="147" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">through both 0 · tables 1</text>
  <rect x="664.0" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="114" fill="#f87171" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="674.0" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERS WHO EXERCISED ONE</text>
  <text x="674.0" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">of whom 1 ran both</text>
  <rect x="805.3333333333334" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="815.3333333333334" y="114" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">854</text>
  <text x="815.3333333333334" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ONLY POSSIBLE</text>
  <text x="815.3333333333334" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">no evidence collected</text>
  <rect x="946.6666666666667" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="956.6666666666667" y="114" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="956.6666666666667" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THROUGH EXITS</text>
  <text x="956.6666666666667" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">3 users · 10,397 links</text>
  <text x="240" y="174" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Collected: usage tracking 64 · activity log 9 · transactions 4,381 · audit trail 7 · cross reference (table writes) 41,864.</text>
  <rect x="240.0" y="184" width="161.6" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="193" width="22" height="22" rx="6" fill="none" stroke="#f87171" strokeWidth="1.2"/>
  <text x="278.0" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exercised</text>
  <text x="278.0" y="215" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Evidence on both · 4</text>
  <rect x="409.6" y="184" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="417.6" y="193" width="22" height="22" rx="6" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="447.6" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="447.6" y="215" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Each user · 22</text>
  <rect x="579.2" y="184" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="587.2" y="193" width="22" height="22" rx="6" fill="none" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="617.2" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="617.2" y="215" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Each pair · 39</text>
  <rect x="748.8" y="184" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="756.8" y="193" width="22" height="22" rx="6" fill="none" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="786.8" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Possible only</text>
  <text x="786.8" y="215" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">No evidence · 854</text>
  <rect x="918.4" y="184" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="926.4" y="193" width="22" height="22" rx="6" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="956.4" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Through exits</text>
  <text x="956.4" y="215" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">From an allowed app · 6</text>
  <rect x="240" y="234" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="248.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="1020" y="234" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1050.0" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="959" y="234" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="908" y="234" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="930.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="847" y="234" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="874.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="796" y="234" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="818.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="266" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="330" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="440" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY 1</text>
  <text x="590" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY 2</text>
  <text x="740" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EVIDENCE</text>
  <text x="890" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROGRAMS (1)</text>
  <text x="980" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST SEEN (1)</text>
  <rect x="240" y="298" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="330" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC001 · Order To Cash</text>
  <text x="440" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC02 · Process sales orders</text>
  <text x="590" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC05 · Credit / debit notes</text>
  <rect x="740" y="302.0" width="98" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="789.0" y="313.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ran both programs</text>
  <text x="890" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="980" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-18</text>
  <rect x="240" y="326" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="330" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC001 · Order To Cash</text>
  <text x="440" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC02 · Process sales orders</text>
  <text x="590" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC11 · Change master data</text>
  <rect x="740" y="330.0" width="98" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="789.0" y="341.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ran both programs</text>
  <text x="890" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="980" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-18</text>
  <rect x="240" y="354" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="330" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC001 · Order To Cash</text>
  <text x="440" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC05 · Credit / debit notes</text>
  <text x="590" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC11 · Change master data</text>
  <rect x="740" y="358.0" width="98" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="789.0" y="369.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ran both programs</text>
  <text x="890" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P42095</text>
  <text x="980" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-12</text>
  <rect x="240" y="382" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="330" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP001 · Procure To Pay</text>
  <text x="440" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP05 · Approve purchase order</text>
  <text x="590" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP16 · Change master data</text>
  <rect x="740" y="386.0" width="113" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="796.5" y="397.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">wrote tables of both</text>
  <text x="890" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="980" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-10-30</text>
  <rect x="20" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one JD Edwards at a time</text>
  <line x1="200" y1="47.0" x2="240" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Users in conflict</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">and how many are privileged</text>
  <line x1="200" y1="117.0" x2="266.6666666666667" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="20" y="164" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="179" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What was collected</text>
  <text x="30" y="192" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a source at 0 proves nothing</text>
  <line x1="200" y1="181.0" x2="240" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five tabs</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one grid each: search, export</text>
  <line x1="200" y1="267.0" x2="280.8" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Evidence</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">of the weaker side of the two</text>
  <line x1="200" y1="347.0" x2="760" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read again</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">computes now, for everybody</text>
  <line x1="1120" y1="47.0" x2="1060" y2="49" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exercised</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by kind of evidence</text>
  <line x1="1120" y1="117.0" x2="619.3333333333334" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Only possible</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">allowed, nothing shows them done</text>
  <line x1="1120" y1="177.0" x2="912.0" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Through exits</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reached from an allowed app</text>
  <line x1="1120" y1="267.0" x2="1039.1999999999998" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
</svg>

---

## Possible or exercised \{#evidence\}

A conflict is one **user** and one **rule** (a pair of activities of a process). It is **exercised** when what was collected shows the user did both activities; otherwise it is **only possible**. Three kinds of evidence exist, the strongest first:

| Evidence | Read from | What it shows |
|---|---|---|
| **Ran both programs** | [Object Usage Tracking](./applications/out/details.md) | The user ran a program of each activity. |
| **Wrote through both programs** | The [activity log](./applications/activity-log.md): the program that wrote each row | Rows were written under the user's name by a program of each activity. |
| **Wrote tables of both** | The tables each program writes (JD Edwards' cross reference), against the transactions, the [audit trail](./database/audit-trail.md) or the activity log | The user wrote a table that a program of each activity writes. Weaker: another program may write the same table. |

A conflict is exercised **at the strength of its weaker side**: a program run for one activity and nothing for the other leaves the conflict *only possible*. Each side keeps its programs with evidence and the date it was last seen.

The review has one row per user and rule. The detail by role and by object stays in [Conflicts → Details](./applications/conflicts/details.md).

### One reading for every screen \{#same-statement\}

The same statement feeds the screen [Conflicts → Proven](./applications/conflicts/proven.md), the **Exercised** figure of the [Segregation of duties: trend](./sod-dashboard.md) dashboard, the assistant's [conflict tool](./ai-assistant.md#user-conflicts) and the check *A user exercised a conflict* of [What to fix](./security-analysis.md): they all give the same answer.

---

## The figures \{#figures\}

| Card | Figure | Detail line |
|---|---|---|
| **Users in conflict** | The users with at least one conflict. | How many of them are privileged. |
| **Conflicts (user × rule)** | Every conflict. | The rules concerned. |
| **Exercised** | The conflicts with evidence on both sides. | How many per kind of evidence: ran both programs · wrote through both · wrote their tables. |
| **Users who exercised one** | The users with at least one exercised conflict. | Of whom how many ran both programs. |
| **Only possible** | The conflicts nothing collected shows exercised. | — |
| **Through exits** | The conflicts that exist only through an exit (see [below](#through-exits)). | The users concerned, the links of the cross reference read and the number of steps walked. |

Under the cards, a line says **what was collected** for the application: the rows of usage tracking, activity log, transactions, audit trail, and the table writes known from the cross reference. A source at 0 cannot prove anything: a conflict that stays *only possible* may only lack the collection that would show it.

---

## The tabs \{#tabs\}

Each tab is a grid with search, filters, grouping and export. The page remembers the tab and the application in the browser.

| Tab | Lists | Columns |
|---|---|---|
| **Exercised** | The conflicts with evidence on both sides, the strongest first. | User, Name, Process, Activity 1, Activity 2, Level, Evidence, Programs (activity 1), Last seen (1), Programs (activity 2), Last seen (2), Risk. |
| **Users** | Each user in conflict, the most exercised first. | User, Name, Conflicts, High risk, Exercised, Evidence (the strongest), Privileged, Detail. |
| **Rules** | Each pair of activities. | Process, Activity 1, Activity 2, Level, Users, Exercised, Evidence (the strongest), Risk. |
| **Possible only** | The conflicts allowed with no evidence (the first 5,000). | User, Name, Process, Activity 1, Activity 2, Level, Risk. |
| **Through exits** | The conflicts reached only from an allowed application. | See [below](#through-exits). |

**High risk** counts the conflicts whose risk level is high or critical. In **Users**, the **conflict lines** link of the **Detail** column opens [Conflicts → Details](./applications/conflicts/details.md) filtered on the application and the user.

---

## Through exits \{#through-exits\}

The rights collected hold the objects of the menus. A JD Edwards application also opens others — a form exit or a row exit, a report launched from a form — and those are on no menu: a user allowed on *Sales Order Entry* may reach the *Customer Master* from it. The conflicts computed from the rights do not see them.

The **Through exits** tab reads JD Edwards' cross reference — what the event rules of each application open — back from the objects of the SoD activities, up to **three steps**. A user who may run an application reaches what it opens, unless the application security collected forbids them to run the target: the user's own rule decides first, then their roles from the highest sequence, then `*PUBLIC`; at one level, the object's own rule comes before `*ALL`; no rule at all means allowed, as JD Edwards does.

<svg viewBox="0 0 1320 244" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdrx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdrx-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdrx-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdrx-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="204" rx="14" fill="url(#sdrx-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240.0" y="36" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248.0" y="45" width="22" height="22" rx="6" fill="none" stroke="#f87171" strokeWidth="1.2"/>
  <text x="278.0" y="54" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exercised</text>
  <text x="278.0" y="67" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Evidence on both · 4</text>
  <rect x="409.6" y="36" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="417.6" y="45" width="22" height="22" rx="6" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="447.6" y="54" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="447.6" y="67" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Each user · 22</text>
  <rect x="579.2" y="36" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="587.2" y="45" width="22" height="22" rx="6" fill="none" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="617.2" y="54" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="617.2" y="67" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Each pair · 39</text>
  <rect x="748.8" y="36" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="756.8" y="45" width="22" height="22" rx="6" fill="none" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="786.8" y="54" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Possible only</text>
  <text x="786.8" y="67" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">No evidence · 854</text>
  <rect x="918.4" y="36" width="161.6" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="926.4" y="45" width="22" height="22" rx="6" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="956.4" y="54" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Through exits</text>
  <text x="956.4" y="67" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">From an allowed app · 6</text>
  <rect x="240" y="92" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="322" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY 1</text>
  <text x="444" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HELD (1)</text>
  <text x="536" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PATH (1)</text>
  <text x="648" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY 2</text>
  <text x="776" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HELD (2)</text>
  <text x="868" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PATH (2)</text>
  <text x="1048" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STEPS</text>
  <rect x="240" y="124" width="840" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ADOE</text>
  <text x="322" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC02 · Sales orders</text>
  <rect x="444" y="129.0" width="51" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="469.5" y="140.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">allowed</text>
  <text x="536" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="648" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC11 · Master data</text>
  <rect x="776" y="129.0" width="89" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="820.5" y="140.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">through an exit</text>
  <text x="868" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210 → P03013 → P0030A</text>
  <text x="1048" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="154" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BLEE</text>
  <text x="322" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP05 · Approve PO</text>
  <rect x="444" y="159.0" width="51" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="469.5" y="170.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">allowed</text>
  <text x="536" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="648" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP16 · Master data</text>
  <rect x="776" y="159.0" width="89" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="820.5" y="170.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">through an exit</text>
  <text x="868" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4310 → P04012</text>
  <text x="1048" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="240" y="184" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">CKING</text>
  <text x="322" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">GL01 · Vendor ledger</text>
  <rect x="444" y="189.0" width="89" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="488.5" y="200.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">through an exit</text>
  <text x="536" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411 → P04012</text>
  <text x="648" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">GL04 · Journal entries</text>
  <rect x="776" y="189.0" width="51" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="801.5" y="200.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">allowed</text>
  <text x="868" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="1048" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1120" y="28" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="43" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Through exits</text>
  <text x="1130" y="56" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conflicts that need an exit</text>
  <line x1="1120" y1="45.0" x2="1078" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrx-arrow)"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">How each activity is held</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">allowed, or through an exit</text>
  <line x1="200" y1="147.0" x2="444" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrx-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Steps</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the longer of the two paths</text>
  <line x1="1120" y1="117.0" x2="1066" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrx-arrow)"/>
  <rect x="1120" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The path</text>
  <text x="1130" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the allowed app, 3 steps max</text>
  <line x1="1120" y1="187.0" x2="920" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrx-arrow)"/>
</svg>

A row is a conflict that exists **only** this way: both activities are held, at least one of them only through an exit.

| Column | What it tells |
|---|---|
| **User**, **Process**, **Activity 1**, **Activity 2**, **Risk** | The conflict. |
| **Activity 1 held** / **Activity 2 held** | *allowed* — the user may run and change one of the activity's objects — or *through an exit*. |
| **Path (1)** / **Path (2)** | For a side held through an exit, the shortest path from the allowed application to the activity's object, for example `P4210 → P03013 → P0030A`. |
| **Steps** | The longer of the two paths. |

These conflicts are shown apart and never mixed with the conflicts of the rights: the conflict screens, the dashboard and the licence counts do not include them. They are a reading to qualify — an exit may be hidden or disabled by hyper-exit or push-button security, which the collection does not read. The tab needs the cross reference to be collected, by the [`nomasx1-xref`](../nomaflow/bundled-jobs.md#nomasx1-xref) job; without it, the figure stays at 0.

---

## Access \{#access\}

The page opens to the four [predefined roles](./overview.md#roles) — Auditor, Security officer, Licence manager, Administrator. The row-level scope of the user's roles applies. The page tells the [assistant](./ai-assistant.md) its figures for the application shown, so a question such as *how many conflicts were exercised?* needs no explanation.

---

## Tips & best practices

- **Collect the evidence before the review.** Object Usage Tracking and the activity log give the strongest evidence; a source at 0 in the *Collected* line explains a review where everything is *only possible*.
- **Start with Exercised, then Users.** A user who *ran both programs* is the first case to document or remediate; a conflict seen only through *wrote tables of both* deserves a check of the programs before a conclusion.
- **Fix the role, not the user.** [What to fix](./security-analysis.md) tells a role in conflict by itself from two roles that conflict together.
- **Qualify Through exits with the JD Edwards administrator** — hyper-exit and push-button security may already close a path the cross reference shows.

---

## Related

- [Conflicts → Proven](./applications/conflicts/proven.md) — the same exercised conflicts as a screen.
- [Segregation of duties: trend](./sod-dashboard.md) — the conflicts refresh after refresh.
- [What to fix](./security-analysis.md) — the security analysis.
- [Jobs](./jobs.md#steps) — what the collections read.
