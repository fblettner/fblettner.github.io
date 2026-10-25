---
title: Rapport d'implémentation
description: "Produire la documentation technique et fonctionnelle d'une instance NomaUBL à partir de sa configuration et de sa base — contexte, architecture, règles de gestion, documents, transformation UBL et correspondances, réglages de plateforme, exploitation, sécurité et référentiels — en PDF ou en Markdown, en français ou en anglais, secrets masqués."
keywords: [NomaUBL, rapport d'implémentation, documentation, documentation technique, documentation fonctionnelle, PDF, Markdown, configuration, correspondance UBL, BT, pré-transformation, XSL, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapport d'implémentation

La carte **Rapport d'implémentation** de la page [Rapports](./overview.md) rédige la documentation de l'instance sur laquelle on est connecté : ce qui est configuré, comment chaque document devient un UBL, quelles règles s'appliquent, qui peut faire quoi. Tout est lu dans les fichiers de configuration et dans la base au moment de la génération : le rapport décrit donc toujours l'instance telle qu'elle fonctionne au moment de la génération, quel que soit le système source (JD Edwards, SAP, NetSuite ou ERP personnalisé).

Usages courants : le dossier de passation d'un projet, la description demandée par un auditeur ou un conseil fiscal, l'état des lieux avant une mise à jour, la référence qu'une équipe de support garde à côté de l'instance de production.

Accès : **Rapports → Rapport d'implémentation**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 492" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rpim-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rpim-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rpim-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rpim-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="452" rx="14" fill="url(#rpim-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rapports</text>
  <rect x="240.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250.0" y="72" width="22" height="22" rx="6" fill="#4ade80" fillOpacity="0.18"/>
  <text x="280.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Intégrité</text>
  <text x="280.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Comparer à JDE, intégrer</text>
  <rect x="422.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432.5" y="72" width="22" height="22" rx="6" fill="#fb923c" fillOpacity="0.18"/>
  <text x="462.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport d'audit</text>
  <text x="462.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Indicateurs d'une période</text>
  <rect x="605.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="#4a9eff" strokeWidth="1.4"/>
  <rect x="615.0" y="72" width="22" height="22" rx="6" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="645.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport d'implémentation</text>
  <text x="645.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Fonctionnement de l'instance</text>
  <rect x="787.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
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
  <rect x="254" y="261" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="271" y="270" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Afficher les clés techniques</text>
  <rect x="502" y="120" width="458" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="516" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Contenu</text>
  <text x="946" y="142" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">9 sections sur 11 · Toutes · Aucune</text>
  <rect x="516.0" y="154.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="162.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,167.5 L530.8,169.8 L534.8,165.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="171.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="171.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Contexte</text>
  <text x="544.0" y="184.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Instance, environnement, connexions</text>
  <rect x="735.0" y="154.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="162.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,167.5 L749.8,169.8 L753.8,165.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="171.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="171.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="763.0" y="184.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Composants et chaîne de traitement</text>
  <rect x="516.0" y="198.3" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="206.33333333333334" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,211.83333333333334 L530.8,214.13333333333335 L534.8,209.33333333333334" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="215.33333333333334" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="215.33333333333334" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Fonctionnement et règles</text>
  <text x="544.0" y="228.33333333333334" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Pages, cycle de vie, tableaux de bord</text>
  <rect x="735.0" y="198.3" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="206.33333333333334" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,211.83333333333334 L749.8,214.13333333333335 L753.8,209.33333333333334" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="215.33333333333334" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="215.33333333333334" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Documents</text>
  <text x="763.0" y="228.33333333333334" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Source, fichiers, options, règles</text>
  <rect x="516.0" y="242.7" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="250.66666666666669" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,256.1666666666667 L530.8,258.4666666666667 L534.8,253.66666666666669" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="259.6666666666667" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="259.6666666666667" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Transformation UBL et règles</text>
  <text x="544.0" y="272.6666666666667" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Défauts, correspondances, paquets</text>
  <rect x="735.0" y="242.7" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="250.66666666666669" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,256.1666666666667 L749.8,258.4666666666667 L753.8,253.66666666666669" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="259.6666666666667" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="259.6666666666667" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Réglages de plateforme</text>
  <text x="763.0" y="272.6666666666667" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Types de document, Explorateur</text>
  <rect x="516.0" y="287.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="295.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,300.5 L530.8,302.8 L534.8,298.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="304.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="304.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Exploitation</text>
  <text x="544.0" y="317.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Tâches, dossiers, notifications</text>
  <rect x="735.0" y="287.0" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="295.0" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,300.5 L749.8,302.8 L753.8,298.0" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="304.0" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="304.0" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité</text>
  <text x="763.0" y="317.0" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Rôles et utilisateurs</text>
  <rect x="516.0" y="331.3" width="211.0" height="38.3" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="339.33333333333337" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,344.83333333333337 L530.8,347.1333333333334 L534.8,342.33333333333337" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="348.33333333333337" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="348.33333333333337" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Référentiels</text>
  <text x="544.0" y="361.33333333333337" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Statuts, listes et tables</text>
  <rect x="735.0" y="331.3" width="211.0" height="38.3" rx="6" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <rect x="745.0" y="339.33333333333337" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="762.0" y="348.33333333333337" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="348.33333333333337" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Annexe : clés de configuration</text>
  <text x="763.0" y="361.33333333333337" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Chaque clé, secrets masqués</text>
  <rect x="516.0" y="375.7" width="211.0" height="38.3" rx="6" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <rect x="526.0" y="383.6666666666667" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="543.0" y="392.6666666666667" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="392.6666666666667" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Annexe : référence API</text>
  <text x="544.0" y="405.6666666666667" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Les opérations de l'API</text>
  <rect x="240" y="432" width="122" height="22" rx="5" fill="url(#rpim-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="301.0" y="446.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Télécharger le PDF</text>
  <rect x="370" y="432" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="403.0" y="446.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Markdown</text>
  <text x="452" y="447" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">9 sections · Français</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cartes des rapports</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une par rapport</text>
  <line x1="200" y1="83.0" x2="240" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpim-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Réglages</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à gauche</text>
  <line x1="200" y1="187.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpim-arrow)"/>
  <rect x="20" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF ou Markdown</text>
  <text x="30" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copie gardée dans reports/</text>
  <line x1="200" y1="445.0" x2="240" y2="443" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpim-arrow)"/>
  <rect x="1000" y="126" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="141" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toutes / Aucune</text>
  <text x="1010" y="154" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nombre de sections</text>
  <line x1="1000" y1="143.0" x2="950" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpim-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tuiles des sections</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par section</text>
  <line x1="1000" y1="257.0" x2="950" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpim-arrow)"/>
</svg>

| Contrôle | Description |
|---|---|
| **Langue** | **Français** ou **English**. Par défaut, la langue de l'interface. Les libellés des réglages, des statuts et des listes suivent la langue choisie. |
| **Libellé de date (page de garde)** | Texte libre imprimé sur la page de garde (par ex. *Mise en production V2*). Vide = date du jour. |
| **Afficher les clés techniques à côté des libellés** | Ajoute la clé de configuration après chaque libellé (`Allow reprocess · allowReprocess`). Utile pour un lecteur technique ; désactivé par défaut. |
| **Contenu** | Une tuile par section avec une ligne sur son contenu ; les neuf premières sont cochées par défaut, les deux annexes sont facultatives en raison de leur longueur. L'en-tête indique le nombre et les liens **Toutes** / **Aucune**. |
| **Télécharger le PDF** / **Markdown** | Produit le fichier et le télécharge. Une copie est conservée dans le dossier `reports` de l'environnement (`<appHome>/<env>/reports/nomaubl-implementation-<date>-<heure>.pdf` ou `.md`). |

---

## Contenu du rapport

| Section | Contenu |
|---|---|
| **Contexte** | Environnement, version du produit et de la norme (XP Z12-014), date de génération, répertoire de l'application, type et schéma de base, sociétés, nombre de documents, auteur, et l'indication d'une éventuelle instance de démonstration. |
| **Architecture** | Les flux activés sur l'instance et leur déclencheur : envoi à la PA, suivi des imports, récupération des statuts, factures reçues, e-reporting, contrôle d'annuaire, lots planifiés, dossiers surveillés, états de la file d'impression JDE, connecteurs par type, authentification. Un flux indiqué *inactif* est configuré sans déclencheur et reste lançable à la demande. Puis la chaîne de traitement : sources, transformation, validation, tables d'archive, sens. |
| **Fonctionnement et règles de gestion** | Le guide fonctionnel : à quoi sert chaque page (dans l'ordre du menu — Synthèse, Exploitation, tableau de bord IT, Statistiques, … Explorateur, Schematrons), le cycle de vie d'une facture, la protection des factures déposées, les règles de modification, de correction de l'acheteur, de renvoi, de validation, de changement de statut et d'envoi par e-mail avec le droit requis pour chacune, les deux modes de retraitement, la récupération des statuts avec les contrôles d'intégrité et d'ordre, le marquage « vue » et les notifications, un aide-mémoire des statuts de plateforme (AFNOR XP Z12-014) et des étapes internes `99xx`, puis **Tableaux de bord, listes et exports** : ventes ou achats, période de comparaison, les cinq étapes, *Exclure les erreurs traitées*, *Hier*, exports avec libellés, vues de liste, et le tableau des [périodes par défaut](../../configuration/default-periods.md) de l'instance (toutes les vues et par vue, avec leur clé). |
| **Documents** | Un tableau de tous les documents (source, sens, type de traitement, modèle PDF), les variables de chemin avec leur valeur sur cette instance, puis une sous-section par document : dossiers, fichiers XSL et RTF, feuille UBL, options de retraitement, renvois vers sa pré-transformation et sa feuille UBL, champs d'indexation et autres réglages. Puis les modèles PDF : documents qui les utilisent, mise en page, logo, couleurs, sections et options. |
| **Transformation UBL et règles** | Valeurs par défaut communes (devise, identifiant de spécification, schémas, valeurs par BT), sociétés émettrices, tables de correspondance et règles (type de transaction, catégorie de TVA, exonération, moyen de paiement, unité…), jeux de règles de validation avec leur version et leur nombre de règles, règles spécifiques, couverture par document, puis une sous-section par pré-transformation (renommages, règles personnalisées, suppressions) et par feuille UBL : profil, correspondances redéfinies et correspondance complète **champ source → BT → chemin UBL**. |
| **Réglages de plateforme** | Réglages e-invoicing (par défaut et par société), e-reporting, annuaire, types de document avec leurs indicateurs d'envoi et de validation. |
| **Exploitation** | Tâches planifiées avec leur déclencheur, dossiers surveillés, règles de notification avec les actions qu'elles déclenchent, actions sur facture, contrôles d'intégrité, connecteurs avec leur hôte et leur type d'authentification, puis les analyses et tableaux de bord de l'[Explorateur](../explorer.md) enregistrés sur l'instance. |
| **Sécurité** | Mode d'authentification et durée de session, rôles (pages, actions, sociétés, fonctions, utilisateurs), utilisateurs avec leur rôle, leur état et un éventuel changement de mot de passe en attente. |
| **Référentiels** | Le catalogue des statuts (libellés, codes PA, groupes), chaque liste de référence et liste personnalisée avec ses entrées, les noms de tables configurés. |
| **Annexe : clés de configuration** | Toutes les propriétés de chaque modèle système, secrets masqués. |
| **Annexe : référence API** | Le document API de l'instance, opération par opération. |

:::info[Les secrets ne sont jamais imprimés]
Mots de passe, jetons, secrets client, clés d'API, URL des connecteurs et clés propres à l'instance apparaissent sous la forme `••••••`. Le rapport peut être remis à un tiers sans retouche ; reste à vérifier que le contenu métier (adresses e-mail des règles de notification, noms des utilisateurs) peut être communiqué.
:::

---

## Mise en page du PDF

Le PDF suit les conventions documentaires du produit : page de garde avec l'environnement, la date, l'auteur et la version ; table des matières cliquable et signets PDF ; en-tête et pied de page *x / y* ; notes de lecture dans des encadrés ; variables de chemin (`APP_HOME`, `ENV`, `PROCESS_HOME`, `TEMPLATE`, `FILE_NAME`) affichées comme pastilles dans les chemins ; renvois *voir § 5.10* entre un document et sa feuille UBL. Le fichier Markdown porte le même contenu, pour un wiki ou un dépôt Git.

---

## Ligne de commande

Le même rapport se produit sans l'interface, pour un état des lieux planifié ou une chaîne d'intégration :

```bash
java -jar nomaubl.jar -report <configFile> [--lang fr|en] [--format md|pdf] [--out <file>] \
     [--date <label>] [--keys] [--sections context,architecture,...]
```

Par défaut : les neuf premières sections, en Markdown, en français. Voir [Ligne de commande](../../management/command-line.md#report).

---

## Accès

Le rapport fait partie de la page *Rapports* : accorder **Rapports** dans le groupe Navigation de la page [Rôles](../../configuration/security/roles.md). La route d'API est `GET /api/reports/implementation`.

---

## Conseils & bonnes pratiques

- **Le produire après chaque mise en production et chaque mise à jour.** La copie conservée dans le dossier `reports` forme l'historique daté de la configuration, à côté des [versions de fichiers](../../management/file-versions.md).
- **Laisser les clés techniques masquées pour un lecteur métier.** Les libellés suffisent à une équipe projet ; les clés servent à ceux qui modifient les fichiers de configuration ou lisent l'API.
- **Réserver les annexes au dossier d'audit.** Les annexes des clés de configuration et de l'API multiplient la longueur du PDF.
