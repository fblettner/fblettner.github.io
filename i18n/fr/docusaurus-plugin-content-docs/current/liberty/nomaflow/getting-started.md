---
title: Prise en main
description: "Une première tâche Nomaflow en quelques minutes : ouvrir la page des Tâches, créer une tâche, ajouter une étape sql_query, définir une planification, la lancer à la main et lire l'exécution."
keywords: [Nomaflow, prise en main, première tâche, sql_query, planification, exécuter, détail de l'exécution, Liberty Next]
---

# Prise en main

Une première tâche : rafraîchir chaque nuit une table de synthèse, puis la lancer à la main pour la vérifier.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 230" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="186" rx="14" fill="url(#nfs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Tâches</text>
  <rect x="760" y="28" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="42.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Filtrer…</text>
  <rect x="878" y="28" width="90" height="22" rx="5" fill="url(#nfs-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="923.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New job</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="355" height="102" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">crm-stalled-deals</text>
  <text x="252" y="112" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Signale les affaires en sommeil</text>
  <rect x="252" y="122" width="73" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="288.5" y="134.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0 8 ∗ ∗ 0-4</text>
  <rect x="333" y="122" width="63" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="364.5" y="134.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="580" y="94" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">● on</text>
  <rect x="252" y="146" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="280.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="315" y="146" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="373.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run with parameters</text>
  <rect x="605" y="74" width="355" height="102" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="617" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">sales-copy</text>
  <text x="617" y="112" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">jdedwards → warehouse</text>
  <rect x="617" y="122" width="68" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="651.0" y="134.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">30 2 ∗ ∗ ∗</text>
  <rect x="693" y="122" width="48" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="717.0" y="134.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="945" y="94" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">● on</text>
  <rect x="617" y="146" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="645.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="680" y="146" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="738.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run with parameters</text>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ New job</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre l'éditeur de tâche</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="10" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte de tâche</text>
  <text x="20" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">planification, dernier état</text>
  <line x1="210" y1="137.0" x2="240" y2="130" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run now</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'exécute aussitôt</text>
  <line x1="210" y1="217.0" x2="252" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernier échec</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clic pour le détail</text>
  <line x1="1000" y1="167.0" x2="740" y2="131" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
</svg>

---

## Avant de commencer \{#before\}

- Un compte **superutilisateur** — les pages des Tâches leur sont réservées.
- Un connecteur SQL avec une **requête d'écriture** qui fait le travail, par exemple `daily_summary_refresh` (`INSERT … SELECT …`, `REFRESH MATERIALIZED VIEW …`, `CALL …`). Une étape appelle une requête nommée d'un connecteur, pas du SQL saisi dans la tâche. Voir [Créer une requête personnalisée](../framework/build/queries/create-custom.md).

---

## 1 — Ouvrir la page des Tâches \{#open\}

Ouvrir **Tâches** depuis le menu Nomaflow (adresse `/nomaflow`). Chaque tâche est une carte ; la barre d'outils propose **+ Nouvelle tâche** et **Planning**. Voir [Page des Tâches](./jobs/catalog.md).

## 2 — Créer la tâche \{#create\}

**+ Nouvelle tâche**. Dans la section **Tâche** : **Identifiant** `daily-summary`, une **Description**, l'étiquette `reporting`, **Activée**.

## 3 — Ajouter une étape \{#step\}

Dans **Étapes**, la barre **Ajouter une étape :** : cliquer sur `sql_query`. Donner un **Nom de l'étape** (`refresh-summary`), choisir le **Connecteur**, puis la **Requête** `daily_summary_refresh`.

## 4 — Définir la planification \{#schedule\}

Dans la section **Tâche** : **Planification (cron)** `0 2 * * *`, **Fuseau horaire** `Europe/Paris`. **Prochaines exécutions** liste les cinq prochaines nuits — les vérifier. Puis **Enregistrer** en haut : la tâche apparaît dans la page des Tâches avec sa prochaine exécution.

## 5 — La lancer à la main \{#run\}

Sur la carte, **▶ Exécuter**. La carte montre l'exécution en cours, puis *dernière SUCCEEDED* ; un clic ouvre le détail de l'exécution : le résumé, l'étape avec son état, les lignes affectées et le journal. Voir [Historique des exécutions](./runs/history.md).

## 6 — Être prévenu en cas d'échec \{#notify\}

Dans **Paramètres → Notifications**, ajouter une règle : déclencheur *A job event*, tâche `daily-summary`, événements `failure` et `missed`, canal `email`, destinataire `role:ops`. Voir [Notifications](./notifications.md).

---

## Et ensuite \{#next\}

- D'autres types d'étapes — charger des fichiers, copier des tables, appeler une API : [Étapes](./steps.md).
- Lancer la même tâche avec d'autres paramètres selon plusieurs planifications : [Préréglages planifiables](./jobs/schedules.md#schedulable-presets).
- Des modèles prêts à adapter : [Recettes](./workflows/scheduled-sync.md).
