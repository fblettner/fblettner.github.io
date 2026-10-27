---
title: app.toml
description: "Référence d'app.toml, les réglages de l'application Liberty Next — [app], [auth], [oidc], [crypto], [license], [ai], [notify], [jobs], [changesets], [reports] et les chemins de fichiers — avec les valeurs par défaut et ceux que Paramètres → App modifie."
keywords: [Liberty Next, app.toml, réglages, auth, oidc, crypto, licence, ai, notify, jobs, changesets, rapports, valeurs par défaut, variables d'environnement]
---

# app.toml

`app.toml` contient les réglages de l'application. La plupart se modifient dans **Paramètres → App** ([Paramètres de l'application](../build/settings-app.md)), qui chiffre les secrets et applique les changements aussitôt ; cette page liste chaque clé, pour lire le fichier ou le préparer au déploiement.

Le fichier est `config/app.toml` sous le répertoire de travail du serveur (ou le chemin de `LIBERTY_APP_CONFIG`). Toute valeur peut s'écrire `${VARIABLE}` ou `${VARIABLE:-défaut}` pour la lire dans l'environnement, et les secrets enregistrés depuis les Paramètres s'écrivent `ENC:…` — voir [Variables d'environnement](./environment-variables.md) et [Chiffrement](./encryption-secrets.md).

---

## [app] \{#app\}

| Clé | Défaut | Signification |
|---|---|---|
| `name` | `Liberty Next` | Le nom de l'application. |
| `host`, `port` | `0.0.0.0`, `8000` | Adresse d'écoute. Redémarrage nécessaire. |
| `log_level` | `info` | `debug`, `info`, `warning`, `error`, `critical`. Redémarrage nécessaire. |
| `log_format` | `text` | `json` écrit un objet JSON par ligne. Fichier uniquement. |
| `hot_reload` | `false` (`true` dans le fichier livré) | Appliquer les fichiers de configuration dès qu'ils changent. |
| `default_language` | `en` | Langue des libellés quand une requête n'en indique pas. |
| `oracle_thick` | `false` | Mode thick d'Oracle pour tous les pools Oracle — voir [Connecteurs](../connectors.md#oracle-thick). Redémarrage nécessaire. |
| `default_period` | `thisMonth` | La période d'ouverture d'un tableau de bord qui n'en indique pas. |
| `default_page_size` | `50` | La taille de page initiale des grilles. |
| `dashboard_cache_seconds` | `60` | Durée de réutilisation des résultats des widgets à la réouverture d'un tableau de bord ; `0` le désactive. |

---

## [auth] \{#auth\}

| Clé | Défaut | Signification |
|---|---|---|
| `backend` | `toml` | `toml` : utilisateurs et rôles dans `toml_path` (`config/auth.toml`). `db` : dans les tables `ly2_users`, `ly2_roles`, `ly2_user_roles` de `pool`. |
| `jwt_secret` | `${LIBERTY_JWT_SECRET}` | Signe les sessions. Vide : une clé temporaire, perdue au redémarrage. |
| `access_token_ttl`, `refresh_token_ttl` | `3600`, `1209600` | Durées de vie des jetons en secondes (1 heure, 14 jours). |
| `refresh_reuse_grace` | `60` | Secondes pendant lesquelles un jeton de rafraîchissement déjà utilisé reste accepté. |
| `login_max_failures`, `login_window_seconds` | `10`, `300` | Limitation des connexions ; `0` la désactive. |

Voir [Se connecter](../build/secure/sign-in.md).

---

## [oidc] \{#oidc\}

`enabled`, `discovery_url`, `client_id`, `client_secret`, `scopes` (`openid email profile`), `username_claim` (`preferred_username`), `email_claim`, `name_claim`, `attribute_claims`, `redirect_url`, `frontend_redirect`, `session_secret` (le secret JWT par défaut). Voir [Se connecter → OIDC](../build/secure/sign-in.md#oidc).

---

## [crypto] et [license] \{#crypto\}

| Clé | Défaut | Signification |
|---|---|---|
| `[crypto] master_key` | `${LIBERTY_MASTER_KEY}` | Chiffre et déchiffre chaque valeur `ENC:`. |
| `[license] key` | `${LIBERTY_LICENSE_KEY}` | La clé de licence, en principe collée dans Paramètres → App. |

---

## [ai] \{#ai\}

| Clé | Défaut | Signification |
|---|---|---|
| `enabled` | `true` | L'assistant. |
| `api_key` | `${ANTHROPIC_API_KEY}` | Vide : l'assistant indique qu'il n'est pas configuré. |
| `model`, `max_tokens` | — , `8192` | Le modèle et la longueur des réponses. |
| `max_iterations` | `8` | Nombre maximal d'appels d'outils par réponse. |
| `system_prompt`, `thinking`, `effort` | intégré, `false`, — | Consignes et options de raisonnement. |
| `request_timeout` | `120` | Secondes. |
| `connector_tools` | `true` | L'assistant peut lister les connecteurs et lancer leurs requêtes de lecture. |
| `api_tool` | `false` | L'assistant peut appeler des endpoints d'API. |
| `scaffold_tools` | `false` | L'assistant peut proposer de la configuration (requêtes, écrans). |
| `allowed_connectors` | `[]` (tous) | Les connecteurs utilisables par l'assistant. |
| `web_fetch_domains`, `web_fetch_max_uses` | `[]`, `5` | Les pages web que l'assistant peut lire. |

Voir [Assistant IA](../ai-assistant.md).

---

## [notify] \{#notify\}

`enabled` (`true`), `pool` (`default`), `config_path` (`notifications.toml`), `smtp_host`, `smtp_port` (`587`), `smtp_user`, `smtp_password`, `smtp_from`, `smtp_tls` (`true`, STARTTLS), `smtp_ssl` (`false`, TLS implicite), `smtp_timeout` (`20`), `retention_days` (`90`). Voir [Notifications](../../nomaflow/notifications.md).

---

## [jobs] \{#jobs\}

`enabled` (`true`), `pool` (`default`), `config_path`, `run_log_max_lines` (`5000`), `files_dir`, `max_upload_mb` (`200`). Voir [Nomaflow → Administration](../../nomaflow/administration.md#settings).

---

## [changesets] et [reports] \{#changesets\}

| Clé | Signification |
|---|---|
| `[changesets] enabled`, `pool` | Les paquets de modifications et le pool de leurs tables. |
| `[changesets] post_apply` | La bibliothèque des étapes de post-application (`id`, `type` = `call_plugin` / `call_api` / `run_query`, `connector`, `target`, `params`, `label`). Voir [Paquets de modifications](../../nomaflow/change-packages.md). |
| `[reports] …` | Le fichier des rapports personnalisés et l'habillage PDF (auteur, couleurs, textes de couverture, pied de page) — l'habillage se modifie dans Paramètres → App. |

---

## Chemins des fichiers \{#paths\}

`[connectors]`, `[menus]`, `[screens]`, `[charts]`, `[actions]`, `[dashboards]`, `[explorer]`, `[theme]` acceptent chacun un `config_path`. Les laisser vides : ils suivent `LIBERTY_APPS_DIR`, ou `config/` — voir [Architecture](../../installation/architecture.md#configuration).
