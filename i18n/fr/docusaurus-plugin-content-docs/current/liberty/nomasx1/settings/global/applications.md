---
title: Applications
description: "Registre Nomasx-1 des applications connectées — identifiant, type, pool par lequel l'application est atteinte, et ses paramètres JD Edwards, LDAP, suivi d'activité, Audit Trail et comptes techniques."
keywords: [Nomasx-1, paramètres, applications, registre, pool, connexion, annuaire LDAP, comptes techniques, système source]
---

# Applications

L'écran **Applications** est le registre central des applications auxquelles Nomasx-1 se connecte — JD Edwards EnterpriseOne, un annuaire, une base de données ou toute autre application connectée. Une ligne par application. Chaque ligne porte l'identifiant affiché dans le reste du produit, le type de système source et le **pool** par lequel l'application est atteinte ; les onglets de la fiche portent ses paramètres JD Edwards, LDAP, de suivi d'activité, d'Audit Trail et de comptes techniques.

C'est le premier écran à renseigner pour raccorder un nouveau système source. Accès : **Paramètres → Global → Applications**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sapg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sapg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sapg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sapg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="274" rx="14" fill="url(#sapg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres - Applications</text>
  <rect x="430.0" y="37" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="452.0" y="48.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="65" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.settings_applications_get</text>
  <line x1="220" y1="78" x2="980" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="92" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="304.0" y="106.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="376" y="92" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="429.0" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifier en lot</text>
  <rect x="490" y="92" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="106.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="648" y="92" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="687.0" y="106.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Exécuter</text>
  <rect x="882" y="92" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="921.0" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="808" y="92" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.0" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="240" y="128" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID APPLICATION</text>
  <text x="360" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE L'APPLICATION</text>
  <text x="520" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE D'APPLICATION</text>
  <text x="670" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE DE BASE</text>
  <text x="800" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOL</text>
  <rect x="240" y="160" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="360" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="520" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="670" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Oracle</text>
  <text x="800" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">jdedwards</text>
  <rect x="240" y="190" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="360" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">AD-CORP</text>
  <text x="520" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">LDAP</text>
  <text x="670" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">LDAP</text>
  <text x="800" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ad_directory</text>
  <rect x="240" y="220" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="360" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">PAYROLL</text>
  <text x="520" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Custom Application</text>
  <text x="670" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Postgres</text>
  <text x="800" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">payroll</text>
  <rect x="240" y="250" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="360" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">JDE-TEST</text>
  <text x="520" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="670" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Oracle</text>
  <text x="800" y="266.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="20" y="85" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="100" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="30" y="113" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déclare une application</text>
  <line x1="200" y1="102.0" x2="240" y2="103" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">ID application</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repris par tous les écrans</text>
  <line x1="200" y1="197.0" x2="260" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type d'application</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JDE, LDAP, base, personnalisée…</text>
  <line x1="200" y1="247.0" x2="542" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">paramètres JDE et LDAP</text>
  <line x1="1000" y1="57.0" x2="840" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la connexion : un pool</text>
  <line x1="1000" y1="187.0" x2="900" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sans pool</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">celui de la tâche de collecte</text>
  <line x1="1000" y1="267.0" x2="845" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
</svg>

---

## Objectif de l'écran

Maintenir le registre auquel chaque autre écran fait référence :

- **Déclarer chaque système source.** Une ligne par application — ID, nom, type (`JDE`, `DATABASE`, `LDAP`, `WEBLOGIC`, `CUSTOM`) et technologie de base (`ORACLE`, `MSSQL`, `DB2`, `POSTGRES`…).
- **Désigner sa connexion.** Le *Pool* indique où la collecte lit l'application : un pool de base de données, ou un pool d'annuaire pour une application LDAP. L'adresse, le compte et le mot de passe appartiennent au pool, réglé une seule fois dans **Liberty Next → Administrer → Pools**.
- **Établir l'ID application** qui circule dans tous les autres écrans — le fil reliant utilisateur, rôle, conflit, licence et audit.

---

## Colonnes

La vue par défaut affiche *ID application*, *Nom de l'application*, *Type d'application*, *Type de base* et *Pool*. Une colonne choisie dans une liste apparaît deux fois : son code (*Type d'application (ID)*) et son libellé (*Type d'application*). **Colonnes** affiche les autres.

| Colonne | Ce qu'on y lit |
|---|---|
| **ID application** | Identifiant repris partout ailleurs dans le produit. |
| **Nom de l'application** | Nom lisible. |
| **Type d'application** | Type de système source : `JDE` (JD Edwards), `DATABASE`, `LDAP`, `WEBLOGIC` ou `CUSTOM` (Custom Application). Détermine les étapes de collecte qui s'appliquent. |
| **Type de base** | Technologie de la base : `ORACLE`, `MSSQL`, `DB2`, `POSTGRES`, `MYSQL`, `MARIADB`, `LDAP`, `GENERIC`. |
| **Pool** | Pool par lequel la collecte lit cette application : une même installation atteint ainsi plusieurs environnements. Vide : le pool propre à la tâche de collecte. |
| **Serveur**, **Port**, **Nom de la base**, **Utilisateur**, **DB-Link**, **Connexion directe**, **Code Pays** | Masquées. Détails de connexion conservés sur la ligne, absents de la fiche. Seule une application LDAP sans pool lit encore son serveur, son port, son utilisateur et son mot de passe dans ces colonnes (voir [LDAP](#tab-ldap)). |

Les paramètres JD Edwards et LDAP de chaque application sont aussi des colonnes de cette grille (*JDE SY*, *JDE DTA*… *Contexte LDAP*…) : ils sont décrits avec les onglets de la fenêtre ci-dessous.

---

## Boîte de dialogue

**Ajouter une ligne** déclare une nouvelle application ; un clic sur une ligne l'ouvre. La fenêtre, **Modifier · Paramètres - Applications**, s'ouvre sur l'onglet **Application** et compte huit onglets. **Vues de tâches**, **Suivi d'activité**, **Audit Trail**, **Colonnes auditées** et **Comptes techniques** n'apparaissent que sur une application déjà enregistrée. Le pied de fenêtre porte **Supprimer**, **Dupliquer**, **Annuler** et **Enregistrer**.

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sapd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sapd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sapd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sapd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="230" y="20" width="740" height="436" rx="14" fill="url(#sapd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="250" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Paramètres - Applications</text>
  <line x1="230" y1="60" x2="970" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="284.644" y="82" fill="#e2e8f0" fontSize="9.3" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="248" y1="90" x2="321.288" y2="90" stroke="#4a9eff" strokeWidth="2"/>
  <text x="359.32800000000003" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="441.82400000000007" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues de tâches</text>
  <text x="508.6960000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">LDAP</text>
  <text x="580.7760000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Suivi d'activité</text>
  <text x="671.0840000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit Trail</text>
  <text x="763.9960000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes auditées</text>
  <text x="875.1360000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Comptes techniques</text>
  <line x1="250" y1="91" x2="950" y2="91" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="112" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID APPLICATION</text>
  <rect x="250" y="118" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="133.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1</text>
  <text x="250" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE L'APPLICATION</text>
  <rect x="250" y="164" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="179.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">AD-CORP</text>
  <text x="250" y="204" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE D'APPLICATION</text>
  <rect x="250" y="210" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="225.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">LDAP   LDAP</text>
  <text x="938" y="226" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <text x="250" y="250" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE DE BASE</text>
  <rect x="250" y="256" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="271.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">LDAP   LDAP</text>
  <text x="938" y="272" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <text x="250" y="296" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOL</text>
  <rect x="250" y="302" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="317.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">ad_directory</text>
  <text x="938" y="318" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="250" y="328" width="260" height="74" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="331" width="256" height="21" rx="4" fill="rgba(74,158,255,0.18)"/>
  <text x="262" y="346" fill="#4a9eff" fontSize="9.5" fontFamily="ui-monospace, monospace">ad_directory</text>
  <text x="262" y="369" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">jdedwards</text>
  <text x="262" y="392" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">payroll</text>
  <line x1="230" y1="408" x2="970" y2="408" stroke="#1f2937" strokeWidth="1"/>
  <rect x="867" y="420" width="83" height="22" rx="5" fill="url(#sapd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.5" y="434.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="798" y="420" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="828.5" y="434.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="718" y="420" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="754.0" y="434.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Dupliquer</text>
  <rect x="638" y="420" width="72" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="674.0" y="434.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="20" y="66" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglets</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grilles après enregistrement</text>
  <line x1="210" y1="83.0" x2="246" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
  <rect x="20" y="196" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type d'application</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">LDAP : un annuaire</text>
  <line x1="210" y1="213.0" x2="250" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
  <rect x="20" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liste des pools</text>
  <line x1="210" y1="317.0" x2="250" y2="315" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
  <rect x="990" y="24" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comptes techniques</text>
  <text x="1000" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règles de nommage</text>
  <line x1="990" y1="41.0" x2="928.0080000000002" y2="72" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
  <rect x="990" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool d'annuaire</text>
  <text x="1000" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type LDAP directory</text>
  <line x1="990" y1="317.0" x2="510" y2="343" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
  <rect x="990" y="414" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="429" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1000" y="442" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Supprimer / Dupliquer si enregistrée</text>
  <line x1="990" y1="431.0" x2="950" y2="431" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
</svg>

### Onglet 1 — Application

| Champ | À renseigner |
|---|---|
| **ID application** | Identifiant numérique, saisi à la création de l'application et en lecture seule une fois celle-ci enregistrée. Il reste stable dans tout le produit. |
| **Nom de l'application** | Libellé repris sur chaque écran et chaque export. |
| **Type d'application** | Type de système source, choisi dans une liste (`JDE` — JD Edwards…). Détermine les étapes de collecte qui s'appliquent. |
| **Type de base** | Technologie de la base, choisie dans une liste (`ORACLE` — Oracle…). |
| **Pool** | Connexion de l'application, choisie parmi les pools de l'installation. Un pool de base de données pour une application JD Edwards ou une base ; un pool d'annuaire (type *LDAP directory*) pour une application LDAP. Vide : le pool propre à la tâche de collecte. |
| **Connecté depuis moins de (jours) = utilisateur** | Pour une application JD Edwards dont Object Usage Tracking n'a pas de données : un utilisateur connecté depuis moins de ce nombre de jours compte comme un utilisateur réel — la [revue des licences](../../licensing-review.md) le compte sur les modules que sa sécurité autorise, et le [rapport d'audit des licences](../../reports/audit-licences.md) ne le classe pas parmi les comptes jamais utilisés. Vide : 90 jours. |

Le pool est le seul réglage de connexion de l'application : son adresse, son compte et son mot de passe se règlent sur le pool, dans **Liberty Next → Administrer → Pools** — voir [Pools](../../../framework/connectors.md#pools). Les [rapports](../../reports/audit-licences.md) y lisent aussi le système qu'ils citent (le serveur et le nom de service d'un pool Oracle, la base d'un annuaire) et impriment le nom du pool.

### Onglet 2 — JD Edwards

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

L'onglet s'enregistre avec l'application, **Lecture LOB en mode thick** comprise — y compris sur une application créée sans paramètres JD Edwards : renseigner l'onglet plus tard puis enregistrer l'application les crée.

### Onglet 3 — Vues de tâches

Grille des vues de tâches JDE (les racines de l'arborescence des menus, comme *EnterpriseOne Menus*) : **Tâche ID**, **Nom Tâche** et **Collecter la sécurité (Y/N)**. Seules les vues cochées ici sont parcourues pour construire la sécurité : les droits des écrans *Menus* et *Droits* en partent. **Ajouter une ligne** déclare une autre vue de tâches ; sur une ligne enregistrée, *Tâche ID* est en lecture seule.

### Onglet 4 — LDAP \{#tab-ldap\}

Périmètre LDAP / Active Directory de l'application, lu par la collecte LDAP.

| Champ | À renseigner |
|---|---|
| **Contexte LDAP** | DN de base d'où part la recherche (par exemple `OU=Users,DC=acme,DC=local`). Vide : la base du pool d'annuaire. |
| **Filtre LDAP** | Filtre de recherche LDAP qui restreint les entrées lues. |
| **Exclusion LDAP** | Entrées à écarter. |

L'annuaire lui-même — son serveur, le compte et le mot de passe avec lesquels la collecte s'y connecte — est le **Pool** de l'application (onglet *Application*) : un pool de type *LDAP directory*, créé dans **Liberty Next → Administrer → Pools** (`ldap://`, ou `ldaps://` pour une connexion chiffrée ; voir [Un annuaire LDAP](../../../framework/connectors.md#pool-ldap)). Quand **Contexte LDAP** est vide, la collecte part du DN de base du pool. Une application LDAP sans pool continue de lire le serveur, le port, l'utilisateur et le mot de passe conservés sur sa ligne ; dès qu'un pool est désigné, c'est lui qui s'applique.

Comme l'onglet JD Edwards, l'onglet LDAP d'une application créée sans lui s'enregistre quand il est renseigné plus tard. Les mêmes paramètres ont leur propre écran, [LDAP](./ldap.md).

### Onglet 5 — Suivi d'activité

Grille des règles qui fixent **ce que surveille la collecte d'activité** pour alimenter *Applications → Transactions*. Une ligne par règle ; **Ajouter une ligne** élargit le périmètre, supprimer une ligne le restreint.

| Colonne | À renseigner |
|---|---|
| **ACL Type** | Cible de la règle : `ROLE`, `SCHEMA`, `TABLE` ou `USER`. |
| **ACL Type d'application** | Où le nom est lu : `DATABASE` ou `JDEDWARDS`. |
| **Nom** | Nom du rôle, du schéma, de la table ou de l'utilisateur. |
| **ACL Règle** | `INCLUDE`, `EXCLUDE` ou `AUDIT`. |

*ACL Type*, *ACL Type d'application* et *Nom* identifient la règle : ils sont en lecture seule sur une ligne enregistrée, dont seule *ACL Règle* se modifie.

### Onglet 6 — Audit Trail

Grille qui porte **la connexion utilisée par Nomasx-1 pour lire les archive logs Oracle** de l'application — une ligne — lue par la collecte qui alimente *Base de données → Audit Trail* et *Audit Lookup*.

| Colonne | À renseigner |
|---|---|
| **ID utilisateur** / **Mot de passe** | Compte de base autorisé à lire les vues des archive logs. |
| **Hôte** / **Port** / **Base de données** | Emplacement de cette base (`1521` sur une installation Oracle standard). |
| **Dernier SCN** | *System Change Number* à partir duquel reprend la prochaine extraction. |
| **Dernier horodatage** | Heure de la dernière extraction. |

La ligne appartient à l'application : son *ID application* est en lecture seule une fois enregistrée.

### Onglet 7 — Colonnes auditées

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

### Onglet 8 — Comptes techniques \{#technical-accounts\}

Façon dont l'application nomme ses comptes techniques — utilisateurs batch, comptes d'interface et de service, comptes détenus par l'informatique — pour que l'[audit des licences](../../reports/audit-licences.md) les distingue des personnes. Une règle par ligne ; **Ajouter une ligne** en ajoute une.

<svg viewBox="0 0 1200 362" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sapt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sapt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sapt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sapt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="230" y="20" width="740" height="326" rx="14" fill="url(#sapt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="250" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Paramètres - Applications</text>
  <line x1="230" y1="60" x2="970" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="284.644" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Application</text>
  <text x="359.32800000000003" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="441.82400000000007" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues de tâches</text>
  <text x="508.6960000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">LDAP</text>
  <text x="580.7760000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Suivi d'activité</text>
  <text x="671.0840000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit Trail</text>
  <text x="763.9960000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes auditées</text>
  <text x="875.1360000000001" y="82" fill="#e2e8f0" fontSize="9.3" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Comptes techniques</text>
  <line x1="820.2640000000001" y1="90" x2="930.0080000000002" y2="90" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="250" y1="91" x2="950" y2="91" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="104" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="314.0" y="118.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="386" y="104" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="439.0" y="118.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifier en lot</text>
  <rect x="500" y="104" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="118.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="250" y="140" width="700" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="157.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPARÉ À</text>
  <text x="520" y="157.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÈGLE (&#42; = TOUT TEXTE)</text>
  <rect x="250" y="172" width="700" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Nom du compte</text>
  <text x="520" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BATCH&#42;</text>
  <rect x="250" y="202" width="700" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Nom du compte</text>
  <text x="520" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">&#42;INTERFACE&#42;</text>
  <rect x="250" y="232" width="700" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ID utilisateur</text>
  <text x="520" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">JDE</text>
  <rect x="250" y="262" width="700" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ID utilisateur</text>
  <text x="520" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">SVC_&#42;</text>
  <line x1="230" y1="298" x2="970" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <rect x="867" y="310" width="83" height="22" rx="5" fill="url(#sapt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.5" y="324.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="798" y="310" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="828.5" y="324.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="718" y="310" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="754.0" y="324.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Dupliquer</text>
  <rect x="638" y="310" width="72" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="674.0" y="324.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="20" y="100" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une règle par ligne</text>
  <line x1="210" y1="117.0" x2="250" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapt-arrow)"/>
  <rect x="20" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comparé à</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom du compte ou ID utilisateur</text>
  <line x1="210" y1="207.0" x2="270" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapt-arrow)"/>
  <rect x="990" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Règle</text>
  <text x="1000" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#42; = tout texte, sans casse</text>
  <line x1="990" y1="177.0" x2="560" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapt-arrow)"/>
  <rect x="990" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Audit des licences</text>
  <text x="1000" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règles lues sans indicateurs</text>
  <line x1="990" y1="267.0" x2="950" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapt-arrow)"/>
</svg>

| Colonne | À renseigner |
|---|---|
| **Comparé à** | Ce à quoi la règle est comparée : **Nom du compte** ou **ID utilisateur**. |
| **Règle (\* = tout texte)** | Le nom ou l'identifiant recherché. `*` remplace n'importe quel texte (`BATCH*`, `*INTERFACE*`, `SVC_*`) ; tout autre caractère est lu tel quel. Majuscules et minuscules sont confondues. |

Le rapport retient d'abord l'indicateur *Technique* des [propriétés des utilisateurs](../security/users-properties.md). Tant que l'application n'a aucune propriété utilisateur, il applique ces règles. **Sans indicateur ni règle, aucun compte n'est compté comme technique** : saisir les règles une fois par application, ou renseigner les indicateurs.

---

## Conseils & bonnes pratiques

- **Les ID d'application doivent rester stables.** Quand une application est référencée dans rôles, conflits, licences et piste d'audit, renuméroter l'ID casse l'historique.
- **Choisir un nom parlant.** Le nom apparaît sur chaque export et chaque rapport — des libellés courts et reconnaissables rendent les livrables plus lisibles.
- **Un pool par environnement.** Les identifiants se changent sur le pool, une seule fois, pour toutes les applications et tâches qui l'utilisent. Une connexion en échec d'identifiants est la cause la plus fréquente de collectes obsolètes.
- **Pour une application LDAP, créer un pool d'annuaire** et le choisir ici : le pool accepte aussi `ldaps://` pour une connexion chiffrée.
- **Saisir les règles de comptes techniques avant le premier audit des licences** — sinon les comptes batch et de service sont comptés avec les personnes tant que les propriétés des utilisateurs ne sont pas renseignées.
- **Pour les sources non JDE** (`DATABASE`, `LDAP`, `WEBLOGIC`, `CUSTOM`), vérifier le *Type d'application* : les étapes de collecte en dépendent. La sécurité d'une telle application se collecte par ses propres requêtes : voir [Requêtes personnalisées](./custom-queries.md).
