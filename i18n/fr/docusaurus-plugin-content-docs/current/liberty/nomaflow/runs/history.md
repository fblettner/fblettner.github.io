---
title: Historique des exécutions
description: "Où sont enregistrées les exécutions Nomaflow et comment en lire une : les états d'exécution, la page Détail de l'exécution (résumé, paramètres de l'exécution, étapes, journal avec Suivre et Télécharger), la liste des exécutions, et la durée de conservation de l'historique."
keywords: [Nomaflow, historique des exécutions, détail de l'exécution, états, journal, MISSED, CANCELED, rétention, Liberty Next]
---

# Historique des exécutions

Chaque exécution d'une tâche — planifiée, manuelle, lancée par une autre tâche ou manquée — est enregistrée avec ses étapes et son journal.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 370" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rhi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rhi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rhi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rhi-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="340" rx="14" fill="url(#rhi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Détail d'exécution · crm-stalled-deals</text>
  <rect x="870" y="32" width="63" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="901.5" y="44.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="84" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Trigger</text>
  <text x="240" y="102" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">scheduled</text>
  <text x="425" y="84" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Started</text>
  <text x="425" y="102" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">27/10 08:00:02</text>
  <text x="610" y="84" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Finished</text>
  <text x="610" y="102" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">27/10 08:00:05</text>
  <text x="795" y="84" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Rows affected</text>
  <text x="795" y="102" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="120" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">#</text>
  <text x="290" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STEP</text>
  <text x="490" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="610" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ATTEMPT</text>
  <text x="700" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATE</text>
  <text x="830" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ERROR</text>
  <rect x="240" y="152" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="168.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="290" y="168.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">flag-stalled</text>
  <text x="490" y="168.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sql_query</text>
  <text x="610" y="168.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="700" y="157.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="730.0" y="168.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="830" y="168.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="182" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="198.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="290" y="198.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">notify</text>
  <text x="490" y="198.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">python</text>
  <text x="610" y="198.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="700" y="187.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="730.0" y="198.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="830" y="198.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="240" y="222" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Log</text>
  <rect x="810" y="210" width="70" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="845.0" y="224.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Follow</text>
  <rect x="888" y="210" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="928.0" y="224.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Download</text>
  <rect x="240" y="238" width="720" height="100" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="260" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">08:00:02 INFO  nomaflow  run started (scheduled)</text>
  <text x="252" y="282" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">08:00:03 INFO  sql_query flag_stalled_deals → 2 row(s)</text>
  <text x="252" y="304" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">08:00:05 INFO  nomaflow  run SUCCEEDED in 3 s</text>
  <rect x="10" y="84" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Résumé</text>
  <text x="20" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déclencheur, horaires, lignes</text>
  <line x1="210" y1="101.0" x2="240" y2="95" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rhi-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">état et erreur par étape</text>
  <line x1="210" y1="177.0" x2="240" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rhi-arrow)"/>
  <rect x="10" y="270" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Log</text>
  <text x="20" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">suivi en direct, téléchargement</text>
  <line x1="210" y1="287.0" x2="240" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rhi-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">État</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">QUEUED · RUNNING · SUCCEEDED…</text>
  <line x1="1000" y1="47.0" x2="960" y2="41" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rhi-arrow)"/>
</svg>

---

## Où trouver les exécutions \{#where\}

| Depuis | Ouvre |
|---|---|
| *dernière* sur une carte de tâche | Le détail de la dernière exécution de la tâche. |
| La liste **Exécutions** (menu Nomaflow ; lien **Exécutions** en haut d'un détail) | Les dernières exécutions de toutes les tâches. |
| Une notification sur une exécution | Son détail, par le lien de la notification. |

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

La page se rafraîchit toutes les deux secondes tant que l'exécution est en cours (*en direct*).

| Partie | Contenu |
|---|---|
| **Résumé** | Tâche, Déclencheur (`scheduled` ou `manual`, et qui l'a lancée — un nom d'utilisateur, ou `call_job:<tâche>@<exécution>` pour une tâche lancée par une autre), Démarrée, Terminée, Lignes affectées. |
| **Run with parameters** | Affiché quand l'exécution a été lancée avec des valeurs particulières : celles choisies pour cette exécution (paramètres partagés, arguments des étapes, étapes sautées, niveau de journal). |
| **Étapes** | Une ligne par étape : n°, nom, Type, Tentative, État, Erreur. Une étape `file_load` affiche aussi *N read · N inserted · N rejected* et, si besoin, **Rejected rows (csv)**. |
| **Journal** | Les lignes écrites pendant l'exécution, au niveau de journal de l'exécution. **Suivre** garde les dernières lignes visibles (**Pause** l'arrête) ; **Télécharger** enregistre le journal complet. |

Le journal conserve les 5 000 dernières lignes d'une exécution.

---

## Durée de conservation \{#retention\}

Le panneau **Run history retention** de la page des Tâches supprime les anciennes exécutions avec leurs étapes et leurs journaux : par défaut, celles de plus de 30 jours, en gardant au plus 100 exécutions par tâche, avec un contrôle toutes les 60 minutes. Voir [Administration](../administration.md#retention).
