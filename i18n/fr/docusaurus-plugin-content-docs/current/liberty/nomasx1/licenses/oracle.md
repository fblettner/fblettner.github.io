---
title: Oracle
description: "Synthèse licence Oracle — produit, version, CPU et données comptes nommés, restreintes aux applications hébergées sur Oracle."
keywords: [Nomasx-1, licences, Oracle, NUP, CPU, audit Oracle, named users plus]
---

# Oracle

L'écran **Oracle** côté licence reprend l'inventaire *Base de données → Oracle*, restreint aux applications dont la base est Oracle (`APPS_DBTYPE = 'ORACLE'`) et enrichi du nom d'application. Une ligne par `(Application, Produit / Instance)`.

Il s'agit du même jeu de données que la page de propriétés base, mais cadré comme *livrable licence* : ce qu'un auditeur Oracle LMS demandera lors de la revue annuelle.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="loracle-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#loracle-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licences · Oracle</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="130" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUIT</text>
  <text x="290" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HÔTE</text>
  <text x="510" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">INSTANCE</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CPU</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIFS</text>
  <text x="740" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TOTAL</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TECH.</text>
  <text x="870" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TAILLE GB</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Enterprise Edition</text>
  <text x="290" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="510" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="660" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="740" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="800" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="870" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostic Pack</text>
  <text x="290" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="510" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="660" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="740" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="870" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <text x="290" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="510" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="660" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="740" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="800" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="870" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>
</svg>

---

## Objectif de l'écran

Même rôle que *Base de données → Oracle*, cadré pour la revue licence :

- **Coupe par application.** Le connecteur ne remonte que les applications dont la base est Oracle — l'équipe licence n'a généralement pas besoin des autres.
- **Chiffres prêts pour le NUP.** Actifs, Totaux, Techniques — les trois compteurs qui pilotent le calcul named-user plus.
- **Point de départ du dossier d'audit.** Trier sur *Hôte* pour discuter serveur par serveur avec l'auditeur LMS.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant de l'application. | Application Oracle connectée. |
| **Produit** | `ORAP_PRODUCT` — nom du produit / pack. | Ce qui est sous licence (Enterprise Edition, packs, options). |
| **Version complète** | `ORAP_FULL_VERSION` — version complète. | Niveau de patch. |
| **Version** | `ORAP_VERSION` — version majeure. | Version majeure Oracle. |
| **Hôte** | `ORAP_HOSTNAME` — serveur. | Serveur. |
| **Instance** | `ORAP_NAME` — instance. | Instance Oracle / SID. |
| **Nb instances** | `ORAP_COUNT_INST` — nombre d'instances. | RAC vs mono-instance. |
| **CPU** | `ORAP_CPU` — nombre de cœurs. | Entrée du licensing par processeur. |
| **Utilisateurs actifs** | `ORAP_ACTIVE_USERS` — nombre. | Comptes nommés actifs. |
| **Utilisateurs totaux** | `ORAP_TOTAL_USERS` — nombre. | Tous les comptes nommés. |
| **Utilisateurs techniques** | `ORAP_TECHNICAL_USERS` — nombre. | Comptes marqués techniques dans Nomasx-1. |
| **Pack** | `ORAP_PACK` — code pack. Masqué. | Interne — alimente le calcul de conformité. |
| **Taille GB** | `ORAP_SIZE_GB` — taille totale. | Empreinte de stockage. |

---

## Conseils & bonnes pratiques

- **Exporter la grille comme la *fiche Oracle LMS*** — les colonnes ci-dessus correspondent au formulaire de collecte standard des auditeurs.
- **Filtrer sur *Produit* contenant « Pack »** pour faire ressortir les packs lourds en premier. Les lignes les plus simples à challenger pendant l'audit.
- **Une même ligne n'est *pas* dupliquée par les instances Data Guard standby** — Nomasx-1 ne lit qu'une fois. Si l'audit veut compter les standbys, construire le décompte manuellement.
- **Recouper avec *Licences acquises*** pour savoir si un produit apparaissant ici est effectivement souscrit.
