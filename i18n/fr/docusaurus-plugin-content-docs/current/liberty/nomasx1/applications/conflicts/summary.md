---
title: Conflits — Synthèse
description: "Vue de synthèse des conflits de séparation des tâches — nombre d'utilisateurs en conflit, ventilé par processus métier et par risque."
keywords: [Nomasx-1, applications, conflits, séparation des tâches, SoD, synthèse, risque]
---

# Conflits — Synthèse

L'écran **Conflits — Synthèse** est la *vue de tête* des conflits de séparation des tâches sur une application connectée. Une ligne par triplet `(Application, Processus, Risque)`. Chaque ligne porte le nombre d'utilisateurs qui détiennent la combinaison de rôles incompatibles définie par la matrice SoD.

C'est l'écran ouvert au début d'une revue trimestrielle et celui que l'on capture pour le comité de pilotage.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 442" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="362" rx="14" fill="url(#cfs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">SOD - Summary</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Filtres avancés</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">36 lignes · 12 ms</text>
  <rect x="959" y="118" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="119" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="123" x2="1018" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="146" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="146" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="146" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="146" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="359" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="373" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="459" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID (ID)</text>
  <text x="555" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID</text>
  <text x="675" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISQUE ID (ID)</text>
  <text x="765" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISQUE ID</text>
  <text x="1031" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">NOMBRE</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="207" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="218.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="555" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Procure to Pay</text>
  <text x="675" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PR01</text>
  <text x="765" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create a supplier and pay it</text>
  <text x="1031" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="229" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="240.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="555" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Procure to Pay</text>
  <text x="675" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PR03</text>
  <text x="765" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Enter and approve a voucher</text>
  <text x="1031" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="251" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="262.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">O2C01</text>
  <text x="555" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Order to Cash</text>
  <text x="675" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">O2CR02</text>
  <text x="765" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create a customer and post receipts</text>
  <text x="1031" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">7</text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="273" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="284.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">GL01</text>
  <text x="555" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Finance &amp; Accounting</text>
  <text x="675" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">GLR05</text>
  <text x="765" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Post journal entries and close periods</text>
  <text x="1031" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <rect x="233" y="292" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="295" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="306.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">GL01</text>
  <text x="555" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Finance &amp; Accounting</text>
  <text x="675" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">GLR08</text>
  <text x="765" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Maintain accounts and post entries</text>
  <text x="1031" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <rect x="233" y="314" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="317" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="328.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV01</text>
  <text x="555" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Inventory</text>
  <text x="675" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INVR01</text>
  <text x="765" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Adjust stock and count it</text>
  <text x="1031" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="233" y="360" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="348" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="361.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="361" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–36 sur 36</text>
  <text x="1087" y="361" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="256" y="225.0" width="169" height="98" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="231.0" width="161" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="245.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users</text>
  <text x="415" y="245.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="267.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Roles</text>
  <text x="415" y="267.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="289.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Objects</text>
  <text x="415" y="289.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="311.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Details</text>
  <text x="415" y="311.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Processus</text>
  <text x="225.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">de Paramètres → SoD</text>
  <line x1="360.0" y1="398" x2="563" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
  <rect x="515.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Risque</text>
  <text x="525.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la paire d'activités en conflit</text>
  <line x1="660.0" y1="398" x2="773" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
  <rect x="815.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nombre</text>
  <text x="825.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs en conflit</text>
  <line x1="960.0" y1="398" x2="1023" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
  <rect x="12" y="198.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="213.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de la ligne (···)</text>
  <text x="22" y="226.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou clic droit sur la ligne</text>
  <line x1="197" y1="215.0" x2="248" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
  <rect x="12" y="306.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="321.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre accès détaillés</text>
  <text x="22" y="334.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs, rôles, objets, détails</text>
  <line x1="197" y1="323.0" x2="276" y2="323.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la synthèse vers Excel</text>
  <line x1="1119" y1="168.0" x2="1042.5" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfs-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque application connectée :

- **Où les risques SoD se situent-ils dans le métier ?** La ventilation par *Processus* (P2P, O2C, R2R, RH…) cartographie les conflits sur un schéma compréhensible par tous.
- **Combien d'utilisateurs sont concernés par risque ?** La colonne *Utilisateurs* est le chiffre clé. Suivre son évolution trimestre après trimestre est l'indicateur SoD le plus simple.
- **Quand la donnée a-t-elle été calculée ?** La *Date MAJ* précise la fraîcheur. Une date ancienne décrédibilise tout le reste du tableau.

Le jeu de données est synthétisé — seules les lignes `CFS_COUNT > 0` apparaissent, triées par *Application → Processus → Risque*. L'écran *Détails* est la vue d'analyse fine.

:::info[Spécifique à JDE]
Les conflits se calculent sur les droits effectifs, qui comprennent les chemins d'accès des pages composites et des pages E1 pour les applications cochées **E1 Composite** / **E1 Pages** dans [Applications](../../settings/global/applications.md) — ce qu'ouvrent leurs tuiles, les formulaires de leurs volets, les applications et les états que cite une page E1. Activer ou désactiver un indicateur modifie les conflits à la collecte suivante.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `CFS_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Process ID** | `CFS_PROCESS_ID` — processus métier. Liste déroulante vers le catalogue *SoD Process*. | Processus fonctionnel auquel le risque appartient (P2P, O2C, R2R, RH…). |
| **Risque ID** | `CFS_RISK_ID` — règle d'incompatibilité. Liste déroulante vers le catalogue *SoD Risks*. | Risque nommé mesuré. |
| **Nombre** | `CFS_COUNT` — nombre d'utilisateurs détenant la combinaison incompatible. | Nombre de personnes en conflit sur la ligne. Chiffre clé. |
| **Date mise à jour** | `CFS_REFRESH` — date de calcul de la ligne. | Fraîcheur de l'analyse. |

---

## Menu contextuel

Le bouton **···** en début de ligne, ou un clic droit sur la ligne, ouvre son menu.

| Action | Vers où |
|---|---|
| **Display Users** | Liste des utilisateurs en conflit pour le couple `(Processus, Risque)` sélectionné. |
| **Display Roles** | Paires de rôles incompatibles pour le couple `(Processus, Risque)` sélectionné. |
| **Display Objects** | Objets source qui supportent le conflit. |
| **Display Details** | Jeu *Conflits → Détails* filtré sur le `(Processus, Risque)` sélectionné. |

---

## Conseils & bonnes pratiques

- **Trier sur *Nb utilisateurs* décroissant** pour tomber sur le risque à plus fort impact — la ligne à présenter au comité de pilotage.
- **Regrouper par *Processus*** pour voir quel domaine métier porte le plus de SoD — donnée souvent demandée par le directeur financier ou le COO.
- **Surveiller la *Date MAJ*** — une ligne qui n'a pas été rafraîchie depuis plusieurs semaines signifie en général que la collecte SoD ne s'exécute plus. Relancer la collecte.
- **Cliquer pour rebondir sur *Détails*** afin d'obtenir les lignes sous-jacentes d'une ligne donnée.
