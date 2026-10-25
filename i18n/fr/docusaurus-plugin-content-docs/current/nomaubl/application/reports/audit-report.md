---
title: Rapport d'audit
description: "Auditer la facturation électronique d'une période à partir des tables NomaUBL — synthèse comparée à la période précédente, volumes, situation par statut, reste à traiter, cycle de vie et délais, erreurs et leur traitement, exploitation et contrôles de cohérence — en PDF ou en Markdown, en français ou en anglais."
keywords: [NomaUBL, rapport d'audit, audit facturation électronique, rapport de période, indicateurs, taux de dépôt, validation du premier coup, rejets, refus, reste à traiter, délais, contrôles de cohérence, contrôles d'intégrité, PDF, Markdown, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapport d'audit

La carte **Rapport d'audit** de la page [Rapports](./overview.md) mesure le déroulement de la facturation électronique sur une période : combien de factures ont été traitées, déposées, approuvées, rejetées ou refusées, ce qui attend encore une action, la durée de chaque étape, les erreurs rencontrées et leur traitement. Les chiffres viennent **uniquement des tables NomaUBL** au moment de la génération ; la plateforme n'est pas interrogée.

Le rapport reste court quel que soit le volume — il ne liste aucune facture — et peut donc être transmis tel quel à une direction financière, à un auditeur ou à un comité de pilotage. Il s'applique à tout système source (JD Edwards, SAP, NetSuite ou ERP personnalisé).

Accès : **Rapports → Rapport d'audit**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 492" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rpau-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rpau-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rpau-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rpau-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="452" rx="14" fill="url(#rpau-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rapports</text>
  <rect x="240.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250.0" y="72" width="22" height="22" rx="6" fill="#4ade80" fillOpacity="0.18"/>
  <text x="280.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Intégrité</text>
  <text x="280.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Comparer à JDE, intégrer</text>
  <rect x="422.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="#fb923c" strokeWidth="1.4"/>
  <rect x="432.5" y="72" width="22" height="22" rx="6" fill="#fb923c" fillOpacity="0.18"/>
  <text x="462.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport d'audit</text>
  <text x="462.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Indicateurs d'une période</text>
  <rect x="605.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="615.0" y="72" width="22" height="22" rx="6" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="645.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport d'implémentation</text>
  <text x="645.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Fonctionnement de l'instance</text>
  <rect x="787.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="797.5" y="72" width="22" height="22" rx="6" fill="#8a93b0" fillOpacity="0.18"/>
  <text x="827.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport technique</text>
  <text x="827.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Documentation développeur</text>
  <rect x="240" y="120" width="250" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Réglages</text>
  <text x="254" y="164" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="254" y="172" width="222" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="186.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">📅 Mois dernier · Date d'émission ▾</text>
  <text x="254" y="216" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DIRECTION</text>
  <rect x="254" y="224" width="172" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="255" y="225" width="62" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="286.0" y="238.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Les deux</text>
  <line x1="318" y1="229" x2="318" y2="241" stroke="#334155" strokeWidth="1"/>
  <text x="345.0" y="238.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Émises</text>
  <line x1="372" y1="229" x2="372" y2="241" stroke="#334155" strokeWidth="1"/>
  <text x="399.0" y="238.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Reçues</text>
  <text x="254" y="268" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOCIÉTÉS</text>
  <rect x="254" y="276" width="222" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="290.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">vide : toutes les sociétés visibles</text>
  <text x="254" y="320" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANGUE</text>
  <rect x="254" y="328" width="123" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="255" y="329" width="62" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="286.0" y="342.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Français</text>
  <line x1="318" y1="333" x2="318" y2="345" stroke="#334155" strokeWidth="1"/>
  <text x="347.5" y="342.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">English</text>
  <rect x="502" y="120" width="458" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="516" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Contenu</text>
  <text x="946" y="142" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">8 sections sur 8 · Toutes · Aucune</text>
  <rect x="516.0" y="154.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="162" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,167.5 L530.8,169.8 L534.8,165" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="171" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="171" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse</text>
  <text x="544.0" y="184" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Indicateurs vs période précédente</text>
  <rect x="735.0" y="154.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="162" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,167.5 L749.8,169.8 L753.8,165" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="171" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="171" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Volumes</text>
  <text x="763.0" y="184" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Par activité, société, document…</text>
  <rect x="516.0" y="206.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="214" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,219.5 L530.8,221.8 L534.8,217" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="223" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="223" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Situation par statut</text>
  <text x="544.0" y="236" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Statut courant à la génération</text>
  <rect x="735.0" y="206.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="214" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,219.5 L749.8,221.8 L753.8,217" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="223" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="223" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Reste à traiter</text>
  <text x="763.0" y="236" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Ce qui reste à traiter</text>
  <rect x="516.0" y="258.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="266" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,271.5 L530.8,273.8 L534.8,269" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="275" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="275" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Cycle de vie et délais</text>
  <text x="544.0" y="288" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Étapes et délais</text>
  <rect x="735.0" y="258.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="266" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,271.5 L749.8,273.8 L753.8,269" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="275" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="275" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Erreurs et traitement</text>
  <text x="763.0" y="288" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Constats, rejets, échecs</text>
  <rect x="516.0" y="310.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="318" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,323.5 L530.8,325.8 L534.8,321" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="327" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="327" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Exploitation sur la période</text>
  <text x="544.0" y="340" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Tâches, fichiers, notifications</text>
  <rect x="735.0" y="310.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="318" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,323.5 L749.8,325.8 L753.8,321" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="327" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="327" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Contrôles de cohérence</text>
  <text x="763.0" y="340" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Entre tables, en option JDE</text>
  <rect x="240" y="432" width="122" height="22" rx="5" fill="url(#rpau-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="301.0" y="446.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Télécharger le PDF</text>
  <rect x="370" y="432" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="403.0" y="446.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Markdown</text>
  <rect x="452" y="440" width="200" height="6" rx="3" fill="#1f2937"/><rect x="452" y="440" width="110" height="6" rx="3" fill="#4a9eff"/>
  <text x="662" y="447" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">En cours · 12 s · Cycle de vie et délais</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cartes des rapports</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une par rapport</text>
  <line x1="200" y1="83.0" x2="240" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Réglages</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à gauche</text>
  <line x1="200" y1="187.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="20" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF ou Markdown</text>
  <text x="30" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copie gardée dans reports/</text>
  <line x1="200" y1="445.0" x2="240" y2="443" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="1000" y="126" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="141" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toutes / Aucune</text>
  <text x="1010" y="154" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nombre de sections</text>
  <line x1="1000" y1="143.0" x2="950" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tuiles des sections</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par section</text>
  <line x1="1000" y1="257.0" x2="950" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="20" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de période</text>
  <text x="30" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mois dernier par défaut</text>
  <line x1="200" y1="249.0" x2="254" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="1000" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâche en arrière-plan</text>
  <text x="1010" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'avancement nomme l'étape</text>
  <line x1="1000" y1="445.0" x2="820" y2="443" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
</svg>

La page présente les **Réglages** à gauche, le **Contenu** à droite et la barre d'actions en dessous.

| Contrôle | Description |
|---|---|
| **Période** | Le [sélecteur de période](../../configuration/default-periods.md#period-picker) commun, **Mois dernier** par défaut. Comparée à la période précédente de même nature : un mois au mois précédent, d'autres dates au même nombre de jours juste avant. |
| **Base de date** | Au pied du sélecteur de période : **Date d'émission (BT-2)** *(par défaut)* — une facture appartient à la période par sa date d'émission — ou **Dernière mise à jour**. Statuts et montants sont toujours ceux du jour de génération. |
| **Direction** | **Les deux** *(par défaut)*, **Émises** ou **Reçues**. |
| **Sociétés** | Une sélection multiple des sociétés (la [liste personnalisée](../../configuration/custom-lists.md#ready-made-lists) `list-companies`) ; vide = toutes les sociétés visibles par l'utilisateur connecté. La visibilité par société du rôle s'applique dans tous les cas. |
| **Langue** | **Français** ou **English** ; par défaut, la langue de l'interface. |
| **Contenu** | Une tuile par section avec une ligne sur son contenu, toutes cochées par défaut ; l'en-tête indique le nombre (`8 sections sur 8`) et les liens **Toutes** / **Aucune**. |
| **Exécuter aussi les contrôles d'intégrité SQL avec JDE (plus long)** | Dans la tuile *Contrôles de cohérence*, visible tant qu'elle est cochée. Exécute sur la période les contrôles configurés dans [Rapports d'intégrité](../../configuration/system/integrity-reports.md) et ajoute leur nombre d'écarts. Chaque contrôle interroge le système source. |
| **Télécharger le PDF** / **Markdown** | Lance la génération **en arrière-plan**. Une barre de progression nomme l'étape en cours ; le fichier se télécharge à la fin et une copie est conservée dans `<appHome>/<env>/reports/nomaubl-audit-<date>-<heure>.pdf` ou `.md`. Le reste de l'application reste utilisable pendant ce temps. |

---

## Sections

### Périmètre

Environnement, période et période de comparaison, date de référence, sociétés, direction, date de génération et auteur, version, et les tables lues : en-tête de facture (statut et montants), archive, ventilation de TVA, cycle de vie, contrôles de validation.

### Synthèse

Les chiffres clés de la période, à côté de la période précédente et de l'écart :

| Indicateur | Signification |
|---|---|
| **Factures traitées** | Factures de la période, quel que soit leur statut. |
| **Hors envoi plateforme** | Factures dont le type de flux est réglé pour ne pas être envoyé (B2C, international… selon les [types de document](../../configuration/system/document-types.md)). |
| **Déposées sur la plateforme** | Factures dont le statut courant vient de la plateforme (`200` et suivants). Le **taux de dépôt** se calcule sur les factures **à envoyer**. |
| **Déposées mais non transmises** | `200` avec le motif `NON_TRANSMISE` : le destinataire n'est inscrit auprès d'aucune plateforme ; la facture est à remettre par un autre canal. |
| **Approuvées / complétées / payées**, **Refusées (`210`)**, **Rejetées (`213`)** | Issues de la période. |
| **À corriger et renvoyer** | `213`, `9905`, `9907`. |
| **Réponse à l'acheteur attendue** | `207`, `208`, `210`. |
| **En erreur aujourd'hui**, **En attente de la plateforme (`9906`)**, **Exclues par règle (`9914`)**, **Factures reçues** | États à la date de génération. |
| **Montants HT et TTC déposés** | Totaux BT-109 et BT-112 des factures déposées. |
| **Validées du premier coup** | Part des factures validées sans contrôle bloquant à leur premier traitement, d'après le cycle de vie. |
| **Part en statut terminal** | Parmi les factures à envoyer. |
| **Délais** | Création → dépôt et dépôt → premier statut acheteur, médiane et 90e centile. |
| **Tentatives d'envoi, renvois, taux d'échec d'envoi** | Chaque envoi se termine par un échec (`9904`) ou une prise en compte (`9906`) ; le taux d'échec mesure la disponibilité de la plateforme (HTTP 429, 503…). Les renvois comprennent les relances automatiques. |

Suit une décomposition où chaque niveau tombe juste : hors envoi, à envoyer, déposées (non transmises, en attente du statut suivant, en cours à la plateforme, approuvées, rejetées ou refusées), non déposées (échec de validation, d'envoi ou d'import, pas encore envoyées, autres). Puis les **constats** en clair : factures en erreur non vues, déposées non transmises, à corriger et renvoyer, en attente d'une réponse à l'acheteur, enveloppes de e-reporting en échec, reste à traiter toutes périodes, renvois, retraitements et corrections d'identifiants acheteur de la période.

### Volumes

L'évolution au sein de la période — par jour jusqu'à un mois, par semaine jusqu'à six mois, par mois au-delà — avec les factures, celles à envoyer, déposées et en erreur, et un graphique. Puis par **activité** (nombre, part, période précédente, écart, montants ; taux de dépôt et d'erreur dans un second tableau), par **société**, par **document**, par **type de flux** (avec son indicateur d'envoi) et par **catégorie et taux de TVA** (base et TVA).

### Situation à la date de génération

Le statut courant des factures de la période : code, libellé, groupes du catalogue, nombre, part, montant TTC ; la même lecture par **famille** (terminal, en cours, erreur technique, erreur métier, exclues, autres) avec un graphique en anneau ; puis les points d'attention (en attente de la plateforme depuis plus de 2 jours, déposées non transmises, en erreur et non vues).

### Reste à traiter, toutes périodes

Ce qui attend encore une action **quelle que soit sa date** : factures en erreur ou refusées non vues par le service client, en attente de la plateforme, déposées sans être transmises. Par statut avec le nombre de plus de 30 jours, le nombre déjà vu et le montant HT ; par société ; par ancienneté (30 jours ou moins, 31 à 90, 91 à 180, plus de 180) avec un graphique. La **Min invoice date** des [réglages e-invoicing](../../configuration/system/einvoicing.md) borne ces chiffres : les factures antérieures en sont exclues.

:::info[Ce que signifie « vue »]
Une facture est *vue* dès que le service client l'a marquée traitée dans la fenêtre de facture. Elle sort du reste à traiter même si son statut n'a pas changé (avoir émis hors NomaUBL, facture abandonnée, doublon…).
:::

### Cycle de vie et délais

Les factures de la période qui atteignent chaque étape pour la première fois — créées, validées, échec de validation, envoyées, déposées (premier statut de plateforme), reçues, approuvées, refusées, rejetées, payées — par intervalle avec un graphique ; les délais création → premier envoi, premier envoi → dépôt, création → dépôt, dépôt → premier statut acheteur (médiane et 90e centile, en jours calendaires) ; puis les compteurs d'actions : tentatives et échecs d'envoi, renvois, retraitements (`9912`), corrections d'identifiants acheteur.

### Erreurs et leur traitement

- **Contrôles de validation par règle** : source (CIUS-FR, EXT-CTC-FR, CPRO-B2G, XSD, règles NomaUBL…), règle, niveau, nombre de contrôles et de factures, exemple de message ; un graphique des règles les plus fréquentes et un tableau par source des contrôles bloquants et des avertissements. Les contrôles d'une facture retraitée sont ceux de son dernier traitement.
- **Rejets et refus de la plateforme et de l'acheteur** : statut, code et libellé du motif, événements, factures.
- **Échecs d'envoi et d'import** : les 30 messages les plus fréquents avec leur nombre.
- **Traitement** : factures ayant eu une erreur sur la période, résolues (statut sorti des statuts d'erreur), toujours en erreur mais vues, ouvertes depuis 7 jours ou moins, 8 à 30 jours, plus de 30 jours ; événements par statut ; renvois, retraitements et corrections.

### Exploitation sur la période

Ce que le serveur a fait, indépendamment de la date des factures : **exécutions des tâches planifiées** (exécutions, erreurs, durée moyenne et maximale, dernier résultat), **fichiers traités et factures intégrées** par document avec la période précédente, **notifications du portail** par règle, **enveloppes de e-reporting** par statut. Une enveloppe en échec est signalée : ses opérations ne sont pas déclarées tant qu'elle n'est pas corrigée et redéposée.

### Contrôles de cohérence

Chaque contrôle compte les factures qui ne respectent pas une règle, sur la période et toutes périodes confondues ; `0` signifie conforme.

| Contrôle | Ce qu'il détecte |
|---|---|
| Statut de plateforme sans identifiant de plateforme | L'identifiant manque quand le statut a été posé à la main ou par une récupération de statuts sans confirmation d'import. Non bloquant. |
| Facture envoyée sans UBL archivé | Une facture envoyée dont l'UBL n'est pas conservé. |
| En attente de la plateforme depuis plus de 2 jours | `9906` qui s'éternise. |
| Numéro de facture en double dans une société | Deux factures portant le même numéro. |
| Total TVA (BT-110) ≠ somme de la ventilation (BT-117) | En-tête comparé à la ventilation de TVA enregistrée. |
| Total HT (BT-109) ≠ somme des lignes (BT-131) | En-tête comparé aux lignes enregistrées. |
| Ventilation de TVA avec un montant mais sans taux (BT-119) | La facture est déclarée avec une TVA sans taux. |
| À corriger et renvoyer sans suite | `213`, `9905`, `9907` ni traités ni vus. |
| Réponse à l'acheteur attendue sans suite | `207`, `208`, `210` ni traités ni vus ; un avoir interne est obligatoire pour une facture refusée. |

Avec l'option d'intégrité, suivent les **contrôles d'intégrité SQL avec JDE** et leur nombre d'écarts ; le détail se trouve dans l'onglet [Intégrité](./overview.md#integrite). L'ordre du cycle de vie et les événements de plateforme manquants localement sont couverts par le [contrôle quotidien du cycle de vie](../../sync/scheduled-jobs/lifecycle-checks.md).

---

## Mise en page du PDF

Même présentation que le [rapport d'implémentation](./implementation-report.md) : page de garde avec l'environnement, la période, la date, l'auteur et la version ; table des matières cliquable ; en-tête et pied de page ; notes de lecture encadrées ; graphiques tracés dans le PDF (barres par intervalle et par activité, anneau des familles de statut, étapes par intervalle, règles les plus fréquentes).

---

## Ligne de commande

```bash
java -jar nomaubl.jar -audit <configFile> [--from <yyyy-MM-dd> --to <yyyy-MM-dd>] \
     [--basis issue|update] [--kco a,b] [--direction I|R] [--lang fr|en] \
     [--format md|pdf] [--out <file>] [--date <label>] [--sections a,b,...] [--integrity]
```

Par défaut : le mois précédent, toutes les sections, en Markdown, en français. Voir [Ligne de commande](../../management/command-line.md#audit).

L'API produit le même rapport en arrière-plan : `POST /api/reports/audit/start` renvoie un identifiant de tâche, `GET /api/jobs/{id}` donne l'étape en cours, `GET /api/reports/audit/result/{jobId}` renvoie le fichier une seule fois.

---

## Accès

Le rapport fait partie de la page *Rapports* : accorder **Rapports** sur la page [Rôles](../../configuration/security/roles.md). Les chiffres suivent la visibilité par société de l'utilisateur connecté.

---

## Conseils & bonnes pratiques

- **Le produire le premier jour ouvré du mois** pour le mois précédent : c'est exactement la période par défaut.
- **Lire le reste à traiter avec les constats.** La synthèse porte sur les factures de la période ; le reste à traiter montre ce que les périodes antérieures laissent encore ouvert.
- **Marquer vues les factures traitées hors NomaUBL.** Un avoir émis directement dans l'ERP ne change pas le statut de la facture d'origine ; la marquer vue garde un reste à traiter significatif.
- **Renseigner la Min invoice date après une mise en production.** Les factures de test ou de reprise antérieures sortent alors des chiffres toutes périodes.
- **La durée de chaque étape est écrite dans le journal serveur.** Sur une instance volumineuse, le [journal serveur](../diagnostics/server-log.md) montre la section qui prend du temps.
