---
title: Validation
description: "Valider un document UBL face au schéma XSD et aux règles Schematron — UBL direct ou XML amont transformé en UBL via le pipeline XSL d'un template."
keywords: [NomaUBL, UBL, validation, XSD, Schematron, EN 16931, BR-FR, règles métier, XSL, transformation, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Validation

L'écran **Validation** exécute les contrôles **schéma XSD** et **règles métier Schematron** sur un document UBL. Deux types de source sont pris en charge :

- **XML (transform to UBL)** — le XML amont est d'abord transformé en UBL 2.1 via le pipeline XSL du template sélectionné, puis le résultat est validé.
- **UBL (validate directly)** — le document est déjà au format UBL 2.1 ; la validation s'effectue directement sur le fichier.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. La validation n'écrit rien en base, ne dépose rien sur la Plateforme Agréée et ne déclenche aucun autre effet de bord — c'est un contrôle en lecture seule.

:::info[Refonte en 2026.05.9]
Trois évolutions livrées en 2026.05.9 côté validation :

- **Schematron précompilé** — le runtime ne compile plus les fichiers `.sch`. `UBLValidator` charge directement les `.xsl` précompilés depuis le classpath JAR et échoue immédiatement au démarrage si un fichier attendu manque. Les trois packs AFNOR sont livrés tels que publiés ; les deux règles locales (`BR-FR-CPRO-Schematron-UBL` + `BR-NOMAUBL-rules`) sont précompilées au build par `build.sh` via le CLI Saxon + `xmlresolver`. Le démarrage à froid gagne un battement perceptible — trois compilations XSLT × cinq packs ne se rejouent plus à chaque JVM.
- **Flux 2 systématique** — AFNOR XP Z12-012 V1.3.1 découpe la validation en 4 étapes : l'étape 2 choisit EN 16931 *ou* Extended-CTC-FR (selon `CustomizationID`), l'étape 3 exécute **BR-FR-Flux 2 inconditionnellement** par-dessus. Le code précédent considérait Extended-CTC-FR comme un sur-ensemble et sautait Flux 2 — manquant les règles `BR-FR-*` / `EXT-FR-FE-*` spécifiques à la réforme que la PA continue d'imposer côté serveur. Le profil Extended exécute désormais les deux étapes.
- **Nouveau pack `BR-NOMAUBL-rules.sch`** — capture les règles côté AIFE absentes des packs Schematron publics. Première règle (`BR-NOMAUBL-01`, fatale) : si BT-3 ∈ `{261, 381, 396, 502, 503}`, au moins une `cac:BillingReference/cac:InvoiceDocumentReference` qui porte `cbc:ID` (BT-25) et `cbc:IssueDate` (BT-26) doit être présente. Les PA rejettent aujourd'hui ces avoirs avec une erreur de validation modèle ; la règle fait remonter l'échec localement pour qu'il arrive dans `F564236` avant l'aller-retour. Câblé via `BuildInfo` (version `schematron.nomaubl` dans `/api/build-info`) et exécuté en dernière couche après CPRO-B2G.

La **vérification d'annuaire** s'exécute également au moment de la validation en 2026.05.9 — un contre-parti inconnu remonte dans `F564236` avant la mise en file du document, sans attendre l'échec de l'étape d'envoi.
:::

---

## Input Configuration

| Champ | Description |
|---|---|
| **Source** | `XML (transform to UBL)` exécute d'abord la transformation XSL du template, puis valide l'UBL produit. `UBL (validate directly)` valide directement le fichier. |
| **Template** | Template du document (par ex. `invoices`, `credit_notes`). Obligatoire quand *Source* vaut `XML` ; masqué quand *Source* vaut `UBL`. Le template sélectionne le pipeline XSL appliqué et le jeu de règles Schematron actif. |
| **Input File** | Nom de base (sans extension) du fichier à valider (par ex. `invoice_001`). En source `XML`, le fichier est résolu dans le répertoire `dirInput` du template ; en source `UBL`, dans `dirInput/ubl/`. |

Deux boutons accompagnent le champ **Input File** :

| Bouton | Comportement |
|---|---|
| **Browse** (icône dossier) | Ouvre un sélecteur de fichiers côté serveur pour choisir un fichier existant. |
| **Upload** (icône envoi) | Téléverse un fichier `.xml` local dans le répertoire serveur approprié (`dirInput` du template pour `XML`, `dirInput/ubl/` pour `UBL`) et le sélectionne comme entrée. En source `XML`, un template doit être choisi au préalable. |

Cliquer sur **Valider l'UBL** pour lancer la validation.

---

## Validation Results

Après la validation, la section **Validation Results** affiche :

- Un message vert **Validation terminée** — ou l'erreur renvoyée par l'API en cas d'échec.
- Une **table de logs structurée** avec une ligne par contrôle. Chaque ligne contient :

| Colonne | Description |
|---|---|
| **Severity** | `FATAL`, `ERROR`, `WARNING` ou `INFO`. `FATAL` et `ERROR` bloquent le dépôt sur la PA ; `WARNING` et `INFO` sont informatifs. |
| **Module** | Moteur de validation à l'origine de l'entrée — typiquement `XSD` (contrôle schéma) ou `Schematron` (règles métier). |
| **Submodule** | Identifiant de règle ou XPath qui a déclenché l'entrée (par ex. `BR-FR-12`, `cbc:CustomizationID`). |
| **Message** | Description lisible de l'échec ou de l'alerte. |

Les échecs XSD signalent un problème structurel (élément requis manquant, type incorrect). Les entrées Schematron correspondent à des règles métier (règles de base EN 16931, extensions françaises `BR-FR-*`, etc.) ; leur sévérité provient de l'attribut `flag` / `role` de la règle dans le fichier Schematron.

---

## Séquence du profil de validation

NomaUBL exécute la validation en **quatre étapes empilées** suivant l'AFNOR XP Z12-012 V1.3.1. Le profil est auto-sélectionné à partir du `CustomizationID` du document — l'utilisateur choisit un template, le moteur s'occupe du reste.

| Étape | Pack | S'applique à | Source `.sch` |
|---|---|---|---|
| **1** | **XSD 2.1** | Tout document UBL — contrôle structurel. | `UBL-2.1.xsd` (W3C XML Schema). |
| **2a** | **EN 16931** | Documents qui déclarent la customization EN 16931 (le profil européen socle). | `EN16931-UBL-validation.sch`. |
| **2b** | **Extended-CTC-FR** *(alternative à 2a)* | Documents qui déclarent le profil français Extended CTC (la majorité des factures B2B / B2G pour la réforme). | `CIUS-FR-validation.sch` + `EXTENDED-CTC-FR-validation.sch`. |
| **3** | **BR-FR-Flux 2** *(toujours exécuté depuis 2026.05.9)* | Tout document de profil français, **y compris Extended-CTC-FR** — fait remonter les règles `BR-FR-*` / `EXT-FR-FE-*` spécifiques à la réforme que la PA impose côté serveur. | `BR-FR-Flux-2-UBL.sch`. |
| **4a** | **CPRO-B2B** | Documents B2B français — profil `BR-FR-CPRO`. | `BR-FR-CPRO-Schematron-UBL.sch` *(rédigé en local, précompilé au build)*. |
| **4b** | **Règles maison NomaUBL** *(nouveau en 2026.05.9)* | Tout document — les règles côté AIFE absentes des packs publics. | `BR-NOMAUBL-rules.sch` *(rédigé en local, précompilé au build)*. |

L'étape 2 est **exclusive** (un profil par document) ; les étapes 3 et 4 s'empilent par-dessus. Un document qui échoue à une règle avec `flag="fatal"` bloque le dépôt sur la PA ; les warnings et entrées informatives sont tracés sans bloquer le pipeline.

### Règles maison NomaUBL

Le nouveau pack `BR-NOMAUBL-rules.sch` capture les règles que l'AIFE impose côté serveur et que les packs Schematron publics n'ont pas encore reprises. Les faire remonter localement permet à un document non conforme d'arriver dans `F564236` avant l'aller-retour PA — une étape réseau économisée et l'explication lisible disponible immédiatement pour l'opérateur.

| Règle | Sévérité | Déclenchement | Ce qui est contrôlé |
|---|---|---|---|
| **`BR-NOMAUBL-01`** | `fatal` | `cbc:InvoiceTypeCode` (BT-3) ∈ `{261, 381, 396, 502, 503}` *(codes d'avoir)*. | Au moins une `cac:BillingReference/cac:InvoiceDocumentReference` doit être présente, **avec `cbc:ID` (BT-25) et `cbc:IssueDate` (BT-26)**. Sans elle, les PA rejettent l'avoir avec l'erreur de validation modèle `precedingInvoices`. |

La version du pack est exposée sur `GET /api/build-info` sous la clé `schematron.nomaubl` — le pied de page du tableau de bord la lit pour le tampon de version par pack.

---

## Conseils & bonnes pratiques

- **Utiliser Source = UBL quand le document est déjà au format UBL** — typiquement pour revalider un document archivé ou un fichier produit par un autre outil. Aucun template n'est requis dans ce mode.
- **Utiliser Source = XML pour valider en une passe le flux amont et la transformation XSL** — utile pendant la mise au point d'un nouveau template avant mise en production, puisque la sortie XSL et les règles Schematron sont testées en même temps.
- **Le sélecteur de template est aussi le sélecteur de jeu de règles.** Différents templates peuvent fixer différentes versions de Schematron (par ex. EN 16931 ou extension française `extended-ctc-fr`). Choisir le template correspondant au profil réglementaire à valider.
- **La validation est en lecture seule.** Pour enregistrer et déposer réellement, utiliser *Traitement → UBL* pour un document unique ou *Synchronisation → Fetch Input* pour un traitement en lot.
- **Le téléversement écrit le fichier dans le répertoire serveur approprié.** Après un téléversement réussi, le champ d'entrée se renseigne automatiquement avec le nom de base résolu, prêt pour la validation ou pour tout traitement ultérieur qui balaye ce même répertoire.
