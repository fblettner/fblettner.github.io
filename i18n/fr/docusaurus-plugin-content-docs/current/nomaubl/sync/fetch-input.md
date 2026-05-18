---
title: Récupération des entrées
description: "Automatisation en lot de Extract and Process — balayage d'un répertoire ou de la file d'impression BIP, sélection des éléments dans une liste à cocher, puis exécution du même pipeline Extract → Process sur chaque élément retenu."
keywords: [NomaUBL, sync, fetch input, lot, batch, BIP, répertoire, last job number, JD Edwards, SAP, NetSuite, ERP personnalisé, balayage, sélection, traitement]
---

# Récupération des entrées

L'écran **Fetch Input** est l'**automatisation en lot** de [*Processing → Extract and Process*](../processing/extract-and-process.md). Il parcourt un répertoire de fichiers ou la file d'impression BIP, identifie les candidats, puis exécute le même pipeline Extract → Process sur chaque élément retenu.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — sauf pour la source BIP, qui est spécifique à JD Edwards.

La sémantique unitaire (résolution du mode, validation, persistance, dépôt PA, post-génération BIP) est documentée dans [*Extract and Process*](../processing/extract-and-process.md). Cette page ne documente que ce qui relève du fonctionnement en lot : l'enchaînement balayage → sélection → traitement, les sources, la récupération incrémentale via **Last Job Number** et les résultats agrégés.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fip-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fip-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fip-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="460" rx="14" fill="url(#fip-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Fetch Input</text>
  <rect x="690" y="30" width="90" height="22" rx="5" fill="url(#fip-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="735" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">🔎 Scanner</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Options de traitement</text>
  <text x="240" y="114" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE DE TRAITEMENT</text>
  <rect x="360" y="104" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="370" y="120" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <text x="576" y="120" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉPÔT PA</text>
  <rect x="640" y="104" width="120" height="24" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="700" y="120" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Use settings</text>

  <line x1="240" y1="146" x2="780" y2="146" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="170" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="320" y="160" width="100" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="370" y="176" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Annuaire</text>
  <rect x="424" y="160" width="100" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="176" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">BIP (JDE)</text>
  <text x="540" y="176" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">détermine si dirInput/ ou la table F95630 est lue</text>

  <text x="240" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST JOB NUMBER  <text fill="#64748b" fontStyle="italic">(BIP uniquement)</text></text>
  <rect x="420" y="198" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="213" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">42801</text>
  <text x="548" y="213" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">incrémental — seuls les jobs au-dessus sont retournés</text>

  <line x1="240" y1="238" x2="780" y2="238" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="262" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Candidats</text>
  <text x="320" y="262" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">5 trouvés · 3 sélectionnés</text>
  <rect x="660" y="252" width="118" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="719" y="267" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout sélectionner</text>

  <rect x="240" y="282" width="540" height="28" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="290" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="259" y="301" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="280" y="301" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">INV-2026-0142.xml · invoices · 18 Ko · aujourd'hui 12:34</text>

  <rect x="240" y="316" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="324" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="259" y="335" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="280" y="335" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">INV-2026-0143.xml · invoices · 18 Ko · aujourd'hui 12:35</text>

  <rect x="240" y="350" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="358" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="259" y="369" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="280" y="369" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CR-2026-0021.xml · credit_notes · 14 Ko · aujourd'hui 12:38</text>

  <rect x="240" y="384" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="392" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="280" y="403" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">INV-2026-0144.xml · invoices · 19 Ko · aujourd'hui 12:42</text>

  <rect x="240" y="418" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="426" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="280" y="437" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">DR-2026-0007.xml · debit_notes · 12 Ko · aujourd'hui 12:50</text>

  <rect x="240" y="456" width="200" height="24" rx="5" fill="url(#fip-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="340" y="472" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Traiter la sélection (3)</text>

  <rect x="20" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type de traitement + dépôt PA</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pilote le template et l'envoi PA</text>
  <line x1="220" y1="116" x2="360" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fip-arrow)"/>

  <rect x="20" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bascule de source</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Annuaire ou BIP (JDE)</text>
  <line x1="220" y1="176" x2="320" y2="172" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fip-arrow)"/>

  <rect x="820" y="200" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Last Job Number</text>
  <text x="830" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repère pour la récupération BIP</text>
  <line x1="820" y1="216" x2="540" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fip-arrow)"/>

  <rect x="20" y="316" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste à cocher</text>
  <text x="30" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">balayage → choix des éléments</text>
  <line x1="220" y1="332" x2="252" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fip-arrow)"/>

  <rect x="820" y="448" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="463" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Traiter la sélection</text>
  <text x="830" y="476" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exécute le pipeline par élément</text>
  <line x1="820" y1="464" x2="440" y2="468" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fip-arrow)"/>
</svg>

---

## Pipeline en un coup d'œil

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="fi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="fi-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="fi-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="370" y="20" width="260" height="60" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Configuration</text>
  <text x="500" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Process Type + source + paramètres</text>
  <rect x="410" y="110" width="180" height="60" rx="10" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="500" y="146" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔎 Balayage</text>
  <line x1="500" y1="80" x2="500" y2="110" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
  <rect x="410" y="200" width="180" height="50" rx="10" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="222" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Source</text>
  <text x="500" y="240" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="170" x2="500" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
  <rect x="40" y="290" width="280" height="80" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="180" y="316" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Liste jobs BIP</text>
  <text x="180" y="334" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">jobNumber &gt; Last Job Number</text>
  <text x="180" y="354" fill="currentColor" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">BIP Queue</text>
  <rect x="680" y="290" width="280" height="80" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="820" y="316" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📁 Liste fichiers .xml</text>
  <text x="820" y="334" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">dirInput/template/ ou /ubl/</text>
  <text x="820" y="354" fill="currentColor" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">Input Directory</text>
  <path d="M 410 230 L 380 230 L 380 300 L 320 300" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#fi-arrow)"/>
  <path d="M 590 230 L 620 230 L 620 300 L 680 300" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#fi-arrow)"/>
  <rect x="370" y="300" width="260" height="80" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="326" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☑ Liste des candidats</text>
  <text x="500" y="346" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">cases à cocher</text>
  <text x="500" y="362" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Select / Deselect All</text>
  <line x1="320" y1="350" x2="370" y2="340" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#fi-arrow)"/>
  <line x1="680" y1="350" x2="630" y2="340" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#fi-arrow)"/>
  <rect x="370" y="410" width="260" height="60" rx="10" fill="url(#fi-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="500" y="436" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Pour chaque élément retenu</text>
  <text x="500" y="454" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">pipeline Extract and Process</text>
  <line x1="500" y1="380" x2="500" y2="410" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
  <text x="510" y="395" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">Traitement sélection</text>
  <rect x="370" y="490" width="260" height="44" rx="9" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="500" y="510" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📊 Résultats agrégés</text>
  <text x="500" y="525" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">Total / Succeeded / Failed</text>
  <line x1="500" y1="470" x2="500" y2="490" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
</svg>

L'enchaînement est en **deux étapes** : un appel Scan recense les candidats sans déclencher de traitement ; l'utilisateur coche les éléments à conserver puis clique sur Process. L'étape de traitement parcourt la sélection en appliquant le pipeline Extract and Process par élément.

---

## Processing Options

La première section configure **comment chaque élément retenu est traité**. La sémantique correspond à [*Extract and Process — Traitement*](../processing/extract-and-process.md#traitement) ; cette page expose les mêmes options, qui s'appliquent ensuite à chaque élément retenu.

| Champ | Description |
|---|---|
| **Source** *(affichage en lecture seule)* | `XML` ou `UBL`. Inférée depuis la propriété `source` du modèle choisi — réglée sur la page [Documents](../management/documents.md), pas ici. Sélectionne le pipeline. Voir [*Traitement de document*](../processing/document.md) pour la sémantique unitaire. |
| **Mode** *(source XML uniquement)* | `AUTO`, `SINGLE`, `BURST` ou `UBL`. Voir [*Traitement de document — Modes (source XML)*](../processing/document.md#modes-source-xml). |
| **Mode** *(UBL uniquement)* | `Process & Validate` ou `Validate only`. |
| **Replace** | `Skip` laisse intactes les factures existantes ; `Overwrite` les ré-importe. |
| **Send to PA** | `Use settings` (défaut), `Skip sending`, ou `Force send` (UBL uniquement). |

Ces options s'appliquent uniformément à **tous** les éléments de la sélection. Pour traiter un sous-ensemble avec des options différentes, exécuter la page deux fois — une exécution par jeu d'options.

---

## Extract Options

La seconde section choisit la **source** et ses paramètres.

| Champ | Description |
|---|---|
| **Template** | Obligatoire si *Process As = XML*. Sélectionne le pipeline XSL appliqué à chaque élément. Masqué en mode UBL (les fichiers UBL sont repris directement depuis `dirInput/ubl/`). |
| **Source** | `BIP Queue` (spécifique à JD Edwards), `Input Directory`, ou `PA entrante (factures fournisseur)`. |

### Source = BIP Queue

| Champ | Description |
|---|---|
| **Language** | Filtre optionnel sur la langue BIP (par ex. `FR`). |
| **Extract Mode** | `Extract Input (XML)`, `Extract Output` ou `Extract Both`. Voir [*Extract BIP*](../extract/extract-bip.md) pour la sémantique. |
| **Last Job Number** | Pré-rempli depuis `global.lastBipJobNumber`. L'appel Scan ne retourne que les jobs dont `jobNumber > Last Job Number`. Le champ est modifiable pour rebalayer une autre plage, mais la configuration globale est mise à jour avec le plus grand numéro de job traité après chaque lot — la récupération incrémentale est le mode par défaut. |

### Source = Input Directory

Le balayage retourne tous les fichiers `.xml` présents dans :

- `dirInput/<template>/` quand *Process As = XML* ;
- `dirInput/ubl/` quand *Process As = UBL*.

Aucun paramètre supplémentaire — chaque fichier du répertoire est un candidat.

### Source = PA entrante (factures fournisseur)

Demander à la Plateforme Agréée la liste des factures adressées à l'opérateur depuis la dernière passe, puis choisir lesquelles télécharger et traiter.

| Champ | Description |
|---|---|
| **Modèle de document** | Le modèle `received-ubl` (ou tout modèle dont `direction = R`) — pré-filtré pour qu'un balayage *PA entrante* n'atterrisse jamais sur un modèle côté émission par erreur. |
| **Émise après** | Date d'émission la plus ancienne à considérer. Par défaut, le curseur enregistré dans le modèle *global* (`lastFetchReceivedAt`). Modifiable pour rattraper — le curseur est replacé sur la date d'émission la plus récente effectivement traitée à la fin de la passe. |
| **Inclure déjà importées** | Désactivé par défaut. La PA peut renvoyer deux fois le même UUID ; avec la case décochée, la déduplication contre `F564231` les écarte avant l'affichage des résultats. Cocher pour examiner chaque référence retournée par la PA, par exemple pour re-télécharger un UBL dont l'import précédent a échoué en plein traitement. |

Le balayage appelle la tâche `fetch-received-list` du connecteur API PA. Chaque ligne candidate porte l'UUID PA, le nom du fournisseur, le numéro de TVA du fournisseur, la date d'émission et le total. Cocher les lignes à traiter ; **Process (N)** appelle alors `fetch-received` sur chaque ligne cochée, télécharge l'UBL et exécute le pipeline UBL standard sur le modèle choisi.

Pour exécuter le même flux sans sélection manuelle, le planifier via `global.fetchReceivedInterval` (minutes entre passes, voir [Paramètres globaux](../configuration/system/global.md)) ou l'appeler en ligne de commande avec `-fetch-received` (voir [Ligne de commande](../management/command-line.md)).

---

## Balayage et sélection

Cliquer sur **Scan** pour alimenter la **liste des candidats**. La liste affiche une ligne par candidat avec une case à cocher ; les lignes sont sélectionnées par défaut. Au-dessus de la liste :

| Élément | Description |
|---|---|
| **Compteur** | `N file(s) found in <repertoire>` (mode Directory) ou `N new job(s) after #<lastJob>` (mode BIP). |
| **Select All / Deselect All** | Bascules de masse. |

Chaque ligne porte le nom de base du fichier (mode Directory) ou le nom de base du job BIP (mode BIP). Décocher une ligne l'exclut de l'appel Process suivant, sans modifier le répertoire ni la file BIP sous-jacents.

Cliquer sur **Process (N)** pour exécuter la sélection. Le bouton se désactive durant l'exécution et durant le balayage.

---

## Résultats

À l'issue du traitement, la section affiche un récapitulatif agrégé et la liste des résultats par élément.

### Bandeau de résumé

| Métrique | Description |
|---|---|
| **Total** | Nombre d'éléments traités. |
| **Succeeded** | Éléments terminés sans ligne `ERROR` ni `FATAL`. Les lignes `WARNING` ne comptent pas comme un échec. |
| **Failed** | Éléments ayant produit au moins une ligne bloquante. |

### Lignes par élément

Chaque élément apparaît sur une ligne avec un marqueur ✓ vert (succès) ou ✗ rouge (échec). **Cliquer sur une ligne déplie** la table de logs sous-jacente (mêmes colonnes que sur la page [*Traitement de document*](../processing/document.md) : `Severity / Module / Submodule / Message`).

Quand la source est BIP et que le traitement réussit, l'appel **Apply post-generation** s'exécute après chaque élément — exactement comme dans [*Extract and Process*](../processing/extract-and-process.md). Le `lastBipJobNumber` global est aussi mis à jour avec le plus grand numéro de job traité, ainsi le prochain Scan ne retourne que les jobs plus récents.

---

## Conseils & bonnes pratiques

- **Utiliser Fetch Input pour les exécutions automatisées.** Cette page est l'équivalent en lot de *Extract and Process* ; l'étape de sélection manuelle la rend adaptée aux traitements de fin de journée ou aux exécutions planifiées.
- **Garder `Last Job Number` comme repère.** La valeur par défaut correspond au dernier numéro de job traité avec succès — la laisser inchangée est la méthode standard pour la récupération incrémentale. Abaisser la valeur manuellement permet de relancer le traitement de jobs antérieurs.
- **Balayer d'abord, traiter ensuite.** L'enchaînement en deux étapes existe à dessein : une liste de candidats périmée, un mauvais choix de template ou une source erronée se manifeste dès la liste de candidats — avant tout effet de bord.
- **`Select All` et `Deselect All` sont des raccourcis en tête de liste.** Quand la liste comporte des centaines de lignes, basculer en masse puis affiner est plus rapide qu'un cochage individuel.
- **Décocher plutôt que supprimer.** Retirer le fichier sous-jacent ou le job BIP pour l'exclure est destructif ; un décochage sur cette page est réversible — la ligne réapparaît au prochain Scan si la source la conserve.
- **Pour BIP, `Apply post-generation` met à jour le repère.** Un job traité avec succès met automatiquement à jour `global.lastBipJobNumber` — aucune intervention manuelle n'est nécessaire.
