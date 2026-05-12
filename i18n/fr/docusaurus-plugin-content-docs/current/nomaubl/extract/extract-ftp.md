---
title: Extraction FTP
description: "Naviguer sur un serveur SFTP distant et télécharger un fichier vers un répertoire local du serveur NomaUBL — utilise les identifiants SFTP configurés dans Connecteurs FTP."
keywords: [NomaUBL, SFTP, FTP, extraction, navigation, téléchargement, JD Edwards, SAP, NetSuite, ERP personnalisé, navigateur de fichiers, dirInput]
---

# Extraction FTP

L'écran **Extraction FTP** permet de naviguer sur un serveur SFTP distant et de télécharger un fichier sélectionné dans un répertoire du serveur NomaUBL local. Les identifiants de connexion sont lus dans *Connecteurs FTP → SFTP Server* ; cette page ne traite que la navigation et le téléchargement.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — tant que les fichiers de la source sont accessibles sur un serveur SFTP.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="efui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="efui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="efui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="400" rx="14" fill="url(#efui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Extraction FTP</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="80" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="265" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">..</text>
  <rect x="296" y="80" width="484" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="306" y="95" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/exports/jde/invoices/2026/05/</text>

  <rect x="240" y="112" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="127" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM · TAILLE · MODIFIÉ</text>

  <rect x="240" y="138" width="540" height="24" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="153" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">📁 ../</text>
  <rect x="240" y="166" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">📁 archive/</text>

  <rect x="240" y="194" width="540" height="24" rx="5" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="252" y="209" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">📄 R42565_FBL00001_42803.xml</text>
  <text x="640" y="209" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">18 Ko</text>
  <text x="720" y="209" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">aujourd. 12:34</text>

  <rect x="240" y="222" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="237" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">📄 R42565_FBL00001_42804.xml</text>
  <text x="640" y="237" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">19 Ko</text>

  <line x1="240" y1="262" x2="780" y2="262" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="284" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉLECTIONNÉ</text>
  <rect x="340" y="274" width="440" height="22" rx="5" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="350" y="289" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">/exports/jde/invoices/2026/05/R42565_FBL00001_42803.xml</text>

  <text x="240" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉPERTOIRE DE SORTIE</text>
  <rect x="380" y="306" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="321" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">/app/input/invoices</text>
  <rect x="716" y="306" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="746" y="321" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📁</text>

  <rect x="240" y="340" width="180" height="28" rx="6" fill="url(#efui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="330" y="358" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">⬇ Télécharger</text>

  <line x1="240" y1="380" x2="780" y2="380" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="402" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Résultat</text>
  <rect x="320" y="390" width="460" height="22" rx="5" fill="#0d1220" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="332" y="405" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ 18 Ko téléchargés → /app/input/invoices/R42565_FBL00001_42803.xml</text>

  <rect x="20" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chemin + parent</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">démarre à la racine SFTP</text>
  <line x1="220" y1="96" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#efui-arrow)"/>

  <rect x="20" y="194" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="209" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélection par clic</text>
  <text x="30" y="222" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un fichier à la fois</text>
  <line x1="220" y1="210" x2="240" y2="206" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#efui-arrow)"/>

  <rect x="820" y="306" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="321" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Destination locale</text>
  <text x="830" y="334" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">défaut : dirInput</text>
  <line x1="820" y1="322" x2="780" y2="318" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#efui-arrow)"/>
</svg>

---

## Navigateur FTP

L'écran combine un navigateur de fichiers côté serveur, le répertoire de sortie local et le bouton de téléchargement dans une seule section.

### Barre de chemin

La barre en haut de la liste affiche le chemin SFTP courant. À l'ouverture, le chemin est vide (racine du `Directory` configuré dans *Connecteurs FTP*). Le bouton `..` remonte d'un niveau.

### Liste de fichiers

Une ligne par entrée. Les dossiers s'affichent dans la couleur d'accent avec une icône dossier — un clic ouvre leur contenu. Les fichiers utilisent l'icône XML et affichent leur taille en B / Ko / Mo — un clic les sélectionne. Un répertoire vide affiche une ligne `No files found`.

### Formulaire

| Champ | Description |
|---|---|
| **Selected** | Aperçu en lecture seule du chemin SFTP complet du fichier sélectionné. Visible une fois un fichier sélectionné. |
| **Output Directory** | Chemin local côté serveur NomaUBL où le fichier est écrit. Pré-rempli depuis `global.dirInput`, avec tous les placeholders (`%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`) résolus et `%TEMPLATE%` retiré. Modifiable. |
| **Download** | Déclenche le téléchargement SFTP. Le bouton s'active une fois un fichier sélectionné et le répertoire de sortie renseigné. |

---

## Résultat

Après le téléchargement, la section **Result** affiche le message de succès ou d'erreur renvoyé par l'API. La section apparaît dès qu'un téléchargement est lancé.

---

## Conseils & bonnes pratiques

- **Le répertoire de départ correspond au `Directory` défini dans *Connecteurs FTP → SFTP Server*.** La navigation au-dessus de cette racine est permise ; les répertoires accessibles dépendent du répertoire personnel de l'utilisateur SFTP côté serveur.
- **Le répertoire de sortie accepte tout chemin absolu** — la valeur par défaut résolue peut être modifiée manuellement avant le téléchargement.
- **La page télécharge un fichier à la fois.** Pour un téléchargement en lot, utiliser *Synchronisation → Fetch Input*, qui parcourt le répertoire SFTP selon les règles configurées.
- **Le fichier conserve son nom d'origine** côté local — il n'y a pas d'option de renommage ici. Renommage local possible ensuite si nécessaire.
