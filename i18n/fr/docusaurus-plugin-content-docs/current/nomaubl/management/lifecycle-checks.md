---
title: Contrôles du cycle de vie
description: "Planifier le contrôle d'intégrité (récupérer les statuts PA manqués par l'interrogation) et le contrôle d'ordre (réordonner les événements enregistrés dans le désordre) pour une exécution quotidienne sans opérateur — les mêmes réparations que les boutons de la page Récupérer les statuts, avec les modes CLI équivalents pour un cron."
keywords: [NomaUBL, contrôles cycle de vie, contrôle d'intégrité, contrôle d'ordre, récupération de statuts, planificateur, cron, status-integrity, status-order-check, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Contrôles du cycle de vie

La page **Contrôles du cycle de vie** planifie les deux contrôles de maintenance pour qu'ils s'exécutent **chaque jour sans opérateur** — les mêmes opérations que les boutons de la page [Récupérer les statuts](../sync/retrieve-statuses.md#integrity-checks) :

- le **contrôle d'intégrité** — récupère les événements de statut livrés par la Plateforme Agréée mais manqués par l'interrogation régulière ;
- le **contrôle d'ordre** — réordonne les événements de cycle de vie enregistrés dans le désordre.

Les deux réparations sont **idempotentes** et ordonnées chronologiquement : réexécuter un contrôle sur un cycle de vie déjà propre ne change rien, un recouvrement planifié est donc sans risque.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="30" y="24" width="940" height="252" rx="14" fill="url(#lc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="50" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Contrôles du cycle de vie</text>
  <rect x="820" y="36" width="130" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="885" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">＋ Ajouter</text>
  <line x1="30" y1="70" x2="970" y2="70" stroke="#1f2937" strokeWidth="1"/>

  <rect x="50" y="88" width="900" height="80" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="66" y="110" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Réconciliation nocturne</text>
  <text x="66" y="130" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Chaque jour · 02:00 · intégrité (1 jour) + ordre · réparation</text>
  <rect x="66" y="140" width="64" height="18" rx="9" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="98" y="153" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ACTIVÉ</text>

  <rect x="50" y="180" width="900" height="76" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="66" y="202" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Audit du matin</text>
  <text x="66" y="222" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Chaque jour · 07:30 · intégrité (7 jours) · rapport seul</text>
  <rect x="66" y="232" width="64" height="18" rx="9" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="98" y="245" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ACTIVÉ</text>
</svg>

---

## Utilisation de la page

Chaque ligne est un **contrôle planifié** — plusieurs peuvent coexister (par exemple une réparation nocturne plus un audit hebdomadaire plus large en mode *rapport seul*). **Ajouter** en crée un ; la carte de chaque ligne ouvre l'éditeur.

Le planificateur tourne en mode serveur ; les changements prennent effet à la prochaine exécution planifiée.

---

## Champs d'un contrôle

| Champ | Description |
|---|---|
| **Description** | Texte libre affiché dans la liste (par ex. *Réconciliation nocturne*). |
| **Enabled** | Décoché, le contrôle reste dans la liste mais est sauté à l'exécution. |
| **Hour** / **Minute** | Heure d'exécution, dans le fuseau du serveur. |
| **Integrity check (missing statuses)** | Coché, récupère tous les événements PA de la fenêtre et complète ceux qui manquent au cycle de vie. |
| **Compare PA events from the last N days** | La fenêtre d'intégrité (défaut : `1`). Le contrôle relit tous les événements PA de la fenêtre ; revérifier des événements déjà enregistrés est sans effet, un recouvrement large est donc sûr. |
| **Ordering check (events out of order)** | Coché, réordonne les événements enregistrés dans le désordre — étapes internes de plateforme placées après un statut standard, et statuts standard dans le mauvais ordre numérique. |
| **Repair automatically** | Coché, l'exécution applique les réparations ; sinon, elle **signale** seulement ce qu'elle changerait, sans toucher au cycle de vie. |

:::info[Signaler d'abord, réparer une fois en confiance]
Démarrez une planification en mode **rapport seul** et lisez quelques exécutions sur [Récupérer les statuts](../sync/retrieve-statuses.md#integrity-checks) avant d'activer **Repair automatically** — la page manuelle montre exactement quels événements chaque mode compléterait ou réordonnerait.
:::

---

## Ligne de commande

Les deux mêmes contrôles s'exécutent en CLI pour un cron hors serveur web :

```bash
# Contrôle d'intégrité — compléter les statuts PA manquants
java -jar nomaubl.jar -status-integrity <configFile> [--lookback N] [--since YYYY-MM-DD] [--apply] [--notify]

# Contrôle d'ordre — réordonner les événements dans le désordre
java -jar nomaubl.jar -status-order-check <configFile> [--apply]
```

| Option | Effet |
|---|---|
| **`--lookback <N>`** | Fenêtre d'intégrité en jours (exclusive avec `--since`). |
| **`--since <YYYY-MM-DD>`** | Date de début de la fenêtre d'intégrité. |
| **`--apply`** | Applique les réparations ; sans elle, rapport seul. |
| **`--notify`** | Déclenche les règles de notification sur les transitions complétées (intégrité seulement). |

---

## Conseils & bonnes pratiques

- **Une réparation nocturne, un audit plus large.** Une réparation d'`1` jour chaque nuit garde le cycle de vie à jour ; une exécution hebdomadaire de `7` jours en *rapport seul* rattrape ce que la fenêtre nocturne a manqué, sans rien modifier d'elle-même.
- **Les réparations sont les boutons de Récupérer les statuts.** Rien ici ne fait plus que les [contrôles d'intégrité et d'ordre](../sync/retrieve-statuses.md#integrity-checks) manuels — la page ne fait que les mettre sur minuterie.
- **Laissez `--notify` désactivé pour les grands rattrapages.** Compléter une large fenêtre avec les notifications actives peut inonder les destinataires de transitions historiques ; ne l'activez que sur la fenêtre nocturne étroite.
