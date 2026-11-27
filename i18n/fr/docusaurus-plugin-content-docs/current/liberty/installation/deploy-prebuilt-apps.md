---
title: Applications sous licence
description: "Installer Nomasx-1 et Nomajde sur Liberty Next : la clé de licence, le wheel des applications, les bases créées par les tâches d'installation, la fusion entité par entité qui conserve les modifications locales à chaque mise à jour, et la première connexion au système source."
keywords: [Liberty Next, applications sous licence, Nomasx-1, Nomajde, Nomaflow, wheel, liberty apps, install-apps.sh, licence, deploy-databases, données de référence, override, fusion, --force-config]
---

# Applications sous licence

Nomasx-1, Nomajde et leurs tâches Nomaflow sont livrés dans un seul wheel Python, `liberty_apps-<version>-py3-none-any.whl`, et activés par une clé de licence. Le framework fonctionne sans elles ; les ajouter tient en une commande.

---

## 1 — La clé de licence \{#set-the-license-key\}

Se connecter avec un superutilisateur et ouvrir **Liberty Next → Administrer → App → Licence**. Coller la clé reçue et enregistrer : la clé est chiffrée avec la clé maître de l'installation et les connecteurs sous licence apparaissent aussitôt, sans redémarrage.

Sans clé, les applications s'installent mais leurs connecteurs sous licence restent masqués. `liberty-license status` (dans le conteneur : `docker exec -u liberty liberty-next liberty-license status`) indique ce que couvre la clé et sa date d'expiration — voir [Clé de licence](../framework/build/secure/license-key.md). Une clé couvre une application, une autre, ou toutes : une application qu'elle ne couvre pas n'est pas proposée — ni menu, ni pages, ni tâches — même si le wheel l'installe (voir [Ce que couvre une clé](../framework/build/secure/license-key.md#coverage)).

---

## 2 — Installer les applications \{#install\}

Sur une installation Docker, depuis `release/` :

```bash
./liberty apps ./liberty_apps-7.0.58-py3-none-any.whl     # ou une URL https://
```

La commande :

1. affiche le **plan de fusion** — ce qui sera ajouté, actualisé, conservé ou retiré dans la configuration (voir [plus bas](#merge)) ;
2. décompresse le wheel dans `release/apps/` (`config/`, `plugins/`, `data/`) avec l'image Liberty Next déjà présente sur l'hôte — l'hôte n'a pas besoin de Python ;
3. ajoute le dossier des applications aux fichiers compose enregistrés et redémarre l'ensemble ; le dossier est monté sur `/apps`, et ce que les pages **Liberty Next** enregistrent pour les applications y est écrit ;
4. lance dans l'ordre les **tâches d'installation** :
   - `deploy-databases` — crée les rôles et les bases `nomasx1` et `nomajde` sur le PostgreSQL fourni, puis le schéma Nomasx-1 ;
   - `nomasx1-import-reference` — charge les données de référence (base de séparation des tâches, paramètres, listes) ;
5. applique les migrations de schéma en attente.

Pour installer les applications en même temps que l'ensemble : `./liberty install full --apps ./liberty_apps-….whl`.

Sur une installation Python, les mêmes étapes tiennent en trois commandes — voir [Serveur Python](./python-server.md#apps).

| Option | Effet |
|---|---|
| `--dry-run` | Affiche le plan de fusion et s'arrête : rien n'est écrit. |
| `--force-config` | Actualise aussi les entités livrées modifiées localement sans être marquées `override`, et donne aux menus livrés l'ordre du wheel (voir plus bas). |

---

## 3 — Connecter le système source \{#source\}

Les applications lisent leurs données dans le système source au travers d'un pool. Ouvrir **Liberty Next → Administrer → Pools**, renseigner le pool attendu par les applications (`jdedwards` pour JD Edwards EnterpriseOne) avec un compte en lecture seule, le tester, puis lancer **`nomasx1-roles`** pour créer les rôles d'auditeur et d'administrateur, et la collecte — `nomasx1-collect-all` — depuis **Nomaflow** ou depuis *Nomasx-1 → Tâches*. Les tâches et leurs paramètres sont décrits sur [Nomaflow → Tâches livrées](../nomaflow/bundled-jobs.md).

Nomajde atteint aussi JD Edwards par son serveur AIS et par la console Server Manager. Chacun est un pool de type *Serveur HTTP (une API)* — `jde_ais` et `jde_server_manager` —, réglé dans le même écran **Liberty Next → Administrer → Pools** : l'adresse avec son compte, le mot de passe, le contrôle TLS (et, pour les appels faits au nom de l'utilisateur connecté, la clé de signature). Les connecteurs désignent ces pools et ne portent ni adresse ni compte. Les pools peuvent aussi être alimentés par les variables d'environnement `JDE_AIS_URL` / `JDE_SM_URL` — l'adresse avec son compte, `https://JDE@ais-host:7077/jderest/v2` — et `JDE_AIS_VERIFY_SSL` / `JDE_SM_VERIFY_SSL` (`true` par défaut), dans `.env` ou `secrets.env`. Voir [Un serveur HTTP](../framework/connectors.md#pool-http).

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
| Une valeur fixée sur le serveur là où le wheel livre une variable (`${JDE_AIS_VERIFY_SSL:-true}`) | Toujours la vôtre — une vérification TLS désactivée le reste. |
| Le **Serveur** que désigne un connecteur API | Toujours le vôtre, comme les pools. |
| `theme.toml` | Toujours le vôtre. |

**Les tâches Nomaflow** sont fusionnées tâche par tâche. La partie produit d'une tâche livrée — ses étapes, sa description, ses étiquettes, les paramètres qu'elle propose — est mise à jour ; ce qui a été réglé dessus est conservé : activation, planification, fuseau horaire, préréglages, alertes, réessais, niveau de journal, délai et valeurs de ses paramètres. Les tâches créées sur le serveur restent. Une tâche livrée dont les étapes ont été modifiées est conservée telle quelle et listée à la fin ; une tâche marquée `override = true` dans `jobs.toml` est toujours conservée telle qu'enregistrée.

Ce qui a été livré est enregistré sous `config/.bundled/` : la mise à jour suivante distingue ainsi « jamais modifié » de « modifié ». Les entités conservées parce qu'elles ont été modifiées localement sont listées en fin d'exécution : les marquer `override = true` pour les garder définitivement, ou relancer avec `--force-config` pour prendre la version de l'éditeur.

### L'ordre des menus \{#menu-order\}

Les entrées d'un menu livré sont fusionnées une à une, et leur ordre aussi :

| Sur le serveur | Après la mise à jour |
|---|---|
| Personne n'a déplacé d'entrée — les entrées livrées la dernière fois sont toujours dans l'ordre livré | Le menu prend l'ordre du nouveau wheel : une nouvelle entrée apparaît là où l'éditeur l'a placée, et un ordre modifié par l'éditeur est appliqué. Les entrées créées localement restent juste après l'entrée qu'elles suivaient. |
| Des entrées ont été déplacées | L'ordre local est conservé. Seules les nouvelles entrées sont placées : chacune dans son dossier, juste après l'entrée qu'elle suit dans le wheel — à défaut juste après son dossier, sinon en fin de menu. |
| Aucune trace de la livraison précédente | Rien n'indique si des entrées ont été déplacées : l'ordre local est conservé, et les nouvelles entrées sont placées comme ci-dessus. |
| Installation avec `--force-config` | Le menu prend l'ordre du wheel, même là où des entrées ont été déplacées. |

Le rapport affiché en fin d'exécution nomme les menus dont les entrées ont pris l'ordre du wheel — `⇅ <menu>: its entries take the shipment's order`.

Les applications se mettent à jour en même temps que le framework avec `./liberty upgrade --apps <wheel>` — voir [Mise à jour et retour arrière](./upgrading.md#apps).

---

## Vérifier l'installation \{#verify\}

| Vérification | Où |
|---|---|
| Version des applications | `./liberty status` → `apps bundle` |
| Licence | **Liberty Next → Administrer → App → Licence** |
| Applications dans le sélecteur | Nomasx-1 et Nomajde apparaissent en haut du menu latéral |
| Tâches d'installation | Historique des exécutions Nomaflow : `deploy-databases` et `nomasx1-import-reference` réussies |
| Schéma à jour | `./liberty status` → `migrations: up to date` |

---

## Un second Nomasx-1 en parallèle \{#second-instance\}

Pour analyser séparément deux systèmes sources sur un même serveur, la tâche `nomasx1-init-db` duplique la configuration de Nomasx-1 sous un autre nom (`nomasx1-clone` par défaut) et crée le schéma Nomasx-1 sur la base de cette application clonée. Voir [Tâches livrées → nomasx1-init-db](../nomaflow/bundled-jobs.md#nomasx1-init-db).

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
| Les applications sous licence n'apparaissent pas dans le sélecteur | Vérifier la licence dans **Liberty Next → Administrer → App → Licence** ; `./liberty doctor` vérifie que le dossier des applications figure dans les fichiers compose enregistrés. |
| Après un `docker compose -f … up -d` manuel, l'installation paraît vide | Le dossier des applications a été oublié. Relancer `./liberty apps <wheel>` (rien d'autre ne change) — puis s'en tenir aux commandes `./liberty`. |
| `deploy-databases` échoue avec *permission denied* | Le pool `default` doit utiliser un rôle autorisé à créer des rôles et des bases. Dans l'installation complète, c'est le superutilisateur `liberty` fourni. |
| Un nouvel écran de l'éditeur n'apparaît pas | Il a été conservé parce qu'il avait été modifié localement : voir la liste affichée en fin d'exécution, ou relancer avec `--force-config`. |
| L'URL du wheel ne se télécharge pas | Le télécharger d'abord et passer le fichier local. |
