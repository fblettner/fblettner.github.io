---
title: CSI
description: "Customer Support Identifier — liste des contrats de support Oracle auxquels les applications connectées sont rattachées."
keywords: [Nomasx-1, licences, CSI, Customer Support Identifier, Oracle, contrat de support, droit acquis]
---

# CSI

L'écran **CSI** liste tous les *Customer Support Identifier* Oracle déclarés dans Nomasx-1. Une ligne par contrat. Chaque ligne porte l'identifiant, une description lisible, les dates de validité et le statut courant.

Le CSI est l'ancrage contractuel : les volumétries (licences acquises, support), l'analyse d'utilisation (*Rapport d'utilisation*) et le calcul d'impact financier (*Rapport financier*) s'y rattachent tous via le catalogue des composants.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 342" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="csi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="csi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="csi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="csi-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="262" rx="14" fill="url(#csi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Licences - Contrats</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 lignes · 12 ms</text>
  <rect x="959" y="84" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="85" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="89" x2="1018" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="112" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="297.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="367" y="112" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="425.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier en lot</text>
  <rect x="490" y="112" width="111" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="607" y="112" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="646.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
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
  <text x="349" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">N° CSI</text>
  <text x="363" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="663" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DÉBUT</text>
  <text x="773" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE FIN</text>
  <text x="883" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ACTIF (Y/N)</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="363" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME — JD Edwards support</text>
  <text x="663" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-01-01</text>
  <text x="773" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <circle cx="920.0" cy="181.0" r="3.2" fill="#4ade80"/>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000002</text>
  <text x="363" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME — Oracle Database support</text>
  <text x="663" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-01-01</text>
  <text x="773" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <circle cx="920.0" cy="203.0" r="3.2" fill="#4ade80"/>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000003</text>
  <text x="363" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Beta SARL — former contract</text>
  <text x="663" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2022-01-01</text>
  <text x="773" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2024-12-31</text>
  <circle cx="920.0" cy="225.0" r="3.2" fill="#f87171"/>
  <text x="233" y="260" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="248" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="261" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–3 sur 3</text>
  <text x="1087" y="261" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="298" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">N° CSI</text>
  <text x="225.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identifiant de support Oracle</text>
  <line x1="360.0" y1="298" x2="341" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
  <rect x="515.0" y="298" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début · Fin</text>
  <text x="525.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">période du contrat</text>
  <line x1="660.0" y1="298" x2="781" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
  <rect x="815.0" y="298" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="825.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">compte dans les rapports</text>
  <line x1="960.0" y1="298" x2="891" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre un contrat vide</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre le contrat</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers Excel</text>
  <line x1="1119" y1="134.0" x2="1042.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csi-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque CSI géré :

- **Inventorier les contrats de support.** Tout CSI actif doit être associé à au moins une application — sinon c'est un contrat payé pour une application qui n'en a plus l'usage.
- **Suivre les fenêtres de validité.** Les dates *Début* / *Fin* alimentent le calendrier des renouvellements.
- **Indiquer s'il compte.** *Actif (Y/N)* est coché tant que le contrat est en vigueur. Un contrat échu reste dans la liste, case décochée.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **N° CSI** | `CSI_ID` — identifiant numérique du contrat. | Référence Oracle. |
| **Description** | `CSI_DESCRIPTION` — texte. | Libellé lisible. |
| **Date Début** | `CSI_FROM_DATE` — date. | Début de la couverture support. |
| **Date Fin** | `CSI_TO_DATE` — date. | Fin de la période de support en cours. |
| **Actif (Y/N)** | `CSI_STATUS` — `Y` / `N`, pastille verte ou rouge. | Indique si le contrat est en vigueur. |

Les colonnes d'audit (`CSI_AUDIT_USER`, `CSI_AUDIT_DATE`) sont masquées mais tracées sur la ligne.

---

## Boîte de dialogue

**Ajouter une ligne** enregistre un nouveau CSI ; un clic sur une ligne l'ouvre. La fenêtre compte trois onglets. Les onglets *Applications* et *Composants* sont absents sur un nouveau contrat : ils apparaissent une fois le CSI enregistré. Le pied de fenêtre porte **Supprimer**, **Dupliquer**, **Annuler** et **Enregistrer**.

<svg viewBox="0 0 1320 372" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="csd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="csd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="csd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="csd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="322" rx="14" fill="url(#csd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Licences - Contrats</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="293.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Contrat de support</text>
  <text x="400.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Applications</text>
  <text x="486.5" y="92" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Composants</text>
  <line x1="449" y1="101" x2="524" y2="101" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="235" y1="102" x2="1085" y2="102" stroke="#1f2937" strokeWidth="1"/>
  <rect x="235" y="120" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="299.0" y="134.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="369" y="120" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="427.5" y="134.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier en lot</text>
  <rect x="492" y="120" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="134.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="695" y="120" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="722.5" y="134.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="756" y="120" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="792.0" y="134.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="834" y="120" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="870.0" y="134.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="912" y="120" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="951.0" y="134.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="996" y="120" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.5" y="134.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="235" y="152" width="850" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="341" y="167.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">N° CSI (ID)</text>
  <text x="355" y="167.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">N° CSI</text>
  <text x="651" y="167.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">COMPOSANT ID (ID)</text>
  <text x="665" y="167.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT ID</text>
  <text x="895" y="167.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">MÉTRIQUE ID</text>
  <text x="1041" y="167.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">QUANTITÉ</text>
  <rect x="235" y="178" width="850" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="341" y="192.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="355" y="192.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME — JD Edwards support</text>
  <text x="651" y="192.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1101</text>
  <text x="665" y="192.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Financials</text>
  <text x="895" y="192.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="1041" y="192.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">100</text>
  <rect x="235" y="200" width="850" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="341" y="214.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="355" y="214.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME — JD Edwards support</text>
  <text x="651" y="214.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1007</text>
  <text x="665" y="214.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sales Order Mg…</text>
  <text x="895" y="214.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="1041" y="214.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">50</text>
  <rect x="235" y="222" width="850" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="341" y="236.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="355" y="236.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME — JD Edwards support</text>
  <text x="651" y="236.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1504</text>
  <text x="665" y="236.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne System Foundat…</text>
  <text x="895" y="236.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="1041" y="236.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">250</text>
  <text x="235" y="266" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page   50 ⌄     Affichage 1–3 sur 3</text>
  <line x1="215" y1="288" x2="1105" y2="288" stroke="#1f2937" strokeWidth="1"/>
  <rect x="989" y="302" width="96" height="24" rx="5" fill="url(#csd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1037.0" y="317.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Enregistrer</text>
  <rect x="907" y="302" width="74" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="317.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="814" y="302" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="317.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <rect x="732" y="302" width="74" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="769.0" y="317.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="12" y="67" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="82" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois onglets</text>
  <text x="22" y="95" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">contrat, applications, composants</text>
  <line x1="197" y1="84.0" x2="395" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="12" y="114" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="129" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="22" y="142" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un composant et sa quantité</text>
  <line x1="197" y1="131.0" x2="265" y2="131" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="1119" y="172.0" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="187.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composants acquis</text>
  <text x="1129" y="200.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">métrique et quantité par composant</text>
  <line x1="1119" y1="189.0" x2="415" y2="189.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="1119" y="309" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="324" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1129" y="337" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le contrat et ses onglets</text>
  <line x1="1119" y1="326.0" x2="1037.0" y2="326" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
</svg>

### Onglet 1 — Contrat de support

Identité du contrat.

| Champ | À renseigner |
|---|---|
| **N° CSI** | Identifiant numérique Oracle du contrat. Non modifiable une fois le contrat enregistré. |
| **Description** | Libellé convivial du contrat. |
| **Date Début** | Début de la couverture support (sélecteur de date). |
| **Date Fin** | Fin de la période de support en cours. |
| **Actif (Y/N)** | Coché tant que le contrat est en vigueur, décoché à son terme. |

### Onglet 2 — Applications

Grille qui relie le CSI aux applications couvertes (*N° CSI*, *Application ID*, avec le type et la base de l'application). Une ligne par application, par **Ajouter une ligne** : une entrée ici est ce qui fait que le contrat compte pour l'application dans *Licences acquises* et les rapports de conformité. Masqué à l'ajout.

### Onglet 3 — Composants

Grille des composants licenciés du CSI : *Composant ID*, *Métrique ID* et *Quantité*, une ligne par composant. L'agrégat alimente la page *Licences acquises*. Masqué à l'ajout.

---

## Conseils & bonnes pratiques

- **Trier sur *Date Fin* croissante** pour faire remonter les prochains renouvellements — vue de planification budgétaire.
- **Vérifier que chaque CSI actif est associé à au moins une application** dans *Licences acquises*. Un CSI orphelin est un contrat payé pour une application qui ne l'utilise plus.
- **Les contrats échus restent visibles** pour la traçabilité d'audit : décocher *Actif* plutôt que supprimer la ligne.
- **L'écran est en écriture** — seul l'administrateur licences devrait le modifier. Chaque changement est capté dans les colonnes d'audit et apparaît dans *Audit Trail* si la table sous-jacente est auditée.
