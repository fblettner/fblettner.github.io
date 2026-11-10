---
title: Reprise auto
description: "NomaUBL Tâches planifiées → Reprise auto renvoie à la Plateforme Agréée, une fois par jour, toutes les factures dans les statuts d'erreur technique choisis (9904 par défaut à 3 h), avec une fenêtre sur la date de facture, une attente entre appels et des envois en parallèle ; chaque facture passe par les règles de renvoi."
keywords: [NomaUBL, reprise auto, reprise nocturne, échec d'envoi, statut 9904, 9907, Plateforme Agréée, renvoi PA, tâche planifiée, cadencement, envois en parallèle, JD Edwards, SAP, NetSuite, ERP sur mesure]
---

# Reprise auto

:::info[Où le trouver]
Ce formulaire s'ouvre depuis la page [Tâches planifiées](./overview.md) : cliquer sur une tâche de type *Reprise auto* pour la modifier, ou **Nouvelle tâche → Reprise auto** pour en créer une. **Enregistrer et appliquer** recharge immédiatement la planification, sans redémarrage du serveur.
:::

Une tâche **Reprise auto** renvoie à la Plateforme Agréée (PA), une fois par jour, toutes les factures qui se trouvent dans les statuts choisis. La tâche habituelle renvoie à 3 h les factures en *Échec d'envoi* (`9904`), pour que ce qui a échoué dans la journée — indisponibilité de la plateforme, délai dépassé — reparte avant le matin.

Plusieurs tâches peuvent coexister, chacune avec son heure et ses statuts. La tâche emprunte le même renvoi que le bouton **Tout renvoyer (N)** de la [carte Échec d'envoi du Tableau de bord IT](../../application/tech-dashboard.md#send-failed), et chaque facture passe par les [règles de renvoi](../../application/invoices.md#resend-reprocess-rules). Le fonctionnement est identique quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP sur mesure : c'est l'UBL enregistré pour chaque facture qui est renvoyé.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 492" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ar-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ar-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ar-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ar-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="422" rx="14" fill="url(#ar-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Reprise auto · retry-send-failed</text>
  <text x="240" y="78" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">GÉNÉRAL</text>
  <text x="240" y="100" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="240" y="106" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="120.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Renvoi nocturne des échecs d'envoi</text>
  <rect x="240" y="139" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M242.5,144.5 L244.8,146.8 L248.8,142" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="257" y="148" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Activé</text>
  <text x="240" y="170" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PLANIFICATION</text>
  <text x="240" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HEURE</text>
  <rect x="240" y="198" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="212.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">3</text>
  <text x="380" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MINUTE</text>
  <rect x="380" y="198" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="212.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">0</text>
  <text x="240" y="238" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CIBLE</text>
  <text x="240" y="260" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUTS À REPRENDRE</text>
  <rect x="240" y="268" width="128" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="304.0" y="280.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">9904 · Échec d'envoi ×</text>
  <rect x="376" y="268" width="184" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="468.0" y="280.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">9907 · Échec d'import par la PA ×</text>
  <rect x="240" y="292" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="306.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">— ajouter un statut —</text>
  <text x="600" y="260" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NE REPRENDRE QUE LES FACTURES DES N DERNIERS JOURS</text>
  <rect x="600" y="266" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="280.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">0</text>
  <text x="600" y="302" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">0 = aucune restriction de date</text>
  <text x="240" y="330" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CADENCEMENT</text>
  <text x="240" y="352" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ATTENTE ENTRE APPELS À LA PA (MS)</text>
  <rect x="240" y="358" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="372.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">100</text>
  <text x="600" y="352" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARALLEL WORKERS</text>
  <rect x="600" y="358" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="372.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">4</text>
  <line x1="240" y1="398" x2="960" y2="398" stroke="#1f2937" strokeWidth="1"/>
  <rect x="790" y="410" width="170" height="22" rx="5" fill="url(#ar-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="875.0" y="424.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer et appliquer</text>
  <rect x="20" y="118" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activé</text>
  <text x="30" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sinon conservée, non lancée</text>
  <line x1="200" y1="135.0" x2="240" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="20" y="199" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="214" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Heure quotidienne</text>
  <text x="30" y="227" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">heure du serveur, une fois par jour</text>
  <line x1="200" y1="216.0" x2="240" y2="209" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="20" y="287" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="302" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Codes « Erreur – technique »</text>
  <text x="30" y="315" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">9904 par défaut · OU entre codes</text>
  <line x1="200" y1="304.0" x2="240" y2="277" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="237" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="252" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Date de facture</text>
  <text x="1010" y="265" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">N derniers jours · 0 = toutes</text>
  <line x1="1000" y1="254.0" x2="720" y2="277" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="339" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="354" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Envois en parallèle</text>
  <text x="1010" y="367" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">1 à 8 · attente propre à chacun</text>
  <line x1="1000" y1="356.0" x2="720" y2="369" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer et appliquer</text>
  <text x="1010" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sans redémarrage</text>
  <line x1="1000" y1="445.0" x2="960" y2="421" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
</svg>

---

## Champs

### Général

| Champ | Défaut | Description |
|---|---|---|
| **Nom** | — | Saisi à la création (**Nouvelle tâche**) ; il identifie la tâche sur la page Tâches planifiées. |
| **Description** | vide | Texte libre : ce que couvre la tâche. |
| **Activé** | coché | Décoché, la tâche est conservée mais n'est plus lancée selon sa planification. |

### Planification

| Champ | Défaut | Description |
|---|---|---|
| **Heure** | `3` | Heure de l'exécution quotidienne (0–23), à l'heure du serveur. |
| **Minute** | `0` | Minute de l'exécution (0–59). Décaler la minute évite que deux tâches démarrent ensemble. |

### Cible

| Champ | Défaut | Description |
|---|---|---|
| **Statuts à reprendre** | `9904` | Un ou plusieurs codes, choisis parmi les statuts du groupe *Erreur – technique* du [Catalogue des statuts](../../configuration/system/statuses.md). Plusieurs codes se combinent en OU. Sans statut choisi, rien ne s'exécute. |
| **Ne reprendre que les factures des N derniers jours** | `0` | Ne garde que les factures dont la **date de facture** tombe dans les N derniers jours. `0` garde toutes les factures des statuts choisis. |

Le sélecteur propose tous les codes du groupe *Erreur – technique*, mais un renvoi n'accepte que les statuts internes `99xx` autres que `9911` et `9913` (voir les [règles de renvoi](../../application/invoices.md#resend-reprocess-rules)) :

| Code | Libellé | Renvoyée ? |
|---|---|---|
| `9904` | *Échec d'envoi à la PA* | Oui — la cible habituelle. |
| `9907` | *Échec d'import par la PA* | Oui. |
| `9909` | *Échec d'export par la PA* | Oui. |
| `9905` | *Échec de validation* | Oui, mais l'UBL enregistré part tel quel : corriger d'abord les données et préférer un [retraitement complet](../../application/invoices.md#reprocess), qui le valide de nouveau. |
| `213` | *Rejetée* | Non — statut de la plateforme, refusé par le renvoi et compté en échec. Une `213` pour motif d'adressage (`ADR_ERR`, `REJ_ADR`, `DEST_INC`) se rouvre par [Corriger destinataire](../../application/invoices.md#fix-buyer), qui la revalide et peut la renvoyer. |

### Cadencement

| Champ | Défaut | Description |
|---|---|---|
| **Attente entre appels à la PA (ms)** | `100` | Pause entre deux envois. À augmenter quand la plateforme limite le débit ; `0` envoie sans pause. |
| **Parallel workers** | `4` | Nombre d'envois menés en même temps (1 à 8). L'attente s'applique à chacun, si bien que le débit vers la plateforme vaut environ *envois en parallèle ÷ attente*. `1` envoie les factures l'une après l'autre. |

Les [limites de requêtes](../../configuration/api-connectors.md) du connecteur s'ajoutent à ces réglages.

---

## Déroulement à l'heure prévue

1. La tâche sélectionne les factures dont le statut fait partie des codes choisis, restreintes aux N derniers jours de date de facture si ce réglage est renseigné — jusqu'à 100 000 factures par exécution.
2. Chaque facture est renvoyée selon les [règles de renvoi](../../application/invoices.md#resend-reprocess-rules) : type de document *Ne pas envoyer*, UBL absent ou statut de la plateforme → échec, sans appel à la plateforme.
3. L'exécution se termine par un résumé `ok=… fail=… of …`, affiché dans la colonne *Résultat* de la page Tâches planifiées et dans son historique.

**Lancer maintenant**, sur la page Tâches planifiées, déclenche la tâche immédiatement avec ses réglages en cours ; la prochaine exécution planifiée reste inchangée. Une exécution manquée pendant un arrêt du serveur n'est pas rattrapée : la suivante part à son heure habituelle.

---

## Conseils & bonnes pratiques

- **Une tâche sur 9904 suffit le plus souvent.** N'en ajouter une que pour une autre heure ou d'autres statuts.
- **Laisser `213` et `9905` de côté.** Une `213` est toujours refusée par le renvoi (un rejet d'adressage passe par Corriger destinataire) ; une `9905` demande une correction puis un retraitement complet plutôt qu'un renvoi.
- **Décaler les minutes.** Deux tâches à la même minute se disputent les connexions à la base et la plateforme.
- **Augmenter l'attente en cas de `429`.** Une réponse *Too Many Requests* de la plateforme signale un débit trop élevé : augmenter l'attente ou réduire les envois en parallèle.
- **Désactiver plutôt que supprimer** pendant une indisponibilité connue de la plateforme : la tâche reste visible et se réactive facilement.
