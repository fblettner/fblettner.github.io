---
title: Promotion
description: "Transférer la configuration NomaUBL d'une instance à l'autre élément par élément — documents avec leurs fichiers XSL, RTF et Schematron, modèles PDF, listes, règles de notification, rapports quotidiens, reprises automatiques, contrôles du cycle de vie, connecteurs et modèles de réglages — dans un paquet sans les clés propres à l'instance, avec aperçu, comparaison champ par champ et instantané de version avant chaque écriture."
keywords: [NomaUBL, promotion, export, import, paquet, environnements, développement, recette, production, transport de configuration, aperçu, comparaison, instantané, clés d'instance, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Promotion

La page **Promotion** transfère la configuration d'une instance à une autre — du développement vers la recette, de la recette vers la production — **élément par élément**, avec les fichiers utilisés par chaque élément. L'export produit un paquet ; l'import montre ce que le paquet modifierait, champ par champ, puis l'écrit après un instantané de version. Les clés propres à une instance — mots de passe, URL, hôtes, licence, nom de l'environnement… — **ne voyagent jamais** et ne sont jamais écrasées sur la cible.

Accès : **Gestion → Promotion**.

---

## Vue d'ensemble

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
| **Rapport quotidien** · **Reprise auto** · **Contrôle cycle de vie** | Un [rapport quotidien](../sync/scheduled-jobs/daily-digest.md), une [reprise automatique](../sync/scheduled-jobs/auto-retry.md) ou un [contrôle du cycle de vie](../sync/scheduled-jobs/lifecycle-checks.md). | — |
| **Connecteur** | Un connecteur API, SQL, base de données ou FTP, sans ses secrets ni ses cibles. | — |
| **Modèle de réglages** | E-invoicing, e-reporting, annuaire, dossiers surveillés, contrôles d'intégrité, requêtes de rapports ou file d'impression JDE, sans ses clés d'instance. | — |
| **Fichier** | Le fichier commun des valeurs UBL par défaut (`ubl-defaults.xsl`, les valeurs propres à l'exploitant dans la XSL commune). | — |

Les paramètres globaux, l'authentification unique et les noms de colonnes remplacés de la base NomaUBL ne sont jamais promus : ils décrivent l'instance elle-même.

---

## Exporter

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap'}}>
    <span style={{display: 'inline-flex', border: '1px solid rgba(148,163,184,0.3)', borderRadius: '999px', overflow: 'hidden'}}>
      <span style={{padding: '4px 11px', background: 'rgba(74,158,255,0.12)', color: '#4a9eff', fontWeight: 600}}>Exporter</span>
      <span style={{padding: '4px 11px'}}>Importer</span>
    </span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', minWidth: '200px', opacity: 0.6}}>Filtrer les éléments…</span>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1fr minmax(200px, 280px)', gap: '12px'}}>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px'}}>
      <div style={{padding: '6px 12px', fontWeight: 700, fontSize: '11px', opacity: 0.7, borderBottom: '1px solid rgba(148,163,184,0.25)'}}>☑ DOCUMENT (2)</div>
      <div style={{padding: '6px 12px 6px 20px', borderBottom: '1px solid rgba(148,163,184,0.25)'}}>☑ <code>invoices</code> <span style={{opacity: 0.6}}>— Factures clients</span><br/>
        <code style={{fontSize: '11px'}}>pdf-template:standard</code> <code style={{fontSize: '11px'}}>xsl/invoices.xsl</code> <code style={{fontSize: '11px'}}>ubl/invoices-ubl.xsl</code></div>
      <div style={{padding: '6px 12px 6px 20px', borderBottom: '1px solid rgba(148,163,184,0.25)'}}>☐ <code>credit_notes</code> <span style={{opacity: 0.6}}>— Avoirs</span></div>
      <div style={{padding: '6px 12px', fontWeight: 700, fontSize: '11px', opacity: 0.7, borderBottom: '1px solid rgba(148,163,184,0.25)'}}>☐ MODÈLE PDF (1)</div>
      <div style={{padding: '6px 12px 6px 20px'}}>☑ <code>standard</code> <span style={{padding: '0 6px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>dépendance</span></div>
    </div>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '10px', lineHeight: 1.6}}>
      <b>Sélection</b><br/>
      <span style={{fontFamily: 'monospace', fontSize: '11px', opacity: 0.7}}>1 élément(s), 1 dépendance(s), 2 fichier(s)</span><br/>
      <span style={{opacity: 0.8, fontSize: '12px'}}>Le paquet contient les éléments, leurs fichiers avec des chemins relatifs à la racine de l'environnement, et un manifeste…</span><br/>
      <span style={{display: 'inline-block', marginTop: '6px', padding: '3px 10px', borderRadius: '6px', background: '#4a9eff', color: '#fff'}}>Exporter le paquet</span>
      <span style={{display: 'inline-block', marginTop: '6px', padding: '3px 10px', opacity: 0.7}}>Vider la sélection</span>
    </div>
  </div>
</div>

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

## Accès

Accorder **Promotion** dans le groupe Gestion de la page [Rôles](../configuration/security/roles.md). Le droit Réglages est également requis.

Le *mode Package* des [versions de fichiers](./file-versions.md#mode-package) reste disponible pour les fichiers bruts rattachés à aucun élément.

---

## Conseils & bonnes pratiques

- **Promouvoir de l'environnement inférieur vers le supérieur.** Modifier en développement, vérifier en recette, puis importer le même paquet en production : le paquet garde la trace de ce qui a été transféré.
- **Lire la comparaison avant d'appliquer.** Un élément *modifié* sur une clé inattendue signale souvent une modification faite directement sur la cible.
- **Choisir Conserver la cible pour ajouter sans écraser**, par exemple pour apporter un nouveau document à une instance dont les documents existants ont été ajustés sur place.
- **Rédiger un commentaire explicite.** C'est le libellé des instantanés à restaurer si l'import doit être annulé.
