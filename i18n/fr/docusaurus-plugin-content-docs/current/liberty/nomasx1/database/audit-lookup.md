---
title: Audit Lookup
description: "Audit détaillé — pour chaque mutation auditée, la valeur avant / après de chaque colonne modifiée."
keywords: [Nomasx-1, base de données, audit lookup, valeurs avant / après, audit au niveau colonne, SOX]
---

# Audit Lookup

L'écran **Audit Lookup** est la vue détaillée de l'audit base. Une ligne par `(Application, Ligne, Colonne, Type d'audit, Valeur)`. Chaque ligne associe une colonne à sa valeur `BEFORE` et `AFTER` au moment de l'opération, en joignant l'en-tête d'audit aux valeurs auditées.

C'est l'écran que les auditeurs ouvrent pour *voir ce qui a changé dans la ligne* — pas seulement *que la ligne a changé*. Accès : **Database → Audit Lookup**. Rien n'est lu tant que les **Filtres avancés** ne sont pas renseignés (application, date de transaction, utilisateur, table, colonne, valeur — chacun avec son opérateur) et que **Exécuter** n'est pas cliqué.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 466" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="alk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="alk-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="alk-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="alk-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="386" rx="14" fill="url(#alk-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Audit - Recherche</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="114" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">⌄  ⏷  Filtres avancés</text>
  <text x="245" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID APPLICATION</text>
  <rect x="245" y="128" width="20" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="255.0" y="141.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">=</text>
  <rect x="269" y="128" width="126" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="279" y="141.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">filtrer…</text>
  <text x="407" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE DE TRANSACTION</text>
  <rect x="407" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="417" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▦ Toutes les dates</text>
  <text x="547" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="569" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <rect x="569" y="128" width="20" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="579.0" y="141.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">=</text>
  <rect x="593" y="128" width="126" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="603" y="141.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">filtrer…</text>
  <text x="731" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE LA TABLE</text>
  <rect x="731" y="128" width="20" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="741.0" y="141.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">=</text>
  <rect x="755" y="128" width="126" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="765" y="141.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">filtrer…</text>
  <text x="893" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE</text>
  <rect x="893" y="128" width="20" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="903.0" y="141.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">=</text>
  <rect x="917" y="128" width="126" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="927" y="141.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">filtrer…</text>
  <text x="245" y="162" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALEUR</text>
  <rect x="245" y="168" width="20" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="255.0" y="181.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">=</text>
  <rect x="269" y="168" width="126" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="279" y="181.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">filtrer…</text>

  <text x="233" y="220" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 lignes · 12 ms</text>
  <rect x="959" y="208" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="209" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="221.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="213" x2="1018" y2="223" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="221.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="236" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="250.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="236" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="250.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="236" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="250.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="236" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="236" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="236" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="236" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="236" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="268" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="299" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">ID APPLICA…</text>
  <text x="359" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">ID DE LI…</text>
  <text x="373" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE TRANSACTION</text>
  <text x="497" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR</text>
  <text x="571" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM DE LA TAB…</text>
  <text x="655" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TYPE</text>
  <text x="709" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COLONNE</text>
  <text x="773" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VALEUR</text>
  <text x="873" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OPÉRATION</text>
  <text x="945" y="283.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SCHÉMA</text>
  <rect x="233" y="294" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="299" y="308.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="359" y="308.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">7</text>
  <text x="373" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18T15:55:39</text>
  <text x="497" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="571" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="655" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AFTER</text>
  <text x="709" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ABALKY</text>
  <text x="773" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FR00012345</text>
  <text x="873" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE</text>
  <text x="945" y="308.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <rect x="233" y="316" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="299" y="330.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="359" y="330.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <text x="373" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18T13:09:03</text>
  <text x="497" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="571" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="655" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AFTER</text>
  <text x="709" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ABALKY</text>
  <text x="773" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FR00012345</text>
  <text x="873" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE</text>
  <text x="945" y="330.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <rect x="233" y="338" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="299" y="352.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="359" y="352.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="373" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18T10:21:44</text>
  <text x="497" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="571" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="655" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AFTER</text>
  <text x="709" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ABAN8</text>
  <text x="773" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">4021</text>
  <text x="873" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INSERT</text>
  <text x="945" y="352.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="233" y="384" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="372" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="385.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="385" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–3 sur 3</text>
  <text x="1087" y="385" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="422" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="437" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonne · valeur</text>
  <text x="225.0" y="450" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par valeur indexée</text>
  <line x1="435.0" y1="422" x2="717" y2="361.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#alk-arrow)"/>
  <rect x="665.0" y="422" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="437" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Opération · schéma</text>
  <text x="675.0" y="450" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">INSERT, UPDATE, DELETE</text>
  <line x1="885.0" y1="422" x2="881" y2="361.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#alk-arrow)"/>
  <rect x="12" y="107" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="122" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche par valeur</text>
  <text x="22" y="135" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonne = ABALKY, valeur = FR…</text>
  <line x1="197" y1="124.0" x2="233" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#alk-arrow)"/>
  <rect x="12" y="230" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter</text>
  <text x="22" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rien n'est lu avant</text>
  <line x1="197" y1="247.0" x2="273" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#alk-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque colonne captée dans une opération auditée :

- **Ce qui a changé.** *BEFORE* + *AFTER* sur la même colonne rendent la modification visible en une lecture.
- **Joint à l'utilisateur et à l'opération.** Le contexte d'en-tête (date, table, utilisateur, opération) est répété sur chaque ligne — pratique quand on filtre sur une colonne ou une valeur précise.
- **Source de la preuve.** Une ligne ici est *la* preuve qu'une opération a eu lieu. Les auditeurs la collent dans le constat SOX.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `AUD_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. |
| **Row ID** | `AUD_ROW_ID` — identifiant interne de ligne. | Référence stable entre entrées d'audit. |
| **Transaction date** | `AUD_DT_TRANSACTION` — date. Filtrable. | Quand l'opération a eu lieu. |
| **User** | `AUD_USERNAME` — utilisateur applicatif ou base. Filtrable. | Auteur de l'opération. |
| **Table Name** | `AUD_SEG_NAME` — nom de table. Filtrable. | Objet modifié. |
| **Type** | `AUD_TYPE` — `BEFORE` / `AFTER`. | Côté du cliché. |
| **Column** | `AUD_NAME` — nom de colonne. Filtrable. | Colonne à laquelle la valeur s'applique. |
| **Value** | `AUD_VALUE` — valeur brute. Filtrable. | Valeur capturée. |
| **Operation** | `AUD_OPERATION` — `INSERT` / `UPDATE` / `DELETE`. | Type de l'opération sous-jacente. |
| **Schema** | `AUD_SEG_OWNER` — schéma de base. | Localisation de la table. |

---

## Conseils & bonnes pratiques

- **Filtrer sur *Column* + *Value*** pour demander *qui a passé ce champ à cette valeur, et quand*.
- **Regrouper les lignes par *Row ID*** pour lire un avant/après complet sur un même enregistrement — la vue la plus utile pour les auditeurs.
- **Utiliser la colonne *Operation*** pour cadrer la recherche sur un type de mutation. Les lignes `DELETE` n'ont pas de valeur `AFTER` — uniquement `BEFORE`.
- **Recouper avec l'en-tête *Audit Trail*** pour vérifier que le nombre de lignes de l'opération correspond à ce qu'on voit à ce niveau.
