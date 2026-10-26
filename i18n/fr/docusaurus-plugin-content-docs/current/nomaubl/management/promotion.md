---
title: Promotion
description: "Transférer la configuration NomaUBL d'une instance à l'autre élément par élément — documents avec leurs fichiers XSL, RTF et Schematron, modèles PDF, listes, règles de notification, rapports quotidiens, reprises automatiques, contrôles du cycle de vie, connecteurs et modèles de réglages — dans un paquet sans les clés propres à l'instance, avec aperçu, comparaison champ par champ et instantané de version avant chaque écriture."
keywords: [NomaUBL, promotion, export, import, paquet, environnements, développement, recette, production, transport de configuration, aperçu, comparaison, instantané, clés d'instance, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Promotion

La page **Promotion** transfère la configuration d'une instance à une autre — du développement vers la recette, de la recette vers la production — **élément par élément**, avec les fichiers utilisés par chaque élément. L'export produit un paquet ; l'import montre ce que le paquet modifierait, champ par champ, puis l'écrit après un instantané de version. Les clés propres à une instance — mots de passe, URL, hôtes, licence, nom de l'environnement… — **ne voyagent jamais** et ne sont jamais écrasées sur la cible.

Accès : **Gestion → Promotion**. La page compte trois vues : **Export** (préparer un paquet, ou promouvoir la sélection directement vers une autre instance), **Import** (appliquer un paquet) et **Historique**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 392" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="346" rx="14" fill="url(#pm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Promotion</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Transférer documents, modèles PDF, listes, tâches, connecteurs et réglages d'une instance à l'autre.</text>
  <rect x="240" y="80" width="136" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="81" width="66" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="274.0" y="95.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter</text>
  <line x1="308" y1="85" x2="308" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="342.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Importer</text>
  <rect x="420" y="80" width="240" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="95.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Filtrer les éléments…</text>
  <rect x="240" y="116" width="470" height="230" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="127" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M254.5,132.5 L256.8,134.8 L260.8,130" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="269" y="136" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">DOCUMENT (2)</text>
  <rect x="264" y="151" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M266.5,156.5 L268.8,158.8 L272.8,154" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="281" y="160" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">invoices</text>
  <text x="340" y="160" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">— Factures clients</text>
  <rect x="280" y="167" width="117" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="338.5" y="178.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">pdf-template:standard</text>
  <rect x="403" y="167" width="94" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="450.0" y="178.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">xsl/invoices.xsl</text>
  <rect x="503" y="167" width="113" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="559.5" y="178.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ubl/invoices-ubl.xsl</text>
  <rect x="264" y="193" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="281" y="202" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">credit_notes</text>
  <text x="356" y="202" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">— Avoirs</text>
  <rect x="252" y="223" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="232" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">MODÈLE PDF (1)</text>
  <rect x="264" y="247" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M266.5,252.5 L268.8,254.8 L272.8,250" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="281" y="256" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">standard</text>
  <rect x="333.8" y="244" width="65" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="366.3" y="255.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">dépendance</text>
  <rect x="252" y="277" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="286" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">CONNECTEUR (3)  ›</text>
  <rect x="252" y="299" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="308" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">MODÈLE DE RÉGLAGES (4)  ›</text>
  <rect x="722" y="116" width="238" height="230" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="736" y="138" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Sélection</text>
  <text x="736" y="158" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">1 élément(s), 1 dépendance(s), 2 fichier(s)</text>
  <text x="736" y="184" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Le paquet contient les éléments, leurs</text>
  <text x="736" y="199" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">fichiers relatifs à la racine et un</text>
  <text x="736" y="214" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">manifeste. Mots de passe, secrets, URL,</text>
  <text x="736" y="229" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">hôtes, licence… ne sont jamais exportés.</text>
  <rect x="736" y="260" width="210" height="26" rx="5" fill="url(#pm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="841.0" y="276.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Exporter le paquet</text>
  <rect x="736" y="294" width="210" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.0" y="309.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Vider la sélection</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter ou importer</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">aperçu avant toute écriture</text>
  <line x1="200" y1="93.0" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Arborescence par type</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cocher un type = tout</text>
  <line x1="200" y1="157.0" x2="252" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dépendances</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fichiers et modèle PDF suivent</text>
  <line x1="200" y1="247.0" x2="280" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouté automatiquement</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">désigné par un document</text>
  <line x1="200" y1="317.0" x2="333.8" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compteur de sélection</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">éléments, dépendances, fichiers</text>
  <line x1="1000" y1="167.0" x2="960" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clés d'instance</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jamais exportées ni écrasées</text>
  <line x1="1000" y1="247.0" x2="960" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter le paquet</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ZIP : manifeste, éléments, fichiers</text>
  <line x1="1000" y1="307.0" x2="946" y2="273" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pm-arrow)"/>
</svg>

<svg viewBox="0 0 760 170" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: '760px', margin: '24px 0', fontFamily: 'system-ui, sans-serif'}}>
  <defs><marker id="pr-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#4a9eff"/></marker></defs>
  <rect x="10" y="30" width="200" height="110" rx="10" fill="rgba(74,158,255,0.08)" stroke="#4a9eff"/>
  <text x="110" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Instance source</text>
  <text x="110" y="80" textAnchor="middle" fontSize="12" fill="currentColor">Exporter : cocher les éléments</text>
  <text x="110" y="100" textAnchor="middle" fontSize="12" fill="currentColor">dépendances ajoutées</text>
  <text x="110" y="120" textAnchor="middle" fontSize="12" fill="currentColor">Exporter le paquet</text>
  <line x1="210" y1="85" x2="280" y2="85" stroke="#4a9eff" strokeWidth="2" markerEnd="url(#pr-arrow)"/>
  <rect x="285" y="30" width="190" height="110" rx="10" fill="rgba(148,163,184,0.08)" stroke="rgba(148,163,184,0.6)"/>
  <text x="380" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Paquet (.zip)</text>
  <text x="380" y="80" textAnchor="middle" fontSize="12" fill="currentColor">manifest.json</text>
  <text x="380" y="100" textAnchor="middle" fontSize="12" fill="currentColor">items/ · files/</text>
  <text x="380" y="120" textAnchor="middle" fontSize="12" fill="currentColor">sans clés d'instance</text>
  <line x1="475" y1="85" x2="545" y2="85" stroke="#4a9eff" strokeWidth="2" markerEnd="url(#pr-arrow)"/>
  <rect x="550" y="30" width="200" height="110" rx="10" fill="rgba(50,215,75,0.08)" stroke="rgb(50,215,75)"/>
  <text x="650" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Instance cible</text>
  <text x="650" y="80" textAnchor="middle" fontSize="12" fill="currentColor">Importer : aperçu et écarts</text>
  <text x="650" y="100" textAnchor="middle" fontSize="12" fill="currentColor">règle et commentaire</text>
  <text x="650" y="120" textAnchor="middle" fontSize="12" fill="currentColor">Appliquer, après instantané</text>
</svg>

---

## Ce qui peut être promu

| Type | Contenu de l'élément | Transféré avec lui |
|---|---|---|
| **Document** | Un [document](./documents.md). | Ses fichiers — XSL de pré-traitement, XSL d'indexation, RTF, XSLT UBL et son complément PDF (`.pdf.json`), Schematron spécifique — et le [modèle PDF](./pdf-templates.md) qu'il désigne. |
| **Modèle PDF** | Un modèle PDF. | — |
| **Liste** | Une [liste de référence](../configuration/reference-lists.md) ou une [liste personnalisée](../configuration/custom-lists.md). | — |
| **Règle de notification** | Une [règle de notification](./notification-rules.md). | — |
| **Analyse de l'Explorateur** · **Tableau de bord de l'Explorateur** | Une analyse ou un tableau de bord enregistré de l'[Explorateur](../application/explorer.md). | Un tableau de bord emporte les analyses de ses tuiles. |
| **Rapport quotidien** · **Reprise auto** · **Contrôle cycle de vie** | Un [rapport quotidien](../sync/scheduled-jobs/daily-digest.md), une [reprise automatique](../sync/scheduled-jobs/auto-retry.md) ou un [contrôle du cycle de vie](../sync/scheduled-jobs/lifecycle-checks.md). | — |
| **Connecteur** | Un connecteur API, SQL, base de données ou FTP, sans ses secrets ni ses cibles. | — |
| **Modèle de réglages** | E-invoicing, e-reporting, annuaire, dossiers surveillés, contrôles d'intégrité, requêtes de rapports ou file d'impression JDE, sans ses clés d'instance. | — |
| **Fichier** | Le fichier commun des valeurs UBL par défaut (`ubl-defaults.xsl`, les valeurs propres à l'exploitant dans la XSL commune), et **chaque fichier utilisé par un document** — transformation, XSL, RTF, feuille UBL, Schematron client, mise en page PDF — listé par son chemin avec *Used by …* les documents qui l'utilisent. Un fichier peut être promu seul, par exemple une feuille partagée par plusieurs documents. | — |

Les paramètres globaux, l'authentification unique et les noms de colonnes remplacés de la base NomaUBL ne sont jamais promus : ils décrivent l'instance elle-même.

---

## Exporter

1. **Cocher les éléments** dans l'arborescence, regroupés par type avec leur nombre. La case du type sélectionne tous les éléments visibles de ce type ; **Filtrer les éléments…** restreint l'arborescence.
2. **Vérifier les dépendances** affichées sous chaque élément : les fichiers qu'il utilise et les éléments ajoutés avec lui. Le modèle PDF désigné par un document sélectionné est coché automatiquement et marqué *dépendance*.
3. **Exporter le paquet** télécharge le ZIP. Le panneau latéral compte les éléments, dépendances et fichiers de la sélection ; **Vider la sélection** permet de repartir de zéro.

### Contenu du paquet

| Entrée | Contenu |
|---|---|
| `manifest.json` | Les éléments avec leur type et leur somme de contrôle, l'instance et la version d'origine, l'auteur et la date. |
| `items/` | Un fragment JSON par élément. |
| `files/` | Les fichiers référencés, avec leur chemin **relatif à la racine de l'environnement** : les variables `%APP_HOME%` et `%ENV%` des propriétés restent valables sur la cible. |

### Ce qui ne voyage jamais \{#instance-keys\}

Mots de passe, secrets, jetons, clés d'API, licence, URL, hôtes, utilisateurs, schéma de base, nom et couleur de l'environnement, ainsi que les jalons des tâches (dernière tâche BIP, dernier parcours, dernière récupération) ne sont **jamais exportés**. À l'import, la cible conserve ses propres valeurs pour ces clés.

---

## Importer

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '12.5px', overflowX: 'auto'}}>
  <div style={{opacity: 0.7, fontFamily: 'monospace', fontSize: '11px', marginBottom: '8px'}}>Depuis DEV · version 10.24.1 · admin · 2026-10-24 09:15</div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr minmax(200px, 280px)', gap: '12px'}}>
    <table style={{width: '100%', borderCollapse: 'collapse'}}>
      <thead><tr style={{textAlign: 'left', opacity: 0.7}}><th>Type</th><th>Élément</th><th>État</th><th>Modifications</th><th>Détail</th><th>Appliqué</th></tr></thead>
      <tbody>
        <tr><td>Document</td><td><code>invoices</code></td><td><span style={{color: '#f59e0b', fontWeight: 700}}>modifié</span></td><td>3</td><td></td><td></td></tr>
        <tr><td>Modèle PDF</td><td><code>standard</code></td><td><span style={{fontWeight: 700, opacity: 0.7}}>identique</span></td><td>0</td><td></td><td></td></tr>
        <tr><td>Fichier</td><td><code>xsl/invoices.xsl</code></td><td><span style={{color: 'rgb(50,215,75)', fontWeight: 700}}>nouveau</span></td><td>0</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '10px', lineHeight: 1.6}}>
      <b>Aperçu</b><br/>
      <span style={{fontFamily: 'monospace', fontSize: '11px', opacity: 0.7}}>Éléments : 0 nouveaux, 1 modifiés, 1 identiques, 0 ignorés<br/>Fichiers : 1 nouveaux, 0 modifiés, 0 identiques, 0 ignorés</span><br/>
      Éléments et fichiers modifiés<br/>
      <span style={{display: 'inline-block', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Remplacer par le paquet ▾</span><br/>
      <span style={{display: 'inline-block', marginTop: '6px', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>Commentaire pour les instantanés et le journal</span><br/>
      <span style={{display: 'inline-block', marginTop: '6px', padding: '3px 10px', borderRadius: '6px', background: '#4a9eff', color: '#fff'}}>✓ Appliquer</span>
    </div>
  </div>
</div>

1. **Choisir un paquet de promotion (.zip).** La page lit le manifeste — environnement d'origine, version, auteur, date — et calcule l'**aperçu** sans rien écrire.
2. **Lire l'aperçu.** Chaque élément et chaque fichier reçoit un état : **nouveau**, **modifié**, **identique** ou **ignoré**. La grille indique le nombre de champs modifiés par élément ; une ligne ouvre la **comparaison des champs** — clé, changement (*défini*, *ajouté*, *modifié*, *supprimé*), valeur *Cible* et valeur *Paquet*.
3. **Choisir la règle** appliquée aux éléments et fichiers modifiés :
   - **Remplacer par le paquet** — les éléments et fichiers modifiés prennent la version du paquet ;
   - **Conserver la cible, n'écrire que les nouveaux** — seuls les nouveaux éléments et fichiers sont écrits.
4. **Saisir un commentaire**, repris dans les instantanés et le journal.
5. **Appliquer** puis confirmer. Le panneau passe en **Résultat**, la colonne *Appliqué* signale ce qui a été écrit, et **Choisir un autre paquet** réinitialise la page.

Ce qu'écrit *Appliquer* :

- chaque élément est **inséré ou mis à jour par son nom** dans son propre fichier de configuration ;
- chaque fichier est écrit **après un instantané de version**, consultable et restaurable dans les [versions de fichiers](./file-versions.md) ;
- les clés d'instance déjà présentes sur la cible **conservent leur valeur** ;
- l'import forme **une seule entrée du journal des versions**, avec son auteur et son commentaire.

La grille est la table de données partagée ; sa vue figure dans l'éditeur des [vues de liste](../configuration/list-views.md).

---

## Promouvoir vers une autre instance \{#promote\}

Quand les deux instances peuvent communiquer, la sélection de la vue **Export** est envoyée directement à une instance cible, sans manipuler de fichier ZIP. Le paquet est constitué comme pour un export, transmis à l'aperçu de la cible, puis à son import.

1. **Cocher les éléments** dans la vue Export (avec leurs dépendances).
2. Sous **Promouvoir vers une instance**, en bas du panneau latéral de l'export, choisir l'**Instance cible** (la dernière utilisée est mémorisée) puis cliquer sur **Promouvoir…**.
3. La fenêtre **Promouvoir vers …** affiche l'aperçu de la cible — nouveaux, modifiés, identiques, ignorés, avec les écarts par champ. Rien n'est encore écrit : *Promouvoir vérifie d'abord la sélection sur l'instance cible et montre ce qui y changerait ; rien n'est écrit avant votre confirmation.*
4. Dans la même fenêtre, choisir la règle des **Éléments et fichiers modifiés** — *Remplacer par le paquet* ou *Conserver la cible, n'écrire que les nouveaux* — et un commentaire, puis cliquer sur **Promouvoir n élément(s) et n fichier(s)**. La cible prend un instantané de version avant chaque écriture, et ses clés d'instance conservent leur valeur. La fenêtre indique ensuite *Promue vers … : n élément(s) et n fichier(s) écrits*.

L'export ZIP reste disponible pour les instances qui ne peuvent pas communiquer.

### Instances cibles \{#targets\}

Les cibles se définissent une fois dans **Paramètres → Promotion targets** (domaine Platform) ; tant qu'aucune n'existe, l'en-tête des Paramètres propose **Add promotion targets**. Chaque cible comporte :

| Champ | Description |
|---|---|
| **Name** | Affiché dans la liste des cibles de la page Promotion. |
| **URL** | Racine de l'instance cible, avec son préfixe de chemin s'il y en a un (par exemple `https://test.example/nomaubl`). |
| **Username** / **Password** | Compte sur la cible, qui doit y disposer de la fonctionnalité *Accès aux paramètres* ; vide quand la cible fonctionne sans authentification. Le mot de passe est enregistré encodé et décodé sur le serveur uniquement pour l'appel. |

Le compte n'est jamais transmis au navigateur et ne voyage jamais dans un paquet. Cet éditeur reste en anglais dans l'application.

---

## Historique \{#history\}

La vue **Historique** liste chaque paquet exporté, import appliqué et promotion appliquée sur l'instance, du plus récent au plus ancien :

| Colonne | Description |
|---|---|
| **Quand** | Date et heure. |
| **Sens** | *Export*, *Import* ou *Promue*. |
| **Contrepartie** | La cible d'une promotion, la source d'un import. |
| **Auteur** | Qui l'a lancée. |
| **Politique** | *replace* ou *keep*. |
| **Éléments** / **Fichiers** | Nombres. |
| **Commentaire** | Le commentaire saisi. |

Une ligne ouvre l'entrée avec son plan complet et ses écarts. Une instance source garde ses promotions, une cible ses imports. Chaque entrée est un fichier JSON du dossier `promotions` de l'environnement.

---

## Accès

Accorder **Promotion** dans le groupe Gestion de la page [Rôles](../configuration/security/roles.md). Le droit Réglages est également requis.

Le *mode Package* des [versions de fichiers](./file-versions.md#mode-package) reste disponible pour les fichiers bruts rattachés à aucun élément.

---

## Conseils & bonnes pratiques

- **Promouvoir de l'environnement inférieur vers le supérieur.** Modifier en développement, vérifier en recette, puis importer le même paquet en production : le paquet garde la trace de ce qui a été transféré.
- **Lire la comparaison avant d'appliquer.** Un élément *modifié* sur une clé inattendue signale souvent une modification faite directement sur la cible.
- **Choisir Conserver la cible pour ajouter sans écraser**, par exemple pour apporter un nouveau document à une instance dont les documents existants ont été ajustés sur place.
- **Rédiger un commentaire explicite.** C'est le libellé des instantanés à restaurer si l'import doit être annulé.
