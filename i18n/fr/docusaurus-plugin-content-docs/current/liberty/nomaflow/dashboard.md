---
title: Tableau de bord Vue d'ensemble
description: "Le tableau de bord Vue d'ensemble de Nomaflow : les exécutions par issue sur la période, les échecs et planifications manquées, ce qui est en cours, la durée moyenne, les exécutions par jour, ce qui demande attention, les exécutions et durées par tâche, les dernières exécutions et la dernière réussite par tâche, avec la carte des tâches planifiées — sur les 7 derniers jours par défaut."
keywords: [Nomaflow, vue d'ensemble, tableau de bord, exécutions, échecs, planifications manquées, en cours, durée, attention, supervision]
---

# Tableau de bord Vue d'ensemble

**Vue d'ensemble**, première entrée du menu de Nomaflow, donne aux exploitants l'état de l'ordonnanceur en un coup d'œil : l'issue des exécutions, ce qui a échoué ou a été manqué, ce qui est en cours d'exécution, les tâches les plus actives et les plus lentes, et les dernières exécutions.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="420" rx="14" fill="url(#nfo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Les exécutions du jour, ce qui demande attention, les tâches les plus actives et les plus lentes, les dernières exécutions.</text>
  <text x="240" y="88" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="240" y="94" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="108.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">7 derniers jours ▾</text>
  <rect x="240.0" y="128" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="146" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Exécutions</text>
  <text x="252.0" y="159" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Par issue</text>
  <text x="252.0" y="188" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">1 204</text>
  <text x="252.0" y="210" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">1 180 réussies · 21 en échec · 3 annulées</text>
  <rect x="422.5" y="128" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="146" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Échecs</text>
  <text x="434.5" y="159" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Exécutions terminées en erreur</text>
  <text x="434.5" y="188" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">21</text>
  <text x="434.5" y="210" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">4 tâches concernées · 2 planifications manquées</text>
  <rect x="605.0" y="128" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="146" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">En cours</text>
  <text x="617.0" y="159" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">En ce moment</text>
  <text x="617.0" y="188" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="617.0" y="210" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">1 en exécution · 1 en attente</text>
  <rect x="787.5" y="128" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="146" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Durée moyenne</text>
  <text x="799.5" y="159" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Exécutions terminées</text>
  <text x="799.5" y="188" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">42 s</text>
  <text x="799.5" y="210" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">la plus longue 1 812 s</text>
  <rect x="240" y="230" width="400" height="190" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="248" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions par jour</text>
  <line x1="260" y1="402" x2="620" y2="402" stroke="#334155" strokeWidth="1"/>
  <rect x="271" y="272" width="28" height="130" fill="#4ade80" opacity="0.85"/>
  <rect x="271" y="270" width="28" height="2" fill="#f87171" opacity="0.85"/>
  <rect x="271" y="269" width="28" height="1" fill="#fb923c" opacity="0.85"/>
  <rect x="323" y="273" width="28" height="129" fill="#4ade80" opacity="0.85"/>
  <rect x="323" y="270" width="28" height="4" fill="#f87171" opacity="0.85"/>
  <rect x="323" y="270" width="28" height="0" fill="#fb923c" opacity="0.85"/>
  <rect x="374" y="270" width="28" height="132" fill="#4ade80" opacity="0.85"/>
  <rect x="374" y="269" width="28" height="2" fill="#f87171" opacity="0.85"/>
  <rect x="374" y="268" width="28" height="1" fill="#fb923c" opacity="0.85"/>
  <rect x="426" y="271" width="28" height="131" fill="#4ade80" opacity="0.85"/>
  <rect x="426" y="268" width="28" height="3" fill="#f87171" opacity="0.85"/>
  <rect x="426" y="268" width="28" height="0" fill="#fb923c" opacity="0.85"/>
  <rect x="477" y="273" width="28" height="129" fill="#4ade80" opacity="0.85"/>
  <rect x="477" y="271" width="28" height="2" fill="#f87171" opacity="0.85"/>
  <rect x="477" y="270" width="28" height="1" fill="#fb923c" opacity="0.85"/>
  <rect x="528" y="275" width="28" height="127" fill="#4ade80" opacity="0.85"/>
  <rect x="528" y="273" width="28" height="2" fill="#f87171" opacity="0.85"/>
  <rect x="528" y="273" width="28" height="0" fill="#fb923c" opacity="0.85"/>
  <rect x="580" y="276" width="28" height="126" fill="#4ade80" opacity="0.85"/>
  <rect x="580" y="275" width="28" height="2" fill="#f87171" opacity="0.85"/>
  <rect x="580" y="275" width="28" height="0" fill="#fb923c" opacity="0.85"/>
  <rect x="650" y="230" width="310" height="190" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="662" y="248" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui demande attention</text>
  <text x="662" y="261" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Échecs, planifications manquées, exécutions longues</text>
  <circle cx="666" cy="283" r="3.5" fill="#f87171"/>
  <text x="678" y="285" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm-daily-sync</text>
  <text x="678" y="297" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">ORA-12170: TNS connect timeout</text>
  <rect x="754.56" y="276" width="85" height="14" rx="7.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="797.06" y="286.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-28 06:00</text>
  <text x="948" y="285" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">12 exécutions</text>
  <circle cx="666" cy="321" r="3.5" fill="#fb923c"/>
  <text x="678" y="323" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">sales-monthly-digest</text>
  <text x="678" y="335" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">planification manquée</text>
  <rect x="784.8" y="314" width="85" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="827.3" y="324.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-01 07:00</text>
  <text x="948" y="323" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">2 exécutions</text>
  <circle cx="666" cy="359" r="3.5" fill="#fb923c"/>
  <text x="678" y="361" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">ldap-import</text>
  <text x="678" y="373" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">en cours depuis plus d'une heure</text>
  <text x="948" y="361" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <rect x="10" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="20" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7 derniers jours par défaut</text>
  <line x1="210" y1="107.0" x2="240" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
  <rect x="10" y="168" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="183" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre chiffres</text>
  <text x="20" y="196" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">En cours reste en direct</text>
  <line x1="210" y1="185.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions par jour</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par issue</text>
  <line x1="210" y1="347.0" x2="260" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Attention</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par tâche, la dernière erreur</text>
  <line x1="1000" y1="317.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfo-arrow)"/>
</svg>

---

## La période \{#period\}

La page s'ouvre sur **7 derniers jours** ; le sélecteur de période de la barre propose les autres préréglages et une période libre. Chaque widget la suit, sauf **En cours**, qui montre toujours l'instant présent. **Excel** et **PDF** exportent la page avec sa période — voir [Tableaux de bord → Export](../framework/dashboards.md#export).

---

## Les widgets \{#widgets\}

| Widget | Contenu |
|---|---|
| **Exécutions** — par issue | Les exécutions démarrées sur la période : réussies · en échec · annulées. |
| **Échecs** — exécutions terminées en erreur | Les exécutions en échec, le nombre de tâches concernées et les planifications manquées. |
| **En cours** — en ce moment | En exécution · en attente. |
| **Durée moyenne** — exécutions terminées | La durée moyenne, et la plus longue. |
| **Tâches planifiées** | Ce qui s'exécute ensuite : chaque tâche planifiée avec sa prochaine exécution ou *En pause*, sa planification en clair et son dernier état, et les boutons **Exécuter**, **Mettre la planification en pause** et **Reprendre la planification**. Réservé aux superutilisateurs. |
| **Exécutions par jour** | Une barre par jour, par issue. |
| **Ce qui demande attention** | Par tâche : les échecs avec leur dernière erreur, les planifications manquées, les exécutions en cours depuis plus d'une heure — en rouge pour un échec, en orange pour le reste, avec la date de la dernière occurrence. |
| **Exécutions par tâche** | La part des exécutions de chaque tâche sur la période. |
| **Durée moyenne par tâche** | En secondes, les plus lentes d'abord. |
| **Dernières exécutions** | Les dernières exécutions, avec leur état ; l'erreur, ou le déclencheur, sous chacune. |
| **Dernière réussite par tâche** | Chaque tâche avec sa dernière exécution réussie, les échecs depuis et son dernier état : les tâches en échec d'abord, une tâche sans réussite depuis une semaine en orange ; le chiffre donne les jours depuis la dernière réussite. |

Le détail d'une exécution se trouve dans **Exploitation → Exécutions** — voir [Historique des exécutions](./runs/history.md). La même carte des tâches peut être ajoutée à n'importe quel tableau de bord — voir [Tableaux de bord → Tâches](../framework/dashboards.md#jobs).
