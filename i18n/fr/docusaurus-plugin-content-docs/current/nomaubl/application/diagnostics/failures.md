---
title: Anomalies
description: "La vue Anomalies du Diagnostic NomaUBL liste toutes les anomalies sous une même forme — contrôles de validation, rejets PA, échecs d'envoi et d'import, échecs de traitement par fichier, exécutions de tâches en échec — non résolues par défaut, avec une recherche côté serveur et des liens vers la facture, le journal des traitements ou les tâches planifiées."
keywords: [NomaUBL, anomalies, diagnostic, erreurs de validation, rejet PA, échec d'envoi, échec d'import, échec de traitement, échec de tâche, non résolues, dépannage, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Anomalies

La vue **Anomalies** du [Diagnostic](./overview.md) répond à une seule question : *qu'est-ce qui a échoué, et est-ce encore ouvert ?* Elle lit les tables où les échecs sont enregistrés — contrôles de validation, événements du cycle de vie en statut d'erreur, lignes par fichier du journal des traitements, exécutions des tâches — et les présente **dans une seule liste aux mêmes colonnes**, de la plus récente à la plus ancienne.

Accès : **Diagnostic → Anomalies**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 334" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="294" rx="14" fill="url(#fl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Diagnostic · Anomalies</text>
  <rect x="240" y="64" width="66" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="78.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 Hier ▾</text>
  <text x="320" y="79" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <rect x="354" y="66" width="83" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="395.5" y="78.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Validation 30</text>
  <rect x="443" y="66" width="68" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="477.0" y="78.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rejet PA 2</text>
  <rect x="517" y="66" width="98" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="566.0" y="78.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Envoi / import 6</text>
  <rect x="621" y="66" width="78" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="660.0" y="78.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Traitement 3</text>
  <rect x="705" y="66" width="53" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="731.5" y="78.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tâche 1</text>
  <rect x="240" y="96" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="110.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Tous les modèles ▾</text>
  <rect x="370" y="96" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="110.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Société</text>
  <rect x="474" y="102" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M476.5,107.5 L478.8,109.8 L482.8,105" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="491" y="111" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Non résolues seulement</text>
  <rect x="626.2" y="96" width="225.79999999999995" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="636.2" y="110.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Rechercher dans les messages…</text>
  <rect x="868" y="96" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="914.0" y="110.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Actualiser</text>
  <rect x="240" y="132" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUAND</text>
  <text x="300" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="390" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="528" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE</text>
  <text x="610" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOCIÉTÉ</text>
  <text x="670" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="720" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÈGLE</text>
  <text x="786" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="946" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="164" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">07:12</text>
  <rect x="300" y="169.0" width="65" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="332.5" y="180.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Validation</text>
  <text x="390" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">F2026-1203</text>
  <text x="528" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <text x="610" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="670" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">9905</text>
  <text x="720" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-CO-15</text>
  <text x="786" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Total TTC ≠ HT + TVA</text>
  <text x="946" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">↗</text>
  <rect x="240" y="194" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">06:40</text>
  <rect x="300" y="199.0" width="84" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="342.0" y="210.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Envoi / import</text>
  <text x="390" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">F2026-1188</text>
  <text x="528" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <text x="610" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="670" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">9904</text>
  <text x="720" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="786" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Échec d'envoi : HTTP 503</text>
  <text x="946" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">↗</text>
  <rect x="240" y="224" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">05:02</text>
  <rect x="300" y="229.0" width="65" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="332.5" y="240.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Traitement</text>
  <text x="390" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">R42565_XJDE0001_…</text>
  <text x="528" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">credit_notes</text>
  <text x="610" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="670" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="720" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="786" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Échec de transformation</text>
  <text x="946" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">↗</text>
  <rect x="240" y="254" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">04:00</text>
  <rect x="300" y="259.0" width="41" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="320.5" y="270.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tâche</text>
  <text x="390" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">BIP nocturne</text>
  <text x="528" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="610" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="670" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="720" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="786" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Connexion refusée</text>
  <text x="946" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">↗</text>
  <text x="240" y="298" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">42 anomalie(s)</text>
  <rect x="20" y="58" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pastilles de type</text>
  <text x="30" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nombre · décocher pour écarter</text>
  <line x1="200" y1="75.0" x2="360" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fl-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Non résolues seulement</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cochée par défaut</text>
  <line x1="200" y1="157.0" x2="520" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fl-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une seule forme</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">validation, PA, envoi, fichier, tâche</text>
  <line x1="200" y1="257.0" x2="290" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fl-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche côté serveur</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur toutes les pages du résultat</text>
  <line x1="1000" y1="157.0" x2="780" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fl-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Action de la ligne</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">facture · journal · tâches</text>
  <line x1="1000" y1="247.0" x2="954" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fl-arrow)"/>
</svg>

---

## Les types d'anomalie

| Type | Lu dans | La colonne Source affiche |
|---|---|---|
| **Validation** | Les contrôles de validation de la facture (XSD, Schematron, règles spécifiques). | Numéro de facture |
| **Rejet PA** | Les événements du cycle de vie dans un statut du groupe *errorBusiness* — par défaut refusée, en litige, suspendue, approuvée partiellement, erreur de routage. | Numéro de facture |
| **Envoi / import** | Les événements du cycle de vie dans un statut du groupe *errorTech* — par défaut rejetée (`213`), échec d'envoi, échec de validation, échec d'import. | Numéro de facture |
| **Traitement** | Les lignes par fichier du journal des traitements terminées en erreur. | Nom du fichier |
| **Tâche** | Les exécutions en échec d'une [tâche planifiée](../../sync/scheduled-jobs/overview.md). | Nom de la tâche |

Les groupes de statuts viennent du [catalogue des statuts](../../configuration/system/statuses.md) : un statut ajouté à *errorTech* ou *errorBusiness* apparaît ici sans autre réglage.

---

## Colonnes

| Colonne | Description |
|---|---|
| **Quand** | Heure du contrôle ou de l'événement. |
| **Type** | L'un des cinq types ci-dessus. |
| **Source** | Numéro de facture, nom de fichier ou nom de tâche. |
| **Modèle** | Le document auquel l'anomalie se rattache. |
| **Société** | Société de la facture (types liés à une facture). |
| **Statut** | Statut courant de la facture. |
| **Niveau** | Gravité du contrôle ou de l'événement. |
| **Règle** | Identifiant de la règle de validation, s'il y en a un. |
| **Message** | Le message d'erreur. |
| **Résolu** | Affichée quand *Non résolues seulement* est décochée. |
| **Actions** | Ouvrir la fenêtre de la facture, le journal des traitements filtré sur le fichier, ou la page Tâches planifiées. |

---

## Filtres

- **Période** — le [sélecteur de période](../../configuration/default-periods.md#period-picker) commun, sur la [période par défaut](../../configuration/default-periods.md#default-periods) de la vue *Diagnostics*.
- **Type** — une sélection multiple parmi les cinq types ; *Tous les types* quand aucun n'est choisi.
- **Modèle** et **Société** — restreindre à un document ou à une société ; les droits par société de l'utilisateur s'appliquent toujours aux types liés à une facture.
- **Non résolues seulement** — coché par défaut. Masque les anomalies dépassées depuis : la facture a quitté les statuts d'erreur ou le statut de l'événement, ou une exécution réussie a suivi pour le fichier ou la tâche.
- **Rechercher dans les messages (toutes les pages)** — la recherche se fait côté serveur, sur toutes les pages du résultat et pas seulement sur les lignes affichées.

La grille offre les outils habituels de la table de données partagée : tri, choix des colonnes, pagination et export.

---

## Conseils & bonnes pratiques

- **La consulter chaque matin avec Non résolues seulement.** Ce qui reste demande une intervention.
- **Décocher Non résolues seulement pour auditer une période.** Les anomalies résolues montrent la fréquence de retour d'une règle ou d'une panne de plateforme.
- **Suivre l'action de la ligne.** La fenêtre de facture porte la correction (modifier, corriger l'acheteur, renvoyer, retraiter) ; le journal des traitements explique l'échec d'un fichier ; la page Tâches planifiées montre l'historique des exécutions.
