---
title: Diagnostic
description: "La page Diagnostic de NomaUBL réunit erreurs et journaux en quatre vues d'une même page — Erreurs d'intégration, Journal des traitements, Anomalies et Journal serveur — chacune accordée séparément par rôle, les liens des tableaux de bord ouvrant directement la bonne vue."
keywords: [NomaUBL, diagnostic, erreurs d'intégration, journal des traitements, anomalies, journal serveur, erreurs, journaux, dépannage, rôles, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Diagnostic

**Diagnostic** est la page unique pour tout ce qui a échoué et tout ce que le serveur a consigné. Elle regroupe quatre vues, choisies par un sélecteur en haut de page :

| Vue | Question traitée | Page |
|---|---|---|
| **Erreurs d'intégration** | Quelles règles de validation échouent, sur quelles factures — par règle (vue par défaut) ou par événement. | [Erreurs d'intégration](./integration-errors.md) |
| **Journal des traitements** | Ce qu'a fait chaque traitement, fichier par fichier, étape par étape. | [Journal des traitements](./processing-log.md) |
| **Anomalies** | Toutes les anomalies dans une seule liste — validation, rejet PA, envoi et import, traitement, tâche — non résolues par défaut. | [Anomalies](./failures.md) |
| **Journal serveur** | La fin du fichier journal du serveur, avec filtres par niveau et par module. | [Journal serveur](./server-log.md) |

Accès : menu latéral, **Diagnostic**, dans le groupe Navigation.

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{fontWeight: 700, fontSize: '15px'}}>Diagnostic</div>
  <div style={{opacity: 0.7, margin: '4px 0 12px'}}>Les erreurs d'intégration par règle ou par événement, toutes les anomalies dans une seule liste, le journal des traitements et le journal serveur : quatre vues d'une même page.</div>
  <div style={{display: 'inline-flex', border: '1px solid rgba(148,163,184,0.3)', borderRadius: '8px', overflow: 'hidden'}}>
    <span style={{padding: '6px 14px', background: 'rgba(74,158,255,0.12)', color: '#4a9eff', fontWeight: 600}}>Erreurs d'intégration</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Journal des traitements</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Anomalies</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Journal serveur</span>
  </div>
  <div style={{marginTop: '12px', padding: '10px', border: '1px dashed rgba(148,163,184,0.3)', borderRadius: '8px', opacity: 0.7}}>Période : Hier ▾ · la vue choisie en dessous — ses filtres, sa grille et son export</div>
</div>

- **Un droit par vue.** Chaque vue garde le droit de page qu'elle avait avant de rejoindre Diagnostic : *Erreurs d'intégration*, *Journal des traitements*, *Journal serveur*, plus *Anomalies* pour la nouvelle vue. Un rôle ne voit que les vues qui lui sont accordées, et le menu affiche Diagnostic dès que l'une d'elles l'est. Voir [Rôles](../../configuration/security/roles.md).
- **Les liens ouvrent la bonne vue.** Les cartes du [tableau de bord](../dashboard.md) et du [tableau de bord IT](../tech-dashboard.md) ouvrent Diagnostic sur la vue correspondante, avec les mêmes filtres.
- **Hier par défaut.** Chaque vue datée démarre sur l'activité de la veille ; la période se change depuis sa barre.
- **Les erreurs d'intégration s'ouvrent par règle.** La grille par règle est la première lecture du matin ; la liste des événements s'obtient depuis la vue elle-même.

---

## Conseils & bonnes pratiques

- **Commencer par Anomalies** quand la question est « que faut-il corriger » : la vue réunit les quatre types d'anomalie et masque celles déjà résolues.
- **Passer aux Erreurs d'intégration** quand une règle de validation domine : la grille par règle regroupe les factures par règle et par source.
- **Le Journal des traitements pour un fichier, le Journal serveur pour le serveur** — un traitement en échec apparaît dans le premier, une exception ou un problème de connexion dans le second.
