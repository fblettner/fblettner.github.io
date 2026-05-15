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

## Conseils & bonnes pratiques

- **Les ID d'application doivent rester stables.** Dès qu'une application est référencée dans rôles, conflits, licences et piste d'audit, renuméroter l'ID casse l'historique.
- **Choisir un nom parlant.** Le nom d'application apparaît sur chaque export — des libellés courts et reconnaissables rendent les livrables plus lisibles.
- **Maintenir les identifiants à jour.** Un connecteur en échec d'identifiants est la cause la plus fréquente de scans obsolètes.
- **Pour les sources non JDE** (`SAP`, ERP sur mesure), vérifier que la valeur *Type* correspond à ce que les connecteurs Nomasx-1 attendent — les scanners s'embranchent dessus.
