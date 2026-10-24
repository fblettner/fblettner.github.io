---
title: Tâches planifiées
description: "Une seule page NomaUBL pour toutes les tâches exécutées par le serveur selon un calendrier — suivi des imports et récupération des statuts PA, cycle e-reporting, factures reçues, lots de documents, rapports quotidiens, reprises automatiques, contrôles du cycle de vie et purge de rétention — avec déclencheur, état, dernière et prochaine exécution, lancement immédiat, suspension, historique et éditeur intégré."
keywords: [NomaUBL, tâches planifiées, planificateur, lots, interrogation PA, suivi des imports, récupération des statuts, rapport quotidien, reprise automatique, contrôle du cycle de vie, purge de rétention, lancer maintenant, suspendre, historique des exécutions, BIP, dossiers surveillés, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Tâches planifiées

La page **Tâches planifiées** liste **toutes les tâches que le serveur exécute selon un calendrier**, dans un seul tableau : les interrogations de la PA, le cycle e-reporting, la récupération des factures reçues, les lots de documents, les rapports quotidiens, les reprises automatiques, les contrôles du cycle de vie et la purge de rétention. Pour chacune, elle affiche le déclencheur, l'état, la dernière exécution avec sa durée et son résultat, et la prochaine exécution ; depuis la même ligne, une tâche se lance immédiatement, se suspend ou s'ouvre dans son éditeur.

Accès : **Synchronisation → Tâches planifiées**. La carte *Planificateur* du [Tableau de bord IT](../../application/tech-dashboard.md) renvoie vers cette page.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 444" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sj-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sj-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="384" rx="14" fill="url(#sj-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches planifiées</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Toutes les tâches exécutées par le serveur : déclencheur, état, dernière et prochaine exécution.</text>
  <rect x="240" y="82" width="111" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="96.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Tous les types ▾</text>
  <rect x="363" y="88" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M365.5,93.5 L367.8,95.8 L371.8,91" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="380" y="97" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Actualisation auto</text>
  <rect x="492.8" y="82" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="537.3" y="96.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Actualiser</text>
  <rect x="589.8" y="82" width="111" height="22" rx="5" fill="url(#sj-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="645.3" y="96.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouvelle tâche</text>
  <text x="960" y="48" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 active(s) sur 12 tâche(s) · fenêtre silencieuse 06:00–07:00</text>
  <rect x="240" y="118" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="324" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TÂCHE</text>
  <text x="460" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉCLENCHEUR</text>
  <text x="560" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉTAT</text>
  <text x="624" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DERNIÈRE</text>
  <text x="690" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURÉE</text>
  <text x="740" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉSULTAT</text>
  <text x="860" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCHAINE</text>
  <text x="920" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="150" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Interrogation</text>
  <text x="324" y="166.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">Import PA</text>
  <text x="460" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">toutes les 5 min</text>
  <rect x="560" y="155.0" width="41" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.5" y="166.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="624" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">il y a 2 min</text>
  <text x="690" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3 s</text>
  <text x="740" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">total=12 success=12</text>
  <text x="860" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">dans 3 min</text>
  <text x="920" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ⏸ ⟲</text>
  <rect x="240" y="180" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Interrogation</text>
  <text x="324" y="196.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">Statuts PA</text>
  <text x="460" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">toutes les 15 min</text>
  <rect x="560" y="185.0" width="56" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="588.0" y="196.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Suspendu</text>
  <text x="624" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">il y a 1 h</text>
  <text x="690" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12 s</text>
  <text x="740" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">OK</text>
  <text x="860" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="920" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ▷ ⟲</text>
  <rect x="240" y="210" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Lot</text>
  <text x="324" y="226.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">BIP nocturne</text>
  <text x="460" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">chaque jour 04:00</text>
  <rect x="560" y="215.0" width="41" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.5" y="226.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="624" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">il y a 4 h</text>
  <text x="690" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">6 min</text>
  <text x="740" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">420/420, 0 failed</text>
  <text x="860" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">dans 20 h</text>
  <text x="920" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ⏸ ⟲</text>
  <rect x="240" y="240" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Rapport</text>
  <text x="324" y="256.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">rapport-exploitation</text>
  <text x="460" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">chaque jour 06:00</text>
  <rect x="560" y="245.0" width="41" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.5" y="256.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="624" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">il y a 2 h</text>
  <text x="690" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 s</text>
  <text x="740" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">sent to 2</text>
  <text x="860" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">dans 22 h</text>
  <text x="920" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ⏸ ⟲</text>
  <rect x="240" y="270" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Reprise auto</text>
  <text x="324" y="286.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">retry-send-failed</text>
  <text x="460" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">chaque jour 03:00</text>
  <rect x="560" y="275.0" width="56" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="588.0" y="286.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En cours</text>
  <text x="624" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">maintenant</text>
  <text x="690" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="740" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="860" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">dans 24 h</text>
  <text x="920" y="286.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ⏸ ⟲</text>
  <rect x="240" y="300" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Système</text>
  <text x="324" y="316.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">Purge de rétention</text>
  <text x="460" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">chaque jour · 90 j</text>
  <rect x="560" y="305.0" width="41" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="580.5" y="316.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="624" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">il y a 5 h</text>
  <text x="690" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">450 ms</text>
  <text x="740" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">purged 0 row(s)</text>
  <text x="860" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">dans 19 h</text>
  <text x="920" y="316.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶ ⏸ ⟲</text>
  <rect x="240" y="330" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">Interrogation</text>
  <text x="324" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">Factures reçues</text>
  <text x="460" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="560" y="335.0" width="51" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="585.5" y="346.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Inactif</text>
  <text x="624" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="690" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="740" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="860" y="346.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="920" y="346.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <line x1="240" y1="366" x2="960" y2="366" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="384" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▶ Lancer maintenant · ⏸ Suspendre · ▷ Reprendre · ⟲ Historique — le nom ouvre l'éditeur</text>
  <rect x="20" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre par type</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">actualisation automatique</text>
  <line x1="200" y1="99.0" x2="240" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom → éditeur</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">interrogations, lots, rapports…</text>
  <line x1="200" y1="167.0" x2="328" y2="166" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pastille d'état</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Actif · Suspendu · En cours · Inactif</text>
  <line x1="200" y1="317.0" x2="582" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
  <rect x="1000" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle tâche</text>
  <text x="1010" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lot, rapport, reprise, contrôle</text>
  <line x1="1000" y1="99.0" x2="700.8" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions par ligne</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lancer · suspendre · historique</text>
  <line x1="1000" y1="177.0" x2="940" y2="166" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernier résultat</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tel qu'écrit par le serveur</text>
  <line x1="1000" y1="317.0" x2="810" y2="318" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sj-arrow)"/>
</svg>

Les résultats d'exécution s'affichent tels que le serveur les écrit, en anglais.

---

## Les tâches

| Type | Tâches | Déclencheur réglé dans |
|---|---|---|
| **Interrogation** | *Import PA (suivi des dépôts)* (factures en attente, statut `9906`), *Récupération des statuts PA* (événements du cycle de vie), *Cycle e-reporting* (production et dépôt des flux échus), *Factures reçues* (factures fournisseur reçues sur la plateforme). | L'éditeur de la tâche : intervalle en minutes, plus la fenêtre silencieuse pour les deux interrogations de la PA. |
| **Lot** | Lots de documents : depuis la file d'impression JDE (BIP), depuis le répertoire d'entrée ou depuis les [dossiers surveillés](../../management/watched-folders.md). | L'éditeur de la tâche : intervalle ou heure quotidienne, et les paramètres de lot ci-dessous. |
| **Rapport** | [Rapports quotidiens](./daily-digest.md) — e-mail des erreurs ou des factures archivées. | Le formulaire du rapport. |
| **Reprise auto** | [Reprises automatiques](./auto-retry.md) — renvoi quotidien des factures en statut d'erreur. | Le formulaire de reprise. |
| **Contrôle cycle de vie** | [Contrôles du cycle de vie](./lifecycle-checks.md) — contrôle quotidien d'intégrité et d'ordre des statuts. | Le formulaire du contrôle. |
| **Système** | *Purge de rétention* — le nettoyage quotidien des tables (voir [Purge de rétention](#retention)). | L'éditeur de la tâche ; durée de conservation par table. |

Les tâches désactivées figurent aussi dans la liste, à l'état **Inactif**, pour être activées depuis la page.

---

## Colonnes

| Colonne | Description |
|---|---|
| **Type** | Interrogation, Lot, Rapport, Reprise auto, Contrôle cycle de vie, Système. |
| **Tâche** | Nom de la tâche ; un clic ouvre son éditeur. |
| **Déclencheur** | *toutes les 5 min*, *chaque jour à 04:00*, *chaque jour · conserve 90 jours*. |
| **État** | **Actif**, **Inactif**, **Suspendu**, **En cours**. |
| **Dernière exécution** | Début de la dernière exécution, avec *Durée* et *Résultat* (le résumé d'une ligne de l'exécution). Conservée d'un redémarrage du serveur à l'autre. |
| **Prochaine exécution** | Moment du prochain déclenchement planifié. |
| **Actions** | Lancer maintenant, Suspendre / Reprendre, Historique des exécutions. |

La barre d'outils filtre par **type**, rafraîchit le tableau (**Actualiser**, **Actualisation auto**), crée une tâche (**Nouvelle tâche**) et exporte la grille. Sa ligne de synthèse compte les tâches actives et rappelle la fenêtre silencieuse, mise en évidence quand elle est en cours.

---

## Actions

- **Lancer maintenant** — exécute la tâche immédiatement, hors calendrier, après confirmation. La suspension et la fenêtre silencieuse sont ignorées pour cette exécution ; une tâche déjà en cours n'est pas relancée. L'exécution est enregistrée comme une exécution planifiée.
- **Suspendre / Reprendre** — disponible sur toutes les tâches. Une tâche suspendue garde son calendrier mais ses déclenchements sont ignorés jusqu'à la reprise ou au redémarrage du serveur : une suspension ne peut donc pas être oubliée indéfiniment. *Lancer maintenant* ne tient pas compte de la suspension.
- **Historique des exécutions** — ouvre les dernières exécutions de la tâche : quand, événement (début, fin, erreur), durée, résultat et identifiant d'exécution. Chaque exécution d'une tâche planifiée — déclenchée par le calendrier, par *Lancer maintenant* ou par la commande correspondante en ligne de commande — écrit une ligne de début et une ligne de fin ou d'erreur dans le journal des traitements. L'identifiant d'exécution figure aussi dans les lignes du journal serveur de cette exécution, ce qui permet de rapprocher les deux dans le [Journal serveur](../../application/diagnostics/server-log.md). Les exécutions en échec apparaissent dans [Diagnostic → Anomalies](../../application/diagnostics/failures.md).

---

## L'éditeur

Un clic sur le nom de la tâche ouvre son éditeur dans une fenêtre. **Enregistrer et appliquer** enregistre les réglages et **recharge immédiatement la planification** — une heure ou un intervalle modifié n'attend plus le redémarrage du serveur ; les suspensions survivent au rechargement. Les éditeurs des rapports, des reprises et des contrôles proposent aussi l'envoi d'un test et la suppression.

### Interrogations

| Tâche | Champs |
|---|---|
| **Import PA (suivi des dépôts)** | **Import poll interval (min)** — minutes entre deux interrogations du statut d'import des factures en attente (statut `9906`) ; `0` = désactivé. **Quiet window from / to (HH:mm)** — voir ci-dessous. |
| **Récupération des statuts PA** | **Status retrieval interval (min)** — minutes entre deux récupérations des statuts du cycle de vie auprès de la PA ; `0` = désactivé. **Quiet window from / to (HH:mm)**. |
| **Cycle e-reporting** | **E-reporting cycle interval (min)** — minutes entre deux cycles e-reporting (production et dépôt des flux échus) ; `0` = désactivé. |
| **Factures reçues** | **Received invoices interval (min)** — minutes entre deux récupérations des factures fournisseur reçues sur la plateforme ; `0` = désactivé. |

La **fenêtre silencieuse** est une plage horaire quotidienne pendant laquelle le suivi des imports et la récupération des statuts sautent leurs exécutions — à placer sur une campagne d'envoi pour que les interrogations par facture ne s'accumulent pas pendant que la PA intègre le lot. Elle peut franchir minuit ; laisser les deux bornes vides pour la désactiver. Les deux mêmes champs figurent dans [Job defaults](../../configuration/system/global.md#onglet-7--job-defaults).

### Lots de documents

| Champ | Description |
|---|---|
| **Label** | Nom affiché dans la liste (par ex. `BIP invoices`). |
| **Interval (min)** | Minutes entre deux exécutions. `0` = désactivé, sauf si une heure quotidienne est renseignée. |
| **Daily at (HH:mm)** | Déclenche une fois par jour à cette heure locale au lieu de l'intervalle. Vide = l'intervalle s'applique. |

| Champ | Valeurs | Description |
|---|---|---|
| **Process type** | `xml` / `ubl` | `xml` = chaîne complète (transformation + traitement) ; `ubl` = traitement UBL direct (l'entrée est déjà UBL). |
| **Template** *(si Process type = `xml`)* | depuis liste | Document à appliquer. Liste des modèles de type `document`. |
| **Mode** *(si Process type = `xml`)* | `AUTO` / `SINGLE` / `BURST` / `UBL` | Mode de traitement — `AUTO` laisse NomaUBL décider ; `SINGLE` et `BURST` forcent la stratégie de sortie correspondante ; `UBL` produit uniquement de l'UBL. |
| **Source** | `bip` / `directory` / `watch-folders` | Où récupérer les documents : `bip` = file d'impression JDE *(spécifique JDE)* ; `directory` = parcourt l'**Input Directory** des [paramètres globaux](../../configuration/system/global.md) ; `watch-folders` = lance la récupération des [dossiers surveillés](../../management/watched-folders.md) — la tâche cible alors un répertoire configuré (choisi dans une liste) ou tous. |
| **Extract mode** *(si Source = `bip`)* | `input` / `output` / `both` | Quels artéfacts BIP récupérer : `input` = XML source uniquement ; `output` = fichiers de sortie générés uniquement ; `both` = les deux. |
| **Language filter** *(si Source = `bip`)* | texte | Filtre BIP optionnel par langue (par ex. `FR`). Vide = toutes les langues. |
| **Replace existing** | `Y` / `N` | À `Y`, ré-importe les documents déjà présents dans NomaUBL (écrase) ; à `N`, ignore les doublons. |
| **Skip PA send** *(si Process type = `xml`)* | `Y` / `N` | À `Y`, la tâche n'envoie jamais à la Plateforme Agréée — il produit uniquement UBL/PDF en local. |
| **Validate only** *(si Process type = `ubl`)* | `Y` / `N` | À `Y`, valide l'UBL sans l'envoyer à la PA. |
| **Send to PA** *(si Process type = `ubl`)* | *(use settings)* / `Y` / `N` | Surcharge la décision « envoi à la PA » du type de document : vide = défaut ; `Y` = force l'envoi ; `N` = force l'omission. |

Les libellés de l'éditeur restent en anglais, comme dans l'application.

### Rapports, reprises, contrôles

L'éditeur présente le formulaire complet de chaque type, inchangé : voir [Rapport quotidien](./daily-digest.md), [Reprise automatique](./auto-retry.md) et [Contrôles du cycle de vie](./lifecycle-checks.md).

### Purge de rétention \{#retention\}

La purge de rétention quotidienne borne les tables que rien d'autre ne limite. Elle s'exécute toutes les 24 heures, la première fois cinq minutes après le démarrage du serveur.

| Champ | Défaut | Table |
|---|---|---|
| **Processing log (days)** | `0` | Lignes START / END / erreur par fichier du journal d'exécution (`F564237`). Valeur conseillée `180`. |
| **Step timings (days)** | `0` | Lignes de chronométrage par étape écrites par `debugProfile` (`F564237`). Valeur conseillée `30`. |
| **Job runs (days)** | `0` | Lignes d'exécution des tâches planifiées (`F564237`). Valeur conseillée `90`. |
| **Validation errors of finished invoices (days)** | `0` | Erreurs (`F564236`) des factures en statut terminal. Valeur conseillée `365`. |
| **Notifications (days)** | `90` | Notifications de la boîte de réception (`F564253`). Vide = 90 jours ; `0` = conservation illimitée. |

Vide ou `0` conserve une table sans limite. La purge est donc **désactivée par défaut, sauf pour les notifications**, qui gardent leurs 90 jours : une mise à jour ne supprime rien d'elle-même. **Compter seulement** indique ce que chaque table perdrait avec les durées **enregistrées sur le serveur** — enregistrer d'abord, puis compter. Les mêmes valeurs figurent dans [Job defaults → Retention](../../configuration/system/global.md#retention) ; la ligne de commande propose `java -jar nomaubl.jar -purge <configFile> [--dry-run]`.

---

## Nouvelle tâche

**Nouvelle tâche** ouvre une fenêtre pour choisir le **type** et le **nom** :

| Type | Crée |
|---|---|
| **Lot** | Un traitement de documents depuis BIP, un répertoire ou les dossiers surveillés. La tâche reste inactive tant que son déclencheur n'est pas défini. |
| **Rapport** | Un e-mail quotidien des erreurs ou des factures archivées. |
| **Reprise auto** | Un renvoi quotidien des factures en statut d'erreur. |
| **Contrôle cycle de vie** | Un contrôle quotidien d'intégrité et d'ordre des statuts. |

Le nom d'un rapport, d'une reprise ou d'un contrôle se compose de lettres, de chiffres, de tirets et de soulignés : c'est le nom de son fichier de configuration. **Créer** ouvre la nouvelle tâche dans son éditeur.

---

## Accès

Accorder **Tâches planifiées** dans le groupe Synchronisation de la page [Rôles](../../configuration/security/roles.md). *Lancer maintenant*, *Suspendre* et *Enregistrer et appliquer* demandent l'action **integration-run**. Les anciens droits des pages Rapport quotidien, Reprise auto et Contrôles du cycle de vie sont ignorés.

---

## Conseils & bonnes pratiques

- **Lire la colonne État avant une campagne.** Suspendre la récupération des statuts ou poser une fenêtre silencieuse, envoyer, puis reprendre.
- **Tester un nouveau lot avec Lancer maintenant** avant de lui donner un déclencheur.
- **Ouvrir l'historique d'une tâche en échec** avant son éditeur : le résultat de chaque exécution nomme souvent la cause.
- **Activer la rétention progressivement** — partir des durées conseillées, *Compter seulement*, puis enregistrer.
