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

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="440" rx="14" fill="url(#fv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Versions de fichiers</text>
  <rect x="608" y="30" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">📦 Exporter</text>
  <rect x="696" y="30" width="84" height="22" rx="5" fill="url(#fv-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="738" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">⤵ Importer</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="200" height="362" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="92" width="184" height="24" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="108" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Filtrer…</text>

  <text x="252" y="138" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">▾ 📁 xsl</text>
  <text x="266" y="156" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">invoices.xsl</text>
  <text x="266" y="172" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">credit_notes.xsl</text>
  <rect x="262" y="180" width="174" height="22" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="270" y="195" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">isc-normalize.xsl</text>
  <text x="252" y="218" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">▾ 📁 config</text>
  <text x="266" y="236" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">config.json</text>
  <text x="266" y="252" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">config-notifications.json</text>
  <text x="252" y="274" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">▾ 📁 pdf-templates</text>
  <text x="266" y="292" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">invoice-fr.rtf</text>
  <text x="252" y="314" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">▸ 📁 scripts</text>
  <text x="252" y="332" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">▸ 📁 archive</text>

  <rect x="452" y="84" width="328" height="362" rx="8" fill="rgba(74,158,255,0.04)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="464" y="108" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">isc-normalize.xsl</text>
  <rect x="608" y="92" width="80" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="648" y="107" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifier</text>
  <rect x="694" y="92" width="80" height="22" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="734" y="107" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Restaurer</text>

  <text x="464" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">HISTORIQUE DES VERSIONS</text>

  <rect x="464" y="148" width="306" height="36" rx="6" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <rect x="472" y="156" width="60" height="20" rx="10" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="502" y="171" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">COURANTE</text>
  <text x="542" y="171" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">v12 · 2026-05-12 14:32 · admin</text>
  <rect x="708" y="158" width="56" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="736" y="169" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">manuel</text>

  <rect x="464" y="190" width="306" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="210" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">v11 · 2026-05-10 09:14 · admin</text>
  <rect x="708" y="198" width="56" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="736" y="209" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">manuel</text>

  <rect x="464" y="228" width="306" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="248" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">v10 · 2026-04-29 17:42 · build.sh</text>
  <rect x="708" y="236" width="56" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="736" y="247" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">build</text>

  <rect x="464" y="266" width="306" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="286" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">v9  · 2026-04-15 11:08 · jde-extract</text>
  <rect x="700" y="274" width="64" height="16" rx="8" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="732" y="285" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">extract</text>

  <rect x="464" y="312" width="306" height="124" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="476" y="330" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIFF — v12 vs v11</text>
  <text x="476" y="350" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">+ &lt;xsl:template match="clientFacturation"&gt;</text>
  <text x="476" y="366" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">+   &lt;xsl:apply-templates select="*"/&gt;</text>
  <text x="476" y="382" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">- &lt;xsl:apply-templates select="raison"/&gt;</text>
  <text x="476" y="406" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">[ Éditeur Monaco au clic Modifier ]</text>
  <text x="476" y="424" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">[ Visionneuse PDF pour .pdf / .rtf ]</text>

  <rect x="20" y="116" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="131" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Arborescence des fichiers</text>
  <text x="30" y="144" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtrable · dossiers dépliables</text>
  <line x1="200" y1="132" x2="248" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fv-arrow)"/>

  <rect x="820" y="148" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="163" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Historique des versions</text>
  <text x="830" y="176" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">version courante + précédentes</text>
  <line x1="820" y1="164" x2="770" y2="164" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fv-arrow)"/>

  <rect x="820" y="232" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Badge Source</text>
  <text x="830" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">manuel / build / extract</text>
  <line x1="820" y1="248" x2="764" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fv-arrow)"/>

  <rect x="20" y="332" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="347" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Diff + Modifier + Restaurer</text>
  <text x="30" y="360" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Monaco · visionneuse PDF</text>
  <line x1="200" y1="348" x2="464" y2="380" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fv-arrow)"/>
</svg>

---

## Disposition

La page est divisée en deux colonnes :

| Colonne | Contenu |
|---|---|
| **Barre latérale gauche** | Champ de recherche + arborescence de tous les fichiers versionnés de l'environnement. Les dossiers sont repliables et affichent le nombre de fichiers qu'ils contiennent. |
| **Panneau principal** | Barre d'outils + zone de contenu dont l'affichage dépend de la sélection courante (fichier courant + historique, sélection multiple, éditeur ou visualiseur PDF). |

---

## Barre latérale — arborescence des fichiers

| Élément | Description |
|---|---|
| **Champ de recherche** | Filtre en direct sur le chemin du fichier (correspondance partielle, insensible à la casse). |
| **Lignes dossier** | Une par répertoire. Cliquer pour développer ou replier. Le badge à droite indique le nombre total de fichiers contenus, en cumulant les sous-dossiers. |
| **Lignes fichier** | Une par fichier avec son nom court et sa taille (B / Ko / Mo). Cliquer pour sélectionner. |
| **Ligne « tout sélectionner »** *(mode package uniquement)* | Bascule la sélection de l'ensemble des fichiers filtrés. |

Quand le *mode Package* est actif, chaque ligne affiche aussi une case à cocher ; les cases des dossiers prennent un **état indéterminé** quand seuls certains enfants sont sélectionnés.

---

## Mode fichier unique (par défaut)

Sélectionner un fichier dans la barre latérale affiche son **historique de versions** dans le panneau principal.

La barre d'outils indique le chemin du fichier et propose le bouton **Téléverser une nouvelle version** (sélecteur de fichier — l'envoi remplace le fichier courant et archive automatiquement la version précédente dans l'historique).

### Tableau d'historique des versions

| Colonne | Description |
|---|---|
| **Version** | `live` pour le fichier courant, `v1`, `v2`… pour les versions historiques. |
| **Date** | Date de création de la version. |
| **Source** | Origine de la version — voir les [badges Source](#badges-source) ci-dessous. |
| **Comment** | Commentaire libre saisi lors de l'envoi (par ex. `Edited in browser`). |
| **Size** | Taille stockée de la version. |
| **Actions** | Boutons par ligne — voir les [actions par ligne](#actions-par-ligne) ci-dessous. |

### Badges Source

| Badge | Signification |
|---|---|
| `upload` *(bleu)* | Téléversement manuel depuis la barre d'outils, ou enregistrement depuis l'éditeur intégré. |
| `restore` *(orange)* | Version générée par restauration d'une version antérieure (le fichier courant précédent est alors archivé sous cette source). |
| `jde_bip` *(violet)* | Extrait depuis JD Edwards BIP — source spécifique à JDE. |
| *(autre)* | Toute autre origine reconnue par l'API. |

### Actions par ligne

| Icône | Disponible sur | Description |
|---|---|---|
| 👁 **Voir** | Ligne live, fichiers **PDF** | Ouvre le PDF en ligne dans le panneau principal via un `<iframe>`. |
| ✏️ **Modifier** | Ligne live, fichiers **texte** | Ouvre le fichier dans l'éditeur Monaco intégré. |
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
| **Options éditeur** | Police monospace, minimap activée, `wordWrap: off`, tabulation 2, formatage au collage activé, thème sombre. |

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

- `Upload success — version N créée`
- `Restore success — version N restaurée`
- `Export success — N fichiers`
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
