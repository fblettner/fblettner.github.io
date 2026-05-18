---
title: Liaisons d'actions
description: "Câble les actions réglementaires vendeur affichées dans la modale de détail de facture — Paiement reçu, Avoir, Facture corrigée, Envoi terminé, Annulation comptable, Nouvelle facture, Renvoyer à la PA — vers un ou plusieurs appels de connecteur API ou SQL. Liste d'appels multi-call par liaison avec drapeau Arrêt sur échec, chaînage des réponses via {call.N.fieldName} et sélecteur de portée qui permet à chaque société de surcharger le template e-invoicing par défaut."
keywords: [NomaUBL, liaisons d'actions, actions, actions réglementaires, modale facture, paymentReceived, creditNote, correctedInvoice, sendCompleted, cancelAccounting, newInvoice, resendPA, connecteur API, connecteur SQL, multi-call, chaînage de réponses, arrêt sur échec, e-invoicing, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Liaisons d'actions

L'écran **Liaisons d'actions** est l'endroit où les **actions réglementaires vendeur** — les boutons qui apparaissent dans la modale de détail facture selon le statut — sont câblées à une séquence d'appels de connecteur. *Renvoyer à la PA* sur une facture en `9904` doit rappeler la PA, *Paiement reçu* sur un `204` peut mettre à jour l'ERP source et notifier l'acheteur, *Avoir* sur un `206` peut exécuter une requête SQL qui marque la ligne rejetée. La liste des actions est figée par la réglementation française ; ce qui se passe au clic se configure ici.

La page est sur le même pied que les [Règles de notification](./notification-rules.md) : les deux surfaces portent une liste d'appels de connecteur avec la même structure `Description / Connecteur / Cible / Paramètres / Arrêt sur échec` et le même contrat de chaînage de réponses `{call.N.fieldName}`.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Le menu déroulant des connecteurs liste tous les connecteurs API et SQL fusionnés avec les suffixes `· API` / `· SQL` ; le type est ainsi visible d'un coup d'œil.

:::info[Refonte en 2026.05.7]
Les liaisons d'actions portaient un **seul** appel par action. Depuis 2026.05.7, chaque liaison porte une **liste** d'appels de connecteur, avec un drapeau *Arrêt sur échec* par appel, le chaînage des réponses via les placeholders `{call.N.fieldName}`, et la prise en charge des connecteurs SQL en plus des api-connecteurs. Les liaisons mono-appel existantes continuent de fonctionner — les anciennes clés à plat sont lues comme une liste à un élément au chargement et réécrites au format canonique `action.N.call.M.*` à la prochaine sauvegarde. Voir les [notes de version 2026.05.7](../release-notes.md#v2026-05-7) pour la liste complète.
:::

---

## Accès à l'éditeur

- Barre latérale → **Gestion → Liaisons d'actions**.
- La page s'ouvre sur le **template `e-invoicing` par défaut**. Le sélecteur *Portée* permet de basculer sur une surcharge par société (`e-invoicing-{kco}`) — la liste des liaisons est rechargée depuis le template sélectionné ; le bouton Enregistrer écrit dans la même portée.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 660" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="action-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="action-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="action-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="620" rx="14" fill="url(#action-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Liaisons d'actions</text>
  <rect x="592" y="30" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="634" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Rafraîchir</text>
  <rect x="680" y="30" width="100" height="22" rx="5" fill="url(#action-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="730" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Enregistrer</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="10" letterSpacing="0.06em" fontFamily="system-ui, sans-serif" fontWeight="700">PORTÉE</text>
  <rect x="296" y="80" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="306" y="95" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">Défaut (e-invoicing) ▾</text>
  <text x="528" y="95" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">basculer sur e-invoicing-00070 pour surcharger</text>

  <rect x="240" y="116" width="540" height="220" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="138" fill="#94a3b8" fontSize="10" letterSpacing="0.06em" fontFamily="system-ui, sans-serif" fontWeight="700">ACTION</text>
  <rect x="306" y="126" width="280" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="316" y="141" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">Renvoyer à la PA (statut 9904 / 9907) ▾</text>
  <rect x="600" y="126" width="22" height="22" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="611" y="141" fill="#f87171" fontSize="11" textAnchor="middle">🗑</text>

  <rect x="252" y="158" width="528" height="32" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="266" y="178" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▾</text>
  <text x="284" y="178" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Appel #1</text>
  <text x="334" y="178" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Re-soumettre la facture à la PA via api-connector</text>
  <rect x="754" y="166" width="22" height="22" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="765" y="181" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <text x="266" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="266" y="214" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="276" y="229" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">my-pa · API ▾</text>
  <text x="476" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CIBLE</text>
  <rect x="476" y="214" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="229" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">import — POST /invoices ▾</text>

  <text x="266" y="252" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="266" y="258" width="510" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="276" y="273" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Numéro UBL  |  &#123;&#123;ublNumber&#125;&#125;</text>
  <rect x="266" y="282" width="510" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="276" y="297" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Forcer renvoi |  Y</text>

  <rect x="266" y="312" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="273" y="323" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="288" y="323" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Arrêt de la chaîne sur échec (saute les appels restants)</text>

  <rect x="252" y="346" width="528" height="32" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="366" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="284" y="366" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Appel #2</text>
  <text x="334" y="366" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Audit dans l'ERP source via sql-connector</text>
  <rect x="588" y="354" width="60" height="16" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="618" y="365" fill="rgb(255,159,10)" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SQL</text>
  <rect x="754" y="354" width="22" height="22" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="765" y="369" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="252" y="386" width="160" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="332" y="401" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Ajouter un appel</text>
  <text x="424" y="401" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">Les appels partent dans l'ordre. Référencer un appel précédent via {`{call.N.fieldName}`}.</text>

  <rect x="240" y="426" width="540" height="180" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="448" fill="#94a3b8" fontSize="10" letterSpacing="0.06em" fontFamily="system-ui, sans-serif" fontWeight="700">ACTION</text>
  <rect x="306" y="436" width="280" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="316" y="451" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">Paiement reçu (statut 205) ▾</text>

  <rect x="252" y="468" width="528" height="32" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="488" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="284" y="488" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Appel #1</text>
  <text x="334" y="488" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Mettre à jour le statut de paiement dans le CRM</text>

  <rect x="252" y="508" width="528" height="32" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="528" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="284" y="528" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Appel #2</text>
  <text x="334" y="528" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Notifier l'acheteur via webhook — utilise {`{call.1.confirmationId}`}</text>

  <rect x="240" y="618" width="540" height="20" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="510" y="632" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Ajouter une liaison</text>

  <rect x="20" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de portée</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">défaut + surcharges par société</text>
  <line x1="220" y1="96" x2="296" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>

  <rect x="820" y="118" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Identifiant d'action</text>
  <text x="830" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7 ID réglementaires, liste fixe</text>
  <line x1="820" y1="134" x2="586" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>

  <rect x="20" y="166" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="181" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste multi-appels</text>
  <text x="30" y="194" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cartes repliables · ordre déclaration</text>
  <line x1="220" y1="182" x2="252" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>

  <rect x="820" y="270" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Valeurs {`{{placeholder}}`}</text>
  <text x="830" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">résolues au clic</text>
  <line x1="820" y1="286" x2="780" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>

  <rect x="20" y="310" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Arrêt sur échec</text>
  <text x="30" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">stoppe la chaîne au premier échec</text>
  <line x1="220" y1="326" x2="266" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>

  <rect x="820" y="510" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="525" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaînage des réponses</text>
  <text x="830" y="538" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">{`{call.N.fieldName}`} d'un appel précédent</text>
  <line x1="820" y1="526" x2="780" y2="524" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#action-arrow)"/>
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

Chaque liaison est rendue sous forme de carte. La carte porte une liste déroulante **Action** en haut (verrouillée aux sept ID réglementaires ci-dessous), une liste d'appels de connecteur dans des sous-cartes repliables et un bouton 🗑 par liaison.

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

Sous l'ID d'action, la liaison porte une **liste d'appels** rendus sous forme de cartes repliables. L'en-tête de carte affiche l'index de l'appel (`#1`, `#2`, …) et soit le champ *Description*, soit `connecteur · cible` quand la description est vide.

| Champ | Description |
|---|---|
| **Description** | Libellé court libre pour cet appel (par exemple *Mettre à jour le statut client CRM*). Affiché en en-tête de carte repliée — une liaison à plusieurs appels se lit comme une liste à cocher d'un coup d'œil. Stocké uniquement comme métadonnée d'interface. |
| **Connecteur** | Liste déroulante de tous les connecteurs API et SQL fusionnés avec les suffixes `· API` / `· SQL` pour que le type soit visible. |
| **Cible** | Liste déroulante alimentée par `api.connectors.listEndpoints(connecteur)` pour un connecteur API ou par `api.sqlConnectors.listQueries(connecteur)` pour un connecteur SQL. Désactivée tant qu'aucun connecteur n'est choisi. |
| **Paramètres** | Pré-remplis à partir des paramètres déclarés sur la cible, une ligne étiquetée par paramètre. Les valeurs peuvent mêler texte libre et jetons `{{placeholder}}`. Quand la cible ne déclare aucun paramètre, une ligne *Params* libre remplace la mise en page par ligne. |
| **Arrêt sur échec** | Case unique. Cochée, un échec sur cet appel **interrompt la chaîne** et saute tous les appels restants. Décochée par défaut — la chaîne continue par défaut, comme dans les règles de notification. |

**+ Ajouter un appel** au pied de chaque liaison ajoute un nouvel appel. Les appels nouvellement ajoutés s'ouvrent automatiquement ; le chargement d'une liaison depuis le disque replie chaque appel pour que la page se lise comme un aperçu rapide.

### Placeholders — valeurs de la facture

Les valeurs de paramètres acceptent des placeholders résolus au clic à partir de la ligne sur laquelle l'utilisateur agit. La syntaxe `{field}` (accolade simple, syntaxe insérée par le picker `{ }`) et l'ancienne `{{field}}` fonctionnent toutes les deux — les jetons inconnus passent inchangés afin qu'une faute de frappe soit visible à l'exécution.

Depuis 2026.05.15, chaque ligne de paramètre reçoit un picker `{ }` à côté de son input. Cliquer dessus ouvre une liste recherchable de toutes les variables disponibles ; choisir une variable et le snippet s'insère dans le champ au curseur. La liste fusionne les 10 champs canoniques ci-dessous avec toutes les colonnes du catalogue de la vue [Factures](../application/invoices.md) (`{customerName}`, `{contractRef}`, `{logBusinessUnit}`, `{logPaUuid}`, …) — un appel vers un système aval n'a plus besoin de câblage sur mesure.

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

Depuis 2026.05.15, une section **Actions personnalisées** se trouve sous les liaisons réglementaires. Chaque entrée est un bouton libre qui apparaît dans la modale de détail facture dans un groupe *Actions personnalisées* — indépendant du statut de la facture. À utiliser pour les workflows d'opérateur qui ne correspondent pas à une transition réglementaire : pousser la facture vers un CRM, notifier un canal Slack, poster vers une API finance, …

Chaque action personnalisée porte :

| Champ | Description |
|---|---|
| **ID** | Identifiant libre (par ex. `pushToCrm`). Enregistré sous `customAction.N.id`. Le picker évite les doublons dans une portée. |
| **Label** | Texte du bouton dans la modale (par ex. *Pousser vers CRM*). Enregistré sous `customAction.N.label`. |
| **Direction** *(2026.05.18)* | `Toutes` *(défaut)* / `Émises uniquement (ventes)` / `Reçues uniquement (achats)`. Vide = bouton visible des deux côtés (comportement rétro-compatible). Une fois fixée, le bouton est masqué sur les factures de la direction opposée — un *Sync CRM* côté émission et un *Marquer payée* côté réception peuvent coexister sur le même modèle, la modale n'affichant que ce qui a du sens pour la facture courante. Évalué contre l'indicateur `UHDRIN` enregistré sur la ligne. |
| **Liste d'appels** | Même éditeur de call-card que les liaisons réglementaires — connecteur, endpoint / requête, paramètres, *Arrêt sur échec* optionnel. Le même contrat de chaînage `{call.N.fieldName}` s'applique. |

**+ Ajouter une action personnalisée** au pied de la section ajoute une nouvelle entrée. Retirer avec le bouton 🗑 par ligne.

Dans la modale de détail facture, les actions personnalisées sont rendues dans leur propre `ActionsSection` sous les actions vendeur prédéfinies. Toujours visibles — il n'y a pas d'activation pilotée par le statut pour ce groupe ; l'utilisateur choisit l'action qu'il veut. Le bandeau de résultat est rattaché au groupe dont le bouton a déclenché la chaîne (champ `actionResult.source`) et est effacé automatiquement quand la modale se ferme ou change de facture — les bandeaux périmés ne restent pas.

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
