---
title: Visualiseur XML
description: "Ouvrir n'importe quel fichier XML — local ou serveur — dans un éditeur Monaco avec coloration syntaxique, mise en forme automatique, numéros de ligne et enregistrement serveur. Le complément léger du validateur et de l'Éditeur XSL."
keywords: [NomaUBL, XML, visualiseur, éditeur, Monaco, mise en forme, pretty-print, JD Edwards, SAP, NetSuite, ERP personnalisé, UBL, spool source, BIP]
---

# Visualiseur XML

Le **Visualiseur XML** ouvre n'importe quel fichier `.xml` — choisi sur l'ordinateur local ou à un chemin du serveur NomaUBL — dans un éditeur **Monaco** complet avec coloration syntaxique XML, numéros de ligne, minimap et mise en forme automatique. Le tampon est éditable directement et peut être réécrit vers un chemin serveur.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. C'est un éditeur générique pour tout XML manipulé par la plateforme : documents UBL, spools sources bruts, XML de données BIP, rapports de validation, extraits de configuration.

Le visualiseur n'effectue aucune validation, aucune transformation et aucun dépôt — c'est un outil volontairement léger, complémentaire des écrans spécialisés :

- Pour **transformer** un XML source en UBL : *Outils UBL → Éditeur XSL*.
- Pour **valider** un UBL ou un XML source : *Outils UBL → Valider*.
- Pour **inspecter une facture archivée** par clé documentaire : *Extract → Extraction d'archive*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xvui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="xvui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="xvui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="400" rx="14" fill="url(#xvui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Visualiseur XML</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="80" width="140" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="96" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📂 Depuis l'ordinateur</text>
  <rect x="388" y="80" width="130" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="453" y="96" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗄 Depuis le serveur</text>
  <rect x="630" y="80" width="80" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="670" y="96" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">{`{ } Mise en forme`}</text>
  <rect x="716" y="80" width="64" height="24" rx="5" fill="url(#xvui-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="748" y="96" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">💾 Enreg.</text>

  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHEMIN SERVEUR</text>
  <rect x="360" y="118" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="370" y="133" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">/app/input/invoices/INV-2026-0143.xml</text>

  <rect x="240" y="150" width="540" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="252" y="165" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">ℹ Chargé : INV-2026-0143.xml</text>

  <rect x="240" y="182" width="540" height="226" rx="8" fill="#020617" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="182" width="540" height="22" rx="8" fill="#0d1220"/>
  <text x="248" y="197" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">INV-2026-0143.xml · 87 lignes · XML · UTF-8</text>

  <text x="262" y="222" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">1</text>
  <text x="272" y="222" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;?xml </text>
  <text x="302" y="222" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">version</text>
  <text x="338" y="222" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">=</text>
  <text x="346" y="222" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">"1.0"</text>
  <text x="380" y="222" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">encoding</text>
  <text x="420" y="222" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">=</text>
  <text x="428" y="222" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">"UTF-8"</text>
  <text x="470" y="222" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">?&gt;</text>

  <text x="262" y="240" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">2</text>
  <text x="272" y="240" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Invoice </text>
  <text x="312" y="240" fill="#7dd3fc" fontSize="9" fontFamily="ui-monospace, monospace">xmlns</text>
  <text x="340" y="240" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">=</text>
  <text x="348" y="240" fill="#86efac" fontSize="9" fontFamily="ui-monospace, monospace">"urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"</text>
  <text x="540" y="240" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&gt;</text>

  <text x="262" y="258" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">3</text>
  <text x="280" y="258" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cbc:CustomizationID</text>
  <text x="372" y="258" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&gt;</text>
  <text x="378" y="258" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">urn:cen.eu:en16931:2017</text>
  <text x="492" y="258" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/cbc:CustomizationID&gt;</text>

  <text x="262" y="276" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">4</text>
  <text x="280" y="276" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cbc:ID&gt;</text>
  <text x="320" y="276" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV-2026-0143</text>
  <text x="392" y="276" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/cbc:ID&gt;</text>

  <text x="262" y="294" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">5</text>
  <text x="280" y="294" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cbc:IssueDate&gt;</text>
  <text x="354" y="294" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-05-07</text>
  <text x="412" y="294" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/cbc:IssueDate&gt;</text>

  <text x="262" y="312" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">6</text>
  <text x="280" y="312" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cac:AccountingSupplierParty&gt;</text>

  <text x="262" y="330" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">7</text>
  <text x="288" y="330" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cac:Party&gt;</text>

  <text x="262" y="348" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">8</text>
  <text x="296" y="348" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cac:PartyName&gt;</text>

  <text x="262" y="366" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">9</text>
  <text x="304" y="366" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;cbc:Name&gt;</text>
  <text x="356" y="366" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ACME France SAS</text>
  <text x="438" y="366" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/cbc:Name&gt;</text>

  <text x="252" y="384" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">10</text>
  <text x="296" y="384" fill="#a78bfa" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/cac:PartyName&gt;</text>

  <rect x="744" y="208" width="32" height="180" rx="3" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="746" y="210" width="28" height="32" rx="2" fill="rgba(74,158,255,0.15)"/>
  <rect x="746" y="246" width="28" height="60" rx="2" fill="rgba(255,255,255,0.04)"/>

  <rect x="20" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux sources</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fichier local ou serveur</text>
  <line x1="220" y1="96" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xvui-arrow)"/>

  <rect x="820" y="80" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mise en forme + Enreg.</text>
  <text x="830" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">indentation puis écriture</text>
  <line x1="820" y1="96" x2="780" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xvui-arrow)"/>

  <rect x="20" y="182" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="197" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Éditeur Monaco</text>
  <text x="30" y="210" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">coloration · numéros · minimap</text>
  <line x1="220" y1="198" x2="240" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xvui-arrow)"/>
</svg>

---

## Barre d'outils

| Élément | Description |
|---|---|
| **Load from computer** | Ouvre le sélecteur de fichiers du système d'exploitation. Le `.xml` choisi est lu côté navigateur, mis en forme et chargé dans l'éditeur. Le champ de chemin serveur est pré-rempli avec le nom local du fichier — un **Save to server** ultérieur écrira le fichier sous ce nom. |
| **Load from server** | Ouvre un navigateur de fichiers côté serveur. Le fichier sélectionné est lu via l'API et chargé dans l'éditeur ; le champ de chemin serveur reçoit le chemin absolu, ainsi **Save to server** réécrit le fichier en place. |
| **Server path** | Chemin absolu modifiable utilisé par **Save to server**. Pré-rempli par les deux actions de chargement ; modifiable librement avant l'enregistrement — pratique pour un effet *Save As*. |
| **Format** | Met en forme le tampon courant (ré-indentation, retours à la ligne). Actif une fois un fichier chargé. |
| **Save to server** | Écrit le tampon courant à l'emplacement **Server path** via l'API. Actif une fois un fichier chargé et le chemin renseigné. |

---

## Zone d'édition

Une fois un fichier chargé, l'éditeur occupe le reste de la page. Il s'appuie sur le même moteur Monaco et le même thème que l'*Éditeur XSL* :

- Coloration syntaxique XML et appariement des balises
- Numéros de ligne, minimap, thème sombre
- `tabSize: 2`, `wordWrap: 'off'`, mise en forme automatique au collage

Tant qu'aucun fichier n'est chargé, un **état vide** est affiché à la place — un clic dessus déclenche le sélecteur de fichiers local (équivalent de **Load from computer**).

---

## Messages de statut

Un message en ligne s'affiche en haut de la zone d'édition après chaque action :

- `Loaded: <nom>` (info, bleu) au chargement d'un fichier.
- `Saved to: <chemin>` (succès, vert) à la suite d'un enregistrement réussi.
- Le message d'erreur renvoyé par l'API en cas d'échec de chargement ou d'enregistrement (rouge).

---

## Conseils & bonnes pratiques

- **Utiliser Format après un collage.** La mise en forme automatique au collage gère les ajouts ponctuels ; pour un XML reçu sur une seule ligne, le bouton **Format** rend le XML lisible.
- **Modifier le champ Server path avant d'enregistrer** permet d'écrire le fichier à un autre emplacement — un *Save As* intégré.
- **Le visualiseur n'écrase rien automatiquement, sauf via Save.** Charger un autre fichier remplace le tampon sans toucher au disque ; seul **Save to server** enregistre.
- **Pour des transformations répétables, préférer l'Éditeur XSL.** L'édition à la main produit un résultat ponctuel ; l'Éditeur XSL applique le même mapping à chaque facture suivante.
- **Pour la validation, préférer l'écran Validate.** Le visualiseur n'exécute ni XSD ni Schematron — il affiche simplement le XML brut.
