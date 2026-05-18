---
title: Documents
description: "Configurer la façon dont chaque type de document est extrait d'un spool XML source (JD Edwards, SAP, NetSuite, ERP personnalisé…) ou lu directement depuis une facture UBL, transformé pour traitement et rendu au format PDF."
keywords: [NomaUBL, documents, XPath, éclatement, bursting, source, idPattern, cbc:ID, UHTMPL, UBL, XSL, modèle PDF, ERP, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Documents

L'éditeur **Documents** définit comment NomaUBL transforme un **spool XML source** — ou une **facture UBL déjà formée** — en l'enregistrement sur lequel le reste de la plateforme s'appuie. NomaUBL **fonctionne quel que soit la source** : le même modèle de configuration fonctionne que le spool vienne de **JD Edwards**, SAP, NetSuite, d'un ERP personnalisé ou de tout autre système capable de produire du XML ou du UBL. (Seules les fonctions *Extract* et *synchronisation BIP* sont spécifiques à JD Edwards.)

Pour chaque type de document, trois éléments sont à renseigner :

1. **Origine de la donnée** — le sélecteur `source` choisit entre un spool XML qui demande une transformation XSL, une facture UBL 2.1 déjà structurée, et (depuis 2026.05.16) un **connecteur SQL ou REST** qui renvoie la donnée en direct sans aucun fichier (onglet *Document*).
2. **Chaîne de transformation** de chaque document en UBL et PDF (onglet *Traitement*).
3. **Capacité de calcul** allouée à la transformation (onglet *Avancé*).

Un quatrième onglet — **PDF Template** — est dédié à la mise en page PDF par document (sections affichées, ordre, colonnes et bascules).

:::info[Page déplacée en 2026.05.0]
Les modèles de document figuraient auparavant sous *Configuration → Documents*. Ils sont désormais accessibles via **Gestion → Documents**, afin que le nouvel éditeur à quatre onglets — et tout particulièrement l'onglet visuel *PDF Template* — dispose d'une page à part entière. Le schéma et les routes restent inchangés : tout modèle existant continue de fonctionner sans étape de migration.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="doc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="doc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="doc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="500" rx="14" fill="url(#doc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Documents</text>
  <rect x="610" y="30" width="90" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="655" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">+ Nouveau</text>
  <rect x="704" y="30" width="76" height="22" rx="5" fill="url(#doc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="742" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Enreg.</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="156" height="430" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="92" width="140" height="24" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="108" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Rechercher…</text>

  <rect x="248" y="124" width="140" height="36" rx="6" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="258" y="142" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">invoices</text>
  <text x="258" y="155" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Source · XML</text>

  <rect x="248" y="168" width="140" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="186" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">credit_notes</text>
  <text x="258" y="199" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Source · XML</text>

  <rect x="248" y="212" width="140" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="230" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">invoices-ubl</text>
  <text x="258" y="243" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Source · UBL</text>

  <rect x="248" y="256" width="140" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="274" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">debit_notes</text>
  <text x="258" y="287" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Source · XML</text>

  <rect x="408" y="84" width="372" height="430" rx="8" fill="rgba(74,158,255,0.04)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="416" y="92" width="120" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="476" y="107" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">📄 Document</text>
  <rect x="540" y="92" width="96" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="588" y="107" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🔧 Traitement</text>
  <rect x="640" y="92" width="68" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="674" y="107" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙️ Avancé</text>
  <rect x="712" y="92" width="64" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="744" y="107" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🖼 PDF</text>

  <text x="420" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="420" y="146" width="84" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="462" y="162" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">XML</text>
  <rect x="510" y="146" width="84" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="552" y="162" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL</text>

  <text x="420" y="194" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Données du document (XPath)</text>
  <text x="420" y="216" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NUMÉRO CLIENT</text>
  <rect x="420" y="222" width="350" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="238" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">//customer/code</text>
  <text x="420" y="262" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE DU DOCUMENT</text>
  <rect x="420" y="268" width="350" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="284" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">//header/issueDate</text>
  <text x="420" y="308" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE DE ROUTAGE</text>
  <rect x="420" y="314" width="350" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="330" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">//header/routing</text>

  <text x="420" y="362" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Format de date <text fill="#64748b" fontSize="9" fontWeight="400">(2026.05.9)</text></text>
  <rect x="420" y="370" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="386" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">dd/MM/yyyy</text>
  <text x="628" y="386" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">SimpleDateFormat</text>

  <rect x="420" y="408" width="350" height="98" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="430" y="426" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PANNEAU ÉCHANTILLON XML</text>
  <text x="430" y="444" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⌘ clic sur un champ XPath → panneau des balises</text>
  <text x="430" y="460" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/invoice/header/issueDate     2026-05-09</text>
  <text x="430" y="474" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/invoice/customer/code        00001</text>
  <text x="430" y="488" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/invoice/header/routing       B2B</text>

  <rect x="20" y="116" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="131" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Barre des modèles</text>
  <text x="30" y="144" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recherche · carte par modèle</text>
  <line x1="200" y1="132" x2="248" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#doc-arrow)"/>

  <rect x="820" y="92" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Éditeur à 4 onglets</text>
  <text x="830" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Document · Traitement · Avancé · PDF</text>
  <line x1="820" y1="108" x2="780" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#doc-arrow)"/>

  <rect x="20" y="218" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="233" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Données XPath</text>
  <text x="30" y="246" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">extraites quand Source = XML</text>
  <line x1="200" y1="234" x2="420" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#doc-arrow)"/>

  <rect x="820" y="368" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">dateInputFormat</text>
  <text x="830" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dd/MM/yyyy · ISO · etc.</text>
  <line x1="820" y1="384" x2="624" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#doc-arrow)"/>

  <rect x="20" y="436" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="451" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Charger un échantillon</text>
  <text x="30" y="464" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">⌘ → panneau des chemins</text>
  <line x1="200" y1="452" x2="420" y2="452" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#doc-arrow)"/>
</svg>

---

## Charger un échantillon XML (optionnel, recommandé)

En haut de l'éditeur, cliquer sur **Charger un échantillon XML** et sélectionner un fichier de spool représentatif issu du système source. Une fois l'échantillon chargé, chaque champ XPath affiche un bouton **⌘** : il ouvre un panneau latéral qui liste tous les chemins de balises détectés dans l'échantillon, pour sélectionner la balise sans saisie manuelle. Le panneau permet de filtrer et affiche la valeur de chaque chemin pour faciliter le choix.

La configuration se fait aussi sans échantillon, mais le sélecteur réduit les risques d'erreur de saisie.

---

## Onglet 1 — 📄 Document

Cet onglet indique à NomaUBL **où trouver chaque information** sur les documents entrants.

### Source

| Champ | Valeurs | Description |
|---|---|---|
| **Source** | `XML` (défaut) / `UBL` / `Connecteur` | Sélectionne le pipeline d'entrée. **`XML`** conserve le comportement initial — un spool XML provenant de tout système source, transformé en UBL 2.1 par la chaîne XSL. **`UBL`** s'adresse aux fichiers déjà au format UBL 2.1 (l'ERP émet du UBL nativement, ou le fichier vient d'un système amont en UBL) ; aucune transformation XSL ne s'exécute. **`Connecteur`** (2026.05.16) supprime totalement le fichier — NomaUBL appelle une requête SQL ou un endpoint REST qui renvoie le document, puis applique la même chaîne XSL au résultat. |

Ce choix bascule la suite de l'onglet entre trois ensembles de champs distincts. Les autres sections de la page — *Traitement*, *Avancé*, *PDF Template* — s'appliquent à l'identique aux trois sources.

### Extraction de clé depuis `cbc:ID` *(lorsque Source = UBL)*

Pour les factures UBL, la clé primaire `(doc, dct, kco)` — le triplet qui identifie le document partout ailleurs dans NomaUBL — est extraite du `cbc:ID` de la facture via une regex à **groupes nommés**. Aucune convention de nommage de fichier n'est exigée ; le fichier peut avoir n'importe quel nom.

| Champ | Description |
|---|---|
| **ID Pattern** | Regex appliquée à `cbc:ID`. Groupes autorisés : `doc`, `dct`, `kco`. Tout sous-ensemble est admis ; les groupes manquants sont remplis par les valeurs par défaut ci-dessous. |
| **doc default** | Utilisé quand la regex ne correspond pas ou que le groupe `doc` est absent. |
| **dct default** | Utilisé quand le groupe `dct` est absent. |
| **kco default** | Utilisé quand le groupe `kco` est absent — courant quand le `cbc:ID` n'inclut pas de code société. |

#### Assistant Sample cbc:ID + Suggérer + Tester

Pour éviter d'écrire la regex à la main, la section inclut un assistant en ligne :

| Action | Effet |
|---|---|
| **Sample cbc:ID** | Coller un ID réel issu d'une facture (par ex. `38706889RI00001` ou `F202600025`). |
| **Suggérer** | Génère un `idPattern` en segmentant l'échantillon sur les transitions lettres / chiffres, alimente les valeurs par défaut correspondantes et lance *Tester* sur le résultat. |
| **Tester** | Applique l'`idPattern` et les valeurs par défaut à l'échantillon et affiche en direct le `(doc, dct, kco)` extrait — vert en cas de correspondance, rouge sur erreur de regex. |

Exemples concrets :

| Échantillon | `idPattern` suggéré | Valeurs par défaut | Extraction |
|---|---|---|---|
| `F202600025` | `^(?<dct>[A-Z]+)(?<doc>\d+)$` | `kcoDefault = 00001` | `doc=202600025`, `dct=F`, `kco=00001` |
| `38706889RI00001` | `^(?<doc>\d+)(?<dct>[A-Z]+)(?<kco>\d+)$` | (aucune) | `doc=38706889`, `dct=RI`, `kco=00001` |

### Source Connecteur *(quand Source = Connecteur, 2026.05.16)*

Quand *Source* vaut `Connecteur`, NomaUBL récupère les données du document en direct depuis un [connecteur SQL](../configuration/sql-connectors.md) ou un [connecteur API](../configuration/api-connectors.md) au lieu de lire un fichier. La même chaîne XSLT transforme ensuite le résultat en UBL — pas de spool, pas de surveillance de répertoire, pas de fichier temporaire.

Deux schémas sont gérés :

| Mode | Quand l'utiliser |
|---|---|
| **Un appel** | Une requête / un endpoint renvoie l'en-tête **et** le tableau de lignes imbriqué d'un coup. Idéal quand la source sait joindre l'en-tête à ses lignes côté serveur (typique d'une vue SQL ou d'un endpoint REST conçu pour la facturation). |
| **Deux appels** | Un appel renvoie l'en-tête, un second renvoie les lignes. Pratique quand l'endpoint de lignes accepte les clés de l'en-tête comme paramètres (`{customer}`, `{docNumber}`…) — les paramètres de lignes peuvent reprendre toute valeur renvoyée par l'appel d'en-tête via des placeholders `{header.champ}`. |

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', margin: '20px 0'}}>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '6px'}}>Source d'en-tête</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Choisir un connecteur SQL ou API, puis sa requête ou son endpoint. Les paramètres optionnels deviennent les champs du formulaire affiché dans <em>Traiter un document</em>.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#22c55e', fontWeight: 700, marginBottom: '6px'}}>Source de lignes <em>(optionnelle)</em></div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Laisser vide pour le mode un appel. Sinon, choisir un second connecteur — ses paramètres peuvent lire chaque valeur renvoyée par l'appel d'en-tête, y compris les clés.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#c084fc', fontWeight: 700, marginBottom: '6px'}}>Forme de sortie</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>La réponse du connecteur est matérialisée en document XML, de la même forme qu'aurait un spool XML, pour que la chaîne XSLT existante s'exécute sans modification. Chaque XPath déjà en place fonctionne tel quel.</div>
  </div>
</div>

Une fois le connecteur câblé, le reste de l'*Onglet 1* (Burst Key, Identification du document, Données du document, Format de date) se lit exactement comme pour *Source = XML* — les champs XPath pointent vers la forme XML produite par la réponse du connecteur, et non vers un fichier sur disque. Utiliser **Charger un échantillon connecteur** dans l'[Éditeur XSL](../ubl-tools/xsl-editor.md) pour rapatrier une vraie réponse, le sélecteur XPath autocomplète alors sur des données réelles.

L'exécution d'un document à source connecteur est décrite sur [Traitement → Traiter un document](../processing/document.md) : la page remplace le sélecteur de fichier par le formulaire de paramètres dérivé du connecteur d'en-tête. Les mêmes paramètres sont transmis en ligne de commande via des arguments `--param clé=valeur` répétables (voir [Ligne de commande](./command-line.md)).

### Éclatement (Document Root) *(lorsque Source = XML)*

| Champ | Description |
|---|---|
| **Burst Key** | Nom de balise XML utilisé pour découper le spool en documents individuels. Cet élément marque la **racine d'un document** — chaque occurrence dans le spool produit un document de sortie. |

### Identification du document *(lorsque Source = XML)*

NomaUBL utilise ces cinq champs pour savoir **de quel document il s'agit**, à qui il appartient et à quel type métier il correspond. Chaque champ accepte une valeur par défaut si la balise est absente.

| Champ | Concept système source associé |
|---|---|
| **Activity** (activité) | Activité métier / module auquel appartient le document. |
| **Type** | Code de type de document tel que connu dans NomaUBL. |
| **Document ID** | Numéro de facture / numéro de document. |
| **Document Type (JDE)** | Type de document tel que défini dans le système source (nommé d'après les codes JD Edwards RI/RM, mais accepte n'importe quelle valeur source). |
| **Company (JDE)** | Société / unité métier propriétaire du document dans le système source (nom de champ historique, s'applique à tout ERP). |

### Données du document (XPath) *(lorsque Source = XML)*

Données fonctionnelles que NomaUBL lit dans le spool pour alimenter la facture UBL et piloter le routage.

| Champ | Description |
|---|---|
| **Customer Number** | Numéro client / numéro d'adresse. |
| **Amount** | Montant brut du document. |
| **Document Date** | Date d'émission du document. |
| **Due Date** | Date d'échéance du paiement. |
| **Routing Code** | Code utilisé pour router le document vers le bon **canal de distribution** : archivage, envoi par e-mail, envoi par courrier, transmission vers une Plateforme Agréée, etc. |
| **Office** | Balise XML du spool contenant le code **bureau / unité opérationnelle**. |
| **Processing Type** | Balise XML portant le code de type de traitement (B2B, B2BINT…). Laisser vide pour utiliser la **valeur par défaut définie dans Types de documents**. |

> 💡 Chaque champ « Données du document » dispose de sa propre **valeur par défaut**. Les valeurs par défaut sont utilisées quand la balise XML est absente ou vide — pratique quand une valeur est constante pour un modèle donné.

### Format de date *(quand Source = XML, 2026.05.9)*

| Champ | Défaut | Description |
|---|---|---|
| **`dateInputFormat`** | `yyyy-MM-dd` *(ISO)* | Modèle Java `SimpleDateFormat` utilisé pour parser les **dates de document et d'échéance** extraites du XML source avant écriture dans `F564230` / `F564231`. La version précédente codait ISO en dur ; ça fonctionnait sur les sources UBL (le XSL émet de l'ISO) mais échouait silencieusement sur les sources XML dont le format du spool dépend de la locale (`dd/MM/yyyy` pour beaucoup d'ERP français, `MM/dd/yyyy` pour les spools nord-américains, etc.). |

Choisir le modèle qui correspond littéralement aux dates source. Valeurs courantes :

| Exemple de date source | Modèle |
|---|---|
| `2026-05-12` | `yyyy-MM-dd` *(défaut — ISO)* |
| `12/05/2026` | `dd/MM/yyyy` |
| `12.05.2026` | `dd.MM.yyyy` |
| `05/12/2026` | `MM/dd/yyyy` |
| `20260512` | `yyyyMMdd` |

Le modèle ne s'applique que quand la *Source* du document est `XML`. Les sources UBL continuent d'émettre de l'ISO via le XSL, le champ est donc ignoré dans ce cas. La valeur par défaut conserve la compatibilité ascendante des flux UBL existants sans aucune modification.

---

## Onglet 2 — 🔧 Traitement

Cet onglet contrôle **ce que NomaUBL fait** des données extraites à l'onglet 1. Il s'applique aux deux sources `XML` et `UBL`, même si plusieurs champs (XSL, RTF) ne s'utilisent que sur le pipeline XML.

### Transformation XSL

| Champ | Valeurs | Description |
|---|---|---|
| **Transform** | `Y` / `N` | Active ou non la chaîne de transformation XSL avant la génération UBL. |
| **XSL Pre-processing** | chemin | XSL optionnelle appliquée avant l'indexation, par exemple pour normaliser le XML source brut (JD Edwards, SAP, NetSuite, ERP personnalisé…). |
| **XSL Indexation** | chemin | XSL utilisée pour générer l'indexation / les métadonnées appliquées au document. Produit un fichier XML associé au PDF généré, utilisé pour l'indexation. |
| **RTF Template** | chemin | Modèle RTF utilisé par BI Publisher pour produire le PDF lisible. |

### UBL

| Champ | Valeurs | Description |
|---|---|---|
| **UBL XSLT** | chemin | Transformation XSL du XML source vers l'**UBL 2.1**. Le placeholder `%APP_HOME%` est remplacé par la racine d'installation de NomaUBL. |
| **Attachment** | `— Aucun` / `create` / `attach` | Comment associer le PDF lisible à l'UBL : `create` = générer le PDF et l'incorporer dans le fichier UBL ; `attach` = utiliser un PDF déjà présent dans le répertoire d'entrée ; vide = aucun PDF incorporé. |

### Sortie

| Champ | Description |
|---|---|
| **No-Data Key** | Nom d'un élément XML qui **doit exister** dans le spool. Si absent, NomaUBL considère le document comme vide et l'ignore. Utile pour écarter les sections de spool qui ne correspondent pas à des factures réelles. |
| **Set Locale** | Locale utilisée pour rendre le PDF (par ex. `en_US`, `fr_FR`). Affecte uniquement le formatage des dates et nombres dans le PDF. |

---

## Onglet 3 — ⚙️ Avancé

| Champ | Description |
|---|---|
| **Number of CPUs** | Nombre de threads parallèles utilisés par la chaîne de traitement pour ce type de document. Augmenter pour accélérer le traitement des spools volumineux, diminuer si l'hôte est à court de mémoire. Valeur par défaut : `4`. |

---

## Onglet 4 — 🖼 PDF Template

Le quatrième onglet désigne la **mise en page PDF** appliquée au rendu de ce document. Depuis la version 2026.05.1, les mises en page sont des ressources partageables à part entière, stockées dans `config-pdf.json` et éditées sur la page dédiée [Modèles PDF](./pdf-templates.md). Cet onglet en référence une simplement **par son nom**, via la propriété `pdfTemplate` du modèle.

| Champ | Description |
|---|---|
| **PDF Template** | Liste déroulante qui regroupe toute mise en page enregistrée (les ressources `pdf-template` issues de *Modèles PDF*) et la `built-in` livrée. Laisser vide pour basculer sur le défaut global (`global.defaultPdfTemplate`). Champ vide et défaut global vide ramènent à `built-in`. |

La chaîne de résolution au moment du rendu se lit donc : ce champ → `global.defaultPdfTemplate` → `built-in`. Chaque facture enregistrée contient le nom du modèle de document dans `F564231.UHTMPL`, ce qui permet au générateur PDF de regénérer à la demande avec la mise en page active pour ce document.

:::tip[Édition de la mise en page]
L'éditeur visuel — liste de sections, tiroir par section, aperçu en direct, sections block — se trouve sur la page [Gestion → Modèles PDF](./pdf-templates.md). Y rédiger ou affiner une mise en page une seule fois, puis revenir ici pour y rattacher le document. Une même mise en page peut servir plusieurs documents.
:::

---

## Conseils & bonnes pratiques

- **Toujours définir des valeurs par défaut** sur les champs « Identification du document » — elles couvrent les variations de spool où une balise peut être ponctuellement absente.
- **Pour les sources UBL, utiliser *Suggérer*** pour amorcer la regex — l'assistant gère les cas courants (chiffres seuls, lettres + chiffres, chiffres + lettres + chiffres). Ajustement manuel uniquement quand le format est inhabituel.
- **Laisser Processing Type vide** sauf besoin de surcharger la valeur par défaut du type de document ; cela évite la duplication de la configuration.
- Pour un nouveau type de document, **commencer par charger un échantillon XML**, configurer l'onglet 1 à l'aide du sélecteur, puis tester sur quelques documents avant d'affiner la chaîne XSL de l'onglet 2.
- Le **Burst Key est le champ XML le plus critique** — une valeur erronée produit soit un document géant unique, soit aucun document.
- **Éditer la mise en page PDF sur sa page dédiée.** [Modèles PDF](./pdf-templates.md) accueille l'éditeur visuel et l'aperçu en direct ; cet onglet permet uniquement de la sélectionner. Partager une même mise en page entre plusieurs documents évite d'éditer N copies dès qu'une mention légale ou un jeu de colonnes évolue.
