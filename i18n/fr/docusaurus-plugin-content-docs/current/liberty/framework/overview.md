---
title: Présentation du framework
description: "Liberty Next est organisé en couches : pools, connecteurs, dictionnaire, écrans, tableaux de bord, menus. Chaque couche est un fichier TOML unique sous config/. Le schéma d'un résultat de requête est découvert à l'exécution — pas de tables de métadonnées, pas de génération de code."
keywords: [Liberty Next, framework, architecture, pool, connecteur, dictionnaire, écran, tableau de bord, menu, TOML, rechargement à chaud]
---

# Présentation du framework

Liberty Next repose sur six fichiers de configuration sous `config/`. Chaque fichier définit une couche de la plateforme ; ensemble, ils décrivent une application complète.

| Couche | Fichier | Contenu |
|---|---|---|
| **Pools** | `connectors.toml` (`[pools.*]`) | Connexions base de données — URL, dialecte, `password` / `schemas` / `max_rows` optionnels. |
| **Connecteurs** | `connectors.toml` (`[connectors.*]`) | Connecteurs SQL (requêtes nommées) et connecteurs API (endpoints nommés). |
| **Dictionnaire** | `dictionary.toml` | Métadonnées par colonne : libellés, formats, règles `BOOLEAN` / `ENUM` / `LOOKUP`. |
| **Écrans** | `screens.toml` | Un écran par objet métier : quelle requête lire, modifier, insérer, supprimer ; les onglets et champs du dialogue. |
| **Tableaux de bord** | `dashboards.toml` | Graphiques, KPI et mises en page groupées sur les mêmes requêtes nommées. |
| **Menus** | `menus.toml` | L'arborescence de la barre latérale — dossiers, items, permissions. |

Tout est **rechargeable à chaud**. `POST /admin/reload` reconstruit le registre ; les requêtes en cours gardent la version chargée au moment du tir.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fov-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fov-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fov-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="240" height="380" rx="14" fill="url(#fov-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">CONFIG · TOML</text>

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
  <text x="408" y="102" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">PoolRegistry</text>
  <text x="408" y="118" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">engines async · décodage ENC:</text>

  <rect x="396" y="136" width="228" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="154" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">ConnectorRegistry</text>
  <text x="408" y="170" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">connecteur SQL · connecteur API</text>
  <text x="408" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">verrou écriture · liaison de paramètres</text>

  <rect x="396" y="204" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="222" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">DictionaryFile</text>
  <text x="408" y="238" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">libellés · format · règles · i18n</text>

  <rect x="396" y="256" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="274" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">ScreensFile</text>
  <text x="408" y="290" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">read · update · insert · delete</text>

  <rect x="396" y="308" width="228" height="44" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="326" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">DashboardsFile · MenusFile</text>
  <text x="408" y="342" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">graphiques · KPI · arbre latéral</text>

  <rect x="396" y="360" width="228" height="44" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.35)" strokeWidth="1"/>
  <text x="408" y="378" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">AuthBackend</text>
  <text x="408" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">TOML ou base · JWT · OIDC</text>

  <line x1="640" y1="230" x2="740" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#fov-arrow)"/>

  <rect x="740" y="40" width="220" height="380" rx="14" fill="url(#fov-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="760" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚛️ UI REACT</text>

  <rect x="756" y="84" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="106" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">📋 TableView</text>

  <rect x="756" y="128" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="150" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">📊 DashboardView</text>

  <rect x="756" y="172" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="194" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Settings (Builders)</text>

  <rect x="756" y="216" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="238" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">🌐 HttpRunner</text>

  <rect x="756" y="260" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="282" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">💬 Chat IA</text>

  <rect x="756" y="304" width="188" height="36" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="768" y="326" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">🗂 Workspace · Sidebar</text>

  <rect x="756" y="348" width="188" height="56" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="768" y="368" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">i18n EN / FR</text>
  <text x="768" y="384" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">libellés depuis le dictionnaire</text>
  <text x="768" y="398" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">localisés par requête</text>

  <rect x="40" y="440" width="920" height="30" rx="6" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="60" y="460" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Une clé de licence verrouille les connecteurs `licensed = true` (nomasx1 · nomajde). Le framework tourne sans clé — sans ces applications.</text>
</svg>

---

## Couches

### Pools

Un **pool** est un engine SQLAlchemy async — `postgresql+asyncpg://…`, `oracle+oracledb://…`, `sqlite+aiosqlite://…`. Défini sous `[pools.<nom>]` dans `connectors.toml`. Le pool `default` est spécial — il porte les tables d'auth `ly2_*` quand `[auth] backend = "db"`. Un checkout vierge pointe ce pool sur un fichier SQLite local — l'application démarre sans base.

### Connecteurs

Un **connecteur** est la cible nommée à laquelle un écran, un tableau de bord ou l'assistant parlent. Deux types : **SQL** (liste de requêtes nommées sur un pool) et **API** (liste d'endpoints nommés sur un `httpx.AsyncClient`). Voir [Connecteurs](/liberty/framework/connectors).

### Dictionnaire

Le **dictionnaire** est la forme v2 des tables v1 `ly_dictionary` + `ly_enum` + `ly_lookup`. Chaque entrée fixe une fois pour toutes le libellé, le format et la règle d'une colonne ; tous les écrans qui exposent cette colonne en héritent. Voir [Dictionnaire](/liberty/framework/dictionary).

### Écrans

Un **écran** est un objet métier — ce que v1 appelait une `ly_table` + son `ly_dialog`. Voir [Écrans](/liberty/framework/screens).

### Tableaux de bord

Un **tableau de bord** est une grille de KPI et de graphiques sur les mêmes requêtes nommées. Voir [Tableaux de bord](/liberty/framework/dashboards).

### Menus

L'arborescence latérale. Les dossiers s'imbriquent ; les feuilles pointent vers une requête (`TableView`), un tableau de bord (`DashboardView`), un endpoint (`HttpRunner`) ou un slug statique. L'arbre est **élagué selon les droits du compte** — une feuille sans la permission `sql:{conn}:{name}` / `api:{conn}:{name}` est retirée, un dossier vide disparaît. Voir [Menus](/liberty/framework/menus).

---

## Auth

Deux backends, choisis dans `[auth]` :

| Backend | Où vivent les utilisateurs | Pourquoi |
|---|---|---|
| `toml` *(défaut)* | `config/auth.toml` | Pas de base requise au démarrage. Rechargé à chaque appel. Convient aux petits déploiements et aux tests. |
| `db` | Les tables `ly2_*` du pool framework | Utilisateurs gérés via l'éditeur Settings → Users de l'UI React. Hash de mot de passe `argon2`. |

Les jetons sont des JWT signés par `LIBERTY_JWT_SECRET` (clé éphémère si absente). OIDC contre n'importe quel fournisseur passe par `authlib`.

La liste `permissions` d'un rôle autorise ce que l'appelant peut exécuter : `sql:<connecteur>:<requête>`, `api:<connecteur>:<endpoint>`, `admin:*`. La même autorisation s'applique sur l'arbre du menu — l'opérateur ne voit jamais une feuille qu'il ne peut cliquer.

---

## Licence

Le framework est gratuit. Les connecteurs sous licence (`licensed = true` dans `connectors.toml`) sont déverrouillés par `LIBERTY_LICENSE_KEY` — un JWT signé RS256 généré par l'éditeur. Même forme JWT et même paire de clés que la licence NomaUBL. Une clé configurée mais invalide (expirée ou signature incorrecte) fait apparaître un bandeau dans l'UI React ; pas de clé du tout masque simplement les connecteurs concernés.

C'est ce qui contrôle **nomasx1** et **nomajde** — tous deux livrés sous une seule clé.

---

## Frontend en une phrase

React 19 + Vite + TypeScript, buildé une fois dans `frontend/dist` puis servi en statique par le backend. Sombre par défaut avec bascule en thème clair, `react-i18next` EN / FR, icônes `lucide-react`, DM Sans, `@tanstack/react-table` pour la grille, `react-markdown` + `remark-gfm` pour l'assistant, `@monaco-editor/react` pour la sortie brute TOML. Look « liquid-glass » identique à NomaUBL — composants `@emotion/styled` thématisés.

---

:::info[FR à venir]
Les pages détaillées Connecteurs / Dictionnaire / Écrans / Tableaux de bord / Menus sont disponibles en anglais pour cette itération. La traduction FR sera ajoutée dans une itération suivante ; en attendant, Docusaurus affiche le contenu EN sur la locale française.
:::
