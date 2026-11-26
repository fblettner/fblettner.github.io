---
title: Liaisons d'actions
description: "Câble les actions réglementaires vendeur affichées dans la modale de détail de facture — Paiement reçu, Avoir, Facture corrigée, Envoi terminé, Annulation comptable, Nouvelle facture, Renvoyer à la PA — vers un ou plusieurs appels de connecteur API ou SQL. Liste d'appels multi-call par liaison avec drapeau Arrêt sur échec, chaînage des réponses via {call.N.fieldName} et sélecteur de portée qui permet à chaque société de surcharger le template e-invoicing par défaut."
keywords: [NomaUBL, liaisons d'actions, actions, actions réglementaires, modale facture, paymentReceived, creditNote, correctedInvoice, sendCompleted, cancelAccounting, newInvoice, resendPA, connecteur API, connecteur SQL, multi-call, chaînage de réponses, arrêt sur échec, e-invoicing, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Liaisons d'actions

L'écran **Liaisons d'actions** est l'endroit où les **actions réglementaires vendeur** — les boutons qui apparaissent dans la modale de détail facture selon le statut — sont câblées à une séquence d'appels de connecteur. *Renvoyer à la PA* sur une facture en `9904` doit rappeler la PA, *Paiement reçu* sur un `204` peut mettre à jour l'ERP source et notifier l'acheteur, *Avoir* sur un `206` peut exécuter une requête SQL qui marque la ligne rejetée. La liste des actions est figée par la réglementation française ; ce qui se passe au clic se configure ici.

La page est sur le même pied que les [Règles de notification](./notification-rules.md) : les deux surfaces portent une liste d'appels de connecteur avec la même structure `Description / Connecteur / Cible / Paramètres / Arrêt sur échec` et le même contrat de chaînage de réponses `{call.N.fieldName}`.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Le menu déroulant des connecteurs liste tous les connecteurs API et SQL fusionnés avec les suffixes `· API` / `· SQL` ; le type est ainsi visible d'un coup d'œil.

---

## Accès à l'éditeur

- Barre latérale → **Gestion → Liaisons d'actions**.
- La page s'ouvre sur le **template `e-invoicing` par défaut**. Le sélecteur *Portée* permet de basculer sur une surcharge par société (`e-invoicing-{kco}`) — la liste des liaisons est rechargée depuis le template sélectionné ; le bouton Enregistrer écrit dans la même portée.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 506" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="acbfr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="acbfr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="acbfr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="acbfr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="470" rx="14" fill="url(#acbfr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Bindings d'actions</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Lier les actions vendeur réglementaires à des appels de connecteur. Les actions non liées sont désactivées.</text>
  <rect x="810" y="34" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="850.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Actualiser</text>
  <rect x="896" y="34" width="64" height="22" rx="5" fill="url(#acbfr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="928.0" y="48.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="240" y="104" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Portée</text>
  <rect x="290" y="90" width="240" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="300" y="104.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Défaut (e-invoicing) ▾</text>
  <rect x="240" y="124" width="720" height="344" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="146" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Action</text>
  <rect x="310" y="132" width="600" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="320" y="146.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Resend to PA (status 9904/9907) ▾</text>
  <rect x="920" y="132" width="28" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="934.0" y="146.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="240" y="162" width="720" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="252" y="172" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="179" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268.0" y="190.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☝</text>
  <text x="282" y="190.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BOUTON</text>
  <text x="261" y="208" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Resend to PA (status 9904/9…</text>
  <line x1="415" y1="194.0" x2="427" y2="194.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#acbfr-flow)"/>
  <rect x="430" y="172" width="162" height="44" rx="8" fill="rgba(255,159,10,0.14)" stroke="#fb923c" strokeWidth="1.3"/>
  <rect x="438" y="179" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="446.0" y="190.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <text x="460" y="190.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CALL #1</text>
  <text x="439" y="208" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Renvoyer la facture à la PA</text>
  <line x1="593" y1="194.0" x2="605" y2="194.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#acbfr-flow)"/>
  <rect x="608" y="172" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="616" y="179" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="624.0" y="190.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <text x="638" y="190.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CALL #2</text>
  <text x="617" y="208" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Ligne d'audit dans l'ERP</text>
  <line x1="771" y1="194.0" x2="783" y2="194.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#acbfr-flow)"/>
  <rect x="786" y="172" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="794" y="179" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="802.0" y="190.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <text x="816" y="190.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CALL #3</text>
  <text x="795" y="208" fill="#f87171" fontSize="9" fontFamily="system-ui, sans-serif">unconfigured call</text>
  <line x1="240" y1="226" x2="960" y2="226" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="236" width="700" height="128" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="254" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Call #1</text>
  <text x="330" y="254" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Renvoyer la facture à la PA</text>
  <text x="262" y="278" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="350" y="265" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="279.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">my-pa · API ▾</text>
  <text x="550" y="278" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINT</text>
  <rect x="610" y="265" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="620" y="279.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">import — POST /invoices ▾</text>
  <text x="262" y="308" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="350" y="295" width="300" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="309.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">ublNumber  |  &#123;&#123;ublNumber&#125;&#125;</text>
  <rect x="262" y="335" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M264.5,340.5 L266.8,342.8 L270.8,338" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="279" y="344" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Stop the chain on failure (skip remaining calls)</text>
  <text x="262" y="388" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Call #2</text>
  <text x="330" y="388" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Ligne d'audit dans l'ERP</text>
  <rect x="252" y="402" width="120" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="312.0" y="416.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add Call</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de portée</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">défaut + surcharges par société</text>
  <line x1="200" y1="107.0" x2="236" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acbfr-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le bouton d'abord</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'action que la liaison traite</text>
  <line x1="200" y1="177.0" x2="260" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acbfr-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Appel ouvert</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic sur une carte l'ouvre</text>
  <line x1="200" y1="307.0" x2="252" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acbfr-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Appels en chaîne</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exécutés dans l'ordre</text>
  <line x1="1000" y1="157.0" x2="640" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acbfr-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Appel à compléter</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ni connecteur ni cible</text>
  <line x1="1000" y1="247.0" x2="920" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acbfr-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Arrêt en cas d'échec</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">stoppe la chaîne à la 1re erreur</text>
  <line x1="1000" y1="347.0" x2="570" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acbfr-arrow)"/>
</svg>

---

## Sélecteur de portée

Le sélecteur de portée en haut de page choisit **dans quel template** les liaisons sont enregistrées :

| Portée | Template | Effet |
|---|---|---|
| **Défaut (e-invoicing)** | `e-invoicing` | Les liaisons par défaut héritées par chaque société. Modifier ici quand la même séquence d'appels s'applique à toute la plateforme. |
| **Société `00070` (e-invoicing-00070)** | `e-invoicing-00070` | Surcharge par société. Apparaît dans la liste pour chaque template `e-invoicing-{kco}` qui existe. Le résolveur côté runtime regarde d'abord le template par société puis retombe sur le défaut — une liaison présente dans les deux est surchargée par la version par société. |

La liste des surcharges disponibles est lue dans le catalogue des templates : tout template nommé `e-invoicing-{kco}` apparaît comme `Société {kco}`. Pour en créer une, copier le template `e-invoicing` par défaut sous le nouveau nom depuis *Paramètres* ; cette page chargera alors la nouvelle portée à la sélection.

Le bouton *Enregistrer* écrit dans la **portée sélectionnée uniquement** — un changement de portée avant enregistrement abandonne les modifications non sauvegardées de la précédente. Le badge *Modifications non enregistrées* apparaît à côté du sélecteur quand l'état en mémoire diverge de ce qui se trouve sur disque.

---

## La liste des actions

Chaque liaison est rendue sous forme de carte. La carte porte en haut une liste déroulante **Action** (verrouillée aux sept ID réglementaires ci-dessous) et un bouton 🗑 de suppression, puis la liaison dessinée comme une **chaîne** : une carte **Bouton** qui nomme l'action, suivie d'une carte par appel (*Call #1*, *Call #2*…) dans leur ordre d'exécution. Sous la chaîne, chaque appel garde sa sous-carte repliable avec ses champs.

### ID d'actions réglementaires

La liste déroulante propose sept ID — les mêmes boutons que la modale de détail de facture affiche selon le statut dans l'onglet *Actions*. Une action sans liaison apparaît en **désactivée** dans la modale.

| ID d'action | Libellé | Déclenché sur le statut |
|---|---|---|
| `paymentReceived` | **Paiement reçu** | `205` (statut réglementaire *Encaissement constaté*). |
| `creditNote` | **Avoir** | `206` / `207` (rejet acheteur, réémission en avoir). |
| `correctedInvoice` | **Facture corrigée** | `206` / `207` (réémission avec corrections plutôt qu'un avoir). |
| `sendCompleted` | **Envoi terminé** | `208` (suspension acheteur, marquer le flux en cours comme résolu). |
| `cancelAccounting` | **Annulation comptable** | `210` / `213` (litige, contre-passer l'écriture comptable). |
| `newInvoice` | **Nouvelle facture** | `213` (litige clos, émettre une nouvelle facture pour la même livraison). |
| `resendPA` | **Renvoyer à la PA** | `9904` / `9907` (rejet technique PA, re-soumettre le même UBL). |

Chaque ID peut être lié au plus une fois **par portée**. La liste déroulante exclut les ID déjà liés — pas de doublon accidentel possible. Supprimer une liaison libère l'ID pour réutilisation.

### Liste d'appels

Sous l'ID d'action, la liaison porte une **liste d'appels**, présentée à deux endroits :

- **Dans la chaîne** — une carte par appel après la carte *Bouton*, avec le champ *Description*, ou `connecteur · endpoint` quand la description est vide. Un appel sans connecteur ou sans endpoint s'affiche en rouge (*unconfigured call* quand rien n'est renseigné). Un clic sur la carte d'un appel ouvre ou ferme sa sous-carte.
- **En sous-cartes repliables** sous la chaîne — l'en-tête affiche l'index de l'appel (`#1`, `#2`, …) et le même résumé ; un clic déplie les champs.

Les libellés *Call #N*, *unconfigured call* et la case d'arrêt sur échec restent en anglais dans l'application.

| Champ | Description |
|---|---|
| **Description** | Libellé court libre pour cet appel (par exemple *Mettre à jour le statut client CRM*). Affiché en en-tête de carte repliée — une liaison à plusieurs appels se lit comme une liste à cocher d'un coup d'œil. Stocké uniquement comme métadonnée d'interface. |
| **Connecteur** | Liste déroulante de tous les connecteurs API et SQL fusionnés avec les suffixes `· API` / `· SQL` pour que le type soit visible. |
| **Endpoint** | Liste déroulante alimentée par `api.connectors.listEndpoints(connecteur)` pour un connecteur API ou par `api.sqlConnectors.listQueries(connecteur)` pour un connecteur SQL. Désactivée tant qu'aucun connecteur n'est choisi. |
| **Paramètres** | Pré-remplis à partir des paramètres déclarés sur la cible, une ligne étiquetée par paramètre. Les valeurs peuvent mêler texte libre et jetons `{{placeholder}}`. Quand la cible ne déclare aucun paramètre, une ligne *Params* libre remplace la mise en page par ligne. |
| **Arrêt sur échec** | Case unique. Cochée, un échec sur cet appel **interrompt la chaîne** et saute tous les appels restants. Décochée par défaut — la chaîne continue par défaut, comme dans les règles de notification. |

**+ Ajouter un appel** au pied de chaque liaison ajoute un nouvel appel. Les appels nouvellement ajoutés s'ouvrent automatiquement ; le chargement d'une liaison depuis le disque replie chaque appel pour que la page se lise comme un aperçu rapide.

### Placeholders — valeurs de la facture

Les valeurs de paramètres acceptent des placeholders résolus au clic à partir de la ligne sur laquelle l'utilisateur agit. La syntaxe `{field}` (accolade simple, syntaxe insérée par le picker `{ }`) et l'ancienne `{{field}}` fonctionnent toutes les deux — les jetons inconnus passent inchangés afin qu'une faute de frappe soit visible à l'exécution.

Chaque ligne de paramètre reçoit un picker `{ }` à côté de son input. Cliquer dessus ouvre une liste recherchable de toutes les variables disponibles ; choisir une variable et le snippet s'insère dans le champ au curseur. La liste fusionne les 10 champs canoniques ci-dessous avec toutes les colonnes du catalogue de la vue [Factures](../application/invoices.md) (`{customerName}`, `{contractRef}`, `{logBusinessUnit}`, `{logPaUuid}`, …) — un appel vers un système aval n'a plus besoin de câblage sur mesure.

| Placeholder | Source |
|---|---|
| `{{fedoc}}` | Numéro de document (`UHDOC` / `UHFEDOC`). |
| `{{fedct}}` | Type de document (`UHDCT`). |
| `{{kco}}` | Code société (`UHKCO`). |
| `{{ublNumber}}` | Identifiant UBL de la facture (`UHK74UBLNB`). |
| `{{statusCode}}` | Code de statut courant (`UHK74RSCD`). |
| `{{customerName}}` | Nom du client (`UHALPH`). |
| `{{totalHT}}` | Montant total HT. |
| `{{totalTTC}}` | Montant total TTC. |
| `{{currency}}` | Code devise ISO 4217. |
| `{{amountDue}}` | Solde restant dû. |
| `{{invoiceType}}` | Type de facture UBL (`380`, `381`, …). |
| `{{orderRef}}` | Référence du bon de commande client. |
| `{{contractRef}}` | Référence du contrat client. |
| `{{message}}` | Message de statut complet renvoyé par la plateforme. |
| `{{reasonLabel}}` | Motif de rejet courant (libellé). |
| `{{actionLabel}}` | Action attendue courante (libellé). |
| `{{actionNote}}` | Note de statut courante. |

Texte libre et placeholders peuvent se mélanger — `Y;reason={statusCode}` est une valeur valide.

### Chaînage des réponses

Quand la liaison porte deux appels ou plus, les sorties de chaque appel sont versées dans le contexte de dispatch sous des clés `call.N.*`, et les appels suivants y accèdent via les placeholders `{call.N.fieldName}` dans leurs valeurs de paramètres.

| Champ | Source — appel API | Source — appel SQL |
|---|---|---|
| `call.N.success` | `true` quand le statut HTTP est inférieur à 400. | `true` quand l'instruction s'est exécutée sans erreur. |
| `call.N.statusCode` | Code de statut HTTP renvoyé par l'endpoint. | — |
| `call.N.statementType` | — | `SELECT` / `INSERT` / `UPDATE` / `DELETE` / `MERGE`. |
| `call.N.rowCount` | — | Pour `SELECT` — nombre de lignes renvoyées. |
| `call.N.updateCount` | — | Pour les non-`SELECT` — nombre de lignes affectées. |
| `call.N.error` | Message d'erreur quand `success` vaut `false`. | Idem. |
| `call.N.<nom>` | Tout mapping `endpoint.N.response.<nom>` que le connecteur définit. | Chaque colonne de la **première ligne** du résultat, par son nom. |

Exemple : une liaison *Renvoyer à la PA* qui re-soumet d'abord la facture à la PA via un appel API, puis enregistre une ligne d'audit dans l'ERP source via un appel SQL, donne au paramètre SQL `submission_uuid` la valeur `{call.1.uuid}` (le champ `uuid` du mapping de réponse du connecteur API). Si l'appel API échoue et que *Arrêt sur échec* est coché, l'appel SQL ne part pas et la trace d'audit indique `STOP · 1 appel(s) restant(s) ignoré(s)`.

---

## Actions personnalisées \{#actions-personnalisees\}

Une section **Actions personnalisées** se trouve sous les liaisons réglementaires. Chaque entrée est un bouton libre qui apparaît dans la modale de détail facture dans un groupe *Actions personnalisées* — indépendant du statut de la facture. À utiliser pour les workflows d'opérateur qui ne correspondent pas à une transition réglementaire : pousser la facture vers un CRM, notifier un canal Slack, poster vers une API finance, …

Chaque action personnalisée porte :

| Champ | Description |
|---|---|
| **ID** | Identifiant libre (par ex. `pushToCrm`). Enregistré sous `customAction.N.id`. Le picker évite les doublons dans une portée. |
| **Label** | Texte du bouton dans la modale (par ex. *Pousser vers CRM*). Enregistré sous `customAction.N.label`. |
| **Direction** | `Toutes` *(défaut)* / `Émises uniquement (ventes)` / `Reçues uniquement (achats)`. Vide = bouton visible des deux côtés. Une fois fixée, le bouton est masqué sur les factures de la direction opposée — un *Sync CRM* côté émission et un *Marquer payée* côté réception peuvent coexister sur le même modèle, la modale n'affichant que ce qui a du sens pour la facture courante. Évalué contre l'indicateur `UHDRIN` stocké sur la ligne. |
| **Statuses** | Liste facultative de codes de statut auxquels le bouton se limite. Vide = tous les statuts. À renseigner pour qu'un bouton *Créer un dossier* n'apparaisse que sur les factures rejetées, par exemple. |
| **Liste d'appels** | Même chaîne (la carte *Bouton* affiche le libellé, à défaut l'ID, à défaut *Sans libellé*) et même éditeur d'appels que les liaisons réglementaires — connecteur, endpoint / requête, paramètres, *Arrêt sur échec* optionnel. Le même contrat de chaînage `{call.N.fieldName}` s'applique. |

**+ Ajouter une action personnalisée** au pied de la section ajoute une nouvelle entrée. Retirer avec le bouton 🗑 par ligne.

Dans la modale de détail facture, les actions personnalisées sont rendues dans leur propre `ActionsSection` sous les actions vendeur prédéfinies. Un bouton n'apparaît que sur les factures correspondant à son filtre **Statuses** (et à sa **Direction**) ; laisser le filtre vide l'affiche sur tous les statuts. Le bandeau de résultat est rattaché au groupe dont le bouton a déclenché la chaîne (champ `actionResult.source`) et est effacé automatiquement quand la modale se ferme ou change de facture — les bandeaux périmés ne restent pas.

Le clic sur une action personnalisée ouvre d'abord une **fenêtre de revue** listant toutes les valeurs sur le point d'être envoyées — résolues depuis la facture et **modifiables** — avec **Exécuter** et **Annuler**. Ajustez une valeur (par exemple le `{message}` transmis au système aval) avant l'envoi, ou renoncez sans qu'aucun appel ne parte. Aux côtés des champs facture des *Placeholders* ci-dessus, la revue résout les détails de statut courants — `{message}`, `{reasonLabel}`, `{actionLabel}`, `{actionNote}` — pour qu'un dossier ouvert depuis un rejet reprenne les termes mêmes de la plateforme.

---

## Déroulement d'une liaison

Quand l'utilisateur clique sur un bouton d'action dans la modale de détail facture :

1. Le frontend résout d'abord le template par société (`e-invoicing-{kco}`) et retombe sur `e-invoicing` quand aucune surcharge n'existe.
2. Le bloc `action.N` correspondant sur ce template est lu ; sans liaison, la modale grise le bouton (le clic n'atteint jamais l'étape 3).
3. Les appels liés partent **dans l'ordre de déclaration**. Chaque appel passe par `executeConnectorAction`, qui route vers `/api/connectors/{nom}/call/{endpoint}` pour un connecteur API ou vers `/api/sql-connectors/{nom}/call/{requête}` pour un connecteur SQL.
4. Les sorties sont versées dans `call.N.*`. Les valeurs `{{placeholder}}` et `{call.N.…}` du prochain appel sont résolues sur le contexte fusionné.
5. Un `FAIL` sur un appel avec *Arrêt sur échec* coché interrompt la chaîne et trace `STOP · N appel(s) restant(s) ignoré(s)`. Sinon la chaîne continue avec l'appel suivant.
6. Le résultat agrégé est affiché dans une bannière de la modale facture — *Action terminée · 2 / 2 appels réussis* en cas de succès, le motif d'échec sinon.

Le dispatch est synchrone ; la modale reste ouverte jusqu'au retour de chaque appel. Les requêtes SQL longues sont bornées par le *Query timeout* du connecteur SQL ; les appels HTTP longs sont bornés par le *Default timeout* du connecteur API.

---

## Conseils & bonnes pratiques

- **Commencer par la portée par défaut.** Configurer `e-invoicing` d'abord, ne surcharger par société que quand un client demande un connecteur différent ou un paramètre supplémentaire. Le résolveur de repli garde la lecture claire.
- **Une finalité par liaison.** *Renvoyer à la PA* ne doit pas en plus mettre à jour l'ERP et notifier les comptables — séparer en plusieurs appels dans la même liaison. Le champ *Description* sur chaque appel rend la chaîne lisible depuis la vue repliée.
- **Activer *Arrêt sur échec* uniquement sur l'appel amont.** Une chaîne typique est `soumission PA · audit ERP · notification finance`. Cocher *Arrêt sur échec* uniquement sur le premier appel — si la soumission PA échoue, la ligne d'audit n'a pas de sens. Un échec sur l'audit ou la notification ne justifie pas de sauter le reste.
- **Référencer les appels précédents avec `{call.N.fieldName}`.** Une ligne d'audit SQL qui a besoin de l'UUID de la soumission PA le récupère via `{call.1.uuid}` plutôt que de re-questionner la PA. La chaîne reste cohérente lors des relances.
- **Tester avec la portée qui sera utilisée.** Une liaison enregistrée sur `e-invoicing` mais testée sur une facture de la société `00070` exécute la surcharge par société quand elle existe — basculer la portée d'abord lors de la validation.
- **Préserver l'exactitude des `{{placeholder}}`.** Les noms de placeholders listés ci-dessus sont les seuls que le runtime substitue ; une faute (`{{customer}}` au lieu de `{{customerName}}`) est laissée telle quelle et envoyée au connecteur sous forme de chaîne littérale. Le panneau Test des pages connecteur capture l'écart.
- **Désactiver une liaison en la vidant.** Il n'y a pas de drapeau actif / inactif — pour suspendre une action, retirer sa liaison (le bouton est grisé dans la modale) ou retirer l'appel défaillant (le reste de la chaîne s'exécute toujours).
