---
title: Étape 3 — Affaires et relations
description: "Ajoutez l'écran Affaires avec un lookup clé étrangère vers les Clients, polissez le dictionnaire pour que les valeurs de statut s'affichent en chips colorés, et ajoutez une sous-grille Activités à l'intérieur du dialogue de l'affaire. Illustre les lookups, le dictionnaire et les relations parent-enfant."
keywords: [Liberty Framework, tutoriel, CRM, affaires, lookups, dictionnaire, clé étrangère, sous-grille, activités]
---

# Étape 3 — Affaires et relations

L'écran Clients fonctionne mais reste brut. Dans cette étape, nous ajoutons la deuxième entité — **Affaires** — avec une référence clé étrangère vers Clients, polissons le rendu visuel via le **dictionnaire**, et ajoutons une **sous-grille Activités** à l'intérieur du dialogue de l'affaire pour que les utilisateurs puissent journaliser appels et réunions contre une affaire.

À la fin de cette étape, le CRM compte deux écrans liés avec des chips, des listes déroulantes et une relation parent-enfant en bonne et due forme. Temps estimé : **20 minutes**.

---

## Ce que nous faisons et pourquoi

Jusqu'à présent, les valeurs brutes des colonnes coulaient telles quelles vers l'UI — un statut n'était que du texte, un pays seulement deux lettres. Les vraies applications veulent **des chips libellés, des listes déroulantes alimentées par une table, des entités liées en ligne**.

Le framework règle ça via trois primitives empilées au-dessus du couple connecteur + écran que nous avons déjà construit :

| Primitive | Ce qu'elle nous donne | Où elle vit |
|---|---|---|
| **Entrée de dictionnaire** | Une déclaration par colonne du libellé, du format et de la *règle d'affichage* (BOOLEAN / ENUM / LOOKUP / PASSWORD). | *Paramètres → Dictionnaire → Colonnes*. |
| **Lookup** | Une requête nommée qui retourne des paires `{ value, label }` — alimente les listes déroulantes. | *Paramètres → Dictionnaire → Lookups*. |
| **Sous-grille dans un onglet de dialogue** | Une grille dans le dialogue, cadrée par la clé du parent. | *Paramètres → Écrans → Dialogue → Sous-grilles*. |

Nous utiliserons les trois.

---

## Polir d'abord l'écran clients

Deux gains rapides sur l'écran clients que nous avons construit à l'étape précédente.

### Ajouter `status` en ENUM dans le dictionnaire

Ouvrez **Paramètres → Dictionnaire → Colonnes → + Nouvelle colonne** :

| Champ | Valeur |
|---|---|
| **Nom** | `customer_status` |
| **Libellé** | `Status` *(carte par langue ; anglais `Status`, français `Statut`)* |
| **Type** | `string` |
| **Règle** | `ENUM` |
| **Valeurs enum** | Les quatre lignes ci-dessous |

| Valeur | Libellé | Couleur |
|---|---|---|
| `active`     | Actif      | `#4ade80` *(vert)* |
| `prospect`   | Prospect   | `#60a5fa` *(bleu)* |
| `inactive`   | Inactif    | `#94a3b8` *(gris)* |
| `lost`       | Perdu      | `#f87171` *(rouge)* |

**Enregistrer**. Puis ouvrez **Paramètres → Connecteurs → customers → requête `list`**, descendez jusqu'à **Indices de colonne**, et ajoutez une ligne :

| Colonne | Entrée de dictionnaire |
|---|---|
| `status` | `customer_status` |

**Enregistrer et recharger**.

Rouvrez l'écran Clients. La colonne *Statut* affiche maintenant un chip coloré — `Actif` vert pour les trois lignes initiales. Le champ *Statut* du dialogue est désormais une liste déroulante des quatre valeurs. Nous n'avons touché ni au SQL ni à l'écran.

### Câbler `country` à un lookup

La colonne pays est actuellement un code à deux lettres en texte libre. Un lookup la transforme en liste déroulante avec autocomplétion.

D'abord la requête source — il nous faut un connecteur qui liste les pays. Nous allons profiter du connecteur **customers** en ajoutant une petite requête de référence, puisque nous n'avons pas de table pays distincte :

Ouvrez **Paramètres → Connecteurs → customers → + Ajouter une requête** :

| Champ | Valeur |
|---|---|
| **Nom** | `country-list` |
| **Opération** | Lecture |
| **SQL** | La requête ci-dessous |

```sql
-- Liste courte ISO 3166 pour le tutoriel. Dans une vraie app, ça viendrait d'une table pays.
SELECT 'FR' AS code, 'France'         AS label UNION ALL
SELECT 'DE',         'Germany'        UNION ALL
SELECT 'BE',         'Belgium'        UNION ALL
SELECT 'IT',         'Italy'          UNION ALL
SELECT 'ES',         'Spain'          UNION ALL
SELECT 'GB',         'United Kingdom' UNION ALL
SELECT 'US',         'United States'  UNION ALL
SELECT 'CA',         'Canada';
```

Cliquez sur **▶ Tester** pour confirmer les huit lignes. **Enregistrer et recharger**.

Définissez maintenant le lookup. **Paramètres → Dictionnaire → Lookups → + Nouveau lookup** :

| Champ | Valeur |
|---|---|
| **Nom** | `countries` |
| **Connecteur** | `customers` ▾ |
| **Requête** | `country-list` ▾ |
| **Colonne valeur** | `code` |
| **Colonne libellé** | `label` |
| **Cache** | `Par session` |

**Enregistrer**.

Retour dans **Paramètres → Dictionnaire → Colonnes → + Nouvelle colonne** :

| Champ | Valeur |
|---|---|
| **Nom** | `country_code` |
| **Libellé** | `Country` / `Pays` |
| **Type** | `string` |
| **Règle** | `LOOKUP` |
| **Lookup** | `countries` ▾ |

**Enregistrer**. Puis sur la requête `list` du connecteur customers, ajoutez un autre indice de colonne :

| Colonne | Entrée de dictionnaire |
|---|---|
| `country` | `country_code` |

**Enregistrer et recharger**.

Rouvrez l'écran Clients. La colonne *Pays* affiche maintenant `France`, `Germany`, `France` (libellés résolus), et le champ *Pays* du dialogue est une liste déroulante avec autocomplétion des huit pays.

---

## Construire le connecteur Affaires

Même motif qu'avant — un connecteur avec quatre requêtes.

Ouvrez **Paramètres → Connecteurs → + Nouveau connecteur** :

| Champ | Valeur |
|---|---|
| **Nom** | `deals` |
| **App** | `crm` |
| **Type** | `SQL` |
| **Pool** | `default` |
| **Description** | `Affaires commerciales — étape du pipeline, montant, clôture attendue.` |

### Requête `list`

| Champ | Valeur |
|---|---|
| **Nom** | `list` |
| **Opération** | Lecture |
| **SQL** | La requête ci-dessous |

```sql
SELECT d.id,
       d.name,
       d.customer_id,
       c.name AS customer_name,
       d.stage,
       d.amount,
       d.currency,
       d.close_date,
       d.owner
FROM   deals d
JOIN   customers c ON c.id = d.customer_id
WHERE  (:customer_id IS NULL OR d.customer_id = :customer_id)
  AND  (:stage       IS NULL OR d.stage = :stage)
ORDER BY d.close_date;
```

Notez les deux paramètres optionnels — `customer_id` et `stage`. Déclarez-les dans la sous-table *Paramètres* :

| Nom | Type | Obligatoire | Libellé | Lookup |
|---|---|---|---|---|
| `customer_id` | int    | — | Client | — |
| `stage`       | string | — | Étape | — |

Ne mettez pas de valeurs par défaut — la requête gère `NULL` avec le motif `IS NULL OR`.

Cliquez sur **▶ Tester**. Quatre lignes.

### Lookup pour les clients (FK)

Avant les requêtes d'écriture, définissez un lookup qui permet au formulaire de l'affaire de choisir un client par nom.

**Paramètres → Dictionnaire → Lookups → + Nouveau lookup** :

| Champ | Valeur |
|---|---|
| **Nom** | `customers-list` |
| **Connecteur** | `customers` |
| **Requête** | `list` *(on réutilise la requête de lecture existante)* |
| **Colonne valeur** | `id` |
| **Colonne libellé** | `name` |
| **Cache** | `Par session` |

**Enregistrer**.

Même idée pour les étapes d'affaire — réutilisez une petite requête de référence. Ajoutez au connecteur `deals` :

```sql
SELECT code, label, colour FROM deal_stages ORDER BY ord;
```

Nommez-la `stages-list`. Puis un lookup de dictionnaire qui pointe dessus (`stages`, valeur = `code`, libellé = `label`, colonne couleur = `colour` — donne aux chips leur couleur).

Deux colonnes de dictionnaire référencent maintenant ces lookups :

| Entrée de colonne | Règle | Lookup | Description |
|---|---|---|---|
| `customer_id` *(réutiliser s'il existe)* | LOOKUP | `customers-list` | FK Client sur l'affaire. |
| `deal_stage` | LOOKUP | `stages` | Étape du pipeline. |

Sur les **Indices de colonne** de la requête `deals.list` :

| Colonne | Entrée de dictionnaire |
|---|---|
| `customer_id` | `customer_id` |
| `stage`       | `deal_stage` |
| `amount`      | *(créez une nouvelle entrée de dictionnaire `money` : type `decimal`, format `1 234,56 €`)* |

### Requêtes d'écriture

```sql
-- create
INSERT INTO deals (customer_id, name, stage, amount, currency, close_date, owner, created_at)
VALUES (:customer_id, :name, :stage, :amount, :currency, :close_date, :session_user, CURRENT_TIMESTAMP)
RETURNING id;

-- update
UPDATE deals SET
  customer_id = :customer_id,
  name = :name,
  stage = :stage,
  amount = :amount,
  currency = :currency,
  close_date = :close_date
WHERE id = :id;

-- delete
DELETE FROM deals WHERE id = :id;
```

**Enregistrer et recharger**.

---

## Construire l'écran Affaires

**Paramètres → Écrans → + Nouvel écran** :

| Champ | Valeur |
|---|---|
| **Id** | `crm/deals` |
| **Titre** | `Affaires` |
| **App** | `crm` |
| **Colonnes clés** | `id` |
| **Modifiable** | ✓ |

### Connecteur de lecture

| Champ | Valeur |
|---|---|
| **Connecteur** | `deals` |
| **Requête** | `list` |
| **Tri par défaut** | `close_date` ascendant |

### Colonnes de la grille

| Colonne | Notes |
|---|---|
| `name` | Le libellé de l'affaire. |
| `customer_name` | Issu de la JOIN. |
| `stage` | Rendu en chip coloré via le dictionnaire. |
| `amount` | Rendu en `1 234,56 €` via le dictionnaire. |
| `close_date` | Formaté en `dd/MM/yyyy` (l'Étape 4 polira ça). |

### Champs du dialogue

Un onglet — `Détails` — avec :

- `customer_id` (liste déroulante LOOKUP vers customers)
- `name`
- `stage` (liste déroulante LOOKUP vers stages)
- `amount`
- `currency`
- `close_date`

### Actions

Ajouter → `deals/create`, Enregistrer → `deals/update`, Supprimer → `deals/delete`.

**Enregistrer et recharger**.

Ajoutez la feuille au menu **crm** (Paramètres → Menus → crm → + Ajouter une feuille), qui pointe vers `crm/deals` avec l'icône `briefcase`. **Enregistrer et recharger**.

L'écran Affaires s'allume dans la barre latérale.

---

## Ajouter une sous-grille Activités

La table activities stocke des notes contre les affaires. Plutôt qu'un écran de premier niveau distinct, nous allons intégrer les activités **à l'intérieur** du dialogue d'affaire pour que l'utilisateur voie l'historique d'une affaire à l'endroit même où il la modifie.

### Connecteur activities

```sql
-- activities.list
SELECT id, deal_id, kind, notes, happened_at, recorded_by
FROM   activities
WHERE  deal_id = :deal_id
ORDER BY happened_at DESC;

-- activities.create
INSERT INTO activities (deal_id, kind, notes, happened_at, recorded_by)
VALUES (:deal_id, :kind, :notes, CURRENT_TIMESTAMP, :session_user)
RETURNING id;

-- activities.delete
DELETE FROM activities WHERE id = :id;
```

Câblez la colonne `kind` comme une entrée de dictionnaire ENUM avec les valeurs `call`, `meeting`, `email`, `note` (couleurs différentes).

### Câbler la sous-grille

Ouvrez l'**écran Affaires** → **onglet Dialogue** → **+ Ajouter un onglet** :

| Champ | Valeur |
|---|---|
| **Libellé** | `Activités` |
| **Contenu** | `Sous-grille` *(bascule l'onglet du mode « champs » au mode « grille »)* |

Dans le panneau sous-grille :

| Champ | Valeur |
|---|---|
| **Connecteur** | `activities` |
| **Requête** | `list` |
| **Liaison des paramètres** | `deal_id ← <parent>.id` *(le framework lie automatiquement l'`id` du dialogue parent au paramètre `deal_id` de la sous-grille)* |
| **Modifiable** | ✓ |
| **Connecteur / requête Ajouter** | `activities` / `create` |
| **Connecteur / requête Supprimer** | `activities` / `delete` |

La sous-grille met automatiquement en forme sa grille à partir de la requête `list` (`kind`, `notes`, `happened_at`, `recorded_by`) et son mini-dialogue à partir des colonnes.

**Enregistrer et recharger**.

---

## Voir le résultat

Ouvrez **CRM → Affaires**, cliquez sur l'affaire *Globex Logistics*. Le dialogue s'ouvre avec deux onglets — *Détails* (les champs que nous avons câblés) et *Activités* (vide pour les données initiales).

Basculez sur l'onglet *Activités*, cliquez sur **+ Ajouter**, journalisez une note de `meeting` rapide. Enregistrez. L'activité apparaît dans la sous-grille ; la colonne *Enregistré par* est `admin` (rempli par la valeur par défaut `LOGIN` de la couche formulaire).

Essayez la colonne nom du client sur la grille Affaires — cliquer sur la valeur style chip devrait vous amener à l'écran Clients pré-filtré sur ce client. (On l'obtient gratuitement parce que la colonne `customer_id` est un `LOOKUP` contre la liste des clients.)

---

## Ce que vous avez maintenant

Deux écrans, une relation parent-enfant, un rendu poli via le dictionnaire. Le CRM commence à prendre forme.

Ce qui manque encore :

- Une **vue d'ensemble** — KPI et un graphique qui résument le pipeline. À venir à l'[Étape 4](./04-dashboard.md).
- De **vrais rôles** — aujourd'hui tout est réservé à l'admin. À venir à l'[Étape 5](./05-auth.md).
- L'**IA** et les **jobs planifiés** — à venir à l'[Étape 6](./06-ai-and-jobs.md).

→ **[Étape 4 — Tableau de bord du pipeline commercial](./04-dashboard.md)** — KPI, graphique, drill-down.
