---
title: Vues enregistrées
description: "Vues enregistrées NomaUBL : enregistrer l'affichage d'une liste (colonnes, ordre, regroupement, tri, lignes par page, filtres de colonne, filtres avancés, période) sous un nom, ouvrir une liste sur sa propre vue, partager des vues avec tous les utilisateurs et redimensionner les colonnes."
keywords: [NomaUBL, vues enregistrées, vues de liste, vues partagées, vue par défaut, largeur de colonne, redimensionnement, factures, documents, erreurs d'intégration, journal de traitement, e-reporting, JD Edwards, SAP, NetSuite, ERP sur mesure]
---

# Vues enregistrées

Chaque liste de NomaUBL — factures, documents, e-reporting, erreurs d'intégration, journal de traitement, tâches planifiées, promotion, journal du serveur et les autres grilles — porte un **sélecteur de vues** dans sa barre d'outils. Il enregistre l'affichage en cours de la liste sous un nom et le rappelle en un clic. Chaque utilisateur a ses propres vues, conservées en base : les mêmes vues apparaissent depuis n'importe quel navigateur et sur chaque serveur de l'environnement.

**Standard** est la présentation définie par l'administrateur dans [Paramètres › List views](../configuration/list-views.md) ; elle figure toujours en tête.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 406" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sv-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="372" rx="14" fill="url(#sv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Factures</text>
  <rect x="240" y="66" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="80.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="418" y="66" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="448.5" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="487" y="66" width="170" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="572.0" y="80.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Clôture mensuelle ▾</text>
  <circle cx="647" cy="71" r="4" fill="#fb923c"/>
  <rect x="665" y="66" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="695.5" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="734" y="66" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="767.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="808" y="66" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter</text>
  <rect x="240" y="104" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NUMÉRO</text>
  <text x="360" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT</text>
  <text x="540" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE</text>
  <text x="640" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MONTANT</text>
  <text x="740" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="890" y="121.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="136" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="152.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0412</text>
  <text x="360" y="152.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="540" y="152.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">05/10/2026</text>
  <text x="640" y="152.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 189,55</text>
  <rect x="740" y="141.0" width="51" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="765.5" y="152.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Envoyée</text>
  <text x="890" y="152.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="166" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="182.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0413</text>
  <text x="360" y="182.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="540" y="182.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">06/10/2026</text>
  <text x="640" y="182.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">540,00</text>
  <rect x="740" y="171.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="770.0" y="182.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Approuvée</text>
  <text x="890" y="182.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="196" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="212.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0414</text>
  <text x="360" y="212.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="540" y="212.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">06/10/2026</text>
  <text x="640" y="212.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">98,26</text>
  <rect x="740" y="201.0" width="79" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="779.5" y="212.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Échec d'envoi</text>
  <text x="890" y="212.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="226" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="242.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0415</text>
  <text x="360" y="242.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="540" y="242.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">07/10/2026</text>
  <text x="640" y="242.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 310,00</text>
  <rect x="740" y="231.0" width="51" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="765.5" y="242.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Envoyée</text>
  <text x="890" y="242.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="256" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0416</text>
  <text x="360" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="540" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">08/10/2026</text>
  <text x="640" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">75,40</text>
  <rect x="740" y="261.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="770.0" y="272.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Approuvée</text>
  <text x="890" y="272.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="286" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0417</text>
  <text x="360" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="540" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">08/10/2026</text>
  <text x="640" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">812,10</text>
  <rect x="740" y="291.0" width="51" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="765.5" y="302.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Envoyée</text>
  <text x="890" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="316" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0418</text>
  <text x="360" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="540" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">09/10/2026</text>
  <text x="640" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 004,00</text>
  <rect x="740" y="321.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="770.0" y="332.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Approuvée</text>
  <text x="890" y="332.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="346" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="362.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">F2026-0419</text>
  <text x="360" y="362.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="540" y="362.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10/10/2026</text>
  <text x="640" y="362.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">63,90</text>
  <rect x="740" y="351.0" width="51" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="765.5" y="362.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Envoyée</text>
  <text x="890" y="362.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <line x1="880" y1="106" x2="880" y2="376" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="4 3"/>
  <rect x="878" y="110" width="4" height="16" rx="2" fill="#4a9eff"/>
  <rect x="487" y="94" width="250" height="284" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.2"/>
  <text x="499" y="118" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Standard</text>
  <text x="499" y="139" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">MES VUES</text>
  <rect x="491" y="148" width="242" height="20" rx="4" fill="rgba(74,158,255,0.12)"/>
  <text x="499" y="162" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">✓ Clôture mensuelle  ★ 👥</text>
  <text x="499" y="184" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">À corriger</text>
  <text x="499" y="205" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">VUES PARTAGÉES</text>
  <text x="499" y="228" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Service client</text>
  <text x="725" y="228" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">a.martin</text>
  <line x1="495" y1="238" x2="729" y2="238" stroke="#1f2937" strokeWidth="1"/>
  <text x="499" y="258" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="499" y="280" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Enregistrer sous…</text>
  <text x="499" y="302" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Renommer…</text>
  <text x="499" y="324" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Ouvrir la liste sur Standard</text>
  <text x="499" y="346" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Ne plus partager</text>
  <text x="499" y="368" fill="#f87171" fontSize="10" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de vues</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">point orange = modifiée</text>
  <line x1="200" y1="77.0" x2="487" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mes vues</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">★ ouverture · 👥 partagée</text>
  <line x1="200" y1="187.0" x2="499" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vues partagées</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec leur propriétaire</text>
  <line x1="200" y1="267.0" x2="499" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions sur la vue</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur ses propres vues</text>
  <line x1="200" y1="337.0" x2="499" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu Colonnes</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Largeurs par défaut</text>
  <line x1="1000" y1="77.0" x2="774" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="1000" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Glisser pour élargir</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">largeurs enregistrées dans la vue</text>
  <line x1="1000" y1="197.0" x2="880" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Partager avec tous</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">action Partager des vues</text>
  <line x1="1000" y1="347.0" x2="617" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sv-arrow)"/>
</svg>

---

## Contenu d'une vue \{#content\}

| Enregistré dans la vue | Non enregistré |
|---|---|
| Colonnes visibles et leur ordre, largeurs de colonne | Sens, onglets de statut, zone de recherche |
| Regroupement, tri, lignes par page | Libellés, formats et listes de valeurs — définis dans [List views](../configuration/list-views.md) |
| Filtres de colonne (la ligne de filtres s'ouvre quand la vue en contient) | |
| Filtres avancés — factures, documents, erreurs d'intégration, journal de traitement, e-reporting | |
| Période et base de date — factures, documents, erreurs d'intégration, journal de traitement | |

Une période enregistrée en *Aujourd'hui*, *Hier*, *Ce mois-ci*, *Mois dernier*, *Ce trimestre*, *Cette année* ou *12 derniers mois* suit le calendrier : elle est recalculée le jour où la vue s'ouvre. Seule une période *Personnalisé* garde ses dates. Une vue enregistrée sans période laisse la période en cours inchangée.

Une liste ouverte depuis une autre page avec des filtres ou une période donnés — tuile d'un tableau de bord, journal de traitement atteint depuis un fichier — les conserve, quelle que soit la vue d'ouverture.

---

## Menu des vues \{#menu\}

| Élément | Effet |
|---|---|
| **Standard** | Revient à la présentation des Paramètres. |
| **Mes vues** | Les vues de l'utilisateur. ★ signale la vue d'ouverture de la liste, l'icône utilisateurs une vue partagée avec tous. |
| **Vues partagées** | Les vues partagées par les autres utilisateurs, avec le nom de leur propriétaire. |
| **Enregistrer** | Enregistre les modifications dans la vue active (vues personnelles uniquement). Un point orange sur le sélecteur signale une vue modifiée et non enregistrée ; les modifications sont conservées jusqu'à la fermeture de l'onglet. |
| **Enregistrer sous…** | Enregistre l'affichage comme nouvelle vue (nom de 60 caractères au plus). Sur une vue partagée, c'est ainsi qu'un utilisateur en garde sa propre copie. Reprendre le nom d'une de ses vues la remplace. |
| **Renommer…** · **Supprimer** | Vues personnelles uniquement. Après une suppression, la liste revient à Standard. |
| **Ouvrir la liste sur cette vue** / **Ouvrir la liste sur Standard** | Choisit la vue d'ouverture de la liste, parmi ses propres vues. |
| **Partager avec tous les utilisateurs** / **Ne plus partager** | Vues personnelles uniquement, avec l'action *Partager des vues* (voir [Accès](#access)). |

La liste s'ouvre sur la vue choisie auparavant dans la même session du navigateur, à défaut sur la vue marquée ★ de l'utilisateur, à défaut sur Standard. Une vue partagée ne peut pas servir de vue d'ouverture : en enregistrer une copie avec **Enregistrer sous…** et marquer la copie. Seul son propriétaire modifie une vue partagée ; quand il cesse de la partager, les autres reviennent à Standard.

---

## Largeur des colonnes \{#column-widths\}

Faire glisser le bord droit d'un en-tête de colonne élargit ou rétrécit la colonne (60 px au minimum). Dès qu'une largeur a été modifiée, la liste a exactement la largeur de ses colonnes : elle défile horizontalement quand elles dépassent l'écran. **Largeurs par défaut**, en tête du menu **Colonnes**, revient aux largeurs définies dans [List views](../configuration/list-views.md).

Les largeurs sont enregistrées avec la vue. Sous Standard, l'ordre, la visibilité et la largeur des colonnes restent dans le navigateur, comme la présentation d'avant les vues : **Enregistrer sous…** les transforme en vue.

Les résultats de l'Explorateur, les tuiles des tableaux de bord, les fenêtres de détail et le rapport d'intégrité n'ont pas de sélecteur de vues.

---

## Accès \{#access\}

- Enregistrer, renommer et supprimer ses propres vues ne demande aucun droit : tout utilisateur connecté le peut.
- Le partage demande l'action **Partager des vues** (groupe *Listes*) sur la page [Rôles](../configuration/security/roles.md). Un rôle sans liste d'actions la possède ; un rôle à liste d'actions restreinte ne la possède qu'une fois cochée ; un rôle en lecture seule ne la possède jamais.
- Une vue n'élargit jamais ce que voit l'utilisateur : les droits par société et par ligne s'appliquent comme d'habitude.

Les vues sont enregistrées dans la table `F564256`, créée par `nomaubl.sh upgrade <env>` (voir [Mise à jour](../installation/upgrade.md)). Avant la mise à jour, les listes fonctionnent sans le sélecteur.

---

## Conseils & bonnes pratiques

- **Une vue par tâche récurrente.** *Clôture mensuelle*, *À corriger*, *Service client* : chacune rappelle ses colonnes, ses filtres et sa période en un clic.
- **Enregistrer des périodes relatives.** Une vue sur *Ce mois-ci* reste juste chaque mois ; une période personnalisée sert à une analyse ponctuelle.
- **Partager les vues d'une équipe plutôt que les décrire.** Une personne construit la vue et la partage, chaque collègue en garde une copie à ajuster.
- **Garder Standard simple.** C'est la présentation commune ; les besoins personnels vont dans les vues.
