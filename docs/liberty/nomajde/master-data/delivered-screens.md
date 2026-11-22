---
title: Companies, items, setup and OMW
description: "The JD Edwards EnterpriseOne screens Nomajde delivers ready to use: Companies and accounts, Items, the Setup tables and the Object Management Workbench — 21 read-only grids on the JD Edwards tables, with their records, their tabs and the labels of the JD Edwards data dictionary."
keywords: [Nomajde, JD Edwards, JDE E1, master data, setup, F0010, F0006, F0901, F0909, F4101, F4102, F0014, F0013, F0015, F4008, F0012, F4095, F0002, F40203, F40205, F40039, F41001, OMW, F98220, F98222, F98210, companies, business units, chart of accounts, items, AAI, next numbers]
---

# Companies, items, setup and OMW

Beyond the UDC and the Address Book, Nomajde delivers **21 screens on the JD Edwards EnterpriseOne tables**, ready to use from the first sign-in: the companies and accounts, the items, the setup tables and the Object Management Workbench. They sit in the menu folders where a person looks for them — **JD Edwards data → Master Data** and **JD Edwards data → Setup**, **Development → Object Management Workbench** — with their columns titled from the JD Edwards data dictionary.

Every screen reads JD Edwards live and is **read-only**: changes are made in JD Edwards.

---

## At a glance

<svg viewBox="0 0 1200 336" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="306" rx="14" fill="url(#njds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Item Master (F4101)</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">jdedwards.f4101_get</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="720" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="600.0" y="100.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▸ Advanced filters</text>
  <rect x="240" y="116" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="130.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="396" y="116" width="47" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="419.5" y="130.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="900" y="116" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="930.0" y="130.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="840" y="116" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="130.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="790" y="116" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="812.5" y="130.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="730" y="116" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="757.5" y="130.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="670" y="116" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="697.5" y="130.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Default</text>
  <rect x="240" y="148" width="720" height="138" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="148" width="720" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="163.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">ITEM NUMBER (SHORT)</text>
  <text x="380" y="163.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">2ND ITEM NUMBER</text>
  <text x="490" y="163.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="690" y="163.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">SEARCH TEXT</text>
  <text x="840" y="163.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">STOCKING TYPE (ID)</text>
  <text x="250" y="186.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">60003</text>
  <text x="380" y="186.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1001</text>
  <text x="490" y="186.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike Rack - Trunk Mount</text>
  <text x="690" y="186.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike, Rack</text>
  <text x="840" y="186.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P</text>
  <line x1="241" y1="194" x2="959" y2="194" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="208.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">60011</text>
  <text x="380" y="208.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">210</text>
  <text x="490" y="208.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Mountain Bike, Red</text>
  <text x="690" y="208.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike, Mountain</text>
  <text x="840" y="208.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P</text>
  <line x1="241" y1="216" x2="959" y2="216" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="230.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">60020</text>
  <text x="380" y="230.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">230</text>
  <text x="490" y="230.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Youth Sport Bike</text>
  <text x="690" y="230.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike, Youth Sport</text>
  <text x="840" y="230.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P</text>
  <line x1="241" y1="238" x2="959" y2="238" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="252.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">60038</text>
  <text x="380" y="252.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">220</text>
  <text x="490" y="252.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Touring Bike, Red</text>
  <text x="690" y="252.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike, Tour</text>
  <text x="840" y="252.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M</text>
  <line x1="241" y1="260" x2="959" y2="260" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="274.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">60062</text>
  <text x="380" y="274.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2001</text>
  <text x="490" y="274.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Cro-Moly Frame, Red</text>
  <text x="690" y="274.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bike, Frame, Painted</text>
  <text x="840" y="274.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">M</text>
  <line x1="241" y1="282" x2="959" y2="282" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="302" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">2,378 rows · read-only · a row opens its record: General, Classification, Units of measure, Planning, Branch / plant</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Screen and its table</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read live from JD Edwards</text>
  <line x1="200" y1="57.0" x2="240" y2="46" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njds-arrow)"/>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every column, its operators</text>
  <line x1="200" y1="127.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njds-arrow)"/>
  <rect x="1000" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Views, filters, export</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the grid's own tools</text>
  <line x1="1000" y1="127.0" x2="940" y2="127" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njds-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Data dictionary labels</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JD Edwards' own column titles</text>
  <line x1="200" y1="237.0" x2="250" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njds-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A row → its record</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tabs, related grids</text>
  <line x1="1000" y1="247.0" x2="860" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njds-arrow)"/>
</svg>

---

## How the screens work \{#grids\}

Each screen is a grid on one JD Edwards table, loaded when it opens: search, **Advanced filters** on every column, **Group**, **Columns**, views, and export to Excel. A row opens its **record**, a dialog with tabs; where a table has details, a tab lists them — the accounts of a business unit, the branch / plant records of an item, the exchange rates of a currency, the objects, users and log of an OMW project.

The column titles and value lists come from the JD Edwards data dictionary, in the language of that dictionary (English).

---

## Master Data → Companies and accounts \{#organization\}

| Menu entry | Table | Record tabs |
|---|---|---|
| **Companies** | F0010 | General, Fiscal periods. |
| **Business Units** | F0006 | General, Category codes, Accounts (the business unit's accounts, F0901). |
| **Chart of Accounts** | F0901 | General, Category codes. |
| **Object Accounts** | F0909 | General. |

---

## Master Data → Items \{#items\}

| Menu entry | Table | Record tabs |
|---|---|---|
| **Item Master** | F4101 | General, Classification, Units of measure, Planning, Branch / plant (the item's F4102 records). |
| **Item Branch** | F4102 | General, Supply and planning, Classification. |

---

## Setup \{#setup\}

**JD Edwards data → Setup** gathers the tables the applications read their rules from.

| Menu entry | Table | Record tabs |
|---|---|---|
| **Payment Terms** | F0014 | General. |
| **Currency Codes** | F0013 | General, Exchange rates (F0015). |
| **Currency Exchange Rates** | F0015 | General. |
| **Tax Areas** | F4008 | General. |
| **Automatic Accounting Instructions** | F0012 | General. |
| **Distribution AAIs** | F4095 | General. |
| **Next Numbers** | F0002 | Numbers 1 to 5, Numbers 6 to 10. |
| **Order Activity Rules** | F40203 | General. |
| **Line Types** | F40205 | General. |
| **Document Types** | F40039 | General. |
| **Branch / Plant Constants** | F41001 | General. |

---

## Development → Object Management Workbench \{#omw\}

| Menu entry | Table | Record tabs |
|---|---|---|
| **OMW Projects** | F98220 | General, Objects (F98222), Users (F98221), Log (F98210). |
| **OMW Project Objects** | F98222 | General. |
| **OMW Log** | F98210 | General. |

Next to the workbench, **Development → Back to standard** compares the changed objects with Oracle's and names the OMW project that holds each one — see [Back to standard](../development/back-to-standard.md).

---

## What goes beyond the standard \{#apply\}

These screens are those of the standard JD Edwards tables. When an installation's JD Edwards holds more — a table of its own, columns added to a standard one —, a superuser runs **Apply module** from the [Screen Assistant](../../framework/build/screen-assistant.md#module) in Liberty Next: it reads the tables in service and **only adds what is missing**, without touching the screens delivered.

---

## Access \{#access\}

Each screen shows to the roles that hold its menu entry or its folder. The predefined role **Master data steward** holds the Master Data folder — UDC, Address Book, Companies and accounts, Items — and reads the Setup; **Developer** holds the Development folder, OMW included (see [Predefined roles](../overview.md#roles)). Because a role names a folder, it follows the screens a later version adds to it.

---

## Related

- [UDC Types](./udc-types.md), [UDC Code](./udc-codes.md), [Address Book](./address-book.md) — the rest of Master Data.
- [Data Explorer](../data-explorer.md) — totals and trends on the same modules.
- [Overview](../home.md) — the *JD Edwards data* group of links.
