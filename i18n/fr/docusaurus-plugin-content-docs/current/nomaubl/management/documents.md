---
title: Documents
description: "Configurer la façon dont chaque type de document est extrait d'un spool XML source (JD Edwards, SAP, NetSuite, ERP personnalisé…) ou lu directement depuis une facture UBL, transformé pour traitement et rendu au format PDF."
keywords: [NomaUBL, documents, XPath, éclatement, bursting, source, idPattern, cbc:ID, UHTMPL, UBL, XSL, modèle PDF, ERP, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Documents

L'éditeur **Documents** définit comment NomaUBL transforme un **spool XML source** — ou une **facture UBL déjà formée** — en l'enregistrement sur lequel le reste de la plateforme s'appuie. NomaUBL **fonctionne quel que soit la source** : le même modèle de configuration fonctionne que le spool vienne de **JD Edwards**, SAP, NetSuite, d'un ERP personnalisé ou de tout autre système capable de produire du XML ou du UBL. (Seules les fonctions *Extract* et *synchronisation BIP* sont spécifiques à JD Edwards.)

Pour chaque type de document, trois éléments sont à renseigner :

1. **Origine de la donnée** — le sélecteur `source` choisit entre un spool XML qui demande une transformation XSL, une facture UBL 2.1 déjà structurée, et un **connecteur SQL ou REST** qui renvoie la donnée en direct sans aucun fichier (onglet *Document*).
2. **Chaîne de transformation** de chaque document en UBL et PDF (onglet *Traitement*).
3. **Capacité de calcul** allouée à la transformation (onglet *Avancé*).

Un quatrième onglet — **PDF Template** — est dédié à la mise en page PDF par document (sections affichées, ordre, colonnes et bascules).

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

  <text x="420" y="362" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Format de date</text>
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
| **Source** | `XML` (défaut) / `UBL` / `Connecteur` / `PDF` | Sélectionne le pipeline d'entrée. **`PDF`** — un PDF texte issu de n'importe quel système, converti en XML à plat puis traité exactement comme un spool XML — voir [Extraction PDF](#extraction-pdf). **`XML`** — un spool XML provenant de tout système source, transformé en UBL 2.1 par la chaîne XSL. **`UBL`** — des fichiers déjà au format UBL 2.1 (l'ERP émet du UBL nativement, ou le fichier vient d'un système amont en UBL) ; aucune transformation XSL ne s'exécute. **`Connecteur`** — aucun fichier : NomaUBL appelle une requête SQL ou un endpoint REST qui renvoie le document, puis applique la même chaîne XSL au résultat. |
| **Direction** | `Émise` (défaut) / `Reçue` | Côté de la transaction traité par ce modèle. **`Émise`** — factures envoyées par l'opérateur à un client. **`Reçue`** — factures reçues d'un fournisseur ; la contrepartie de la ligne est la partie fournisseur, les actions vendeur (Renvoyer à la PA, Marquer envoyée, Avoir…) sont masquées dans la modale de détail, et la liste Factures classe la ligne sous le chip *Reçues*. Positionné par défaut sur le modèle livré `received-ubl`. |

Le choix de la Source bascule la suite de l'onglet entre trois ensembles de champs distincts. Les autres sections de la page — *Traitement*, *Avancé*, *PDF Template* — s'appliquent à l'identique aux trois sources. Le champ Direction est orthogonal : toute combinaison Source × Direction est valide, même si *Reçue* va le plus souvent de pair avec *UBL* (factures fournisseur poussées par la PA).

:::info[La direction est stockée sur la ligne]
La valeur Direction est écrite une fois sur la ligne au moment de l'insertion (colonne `UHDRIN` sur F564231 — `'1'` pour reçue, `'2'` pour émise). Changer la *Direction* du modèle ensuite ne **re-classe pas** les lignes déjà existantes — le filtre de la liste Factures, les règles de notification et les enveloppes e-Reporting lisent la valeur figée, pas le réglage courant du modèle. Choisir la bonne Direction avant de traiter la première facture sur un nouveau modèle ; n'en changer plus tard qu'en acceptant que les lignes historiques restent sur la direction précédente.
:::

### Identification du document *(quand Source = UBL)* \{#document-identification-ubl\}

 Un fichier UBL ne porte aucun spool d'où extraire les données : l'**Activité** et le **Type** que la source XML récupère par XPath se saisissent ici en texte. Le groupe se trouve en haut de la branche UBL et les deux champs sont **obligatoires** — ils sont écrits dans la ligne de suivi `F564230` dont dépendent l'envoi PA et fetch-import.

| Champ | Description |
|---|---|
| **Activité** | Le code d'activité inscrit sur la ligne (par ex. `UBL`). Stocké dans `F564230.FEAA10`. |
| **Type** | Le type de document (par ex. `FACTURE`). Stocké dans `F564230.FEAA20`. |

:::info[Pourquoi cette ligne compte]
Le pipeline source UBL insère la même ligne de suivi `F564230` que le pipeline XML, en lisant le reste de ses valeurs directement dans l'UBL : BT-47 SIREN acheteur → `FEALKY`, BT-115 PayableAmount → `FEAEXP`, BT-2 IssueDate → `FEIVD`, BT-9 DueDate → `FEARDU`. Sans elle, l'envoi PA n'aurait aucune ligne où inscrire son id de transaction, `FEUKIDSZ` resterait vide et fetch-import n'aurait rien à interroger. Le mode replace met à jour la ligne existante au lieu de la dupliquer ; le mode sans replace saute une facture déjà traitée avec l'avertissement habituel.
:::

### Clé du document *(quand Source = UBL)* \{#cle-du-document\}

Le groupe **Document key (doc / dct / kco)** détermine comment un document UBL obtient sa clé primaire `(doc, dct, kco)` — le triplet qui identifie le document partout ailleurs dans NomaUBL. Le sélecteur **Key mode** propose deux modes :

| Key mode | Fonctionnement |
|---|---|
| **From cbc:ID (regex pattern)** *(défaut)* | La clé est extraite du `cbc:ID` de la facture par une regex — voir plus bas. |
| **Sequence (NomaUBL numbers the document)** | NomaUBL attribue lui-même le numéro de document, sous un type de document et une société fixes. |

#### Mode séquence

Prévu pour les **factures reçues**, dont le `cbc:ID` suit le format propre à chaque fournisseur ; utilisable aussi pour de l'UBL émis quand le format de numérotation n'est pas connu.

| Champ | Description |
|---|---|
| **Document type (dct)** | Type de document JDE fixe de la séquence — `II` (facture entrante) s'il est vide. Choisir un type que JD Edwards n'utilise pas pour la même société. |
| **Company (kco)** | Code société fixe. Obligatoire. |
| **Sequence start** | Premier numéro attribué ; ensuite, le plus grand numéro enregistré pour ce type de document et cette société, plus un. |

Le numéro de facture du fournisseur reste enregistré comme **numéro UBL** (BT-1). Chaque traitement attribue un nouveau numéro : un document reçu deux fois obtient deux numéros.

#### Depuis `cbc:ID` (regex)

La clé est extraite du `cbc:ID` de la facture via une regex à **groupes nommés**. Aucune convention de nommage de fichier n'est exigée ; le fichier peut avoir n'importe quel nom.

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

### Recherche du numéro de document *(quand Source = UBL)*

Sur un modèle **Reçu**, le `cbc:ID` du UBL est le numéro de facture du *fournisseur* — pas la clé interne de l'opérateur. Le parcours par défaut *Suggérer + Tester* sur regex appliquée à `cbc:ID` n'a alors plus de sens : l'opérateur doit retrouver le triplet interne `(doc, dct, kco)` à partir de champs côté fournisseur (numéro UBL, nom du fournisseur, TVA du fournisseur, etc.).

Un nouveau groupe **Recherche du numéro de document** sur l'onglet *Document* (visible uniquement quand *Source* = UBL) câble la recherche contre un [connecteur SQL](../configuration/sql-connectors.md) ou un [connecteur API](../configuration/api-connectors.md).

| Champ | Description |
|---|---|
| **Connecteur** | Le connecteur SQL ou API qui porte la requête / l'endpoint de recherche. |
| **Cible** | La requête nommée (SQL) ou l'endpoint (API) du connecteur choisi. Les paramètres déclarés par la cible deviennent l'ensemble de placeholders disponibles. |
| **Valeurs des paramètres** | Texte libre + placeholders mappés par paramètre. Placeholders côté fournisseur fournis en standard : `{ublNumber}`, `{supplierName}`, `{supplierVat}`, `{supplierAddress}`, `{issueDate}`, `{totalTtc}`, `{currency}`. |
| **Mapping** | Quels champs de la réponse portent les valeurs résolues de `doc`, `dct` et `kco`. Par défaut, les colonnes de la première ligne portant ces noms côté SQL ; côté API, choisir les clés JSON via le même sélecteur que partout ailleurs. |

Quand le groupe est rempli, la recherche s'exécute **avant** la regex sur `cbc:ID` et son résultat l'emporte. Laisser le groupe vide pour conserver le comportement existant — l'assistant de regex et les valeurs par défaut `(doc, dct, kco)` ci-dessous continuent de s'appliquer sans changement.

Le modèle livré `received-ubl` arrive avec ce groupe **présent mais vide** : choisir le connecteur et la cible dans *Paramètres → Documents*, renseigner les paramètres, et le flux côté réception est câblé de bout en bout.

### Dossier d'entrée et routage *(quand Source = UBL)*

Un modèle source UBL scanne son **propre** dossier d'entrée `<input>/<template>` — la même convention par modèle que pour un modèle XML — si bien que plusieurs modèles UBL peuvent être planifiés sur des dossiers différents. Un fichier UBL traité avec succès est retiré du dossier ; un fichier qui échoue, et les exécutions en validation seule, le conservent.

Chaque facture UBL est validée et routée selon **son propre** type de transaction — B2B, B2G, B2C ou B2B international — lu dans la note de routage de la facture, donc un lot mélangeant les types est traité fichier par fichier. Un fichier sans note de routage reprend le type de document par défaut du modèle.

### Source Connecteur *(quand Source = Connecteur)*

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

### Éclatement (Document Root) *(quand Source = XML)*

| Champ | Description |
|---|---|
| **Burst Key** | Nom de balise XML utilisé pour découper le spool en documents individuels. Cet élément marque la **racine d'un document** — chaque occurrence dans le spool produit un document de sortie. |

### Identification du document *(quand Source = XML)*

NomaUBL utilise ces cinq champs pour savoir **de quel document il s'agit**, à qui il appartient et à quel type métier il correspond. Chaque champ accepte une valeur par défaut si la balise est absente.

| Champ | Concept système source associé |
|---|---|
| **Activity** (activité) | Activité métier / module auquel appartient le document. |
| **Type** | Code de type de document tel que connu dans NomaUBL. |
| **Document ID** | Numéro de facture / numéro de document. |
| **Document Type (JDE)** | Type de document tel que défini dans le système source (nommé d'après les codes JD Edwards RI/RM, mais accepte n'importe quelle valeur source). |
| **Company (JDE)** | Société / unité métier propriétaire du document dans le système source (nom de champ historique, s'applique à tout ERP). |

### Données du document (XPath) *(quand Source = XML)*

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

### Format de date *(quand Source = XML)*

| Champ | Défaut | Description |
|---|---|---|
| **`dateInputFormat`** | `yyyy-MM-dd` *(ISO)* | Modèle Java `SimpleDateFormat` utilisé pour parser les **dates de document et d'échéance** extraites du XML source avant écriture dans `F564230` / `F564231`. Les sources UBL sont toujours en ISO (le XSL émet de l'ISO) ; sur les sources XML, le format du spool dépend de la locale (`dd/MM/yyyy` pour beaucoup d'ERP français, `MM/dd/yyyy` pour les spools nord-américains, etc.). |

Choisir le modèle qui correspond littéralement aux dates source. Valeurs courantes :

| Exemple de date source | Modèle |
|---|---|
| `2026-05-12` | `yyyy-MM-dd` *(défaut — ISO)* |
| `12/05/2026` | `dd/MM/yyyy` |
| `12.05.2026` | `dd.MM.yyyy` |
| `05/12/2026` | `MM/dd/yyyy` |
| `20260512` | `yyyyMMdd` |

Le modèle ne s'applique que quand la *Source* du document est `XML`. Les sources UBL continuent d'émettre de l'ISO via le XSL, le champ est donc ignoré dans ce cas. La valeur par défaut conserve la compatibilité ascendante des flux UBL existants sans aucune modification.

### Extraction PDF *(quand Source = PDF)* \{#extraction-pdf\}

Avec **Source = PDF**, le modèle prend en entrée un **PDF texte** issu de n'importe quel système — pas seulement JD Edwards — et le convertit en un XML à plat que l'[éditeur XSL](../ubl-tools/xsl-editor.md) mappe comme un spool. La conversion reconstruit la mise en page et écrit ce qu'elle lit ; elle ne connaît rien des factures. Les PDF scannés (images sans texte) sont refusés avec une erreur explicite.

<svg viewBox="0 0 1000 230" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pdfx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
  </defs>
  <rect x="20" y="40" width="190" height="150" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="115" y="70" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF texte</text>
  <text x="115" y="94" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">tout générateur</text>
  <text x="115" y="114" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">facture, avoir…</text>
  <text x="115" y="150" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">scans refusés</text>
  <line x1="212" y1="115" x2="270" y2="115" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#pdfx-arrow)"/>
  <rect x="274" y="20" width="300" height="190" rx="12" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="424" y="46" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">XML à plat</text>
  <text x="294" y="74" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;Montant_TTC&gt;1189.55&lt;/Montant_TTC&gt;</text>
  <text x="294" y="94" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;TVA&gt; + &lt;TVA_taux&gt;</text>
  <text x="294" y="114" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;Lignes&gt;&lt;Ligne&gt;…</text>
  <text x="294" y="134" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;Adresse_1&gt; Nom · Rue · Ville</text>
  <text x="294" y="154" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;Textes&gt;&lt;Texte&gt;…</text>
  <text x="294" y="174" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">&lt;FichierPDF&gt;</text>
  <text x="294" y="196" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">+ champs regex du modèle</text>
  <line x1="576" y1="115" x2="634" y2="115" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#pdfx-arrow)"/>
  <rect x="638" y="60" width="150" height="110" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="713" y="98" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">XSL</text>
  <text x="713" y="122" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">mappage comme un spool</text>
  <line x1="790" y1="115" x2="830" y2="115" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#pdfx-arrow)"/>
  <rect x="834" y="60" width="146" height="110" rx="12" fill="rgba(50,215,75,0.06)" stroke="rgba(50,215,75,0.45)" strokeWidth="1.2"/>
  <text x="907" y="98" fill="#4ade80" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL 2.1</text>
  <text x="907" y="122" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">validation · stockage · envoi</text>
</svg>

| Ce que contient le PDF | Ce que reçoit le XML |
|---|---|
| Une ligne lue comme *Libellé : valeur* (ou libellé et valeur sur deux colonnes) | Un élément nommé d'après le libellé — `Montant TTC 1 189,55 €` → `<Montant_TTC>1189.55</Montant_TTC>`. Montants et pourcentages passent au point décimal, les dates `dd/MM/yyyy` au format ISO, et les identifiants imprimés avec des espaces (numéro de TVA, SIREN, code postal) sont compactés. |
| Un taux inclus dans un libellé (`TVA 20,00%`) | Un élément voisin, pour que le nom reste stable : `<TVA>198.26</TVA><TVA_taux>20.00</TVA_taux>`. |
| Une valeur faite de segments séparés par ` / `, dont certains portent leur propre libellé (`VIREMENT / IBAN : FR76 … / BIC : CCBPFRPPBDX / Titulaire : ACME SA`) | La partie sans libellé reste dans l'élément et chaque segment libellé devient un élément voisin — `Paiement`, `Paiement_IBAN`, `Paiement_BIC`, `Paiement_Titulaire` — mappable séparément ; les espaces de regroupement de l'IBAN sont supprimés. |
| Une période (`01/09/2026 – 30/09/2026`) | Ses dates de début et de fin en `<…_debut>` et `<…_fin>`, chacune mappable sur son propre champ UBL. |
| Le tableau entre les ancres de début et de fin | `<Lignes>/<Ligne>`, colonnes nommées d'après la ligne d'en-tête (déduites de la première ligne quand l'en-tête tient dans une seule cellule) ; les libellés sur plusieurs lignes sont fusionnés, un trait horizontal ferme le tableau. |
| Les cadres des parties | Des blocs `<Adresse_N>` — `Nom`, lignes `Rue`, `Code_postal`, `Ville`, `Pays`, ainsi que les lignes libellées imprimées dans le cadre (code fournisseur, SIRET, TVA, téléphone, e-mail). |
| Chaque ligne imprimée | `<Textes>/<Texte n="…" page="…">`, cellules séparées par ` \| `, pour que tout ce que les règles ci-dessus n'ont pas capté reste accessible par XPath. |
| Le fichier lui-même | `<FichierPDF>` avec son chemin — `{FichierPDF}` en [pièce jointe complémentaire](#pièces-jointes-complémentaires) intègre le PDF d'origine dans l'UBL. |

Le groupe **PDF extraction** règle la conversion :

| Champ | Description |
|---|---|
| **Table start** | Regex testée sur chaque ligne : les cellules de la ligne trouvée nomment les colonnes du tableau (par ex. `PRESTATION \| Qté \| P.U. HT \| Montant HT`). |
| **Table end** | Regex testée sur la première ligne qui suit le tableau — cette ligne n'en fait pas partie. |
| **Layout match** | Regex facultative que le texte de la page doit contenir ; un fichier qui ne correspond pas est refusé — utile quand un dossier mélange plusieurs mises en page. |
| **Page match** | Regex facultative : seules les pages dont le texte correspond sont converties — une impression qui contient un relevé et la facture ne garde que les pages de la facture. |
| **Field 1** … **Field 5** | `Nom\|regex` appliquée au texte de la page ; le premier groupe (à défaut la correspondance entière) devient `<Nom>`. Ajouter `=>texte` pour réécrire la correspondance, `$1` admis — `Type_JDE\|^FACTURE=>F9`. Deux champs peuvent porter le même nom si un seul des deux peut correspondre. |

Un échantillon converti se présente ainsi :

```xml
<Document fichier="invoice-2026-0412.pdf" pages="1">
  <Numero>F2026-0412</Numero>
  <Date_document>2026-10-05</Date_document>
  <Période>01/09/2026 – 30/09/2026</Période>
  <Période_debut>2026-09-01</Période_debut>
  <Période_fin>2026-09-30</Période_fin>
  <TVA>198.26</TVA>
  <TVA_taux>20.00</TVA_taux>
  <Montant_TTC>1189.55</Montant_TTC>
  <Adresse_1>
    <Nom>ACME SERVICES</Nom>
    <Rue>12 rue des Lilas</Rue>
    <Code_postal>75011</Code_postal>
    <Ville>PARIS</Ville>
    <SIRET>80320631700015</SIRET>
  </Adresse_1>
  <Lignes>
    <Ligne><PRESTATION>Maintenance</PRESTATION><Qté>1</Qté><P_U_HT>991.29</P_U_HT><Montant_HT>991.29</Montant_HT></Ligne>
  </Lignes>
  <Textes>
    <Texte n="1" page="1">FACTURE | N° : F2026-0412</Texte>
  </Textes>
  <FichierPDF>/data/input/invoices/invoice-2026-0412.pdf</FichierPDF>
</Document>
```

L'éditeur de document et l'éditeur XSL **chargent tous deux un échantillon directement depuis un PDF** — le PDF est converti côté serveur avec les réglages enregistrés du modèle (enregistrer le modèle après avoir modifié les ancres). La page [Traitement de document](../processing/document.md), les [dossiers surveillés](./watched-folders.md) et la ligne de commande traitent les modèles à source PDF comme les modèles XML ; `-pdf2xml <in.pdf> <out.xml> --text` convertit un fichier isolé (voir [Ligne de commande](./command-line.md)).

---

## Onglet 2 — 🔧 Traitement

Cet onglet contrôle **ce que NomaUBL fait** des données extraites à l'onglet 1. Il s'applique aux deux sources `XML` et `UBL`, même si plusieurs champs (XSL, RTF) ne s'utilisent que sur le pipeline XML.

### Transformation XSL

| Champ | Valeurs | Description |
|---|---|---|
| **Transform** | `Y` / `N` | Active ou non la chaîne de transformation XSL avant la génération UBL. |
| **XSL Pre-processing** | chemin | XSL optionnelle appliquée avant l'indexation, par exemple pour normaliser le XML source brut (JD Edwards, SAP, NetSuite, ERP personnalisé…). Elle doit **supporter un second passage** : un retraitement rejoue la source archivée, qui l'a déjà traversée — chaque élément ajouté par la XSL doit être protégé par `not(...)` pour qu'un second passage n'ajoute rien. |
| **XSL Indexation** | chemin | XSL utilisée pour générer l'indexation / les métadonnées appliquées au document. Produit un fichier XML associé au PDF généré, utilisé pour l'indexation. |
| **RTF Template** | chemin | Modèle RTF utilisé par BI Publisher pour produire le PDF lisible. |

### UBL

| Champ | Valeurs | Description |
|---|---|---|
| **UBL XSLT** | chemin | Transformation XSL du XML source vers l'**UBL 2.1**. Le placeholder `%APP_HOME%` est remplacé par la racine d'installation de NomaUBL. |
| **Custom Schematron** | chemin(s) | Une ou plusieurs feuilles Schematron **précompilées** (`.xsl`, séparées par des virgules, `%APP_HOME%` / `%ENV%` acceptés) qui portent les règles propres au client — une classification obligatoire, un format de référence acheteur… Elles s'exécutent **après** les packs standard, sur ce modèle uniquement : les règles client ne touchent jamais aux packs livrés que la mise à niveau rafraîchit. Une feuille est chargée une fois par horodatage de fichier : un fichier modifié est pris en compte à la validation suivante, sans redémarrage. Les anomalies arrivent dans les erreurs de validation sous une source courte tirée du nom de fichier (`BR-ACME-rules.xsl` → `ACME`) ; un fichier absent ou invalide est signalé en erreur sur la facture. Le traitement par lot et unitaire, le bouton *Valider* et l'API de validation en tiennent tous compte. |
| **Rule set** | *(vide = déduit)* / `EN 16931 basique` / `EN 16931` / `France étendu (CTC)` | La norme selon laquelle le document est produit : les contrôles de validation et les champs obligatoires affichés dans l'onglet de mapping de l'éditeur XSL viennent de ce jeu. Vide conserve le choix déduit de l'identifiant de personnalisation des valeurs UBL par défaut. Voir [Jeux de règles](../ubl-tools/rule-sets.md). |
| **Post-transform** | chemin | Feuille appliquée à l'UBL validé pour écrire une autre syntaxe à côté de lui — par exemple la feuille livrée `ubl-to-cii.xsl` (UBL vers CII D16B). Vide = aucune. Voir [Post-transformation](../ubl-tools/post-transform.md). |
| **Post-transform output** | suffixe, défaut `-cii.xml` | Remplace le `.xml` du nom du fichier UBL ; le téléchargement depuis les fenêtres de la facture et du document reprend ce nom. |
| **Post-transform name** | texte | Nom court de la syntaxe produite sur les boutons de téléchargement (`CII` → *Télécharger CII*). Le connecteur de la plateforme peut envoyer le fichier converti avec `{{derivedContent}}` / `{{derivedFilePath}}`. |
| **Attachment** | `— Aucun` / `create` / `attach` / `generate` | Comment le PDF principal est associé à l'UBL. `create` = rendu via RTF / BI Publisher puis incorporé. `attach` = réutiliser un PDF déjà présent dans le répertoire d'entrée. `generate` = rendre le PDF avec le [concepteur de modèle PDF](./pdf-templates.md) et l'attacher en **PJA** (`cac:AdditionalDocumentReference`) — à utiliser quand le PDF conçu n'est pas une copie lisible conforme. Vide = aucun PDF. Indépendant de **LISIBLE** ci-dessous. |
| **LISIBLE** | `Y` / `N` | Quand `Y`, rendre un PDF lisible depuis l'UBL via le modèle PDF résolu et l'incorporer comme copie LISIBLE (`cbc:ID="LISIBLE"`). Indépendant d'*Attachment* — les deux peuvent être actifs. |
| **Invert sign** | `N – No` (défaut) / `Credit notes only` / `All documents` | Inverse le signe des montants lus dans la source : montants nets de ligne, totaux du document, montants payés d'avance et d'arrondi, TVA totale et chaque ligne du récapitulatif TVA. Le prix unitaire est toujours émis en positif, les remises et charges sont lues en valeur absolue, et la quantité prend le signe du montant de sa ligne. *Credit notes only* s'applique aux documents résolus en `381`, `396`, `261`, `262`, `502` ou `503`. Un spool qui imprime un avoir avec des montants négatifs donne ainsi l'avoir (CreditNote) positif attendu par la norme, sans modifier la XSL du document. |

### Règles de traitement \{#regles-de-traitement\}

Le groupe **Processing rules** oriente les documents du flux XML **avant toute génération**. Chaque règle associe une ou plusieurs conditions sur le document à un résultat. Les règles sont évaluées pour chaque document une fois son type de document déterminé, **dans l'ordre — la première qui correspond l'emporte** ; sans règle correspondante, le traitement est normal. Elles s'appliquent à tous les chemins d'entrée XML : planificateur, [dossiers surveillés](./watched-folders.md), *process*, *fetch-single* et *Fetch Input*. Les documents de source UBL sont volontairement écartés : leur type de transaction figure déjà dans le document.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px'}}>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 190px 150px auto', gap: '6px', alignItems: 'center'}}>
      <span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>Gratuités</span>
      <span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>Treat as document type ▾</span>
      <span style={{padding: '4px 8px', border: '1px solid rgba(74,158,255,0.4)', borderRadius: '5px', color: '#4a9eff', fontFamily: 'monospace'}}>ARCHIVEONLY ▾</span>
      <span style={{opacity: 0.6}}>↑ ↓ <span style={{color: '#f87171'}}>Remove</span></span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '24px 200px 140px 1fr', gap: '6px', alignItems: 'center'}}>
      <span style={{opacity: 0.5}}>if</span>
      <span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>Invoice amount (montant) ▾</span>
      <span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>is zero / empty ▾</span>
      <span />
    </div>
    <span style={{opacity: 0.6}}>＋ Add condition</span>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px'}}>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 190px 150px auto', gap: '6px', alignItems: 'center'}}>
      <span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>Documents internes</span>
      <span style={{padding: '4px 8px', border: '1px solid rgba(248,113,113,0.4)', borderRadius: '5px', color: '#f87171'}}>Exclude (record only) ▾</span>
      <span />
      <span style={{opacity: 0.6}}>↑ ↓ <span style={{color: '#f87171'}}>Remove</span></span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '24px 200px 140px 1fr', gap: '6px', alignItems: 'center'}}>
      <span style={{opacity: 0.5}}>if</span>
      <span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>JDE document type (typeJDE) ▾</span>
      <span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>in list (a, b, c) ▾</span>
      <span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px', fontFamily: 'monospace'}}>RX, RZ</span>
    </div>
    <span style={{opacity: 0.6}}>＋ Add condition</span>
  </div>
  <span style={{opacity: 0.7}}>＋ Add rule</span>
</div>

| Résultat | Effet |
|---|---|
| **Treat as document type** | Le document poursuit son traitement sous le [type de document](../configuration/system/document-types.md) choisi, avec les réglages d'envoi / validation / mode / conservation de ce type — par exemple une gratuité à montant nul orientée vers `ARCHIVEONLY`. |
| **Exclude (record only)** | Le document est seulement enregistré : sa source est archivée et son en-tête conservé, avec le statut **Exclue par règle** (`9914`, le message reprenant le nom de la règle) et un événement de cycle de vie. Il apparaît dans la liste des factures et est compté par les contrôles d'intégrité, mais il n'est jamais validé, produit ni envoyé. |

**Conditions** — toutes les conditions d'une règle doivent être remplies (*if … and …*). Champs : type de document JDE, type de document déterminé, type de traitement (valeur brute du spool), montant de la facture, société, code activité, type pièce, numéro client, numéro de document, ou **XPath on the document…** (tout XPath ou balise du spool, par ex. `Code_Nature_ID12`). Opérateurs : dans la liste / hors de la liste (`RM, RX`), `=`, `≠`, nul ou vide, non nul, `<`, `>`, vide, non vide, correspond à une regex. **↑** / **↓** changent l'ordre des règles ; le nom de la règle apparaît dans le journal et dans le message de statut.

### Pièces jointes complémentaires

En plus du PDF lisible principal, un type de document peut joindre **d'autres fichiers à l'UBL** — un bon de livraison, un bon de commande, un RIB, une annexe. Ajoutez une ligne par fichier :

| Champ | Description |
|---|---|
| **Code** | Code métier de la pièce jointe, choisi dans une liste déroulante (bon de livraison, bon de commande, RIB, annexe…). Il identifie le fichier dans l'UBL, pour que le destinataire sache à quoi correspond chaque pièce jointe. |
| **Chemin** | Où lire le fichier. Accepte les variables de chemin `%APP_HOME%`, `%ENV%`, `%DOCNAME%`, `%KCO%`, `%DOC%`, `%DCT%` ainsi que tout jeton `{{…}}` du catalogue de facture : le chemin est alors calculé pour chaque facture — par ex. `%APP_HOME%/cgv/CGV_{{kco}}.pdf`. |

Le bouton **`{ }`** placé à côté du champ chemin ouvre une liste filtrable et insère le jeton choisi à l'endroit du curseur — aussi bien les jetons du catalogue de facture (`{{kco}}`, `{{fedoc}}`, …) que les variables de chemin `%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%` —, ce qui évite d'avoir à retenir leur écriture exacte. **Ajouter une pièce jointe** crée une nouvelle ligne.

:::info[Les modèles source UBL embarquent aussi les pièces jointes]
Un modèle en *Source = UBL* embarque les mêmes PDF que le flux XML — après validation et avant l'insert en base, pour que l'UBL stocké corresponde à ce qui est envoyé à la PA :

- **Attachment `attach`** embarque un PDF voisin depuis le répertoire d'entrée sous `cbc:ID="PJA"`.
- **Le PDF lisible (`lisible`)** est rendu directement depuis l'UBL parsé par le moteur PDF moderne et embarqué sous `cbc:ID="LISIBLE"` (DocumentTypeCode 916).
- **Les pièces jointes supplémentaires** bouclent exactement comme ci-dessus ; les jetons de chemin sont résolus par facture.

`attachment=create` reste non supporté en source UBL — il exige un rendu BI Publisher depuis un XML source, qu'un fichier UBL n'a pas. Utilisez `attach` ou `lisible` à la place.
:::

### Sortie

| Champ | Description |
|---|---|
| **No-Data Key** | Nom d'un élément XML qui **doit exister** dans le spool. Si absent, NomaUBL considère le document comme vide et l'ignore. Utile pour écarter les sections de spool qui ne correspondent pas à des factures réelles. |
| **Set Locale** | Locale utilisée pour rendre le PDF (par ex. `en_US`, `fr_FR`). Affecte uniquement le formatage des dates et nombres dans le PDF. |
| **Allow reprocess** | `Y` / `N` (défaut `N`). Quand `Y`, les factures produites depuis ce modèle peuvent être **retraitées** — reconstruites à partir du XML JDE archivé lors du premier dépôt — quand elles ont été **déposées sans être transmises** (statut 200, motif `NON_TRANSMISE`). Le retraitement régénère la facture électronique, le PDF et le XML, conserve le statut courant de la facture, inscrit une entrée *Retraitement* dans son historique et ne renvoie jamais rien à la plateforme ; chaque facture n'est retraitée qu'une fois. Les sources XML et PDF sont concernées. Le retraitement se déclenche depuis la [liste des factures](../application/invoices.md#reprocess), le [Tableau de bord IT](../application/tech-dashboard.md#to-reprocess) ou la ligne de commande. |
| **Allow full reprocess** | `Y` / `N` (défaut `N`). Quand `Y`, une facture en *Échec de validation* (`9905`) peut être **retraitée en totalité** depuis sa source archivée, une fois les données corrigées dans le système source : l'enrichissement est interrogé de nouveau, l'UBL régénéré, validé et envoyé à la PA selon les réglages du modèle et du type de document. L'historique des statuts est conservé et un marqueur de retraitement ouvre un nouveau cycle. Sources XML et PDF. Se déclenche depuis la fenêtre facture (bouton *Retraiter* sur une `9905`), la [liste des factures](../application/invoices.md#reprocess), le [Tableau de bord IT](../application/tech-dashboard.md#to-reprocess-full), l'API (`kind: "full"`) ou `-reprocess --full`. |

---

## Onglet 3 — ⚙️ Avancé

| Champ | Description |
|---|---|
| **Number of CPUs** | Nombre de threads parallèles utilisés par la chaîne de traitement pour ce type de document. Augmenter pour accélérer le traitement des spools volumineux, diminuer si l'hôte est à court de mémoire. Valeur par défaut : `4`. |

---

## Onglet 4 — 🖼 PDF Template

Le quatrième onglet désigne la **mise en page PDF** appliquée au rendu de ce document. Les mises en page sont des ressources partageables à part entière, stockées dans `config-pdf.json` et éditées sur la page dédiée [Modèles PDF](./pdf-templates.md). Cet onglet en référence une simplement **par son nom**, via la propriété `pdfTemplate` du modèle.

| Champ | Description |
|---|---|
| **PDF Template** | Liste déroulante qui regroupe toute mise en page enregistrée (les ressources `pdf-template` issues de *Modèles PDF*) et la `built-in` livrée. Laisser vide pour basculer sur le défaut global (`global.defaultPdfTemplate`). Champ vide et défaut global vide ramènent à `built-in`. |

La chaîne de résolution au moment du rendu se lit donc : ce champ → `global.defaultPdfTemplate` → `built-in`. Chaque facture enregistrée contient le nom du document dans `F564231.UHTMPL`, ce qui permet au générateur PDF de regénérer à la demande avec la mise en page active pour ce document.

:::tip[Édition de la mise en page]
L'éditeur visuel — liste de sections, tiroir par section, aperçu en direct, sections block — se trouve sur la page [Gestion → Modèles PDF](./pdf-templates.md). Y rédiger ou affiner une mise en page une seule fois, puis revenir ici pour y rattacher le document. Une même mise en page peut servir plusieurs documents.
:::

---

## Onglet 5 — 🔗 Enrichment

Quand le spool source n'a pas une donnée dont la facture a besoin — le numéro de TVA d'un client, un libellé issu d'une table de référence — l'onglet **Enrichment** va la chercher sur un [connecteur SQL](../configuration/sql-connectors.md) ou [API](../configuration/api-connectors.md) et l'injecte dans le spool **avant** la transformation XSL. Les valeurs récupérées se mappent alors dans l'[éditeur XSL](../ubl-tools/xsl-editor.md) comme n'importe quel champ du spool, et sont archivées avec la source.

Chaque **règle** décrit une recherche :

| Réglage | Ce qu'il fait |
|---|---|
| **Scope** | Un XPath qui choisit où la règle s'applique — tout le document, ou un nœud répété comme chaque ligne de facture. Les champs de ce périmètre alimentent la recherche, et les résultats y sont réécrits. |
| **Connecteur + requête / endpoint** | La requête SQL ou l'endpoint REST à appeler. |
| **Paramètres** | Les champs pris dans le périmètre, envoyés comme paramètres de requête / endpoint. |
| **Output** | Chaque colonne / champ retourné → le nom du nouvel élément écrit dans le spool. |
| **Target** | Où atterrissent les nouveaux éléments — sur le nœud du périmètre, dans un nouveau groupe, ou dans un groupe existant. |
| **Result** | Un jeu de champs à plat, ou un groupe répété (un enfant par ligne retournée). |

Les règles s'exécutent dans l'ordre : une règle ultérieure peut utiliser ce qu'une précédente a ajouté ; les recherches identiques sont mises en cache, donc le connecteur est appelé une fois par clé distincte. Le spool enrichi est stocké avec la source archivée (`F564230`) : une réimpression n'appelle pas le connecteur à nouveau. Un retraitement complet l'interroge de nouveau, et l'enrichissement **remplace** alors les lignes du passage précédent au lieu de s'y ajouter (les règles à ligne unique écrasaient déjà leurs champs). Rien ne s'exécute tant qu'aucune règle n'est configurée — les modèles existants ne changent pas.

**Dry run** — avec un spool d'exemple chargé, *Dry run* essaie les règles dessus : il appelle les vrais connecteurs et montre le XML enrichi, un résumé et d'éventuels avertissements, sans rien modifier. Téléchargez le résultat (nommé d'après l'exemple, par ex. `26000001CG00005_enrich.xml`) pour construire le mappage XSL dans la foulée.

---

## Conseils & bonnes pratiques

- **Toujours définir des valeurs par défaut** sur les champs « Identification du document » — elles couvrent les variations de spool où une balise peut être ponctuellement absente.
- **Pour les sources UBL, utiliser *Suggérer*** pour amorcer la regex — l'assistant gère les cas courants (chiffres seuls, lettres + chiffres, chiffres + lettres + chiffres). Ajustement manuel uniquement quand le format est inhabituel.
- **Laisser Processing Type vide** sauf besoin de surcharger la valeur par défaut du type de document ; cela évite la duplication de la configuration.
- Pour un nouveau type de document, **commencer par charger un échantillon XML**, configurer l'onglet 1 à l'aide du sélecteur, puis tester sur quelques documents avant d'affiner la chaîne XSL de l'onglet 2.
- Le **Burst Key est le champ XML le plus critique** — une valeur erronée produit soit un document géant unique, soit aucun document.
- **Éditer la mise en page PDF sur sa page dédiée.** [Modèles PDF](./pdf-templates.md) accueille l'éditeur visuel et l'aperçu en direct ; cet onglet permet uniquement de la sélectionner. Partager une même mise en page entre plusieurs documents évite d'éditer N copies dès qu'une mention légale ou un jeu de colonnes évolue.
