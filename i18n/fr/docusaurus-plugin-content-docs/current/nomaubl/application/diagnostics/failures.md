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

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '12.5px', overflowX: 'auto'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '12px'}}>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Hier ▾</span>
    <b>Type</b>
    <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>Validation 30</span>
    <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>Rejet PA 2</span>
    <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>Envoi / import 6</span>
    <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>Traitement 3</span>
    <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>Tâche 1</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Tous les modèles ▾</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Société</span>
    <span>☑ Non résolues seulement</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', minWidth: '200px', opacity: 0.6}}>Rechercher dans les messages (toutes les pages)…</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Actualiser</span>
  </div>
  <table style={{width: '100%', borderCollapse: 'collapse'}}>
    <thead><tr style={{textAlign: 'left', opacity: 0.7}}><th>Quand</th><th>Type</th><th>Source</th><th>Modèle</th><th>Société</th><th>Statut</th><th>Niveau</th><th>Règle</th><th>Message</th><th></th></tr></thead>
    <tbody>
      <tr><td>07:12</td><td>Validation</td><td>F2026-1203</td><td>invoices</td><td>00001</td><td>9905</td><td>ERROR</td><td>BR-CO-15</td><td>Total TTC ≠ total HT + TVA</td><td>↗</td></tr>
      <tr><td>06:40</td><td>Envoi / import</td><td>F2026-1188</td><td>invoices</td><td>00001</td><td>9904</td><td>ERROR</td><td>—</td><td>Échec d'envoi : HTTP 503</td><td>↗</td></tr>
      <tr><td>05:02</td><td>Traitement</td><td>R42565_XJDE0001_123457</td><td>credit_notes</td><td>—</td><td>—</td><td>ERROR</td><td>—</td><td>Échec de transformation : élément manquant</td><td>↗</td></tr>
      <tr><td>04:00</td><td>Tâche</td><td>BIP nocturne</td><td>—</td><td>—</td><td>—</td><td>ERROR</td><td>—</td><td>Connexion refusée</td><td>↗</td></tr>
    </tbody>
  </table>
  <div style={{opacity: 0.6, marginTop: '8px'}}>42 anomalie(s)</div>
</div>

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

- **Période** — hier par défaut.
- **Type** — pastilles avec leur nombre ; décocher un type l'écarte.
- **Modèle** et **Société** — restreindre à un document ou à une société ; les droits par société de l'utilisateur s'appliquent toujours aux types liés à une facture.
- **Non résolues seulement** — coché par défaut. Masque les anomalies dépassées depuis : la facture a quitté les statuts d'erreur ou le statut de l'événement, ou une exécution réussie a suivi pour le fichier ou la tâche.
- **Rechercher dans les messages (toutes les pages)** — la recherche se fait côté serveur, sur toutes les pages du résultat et pas seulement sur les lignes affichées.

La grille offre les outils habituels de la table de données partagée : tri, choix des colonnes, pagination et export.

---

## Conseils & bonnes pratiques

- **La consulter chaque matin avec Non résolues seulement.** Ce qui reste demande une intervention.
- **Décocher Non résolues seulement pour auditer une période.** Les anomalies résolues montrent la fréquence de retour d'une règle ou d'une panne de plateforme.
- **Suivre l'action de la ligne.** La fenêtre de facture porte la correction (modifier, corriger l'acheteur, renvoyer, retraiter) ; le journal des traitements explique l'échec d'un fichier ; la page Tâches planifiées montre l'historique des exécutions.
