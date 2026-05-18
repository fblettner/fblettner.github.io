---
title: Règles de notification
description: "Définition des changements de statut générant une notification, leur contenu, leurs destinataires et leurs canaux (boîte de réception du portail, e-mail, appel d'API externe). Chaque règle est une ressource notification-rule enregistrée dans config-notifications.json ; un panneau Test synchrone permet d'exécuter la règle de bout en bout avant son passage en production."
keywords: [NomaUBL, règles de notification, notification-rule, déclencheur, statut, motif de rejet, canaux, portail, e-mail, action, connecteur, attachPdf, recipientType, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Règles de notification

L'écran **Règles de notification** est le côté **écriture** du système de notifications — une bibliothèque de ressources `notification-rule` qui définissent :

- **quand** une notification se déclenche (code de statut et / ou motif de rejet) ;
- **quel** texte elle contient (sujet et corps, ou les valeurs par défaut du dispatcher) ;
- **à qui** elle est destinée (un utilisateur / rôle du portail, une liste d'e-mails, ou les deux) ;
- **par quels canaux** (boîte de réception du portail, e-mail, appel d'API externe), avec le PDF généré joint à l'e-mail par défaut.

Les règles sont évaluées par `InvoiceStatusCatalog.StatusTransition.apply()` après l'écriture en base de chaque changement de statut, par le `SetStatusModal` manuel, et par les flux CLI (`-process`, `-fetch-import`, `-fetch-status`, `-fetch-single`, `-fetch-all`). Un échec d'envoi n'annule jamais la mise à jour de statut sous-jacente.

Le côté **lecture** du système — la boîte de réception où les utilisateurs lisent les notifications et la cloche dans la barre d'utilitaires — est documenté sur la page [Notifications](../application/notifications.md).

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Les déclencheurs référencent les catalogues standards *statuses* et *rejection-reason-codes*, et non des codes propres au système source.

:::info[Refonte en 2026.05.7]
Trois évolutions livrées en 2026.05.7 :

- **Éditeur en six onglets** — le formulaire long et unique passe en **Général · Déclencheur · Canaux · Email · Actions · Test**. Chaque onglet tient sur un écran et la liste d'actions a la place de grandir.
- **Liste d'actions multi-appels** — l'onglet *Actions* porte désormais une liste d'appels de connecteur au lieu d'un seul. Chaque appel a un champ libre *Description*, un drapeau facultatif *Arrêt sur échec*, et la liste déroulante connecteur API ou SQL + cible. Les appels partent dans l'ordre de déclaration, avec chaînage des réponses via les placeholders `{call.N.fieldName}`.
- **Connecteurs SQL pris en charge** — la liste déroulante des connecteurs liste les connecteurs API et les [Connecteurs SQL](../configuration/sql-connectors.md) fusionnés avec les suffixes `· API` / `· SQL`. La liste des cibles charge les endpoints ou les requêtes selon le type du connecteur choisi.

Trois bugs du dispatcher sont également corrigés : le canal d'action n'a plus besoin de l'ancienne case « action » pour partir, une liste de destinataires vide ne supprime plus les règles purement actionnelles, et un `transport.close()` SMTP bloqué ne peut plus stopper la chaîne. Voir les [notes de version 2026.05.7](../release-notes.md#v2026-05-7) pour la liste complète.
:::

---

## Accès à l'éditeur

- Barre latérale → **Gestion → Règles de notification**.
- Une installation neuve ne contient aucune règle — le dispatcher n'émet rien tant qu'aucune règle n'est créée. Le bouton **Ajouter** crée la première.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 660" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nrule-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nrule-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nrule-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <linearGradient id="nrule-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.28"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="240" y="20" width="540" height="620" rx="14" fill="url(#nrule-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="262" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Règles de notification</text>
  <rect x="558" y="30" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="580" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">+ Add</text>
  <rect x="606" y="30" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="630" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">⎘ Copy</text>
  <rect x="658" y="30" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="688" y="45" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">🗑 Remove</text>
  <rect x="722" y="30" width="44" height="22" rx="5" fill="url(#nrule-g-blue)" stroke="#4a9eff" strokeWidth="1"/><text x="744" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Save</text>

  <line x1="240" y1="68" x2="780" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="262" y="84" width="180" height="540" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="270" y="92" width="164" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/><text x="278" y="107" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <line x1="262" y1="124" x2="442" y2="124" stroke="#1f2937" strokeWidth="1"/>

  <rect x="262" y="124" width="180" height="50" fill="rgba(255,255,255,0.04)"/>
  <text x="276" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">pa-rejection</text>
  <text x="276" y="156" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Alerte sur rejet PA</text>
  <rect x="402" y="142" width="32" height="14" rx="7" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/><text x="418" y="152" fill="#4ade80" fontSize="8" fontFamily="ui-monospace, monospace" textAnchor="middle">on</text>

  <line x1="262" y1="174" x2="442" y2="174" stroke="#1f2937" strokeWidth="1"/>
  <text x="276" y="192" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">pa-success</text>
  <text x="276" y="206" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Confirmation de dépôt PA</text>
  <rect x="402" y="192" width="32" height="14" rx="7" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/><text x="418" y="202" fill="#4ade80" fontSize="8" fontFamily="ui-monospace, monospace" textAnchor="middle">on</text>

  <line x1="262" y1="224" x2="442" y2="224" stroke="#1f2937" strokeWidth="1"/>
  <text x="276" y="242" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">validation-failure</text>
  <text x="276" y="256" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Erreurs XSD / Schematron</text>
  <rect x="402" y="242" width="40" height="14" rx="7" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/><text x="422" y="252" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace" textAnchor="middle">off</text>

  <rect x="462" y="84" width="298" height="540" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="470" y="92" width="282" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="113" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">pa-rejection</text>
  <text x="566" y="113" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">Alerte sur rejet PA</text>

  <text x="478" y="148" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">DÉCLENCHEUR</text>
  <text x="478" y="170" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Statut</text>
  <rect x="540" y="160" width="60" height="16" rx="8" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="570" y="171" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9904 ×</text>
  <rect x="606" y="160" width="60" height="16" rx="8" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="636" y="171" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">9907 ×</text>
  <text x="478" y="194" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Motif</text>
  <rect x="540" y="184" width="80" height="16" rx="8" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="580" y="195" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">REJ_ADR ×</text>

  <text x="478" y="226" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">CANAUX</text>
  <rect x="478" y="232" width="58" height="20" rx="10" fill="url(#nrule-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="507" y="246" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">☑ portal</text>
  <rect x="540" y="232" width="56" height="20" rx="10" fill="url(#nrule-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="568" y="246" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">☑ email</text>
  <rect x="600" y="232" width="58" height="20" rx="10" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="629" y="246" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">☐ action</text>

  <text x="478" y="278" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">DESTINATAIRE</text>
  <text x="478" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Type</text>
  <rect x="540" y="288" width="80" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="546" y="302" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">role ▾</text>
  <text x="478" y="320" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Valeur</text>
  <rect x="540" y="310" width="200" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="548" y="324" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">accountants</text>
  <text x="478" y="340" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">CC</text>
  <rect x="540" y="332" width="200" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="548" y="346" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">superviseur@nomana-it.fr</text>

  <text x="478" y="380" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">CONTENU E-MAIL</text>
  <text x="478" y="400" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Sujet</text>
  <rect x="540" y="390" width="200" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="548" y="404" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Invoice &#123;doc&#125; &#123;dct&#125; &#123;kco&#125; — Rejected</text>
  <text x="478" y="420" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Corps</text>
  <rect x="540" y="412" width="200" height="34" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="548" y="426" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Status: &#123;statusLabel&#125;</text>
  <text x="548" y="438" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Reason: &#123;reasonLabel&#125;</text>
  <rect x="540" y="450" width="14" height="14" rx="3" fill="url(#nrule-g-green)" stroke="#4ade80" strokeWidth="1"/>
  <text x="558" y="461" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">attachPdf · joindre la facture rendue</text>

  <text x="478" y="496" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">APPEL D'ACTION · désactivé</text>
  <text x="478" y="516" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">Connecteur / endpoint / paramètres — uniquement quand ☑ action ci-dessus</text>

  <text x="478" y="552" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">TEST</text>
  <rect x="478" y="560" width="60" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="574" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">12345</text>
  <rect x="544" y="560" width="40" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="552" y="574" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">RI</text>
  <rect x="590" y="560" width="60" height="20" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="598" y="574" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00070</text>
  <rect x="656" y="560" width="84" height="20" rx="4" fill="url(#nrule-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="698" y="574" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">▶ Lancer</text>

  <rect x="478" y="592" width="262" height="20" rx="4" fill="rgba(74,222,128,0.10)" stroke="#4ade80" strokeWidth="1"/>
  <text x="488" y="606" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ Émis · 1 portail · 2 e-mails</text>

  <rect x="20" y="36" width="200" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="52" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Barre d'actions</text>
  <text x="30" y="65" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">add / copy / remove / save</text>
  <line x1="220" y1="50" x2="240" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="20" y="138" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="154" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Liste des règles</text>
  <text x="30" y="167" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pastille on / off par ligne</text>
  <line x1="220" y1="156" x2="262" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="800" y="148" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="164" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Puces de déclencheur</text>
  <text x="810" y="177" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">multi-sélection statut + motif</text>
  <line x1="800" y1="166" x2="690" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="800" y="232" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="248" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Canaux</text>
  <text x="810" y="261" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">portal · email · action</text>
  <line x1="800" y1="250" x2="660" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="20" y="296" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="312" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Destinataire</text>
  <text x="30" y="325" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cible portail + liste e-mails</text>
  <line x1="220" y1="314" x2="478" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="800" y="396" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="412" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Sujet et corps</text>
  <text x="810" y="425" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;placeholders&#125; résolus à l'envoi</text>
  <line x1="800" y1="414" x2="744" y2="402" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>

  <rect x="20" y="552" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="568" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Panneau de test</text>
  <text x="30" y="581" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exécute la règle de bout en bout</text>
  <line x1="220" y1="570" x2="478" y2="570" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrule-arrow)"/>
</svg>

La page comporte une **liste de règles** à gauche et un **éditeur de règle** à droite. Chaque règle est une ressource `notification-rule` enregistrée dans `config-notifications.json` ; le dispatcher les recharge au démarrage et après chaque enregistrement.

---

## Actions de la barre supérieure

| Action | Effet |
|---|---|
| **Ajouter** | Ouvre une modale qui demande un nom et une description. Crée une nouvelle règle vide — aucun déclencheur, canaux préréglés sur `portal`, type de destinataire préréglé sur `user`. |
| **Copier** | Duplique la règle sélectionnée sous un nouveau nom. Méthode pratique pour dériver une variante B2C d'une règle B2B, ou une règle par région à partir d'une règle générique. |
| **Supprimer** | Supprime la règle sélectionnée après confirmation. |
| **Enregistrer** | Réécrit l'état de l'éditeur dans `config-notifications.json` et signale au dispatcher de recharger. Le prochain changement de statut prend en compte la nouvelle règle. |

---

## La liste des règles

Chaque règle du catalogue comporte deux indications visuelles :

- **Description** en italique sous le nom de la règle — même champ que celui demandé par la modale *Ajouter*, texte libre.
- **Pastille `on` / `off`** à droite de chaque ligne — liée à la propriété `enabled`. Une règle marquée `off` reste dans le catalogue mais n'est pas prise en compte par le dispatcher. Pratique pour itérer sur une règle sans la perdre.

Une zone de recherche en haut de la barre latérale filtre la liste par sous-chaîne sur le nom de règle.

---

## L'éditeur de règle

En 2026.05.7, l'éditeur passe à **six onglets** — chaque onglet tient sur un écran et la liste d'actions a la place de grandir. L'onglet revient à *Général* au changement de règle.

### Onglet Général

| Champ | Description |
|---|---|
| **Description** | Phrase libre affichée sous le nom de la règle dans la liste. Premier endroit où lire ce que fait la règle. |
| **Activée** | Case unique. Décochée, la règle reste dans le catalogue mais est ignorée à l'envoi. La même valeur pilote la pastille `on` / `off` de la liste. |

### Onglet Déclencheur

Le déclencheur définit **quand** la règle se déclenche. Trois champs se combinent, tous optionnels :

| Champ | Source | Comportement |
|---|---|---|
| **Codes de statut** | Catalogue *statuses* | Multi-sélection à puces. La règle se déclenche quand le code statut de la nouvelle transition figure dans la liste. Vide = correspondance sur tout statut. |
| **Codes de motif** | Catalogue *rejection-reason-codes* | Multi-sélection à puces. La règle se déclenche uniquement quand le code motif de la nouvelle transition figure dans la liste. Vide = correspondance sur tout motif. |
| **Direction** | `Toutes` *(défaut)* / `Émises uniquement (ventes)` / `Reçues uniquement (achats)` | Choisit le côté du workflow concerné par la règle. `Toutes` garde la règle active des deux côtés. `Émises uniquement` saute la règle sur les factures reçues du fournisseur ; `Reçues uniquement` la saute sur les factures émises au client. Évalué contre l'indicateur `UHDRIN` stocké sur la ligne (voir [Factures → Chip Direction](../application/invoices.md#chip-direction)). |

Les deux premiers champs sont des **multi-sélections à puces** — choisir une entrée dans la liste déroulante ajoute une puce ; le × d'une puce la retire. La liste déroulante lit les ressources `statuses` et `rejection-reason-codes`, les mêmes que celles utilisées par la modale *Modifier le statut* et l'onglet *Historique* de la facture. Une règle ne peut donc référencer que des codes effectivement reconnus par l'application.

Quand plusieurs champs sont renseignés, tous doivent correspondre (ET logique) pour que la règle se déclenche — une règle `Statut = 207`, `Direction = Reçues uniquement` câble ainsi la notification de rejet côté fournisseur sans entrer en collision avec la règle `Statut = 207` côté client qui existe déjà sur le même modèle.

### Onglet Canaux

Deux canaux de livraison, plus le bloc destinataire :

- **`portal`** — écrit une ligne dans `F564253` pour le destinataire. L'utilisateur la voit dans la boîte [Notifications](../application/notifications.md) et dans la cloche.
- **`email`** — envoie un message SMTP via le compte mail configuré sur le template `e-invoicing`.

L'ancienne case *action* a disparu en 2026.05.7 — les appels d'action partent automatiquement quand la règle a au moins une entrée dans l'onglet *Actions*. Pour bloquer les appels d'action, désactiver la règle depuis l'onglet Général.

Le modèle de destinataire comporte deux parties indépendantes : une **cible portail** (utilisateur / rôle) et une **liste d'e-mails**.

| Champ | Description |
|---|---|
| **Cible portail** | Choisit la cible portail — `Utilisateur (par identifiant)`, `Rôle`, ou vide. Quand l'authentification est désactivée, l'option vide affiche *Diffusion — tous les utilisateurs* et écrit une seule ligne `F564253` sous la sentinelle `*`. |
| **Identifiant / Nom de rôle** | Identifiant ou nom de rôle sélectionné par *Cible portail*. Texte libre — l'auto-complétion vient de la base connectée quand elle est disponible. |
| **Liste d'e-mails** | Liste indépendante d'adresses e-mail, séparées par `,` ou `;`. Chaque adresse reçoit son propre e-mail (pas d'en-tête `To:` partagé). Indépendante de la cible portail ci-dessus. |

Quand l'authentification est activée, une cible portail dont la ligne `F564250` porte un e-mail reçoit aussi le canal e-mail automatiquement.

### Onglet Email

L'onglet Email affiche son contenu sans condition — aucune case ne le verrouille plus. L'envoi effectif d'un e-mail dépend de la case `email` de l'onglet *Canaux*.

| Champ | Valeur par défaut | Description |
|---|---|---|
| **Sujet** | `Invoice {doc} {dct} {kco} — {statusLabel}` | Ligne de sujet. Les placeholders sont résolus au moment de l'envoi. |
| **Corps** | `Status: {statusLabel}\nReason: {reasonLabel}\nAction: {actionLabel}\n{message}` | Corps en texte brut. Saisie multi-lignes. |
| **Attach PDF** | `Y` | Génère le PDF de la facture (via le `pdf-template` résolu) et l'attache à l'e-mail. Le PDF est généré une seule fois par envoi et réutilisé pour chaque destinataire ; un échec de génération est tracé mais ne fait pas échouer l'e-mail. |

Placeholders disponibles dans le sujet et le corps : les 10 champs canoniques — `{doc}`, `{dct}`, `{kco}`, `{statusCode}`, `{statusLabel}`, `{statusMessage}`, `{reasonCode}`, `{reasonLabel}`, `{actionCode}`, `{actionLabel}`, `{ruleName}`, `{message}` — plus `{call.N.fieldName}` pour les sorties d'appels d'action antérieurs dans la même règle (voir *Onglet Actions* ci-dessous).

Depuis 2026.05.14, le jeu de placeholders fusionne aussi toutes les colonnes du catalogue de la vue [Factures](../application/invoices.md) — `{customerName}`, `{contractRef}`, `{totalHT}`, `{currency}`, `{logBusinessUnit}`, `{logPaUuid}`, … — tirées par un seul SELECT `F564231 LEFT JOIN F564230` à côté des champs canoniques. Les montants sont rendus à 2 décimales, les dates JDE Julian en ISO, les colonnes CHAR sont trimées. Les champs canoniques priment quand une colonne du catalogue partage un nom — `{doc}` / `{status}` gardent leur sens familier.

Un bouton `{ }` se trouve à côté de l'input Sujet et du textarea Corps. Cliquer dessus ouvre un picker recherchable de toutes les variables disponibles ; choisir une variable et le snippet `{nom}` s'insère dans le champ au curseur (ou s'ajoute à la fin avec un espace de tête quand l'input n'est pas focalisé). Escape / clic à l'extérieur ferme.

Le `NTSUBJ` côté portail reprend le même sujet ; le `NTMSGE` côté portail prend par défaut juste `{statusLabel}` — la boîte de réception affiche déjà la référence du document en ligne, donc la dupliquer dans le corps serait redondant.

### Onglet Actions

L'onglet Actions porte une **liste** d'appels de connecteur au lieu d'un seul. Chaque appel est rendu sous forme de carte repliable. L'en-tête de la carte affiche l'index de l'appel (`#1`, `#2`, …) et soit le champ *Description*, soit `connecteur · cible` quand aucune description n'est saisie ; cliquer dessus déplie l'éditeur.

| Champ | Description |
|---|---|
| **Description** | Libellé court libre pour l'appel (par exemple *Mettre à jour le statut client CRM*). Affiché en en-tête de carte repliée — une liaison à plusieurs appels se lit comme une liste à cocher d'un coup d'œil. Stocké uniquement comme métadonnée d'interface. |
| **Connecteur** | Liste déroulante de tous les `api-connector` et `sql-connector`, fusionnés avec les suffixes `· API` / `· SQL` pour que le type soit visible. |
| **Cible** | Liste déroulante alimentée par `api.connectors.listEndpoints(connecteur)` pour un connecteur API ou par `api.sqlConnectors.listQueries(connecteur)` pour un connecteur SQL. Désactivée tant qu'aucun connecteur n'est choisi. |
| **Paramètres** | Une ligne par paramètre déclaré sur la cible, plus un bouton *Ajouter un paramètre* pour les clés ad hoc. Les valeurs acceptent les `{placeholders}` — voir ci-dessous. |
| **Arrêt sur échec** | Case unique. Cochée, un échec sur cet appel interrompt la chaîne et saute tous les appels restants (`STOP · N appel(s) restant(s) ignoré(s)` dans le journal d'audit). Décochée par défaut — la chaîne continue par défaut, à l'image de la sémantique « continue-on-error » du canal e-mail. |

**+ Add Call** au pied de la liste ajoute un appel. Les nouveaux appels s'ouvrent automatiquement ; le chargement d'une règle replie tout.

#### Placeholders

Les valeurs de paramètres acceptent les mêmes `{placeholders}` que le sujet et le corps de l'e-mail — les 10 champs canoniques, toutes les colonnes du catalogue Factures fusionnées en 2026.05.14, et la forme `{call.N.fieldName}` qui référence la sortie d'un appel antérieur dans la même règle. Chaque ligne de paramètre porte son propre picker `{ }`.

#### Chaînage des réponses

Les sorties de chaque appel sont versées dans le contexte de dispatch sous des clés `call.N.*`, où `N` est l'index 1-basé de l'appel dans la règle. Les appels suivants y accèdent via `{call.N.fieldName}` dans leurs valeurs de paramètres.

| Champ | Source — appel API | Source — appel SQL |
|---|---|---|
| `call.N.success` | `true` quand le statut HTTP est inférieur à 400. | `true` quand l'instruction s'est exécutée sans erreur. |
| `call.N.statusCode` | Code de statut HTTP renvoyé par l'endpoint. | — |
| `call.N.statementType` | — | `SELECT` / `INSERT` / `UPDATE` / `DELETE` / `MERGE`. |
| `call.N.rowCount` | — | Pour `SELECT` — nombre de lignes renvoyées. |
| `call.N.updateCount` | — | Pour les non-`SELECT` — nombre de lignes affectées. |
| `call.N.error` | Message d'erreur quand `success` vaut `false`. | Idem. |
| `call.N.<nom>` | Tout mapping `endpoint.N.response.<nom>` que le connecteur définit. | Chaque colonne de la **première ligne** du résultat, par son nom. |

Exemple : une règle qui commence par lire l'e-mail du client via une requête SQL puis envoie un webhook HTTP de suivi peut définir le paramètre `to` du webhook à `{call.1.EMAIL}` (la colonne `EMAIL` de la première ligne de l'appel #1).

#### Les appels d'action partent avant l'e-mail

Les appels d'action sont désormais exécutés **avant** le canal e-mail — un `transport.close()` SMTP bloqué ne peut donc plus les empêcher. L'écriture portail est toujours la première ; les e-mails partent une fois la chaîne d'actions terminée.

### Onglet Test

Un runner *Test* synchrone. Il accepte un triplet `(doc, dct, kco)`, optionnellement un code statut et un message personnalisé, puis **exécute réellement la règle** sur tous les canaux activés — l'écriture portail arrive dans la boîte, la chaîne d'actions s'exécute, l'e-mail part par SMTP. La bannière de résultat indique les compteurs d'envoi (`✓ Émis · 1 portail · 2 e-mails · 3 action(s) exécutée(s)`) ou la première erreur.

Le panneau de test n'enregistre pas la règle — il exécute uniquement ce qui figure actuellement dans le formulaire. Utile pour valider les modifications avant un clic sur *Enregistrer*.

---

## Déroulement d'une notification

Quand une transition de statut est appliquée (toute écriture en base qui touche `F564231.UHK74RSCD`), le dispatcher parcourt le catalogue en trois temps.

```text
StatusTransition.apply()
   ↓
NotificationDispatcher.fire(doc, dct, kco, status, reason, action, message)
   ↓ — pour chaque règle où enabled = Y
   ↓     correspondance trigger.status (CSV) ∋ status
   ↓     ET  correspondance trigger.reason (CSV) ∋ reason   (ou trigger.reason = '')
   ↓ → résolution du destinataire (cible portail + liste e-mails)
   ↓ → rendu du PDF de la facture une seule fois si attachPdf = Y
   ↓ → exécution de la chaîne d'actions (avant l'e-mail, pour qu'un SMTP bloqué ne la stoppe pas)
   ↓     pour chaque appel N dans l'ordre de déclaration :
   ↓        api-action  → appel HTTP vers connecteur.endpoint avec paramètres résolus
   ↓        sql-action  → appel JDBC vers connecteur.requête avec :params liés
   ↓        sorties versées dans le contexte sous call.N.*
   ↓        si l'appel a échoué ET stopOnFailure → STOP · saute le reste
   ↓        sinon continue (continue-on-error par défaut)
   ↓     ajout du pied d'audit par appel à NTK74MSG2
   ↓ → portal → INSERT dans F564253 (avec pied d'audit)
   ↓ → email  → un message SMTP par destinataire (transport.close borné à 5 s)
   ↓ toutes les exceptions sont capturées — un échec n'annule jamais la mise à jour
```

Le dispatcher utilise un singleton avec un pool asynchrone de 2 threads ; le code appelant retourne immédiatement. Un hook d'arrêt JVM vide le pool avec un délai de 2 secondes avant l'arrêt du processus, pour que les flux CLI qui se terminent juste après une mise à jour de statut envoient quand même leurs notifications.

Chaque dispatch émet des lignes `INFO` structurées sur stdout : `dispatch rule=X status=Y channels=… actions=N`, puis `dispatching N action call(s)`, puis `call #N → connecteur/endpoint`, puis `api-action … HTTP 200` / `sql-action … ok (N row(s))`. Les lignes `WARN` marquent les arrêts sur échec et les fermetures SMTP lentes ; les lignes `ERROR` portent le motif d'échec. Les mêmes lignes d'audit alimentent les pastilles colorées dans la boîte [Notifications](../application/notifications.md).

---

## API REST

La page lit et écrit via les endpoints de templates standards ; le dispatcher propose une route supplémentaire pour le panneau de test.

| Méthode + chemin | Rôle |
|---|---|
| `GET /api/templates` | Liste tous les modèles ; la page filtre par `type = notification-rule`. |
| `GET /api/templates/{nom}` | Charge une règle. |
| `POST /api/templates` | Crée une règle (Add). |
| `POST /api/templates/{from}/copy/{to}` | Duplique (Copy). |
| `PUT /api/templates/{nom}` | Enregistre les modifications. |
| `DELETE /api/templates/{nom}` | Supprime une règle. |
| `POST /api/notifications/test` | Émet la charge utile de la règle en synchrone sur tous les canaux activés — utilisé par le panneau *Test*. |

---

## Conseils & bonnes pratiques

- **Démarrer étroit, élargir ensuite.** Un déclencheur `9904 + REJ_ADR` est plus simple à valider qu'un déclencheur fourre-tout, et le bruit reste limité tant que la liste des destinataires et le corps du message ne sont pas finalisés.
- **Utiliser le panneau Test avant l'enregistrement.** Surtout pour le canal *action* — le dispatcher capture les échecs ; un connecteur mal configuré reste donc silencieux en production. Le test, lui, fait apparaître l'erreur directement dans la bannière de résultat.
- **Une règle par *finalité*, pas par code statut.** Regrouper plusieurs codes statut derrière une seule règle quand le corps est identique (`9904, 9907 → Rejet`) ; séparer en règles distinctes uniquement quand la liste des destinataires ou le corps du message diffèrent.
- **Les PDF sont coûteux.** `attachPdf` génère le PDF de la facture à chaque envoi — acceptable pour des règles à faible volume, coûteux pour des alertes sur l'ensemble du parc. Désactiver l'option sur les règles déclenchées en `9900` (créée) ou `9901` (validée), où le PDF apporte rarement de la valeur.
- **Privilégier `role` à `user`.** Un destinataire basé sur un rôle survit aux changements d'effectif ; un destinataire `user` demande une modification à chaque départ. La liste des rôles dans `F564251` est la source de vérité.
- **Désactiver plutôt que supprimer.** En cours d'itération, basculer la règle sur `off` au lieu de la retirer — le catalogue conserve l'historique, le dispatcher ignore la règle, et le panneau de test reste disponible.
- **Vérifier la boîte de réception après une livraison.** Les règles peuvent finir par utiliser des codes obsolètes (un statut renommé dans le catalogue, un motif retiré) — la page [Notifications](../application/notifications.md) est le contrôle croisé le plus rapide pour voir la cohérence entre le catalogue de production et les règles définies ici.
