---
title: Code système
description: "Mappage de chaque System Code JDE vers son module fonctionnel et vers le composant de licence correspondant."
keywords: [Nomasx-1, paramètres, JDE, system code, module, composant de licence, mappage OUT]
---

# Code système

L'écran **Code système** mappe chaque System Code JDE (`SY`) vers son module fonctionnel et vers le composant de licence utilisé par Nomasx-1 pour le reporting d'usage / de conformité. Une ligne par `SY`. C'est la table derrière la colonne *Composant* de toutes les vues OUT.

La justesse de ce mappage est ce qui rend l'analyse de conformité licence crédible.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 342" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jsy-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jsy-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jsy-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jsy-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="262" rx="14" fill="url(#jsy-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres - Code système (JDE)</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">214 lignes · 12 ms</text>
  <rect x="959" y="84" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="85" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="89" x2="1018" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="272.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪ Importer</text>
  <rect x="317" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="327" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="473" y="112" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="512.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="112" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="112" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="112" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="243" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CODE</text>
  <text x="303" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="503" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">MODULE E1</text>
  <text x="653" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT E1</text>
  <text x="839" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">COMPOSANT ID</text>
  <text x="853" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">01</text>
  <text x="303" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="503" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Foundation</text>
  <text x="653" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">System Foundation</text>
  <text x="839" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1504</text>
  <text x="853" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne System Foundat…</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">04</text>
  <text x="303" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Accounts Payable</text>
  <text x="503" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="653" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="839" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1101</text>
  <text x="853" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Financials</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">42</text>
  <text x="303" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Sales Management</text>
  <text x="503" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Order Management</text>
  <text x="653" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Sales Order Manag…</text>
  <text x="839" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1007</text>
  <text x="853" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sales Order Ma…</text>
  <text x="233" y="260" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="248" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="261" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 214</text>
  <text x="1087" y="261" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="298" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code</text>
  <text x="225.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">code système JDE</text>
  <line x1="435.0" y1="298" x2="251" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jsy-arrow)"/>
  <rect x="665.0" y="298" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant</text>
  <text x="675.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">licence imputée</text>
  <line x1="885.0" y1="298" x2="861" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jsy-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Importer</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mettre à jour depuis Excel</text>
  <line x1="197" y1="123.0" x2="258" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jsy-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grille en lecture seule</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pas de dialogue au clic</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jsy-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le fichier à compléter</text>
  <line x1="1119" y1="134.0" x2="1042.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jsy-arrow)"/>
</svg>

---

## Objectif de l'écran

- **Mapper les System Codes JDE vers les modules fonctionnels.** Base de la ventilation par *Module* dans l'application.
- **Lier chaque `SY` à un composant de licence.** C'est le seul endroit où Nomasx-1 sait qu'un `P0411` (SY = 04) consomme la licence *Financials*.
- **Conserver l'étiquette de composant E1.** Quand Oracle livre sa propre nomenclature dans JDE EnterpriseOne, le mappage garde les deux perspectives lisibles.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Code** | `SYC_ID` — System Code JDE. | Code à deux caractères (par ex. `04`, `42`, `08`). |
| **Description** | `SYC_DESCRIPTION` — texte. | Description lisible du module. |
| **Module E1** | `SYC_MODULE` — regroupement de haut niveau. | Domaine fonctionnel utilisé dans les vues hors licence. |
| **Composant E1** | `SYC_COMPONENT_E1` — code de composant JDE E1. | Code employé par Oracle dans JDE EnterpriseOne pour le composant. |
| **Composant ID** | `SYC_CPT_ID` — lié à *Pricing → Composants*. | Identifiant de composant de licence Nomasx-1. |
| **Composant** | `CPT_COMPONENT` — libellé dénormalisé. | Libellé lisible du composant de licence. |

---

## Import depuis Excel \{#import\}

La grille est en lecture seule : un clic sur une ligne n'ouvre rien. Les lignes se modifient par **Importer**, depuis un fichier Excel (`.xlsx`) ou `.csv` dont les colonnes reprennent celles de la grille : **Exporter** la grille, modifier le fichier puis le réimporter. L'import met à jour les lignes existantes, il n'en crée pas.

<svg viewBox="0 0 1320 264" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jsyi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jsyi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jsyi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jsyi-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="300" y="20" width="720" height="220" rx="14" fill="url(#jsyi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="320" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Importer depuis Excel</text>
  <line x1="300" y1="66" x2="1020" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="320" y="84" width="680" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#475569" strokeWidth="1" strokeDasharray="5 4"/>
  <text x="660.0" y="108" fill="#94a3b8" fontSize="14" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪</text>
  <text x="660.0" y="128" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="ui-monospace, monospace">system_codes.xlsx · 214 lignes</text>
  <text x="320" y="168" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">214 lignes</text>
  <rect x="380" y="156" width="83" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="421.5" y="168.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ 214 valides</text>
  <line x1="300" y1="188" x2="1020" y2="188" stroke="#1f2937" strokeWidth="1"/>
  <rect x="808" y="200" width="192" height="24" rx="5" fill="url(#jsyi-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="904.0" y="215.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer 214 lignes valides</text>
  <rect x="737" y="200" width="63" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="768.5" y="215.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="12" y="43" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="58" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mise à jour seule</text>
  <text x="22" y="71" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les lignes doivent déjà exister</text>
  <line x1="282" y1="60.0" x2="320" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jsyi-arrow)"/>
  <rect x="12" y="96" width="270" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Déposer le fichier</text>
  <text x="22" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">.xlsx ou .csv, colonnes par nom</text>
  <line x1="282" y1="113.0" x2="320" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jsyi-arrow)"/>
  <rect x="1034" y="157" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="172" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vérifier</text>
  <text x="1044" y="185" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règles et base, avant d'enregistrer</text>
  <line x1="1034" y1="174.0" x2="430" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jsyi-arrow)"/>
  <rect x="1034" y="207" width="276" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1044" y="222" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer les lignes valides</text>
  <text x="1044" y="235" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les invalides sont ignorées</text>
  <line x1="1034" y1="224.0" x2="904.0" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jsyi-arrow)"/>
</svg>

1. Déposer le fichier dans la fenêtre, puis cliquer sur **Vérifier** : chaque ligne est contrôlée au regard des règles de l'écran et de la base, et chaque ligne invalide est listée avec sa raison.
2. **Enregistrer N lignes valides** écrit les lignes valides ; les lignes invalides sont ignorées.

Le fichier porte les colonnes suivantes :

| Colonne | Contenu |
|---|---|
| **Code** | Clé — code système JDE à deux caractères. |
| **Description** | Libellé du module. |
| **Module E1** | Domaine fonctionnel. |
| **Composant E1** | Composant tel qu'Oracle le nomme. |
| **Composant ID** | Composant de licence auquel le code est imputé (issu de *Tarification → Composants*). |

---

## Conseils & bonnes pratiques

- **Aligner le mappage sur le catalogue contractuel**, et non sur les valeurs par défaut Oracle. Une renégociation introduit souvent de nouveaux noms de composants — les mettre à jour ici.
- **Tout nouveau SY introduit par une mise à niveau JDE** doit être classifié ici ; sinon il apparaît non mappé dans les vues OUT.
- **Auditer les modifications** via les colonnes masquées `SYC_AUDIT_USER` / `SYC_AUDIT_DATE` — utile pour expliquer pourquoi un comptage de composant a évolué.
