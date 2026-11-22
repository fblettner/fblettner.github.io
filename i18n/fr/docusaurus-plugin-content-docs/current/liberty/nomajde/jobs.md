---
title: Tâches
description: "Le dossier Tâches du menu de Nomajde : refusionner la sécurité JD Edwards, rafraîchir le dictionnaire de données des modèles de l'explorateur, vérifier les serveurs JD Edwards, conserver les chiffres de la plateforme, surveiller les instances et les redémarrer sur demande, envoyer par e-mail la synthèse de la plateforme et le rapport hebdomadaire de montée de version, comparer un path code au standard — à la demande, avec un journal en direct ; et les tâches AIS qui lancent un état ou exportent une table depuis Nomaflow."
keywords: [Nomajde, tâches, refusionner la sécurité, paquet de changements, rôles, dictionnaire de données, explorateur, rafraîchissement, JD Edwards, Server Manager, contrôle de santé, instances, redémarrage, relevé de la plateforme, capacité, synthèse de la plateforme, rapport hebdomadaire, montée de version, PDF, retour au standard, AIS, état, UBE, export, xlsx]
---

# Tâches

Le dossier **Tâches**, en bas du menu de Nomajde, lance à la demande les tâches de maintenance de JD Edwards sans ouvrir Nomaflow. Chaque entrée ouvre la page de la tâche : ses paramètres, **Lancer**, le journal suivi en direct, les exécutions précédentes avec leur auteur. Voir [Lancer une tâche depuis le menu d'une application](../nomaflow/jobs/run-from-menu.md).

---

## Refusionner la sécurité (paquet de changements) \{#remerge\}

Refusionne la sécurité JD Edwards — Security Workbench, sécurité UDO, filtrage des menus — des rôles parents touchés par le paquet de changements actif, une fois par parent. À lancer après l'application d'un paquet qui modifie des rôles ou des relations de rôles. Détails : [`nomajde-remerge-security`](../nomaflow/bundled-jobs.md#nomajde-remerge-security).

## Refusionner la sécurité (tous les rôles) \{#remerge-all\}

Refusionne la sécurité de tous les rôles parents actifs, indépendamment du paquet de changements — après un import en masse, ou pour rattraper une refusion oubliée. Sur une instance volumineuse, l'opération prend plusieurs minutes. Détails : [`nomajde-remerge-security-all`](../nomaflow/bundled-jobs.md#nomajde-remerge-security-all).

## Rafraîchir le dictionnaire (modèles Explorateur) \{#dictionary\}

Crée les entrées de dictionnaire qui manquent aux modèles de l'[explorateur de données](./data-explorer.md), à partir du dictionnaire de données JD Edwards (F9200 / F9202 / F9210 : description, type, décimales, liste UDC), une analyse par table. Les libellés apparaissent aussitôt, sans redémarrage.

| Paramètre | Rôle |
|---|---|
| **Modèle Explorateur (vide = tous les modèles)** | L'un des modèles de Nomajde, ou vide pour tous. |

Le journal liste, par modèle, les tables analysées et les entrées créées.

## Vérifier les serveurs JDE \{#jde-health\}

Lance immédiatement le contrôle de santé des serveurs JD Edwards au travers de Server Manager, sans attendre la planification toutes les cinq minutes, et enregistre le résultat affiché dans [Supervision → Contrôle de santé JDE](./monitoring/jde-servers.md). L'exécution échoue dès qu'une instance n'a pas réussi ses contrôles. Détails : [`nomajde-jde-health`](../nomaflow/bundled-jobs.md#nomajde-jde-health).

## Relevé de la plateforme \{#platform-snapshot\}

Conserve les chiffres du moment de la plateforme, pour en suivre l'évolution dans l'onglet **Capacité** de la [synthèse de la plateforme](./synthesis.md) : utilisateurs connectés, sessions, instances démarrées, temps de réponse et dépassements de délai des fonctions métier, requêtes en attente, processeur et mémoire utilisés par les serveurs d'entreprise et leurs kernels, heap Java des instances web et AIS (utilisé et maximum), cache, sessions, sessions bloquées, charge et taille de la base, traitements batch du jour — en erreur et en attente compris. Une ligne par chiffre dans la base de Nomajde, conservée **400 jours**.

Toutes les heures à la livraison, **désactivée** tant qu'elle n'est pas activée. Une source qui ne répond pas laisse ses chiffres hors du relevé et est nommée dans l'exécution ; l'exécution n'échoue que si rien n'a pu être lu. Lecture seule sur JD Edwards.

## Surveillance des instances \{#instances-watch\}

Surveille les instances JD Edwards au travers de Server Manager — chaque serveur d'entreprise, serveur HTML et serveur AIS — toutes les **15 minutes** à la livraison, **désactivée** tant qu'elle n'est pas activée. Tout passe par l'API REST de Server Manager : rien n'est installé sur les serveurs JD Edwards.

### Ce qui est vérifié \{#instances-watch-checks\}

Pour chaque instance : son état et, pour une instance démarrée, les contrôles de santé de la console elle-même (le port, la connexion, une application, un état…). Une instance est **saine**, **en échec** (un contrôle a échoué, avec le message de la console), **arrêtée**, ou **non contrôlée** (sa santé n'a pas pu être lue). Ce qui ne va pas est conservé 90 jours dans la base de Nomajde, et **l'exécution échoue** s'il reste un problème à la fin — le message nomme chaque instance et la raison —, si bien que l'alerte de la tâche part.

Le contrôle d'un serveur d'entreprise par la console lance un état à chaque fois : garder une planification raisonnable.

### Redémarrer et démarrer : deux questions \{#instances-watch-cure\}

La tâche peut aussi corriger. Deux questions au lancement, toutes deux à **no** à la livraison :

| Question | Avec **yes** |
|---|---|
| **Redémarrer une instance dont les contrôles de santé échouent** | Une instance en échec est arrêtée, Server Manager est interrogé jusqu'à ce qu'il la dise arrêtée, puis elle est démarrée et interrogée jusqu'à ce qu'elle fonctionne. Une instance qui ne s'arrête pas n'est pas redémarrée. |
| **Démarrer une instance trouvée arrêtée** | Une instance arrêtée est démarrée — laisser **no** quand des instances sont arrêtées volontairement. |

Chaque attente dure au plus cinq minutes. Le même redémarrage est l'action de ligne **Redémarrer cette instance** de l'écran *Instances JDE* — voir [Server Manager](./monitoring/server-manager.md).

### Garde-fous \{#instances-watch-guards\}

Un redémarrage n'est jamais répété en boucle :

- **une instance au plus par exécution**, les serveurs d'entreprise d'abord ; les autres attendent l'exécution suivante, et l'exécution l'indique ;
- une instance redémarrée ou démarrée — ou dont le redémarrage a échoué — **il y a moins d'une heure** n'est pas redémarrée une seconde fois : le redémarrage ne l'a pas réparée, l'exécution échoue et indique qu'une intervention humaine est nécessaire.

### Contrôles de santé pris en compte \{#instances-watch-checks-that-count\}

**Contrôles de santé pris en compte (vide : tous — ex. Login, Port Test, BSFN)** nomme les contrôles à suivre, séparés par des virgules. Écarter un contrôle qui échoue pour une raison qu'un redémarrage ne corrige pas — un certificat, un serveur d'états non installé : sans cela, il marquerait l'instance en échec à chaque exécution.

---

## Documents par e-mail \{#reports\}

Deux tâches produisent un document PDF — en français ou en anglais — et l'envoient par e-mail en pièce jointe. Toutes deux sont **désactivées** à la livraison : les activer une fois les paramètres d'envoi des e-mails en place, ou les lancer à la main. Les mêmes documents s'obtiennent depuis un bouton de leur page et depuis la page **Rapports**.

### Rapport de synthèse de la plateforme \{#report-platform\}

La synthèse de la plateforme sous forme de document : une synthèse, ce qui demande attention, l'architecture sur une page en paysage avec la taille de chaque serveur, la capacité, ce qui peut être amélioré, ce que dit chaque analyse — et, sur demande, la cible sur Oracle Cloud Infrastructure avec son estimation (voir [Cible OCI](./monitoring/oci-target.md)). Une source qui n'a pas répondu est nommée dans le document. Mensuel à la livraison (le 1er à 07:00), envoyé aux utilisateurs du rôle **Exploitant de la plateforme**. Le même document est **Obtenir le rapport (PDF)** sur la page [Synthèse de la plateforme](./synthesis.md).

| Paramètre | Défaut | Rôle |
|---|---|---|
| **Langue** | `fr` | `fr` ou `en`. |
| **Nom du client sur la couverture** | vide | Inscrit sur la couverture. |
| **Avec l'estimation OCI** | `no` | `yes` ajoute la cible OCI et son estimation. |

### Rapport hebdomadaire de montée de version \{#report-upgrade\}

Pas la liste des objets : **ce qui a bougé dans la semaine, et la suite** — voir [Rapport hebdomadaire](./upgrade/analysis.md#weekly-report). La tâche conserve d'abord les chiffres de la semaine, pour que chaque rapport dise ce qui a bougé depuis le précédent, puis produit le document et l'envoie aux utilisateurs du rôle **Développeur**. Chaque lundi à 07:00 à la livraison. Le même document est **Rapport hebdomadaire (PDF)** sur [Préparer la montée de version](./upgrade/analysis.md).

| Paramètre | Défaut | Rôle |
|---|---|---|
| **Langue** | `fr` | `fr` ou `en`. |
| **Path code (vide : celui analysé en dernier)** | vide | L'analyse de montée de version lue par le rapport. |
| **Nom du client sur la couverture** | vide | Inscrit sur la couverture. |

---

## Montée de version et tests \{#upgrade-tests\}

Les deux tâches de l'analyse de montée de version se lancent depuis la page **Préparer la montée de version**, avec **Charger la liste d'Oracle** et **Lancer l'analyse** — voir [Préparer la montée de version](./upgrade/analysis.md#steps). **Tests → Lancer les tests** se trouve dans le dossier Tests du menu — voir [Tests de non-régression](./tests.md#job).

## Comparer au standard \{#standard-compare\}

Compare chaque objet standard qu'un path code tient pour modifié, et chaque copie d'un objet standard, à l'objet d'Oracle d'un autre path code — `PS920`, les objets d'Oracle tels que livrés, ou un autre —, enregistrement par enregistrement, et conserve le verdict de chacun : ceux qui sont identiques et peuvent revenir au standard, ceux qui diffèrent et dans quelle mesure. Le résultat se lit sur [Retour au standard](./development/back-to-standard.md), dont le bouton **Comparer à nouveau** ouvre cette tâche avec ses valeurs déjà renseignées.

| Paramètre | Défaut | Rôle |
|---|---|---|
| **Path code à examiner** | `PD920` | Le path code dont les objets modifiés et les copies sont comparés. |
| **Path code de comparaison (PS920 : les objets d'Oracle tels que livrés — ou un autre)** | `PS920` | La référence. |

Pas de planification : la lancer au besoin, avant une montée de version par exemple. Lecture seule sur JD Edwards ; comparer à nouveau un path code remplace ce qui était conservé pour lui.

---

## Tâches AIS de JD Edwards \{#ais\}

Deux tâches accèdent à JD Edwards au travers de son serveur AIS (connecteur `ais_connection`). Absentes du menu de Nomajde, elles se lancent depuis **Nomaflow → Tâches** avec **Exécuter avec des paramètres**, ou se copient dans une tâche dédiée avec des paramètres fixes et une planification.

| Tâche | Rôle | Paramètres demandés au lancement |
|---|---|---|
| [`nomajde-ais-report`](../nomaflow/bundled-jobs.md#nomajde-ais-report) | Lance un état JD Edwards (UBE) et attend sa fin ; l'exécution échoue si l'état se termine en erreur ou reste en cours au-delà du délai. | **État**, **Version** (`XJDE0001` par défaut), **File d'attente**, **Options de traitement (JSON)**. |
| [`nomajde-ais-export`](../nomaflow/bundled-jobs.md#nomajde-ais-export) | Exporte une table ou une vue métier dans un fichier xlsx de l'exécution, avec les titres de colonnes d'AIS en en-tête ; le fichier est envoyé à la personne qui a lancé l'exécution et reste téléchargeable depuis le détail de l'exécution. | **Table** ou **Vue métier**, **Colonnes**, **Conditions (JSON)**, **Lignes max** (`5000` par défaut). |

Les mêmes appels AIS — et quelques autres : comptage de lignes, appel d'une fonction métier, exécution d'une orchestration, démarrage ou arrêt du planificateur — sont disponibles comme étapes Python d'une tâche et comme actions d'écran : voir [les étapes AIS](../nomaflow/bundled-jobs.md#ais-steps). Deux d'entre elles gardent plusieurs formulaires ouverts dans une seule session JD Edwards — un enchaînement de formulaires, une ligne d'une grille : voir [Plusieurs formulaires dans une session](./ais/services.md#flow).

---

## Qui peut les lancer \{#access\}

Une entrée s'affiche pour qui peut lancer la tâche : un rôle qui place l'entrée — ou son dossier — en **Lecture et modification**, ou qui détient la permission `job:<id>` (type de règle **Tâche** dans ses règles *Au-delà des menus*). La seule **Lecture** ne l'affiche jamais : lire ne lance rien. Chaque personne autorisée voit toutes les exécutions de la tâche, pas seulement les siennes. À la livraison, le rôle **Exploitant de la plateforme** lance *Relevé de la plateforme*, *Surveillance des instances* et *Rapport de synthèse de la plateforme* ; le rôle **Développeur** lance *Rapport hebdomadaire de montée de version* et *Comparer au standard* ; l'**Administrateur** les lance toutes — voir [Rôles prédéfinis](./overview.md#roles).
