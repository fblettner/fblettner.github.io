---
title: CSI
description: "Customer Support Identifier — liste des contrats de support Oracle auxquels les applications connectées sont rattachées."
keywords: [Nomasx-1, licences, CSI, Customer Support Identifier, Oracle, contrat de support, droit acquis]
---

# CSI

L'écran **CSI** liste tous les *Customer Support Identifier* Oracle déclarés dans Nomasx-1. Une ligne par contrat. Chaque ligne porte l'identifiant, une description lisible, les dates de validité et le statut courant.

Le CSI est l'ancrage contractuel : ses lignes — composants seuls et bundles —, les chiffres déclarés par le client et les utilisateurs des autres applications sont ce que lit la [revue des licences](../licensing-review.md), selon les règles de [Lecture d'un contrat](../how-a-contract-is-counted.md).

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

**Ajouter une ligne** enregistre un nouveau CSI ; un clic sur une ligne l'ouvre. La fenêtre compte sept onglets. Sur un nouveau contrat, seul *Contrat de support* est présent : les six grilles apparaissent une fois le CSI enregistré. Chaque grille propose **Ajouter une ligne** et **Modifier en lot**, et un clic sur l'une de ses lignes ouvre son propre formulaire (**Modifier · Licences - Bundles**…). Le pied de fenêtre porte **Supprimer**, **Dupliquer**, **Annuler** et **Enregistrer**.

<svg viewBox="0 0 1320 382" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="csd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="csd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="csd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="csd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="90" width="880" height="274" rx="14" fill="url(#csd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="116" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Licences - Contrats</text>
  <line x1="220" y1="130" x2="1100" y2="130" stroke="#1f2937" strokeWidth="1"/>
  <text x="297.872" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Contrat de support</text>
  <text x="397.992" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Applications</text>
  <text x="477.28000000000003" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Composants</text>
  <text x="543.548" y="154" fill="#e2e8f0" fontSize="9.3" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Bundles</text>
  <line x1="514.32" y1="162" x2="572.7760000000001" y2="162" stroke="#4a9eff" strokeWidth="2"/>
  <text x="641.0640000000001" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Composants des bundles</text>
  <text x="764.6200000000001" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Chiffres déclarés</text>
  <text x="924.6320000000002" y="154" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Utilisateurs des autres applications</text>
  <line x1="240" y1="163" x2="1080" y2="163" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="176" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="304.0" y="190.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="374" y="176" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="432.5" y="190.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier en lot</text>
  <rect x="497" y="176" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="507" y="190.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="240" y="210" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">N° CSI</text>
  <text x="360" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUNDLE</text>
  <text x="460" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="680" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MÉTRIQUE ID</text>
  <text x="840" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUANTITÉ</text>
  <text x="930" y="227.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPOSANTS</text>
  <rect x="240" y="242" width="840" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="360" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">DIST</text>
  <text x="460" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Suite distribution</text>
  <text x="680" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10 · Application User</text>
  <text x="840" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">25</text>
  <text x="930" y="258.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <rect x="240" y="272" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="360" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">INV-SALES</text>
  <text x="460" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Stocks et ventes</text>
  <text x="680" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10 · Application User</text>
  <text x="840" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">40</text>
  <text x="930" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <line x1="220" y1="316" x2="1100" y2="316" stroke="#1f2937" strokeWidth="1"/>
  <rect x="997" y="328" width="83" height="22" rx="5" fill="url(#csd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1038.5" y="342.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="928" y="328" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="958.5" y="342.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="848" y="328" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="884.0" y="342.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Dupliquer</text>
  <rect x="768" y="328" width="72" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="804.0" y="342.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="160" y="8" width="205" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="170" y="23" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bundles</text>
  <text x="170" y="36" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne comptée une fois pour ses modules</text>
  <line x1="262.5" y1="42" x2="543.548" y2="144" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="377" y="8" width="205" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="387" y="23" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composants des bundles</text>
  <text x="387" y="36" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les modules de chaque bundle</text>
  <line x1="479.5" y1="42" x2="641.0640000000001" y2="144" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="594" y="8" width="205" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="604" y="23" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffres déclarés</text>
  <text x="604" y="36" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chiffre d'affaires, employés, datés</text>
  <line x1="696.5" y1="42" x2="764.6200000000001" y2="144" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="851" y="8" width="205" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="861" y="23" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs des autres applications</text>
  <text x="861" y="36" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajoutés aux Named User Plus</text>
  <line x1="953.5" y1="42" x2="924.6320000000002" y2="144" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="1120" y="252" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="267" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composants</text>
  <text x="1130" y="280" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nombre de modules qu'il contient</text>
  <line x1="1120" y1="269.0" x2="940" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
  <rect x="20" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="30" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un bundle de ce contrat</text>
  <line x1="200" y1="193.0" x2="240" y2="187" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csd-arrow)"/>
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

Grille qui relie le CSI aux applications couvertes (*N° CSI*, *ID application*, avec le type et la base de l'application, en lecture seule : ils viennent d'[Applications](../settings/global/applications.md)). Sur une ligne enregistrée, *N° CSI* et *ID application* sont en lecture seule. Une ligne par application, par **Ajouter une ligne** : une entrée ici est ce qui fait que le contrat compte pour l'application dans la [revue des licences](../licensing-review.md) et le [rapport d'audit des licences](../reports/audit-licences.md). Masqué à l'ajout.

### Onglet 3 — Composants

Grille des composants licenciés seuls sur le CSI : *Composant ID*, *Métrique ID* et *Quantité*, une ligne par composant et par métrique. Chacune est une ligne du contrat (voir [Lecture d'un contrat](../how-a-contract-is-counted.md#lines)). Masqué à l'ajout.

### Onglet 4 — Bundles \{#tab-bundles\}

Les bundles du contrat : plusieurs modules vendus sous une seule ligne, sur laquelle un utilisateur n'est compté qu'une fois pour tous.

| Champ | À renseigner |
|---|---|
| **N° CSI** | Le contrat, prérempli ; non modifiable sur une ligne enregistrée. |
| **Bundle** | Obligatoire. Code court du bundle dans ce contrat (`DIST`, `INV-SALES`…). |
| **Description** | Le nom affiché par les pages (*Suite distribution*). |
| **Métrique ID** | Choisie parmi les métriques : en général *Application User*. |
| **Quantité** | La quantité souscrite. |
| **Composants** | En lecture seule : le nombre de modules du bundle, d'après l'onglet suivant. |

Un bundle sans composant apparaît dans [Licences souscrites](./subscribed-licences.md), signalé vide ; il ne couvre rien.

### Onglet 5 — Composants des bundles \{#tab-bundle-components\}

Les modules de chaque bundle, une ligne par bundle et par module : *N° CSI*, **Bundle** (choisi parmi les bundles de ce contrat) et **Composant ID** (choisi par son nom parmi les composants). Les deux sont obligatoires.

### Onglet 6 — Chiffres déclarés \{#tab-declared\}

Ce que le client déclare pour le contrat, daté : la [revue des licences](../licensing-review.md#lines-other) lit la date la plus récente.

| Champ | À renseigner |
|---|---|
| **Déclaré le** | Obligatoire. Date de la déclaration. |
| **Chiffre d'affaires déclaré (millions)** | Comparé aux lignes en *Enterprise $M*. |
| **Employés déclarés** | Comparés aux lignes en *Employee*. Vide : les employés collectés dans JD Edwards sont retenus. |
| **Commentaire** | Origine du chiffre (rapport annuel, effectif RH…). |

### Onglet 7 — Utilisateurs des autres applications \{#tab-other-users\}

Les utilisateurs d'une application dont les utilisateurs ne peuvent pas être collectés — un portail de reporting, un outil qui se connecte à la même base —, une ligne par application. Ils s'ajoutent au comptage d'une base de données licenciée en Named User Plus (voir [Named User Plus d'une base de données](../how-a-contract-is-counted.md#named)).

| Champ | À renseigner |
|---|---|
| **Application** | Obligatoire. Nom de l'application. |
| **Utilisateurs** | Obligatoire. Nombre de personnes qui l'utilisent. |
| **Compté le** | Date du comptage. |
| **Commentaire** | Mode de comptage. |

---

## Conseils & bonnes pratiques

- **Trier sur *Date Fin* croissante** pour faire remonter les prochains renouvellements — vue de planification budgétaire.
- **Vérifier que chaque CSI actif est associé à au moins une application** dans [Licences souscrites](./subscribed-licences.md). Un CSI orphelin est un contrat payé pour une application qui ne l'utilise plus.
- **Les contrats échus restent visibles** pour la traçabilité d'audit : décocher *Actif* plutôt que supprimer la ligne.
- **L'écran est en écriture** — seul l'administrateur licences devrait le modifier. Chaque changement est capté dans les colonnes d'audit et apparaît dans *Audit Trail* si la table sous-jacente est auditée.
