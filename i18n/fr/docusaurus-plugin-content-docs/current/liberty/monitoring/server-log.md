---
title: Journal du serveur
description: "Surveillance → Journal du serveur dans Liberty Next : le journal du serveur conservé sur disque avec rotation par taille, la recherche par niveau, module, texte et période, l'ouverture d'une exception, le suivi d'une requête, l'export des résultats, le téléchargement des fichiers, et le niveau de journal de chaque module modifié à chaud."
keywords: [Liberty Next, surveillance, journal du serveur, fichier de journal, rotation, recherche, niveau, module, identifiant de requête, exception, export, niveaux de journal]
---

# Journal du serveur

**Surveillance → Journal du serveur** permet de chercher dans ce que le serveur a écrit : le framework, les applications et les bibliothèques qu'elles utilisent, quel que soit le mode de démarrage du serveur. Le journal est conservé sur disque, dans des fichiers à rotation par taille — 10 Mo par fichier, les cinq fichiers précédents conservés —, et survit donc à un redémarrage. Seuls les superutilisateurs voient la page Surveillance.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 474" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="monlog-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="monlog-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="monlog-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="monlog-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="434" rx="14" fill="url(#monlog-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Surveillance</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En direct</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Utilisateurs connectés, verrous, p…</text>
  <rect x="450.5" y="74" width="204.5" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="459.5" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="469.5" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="486.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Journal du serveur</text>
  <text x="486.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Le fichier journal : recherche, ex…</text>
  <rect x="665.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usage de l’IA</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Qui utilise l’assistant, les jeton…</text>
  <rect x="879.5" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="888.5" y="84" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <circle cx="898.5" cy="94" r="4" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="915.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rétention</text>
  <text x="915.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ce que garde chaque stockage, sa t…</text>
  <rect x="236" y="126" width="230" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="141.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Chercher un message, un module, une erreur…</text>
  <rect x="472" y="126" width="120" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="482" y="141.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">WARNING et plus</text>
  <text x="580" y="141.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="598" y="126" width="120" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="608" y="141.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Tout module</text>
  <text x="706" y="141.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="724" y="126" width="110" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="734" y="141.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Dernières 24 heures</text>
  <text x="822" y="141.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="943" y="126" width="141" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1013.5" y="141.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Télécharger les fichiers</text>
  <rect x="882" y="126" width="56" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="910.0" y="141.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter</text>
  <rect x="807" y="126" width="70" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="842.0" y="141.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger</text>
  <text x="236" y="168" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">184 entrées (sur 52 310 lignes) · liberty.log 4,1 Mo</text>
  <rect x="236" y="178" width="848" height="28" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="196" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">11/22, 10:42:11</text>
  <rect x="360" y="184" width="60" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="390.0" y="195.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ERROR</text>
  <text x="436" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">liberty.jobs</text>
  <text x="612" y="196" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">step 'load' failed: period 2026-02 is closed</text>
  <text x="1074" y="196" fill="#c084fc" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">[a91f03c2]</text>
  <rect x="236" y="206" width="848" height="28" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="224" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">11/22, 10:40:02</text>
  <rect x="360" y="212" width="60" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="390.0" y="223.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">WARNING</text>
  <text x="436" y="224" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">liberty.connectors.sql</text>
  <text x="612" y="224" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">slow query sales_get (8.2 s)</text>
  <text x="1074" y="224" fill="#c084fc" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">[5be2d0e1]</text>
  <rect x="236" y="234" width="848" height="28" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="252" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">11/22, 09:58:37</text>
  <rect x="360" y="240" width="60" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="390.0" y="251.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">WARNING</text>
  <text x="436" y="252" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security</text>
  <text x="612" y="252" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">user JDOE has no address book entry</text>
  <rect x="236" y="262" width="848" height="28" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="280" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">11/22, 09:00:00</text>
  <rect x="360" y="268" width="60" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="390.0" y="279.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">INFO</text>
  <text x="436" y="280" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">liberty.jobs</text>
  <text x="612" y="280" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">nightly_sync succeeded in 72 s</text>
  <text x="250" y="324" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Niveaux de journal par module</text>
  <text x="250" y="339" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Appliqués aussitôt et enregistrés dans app.toml (●). Hériter = le niveau du module parent.</text>
  <text x="250" y="364" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">liberty ●</text>
  <rect x="850" y="352" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="366.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">INFO</text>
  <text x="988" y="366.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="250" y="390" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">liberty.jobs ●</text>
  <rect x="850" y="378" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="392.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">DEBUG</text>
  <text x="988" y="392.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="250" y="406" width="580" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="420.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Un module (liberty.jobs, nomasx1…)</text>
  <text x="818" y="420.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="850" y="406" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="420.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">DEBUG</text>
  <text x="988" y="420.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="1010" y="406" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="420.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter</text>
  <rect x="236" y="304" width="848" height="136" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vue Journal du serveur</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le fichier sur disque</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">texte, niveau, module, période</text>
  <line x1="200" y1="167.0" x2="236" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre son exception</text>
  <line x1="200" y1="267.0" x2="236" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Niveaux par module</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appliqués aussitôt</text>
  <line x1="200" y1="417.0" x2="236" y2="393" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter, télécharger</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les résultats, les fichiers</text>
  <line x1="1120" y1="57.0" x2="1040" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
  <rect x="1120" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Identifiant de requête</text>
  <text x="1130" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clic : cette requête seule</text>
  <line x1="1120" y1="197.0" x2="1084" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monlog-arrow)"/>
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
