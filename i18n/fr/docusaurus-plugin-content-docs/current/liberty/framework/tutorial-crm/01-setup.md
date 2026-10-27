---
title: Étape 1 — Mise en place du projet CRM
description: "Début du tutoriel CRM : les tables des clients, affaires et activités, des données d'exemple, et le connecteur crm qui deviendra l'application. À l'issue de l'étape : le framework en service, un superutilisateur connecté, les tables prêtes."
keywords: [Liberty Next, tutoriel, CRM, mise en place, tables, pool, connecteur, prise en main]
---

# Étape 1 — Mise en place du projet CRM

Ce tutoriel construit une petite application de **gestion de la relation client** sur Liberty Next, en six étapes : écrans, listes de valeurs, tableau de bord, rôles, assistant IA et tâche planifiée. Tout se fait depuis les Paramètres.

Cette première étape prépare la base de données et crée le connecteur `crm`.

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
