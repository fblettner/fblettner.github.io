---
title: Référence de l'API REST
description: "La carte de l'API REST de Liberty Next par domaine — santé, connexion, connecteurs et données, écrans, tableaux de bord, menus, rapports, notifications, vues enregistrées, tâches Nomaflow, packages de modifications, accès et configuration — avec la règle d'accès de chaque famille. Les formes exactes des requêtes et réponses sont dans les pages OpenAPI intégrées."
keywords: [Liberty Next, API REST, OpenAPI, endpoints, auth, sql, écrans, tableaux de bord, tâches, changesets, accès, configuration, Socket.IO]
---

# Référence de l'API REST

Cette page présente les points d'accès par domaine. Les formes exactes des requêtes et des réponses se trouvent dans les pages OpenAPI du serveur : **`/docs`** (Swagger UI), **`/redoc`** et **`/openapi.json`** — ce dernier sert à générer des clients typés.

---

## Conventions \{#conventions\}

- **Authentification** — `Authorization: Bearer <jeton d'accès>` à chaque appel, sauf `/health`, `/ready`, `/info`, `/api/theme`, `POST /auth/login`, `POST /auth/refresh` et le couple OIDC.
- **Règles d'accès** — les points d'accès aux données vérifient la permission de ce qu'ils exécutent (`sql:<connecteur>:<requête>`, `api:<connecteur>:<endpoint>`), et les lectures et écritures SQL appliquent le [périmètre de données](../framework/build/secure/roles-and-permissions.md#data-scope) de l'appelant. Tout ce qui se trouve sous **`/admin/`** est réservé aux superutilisateurs.
- **Langue** — `X-Liberty-Lang: fr` (sinon `Accept-Language`) choisit la langue des libellés des écrans, du dictionnaire et des menus.
- **Pool** — `X-Liberty-Pool: <pool>` exécute les requêtes d'un connecteur multi-pools sur un autre pool de son ensemble.
- **Erreurs** — un corps JSON `{"detail": …}` avec un code non 2xx. Une erreur de base de données donne aux utilisateurs ordinaires le message du pilote et un `error_id` ; l'instruction elle-même ne leur est jamais renvoyée.
- **Identifiant de requête** — chaque réponse porte `X-Request-ID` ; les lignes du journal du serveur pour cette requête portent le même identifiant.

---

## Santé \{#health\}

| Méthode | Chemin | Description |
|---|---|---|
| `GET` | `/health` | Sonde de vie : `{"status": "ok", "version"}`. |
| `GET` | `/ready` | Disponibilité : `200` quand la base du framework répond, `503` sinon. |
| `GET` | `/info` | Version, compteurs et indicateurs ; noms et détails pour un appelant connecté. |

Voir [Points de santé](../monitoring/health-endpoints.md).

---

## Connexion et profil \{#auth\}

| Méthode | Chemin | Description |
|---|---|---|
| `POST` | `/auth/login` | `{username, password}` → jetons d'accès et de rafraîchissement. `429` après trop d'échecs. |
| `POST` | `/auth/refresh` | Un jeton de rafraîchissement → une nouvelle paire. Le jeton présenté est consommé : conserver le nouveau. |
| `GET` | `/auth/me` | L'identité du jeton : rôles, permissions, attributs, périmètre de données. |
| `GET` / `PATCH` | `/auth/profile` | Le profil de l'utilisateur connecté. |
| `POST` | `/auth/change-password` | Changer son propre mot de passe (utilisateurs locaux). |
| `GET` | `/auth/oidc/login`, `/auth/oidc/callback` | Connexion OpenID Connect. |

Voir [Se connecter](../framework/build/secure/sign-in.md).

---

## Connecteurs et données \{#data\}

| Méthode | Chemin | Description |
|---|---|---|
| `GET` | `/api/connectors`, `/api/connectors/{connector}` | Les connecteurs et leurs requêtes / endpoints. |
| `GET` | `/api/sql/{connector}/{query}` | Exécute une requête de lecture ; les paramètres de l'URL s'y lient, avec filtres, pagination et tri. |
| `POST` | `/api/sql/{connector}/{query}` | Exécute une requête d'écriture avec un corps JSON. |
| `GET` | `/api/sql/{connector}/_schemas`, `/_schema` | Schémas et tables de la base du connecteur. |
| `POST` | `/api/sql/{connector}/_import` | Importe des lignes (l'import Excel de la grille). |
| `POST` | `/api/http/{connector}/{endpoint}` | Appelle un endpoint d'un connecteur API. |
| `GET` | `/api/actions`, `/api/actions/{action_id}` | Les actions partagées. |
| `GET` / `POST` | `/api/plugins/callables`, `/api/plugins/run` | Les fonctions de plugin appelables depuis les écrans. |

---

## Écrans, tableaux de bord, menus \{#screens\}

| Méthode | Chemin | Description |
|---|---|---|
| `GET` | `/api/screens`, `/api/screens/{app}`, `/api/screens/{app}/{screen_id}` | Définitions des écrans, traduites. |
| `POST` | `/api/screens/{app}/{screen_id}/export` | Export Excel de la vue courante de l'écran. |
| `GET` | `/api/dashboards`, `/api/dashboards/{dashboard_id}` | Les tableaux de bord et leurs widgets. |
| `GET` | `/api/charts`, `/api/charts/{chart_id}` | Les graphiques enregistrés. |
| `GET` | `/api/menus`, `/api/menus/{app}` | Les arborescences de menus, réduites à ce que l'appelant peut ouvrir. |
| `GET` | `/api/theme` | Habillage et valeurs par défaut de l'interface (public). |
| `GET` / `PUT` / `DELETE` | `/api/views/{kind}` | Les vues de grille enregistrées. |

---

## Rapports, notifications, licence \{#other\}

| Méthode | Chemin | Description |
|---|---|---|
| `GET` | `/api/reports`, `/api/reports/{scope}/{report_id}` | Les rapports et leurs paramètres. |
| `POST` | `/api/reports/{scope}/{report_id}/run` | Exécute un rapport (PDF ou Markdown). |
| `GET` | `/api/notifications` (`?unread=1`), `/api/notifications/unread_count` | Les notifications de l'appelant. |
| `POST` | `/api/notifications/read` | Marque des notifications comme lues (`{ids}`, ou toutes). |
| `POST` | `/api/notify/fire` | Déclenche une règle de notification de type action (utilisé par l'action d'écran `send_notification`). |
| `GET` | `/api/license` | Mode de licence, client, offre, applications, expiration. |

---

## Assistant IA \{#ai\}

| Méthode | Chemin | Description |
|---|---|---|
| `GET` | `/ai/tools` | Le catalogue d'outils de l'assistant. |
| `POST` | `/ai/chat` | Envoie la conversation (`{messages, model?}`) ; la réponse revient en flux. Demande `ai:chat`. |

---

## Administration (superutilisateurs) \{#admin-config\}

| Famille | Chemins | Description |
|---|---|---|
| Accès | `/admin/access/users`, `/admin/access/users/{username}` (+ `/password`), `/admin/access/roles`, `/admin/access/roles/{name}` | Utilisateurs (création, modification, attributs, mot de passe) et rôles (permissions, périmètre de données). |
| Configuration | `/admin/config/{section}/parsed` (`GET` / `PUT`) pour `connectors`, `dictionary`, `menus`, `screens`, `charts`, `dashboards`, `actions`, `notifications`, `theme`, `jobs`, `app`, `reports`, `explorer` ; `/admin/config/pools` | Lire et enregistrer un fichier de configuration en JSON ; un enregistrement est validé, puis appliqué. |
| Outils de configuration | `/admin/config/connectors/{connector}/test-sql`, `/admin/config/api/test`, `/admin/config/rename`, `/admin/config/move`, `/admin/config/clone-app`, `/admin/config/delete-app`, `/admin/config/integrity`, `/admin/config/schema` | Tests, renommages et déplacements entre fichiers, contrôle d'intégrité, schémas JSON. |
| Historique | `/admin/config/versions…`, `/admin/config/screen-versions…`, `/admin/upgrades`, `/admin/upgrades/{id}/report`, `/admin/release-notes` | Versions de configuration, historique et rapports de mise à jour, notes de version. |
| Rechargement | `POST /admin/reload` | Relit tous les fichiers de configuration. |
| Packages | `/admin/find-dependencies`, `/admin/build-package`, `/admin/import-package`, `/admin/clone-with-deps`, `/admin/delete-with-deps` | Packages, clonage et suppression tenant compte des dépendances. |
| Packages de modifications | `/admin/changesets…` | Voir [Paquets de modifications](../nomaflow/change-packages.md#api-contract). |
| Notifications | `POST /admin/notify/test` | Envoie un test par les canaux. |

---

## Tâches Nomaflow (superutilisateurs) \{#jobs\}

| Méthode | Chemin | Description |
|---|---|---|
| `GET` | `/admin/jobs` | Les tâches avec leur état, prochaine et dernière exécution. |
| `POST` | `/admin/jobs/{job_id}/run` | Exécuter maintenant. Corps (facultatif) : `{params, op_kwargs, step_enabled, log_level}` → `{job_id, run_id, triggered_by, status: "queued"}`. |
| `POST` | `/admin/jobs/{job_id}/upload` | Envoie un fichier pour une étape `file_load` (multipart `file`). |
| `GET` | `/admin/jobs/runs/{run_id}` | Détail d'une exécution : étapes, journal, valeurs particulières. |
| `POST` | `/admin/jobs/runs/{run_id}/cancel` | Annule une exécution en cours. |
| `GET` | `/admin/jobs/runs/{run_id}/files/{name}` | Télécharge un fichier de l'exécution (lignes rejetées). |
| `GET` | `/admin/jobs/cron-preview?schedule=…&timezone=…&count=5` | Les prochaines exécutions d'un cron. |
| `GET` | `/admin/jobs/callables` | Les fonctions Python disponibles pour les étapes `python`. |
| `GET` / `POST` | `/admin/jobs/retention`, `/admin/jobs/retention/sweep` | État de la rétention ; nettoyage immédiat. |
| `GET` / `POST` | `/admin/jobs/missed`, `/admin/jobs/missed/check` | État des planifications manquées ; contrôle immédiat. |

Les tâches elles-mêmes se modifient par `/admin/config/jobs/parsed`.

---

## Socket.IO \{#socketio\}

`/socket.io` transporte les mises à jour en direct, authentifiées avec le même jeton lors de la poignée de main : changements d'état des exécutions et étapes Nomaflow (`job_run.state`, `step_run.state`), nouvelles notifications pour la cloche, verrous d'enregistrement, et instantanés et journal de la page Surveillance.
