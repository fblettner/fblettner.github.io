---
title: Droits — Rôles
description: "Droits objet accordés au niveau du rôle — la colonne vertébrale du modèle de sécurité."
keywords: [Nomasx-1, applications, droits, droits rôle, security workbench, accès par rôle]
---

# Droits — Rôles

L'écran **Droits — Rôles** liste tous les droits objet accordés **au niveau du rôle** sur une application connectée. La requête filtre sur `SER_USER_ID = '*ROLE'` — le marqueur que le système source utilise pour distinguer une règle au niveau rôle d'une règle au niveau utilisateur. Une ligne par triplet `(Application, Rôle, Objet)`, restreinte aux droits `SER_RUN = 'Y'`.

C'est le *cœur* du modèle d'accès par rôles : ce que le rôle accorde à l'ensemble de ses détenteurs. Tout le reste (surcharges utilisateur, visibilité menu, droits dérivés de l'OUT) se superpose à cette couche.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 426" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rro-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rro-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rro-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rro-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="346" rx="14" fill="url(#rro-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Droits - Rôles</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">⌄  ⏷  Filtres avancés</text>
  <text x="245" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="245" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="385" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="407" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE ID</text>
  <rect x="407" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="417" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="547" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="569" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <rect x="569" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="709" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>

  <text x="233" y="180" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1840 lignes · 12 ms</text>
  <rect x="959" y="168" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="169" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="181.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="173" x2="1018" y2="183" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="181.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="196" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="210.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="196" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="210.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="196" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="210.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="196" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="196" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="196" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="196" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="196" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="228" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="243" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="329" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID</text>
  <text x="429" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJET (ID)</text>
  <text x="503" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ECRAN</text>
  <text x="573" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VERSION</text>
  <text x="645" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">EXÉCUT…</text>
  <text x="695" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">A</text>
  <text x="721" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">M</text>
  <text x="747" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">S</text>
  <rect x="233" y="254" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="329" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="429" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="503" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="573" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <circle cx="662.0" cy="265.0" r="3.2" fill="#4ade80"/>
  <circle cx="700.0" cy="265.0" r="3.2" fill="#4ade80"/>
  <circle cx="726.0" cy="265.0" r="3.2" fill="#4ade80"/>
  <circle cx="752.0" cy="265.0" r="3.2" fill="#f87171"/>
  <rect x="233" y="276" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="329" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="429" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P04012</text>
  <text x="503" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W04012A</text>
  <text x="573" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <circle cx="662.0" cy="287.0" r="3.2" fill="#4ade80"/>
  <circle cx="700.0" cy="287.0" r="3.2" fill="#4ade80"/>
  <circle cx="726.0" cy="287.0" r="3.2" fill="#4ade80"/>
  <circle cx="752.0" cy="287.0" r="3.2" fill="#f87171"/>
  <rect x="233" y="298" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="329" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AR_MGR</text>
  <text x="429" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">R03B505</text>
  <text x="503" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="573" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <circle cx="662.0" cy="309.0" r="3.2" fill="#4ade80"/>
  <circle cx="700.0" cy="309.0" r="3.2" fill="#f87171"/>
  <circle cx="726.0" cy="309.0" r="3.2" fill="#f87171"/>
  <circle cx="752.0" cy="309.0" r="3.2" fill="#f87171"/>
  <text x="233" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="332" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="345.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="345" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 1840</text>
  <text x="1087" y="345" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="382" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Role ID</text>
  <text x="225.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">droit accordé au rôle</text>
  <line x1="360.0" y1="382" x2="337" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rro-arrow)"/>
  <rect x="515.0" y="382" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet · Ecran · Version</text>
  <text x="525.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que couvre le droit</text>
  <line x1="660.0" y1="382" x2="437" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rro-arrow)"/>
  <rect x="815.0" y="382" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter · A · M · S</text>
  <text x="825.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exécuter, ajouter, modifier, supprimer</text>
  <line x1="960.0" y1="382" x2="653" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rro-arrow)"/>
  <rect x="12" y="107" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="122" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres d'abord</text>
  <text x="22" y="135" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisir, puis Exécuter</text>
  <line x1="197" y1="124.0" x2="233" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rro-arrow)"/>
  <rect x="12" y="190" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter</text>
  <text x="22" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grille vide avant exécution</text>
  <line x1="197" y1="207.0" x2="409" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rro-arrow)"/>
  <rect x="1119" y="201" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="216" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="229" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le résultat vers Excel</text>
  <line x1="1119" y1="218.0" x2="1042.5" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rro-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque droit accordé au niveau rôle sur une application connectée :

- **Que le rôle accorde-t-il ?** Objet, form, version — le périmètre du droit.
- **Quelles actions sont autorisées ?** Run, Ajouter, Modifier, Supprimer — les quatre indicateurs d'action. Un rôle qui accorde *Modifier* et *Supprimer* sur un objet financier est la pièce maîtresse de l'analyse de séparation des tâches.
- **La définition du rôle est-elle toujours alignée avec l'intention métier ?** Comparer les droits effectifs ici au rôle documenté est le moyen le plus fiable de détecter une *dérive de rôle* — des droits accumulés au fil du temps dont plus personne ne se souvient de la raison.

:::info[Spécifique à JDE]
Les chemins d'accès comprennent ceux des pages composites et des pages E1, pour les applications cochées **E1 Composite** / **E1 Pages** dans [Applications](../../settings/global/applications.md) : une page composite donne l'application ou l'état qu'ouvrent ses tuiles, les formulaires affichés dans ses volets et, pour une page d'accueil, toutes les tâches placées sous son menu ; une page E1 donne les applications et les états que cite son contenu. Activer ou désactiver un indicateur modifie ces lignes à la collecte suivante.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — identifiant de l'application. Filtrable. | Application concernée par le droit. |
| **Role ID** | `SER_ROLE_ID` — rôle accordant le droit. Filtrable, restreint à l'application. | Rôle auquel la règle appartient. |
| **Objet** | `SER_OBJECT` — objet technique visé par le droit. Filtrable, restreint à l'application. | Ce que le rôle débloque. |
| **Ecran** | `SERL_FORM` — code form au sein de l'objet. | Écran spécifique au sein de l'objet. |
| **Version** | `SER_VERSION` — version de traitement. | Variante de configuration. |
| **Exécuter** | `SER_RUN` — `Y` / `N`. | Indique si le rôle peut ouvrir l'écran. Seules les lignes `Y` apparaissent. |
| **Role Action ID** | `SER_ROLE_ACTION_ID` — identifiant d'action. | Descripteur d'action côté source. |
| **Ajouter / Modifier / Supprimer** | `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Indicateurs d'action au niveau ligne. |

---

## Conseils & bonnes pratiques

- **Filtrer sur *Rôle ID* + trier sur *Objet*** pour obtenir l'inventaire complet de ce qu'un rôle autorise — livrable à discuter avec le propriétaire du rôle lors de la revue.
- **Repérer les droits trop larges** — les droits sur un objet de haut niveau avec les quatre indicateurs à `Y` sont les attributions les plus généreuses. Confirmer que le rôle en a vraiment besoin.
- **Un rôle avec très peu de droits** mérite aussi un œil — il peut être redondant avec un autre et candidat au retrait (voir *Rôles non utilisés*).
- **Combiner avec *Rôles / Menus*** pour vérifier que le rôle accorde à la fois le *droit* et la *navigation* permettant d'atteindre l'objet.
