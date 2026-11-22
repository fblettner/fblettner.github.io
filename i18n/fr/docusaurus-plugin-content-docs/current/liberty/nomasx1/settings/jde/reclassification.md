---
title: Reclassification
description: "Surcharge du mappage objet JDE → SY quand la classification par défaut est fausse ou manquante."
keywords: [Nomasx-1, paramètres, JDE, reclassification, surcharge objet, system code]
---

# Reclassification

L'écran **Reclassification** surcharge le System Code que Nomasx-1 appliquerait par défaut à un objet JDE. Une ligne par objet. Utile quand le SY par défaut d'un programme ne correspond pas à sa réalité licence — typiquement un programme *techniquement* en `H9` mais *commercialement* en `Financials`.

Chaque ligne dit : *pour cet objet, utiliser ce `SY` à la place du défaut*. Le changement se propage à toutes les vues OUT et rapports de licence qui passent par *Code système*.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 342" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jrc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jrc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jrc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jrc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="262" rx="14" fill="url(#jrc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres - Reclassification (JDE)</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">192 lignes · 12 ms</text>
  <rect x="959" y="84" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="85" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="89" x2="1018" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="112" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="297.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="367" y="112" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="425.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier en lot</text>
  <rect x="490" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="529.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪ Importer</text>
  <rect x="574" y="112" width="88" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="584" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="668" y="112" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="707.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="758" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="112" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="243" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJET</text>
  <text x="353" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="613" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CODE SYSTÈME (ID)</text>
  <text x="723" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CODE SYSTÈME</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F00092</text>
  <text x="353" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Supplemental Data</text>
  <text x="613" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00</text>
  <text x="723" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Foundation Environment</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0092</text>
  <text x="353" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">User Profiles</text>
  <text x="613" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00</text>
  <text x="723" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Foundation Environment</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="353" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Invoice Print</text>
  <text x="613" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">42</text>
  <text x="723" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Sales Management</text>
  <text x="233" y="260" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="248" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="261" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 192</text>
  <text x="1087" y="261" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="298" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet</text>
  <text x="225.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'objet reclassé</text>
  <line x1="435.0" y1="298" x2="251" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
  <rect x="665.0" y="298" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code système</text>
  <text x="675.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">compté sous ce code</text>
  <line x1="885.0" y1="298" x2="731" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reclasser un objet</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
  <rect x="12" y="148" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="163" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Importer</text>
  <text x="22" y="176" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une liste depuis Excel</text>
  <line x1="197" y1="165.0" x2="515" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
  <rect x="12" y="190" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="22" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre le dialogue de modification</text>
  <line x1="197" y1="207.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers Excel</text>
  <line x1="1119" y1="134.0" x2="1042.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrc-arrow)"/>
</svg>

---

## Objectif de l'écran

- **Surcharger le SY** quand la classification JDE ne reflète pas la réalité contractuelle.
- **Garder la liste courte.** Chaque entrée est une exception — trop de surcharges rendent le modèle de licence difficile à défendre en audit.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Objet** | `JDES_OBJECT` — objet technique. | Programme reclassifié. |
| **Description** | `JDES_DESCRIPTION` — libellé convivial. | Ce que fait le programme. |
| **Code système** | `JDES_SY` — System Code. | SY que Nomasx-1 doit utiliser à la place du défaut JDE. |

---

## Boîte de dialogue

**Ajouter une ligne** rattache un nouvel objet à un autre code système ; un clic sur une ligne l'ouvre. **Importer** charge une liste depuis un fichier Excel ou `.csv`. La fenêtre, **Modifier · Paramètres - Reclassification (JDE)**, est un formulaire unique avec **Supprimer**, **Dupliquer**, **Annuler** et **Enregistrer**.

<svg viewBox="0 0 1320 353" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jrd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jrd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jrd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jrd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="272" rx="14" fill="url(#jrd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Paramètres - Reclassification (JDE)</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <rect x="235.0" y="98" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">R42565</text>
  <text x="235.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="235.0" y="144" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="158.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Invoice Print</text>
  <text x="235.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE SYSTÈME</text>
  <rect x="235.0" y="190" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="204.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">42  Sales Management</text>
  <text x="1075.0" y="205" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <line x1="215" y1="238" x2="1105" y2="238" stroke="#1f2937" strokeWidth="1"/>
  <rect x="989" y="252" width="96" height="24" rx="5" fill="url(#jrd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1037.0" y="267.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Enregistrer</text>
  <rect x="907" y="252" width="74" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="267.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="814" y="252" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="267.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <rect x="732" y="252" width="74" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="769.0" y="267.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="12" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet</text>
  <text x="22" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un nom d'objet JDE</text>
  <line x1="197" y1="109.0" x2="233.0" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrd-arrow)"/>
  <rect x="12" y="184" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="199" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code système</text>
  <text x="22" y="212" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisi dans la liste</text>
  <line x1="197" y1="201.0" x2="233.0" y2="201" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrd-arrow)"/>
  <rect x="1119" y="259" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="274" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Supprimer</text>
  <text x="1129" y="287" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retour à son code d'origine</text>
  <line x1="1119" y1="276.0" x2="769.0" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrd-arrow)"/>
  <rect x="1119" y="301" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="316" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1129" y="329" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pris à la prochaine collecte</text>
  <line x1="1119" y1="318.0" x2="1037.0" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrd-arrow)"/>
</svg>

| Champ | À renseigner |
|---|---|
| **Objet** | Nom de l'objet JDE (par exemple `P0411Z1`). En lecture seule sur une ligne enregistrée : pour reclassifier un autre objet, ajouter une ligne. |
| **Description** | Libellé convivial de ce que fait le programme. |
| **Code système** | Choisi dans la liste des codes système. Valeur retenue par Nomasx-1 à la place de celle de l'objet. |

---

## Conseils & bonnes pratiques

- **Documenter la justification** de chaque surcharge — une ligne lisible par un futur auditeur.
- **Revalider la liste après une montée de version Oracle.** JDE déplace parfois un objet entre system codes, rendant rétroactivement une surcharge redondante.
- **Éviter les surcharges systémiques** — si plus d'une poignée d'objets du même module doivent être reclassifiés, revoir plutôt le mappage dans *Code système*.
