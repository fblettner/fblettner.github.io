---
title: Chiffrement et secrets
description: "Comment Liberty Next évite de garder des secrets en clair dans ses fichiers de configuration : valeurs ENC: chiffrées avec la clé maître, champs secrets chiffrés à chaque enregistrement depuis les Paramètres, références ${VARIABLE}, liberty-crypto, et la conduite à tenir avec la clé maître."
keywords: [Liberty Next, chiffrement, secrets, "ENC:", clé maître, LIBERTY_MASTER_KEY, AES-256-GCM, liberty-crypto, variables d'environnement]
---

# Chiffrement et secrets

Les mots de passe et les clés des fichiers de configuration sont stockés chiffrés, sous forme de valeurs `ENC:…`, avec la **clé maître** de l'installation. Le serveur les déchiffre au chargement des fichiers.

---

## Ce qui est chiffré \{#what\}

Chaque champ secret est chiffré à l'enregistrement depuis les Paramètres :

| Où | Champ |
|---|---|
| Paramètres → Pools | Le mot de passe du pool. |
| Paramètres → Connecteurs (connecteurs API) | Identifiants, jetons, secrets client. |
| Paramètres → App | La clé de licence, la clé de l'IA, le secret client OpenID Connect, le mot de passe SMTP. |

Le champ est une saisie masquée avec un œil pour en afficher le contenu. Une nouvelle valeur est toujours écrite chiffrée ; sans clé maître, l'enregistrement est refusé.

---

## La clé maître \{#master-key\}

La clé maître vient de la variable d'environnement `LIBERTY_MASTER_KEY`. La clé est une phrase secrète : la clé de chiffrement en est dérivée (PBKDF2), et chaque valeur est chiffrée en AES-256-GCM.

- L'installation Docker la génère dans `release/.env` ; une installation Python la définit dans le fichier d'environnement du service.
- En garder une copie hors du serveur : une sauvegarde est inutilisable sans elle.
- **Ne jamais la changer sur une installation existante** : toutes les valeurs `ENC:` deviendraient illisibles et les pools ne se connecteraient plus. `./liberty doctor` vérifie qu'elle déchiffre bien chaque mot de passe de pool.

---

## Autres façons de fournir un secret \{#alternatives\}

| Façon | Quand |
|---|---|
| `${VARIABLE}` dans le fichier | Le secret vient de l'environnement ou d'un gestionnaire de secrets. Les Paramètres affichent la référence telle quelle. |
| `<NOM>_FILE` | Pour les variables `LIBERTY_*`, `POSTGRES_*` et `PGADMIN_*` : la valeur est lue dans un fichier (secrets Docker, Swarm ou Kubernetes). |
| `liberty-crypto encrypt` | Pour écrire à la main une valeur `ENC:` dans un fichier : `liberty-crypto encrypt` lit la valeur sur son entrée standard et affiche `ENC:…`. Voir [CLI](../../references/cli.md#liberty-crypto). |

---

## Mots de passe des utilisateurs \{#passwords\}

Les mots de passe de connexion des utilisateurs locaux ne sont pas chiffrés mais hachés (Argon2id) : ils ne peuvent pas être relus. Un mot de passe oublié se remplace avec `liberty-admin set-password`.
