---
title: Rapport technique
description: "Le rapport technique de NomaUBL — la documentation développeur de la version, produite à partir des analyses du code embarquées à la construction : architecture, modèle de données, flux, référence de configuration, modèle de statuts, matrice d'impact, référence de l'API, ligne de commande, compilation et paquetage, en PDF ou Markdown, en français ou en anglais."
keywords: [NomaUBL, rapport technique, documentation développeur, modèle de données, flux, référence de configuration, modèle de statuts, matrice d'impact, référence API, ligne de commande, compilation, paquetage, PDF, Markdown, -techreport, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapport technique

La carte **Rapport technique** de la page [Rapports](./overview.md) produit la **documentation développeur de la version** : comment NomaUBL est construit, à quoi sert chaque table et chaque clé de configuration, quels flux les utilisent, ce que propose l'API. Il est produit à partir des analyses du code intégrées à l'application à la construction — les mêmes sources que la [référence développeur](../../references/developer.md) — et il est donc **identique sur toutes les instances d'une même version**, quel que soit le système source (JD Edwards, SAP, NetSuite ou un ERP personnalisé).

Il complète les deux autres documents de la page : le [rapport d'implémentation](./implementation-report.md) décrit le paramétrage de *cette* instance, le [rapport d'audit](./audit-report.md) l'activité d'une période.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 492" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rpte-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rpte-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rpte-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rpte-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="452" rx="14" fill="url(#rpte-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rapports</text>
  <rect x="240.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250.0" y="72" width="22" height="22" rx="6" fill="#4ade80" fillOpacity="0.18"/>
  <text x="280.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Intégrité</text>
  <text x="280.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Comparer à JDE, intégrer</text>
  <rect x="422.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432.5" y="72" width="22" height="22" rx="6" fill="#fb923c" fillOpacity="0.18"/>
  <text x="462.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport d'audit</text>
  <text x="462.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Indicateurs d'une période</text>
  <rect x="605.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="615.0" y="72" width="22" height="22" rx="6" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="645.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport d'implémentation</text>
  <text x="645.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Fonctionnement de l'instance</text>
  <rect x="787.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="#8a93b0" strokeWidth="1.4"/>
  <rect x="797.5" y="72" width="22" height="22" rx="6" fill="#8a93b0" fillOpacity="0.18"/>
  <text x="827.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport technique</text>
  <text x="827.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Documentation développeur</text>
  <rect x="240" y="120" width="250" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Réglages</text>
  <text x="254" y="164" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANGUE</text>
  <rect x="254" y="172" width="123" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="255" y="173" width="62" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="286.0" y="186.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Français</text>
  <line x1="318" y1="177" x2="318" y2="189" stroke="#334155" strokeWidth="1"/>
  <text x="347.5" y="186.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">English</text>
  <text x="254" y="216" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ DE DATE (PAGE DE GARDE)</text>
  <rect x="254" y="224" width="222" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="238.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">par défaut : aujourd'hui</text>
  <rect x="502" y="120" width="458" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="516" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Contenu</text>
  <text x="946" y="142" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">11 sections sur 11 · Toutes · Aucune</text>
  <rect x="516.0" y="154.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="162.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,167.5 L530.8,169.8 L534.8,165.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="171.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="171.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Périmètre</text>
  <text x="544.0" y="184.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Version, compilation, sources</text>
  <rect x="735.0" y="154.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="162.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,167.5 L749.8,169.8 L753.8,165.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="171.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="171.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="763.0" y="184.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Composants, tableaux de bord, sécurité</text>
  <rect x="516.0" y="198.3" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="206.33333333333334" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,211.83333333333334 L530.8,214.13333333333335 L534.8,209.33333333333334" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="215.33333333333334" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="215.33333333333334" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Modèle de données</text>
  <text x="544.0" y="228.33333333333334" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Tables et colonnes</text>
  <rect x="735.0" y="198.3" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="206.33333333333334" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,211.83333333333334 L749.8,214.13333333333335 L753.8,209.33333333333334" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="215.33333333333334" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="215.33333333333334" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Flux</text>
  <text x="763.0" y="228.33333333333334" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Flux et points d'appel</text>
  <rect x="516.0" y="242.7" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="250.66666666666669" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,256.1666666666667 L530.8,258.4666666666667 L534.8,253.66666666666669" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="259.6666666666667" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="259.6666666666667" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Référence de configuration</text>
  <text x="544.0" y="272.6666666666667" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Chaque clé et ses lecteurs</text>
  <rect x="735.0" y="242.7" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="250.66666666666669" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,256.1666666666667 L749.8,258.4666666666667 L753.8,253.66666666666669" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="259.6666666666667" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="259.6666666666667" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Modèle de statuts</text>
  <text x="763.0" y="272.6666666666667" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Statuts et groupes</text>
  <rect x="516.0" y="287.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="295.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,300.5 L530.8,302.8 L534.8,298.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="304.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="304.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Matrice d'impact</text>
  <text x="544.0" y="317.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Impact par flux</text>
  <rect x="735.0" y="287.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="295.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,300.5 L749.8,302.8 L753.8,298.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="304.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="304.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Référence de l'API</text>
  <text x="763.0" y="317.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Chaque point d'API et ses droits</text>
  <rect x="516.0" y="331.3" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="339.33333333333337" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,344.83333333333337 L530.8,347.1333333333334 L534.8,342.33333333333337" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="348.33333333333337" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="348.33333333333337" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Ligne de commande</text>
  <text x="544.0" y="361.33333333333337" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Modes et aide intégrée</text>
  <rect x="735.0" y="331.3" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="339.33333333333337" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,344.83333333333337 L749.8,347.1333333333334 L753.8,342.33333333333337" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="348.33333333333337" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="348.33333333333337" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Compilation et paquetage</text>
  <text x="763.0" y="361.33333333333337" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Étapes, artefacts, jar</text>
  <rect x="516.0" y="375.7" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="383.6666666666667" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,389.1666666666667 L530.8,391.4666666666667 L534.8,386.6666666666667" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="392.6666666666667" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="392.6666666666667" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Annexe : références dans le code</text>
  <text x="544.0" y="405.6666666666667" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Références des clés dans le code</text>
  <rect x="240" y="432" width="122" height="22" rx="5" fill="url(#rpte-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="301.0" y="446.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Télécharger le PDF</text>
  <rect x="370" y="432" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="403.0" y="446.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Markdown</text>
  <text x="452" y="447" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">11 sections · Français</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cartes des rapports</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une par rapport</text>
  <line x1="200" y1="83.0" x2="240" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpte-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Réglages</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à gauche</text>
  <line x1="200" y1="187.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpte-arrow)"/>
  <rect x="20" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF ou Markdown</text>
  <text x="30" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copie gardée dans reports/</text>
  <line x1="200" y1="445.0" x2="240" y2="443" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpte-arrow)"/>
  <rect x="1000" y="126" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="141" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toutes / Aucune</text>
  <text x="1010" y="154" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nombre de sections</text>
  <line x1="1000" y1="143.0" x2="950" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpte-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tuiles des sections</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par section</text>
  <line x1="1000" y1="257.0" x2="950" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpte-arrow)"/>
</svg>

---

## Contrôles

| Contrôle | Description |
|---|---|
| **Langue** | **Français** ou **English** ; par défaut, la langue de l'interface. |
| **Libellé de date (page de garde)** | Texte libre imprimé sur la page de garde ; vide = date du jour. |
| **Contenu** | Les onze sections sous forme de tuiles, chacune avec une ligne sur son contenu, toutes cochées par défaut ; l'en-tête indique le nombre et les liens **Toutes** / **Aucune**. |
| **Détailler chaque opération de l'API (description et paramètres)** | Visible quand *Référence de l'API* est cochée. Décochée par défaut : la référence liste alors les opérations avec leur accès seulement. |
| **Inclure les extraits de code en annexe (long)** | Visible quand *Annexe : références dans le code* est cochée. Décochée par défaut. |
| **Télécharger le PDF** / **Markdown** | Produit le fichier et le télécharge (`nomaubl-technical-<date>-<heure>.pdf` ou `.md`). Une copie est conservée dans le dossier `reports` de l'environnement. |

---

## Sections

| Section (identifiant) | Contenu |
|---|---|
| **Périmètre** (`scope`) | La version de NomaUBL, sa date de compilation, l'analyse du code à l'origine du document, la date et l'auteur de la génération, et l'environnement dont les noms de tables sont résolus. |
| **Architecture** (`architecture`) | Composants (interface, serveur, clients de plateforme, rapports), exécution (un dossier et un serveur par environnement), la couche **tableaux de bord et analyses** (`/api/dashboard/synthese`, `overview`, `tech`, `statistics`, l'Explorateur), l'**interface commune** (listes de valeurs, sélecteur de période et son `/api/ui/period-defaults`, étapes des statuts) et sécurité (authentification, sessions). |
| **Modèle de données** (`data`) | Chaque table avec ses colonnes, les clés de configuration, flux et appels qui les utilisent, et le nom retenu dans cette instance quand il diffère. |
| **Flux** (`flows`) | Les documents de flux — traiter un fichier, suivi des imports, récupération des statuts, e-reporting, dossiers surveillés, retraitement — chacun complété des tables, statuts et clés que son code utilise. |
| **Référence de configuration** (`configuration`) | Chaque clé avec son champ de paramétrage, l'endroit où elle se modifie, les flux qui la lisent, ses appels et son état, avec une synthèse des écarts. |
| **Modèle de statuts** (`statuses`) | Statuts des factures et de l'e-reporting : noms, codes, libellés, groupes et flux qui les attribuent. |
| **Matrice d'impact** (`impact`) | Pour chaque flux, les colonnes et clés les plus référencées. |
| **Référence de l'API** (`api`) | Les opérations de l'API avec l'accès que chacune demande ; avec l'option, leur description et leurs paramètres. |
| **Ligne de commande** (`cli`) | Les options, tirées de l'aide intégrée. |
| **Compilation et paquetage** (`build`) | Les étapes de construction, les éléments produits et l'organisation du jar. |
| **Annexe : références dans le code** (`appendix`) | Les références du code qui fondent les sections ; avec l'option, les extraits. |

---

## Ligne de commande et API

```bash
java -jar nomaubl.jar -techreport /opt/nomaubl/demo/config/config.json [--lang fr|en] [--format md|pdf] [--out <fichier>] [--date <libellé>] [--sections a,b,...] [--api-detail] [--snippets]
```

Par défaut : toutes les sections, Markdown, français, fichier `nomaubl-technical-<langue>.md` dans le dossier courant (la ligne de commande ne conserve pas de copie dans `reports`). Voir [Ligne de commande](../../management/command-line.md#techreport).

La route de l'API est `GET /api/reports/technical`, avec les paramètres `lang`, `format`, `date`, `sections`, `apiDetail` et `snippets`.

---

## Accès

Le rapport fait partie de la page *Rapports* : accorder **Rapports** sur la page [Rôles](../../configuration/security/roles.md). La génération demande en outre la fonctionnalité *Settings access*.

---

## Conseils & bonnes pratiques

- **Le produire à chaque mise à jour** et le conserver avec les notes de version : c'est la vue développeur de ce qui a changé.
- **Le remettre à un intégrateur** avec le [rapport d'implémentation](./implementation-report.md) de l'instance : le premier explique le produit, le second son paramétrage.
- **Ne cocher que les sections utiles** pour un document ciblé — modèle de données et référence de configuration pour une question de base ou de réglage, référence de l'API pour une intégration.
