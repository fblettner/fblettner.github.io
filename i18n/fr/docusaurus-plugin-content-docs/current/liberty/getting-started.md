---
title: Présentation
description: "Liberty Next — framework low-code piloté par connecteur. La configuration pilote la découverte : on déclare un connecteur SQL ou API dans un fichier TOML, on l'expose à un écran ou à un tableau de bord, et l'UI React construit automatiquement la grille, le formulaire et les filtres."
keywords: [Liberty, Liberty Next, low-code, framework, connecteur, TOML, SQL, API, écran, tableau de bord, dictionnaire, nomasx1, nomajde]
---

# Liberty Next

**Liberty Next** est un framework low-code piloté par connecteur — le successeur de Liberty v1. Le changement en une phrase : **la configuration pilote la découverte, ce n'est plus le code qui pilote la configuration**. Un connecteur SQL est quelques lignes de TOML qui pointent vers un pool base de données et une liste de requêtes ; l'UI React construit ensuite à partir de ce que décrit le curseur à l'exécution une grille typée, une ligne de filtres, un formulaire modal et des lookups — pas de tables de métadonnées, pas de code par écran.

Deux applications payantes s'exécutent sur Liberty Next :

- **[Nomasx-1](/liberty/nomasx1/overview)** — sécurité et conformité d'entreprise. Vue centralisée des utilisateurs et des rôles, conformité des licences Oracle et JD Edwards, analyse automatisée de la séparation des tâches. Pour les auditeurs, responsables sécurité et gestionnaires de licences.
- **[Nomajde](/liberty/nomajde/overview)** — application compagnon JD Edwards. Écrans live sur les données JDE : données maîtres, atelier de maintenance sécurité, transactions, reporting BIP planifié, supervision live. Pour les opérateurs JDE, administrateurs sécurité et ingénieurs d'exploitation.

Le framework lui-même (sans les connecteurs sous licence) est gratuit.

:::info[En cours de rédaction]
Liberty Next est en cours de développement actif. Cette documentation est rédigée au fil du projet — certaines pages restent succinctes, des captures peuvent précéder le build déployé, des sections sont des marque-pages. La section [Framework](/liberty/framework/overview) est le point d'entrée recommandé.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ln-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ln-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ln-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <linearGradient id="ln-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.75"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.55"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="220" height="80" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="150" y="64" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📄 CONFIG TOML</text>
  <text x="150" y="84" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <text x="150" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">dictionary.toml</text>
  <text x="150" y="114" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">screens.toml</text>

  <line x1="260" y1="80" x2="380" y2="80" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <text x="320" y="74" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">load</text>

  <rect x="380" y="40" width="240" height="80" rx="10" fill="url(#ln-g-blue)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="500" y="64" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Cœur Liberty Next</text>
  <text x="500" y="84" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">FastAPI · SQL async · auth</text>
  <text x="500" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">PoolRegistry · ConnectorRegistry</text>
  <text x="500" y="114" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">/api/* · /admin/* · /ai/chat</text>

  <line x1="620" y1="80" x2="740" y2="80" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <text x="680" y="74" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">REST</text>

  <rect x="740" y="40" width="220" height="80" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="850" y="64" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚛️ UI REACT</text>
  <text x="850" y="84" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">TableView · Dashboard</text>
  <text x="850" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Settings · Chat</text>
  <text x="850" y="114" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">EN / FR</text>

  <rect x="40" y="180" width="280" height="100" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="180" y="204" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">🗄 POOLS SQL</text>
  <text x="180" y="224" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">PostgreSQL · Oracle · SQLite</text>
  <text x="180" y="240" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">schéma découvert à la requête</text>
  <text x="180" y="258" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">cursor.description → colonnes typées</text>

  <line x1="320" y1="230" x2="440" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <rect x="440" y="200" width="120" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1.2"/>
  <text x="500" y="220" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SQLConnector</text>
  <text x="500" y="238" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">requêtes nommées</text>
  <text x="500" y="252" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">verrou en écriture</text>

  <line x1="560" y1="230" x2="680" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <rect x="680" y="180" width="280" height="100" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="820" y="204" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">🌐 CONNECTEURS API</text>
  <text x="820" y="224" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">endpoints REST</text>
  <text x="820" y="240" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">bearer / basic / OAuth2 / api_key</text>
  <text x="820" y="258" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">substitution de variables</text>

  <rect x="40" y="320" width="920" height="100" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1.2"/>
  <text x="60" y="346" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">DICTIONNAIRE · ÉCRANS · TABLEAUX DE BORD · MENUS</text>
  <text x="60" y="368" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Les entrées du dictionnaire fixent libellés et règles BOOLEAN / ENUM / LOOKUP sur une colonne de requête. Les écrans transforment un clic sur une ligne en formulaire modal typé (onglets · conditions par champ · audit). Les tableaux de bord agencent graphiques et KPI sur les requêtes nommées. Les menus pilotent ce que l'opérateur voit dans la barre latérale, élagué selon ses permissions.</text>
  <text x="60" y="392" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Chaque fichier de config est rechargeable à chaud. `POST /admin/reload` reconstruit le registre ; les requêtes en cours gardent la version chargée.</text>
  <text x="60" y="412" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">Une clé de licence (JWT signé RS256) déverrouille les connecteurs `licensed = true` — c'est ce qui gère nomasx1 et nomajde.</text>
</svg>

---

## Ce qui change depuis v1

| Sujet | v1 (Liberty) | v2 (Liberty Next) |
|---|---|---|
| **Source du schéma** | ~50 tables `ly_*` : requêtes, colonnes, formulaires, menus tous enregistrés en lignes. | Découvert à l'exécution depuis le curseur (`cursor.description`) ; les indications d'affichage vivent dans [`config/connectors.toml`](/liberty/framework/connectors). |
| **Mise en page** | Tables formulaire / dialogue / colonne (`ly_dialogs`, `ly_dlg_frm`, `ly_dlg_tab`, `ly_dlg_col`) chaînées par écran. | Un seul [`Screen`](/liberty/framework/screens) par objet métier, avec `dialog`, `actions`, `row_menu` en ligne. |
| **Lookups / enums** | Lignes `ly_lookup` / `ly_enum`. | Entrées du [dictionnaire](/liberty/framework/dictionary) — règles `BOOLEAN` / `ENUM` / `LOOKUP` fixées par champ. |
| **Auth** | Base de données uniquement. | Backend TOML *ou* base, JWT, OIDC contre n'importe quel fournisseur. |
| **Assistant IA** | OpenAI codé en dur. | SDK Anthropic, tool-use sur les connecteurs / écrans / tableaux de bord. |
| **Frontend** | Mélange React + jQuery + code par écran. | React 19 + Vite + TypeScript, single-page, sombre par défaut avec thème clair. |
| **Migration** | — | `liberty-migrate all / dictionary / menu / screen` lit v1 en lecture seule et produit des fragments TOML. |

Le plan complet vit dans `docs/PLAN.md` du dépôt.

---

## Développement local

```bash
python3.12 -m venv .venv
.venv/bin/pip install -e ".[dev]"

./start.sh init-config    # copie config/*.toml.example → fichiers réels (non versionnés)
./start.sh init-db        # PREMIER LANCEMENT : crée le store d'auth + un utilisateur `admin`
./start.sh                # build le frontend si obsolète, puis lance FastAPI sur :8000
./start.sh dev            # idem, avec auto-reload
./start.sh frontend       # serveur Vite sur :5173 (HMR) — à coupler avec `./start.sh api dev`
./start.sh help           # toutes les commandes
```

Le backend sert le frontend buildé (`frontend/dist`) à `/` — pas d'étape de copie. Un checkout vierge sans `config/connectors.toml` tourne en API-only : le pool framework est le seul connecteur par défaut.

Variables d'environnement :

| Variable | Rôle |
|---|---|
| `LIBERTY_DB_URL` | Pool framework (tables d'auth quand `[auth] backend = "db"`). Par défaut : un fichier SQLite local. |
| `LIBERTY_JWT_SECRET` | Clé de signature des jetons — éphémère si absente. |
| `LIBERTY_MASTER_KEY` | Clé de chiffrement pour les valeurs `ENC:` (compatible v1). |
| `LIBERTY_LICENSE_KEY` | JWT signé RS256 qui déverrouille les connecteurs sous licence (nomasx1 / nomajde). |
| `ANTHROPIC_API_KEY` | Active l'assistant IA intégré. |

Les fichiers de config acceptent les références `${NOM}` et `${NOM:-defaut}`.

---

## Pour aller plus loin

| Où aller | Pourquoi |
|---|---|
| [Framework → Présentation](/liberty/framework/overview) | Modèle en couches : pools, connecteurs, dictionnaire, écrans, tableaux de bord, menus. |
| [Framework → Connecteurs](/liberty/framework/connectors) | Définir un connecteur SQL ou API en TOML — schéma, paramètres, verrou en écriture. |
| [Framework → Écrans](/liberty/framework/screens) | Envelopper une requête connecteur dans un Screen — grille, filtres, formulaire modal, audit. |
| [Nomasx-1 — Présentation](/liberty/nomasx1/overview) | Sécurité et conformité d'entreprise — utilisateurs, rôles, conformité Oracle / JDE, séparation des tâches. |
| [Nomajde — Présentation](/liberty/nomajde/overview) | Compagnon JD Edwards — données maîtres, maintenance sécurité, transactions, reporting, supervision. |
