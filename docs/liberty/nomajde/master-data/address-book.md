---
title: Address Book
description: "The Nomajde Address Book folder: the JD Edwards EnterpriseOne Address Book (F0101) with its contacts, dated addresses, customer and supplier, the Customer Master (F03012) and the Supplier Master (F0401) — read-only grids with filters and detail tabs, and Open in JDE on a row."
keywords: [Nomajde, Address Book, F0101, Who's Who, F0111, F0116, Customer Master, F03012, Supplier Master, F0401, JD Edwards, Open in JDE, P01012]
---

# Address Book

The **Address Book** folder, under **Master Data**, shows the JD Edwards EnterpriseOne Address Book in three read-only screens: the address book itself, the customers and the suppliers. The data is read live in JD Edwards; changes are made in JD Edwards, which **Open in JDE** opens on the right record.

---

## At a glance

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="adb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="adb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="adb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="adb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="446" rx="14" fill="url(#adb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Address Book</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Address Number</text>
  <rect x="240" y="70" width="102" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="350" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Alpha Name</text>
  <rect x="350" y="70" width="142" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="500" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Search Type</text>
  <rect x="500" y="70" width="112" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="620" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Business Unit</text>
  <rect x="620" y="70" width="112" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="630" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="104" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADDRESS</text>
  <text x="330" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ALPHA NAME</text>
  <text x="550" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEARCH TYPE</text>
  <text x="660" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LONG ADDRESS</text>
  <text x="790" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUSINESS UNIT</text>
  <rect x="240" y="132" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">›  4242</text>
  <text x="330" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME Industries</text>
  <text x="550" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">C — Customer</text>
  <text x="660" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME01</text>
  <text x="790" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">M30</text>
  <rect x="240" y="160" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">›  4243</text>
  <text x="330" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="550" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">V — Supplier</text>
  <text x="660" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">BETA01</text>
  <text x="790" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">M30</text>
  <rect x="240" y="188" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">›  4244</text>
  <text x="330" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="550" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">C — Customer</text>
  <text x="660" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">GAMMA01</text>
  <text x="790" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">M40</text>
  <rect x="340" y="152" width="140" height="30" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="171" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Open in JDE ↗</text>
  <rect x="240" y="236" width="720" height="210" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="256" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">ACME Industries · 4242</text>
  <rect x="870" y="245" width="58" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="899.0" y="256.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">view only</text>
  <rect x="254" y="266" width="554" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="282.5" y="281.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <line x1="311" y1="271" x2="311" y2="285" stroke="#334155" strokeWidth="1"/>
  <text x="334.5" y="281.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Flags</text>
  <line x1="358" y1="271" x2="358" y2="285" stroke="#334155" strokeWidth="1"/>
  <text x="403.0" y="281.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Category codes</text>
  <line x1="448" y1="271" x2="448" y2="285" stroke="#334155" strokeWidth="1"/>
  <text x="500.0" y="281.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Related addresses</text>
  <rect x="553" y="267" width="64" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="585.0" y="281.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Who's Who</text>
  <line x1="618" y1="271" x2="618" y2="285" stroke="#334155" strokeWidth="1"/>
  <text x="651.0" y="281.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Addresses</text>
  <line x1="684" y1="271" x2="684" y2="285" stroke="#334155" strokeWidth="1"/>
  <text x="715.0" y="281.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Customer</text>
  <line x1="746" y1="271" x2="746" y2="285" stroke="#334155" strokeWidth="1"/>
  <text x="777.0" y="281.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supplier</text>
  <rect x="254" y="300" width="692" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="314.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINE</text>
  <text x="324" y="314.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHO'S WHO</text>
  <text x="554" y="314.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PHONE</text>
  <text x="714" y="314.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EMAIL</text>
  <rect x="254" y="326" width="692" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">0</text>
  <text x="324" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME Industries</text>
  <text x="554" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">+33 1 23 45 67 89</text>
  <text x="714" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">contact@acme.example</text>
  <rect x="254" y="354" width="692" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="324" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Jane Doe</text>
  <text x="554" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">+33 1 23 45 67 90</text>
  <text x="714" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jane.doe@acme.example</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">number, name, type, unit</text>
  <line x1="210" y1="77.0" x2="240" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#adb-arrow)"/>
  <rect x="10" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row menu</text>
  <text x="20" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Open in JDE: P01012</text>
  <line x1="210" y1="187.0" x2="340" y2="172" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#adb-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Detail tabs</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">contacts, addresses, customer, supplier</text>
  <line x1="210" y1="317.0" x2="254" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#adb-arrow)"/>
  <rect x="1000" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read-only</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">changes are made in JDE</text>
  <line x1="1000" y1="247.0" x2="920" y2="253" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#adb-arrow)"/>
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
