---
title: Promotion
description: "Transférer la configuration NomaUBL d'une instance à l'autre élément par élément — documents avec leurs fichiers XSL, RTF et Schematron, modèles PDF, listes, règles de notification, rapports quotidiens, reprises automatiques, contrôles du cycle de vie, connecteurs et modèles de réglages — dans un paquet sans les clés propres à l'instance, avec aperçu, comparaison champ par champ et instantané de version avant chaque écriture."
keywords: [NomaUBL, promotion, export, import, paquet, environnements, développement, recette, production, transport de configuration, aperçu, comparaison, instantané, clés d'instance, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Promotion

La page **Promotion** transfère la configuration d'une instance à une autre — du développement vers la recette, de la recette vers la production — **élément par élément**, avec les fichiers utilisés par chaque élément. L'export produit un paquet ; l'import montre ce que le paquet modifierait, champ par champ, puis l'écrit après un instantané de version. Les clés propres à une instance — mots de passe, URL, hôtes, licence, nom de l'environnement… — **ne voyagent jamais** et ne sont jamais écrasées sur la cible.

Accès : **Gestion → Promotion**. La page s'ouvre sur trois cartes, une par tâche : **Construire un paquet** (choisir des éléments et leurs fichiers, télécharger un paquet ou le promouvoir directement vers une autre instance), **Importer un paquet** (appliquer un paquet à cette instance, après un aperçu) et **Historique** (les paquets exportés, importés et promus). La carte choisie est mise en évidence et sa vue s'affiche en dessous.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 444" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pmofr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pmofr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pmofr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pmofr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="404" rx="14" fill="url(#pmofr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Promotion</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Transférer documents, modèles PDF, listes, tâches, connecteurs et réglages d'une instance à l'autre.</text>
  <rect x="240.0" y="80" width="232.0" height="60" rx="9" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="252.0" y="97.0" width="26" height="26" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="265.0" y="113.5" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇</text>
  <text x="288.0" y="108.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Construire un paquet</text>
  <text x="288.0" y="122.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="484.0" y="80" width="232.0" height="60" rx="9" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="496.0" y="97.0" width="26" height="26" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="509.0" y="113.5" fill="#c084fc" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬆</text>
  <text x="532.0" y="108.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Importer un paquet</text>
  <text x="532.0" y="122.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="728.0" y="80" width="232.0" height="60" rx="9" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="740.0" y="97.0" width="26" height="26" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="753.0" y="113.5" fill="#fb923c" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <text x="776.0" y="108.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Historique</text>
  <text x="776.0" y="122.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="288.0" y="122" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Choisir des éléments et leurs fichiers,</text>
  <text x="288.0" y="133" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">télécharger un paquet ou le promouvoir</text>
  <text x="532.0" y="122" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Appliquer un paquet à cette instance,</text>
  <text x="532.0" y="133" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">après un aperçu</text>
  <text x="776.0" y="122" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les paquets exportés, importés</text>
  <text x="776.0" y="133" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">et promus</text>
  <rect x="240" y="154" width="470" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="164" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="178.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Filtrer les éléments…</text>
  <rect x="252" y="195" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M254.5,200.5 L256.8,202.8 L260.8,198" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="269" y="204" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">DOCUMENT (2)</text>
  <rect x="266" y="217" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M268.5,222.5 L270.8,224.8 L274.8,220" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="283" y="226" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">invoices</text>
  <text x="340" y="226" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">— Factures clients</text>
  <rect x="282" y="232" width="117" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="340.5" y="243.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">pdf-template:standard</text>
  <rect x="405" y="232" width="94" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="452.0" y="243.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">xsl/invoices.xsl</text>
  <rect x="505" y="232" width="113" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="561.5" y="243.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ubl/invoices-ubl.xsl</text>
  <rect x="266" y="257" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="283" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">credit_notes</text>
  <text x="356" y="266" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">— Avoirs</text>
  <rect x="252" y="285" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="294" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">PDF-TEMPLATE (1)</text>
  <rect x="266" y="307" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M268.5,312.5 L270.8,314.8 L274.8,310" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="283" y="316" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">standard</text>
  <rect x="336" y="304" width="65" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="368.5" y="315.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">dépendance</text>
  <rect x="252" y="335" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="344" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">API-CONNECTOR (3)  ›</text>
  <rect x="252" y="357" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="269" y="366" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">LIST (29)  ›</text>
  <rect x="722" y="154" width="238" height="250" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="734" y="174" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Sélection</text>
  <text x="734" y="192" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">1 élément(s), 1 dépendance(s), 3 fichier(s)</text>
  <text x="734" y="212" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Mots de passe, secrets, URL, hôtes,</text>
  <text x="734" y="225" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">licence… ne sont jamais exportés.</text>
  <rect x="734" y="238" width="214" height="22" rx="5" fill="url(#pmofr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="841.0" y="252.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Exporter le paquet</text>
  <rect x="734" y="268" width="214" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.0" y="282.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Vider la sélection</text>
  <line x1="722" y1="304" x2="960" y2="304" stroke="#1f2937" strokeWidth="1"/>
  <text x="734" y="324" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Promouvoir vers une instance</text>
  <rect x="734" y="334" width="214" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="744" y="348.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Instance cible : TEST ▾</text>
  <rect x="734" y="366" width="214" height="22" rx="5" fill="url(#pmofr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="841.0" y="380.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Promouvoir…</text>
  <rect x="20" y="88" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="103" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois cartes de mode</text>
  <text x="30" y="116" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">construire · importer · historique</text>
  <line x1="200" y1="105.0" x2="240" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmofr-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Arbre par type</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cocher un type pour tout prendre</text>
  <line x1="200" y1="217.0" x2="252" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmofr-arrow)"/>
  <rect x="20" y="395" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="410" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dépendances</text>
  <text x="30" y="423" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fichiers et modèle PDF suivent</text>
  <line x1="200" y1="412.0" x2="350" y2="319" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmofr-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compteur de sélection</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">éléments, dépendances, fichiers</text>
  <line x1="1000" y1="177.0" x2="950" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmofr-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter le paquet</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ZIP : manifeste, éléments, fichiers</text>
  <line x1="1000" y1="247.0" x2="948" y2="249" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmofr-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Promouvoir</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">directement vers une instance cible</text>
  <line x1="1000" y1="347.0" x2="948" y2="376" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pmofr-arrow)"/>
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
| **Formulaire de saisie** | Un [formulaire de saisie](../configuration/entry-forms.md) de l'éditeur de facture. | — (les droits des rôles restent propres à chaque environnement) |
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

Depuis la carte **Construire un paquet** :

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

Depuis la carte **Importer un paquet** :

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

Quand les deux instances peuvent communiquer, la sélection de la carte **Construire un paquet** est envoyée directement à une instance cible, sans manipuler de fichier ZIP. Le paquet est constitué comme pour un export, transmis à l'aperçu de la cible, puis à son import.

1. **Cocher les éléments** sous *Construire un paquet* (avec leurs dépendances).
2. Sous **Promouvoir vers une instance**, en bas du panneau latéral de *Construire un paquet*, choisir l'**Instance cible** (la dernière utilisée est mémorisée) puis cliquer sur **Promouvoir…**.
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
| **Check the server certificate** | Cochée par défaut. Quand une promotion échoue avec *The target's certificate is not trusted*, la cible a un certificat auto-signé ou interne : décocher l'option. |

Le compte n'est jamais transmis au navigateur et ne voyage jamais dans un paquet. Cet éditeur reste en anglais dans l'application.

---

## Historique \{#history\}

La carte **Historique** liste chaque paquet exporté, import appliqué et promotion appliquée sur l'instance, du plus récent au plus ancien :

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
