---
title: Tableaux de bord
description: "Les tableaux de bord de Liberty Next : indicateurs, chiffres, listes de décisions, barres de proportion, graphiques et tableaux sur des requêtes de connecteurs, dans une grille de 12 colonnes, export Excel et PDF, une période avec préréglages et comparaison avec la période précédente, des filtres du dictionnaire, un cache avec Actualiser — construits dans Paramètres → Tableaux de bord et ouverts depuis le menu."
keywords: [Liberty Next, tableau de bord, KPI, indicateur, synthèse, liste, barres, export, Excel, PDF, graphique, table, widget, période, période précédente, compare_previous, PERIOD_FROM, filtres, dashboards.toml, cache]
---

# Tableaux de bord

Un tableau de bord place côte à côte plusieurs **widgets** — chiffres clés, listes de décisions, barres de proportion, graphiques, tableaux — alimentés chacun par une requête d'un connecteur. Il s'ouvre depuis le menu comme un écran, et se construit dans **Paramètres → Tableaux de bord**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dsh-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dsh-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dsh-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dsh-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="400" rx="14" fill="url(#dsh-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Vue des ventes</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Chiffre d'affaires et commandes par société</text>
  <text x="240" y="96" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Période</text>
  <rect x="284" y="80" width="178" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="294" y="94.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Ce mois-ci · 01/10 – 27/10 ▾</text>
  <text x="476" y="96" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Société</text>
  <rect x="526" y="80" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="94.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Toutes ▾</text>
  <rect x="830" y="80" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="844.0" y="94.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="960" y="95" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Mis à jour à 14:05</text>
  <line x1="240" y1="116" x2="960" y2="116" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="128" width="236" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="146" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHIFFRE D'AFFAIRES</text>
  <text x="252" y="172" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1 284 500</text>
  <text x="464" y="172" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▲ +12,4 %</text>
  <text x="252" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">précédent : 1 142 700</text>
  <rect x="488" y="128" width="236" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="146" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMMANDES</text>
  <text x="500" y="172" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">3 412</text>
  <text x="712" y="172" fill="#f87171" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▼ -3,1 %</text>
  <text x="500" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">précédent : 3 521</text>
  <rect x="736" y="128" width="224" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="146" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TAUX DE MARGE</text>
  <text x="748" y="172" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">31,2 %</text>
  <text x="948" y="172" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▲ +1,4 pts</text>
  <text x="748" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">précédent : 29,8 %</text>
  <rect x="240" y="218" width="470" height="180" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="238" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffre d'affaires par mois</text>
  <rect x="272.9" y="327.6" width="45.9" height="42.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="272.9" y="306.4" width="45.9" height="21.2" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="295.8333333333333" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <rect x="344.6" y="317.0" width="45.9" height="53.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="344.6" y="295.8" width="45.9" height="21.2" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="367.5" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <rect x="416.2" y="327.6" width="45.9" height="42.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="416.2" y="295.8" width="45.9" height="31.8" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="439.1666666666667" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <rect x="487.9" y="306.4" width="45.9" height="63.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="487.9" y="274.6" width="45.9" height="31.8" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="510.8333333333333" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <rect x="559.6" y="295.8" width="45.9" height="74.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="559.6" y="264.0" width="45.9" height="31.8" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="582.5000000000001" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <rect x="631.2" y="306.4" width="45.9" height="63.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="631.2" y="264.0" width="45.9" height="42.4" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="654.1666666666667" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="722" y="218" width="238" height="180" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="734" y="238" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Meilleurs clients</text>
  <text x="734" y="262" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="948" y="262" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">212 400</text>
  <text x="734" y="288" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="948" y="288" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">184 900</text>
  <text x="734" y="314" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="948" y="314" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">97 300</text>
  <text x="734" y="340" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Delta</text>
  <text x="948" y="340" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">65 100</text>
  <rect x="10" y="70" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="20" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">préréglages, calendrier, base</text>
  <line x1="210" y1="87.0" x2="290" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comparer</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">évolution / période précédente</text>
  <line x1="210" y1="167.0" x2="420" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Widget graphique</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un graphique enregistré ou intégré</text>
  <line x1="210" y1="317.0" x2="260" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une liste par élément</text>
  <line x1="1000" y1="77.0" x2="620" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="1000" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actualiser</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ignore le cache · heure</text>
  <line x1="1000" y1="147.0" x2="844" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Widget table</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonnes choisies, plafond</text>
  <line x1="1000" y1="317.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
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
| **Graphique** | Un graphique en barres, courbes, aires ou secteurs. | Un graphique enregistré dans **Paramètres → Graphiques**, ou un connecteur, une requête et une définition de graphique écrits dans le widget — voir [Graphiques](./charts.md). |
| **Table** | Les lignes d'une requête. | Connecteur, requête, colonnes à afficher (toutes si vide), nombre maximal de lignes. |
| **Texte** | Un bloc de Markdown : à quoi sert la page, comment la lire. Titres, listes et liens sont acceptés. | **Texte (Markdown)**. |
| **Liens** | Une carte de points d'entrée : des éléments du menu de l'application du tableau de bord, ou des adresses web. | **Liens par ligne** (1 à 4) ; pour chaque lien, un **Élément de menu** ou une **URL**, une **Icône**, un **Libellé** (vide : celui de l'élément de menu) et une **Description**. |

Un widget dont l'utilisateur ne peut pas lancer la requête est masqué ; le reste du tableau de bord s'affiche.

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

### Texte et liens \{#text-links\}

Ces deux widgets font d'un tableau de bord la **page d'accueil d'une application** : quelques lignes sur ce qu'elle fait, les chiffres, puis par où commencer.

- Un widget **Texte** occupant toute la largeur de la grille (12 colonnes) prend la hauteur de son texte, sans barre de défilement ; plus étroit, il défile dans sa tuile.
- Un widget **Liens** n'affiche que les éléments de menu que l'utilisateur peut ouvrir : une entrée que ses rôles n'accordent pas disparaît de la carte. Une URL s'ouvre dans un nouvel onglet du navigateur. Un lien vers une URL exige un libellé.
- À l'export, un texte garde son Markdown et une carte de liens devient un tableau (*Lien*, *Description*).

---

## La période \{#period\}

Un tableau de bord peut porter une **période** : un sélecteur de dates dans sa barre, appliqué à tous les widgets.

- **Préréglages** : Aujourd'hui, Hier, 7 derniers jours, 30 derniers jours, Ce mois-ci, Mois dernier, Ce trimestre, Cette année, Année dernière, 12 derniers mois, Toutes les dates. Le préréglage *Hier* couvre hier et aujourd'hui.
- **Une période libre** : choisir une date de début puis une date de fin dans le calendrier de deux mois, puis **Appliquer**.
- **Base de dates** : quand le tableau de bord propose plusieurs dates (*Date du document*, *Payée le*), un choix **Date** en bas du panneau indique celle à laquelle s'applique la période.

Le tableau de bord s'ouvre sur son propre préréglage, sinon sur celui de l'application (**Paramètres → App → Période par défaut (tableaux de bord)**, *Ce mois-ci* par défaut). Un choix dure tant que l'onglet du tableau de bord reste ouvert.

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

Quand un tableau de bord est rouvert, chaque widget réutilise son dernier résultat pendant **Paramètres → App → Cache des tableaux de bord (secondes, 0 = aucun)** — 60 secondes par défaut. Le bouton **↻** de la barre recharge tout, et *Mis à jour à 14:05* indique l'heure des données. Le cache est tenu par le navigateur, par utilisateur, jusqu'au rechargement de la page.

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

Un widget dont la requête échoue devient une section d'erreur ; le reste de l'export est produit. Les nombres suivent la langue du lecteur (`1 234,5` / `1,234.5`). La charte PDF se règle dans [Paramètres → App](./build/settings-app.md#branding).

---

## Construire un tableau de bord \{#builder\}

Dans **Paramètres → Tableaux de bord**, choisir l'application, puis ajouter ou ouvrir un tableau de bord. L'éditeur comprend :

| Partie | Contenu |
|---|---|
| Général | Titre, description. |
| Période | **Ajouter une période** : *S'ouvre sur* (un préréglage, ou la valeur de l'application), *Colonne de date* ou *élément du dictionnaire*, et des **Bases de date** facultatives (clé, libellé, colonne de date ou élément du dictionnaire). |
| Filtres | **Ajouter un filtre** : les listes déroulantes de la barre. |
| Widgets | **Ajouter un widget** : Graphique, KPI, Table, **Chiffre**, **Liste**, **Barres**, **Texte** ou **Liens**. Chaque widget a un **Sous-titre**, et des boutons pour le rendre plus étroit ou plus large, plus bas ou plus haut, et l'avancer ou le reculer dans la grille. |

Un tableau de bord s'affiche dans la langue de l'utilisateur : son titre, sa description, les libellés des filtres et les textes des widgets peuvent porter une version française, et une liste peut lire ses titres dans une colonne française de sa requête.

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
