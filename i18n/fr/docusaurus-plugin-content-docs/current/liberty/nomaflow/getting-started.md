---
title: Démarrage rapide
description: "Construisez votre première tâche planifiée Nomaflow en dix minutes — ouvrez la page Tâches, créez une tâche, ajoutez une étape SQL, définissez une planification cron, observez la première exécution arriver dans l'historique."
keywords: [Nomaflow, démarrage rapide, première tâche, planificateur, cron, étape SQL, historique des exécutions, Liberty Framework]
---

# Démarrage rapide

Ce pas à pas construit votre première tâche Nomaflow — un simple **rafraîchissement nocturne de base de données** — en une dizaine de minutes. À la fin, vous disposerez d'une tâche qui se déclenche selon une planification, exécute une étape sur un connecteur, enregistre son historique d'exécutions et diffuse ses logs en direct. Tout se passe dans la page *Nomaflow* ; aucune édition TOML n'est requise.

L'exemple utilise une étape SQL parce que toute installation possède un connecteur permettant de la tester. Le même flux s'applique aux étapes Python, HTTP et LDAP Sync — seuls les champs du formulaire diffèrent.

---

## Avant de commencer

Vérifiez que vous disposez de :

| Prérequis | Comment vérifier |
|---|---|
| Le framework est en cours d'exécution. | Ouvrez l'application — vous parvenez à vous connecter. |
| Vous avez un connecteur cible utilisable. | Ouvrez *Paramètres → Connecteurs* — au moins un connecteur doit être listé. Le pool `default` du framework convient toujours. |
| Votre rôle dispose de la permission `job:*` (ou de `superuser`). | Si le lien *Nomaflow* est visible dans le menu, vous êtes prêt. |

Si l'un de ces points manque, le [guide de démarrage du framework](../framework/getting-started/installation.md) couvre le chemin d'installation et [Authentification → Rôles et permissions](../framework/build/secure/roles-and-permissions.md) couvre le câblage des rôles.

---

## Étape 1 — Ouvrir la page Tâches

Cliquez sur **Nomaflow** dans la navigation principale. La page qui s'ouvre est le **Catalogue des tâches** — chaque tâche déclarée, avec l'état de sa dernière exécution, le prochain déclenchement planifié et une série d'actions.

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="gs-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="320" rx="14" fill="url(#gs-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Tâches</text>
  <text x="40" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Le catalogue complet des tâches planifiées et à la demande.</text>
  <line x1="20" y1="82" x2="980" y2="82" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="100" width="120" height="28" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="100" y="118" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Nouvelle tâche</text>

  <rect x="170" y="100" width="140" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="240" y="118" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 Vue calendrier</text>

  <rect x="320" y="100" width="100" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="370" y="118" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger</text>

  <rect x="40" y="148" width="920" height="80" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="58" y="172" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">nightly-reporting-refresh</text>
  <rect x="280" y="160" width="68" height="18" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="314" y="173" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">RÉUSSI</text>
  <rect x="356" y="160" width="46" height="18" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="379" y="173" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">etl</text>
  <text x="58" y="194" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Rafraîchissement quotidien du magasin de reporting depuis la base opérationnelle.</text>
  <text x="58" y="212" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⏱ 0 2 * * *  ·  prochain : demain 02 h 00  ·  dernier : il y a 12 h  ·  3 étapes</text>

  <rect x="780" y="190" width="76" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="818" y="205" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Lancer</text>
  <rect x="862" y="190" width="56" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="890" y="205" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">activé</text>

  <rect x="40" y="244" width="920" height="80" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1" strokeDasharray="3,3"/>
  <text x="500" y="288" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">(emplacement vide — votre première tâche viendra ici)</text>
</svg>

La barre d'outils supérieure réunit les trois actions que vous utiliserez le plus souvent : **Nouvelle tâche** (ouvre le constructeur de tâches), **Vue calendrier** (un calendrier des prochains déclenchements) et **Recharger** (rafraîchit le catalogue).

---

## Étape 2 — Créer une tâche

Cliquez sur **＋ Nouvelle tâche**. L'**éditeur de tâche** s'ouvre avec trois sections : *Identité*, *Planification* et *Étapes*.

| Champ | Valeur à saisir |
|---|---|
| **Id** | `my-first-job` (compatible URL — lettres, chiffres, traits d'union, soulignés). |
| **Description** | *« Ma première tâche Nomaflow — rafraîchit une vue de reporting. »* |
| **Tags** | `tutorial` *(optionnel — sert à grouper les tâches)*. |
| **Activée** | Laissée à on. |

Enregistrez le bloc d'identité avant d'ajouter des étapes. La tâche figure désormais dans le catalogue, mais ne fait encore rien.

---

## Étape 3 — Ajouter une étape SQL

Dans l'éditeur, cliquez sur **＋ Ajouter une étape** et sélectionnez **SQL Query** dans le menu de type.

| Champ | Valeur à saisir |
|---|---|
| **Nom** | `refresh-totals` *(utilisé comme libellé dans l'historique des exécutions)*. |
| **Type** | `sql_query`. |
| **Connecteur** | Choisissez un connecteur accessible en écriture — le `default` du framework convient pour un test de bon fonctionnement. |
| **Requête** | Une instruction courte sur votre cible — pour le pool `default` du framework, `SELECT now()` suffit à valider le câblage. |

Enregistrez l'étape. L'éditeur revient à la liste des étapes, qui en compte désormais une.

:::tip[Privilégiez une requête réelle dès que possible]
Un `SELECT now()` fait office de test, mais une tâche qui exécute une requête utile (un `REFRESH MATERIALIZED VIEW`, une mise à jour quotidienne d'un compteur, un petit `INSERT … SELECT`) produit une ligne de résultat exploitable dans l'historique.
:::

---

## Étape 4 — Définir une planification

De retour dans la section *Planification* de l'éditeur, le champ attend une **expression cron à 5 champs** (avec un 6ᵉ champ optionnel pour les secondes).

| Objectif | Cron |
|---|---|
| Toutes les minutes (idéal pour un test rapide). | `* * * * *` |
| Tous les jours à 02 h 00. | `0 2 * * *` |
| Tous les lundis à 09 h 30. | `30 9 * * 1` |
| Toutes les heures à la minute :15. | `15 * * * *` |
| Manuel uniquement (sans planification). | laissez le champ vide |

Pour un premier test, saisissez `* * * * *` et choisissez un **fuseau horaire** (par exemple `Europe/Paris`). Le champ affiche un aperçu en direct des trois prochains déclenchements, ce qui permet de vérifier l'expression avant d'enregistrer.

Enregistrez la tâche. En moins d'une minute, la première exécution apparaît dans l'historique.

---

## Étape 5 — Observer l'exécution

De retour sur la page **Tâches**, la carte de `my-first-job` affiche maintenant :

- Un badge **EN COURS** (pastille verte) tant que l'exécution est en cours.
- Un badge **RÉUSSI** ou **ÉCHEC** une fois l'exécution terminée.
- L'horodatage de **dernière exécution**, mis à jour chaque minute.

Cliquez sur le badge — il ouvre la page **Détail d'exécution** correspondante, qui affiche la chronologie des étapes, les entrées/sorties de chaque étape et le flux de logs en direct.

<svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rd-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="300" rx="14" fill="url(#rd-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Détail d'exécution · my-first-job · run_a8c…</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="80" width="280" height="220" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="56" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉTAPES</text>
  <rect x="56" y="116" width="248" height="36" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <circle cx="72" cy="134" r="6" fill="#22c55e"/>
  <text x="88" y="138" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">refresh-totals</text>
  <text x="290" y="138" fill="#22c55e" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">✓ 12 ms</text>
  <text x="56" y="180" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Début : 14 h 02 min 01 s</text>
  <text x="56" y="196" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Fin : 14 h 02 min 01 s</text>
  <text x="56" y="212" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Déclencheur : cron</text>
  <text x="56" y="228" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Statut : RÉUSSI</text>

  <rect x="340" y="80" width="620" height="220" rx="10" fill="rgba(0,0,0,0.40)" stroke="#1f2937" strokeWidth="1"/>
  <text x="356" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOGS EN DIRECT</text>
  <text x="356" y="124" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">14:02:01.083  INFO  run started · trigger=cron</text>
  <text x="356" y="140" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">14:02:01.085  INFO  step refresh-totals · type=sql_query</text>
  <text x="356" y="156" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">14:02:01.088  INFO  connector=default · 1 row affected</text>
  <text x="356" y="172" fill="#22c55e" fontSize="10" fontFamily="ui-monospace, monospace">14:02:01.090  INFO  step refresh-totals · SUCCEEDED · 5 ms</text>
  <text x="356" y="188" fill="#22c55e" fontSize="10" fontFamily="ui-monospace, monospace">14:02:01.091  INFO  run SUCCEEDED · 12 ms total</text>
</svg>

Le journal est diffusé **en direct** par Socket.IO pendant que l'exécution est en cours — fermez le navigateur, l'exécution se poursuit ; rouvrez la page, le flux de logs reprend là où vous l'aviez laissé.

---

## Étape 6 — Passer en mode manuel uniquement

Une tâche qui se déclenche chaque minute remplira vite l'historique. Une fois le câblage vérifié :

- Ouvrez l'éditeur de tâche.
- Videz le champ *Planification*.
- Enregistrez.

La tâche reste dans le catalogue et reste déclenchable via ▶ depuis la page *Tâches*, mais ne se déclenche plus d'elle-même. C'est aussi le bon mode pour les **tâches à la demande** — reconstructions, rapports, scripts ponctuels qu'un opérateur lance manuellement.

Alternativement, utilisez la **bascule d'activation** sur la carte de la tâche pour désactiver la planification sans la perdre.

---

## Étape 7 — Tenter une exécution manuelle

Cliquez sur **▶ Lancer maintenant** sur la carte de votre tâche. Trois cas de figure sont possibles :

| Ce que vous voyez | Quand |
|---|---|
| La tâche démarre immédiatement. | La tâche n'a aucun paramètre et une seule étape — il n'y a rien que l'opérateur puisse utilement configurer. |
| Une fenêtre **Exécuter avec paramètres** s'ouvre. | La tâche a des paramètres partagés, une étape Python avec op_kwargs ou plusieurs étapes. |
| Le bouton est désactivé avec un indicateur d'attente. | Une exécution précédente est encore en cours. |

La fenêtre *Exécuter avec paramètres* est un élément puissant de l'interface — elle permet à l'opérateur de surcharger pour un déclenchement précis ce qui sinon nécessiterait une modification de la tâche. Le pas à pas complet est dans [Tâches → Catalogue](./jobs/catalog.md#run-with-parameters).

---

## Ce que vous venez de construire

| Comportement | D'où il vient |
|---|---|
| La tâche se déclenche selon une planification. | L'expression cron de la section *Planification*. |
| Le framework la prend en compte sans redémarrage. | L'enregistrement dans l'éditeur de tâche appelle automatiquement `POST /admin/reload`. |
| L'exécution arrive dans l'historique. | Chaque déclenchement crée une ligne `run`, chaque étape une ligne `step_run`. |
| Vous pouvez relancer depuis l'interface. | **▶ Lancer maintenant** passe par le même moteur d'étapes que le déclenchement cron. |
| Les logs sont diffusés en direct. | Le runner publie sur un canal Socket.IO auquel s'abonne la page *Détail d'exécution*. |

Vous n'avez écrit aucun TOML, ouvert aucun terminal ni redémarré aucun service. La boucle complète — définir, planifier, exécuter, observer — réside dans l'interface Paramètres.

---

## Pour aller plus loin

| Vous voulez… | À lire |
|---|---|
| Construire le modèle mental — qu'est-ce qu'une tâche, une exécution, une étape, une planification ? | [Concepts](./concepts.md). |
| Maîtriser le catalogue et la fenêtre d'exécution avec paramètres. | [Tâches → Catalogue](./jobs/catalog.md). |
| Parcourir l'éditeur complet de tâches, champ par champ. | [Tâches → Créer une tâche](./jobs/create.md). |
| Choisir le bon type d'étape. | [Étapes](./steps.md). |
| Voir trois schémas de bout en bout. | [Recettes de workflows](./workflows/scheduled-sync.md). |
| Configurer les alertes Slack / e-mail / webhook en cas d'échec. | [Notifications](./notifications.md). |
