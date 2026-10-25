---
title: Explorateur
description: "L'Explorateur de NomaUBL — construire ses propres analyses des données de facturation sans SQL : champs de sept entités sur les étagères Lignes, Mesures et Filtres, tableau, tableau croisé, détail et graphiques, champs calculés, accès aux factures sous-jacentes, tableaux de bord, analyses fournies pour l'informatique, la comptabilité et l'audit, exports Excel, PDF et PNG, rapports quotidiens."
keywords: [NomaUBL, Explorateur, analyse, libre-service, tableau croisé, tableau de bord, graphique, histogramme, indicateurs, champ calculé, exploration, export Excel, export PDF, analyse enregistrée, rapport quotidien, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Explorateur

L'**Explorateur** construit des analyses des données de facturation sans écrire de SQL. Les champs de sept entités autour de la facture se déposent dans les **Lignes**, les **Mesures** et les **Filtres** ; le résultat s'affiche en tableau, en tableau croisé, en lignes de détail ou en graphique, et chaque valeur ouvre les factures qu'elle recouvre. Les analyses s'enregistrent, se partagent et se regroupent en **tableaux de bord**. Des analyses et tableaux de bord sont fournis pour l'informatique, la comptabilité et l'audit. L'Explorateur fonctionne de la même façon quel que soit le système source (JD Edwards, SAP, NetSuite ou un ERP personnalisé) et sur toutes les bases prises en charge.

Accès : **Explorateur**, dans le groupe Navigation du menu, à côté des [Rapports](reports/overview.md). Il remplace l'ancien onglet *Requêteur* de la page Rapports ; les rapports enregistrés avec ce dernier sont convertis automatiquement en analyses.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ex-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ex-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ex-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ex-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="400" rx="14" fill="url(#ex-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur</text>
  <rect x="370" y="32" width="170" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="371" y="33" width="59" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="400.5" y="46.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses 12</text>
  <line x1="431" y1="37" x2="431" y2="49" stroke="#334155" strokeWidth="1"/>
  <text x="485.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableaux de bord</text>
  <rect x="552" y="32" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="46.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Principaux clients ▾</text>
  <rect x="1036" y="32" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1058.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="938" y="32" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="984.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Enregistrer</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="78" width="190" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="86" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="100.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Rechercher un champ…</text>
  <text x="252" y="128" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FACTURES ▾</text>
  <text x="256" y="147" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="272" y="147" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Société</text>
  <text x="256" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="272" y="166" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Client</text>
  <text x="256" y="185" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="272" y="185" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="256" y="204" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">📅</text>
  <text x="272" y="204" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Date d'émission</text>
  <text x="256" y="223" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Σ</text>
  <text x="272" y="223" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Total TTC</text>
  <text x="256" y="242" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Σ</text>
  <text x="272" y="242" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Total HT</text>
  <text x="252" y="268" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ÉVÈNEMENTS DU CYCLE DE VIE ›</text>
  <text x="252" y="289" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONTRÔLES DE VALIDATION ›</text>
  <text x="252" y="310" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIGNES DE FACTURE ›</text>
  <text x="252" y="331" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VENTILATION TVA ›</text>
  <text x="252" y="356" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CHAMPS CALCULÉS ›</text>
  <rect x="442" y="78" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="452" y="92.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Factures ▾</text>
  <rect x="540" y="78" width="403" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="568.5" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="597" y1="83" x2="597" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="623.0" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Croisé</text>
  <line x1="649" y1="83" x2="649" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="675.0" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Détail</text>
  <rect x="702" y="79" width="50" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="727.0" y="92.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Barres</text>
  <line x1="753" y1="83" x2="753" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="779.0" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Courbe</text>
  <line x1="805" y1="83" x2="805" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="836.0" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Secteurs</text>
  <line x1="867" y1="83" x2="867" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="92.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Indicateurs</text>
  <rect x="948" y="78" width="50" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="958" y="92.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Top 10</text>
  <rect x="1006" y="78" width="74" height="22" rx="5" fill="url(#ex-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1043.0" y="92.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Exécuter</text>
  <rect x="442" y="112" width="638" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="452" y="130" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES</text>
  <rect x="532" y="116" width="48" height="20" rx="10.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="556.0" y="129.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Client</text>
  <rect x="586" y="116" width="128" height="20" rx="10.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="650.0" y="129.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Date d'émission · Mois</text>
  <rect x="442" y="146" width="638" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="452" y="164" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESURES</text>
  <rect x="532" y="150" width="103" height="20" rx="10.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="583.5" y="163.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Somme · Total TTC</text>
  <rect x="641" y="150" width="48" height="20" rx="10.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="665.0" y="163.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Nombre</text>
  <rect x="442" y="180" width="638" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="452" y="198" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILTRES</text>
  <rect x="532" y="184" width="154" height="20" rx="10.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="609.0" y="197.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Période : 90 derniers jours</text>
  <rect x="692" y="184" width="118" height="20" rx="10.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="751.0" y="197.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Statut parmi 205, 10</text>
  <rect x="442" y="220" width="638" height="188" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="480" y="249" width="80" height="133" rx="3" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="520.1666666666666" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="576" y="281" width="80" height="101" rx="3" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="616.5" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="673" y="301" width="80" height="81" rx="3" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="712.8333333333333" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Gamma SAS</text>
  <rect x="769" y="325" width="80" height="57" rx="3" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="809.1666666666666" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delta &amp; Co</text>
  <rect x="865" y="336" width="80" height="46" rx="3" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="905.4999999999999" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Epsilon</text>
  <rect x="962" y="344" width="80" height="38" rx="3" fill="#64748b" fillOpacity="0.85"/>
  <text x="1001.8333333333333" y="394" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Autres</text>
  <text x="1070" y="236" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⬇ PNG</text>
  <rect x="20" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyses et tableaux de bord</text>
  <text x="30" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enregistrés, partagés, promouvables</text>
  <line x1="200" y1="43.0" x2="370" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs de 7 entités</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">glisser ou cliquer vers une étagère</text>
  <line x1="200" y1="137.0" x2="252" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs calculés</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">age(dueDate) &gt; 30 ? …</text>
  <line x1="200" y1="357.0" x2="252" y2="350" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
  <rect x="1120" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sept vues</text>
  <text x="1130" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tableau, croisé, détail, graphiques</text>
  <line x1="1120" y1="87.0" x2="742" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes · Mesures · Filtres</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dates par jour … année ; somme…</text>
  <line x1="1120" y1="137.0" x2="1080" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exploration</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une barre ouvre les lignes sous-jacentes</text>
  <line x1="1120" y1="317.0" x2="1040" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ex-arrow)"/>
</svg>

---

## Onglets Analyses et Tableaux de bord \{#tabs\}

La première rangée de l'Explorateur porte deux onglets, **Analyses** (par défaut) et **[Tableaux de bord](#dashboards)**, chacun avec le nombre d'éléments enregistrés. Sur la même rangée, à droite, se trouvent la liste des analyses enregistrées (*Analyses enregistrées…*, *— Nouvelle analyse —*) ou des tableaux de bord (*Tableaux de bord…*, *— Nouveau tableau de bord —*), **Enregistrer**, et le bouton de suppression une fois un élément choisi.

---

## Les champs

Le volet de gauche liste les champs de sept entités, avec une zone de recherche :

| Entité | Une ligne par |
|---|---|
| **Factures** | Facture : statut, montants, contrepartie, dates. |
| **Documents (archive)** | Document archivé. |
| **Évènements du cycle de vie** | Évènement de statut d'une facture. |
| **Contrôles de validation** | Anomalie de validation d'une facture. |
| **Lignes de facture** | Ligne de facture. |
| **Ventilation TVA** | Ligne de ventilation de TVA. |
| **Notifications** | Notification. |

L'**Entité** choisie dans la barre d'outils détermine ce que compte une ligne du résultat ; les champs des autres entités se rattachent par la facture. Un filtre sur les évènements, les contrôles ou les lignes sélectionne les factures qui ont une telle ligne.

Un champ se glisse sur une étagère, ou s'ajoute d'un clic. Les montants sont exprimés dans leur unité réelle. Un champ codé — statut, type de transaction… — affiche les libellés de la liste choisie pour cette colonne dans les [Vues de liste](../configuration/list-views.md) (Factures, E-Documents, Erreurs d'intégration) : une liste courte définie à cet endroit vaut aussi pour l'Explorateur.

---

## Construire une analyse

| Étagère | Rôle |
|---|---|
| **Lignes** | Les champs qui regroupent le résultat. Une date se regroupe par **jour**, **semaine**, **mois**, **trimestre** ou **année**. Dans un graphique, le deuxième champ des lignes donne les séries. |
| **Mesures** | Les valeurs calculées par groupe : **Nombre**, **Distincts**, **Somme**, **Moyenne**, **Min**, **Max**. *Nombre de lignes* est proposé par défaut. |
| **Filtres** | Conditions sur n'importe quel champ — *contient*, `=`, `≠`, `<`, `≤`, `>`, `≥`, *entre*, *parmi*, *est vide*, *n'est pas vide*. Une **Période** s'applique à n'importe quel champ de date, ou *Sans filtre de période*. |

**Top** limite le résultat aux groupes les plus importants ; **Exécuter** lance l'analyse. Chaque analyse dispose de l'option **Exclure les erreurs traitées**, qui écarte les erreurs déjà prises en charge par le service client.

### Vues

| Vue | Résultat |
|---|---|
| **Tableau** | Une ligne par groupe, avec les mesures. |
| **Croisé** | Un tableau croisé : champs des lignes imbriqués avec sous-totaux repliables (*Tout déplier*, *Tout replier*), un axe en colonnes facultatif, et la **part** de chaque cellule dans son niveau parent ou dans le total. |
| **Détail** | Les lignes elles-mêmes, page par page ; une ligne ouvre la facture. |
| **Barres** | Verticales ou horizontales, groupées ou empilées. |
| **Courbe** | Courbe ou aire. |
| **Secteurs** | Secteurs ou anneau. |
| **Indicateurs** | Des cartes avec les totaux sur toutes les lignes du résultat. |

Dans un graphique, les dix séries les plus importantes sont tracées et les autres regroupées sous *Autres* ; les dates se lisent dans l'ordre, les autres catégories par importance. Le survol affiche les valeurs. Passer d'une vue à l'autre ne relance pas la requête, et les options du graphique sont enregistrées avec l'analyse.

### Explorer les données

Une ligne du résultat, une cellule du tableau croisé, une barre, un point ou un secteur ouvre les **lignes sous-jacentes** ; une ligne de détail ouvre la fenêtre de la facture.

---

## Champs calculés \{#calculated-fields\}

Une analyse peut définir ses propres champs avec un petit langage d'expressions, sous **Champs calculés** → **Nouveau champ calculé** :

| Champ | Description |
|---|---|
| **Nom** | Lettres, chiffres et `_`. |
| **Libellé** / **Libellé français** | Affichés dans la liste des champs et dans les résultats. |
| **Expression** | Calculs sur les montants, fonctions et conditions. *Insérer un champ…* et *Insérer une fonction…* insèrent à la position du curseur. |
| **Tester** | Applique l'expression à quelques lignes avant de l'utiliser. |

| Fonction | Résultat |
|---|---|
| `age(date)` | Jours depuis la date. |
| `days(début, fin)` | Jours entre deux dates. |
| `year(date)`, `month(date)` | Année, mois. |
| `round(x, décimales)`, `abs(x)` | Arrondi, valeur absolue. |
| `coalesce(x, valeur si vide)` | Une valeur quand le champ est vide. |
| `condition ? 'a' : 'b'` | Un choix — `age(dueDate) > 30 ? 'en retard' : 'à temps'`. |
| `in ('a', 'b')` | Appartenance à une liste. |

Un nombre s'utilise comme mesure, un texte comme ligne ou comme filtre. L'expression donne le même résultat sur toutes les bases prises en charge.

---

## Enregistrer et partager

**Enregistrer** ouvre une fenêtre avec le **Nom** (dans la langue de l'interface), **Visible par** — *Tous les utilisateurs qui ouvrent l'Explorateur* ou *Moi seulement* — puis **Enregistrer** ou **Enregistrer sous**. *Enregistrer* remplace l'analyse ; *Enregistrer sous* en crée une copie sous le nouveau nom : c'est ainsi qu'une analyse fournie s'adapte en gardant l'originale. Les analyses enregistrées sont classées par public (IT, Comptabilité, Audit, Personnalisées) et par nom ; en choisir une l'exécute aussitôt avec sa propre période.

Chaque analyse et chaque tableau de bord est un fichier JSON du dossier de configuration de l'environnement (`analyses/`, `dashboards/`). Les deux se transportent vers une autre instance par la [promotion](../management/promotion.md) — un tableau de bord emporte ses analyses — et le [rapport d'implémentation](reports/implementation-report.md) les recense.

---

## Tableaux de bord \{#dashboards\}

L'onglet **Tableaux de bord** réunit des analyses enregistrées sous forme de **tuiles** sur une grille de quatre colonnes, chacune avec sa largeur, sa hauteur et sa vue — graphique, tableau ou tableau croisé. Une **période** unique, en haut, s'applique à toutes les tuiles. Une tuile s'explore comme son analyse et l'ouvre dans l'éditeur. **Modifier la disposition** ajoute des tuiles (*Analyse à ajouter…*, *Ajouter une tuile*), les déplace et règle leur taille.

<svg viewBox="0 0 1200 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ed-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ed-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ed-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ed-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="368" rx="14" fill="url(#ed-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur · Tableaux de bord</text>
  <rect x="240" y="76" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="90.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Clôture du mois ▾</text>
  <rect x="418" y="76" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="428" y="90.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 30 derniers jours ▾</text>
  <rect x="916" y="32" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="938.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="854" y="32" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="882.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="698" y="32" width="150" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="773.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifier la disposition</text>
  <line x1="220" y1="66" x2="980" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <line x1="220" y1="110" x2="980" y2="110" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="120" width="720.0" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="138" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">TVA par mois et par taux</text>
  <text x="950.0" y="138" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">↗</text>
  <rect x="260" y="210" width="10" height="18" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="272" y="212" width="10" height="16" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="284" y="222" width="10" height="6" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="317" y="204" width="10" height="24" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="329" y="217" width="10" height="11" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="341" y="221" width="10" height="7" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="373" y="198" width="10" height="30" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="385" y="214" width="10" height="14" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="397" y="223" width="10" height="5" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="430" y="207" width="10" height="21" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="442" y="210" width="10" height="18" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="454" y="222" width="10" height="6" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="487" y="201" width="10" height="27" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="499" y="215" width="10" height="13" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="511" y="220" width="10" height="8" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="543" y="210" width="10" height="18" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="555" y="212" width="10" height="16" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="567" y="222" width="10" height="6" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="600" y="204" width="10" height="24" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="612" y="217" width="10" height="11" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="624" y="221" width="10" height="7" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="657" y="198" width="10" height="30" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="669" y="214" width="10" height="14" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="681" y="223" width="10" height="5" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="713" y="207" width="10" height="21" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="725" y="210" width="10" height="18" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="737" y="222" width="10" height="6" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="770" y="201" width="10" height="27" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="782" y="215" width="10" height="13" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="794" y="220" width="10" height="8" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="827" y="210" width="10" height="18" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="839" y="212" width="10" height="16" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="851" y="222" width="10" height="6" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="883" y="204" width="10" height="24" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="895" y="217" width="10" height="11" rx="2" fill="#a855f7" fillOpacity="0.8"/>
  <rect x="907" y="221" width="10" height="7" rx="2" fill="#22c55e" fillOpacity="0.8"/>
  <rect x="240.0" y="248" width="357.0" height="130" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="266" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Montants par statut</text>
  <text x="587.0" y="266" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">↗</text>
  <circle cx="320.0" cy="323" r="38" fill="none" stroke="#4a9eff" strokeWidth="18" strokeDasharray="140 240"/>
  <circle cx="320.0" cy="323" r="38" fill="none" stroke="#22c55e" strokeWidth="18" strokeDasharray="60 240" strokeDashoffset="-140"/>
  <circle cx="320.0" cy="323" r="38" fill="none" stroke="#f97316" strokeWidth="18" strokeDasharray="39 240" strokeDashoffset="-200"/>
  <rect x="390.0" y="298" width="10" height="10" rx="2" fill="#4a9eff"/>
  <text x="406.0" y="307" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">205</text>
  <rect x="390.0" y="318" width="10" height="10" rx="2" fill="#22c55e"/>
  <text x="406.0" y="327" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">10</text>
  <rect x="390.0" y="338" width="10" height="10" rx="2" fill="#f97316"/>
  <text x="406.0" y="347" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">213</text>
  <rect x="603.0" y="248" width="357.0" height="130" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="615.0" y="266" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Principaux clients</text>
  <text x="950.0" y="266" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">↗</text>
  <text x="615.0" y="292" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="693.0" y="283" width="222" height="12" rx="3" fill="#4a9eff" fillOpacity="0.8"/>
  <text x="615.0" y="314" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="693.0" y="305" width="161" height="12" rx="3" fill="#4a9eff" fillOpacity="0.8"/>
  <text x="615.0" y="336" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Gamma SAS</text>
  <rect x="693.0" y="327" width="124" height="12" rx="3" fill="#4a9eff" fillOpacity="0.8"/>
  <text x="615.0" y="358" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Delta &amp; Co</text>
  <rect x="693.0" y="349" width="86" height="12" rx="3" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tableaux de bord fournis</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Exploitation · Clôture · Période d'audit</text>
  <line x1="200" y1="87.0" x2="240" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ed-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tuiles = analyses enregistrées</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">largeur et hauteur par tuile</text>
  <line x1="200" y1="197.0" x2="240" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ed-arrow)"/>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une période pour toutes</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appliquée à chaque tuile</text>
  <line x1="1000" y1="87.0" x2="598" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ed-arrow)"/>
  <rect x="1000" y="20" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="35" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1010" y="48" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Excel une feuille par tuile · PDF</text>
  <line x1="1000" y1="37.0" x2="910" y2="54" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ed-arrow)"/>
  <rect x="1000" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ouvrir l'analyse</text>
  <text x="1010" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">explorer ou modifier depuis la tuile</text>
  <line x1="1000" y1="279.0" x2="950" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ed-arrow)"/>
</svg>

---

## Analyses et tableaux de bord fournis

NomaUBL installe douze analyses et trois tableaux de bord, une seule fois ; ils ne sont jamais écrasés ensuite et peuvent donc être adaptés.

| Public | Tableau de bord | Analyses |
|---|---|---|
| **IT** | Exploitation | Volume par document · Contrôles par jour : validation / intégration · Échecs d'envoi et d'import · Factures dans un statut de traitement |
| **Comptabilité** | Clôture du mois | TVA par mois et par taux · Montants par statut · Principaux clients · Factures et avoirs par mois |
| **Audit** | Période d'audit | Contrôles par règle · Refus et rejets par motif · Évènements de statut par mois · Statistiques des statuts |

*Statistiques des statuts* reproduit le tableau détaillé du tableau de bord [Statistiques](./statistics.md#detail-table). *Contrôles par jour* répartit les contrôles de chaque jour entre **validation** (les données de la facture enfreignent une règle Schematron ou XSD, Schematrons client compris) et **intégration** (une étape technique a échoué : plateforme, base de données, transformation, PDF, XML, génération UBL, validateur, traitement).

---

## Exports et rapports quotidiens

| Export | Contenu |
|---|---|
| **PDF** | Une analyse ou un tableau de bord dans la mise en page du [rapport d'audit](reports/audit-report.md) : page de garde avec environnement, période, date, auteur et version, sommaire pour un tableau de bord, en-têtes courants, chaque graphique avec toutes ses données, filtres rappelés. |
| **Excel** | Le tableau croisé ; un tableau de bord avec une feuille par tuile. |
| **PNG** | Le graphique d'une analyse. |

Un [rapport quotidien](../sync/scheduled-jobs/daily-digest.md) peut envoyer une analyse enregistrée ou un tableau de bord complet, exécuté sur la fenêtre du rapport, en Excel ou en PDF dans la même mise en page.

---

## Accès

Accorder la page **Explorateur** dans le groupe Navigation de la page [Rôles](../configuration/security/roles.md). Les résultats suivent la visibilité par société de l'utilisateur connecté.

---

## Conseils & bonnes pratiques

- **Partir d'une analyse fournie** et l'*Enregistrer sous* pour l'adapter ; l'originale reste disponible.
- **Choisir d'abord l'entité.** Elle détermine ce qui est compté : factures, lignes, évènements ou contrôles.
- **Afficher la part du niveau parent dans le tableau croisé** pour lire une répartition — statuts par société, taux de TVA par mois.
- **Donner une liste courte aux champs codés** dans les *Vues de liste* : l'Explorateur la reprend.
- **Envoyer le tableau de bord Clôture du mois par rapport quotidien** en début de mois, en PDF, à l'équipe comptable.
