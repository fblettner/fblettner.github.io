---
title: Déclaration de TVA
description: "Agrège chaque facture d'une période sur les lignes du formulaire CA3 — ventes / achats × France / intra-UE / hors UE × taux de TVA × type de facture — avec dépliement par paliers jusqu'aux factures individuelles derrière chaque montant, et exports en un clic vers Excel ou PDF au format CA3."
keywords: [NomaUBL, déclaration de TVA, CA3, Cerfa 3310-CA3, TVA française, intra-UE, hors UE, B2B, B2C, B2BINT, B2G, base imposable, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Déclaration de TVA

L'écran **Déclaration de TVA** agrège chaque facture comptabilisée sur une période sur les lignes du formulaire **CA3** français — ventes / achats × France / intra-UE / hors UE × taux de TVA × type de facture. Chaque taux se déplie en types d'opération puis en factures individuelles ; le résultat s'exporte vers Excel pour la comptabilité ou vers un PDF au format CA3, prêt à être transmis au comptable.

Utilisez cette page quand :

- vous préparez la déclaration de TVA mensuelle ou trimestrielle et voulez une synthèse au format CA3, construite directement à partir des factures déjà dans la plateforme ;
- vous devez rapprocher une ligne CA3 des factures qui la composent — quels clients, quels numéros, quels montants ;
- vous voulez une synthèse imprimable de la période à joindre au dossier comptable.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Le filtre de période s'applique à la **date d'émission de la facture** — celle imprimée sur la facture elle-même — donc la période reste stable même si les données sous-jacentes sont reconstruites plus tard.

La matrice est servie depuis les lignes de détail TVA enregistrées (`F564234`), sans relecture de chaque UBL à chaque chargement — la page s'ouvre donc en **quelques secondes que la période contienne 2 000 ou 200 000 factures**. Pour conserver ce comportement, laissez *Enregistrer les détails TVA* activé sous *Paramètres → Connecteurs → db-nomaubl → Tables* — voir [Stockage des détails](../configuration/database-connectors/nomaubl.md#stockage-des-détails).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="vat-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="vat-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="vat-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="vat-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="430" rx="14" fill="url(#vat-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Déclaration de TVA</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">La TVA d'une période au format de la CA3 : collectée, déductible et nette, par sens, zone et taux.</text>
  <rect x="240" y="82" width="120" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="83" width="44" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263.0" y="97.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Mois</text>
  <line x1="286" y1="87" x2="286" y2="101" stroke="#334155" strokeWidth="1"/>
  <text x="323.0" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Trimestre</text>
  <rect x="368" y="83" width="55" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="378" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">2026 ▾</text>
  <rect x="431" y="83" width="83" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="441" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">septembre ▾</text>
  <rect x="522" y="83" width="139" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="532" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Toutes les sociétés ▾</text>
  <rect x="673" y="89" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M675.5,94.5 L677.8,96.8 L681.8,92" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="690" y="98" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Exclure refusées et rejetées</text>
  <rect x="843.12" y="89" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="860.12" y="98" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Exclure les factures non parvenues à la plateforme</text>
  <rect x="976" y="112" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1002.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="1036" y="112" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1058.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <text x="240" y="126" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">1 sept. 2026 – 30 sept. 2026</text>
  <text x="390" y="126" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">comparé au 1 août 2026 – 31 août 2026</text>
  <rect x="240.0" y="138" width="273.3333333333333" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="156" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TVA COLLECTÉE</text>
  <text x="252.0" y="180" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">250 631,56 €</text>
  <text x="252.0" y="195" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1 253 157,80 € HT · 2 361 factures</text>
  <text x="252.0" y="208" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">+4,2 % contre 240 524,10 €</text>
  <rect x="523.3333333333333" y="138" width="273.3333333333333" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="535.3333333333333" y="156" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TVA DÉDUCTIBLE</text>
  <text x="535.3333333333333" y="180" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">98 412,30 €</text>
  <text x="535.3333333333333" y="195" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">492 061,50 € HT · 418 factures</text>
  <text x="535.3333333333333" y="208" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">−1,8 % contre 100 216,00 €</text>
  <rect x="806.6666666666666" y="138" width="273.3333333333333" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="818.6666666666666" y="156" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TVA À PAYER</text>
  <text x="818.6666666666666" y="180" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">152 219,26 €</text>
  <text x="818.6666666666666" y="195" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Collectée − déductible</text>
  <text x="818.6666666666666" y="208" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">+8,6 % contre 140 308,10 €</text>
  <rect x="240" y="230" width="840" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="245.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNE</text>
  <text x="720" y="245.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE HT</text>
  <text x="860" y="245.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TVA</text>
  <text x="1000" y="245.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FACTURES</text>
  <rect x="240" y="258" width="840" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Ventes (TVA collectée)</text>
  <text x="720" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 253 157,80</text>
  <text x="860" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">250 631,56</text>
  <text x="1000" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 361</text>
  <rect x="240" y="284" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="298.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">   France</text>
  <text x="720" y="298.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 101 840,00</text>
  <text x="860" y="298.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">220 368,00</text>
  <text x="1000" y="298.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 102</text>
  <rect x="240" y="310" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="324.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">      ▸ 20 %</text>
  <text x="720" y="324.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 080 000,00</text>
  <text x="860" y="324.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">216 000,00</text>
  <text x="1000" y="324.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 050</text>
  <rect x="240" y="336" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="350.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">      ▸ 10 %</text>
  <text x="720" y="350.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">21 840,00</text>
  <text x="860" y="350.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 184,00</text>
  <text x="1000" y="350.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">52</text>
  <rect x="240" y="362" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="376.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">   Intra-UE</text>
  <text x="720" y="376.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">151 317,80</text>
  <text x="860" y="376.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">30 263,56</text>
  <text x="1000" y="376.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">259</text>
  <rect x="240" y="388" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="402.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Achats (TVA déductible)</text>
  <text x="720" y="402.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">492 061,50</text>
  <text x="860" y="402.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">98 412,30</text>
  <text x="1000" y="402.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">418</text>
  <rect x="240" y="414" width="840" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="428.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">TVA à payer — Collectée − déductible</text>
  <text x="720" y="428.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="860" y="428.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">152 219,26</text>
  <text x="1000" y="428.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="78" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="93" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mois ou trimestre</text>
  <text x="30" y="106" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dernier mois complet par défaut</text>
  <line x1="200" y1="95.0" x2="240" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois indicateurs</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vs mois ou trimestre précédent</text>
  <line x1="200" y1="177.0" x2="240" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sens, zone, taux</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">totaux sur chaque ligne</text>
  <line x1="200" y1="277.0" x2="250" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">TVA nette</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à payer ou crédit</text>
  <line x1="200" y1="417.0" x2="250" y2="426" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="1120" y="52" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="67" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Société</text>
  <text x="1130" y="80" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">depuis la liste des sociétés</text>
  <line x1="1120" y1="69.0" x2="582" y2="82" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="1120" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux exclusions</text>
  <text x="1130" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">expliquées au survol</text>
  <line x1="1120" y1="113.0" x2="1038.1200000000001" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel et PDF</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">synthèse + détail · CA3</text>
  <line x1="1120" y1="177.0" x2="1080" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
  <rect x="1120" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un taux se déplie</text>
  <text x="1130" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en types, puis en factures</text>
  <line x1="1120" y1="307.0" x2="280" y2="325" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-arrow)"/>
</svg>

---

## Barre de filtres

Une seule barre règle la période, la société et les deux exclusions, comme sur les tableaux de bord.

| Contrôle | Effet |
|---|---|
| **Mois / Trimestre** | Déclaration mensuelle ou trimestrielle. La page s'ouvre sur le **mois complet précédent** — celui que l'on déclare. |
| **Année** et **mois** / **trimestre** | La période : l'année en cours et les cinq précédentes ; un nom de mois, ou `T1` à `T4`. L'indication sous la barre donne les dates et la période précédente utilisée pour les écarts (*comparé au …*). La période s'applique à la **date d'émission de la facture** : elle reste stable même si les données sont reconstruites plus tard. |
| **Société** | Une liste des sociétés (la [liste personnalisée](../configuration/custom-lists.md#ready-made-lists) `list-companies`) ; *Toutes les sociétés* par défaut. |
| **Exclure refusées et rejetées** | Activé par défaut. Les factures refusées (`210`) ou rejetées (`213`) appellent un avoir interne : activé, toutes sont exclues ; désactivé, seulement celles marquées vues par le service client — voir [Factures écartées](#excluded-invoices). L'explication s'affiche au survol. |
| **Exclure les factures non parvenues à la plateforme** | Désactivé par défaut. Écarte aussi les factures à envoyer dont le statut est encore interne : échec de validation, d'envoi ou d'import, ou pas encore envoyées. |
| **Excel** | Télécharge le classeur décrit dans [Export Excel](#export-excel). |
| **PDF** | Télécharge la synthèse au format CA3 décrite dans [Export PDF — mise en page CA3](#export-pdf--mise-en-page-ca3). |

---

## Chiffres clés

| Chiffre | Valeur | Ligne de détail |
|---|---|---|
| **TVA collectée** | TVA des ventes. | Base HT et nombre de factures. |
| **TVA déductible** | TVA des achats. | Base HT et nombre de factures. |
| **TVA à payer** / **Crédit de TVA** | Collectée moins déductible ; affichée *Crédit de TVA*, en vert, quand elle est négative. | *Collectée − déductible*. |

Sous chaque chiffre, l'écart au mois ou au trimestre précédent (`+4,2 %`) et le montant précédent (`contre …`), calculés avec la même société et les mêmes exclusions.

---

## Factures écartées \{#excluded-invoices\}

La déclaration retient les factures émises sur la période, à l'exception de :

| Cas | Écartée quand |
|---|---|
| Refusée par l'acheteur (`210`) ou rejetée par la plateforme (`213`) | *Exclure toutes les refusées et rejetées* est cochée (défaut) — ou, décochée, une fois que le service client a marqué la facture comme vue dans sa fenêtre, l'avoir interne étant fait. |
| À envoyer, jamais parvenue à la plateforme | *Exclure les factures à envoyer non parvenues à la plateforme* est cochée : la facture est à envoyer et son statut est encore interne (`99xx` autre que `9906`, en attente sur la plateforme, et `9911`, export validé). |

Les deux règles s'appliquent à la matrice, au détail, à l'export Excel et au PDF, dont le pied de page rappelle les règles appliquées. Par l'API, les mêmes choix passent par les paramètres `excludeMode` (`all` ou `reviewed`) et `excludeUnsent`.

---

## La matrice CA3

Le tableau se lit par **sens**, puis par **zone**, puis par **taux** :

| Ligne | Contenu |
|---|---|
| **Ventes (TVA collectée)** / **Achats (TVA déductible)** | Le sens avec ses totaux — base HT, TVA et nombre de factures. Les ventes d'abord ; un sens sans facture n'est pas affiché. |
| **France**, **Intra-UE**, **Hors UE** | Chaque zone une fois, avec son sous-total. |
| **Taux** (`20 %`, `10 %`…, *Sans taux*) | Une ligne par taux présent dans la zone, du plus élevé au plus faible, repliée. Sa flèche ouvre une ligne par routage BAR (`B2B`, `B2C`, `B2BINT`, `B2G`…), dont la flèche ouvre les factures — document, type, société, base et TVA, jusqu'à **200 lignes** (l'export Excel contient la liste complète). |
| **TVA à payer** / **Crédit de TVA** | La TVA nette de la période, *Collectée − déductible*. |

Les montants ne renvoient pas à la [liste des factures](./invoices.md), qui ne sait filtrer ni par taux de TVA ni selon les deux exclusions : les factures d'un chiffre se lisent en dépliant ses lignes de taux et de routage, ou dans la feuille *Détails* de l'export Excel. Montants, taux et pourcentages suivent le format numérique de la langue de l'interface.

### Règles de classement par zone

Le classement utilise le **pays de la contrepartie** capturé sur chaque facture à l'insertion (pays de l'acheteur pour les ventes, du fournisseur pour les achats) et le sens *Ventes / Achats* enregistré sur la facture (`UHDRIN`).

| Zone | Ventes (émises) | Achats (reçues) |
|---|---|---|
| **France** | Pays de l'acheteur = `FR`, ou inconnu. | Pays du fournisseur = `FR`, ou inconnu. |
| **Intra-UE** | Pays de l'acheteur dans les 26 autres États membres de l'UE. | Pays du fournisseur dans les 26 autres États membres de l'UE. |
| **Hors UE** | Tout autre pays. | Tout autre pays. |

Les taux roulés sous *Ventes intra-UE* et *Ventes hors UE* apparaissent en exonéré (`—`) — ils ne contribuent pas à la colonne TVA, seulement à la base imposable. Les *Acquisitions intra-UE* côté Achats portent une TVA autoliquidée et contribuent à la fois à la base imposable et au montant de TVA.

---

## Quand la matrice est vide

Si la base ne contient encore aucune ligne de détail TVA (`F564234`) pour la période sélectionnée — typiquement juste après l'activation de *Enregistrer les détails TVA*, avant qu'une reconstruction historique n'ait eu lieu — la page n'affiche plus de matrice vide trompeuse. Elle affiche la commande exacte à exécuter, avec les dates de la période sélectionnée déjà pré-remplies :

<div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,159,10,0.04)', padding: '20px 24px'}}>
  <div style={{fontSize: '13px', fontWeight: 700, color: '#fb923c', marginBottom: '6px'}}>⚠ Pas de détails TVA pour Avril 2026</div>
  <div style={{fontSize: '12px', opacity: 0.85, marginBottom: '14px', lineHeight: 1.55}}>La base ne contient aucune ligne de détail TVA pour cette période. Lancez la commande de reconstruction une fois, puis rouvrez la page :</div>
  <div style={{fontFamily: 'ui-monospace, monospace', fontSize: '12px', padding: '12px 14px', background: 'rgba(0,0,0,0.35)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)'}}>./nomaubl.sh backfill-vat prod 2026-04-01 2026-04-30</div>
  <div style={{fontSize: '11px', opacity: 0.65, marginTop: '10px', fontStyle: 'italic'}}>Relançable sans risque sur la même période, sans créer de doublons.</div>
</div>

La commande est documentée sous [Ligne de commande → `backfill-vat`](../management/command-line.md#backfill-vat). Une fois la reconstruction faite, rouvrez la page TVA — la matrice se remplit comme attendu.

Une erreur côté serveur — une erreur de base de données, par exemple — ne s'affiche jamais comme une période vide : la page indique le message d'erreur, qui est aussi écrit dans le journal serveur.

---

## Export Excel

Le bouton **Excel** télécharge `vat-declaration-<début>-<fin>.xlsx`, un classeur à deux feuilles :

| Feuille | Contenu |
|---|---|
| **Synthèse** | Reprend la matrice à l'écran — ventes / achats × zone × taux × type — avec sous-totaux par zone et par sens. |
| **Détails** | Une ligne par facture qui contribue à la période : numéro, type, société, nom de la contrepartie, pays de la contrepartie, routage BAR, base imposable, montant de TVA, devise, date d'émission. |

Les cellules de montant sont des nombres réels, pas du texte — totaux, tableaux croisés et formules Excel en aval fonctionnent sans retraitement.

---

## Export PDF — mise en page CA3

Le bouton **PDF** télécharge une synthèse d'une page reprenant la mise en page du formulaire officiel **Cerfa 3310-CA3** (`vat-declaration-<début>-<fin>.pdf`), prête à être archivée avec le reste de la liasse comptable sans ressaisie. Le PDF est en français quelle que soit la langue de l'interface, avec les formats français : montants `125 315,78`, taux `5,5 %`, période `01/09/2026 – 30/09/2026`. Son pied de page rappelle les règles d'exclusion appliquées.

| Bloc | Lignes CA3 |
|---|---|
| **Section A — Opérations réalisées** | Ligne **01** (ventes soumises à TVA), **03** (acquisitions intra-UE), **04** (exportations hors UE), **06** (livraisons intra-UE), **7B** (achats de biens et services hors UE). |
| **Section B — TVA brute puis déductible** | Une ligne par taux applicable : **08** (20 %), **9B** (10 %), **09** (5,5 %), **10** (2,1 %) et **14** (autres taux), avec total **16**. Puis **20** (TVA déductible sur biens et services) et total **23**. |
| **Solde** | Soit **28** (*TVA à payer*) quand la période se solde en débit, soit **32** (*crédit*) quand la TVA déductible dépasse la TVA collectée. |

Le PDF est une synthèse imprimable — il ne remplace pas le dépôt sur le portail de la DGFiP.

---

## Note sur les données existantes

Les factures créées avant cette version n'ont pas de pays de contrepartie renseigné. Elles sont classées en **France** par défaut tant que la facture sous-jacente n'a pas été retraitée (pour que le pays soit capturé depuis le document UBL et enregistré). Toute nouvelle facture est désormais créée avec le bon pays.

Si une facture intra-UE ou hors UE apparaît encore sous *France*, la relancer depuis la [liste Factures](./invoices.md) (Modifier → Enregistrer, ou un nouveau Traiter depuis [Synchronisation → Fetch Input](../sync/fetch-input.md)) rafraîchit le pays.
