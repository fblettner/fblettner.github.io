---
title: Menus — vue d'ensemble
description: "La page Menus, le modèle de liste à plat reliée par parent, les quatre types de feuilles (query / endpoint / dashboard / page), et comment l'ajout d'un menu transforme un connecteur en application."
keywords: [Liberty Framework, menus, MenusBuilder, application, navigation, arbre, dossier, feuille, éléments, parent]
---

# Menus — vue d'ensemble

Un **menu** dans Liberty, c'est ce que l'utilisateur voit dans le panneau de navigation à gauche quand il ouvre une de vos applications. Il regroupe écrans, endpoints, tableaux de bord et routes dans un arbre de dossiers et de feuilles.

Trois points à connaître d'emblée :

| Fait | Conséquence |
|---|---|
| Il n'y a **aucun objet « application » séparé** dans Liberty. | Une « application » est simplement un **connecteur qui a un menu attaché** *et* dont l'indicateur `show_in_switcher` est actif. Les deux conditions sont requises pour que sa tuile apparaisse dans le sélecteur d'applications en haut. |
| Les menus sont stockés sous forme de **liste plate d'éléments** reliés par `parent`. | L'arbre est assemblé par le backend — plus facile à éditer à la main, conversion propre vers TOML et retour, les opérations de glisser-déposer ne modifient qu'une seule liste. |
| Chaque clé de menu est un nom de connecteur (`[menus.<connector>]`). | Le connecteur nommé `crm` porte le menu sous `[menus.crm]` ; l'écran `customers` sur `crm` est atteint depuis une feuille avec `target = "customers_get"`. |

La page qui gère les menus est **Paramètres → Menus**.

---

## La page Menus en un coup d'œil

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="mov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#mov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Menus</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="80" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="128" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="168" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde</text>
  <rect x="216" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="256" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="306" y="78" width="280" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="446" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Ajouter un menu pour un connecteur</text>
  <rect x="700" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="740" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="788" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="828" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>

  <text x="40" y="130" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">[menus.crm] · 7 éléments</text>
  <rect x="600" y="118" width="80" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="640" y="133" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Dossier</text>
  <rect x="686" y="118" width="70" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="721" y="133" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Élément</text>
  <rect x="762" y="118" width="64" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="794" y="133" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Dupliquer</text>
  <rect x="832" y="118" width="100" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="882" y="133" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🔗 Rechercher usages</text>

  <rect x="40" y="156" width="400" height="200" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="176" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ARBRE</text>
  <text x="56" y="198" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">▾ 🛡 Sécurité</text>
  <text x="80" y="216" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Utilisateurs</text>
  <text x="80" y="234" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Rôles</text>
  <text x="56" y="256" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">▾ 💼 Pipeline</text>
  <text x="80" y="274" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Clients</text>
  <text x="80" y="292" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📊 Tableau de bord des affaires</text>
  <text x="56" y="314" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Rapports</text>
  <text x="56" y="338" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">↑ ↓ ← →  réordonner · indenter · désindenter</text>

  <rect x="452" y="156" width="508" height="200" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="468" y="176" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSPECTEUR · Clients</text>
  <text x="468" y="200" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">id=customers</text>
  <text x="468" y="218" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">label=Customers</text>
  <text x="468" y="236" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">parent=pipeline</text>
  <text x="468" y="254" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">type=query</text>
  <text x="468" y="272" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">connector=(utilise celui de l'app — crm)</text>
  <text x="468" y="290" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">target=customers_get</text>
  <text x="468" y="308" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">icon=users</text>
  <text x="468" y="326" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">l.fr=Clients</text>
  <text x="468" y="344" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">roles=[user, manager]</text>
</svg>

Trois zones :

| Zone | Ce qu'elle porte |
|---|---|
| **Barre de portée en haut** | Une pastille par application (un connecteur qui a un menu). Cliquer une pastille → son arbre se charge en dessous. Le bouton *＋ Ajouter un menu pour un connecteur* enregistre un nouveau connecteur sous Menus. *Annuler* / *Enregistrer* à droite valident ou annulent les modifications de la page. |
| **Arbre (colonne de gauche)** | L'arbre du menu de l'application sélectionnée. Cliquer une ligne pour la sélectionner et la modifier. Au survol, des icônes d'action apparaissent sur le bord droit de la ligne — *Monter / Descendre*, *Indenter / Désindenter*, *Ajouter un enfant*, *Supprimer*. Un champ de filtre réduit la liste. |
| **Inspecteur (colonne de droite)** | L'éditeur complet de l'élément sélectionné — un formulaire générique sur le schéma `MenuItem`. Les champs s'adaptent au `type` sélectionné (un dossier affiche moins de champs qu'une feuille). |

---

## Ce que porte un menu

La forme du schéma au plus haut niveau :

| Champ | Notes |
|---|---|
| `label` | Le nom d'affichage de l'application. Retombe sur le nom du connecteur si absent. Affiché dans le sélecteur d'applications en haut. |
| `items` | Une liste plate d'éléments de menu, reliés par leur champ `parent`. |

Chaque élément :

| Champ | Requis | Rôle |
|---|---|---|
| `id` | oui | Unique dans ce menu. Référencé par le `parent` des enfants. |
| `parent` | non | Choisir un dossier, ou laisser vide pour un élément de premier niveau. |
| `label` | oui | Le texte affiché dans la barre latérale. |
| `l` | non | Libellés par langue — `l.fr`, `l.de`, etc. |
| `icon` | non | Un nom d'icône [Lucide](https://lucide.dev) (`shield`, `users`, `chart-bar`, …). |
| `type` | non | Vide = dossier. Sinon `query`, `endpoint`, `dashboard` ou `page` (voir [Types d'éléments](./item-types.md)). |
| `connector` | non | Connecteur qui héberge la cible. Vide = le connecteur de l'application (la clé du menu). |
| `target` | conditionnel | Requis sur chaque feuille ; ignoré sur les dossiers. |
| `params` | non | Paramètres fixes transmis à la cible à l'ouverture de l'élément. |
| `roles` | non | Restreint à ces rôles. Vide = visible dès que l'utilisateur peut exécuter la cible. |

---

## Dossier ou feuille

Le champ `type` décide :

| Réglage | Comportement |
|---|---|
| `type` vide | L'élément est un **dossier** — il regroupe des enfants. Pas de `target`, pas de `connector`, pas de `params`. Un dossier est masqué quand aucun de ses descendants n'est visible (le runtime replie les dossiers vides). |
| `type` renseigné | L'élément est une **feuille** — il pointe vers quelque chose que l'utilisateur peut ouvrir. Doit avoir un `target`. |

Les dossiers peuvent être imbriqués sans limite. Les feuilles ne peuvent pas avoir d'enfants — ce sont des nœuds terminaux.

---

## Les quatre types de feuilles

| `type` | Ouvre | `target` est | `connector` |
|---|---|---|---|
| **`query`** | Un écran (TableView) — utilise l'écran associé à cette requête. | Un nom de requête SELECT (`customers_get`). | Le connecteur qui possède la requête. Vide = celui de l'application. |
| **`endpoint`** | Le HttpRunner — déclenche un endpoint de connecteur API. | Un nom d'endpoint. | Le connecteur API. Vide = celui de l'application. |
| **`dashboard`** | Un tableau de bord (graphiques + KPI). | Un id de tableau de bord (depuis `[dashboards.*]`). | NE doit PAS être renseigné (les tableaux de bord résident dans leur propre espace de noms plat). |
| **`page`** | Une route frontend enregistrée (une fonctionnalité personnalisée, par exemple `/nomaflow`). | Le chemin de la route. | NE doit PAS être renseigné (la cible est une route, pas une ressource de connecteur). |

Le validateur du schéma impose :

- Une feuille a besoin d'un `target` — l'enregistrement échoue sans cela.
- Une feuille `dashboard` ou `page` avec un `connector` est rejetée (mauvaise configuration).
- Un dossier avec `target` / `connector` / `params` est rejeté (ces champs n'ont de sens que sur les feuilles).

---

## Enregistrement et rechargement

Le bouton *Enregistrer* valide tout le `MenusFile` (ids uniques, parents existants, pas de cycles), écrit `menus.toml` et déclenche un rechargement à chaud. Les nouveaux menus apparaissent immédiatement dans le sélecteur d'applications en haut — pas de redémarrage de processus.

La validation est stricte sur trois points :

| Vérification | Pourquoi |
|---|---|
| Chaque référence `parent` doit pointer vers un élément existant. | Un parent fantôme rendrait orpheline la sous-arborescence. |
| Pas de cycles (une chaîne de parents qui boucle). | Protection contre les boucles infinies. |
| Pas de `id` en doublon dans le même menu. | Les enfants référencent les parents par id ; les doublons cassent le lien. |

Les doublons entre menus différents sont autorisés — `[menus.crm.security]` et `[menus.nomasx1.security]` coexistent sans conflit.

---

## Comment un connecteur devient une application

**Un connecteur n'apparaît dans le sélecteur d'applications en haut que lorsque les deux conditions sont réunies :**

1. Un menu existe — `[menus.<connector>]` est configuré dans *Paramètres → Menus*.
2. `show_in_switcher = true` sur le connecteur — à activer dans *Paramètres → Connecteurs → \<connecteur> → Paramètres*.

Si l'une des deux manque, le connecteur existe mais ne s'affiche pas dans le sélecteur. L'ordre habituel : configurer le menu d'abord, **puis** cocher `show_in_switcher`.

À noter : le regroupement *Applications* / *Sources de données* sur la page Connecteurs se base uniquement sur l'existence d'un menu — un connecteur avec un menu mais `show_in_switcher = false` reste classé sous *Applications* à cet endroit. Ce regroupement est un confort interne à l'interface Paramètres ; le sélecteur d'applications côté utilisateur est ce que `show_in_switcher` gouverne.

La page suivante détaille le câblage des deux côtés.

---

## Élagage par les permissions

Quand l'utilisateur ouvre l'application, `GET /api/menus` renvoie l'arbre **filtré à ce que l'utilisateur peut exécuter** :

- La permission sous-jacente de chaque feuille (`sql:<connector>:<target>` pour `query`, `api:<connector>:<target>` pour `endpoint`, voir [Permissions et rôles](./permissions-and-roles.md)) est vérifiée.
- Les éléments pour lesquels l'utilisateur n'a pas la permission sont retirés.
- Un dossier sans enfant survivant est replié.
- Les éléments avec un filtre `roles` ne sont conservés que si les rôles de l'utilisateur croisent la liste.

Un utilisateur ne voit que les parties du menu qu'il peut réellement utiliser — pas d'éléments grisés, pas de clics sur des liens en impasse.

---

## Ce qu'on fait concrètement — carte rapide

| Objectif | À lire |
|---|---|
| Faire apparaître un connecteur comme application dans le sélecteur en haut. | [Transformer un connecteur en application](./make-connector-an-app.md). |
| Construire l'arbre — dossiers, feuilles, glisser-déposer, indentation. | [Construire l'arbre](./build-the-tree.md). |
| Choisir le bon type de feuille (écran / endpoint / tableau de bord / route). | [Types d'éléments](./item-types.md). |
| Restreindre les éléments à certains rôles. | [Permissions et rôles](./permissions-and-roles.md). |
| Ajouter icônes et libellés par langue. | [Traductions et icônes](./translations-and-icons.md). |

---

## La suite

- [Transformer un connecteur en application](./make-connector-an-app.md) — câbler `show_in_switcher`, `home` et le menu.
- [Concepts → Menus](./overview.md) — la référence détaillée.
