---
title: Types d'éléments
description: "Les sept types de feuilles — screen / query / endpoint / dashboard / page / job / url — ce qu'ouvre chacun, la forme du champ target, la règle du connecteur, et quand recourir à chacun."
keywords: [Liberty Framework, élément de menu, query, endpoint, dashboard, page, target, connector, feuille, dossier]
---

# Types d'éléments

Un élément de menu est soit un **dossier** (sans `type`), soit une **feuille** qui ouvre quelque chose. Le `type` de la feuille décide ce qu'est ce quelque chose et ce que signifient les champs `target` / `connector`.

Sept types de feuilles :

| `type` | Ouvre | `target` est | `connector` |
|---|---|---|---|
| **`screen`** | Un écran conçu. | L'identifiant de l'écran, choisi parmi les écrans de l'application. | En général vide — le connecteur de l'écran l'exécute. |
| **`query`** | La même vue en grille, choisie parmi les requêtes brutes. | Un nom de requête SELECT. | Le connecteur qui possède la requête. Vide = le connecteur de l'application. |
| **`endpoint`** | Le HttpRunner — déclenche un endpoint de connecteur API. | Un nom d'endpoint. | Le connecteur API. Vide = celui de l'application. |
| **`dashboard`** | Un tableau de bord (graphiques + KPI). | `<app>.<id>` du tableau de bord. | Ne doit pas être renseigné (l'application figure dans la cible). |
| **`page`** | Une route frontend enregistrée — une fonctionnalité personnalisée comme `/nomaflow`. | Le chemin de la route. | NE doit PAS être renseigné. |
| **`url`** | Une adresse externe, dans un nouvel onglet du navigateur. | L'adresse : `https://…`, un chemin de ce serveur, ou `#URL.NOM#/…` — voir [Adresses externes](../settings-app.md#external-urls). | NE doit PAS être renseigné. |
| **`job`** | La page d'une tâche Nomaflow : ses fichiers et paramètres, Lancer, le journal en direct, les exécutions précédentes. | L'identifiant de la tâche. | NE doit PAS être renseigné. |

Cette page détaille chacun avec des exemples concrets.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 490" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mit-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mit-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mit-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mit-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="360" y="20" width="600" height="450" rx="14" fill="url(#mit-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="380" y="40" width="560" height="410" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="394" y="62" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="441.16" y="62" fill="#94a3b8" fontSize="8.6" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="789" y="50" width="139" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="858.5" y="63.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Rechercher les dépendances</text>
  <rect x="668" y="50" width="117" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="726.5" y="63.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Rechercher les usages</text>
  <rect x="615" y="50" width="49" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="639.5" y="63.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Cloner</text>
  <rect x="571" y="52.5" width="36" height="15" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="589.0" y="63.3" fill="#4a9eff" fontSize="7.8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">écran</text>
  <line x1="380" y1="78" x2="940" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="392" y="88" width="53" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="418.5" y="102.3" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="478.0" y="102.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <text x="549.5" y="102.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <line x1="392" y1="116" x2="928" y2="116" stroke="#1f2937" strokeWidth="1"/>
  <text x="392" y="130" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ICON</text>
  <rect x="392" y="135" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="401" y="149.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">users</text>
  <text x="392" y="172" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TYPE</text>
  <rect x="392" y="177" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="401" y="191.5" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">screen</text>
  <text x="439.736" y="191.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Screen (designed view)</text>
  <rect x="392" y="202" width="536" height="140" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="396" y="206" width="528" height="20" rx="4" fill="rgba(74,158,255,0.14)" stroke="transparent" strokeWidth="1"/>
  <text x="404" y="220" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">screen</text>
  <text x="480" y="220" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Screen (designed view)</text>
  <text x="404" y="242" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">query</text>
  <text x="480" y="242" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Query (raw table view)</text>
  <text x="404" y="264" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">endpoint</text>
  <text x="480" y="264" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Endpoint (API call)</text>
  <text x="404" y="286" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">dashboard</text>
  <text x="480" y="286" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Dashboard (widget grid)</text>
  <text x="404" y="308" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">page</text>
  <text x="480" y="308" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Page (frontend route)</text>
  <text x="404" y="330" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">job</text>
  <text x="480" y="330" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Job (run it, follow its log)</text>
  <text x="392" y="362" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="392" y="367" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="401" y="381.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="916" y="381.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="392" y="404" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TARGET</text>
  <rect x="392" y="409" width="536" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="401" y="423.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">customers  Clients</text>
  <text x="916" y="423.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="20" y="171" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="186" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type</text>
  <text x="30" y="199" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide = dossier</text>
  <line x1="200" y1="188.0" x2="392" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="20" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les types de feuilles</text>
  <text x="30" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écran, requête, point d'accès…</text>
  <line x1="200" y1="249.0" x2="392" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="20" y="403" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="418" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cible</text>
  <text x="30" y="431" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listée selon le type choisi</text>
  <line x1="200" y1="420.0" x2="392" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="1120" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Entrée choisie</text>
  <text x="1130" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son type en pastille</text>
  <line x1="1120" y1="77.0" x2="605" y2="63" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="1120" y="306" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="321" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">job</text>
  <text x="1130" y="334" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une tâche Nomaflow à lancer</text>
  <line x1="1120" y1="323.0" x2="680" y2="326" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="1120" y="370" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="385" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteur</text>
  <text x="1130" y="398" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requête / point d'accès ; vide = l'app</text>
  <line x1="1120" y1="387.0" x2="928" y2="386" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
</svg>

---

## `screen` et `query` — ouvrir un écran

Les deux types de feuilles les plus courants. Ils ouvrent une grille, mais pas depuis la même cible :

- **`screen`** ouvre un écran conçu. La cible est l'**identifiant de l'écran** (`customers`), dans l'application du menu : l'écran s'ouvre avec ses propres colonnes, filtres, vues et fiche — même quand un autre écran lit la même requête. La liste *Target* de l'Inspecteur propose les écrans de l'application, chacun avec son libellé et son identifiant.
- **`query`** ouvre les lignes d'une requête. La cible est le **nom de la requête** (`customers_get`) : la liste propose la requête de lecture de chaque table (`<table>_get`, libellée par la table) et les requêtes autonomes. Si un écran est conçu sur cette requête, ses réglages de colonnes s'appliquent ; sinon les lignes s'affichent dans une grille simple.

### Champs

| Champ | Notes |
|---|---|
| **`type`** | `screen` ou `query`. |
| **`target`** | `screen` : l'identifiant de l'écran — `customers`, `security_users`. `query` : le nom de la requête — `customers_get`. La liste déroulante présente les cibles valides pour le type et le connecteur choisis. |
| **`connector`** | `query` : le connecteur qui possède la requête ; vide = l'application du menu (cas le plus courant). `screen` : en général vide — le connecteur de l'écran exécute ses requêtes. |
| **`params`** | Optionnel. Valeurs fixes des paramètres `:placeholder` de la requête — par exemple une feuille *Mes tickets ouverts* avec `params = { OWNER = "#LOGIN_USER#", STATUS = "OPEN" }`. |

### Qui voit la feuille

Une feuille `screen` s'affiche pour qui peut exécuter la requête de lecture de l'écran sur le connecteur de l'écran (`sql:<connecteur>:<requête de lecture>`) ; une feuille `query`, pour qui peut exécuter la requête elle-même. Les `roles` de l'entrée la restreignent encore — voir [Permissions et rôles](./permissions-and-roles.md).

### Exemple

```toml
[[menus.crm.items]]
id = "pipeline.customers"
parent = "pipeline"
label = "Customers"
l.fr = "Clients"
icon = "users"
type = "screen"
target = "customers"
```

Ouvre l'écran `customers` de l'application `crm`.

```toml
[[menus.crm.items]]
id = "my_open_tickets"
label = "My open tickets"
l.fr = "Mes tickets ouverts"
icon = "ticket"
type = "query"
target = "tickets_get"
params = { OWNER = "#LOGIN_USER#", STATUS = "OPEN" }
```

Ouvre les lignes de `tickets_get`, avec l'écran conçu sur cette requête, limitées aux tickets ouverts de l'utilisateur. Le jeton `#LOGIN_USER#` se résout depuis le JWT — voir [Liaison des paramètres](../queries/parameter-binding.md).

---

## `endpoint` — déclencher un endpoint API

Le deuxième type de feuille : ouvre le HttpRunner avec un endpoint de connecteur API présélectionné. L'utilisateur obtient un formulaire qui demande les paramètres de l'endpoint et un bouton *Exécuter*.

### Champs

| Champ | Notes |
|---|---|
| **`type`** | `endpoint`. |
| **`target`** | Un nom d'endpoint déclaré sur le connecteur API. La liste déroulante liste tous les endpoints du connecteur choisi. |
| **`connector`** | Le connecteur API. Vide = l'application du menu (fonctionne quand l'application est elle-même un connecteur API). |
| **`params`** | Optionnel. Pré-remplit les champs du formulaire. |

### Quand l'utiliser

- Intégrations personnalisées que l'utilisateur déclenche manuellement (synchronisation depuis un système externe, rafraîchissement d'un cache).
- Opérations qui ne sont pas naturellement un écran — tests de webhook, POST ad hoc.
- Outils et endpoints de diagnostic.

### Exemple

```toml
[[menus.nomaubl.items]]
id = "ppf.sync_directory"
parent = "ppf"
label = "Sync PPF directory"
l.fr = "Synchroniser l'annuaire PPF"
icon = "refresh-cw"
type = "endpoint"
connector = "ppf"
target = "sync_directory"
```

Ouvre le HttpRunner pour l'endpoint `sync_directory` du connecteur API `ppf`. L'utilisateur remplit les champs requis du formulaire et clique *Exécuter*.

---

## `dashboard` — ouvrir un tableau de bord

Un tableau de bord est une page de graphiques et de KPI déclarée dans `[dashboards.*]`. L'élément de menu pointe vers l'id du tableau de bord.

### Champs

| Champ | Notes |
|---|---|
| **`type`** | `dashboard`. |
| **`target`** | `<app>.<id>` — le tableau de bord `[dashboards.<app>.<id>]`, par exemple `crm.pipeline`. La liste déroulante présente tous les tableaux de bord. |
| **`connector`** | **Ne doit pas être renseigné** — l'application fait partie de la cible ; le validateur refuse un `connector` superflu. |
| **`params`** | Optionnel. Pré-remplit les filtres du tableau de bord. |

### Quand l'utiliser

- Vues d'ensemble pour la direction (revenu par région, pipeline par étape).
- Tableaux de bord opérationnels (statut des jobs, santé du système).
- Tout ce qui est une mise en page de graphiques plutôt qu'un seul tableau.

### Exemple

```toml
[[menus.crm.items]]
id = "pipeline.deals_dashboard"
parent = "pipeline"
label = "Deals dashboard"
l.fr = "Tableau de bord des affaires"
icon = "chart-bar"
type = "dashboard"
target = "crm.deals_overview"
```

Ouvre le tableau de bord `deals_overview` de l'application `crm` — noter l'absence de champ `connector`.

---

## `page` — ouvrir une route frontend enregistrée

L'échappatoire. Une feuille `page` navigue vers une route React écrite à la main — une fonctionnalité personnalisée que le framework ne compose pas à partir de requêtes / écrans / tableaux de bord. L'exemple classique est le produit Nomaflow, qui a ses propres routes (`/nomaflow`, `/nomaflow/jobs/:id`, `/nomaflow/runs/:runId`) pour l'UI de l'ordonnanceur.

### Champs

| Champ | Notes |
|---|---|
| **`type`** | `page`. |
| **`target`** | Le chemin de la route — `/nomaflow`, `/runs/dashboard`, etc. Les routes doivent être **enregistrées** dans le frontend (le menu ne les crée pas ; il y pointe). |
| **Pages de tests** | `/liberty/tests` et `/liberty/test-results` placent les pages [Tests](../tests.md) et [Résultats des tests](../../../monitoring/test-results.md) dans le menu d'une application ; les entrées sont visibles des détenteurs de `tests:view`. |
| **`connector`** | **Ne doit pas être renseigné**. La cible est une route, pas une ressource de connecteur. |
| **`params`** | Optionnel. Le runtime les ajoute en tant que paramètres de chaîne de requête sur la route. |

### L'explorateur de données \{#explorer\}

`/explorer` ouvre l'[explorateur de données](../../explorer/overview.md) sur le premier modèle de l'application ; l'entrée s'affiche pour qui peut utiliser l'un des modèles de l'application. `/explorer/<app>/<model>` l'ouvre sur un modèle précis — `/explorer/crm/sales` — et le sélecteur de modèle permet toujours d'en changer ; l'entrée demande `explorer:<app>:<model>`.

Une analyse ou un tableau de bord de l'explorateur, enregistré et partagé, se place dans un menu depuis l'explorateur lui-même, avec **Ajouter à un menu** (application, dossier, libellé) — voir [Ajouter à un menu](../../explorer/saved-and-dashboards.md#menu). L'entrée créée est une feuille `page` dont la cible est :

| Cible | Ouvre |
|---|---|
| `/explorer/<app>/<model>/a/<id>` | L'analyse enregistrée `<id>`, son résultat d'emblée. |
| `/explorer/<app>/<model>/d/<id>` | Le tableau de bord d'explorateur `<id>`. |

Comme un lien vers le modèle, elle s'affiche pour qui peut utiliser le modèle (`explorer:<app>:<model>`).

### Une page livrée par une application \{#app-page\}

`/app/<app>/<page>` ouvre une page qu'une application livre avec ses plugins — une structure à parcourir, un parcours guidé, tout ce qui n'est ni une grille ni une fiche. L'entrée demande la permission `page:<app>:<page>`. Voir [Plugins → Les pages d'une application](../../apps/plugins.md#pages).

### Quand l'utiliser

- Un produit embarqué (Nomaflow, les tableaux de bord spécialisés de Nomasx-1).
- Un composant React personnalisé pour quelque chose que les requêtes ou écrans ne peuvent pas exprimer (logs en streaming, visualisations interactives complexes).
- Un composant tiers intégré à Liberty.

Le type `page` est rare dans les applications construites par les utilisateurs — la plupart des équipes construisent avec des requêtes / écrans / tableaux de bord. Recourir à `page` quand l'un des trois autres ne peut vraiment pas exprimer la surface souhaitée.

### Exemple

```toml
[[menus.crm.items]]
id = "ops"
label = "Operations"
l.fr = "Opérations"
icon = "settings"

[[menus.crm.items]]
id = "ops.nomaflow"
parent = "ops"
label = "Job scheduler"
l.fr = "Ordonnanceur de tâches"
icon = "calendar"
type = "page"
target = "/nomaflow"
```

Une feuille *Ordonnanceur de tâches* dans le dossier Opérations de l'application `crm`, qui pointe vers la route principale du produit Nomaflow.

---

## `job` — lancer une tâche Nomaflow \{#job\}

Une feuille `job` ouvre la page d'une tâche Nomaflow pour des utilisateurs qui n'administrent pas Nomaflow : un sélecteur de fichier par étape de chargement qui en attend un, les paramètres que la tâche déclare pour ses utilisateurs, **Lancer**, le journal suivi en direct et les exécutions précédentes.

### Champs

| Champ | Valeur |
|---|---|
| **`type`** | `job` — *Job (run it, follow its log)* dans la liste des types. |
| **`target`** | L'identifiant de la tâche. La liste présente chaque tâche avec la première ligne de sa description. |
| **`connector`** | NE doit PAS être renseigné. |
| **`params`** | Facultatif : `{ preset = "Licences" }` lance la tâche avec l'un de ses préréglages — une tâche, plusieurs entrées de menu. |

L'entrée demande la permission `job:<id>` (type de règle **Tâche** dans le bloc *Au-delà des menus* d'un rôle) ; `!job:<id>` la masque. Voir [Lancer une tâche depuis le menu d'une application](../../../nomaflow/jobs/run-from-menu.md).

### Exemple

```toml title="menus.toml"
[[menus.sales.items]]
id = "import_sales"
parent = "import"
label = "Fichier ventes (un mois)"
type = "job"
target = "sales-load-month"
```

---

## Dossiers — regrouper des feuilles

Un dossier est le seul type d'élément **sans** `type`. Il ne porte ni `target`, ni `connector`, ni `params` — seulement `id`, `label`, `icon` et `l` (traductions).

### Validation

Le validateur du schéma rejette un dossier qui porte :

- `target` renseigné — les dossiers n'ont pas de cibles.
- `connector` renseigné — les dossiers n'ouvrent rien.
- `params` non vide — idem.

### Comportement

Les dossiers sont **repliés à vide**. Si chaque enfant d'un dossier est masqué (par exemple parce que l'utilisateur n'a la permission sur aucun), le dossier lui-même disparaît du menu rendu. L'utilisateur ne voit jamais de dossier vide.

### Imbrication

Les dossiers peuvent être imbriqués sans limite. Une application Liberty typique utilise 2 ou 3 niveaux :

```
Pipeline (dossier)
├── Clients (query)
├── Affaires (query)
├── Activités (query)
└── Rapports (dossier)
    ├── Synthèse quotidienne (dashboard)
    └── Revenu mensuel (query)
```

Au-delà de 3 niveaux, l'application est généralement sur-regroupée — aplatir quand c'est possible.

---

## Règles transversales

### Le champ `connector` retombe par défaut sur l'application

Pour les feuilles `query` et `endpoint`, laisser `connector` vide signifie « le connecteur de l'application » — c'est-à-dire le connecteur nommé par la clé du menu (`[menus.crm]` → `connector = "crm"`).

Renseigner `connector` explicitement quand :

- La requête réside sur un connecteur **différent** — application `crm` qui affiche une feuille lisant depuis `reporting`.
- On lit des données partagées (un connecteur `default` pour les requêtes du framework).

Pour `dashboard` et `page`, le champ est **toujours vide** — le validateur l'impose.

### `params` porte des valeurs fixes

`params` est une table plate clé → valeur transmise à la cible à l'ouverture :

```toml
params = { STATUS = "OPEN", REGION = "EU" }
```

Pour les feuilles `query`, les valeurs se lient aux paramètres `:placeholder` de la requête. Pour `endpoint`, elles pré-remplissent le formulaire du HttpRunner. Pour `page`, elles deviennent des paramètres de chaîne de requête.

Les deux jetons réservés — `#LOGIN_USER#` et `#SYSDATE#` — fonctionnent ici aussi : une feuille *Mes données* avec `params = { OWNER = "#LOGIN_USER#" }` amène l'utilisateur sur une vue limitée à ses propres lignes.

### Changer de `type` réinitialise les champs

Dans l'Inspecteur, passer le `type` de `query` à `dashboard` efface `connector` (puisque `dashboard` le rejette). Passer de feuille à dossier efface `target`, `connector`, `params`. Le formulaire empêche les combinaisons invalides d'atteindre l'enregistrement.

---

## Choisir le bon type

| Pour ouvrir… | Utiliser |
|---|---|
| Une liste de lignes avec filtre / ajout / modification optionnels. | `screen`. |
| Une liste pré-filtrée (par exemple *Mes tickets ouverts*). | `screen` avec `params`. |
| Une requête qui n'a pas encore d'écran conçu. | `query`. |
| Un appel API personnalisé en écriture ou en lecture seule. | `endpoint`. |
| Une page de graphiques et de KPI. | `dashboard`. |
| Une fonctionnalité React écrite à la main (style Nomaflow), ou une page livrée par une application. | `page`. |
| Une tâche Nomaflow que les utilisateurs lancent eux-mêmes (fichier, paramètres, journal). | `job`. |
| Une autre application, dans un nouvel onglet du navigateur. | `url`. |

En cas de doute, commencer par `screen` — la plupart des pages destinées aux utilisateurs sont des listes. Passer à `dashboard` quand la mise en page comprend plusieurs graphiques ; recourir à `endpoint` uniquement pour des opérations API qui ne tiennent pas dans un écran ; réserver `page` au React personnalisé.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Feuille `query` avec un `target` qui n'est pas un nom de requête. | Cliquer la feuille ouvre un TableView par défaut sans colonnes. | Choisir une vraie requête dans la liste déroulante. |
| Feuille `endpoint` sur un connecteur SQL. | La validation à l'enregistrement peut passer, mais à l'exécution le connecteur ne propose pas d'endpoints. | Pointer vers un connecteur API. |
| `dashboard` avec `connector`. | La validation à l'enregistrement échoue. | Retirer le champ `connector`. |
| `page` avec `connector`. | La validation à l'enregistrement échoue. | Retirer le champ `connector`. |
| `params` qui référence un placeholder absent de la requête cible. | La liaison est silencieusement ignorée. | Ouvrir la requête cible, déclarer le paramètre. |
| `page` qui pointe vers une route non enregistrée. | Cliquer la feuille affiche une page 404. | Vérifier que la route existe dans le bundle frontend ; les fautes de frappe sont la cause habituelle. |

---

## La suite

- [Permissions et rôles](./permissions-and-roles.md) — le filtre `roles` + l'héritage des permissions par type de feuille.
- [Traductions et icônes](./translations-and-icons.md) — libellés par langue et icônes.
- [Créer un écran depuis une requête](../screens/create-from-query.md) — l'écran qu'ouvre une feuille `query`.
