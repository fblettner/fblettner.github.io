---
title: Import
description: "Vérifier que les factures déposées sur la Plateforme Agréée ont effectivement été importées — interrogation asynchrone qui fait passer chaque facture en attente 9906 vers 10 (déposée) ou 9907 (import rejeté par la PA)."
keywords: [NomaUBL, sync, import, 9906, 9907, 10, Plateforme Agréée, asynchrone, polling, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Import

L'écran **Import** vérifie que les factures déposées sur la Plateforme Agréée ont effectivement été importées côté PA. Il ne s'agit **pas** du flux de cycle de vie / de récupération des statuts (à voir dans *Sync → Retrieve Statuses*) mais de la **confirmation d'import asynchrone** consécutive à un dépôt PA réussi.

Lorsqu'une PA importe les factures **en mode asynchrone**, un dépôt réussi ne fait que placer la facture en statut local `9906` (en attente) — la PA accuse réception sans avoir encore importé. L'écran Import interroge la PA pour chaque facture en `9906` et met à jour le statut local avec le résultat réel de l'import.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé — le comportement d'import asynchrone de la PA étant indépendant du système amont qui a produit la facture.

---

## Vue d'ensemble du pipeline

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="imp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="imp-arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4ade80"/></marker>
    <marker id="imp-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#f87171"/></marker>
    <marker id="imp-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="imp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="imp-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="imp-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="imp-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.18"/><stop offset="100%" stopColor="#4ade80" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="imp-g-red" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87171" stopOpacity="0.16"/><stop offset="100%" stopColor="#f87171" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="40" y="20" width="220" height="60" rx="10" fill="url(#imp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="150" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🖱 Check Import Status</text>
  <text x="150" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">clic utilisateur</text>
  <rect x="40" y="110" width="220" height="60" rx="10" fill="url(#imp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="150" y="134" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔎 Requête base</text>
  <text x="150" y="152" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">factures en statut 9906</text>
  <line x1="150" y1="80" x2="150" y2="110" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#imp-arrow)"/>
  <rect x="40" y="200" width="220" height="60" rx="10" fill="url(#imp-g-blue-strong)" stroke="#4a9eff" strokeWidth="2" strokeDasharray="6 3"/>
  <text x="150" y="224" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">🔁 Pour chaque 9906</text>
  <text x="150" y="244" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">boucle</text>
  <line x1="150" y1="170" x2="150" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#imp-arrow)"/>
  <rect x="320" y="200" width="290" height="60" rx="10" fill="url(#imp-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="465" y="224" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">📡 GET /api/v1/sale/invoices/import/&#123;uuid&#125;</text>
  <text x="465" y="244" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">endpoint PA</text>
  <line x1="260" y1="230" x2="320" y2="230" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#imp-arrow)"/>
  <text x="290" y="222" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">par facture</text>
  <rect x="660" y="200" width="180" height="60" rx="10" fill="url(#imp-g-blue)" stroke="#4a9eff" strokeWidth="2" strokeDasharray="6 3"/>
  <text x="750" y="224" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Résultat PA</text>
  <text x="750" y="244" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="610" y1="230" x2="660" y2="230" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#imp-arrow)"/>
  <rect x="320" y="320" width="240" height="80" rx="10" fill="url(#imp-g-green)" stroke="#4ade80" strokeWidth="1.5"/>
  <text x="440" y="346" fill="#4ade80" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ Statut → 10 Déposée</text>
  <text x="440" y="366" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">stockage UUID facture</text>
  <text x="440" y="384" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">succès</text>
  <rect x="600" y="320" width="240" height="80" rx="10" fill="url(#imp-g-red)" stroke="#f87171" strokeWidth="1.5"/>
  <text x="720" y="346" fill="#f87171" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Statut → 9907 Rejet</text>
  <text x="720" y="366" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">stockage messages d'erreur</text>
  <text x="720" y="384" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">échec</text>
  <rect x="40" y="320" width="240" height="80" rx="10" fill="url(#imp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="160" y="346" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⏳ Pas de changement</text>
  <text x="160" y="366" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">nouvelle tentative au passage suivant</text>
  <text x="160" y="384" fill="currentColor" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">en attente</text>
  <path d="M 720 260 L 720 290 L 440 290 L 440 320" stroke="#4ade80" strokeWidth="1.4" fill="none" markerEnd="url(#imp-arrow-green)"/>
  <line x1="750" y1="260" x2="720" y2="320" stroke="#f87171" strokeWidth="1.4" markerEnd="url(#imp-arrow-red)"/>
  <path d="M 700 260 L 700 290 L 160 290 L 160 320" stroke="#94a3b8" strokeWidth="1.4" fill="none" markerEnd="url(#imp-arrow-slate)"/>
  <path d="M 160 400 L 160 430 L 150 430 L 150 260" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#imp-arrow-slate)"/>
  <text x="80" y="425" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">itération suivante</text>
  <rect x="780" y="20" width="180" height="60" rx="10" fill="url(#imp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="870" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Logs agrégés</text>
  <text x="870" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">terminé</text>
  <path d="M 260 230 L 290 230 L 290 50 L 780 50" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#imp-arrow-slate)"/>
  <text x="540" y="42" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">en fin de boucle</text>
</svg>

Seules les factures en `9906` sont vérifiées — celles déjà en `10` ou `9907` sont ignorées. Cliquer plusieurs fois sur le bouton reste donc sans risque : aucune facture n'est traitée deux fois, aucun doublon n'est créé.

---

## Pourquoi cette page existe

Certaines Plateformes Agréées renvoient un résultat synchrone à la soumission — la facture passe directement de l'état pré-dépôt local à un état terminal côté PA (`10`, `9907`, etc.) au moment du dépôt. Pour ces PA, la page n'a pas d'utilité.

D'autres PA accusent réception immédiatement et importent en mode asynchrone : la facture reste en `9906` (en attente) côté local jusqu'à ce que le worker d'import de la PA l'ait effectivement traitée. **Pour ces PA, cette page est le moyen de confirmer l'import** — sans elle, les factures en `9906` resteraient en attente indéfiniment côté local, même lorsque la PA les a depuis longtemps acceptées ou rejetées.

---

## Transitions de statut

La page ne transite jamais que de `9906` vers l'un des trois états :

| Depuis | Résultat PA | Vers | Effet de bord |
|---|---|---|---|
| `9906` (en attente) | succès | `10` (Déposée) | L'UUID de facture attribué par la PA est stocké sur l'enregistrement local. |
| `9906` (en attente) | échec | `9907` (Import rejeté par la PA) | Les messages d'erreur renvoyés par la PA sont stockés sur l'enregistrement local. |
| `9906` (en attente) | toujours en attente | `9906` (inchangé) | Pas de mise à jour — le prochain passage vérifiera de nouveau. |

Un `9907` n'est **pas** un échec Schematron ou XSD (ces échecs bloquent le dépôt avant même d'atteindre le worker d'import de la PA et produisent un autre statut). `9907` couvre les problèmes d'acceptation côté PA que la PA ne signale qu'au moment de l'import.

Voir la [Référence des statuts](../references/status-reference.mdx) pour le détail de chaque code.

---

## Exécution

Une seule section, un seul bouton.

| Élément | Description |
|---|---|
| **Check Import Status** | Déclenche le passage. Désactivé pendant l'exécution. |
| **Ligne de statut** | Retour en ligne sous le bouton — vert en cas de succès, rouge en cas d'échec. |

La page n'a aucun paramètre : toutes les factures en `9906` sont vérifiées dans le même appel. Aucune sélection par facture — pour cibler une facture en particulier, passer par *Application → E-Invoicing* et utiliser les actions par ligne.

---

## Résultats

La section **Results** affiche la table de logs structurée — une ligne par facture traitée, plus les événements de niveau pipeline. Les colonnes correspondent aux autres tables de logs NomaUBL (`Severity / Module / Submodule / Message`).

Un passage réussi sur une facture en `9906` produit typiquement au moins :

- Une ligne `INFO` indiquant la facture vérifiée.
- Une ligne `SUCCESS` (passage à `10`), `WARNING` (passage à `9907`) ou `INFO` (toujours en attente) portant la réponse de la PA.

Lorsqu'un appel à la PA échoue pour des raisons de transport (réseau, expiration, identifiants), une ligne `ERROR` est journalisée et la facture reste en `9906` — un passage ultérieur retentera l'opération.

---

## Conseils & bonnes pratiques

- **Planifier le passage.** L'*ordonnanceur en arrière-plan* de NomaUBL peut exécuter cette page périodiquement — voir la propriété `fetchImportInterval` du template *e-invoicing* (valeur en minutes ; `0` désactive l'ordonnanceur). Pour une PA à import asynchrone, une planification toutes les 5 à 15 minutes est typique.
- **Un passage ne produit pas de dépôt en double.** Il ne fait que lire — la PA renvoie le résultat d'import d'une facture déjà soumise. Lancer manuellement après l'ordonnanceur reste sans risque.
- **Les factures en `9907` se corrigent ailleurs.** Cette page signale uniquement le rejet ; le traitement correctif (correction des données, puis re-soumission) passe par *Application → E-Invoicing → Resend* ou par *Process → UBL* sur le fichier corrigé.
- **Cette page est distincte de *Retrieve Statuses*.** *Retrieve Statuses* gère les codes de cycle de vie (200, 201, 206, 207, 210, 213, …) émis par la PA après l'import. *Import* ne gère que l'étape de confirmation asynchrone (9906 → 10 / 9907). Les deux peuvent s'exécuter sur le même ordonnanceur avec des intervalles différents.
- **Une `9906` qui dure est un signal.** Si une facture reste en `9906` pendant plusieurs heures malgré les passages successifs, la PA a vraisemblablement perdu le dépôt ou l'`uuid` ne résout plus côté PA. Consulter le tableau de bord propre à la PA avant d'incriminer NomaUBL.
