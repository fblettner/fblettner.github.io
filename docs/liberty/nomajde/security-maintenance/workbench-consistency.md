---
title: Security Workbench consistency
description: "Security simulation → Consistency in Nomajde: twelve checks on the JD Edwards EnterpriseOne Security Workbench, roles and role assignments — security open by default, lines for nobody or on nothing, lines that say nothing new, row security that cannot work, roles with the same sequence, assignments not in effect — each finding with what to do. Nothing is changed."
keywords: [Nomajde, JD Edwards, JDE E1, Security Workbench, F00950, F0092, F00926, F95921, row security, security audit, consistency, "*PUBLIC", "*ALL", role sequence]
---

# Security Workbench consistency

The **Consistency** tab of [Security simulation](./security-simulation.md) reads the JD Edwards EnterpriseOne Security Workbench for what does not add up. A security that grew over years holds lines nobody would write again: lines for users who left, lines that repeat what another line says, row security that restricts nothing. Twelve checks read the workbench (`F00950`), the profiles (`F0092`), the roles and their sequence (`F00926`) and the role assignments (`F95921`), and list each line to review **with what to do**.

Nothing is changed: the corrections are made in the [Security Workbench](./security-workbench.md) and the Security Maintenance screens.

---

## At a glance

<svg viewBox="0 0 1200 392" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njwc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njwc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njwc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njwc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="356" rx="14" fill="url(#njwc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security simulation</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What a user would be allowed, before it is written — and the cases that check it stays so.</text>
  <rect x="240.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Simulate</text>
  <text x="250.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">A user, a module, a what-if</text>
  <rect x="421.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="431.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Secure a module</text>
  <text x="431.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">A whole module for a role</text>
  <rect x="603.0" y="78" width="175.5" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="613.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Consistency</text>
  <text x="613.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Lines that serve nothing or contradict</text>
  <rect x="784.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="794.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Test cases</text>
  <text x="794.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Expectations replayed against the security · 7</text>
  <rect x="240" y="126" width="122" height="22" rx="5" fill="url(#njwc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="301.0" y="140.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Read the workbench</text>
  <rect x="240.0" y="156" width="139.2" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="174" fill="#fb923c" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">42</text>
  <text x="250.0" y="186" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TO REVIEW</text>
  <text x="250.0" y="195" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif">2 high · 6 medium · 34 low</text>
  <rect x="385.2" y="156" width="139.2" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="395.2" y="174" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">18 450</text>
  <text x="395.2" y="186" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINES READ</text>
  <rect x="530.4" y="156" width="139.2" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="540.4" y="174" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">31</text>
  <text x="540.4" y="186" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IN THE WORKBENCH</text>
  <rect x="675.5999999999999" y="156" width="139.2" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="685.5999999999999" y="174" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="685.5999999999999" y="186" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IN ROW SECURITY</text>
  <rect x="820.8" y="156" width="139.2" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="830.8" y="174" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="830.8" y="186" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLES AND ASSIGNMENTS</text>
  <rect x="240" y="204" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FINDING</text>
  <text x="486" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY</text>
  <text x="544" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <text x="652" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="708" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO DO</text>
  <rect x="240" y="232" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="246.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">The security is open by default</text>
  <rect x="486" y="235.0" width="37" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="504.5" y="246.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">high</text>
  <text x="544" y="246.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="652" y="246.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">&#42;ALL</text>
  <text x="708" y="246.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Close &#42;ALL for &#42;PUBLIC (type 3, run N)…</text>
  <rect x="240" y="258" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="272.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">A line on an object that does not exist</text>
  <rect x="486" y="261.0" width="46" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="509.0" y="272.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">medium</text>
  <text x="544" y="272.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="652" y="272.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">P99ZZZ</text>
  <text x="708" y="272.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Delete it, or correct the object name…</text>
  <rect x="240" y="284" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="298.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Security written on a user</text>
  <rect x="486" y="287.0" width="46" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="509.0" y="298.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">medium</text>
  <text x="544" y="298.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="652" y="298.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="708" y="298.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Move these lines to a role…</text>
  <rect x="240" y="310" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="324.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">A line that says nothing new</text>
  <rect x="486" y="313.0" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="502.0" y="324.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">low</text>
  <text x="544" y="324.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="652" y="324.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="708" y="324.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Delete it: already said on &#42;ALL…</text>
  <rect x="240" y="336" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="350.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">A role with no line</text>
  <rect x="486" y="339.0" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="502.0" y="350.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">low</text>
  <text x="544" y="350.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">TEMPROLE</text>
  <text x="652" y="350.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">—</text>
  <text x="708" y="350.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Give it its security or delete it…</text>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read the workbench</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nothing is changed</text>
  <line x1="200" y1="145.0" x2="250" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njwc-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">To review</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by severity</text>
  <line x1="200" y1="217.0" x2="250" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njwc-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Twelve checks</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one row per line to review</text>
  <line x1="200" y1="337.0" x2="250" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njwc-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">By family</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">workbench · row security · roles</text>
  <line x1="1000" y1="217.0" x2="820" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njwc-arrow)"/>
  <rect x="1000" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What to do</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">for each finding</text>
  <line x1="1000" y1="337.0" x2="820" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njwc-arrow)"/>
</svg>

---

## Reading the workbench \{#read\}

**Read the workbench** runs the twelve checks. The figures:

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

The tab is part of the Security simulation page, in the **Security Maintenance** folder; the predefined roles **Security administrator** and **Administrator** hold it (see [Predefined roles](../overview.md#roles)). The connection used to read JD Edwards needs read access to `F00950`, `F0092`, `F00926`, `F95921` and the Object Librarian (`F9860`).

---

## Tips & best practices \{#tips\}

- **Start with the high findings**: a security open by default changes the meaning of every other line.
- **Clean before simulating**: lines that say nothing new or apply to nobody make a [simulation](./security-simulation.md) longer to read without changing its answer.
- **Export the list** (**Export**, above the list) to share the review with the people who own the roles.
- **Replay the [test cases](./security-test-cases.md)** after a clean-up: deleting a line that looked useless must not change what any role is allowed.
