---
title: Build a model
description: "Settings → Explorer in Liberty Next: an explorer model per data mart — the hub, the entities (a query with its cardinality, key, measures, hidden columns and default date), the relations on column pairs, and a model filled from a Screen Assistant preset."
keywords: [Liberty Next, Data Explorer, Settings Explorer, model, hub, entity, cardinality, measure, relation, join, preset, Screen Assistant, data mart]
---

# Build a model

A model tells the explorer what a user may analyse and how the tables relate. It is built in **Settings → Explorer** by a superuser, with no SQL: every entity reads an existing query of a connector, and the columns are discovered from that query's result.

---

## At a glance

<svg viewBox="0 0 1200 510" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="492" rx="14" fill="url(#exm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Explorer</text>
  <line x1="240" y1="60" x2="960" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="86" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">App</text>
  <rect x="272" y="74" width="33" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="288.5" y="86.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="313" y="72" width="85" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="355.5" y="86.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add an app</text>
  <text x="240" y="122" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Model</text>
  <rect x="290" y="108" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="300" y="122.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">pipeline ▾</text>
  <rect x="448" y="108" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="488.0" y="122.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add model</text>
  <rect x="534" y="108" width="85" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="576.5" y="122.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete model</text>
  <rect x="880" y="108" width="80" height="22" rx="5" fill="url(#exm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="122.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="142" width="720" height="56" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="160" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Label</text>
  <rect x="252" y="166" width="166" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="180.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">CRM pipeline</text>
  <text x="432" y="160" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Hub</text>
  <rect x="432" y="166" width="166" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="442" y="180.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">deals ▾</text>
  <text x="612" y="160" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="612" y="166" width="166" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="622" y="180.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="792" y="160" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Preset (Screen Assistant)</text>
  <rect x="792" y="166" width="166" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="802" y="180.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">None ▾</text>
  <rect x="240" y="210" width="720" height="168" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="230" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▤  Entities</text>
  <rect x="840" y="216" width="85" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="882.5" y="230.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add entity</text>
  <rect x="252" y="242" width="696" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="258" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">deals</text>
  <text x="302" y="258" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">— Deals</text>
  <rect x="347" y="247" width="31" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="362.5" y="259.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Hub</text>
  <rect x="382" y="247" width="35" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="399.5" y="259.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="266" y="273" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">crm.deals_get · key: ID · Σ AMOUNT · CLOSE_DATE</text>
  <text x="934" y="264" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Edit · Delete</text>
  <rect x="252" y="286" width="696" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="302" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">customers</text>
  <text x="324" y="302" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">— Customers</text>
  <rect x="390" y="291" width="35" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="407.5" y="303.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="266" y="317" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">crm.customers_get · key: ID</text>
  <text x="934" y="308" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Edit · Delete</text>
  <rect x="252" y="330" width="696" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="346" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">activities</text>
  <text x="330" y="346" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">— Activities</text>
  <rect x="401" y="335" width="35" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="418.5" y="347.2" fill="#fb923c" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n</text>
  <text x="266" y="361" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">crm.activities_get · key: ID</text>
  <text x="934" y="352" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Edit · Delete</text>
  <rect x="240" y="390" width="720" height="100" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="410" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">🔗  Relations</text>
  <rect x="830" y="396" width="96" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="878.0" y="410.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add relation</text>
  <rect x="252" y="424" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="438.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">customers ▾</text>
  <text x="392" y="439" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">→</text>
  <rect x="406" y="424" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="438.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">deals ▾</text>
  <rect x="550" y="424" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="438.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ID</text>
  <text x="670" y="439" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">=</text>
  <rect x="684" y="424" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="438.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="826" y="439" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">+  🗑</text>
  <rect x="252" y="454" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="468.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">activities ▾</text>
  <text x="392" y="469" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">→</text>
  <rect x="406" y="454" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="468.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">deals ▾</text>
  <rect x="550" y="454" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="468.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">DEAL_ID</text>
  <text x="670" y="469" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">=</text>
  <rect x="684" y="454" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="468.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ID</text>
  <text x="826" y="469" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">+  🗑</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One app at a time</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">several models per app</text>
  <line x1="210" y1="91.0" x2="272" y2="83" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Label and hub</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the hub starts every analysis</text>
  <line x1="210" y1="177.0" x2="252" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="10" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Entities</text>
  <text x="20" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a query each, 1..1 or 1..n</text>
  <line x1="210" y1="307.0" x2="252" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="10" y="430" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Relations</text>
  <text x="20" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">column pairs to the hub</text>
  <line x1="210" y1="447.0" x2="252" y2="435" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="1000" y="108" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="123" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1010" y="136" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes and reloads</text>
  <line x1="1000" y1="125.0" x2="960" y2="119" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="1000" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">From a preset</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fills entities and joins</text>
  <line x1="1000" y1="177.0" x2="948" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
</svg>

---

## The app and the model \{#app-model\}

1. **App** — the bar at the top lists the apps that already have a model; **+ Add an app** offers the SQL connectors that have none.
2. **Model** — pick a model of the app, or **Add model** and give its id (letters, digits, `_` and `-`). An app can hold several models: tables that do not relate to one another belong in different models. **Delete model** removes it with its entities and relations.
3. The header of the model:

| Field | Use |
|---|---|
| **Label** | The name users see in the explorer's model picker. |
| **Hub** | The entity every analysis starts from: a fact table, a document header, the lines of a document. |
| **Description** | Shown under the explorer's title. |
| **Preset (Screen Assistant)** | Fills the model from a preset — see [below](#preset). |

**Save** writes the model and reloads it: the explorer sees it at once. A model without any entity is not saved.

---

## Entities \{#entities\}

**Add entity** (or a click on an entity) opens its form:

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="420" rx="14" fill="url(#exe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Entity · deals</text>
  <rect x="800" y="28" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.0" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="884" y="28" width="80" height="22" rx="5" fill="url(#exe-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="924.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <line x1="240" y1="60" x2="960" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Id</text>
  <rect x="240" y="86" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">deals</text>
  <text x="480" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Label</text>
  <rect x="480" y="86" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="720" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per hub row</text>
  <rect x="720" y="85" width="153" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="721" y="86" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="757.0" y="100.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1 · one</text>
  <line x1="794" y1="90" x2="794" y2="104" stroke="#334155" strokeWidth="1"/>
  <text x="833.5" y="100.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n · many</text>
  <text x="240" y="130" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Connector</text>
  <rect x="240" y="136" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="150.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">crm (the app) ▾</text>
  <text x="480" y="130" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Query</text>
  <rect x="480" y="136" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="150.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">deals_get ▾</text>
  <text x="720" y="130" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Screen (column hints)</text>
  <rect x="720" y="136" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="730" y="150.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Deals ▾</text>
  <text x="240" y="180" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Default date</text>
  <rect x="240" y="186" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="200.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">CLOSE_DATE ▾</text>
  <text x="240" y="232" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLUMNS</text>
  <rect x="240" y="240" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLUMN</text>
  <text x="400" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <text x="550" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="690" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KEY</text>
  <text x="750" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MEASURE</text>
  <text x="900" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HIDDEN</text>
  <rect x="240" y="272" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ID</text>
  <text x="400" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Id</text>
  <text x="550" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">number</text>
  <text x="690" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☑</text>
  <text x="750" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">— dimension —</text>
  <text x="900" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <rect x="240" y="302" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">STAGE</text>
  <text x="400" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Stage</text>
  <text x="550" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">string</text>
  <text x="690" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <text x="750" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">— dimension —</text>
  <text x="900" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <rect x="240" y="332" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">AMOUNT</text>
  <text x="400" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Amount</text>
  <text x="550" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">number</text>
  <text x="690" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <text x="750" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sum ▾</text>
  <text x="900" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <rect x="240" y="362" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">CLOSE_DATE</text>
  <text x="400" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Close date</text>
  <text x="550" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">date</text>
  <text x="690" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <text x="750" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">— dimension —</text>
  <text x="900" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <rect x="240" y="392" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="400" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="550" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">number</text>
  <text x="690" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <text x="750" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">— dimension —</text>
  <text x="900" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☑</text>
  <rect x="10" y="86" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="101" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cardinality</text>
  <text x="20" y="114" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rows per hub row</text>
  <line x1="210" y1="103.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a SELECT query of a connector</text>
  <line x1="210" y1="167.0" x2="240" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Discovered columns</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the query runs for one row</text>
  <line x1="210" y1="347.0" x2="240" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Screen hints</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">labels, formats, lists</text>
  <line x1="1000" y1="147.0" x2="960" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Measure</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">default aggregate</text>
  <line x1="1000" y1="317.0" x2="880" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="380" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hidden</text>
  <text x="1010" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">left out of the pane</text>
  <line x1="1000" y1="397.0" x2="930" y2="382" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
</svg>

| Field | Use |
|---|---|
| **Id** | The entity's identifier, fixed once created (`deals`, `customers`). |
| **Label** | The name of the group in the fields pane. |
| **Rows per hub row** | **1..1 · one** — at most one row per hub row (the customer of a deal); **1..n · many** — several rows (the activities of a deal). The hub itself is always 1..1. |
| **Description** | Free text. |
| **Connector** | The connector of the query; the app's own by default. |
| **Query** | A SELECT query of that connector, without parameters. Its columns are discovered by running it for one row. |
| **Screen (column hints)** | A screen whose column settings give the labels, formats and lists of values. The screens that read the same query come first. |
| **Default date** | The date field the period applies to first. |

The **Columns** table lists the discovered columns, with the label and the type taken from the screen. For each one:

- **Key** — the columns that identify a row. A new entity takes the screen's key columns. The key opens a row in its screen's dialog from the detail view.
- **Measure** — a numeric column that users sum, average, count…: pick its default aggregate (`sum`, `avg`, `min`, `max`, `count`, `count_distinct`). Left on *— dimension —*, the column groups and filters.
- **Hidden** — left out of the fields pane. A column hidden by the screen stays hidden.

A column that the query no longer returns is flagged with **?** so it can be unticked.

### What users get from a column \{#fields\}

Each column becomes a **field** of the pane, labelled and formatted through the dictionary and the screen, and typed as text, number, date, date-time or yes/no. A column with a list of values (an enum or a lookup in the screen) shows its labels and offers its values in the filters. A column declared as a measure but not numeric stays a dimension, and the model reports it to superusers.

---

## Relations \{#relations\}

A relation joins two entities on one or more **column pairs**: `customers` → `deals` on `ID = CUSTOMER_ID`. **Add relation**, pick both entities, then the columns (the lists show each entity's columns; a name can also be typed); **+** adds a pair for a composite key.

Every entity must reach the hub, directly or through other entities. The explorer then picks the joins an analysis needs, and never multiplies rows twice: an analysis groups by at most one 1..n entity, and the others are reached without duplicating the hub's rows.

---

## A model from a preset \{#preset\}

A Screen Assistant preset already declares a set of tables and their joins. Picking it in **Preset (Screen Assistant)** fills the model:

- every table of the preset becomes an entity (all its columns, or the preset's own column list), the base table the hub;
- the joins become relations, matched on the real columns — the column of that name, the one carrying that dictionary item, or, on a connector with a table prefix (JD Edwards EnterpriseOne: `ABAN8`, `WWAN8`), the one whose name without the prefix is the item.

Entities already declared are kept and completed; a key, measures, a default date or a cardinality set by hand stay as they are. Then adjust what is needed and **Save**. Picking the preset again fills the model once more.

Applying the preset also creates the dictionary entries its tables lack — on a JD Edwards source, from its data dictionary: *Preset applied: 6 entities · 42 dictionary entries created*.

### Models shipped by a preset \{#shipped\}

A preset can also give the explorer a model **by itself**: the *full* presets of the JD Edwards catalogs (Address Book, A/P ledger, sales order, work order…) appear in the model picker without anything in Settings → Explorer. In the model picker, the models are grouped by area — *JDE · Accounts Payable*, *JDE · Sales* —, the others by application. The model is built from the preset when it is first opened; the page header says *shipped by the preset “…”*. In such a preset, a table's label becomes the entity label, and a lookup table joined to a transaction hub has the cardinality *one*.

To change such a model, add a model in Settings → Explorer from the same preset: the declared model replaces the shipped one.

---

## Things to know

| Situation | What happens | What to do |
|---|---|---|
| An entity is not linked to the hub. | **Save** is refused and names the entities left out. | Add the missing relation. |
| The entity's query expects parameters. | The explorer runs it without any. | Point the entity at a query without parameters. |
| No column is discovered. | The query failed or returned nothing. | Check the query in Settings → Connectors. |
| A field is missing in the pane. | It is hidden, or the query does not return it. | Untick **Hidden**, or add the column to the query. |
| Fields show their raw column name. | The columns have no dictionary entry. | On the explorer page, a superuser sees *N column(s) have no dictionary entry and show their column name* and **Create the entries from the data dictionary** creates them in one click. |

## What's next

- [Analyse data](./analysis.md) — what users do with the model.
- [Roles & permissions](../build/secure/roles-and-permissions.md#access) — give access to a model.
