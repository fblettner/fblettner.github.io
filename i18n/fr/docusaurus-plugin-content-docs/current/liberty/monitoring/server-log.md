---
title: Journal du serveur
description: "Surveillance → Journal du serveur dans Liberty Next : le journal du serveur conservé sur disque avec rotation par taille, la recherche par niveau, module, texte et période, l'ouverture d'une exception, le suivi d'une requête, l'export des résultats, le téléchargement des fichiers, et le niveau de journal de chaque module modifié à chaud."
keywords: [Liberty Next, surveillance, journal du serveur, fichier de journal, rotation, recherche, niveau, module, identifiant de requête, exception, export, niveaux de journal]
---

# Journal du serveur

**Surveillance → Journal du serveur** permet de chercher dans ce que le serveur a écrit : le framework, les applications et les bibliothèques qu'elles utilisent, quel que soit le mode de démarrage du serveur. Le journal est conservé sur disque, dans des fichiers à rotation par taille — 10 Mo par fichier, les cinq fichiers précédents conservés —, et survit donc à un redémarrage. Seuls les superutilisateurs voient la page Surveillance.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mlg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mlg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mlg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mlg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="386" rx="14" fill="url(#mlg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Surveillance</text>
  <rect x="240" y="56" width="261" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="275.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">En direct</text>
  <rect x="312" y="57" width="117" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="370.5" y="71.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Journal du serveur</text>
  <line x1="430" y1="61" x2="430" y2="75" stroke="#334155" strokeWidth="1"/>
  <text x="465.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rétention</text>
  <rect x="240" y="92" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="106.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Chercher un message, un module, une erreur, un identifiant de requête…</text>
  <rect x="578" y="92" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="588" y="106.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">WARNING et plus ▾</text>
  <rect x="714" y="92" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="724" y="106.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Tout module ▾</text>
  <rect x="820" y="92" width="118" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="830" y="106.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Dernières 24 heures ▾</text>
  <rect x="770" y="122" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="805.0" y="136.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter</text>
  <rect x="848" y="122" width="112" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="904.0" y="136.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Télécharger les fichiers</text>
  <text x="240" y="136" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">184 entrées (sur 52 310 lignes) · liberty.log 4,1 Mo</text>
  <rect x="240" y="150" width="720" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="155" width="37" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="266.5" y="166.2" fill="#f87171" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ERROR</text>
  <text x="320" y="167" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">10:42:11</text>
  <text x="380" y="167" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">liberty.jobs</text>
  <text x="540" y="167" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">step 'load' failed: period 2026-02 is closed</text>
  <text x="950" y="167" fill="#c084fc" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">[a91f03c2]</text>
  <rect x="240" y="180" width="720" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="185" width="45" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="270.5" y="196.2" fill="#fb923c" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">WARNING</text>
  <text x="320" y="197" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">10:40:02</text>
  <text x="380" y="197" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">liberty.connectors.sql</text>
  <text x="540" y="197" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">slow query sales_get (8.2 s)</text>
  <text x="950" y="197" fill="#c084fc" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">[5be2d0e1]</text>
  <rect x="240" y="210" width="720" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="215" width="45" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="270.5" y="226.2" fill="#fb923c" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">WARNING</text>
  <text x="320" y="227" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">09:58:37</text>
  <text x="380" y="227" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">nomasx1.security</text>
  <text x="540" y="227" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">user JDOE has no address book entry</text>
  <rect x="240" y="240" width="720" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="245" width="33" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="264.5" y="256.2" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">INFO</text>
  <text x="320" y="257" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">09:00:00</text>
  <text x="380" y="257" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">liberty.jobs</text>
  <text x="540" y="257" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">nightly_sync succeeded in 72 s</text>
  <rect x="240" y="276" width="720" height="106" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="296" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Niveaux de journal par module</text>
  <text x="252" y="310" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Appliqués aussitôt et enregistrés (●). Hériter = le niveau du module parent.</text>
  <text x="252" y="334" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">liberty.jobs ●</text>
  <rect x="420" y="321" width="90" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="334.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">INFO ▾</text>
  <text x="252" y="358" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1 ●</text>
  <rect x="420" y="345" width="90" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="358.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">DEBUG ▾</text>
  <rect x="10" y="50" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois onglets</text>
  <text x="20" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">direct, journal, rétention</text>
  <line x1="210" y1="67.0" x2="240" y2="68" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mlg-arrow)"/>
  <rect x="10" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">niveau, module, période</text>
  <line x1="210" y1="117.0" x2="240" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mlg-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur une ligne</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre son exception</text>
  <line x1="210" y1="217.0" x2="240" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mlg-arrow)"/>
  <rect x="1000" y="110" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter, télécharger</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les résultats, les fichiers</text>
  <line x1="1000" y1="127.0" x2="960" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mlg-arrow)"/>
  <rect x="1000" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Identifiant de requête</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic : cette requête seule</text>
  <line x1="1000" y1="197.0" x2="950" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mlg-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Niveaux par module</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appliqués aussitôt</text>
  <line x1="1000" y1="347.0" x2="510" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mlg-arrow)"/>
</svg>

---

## Rechercher \{#search\}

| Contrôle | Effet |
|---|---|
| **Chercher** | Un texte dans le message, le module, l'exception ou l'identifiant de requête. |
| Niveau | *Tout niveau*, ou un seuil : *WARNING et plus* garde les avertissements, les erreurs et les messages critiques. |
| **Tout module** | Un module et ses sous-modules — `liberty.jobs`, `nomasx1`. Un nom peut être saisi. |
| Période | *Dernière heure*, *Dernières 24 heures* (par défaut), *7 derniers jours*, *Tout ce qui est conservé*. |
| **Recharger** | Relit les fichiers. |

Les filtres sont conservés par le navigateur. La page affiche les 500 résultats les plus récents — *N entrées (sur M lignes)*, avec les fichiers lus et leur taille — ; quand il y en a davantage, elle l'indique : affiner la recherche.

Un clic sur une ligne la déplie : le message complet et son exception. L'identifiant de requête entre crochets après un message — celui qu'une page d'erreur montre à l'utilisateur — ne garde que cette requête : toutes les lignes écrites pour la traiter.

Un même message écrit de nombreuses fois de suite n'est conservé qu'une fois, suivi de *(previous message repeated N times)*.

---

## Exporter et télécharger \{#export\}

| Bouton | Donne |
|---|---|
| **Exporter** | Les entrées retenues dans un fichier texte, les plus anciennes d'abord — jusqu'à 100 000. |
| **Télécharger les fichiers** | Les fichiers de journal eux-mêmes, courant et précédents, dans un ZIP. |

---

## Niveaux de journal par module \{#levels\}

La carte du bas règle le volume écrit par chaque module. Choisir un niveau pour un module — *Hériter* reprend celui de son parent —, ou ajouter un module par son nom. Le changement s'applique aussitôt, sans redémarrage, et reste valable au démarrage suivant (● signale un module réglé ainsi). Passer un module en `DEBUG` le temps d'une analyse, puis le remettre : un module bavard remplit vite les fichiers.

---

## Voir aussi

- [La page Surveillance](./dashboard.md) — la vue en direct.
- [Rétention](./retention.md) — ce que le serveur conserve, et combien de temps.
