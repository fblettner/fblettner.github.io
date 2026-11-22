---
title: Tableaux de bord
description: "Les tableaux de bord de Liberty Next : indicateurs, chiffres, listes de décisions, barres de proportion, graphiques et tableaux sur des requêtes de connecteurs, dans une grille de 12 colonnes, export Excel et PDF, une période avec préréglages et comparaison avec la période précédente, des filtres du dictionnaire, un cache avec Actualiser — construits dans Liberty Next → Analyse → Tableaux de bord et ouverts depuis le menu."
keywords: [Liberty Next, tableau de bord, KPI, indicateur, synthèse, liste, barres, export, Excel, PDF, graphique, table, widget, période, période précédente, compare_previous, PERIOD_FROM, filtres, dashboards.toml, cache]
---

# Tableaux de bord

Un tableau de bord place côte à côte plusieurs **widgets** — chiffres clés, listes de décisions, barres de proportion, graphiques, tableaux — alimentés chacun par une requête d'un connecteur. Il s'ouvre depuis le menu comme un écran, et se construit dans **Liberty Next → Analyse → Tableaux de bord**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dbv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dbv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dbv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dbv-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="436" rx="14" fill="url(#dbv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">▦</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Vue des ventes</text>
  <text x="260" y="62" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Chiffre d'affaires et commandes par société, sur la période</text>
  <line x1="221" y1="76" x2="979" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="88" width="720" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="106" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="254" y="113" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="128.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▤  1 oct. 2026 – 31 oct. 2026  ▾</text>
  <text x="468" y="106" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOCIÉTÉ</text>
  <rect x="468" y="113" width="150" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="478" y="128.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Tous                       ▾</text>
  <text x="946" y="129" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Mis à jour à 14:05</text>
  <rect x="819.28" y="115" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="832.28" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="765.28" y="115" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="788.28" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▯ PDF</text>
  <rect x="705.28" y="115" width="54" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="732.28" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▯ Excel</text>
  <rect x="240.0" y="156" width="232.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="174" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Chiffre d'affaires</text>
  <text x="252.0" y="200" fill="#e2e8f0" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">1 284 500</text>
  <text x="252.0" y="216" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Somme · Chiffre d'affaires</text>
  <text x="252.0" y="233" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">↗ +12,4 %</text>
  <text x="307.36" y="233" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">précédent : 1 142 700</text>
  <rect x="484.0" y="156" width="232.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496.0" y="174" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Commandes</text>
  <text x="496.0" y="200" fill="#e2e8f0" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">3 412</text>
  <text x="496.0" y="216" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Compte · Commande</text>
  <text x="496.0" y="233" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">↘ -3,1 %</text>
  <text x="546.32" y="233" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">précédent : 3 521</text>
  <rect x="728.0" y="156" width="232.0" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="740.0" y="174" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Taux de marge</text>
  <text x="740.0" y="200" fill="#e2e8f0" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">31,2 %</text>
  <text x="740.0" y="216" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Moyenne · Taux de marge</text>
  <text x="740.0" y="233" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">↗ +1,4 pt</text>
  <text x="795.36" y="233" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">précédent : 29,8 %</text>
  <rect x="240" y="256" width="470" height="180" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="276" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffre d'affaires par mois</text>
  <text x="254" y="290" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Facturé, par mois de l'année</text>
  <rect x="278.0" y="349.3" width="42.0" height="60.7" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="299.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <rect x="348.0" y="341.5" width="42.0" height="68.5" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="369.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <rect x="418.0" y="345.4" width="42.0" height="64.6" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="439.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <rect x="488.0" y="327.8" width="42.0" height="82.2" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="509.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <rect x="558.0" y="316.0" width="42.0" height="94.0" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="579.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <rect x="628.0" y="321.9" width="42.0" height="88.1" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="649.0" y="421" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="722" y="256" width="238" height="180" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="736" y="276" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Meilleurs clients</text>
  <text x="736" y="298" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT</text>
  <text x="946" y="298" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="system-ui, sans-serif">CA</text>
  <line x1="732" y1="305" x2="950" y2="305" stroke="#1f2937" strokeWidth="1"/>
  <text x="736" y="320" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="946" y="320" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">212 400</text>
  <line x1="732" y1="331" x2="950" y2="331" stroke="#1f2937" strokeWidth="1"/>
  <text x="736" y="346" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="946" y="346" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">184 900</text>
  <line x1="732" y1="357" x2="950" y2="357" stroke="#1f2937" strokeWidth="1"/>
  <text x="736" y="372" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="946" y="372" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">97 300</text>
  <line x1="732" y1="383" x2="950" y2="383" stroke="#1f2937" strokeWidth="1"/>
  <text x="736" y="398" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Delta</text>
  <text x="946" y="398" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">65 100</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">préréglages, calendrier, base</text>
  <line x1="200" y1="113.0" x2="254" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comparaison</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écart avec la période précédente</text>
  <line x1="200" y1="213.0" x2="254" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Widget Graphique</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un graphique enregistré ou le sien</text>
  <line x1="200" y1="347.0" x2="264" y2="350" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
  <rect x="1000" y="50" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <text x="1010" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une liste par élément du dictionnaire</text>
  <line x1="1000" y1="67.0" x2="550" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export, actualisation</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Excel / PDF · ↻ ignore le cache</text>
  <line x1="1000" y1="177.0" x2="732.28" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Widget Table</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonnes choisies, plafond</text>
  <line x1="1000" y1="347.0" x2="950" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbv-arrow)"/>
</svg>

---

## Widgets \{#widgets\}

Les widgets se placent sur une grille de 12 colonnes, dans leur ordre de déclaration. Chacun occupe une largeur de 1 à 12 colonnes et une hauteur de 1 à 8 lignes, et porte un titre ainsi qu'un **sous-titre** facultatif : une ligne sous le titre qui précise ce que couvre le widget.

| Widget | Affiche | Réglages |
|---|---|---|
| **KPI** | Un chiffre calculé sur toutes les lignes d'une requête. | Connecteur, requête, colonne, agrégation (`count`, `sum`, `avg`, `min`, `max`, ou `none` pour la valeur de la première ligne), format, et **comparaison avec la période précédente**. |
| **Chiffre** | Une carte chiffrée lue sur la **première ligne** de la requête, avec une ligne de détail en dessous. | **Colonne de valeur**, **Format**, **Unité**, **Ligne secondaire**. |
| **Liste** | Une liste de décisions ou un classement : une ligne par enregistrement, avec une pastille de couleur, un titre, un sous-titre, un chiffre et une étiquette. | **Colonne de titre** (obligatoire), **Colonne de sous-titre**, **Colonne de valeur**, format, unité, **Colonne de compte** et **Libellé du compte**, **Colonne de tonalité**, **Colonne d'étiquette**, **Lignes affichées**. |
| **Barres** | Un classement avec une barre de proportion sous chaque ligne. | **Colonne de libellé** et **Colonne de valeur** (obligatoires), **Colonne de sous-libellé**, format, unité, **Barre en part de**, **Note sous les barres**, **Lignes affichées**. |
| **Graphique** | Un graphique en barres, courbes, aires ou secteurs. | Un graphique enregistré dans **Liberty Next → Analyse → Graphiques**, ou un connecteur, une requête et une définition de graphique écrits dans le widget — voir [Graphiques](./charts.md). |
| **Table** | Les lignes d'une requête. | Connecteur, requête, colonnes à afficher (toutes si vide), nombre maximal de lignes. |
| **Texte** | Un bloc de Markdown : à quoi sert la page, comment la lire. Titres, listes et liens sont acceptés. | **Texte (Markdown)**. |
| **Tâches** | Les tâches Nomaflow avec leur prochaine exécution, leur planification en clair et leur dernier état, et **Exécuter** / **Mettre en pause** / **Reprendre**. Réservé aux superutilisateurs. | **Tâches (ids, dans l'ordre)** — vide = toutes les tâches planifiées —, **Seulement ces étiquettes**, **Lignes maximum** (12 si vide). |
| **Liens** | Une carte de points d'entrée : des éléments du menu de l'application du tableau de bord, ou des adresses web. | **Liens par ligne** (1 à 4) ; pour chaque lien, un **Élément de menu** ou une **URL**, une **Icône**, un **Libellé** (vide : celui de l'élément de menu) et une **Description**. |

Un widget dont l'utilisateur ne peut pas lancer la requête est masqué ; le reste du tableau de bord s'affiche. Chaque carte porte son titre et son sous-titre à l'intérieur, et la page s'agrandit avec ses widgets : elle défile jusqu'au dernier.

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dsy-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dsy-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dsy-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dsy-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="440" rx="14" fill="url(#dsy-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse des ventes</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Les périodes chargées, les quantités et le chiffre d'affaires en un coup d'œil</text>
  <line x1="240" y1="72" x2="960" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="240" y="98" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="112.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">12 derniers mois ▾</text>
  <text x="406" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUSINESS UNIT</text>
  <rect x="406" y="98" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="112.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Tous ▾</text>
  <rect x="730" y="98" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="754.0" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="784" y="98" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="802.5" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="827" y="98" width="27" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="840.5" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="862" y="113" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Mis à jour à 08:02</text>
  <rect x="240" y="134" width="233.33333333333334" height="96" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Chiffre d'affaires</text>
  <text x="252" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Facturé sur la période</text>
  <text x="252" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">1 284 350 €</text>
  <text x="252" y="220" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">12 sociétés · 4 business units</text>
  <rect x="483.33333333333337" y="134" width="233.33333333333334" height="96" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="495.33333333333337" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Lignes de facture</text>
  <text x="495.33333333333337" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes chargées</text>
  <text x="495.33333333333337" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">48 920</text>
  <text x="495.33333333333337" y="220" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">5 périodes · 2 clôturées</text>
  <rect x="726.6666666666667" y="134" width="233.33333333333334" height="96" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738.6666666666667" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="738.6666666666667" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Avec au moins une vente</text>
  <text x="738.6666666666667" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">1 135</text>
  <text x="738.6666666666667" y="220" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">38 nouveaux ce mois-ci</text>
  <rect x="240" y="244" width="355.0" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="262" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Périodes à examiner</text>
  <text x="252" y="275" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Statut de chaque période chargée</text>
  <circle cx="256" cy="297" r="3.5" fill="#4ade80"/>
  <text x="268" y="299" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">2026-02</text>
  <text x="268" y="311" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">validée</text>
  <text x="583.0" y="299" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 812</text>
  <circle cx="256" cy="331" r="3.5" fill="#fb923c"/>
  <text x="268" y="333" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">2026-03</text>
  <text x="268" y="345" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">ouverte — lignes encore attendues</text>
  <text x="583.0" y="333" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">4 206</text>
  <circle cx="256" cy="365" r="3.5" fill="#f87171"/>
  <text x="268" y="367" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">2026-01</text>
  <text x="268" y="379" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">clôturée — un rechargement refusé</text>
  <rect x="309.28" y="358" width="51" height="14" rx="7.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="334.78" y="368.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">clôturée</text>
  <text x="583.0" y="367" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">10 440</text>
  <circle cx="256" cy="399" r="3.5" fill="#4a9eff"/>
  <text x="268" y="401" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">2025-12</text>
  <text x="268" y="413" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">validée</text>
  <text x="583.0" y="401" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">8 965</text>
  <rect x="605.0" y="244" width="355.0" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="262" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Quantités par famille</text>
  <text x="617.0" y="275" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Part de la plus grande famille</text>
  <text x="617.0" y="298" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Boissons</text>
  <text x="948.0" y="298" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">18 400</text>
  <rect x="617.0" y="303" width="331.0" height="5" rx="2.5" fill="#1e293b"/>
  <rect x="617.0" y="303" width="331" height="5" rx="2.5" fill="#4a9eff"/>
  <text x="617.0" y="328" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Épicerie</text>
  <text x="948.0" y="328" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">12 950</text>
  <rect x="617.0" y="333" width="331.0" height="5" rx="2.5" fill="#1e293b"/>
  <rect x="617.0" y="333" width="232" height="5" rx="2.5" fill="#4a9eff"/>
  <text x="617.0" y="358" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Produits frais</text>
  <text x="948.0" y="358" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 310</text>
  <rect x="617.0" y="363" width="331.0" height="5" rx="2.5" fill="#1e293b"/>
  <rect x="617.0" y="363" width="169" height="5" rx="2.5" fill="#4a9eff"/>
  <text x="617.0" y="388" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Entretien</text>
  <text x="948.0" y="388" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">4 120</text>
  <rect x="617.0" y="393" width="331.0" height="5" rx="2.5" fill="#1e293b"/>
  <rect x="617.0" y="393" width="73" height="5" rx="2.5" fill="#4a9eff"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffre</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une valeur, une ligne modèle</text>
  <line x1="210" y1="167.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsy-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pastille, sous-titre, chiffre, étiquette</text>
  <line x1="210" y1="317.0" x2="254" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsy-arrow)"/>
  <rect x="1000" y="56" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que montre la barre, en Excel ou PDF</text>
  <line x1="1000" y1="73.0" x2="755" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsy-arrow)"/>
  <rect x="1000" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sous-titre</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur chaque widget</text>
  <line x1="1000" y1="177.0" x2="860" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsy-arrow)"/>
  <rect x="1000" y="310" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Barres</text>
  <text x="1010" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">part du total ou du plus grand</text>
  <line x1="1000" y1="327.0" x2="950" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsy-arrow)"/>
</svg>

### Chiffre, liste et barres \{#synthesis\}

Ces trois widgets font d'un tableau de bord une **page de synthèse** : les chiffres qui comptent, ce qui demande une décision et les proportions, chacun lu par une requête écrite pour lui.

- **Format** : *Nombre*, *Entier*, *Monnaie* (euros, sans décimales pour un montant rond) ou *Pourcentage (0–1)* — un ratio entre 0 et 1, affiché en pourcentage. L'**unité** suit le chiffre (`utilisateurs`, `lignes`) ; une devise porte son propre symbole.
- **Ligne secondaire** (chiffre) : une phrase dont les marqueurs sont remplis à partir de la première ligne, `{COLONNE}` ou `{COLONNE:format}` — `{ENABLED:integer} actifs · {DISABLED:integer} désactivés` donne *380 actifs · 32 désactivés*. Un marqueur qui nomme une colonne inconnue reste tel quel.
- **Colonne de tonalité** (liste) : une colonne valant `ok`, `warn`, `error` ou `info` colore la pastille en vert, orange, rouge ou bleu ; toute autre valeur donne une pastille grise. La requête décide du ton — une période clôturée, un montant au-delà d'un seuil.
- **Libellé du compte** (liste) : le texte autour de la colonne de compte, `{n} lignes de conflit`. La **Colonne d'étiquette** affiche sa valeur sous forme d'étiquette à côté du titre, dans le ton de la ligne.
- **Barre en part de** (barres) : **Le total des lignes** — les barres totalisent 100 % — ou **La plus grande ligne**, qui occupe la barre entière.

L'éditeur affiche un aperçu du widget dès que le connecteur, la requête et les colonnes obligatoires sont choisis.

### Tâches \{#jobs\}

Une carte **Tâches** place l'ordonnanceur sur un tableau de bord. Chaque ligne présente la tâche — un clic l'ouvre dans Nomaflow —, sa prochaine exécution ou *En pause*, sa planification en clair (*chaque jour à 03:00*), l'état de sa dernière exécution, et trois boutons : **Exécuter** avec les valeurs enregistrées de la tâche, **Mettre la planification en pause**, **Reprendre la planification** — appliqués aussitôt. Sans identifiants, la carte liste les tâches planifiées, la plus proche d'abord, éventuellement limitées à certaines étiquettes (`main`, `nomasx1`). La carte se rafraîchit d'elle-même pendant une exécution.

La carte est réservée aux superutilisateurs : pour les autres, elle n'apparaît pas sur le tableau de bord.

### Texte et liens \{#text-links\}

Ces deux widgets font d'un tableau de bord la **page d'accueil d'une application** : quelques lignes sur ce qu'elle fait, les chiffres, puis par où commencer.

- Un widget **Texte** ou **Liens** occupant toute la largeur de la grille (12 colonnes) prend la hauteur de son contenu, sans barre de défilement ; plus étroit, il défile dans sa tuile.
- Un widget **Liens** n'affiche que les éléments de menu que l'utilisateur peut ouvrir : une entrée que ses rôles n'accordent pas disparaît de la carte. Une URL s'ouvre dans un nouvel onglet du navigateur. Un lien vers une URL exige un libellé.
- À l'export, un texte garde son Markdown et une carte de liens devient un tableau (*Lien*, *Description*).

---

## La période \{#period\}

Un tableau de bord peut porter une **période** : un sélecteur de dates dans sa barre, appliqué à tous les widgets.

- **Préréglages** : Aujourd'hui, Hier, 7 derniers jours, 30 derniers jours, Ce mois-ci, Mois dernier, Ce trimestre, Cette année, Année dernière, 12 derniers mois, Toutes les dates. Le préréglage *Hier* couvre hier et aujourd'hui.
- **Une période libre** : choisir une date de début puis une date de fin dans le calendrier de deux mois, puis **Appliquer**.
- **Base de dates** : quand le tableau de bord propose plusieurs dates (*Date du document*, *Payée le*), un choix **Date** en bas du panneau indique celle à laquelle s'applique la période.

Le tableau de bord s'ouvre sur son propre préréglage, sinon sur celui de l'application (**Liberty Next → Administrer → App → Période par défaut (tableaux de bord)**, *Ce mois-ci* par défaut). Un choix dure tant que l'onglet du tableau de bord reste ouvert.

### Ce que reçoivent les requêtes

| Paramètre | Valeur |
|---|---|
| `:PERIOD_FROM`, `:PERIOD_TO` | La période choisie, sous forme de dates. *Toutes les dates* lie `0001-01-01` à `9999-12-31`. |
| `:PREV_FROM`, `:PREV_TO` | La période précédente (voir ci-dessous). |
| `:PERIOD_BASIS` | La base de dates choisie, quand le tableau de bord en propose plusieurs. |

Une requête qui ne les cite pas n'est pas concernée. Quand la période désigne sa colonne de date — directement ou par un élément du dictionnaire retrouvé dans l'écran du widget —, le widget est aussi filtré sur le serveur sur cette colonne, **sans modifier son SQL**.

### La période précédente

| Période | Comparée à |
|---|---|
| Commençant au 1er janvier (*Cette année*, *Année dernière*) | Les mêmes dates un an plus tôt. |
| Commençant le 1er d'un mois | Le même nombre de mois juste avant — *Mois dernier* avec le mois d'avant, un trimestre entier avec le trimestre d'avant ; *Ce mois-ci* le 27 avec le 1er–27 du mois précédent. |
| Autre | Le même nombre de jours juste avant. |

### Comparer un indicateur

Avec **Comparer avec la période précédente** coché, un KPI relance sa requête sur la période précédente et affiche sous le chiffre l'évolution — en pourcentage, en points pour un KPI en pourcentage — en vert ou en rouge, ainsi que la valeur précédente. Rien n'est comparé sur *Toutes les dates*.

---

## Filtres \{#filters\}

Un tableau de bord peut aussi porter des **filtres**, présentés comme des listes déroulantes dans sa barre. Chaque filtre a un libellé, un élément du dictionnaire, une requête qui fournit ses choix (colonne de valeur et colonne de libellé), et une valeur par défaut facultative. Choisir une valeur recharge chaque widget dont la requête renvoie une colonne portant cet élément — par l'écran du widget, ou directement d'après les colonnes du résultat : une colonne du nom de l'élément, ou de ce nom précédé du préfixe de colonnes du connecteur. Les autres widgets restent tels quels. Une période dont la colonne de date est donnée par un élément du dictionnaire retrouve sa colonne de la même façon.

Dans l'éditeur, chaque filtre indique les widgets qu'il atteint — *Atteint : …*, avec *pas : …* pour les autres — ou *N'atteint aucun widget* quand aucune colonne ne porte l'élément du dictionnaire.

Avec **Tous**, rien n'est filtré : une requête qui renvoie d'abord une ligne de total, puis une ligne par valeur, affiche les totaux dans ses widgets chiffre et liste.

---

## Actualisation et cache \{#cache\}

Quand un tableau de bord est rouvert, chaque widget réutilise son dernier résultat pendant **Liberty Next → Administrer → App → Cache des tableaux de bord (secondes, 0 = aucun)** — 60 secondes par défaut. Le bouton **↻** de la barre recharge tout, et *Mis à jour à 14:05* indique l'heure des données. Le cache est tenu par le navigateur, par utilisateur, jusqu'au rechargement de la page.

---

## Export Excel et PDF \{#export\}

Les boutons **Excel** et **PDF**, à côté de **↻**, exportent ce que montre la barre : les choix des filtres, la période et sa base de dates, dans le périmètre de données de l'utilisateur. Le serveur relance chaque widget ; rien n'est repris de l'écran.

| | Excel | PDF |
|---|---|---|
| Mise en page | Une feuille par widget ; les KPI réunis sur une feuille *Chiffres clés*. | Une page de garde avec le tableau de bord, la période et les filtres, puis les widgets à la suite. |
| KPI, chiffre | Une ligne de valeurs. | Une carte, la ligne de détail en petits caractères sous le chiffre. |
| Liste, barres, table | Ses lignes. | Un tableau. |
| Texte, liens | Le texte ; les liens en lignes. | Le texte ; un tableau des liens. |
| Graphique | Son tableau de données. | Le graphique dessiné, avec sa légende et les valeurs sur les barres. |

Un widget dont la requête échoue devient une section d'erreur ; le reste de l'export est produit. Les nombres suivent la langue du lecteur (`1 234,5` / `1,234.5`). La charte PDF se règle dans [Liberty Next → Administrer → App](./build/settings-app.md#branding).

---

## Construire un tableau de bord \{#builder\}

**Liberty Next → Analyse → Tableaux de bord** liste les tableaux de bord d'une application : les pastilles **Connecteur** en haut de la page la choisissent, **Ajouter une portée** en ajoute une autre et **Filtrer…** restreint la liste. Chaque ligne indique l'identifiant, le titre, le nombre de widgets et de filtres, et la description. **Ajouter un tableau de bord** et **Recharger la config** se trouvent dans l'en-tête de la page ; chaque ligne propose :

| Bouton | Effet |
|---|---|
| **Rechercher les dépendances** | Liste ce dont dépend le tableau de bord (requêtes, graphiques, connecteur…) et le télécharge avec les éléments cochés sous forme de package. |
| **Renommer** | Change l'identifiant du tableau de bord. |
| **Cloner** | Copie le tableau de bord sous un nouvel identifiant. |
| **Supprimer** | Supprime le tableau de bord. |

Un clic sur une ligne, ou **Ajouter un tableau de bord**, ouvre l'éditeur sur toute la fenêtre. Sa barre de titre nomme le tableau de bord (`[dashboards.<app>.<id>]`).

<svg viewBox="0 0 1200 674" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dbe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dbe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dbe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dbe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="638" rx="14" fill="url(#dbe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">▦</text>
  <text x="260" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[dashboards.sales.overview]</text>
  <rect x="916" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="927.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <rect x="942" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="221" y1="62" x2="979" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TITRE</text>
  <rect x="240" y="86" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Vue des ventes</text>
  <text x="482" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="482" y="86" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Chiffre d'affaires et commandes par société, sur la période</text>
  <text x="240" y="134" fill="#94a3b8" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un widget :</text>
  <rect x="363.08000000000004" y="120" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="396.58000000000004" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="436.08000000000004" y="120" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="454.58000000000004" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">KPI</text>
  <rect x="479.08000000000004" y="120" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="502.58000000000004" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <rect x="532.08" y="120" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="560.58" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chiffre</text>
  <rect x="595.08" y="120" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="618.58" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Liste</text>
  <rect x="648.08" y="120" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="674.08" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Barres</text>
  <rect x="706.08" y="120" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="729.58" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Texte</text>
  <rect x="759.08" y="120" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="782.58" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Liens</text>
  <rect x="812.08" y="120" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.08" y="134.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Tâches</text>
  <text x="244.0" y="165" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffre d'affaires</text>
  <rect x="240.0" y="170" width="233.33333333333334" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Chiffre d'affaires</text>
  <text x="252.0" y="214" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">1 284 350 €</text>
  <text x="252.0" y="234" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">12 sociétés · 4 unités</text>
  <text x="487.33333333333337" y="165" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Commandes</text>
  <rect x="483.33333333333337" y="170" width="233.33333333333334" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="495.33333333333337" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Commandes</text>
  <text x="495.33333333333337" y="214" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">3 412</text>
  <text x="495.33333333333337" y="234" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">98 ouvertes · 3 314 closes</text>
  <text x="730.6666666666667" y="165" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="726.6666666666667" y="170" width="233.33333333333334" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738.6666666666667" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="738.6666666666667" y="214" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">1 135</text>
  <text x="738.6666666666667" y="234" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">38 nouveaux ce mois-ci</text>
  <rect x="723.6666666666667" y="153" width="239.33333333333334" height="98" rx="8" fill="none" stroke="#4a9eff" strokeWidth="1.2" strokeDasharray="4 3"/>
  <rect x="842.0000000000001" y="174" width="112" height="20" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="853.0000000000001" y="188" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="882.0000000000001" y="188" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">4 × 1</text>
  <line x1="908.0000000000001" y1="178" x2="908.0000000000001" y2="190" stroke="#334155" strokeWidth="1.2"/>
  <text x="922.0000000000001" y="188" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="942.0000000000001" y="188" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <path d="M946.0000000000001,249 L961.0000000000001,249 L961.0000000000001,234" fill="none" stroke="#4a9eff" strokeWidth="3"/>
  <text x="244.0" y="265" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffre d'affaires par mois</text>
  <rect x="240.0" y="270" width="476.6666666666667" height="136" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="288" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffre d'affaires par mois</text>
  <rect x="274.9" y="336.8" width="44.7" height="45.2" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="297.22222222222223" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <rect x="349.3" y="331.0" width="44.7" height="51.0" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="371.6666666666667" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <rect x="423.8" y="333.9" width="44.7" height="48.1" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="446.11111111111114" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <rect x="498.2" y="320.8" width="44.7" height="61.2" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="520.5555555555555" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <rect x="572.7" y="312.0" width="44.7" height="70.0" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="595.0" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <rect x="647.1" y="316.4" width="44.7" height="65.6" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="669.4444444444443" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <text x="730.6666666666667" y="265" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Périodes à surveiller</text>
  <rect x="726.6666666666667" y="270" width="233.33333333333334" height="136" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738.6666666666667" y="288" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Périodes à surveiller</text>
  <circle cx="742.6666666666667" cy="309" r="3.5" fill="#fb923c"/>
  <text x="752.6666666666667" y="312" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10</text>
  <text x="948.0000000000001" y="312" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">4 206</text>
  <circle cx="742.6666666666667" cy="333" r="3.5" fill="#4ade80"/>
  <text x="752.6666666666667" y="336" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-09</text>
  <text x="948.0000000000001" y="336" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">9 812</text>
  <circle cx="742.6666666666667" cy="357" r="3.5" fill="#4ade80"/>
  <text x="752.6666666666667" y="360" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-08</text>
  <text x="948.0000000000001" y="360" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">8 965</text>
  <rect x="240" y="416" width="720" height="82" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="436" fill="#94a3b8" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <rect x="299.24" y="423" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="360.24" y="437.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Retirer la période</text>
  <text x="252" y="458" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">S'OUVRE SUR</text>
  <rect x="252" y="464" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="478.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Ce mois-ci            ▾</text>
  <text x="392" y="458" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE DE DATE</text>
  <rect x="392" y="464" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="402" y="478.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">DOC_DATE</text>
  <text x="532" y="458" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OU ÉLÉMENT DU DICTIONNAIRE</text>
  <rect x="532" y="464" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="542" y="478.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="686" y="477" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Bases de date (facultatif) ·</text>
  <rect x="825.28" y="464" width="112" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="881.28" y="478.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une base</text>
  <rect x="240" y="508" width="720" height="94" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="528" fill="#94a3b8" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="299.24" y="515" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="357.74" y="529.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un filtre</text>
  <text x="252" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="252" y="556" width="68" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">company</text>
  <text x="326" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <rect x="326" y="556" width="74" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="336" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Société</text>
  <text x="406" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLÉ DU DICTIONNAIRE</text>
  <rect x="406" y="556" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">COMPANY_ID</text>
  <text x="524" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="524" y="556" width="76" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="534" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sales ▾</text>
  <text x="606" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTE</text>
  <rect x="606" y="556" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">companies_get ▾</text>
  <text x="724" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE VALEUR</text>
  <rect x="724" y="556" width="88" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="734" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ID</text>
  <text x="818" y="550" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE LIBELLÉ</text>
  <rect x="818" y="556" width="88" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="828" y="570.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">NAME</text>
  <rect x="912" y="556" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="923.0" y="570.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="252" y="592" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Atteint : Chiffre d'affaires, Commandes, Chiffre d'affaires par mois · </text>
  <text x="589.96" y="592" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">pas : Clients, Périodes à surveiller</text>
  <line x1="221" y1="614" x2="979" y2="614" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="638" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">5 widget(s)</text>
  <rect x="870" y="624" width="90" height="22" rx="5" fill="url(#dbe-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="915.0" y="638.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="800" y="624" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="831.0" y="638.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Titre, description</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">affichés en tête du tableau de bord</text>
  <line x1="200" y1="93.0" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="20" y="136" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="151" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un widget</text>
  <text x="30" y="164" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">neuf types ; ouvre sa fenêtre</text>
  <line x1="200" y1="153.0" x2="363.08000000000004" y2="131" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="1000" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Poignée : glisser pour déplacer</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">flèches, Maj + flèches : taille</text>
  <line x1="1000" y1="127.0" x2="853.0000000000001" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Widgets réels</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les cartes du tableau de bord</text>
  <line x1="200" y1="317.0" x2="358.33333333333337" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="20" y="446" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="461" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="30" y="474" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">préréglage, colonne de date</text>
  <line x1="200" y1="463.0" x2="252" y2="474" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="1000" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Taille et modification</text>
  <text x="1010" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">4 colonnes × 1 ligne · ✎ · 🗑</text>
  <line x1="1000" y1="193.0" x2="932.0000000000001" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="1000" y="246" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="261" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Coin : glisser pour dimensionner</text>
  <text x="1010" y="274" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonnes et lignes entières</text>
  <line x1="1000" y1="263.0" x2="962.0000000000001" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="1000" y="568" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="583" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qu'atteint le filtre</text>
  <text x="1010" y="596" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">widgets portant la clé</text>
  <line x1="1000" y1="585.0" x2="780" y2="589" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
  <rect x="1000" y="610" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="625" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Annuler / Enregistrer</text>
  <text x="1010" y="638" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">confirmation si non enregistré</text>
  <line x1="1000" y1="627.0" x2="870" y2="635" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbe-arrow)"/>
</svg>

| Partie | Contenu |
|---|---|
| **Titre**, **Description** | Affichés en tête du tableau de bord ; le bloc *Dans les autres langues* placé dessous les donne dans les autres langues — voir [Textes dans les autres langues](#languages). |
| **Garder tel quel à la mise à jour (une mise à jour de l'application le laisse alors tel qu'enregistré ici)** | Cochée, cette case protège le tableau de bord : une mise à jour de l'application qui le livre le laisse tel qu'enregistré ici. |
| **Ajouter un widget** | Graphique, KPI, Table, **Chiffre**, **Liste**, **Barres**, **Texte**, **Liens** ou **Tâches** : la fenêtre du widget s'ouvre sur ce type, et **Annuler** ne laisse rien derrière soi. |
| La grille | Les vrais widgets, dessinés avec leurs données comme sur le tableau de bord, chacun sous son libellé. Au survol, une carte affiche ses outils : la **poignée**, sa taille (`4 × 1`, colonnes × lignes), **✎** pour la modifier et la corbeille pour la retirer. Une carte se déplace par **glisser-déposer** — sa poignée glissée sur une autre carte, une barre indiquant le côté où elle sera déposée — et se dimensionne par son **coin inférieur droit**, en colonnes (1 à 12) et en lignes (1 à 8) entières. La poignée répond aussi au clavier : les flèches déplacent la carte, Maj + flèches la dimensionnent. |
| **Période** | **Ajouter une période** / **Retirer la période** : **S'ouvre sur** (un préréglage, ou *Valeur de l'application (Liberty Next → Administrer → App)*), **Colonne de date** ou **ou élément du dictionnaire**, et des **Bases de date** facultatives (clé, libellé, colonne de date ou élément du dictionnaire). |
| **Filtres** | **Ajouter un filtre** : **Id**, **Libellé**, **Clé du dictionnaire**, puis le **Connecteur**, la **Requête**, la **Colonne valeur** et la **Colonne libellé** qui remplissent la liste déroulante. Sous chaque filtre, *Atteint : …* nomme les widgets qu'il filtre — voir [Filtres](#filters) —, et un bloc *Dans les autres langues* donne son libellé dans les autres langues. Un filtre sans identifiant ou sans libellé bloque l'enregistrement : *Un filtre n'a pas encore d'identifiant ou de libellé : complétez-le ou retirez-le.* |

Le pied de l'éditeur compte les widgets et porte **Annuler** et **Enregistrer**. Fermer l'éditeur avec des modifications non enregistrées propose de les enregistrer, de les abandonner ou de continuer à modifier.

### La fenêtre du widget \{#widget-dialog\}

Le **✎** d'une carte ouvre la fenêtre **Widget** : les neuf types en onglets en haut — un widget peut changer de type —, puis **Libellé**, **Largeur (1–12)**, **Hauteur (lignes)**, **Sous-titre**, le connecteur et la requête, et les champs propres au type (voir [Widgets](#widgets)). Sous les champs, un aperçu dessine le widget avec ses données dès que les champs requis sont renseignés. Le pied de la fenêtre affiche le type du widget (`stat`, `list`…) à gauche, **Annuler** et **Enregistrer** à droite.

### Textes dans les autres langues \{#languages\}

Un tableau de bord s'affiche dans la langue de l'utilisateur. Chaque texte qu'il présente se saisit dans les autres langues directement dans l'éditeur, dans un bloc **Dans les autres langues** placé sous le champ : une ligne par langue, une case par texte. Une case laissée vide affiche le texte tel qu'écrit (*Laissé vide, le texte ci-dessus est affiché.*).

<svg viewBox="0 0 1200 422" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dbl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dbl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dbl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dbl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="380" rx="14" fill="url(#dbl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[dashboards.sales.overview]</text>
  <line x1="220" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="84" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TITRE</text>
  <rect x="240" y="89" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="103.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sales overview</text>
  <text x="606.0" y="84" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="606.0" y="89" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="103.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Orders, revenue and margin of the month</text>
  <rect x="240" y="124" width="720" height="58" rx="8" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="250" y="139" fill="#94a3b8" fontSize="7.6" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DANS LES AUTRES LANGUES</text>
  <text x="389.25440000000003" y="139" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">Laissé vide, le texte ci-dessus est affiché.</text>
  <text x="250" y="169" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Français</text>
  <text x="326.0" y="152" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Titre</text>
  <rect x="326.0" y="156" width="308" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="336.0" y="169.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Vue d'ensemble des ventes</text>
  <text x="642.0" y="152" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="642.0" y="156" width="308" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="652.0" y="169.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Commandes, chiffre d'affaires et marge du mois</text>
  <rect x="240" y="195" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="257" y="204" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Garder tel quel à la mise à jour (une mise à jour de l'application le laisse alors tel qu'enregistré ici)</text>
  <text x="240" y="237" fill="#94a3b8" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un widget :</text>
  <rect x="341.504" y="222" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="373.504" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="411.504" y="222" width="36" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="429.504" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">KPI</text>
  <rect x="453.504" y="222" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="476.004" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <rect x="504.504" y="222" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="532.004" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Chiffre</text>
  <rect x="565.504" y="222" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="588.004" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Liste</text>
  <rect x="616.504" y="222" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="641.504" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Barres</text>
  <rect x="672.504" y="222" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="695.004" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Texte</text>
  <rect x="723.504" y="222" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="746.004" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Liens</text>
  <rect x="774.504" y="222" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="799.504" y="236.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tâches</text>
  <line x1="220" y1="252" x2="980" y2="252" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="266" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Widget — Chiffre</text>
  <text x="240" y="284" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <rect x="240" y="289" width="232" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="303.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="484.0" y="284" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SOUS-TITRE</text>
  <rect x="484.0" y="289" width="232" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="494.0" y="303.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">This month</text>
  <text x="728.0" y="284" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIGNE SECONDAIRE</text>
  <rect x="728.0" y="289" width="232" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="738.0" y="303.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">&#123;AMOUNT:integer&#125; €</text>
  <rect x="240" y="324" width="720" height="58" rx="8" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="250" y="339" fill="#94a3b8" fontSize="7.6" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DANS LES AUTRES LANGUES</text>
  <text x="389.25440000000003" y="339" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">Laissé vide, le texte ci-dessus est affiché.</text>
  <text x="250" y="369" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Français</text>
  <text x="326.0" y="352" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Libellé</text>
  <rect x="326.0" y="356" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="336.0" y="369.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Commandes</text>
  <text x="484.0" y="352" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Sous-titre</text>
  <rect x="484.0" y="356" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="494.0" y="369.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Ce mois-ci</text>
  <text x="642.0" y="352" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Ligne secondaire</text>
  <rect x="642.0" y="356" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="652.0" y="369.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif"></text>
  <text x="800.0" y="352" fill="#94a3b8" fontSize="7.4" fontFamily="system-ui, sans-serif">Unité</text>
  <rect x="800.0" y="356" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810.0" y="369.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Titre et description</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tels qu'écrits</text>
  <line x1="200" y1="101.0" x2="240" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
  <rect x="20" y="142" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="157" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dans les autres langues</text>
  <text x="30" y="170" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par langue</text>
  <line x1="200" y1="159.0" x2="240" y2="154" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
  <rect x="1000" y="142" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="157" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vide = le texte du dessus</text>
  <text x="1010" y="170" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rien à saisir deux fois</text>
  <line x1="1000" y1="159.0" x2="920" y2="172" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
  <rect x="20" y="182" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="197" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Garder à la mise à jour</text>
  <text x="30" y="210" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la mise à jour n'y touche pas</text>
  <line x1="200" y1="199.0" x2="240" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
  <rect x="20" y="336" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="351" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque carte aussi</text>
  <text x="30" y="364" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses propres textes, selon le type</text>
  <line x1="200" y1="353.0" x2="240" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
  <rect x="1000" y="336" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="351" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs selon le type</text>
  <text x="1010" y="364" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ligne secondaire, unité, note…</text>
  <line x1="1000" y1="353.0" x2="900" y2="374" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dbl-arrow)"/>
</svg>

| Emplacement | Ce que donne le bloc |
|---|---|
| Le tableau de bord | Son **Titre** et sa **Description**. |
| Un widget (sa fenêtre) | Son **Libellé** et son **Sous-titre**, puis selon le type : la **Ligne secondaire** et l'**Unité** d'un Chiffre ; le **Libellé du compte**, l'**Unité**, la **Colonne de titre**, la **Colonne de sous-titre** et la **Colonne d'étiquette (une pastille)** d'une Liste ; la **Note sous les barres**, l'**Unité**, la **Colonne de libellé** et la **Colonne de sous-libellé** des Barres ; le **Texte (Markdown)** d'un Texte. |
| Un lien d'un widget Liens | Son **Libellé** et sa **Description**. |
| Un filtre | Son **Libellé**. |

Une colonne saisie dans une autre langue désigne la colonne à lire pour les utilisateurs de cette langue — pour une requête qui renvoie une colonne par langue (`TITLE`, `TITLE_FR`).

Pour rendre le tableau de bord accessible, ajouter une entrée **dashboard** à un menu ([Menus](./build/menus/item-types.md)) ; sa permission est `dashboard:<application>.<id>`.

### En TOML

```toml title="dashboards.toml"
[dashboards.sales.overview]
label = "Vue des ventes"
period = { column = "DOC_DATE", default = "thisMonth" }

  [[dashboards.sales.overview.widgets]]
  type = "kpi"
  label = "Chiffre d'affaires"
  connector = "sales"
  query = "revenue_by_company_get"
  column = "REVENUE"
  aggregation = "sum"
  compare_previous = true
  col_span = 4

  [[dashboards.sales.overview.widgets]]
  type = "chart"
  chart = "revenue_by_month"
  col_span = 8
  row_span = 2
```

---

## Conseils \{#tips\}

- Donner une période au tableau de bord plutôt que des filtres de dates dans chaque requête : un seul contrôle, et la comparaison est fournie.
- Pour une page de synthèse, écrire une petite requête par chiffre ou par liste, et laisser la requête calculer le ton : le tableau de bord se contente de l'afficher.
- Un KPI avec `none` affiche la valeur de la première ligne : laisser la requête calculer le chiffre quand l'agrégation est complexe.
- Garder le cache pour les tableaux de bord souvent ouverts ; **↻** donne toujours des chiffres frais.
