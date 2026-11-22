---
title: Utilisateurs
description: "Liste des utilisateurs connus de Nomasx-1 sur l'ensemble des applications connectées — identifiant, nom, statut du compte, date de création, dernière connexion, dernière utilisation, dernière mise à jour."
keywords: [Nomasx-1, sécurité, utilisateurs, comptes, statut, dernière connexion, dernière utilisation, audit, JDE, SAP, NetSuite]
---

# Utilisateurs

L'écran **Utilisateurs** est le catalogue central de tous les comptes connus de Nomasx-1 sur **toutes les applications connectées** — JD Edwards EnterpriseOne, SAP, NetSuite ou tout ERP métier branché par sa propre requête. Une ligne par couple `(Application, Utilisateur)` : c'est ici qu'un compte se retrouve, que son statut se vérifie, que sa dernière connexion s'affiche et que la question de son maintien se pose.

La liste est alimentée automatiquement à chaque scan, depuis les tables de sécurité de chaque système source — avec, le cas échéant, une vérification LDAP / Active Directory en regard.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 397" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxusr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxusr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxusr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxusr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="357" rx="14" fill="url(#nxusr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité - Utilisateurs</text>
  <rect x="412.72" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="434.72" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_users_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="100" width="840" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="115.5" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⛉  Filtres avancés</text>
  <text x="240" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1 248 lignes · 9,4 ms</text>
  <rect x="952" y="134" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="953" y="135" width="64" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="985.0" y="147.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableau</text>
  <line x1="1018" y1="139" x2="1018" y2="149" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="147.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Graphique</text>
  <rect x="240" y="162" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="418" y="162" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458.0" y="176.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="648" y="162" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="766" y="162" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="787.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="814" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="842.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="877" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="940" y="162" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="971.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="1008" y="162" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="240" y="194" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="268" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="375" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="458" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <text x="541" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR</text>
  <text x="633" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUT</text>
  <text x="678" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE CRÉATION</text>
  <text x="771" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE CONNEXION</text>
  <text x="869" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DERNIÈRE UTILISATION</text>
  <text x="981" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE MAJ</text>
  <rect x="240" y="220" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="223" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="234.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="234.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="541" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <circle cx="645" cy="231.0" r="3.2" fill="#4ade80"/>
  <text x="678" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="771" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="869" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="981" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="240" y="243" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="246" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="257.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="257.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BATCH01</text>
  <text x="541" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Batch user</text>
  <circle cx="645" cy="254.0" r="3.2" fill="#4ade80"/>
  <text x="678" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2017-06-02</text>
  <text x="771" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <text x="869" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <text x="981" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="240" y="266" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="269" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="280.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="280.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BMARTIN</text>
  <text x="541" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <circle cx="645" cy="277.0" r="3.2" fill="#4ade80"/>
  <text x="678" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2020-09-02</text>
  <text x="771" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2025-12-04</text>
  <text x="869" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2025-11-30</text>
  <text x="981" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="240" y="289" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="292" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="303.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="303.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="541" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="645" cy="300.0" r="3.2" fill="#4ade80"/>
  <text x="678" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2021-01-08</text>
  <text x="771" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-20</text>
  <text x="869" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-19</text>
  <text x="981" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="240" y="312" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="315" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="326.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="326.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">LEGACY01</text>
  <text x="541" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Legacy account</text>
  <circle cx="645" cy="323.0" r="3.2" fill="#f87171"/>
  <text x="678" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2014-06-22</text>
  <text x="771" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2023-11-04</text>
  <text x="869" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2022-08-19</text>
  <text x="981" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <text x="240" y="357" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="345" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="358.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="357" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 1 248</text>
  <rect x="992" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="345" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="358.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="254" y="266" width="170" height="78" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="266" y="287" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Roles</text>
  <text x="414" y="287" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="309" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Rights</text>
  <text x="414" y="309" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="331" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Details</text>
  <text x="414" y="331" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="20" y="92" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Application ID</text>
  <line x1="200" y1="109.0" x2="240" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">⋯ actions de ligne</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou clic droit sur la ligne</text>
  <line x1="200" y1="217.0" x2="268" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu de ligne</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôles · droits · détails</text>
  <line x1="200" y1="317.0" x2="254" y2="325.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Outils de la grille</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vues, filtres, groupes, colonnes</text>
  <line x1="1120" y1="167.0" x2="842.5" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">CSV · Excel (.xlsx)</text>
  <line x1="1120" y1="227.0" x2="1044.0" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="1120" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="1130" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre les propriétés</text>
  <line x1="1120" y1="287.0" x2="780" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="1120" y="322" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pastille de statut</text>
  <text x="1130" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">verte active · rouge désactivé</text>
  <line x1="1120" y1="339.0" x2="645" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque utilisateur connu d'**une application connectée**, répondre en un coup d'œil à quatre questions :

- **Le compte a-t-il encore une raison d'être ?** Un compte sans connexion depuis plusieurs mois sur une application active est le premier à questionner.
- **Le compte est-il actif ou désactivé ?** Le statut *Actif* / *Inactif* reflète l'état dans le système source — un compte *Inactif* peut encore détenir des rôles à passer en revue.
- **Quand le compte a-t-il été créé ?** Permet de rapprocher avec l'arrivée du collaborateur côté RH et d'identifier les comptes créés hors du processus standard.
- **Quelle différence entre connexion et utilisation ?** *Dernière connexion* est la dernière authentification ; *Dernière utilisation* est la dernière transaction réelle enregistrée par le système source. Un compte qui se connecte sans rien utiliser est un signal à creuser.

L'écran est le point d'entrée de la revue d'**hygiène des comptes** que les auditeurs attendent à chaque trimestre, quel que soit l'ERP sous-jacent.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — identifiant numérique de l'application source. | Application concernée par la ligne. Plusieurs lignes pour le même utilisateur signifient qu'il existe sur plusieurs applications. |
| **Utilisateur ID** | `USR_ID` — identifiant technique de connexion. Lié au catalogue des utilisateurs. | Login technique de l'utilisateur tel que connu du système source. |
| **Utilisateur** | `USR_NAME` — nom d'affichage. | Nom lisible de l'utilisateur. |
| **Statut** | État du compte dans le système source. | Pastille verte sur un compte actif, pastille rouge sur un compte désactivé. |
| **Date de création** | `USR_DT_CREATION` — format date. | Date de création du compte dans le système source. |
| **Date de connexion** | `USR_DT_LOGIN` — format date. | Dernière authentification enregistrée par la source. |
| **Dernière utilisation** | `LAST_USAGE` — format date calculé par le connecteur. | Dernière fois où l'utilisateur a réellement utilisé une fonctionnalité — distinct d'une simple connexion. |
| **Date MAJ** | `USR_DT_UPDATE` — format date. | Date du dernier rafraîchissement de la ligne dans la source. |

:::info[Spécifique à JDE]
Sur JD Edwards EnterpriseOne, la *Dernière utilisation* vient de l'historique **Object Usage Tracking** collecté par Nomasx-1. Sur les autres systèmes sources (SAP, NetSuite, ERP métier), la même colonne est alimentée par l'historique d'usage équivalent du système — l'écran reste identique, seule la source change.
:::

La ligne porte aussi les indicateurs technique, générique et lié. Ils ne sont pas affichés ici mais alimentent la fenêtre *Propriétés utilisateurs* et l'écran *Doublons utilisateurs*.

**Filtres avancés**, au-dessus de la grille, restreint la liste à une **Application ID**. La zone de recherche filtre les lignes chargées, et **Vues**, **Filtres**, **Grouper**, **Colonnes** et **Exporter** (CSV ou Excel) fonctionnent comme sur toutes les grilles ; **Graphique** dessine les lignes au lieu de les lister.

---

## Clic sur la ligne et menu contextuel \{#context-menu\}

Un clic sur une ligne ouvre la fenêtre **Modifier · Sécurité - Propriétés des utilisateurs** du compte — voir [plus bas](#edit-dialog). Le bouton **⋯** en début de ligne, ou un clic droit sur la ligne, ouvre le menu de ligne avec trois raccourcis filtrés sur l'utilisateur sélectionné.

| Action | Vers où |
|---|---|
| **Display Roles** | *Affectations* filtré sur le couple `(Application, Utilisateur)` sélectionné. |
| **Display Rights** | *Droits — Utilisateurs* filtré sur l'utilisateur sélectionné. |
| **Display Details** | *Détails utilisateur* — les attributs maîtres portés par le système source pour l'utilisateur : nom et référence dans l'Address Book, pays, société, business unit, langue, courriel et codes catégorie. Sur les applications JDE, les valeurs viennent de l'Address Book et des préférences utilisateur. |

---

## Fenêtre de modification \{#edit-dialog\}

La fenêtre modifie les indicateurs du compte cliqué — le même enregistrement que [Paramètres → Propriétés utilisateurs](../settings/security/users-properties.md).

<svg viewBox="0 0 1320 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxusrd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxusrd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxusrd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxusrd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="320" y="30" width="680" height="360" rx="12" fill="url(#nxusrd-g-card)" stroke="#334155" strokeWidth="1.4"/>
  <text x="340" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Sécurité - Propriétés des utilisateurs</text>
  <line x1="320" y1="72" x2="1000" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <text x="340" y="94" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="340" y="100" width="640" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="115.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1  ERP-PROD</text>
  <text x="970" y="115.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="340" y="140" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR ID</text>
  <rect x="340" y="146" width="640" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="161.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDOE</text>
  <text x="970" y="161.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="340" y="188" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRIVILÈGES (Y/N)</text>
  <rect x="340" y="199" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="357" y="208" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="670.0" y="188" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TECHNIQUE (Y/N)</text>
  <rect x="670.0" y="199" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="687.0" y="208" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="340" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GÉNÉRIQUE (Y/N)</text>
  <rect x="340" y="241" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="357" y="250" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="670.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GÉNÉRIQUE NOMBRE</text>
  <rect x="670.0" y="236" width="310.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="680.0" y="250.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="340" y="272" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIÉ (Y/N)</text>
  <rect x="340" y="283" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M342.5,288.5 L344.8,290.8 L348.8,286" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="357" y="292" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">activé</text>
  <text x="670.0" y="272" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR LIÉ</text>
  <rect x="670.0" y="278" width="310.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="680.0" y="292.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDOE2</text>
  <text x="340" y="314" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RENOMMÉ (Y/N)</text>
  <rect x="340" y="325" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="357" y="334" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="670.0" y="314" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR PRÉCÉDENT</text>
  <rect x="670.0" y="320" width="310.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="680.0" y="334.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <line x1="320" y1="350" x2="1000" y2="350" stroke="#1f2937" strokeWidth="1"/>
  <rect x="903" y="358" width="77" height="22" rx="5" fill="url(#nxusrd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="941.5" y="372.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="828" y="358" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="861.5" y="372.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="743" y="358" width="77" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="781.5" y="372.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <rect x="668" y="358" width="67" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="701.5" y="372.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="80" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="90" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le compte</text>
  <text x="90" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application et utilisateur de la ligne</text>
  <line x1="280" y1="107.0" x2="340" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusrd-arrow)"/>
  <rect x="80" y="190" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="90" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Indicateurs du compte</text>
  <text x="90" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">privilèges, technique, générique</text>
  <line x1="280" y1="207.0" x2="340" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusrd-arrow)"/>
  <rect x="80" y="280" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="90" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lié / renommé</text>
  <text x="90" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">même personne, autre identifiant</text>
  <line x1="280" y1="297.0" x2="340" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusrd-arrow)"/>
  <rect x="1060" y="270" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1070" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateur lié</text>
  <text x="1070" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'autre compte de la personne</text>
  <line x1="1060" y1="287.0" x2="970" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusrd-arrow)"/>
  <rect x="1060" y="340" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1070" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1070" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enregistre les propriétés</text>
  <line x1="1060" y1="357.0" x2="960" y2="369" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusrd-arrow)"/>
</svg>

| Champ | Signification |
|---|---|
| **Application ID**, **Utilisateur ID** | Le compte de la ligne. |
| **Privilèges (Y/N)** | Le compte dispose d'un accès super-utilisateur : il est compté parmi les comptes à privilèges de la [Revue de sécurité](../security-review.md) et des rapports. |
| **Technique (Y/N)** | Compte de traitement par lots ou de service, exclu du décompte des licences. |
| **Générique (Y/N)**, **Générique nombre** | Identifiant partagé par plusieurs personnes, et le nombre de personnes qui l'utilisent. |
| **Lié (Y/N)**, **Utilisateur lié** | Le compte appartient à la même personne qu'un autre identifiant — la paire de doublons est alors déclarée. |
| **Renommé (Y/N)**, **Utilisateur précédent** | Le compte remplace un ancien identifiant de la même personne. |

**Enregistrer** écrit les indicateurs, **Annuler** ferme sans enregistrer. **Dupliquer** et **Supprimer** agissent sur l'enregistrement des propriétés, pas sur le compte du système source.

---

## Conseils & bonnes pratiques

- **Trier sur *Date de connexion* croissante** pour faire remonter les comptes dormants en haut de la liste. Combiner avec un filtre sur le statut *Inactif* pour obtenir la liste courte des candidats à la suppression.
- **Comparer *Date de connexion* et *Dernière utilisation*.** Un compte qui se connecte régulièrement sans avoir lancé une seule transaction depuis des mois est soit un compte technique à étiqueter comme tel, soit un utilisateur réel dont l'accès n'est plus utile.
- **La *Date de création* sert au rapprochement avec l'arrivée des collaborateurs.** Filtrer sur le dernier trimestre et confronter à la feuille des arrivées RH — chaque arrivée doit apparaître, et chaque apparition doit correspondre à une arrivée.
- **Un même utilisateur sur plusieurs applications est normal, plusieurs utilisateurs sous le même nom ne l'est pas.** Dans ce second cas, passer par l'écran *Utilisateurs en doublon* qui l'explicite.
- **Cliquer sur une ligne** ouvre la fenêtre *Propriétés utilisateurs* — là où se maintiennent les indicateurs technique, générique et à privilèges. Les attributs maîtres du système source (pays, société, centre de coût, …) s'affichent par **⋯ → Display Details**.
