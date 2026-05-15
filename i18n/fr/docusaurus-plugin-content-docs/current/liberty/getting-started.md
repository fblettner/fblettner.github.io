---
title: Présentation
description: "Liberty Next — framework low-code piloté par connecteur. Quelques lignes de TOML décrivent les sources de données ; l'interface React construit automatiquement la grille, le formulaire et les filtres à partir des colonnes que la requête retourne."
keywords: [Liberty, Liberty Next, low-code, framework, connecteur, TOML, SQL, API, écran, tableau de bord, dictionnaire, nomasx1, nomajde]
---

# Liberty Next

**Liberty Next** est un framework low-code piloté par connecteur. Le principe est simple : **la configuration décrit les sources de données ; le framework découvre le reste à l'exécution.** Un connecteur SQL tient en quelques lignes de TOML qui désignent un pool de base de données et une liste de requêtes. L'interface React construit ensuite la grille typée, la ligne de filtres, le formulaire modal et les listes déroulantes à partir des colonnes que la requête retourne. Pas de duplication de schéma, pas de code à écrire par écran.

Deux applications payantes s'appuient sur Liberty Next :

- **[Nomasx-1](/liberty/nomasx1/overview)** — sécurité et conformité d'entreprise. Vue centralisée des utilisateurs et des rôles, conformité des licences Oracle et JD Edwards, analyse automatisée de la séparation des tâches. Pour les auditeurs, les responsables sécurité et les gestionnaires de licences.
- **[Nomajde](/liberty/nomajde/overview)** — application compagnon JD Edwards. Écrans live sur les données JDE : données maîtres, atelier de maintenance sécurité, transactions, reporting BIP planifié, supervision live. Pour les opérateurs JDE, les administrateurs sécurité et les ingénieurs d'exploitation.

Le framework seul (sans les connecteurs sous licence) est gratuit.

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
  <text x="150" y="64" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📄 CONFIGURATION TOML</text>
  <text x="150" y="84" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <text x="150" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">dictionary.toml</text>
  <text x="150" y="114" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">screens.toml</text>

  <line x1="260" y1="80" x2="380" y2="80" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <text x="320" y="74" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">chargement</text>

  <rect x="380" y="40" width="240" height="80" rx="10" fill="url(#ln-g-blue)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="500" y="64" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Cœur Liberty Next</text>
  <text x="500" y="84" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">FastAPI · SQL async · auth</text>
  <text x="500" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Registre de pools · de connecteurs</text>
  <text x="500" y="114" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">/api/* · /admin/* · /ai/chat</text>

  <line x1="620" y1="80" x2="740" y2="80" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <text x="680" y="74" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">REST</text>

  <rect x="740" y="40" width="220" height="80" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="850" y="64" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚛️ INTERFACE REACT</text>
  <text x="850" y="84" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Grilles · Tableaux de bord</text>
  <text x="850" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Paramètres · Chat IA</text>
  <text x="850" y="114" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">EN / FR</text>

  <rect x="40" y="180" width="280" height="100" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="180" y="204" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">🗄 POOLS SQL</text>
  <text x="180" y="224" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">PostgreSQL · Oracle · SQLite</text>
  <text x="180" y="240" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">schéma découvert à l'exécution</text>
  <text x="180" y="258" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">colonnes typées depuis le curseur</text>

  <line x1="320" y1="230" x2="440" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <rect x="440" y="200" width="120" height="60" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1.2"/>
  <text x="500" y="220" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Connecteur SQL</text>
  <text x="500" y="238" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">requêtes nommées</text>
  <text x="500" y="252" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">contrôle d'écriture</text>

  <line x1="560" y1="230" x2="680" y2="230" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ln-arrow)"/>
  <rect x="680" y="180" width="280" height="100" rx="10" fill="url(#ln-g-slate)" stroke="#1f2937" strokeWidth="1.2"/>
  <text x="820" y="204" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">🌐 CONNECTEURS API</text>
  <text x="820" y="224" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">endpoints REST</text>
  <text x="820" y="240" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">bearer / basic / OAuth2 / api_key</text>
  <text x="820" y="258" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">substitution de variables</text>

  <rect x="40" y="320" width="920" height="100" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1.2"/>
  <text x="60" y="346" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">DICTIONNAIRE · ÉCRANS · TABLEAUX DE BORD · MENUS</text>
  <text x="60" y="368" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Le dictionnaire attache les libellés et les règles d'affichage (BOOLEAN / ENUM / LOOKUP) aux colonnes des requêtes. Les écrans transforment un clic sur une ligne en formulaire modal typé, avec onglets, conditions par champ et audit. Les tableaux de bord disposent les graphiques et les indicateurs au-dessus des mêmes requêtes nommées. Les menus définissent l'arborescence latérale, élaguée selon les droits de l'utilisateur connecté.</text>
  <text x="60" y="392" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Chaque fichier de configuration est rechargeable à chaud. `POST /admin/reload` reconstruit le registre ; les requêtes en cours conservent la version qu'elles utilisent.</text>
  <text x="60" y="412" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">Une clé de licence (JWT signé RS256) déverrouille les connecteurs marqués `licensed = true` — c'est ainsi que Nomasx-1 et Nomajde sont activés.</text>
</svg>

---

## Ce que Liberty Next apporte

| Domaine | Ce que le framework fournit |
|---|---|
| **Sources de données** | Pools SQL (PostgreSQL, Oracle, SQLite) et endpoints HTTP, déclarés en TOML sous `config/`. |
| **Découverte de schéma** | Les colonnes sont lues à l'exécution depuis le curseur de la requête ; le dictionnaire ajoute libellés, formats et règles d'affichage par colonne. |
| **Écrans** | Une entrée [`Screen`](/liberty/framework/screens) par objet métier : grille, formulaire modal, conditions par champ, onglet d'audit. |
| **Tableaux de bord** | [Graphiques et indicateurs](/liberty/framework/dashboards) au-dessus des mêmes requêtes nommées — barres, lignes, camemberts, panneaux numériques. |
| **Authentification** | Backend TOML ou base de données, jetons JWT, OIDC avec n'importe quel fournisseur. |
| **Assistant IA** | Tool-use Anthropic au-dessus des connecteurs, écrans et tableaux de bord configurés sur l'instance. |
| **Frontend** | React 19 + Vite + TypeScript, single-page, thème sombre par défaut, EN / FR. |

---

## Installation locale

```bash
python3.12 -m venv .venv
.venv/bin/pip install -e ".[dev]"

./start.sh init-config    # copie config/*.toml.example → fichiers réels (non versionnés)
./start.sh init-db        # PREMIÈRE EXÉCUTION : crée le magasin d'auth et un utilisateur `admin`
./start.sh                # rebuild le frontend si nécessaire puis lance FastAPI sur :8000
./start.sh dev            # idem, avec auto-reload
./start.sh frontend       # serveur Vite sur :5173 (HMR) — à associer à `./start.sh api dev`
./start.sh help           # liste toutes les commandes
```

Le backend sert le frontend buildé (`frontend/dist`) directement sur `/` — aucune étape de copie. Sur un checkout vierge sans `config/connectors.toml`, l'instance tourne en mode API uniquement, avec pour seul connecteur le pool du framework.

Variables d'environnement :

| Variable | Rôle |
|---|---|
| `LIBERTY_DB_URL` | Pool du framework (porte les tables d'authentification quand `[auth] backend = "db"`). Par défaut : un fichier SQLite local. |
| `LIBERTY_JWT_SECRET` | Clé de signature des jetons — éphémère si absente. |
| `LIBERTY_MASTER_KEY` | Clé maîtresse de chiffrement utilisée pour déchiffrer les valeurs `ENC:` dans la configuration. |
| `LIBERTY_LICENSE_KEY` | JWT signé RS256 qui déverrouille les connecteurs sous licence (Nomasx-1 / Nomajde). |
| `ANTHROPIC_API_KEY` | Active l'assistant IA intégré. |

Les fichiers de configuration acceptent les références `${NOM}` et `${NOM:-defaut}`.

---

## Pour aller plus loin

| Où aller | Pourquoi |
|---|---|
| [Framework → Présentation](/liberty/framework/overview) | Vue d'ensemble des couches : pools, connecteurs, dictionnaire, écrans, tableaux de bord, menus. |
| [Framework → Connecteurs](/liberty/framework/connectors) | Déclarer un connecteur SQL ou API en TOML — schéma, paramètres, contrôle d'écriture. |
| [Framework → Écrans](/liberty/framework/screens) | Construire un écran à partir d'une requête connecteur — grille, filtres, formulaire modal, audit. |
| [Nomasx-1 — Présentation](/liberty/nomasx1/overview) | Sécurité et conformité d'entreprise — utilisateurs, rôles, conformité des licences Oracle / JDE, séparation des tâches. |
| [Nomajde — Présentation](/liberty/nomajde/overview) | Compagnon JD Edwards — données maîtres, maintenance sécurité, transactions, reporting, supervision. |
