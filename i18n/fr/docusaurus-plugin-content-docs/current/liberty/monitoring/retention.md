---
title: Rétention
description: "Surveillance → Rétention dans Liberty Next : chaque stockage qui grossit sur le serveur — exécutions des tâches, fichiers des tâches, notifications, versions de configuration, paquets de modifications, vues enregistrées, journal du serveur — avec sa règle, sa taille, un aperçu à blanc et une purge immédiate."
keywords: [Liberty Next, surveillance, rétention, purge, exécutions, fichiers des tâches, notifications, versions de configuration, paquets de modifications, vues enregistrées, journal du serveur, espace disque]
---

# Rétention

**Surveillance → Rétention** réunit au même endroit tout ce que le serveur conserve et laisse grossir : ce qui est gardé, où cela se règle, la place occupée, et le moyen de nettoyer tout de suite. Seuls les superutilisateurs la voient.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mrt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mrt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mrt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mrt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="400" rx="14" fill="url(#mrt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Surveillance</text>
  <rect x="240" y="56" width="261" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="275.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">En direct</text>
  <line x1="311" y1="61" x2="311" y2="75" stroke="#334155" strokeWidth="1"/>
  <text x="370.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Journal du serveur</text>
  <rect x="431" y="57" width="69" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="465.5" y="71.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rétention</text>
  <rect x="240" y="96" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="112" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions des tâches</text>
  <text x="252" y="126" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Plus de 30 jours, ou au-delà de 100 par tâche</text>
  <text x="620" y="119" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">12 480 exécutions · 84 Mo</text>
  <rect x="790" y="104" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.0" y="118.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Aperçu</text>
  <rect x="868" y="104" width="80" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="908.0" y="118.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Purger</text>
  <rect x="240" y="138" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="154" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Fichiers des tâches</text>
  <text x="252" y="168" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Plus de 30 jours</text>
  <text x="620" y="161" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">312 fichier(s) · 1,2 Go</text>
  <rect x="790" y="146" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.0" y="160.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Aperçu</text>
  <rect x="868" y="146" width="80" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="908.0" y="160.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Purger</text>
  <rect x="240" y="180" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="196" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="252" y="210" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Lues, plus de 90 jours</text>
  <text x="620" y="203" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 104 (1 980 lues)</text>
  <rect x="790" y="188" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.0" y="202.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Aperçu</text>
  <rect x="868" y="188" width="80" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="908.0" y="202.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Purger</text>
  <rect x="240" y="222" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="238" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Versions de configuration</text>
  <text x="252" y="252" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Au-delà de 20 par fichier, ou plus de 90 jours</text>
  <text x="620" y="245" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">640 versions</text>
  <rect x="790" y="230" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.0" y="244.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Aperçu</text>
  <rect x="868" y="230" width="80" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="908.0" y="244.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Purger</text>
  <rect x="240" y="264" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="280" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Paquets de modifications</text>
  <text x="252" y="294" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Conservé (aucune durée)</text>
  <text x="620" y="287" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">38 paquets, 12 journaux d'import</text>
  <rect x="240" y="306" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="322" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Vues enregistrées</text>
  <text x="252" y="336" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Conservées</text>
  <text x="620" y="329" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">214 vues</text>
  <rect x="240" y="348" width="720" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="364" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Journal du serveur</text>
  <text x="252" y="378" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">10 Mo par fichier, 5 fichiers précédents</text>
  <text x="620" y="371" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4,1 Mo</text>
  <text x="940" y="404" fill="#4ade80" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Supprimerait 1 204 élément(s) · 9 Mo</text>
  <rect x="10" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque stockage</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qui grossit, au même endroit</text>
  <line x1="210" y1="117.0" x2="240" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mrt-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La règle</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qui est conservé</text>
  <line x1="210" y1="217.0" x2="252" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mrt-arrow)"/>
  <rect x="1000" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aperçu</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à blanc, rien supprimé</text>
  <line x1="1000" y1="107.0" x2="825" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mrt-arrow)"/>
  <rect x="1000" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Purger</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">après confirmation</text>
  <line x1="1000" y1="177.0" x2="908" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mrt-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jamais purgées</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les vues des utilisateurs</text>
  <line x1="210" y1="347.0" x2="252" y2="359" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mrt-arrow)"/>
</svg>

---

## Les stockages \{#stores\}

| Stockage | Ce qui part | Réglage |
|---|---|---|
| **Exécutions des tâches** | Les exécutions terminées avec leurs étapes et journaux, au-delà des jours conservés ou du plafond par tâche. | Nomaflow — [Rétention de l'historique](../nomaflow/administration.md#retention). |
| **Fichiers des tâches** | Fichiers envoyés, rapports de rejets, rapports, exports, archives des dossiers surveillés. | Nomaflow — **Fichiers conservés (jours)** dans le même panneau. |
| **Notifications** | Les notifications lues, au-delà des jours fixés. | Paramètres → App → Notifications — [Conserver les notifications lues](../nomaflow/notifications.md#smtp). |
| **Versions de configuration** | Les instantanés de configuration au-delà du nombre gardé par fichier, ou trop anciens ; le plus récent de chaque fichier reste toujours. | La [tâche `config-versions-purge`](../nomaflow/bundled-jobs.md), sinon 20 par fichier et 90 jours. |
| **Paquets de modifications** | Les paquets exportés ou promus et les journaux d'import plus anciens que les jours fixés. Les brouillons ne sont jamais touchés. | Conservés par défaut. |
| **Vues enregistrées** | Les vues et analyses des utilisateurs. | Jamais purgées — affichées pour leur taille. |
| **Journal du serveur** | Rotation par taille : 10 Mo par fichier, cinq fichiers précédents. | — |

Les exécutions et fichiers des tâches figurent quand Nomaflow fonctionne sur le serveur.

---

## Aperçu et purge \{#actions\}

| Bouton | Effet |
|---|---|
| **Aperçu** | Un essai à blanc : *Supprimerait N élément(s)*, avec la taille. Rien n'est supprimé. |
| **Purger** | Après confirmation, applique aussitôt la règle : *N élément(s) supprimé(s)*. |

Les boutons ne s'affichent que là où il y a quelque chose à purger : ni pour les vues enregistrées et le journal du serveur, ni pour les notifications et les paquets de modifications tant qu'ils sont conservés sans limite. Les nettoyages automatiques continuent selon leur propre rythme.

---

## Voir aussi

- [Journal du serveur](./server-log.md) — chercher dans ce que le serveur a écrit.
- [Administration de Nomaflow](../nomaflow/administration.md) — la règle de rétention des tâches.
