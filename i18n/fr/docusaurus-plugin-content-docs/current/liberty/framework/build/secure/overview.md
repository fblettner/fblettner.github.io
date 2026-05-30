---
title: Sécurité — vue d'ensemble
description: "Qui peut se connecter (local ou OIDC), ce qu'ils peuvent faire (rôles + permissions avec grammaire allow/deny) et ce qui est chiffré au repos. Les deux couches du modèle de sécurité Liberty."
keywords: [Liberty Framework, sécurité, authentification, autorisation, rôles, permissions, OIDC, secrets chiffrés, licence]
---

# Sécurité — vue d'ensemble

Sécuriser une installation Liberty se décompose en deux couches :

| Couche | Ce qu'elle décide | Où la configurer |
|---|---|---|
| **Identité** | *Qui se connecte ?* | `app.toml` — choisir le backend (`toml` ou `db`), activer l'OIDC en option. |
| **Autorisation** | *Que peut-il faire une fois connecté ?* | La page Paramètres → Accès — créer des rôles, attribuer des permissions, attacher les rôles aux utilisateurs. |

Plus deux préoccupations transverses :

| Préoccupation | Ce qu'elle fait | Où |
|---|---|---|
| **Secrets chiffrés** | Les mots de passe des pools, le client secret OIDC et les jetons d'API sont enregistrés sous forme `ENC:<base64>` sur disque (AES-256-GCM). | L'interrupteur 🔒 sur le champ correspondant dans n'importe quelle page Paramètres. |
| **Clé de licence** | Conditionne les produits éditeur packagés — Nomasx-1, Nomajde, NomaUBL …. | `app.toml` `[license] key` ou la variable d'environnement `LIBERTY_LICENSE_KEY`. |

Cette page est la carte ; chaque tâche dispose de sa propre page.

---

## Identité — les deux backends

Liberty n'embarque pas sa propre base d'utilisateurs par défaut — il lit les utilisateurs dans un fichier TOML sauf si l'on opte pour le backend base de données.

| Backend | Quand |
|---|---|
| **`toml`** (par défaut) | Instance unique, petite équipe. Utilisateurs + rôles résident dans `config/auth.toml`. Les modifications sont atomiques ; aucune base requise. |
| **`db`** | Multi-instance / catalogue d'utilisateurs partagé. Tables `ly2_users` / `ly2_roles` / `ly2_user_roles` sur le pool du framework. |

L'un ou l'autre backend peut être **couplé à l'OIDC** — les utilisateurs se connectent via leur IdP d'entreprise (Keycloak, Azure AD, Auth0, Okta, Google …) et sont provisionnés automatiquement à la première connexion. Les utilisateurs OIDC doivent quand même se voir attribuer leurs rôles manuellement sur la page Accès ; **les groupes ne sont pas mappés automatiquement** (choix de conception délibéré, pas une fonctionnalité manquante).

Voir [Se connecter](./sign-in.md) pour la configuration complète de chacun des deux chemins.

---

## Autorisation — la grammaire des permissions

Chaque action passe par une **vérification de permission** avant d'être exécutée. Liberty utilise des chaînes de permissions segmentées par deux-points avec une sémantique **allow + deny** :

| Motif | Accorde |
|---|---|
| `sql:<connector>:<query>` | Exécuter cette requête SQL précise. |
| `sql:<connector>:*` | Exécuter toutes les requêtes sur ce connecteur. |
| `api:<connector>:<endpoint>` | Appeler ce endpoint API précis. |
| `menu:<app>:<id>` | Voir cet élément de menu (dossier ou feuille). |
| `dashboard:<id>` | Ouvrir ce tableau de bord. |
| `ai:chat` | Utiliser l'assistant IA. |
| `*` | Caractère générique — tout. La baseline du superutilisateur. |
| `!<motif>` | **Refus** explicite — l'emporte sur toute autorisation. |

Le préfixe de refus est la fonctionnalité clé qui rend la grammaire expressive : au lieu de lister chaque permission qu'un rôle doit avoir, on part d'une baseline `*` et l'on **soustrait** avec des règles `!<motif>`.

| Recette | Permissions |
|---|---|
| Superutilisateur complet. | `["*"]` |
| Tout sauf la suppression des clients. | `["*", "!sql:crm:customers_delete"]` |
| Tout sauf le menu Admin. | `["*", "!menu:crm:admin", "!menu:crm:admin:*"]` |
| Uniquement le menu Reports (et ses données). | `["menu:crm:reports", "menu:crm:reports:*"]` |
| Lecteur sur un connecteur. | `["sql:crm:*", "menu:crm:*"]` |

Ordre de résolution allow / deny :

1. **Contournement superutilisateur** — `is_superuser = true` passe outre toute vérification (règles de refus ignorées).
2. **Refus explicite** — si un `!<motif>` correspond, la requête est rejetée.
3. **Autorisation explicite** — si un motif non préfixé `!` correspond, la requête est autorisée.
4. **Refus par défaut** — sinon, rejet.

La référence complète et l'interface AccessBuilder pour composer les règles : [Rôles et permissions](./roles-and-permissions.md).

---

## Ce qu'une permission gouverne — par surface

| Surface | Permission(s) requise(s) |
|---|---|
| Se connecter | Une identité locale / OIDC valide + `is_active = true`. |
| Voir un élément de menu | `menu:<app>:<id>`. Les éléments invisibles pour l'utilisateur sont retirés de l'arbre rendu. |
| Ouvrir un écran | `sql:<connector>:<read_query>` — l'écran hérite de la permission de sa requête de lecture. |
| Modifier une ligne (dialogue ou grille) | `sql:<connector>:<update_query>` / `<insert_query>` / `<delete_query>`. |
| Ouvrir un tableau de bord | `dashboard:<id>`. Les requêtes des graphiques sous-jacents ont quand même besoin de leurs propres permissions `sql:`. |
| Exécuter un endpoint API | `api:<connector>:<endpoint>`. |
| Utiliser l'assistant IA | `ai:chat` + les permissions des requêtes sous-jacentes pour ce que l'assistant appelle. |
| Exécuter un job Nomaflow | La permission `job:<name>` du job (couverte dans [Nomaflow → Permissions](../../../nomaflow/administration.md#permissions)). |
| Modifier les Paramètres (Accès, Connecteurs, Écrans, Menus, Pools, Notifications) | `is_superuser = true`. Des permissions granulaires `settings:<section>` existent pour un contrôle plus fin. |

Le motif : **la plupart des vérifications se ramènent à `sql:` ou `api:`** parce que c'est là que le travail se fait réellement. Les autres motifs (`menu:`, `dashboard:`, `ai:`) sont des contrôles de visibilité / de surface superposés.

---

## JWT et rafraîchissement — quand les changements de permissions prennent effet

Liberty émet deux jetons à la connexion :

| Jeton | Durée de vie | Rôle |
|---|---|---|
| **Jeton d'accès** | ~1 heure (par défaut) | Envoyé à chaque appel API. Embarque un instantané des rôles + permissions de l'utilisateur. |
| **Jeton de rafraîchissement** | ~14 jours (par défaut) | Sert à émettre un nouveau jeton d'accès sans ressaisir le mot de passe. |

Conséquence : **les changements de permissions ne prennent effet qu'à la prochaine émission du jeton d'accès** — soit un rafraîchissement, soit une nouvelle connexion. Donc :

| Action | Quand l'utilisateur en voit l'effet |
|---|---|
| Ajout d'un rôle à un utilisateur. | À son prochain rafraîchissement (sous ~1 heure) ou déconnexion + reconnexion (immédiat). |
| Retrait d'un rôle. | Idem. |
| Désactivation d'un utilisateur (`is_active = false`). | À son prochain rafraîchissement — d'ici là, le jeton d'accès existant fonctionne encore. |

Pour les révocations vraiment urgentes, le motif opérationnel est : désactiver l'utilisateur **et** faire tourner le secret de signature JWT (force le rejet de tous les jetons existants). Le framework n'offre pas de révocation de jeton par utilisateur pour le moment.

---

## Secrets chiffrés — protection au repos

Tout champ secret du framework — mots de passe des pools, client secret OIDC, jetons des connecteurs API, identifiants des connecteurs personnalisés — est chiffré au repos avec la **clé maîtresse** du framework. L'interface affiche un interrupteur 🔒 sur chacun de ces champs ; la valeur arrive sur disque sous la forme `ENC:<base64>`.

Le chiffrement est AES-256-GCM avec dérivation de clé PBKDF2-HMAC-SHA512 ; la clé maîtresse provient de `[crypto] master_key` dans `app.toml` (ou de la variable d'environnement `LIBERTY_MASTER_KEY`). Sans la clé maîtresse, les valeurs chiffrées ne peuvent pas être déchiffrées — il faut la sauvegarder aux côtés de la configuration.

Couverture complète : [Secrets chiffrés](./encrypted-secrets.md).

---

## Licence — conditionnement des connecteurs sous licence

Certains produits éditeur packagés — Nomasx-1, Nomajde, NomaUBL et autres — ne se chargent que si le framework dispose d'une clé de licence valide.

La licence est un JWT RS256 signé par l'éditeur ; il se configure via `[license] key` dans `app.toml` ou via la variable d'environnement `LIBERTY_LICENSE_KEY`. Si la licence est absente ou expirée, les connecteurs sous licence ne se chargent pas — leurs routes renvoient 404 — mais le reste du framework continue de fonctionner.

Couverture complète : [Clé de licence](./license-key.md).

---

## Ce qui N'EST PAS dans le framework

Savoir ce qui manque évite les mauvaises hypothèses lors de la conception d'une politique de sécurité :

| Fonctionnalité | Statut |
|---|---|
| **Authentification multifacteur (MFA)** | Non implémentée. Pour la MFA, déléguer à un fournisseur OIDC qui l'impose. |
| **Expiration / rotation forcée du mot de passe** | Non implémentée. |
| **Verrouillage du compte après échecs de connexion** | Non implémenté. |
| **Limitation de débit sur `/auth/login`** | Non implémentée au niveau du framework — à gérer au reverse proxy (nginx / Traefik). |
| **Mappage automatique groupe OIDC → rôle Liberty** | Non implémenté. Les utilisateurs OIDC arrivent sans rôles ; un opérateur les attribue. |
| **Journal d'audit des changements de rôles / permissions** | Non implémenté au niveau du framework. Le mécanisme `audit_table` sur les écrans couvre les écritures de données, pas les changements d'authentification. |
| **Authentification LDAP** | Non implémentée — utiliser un pont OIDC devant LDAP (Keycloak le fait très bien). |
| **Authentification par clé d'API** (en complément du JWT) | Non implémentée. Uniquement des jetons JWT bearer. |
| **Révocation de JWT par utilisateur** | Non implémentée. Faire tourner le secret de signature JWT invalide **tous** les jetons. |

La plupart de ces points peuvent être traités par un fournisseur OIDC en amont (MFA, limitation de débit, verrouillage de compte, audit) — les pousser vers l'IdP plutôt que d'attendre que le framework s'en charge.

---

## Ce que l'on fait concrètement — carte rapide

| Objectif | Lire |
|---|---|
| Configurer la connexion des utilisateurs — local ou OIDC. | [Se connecter](./sign-in.md). |
| Créer des rôles et composer des permissions. | [Rôles et permissions](./roles-and-permissions.md). |
| Ajouter des utilisateurs locaux et attribuer des rôles. | [Utilisateurs](./users.md). |
| Chiffrer les champs secrets au repos. | [Secrets chiffrés](./encrypted-secrets.md). |
| Installer une clé de licence pour les connecteurs sous licence. | [Clé de licence](./license-key.md). |

---

## Suite

- [Se connecter](./sign-in.md) — backend local, OIDC, écran de connexion.
- [Concepts → Authentification](./sign-in.md) — référence détaillée.
