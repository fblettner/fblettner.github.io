---
title: Étape 1 — Mise en place du projet CRM
description: "Démarrez le tutoriel Construire un CRM : installez le framework, créez une app crm vide, préparez les tables de la base que nous utiliserons sur les six étapes. État final : framework opérationnel, admin connecté, trois tables vides prêtes pour les clients, les affaires et les activités."
keywords: [Liberty Framework, tutoriel, CRM, mise en place, installation, app, pool, démarrage]
---

# Étape 1 — Mise en place du projet CRM

Ce tutoriel vous guide à travers la construction d'une application **Customer Relationship Management** opérationnelle sur Liberty Framework — six étapes, d'une installation vide à une application déployée avec des écrans, un tableau de bord, une connexion OIDC, un assistant IA et une tâche planifiée.

À la fin de cette étape, vous aurez un framework opérationnel, une app `crm` vide enregistrée et les trois tables de base que nous utiliserons tout au long du parcours. Temps estimé : **10 minutes**.

---

## Ce que nous construisons

Sur les six étapes :

| Étape | Ce que nous ajoutons | Le concept du framework qu'elle enseigne |
|---|---|---|
| **1 — Mise en place** *(cette page)* | App vide + trois tables de base. | App / Pool — quelles données nous allons interroger. |
| **[2 — Clients](./02-customers.md)** | Premier écran — liste des clients avec dialogue d'édition. | Connecteur / Écran — la surface principale du framework. |
| **[3 — Affaires](./03-deals.md)** | Deuxième écran avec FK vers les clients + une sous-grille Activités. | Lookups / Relations — comment les entités se référencent entre elles. |
| **[4 — Tableau de bord](./04-dashboard.md)** | Tableau de bord du pipeline commercial avec KPI + graphique + drill-down. | Tableau de bord / Graphiques — résumer les données. |
| **[5 — Auth](./05-auth.md)** | Deux rôles + connexion OIDC. | Authentification / Rôles — qui voit quoi. |
| **[6 — IA + Tâches](./06-ai-and-jobs.md)** | Assistant IA sur les données + tâche de synthèse nocturne. | IA / Nomaflow — accès en langage naturel + travail planifié. |

Le domaine CRM est volontairement générique — trois entités, des relations reconnaissables, aucune spécificité éditeur. Une fois le motif assimilé, la même approche s'applique à votre domaine réel, quel qu'il soit.

---

## Prérequis

| Ce qu'il vous faut | Pourquoi |
|---|---|
| **Liberty Framework installé en local** | Suivez [Démarrage → Installation](../../installation/python-server.md) jusqu'à « Vérifier l'installation ». Le framework doit être joignable sur `http://127.0.0.1:8000` avec l'utilisateur `admin` connecté. |
| **PostgreSQL ou le SQLite intégré** | Le tutoriel utilise du SQL générique ; les deux conviennent. SQLite démarre plus vite (déjà câblé). |
| **Un client SQL** | `psql` pour PostgreSQL ou `sqlite3` pour SQLite. Tout outil qui permet d'exécuter un `CREATE TABLE`. |

Si vous n'avez pas encore installé le framework, faites-le d'abord et revenez ici.

---

## Créer les tables de la base

Connectez-vous à votre base (`sqlite3 liberty.db` pour SQLite, `psql` pour PostgreSQL) et exécutez :

```sql
CREATE TABLE customers (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(255) NOT NULL,
  industry      VARCHAR(64),
  country       VARCHAR(2),
  status        VARCHAR(32) NOT NULL DEFAULT 'active',
  primary_email VARCHAR(255),
  created_by    VARCHAR(64),
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_by    VARCHAR(64),
  updated_at    TIMESTAMP
);

CREATE TABLE deals (
  id            SERIAL PRIMARY KEY,
  customer_id   INTEGER NOT NULL REFERENCES customers(id),
  name          VARCHAR(255) NOT NULL,
  stage         VARCHAR(32) NOT NULL DEFAULT 'qualified',
  amount        DECIMAL(12,2) NOT NULL DEFAULT 0,
  currency      VARCHAR(3)   NOT NULL DEFAULT 'EUR',
  close_date    DATE,
  owner         VARCHAR(64),
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE activities (
  id            SERIAL PRIMARY KEY,
  deal_id       INTEGER NOT NULL REFERENCES deals(id),
  kind          VARCHAR(32) NOT NULL,
  notes         TEXT,
  happened_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  recorded_by   VARCHAR(64)
);

-- Une petite table de référence pour les étapes des affaires
CREATE TABLE deal_stages (
  code   VARCHAR(32) PRIMARY KEY,
  label  VARCHAR(64) NOT NULL,
  colour VARCHAR(16),
  ord    INT NOT NULL DEFAULT 0
);

INSERT INTO deal_stages(code, label, colour, ord) VALUES
  ('qualified',   'Qualified',    '#60a5fa', 10),
  ('proposal',    'Proposal',     '#c084fc', 20),
  ('negotiation', 'Negotiation',  '#fb923c', 30),
  ('won',         'Won',          '#4ade80', 40),
  ('lost',        'Lost',         '#f87171', 50);

-- Quelques clients pour tester
INSERT INTO customers(name, industry, country, primary_email) VALUES
  ('Acme Industries SA', 'manufacturing', 'FR', 'contact@acme.example'),
  ('Globex Logistics',   'logistics',     'DE', 'sales@globex.example'),
  ('Initech Services',   'services',      'FR', 'hello@initech.example');

INSERT INTO deals(customer_id, name, stage, amount, currency, close_date) VALUES
  (1, 'Annual contract renewal', 'proposal',    45000.00, 'EUR', '2026-07-15'),
  (1, 'Add-on training package', 'qualified',    8500.00, 'EUR', '2026-08-30'),
  (2, 'Logistics platform Q3',   'negotiation', 120000.00, 'EUR', '2026-09-10'),
  (3, 'Support contract',        'won',         18000.00, 'EUR', '2026-06-01');
```

Sur SQLite, remplacez `SERIAL PRIMARY KEY` par `INTEGER PRIMARY KEY AUTOINCREMENT` et `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` par `DATETIME DEFAULT CURRENT_TIMESTAMP`. Le reste passe tel quel.

Vérification rapide :

```sql
SELECT count(*) FROM customers;  -- → 3
```

---

## Enregistrer l'app `crm`

Ouvrez le framework dans votre navigateur, connectez-vous en tant que `admin`, cliquez sur l'icône engrenage (en haut à droite) pour ouvrir **Paramètres**. Basculez sur l'onglet **Applications** et cliquez sur **+ Nouvelle application**.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '16px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{fontWeight: 700, marginBottom: '10px'}}>Paramètres → Applications → + Nouvelle application</div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1fr', rowGap: '10px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Id</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>crm</span></div>
    <div style={{opacity: 0.75}}>Nom affiché</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>CRM</span></div>
    <div style={{opacity: 0.75}}>Description</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Gestion de la relation client — app du tutoriel</span></div>
    <div style={{opacity: 0.75}}>Icône</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>users ▾</span></div>
    <div style={{opacity: 0.75}}>Ordre</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>10</span></div>
  </div>
  <div style={{display: 'flex', justifyContent: 'flex-end', gap: '6px', marginTop: '14px'}}>
    <span style={{padding: '5px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Annuler</span>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Enregistrer</span>
  </div>
</div>

Cliquez sur **Enregistrer**. Le framework consigne les métadonnées de l'app. Rien de visible ne change encore — les apps n'apparaissent dans le sélecteur d'espace de travail qu'une fois qu'elles ont un menu (nous en ajouterons un à l'[Étape 2](./02-customers.md)).

### Ce qui vient de se passer

Vous avez déclaré un **espace de nommage**. À partir de maintenant, chaque connecteur, écran, menu, tableau de bord et tâche que nous créons portera `app = "crm"` pour que le framework les regroupe sous cet espace de travail.

Vous n'avez normalement pas besoin de déclarer l'app à l'avance — elle serait créée à la première référence. Nous le faisons maintenant pour fixer le *Nom affiché*, l'*Icône* et l'*Ordre* ; sinon le sélecteur d'espace de travail afficherait l'identifiant brut.

---

## Utiliser le pool par défaut

Nous ne créons pas de nouveau pool — le **pool `default`** livré avec le framework pointe vers votre SQLite local (ou ce que vous avez configuré dans `app.toml`). Pour un tutoriel mono-machine, c'est suffisant.

Pour confirmer, ouvrez **Paramètres → Pools**. Vous devriez voir une ligne, `default`, avec le statut **Connecté**.

Si vous avez exécuté le SQL ci-dessus sur une autre base, rendez-vous dans **Paramètres → Pools → + Nouveau pool** et ajoutez-la maintenant — la suite du tutoriel suppose un pool que le framework peut joindre. Le nom du pool sera référencé à l'[Étape 2](./02-customers.md) quand nous construirons le connecteur.

---

## Vérifier

| Vérification | Comment |
|---|---|
| Framework joignable | `http://127.0.0.1:8000` retourne la page d'accueil. |
| Admin connecté | Le coin haut droite affiche le chip `admin`. |
| Tables de la base présentes | `SELECT count(*) FROM customers;` retourne 3. |
| App `crm` enregistrée | *Paramètres → Applications* liste `crm`. |
| Pool connecté | *Paramètres → Pools* affiche `default` (ou votre pool personnalisé) en **Connecté**. |

---

## Ce que vous avez maintenant

Rien de visible encore — mais les fondations sont en place : une app enregistrée, un pool joignable, trois tables avec des données initiales. L'étape suivante transforme cela en un véritable écran.

→ **[Étape 2 — L'écran Clients](./02-customers.md)** — définissez votre premier connecteur, construisez l'écran Clients, ajoutez-le au menu.
