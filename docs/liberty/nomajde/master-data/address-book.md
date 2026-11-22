---
title: Address Book
description: "The Nomajde Address Book folder: the JD Edwards EnterpriseOne Address Book (F0101) with its contacts, dated addresses, customer and supplier, the Customer Master (F03012) and the Supplier Master (F0401) — read-only grids with filters and detail tabs, and Open in JDE on a row."
keywords: [Nomajde, Address Book, F0101, Who's Who, F0111, F0116, Customer Master, F03012, Supplier Master, F0401, JD Edwards, Open in JDE, P01012]
---

# Address Book

The **Address Book** folder, under **JD Edwards data → Master Data**, shows the JD Edwards EnterpriseOne Address Book in three read-only screens: the address book itself, the customers and the suppliers. The data is read live in JD Edwards; changes are made in JD Edwards, which **Open in JDE** opens on the right record.

---

## At a glance

<svg viewBox="0 0 1200 434" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ab-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ab-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ab-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ab-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="394" rx="14" fill="url(#ab-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Address Book (F0101)</text>
  <rect x="240" y="60" width="720" height="20" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="74" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">› Advanced filters</text>
  <rect x="240" y="90" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="104.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="396" y="90" width="47" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="419.5" y="104.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="900" y="90" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="930.0" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="840" y="90" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="790" y="90" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="812.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="730" y="90" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="757.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="680" y="90" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="702.5" y="104.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="122" width="720" height="116" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="122" width="720" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="372" y="137.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">ADDRESS NUMBER</text>
  <text x="386" y="137.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">ALPHA NAME</text>
  <text x="576" y="137.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">SEARCH TYPE</text>
  <text x="696" y="137.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TAX ID</text>
  <text x="806" y="137.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">BUSINESS UNIT</text>
  <rect x="246" y="150" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="160" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="372" y="160.5" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4242</text>
  <text x="386" y="160.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME Industries</text>
  <text x="576" y="160.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">C — Customer</text>
  <text x="696" y="160.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FR001</text>
  <text x="806" y="160.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M30</text>
  <line x1="241" y1="168" x2="959" y2="168" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="172" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="182" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="372" y="182.5" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4243</text>
  <text x="386" y="182.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Beta SARL</text>
  <text x="576" y="182.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">V — Supplier</text>
  <text x="696" y="182.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FR002</text>
  <text x="806" y="182.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M30</text>
  <line x1="241" y1="190" x2="959" y2="190" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="194" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="204" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="372" y="204.5" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4244</text>
  <text x="386" y="204.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Gamma SA</text>
  <text x="576" y="204.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">C — Customer</text>
  <text x="696" y="204.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="806" y="204.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M40</text>
  <line x1="241" y1="212" x2="959" y2="212" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="216" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="226" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="372" y="226.5" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4245</text>
  <text x="386" y="226.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Delta Logistics</text>
  <text x="576" y="226.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">V — Supplier</text>
  <text x="696" y="226.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="806" y="226.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M40</text>
  <line x1="241" y1="234" x2="959" y2="234" stroke="#1f2937" strokeWidth="1"/>
  <rect x="222" y="158" width="756" height="250" fill="#020617" fillOpacity="0.55"/>
  <rect x="340" y="168" width="560" height="226" rx="10" fill="#111827" stroke="#334155" strokeWidth="1.2"/>
  <text x="356" y="190" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Address Book</text>
  <line x1="341" y1="202" x2="899" y2="202" stroke="#1f2937" strokeWidth="1"/>
  <text x="356" y="220" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">General</text>
  <rect x="354" y="225" width="36" height="2" fill="#4a9eff"/>
  <text x="404.144" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Flags</text>
  <text x="443.104" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Category codes</text>
  <text x="523.3919999999999" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Related addresses</text>
  <text x="617.4559999999999" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Who's Who</text>
  <text x="674.7839999999999" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Addresses</text>
  <text x="732.1119999999999" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="784.8479999999998" y="220" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Supplier</text>
  <text x="356.0" y="244" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADDRESS NUMBER</text>
  <rect x="356.0" y="249" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="366.0" y="262.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">4242</text>
  <text x="626.0" y="244" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LONG ADDRESS NUMBER</text>
  <rect x="626.0" y="249" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="636.0" y="262.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">ACME01</text>
  <text x="356.0" y="284" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ALPHA NAME</text>
  <rect x="356.0" y="289" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="366.0" y="302.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">ACME Industries</text>
  <text x="626.0" y="284" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEARCH TYPE</text>
  <rect x="626.0" y="289" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="636.0" y="302.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">C — Customer</text>
  <text x="356.0" y="324" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TAX ID</text>
  <rect x="356.0" y="329" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="366.0" y="342.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">FR001</text>
  <text x="626.0" y="324" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUSINESS UNIT</text>
  <rect x="626.0" y="329" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="636.0" y="342.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">M30</text>
  <line x1="341" y1="364" x2="899" y2="364" stroke="#1f2937" strokeWidth="1"/>
  <rect x="824" y="370" width="62" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="855.0" y="382.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">× Cancel</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">then Run</text>
  <line x1="200" y1="77.0" x2="250" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ab-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row menu</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Open in JDE</text>
  <line x1="200" y1="157.0" x2="253" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ab-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A row opens a dialog</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">eight tabs</text>
  <line x1="200" y1="277.0" x2="356" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ab-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read-only</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">changes are made in JDE</text>
  <line x1="1000" y1="137.0" x2="860" y2="378" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ab-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Related tabs</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Who's Who, addresses, customer…</text>
  <line x1="1000" y1="247.0" x2="810" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ab-arrow)"/>
</svg>

---

## Address Book \{#address-book\}

One line per address book entry (F0101).

| Filter | Finds |
|---|---|
| **Address Number**, **Alpha Name**, **Long Address** | One entry, by number, name or long address. |
| **Search Type** | The kind of entry — customer, supplier, employee… |
| **Tax ID**, **Business Unit**, **Industry Classification** | The entries of a tax id, a business unit, an industry. |

The grid opens on the main columns — number, name, search type, long address, tax id, business unit — and offers the rest of the record in its **Columns** menu: language, credit message, category codes 01 to 30, the related addresses.

A click on a row opens the record, view only:

| Tab | Content |
|---|---|
| **General**, **Flags**, **Category codes**, **Related addresses** | The fields of the address book record. |
| **Who's Who** | The contacts of the entry, with their phones and e-mail addresses. |
| **Addresses** | The dated postal addresses. |
| **Customer** | The customer record of the entry, per company. |
| **Supplier** | The supplier record of the entry. |

The descriptions of the coded fields — currency, payment terms, business unit, UDC values — show next to the codes.

---

## Customer Master \{#customer-master\}

One line per customer and company (F03012), with the customer's name and long address: credit limit, currency, payment terms, hold code, G/L offset, business unit, credit manager. Filters: **Address Number**, **Long Address**, **Alpha Name**, **Company**, **G/L Offset**.

---

## Supplier Master \{#supplier-master\}

One line per supplier (F0401), with the supplier's name and long address: currency, payment terms, hold code, payment instrument. Filters: **Address Number**, **Long Address**, **Alpha Name**.

---

## Open in JDE \{#open-in-jde\}

On an Address Book row, **Open in JDE** — in the row menu, or the arrow at the start of the row — opens the record in the JD Edwards web client, on the Address Book Revisions form (P01012), in a new browser tab. The JD Edwards web address is set once for the install, as the external address `JDE_WEB` — see [App settings → External addresses](../../framework/build/settings-app.md#external-urls). Without it, the action opens nothing.

:::info[JDE-specific]
The screens read the JD Edwards EnterpriseOne tables through the `jdedwards` connector, with the row-level scope of the user's roles.
:::
