---
title: Champs conditionnels
description: "Faire apparaître un champ de dialogue, le rendre obligatoire, le verrouiller ou lui imposer une valeur uniquement quand un autre champ a une valeur donnée — réglé sur la colonne depuis l'inspecteur de l'éditeur d'écran, avec des exemples."
keywords: [Liberty Next, champs conditionnels, visible_when, required_when, disabled_when, default_when, disable_on_edit, editable_when, éditeur d'écran, dialogue]
---

# Champs conditionnels

Un dialogue figé pose toujours les mêmes questions. Un dialogue conditionnel s'adapte aux choix déjà faits : afficher **IBAN** pour un virement uniquement, signaler **Motif d'annulation** comme obligatoire pour une commande annulée seulement, verrouiller le **Numéro de facture** une fois la facture créée.

Les réglages et leur comportement exact sont détaillés dans [Conditions de formulaire](../../form-conditions.md). Cette page en montre la mise en place.

---

## Où les régler

Un champ de dialogue affiche une colonne de l'écran, et c'est la colonne qui porte tous les comportements — les mêmes réglages pilotent le dialogue et la grille. Dans l'éditeur d'écran :

1. Ouvrir le dialogue dans le [Constructeur de dialogue](./dialog-builder.md) et cliquer sur le champ — ou sélectionner la colonne dans l'onglet **Colonnes**.
2. L'inspecteur affiche **Configuration de la colonne**, répartie en onglets libellés en anglais : les conditions se trouvent dans **Filter** (`visible_when`), **Edit** (`required_when`, `disabled_when`, `disable_on_add`, `disable_on_edit`), **Defaults** (`default_when`, `write_when`) et **Rules** (`rules_when`).
3. Ajouter une ligne par condition : le **champ** (choisi parmi les colonnes de l'écran) et la **valeur**, ou plusieurs valeurs.

Toutes les lignes d'un même réglage doivent être remplies ensemble (ET). Pour un OU sur un même champ, lister les valeurs dans une seule condition.

---

## Exemples

### Afficher des champs pour un choix donné

Un dialogue *Paiement* où `PAYMENT_METHOD` est une liste (`CASH`, `TRANSFER`, `DIRECT_DEBIT`, `CARD`) :

| Colonne | `visible_when` |
|---|---|
| `IBAN` | `PAYMENT_METHOD` = `TRANSFER`, `DIRECT_DEBIT` |
| `BIC` | `PAYMENT_METHOD` = `TRANSFER`, `DIRECT_DEBIT` |
| `CARD_LAST4` | `PAYMENT_METHOD` = `CARD` |

Avec `CASH`, aucun des trois champs n'apparaît. Avec `TRANSFER`, `IBAN` et `BIC` s'affichent.

### Rendre un motif obligatoire à l'annulation

| Colonne | `required_when` |
|---|---|
| `CANCELLATION_REASON` | `STATUS` = `CANCELLED` |

Le champ reste toujours affiché ; il reçoit l'astérisque des champs obligatoires dès que le statut vaut `CANCELLED`.

### Verrouiller une clé après création

| Colonne | Réglage |
|---|---|
| `INVOICE_NUMBER` | `disable_on_edit` coché |

Le numéro se saisit à l'ajout de la facture, puis passe en lecture seule — dans le dialogue comme dans la grille. `disable_on_add` fait l'inverse, pour une valeur attribuée à la création.

### Imposer une valeur pour un type de ligne

| Colonne | `default_when` |
|---|---|
| `CREDIT_LIMIT` | `STATUS` = `CANCELLED` → valeur `0`, verrouillage actif |

Dès que le statut passe à `CANCELLED`, le plafond prend la valeur `0` et se verrouille. Avec **lock** désactivé, `0` est seulement proposé et reste modifiable.

### Placer les périodes clôturées en lecture seule

Dans l'onglet **Général** de l'éditeur d'écran :

| Réglage | Valeur |
|---|---|
| `editable_when` | `PERIOD_STATUS` = `OPEN`, `VALIDATED` |

Une ligne d'une période clôturée s'ouvre en consultation, et le serveur en refuse toute modification.

---

## Points d'attention

| Situation | Conséquence | Solution |
|---|---|---|
| Le champ déterminant ne figure pas dans le dialogue. | Le formulaire ignore sa valeur : la condition n'est jamais remplie et le champ dépendant reste masqué. | Ajouter le champ déterminant au dialogue, masqué ou non. |
| `visible_when` sur une colonne clé. | À l'ajout d'une ligne, la clé peut ne pas apparaître. | Verrouiller une clé (`disable_on_edit`) plutôt que la masquer. |
| `required_when` rempli alors que `visible_when` ne l'est pas. | Le champ est obligatoire mais masqué. | Aligner les deux conditions. |
| Une valeur orthographiée différemment. | La condition n'est jamais remplie : la comparaison est exacte (seuls les espaces autour sont ignorés). | Reprendre les codes stockés, pas leurs libellés. |
| Un seuil (`AMOUNT > 1000`). | Les conditions ne testent que l'égalité. | Renvoyer un indicateur depuis la requête de lecture (`HIGH_VALUE = 'Y'`) et tester cet indicateur. |

---

## Pour aller plus loin

- [Conditions de formulaire](../../form-conditions.md) — la liste complète des réglages et le lieu de chaque contrôle.
- [Colonnes](./columns.md) — les autres réglages d'une colonne.
- [Actions et cycle de vie](./actions-and-lifecycle.md) — déclencher des actions au chargement, à l'enregistrement ou à l'annulation du formulaire.
