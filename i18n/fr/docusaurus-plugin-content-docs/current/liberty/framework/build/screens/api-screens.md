---
title: Un écran sur un point d'accès d'API
description: "Dans Liberty Next, un écran peut lire les lignes d'un point d'accès d'API au lieu d'une requête SQL, et enregistrer par des points d'accès : la même grille et la même fiche, des filtres issus des paramètres du point d'accès et des colonnes, des enregistrements qui passent par l'application propriétaire des données avec ses règles et ses messages — et Enregistre par, pour un écran lu en SQL et enregistré par une API."
keywords: [Liberty Next, écran, point d'accès d'API, endpoint, REST, grille, fiche, enregistrer par une API, Enregistre par, filtres, limite de lignes, périmètre de données, low-code, formulaire JD Edwards]
---

# Un écran sur un point d'accès d'API

Un écran n'a pas besoin d'une base de données. Il peut **lire les lignes renvoyées par une API** et **enregistrer par les appels de cette API** : la grille, les filtres, la fiche, les actions, les permissions et l'assistant IA fonctionnent comme sur tout écran, et chaque enregistrement passe par l'application propriétaire des données — avec ses règles, ses valeurs par défaut et ses messages.

Deux montages :

| Montage | Lecture | Enregistrement |
|---|---|---|
| **Un écran sur une API** | Un point d'accès | Des points d'accès |
| **Enregistre par** | Une requête SQL — rapide, toutes les colonnes, pagination | Les points d'accès d'un autre connecteur |

---

## Vue d'ensemble

<svg viewBox="0 0 1200 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aps-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aps-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aps-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aps-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="340" rx="14" fill="url(#aps-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Deux montages</text>
  <rect x="240" y="70" width="720" height="130" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="90" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">UN ÉCRAN SUR UNE API</text>
  <rect x="254" y="114" width="170" height="52" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="339.0" y="137.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Point d'accès de lecture</text>
  <text x="339.0" y="152.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ses lignes, ses paramètres</text>
  <line x1="424" y1="140" x2="490" y2="140" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <text x="457" y="132" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">lit</text>
  <rect x="492" y="104" width="190" height="80" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="502" y="120" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCRAN — GRILLE + FICHE</text>
  <rect x="502" y="128" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="502" y="144" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="502" y="160" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <line x1="682" y1="140" x2="748" y2="140" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <text x="715" y="132" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">enregistre</text>
  <rect x="750" y="100" width="190" height="38" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="845.0" y="116.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Points d'accès</text>
  <text x="845.0" y="131.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">insertion · mise à jour · suppression</text>
  <line x1="845" y1="138" x2="845" y2="154" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <rect x="750" y="156" width="190" height="30" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="845.0" y="175.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Les règles de l'application</text>
  <rect x="240" y="220" width="720" height="130" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="240" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENREGISTRE PAR</text>
  <rect x="254" y="264" width="170" height="52" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="339.0" y="287.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Requête SQL</text>
  <text x="339.0" y="302.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">rapide, toutes colonnes, pagination</text>
  <line x1="424" y1="290" x2="490" y2="290" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <text x="457" y="282" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">lit</text>
  <rect x="492" y="254" width="190" height="80" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="502" y="270" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCRAN — GRILLE + FICHE</text>
  <rect x="502" y="278" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="502" y="294" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="502" y="310" width="170" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <line x1="682" y1="290" x2="748" y2="290" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <text x="715" y="282" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">enregistre</text>
  <rect x="750" y="250" width="190" height="38" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="845.0" y="266.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Points d'accès</text>
  <text x="845.0" y="281.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">insertion · mise à jour · suppression</text>
  <line x1="845" y1="288" x2="845" y2="304" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#aps-flow)"/>
  <rect x="750" y="306" width="190" height="30" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="845.0" y="325.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Les règles de l'application</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Des lignes d'une API</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtres = ses paramètres</text>
  <line x1="200" y1="107.0" x2="254" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aps-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La lecture reste en SQL</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">seul l'enregistrement change</text>
  <line x1="200" y1="267.0" x2="254" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aps-arrow)"/>
  <rect x="1000" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marqués « Modifie des données »</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacun avec sa permission</text>
  <line x1="1000" y1="107.0" x2="940" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aps-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le refus du serveur</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">est l'erreur affichée</text>
  <line x1="1000" y1="187.0" x2="940" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aps-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aucune correspondance</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par nom ou élément du dictionnaire</text>
  <line x1="1000" y1="317.0" x2="940" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aps-arrow)"/>
</svg>

---

## Lire un point d'accès \{#read\}

Dans le [Concepteur d'écran](./overview.md), étape **Données** : choisir le connecteur d'API dans **Connecteur**, puis le point d'accès dans **Requête de lecture**. La liste propose les points d'accès qui indiquent où se trouvent leurs lignes (**Lignes**, dans l'[éditeur de point d'accès](../api-endpoints.md#answer)).

La grille est la même. Ses colonnes sont nommées par le point d'accès ; leurs libellés viennent de l'écran, puis du dictionnaire, puis des titres du serveur. La page porte le libellé de l'écran.

### Filtres \{#filters\}

- **Les paramètres du point d'accès** s'affichent au-dessus de la grille — leur exemple en indication, leur aide en infobulle, une liste déroulante pour une liste fermée de valeurs. Un paramètre qui a une colonne de filtre du même nom rejoint le panneau de filtres.
- **Toute colonne marquée comme filtre** figure dans les filtres avancés, avec les opérateurs d'une requête — contient, égal, différent, commence par, se termine par, intervalle — et une liste de choix quand la colonne a une énumération ou un lookup. Ces filtres s'appliquent aux lignes renvoyées par le point d'accès.
- Les **paramètres** propres à un écran — l'en-tête d'un formulaire de détail — peuvent être obligatoires : le point d'accès n'est alors jamais appelé avec un en-tête vide.

### Limite de lignes \{#limit\}

Le nombre de lignes est celui du point d'accès, plafonné de nouveau par l'écran, sans pagination. Quand le point d'accès désigne son **Paramètre du nombre de lignes**, l'écran le renseigne avec son propre *Max lignes*. L'écran signale un résultat tronqué quand le serveur indique qu'il reste des lignes. Le tri et le regroupement portent sur ce qui a été renvoyé.

### Un serveur qui n'a rien à lister \{#empty\}

Certains serveurs répondent par une erreur quand une liste est vide. Le point d'accès peut désigner les refus qui signifient *aucune ligne* : l'écran affiche alors une liste vide au lieu d'une erreur.

---

## Enregistrer par des points d'accès \{#save\}

**Requête de mise à jour**, **Requête d'insertion** et **Requête de suppression** désignent des points d'accès marqués **Modifie des données**. La grille et la fiche enregistrent comme d'habitude :

- les valeurs de la ligne vont aux paramètres du point d'accès **par leur nom** ; la valeur qu'avait une ligne à son chargement est disponible sous `<COLONNE>_ORIGINAL` ;
- les paramètres propres à l'écran accompagnent chaque enregistrement ;
- **ce que le serveur refuse est l'erreur de l'enregistrement**, dans les termes du serveur ; ses avertissements reviennent avec l'enregistrement ;
- une valeur retournée par le point d'accès — un numéro attribué par le serveur — revient dans la fiche ;
- une colonne que l'écran n'envoie pas est laissée intacte par le serveur ; une colonne vidée par l'utilisateur est envoyée vide ;
- pour une modification, seul ce que l'utilisateur a changé est transmis à un point d'accès servi par une fonction.

Les règles de notification se déclenchent, et les outils d'écriture de l'assistant passent par le même enregistrement.

---

## Enregistre par — lire en SQL, enregistrer par l'API \{#saves-through\}

Quand les données peuvent être lues dans une base mais doivent être écrites par l'application — un formulaire JD Edwards, l'API d'un ERP —, garder l'écran sur sa requête et choisir le connecteur d'API dans **Enregistre par**. La mise à jour, l'insertion et la suppression désignent alors des points d'accès de ce connecteur.

Aucune correspondance n'est à écrire : un paramètre du point d'accès prend la valeur de la colonne de même nom, sinon de la colonne qui porte le même élément du dictionnaire (`ALPH` à partir de `ABALPH`).

La lecture reste rapide et complète ; l'enregistrement applique les règles de l'application. L'intégrité, *Rechercher les usages*, le renommage et les paquets suivent le connecteur d'enregistrement.

---

## Ce qui diffère d'un écran sur une requête \{#limits\}

| Sur une requête | Sur un point d'accès |
|---|---|
| Pagination par le serveur | La limite de lignes du point d'accès, sans pagination |
| Filtres traduits en SQL | Les paramètres du point d'accès, puis des filtres sur les lignes renvoyées |
| Import de lignes | Non disponible |
| Export de classeur configuré | Non disponible — l'export de la grille fonctionne |
| Synthèse côté serveur | Non disponible |
| Miroir d'audit, paquets de changements sur ses enregistrements | Non disponibles |
| Règles d'écriture du dictionnaire (séquence, utilisateur, date) | Le serveur décide |
| Source d'un modèle de l'explorateur de données | Non disponible |

---

## Accès \{#access\}

La permission est celle du point d'accès — `api:<connecteur>:<point d'accès>` — pour la lecture comme pour chaque enregistrement ; un écran dont l'utilisateur ne peut pas appeler le point d'accès de lecture ne figure pas dans son menu. La règle *modifiable si* de l'écran est appliquée, et le **périmètre de données** de l'appelant s'applique aux lignes renvoyées.

---

## Dans les paquets \{#packages\}

Un écran voyage entier : les points d'accès par lesquels il lit ou enregistre figurent sous **Points d'accès d'API** dans un [paquet](../packages.md), cochés par défaut comme ses requêtes ; un point d'accès servi par un service emporte ce service. L'historique de l'écran les consigne également.

---

## Conseils & bonnes pratiques \{#tips\}

- Lire en SQL et enregistrer par l'API dès que les deux sont possibles : le meilleur de chaque voie.
- Déclarer les **champs d'erreur** du point d'accès : un enregistrement refusé doit apparaître comme tel.
- Marquer comme filtres les colonnes sur lesquelles on recherche ; désigner le paramètre du nombre de lignes pour que *Max lignes* pilote le serveur.
- Laisser un générateur construire l'écran quand il en existe un — **Créer à partir de…** crée les points d'accès et l'écran ensemble.

---

## Voir aussi

- [Points d'accès d'API](../api-endpoints.md) · [Écrans — vue d'ensemble](./overview.md) · [Colonnes](./columns.md)
- [Nomajde — un écran à partir d'un formulaire JDE](../../../nomajde/ais/create-from.md)
