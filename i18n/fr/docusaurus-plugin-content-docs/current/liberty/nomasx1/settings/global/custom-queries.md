---
title: DWH
description: "Fragments SQL personnalisés surchargeant les requêtes Nomasx-1 par défaut, par application."
keywords: [Nomasx-1, paramètres, requêtes personnalisées, surcharge, SQL, JDBC, par application]
---

# DWH

L'écran **DWH** (*Custom Queries* dans la nomenclature interne) permet à chaque application de surcharger le SQL exécuté par défaut par Nomasx-1. Une ligne par couple `(Application, Méthode)` — *Nom de la méthode SQL* désigne l'étape de collecte de la sécurité que la requête remplace — `SECURITY_USERS` (Users), `SECURITY_ROLES` (Roles), `SECURITY_ASSIGNMENTS` (Assignments), `SECURITY_MENUS` (Menus) ou `SECURITY_RIGHTS` (Rights) — et *Requête* porte le SQL de remplacement. Des champs JDBC / utilisateur / mot de passe optionnels permettent à la surcharge de viser un schéma différent de celui de l'application.

C'est le point d'extension. Quand un système source range ses tables de sécurité différemment de l'attente canonique de Nomasx-1, on surcharge la méthode ici plutôt que de toucher au produit.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="csq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="csq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="csq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="csq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="240" rx="14" fill="url(#csq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - User defined query</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">2 lignes · 12 ms</text>
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
  <text x="349" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="363" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="483" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM DE LA MÉTHODE SQL (ID)</text>
  <text x="653" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM DE LA MÉTHODE SQL</text>
  <text x="813" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR (AUD…</text>
  <text x="913" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE (AUDIT)</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="483" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SECURITY_USERS</text>
  <text x="653" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Users</text>
  <text x="813" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="913" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-02</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="483" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SECURITY_ROLES</text>
  <text x="653" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Roles</text>
  <text x="813" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="913" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-15</text>
  <text x="233" y="238" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="226" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="239.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="239" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–2 sur 2</text>
  <text x="1087" y="239" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="276" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Méthode SQL</text>
  <text x="225.0" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la requête remplacée</text>
  <line x1="435.0" y1="276" x2="661" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csq-arrow)"/>
  <rect x="665.0" y="276" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateur · date (Audit)</text>
  <text x="675.0" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dernière modification</text>
  <line x1="885.0" y1="276" x2="921" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csq-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remplacer une requête de sécurité</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csq-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Propriétés · Base · Requêtes</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csq-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers Excel</text>
  <line x1="1119" y1="134.0" x2="1042.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csq-arrow)"/>
</svg>

---

## Objectif de l'écran

- **Surcharger par application.** Une ligne remplace la requête par défaut que Nomasx-1 exécuterait pour la méthode nommée sur l'application nommée.
- **Ajouter une connexion dédiée si besoin.** Quand la requête surchargée vise un autre schéma ou d'autres identifiants, les colonnes *JDBC / Utilisateur / Mot de passe* les portent ; sinon la surcharge s'exécute sur la connexion principale de l'application.
- **Tracer la modification.** *Utilisateur (Audit)* et *Date (Audit)* indiquent qui a introduit la surcharge et quand — utile quand une collecte change de comportement.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `SQL_APPS_ID` — identifiant de l'application. Joint à *Applications* pour le nom convivial. | Application concernée par la surcharge. |
| **Nom de la méthode SQL** | `SQL_METHOD` — une des cinq méthodes de sécurité. | Requête remplacée. |
| **Requête** | `SQL_BLOB` — texte. Masquée par défaut. | SQL de remplacement. |
| **JDBC / Utilisateur / Mot de passe** | `SQL_JDBC`, `SQL_USER`, `SQL_PASSWORD` — optionnels. Masqués. | Connexion dédiée utilisée par la surcharge. |
| **Utilisateur (Audit) / Date (Audit)** | `SQL_AUDIT_USER`, `SQL_AUDIT_DATE` — qui / quand. | Traçabilité de la modification. |

---

## Boîte de dialogue

**Ajouter une ligne** déclare une surcharge ; un clic sur une ligne l'ouvre. La fenêtre compte trois onglets : **Propriétés**, **Base de données** et **Requêtes**.

<svg viewBox="0 0 1320 404" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cqd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cqd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cqd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cqd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="354" rx="14" fill="url(#cqd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau · Settings - User defined query</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="272.5" y="92" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Propriétés</text>
  <line x1="235" y1="101" x2="310" y2="101" stroke="#4a9eff" strokeWidth="2"/>
  <text x="366.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Base de données</text>
  <text x="455.0" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Requêtes</text>
  <line x1="235" y1="102" x2="1085" y2="102" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="235.0" y="134" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Choisir…</text>
  <text x="1075.0" y="149" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="235.0" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE LA MÉTHODE SQL</text>
  <rect x="235.0" y="180" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="194.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Choisir…</text>
  <text x="1075.0" y="195" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="235.0" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR (AUDIT)</text>
  <rect x="235.0" y="226" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="240.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="235.0" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE (AUDIT)</text>
  <rect x="235.0" y="272" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">2026-11-22</text>
  <line x1="215" y1="320" x2="1105" y2="320" stroke="#1f2937" strokeWidth="1"/>
  <rect x="989" y="334" width="96" height="24" rx="5" fill="url(#cqd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1037.0" y="349.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Enregistrer</text>
  <rect x="907" y="334" width="74" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="349.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="814" y="334" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="349.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <rect x="12" y="67" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="82" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois onglets</text>
  <text x="22" y="95" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Base : utilisateur, mot de passe, JDBC</text>
  <line x1="197" y1="84.0" x2="355" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cqd-arrow)"/>
  <rect x="12" y="128" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application ID</text>
  <text x="22" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'application concernée</text>
  <line x1="197" y1="145.0" x2="233.0" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cqd-arrow)"/>
  <rect x="12" y="174" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="189" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Méthode SQL</text>
  <text x="22" y="202" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">quelle requête de collecte</text>
  <line x1="197" y1="191.0" x2="233.0" y2="191" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cqd-arrow)"/>
  <rect x="1119" y="220" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateur · date (Audit)</text>
  <text x="1129" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">renseignés par l'application</text>
  <line x1="1119" y1="237.0" x2="1087.0" y2="237" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cqd-arrow)"/>
  <rect x="1119" y="341" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="356" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1129" y="369" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'onglet Requêtes porte le SQL</text>
  <line x1="1119" y1="358.0" x2="1037.0" y2="358" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cqd-arrow)"/>
</svg>

### Onglet 1 — Propriétés

Couple qui identifie la surcharge, avec l'auteur de la dernière modification.

| Champ | À renseigner |
|---|---|
| **Application ID** | Une des applications déclarées. La surcharge ne s'applique qu'à elle. |
| **Nom de la méthode SQL** | Méthode remplacée : `SECURITY_USERS` (Users), `SECURITY_ROLES` (Roles), `SECURITY_ASSIGNMENTS` (Assignments), `SECURITY_MENUS` (Menus) ou `SECURITY_RIGHTS` (Rights). |
| **Utilisateur (Audit)** / **Date (Audit)** | Renseignés par Nomasx-1 à l'enregistrement. |

### Onglet 2 — Base de données

Connexion dédiée optionnelle. Avec les trois champs vides, la surcharge s'exécute sur la connexion principale de l'application.

| Champ | À renseigner |
|---|---|
| **Utilisateur** | Compte en lecture utilisé pour exécuter le SQL surchargé. |
| **Mot de passe** | Mot de passe du compte. |
| **JDBC** | URL JDBC quand la surcharge vise un schéma différent de celui de l'application. |

### Onglet 3 — Requêtes

Le SQL de remplacement. Obligatoire.

| Champ | À renseigner |
|---|---|
| **Requête** | Texte multiligne. Coller le SQL à exécuter à la place de la requête par défaut pour la méthode choisie dans *Propriétés*. |

---

## Conseils & bonnes pratiques

- **Tester le SQL hors Nomasx-1** d'abord — une surcharge syntaxiquement cassée se traduit par une grille vide sur l'écran consommateur.
- **Limiter le périmètre de la surcharge.** Surcharger une méthode à la fois plutôt que réécrire une branche entière — plus simple à maintenir et à annuler.
- **Documenter le *pourquoi*** au moment de la revue ou dans un ticket — six mois plus tard, la surcharge doit pouvoir être relue par un autre administrateur.
- **Retirer la ligne dès qu'elle n'est plus utile** pour que Nomasx-1 retombe sur le comportement par défaut.
