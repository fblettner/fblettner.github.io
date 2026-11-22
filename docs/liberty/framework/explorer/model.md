---
title: Build a model
description: "Liberty Next → Insight → Explorer in Liberty Next: an explorer model per data mart — the hub, the entities (a query with its cardinality, key, measures, hidden columns and default date), the relations on column pairs, and a model filled from a Screen Assistant preset."
keywords: [Liberty Next, Data Explorer, Settings Explorer, model, hub, entity, cardinality, measure, relation, join, preset, Screen Assistant, data mart]
---

# Build a model

A model tells the explorer what a user may analyse and how the tables relate. It is built in **Liberty Next → Insight → Explorer** by a superuser, with no SQL: every entity reads an existing query of a connector, and the columns are discovered from that query's result.

---

## At a glance

<svg viewBox="0 0 1320 546" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="502" rx="14" fill="url(#exm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">◎</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorer</text>
  <rect x="979" y="31" width="101" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1029.5" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload config</text>
  <rect x="928" y="31" width="43" height="22" rx="5" fill="url(#exm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="949.5" y="45.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="824" y="31" width="96" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="872.0" y="45.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Delete model</text>
  <rect x="736" y="31" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="776.0" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add model</text>
  <line x1="221" y1="64" x2="1099" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="90" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">App:</text>
  <rect x="272" y="78" width="33" height="20" rx="10.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="288.5" y="91.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="311" y="78" width="43" height="20" rx="10.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="332.5" y="91.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="360" y="78" width="73" height="20" rx="10.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="396.5" y="91.2" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add scope</text>
  <text x="240" y="124" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Model</text>
  <rect x="286" y="110" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="296" y="124.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">pipeline  CRM pipeline                ▾</text>
  <rect x="240" y="146" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="281.0" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add entity</text>
  <rect x="330" y="146" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="376.0" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇔ Add relation</text>
  <text x="810" y="160" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">5 entity(ies) · 3 relation(s) · 1 not linked to the hub</text>
  <rect x="240" y="176" width="570" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="254" cy="190" r="0.6" fill="#334155"/>
  <circle cx="254" cy="208" r="0.6" fill="#334155"/>
  <circle cx="254" cy="226" r="0.6" fill="#334155"/>
  <circle cx="254" cy="244" r="0.6" fill="#334155"/>
  <circle cx="254" cy="262" r="0.6" fill="#334155"/>
  <circle cx="254" cy="280" r="0.6" fill="#334155"/>
  <circle cx="254" cy="298" r="0.6" fill="#334155"/>
  <circle cx="254" cy="316" r="0.6" fill="#334155"/>
  <circle cx="254" cy="334" r="0.6" fill="#334155"/>
  <circle cx="254" cy="352" r="0.6" fill="#334155"/>
  <circle cx="254" cy="370" r="0.6" fill="#334155"/>
  <circle cx="254" cy="388" r="0.6" fill="#334155"/>
  <circle cx="254" cy="406" r="0.6" fill="#334155"/>
  <circle cx="254" cy="424" r="0.6" fill="#334155"/>
  <circle cx="254" cy="442" r="0.6" fill="#334155"/>
  <circle cx="254" cy="460" r="0.6" fill="#334155"/>
  <circle cx="254" cy="478" r="0.6" fill="#334155"/>
  <circle cx="254" cy="496" r="0.6" fill="#334155"/>
  <circle cx="272" cy="190" r="0.6" fill="#334155"/>
  <circle cx="272" cy="208" r="0.6" fill="#334155"/>
  <circle cx="272" cy="226" r="0.6" fill="#334155"/>
  <circle cx="272" cy="244" r="0.6" fill="#334155"/>
  <circle cx="272" cy="262" r="0.6" fill="#334155"/>
  <circle cx="272" cy="280" r="0.6" fill="#334155"/>
  <circle cx="272" cy="298" r="0.6" fill="#334155"/>
  <circle cx="272" cy="316" r="0.6" fill="#334155"/>
  <circle cx="272" cy="334" r="0.6" fill="#334155"/>
  <circle cx="272" cy="352" r="0.6" fill="#334155"/>
  <circle cx="272" cy="370" r="0.6" fill="#334155"/>
  <circle cx="272" cy="388" r="0.6" fill="#334155"/>
  <circle cx="272" cy="406" r="0.6" fill="#334155"/>
  <circle cx="272" cy="424" r="0.6" fill="#334155"/>
  <circle cx="272" cy="442" r="0.6" fill="#334155"/>
  <circle cx="272" cy="460" r="0.6" fill="#334155"/>
  <circle cx="272" cy="478" r="0.6" fill="#334155"/>
  <circle cx="272" cy="496" r="0.6" fill="#334155"/>
  <circle cx="290" cy="190" r="0.6" fill="#334155"/>
  <circle cx="290" cy="208" r="0.6" fill="#334155"/>
  <circle cx="290" cy="226" r="0.6" fill="#334155"/>
  <circle cx="290" cy="244" r="0.6" fill="#334155"/>
  <circle cx="290" cy="262" r="0.6" fill="#334155"/>
  <circle cx="290" cy="280" r="0.6" fill="#334155"/>
  <circle cx="290" cy="298" r="0.6" fill="#334155"/>
  <circle cx="290" cy="316" r="0.6" fill="#334155"/>
  <circle cx="290" cy="334" r="0.6" fill="#334155"/>
  <circle cx="290" cy="352" r="0.6" fill="#334155"/>
  <circle cx="290" cy="370" r="0.6" fill="#334155"/>
  <circle cx="290" cy="388" r="0.6" fill="#334155"/>
  <circle cx="290" cy="406" r="0.6" fill="#334155"/>
  <circle cx="290" cy="424" r="0.6" fill="#334155"/>
  <circle cx="290" cy="442" r="0.6" fill="#334155"/>
  <circle cx="290" cy="460" r="0.6" fill="#334155"/>
  <circle cx="290" cy="478" r="0.6" fill="#334155"/>
  <circle cx="290" cy="496" r="0.6" fill="#334155"/>
  <circle cx="308" cy="190" r="0.6" fill="#334155"/>
  <circle cx="308" cy="208" r="0.6" fill="#334155"/>
  <circle cx="308" cy="226" r="0.6" fill="#334155"/>
  <circle cx="308" cy="244" r="0.6" fill="#334155"/>
  <circle cx="308" cy="262" r="0.6" fill="#334155"/>
  <circle cx="308" cy="280" r="0.6" fill="#334155"/>
  <circle cx="308" cy="298" r="0.6" fill="#334155"/>
  <circle cx="308" cy="316" r="0.6" fill="#334155"/>
  <circle cx="308" cy="334" r="0.6" fill="#334155"/>
  <circle cx="308" cy="352" r="0.6" fill="#334155"/>
  <circle cx="308" cy="370" r="0.6" fill="#334155"/>
  <circle cx="308" cy="388" r="0.6" fill="#334155"/>
  <circle cx="308" cy="406" r="0.6" fill="#334155"/>
  <circle cx="308" cy="424" r="0.6" fill="#334155"/>
  <circle cx="308" cy="442" r="0.6" fill="#334155"/>
  <circle cx="308" cy="460" r="0.6" fill="#334155"/>
  <circle cx="308" cy="478" r="0.6" fill="#334155"/>
  <circle cx="308" cy="496" r="0.6" fill="#334155"/>
  <circle cx="326" cy="190" r="0.6" fill="#334155"/>
  <circle cx="326" cy="208" r="0.6" fill="#334155"/>
  <circle cx="326" cy="226" r="0.6" fill="#334155"/>
  <circle cx="326" cy="244" r="0.6" fill="#334155"/>
  <circle cx="326" cy="262" r="0.6" fill="#334155"/>
  <circle cx="326" cy="280" r="0.6" fill="#334155"/>
  <circle cx="326" cy="298" r="0.6" fill="#334155"/>
  <circle cx="326" cy="316" r="0.6" fill="#334155"/>
  <circle cx="326" cy="334" r="0.6" fill="#334155"/>
  <circle cx="326" cy="352" r="0.6" fill="#334155"/>
  <circle cx="326" cy="370" r="0.6" fill="#334155"/>
  <circle cx="326" cy="388" r="0.6" fill="#334155"/>
  <circle cx="326" cy="406" r="0.6" fill="#334155"/>
  <circle cx="326" cy="424" r="0.6" fill="#334155"/>
  <circle cx="326" cy="442" r="0.6" fill="#334155"/>
  <circle cx="326" cy="460" r="0.6" fill="#334155"/>
  <circle cx="326" cy="478" r="0.6" fill="#334155"/>
  <circle cx="326" cy="496" r="0.6" fill="#334155"/>
  <circle cx="344" cy="190" r="0.6" fill="#334155"/>
  <circle cx="344" cy="208" r="0.6" fill="#334155"/>
  <circle cx="344" cy="226" r="0.6" fill="#334155"/>
  <circle cx="344" cy="244" r="0.6" fill="#334155"/>
  <circle cx="344" cy="262" r="0.6" fill="#334155"/>
  <circle cx="344" cy="280" r="0.6" fill="#334155"/>
  <circle cx="344" cy="298" r="0.6" fill="#334155"/>
  <circle cx="344" cy="316" r="0.6" fill="#334155"/>
  <circle cx="344" cy="334" r="0.6" fill="#334155"/>
  <circle cx="344" cy="352" r="0.6" fill="#334155"/>
  <circle cx="344" cy="370" r="0.6" fill="#334155"/>
  <circle cx="344" cy="388" r="0.6" fill="#334155"/>
  <circle cx="344" cy="406" r="0.6" fill="#334155"/>
  <circle cx="344" cy="424" r="0.6" fill="#334155"/>
  <circle cx="344" cy="442" r="0.6" fill="#334155"/>
  <circle cx="344" cy="460" r="0.6" fill="#334155"/>
  <circle cx="344" cy="478" r="0.6" fill="#334155"/>
  <circle cx="344" cy="496" r="0.6" fill="#334155"/>
  <circle cx="362" cy="190" r="0.6" fill="#334155"/>
  <circle cx="362" cy="208" r="0.6" fill="#334155"/>
  <circle cx="362" cy="226" r="0.6" fill="#334155"/>
  <circle cx="362" cy="244" r="0.6" fill="#334155"/>
  <circle cx="362" cy="262" r="0.6" fill="#334155"/>
  <circle cx="362" cy="280" r="0.6" fill="#334155"/>
  <circle cx="362" cy="298" r="0.6" fill="#334155"/>
  <circle cx="362" cy="316" r="0.6" fill="#334155"/>
  <circle cx="362" cy="334" r="0.6" fill="#334155"/>
  <circle cx="362" cy="352" r="0.6" fill="#334155"/>
  <circle cx="362" cy="370" r="0.6" fill="#334155"/>
  <circle cx="362" cy="388" r="0.6" fill="#334155"/>
  <circle cx="362" cy="406" r="0.6" fill="#334155"/>
  <circle cx="362" cy="424" r="0.6" fill="#334155"/>
  <circle cx="362" cy="442" r="0.6" fill="#334155"/>
  <circle cx="362" cy="460" r="0.6" fill="#334155"/>
  <circle cx="362" cy="478" r="0.6" fill="#334155"/>
  <circle cx="362" cy="496" r="0.6" fill="#334155"/>
  <circle cx="380" cy="190" r="0.6" fill="#334155"/>
  <circle cx="380" cy="208" r="0.6" fill="#334155"/>
  <circle cx="380" cy="226" r="0.6" fill="#334155"/>
  <circle cx="380" cy="244" r="0.6" fill="#334155"/>
  <circle cx="380" cy="262" r="0.6" fill="#334155"/>
  <circle cx="380" cy="280" r="0.6" fill="#334155"/>
  <circle cx="380" cy="298" r="0.6" fill="#334155"/>
  <circle cx="380" cy="316" r="0.6" fill="#334155"/>
  <circle cx="380" cy="334" r="0.6" fill="#334155"/>
  <circle cx="380" cy="352" r="0.6" fill="#334155"/>
  <circle cx="380" cy="370" r="0.6" fill="#334155"/>
  <circle cx="380" cy="388" r="0.6" fill="#334155"/>
  <circle cx="380" cy="406" r="0.6" fill="#334155"/>
  <circle cx="380" cy="424" r="0.6" fill="#334155"/>
  <circle cx="380" cy="442" r="0.6" fill="#334155"/>
  <circle cx="380" cy="460" r="0.6" fill="#334155"/>
  <circle cx="380" cy="478" r="0.6" fill="#334155"/>
  <circle cx="380" cy="496" r="0.6" fill="#334155"/>
  <circle cx="398" cy="190" r="0.6" fill="#334155"/>
  <circle cx="398" cy="208" r="0.6" fill="#334155"/>
  <circle cx="398" cy="226" r="0.6" fill="#334155"/>
  <circle cx="398" cy="244" r="0.6" fill="#334155"/>
  <circle cx="398" cy="262" r="0.6" fill="#334155"/>
  <circle cx="398" cy="280" r="0.6" fill="#334155"/>
  <circle cx="398" cy="298" r="0.6" fill="#334155"/>
  <circle cx="398" cy="316" r="0.6" fill="#334155"/>
  <circle cx="398" cy="334" r="0.6" fill="#334155"/>
  <circle cx="398" cy="352" r="0.6" fill="#334155"/>
  <circle cx="398" cy="370" r="0.6" fill="#334155"/>
  <circle cx="398" cy="388" r="0.6" fill="#334155"/>
  <circle cx="398" cy="406" r="0.6" fill="#334155"/>
  <circle cx="398" cy="424" r="0.6" fill="#334155"/>
  <circle cx="398" cy="442" r="0.6" fill="#334155"/>
  <circle cx="398" cy="460" r="0.6" fill="#334155"/>
  <circle cx="398" cy="478" r="0.6" fill="#334155"/>
  <circle cx="398" cy="496" r="0.6" fill="#334155"/>
  <circle cx="416" cy="190" r="0.6" fill="#334155"/>
  <circle cx="416" cy="208" r="0.6" fill="#334155"/>
  <circle cx="416" cy="226" r="0.6" fill="#334155"/>
  <circle cx="416" cy="244" r="0.6" fill="#334155"/>
  <circle cx="416" cy="262" r="0.6" fill="#334155"/>
  <circle cx="416" cy="280" r="0.6" fill="#334155"/>
  <circle cx="416" cy="298" r="0.6" fill="#334155"/>
  <circle cx="416" cy="316" r="0.6" fill="#334155"/>
  <circle cx="416" cy="334" r="0.6" fill="#334155"/>
  <circle cx="416" cy="352" r="0.6" fill="#334155"/>
  <circle cx="416" cy="370" r="0.6" fill="#334155"/>
  <circle cx="416" cy="388" r="0.6" fill="#334155"/>
  <circle cx="416" cy="406" r="0.6" fill="#334155"/>
  <circle cx="416" cy="424" r="0.6" fill="#334155"/>
  <circle cx="416" cy="442" r="0.6" fill="#334155"/>
  <circle cx="416" cy="460" r="0.6" fill="#334155"/>
  <circle cx="416" cy="478" r="0.6" fill="#334155"/>
  <circle cx="416" cy="496" r="0.6" fill="#334155"/>
  <circle cx="434" cy="190" r="0.6" fill="#334155"/>
  <circle cx="434" cy="208" r="0.6" fill="#334155"/>
  <circle cx="434" cy="226" r="0.6" fill="#334155"/>
  <circle cx="434" cy="244" r="0.6" fill="#334155"/>
  <circle cx="434" cy="262" r="0.6" fill="#334155"/>
  <circle cx="434" cy="280" r="0.6" fill="#334155"/>
  <circle cx="434" cy="298" r="0.6" fill="#334155"/>
  <circle cx="434" cy="316" r="0.6" fill="#334155"/>
  <circle cx="434" cy="334" r="0.6" fill="#334155"/>
  <circle cx="434" cy="352" r="0.6" fill="#334155"/>
  <circle cx="434" cy="370" r="0.6" fill="#334155"/>
  <circle cx="434" cy="388" r="0.6" fill="#334155"/>
  <circle cx="434" cy="406" r="0.6" fill="#334155"/>
  <circle cx="434" cy="424" r="0.6" fill="#334155"/>
  <circle cx="434" cy="442" r="0.6" fill="#334155"/>
  <circle cx="434" cy="460" r="0.6" fill="#334155"/>
  <circle cx="434" cy="478" r="0.6" fill="#334155"/>
  <circle cx="434" cy="496" r="0.6" fill="#334155"/>
  <circle cx="452" cy="190" r="0.6" fill="#334155"/>
  <circle cx="452" cy="208" r="0.6" fill="#334155"/>
  <circle cx="452" cy="226" r="0.6" fill="#334155"/>
  <circle cx="452" cy="244" r="0.6" fill="#334155"/>
  <circle cx="452" cy="262" r="0.6" fill="#334155"/>
  <circle cx="452" cy="280" r="0.6" fill="#334155"/>
  <circle cx="452" cy="298" r="0.6" fill="#334155"/>
  <circle cx="452" cy="316" r="0.6" fill="#334155"/>
  <circle cx="452" cy="334" r="0.6" fill="#334155"/>
  <circle cx="452" cy="352" r="0.6" fill="#334155"/>
  <circle cx="452" cy="370" r="0.6" fill="#334155"/>
  <circle cx="452" cy="388" r="0.6" fill="#334155"/>
  <circle cx="452" cy="406" r="0.6" fill="#334155"/>
  <circle cx="452" cy="424" r="0.6" fill="#334155"/>
  <circle cx="452" cy="442" r="0.6" fill="#334155"/>
  <circle cx="452" cy="460" r="0.6" fill="#334155"/>
  <circle cx="452" cy="478" r="0.6" fill="#334155"/>
  <circle cx="452" cy="496" r="0.6" fill="#334155"/>
  <circle cx="470" cy="190" r="0.6" fill="#334155"/>
  <circle cx="470" cy="208" r="0.6" fill="#334155"/>
  <circle cx="470" cy="226" r="0.6" fill="#334155"/>
  <circle cx="470" cy="244" r="0.6" fill="#334155"/>
  <circle cx="470" cy="262" r="0.6" fill="#334155"/>
  <circle cx="470" cy="280" r="0.6" fill="#334155"/>
  <circle cx="470" cy="298" r="0.6" fill="#334155"/>
  <circle cx="470" cy="316" r="0.6" fill="#334155"/>
  <circle cx="470" cy="334" r="0.6" fill="#334155"/>
  <circle cx="470" cy="352" r="0.6" fill="#334155"/>
  <circle cx="470" cy="370" r="0.6" fill="#334155"/>
  <circle cx="470" cy="388" r="0.6" fill="#334155"/>
  <circle cx="470" cy="406" r="0.6" fill="#334155"/>
  <circle cx="470" cy="424" r="0.6" fill="#334155"/>
  <circle cx="470" cy="442" r="0.6" fill="#334155"/>
  <circle cx="470" cy="460" r="0.6" fill="#334155"/>
  <circle cx="470" cy="478" r="0.6" fill="#334155"/>
  <circle cx="470" cy="496" r="0.6" fill="#334155"/>
  <circle cx="488" cy="190" r="0.6" fill="#334155"/>
  <circle cx="488" cy="208" r="0.6" fill="#334155"/>
  <circle cx="488" cy="226" r="0.6" fill="#334155"/>
  <circle cx="488" cy="244" r="0.6" fill="#334155"/>
  <circle cx="488" cy="262" r="0.6" fill="#334155"/>
  <circle cx="488" cy="280" r="0.6" fill="#334155"/>
  <circle cx="488" cy="298" r="0.6" fill="#334155"/>
  <circle cx="488" cy="316" r="0.6" fill="#334155"/>
  <circle cx="488" cy="334" r="0.6" fill="#334155"/>
  <circle cx="488" cy="352" r="0.6" fill="#334155"/>
  <circle cx="488" cy="370" r="0.6" fill="#334155"/>
  <circle cx="488" cy="388" r="0.6" fill="#334155"/>
  <circle cx="488" cy="406" r="0.6" fill="#334155"/>
  <circle cx="488" cy="424" r="0.6" fill="#334155"/>
  <circle cx="488" cy="442" r="0.6" fill="#334155"/>
  <circle cx="488" cy="460" r="0.6" fill="#334155"/>
  <circle cx="488" cy="478" r="0.6" fill="#334155"/>
  <circle cx="488" cy="496" r="0.6" fill="#334155"/>
  <circle cx="506" cy="190" r="0.6" fill="#334155"/>
  <circle cx="506" cy="208" r="0.6" fill="#334155"/>
  <circle cx="506" cy="226" r="0.6" fill="#334155"/>
  <circle cx="506" cy="244" r="0.6" fill="#334155"/>
  <circle cx="506" cy="262" r="0.6" fill="#334155"/>
  <circle cx="506" cy="280" r="0.6" fill="#334155"/>
  <circle cx="506" cy="298" r="0.6" fill="#334155"/>
  <circle cx="506" cy="316" r="0.6" fill="#334155"/>
  <circle cx="506" cy="334" r="0.6" fill="#334155"/>
  <circle cx="506" cy="352" r="0.6" fill="#334155"/>
  <circle cx="506" cy="370" r="0.6" fill="#334155"/>
  <circle cx="506" cy="388" r="0.6" fill="#334155"/>
  <circle cx="506" cy="406" r="0.6" fill="#334155"/>
  <circle cx="506" cy="424" r="0.6" fill="#334155"/>
  <circle cx="506" cy="442" r="0.6" fill="#334155"/>
  <circle cx="506" cy="460" r="0.6" fill="#334155"/>
  <circle cx="506" cy="478" r="0.6" fill="#334155"/>
  <circle cx="506" cy="496" r="0.6" fill="#334155"/>
  <circle cx="524" cy="190" r="0.6" fill="#334155"/>
  <circle cx="524" cy="208" r="0.6" fill="#334155"/>
  <circle cx="524" cy="226" r="0.6" fill="#334155"/>
  <circle cx="524" cy="244" r="0.6" fill="#334155"/>
  <circle cx="524" cy="262" r="0.6" fill="#334155"/>
  <circle cx="524" cy="280" r="0.6" fill="#334155"/>
  <circle cx="524" cy="298" r="0.6" fill="#334155"/>
  <circle cx="524" cy="316" r="0.6" fill="#334155"/>
  <circle cx="524" cy="334" r="0.6" fill="#334155"/>
  <circle cx="524" cy="352" r="0.6" fill="#334155"/>
  <circle cx="524" cy="370" r="0.6" fill="#334155"/>
  <circle cx="524" cy="388" r="0.6" fill="#334155"/>
  <circle cx="524" cy="406" r="0.6" fill="#334155"/>
  <circle cx="524" cy="424" r="0.6" fill="#334155"/>
  <circle cx="524" cy="442" r="0.6" fill="#334155"/>
  <circle cx="524" cy="460" r="0.6" fill="#334155"/>
  <circle cx="524" cy="478" r="0.6" fill="#334155"/>
  <circle cx="524" cy="496" r="0.6" fill="#334155"/>
  <circle cx="542" cy="190" r="0.6" fill="#334155"/>
  <circle cx="542" cy="208" r="0.6" fill="#334155"/>
  <circle cx="542" cy="226" r="0.6" fill="#334155"/>
  <circle cx="542" cy="244" r="0.6" fill="#334155"/>
  <circle cx="542" cy="262" r="0.6" fill="#334155"/>
  <circle cx="542" cy="280" r="0.6" fill="#334155"/>
  <circle cx="542" cy="298" r="0.6" fill="#334155"/>
  <circle cx="542" cy="316" r="0.6" fill="#334155"/>
  <circle cx="542" cy="334" r="0.6" fill="#334155"/>
  <circle cx="542" cy="352" r="0.6" fill="#334155"/>
  <circle cx="542" cy="370" r="0.6" fill="#334155"/>
  <circle cx="542" cy="388" r="0.6" fill="#334155"/>
  <circle cx="542" cy="406" r="0.6" fill="#334155"/>
  <circle cx="542" cy="424" r="0.6" fill="#334155"/>
  <circle cx="542" cy="442" r="0.6" fill="#334155"/>
  <circle cx="542" cy="460" r="0.6" fill="#334155"/>
  <circle cx="542" cy="478" r="0.6" fill="#334155"/>
  <circle cx="542" cy="496" r="0.6" fill="#334155"/>
  <circle cx="560" cy="190" r="0.6" fill="#334155"/>
  <circle cx="560" cy="208" r="0.6" fill="#334155"/>
  <circle cx="560" cy="226" r="0.6" fill="#334155"/>
  <circle cx="560" cy="244" r="0.6" fill="#334155"/>
  <circle cx="560" cy="262" r="0.6" fill="#334155"/>
  <circle cx="560" cy="280" r="0.6" fill="#334155"/>
  <circle cx="560" cy="298" r="0.6" fill="#334155"/>
  <circle cx="560" cy="316" r="0.6" fill="#334155"/>
  <circle cx="560" cy="334" r="0.6" fill="#334155"/>
  <circle cx="560" cy="352" r="0.6" fill="#334155"/>
  <circle cx="560" cy="370" r="0.6" fill="#334155"/>
  <circle cx="560" cy="388" r="0.6" fill="#334155"/>
  <circle cx="560" cy="406" r="0.6" fill="#334155"/>
  <circle cx="560" cy="424" r="0.6" fill="#334155"/>
  <circle cx="560" cy="442" r="0.6" fill="#334155"/>
  <circle cx="560" cy="460" r="0.6" fill="#334155"/>
  <circle cx="560" cy="478" r="0.6" fill="#334155"/>
  <circle cx="560" cy="496" r="0.6" fill="#334155"/>
  <circle cx="578" cy="190" r="0.6" fill="#334155"/>
  <circle cx="578" cy="208" r="0.6" fill="#334155"/>
  <circle cx="578" cy="226" r="0.6" fill="#334155"/>
  <circle cx="578" cy="244" r="0.6" fill="#334155"/>
  <circle cx="578" cy="262" r="0.6" fill="#334155"/>
  <circle cx="578" cy="280" r="0.6" fill="#334155"/>
  <circle cx="578" cy="298" r="0.6" fill="#334155"/>
  <circle cx="578" cy="316" r="0.6" fill="#334155"/>
  <circle cx="578" cy="334" r="0.6" fill="#334155"/>
  <circle cx="578" cy="352" r="0.6" fill="#334155"/>
  <circle cx="578" cy="370" r="0.6" fill="#334155"/>
  <circle cx="578" cy="388" r="0.6" fill="#334155"/>
  <circle cx="578" cy="406" r="0.6" fill="#334155"/>
  <circle cx="578" cy="424" r="0.6" fill="#334155"/>
  <circle cx="578" cy="442" r="0.6" fill="#334155"/>
  <circle cx="578" cy="460" r="0.6" fill="#334155"/>
  <circle cx="578" cy="478" r="0.6" fill="#334155"/>
  <circle cx="578" cy="496" r="0.6" fill="#334155"/>
  <circle cx="596" cy="190" r="0.6" fill="#334155"/>
  <circle cx="596" cy="208" r="0.6" fill="#334155"/>
  <circle cx="596" cy="226" r="0.6" fill="#334155"/>
  <circle cx="596" cy="244" r="0.6" fill="#334155"/>
  <circle cx="596" cy="262" r="0.6" fill="#334155"/>
  <circle cx="596" cy="280" r="0.6" fill="#334155"/>
  <circle cx="596" cy="298" r="0.6" fill="#334155"/>
  <circle cx="596" cy="316" r="0.6" fill="#334155"/>
  <circle cx="596" cy="334" r="0.6" fill="#334155"/>
  <circle cx="596" cy="352" r="0.6" fill="#334155"/>
  <circle cx="596" cy="370" r="0.6" fill="#334155"/>
  <circle cx="596" cy="388" r="0.6" fill="#334155"/>
  <circle cx="596" cy="406" r="0.6" fill="#334155"/>
  <circle cx="596" cy="424" r="0.6" fill="#334155"/>
  <circle cx="596" cy="442" r="0.6" fill="#334155"/>
  <circle cx="596" cy="460" r="0.6" fill="#334155"/>
  <circle cx="596" cy="478" r="0.6" fill="#334155"/>
  <circle cx="596" cy="496" r="0.6" fill="#334155"/>
  <circle cx="614" cy="190" r="0.6" fill="#334155"/>
  <circle cx="614" cy="208" r="0.6" fill="#334155"/>
  <circle cx="614" cy="226" r="0.6" fill="#334155"/>
  <circle cx="614" cy="244" r="0.6" fill="#334155"/>
  <circle cx="614" cy="262" r="0.6" fill="#334155"/>
  <circle cx="614" cy="280" r="0.6" fill="#334155"/>
  <circle cx="614" cy="298" r="0.6" fill="#334155"/>
  <circle cx="614" cy="316" r="0.6" fill="#334155"/>
  <circle cx="614" cy="334" r="0.6" fill="#334155"/>
  <circle cx="614" cy="352" r="0.6" fill="#334155"/>
  <circle cx="614" cy="370" r="0.6" fill="#334155"/>
  <circle cx="614" cy="388" r="0.6" fill="#334155"/>
  <circle cx="614" cy="406" r="0.6" fill="#334155"/>
  <circle cx="614" cy="424" r="0.6" fill="#334155"/>
  <circle cx="614" cy="442" r="0.6" fill="#334155"/>
  <circle cx="614" cy="460" r="0.6" fill="#334155"/>
  <circle cx="614" cy="478" r="0.6" fill="#334155"/>
  <circle cx="614" cy="496" r="0.6" fill="#334155"/>
  <circle cx="632" cy="190" r="0.6" fill="#334155"/>
  <circle cx="632" cy="208" r="0.6" fill="#334155"/>
  <circle cx="632" cy="226" r="0.6" fill="#334155"/>
  <circle cx="632" cy="244" r="0.6" fill="#334155"/>
  <circle cx="632" cy="262" r="0.6" fill="#334155"/>
  <circle cx="632" cy="280" r="0.6" fill="#334155"/>
  <circle cx="632" cy="298" r="0.6" fill="#334155"/>
  <circle cx="632" cy="316" r="0.6" fill="#334155"/>
  <circle cx="632" cy="334" r="0.6" fill="#334155"/>
  <circle cx="632" cy="352" r="0.6" fill="#334155"/>
  <circle cx="632" cy="370" r="0.6" fill="#334155"/>
  <circle cx="632" cy="388" r="0.6" fill="#334155"/>
  <circle cx="632" cy="406" r="0.6" fill="#334155"/>
  <circle cx="632" cy="424" r="0.6" fill="#334155"/>
  <circle cx="632" cy="442" r="0.6" fill="#334155"/>
  <circle cx="632" cy="460" r="0.6" fill="#334155"/>
  <circle cx="632" cy="478" r="0.6" fill="#334155"/>
  <circle cx="632" cy="496" r="0.6" fill="#334155"/>
  <circle cx="650" cy="190" r="0.6" fill="#334155"/>
  <circle cx="650" cy="208" r="0.6" fill="#334155"/>
  <circle cx="650" cy="226" r="0.6" fill="#334155"/>
  <circle cx="650" cy="244" r="0.6" fill="#334155"/>
  <circle cx="650" cy="262" r="0.6" fill="#334155"/>
  <circle cx="650" cy="280" r="0.6" fill="#334155"/>
  <circle cx="650" cy="298" r="0.6" fill="#334155"/>
  <circle cx="650" cy="316" r="0.6" fill="#334155"/>
  <circle cx="650" cy="334" r="0.6" fill="#334155"/>
  <circle cx="650" cy="352" r="0.6" fill="#334155"/>
  <circle cx="650" cy="370" r="0.6" fill="#334155"/>
  <circle cx="650" cy="388" r="0.6" fill="#334155"/>
  <circle cx="650" cy="406" r="0.6" fill="#334155"/>
  <circle cx="650" cy="424" r="0.6" fill="#334155"/>
  <circle cx="650" cy="442" r="0.6" fill="#334155"/>
  <circle cx="650" cy="460" r="0.6" fill="#334155"/>
  <circle cx="650" cy="478" r="0.6" fill="#334155"/>
  <circle cx="650" cy="496" r="0.6" fill="#334155"/>
  <circle cx="668" cy="190" r="0.6" fill="#334155"/>
  <circle cx="668" cy="208" r="0.6" fill="#334155"/>
  <circle cx="668" cy="226" r="0.6" fill="#334155"/>
  <circle cx="668" cy="244" r="0.6" fill="#334155"/>
  <circle cx="668" cy="262" r="0.6" fill="#334155"/>
  <circle cx="668" cy="280" r="0.6" fill="#334155"/>
  <circle cx="668" cy="298" r="0.6" fill="#334155"/>
  <circle cx="668" cy="316" r="0.6" fill="#334155"/>
  <circle cx="668" cy="334" r="0.6" fill="#334155"/>
  <circle cx="668" cy="352" r="0.6" fill="#334155"/>
  <circle cx="668" cy="370" r="0.6" fill="#334155"/>
  <circle cx="668" cy="388" r="0.6" fill="#334155"/>
  <circle cx="668" cy="406" r="0.6" fill="#334155"/>
  <circle cx="668" cy="424" r="0.6" fill="#334155"/>
  <circle cx="668" cy="442" r="0.6" fill="#334155"/>
  <circle cx="668" cy="460" r="0.6" fill="#334155"/>
  <circle cx="668" cy="478" r="0.6" fill="#334155"/>
  <circle cx="668" cy="496" r="0.6" fill="#334155"/>
  <circle cx="686" cy="190" r="0.6" fill="#334155"/>
  <circle cx="686" cy="208" r="0.6" fill="#334155"/>
  <circle cx="686" cy="226" r="0.6" fill="#334155"/>
  <circle cx="686" cy="244" r="0.6" fill="#334155"/>
  <circle cx="686" cy="262" r="0.6" fill="#334155"/>
  <circle cx="686" cy="280" r="0.6" fill="#334155"/>
  <circle cx="686" cy="298" r="0.6" fill="#334155"/>
  <circle cx="686" cy="316" r="0.6" fill="#334155"/>
  <circle cx="686" cy="334" r="0.6" fill="#334155"/>
  <circle cx="686" cy="352" r="0.6" fill="#334155"/>
  <circle cx="686" cy="370" r="0.6" fill="#334155"/>
  <circle cx="686" cy="388" r="0.6" fill="#334155"/>
  <circle cx="686" cy="406" r="0.6" fill="#334155"/>
  <circle cx="686" cy="424" r="0.6" fill="#334155"/>
  <circle cx="686" cy="442" r="0.6" fill="#334155"/>
  <circle cx="686" cy="460" r="0.6" fill="#334155"/>
  <circle cx="686" cy="478" r="0.6" fill="#334155"/>
  <circle cx="686" cy="496" r="0.6" fill="#334155"/>
  <circle cx="704" cy="190" r="0.6" fill="#334155"/>
  <circle cx="704" cy="208" r="0.6" fill="#334155"/>
  <circle cx="704" cy="226" r="0.6" fill="#334155"/>
  <circle cx="704" cy="244" r="0.6" fill="#334155"/>
  <circle cx="704" cy="262" r="0.6" fill="#334155"/>
  <circle cx="704" cy="280" r="0.6" fill="#334155"/>
  <circle cx="704" cy="298" r="0.6" fill="#334155"/>
  <circle cx="704" cy="316" r="0.6" fill="#334155"/>
  <circle cx="704" cy="334" r="0.6" fill="#334155"/>
  <circle cx="704" cy="352" r="0.6" fill="#334155"/>
  <circle cx="704" cy="370" r="0.6" fill="#334155"/>
  <circle cx="704" cy="388" r="0.6" fill="#334155"/>
  <circle cx="704" cy="406" r="0.6" fill="#334155"/>
  <circle cx="704" cy="424" r="0.6" fill="#334155"/>
  <circle cx="704" cy="442" r="0.6" fill="#334155"/>
  <circle cx="704" cy="460" r="0.6" fill="#334155"/>
  <circle cx="704" cy="478" r="0.6" fill="#334155"/>
  <circle cx="704" cy="496" r="0.6" fill="#334155"/>
  <circle cx="722" cy="190" r="0.6" fill="#334155"/>
  <circle cx="722" cy="208" r="0.6" fill="#334155"/>
  <circle cx="722" cy="226" r="0.6" fill="#334155"/>
  <circle cx="722" cy="244" r="0.6" fill="#334155"/>
  <circle cx="722" cy="262" r="0.6" fill="#334155"/>
  <circle cx="722" cy="280" r="0.6" fill="#334155"/>
  <circle cx="722" cy="298" r="0.6" fill="#334155"/>
  <circle cx="722" cy="316" r="0.6" fill="#334155"/>
  <circle cx="722" cy="334" r="0.6" fill="#334155"/>
  <circle cx="722" cy="352" r="0.6" fill="#334155"/>
  <circle cx="722" cy="370" r="0.6" fill="#334155"/>
  <circle cx="722" cy="388" r="0.6" fill="#334155"/>
  <circle cx="722" cy="406" r="0.6" fill="#334155"/>
  <circle cx="722" cy="424" r="0.6" fill="#334155"/>
  <circle cx="722" cy="442" r="0.6" fill="#334155"/>
  <circle cx="722" cy="460" r="0.6" fill="#334155"/>
  <circle cx="722" cy="478" r="0.6" fill="#334155"/>
  <circle cx="722" cy="496" r="0.6" fill="#334155"/>
  <circle cx="740" cy="190" r="0.6" fill="#334155"/>
  <circle cx="740" cy="208" r="0.6" fill="#334155"/>
  <circle cx="740" cy="226" r="0.6" fill="#334155"/>
  <circle cx="740" cy="244" r="0.6" fill="#334155"/>
  <circle cx="740" cy="262" r="0.6" fill="#334155"/>
  <circle cx="740" cy="280" r="0.6" fill="#334155"/>
  <circle cx="740" cy="298" r="0.6" fill="#334155"/>
  <circle cx="740" cy="316" r="0.6" fill="#334155"/>
  <circle cx="740" cy="334" r="0.6" fill="#334155"/>
  <circle cx="740" cy="352" r="0.6" fill="#334155"/>
  <circle cx="740" cy="370" r="0.6" fill="#334155"/>
  <circle cx="740" cy="388" r="0.6" fill="#334155"/>
  <circle cx="740" cy="406" r="0.6" fill="#334155"/>
  <circle cx="740" cy="424" r="0.6" fill="#334155"/>
  <circle cx="740" cy="442" r="0.6" fill="#334155"/>
  <circle cx="740" cy="460" r="0.6" fill="#334155"/>
  <circle cx="740" cy="478" r="0.6" fill="#334155"/>
  <circle cx="740" cy="496" r="0.6" fill="#334155"/>
  <circle cx="758" cy="190" r="0.6" fill="#334155"/>
  <circle cx="758" cy="208" r="0.6" fill="#334155"/>
  <circle cx="758" cy="226" r="0.6" fill="#334155"/>
  <circle cx="758" cy="244" r="0.6" fill="#334155"/>
  <circle cx="758" cy="262" r="0.6" fill="#334155"/>
  <circle cx="758" cy="280" r="0.6" fill="#334155"/>
  <circle cx="758" cy="298" r="0.6" fill="#334155"/>
  <circle cx="758" cy="316" r="0.6" fill="#334155"/>
  <circle cx="758" cy="334" r="0.6" fill="#334155"/>
  <circle cx="758" cy="352" r="0.6" fill="#334155"/>
  <circle cx="758" cy="370" r="0.6" fill="#334155"/>
  <circle cx="758" cy="388" r="0.6" fill="#334155"/>
  <circle cx="758" cy="406" r="0.6" fill="#334155"/>
  <circle cx="758" cy="424" r="0.6" fill="#334155"/>
  <circle cx="758" cy="442" r="0.6" fill="#334155"/>
  <circle cx="758" cy="460" r="0.6" fill="#334155"/>
  <circle cx="758" cy="478" r="0.6" fill="#334155"/>
  <circle cx="758" cy="496" r="0.6" fill="#334155"/>
  <circle cx="776" cy="190" r="0.6" fill="#334155"/>
  <circle cx="776" cy="208" r="0.6" fill="#334155"/>
  <circle cx="776" cy="226" r="0.6" fill="#334155"/>
  <circle cx="776" cy="244" r="0.6" fill="#334155"/>
  <circle cx="776" cy="262" r="0.6" fill="#334155"/>
  <circle cx="776" cy="280" r="0.6" fill="#334155"/>
  <circle cx="776" cy="298" r="0.6" fill="#334155"/>
  <circle cx="776" cy="316" r="0.6" fill="#334155"/>
  <circle cx="776" cy="334" r="0.6" fill="#334155"/>
  <circle cx="776" cy="352" r="0.6" fill="#334155"/>
  <circle cx="776" cy="370" r="0.6" fill="#334155"/>
  <circle cx="776" cy="388" r="0.6" fill="#334155"/>
  <circle cx="776" cy="406" r="0.6" fill="#334155"/>
  <circle cx="776" cy="424" r="0.6" fill="#334155"/>
  <circle cx="776" cy="442" r="0.6" fill="#334155"/>
  <circle cx="776" cy="460" r="0.6" fill="#334155"/>
  <circle cx="776" cy="478" r="0.6" fill="#334155"/>
  <circle cx="776" cy="496" r="0.6" fill="#334155"/>
  <circle cx="794" cy="190" r="0.6" fill="#334155"/>
  <circle cx="794" cy="208" r="0.6" fill="#334155"/>
  <circle cx="794" cy="226" r="0.6" fill="#334155"/>
  <circle cx="794" cy="244" r="0.6" fill="#334155"/>
  <circle cx="794" cy="262" r="0.6" fill="#334155"/>
  <circle cx="794" cy="280" r="0.6" fill="#334155"/>
  <circle cx="794" cy="298" r="0.6" fill="#334155"/>
  <circle cx="794" cy="316" r="0.6" fill="#334155"/>
  <circle cx="794" cy="334" r="0.6" fill="#334155"/>
  <circle cx="794" cy="352" r="0.6" fill="#334155"/>
  <circle cx="794" cy="370" r="0.6" fill="#334155"/>
  <circle cx="794" cy="388" r="0.6" fill="#334155"/>
  <circle cx="794" cy="406" r="0.6" fill="#334155"/>
  <circle cx="794" cy="424" r="0.6" fill="#334155"/>
  <circle cx="794" cy="442" r="0.6" fill="#334155"/>
  <circle cx="794" cy="460" r="0.6" fill="#334155"/>
  <circle cx="794" cy="478" r="0.6" fill="#334155"/>
  <circle cx="794" cy="496" r="0.6" fill="#334155"/>
  <rect x="718" y="186" width="82" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="759.0" y="199.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">−   100%   +</text>
  <path d="M382,313 L462,313" fill="none" stroke="#64748b" strokeWidth="1.2"/>
  <path d="M590,313 C620,313 638,267 668,267" fill="none" stroke="#4a9eff" strokeWidth="1.8"/>
  <path d="M590,313 C620,313 638,359 668,359" fill="none" stroke="#64748b" strokeWidth="1.2"/>
  <rect x="254" y="286" width="128" height="54" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="263" y="302" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">🗄</text>
  <text x="276" y="302" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">activities</text>
  <rect x="342.08" y="292" width="35" height="14" rx="7.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="359.58" y="302.2" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n</text>
  <text x="263" y="317" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Activities</text>
  <text x="263" y="331" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm.activities_get · Key: ID</text>
  <rect x="462" y="286" width="128" height="54" rx="9" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="471" y="302" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">☆</text>
  <text x="484" y="302" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">deals</text>
  <rect x="554.56" y="292" width="31" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="570.06" y="302.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Hub</text>
  <text x="471" y="317" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="471" y="331" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm.deals_get · Key: ID</text>
  <rect x="668" y="240" width="128" height="54" rx="9" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="677" y="256" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">🗄</text>
  <text x="690" y="256" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="756.08" y="246" width="35" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="773.58" y="256.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="677" y="271" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="677" y="285" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm.customers_get · Key: ID</text>
  <rect x="668" y="332" width="128" height="54" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="677" y="348" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">🗄</text>
  <text x="690" y="348" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">owners</text>
  <rect x="756.08" y="338" width="35" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="773.58" y="348.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="677" y="363" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Owners</text>
  <text x="677" y="377" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm.users_get · Key: ID</text>
  <rect x="388.1" y="323" width="67.8" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="422.0" y="333" fill="#cbd5e1" fontSize="7.5" textAnchor="middle" fontFamily="ui-monospace, monospace">DEAL_ID = ID</text>
  <rect x="597.425" y="285" width="63.15" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="629.0" y="295" fill="#cbd5e1" fontSize="7.5" textAnchor="middle" fontFamily="ui-monospace, monospace">CUSTOMER_I…</text>
  <rect x="595.1" y="331" width="67.8" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="629.0" y="341" fill="#cbd5e1" fontSize="7.5" textAnchor="middle" fontFamily="ui-monospace, monospace">OWNER_ID = …</text>
  <text x="258" y="418" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOT LINKED TO THE HUB</text>
  <rect x="258" y="428" width="128" height="54" rx="9" fill="#0d1220" stroke="rgba(255,159,10,0.6)" strokeWidth="1.2"/>
  <text x="267" y="444" fill="#fb923c" fontSize="9" fontFamily="system-ui, sans-serif">🗄</text>
  <text x="280" y="444" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">products</text>
  <rect x="346.08" y="434" width="35" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="363.58" y="444.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="267" y="459" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Products</text>
  <text x="267" y="473" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm.products_get · Key: ID</text>
  <rect x="824" y="146" width="256" height="360" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="834" y="156" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="873.0" y="170.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">← pipeline</text>
  <text x="922" y="171" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">🗄</text>
  <text x="936" y="171" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="1038" y="159" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="1055.5" y="170.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <line x1="825" y1="188" x2="1079" y2="188" stroke="#1f2937" strokeWidth="1"/>
  <text x="836" y="208" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Label</text>
  <text x="886" y="208" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="836" y="225" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Query</text>
  <text x="886" y="225" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  <text x="836" y="242" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Key</text>
  <text x="886" y="242" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ID</text>
  <rect x="836" y="252" width="52" height="22" rx="5" fill="url(#exm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="862.0" y="266.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Edit</text>
  <rect x="894" y="252" width="107" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="947.5" y="266.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">☆ Make it the hub</text>
  <rect x="836" y="280" width="62" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="867.0" y="294.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Delete</text>
  <text x="836" y="324" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RELATIONS</text>
  <rect x="836" y="332" width="232" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="844" y="347" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">⇔  deals</text>
  <text x="904" y="347" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">CUSTOMER_ID = ID</text>
  <rect x="836" y="364" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="882.0" y="378.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add relation</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One application at a time</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Add scope: an SQL connector</text>
  <line x1="200" y1="93.0" x2="272" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="20" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Model picker</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">several models per app</text>
  <line x1="200" y1="149.0" x2="286" y2="121" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The hub</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">details left, dimensions right</text>
  <line x1="200" y1="217.0" x2="482" y2="286" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Not linked to the hub</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">an analysis cannot use it</text>
  <line x1="200" y1="457.0" x2="258" y2="448" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="1140" y="30" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Header buttons</text>
  <text x="1150" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">model: add, delete, save</text>
  <line x1="1140" y1="47.0" x2="1080" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="1140" y="120" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A click on a line</text>
  <text x="1150" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">edits its column pairs</text>
  <line x1="1140" y1="137.0" x2="629.0" y2="292" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="1140" y="230" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Picked entity</text>
  <text x="1150" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what it reads, its relations</text>
  <line x1="1140" y1="247.0" x2="1010" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
</svg>

---

## The app and the model \{#app-model\}

1. **App** — the chips at the top list the apps that already have a model; **Add scope** opens *Add an app*, which offers the SQL connectors that have none.
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

## The model as a diagram \{#diagram\}

In **Insight → Explorer**, a model is drawn: the **hub**, the entities it reaches placed by how far they are from it — the details (several rows per hub row) on its left, what a hub row has one of on its right —, and each relation as a line carrying the columns it joins on. Above the canvas, **Add entity** and **Add relation**, and a count: *N entity(ies) · N relation(s)*, with the entities not linked to the hub and the relations without columns when there are any. The canvas zooms with **−** / **+**. Set apart in orange: the entities **not linked to the hub** — an analysis cannot use them — and the relations with *no column pair yet*. The layout is computed from the model; nothing is placed by hand.

| Click | The side panel shows |
|---|---|
| Nothing | The model's own settings: **Label**, **Hub**, **Description**, **Preset (Screen Assistant)**. |
| An entity | What it is — its query or table, key, measures, default date — and its relations, with **Edit**, **Make it the hub**, **Delete**, and **Add relation** from it. A relation of the list opens it; the button at the top goes back. |
| A line | The relation: its two entities, its column pairs (**Joined on**) and **Delete this relation**. |

An empty model starts **From a prebuilt model** — a preset — or **By hand**. **Add model**, **Delete model** and **Save** are in the page header.

---

## Entities \{#entities\}

**Add entity** (or a click on an entity) opens its form:

<svg viewBox="0 0 1200 504" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="470" rx="14" fill="url(#exe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Entity · deals</text>
  <rect x="916" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="927.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <rect x="942" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="221" y1="62" x2="979" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="240" y="86" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#475569" fontSize="9.5" fontFamily="ui-monospace, monospace">deals</text>
  <text x="482" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="482" y="86" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Deals</text>
  <text x="724" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROWS PER HUB ROW</text>
  <rect x="724" y="86" width="153" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="725" y="87" width="72" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="761.0" y="100.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1 · one</text>
  <line x1="798" y1="91" x2="798" y2="103" stroke="#334155" strokeWidth="1"/>
  <text x="837.5" y="100.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n · many</text>
  <text x="240" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="240" y="130" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="144.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="240" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="240" y="174" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="188.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">                                                                ▾</text>
  <text x="482" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERY</text>
  <rect x="482" y="174" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="188.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">deals_get  DEALS                  ▾</text>
  <text x="724" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCREEN (COLUMN HINTS)</text>
  <rect x="724" y="174" width="236" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="734" y="188.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Deals                                ▾</text>
  <text x="240" y="212" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT DATE</text>
  <rect x="240" y="218" width="360" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="232.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">CLOSE_DATE                                                    ▾</text>
  <text x="240" y="260" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLUMNS</text>
  <rect x="240" y="268" width="720" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLUMN</text>
  <text x="400" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <text x="520" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="650" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KEY</text>
  <text x="710" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MEASURE</text>
  <text x="860" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HIDDEN</text>
  <line x1="240" y1="322" x2="960" y2="322" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="313" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">ID</text>
  <text x="400" y="313" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Id</text>
  <text x="520" y="313" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">number · integer</text>
  <rect x="652" y="305" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M654.5,310.5 L656.8,312.8 L660.8,308" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="669" y="314" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="710" y="300" width="136" height="19" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="720" y="313.0" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">— dimension —              ▾</text>
  <rect x="862" y="305" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="879" y="314" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="240" y1="350" x2="960" y2="350" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="341" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">STAGE</text>
  <text x="400" y="341" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Stage</text>
  <text x="520" y="341" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">varchar</text>
  <rect x="652" y="333" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="669" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="710" y="328" width="136" height="19" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="720" y="341.0" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">— dimension —              ▾</text>
  <rect x="862" y="333" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="879" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="240" y1="378" x2="960" y2="378" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="369" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">AMOUNT</text>
  <text x="400" y="369" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Amount</text>
  <text x="520" y="369" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">number · decimal</text>
  <rect x="652" y="361" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="669" y="370" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="710" y="356" width="136" height="19" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="720" y="369.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sum              ▾</text>
  <rect x="862" y="361" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="879" y="370" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="240" y1="406" x2="960" y2="406" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="397" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CLOSE_DATE</text>
  <text x="400" y="397" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Close date</text>
  <text x="520" y="397" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">date · date</text>
  <rect x="652" y="389" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="669" y="398" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="710" y="384" width="136" height="19" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="720" y="397.0" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">— dimension —              ▾</text>
  <rect x="862" y="389" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="879" y="398" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="240" y1="434" x2="960" y2="434" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="425" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="400" y="425" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="520" y="425" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">number · integer</text>
  <rect x="652" y="417" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="669" y="426" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="710" y="412" width="136" height="19" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="720" y="425.0" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">— dimension —              ▾</text>
  <rect x="862" y="417" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M864.5,422.5 L866.8,424.8 L870.8,420" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="879" y="426" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="221" y1="446" x2="979" y2="446" stroke="#1f2937" strokeWidth="1"/>
  <rect x="896" y="456" width="64" height="22" rx="5" fill="url(#exe-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="928.0" y="470.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="826" y="456" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="857.0" y="470.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fixed once created</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the entity's id</text>
  <line x1="200" y1="97.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a query, a table or an endpoint</text>
  <line x1="200" y1="177.0" x2="482" y2="185" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Discovered columns</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the query runs for one row</text>
  <line x1="200" y1="277.0" x2="250" y2="312" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cardinality</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rows per hub row</text>
  <line x1="1000" y1="97.0" x2="877" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Screen hints</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">labels, formats, lists</text>
  <line x1="1000" y1="177.0" x2="960" y2="185" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Measure</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its default aggregate</text>
  <line x1="1000" y1="307.0" x2="846" y2="365" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hidden</text>
  <text x="1010" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">left out of the fields pane</text>
  <line x1="1000" y1="397.0" x2="876" y2="421" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
</svg>

| Field | Use |
|---|---|
| **Id** | The entity's identifier, fixed once created (`deals`, `customers`). |
| **Label** | The name of the group in the fields pane. |
| **Rows per hub row** | **1..1 · one** — at most one row per hub row (the customer of a deal); **1..n · many** — several rows (the activities of a deal). The hub itself is always 1..1. |
| **Description** | Free text. |
| **Connector** | The connector of the query; the app's own by default. |
| **Query** | A SELECT query of that connector, without parameters. Its columns are discovered by running it for one row. An entity filled from a preset reads its table directly: the field then shows **Table**, not editable. |
| **Screen (column hints)** | A screen whose column settings give the labels, formats and lists of values. The screens that read the same query come first. The entity opens a row in that screen's dialog, so **Deploy → Integrity** counts the screen as reached even when no menu entry leads to it. |
| **Default date** | The date field the period applies to first. |

The **Columns** table lists the discovered columns, with the label and the type taken from the screen. For each one:

- **Key** — the columns that identify a row. A new entity takes the screen's key columns. The key opens a row in its screen's dialog from the detail view.
- **Measure** — a numeric column that users sum, average, count…: pick its default aggregate (`sum`, `avg`, `min`, `max`, `count`, `count_distinct`). Left on *— dimension —*, the column groups and filters.
- **Hidden** — left out of the fields pane. A column hidden by the screen stays hidden.

A column that the query no longer returns is flagged with **?** so it can be unticked.

### What users get from a column \{#fields\}

Each column becomes a **field** of the pane, labelled and formatted through the dictionary and the screen, and typed as text, number, date, date-time or yes/no. A column with a list of values (an enum or a lookup in the screen) shows its labels and offers its values in the filters. A column declared as a measure but not numeric stays a dimension, and the model reports it to superusers.

### An entity read from an API endpoint \{#api-entity\}

An entity can also read an endpoint of an API connector — one that returns rows, as a screen reads it. The entity form lists the SQL connectors, so such an entity is written in the model's configuration (the API connector as its connector, the endpoint as its query); it then shows on the diagram like the others. Its fields are discovered from the endpoint's columns and labelled by the dictionary; the explorer reads the rows under the user's data scope and filters, groups, measures, sorts and pages them itself, so analyses, dashboards, exports and the assistant work on it unchanged. An `=` filter on a field that is a parameter of the endpoint is also sent to the endpoint.

Such an entity is never joined with another one and takes no calculated field: both are refused with the reason. Every request calls the endpoint, up to 50,000 rows.

---

## Relations \{#relations\}

A relation joins two entities on one or more **column pairs**: `customers` → `deals` on `ID = CUSTOMER_ID`. **Add relation** — above the canvas, or in an entity's panel — adds one and opens it in the side panel: pick both entities, then the columns under **Joined on** (the lists show each entity's columns; a name can also be typed); **+** adds a pair for a composite key. **Delete this relation** removes it.

Every entity must reach the hub, directly or through other entities. The explorer then picks the joins an analysis needs, and never multiplies rows twice: an analysis groups by at most one 1..n entity, and the others are reached without duplicating the hub's rows.

---

## A model from a preset \{#preset\}

A Screen Assistant preset already declares a set of tables and their joins. Picking it in **Preset (Screen Assistant)** fills the model:

- every table of the preset becomes an entity (all its columns, or the preset's own column list), the base table the hub;
- the joins become relations, matched on the real columns — the column of that name, the one carrying that dictionary item, or, on a connector with a table prefix (JD Edwards EnterpriseOne: `ABAN8`, `WWAN8`), the one whose name without the prefix is the item.

Entities already declared are kept and completed; a key, measures, a default date or a cardinality set by hand stay as they are. Then adjust what is needed and **Save**. Picking the preset again fills the model once more.

Applying the preset also creates the dictionary entries its tables lack — on a JD Edwards source, from its data dictionary: *Preset applied: 6 entities · 42 dictionary entries created*.

### Models shipped by a preset \{#shipped\}

A preset can also give the explorer a model **by itself**: the *full* presets of the JD Edwards catalogs (Address Book, A/P ledger, sales order, work order…) appear in the model picker without anything in Liberty Next → Insight → Explorer. In the model picker, the models are grouped by area — *JDE · Accounts Payable*, *JDE · Sales* —, the others by application. The model is built from the preset when it is first opened; the page header says *shipped by the preset “…”*. In such a preset, a table's label becomes the entity label, and a lookup table joined to a transaction hub has the cardinality *one*.

To change such a model, add a model in Liberty Next → Insight → Explorer from the same preset: the declared model replaces the shipped one.

---

## Things to know

| Situation | What happens | What to do |
|---|---|---|
| An entity is not linked to the hub. | **Save** is refused and names the entities left out. | Add the missing relation. |
| The entity's query expects parameters. | The explorer runs it without any. | Point the entity at a query without parameters. |
| No column is discovered. | The query failed or returned nothing. | Check the query in Liberty Next → Data → Connectors. |
| A field is missing in the pane. | It is hidden, or the query does not return it. | Untick **Hidden**, or add the column to the query. |
| Fields show their raw column name. | The columns have no dictionary entry. | On the explorer page, a superuser sees *N column(s) have no dictionary entry and show their column name* and **Create the entries from the data dictionary** creates them in one click. |

## What's next

- [Analyse data](./analysis.md) — what users do with the model.
- [Roles & permissions](../build/secure/roles-and-permissions.md#access) — give access to a model.
