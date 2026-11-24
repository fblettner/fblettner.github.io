---
title: What to fix
description: "The Nomasx-1 security analysis (What to fix): nineteen checks on the security collected from a JD Edwards EnterpriseOne application, in three groups — segregation of duties, licences, consistency — each finding with its severity and what to do; a check that cannot run is said, and nothing is changed."
keywords: [Nomasx-1, security analysis, what to fix, remediation, segregation of duties, SoD, licences, dormant accounts, identical roles, row security, UDO security, consistency, JD Edwards]
---

# What to fix

**What to fix**, in the **Reviews** folder of the Nomasx-1 menu, is the security analysis of an application: nineteen checks run on what was collected, each finding with what to do about it. Where the [Security review](./security-review.md) lists the accounts to look at and the [Segregation of duties review](./sod-review.md) the conflicts, this page says **where a change removes the most** and **what does not add up** in the security itself.

The page reads one application at a time, picked at the top right; **Read again** runs the checks anew. **Nothing is changed by the page**: the security is fixed in JD Edwards — or with Nomajde's [Security Maintenance](../nomajde/security-maintenance/security-workbench.md) — then collected again.

:::info[JDE-specific]
The checks read the security collected from JD Edwards EnterpriseOne — the Security Workbench, the UDO security and the row security among them. The picker lists the JD Edwards applications only.
:::

---

## At a glance

<svg viewBox="0 0 1320 404" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sana-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sana-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sana-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sana-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="368" rx="14" fill="url(#sana-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security analysis</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">What to fix, and what does not add up — each finding with what to do.</text>
  <rect x="1005" y="38" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="52.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <rect x="847" y="38" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="857" y="52.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">1 · JDE-PROD ▾</text>
  <text x="839" y="53" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="92" width="161.6" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="114" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">202</text>
  <text x="250.0" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FINDINGS</text>
  <text x="250.0" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">19 checks run</text>
  <rect x="409.6" y="92" width="161.6" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="419.6" y="114" fill="#f87171" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="419.6" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEGREGATION OF DUTIES</text>
  <rect x="579.2" y="92" width="161.6" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="589.2" y="114" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">89</text>
  <text x="589.2" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LICENCES</text>
  <rect x="748.8" y="92" width="161.6" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="758.8" y="114" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">111</text>
  <text x="758.8" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONSISTENCY</text>
  <rect x="918.4" y="92" width="161.6" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="928.4" y="114" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">10</text>
  <text x="928.4" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHECKS WITH FINDINGS</text>
  <text x="928.4" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">3 high · 4 medium · 3 low</text>
  <text x="240" y="166" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Read from what was collected: collect again after a change. Nothing is changed here.</text>
  <rect x="240.0" y="176" width="274.6666666666667" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="185" width="22" height="22" rx="6" fill="none" stroke="#f87171" strokeWidth="1.2"/>
  <text x="278.0" y="194" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Segregation of duties</text>
  <text x="278.0" y="207" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Where a few changes remove the most · 2</text>
  <rect x="522.6666666666667" y="176" width="274.6666666666667" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="530.6666666666667" y="185" width="22" height="22" rx="6" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="560.6666666666667" y="194" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Licences</text>
  <text x="560.6666666666667" y="207" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Accounts and accesses that count for nothing · 89</text>
  <rect x="805.3333333333334" y="176" width="274.6666666666667" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="813.3333333333334" y="185" width="22" height="22" rx="6" fill="none" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="843.3333333333334" y="194" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Consistency</text>
  <text x="843.3333333333334" y="207" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">What does not add up · 111</text>
  <rect x="240" y="226" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="1020" y="226" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1050.0" y="240.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="959" y="226" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="240.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="908" y="226" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="930.5" y="240.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="847" y="226" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="874.5" y="240.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="796" y="226" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="818.5" y="240.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="258" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FINDING</text>
  <text x="440" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY</text>
  <text x="504" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONCERNS</text>
  <text x="614" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DETAIL</text>
  <text x="704" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">N</text>
  <text x="738" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO DO</text>
  <rect x="240" y="290" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="305.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">A user exercised a conflict</text>
  <rect x="440" y="294.0" width="37" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="458.5" y="305.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">high</text>
  <text x="504" y="305.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="614" y="305.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">tables, used</text>
  <text x="704" y="305.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="738" y="305.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Review what was done first; then remove one…</text>
  <rect x="240" y="318" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="333.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">A role in conflict by itself</text>
  <rect x="440" y="322.0" width="37" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="458.5" y="333.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">high</text>
  <text x="504" y="333.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">FINADMIN</text>
  <text x="614" y="333.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">39 rule(s)</text>
  <text x="704" y="333.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">22</text>
  <text x="738" y="333.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">The role gives both activities: split it in two…</text>
  <rect x="240" y="346" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="361.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Two roles that conflict together</text>
  <rect x="440" y="350.0" width="37" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="458.5" y="361.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">high</text>
  <text x="504" y="361.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APCLERK + PURCH</text>
  <text x="614" y="361.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 rule(s)</text>
  <text x="704" y="361.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="738" y="361.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Do not give both to one person, or move…</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Findings</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">and how many checks ran</text>
  <line x1="200" y1="113.0" x2="260.8" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="20" y="156" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="171" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nothing is changed</text>
  <text x="30" y="184" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fix it in JD Edwards, then collect</text>
  <line x1="200" y1="173.0" x2="240" y2="163" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three families</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one tab each</text>
  <line x1="200" y1="253.0" x2="297.33333333333337" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="20" y="316" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Severity</text>
  <text x="30" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">high · medium · low</text>
  <line x1="200" y1="333.0" x2="450" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="1120" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Checks with findings</text>
  <text x="1130" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by severity</text>
  <line x1="1120" y1="113.0" x2="1039.1999999999998" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="1120" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What to do</text>
  <text x="1130" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">written for each check</text>
  <line x1="1120" y1="253.0" x2="798" y2="274" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="1120" y="316" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">n</text>
  <text x="1130" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its meaning depends on the check</text>
  <line x1="1120" y1="333.0" x2="714" y2="322" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
</svg>

---

## The figures \{#figures\}

| Card | Figure |
|---|---|
| **Findings** | Every finding of every check, with the number of checks run. |
| **Segregation of duties** · **Licences** · **Consistency** | The findings of each group — one tab each. |
| **Checks with findings** | The checks that found something, split by severity: high · medium · low. |

The line under the cards recalls that the page reads what was collected — collect again after a change — and says how many checks **could not run**. Each check is independent: one that cannot run (a table not collected yet, for instance) is counted there, and the others still run.

---

## The tabs \{#tabs\}

The three tabs share the same columns, the most severe check first:

| Column | What it tells |
|---|---|
| **Finding** | The check, in a few words. |
| **Severity** | *high*, *medium* or *low* — set per check. |
| **Concerns** | The user, the role, the pair of roles, the module or the SoD setting concerned. |
| **Detail** | What the check found about it. |
| **n** | A count whose meaning depends on the check (see the tables below). |
| **What to do** | The remediation, written for each check. |

A check lists at most 2,000 findings; its count in the figures is the full one.

### Segregation of duties \{#sod\}

*Where a few changes remove the most.*

| Finding | Severity | n | What to do |
|---|---|---|---|
| **A role in conflict by itself** | high | Users who hold it | The role gives both activities: split it in two roles. |
| **Two roles that conflict together** | high | Users who hold both | Do not give both to one person, or move the activity out of one of them. |
| **A user exercised a conflict** | high | Conflicts exercised | Review what was done first, then remove one of the two activities. The evidence is that of the [Segregation of duties review](./sod-review.md#evidence). |
| **A privileged user in conflict** | medium | Rules | A privileged account should hold no business activity: review its roles. |

### Licences \{#licences\}

*Accounts and accesses that count for nothing.* The two sign-in checks leave out the accounts flagged technical or linked in [Users properties](./settings/security/users-properties.md).

| Finding | Severity | n | What to do |
|---|---|---|---|
| **Enabled, never signed in** | medium | Roles held | Disable the account if it is not expected: it is counted as a user. |
| **Enabled, not signed in for a long time** (180 days) | medium | Days since the last sign-in | Disable the account or confirm it is still needed. |
| **A module allowed to many, used by few** | low | Allowed and never used | Remove the access of those who do not use it: least privilege, and fewer users to count. Read only when Object Usage Tracking was collected. |
| **The same name on several accounts** | low | Accounts | One person with several accounts: link them, so the person is counted once, or disable the extra ones. |

A module is a licence component, with the system codes set for it under *Settings → Licenses → JD Edwards → System Code*.

### Consistency \{#consistency\}

*What does not add up.*

| Finding | Severity | n | What to do |
|---|---|---|---|
| **An enabled user with no role** | medium | — | Give the role that fits, or disable the account: it only has what `*PUBLIC` gives. |
| **A role nobody holds** | low | — | Remove it, or keep it knowingly: it is security to maintain for nobody. |
| **An assignment to something that does not exist** | high | — | Remove the assignment in JD Edwards: the role or the user is gone. |
| **An expired assignment** | low | Days since it expired | Remove it: it gives nothing any more and clutters the reading. |
| **A disabled user who still has roles** | medium | Roles | Take the roles away: re-enabling the account would give them back at once. |
| **Roles that give exactly the same thing** | medium | Roles | Keep one and move the users. See [below](#identical-roles). |
| **Security lines for a user or role that no longer exists** | medium | Lines (workbench, UDO security, row security) | Delete them in JD Edwards: they apply to nobody. |
| **Row security: from is after thru** | high | — | Correct the range: as written it holds no value. See [Row security](./applications/rights/row-security.md). |
| **An SoD object JD Edwards does not have** | medium | — | Correct the object of the activity in [Settings → Segregation of duties → Objects](./settings/sod/objects.md): it can never match. |
| **An SoD activity with no object** | medium | — | Give it its objects, or remove it: its rules never find a conflict. |
| **An SoD rule that cannot work** | high | — | Correct the rule in the [matrix](./settings/sod/matrix.md): its risk or one of its activities is missing. |

#### Identical roles \{#identical-roles\}

Two roles are *the same* only when they give the same objects with the same rights **and** carry the same lines of their own: the Security Workbench lines (pages, task views and application lines), the [UDO security](./applications/rights/udo-security.md) and the [row security](./applications/rights/row-security.md). Two roles that open the same applications but different pages, or see different rows, are not reported.

---

## Access \{#access\}

The page opens to the four [predefined roles](./overview.md#roles). The row-level scope of the user's roles applies. The page tells the [assistant](./ai-assistant.md) its figures for the application shown.

---

## Tips & best practices

- **Start with the high severities of Segregation of duties.** A role in conflict by itself is fixed once for every holder.
- **Read Consistency after each security change in JD Edwards** — expired assignments, roles for nobody and lines for users who left pile up silently.
- **Check the SoD settings findings first when the conflicts look too few**: an object JD Edwards does not have or an activity with no object makes rules that never fire.
- **Collect again before re-reading.** The page shows the security as last collected; *Last Refresh* gives the date.

---

## Related

- [Segregation of duties review](./sod-review.md) — the conflicts and their evidence.
- [Security review](./security-review.md) — the accounts to review first.
- [Jobs](./jobs.md#steps) — what the collections read.
