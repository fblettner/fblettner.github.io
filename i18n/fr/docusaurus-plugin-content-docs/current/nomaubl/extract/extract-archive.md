---
title: Extraction d'archive
description: "Extraire un document de facture archivé depuis la base NomaUBL vers le disque — XML source (F564230) ou UBL 2.1 généré (F564231) — par clé documentaire (FEDOC / FEDCT / FEKCO)."
keywords: [NomaUBL, extraction, archive, facture, XML, UBL, F564230, F564231, FEDOC, FEDCT, FEKCO, JD Edwards, SAP, NetSuite, XML source, UBL généré]
---

# Extraction d'archive

L'écran **Extraction d'archive** lit une facture archivée depuis la base NomaUBL et écrit le fichier correspondant sur disque. Deux variantes sont prises en charge :

- **XML source** — le XML reçu lors de l'ingestion de la facture, stocké dans la table `F564230`.
- **UBL 2.1 généré** — le document UBL EN 16931 produit par NomaUBL à partir du XML source, stocké dans la table `F564231`.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — car l'archive est interne à NomaUBL. Les clés (`FEDOC` / `FEDCT` / `FEKCO`) reprennent la nomenclature JDE par convention historique ; ce sont des identifiants utilisables pour tout document archivé.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="eaui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="eaui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="eaui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="340" rx="14" fill="url(#eaui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Extraction d'archive</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEMPLATE</text>
  <rect x="340" y="82" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <text x="556" y="98" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <rect x="600" y="82" width="180" height="24" rx="5" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="690" y="98" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">UBL (F564231) ▾</text>

  <text x="240" y="132" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Clé documentaire</text>

  <text x="240" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FEDOC</text>
  <rect x="300" y="148" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="163" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">2026142</text>
  <text x="436" y="163" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FEDCT</text>
  <rect x="490" y="148" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="163" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">RI</text>
  <text x="586" y="163" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FEKCO</text>
  <rect x="640" y="148" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="690" y="163" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">00070</text>

  <line x1="240" y1="186" x2="780" y2="186" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="210" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉPERTOIRE DE SORTIE</text>
  <rect x="380" y="200" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="215" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">%APP_HOME%/input/%TEMPLATE%</text>
  <rect x="716" y="200" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="746" y="215" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📁</text>

  <text x="240" y="244" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHIER DE SORTIE</text>
  <rect x="370" y="234" width="410" height="22" rx="5" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="380" y="249" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">2026142_RI_00070_ubl.xml</text>
  <text x="666" y="249" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">lecture seule</text>

  <rect x="240" y="276" width="160" height="28" rx="6" fill="url(#eaui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="320" y="294" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Extraire</text>

  <line x1="240" y1="316" x2="780" y2="316" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="338" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Résultat</text>
  <rect x="320" y="326" width="460" height="22" rx="5" fill="#0d1220" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="332" y="341" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ Fichier écrit dans /app/input/invoices/2026142_RI_00070_ubl.xml</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source XML ou UBL</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">F564230 ou F564231</text>
  <line x1="220" y1="98" x2="340" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eaui-arrow)"/>

  <rect x="20" y="148" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="163" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clé en 3 parties</text>
  <text x="30" y="176" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">doc · type · société</text>
  <line x1="220" y1="164" x2="300" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eaui-arrow)"/>

  <rect x="820" y="234" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="249" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom déterministe</text>
  <text x="830" y="262" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">suffixe _ubl si UBL</text>
  <line x1="820" y1="250" x2="780" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#eaui-arrow)"/>
</svg>

---

## Paramètres de la requête base

Un seul formulaire pilote l'extraction.

| Champ | Description |
|---|---|
| **Template** | Template du document (par ex. `invoices`, `credit_notes`). Sert uniquement à résoudre le placeholder `%TEMPLATE%` du répertoire de sortie par défaut hérité de `global.dirInput`. |
| **Source** | `XML — JDE Source (F564230)` extrait le XML reçu à l'ingestion. `UBL — Generated UBL 2.1 (F564231)` extrait le document UBL produit par NomaUBL à partir de ce XML. |
| **FEDOC** | Numéro du document — clé primaire de l'archive. |
| **FEDCT** | Type de document (par ex. `RI`, `RN`). |
| **FEKCO** | Code société (par ex. `00070`). |
| **Output Directory** | Chemin absolu côté serveur où le fichier est écrit. Pré-rempli depuis `global.dirInput`, avec `%TEMPLATE%` remplacé par le template choisi. Modifiable manuellement ou via le bouton **dossier** qui ouvre un sélecteur de répertoire côté serveur. |
| **Output File** | Aperçu en lecture seule du chemin du fichier de sortie (voir la convention de nommage ci-dessous). |

Cliquer sur **Extract XML** pour lancer l'extraction. Les trois clés (`FEDOC`, `FEDCT`, `FEKCO`) et le répertoire de sortie sont obligatoires pour activer le bouton.

---

## Convention de nommage du fichier de sortie

Le nom du fichier dérive directement des clés et de la source choisie :

| Source | Fichier de sortie |
|---|---|
| `XML` (source) | `<FEDOC>_<FEDCT>_<FEKCO>.xml` |
| `UBL` (généré) | `<FEDOC>_<FEDCT>_<FEKCO>_ubl.xml` |

Le suffixe `_ubl` distingue les deux variantes et permet leur coexistence dans un même répertoire.

---

## Résultat

Après l'extraction, la section **Extraction Result** affiche :

- Un message vert **Extraction successful** — ou l'erreur renvoyée par l'API en cas d'échec.
- Le message renvoyé par le serveur (typiquement le chemin absolu du fichier écrit).

---

## Conseils & bonnes pratiques

- **Utiliser Source = UBL pour récupérer le document émis par NomaUBL** — utile pour une comparaison directe avec la réponse de la PA, ou pour revalider un UBL déjà archivé sans le régénérer.
- **Utiliser Source = XML pour inspecter le XML d'origine reçu à l'ingestion** sans solliciter le système amont.
- **Le Template ne sert qu'au calcul du chemin de sortie par défaut.** Quand le chemin manuel désigne déjà le bon répertoire, le Template peut rester vide.
- **Un fichier existant à la même destination est écrasé sans avertissement.** En cas d'extraction en lot via l'API, prévoir un répertoire de sortie dédié.
- **Le sélecteur de répertoire reconnaît les placeholders `%APP_HOME%` et `%PROCESS_HOME%`.** Un chemin contenant l'un de ces placeholders peut être saisi directement dans le champ ; l'API les résout côté serveur avant écriture.
