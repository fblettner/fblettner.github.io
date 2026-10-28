---
title: Présentation de Nomaflow
description: "Nomaflow est le planificateur de tâches intégré à Liberty Next : des tâches planifiées par cron composées d'étapes (SQL, chargements de fichiers, Python, HTTP, LDAP, autres tâches), des nouvelles tentatives, un historique avec journaux, la détection des planifications manquées et des notifications — sans processus ni broker séparé."
keywords: [Nomaflow, planificateur, tâches, exécutions, ETL, cron, chargement de fichier, Liberty Next]
---

# Présentation de Nomaflow

**Nomaflow** est le planificateur de tâches intégré à Liberty Next. Il s'exécute dans le serveur — pas de processus séparé, pas de broker de messages — et utilise les mêmes connecteurs que les écrans et les tableaux de bord. Une tâche est une suite d'**étapes** exécutées dans l'ordre, selon une planification ou à la demande ; chaque exécution est enregistrée avec ses étapes et son journal.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="10" y="14" width="1180" height="140" rx="14" fill="url(#nfo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="30" y="44" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow — dans le serveur Liberty Next</text>
  <rect x="30" y="70" width="200" height="64" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="130.0" y="99.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · Tâches</text>
  <text x="130.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">jobs.toml · page Tâches</text>
  <line x1="230" y1="102" x2="255" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nfo-flow)"/>
  <rect x="255" y="70" width="200" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="355.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · Déclencheurs</text>
  <text x="355.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · préréglages · Exécuter</text>
  <line x1="455" y1="102" x2="480" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nfo-flow)"/>
  <rect x="480" y="70" width="200" height="64" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="580.0" y="99.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · Étapes</text>
  <text x="580.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">SQL · file · Python · HTTP · LDAP</text>
  <line x1="680" y1="102" x2="705" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nfo-flow)"/>
  <rect x="705" y="70" width="200" height="64" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="805.0" y="99.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · Exécutions</text>
  <text x="805.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">états · étapes · journal</text>
  <line x1="905" y1="102" x2="930" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nfo-flow)"/>
  <rect x="930" y="70" width="200" height="64" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="1030.0" y="99.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5 · Notifications</text>
  <text x="1030.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">cloche · e-mail · action</text>
  <rect x="220" y="190" width="300" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="230" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteurs et pools</text>
  <text x="230" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les mêmes requêtes nommées que les écrans</text>
  <line x1="520" y1="207.0" x2="600" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
  <rect x="650" y="190" width="330" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="660" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions manquées ou en échec</text>
  <text x="660" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enregistrées et signalées aux personnes concernées</text>
  <line x1="980" y1="207.0" x2="1020" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
</svg>

---

## À quoi il sert \{#uses\}

| Besoin | Avec Nomaflow |
|---|---|
| Copier chaque nuit une table d'une base de production vers une base de reporting | Une étape `sql_copy`, planifiée à 02:00. Voir [Synchronisation planifiée](./workflows/scheduled-sync.md). |
| Charger des classeurs mensuels dans une table de faits, en rejouant un mois erroné | Une étape `file_load` en mode `replace_partition`, avec une requête de refus pour les périodes clôturées. Voir [Étapes](./steps.md#file-load). |
| Traiter les fichiers déposés dans un dossier partagé | `file_load` avec un dossier surveillé : chaque fichier est chargé, puis déplacé dans `done/` ou `failed/`. |
| Récupérer des données d'une API REST | Une étape `python` qui appelle l'API et écrit par une requête d'un connecteur. Voir [Récupération d'API](./workflows/api-pull.md). |
| Reproduire les utilisateurs d'Active Directory dans une table | Une étape `ldap_sync`. |
| Purger les anciennes lignes au-delà d'un seuil | Une étape `python` qui compte puis supprime. Voir [Nettoyage conditionnel](./workflows/conditional-cleanup.md). |
| Lancer un traitement ponctuel après une livraison | Une tâche sans planification, lancée avec **Exécuter**. |
| Être prévenu quand une tâche échoue ou ne s'exécute pas | Une règle de notification sur `failure` et `missed`. Voir [Notifications](./notifications.md). |

---

## Sa place dans Liberty Next \{#framework\}

| Élément de Liberty Next | Utilisé par Nomaflow pour |
|---|---|
| Connecteurs et pools | Atteindre les bases et les API, par les mêmes requêtes nommées et endpoints que les écrans. |
| `jobs.toml` | Les tâches, leurs préréglages et les politiques — modifiés depuis les pages des Tâches, transportés par les packages et par les applications sous licence. |
| La base du framework | L'historique des exécutions. |
| Les secrets chiffrés | Les mots de passe des pools ; les autres secrets s'écrivent `${VARIABLE}` dans `jobs.toml`. |
| Les notifications | Prévenir des exécutions en échec, manquées ou longues. |
| L'accès superutilisateur | Les pages des Tâches et leur API sont réservées aux superutilisateurs. |

---

## Ce qu'il ne fait pas \{#limits\}

- **Pas de graphe de tâches.** Les étapes s'exécutent l'une après l'autre ; une tâche peut en lancer une autre (`call_job`) et l'attendre, mais rien ne s'exécute en parallèle dans une tâche.
- **Un seul serveur.** Le planificateur s'exécute dans le processus du serveur : une seule instance.
- **Pas de rattrapage automatique.** Une heure manquée pendant un arrêt du serveur est enregistrée **MISSED** et peut être notifiée ; la relancer reste une décision manuelle.
- **Pas de bouton de rejeu.** Pour relancer avec les mêmes valeurs, les enregistrer comme préréglage ou les choisir de nouveau dans **Exécuter avec des paramètres**.

---

## Pour continuer \{#next\}

| Page | Pour… |
|---|---|
| [Prise en main](./getting-started.md) | Construire une première tâche planifiée. |
| [Concepts](./concepts.md) | Comprendre tâches, étapes, planifications, déclencheurs, exécutions et paramètres. |
| [Page des Tâches](./jobs/catalog.md) · [Créer une tâche](./jobs/create.md) · [Planifications](./jobs/schedules.md) | Travailler avec les tâches. |
| [Étapes](./steps.md) | Connaître chaque type d'étape. |
| [Historique](./runs/history.md) · [Dépannage](./runs/troubleshoot.md) | Lire et corriger les exécutions. |
| [Étapes Python personnalisées](./custom-python.md) | Écrire sa propre étape. |
| [Administration](./administration.md) | Réglages, rétention, redémarrage. |
