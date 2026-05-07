---
title: Notifications
description: "Boîte de réception du portail pour les alertes de changement de statut émises par NomaUBL — onglets Toutes / Non lues, action « tout marquer comme lu », suppression par ligne, accès direct à la facture liée. Avec la cloche de la barre supérieure (qui interroge le compteur toutes les 30 s et affiche les six dernières entrées), la page forme le côté lecture du système de notifications introduit en 2026.05.3."
keywords: [NomaUBL, notifications, boîte de réception, cloche, NotificationBell, F564253, NTUKID, NTUSER, NTEV01, changements de statut, marquer lu, supprimer, facture, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Notifications

L'écran **Notifications** est la **boîte de réception du portail**. Il affiche toutes les notifications adressées à l'utilisateur courant. Chaque ligne représente un changement de statut sur une facture, retenu par une [Règle de notification](../management/notification-rules.md), enrichi du sujet, du message et des métadonnées correspondants, puis enregistré dans la table `F564253`.

La page est le côté **lecture** du système de notifications. Le côté **écriture** — quel événement déclenche quelle notification, pour qui, sur quels canaux — se configure dans l'éditeur des [Règles de notification](../management/notification-rules.md).

Une **cloche** dans la barre d'utilitaires interroge le compteur des non-lues toutes les 30 s et affiche les six dernières entrées sans quitter la page courante. Cliquer sur une entrée ouvre directement la modale de la facture liée.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. La charge utile de la notification est construite à partir de la facture UBL enregistrée, et non du XML source brut.

---

## Accès à la boîte de réception

- Barre latérale → **Application → Notifications**.
- Ou cliquer sur la **🔔 cloche** dans la barre d'utilitaires, puis **Voir toutes** en bas du menu déroulant.
- La boîte s'ouvre toujours sur l'onglet **Toutes**. L'onglet **Non lues** filtre sur les notifications pas encore lues.

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

Une ligne de notification comporte cinq éléments : le **badge de statut** à gauche (couleur du catalogue *statuses*), le **sujet** (par défaut `Invoice {doc} {dct} {kco} — {statusLabel}`), le **message** (corps de la règle ou message par défaut), la **ligne méta** avec les identifiants canoniques, et une **colonne de droite** avec l'horodatage relatif et le bouton de suppression.

---

## Actions disponibles

| Action | Effet |
|---|---|
| **Actualiser** | Recharge la boîte de réception depuis `/api/notifications`, en respectant l'onglet actif (*Toutes* ou *Non lues*). |
| **Tout marquer comme lu** | Envoie un `POST` sur `/api/notifications/mark-all-read`. Toutes les lignes non lues sont marquées lues. La pastille de la cloche s'éteint au prochain sondage (30 s) ou dès le retour du focus sur la fenêtre. Le bouton est désactivé s'il n'y a pas de ligne non lue. |
| **Onglets de filtre** | *Toutes* affiche toutes les lignes non supprimées. *Non lues* ne garde que les lignes où `read = false`. L'onglet *Non lues* affiche le compteur `( N )` à côté de son libellé. |

---

## Anatomie d'une ligne

| Élément | Source | Sens |
|---|---|---|
| **Bande d'accent à gauche + fond teinté** | `read = false` | Lignes non lues. La bande disparaît dès que la ligne est marquée lue. |
| **Badge de statut** | `NTEV01` joint au catalogue *statuses* | Statut qui a déclenché la notification. Le fond, la couleur du texte et la bordure du badge proviennent du catalogue : `9904 / Rejet PA` est rouge, `10 / Déposée` est verte, `9906 / Attente PA` est orange, etc. |
| **Sujet (ligne du haut)** | `NTSUBJ` (champ `emailSubject` de la règle ou message par défaut) | Titre court, lisible. La valeur par défaut est `Invoice {doc} {dct} {kco} — {statusLabel}`. |
| **Message (deuxième ligne)** | `NTMSGE` (champ `emailBody` de la règle ou message par défaut) | Corps du texte. Tronqué s'il dépasse ; la modale ouverte au clic affiche l'historique complet. |
| **Ligne méta** | `NTDOC · NTDCT · NTKCO · motif · action · règle` | Identifiants canoniques de la facture, plus le motif de rejet PA, l'action attendue et le nom de la règle s'ils sont présents. Motif et action sont lus dans les catalogues *rejection-reason-codes* et *action-codes* — c'est le libellé lisible qui s'affiche, pas le code brut. |
| **Horodatage relatif** | `NTUPMJ` + `NTTDAY` | *à l'instant*, *il y a 2 min*, *14:32* (aujourd'hui), *Hier*, puis l'horodatage absolu `dd/mm/yyyy hh:mm` pour les entrées plus anciennes. |
| **Bouton de suppression** | par ligne | Retire la ligne de la boîte de réception sans marquer les autres lues. |

Cliquer sur le corps de la ligne ouvre la **modale de détail de facture** pour le triplet `(doc, dct, kco)` lié — les mêmes sept onglets que sur la page [E-Invoicing](./invoices.md) (Résumé, Parties, Lignes, TVA, Notes, Historique, PDF). La ligne est marquée lue au passage.

---

## La 🔔 cloche dans la barre d'utilitaires

Une cloche figure dans la barre d'utilitaires de chaque page. Trois rôles :

1. **Sondage toutes les 30 s** du compteur des non-lues (`GET /api/notifications/unread-count`). Une pastille rouge affiche le compteur dès qu'il est strictement positif.
2. **Affichage des 6 dernières entrées** au clic — même structure qu'une ligne de la boîte de réception, mais condensée : sujet, message, référence facture, horodatage relatif. Les lignes non lues portent la même pastille bleue que dans la boîte.
3. **Clic sur une entrée** : la marque comme lue puis ouvre directement la modale de la facture. La cloche gère deux cas. Si l'utilisateur est déjà sur la boîte, elle émet un événement `nomaubl:open-notification` sur `window` pour que la modale s'ouvre sans démontage. Sinon, elle stocke la charge utile dans `sessionStorage` sous la clé `notif-auto-open` puis navigue vers `/notifications`, qui traite l'entrée au montage initial.

Un lien *Voir toutes* en bas du menu ouvre `/notifications` pour la boîte complète.

La cloche reste visible quel que soit l'état d'authentification. Quand `global.authEnabled != "Y"`, la boîte affiche les notifications de diffusion écrites avec la sentinelle `NTUSER='*'`, et la cloche les compte.

---

## Stockage et rétention

Chaque notification envoyée correspond à une ligne dans **`F564253`** (Oracle + Postgres). Les colonnes utilisées par la boîte de réception sont :

| Colonne | Type | Rôle |
|---|---|---|
| `NTUKID` | numérique | Clé primaire. Unique sur l'ensemble de la table — la clé de ligne n'inclut plus le triplet `(doc, dct, kco)`. |
| `NTUSER` | chaîne | Nom d'utilisateur résolu, ou `*` lorsque l'authentification est désactivée (diffusion). |
| `NTEV01` | chaîne | `0` pour non lue, `1` pour lue. La pastille de la cloche compte les lignes où `NTEV01 = 0`. |
| `NTSUBJ` / `NTMSGE` | chaîne | Sujet et corps. |
| `NTDOC / NTDCT / NTKCO` | mixte | Triplet de la facture ; nullable pour les alertes système qui ne ciblent pas une facture précise. |
| `NTUPMJ` / `NTTDAY` | jul / hms | Date et heure d'émission. L'index composite `(NTUSER, NTEV01, NTUPMJ DESC)` rend rapides la requête de la pastille et le tri de la boîte. |

Une purge quotidienne exécutée par `BackgroundScheduler` supprime toute ligne plus ancienne que `global.notificationsRetentionDays` (défaut 90 jours). La valeur `0` désactive la purge — utile pour les installations qui veulent garder les notifications indéfiniment ou qui gèrent leur propre stratégie de rétention.

---

## Conseils & bonnes pratiques

- **Trier via l'onglet *Non lues*.** Filtrer par non lues est plus rapide que dérouler l'onglet *Toutes*. *Tout marquer comme lu* nettoie la liste en un clic à la fin de la revue.
- **Lire la ligne méta pour le contexte.** Le fragment `motif · action · règle` indique *pourquoi* la notification a été émise — utile quand plusieurs règles couvrent des codes de statut qui se chevauchent.
- **La cloche est un aperçu rapide, pas la boîte.** Elle n'affiche que les six dernières entrées. Pour parcourir toutes les lignes non supprimées, ouvrir *Notifications*. Le lien *Voir toutes* en bas du menu déroulant est le raccourci à un clic.
- **Supprimer n'est pas la même chose que marquer lu.** *Supprimer* retire la ligne de la boîte ; *Marquer lu* la garde dans l'onglet *Toutes*, sans la bande bleue ni le fond teinté qui signalent les non-lues. *Supprimer* convient aux entrées sans valeur d'audit.
- **Pour un rejet PA, ouvrir la modale.** Une ligne `9904 / Rejet PA` donne le motif dans la ligne méta, mais l'onglet *Historique* de la modale facture donne la charge utile complète et l'action attendue.
- **Régler la rétention.** Le volume des notifications peut grimper rapidement — chaque changement de statut produit une ligne dès qu'une règle correspondante se déclenche. La valeur par défaut (90 jours) convient à la plupart des installations ; à ajuster via `global.notificationsRetentionDays`.
