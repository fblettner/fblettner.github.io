---
title: Security review
description: "The Nomasx-1 Security review dashboard: the holes in the access of a connected application — enabled, privileged and dormant accounts, accounts missing from the directory or whose directory account expired, generic accounts, objects open to *PUBLIC — twelve checks with their severity, the accounts to review first, logins by age, and the screens to act on."
keywords: [Nomasx-1, security review, access review, dormant accounts, privileged accounts, directory, LDAP, leavers, generic accounts, PUBLIC, orphan roles, dashboard]
---

# Security review

**Security**, in the **Reviews** folder of the Nomasx-1 menu, is the page for an access review: it lists what is wrong in the access of each connected application, the accounts to look at first, and the screens where to act.

---

## At a glance

<svg viewBox="0 0 1320 868" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxsrv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxsrv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxsrv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxsrv-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="828" rx="14" fill="url(#nxsrv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security review</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The holes in the access: dormant and privileged accounts, leavers missing from the directory, generic accounts, objects open to everyone.</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="107" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="254" y="113" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="128.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">All</text>
  <text x="444" y="128.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="1066" y="129" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Updated at 09:15</text>
  <rect x="953.84" y="115" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="966.84" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="901.84" y="115" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="924.84" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⎙ PDF</text>
  <rect x="843.84" y="115" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.84" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⎙ Excel</text>
  <rect x="240.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Enabled accounts</text>
  <text x="252.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Accounts that can sign in</text>
  <text x="252.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">380</text>
  <text x="252.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">41 dormant · 12 never logged in</text>
  <rect x="452.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="464.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Privileged accounts</text>
  <text x="464.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Enabled, with super-user access</text>
  <text x="464.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="464.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">2 unused for 90 days</text>
  <rect x="665.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="677.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Missing from the directory</text>
  <text x="677.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Enabled named accounts, no directory account</text>
  <text x="677.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">7</text>
  <text x="677.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Directory collected</text>
  <rect x="877.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="889.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Open to &#42;PUBLIC</text>
  <text x="889.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Objects every user can run</text>
  <text x="889.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">54 objects</text>
  <text x="889.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">11 users with rights of their own</text>
  <rect x="240" y="260" width="520" height="290" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">The checks</text>
  <text x="254" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Each control with its count; red first, green when clean</text>
  <circle cx="258" cy="314.0" r="3.2" fill="#f87171"/>
  <text x="270" y="317.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Privileged accounts left dormant</text>
  <text x="746" y="317.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <line x1="254" y1="322.5" x2="746" y2="322.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="333.5" r="3.2" fill="#f87171"/>
  <text x="270" y="336.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Enabled accounts missing from the directory</text>
  <text x="746" y="336.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">7</text>
  <line x1="254" y1="342.0" x2="746" y2="342.0" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="353.0" r="3.2" fill="#f87171"/>
  <text x="270" y="356.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Directory account expired, still enabled</text>
  <text x="746" y="356.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <line x1="254" y1="361.5" x2="746" y2="361.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="372.5" r="3.2" fill="#fb923c"/>
  <text x="270" y="375.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Dormant enabled accounts</text>
  <text x="746" y="375.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">41</text>
  <line x1="254" y1="381.0" x2="746" y2="381.0" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="392.0" r="3.2" fill="#fb923c"/>
  <text x="270" y="395.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Never used after a month</text>
  <text x="746" y="395.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <line x1="254" y1="400.5" x2="746" y2="400.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="411.5" r="3.2" fill="#fb923c"/>
  <text x="270" y="414.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Generic / shared accounts enabled</text>
  <text x="746" y="414.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <line x1="254" y1="420.0" x2="746" y2="420.0" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="431.0" r="3.2" fill="#4ade80"/>
  <text x="270" y="434.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Several accounts for one person</text>
  <text x="746" y="434.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="254" y1="439.5" x2="746" y2="439.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="450.5" r="3.2" fill="#fb923c"/>
  <text x="270" y="453.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Objects open to &#42;PUBLIC</text>
  <text x="746" y="453.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">54</text>
  <line x1="254" y1="459.0" x2="746" y2="459.0" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="470.0" r="3.2" fill="#4a9eff"/>
  <text x="270" y="473.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Rights given to users directly</text>
  <text x="746" y="473.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">11</text>
  <line x1="254" y1="478.5" x2="746" y2="478.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="489.5" r="3.2" fill="#4ade80"/>
  <text x="270" y="492.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Enabled accounts without roles</text>
  <text x="746" y="492.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="254" y1="498.0" x2="746" y2="498.0" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="509.0" r="3.2" fill="#4a9eff"/>
  <text x="270" y="512.0" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Expired role assignments on file</text>
  <text x="746" y="512.0" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <line x1="254" y1="517.5" x2="746" y2="517.5" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="528.5" r="3.2" fill="#4a9eff"/>
  <text x="270" y="531.5" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Orphan roles</text>
  <text x="746" y="531.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">15</text>
  <rect x="770" y="260" width="310" height="290" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="784" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts to review first</text>
  <text x="784" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">The figure is the days since the last login</text>
  <circle cx="788" cy="316" r="3.2" fill="#f87171"/>
  <text x="800" y="319" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">JDOE2</text>
  <text x="800" y="330" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">privileged · dormant</text>
  <text x="1066" y="319" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">212</text>
  <line x1="784" y1="337" x2="1066" y2="337" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="348" r="3.2" fill="#f87171"/>
  <text x="800" y="351" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">LEGACY01</text>
  <text x="800" y="362" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">missing from the directory</text>
  <text x="1066" y="351" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">18</text>
  <line x1="784" y1="369" x2="1066" y2="369" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="380" r="3.2" fill="#fb923c"/>
  <text x="800" y="383" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">BATCH02</text>
  <text x="800" y="394" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">generic account</text>
  <text x="1066" y="383" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <line x1="784" y1="401" x2="1066" y2="401" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="412" r="3.2" fill="#fb923c"/>
  <text x="800" y="415" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">TEMP07</text>
  <text x="800" y="426" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">never logged in</text>
  <text x="1066" y="415" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <rect x="240" y="562" width="400" height="130" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="582" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Last login</text>
  <text x="254" y="595" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Enabled accounts by time since their last login</text>
  <text x="254" y="617" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Within 30 days</text>
  <text x="626" y="617" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">296 accounts</text>
  <rect x="254" y="622" width="372" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="254" y="622" width="372" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="254" y="641" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">30 to 90 days</text>
  <text x="626" y="641" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">43 accounts</text>
  <rect x="254" y="646" width="372" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="254" y="646" width="56" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="254" y="665" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">3 to 12 months</text>
  <text x="626" y="665" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">23 accounts</text>
  <rect x="254" y="670" width="372" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="254" y="670" width="30" height="5" rx="2.5" fill="#2b8cff"/>
  <rect x="650" y="562" width="430" height="130" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="664" y="582" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Objects open to &#42;PUBLIC</text>
  <text x="664" y="595" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Those that also allow changes first</text>
  <circle cx="668" cy="618" r="3.2" fill="#f87171"/>
  <text x="680" y="621" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">P01012</text>
  <text x="680" y="632" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">run · change</text>
  <line x1="664" y1="633" x2="1066" y2="633" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="668" cy="644" r="3.2" fill="#fb923c"/>
  <text x="680" y="647" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">R42565</text>
  <text x="680" y="658" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">run</text>
  <line x1="664" y1="659" x2="1066" y2="659" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="668" cy="670" r="3.2" fill="#fb923c"/>
  <text x="680" y="673" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">P4210</text>
  <text x="680" y="684" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">run</text>
  <rect x="240" y="704" width="840" height="124" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="724" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Act on it</text>
  <text x="254" y="737" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">The screens behind each check</text>
  <rect x="254" y="746" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="266.0" y="763" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="282.0" y="763" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="282.0" y="776" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Every account, its status and last login</text>
  <text x="508.66666666666674" y="763" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="527" y="746" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="538.6666666666667" y="763" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="554.6666666666667" y="763" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Users without AD</text>
  <text x="554.6666666666667" y="776" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Accounts with no directory account</text>
  <text x="781.3333333333335" y="763" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="799" y="746" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="811.3333333333334" y="763" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="827.3333333333334" y="763" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Duplicate users</text>
  <text x="827.3333333333334" y="776" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Several accounts for one person</text>
  <text x="1054.0" y="763" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="254" y="786" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="266.0" y="803" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="282.0" y="803" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Users without roles</text>
  <text x="282.0" y="816" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Enabled accounts without roles</text>
  <text x="508.66666666666674" y="803" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="527" y="786" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="538.6666666666667" y="803" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="554.6666666666667" y="803" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Roles not used</text>
  <text x="554.6666666666667" y="816" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Roles assigned to nobody</text>
  <text x="781.3333333333335" y="803" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="799" y="786" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="811.3333333333334" y="803" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="827.3333333333334" y="803" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Users properties</text>
  <text x="827.3333333333334" y="816" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Flag privileged, technical, generic</text>
  <text x="1054.0" y="803" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">All = the totals</text>
  <line x1="200" y1="117.0" x2="294" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four figures</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">accounts, privileges, directory</text>
  <line x1="200" y1="207.0" x2="270" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Twelve checks</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">count and severity</text>
  <line x1="200" y1="347.0" x2="256" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="20" y="600" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="615" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Last login</text>
  <text x="30" y="628" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enabled accounts by age</text>
  <line x1="200" y1="617.0" x2="270" y2="637" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="20" y="720" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="735" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Act on it</text>
  <text x="30" y="748" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">links to the screens</text>
  <line x1="200" y1="737.0" x2="254" y2="760" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel · PDF · ↻</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">export the page as it stands</text>
  <line x1="1120" y1="117.0" x2="893.84" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts first</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the ones to act on</text>
  <line x1="1120" y1="347.0" x2="1060" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
  <rect x="1120" y="600" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="615" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">&#42;PUBLIC objects</text>
  <text x="1130" y="628" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">changes allowed first</text>
  <line x1="1120" y1="617.0" x2="1050" y2="622" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsrv-arrow)"/>
</svg>

---

## The four figures \{#figures\}

| Card | Figure | Detail line |
|---|---|---|
| **Enabled accounts** — accounts that can sign in | The enabled accounts. | Dormant — no login for 90 days — and never logged in. |
| **Privileged accounts** — enabled, with super-user access | The enabled privileged accounts. | Those unused for 90 days. |
| **Missing from the directory** — enabled named accounts with no directory account | The accounts no directory entry matches. | Whether the directory is collected. |
| **Open to \*PUBLIC** — objects every user can run | The objects granted to *PUBLIC. | The users holding rights of their own. |

The bar holds the **Application** filter only — no period: the checks read the current state. **All** gives the totals, picking one narrows every widget to it. **Excel** and **PDF** export the page as it stands, **↻** reloads it; *Updated at* gives the time of the data.

---

## The checks \{#checks\}

Each check with its count, red first, green when there is nothing to report.

| Check | Severity | What to do |
|---|---|---|
| **Privileged accounts left dormant** | Red | Super-user access unused for 90 days: disable it or re-certify its owner. |
| **Enabled accounts missing from the directory** | Red | No matching directory account: a leaver, or an account nobody owns. |
| **Directory account expired, still enabled** | Red | The person's directory account has expired: disable the account. |
| **Dormant enabled accounts** | Orange | No login within 90 days: disable or re-certify. |
| **Never used after a month** | Orange | Created over 30 days ago and never logged in: provisioned by mistake, or no longer needed. |
| **Generic / shared accounts enabled** | Orange | Actions cannot be traced to a person: replace them by named accounts. |
| **Several accounts for one person** | Orange | Enabled accounts sharing an address book number: keep one per person. |
| **Objects open to \*PUBLIC** | Orange | Every user can use these objects by default: confirm none is sensitive. |
| **Rights given to users directly** | Blue | Rights set on a user instead of a role, outside role-based control. |
| **Enabled accounts without roles** | Blue | Incomplete provisioning, or accounts to disable. |
| **Expired role assignments on file** | Blue | Assignments past their expiry date: clean them up. |
| **Orphan roles** | Blue | Roles assigned to nobody: remove or repurpose them. |

The two directory checks need the directory collected — the *Everything* collection, or the LDAP step switched on; until then they say *No directory collected*.

---

## The accounts and the objects \{#detail\}

| Widget | Shows |
|---|---|
| **Accounts to review first** | The privileged and dormant accounts, the leavers, the generic accounts; the figure is the days since the last login. |
| **Last login** | The enabled accounts by time since their last login: within 30 days, 30 to 90 days, 3 to 12 months, over a year, never. |
| **Objects open to \*PUBLIC** | The objects every user can run, those that also allow changes first. |
| **Act on it** | Links to the screens behind each check: Users, Users without AD, Duplicate users, Users without roles, Roles not used, Users properties. |

---

## Related

- [Users](./security/users.md), [Users without roles](./security/users-without-roles.md), [Roles not used](./security/roles-not-used.md) — the screens to act on.
- [LDAP users without AD](./security/ldap/users-without-ad.md) — the accounts missing from the directory.
- [Segregation of duties](./sod-dashboard.md) — the conflicts.
