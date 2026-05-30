---
title: Onglets imbriqués
description: "Intégrer un formulaire d'enregistrement enfant (nested_form) ou une grille de lignes liées (nested_table) dans un onglet de dialogue — même dialogue, plusieurs sources de données."
keywords: [Liberty Framework, onglets imbriqués, nested_form, nested_table, enregistrement enfant, lignes liées, ParamBind, dialogue]
---

# Onglets imbriqués

Un dialogue avec tous ses champs sur un seul formulaire couvre le cas *mono-ligne*. Quand une ligne a des **données liées** — un client avec plusieurs adresses, un utilisateur avec des paramètres par application, une commande avec des lignes de poste — on intègre ces données liées directement dans le dialogue comme un onglet imbriqué.

Deux variantes :

| Type d'onglet | Ce qu'il affiche | Quand |
|---|---|---|
| **`nested_form`** | Un formulaire d'enregistrement enfant : zéro ou une ligne liée, avec ses propres requêtes SELECT / INSERT / UPDATE. | Quand la table liée a **au plus une** ligne par parent (un-vers-un ou zéro-vers-un). |
| **`nested_table`** | Une TableView complète des lignes liées, intégrée en ligne — affiche la grille d'un autre écran restreinte à la clé du parent. | Quand la table liée a **plusieurs** lignes par parent (un-vers-plusieurs). |

Les deux s'attachent au dialogue comme n'importe quel autre onglet ; l'utilisateur clique entre eux sans quitter le formulaire.

---

## Quand choisir lequel

| Patron | Choisir |
|---|---|
| Un client → au plus une adresse de facturation. | `nested_form`. |
| Un client → plusieurs commandes. | `nested_table`. |
| Une application → ses paramètres spécifiques JD Edwards (zéro ou une ligne). | `nested_form`. |
| Un projet → ses lignes de poste. | `nested_table`. |
| Un employé → son affectation actuelle (une ligne). | `nested_form`. |
| Un employé → l'historique de ses affectations. | `nested_table`. |

Le validateur `_check` du schéma impose l'unicité des identifiants d'onglet ; sinon les deux types peuvent coexister dans le même dialogue — un dialogue *Client* avec un `nested_form` sur *Facturation* et un `nested_table` sur *Commandes* est une forme naturelle.

---

## nested_form — un formulaire d'enregistrement enfant

Un onglet `nested_form` intègre un sous-dialogue qui lit / écrit une table liée. La clé primaire du parent se lie à la requête de lecture imbriquée ; si une ligne revient, le formulaire s'affiche en mode édition ; sinon, en mode ajout.

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nf-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#nf-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Inspecteur · Onglet "Facturation" · type=nested_form</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">connector</text>
  <rect x="200" y="80" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="95" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">(connecteur du parent — crm)</text>

  <text x="40" y="122" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">read_query *</text>
  <rect x="200" y="110" width="320" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="210" y="125" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">billing_address_get ▾</text>

  <text x="40" y="152" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">update_query</text>
  <rect x="200" y="140" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="155" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">billing_address_put ▾</text>

  <text x="40" y="182" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">insert_query</text>
  <rect x="200" y="170" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="185" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">billing_address_post ▾</text>

  <line x1="20" y1="208" x2="980" y2="208" stroke="#1f2937" strokeWidth="1"/>
  <text x="40" y="230" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIAISONS DE PARAMÈTRES (parent → imbriqué)</text>

  <rect x="40" y="240" width="920" height="40" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="260" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">:CUSTOMER_ID</text>
  <text x="180" y="260" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">←  colonne parent</text>
  <text x="320" y="260" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="500" y="260" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(la ligne courante du dialogue parent)</text>

  <text x="56" y="290" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">＋ Ajouter une liaison</text>

  <line x1="20" y1="304" x2="980" y2="304" stroke="#1f2937" strokeWidth="1"/>
  <text x="40" y="324" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHAMPS</text>
  <text x="40" y="346" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Glisser des champs depuis la Palette comme sur un onglet de formulaire normal.</text>
</svg>

### Champs

| Champ | Notes |
|---|---|
| **`connector`** | Connecteur qui héberge les requêtes imbriquées. Vide = connecteur du parent. |
| **`read_query`** *(obligatoire)* | Lit la ligne liée. Doit retourner 0 ou 1 ligne après que la liaison la restreint. |
| **`update_query`** | Écrit les modifications quand une ligne liée existe déjà. |
| **`insert_query`** | Écrit une nouvelle ligne liée quand aucune n'existait (après que la liaison a retourné 0 ligne). |
| **`param_binds`** | Lie les colonnes du parent aux paramètres `:placeholder` des requêtes imbriquées. Typiquement `:CUSTOMER_ID ← CUSTOMER_ID`. |
| **`fields`** | Les champs du formulaire, comme sur un onglet `form` normal. Glisser depuis la Palette. |
| **`cols`** | Nombre de colonnes de la grille pour le formulaire imbriqué. |

### Comportement

Quand le dialogue parent s'ouvre :

1. La `read_query` se déclenche avec les valeurs des colonnes du parent liées via `param_binds`.
2. Si une ligne revient, le formulaire imbriqué s'affiche en **mode édition** — les champs sont renseignés, *Enregistrer* déclenche `update_query`.
3. Si aucune ligne ne revient, le formulaire imbriqué s'affiche en **mode ajout** — les champs sont vides, *Enregistrer* déclenche `insert_query`.

L'*Enregistrer* du parent et l'*Enregistrer* de l'onglet imbriqué sont indépendants — enregistrer le parent ne touche pas aux données imbriquées ; enregistrer l'imbriqué ne déclenche pas la chaîne Enregistrer du parent. Chacun opère sur sa propre ligne.

### Cas d'usage — paramètres spécifiques JD Edwards

Un dialogue *Paramètres → Applications* avec un onglet *JD Edwards* qui n'apparaît que quand l'application est une application JDE :

```toml
[[screens.nomasx1.settings_applications.dialog.tabs]]
id = "jde"
label = "JD Edwards"
type = "nested_form"
read_query = "settings_jde_get"
update_query = "settings_jde_put"
insert_query = "settings_jde_post"

[[screens.nomasx1.settings_applications.dialog.tabs.param_binds]]
param = "APPS_ID"
source = "APPS_ID"

[[screens.nomasx1.settings_applications.dialog.tabs.fields]]
name = "JDE_VERSION"

[[screens.nomasx1.settings_applications.dialog.tabs.fields]]
name = "JDE_ENVIRONMENT"
```

Quand l'utilisateur ouvre le dialogue Applications sur une application JDE (`APPS_ID` = une valeur), l'onglet JDE charge la ligne de paramètres correspondante et permet à l'utilisateur de la modifier. Pour les applications non-JDE où aucune ligne n'existe, le même onglet pré-remplit le formulaire pour que l'utilisateur puisse en ajouter une.

---

## nested_table — une grille de lignes liées

Un onglet `nested_table` intègre la TableView d'un autre écran en ligne. Pas de nouveaux champs — la grille complète + le dialogue de l'écran cible s'affichent à l'intérieur de l'onglet, restreints à la clé du parent.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nt-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="280" rx="14" fill="url(#nt-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Inspecteur · Onglet "Affaires" · type=nested_table</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">connector</text>
  <rect x="200" y="80" width="320" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="95" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">(connecteur du parent — crm)</text>

  <text x="40" y="122" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">screen *</text>
  <rect x="200" y="110" width="320" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="210" y="125" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">deals ▾</text>

  <line x1="20" y1="148" x2="980" y2="148" stroke="#1f2937" strokeWidth="1"/>
  <text x="40" y="170" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIAISONS DE PARAMÈTRES (parent → read_query de l'écran imbriqué)</text>

  <rect x="40" y="180" width="920" height="40" rx="6" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="200" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">:CUSTOMER_ID</text>
  <text x="180" y="200" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">←  colonne parent</text>
  <text x="320" y="200" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>

  <text x="56" y="230" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">＋ Ajouter une liaison</text>

  <line x1="20" y1="250" x2="980" y2="250" stroke="#1f2937" strokeWidth="1"/>
  <text x="40" y="272" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">Un onglet nested-table intègre la TableView d'un autre écran — ses lignes / colonnes proviennent de cet écran, pas de cet onglet. Aucun champ à configurer ici.</text>
</svg>

### Champs

| Champ | Notes |
|---|---|
| **`connector`** | Connecteur qui héberge l'écran cible. Vide = connecteur du parent. |
| **`screen`** *(obligatoire)* | L'identifiant de l'écran cible. Le sélecteur s'alimente depuis la liste d'écrans du même connecteur. |
| **`param_binds`** | Lie les colonnes du parent aux paramètres `:placeholder` de la `read_query` de l'écran cible. |

### Comportement

L'onglet affiche l'écran cible — sa grille, ses filtres, son dialogue d'ajout / modification, son menu contextuel ligne — exactement comme il le ferait sur sa propre page, mais **restreint** par les paramètres liés. L'utilisateur peut :

- Parcourir les lignes liées dans la grille intégrée.
- Ouvrir le bouton *＋ Ajouter* pour créer une nouvelle ligne liée — les colonnes parent liées pré-remplissent les colonnes correspondantes du dialogue d'ajout.
- Faire un clic droit pour le menu contextuel ligne de l'écran cible.
- Cliquer sur le bouton d'édition en ligne pour ouvrir le dialogue de l'écran cible et modifier une ligne liée.

### Cas d'usage — client + affaires

Un dialogue *Client* avec un onglet *Affaires* affichant chaque affaire pour ce client :

```toml
[[screens.crm.customers.dialog.tabs]]
id = "deals"
label = "Affaires"
type = "nested_table"
screen = "deals"

[[screens.crm.customers.dialog.tabs.param_binds]]
param = "CUSTOMER_ID"
source = "CUSTOMER_ID"
```

L'onglet *Affaires* intègre la TableView de l'écran `deals`, filtrée sur le client courant. Quand l'utilisateur clique sur *＋ Ajouter une affaire* dans la grille intégrée, le `CUSTOMER_ID` de la nouvelle affaire est pré-rempli avec la valeur du parent.

### Ce qui s'affiche à l'intérieur

La TableView intégrée porte tout ce que l'écran cible possède :

| Élément | Hérité |
|---|---|
| Colonnes + leurs indications | ✓ |
| Filtres | ✓ — l'utilisateur peut restreindre davantage dans la portée du parent. |
| Dialogue (ajout / modification) | ✓ |
| Actions (barre d'outils / menu ligne / hooks) | ✓ |
| Configuration d'export | ✓ |

L'écran cible existe indépendamment — on peut y naviguer comme page autonome ET l'intégrer comme onglet imbriqué. La même configuration pilote les deux surfaces.

---

## Quand imbriquer vs. quand naviguer

Une décision courante : les données liées doivent-elles être **intégrées** dans le dialogue du parent, ou s'ouvrir comme un **écran séparé** au clic sur la ligne ?

| Choisir l'intégration | Choisir la navigation au clic |
|---|---|
| L'utilisateur veut toujours voir les données liées aux côtés du parent (flux mono-écran). | Les données liées ne sont qu'occasionnellement pertinentes ; les ouvrir à la demande maintient le dialogue parent focalisé. |
| La table liée est petite (quelques colonnes, peu de lignes). | La table liée est grande ; l'intégration encombre le dialogue. |
| Les utilisateurs modifient les deux en même temps. | Les utilisateurs modifient typiquement l'un puis l'autre en étapes séparées. |
| | Plusieurs écrans voisins descendent vers la même cible — la définir une fois comme écran autonome est plus propre. |

L'intégration est le choix à forte affinité pour les **relations obligatoires** (un client avec au moins une adresse) ; le clic est le bon choix pour les **données larges** (un client avec des centaines de commandes historiques).

---

## Permissions sur les données imbriquées

Les onglets imbriqués honorent le **même modèle de permissions** que les écrans autonomes — la permission `sql:<connector>:<query>` de la requête sous-jacente est vérifiée. Un utilisateur qui peut voir le dialogue parent mais qui n'a pas la permission sur la requête de lecture imbriquée voit l'onglet imbriqué vide / en lecture seule / masqué selon la permission manquante :

| Permission manquante | Effet sur l'onglet imbriqué |
|---|---|
| `sql:<connector>:<nested_read>` | L'onglet est entièrement masqué. |
| `sql:<connector>:<nested_update>` | Le formulaire est en lecture seule. |
| `sql:<connector>:<nested_insert>` | Le bouton *＋ Ajouter* est masqué. |
| `sql:<connector>:<nested_delete>` | La suppression de ligne est désactivée. |

Cela permet de construire des dialogues qui révèlent progressivement les données selon le rôle de l'utilisateur — même définition d'écran, surfaces différentes par utilisateur.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| `nested_form.read_query` retourne plus d'une ligne. | Le formulaire n'affiche que la première ligne et ignore silencieusement le reste. | Resserrer la liaison pour que la lecture retourne 0 ou 1. Utiliser `nested_table` pour les véritables relations un-vers-plusieurs. |
| `nested_table` sans `param_binds`. | La grille intégrée affiche **toutes** les lignes de la cible — y compris les lignes non liées. | Toujours lier au moins les colonnes clé étrangère du parent. |
| `nested_form` avec `insert_query` vide, aucune ligne n'existe encore. | L'utilisateur ne peut pas ajouter de nouvelle ligne — le formulaire n'a rien à déclencher. | Câbler `insert_query`, ou pré-créer la ligne via un autre flux. |
| `nested_table` pointant sur un écran d'un autre connecteur + surcharge `connector` manquante. | Le runtime tente de résoudre l'écran cible sur le connecteur du parent et échoue. | Renseigner `connector` explicitement sur le connecteur de l'écran cible. |
| Deux onglets imbriqués avec le même id. | La validation à l'enregistrement échoue (« identifiant d'onglet de dialogue en double »). | Choisir des identifiants uniques par dialogue. |

---

## Étapes suivantes

- [Concepts → Écrans](../../screens.md) — la référence approfondie (schéma complet, cycle de vie, validateurs).
- [Actions et cycle de vie](./actions-and-lifecycle.md) — câbler le `on_save` du parent pour déclencher des écritures sur les données imbriquées.
- [Liaison de paramètres](../queries/parameter-binding.md) — la référence complète des ParamBind, dont `#LOGIN_USER#` / `#SYSDATE#`.
