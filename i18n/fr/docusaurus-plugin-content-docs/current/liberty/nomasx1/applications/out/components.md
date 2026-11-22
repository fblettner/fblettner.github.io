---
title: OUT — Composants
description: "Synthèse Object Usage Tracking par composant de licence — nombre d'utilisateurs et dernière utilisation par composant."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, composants, utilisation licence, JDE]
---

# OUT — Composants

L'écran **OUT — Composants** est le sommet de la pyramide Object Usage Tracking. Une ligne par `(Application, Composant)`. Chaque ligne agrège le nombre d'utilisateurs distincts qui ont invoqué un objet du composant et la date du dernier appel.

C'est la vue de tête pour le reporting de licence et le point d'entrée vers les détails.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 364" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ouc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ouc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ouc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ouc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="284" rx="14" fill="url(#ouc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Licences - Traçabilité des objets</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">6 lignes · 12 ms</text>
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
  <text x="359" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="373" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="555" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">COMPOSANT ID (ID)</text>
  <text x="569" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT ID</text>
  <text x="915" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace"># UTILISATEU…</text>
  <text x="929" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DERNIÈRE UTILISATION</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="173" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="184.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="555" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1007</text>
  <text x="569" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sales Order Management</text>
  <text x="915" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">48</text>
  <text x="929" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-20</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="195" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="206.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="555" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1101</text>
  <text x="569" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Financials</text>
  <text x="915" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">61</text>
  <text x="929" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="217" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="228.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="555" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1111</text>
  <text x="569" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Inventory Management</text>
  <text x="915" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">22</text>
  <text x="929" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-19</text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="239" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="250.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="555" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1504</text>
  <text x="569" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne System Foundation</text>
  <text x="915" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">75</text>
  <text x="929" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <text x="233" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="270" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="283.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="283" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–6 sur 6</text>
  <text x="1087" y="283" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="256" y="191.0" width="159" height="76" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="197.0" width="151" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="211.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">OUT - Utilisateurs</text>
  <text x="405" y="211.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="233.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">OUT - Détails</text>
  <text x="405" y="233.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="255.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">OUT - Objets</text>
  <text x="405" y="255.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant</text>
  <text x="225.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">composant de licence</text>
  <line x1="360.0" y1="320" x2="577" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouc-arrow)"/>
  <rect x="515.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif"># Utilisateurs</text>
  <text x="525.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs distincts</text>
  <line x1="660.0" y1="320" x2="907" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouc-arrow)"/>
  <rect x="815.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernière utilisation</text>
  <text x="825.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dernière utilisation</text>
  <line x1="960.0" y1="320" x2="937" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouc-arrow)"/>
  <rect x="12" y="164.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="179.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de la ligne (···)</text>
  <text x="22" y="192.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou clic droit sur la ligne</text>
  <line x1="197" y1="181.0" x2="248" y2="181.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouc-arrow)"/>
  <rect x="12" y="250.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="265.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Accès au détail</text>
  <text x="22" y="278.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur la ligne cliquée</text>
  <line x1="197" y1="267.0" x2="276" y2="267.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouc-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers Excel</text>
  <line x1="1119" y1="134.0" x2="1042.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouc-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque composant de licence sur une application connectée :

- **Combien de personnes l'utilisent ?** *Nb utilisateurs* est le chiffre clé pour le calibrage de licence.
- **Le composant est-il encore vivant ?** *Dernière utilisation* indique si le composant a été touché récemment. Un composant non utilisé depuis plusieurs mois peut probablement être retiré ou sa licence réduite.
- **Quels composants dominent l'activité ?** Trier par nombre d'utilisateurs fait remonter immédiatement les composants *cœur* — typiquement Financials et Distribution.

:::info[Spécifique à JDE]
La dimension composant vient du mappage System Code JDE → Composant de licence (`SETTINGS_JDE_SY → SETTINGS_LIC_COMPONENTS`). Pour les autres systèmes sources, la même vue se reproduit en mappant le code de module / domaine équivalent vers un composant de licence.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Composant ID** | `CPT_ID` — identifiant du composant de licence. Numérique. | Cumul facturable. |
| **# Utilisateurs** | `USERS_COUNT` — nombre d'utilisateurs distincts. | Chiffre clé pour le reporting de licence. |
| **Dernière utilisation** | `LAST_USAGE` — date la plus récente parmi les appels. | Activité la plus récente sur le composant. |

---

## Menu contextuel \{#context-menu\}

Le bouton **···** en début de ligne, ou un clic droit sur la ligne, ouvre son menu. Chaque raccourci ouvre un écran de la traçabilité des objets sur la ligne cliquée.

| Action | Vers où |
|---|---|
| **OUT - Utilisateurs** | *Licences - Traçabilité des objets - Utilisateurs / Rôles*, filtré sur l'application de la ligne : une ligne par utilisateur et date d'utilisation, avec le rôle et l'environnement de connexion — les plus récentes d'abord. |
| **OUT - Détails** | [OUT — Détails](./details.md), filtré sur l'application et le composant de la ligne : une ligne par utilisateur, objet et version, avec la dernière utilisation. |
| **OUT - Objets** | [OUT — Objets](./objects.md), filtré sur l'application et le composant de la ligne : les objets du composant réellement exécutés. |

---

## Conseils & bonnes pratiques

- **Trier sur *Nb utilisateurs* décroissant** pour le calibrage de licence — les composants à fort volume remontent en haut.
- **Surveiller *Dernière utilisation*** — un composant sous le seuil d'activité récente est candidat à une renégociation. À présenter à l'éditeur lors du prochain point contractuel.
- **Ouvrir *OUT - Détails* depuis le menu de la ligne** pour voir les utilisateurs, les objets et les dates d'utilisation du composant ; **Retour** ramène aux composants.
- **Recouper avec *Licences → JD Edwards*** pour traduire les chiffres clés en droits contractuels.
