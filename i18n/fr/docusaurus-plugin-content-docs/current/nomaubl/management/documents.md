---
title: Documents
description: "Éditeur Documents de NomaUBL : régler, étape par étape dans l'ordre d'un traitement (Source, Identification, Enrichment, Rules, UBL, Output, Advanced), la lecture de chaque type de document depuis un spool XML, un PDF texte, une facture UBL ou un connecteur SQL / REST, son activité et son type, sa transformation en UBL et son rendu PDF."
keywords: [NomaUBL, documents, XPath, éclatement, bursting, source, idPattern, cbc:ID, UHTMPL, UBL, XSL, modèle PDF, activité, type, règles, règles de traitement, ERP, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Documents

L'éditeur **Documents** définit comment NomaUBL transforme un **spool XML source**, un **PDF texte** ou une **facture UBL déjà formée** en l'enregistrement sur lequel s'appuie le reste de la plateforme. NomaUBL **fonctionne quelle que soit la source** : le même modèle de configuration sert, que le spool vienne de **JD Edwards**, de SAP, de NetSuite, d'un ERP personnalisé ou de tout autre système capable de produire du XML, du PDF ou de l'UBL. (Seules les fonctions *Extract* et *synchronisation BIP* sont propres à JD Edwards.)

Accès : **Gestion → Documents**. Un document se règle par **étapes présentées en cartes, dans l'ordre d'un traitement** :

1. **Source** — l'origine des données : spool XML, PDF texte, facture UBL 2.1, ou **connecteur SQL ou REST** qui renvoie les données en direct, sans fichier.
2. **Identification** — l'identité du document : activité, type, clé, dates, montant, client.
3. **Enrichment** — les données absentes du spool, lues sur un connecteur.
4. **Rules** — l'activité et le type par règle, et les règles de traitement (autre type, exclusion).
5. **UBL** — la chaîne XSL vers l'UBL 2.1, le jeu de règles de validation, la post-transformation.
6. **Output** — pièces jointes, PDF lisible et sa mise en page, retraitement.
7. **Advanced** — nombre de threads.

L'éditeur reste en anglais : les libellés sont cités tels qu'ils apparaissent à l'écran.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 592" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="docst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="docst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="docst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="docst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="552" rx="14" fill="url(#docst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Documents</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Per-document templates that drive UBL transformation, processing options and the PDF layout.</text>
  <rect x="858" y="34" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="883.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add</text>
  <rect x="914" y="34" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="941.5" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Import</text>
  <rect x="975" y="34" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="997.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <rect x="1025" y="34" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1052.5" y="48.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <line x1="220" y1="76" x2="1100" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="234" y="88" width="190" height="470" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="242" y="96" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="110.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="242" y="128" width="174" height="38" rx="6" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="252" y="144" fill="#4a9eff" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">invoices</text>
  <text x="252" y="158" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">spool XML · émises</text>
  <rect x="242" y="172" width="174" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="188" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">credit_notes</text>
  <text x="252" y="202" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">spool XML · émises</text>
  <rect x="242" y="216" width="174" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="232" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">invoices-pdf</text>
  <text x="252" y="246" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">PDF texte · émises</text>
  <rect x="242" y="260" width="174" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="276" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">received-ubl</text>
  <text x="252" y="290" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">UBL · reçues</text>
  <rect x="436" y="88" width="650" height="470" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="448" y="110" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="526" y="96" width="440" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="110.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Factures clients issues du spool de l'ERP</text>
  <rect x="974" y="96" width="100" height="22" rx="5" fill="url(#docst-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1024.0" y="110.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <line x1="436" y1="128" x2="1086" y2="128" stroke="#1f2937" strokeWidth="1"/>
  <rect x="450" y="140" width="138" height="44" rx="9" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.4"/>
  <rect x="459" y="147" width="14" height="14" rx="4" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="479" y="158" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="459" y="175" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">XML · issued</text>
  <line x1="590" y1="162" x2="608" y2="162" stroke="#334155" strokeWidth="1.6"/>
  <path d="M608,162 l-5,-3 l0,6 Z" fill="#334155"/>
  <rect x="610" y="140" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="619" y="147" width="14" height="14" rx="4" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.55)" strokeWidth="1"/>
  <text x="639" y="158" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFICATION</text>
  <text x="619" y="175" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Activity MAGASINS · t…</text>
  <line x1="750" y1="162" x2="768" y2="162" stroke="#334155" strokeWidth="1.6"/>
  <path d="M768,162 l-5,-3 l0,6 Z" fill="#334155"/>
  <rect x="770" y="140" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="779" y="147" width="14" height="14" rx="4" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.55)" strokeWidth="1"/>
  <text x="799" y="158" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENRICHMENT</text>
  <text x="779" y="175" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1 lookup(s)</text>
  <line x1="910" y1="162" x2="928" y2="162" stroke="#334155" strokeWidth="1.6"/>
  <path d="M928,162 l-5,-3 l0,6 Z" fill="#334155"/>
  <rect x="930" y="140" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="939" y="147" width="14" height="14" rx="4" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.55)" strokeWidth="1"/>
  <text x="959" y="158" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RULES</text>
  <text x="939" y="175" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 rule(s)</text>
  <rect x="450" y="196" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="459" y="203" width="14" height="14" rx="4" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.55)" strokeWidth="1"/>
  <text x="479" y="214" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UBL</text>
  <text x="459" y="231" fill="#f87171" fontSize="9" fontFamily="system-ui, sans-serif">No stylesheet</text>
  <line x1="590" y1="218" x2="608" y2="218" stroke="#334155" strokeWidth="1.6"/>
  <path d="M608,218 l-5,-3 l0,6 Z" fill="#334155"/>
  <rect x="610" y="196" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="619" y="203" width="14" height="14" rx="4" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1"/>
  <text x="639" y="214" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT</text>
  <text x="619" y="231" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Attachment none · re…</text>
  <line x1="750" y1="218" x2="768" y2="218" stroke="#334155" strokeWidth="1.6"/>
  <path d="M768,218 l-5,-3 l0,6 Z" fill="#334155"/>
  <rect x="770" y="196" width="138" height="44" rx="9" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="779" y="203" width="14" height="14" rx="4" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1"/>
  <text x="799" y="214" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADVANCED</text>
  <text x="779" y="231" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Default</text>
  <line x1="436" y1="260" x2="1086" y2="260" stroke="#1f2937" strokeWidth="1"/>
  <rect x="450" y="270" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="508.5" y="284.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤒ Load XML sample</text>
  <text x="577" y="285" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">invoices_sample.xml — 142 paths</text>
  <rect x="1002" y="270" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1037.0" y="284.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Export</text>
  <line x1="436" y1="302" x2="1086" y2="302" stroke="#1f2937" strokeWidth="1"/>
  <text x="450" y="324" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="450" y="348" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="586" y="334" width="486" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="348.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">XML spool (XSL transform → UBL)  ▾</text>
  <text x="450" y="380" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Direction</text>
  <rect x="586" y="366" width="486" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="380.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Issued — operator is the seller (sales invoice)  ▾</text>
  <text x="450" y="418" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BURSTING (DOCUMENT ROOT)</text>
  <text x="450" y="442" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">JDE invoice key</text>
  <rect x="586" y="428" width="486" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="442.5" fill="#475569" fontSize="10" fontFamily="ui-monospace, monospace">11:3</text>
  <text x="450" y="474" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Burst Key</text>
  <rect x="586" y="460" width="452" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="474.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Invoice</text>
  <rect x="1046" y="460" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1059.0" y="474.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <text x="450" y="506" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">XML tag name used to split the spool into individual documents.</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste des documents</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recherche · une carte par document</text>
  <line x1="200" y1="157.0" x2="242" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes dans l'ordre</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque carte affiche son état</text>
  <line x1="200" y1="237.0" x2="450" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Load XML sample</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">.xml ou .pdf → sélecteur</text>
  <line x1="200" y1="317.0" x2="450" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs de l'étape choisie</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ici : Source, spool XML</text>
  <line x1="200" y1="457.0" x2="450" y2="418" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="1120" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1130" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enregistre le document</text>
  <line x1="1120" y1="107.0" x2="1074" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="1120" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes selon la source</text>
  <text x="1130" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">UBL : sans Enrichment…</text>
  <line x1="1120" y1="187.0" x2="908" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">État en rouge</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">valeur encore à saisir</text>
  <line x1="1120" y1="267.0" x2="588" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le document en JSON</text>
  <line x1="1120" y1="347.0" x2="1072" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
  <rect x="1120" y="456" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="471" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de balise</text>
  <text x="1130" y="484" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une fois l'échantillon chargé</text>
  <line x1="1120" y1="473.0" x2="1059" y2="471" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docst-arrow)"/>
</svg>

---

## Étapes de l'éditeur \{#steps\}

Les documents sont listés à gauche sous forme de cartes : chacune affiche le nom du document, sa description et une icône qui suit sa source (spool XML, PDF, UBL ou connecteur). Un clic sur une carte ouvre son éditeur.

Chaque carte affiche le nom de l'étape et son état en quelques mots ; une valeur encore à saisir apparaît en rouge. Un clic sur une carte ouvre ses réglages sous la bande. Les étapes sans objet pour la source du document sont masquées.

| Étape | État affiché sur la carte | Présente pour |
|---|---|---|
| **Source** | La source et le sens, par ex. `XML · issued`. | Toutes les sources. |
| **Identification** | `Activity … · type …`, ou **No activity** en rouge. | Toutes les sources. |
| **Enrichment** | Le nombre de recherches, ou `None`. | Sources XML, PDF et connecteur ; pour une source UBL, seulement si des recherches y ont été définies. |
| **Rules** | Le nombre de règles (activité et type, plus règles de traitement), ou `None`. | Toutes les sources. |
| **UBL** | Le nom du fichier de la feuille UBL, `Already UBL` pour une source UBL, ou **No stylesheet** en rouge. | Toutes les sources. |
| **Output** | `Attachment … · readable PDF …`. | Toutes les sources. |
| **Advanced** | Le nombre de threads, ou `Default`. | Toutes les sources. |

**Enregistrer** enregistre l'ensemble du document, quelle que soit l'étape ouverte.

---

## Charger un échantillon XML (optionnel, recommandé)

Sous les étapes, **Load XML sample** charge un fichier de spool représentatif du système source — ou un PDF pour un document à source PDF, converti côté serveur avec les réglages enregistrés du document. Une fois l'échantillon chargé, chaque champ XPath affiche un bouton **⊞** : il ouvre un panneau latéral qui liste tous les chemins de balises de l'échantillon, pour choisir la balise sans la saisir. Le panneau se filtre et affiche la valeur de chaque chemin.

L'échantillon sert aussi au *Dry run* de l'étape [Enrichment](#enrichment) et au bouton *Try on the sample* de l'étape [Rules](#rules). **Export**, à l'autre bout de la barre, télécharge les réglages du document au format JSON.

La configuration se fait aussi sans échantillon, mais le sélecteur réduit les risques d'erreur de saisie.

---

## Source \{#source\}

La première étape indique à NomaUBL **d'où viennent les données**.

### Source et sens

| Champ | Valeurs | Description |
|---|---|---|
| **Source** | `XML` (défaut) / `UBL` / `Connecteur` / `PDF` | Sélectionne le pipeline d'entrée. **`PDF`** — un PDF texte issu de n'importe quel système, converti en XML à plat puis traité exactement comme un spool XML — voir [Extraction PDF](#extraction-pdf). **`XML`** — un spool XML provenant de tout système source, transformé en UBL 2.1 par la chaîne XSL. **`UBL`** — des fichiers déjà au format UBL 2.1 (l'ERP émet de l'UBL nativement, ou le fichier vient d'un système amont en UBL) ; aucune transformation XSL ne s'exécute. **`Connecteur`** — aucun fichier : NomaUBL appelle une requête SQL ou un endpoint REST qui renvoie le document, puis applique la même chaîne XSL au résultat. |
| **Direction** | `Émise` (défaut) / `Reçue` | Côté de la transaction traité par ce modèle. **`Émise`** — factures envoyées par l'opérateur à un client. **`Reçue`** — factures reçues d'un fournisseur ; la contrepartie de la ligne est la partie fournisseur, les actions vendeur (Renvoyer à la PA, Marquer envoyée, Avoir…) sont masquées dans la modale de détail, et la liste Factures classe la ligne sous le chip *Reçues*. Positionné par défaut sur le modèle livré `received-ubl`. |

Le choix de la Source modifie les champs de cette étape et de l'étape *Identification*, et masque les étapes sans objet. Le champ Direction est indépendant : toute combinaison Source × Direction est valide, même si *Reçue* va le plus souvent de pair avec *UBL* (factures fournisseur poussées par la PA).

:::info[La direction est stockée sur la ligne]
La valeur Direction est écrite une fois sur la ligne au moment de l'insertion (colonne `UHDRIN` sur F564231 — `'1'` pour reçue, `'2'` pour émise). Changer la *Direction* du modèle ensuite ne **reclasse pas** les lignes déjà existantes — le filtre de la liste Factures, les règles de notification et les enveloppes e-Reporting lisent la valeur figée, pas le réglage courant du modèle. Choisir la bonne Direction avant de traiter la première facture sur un nouveau modèle ; n'en changer plus tard qu'en acceptant que les lignes historiques restent sur la direction précédente.
:::

### Éclatement (Document Root) *(quand Source = XML ou PDF)*

| Champ | Description |
|---|---|
| **Burst Key** | Nom de balise XML utilisé pour découper le spool en documents individuels. Cet élément marque la **racine d'un document** — chaque occurrence dans le spool produit un document de sortie. |
| **JDE invoice key** | Source XML uniquement. PDF JD Edwards dont les sections diffèrent de l'impression de facture standard : `section:champ` du numéro de facture (par ex. `11:3`). Donne un `<Invoice>` par valeur, avec la clé de découpage `Invoice`. Se règle depuis la page [PDF vers XML](../processing/pdf-to-xml.md). |

### Extraction PDF *(quand Source = PDF)* \{#extraction-pdf\}

Avec **Source = PDF**, le modèle prend en entrée un **PDF texte** issu de n'importe quel système — pas seulement JD Edwards — et le convertit en un XML à plat que l'[éditeur XSL](../ubl-tools/xsl-editor.md) mappe comme un spool. La conversion reconstruit la mise en page et écrit ce qu'elle lit ; elle ne connaît rien des factures. Les PDF scannés (images sans texte) sont refusés avec une erreur explicite.

Le groupe **PDF extraction** commence par un bouton **Open in PDF to XML** : il ouvre la page [PDF vers XML](../processing/pdf-to-xml.md) sur ce document, où le tableau, le récapitulatif TVA, le numéro de facture et la société se règlent en cliquant sur les lignes d'un PDF d'exemple. Le bouton est actif dès que le document porte un nom.

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

#### Contenu du XML

| Ce que contient le PDF | Ce que reçoit le XML |
|---|---|
| Une ligne lue comme *Libellé : valeur* (ou libellé et valeur sur deux colonnes) | Un élément nommé d'après le libellé — `Montant TTC 1 189,55 €` → `<Montant_TTC>1189.55</Montant_TTC>`. Montants et pourcentages passent au point décimal, les dates `dd/MM/yyyy` au format ISO, et les identifiants imprimés avec des espaces (numéro de TVA, SIREN, code postal) sont compactés. |
| Un taux inclus dans un libellé (`TVA 20,00%`) | Un élément voisin, pour que le nom reste stable : `<TVA>198.26</TVA><TVA_taux>20.00</TVA_taux>`. |
| Une valeur faite de segments séparés par ` / `, dont certains portent leur propre libellé (`VIREMENT / IBAN : FR76 … / BIC : CCBPFRPPBDX / Titulaire : ACME SA`) | La partie sans libellé reste dans l'élément et chaque segment libellé devient un élément voisin — `Paiement`, `Paiement_IBAN`, `Paiement_BIC`, `Paiement_Titulaire` — mappable séparément ; les espaces de regroupement de l'IBAN sont supprimés. |
| Une période (`01/09/2026 – 30/09/2026`) | Ses dates de début et de fin en `<…_debut>` et `<…_fin>`, chacune mappable sur son propre champ UBL. |
| Un libellé imprimé avec le code de son terme métier (`Date d'échéance (BT-9)`) | Un élément nommé d'après le libellé, sans le code ; la cellule suivante est sa valeur même quand c'est du texte, et un code final entre parenthèses (`Facture (380)`) donne aussi `<…_code>` — voir [Factures imprimées avec les codes des termes métier](../processing/pdf-to-xml.md#business-term-codes). |
| Le tableau entre les ancres de début et de fin | `<Lignes>/<Ligne>`, colonnes nommées d'après la ligne d'en-tête (déduites de la première ligne quand l'en-tête tient dans une seule cellule) ; les libellés sur plusieurs lignes sont fusionnés, un trait horizontal ferme le tableau. Un tableau poursuivi sur la page suivante laisse de côté le pied de page et l'en-tête de la page suivante — voir [Tableaux des lignes](../processing/pdf-to-xml.md#line-tables). |
| Les cadres des parties | Des blocs `<Adresse_N>` — `Titre` (un titre de bloc tel que *Vendeur* ou *Client*), `Nom`, lignes `Rue`, `Code_postal`, `Ville`, `Pays` (lu aussi dans `VILLE, FR`), ainsi que les lignes libellées imprimées dans le cadre (code fournisseur, SIRET, TVA, téléphone, e-mail). |
| Chaque ligne imprimée | `<Textes>/<Texte n="…" page="…">`, cellules séparées par ` \| `, pour que tout ce que les règles ci-dessus n'ont pas capté reste accessible par XPath. |
| Le fichier lui-même | `<FichierPDF>` avec son chemin — `{FichierPDF}` en [pièce jointe complémentaire](#additional-attachments) intègre le PDF d'origine dans l'UBL. |

#### Champs de l'extraction PDF

Le groupe **PDF extraction** règle la conversion :

| Champ | Description |
|---|---|
| **Table start** | Regex testée sur chaque ligne : les cellules de la ligne trouvée nomment les colonnes du tableau (par ex. `PRESTATION \| Qté \| P.U. HT \| Montant HT`). |
| **Header rows** | Nombre de lignes d'un en-tête de tableau imprimé sur plusieurs lignes, la ligne *Table start* étant la première (défaut `1`). L'en-tête est fusionné par colonne et les cellules empilées sur une ligne sont placées dans leur propre colonne. Au-delà d'une ligne, le tableau s'arrête à la première ancre de fin. |
| **Table end** | Regex testée sur la première ligne qui suit le tableau — cette ligne n'en fait pas partie. |
| **Rows ignored** | Regex testée sur les lignes du tableau qui ne sont pas des lignes de facture, comme le sous-total qui ferme une section (par ex. `^Sous total`) : le tableau se poursuit après elles, et leurs valeurs libellées restent des champs du document. La casse est ignorée. Avec ce réglage, **Table end** désigne la ligne qui suit la dernière section. Vide = aucune ligne ignorée. |
| **Invoice split** | Regex dont le premier groupe est le numéro de facture, pour un PDF qui contient plusieurs factures (par ex. `N° de facture :\s*(\S+)`) : un `<Document>` par numéro, chacun avec ses propres pages. Vide = une facture par PDF. |
| **VAT table start** | Regex sur la ligne d'en-tête du récapitulatif TVA : ses lignes deviennent `<Recap_TVA>/<Ligne_TVA>`, une par taux. Vide = aucun récapitulatif TVA lu. |
| **VAT columns** | Cellules d'en-tête conservées à partir de la gauche, quand un autre bloc est imprimé à côté du récapitulatif. Vide = toutes. |
| **VAT table end** | Regex sur la première ligne après les taux ; vide = la première ligne sans valeur. |
| **Layout match** | Regex facultative que le texte de la page doit contenir ; un fichier qui ne correspond pas est refusé — utile quand un dossier mélange plusieurs mises en page. |
| **Page match** | Regex facultative : seules les pages dont le texte correspond sont converties — une impression qui contient un relevé et la facture ne garde que les pages de la facture. |
| **Field 1** … **Field 5** | `Nom\|regex` appliquée au texte de la page ; le premier groupe (à défaut la correspondance entière) devient `<Nom>`. Ajouter `=>texte` pour réécrire la correspondance, `$1` admis — `Type_JDE\|^FACTURE=>F9`. Deux champs peuvent porter le même nom si un seul des deux peut correspondre. |

Le tableau, le récapitulatif TVA, le numéro de facture et la société se règlent plus simplement sur la page [PDF vers XML](../processing/pdf-to-xml.md), en cliquant sur les lignes d'un PDF d'exemple.

#### Exemple de conversion

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

Pour une source connecteur, l'étape *Identification* lit le XML du connecteur : un champ de l'appel d'en-tête (par ex. `DocNumber`), ou un chemin pour un champ imbriqué (`Header/customer/id`) — voir [Identification du document](#document-identification). **Charger un échantillon connecteur**, dans l'[Éditeur XSL](../ubl-tools/xsl-editor.md), rapatrie une vraie réponse : le sélecteur XPath propose alors des chemins tirés de données réelles.

L'exécution d'un document à source connecteur est décrite sur [Traitement → Traiter un document](../processing/document.md) : la page remplace le sélecteur de fichier par le formulaire de paramètres dérivé du connecteur d'en-tête. Les mêmes paramètres sont transmis en ligne de commande via des arguments `--param clé=valeur` répétables (voir [Ligne de commande](./command-line.md)).

### Source UBL : dossier d'entrée et routage *(quand Source = UBL)*

Un modèle source UBL lit son **propre** dossier d'entrée `<input>/<template>` — la même convention par modèle que pour un modèle XML —, si bien que plusieurs modèles UBL peuvent être planifiés sur des dossiers différents. Un fichier UBL traité avec succès est retiré du dossier ; un fichier en échec, et les exécutions en validation seule, le conservent.

Chaque facture UBL est validée et routée selon **son propre** type de transaction — B2B, B2G, B2C ou B2B international — lu dans la note de routage de la facture : un lot qui mélange les types est donc traité fichier par fichier. Un fichier sans note de routage reprend le type de document par défaut du modèle.

---

## Identification \{#identification\}

Cette étape indique à NomaUBL **quel est le document** : son activité et son type, sa clé, et les données fonctionnelles lues dans le spool. Ses champs dépendent de la source ; un jeu pour une source XML, PDF ou connecteur, un autre pour une source UBL.

### Identification du document *(quand Source = XML, PDF ou connecteur)* \{#document-identification\}

NomaUBL utilise ces cinq champs pour savoir **quel est le document**, à qui il appartient et à quel type métier il correspond. Chaque champ prend une balise XML et une valeur par défaut, utilisée si la balise est absente.

Une balise est un nom d'élément — le premier élément de ce nom dans le document — ou un **chemin** comme `Header/customer/id` quand plusieurs éléments portent le même nom (réponse imbriquée d'un connecteur, spool qui répète une balise dans plusieurs blocs). Un chemin qui ne trouve rien ne donne rien : la valeur par défaut s'applique.

| Champ | Concept du système source |
|---|---|
| **Activity** (activité) | Activité métier / module auquel appartient le document. |
| **Type** | Code de type de document tel que connu dans NomaUBL. |
| **Document ID** | Numéro de facture / numéro de document. |
| **Document Type (JDE)** | Type de document tel que défini dans le système source (nommé d'après les codes JD Edwards RI/RM, mais accepte n'importe quelle valeur source). |
| **Company (JDE)** | Société / unité métier propriétaire du document dans le système source (nom de champ historique, valable pour tout ERP). |

L'activité et le type trouvés ici peuvent être remplacés, document par document, par les [règles d'activité et de type](#activity-and-type-rules) de l'étape *Rules*.

### Données du document (XPath) *(quand Source = XML ou PDF)*

Données fonctionnelles que NomaUBL lit dans le spool pour alimenter la facture UBL et piloter le routage.

| Champ | Description |
|---|---|
| **Find company by** | *Company (JDE) above* (défaut) / *VAT number* / *SIRET* / *SIREN*. Recherche dans les [sociétés fournisseur](../ubl-tools/ubl-defaults/suppliers-companies.md) l'identifiant lu dans **Identifier element**, et ajoute la société trouvée en `<CompanyCode>` (mapper `TAG_COMPANY_CODE` sur `CompanyCode`). Un SIRET sans correspondance se rabat sur son SIREN. **Sans correspondance, la facture est arrêtée**, avec le motif dans le journal de traitement (*… not found in the supplier companies*, *… is on several supplier companies*). |
| **Identifier element** | Élément qui porte l'identifiant recherché (par ex. `TaxId2_ID7`). Affiché une fois *Find company by* renseigné. |
| **Customer Number** | Numéro client / numéro d'adresse. |
| **Amount** | Montant brut du document. |
| **Document Date** | Date d'émission du document. |
| **Due Date** | Date d'échéance du paiement. |
| **Routing Code** | Code qui oriente le document vers le bon **canal de distribution** : archivage, e-mail, courrier, transmission à une Plateforme Agréée, etc. |
| **Office** | Balise XML du spool contenant le code **bureau / unité opérationnelle**. |
| **Processing Type** | Balise XML portant le code de type de traitement (B2B, B2BINT…). Laisser vide pour utiliser la **valeur par défaut définie dans Types de documents**. |

> 💡 Chaque champ « Données du document » dispose de sa propre **valeur par défaut**, utilisée quand la balise XML est absente ou vide — pratique quand une valeur est constante pour un modèle donné.

### Format de date *(quand Source = XML ou PDF)*

| Champ | Défaut | Description |
|---|---|---|
| **Input format** | `yyyy-MM-dd` *(ISO)* | Format de lecture des **dates de document et d'échéance** extraites du XML source avant leur écriture dans `F564230` / `F564231`. Les sources UBL sont toujours en ISO (la XSL produit de l'ISO) ; sur les sources XML, le format du spool dépend de la langue du système (`dd/MM/yyyy` pour beaucoup d'ERP français, `MM/dd/yyyy` pour les spools nord-américains, etc.). |

Choisir le format qui correspond littéralement aux dates source. La liste propose :

| Exemple de date source | Format |
|---|---|
| `2024-12-31` | `yyyy-MM-dd` *(défaut — ISO)* |
| `31/12/2024` | `dd/MM/yyyy` |
| `31/12/24` | `dd/MM/yy` |
| `12/31/2024` | `MM/dd/yyyy` |
| `31-12-2024` | `dd-MM-yyyy` |
| `20241231` | `yyyyMMdd` |

Les sources UBL restent en ISO via la XSL : le champ ne les concerne pas.

### Identification du document *(quand Source = UBL)* \{#document-identification-ubl\}

Un fichier UBL ne porte aucun spool d'où extraire les données : l'**Activity** et le **Type** que la source XML récupère par XPath se saisissent ici en texte. Les deux champs sont **obligatoires** — ils sont écrits dans la ligne de suivi `F564230` dont dépendent l'envoi PA et fetch-import.

| Champ | Description |
|---|---|
| **Activity** | Le code d'activité inscrit sur la ligne (par ex. `UBL`). Stocké dans `F564230.FEAA10`. |
| **Type** | Le type de document (par ex. `FACTURE`). Stocké dans `F564230.FEAA20`. |

Ces deux valeurs peuvent être remplacées facture par facture par les [règles d'activité et de type](#activity-and-type-rules), qui lisent l'UBL lui-même (vendeur, acheteur, code de type, devise…).

:::info[Pourquoi cette ligne compte]
Le pipeline source UBL insère la même ligne de suivi `F564230` que le pipeline XML, en lisant le reste de ses valeurs directement dans l'UBL : BT-47 SIREN acheteur → `FEALKY`, BT-115 PayableAmount → `FEAEXP`, BT-2 IssueDate → `FEIVD`, BT-9 DueDate → `FEARDU`. Sans elle, l'envoi PA n'aurait aucune ligne où inscrire son identifiant de transaction, `FEUKIDSZ` resterait vide et fetch-import n'aurait rien à interroger. Le mode remplacement met à jour la ligne existante au lieu de la dupliquer ; sans remplacement, une facture déjà traitée est ignorée avec l'avertissement habituel.
:::

### Clé du document *(quand Source = UBL)* \{#cle-du-document\}

Le groupe **Document key (doc / dct / kco)** détermine comment un document UBL obtient sa clé primaire `(doc, dct, kco)` — le triplet qui identifie le document partout ailleurs dans NomaUBL. Le sélecteur **Key mode** propose deux modes :

| Key mode | Fonctionnement |
|---|---|
| **From cbc:ID (regex pattern)** *(défaut)* | La clé est extraite du `cbc:ID` de la facture par une regex — voir plus bas. |
| **Sequence (NomaUBL numbers the document)** | NomaUBL attribue lui-même le numéro de document, sous un type de document et une société fixes. |

**Find company by** — *As configured below* (défaut) / *VAT number* / *SIRET* / *SIREN* / *VAT, then SIREN, then SIRET* : recherche dans les [sociétés fournisseur](../ubl-tools/ubl-defaults/suppliers-companies.md) l'identifiant du vendeur présent dans l'UBL (celui de l'acheteur quand le sens est `R`) pour fixer la société. Sans correspondance, le document est arrêté.

#### Mode séquence

Prévu pour les **factures reçues**, dont le `cbc:ID` suit le format propre à chaque fournisseur ; utilisable aussi pour de l'UBL émis quand le format de numérotation n'est pas connu.

| Champ | Description |
|---|---|
| **Document type (dct)** | Type de document JDE fixe de la séquence — `II` (facture entrante) s'il est vide. Choisir un type que JD Edwards n'utilise pas pour la même société. |
| **Company (kco)** | Code société fixe. Obligatoire. |
| **Sequence start** | Premier numéro attribué ; ensuite, le plus grand numéro enregistré pour ce type de document et cette société, plus un. |

Le numéro de facture du fournisseur reste enregistré comme **numéro UBL** (BT-1). Chaque traitement attribue un nouveau numéro : un document reçu deux fois obtient deux numéros.

#### Depuis `cbc:ID` (regex)

La clé est extraite du `cbc:ID` de la facture via une regex à **groupes nommés**. Aucune convention de nommage de fichier n'est exigée ; le fichier peut porter n'importe quel nom.

| Champ | Description |
|---|---|
| **ID Pattern** | Regex appliquée à `cbc:ID`. Groupes autorisés : `doc`, `dct`, `kco`. Tout sous-ensemble est admis ; les groupes manquants prennent les valeurs par défaut ci-dessous. |
| **doc default** | Utilisé quand la regex ne correspond pas ou que le groupe `doc` est absent. |
| **dct default** | Utilisé quand le groupe `dct` est absent. |
| **kco default** | Utilisé quand le groupe `kco` est absent — courant quand le `cbc:ID` n'inclut pas de code société. |

#### Assistant Sample cbc:ID + Suggest + Test

Pour éviter d'écrire la regex à la main, la section comprend un assistant :

| Action | Effet |
|---|---|
| **Sample cbc:ID** | Coller un identifiant réel issu d'une facture (par ex. `38706889RI00001` ou `F202600025`). |
| **Suggest** | Génère un `idPattern` en découpant l'échantillon aux transitions lettres / chiffres, renseigne les valeurs par défaut correspondantes et lance *Test* sur le résultat. |
| **Test** | Applique l'`idPattern` et les valeurs par défaut à l'échantillon et affiche le `(doc, dct, kco)` extrait — en vert en cas de correspondance, en rouge sur une erreur de regex. |

Exemples :

| Échantillon | `idPattern` suggéré | Valeurs par défaut | Extraction |
|---|---|---|---|
| `F202600025` | `^(?<dct>[A-Z]+)(?<doc>\d+)$` | `kcoDefault = 00001` | `doc=202600025`, `dct=F`, `kco=00001` |
| `38706889RI00001` | `^(?<doc>\d+)(?<dct>[A-Z]+)(?<kco>\d+)$` | (aucune) | `doc=38706889`, `dct=RI`, `kco=00001` |

### Recherche du numéro de document *(quand Source = UBL)*

Sur un modèle **Reçu**, le `cbc:ID` de l'UBL est le numéro de facture du *fournisseur*, pas la clé interne de l'opérateur. La regex sur `cbc:ID` n'a alors plus de sens : le triplet interne `(doc, dct, kco)` doit être retrouvé à partir de champs côté fournisseur (numéro UBL, nom du fournisseur, TVA du fournisseur, etc.).

Le groupe **Document number lookup (received invoices)**, à la fin du groupe *Document key*, confie cette recherche à un [connecteur SQL](../configuration/sql-connectors.md) ou à un [connecteur API](../configuration/api-connectors.md).

| Champ | Description |
|---|---|
| **Connector** | Nom du connecteur SQL ou API qui porte la requête / l'endpoint de recherche. |
| **Endpoint / query** | La requête nommée (SQL) ou l'endpoint (API) de ce connecteur. Il doit renvoyer les champs `doc`, `dct` et `kco` (noms réglés plus bas). |
| **Parameters** | Couples `clé=valeur` séparés par des points-virgules, par ex. `ublNumber={ublNumber};supplierVat={supplierVat}`. Placeholders lus dans l'UBL : `{ublNumber}`, `{issueDate}`, `{supplierName}`, `{supplierVat}`, `{supplierEndpoint}`, `{currency}`. |
| **doc field** / **dct field** / **kco field** | Champs de la réponse qui portent `doc`, `dct` et `kco` (par défaut `doc`, `dct`, `kco`). |

Quand le groupe est renseigné, la regex sur `cbc:ID` est ignorée et la réponse du connecteur donne la clé. Laisser le groupe vide pour conserver l'assistant de regex et les valeurs par défaut `(doc, dct, kco)` ci-dessus.

Le modèle livré `received-ubl` arrive avec ce groupe **présent mais vide** : choisir le connecteur et l'endpoint, renseigner les paramètres, et le flux de réception est en place de bout en bout.

---

## Enrichissement \{#enrichment\}

Quand le spool source n'a pas une donnée dont la facture a besoin — le numéro de TVA d'un client, un libellé issu d'une table de référence —, l'étape **Enrichment** va la chercher sur un [connecteur SQL](../configuration/sql-connectors.md) ou [API](../configuration/api-connectors.md) et l'injecte dans le spool **avant** la transformation XSL. Les valeurs récupérées se mappent alors dans l'[éditeur XSL](../ubl-tools/xsl-editor.md) comme n'importe quel champ du spool, et sont archivées avec la source. Une source UBL n'est pas enrichie : l'étape est masquée pour elle, sauf si des recherches y ont été définies.

Chaque **règle** décrit une recherche :

| Réglage | Rôle |
|---|---|
| **Scope** | Un XPath qui choisit où la règle s'applique — tout le document, ou un nœud répété comme chaque ligne de facture. Les champs de ce périmètre alimentent la recherche, et les résultats y sont réécrits. |
| **Connecteur + requête / endpoint** | La requête SQL ou l'endpoint REST à appeler. |
| **Paramètres** | Les champs pris dans le périmètre, envoyés comme paramètres de requête / endpoint. |
| **Output** | Chaque colonne / champ retourné → le nom du nouvel élément écrit dans le spool. |
| **Target** | L'emplacement des nouveaux éléments — sur le nœud du périmètre, dans un nouveau groupe, ou dans un groupe existant. |
| **Result** | Un jeu de champs à plat, ou un groupe répété (un enfant par ligne retournée). |

Les règles s'exécutent dans l'ordre : une règle peut utiliser ce qu'une règle précédente a ajouté ; les recherches identiques sont mises en cache, et le connecteur n'est appelé qu'une fois par clé distincte. Le spool enrichi est stocké avec la source archivée (`F564230`) : une réimpression n'appelle pas de nouveau le connecteur. Un retraitement complet l'interroge de nouveau, et l'enrichissement **remplace** alors les lignes du passage précédent au lieu de s'y ajouter (les règles à ligne unique écrasaient déjà leurs champs). Rien ne s'exécute tant qu'aucune règle n'est configurée.

**Dry run** — avec un spool d'exemple chargé, *Dry run* essaie les règles dessus : il appelle les vrais connecteurs et affiche le XML enrichi, un résumé et d'éventuels avertissements, sans rien modifier. Le résultat se télécharge (nommé d'après l'exemple, par ex. `26000001CG00005_enrich.xml`) pour construire le mappage XSL dans la foulée.

---

## Règles \{#rules\}

L'étape **Rules** réunit deux listes, appliquées dans cet ordre au traitement du document :

1. **Activity and type** — donne au document une activité, un type ou les deux, d'après son contenu.
2. **Processing: treat as another type, or exclude** — oriente le document vers un autre type de document, ou se contente de l'enregistrer.

<svg viewBox="0 0 1320 582" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="docru-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="docru-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="docru-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="docru-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="546" rx="14" fill="url(#docru-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ACTIVITY AND TYPE</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Applied when the document is processed. Rules are read from top to bottom: the first one that matches and gives an activity sets it, same for the type.</text>
  <text x="240" y="77" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">With no match the document keeps the activity and type of its Identification step. A save by hand in the invoice or document window never changes them.</text>
  <rect x="240" y="90" width="840" height="104" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="98" width="590" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Ventes magasins</text>
  <rect x="850" y="98" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="863.0" y="112.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="880" y="98" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="112.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="910" y="98" width="86" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="953.0" y="112.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Remove</text>
  <text x="252" y="145" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">if</text>
  <rect x="286" y="130" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="296" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Element of the document…  ▾</text>
  <rect x="552" y="130" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">=  ▾</text>
  <rect x="708" y="130" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="718" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Invoice_Header/Channel</text>
  <rect x="914" y="130" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">STORE</text>
  <rect x="1044" y="130" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="144.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <text x="252" y="175" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">then</text>
  <text x="286" y="175" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">activity</text>
  <rect x="340" y="160" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="174.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">MAGASINS  ▾</text>
  <text x="520" y="175" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">type</text>
  <rect x="552" y="160" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="174.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">B2C</text>
  <rect x="710" y="160" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="765.0" y="174.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add condition</text>
  <rect x="240" y="202" width="840" height="134" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="210" width="590" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="224.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Facturation centrale</text>
  <rect x="850" y="210" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="863.0" y="224.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="880" y="210" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="224.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="910" y="210" width="86" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="953.0" y="224.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Remove</text>
  <text x="252" y="257" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">if</text>
  <rect x="286" y="242" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="296" y="256.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Company (societeJDE)  ▾</text>
  <rect x="552" y="242" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="256.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">=  ▾</text>
  <rect x="708" y="242" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="718" y="256.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">00001</text>
  <rect x="1044" y="242" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="256.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <text x="252" y="287" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">and</text>
  <rect x="286" y="272" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="296" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Customer number (numClient)  ▾</text>
  <rect x="552" y="272" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">not in list  ▾</text>
  <rect x="708" y="272" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="718" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">C9001, C9002</text>
  <rect x="1044" y="272" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="286.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <text x="252" y="317" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">then</text>
  <text x="286" y="317" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">activity</text>
  <rect x="340" y="302" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="316.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">CENTRALE  ▾</text>
  <text x="520" y="317" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">type</text>
  <rect x="552" y="302" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="316.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">B2B</text>
  <rect x="710" y="302" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="765.0" y="316.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add condition</text>
  <rect x="240" y="346" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="279.0" y="360.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add rule</text>
  <rect x="326" y="346" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="390.0" y="360.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Try on the sample</text>
  <text x="464" y="361" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Invoice (first) → activity MAGASINS (rule “Ventes magasins”) · type B2C (rule “Ventes magasins”)</text>
  <line x1="240" y1="386" x2="1080" y2="386" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="408" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PROCESSING: TREAT AS ANOTHER TYPE, OR EXCLUDE</text>
  <text x="240" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Evaluated per document after the document type is resolved; the first matching rule wins, no rule = normal processing.</text>
  <rect x="240" y="438" width="840" height="76" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="446" width="370" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="460.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Gratuités</text>
  <rect x="628" y="446" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="638" y="460.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Treat as document type  ▾</text>
  <rect x="804" y="446" width="110" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="859.0" y="460.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">ARCHIVEONLY  ▾</text>
  <rect x="920" y="446" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.0" y="460.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <rect x="950" y="446" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="963.0" y="460.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <rect x="980" y="446" width="86" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1023.0" y="460.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Remove</text>
  <text x="252" y="493" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">if</text>
  <rect x="286" y="478" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="296" y="492.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Invoice amount (montant)  ▾</text>
  <rect x="552" y="478" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="492.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">is zero / empty  ▾</text>
  <rect x="240" y="522" width="840" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="660.0" y="536.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add rule</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom de la règle</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repris dans le journal</text>
  <line x1="200" y1="117.0" x2="250" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Conditions</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">toutes requises (if … and …)</text>
  <line x1="200" y1="177.0" x2="286" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activité et / ou type</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide = inchangé</text>
  <line x1="200" y1="253.0" x2="340" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="20" y="448" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="463" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Règles de traitement</text>
  <text x="30" y="476" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">autre type · exclusion</text>
  <line x1="200" y1="465.0" x2="240" y2="476" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'ordre compte</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">↑ ↓ — 1re règle par valeur</text>
  <line x1="1120" y1="117.0" x2="863" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="1120" y="276" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Élément ou chemin</text>
  <text x="1130" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisi dans l'échantillon</text>
  <line x1="1120" y1="293.0" x2="800" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
  <rect x="1120" y="377" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="392" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Try on the sample</text>
  <text x="1130" y="405" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règle appliquée à l'échantillon</text>
  <line x1="1120" y1="394.0" x2="840" y2="357" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docru-arrow)"/>
</svg>

### Activité et type par règle \{#activity-and-type-rules\}

Un même modèle de document reçoit souvent des documents qui n'appartiennent pas tous à la même activité. Cas typique : un spool qui **mélange factures B2B et B2C** ; les ventes des magasins doivent être classées sous l'activité *Magasins* avec le type `B2C`, la facturation centrale sous *Centrale* avec le type `B2B`. Plutôt qu'un modèle par cas, les règles lisent chaque document et fixent son activité et son type.

Une règle porte un nom (repris dans le journal de traitement), une ou plusieurs conditions (*if … and …*, toutes requises) et un résultat :

| Résultat | Description |
|---|---|
| **activity** | Un code d'activité de la liste [`list-activite`](../configuration/custom-lists.md), ou un code saisi (10 caractères au plus). `— unchanged —` laisse l'activité telle quelle. |
| **type** | Le type de document, saisi librement (20 caractères au plus). Vide = inchangé. |

Une règle demande au moins une condition et une activité ou un type : une règle sans résultat n'est pas enregistrée (l'éditeur le signale en rouge).

#### Ordre de lecture

- Les règles se lisent **de haut en bas** ; **↑** / **↓** changent leur ordre. La première règle qui correspond **et donne une activité** fixe l'activité ; la première qui correspond **et donne un type** fixe le type — une règle peut ainsi fixer l'activité et une autre, plus bas, le type.
- **Sans correspondance**, le document conserve l'activité et le type de son étape [Identification](#identification) (balise lue dans le spool, ou valeur par défaut).
- Les règles s'appliquent **au traitement du document**, dans les deux pipelines : spool (XML, PDF, connecteur) et UBL. Les valeurs obtenues sont écrites dans la ligne de suivi du document (`F564230`).
- Un **enregistrement manuel** — depuis la fenêtre de la facture ou celle du document — ne les applique jamais : l'activité et le type enregistrés restent inchangés.
- Les [règles de traitement](#regles-de-traitement) ci-dessous sont évaluées ensuite : elles peuvent donc tester l'activité fixée par une règle.

#### Conditions

Les champs proposés dépendent de la source :

| Source | Champs |
|---|---|
| **XML, PDF, connecteur** | JDE document type (typeJDE), Company (societeJDE), Invoice amount (montant), Customer number (numClient), Document number, **Element of the document…** — n'importe quel élément du spool, par son nom ou par un chemin. |
| **UBL** | Seller legal registration identifier, Seller VAT identifier, Buyer legal registration identifier, Buyer country code, Invoice type code, Credit note type code, Invoice currency code, Buyer reference, **Other element of the UBL…** — n'importe quel élément, sous forme de chemin de noms d'éléments (préfixes ignorés, par ex. `AccountingCustomerParty/Party/PartyName/Name`). |

Les opérateurs sont ceux des règles de traitement : dans la liste / hors de la liste (`A, B`), `=`, `≠`, nul ou vide, non nul, `<`, `>`, vide, non vide, correspond à une regex. Avec un échantillon chargé, le bouton **⊞** placé à côté d'un champ élément permet de choisir l'élément dans l'échantillon.

#### Essai sur l'échantillon

Avec un échantillon chargé, **Try on the sample** applique les règles en cours de saisie — enregistrées ou non — et indique celle qui s'applique : pour un spool, sur le premier élément du *Burst Key* du document ; pour un UBL, sur la facture elle-même. La réponse se lit par exemple `Invoice (first) → activity MAGASINS (rule “Ventes magasins”) · type B2C (rule “Ventes magasins”)`, ou *no rule, the document's own value applies* pour une valeur qu'aucune règle ne fixe. Rien n'est écrit.

:::info[Type du document et type de transaction]
Le type donné par une règle est le **Type** de l'étape *Identification*. Le type de transaction qui pilote la validation et l'envoi (B2B, B2C, B2BINT… — voir [Types de documents](../configuration/system/document-types.md)) est lu dans la balise *Processing Type*, ou fixé par une règle de traitement *Treat as document type* ci-dessous.
:::

### Règles de traitement \{#regles-de-traitement\}

La liste **Processing: treat as another type, or exclude** oriente les documents du flux XML **avant toute génération**. Chaque règle associe une ou plusieurs conditions sur le document à un résultat. Les règles sont évaluées pour chaque document une fois son type de document déterminé, **dans l'ordre — la première qui correspond l'emporte** ; sans règle correspondante, le traitement est normal. Elles s'appliquent à tous les chemins d'entrée XML : planificateur, [dossiers surveillés](./watched-folders.md), *process*, *fetch-single* et *Fetch Input*. La liste n'apparaît pas pour une source UBL : le type de transaction d'un document UBL figure déjà dans le document.

| Résultat | Effet |
|---|---|
| **Treat as document type** | Le document poursuit son traitement sous le [type de document](../configuration/system/document-types.md) choisi, avec les réglages d'envoi / validation / mode / conservation de ce type — par exemple une gratuité à montant nul orientée vers `ARCHIVEONLY`. Le document porte aussi ce type comme type de transaction dans l'UBL (la note de routage `#BAR#` / `#ADN#`) : la colonne **Type doc.** des listes, les statistiques, le type et l'indicateur d'archivage seul transmis à la plateforme, les contrôles du secteur public et l'[e-reporting](../application/ereporting.md) suivent la règle. Une règle qui fait passer des factures B2C ou B2B international sous un autre type les sort de la déclaration d'e-reporting. |
| **Exclude (record only)** | Le document est seulement enregistré : sa source est archivée et son en-tête conservé, avec le statut **Exclue par règle** (`9914`, le message reprenant le nom de la règle) et un événement de cycle de vie. Il apparaît dans la liste des factures et est compté par les contrôles d'intégrité, mais il n'est jamais validé, produit ni envoyé. |

**Conditions** — toutes les conditions d'une règle doivent être remplies (*if … and …*). Champs : type de document JDE, type de document déterminé, type de traitement (valeur brute du spool), montant de la facture, société, code activité, type pièce, numéro client, numéro de document, ou **XPath on the document…**. Opérateurs : dans la liste / hors de la liste (`RM, RX`), `=`, `≠`, nul ou vide, non nul, `<`, `>`, vide, non vide, correspond à une regex. **↑** / **↓** changent l'ordre des règles ; le nom de la règle apparaît dans le journal et dans le message de statut.

**XPath on the document…** accepte un nom d'élément ou un chemin, lu à partir de l'élément racine du document (l'élément du *Burst Key*) :

- un nom seul (`Code_Nature_ID12`) désigne le premier élément de ce nom, où qu'il se trouve dans le document ;
- un chemin (`Invoice_Header/Document_Type`), un prédicat ou un attribut est évalué comme un XPath à partir de la racine du document ; un chemin qui commence par le nom de la racine est lu à partir d'elle aussi ;
- un chemin qui ne trouve rien se rabat sur son **dernier nom d'élément**, recherché dans tout le document.

---

## UBL \{#ubl\}

Cette étape règle la chaîne XSL qui produit l'UBL 2.1 et la manière de le valider. Plusieurs champs (XSL, RTF) ne servent que sur le pipeline XML.

### Transformation XSL

| Champ | Valeurs | Description |
|---|---|---|
| **Transform** | `Y` / `N` | Active ou non la chaîne de transformation XSL avant la génération UBL. |
| **XSL Pre-processing** | chemin | XSL optionnelle appliquée avant l'indexation, par exemple pour normaliser le XML source brut (JD Edwards, SAP, NetSuite, ERP personnalisé…). Elle doit **supporter un second passage** : un retraitement rejoue la source archivée, qui l'a déjà traversée — chaque élément ajouté par la XSL doit être protégé par `not(...)` pour qu'un second passage n'ajoute rien. |
| **XSL Indexation** | chemin | XSL qui produit l'indexation / les métadonnées du document : un fichier XML associé au PDF généré, utilisé pour l'indexation. |
| **RTF Template** | chemin | Modèle RTF utilisé par BI Publisher pour produire le PDF lisible. Un document sans modèle RTF, traité sans mode défini nulle part, produit uniquement son UBL. |

### Réglages UBL \{#ubl-settings\}

| Champ | Valeurs | Description |
|---|---|---|
| **UBL XSLT** | chemin | Transformation XSL du XML source vers l'**UBL 2.1**. Le placeholder `%APP_HOME%` est remplacé par la racine d'installation de NomaUBL. Le nom du fichier est l'état affiché sur la carte *UBL*. |
| **Invert sign** | `N – No` (défaut) / `Credit notes only` / `All documents` | Inverse le signe des montants lus dans la source : montants nets de ligne, totaux du document, montants payés d'avance et d'arrondi, TVA totale et chaque ligne du récapitulatif TVA. Le prix unitaire est toujours émis en positif, les remises et charges sont lues en valeur absolue, et la quantité prend le signe du montant de sa ligne. *Credit notes only* s'applique aux documents résolus en `381`, `396`, `261`, `262`, `502` ou `503`. Un spool qui imprime un avoir avec des montants négatifs donne ainsi l'avoir (CreditNote) positif attendu par la norme, sans modifier la XSL du document. |
| **Custom Schematron** | chemin(s) | Une ou plusieurs feuilles Schematron **précompilées** (`.xsl`, séparées par des virgules, `%APP_HOME%` / `%ENV%` acceptés) qui portent les règles propres au client — une classification obligatoire, un format de référence acheteur… Elles s'exécutent **après** les packs standard, sur ce modèle uniquement : les règles client ne touchent jamais aux packs livrés que la mise à niveau rafraîchit. Une feuille est chargée une fois par horodatage de fichier : un fichier modifié est pris en compte à la validation suivante, sans redémarrage. Les anomalies arrivent dans les erreurs de validation sous une source courte tirée du nom de fichier (`BR-ACME-rules.xsl` → `ACME`) ; un fichier absent ou invalide est signalé en erreur sur la facture. Le traitement par lot et unitaire, le bouton *Valider* et l'API de validation en tiennent tous compte. |
| **Rule set** | *(vide = déduit)* / `EN 16931 basique` / `EN 16931` / `France étendu (CTC)` | La norme selon laquelle le document est produit : les contrôles de validation et les champs obligatoires affichés dans l'onglet de mapping de l'éditeur XSL viennent de ce jeu. Vide conserve le choix déduit de l'identifiant de personnalisation des valeurs UBL par défaut. Voir [Jeux de règles](../ubl-tools/rule-sets.md). |
| **Post-transform** | chemin | Feuille appliquée à l'UBL validé pour écrire une autre syntaxe à côté de lui — par exemple la feuille livrée `ubl-to-cii.xsl` (UBL vers CII D16B). Vide = aucune. Voir [Post-transformation](../ubl-tools/post-transform.md). |
| **Post-transform output** | suffixe, défaut `-cii.xml` | Remplace le `.xml` du nom du fichier UBL ; le téléchargement depuis les fenêtres de la facture et du document reprend ce nom. |
| **Post-transform name** | texte | Nom court de la syntaxe produite sur les boutons de téléchargement (`CII` → *Télécharger CII*). Le connecteur de la plateforme peut envoyer le fichier converti avec `{{derivedContent}}` / `{{derivedFilePath}}`. |

---

## Sortie \{#output\}

Cette étape règle ce qui accompagne l'UBL — PDF principal, copie lisible, pièces jointes complémentaires — et la possibilité de retraiter une facture.

### Pièces jointes et retraitement

| Champ | Valeurs | Description |
|---|---|---|
| **Attachment** | `— Aucun` / `create` / `attach` / `generate` | Comment le PDF principal est associé à l'UBL. `create` = rendu via RTF / BI Publisher puis incorporé. `attach` = réutiliser un PDF déjà présent dans le répertoire d'entrée. `generate` = rendre le PDF avec le [concepteur de modèle PDF](./pdf-templates.md) et l'attacher en **PJA** (`cac:AdditionalDocumentReference`) — à utiliser quand le PDF conçu n'est pas une copie lisible conforme. Vide = aucun PDF. Indépendant de **LISIBLE** ci-dessous. Pour une source PDF, `source` joint le PDF d'entrée lui-même en **PJA** — avec *Invoice split*, seulement les pages de la facture. |
| **LISIBLE** | `Y` / `N` / `source` | Quand `Y`, rendre un PDF lisible depuis l'UBL via le modèle PDF résolu et l'incorporer comme copie LISIBLE (`cbc:ID="LISIBLE"`). Indépendant d'*Attachment* — les deux peuvent être actifs. Pour une source PDF, `source` incorpore le PDF d'entrée comme copie LISIBLE au lieu d'un PDF généré — avec *Invoice split*, seulement les pages de la facture. Le PDF d'entrée n'est pas conservé après traitement : un retraitement complet ne peut donc pas l'incorporer de nouveau. |
| **Allow reprocess** | `Y` / `N` (défaut `N`) | Quand `Y`, les factures produites depuis ce modèle peuvent être **retraitées** — reconstruites à partir de la source archivée lors du premier traitement (XML source, ou XML issu d'une source PDF) — quand elles ont été **déposées sans être transmises** (statut 200, motif `NON_TRANSMISE`). Le retraitement régénère la facture électronique, le PDF et le XML, conserve le statut courant de la facture, inscrit une entrée *Retraitement* dans son historique et ne renvoie jamais rien à la plateforme ; chaque facture n'est retraitée qu'une fois. Sources XML et PDF. Se déclenche depuis la [liste des factures](../application/invoices.md#reprocess), le [Tableau de bord IT](../application/tech-dashboard.md#to-reprocess) ou la ligne de commande ; l'ensemble des conditions figure dans les [règles de retraitement](../application/invoices.md#resend-reprocess-rules). |
| **Allow full reprocess** | `Y` / `N` (défaut `N`) | Quand `Y`, une facture en *Échec de validation* (`9905`) peut être **retraitée en totalité** depuis sa source archivée, une fois les données corrigées dans le système source : l'enrichissement est interrogé de nouveau, l'UBL régénéré, validé et envoyé à la PA selon les réglages du modèle et du type de document. L'historique des statuts est conservé et un marqueur de retraitement ouvre un nouveau cycle. Sources XML et PDF. Se déclenche depuis la fenêtre facture (bouton *Retraiter* sur une `9905`), la [liste des factures](../application/invoices.md#reprocess), le [Tableau de bord IT](../application/tech-dashboard.md#to-reprocess-full), l'API (`kind: "full"`) ou `-reprocess --full`. |

### Modèle PDF

Le groupe **PDF Template** désigne la **mise en page PDF** appliquée au rendu de ce document. Les mises en page sont des ressources partageables, éditées sur la page dédiée [Modèles PDF](./pdf-templates.md) ; ce champ en référence une simplement **par son nom**, via la propriété `pdfTemplate` du modèle.

| Champ | Description |
|---|---|
| **Template** | Liste déroulante qui regroupe toutes les mises en page enregistrées (les ressources `pdf-template` issues de *Modèles PDF*) et les deux mises en page livrées `built-in` (classique) et `built-in-modern` (style moderne). Laisser vide pour utiliser le défaut global (`global.defaultPdfTemplate`) ; champ vide et défaut global vide ramènent à `built-in`. |

La chaîne de résolution au moment du rendu se lit donc : ce champ → `global.defaultPdfTemplate` → `built-in`. Chaque facture enregistrée porte le nom du document dans `F564231.UHTMPL`, ce qui permet au générateur PDF de la produire de nouveau à la demande avec la mise en page active pour ce document.

:::tip[Édition de la mise en page]
L'éditeur visuel — liste de sections, panneau par section, aperçu en direct, sections bloc — se trouve sur la page [Gestion → Modèles PDF](./pdf-templates.md). Y créer ou affiner une mise en page une seule fois, puis revenir ici pour y rattacher le document. Une même mise en page peut servir plusieurs documents.
:::

### Pièces jointes complémentaires \{#additional-attachments\}

En plus du PDF lisible principal, un type de document peut joindre **d'autres fichiers à l'UBL** — un bon de livraison, un bon de commande, un RIB, une annexe. Une ligne par fichier :

| Champ | Description |
|---|---|
| **Code** | Code métier de la pièce jointe, choisi dans une liste déroulante (bon de livraison, bon de commande, RIB, annexe…). Il identifie le fichier dans l'UBL, pour que le destinataire sache à quoi correspond chaque pièce jointe. |
| **Chemin** | Où lire le fichier. Accepte les variables de chemin `%APP_HOME%`, `%ENV%`, `%DOCNAME%`, `%KCO%`, `%DOC%`, `%DCT%` ainsi que tout jeton `{{…}}` du catalogue de facture : le chemin est alors calculé pour chaque facture — par ex. `%APP_HOME%/cgv/CGV_{{kco}}.pdf`. Une accolade simple `{…}` lit une valeur du spool source, par ex. `%APP_HOME%/pj/{Attachment_ID}.pdf`. |

Un placeholder à accolade simple lit le spool comme le champ *XPath on the document…* d'une [règle de traitement](#regles-de-traitement) : un nom d'élément, ou un chemin comme `{Invoice_Header/Attachment_ID}` lu à partir de la racine du document, avec repli sur son dernier nom d'élément si le chemin ne trouve rien.

Le bouton **`{ }`** placé à côté du champ chemin ouvre une liste filtrable et insère le jeton choisi à l'endroit du curseur — aussi bien les jetons du catalogue de facture (`{{kco}}`, `{{fedoc}}`, …) que les variables de chemin `%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%` —, ce qui évite d'avoir à retenir leur écriture exacte. **Add attachment** crée une nouvelle ligne.

:::info[Les modèles source UBL embarquent aussi les pièces jointes]
Un modèle en *Source = UBL* embarque les mêmes PDF que le flux XML — après validation et avant l'insertion en base, pour que l'UBL stocké corresponde à ce qui est envoyé à la PA :

- **Attachment `attach`** embarque un PDF voisin depuis le répertoire d'entrée sous `cbc:ID="PJA"`.
- **Le PDF lisible (`lisible`)** est rendu directement depuis l'UBL lu par le moteur PDF et embarqué sous `cbc:ID="LISIBLE"` (DocumentTypeCode 916).
- **Les pièces jointes complémentaires** sont traitées exactement comme ci-dessus ; les jetons de chemin sont résolus facture par facture.

`attachment=create` n'est pas pris en charge en source UBL — il exige un rendu BI Publisher depuis un XML source, qu'un fichier UBL n'a pas. Utiliser `attach` ou `lisible` à la place.
:::

### Clé d'absence de données et langue

| Champ | Description |
|---|---|
| **No-Data Key** | Nom d'un élément XML qui **doit exister** dans le spool. S'il est absent, NomaUBL considère le document comme vide et l'ignore. Utile pour écarter les sections de spool qui ne correspondent pas à de vraies factures. |
| **Set Locale** | Langue et pays utilisés pour rendre le PDF (par ex. `en_US`, `fr_FR`). N'affecte que le format des dates et des nombres dans le PDF. |

---

## Avancé \{#advanced\}

| Champ | Description |
|---|---|
| **Number of CPUs** | Nombre de threads parallèles utilisés par la chaîne de traitement pour ce type de document. L'augmenter accélère le traitement des spools volumineux ; le diminuer soulage un hôte à court de mémoire. Valeur par défaut : `4`. |

---

## Conseils & bonnes pratiques

- **Suivre les cartes de gauche à droite.** Elles reprennent l'ordre d'un traitement ; un état en rouge signale la valeur qui manque encore.
- **Toujours définir des valeurs par défaut** sur les champs « Identification du document » — elles couvrent les variations de spool où une balise manque ponctuellement.
- **Un seul modèle pour un spool mixte.** Quand un spool mélange documents B2B et B2C, ou plusieurs activités, fixer l'activité et le type par [règles](#activity-and-type-rules) plutôt que de dupliquer le modèle, et les vérifier avec *Try on the sample*.
- **Pour les sources UBL, utiliser *Suggest*** pour amorcer la regex — l'assistant gère les cas courants (chiffres seuls, lettres + chiffres, chiffres + lettres + chiffres). Ajustement manuel uniquement quand le format est inhabituel.
- **Laisser Processing Type vide** sauf besoin de remplacer la valeur par défaut du type de document ; la configuration reste ainsi en un seul endroit.
- Pour un nouveau type de document, **commencer par charger un échantillon XML**, régler *Source* et *Identification* à l'aide du sélecteur, puis tester sur quelques documents avant d'affiner la chaîne XSL de l'étape *UBL*.
- Le **Burst Key est le champ XML le plus critique** — une valeur erronée produit soit un document géant unique, soit aucun document.
- **Éditer la mise en page PDF sur sa page dédiée.** [Modèles PDF](./pdf-templates.md) accueille l'éditeur visuel et l'aperçu en direct ; l'étape *Output* permet uniquement de la sélectionner. Partager une même mise en page entre plusieurs documents évite d'éditer N copies dès qu'une mention légale ou un jeu de colonnes évolue.
