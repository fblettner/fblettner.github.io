---
title: Extraction et traitement
description: "Enchaîner une extraction (Archive / FTP / BIP) et un traitement (XML ou UBL) en un seul clic — équivalent à exécuter la page d'extraction puis la page de traitement correspondante l'une après l'autre."
keywords: [NomaUBL, traitement, extraction, enchaîné, archive, FTP, BIP, XML, UBL, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Extraction et traitement

L'écran **Extraction et traitement** exécute une **extraction** suivie d'un **traitement** en un seul clic. C'est l'équivalent en exécution d'enchaîner l'une des pages *Extract* puis la page *Processing* correspondante, avec les mêmes paramètres regroupés sur un formulaire unique.

La partie extraction propose les trois sources documentées dans *Extract* :

- [Extraction d'archive](../extract/extract-archive.md) — récupération d'un document archivé en base NomaUBL (XML source `F564230` ou UBL généré `F564231`) par clé documentaire.
- [Extraction FTP](../extract/extract-ftp.md) — téléchargement d'un fichier depuis un serveur SFTP via la clé rapport / version / langue / job.
- [Extraction BIP](../extract/extract-bip.md) — extraction d'un job de la file d'impression BI Publisher JD Edwards (XML d'entrée, sortie rendue ou les deux).

La partie traitement propose les deux pipelines documentés dans *Processing* :

- [Processing → XML](./xml.md) — transformation d'un XML source vers UBL (ou rendu PDF), puis validation, persistance et dépôt optionnel. Modes `AUTO` / `SINGLE` / `BURST` / `UBL`.
- [Processing → UBL](./ubl.md) — validation, persistance et dépôt optionnel d'un fichier déjà au format UBL 2.1.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé — à l'exception de la source BIP, spécifique à JD Edwards.

---

## Vue d'ensemble du pipeline

<svg viewBox="0 0 1000 760" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="ep-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#f87171"/></marker>
    <marker id="ep-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ep-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ep-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="ep-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ep-g-red" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87171" stopOpacity="0.16"/><stop offset="100%" stopColor="#f87171" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="430" y="20" width="140" height="50" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="50" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Exécuter</text>
  <rect x="410" y="100" width="180" height="50" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Source</text>
  <text x="500" y="140" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="70" x2="500" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ep-arrow)"/>
  <rect x="40" y="190" width="220" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="150" y="214" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📦 Extraction d'archive</text>
  <text x="150" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564230 / F564231</text>
  <rect x="380" y="190" width="240" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="214" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🌐 Extraction FTP</text>
  <text x="500" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">serveur SFTP</text>
  <rect x="740" y="190" width="220" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="850" y="214" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🖨 Extraction BIP</text>
  <text x="850" y="232" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">file d'impression JDE</text>
  <path d="M 410 130 L 150 130 L 150 190" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="280" y="122" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Archive</text>
  <line x1="500" y1="150" x2="500" y2="190" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#ep-arrow)"/>
  <text x="510" y="172" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">FTP</text>
  <path d="M 590 130 L 850 130 L 850 190" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="720" y="122" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">BIP</text>
  <rect x="380" y="290" width="240" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="314" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Fichier extrait</text>
  <text x="500" y="332" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">dans dirInput/template/</text>
  <line x1="150" y1="250" x2="380" y2="295" stroke="#4a9eff" strokeWidth="1.3" markerEnd="url(#ep-arrow)"/>
  <line x1="500" y1="250" x2="500" y2="290" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#ep-arrow)"/>
  <line x1="850" y1="250" x2="620" y2="295" stroke="#4a9eff" strokeWidth="1.3" markerEnd="url(#ep-arrow)"/>
  <rect x="410" y="380" width="180" height="50" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="402" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Extraction OK ?</text>
  <text x="500" y="420" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="350" x2="500" y2="380" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ep-arrow)"/>
  <rect x="40" y="380" width="220" height="50" rx="10" fill="url(#ep-g-red)" stroke="#f87171" strokeWidth="1.4"/>
  <text x="150" y="402" fill="#f87171" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⛔ Arrêt</text>
  <text x="150" y="420" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">traitement ignoré</text>
  <line x1="410" y1="405" x2="260" y2="405" stroke="#f87171" strokeWidth="1.4" markerEnd="url(#ep-arrow-red)"/>
  <text x="335" y="397" fontSize="9" fill="#f87171" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Non</text>
  <rect x="410" y="460" width="180" height="50" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="482" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Type de traitement</text>
  <text x="500" y="500" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="430" x2="500" y2="460" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ep-arrow)"/>
  <text x="510" y="448" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">Oui</text>
  <rect x="100" y="550" width="280" height="60" rx="10" fill="url(#ep-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="240" y="576" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Processing → XML</text>
  <text x="240" y="594" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">SINGLE / BURST / UBL / AUTO</text>
  <rect x="620" y="550" width="280" height="60" rx="10" fill="url(#ep-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="760" y="576" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Processing → UBL</text>
  <text x="760" y="594" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.85">Validate / Persist / Submit</text>
  <path d="M 410 510 L 240 510 L 240 550" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="320" y="502" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">XML</text>
  <path d="M 590 510 L 760 510 L 760 550" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)"/>
  <text x="680" y="502" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">UBL</text>
  <rect x="40" y="660" width="200" height="60" rx="10" fill="url(#ep-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="4 3"/>
  <text x="140" y="684" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Post-génération</text>
  <text x="140" y="702" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">mise à jour statut JDE</text>
  <rect x="410" y="660" width="180" height="60" rx="10" fill="url(#ep-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="684" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Résultat</text>
  <text x="500" y="702" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">bilan agrégé</text>
  <path d="M 100 580 L 60 580 L 60 690 L 40 690" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#ep-arrow-slate)"/>
  <text x="20" y="640" fontSize="9" fill="#94a3b8" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">source BIP, succès</text>
  <line x1="240" y1="690" x2="410" y2="690" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#ep-arrow-slate)"/>
  <path d="M 380 580 L 410 580 L 410 660" stroke="#94a3b8" strokeWidth="1.3" fill="none" markerEnd="url(#ep-arrow-slate)"/>
  <text x="395" y="640" fontSize="9" fill="#94a3b8" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">hors BIP</text>
  <line x1="760" y1="610" x2="590" y2="690" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#ep-arrow-slate)"/>
</svg>

L'enchaînement comporte deux étapes. L'extraction écrit un fichier dans `dirInput/<template>/` ; en cas de succès, le pipeline de traitement correspondant le reprend. Tout échec à l'extraction interrompt l'enchaînement — l'étape de traitement est sautée et seul le **Extraction Result** porte un message.

---

## Source

Le sélecteur **Source** en haut choisit l'un des trois canaux d'extraction. Le formulaire dessous s'adapte à la source choisie.

### Archive

Récupère un document archivé via sa clé documentaire en base.

| Champ | Description |
|---|---|
| **DOC** | Numéro de document — clé primaire de l'archive. |
| **DCT** | Code du type de document (par ex. `RI`, `RN`). |
| **KCO** | Code société (par ex. `00070`). |

Le fichier extrait est écrit dans `dirInput/<template>/` (avec `%TEMPLATE%` résolu) sous le nom `<DOC>_<DCT>_<KCO>.xml` (ou `_ubl.xml` si la source est UBL). Voir [Extraction d'archive](../extract/extract-archive.md) pour la référence complète.

### FTP

Télécharge un fichier depuis le serveur SFTP configuré.

| Champ | Description |
|---|---|
| **Report** | Nom de rapport (par ex. `R42565`). |
| **Version** | Version du rapport (par ex. `XJDE0001`). |
| **Language** | Code langue (par ex. `FR`). |
| **Job** | Numéro de job. |

Le fichier extrait est écrit dans `dirInput/<template>/<REPORT>_<VERSION>_<LANG>_<JOB>.xml`. Voir [Extraction FTP](../extract/extract-ftp.md) pour la référence complète.

### BIP

Extrait un job de la file d'impression BI Publisher JDE.

| Champ | Description |
|---|---|
| **Job Number** | Numéro de job BIP JDE (`RJJOBNBR`). |
| **Language** | Filtre optionnel sur la langue BIP. |
| **Extract Mode** | `Extract Input (XML)`, `Extract Output` ou `Extract Both`. Voir [Extraction BIP](../extract/extract-bip.md) pour la sémantique de chaque mode. |

Le nom de base du fichier extrait (`<report>_<version>_<job>`) est réutilisé comme entrée du traitement.

---

## Traitement

Sous le sélecteur de source, **Process Type** choisit entre les deux pipelines.

### Process Type = XML

Équivalent à l'exécution de la page [Processing → XML](./xml.md) sur le fichier qui vient d'être extrait.

| Champ | Description |
|---|---|
| **Template** | Template du document — obligatoire. Pilote le pipeline XSL et le jeu de règles de validation. |
| **Mode** | `AUTO`, `SINGLE`, `BURST` ou `UBL`. Voir [Processing → XML — Modes](./xml.md#modes). |
| **Replace** | `Skip` laisse intactes les factures existantes ; `Overwrite` les ré-importe. |
| **Send to PA** | `Use settings` (défaut) ou `Skip sending`. |

Lorsque la source est **BIP**, un appel **Apply post-generation** supplémentaire est réalisé après une exécution réussie — il met à jour le statut du job JDE, généralement pour le marquer comme traité.

### Process Type = UBL

Équivalent à l'exécution de la page [Processing → UBL](./ubl.md) sur le fichier qui vient d'être extrait. Le fichier extrait doit déjà être au format UBL — cas typiques :

- la source **Archive** est positionnée sur la variante UBL ;
- le système amont émet directement de l'UBL ;
- la source **BIP** est positionnée sur `Extract Output` et le rapport JDE produit du XML UBL en sortie (et non du PDF). Les fichiers UBL extraits de `F95631` sont alors repris directement par le pipeline UBL — aucune transformation XSL ne s'exécute.

| Champ | Description |
|---|---|
| **Mode** | `Process & Validate` (pipeline complet) ou `Validate only`. |
| **Replace Mode** | `Overwrite existing` (défaut) ou `Skip`. |
| **Send to PA** | `Use settings`, `Force send` ou `Skip sending`. |

Le fichier UBL doit respecter le motif `DOC_DCT_KCO.xml` ; voir [Processing → UBL](./ubl.md#convention-de-nommage).

#### Combinaisons non prises en charge

| Source | Process Type | Statut |
|---|---|---|
| BIP, *Extract Mode = Both* | UBL | Non pris en charge — l'ensemble extrait contient à la fois le XML et la sortie rendue, qui ne peut pas être traitée en UBL. |
| BIP, *Extract Mode = Both* avec plusieurs lignes de sortie | XML | Rejeté — l'extraction produit plusieurs fichiers, le pipeline XML attend un seul fichier par exécution. |

Un message d'erreur explicite apparaît dans la section **Process Result** lorsque l'une de ces combinaisons est tentée.

---

## Résultats

L'écran sépare le résultat en deux sections :

- **Extraction Result** — message renvoyé par l'API d'extraction ; renseigné en premier.
- **Process Result** — table de logs structurée du traitement (mêmes colonnes que sur les pages *XML* et *UBL* : Severity / Module / Submodule / Message) ; renseignée uniquement lorsque l'extraction a réussi et que le traitement s'est effectivement exécuté.

Si l'extraction échoue, l'étape de traitement est sautée — l'enchaînement s'interrompt au premier échec.

---

## Conseils & bonnes pratiques

- **Utiliser *Extraction et traitement* pour des exécutions ponctuelles.** La page combine deux opérations sur un seul écran : récupérer puis traiter un document tient en un clic. Pour des exécutions répétées et non assistées, préférer *Sync → Fetch Input* — il enchaîne le même pipeline en lot.
- **Adapter Process Type à la sortie d'extraction.** Le tableau des combinaisons ci-dessus liste les paires non prises en charge ; vérifier la cohérence entre le mode d'extraction BIP et le type de traitement choisi avant de cliquer sur Run.
- **Pour un workflow piloté par BIP, conserver Process Type sur XML.** Cette voie déclenche `Apply post-generation` en cas de succès, qui met à jour le statut du job JDE — sans cela, le même job sera ré-extrait au tour suivant.
- **Le résultat d'extraction conserve la sortie brute de l'API.** Lorsqu'une erreur survient côté extraction (job manquant, fichier introuvable, identifiants SFTP), le message renvoyé par l'API d'extraction reste le diagnostic canonique — à lire avant toute relance.
- **Skip sending lors de la mise au point d'un template.** Les deux pipelines exposent l'option (`No send` / `Skip sending`) — l'utiliser durant le développement d'un template évite de produire des doublons de soumission PA entre les itérations.
