---
title: Rechargement à chaud
description: "Comment Liberty Next applique les modifications de configuration sans redémarrage : Recharger la config (POST /admin/reload), la surveillance des fichiers d'[app] hot_reload et ce qu'elle recharge pour chaque fichier, les pools, Paramètres → App, et ce qui demande encore un redémarrage."
keywords: [Liberty Next, rechargement à chaud, recharger la config, admin reload, surveillance des fichiers, hot_reload, pools, redémarrage]
---

# Rechargement à chaud

Les modifications de configuration s'appliquent sans redémarrer le serveur, de deux façons.

---

## Recharger la config \{#reload\}

**Recharger la config**, à droite des onglets des Paramètres — ou `POST /admin/reload` (superutilisateur) — relit tous les fichiers de configuration et reconstruit à partir d'eux les connecteurs, écrans, menus, tableaux de bord, graphiques, tâches et règles de notification du serveur. Si les nouveaux fichiers ne se chargent pas, la configuration précédente reste active et l'erreur est affichée.

Les requêtes en cours se terminent avec la configuration de leur démarrage ; les suivantes utilisent la nouvelle.

---

## La surveillance des fichiers \{#watcher\}

Avec `[app] hot_reload = true` — la valeur du `app.toml` livré — le serveur surveille ses fichiers de configuration et recharge la partie concernée peu après la modification d'un fichier (un enregistrement depuis les Paramètres, une modification sur le serveur, un `git pull`) :

| Fichier | Rechargé |
|---|---|
| `menus.toml`, `screens.toml`, `charts.toml`, `dashboards.toml` | Cette partie. |
| `dictionary.toml` | Les informations de colonnes des connecteurs et les écrans. |
| `jobs.toml` | Les tâches et leurs planifications. |
| `notifications.toml` | Les règles de notification. |
| `connectors.toml` | Les connecteurs et leurs requêtes — **pas les pools**. |

Les modifications faites dans la même demi-seconde s'appliquent ensemble.

---

## Pools \{#pools\}

Une modification de pool (adresse, mot de passe, taille) n'est pas appliquée par la surveillance des fichiers, pour qu'une requête en cours ne perde jamais sa connexion : après la modification d'un pool, utiliser **Recharger la config**.

---

## Paramètres → App \{#app\}

Enregistrer Paramètres → App applique aussitôt la licence, l'assistant IA, OpenID Connect, les notifications et les valeurs par défaut de l'interface. L'adresse d'écoute, le port et le niveau de journal demandent un redémarrage ; le mode thick d'Oracle aussi.

---

## Ce qui demande un redémarrage \{#restart\}

| Modification | Comment |
|---|---|
| `host`, `port`, `log_level`, `oracle_thick` dans `app.toml` | `./liberty restart` ou `liberty-ops restart`. |
| Une variable d'environnement (`.env`, fichier d'environnement du service) | Un redémarrage — `./liberty restart` ne recrée rien ; pour un `.env` modifié, `./liberty start`. |
| Le code Python d'un plugin | Un redémarrage : les modules ne sont importés qu'une fois. |
| Une nouvelle version | `./liberty upgrade` — voir [Mise à jour et retour arrière](../../installation/upgrading.md). |
