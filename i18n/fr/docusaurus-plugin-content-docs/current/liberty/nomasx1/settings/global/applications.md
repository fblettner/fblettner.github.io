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

Paramètres réservés aux applications JDE. Renseigner les schémas qui localisent les tables de sécurité et les tables maîtres JDE, puis activer les sources de données à collecter et fixer la rétention pour la purge Object Usage Tracking.

| Champ | À renseigner |
|---|---|
| **JDE SY** | Schéma qui contient les tables JDE *System*. |
| **JDE DTA** | Schéma qui contient les tables *Business Data*. |
| **JDE CTL** | Schéma qui contient les tables *Control*. |
| **JDE SVM** | Schéma qui contient les tables *Server Map*. |
| **JDE CO** | Schéma qui contient les tables *Common*. |
| **JDE OL** | Schéma qui contient les tables *Object Librarian*. |
| **F00950** | Schéma qui héberge la table du security workbench. |
| **Menu standard** | Activer pour lire les menus JDE standard lors du scan. |
| **E1 Pages** | Activer pour collecter les E1 Pages. |
| **E1 Composite** | Activer pour collecter les pages composites. |
| **Purge OUT** | Activer pour que Nomasx-1 nettoie automatiquement les anciennes lignes Object Usage Tracking. |
| **Rétention OUT (jours)** | Nombre de jours d'historique à conserver lors de la purge. |

:::tip
L'activation d'Object Usage Tracking enregistre plusieurs milliers de lignes par jour. Une fois les données agrégées par Nomasx-1, une purge automatique maintient la table saine — activer **Purge OUT** et choisir une rétention adaptée au besoin d'audit.
:::

Les valeurs des schémas viennent de l'installation JDE du client — l'administrateur JDE est l'interlocuteur.

### Onglet 4 — LDAP

Périmètre LDAP / Active Directory de l'application. Les valeurs déterminent les entrées AD remontées par le scan LDAP.

| Champ | À renseigner |
|---|---|
| **LDAP Context** | DN de base d'où démarre la recherche (par exemple `OU=Users,DC=corp,DC=local`). |
| **LDAP Filter** | Filtre de recherche LDAP qui restreint les entrées remontées. |
| **LDAP Exclude** | Liste séparée par virgule des entrées à exclure du scan. |

### Onglet 5 — Suivi d'activité

Configure **les objets de base que Nomasx-1 doit surveiller** pour alimenter l'écran *Applications → Transactions*. Grille imbriquée de règles de collecte ; une ligne par règle. Ajouter une ligne pour élargir le périmètre, retirer une ligne pour le restreindre. Masqué à l'ajout — apparaît une fois l'application créée.

| Champ | À renseigner |
|---|---|
| **Type** | Type d'objet visé par la règle (par exemple `TABLE`, `SCHEMA`, `OWNER`). |
| **Sous-type** | Sous-classe à l'intérieur du type — indique au connecteur comment interroger la cible. |
| **Nom** | Nom de la table, du schéma ou du propriétaire concerné. |
| **Règle** | Règle de collecte (filtre de colonne, expression d'inclusion / exclusion, rétention…). |

Chaque ligne s'ouvre dans sa propre boîte de dialogue avec ces quatre champs.

### Onglet 6 — Audit Trail

Configure **la connexion utilisée par Nomasx-1 pour lire les archive logs Oracle** de cette application. Formulaire unique, une ligne par application. Les valeurs sont lues par le connecteur qui rapatrie les données d'audit et alimente les écrans *Base de données → Audit Trail* / *Audit Lookup*. Masqué à l'ajout — apparaît une fois l'application créée.

| Champ | À renseigner |
|---|---|
| **Utilisateur** | Compte base autorisé à lire les vues d'archive logs. |
| **Mot de passe** | Mot de passe du compte. Stocké chiffré. |
| **Hôte** | Nom DNS ou adresse IP de la base hébergeant les archive logs. |
| **Port** | Port base (`1521` sur une installation Oracle standard). |
| **Base** | Service name / SID de la base. |
| **SCN** | *System Change Number* de départ — point de reprise de la prochaine extraction. |
| **Dernier** | Horodatage en lecture seule de la dernière extraction réussie. |

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
