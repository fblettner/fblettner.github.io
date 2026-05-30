---
title: Référence des commandes CLI
description: "Toutes les commandes CLI de Liberty — liberty-admin (utilisateurs, rôles, jobs, reload), liberty-connectors (tester les connecteurs sans la couche web), liberty-crypto (chiffrer / déchiffrer / générer une clé maître), liberty-license (vérifier / inspecter un JWT de licence). Tous les drapeaux, toutes les sorties."
keywords: [Liberty Framework, CLI, liberty-admin, liberty-connectors, liberty-crypto, liberty-license, utilisateurs, rôles, reload, chiffrement, vérification de licence]
---

# Référence des commandes CLI

Le framework livre **quatre CLI** comme points d'entrée d'un même paquet Python. Ils sont installés dans le virtualenv aux côtés du serveur, donc accessibles via `.venv/bin/<cli>` :

| CLI | Rôle |
|---|---|
| [`liberty-admin`](#liberty-admin) | Gestion des utilisateurs, rôles et tâches, rechargement à chaud, initialisation du schéma. |
| [`liberty-connectors`](#liberty-connectors) | Inspecter et tester les connecteurs sans démarrer la couche web. |
| [`liberty-crypto`](#liberty-crypto) | Chiffrer, déchiffrer, générer des clés maîtres. |
| [`liberty-license`](#liberty-license) | Vérifier et inspecter un JWT de licence. |

Chaque CLI lit `[default_pool]` dans `app.toml` ainsi que les mêmes variables d'environnement que le serveur. À exécuter depuis le dossier `liberty-next` (ou bien définir `LIBERTY_APPS_DIR` pour qu'ils trouvent la configuration).

---

## `liberty-admin`

### `init-db`

Initialise le backend d'authentification (crée `auth.toml` pour `backend = "toml"`, ou les tables `ly2_*` pour `backend = "db"`).

```bash
.venv/bin/liberty-admin init-db
```

Relançable sans risque. Les utilisateurs et les tables existants sont conservés ; seul ce qui manque est créé.

### `verify-config`

Valide tous les fichiers TOML sous `liberty-apps/config/` au regard des modèles Pydantic. Rapporte les erreurs d'analyse, les erreurs de validation et les erreurs de référence croisée (un écran pointant vers un connecteur absent, un menu pointant vers un écran absent).

```bash
.venv/bin/liberty-admin verify-config
```

Sort avec un code non nul à la première erreur, utile en CI avant un déploiement.

### `reload`

Recharge à chaud les registres TOML par section sans redémarrer le serveur.

```bash
.venv/bin/liberty-admin reload                  # toutes les sections
.venv/bin/liberty-admin reload --scope connectors
```

Appelle `POST /admin/reload` sur `http://${HOST}:${PORT}` — le serveur doit être en cours d'exécution.

### Utilisateurs

```bash
.venv/bin/liberty-admin create-user alice --display-name "Alice Dupont" --role viewer --role editor
.venv/bin/liberty-admin set-password alice                    # demande deux fois
.venv/bin/liberty-admin set-active alice --inactive           # suppression logique
.venv/bin/liberty-admin set-active alice                      # réactiver
.venv/bin/liberty-admin list-users [--inactive]
.venv/bin/liberty-admin show alice                            # rôles + permissions effectives
.venv/bin/liberty-admin role-add alice manager
.venv/bin/liberty-admin role-remove alice viewer
.venv/bin/liberty-admin revoke alice                          # invalide toute session active
```

### Rôles

```bash
.venv/bin/liberty-admin list-roles
.venv/bin/liberty-admin show-role editor                      # permissions + membres
.venv/bin/liberty-admin create-role manager --inherits editor --description "..."
.venv/bin/liberty-admin grant manager sql:billing:*
.venv/bin/liberty-admin revoke-perm manager sql:billing:dangerous-query
.venv/bin/liberty-admin delete-role manager                   # refusé tant qu'il reste des membres
```

### Tâches

```bash
.venv/bin/liberty-admin job list                              # toutes les tâches + dernier statut
.venv/bin/liberty-admin job run invoices-nightly-rebuild      # exécution ponctuelle, déclenchée système
.venv/bin/liberty-admin job run <name> --param period=2026-05 --param dry_run=true
.venv/bin/liberty-admin job logs --follow <run-id>            # diffuse le journal d'exécution
.venv/bin/liberty-admin job abort <run-id>
.venv/bin/liberty-admin job history <name> [--limit 20]
```

### i18n

```bash
.venv/bin/liberty-admin i18n-diff fr                          # clés présentes dans en/ et absentes de fr/
.venv/bin/liberty-admin i18n-export                           # exporte tous les paquets de langue sur la sortie standard
```

### Drapeaux globaux

| Drapeau | Effet |
|---|---|
| `--config <path>` | Surcharge l'emplacement de `app.toml`. |
| `--quiet` / `-q` | Supprime les journaux d'information ; ne garde que les avertissements et les erreurs. |
| `--json` | Formate la sortie en JSON plutôt qu'en texte lisible. |
| `--server <url>` | Surcharge `http://${HOST}:${PORT}` pour `reload` / `job run`. |

---

## `liberty-connectors`

Opère sur le catalogue de connecteurs sans la couche web — utile en script, en vérification CI et pour une inspection locale rapide.

### `list`

```bash
.venv/bin/liberty-connectors list
# default     sql    pool=default     connected
# invoices    sql    pool=default     connected
# crm         sql    pool=crm         connected
# jdedwards   sql    pool=jde         offline
# slack       http   base=https://hooks.slack.com
```

### `describe`

```bash
.venv/bin/liberty-connectors describe invoices
# invoices — sql — pool: default
# queries:
#   - monthly-invoice-counts   (read)   params: month
#   - invoices-for-period      (read)   params: from_date, to_date, status
#   - refresh-totals:write     (write)  params: period
# Permission codes:
#   - sql:invoices:monthly-invoice-counts
#   - sql:invoices:invoices-for-period
#   - sql:invoices:refresh-totals:write
```

### `run`

Exécute une requête directement sur le pool. Contourne l'authentification — réservé aux diagnostics locaux, pas aux exécutions de production.

```bash
.venv/bin/liberty-connectors run invoices invoices-for-period \
  --param from_date=2026-04-01 --param to_date=2026-04-30 \
  --param status=issued \
  --limit 50
```

Sortie sous forme de tableau par défaut ; ajouter `--json` pour des lignes lisibles par machine.

### `test`

Résout tous les connecteurs au chargement et rapporte les échecs — test de fumée rapide en CI :

```bash
.venv/bin/liberty-connectors test
# 4 / 5 connectors loaded
# jdedwards: pool 'jde' unreachable — Connection refused
```

Sort avec un code non nul dès qu'un connecteur échoue.

### `schema`

Découvre et affiche les colonnes renvoyées par une requête :

```bash
.venv/bin/liberty-connectors schema invoices invoices-for-period
# id            INTEGER  NOT NULL
# number        VARCHAR(64)
# issue_date    DATE
# customer_id   INTEGER
# amount_excl   DECIMAL(12,2)
# amount_incl   DECIMAL(12,2)
# currency      VARCHAR(3)
# status        VARCHAR(32)
```

---

## `liberty-crypto`

Gère la clé maître et le format de blob `ENC:`.

### `genkey`

```bash
.venv/bin/liberty-crypto genkey
# 7c4f1c2d8e3a6b9f0c1d4e5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c
```

Produit une clé AES-256 de 32 octets encodée en hexadécimal. À exporter sous `LIBERTY_MASTER_KEY`.

### `encrypt` / `decrypt`

```bash
.venv/bin/liberty-crypto encrypt 's3cret!'
# ENC:gAAAAABh1234kQ5e7…RrU=

.venv/bin/liberty-crypto decrypt 'ENC:gAAAAABh1234kQ5e7…RrU='
# s3cret!
```

Lit `LIBERTY_MASTER_KEY` dans l'environnement. La fonction de chiffrement génère un nonce neuf à chaque appel : le chiffré diffère donc à chaque exécution, même pour le même texte en clair.

### `rewrap`

Rechiffre toutes les valeurs `ENC:` d'un ensemble de fichiers avec la clé maître courante. Utilisé pendant la rotation — voir [Chiffrement et secrets → rotation de clé](../framework/configuration/encryption-secrets.md#key-rotation).

```bash
.venv/bin/liberty-crypto rewrap --files config/connectors.toml,config/app.toml
# 4 ENC: values re-encrypted with the current master key
```

Relançable sans risque. Les fichiers sont réécrits sur place ; il faut commiter le diff.

### `fingerprint`

Affiche l'empreinte SHA-256 de la clé maître courante — utile pour vérifier que deux installations partagent la même clé sans révéler la clé elle-même.

```bash
.venv/bin/liberty-crypto fingerprint
# 7c4f1c2d… (sha256)
```

---

## `liberty-license`

### `verify`

```bash
.venv/bin/liberty-license verify "$LIBERTY_LICENSE_KEY"
# license accepted
# customer="Acme Corp" edition="enterprise"
# expires=2026-05-19T00:00:00Z (in 30 days)
# features.connectors: [jdedwards, sap, snowflake]
# features.apps:       [nomajde, nomasx-1]
```

Sort avec le code zéro pour les clés valides, non nul avec le diagnostic pour les clés erronées / expirées / d'audience incorrecte.

| Drapeau | Effet |
|---|---|
| `--public-key <path>` | Surcharge la clé publique par défaut. Utilisée par les partenaires OEM qui signent avec leur propre paire de clés. |
| `--quiet` | N'affiche que `valid` ou l'erreur ; supprime le détail lisible. |
| `--json` | Affiche la charge utile du JWT en JSON. |

### `decode`

Affiche la charge utile du JWT sans vérifier la signature. À utiliser uniquement pour inspection — jamais comme contrôle d'autorisation.

```bash
.venv/bin/liberty-license decode "$LIBERTY_LICENSE_KEY"
# { "iss": "nomana-it", "sub": "customer-acme-corp", ... }
```

---

## Codes de sortie

Toutes les CLI suivent la même convention :

| Code | Signification |
|---|---|
| `0` | Succès. |
| `1` | Entrée invalide (mauvais arguments, option requise manquante). |
| `2` | Ressource introuvable (utilisateur, connecteur, rôle inconnu, etc.). |
| `3` | Échec de validation (TOML qui ne s'analyse pas, signature de licence invalide, etc.). |
| `4` | Serveur injoignable (pour les commandes qui appellent le framework en cours d'exécution). |
| `5` | Permission refusée (lors d'une exécution contre un serveur distant). |

---

## Conseils et bonnes pratiques

- **Exécuter les CLI en CI.** `verify-config`, `connectors test` et `license verify` sont des vérifications rapides qui méritent de bloquer un déploiement.
- **Ne pas contourner le serveur pour les écritures.** `liberty-connectors run` convient au diagnostic ; les écritures en production doivent passer par l'API REST pour respecter l'authentification et l'audit.
- **Utiliser `--json` pour les scripts.** Chaque sortie lisible se sérialise aussi en JSON — à passer dans `jq` pour l'orchestration.
- **Définir `LIBERTY_APPS_DIR` dans le profil shell.** Les CLI en ont besoin de la même manière que le serveur ; l'exporter une fois évite de répéter `--config` partout.
- **Garder les CLI disponibles en production.** Un conteneur durci qui les retire complique la réponse à incident plus qu'il n'apporte d'avantage en sécurité.

---

## Pour aller plus loin

- [Configuration → Interface Paramètres](../framework/configuration/settings-ui.md) — l'équivalent in-app de la plupart des opérations CLI.
- [Référence API REST](./rest-api.md) — chaque endpoint appelé par les CLI.
- [Chiffrement et secrets](../framework/configuration/encryption-secrets.md) — les flux de travail `liberty-crypto`.
