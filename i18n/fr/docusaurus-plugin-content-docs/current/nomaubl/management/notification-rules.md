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

---

## Accès à l'éditeur

- Barre latérale → **Gestion → Règles de notification**.
- Une installation neuve ne contient aucune règle — le dispatcher n'émet rien tant qu'aucune règle n'est créée. Le bouton **Ajouter** crée la première.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nrlfr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nrlfr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nrlfr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nrlfr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="414" rx="14" fill="url(#nrlfr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Règles de notification</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Définissez quels changements de statut/motif doivent notifier qui</text>
  <rect x="997" y="34" width="83" height="22" rx="5" fill="url(#nrlfr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1038.5" y="48.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="919" y="34" width="72" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="955.0" y="48.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="858" y="34" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="885.5" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Copier</text>
  <rect x="780" y="34" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="816.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <rect x="240" y="84" width="200" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="92" width="184" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="106.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="246" y="124" width="188" height="38" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="139" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">pa-rejection</text>
  <text x="254" y="153" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Alerte sur rejet PA</text>
  <rect x="394" y="134" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="410.0" y="145.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">on</text>
  <rect x="246" y="168" width="188" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="183" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">pa-deposit</text>
  <text x="254" y="197" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Confirmation de dépôt PA</text>
  <rect x="394" y="178" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="410.0" y="189.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">on</text>
  <rect x="246" y="212" width="188" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="227" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">validation-failure</text>
  <text x="254" y="241" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Erreurs XSD / Schematron</text>
  <rect x="394" y="222" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="410.0" y="233.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">off</text>
  <rect x="454" y="84" width="626" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="468" y="104" fill="#e2e8f0" fontSize="11.5" fontWeight="700" fontFamily="ui-monospace, monospace">pa-rejection</text>
  <text x="574" y="104" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Alerte sur rejet PA</text>
  <rect x="454" y="112" width="626" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="466" y="122" width="190" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="474" y="129" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="482.0" y="140.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <text x="496" y="140.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GENERAL</text>
  <text x="475" y="158" fill="#4ade80" fontSize="9" fontFamily="system-ui, sans-serif">Active</text>
  <line x1="657" y1="144.0" x2="669" y2="144.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#nrlfr-flow)"/>
  <rect x="672" y="122" width="190" height="44" rx="8" fill="rgba(168,85,247,0.14)" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="680" y="129" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="688.0" y="140.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ϟ</text>
  <text x="702" y="140.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRIGGER</text>
  <text x="681" y="158" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">9904, 9907</text>
  <line x1="863" y1="144.0" x2="875" y2="144.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#nrlfr-flow)"/>
  <rect x="878" y="122" width="190" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="886" y="129" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="894.0" y="140.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <text x="908" y="140.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANNELS</text>
  <text x="887" y="158" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Portail (cloche + boîte), Email</text>
  <rect x="454" y="166" width="626" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="466" y="176" width="190" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="474" y="183" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="482.0" y="194.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✉</text>
  <text x="496" y="194.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EMAIL</text>
  <text x="475" y="212" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Envoyé</text>
  <line x1="657" y1="198.0" x2="669" y2="198.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#nrlfr-flow)"/>
  <rect x="672" y="176" width="190" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="680" y="183" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="688.0" y="194.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <text x="702" y="194.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="681" y="212" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1 appel(s)</text>
  <line x1="863" y1="198.0" x2="875" y2="198.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#nrlfr-flow)"/>
  <rect x="878" y="176" width="190" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="886" y="183" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="894.0" y="194.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="908" y="194.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEST</text>
  <text x="887" y="212" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Essayer sur une facture</text>
  <line x1="454" y1="230" x2="1080" y2="230" stroke="#1f2937" strokeWidth="1"/>
  <text x="468" y="252" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CODES STATUT</text>
  <rect x="594" y="240" width="48" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="618.0" y="252.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">9904 ×</text>
  <rect x="648" y="240" width="48" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="672.0" y="252.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">9907 ×</text>
  <text x="468" y="282" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CODES MOTIF</text>
  <rect x="594" y="270" width="63" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="625.5" y="282.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">REJ_ADR ×</text>
  <text x="468" y="312" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIRECTION</text>
  <rect x="594" y="297" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="604" y="311.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Toutes (émises + reçues) ▾</text>
  <text x="468" y="342" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Mêmes codes que dans l'onglet Historique d'une facture. Vide = tous.</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste des règles</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pastille on / off par règle</text>
  <line x1="200" y1="137.0" x2="248" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrlfr-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Puces du déclencheur</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">statut + motif, choix multiple</text>
  <line x1="200" y1="307.0" x2="464" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrlfr-arrow)"/>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Barre d'outils</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajouter / copier / supprimer / enregistrer</text>
  <line x1="1120" y1="47.0" x2="1080" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrlfr-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes de la règle</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'étape choisie s'ouvre dessous</text>
  <line x1="1120" y1="137.0" x2="1076" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrlfr-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">État sur chaque carte</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que contient chaque partie</text>
  <line x1="1120" y1="227.0" x2="1076" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nrlfr-arrow)"/>
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

L'éditeur présente la règle sous forme de **six cartes d'étape** alignées en haut — **General**, **Trigger**, **Channels**, **Email**, **Actions** et **Test**, libellés affichés en anglais par l'application — qui résument chacune leur réglage :

| Carte | État affiché |
|---|---|
| **General** (Général) | *Active* (en vert) ou *Désactivée*. |
| **Trigger** (Déclencheur) | Les codes statut du déclencheur, ou *Tout statut*. |
| **Channels** (Canaux) | Les canaux cochés (*Portail (cloche + boîte)*, *Email*, *Appel API*), ou *Aucun*. |
| **Email** | *Envoyé* quand le canal e-mail est coché, *Non utilisé* sinon. |
| **Actions** | Le nombre d'appels de connecteur (*2 appel(s)*). |
| **Test** | *Essayer sur une facture*. |

Un clic sur une carte affiche ses champs sous les cartes. L'éditeur revient sur *General* au changement de règle.

### Général (*General*)

| Champ | Description |
|---|---|
| **Description** | Phrase libre affichée sous le nom de la règle dans la liste. Premier endroit où lire ce que fait la règle. |
| **Activée** | Case unique. Décochée, la règle reste dans le catalogue mais est ignorée à l'envoi. La même valeur pilote la pastille `on` / `off` de la liste. |

### Déclencheur (*Trigger*)

Le déclencheur définit **quand** la règle se déclenche. Trois champs se combinent, tous optionnels :

| Champ | Source | Comportement |
|---|---|---|
| **Codes de statut** | Catalogue *statuses* | Multi-sélection à puces. La règle se déclenche quand le code statut de la nouvelle transition figure dans la liste. Vide = correspondance sur tout statut. |
| **Codes de motif** | Catalogue *rejection-reason-codes* | Multi-sélection à puces. La règle se déclenche uniquement quand le code motif de la nouvelle transition figure dans la liste. Vide = correspondance sur tout motif. |
| **Direction** | `Toutes` *(défaut)* / `Émises uniquement (ventes)` / `Reçues uniquement (achats)` | Choisit le côté du workflow concerné par la règle. `Toutes` garde la règle active des deux côtés. `Émises uniquement` saute la règle sur les factures reçues du fournisseur ; `Reçues uniquement` la saute sur les factures émises au client. Évalué contre l'indicateur `UHDRIN` stocké sur la ligne (voir [Factures → Chip Direction](../application/invoices.md#chip-direction)). |

Les deux premiers champs sont des **multi-sélections à puces** — choisir une entrée dans la liste déroulante ajoute une puce ; le × d'une puce la retire. La liste déroulante lit les ressources `statuses` et `rejection-reason-codes`, les mêmes que celles utilisées par la modale *Modifier le statut* et l'onglet *Historique* de la facture. Une règle ne peut donc référencer que des codes effectivement reconnus par l'application.

Quand plusieurs champs sont renseignés, tous doivent correspondre (ET logique) pour que la règle se déclenche — une règle `Statut = 207`, `Direction = Reçues uniquement` câble ainsi la notification de rejet côté fournisseur sans entrer en collision avec la règle `Statut = 207` côté client qui existe déjà sur le même modèle.

### Canaux (*Channels*)

Deux canaux de livraison, plus le bloc destinataire :

- **`portal`** — écrit une ligne dans `F564253` pour le destinataire. L'utilisateur la voit dans la boîte [Notifications](../application/notifications.md) et dans la cloche.
- **`email`** — envoie un message SMTP via le compte mail configuré sur le template `e-invoicing`.

Les appels d'action partent automatiquement quand la règle a au moins une entrée dans la carte *Actions*. Pour bloquer les appels d'action, désactiver la règle depuis la carte *General*.

Le modèle de destinataire comporte deux parties indépendantes : une **cible portail** (utilisateur / rôle) et une **liste d'e-mails**.

| Champ | Description |
|---|---|
| **Cible portail** | Choisit la cible portail — `Utilisateur (par identifiant)`, `Rôle`, ou **Tout le monde** (vide). *Tout le monde* écrit une seule ligne `F564253` sous la sentinelle `*`, visible dans toutes les boîtes de réception, que l'authentification soit activée ou non. |
| **Identifiant / Nom de rôle** | Identifiant ou nom de rôle sélectionné par *Cible portail*. Texte libre — l'auto-complétion vient de la base connectée quand elle est disponible. |
| **Liste d'e-mails** | Liste indépendante d'adresses e-mail, séparées par `,` ou `;`. Chaque adresse reçoit son propre e-mail (pas d'en-tête `To:` partagé). Indépendante de la cible portail ci-dessus. |

Quand l'authentification est activée, une cible portail dont la ligne `F564250` porte un e-mail reçoit aussi le canal e-mail automatiquement.

### Email

La carte *Email* affiche toujours ses champs. L'envoi effectif d'un e-mail dépend de la case `email` de la carte *Channels*, ce que reprend l'état de la carte *Email* (*Envoyé* / *Non utilisé*).

| Champ | Valeur par défaut | Description |
|---|---|---|
| **Sujet** | `Invoice {doc} {dct} {kco} — {statusLabel}` | Ligne de sujet. Les placeholders sont résolus au moment de l'envoi. |
| **Corps** | `Status: {statusLabel}\nReason: {reasonLabel}\nAction: {actionLabel}\n{message}` | Corps en texte brut. Saisie multi-lignes. |
| **Attach PDF** | `Y` | Génère le PDF de la facture (via le `pdf-template` résolu) et l'attache à l'e-mail. Le PDF est généré une seule fois par envoi et réutilisé pour chaque destinataire ; un échec de génération est tracé mais ne fait pas échouer l'e-mail. |

Placeholders disponibles dans le sujet et le corps : les 10 champs canoniques — `{doc}`, `{dct}`, `{kco}`, `{statusCode}`, `{statusLabel}`, `{statusMessage}`, `{reasonCode}`, `{reasonLabel}`, `{actionCode}`, `{actionLabel}`, `{ruleName}`, `{message}` — plus `{call.N.fieldName}` pour les sorties d'appels d'action antérieurs dans la même règle (voir *Actions* ci-dessous).

Le jeu de placeholders fusionne aussi toutes les colonnes du catalogue de la vue [Factures](../application/invoices.md) — `{customerName}`, `{contractRef}`, `{totalHT}`, `{currency}`, `{logBusinessUnit}`, `{logPaUuid}`, … — tirées par un seul SELECT `F564231 LEFT JOIN F564230` à côté des champs canoniques. Les montants sont rendus à 2 décimales, les dates JDE Julian en ISO, les colonnes CHAR sont trimées. Les champs canoniques priment quand une colonne du catalogue partage un nom — `{doc}` / `{status}` gardent leur sens familier.

Un bouton `{ }` se trouve à côté de l'input Sujet et du textarea Corps. Cliquer dessus ouvre un picker recherchable de toutes les variables disponibles ; choisir une variable et le snippet `{nom}` s'insère dans le champ au curseur (ou s'ajoute à la fin avec un espace de tête quand l'input n'est pas focalisé). Escape / clic à l'extérieur ferme.

Le `NTSUBJ` côté portail reprend le même sujet ; le `NTMSGE` côté portail prend par défaut juste `{statusLabel}` — la boîte de réception affiche déjà la référence du document en ligne, donc la dupliquer dans le corps serait redondant.

### Actions \{#onglet-actions\}

La carte *Actions* porte une **liste** d'appels de connecteur. Chaque appel est rendu sous forme de carte repliable. L'en-tête de la carte affiche l'index de l'appel (`#1`, `#2`, …) et soit le champ *Description*, soit `connecteur · cible` quand aucune description n'est saisie ; cliquer dessus déplie l'éditeur.

| Champ | Description |
|---|---|
| **Description** | Libellé court libre pour l'appel (par exemple *Mettre à jour le statut client CRM*). Affiché en en-tête de carte repliée — une liaison à plusieurs appels se lit comme une liste à cocher d'un coup d'œil. Stocké uniquement comme métadonnée d'interface. |
| **Connecteur** | Liste déroulante de tous les `api-connector` et `sql-connector`, fusionnés avec les suffixes `· API` / `· SQL` pour que le type soit visible. |
| **Cible** | Liste déroulante alimentée par `api.connectors.listEndpoints(connecteur)` pour un connecteur API ou par `api.sqlConnectors.listQueries(connecteur)` pour un connecteur SQL. Désactivée tant qu'aucun connecteur n'est choisi. |
| **Paramètres** | Une ligne par paramètre déclaré sur la cible, plus un bouton *Ajouter un paramètre* pour les clés ad hoc. Les valeurs acceptent les `{placeholders}` — voir ci-dessous. |
| **Arrêt sur échec** | Case unique. Cochée, un échec sur cet appel interrompt la chaîne et saute tous les appels restants (`STOP · N appel(s) restant(s) ignoré(s)` dans le journal d'audit). Décochée par défaut — la chaîne continue par défaut, à l'image de la sémantique « continue-on-error » du canal e-mail. |

**+ Add Call** au pied de la liste ajoute un appel. Les nouveaux appels s'ouvrent automatiquement ; le chargement d'une règle replie tout.

#### Placeholders

Les valeurs de paramètres acceptent les mêmes `{placeholders}` que le sujet et le corps de l'e-mail — les 10 champs canoniques, toutes les colonnes du catalogue Factures, et la forme `{call.N.fieldName}` qui référence la sortie d'un appel antérieur dans la même règle. Chaque ligne de paramètre porte son propre picker `{ }`.

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

Les appels d'action sont exécutés **avant** le canal e-mail : un `transport.close()` SMTP bloqué ne peut donc pas les empêcher. L'écriture portail passe en premier ; les e-mails partent une fois la chaîne d'actions terminée.

### Test

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
