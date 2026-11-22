---
title: La page des Tâches
description: "La page des Tâches de Nomaflow : recherche et filtres, les tâches groupées par application avec les tâches principales en tête, le contenu d'une ligne de tâche, l'activation d'une tâche, Exécuter et Exécuter avec des paramètres (préréglages, paramètres, plusieurs valeurs, étapes, envoi de fichiers, niveau de journal), Annuler, Cloner, Supprimer et Exporter."
keywords: [Nomaflow, tâches, catalogue, exécuter, run with parameters, préréglages, annuler, cloner, supprimer, export, rétention, planifications manquées, Liberty Next]
---

# La page des Tâches

La page **Tâches** présente chaque tâche de `jobs.toml`, une ligne par tâche, groupées par application, avec sa dernière exécution, sa planification et ses actions. Accès : **Exploitation → Tâches**, dans le menu Nomaflow. Les superutilisateurs la voient, ainsi que les rôles qui ont reçu *Suivre les tâches* (`nomaflow:view`) — voir [Administration](../administration.md#permissions).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfjl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfjl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfjl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfjl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="480" rx="14" fill="url(#nfjl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">nomaflow — tâches ETL planifiées</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="111" height="22" rx="5" fill="url(#nfjl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="295.5" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouvelle tâche</text>
  <rect x="359" y="86" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="392.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Planning</text>
  <rect x="433" y="86" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="474.5" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger</text>
  <rect x="240" y="120" width="300" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="135.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  Chercher une tâche (id, description, étiquette)…</text>
  <rect x="550" y="120" width="150" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="135.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Toutes les applications</text>
  <text x="688" y="136" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="708" y="120" width="130" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="718" y="135.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Tout statut</text>
  <text x="826" y="136" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="846" y="120" width="120" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="856" y="135.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Toute étiquette</text>
  <text x="954" y="136" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="1080" y="136" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 sur 9 tâches</text>
  <rect x="240" y="156" width="840" height="26" rx="7" fill="rgba(168,85,247,0.05)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="173" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="266" y="173" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="282" y="173" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Rétention de l'historique des exécutions</text>
  <text x="495.6" y="173" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· 30d · cap 100/job · every 60 min</text>
  <rect x="240" y="188" width="840" height="26" rx="7" fill="rgba(168,85,247,0.05)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="205" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="266" y="205" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">⏰</text>
  <text x="282" y="205" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Planifications manquées</text>
  <text x="409.92" y="205" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· tolérance 10 min · toutes les 5 min</text>
  <rect x="877.44" y="194" width="192.56" height="14" rx="3" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="973.72" y="204" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">contrôlé il y a 2 min · 0 manquée(s)</text>
  <rect x="240" y="226" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="244" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="268" y="244" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">☆</text>
  <text x="284" y="244" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches principales</text>
  <text x="394.8" y="244" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="254" width="840" height="30" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="273" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-daily-sync</text>
  <text x="440" y="273" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Copie nocturne des tables du CRM</text>
  <rect x="658" y="261" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="687.0" y="272.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="750" y="273" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <rect x="860" y="260" width="72" height="18" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="896" y="272.5" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">activée</text>
  <text x="942" y="273" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="273" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="273" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="273" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="273" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="284" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="303" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">sales-monthly-load</text>
  <text x="440" y="303" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Fichier de ventes mensuel vers la table de faits</text>
  <rect x="658" y="291" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="679.5" y="302.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">FAILED</text>
  <text x="750" y="303" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Manuelle</text>
  <rect x="860" y="290" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="302.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">désactivée</text>
  <text x="942" y="303" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="303" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="303" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="303" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="303" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="324" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="342" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="268" y="342" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="294.8" y="342" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">3</text>
  <rect x="240" y="352" width="840" height="30" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="371" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-archive</text>
  <text x="440" y="371" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Archiver les affaires clôturées</text>
  <rect x="658" y="359" width="53" height="16" rx="3" fill="#fb923c" fillOpacity="0.12" stroke="#fb923c" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="684.5" y="370.5" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">CANCELED</text>
  <text x="750" y="371" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Manuelle</text>
  <rect x="860" y="358" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="370.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">désactivée</text>
  <text x="942" y="371" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="371" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="371" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="371" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="371" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="382" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="401" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-daily-sync</text>
  <text x="440" y="401" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Copie nocturne des tables du CRM</text>
  <rect x="658" y="389" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="687.0" y="400.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="750" y="401" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <rect x="860" y="388" width="72" height="18" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="896" y="400.5" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">activée</text>
  <text x="942" y="401" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="401" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="401" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="401" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="401" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="412" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="431" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-stalled-deals</text>
  <text x="440" y="431" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Signaler les affaires sans nouvelles</text>
  <rect x="658" y="419" width="48" height="16" rx="3" fill="#4a9eff" fillOpacity="0.12" stroke="#4a9eff" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="682.0" y="430.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="750" y="431" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 8 ∗ ∗ mon-fri</text>
  <rect x="860" y="418" width="72" height="18" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="896" y="430.5" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">activée</text>
  <text x="942" y="431" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="431" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="431" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="431" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="431" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="452" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="470" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="268" y="470" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Framework</text>
  <text x="328.4" y="470" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">4</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle tâche · Planning · Recharger</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'éditeur, la vue jour par jour</text>
  <line x1="200" y1="87.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="20" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche et filtres</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">gardés dans le navigateur</text>
  <line x1="200" y1="149.0" x2="240" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="20" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux politiques communes</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rétention, planifications manquées</text>
  <line x1="200" y1="213.0" x2="240" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches principales d'abord</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les tâches étiquetées main</text>
  <line x1="200" y1="267.0" x2="240" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un groupe par application</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic le replie</text>
  <line x1="200" y1="397.0" x2="240" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="20" y="450" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Framework en dernier</text>
  <text x="30" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les tâches sans application</text>
  <line x1="200" y1="467.0" x2="240" y2="466" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="1120" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernière exécution</text>
  <text x="1130" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre son détail</text>
  <line x1="1120" y1="253.0" x2="710" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="1120" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">activée / désactivée</text>
  <text x="1130" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bascule le planning de la tâche</text>
  <line x1="1120" y1="337.0" x2="932" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
  <rect x="1120" y="410" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="425" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions</text>
  <text x="1130" y="438" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exécuter, modifier, cloner, exporter, supprimer</text>
  <line x1="1120" y1="427.0" x2="1030" y2="372" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjl-arrow)"/>
</svg>

---

## Recherche et filtres \{#toolbar\}

| Élément | Usage |
|---|---|
| **Rechercher** | Trouve une tâche par son identifiant, sa description ou une étiquette. |
| **Toutes les applications**, **Tout statut**, **Toute étiquette** | Restreignent la liste. Statut : *Activées*, *Désactivées*, *Planifiées (activées avec une prochaine exécution)*, *En cours*, *Dernière exécution en échec*. |
| **Effacer** | Remet à zéro la recherche et les filtres. |
| *N sur M tâches* | Le nombre de tâches retenues par les filtres. |
| **Nouvelle tâche** | Ouvre l'éditeur de tâche — voir [Créer une tâche](./create.md). |
| **Planning** | Ouvre la vue jour par jour des planifications — voir [Planifications](./schedules.md#schedule-view). |
| **Recharger** | Relit la liste. |

La recherche et les filtres sont conservés par le navigateur d'une visite à l'autre. Deux panneaux repliés regroupent les règles communes à toutes les tâches : **Rétention de l'historique** ([Administration](../administration.md#retention)) et **Planifications manquées** ([Planifications](./schedules.md#missed)).

---

## Groupes \{#groups\}

- **Tâches principales** vient en tête : les tâches portant l'étiquette `main`, celles que les exploitants lancent le plus souvent — la collecte d'une application, une synchronisation de nuit.
- Viennent ensuite un groupe par **application**, par ordre alphabétique : une tâche appartient à l'application que nomment ses étiquettes ou son identifiant (`nomasx1-collect-all` → Nomasx-1) ; les autres vont dans **Framework**, en dernier.

Un clic sur le titre d'un groupe le replie ou le déplie.

---

## Une ligne de tâche \{#card\}

| Élément | Signification |
|---|---|
| Identifiant, description | Un clic sur l'identifiant ouvre l'éditeur de la tâche. |
| Dernière exécution | L'état de la dernière exécution ; un clic en ouvre le détail. |
| Planification | Le cron, ou **Manuelle**, avec la prochaine exécution. |
| **activée** / **désactivée** | Un clic active ou désactive aussitôt la planification propre de la tâche, sans recharger la configuration. **Exécuter** fonctionne dans les deux cas, et les planifications des préréglages ne sont pas concernées. |

Les icônes en fin de ligne :

| Icône | Effet |
|---|---|
| **Exécuter** | Lance la tâche. Quand il y a quelque chose à choisir — paramètres, arguments d'étape, plusieurs étapes, une étape `file_load` —, la fenêtre **Exécuter avec des paramètres** s'ouvre d'abord. Pendant l'exécution, l'icône devient **Annuler**. |
| **Modifier** | Ouvre l'éditeur de la tâche. |
| **Cloner** | Demande un nouvel identifiant et crée une copie désactivée, sans aucune planification : ni la sienne, ni celles des préréglages. |
| **Exporter** | Télécharge un ZIP contenant l'entrée `jobs.toml` de la tâche et un `MANIFEST.md`. Les connecteurs et requêtes utilisés ne sont pas inclus. |
| **Supprimer** | Retire la tâche de `jobs.toml` après confirmation. Son historique d'exécutions est conservé. |

---

## Exécuter avec des paramètres \{#run-with-parameters\}

La fenêtre ne vaut que pour cette exécution — `jobs.toml` n'est pas modifié.

| Partie | Contenu |
|---|---|
| **Préréglage** | Choisir un préréglage enregistré puis **Appliquer** : la fenêtre revient d'abord aux valeurs enregistrées de la tâche, puis applique le préréglage — comme le fait l'ordonnanceur. *(choisir un préréglage…)* ramène aux valeurs enregistrées. **Enregistrer comme préréglage…** enregistre l'état courant de la fenêtre sous un nom, dans `jobs.toml`. |
| **Paramètres partagés (toutes les étapes)** | Les paramètres partagés de la tâche, modifiables pour cette exécution. Un paramètre proposé aux utilisateurs s'affiche en liste déroulante — ses choix peuvent venir d'une requête, comme les applications de Nomasx-1 —, ou en cases à cocher précédées de **Tout** quand plusieurs valeurs sont permises. |
| **Étapes** | Une ligne par étape avec une case pour la sauter (**Toutes** / **Aucune**) ; **Modifier les paramètres** ouvre les arguments d'une étape. Une étape `file_load` reçoit un sélecteur de fichier — voir [Étapes](../steps.md#file-load). |
| **Niveau de journal** | *WARNING — avertissements et erreurs seulement*, *INFO — nombres de lignes et jalons*, *DEBUG — le SQL complet de chaque requête*. |
| **Exécuter** | Envoie les fichiers choisis, puis démarre l'exécution. |

**Plusieurs valeurs, plusieurs exécutions.** Une tâche prévue pour s'exécuter *par valeur* — par application, par société — s'exécute une fois pour chaque valeur cochée, l'une après l'autre, chacune avec une seule valeur ; une valeur en échec n'empêche pas les suivantes. **Tout** reprend toutes les valeurs proposées. Dans les [exécutions](../runs/history.md), chaque exécution indique la valeur traitée.

Usages courants : relancer seulement l'étape en échec, recharger un mois, exécuter en `DEBUG` pour voir le SQL, lancer un préréglage à la main, collecter trois applications d'un coup.

---

## Annuler \{#cancel\}

**Annuler** demande l'arrêt de l'exécution. Les étapes SQL, HTTP, de chargement de fichier et les fonctions Python `async` s'arrêtent aussitôt ; l'exécution se termine **CANCELED**. Une fonction Python synchrone ne peut pas être interrompue : l'exécution est marquée annulée et la fonction se termine d'elle-même — voir [Dépannage](../runs/troubleshoot.md#cancellation-doesnt-stop-my-step).
