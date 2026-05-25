---
title: Présentation du framework
description: "Liberty Framework s'organise autour de couches : pools, connecteurs, dictionnaire, écrans, tableaux de bord, menus, graphiques et jobs — chaque couche tient dans un fichier TOML. Le schéma d'un résultat de requête est obtenu à l'exécution, pas de duplication. Tout est rechargeable à chaud, chaque onglet de l'interface Paramètres correspond à un fichier."
keywords: [Liberty Framework, architecture, pool, connecteur, dictionnaire, écran, tableau de bord, menu, graphique, job, TOML, rechargement à chaud, interface paramètres]
---

# Présentation du framework

Liberty Framework est une plateforme low-code pilotée par les connecteurs : un backend FastAPI + un frontend React 19, configurés entièrement par fichiers TOML. La plateforme repose sur un petit nombre de concepts bien définis qui se combinent en apps ; une app s'assemble, se modifie et se déploie sans écrire de Python ou de React.

Cette page est la carte — chaque concept a sa propre page liée depuis ici. Nouveau sur le framework ? Commencez par [Démarrage → Installation](./getting-started/installation.md) pour préparer votre première installation, puis suivez [Démarrage → Première app](./getting-started/first-app.md) pour la boucle complète « pool → connecteur → écran → menu » en cinq minutes.

La plateforme s'appuie sur quelques fichiers de configuration sous `config/` (dans `liberty-apps`) et un fichier framework-wide sous `liberty-next/config/`. Chacun décrit une couche ; ensemble, ils définissent une application complète.

| Couche | Fichier | Contenu |
|---|---|---|
| **Pools** | `connectors.toml` (`[pools.*]`) | Connexions aux bases de données — URL, dialecte, `password` / `schemas` / `max_rows` optionnels. |
| **Connecteurs** | `connectors.toml` (`[connectors.*]`) | Connecteurs SQL (requêtes nommées) et connecteurs API (endpoints nommés). |
| **Dictionnaire** | `dictionary.toml` | Métadonnées par colonne : libellés, formats, règles `BOOLEAN` / `ENUM` / `LOOKUP`. |
| **Écrans** | `screens.toml` | Un écran par objet métier : la requête de lecture, les requêtes optionnelles d'écriture, les onglets et les champs du dialogue. |
| **Tableaux de bord** | `dashboards.toml` | Graphiques, indicateurs et mises en page groupées au-dessus des mêmes requêtes nommées. |
| **Menus** | `menus.toml` | L'arborescence latérale — dossiers, items, permissions. |

Tous sont **rechargeables à chaud**. `POST /admin/reload` reconstruit le registre ; les requêtes en cours conservent la version qu'elles utilisent au moment de leur exécution.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fov-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fov-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fov-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="240" height="380" rx="14" fill="url(#fov-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">CONFIGURATION · TOML</text>

  <rect x="56" y="84" width="208" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="102" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <text x="68" y="118" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">pools + connecteurs</text>

  <rect x="56" y="136" width="208" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="158" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">dictionary.toml</text>

  <rect x="56" y="180" width="208" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="202" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">screens.toml</text>

  <rect x="56" y="224" width="208" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="246" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">dashboards.toml</text>

  <rect x="56" y="268" width="208" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="290" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">menus.toml</text>

  <rect x="56" y="312" width="208" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="334" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">auth.toml · app.toml</text>

  <rect x="56" y="358" width="208" height="46" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="68" y="378" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">POST /admin/reload</text>
  <text x="68" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">rechargement à chaud</text>

  <line x1="280" y1="230" x2="380" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#fov-arrow)"/>

  <rect x="380" y="40" width="260" height="380" rx="14" fill="url(#fov-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="400" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ CŒUR LIBERTY NEXT</text>

  <rect x="396" y="84" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="102" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Registre de pools</text>
  <text x="408" y="118" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">engines async · décodage des `ENC:`</text>

  <rect x="396" y="136" width="228" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="154" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Registre de connecteurs</text>
  <text x="408" y="170" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">connecteurs SQL et API</text>
  <text x="408" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">contrôle d'écriture · liaison de paramètres</text>

  <rect x="396" y="204" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="222" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Dictionnaire</text>
  <text x="408" y="238" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">libellés · formats · règles · i18n</text>

  <rect x="396" y="256" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="274" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Écrans</text>
  <text x="408" y="290" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">lecture · modification · ajout · suppression</text>

  <rect x="396" y="308" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="326" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Tableaux de bord · menus</text>
  <text x="408" y="342" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">graphiques · indicateurs · arborescence</text>

  <rect x="396" y="360" width="228" height="44" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.35)" strokeWidth="1"/>
  <text x="408" y="378" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Authentification</text>
  <text x="408" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">TOML ou base · JWT · OIDC</text>

  <line x1="640" y1="230" x2="740" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#fov-arrow)"/>

  <rect x="740" y="40" width="220" height="380" rx="14" fill="url(#fov-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="760" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚛️ INTERFACE REACT</text>

  <rect x="756" y="84" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="106" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">📋 Grille de table</text>

  <rect x="756" y="128" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="150" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">📊 Tableau de bord</text>

  <rect x="756" y="172" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="194" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Éditeurs de configuration</text>

  <rect x="756" y="216" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="238" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">🌐 Lanceur HTTP</text>

  <rect x="756" y="260" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="282" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">💬 Assistant IA</text>

  <rect x="756" y="304" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="326" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">🗂 Workspace · barre latérale</text>

  <rect x="756" y="348" width="188" height="56" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="768" y="368" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">i18n EN / FR</text>
  <text x="768" y="384" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">libellés issus du dictionnaire</text>
  <text x="768" y="398" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">localisés à chaque requête</text>

  <rect x="40" y="440" width="920" height="30" rx="6" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="60" y="460" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Une clé de licence active les connecteurs marqués `licensed = true` (Nomasx-1 · Nomajde). Le framework fonctionne sans clé — les connecteurs concernés ne sont simplement pas chargés.</text>
</svg>

---

## Les couches

### Pools

Un **pool** correspond à un moteur SQLAlchemy asynchrone — `postgresql+asyncpg://…`, `oracle+oracledb://…`, `sqlite+aiosqlite://…`. Déclaré sous `[pools.<nom>]` dans `connectors.toml` :

```toml
[pools.myapp]
url = "postgresql+asyncpg://myapp@db:5432/myapp"
password = "ENC:…"       # valeur chiffrée, référence ${ENV} ou texte clair
pool_size = 10
max_rows = 5000          # plafond SELECT par défaut sur ce pool

[pools.myapp.schemas]
PROD = "myapp_prod"      # `#SCHEMA.PROD#` dans une requête → `myapp_prod` à l'exécution
```

Le pool `default` est particulier : c'est le pool du framework lui-même, qui porte les tables d'authentification `ly2_*` quand `[auth] backend = "db"`. Sur un checkout vierge, il pointe vers un fichier SQLite local pour que l'instance démarre sans base à configurer.

### Connecteurs

Un **connecteur** définit comment Liberty Next atteint une source de données. Deux types existent :

- Le **connecteur SQL** rassemble un ensemble de requêtes nommées qui s'exécutent sur un pool de base de données. Le schéma de chaque résultat est lu à l'exécution sur le curseur de la requête ; le dictionnaire ajoute les libellés et les règles d'affichage.
- Le **connecteur API** rassemble un ensemble d'endpoints HTTP nommés. L'authentification, l'URL de base et la substitution de variables sont définies sur le connecteur.

Voir [Connecteurs](/liberty/framework/connectors).

### Dictionnaire

Le **dictionnaire** définit les métadonnées d'affichage par colonne : libellé (avec traductions par langue), format et règle. Chaque entrée fixe ces informations une seule fois ; tous les écrans qui retournent cette colonne en bénéficient automatiquement :

```toml
[entries.USER_STATUS]
label = "Status"
[entries.USER_STATUS.l]
fr = "Statut"

[enums.USER_STATUS]
values = [
  { value = "Y", label = "Active", l = { fr = "Actif" } },
  { value = "N", label = "Inactive", l = { fr = "Inactif" } },
]
```

Une indication `column.dd = "USER_STATUS"` sur la requête applique le libellé et la règle `ENUM` à la grille — la cellule affiche le libellé localisé, le filtre de colonne propose le picker multi-sélection, sans code supplémentaire. Voir [Dictionnaire](/liberty/framework/dictionary).

### Écrans

Un **écran** est la définition d'un objet métier : la requête de lecture qui alimente la grille, les requêtes d'écriture optionnelles, et le formulaire modal intégré. Déclaré sous `[screens.<app>.<id>]` dans `screens.toml` :

```toml
[screens.myapp.users]
label  = "Users"
read_query   = "users_get"
update_query = "users_put"
audit  = true
auto_load = true

[[screens.myapp.users.dialog.tabs]]
id    = "main"
label = "General"
cols  = 2
fields = [
  { column = "ID",     hidden = true },
  { column = "NAME",   required = true },
  { column = "STATUS", colspan = 2 },
]
```

Un clic sur une ligne ouvre un formulaire modal typé construit à partir de cette définition. Le widget de chaque champ est choisi selon la règle de la colonne (BOOLEAN → case à cocher, ENUM → liste déroulante recherchable, LOOKUP → liste déroulante restreinte par `lookup_param_binds`, plus les types date / nombre / texte selon `format` et `type`). Voir [Écrans](/liberty/framework/screens).

### Tableaux de bord

Un **tableau de bord** est un agencement d'indicateurs et de graphiques au-dessus des mêmes requêtes nommées. Chaque panneau se rattache à une requête, choisit une agrégation et se présente sous un des types de graphiques standards. Voir [Tableaux de bord](/liberty/framework/dashboards).

### Menus

L'**arborescence latérale**. Les dossiers se composent ; les feuilles renvoient vers une requête (grille de table), un tableau de bord, un endpoint HTTP ou un slug statique. L'arborescence est **filtrée selon les droits de l'utilisateur** — une feuille à laquelle l'utilisateur ne peut pas accéder (`sql:{conn}:{name}` / `api:{conn}:{name}`) est masquée, et un dossier devenu vide disparaît à son tour. Voir [Menus](/liberty/framework/menus).

---

## Authentification

Deux backends, sélectionnés dans `[auth]` :

| Backend | Stockage des utilisateurs | Quand l'utiliser |
|---|---|---|
| `toml` *(défaut)* | `config/auth.toml` | Pas de base de données requise au démarrage. Relu à chaque appel. Adapté aux petits déploiements et aux tests. |
| `db` | Tables `ly2_*` du pool du framework | Gestion des utilisateurs via l'éditeur Settings → Users de l'interface React. Mots de passe hachés avec `argon2`. |

Les jetons sont des JWT signés avec `LIBERTY_JWT_SECRET` (clé éphémère si la variable n'est pas définie). L'OIDC est branché via `authlib` et fonctionne avec n'importe quel fournisseur.

La liste `permissions` d'un rôle contrôle ce que l'utilisateur peut exécuter : `sql:<connecteur>:<requête>`, `api:<connecteur>:<endpoint>`, `admin:*`. Le même filtre s'applique à l'arborescence du menu — l'utilisateur ne voit jamais une feuille qu'il n'a pas le droit d'ouvrir.

---

## Licence

Le framework est gratuit. Les connecteurs marqués `licensed = true` dans `connectors.toml` sont déverrouillés par la variable `LIBERTY_LICENSE_KEY` — un JWT signé RS256 produit par l'éditeur. Une clé configurée mais invalide (expirée ou signature incorrecte) fait apparaître un bandeau dans l'interface React ; l'absence totale de clé masque simplement les connecteurs concernés.

C'est ce mécanisme qui active **Nomasx-1** et **Nomajde**, regroupés sous une clé unique.

---

## Frontend en une phrase

React 19 + Vite + TypeScript, buildé une seule fois dans `frontend/dist` puis servi en statique par le backend. Thème sombre par défaut avec bascule en mode clair, internationalisation EN / FR via `react-i18next`, icônes `lucide-react`, police DM Sans, `@tanstack/react-table` pour la grille, `react-markdown` + `remark-gfm` pour les réponses de l'assistant, `@monaco-editor/react` pour l'éditeur TOML brut. Apparence « liquid-glass » identique à NomaUBL via les composants `@emotion/styled` thématisés.

---

## Pour aller plus loin

| Vous voulez… | Lire |
|---|---|
| Installer le framework sur votre machine | [Démarrage → Installation](./getting-started/installation.md) |
| Créer votre première app | [Démarrage → Première app](./getting-started/first-app.md) |
| Comprendre l'arborescence de `liberty-apps` | [Démarrage → Structure du projet](./getting-started/project-layout.md) |
| Modifier la configuration dans le navigateur | [Configuration → Interface Paramètres](./configuration/settings-ui.md) |
| Référence complète d'`app.toml` | [Configuration → `app.toml`](./configuration/app-toml.md) |
| Régler les variables d'environnement de production | [Configuration → Variables d'environnement](./configuration/environment-variables.md) |
| Chiffrer les mots de passe des connecteurs | [Configuration → Chiffrement et secrets](./configuration/encryption-secrets.md) |
| Brancher l'authentification / OIDC | [Authentification](./auth/authentication.md) |
| Définir rôles et permissions | [Authentification → Rôles et permissions](./auth/roles-permissions.md) |
| Installer une clé de licence | [Authentification → Clé de licence](./auth/license-key.md) |
| Organiser plusieurs apps | [Apps et Plugins → Apps](./apps/overview.md) |
| Écrire une étape Python personnalisée | [Apps et Plugins → Plugins](./apps/plugins.md) |
| Ajouter une langue | [Apps et Plugins → i18n](./apps/i18n.md) |
| Planifier des jobs récurrents | [Jobs → Présentation](./jobs/overview.md) |
| Dialoguer avec l'assistant IA | [Assistant IA](./ai-assistant.md) |
| Utiliser les outils en ligne de commande | [Référence CLI](./cli-reference.md) |
| Construire une intégration REST | [Référence API REST](./rest-api.md) |
| Déployer en production | [Déploiement → Mise en production](./deployment/running-production.md) |
| Passer d'une version à une autre | [Déploiement → Mise à jour](./deployment/upgrading.md) |
