---
title: Accès par ligne
description: "Recette — limiter les lignes vues par chaque utilisateur dans Liberty Next : par société, région ou tout élément du dictionnaire avec le périmètre de données d'un rôle et un attribut de l'utilisateur ; ou aux lignes dont l'utilisateur est propriétaire avec le jeton {{USER}} dans la requête."
keywords: [Liberty Next, recette, accès par ligne, périmètre de données, attributs utilisateur, multi-société, "{{USER}}", propriétaire, sécurité]
---

# Accès par ligne

Deux besoins reviennent sans cesse :

- **Par organisation** — une filiale voit ses sociétés, une région ses agences, le siège tout. Utiliser le **périmètre de données** d'un rôle : aucune requête à modifier.
- **Par propriétaire** — un commercial voit les clients qu'il a créés. Utiliser le jeton **`{{USER}}`** dans la requête.

---

## Recette 1 — une société par utilisateur \{#by-company\}

L'objectif : les titulaires du rôle *subsidiary* ne voient que les lignes de leurs propres sociétés, sur chaque écran, export et tableau de bord, tandis que le rôle *group* voit tout.

1. **Donner ses sociétés à chaque utilisateur.** Dans **Liberty Next → Administrer → Accès → Users**, ouvrir l'utilisateur et ajouter un attribut de périmètre de données : clé `company`, valeur `00001, 00050`.
2. **Créer le rôle.** Dans **Liberty Next → Administrer → Accès → Roles**, ajouter *subsidiary* et lui accorder ses menus dans l'onglet **Access**.
3. **Ajouter la règle.** Dans l'onglet **Data scope** : **Dictionary item** `CO — Company`, **From the user's attribute** `company`, et pour *A query without this item* : **returns nothing** — un écran qui ne porte pas la société n'affiche rien plutôt que tout.
4. **Laisser *group* sans règle** : il voit toutes les lignes.

Chaque requête dont le résultat a une colonne société est désormais filtrée sur le serveur pour les titulaires de *subsidiary* — quel que soit l'écran, et aussi pour les exports, tableaux de bord, rapports et l'assistant. Une écriture sur une ligne d'une autre société est refusée.

La même chose dans `auth.toml` :

```toml title="auth.toml"
[roles.subsidiary]
permissions = ["menu:sales:*", "sql:sales:*"]
scope = [{ dd = "CO", source = "#USER.company#", mode = "deny" }]

[users.alice]
roles = ["subsidiary"]
attributes = { company = ["00001", "00050"] }
```

Variantes :

| Besoin | Règle |
|---|---|
| Une liste fixe pour tout le rôle | **Fixed values** `00001, 00050` au lieu de l'attribut. |
| Masquer certaines valeurs | **Exclude these values instead** : `SY not in 00`. |
| Une colonne absente du dictionnaire | **Column name** `REGION` au lieu d'un élément du dictionnaire. |
| Sur un seul connecteur | Choisir le **Connector** ; la règle ne dit rien des autres. |
| Tables JD Edwards (`ABCO`, `MCCO`, `SDCO`…) | Définir **Dd Prefix** `2` sur le connecteur : une seule règle `CO` les atteint toutes. |

La référence complète se trouve sur [Rôles et permissions → Périmètre de données](../build/secure/roles-and-permissions.md#data-scope).

---

## Recette 2 — chacun voit ses propres lignes \{#by-owner\}

Quand les lignes appartiennent à une personne plutôt qu'à une organisation, enregistrer le propriétaire dans la table et filtrer dessus dans la requête. Le jeton `{{USER}}` est remplacé sur le serveur par le nom de l'utilisateur connecté, **en majuscules**, sous forme de valeur liée — le navigateur ne peut pas le modifier.

```sql title="customers_get"
SELECT id, name, status, owner
FROM   customers
WHERE  owner = {{USER}}
```

```sql title="customers_post"
INSERT INTO customers (name, status, owner)
VALUES (:NAME, :STATUS, {{USER}})
```

```sql title="customers_put"
UPDATE customers
SET    name = :NAME, status = :STATUS
WHERE  id = :ID AND owner = {{USER}}
```

Le `AND owner = {{USER}}` des requêtes de modification et de suppression compte : sans lui, un utilisateur qui connaît l'identifiant d'une autre ligne pourrait la modifier par l'API.

`{{LOGIN}}` donne la même valeur. Autres jetons : `{{SYSDATE}}`, `{{SYSTIME}}`, `{{SYSTIMESTAMP}}` / `{{NOW}}`, et pour les colonnes d'audit JD Edwards `{{JDEDATE}}`, `{{JDETIME}}`, `{{PID}}`, `{{JOBN}}`.

Enregistrer les noms d'utilisateur en majuscules (ou comparer avec `UPPER(owner) = {{USER}}`), puisque le jeton est toujours en majuscules.

---

## Laquelle choisir ? \{#choose\}

| | Périmètre de données | `{{USER}}` dans la requête |
|---|---|---|
| Filtre sur | Tout élément du dictionnaire ou toute colonne, valeurs par rôle ou par utilisateur | La colonne du propriétaire |
| Requêtes à modifier | Aucune | Chacune |
| Couvre | Toutes les requêtes SQL, exports, tableaux de bord, rapports, assistant, écritures | Les requêtes qui portent la condition |
| Les responsables voient plus | Leur donner un rôle sans la règle | Demande une seconde requête ou une condition sur le rôle |

Les deux se combinent : les commerciaux d'une filiale voient leurs propres clients, dans leurs sociétés.
