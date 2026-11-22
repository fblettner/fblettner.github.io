---
title: OUT — Objets
description: "Traçabilité des objets Nomasx-1 par objet — chaque programme réellement exécuté sur une application JD Edwards connectée, avec le composant de licence dont il relève et son libellé."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, objets, programmes, répartition d'usage]
---

# OUT — Objets

L'écran **OUT — Objets** (*Licences - Traçabilité des objets - Objets*) liste les objets dont la traçabilité des objets a relevé l'exécution sur une application connectée : une ligne par `(Application, Objet)`, avec le **composant de licence** dont relève l'objet et son **libellé**. Accès : **Applications → Traçabilité des objets → OUT - Objets**, ou depuis le menu de ligne d'[OUT — Composants](./components.md#context-menu), qui l'ouvre sur l'application et le composant de la ligne.

C'est la vue objet, complément d'*OUT — Utilisateurs* : la même traçabilité, lue selon *ce qui* a été exécuté plutôt que *qui* l'a exécuté. Le composant vient du code système de l'objet, rattaché dans [Code système](../../settings/jde/system-code.md) : un objet dont le code système n'a pas de composant n'est pas listé.

:::info[Spécifique à JDE]
La traçabilité des objets (Object Usage Tracking) est un mécanisme de JD Edwards EnterpriseOne. Pour un autre système source, la même liste peut être produite par une requête personnalisée qui renvoie les objets utilisés et leur composant.
:::


---

## Vue d'ensemble

<svg viewBox="0 0 1320 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ouo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ouo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ouo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ouo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="318" rx="14" fill="url(#ouo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Licences - Traçabilité des objets - Objets</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Filtres avancés</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">29 lignes · 12 ms</text>
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
  <text x="349" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">ID APPLICATION (ID)</text>
  <text x="363" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ID APPLICATION</text>
  <text x="453" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJET</text>
  <text x="635" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">COMPOSANT ID (ID)</text>
  <text x="649" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT ID</text>
  <text x="909" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="453" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="635" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1101</text>
  <text x="649" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Financials</text>
  <text x="909" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Supplier Ledger Inquiry</text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="453" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="635" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1504</text>
  <text x="649" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne System Foundation</text>
  <text x="909" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book</text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="453" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="635" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1007</text>
  <text x="649" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sales Order Manageme…</text>
  <text x="909" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Sales Order Entry</text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="453" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="635" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1007</text>
  <text x="649" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sales Order Manageme…</text>
  <text x="909" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Invoice Print</text>
  <text x="233" y="316" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="304" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="317.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="317" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–29 sur 29</text>
  <text x="1087" y="317" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet</text>
  <text x="225.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un programme exécuté</text>
  <line x1="360.0" y1="354" x2="461" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouo-arrow)"/>
  <rect x="515.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant</text>
  <text x="525.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la licence dont il relève</text>
  <line x1="660.0" y1="354" x2="657" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouo-arrow)"/>
  <rect x="815.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Description</text>
  <text x="825.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le libellé de l'objet</text>
  <line x1="960.0" y1="354" x2="917" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouo-arrow)"/>
  <rect x="12" y="79" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="94" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="22" y="107" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, objet, composant</text>
  <line x1="197" y1="96.0" x2="233" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouo-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouper</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par composant</text>
  <line x1="1119" y1="168.0" x2="872.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouo-arrow)"/>
</svg>

---

## Objectif de l'écran

- **Quels programmes sont réellement utilisés ?** Chaque ligne est un objet exécuté au moins une fois dans la traçabilité collectée — l'empreinte réelle de l'application, bien plus étroite que les menus.
- **De quelle licence relève chacun ?** Regroupée par *Composant ID*, la liste montre les programmes qui mettent chaque composant en service — le détail derrière le total d'*OUT — Composants*.
- **Repérer les objets morts.** Un objet des menus qui n'apparaît jamais ici n'est pas utilisé — utile pour décider de le conserver ou non.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **ID application** | `LOUT_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. Elle apparaît deux fois : son identifiant et son nom. |
| **Objet** | `LOUT_OBJECT` — objet technique. Filtrable. | Programme exécuté. |
| **Composant ID** | `CPT_ID` — composant de licence. Filtrable. | Composant dont relève l'objet, par son code système. Il apparaît deux fois : son identifiant et son libellé. |
| **Description** | `JDEO_DESCRIPTION` — texte. | Libellé de l'objet. |

**Filtres avancés**, au-dessus de la grille, restreignent la liste à une application, un objet ou un composant — l'accès depuis *OUT — Composants* renseigne l'application et le composant.

---

## Conseils & bonnes pratiques

- **Grouper par *Composant ID*** : les programmes derrière chaque composant de licence d'un coup d'œil.
- **Un objet qui n'apparaît jamais ici** est un poids mort — confirmer avec le métier et envisager de le retirer des menus.
- **Pour savoir qui a exécuté un objet et quand**, ouvrir *OUT — Détails* : une ligne par utilisateur, objet et version, avec la dernière utilisation.
- **Recouper avec *Droits — Rôles* pour voir quel rôle accorde chaque objet** — un objet très utilisé porté par un seul rôle bien ciblé est la configuration la plus propre.
- **Partir de cet écran pour cadrer une analyse SoD par objet** — en s'appuyant sur l'usage *réel* plutôt que sur la matrice théorique des droits.
