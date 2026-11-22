---
title: Applications
description: "Registre de chaque application connectée — identifiant, type, base, hôte et identifiants utilisés par Nomasx-1 pour atteindre le système source."
keywords: [Nomasx-1, paramètres, applications, registre, connexion, JDBC, système source]
---

# Applications

L'écran **Applications** est le registre central des applications auxquelles Nomasx-1 se connecte. Une ligne par application. Chaque ligne porte l'identifiant affiché dans le reste du produit, le type de système source, la base sous-jacente et les détails de connexion (serveur, port, utilisateur, mot de passe).

C'est le premier écran à renseigner pour raccorder un nouveau système source, et le dernier à modifier une fois que tout le reste fonctionne. Accès : **Paramètres → Global → Applications**.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sap-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sap-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sap-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sap-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="240" rx="14" fill="url(#sap-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - Applications</text>
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
  <text x="329" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="343" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM DE L'APPLICATION</text>
  <text x="473" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TYPE D'APPLICATION (…</text>
  <text x="593" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TYPE D'APPLICATION</text>
  <text x="703" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">BASE DE DONNÉES (I…</text>
  <text x="813" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">BASE DE DONNÉES</text>
  <text x="903" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SERVEUR</text>
  <text x="1013" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">BASE DE DONN…</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="343" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="473" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="593" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards</text>
  <text x="703" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ORACLE</text>
  <text x="813" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle</text>
  <text x="903" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dbhost01</text>
  <text x="1013" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDEPRD</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="343" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-TEST</text>
  <text x="473" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="593" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards</text>
  <text x="703" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ORACLE</text>
  <text x="813" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle</text>
  <text x="903" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dbhost02</text>
  <text x="1013" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDETST</text>
  <text x="233" y="238" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="226" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="239.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="239" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–2 sur 2</text>
  <text x="1087" y="239" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="276" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom de l'application</text>
  <text x="225.0" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repris partout dans Nomasx-1</text>
  <line x1="360.0" y1="276" x2="351" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="515.0" y="276" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type</text>
  <text x="525.0" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type de système source</text>
  <line x1="660.0" y1="276" x2="601" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="815.0" y="276" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Serveur · base</text>
  <text x="825.0" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">où lit Nomasx-1</text>
  <line x1="960.0" y1="276" x2="911" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déclarer une application</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre ses huit onglets</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vues</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vue par défaut : six colonnes</text>
  <line x1="1119" y1="134.0" x2="724.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
</svg>

---

## Objectif de l'écran

Maintenir le registre auquel chaque autre écran fait référence :

- **Déclarer chaque système source.** Une ligne par application — ID, nom, type (`JDE`, `DATABASE`, `LDAP`, `WEBLOGIC`, `CUSTOM`), technologie de base (`ORACLE`, `MSSQL`, `DB2`, `POSTGRES`…), serveur.
- **Porter les détails de connexion.** Serveur, port, base, utilisateur, mot de passe, DB-link et connexion directe, ainsi que les paramètres JD Edwards et LDAP. Les tâches de collecte les lisent.
- **Établir l'application ID** qui circule dans tous les autres écrans — le fil reliant utilisateur, rôle, conflit, licence et audit.

---

## Colonnes

La vue par défaut affiche *Application ID*, *Nom de l'application*, *Type d'application*, *Base de données* (la technologie), *Serveur* et *Base de données* (le nom). **Colonnes** affiche les autres.

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant numérique. | Identifiant repris partout ailleurs dans le produit. |
| **Nom de l'application** | `APPS_NAME` — libellé. | Nom lisible. |
| **Type d'application** | `APPS_TYPE` — `JDE` (JD Edwards), `DATABASE`, `LDAP`, `WEBLOGIC` ou `CUSTOM` (Custom Application). | Type de système source : détermine les étapes de collecte qui s'appliquent. |
| **Base de données** | `APPS_DBTYPE` — `ORACLE`, `MSSQL`, `DB2`, `POSTGRES`, `MYSQL`, `MARIADB`, `LDAP`, `GENERIC`. | Technologie de la base. |
| **Serveur** | `APPS_HOST` — serveur. | Nom DNS ou adresse IP. |
| **Base de données** | `APPS_DATABASE` — service / SID. | Nom de la base. |
| **Utilisateur / Mot de passe** | `APPS_USER`, `APPS_PASSWORD` — identifiants. | Compte avec lequel Nomasx-1 lit la source. |
| **Port**, **DB-Link**, **Connexion directe**, **Code Pays** | `APPS_PORT`, `APPS_DBLINK`, `APPS_DIRECTDB`, `APPS_CTRY_ID`. Masquées. | Détails de connexion et code pays. |
| **Pool** | `APPS_JDBC`. Masquée. | Pool de connecteur utilisé par les tâches de collecte pour cette application : un seul connecteur JD Edwards dessert ainsi plusieurs environnements. Vide : le connecteur source de la tâche. |

Les paramètres JD Edwards et LDAP de chaque application sont aussi des colonnes de cette grille (*JDE SY*, *JDE DTA*… *Contexte LDAP*…) : ils sont décrits avec les onglets de la fenêtre ci-dessous.

---

## Boîte de dialogue

**Ajouter une ligne** déclare une nouvelle application ; un clic sur une ligne l'ouvre. La fenêtre, **Modifier · Settings - Applications**, s'ouvre sur l'onglet **Application** et compte huit onglets. **Vues de tâches**, **Suivi d'activité**, **Audit Trail** et **Colonnes auditées** n'apparaissent que sur une application déjà enregistrée. Le pied de fenêtre porte **Supprimer**, **Dupliquer**, **Annuler** et **Enregistrer**.

<svg viewBox="0 0 1320 542" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sad-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sad-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sad-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sad-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="492" rx="14" fill="url(#sad-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Settings - Applications</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="275.0" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Application</text>
  <text x="358.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Connection</text>
  <text x="439.5" y="92" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <line x1="402" y1="101" x2="477" y2="101" stroke="#4a9eff" strokeWidth="2"/>
  <text x="531.0" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues de tâches</text>
  <text x="606.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">LDAP</text>
  <text x="687.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Suivi d'activité</text>
  <text x="787.0" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit Trail</text>
  <text x="889.0" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes auditées</text>
  <line x1="235" y1="102" x2="1085" y2="102" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE DTA</text>
  <rect x="235.0" y="134" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PRODDTA</text>
  <text x="451.0" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_DTA_DBLINK</text>
  <rect x="451.0" y="134" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="148.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE CTL</text>
  <rect x="667.0" y="134" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PRODCTL</text>
  <text x="883.0" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_CTL_DBLINK</text>
  <rect x="883.0" y="134" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="148.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE SY</text>
  <rect x="235.0" y="180" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="194.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="451.0" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_SY_DBLINK</text>
  <rect x="451.0" y="180" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="194.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE SVM</text>
  <rect x="667.0" y="180" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="194.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SVM920</text>
  <text x="883.0" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_SVM_DBLINK</text>
  <rect x="883.0" y="180" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="194.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE CO</text>
  <rect x="235.0" y="226" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="240.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PD920</text>
  <text x="451.0" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_CO_DBLINK</text>
  <rect x="451.0" y="226" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="240.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE OL</text>
  <rect x="667.0" y="226" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="240.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">OL920</text>
  <text x="883.0" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_OL_DBLINK</text>
  <rect x="883.0" y="226" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="240.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">F00950</text>
  <rect x="235.0" y="272" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="451.0" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_F00950_DBLINK</text>
  <rect x="451.0" y="272" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="286.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_SEC</text>
  <rect x="667.0" y="272" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="883.0" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_SEC_DBLINK</text>
  <rect x="883.0" y="272" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="286.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="312" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_OL</text>
  <rect x="235.0" y="318" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="332.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">OL920</text>
  <text x="451.0" y="312" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_OL_DBLINK</text>
  <rect x="451.0" y="318" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="332.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="312" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LECTURE LOB EN MODE THICK (O/N)</text>
  <rect x="667.0" y="321" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="684.0" y="330" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="235.0" y="358" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENU STANDARD (Y/N)</text>
  <rect x="235.0" y="367" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M237.5,372.5 L239.8,374.8 L243.8,370" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="252.0" y="376" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">activé</text>
  <text x="451.0" y="358" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E1 PAGES (Y/N)</text>
  <rect x="451.0" y="367" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M453.5,372.5 L455.8,374.8 L459.8,370" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="468.0" y="376" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">activé</text>
  <text x="667.0" y="358" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E1 COMPOSITE (Y/N)</text>
  <rect x="667.0" y="367" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M669.5,372.5 L671.8,374.8 L675.8,370" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="684.0" y="376" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">activé</text>
  <text x="235.0" y="404" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PURGE OUT</text>
  <rect x="235.0" y="413" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M237.5,418.5 L239.8,420.8 L243.8,416" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="252.0" y="422" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">activé</text>
  <text x="451.0" y="404" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOURS RETENTION OUT</text>
  <rect x="451.0" y="410" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="424.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">90</text>
  <line x1="215" y1="458" x2="1105" y2="458" stroke="#1f2937" strokeWidth="1"/>
  <rect x="989" y="472" width="96" height="24" rx="5" fill="url(#sad-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1037.0" y="487.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Enregistrer</text>
  <rect x="907" y="472" width="74" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="487.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="814" y="472" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="487.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <rect x="732" y="472" width="74" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="769.0" y="487.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="12" y="67" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="82" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Huit onglets</text>
  <text x="22" y="95" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">quatre seulement en modification</text>
  <line x1="197" y1="84.0" x2="485" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="12" y="128" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schémas</text>
  <text x="22" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">données, contrôle, système, server map…</text>
  <line x1="197" y1="145.0" x2="233.0" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="12" y="312" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="327" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bibliothèques UDO</text>
  <text x="22" y="340" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sécurité et object librarian</text>
  <line x1="197" y1="329.0" x2="233.0" y2="329" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="12" y="358" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="373" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menus à lire</text>
  <text x="22" y="386" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">standard, E1 pages, composite</text>
  <line x1="197" y1="375.0" x2="233.0" y2="375" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="1119" y="128" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">…_DBLINK</text>
  <text x="1129" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lien de base par schéma</text>
  <line x1="1119" y1="145.0" x2="1087.0" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="1119" y="312" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="327" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lecture LOB thick</text>
  <text x="1129" y="340" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JDE atteint par un lien de base</text>
  <line x1="1119" y1="329.0" x2="871.0" y2="329" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="1119" y="404" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="419" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Purge OUT · rétention</text>
  <text x="1129" y="432" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jours d'utilisation gardés</text>
  <line x1="1119" y1="421.0" x2="655.0" y2="421" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="1119" y="479" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="494" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1129" y="507" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Supprimer · Dupliquer · Annuler</text>
  <line x1="1119" y1="496.0" x2="1037.0" y2="496" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
</svg>

### Onglet 1 — Application

| Champ | À renseigner |
|---|---|
| **Application ID** | Identifiant numérique. Il reste stable dans tout le produit : ne pas le renuméroter une fois l'application en service. |
| **Nom de l'application** | Libellé repris sur chaque écran et chaque export. |
| **Type d'application** | Type de système source, choisi dans une liste (`JDE` — JD Edwards…). Détermine les étapes de collecte qui s'appliquent. |
| **Base de données** | Technologie de la base, choisie dans une liste (`ORACLE` — Oracle…). |

### Onglet 2 — Connection

Emplacement de la base source et compte de lecture de Nomasx-1.

| Champ | À renseigner |
|---|---|
| **Serveur** | Nom DNS ou adresse IP du serveur de base. |
| **Utilisateur** | Compte avec lequel Nomasx-1 lit la source. |
| **Mot de passe** | Son mot de passe. Sur une application existante, le champ affiche *laisser vide pour conserver la valeur actuelle*. |

Le port, le nom de la base, le DB-link et la connexion directe sont des colonnes masquées de la grille (**Colonnes** les affiche).

### Onglet 3 — JD Edwards

:::info[Spécifique à JDE]
Les schémas qui situent les tables de JD Edwards EnterpriseOne, chacun avec son lien de base, puis ce que lit la collecte. Les mêmes paramètres ont leur propre écran, [JD Edwards](./jd-edwards.md).
:::

| Champ | À renseigner |
|---|---|
| **JDE DTA**, **JDE CTL**, **JDE SY**, **JDE SVM**, **JDE CO**, **JDE OL** | Schémas des tables de données métier, de contrôle, système, server map, objets centraux et object librarian. |
| **F00950** | Schéma de la table du security workbench. |
| **JDE_UDO_SEC** | Schéma de la table de sécurité des objets utilisateur (F00950W) : ses lignes s'ajoutent à la sécurité collectée. Vide : ignorée. |
| **JDE_UDO_OL** | Schéma de la bibliothèque des objets utilisateur (F9860W, F9861W), lue pour les pages composites, les E1 pages et l'inventaire des objets utilisateur. Vide : ces étapes ne font rien et le signalent. |
| **…_DBLINK** | À côté de chaque schéma : le lien de base qui y mène, vide quand les tables JDE sont locales. |
| **Lecture LOB en mode thick (O/N)** | À cocher quand les tables JDE sont atteintes par un lien de base : les menus et les spécifications de la référence croisée (colonnes LOB) sont alors lus par un processus thick de courte durée. Laisser décoché pour une installation locale. |
| **Menu standard (Y/N)**, **E1 Pages (Y/N)**, **E1 Composite (Y/N)** | Menus lus pour construire la sécurité : menus JDE standard, E1 pages et pages composites. Une page composite apporte ce qu'ouvrent ses tuiles, les écrans affichés dans ses volets et la tâche d'une tuile de tâche — pour une page d'accueil, toutes les tâches de son menu ; une E1 page apporte les applications et les états que son code appelle ou nomme. |
| **Purge OUT** | À cocher pour que Nomasx-1 purge les anciennes lignes de traçabilité des objets. |
| **Jours Retention OUT** | Nombre de jours d'historique conservés par la purge. |

:::tip
La traçabilité des objets écrit plusieurs milliers de lignes par jour. Une fois ces lignes agrégées par Nomasx-1, la purge garde la table JDE compacte : cocher **Purge OUT** et choisir une rétention adaptée au besoin d'audit. L'historique d'utilisation déjà collecté reste conservé côté Nomasx-1.
:::

Les valeurs des schémas viennent de l'installation JDE : l'administrateur JDE est l'interlocuteur.

### Onglet 4 — Vues de tâches

Grille des vues de tâches JDE (les racines de l'arborescence des menus, comme *EnterpriseOne Menus*) : **Tâche ID**, **Nom Tâche** et **Collecter la sécurité (Y/N)**. Seules les vues cochées ici sont parcourues pour construire la sécurité : les droits des écrans *Menus* et *Droits* en partent. **Ajouter une ligne** déclare une autre vue de tâches.

### Onglet 5 — LDAP

Périmètre LDAP / Active Directory de l'application, lu par la collecte LDAP.

| Champ | À renseigner |
|---|---|
| **Contexte LDAP** | DN de base d'où part la recherche (par exemple `OU=Users,DC=acme,DC=local`). |
| **Filtre LDAP** | Filtre de recherche LDAP qui restreint les entrées lues. |
| **Exclusion LDAP** | Entrées à écarter. |

Les mêmes paramètres ont leur propre écran, [LDAP](./ldap.md).

### Onglet 6 — Suivi d'activité

Grille des règles qui fixent **ce que surveille la collecte d'activité** pour alimenter *Applications → Transactions*. Une ligne par règle ; **Ajouter une ligne** élargit le périmètre, supprimer une ligne le restreint.

| Colonne | À renseigner |
|---|---|
| **ACL Type** | Cible de la règle : `ROLE`, `SCHEMA`, `TABLE` ou `USER`. |
| **ACL Type d'application** | Où le nom est lu : `DATABASE` ou `JDEDWARDS`. |
| **Nom** | Nom du rôle, du schéma, de la table ou de l'utilisateur. |
| **ACL Règle** | `INCLUDE`, `EXCLUDE` ou `AUDIT`. |

### Onglet 7 — Audit Trail

Grille qui porte **la connexion utilisée par Nomasx-1 pour lire les archive logs Oracle** de l'application — une ligne — lue par la collecte qui alimente *Base de données → Audit Trail* et *Audit Lookup*.

| Colonne | À renseigner |
|---|---|
| **User ID** / **Password** | Compte de base autorisé à lire les vues des archive logs. |
| **Host** / **Port** / **Database** | Emplacement de cette base (`1521` sur une installation Oracle standard). |
| **Last SCN** | *System Change Number* à partir duquel reprend la prochaine extraction. |
| **Last Timestamp** | Heure de la dernière extraction. |

### Onglet 8 — Colonnes auditées

Grille qui fixe **la part de chaque table auditée indexée** dans la table de valeurs `AUDIT_TRAIL_VALUES` pour cette application. Une ligne par règle :

| Colonne | À renseigner |
|---|---|
| **Table** | Nom de la table (par exemple `F0911`). |
| **Colonne (ou *SQL* pour journal seul)** | Colonne à indexer, ou `*SQL*` pour le mode journal seul. |

| Règles posées sur une table | Effet |
|---|---|
| **Une ou plusieurs colonnes nommées** | Seules les colonnes listées sont indexées. Les autres restent visibles dans le différentiel à la demande d'*Audit Trail*, sans être cherchables dans la table de valeurs. |
| **Une seule ligne `*SQL*`** | Journal seul : l'instruction DML complète reste dans `AUDIT_TRAIL_QUERY`, rien n'est écrit dans `AUDIT_TRAIL_VALUES`. À réserver aux tables les plus larges, où la recherche colonne par colonne n'a pas d'intérêt. |
| **Aucune ligne pour la table** | Par défaut : toutes les colonnes sont indexées. |

Cet onglet contient le volume de la table de valeurs sur les tables larges. L'instruction DML complète est toujours conservée dans `AUDIT_TRAIL_QUERY` : rien n'est perdu, quelles que soient les règles. Le combiner avec la tâche *Reconstruction des valeurs* de l'écran [Audit Trail](../../database/audit-trail.md) quand le périmètre s'élargit : la nouvelle lecture de `AUDIT_TRAIL_QUERY` alimente les colonnes ajoutées sur les lignes historiques.

---

## Conseils & bonnes pratiques

- **Les ID d'application doivent rester stables.** Quand une application est référencée dans rôles, conflits, licences et piste d'audit, renuméroter l'ID casse l'historique.
- **Choisir un nom parlant.** Le nom apparaît sur chaque export — des libellés courts et reconnaissables rendent les livrables plus lisibles.
- **Maintenir les identifiants à jour.** Un connecteur en échec d'identifiants est la cause la plus fréquente de collectes obsolètes.
- **Pour les sources non JDE** (`DATABASE`, `LDAP`, `WEBLOGIC`, `CUSTOM`), vérifier le *Type d'application* : les étapes de collecte en dépendent.
