---
title: Versions de fichiers
description: "Naviguer dans l'arborescence de fichiers d'un environnement NomaUBL, consulter et restaurer les versions antérieures, éditer les fichiers texte dans l'application, visualiser les PDF, et exporter / importer des packages multi-fichiers entre environnements."
keywords: [NomaUBL, versions de fichiers, historique des versions, restauration, package, export, import, Monaco editor, visualiseur PDF, fichiers d'environnement, JD Edwards, SAP, NetSuite]
---

# Versions de fichiers

La page **File Versions** permet de parcourir tous les fichiers gérés par un environnement NomaUBL (XSL, RTF, XML, configuration, scripts…), de consulter l'**historique des versions** de chaque fichier, d'**éditer les fichiers texte**, de **visualiser les PDF**, de **restaurer une version antérieure** ou de **packager des fichiers** pour les transférer d'un environnement à un autre.

Le référentiel de fichiers est commun à tous les déploiements NomaUBL — la page s'applique que le système source soit JD Edwards, SAP, NetSuite ou tout autre ERP. Les artéfacts extraits depuis JDE coexistent avec les fichiers édités à la main ; leur origine est tracée dans l'historique (voir le badge *Source* ci-dessous).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 476" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fvui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fvui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fvui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="fvui-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="436" rx="14" fill="url(#fvui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Versions des fichiers</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Suivre et restaurer les versions précédentes des fichiers de configuration et de modèles</text>
  <rect x="236" y="80" width="230" height="362" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="244" y="88" width="214" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="102.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Filtrer par nom de fichier…</text>
  <text x="248" y="136" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">▾ CONFIG</text>
  <text x="454" y="136" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <rect x="244" y="148" width="214" height="32" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="154.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="167.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="163" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">config.json</text>
  <text x="280" y="176" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">48.2 KB</text>
  <rect x="244" y="184" width="214" height="32" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="190.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="203.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="199" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">config-notifications.json</text>
  <text x="280" y="212" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">3.1 KB</text>
  <text x="248" y="232" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">▾ XSL</text>
  <text x="454" y="232" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <rect x="244" y="244" width="214" height="32" rx="8" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="252" y="250.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="263.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="259" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">invoices.xsl</text>
  <text x="280" y="272" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">21.4 KB</text>
  <rect x="244" y="280" width="214" height="32" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="286.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="299.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="295" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">credit_notes.xsl</text>
  <text x="280" y="308" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">19.8 KB</text>
  <rect x="244" y="316" width="214" height="32" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="322.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="335.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="331" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">invoices-pre.xsl</text>
  <text x="280" y="344" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">4.0 KB</text>
  <text x="248" y="364" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">▸ TEMPLATE</text>
  <text x="454" y="364" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <text x="248" y="388" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">▸ UBL</text>
  <text x="454" y="388" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">10</text>
  <text x="480" y="98" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">xsl/invoices.xsl</text>
  <rect x="853" y="86" width="111" height="22" rx="5" fill="url(#fvui-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.5" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Nouvelle version</text>
  <rect x="781" y="86" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="814.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Comparer</text>
  <rect x="714" y="86" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="744.5" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Package</text>
  <text x="480" y="130" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">HISTORIQUE DES VERSIONS</text>
  <rect x="480" y="140" width="484" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="155.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="546" y="155.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE</text>
  <text x="656" y="155.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="732" y="155.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAR</text>
  <text x="792" y="155.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMMENTAIRE</text>
  <rect x="480" y="168" width="484" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="183.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">live</text>
  <text x="546" y="183.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">26/11/2026 14:32</text>
  <rect x="656" y="172.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="679.0" y="183.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">upload</text>
  <text x="732" y="183.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="792" y="183.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Edited in browser</text>
  <rect x="480" y="196" width="484" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="211.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">v12</text>
  <text x="546" y="211.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">20/11/2026 09:14</text>
  <rect x="656" y="200.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="679.0" y="211.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">upload</text>
  <text x="732" y="211.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="792" y="211.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Edited in browser</text>
  <rect x="480" y="224" width="484" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="239.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">v11</text>
  <text x="546" y="239.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12/11/2026 17:42</text>
  <rect x="656" y="228.0" width="51" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="681.5" y="239.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">restore</text>
  <text x="732" y="239.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="792" y="239.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="480" y="252" width="484" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="267.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">v10</text>
  <text x="546" y="267.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">02/11/2026 11:08</text>
  <rect x="656" y="256.0" width="60" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="686.0" y="267.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">promotion</text>
  <text x="732" y="267.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">system</text>
  <text x="792" y="267.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Livraison R1</text>
  <rect x="486" y="288" width="472" height="82" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="500" y="308" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modifications non enregistrées</text>
  <text x="500" y="325" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les modifications de xsl/invoices.xsl ne sont pas enregistrées. Ouvrir l'autre fichier et les perdre ?</text>
  <rect x="885" y="338" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="915.5" y="352.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="734" y="338" width="145" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="806.5" y="352.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvrir l'autre fichier</text>
  <rect x="20" y="112" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dossiers en titres</text>
  <text x="30" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvrir / fermer · nombre de fichiers</text>
  <line x1="200" y1="129.0" x2="248" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fvui-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fichiers en cartes</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom et taille · clic pour ouvrir</text>
  <line x1="200" y1="247.0" x2="244" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fvui-arrow)"/>
  <rect x="1000" y="50" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Barre d'outils</text>
  <text x="1010" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">envoi · comparer · package</text>
  <line x1="1000" y1="67.0" x2="960" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fvui-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Historique des versions</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fichier actuel + versions</text>
  <line x1="1000" y1="177.0" x2="960" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fvui-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifications en cours</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">demande avant d'ouvrir un autre</text>
  <line x1="1000" y1="317.0" x2="958" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fvui-arrow)"/>
</svg>

---

## Disposition

La page est divisée en deux colonnes :

| Colonne | Contenu |
|---|---|
| **Barre latérale gauche** | Champ de recherche + tous les fichiers versionnés de l'environnement, regroupés par dossier : les dossiers sont des titres repliables qui affichent leur nombre de fichiers, les fichiers des cartes. |
| **Panneau principal** | Barre d'outils + zone de contenu dont l'affichage dépend de la sélection courante (fichier courant + historique, sélection multiple, éditeur ou visualiseur PDF). |

---

## Barre latérale — arborescence des fichiers

| Élément | Description |
|---|---|
| **Champ de recherche** | Filtre en direct sur le chemin du fichier (correspondance partielle, insensible à la casse). |
| **Titres de dossier** | Un par répertoire, en capitales, précédé d'un chevron. Cliquer pour développer ou replier. Le nombre à droite indique le total des fichiers contenus, sous-dossiers compris ; les sous-dossiers sont décalés sous leur parent. |
| **Cartes fichier** | Une carte par fichier : une icône, le nom court et la taille (B / Ko / Mo). Cliquer pour sélectionner ; le fichier sélectionné est encadré en bleu. |
| **Ligne « tout sélectionner »** *(mode package uniquement)* | Bascule la sélection de l'ensemble des fichiers filtrés. |

Quand le *mode Package* est actif, l'icône des cartes est remplacée par une case à cocher, présente aussi sur chaque titre de dossier ; les cases des dossiers prennent un **état indéterminé** quand seuls certains enfants sont sélectionnés.

---

## Mode fichier unique (par défaut)

Sélectionner un fichier dans la barre latérale affiche son **historique de versions** dans le panneau principal.

La barre d'outils indique le chemin du fichier et propose le bouton **Nouvelle version** (sélecteur de fichier — l'envoi remplace le fichier courant et archive automatiquement la version précédente dans l'historique).

### Tableau d'historique des versions

| Colonne | Description |
|---|---|
| **Version** | `live` pour le fichier courant, `v1`, `v2`… pour les versions historiques. |
| **Date** | Date de création de la version. |
| **Source** | Origine de la version — voir les [badges Source](#badges-source) ci-dessous. |
| **Par** | Auteur de la version : l'utilisateur connecté pour une modification faite depuis l'application, `system` pour une modification faite par une tâche, la ligne de commande ou une mise à jour. |
| **Comment** | Commentaire libre saisi lors de l'envoi (par ex. `Edited in browser`). |
| **Size** | Taille stockée de la version. |
| **Actions** | Boutons par ligne — voir les [actions par ligne](#actions-par-ligne) ci-dessous. |

### Badges Source

| Badge | Signification |
|---|---|
| `upload` *(bleu)* | Téléversement manuel depuis la barre d'outils, ou enregistrement depuis l'éditeur intégré. |
| `restore` *(orange)* | Version générée par restauration d'une version antérieure (le fichier courant précédent est alors archivé sous cette source). |
| `upstream` *(ardoise)* | Version livrée d'un fichier conservé par une montée de version du framework. Écrite par la montée de version sous `<name>.upstream` — son rôle est de fournir la référence éditeur à comparer à un fichier courant personnalisé (voir [Comparer avec l'upstream](#upstream) plus bas). |
| `jde_bip` *(violet)* | Extrait depuis JD Edwards BIP — source spécifique à JDE. |
| `promotion` *(gris)* | Instantané pris par un import de [promotion](./promotion.md) avant l'écrasement du fichier ; le commentaire est celui saisi à l'import. |
| *(autre)* | Toute autre origine reconnue par l'API. |

### Actions par ligne

| Icône | Disponible sur | Description |
|---|---|---|
| 👁 **Voir** | Ligne live, fichiers **PDF** | Ouvre le PDF en ligne dans le panneau principal via un `<iframe>`. |
| ✏️ **Modifier** | Ligne live, fichiers **texte** | Ouvre le fichier dans l'éditeur Monaco intégré. |
| ⇄ **Comparer à la précédente** | Toutes les lignes sauf la plus ancienne, fichiers **texte** | Ouvre la comparaison côte à côte de cette version et de celle qui la précède immédiatement — voir [Mode Comparer](#mode-comparer) ci-dessous. |
| ⬇ **Télécharger** | Toutes les lignes | Télécharge le fichier (live ou historique). Les versions historiques sont nommées `<fichier>.v<n>`. |
| 🔄 **Restaurer** | Lignes historiques uniquement | Restaure la version historique comme fichier courant. Une confirmation s'affiche au préalable ; le fichier courant précédent est archivé en nouvelle version `restore`. |

---

## Mode édition (fichiers texte)

Cliquer sur l'icône **Modifier** de la ligne live d'un fichier texte ouvre l'**éditeur Monaco** (le moteur utilisé par VS Code) directement dans le panneau principal.

| Aspect | Comportement |
|---|---|
| **Langages détectés** | `.xml` / `.xsl` / `.xslt` → XML ; `.json` → JSON ; `.css` → CSS ; `.js` → JavaScript ; `.html` / `.htm` → HTML ; tout le reste → texte brut. |
| **Extensions reconnues comme texte** | `xml`, `xsl`, `xslt`, `json`, `txt`, `cfg`, `csv`, `html`, `htm`, `css`, `js`, `properties`, `md`, `log`. |
| **Enregistrer** | Téléverse le contenu en nouvelle version avec le commentaire `Edited in browser`. Le fichier courant précédent est archivé automatiquement. |
| **Annuler** | Ferme l'éditeur sans enregistrer. |
| **Autre fichier** | Choisir un autre fichier dans la barre latérale ferme l'éditeur et ouvre ce fichier. Si l'éditeur contient des modifications non enregistrées, une fenêtre **Modifications non enregistrées** demande d'abord confirmation — *Les modifications de … ne sont pas enregistrées. Ouvrir l'autre fichier et les perdre ?* — avec **Ouvrir l'autre fichier** ou **Annuler** (retour à l'éditeur). Le visualiseur PDF se ferme de la même façon. |
| **Options éditeur** | Police monospace, minimap activée, `wordWrap: off`, tabulation 2, formatage au collage activé, thème sombre. |

---

## Mode Comparer \{#mode-comparer\}

Pour n'importe quel fichier **texte** (XSL, XML, JSON, SQL, properties, MD, CSS, JS, HTML, TXT, CSV, CFG, LOG…), deux versions peuvent s'ouvrir côte à côte — la même vue de différences que VS Code, utile pour revoir l'évolution d'un modèle ou d'un fichier de configuration au fil du temps. Le fichier courant figure aussi dans le sélecteur, donc une version historique peut être confrontée à l'état actuel.

### Ouvrir la comparaison

Deux façons d'entrer dans la comparaison :

- **En un clic — comparer à la précédente.** Cliquer sur l'icône **⇄** d'une ligne de l'historique. La version sélectionnée s'ouvre à droite, celle qui la précède à gauche. C'est le cas le plus courant quand vous voulez juste voir ce qu'a apporté une version donnée.
- **Comparer deux versions au choix.** Activer **Comparer** dans la barre d'outils, puis cliquer sur deux lignes du tableau d'historique — l'ordre de sélection détermine de quel côté chaque version se positionne. Le bandeau affiche la paire sélectionnée et propose un bouton **Confirmer** pour ouvrir la comparaison.

### La vue côte à côte

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontWeight: 700, fontSize: '13px'}}>invoices/invoices.xsl — v3 ↔ v4</div>
    <div style={{display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px'}}>
      <span style={{padding: '3px 9px', borderRadius: '999px', background: 'rgba(255,159,10,0.10)', border: '1px solid rgba(255,159,10,0.40)', color: '#fb923c', fontWeight: 600}}>3 modifications</span>
      <span style={{opacity: 0.6}}>✕ Fermer</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
    <div style={{padding: '8px 14px', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderRight: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>v3 — 12/04/2026</div>
    <div style={{padding: '8px 14px', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, background: 'rgba(255,255,255,0.03)'}}>v4 — 02/05/2026 <span style={{marginLeft: 8, opacity: 0.55, fontStyle: 'italic', textTransform: 'none', letterSpacing: 0}}>live</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', fontFamily: 'ui-monospace, monospace', fontSize: '11px', lineHeight: '1.7'}}>
    <div style={{padding: '10px 14px', borderRight: '1px solid rgba(255,255,255,0.08)'}}>
      <div><span style={{opacity: 0.4, marginRight: 10}}>17</span>&lt;xsl:variable name="<span style={{color: '#60a5fa'}}>currency</span>"&gt;</div>
      <div style={{background: 'rgba(255,69,58,0.10)'}}><span style={{opacity: 0.4, marginRight: 10}}>18</span>  <span style={{color: '#f87171'}}>EUR</span></div>
      <div><span style={{opacity: 0.4, marginRight: 10}}>19</span>&lt;/xsl:variable&gt;</div>
      <div style={{opacity: 0.5}}>…</div>
      <div style={{background: 'rgba(255,69,58,0.10)'}}><span style={{opacity: 0.4, marginRight: 10}}>42</span>&lt;xsl:value-of select="<span style={{color: '#f87171'}}>$amount</span>"/&gt;</div>
    </div>
    <div style={{padding: '10px 14px'}}>
      <div><span style={{opacity: 0.4, marginRight: 10}}>17</span>&lt;xsl:variable name="<span style={{color: '#60a5fa'}}>currency</span>"&gt;</div>
      <div style={{background: 'rgba(50,215,75,0.10)'}}><span style={{opacity: 0.4, marginRight: 10}}>18</span>  <span style={{color: '#4ade80'}}>$header/cbc:DocumentCurrencyCode</span></div>
      <div><span style={{opacity: 0.4, marginRight: 10}}>19</span>&lt;/xsl:variable&gt;</div>
      <div style={{opacity: 0.5}}>…</div>
      <div style={{background: 'rgba(50,215,75,0.10)'}}><span style={{opacity: 0.4, marginRight: 10}}>42</span>&lt;xsl:value-of select="<span style={{color: '#4ade80'}}>format-number($amount, '0.00')</span>"/&gt;</div>
    </div>
  </div>
</div>

| Aspect | Comportement |
|---|---|
| **Disposition** | Plein écran, version la plus ancienne à gauche, la plus récente à droite. Le bandeau du haut affiche le chemin du fichier, les deux libellés de version et le compteur des lignes modifiées. |
| **Mise en évidence** | Chaque ligne colorée selon le changement — vert pour les ajouts, rouge pour les suppressions, les deux teintes pour les modifications. Les zones inchangées sont repliables. |
| **Coloration syntaxique** | Le même moteur Monaco que celui du [Mode édition](#mode-édition-fichiers-texte) — langage détecté automatiquement depuis l'extension du fichier. |
| **Défilement** | Synchronisé entre les deux volets — faire défiler un côté entraîne l'autre dans le même mouvement. |
| **Fermer** | **Échap** ou le bouton **Fermer** du bandeau revient au tableau d'historique. |

Les fichiers binaires (PDF, ZIP, images…) n'apparaissent pas dans le sélecteur — la comparaison est réservée aux extensions texte listées dans le [Mode édition](#mode-édition-fichiers-texte).

### Comparer un fichier personnalisé à sa version upstream \{#upstream\}

Quand une montée de version du framework **conserve** un fichier personnalisé (par exemple un `ubl-defaults.xsl` dérivé que vous avez modifié à la main), elle enregistre à côté la version éditeur fraîchement livrée sous `<name>.upstream`. Elle apparaît dans l'historique de versions comme une ligne supplémentaire avec le badge `upstream`, et elle figure dans le sélecteur *Comparer* comme n'importe quelle autre version historique.

Le mode d'emploi :

1. Ouvrir l'historique de versions du fichier personnalisé.
2. Activer **Comparer** dans la barre d'outils.
3. Choisir votre fichier courant personnalisé d'un côté et la ligne `upstream` de l'autre.
4. Ouvrir le diff pour voir précisément ce que la nouvelle version du framework a changé, puis fusionner ces changements dans votre fichier personnalisé à la main.

La ligne `upstream` est rafraîchie à chaque montée de version qui continue de conserver le fichier — `<name>.upstream` reflète donc toujours la référence éditeur actuelle, pas celle d'une version passée. Quand la montée de version finit par ne plus conserver le fichier (parce que vos modifications ont été fusionnées dans l'éditeur, ou parce que le fichier a été remis à la valeur livrée), la ligne `upstream` cesse d'être rafraîchie.

---

## Visualiseur PDF

Cliquer sur l'icône **Voir** de la ligne live d'un PDF ouvre le fichier en ligne dans le panneau principal via un `<iframe>` sécurisé (le jeton d'authentification est transmis en paramètre de requête s'il est présent). Cliquer sur **Fermer** dans la barre d'outils pour revenir à l'historique des versions.

---

## Mode Package

Activer le bouton **Mode Package** dans la barre d'outils bascule la page d'actions par fichier vers une **sélection multi-fichiers** pour les transferts entre environnements.

| Action | Description |
|---|---|
| **Exporter** | Exporte tous les fichiers sélectionnés sous forme de package téléchargeable. La barre d'outils affiche le nombre de fichiers sélectionnés et la taille totale. |
| **Importer** | Importe un package préalablement exporté (`.zip`). Le message de statut indique le nombre de fichiers importés. |

Aides à la sélection :

- **Cases à cocher par fichier** dans l'arborescence
- **Case à cocher par dossier** — bascule l'ensemble des fichiers descendants ; affiche un état *indéterminé* en cas de sélection partielle.
- **Ligne « tout sélectionner »** en haut — bascule l'ensemble des fichiers du filtre courant.

Quitter le mode Package (en désactivant le bouton) vide la sélection.

---

## Messages de statut

Des messages en ligne s'affichent en haut du panneau principal et disparaissent automatiquement après 4 secondes :

- `Fichier envoyé avec succès (version N).`
- `Version N restaurée avec succès.`
- `Package exporté (N fichiers)`
- `Import success — N fichiers`
- Le message d'erreur de l'API en cas d'échec.

---

## Conseils & bonnes pratiques

- **Utiliser l'éditeur pour les ajustements ponctuels**, le téléversement pour les remplacements en masse. L'éditeur enregistre une nouvelle version avec un commentaire `Edited in browser` clairement repérable dans l'historique.
- **Restaurer n'est pas destructif.** L'opération archive le fichier courant avant de restaurer la version historique, ce qui permet de revenir en arrière en cas d'erreur de manipulation.
- **Le mode Package est la méthode recommandée pour propager des modèles XSL / RTF de dev → recette → production.** Éviter les copies manuelles entre environnements — le packaging préserve les métadonnées de version.
- **Exclure les fichiers d'origine `jde_bip` pendant un packaging**, sauf si l'environnement cible pointe sur le même JDE — il s'agit en général de sorties spécifiques à un environnement, non transférables.
- **Surveiller le compteur de fichiers par dossier** en cas de travail sur de grandes arborescences XSL — c'est le moyen le plus rapide de repérer un sous-ensemble mal packagé.
- **Télécharger une version historique avant de la restaurer** pour garder une copie locale du fichier courant et de la version restaurée hors de NomaUBL.
