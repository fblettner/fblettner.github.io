---
title: E-Documents
description: "Parcourez tout document capturé dans l'archive NomaUBL — pas seulement ceux devenus des factures — avec le spool source archivé et l'UBL généré, changez le type de transaction ou modifiez l'UBL d'une facture, et interrogez la même archive en REST."
keywords: [NomaUBL, e-documents, archive, documents, spool source, UBL généré, list-documents, API REST, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# E-Documents

La page **E-Documents** liste **tout document capturé dans l'archive** — pas seulement ceux devenus des factures. Un spool qui a échoué tôt, ou un type de document qui ne produit jamais de facture, reste visible ici. C'est le navigateur d'archive, à côté de la liste [E-Invoicing](./invoices.md) qui, elle, n'affiche que les factures.

Chaque ligne est un document tel qu'il a été reçu ; l'ouvrir montre le **spool source archivé** et, quand le document est devenu une facture, l'**UBL généré** — les deux formatés et téléchargeables.

---

## En un coup d'œil

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="edoc-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="30" y="24" width="940" height="252" rx="14" fill="url(#edoc-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="50" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">E-Documents</text>
  <rect x="620" y="38" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="632" y="53" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Activité · Client · Fichier source</text>
  <rect x="800" y="38" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="812" y="53" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Période</text>
  <line x1="30" y1="70" x2="970" y2="70" stroke="#1f2937" strokeWidth="1"/>

  <text x="50" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOCUMENT</text>
  <text x="215" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="300" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT</text>
  <text x="560" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif" textAnchor="end">MONTANT</text>
  <text x="640" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE DOC</text>
  <text x="740" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHIER SOURCE</text>
  <text x="910" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">→ PA</text>

  <g fontFamily="ui-monospace, monospace" fontSize="10" fill="#cbd5e1">
    <rect x="40" y="100" width="920" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
    <text x="50" y="117">26000001CG00005</text><text x="215" y="117">RI</text><text x="300" y="117" fontFamily="system-ui, sans-serif">ACME Distribution</text><text x="560" y="117" textAnchor="end">4 500,00</text><text x="640" y="117">2026-07-02</text><text x="740" y="117">SPOOL_4281.xml</text><text x="915" y="117" fill="#4ade80">✓</text>

    <rect x="40" y="132" width="920" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
    <text x="50" y="149">26000002CG00005</text><text x="215" y="149">RI</text><text x="300" y="149" fontFamily="system-ui, sans-serif">Beta Industries</text><text x="560" y="149" textAnchor="end">1 280,50</text><text x="640" y="149">2026-07-02</text><text x="740" y="149">SPOOL_4281.xml</text><text x="915" y="149" fill="#4ade80">✓</text>

    <rect x="40" y="164" width="920" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
    <text x="50" y="181">26000003DL00005</text><text x="215" y="181">DL</text><text x="300" y="181" fontFamily="system-ui, sans-serif">Gamma SARL</text><text x="560" y="181" textAnchor="end">—</text><text x="640" y="181">2026-07-01</text><text x="740" y="181">SPOOL_4280.xml</text><text x="915" y="181" fill="#64748b">—</text>
  </g>

  <rect x="40" y="204" width="920" height="56" rx="8" fill="rgba(74,158,255,0.05)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="54" y="226" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ouvrir un document →</text>
  <rect x="200" y="214" width="360" height="36" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="214" y="236" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Spool source archivé — formaté · téléchargeable</text>
  <rect x="576" y="214" width="360" height="36" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="590" y="236" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">UBL généré (si devenu facture) · téléchargeable</text>
</svg>

---

## Ce que montre chaque ligne

Les colonnes par défaut sont les champs de l'archive : **numéro de document**, **type**, **société**, **activité**, **sous-type**, un indicateur **envoi PA**, **client**, **montant**, **date du document**, **date d'archivage**, **fichier source** et l'**UUID PA**. Les filtres portent sur l'**activité**, le **client**, le **fichier source** et la **période** habituelle.

Les colonnes et filtres se règlent depuis *Paramètres → Vues de liste → E-Documents* — le même mécanisme de vue de liste qu'ailleurs : épinglez les colonnes que votre équipe consulte et masquez le reste. Le catalogue porte aussi les champs de refus — **motif de rejet**, **action attendue** et **note de statut** — pour qu'une vue d'archive affiche en colonne pourquoi un document a été refusé, sans avoir à l'ouvrir un par un.

---

## Ouvrir un document

Un clic sur une ligne ouvre la fenêtre du document, organisée en trois onglets :

- **Résumé** — les champs d'archive du document : statut, fichier source, client, type, numéro UBL, dates, montant, modèle, UUID PA.
- **XML source** — le spool source archivé, c'est-à-dire le document tel qu'il a été reçu, avant toute transformation.
- **UBL** — présent quand le document est devenu une facture ; l'UBL produit et envoyé.

La source et l'UBL s'affichent formatés et se **téléchargent**, nommé d'après le document. Quand le document a une [post-transformation](../ubl-tools/post-transform.md), le volet UBL propose aussi **Télécharger CII** (ou *Télécharger fichier converti*) : l'UBL archivé converti à la demande. Un document qui a échoué avant de produire un UBL n'affiche que le spool source — exactement ce qu'il faut pour comprendre pourquoi.

Quand le document a un **modèle** et une **source archivée**, la visionneuse propose aussi un bouton **Extract & Process** : il ré-extrait le spool archivé et le retraite avec le modèle du document — le même pipeline que la page [Extraire & Traiter](../processing/extract-and-process.md) en source *Archive*, les paramètres venant du document lui-même. Le mode remplacement est forcé, la nouvelle exécution écrasant le résultat précédent. Pratique pour régénérer les sorties d'un document après un changement de modèle ou de configuration.

### Changer le type ou modifier l'UBL \{#ubl-tab-actions\}

Dans l'onglet **UBL**, deux boutons sont proposés aux utilisateurs dont le rôle dispose du droit **Modifier l'UBL / changer le type** (voir [Accès](#accès)) :

<svg viewBox="0 0 1200 430" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="edubl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="edubl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="edubl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="edubl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="390" rx="14" fill="url(#edubl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">▤ Document 1042 / RI / 00001</text>
  <rect x="936" y="31" width="24" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="948.0" y="45.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="66" width="55" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="267.5" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Résumé</text>
  <rect x="301" y="66" width="78" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="340.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">XML source</text>
  <rect x="385" y="66" width="38" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="404.0" y="80.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL</text>
  <line x1="220" y1="96" x2="980" y2="96" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="108" width="470" height="238" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="130" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Invoice xmlns="urn:oasis:…:Invoice-2"&gt;</text>
  <text x="252" y="148" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:CustomizationID&gt;urn:cen.eu:en16931…&lt;/cbc:CustomizationID&gt;</text>
  <text x="252" y="166" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:ID&gt;F2026-1042&lt;/cbc:ID&gt;</text>
  <text x="252" y="184" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:IssueDate&gt;2026-11-20&lt;/cbc:IssueDate&gt;</text>
  <text x="252" y="202" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:InvoiceTypeCode&gt;380&lt;/cbc:InvoiceTypeCode&gt;</text>
  <rect x="246" y="208" width="200" height="16" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.4)" strokeWidth="1"/>
  <text x="252" y="220" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:Note&gt;#BAR#B2B&lt;/cbc:Note&gt;</text>
  <text x="252" y="238" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:DocumentCurrencyCode&gt;EUR&lt;/cbc:DocumentCurrencyCode&gt;</text>
  <text x="252" y="256" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cac:AccountingSupplierParty&gt;</text>
  <text x="252" y="274" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">    &lt;cac:Party&gt; …</text>
  <text x="252" y="292" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cac:AccountingCustomerParty&gt;</text>
  <text x="252" y="310" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">    &lt;cbc:RegistrationName&gt;ACME&lt;/cbc:RegistrationName&gt;</text>
  <text x="252" y="328" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  …</text>
  <rect x="730" y="108" width="230" height="238" rx="10" fill="#111827" stroke="#334155" strokeWidth="1.2"/>
  <text x="744" y="132" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Changer le type de transaction</text>
  <line x1="730" y1="144" x2="960" y2="144" stroke="#1f2937" strokeWidth="1"/>
  <text x="744" y="164" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE ACTUEL</text>
  <text x="744" y="182" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">B2B</text>
  <text x="744" y="206" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOUVEAU TYPE</text>
  <rect x="744" y="214" width="202" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="754" y="228.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">B2C – Relève du e-reporting… ▾</text>
  <text x="744" y="256" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Seul le type change : statut et</text>
  <text x="744" y="268" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">plateforme ne sont pas touchés.</text>
  <line x1="730" y1="298" x2="960" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <rect x="744" y="310" width="72" height="22" rx="5" fill="url(#edubl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="780.0" y="324.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Confirmer</text>
  <rect x="822" y="310" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="852.5" y="324.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <line x1="220" y1="360" x2="980" y2="360" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="372" width="134" height="22" rx="5" fill="url(#edubl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="307.0" y="386.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Extraire &amp; Traiter</text>
  <rect x="531" y="372" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="589.5" y="386.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Changer le type</text>
  <rect x="654" y="372" width="111" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="709.5" y="386.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier l'UBL</text>
  <rect x="771" y="372" width="128" height="22" rx="5" fill="url(#edubl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="835.0" y="386.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Télécharger l'UBL</text>
  <rect x="905" y="372" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.5" y="386.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Fermer</text>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet UBL</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'UBL enregistré, formaté</text>
  <line x1="1000" y1="57.0" x2="431" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type de transaction</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">note d'aiguillage #BAR# / #ADN#</text>
  <line x1="200" y1="217.0" x2="246" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Changer le type · Modifier</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">droit Modifier l'UBL / changer le type</text>
  <line x1="200" y1="347.0" x2="541" y2="383" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau type</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">parmi les types de document</text>
  <line x1="1000" y1="137.0" x2="960" y2="225" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
  <rect x="1000" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le type seul</text>
  <text x="1010" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ni validation, ni statut, ni envoi</text>
  <line x1="1000" y1="227.0" x2="960" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier → Enregistrer</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">revalidé à l'enregistrement</text>
  <line x1="1000" y1="347.0" x2="694" y2="372" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
</svg>

| Bouton | Effet |
|---|---|
| **Changer le type** | Ouvre la fenêtre *Changer le type de transaction* : le **Type actuel**, lu dans l'UBL, et un **Nouveau type** à choisir parmi les [types de document](../configuration/system/document-types.md) (B2B, B2C, B2G…). **Confirmer** écrit le nouveau type dans la note d'aiguillage de l'UBL enregistré (`#BAR#B2C`, ou `#ADN#B2G` pour B2G ; la note est ajoutée après le code de type si l'UBL n'en a pas) et dans l'en-tête de la facture : les listes l'affichent aussitôt. Seul le type change : aucune validation, aucun changement de statut, aucun envoi à la plateforme. |
| **Modifier l'UBL** | Ouvre l'UBL enregistré sous forme de texte dans un éditeur XML. **Enregistrer l'UBL** l'enregistre comme la fenêtre de facture enregistre une facture : l'UBL est validé de nouveau, la fenêtre affiche le statut obtenu et liste les anomalies au-dessus de l'éditeur. **Annuler** laisse l'UBL enregistré tel quel. Une facture déjà traitée par la plateforme est refusée (*Non enregistré : la facture a déjà été traitée par la plateforme*) ; il faut d'abord la déverrouiller par *Définir le statut*. |

Les deux actions rafraîchissent la liste derrière la fenêtre. Cas typique : une facture produite en B2B qui aurait dû être déclarée en B2C, corrigée avant son envoi.

---

## L'interroger en REST

La même archive est accessible depuis une application externe via `GET /api/list-documents` (documenté dans la référence d'API intégrée), avec des endpoints par document pour le spool source et l'UBL généré. C'est le point d'intégration pour un système en aval qui doit récupérer un document archivé sans passer par l'interface.

---

## Accès

La page suit les mêmes règles d'accès **société / rôle** que la liste [E-Invoicing](./invoices.md) — un utilisateur ne voit que les sociétés autorisées par son rôle. Accordez la page à un rôle depuis *Paramètres → Rôles* (sous *Navigation*) ; elle reste invisible tant qu'elle n'est pas accordée.

Les boutons **Changer le type** et **Modifier l'UBL** de l'onglet UBL demandent l'action **Modifier l'UBL / changer le type** (`invoice.edit-ubl`) sur le [rôle](../configuration/security/roles.md#action-catalog). Un rôle limité à une liste d'actions ne l'a pas tant qu'elle n'est pas cochée.

---

## Conseils et bonnes pratiques

- **Commencez ici quand un spool a « disparu ».** Si un document n'a jamais atteint la liste des factures, E-Documents indique s'il a été archivé et laisse lire son spool source pour trouver la cause.
- **Épinglez les colonnes que vous consultez.** Réglez une fois la vue de liste E-Documents (*Paramètres → Vues de liste*) pour que l'archive s'ouvre sur les champs qui comptent.
- **Utilisez l'endpoint REST pour les récupérations en aval.** `/api/list-documents` donne à un système externe la même archive sans extraction d'écran.
