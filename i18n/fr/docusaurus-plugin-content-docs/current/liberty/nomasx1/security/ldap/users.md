---
title: Utilisateurs LDAP
description: "Catalogue brut des utilisateurs LDAP / Active Directory injecté dans Nomasx-1 — attributs Active Directory côte à côte."
keywords: [Nomasx-1, sécurité, LDAP, Active Directory, utilisateurs, fournisseur d'identité, samAccountName]
---

# Utilisateurs LDAP

L'écran **Utilisateurs LDAP** est le catalogue brut des comptes lus dans l'annuaire **LDAP / Active Directory** de l'entreprise. Une ligne par entrée d'annuaire, avec les attributs Active Directory côte à côte.

Cette liste est la *référence d'identité* sur laquelle Nomasx-1 rapproche les comptes utilisateurs trouvés dans chaque application connectée. Un utilisateur connu du système source mais absent de cette liste se retrouve sur *Utilisateurs sans AD* ; un département présent ici alimente la matrice *Utilisateurs par applications*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ldu-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#ldu-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · LDAP · Utilisateurs</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SAM ACCOUNT</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM AFFICHÉ</text>
  <text x="400" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DÉPARTEMENT</text>
  <text x="560" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UPN</text>
  <text x="760" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EXPIRATION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="400" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="560" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">jdoe@corp.local</text>
  <text x="760" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Jamais</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">mmartin</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Marie Martin</text>
  <text x="400" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RH</text>
  <text x="560" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">mmartin@corp.local</text>
  <text x="760" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Jamais</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ext.acme01</text>
  <text x="200" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Externe Acme 01</text>
  <text x="400" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">EXT</text>
  <text x="560" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ext.acme01@corp.local</text>
  <text x="760" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">2026-06-30</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">svc.batch</text>
  <text x="200" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Compte de service batch</text>
  <text x="400" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">IT-OPS</text>
  <text x="560" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">svc.batch@corp.local</text>
  <text x="760" y="245" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Jamais</text>

  <line x1="60" y1="268" x2="940" y2="268" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="290" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 sur 2 463 entrées d'annuaire · 14 expirent sous 90 jours</text>
</svg>

---

## Objectif de l'écran

L'extraction de l'annuaire est la *référence unique* de l'identité humaine. L'écran répond à :

- **Cette personne existe-t-elle dans l'annuaire d'entreprise ?** Tout compte présent sur une application connectée mais absent ici est soit un compte technique / batch, soit une identité gérée hors AD (compte de service, login historique), soit un compte fantôme — l'écran *Utilisateurs sans AD* les liste explicitement.
- **À quel département appartient la personne ?** L'attribut *Département* pilote la matrice *Utilisateurs par applications* — c'est le levier qui rattache les personnes aux applications auxquelles elles doivent avoir accès.
- **Quand le compte expire-t-il ?** Les prestataires ont en général une date `accountExpires` — trier sur cette colonne fait remonter ceux qui sont sur le point de perdre leur accès AD (et qu'il faut probablement aussi déprovisionner sur chaque application connectée).
- **Quel est le contexte de communication de l'entreprise ?** Email, téléphone, manager — utile quand un constat d'audit impose de joindre rapidement la personne.

---

## Colonnes

| Colonne | Source (attribut AD) | Ce qu'on y lit |
|---|---|---|
| **SAM Account** | `LDAP_ACCOUNT` — `samAccountName`. | Login Windows. C'est ce que la plupart des systèmes sources utilisent pour rapprocher un compte JDE / SAP / autre de l'identité AD. |
| **DN** | `LDAP_DN` — `distinguishedName`. | Chemin LDAP complet — utile quand l'annuaire comporte des OU imbriquées et que l'administrateur AD doit retrouver l'entrée. |
| **Nom** | `LDAP_NAME` — `name`. | Premier attribut « nom » de l'entrée — souvent le nom légal complet. |
| **UPN** | `LDAP_LOGON` — `userPrincipalName`. | Login style fédération (`utilisateur@domaine`). Utilisé dans les scénarios SSO. |
| **Société** | `LDAP_COMPANY` — `company`. | Entité juridique de rattachement — utile quand l'AD couvre plusieurs filiales. |
| **Ville** | `LDAP_CITY` — `l` (locality). | Localisation géographique. |
| **Département** | `LDAP_DEPARTMENT` — `department`. | Clé de regroupement qui pilote la matrice *Utilisateurs par applications*. |
| **Description** | `LDAP_DESCRIPTION` — `description`. | Texte libre — porte souvent le matricule RH utilisé pour rapprocher l'entrée AD du compte source. |
| **Nom affiché** | `LDAP_DISPLAY_NAME` — `displayName`. | Nom tel qu'il apparaît dans le carnet d'adresses AD. |
| **Mail** | `LDAP_MAIL` — `mail`. | Adresse email. |
| **Manager** | `LDAP_MANAGER` — `manager`. | DN du responsable hiérarchique — utile pour les flux d'approbation. |
| **Bureau** | `LDAP_OFFICE` — `physicalDeliveryOfficeName`. | Localisation du bureau. |
| **Téléphone** | `LDAP_TELEPHONE` — `telephoneNumber`. | Téléphone fixe. |
| **Mobile** | `LDAP_MOBILE` — `mobile`. | Téléphone mobile. |
| **Titre** | `LDAP_TITLE` — `title`. | Fonction. |
| **WhenCreated** | `LDAP_CREATION` — `whenCreated`. | Date de création de l'entrée AD. |
| **AccountExpires** | `LDAP_EXPIRES` — `accountExpires`. | Date d'expiration planifiée — vide / *Jamais* pour les permanents. |
| **userAccountControl** | `LDAP_NEVER_EXPIRES` — drapeau `userAccountControl`. | Booléen dérivé indiquant que le compte est configuré pour ne jamais expirer. |

Colonnes masquées portées par la ligne : `LDAP_REFRESH` (horodatage du dernier sync), `LDAP_UKID` (identifiant technique de la ligne).

---

## Conseils & bonnes pratiques

- **Trier *AccountExpires* en ordre croissant** pour faire remonter les prestataires sur le point de perdre leur accès AD. Recouper avec l'écran *Affectations* — tout compte sur le point d'expirer qui détient encore un rôle dans un système source doit y être également déprovisionné.
- **L'attribut *Description* porte souvent le matricule RH** — quand il est renseigné, il facilite la jointure avec le champ *Matricule* côté source. Des valeurs incohérentes dans ce champ sont la cause habituelle des faux positifs de *Utilisateurs sans AD*.
- **Croiser *Titre* et *Département*** pour repérer les configurations incorrectes (par exemple un comptable rattaché au département IT) avant qu'elles n'impactent la matrice *Utilisateurs par applications*.
- **Le scan LDAP suit la planification configurée au niveau du connecteur.** Un *WhenCreated* obsolète sur l'ensemble des lignes signifie en général que le connecteur LDAP n'a pas tourné récemment.
