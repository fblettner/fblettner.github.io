---
title: JD Edwards
description: "Paramètres JD Edwards de chaque application connectée dans Nomasx-1 — où lire les tables de JDE E1 (schémas et liens de base), quels menus construisent la sécurité, les bibliothèques des objets utilisateur et la purge de la traçabilité des objets."
keywords: [Nomasx-1, paramètres, JD Edwards, schémas, lien de base, E1 pages, pages composites, objets utilisateur, UDO, traçabilité des objets]
---

# JD Edwards

L'écran **JD Edwards** (*Settings - JD Edwards*) porte, pour chaque application JD Edwards EnterpriseOne connectée, l'emplacement des tables JDE lues par la collecte et ce qu'elle lit. Une ligne par application. Accès : **Paramètres → Global → JD Edwards**.

Les mêmes champs figurent dans l'onglet **JD Edwards** d'[Applications](./applications.md) ; cet écran présente toutes les applications côte à côte.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 366" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sjd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sjd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sjd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sjd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="286" rx="14" fill="url(#sjd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - JD Edwards</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="94" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="233" y="100" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="113.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">(null si vide)</text>
  <text x="233" y="142" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">2 lignes · 12 ms</text>
  <rect x="959" y="130" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="131" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="143.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="135" x2="1018" y2="145" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="143.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="158" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="297.0" y="172.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="367" y="158" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="425.5" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier en lot</text>
  <rect x="490" y="158" width="111" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="172.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="607" y="158" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="646.0" y="172.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="697" y="158" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="158" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="158" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="158" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="158" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="190" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="349" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="363" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="463" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE SY</text>
  <text x="533" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE DTA</text>
  <text x="613" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE CTL</text>
  <text x="693" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE SVM</text>
  <text x="763" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE CO</text>
  <text x="833" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE OL</text>
  <text x="903" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">F00950</text>
  <rect x="233" y="216" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="230.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="463" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SY920</text>
  <text x="533" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="613" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODCTL</text>
  <text x="693" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SVM920</text>
  <text x="763" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PD920</text>
  <text x="833" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">OL920</text>
  <text x="903" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SY920</text>
  <rect x="233" y="238" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="252.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="363" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-TEST</text>
  <text x="463" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SY920</text>
  <text x="533" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">TESTDTA</text>
  <text x="613" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">TESTCTL</text>
  <text x="693" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SVM920</text>
  <text x="763" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PY920</text>
  <text x="833" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">OL920</text>
  <text x="903" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SY920</text>
  <text x="233" y="284" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="272" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="285.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="285" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–2 sur 2</text>
  <text x="1087" y="285" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="322" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schémas</text>
  <text x="225.0" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">où sont lues les tables JDE</text>
  <line x1="435.0" y1="322" x2="541" y2="261.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
  <rect x="665.0" y="322" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">F00950</text>
  <text x="675.0" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">schéma du security workbench</text>
  <line x1="885.0" y1="322" x2="911" y2="261.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
  <rect x="12" y="93" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="108" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application ID</text>
  <text x="22" y="121" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide : toutes les applications</text>
  <line x1="197" y1="110.0" x2="305" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
  <rect x="12" y="152" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="167" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="22" y="180" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">paramètres d'une application</text>
  <line x1="197" y1="169.0" x2="263" y2="169" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
  <rect x="12" y="232.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="247.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="22" y="260.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre le dialogue de modification</text>
  <line x1="197" y1="249.0" x2="515" y2="249.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
  <rect x="1119" y="163" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="178" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes</text>
  <text x="1129" y="191" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liens de base, indicateurs, rétention</text>
  <line x1="1119" y1="180.0" x2="953.0" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
</svg>

Le champ **Application ID** au-dessus de la grille la restreint à une application ; vide, il les affiche toutes.

---

## Boîte de dialogue \{#edit-dialog\}

**Ajouter une ligne** crée les paramètres JD Edwards d'une application ; un clic sur une ligne les ouvre. La fenêtre, **Modifier · JD Edwards Settings**, est un formulaire unique sur quatre colonnes, avec **Supprimer**, **Dupliquer**, **Annuler** et **Enregistrer**.

<svg viewBox="0 0 1320 552" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sjdd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sjdd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sjdd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sjdd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="502" rx="14" fill="url(#sjdd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · JD Edwards Settings</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="235.0" y="98" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1  JDE-PROD</text>
  <text x="427.0" y="113" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="235.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE DTA</text>
  <rect x="235.0" y="144" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="158.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PRODDTA</text>
  <text x="451.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_DTA_DBLINK</text>
  <rect x="451.0" y="144" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="158.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE CTL</text>
  <rect x="667.0" y="144" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="158.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PRODCTL</text>
  <text x="883.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_CTL_DBLINK</text>
  <rect x="883.0" y="144" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="158.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE SY</text>
  <rect x="235.0" y="190" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="204.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="451.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_SY_DBLINK</text>
  <rect x="451.0" y="190" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="204.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE SVM</text>
  <rect x="667.0" y="190" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="204.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SVM920</text>
  <text x="883.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_SVM_DBLINK</text>
  <rect x="883.0" y="190" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="204.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE CO</text>
  <rect x="235.0" y="236" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="250.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PD920</text>
  <text x="451.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_CO_DBLINK</text>
  <rect x="451.0" y="236" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="250.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE OL</text>
  <rect x="667.0" y="236" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="250.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">OL920</text>
  <text x="883.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_OL_DBLINK</text>
  <rect x="883.0" y="236" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="250.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">F00950</text>
  <rect x="235.0" y="282" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="296.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="451.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_F00950_DBLINK</text>
  <rect x="451.0" y="282" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="296.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_SEC</text>
  <rect x="667.0" y="282" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="296.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="883.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_SEC_DBLINK</text>
  <rect x="883.0" y="282" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="296.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_OL</text>
  <rect x="235.0" y="328" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="342.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">OL920</text>
  <text x="451.0" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_OL_DBLINK</text>
  <rect x="451.0" y="328" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="342.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LECTURE LOB EN MODE THICK (O/N)</text>
  <rect x="667.0" y="331" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="684.0" y="340" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="235.0" y="368" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENU STANDARD (Y/N)</text>
  <rect x="235.0" y="377" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M237.5,382.5 L239.8,384.8 L243.8,380" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="252.0" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">activé</text>
  <text x="451.0" y="368" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E1 PAGES (Y/N)</text>
  <rect x="451.0" y="377" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M453.5,382.5 L455.8,384.8 L459.8,380" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="468.0" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">activé</text>
  <text x="667.0" y="368" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E1 COMPOSITE (Y/N)</text>
  <rect x="667.0" y="377" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M669.5,382.5 L671.8,384.8 L675.8,380" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="684.0" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">activé</text>
  <text x="235.0" y="414" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PURGE OUT</text>
  <rect x="235.0" y="423" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M237.5,428.5 L239.8,430.8 L243.8,426" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="252.0" y="432" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">activé</text>
  <text x="451.0" y="414" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOURS RETENTION OUT</text>
  <rect x="451.0" y="420" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="434.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">90</text>
  <line x1="215" y1="468" x2="1105" y2="468" stroke="#1f2937" strokeWidth="1"/>
  <rect x="989" y="482" width="96" height="24" rx="5" fill="url(#sjdd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1037.0" y="497.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Enregistrer</text>
  <rect x="907" y="482" width="74" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="497.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="814" y="482" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="497.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <rect x="732" y="482" width="74" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="769.0" y="497.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="12" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application ID</text>
  <text x="22" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">non modifiable une fois enregistré</text>
  <line x1="197" y1="109.0" x2="233.0" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="12" y="138" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schémas</text>
  <text x="22" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">données, contrôle, système, server map…</text>
  <line x1="197" y1="155.0" x2="233.0" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="12" y="322" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bibliothèques UDO</text>
  <text x="22" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requises pour les objets utilisateur</text>
  <line x1="197" y1="339.0" x2="233.0" y2="339" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="12" y="368" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menus à lire</text>
  <text x="22" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">standard, E1 pages, composite</text>
  <line x1="197" y1="385.0" x2="233.0" y2="385" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="1119" y="138" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">…_DBLINK</text>
  <text x="1129" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lien de base par schéma</text>
  <line x1="1119" y1="155.0" x2="1087.0" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="1119" y="322" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lecture LOB thick</text>
  <text x="1129" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JDE atteint par un lien de base</text>
  <line x1="1119" y1="339.0" x2="871.0" y2="339" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="1119" y="414" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="429" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Purge OUT · rétention</text>
  <text x="1129" y="442" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jours d'utilisation gardés</text>
  <line x1="1119" y1="431.0" x2="655.0" y2="431" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="1119" y="489" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="504" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1129" y="517" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pris à la prochaine collecte</text>
  <line x1="1119" y1="506.0" x2="1037.0" y2="506" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
</svg>

| Champ | À renseigner |
|---|---|
| **Application ID** | L'application. Non modifiable une fois enregistrée. |
| **JDE DTA** | Schéma des tables de données métier (F0101, F4211…). |
| **JDE CTL** | Schéma des tables de contrôle (F0005…). |
| **JDE SY** | Schéma des tables système (sécurité F00950, utilisateurs F0092…). |
| **JDE SVM** | Schéma des tables server map. |
| **JDE CO** | Schéma des objets centraux — les spécifications lues par la référence croisée. |
| **JDE OL** | Schéma de l'Object Librarian (F9860, F9861) — catalogue des objets et menus. |
| **F00950** | Schéma de la table du security workbench, quand ce n'est pas le schéma système. |
| **JDE_UDO_SEC** | Schéma de la table de sécurité des objets utilisateur (F00950W) : ses lignes s'ajoutent à la sécurité collectée. Vide : ignorée. |
| **JDE_UDO_OL** | Schéma de la bibliothèque des objets utilisateur (F9860W, F9861W), lue pour les pages composites, les E1 pages et l'inventaire des objets utilisateur. Vide : ces étapes ne font rien et le signalent. |
| **…_DBLINK** | À côté de chaque schéma : le lien de base qui y mène. Vide quand les tables JDE sont dans la base à laquelle Nomasx-1 se connecte. |
| **Lecture LOB en mode thick (O/N)** | À cocher quand les tables JDE sont atteintes par un lien de base : les menus et les spécifications (colonnes LOB) sont alors lus par un processus thick de courte durée. |
| **Menu standard (Y/N)** | Lire les menus JDE standard pour construire la sécurité. |
| **E1 Pages (Y/N)** | Lire les E1 pages : les applications et les états que leur code appelle ou nomme deviennent des chemins d'accès. |
| **E1 Composite (Y/N)** | Lire les pages composites : ce qu'ouvrent leurs tuiles, les écrans de leurs volets, la tâche d'une tuile de tâche — pour une page d'accueil, toutes les tâches de son menu. |
| **Purge OUT** | Purger dans JDE les anciennes lignes de traçabilité des objets une fois collectées par Nomasx-1. |
| **Jours Retention OUT** | Nombre de jours d'historique d'utilisation conservés dans JDE par la purge. |

:::info[Spécifique à JDE]
Les menus lus déterminent les chemins d'accès derrière *Menus*, *Droits*, la séparation des tâches et les chiffres de licence : activer ou désactiver **E1 Pages** ou **E1 Composite** les modifie à la collecte de sécurité suivante. L'inventaire des objets utilisateur (requêtes, formats de grille, watchlists, extensions d'écran, pages composites, orchestrations…) et la référence croisée construite depuis les objets centraux sont lus par les écrans de Nomajde, à partir de ce que Nomasx-1 collecte avec ces paramètres.
:::

---

## Conseils & bonnes pratiques

- **Demander à l'administrateur JDE** les noms des schémas et des liens de base : ils viennent de l'installation JDE (path code, sources de données).
- **Renseigner JDE_UDO_OL** sur toute installation en Tools 9.2 : une grande part de ce que modifie un client est un objet utilisateur, et les pages composites donnent des chemins d'accès absents des menus standard.
- **Ne cocher la lecture LOB en mode thick qu'avec un lien de base** ; une installation locale lit directement les colonnes LOB.
- **Garder une rétention OUT plus longue que l'intervalle de collecte**, pour qu'aucune ligne d'utilisation ne soit purgée avant sa lecture par Nomasx-1.
