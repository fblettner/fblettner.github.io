---
title: Clé de licence
description: "La clé de licence de Liberty Next : ce qu'elle active (Nomasx-1, Nomajde), où la coller (Paramètres → App → License), comment la vérifier (liberty-license, /api/license), ce qui se passe sans elle, et comment la remplacer avant son expiration."
keywords: [Liberty Next, licence, clé de licence, Nomasx-1, Nomajde, Paramètres App, liberty-license, api license, expiration, mode restreint]
---

# Clé de licence

Le framework est libre d'utilisation. Les applications sous licence — **Nomasx-1** et **Nomajde** — sont activées par une clé de licence fournie par Nomana-IT.

---

## Installer la clé \{#install\}

Se connecter avec un superutilisateur, ouvrir **Paramètres → App → License**, coller la clé dans **License key** et enregistrer. La clé est chiffrée avec la clé maître de l'installation, et les applications sous licence se chargent aussitôt — sans redémarrage.

Avant de la coller, la clé peut être vérifiée sur le serveur : `liberty-license verify <clé>` (avec Docker : `docker exec -u liberty liberty-next liberty-license verify <clé>`).

---

## Vérifier la licence \{#check\}

| Où | Affiche |
|---|---|
| L'en-tête de la section **License** | *configured*, ou *not set — restricted mode*. |
| `liberty-license status` | Validité, produits couverts, date d'expiration de la clé configurée. |
| `GET /api/license` | `{mode, customer, plan, apps, expires_at, error}`. |
| `GET /info` | `license.mode` : `full` ou `restricted`. |

---

## Sans clé valide \{#restricted\}

Sans clé, ou avec une clé expirée ou invalide, le serveur fonctionne en **mode restreint** : le framework et les applications construites avec lui fonctionnent, les applications sous licence ne se chargent pas. Le journal du serveur en donne la raison par une ligne commençant par `license: not loading licensed connector(s)`.

---

## Remplacer la clé \{#replace\}

Noter la date d'expiration à l'installation de la clé. Avant l'échéance, coller la nouvelle clé dans **Paramètres → App → License** et enregistrer : elle s'applique aussitôt.

La clé peut aussi venir de la variable d'environnement `LIBERTY_LICENSE_KEY`, pour les installations qui gardent leurs secrets dans un orchestrateur ; les Paramètres affichent alors la référence telle quelle.
