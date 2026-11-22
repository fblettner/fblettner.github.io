---
title: Oracle
description: "Propriétés Oracle lues sur chaque application connectée — produit, version, CPU, comptes nommés, options et taille."
keywords: [Nomasx-1, base de données, Oracle, propriétés, NUP, CPU, options, Data Guard, audit]
---

# Oracle

L'écran **Oracle** liste les propriétés de chaque base Oracle utilisée par une application connectée. Une ligne par `(Application, Produit / Instance)`. Les données sont collectées par le connecteur Nomasx-1 via les vues `V$` standard.

C'est l'inventaire technique de chaque instance Oracle — la source de vérité pour l'analyse côté licence menée sur *Licences → Oracle*.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 386" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ora-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ora-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ora-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ora-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="306" rx="14" fill="url(#ora-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Database - Oracle Properties</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">2 lignes · 12 ms</text>
  <rect x="959" y="84" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="85" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="89" x2="1018" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="112" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="112" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="112" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="112" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="359" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="373" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="459" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT</text>
  <text x="649" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VERSION COMPL…</text>
  <text x="733" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VERSION</text>
  <text x="783" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SERVEUR</text>
  <text x="863" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM</text>
  <text x="969" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace"># INSTAN…</text>
  <text x="1009" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">CPU</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="173" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="184.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Database 19c Enterprise E…</text>
  <text x="649" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">19.0.0.0.0</text>
  <text x="733" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">19</text>
  <text x="783" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dbhost01</text>
  <text x="863" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDEPRD</text>
  <text x="969" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="1009" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">8</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="195" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="206.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="373" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-TEST</text>
  <text x="459" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Database 19c Standard Edi…</text>
  <text x="649" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">19.0.0.0.0</text>
  <text x="733" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">19</text>
  <text x="783" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dbhost02</text>
  <text x="863" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDETST</text>
  <text x="969" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="1009" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="459" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="649" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="733" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="783" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="863" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="969" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="1009" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="459" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="649" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="733" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="783" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="863" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="969" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="1009" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="258" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="272.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="459" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="649" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="733" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="783" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="863" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="969" y="272.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="1009" y="272.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="233" y="304" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="292" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="305.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="305" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–2 sur 2</text>
  <text x="1087" y="305" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="256" y="191.0" width="185" height="98" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="197.0" width="177" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="211.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users</text>
  <text x="431" y="211.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="233.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Options</text>
  <text x="431" y="233.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="255.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Features</text>
  <text x="431" y="255.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="277.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Partitions</text>
  <text x="431" y="277.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant</text>
  <text x="225.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">édition lue dans la base</text>
  <line x1="360.0" y1="342" x2="467" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
  <rect x="515.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Serveur · Nom</text>
  <text x="525.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">où s'exécute l'instance</text>
  <line x1="660.0" y1="342" x2="791" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
  <rect x="815.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif"># Instance · CPU</text>
  <text x="825.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">base des licences processeur</text>
  <line x1="960.0" y1="342" x2="1001" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
  <rect x="12" y="164.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="179.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de la ligne (···)</text>
  <text x="22" y="192.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou clic droit sur la ligne</text>
  <line x1="197" y1="181.0" x2="248" y2="181.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
  <rect x="12" y="272.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="287.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs · options · fonctions · partitions</text>
  <text x="22" y="300.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">quatre accès détaillés</text>
  <line x1="197" y1="289.0" x2="276" y2="289.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs, pack OEM, Data Guard, taille…</text>
  <line x1="1119" y1="134.0" x2="953.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ora-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque base Oracle supportant une application connectée :

- **Inventaire des produits installés.** Édition, packs, options — ce qui est effectivement déployé sur le serveur.
- **Données de dimensionnement.** Nombre de CPU + utilisateurs actifs vs total + comptes techniques + taille de stockage — les entrées du calcul de licence, qu'il soit NUP (named-user plus) ou par processeur.
- **Périmètre Data Guard.** L'indicateur `DG` précise si l'instance participe à une configuration Data Guard — utile pour le dimensionnement de bascule et la question du double comptage.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `ORAP_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Composant** | `ORAP_PRODUCT` — nom du produit / pack / option. | Ce qui est installé (Enterprise Edition, Diagnostic Pack, Advanced Compression…). |
| **Version complète** | `ORAP_FULL_VERSION` — version complète. | Niveau de patch installé. |
| **Version** | `ORAP_VERSION` — version majeure. | Version majeure (19c, 21c…). |
| **Serveur** | `ORAP_HOSTNAME` — serveur. | Serveur hébergeant l'instance. |
| **Nom** | `ORAP_NAME` — nom d'instance. | SID Oracle / nom unique de la base. |
| **# Instance** | `ORAP_COUNT_INST` — nombre d'instances. | RAC vs mono-instance. |
| **CPU** | `ORAP_CPU` — nombre de cœurs. | Sert au licensing par processeur. |
| **# Utilisateurs actifs** | `ORAP_ACTIVE_USERS` — nombre. | Comptes nommés actifs sur la base. |
| **# Utilisateurs déclarés** | `ORAP_TOTAL_USERS` — nombre. | Comptes nommés au total sur la base. |
| **# Utilisateurs Techniques** | `ORAP_TECHNICAL_USERS` — nombre dérivé de `USRP_TECHNICAL`. | Comptes marqués comme techniques dans Nomasx-1 — exclus du NUP. |
| **Pack OEM** | `ORAP_PACK` — code pack. Masqué. | Utilisé par le calcul de conformité de licence. |
| **Data Guard (Y/N)** | `ORAP_DG` — booléen. | Indique si l'instance participe à une configuration Data Guard. |
| **Taille Gb** | `ORAP_SIZE_GB` — taille totale. | Empreinte de stockage. |

---

## Menu contextuel

Le bouton **···** en début de ligne, ou un clic droit sur la ligne, ouvre son menu. Chaque raccourci ouvre l'écran dédié pré-filtré sur la base sélectionnée — les quatre détails qui complètent la photographie technique de l'instance Oracle.

| Action | Ce qui s'affiche |
|---|---|
| **Display Users** | La liste des comptes déclarés sur l'application — pour une application purement Oracle, ce sont les utilisateurs de la base. Colonnes : identifiant, statut, date de création, dernière connexion, dernière utilisation, plus les indicateurs technique, générique et lié. |
| **Display Options** | Les options Oracle collectées sur l'instance. Une ligne par `(composant, paramètre, valeur)` — les paramètres qui activent ou désactivent une option licenciable, rattachés au composant de licence correspondant. |
| **Display Features** | Les fonctionnalités Oracle observées sur l'instance via l'historique d'usage. Une ligne par fonctionnalité avec le composant de licence, la première et la dernière date d'usage. Les dates indiquent si une fonctionnalité a déjà été utilisée et si elle l'est encore aujourd'hui. |
| **Display Partitions** | Les tables et index qui utilisent l'option Partitioning. Une ligne par `(propriétaire, type de segment, nom de segment)` avec la date de création et la date du dernier DDL. Le propriétaire est marqué quand c'est un compte technique, ce qui distingue un objet partitionné porté par un schéma applicatif éditeur d'un objet créé par le métier. |

---

## Conseils & bonnes pratiques

- **Filtrer sur *Produit* contenant « Pack »** pour extraire les packs d'administration en usage — le sujet d'audit le plus sensible.
- **Confronter *Utilisateurs actifs* à *Utilisateurs totaux*** — un écart important signale des comptes dormants directement sur la base, distincts des comptes du système source.
- **La colonne *Utilisateurs techniques*** permet de calculer un NUP « humains réels » pour préparer la renégociation.
- **Une configuration *Data Guard*** double l'exigence de licence sauf si le standby est configuré en bascule *passive* — à clarifier avec Oracle.
