---
title: Applications
description: "Registre de chaque application connectée — identifiant, type, base, hôte et identifiants utilisés par Nomasx-1 pour atteindre le système source."
keywords: [Nomasx-1, paramètres, applications, registre, connexion, JDBC, système source]
---

# Applications

L'écran **Applications** est le registre central des applications auxquelles Nomasx-1 se connecte. Une ligne par application. Chaque ligne porte l'identifiant affiché dans le reste du produit, le type de système source, la base sous-jacente et les détails de connexion (hôte, port, URL JDBC, utilisateur, mot de passe).

C'est le premier écran à renseigner pour amener un nouveau système source, et le dernier à toucher une fois que tout le reste fonctionne.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sapp-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#sapp-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · Global · Applications</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">BASE</text>
  <text x="560" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HÔTE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>
  <text x="340" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ORACLE</text>
  <text x="560" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01.corp.local</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">13</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Test</text>
  <text x="340" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ORACLE</text>
  <text x="560" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-tst-jde-01.corp.local</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SAP Production</text>
  <text x="340" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SAP</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">HANA</text>
  <text x="560" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-sap-01.corp.local</text>
</svg>

---

## Objectif de l'écran

Maintenir le registre auquel chaque autre écran fait référence :

- **Déclarer chaque système source.** Une ligne par application — ID, nom, type (`JDE`, `SAP`, sur mesure…), type de base (`ORACLE`, `HANA`, `MSSQL`, `POSTGRES`…), hôte.
- **Porter les détails de connexion.** Port, base, URL JDBC, utilisateur, mot de passe, indicateurs Direct DB / DB Link sont stockés ici, masqués par défaut. Les valeurs sont lues par les scanners Nomasx-1.
- **Établir l'application ID** qui circule dans tous les autres écrans — le fil reliant utilisateur, rôle, conflit, licence et audit.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **ID** | `APPS_ID` — identifiant numérique. | Identifiant repris partout ailleurs dans le produit. |
| **Nom** | `APPS_NAME` — nom convivial. | Libellé lisible. |
| **Type** | `APPS_TYPE` — type de système source. | `JDE`, `SAP`, sur mesure… Indique au connecteur quel catalogue lire. |
| **Type de base** | `APPS_DBTYPE` — backend. | `ORACLE`, `HANA`, `MSSQL`, `POSTGRES`… |
| **Pays** | `APPS_CTRY_ID` — code pays ISO. | Étiquette pays portée par le connecteur. |
| **Hôte** | `APPS_HOST` — serveur. | Hostname / IP. |
| **Port** | `APPS_PORT` — port. Masqué. | Port base. |
| **Base** | `APPS_DATABASE` — schéma / SID. Masqué. | Identifiant côté base. |
| **Utilisateur / Mot de passe** | `APPS_USER`, `APPS_PASSWORD` — identifiants. Masqués. | Utilisés par Nomasx-1 pour lire la source. |
| **Direct DB / DB Link** | `APPS_DIRECTDB`, `APPS_DBLINK` — indicateurs. Masqués. | Précisent si le connecteur passe par un DB link ou en direct. |
| **JDBC** | `APPS_JDBC` — URL JDBC. Masquée. | Chaîne de connexion utilisée hors DB link. |

Les colonnes d'audit `APPS_AUDIT_USER`, `APPS_AUDIT_DATE` sont conservées sur la ligne.

---

## Boîte de dialogue

Cliquer sur **Ajouter** dans la barre d'outils pour créer une application, ou double-cliquer une ligne pour la modifier. La boîte s'ouvre sur l'onglet **Application**. Les deux onglets en lecture seule *Suivi d'activité* et *Audit Trail* sont masqués à l'ajout — ils n'apparaissent qu'en modification.

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sapp-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="300" rx="14" fill="url(#sapp-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier l'application — JDE Production</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="100" height="28" rx="6" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="110" y="118" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Application</text>
  <rect x="170" y="100" width="100" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="220" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Connexion</text>
  <rect x="280" y="100" width="100" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">JD Edwards</text>
  <rect x="390" y="100" width="100" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="440" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">LDAP</text>
  <rect x="500" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Suivi d'activité</text>
  <rect x="630" y="100" width="100" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="680" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Audit Trail</text>

  <text x="60" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">ID</text>
  <rect x="60" y="166" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>

  <text x="200" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Nom</text>
  <rect x="200" y="166" width="320" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="212" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Production</text>

  <text x="540" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Type</text>
  <rect x="540" y="166" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="552" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE ▾</text>

  <text x="740" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Type de base</text>
  <rect x="740" y="166" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="752" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ORACLE ▾</text>

  <rect x="60" y="216" width="860" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="236" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">CHAMPS REQUIS À L'AJOUT</text>
  <text x="72" y="254" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">L'ID est en lecture seule en modification et obligatoire à l'ajout. Nom, Type et Type de base sont obligatoires dans les deux cas.</text>
  <text x="72" y="270" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Les onglets Suivi d'activité et Audit Trail n'apparaissent qu'après création de la ligne.</text>

  <rect x="780" y="296" width="60" height="28" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="314" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Annuler</text>
  <rect x="848" y="296" width="78" height="28" rx="5" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="887" y="314" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Enregistrer</text>
</svg>

### Onglet 1 — Application

Identité de l'application. L'ID est en lecture seule en modification et obligatoire à l'ajout. Les quatre champs sont obligatoires.

| Champ | À renseigner |
|---|---|
| **ID** | Identifiant numérique. Reste stable dans tout le produit — ne pas le renuméroter une fois l'application en service. |
| **Nom** | Libellé convivial qui apparaît sur tous les exports. |
| **Type** | Type de système source : `JDE`, `SAP`, sur mesure. Indique au connecteur quel catalogue lire. |
| **Type de base** | Technologie sous-jacente : `ORACLE`, `HANA`, `MSSQL`, `POSTGRES`… |

### Onglet 2 — Connexion

Où se trouve la base source et comment Nomasx-1 s'y connecte.

| Champ | À renseigner |
|---|---|
| **Hôte** | Nom DNS ou adresse IP du serveur de base. |
| **Port** | Port base (`1521` pour Oracle, `1433` pour MSSQL…). |
| **Base** | Schéma / SID / nom de service. |
| **Utilisateur** | Compte en lecture utilisé par Nomasx-1 pour scanner la source. |
| **Mot de passe** | Mot de passe du compte. Stocké chiffré par Nomasx-1. |

### Onglet 3 — JD Edwards

Configuration spécifique à JDE. Pertinent uniquement quand *Type* est `JDE` sur l'onglet **Application**. Les six premiers champs nomment les datasources OCM JDE lus par Nomasx-1 pour extraire la sécurité ; les suivants pilotent le comportement.

| Champ | À renseigner |
|---|---|
| **JDE SY** | Nom du datasource JDE *System* (tables de sécurité, OCM). |
| **JDE DTA** | Datasource *Business Data*. |
| **JDE CTL** | Datasource *Control Tables*. |
| **JDE SVM** | Datasource *Server Map*. |
| **JDE CO** | Datasource *Central Objects*. |
| **JDE OL** | Datasource *Object Librarian*. |
| **F00950** | Schéma ou table où est stocké le Security Workbench JDE. |
| **Menu standard** | `Y` quand l'application utilise le menu standard JDE ; `N` pour un menu personnalisé. |
| **E1 Pages** | `Y` pour extraire les E1 Pages de la source. |
| **E1 Composite** | `Y` pour extraire les Composite Applications. |
| **Purge OUT** | `Y` pour que Nomasx-1 purge automatiquement les anciennes lignes Object Usage Tracking. |
| **Rétention OUT (jours)** | Nombre de jours d'historique OUT à conserver lors de la purge. |

### Onglet 4 — LDAP

Périmètre LDAP / Active Directory de l'application. Les valeurs déterminent les entrées AD remontées par le scan LDAP.

| Champ | À renseigner |
|---|---|
| **LDAP Context** | DN de base d'où démarre la recherche (par exemple `OU=Users,DC=corp,DC=local`). |
| **LDAP Filter** | Filtre de recherche LDAP qui restreint les entrées remontées. |
| **LDAP Exclude** | Liste séparée par virgule des entrées à exclure du scan. |

### Onglet 5 — Suivi d'activité

Vue en lecture seule des transactions récentes captées au niveau base sur cette application. Même jeu que l'écran *Base de données → Audit Trail*, filtré sur l'application en cours. Masqué à l'ajout — apparaît une fois la ligne créée.

### Onglet 6 — Audit Trail

Vue en lecture seule de la piste d'audit colonne par colonne pour cette application. Même jeu que *Base de données → Audit Lookup*, filtré sur l'application en cours. Masqué à l'ajout.

---

## Menu contextuel

Clic droit sur une ligne pour ouvrir le menu. Les raccourcis pointent vers les écrans dédiés, pré-filtrés sur l'application sélectionnée.

| Action | Vers où |
|---|---|
| **JD Edwards** | Écran de paramétrage JDE spécifique à l'application. |
| **LDAP** | Écran de périmètre LDAP de l'application. |
| **Suivi d'activité** | *Base de données → Suivi d'activité* filtré sur l'application en cours. |

---

## Conseils & bonnes pratiques

- **Les ID d'application doivent rester stables.** Quand une application est référencée dans rôles, conflits, licences et piste d'audit, renuméroter l'ID casse l'historique.
- **Choisir un nom parlant.** Le nom apparaît sur chaque export — des libellés courts et reconnaissables rendent les livrables plus lisibles.
- **Maintenir les identifiants à jour.** Un connecteur en échec d'identifiants est la cause la plus fréquente de scans obsolètes.
- **Pour les sources non JDE** (`SAP`, ERP sur mesure), vérifier que la valeur *Type* correspond à ce que les connecteurs Nomasx-1 attendent — les scanners s'y embranchent.
