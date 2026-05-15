---
title: Oracle
description: "Propriétés Oracle lues sur chaque application connectée — produit, version, CPU, comptes nommés, options et taille."
keywords: [Nomasx-1, base de données, Oracle, propriétés, NUP, CPU, options, Data Guard, audit]
---

# Oracle

L'écran **Oracle** liste les propriétés de chaque base Oracle utilisée par une application connectée. Une ligne par `(Application, Produit / Instance)`. Les données sont collectées par le connecteur Nomasx-1 via les vues `V$` standard.

C'est l'inventaire requis par un audit de licence Oracle — et l'entrée du rapport de conformité *Licences → Oracle*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="dboracle-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#dboracle-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Base de données · Oracle</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUIT</text>
  <text x="270" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="360" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HÔTE</text>
  <text x="490" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">INSTANCE</text>
  <text x="580" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CPU</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIFS</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TOTAL</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TECH.</text>
  <text x="830" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DG</text>
  <text x="880" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TAILLE GB</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Enterprise Edition</text>
  <text x="270" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="360" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="490" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="580" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="830" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="880" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostic Pack</text>
  <text x="270" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="360" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="490" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="580" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="830" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="880" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <text x="270" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19.21.0</text>
  <text x="360" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">db-prd-jde-01</text>
  <text x="490" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRDJDE</text>
  <text x="580" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">16</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">142</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">218</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="830" y="213" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="880" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 240</text>
</svg>

---

## Objectif de l'écran

Pour chaque base Oracle supportant une application connectée :

- **Inventaire des produits installés.** Édition, packs, options — exactement ce qu'un audit LMS Oracle réclame.
- **Données de dimensionnement.** Nombre de CPU + utilisateurs actifs vs total + comptes techniques + taille de stockage — les entrées du calcul de licence, qu'il soit NUP (named-user plus) ou par processeur.
- **Périmètre Data Guard.** L'indicateur `DG` précise si l'instance participe à une configuration Data Guard — utile pour le dimensionnement de bascule et la question du double comptage.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `ORAP_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Produit** | `ORAP_PRODUCT` — nom du produit / pack / option. | Ce qui est installé (Enterprise Edition, Diagnostic Pack, Advanced Compression…). |
| **Version complète** | `ORAP_FULL_VERSION` — version complète. | Niveau de patch installé. |
| **Version** | `ORAP_VERSION` — version majeure. | Version majeure (19c, 21c…). |
| **Hôte** | `ORAP_HOSTNAME` — serveur. | Serveur hébergeant l'instance. |
| **Instance** | `ORAP_NAME` — nom d'instance. | SID Oracle / nom unique de la base. |
| **Nb instances** | `ORAP_COUNT_INST` — nombre d'instances. | RAC vs mono-instance. |
| **CPU** | `ORAP_CPU` — nombre de cœurs. | Sert au licensing par processeur. |
| **Utilisateurs actifs** | `ORAP_ACTIVE_USERS` — nombre. | Comptes nommés actifs sur la base. |
| **Utilisateurs totaux** | `ORAP_TOTAL_USERS` — nombre. | Comptes nommés au total sur la base. |
| **Utilisateurs techniques** | `ORAP_TECHNICAL_USERS` — nombre dérivé de `USRP_TECHNICAL`. | Comptes marqués comme techniques dans Nomasx-1 — exclus du NUP. |
| **Pack** | `ORAP_PACK` — code pack. Masqué. | Utilisé par le calcul de conformité de licence. |
| **Data Guard** | `ORAP_DG` — booléen. | Indique si l'instance participe à une configuration Data Guard. |
| **Taille GB** | `ORAP_SIZE_GB` — taille totale. | Empreinte de stockage. |

---

## Menu contextuel

Clic droit sur une ligne pour ouvrir le menu.

| Action | Vers où |
|---|---|
| **Afficher les utilisateurs** | Liste des comptes base sur l'instance sélectionnée. |
| **Afficher les options** | Liste détaillée des options Oracle installées sur l'instance. |
| **Afficher les fonctionnalités** | Fonctionnalités détectées via `DBA_FEATURE_USAGE_STATISTICS` sur l'instance. |
| **Afficher les partitions** | Tables et index qui utilisent l'option Partitioning. |

---

## Conseils & bonnes pratiques

- **Filtrer sur *Produit* contenant « Pack »** pour extraire les packs d'administration en usage — le sujet d'audit le plus sensible.
- **Confronter *Utilisateurs actifs* à *Utilisateurs totaux*** — un écart important signale des comptes dormants directement sur la base, distincts des comptes du système source.
- **La colonne *Utilisateurs techniques*** permet de calculer un NUP « humains réels » pour préparer la renégociation.
- **Une configuration *Data Guard*** double l'exigence de licence sauf si le standby est configuré en bascule *passive* — à clarifier avec Oracle.
