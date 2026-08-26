---
title: E-Documents
description: "Parcourez tout document capturé dans l'archive NomaUBL — pas seulement ceux devenus des factures — avec le spool source archivé et l'UBL généré côte à côte, et interrogez la même archive en REST."
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

Un clic sur une ligne ouvre une visionneuse à deux volets :

- **Spool source archivé** — le document exactement tel qu'il a été reçu, avant toute transformation.
- **UBL généré** — présent quand le document est devenu une facture ; l'UBL produit et envoyé.

Chaque volet s'affiche formaté et se **télécharge**, nommé d'après le document. Un document qui a échoué avant de produire un UBL n'affiche que le spool source — exactement ce qu'il faut pour comprendre pourquoi.

---

## L'interroger en REST

La même archive est accessible depuis une application externe via `GET /api/list-documents` (documenté dans la référence d'API intégrée), avec des endpoints par document pour le spool source et l'UBL généré. C'est le point d'intégration pour un système en aval qui doit récupérer un document archivé sans passer par l'interface.

---

## Accès

La page suit les mêmes règles d'accès **société / rôle** que la liste [E-Invoicing](./invoices.md) — un utilisateur ne voit que les sociétés autorisées par son rôle. Accordez la page à un rôle depuis *Paramètres → Rôles* (sous *Navigation*) ; elle reste invisible tant qu'elle n'est pas accordée.

---

## Conseils et bonnes pratiques

- **Commencez ici quand un spool a « disparu ».** Si un document n'a jamais atteint la liste des factures, E-Documents indique s'il a été archivé et laisse lire son spool source pour trouver la cause.
- **Épinglez les colonnes que vous consultez.** Réglez une fois la vue de liste E-Documents (*Paramètres → Vues de liste*) pour que l'archive s'ouvre sur les champs qui comptent.
- **Utilisez l'endpoint REST pour les récupérations en aval.** `/api/list-documents` donne à un système externe la même archive sans extraction d'écran.
