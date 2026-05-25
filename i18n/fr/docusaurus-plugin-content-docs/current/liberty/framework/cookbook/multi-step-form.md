---
title: Formulaire multi-étapes / workflow
description: "Recette — modéliser un workflow d'approbation avec transitions de statut, visibilité des champs par état, actions filtrées par rôle et relances planifiées. Les conditions de formulaire + les actions personnalisées du framework font le travail."
keywords: [Liberty Framework, cookbook, workflow, approbation, statut, transitions, conditions de formulaire, relance]
---

# Formulaire multi-étapes / workflow

## Le problème

Un document passe par une séquence d'états — *Brouillon → Soumis → Approuvé / Rejeté → Clôturé*. Chaque transition est un bouton visible uniquement par le bon rôle. Certains champs n'apparaissent qu'après la soumission ; d'autres se figent après l'approbation. Les documents bloqués doivent relancer quelqu'un après N jours.

## Le modèle

Trois fonctionnalités du framework se composent pour modéliser le workflow :

| Fonctionnalité | Ce qu'elle fait |
|---|---|
| **Colonne de statut avec règle `ENUM`** | Affiche l'état courant comme une puce colorée. |
| **Actions personnalisées sur le dialogue** | Un bouton par transition (Soumettre, Approuver, Rejeter). L'expression `Visible quand` de chaque action masque le bouton en dehors de son état valide. |
| **Conditions de formulaire** (`Visible quand`, `Obligatoire quand`, `Désactivé quand`) | Afficher / masquer / figer des champs selon le statut courant. |
| **Job Nomaflow** | Une relance nocturne qui pousse les documents bloqués. |

## La recette

### 1. Schéma

```sql
CREATE TABLE expense_claims (
  id           SERIAL PRIMARY KEY,
  employee     VARCHAR(64) NOT NULL,
  amount       DECIMAL(10,2) NOT NULL,
  description  TEXT,
  status       VARCHAR(16) NOT NULL DEFAULT 'draft',
  submitted_at TIMESTAMP,
  approved_by  VARCHAR(64),
  approved_at  TIMESTAMP,
  rejected_by  VARCHAR(64),
  rejected_at  TIMESTAMP,
  reject_reason TEXT,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP
);
```

### 2. Dictionnaire — l'enum de statut

| Valeur | Libellé | Couleur |
|---|---|---|
| `draft` | Brouillon | `#94a3b8` |
| `submitted` | Soumis | `#60a5fa` |
| `approved` | Approuvé | `#4ade80` |
| `rejected` | Rejeté | `#f87171` |
| `closed` | Clôturé | `#475569` |

### 3. Requêtes d'écriture par statut (une par transition)

```sql
-- submit
UPDATE expense_claims
SET status = 'submitted', submitted_at = CURRENT_TIMESTAMP,
    updated_at = CURRENT_TIMESTAMP
WHERE id = :id AND status = 'draft';

-- approve
UPDATE expense_claims
SET status = 'approved', approved_by = :session_user, approved_at = CURRENT_TIMESTAMP,
    updated_at = CURRENT_TIMESTAMP
WHERE id = :id AND status = 'submitted';

-- reject
UPDATE expense_claims
SET status = 'rejected', rejected_by = :session_user, rejected_at = CURRENT_TIMESTAMP,
    reject_reason = :reject_reason, updated_at = CURRENT_TIMESTAMP
WHERE id = :id AND status = 'submitted';
```

Le garde-fou `AND status = '<attendu>'` au niveau SQL empêche les doubles transitions accidentelles (un déposant ne peut pas re-soumettre ; un manager ne peut pas approuver une demande rejetée).

### 4. Écran — actions + conditions

**Paramètres → Écrans → expense-claims**.

#### Actions

| Action | Connecteur / Requête | Visible quand | Rôles |
|---|---|---|---|
| **Soumettre** | `expense-claims` / `submit` | `status == 'draft' && employee == session.user` | Tous (filtré par le filtre niveau ligne) |
| **Approuver** | `expense-claims` / `approve` | `status == 'submitted' && 'manager' in session.roles` | Manager |
| **Rejeter** | `expense-claims` / `reject` | `status == 'submitted' && 'manager' in session.roles` | Manager. Le dialogue de confirmation demande `reject_reason`. |

#### Conditions de champs

| Champ | Visible quand | Obligatoire quand | Désactivé quand |
|---|---|---|---|
| **Description** | toujours | `status == 'draft'` | `status != 'draft'` |
| **Amount** | toujours | `status == 'draft'` | `status != 'draft'` |
| **Submitted at** | `status != 'draft'` | — | toujours (lecture seule) |
| **Approved by / at** | `status == 'approved'` | — | toujours |
| **Reject reason** | `status == 'rejected'` | — | toujours |

Le dialogue est la même ligne — il masque / fige simplement différents champs selon le statut.

### 5. Codes de permission

Les transitions génèrent automatiquement trois codes d'écriture :

- `sql:expense-claims:submit:write`
- `sql:expense-claims:approve:write`
- `sql:expense-claims:reject:write`

Rôles :

| Rôle | Codes accordés |
|---|---|
| `employee` | `sql:expense-claims:submit:write` *(ne peut soumettre que les siennes — le garde-fou SQL gère le reste)* |
| `manager` | `sql:expense-claims:approve:write` + `sql:expense-claims:reject:write` |

### 6. Le job de relance

Relance des demandes bloquées — même modèle que le [job CRM nocturne deals bloqués](../tutorial-crm/06-ai-and-jobs.md) :

```sql
-- nag-stale-submissions
SELECT id, employee, amount, submitted_at
FROM expense_claims
WHERE status = 'submitted'
  AND submitted_at < CURRENT_TIMESTAMP - INTERVAL '5 days';
```

Job Nomaflow, quotidien à 09:00, poste sur le canal Slack `#expenses-managers`.

## Variantes

| Vous voulez… | Faites ceci |
|---|---|
| **Une chaîne d'approbateurs libre** (liste variable d'approbateurs) | Ajoutez une table enfant `approval_steps` ; le statut devient `awaiting:<step_n>`. Les requêtes d'approbation incrémentent le compteur d'étape. Plus complexe mais avec les mêmes primitives. |
| **Un journal d'historique de chaque transition** | Ajoutez une table `expense_audit` ; chaque requête de transition insère une ligne depuis une étape Python. |
| **Réouvrir les rejetés** | Ajoutez une action `reopen` visible quand `status == 'rejected'`, qui rebascule en `draft`. |
| **Notifier le demandeur à chaque transition** | Bloc de notifications sur chaque requête d'écriture — voir [Jobs → Notifications](../jobs/jobs-toml.md). |

## Pour aller plus loin

- [Conditions de formulaire](../form-conditions.md) pour la syntaxe d'expression par champ.
- [Rôles et permissions](../auth/roles-permissions.md) pour filtrer les actions par rôle.
- [Cookbook → Piste d'audit](./audit-trail.md) pour les colonnes `submitted_at` / `approved_at`.
