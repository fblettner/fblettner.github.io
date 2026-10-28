---
title: Formulaire multi-étapes / workflow
description: "Recette — un circuit de validation sur une colonne de statut : une requête gardée par transition, des actions de menu de ligne avec confirmation et saisie du motif, une permission par transition, des champs affichés ou verrouillés selon le statut, des lignes clôturées en lecture seule, des notifications et une tâche de relance quotidienne."
keywords: [Liberty Next, cookbook, workflow, validation, statut, transitions, actions, prompt_fields, conditions de formulaire, editable_when, notifications, Nomaflow]
---

# Formulaire multi-étapes / workflow

## Le besoin

Une note de frais passe par *Brouillon → Soumise → Validée / Refusée*. Chaque transition revient à un rôle donné ; certains champs n'ont de sens que dans certains états ; une note en attente depuis trop longtemps doit être relancée.

## La démarche

| Besoin | Mécanisme |
|---|---|
| Une transition qui ne s'applique que depuis le bon état | Une requête d'écriture par transition, avec `AND STATUS = '<attendu>'` dans sa clause WHERE. |
| Un bouton par transition | Une action du menu de ligne : une `chain` avec confirmation, saisie et requête. |
| Seuls les managers valident | La permission de la requête de transition, accordée au rôle des managers. |
| Des champs selon l'état | `visible_when`, `required_when`, `disabled_when` sur les colonnes. |
| Figé une fois la décision prise | Le réglage `editable_when` de l'écran. |
| Prévenir les bonnes personnes | Des règles de notification sur les écritures de l'écran. |
| Relancer les notes en attente | Une tâche Nomaflow quotidienne. |

## La recette

### 1. La table

```sql
CREATE TABLE expense_claims (
  id            INTEGER PRIMARY KEY,
  employee      VARCHAR(64) NOT NULL,
  amount        DECIMAL(10,2) NOT NULL,
  description   VARCHAR(2000),
  status        VARCHAR(16) NOT NULL DEFAULT 'DRAFT',
  submitted_at  TIMESTAMP,
  decided_by    VARCHAR(64),
  decided_at    TIMESTAMP,
  reject_reason VARCHAR(500),
  reminded_at   TIMESTAMP
);
```

### 2. La liste des statuts

**Liberty Next → Construire → Dictionnaire → Énumérations** : une énumération `CLAIM_STATUS` avec les valeurs `DRAFT` (Brouillon), `SUBMITTED` (Soumise), `APPROVED` (Validée), `REJECTED` (Refusée). L'entrée `STATUS` reçoit **Rules** `ENUM` et **Rules values** `CLAIM_STATUS` : la grille affiche les libellés et le dialogue une liste.

### 3. Une requête par transition

Dans **Liberty Next → Construire → Connecteurs → expenses → Requêtes**, trois requêtes d'écriture :

```sql
-- submit_claim
UPDATE expense_claims
SET STATUS = 'SUBMITTED', SUBMITTED_AT = {{SYSTIMESTAMP}}
WHERE ID = :ID AND STATUS = 'DRAFT' AND EMPLOYEE = {{LOGIN}}

-- approve_claim
UPDATE expense_claims
SET STATUS = 'APPROVED', DECIDED_BY = {{LOGIN}}, DECIDED_AT = {{SYSTIMESTAMP}}
WHERE ID = :ID AND STATUS = 'SUBMITTED'

-- reject_claim
UPDATE expense_claims
SET STATUS = 'REJECTED', DECIDED_BY = {{LOGIN}}, DECIDED_AT = {{SYSTIMESTAMP}},
    REJECT_REASON = :REJECT_REASON
WHERE ID = :ID AND STATUS = 'SUBMITTED'
```

La garde `AND STATUS = …` fait qu'une transition depuis un mauvais état ne modifie rien ; `EMPLOYEE = {{LOGIN}}` limite la soumission aux notes du salarié lui-même (`{{LOGIN}}` vaut le nom de l'utilisateur en majuscules, forme sous laquelle `EMPLOYEE` doit être enregistré).

### 4. Les boutons de transition

Dans l'éditeur d'écran, onglet **Menu de ligne**, une entrée par transition :

```toml
[[screens.expenses.expense_claims.row_menu]]
type  = "chain"
id    = "reject"
label = "Refuser"
prompt_title  = "Refuser la note"
prompt_fields = [{ name = "REJECT_REASON", label = "Motif", required = true }]
steps = [
  { type = "run_query", id = "do", query = "reject_claim",
    param_binds = [{ param = "ID", source = "ID" },
                   { param = "REJECT_REASON", source = "INPUT.REJECT_REASON" }] },
  { type = "refresh", id = "reload" },
]
```

*Valider* suit le même modèle, avec une étape `confirm` à la place de la saisie ; *Soumettre*, avec `submit_claim`. Pour afficher un message clair quand la note n'est pas dans le bon état, placer les étapes dans un `if` sur `STATUS` (`equals` `SUBMITTED`) : `then_steps` exécutent la requête, `else_steps` un `notify`. Voir [Actions et cycle de vie](../build/screens/actions-and-lifecycle.md).

### 5. Qui peut faire quoi

Chaque requête a sa propre permission : `sql:expenses:submit_claim`, `sql:expenses:approve_claim`, `sql:expenses:reject_claim`. Dans **Liberty Next → Administrer → Accès → Roles**, accorder la première aux salariés et les deux autres aux seuls managers : un salarié qui clique sur *Valider* se voit opposer un refus. Voir [Rôles et permissions](../build/secure/roles-and-permissions.md).

### 6. Les champs selon l'état

Sur les colonnes (onglets Edit et Filter de l'inspecteur) :

| Colonne | Réglage |
|---|---|
| `DESCRIPTION`, `AMOUNT` | `required_when` STATUS = `DRAFT` |
| `SUBMITTED_AT` | `visible_when` STATUS = `SUBMITTED`, `APPROVED`, `REJECTED` ; `disabled` |
| `DECIDED_BY`, `DECIDED_AT` | `visible_when` STATUS = `APPROVED`, `REJECTED` ; `disabled` |
| `REJECT_REASON` | `visible_when` STATUS = `REJECTED` ; `disabled` |

Et dans l'onglet **Général**, `editable_when` STATUS = `DRAFT` : une fois soumise, la note s'ouvre en lecture seule et seules les transitions du menu de ligne la font évoluer. Voir [Conditions de formulaire](../form-conditions.md).

### 7. Les notifications

Dans **Liberty Next → Construire → Notifications**, une règle sur l'événement **update** de l'écran, avec *Only when the written row has* `STATUS = SUBMITTED`, canaux `portal` et `email`, destinataires `role:managers`, objet `Note {ID} de {EMPLOYEE} à valider`. Une seconde règle sur `STATUS = REJECTED` peut prévenir le demandeur. Voir [Notifications](../../nomaflow/notifications.md).

### 8. Les relances

Une tâche Nomaflow, chaque matin, avec une étape `sql_query` :

```sql
UPDATE expense_claims SET REMINDED_AT = CURRENT_TIMESTAMP
WHERE STATUS = 'SUBMITTED' AND SUBMITTED_AT < CURRENT_TIMESTAMP - INTERVAL '5' DAY
```

et une règle de notification sur l'événement `succeeded` de cette tâche : `{ROWS} notes en attente depuis plus de 5 jours`, à `role:managers`.

## Variantes

| Besoin | Moyen |
|---|---|
| **Historique de chaque transition** | La table d'audit de l'écran (`audit_table`) — voir [Piste d'audit](./audit-trail.md). |
| **Rouvrir une note refusée** | Une requête `reopen_claim` (`STATUS = 'DRAFT' … WHERE STATUS = 'REJECTED'`) et son entrée de menu de ligne. |
| **Un long formulaire en étapes** | Des onglets de dialogue, avec `hide_on_add` / `hide_on_edit` pour les onglets propres à un mode. |

## Pour aller plus loin

- [Actions et cycle de vie](../build/screens/actions-and-lifecycle.md) — chaînes, saisies préalables, conditions.
- [Conditions de formulaire](../form-conditions.md) — les champs selon l'état.
- [Notifications](../../nomaflow/notifications.md) — règles et destinataires.
