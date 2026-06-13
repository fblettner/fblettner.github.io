---
title: Utilisateurs par applications
description: "Croisement des départements LDAP et des applications, avec le compte source et les rôles de chaque utilisateur — vue source de l'export Excel par département."
keywords: [Nomasx-1, sécurité, LDAP, département AD, accès application, export Excel, livrable d'audit]
---

# Utilisateurs par applications

L'écran **Utilisateurs par applications** est le croisement qui relie le catalogue **LDAP / Active Directory** de l'entreprise à chaque application connectée, pour les départements AD déclarés dans *Paramètres*. Une ligne par tuple *(Groupe, Application, Département AD, Utilisateur LDAP)*.

C'est la source de l'export Excel par département attendu par les auditeurs — un fichier par département, une feuille par application à l'intérieur, plus une feuille listant l'ensemble des entrées LDAP. Ouvrir la grille, appliquer les filtres souhaités, déclencher l'export.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lba-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#lba-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · LDAP · Utilisateurs par applications</text>
  <rect x="820" y="50" width="120" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="880" y="65" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">Export Excel</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GROUPE</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM AD</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DÉPARTEMENT</text>
  <text x="590" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL. ID</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLES</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="590" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <rect x="700" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="725" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="800" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR,APPROVER</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Marie Martin</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="590" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MMARTIN</text>
  <rect x="700" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="725" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Pierre Durand</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="590" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="700" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="800" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SUPPLY</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Anna Khan</text>
  <text x="460" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC-OPS</text>
  <text x="590" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AKHAN</text>
  <rect x="700" y="232" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="725" y="244" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="800" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC_PLANNER</text>

  <rect x="60" y="264" width="880" height="48" rx="8" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="72" y="282" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXPORT EXCEL</text>
  <text x="72" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Un fichier par département, une feuille par application à l'intérieur, plus une feuille avec toutes les entrées LDAP en annexe. Filtrer la grille puis exporter — seules les lignes filtrées partent dans le fichier.</text>
</svg>

---

## Objectif de l'écran

Pour chaque tuple *(Groupe, Application, Département AD)* défini dans *Paramètres* :

- **Lister tous les utilisateurs AD du département**, avec leur identité d'entreprise (nom, description, expiration, société, titre).
- **Rapprocher chaque utilisateur AD de son compte source** quand il en existe un — identifiant, statut, date de création, dernière connexion, matricule et liste séparée par virgule des rôles portés.
- **Découper le résultat pour l'export.** La grille alimente l'export Excel attendu par les auditeurs : un fichier par département, une feuille par application à l'intérieur, plus une feuille d'annexe avec l'ensemble du catalogue LDAP.

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
- **Trier par *Groupe* + *Département*** pour lire la grille dans le même ordre que le fichier exporté — vérifier une ligne avant envoi devient immédiat.
- **Une ligne sans *Utilisateur ID* n'est pas un trou en soi** — elle signifie simplement que l'utilisateur AD n'a pas de compte sur cette application. C'est une appréciation métier ; la ligne reste dans l'export pour que l'auditeur puisse le constater.
- **Un département absent de la grille** est un département non ajouté dans *Paramètres*. Ouvrir la page Paramètres, ajouter la ligne, relancer le scan LDAP.
