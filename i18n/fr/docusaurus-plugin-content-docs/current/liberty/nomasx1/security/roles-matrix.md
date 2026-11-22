---
title: Combinaison de rôles
description: "Combinaisons de rôles distinctes détenues par les utilisateurs sur chaque application connectée, avec le nombre d'utilisateurs derrière chaque combinaison."
keywords: [Nomasx-1, sécurité, combinaisons de rôles, matrice des rôles, portefeuille de rôles, audit]
---

# Combinaison de rôles

L'écran **Combinaison de rôles** regroupe les utilisateurs par **ensemble exact de rôles** qu'ils détiennent. Une ligne par couple `(Application, combinaison de rôles)`. Pour chaque portefeuille de rôles distinct trouvé parmi les utilisateurs actifs d'une application, l'écran indique le nombre d'utilisateurs qui détiennent exactement cette combinaison ainsi qu'un utilisateur témoin pour pouvoir creuser.

C'est la manière la plus concise de voir *à quoi ressemble réellement le modèle de sécurité en production* — non ce qui a été conçu sur le papier, mais ce que les utilisateurs portent effectivement.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxrmx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxrmx-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxrmx-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxrmx-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="300" rx="14" fill="url(#nxrmx-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité - Combinaison de rôles (les combinaisons de rôles des utilisateurs)</text>
  <rect x="742.0" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="764.0" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_matrix_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">38 lignes · 9,7 ms</text>
  <rect x="952" y="100" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="953" y="101" width="64" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="985.0" y="113.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableau</text>
  <line x1="1018" y1="105" x2="1018" y2="115" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="113.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Graphique</text>
  <rect x="240" y="128" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="418" y="128" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458.0" y="142.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="648" y="128" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="766" y="128" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="787.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="814" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="842.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="877" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="940" y="128" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="971.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="1008" y="128" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="240" y="160" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="268" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="375" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="458" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace"># UTILISATEURS</text>
  <text x="541" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID</text>
  <text x="671" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID (ID)</text>
  <text x="778" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="189" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="200.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="359" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="525" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">42</text>
  <text x="541" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="671" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="778" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="212" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="223.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="359" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="525" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">17</text>
  <text x="541" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_CLERK,GL_ACCT</text>
  <text x="671" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BMARTIN</text>
  <text x="778" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="235" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="246.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="359" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="525" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">6</text>
  <text x="541" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AR_MGR</text>
  <text x="671" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="778" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <rect x="240" y="255" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="258" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="269.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">↳</text>
  <text x="359" y="269.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="525" y="269.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="541" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_MGR,AR_MGR,GL_ACCT</text>
  <text x="671" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">LEGACY01</text>
  <text x="778" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Legacy account</text>
  <text x="240" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="288" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="301.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–38 sur 38</text>
  <rect x="992" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="288" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="301.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">↳ Display Users</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les titulaires de la combinaison</text>
  <line x1="200" y1="227.0" x2="254" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrmx-arrow)"/>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nombre d'utilisateurs</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les plus fréquentes d'abord</text>
  <line x1="200" y1="137.0" x2="478" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrmx-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Combinaison de rôles</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les rôles, séparés par des virgules</text>
  <line x1="1120" y1="167.0" x2="651" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrmx-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateur témoin</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un titulaire de la combinaison</text>
  <line x1="1120" y1="317.0" x2="860" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrmx-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque application connectée, regrouper ses utilisateurs actifs par **ensemble exact de rôles** détenu et répondre à :

- **Quelle est la combinaison de rôles standard ?** La ligne au plus grand nombre d'utilisateurs correspond en général au profil d'onboarding standard — toute valeur en dessous mérite un œil.
- **Quelles sont les exceptions ?** Les combinaisons détenues par un ou deux utilisateurs cachent souvent des rôles résiduels d'anciennes responsabilités, des erreurs d'affectation ou des permissions accumulées au fil du temps.
- **Où se nichent les risques de séparation des tâches ?** Une combinaison qui mêle des rôles incompatibles (par exemple *créer un fournisseur* + *approuver un paiement*) est le point de départ le plus utile pour une analyse SoD — la matrice la fait apparaître directement.

L'écran complète *Affectations* en condensant des milliers de lignes en quelques dizaines — plus lisible, plus simple à discuter avec les métiers.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant numérique de l'application source. | Application à laquelle appartient la combinaison. |
| **# Utilisateurs** | `USERS_COUNT` — `COUNT(DISTINCT USR_ID)` sur la combinaison. | Nombre d'utilisateurs actifs portant exactement ce portefeuille. |
| **Role ID** — la combinaison | `RLU_ROLE_ID` — `STRING_AGG(RLU_ROLE_ID, ',' ORDER BY RLU_ROLE_ID)` par utilisateur. | Liste des rôles séparés par virgule, dans un ordre déterministe pour que les combinaisons identiques se regroupent. |
| **Utilisateur ID** — l'utilisateur témoin | `USR_ID` — `MAX(USR_ID)` par combinaison, restreint à l'application. | Un utilisateur réel portant la combinaison — à rechercher dans *Users Audit*. |

Le tri est appliqué sur *Nb utilisateurs* en ordre décroissant — les combinaisons les plus répandues remontent en premier.

---

## Menu contextuel

Le menu de ligne ne contient qu'une action : le bouton **↳** en début de ligne la lance directement ; un clic droit sur la ligne ouvre le menu.

| Action | Vers où |
|---|---|
| **Display Users** | Liste de tous les utilisateurs portant exactement la combinaison de rôles sélectionnée sur l'application. |

---

## Conseils & bonnes pratiques

- **Changer d'angle de vue** — plutôt que de discuter de milliers d'affectations individuelles, se concentrer sur la douzaine de combinaisons les plus fréquentes. Chacune est un profil-type *de fait* utilisé dans l'entreprise.
- **Repérer les exceptions en bas de la liste** — combinaisons à 1 ou 3 utilisateurs. Elles s'accumulent discrètement quand les changements d'accès se font à la main au lieu de passer par un modèle.
- **Recouper les paires incompatibles** — choisir une paire connue comme *non cumulable* (par exemple *créer un fournisseur* + *approuver un paiement*) puis la rechercher dans la colonne *Role ID*. Chaque occurrence est une exception SoD à confirmer ou corriger.
- **Partir de l'utilisateur témoin** (*Utilisateur ID*) pour retrouver la combinaison dans *Users Audit* — on y voit concrètement ce que la combinaison ouvre dans le système source.
