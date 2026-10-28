---
title: Historique des exécutions
description: "Où sont enregistrées les exécutions Nomaflow et comment les lire : la page Exécutions (recherche, filtres, effectifs par état, exécutions par jour, avancement en direct), les états d'exécution, la page Détail de l'exécution (résumé, paramètres de l'exécution, étapes, fichier envoyé, journal avec Suivre et Télécharger), et la durée de conservation de l'historique."
keywords: [Nomaflow, historique des exécutions, détail de l'exécution, états, journal, MISSED, CANCELED, rétention, Liberty Next]
---

# Historique des exécutions

Chaque exécution d'une tâche — planifiée, manuelle, lancée par une autre tâche ou manquée — est enregistrée avec ses étapes et son journal.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="362" rx="14" fill="url(#nfr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Toutes les exécutions, les plus récentes en premier</text>
  <rect x="240" y="72" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="86.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Chercher une tâche, un utilisateur, une erreur…</text>
  <rect x="500" y="72" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="86.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Toutes les tâches ▾</text>
  <rect x="638" y="72" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="648" y="86.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">7 derniers jours ▾</text>
  <rect x="910" y="75" width="58" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="939.0" y="86.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">en direct</text>
  <rect x="240" y="104" width="53" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.5" y="116.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout 214</text>
  <rect x="299" y="104" width="58" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="328.0" y="116.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">RUNNING 1</text>
  <rect x="363" y="104" width="53" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="389.5" y="116.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">FAILED 6</text>
  <rect x="422" y="104" width="76" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="460.0" y="116.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED 205</text>
  <rect x="504" y="104" width="53" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="530.5" y="116.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">MISSED 2</text>
  <text x="240" y="146" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Aujourd'hui · 3 exécutions</text>
  <rect x="240" y="156" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="163" width="47" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="273.5" y="174.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">RUNNING</text>
  <text x="340" y="175" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:42</text>
  <text x="385" y="175" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <rect x="550" y="163" width="55" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="577.5" y="174.2" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">apps_id 2</text>
  <text x="650" y="175" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">👤 j.martin</text>
  <text x="780" y="175" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1 min 12 s</text>
  <rect x="780" y="179" width="70" height="3" rx="1.5" fill="#1e293b"/><rect x="780" y="179" width="42" height="3" rx="1.5" fill="#4a9eff"/>
  <text x="940" y="175" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="190" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="197" width="55" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="277.5" y="208.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="340" y="209" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:15</text>
  <text x="385" y="209" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <rect x="550" y="197" width="55" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="577.5" y="208.2" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">apps_id 1</text>
  <text x="650" y="209" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">👤 j.martin</text>
  <text x="780" y="209" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4 min 2 s</text>
  <text x="940" y="209" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">48 210</text>
  <rect x="240" y="224" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="231" width="43" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="271.5" y="242.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="340" y="243" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">02:00</text>
  <text x="385" y="243" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <text x="650" y="243" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">⏱ Planification</text>
  <text x="780" y="243" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">18 s</text>
  <text x="940" y="243" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <text x="385" y="256" fill="#f87171" fontSize="8" fontFamily="system-ui, sans-serif">ORA-12170: TNS connect timeout</text>
  <text x="240" y="286" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Hier · 1 exécution</text>
  <rect x="240" y="296" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="303" width="55" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="277.5" y="314.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="340" y="315" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">08:00</text>
  <text x="385" y="315" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">crm-daily-pipeline</text>
  <text x="650" y="315" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">⏱ Planification</text>
  <text x="780" y="315" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">6 s</text>
  <text x="940" y="315" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <rect x="10" y="50" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche et filtres</text>
  <text x="20" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tâche, période — gardés</text>
  <line x1="210" y1="67.0" x2="240" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
  <rect x="10" y="108" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="123" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pastilles d'état</text>
  <text x="20" y="136" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec leurs effectifs</text>
  <line x1="210" y1="125.0" x2="240" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions par jour</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre l'exécution</text>
  <line x1="210" y1="217.0" x2="250" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En direct</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rafraîchi pendant une exécution</text>
  <line x1="1000" y1="77.0" x2="950" y2="83" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'application de l'exécution</text>
  <line x1="1000" y1="167.0" x2="600" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
  <rect x="1000" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avancement</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">étapes faites / total</text>
  <line x1="1000" y1="247.0" x2="850" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfr-arrow)"/>
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

La page se rafraîchit toutes les deux secondes tant que l'exécution est en cours (*en direct*).

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
