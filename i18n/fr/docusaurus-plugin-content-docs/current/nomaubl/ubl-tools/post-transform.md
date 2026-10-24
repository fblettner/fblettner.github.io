---
title: Post-transformation
description: "La post-transformation de NomaUBL — convertir l'UBL validé dans une autre syntaxe (CII D16B avec la feuille ubl-to-cii.xsl livrée, un format national avec votre propre feuille) tandis que l'UBL reste le pivot : fichier écrit à côté de l'UBL, téléchargement depuis la fenêtre de la facture, envoi par le connecteur de la plateforme."
keywords: [NomaUBL, post-transformation, CII, Cross Industry Invoice, D16B, UBL vers CII, format national, syntaxe de sortie, derivedContent, derivedFilePath, connecteur plateforme, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Post-transformation

Une **post-transformation** convertit l'UBL validé d'un document dans une autre syntaxe au moyen d'une feuille XSL : Cross Industry Invoice (CII) avec la feuille livrée avec NomaUBL, ou le format propre à un pays avec votre propre feuille. **L'UBL reste le pivot** : la base, les statuts, la validation et le routage continuent de s'appuyer sur l'UBL ; le fichier converti est une sortie supplémentaire, écrite à côté de l'UBL, téléchargeable depuis la fenêtre de la facture et, quand la plateforme l'attend, envoyée à sa place.

La post-transformation se règle par [document](../management/documents.md#ubl) et s'exécute dans les deux chaînes de traitement, quelle que soit la source — un spool JD Edwards, un extrait SAP ou NetSuite, un ERP personnalisé ou un fichier UBL.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="250" rx="14" fill="url(#pt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Post-transformation : l'UBL reste le pivot</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">L'UBL validé est converti dans une autre syntaxe ; base, statuts et routage restent sur l'UBL.</text>
  <rect x="240" y="96" width="120" height="54" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="300.0" y="120.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Source</text>
  <text x="300.0" y="135.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">spool · UBL · API</text>
  <line x1="360" y1="123" x2="390" y2="123" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="392" y="96" width="120" height="54" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="452.0" y="120.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL 2.1</text>
  <text x="452.0" y="135.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">XSLT UBL</text>
  <line x1="512" y1="123" x2="542" y2="123" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="544" y="96" width="130" height="54" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="609.0" y="120.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Validation</text>
  <text x="609.0" y="135.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">selon le jeu de règles</text>
  <line x1="674" y1="123" x2="704" y2="123" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="706" y="96" width="130" height="54" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="771.0" y="120.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Post-transformation</text>
  <text x="771.0" y="135.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ubl-to-cii.xsl</text>
  <line x1="836" y1="123" x2="860" y2="123" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="862" y="96" width="98" height="54" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="911.0" y="120.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fichier CII</text>
  <text x="911.0" y="135.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">…-cii.xml</text>
  <rect x="392" y="196" width="140" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="462.0" y="218.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Base</text>
  <text x="462.0" y="233.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">archive · cycle de vie</text>
  <line x1="452" y1="150" x2="452" y2="196" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="560" y="196" width="170" height="50" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="645.0" y="218.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Connecteur plateforme</text>
  <text x="645.0" y="233.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#123;content&#125;&#125; · &#123;&#123;derivedContent&#125;&#125;</text>
  <line x1="609" y1="150" x2="630" y2="196" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <line x1="910" y1="150" x2="690" y2="196" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#pt-flow)"/>
  <rect x="760" y="196" width="200" height="50" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="860.0" y="218.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fenêtre de la facture</text>
  <text x="860.0" y="233.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Télécharger CII — depuis l'archive</text>
  <line x1="910" y1="150" x2="880" y2="196" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="706" y="40" width="130" height="34" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="771.0" y="61.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Échec = avertissement</text>
  <line x1="771" y1="74" x2="771" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'UBL d'abord</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">génération et validation inchangées</text>
  <line x1="200" y1="113.0" x2="240" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pt-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pivot</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">base et statuts gardent l'UBL</text>
  <line x1="200" y1="217.0" x2="392" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pt-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ne bloque jamais</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avertissement POST_TRANSFORM</text>
  <line x1="1000" y1="57.0" x2="836" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pt-arrow)"/>
  <rect x="1000" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">À côté de l'UBL</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le suffixe remplace .xml</text>
  <line x1="1000" y1="127.0" x2="960" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pt-arrow)"/>
  <rect x="1000" y="205" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="220" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">À la demande</text>
  <text x="1010" y="233" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recalculé depuis l'UBL archivé</text>
  <line x1="1000" y1="222.0" x2="960" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pt-arrow)"/>
</svg>

---

## Réglages

Dans l'onglet **UBL** du [document](../management/documents.md#ubl) :

| Champ | Défaut | Description |
|---|---|---|
| **Post-transform** | *(vide = aucune)* | Feuille appliquée à l'UBL validé. Les variables de chemin sont acceptées (`%APP_HOME%`, `%ENV%`) et le bouton des variables les insère. Exemple : `%APP_HOME%/%ENV%/xsl/ubl-to-cii.xsl`. |
| **Post-transform output** | `-cii.xml` | Suffixe qui remplace le `.xml` du nom du fichier UBL : `F2026-1203.xml` donne `F2026-1203-cii.xml`. Le téléchargement reprend ce nom. |
| **Post-transform name** | *(vide)* | Nom court de la syntaxe produite, affiché sur les boutons de téléchargement : `CII` donne **Télécharger CII** ; vide donne **Télécharger fichier converti**. |

---

## Déroulement

1. La source est transformée en UBL puis validée selon le [jeu de règles](./rule-sets.md) du document, comme sans post-transformation.
2. Si la validation ne signale **aucune anomalie bloquante**, l'UBL passe par la feuille et le résultat est écrit **à côté du fichier UBL**, avec le suffixe de sortie.
3. Si la feuille échoue, l'échec est enregistré comme anomalie de niveau **avertissement** `POST_TRANSFORM` sur la facture, visible dans ses erreurs de validation et dans les [Erreurs d'intégration](../application/diagnostics/integration-errors.md). L'UBL poursuit son chemin : une facture n'est jamais bloquée par sa post-transformation.

Une facture qui présente une anomalie bloquante n'a pas de fichier converti ; il est produit au traitement suivant, une fois la facture corrigée et traitée de nouveau.

---

## Télécharger le fichier converti

La fenêtre de la facture ([E-Invoicing](../application/invoices.md)) et celle du document ([E-Documents](../application/edocuments.md)) affichent un bouton **Télécharger CII** (ou **Télécharger fichier converti**) quand le document a une post-transformation. Le fichier est **calculé à la demande à partir de l'UBL archivé** : il est donc disponible pour toute facture archivée, y compris celles traitées avant la mise en place de la post-transformation. Une erreur de conversion s'affiche dans la fenêtre (*Échec de la conversion : …*).

---

## Envoyer le fichier converti à la plateforme

Le corps du [connecteur API](../configuration/api-connectors.md) de la plateforme peut transmettre le fichier converti à la place de l'UBL, au moyen de deux variables :

| Variable | Valeur |
|---|---|
| `{{derivedContent}}` | Base64 du fichier converti, comme `{{content}}` pour l'UBL. Vide quand le document n'a pas de post-transformation. |
| `{{derivedFilePath}}` | Chemin du fichier converti sur le disque. Vide quand le document n'a pas de post-transformation. |

`{{content}}` et `{{filePath}}` désignent toujours l'UBL. Lors d'un renvoi, le fichier converti est recalculé à partir de l'UBL archivé. Le routage de la facture — destinataire, type de document, statuts — continue de lire l'UBL.

---

## La feuille livrée : UBL vers CII

`ubl-to-cii.xsl` convertit une Invoice ou une CreditNote UBL 2.1 en **Cross Industry Invoice D16B** selon le modèle de base EN 16931 : parties et identifiants, notes avec leurs codes de sujet, références, livraison, moyens de paiement avec l'IBAN ou un compte propriétaire, remises et charges, ventilation de TVA, lignes et pièces jointes. Elle a été contrôlée sur le corpus de démonstration avec les règles officielles EN 16931 pour CII. Le document UBL de [démonstration](../installation/demo-corpus.md) l'utilise.

---

## Autres formats

Un pays dont le format n'est pas UBL — une syntaxe nationale imposée par une plateforme ou une administration fiscale — se traite avec une feuille du même type : l'UBL en entrée, la syntaxe nationale en sortie. Les normes fondées sur UBL se traitent autrement, par un [jeu de règles](./rule-sets.md) qui leur est propre. Chaque circuit d'envoi national (connecteur, statuts) fait l'objet d'un paramétrage dédié.

---

## Conseils & bonnes pratiques

- **Valider d'abord l'UBL.** La post-transformation ne s'exécute que sur une facture sans anomalie bloquante : un UBL correct conditionne une conversion correcte.
- **Nommer la syntaxe.** *Post-transform name* remplace le bouton générique par *Télécharger CII*, plus parlant pour les utilisateurs.
- **Surveiller les avertissements POST_TRANSFORM** après la mise en place d'une nouvelle feuille : ils désignent les factures que la feuille ne sait pas traiter.
- **Placer ses propres feuilles dans l'environnement**, à côté des autres fichiers XSL, et écrire le chemin avec `%APP_HOME%` / `%ENV%` : le même réglage vaut alors pour tous les environnements.
