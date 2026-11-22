---
title: OUT — Objets
description: "Traçabilité des objets Nomasx-1 par objet — nombre d'exécutions de chaque programme et version, jour par jour, sur une application JD Edwards connectée."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, objets, programmes, répartition d'usage]
---

# OUT — Objets

L'écran **OUT — Objets** (*Licences - Traçabilité des objets - Objets*) compte les appels de chaque objet, jour par jour, sur une application connectée : une ligne par `(Application, Objet, Version, Date Utilisation)`, avec le type d'objet et le nombre d'appels du jour. Accès : **Applications → Traçabilité des objets → OUT - Objects**, ou depuis le menu de ligne d'*OUT — Composants*.

C'est la vue objet, complément d'*OUT — Utilisateurs* : la même traçabilité, lue selon *ce qui* a été exécuté et *combien de fois* plutôt que *qui* l'a exécuté.

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
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">9640 lignes · 12 ms</text>
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
  <text x="329" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="343" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJET</text>
  <text x="453" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VERSION</text>
  <text x="553" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TYPE OBJET</text>
  <text x="653" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE UTILISATION</text>
  <text x="849" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace"># APPEL</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="343" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="453" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="553" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">APPL</text>
  <text x="653" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <text x="849" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">184</text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="343" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="453" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="553" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">APPL</text>
  <text x="653" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <text x="849" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">312</text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="343" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="453" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="553" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UBE</text>
  <text x="653" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-20</text>
  <text x="849" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">27</text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="343" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">R04572</text>
  <text x="453" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="553" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UBE</text>
  <text x="653" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-14</text>
  <text x="849" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="233" y="316" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="304" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="317.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="317" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 9640</text>
  <text x="1087" y="317" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet · Version</text>
  <text x="225.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qui a été exécuté</text>
  <line x1="360.0" y1="354" x2="351" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouo-arrow)"/>
  <rect x="515.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Date Utilisation</text>
  <text x="525.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par jour</text>
  <line x1="660.0" y1="354" x2="661" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouo-arrow)"/>
  <rect x="815.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif"># Appel</text>
  <text x="825.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appels ce jour-là</text>
  <line x1="960.0" y1="354" x2="841" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouo-arrow)"/>
  <rect x="12" y="79" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="94" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="22" y="107" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">objet, date d'utilisation</text>
  <line x1="197" y1="96.0" x2="233" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouo-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouper</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par type d'objet ou objet</text>
  <line x1="1119" y1="168.0" x2="872.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouo-arrow)"/>
</svg>

---

## Objectif de l'écran

- **Quels programmes sont réellement utilisés, et combien ?** Chaque ligne est un programme exécuté un jour donné, avec son nombre d'appels. Le total d'*OUT — Composants* masque cette répartition.
- **Repérer les objets morts.** Un objet des menus qui n'apparaît jamais ici n'est pas utilisé — utile pour décider de le conserver ou non.
- **Suivre une tendance.** Regroupés par objet, les jours montrent si un programme sert chaque jour, seulement en fin de mois, ou plus du tout.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Objet** | `LOUT_OBJECT` — objet technique. Filtrable. | Programme exécuté. |
| **Version** | `LOUT_VERSION` — version de traitement. | Version exécutée. |
| **Type Objet** | `LOUT_TYPE` — `APPL`, `UBE`… Filtrable. | Application interactive ou état batch. |
| **Date Utilisation** | `LOUT_USAGE` — jour. Filtrable. | Jour des appels. |
| **# Appel** | `LOUT_COUNT` — nombre. | Nombre d'exécutions de l'objet ce jour-là. |

---

## Conseils & bonnes pratiques

- **Grouper par *Objet*** et trier sur *Date Utilisation* : tout l'historique d'usage d'un programme d'un coup d'œil.
- **Un objet qui n'apparaît jamais ici** est un poids mort — confirmer avec le métier et envisager de le retirer des menus.
- **Recouper avec *Droits — Rôles* pour voir quel rôle accorde chaque objet** — un objet très utilisé porté par un seul rôle bien ciblé est la configuration la plus propre.
- **Partir de cet écran pour cadrer une analyse SoD par objet** — en s'appuyant sur l'usage *réel* plutôt que sur la matrice théorique des droits.
