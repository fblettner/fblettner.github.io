---
title: Audit Utilisateurs
description: "Vue d'audit par utilisateur — identité, organisation, pays et dernière utilisation par module — pour analyser un compte en détail."
keywords: [Nomasx-1, sécurité, audit utilisateurs, fiche utilisateur, dernière utilisation par module, pays, centre de coût, audit détaillé]
---

# Audit Utilisateurs

L'écran **Users Audit** liste, pour chaque compte, les modules qu'il a utilisés. Une ligne par triplet `(Application, Utilisateur, Module)` — un utilisateur actif sur cinq modules du système source produit cinq lignes, à raison d'une par module.

Il s'ouvre par **Sécurité → Users Audit** sur tous les comptes de toutes les applications ; la zone de recherche ou **Filtres** le restreint à un utilisateur. Au lieu d'un résumé sur une ligne, il présente la fiche d'identité et la trace d'utilisation par module.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxuau-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxuau-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxuau-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxuau-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="300" rx="14" fill="url(#nxuau-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security Users - Audit</text>
  <rect x="405.0016" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="427.0016" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_users_audit_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 310 lignes · 10,4 ms</text>
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
  <text x="250" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="357" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="440" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID (ID)</text>
  <text x="547" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <text x="630" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR</text>
  <text x="711" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUT</text>
  <text x="756" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PAYS</text>
  <text x="791" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SOCIÉTÉ</text>
  <text x="840" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CENTRE DE COÛT</text>
  <text x="923" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CC CODE CAT 8</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="547" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="630" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="723" cy="197.0" r="3.2" fill="#4ade80"/>
  <text x="756" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FR</text>
  <text x="791" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00001</text>
  <text x="840" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">10</text>
  <text x="923" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ADM</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="547" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="630" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="723" cy="220.0" r="3.2" fill="#4ade80"/>
  <text x="756" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FR</text>
  <text x="791" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00001</text>
  <text x="840" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">10</text>
  <text x="923" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ADM</text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="547" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="630" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <circle cx="723" cy="243.0" r="3.2" fill="#4ade80"/>
  <text x="756" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FR</text>
  <text x="791" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00001</text>
  <text x="840" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">20</text>
  <text x="923" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SAL</text>
  <rect x="240" y="255" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="269.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BMARTIN</text>
  <text x="547" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <text x="630" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <circle cx="723" cy="266.0" r="3.2" fill="#4ade80"/>
  <text x="756" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">DE</text>
  <text x="791" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00002</text>
  <text x="840" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">30</text>
  <text x="923" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">LOG</text>
  <text x="240" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="288" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="301.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 2 310</text>
  <rect x="992" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="288" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="301.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Organisation</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pays, société, centre de coût</text>
  <line x1="200" y1="167.0" x2="756" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxuau-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par module</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">2 modules utilisés = 2 lignes</text>
  <line x1="200" y1="257.0" x2="290" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxuau-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la grille défile en largeur</text>
  <line x1="1120" y1="137.0" x2="971.0" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxuau-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernière utilisation · composant</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plus à droite dans la grille</text>
  <line x1="1120" y1="227.0" x2="1070" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxuau-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour un utilisateur unique sur une application :

- **Qui est cette personne ?** Identité (nom), contexte d'organisation (pays, société, centre de coût, code catégorie) et statut du compte — tout ce qu'il faut à un auditeur pour reconnaître l'utilisateur sans quitter l'écran.
- **Qu'utilise-t-il ?** Une ligne par module du système source, avec la date de la dernière opération sur ce module. C'est la trace qui répond à la question *« le portefeuille de rôles détenu est-il justifié ? »*.
- **Que peut-on retirer ?** Un rôle qui donne accès à un module non utilisé depuis douze mois est un candidat à la révocation.

L'écran est l'étape suivante de chaque investigation par utilisateur, après *Utilisateurs* — une recherche, tout le contexte.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — identifiant numérique de l'application source. | Application à laquelle appartient l'utilisateur. |
| **Utilisateur ID** | `USR_ID` — identifiant technique de connexion. | Repris depuis l'écran appelant. |
| **Nom** | `USR_NAME` — nom d'affichage. | Nom lisible. |
| **Statut** | `USR_STATUS` — normalisé : `01` pour *Actif*, `N` sinon. | État du compte dans la source. |
| **Pays** | `USRD_ULCTR` — texte. | Pays rattaché à l'utilisateur dans le système source. |
| **Société** | `USRD_MCCO` — texte. | Société par défaut affectée à l'utilisateur. |
| **Centre de coût** | `USRD_MCMCU` — texte. | Centre de coût par défaut affecté à l'utilisateur. |
| **CC Code Cat 8** | `USRD_MCRP08` — texte. | Code catégorie 8 du centre de coût — axe de répartition courant pour le reporting analytique. |
| **Composant** | `CPT_COMPONENT` — texte. | Module fonctionnel du système source (comptabilité fournisseurs, grand livre, etc.). Une ligne par module utilisé au moins une fois. |
| **Dernière utilisation** | `LAST_USAGE` — date. | Dernière activité enregistrée par la source sur le module. |

:::info[Spécifique à JDE]
Sur JD Edwards EnterpriseOne, *Composant* et *Dernière utilisation* sont calculés à partir de l'**Object Usage Tracking** (`LICENSE_JDE_OUT`) joint à la table des objets JDE puis au mappage System Code → Composant de licence (`SETTINGS_JDE_SY → SETTINGS_LIC_COMPONENTS`). Les colonnes d'organisation (Pays, Société, Centre de coût, Cat 8) sont des valeurs par défaut JDE stockées dans les données utilisateur. Les autres systèmes sources peuvent alimenter les mêmes colonnes via leurs équivalents — par exemple le rattachement centre de coût RH côté SAP, l'emplacement et le département côté NetSuite.
:::

---

## Conseils & bonnes pratiques

- **Lire la colonne *Dernière utilisation* en partant du bas.** Les modules sans activité depuis douze mois sont le signal le plus net pour la révocation d'un rôle — l'utilisateur fait peser un coût d'audit sur un rôle qu'il n'exerce plus.
- **Utiliser *Pays* et *Centre de coût*** pour recouper avec la RH. Un utilisateur dont le pays côté source ne correspond plus à la fiche RH est soit une mobilité non répercutée, soit un compte obsolète.
- **Pour les comptes techniques ou batch**, on s'attend à un seul module avec une date récente et rien d'autre. Les marquer comme tels via l'écran *Paramètres → Propriétés utilisateurs* pour qu'ils cessent d'apparaître dans la revue des comptes dormants.
- **Rechercher l'utilisateur, puis *Exporter → Excel (.xlsx)*** pour conserver la trace par module dans les pièces justificatives remises aux auditeurs.
