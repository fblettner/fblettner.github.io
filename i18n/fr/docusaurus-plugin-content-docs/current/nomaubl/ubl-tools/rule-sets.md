---
title: Jeux de règles
description: "Les jeux de règles de NomaUBL — EN 16931 basique, EN 16931 et France étendu (CTC) : quels champs UBL une norme exige, quels jeux de validation s'appliquent, comment un document choisit son jeu, et comment l'onglet de mapping de l'éditeur XSL, la fenêtre de la facture et les pages de référence l'utilisent."
keywords: [NomaUBL, jeu de règles, EN 16931, CIUS-FR, CTC étendu, Factur-X extended, jeux de validation, Schematron, champs obligatoires, champs conditionnels, mapping, éditeur XSL, Vérifier le mapping, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Jeux de règles

Un **jeu de règles** décrit une norme selon laquelle une facture est produite : les champs UBL qu'elle exige, ceux qu'elle exige sous condition, ceux qu'elle laisse facultatifs, et les jeux de validation qui la contrôlent. NomaUBL livre trois jeux, produits à partir des données de la [référence UBL](../references/ubl-reference.mdx) pour ne jamais s'en écarter. Un document désigne son jeu ; le validateur applique alors les contrôles de ce jeu, et l'onglet de mapping de l'[éditeur XSL](./xsl-editor.md) indique, balise par balise, ce que le jeu attend — quel que soit le système source, JD Edwards, SAP, NetSuite ou un ERP personnalisé.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 408" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="348" rx="14" fill="url(#rs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Éditeur XSL · Mapping des variables</text>
  <text x="240" y="79" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jeu de règles</text>
  <rect x="320" y="64" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="78.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">France étendu (CTC) ▾</text>
  <rect x="522" y="64" width="433" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579.0" y="78.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Toutes les balises</text>
  <rect x="637" y="65" width="178" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="726.0" y="78.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Obligatoires et conditionnelles</text>
  <line x1="816" y1="69" x2="816" y2="81" stroke="#334155" strokeWidth="1"/>
  <text x="885.5" y="78.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Obligatoires manquantes</text>
  <rect x="240" y="102" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="257" y="111" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Afficher les balises hors du jeu</text>
  <rect x="830" y="96" width="130" height="22" rx="5" fill="url(#rs-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="895.0" y="110.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Vérifier le mapping</text>
  <rect x="240" y="130" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="149" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EN-TÊTE DE FACTURE</text>
  <text x="948" y="149" fill="#fb923c" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Obligatoires renseignées 4 / 5</text>
  <rect x="240" y="168" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="187" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TAG_DOCUMENT_ID</text>
  <text x="440" y="187" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">BT-1</text>
  <rect x="490" y="172" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="186.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">InvoiceNumber</text>
  <rect x="752" y="174" width="70" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="787.0" y="186.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">obligatoire</text>
  <rect x="240" y="202" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="221" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TAG_ISSUE_DATE</text>
  <text x="440" y="221" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">BT-2</text>
  <rect x="490" y="206" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="220.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">InvoiceDate</text>
  <rect x="752" y="208" width="70" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="787.0" y="220.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">obligatoire</text>
  <rect x="240" y="236" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="255" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TAG_INVOICE_TYPE_CODE</text>
  <text x="440" y="255" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">BT-3</text>
  <rect x="490" y="240" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="254.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Nom de la balise XML</text>
  <rect x="752" y="242" width="65" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="784.5" y="254.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">par défaut</text>
  <rect x="240" y="270" width="720" height="30" rx="6" fill="#0d1220" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="252" y="289" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TAG_DUE_DATE</text>
  <text x="440" y="289" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">BT-9</text>
  <rect x="490" y="274" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="288.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Nom de la balise XML</text>
  <rect x="752" y="276" width="75" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="789.5" y="288.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">conditionnel</text>
  <rect x="240" y="304" width="720" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="323" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TAG_ORDER_REF</text>
  <text x="440" y="323" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">BT-13</text>
  <rect x="490" y="308" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="322.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">OrderNumber</text>
  <rect x="752" y="310" width="60" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="782.0" y="322.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">optionnel</text>
  <text x="252" y="346" fill="#fb923c" fontSize="9" fontFamily="system-ui, sans-serif">BR-CO-25 — date d'échéance ou conditions de paiement obligatoires si le montant dû est positif</text>
  <rect x="20" y="58" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jeu de règles</text>
  <text x="30" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">présélectionné sur celui du modèle</text>
  <line x1="200" y1="75.0" x2="320" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Complétude du groupe</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">obligatoires avec source ou défaut</text>
  <line x1="200" y1="167.0" x2="252" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Badge de statut</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">obligatoire · conditionnel · optionnel…</text>
  <line x1="200" y1="267.0" x2="752" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Note de condition</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec les identifiants de règle</text>
  <line x1="200" y1="347.0" x2="252" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="1000" y="58" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <text x="1010" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">toutes · obligatoires · manquantes</text>
  <line x1="1000" y1="75.0" x2="950" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vérifier le mapping</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">champs manquants + échantillon validé</text>
  <line x1="1000" y1="137.0" x2="960" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rempli par les défauts</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les défauts UBL couvrent le champ</text>
  <line x1="1000" y1="247.0" x2="820" y2="243" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rs-arrow)"/>
</svg>

---

## Les jeux livrés

| Jeu | Champs | Identifiant de personnalisation | Jeux de validation |
|---|---|---|---|
| **EN 16931 basique** (`en16931-basic`) | 155 — le sous-ensemble BASIC que porte toute facture française | `urn:cen.eu:en16931:2017` | EN 16931, Flux 2 (CIUS-FR), CPRO B2G, règles spécifiques |
| **EN 16931** (`en16931`) | 243 — le modèle EN 16931 complet sous le CIUS français | `urn:cen.eu:en16931:2017` | EN 16931, Flux 2 (CIUS-FR), CPRO B2G, règles spécifiques |
| **France étendu (CTC)** (`fr-extended-ctc`) | 455 — EN 16931 plus l'extension française (champs EXT-FR-FE) | `urn:cen.eu:en16931:2017#conformant#urn:factur-x.eu:1p0:extended` | CTC-FR étendu (à la place d'EN 16931), Flux 2, CPRO B2G, règles spécifiques |

Chaque champ d'un jeu porte un statut :

| Statut | Signification |
|---|---|
| **obligatoire** | Le jeu exige le champ sur chaque facture. |
| **conditionnel** | Obligatoire sous condition — date d'échéance ou conditions de paiement quand un montant est dû (BR-CO-25), date ou code de période d'exigibilité de la TVA (BR-CO-03), identifiants du vendeur (BR-CO-26)… La note précise la condition et les identifiants de règle. |
| **optionnel** | Autorisé, non exigé. |
| **par défaut** | Obligatoire, et renseigné par les [valeurs UBL par défaut](./ubl-defaults/overview.md) quand le mapping le laisse vide. |
| **hors du jeu** | Le jeu ne connaît pas le champ — par exemple les balises EXT-FR-FE sous les deux jeux EN 16931. |

Un [Schematron spécifique](../management/documents.md#ubl) défini sur le document s'exécute toujours après les contrôles du jeu.

---

## Choisir le jeu d'un document

Dans l'onglet **UBL** du [document](../management/documents.md#ubl), le champ **Rule set** désigne le jeu :

- **vide** — *Derived from the UBL defaults (customization id and profile)* : le comportement d'un document qui ne désigne aucun jeu. Le jeu suit l'identifiant de personnalisation émis par les valeurs UBL par défaut — France étendu pour les profils étendus, EN 16931 sinon ;
- **un jeu** — le validateur applique les contrôles de ce jeu dans toutes les chaînes : traitement par lot et unitaire, page Traiter un document, validation depuis la fenêtre de la facture et vérification de l'éditeur XSL.

Les deux jeux EN 16931 et le jeu France étendu reprennent exactement les contrôles du choix déduit : désigner le jeu d'un document existant ne change aucune anomalie. Un identifiant de jeu inconnu est signalé par un avertissement, et le choix déduit s'applique.

---

## Dans l'éditeur XSL

L'onglet **Mapping des variables** de l'[éditeur XSL](./xsl-editor.md#rule-sets) s'appuie sur un jeu de règles :

- **Jeu de règles** — présélectionné sur le jeu du document, modifiable pour en prévisualiser un autre ; le choix est mémorisé dans le navigateur pour chaque fichier et ne modifie aucun fichier ;
- **un badge par balise** — obligatoire, conditionnel, optionnel, par défaut, hors du jeu — avec la note de la condition en info-bulle ;
- **filtres** — *Toutes les balises*, *Obligatoires et conditionnelles*, *Obligatoires manquantes* ; les balises hors du jeu restent masquées tant que **Afficher les balises hors du jeu** n'est pas cochée : les balises de l'extension française n'apparaissent donc que sous le jeu étendu ;
- **complétude par groupe** — *Obligatoires renseignées 4 / 5* : un champ obligatoire compte quand il a une source, une constante ou une valeur UBL par défaut ;
- **Vérifier le mapping** — liste les champs obligatoires du jeu sans source ni valeur par défaut, puis transforme l'échantillon chargé avec le mapping en cours et le valide avec les contrôles du jeu et les contrôles spécifiques du document. Le rapport regroupe les anomalies par champ et met en évidence les balises concernées. Rien n'est écrit en base et rien n'est envoyé.

---

## Ailleurs dans l'application

- **Fenêtre de la facture** — indique le jeu selon lequel la facture a été produite, lu dans son UBL archivé.
- **[Référence UBL](../references/ubl-reference.mdx)** — un filtre par jeu affiche les champs d'un jeu avec leur statut.
- **[Règles métier](../references/business-rules.mdx)** — le même filtre ne garde que les règles qui portent sur un champ du jeu.

---

## Adapter un jeu

Les jeux sont intégrés à l'application et produits à la construction à partir des données de la référence UBL. Un environnement peut en remplacer un par un fichier du même nom placé sous `<env>/config/rulesets/` (par exemple `en16931.json`), lu avant le jeu intégré. Les autres normes fondées sur UBL — Peppol BIS Billing, XRechnung… — s'ajoutent sous forme de jeux intégrés avec leurs contrôles. Les formats nationaux qui ne sont pas en UBL passent par une [post-transformation](./post-transform.md).

---

## Conseils & bonnes pratiques

- **Désigner le jeu de chaque document.** Le choix déduit fonctionne, mais un jeu explicite indique la norme visée et garde l'onglet de mapping aligné sur elle.
- **Lancer Vérifier le mapping sur un échantillon réel** avant le premier lot d'un nouveau document : les champs obligatoires manquants d'abord, puis les anomalies par champ.
- **Utiliser le filtre Obligatoires manquantes pendant le mapping.** Le formulaire se réduit à ce qui bloque encore le jeu.
- **Garder un Schematron spécifique pour les règles propres au client.** Le jeu de règles couvre la norme ; les contrôles propres au client restent dans les contrôles spécifiques du document.
