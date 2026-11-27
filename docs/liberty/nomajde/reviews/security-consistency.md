---
title: Security consistency
description: "Reviews → Security consistency in Nomajde: twelve checks on the JD Edwards EnterpriseOne Security Workbench, roles and role assignments — security open by default, lines for nobody or on nothing, lines that say nothing new, row security that cannot work, roles with the same sequence, assignments not in effect — read as the page opens, each finding with what to do. Nothing is changed."
keywords: [Nomajde, JD Edwards, JDE E1, security consistency, Security Workbench, F00950, F0092, F00926, F95921, row security, security audit, "*PUBLIC", "*ALL", role sequence]
---

# Security consistency

**Reviews → Security consistency** reads the JD Edwards EnterpriseOne security for what does not add up. A security that grew over years holds lines nobody would write again: lines for users who left, lines that repeat what another line says, row security that restricts nothing. Twelve checks read the Security Workbench (`F00950`), the profiles (`F0092`), the roles and their sequence (`F00926`) and the role assignments (`F95921`), and list each line to review **with what to do**.

The page reads as it opens: there is nothing to choose. Nothing is changed: the corrections are made in the [Security Workbench](../security-maintenance/security-workbench.md), the Security Maintenance screens or [Security Management](../security-management/overview.md).

---

## At a glance

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njcons-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njcons-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njcons-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njcons-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="322" rx="14" fill="url(#njcons-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security consistency</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Security lines that serve nothing or contradict each other.</text>
  <rect x="240.0" y="76" width="137.6" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="100" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">57</text>
  <text x="250.0" y="114" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TO REVIEW</text>
  <text x="250.0" y="126" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">2 high · 9 medium · 46 low</text>
  <rect x="385.6" y="76" width="137.6" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="395.6" y="100" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4 812</text>
  <text x="395.6" y="114" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINES READ</text>
  <rect x="531.2" y="76" width="137.6" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="541.2" y="100" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">38</text>
  <text x="541.2" y="114" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IN THE WORKBENCH</text>
  <rect x="676.8" y="76" width="137.6" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="686.8" y="100" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="686.8" y="114" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IN ROW SECURITY</text>
  <rect x="822.4" y="76" width="137.6" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="832.4" y="100" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">15</text>
  <text x="832.4" y="114" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLES AND ASSIGNMENTS</text>
  <rect x="914" y="144" width="46" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="937.0" y="157.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>
  <rect x="857" y="144" width="51" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="882.5" y="157.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="810" y="144" width="41" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="830.5" y="157.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="753" y="144" width="51" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="778.5" y="157.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="706" y="144" width="41" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="726.5" y="157.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="172" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FINDING</text>
  <text x="406" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY</text>
  <text x="460" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <text x="570" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="644" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DETAIL</text>
  <text x="804" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO DO</text>
  <rect x="240" y="200" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="214.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">The security is open by default</text>
  <text x="406" y="214.5" fill="#f87171" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">high</text>
  <text x="460" y="214.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="570" y="214.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;ALL</text>
  <text x="644" y="214.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">no line closes &#42;ALL for…</text>
  <text x="804" y="214.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Close &#42;ALL for &#42;PUBLIC…</text>
  <rect x="240" y="226" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">A line for a user or role that…</text>
  <text x="406" y="240.5" fill="#f87171" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">high</text>
  <text x="460" y="240.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="570" y="240.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="644" y="240.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JSMITH is not in F0092</text>
  <text x="804" y="240.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Delete it: it applies to nobody.</text>
  <rect x="240" y="252" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="266.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Row security that restricts nothing</text>
  <text x="406" y="266.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">medium</text>
  <text x="460" y="266.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="570" y="266.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F0101 / AC01</text>
  <text x="644" y="266.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1 range(s) allowed, and…</text>
  <text x="804" y="266.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Add the line that forbids…</text>
  <rect x="240" y="278" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="292.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Roles with the same sequence</text>
  <text x="406" y="292.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">medium</text>
  <text x="460" y="292.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="570" y="292.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">—</text>
  <text x="644" y="292.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">sequence 20, as AR_CLERK</text>
  <text x="804" y="292.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Give each role its own…</text>
  <rect x="240" y="304" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="318.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">A role with no line</text>
  <text x="406" y="318.5" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">low</text>
  <text x="460" y="318.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">FIN_CLOSE</text>
  <text x="570" y="318.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">—</text>
  <text x="644" y="318.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">no line in the workbench…</text>
  <text x="804" y="318.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Give it its security or…</text>
  <rect x="20" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read as it opens</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nothing to choose, no button</text>
  <line x1="200" y1="99.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
  <rect x="20" y="206" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One row per finding</text>
  <text x="30" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">twelve checks</text>
  <line x1="200" y1="223.0" x2="250" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
  <rect x="20" y="296" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="311" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Severity</text>
  <text x="30" y="324" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">high · medium · low</text>
  <line x1="200" y1="313.0" x2="420" y2="291" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
  <rect x="1000" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where the findings are</text>
  <text x="1010" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">workbench, row security, roles</text>
  <line x1="1000" y1="99.0" x2="700" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to share the review</text>
  <line x1="1000" y1="157.0" x2="940" y2="166" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What to do</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">for each finding</text>
  <line x1="1000" y1="257.0" x2="840" y2="239" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
</svg>

---

## Reading the page \{#read\}

The twelve checks run as the page opens; *reading…* shows until they are done. The figures:

| Figure | Content |
|---|---|
| **to review** | How many findings, with how many of high, medium and low severity. |
| **lines read** | How many Security Workbench lines were read. |
| **in the workbench** | Findings on the lines of the workbench (the first six checks). |
| **in row security** | Findings on row security. |
| **roles and assignments** | Findings on the roles and their assignments. |

The list gives one row per finding: **Finding**, **Severity**, **User / role**, **Object**, **Detail** (the line in words) and **What to do**. It is sorted by severity; each check lists 2,000 findings at most, while the figures count them all. When every check comes back empty, a banner says *Nothing to review*. When the Object Librarian cannot be read, a banner says that objects that do not exist were not checked; the other checks still run.

---

## The twelve checks \{#checks\}

### Security Workbench lines \{#checks-workbench\}

| Finding | Severity | What to do |
|---|---|---|
| **The security is open by default** — no `*PUBLIC` line closes `*ALL` | high | Close `*ALL` for `*PUBLIC` (type 3, run `N`), then open what each role needs: until then every application nobody named is allowed. |
| **A line for a user or role that no longer exists** | high | Delete it: it applies to nobody. |
| **A line on an object that does not exist** | medium | Delete it, or correct the object name: it secures nothing. |
| **A line that says nothing new** — the same role already says so on `*ALL`, or `*PUBLIC` does | low | Delete it: fewer lines, same security. |
| **Actions given on what cannot be run** — add, change or delete on an application the same user or role may not run | low | Delete the action line, or open the application. |
| **Security written on a user** — application, action or row security on a user rather than a role | medium | Move these lines to a role and give the role: lines on a user are forgotten when the person changes job. |

### Row security \{#checks-rows\}

| Finding | Severity | What to do |
|---|---|---|
| **Row security: from is after thru** | high | Correct the range: as written it holds no value. |
| **Row security: ranges that overlap and disagree** — two ranges of one table and data item, for the same user or role, that overlap and say different things | medium | Make the ranges distinct. |
| **Row security that restricts nothing** — ranges that allow, while nothing is forbidden on that item for anybody | medium | Add the line that forbids (usually `*PUBLIC` on the whole range), or delete these: JD Edwards allows what no rule forbids. |

### Roles and assignments \{#checks-roles\}

| Finding | Severity | What to do |
|---|---|---|
| **Roles with the same sequence** | medium | Give each role its own sequence number: between two equal ones, which is read first is not defined. |
| **A role with no line** | low | Give it its security or delete it: it adds nothing to whoever holds it. |
| **An assignment not in effect** — expired, or not yet effective | low | Delete the expired ones; check the dates of those not yet effective. |

---

## Access \{#access\}

The page is in the **Reviews** folder of the Nomajde menu. The predefined roles **Security administrator**, **Platform operator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). The connection used to read JD Edwards needs read access to `F00950`, `F0092`, `F00926`, `F95921` and the Object Librarian (`F9860`).

---

## Tips & best practices \{#tips\}

- **Start with the high findings**: a security open by default changes the meaning of every other line.
- **Clean before simulating**: lines that say nothing new or apply to nobody make a [simulation](./simulate-security.md) longer to read without changing its answer.
- **Export the list** (**Export**, above the list) to share the review with the people who own the roles.
- **Play the [security test cases](../security-maintenance/security-test-cases.md)** after a clean-up: deleting a line that looked useless must not change what any role is allowed.
- **Try a correction first** in [Simulate Security](./simulate-security.md) when its effect is not obvious: closing `*ALL` for `*PUBLIC` changes what every role gets.
