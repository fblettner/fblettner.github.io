---
title: Connecteurs
description: "Un connecteur est le moyen par lequel Liberty Next atteint une source de données : un connecteur SQL porte les requêtes nommées d'un pool de base de données, un connecteur API les endpoints nommés d'une API web. Modifiés dans Paramètres → Connecteurs ; un connecteur doté d'un menu est une application."
keywords: [Liberty Next, connecteur, SQL, API, pool, requête nommée, endpoint, tables, requêtes, séquences, lookups, permissions, multi-pools, Oracle thick]
---

# Connecteurs

Un **connecteur** est le moyen par lequel Liberty Next atteint une source de données. Chaque écran, graphique, tableau de bord, action, étape de tâche et réponse de l'assistant désigne le connecteur et la requête — ou l'endpoint — qu'il utilise.

| Type | Atteint | Contient |
|---|---|---|
| **SQL** | Une base de données, par un [pool](#pools). | Des **requêtes** nommées, de quatre types : tables, requêtes, séquences, lookups. |
| **API** | Une API web (REST, JSON). | Des **endpoints** nommés : méthode, chemin, en-têtes, corps, extraction de la réponse. |

Un connecteur doté d'un menu est une **application** — voir [Applications](./apps/overview.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cnp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cnp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cnp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cnp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="410" rx="14" fill="url(#cnp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Connecteurs</text>
  <rect x="710" y="28" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="754.5" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Connecteur</text>
  <rect x="805" y="28" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="844.0" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="889" y="28" width="83" height="22" rx="5" fill="url(#cnp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="930.5" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="170" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="96" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <rect x="246" y="104" width="158" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="119" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">▣ crm</text>
  <text x="256" y="145" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▣ sales</text>
  <text x="252" y="178" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCES DE DONNÉES</text>
  <text x="256" y="199" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⛁ reporting</text>
  <text x="256" y="223" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⛁ warehouse</text>
  <text x="256" y="247" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⇄ crm_api</text>
  <text x="426" y="92" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">crm · SQL</text>
  <rect x="426" y="104" width="347" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="468.5" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Paramètres…</text>
  <rect x="512" y="105" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="539.5" y="119.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tables</text>
  <line x1="568" y1="109" x2="568" y2="123" stroke="#334155" strokeWidth="1"/>
  <text x="602.0" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Requêtes</text>
  <line x1="636" y1="109" x2="636" y2="123" stroke="#334155" strokeWidth="1"/>
  <text x="673.0" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Séquences</text>
  <line x1="710" y1="109" x2="710" y2="123" stroke="#334155" strokeWidth="1"/>
  <text x="741.5" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Lookups</text>
  <rect x="830" y="104" width="130" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="895.0" y="118.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Ajouter des requêtes</text>
  <rect x="426" y="146" width="534" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="166" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">customers</text>
  <text x="546" y="166" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="820" y="153" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="165.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <rect x="853" y="153" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="868.0" y="165.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PUT</text>
  <rect x="886" y="153" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="901.0" y="165.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POS</text>
  <rect x="919" y="153" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="934.0" y="165.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DEL</text>
  <rect x="426" y="186" width="534" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="206" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">deals</text>
  <text x="546" y="206" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires</text>
  <rect x="820" y="193" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="205.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <rect x="853" y="193" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="868.0" y="205.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PUT</text>
  <rect x="886" y="193" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="901.0" y="205.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POS</text>
  <rect x="919" y="193" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="934.0" y="205.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DEL</text>
  <rect x="426" y="226" width="534" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="246" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">activities</text>
  <text x="546" y="246" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Activités</text>
  <rect x="820" y="233" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="245.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <rect x="853" y="233" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="868.0" y="245.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PUT</text>
  <rect x="886" y="233" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="901.0" y="245.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POS</text>
  <rect x="919" y="233" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="934.0" y="245.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DEL</text>
  <rect x="10" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Applications et sources</text>
  <text x="20" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un connecteur avec menu = une app</text>
  <line x1="210" y1="107.0" x2="240" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="10" y="250" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteur API</text>
  <text x="20" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">URL de base, auth, endpoints</text>
  <line x1="210" y1="267.0" x2="252" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq vues</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">réglages et quatre types</text>
  <line x1="1000" y1="77.0" x2="640" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une table</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lecture, maj, insertion, suppr.</text>
  <line x1="1000" y1="217.0" x2="960" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
</svg>

---

## Paramètres → Connecteurs \{#page\}

La liste de gauche a deux groupes : **Applications** (connecteurs dotés d'un menu) et **Sources de données** (les autres). **＋ Connecteur** en crée un (nom, type SQL ou API) ; le volet de droite modifie le connecteur sélectionné. **Enregistrer** écrit `connectors.toml` et applique la modification sans redémarrage ; **Abandonner** annule les modifications en attente. Les boutons propres au connecteur — **Cloner** (avec sa portée du dictionnaire, ses écrans, son menu, ses graphiques et tableaux de bord), **Renommer** (toutes les références réécrites), **Supprimer** (avec tout ce qui lui appartient) — se trouvent sur sa vue de réglages.

### Pools \{#pools\}

Un pool est une connexion à une base de données, définie dans **Paramètres → Pools** et partagée par les connecteurs qui l'utilisent :

| Champ | Effet |
|---|---|
| **Url** | L'URL de connexion (`postgresql+asyncpg://user@hôte:5432/base`, `oracle+oracledb://user@hôte:1521/?service_name=…`). Choisir d'abord un **Dialect** remplit un modèle. `${VARIABLE}` accepté. |
| **Password** | Tenu hors de l'URL ; chiffré à l'enregistrement. |
| **Dialect** | `postgresql`, `oracle`, `sqlite`, `mysql`, `mssql`… — déduit de l'URL s'il est vide ; choisit la [variante par dialecte](./build/queries/per-dialect-sql.md) d'une requête. |
| **Schemas**, **DB Links** | Les valeurs des jetons `#SCHEMA.<NOM>#` et `#DBLINK.<NOM>#` — voir [plus bas](#schema-and-db-link-tokens). |
| **Pool size**, **Max overflow**, **Pool pre ping**, **Pool recycle** | Connexions gardées ouvertes, connexions supplémentaires sous charge, contrôle de validité, recyclage. |
| **Max rows** | Limite de lignes par défaut des lectures du pool (1 000 si vide). |
| **Arraysize** | Oracle : lignes lues par aller-retour ; à relever (500 à 1 000) pour les gros volumes. |
| **Trim strings** | Retire les espaces de fin des textes de longueur fixe (Oracle `CHAR`, JD Edwards). |
| **Coalesce nulls** | À l'écriture, remplace les valeurs vides par un espace ou 0 (colonnes texte Oracle `NOT NULL`). |
| **Debug sql** | Journalise chaque instruction exécutée sur le pool. |

---

## Connecteur SQL \{#sql\}

La barre de modes d'un connecteur SQL propose cinq vues : **Paramètres…**, **Tables**, **Requêtes**, **Séquences**, **Lookups**. Les quatre vues de requêtes sont décrites dans [Requêtes — vue d'ensemble](./build/queries/overview.md).

### Réglages \{#connection-fields\}

Le mode **Settings** d'un connecteur SQL (le bouton *Settings* de la page du connecteur) regroupe ses réglages de connexion.

| Champ | Effet |
|---|---|
| **Pool** | Le pool sur lequel s'exécutent les requêtes — une liste des pools définis dans *Paramètres → Pools*. Le connecteur reprend l'adresse, les identifiants et le dialecte du pool. |
| **Pools** | Les pools supplémentaires sur lesquels les mêmes requêtes peuvent s'exécuter — voir [Connecteurs multi-pools](#multi-pool). |
| **Show In Switcher** | Affiche le connecteur comme une application dans le sélecteur en haut du menu latéral — avec un menu, voir [Faire d'un connecteur une application](./build/menus/make-connector-an-app.md). |
| **Home** | L'entrée de menu ouverte quand l'application est choisie. |
| **Max Rows** | Nombre maximal de lignes d'une lecture par défaut ; sinon celui du pool, puis 1 000. La limite d'un écran ou d'une requête l'emporte. |
| **Dd Prefix** | Longueur du préfixe de table dans les noms de colonnes (JD Edwards : `2`, pour que `ABCO`, `MCCO` et `SDCO` portent tous l'élément `CO`). Utilisé par le [périmètre de données](./build/secure/roles-and-permissions.md#data-scope) des rôles. `0` : les noms de colonnes sont les éléments. |

### Éditeur de requête

**＋ Ajouter une requête**, ou un clic sur une requête existante, ouvre l'éditeur de requête :

| Champ | Effet |
|---|---|
| **Name** | Identifiant de la requête — utilisé dans l'URL (`/api/sql/billing/<nom>`) et dans la permission (`sql:billing:<nom>`). |
| **SQL** | L'instruction, avec ses paramètres `:nom` et ses valeurs serveur `{{JETON}}`. Un texte unique, ou une variante par base de données — voir [Variantes SQL par dialecte](./build/queries/per-dialect-sql.md). |
| **Writable** | Désactivé : seul un SELECT est accepté. Activé : INSERT / UPDATE / DELETE / CALL / MERGE. |
| **Params** | Les paramètres déclarés (nom, libellé, valeur par défaut) — voir [Liaison de paramètres](./build/queries/parameter-binding.md). |
| **Label**, **Description** (Advanced) | Affichés dans les listes de choix, et lus par l'assistant IA pour choisir ses requêtes. |

L'éditeur SQL colore la syntaxe, complète les noms de tables et de colonnes à partir du pool, et propose un menu **Token** (`{{LOGIN}}`, `{{SYSDATE}}`…) et un menu **Pool schemas**. Les boutons de l'éditeur — **Find usages**, **Renommer**, **Changer le type**, **Déplacer**, **Cloner**, **Supprimer** — sont décrits dans [Créer une requête personnalisée](./build/queries/create-custom.md).

### Jetons de schéma et de DB link \{#schema-and-db-link-tokens\}

Une requête SQL peut porter deux jetons de substitution : le même texte tourne alors sur n'importe quel pool — local ou distant — sans qu'il faille maintenir une variante de la requête par environnement.

| Jeton | Résout en | Où le configurer |
|---|---|---|
| `#SCHEMA.<NOM>#` | Le mappage du pool pour le schéma `<NOM>` (par ex. `SY920.`). Vide quand le pool n'a pas d'entrée — le jeton disparaît et le nom de table est écrit brut. | Paramètres du pool — la table *Schemas* de chaque pool. |
| `#DBLINK.<NOM>#` | Le suffixe de DB link du pool pour le schéma `<NOM>` (par ex. `@ORCLPROD`). Ajouté **après** le nom de table : `#SCHEMA.SY#F0092#DBLINK.SY#` devient donc `SY920.F0092@ORCLPROD`. Vide quand il n'y a pas d'entrée — rien n'est ajouté et la requête reste locale. | Paramètres du pool — la table *DB links* de chaque pool (`dblinks = { SY = "@ORCLPROD", … }`). |

Les deux jetons sont indépendants : `#SCHEMA.…#` préfixe la table, `#DBLINK.…#` la suffixe. Une même requête tourne en local (les deux mappages vides), sur un schéma distant sans lien (schéma mappé, dblink vide), ou via un DB link (les deux mappés) — c'est le pool qui décide quelle forme émettre.

Une valeur de DB link non vide doit être une référence `@lien` nue (commence par `@`, puis uniquement lettres, chiffres, `_`, `$`, `#` et `.`). Toute autre valeur fait échouer la requête à son exécution — garde-fou contre une valeur qui tenterait d'introduire du SQL dans l'instruction.

### Mode thick d'Oracle \{#oracle-thick\}

Le pilote Oracle fonctionne par défaut en mode *thin* : aucun client Oracle nécessaire, chaque appel s'exécute dans la boucle d'événements du serveur. Deux cas demandent le mode *thick*, qui passe par l'Oracle Instant Client :

- le **chiffrement réseau natif** (NNE) exigé par la base — le mode thin échoue avec `DPY-3001` ;
- la lecture d'un **LOB au travers d'un DB link** — le mode thin échoue avec `ORA-22992` / `ORA-03149`.

Cocher **Oracle thick mode** dans **Paramètres → App** (section *App*) et redémarrer le serveur : tous les pools Oracle passent alors en mode thick — le réglage vaut pour tout le serveur, pas pour un pool. Les pools PostgreSQL ne sont pas concernés. L'Instant Client est inclus dans l'image Docker (amd64 et arm64) ; une installation Python en a besoin sur l'hôte.

---

### Connecteurs multi-pools \{#multi-pool\}

Un même connecteur SQL peut desservir **plusieurs pools** — plusieurs bases ou instances JDE — sans cloner le connecteur ni dupliquer ses écrans. À côté du **Pool** par défaut, listez les autres dans **Pools** (deux listes déroulantes de pools configurés, dans le mode **Settings** du connecteur) ; les mêmes requêtes nommées et les mêmes écrans s'exécutent alors sur n'importe quel pool de l'ensemble.

Le pool se choisit à l'exécution :

- **Dans l'application** — quand l'application courante passe par un connecteur multi-pools, un choix **Pool** apparaît dans le menu latéral, sous le sélecteur d'applications (*Default* désigne le pool propre du connecteur). Choisir un pool relance les écrans de l'application sur l'instance retenue. Le choix est conservé par application dans le navigateur, et ne s'applique qu'aux connecteurs qui déclarent réellement ce pool — les autres connecteurs (mono-pool) de l'application gardent leur pool par défaut au lieu d'échouer.
- **Dans les tâches** — une étape `sql_copy` accepte `pool` dans son bloc `source` ou `target`, une étape `sql_query` accepte `pool`, pour cibler une instance précise sans nouveau connecteur ([étapes](../nomaflow/steps.md)). Ces clés se définissent dans `jobs.toml` ; l'éditeur d'étape ne les affiche pas.

L'ensemble atteignable est le `pool` par défaut plus `pools` ; une requête ou une tâche ne peut jamais atteindre un pool en dehors, et seuls les **noms** de pool arrivent au sélecteur — jamais d'URL ni d'identifiants. Un connecteur avec un seul `pool` se comporte exactement comme avant.

---

## Connecteur API \{#api\}

Un connecteur API appelle une API web. Son éditeur comporte cinq onglets :

| Onglet | Contenu |
|---|---|
| **Connection** | **Base URL** (`https://api.example.com`, `${VARIABLE}` accepté), **Default headers**, **Timeout**, **Vérification SSL** (*true*, *false*, ou une variable comme `${JDE_AIS_VERIFY_SSL:-true}`, conservée telle quelle), **Show in switcher**, **Home**. |
| **Authentication** | **Auth type** : *None*, *Basic* (utilisateur et mot de passe), *Bearer* (jeton fixe), *API Key* (nom de l'en-tête et clé), *OAuth2 / JWT* (endpoint de jeton, corps et en-têtes de la demande, champ du jeton, durée de vie). Les secrets sont chiffrés à l'enregistrement. |
| **Endpoints** | Les endpoints nommés — voir ci-dessous. |
| **Webhooks** | Pas encore disponible : un système externe ne peut pas pousser d'événements vers Liberty Next. |
| **Test** | **Tester la connexion** vérifie l'authentification ; **Run** appelle un endpoint avec des valeurs de paramètres et affiche la réponse. Rien n'est enregistré. |

Un endpoint comporte :

| Champ | Effet |
|---|---|
| **Name** | Utilisé dans l'URL (`/api/http/<connecteur>/<nom>`) et dans la permission (`api:<connecteur>:<nom>`). |
| **Method**, **URL path** | `GET`, `POST`, `PUT`, `PATCH`, `DELETE`… ; le chemin s'ajoute à l'URL de base (une URL absolue la remplace). |
| **Headers**, **Query params** | Ajoutés à ceux du connecteur ; les valeurs acceptent des `{{variables}}`. |
| **Body template**, **Body Content-Type** | Le corps de la requête, avec des `{{variables}}`. |
| **Response field**, **Response mappings** | Un chemin dans la réponse JSON (`data.0.id`), ou plusieurs chemins nommés ; vide, la réponse entière est renvoyée. |
| **Parameters** | Les `{{variables}}` déclarées, avec libellé et valeur par défaut. |
| **Label**, **Description** | Affichés dans les listes de choix et à l'assistant IA. |

Les endpoints sont appelés par les actions d'écran (`call_api`), les entrées de menu (type `endpoint`), les règles de notification (canal `action`), les plugins (`connectors.api(…).call(…)`) et — s'il y est autorisé — l'assistant IA. Une étape Nomaflow `http` appelle directement une URL, sans connecteur.

---

## Découverte de schéma et indices de colonnes \{#schema-discovery-and-column-hints\}

Une requête ne déclare pas de liste de colonnes : ses colonnes sont celles que renvoie la base à l'exécution. L'apparence d'une colonne sur un écran est déterminée, dans cet ordre, par :

1. les **réglages de colonne de l'écran** (onglet Colonnes) — libellé, format, largeur, règle, conditions ;
2. l'**entrée du dictionnaire** dont la clé est le nom de la colonne, ou celle indiquée dans le champ `dd` de la colonne — libellé par langue, format, règle (booléen, énumération, lookup…) ;
3. à défaut, le nom de la colonne et l'affichage par défaut de son type.

Une colonne n'a pas besoin de réglage propre : une entrée du dictionnaire portant son nom suffit. Voir [Dictionnaire](./dictionary.md#column-reference) et [Écrans → Colonnes](./build/screens/columns.md).

---

## Permissions

Chaque requête et chaque endpoint a sa propre permission :

| Permission | Autorise |
|---|---|
| `sql:<connecteur>:<requête>` | L'exécution de la requête — en lecture comme en écriture. |
| `api:<connecteur>:<endpoint>` | L'appel de l'endpoint. |

Elles s'accordent par les rôles : autoriser une entrée de menu accorde ce qu'elle ouvre, et **Beyond the menus** accorde une requête, un endpoint ou un connecteur entier — des motifs comme `sql:billing:report_*` sont acceptés. Voir [Rôles et permissions](./build/secure/roles-and-permissions.md).

---

## Conseils

- **Nommer les requêtes d'après l'entité** — `invoices_get`, `invoices_by_status_get` — les listes se lisent d'elles-mêmes.
- **Décrire les requêtes** que doit utiliser l'assistant IA : libellé et description (onglet Advanced).
- **Préférer le dictionnaire aux libellés par écran** : une entrée sert tous les écrans.
- **Tenir les secrets hors des fichiers** par des références `${VARIABLE}` quand un gestionnaire de secrets est en place — voir [Chiffrement et secrets](./configuration/encryption-secrets.md).

---

## Sous le capot

Connecteurs et pools sont enregistrés dans `connectors.toml`, dans le dossier de configuration des applications. Les pages des Paramètres sont le moyen normal de les modifier ; la même configuration est accessible par l'API REST sous `/admin/config/connectors` — voir [API REST](../references/rest-api.md#admin-config).

---

## Pour aller plus loin

- [Requêtes — vue d'ensemble](./build/queries/overview.md) — les quatre types de requêtes et leurs éditeurs.
- [Dictionnaire](./dictionary.md) — libellés, formats et listes de valeurs des colonnes.
- [Liaison de paramètres](./build/queries/parameter-binding.md) — paramètres, sources intégrées et jetons.
- [Écrans](./build/screens/overview.md) — grilles et dialogues sur les requêtes.
