---
title: Concepts
description: "Le vocabulaire de Nomaflow : tâche, étape, planification, préréglage, déclencheur, exécution, paramètres, politique de réessai, niveau de journal, alertes — ce qu'est chacun et où il se règle."
keywords: [Nomaflow, concepts, tâche, étape, planification, préréglage, déclencheur, exécution, paramètres, op_kwargs, réessai, niveau de journal, Liberty Next]
---

# Concepts

---

## Vue d'ensemble

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="30" width="760" height="260" rx="14" fill="url(#dgn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="50" width="160" height="50" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="320.0" y="72.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Planification</text>
  <text x="320.0" y="87.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · preset</text>
  <rect x="240" y="120" width="160" height="50" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="320.0" y="142.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Manuel</text>
  <text x="320.0" y="157.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now · parameters</text>
  <rect x="240" y="190" width="160" height="50" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="320.0" y="212.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">call_job</text>
  <text x="320.0" y="227.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">depuis une autre tâche</text>
  <rect x="460" y="100" width="170" height="90" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="545.0" y="142.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tâche</text>
  <text x="545.0" y="157.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">étapes, reprises, alertes</text>
  <line x1="400" y1="75" x2="460" y2="145" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <line x1="400" y1="145" x2="460" y2="145" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <line x1="400" y1="215" x2="460" y2="145" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <rect x="690" y="60" width="260" height="56" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="820.0" y="85.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécution</text>
  <text x="820.0" y="100.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">QUEUED → RUNNING → SUCCEEDED / FAILED</text>
  <rect x="690" y="140" width="260" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="820.0" y="165.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécutions d'étapes</text>
  <text x="820.0" y="180.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">état, tentative, lignes, journal</text>
  <rect x="690" y="220" width="260" height="50" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="820.0" y="242.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="820.0" y="257.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">failure · succeeded · missed</text>
  <line x1="630" y1="130" x2="690" y2="88" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <line x1="820" y1="116" x2="820" y2="140" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <line x1="820" y1="196" x2="820" y2="220" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgn-flow)"/>
  <rect x="10" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois déclencheurs</text>
  <text x="20" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">même historique</text>
  <line x1="210" y1="277.0" x2="320" y2="241" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgn-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Historique</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conservé en base</text>
  <line x1="1000" y1="77.0" x2="950" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgn-arrow)"/>
</svg>

---

## Tâche \{#job\}

Une **tâche** est une entrée de `jobs.toml` : un **identifiant** (lettres, chiffres, `-`, `_` ; figé après création), une description, des étiquettes, une planification et un fuseau horaire, un switch d'activation, des paramètres partagés, des préréglages, une politique de réessai, des alertes, un niveau de journal, un délai maximal — et une suite ordonnée d'étapes. Elle se modifie dans les pages des Tâches ([Créer une tâche](./jobs/create.md)).

## Étape \{#step\}

Une **étape** est une unité de travail, de l'un des dix types : `sql_query`, `sql_copy`, `file_load`, `file_export`, `python`, `http`, `ldap_sync`, `call_job`, `report`, `notify` ([Étapes](./steps.md)). Les étapes s'exécutent dans l'ordre ; une étape en échec arrête la tâche, et les suivantes sont enregistrées comme sautées.

## Planification \{#schedule\}

Un **cron** à cinq zones évalué dans le **fuseau horaire** de la tâche. Les jours de la semaine se comptent à partir de 0 = lundi : les écrire en toutes lettres (`mon-fri`). Sans planification, la tâche ne s'exécute qu'à la demande ([Planifications](./jobs/schedules.md)).

## Préréglage \{#preset\}

Un jeu de valeurs d'exécution enregistré — paramètres partagés, arguments d'étapes, étapes désactivées, niveau de journal — créé depuis **Exécuter avec des paramètres**. Un préréglage peut avoir sa propre planification : une tâche, plusieurs planifications avec des entrées différentes.

## Déclencheur \{#trigger\}

Ce qui a lancé une exécution : `scheduled` (la planification de la tâche ou d'un préréglage) ou `manual` (un utilisateur, enregistré par son nom). Une tâche lancée par une étape `call_job` enregistre `call_job:<tâche>@<exécution>` comme origine.

## Exécution \{#run\}

Un passage d'une tâche, avec un identifiant, son déclencheur, son début et sa fin, les lignes affectées, ses étapes et son journal. États : `QUEUED`, `RUNNING`, `SUCCEEDED`, `FAILED`, `CANCELED`, et `MISSED` pour une heure planifiée qui ne s'est pas exécutée ([Historique des exécutions](./runs/history.md)).

## Paramètres \{#parameters\}

| Niveau | Où | S'applique à |
|---|---|---|
| Paramètres partagés | La tâche | Les arguments de chaque étape `python`. |
| Arguments d'étape (`op_kwargs`) | L'étape | Cette étape — ils l'emportent sur les paramètres partagés. |
| Exécuter avec des paramètres | Une exécution | Cette exécution seulement ; `jobs.toml` n'est pas modifié. |

`file_load` lit les paramètres d'exécution sous la forme `${params.x}` dans son chemin et ses constantes ; `sql_query` prend ses propres `params`.

## Politique de réessai \{#retry\}

`attempts` (tentatives au total, 1 = aucune nouvelle tentative), `backoff` (`fixed` ou `exponential`), `base_seconds`. S'applique à chaque étape.

## Niveau de journal \{#log-level\}

`WARNING`, `INFO` (défaut) ou `DEBUG` (ajoute le SQL de chaque requête). Le niveau de la tâche vaut pour les exécutions planifiées ; une exécution manuelle choisit le sien.

## Alertes \{#alerts\}

Une tâche peut prévenir ses **destinataires** quand une exécution échoue, sans aucune règle. Tout le reste — succès, annulation, planification manquée, exécution longue, un ensemble de tâches — passe par les règles de notification ([Notifications](./notifications.md)).

---

## Un exemple \{#example\}

La tâche `sales-load` a trois étapes : `file_load` (charger le fichier du mois), `sql_query` (rafraîchir les agrégats), `http` (appeler un service en aval). Sa planification est `0 2 * * *` en `Europe/Paris` ; un préréglage *fin-de-mois* la lance selon `0 6 1 * *` avec `period` égal au mois précédent. Chaque nuit, une exécution est enregistrée ; si le serveur était arrêté à 02:00, une exécution `MISSED` est enregistrée et le rôle `ops` reçoit un e-mail de la règle sur `missed`.
