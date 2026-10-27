---
title: Dictionnaire
description: "Le dictionnaire définit une seule fois chaque donnée — libellé, format, règle, valeur par défaut, traductions — et chaque colonne de requête qui y renvoie hérite de cette définition. Entrées, énumérations, lookups, séquences et listes du framework, partagés ou par connecteur, dans Paramètres → Dictionnaire."
keywords: [Liberty Next, dictionnaire, entrées, énumérations, lookups, séquences, libellés, formats, règles, BOOLEAN, ENUM, LOOKUP, SEQUENCE, LOGIN, SYSDATE, PASSWORD, traductions]
---

# Dictionnaire

Le **dictionnaire** définit une seule fois chaque donnée : son libellé, son format, sa règle (booléen, liste de valeurs, lookup, séquence…), sa valeur par défaut et ses traductions. Une colonne de requête qui renvoie à une entrée hérite de cette définition : la même donnée se lit donc de la même façon sur tous les écrans, graphiques et tableaux de bord.

Il se modifie dans **Paramètres → Dictionnaire**, qui regroupe cinq types d'éléments :

| Onglet | Contenu |
|---|---|
| **Entrées** | Les données : libellé, format, règle, valeur par défaut, traductions. |
| **Énumérations** | Des listes fixes de codes et de libellés, pour la règle `ENUM`. |
| **Lookups** | Des requêtes qui remplacent un code par son libellé, pour la règle `LOOKUP`. |
| **Séquences** | Des requêtes qui renvoient le numéro suivant, pour la règle `SEQUENCE`. |
| **Framework** | Les surcharges des listes proposées par les éditeurs (formats, règles, types de source…). |

---

## Vue d'ensemble

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dic-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dic-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dic-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="410" rx="14" fill="url(#dic-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="45" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Portée :</text>
  <rect x="286" y="32" width="53" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="312.5" y="44.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Partagé</text>
  <rect x="345" y="32" width="43" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="366.5" y="44.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="396" y="29" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="408.0" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="650" y="29" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="694.5" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Scan a table</text>
  <rect x="745" y="29" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="778.0" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter</text>
  <rect x="817" y="29" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.0" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="901" y="29" width="83" height="22" rx="5" fill="url(#dic-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="942.5" y="43.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="64" width="365" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="65" width="61" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="271.5" y="79.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Entrées</text>
  <line x1="303" y1="69" x2="303" y2="83" stroke="#334155" strokeWidth="1"/>
  <text x="348.5" y="79.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Énumérations</text>
  <line x1="394" y1="69" x2="394" y2="83" stroke="#334155" strokeWidth="1"/>
  <text x="425.5" y="79.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Lookups</text>
  <line x1="457" y1="69" x2="457" y2="83" stroke="#334155" strokeWidth="1"/>
  <text x="494.0" y="79.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Séquences</text>
  <line x1="531" y1="69" x2="531" y2="83" stroke="#334155" strokeWidth="1"/>
  <text x="568.0" y="79.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Framework</text>
  <rect x="870" y="64" width="130" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="935.0" y="78.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une entrée</text>
  <line x1="240" y1="98" x2="960" y2="98" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="108" width="220" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="116" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="130.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">filtre 4…</text>
  <rect x="246" y="144" width="208" height="40" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="158" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER_STATUS</text>
  <text x="256" y="174" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Statut client</text>
  <text x="256" y="202" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">DUE_DATE</text>
  <text x="256" y="218" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Date d'échéance</text>
  <text x="256" y="246" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">INVOICE_AMOUNT</text>
  <text x="256" y="262" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Montant facture</text>
  <text x="256" y="290" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">IS_ACTIVE</text>
  <text x="256" y="306" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Actif</text>
  <rect x="388" y="278" width="58" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="417.0" y="290.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">override</text>
  <text x="476" y="122" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">CUSTOMER_STATUS</text>
  <rect x="736" y="108" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="777.5" y="122.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages</text>
  <rect x="825" y="108" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="858.0" y="122.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="897" y="108" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="924.5" y="122.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="476" y="138" width="268" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="507.5" y="153.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="540" y="139" width="44" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="562.0" y="153.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rule</text>
  <line x1="585" y1="143" x2="585" y2="157" stroke="#334155" strokeWidth="1"/>
  <text x="630.5" y="153.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <line x1="676" y1="143" x2="676" y2="157" stroke="#334155" strokeWidth="1"/>
  <text x="710.0" y="153.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <text x="476" y="193" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Rules</text>
  <rect x="596" y="178" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="192.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">LOOKUP ▾</text>
  <text x="476" y="225" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Rules values</text>
  <rect x="596" y="210" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="224.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">CUSTOMER_STATUSES ▾</text>
  <text x="476" y="257" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">False value</text>
  <rect x="596" y="242" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="256.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"> </text>
  <text x="476" y="289" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Default</text>
  <rect x="596" y="274" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="288.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">A</text>
  <text x="476" y="321" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Justify</text>
  <rect x="596" y="306" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="320.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">— ▾</text>
  <text x="476" y="353" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Size</text>
  <rect x="596" y="338" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="352.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"> </text>
  <text x="476" y="385" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Lookup params</text>
  <rect x="596" y="370" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="384.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">TYPE = CUSTOMER</text>
  <rect x="10" y="30" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Portée</text>
  <text x="20" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">partagée ou par connecteur</text>
  <line x1="210" y1="47.0" x2="290" y2="38" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="10" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq onglets</text>
  <text x="20" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">entrées, énumérations…</text>
  <line x1="210" y1="137.0" x2="240" y2="76" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="10" y="250" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clés des entrées</text>
  <text x="20" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellé affiché dessous</text>
  <line x1="210" y1="267.0" x2="250" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Barre d'outils</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">analyse, export, enregistrement</text>
  <line x1="1000" y1="47.0" x2="944" y2="38" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Rule</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règle, sa valeur, défaut</text>
  <line x1="1000" y1="167.0" x2="740" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lookup params</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">valeurs des :params</text>
  <line x1="1000" y1="347.0" x2="928" y2="381" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
</svg>

---

## Portées \{#scopes\}

Les pastilles **Portée** en haut de l'écran choisissent la partie du dictionnaire affichée :

- **Partagé** — les entrées utilisables par tous les connecteurs ;
- **une portée par connecteur** — des entrées, énumérations, lookups et séquences visibles des seules requêtes de ce connecteur. Le bouton **+** ajoute la portée d'un connecteur existant.

Une requête du connecteur `sales` cherche d'abord l'entrée dans la portée `sales`, puis dans la portée partagée. Deux applications peuvent ainsi définir différemment la même clé (`STATUS`) sans conflit. L'onglet **Framework** n'existe qu'en portée partagée.

---

## Lien entre une colonne et une entrée \{#column-reference\}

Une colonne de requête reprend l'entrée dont la clé correspond à son nom (`CUSTOMER_STATUS`), ou l'entrée indiquée dans son champ `dd` quand les noms diffèrent (un `dd` vide désactive le lien). Un libellé ou un format défini sur la colonne elle-même prime sur celui de l'entrée. Voir [Connecteurs → Découverte de schéma et indices de colonnes](./connectors.md#schema-discovery-and-column-hints).

Sur un écran, une colonne peut aussi neutraliser la règle héritée avec la règle `DISABLED` — voir [Règles](#rules).

---

## Entrées \{#entries\}

La liste de gauche affiche la clé de chaque entrée, son libellé en dessous, et un champ de filtre. Les clés s'écrivent en majuscules. Le formulaire de droite est réparti en onglets, libellés en anglais :

| Onglet | Champ | Effet |
|---|---|---|
| General | **Label** | Le libellé par défaut, utilisé quand aucune traduction ne correspond à la langue de l'utilisateur. |
| General | **Format** | La façon d'afficher et de saisir la valeur — voir [Formats](#formats). |
| Rule | **Rules** | La règle appliquée à la donnée — voir [Règles](#rules). |
| Rule | **Rules values** | L'argument de la règle : la valeur « vrai » pour `BOOLEAN`, l'énumération pour `ENUM`, le lookup pour `LOOKUP`, la séquence pour `SEQUENCE`. La liste proposée suit la règle choisie. |
| Rule | **False value** | Pour `BOOLEAN` uniquement : la valeur écrite quand la case est décochée. Vide, elle se déduit de la valeur « vrai » (`Y` → `N`, `1` → `0`, `true` → `false`) ; pour toute autre valeur, NULL est écrit. |
| Rule | **Default** | La valeur initiale d'une nouvelle ligne. |
| Rule | **Justify** | Pour les colonnes caractères de longueur fixe : `right_blank` (cadrage à droite, complété par des espaces) ou `right_zero` (cadrage à droite, complété par des zéros). Appliqué aux valeurs écrites et aux clés de la clause WHERE. Vide = cadrage à gauche. |
| Rule | **Size** | La longueur de stockage de la donnée, utilisée avec **Justify** quand la colonne physique est plus large. |
| Rule | **Lookup params** | Des valeurs fixes pour les `:params` de la requête du lookup (par exemple `TYPE = CUSTOMER`). Les clés proposées sont les paramètres déclarés par le lookup. |
| Translations | une ligne par langue | Le libellé dans cette langue. |
| Advanced | **Override** | Marque l'entrée comme personnalisation locale : un package de mise à jour ne l'écrase pas. |

La barre de l'élément propose **Find usages**, **Renommer**, **Cloner** et **Supprimer**. Renommer une entrée, un lookup ou une séquence met à jour ses références dans les autres fichiers de configuration (écrans, connecteurs, dictionnaire) puis recharge la configuration ; les modifications en attente doivent d'abord être enregistrées.

### Formats \{#formats\}

| Format | Affichage |
|---|---|
| `text`, `textarea` | Du texte, sur une ou plusieurs lignes. |
| `number`, `integer`, `decimal`, `currency` | Un nombre. |
| `date`, `datetime`, `timestamp` | Une date, avec ou sans l'heure. |
| `jdedate`, `jdetime` | Une date (CYYDDD) ou une heure (HHMMSS) JD Edwards, affichée comme une date ou une heure ordinaire. |
| `boolean` | Une coche ou une croix. |
| `password` | Une valeur masquée. |
| `email`, `url`, `color` | Du texte, affiché tel quel. |

L'onglet **Framework** permet d'ajouter des valeurs à cette liste.

### Règles \{#rules\}

| Règle | Effet |
|---|---|
| `BOOLEAN` | La valeur s'affiche par une coche ou une croix, et le formulaire présente une case à cocher. **Rules values** donne la valeur « vrai » (`Y`, `1`, `01`, `true`, `T`) ; **False value**, l'autre. |
| `ENUM` | Le code s'affiche avec son libellé tiré de l'énumération indiquée dans **Rules values** ; le formulaire propose les valeurs de l'énumération. |
| `LOOKUP` | Le code s'affiche avec son libellé tiré du lookup indiqué dans **Rules values** ; le formulaire propose les lignes du lookup dans une liste avec recherche. |
| `SEQUENCE` | À l'insertion, le serveur renseigne la colonne avec le numéro suivant de la séquence indiquée dans **Rules values**, dans la même transaction. |
| `LOGIN` | À chaque insertion ou mise à jour, le serveur écrit le nom de l'utilisateur connecté, en majuscules, quelle que soit la valeur envoyée. À l'ajout d'une ligne, le formulaire l'affiche déjà renseigné. |
| `SYSDATE` | À l'insertion ou à la mise à jour, le serveur écrit la date et l'heure courantes (heure locale du serveur) si aucune valeur n'est envoyée. À l'ajout d'une ligne, le formulaire affiche la date du jour. |
| `PASSWORD` | À l'écriture, le serveur chiffre la valeur avec la clé maître (`ENC:…`) afin de pouvoir la déchiffrer à l'usage — pour les mots de passe de connexion stockés dans une table. Un mot de passe laissé vide en mise à jour conserve la valeur enregistrée. À associer au format `password` pour masquer le champ. |
| `DEFAULT` | À l'insertion ou à la mise à jour, la valeur **Default** est écrite quand la colonne arrive vide. |
| `DISABLED` | Sur une colonne d'écran : annule, pour cet écran, la règle héritée de l'entrée (par exemple un écran d'import dont les lignes portent déjà leurs dates). |

Les règles appliquées par le serveur (`SEQUENCE`, `LOGIN`, `SYSDATE`, `PASSWORD`, `DEFAULT`) valent pour toute écriture passant par la requête — formulaire, saisie dans la grille, API — et pas seulement pour le formulaire. Une requête d'écriture peut aussi horodater explicitement avec des jetons comme `{{LOGIN}}` ou `{{SYSDATE}}` — voir [Liaison des paramètres](./build/queries/parameter-binding.md).

### Colonnes d'audit \{#form-layer-defaults\}

Une règle s'applique à toute écriture dont la requête lie la colonne :

| Colonne | Règle | Condition |
|---|---|---|
| `UPDATED_BY` | `LOGIN` | — |
| `UPDATED_AT` | `SYSDATE` | La colonne doit arriver vide : la laisser hors du dialogue. |
| `CREATED_BY`, `CREATED_AT` | `LOGIN`, `SYSDATE` | Seulement si la requête de mise à jour ne les écrit pas — sinon chaque mise à jour les remplacerait. |
| `ID` | `SEQUENCE` | Quand la base ne numérote pas elle-même les lignes. |

Les jetons `{{LOGIN}}` / `{{SYSTIMESTAMP}}` écrits dans les requêtes d'insertion et de mise à jour sont le moyen le plus simple de renseigner ces colonnes — voir [Piste d'audit](./cookbook/audit-trail.md).

---|---|
| `CREATED_BY`, `UPDATED_BY` | `LOGIN` |
| `CREATED_AT`, `UPDATED_AT` | `SYSDATE` |
| `ID` | `SEQUENCE` (quand la base ne numérote pas elle-même les lignes) |

Ces colonnes n'ont pas à figurer dans le formulaire : le serveur les renseigne à chaque écriture, et le navigateur ne peut pas modifier le nom de l'utilisateur.

---

## Énumérations \{#enums\}

Une énumération est une liste fixe de codes, pour des valeurs connues à l'avance (`L` / `M` / `H` pour une priorité).

| Champ | Effet |
|---|---|
| **Label** | Le nom de la liste. |
| **Values** | Une ligne par code : **Value** (le code stocké), **Label** (le texte affiché) et les **Translations** du libellé. |
| **Override** | Comme pour les entrées. |

Une entrée l'utilise avec **Rules** = `ENUM` et **Rules values** = l'identifiant de l'énumération.

---

## Lookups \{#lookups\}

Un lookup est une requête dont les lignes remplacent un code par un libellé — pour des valeurs tenues dans une table (statuts, pays, utilisateurs).

| Champ | Effet |
|---|---|
| **Description** | Ce que renvoie le lookup. |
| **Connector** | Le connecteur de la requête. Vide : le connecteur de la colonne qui y renvoie. |
| **Query** | La requête qui renvoie codes et libellés. Les boutons voisins modifient la requête, la clonent, en créent une ou la **génèrent** à partir d'une table. |
| **Value** | La colonne de résultat qui porte le code. |
| **Label** | La colonne de résultat affichée à la place du code. |
| **Union sources** | D'autres requêtes, éventuellement sur d'autres connecteurs ou d'autres bases, dont les lignes s'ajoutent à la liste. Chacune doit renvoyer les mêmes colonnes que la requête principale. |
| **Key columns** | Les colonnes qui rendent le code unique quand un même code porte des libellés différents (un code par société, par exemple) : la grille les rapproche des colonnes de même nom de la ligne. |
| **Return params** | Les colonnes qu'une colonne d'écran peut recopier dans d'autres champs du formulaire au choix d'une ligne. |
| **Display fields** | Des colonnes supplémentaires affichées à côté du code et du libellé, pour distinguer des lignes proches. |
| **Filter fields** | Les colonnes affichées qui reçoivent des pastilles de filtre en haut de la liste. |
| **Override** | Comme pour les entrées. |

La requête du lookup déclare ses propres `:params` ; leurs valeurs viennent du champ **Lookup params** de l'entrée, ou de la colonne d'écran. Les listes en cascade se construisent sur l'écran — voir [Séquences et lookups](./build/queries/sequences-and-lookups.md).

---

## Séquences \{#sequences\}

Une séquence est une requête qui renvoie le numéro suivant, typiquement `SELECT COALESCE(MAX(id), 0) + 1 FROM invoices`.

| Champ | Effet |
|---|---|
| **Description** | Ce que numérote la séquence. |
| **Connector** | Le connecteur de la requête. Vide : le connecteur qui la déclenche. |
| **Query** | La requête qui renvoie le numéro suivant. Ses `:params` prennent leurs valeurs dans la ligne en cours d'insertion. |
| **Dd id** | Déclenche la séquence pour toute colonne dont l'entrée porte cette clé, même sans la règle `SEQUENCE`. Vide : seules les entrées qui y renvoient la déclenchent. |
| **Params** | Les paramètres attendus par la requête — à titre d'information. |
| **Override** | Comme pour les entrées. |

La séquence ne se déclenche qu'à l'insertion, dans la transaction de l'insertion.

---

## Framework \{#framework\}

Les listes déroulantes des éditeurs (formats, règles, types de source, méthodes HTTP, alignements de colonne…) proviennent de listes livrées avec le framework. **Surcharger un enum framework** en copie une ici pour la modifier : la copie remplace la liste livrée. **Retirer la surcharge** rétablit les valeurs d'origine.

---

## Analyser une table \{#scan-a-table\}

Le bouton **Scan a table** (libellé anglais) crée des entrées à partir d'une table réelle, au lieu de les saisir une à une. La fenêtre *Generate dictionary items* demande :

- **Connector** — le connecteur à lire ;
- **Store under (app)** — la portée qui reçoit les entrées (celle du connecteur par défaut) ;
- **Table to scan** — la table à analyser ;
- **JD Edwards connector** — retire le préfixe de table de deux caractères pour retrouver la donnée partagée, et lit le dictionnaire de données JD Edwards.

**Scan** affiche une ligne par colonne. Les colonnes qui ont déjà une entrée sont grisées et marquées *(exists)* ; elles ne sont jamais écrasées. Les colonnes manquantes sont cochées. Chaque ligne peut être ajustée avant l'ajout :

| Colonne | Contenu |
|---|---|
| **Label** | Repris du dictionnaire de données JD Edwards sur un connecteur JD Edwards ; vide sinon. |
| **Format** | Déduit du type SQL de la colonne. |
| **Rule** / **Rule value** | Une règle facultative et son argument. |
| **Lookup params** | Les valeurs des paramètres d'un lookup (`TYPE=CUSTOMER`). |
| **Default** | Une valeur par défaut. |
| **Source** | L'origine de la proposition. |

**Add N item(s)** écrit les entrées cochées dans la portée choisie et recharge la configuration. L'[Assistant de création d'écran](./build/screen-assistant.md) effectue la même analyse à son étape *Dictionnaire*.

---

## Export \{#export\}

**Exporter** télécharge `dictionary_entries.xlsx` : une ligne par entrée, toutes portées confondues, avec sa portée, sa clé, son libellé, son format, sa règle, l'argument de la règle, la valeur « faux » et la valeur par défaut — pratique pour comparer avec le dictionnaire de données de l'application source.

---

## Enregistrement

**Enregistrer** vérifie chaque entrée, énumération, lookup et séquence, écrit le fichier et recharge la configuration : les écrans affichent les nouveaux libellés à leur prochain rafraîchissement. **Abandonner** annule les modifications non enregistrées. Les Paramètres sont réservés aux superutilisateurs.

Les libellés traduits suivent la langue de l'utilisateur ; le choix de cette langue est décrit dans [Traductions](./apps/i18n.md).

---

## Pour aller plus loin

- [Connecteurs](./connectors.md) — les requêtes dont les colonnes utilisent le dictionnaire.
- [Séquences et lookups](./build/queries/sequences-and-lookups.md) — construire les requêtes correspondantes.
- [Écrans → Colonnes](./build/screens/columns.md) — les réglages propres à un écran, par-dessus l'entrée.
- [Conditions de formulaire](./form-conditions.md) — afficher, rendre obligatoire ou verrouiller un champ selon d'autres valeurs.
