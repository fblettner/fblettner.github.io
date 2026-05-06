---
title: Notifications
description: "Boîte de réception du portail pour les alertes de changement de statut émises par NomaUBL — onglets Toutes / Non lues, action « tout marquer comme lu », suppression par ligne, accès direct à la facture liée. Combinée à la cloche de la barre supérieure, qui interroge le compteur toutes les 30 s et présente les six dernières entrées, la page constitue le côté lecture du système de notifications livré en 2026.05.3."
keywords: [NomaUBL, notifications, boîte de réception, cloche, NotificationBell, F564253, NTUKID, NTUSER, NTEV01, changements de statut, marquer lu, supprimer, facture, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Notifications

L'écran **Notifications** est la **boîte de réception du portail** qui présente toute notification adressée à l'utilisateur courant. Chaque ligne correspond à une livraison — un changement de statut sur une facture, retenu par une [Règle de notification](./notification-rules.md), enrichi du sujet, du message et des métadonnées appropriés, puis persisté dans la table `F564253`.

La page constitue le côté **lecture** du système de notifications. Le côté **écriture** — quel événement déclenche quelle notification, à destination de qui, sur quels canaux — relève de l'éditeur des [Règles de notification](./notification-rules.md).

Une **cloche** complémentaire dans la barre d'utilitaires interroge le compteur de non-lues toutes les 30 s et présente les six dernières entrées sans quitter la page courante ; cliquer sur une entrée ouvre directement la modale de la facture liée.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — la charge utile de la notification étant construite à partir de la facture UBL persistée et non du XML source brut.

---

## Accès à la boîte de réception

- Sidebar → **Gestion → Notifications**.
- Ou clic sur la **🔔 cloche** dans la barre d'utilitaires, puis **Voir toutes** au pied du menu déroulant.
- La boîte s'ouvre toujours sur l'onglet **Toutes** ; l'onglet **Non lues** filtre sur ce qui n'a pas encore été acquitté.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="notif-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="notif-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="notif-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="240" y="20" width="540" height="540" rx="14" fill="url(#notif-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="262" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications</text>
  <rect x="546" y="30" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="584" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Actualiser</text>
  <rect x="626" y="30" width="138" height="22" rx="5" fill="url(#notif-g-blue)" stroke="#4a9eff" strokeWidth="1"/><text x="695" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">✓ Tout marquer lu</text>

  <line x1="240" y1="68" x2="780" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="262" y="84" width="80" height="26" rx="6" fill="url(#notif-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="302" y="101" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Toutes</text>
  <rect x="350" y="84" width="116" height="26" rx="6" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="408" y="101" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Non lues (3)</text>

  <rect x="262" y="124" width="498" height="74" rx="8" fill="rgba(56,139,253,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="262" y="124" width="3" height="74" fill="#4a9eff"/>
  <rect x="278" y="138" width="44" height="22" rx="5" fill="rgba(248,113,113,0.18)" stroke="#f87171" strokeWidth="1"/><text x="300" y="153" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9904</text>
  <text x="334" y="148" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Facture 12345 RI 00070 — Rejet PA</text>
  <text x="334" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">REJ_ADR — destinataire inconnu sur l'annuaire PPF</text>
  <text x="334" y="182" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">12345 · RI · 00070 · REJ_ADR · INV-correction · pa-rejection</text>
  <text x="730" y="148" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">il y a 2 min</text>
  <rect x="736" y="140" width="14" height="14" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/><text x="743" y="151" fill="#94a3b8" fontSize="10" textAnchor="middle">×</text>

  <rect x="262" y="208" width="498" height="62" rx="8" fill="rgba(56,139,253,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="262" y="208" width="3" height="62" fill="#4a9eff"/>
  <rect x="278" y="220" width="44" height="22" rx="5" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/><text x="300" y="235" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">10</text>
  <text x="334" y="230" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Facture 12300 RI 00001 — Déposée</text>
  <text x="334" y="248" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">PA confirme le dépôt</text>
  <text x="334" y="262" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">12300 · RI · 00001 · pa-success</text>
  <text x="730" y="230" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">14:32</text>

  <rect x="262" y="280" width="498" height="62" rx="8" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <rect x="278" y="292" width="44" height="22" rx="5" fill="rgba(251,146,60,0.18)" stroke="#fb923c" strokeWidth="1"/><text x="300" y="307" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9906</text>
  <text x="334" y="302" fill="#cbd5e1" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">Facture 12299 RI 00001 — Attente PA</text>
  <text x="334" y="320" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">En attente d'import par la PA</text>
  <text x="334" y="334" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">12299 · RI · 00001 · pa-pending</text>
  <text x="730" y="302" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">Hier</text>

  <rect x="262" y="352" width="498" height="62" rx="8" fill="rgba(56,139,253,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="262" y="352" width="3" height="62" fill="#4a9eff"/>
  <rect x="278" y="364" width="44" height="22" rx="5" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/><text x="300" y="379" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9903</text>
  <text x="334" y="374" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Facture 12299 RI 00001 — Envoyée à la PA</text>
  <text x="334" y="392" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">submission_id=ABC-42</text>
  <text x="334" y="406" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">12299 · RI · 00001 · pa-sent</text>
  <text x="730" y="374" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">Hier</text>

  <rect x="262" y="424" width="498" height="62" rx="8" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <rect x="278" y="436" width="44" height="22" rx="5" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/><text x="300" y="451" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9901</text>
  <text x="334" y="446" fill="#cbd5e1" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">Facture 12298 RI 00001 — Validée</text>
  <text x="334" y="478" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">12298 · RI · 00001 · validation-success</text>
  <text x="730" y="446" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">Hier</text>

  <rect x="800" y="36" width="180" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="52" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Barre d'actions</text>
  <text x="810" y="65" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">actualiser + tout marquer lu</text>
  <line x1="800" y1="55" x2="770" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="20" y="84" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="100" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Onglets de filtre</text>
  <text x="30" y="113" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Toutes vs Non lues (compteur)</text>
  <line x1="220" y1="102" x2="262" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="20" y="150" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="166" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Accent non lu</text>
  <text x="30" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bande bleue à gauche + fond teinté</text>
  <line x1="220" y1="168" x2="262" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="800" y="180" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="196" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Suppression par ligne</text>
  <text x="810" y="209" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retire sans marquer lu</text>
  <line x1="800" y1="198" x2="755" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="20" y="252" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="268" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Badge de statut</text>
  <text x="30" y="281" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">couleurs issues du catalogue</text>
  <line x1="220" y1="270" x2="278" y2="304" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="20" y="392" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="408" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Ligne méta</text>
  <text x="30" y="421" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">doc · dct · kco · motif · action · règle</text>
  <line x1="220" y1="410" x2="334" y2="406" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>

  <rect x="800" y="392" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="408" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Clic → modale facture</text>
  <text x="810" y="421" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">marque la ligne lue au passage</text>
  <line x1="800" y1="410" x2="760" y2="382" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#notif-arrow)"/>
</svg>

Une ligne de notification porte cinq indices visuels : le **badge de statut** à gauche (couleur tirée du catalogue *statuses*), le **sujet** (par défaut `Invoice {doc} {dct} {kco} — {statusLabel}`), le **message** (corps de la règle ou défaut du dispatcher), la **ligne méta** avec les identifiants canoniques, et une **colonne de droite** avec l'horodatage relatif et le bouton de suppression.

---

## Actions de la barre d'actions

| Action | Effet |
|---|---|
| **Actualiser** | Re-récupère la boîte de réception depuis `/api/notifications`, en respectant l'onglet actif (Toutes ou Non lues). |
| **Tout marquer comme lu** | Émet `POST` sur `/api/notifications/mark-all-read`. Toute ligne non lue passe en lu ; la pastille de la cloche s'éteint au prochain sondage à 30 s, ou immédiatement à la prochaine prise de focus. Bouton désactivé en l'absence de lignes non lues. |
| **Onglets de filtre** | *Toutes* affiche toute ligne non supprimée ; *Non lues* ne conserve que les lignes où `read = false`. L'onglet *Non lues* porte le compteur `( N )` à côté de son libellé. |

---

## Anatomie d'une ligne

| Élément | Source | Sens |
|---|---|---|
| **Bande d'accent à gauche + fond teinté** | `read = false` | Lignes non lues. La bande disparaît dès que la ligne est marquée lue. |
| **Badge de statut** | `NTEV01` joint au catalogue *statuses* | Statut qui a déclenché la notification. Le fond, la couleur du texte et la bordure du badge proviennent du catalogue : `9904 / Rejet PA` est rouge, `10 / Déposée` est verte, `9906 / Attente PA` est orange, etc. |
| **Sujet (ligne du haut)** | `NTSUBJ` (champ `emailSubject` de la règle ou défaut du dispatcher) | Titre court, lisible. La valeur par défaut est `Invoice {doc} {dct} {kco} — {statusLabel}`. |
| **Message (deuxième ligne)** | `NTMSGE` (champ `emailBody` de la règle ou défaut du dispatcher) | Corps du texte. Tronqué en cas de débordement ; la modale ouverte au clic présente l'historique complet. |
| **Ligne méta** | `NTDOC · NTDCT · NTKCO · motif · action · règle` | Identifiants canoniques de la facture, plus le motif de rejet PA / l'action attendue / le nom de la règle lorsqu'ils sont présents. Motif et action sont résolus contre les catalogues *rejection-reason-codes* et *action-codes* — c'est le libellé humain qui s'affiche, et non le code brut. |
| **Horodatage relatif** | `NTUPMJ` + `NTTDAY` | *à l'instant*, *il y a 2 min*, *14:32* (aujourd'hui), *Hier*, puis l'horodatage absolu `dd/mm/yyyy hh:mm` pour les entrées plus anciennes. |
| **Bouton de suppression** | par ligne | Retire la ligne de la boîte de réception sans marquer les autres lues. |

Cliquer sur le corps de la ligne ouvre la **modale de détail de facture** pour le triplet `(doc, dct, kco)` lié — mêmes sept onglets que la page [E-Invoicing](../application/invoices.md) (Summary, Parties, Lines, VAT, Notes, History, PDF). La ligne est marquée lue au passage.

---

## La 🔔 cloche dans la barre d'utilitaires

Une entrée complémentaire figure dans la barre d'utilitaires de chaque page. Trois rôles :

1. **Sondage toutes les 30 s** du compteur de non-lues (`GET /api/notifications/unread-count`). Une pastille rouge affiche le compteur dès qu'il est strictement positif.
2. **Affichage des 6 dernières entrées** au clic — même structure qu'une ligne de la boîte de réception, mais condensée : sujet, message, référence facture, horodatage relatif. Les lignes non lues conservent la même pastille bleue qu'au sein de la boîte.
3. **Clic sur une entrée** : la marque comme lue puis ouvre directement la modale de la facture. La cloche traite les deux cas : lorsque l'utilisateur est déjà sur la boîte, elle dispatche un événement `nomaubl:open-notification` sur `window` afin que la modale s'ouvre sans démontage ; sinon, elle stocke la charge utile dans `sessionStorage` sous la clé `notif-auto-open` puis navigue vers `/notifications`, qui consomme l'entrée au montage à froid.

Un pied de menu *Voir toutes* renvoie vers `/notifications` pour la boîte complète.

La cloche reste visible quel que soit l'état d'authentification : lorsque `global.authEnabled != "Y"`, la boîte présente les notifications de diffusion écrites sous la sentinelle `NTUSER='*'`, et la cloche les compte.

---

## Stockage et rétention

Toute notification délivrée correspond à une ligne dans **`F564253`** (Oracle + Postgres). Les colonnes que la boîte de réception exploite sont :

| Colonne | Type | Rôle |
|---|---|---|
| `NTUKID` | numérique | Clé primaire. Unique sur l'ensemble de la table — l'adresse de ligne ne porte plus le triplet `(doc, dct, kco)`. |
| `NTUSER` | chaîne | Nom d'utilisateur résolu, ou `*` lorsque l'authentification est désactivée (diffusion). |
| `NTEV01` | chaîne | `0` pour non lue, `1` pour lue. La pastille de la cloche compte les lignes où `NTEV01 = 0`. |
| `NTSUBJ` / `NTMSGE` | chaîne | Sujet et corps. |
| `NTDOC / NTDCT / NTKCO` | mixte | Triplet de la facture ; nullable pour les alertes système qui ne ciblent pas une facture précise. |
| `NTUPMJ` / `NTTDAY` | jul / hms | Date et heure d'émission. L'index composite `(NTUSER, NTEV01, NTUPMJ DESC)` maintient à jour rapidement la requête de la pastille et le tri de la boîte. |

Une purge quotidienne, exécutée par `BackgroundScheduler`, supprime toute ligne plus ancienne que `global.notificationsRetentionDays` (défaut 90 jours). La valeur `0` désactive la purge — utile pour les installations qui souhaitent conserver les notifications indéfiniment ou qui pilotent leur propre stratégie de rétention.

---

## Conseils & bonnes pratiques

- **Trier via l'onglet *Non lues*.** Le filtrage par non-lues est plus rapide que le défilement de l'onglet *Toutes* ; *Tout marquer comme lu* nettoie la liste en un clic à la fin du tour de revue.
- **Lire la ligne méta pour le contexte.** Le fragment `motif · action · règle` indique *pourquoi* la notification a été émise — utile lorsque plusieurs règles couvrent des codes de statut qui se recoupent.
- **La cloche est un coup d'œil, pas la boîte.** Elle ne présente que les six dernières entrées ; pour le tri exhaustif des lignes non supprimées, ouvrir *Notifications*. Le pied *Voir toutes* du menu déroulant constitue le raccourci à un clic.
- **Supprimer n'équivaut pas à marquer lu.** *Supprimer* retire la ligne de la boîte ; *Marquer lu* la conserve dans *Toutes* sans accent. *Supprimer* convient aux entrées sans valeur d'audit.
- **Pour un rejet PA, ouvrir la modale.** Une ligne `9904 / Rejet PA` porte le motif dans la ligne méta, mais l'historique de l'onglet *History* de la modale facture porte la charge utile complète et l'action attendue.
- **Régler la rétention.** Le volume des notifications peut croître rapidement — chaque changement de statut produit une ligne dès qu'une règle correspondante se déclenche. Le défaut de 90 jours convient à la plupart des installations ; relèvement ou abaissement via `global.notificationsRetentionDays`.
