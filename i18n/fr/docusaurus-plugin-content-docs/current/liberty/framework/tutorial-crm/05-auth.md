---
title: Étape 5 — Rôles et connexion
description: "Décider qui voit quoi dans le CRM : un rôle de consultation et un rôle commercial construits sur l'arborescence du menu de l'application, les écritures accordées hors menus, deux utilisateurs de test, un périmètre de données par pays issu d'un attribut utilisateur, et la connexion avec le fournisseur d'identité de l'entreprise."
keywords: [Liberty Next, tutoriel, CRM, rôles, permissions, arborescence de menu, hors menus, utilisateurs, périmètre de données, attributs, OIDC]
---

# Étape 5 — Rôles et connexion

Jusqu'ici, tout s'est fait en superutilisateur, qui voit tout. Cette étape ajoute deux rôles, deux utilisateurs pour les tester, un périmètre de données et la connexion avec le compte d'entreprise.

---

## Deux rôles

**Paramètres → Access → Roles** : créer chaque rôle. L'onglet **Access** présente l'arborescence du menu de chaque application, avec un contrôle à trois états sur chaque nœud (hériter, autoriser, refuser) ; autoriser une entrée de menu accorde aussi la requête ou le tableau de bord qu'elle ouvre. L'éditeur est en anglais. Voir [Rôles et permissions](../build/secure/roles-and-permissions.md).

### `crm-viewer` — consulte le CRM

| Réglage | Valeur |
|---|---|
| Base | **No access** |
| Menus | **Allow** sur le dossier *Ventes* de l'application `crm` et sur *Pipeline*. |

Les titulaires voient les écrans et le tableau de bord, mais toute écriture est refusée : les requêtes d'écriture (`customers_put`, `deals_post`…) ne sont pas accordées.

### `crm-sales` — travaille les affaires

| Réglage | Valeur |
|---|---|
| Base | **No access** |
| Menus | **Allow** sur *Ventes* et *Pipeline*. |
| Beyond the menus | **Allow** — Connector (all queries) — `crm`. |

La règle sur le connecteur accorde toutes les requêtes de `crm`, écritures comprises. **Save** pour chaque rôle.

---

## Deux utilisateurs

**Paramètres → Access → Users → ＋ Add user** :

| Utilisateur | Rôle | Attribut |
|---|---|---|
| `alice` | `crm-viewer` | — |
| `bob` | `crm-sales` | `country = FR` |

Donner un mot de passe à chacun. Connectée en `alice` dans une fenêtre de navigation privée : le CRM affiche *Ventes* et *Pipeline* ; la modification d'un client est refusée. Connecté en `bob` : les dialogues enregistrent. Voir [Utilisateurs](../build/secure/users.md).

---

## Un périmètre de données — le pays de chaque commercial

Bob ne doit voir que les clients de son pays.

1. Faire porter le pays par les affaires : dans `deals_get`, joindre le client et sélectionner son pays :

```sql
SELECT d.ID, d.CUSTOMER_ID, d.NAME, d.STAGE, d.AMOUNT, d.CLOSE_DATE, d.OWNER, c.COUNTRY
FROM deals d JOIN customers c ON c.ID = d.CUSTOMER_ID
```

2. Dans le rôle `crm-sales`, onglet **Data scope**, une règle : colonne `COUNTRY`, connecteur `crm`, **From the user's attribute** `country`. Enregistrer.

Bob se déconnecte puis se reconnecte : Clients et Affaires n'affichent plus que les clients français — ACME Industries et Beta SARL — et une écriture hors de son périmètre est refusée. Le périmètre est appliqué par le serveur, aux écrans, au tableau de bord comme à l'assistant IA. Le rôle d'Alice n'a pas de règle : elle voit toujours tout. Voir [Rôles et permissions → Périmètre de données](../build/secure/roles-and-permissions.md#data-scope).

---

## Se connecter avec le compte d'entreprise

Pour que les utilisateurs se connectent avec leur compte d'entreprise (Entra ID, Keycloak, Okta…), renseigner **Paramètres → App → OpenID Connect (SSO)** avec les valeurs de l'application déclarée chez le fournisseur. Un bouton **Se connecter avec OIDC** apparaît sur la page de connexion ; les nouveaux utilisateurs arrivent sans rôle, et un administrateur leur attribue `crm-viewer` ou `crm-sales`.

L'attribut `country` peut venir de l'annuaire grâce à `attribute_claims` — le périmètre de données suit alors l'annuaire. Recette complète : [Connexion OIDC](../cookbook/oidc-sso.md).

---

## Bilan

Deux rôles taillés dans le menu de l'application, des utilisateurs qui voient leur part, et des lignes filtrées par le serveur selon chaque utilisateur.

→ **[Étape 6 — IA et tâches](./06-ai-and-jobs.md)** : des questions en langage courant et une tâche quotidienne.
