---
title: Applications sous licence
description: "Installer Nomasx-1 et Nomajde sur Liberty Next : la clé de licence, le wheel des applications, les bases créées par les tâches d'installation, la fusion entité par entité qui conserve les modifications locales à chaque mise à jour, et la première connexion au système source."
keywords: [Liberty Next, applications sous licence, Nomasx-1, Nomajde, Nomaflow, wheel, liberty apps, install-apps.sh, licence, deploy-databases, données de référence, override, fusion, --force-config]
---

# Applications sous licence

Nomasx-1, Nomajde et leurs tâches Nomaflow sont livrés dans un seul wheel Python, `liberty_apps-<version>-py3-none-any.whl`, et activés par une clé de licence. Le framework fonctionne sans elles ; les ajouter tient en une commande.

---

## 1 — La clé de licence \{#set-the-license-key\}

Se connecter avec un superutilisateur et ouvrir **Liberty Next → Administrer → App → License**. Coller la clé reçue et enregistrer : la clé est chiffrée avec la clé maître de l'installation et les connecteurs sous licence apparaissent aussitôt, sans redémarrage.

Sans clé, les applications s'installent mais leurs connecteurs sous licence restent masqués. `liberty-license status` (dans le conteneur : `docker exec -u liberty liberty-next liberty-license status`) indique ce que couvre la clé et sa date d'expiration — voir [Clé de licence](../framework/build/secure/license-key.md).

---

## 2 — Installer les applications \{#install\}

Sur une installation Docker, depuis `release/` :

```bash
./liberty apps ./liberty_apps-7.0.58-py3-none-any.whl     # ou une URL https://
```

La commande :

1. affiche le **plan de fusion** — ce qui sera ajouté, actualisé, conservé ou retiré dans la configuration (voir [plus bas](#merge)) ;
2. décompresse le wheel dans `release/apps/` (`config/`, `plugins/`, `data/`) avec l'image Liberty Next déjà présente sur l'hôte — l'hôte n'a pas besoin de Python ;
3. ajoute le dossier des applications aux fichiers compose enregistrés et redémarre l'ensemble ; le dossier est monté sur `/apps`, et ce que **Paramètres** enregistre pour les applications y est écrit ;
4. lance dans l'ordre les **tâches d'installation** :
   - `deploy-databases` — crée les rôles et les bases `nomasx1` et `nomajde` sur le PostgreSQL fourni, puis le schéma Nomasx-1 ;
   - `nomasx1-import-reference` — charge les données de référence (base de séparation des tâches, paramètres, listes) ;
5. applique les migrations de schéma en attente.

Pour installer les applications en même temps que l'ensemble : `./liberty install full --apps ./liberty_apps-….whl`.

Sur une installation Python, les mêmes étapes tiennent en trois commandes — voir [Serveur Python](./python-server.md#apps).

| Option | Effet |
|---|---|
| `--dry-run` | Affiche le plan de fusion et s'arrête : rien n'est écrit. |
| `--force-config` | Actualise aussi les entités livrées modifiées localement sans être marquées `override` (voir plus bas). |

---

## 3 — Connecter le système source \{#source\}

Les applications lisent leurs données dans le système source au travers d'un pool. Ouvrir **Liberty Next → Administrer → Pools**, renseigner le pool attendu par les applications (`jdedwards` pour JD Edwards EnterpriseOne) avec un compte en lecture seule, le tester, puis lancer **`nomasx1-roles`** pour créer les rôles d'auditeur et d'administrateur, et la collecte — `nomasx1-collect-all` — depuis **Nomaflow** ou depuis *Nomasx-1 → Tâches*. Les tâches et leurs paramètres sont décrits sur [Nomaflow → Tâches livrées](../nomaflow/bundled-jobs.md).

Nomajde écrit aussi dans JD Edwards par son serveur AIS : l'adresse, l'utilisateur et la vérification du certificat viennent des variables d'environnement `JDE_AIS_URL`, `JDE_AIS_USER` et `JDE_AIS_VERIFY_SSL` (dans `.env` ou `secrets.env`), ou se règlent directement dans **Liberty Next → Construire → Connecteurs**. Une valeur réglée dans les Paramètres est conservée à chaque mise à jour.

---

## Mettre à jour les applications sans perdre les modifications locales \{#merge\}

Un nouveau wheel apporte de nouveaux écrans, entrées de menu, éléments du dictionnaire, requêtes et tableaux de bord, alors que certains éléments livrés ont peut-être été modifiés sur le serveur. L'installateur compare trois versions de chaque entité — ce qui avait été livré, ce qui se trouve sur le serveur, ce qu'apporte le nouveau wheel — et décide entité par entité :

| Entité | Traitement |
|---|---|
| Nouvelle dans le wheel | Ajoutée. |
| Livrée, jamais modifiée sur le serveur | Remplacée par la nouvelle version. |
| Modifiée sur le serveur | **Conservée**, et listée à la fin pour revue. |
| Marquée `override = true` (switch *Override* de l'onglet General de l'entité) | Toujours conservée. |
| Créée sur le serveur | Toujours conservée. |
| Retirée par l'éditeur | Supprimée seulement si elle n'a jamais été modifiée. |
| Pools et chaque secret `ENC:` | Toujours repris de la configuration en place. |
| Une valeur fixée sur le serveur là où le wheel livre une variable (`${JDE_AIS_USER:-JDE}`) | Toujours la vôtre — une vérification TLS désactivée dans les Paramètres le reste. |
| `theme.toml` | Toujours le vôtre. |

**Les tâches Nomaflow** sont fusionnées tâche par tâche. La partie produit d'une tâche livrée — ses étapes, sa description, ses étiquettes, les paramètres qu'elle propose — est mise à jour ; ce qui a été réglé dessus est conservé : activation, planification, fuseau horaire, préréglages, alertes, réessais, niveau de journal, délai et valeurs de ses paramètres. Les tâches créées sur le serveur restent. Une tâche livrée dont les étapes ont été modifiées est conservée telle quelle et listée à la fin ; une tâche marquée `override = true` dans `jobs.toml` est toujours conservée telle qu'enregistrée.

Ce qui a été livré est enregistré sous `config/.bundled/` : la mise à jour suivante distingue ainsi « jamais modifié » de « modifié ». Les entités conservées parce qu'elles ont été modifiées localement sont listées en fin d'exécution : les marquer `override = true` pour les garder définitivement, ou relancer avec `--force-config` pour prendre la version de l'éditeur.

Les applications se mettent à jour en même temps que le framework avec `./liberty upgrade --apps <wheel>` — voir [Mise à jour et retour arrière](./upgrading.md#apps).

---

## Vérifier l'installation \{#verify\}

| Vérification | Où |
|---|---|
| Version des applications | `./liberty status` → `apps bundle` |
| Licence | **Liberty Next → Administrer → App → License** |
| Applications dans le sélecteur | Nomasx-1 et Nomajde apparaissent en haut du menu latéral |
| Tâches d'installation | Historique des exécutions Nomaflow : `deploy-databases` et `nomasx1-import-reference` réussies |
| Schéma à jour | `./liberty status` → `migrations: up to date` |

---

## Un second Nomasx-1 en parallèle \{#second-instance\}

Pour analyser séparément deux systèmes sources sur un même serveur, la tâche `nomasx1-init-db` duplique la configuration de Nomasx-1 sous un autre nom (par exemple `nomasx1b`), avec sa propre base. Voir [Tâches livrées → nomasx1-init-db](../nomaflow/bundled-jobs.md#nomasx1-init-db).

---

## Wheel ou packages ? \{#packages\}

| Canal | Contenu | Appartient à |
|---|---|---|
| Le wheel des applications (cette page) | Le produit complet : tous les fichiers de configuration, le code Python, les données de référence. | L'éditeur — un par version. |
| L'écran **Packages** | Une sélection d'écrans, d'entrées de menu ou de tableaux de bord avec leurs dépendances. | L'équipe qui exploite l'installation — pour faire passer ses propres modifications du test à la production. Voir [Packages](../framework/build/packages.md). |

Les deux utilisent la même fusion entité par entité : une mise à jour du wheel et un import de package n'écrasent jamais les modifications l'un de l'autre.

---

## Problèmes fréquents \{#pitfalls\}

| Symptôme | Correction |
|---|---|
| Les applications sous licence n'apparaissent pas dans le sélecteur | Vérifier la licence dans **Liberty Next → Administrer → App → License** ; `./liberty doctor` vérifie que le dossier des applications figure dans les fichiers compose enregistrés. |
| Après un `docker compose -f … up -d` manuel, l'installation paraît vide | Le dossier des applications a été oublié. Relancer `./liberty apps <wheel>` (rien d'autre ne change) — puis s'en tenir aux commandes `./liberty`. |
| `deploy-databases` échoue avec *permission denied* | Le pool `default` doit utiliser un rôle autorisé à créer des rôles et des bases. Dans l'installation complète, c'est le superutilisateur `liberty` fourni. |
| Un nouvel écran de l'éditeur n'apparaît pas | Il a été conservé parce qu'il avait été modifié localement : voir la liste affichée en fin d'exécution, ou relancer avec `--force-config`. |
| L'URL du wheel ne se télécharge pas | Le télécharger d'abord et passer le fichier local. |
