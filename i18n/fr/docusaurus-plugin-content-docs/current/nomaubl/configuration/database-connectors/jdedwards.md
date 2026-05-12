---
title: JD Edwards
description: "Configurer l'accès à la base JD Edwards interrogée par NomaUBL lors de l'extraction des sorties BIP : URL JDBC, identifiants, schéma, noms des tables BIP et gestion de l'enregistrement après extraction."
keywords: [NomaUBL, JD Edwards, JDE, base de données, JDBC, Oracle, BIP, BI Publisher, F95630, F95631, F9563110, BLOB, extraction, XDJOBNBR, RJJOBNBR]
---

# JD Edwards

Cet écran configure l'accès à la **base JD Edwards** que NomaUBL interroge pendant l'extraction des **sorties BIP (BI Publisher)** — BLOB XML de données et PDF générés. Il définit la connexion JDBC, les identifiants, le schéma cible et les trois tables BIP JDE que NomaUBL parcourt pour récupérer le payload d'un job.

:::info[Page spécifique à JD Edwards]
Cette page fait partie des composants **spécifiques à JDE** de NomaUBL. Les autres pages de Configuration sont indépendantes de la source (JDE, SAP, NetSuite, ERP personnalisé) ; celle-ci ne s'applique que quand la source est JD Edwards.
:::

L'éditeur comporte **deux onglets** :

1. **Connection** — URL JDBC, identifiants, gestion de l'enregistrement après extraction.
2. **Tables** — schéma et noms des trois tables BIP JDE.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jde-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jde-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jde-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#jde-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="92" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="286" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Connection</text>
  <rect x="338" y="28" width="64" height="24" rx="4" fill="transparent"/>
  <text x="370" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Tables</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Connexion</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDBC URL</text>
  <rect x="340" y="98" width="440" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="114" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">jdbc:oracle:thin:@dbserver:1521/jde92t</text>

  <text x="240" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR BD</text>
  <rect x="340" y="128" width="220" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="144" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">JDE_RO_USER</text>

  <text x="240" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MOT DE PASSE BD</text>
  <rect x="340" y="158" width="220" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="174" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">••••••••••••</text>

  <text x="240" y="198" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUPPRIMER LE RD</text>
  <rect x="340" y="188" width="180" height="24" rx="5" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="430" y="204" fill="#fb923c" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">N ▾</text>
  <text x="528" y="204" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">supprimer la ligne BIP après extraction</text>

  <line x1="240" y1="226" x2="780" y2="226" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="248" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Tables — aperçu</text>
  <text x="240" y="270" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHEMA</text>
  <rect x="340" y="260" width="180" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="276" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>

  <rect x="240" y="296" width="540" height="22" rx="4" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="311" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Table recherche jobs |  F95630   <text fill="#64748b">— recherche des jobs BIP JDE</text></text>

  <rect x="240" y="320" width="540" height="22" rx="4" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="335" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Table données XML   |  F95631   <text fill="#64748b">— BLOB des données XML</text></text>

  <rect x="240" y="344" width="540" height="22" rx="4" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="359" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Sortie rendue       |  F9563110 <text fill="#64748b">— PDF rendus</text></text>

  <rect x="240" y="380" width="540" height="50" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="252" y="398" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">⚠ PAGE SPÉCIFIQUE À JD EDWARDS</text>
  <text x="252" y="416" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Utilisé uniquement pour l'extraction de sorties BIP directement depuis la base JDE.</text>

  <rect x="20" y="98" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="113" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">JDBC Oracle</text>
  <text x="30" y="126" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">host:port/service_name</text>
  <line x1="200" y1="114" x2="340" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jde-arrow)"/>

  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Supprimer le RD</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Y → supprime la ligne BIP après extraction</text>
  <line x1="200" y1="206" x2="340" y2="202" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jde-arrow)"/>

  <rect x="820" y="318" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="333" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois tables BIP</text>
  <text x="830" y="346" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jobs · BLOB XML · PDF rendus</text>
  <line x1="820" y1="334" x2="780" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jde-arrow)"/>
</svg>

---

## Onglet 1 — Connection

### Connection

| Champ | Description |
|---|---|
| **JDBC URL** | Chaîne de connexion JDBC Oracle vers la base JDE (par ex. `jdbc:oracle:thin:@dbserver:1521/jde92t`). Format : `jdbc:oracle:thin:@host:port/service_name`. |

### Credentials

| Champ | Description |
|---|---|
| **DB User** | Compte de base JDE disposant des droits `SELECT` (et `DELETE` / `UPDATE` selon le réglage Remove RD) sur les tables BIP. |
| **DB Password** | Mot de passe associé au compte de base. |

### BIP Extraction

Action effectuée par NomaUBL sur l'**enregistrement de définition de report** BIP après une extraction réussie.

| Champ | Valeurs | Description |
|---|---|---|
| **Remove RD** | `NO` / `REMOVE` / `UPDATE` | `NO` = l'enregistrement reste en place ; `REMOVE` = suppression de l'enregistrement dans `F9563110` ; `UPDATE` = réécriture du PDF généré dans la colonne BLOB (PDF uniquement). |

Choisir `NO` pendant la validation d'une intégration, passer à `REMOVE` une fois la chaîne fiabilisée (la file reste propre), et n'utiliser `UPDATE` que quand des consommateurs JDE en aval attendent de retrouver le PDF généré dans le BLOB.

---

## Onglet 2 — Tables

### Schema

| Champ | Description |
|---|---|
| **Schema SY** | Schéma *System* JDE où se trouvent les trois tables BIP (par ex. `SY920`). Tous les noms de tables ci-dessous sont résolus dans ce schéma. |

### Table Names

NomaUBL n'a besoin que d'un accès en lecture sur trois tables BIP JDE pour récupérer la sortie complète d'un job. Les valeurs par défaut suivent la nomenclature JDE.

| Champ | Défaut | Rôle |
|---|---|---|
| **F95630 – XMLP Data Output Repository** | `F95630` | Contient les **BLOB XML** (`xdrpdubblb`). Sert de clé de jointure pour la récupération du PDF. Colonne clé du job : `XDJOBNBR`. |
| **F95631 – XMLP Output Repository** | `F95631` | Contient les **BLOB PDF** (`xorpdxpblb`). Joint à `F95630` sur les colonnes GUID de sortie. |
| **F9563110 – Report Definition Job Control** | `F9563110` | Trace la requête de job report BIP. Supprimé par NomaUBL quand **Remove RD = `REMOVE`**. Colonne clé du job : `RJJOBNBR`. |

Le parcours est direct : NomaUBL identifie les jobs candidats dans `F9563110`, récupère le BLOB XML correspondant dans `F95630`, puis joint `F95631` sur le GUID de sortie pour obtenir le PDF.

---

## Conseils & bonnes pratiques

- **Séparer le compte BIP d'un compte métier JDE classique.** Un compte de base dédié simplifie l'audit et la révocation.
- **Accorder le strict minimum de privilèges en cohérence avec Remove RD.** `SELECT` suffit pour `NO` ; ajouter `DELETE` pour `REMOVE` ; ajouter `UPDATE` pour `UPDATE`.
- **Valider l'URL JDBC avec un client SQL avant enregistrement.** Les fautes de frappe dans la chaîne de connexion sont la première cause d'échec d'authentification.
- **Ne surcharger les noms de tables qu'en cas de renommage côté JDE.** Une installation JDE standard utilise toujours `F95630` / `F95631` / `F9563110` ; toute différence indique une personnalisation JDE.
- **Utiliser `Remove RD = REMOVE` en production.** Conserver indéfiniment les jobs traités dans `F9563110` alourdit la file et ralentit les interrogations BIP suivantes.
