---
title: Référence des commandes CLI
description: "Tous les outils en ligne de commande de Liberty Next : liberty-admin (initialisation de la base, utilisateurs, rôles, périmètre de données, tâches d'installation, migrations de schéma), liberty-ops et ./liberty (exploitation), liberty-connectors (lancer une requête sans l'application web), liberty-crypto (valeurs ENC:), liberty-license (vérifier la clé)."
keywords: [Liberty Next, CLI, liberty-admin, liberty-ops, liberty, liberty-connectors, liberty-crypto, liberty-license, init-db, create-user, set-scope, set-attributes, migrate, run-install-jobs]
---

# Référence des commandes CLI

L'essentiel de l'administration se fait dans **Paramètres**. Les outils en ligne de commande couvrent ce qui doit fonctionner sans l'application web : le premier démarrage, un mot de passe perdu, une configuration scriptée, l'exploitation.

| Outil | Rôle |
|---|---|
| `liberty-next` | Démarre le serveur. Adresse et port viennent de `[app]` dans `app.toml`. |
| [`liberty-admin`](#liberty-admin) | Initialisation de la base, utilisateurs, rôles et périmètre de données, tâches d'installation, migrations de schéma. |
| `./liberty` et `liberty-ops` | Exploitation d'une installation Docker ou Python — voir [Exploitation](../installation/operations.md). |
| [`liberty-connectors`](#liberty-connectors) | Liste les connecteurs et lance une requête ou un endpoint. |
| [`liberty-crypto`](#liberty-crypto) | Chiffre une valeur en chaîne `ENC:`. |
| [`liberty-license`](#liberty-license) | Vérifie une clé de licence. |

**Docker :** les lancer dans le conteneur, sous l'utilisateur `liberty` — `docker exec -u liberty liberty-next liberty-admin list-users`.
**Installation Python :** les lancer sous l'utilisateur du service avec son environnement chargé, pour qu'ils lisent la même configuration et la même clé maître que le serveur.

---

## liberty-admin \{#liberty-admin\}

Deux options valent pour toutes les commandes : `--config-app <app.toml>` et `--config-connectors <connectors.toml>`. Les commandes affichent du JSON.

### Initialisation

| Commande | Effet |
|---|---|
| `init-db [--admin-username admin] [--password P \| --password-env VAR]` | Crée le stockage des utilisateurs (le fichier `auth.toml` ou les tables en base) et les tables manquantes du framework, puis le premier superutilisateur. Sans mot de passe, un mot de passe aléatoire est généré et affiché. Relancée, la commande ne change rien. |
| `run-install-jobs [--force]` | Lance dans l'ordre chaque tâche Nomaflow des applications sous licence marquée comme étape d'installation (`deploy-databases`, `nomasx1-import-reference`). Les tâches déjà terminées sont ignorées, sauf avec `--force`. |

### Utilisateurs

| Commande | Effet |
|---|---|
| `create-user <nom> [--email E] [--full-name N] [--role R]… [--attribute CLÉ=VALEUR]… [--superuser] [--password P \| --password-env VAR]` | Crée un utilisateur local. Sans mot de passe, il en génère un et l'affiche. |
| `set-password <nom> [--password P \| --password-env VAR]` | Change un mot de passe ; sans valeur, en génère un et l'affiche. |
| `set-active <nom> --active \| --inactive` | Active ou désactive un utilisateur. |
| `set-attributes <nom> CLÉ=VALEUR… [--replace]` | Définit les attributs de périmètre de données de l'utilisateur. `company=00001,00050` donne une liste ; `company=` supprime la clé ; `--replace` retire les attributs non cités. |
| `list-users` | Liste les utilisateurs. |

### Rôles et périmètre de données

| Commande | Effet |
|---|---|
| `create-role <nom> [--permission P]… [--description D] [--scope RÈGLE]…` | Crée un rôle, ou le met à jour. |
| `set-scope <nom> --rule RÈGLE… \| --clear` | Remplace les règles de périmètre de données du rôle. |
| `list-roles` | Liste les rôles avec leurs permissions et leur périmètre de données. |

Une `RÈGLE` est une table TOML en ligne ou un objet JSON, avec les clés décrites dans [Rôles et permissions → Périmètre de données](../framework/build/secure/roles-and-permissions.md#data-scope) :

```bash
liberty-admin set-scope subsidiary --rule '{dd = "CO", source = "#USER.company#", mode = "deny"}'
liberty-admin set-scope controllers --rule '{dd = "SY", values = ["00"], exclude = true}'
liberty-admin set-attributes alice company=00001,00050
```

:::warning[Mettre à jour un rôle existant]
`create-role` sur un rôle existant remplace ses permissions par les valeurs `--permission` fournies — aucune valeur fournie signifie aucune permission conservée. Pour ne modifier que le périmètre d'un rôle, utiliser `set-scope`.
:::

### Migrations de schéma \{#migrate\}

```text
liberty-admin migrate [--app X]… [--dry-run] [--target-connector C] [--revision head]
                      [--plugins-dir D] [--stamp REV]
```

Applique les migrations de schéma en attente de chaque application sous licence (les modules `plugins/<application>/db`) et enregistre chaque exécution dans **Paramètres → History → Upgrades**.

| Option | Effet |
|---|---|
| `--dry-run` | Liste les migrations en attente. Code de sortie `2` s'il y en a, `0` si tout est à jour, `1` en cas d'erreur. |
| `--app nomasx1` | Cette application uniquement (répétable). |
| `--target-connector C` | Le connecteur de la base à migrer (par défaut : celui de l'application). |
| `--revision R` | S'arrêter à cette révision au lieu de la dernière. |
| `--plugins-dir D` | L'emplacement du code des applications (par défaut : `plugins/` à côté de `LIBERTY_APPS_DIR`). |
| `--stamp REV` | Réparation : enregistre `REV` comme révision courante de la base sans rien exécuter, puis applique ce qui reste. Demande `--app`. Pour une base dont la version enregistrée est en avance sur ses tables réelles. |

`./liberty migrate` et `liberty-ops migrate` lancent cette commande.

### Rapports de mise à jour

`record-upgrade` enregistre un rapport de mise à jour ou de retour arrière dans l'historique des mises à jour. `./liberty upgrade`, `./liberty rollback` et `liberty-ops` l'appellent ; elle n'est pas destinée à être lancée à la main.

---

## liberty-connectors \{#liberty-connectors\}

Exécute les connecteurs sans l'application web — pratique pour tester un pool ou une requête depuis le serveur.

| Commande | Effet |
|---|---|
| `liberty-connectors list` | Pools et connecteurs. |
| `liberty-connectors describe <connecteur>` | La définition d'un connecteur. |
| `liberty-connectors run <connecteur> <requête ou endpoint> [-p CLÉ=VALEUR]…` | Lance une requête (connecteur SQL) ou appelle un endpoint (connecteur API) et affiche le résultat. |

`--config <connectors.toml>` lit un autre fichier que celui cité dans `app.toml`.

---

## liberty-crypto \{#liberty-crypto\}

Chiffre des valeurs pour les fichiers de configuration avec la clé maître de l'installation. **Paramètres** chiffre de lui-même ce qu'il enregistre ; cet outil sert pour une valeur écrite à la main dans un fichier TOML.

| Commande | Effet |
|---|---|
| `liberty-crypto encrypt [VALEUR]` | Affiche `ENC:…`. Lit la valeur sur l'entrée standard quand elle n'est pas fournie — préférable pour un mot de passe. |
| `liberty-crypto decrypt [ENC:…]` | Affiche la valeur en clair. |
| `liberty-crypto is-encrypted [VALEUR]` | Indique si la valeur commence par `ENC:`. |

La clé vient de `[crypto] master_key` dans `app.toml` (normalement `${LIBERTY_MASTER_KEY}`) ; `--master-key` et `--config` la remplacent.

---

## liberty-license \{#liberty-license\}

| Commande | Effet |
|---|---|
| `liberty-license status` | Vérifie la clé configurée dans **Paramètres → App → License** : validité, produits couverts, expiration. |
| `liberty-license verify [CLÉ]` | Vérifie une clé passée en argument ou sur l'entrée standard, avant de la coller. |

`--config` désigne un autre `app.toml`. Voir [Clé de licence](../framework/build/secure/license-key.md).
