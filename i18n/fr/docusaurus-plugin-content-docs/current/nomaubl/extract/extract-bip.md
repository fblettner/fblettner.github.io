---
title: Extraction BIP
description: "Extraire le contenu d'un job BIP (BI Publisher) depuis la file d'impression JD Edwards — XML d'entrée (F95630), sortie rendue (F95631) ou les deux — vers un répertoire du serveur NomaUBL."
keywords: [NomaUBL, BIP, BI Publisher, JD Edwards, JDE, extraction, F9563110, F95630, F95631, file d'impression, RJJOBNBR, XDJOBNBR, XML, PDF]
---

# Extraction BIP

L'écran **Extraction BIP** extrait le contenu d'un job de la **file d'impression BI Publisher (BIP)** d'une base JD Edwards vers un répertoire du serveur NomaUBL. Le contenu est lu dans les trois tables BIP configurées dans *Database Connectors → JD Edwards* :

- `F9563110` — Report Definition Job Control (l'index des jobs, clé `RJJOBNBR`).
- `F95630` — XMLP Data Output Repository (les BLOB de **XML d'entrée**).
- `F95631` — XMLP Output Repository (les BLOB de **sortie rendue** — typiquement PDF).

:::info[Page spécifique à JD Edwards]
Cette page fait partie des composants **spécifiques à JDE** de NomaUBL. Les autres pages d'extraction sont indépendantes de la source ; celle-ci ne s'applique que quand la source est JD Edwards et que la file d'impression BIP est le canal d'extraction.
:::

L'écran se divise en deux sections : **Parameters** et **Output**.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ebui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ebui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ebui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="340" rx="14" fill="url(#ebui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Extraction BIP</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres</text>

  <text x="240" y="118" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEMPLATE</text>
  <rect x="340" y="108" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="124" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <text x="556" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">N° JOB</text>
  <rect x="640" y="108" width="140" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="710" y="124" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">42803</text>

  <text x="240" y="152" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANGUE</text>
  <rect x="340" y="142" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="157" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">FR</text>

  <text x="240" y="184" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Mode d'extraction</text>
  <rect x="380" y="174" width="120" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="440" y="189" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Input (XML)</text>
  <rect x="504" y="174" width="120" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="564" y="189" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Output</text>
  <rect x="628" y="174" width="120" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="688" y="189" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Both</text>

  <line x1="240" y1="212" x2="780" y2="212" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="236" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Sortie</text>
  <text x="240" y="262" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉPERTOIRE</text>
  <rect x="340" y="252" width="370" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="267" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">%APP_HOME%/input/%TEMPLATE%</text>
  <rect x="716" y="252" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="746" y="267" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📁</text>

  <rect x="240" y="286" width="160" height="28" rx="6" fill="url(#ebui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="320" y="304" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Extraire</text>

  <line x1="240" y1="326" x2="780" y2="326" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="348" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Résultat</text>
  <rect x="320" y="336" width="460" height="22" rx="5" fill="#0d1220" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="332" y="351" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ R42565_FBL00001_42803.xml écrit (1 fichier · F95630)</text>

  <rect x="20" y="108" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="123" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">RJJOBNBR / XDJOBNBR</text>
  <text x="30" y="136" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">indexe F9563110 / F95630</text>
  <line x1="220" y1="124" x2="640" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ebui-arrow)"/>

  <rect x="820" y="174" width="160" height="44" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="830" y="189" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">⚠ Spécifique JDE</text>
  <text x="830" y="202" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requiert le connecteur</text>
  <text x="830" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">→ JD Edwards</text>
  <line x1="820" y1="184" x2="748" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ebui-arrow)"/>

  <rect x="20" y="252" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="267" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chemin serveur</text>
  <text x="30" y="280" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">%APP_HOME% résolu</text>
  <line x1="220" y1="268" x2="340" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ebui-arrow)"/>
</svg>

---

## Parameters

| Champ | Description |
|---|---|
| **Template** | Template du document (par ex. `invoices`, `credit_notes`). Sert uniquement à résoudre le placeholder `%TEMPLATE%` du répertoire de sortie par défaut hérité de `global.dirInput`. |
| **Job Number** | Numéro de job BIP JDE (`RJJOBNBR` dans `F9563110` / `XDJOBNBR` dans `F95630`). Obligatoire. |
| **Language** | Filtre optionnel sur la langue BIP (par ex. `FR`). Quand renseigné, seules les sorties correspondant à cette langue sont extraites. |
| **Extract Mode** | Détermine ce qui est extrait du job — `Extract Input (XML)`, `Extract Output` ou `Extract Both`. Voir ci-dessous. |

### Modes d'extraction

| Mode | Table source | Contenu |
|---|---|---|
| **Extract Input (XML)** | `F95630` | Le XML de données fourni à BI Publisher pour rendre le rapport. Utile pour rejouer le job BIP localement ou transformer les données via un XSL personnalisé. |
| **Extract Output** | `F95631` | Les BLOB de sortie rendus — typiquement PDF, mais XLS / HTML / RTF / ETEXT sont également pris en charge par BIP et extraits tels quels. |
| **Extract Both** | `F95630` + `F95631` | Les deux à la fois. |

---

## Output

| Champ | Description |
|---|---|
| **Output Directory** | Chemin local côté serveur NomaUBL où les fichiers extraits sont écrits. Pré-rempli depuis `global.dirInput` avec `%TEMPLATE%` remplacé par le template choisi. Modifiable directement ou via le bouton **dossier** qui ouvre un sélecteur de répertoire côté serveur. |
| **Extract** | Déclenche l'extraction. Le bouton s'active une fois le numéro de job et le répertoire de sortie renseignés. |

La convention de nommage des fichiers suit les métadonnées du rapport JDE — typiquement `<report>_<version>_<job>.<ext>` (par ex. `R42565_XJDE0001_123456.xml`). En mode *Extract Both*, le `.xml` et la sortie rendue partagent la même base de nom et sont donc déposés côte à côte dans le répertoire de sortie.

---

## Résultat

Après l'extraction, la section **Result** affiche :

- Un message vert **Extraction successful** — ou l'erreur renvoyée par l'API en cas d'échec.
- Le message renvoyé par le serveur (typiquement le chemin absolu des fichiers écrits).

---

## Conseils & bonnes pratiques

- **Les paramètres de connexion proviennent de *Database Connectors → JD Edwards*.** Le schéma et les trois noms de tables (`F95630` / `F95631` / `F9563110`) y sont configurés ; aucune surcharge n'est possible depuis cet écran.
- **Utiliser *Extract Input (XML)* pendant la mise au point d'un XSL.** Le XML de données BIP est exactement le contenu consommé par le moteur de rendu — l'injecter dans une chaîne BIP locale ou NomaUBL reproduit le rapport à l'identique.
- **Utiliser *Extract Output* quand le PDF généré est le livrable.** C'est le mode courant pour les flux d'archivage ou d'envoi par e-mail qui consomment directement le PDF.
- **Le filtre Language ne porte que sur la sortie générée.** Quand *Extract Mode* vaut *Extract Input (XML)*, la langue n'a pas d'effet — le XML de données est indépendant de la langue.
- **Pour une extraction en lot sur plusieurs jobs**, utiliser *Synchronisation → Fetch Input* avec la source BIP, qui découvre les nouveaux jobs et applique les mêmes modes d'extraction par template.
- **Conserver un répertoire de sortie dédié.** Les fichiers sont écrits sous leur nom dérivé de JDE ; un fichier existant à la même destination est écrasé sans avertissement.
