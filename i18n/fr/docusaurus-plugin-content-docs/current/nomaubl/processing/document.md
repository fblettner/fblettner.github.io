---
title: Traitement de document
description: "Point d'entrée unique pour traiter un (ou plusieurs) fichier facture. Le pipeline est sélectionné automatiquement selon la propriété source du modèle de document — spool XML (XSL → UBL) ou UBL 2.1 déjà formé — un même formulaire couvre les deux flux."
keywords: [NomaUBL, traitement, document, XML, UBL, source, idPattern, cbc:ID, AUTO, SINGLE, BURST, validation seule, envoi PA, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Traitement de document

L'écran **Traitement de document** est le point d'entrée unique du traitement dans NomaUBL. Il exécute un modèle de document sur un (ou plusieurs) fichier source et :

1. lit la propriété `source` du modèle (`XML` ou `UBL`) ;
2. aiguille vers le pipeline correspondant — transformation XSL pour les spools XML, validation directe pour les factures déjà au format UBL ;
3. valide avec XSD + Schematron, enregistre en base, et (selon l'option *Send to PA*) dépose sur la Plateforme Agréée ou s'arrête sur un statut local.

Les pages **Process XML** et **Process UBL** des versions précédentes disparaissent — le formulaire ci-dessous reconfigure ses contrôles selon le modèle choisi. Une seule page, une seule route REST (`POST /api/process`), une seule commande CLI (`-process`).

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé.

---

## Choix de la source

La première décision d'un modèle de document est sa **Source**. Elle se définit dans **[Documents](../management/documents.md) → onglet Document → champ Source** et elle est lue ici :

| Source | Quand la choisir | Ce qui s'exécute |
|---|---|---|
| **XML** | Spool XML provenant de tout ERP qui demande une transformation vers UBL. Sortie BIP JDE, XML dérivé d'IDoc SAP, XML issu d'une saved-search NetSuite, exports d'ERP personnalisés. | Transformation XSL → UBL 2.1 → XSD + Schematron → BDD → dépôt PA optionnel. La page propose le sélecteur *Mode* (AUTO / SINGLE / BURST / UBL) et le sélecteur *Send to PA*. |
| **UBL** | Le fichier est déjà une facture UBL 2.1 (l'ERP émet de l'UBL nativement, ou le fichier provient d'une PA en aval au format UBL). | Lecture de la facture, extraction de `(doc, dct, kco)` depuis `cbc:ID`, validation, persistance, dépôt optionnel. La page propose un mode *Validate only* et un sélecteur *Send to PA*. |

Une fois le modèle sélectionné, le champ **Source** du formulaire affiche la valeur résolue, et le reste du formulaire se reconfigure automatiquement.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pdui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pdui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pdui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#pdui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Traitement de document</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE</text>
  <rect x="320" y="82" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <text x="540" y="98" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <rect x="600" y="82" width="100" height="24" rx="5" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="650" y="98" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">XML</text>
  <text x="712" y="98" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">lecture seule</text>

  <text x="240" y="130" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHIER</text>
  <rect x="320" y="120" width="280" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="136" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">INV-2026-0143.xml</text>
  <rect x="612" y="120" width="80" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="652" y="136" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📁 Parcourir</text>
  <rect x="700" y="120" width="80" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="740" y="136" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬆ Téléverser</text>

  <line x1="240" y1="158" x2="780" y2="158" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="182" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Mode (XML)</text>
  <rect x="340" y="172" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="380" y="187" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">AUTO</text>
  <rect x="424" y="172" width="80" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="464" y="187" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">SINGLE</text>
  <rect x="508" y="172" width="80" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="548" y="187" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">BURST</text>
  <rect x="592" y="172" width="80" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="632" y="187" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL</text>

  <text x="240" y="218" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Dépôt PA</text>
  <rect x="340" y="208" width="120" height="22" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="400" y="223" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Use settings</text>
  <rect x="464" y="208" width="120" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="524" y="223" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Skip sending</text>

  <text x="240" y="254" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Remplacement</text>
  <rect x="370" y="244" width="100" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="420" y="259" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Skip</text>
  <rect x="474" y="244" width="100" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="524" y="259" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Overwrite</text>

  <rect x="240" y="284" width="160" height="28" rx="6" fill="url(#pdui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="320" y="302" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Traiter</text>

  <line x1="240" y1="324" x2="780" y2="324" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="348" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Résultats</text>

  <rect x="240" y="362" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="377" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY · MODULE · SUBMODULE · MESSAGE</text>

  <rect x="240" y="388" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="392" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="402" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="402" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">XSL · transform · INV-2026-0143 → UBL 2.1</text>

  <rect x="240" y="414" width="540" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="418" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="428" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="428" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">VAL · XSD + Schematron · 0 erreur · enregistré (9905 → 200)</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modèle + source</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la source reconfigure le formulaire</text>
  <line x1="220" y1="98" x2="320" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdui-arrow)"/>

  <rect x="20" y="172" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de mode</text>
  <text x="30" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">AUTO / SINGLE / BURST / UBL</text>
  <line x1="220" y1="188" x2="340" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdui-arrow)"/>

  <rect x="820" y="208" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="223" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Politique PA</text>
  <text x="830" y="236" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">propre à cette exécution</text>
  <line x1="820" y1="224" x2="584" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdui-arrow)"/>

  <rect x="20" y="284" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="299" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bouton unique</text>
  <text x="30" y="312" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exécute le pipeline résolu</text>
  <line x1="220" y1="300" x2="240" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdui-arrow)"/>

  <rect x="820" y="400" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Journal d'étapes</text>
  <text x="830" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">transformation · validation · BDD</text>
  <line x1="820" y1="416" x2="780" y2="416" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdui-arrow)"/>
</svg>

---

## Vue d'ensemble du pipeline

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="pd-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="pd-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="pd-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="380" y="20" width="240" height="56" rx="10" fill="url(#pd-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Fichier source</text>
  <text x="500" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">choisi ou téléversé</text>
  <rect x="400" y="100" width="200" height="50" rx="10" fill="url(#pd-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ template.source</text>
  <text x="500" y="140" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="76" x2="500" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#pd-arrow)"/>
  <rect x="60" y="200" width="280" height="60" rx="10" fill="url(#pd-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="200" y="226" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Pipeline XML</text>
  <text x="200" y="244" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">XSL → UBL · AUTO / SINGLE / BURST / UBL</text>
  <rect x="660" y="200" width="280" height="60" rx="10" fill="url(#pd-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="800" y="226" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Pipeline UBL</text>
  <text x="800" y="244" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">parser cbc:ID · valider · persister</text>
  <path d="M 400 130 L 200 130 L 200 200" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#pd-arrow)"/>
  <text x="270" y="122" fontSize="10" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">XML</text>
  <path d="M 600 130 L 800 130 L 800 200" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#pd-arrow)"/>
  <text x="730" y="122" fontSize="10" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">UBL</text>
  <rect x="380" y="300" width="240" height="56" rx="10" fill="url(#pd-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="500" y="324" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ Validation</text>
  <text x="500" y="340" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">XSD + Schematron</text>
  <line x1="200" y1="260" x2="380" y2="305" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#pd-arrow)"/>
  <line x1="800" y1="260" x2="620" y2="305" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#pd-arrow)"/>
  <rect x="380" y="380" width="240" height="50" rx="10" fill="url(#pd-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="500" y="402" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Persistance BDD</text>
  <text x="500" y="420" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564231 + UHTMPL = modèle</text>
  <line x1="500" y1="356" x2="500" y2="380" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#pd-arrow)"/>
  <rect x="160" y="460" width="240" height="60" rx="10" fill="url(#pd-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="280" y="484" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 Plateforme Agréée</text>
  <text x="280" y="502" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Use settings · Force send</text>
  <rect x="600" y="460" width="240" height="60" rx="10" fill="url(#pd-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="720" y="484" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🏠 Statut local 99XX</text>
  <text x="720" y="502" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Skip sending</text>
  <path d="M 380 410 L 280 410 L 280 460" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#pd-arrow)"/>
  <text x="335" y="402" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">envoi</text>
  <path d="M 620 410 L 720 410 L 720 460" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#pd-arrow)"/>
  <text x="675" y="402" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">arrêt</text>
</svg>

`replaceMode = Y` purge les cinq tables UBL (`F564231` / `F564233` / `F564234` / `F564235` / `F564236`) pour le triplet `(doc, dct, kco)` correspondant avant le re-traitement — comportement identique sur les chemins XML et UBL.

---

## Le formulaire

Le formulaire comporte quatre contrôles communs et des champs spécifiques par source.

| Champ | Source | Description |
|---|---|---|
| **Template** | les deux | Modèle de document (resource type `document`). Le sélecteur liste tout modèle figurant dans `config-documents.json`. |
| **Source** | les deux | Affichage en lecture seule de la valeur `source` résolue du modèle. Changer de modèle met à jour ce champ et reconfigure le formulaire. |
| **Select File** | les deux | Deux boutons — *Upload File* (sélecteur de fichiers du navigateur) ou *Browse Server* (ouvre l'explorateur de fichiers embarqué dans `dirInput`). Les téléversements XML sont copiés dans le répertoire de travail du modèle ; les téléversements UBL atterrissent dans `<dirInput>/ubl/`. |
| **Mode** | XML | `AUTO` (défaut), `SINGLE`, `BURST` ou `UBL`. Voir [Modes (source XML)](#modes-source-xml) ci-dessous. |
| **Send to PA** | XML | `Use settings` (défaut) ou `Skip sending`. |
| **Mode** | UBL | `Process & Validate` (défaut) ou `Validate only`. |
| **Send to PA** | UBL | `Use settings`, `Force send` ou `Skip sending`. *Force send* est la surcharge propre à UBL qui contourne l'option `sendToPA` du template e-invoicing. |
| **Replace** | les deux | `Skip` laisse intactes les lignes existantes ; `Overwrite` purge les cinq tables UBL pour le même `(doc, dct, kco)` et ré-importe proprement. |

---

## Modes (source XML)

| Mode | Sortie | Utilisation typique |
|---|---|---|
| **AUTO** | PDF ou UBL | Résout le mode applicable par document via *UBL Defaults → Document Type / BAR Routing*. Défaut recommandé en production — pratique quand un même spool XML mélange factures (résolues en `UBL`) et documents non-factures (résolus en `SINGLE` / `BURST`). |
| **SINGLE** | PDF | Génère l'intégralité du spool XML en un **PDF unique**. Utile pour les documents non-factures qui n'ont besoin que d'une mise en forme PDF. |
| **BURST** | PDF + index XML | Découpe le spool source sur une clé (typique des spools multi-documents), produit **un PDF par valeur de clé** et un **fichier d'index XML** qui décrit l'ensemble obtenu. L'index est utilisé par les applications tierces qui doivent dispatcher chaque document séparément. |
| **UBL** | UBL 2.1 + PDF | Exécute le XSL document vers UBL 2.1, valide, enregistre et (selon *Send to PA*) dépose. Réglage explicite recommandé une fois le routage *AUTO* validé pour un modèle. |

`AUTO` n'est *pas* un pipeline à part — il aiguille chaque document du XML source vers `SINGLE`, `BURST` ou `UBL` selon la configuration *Document Types*. Seule la branche `UBL` enchaîne validation, enregistrement et dépôt PA ; `SINGLE` / `BURST` produisent une sortie PDF et s'arrêtent là.

---

## Modes (source UBL)

| Mode | Ce qui s'exécute |
|---|---|
| **Process & Validate** *(défaut)* | Lecture de la facture UBL, extraction de `(doc, dct, kco)` depuis `cbc:ID` (regex du modèle), validation XSD + Schematron, enregistrement dans `F564231` / `F564233` / `F564234` / `F564235` / `F564236`, écriture de l'événement de cycle de vie. *Send to PA* s'applique. |
| **Validate only** | Exécute XSD + Schematron uniquement. Aucune écriture en base, aucun dépôt PA. Le tableau de résultats affiche chaque erreur avec sévérité / source / règle / message — mêmes colonnes que la page [Erreurs d'intégration](../application/integration-errors.md). À utiliser comme contrôle rapide avant d'enregistrer le fichier en base. |

**Plus de convention de nommage.** Le traitement UBL extrait toujours `(doc, dct, kco)` depuis le `cbc:ID` de la facture via la regex `idPattern` du modèle. La convention `DOC_DCT_KCO_ubl.xml` n'est plus exigée — les fichiers peuvent avoir n'importe quel nom.

---

## API REST

```http
POST /api/process
Content-Type: application/json

{
  "template":     "invoices",
  "file":         "/chemin/vers/fichier.xml",
  "mode":         "AUTO",            // source XML
  "validateOnly": false,             // source UBL
  "sendToPA":     "",                // UBL: "" | "Y" | "N"
  "noSend":       false,             // XML: désactive le dépôt
  "replaceMode":  false              // les deux: purge avant ré-import
}
```

La route remplace les anciens `/api/run` (XML) et `/api/process-ubl` (UBL). La réponse est diffusée sous forme d'une suite d'événements de log avec un marqueur de fin — même format des deux côtés. Une seule intégration côté client couvre donc les deux pipelines.

---

## CLI

```bash
nomaubl.sh process <config.json> <modèle> <fichierOuRépertoire> [type] [drapeaux]
```

Remplace les anciens drapeaux `-xml` et `-ubl`. Le CLI lit la propriété `source` du modèle dans `config-documents.json` et aiguille vers le pipeline correspondant. Voir [Command Line](../management/command-line.md) pour la liste complète des drapeaux.

---

## Conseils & bonnes pratiques

- **Choisir la bonne source au niveau du modèle, pas au moment de l'exécution.** `Source` se définit sur le modèle de document ; la page *Traitement de document* la lit simplement. Une définition unique dans [Documents](../management/documents.md) garantit la cohérence de tous les points d'entrée (cette page, *Fetch Input*, le CLI, le planificateur).
- **Utiliser *Validate only* avant l'enregistrement.** À l'import de fichiers UBL provenant d'un nouveau système amont, lancer d'abord *Validate only* pour faire remonter les échecs XSD / Schematron sans polluer la base.
- **`AUTO` en production, explicite pour le débogage.** Les modèles de production utilisent en général `AUTO` pour que la table des types de document pilote l'aiguillage par ligne. Lors du débogage d'un modèle isolé, repasser au mode `UBL` explicite rend la trace sans ambiguïté.
- **`Replace = Overwrite` purge cinq tables.** En-tête (`F564231`), lignes (`F564233`), TVA (`F564234`), cycle de vie (`F564235`) et erreurs de validation (`F564236`) — l'historique et les erreurs de l'exécution précédente n'interfèrent pas avec la nouvelle exécution.
- **Pour les exécutions par lots automatisées, préférer [Synchronisation → Fetch Input](../sync/fetch-input.md).** Cette page convient aux exécutions ad hoc d'un seul document ou spool. *Fetch Input* enchaîne le même pipeline sur plusieurs fichiers d'un coup, avec la configuration par modèle déjà appliquée.
