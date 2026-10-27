---
title: Administration
description: "Faire fonctionner Nomaflow sur un serveur : le stockage des exécutions et des fichiers, une seule instance, le comportement au redémarrage, la rétention de l'historique, le tampon du journal, l'accès aux pages des Tâches, la sauvegarde et l'état de santé."
keywords: [Nomaflow, administration, réglages jobs, rétention, journal d'exécution, redémarrage, reprise, superutilisateur, sauvegarde, Liberty Next]
---

# Administration

Nomaflow s'exécute dans le serveur Liberty Next : son planificateur, son moteur d'exécution et son historique ne demandent aucun service séparé.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nad-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nad-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nad-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nad-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="270" rx="14" fill="url(#nad-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="40" width="460" height="230" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="62" fill="#4a9eff" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Serveur Liberty Next (un processus)</text>
  <rect x="260" y="80" width="130" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="325.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Planificateur</text>
  <text x="325.0" y="120.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · presets</text>
  <rect x="410" y="80" width="130" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="475.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuteur</text>
  <text x="475.0" y="120.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">étapes, reprises</text>
  <rect x="560" y="80" width="120" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="620.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Pages Tâches</text>
  <text x="620.0" y="120.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">superuser</text>
  <line x1="390" y1="108" x2="410" y2="108" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nad-flow)"/>
  <rect x="260" y="170" width="200" height="70" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="360.0" y="202.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Historique</text>
  <text x="360.0" y="217.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">nomaflow_job_runs …</text>
  <rect x="480" y="170" width="200" height="70" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="580.0" y="202.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fichiers de travail</text>
  <text x="580.0" y="217.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">.nomaflow/files · 200 MB</text>
  <line x1="475" y1="136" x2="360" y2="170" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nad-flow)"/>
  <line x1="475" y1="136" x2="580" y2="170" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#nad-flow)"/>
  <rect x="740" y="80" width="220" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="850.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">plugins/nomaflow/jobs.toml</text>
  <text x="850.0" y="120.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">modifié depuis les Tâches</text>
  <line x1="740" y1="108" x2="680" y2="108" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#nad-flow)"/>
  <rect x="740" y="170" width="220" height="70" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="850.0" y="202.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Redémarrage</text>
  <text x="850.0" y="217.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">en cours → FAILED, trous → MISSED</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Instance unique</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">deux doubleraient les tâches</text>
  <line x1="210" y1="77.0" x2="240" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nad-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Historique en base</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">5 000 lignes de journal</text>
  <line x1="210" y1="217.0" x2="260" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nad-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Après redémarrage</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pas de rattrapage auto</text>
  <line x1="1000" y1="217.0" x2="960" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nad-arrow)"/>
</svg>

---

## Stockage et limites \{#settings\}

| Élément | Valeur |
|---|---|
| Historique des exécutions | Dans la base de données du framework, cinq tables : `nomaflow_job_runs`, `nomaflow_step_runs`, `nomaflow_run_logs`, `nomaflow_run_overrides`, `nomaflow_step_run_extras`. Le serveur les crée et les complète au démarrage. |
| Tâches | Le fichier des tâches `plugins/nomaflow/jobs.toml`, à côté du dossier de configuration — modifié depuis les pages des Tâches. |
| Journal d'exécution | Les 5 000 dernières lignes de chaque exécution sont conservées. |
| Fichiers | Les fichiers envoyés par **Run with parameters** et les fichiers de rejets des étapes `file_load` sont rangés dans `.nomaflow/files`, à côté de la configuration. |
| Taille d'envoi | 200 Mo au plus par fichier. |

---

## Une seule instance \{#one-instance\}

Exécuter **une seule** instance de Liberty Next : le planificateur se déclenche depuis le processus du serveur, sans verrou partagé entre instances ; deux instances lanceraient chaque tâche deux fois. Voir [Liste de contrôle de production](../installation/production.md#replicas).

---

## Redémarrage \{#restart\}

- Les exécutions en cours à l'arrêt du serveur sont clôturées **FAILED** avec *abandoned: process restart during run* au démarrage suivant.
- Les heures planifiées tombées pendant l'arrêt sont enregistrées **MISSED** — voir [Planifications manquées](./jobs/schedules.md#missed). Elles ne sont pas relancées d'elles-mêmes : les lancer à la main si besoin.
- Tâches, préréglages et politiques sont dans `jobs.toml` ; l'historique est en base — les deux survivent au redémarrage.

---

## Rétention de l'historique \{#retention\}

Le panneau **Run history retention** de la page des Tâches (libellés en anglais) :

| Réglage | Défaut | Signification |
|---|---|---|
| **Auto-sweep** | activé | Le nettoyage récurrent. |
| **Days kept** | 30 | Les exécutions terminées plus anciennes sont supprimées, avec leurs étapes et leurs journaux. |
| **Cap per job** | 100 | Chaque tâche garde au plus ce nombre d'exécutions récentes. |
| **Sweep interval (min)** | 60 | La fréquence du nettoyage. |

**Clean now** le lance aussitôt. La politique s'enregistre dans `jobs.toml`, sous `[meta.retention]`.

---

## Journal d'exécution \{#run-log\}

Chaque exécution collecte ses lignes de journal en mémoire — loggers `liberty.*`, lignes `nomaflow` et espaces de noms enregistrés par les plugins — et les écrit en base à sa fin. Le niveau est celui de l'exécution : `WARNING`, `INFO` ou `DEBUG` (`DEBUG` ajoute le SQL de chaque requête). Le journal du serveur reçoit les mêmes lignes.

---

## Qui peut utiliser Nomaflow \{#permissions\}

Les pages des Tâches et leur API (`/admin/jobs/…`) sont réservées aux **superutilisateurs**. Les autres utilisateurs sont informés des tâches par les règles de notification — voir [Notifications](./notifications.md).

---

## Sauvegarde \{#backup\}

`./liberty backup` (Docker) ou `liberty-ops backup` (Python) sauvegarde la configuration — `jobs.toml` compris — et la base qui contient l'historique. Voir [Exploitation](../installation/operations.md#backup).

---

## État de santé \{#health\}

Le `/ready` du serveur répond quand la base du framework — qui contient l'historique — est joignable. La page des Tâches montre le dernier état de chaque tâche ; une règle de notification sur `failure` et `missed` est la supervision la plus simple.

---

## Tâches courantes \{#tasks\}

| Tâche | Comment |
|---|---|
| Suspendre une tâche | Son switch **activée** dans la page des Tâches. |
| Déplacer une tâche vers un autre serveur | La transporter dans un package — voir [Packages](../framework/build/packages.md). Les connecteurs et requêtes utilisés doivent y exister. |
| Analyser une tâche sans arrêter les autres | La désactiver, la lancer à la main en `DEBUG`. |
