---
title: Journal de traitement
description: "Consulter le journal d'exécution NomaUBL — chaque événement START / END / intermédiaire enregistré pendant les traitements XML, UBL, BIP et FTP. Vue groupée par job pour le statut et la durée d'un coup d'œil, ou flux d'événements à plat pour l'analyse forensique."
keywords: [NomaUBL, journal de traitement, runtime log, F564237, START, END, cycle de vie, AUTO, SINGLE, BURST, UBL, trace de traitement, jobs orphelins, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Journal de traitement

L'écran **Processing Log** permet de consulter la **table de journal d'exécution** de NomaUBL (`F564237`). Chaque traitement qui passe par la plateforme — transformation XML, génération UBL, validation, extraction BIP, téléchargement FTP — émet un flux d'événements : un `START`, des étapes intermédiaires (transformation, conversion, rendu…), puis un `END` qui contient le résultat final (`SUCCESSFUL` ou un message d'erreur fatale).

La page présente ce flux en deux vues complémentaires : une vue **groupée** qui associe chaque `START` à son `END` correspondant — chaque job apparaît alors sur une seule ligne avec son statut et sa durée — et une vue **à plat** qui liste chaque événement individuel pour une analyse détaillée. La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé.

---

## Provenance des événements

Tous les chemins de traitement NomaUBL écrivent leur trace dans `F564237` via le même journaliseur. Les champs clés sont remplis à l'exécution : le **fichier** traité, le **mode** (`AUTO`, `SINGLE`, `BURST`, `UBL`, `PROCESS`), le **template** source, l'**étape** courante (`START`, `END`, ou un nom de méthode comme `TRANSFORM_XSL`, `CONVERT_RTF`, `RUN_TASKS`), le **message** et l'**horodatage**. Le moteur de groupement de cette page reconstruit les jobs à partir de ces événements bruts au moment de l'affichage.

<svg viewBox="0 0 1000 160" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="plog-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="plog-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="plog-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="plog-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="20" y="40" width="220" height="80" rx="12" fill="url(#plog-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="130" y="70" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📥 Entrée du traitement</text>
  <text x="130" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">XML · UBL · BIP · FTP</text>
  <rect x="275" y="40" width="240" height="80" rx="12" fill="url(#plog-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="395" y="70" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙️ Pipeline NomaUBL</text>
  <text x="395" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">transform · render · validate · send</text>
  <rect x="555" y="40" width="200" height="80" rx="12" fill="url(#plog-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="655" y="70" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">📜 F564237</text>
  <text x="655" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">flux d'événements</text>
  <rect x="795" y="40" width="185" height="80" rx="12" fill="url(#plog-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="887" y="70" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📊 Processing Log</text>
  <text x="887" y="92" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">vues groupée & à plat</text>
  <line x1="240" y1="80" x2="275" y2="80" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#plog-arrow)"/>
  <line x1="515" y1="80" x2="555" y2="80" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#plog-arrow)"/>
  <text x="535" y="73" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">events</text>
  <line x1="755" y1="80" x2="795" y2="80" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#plog-arrow)"/>
</svg>

Le journal est en **mode ajout seul** — les événements sont écrits par le pipeline et ne sont jamais modifiés. La page est en lecture seule.

---

## Deux vues, un même jeu de données

| Vue | Quand l'utiliser |
|---|---|
| **Grouped** *(défaut)* | Surveillance au quotidien. Chaque job tient sur une ligne avec son statut (OK / ERROR / PARTIAL), sa durée et son dernier message. L'expansion d'une ligne révèle toutes les étapes intermédiaires. |
| **Flat** | Analyse détaillée quand le groupement masquerait un contexte utile — par ex. inspecter l'ordre des événements pendant un job suspendu, ou rechercher un `WARNING` isolé entre deux exécutions sans rapport. Une ligne par événement. |

Le bouton de bascule en tête de la barre d'outils permet de basculer entre les deux ; le choix est enregistré dans le navigateur (`processing-log:grouped` dans `localStorage`), donc la prochaine session ouvre la même vue.

---

## Barre d'outils

La barre d'outils combine la bascule de vue, une recherche libre, deux filtres déroulants, une plage de dates et un bouton de rafraîchissement.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}>
    <div style={{display: 'inline-flex', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)', overflow: 'hidden'}}>
      <span style={{padding: '5px 12px', fontSize: '11px', fontWeight: 700, background: 'rgba(74,158,255,0.15)', color: '#4a9eff'}}>Grouped</span>
      <span style={{padding: '5px 12px', fontSize: '11px', fontWeight: 600, opacity: 0.7}}>Flat</span>
    </div>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic', minWidth: '180px'}}>🔎 Rechercher un fichier…</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.7}}>Tous les templates ▾</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.7}}>Tous les modes ▾</span>
    <span style={{padding: '6px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '12px', fontWeight: 600, color: '#4a9eff'}}>📅 Hier → Aujourd'hui</span>
    <span style={{flex: 1, minWidth: '8px'}} />
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>↻ Rafraîchir</span>
  </div>
</div>

| Contrôle | Comportement |
|---|---|
| **Bascule Grouped / Flat** | Bascule la présentation des données. Enregistrée par navigateur. |
| **Rechercher un fichier** | Recherche par sous-chaîne sur la colonne `file` (par ex. `12345_RI_00070`). Vide désactive le filtre. |
| **Templates** | Liste déroulante alimentée dynamiquement depuis les templates de type `document` déclarés dans `config.json`. *Tous les templates* retire le filtre. |
| **Modes** | Déroulante des modes de traitement standards — `AUTO`, `SINGLE`, `BURST`, `UBL`, `PROCESS`. *Tous les modes* retire le filtre. |
| **Plage de dates** | Restreint aux événements dont l'horodatage se situe dans la fenêtre choisie. Préréglage par défaut : *Hier → Aujourd'hui*. Les préréglages standards (*Aujourd'hui*, *Hier*, *7 derniers jours*, *Ce mois*, *Mois dernier*, *Plage personnalisée*) s'appliquent. |
| **Rafraîchir** | Relance la requête courante sans modifier les filtres. |

En vue groupée, la page extrait davantage (`pageSize × 4`, plafonné à 200) pour que les paires START / END et les étapes intermédiaires se retrouvent sur la même page et que le moteur de groupement dispose du job complet.

---

## Vue groupée — une ligne par job

Chaque ligne représente un **job (file, mode, template)**, reconstruit à partir de ses événements bruts. La ligne affiche le statut du job, la forme du flux, la durée et le dernier message. Cliquer sur une ligne pour la déplier et voir toutes les étapes intermédiaires.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '24px 150px 1.6fr 80px 110px 110px 80px 110px 1.4fr', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '10px'}}>
    <div></div><div>Date</div><div>Fichier</div><div>Mode</div><div>Template</div><div>Flux</div><div>Durée</div><div>Statut</div><div>Message</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '24px 150px 1.6fr 80px 110px 110px 80px 110px 1.4fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{opacity: 0.55}}>▸</div>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 14:08:42</div>
    <div style={{fontFamily: 'monospace'}}>12345_RI_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '10px', fontWeight: 700, color: '#4a9eff'}}>SINGLE</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div style={{opacity: 0.7}}>START → END</div>
    <div style={{opacity: 0.7}}>1.2s</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '10px', fontWeight: 700}}>OK</span></div>
    <div style={{opacity: 0.78}}>SUCCESSFUL</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '24px 150px 1.6fr 80px 110px 110px 80px 110px 1.4fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{opacity: 0.55}}>▸</div>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 13:54:11</div>
    <div style={{fontFamily: 'monospace'}}>spool_R12_2026_120</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(192,132,252,0.15)', border: '1px solid rgba(192,132,252,0.45)', fontSize: '10px', fontWeight: 700, color: '#c084fc'}}>BURST</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div style={{opacity: 0.7}}>START → END</div>
    <div style={{opacity: 0.7}}>42s</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '10px', fontWeight: 700}}>OK</span></div>
    <div style={{opacity: 0.78}}>SUCCESSFUL — 248 factures</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '24px 150px 1.6fr 80px 110px 110px 80px 110px 1.4fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center', background: 'rgba(255,69,58,0.06)'}}>
    <div style={{transform: 'rotate(90deg)', color: '#f87171'}}>▸</div>
    <div style={{fontFamily: 'monospace', opacity: 0.85, fontSize: '11px'}}>2026-04-29 11:22:05</div>
    <div style={{fontFamily: 'monospace'}}>12347_RN_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(50,215,75,0.15)', border: '1px solid rgba(50,215,75,0.4)', fontSize: '10px', fontWeight: 700, color: '#4ade80'}}>UBL</span></div>
    <div style={{fontFamily: 'monospace'}}>credit_notes</div>
    <div style={{opacity: 0.7}}>START → END</div>
    <div style={{opacity: 0.7}}>340ms</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,69,58,0.12)', border: '1px solid rgba(255,69,58,0.4)', color: '#f87171', fontSize: '10px', fontWeight: 700}}>FATAL ERROR</span></div>
    <div style={{opacity: 0.85}}>FATAL ERROR : Schematron BR-CL-21 failed</div>
  </div>
  <div style={{padding: '10px 14px 14px 56px', fontSize: '11px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,69,58,0.03)'}}>
    <div style={{display: 'grid', gridTemplateColumns: '160px 110px 90px 1fr', gap: '12px', padding: '3px 0'}}>
      <span style={{fontFamily: 'monospace', opacity: 0.65, fontSize: '10px'}}>2026-04-29 11:22:05</span>
      <span style={{fontFamily: 'monospace', color: '#4a9eff', fontSize: '10px', fontWeight: 600}}>START</span>
      <span style={{opacity: 0.5}}>—</span>
      <span style={{opacity: 0.78}}>Job démarré</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '160px 110px 90px 1fr', gap: '12px', padding: '3px 0'}}>
      <span style={{fontFamily: 'monospace', opacity: 0.65, fontSize: '10px'}}>2026-04-29 11:22:05</span>
      <span style={{fontFamily: 'monospace', color: '#4a9eff', fontSize: '10px', fontWeight: 600}}>TRANSFORM_XSL</span>
      <span style={{opacity: 0.5}}>—</span>
      <span style={{opacity: 0.78}}>XSLT appliqué — 1 document, 8 lignes</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '160px 110px 90px 1fr', gap: '12px', padding: '3px 0'}}>
      <span style={{fontFamily: 'monospace', opacity: 0.65, fontSize: '10px'}}>2026-04-29 11:22:05</span>
      <span style={{fontFamily: 'monospace', color: '#f87171', fontSize: '10px', fontWeight: 600}}>VALIDATE_UBL_ERROR</span>
      <span style={{opacity: 0.5}}>—</span>
      <span style={{opacity: 0.85}}>BR-CL-21 — Tax category code MUST be from UNCL5305</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '160px 110px 90px 1fr', gap: '12px', padding: '3px 0'}}>
      <span style={{fontFamily: 'monospace', opacity: 0.65, fontSize: '10px'}}>2026-04-29 11:22:05</span>
      <span style={{fontFamily: 'monospace', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>END</span>
      <span style={{opacity: 0.5}}>—</span>
      <span style={{opacity: 0.85}}>FATAL ERROR : Schematron BR-CL-21 failed</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '24px 150px 1.6fr 80px 110px 110px 80px 110px 1.4fr', padding: '10px 14px', alignItems: 'center', background: 'rgba(255,159,10,0.06)'}}>
    <div style={{opacity: 0.55}}>▸</div>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 09:14:18</div>
    <div style={{fontFamily: 'monospace'}}>12348_RI_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '10px', fontWeight: 700, opacity: 0.85}}>AUTO</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div style={{opacity: 0.7}}>START → ?</div>
    <div style={{opacity: 0.4}}>—</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,159,10,0.12)', border: '1px solid rgba(255,159,10,0.4)', color: '#fb923c', fontSize: '10px', fontWeight: 700}}>PARTIAL</span></div>
    <div style={{opacity: 0.78}}>RUN_TASKS — splitting 1 of 4</div>
  </div>
</div>

### Colonnes

| Colonne | Description |
|---|---|
| **▸** | Chevron — affiché quand le job a au moins une étape intermédiaire ou est orphelin. Cliquer sur la ligne pour déplier. |
| **Date** | Horodatage de tri — heure de l'`END` quand elle est connue, sinon le `START` ou la première étape intermédiaire. |
| **Fichier** | Le fichier ou la clé de job traitée (typiquement `DOC_DCT_KCO`). En police mono ; valeur complète au survol. |
| **Mode** | Badge coloré — `SINGLE` (bleu), `BURST` (violet), `UBL` / `UBL_VALIDATE` (vert), `BOTH` (orange), autres modes (neutre). |
| **Template** | Le template source qui a piloté l'exécution (par ex. `invoices`, `credit_notes`). |
| **Flux** | Forme de l'appariement START / END — `START → END` pour les jobs complets, `START → ?` quand l'END est absent, `? → END` quand un END apparaît sans START correspondant, ou `—` pour des étapes intermédiaires sans appariement. |
| **Durée** | Calculée par `END − START`. Format compact : `120ms` / `1.2s` / `1m 23s`. Vide quand l'une des bornes manque. |
| **Statut** | Issue du job — voir ci-dessous. |
| **Message** | Message de fin de job, ou message de la dernière étape intermédiaire quand l'END est absent. Tronqué ; valeur complète au survol. |

### Badges de statut

| Variante | Quand | Indice visuel |
|---|---|---|
| **OK** | `START` et `END` présents, sans erreur dans le message ni dans aucune étape intermédiaire. | Badge vert. |
| **ERROR** | Le message d'`END` correspond à `ERROR / FAIL / EXCEPTION / FATAL`, **ou** une étape intermédiaire correspond. Le libellé du badge reprend le message d'END en majuscules. | Badge rouge, le fond de la ligne est teinté rouge. |
| **PARTIAL** | Le `START` ou l'`END` est absent de la page courante (job orphelin), ou seules des étapes intermédiaires sont présentes. | Badge orange, le fond de la ligne est teinté orange. |

### Étapes dépliées

Cliquer sur une ligne dépliable ouvre une **zone d'étapes** sous celle-ci, qui liste tous les événements rattachés au job dans l'ordre chronologique :

- La ligne synthétique `START` reprend l'horodatage de début et un message générique *« Job démarré »*.
- Chaque événement intermédiaire est listé avec sa méthode (`TRANSFORM_XSL`, `CONVERT_RTF`, `RUN_TASKS`, `VALIDATE_UBL_ERROR`, …) et son texte libre — les méthodes d'erreur sont colorées en rouge.
- La ligne `END` reprend l'horodatage de fin et le message final.
- Pour les jobs **PARTIAL**, une note italique rappelle que le START ou l'END se trouve sur une autre page.

Cette zone fait de la vue groupée un outil d'analyse en un clic — l'en-tête dit *ce qui* s'est passé, la liste dépliée dit *où* dans le pipeline.

---

## Vue à plat — une ligne par événement

Basculer sur **Flat** désactive le groupement et revient au flux d'événements sous-jacent. Tri, pagination et export CSV fonctionnent sur les événements individuels, ce qui correspond aux requêtes d'archive et aux investigations détaillées.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1.6fr 100px 110px 130px 1.6fr', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '11px'}}>
    <div>Date / Heure</div><div>Fichier</div><div>Mode</div><div>Template</div><div>Étape</div><div>Message</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1.6fr 100px 110px 130px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 14:08:43</div>
    <div style={{fontFamily: 'monospace'}}>12345_RI_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '10px', fontWeight: 700, color: '#4a9eff'}}>SINGLE</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '10px', fontWeight: 700}}>END</span></div>
    <div style={{opacity: 0.85}}>SUCCESSFUL</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1.6fr 100px 110px 130px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 14:08:43</div>
    <div style={{fontFamily: 'monospace'}}>12345_RI_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '10px', fontWeight: 700, color: '#4a9eff'}}>SINGLE</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: 'inherit', fontSize: '10px', fontWeight: 600, opacity: 0.85}}>RUN_SINGLE</span></div>
    <div style={{opacity: 0.85}}>PDF rendu (1 doc, 142 Ko)</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1.6fr 100px 110px 130px 1.6fr', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 14:08:42</div>
    <div style={{fontFamily: 'monospace'}}>12345_RI_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '10px', fontWeight: 700, color: '#4a9eff'}}>SINGLE</span></div>
    <div style={{fontFamily: 'monospace'}}>invoices</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '10px', fontWeight: 700}}>START</span></div>
    <div style={{opacity: 0.85}}>Processing SINGLE — template=invoices, file=12345_RI_00070</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1.6fr 100px 110px 130px 1.6fr', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'monospace', opacity: 0.75, fontSize: '11px'}}>2026-04-29 11:22:05</div>
    <div style={{fontFamily: 'monospace'}}>12347_RN_00070</div>
    <div><span style={{padding: '2px 7px', borderRadius: '4px', background: 'rgba(50,215,75,0.15)', border: '1px solid rgba(50,215,75,0.4)', fontSize: '10px', fontWeight: 700, color: '#4ade80'}}>UBL</span></div>
    <div style={{fontFamily: 'monospace'}}>credit_notes</div>
    <div><span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,69,58,0.12)', border: '1px solid rgba(255,69,58,0.4)', color: '#f87171', fontSize: '10px', fontWeight: 700}}>VALIDATE_UBL_ERROR</span></div>
    <div style={{opacity: 0.85}}>BR-CL-21 — Tax category code MUST be from UNCL5305</div>
  </div>
</div>

### Colonnes

| Colonne | Description |
|---|---|
| **Date / Heure** | Horodatage de l'événement. Tri par défaut : décroissant. |
| **Fichier** | Le fichier auquel l'événement se rattache. |
| **Mode** | Badge coloré — même palette que la vue groupée. |
| **Template** | Le template source. |
| **Étape** | Libellé de la méthode — badge coloré : `START` (bleu), `END` (vert), tout libellé contenant `ERROR / FAIL` (rouge), `WARN` (orange), autres étapes (neutre). |
| **Message** | Texte libre attaché à l'événement. Tronqué ; valeur complète au survol. Non triable. |

Le bouton standard `Exporter` exporte la vue courante (filtres compris, tri respecté) sous le nom `processing-log.csv`.

---

## Reconstruction des jobs

Le moteur de groupement parcourt les événements en ordre **croissant** dans le temps et utilise le triplet `file | mode | template` comme **clé de job**. Connaître l'algorithme aide à interpréter les cas limites :

| Événement | Effet |
|---|---|
| `START` sur une clé sans job ouvert | Ouvre un nouveau job. |
| `START` sur une clé qui a déjà un job ouvert | Termine le job précédent en **PARTIAL** et ouvre un nouveau job. |
| `END` sur une clé avec un job ouvert | Ferme le job, calcule la durée, affecte le statut (OK ou ERROR selon le message d'END). |
| `END` sur une clé sans job ouvert | Émet un orphelin **PARTIAL** sans START. |
| Toute autre méthode sur une clé avec un job ouvert | Rattachée comme étape intermédiaire. Marque `hasError = true` si la méthode ou le message correspond à `ERROR / FAIL / EXCEPTION / FATAL`. |
| Toute autre méthode sur une clé sans job ouvert | Émet un orphelin **PARTIAL** composé de cette seule étape. |

Les jobs ouverts sans `END` sur la page courante sont vidés en **PARTIAL** en fin de parcours.

L'expression de détection est volontairement large — toute méthode ou message contenant `ERROR`, `FAIL`, `EXCEPTION` ou `FATAL` (insensible à la casse) marque le job en erreur, même si le message d'END formel est anodin.

---

## Conseils & bonnes pratiques

- **Garder Grouped pour la surveillance quotidienne.** Un coup d'œil à la colonne *Statut* indique tout de suite ce qui a échoué la veille et ce qui s'est terminé proprement. Réserver *Flat* aux requêtes détaillées.
- **Un PARTIAL après un filtre date est généralement un artefact de pagination.** Un job dont le START est sur le jour 1 et l'END sur le jour 2 paraîtra orphelin sur chacune des vues isolées — élargir la plage de dates avant de conclure à un échec réel.
- **Filtrer par mode pour cibler une session de triage.** Pendant un incident sur le chemin BIP, restreindre à `BURST` retire le bruit des exécutions `SINGLE` sans rapport et garde toutes les étapes liées sur la même page.
- **Le libellé d'erreur affiché est le message d'END en majuscules.** C'est exactement la chaîne que l'équipe ERP / PA citera dans un ticket — la copier depuis cette page est le moyen le plus rapide de remonter la cause principale.
- **Déplier avant de citer un job.** L'en-tête dit *ce qui* a échoué ; les étapes dépliées disent *où* dans le pipeline (transformation vs. conversion vs. validation vs. envoi). Toujours inclure l'étape fautive dans le rapport d'incident.
- **Le journal est en mode ajout seul.** Aucune ligne ne peut être éditée ou supprimée depuis cette page — passer par *File Versions* ou directement par la base pour tout nettoyage rétroactif.
