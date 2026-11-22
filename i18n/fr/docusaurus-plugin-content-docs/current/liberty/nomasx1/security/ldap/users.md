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

<svg viewBox="0 0 1320 317" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxldu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxldu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxldu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxldu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="277" rx="14" fill="url(#nxldu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP - Users</text>
  <rect x="345.472" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="367.472" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.ldap_users_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">512 lignes · 12,3 ms</text>
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
  <text x="250" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SAMACCOUNTNAME</text>
  <text x="333" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DISTINGUISHEDNAME</text>
  <text x="469" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="550" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USERPRINCIPALNAME</text>
  <text x="675" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPANY</text>
  <text x="740" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CITY</text>
  <text x="783" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DEPARTMENT</text>
  <text x="847" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="916" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DISPLAYNAME</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="333" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">CN=John Doe,OU=Finance</text>
  <text x="469" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="550" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">jdoe@acme.example</text>
  <text x="675" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ACME</text>
  <text x="740" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Lyon</text>
  <text x="783" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="847" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E1001</text>
  <text x="916" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="250" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">asmith</text>
  <text x="333" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">CN=Anna Smith,OU=Sales</text>
  <text x="469" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="550" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">asmith@acme.example</text>
  <text x="675" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ACME</text>
  <text x="740" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Paris</text>
  <text x="783" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SALES</text>
  <text x="847" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E1002</text>
  <text x="916" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">bmartin</text>
  <text x="333" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">CN=Bruno Martin,OU=Ops</text>
  <text x="469" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <text x="550" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">bmartin@acme.example</text>
  <text x="675" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Beta SARL</text>
  <text x="740" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Lille</text>
  <text x="783" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">LOG</text>
  <text x="847" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E1003</text>
  <text x="916" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <text x="240" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="265" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="278.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 512</text>
  <rect x="992" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="265" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="278.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compte d'annuaire</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identifiant Windows (sAMAccountName)</text>
  <line x1="200" y1="227.0" x2="270" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldu-arrow)"/>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">department</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">regroupé dans LDAP › Settings</text>
  <line x1="200" y1="137.0" x2="793" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldu-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">attributs AD côte à côte</text>
  <line x1="1120" y1="137.0" x2="971.0" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldu-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">…et plus à droite</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">responsable, poste, expiration</text>
  <line x1="1120" y1="267.0" x2="1070" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldu-arrow)"/>
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
| **sAMAccountName** | `LDAP_ACCOUNT` — `samAccountName`. | Login Windows. C'est ce que la plupart des systèmes sources utilisent pour rapprocher un compte JDE / SAP / autre de l'identité AD. |
| **distinguishedName** | `LDAP_DN` — `distinguishedName`. | Chemin LDAP complet — utile quand l'annuaire comporte des OU imbriquées et que l'administrateur AD doit retrouver l'entrée. |
| **Nom** | `LDAP_NAME` — `name`. | Premier attribut « nom » de l'entrée — souvent le nom légal complet. |
| **userPrincipalName** | `LDAP_LOGON` — `userPrincipalName`. | Login style fédération (`utilisateur@domaine`). Utilisé dans les scénarios SSO. |
| **Société** | `LDAP_COMPANY` — `company`. | Entité juridique de rattachement — utile quand l'AD couvre plusieurs filiales. |
| **Ville** | `LDAP_CITY` — `l` (locality). | Localisation géographique. |
| **Département** | `LDAP_DEPARTMENT` — `department`. | Clé de regroupement qui pilote la matrice *Utilisateurs par applications*. |
| **description** | `LDAP_DESCRIPTION` — `description`. | Texte libre — porte souvent le matricule RH utilisé pour rapprocher l'entrée AD du compte source. |
| **Nom affiché** | `LDAP_DISPLAY_NAME` — `displayName`. | Nom tel qu'il apparaît dans le carnet d'adresses AD. |
| **mail** | `LDAP_MAIL` — `mail`. | Adresse email, sous forme de lien `mailto:`. |
| **manager** | `LDAP_MANAGER` — `manager`. | DN du responsable hiérarchique — utile pour les flux d'approbation. |
| **Bureau** | `LDAP_OFFICE` — `physicalDeliveryOfficeName`. | Localisation du bureau. |
| **Téléphone** | `LDAP_TELEPHONE` — `telephoneNumber`. | Téléphone fixe. |
| **mobile** | `LDAP_MOBILE` — `mobile`. | Téléphone mobile. |
| **Titre** | `LDAP_TITLE` — `title`. | Fonction. |
| **whenCreated** | `LDAP_CREATION` — `whenCreated`. | Date de création de l'entrée AD. |
| **accountExpires** | `LDAP_EXPIRES` — `accountExpires`. | Date d'expiration planifiée — vide / *Jamais* pour les permanents. |
| **userAccountControl** | `LDAP_NEVER_EXPIRES` — drapeau `userAccountControl`. | Booléen dérivé indiquant que le compte est configuré pour ne jamais expirer. |

Colonnes masquées portées par la ligne : `LDAP_REFRESH` (horodatage du dernier sync), `LDAP_UKID` (identifiant technique de la ligne).

---

## Conseils & bonnes pratiques

- **Trier *accountExpires* en ordre croissant** pour faire remonter les prestataires sur le point de perdre leur accès AD. Recouper avec l'écran *Affectations* — tout compte sur le point d'expirer qui détient encore un rôle dans un système source doit y être également déprovisionné.
- **L'attribut *Description* porte souvent le matricule RH** — quand il est renseigné, il facilite la jointure avec le champ *Matricule* côté source. Des valeurs incohérentes dans ce champ sont la cause habituelle des faux positifs de *Utilisateurs sans AD*.
- **Croiser *Titre* et *Département*** pour repérer les configurations incorrectes (par exemple un comptable rattaché au département IT) avant qu'elles n'impactent la matrice *Utilisateurs par applications*.
- **L'annuaire est lu par l'étape LDAP de la collecte**, activée par la collecte *Everything* — voir [Tâches](../../jobs.md#steps). **Dernière collecte** donne la date de la dernière lecture : une date ancienne signale des données anciennes.
