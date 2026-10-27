---
title: Secrets chiffrés
description: "Comment Liberty Next stocke les mots de passe des pools, les identifiants d'API, la clé de licence, la clé de l'IA, le secret client OIDC et le mot de passe SMTP : chiffrés en valeurs ENC: à chaque enregistrement depuis les Paramètres, avec la clé maître de l'installation."
keywords: [Liberty Next, secrets chiffrés, "ENC:", clé maître, mot de passe de pool, jeton d'API, Paramètres, liberty-crypto]
---

# Secrets chiffrés

Chaque champ secret des Paramètres est chiffré à l'enregistrement et écrit dans le fichier de configuration sous la forme `ENC:…`. Le serveur le déchiffre au chargement du fichier, avec la **clé maître** de l'installation.

| Champ | Paramètres |
|---|---|
| Mot de passe d'un pool | Paramètres → Pools |
| Identifiants d'un connecteur API (mot de passe, jeton, secret client) | Paramètres → Connecteurs |
| Clé de licence, clé d'API Anthropic, secret client OIDC, mot de passe SMTP | Paramètres → App |

Un champ secret est une saisie masquée avec un œil pour en afficher le contenu. Rien à activer : une valeur enregistrée depuis les Paramètres est toujours chiffrée, et l'enregistrement est refusé quand le serveur n'a pas de clé maître.

Pour fournir un secret par l'environnement, écrire `${VARIABLE}` dans le fichier ; pour écrire une valeur `ENC:` à la main, utiliser `liberty-crypto encrypt`. Les détails — la clé, sa dérivation, les secrets `<NOM>_FILE` — se trouvent dans [Chiffrement et secrets](../../configuration/encryption-secrets.md).

:::warning[La clé maître]
Garder une copie de la clé maître hors du serveur et ne jamais la changer sur une installation existante : toutes les valeurs `ENC:` deviendraient illisibles. `./liberty doctor` vérifie qu'elle déchiffre chaque mot de passe de pool.
:::
