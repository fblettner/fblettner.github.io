---
title: Menus
description: "L'arborescence de la barre latérale — dossiers, feuilles, permissions. Une feuille renvoie vers une requête TableView, un DashboardView, un endpoint HttpRunner ou un slug statique. L'arbre est filtré selon les droits de l'utilisateur connecté."
keywords: [Liberty Next, menu, barre latérale, navigation, permission, dossier, feuille, TableView, DashboardView, HttpRunner]
---

# Menus

Le **menu** définit la barre latérale React. Une arborescence par app, dont les feuilles renvoient vers ce que l'app expose : une requête de connecteur (ouvre une grille de table), un tableau de bord (ouvre un dashboard), un endpoint API (ouvre un HttpRunner), ou un slug statique. L'arborescence est **filtrée selon les droits de l'utilisateur** : une feuille qu'il ne peut pas exécuter est masquée, et un dossier devenu vide disparaît à son tour.

Les menus sont déclarés dans `config/menus.toml`. Rechargeables à chaud avec le reste de la configuration.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="280" height="380" rx="14" fill="url(#mn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📄 menus.toml</text>

  <rect x="56" y="84" width="248" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="68" y="104" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[apps.myapp]</text>
  <text x="68" y="120" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "My App"</text>
  <text x="68" y="134" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">connector = "myapp"</text>

  <rect x="56" y="152" width="248" height="90" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="172" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">[[apps.myapp.items]]</text>
  <text x="68" y="186" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "Données maîtres"</text>
  <text x="68" y="200" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">type = "folder"</text>
  <text x="68" y="216" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">items = [...]</text>

  <rect x="56" y="252" width="248" height="78" rx="8" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.35)" strokeWidth="1"/>
  <text x="68" y="272" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">feuille · type = "query"</text>
  <text x="68" y="286" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "Users"</text>
  <text x="68" y="300" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">query = "users_get"</text>
  <text x="68" y="314" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">screen = "users"</text>

  <rect x="56" y="338" width="248" height="60" rx="8" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.35)" strokeWidth="1"/>
  <text x="68" y="358" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">feuille · type = "dashboard"</text>
  <text x="68" y="372" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "Overview"</text>
  <text x="68" y="386" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dashboard = "overview"</text>

  <line x1="320" y1="220" x2="420" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#mn-arrow)"/>

  <rect x="420" y="40" width="240" height="380" rx="14" fill="url(#mn-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="440" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ filtrage par permissions</text>

  <rect x="436" y="84" width="208" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">sql:&#123;c&#125;:&#123;q&#125;</text>
  <text x="448" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">requise pour `type = "query"`</text>
  <text x="448" y="136" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sinon, la feuille est masquée</text>

  <rect x="436" y="152" width="208" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="172" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">api:&#123;c&#125;:&#123;e&#125;</text>
  <text x="448" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">requise pour `type = "endpoint"`</text>
  <text x="448" y="204" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sinon, la feuille est masquée</text>

  <rect x="436" y="220" width="208" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="240" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">filtre par rôles</text>
  <text x="448" y="256" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">feuille avec `roles = [...]`</text>
  <text x="448" y="272" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">l'utilisateur doit en posséder un</text>

  <rect x="436" y="288" width="208" height="60" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="448" y="308" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">dossiers vides masqués</text>
  <text x="448" y="324" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">un dossier sans feuille</text>
  <text x="448" y="340" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">disparaît de l'arborescence</text>

  <rect x="436" y="356" width="208" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="448" y="376" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">GET /api/menus</text>
  <text x="448" y="392" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">résolue dans la langue de la requête</text>

  <line x1="660" y1="220" x2="740" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#mn-arrow)"/>

  <rect x="740" y="40" width="220" height="380" rx="14" fill="url(#mn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="760" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚛️ BARRE LATÉRALE</text>

  <rect x="756" y="84" width="188" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="99" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📊 Vue d'ensemble</text>

  <text x="768" y="124" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Données maîtres</text>
  <rect x="776" y="130" width="170" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="788" y="145" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">📋 Utilisateurs</text>
  <text x="788" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📋 Villes</text>
  <text x="788" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📋 Rôles</text>

  <text x="768" y="216" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Opérations</text>
  <text x="788" y="236" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📊 Indicateurs journaliers</text>
  <text x="788" y="256" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">🌐 Vérification de santé</text>

  <text x="768" y="286" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Paramètres</text>
  <text x="788" y="306" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Utilisateurs</text>
  <text x="788" y="326" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Rôles</text>
  <text x="788" y="346" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Connecteurs</text>

  <rect x="756" y="360" width="188" height="46" rx="8" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="768" y="378" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">i18n</text>
  <text x="768" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">libellés via la clé `l = …`</text>
</svg>

---

## Racine des apps

Un fichier de menus déclare une ou plusieurs apps. Chaque app correspond au dossier de premier niveau dans le sélecteur de workspace.

```toml
[apps.myapp]
label       = "My App"
description = "Application adossée au connecteur `myapp`."
connector   = "myapp"             # connecteur par défaut pour toutes les feuilles dessous

[apps.myapp.l]
fr = "Mon application"
```

Le `connector` déclaré sur l'app sert de connecteur par défaut : chaque feuille en hérite tant qu'elle n'en désigne pas un autre. Pratique pour les apps qui ciblent un seul connecteur ; une feuille peut désigner un connecteur différent pour traiter un cas particulier.

---

## Items

Chaque app porte une liste ordonnée d'`items`. Un item est soit un **dossier**, soit une **feuille**.

```toml
[[apps.myapp.items]]
label = "Données maîtres"
type  = "folder"

  [[apps.myapp.items.items]]      # imbrication
  label = "Utilisateurs"
  type  = "query"
  query = "users_get"
  screen = "users"                # ouvre l'écran `screens.myapp.users` (sinon, simple grille)

  [[apps.myapp.items.items]]
  label = "Villes"
  type  = "query"
  query = "cities_get"

[[apps.myapp.items]]
label     = "Vue d'ensemble"
type      = "dashboard"
dashboard = "overview"

[[apps.myapp.items]]
label    = "Vérification de santé"
type     = "endpoint"
endpoint = "ping"
connector = "myservice"           # surcharge le défaut de l'app
```

### Dossier

| Champ | Description |
|---|---|
| `type` | `"folder"`. |
| `label` / `l` | Titre du dossier ; `l = { fr = "…" }` ajoute la traduction. |
| `items` | Items imbriqués (dossiers ou feuilles). |

Un dossier dont toutes les feuilles ont été masquées par le filtrage des permissions disparaît à son tour de l'arborescence.

### Feuilles

| `type` | Ce que la feuille ouvre | Champs requis |
|---|---|---|
| `"query"` | Une grille de table sur `connector.query`. Si `screen` est précisé, le clic sur une ligne ouvre son dialogue. | `query` (+ `connector` si différent du défaut de l'app) |
| `"dashboard"` | Un tableau de bord (`connector.dashboard`). | `dashboard` |
| `"endpoint"` | Un HttpRunner sur `connector.endpoint`. | `endpoint` (+ `connector`) |
| `"page"` | Une route React statique — pour un écran personnalisé que le framework n'héberge pas. | `slug` |
| `"link"` | Une URL externe — s'ouvre dans un nouvel onglet. | `href` |

Options communes à toutes les feuilles :

| Champ | Effet |
|---|---|
| `icon` | Nom d'icône `lucide-react` (`Users`, `Database`, …). |
| `roles` | Liste de noms de rôles ; la feuille est masquée si l'utilisateur n'en possède aucun. |
| `description` | Infobulle ou ligne secondaire sous le libellé. |

---

## Filtrage par permissions

L'arborescence renvoyée par `GET /api/menus` est **l'arborescence propre à l'utilisateur** — tout ce qu'il n'est pas habilité à exécuter en est retiré.

| Feuille | Permission requise |
|---|---|
| `type = "query"` | `sql:<connecteur>:<query>` |
| `type = "endpoint"` | `api:<connecteur>:<endpoint>` |
| `type = "dashboard"` | L'union des `sql:<connecteur>:<query>` de chaque panneau (un panneau non autorisé est masqué — voir [Tableaux de bord](/liberty/framework/dashboards)) |

S'y ajoute le filtre `roles` quand il est défini sur la feuille. Le filtrage remonte en cascade : si toutes les feuilles d'un dossier disparaissent, le dossier disparaît aussi.

---

## Endpoints REST

| Méthode | Chemin | Rôle |
|---|---|---|
| `GET` | `/api/menus` | Les arborescences de toutes les apps accessibles. |
| `GET` | `/api/menus/{app}` | L'arborescence d'une seule app. |

L'arborescence est résolue dans la langue de la requête (`X-Liberty-Lang`) ; les libellés reviennent déjà traduits. La barre latérale les affiche directement, sans recherche i18n côté client.

---

## Conseils & bonnes pratiques

- **Une app par domaine métier.** Éviter de regrouper tout un tenant sous une seule app — le sélecteur de workspace est conçu pour basculer entre plusieurs. Les dossiers à l'intérieur d'une app sont le bon niveau de regroupement.
- **Définir `connector` une seule fois sur l'app.** La plupart des feuilles restent implicites ; les feuilles qui visent un autre connecteur ressortent visuellement.
- **Choisir le bon type de feuille selon la cible.** `query` pour les données que l'utilisateur filtre ou édite, `dashboard` pour les graphiques, `endpoint` pour une action déclenchée sans contexte de ligne, `page` pour une route React personnalisée qui n'est pas hébergée par défaut.
- **Le filtre `roles` est une barrière douce.** Les permissions assurent le contrôle réel ; `roles` masque la feuille pour que l'utilisateur ne voie pas ce qu'il ne peut pas exécuter. Les deux se complètent — `roles` seul ne suffit jamais pour la sécurité.
- **Le rechargement à chaud gère proprement les renommages et les réorganisations.** Modifier `menus.toml`, appeler `POST /admin/reload`, rafraîchir l'onglet — la barre latérale se reconstruit. Les grilles de table et les tableaux de bord en cours conservent leurs données ; seule l'arborescence change.
