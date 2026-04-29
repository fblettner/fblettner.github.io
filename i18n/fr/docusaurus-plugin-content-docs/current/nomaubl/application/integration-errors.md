---
title: Erreurs d'intégration
description: "Liste des erreurs de validation ayant empêché la création d'une facture — échecs de transformation UBL stockés dans F564236 sans en-tête de facture correspondant. Filtre par sévérité, recherche par clé documentaire, accès au détail."
keywords: [NomaUBL, erreurs d'intégration, validation, F564236, échec de transformation, FATAL, ERROR, WARNING, INFO, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Erreurs d'intégration

L'écran **Integration Errors** liste toutes les erreurs de validation ayant **empêché la création d'une facture**. Il s'agit d'entrées stockées dans la table de validation (`F564236`) **sans ligne correspondante dans la table d'en-tête** (`F564231`) — la transformation a échoué avant que l'en-tête puisse être persisté, le document n'est donc jamais entré dans la liste E-Invoicing.

Causes typiques d'une erreur d'intégration :

- Un XML source mal formé que la transformation XSL n'a pas pu consommer.
- Un champ UBL obligatoire absent ou illisible dans les données source.
- Un échec XSD ou Schematron suffisamment grave (`FATAL`) pour interrompre le pipeline avant l'insertion en base.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé.

C'est la **vue de surveillance systématique** de ces échecs. La carte compteur *Erreurs de validation non rattachées* du tableau de bord donne le coup d'œil rapide ; cette page est l'endroit où chaque ligne est instruite.

---

## Origine de ces erreurs

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ie-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="ie-arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4ade80"/></marker>
    <marker id="ie-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#f87171"/></marker>
    <marker id="ie-arrow-orange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#fb923c"/></marker>
    <linearGradient id="ie-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ie-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ie-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.18"/><stop offset="100%" stopColor="#4ade80" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ie-g-red" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87171" stopOpacity="0.16"/><stop offset="100%" stopColor="#f87171" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ie-g-orange-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fb923c" stopOpacity="0.28"/><stop offset="100%" stopColor="#fb923c" stopOpacity="0.08"/></linearGradient>
  </defs>
  <rect x="20" y="120" width="170" height="80" rx="12" fill="url(#ie-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="105" y="150" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 XML source</text>
  <text x="105" y="172" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">JDE / SAP / NS / custom</text>
  <rect x="220" y="120" width="220" height="80" rx="12" fill="url(#ie-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="330" y="150" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙️ Pipeline de traitement</text>
  <text x="330" y="172" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">XSL · XSD · Schematron · Base</text>
  <rect x="490" y="40" width="220" height="60" rx="12" fill="url(#ie-g-green)" stroke="#4ade80" strokeWidth="1.5"/>
  <text x="600" y="64" fill="#4ade80" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 En-tête facture</text>
  <text x="600" y="83" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">persisté en F564231</text>
  <rect x="490" y="220" width="220" height="60" rx="12" fill="url(#ie-g-red)" stroke="#f87171" strokeWidth="1.5"/>
  <text x="600" y="244" fill="#f87171" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔴 Validation orpheline</text>
  <text x="600" y="263" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564236, sans F564231</text>
  <rect x="760" y="40" width="220" height="60" rx="12" fill="url(#ie-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="870" y="64" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ E-Invoicing</text>
  <text x="870" y="83" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Application →</text>
  <rect x="760" y="220" width="220" height="60" rx="12" fill="url(#ie-g-orange-strong)" stroke="#fb923c" strokeWidth="2"/>
  <text x="870" y="244" fill="#fb923c" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚠ Cette page</text>
  <text x="870" y="263" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Liste Integration Errors</text>
  <line x1="190" y1="160" x2="220" y2="160" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ie-arrow-blue)"/>
  <path d="M 440 145 L 470 145 L 470 70 L 490 70" stroke="#4ade80" strokeWidth="1.5" fill="none" markerEnd="url(#ie-arrow-green)"/>
  <text x="455" y="105" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">succès</text>
  <path d="M 440 175 L 470 175 L 470 250 L 490 250" stroke="#f87171" strokeWidth="1.5" fill="none" markerEnd="url(#ie-arrow-red)"/>
  <text x="466" y="215" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">échec</text>
  <line x1="710" y1="70" x2="760" y2="70" stroke="#4ade80" strokeWidth="1.5" markerEnd="url(#ie-arrow-green)"/>
  <line x1="710" y1="250" x2="760" y2="250" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#ie-arrow-orange)"/>
  <path d="M 870 220 L 870 295 L 330 295 L 330 200" stroke="#fb923c" strokeWidth="1.4" strokeDasharray="5 4" fill="none" markerEnd="url(#ie-arrow-orange)"/>
  <text x="600" y="288" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">correction source / template, relance pipeline</text>
</svg>

Une exécution réussie place la facture dans la liste *E-Invoicing* habituelle. Un échec survenu avant l'insertion de l'en-tête laisse uniquement une ligne de validation — c'est ce que cette page fait apparaître. Une fois la donnée source ou le template corrigé, la relance du pipeline crée soit l'en-tête (la ligne disparaît de cette vue), soit une nouvelle ligne orpheline (toujours listée).

---

## Barre d'outils

La barre d'outils en haut du tableau combine recherche texte et filtres de sévérité.

### Recherche

Un champ unique recherche dans les clés documentaires :

| Champ recherché |
|---|
| `DOC` (numéro de document) |
| `DCT` (type de document) |
| `KCO` (code société) |

La recherche est exécutée côté serveur et met la liste à jour à mesure que l'utilisateur saisit.

### Puces de sévérité

Une rangée de puces permet de filtrer par sévérité :

<div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '14px 0 8px'}}>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.25)', background: 'transparent', opacity: 0.75}}>All</span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid #f87171', background: '#3d0a0a', color: '#f87171'}}>FATAL</span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.1)', color: '#f87171'}}>ERROR</span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.1)', color: '#fb923c'}}>WARNING</span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>INFO</span>
</div>

| Puce | Signification |
|---|---|
| **All** | Pas de filtre — toutes les sévérités sont affichées. |
| **FATAL** | Erreur arrêtant le pipeline — la facture n'a pas pu être traitée du tout. |
| **ERROR** | Erreur bloquante — la facture aurait été rejetée par la PA. |
| **WARNING** | Anomalie non bloquante — informative ; la facture aurait pu être traitée avec réserves. |
| **INFO** | Événements informatifs. |

Cliquer sur une puce applique le filtre correspondant ; un nouveau clic le retire. Une seule sévérité peut être sélectionnée à la fois.

### Rafraîchir

Un bouton à flèche circulaire à droite relance la requête courante sans modifier les filtres.

---

## Liste d'erreurs

Le tableau affiche une ligne par erreur de validation. Tri par défaut : clé documentaire ascendante.

| Colonne | Description |
|---|---|
| **Doc** | Numéro de document de la source. |
| **Dct** | Type de document. |
| **Kco** | Code société. |
| **Seq** | Numéro de séquence — ordre dans lequel les règles de validation se sont déclenchées au cours du traitement défaillant. |
| **Severity** | Badge coloré — FATAL / ERROR / WARNING / INFO. |
| **Source** | Moteur de validation à l'origine de l'entrée — typiquement `XSD`, `Schematron`, ou un composant pipeline NomaUBL (`PROCESS`, `XSL`). |
| **Rule** | Identifiant de règle ou XPath ayant déclenché l'entrée (par ex. `BR-FR-12`, `cbc:CustomizationID`). |
| **Message** | Description lisible de l'échec. |

La pagination affiche 50 lignes par page par défaut ; le nombre total d'entrées correspondant aux filtres figure à côté de la pagination.

### Export

Un bouton **Export** dans la barre d'outils exporte la vue courante (filtres compris) au format CSV sous le nom `integration-errors.csv`.

---

## Comment instruire

La page est en lecture seule — l'instruction se fait en croisant les informations affichées avec le pipeline amont :

1. **Filtrer sur FATAL ou ERROR.** Ces lignes ont effectivement bloqué la facture. Les lignes WARNING / INFO sont surtout du bruit pour l'opérateur qui doit agir.
2. **Lire la règle et le message.** Une règle Schematron telle que `BR-FR-12` renvoie à une règle de l'extension française précise ; le message cite généralement l'élément en échec. Croiser avec la page [Codes motifs](../references/reason-codes.mdx).
3. **Ouvrir le XML source dans *UBL Tools → XML Viewer*** pour le triplet `DOC + DCT + KCO` — le fichier réside dans `dirInput/<template>/`. La lecture de la source confirme si l'échec relève des données (champ manquant) ou du template (bug du XSL).
4. **Relancer le pipeline une fois la source corrigée.** Utiliser *Processing → XML* avec `Mode = SINGLE` (ou `AUTO`) et le fichier corrigé. Une fois la facture persistée, elle quitte cette page pour rejoindre la liste *E-Invoicing* — et l'erreur d'intégration disparaît automatiquement de cette vue (la règle qui masque les erreurs disposant d'un en-tête correspondant s'en charge).

---

## Conseils & bonnes pratiques

- **Surveiller la puce FATAL en priorité.** Un compteur FATAL non nul signifie que le pipeline s'est interrompu — aucune facture n'a été créée. Les lignes ERROR signifient que la facture a été rejetée à la validation mais peut avoir laissé un dossier partiel.
- **Un compteur Erreurs d'intégration vert sur le tableau de bord est le signe d'un ingestion propre.** À vérifier dans le routine matinale ; une valeur non nulle avant le traitement des lots du jour est le signal canonique « à instruire en priorité ».
- **Utiliser la recherche pour cadrer par société.** Lorsqu'un pic est concentré sur un client ou un code société, rechercher par `KCO` réduit rapidement la liste. Souvent un seul changement côté source génère plusieurs lignes.
- **La colonne Severity dicte l'ordre d'instruction.** FATAL d'abord (ces lignes bloquent tout), puis ERROR (elles bloquent la facture concernée), enfin WARNING / INFO si l'opérateur souhaite nettoyer les entrées informatives.
- **Les erreurs disparaissent automatiquement après un ré-import réussi.** Relancer le fichier corrigé via *Processing → XML* ; dès que l'en-tête de facture est créé, la ligne disparaît de cette vue (l'entrée d'origine reste dans `F564236` pour l'audit, mais elle n'est plus « non rattachée »).
- **Pour des schémas systématiques, corriger le template, pas les données.** Des erreurs identiques répétées sur de nombreuses factures pointent généralement vers un bug de template / XSL. Ouvrir *UBL Tools → XSL Editor* et ajuster le mapping plutôt que de corriger chaque XML source à la main.
