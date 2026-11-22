---
title: Licences acquises
description: "Inventaire des licences acquises — quantités par composant couvertes par chaque CSI, regroupées par métrique et liste de prix."
keywords: [Nomasx-1, licences, licences acquises, droits, composants, CSI, métriques contractuelles]
---

# Licences acquises

L'écran **Licences acquises** agrège les quantités achetées sur chaque CSI Oracle par **liste de prix × composant × métrique**. Une ligne par `(CSI, Liste de prix, Composant, Métrique)`. Chaque ligne est le droit contractuel que Nomasx-1 compare à l'usage réel.

C'est la moitié *ce à quoi nous avons droit* de l'équation licence. *Rapport d'utilisation* montre ce que nous utilisons ; *Rapport financier* mesure le coût de l'écart.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 342" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sub-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sub-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sub-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sub-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="262" rx="14" fill="url(#sub-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Licences - Licences acquises</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 lignes · 12 ms</text>
  <rect x="959" y="84" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="85" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="89" x2="1018" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="112" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
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
  <text x="329" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">N° CSI (ID)</text>
  <text x="343" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">N° CSI</text>
  <text x="513" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LISTE DE PRIX</text>
  <text x="603" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT</text>
  <text x="853" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">MÉTRIQUE ID</text>
  <text x="1019" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">QUANTITÉ</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="343" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME — JD Edwards support</text>
  <text x="513" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards</text>
  <text x="603" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Financials</text>
  <text x="853" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="1019" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">100</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000001</text>
  <text x="343" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME — JD Edwards support</text>
  <text x="513" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards</text>
  <text x="603" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sales Order Mgmt</text>
  <text x="853" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="1019" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">50</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">10000002</text>
  <text x="343" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME — Oracle Database suppo…</text>
  <text x="513" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Technology</text>
  <text x="603" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Database Enterprise Edition</text>
  <text x="853" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Processor</text>
  <text x="1019" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="233" y="260" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="248" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="261" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–3 sur 3</text>
  <text x="1087" y="261" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="298" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contrat</text>
  <text x="225.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">saisi dans Licences → CSI</text>
  <line x1="360.0" y1="298" x2="351" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sub-arrow)"/>
  <rect x="515.0" y="298" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant</text>
  <text x="525.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qui a été acquis</text>
  <line x1="660.0" y1="298" x2="611" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sub-arrow)"/>
  <rect x="815.0" y="298" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Métrique · quantité</text>
  <text x="825.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">comment il se compte</text>
  <line x1="960.0" y1="298" x2="1011" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sub-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rechercher</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un composant, un contrat</text>
  <line x1="197" y1="123.0" x2="273" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sub-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouper</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ex. par N° CSI</text>
  <line x1="1119" y1="134.0" x2="872.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sub-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque CSI, synthétiser *ce que nous avons acheté* :

- **Une ligne par (Composant, Métrique).** Les quantités sont sommées à la granularité contractuelle — les éventuels doublons sur un CSI sont regroupés en une quantité acquise par composant et métrique.
- **Vue par liste de prix.** L'axe *Liste de prix* permet de rapprocher chaque ligne du catalogue Oracle correspondant.
- **Mappage de métrique.** *Application User*, *Named User Plus*, *Processor*, *Employee*… La métrique guide la façon dont *Rapport d'utilisation* compare l'acquis à l'usage.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **N° CSI** | `LCC_CSI_ID` — identifiant du contrat. Lié à l'écran *CSI*. | Contrat auquel le droit appartient. |
| **Liste de prix** | `CPT_LISTS` — libellé de la liste de prix. | Catalogue Oracle — le price book sous lequel le composant est commercialisé. |
| **Composant** | `CPT_COMPONENT` — nom lisible du composant. | Élément licencié (Financials, Oracle EE, Advanced Compression…). |
| **Métrique ID** | `LCC_MET_ID` — métrique de licensing. | Comment le composant est compté (Application User, NUP, Processor, Employee…). |
| **Quantité** | `LCC_QUANTITY` — quantité agrégée. | Droit contractuel sur la ligne. |

---

## Conseils & bonnes pratiques

- **Recouper avec *Rapport d'utilisation*** pour vérifier que chaque ligne est consommée à hauteur du droit ou en dessous.
- **Les quantités inférieures à l'usage de tête remontent comme non conformes dans *Rapport financier*** — l'écart est ce qu'il faut combler avant le prochain audit.
- **Une ligne à 0** signifie que le composant est suivi mais non licencié — typiquement un produit gratuit ou concédé. À confirmer côté procurement.
- **Plusieurs listes de prix pour le même composant** signalent une consolidation de CSI ou une commande complémentaire — maintenir l'alignement avec les achats.
