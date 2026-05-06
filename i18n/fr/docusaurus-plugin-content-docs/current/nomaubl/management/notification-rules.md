---
title: Règles de notification
description: "Définition des changements de statut générant une notification, leur contenu, leurs destinataires et leurs canaux (boîte de réception du portail, e-mail, appel d'API externe). Chaque règle est une ressource notification-rule enregistrée dans config-notifications.json ; un panneau Test synchrone permet d'exécuter la règle de bout en bout avant son passage en production."
keywords: [NomaUBL, règles de notification, notification-rule, déclencheur, statut, motif de rejet, canaux, portail, e-mail, action, connecteur, attachPdf, recipientType, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Règles de notification

L'écran **Règles de notification** est le côté **écriture** du système de notifications — une bibliothèque de ressources `notification-rule` qui décident :

- **quand** une notification se déclenche (code de statut et / ou motif de rejet) ;
- **quel** texte elle contient (sujet et corps, ou les valeurs par défaut du dispatcher) ;
- **à qui** elle est destinée (un utilisateur / rôle du portail, une liste d'e-mails, ou les deux) ;
- **par quels canaux** (boîte de réception du portail, e-mail, appel d'API externe), avec le PDF rendu joint à l'e-mail par défaut.

Les règles sont évaluées par `InvoiceStatusCatalog.StatusTransition.apply()` après l'écriture en base de chaque changement de statut, par le `SetStatusModal` manuel, et par les flux CLI (`-process`, `-fetch-import`, `-fetch-status`, `-fetch-single`, `-fetch-all`). Un échec d'envoi n'annule jamais la mise à jour de statut sous-jacente.

Le côté **lecture** du système — la boîte de réception où les utilisateurs acquittent les notifications et la cloche dans la barre d'utilitaires — est documenté sur la page [Notifications](./notifications.md).

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Les déclencheurs référencent les catalogues standards *statuses* et *rejection-reason-codes*, et non des codes propres au système source.

---

## Accès à l'éditeur

- Sidebar → **Gestion → Règles de notification**.
- Une installation neuve ne contient aucune règle — le dispatcher n'émet rien tant qu'aucune règle n'est créée. Le bouton **Add** crée la première.

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

La page se compose d'une **liste de règles** à gauche et d'un **éditeur de règle** à droite. Chaque règle est une ressource `notification-rule` enregistrée dans `config-notifications.json` ; le dispatcher les recharge au démarrage et après chaque enregistrement.

---

## Actions de la barre supérieure

| Action | Effet |
|---|---|
| **Add** | Ouvre une modale demandant un nom et une description. Crée une règle dans un état désactivé tant qu'elle est vide — pas de déclencheur, canaux par défaut sur `portal`, type de destinataire par défaut sur `user`. |
| **Copy** | Duplique la règle sélectionnée sous un nouveau nom. Voie commode pour dériver une variante B2C d'une règle B2B, ou une règle par région à partir d'une règle générique. |
| **Remove** | Supprime la règle sélectionnée après confirmation. |
| **Save** | Réécrit l'état de l'éditeur dans `config-notifications.json` et signale au dispatcher de recharger. Le prochain changement de statut prend en compte la nouvelle règle. |

---

## La liste des règles

Chaque règle du catalogue présente deux indices visuels :

- **Description** en italique sous le nom de la règle — même champ que celui demandé par la modale *Add*, texte libre.
- **Pastille `on` / `off`** à droite de chaque ligne — liée à la propriété `enabled`. Une règle marquée `off` reste dans le catalogue mais n'est pas évaluée à l'envoi. Pratique pour itérer sur une règle sans la perdre.

Une zone de recherche en haut de la barre latérale filtre la liste par sous-chaîne sur le nom de règle.

---

## L'éditeur de règle

L'éditeur est structuré en quatre groupes de sections plus un panneau de test synchrone.

### Déclencheur

Le déclencheur définit **quand** la règle se déclenche. Deux champs se combinent, tous deux optionnels :

| Champ | Source | Comportement |
|---|---|---|
| **Statut** | Catalogue *statuses* | Liste de codes statut séparés par virgule (par ex. `9904,9907`). La règle se déclenche lorsque le code statut de la nouvelle transition figure dans la liste. Vide = correspondance sur tout statut. |
| **Motif** | Catalogue *rejection-reason-codes* | Liste de codes motif de rejet séparés par virgule (par ex. `REJ_ADR,REJ_FMT`). La règle se déclenche uniquement lorsque le code motif de la nouvelle transition figure dans la liste. Vide = correspondance sur tout motif. |

Les deux champs sont présentés sous forme de **multi-sélections à puces** — la sélection dans la liste déroulante ajoute une puce ; le × d'une puce la retire. La liste déroulante est alimentée par les ressources `statuses` et `rejection-reason-codes` qui alimentent aussi la modale *Set Status* et l'onglet *History* de la facture. Une règle ne peut donc référencer un code que l'application ne reconnaît pas.

Lorsque les deux champs sont renseignés, les deux conditions doivent correspondre (ET logique) pour que la règle se déclenche.

### Canaux

Trois cases, dans toute combinaison :

- **`portal`** — écrit une ligne dans `F564253` pour le destinataire. L'utilisateur la voit dans la boîte [Notifications](./notifications.md) et dans la cloche.
- **`email`** — envoie un message SMTP via le compte mail configuré sur le template `e-invoicing`.
- **`action`** — déclenche un appel HTTP sortant vers un endpoint d'*API Connector*.

Une règle qui n'émet aucun canal est sans effet et rejetée à l'enregistrement.

### Destinataire

Le modèle de destinataire comporte deux moitiés indépendantes : une **cible portail** et une **liste d'e-mails**.

| Champ | Description |
|---|---|
| **Type** | Choisit la cible portail — `user` (un nom d'utilisateur F564250 unique), `role` (tout utilisateur dont `URROLE` correspond à ce rôle), ou vide. Lorsque l'authentification est désactivée, l'option vide affiche *Diffusion — tous les utilisateurs* et écrit une seule ligne `F564253` sous la sentinelle `*`. |
| **Valeur** | Nom d'utilisateur ou nom de rôle sélectionné par *Type*. Texte libre — l'auto-complétion vient de la base connectée lorsqu'elle est disponible. |
| **CC** | Liste indépendante d'adresses e-mail, séparées par `,` ou `;`. Chaque adresse alimente l'en-tête `To:` de l'e-mail émis. L'`USEMAIL` éventuel de la cible portail (présent sur sa ligne `F564250`) est ajouté automatiquement. |

Lorsque la cible portail porte un `USEMAIL`, le canal *email* envoie à cette adresse et à chaque entrée de **CC** dans une **transaction SMTP unique**. Lorsque la lecture F564250 échoue, le canal portail est tout de même émis (la ligne est clé sur le nom d'utilisateur littéral) — la boîte de réception reste alimentée même pendant un incident transitoire de base.

### Contenu e-mail

| Champ | Valeur par défaut | Description |
|---|---|---|
| **Sujet** | `Invoice {doc} {dct} {kco} — {statusLabel}` | Ligne de sujet. Les placeholders sont résolus au moment de l'envoi. |
| **Corps** | `Status: {statusLabel}` `\n` `Reason: {reasonLabel}` `\n` `Action: {actionLabel}` | Corps en texte brut. Saisie multi-lignes. |
| **Attach PDF** | `Y` | Rend le PDF de la facture (via le `pdf-template` résolu) et l'attache à l'e-mail. Le PDF est rendu une seule fois par envoi et réutilisé pour chaque destinataire ; un échec de rendu est tracé mais ne fait pas échouer l'e-mail. |

Placeholders disponibles dans le sujet et le corps : `{doc}`, `{dct}`, `{kco}`, `{statusCode}`, `{statusLabel}`, `{statusMessage}`, `{reasonCode}`, `{reasonLabel}`, `{actionCode}`, `{actionLabel}`, `{ruleName}`, `{message}`.

Le `NTSUBJ` côté portail reprend le même sujet ; le `NTMSGE` côté portail prend par défaut juste `{statusLabel}`, la boîte de réception affichant déjà la référence du document en ligne — sa duplication dans le corps serait redondante.

### Appel d'action

Lorsque le canal **`action`** est activé, trois lignes supplémentaires apparaissent :

| Champ | Description |
|---|---|
| **Connecteur** | Liste déroulante des templates de type `api-connector`. Même jeu que sur [Process API](../processing/process-api.md). |
| **Endpoint** | Liste déroulante alimentée par `api.connectors.listEndpoints(connecteur)` une fois un connecteur choisi. |
| **Paramètres** | Pré-remplis depuis la liste de paramètres définie sur l'endpoint. Chaque ligne porte une clé (verrouillée) et une valeur (éditable). Les valeurs peuvent contenir les mêmes `{placeholders}` que le sujet et le corps de l'e-mail. |

L'appel d'action est émis dans la même transaction que l'écriture portail et l'envoi e-mail. Ses échecs sont tracés et n'annulent ni la mise à jour de statut sous-jacente ni les autres canaux.

### Panneau de test

Un déclencheur *Test* synchrone figure au pied du formulaire. Il accepte un triplet `(doc, dct, kco)`, optionnellement un code statut et un message personnalisé, puis **exécute réellement la règle** sur tous les canaux activés — l'écriture portail atterrit dans la boîte, l'e-mail part par SMTP, l'appel d'action est émis. La bannière de résultat indique les compteurs d'envoi (`✓ Émis · 1 portail · 2 e-mails`) ou la première erreur.

Le panneau de test n'enregistre pas la règle — il n'envoie que ce qui figure actuellement dans le formulaire. Outil de validation des modifications avant un clic sur *Save*.

---

## Déroulement d'une notification

Lorsqu'une transition de statut est appliquée (toute écriture en base touchant `F564231.UHK74RSCD`), le dispatcher parcourt le catalogue en trois temps.

```text
StatusTransition.apply()
   ↓
NotificationDispatcher.fire(doc, dct, kco, status, reason, action, message)
   ↓ — pour chaque règle où enabled = Y
   ↓     correspondance trigger.status (CSV) ∋ status
   ↓     ET  correspondance trigger.reason (CSV) ∋ reason   (ou trigger.reason = '')
   ↓ → résolution du destinataire (cible portail + liste e-mails)
   ↓ → rendu du PDF de la facture une seule fois si attachPdf = Y
   ↓ — pour chaque canal activé :
   ↓     • portal → INSERT dans F564253
   ↓     • email  → un message SMTP avec toutes les adresses sur To:
   ↓     • action → appel HTTP vers connecteur.endpoint avec paramètres résolus
   ↓ toutes les exceptions sont capturées — un échec n'annule jamais la mise à jour
```

Le dispatcher utilise un singleton avec un pool asynchrone de 2 threads ; le code appelant retourne immédiatement. Un crochet d'arrêt JVM vide le pool avec un sursis de 2 secondes avant l'arrêt du processus, pour que les flux CLI qui se terminent juste après une mise à jour de statut délivrent quand même leurs notifications.

---

## API REST

La page lit et écrit via les endpoints de templates standards ; le dispatcher expose une route supplémentaire pour le panneau de test.

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

- **Démarrer étroit, élargir ensuite.** Un déclencheur `9904 + REJ_ADR` est plus simple à valider qu'un fourre-tout `''`, et le bruit reste bas pendant que la liste des destinataires et le corps sont en cours de calage.
- **Utiliser le panneau Test avant l'enregistrement.** Tout particulièrement pour le canal *action* — le dispatcher absorbe les échecs ; un connecteur mal configuré reste donc silencieux en production. L'exécution de test fait remonter la même erreur en ligne.
- **Une règle par *finalité*, pas par code statut.** Regrouper plusieurs codes statut derrière une seule règle quand le corps est identique (`9904, 9907 → Rejet`) ; scinder en règles distinctes uniquement quand la liste des destinataires ou le corps diffèrent.
- **Les PDF sont coûteux.** `attachPdf` rend le PDF de la facture à chaque envoi — viable pour des règles à faible volume, onéreux pour des alertes sur l'ensemble du parc. Désactiver ce drapeau sur les règles déclenchées en `9900` (créée) ou `9901` (validée), où le PDF apporte rarement de la valeur.
- **Privilégier `role` à `user`.** Un destinataire fondé sur un rôle survit aux changements d'effectif ; un destinataire `user` impose une édition à chaque départ. La liste des rôles dans `F564251` est la source de vérité.
- **Désactiver plutôt que supprimer.** Lors d'itérations, basculer la règle sur `off` au lieu de la retirer — le catalogue conserve l'historique, le dispatcher l'ignore et l'exécution de test reste disponible.
- **Relire la boîte de réception après une livraison.** Les règles peuvent dériver des codes qu'elles référencent (un statut renommé dans le catalogue, un motif retiré) — la page [Notifications](./notifications.md) constitue le contrôle croisé le plus rapide pour vérifier la cohérence du catalogue de production avec les règles de cette page.
