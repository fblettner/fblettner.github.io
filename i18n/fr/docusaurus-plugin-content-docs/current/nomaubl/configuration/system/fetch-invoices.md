---
title: Récupération des factures
description: "Configurer les jobs JD Edwards BI Publisher (BIP) que NomaUBL récupère pour traitement par lot, et le modèle de document à utiliser pour chacun."
keywords: [NomaUBL, récupération factures, fetch invoices, BIP, BI Publisher, JD Edwards, JDE, traitement par lot, scheduler, modèle de document, filtre report]
---

# Récupération des factures

L'éditeur **Fetch Invoices** détermine quels **jobs JD Edwards BI Publisher (BIP)** NomaUBL récupère pour traitement. Il est utilisé par l'import batch et par l'ordonnanceur en arrière-plan pour identifier *les sorties BIP éligibles* et *le modèle de document à appliquer à chacune*.

:::info[Page spécifique à JD Edwards]
Cette page est l'une des parties **spécifiques à JDE** de NomaUBL — elle s'appuie sur un serveur BIP JD Edwards. Les autres pages de configuration sont, elles, indépendantes de la source.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1000 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="380" rx="14" fill="url(#fi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Fetch Invoices — filtres BIP</text>
  <rect x="704" y="30" width="76" height="22" rx="5" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="742" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Enreg.</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres de rapports BIP</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Seuls les jobs dont Report (et Version, sauf si All Versions est coché) correspond à une ligne sont mis en file.</text>

  <rect x="240" y="124" width="540" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="145" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPORT · VERSION · ALL VERSIONS · TEMPLATE</text>

  <rect x="240" y="162" width="540" height="30" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="181" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="356" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FBL00001</text>
  <rect x="476" y="170" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="181" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">off</text>
  <rect x="556" y="170" width="160" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="636" y="181" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">invoices</text>
  <text x="752" y="181" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="196" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="215" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="356" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FBL00002</text>
  <rect x="476" y="204" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="215" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">off</text>
  <rect x="556" y="204" width="160" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="636" y="215" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">credit_notes</text>
  <text x="752" y="215" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="230" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="249" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">R42UI19</text>
  <text x="356" y="249" fill="#475569" fontSize="10" fontFamily="ui-monospace, monospace">— désactivé —</text>
  <rect x="476" y="238" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="483" y="249" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="506" y="249" fill="#4ade80" fontSize="10" fontFamily="system-ui, sans-serif">Toutes versions</text>
  <rect x="600" y="238" width="120" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="660" y="249" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">debit_notes</text>
  <text x="752" y="249" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="280" width="156" height="26" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="318" y="297" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Ajouter un rapport</text>

  <rect x="240" y="320" width="540" height="64" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="252" y="340" fill="#fb923c" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">⚠ PAGE SPÉCIFIQUE À JD EDWARDS</text>
  <text x="252" y="358" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Liste de filtres vide = tous les jobs BIP sont récupérés.</text>
  <text x="252" y="374" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Utilisé par l'importateur batch et par le scheduler en mode serve.</text>

  <rect x="20" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom du rapport + version</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par ex. R42565 · FBL00001</text>
  <line x1="220" y1="186" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fi-arrow)"/>

  <rect x="20" y="232" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Case Toutes versions</text>
  <text x="30" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">désactive la colonne Version</text>
  <line x1="220" y1="248" x2="476" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fi-arrow)"/>

  <rect x="820" y="200" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modèle de document</text>
  <text x="830" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">obligatoire pour générer le PDF</text>
  <line x1="820" y1="216" x2="720" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fi-arrow)"/>
</svg>

---

## BIP Report Filters

Liste des reports BIP que NomaUBL est autorisé à récupérer. Chaque ligne est un filtre : NomaUBL ne met en file d'attente que les jobs BIP dont le nom de **Report** (et éventuellement la **Version**) correspond à une ligne. Quand la table est **vide**, NomaUBL récupère **tous les jobs** — utile en phase de test, à éviter en production.

### Champs par ligne

| Colonne | Description |
|---|---|
| **Report** | Nom du report BIP (par ex. `R42565`). |
| **Version** | Version précise du report à autoriser (par ex. `FBL00001`). Désactivée quand **All Versions** est coché. |
| **All Versions** | Quand cochée, toutes les versions du report sont acceptées et le champ **Version** est vidé / désactivé. |
| **Template** | **Modèle de document** NomaUBL utilisé pour **produire la pièce jointe PDF** pendant la génération de l'UBL à partir de cette sortie BIP. **Obligatoire** quand le type de document produit un UBL avec pièce jointe PDF (la liste déroulante affiche les modèles de type `document` définis dans votre environnement — voir *Configuration → Documents*). |

Utilisez le bouton **+ Ajouter un report** pour ajouter une ligne, et le bouton **×** d'une ligne pour la supprimer.

### Utilisation

- **Traitement par lot** — lors d'un import manuel, seuls les jobs dont le Report (et la Version, sauf si All Versions est coché) correspond à une ligne sont mis en file d'attente.
- **Ordonnanceur** — en mode serveur, le même filtre s'applique à chaque cycle d'interrogation.
- **Template** — dès qu'un job correspond, NomaUBL utilise le **modèle de document** configuré pour produire le PDF qui sera joint à l'UBL pendant la génération. Le modèle fournit la chaîne RTF / XSL définie dans *Configuration → Documents*. Il est **obligatoire** quand le type de document produit un UBL avec pièce jointe PDF.

---

## Conseils & bonnes pratiques

- **Toujours configurer au moins un filtre en production.** Une liste vide entraîne la récupération de tous les jobs BIP de l'environnement JDE connecté, ce qui est généralement trop large.
- **Utiliser All Versions avec parcimonie.** Pertinent quand il existe de nombreuses versions ad hoc d'un même report ; sinon, préférer fixer une Version précise par ligne pour maîtriser le périmètre traité.
- **Une ligne par tuple (Report, Version, Template).** Si un même report demande des modèles distincts selon la version, ajouter plusieurs lignes.
- **Ne pas omettre d'affecter un Template.** Une ligne sans modèle filtrera correctement les jobs, mais la génération UBL ne pourra pas produire la pièce jointe PDF quand elle est attendue.
