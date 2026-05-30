---
title: Référence API REST
description: "Tous les endpoints REST proposés par le framework — groupés par domaine : auth, connecteurs, écrans, tableaux de bord, menus, tâches, IA, configuration admin, sonde de santé. URL, méthode, permission requise, corps de requête et forme de réponse."
keywords: [Liberty Framework, REST API, /api, /admin, /auth, OpenAPI, endpoints, JWT, /health, /docs]
---

# Référence API REST

Chaque concept du framework — se connecter, lancer une requête, charger un écran, déclencher une tâche, dialoguer avec l'assistant — est accessible via la surface REST. Le frontend utilise les mêmes endpoints que les intégrations externes, et le document OpenAPI sur `/docs` (en direct, généré depuis les signatures de routes FastAPI) est parcourable comme référence développeur.

Cette page est une cartographie domaine par domaine des endpoints, avec la permission requise, la forme de la requête et la forme de la réponse pour chacun. La variante interactive se trouve sur `http://${HOST}:${PORT}/docs` — le Swagger UI embarqué par le framework est la référence pour les schémas requête / réponse.

---

## Conventions

- **Chemin de base** — le framework sert l'API à la **racine de l'origine liée** : `https://liberty.example.com/api/...` et `https://liberty.example.com/admin/...`.
- **Authentification** — chaque endpoint demande un token `Bearer` dans l'en-tête `Authorization`, sauf `POST /auth/login`, `POST /auth/refresh`, la paire OIDC et `GET /api/health`.
- **Type de contenu** — JSON en entrée / JSON en sortie, sauf mention contraire. Les erreurs portent un corps `{ "detail": "..." }` avec un statut non 2xx.
- **Langue** — `X-Liberty-Lang: fr` modifie les libellés de la réponse pour les endpoints qui en contiennent (écrans, dictionnaire, menus, erreurs).
- **Codes de permission** identiques à ceux documentés sous [Rôles et permissions](../framework/build/secure/roles-and-permissions.md). `*` est un caractère générique ; `sql:invoices:*` correspond à toute requête du connecteur `invoices`.

---

## Santé

| Méthode | Chemin | Permission | Réponse |
|---|---|---|---|
| `GET` | `/api/health` | aucune (public) | `{ "ok": true, "version": "0.42.0" }` |

Utile pour les sondes de vivacité. Ne touche pas la base de données.

---

## Auth

| Méthode | Chemin | Permission | Corps | Réponse |
|---|---|---|---|---|
| `POST` | `/auth/login` | public | `{ "username", "password" }` | `{ "access_token", "refresh_token", "token_type": "Bearer", "expires_in": 900 }` |
| `POST` | `/auth/refresh` | public (cookie / corps) | `{ "refresh_token" }` | Identique à `/auth/login`. |
| `POST` | `/auth/logout` | authentifié | — | `{ "ok": true }`. Invalide le refresh token. |
| `GET` | `/auth/me` | authentifié | — | `{ "username", "display_name", "roles", "permissions": [...] }`. |
| `GET` | `/auth/oidc/login` | public | — | 302 vers l'IdP. |
| `GET` | `/auth/oidc/callback` | public | query | 302 vers `/`. Pose la session locale. |

Voir [Authentification](../framework/build/secure/sign-in.md) pour le flux OIDC.

---

## Connecteurs et données

### Connecteurs SQL

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/api/connectors` | `connectors:read` | Liste tous les connecteurs avec type et statut. |
| `GET` | `/api/connectors/{name}` | `connectors:read` | Définition du connecteur et schéma découvert. |
| `POST` | `/api/sql/{pool}/_schema` | `connectors:read` | Introspecte le schéma d'un pool (liste des tables, liste des colonnes). |
| `GET` | `/api/sql/{connector}/{query}` | `sql:{connector}:{query}` | Exécute une requête en lecture. Les paramètres d'URL se lient aux paramètres du connecteur. |
| `POST` | `/api/sql/{connector}/{query}` | identique | Identique à GET mais avec un corps JSON pour des mappings complexes. |
| `POST` | `/api/sql/{connector}/{query}:write` | `sql:{connector}:{query}:write` | Exécute une requête en écriture. Le corps est le mapping des paramètres. |

### Connecteurs HTTP / API

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `POST` | `/api/http/{connector}/{endpoint}` | `api:{connector}:{endpoint}` | Appelle un endpoint nommé. Le corps porte le mapping des paramètres. |

### Export Excel

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `POST` | `/api/screens/{app}/{screen_id}/export` | `screen:{app}:{id}` | Exporte la vue courante de l'écran au format XLSX. Le corps accepte les filtres actifs. La réponse est `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`. |

---

## Écrans

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/api/screens` | `screens:read` | Liste tous les écrans de toutes les apps. |
| `GET` | `/api/screens/{app}` | `screens:read` | Écrans d'une app. |
| `GET` | `/api/screens/{app}/{screen_id}` | `screen:{app}:{id}` | Définition de l'écran, colonnes de la grille et champs de la boîte de dialogue. |
| `POST` | `/api/screens/{app}/{screen_id}/lock` | `screen:{app}:{id}` | Acquiert un verrou d'enregistrement — `{ "key": {...} }`. |
| `DELETE` | `/api/screens/{app}/{screen_id}/lock` | identique | Libère le verrou d'enregistrement. |

---

## Tableaux de bord et graphiques

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/api/dashboards` | `dashboards:read` | Liste tous les tableaux de bord. |
| `GET` | `/api/dashboards/{id}` | `dashboard:{id}` | Disposition du tableau de bord et références de graphique par panneau. |
| `GET` | `/api/charts` | `charts:read` | Liste tous les graphiques. |
| `GET` | `/api/charts/{id}` | `chart:{id}` | Définition du graphique et données liées (quand appelé avec `?include_data=true`). |
| `POST` | `/api/charts/{id}/data` | `chart:{id}` | Rafraîchit les données d'un graphique avec un mapping de paramètres. |

---

## Menus

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/api/menus` | authentifié | Tous les arbres de menus que l'appelant peut voir, élagués selon ses permissions. |
| `GET` | `/api/menus/{app}` | authentifié | L'arbre de menu d'une app. |

---

## Dictionnaire

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/api/dictionary` | authentifié | Toutes les colonnes, lookups et libellés, localisés selon `X-Liberty-Lang`. |
| `GET` | `/api/dictionary/lookups/{name}` | authentifié | L'ensemble de valeurs d'un lookup. |

---

## i18n

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/api/i18n/{lang}` | authentifié | Paquet de langue groupé pour `lang`. Inclut le commun et les surcharges par app. |
| `GET` | `/api/i18n/_revisions` | authentifié | La chaîne de révision de chaque paquet chargé. Le frontend l'utilise comme clé de cache. |

---

## Tâches (Nomaflow) \{#jobs\}

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/admin/jobs` | `jobs:read` | Catalogue des tâches et statut de la dernière exécution par tâche. |
| `GET` | `/admin/jobs/{name}` | `job:{name}` | Définition d'une tâche et 50 dernières exécutions. |
| `POST` | `/admin/jobs/{name}/run` | `job:{name}` | Déclenche une exécution manuelle. Le corps accepte des surcharges de `params`. Renvoie `{ "run_id" }`. |
| `GET` | `/admin/jobs/runs` | `jobs:read` | Liste les exécutions sur toutes les tâches — filtrable par `job`, `status`, `from`, `to`. |
| `GET` | `/admin/jobs/runs/{run_id}` | `job:{name}` | Détail complet de l'exécution avec étapes et les 1000 dernières lignes de log. |
| `POST` | `/admin/jobs/runs/{run_id}/abort` | `job:{name}` | Abandonne une exécution en cours. |
| `POST` | `/admin/jobs/runs/{run_id}/replay` | `job:{name}` | Rejoue avec les mêmes paramètres. |
| `GET` | `/admin/jobs/runs/{run_id}/logs` | `job:{name}` | Diffuse la fin du journal. `?follow=true` bascule sur Socket.IO. |
| `GET` | `/admin/jobs/cron-preview?expression=...` | `jobs:read` | Analyse une expression cron et retourne les 5 prochains déclenchements. |

---

## Assistant IA \{#ai\}

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/ai/tools` | `ai:chat` | La liste d'outils que l'appelant verrait dans la discussion — utile pour déboguer les permissions. |
| `POST` | `/ai/chat` | `ai:chat` | Envoie un tour. Diffuse en Server-Sent Events par défaut ; `?stream=false` renvoie une seule réponse JSON. |
| `GET` | `/ai/conversations` | `ai:chat` | Liste les conversations de l'appelant. |
| `GET` | `/ai/conversations/{id}` | `ai:chat` | Une conversation avec ses messages, appels d'outils et résultats. |
| `DELETE` | `/ai/conversations/{id}` | `ai:chat` | Supprime une conversation. |
| `POST` | `/ai/conversations/{id}/share` | `ai:share` | Produit un lien de partage en lecture seule. |

---

## Configuration admin (backend de l'interface Paramètres) \{#admin-config\}

Chaque TOML par section suit la même forme — `<section>` vaut l'une de : `pools`, `connectors`, `dictionary`, `menus`, `screens`, `dashboards`, `charts`, `jobs`.

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/admin/config/{section}/parsed` | `settings:{section}` | Le TOML analysé en JSON. |
| `PUT` | `/admin/config/{section}/parsed` | `settings:{section}` | Remplace le TOML analysé. Le serveur re-sérialise en préservant les commentaires. |
| `GET` | `/admin/config/{section}/raw` | `settings:raw` | Le texte TOML brut. |
| `POST` | `/admin/config/{section}/raw` | `settings:raw` | Remplace le texte TOML brut. |
| `POST` | `/admin/config/connectors/{name}/test-sql` | `settings:connectors` | Exécute une requête SQL — le corps contient `{ "query", "params" }`. |
| `POST` | `/admin/config/api/test` | `settings:connectors` | Appelle un endpoint HTTP. |
| `POST` | `/admin/config/rename` | `settings:write` | Renomme une entité dans tous les fichiers. Corps : `{ "scope", "from", "to" }`. |
| `POST` | `/admin/reload` | `settings:reload` | Recharge les registres en mémoire. `?scope=<section>` pour restreindre ; valeur par défaut `all`. |

---

## Licence

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/api/license` | `license:read` | La charge utile de la licence courante et son statut de vérification. |
| `POST` | `/admin/license/reload` | `license:write` | Relit `LIBERTY_LICENSE_KEY` et revérifie la signature sans redémarrage complet. |

---

## Utilisateurs et rôles

| Méthode | Chemin | Permission | Description |
|---|---|---|---|
| `GET` | `/admin/users` | `users:read` | Liste tous les utilisateurs. |
| `GET` | `/admin/users/{username}` | `users:read` | Un utilisateur avec ses rôles et ses permissions effectives. |
| `POST` | `/admin/users` | `users:write` | Crée un utilisateur. |
| `PUT` | `/admin/users/{username}` | `users:write` | Met à jour le nom affiché, les rôles, le drapeau actif. |
| `POST` | `/admin/users/{username}/password` | `users:write` | Définit un nouveau mot de passe. |
| `POST` | `/admin/users/{username}/revoke` | `users:write` | Révoque toutes les sessions actives. |
| `GET` | `/admin/roles` | `users:read` | Liste tous les rôles. |
| `POST` | `/admin/roles` | `users:write` | Crée un rôle. |
| `PUT` | `/admin/roles/{name}` | `users:write` | Met à jour les permissions / l'héritage / la description. |
| `DELETE` | `/admin/roles/{name}` | `users:write` | Supprime un rôle (refusé tant qu'il reste des membres). |

---

## Socket.IO

Le framework propose aussi un endpoint **Socket.IO** sur `/socket.io` pour les mises à jour en direct. Ce n'est pas un endpoint REST, mais il joue le même rôle :

| Événement | Sens | Rôle |
|---|---|---|
| `config.reloaded` | serveur → client | Diffusé après un rechargement à chaud — les clients rechargent le catalogue concerné. |
| `lock.acquired` / `lock.released` | serveur → client | Verrous d'enregistrement sur les écrans (visibles sur le tableau de bord Technique). |
| `job.run.transitioned` | serveur → client | Une exécution de tâche a changé de statut (`running` → `succeeded` / `failed` / `aborted`). |
| `job.run.log` | serveur → client | Une ligne de log issue d'une exécution en cours. Filtrée par `run_id`. |
| `pool.stats` | serveur → client | Instantané périodique du pool pour le tableau de bord Technique. |
| `ai.chat.delta` | serveur → client | Un bloc de tokens pendant un tour de discussion IA. |

L'authentification se fait avec le même token Bearer qu'en REST, passé dans la charge utile `auth` du handshake Socket.IO.

---

## OpenAPI

Le document OpenAPI complet est servi sur :

- **`/docs`** — Swagger UI interactif.
- **`/redoc`** — vue Redoc statique.
- **`/openapi.json`** — le JSON OpenAPI 3.1 brut, adapté à la génération de code.

Chaque endpoint y est documenté avec la forme exacte de requête / réponse générée à partir des modèles Pydantic de la route — cette page est la cartographie conceptuelle ; le document OpenAPI est le contrat précis.

---

## Conseils et bonnes pratiques

- **Utiliser `/openapi.json` pour générer des clients.** Des outils comme `openapi-typescript` ou `openapi-python-client` produisent un SDK typé en une commande.
- **Toujours passer `X-Liberty-Lang`** quand la réponse est affichée à un utilisateur. La valeur par défaut est `en` ; les libellés dans la langue cible demandent l'en-tête.
- **Préférer l'endpoint REST nommé au SQL brut**. `GET /api/sql/invoices/invoices-for-period` est auditable et contrôlé en permission ; construire du SQL côté client et le POSTer ne l'est pas (le framework le refuse de toute façon — il n'existe pas d'endpoint « exécuter du SQL arbitraire »).
- **Épingler l'en-tête `Authorization` sur chaque appel.** Le frontend a un repli sur cookie pour le refresh token, mais la surface API requiert l'en-tête explicite — plus simple à déboguer.
- **`POST /admin/reload`** depuis la CI après un déploiement de configuration. Un `git pull` sur `liberty-apps` ne touche pas le framework en cours d'exécution tant que le registre n'a pas été reconstruit.

---

## Pour aller plus loin

- L'API en direct sur `http://${HOST}:${PORT}/docs`.
- [Configuration → Interface Paramètres](../framework/configuration/settings-ui.md) — l'éditeur dans le navigateur qui consomme la famille `/admin/config/*`.
- [Authentification → Rôles et permissions](../framework/build/secure/roles-and-permissions.md) — les codes de permission vérifiés par chaque endpoint.
