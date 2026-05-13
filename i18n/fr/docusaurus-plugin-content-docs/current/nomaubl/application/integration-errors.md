---
title: Erreurs d'intégration
description: "Outil d'analyse des échecs construit sur la table de validation — cartes par règle qui classent les règles les plus en échec, et tableau plat par événement pour l'analyse ligne à ligne. Chaque code de règle est enrichi de sa description lisible tirée des Schematron embarqués. Filtre par catégorie (UBL / Intégration), sévérité, clé documentaire. La case Sans rattachement uniquement rétablit la vue historique des erreurs orphelines en un clic."
keywords: [NomaUBL, erreurs d'intégration, validation, F564236, par règle, par événement, ValidationRuleCatalog, Schematron, XSD, UVSRCL, FATAL, ERROR, WARNING, INFO, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Erreurs d'intégration

L'écran **Erreurs d'intégration** est l'**outil d'analyse des échecs** construit sur la table de validation (`F564236`). Il affiche chaque entrée enregistrée par le pipeline de validation — des échecs de règles XSD / Schematron jusqu'aux erreurs d'intégration de cycle de vie (PDF, PA, base, …) — au travers de deux vues complémentaires :

- **par règle** — cartes classées et regroupées par `(règle, source)`, qui indiquent chacune le nombre de factures touchées par la règle et les pastilles de sévérité associées. Le moyen le plus rapide pour repérer *la règle qui pose le plus de problèmes en ce moment*.
- **par événement** — tableau plat de chaque événement d'erreur, avec sa sévérité, sa source, sa règle, son message, son triplet documentaire et le statut courant de la facture. L'endroit pour analyser une ligne précise.

La page s'applique quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Les erreurs proviennent du pipeline de validation, qui travaille sur l'UBL généré ; le format source est donc transparent à ce stade.

:::info[Refonte en 2026.05.4]
La page était limitée jusqu'ici à la vue des erreurs orphelines — un tableau plat des lignes `F564236` sans en-tête de facture rattaché. Elle devient un vrai outil d'analyse des échecs : bascule par règle / par événement, filtre catégorie (UBL vs Intégration / cycle de vie), descriptions lisibles tirées des Schematron embarqués, et case `Sans rattachement uniquement` qui rétablit l'ancien comportement en un clic. La vue par défaut affiche désormais *toutes les erreurs* ; l'orphelin n'est plus le filtre principal.
:::

---

## Ouverture

- Barre latérale → **Application → Erreurs d'intégration**.
- Depuis le [Tableau de bord](./dashboard.md) : le lien *Tout voir* du widget **Règles en échec** ouvre la page sur l'onglet **par règle** ; un clic sur une règle précise ouvre l'onglet **par événement** avec cette règle pré-appliquée comme puce de filtre.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ie2-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ie2-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ie2-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="570" rx="14" fill="url(#ie2-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Erreurs d'intégration</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="180" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <rect x="240" y="84" width="90" height="28" rx="6" fill="url(#ie2-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="285" y="102" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Par règle</text>
  <text x="375" y="102" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Par événement</text>

  <rect x="436" y="84" width="146" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="444" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Toutes sources ▾</text>

  <rect x="588" y="84" width="120" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">☐ Sans rattachement</text>

  <rect x="720" y="84" width="60" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="750" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻</text>

  <rect x="240" y="124" width="58" height="22" rx="11" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="269" y="139" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Toutes</text>
  <rect x="304" y="124" width="60" height="22" rx="11" fill="#3d0a0a" stroke="#7f1d1d" strokeWidth="1.5"/>
  <text x="334" y="139" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">FATAL</text>
  <rect x="370" y="124" width="64" height="22" rx="11" fill="rgba(248,113,113,0.10)" stroke="#f87171" strokeWidth="1"/>
  <text x="402" y="139" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">ERROR</text>
  <rect x="440" y="124" width="80" height="22" rx="11" fill="rgba(251,146,60,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="480" y="139" fill="#fb923c" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">WARNING</text>
  <rect x="526" y="124" width="56" height="22" rx="11" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="554" y="139" fill="#60a5fa" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">INFO</text>

  <rect x="240" y="160" width="266" height="138" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="180" fill="#cbd5e1" fontSize="13" fontFamily="ui-monospace, monospace" fontWeight="700">BR-CL-23</text>
  <text x="252" y="194" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">EN16931</text>
  <text x="490" y="180" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">52</text>
  <text x="252" y="218" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Le code devise doit suivre la liste</text>
  <text x="252" y="232" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">à trois caractères ISO 4217.</text>
  <rect x="252" y="254" width="62" height="22" rx="11" fill="rgba(248,113,113,0.10)" stroke="#f87171" strokeWidth="1"/>
  <text x="283" y="269" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ERROR · 50</text>
  <rect x="320" y="254" width="80" height="22" rx="11" fill="rgba(251,146,60,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="360" y="269" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">WARNING · 2</text>

  <rect x="522" y="160" width="266" height="138" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="534" y="180" fill="#cbd5e1" fontSize="13" fontFamily="ui-monospace, monospace" fontWeight="700">BR-FR-12</text>
  <text x="534" y="194" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">CIUSFR</text>
  <text x="772" y="180" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">38</text>
  <text x="534" y="218" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Le SIRET BT-46 doit figurer sur</text>
  <text x="534" y="232" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">une facture B2B française.</text>
  <rect x="534" y="254" width="62" height="22" rx="11" fill="rgba(248,113,113,0.10)" stroke="#f87171" strokeWidth="1"/>
  <text x="565" y="269" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ERROR · 38</text>

  <rect x="240" y="316" width="266" height="138" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="336" fill="#cbd5e1" fontSize="13" fontFamily="ui-monospace, monospace" fontWeight="700">PA_SEND</text>
  <text x="252" y="350" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">INTEG</text>
  <text x="490" y="336" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">14</text>
  <text x="252" y="374" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Soumission PA rejetée au niveau</text>
  <text x="252" y="388" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">HTTP (timeout / 4xx / 5xx).</text>
  <rect x="252" y="410" width="62" height="22" rx="11" fill="rgba(248,113,113,0.10)" stroke="#f87171" strokeWidth="1"/>
  <text x="283" y="425" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ERROR · 14</text>

  <rect x="522" y="316" width="266" height="138" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="534" y="336" fill="#cbd5e1" fontSize="13" fontFamily="ui-monospace, monospace" fontWeight="700">UBL_CREATION</text>
  <text x="534" y="350" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">INTEG</text>
  <text x="772" y="336" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">9</text>
  <text x="534" y="374" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">La transformation XSL n'a pas</text>
  <text x="534" y="388" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">produit un UBL exploitable.</text>
  <rect x="534" y="410" width="62" height="22" rx="11" fill="#3d0a0a" stroke="#7f1d1d" strokeWidth="1.5"/>
  <text x="565" y="425" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">FATAL · 9</text>

  <text x="240" y="490" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Vue par événement (aperçu)</text>
  <line x1="240" y1="498" x2="788" y2="498" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="514" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">SEV  · DOC   · DCT · KCO   · SEQN · SOURCE   · RULE       · MESSAGE</text>
  <line x1="240" y1="520" x2="788" y2="520" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="536" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">ERROR · 12345 · RI  · 00070 · 7    · CIUSFR   · BR-FR-12   · SIRET manquant</text>
  <text x="240" y="550" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">ERROR · 12345 · RI  · 00070 · 12   · EN16931  · BR-CL-23   · Code devise invalide</text>
  <text x="240" y="564" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">FATAL · 12399 · RI  · 00070 · 1    · INTEG    · UBL_CREATION · XSL en exception</text>
  <text x="240" y="578" fill="#fb923c" fontSize="9" fontFamily="ui-monospace, monospace">WARNING · 12345 · RI · 00070 · 18   · CIUSFR   · BR-FR-09 · BT-49 absent sur avo…</text>

  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bascule de vue</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Par règle / Par événement</text>
  <line x1="200" y1="100" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="820" y="84" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre catégorie</text>
  <text x="830" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">UBL contre Intégration</text>
  <line x1="820" y1="100" x2="708" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="20" y="138" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pastilles de sévérité</text>
  <text x="30" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">FATAL / ERROR / WARN / INFO</text>
  <line x1="200" y1="154" x2="240" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="20" y="218" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="233" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Carte de règle</text>
  <text x="30" y="246" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">code · source · décompte · sévérité</text>
  <line x1="200" y1="234" x2="240" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="820" y="200" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Description de règle</text>
  <text x="830" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">extraite des fichiers .sch</text>
  <line x1="820" y1="216" x2="788" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="820" y="320" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Codes cycle de vie</text>
  <text x="830" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PA_SEND, UBL_CREATION, …</text>
  <line x1="820" y1="336" x2="788" y2="336" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="20" y="528" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="543" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic → modale facture</text>
  <text x="30" y="556" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouverte sur l'onglet Historique</text>
  <line x1="200" y1="544" x2="240" y2="544" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>
</svg>

Les cartes de règles sont dimensionnées en CSS via `auto-fill` plutôt que `auto-fit` : une dernière rangée incomplète n'étire donc plus une carte unique sur toute la largeur.

---

## Barre d'outils

La même barre d'outils pilote les deux vues.

| Contrôle | Comportement |
|---|---|
| **Bascule de vue** | *Par règle* (vue par défaut après un lien profond depuis le tableau de bord) ou *Par événement*. Les autres filtres sont conservés au changement de vue — la recherche, la sévérité et la catégorie restent appliquées. |
| **Recherche** | Correspondance par sous-chaîne sur `DOC`, `DCT`, `KCO` et le texte du message. Exécutée côté serveur, avec un délai (debounce). |
| **Catégorie** | *Toutes sources* (par défaut), *Validation UBL* (règles Schematron / XSD — `UVSRCL IN ('EN16931', 'CIUSFR', 'FREXTIC', 'CPRO', 'XSD', 'UBL')`), *Intégration / cycle de vie* (le reste — erreurs runtime émises par le dispatcher : PDF, PA, base, …). |
| **Pastilles de sévérité** | *Toutes* / *FATAL* / *ERROR* / *WARNING* / *INFO*. Une seule sévérité à la fois ; cliquer à nouveau sur la pastille active retire le filtre. |
| **`Sans rattachement uniquement`** *(par événement uniquement)* | Rétablit le comportement « orphelin » de la version précédente — ne garde que les lignes sans en-tête de facture rattaché. Désactivé par défaut, accessible en un clic au besoin. |
| **Rafraîchir** | Relance la requête en cours. |

### Filtres avancés *(2026.05.10)*

Un panneau **Filtres avancés** pliable sous la barre d'outils propose une ligne par colonne filtrable de la spec [Vues de liste](../configuration/list-views.md) active (`view.integration-errors`) — avec des sélecteurs d'opérateurs par colonne (`contains`, `equals`, `≠`, `<`, `≤`, `>`, `≥`, `between`, `empty`, `not empty`). Les modifications restent en brouillon tant que **Exécuter** ne les valide pas.

Le drill-through *Erreurs récentes* du Tech Dashboard remonte aussi ici : quand le tableau de bord transmet `{ doc, dct, kco }`, une pastille indique le filtre actif et propose un `×` pour le retirer. Utile quand le panneau est replié et que le filtre serait sinon invisible.

---

## Vue par règle

Chaque carte regroupe tous les événements d'erreur qui partagent le même couple `(règle, source)` et affiche :

| Élément | Source | Signification |
|---|---|---|
| **Code de règle** *(en haut à gauche)* | `UVY56RULE` | Identifiant de la règle — par exemple `BR-CL-23`, `BR-FR-12`, `UBL_CREATION`. |
| **Source** *(sous le code)* | `UVSRCL` | Le moteur de validation — `EN16931`, `CIUSFR`, `FREXTIC`, `CPRO`, `XSD`, `UBL`, ou l'un des compartiments d'intégration (`INTEG`, `PROCESS`, `XSL`, `PDF`, `PA`, `DB`, …). |
| **Description** *(ligne secondaire)* | `ValidationRuleCatalog` | Description lisible, dans la langue de l'interface quand disponible. |
| **Décompte** *(en haut à droite)* | `COUNT(DISTINCT doc, dct, kco)` agrégé | Nombre de factures touchées par la règle pour les filtres actifs. |
| **Pastilles de sévérité** *(en bas)* | `(level, count)` agrégé | Répartition par sévérité — `FATAL · n`, `ERROR · n`, `WARNING · n`, `INFO · n`. |

Les cartes sont triées par décompte décroissant ; un clic bascule sur la vue **par événement** avec la règle pré-appliquée comme puce de filtre.

### Provenance des descriptions

Depuis 2026.05.4, la page affiche pour chaque code de règle sa **description lisible** : un code comme `BR-CL-23` n'a plus besoin d'être croisé avec un fichier Schematron externe.

Un nouveau `ValidationRuleCatalog` analyse les `.sch` embarqués au premier appel et extrait un dictionnaire `{id de règle → description}` en repérant les lignes `[<id>]<séparateur><description>` dans chaque bloc `<assert>`. Le séparateur est souple (`-` ou `:`, espaces autour optionnels) et couvre les trois formats des quatre Schematron embarqués :

| Schematron | Format | Exemple |
|---|---|---|
| EN 16931 | `[<id>]-<description>` *(sans espaces)* | `[BR-CL-23]-Currency code must follow ISO 4217.` |
| FREXT-IC | `[<id>] - <description>` *(avec espaces)* | `[BR-FREXT-IC-08] - SIRET must be present on B2B.` |
| CIUS-FR | `[<id>] : <description>` *(deux-points, convention FNFE-MPE)* | `[BR-FR-23/BT-49] : Document is missing the order reference.` |

Le catalogue ajoute aussi **douze codes de cycle de vie / intégration** avec une description française : `UBL_CREATION`, `DB_INSERT`, `DB_UPDATE`, `PA_SEND`, `PA_TIMEOUT`, `PDF_RENDER`, `XSL_TRANSFORM`, `EMAIL_SEND`, `NOTIFY_DISPATCH`, `STATUS_TRANSITION`, `EXTRACT_BIP`, `EXTRACT_FTP` — ce sont les codes émis par `ErrorCatalog` quand une étape runtime échoue.

Le catalogue fusionné est exposé sur `GET /api/integration-errors/catalog` ; le frontend le met en cache une fois par chargement de page via le hook `useRuleCatalog`.

:::warning[Lacune connue]
Les 34 `assert` du Schematron `BR-FR-CPRO` n'ont pas d'attribut `id`. Le validateur enregistre donc un code de règle vide pour ces événements ; ils apparaissent dans la vue par événement avec une colonne *Règle* vide et n'apparaissent pas dans les cartes par règle. Le Schematron lui-même fonctionne ; seules les étiquettes de règle manquent.
:::

---

## Vue par événement

Tableau plat, une ligne par événement de validation. Le tri par défaut est la clé documentaire ascendante (les lignes d'une même facture restent ainsi groupées) et la pagination affiche 50 lignes par page par défaut.

Depuis 2026.05.10, la table passe par **DataTableV2** en mode piloté par spec : la forme des colonnes vient de la spec `view.integration-errors` sur `db-nomaubl` et le défaut embarqué livre toutes les colonnes listées ci-dessous. Ajouter des colonnes depuis le catalogue ou retirer une colonne de la liste blanche de filtres se fait depuis l'éditeur [Vues de liste](../configuration/list-views.md).

| Colonne | Source | Description |
|---|---|---|
| **Sévérité** | `UVY56LEVEL` | Badge coloré — *FATAL* / *ERROR* / *WARNING* / *INFO*. |
| **Date** *(2026.05.9)* | `UVUPMJ` + `UVUPMT` | Date et heure d'enregistrement de l'événement. Même contexte temporel que la carte « erreurs récentes » du Tableau de bord IT — le triage n'a plus besoin d'ouvrir une ligne au préalable. |
| **Doc** | `UVDOC` | Numéro de document issu des données source. |
| **Dct** | `UVDCT` | Type de document. |
| **Kco** | `UVKCO` | Code société. |
| **Seq** | `UVSEQN` | Numéro de séquence — ordre dans lequel les règles de validation se sont déclenchées au cours du traitement défaillant. |
| **Source** | `UVSRCL` | Moteur de validation — `EN16931`, `CIUSFR`, `FREXTIC`, `CPRO`, `XSD`, `UBL`, ou un compartiment d'intégration. |
| **Règle** | `UVY56RULE` | Identifiant de règle. La cellule affiche le code accompagné de sa description en dessous (et en infobulle au survol). |
| **Facture maintenant** | jointure `F564231` | Statut *courant* de la facture, récupéré en temps réel pour vérifier si l'échec a déjà été retraité. Vide quand il n'y a pas d'en-tête (erreur orpheline). |
| **Client** | `F564231.UHALPH` | Nom du client quand la facture existe. Utile pour trier par contrepartie. |

:::info[Colonne Message retirée — 2026.05.9]
La colonne Message est retirée en 2026.05.9. Les messages Schematron / XPath étaient trop longs pour une cellule de grille (la colonne consommait ~720 px et continuait de tronquer le contexte), le message complet vit donc désormais dans une **modale de détail** ouverte par un clic sur la ligne. La modale sépare aussi le contexte de debug CTC-FR (`Num Fact : …, Code : S, rate : 20, …`) de l'explication française — l'explication devient la ligne principale, les champs de debug s'affichent dans une petite grille monospace en dessous.
:::

### Clic sur une ligne

Le clic sur une ligne est **toujours cliquable** depuis 2026.05.9 — les lignes appariées et les lignes orphelines ouvrent toutes les deux une modale :

- **Lignes appariées** (quand la facture existe dans `F564231`) ouvrent la modale de détail complète [E-Invoicing](./invoices.md) sur l'onglet **Historique** — la même modale que celle ouverte par un clic sur une ligne de la boîte [Notifications](./notifications.md). Le cycle de vie, les erreurs de validation et la charge utile PA restent à un seul onglet.
- **Lignes orphelines** ouvrent la nouvelle **`ErrorDetailModal`** — une vue ciblée dimensionnée pour un seul événement de validation sans facture autour. Elle affiche : le badge de niveau, l'identifiant de règle + sa description (résolue via `useRuleCatalog`), la source, la date, le triplet `doc / dct / kco` (avec la mention *aucune facture correspondante dans F564231*), le client quand il est connu, et le message complet rendu via le même helper `splitValidationMessage` que la modale des lignes appariées.

### `Sans rattachement uniquement`

Une petite case dans la barre d'outils — `Sans rattachement uniquement` — rétablit le comportement de la version précédente : seules les lignes sans en-tête de facture rattaché. Ce sont les erreurs *orphelines*, typiquement des échecs de transformation qui ont empêché l'enregistrement de la facture (le XSL a produit un document que le validateur UBL ne peut pas analyser, ou un `FATAL` a interrompu le pipeline avant l'insertion en base).

La vue par défaut affiche *toutes* les erreurs, rattachées ou non. Cocher la case se fait en un clic ; rien d'autre n'est nécessaire.

---

## Démarche d'instruction

La page est en lecture seule — la correction se fait en amont (donnée source, template, XSL, connecteur) et un nouveau traitement vide la ligne. Démarche typique :

1. **Ouvrir la vue par règle en premier.** Examiner les trois cartes de tête — une règle qui frappe des centaines de factures est le point de départ évident.
2. **Cadrer la catégorie.** *Validation UBL* n'affiche que les événements Schematron / XSD ; *Intégration / cycle de vie* n'affiche que les erreurs runtime émises par le dispatcher. Mélanger les deux n'est utile que pour rechercher un document précis.
3. **Cliquer sur la règle** pour basculer sur *Par événement* avec la puce de filtre pré-appliquée. La liste affiche alors chaque facture concernée par la règle.
4. **Cliquer sur une ligne** pour ouvrir l'onglet *Historique* de la facture. Les erreurs de validation, le cycle de vie et la charge utile PA y sont rassemblés.
5. **Lire le message et la description de la règle.** La description donne le *quoi* ; le message donne le *où* (champ concerné, ligne concernée). Pour les règles Schematron, recouper avec la page [Codes motifs](../references/reason-codes.mdx) au besoin.
6. **Ouvrir le XML source dans *Outils UBL → XML Viewer*** pour le triplet `(doc, dct, kco)` — le fichier se trouve dans `dirInput/<template>/`. La lecture de la source confirme si l'échec vient des données (champ manquant) ou du template (bug du XSL).
7. **Relancer le pipeline une fois la source corrigée.** Utiliser [Traitement de document](../processing/document.md) sur le fichier corrigé. Une fois la facture enregistrée avec succès, *Facture maintenant* passe d'une cellule vide au nouveau statut, et la ligne n'est plus orpheline.

---

## Conseils & bonnes pratiques

- **Commencer par la vue par règle.** Une seule règle qui frappe des centaines de factures indique un seul changement amont (champ renommé, code TVA périmé, liste de contreparties régénérée). Corriger la règle vide alors la majorité des lignes en une seule relance.
- **Utiliser le filtre catégorie pour trier.** Les échecs de *validation UBL* viennent en général de bugs template / XSL ; les erreurs *Intégration / cycle de vie* viennent plutôt de l'environnement / connecteur (PA indisponible, timeout SMTP, verrou base). Identifier la bonne catégorie divise par deux le temps d'analyse.
- **Surveiller FATAL en priorité.** Un FATAL non nul signifie que le pipeline s'est interrompu — la facture n'a jamais été enregistrée et seule la ligne orpheline existe. Les lignes ERROR signifient que la facture est passée partiellement et que la page *E-Invoicing* standard en garde aussi la trace.
- **`Sans rattachement uniquement` est la vue historique.** La version précédente n'affichait que les orphelins. Cocher la case rétablit ce comportement pour la compatibilité — la vue par règle, le filtre catégorie et les descriptions de règle restent actifs.
- **Les erreurs disparaissent automatiquement après un ré-import réussi.** Une fois l'en-tête de facture créé ou mis à jour, la colonne *Facture maintenant* de la ligne reflète le nouveau statut. Les lignes orphelines (sans en-tête du tout) n'apparaissent plus comme telles dès qu'un traitement aboutit. La ligne sous-jacente reste dans `F564236` pour l'audit, mais sort de l'ensemble *non rattaché*.
- **Les liens profonds depuis le tableau de bord évitent une étape.** Le widget *Règles en échec* du [Tableau de bord](./dashboard.md) ouvre cette page pré-filtrée — un seul clic entre la constatation « cette règle pose problème » et l'examen détaillé des événements.
