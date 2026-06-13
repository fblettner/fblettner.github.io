---
title: Historique & versionnage de la configuration
description: "Chaque sauvegarde de configuration est capturée, chaque sauvegarde d'écran capture sa clôture de dépendances sous forme de bundle restaurable, les changements de version sont journalisés et les notes de version se lisent dans l'application — le tout sous Paramètres → Historique."
keywords: [Liberty Framework, historique de configuration, versionnage, snapshot, restauration, purge de rétention, historique des mises à niveau, notes de version, bundle, clôture de dépendances]
---

# Historique & versionnage de la configuration

Liberty garde un historique de votre configuration. À chaque sauvegarde d'un fichier de configuration depuis l'interface Paramètres, l'état précédent est capturé ; à chaque sauvegarde d'un **écran**, le framework capture aussi cet écran *avec ses dépendances* sous forme de bundle restaurable. Vous pouvez comparer un snapshot à ce qui est actif, le restaurer, élaguer l'historique et voir précisément quand la version de l'application a changé — le tout depuis **Paramètres → Historique**.

---

## Ce qui est capturé

| Quand vous… | Le framework capture… |
|---|---|
| Sauvegardez un fichier de configuration (connecteurs, dictionnaire, menus, pools, …) | Les octets précédents du fichier, avant que la sauvegarde ne les écrase. |
| Sauvegardez un écran dans le Concepteur | Un **bundle** : l'écran *plus sa clôture de dépendances* — les requêtes, lookups, séquences et entrées de dictionnaire dont il dépend. |
| Lancez l'assistant, un renommage, un déplacement, un clone ou un import | Toute la configuration, avant l'opération. |

Les snapshots sont adressés par leur contenu : sauvegarder un fichier inchangé ne fait rien — l'historique ne grossit que quand quelque chose a réellement changé. La capture se fait au mieux : elle ne bloque ni ne fait échouer une sauvegarde.

---

## Paramètres → Historique

L'onglet **Historique** a trois modes :

- **Fichiers** — choisissez un fichier de configuration à gauche ; ses versions s'affichent à droite sous forme de cartes. Dépliez une version pour la **comparer au fichier actif** côte à côte, puis la **télécharger**, la **restaurer** ou la **supprimer**.
- **Écrans** — choisissez un écran (`app.écran`) ; chaque sauvegarde est une carte de bundle. Dépliez-la pour inspecter la clôture de dépendances capturée, groupée par type (connecteurs, requêtes, entrées de dictionnaire, lookups, menus, …), puis **télécharger le bundle (.zip)** ou **restaurer l'écran + les dépendances**.
- **Mises à niveau** — l'historique des versions de l'application (voir [plus bas](#historique-des-mises-à-niveau)).

### Restaurer

La restauration est sûre et réversible — l'état courant est capturé *d'abord*, si bien qu'une restauration peut elle-même être annulée :

- Une **restauration de fichier** réécrit la version choisie et recharge les connecteurs pour la rendre active aussitôt.
- Une **restauration de bundle** ré-applique ensemble l'écran et ses dépendances capturées. Les entités que vous avez marquées `override = true` sur cette installation sont **préservées** : une personnalisation locale survit donc au retour en arrière.

### Élaguer

La suppression retire un seul snapshot (ou vide tout l'historique d'un fichier / d'un écran). La configuration active n'est jamais touchée par une suppression — seul l'historique l'est.

---

## Tâche de purge de rétention

L'historique grossit avec le temps : le framework inclut donc une tâche — **`purge config versions`** — qui le rogne. Elle garde les versions les plus récentes par fichier et écarte le reste, selon **deux règles indépendantes** :

- **Nombre de versions** — ne garder que les N versions les plus récentes de chaque fichier (défaut **20**).
- **Âge maximal** — écarter les versions de plus de D jours (défaut **90**).

Les deux règles se combinent en OU, et la version la plus récente de chaque fichier est toujours conservée. Une règle à `0` est désactivée. Planifiez-la depuis l'éditeur de tâches NomaFlow comme n'importe quelle tâche — par exemple une exécution nocturne — et ajustez `max_versions` / `max_age_days` dans ses paramètres.

---

## Historique des mises à niveau

À chaque changement de version de l'application en cours d'exécution, le framework l'enregistre sous **Paramètres → Historique → Mises à niveau** : une ligne par composant — **Framework** (Liberty Next) et **Apps** (Liberty Apps) — avec la version de départ et d'arrivée. Le premier lancement d'un composant est journalisé comme une *installation* ; les changements de version ultérieurs comme une *mise à niveau*. La liste est enregistrée automatiquement au démarrage et reste idempotente : redémarrer sur la même version n'ajoute rien. Sélectionner une ligne affiche la section correspondante des notes de version.

---

## Les notes de version, dans l'application

L'onglet **Paramètres → Notes de version** est le journal complet livré avec le build. Il lit les notes du framework (et celles des apps, quand Liberty Apps est installé), avec une table des matières par version et un sélecteur de composant quand il y en a plusieurs. Le texte du journal est **bilingue** — il affiche les notes françaises quand l'interface est en français, anglaises sinon.

---

## Conseils et bonnes pratiques

- **Restaurez avant de déboguer une mauvaise sauvegarde.** Si un changement a cassé un écran, le plus rapide est souvent de restaurer la version précédente et de recharger, puis de réappliquer le changement avec soin.
- **Utilisez une restauration de bundle pour ramener un écran d'un bloc.** Restaurer le seul fichier d'écran peut le laisser pointer vers une requête que vous avez aussi modifiée ; la restauration de bundle rétablit l'écran *et* ses dépendances ensemble.
- **Planifiez la purge.** Sans elle, l'historique grossit sans limite ; une purge nocturne aux valeurs par défaut (20 versions / 90 jours) le garde sain.
- **Vérifiez les Mises à niveau après un déploiement.** C'est la confirmation la plus rapide que la nouvelle version du framework ou des apps a bien pris effet.
