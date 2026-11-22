---
title: Construire un modèle
description: "Liberty Next → Analyse → Explorateur dans Liberty Next : un modèle d'exploration par magasin de données — le pivot, les entités (une requête avec sa cardinalité, sa clé, ses mesures, ses colonnes masquées et sa date par défaut), les relations sur des paires de colonnes, et un modèle rempli depuis un préréglage de l'assistant de création d'écran."
keywords: [Liberty Next, explorateur de données, Paramètres Explorateur, modèle, pivot, entité, cardinalité, mesure, relation, jointure, préréglage, assistant de création d'écran]
---

# Construire un modèle

Un modèle indique à l'explorateur ce qu'un utilisateur peut analyser et comment les tables se rejoignent. Un superutilisateur le construit dans **Liberty Next → Analyse → Explorateur**, sans SQL : chaque entité lit une requête existante d'un connecteur, et les colonnes se déduisent du résultat de cette requête.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 546" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="502" rx="14" fill="url(#exm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">◎</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur</text>
  <rect x="947" y="31" width="133" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1013.5" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger la config</text>
  <rect x="859" y="31" width="80" height="22" rx="5" fill="url(#exm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="899.0" y="45.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="718" y="31" width="133" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="784.5" y="45.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Supprimer le modèle</text>
  <rect x="587" y="31" width="123" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="648.5" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un modèle</text>
  <line x1="221" y1="64" x2="1099" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="90" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">App :</text>
  <rect x="272" y="78" width="33" height="20" rx="10.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="288.5" y="91.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="311" y="78" width="43" height="20" rx="10.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="332.5" y="91.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="360" y="78" width="118" height="20" rx="10.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="419.0" y="91.2" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une portée</text>
  <text x="240" y="124" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Modèle</text>
  <rect x="286" y="110" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="296" y="124.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">pipeline  Pipeline CRM                ▾</text>
  <rect x="240" y="146" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="301.0" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une entité</text>
  <rect x="370" y="146" width="132" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="436.0" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇔ Ajouter une relation</text>
  <text x="810" y="160" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">5 entité(s) · 3 relation(s) · 1 non reliée(s) au pivot</text>
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
  <text x="263" y="317" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Activités</text>
  <text x="263" y="331" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm.activities_get · Key: ID</text>
  <rect x="462" y="286" width="128" height="54" rx="9" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="471" y="302" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">☆</text>
  <text x="484" y="302" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">deals</text>
  <rect x="545.6" y="292" width="40" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="565.6" y="302.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Pivot</text>
  <text x="471" y="317" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="471" y="331" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm.deals_get · Key: ID</text>
  <rect x="668" y="240" width="128" height="54" rx="9" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="677" y="256" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">🗄</text>
  <text x="690" y="256" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="756.08" y="246" width="35" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="773.58" y="256.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="677" y="271" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="677" y="285" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm.customers_get · Key: ID</text>
  <rect x="668" y="332" width="128" height="54" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="677" y="348" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">🗄</text>
  <text x="690" y="348" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">owners</text>
  <rect x="756.08" y="338" width="35" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="773.58" y="348.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="677" y="363" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Responsables</text>
  <text x="677" y="377" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm.users_get · Key: ID</text>
  <rect x="388.1" y="323" width="67.8" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="422.0" y="333" fill="#cbd5e1" fontSize="7.5" textAnchor="middle" fontFamily="ui-monospace, monospace">DEAL_ID = ID</text>
  <rect x="597.425" y="285" width="63.15" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="629.0" y="295" fill="#cbd5e1" fontSize="7.5" textAnchor="middle" fontFamily="ui-monospace, monospace">CUSTOMER_I…</text>
  <rect x="595.1" y="331" width="67.8" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="629.0" y="341" fill="#cbd5e1" fontSize="7.5" textAnchor="middle" fontFamily="ui-monospace, monospace">OWNER_ID = …</text>
  <text x="258" y="418" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NON RELIÉES AU PIVOT</text>
  <rect x="258" y="428" width="128" height="54" rx="9" fill="#0d1220" stroke="rgba(255,159,10,0.6)" strokeWidth="1.2"/>
  <text x="267" y="444" fill="#fb923c" fontSize="9" fontFamily="system-ui, sans-serif">🗄</text>
  <text x="280" y="444" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">products</text>
  <rect x="346.08" y="434" width="35" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="363.58" y="444.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="267" y="459" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Produits</text>
  <text x="267" y="473" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm.products_get · Key: ID</text>
  <rect x="824" y="146" width="256" height="360" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="834" y="156" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="873.0" y="170.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">← pipeline</text>
  <text x="922" y="171" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">🗄</text>
  <text x="936" y="171" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="1038" y="159" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="1055.5" y="170.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <line x1="825" y1="188" x2="1079" y2="188" stroke="#1f2937" strokeWidth="1"/>
  <text x="836" y="208" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Libellé</text>
  <text x="886" y="208" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="836" y="225" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Requête</text>
  <text x="886" y="225" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  <text x="836" y="242" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Clé</text>
  <text x="886" y="242" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ID</text>
  <rect x="836" y="252" width="72" height="22" rx="5" fill="url(#exm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="872.0" y="266.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier</text>
  <rect x="914" y="252" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="972.5" y="266.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">☆ En faire le pivot</text>
  <rect x="836" y="280" width="77" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="874.5" y="294.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Supprimer</text>
  <text x="836" y="324" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RELATIONS</text>
  <rect x="836" y="332" width="232" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="844" y="347" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">⇔  deals</text>
  <text x="904" y="347" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">CUSTOMER_ID = ID</text>
  <rect x="836" y="364" width="132" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="902.0" y="378.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une relation</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une application à la fois</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Ajouter : un connecteur SQL</text>
  <line x1="200" y1="93.0" x2="272" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="20" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choix du modèle</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plusieurs modèles par app</text>
  <line x1="200" y1="149.0" x2="286" y2="121" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le pivot</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">détails à gauche, dimensions à droite</text>
  <line x1="200" y1="217.0" x2="482" y2="286" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Non reliée au pivot</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">inutilisable par une analyse</text>
  <line x1="200" y1="457.0" x2="258" y2="448" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="1140" y="30" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons de l'en-tête</text>
  <text x="1150" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modèle : ajouter, supprimer…</text>
  <line x1="1140" y1="47.0" x2="1080" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="1140" y="120" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur un lien</text>
  <text x="1150" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modifie ses paires de colonnes</text>
  <line x1="1140" y1="137.0" x2="629.0" y2="292" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="1140" y="230" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Entité choisie</text>
  <text x="1150" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qu'elle lit, ses relations</text>
  <line x1="1140" y1="247.0" x2="1010" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
</svg>

---

## L'application et le modèle \{#app-model\}

1. **App** — les pastilles du haut listent les applications qui ont déjà un modèle ; **Ajouter une portée** ouvre *Ajouter une app*, qui propose les connecteurs SQL qui n'en ont pas.
2. **Modèle** — choisir un modèle de l'application, ou **Ajouter un modèle** et saisir son identifiant (lettres, chiffres, `_` et `-`). Une application peut avoir plusieurs modèles : des tables sans lien entre elles font l'objet de modèles distincts. **Supprimer le modèle** le retire avec ses entités et ses relations.
3. L'en-tête du modèle :

| Champ | Usage |
|---|---|
| **Libellé** | Le nom affiché dans le sélecteur de modèle de l'explorateur. |
| **Pivot** | L'entité de départ de chaque analyse : une table de faits, un en-tête de document, des lignes de document. |
| **Description** | Affichée sous le titre de l'explorateur. |
| **Préréglage (assistant écran)** | Remplit le modèle depuis un préréglage — voir [plus bas](#preset). |

**Enregistrer** écrit le modèle et le recharge : l'explorateur le voit aussitôt. Un modèle sans entité est refusé, avec son nom — *Non enregistré : ces modèles n'ont encore aucune entité — crm · deals. Ajoutez une entité (ou appliquez un préréglage), ou supprimez le modèle.* —, sauf s'il désigne un préréglage : il est alors conservé, rempli à partir du préréglage à la première utilisation, et la page le dessine en proposant de le remplir.

---

## Le modèle en schéma \{#diagram\}

Dans **Analyse → Explorateur**, un modèle est dessiné : le **pivot**, les entités qu'il atteint, placées selon leur distance — les détails (plusieurs lignes par ligne du pivot) à sa gauche, ce dont une ligne du pivot n'a qu'un exemplaire à sa droite —, et chaque relation sous la forme d'un trait portant les colonnes de jointure. Au-dessus du schéma figurent **Ajouter une entité**, **Ajouter une relation** et un décompte, *N entité(s) · N relation(s)*, complété par les entités non reliées au pivot et les relations sans colonnes s'il y en a. Le schéma se zoome avec **−** / **+**. À part, en orange : les entités **non reliées au pivot** — une analyse ne peut pas les utiliser — et les relations qui n'ont *pas encore de paire de colonnes*. La disposition se calcule à partir du modèle ; rien n'est placé à la main.

| Clic | Le panneau latéral affiche |
|---|---|
| Rien | Les réglages du modèle : **Libellé**, **Pivot**, **Description**, **Préréglage (assistant écran)**. |
| Une entité | Ce qu'elle est — sa requête ou sa table, sa clé, ses mesures, sa date par défaut — et ses relations, avec **Modifier**, **En faire le pivot**, **Supprimer**, et **Ajouter une relation** à partir d'elle. Une relation de la liste s'ouvre d'un clic ; le bouton du haut ramène en arrière. |
| Un trait | La relation : ses deux entités, ses paires de colonnes (**Jointe sur**) et **Supprimer cette relation**. |

Un modèle vide se commence **À partir d'un modèle prêt à l'emploi** — un préréglage — ou **À la main**. **Ajouter un modèle**, **Supprimer le modèle** et **Enregistrer** se trouvent dans l'en-tête de la page.

---

## Entités \{#entities\}

**Ajouter une entité** (ou un clic sur une entité) ouvre son formulaire :

<svg viewBox="0 0 1200 504" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="470" rx="14" fill="url(#exe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Entité · deals</text>
  <rect x="916" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="927.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <rect x="942" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="221" y1="62" x2="979" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="240" y="86" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#475569" fontSize="9.5" fontFamily="ui-monospace, monospace">deals</text>
  <text x="482" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <rect x="482" y="86" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="724" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES PAR LIGNE DU PIVOT</text>
  <rect x="724" y="86" width="178" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="725" y="87" width="72" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="761.0" y="100.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1 · une</text>
  <line x1="798" y1="91" x2="798" y2="103" stroke="#334155" strokeWidth="1"/>
  <text x="850.0" y="100.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n · plusieurs</text>
  <text x="240" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="240" y="130" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="144.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="240" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="240" y="174" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="188.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">                                                                ▾</text>
  <text x="482" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTE</text>
  <rect x="482" y="174" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="188.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">deals_get  DEALS                  ▾</text>
  <text x="724" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCRAN (INDICATIONS DE COLONNES)</text>
  <rect x="724" y="174" width="236" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="734" y="188.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires                                ▾</text>
  <text x="240" y="212" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE PAR DÉFAUT</text>
  <rect x="240" y="218" width="360" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="232.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">CLOSE_DATE                                                    ▾</text>
  <text x="240" y="260" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNES</text>
  <rect x="240" y="268" width="720" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE</text>
  <text x="400" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <text x="520" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="650" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLÉ</text>
  <text x="710" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESURE</text>
  <text x="860" y="284" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MASQUÉE</text>
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
  <text x="400" y="341" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Étape</text>
  <text x="520" y="341" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">varchar</text>
  <rect x="652" y="333" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="669" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="710" y="328" width="136" height="19" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="720" y="341.0" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">— dimension —              ▾</text>
  <rect x="862" y="333" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="879" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="240" y1="378" x2="960" y2="378" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="369" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">AMOUNT</text>
  <text x="400" y="369" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Montant</text>
  <text x="520" y="369" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">number · decimal</text>
  <rect x="652" y="361" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="669" y="370" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="710" y="356" width="136" height="19" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="720" y="369.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sum              ▾</text>
  <rect x="862" y="361" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="879" y="370" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="240" y1="406" x2="960" y2="406" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="397" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CLOSE_DATE</text>
  <text x="400" y="397" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Date de clôture</text>
  <text x="520" y="397" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">date · date</text>
  <rect x="652" y="389" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="669" y="398" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="710" y="384" width="136" height="19" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="720" y="397.0" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">— dimension —              ▾</text>
  <rect x="862" y="389" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="879" y="398" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="240" y1="434" x2="960" y2="434" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="425" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="400" y="425" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Client</text>
  <text x="520" y="425" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">number · integer</text>
  <rect x="652" y="417" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="669" y="426" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="710" y="412" width="136" height="19" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="720" y="425.0" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">— dimension —              ▾</text>
  <rect x="862" y="417" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M864.5,422.5 L866.8,424.8 L870.8,420" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="879" y="426" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="221" y1="446" x2="979" y2="446" stroke="#1f2937" strokeWidth="1"/>
  <rect x="870" y="456" width="90" height="22" rx="5" fill="url(#exe-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="915.0" y="470.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="800" y="456" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="831.0" y="470.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fixé à la création</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'identifiant de l'entité</text>
  <line x1="200" y1="97.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requête, table ou point d'accès</text>
  <line x1="200" y1="177.0" x2="482" y2="185" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes découvertes</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la requête lit une ligne</text>
  <line x1="200" y1="277.0" x2="250" y2="312" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cardinalité</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes par ligne du pivot</text>
  <line x1="1000" y1="97.0" x2="902" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Indications d'écran</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellés, formats, listes</text>
  <line x1="1000" y1="177.0" x2="960" y2="185" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mesure</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son agrégat par défaut</text>
  <line x1="1000" y1="307.0" x2="846" y2="365" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Masquée</text>
  <text x="1010" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">absente du volet des champs</text>
  <line x1="1000" y1="397.0" x2="876" y2="421" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
</svg>

| Champ | Usage |
|---|---|
| **Id** | L'identifiant de l'entité, figé après création (`deals`, `customers`). |
| **Libellé** | Le nom du groupe dans le volet des champs. |
| **Lignes par ligne du pivot** | **1..1 · une** — au plus une ligne par ligne du pivot (le client d'une affaire) ; **1..n · plusieurs** — plusieurs lignes (les activités d'une affaire). Le pivot est toujours en 1..1. |
| **Description** | Texte libre. |
| **Connecteur** | Le connecteur de la requête ; par défaut, celui de l'application. La liste contient les connecteurs SQL et les connecteurs API qui ont un point d'accès renvoyant des lignes, affichés `nom (API)` — voir [plus bas](#api-entity). |
| **Requête** | Une requête SELECT de ce connecteur — ou, sur un connecteur API, un de ses points d'accès qui renvoient des lignes. Ses colonnes se découvrent en l'exécutant sur une ligne. Une entité remplie depuis un préréglage lit directement sa table : le champ affiche alors **Table**, non modifiable. |
| **Écran (indications de colonnes)** | Un écran dont les réglages de colonnes fournissent libellés, formats et listes de valeurs. Les écrans qui lisent la même requête apparaissent en tête. L'entité ouvre une ligne dans la fiche de cet écran : **Déployer → Intégrité** compte donc l'écran comme atteint, même si aucune entrée de menu n'y mène. |
| **Date par défaut** | Le champ date auquel la période s'applique en premier. |
| **Valeurs fixes des paramètres de la requête** | Présent quand la requête attend des paramètres — ceux qu'elle déclare et les variables de son instruction —, un champ par paramètre : la valeur saisie sert à toutes les analyses. Un paramètre laissé vide n'est pas envoyé. |
| **Garder cette entité telle quelle à la mise à jour** | Une mise à jour de l'application laisse alors l'entité telle qu'enregistrée ici. |

Le tableau **Colonnes** liste les colonnes découvertes, avec le libellé et le type fournis par l'écran. Pour chacune :

- **Clé** — les colonnes qui identifient une ligne. Une nouvelle entité reprend les colonnes clés de l'écran. La clé permet d'ouvrir une ligne dans le dialogue de son écran depuis la vue détail.
- **Mesure** — une colonne numérique à additionner, moyenner, compter… : choisir son agrégat par défaut (`sum`, `avg`, `min`, `max`, `count`, `count_distinct`). Laissée sur *— dimension —*, la colonne sert aux regroupements et aux filtres.
- **Masquée** — absente du volet des champs. Une colonne masquée par l'écran le reste.

Une colonne que la requête ne renvoie plus porte un **?**, pour pouvoir la décocher.

### Ce qu'une colonne devient pour l'utilisateur \{#fields\}

Chaque colonne devient un **champ** du volet, libellé et formaté par le dictionnaire et l'écran, typé en texte, nombre, date, date-heure ou oui/non. Une colonne dotée d'une liste de valeurs (une énumération ou une liste de recherche dans l'écran) affiche ses libellés et propose ses valeurs dans les filtres. Une colonne déclarée comme mesure mais non numérique reste une dimension, et le modèle le signale aux superutilisateurs.

### Une entité lue sur un point d'accès d'API \{#api-entity\}

Une entité peut aussi lire un point d'accès d'un connecteur API — un point d'accès qui renvoie des lignes, tel qu'un écran le lit. Elle se choisit dans le formulaire d'entité : le connecteur API dans **Connecteur** — affiché `nom (API)` s'il a un point d'accès qui renvoie des lignes —, le point d'accès dans **Requête** ; elle figure ensuite sur le schéma comme les autres. Ses champs se déduisent des colonnes du point d'accès et prennent les libellés du dictionnaire ; l'explorateur lit les lignes dans le périmètre de données de l'utilisateur, puis les filtre, les regroupe, les agrège, les trie et les pagine lui-même : analyses, tableaux de bord, exports et assistant fonctionnent sans changement. Un filtre `=` sur un champ qui est aussi un paramètre du point d'accès est transmis au point d'accès.

Une telle entité ne se joint à aucune autre et n'accepte pas de champ calculé : les deux sont refusés, avec le motif. Chaque requête appelle le point d'accès, dans la limite de 50 000 lignes.

---

## Relations \{#relations\}

Une relation relie deux entités sur une ou plusieurs **paires de colonnes** : `customers` → `deals` sur `ID = CUSTOMER_ID`. **Ajouter une relation** — au-dessus du schéma ou dans le panneau d'une entité — en ajoute une et l'ouvre dans le panneau latéral : choisir les deux entités, puis les colonnes sous **Jointe sur** (les listes proposent les colonnes de chaque entité ; un nom peut aussi se saisir) ; **+** ajoute une paire pour une clé composée. **Supprimer cette relation** la retire.

Chaque entité doit rejoindre le pivot, directement ou par d'autres entités. L'explorateur choisit ensuite les jointures utiles à chaque analyse, sans jamais multiplier les lignes deux fois : une analyse regroupe sur une seule entité 1..n au plus, et les autres sont atteintes sans dupliquer les lignes du pivot.

---

## Un modèle depuis un préréglage \{#preset\}

Un préréglage de l'assistant de création d'écran déclare déjà un ensemble de tables et leurs jointures. Le choisir dans **Préréglage (assistant écran)** remplit le modèle :

- chaque table du préréglage devient une entité (toutes ses colonnes, ou la liste de colonnes du préréglage), la table de base devient le pivot ;
- les jointures deviennent des relations, posées sur les colonnes réelles — la colonne de ce nom, celle qui porte cet élément du dictionnaire ou, sur un connecteur à préfixe de table (JD Edwards EnterpriseOne : `ABAN8`, `WWAN8`), celle dont le nom sans préfixe correspond à l'élément.

Les entités déjà déclarées sont conservées et complétées ; une clé, des mesures, une date par défaut ou une cardinalité réglées à la main restent en place. Il reste à ajuster ce qui doit l'être, puis **Enregistrer**. Choisir de nouveau le préréglage remplit encore le modèle.

L'application du préréglage crée aussi les entrées de dictionnaire qui manquent à ses tables — sur une source JD Edwards, à partir de son dictionnaire de données : *Préréglage appliqué : 6 entités · 42 entrées de dictionnaire créées*.

### Modèles fournis par un préréglage \{#shipped\}

Un préréglage peut aussi fournir **de lui-même** un modèle à l'explorateur : les préréglages *complets* des catalogues JD Edwards (carnet d'adresses, grand livre fournisseurs, commande client, ordre de fabrication…) figurent dans le sélecteur de modèle sans rien déclarer dans Liberty Next → Analyse → Explorateur. Dans le sélecteur de modèle, les modèles sont groupés par domaine — *JDE · Accounts Payable*, *JDE · Sales* —, les autres par application. Le modèle est construit à partir du préréglage à sa première ouverture ; l'en-tête de la page indique *fourni par le préréglage « … »*. Dans un tel préréglage, le libellé d'une table devient celui de l'entité, et une table de référence jointe à un pivot transactionnel a la cardinalité *une ligne*.

Pour modifier un tel modèle, ajouter un modèle dans Liberty Next → Analyse → Explorateur à partir du même préréglage : le modèle déclaré remplace le modèle fourni.

---

## Points d'attention

| Situation | Effet | Solution |
|---|---|---|
| Une entité n'est pas reliée au pivot. | L'enregistrement est refusé, avec le nom des entités isolées. | Ajouter la relation manquante. |
| La requête de l'entité attend des paramètres. | L'explorateur envoie les valeurs fixes saisies dans le formulaire d'entité ; un paramètre laissé vide n'est pas envoyé. | Renseigner **Valeurs fixes des paramètres de la requête**, ou rattacher l'entité à une requête sans paramètre. |
| **Enregistrer** signale un modèle sans entité. | Un modèle sans entité ni préréglage ne peut être lu par personne. | Ajouter une entité, appliquer un préréglage ou supprimer le modèle. |
| Aucune colonne découverte. | La requête a échoué ou n'a rien renvoyé. | Vérifier la requête dans Liberty Next → Données → Connecteurs. |
| Un champ manque dans le volet. | Il est masqué, ou la requête ne le renvoie pas. | Décocher **Masquée**, ou ajouter la colonne à la requête. |
| Des champs affichent leur nom de colonne brut. | Ces colonnes n'ont pas d'entrée de dictionnaire. | Sur la page de l'explorateur, un superutilisateur voit *N colonne(s) sans entrée de dictionnaire affichent leur nom de colonne* et **Créer les entrées depuis le dictionnaire de données** les crée en un clic. |

## Pour aller plus loin

- [Analyser les données](./analysis.md) — ce que les utilisateurs font du modèle.
- [Rôles et permissions](../build/secure/roles-and-permissions.md#access) — donner accès à un modèle.
