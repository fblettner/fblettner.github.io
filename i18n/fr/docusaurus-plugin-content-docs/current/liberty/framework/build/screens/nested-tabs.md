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
| **`nested_form`** | Le formulaire d'un autre écran, pour zéro ou une ligne liée, enregistré avec le parent. | Quand la table liée a **au plus une** ligne par parent (un-vers-un ou zéro-vers-un). |
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

Un onglet `nested_form` affiche, dans le dialogue, le **formulaire d'un autre écran existant**. C'est cet écran qui porte les requêtes de lecture, de mise à jour et d'insertion ainsi que les champs ; l'onglet indique seulement l'écran à réutiliser et la façon de lui transmettre les valeurs du parent.

### Champs

| Champ | Rôle |
|---|---|
| **`form_screen`** *(obligatoire)* | L'identifiant de l'écran dont le formulaire est réutilisé. |
| **`connector`** | Le connecteur de cet écran. Vide = le connecteur de l'écran parent. |
| **`param_binds`** | Lie les valeurs du parent aux requêtes de l'écran réutilisé — en général `CUSTOMER_ID ← CUSTOMER_ID`. |
| **`label`**, **`hide_on_add`**, **`hide_on_edit`**, **`actions`** | Comme sur tout onglet. |

### Comportement

1. **Modification d'une ligne parent** — la requête de lecture de l'écran réutilisé s'exécute avec les valeurs liées. Une ligne trouvée s'affiche en modification ; sinon le formulaire démarre vide.
2. **Ajout d'une ligne parent** — le formulaire démarre vide (le parent n'a pas encore de clé).
3. **Enregistrement** — le formulaire imbriqué est enregistré par le bouton **Enregistrer** du parent : mise à jour si une ligne avait été chargée, insertion sinon — seulement si l'utilisateur a saisi quelque chose. À l'insertion, les liaisons reçoivent la nouvelle clé du parent, y compris une clé attribuée par une séquence.
4. **Duplication du parent** — la ligne imbriquée est insérée à nouveau pour la copie.

Les champs masqués par leurs conditions ne sont pas écrits, et les colonnes clés liées prennent toujours les valeurs du parent.

### Cas d'usage — adresse de facturation

Un dialogue *Client* avec un onglet *Facturation* qui réutilise l'écran `billing_address` (ses requêtes de lecture, de mise à jour et d'insertion portent sur `CUSTOMER_ID`) :

```toml
[[screens.crm.customers.dialog.tabs]]
id          = "billing"
label       = "Facturation"
type        = "nested_form"
form_screen = "billing_address"
param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }]
```

Pour modifier les champs de facturation, il suffit de modifier l'écran `billing_address` : tous les dialogues qui le réutilisent suivent.

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
| La lecture de l'écran réutilisé renvoie plus d'une ligne. | Le formulaire n'affiche que la première. | Resserrer les liaisons pour que la lecture renvoie 0 ou 1 ligne ; utiliser `nested_table` pour une relation un-vers-plusieurs. |
| `nested_table` sans `param_binds`. | La grille intégrée affiche **toutes** les lignes de la cible — y compris les lignes non liées. | Toujours lier au moins les colonnes clé étrangère du parent. |
| L'écran réutilisé n'a pas de requête d'insertion et aucune ligne n'existe. | Rien n'est créé à l'enregistrement. | Renseigner la requête d'insertion de l'écran réutilisé. |
| `nested_table` pointant sur un écran d'un autre connecteur + surcharge `connector` manquante. | Le runtime tente de résoudre l'écran cible sur le connecteur du parent et échoue. | Renseigner `connector` explicitement sur le connecteur de l'écran cible. |
| Deux onglets imbriqués avec le même id. | La validation à l'enregistrement échoue (« identifiant d'onglet de dialogue en double »). | Choisir des identifiants uniques par dialogue. |

---

## Étapes suivantes

- [Concepts → Écrans](./overview.md) — la référence approfondie (schéma complet, cycle de vie, validateurs).
- [Actions et cycle de vie](./actions-and-lifecycle.md) — câbler le `on_save` du parent pour déclencher des écritures sur les données imbriquées.
- [Liaison de paramètres](../queries/parameter-binding.md) — la référence complète des ParamBind, dont `#LOGIN_USER#` / `#SYSDATE#`.
