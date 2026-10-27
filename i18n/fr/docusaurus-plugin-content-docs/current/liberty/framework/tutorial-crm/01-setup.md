---
title: Étape 1 — Mise en place du projet CRM
description: "Début du tutoriel CRM : les tables des clients, affaires et activités, des données d'exemple, et le connecteur crm qui deviendra l'application. À l'issue de l'étape : le framework en service, un superutilisateur connecté, les tables prêtes."
keywords: [Liberty Next, tutoriel, CRM, mise en place, tables, pool, connecteur, prise en main]
---

# Étape 1 — Mise en place du projet CRM

Ce tutoriel construit une petite application de **gestion de la relation client** sur Liberty Next, en six étapes : écrans, listes de valeurs, tableau de bord, rôles, assistant IA et tâche planifiée. Tout se fait depuis les Paramètres.

Cette première étape prépare la base de données et crée le connecteur `crm`.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 370" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu1-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu1-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu1-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu1-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="30" width="760" height="330" rx="14" fill="url(#tu1-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="250" y="60" width="170" height="164" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="262" y="80" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <text x="264" y="102" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">id  PK</text>
  <text x="264" y="120" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">name</text>
  <text x="264" y="138" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">industry</text>
  <text x="264" y="156" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">country</text>
  <text x="264" y="174" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">status</text>
  <text x="264" y="192" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">primary_email</text>
  <text x="264" y="210" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">created_by …</text>
  <rect x="470" y="60" width="170" height="164" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="482" y="80" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">deals</text>
  <text x="484" y="102" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">id  PK</text>
  <text x="484" y="120" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">customer_id</text>
  <text x="484" y="138" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">name</text>
  <text x="484" y="156" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">stage</text>
  <text x="484" y="174" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">amount</text>
  <text x="484" y="192" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">close_date</text>
  <text x="484" y="210" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">owner</text>
  <rect x="690" y="60" width="170" height="146" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="702" y="80" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">activities</text>
  <text x="704" y="102" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">id  PK</text>
  <text x="704" y="120" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">deal_id</text>
  <text x="704" y="138" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">kind</text>
  <text x="704" y="156" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">notes</text>
  <text x="704" y="174" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">happened_at</text>
  <text x="704" y="192" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">recorded_by</text>
  <rect x="470" y="250" width="170" height="92" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="482" y="270" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">deal_stages</text>
  <text x="484" y="292" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">code  PK</text>
  <text x="484" y="310" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">label</text>
  <text x="484" y="328" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ord</text>
  <line x1="470" y1="130" x2="420" y2="130" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tu1-flow)"/>
  <line x1="690" y1="130" x2="640" y2="130" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tu1-flow)"/>
  <line x1="555" y1="250" x2="555" y2="220" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tu1-flow)"/>
  <rect x="740" y="270" width="200" height="60" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="840.0" y="297.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">connecteur crm</text>
  <text x="840.0" y="312.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">SQL · pool default</text>
  <rect x="10" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="20" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">3 lignes d'exemple</text>
  <line x1="210" y1="107.0" x2="250" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu1-arrow)"/>
  <rect x="1000" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activités</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plusieurs par affaire</text>
  <line x1="1000" y1="107.0" x2="860" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu1-arrow)"/>
  <rect x="10" y="280" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes</text>
  <text x="20" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liste de valeurs</text>
  <line x1="210" y1="297.0" x2="470" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu1-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le connecteur crm</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">devient l'app à l'étape 2</text>
  <line x1="1000" y1="317.0" x2="940" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu1-arrow)"/>
</svg>

---

## Ce que nous construisons

| Étape | Ajout | Notions abordées |
|---|---|---|
| **1 — Mise en place** *(cette page)* | Tables, données d'exemple, connecteur `crm`. | Pools et connecteurs. |
| **[2 — Clients](./02-customers.md)** | L'écran Clients et le menu de l'application. | Requêtes générées depuis une table, écrans, menus. |
| **[3 — Affaires](./03-deals.md)** | Les affaires liées aux clients, avec leurs activités dans un onglet. | Dictionnaire, listes de valeurs, onglets imbriqués. |
| **[4 — Tableau de bord](./04-dashboard.md)** | Un tableau de bord du pipeline. | Indicateurs, graphiques, période. |
| **[5 — Rôles](./05-auth.md)** | Rôles, utilisateurs, périmètre de données, connexion d'entreprise. | Qui voit quoi. |
| **[6 — IA et tâches](./06-ai-and-jobs.md)** | L'assistant IA et une tâche quotidienne. | Assistant, Nomaflow, notifications. |

---

## Prérequis

| Besoin | Raison |
|---|---|
| **Liberty Next installé** | Voir [Installation](../../installation/overview.md). |
| **Un compte superutilisateur** | Les Paramètres sont réservés aux superutilisateurs. |
| **Un client SQL** | Pour créer les tables — `psql`, DBeaver, ou tout client connecté à la base du pool `default`. |

Le pool `default` pointe vers la base PostgreSQL fournie sur une installation Docker, ou vers un fichier SQLite local sur une installation Python sans PostgreSQL. Le SQL ci-dessous est écrit pour PostgreSQL ; sous SQLite, remplacer `SERIAL` par `INTEGER`.

---

## Créer les tables

```sql
CREATE TABLE customers (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(255) NOT NULL,
  industry      VARCHAR(64),
  country       VARCHAR(2),
  status        VARCHAR(16) NOT NULL DEFAULT 'ACTIVE',
  primary_email VARCHAR(255),
  created_by    VARCHAR(64),
  created_at    TIMESTAMP,
  updated_by    VARCHAR(64),
  updated_at    TIMESTAMP
);

CREATE TABLE deal_stages (
  code  VARCHAR(16) PRIMARY KEY,
  label VARCHAR(64) NOT NULL,
  ord   INTEGER NOT NULL
);

CREATE TABLE deals (
  id          SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES customers(id),
  name        VARCHAR(255) NOT NULL,
  stage       VARCHAR(16) NOT NULL DEFAULT 'QUALIFIED' REFERENCES deal_stages(code),
  amount      DECIMAL(12,2) NOT NULL DEFAULT 0,
  close_date  DATE,
  owner       VARCHAR(64),
  updated_at  TIMESTAMP
);

CREATE TABLE activities (
  id          SERIAL PRIMARY KEY,
  deal_id     INTEGER NOT NULL REFERENCES deals(id),
  kind        VARCHAR(16) NOT NULL,
  notes       VARCHAR(2000),
  happened_at TIMESTAMP NOT NULL,
  recorded_by VARCHAR(64)
);

INSERT INTO deal_stages (code, label, ord) VALUES
  ('QUALIFIED', 'Qualifiée', 10), ('PROPOSAL', 'Proposition', 20),
  ('NEGOTIATION', 'Négociation', 30), ('WON', 'Gagnée', 40), ('LOST', 'Perdue', 50);

INSERT INTO customers (name, industry, country, primary_email) VALUES
  ('ACME Industries', 'Industrie',  'FR', 'contact@acme.example'),
  ('Beta SARL',       'Logistique', 'FR', 'ventes@beta.example'),
  ('Gamma SA',        'Services',   'BE', 'bonjour@gamma.example');

INSERT INTO deals (customer_id, name, stage, amount, close_date) VALUES
  (1, 'Renouvellement du contrat annuel', 'PROPOSAL',     45000, '2026-11-15'),
  (1, 'Offre de formation',               'QUALIFIED',     8500, '2026-12-10'),
  (2, 'Plateforme logistique',            'NEGOTIATION', 120000, '2026-11-30'),
  (3, 'Contrat de support',               'WON',          18000, '2026-10-05');
```

---

## Créer le connecteur `crm`

Un **connecteur** regroupe sous un nom les requêtes d'une base de données. Dès qu'il aura un menu, il deviendra l'**application** `crm`.

1. Ouvrir **Paramètres → Connecteurs**, cliquer sur **＋ Connecteur**.
2. Nom `crm`, type **SQL**, pool `default`. Enregistrer.

Le connecteur apparaît sous *Sources de données* dans la liste de gauche : il n'a pas encore de menu. Il passera sous *Applications* à l'[étape 2](./02-customers.md).

Pour travailler sur une autre base que celle du framework, ajouter d'abord un pool dans **Paramètres → Pools** avec son URL, puis le choisir ici — voir [Connecteurs](../connectors.md#pools).

---

## Vérifications

| Vérification | Moyen |
|---|---|
| Tables créées | `SELECT count(*) FROM customers;` renvoie 3. |
| Connecteur créé | **Paramètres → Connecteurs** liste `crm` sous *Sources de données*. |

→ **[Étape 2 — L'écran Clients](./02-customers.md)** : les requêtes, le premier écran et le menu.
