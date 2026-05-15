---
title: Connecteurs
description: "Déclarer des connecteurs SQL et API en TOML. Un connecteur SQL regroupe des requêtes nommées exécutées sur un pool de base de données ; un connecteur API regroupe des endpoints HTTP nommés. Le schéma des résultats est obtenu à l'exécution depuis le curseur de la requête."
keywords: [Liberty Next, connecteur, SQL, API, TOML, pool, requête, endpoint, écriture, dialecte, découverte de schéma, liaison de paramètres]
---

# Connecteurs

Un **connecteur** définit comment Liberty Next accède à une source de données. Deux types coexistent :

- Le **connecteur SQL** regroupe un ensemble de requêtes nommées exécutées sur un pool de base de données. Le schéma de chaque résultat est obtenu à l'exécution depuis le curseur de la requête ; les libellés et les règles d'affichage sont définis dans le [dictionnaire](/liberty/framework/dictionary), les options d'affichage côté requête (filtres, visibilité, format) sont portées par la définition de la requête elle-même.
- Le **connecteur API** regroupe un ensemble d'endpoints HTTP nommés. L'authentification, l'URL de base et la substitution de variables sont configurées sur le connecteur.

Les connecteurs sont déclarés dans `config/connectors.toml`. Le fichier est rechargeable à chaud : `POST /admin/reload` reconstruit le registre, et les requêtes en cours continuent de tourner sur la version qu'elles utilisent.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="280" height="340" rx="14" fill="url(#cn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📄 connectors.toml</text>

  <rect x="56" y="84" width="248" height="80" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="104" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[pools.myapp]</text>
  <text x="68" y="120" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">url = "postgresql+asyncpg://…"</text>
  <text x="68" y="134" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">password = "ENC:…"</text>
  <text x="68" y="148" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">max_rows = 5000</text>

  <rect x="56" y="172" width="248" height="90" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="68" y="192" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.myapp]</text>
  <text x="68" y="208" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">type = "sql"</text>
  <text x="68" y="222" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">pool = "myapp"</text>
  <text x="68" y="238" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">licensed = false</text>
  <text x="68" y="254" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">queries = [...]</text>

  <rect x="56" y="270" width="248" height="100" rx="8" fill="rgba(50,215,75,0.06)" stroke="rgba(50,215,75,0.30)" strokeWidth="1"/>
  <text x="68" y="290" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[[connectors.myapp.queries]]</text>
  <text x="68" y="306" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">name = "users_get"</text>
  <text x="68" y="320" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "Users"</text>
  <text x="68" y="334" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">auto_load = true</text>
  <text x="68" y="348" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">sql = "SELECT id, name, status …"</text>
  <text x="68" y="362" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">columns = [...]</text>

  <line x1="320" y1="220" x2="420" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#cn-arrow)"/>

  <rect x="420" y="40" width="280" height="340" rx="14" fill="url(#cn-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="440" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ Connecteur SQL</text>

  <rect x="436" y="84" width="248" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="104" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">execute(nom, params, langue)</text>
  <text x="448" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">retourne les lignes + le schéma typé</text>
  <text x="448" y="134" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">libellés et règles résolus à la volée</text>

  <rect x="436" y="152" width="248" height="42" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="170" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">contrôle d'écriture</text>
  <text x="448" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">UPDATE / INSERT / DELETE → writable=true requis</text>

  <rect x="436" y="202" width="248" height="42" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="220" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">liaison `:name` → `?`</text>
  <text x="448" y="236" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">paramètres jamais inlinés dans le SQL</text>

  <rect x="436" y="252" width="248" height="42" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="270" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">résolution `#SCHEMA.X#`</text>
  <text x="448" y="286" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">depuis la table `schemas` du pool</text>

  <rect x="436" y="302" width="248" height="42" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="320" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">SQL par dialecte</text>
  <text x="448" y="336" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sql = default / oracle / postgresql</text>

  <line x1="700" y1="220" x2="780" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#cn-arrow)"/>

  <rect x="780" y="40" width="180" height="340" rx="14" fill="url(#cn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="800" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">REST</text>

  <rect x="796" y="84" width="148" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="804" y="100" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">POST</text>
  <text x="804" y="116" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/api/query/&#123;c&#125;/&#123;q&#125;</text>

  <rect x="796" y="132" width="148" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="804" y="148" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">POST</text>
  <text x="804" y="164" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/api/http/&#123;c&#125;/&#123;e&#125;</text>

  <rect x="796" y="180" width="148" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="804" y="196" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">GET</text>
  <text x="804" y="212" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/api/lookup/…</text>

  <rect x="796" y="228" width="148" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="804" y="246" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Permissions</text>
  <text x="804" y="262" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">sql:&#123;c&#125;:&#123;q&#125;</text>
  <text x="804" y="276" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">api:&#123;c&#125;:&#123;e&#125;</text>

  <rect x="796" y="296" width="148" height="78" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="804" y="314" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="804" y="328" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Grilles de table</text>
  <text x="804" y="342" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Panneaux de dashboard</text>
  <text x="804" y="356" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Outils de l'assistant IA</text>
  <text x="804" y="370" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sélecteurs de lookup</text>
</svg>

---

## Connecteur SQL

### Pool

Un connecteur SQL s'appuie sur un **pool** : un moteur SQLAlchemy asynchrone.

```toml
[pools.myapp]
url       = "postgresql+asyncpg://myapp@db:5432/myapp"
password  = "ENC:…"              # déchiffré via [crypto] master_key — ou ${ENV} / texte clair
pool_size = 10
max_rows  = 5000                  # plafond SELECT par défaut sur ce pool
dialect   = "postgresql"          # surcharge optionnelle ; sinon déduit de l'URL

[pools.myapp.schemas]
PROD = "myapp_prod"               # `#SCHEMA.PROD#` dans une requête → `myapp_prod` à l'exécution
```

Le mot de passe peut être indiqué séparément de l'URL (plus propre, hors des logs) ou intégré dans l'URL sous la forme `ENC:…`. Dans les deux cas, le moteur est construit avec un échappement correct des caractères spéciaux. Si la clé maîtresse est absente ou incorrecte pour une valeur `ENC:`, celle-ci est conservée telle quelle et un avertissement est journalisé.

Les moteurs sont créés à la demande : une base inaccessible ne bloque jamais le démarrage, et les tests peuvent injecter leur propre moteur.

### Connecteur

```toml
[connectors.myapp]
type     = "sql"
pool     = "myapp"
licensed = false                   # mettre à true pour gérer derrière la clé de licence
max_rows = 5000                    # surcharge le défaut du pool
```

### Requêtes

Un connecteur porte une liste ordonnée de requêtes nommées.

```toml
[[connectors.myapp.queries]]
name        = "users_get"
label       = "Users"               # titre du panneau dans l'interface React
description = "Application users"
auto_load   = true                  # exécute un SELECT à l'ouverture de l'écran
sql         = "SELECT id, name, status FROM users ORDER BY name"
columns = [
  { name = "id",     filter = true },
  { name = "name" },
  { name = "status", dd = "USER_STATUS" },
]
```

| Champ | Description |
|---|---|
| `name` | Nom de la requête au sein du connecteur. Les permissions y font référence sous la forme `sql:<connecteur>:<name>`. |
| `label` / `description` | Textes affichés. L'interface utilise `description` comme titre du panneau, sinon `label`, sinon le libellé du menu. |
| `sql` | Le texte SQL — soit une chaîne, soit une table par dialecte : `sql = { default = "…", oracle = "…" }` indexée par nom de backend SQLAlchemy. La clé `default` est obligatoire. |
| `writable` | `true` pour toute instruction non-`SELECT`. Combiné à la permission `sql:<c>:<name>` de l'appelant. |
| `auto_load` | Exécute le SELECT à l'ouverture de l'écran, sans attendre un clic *Exécuter*. |
| `max_rows` | Plafond SELECT propre à la requête. Surcharge le défaut du connecteur, puis du pool, puis le défaut global (1000 lignes). |
| `key_columns` | Colonnes du résultat qui identifient une ligne. Exposées dans `describe()` pour la correspondance import-Excel de la grille. |
| `columns` | Options d'affichage optionnelles — voir *Options de colonne* ci-dessous. |
| `params` | Liste optionnelle de `ParamDef` — déclare chaque paramètre `:name` attendu par la requête, avec valeur par défaut, `dd` pour le widget d'entrée et `label`. |

#### Options de colonne

Une entrée `columns` **complète** le schéma découvert : elle ne le remplace pas. Tout ce qui n'est pas indiqué provient directement du curseur de la requête.

```toml
columns = [
  { name = "id",     hidden = true, filter = true },
  { name = "status", dd = "USER_STATUS", width = 120 },
  { name = "amount", format = "amount", align = "right" },
  { name = "score",  visible_when = { field = "view_mode", value = "advanced" } },
]
```

| Option | Effet |
|---|---|
| `dd` | Clé d'entrée du dictionnaire — récupère `label`, `format` et la règle d'affichage (BOOLEAN / ENUM / LOOKUP). `dd = ""` désactive l'entrée. |
| `label`, `format` | Surcharge ponctuelle quand l'entrée du dictionnaire ne suffit pas. |
| `hidden` | Masque la colonne dans la grille (reste disponible pour les filtres et le formulaire). |
| `filter` | Ajoute la colonne à la ligne de filtre au-dessus de la grille. |
| `filter_from` | Liste de `{ source, column }` — dépendances de filtre en cascade. Quand `source` a une valeur, les options LOOKUP de cette colonne sont restreintes aux lignes du lookup dont `column` correspond. |
| `visible_when` | Une règle `{ field, value }` (ou une liste de règles, toutes en ET logique). La colonne disparaît si une règle n'est pas vérifiée. |
| `width`, `align` | Options de mise en page de la grille. |

### Filtres d'instruction

Chaque instruction est analysée puis classée avant la liaison :

- **Instructions autorisées** : `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `MERGE`. Un `WITH … SELECT` est traité comme un `SELECT` ; un `WITH … DELETE` comme un `DELETE`. Un `WITH` non analysable est rejeté.
- **Contrôle d'écriture** : `INSERT` / `UPDATE` / `DELETE` / `MERGE` nécessitent `writable = true` *et* la permission `sql:<c>:<name>` de l'appelant. L'absence de l'un ou l'autre déclenche un `403`.

### Liaison `:name` → `?`

Chaque jeton `:name` dans le SQL est réécrit en `?` positionnel puis lié via `PreparedStatement`. Les valeurs ne sont **jamais** inlinées dans le SQL. L'analyseur respecte :

- les littéraux entre guillemets simples (`'O''Brien'`),
- les identifiants entre guillemets doubles (`"customer.name"`),
- les commentaires de ligne et de bloc (`-- …` / `/* … */`),
- l'opérateur de cast PostgreSQL `::type` (`'foo'::text`).

Un paramètre `:name` non fourni est lié à `NULL` SQL — la même requête reste donc utilisable pour les chemins *create* et *update*.

### Placeholders `#SCHEMA.X#`

Une requête peut référencer `#SCHEMA.PROD#` (ou toute autre clé) dans son SQL. À l'exécution, le placeholder est remplacé par la valeur correspondante de la table `schemas` du pool — `PROD = "myapp_prod"` devient `myapp_prod`. Un `#SCHEMA.X#` sans correspondance, ou avec une valeur qui n'est pas un identifiant simple, lève une erreur `ConnectorError`. Adapté aux bascules dev / prod et aux configurations multi-schémas sous un même utilisateur.

### `params` et `lookup_param_binds`

Déclarés sur la requête pour que le formulaire React sache quoi demander. Une entrée `params` peut porter un `dd` afin que son widget soit piloté par le dictionnaire (BOOLEAN → case à cocher, ENUM → liste déroulante recherchable, LOOKUP → liste déroulante recherchable). Les entrées de type LOOKUP peuvent en plus référencer des valeurs antérieures du formulaire via `lookup_param_binds` — soit une valeur littérale `value`, soit un `source` qui lit l'état courant du formulaire. Cela permet à un `WHERE` de type UDC de se restreindre correctement.

---

## Connecteur API

```toml
[connectors.myservice]
type       = "api"
base_url   = "https://api.example.com"
auth       = "bearer"               # none / basic / bearer / api_key / oauth2
auth_token = "ENC:…"                # déchiffré à l'exécution ; ${ENV} accepté

[[connectors.myservice.endpoints]]
name   = "ping"
method = "GET"
path   = "/health"

[[connectors.myservice.endpoints]]
name   = "lookup_user"
method = "GET"
path   = "/users/{{user_id}}"
```

| Champ | Description |
|---|---|
| `auth` | `none` / `basic` (`auth_user` + `auth_pass`) / `bearer` (`auth_token`) / `api_key` / `oauth2`. |
| OAuth2 | POST sur l'endpoint de jeton + extraction par chemin pointé + cache TTL + un rafraîchissement après un `401`. Le corps est `form-urlencoded` ou JSON selon `auth_token_content_type`. |
| `{{placeholder}}` | Remplacé dans le chemin, la query-string et le corps depuis les paramètres de l'appel. |
| `endpoint.response` | Table de chemins pointés sur la réponse — expose des valeurs nommées aux chaînes d'actions via `{call.N.fieldName}`. |
| `writable` | Un endpoint qui émet du `POST` / `PUT` / `DELETE` nécessite `writable = true`. |

Les endpoints exposent `POST /api/http/{connecteur}/{endpoint}` et sont contrôlés par la permission `api:<connecteur>:<endpoint>`.

---

## Rechargement à chaud

Modifier `connectors.toml` puis appeler **`POST /admin/reload`** (route réservée aux super-utilisateurs). Le framework reconstruit le registre de connecteurs, relit le dictionnaire et les menus, les remplace sur `app.state` et libère l'ancien registre. Les requêtes en cours conservent la version qu'elles utilisent — aucune course possible sur une requête en cours d'exécution. Les outils du connecteur de l'assistant IA, eux, ne sont rafraîchis qu'au redémarrage de la JVM, pas au rechargement.

La même route est exposée dans l'onglet `Paramètres` de React : chaque éditeur écrit via `PUT /admin/config/<pools|connectors|dictionary|menus|screens>` puis propose un *Reload*.

---

## Conseils & bonnes pratiques

- **Découvrir, pas redéclarer.** Laisser le curseur de la requête piloter le schéma. N'utiliser les options `columns` que pour ce que le curseur ne peut pas exprimer (libellé, format, visibilité, filtre en cascade).
- **Les entrées du dictionnaire vivent dans le dictionnaire, pas sur chaque requête.** Déclarer `USER_STATUS` une seule fois sous `[entries.USER_STATUS]` ; toutes les requêtes qui retournent cette colonne y font référence via `dd = "USER_STATUS"`.
- **SQL par dialecte uniquement si nécessaire.** Une requête qui fonctionne sur tous les backends reste une chaîne unique. La forme en table n'a de sens que pour de la syntaxe spécifique Oracle ou une fonction dont l'écriture diffère selon le backend.
- **Garder le mot de passe du pool hors de l'URL.** Un `password = "ENC:…"` (ou `${ENV}`) à côté de l'URL est plus simple à faire tourner et ne ressort jamais dans la chaîne de connexion journalisée.
- **Toujours marquer `writable = true` sur les requêtes qui modifient des données.** Le contrôle s'effectue aussi à l'exécution, mais le flag TOML est l'endroit naturel pour exprimer l'intention.
- **`max_rows` se cascade en profondeur** : surcharge par appel → requête → connecteur → pool → défaut global (1000). Définir une valeur raisonnable par requête quand l'utilisateur veut souvent consulter l'ensemble de la table.
