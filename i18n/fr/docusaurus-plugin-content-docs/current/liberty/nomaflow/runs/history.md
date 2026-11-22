---
title: Historique des exécutions
description: "Où sont enregistrées les exécutions Nomaflow et comment les lire : la page Exécutions (recherche, filtres, effectifs par état, exécutions par jour, avancement en direct), les états d'exécution, la page Détail de l'exécution (résumé, paramètres de l'exécution, étapes, fichier envoyé, journal avec Suivre et Télécharger), et la durée de conservation de l'historique."
keywords: [Nomaflow, historique des exécutions, détail de l'exécution, états, journal, MISSED, CANCELED, rétention, Liberty Next]
---

# Historique des exécutions

Chaque exécution d'une tâche — planifiée, manuelle, lancée par une autre tâche ou manquée — est enregistrée avec ses étapes et son journal.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 438" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfrn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfrn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfrn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfrn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="398" rx="14" fill="url(#nfrn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">∿</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Toutes les exécutions, les plus récentes en premier</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="290" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="101.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  Chercher une tâche, un utilisateur, une erreur…</text>
  <rect x="540" y="86" width="150" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="101.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Toutes les tâches</text>
  <text x="678" y="102" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="700" y="86" width="130" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="710" y="101.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">7 derniers jours</text>
  <text x="818" y="102" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="1004" y="86" width="76" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="101.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger</text>
  <rect x="942" y="89" width="63" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="973.5" y="101.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">en direct</text>
  <rect x="240" y="120" width="58" height="24" rx="12" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269" y="136" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout 214</text>
  <rect x="306" y="120" width="79" height="24" rx="12" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="314" y="124" width="48" height="16" rx="3" fill="#4a9eff" fillOpacity="0.12" stroke="#4a9eff" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="338.0" y="135.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="375" y="136" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <rect x="393" y="120" width="74" height="24" rx="12" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="401" y="124" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="422.5" y="135.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">FAILED</text>
  <text x="457" y="136" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <rect x="475" y="120" width="99" height="24" rx="12" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="483" y="124" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="512.0" y="135.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="564" y="136" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">205</text>
  <rect x="582" y="120" width="74" height="24" rx="12" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="590" y="124" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="611.5" y="135.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">MISSED</text>
  <text x="646" y="136" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="162" width="840" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="179" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Aujourd'hui</text>
  <text x="1068" y="179" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3 exécutions</text>
  <rect x="240" y="188" width="840" height="42" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="195" width="48" height="16" rx="3" fill="#4a9eff" fillOpacity="0.12" stroke="#4a9eff" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="276.0" y="206.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="352" y="207" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">10:42</text>
  <text x="420" y="207" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-collect</text>
  <rect x="489.38" y="195" width="54" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="496.38" y="206.5" fill="#4a9eff" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">apps_id 2</text>
  <text x="740" y="207" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⚇ jdoe</text>
  <text x="900" y="207" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">1 min 12 s</text>
  <text x="1068" y="207" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="900" y="214" width="60" height="4" rx="2" fill="#1f2937"/>
  <rect x="900" y="214" width="24.0" height="4" rx="2" fill="#4a9eff"/>
  <rect x="240" y="230" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="237" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="281.0" y="248.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="352" y="249" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">10:15</text>
  <text x="420" y="249" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-collect</text>
  <rect x="489.38" y="237" width="54" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="496.38" y="248.5" fill="#4a9eff" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">apps_id 1</text>
  <text x="740" y="249" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⚇ jdoe</text>
  <text x="900" y="249" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">4 min 2 s</text>
  <text x="1068" y="249" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">48 210</text>
  <rect x="240" y="260" width="840" height="42" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="267" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="273.5" y="278.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">FAILED</text>
  <text x="352" y="279" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">02:00</text>
  <text x="420" y="279" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-daily-sync</text>
  <text x="740" y="279" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⏱ Planification</text>
  <text x="900" y="279" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">18 s</text>
  <text x="1068" y="279" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">0</text>
  <text x="420" y="294" fill="#f87171" fontSize="8.5" fontFamily="system-ui, sans-serif">1 step(s) failed — copy-accounts: connection refused</text>
  <rect x="240" y="312" width="840" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="329" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Hier</text>
  <text x="1068" y="329" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2 exécutions</text>
  <rect x="240" y="338" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="345" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="281.0" y="356.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="352" y="357" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">08:00</text>
  <text x="420" y="357" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">sales-monthly-load</text>
  <rect x="528.44" y="345" width="76" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="535.44" y="356.5" fill="#4a9eff" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">period 2026-10</text>
  <text x="740" y="357" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⚇ asmith</text>
  <text x="900" y="357" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">6 s</text>
  <text x="1068" y="357" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">3 295</text>
  <rect x="240" y="368" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="375" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="273.5" y="386.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">MISSED</text>
  <text x="352" y="387" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">02:00</text>
  <text x="420" y="387" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-daily-sync</text>
  <text x="740" y="387" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⏱ Planification</text>
  <text x="900" y="387" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="1068" y="387" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche et filtres</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tâche, période — conservés</text>
  <line x1="200" y1="97.0" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pastilles d'état</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec leur nombre ; un clic filtre</text>
  <line x1="200" y1="157.0" x2="240" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions par jour</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre l'exécution</text>
  <line x1="200" y1="257.0" x2="250" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Erreur sous un échec</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le début du message</text>
  <line x1="200" y1="347.0" x2="420" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">en direct</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">actualisé pendant une exécution</text>
  <line x1="1120" y1="93.0" x2="974" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="1120" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres de l'exécution</text>
  <text x="1130" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ici l'application</text>
  <line x1="1120" y1="187.0" x2="521.38" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Durée et progression</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">étapes faites / total</text>
  <line x1="1120" y1="267.0" x2="960" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
  <rect x="1120" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui ou quoi l'a lancée</text>
  <text x="1130" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un utilisateur, le planning, une tâche</text>
  <line x1="1120" y1="357.0" x2="780" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfrn-arrow)"/>
</svg>

---

## La page Exécutions \{#where\}

**Exploitation → Exécutions**, dans le menu de Nomaflow, liste toutes les exécutions, les plus récentes en premier.

| Élément | Usage |
|---|---|
| **Chercher** | Une tâche, un utilisateur, un message d'erreur. |
| **Toutes les tâches** | Une seule tâche. |
| Période | *Dernières 24 heures*, *7 derniers jours* (par défaut), *30 derniers jours*, *Tout*. |
| Pastilles d'état | **Tout**, puis chaque état présent avec son effectif — `RUNNING`, `QUEUED`, `FAILED`, `SUCCEEDED`, `CANCELED`, `MISSED`. Un clic ne garde que cet état ; un second clic l'efface. |

Les filtres sont conservés par le navigateur. Les exécutions sont groupées par jour — *Aujourd'hui*, *Hier*, puis la date — et chaque ligne présente :

- l'état et l'heure de début ;
- la tâche et les paramètres de l'exécution : pour une tâche exécutée par application, l'application traitée ;
- son origine : la planification, un utilisateur, ou la tâche appelante ;
- la durée — qui s'incrémente pendant l'exécution, avec une barre des étapes terminées —, les lignes traitées, et sous une exécution en échec son erreur.

Tant qu'une exécution est en cours, la page se rafraîchit d'elle-même (*en direct*). Un clic sur une ligne ouvre le détail de l'exécution ; **Afficher plus** charge les plus anciennes. Le détail d'une exécution s'ouvre aussi depuis l'état de la dernière exécution sur la [page des Tâches](../jobs/catalog.md#card) et depuis le lien d'une notification.

---

## États d'une exécution \{#states\}

| État | Signification |
|---|---|
| `QUEUED` | Acceptée, en attente de démarrage. |
| `RUNNING` | En cours. |
| `SUCCEEDED` | Toutes les étapes ont réussi, ou ont été sautées volontairement. |
| `FAILED` | Une étape a échoué après ses nouvelles tentatives. Les étapes suivantes sont enregistrées `CANCELED` avec *skipped: earlier step failed*. |
| `CANCELED` | Annulée par un opérateur ou par un dépassement de délai. |
| `MISSED` | Une heure planifiée à laquelle la tâche ne s'est pas exécutée — voir [Planifications manquées](../jobs/schedules.md#missed). |

Une exécution interrompue par un redémarrage du serveur est clôturée en échec avec *abandoned: process restart during run* au démarrage suivant.

---

## La page Détail de l'exécution \{#detail\}

La page se rafraîchit toutes les deux secondes tant que l'exécution est en cours (*en direct*). **Retour**, dans sa barre d'outils, ramène à la page d'où l'exécution a été ouverte — la liste des tâches, la liste des exécutions ou une exécution parente ; ouverte par un lien, elle ramène à la liste des tâches.

| Partie | Contenu |
|---|---|
| **Résumé** | Tâche, Déclencheur (`scheduled` ou `manual`, et qui l'a lancée — un nom d'utilisateur, ou `call_job:<tâche>@<exécution>` pour une tâche lancée par une autre), Démarrée, Terminée, Lignes affectées. |
| **Exécuter avec des paramètres** | Affiché quand l'exécution a été lancée avec des valeurs particulières : celles choisies pour cette exécution (paramètres partagés, arguments des étapes, étapes sautées, niveau de journal). |
| **Étapes** | Une ligne par étape : n°, nom, Type, Tentative, État, Erreur. Une étape `file_load` affiche aussi *N read · N inserted · N rejected*, le fichier envoyé pour cette exécution — un clic le télécharge à nouveau — et, si besoin, **Rejected rows (csv)**. |
| **Journal** | Les lignes écrites pendant l'exécution, au niveau de journal de l'exécution. **Suivre** garde les dernières lignes visibles (**Pause** l'arrête) ; **Télécharger** enregistre le journal complet. |

Le journal conserve les 5 000 dernières lignes d'une exécution.

---

## Durée de conservation \{#retention\}

Le panneau **Rétention de l'historique des exécutions** de la page des Tâches supprime les anciennes exécutions avec leurs étapes et leurs journaux : par défaut, celles de plus de 30 jours, en gardant au plus 100 exécutions par tâche, avec un contrôle toutes les 60 minutes. Voir [Administration](../administration.md#retention).
