---
title: XML
description: "Traiter un XML source unique — produire un PDF (SINGLE / BURST) ou générer une facture UBL 2.1 avec validation, persistance et dépôt optionnel sur la Plateforme Agréée (UBL)."
keywords: [NomaUBL, traitement, XML, UBL, PDF, transformation, XSL, validation, dépôt, PA, AUTO, SINGLE, BURST, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# XML

L'écran de traitement **XML** exécute un XML source dans le pipeline NomaUBL. Le mode sélectionné détermine la sortie produite :

- **Rendu PDF** (modes `SINGLE` / `BURST`) — application du XSL du template pour mettre en forme le XML source en un ou plusieurs fichiers PDF. Surtout utilisé pour des documents qui ne sont pas des factures (bons de livraison, relevés, documents internes) nécessitant simplement une mise en forme PDF.
- **Génération UBL 2.1** (mode `UBL`) — application du XSL du template pour produire une facture UBL 2.1, validation XSD + Schematron, persistance en base NomaUBL de l'en-tête / des lignes / de la TVA / du cycle de vie, et dépôt optionnel sur la Plateforme Agréée.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé. Le template choisi en haut détermine la transformation XSL exécutée et donc la mise en forme source supportée.

Pour des cas d'usage plus légers :

- *UBL Tools → Validate* exécute uniquement la transformation et la validation (sans écriture en base, sans dépôt).
- *UBL Tools → XSL Editor* permet d'éditer la transformation elle-même.
- *Sync → Fetch Input* exécute le même pipeline en lot sur un répertoire complet.

---

## Vue d'ensemble du pipeline

<svg viewBox="0 0 1000 720" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="xp-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="xp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="xp-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="xp-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="400" y="20" width="200" height="50" rx="10" fill="url(#xp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="40" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Fichier XML source</text>
  <text x="500" y="58" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">JDE / SAP / NS / custom</text>
  <rect x="410" y="100" width="180" height="50" rx="10" fill="url(#xp-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Mode</text>
  <text x="500" y="140" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="70" x2="500" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xp-arrow)"/>
  <rect x="20" y="190" width="200" height="60" rx="10" fill="url(#xp-g-slate)" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3"/>
  <text x="120" y="214" fill="currentColor" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Résolution AUTO</text>
  <text x="120" y="232" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">par document Document Types</text>
  <rect x="240" y="190" width="200" height="60" rx="10" fill="url(#xp-g-blue)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="340" y="214" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 SINGLE</text>
  <text x="340" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">XSL → 1 PDF</text>
  <rect x="460" y="190" width="200" height="60" rx="10" fill="url(#xp-g-blue)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="560" y="214" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📚 BURST</text>
  <text x="560" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">XSL + découpage → PDF</text>
  <rect x="680" y="190" width="200" height="60" rx="10" fill="url(#xp-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="780" y="214" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">📜 UBL</text>
  <text x="780" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">XSL → UBL 2.1</text>
  <path d="M 410 130 L 220 130 L 220 190" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#xp-arrow)"/>
  <text x="290" y="122" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">AUTO</text>
  <line x1="410" y1="135" x2="340" y2="190" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#xp-arrow)"/>
  <line x1="500" y1="150" x2="540" y2="190" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#xp-arrow)"/>
  <path d="M 590 130 L 780 130 L 780 190" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#xp-arrow)"/>
  <text x="710" y="122" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">UBL</text>
  <path d="M 120 190 L 120 80 L 410 80 L 410 100" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#xp-arrow-slate)"/>
  <text x="200" y="74" fontSize="9" fill="#94a3b8" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">→ SINGLE / BURST / UBL</text>
  <rect x="680" y="290" width="200" height="56" rx="10" fill="url(#xp-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="780" y="312" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ Validation</text>
  <text x="780" y="328" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">XSD + Schematron</text>
  <line x1="780" y1="250" x2="780" y2="290" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xp-arrow)"/>
  <rect x="680" y="386" width="200" height="56" rx="10" fill="url(#xp-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="780" y="408" fill="#4a9eff" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Persistance base</text>
  <text x="780" y="424" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">Replace : Skip / Overwrite</text>
  <line x1="780" y1="346" x2="780" y2="386" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xp-arrow)"/>
  <rect x="680" y="482" width="200" height="50" rx="10" fill="url(#xp-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="780" y="503" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Envoi PA</text>
  <text x="780" y="519" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="780" y1="442" x2="780" y2="482" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#xp-arrow)"/>
  <rect x="540" y="580" width="200" height="60" rx="10" fill="url(#xp-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="640" y="606" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 Plateforme Agréée</text>
  <text x="640" y="624" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Use settings</text>
  <rect x="780" y="580" width="200" height="60" rx="10" fill="url(#xp-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="880" y="606" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🏠 Statut local 99XX</text>
  <text x="880" y="624" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Skip sending</text>
  <path d="M 740 532 L 740 555 L 640 555 L 640 580" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#xp-arrow)"/>
  <text x="690" y="548" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Use settings</text>
  <path d="M 820 532 L 820 555 L 880 555 L 880 580" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#xp-arrow)"/>
  <text x="850" y="548" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Skip sending</text>
</svg>

`AUTO` n'exécute pas de pipeline propre — il aiguille chaque document du XML source vers `SINGLE`, `BURST` ou `UBL` selon la configuration par type de document définie dans *Document Types*. Seule la branche `UBL` enchaîne validation, persistance et dépôt PA ; `SINGLE` et `BURST` produisent une sortie PDF et s'arrêtent là.

---

## Input Configuration

| Champ | Description |
|---|---|
| **Template** | Template du document (par ex. `invoices`, `credit_notes`, `delivery_notes`). Sélectionne le pipeline XSL appliqué au XML source. |
| **Input File** | Nom de base (sans extension) du fichier XML source (par ex. `invoice_001`). Résolu dans le répertoire `dirInput` du template. |
| **Mode** | Mode de traitement — `AUTO`, `SINGLE`, `BURST` ou `UBL`. Voir le tableau ci-dessous. |
| **Replace** | `Skip` laisse intactes les factures déjà présentes en base ; `Overwrite` les ré-importe en remplaçant la version précédente. *Pris en compte uniquement lorsque la sortie est UBL.* |
| **Send to PA** | `Use settings` respecte les paramètres de dépôt du template *e-invoicing* ; `Skip sending` exécute le pipeline complet en local sans dépôt. *Pris en compte uniquement lorsque la sortie est UBL.* |

Deux boutons accompagnent le champ **Input File** :

| Bouton | Comportement |
|---|---|
| **Browse** (icône dossier) | Ouvre un sélecteur de fichiers côté serveur pour choisir un fichier existant. |
| **Upload** (icône envoi) | Téléverse un fichier `.xml` local dans le répertoire `dirInput` du template et le sélectionne comme entrée. Un template doit être choisi au préalable. |

Cliquer sur **Generate** pour lancer le pipeline.

---

## Modes

Le mode détermine **ce qui est produit** à partir du XML source.

| Mode | Sortie | Comportement |
|---|---|---|
| **AUTO** | PDF ou UBL | Résout le mode applicable par document via *Configuration → System → Document Types*. Défaut recommandé en production — typique lorsqu'un même spool mêle des factures (résolues en `UBL`) et des documents non facture (résolus en `SINGLE` ou `BURST`). |
| **SINGLE** | PDF | Rend l'intégralité du XML source en un **PDF unique**. Surtout utilisé pour les documents qui ne sont pas des factures — l'application réalise également de la mise en forme de document au format PDF. |
| **BURST** | PDF + index XML | Découpe le PDF source sur une clé (typique d'un spool multi-documents), produit **un PDF par valeur de clé** ainsi qu'un **fichier d'index XML** décrivant l'ensemble obtenu. L'index est consommé par les applications tierces qui doivent dispatcher chaque document indépendamment. |
| **UBL** | UBL 2.1 | Génère une **facture UBL 2.1** à partir du XML source. Exécute le pipeline complet : transformation, validation XSD + Schematron, persistance en base et dépôt optionnel sur la Plateforme Agréée. |

Cas d'usage typique d'`AUTO` : un spool unique couvrant plusieurs clients et plusieurs types de documents — les factures sont résolues en `UBL` et déposées, les bons de livraison en `SINGLE` et rendus en PDF, le tout en une seule exécution.

---

## Détail du pipeline UBL

Lorsque la sortie est UBL (mode `UBL`, ou `AUTO` résolu en `UBL` pour un document donné), le pipeline enchaîne quatre étapes :

1. **Transformation** — application du pipeline XSL du template pour produire un document UBL 2.1.
2. **Validation** — schéma XSD et règles métier Schematron.
3. **Persistance** — insertion en base NomaUBL de l'en-tête de facture, des lignes, des sous-totaux TVA, du cycle de vie et des résultats de validation.
4. **Dépôt** — envoi optionnel de l'UBL à la Plateforme Agréée configurée.

Les deux options ci-dessous — **Replace** et **Send to PA** — pilotent respectivement les étapes 3 et 4. Elles n'ont pas d'effet lorsque la sortie est PDF.

### Replace

Détermine le comportement lorsque la base contient déjà une facture avec la même clé (DOC + DCT + KCO).

| Valeur | Comportement |
|---|---|
| **Skip existing** | La facture existante est laissée intacte ; l'exécution journalise un message de doublon ignoré. Défaut pour les exécutions de production. |
| **Overwrite existing** | L'en-tête, les lignes, la TVA et le cycle de vie de la facture existante sont supprimés puis ré-importés à partir de la nouvelle transformation. Utile pour rejouer un traitement après correction de template. |

L'écrasement réinitialise également le cycle de vie à son état initial — l'historique côté PA se trouve désynchronisé du dossier local. Réserver `Overwrite` aux ré-imports véritables, pas aux mises à jour incrémentales.

### Send to PA

Détermine si l'UBL produit est déposé sur la Plateforme Agréée.

| Valeur | Comportement |
|---|---|
| **Use settings** | Respecte le paramètre **sendToPA** du template *e-invoicing*. Comportement de production. |
| **Skip sending** | Exécute la transformation, la validation et la persistance en base en local, sans dépôt sur la PA. La facture termine dans un statut local `99XX` — le code exact dépend du résultat de validation (succès, avertissements ou erreurs). Un **Resend** ultérieur depuis *Application → E-Invoicing* permet le dépôt par la suite. Voir la [Référence des statuts](../references/status-reference.mdx) pour le détail de chaque code. |

Le mode sans dépôt est utile lors de la mise au point d'un template ou de la relecture d'un lot déjà soumis — le pipeline local s'exécute intégralement sans produire de doublon de soumission.

---

## Résultats

Une fois le traitement terminé, la section **Results** affiche :

- Un message vert **Document generated successfully** — ou l'erreur renvoyée par l'API en cas d'échec.
- Une **table de logs structurée** avec une ligne par étape du pipeline. Chaque ligne contient :

| Colonne | Description |
|---|---|
| **Severity** | `FATAL`, `ERROR`, `WARNING` ou `INFO`. `FATAL` et `ERROR` bloquent le dépôt sur la PA ; `WARNING` et `INFO` sont informatifs. |
| **Module** | Composant du pipeline à l'origine de l'entrée — `XSL`, `XSD`, `Schematron`, `Database`, `PA` ou `Pipeline`. |
| **Submodule** | Étape ou identifiant de règle spécifique (par ex. `BR-FR-12`, `cbc:CustomizationID`, `F564231 INSERT`). |
| **Message** | Description lisible de l'échec, de l'alerte ou de l'événement de progression. |

Une exécution réussie journalise au moins une ligne par étape effectuée ; un échec interrompt le pipeline à l'étape fautive.

---

## Conseils & bonnes pratiques

- **Utiliser `AUTO` en production.** La résolution du mode est déléguée à *Document Types*, voie supportée pour mêler factures et documents non facture dans un même spool. `SINGLE`, `BURST` et `UBL` ne s'imposent que lorsque la mise en forme du spool est connue comme uniforme.
- **Valider le template avant mise en production.** Lancer un XML représentatif avec **Send to PA = Skip sending** d'abord, puis itérer dans l'*Éditeur XSL* jusqu'à obtenir une table de logs sans ligne `ERROR` ni `FATAL`.
- **Utiliser `BURST` lorsque l'index XML est consommé en aval.** Le fichier d'index liste chaque PDF découpé avec sa valeur de clé — schéma classique : un coupling avec une application de distribution / d'archivage qui utilise les clés pour classer les PDF.
- **Éviter `Overwrite` après un dépôt PA.** Une facture déposée porte une identité côté PA ; l'écrasement local désynchronise le dossier local de la PA. Utiliser *Application → E-Invoicing → Resend* si une nouvelle soumission est réellement nécessaire.
- **Le téléversement écrit dans le `dirInput` du template.** Ce répertoire est également balayé par *Sync → Fetch Input* en mode lot — le téléversement fait donc partie du prochain traitement par défaut.
