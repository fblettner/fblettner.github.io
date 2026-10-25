---
title: Journal serveur
description: "La page Journal serveur affiche la fin du fichier journal du serveur NomaUBL, lignes les plus récentes en tête, avec filtres par sévérité et par module, recherche de texte et rafraîchissement automatique — sans accès shell."
keywords: [NomaUBL, journal serveur, fichier journal, log, diagnostic, sévérité, module, pile d'appels, serverLogFile, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Journal serveur

La page **Journal serveur** affiche la **fin du fichier journal du serveur**, lignes les plus récentes en tête : un administrateur suit ce que fait le serveur — un lot, une recherche Peppol, une transformation en échec — sans ouvrir de shell sur la machine. C'est une vue de la page [Diagnostic](./overview.md) — **Diagnostic → Journal serveur** — qui garde son propre droit de page (voir [Rôles](../../configuration/security/roles.md)). Les lignes s'affichent dans la table de données partagée, avec ses filtres, son tri, sa pagination et son export ; ses colonnes se règlent dans l'éditeur des [vues de liste](../../configuration/list-views.md).

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '10px'}}>
    <span style={{opacity: 0.7}}>Taille lue</span><span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>512 KB ▾</span>
    <span style={{opacity: 0.7}}>Sévérité</span><span>☑ ERROR</span><span>☑ WARN</span><span>☑ INFO</span><span>☐ DEBUG</span><span>☐ Non structuré</span>
    <span style={{opacity: 0.7}}>Module</span><span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>Tous les modules ▾</span>
    <span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px', opacity: 0.6, minWidth: '120px'}}>Rechercher…</span>
    <span>☐ Rafraîchissement auto</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)'}}>↻ Rafraîchir</span>
  </div>
  <div style={{opacity: 0.6, marginBottom: '8px'}}>Fichier : /opt/nomaubl/logs/nomaubl-prod.log · 48,2 Mo · 3 ligne(s) affichée(s) sur 2 914 dans les 512 derniers Ko</div>
  <div style={{fontFamily: 'monospace', fontSize: '11px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px'}}>
    <div style={{display: 'grid', gridTemplateColumns: '140px 60px 80px 1fr', gap: '8px', padding: '4px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}><span style={{opacity: 0.6}}>2026-10-22 06:12:04</span><span style={{color: '#94a3b8', fontWeight: 700}}>INFO</span><span style={{opacity: 0.8}}>PROCESS</span><span style={{color: '#94a3b8'}}>batch invoices — 412 file(s), 4 thread(s)</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '140px 60px 80px 1fr', gap: '8px', padding: '4px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}><span style={{opacity: 0.6}}>2026-10-22 06:12:31</span><span style={{color: '#fb923c', fontWeight: 700}}>WARN</span><span style={{opacity: 0.8}}>PEPPOL</span><span style={{color: '#fb923c'}}>0225:803206317 — SMP certificate unreadable (smp.example.com)</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '140px 60px 80px 1fr', gap: '8px', padding: '4px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}><span style={{opacity: 0.6}}>2026-10-22 06:13:02</span><span style={{color: '#f87171', fontWeight: 700}}>ERROR</span><span style={{opacity: 0.8}}>UBL</span><span style={{color: '#f87171'}}>R42565_ZJDE0001_1353306 — XSLT failed: XTDE0640</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '140px 60px 80px 1fr', gap: '8px', padding: '4px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}><span style={{opacity: 0.6}}></span><span style={{color: '#64748b', fontWeight: 700}}></span><span style={{opacity: 0.8}}></span><span style={{color: '#64748b'}}>    at net.sf.saxon.…  (3 lines)</span></div>
  </div>
</div>

---

## Commandes

| Commande | Effet |
|---|---|
| **Taille lue** | La quantité lue en fin de fichier : `128 KB`, `512 KB` *(défaut)*, `2 MB` ou `8 MB`. Quand le fichier est plus grand, la ligne d'état le signale — augmenter la taille lue pour remonter plus loin. |
| **Sévérité** | Une sélection multiple parmi `ERROR`, `WARN`, `INFO` *(les trois choisies par défaut)*, `DEBUG` et **Non structuré** — les lignes qui ne suivent pas la forme `** NIVEAU ** MODULE ** … : message` ; *Toutes les sévérités* quand aucune n'est choisie. |
| **Module** | Liste construite à partir des modules rencontrés dans les lignes lues (`PROCESS`, `UBL`, `PEPPOL`…) ; **Tous les modules** par défaut. |
| **Rechercher…** | Filtre de texte, sans distinction de casse. |
| **Rafraîchissement auto** | Relit la fin du fichier toutes les 5 secondes. |
| **Rafraîchir** | Relit la fin du fichier immédiatement. |

Les piles d'appels restent **rattachées à la ligne qui les a produites** : un filtre sur `ERROR` garde la pile entière. La ligne d'état indique le fichier lu, sa taille et le nombre de lignes affichées sur celles parcourues.

---

## Fichier lu

La page trouve le fichier seule : le `nomaubl-<env>.log` du lanceur ou, sous Linux, le fichier vers lequel la sortie du serveur est redirigée. Si le serveur est démarré par un autre lanceur, indiquer son chemin dans **Server log file** des [réglages globaux](../../configuration/system/global.md) ; laissé vide, la détection automatique s'applique. Si aucun fichier n'est trouvé, la page le signale et renvoie vers ce réglage.

---

## Conseils & bonnes pratiques

- **Commencer par `ERROR` et `WARN`.** Décocher `INFO` pour ne garder que ce qui mérite un coup d'œil, puis élargir avec la liste des modules.
- **Suivre une exécution avec le rafraîchissement auto.** Lancer un lot ou un parcours, cocher *Rafraîchissement auto* et regarder les lignes arriver.
- **Augmenter la taille lue pour un événement plus ancien.** Les 512 Ko par défaut couvrent l'activité récente ; passer à 2 ou 8 Mo pour remonter plus loin.
