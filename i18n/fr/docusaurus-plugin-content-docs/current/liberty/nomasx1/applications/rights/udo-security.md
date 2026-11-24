---
title: Droits — Sécurité des UDO
description: "L'écran Sécurité des UDO de Nomasx-1 : toute la sécurité des objets définis par l'utilisateur d'une application JD Edwards EnterpriseOne telle que collectée — chaque catégorie (requêtes, listes de suivi, formats de grille, CafeOne, écrans personnels, pages composites et E1…) et chaque type de ligne, avec le nom de l'UDO et de son application."
keywords: [Nomasx-1, applications, droits, sécurité des UDO, objets définis par l'utilisateur, F00950W, pages composites, pages E1, requêtes, listes de suivi, formats de grille, CafeOne, JD Edwards]
---

# Droits — Sécurité des UDO

L'écran **Sécurité des UDO** (**Applications → Droits → Sécurité des UDO**) présente la sécurité des objets définis par l'utilisateur (UDO) d'une application telle qu'elle a été collectée : toutes les catégories — requêtes, listes de suivi, formats de grille, CafeOne, écrans personnels, pages composites, pages E1… — et tous les types de ligne, avec les indicateurs que stocke JD Edwards. Une ligne par utilisateur ou rôle, catégorie, type de ligne, UDO, application, écran et version.

Les droits n'en retiennent que les lignes de consultation des pages composites et des pages E1 — les chemins d'accès décrits dans [Tâches](../../jobs.md). Le reste est collecté pour l'examen de la sécurité elle-même, et lu par [À corriger](../../security-analysis.md).

:::info[Spécifique à JDE]
Les lignes viennent de la table de sécurité des UDO de JD Edwards (F00950W), lue dans la bibliothèque indiquée en **JDE_UDO_SEC** dans les [paramètres JD Edwards](../../settings/global/jd-edwards.md). Sans bibliothèque renseignée, rien n'est collecté. L'écran [Bibliothèques UDO](../../settings/global/udo-libraries.md) indique la bibliothèque qui contient la table.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1320 332" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="usec-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="usec-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usec-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="usec-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="296" rx="14" fill="url(#usec-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité - Sécurité des UDO collectée</text>
  <line x1="220" y1="76" x2="1100" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="88" width="840" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="104" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Filtres avancés</text>
  <text x="250.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID APPLICATION</text>
  <rect x="250.0" y="123" width="156.0" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="416.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR / RÔLE</text>
  <rect x="416.0" y="123" width="156.0" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="426.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="582.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CATÉGORIE D'UDO</text>
  <rect x="582.0" y="123" width="156.0" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="748.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE DE LIGNE</text>
  <rect x="748.0" y="123" width="156.0" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="914.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDO</text>
  <rect x="914.0" y="123" width="156.0" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="240" y="154" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="168.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="418" y="154" width="72" height="22" rx="5" fill="url(#usec-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="454.0" y="168.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="1010" y="154" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="944" y="154" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="974.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="883" y="154" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="910.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="837" y="154" width="40" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="857.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="186" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR / RÔLE</text>
  <text x="340" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CATÉGORIE D'UDO</text>
  <text x="430" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE DE LIGNE</text>
  <text x="510" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="680" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="790" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VOIR</text>
  <text x="835" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AJOUTER</text>
  <text x="885" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFIER</text>
  <text x="940" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUPPRIMER</text>
  <text x="1000" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACCÈS</text>
  <rect x="240" y="218" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">PUBLIC</text>
  <text x="340" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">COMPOSITE</text>
  <text x="430" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="510" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Poste de commandes</text>
  <text x="680" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="790" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="835" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="885" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="940" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="1000" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="246" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_FR</text>
  <text x="340" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">QUERY</text>
  <text x="430" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ACTION</text>
  <text x="510" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Commandes ouvertes par client</text>
  <text x="680" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">P4210</text>
  <text x="790" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="835" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="885" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="940" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="1000" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="274" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APCLERK</text>
  <text x="340" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">WATCHLIST</text>
  <text x="430" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="510" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Factures bloquées</text>
  <text x="680" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">P0411</text>
  <text x="790" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="835" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="885" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="940" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="1000" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Catégorie et type</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtres saisis, ~ pour contient</text>
  <line x1="200" y1="117.0" x2="600.0" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usec-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toutes les catégories</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pages, requêtes, listes de suivi…</text>
  <line x1="200" y1="267.0" x2="360" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usec-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">UDO et application</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">affichés avec leur nom</text>
  <line x1="1120" y1="177.0" x2="580" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usec-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les indicateurs</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tels que JD Edwards les stocke</text>
  <line x1="1120" y1="267.0" x2="980" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usec-arrow)"/>
</svg>

---

## Filtres \{#filters\}

Les **Filtres avancés** au-dessus de la grille la restreignent avant **Exécuter** : **ID application**, **Utilisateur / rôle**, **Catégorie d'UDO** et **Type de ligne** (en saisie libre ; `~` recherche une partie de la valeur) et **UDO**.

---

## Colonnes

| Colonne | Contenu |
|---|---|
| **ID application** | L'application, avec son nom. |
| **Utilisateur / rôle** | L'utilisateur ou le rôle visé par la ligne, avec son nom ; `*PUBLIC` pour tout le monde. |
| **Catégorie d'UDO** | La nature de l'objet défini par l'utilisateur, codée par JD Edwards (`COMPOSITE`, `QUERY`, `WATCHLIST`, `CAFE1`…). |
| **Type de ligne** | La nature de la ligne de sécurité : `VIEW`, `ACTION`, `CONTENT`, `ACCESS`. |
| **UDO** | L'objet défini par l'utilisateur, avec son nom ; `*ALL` pour tous les objets de la catégorie. |
| **Application** | L'application à laquelle l'UDO se rattache, avec son nom ; `*ALL` quand la ligne n'en vise aucune. |
| **Écran** · **Version** | L'écran et la version, ou `*ALL`. |
| **Voir** · **Ajouter** · **Modifier** · **Supprimer** · **Ajouter (personnel)** · **Accès** · **Actif** | Les indicateurs de la ligne, tels que JD Edwards les stocke. |

---

## Ce que l'analyse contrôle \{#analysis\}

[À corriger](../../security-analysis.md) lit ces lignes :

- **Des rôles qui donnent exactement la même chose** — deux rôles ne sont identiques que si leur sécurité des UDO l'est aussi ;
- **Des lignes de sécurité pour un utilisateur ou un rôle qui n'existe plus** — les lignes UDO comptent avec celles du workbench et de la sécurité de ligne.

---

## Conseils & bonnes pratiques

- **Filtrer sur une catégorie** — `COMPOSITE` ou `QUERY` — pour examiner qui peut consulter ou publier quels objets.
- **Regarder d'abord les lignes `*PUBLIC`** : elles ouvrent une catégorie ou un objet à tout le monde.
- **Vérifier JDE_UDO_SEC quand la grille reste vide** après une collecte : l'écran [Bibliothèques UDO](../../settings/global/udo-libraries.md) donne la bibliothèque à renseigner.
