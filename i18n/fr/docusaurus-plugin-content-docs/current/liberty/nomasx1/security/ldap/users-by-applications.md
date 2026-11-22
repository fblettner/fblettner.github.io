---
title: Utilisateurs par applications
description: "Croisement des départements LDAP et des applications, avec le compte source et les rôles de chaque utilisateur — la vue que les auditeurs exportent en Excel, un groupe de départements à la fois."
keywords: [Nomasx-1, sécurité, LDAP, département AD, accès application, export Excel, livrable d'audit]
---

# Utilisateurs par applications

L'écran **Utilisateurs par applications** est le croisement qui relie le catalogue **LDAP / Active Directory** de l'entreprise à chaque application connectée, pour les départements AD déclarés dans *Paramètres*. Une ligne par tuple *(Groupe, Application, Département AD, Utilisateur LDAP)*.

C'est la grille que les auditeurs emportent : filtrée sur un *Groupe* ou un département, elle s'exporte telle quelle par **Exporter → Excel (.xlsx)** — ou en CSV.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 317" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxlda-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxlda-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxlda-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxlda-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="277" rx="14" fill="url(#nxlda-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP - Users by application</text>
  <rect x="445.15600000000006" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="467.15600000000006" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.ldap_apps_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">640 lignes · 8,6 ms</text>
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
  <text x="250" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">GROUPE</text>
  <text x="304" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM DE L'APPLICATION</text>
  <text x="416" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="492" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DÉPARTEMENT</text>
  <text x="561" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="630" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ACCOUNTEXPIRES</text>
  <text x="713" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPANY</text>
  <text x="762" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TITLE</text>
  <text x="832" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID (ID)</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="304" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="416" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="492" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="561" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E1001</text>
  <text x="630" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="713" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ACME</text>
  <text x="762" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Accountant</text>
  <text x="832" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="250" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="304" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="416" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Paul Durand</text>
  <text x="492" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN-AR</text>
  <text x="561" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E1004</text>
  <text x="630" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <text x="713" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ACME</text>
  <text x="762" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Clerk</text>
  <text x="832" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SALES</text>
  <text x="304" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="416" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="492" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SALES</text>
  <text x="561" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E1002</text>
  <text x="630" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="713" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ACME</text>
  <text x="762" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Sales rep</text>
  <text x="832" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="240" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="265" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="278.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 640</text>
  <rect x="992" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="265" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="278.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groupe · département</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">issus de LDAP › Settings</text>
  <line x1="200" y1="227.0" x2="270" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxlda-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aucun compte</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">absent de l'application</text>
  <line x1="1120" y1="217.0" x2="842" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxlda-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">CSV ou Excel de la grille filtrée</text>
  <line x1="1120" y1="137.0" x2="1044.0" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxlda-arrow)"/>
  <rect x="1120" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">…et plus à droite</text>
  <text x="1130" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">compte, statut, connexion, rôles</text>
  <line x1="1120" y1="277.0" x2="1070" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxlda-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque tuple *(Groupe, Application, Département AD)* défini dans *Paramètres* :

- **Lister tous les utilisateurs AD du département**, avec leur identité d'entreprise (nom, description, expiration, société, titre).
- **Rapprocher chaque utilisateur AD de son compte source** quand il en existe un — identifiant, statut, date de création, dernière connexion, matricule et liste séparée par virgule des rôles portés.
- **Découper le résultat pour l'export.** Filtrée sur un groupe, un département ou une application, la grille donne en Excel le fichier attendu par les auditeurs.

Si un utilisateur AD n'a pas de compte rapproché sur l'application, les colonnes côté source restent vides sur la ligne — celle-ci part tout de même dans l'export, ce qui permet à l'auditeur de constater que la personne est *dans le périmètre* du département sans pour autant détenir un compte.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Groupe** | `LDAPD_GROUP` — texte. | Regroupement de haut niveau (Finance, Supply, RH, IT, …) déclaré dans *Paramètres*. |
| **Application** | `APPS_NAME` — texte. | Application concernée par la ligne. |
| **Nom AD** | `LDAP_NAME` — texte. | Nom d'affichage de l'utilisateur LDAP. |
| **Département AD** | `LDAPD_DEPARTEMENT` — texte. | Département AD déclaré dans *Paramètres* et rapproché de l'attribut `department` de l'utilisateur. |
| **Description AD** | `LDAP_DESCRIPTION` — texte. | Matricule RH / texte libre utilisé pour le rapprochement avec le compte source. |
| **Expiration AD** | `LDAP_EXPIRES` — date. | Date à laquelle le compte AD est planifié pour expirer. |
| **Société AD** | `LDAP_COMPANY` — texte. | Entité juridique côté AD. |
| **Titre AD** | `LDAP_TITLE` — texte. | Fonction côté AD. |
| **Utilisateur ID** | `USR_ID` — identifiant source. | Compte source rapproché. Vide si l'utilisateur AD n'a pas de compte sur cette application. |
| **Nom** | `USR_NAME` — nom d'affichage côté source. | Nom lisible côté source. |
| **Matricule** | `USR_REGISTRATION` — matricule RH côté source. | Valeur ayant servi au rapprochement. |
| **Statut** | `USR_STATUS` — `01` signifie *Actif*. | État du compte côté source. |
| **Date de connexion** | `USR_DT_LOGIN` — date. | Dernière authentification côté source. |
| **Date de création** | `USR_DT_CREATION` — date. | Date de création du compte côté source. |
| **Rôles** | `RLU_ROLE_ID` — liste séparée par virgule. | Portefeuille effectif côté source, trié alphabétiquement. Vide si le compte ne détient aucun rôle. |

---

## Conseils & bonnes pratiques

- **Filtrer avant d'exporter.** Restreindre la grille à un seul *Groupe* allège le fichier exporté — pratique quand l'audit ne couvre qu'un pôle fonctionnel.
- **Trier par *Groupe* + *Département*** — ou grouper la grille par ces colonnes avec **Grouper** — pour vérifier les lignes avant l'export.
- **Une ligne sans *Utilisateur ID* n'est pas un trou en soi** — elle signifie simplement que l'utilisateur AD n'a pas de compte sur cette application. C'est une appréciation métier ; la ligne reste dans l'export pour que l'auditeur puisse le constater.
- **Un département absent de la grille** est un département non ajouté dans *Paramètres*. L'ajouter dans [LDAP → Settings](./settings.md), puis relancer la collecte.
