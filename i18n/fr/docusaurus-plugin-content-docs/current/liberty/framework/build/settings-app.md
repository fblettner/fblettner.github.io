---
title: Paramètres de l'application
description: "Paramètres → App est l'éditeur maître de app.toml — quatre sections repliables (App, Licence, Assistant IA, OpenID Connect) couvrant l'hôte/le port, la clé de licence, la configuration de l'assistant IA et le SSO OIDC. Les champs sensibles (license.key, ai.api_key, oidc.client_secret) transitent masqués et sont chiffrés au repos avec la clé maître d'installation. La plupart des changements prennent effet à chaud — seuls host / port / log_level imposent un redémarrage du serveur."
keywords: [Liberty Framework, paramètres, app.toml, AppBuilder, clé de licence, clé API Anthropic, OIDC, SSO, secret masqué, ENC, AES-256-GCM, clé maître, hot reload, requires_restart, GET PUT /admin/config/app/parsed]
---

# Paramètres de l'application

L'écran **Paramètres → App** est l'éditeur maître de `config/app.toml`. Il met à disposition le sous-ensemble du fichier qu'un exploitant édite légitimement à l'exécution — valeurs par défaut de l'application, clé de licence, configuration de l'assistant IA et authentification unique OIDC — en laissant intactes sur disque les sections lues uniquement au démarrage (`[auth] backend`, chaînes de connexion `[pools.*]`, `[connectors] config_path`).

La page est aussi l'emplacement canonique pour stocker **trois secrets** qui transitaient auparavant via les variables d'environnement `${LIBERTY_LICENSE_KEY}`, `${ANTHROPIC_API_KEY}` et `${LIBERTY_OIDC_CLIENT_SECRET}` : la clé de licence, la clé API Anthropic et le secret client OIDC. Les enregistrer depuis l'interface **les chiffre au repos** avec la clé maître d'installation (`LIBERTY_MASTER_KEY`) ; la valeur sur disque porte le préfixe `ENC:`. Les références par variable d'environnement restent fonctionnelles (le framework les lit au démarrage si elles sont définies), mais l'éditeur d'interface est la voie recommandée — les secrets restent scellés à l'hôte.

---

## Vue d'ensemble

La page est une colonne unique défilable de **quatre sections repliables**. À la première ouverture, seule la section App est dépliée ; les autres mémorisent leur état via `localStorage`.

| Section | Ce qu'elle édite | À chaud ? |
|---|---|---|
| **App** | `name`, `host` de liaison, `port`, `log_level`, `hot_reload`, `default_language` | host / port / log_level imposent un redémarrage du serveur ; le reste s'applique à chaud. |
| **License** | `[license] key` — le JWT RS256 signé par l'éditeur qui déverrouille les connecteurs sous licence (Nomasx-1, Nomajde, NomaUBL…). | À chaud. Le registre des connecteurs est reconstruit à l'enregistrement ; les connecteurs sous licence préalablement filtrés réapparaissent immédiatement. |
| **AI Assistant** | `[ai]` — `enabled`, `model`, `api_key`, exposition des outils (`connector_tools` / `api_tool` / `scaffold_tools`), limites par appel (`max_tokens`, `max_iterations`, `request_timeout`), `system_prompt`, `effort`, `thinking`, connecteurs autorisés, liste blanche de domaines pour le web fetch côté serveur. | À chaud. L'assistant est reconstruit ; le prochain tour de conversation utilise la nouvelle configuration. |
| **OpenID Connect (SSO)** | `[oidc]` — `enabled`, `discovery_url`, `client_id`, `client_secret`, scopes, mappages de claims, surcharges optionnelles de redirection via proxy. | À chaud. Le gestionnaire OIDC est reconstruit ; les flux de connexion utilisent la nouvelle configuration dès la requête suivante. |

Un badge d'en-tête sur chaque section résume l'état courant en un coup d'œil : `:8000 · info` pour App, `configured` / `not set — restricted mode` pour License, `claude-opus-4-8 · no API key` pour AI, `https://keycloak.example/…` pour OIDC.

Le bouton d'enregistrement réécrit `config/app.toml` via `PUT /admin/config/app/parsed`. La barre d'outils affiche un bouton *Discard* tant que le formulaire est modifié.

---

## Secrets masqués — le motif révéler-pour-éditer \{#masked-secrets--the-reveal-to-edit-pattern\}

Trois champs sont sensibles — `license.key`, `ai.api_key`, `oidc.client_secret`. Ils suivent un motif révéler-pour-éditer afin que l'exploitant ne voie jamais le chiffré stocké et n'écrase jamais accidentellement une valeur configurée en modifiant d'autres champs.

| État | Interface |
|---|---|
| **Non configuré** | La ligne affiche `not configured` en italique + un bouton *Set*. |
| **Configuré** | La ligne affiche `••••••••••••` + un bouton *Replace*. |
| **En édition** | Le clic sur le bouton révèle un champ de saisie en clair pré-rempli vide (la valeur stockée ne quitte jamais le serveur). Saisir le nouveau secret. |

Tant que le champ est masqué, la charge utile envoyée contient `""`. Le backend interprète `""` comme **laisser inchangé** — la valeur chiffrée sur disque est préservée. Une fois que l'exploitant clique sur *Set* / *Replace*, le champ accepte une nouvelle saisie ; à l'enregistrement, le nouveau texte clair est chiffré avec la clé maître d'installation et remplace la valeur précédente.

Pour **effacer** un secret configuré, cliquer sur *Replace*, laisser le champ vide, enregistrer. La valeur sur disque devient `""` et le connecteur se déclare non configuré.

---

## Section 1 — App

Les paramètres de base de l'application — ce qui apparaît dans la barre de titre, l'interface sur laquelle le serveur se lie, le niveau de verbosité des journaux.

| Champ | Description |
|---|---|
| **App name** | Affiché dans l'en-tête du SPA et le titre OpenAPI. Texte libre. |
| **Bind host** | L'interface sur laquelle uvicorn se lie. `0.0.0.0` (valeur par défaut dans le conteneur) accepte toutes les interfaces ; `127.0.0.1` se limite à la boucle locale. |
| **Port** | Port d'écoute d'uvicorn. Défaut `8000`. La pile Docker complète ne le change pas — Traefik se place devant liberty-next sur `:80`/`:443`. |
| **Log level** | `error`, `warning`, `info`, `debug`, `trace`. Les choix proviennent du backend ; la liste déroulante est alimentée par `choices.log_levels` de `/admin/config/app/parsed`. |
| **Default language** | `en`, `fr`, … — repli quand une requête n'a pas d'`Accept-Language` ou que l'utilisateur n'a pas défini de préférence. Code à deux lettres. |
| **Hot-reload config TOML files on change** | Quand actif, le framework surveille `connectors.toml`, `dictionary.toml`, `menus.toml`, etc. et recharge à chaque modification. Utile en développement ; en production, le laisser inactif et utiliser *Settings → Reload* ou `POST /admin/reload` après des modifications intentionnelles. |

`host`, `port` et `log_level` sont lus **une seule fois au démarrage d'uvicorn** — enregistrer depuis l'interface met le fichier à jour, mais le processus en cours conserve ses anciennes valeurs jusqu'au redémarrage. La réponse PUT porte `requires_restart: true` pour ces changements ; l'interface affiche une bannière jaune : *Saved. Restart the server to apply the new settings.* Les autres champs App s'appliquent à chaud.

---

## Section 2 — License

Le JWT RS256 signé par l'éditeur qui déverrouille les connecteurs sous licence. Sans lui, le framework s'exécute en **mode restreint** — les connecteurs sous licence ne sont pas chargés ; le reste du framework fonctionne normalement.

| Champ | Description |
|---|---|
| **License key** | Le JWT complet (`eyJhbGciOiJSUzI1NiI…`). Stocké dans `[license] key` de `app.toml`, chiffré au repos. Le motif révéler-pour-éditer s'applique. |

À l'enregistrement, le framework :

1. Chiffre le texte clair avec la clé maître d'installation (AES-256-GCM, préfixe `ENC:`).
2. Réécrit uniquement la table `[license]` dans `app.toml` (les autres tables sont préservées via le round-trip `tomlkit`).
3. Recharge les paramètres ; vérifie la nouvelle licence avec la clé publique de l'éditeur fournie.
4. Reconstruit le registre des connecteurs. Les connecteurs sous licence filtrés au démarrage **réapparaissent immédiatement** ; ceux que la nouvelle clé ne couvre plus sont retirés.
5. Relie le backend d'authentification (quand `auth.backend = db`, le magasin d'authentification se trouve dans `connectors.pools`).

Pas de redémarrage, pas de rechargement complet, pas de rafraîchissement de menu — la requête suivante voit la nouvelle licence. Voir [Clé de licence](./secure/license-key.md) pour les règles de vérification, la gestion de l'expiration et la CLI `liberty-license verify`.

---

## Section 3 — Assistant IA

Toutes les manettes de l'assistant IA intégré — modèle, clé, exposition des outils, prompt, limites par appel, web fetch côté serveur.

### Identité et clé

| Champ | Description |
|---|---|
| **Enabled** | Bascule maître. Quand inactif, la route `/chat` répond 404 et la bulle IA disparaît du SPA. |
| **Anthropic API key** | `sk-ant-…`. Chiffré au repos. Le motif des secrets masqués s'applique. |
| **Model** | L'identifiant du modèle Anthropic. La liste déroulante propose Opus 4.8 (recommandé, en tête de liste), Opus 4.7 / 4.6, Sonnet 4.6 / 4.5, Haiku 4.5. Un identifiant personnalisé épinglé dans `app.toml` (par exemple une version expérimentale) est affiché en tête de liste avec un suffixe `(custom)` pour rester visible. |
| **Effort** | Effort de réflexion par appel — `(default)` / `low` / `medium` / `high`. Plus l'effort est élevé, plus l'assistant consomme de jetons de réflexion, avec des réponses plus lentes et plus coûteuses. |

### Limites par appel

| Champ | Défaut | Description |
|---|---|---|
| **Max tokens** | 8192 | Le budget de jetons par réponse de l'assistant. À augmenter pour des réponses longues ; à abaisser pour plafonner le coût. |
| **Max tool iterations** | 8 | Nombre de tours d'appel d'outils que l'assistant peut effectuer dans un seul tour utilisateur. À augmenter pour les requêtes multi-étapes ; à abaisser pour échouer rapidement. |
| **Request timeout (s)** | 120 | Délai d'attente du modèle avant d'abandonner le tour. |
| **Adaptive thinking** | inactif | Quand actif, l'assistant utilise l'extended thinking d'Anthropic — plus lent mais meilleur pour le raisonnement multi-étapes. À combiner avec un *Effort* non par défaut. |
| **System prompt** | (vide → défaut intégré) | Surcharge le prompt système fourni par le framework. Vide restaure le défaut. |

### Exposition des outils

L'assistant dispose de trois familles d'outils ; chacune s'active ou se désactive indépendamment :

| Famille d'outils | Ce qu'elle permet à l'assistant |
|---|---|
| **Connector tools** (`list_connectors`, `sql_query`, etc.) | Lecture seule — lister les pools, exécuter des SELECT sur les données que l'exploitant est autorisé à lire. Le socle de « interrogez Liberty sur vos données ». |
| **API tool** (`api_call`) | Appelle les endpoints REST définis sous `[connectors.<name>.endpoints]`. Les endpoints peuvent avoir des effets de bord — à activer uniquement quand les endpoints configurés sont sûrs pour une invocation par l'IA. |
| **Scaffold tools** | Génèrent des propositions (nouvelles requêtes / entrées de dictionnaire / écrans / éléments de menu) que l'exploitant revoit puis applique via *Apply* dans le chat. **Proposition uniquement** — l'assistant n'écrit jamais sur disque directement. |

### Connecteurs autorisés

Par défaut, l'assistant peut introspecter tous les connecteurs. Le sélecteur à puces **Allowed connectors** restreint l'ensemble visible — utile quand l'assistant ne doit voir que les pools côté client et pas la base d'audit propre au framework.

### Web fetch

Récupération web côté serveur hébergée par Anthropic — l'assistant peut ramener une URL dans la conversation, la résumer, la citer. **Désactivé tant qu'aucun domaine n'est autorisé** :

| Champ | Description |
|---|---|
| **Allowed domains** | Liste à puces — `example.com`, `docs.nomana-it.fr`. Les sous-domaines correspondent. Vide = web fetch désactivé. |
| **Max fetches per turn** | Défaut 5. Plafonne le nombre d'URL que l'assistant peut ramener dans un même tour — limite le coût et prévient les boucles incontrôlées. |

### Ce qui se passe à l'enregistrement

Le framework reconstruit l'assistant à neuf — nouveau modèle, nouveaux outils, nouvelle clé. L'instance précédente de l'assistant ferme proprement son client HTTP. Le tour de conversation suivant atterrit sur la nouvelle instance. **Aucun redémarrage nécessaire.**

---

## Section 4 — OpenID Connect (SSO) \{#section-4--openid-connect-sso\}

Brancher tout fournisseur compatible OIDC (Keycloak, Okta, Auth0, Microsoft Entra / Azure AD, Google Workspace …). Le framework exécute le flux standard authorization-code contre l'URL de discovery du fournisseur, et les JWT émis sont stockés dans l'enregistrement utilisateur Liberty.

| Champ | Description |
|---|---|
| **Enabled** | Bascule maître. Quand inactif, la page de connexion du SPA masque le bouton SSO ; le chemin utilisateur local continue de fonctionner. |
| **Discovery URL** | L'URL `.well-known/openid-configuration` du fournisseur. Liberty y récupère les endpoints authorization / token / jwks. |
| **Client ID** | L'identifiant client émis par le fournisseur pour cette installation Liberty. |
| **Client secret** | Le secret correspondant. Chiffré au repos (motif des secrets masqués). |
| **Scopes** | Séparés par des espaces. Défaut `openid email profile`. |
| **Username claim** | Le claim de l'ID-token qui devient le nom d'utilisateur Liberty. Défaut `preferred_username`. |
| **Email claim** | Défaut `email`. |
| **Name claim** | Défaut `name`. |
| **Redirect URL override** | Quand Liberty se trouve derrière un reverse proxy, l'URL de redirection auto-détectée peut être incorrecte (elle utilise l'hôte interne). À surcharger ici. |
| **Frontend redirect** | Pour les flux purement SPA où les JWT atterrissent dans le fragment de l'URL. Par défaut, la même origine. |

### Enregistrement côté fournisseur

Le fournisseur OIDC doit connaître l'URL de rappel de Liberty. À enregistrer :

```text
https://<your-liberty-host>/auth/oidc/callback
```

Associer le *Redirect URL override* de l'interface Liberty à l'URL enregistrée quand un reverse proxy se place devant (Traefik, nginx, etc.) — sinon, l'URL auto-détectée utiliserait le nom d'hôte interne.

### À chaud ou redémarrage

Le gestionnaire OIDC est reconstruit à l'enregistrement. La tentative de connexion suivante utilise la nouvelle configuration — **pas de redémarrage**.

Implication subtile : un exploitant peut activer/désactiver OIDC et faire tourner le secret client sans déconnecter les utilisateurs. Les sessions actives conservent leurs JWT (signés par `LIBERTY_JWT_SECRET`, indépendant d'OIDC) jusqu'à leur expiration.

Voir [Connexion](./secure/sign-in.md) pour la matrice backend complète (TOML local / DB) et le flux SSO.

---

## Ce qui ne figure PAS sur cette page

Toutes les clés de `app.toml` ne se trouvent pas dans l'éditeur Paramètres → App. Certaines sont intentionnellement hors périmètre :

| Section / clé | Pourquoi hors périmètre | Où l'éditer |
|---|---|---|
| `[auth] backend` | Le basculement de backend (TOML ↔ DB) impose une migration coordonnée du magasin d'utilisateurs — il n'est pas sûr de le basculer d'un simple enregistrement. | Éditer `app.toml` à la main + redémarrer. Voir [Connexion](./secure/sign-in.md). |
| `[crypto] master_key` | Le framework lit la clé maître une seule fois au démarrage. La faire tourner impose de rechiffrer toutes les valeurs `ENC:` sur disque — rituel réservé à l'exploitant. | Variable d'environnement `LIBERTY_MASTER_KEY` ou `[crypto] master_key` dans `app.toml`. Voir [Secrets chiffrés](./secure/encrypted-secrets.md). |
| Chaînes de connexion `[pools.*]` | Les modifications de connexion DB passent par *Paramètres → Connecteurs* (avec le chiffrement au repos). | Paramètres → Connecteurs. |
| `config_path` / `static_dir` / `dictionary_path` | Les exploitants ne déplacent pas les fichiers de configuration depuis l'interface — cela casserait le démarrage. | Éditer `app.toml` directement. |
| Champs `[license]` autres que `key` | Réservés pour extension future (surcharge d'émetteur, clé de vérification personnalisée). Hors périmètre aujourd'hui. | Éditer `app.toml` directement. |
| `LIBERTY_JWT_SECRET` | La clé de signature JWT — la faire tourner force chaque utilisateur à se reconnecter. Décision exploitant, pas interface. | Variable d'environnement uniquement. |

L'endpoint PUT **ne lit ni n'écrit jamais** ces éléments — les enregistrements sont chirurgicaux et ne touchent que les quatre tables éditées.

---

## Chiffrement au repos

Les trois champs sensibles atterrissent sur disque sous cette forme :

```toml title="config/app.toml après un enregistrement depuis l'interface"
[license]
key = "ENC:eYWBcD…7q=="

[ai]
api_key = "ENC:Mq6vNg…4r=="

[oidc]
client_secret = "ENC:Aa9KrH…2z=="
```

| Détail | Valeur |
|---|---|
| Algorithme | AES-256-GCM avec un nonce aléatoire par valeur. |
| Source de la clé | La clé maître d'installation (variable d'environnement `LIBERTY_MASTER_KEY` ou `[crypto] master_key` dans `app.toml`). |
| Préfixe | `ENC:` est la sentinelle du framework — le chemin de déchiffrement la reconnaît ; les valeurs en clair sont lues telles quelles. |
| Idempotent | Rechiffrer une valeur déjà chiffrée est sans effet ; enregistrer le formulaire quand rien n'a changé laisse le fichier identique octet pour octet. |

Le même mécanisme `ENC:` chiffre les mots de passe des pools, les secrets des connecteurs API et tout autre champ sensible déclaré — détaillé dans [Secrets chiffrés](./secure/encrypted-secrets.md).

### Repli sur variables d'environnement

Pour chacun des trois champs, le framework résout toujours une référence `${VAR}` au démarrage. Ainsi `license.key = "${LIBERTY_LICENSE_KEY}"` fonctionne exactement comme avant — la variable d'environnement l'emporte, l'interface affiche le champ comme « configuré » (puisque la valeur résolue est non vide) et le chemin *Edit* est désactivé (l'éditeur d'interface n'écrit jamais sur des valeurs résolues depuis l'environnement).

Deux implications pratiques :

1. Si votre `app.toml` porte `key = "${LIBERTY_LICENSE_KEY}"` issu d'une installation plus ancienne, la nouvelle interface est **en lecture seule** pour ce champ. Soit supprimer la référence (l'interface écrit alors la valeur), soit continuer à éditer via la variable d'environnement.
2. Les nouvelles installations via `install.sh` n'écrivent plus aucune de ces variables d'environnement dans `.env` — la voie canonique est l'éditeur d'interface.

---

## Contrat d'API

| Endpoint | Méthode | Description |
|---|---|---|
| `/admin/config/app/parsed` | `GET` | Retourne les quatre sections + les `choices` (niveaux de log, niveaux d'effort, connecteurs disponibles, liste des modèles). Les champs sensibles sont masqués : `key: ""` + `key_set: true`. Réservé au superutilisateur. |
| `/admin/config/app/parsed` | `PUT` | Valide contre les modèles Pydantic, chiffre les champs sensibles avec la clé maître, réécrit uniquement les tables modifiées dans `app.toml` (le round-trip tomlkit préserve les commentaires et les références `${VAR}` sur les clés non touchées). Retourne `{saved: true, path: "…", requires_restart: bool}`. Réservé au superutilisateur. |

Usage sans interface :

```bash title="Récupérer la configuration courante (champs sensibles masqués)"
curl -X GET -H "Authorization: Bearer <superuser-token>" \
     https://<liberty-host>/admin/config/app/parsed | jq
```

```bash title="Faire tourner la clé Anthropic sans toucher au reste"
curl -X PUT -H "Authorization: Bearer <superuser-token>" \
     -H "Content-Type: application/json" \
     -d '{"app": {...}, "ai": {..., "api_key": "sk-ant-new"}, "license": {"key": ""}, "oidc": {...}}' \
     https://<liberty-host>/admin/config/app/parsed
```

Envoyer `license.key: ""` (ou `oidc.client_secret: ""`, etc.) signifie **laisser inchangé**. Pour effacer explicitement un champ, l'interface envoie la chaîne vide avec `editing: true` — équivalent dans l'API à passer la chaîne vide après un GET préalable ; le backend ne peut pas distinguer « non touché » de « effacé explicitement » via l'API seule, c'est pourquoi l'interface suit un état `editingSecret` pour lever l'ambiguïté. Depuis un script, passer `null` pour effacer (le chemin de chiffrement du backend ignore aussi bien `""` que `null` selon la sémantique préserver-inchangé ; utiliser un `DELETE` dédié si une suppression via l'API est réellement nécessaire — non encore branché).

---

## Quand les changements ne prennent pas effet

L'endpoint PUT applique la plupart des changements à chaud, mais quelques cas atterrissent sur disque **et** demandent un coup de pouce manuel :

| Symptôme | Cause | Correctif |
|---|---|---|
| Nouvelle licence enregistrée — les connecteurs sous licence restent absents. | La licence est valide mais un pool de connecteur n'a pas pu (re)s'ouvrir. | Inspecter les journaux du framework — la ligne `connector registry rebuild` porte le résultat par connecteur. Corriger le pool (DB injoignable, identifiants erronés, etc.) puis enregistrer à nouveau. |
| Nouvelle Discovery URL OIDC — la connexion utilise toujours l'ancien fournisseur. | Le cache de discovery du fournisseur est obsolète (cache HTTP). | Le framework re-récupère le discovery à la reconstruction ; si l'erreur persiste, une attente de 5 min ou un redémarrage du serveur le purge. |
| Bascule de hot_reload activée — les modifications de TOML ne se rechargent toujours pas. | hot_reload est lu au démarrage. La surveillance de fichiers est mise en place une seule fois. | Redémarrer le serveur. Le PUT retourne `requires_restart: true` pour les changements sur `app.host`, `app.port` ou `app.log_level` ; hot_reload est une bascule de démarrage similaire. |
| L'assistant IA ignore le nouveau prompt système. | La session de chat en cours conserve un instantané de l'ancien prompt. | Démarrer un nouveau chat (ou rafraîchir le SPA). Les nouveaux tours utilisent le nouveau prompt. |
| L'enregistrement de la clé de licence retourne 500 avec `cannot encrypt`. | `LIBERTY_MASTER_KEY` n'est pas définie ou a changé depuis la dernière écriture du fichier. | Redéfinir la variable d'environnement ; si elle a été tournée, toutes les valeurs `ENC:` sur disque deviennent illisibles — restaurer depuis une sauvegarde ou ressaisir chaque secret. |

---

## Pièges courants

| Erreur | Symptôme | Correctif |
|---|---|---|
| Édition d'un champ masqué en y saisissant sans cliquer *Replace* d'abord. | L'enregistrement réussit mais la valeur stockée est inchangée. | Cliquer sur *Replace* (le champ est en lecture seule tant que ce n'est pas fait). |
| Licence vidée par mégarde vers « pas de licence » — confusion d'exploitant. | Les connecteurs sous licence disparaissent, les écrans répondent 404. | Ressaisir la clé. Les sessions utilisateur actives ne sont pas affectées. |
| Édition de `app.host` de `0.0.0.0` vers `127.0.0.1` dans une installation conteneurisée. | Après redémarrage, Liberty est injoignable depuis l'extérieur du conteneur. | L'hôte doit accepter les connexions externes à l'intérieur d'un conteneur — conserver `0.0.0.0`. |
| Collage d'un `client_secret` OIDC avec un saut de ligne en fin. | La connexion échoue avec `invalid_client`. | Rééditer, ressaisir sans l'espace blanc final. |
| `log_level` poussé à `trace` en production. | Le disque se remplit de journaux verbeux. | Remettre à `info`. Les entrées de niveau trace déjà sur disque y restent jusqu'à rotation. |
| Valeur éditée via une référence `${ENV_VAR}` puis réenregistrée depuis l'interface. | L'enregistrement via l'interface échoue avec `field is env-bound — edit the env var directly`. | Supprimer d'abord la référence dans `app.toml` si l'interface doit gérer la valeur ; sinon, éditer la variable d'environnement. |

---

## Pour aller plus loin

- [Clé de licence](./secure/license-key.md) — ce que la licence verrouille, comment fonctionne `liberty-license verify`, gestion de l'expiration.
- [Connexion](./secure/sign-in.md) — les deux backends d'identité et le flux OIDC en détail.
- [Secrets chiffrés](./secure/encrypted-secrets.md) — le mécanisme `ENC:`, la rotation de clé, ce qu'il faut sauvegarder.
- [Packages](./packages.md) — les exploitants ne propagent pas `app.toml` entre installations via l'écran des packages (il est propre à l'hôte) ; à utiliser pour les écrans / menus / tableaux de bord que l'éditeur lui-même utilise.
