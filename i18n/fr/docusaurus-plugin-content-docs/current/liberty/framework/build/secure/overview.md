---
title: Sécurité — vue d'ensemble
description: "La sécurité d'une installation Liberty Next : qui peut se connecter (utilisateurs locaux, OpenID Connect, limitation des connexions), ce qu'ils peuvent ouvrir (rôles, autorisations et refus), quelles lignes ils voient (périmètre de données), comment les secrets sont stockés (valeurs ENC:), et la licence."
keywords: [Liberty Next, sécurité, authentification, autorisation, rôles, permissions, périmètre de données, OIDC, secrets chiffrés, licence, superutilisateur]
---

# Sécurité — vue d'ensemble

| Question | Réponse | Page |
|---|---|---|
| Qui peut se connecter ? | Les utilisateurs locaux (`auth.toml`, ou tables en base) et, au besoin, OpenID Connect. | [Se connecter](./sign-in.md), [Utilisateurs](./users.md) |
| Que peuvent-ils ouvrir ? | Des rôles faits d'autorisations et de refus, modifiés sur l'arborescence des menus de l'application. | [Rôles et permissions](./roles-and-permissions.md) |
| Quelles lignes voient-ils ? | Le périmètre de données d'un rôle — par société, région ou tout élément du dictionnaire, éventuellement à partir des attributs de l'utilisateur. | [Périmètre de données](./roles-and-permissions.md#data-scope) |
| Comment les secrets sont-ils stockés ? | En valeurs chiffrées `ENC:`, avec la clé maître de l'installation. | [Secrets chiffrés](./encrypted-secrets.md) |
| Quels produits sont activés ? | La clé de licence. | [Clé de licence](./license-key.md) |

---

## Identité \{#identity\}

| Stockage | Utilisateurs et rôles dans |
|---|---|
| `toml` (défaut) | `config/auth.toml` — aucune base n'est nécessaire pour se connecter. |
| `db` | Les tables `ly2_users`, `ly2_roles` et `ly2_user_roles` du pool du framework. |

Les deux se combinent avec **OpenID Connect** : les utilisateurs se connectent chez le fournisseur d'identité de l'entreprise et sont créés à leur première connexion, sans rôle ; un administrateur leur en attribue. Les attributs du périmètre de données peuvent venir des claims du fournisseur.

Les mots de passe locaux sont hachés (Argon2id). Après dix échecs de connexion en cinq minutes pour un utilisateur, la connexion est refusée pendant un moment (*429*).

---

## Autorisations \{#authorization\}

Une permission est une chaîne séparée par des deux-points — `sql:sales:orders_get`, `api:crm:get_customer`, `menu:sales:orders`, `dashboard:sales.overview`, `ai:chat` — et un rôle en est une liste, autorisations et refus (`!…`). L'éditeur de rôles les écrit à partir de l'arborescence des menus.

| Surface | Contrôle |
|---|---|
| Lancer la requête de lecture d'un écran, écrire une ligne | `sql:<connecteur>:<requête>` de cette requête, puis le périmètre de données. |
| Appeler un endpoint d'API | `api:<connecteur>:<endpoint>`. |
| Voir une entrée de menu | La permission de ce qu'ouvre l'entrée, ou une autorisation `menu:` explicite ; un refus `menu:` ou `dashboard:` la masque. |
| Utiliser l'assistant | `ai:chat` ; les requêtes de l'assistant sont filtrées par le périmètre de données. |
| Paramètres, Surveillance, Nomaflow, paquets de modifications | **Superutilisateur** uniquement. |

Un refus l'emporte sur une autorisation, sur l'ensemble des rôles d'un utilisateur ; les superutilisateurs passent tous les contrôles et tous les périmètres de données.

---

## Sessions \{#sessions\}

Une connexion donne un jeton d'accès (une heure) et un jeton de rafraîchissement (14 jours). Chaque renouvellement consomme le jeton de rafraîchissement, relit l'utilisateur et applique les changements de rôles, d'attributs ou une désactivation. Un changement de droits atteint donc un utilisateur connecté dans l'heure, ou aussitôt après une déconnexion et une reconnexion.

---

## Secrets \{#secrets\}

Les mots de passe des pools, les identifiants d'API, la clé de licence, la clé de l'IA, le secret OIDC et le mot de passe SMTP sont chiffrés à l'enregistrement depuis les Paramètres. La clé maître qui les chiffre vient de l'environnement et ne doit jamais changer sur une installation existante. Voir [Secrets chiffrés](./encrypted-secrets.md).

---

## Ce que le framework ne fournit pas \{#not-provided\}

| Besoin | Où le traiter |
|---|---|
| Authentification multifacteur, politique de mots de passe | Le fournisseur OpenID Connect. |
| Correspondance entre groupes du fournisseur et rôles | Non fournie : les rôles s'attribuent dans Liberty Next → Administrer → Accès. |
| Révoquer immédiatement une session | Désactiver l'utilisateur (effectif au prochain renouvellement, dans l'heure) ; changer le secret JWT déconnecte tout le monde. |
| Connexion LDAP | Par un fournisseur OpenID Connect placé devant l'annuaire. |
