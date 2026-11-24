---
title: Rights — UDO security
description: "The Nomasx-1 UDO security screen: the whole security of the user defined objects of a JD Edwards EnterpriseOne application as collected — every category (queries, watchlists, grid formats, CafeOne, personal forms, composite and E1 pages…) and every kind of line, with the UDO and its application named."
keywords: [Nomasx-1, applications, rights, UDO security, user defined objects, F00950W, composite pages, E1 pages, queries, watchlists, grid formats, CafeOne, JD Edwards]
---

# Rights — UDO security

The **UDO security** screen (**Applications → Rights → UDO security**) lists the security of the user defined objects (UDO) of an application as it was collected: every category — queries, watchlists, grid formats, CafeOne, personal forms, composite pages, E1 pages… — and every kind of line, with the flags JD Edwards stores. One line per user or role, category, kind of line, UDO, application, form and version.

The rights still take from it only the view lines of the composite pages and E1 pages — the access paths described in [Jobs](../../jobs.md). The rest is collected for the review of the security itself, and read by [What to fix](../../security-analysis.md).

:::info[JDE-specific]
The lines come from JD Edwards' UDO security table (F00950W), read from the library set as **JDE_UDO_SEC** in the [JD Edwards settings](../../settings/global/jd-edwards.md). With no library set, nothing is collected. The [UDO libraries](../../settings/global/udo-libraries.md) screen tells which library holds the table.
:::

---

## At a glance

<svg viewBox="0 0 1320 332" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="usec-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="usec-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usec-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="usec-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="296" rx="14" fill="url(#usec-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security - UDO security as collected</text>
  <line x1="220" y1="76" x2="1100" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="88" width="840" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="104" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Advanced filters</text>
  <text x="250.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="250.0" y="123" width="156.0" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="416.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <rect x="416.0" y="123" width="156.0" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="426.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="582.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDO CATEGORY</text>
  <rect x="582.0" y="123" width="156.0" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="748.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND OF LINE</text>
  <rect x="748.0" y="123" width="156.0" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="914.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDO</text>
  <rect x="914.0" y="123" width="156.0" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="240" y="154" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="168.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="418" y="154" width="47" height="22" rx="5" fill="url(#usec-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="441.5" y="168.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="1020" y="154" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1050.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="959" y="154" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="898" y="154" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="847" y="154" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="186" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <text x="340" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDO CATEGORY</text>
  <text x="430" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND OF LINE</text>
  <text x="510" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="680" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="790" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="835" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="885" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UPDATE</text>
  <text x="940" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DELETE</text>
  <text x="1000" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACCESS</text>
  <rect x="240" y="218" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">PUBLIC</text>
  <text x="340" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">COMPOSITE</text>
  <text x="430" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="510" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Order desk workspace</text>
  <text x="680" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="790" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="835" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="885" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="940" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="1000" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="246" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_FR</text>
  <text x="340" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">QUERY</text>
  <text x="430" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ACTION</text>
  <text x="510" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Open orders by customer</text>
  <text x="680" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">P4210</text>
  <text x="790" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="835" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="885" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="940" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="1000" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="274" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APCLERK</text>
  <text x="340" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">WATCHLIST</text>
  <text x="430" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="510" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Vouchers on hold</text>
  <text x="680" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">P0411</text>
  <text x="790" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="835" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="885" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="940" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="1000" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Category and kind</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">typed filters, ~ for contains</text>
  <line x1="200" y1="117.0" x2="600.0" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usec-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Every category</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pages, queries, watchlists…</text>
  <line x1="200" y1="267.0" x2="360" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usec-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">UDO and application</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shown with their name</text>
  <line x1="1120" y1="177.0" x2="580" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usec-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The flags</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as JD Edwards stores them</text>
  <line x1="1120" y1="267.0" x2="980" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usec-arrow)"/>
</svg>

---

## Filters \{#filters\}

The **Advanced filters** above the grid narrow it before **Run**: **Application ID**, **User / role**, **UDO category** and **Kind of line** (typed; `~` searches for a part of the value) and **UDO**.

---

## Columns

| Column | What it tells |
|---|---|
| **Application ID** | The application, with its name. |
| **User / role** | The user or the role the line applies to, with its name; `*PUBLIC` for everybody. |
| **UDO category** | The kind of user defined object, as JD Edwards codes it (`COMPOSITE`, `QUERY`, `WATCHLIST`, `CAFE1`…). |
| **Kind of line** | The kind of security line: `VIEW`, `ACTION`, `CONTENT`, `ACCESS`. |
| **UDO** | The user defined object, with its name; `*ALL` for every object of the category. |
| **Application** | The application the UDO belongs to, with its name; `*ALL` when the line is not tied to one. |
| **Form** · **Version** | The form and the version, or `*ALL`. |
| **View** · **Add** · **Update** · **Delete** · **Add personal** · **Access** · **Active** | The flags of the line, as JD Edwards stores them. |

---

## What the analysis checks \{#analysis\}

[What to fix](../../security-analysis.md) reads these lines:

- **Roles that give exactly the same thing** — two roles are the same only when their UDO security is too;
- **Security lines for a user or role that no longer exists** — UDO lines count with the workbench and row security lines.

---

## Tips & best practices

- **Filter on a category** — `COMPOSITE` or `QUERY` — to review who may see or publish which objects.
- **Look at the `*PUBLIC` lines first**: they open a category or an object to everybody.
- **Check JDE_UDO_SEC when the grid stays empty** after a collection: the [UDO libraries](../../settings/global/udo-libraries.md) screen gives the library to set.
