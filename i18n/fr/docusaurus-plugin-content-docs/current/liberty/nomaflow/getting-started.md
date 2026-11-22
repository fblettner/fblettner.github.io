---
title: Prise en main
description: "Une première tâche Nomaflow en quelques minutes : ouvrir la page des Tâches, créer une tâche, ajouter une étape sql_query, définir une planification, la lancer à la main et lire l'exécution."
keywords: [Nomaflow, prise en main, première tâche, sql_query, planification, exécuter, détail de l'exécution, Liberty Next]
---

# Prise en main

Une première tâche : rafraîchir chaque nuit une table de synthèse, puis la lancer à la main pour la vérifier.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 462" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfgs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfgs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfgs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfgs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="422" rx="14" fill="url(#nfgs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle tâche</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Paramètres de la tâche + le pipeline d'étapes</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="304.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Retour aux tâches</text>
  <text x="969" y="101" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">modifications non enregistrées</text>
  <rect x="979" y="86" width="101" height="22" rx="5" fill="url(#nfgs-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1029.5" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="122" width="470" height="300" rx="10" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <line x1="254" y1="140" x2="702" y2="140" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="162" x2="702" y2="162" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="184" x2="702" y2="184" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="206" x2="702" y2="206" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="228" x2="702" y2="228" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="250" x2="702" y2="250" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="272" x2="702" y2="272" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="294" x2="702" y2="294" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="316" x2="702" y2="316" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="338" x2="702" y2="338" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="360" x2="702" y2="360" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="382" x2="702" y2="382" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="404" x2="702" y2="404" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <rect x="614" y="132" width="84" height="22" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">−</text>
  <text x="656" y="147" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="684" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">+</text>
  <rect x="256" y="170" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="270" y="187" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="284" y="187" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début</text>
  <line x1="330" y1="183" x2="356" y2="183" stroke="#334155" strokeWidth="2"/>
  <path d="M354,179 L360,183 L354,187 Z" fill="#334155"/>
  <circle cx="343.0" cy="183" r="8" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="343.0" y="186.5" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="362" y="159" width="150" height="48" rx="9" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <rect x="359" y="156" width="156" height="54" rx="11" fill="none" stroke="rgba(74,158,255,0.30)" strokeWidth="3"/>
  <text x="372" y="173" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXÉCUTER UNE REQUÊTE</text>
  <text x="372" y="187" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refresh-summary</text>
  <text x="372" y="200" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">reporting.daily_summary_ref…</text>
  </g>
  <line x1="514" y1="183" x2="540" y2="183" stroke="#334155" strokeWidth="2"/>
  <path d="M538,179 L544,183 L538,187 Z" fill="#334155"/>
  <circle cx="527.0" cy="183" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="527.0" y="186.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="546" y="170" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="187" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="574" y="187" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fin</text>
  <rect x="323.0" y="218" width="172" height="200" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="335.0" y="237" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Copier une table</text>
  <rect x="327.0" y="243" width="164" height="18" rx="4" fill="rgba(74,158,255,0.18)"/>
  <text x="335.0" y="256" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Exécuter une requête</text>
  <text x="335.0" y="275" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Exécuter une fonction</text>
  <text x="335.0" y="294" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Lire un annuaire</text>
  <text x="335.0" y="313" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Appeler une adresse</text>
  <text x="335.0" y="332" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Lancer un autre traitement</text>
  <text x="335.0" y="351" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Charger un fichier</text>
  <text x="335.0" y="370" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Exporter vers un fichier</text>
  <text x="335.0" y="389" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Produire un rapport</text>
  <text x="335.0" y="408" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Envoyer un message</text>
  <line x1="343.0" y1="191" x2="343.0" y2="218" stroke="#4a9eff" strokeWidth="1" strokeDasharray="3 3"/>
  <rect x="724" y="122" width="356" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="738" y="134" width="109" height="16" rx="4" fill="#4ade80" fillOpacity="0.14" stroke="#4ade80" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="745" y="145.5" fill="#4ade80" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter une requête</text>
  <text x="855" y="146" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">refresh-summary</text>
  <text x="738" y="172" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NOM DE L'ÉTAPE</text>
  <rect x="738" y="177" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="191.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">refresh-summary</text>
  <rect x="738" y="208" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="755" y="217" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Si cette étape échoue, exécuter quand même les suivantes (…)</text>
  <rect x="738" y="226" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="755" y="235" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Désactivée pour cette installation — ne s'exécute jamais (…)</text>
  <text x="738" y="265" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="738" y="270" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="284.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">reporting</text>
  <text x="886" y="284.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="906" y="265" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUÊTE</text>
  <rect x="906" y="270" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="916" y="284.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">daily_summary_refresh</text>
  <text x="1054" y="284.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="738" y="319" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="738" y="325" width="126" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="801.0" y="338.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un paramètre</text>
  <text x="738" y="371" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Un clic sur Début ramène les réglages de la tâche : identifiant, planning, Activée.</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les réglages de la tâche</text>
  <line x1="200" y1="127.0" x2="260" y2="183" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfgs-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Le + de la liaison</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre la liste des types</text>
  <line x1="200" y1="247.0" x2="337.0" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfgs-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Choisir Exécuter une requête</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la carte apparaît à sa place</text>
  <line x1="200" y1="347.0" x2="323.0" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfgs-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">4 · Enregistrer</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrit jobs.toml, retour à la liste</text>
  <line x1="1120" y1="93.0" x2="1080" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfgs-arrow)"/>
  <rect x="1120" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · Connecteur et requête</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une requête nommée, pas du SQL</text>
  <line x1="1120" y1="247.0" x2="1066" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfgs-arrow)"/>
</svg>

---

## Avant de commencer \{#before\}

- Un compte **superutilisateur**, ou un rôle qui a reçu *Créer et modifier les tâches* (`nomaflow:edit`) — voir [Administration](./administration.md#permissions).
- Un connecteur SQL avec une **requête d'écriture** qui fait le travail, par exemple `daily_summary_refresh` (`INSERT … SELECT …`, `REFRESH MATERIALIZED VIEW …`, `CALL …`). Une étape appelle une requête nommée d'un connecteur, pas du SQL saisi dans la tâche. Voir [Créer une requête personnalisée](../framework/build/queries/create-custom.md).

---

## 1 — Ouvrir la page des Tâches \{#open\}

Ouvrir **Exploitation → Tâches** dans le menu Nomaflow (adresse `/nomaflow`). Chaque tâche occupe une ligne, groupée par application ; la barre d'outils propose **Nouvelle tâche**, **Planning** et **Recharger**. Voir [Page des Tâches](./jobs/catalog.md).

## 2 — Créer la tâche \{#create\}

**Nouvelle tâche** ouvre l'éditeur sur un flux vide — **Début**, **Fin** — avec les réglages de la **Tâche** à côté : **Identifiant** `daily-summary`, une **Description**, l'étiquette `reporting`, **Activée**.

## 3 — Ajouter une étape \{#step\}

Cliquer sur le **+** de la liaison entre **Début** et **Fin**, puis sur *Exécuter une requête* (`sql_query`) dans la liste : la carte de l'étape apparaît dans le flux, ses champs à côté. Lui donner un **Nom de l'étape** (`refresh-summary`), choisir le **Connecteur**, puis la **Requête** `daily_summary_refresh`.

## 4 — Définir la planification \{#schedule\}

Un clic sur **Début** ramène aux réglages de la tâche : sous **Planification (cron)**, choisir *Certains jours, à heure fixe*, `à` 02:00 et aucun jour — *chaque jour à 02:00*, enregistré sous la forme `0 2 * * *` ; **Fuseau horaire** `Europe/Paris`. **Prochaines exécutions** liste les cinq prochaines nuits — les vérifier. Puis **Enregistrer** en haut : la tâche est écrite, et la page des Tâches s'ouvre avec la tâche et sa planification.

## 5 — La lancer à la main \{#run\}

Sur la ligne de la tâche, **Exécuter** (▶). La ligne affiche l'état de l'exécution, puis `SUCCEEDED` ; un clic sur cet état ouvre le détail de l'exécution : le résumé, l'étape avec son état, les lignes affectées et le journal. Voir [Historique des exécutions](./runs/history.md).

## 6 — Être prévenu en cas d'échec \{#notify\}

Dans **Liberty Next → Logique → Notifications**, ajouter une règle : déclencheur *A job event*, tâche `daily-summary`, événements `failure` et `missed`, canal `email`, destinataire `role:ops`. Voir [Notifications](./notifications.md).

---

## Et ensuite \{#next\}

- D'autres types d'étapes — charger des fichiers, copier des tables, appeler une API : [Étapes](./steps.md).
- Lancer la même tâche avec d'autres paramètres selon plusieurs planifications : [Préréglages planifiables](./jobs/schedules.md#schedulable-presets).
- Des modèles prêts à adapter : [Recettes](./workflows/scheduled-sync.md).
