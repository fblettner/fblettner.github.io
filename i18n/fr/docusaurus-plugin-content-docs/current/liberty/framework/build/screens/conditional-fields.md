---
title: Champs conditionnels
description: "Faire apparaître un champ de dialogue, le rendre obligatoire ou le verrouiller uniquement quand un autre champ a une valeur précise — visible_when / required_when / disabled_when sur ColumnHint et ScreenField."
keywords: [Liberty Framework, champs conditionnels, visible_when, required_when, disabled_when, FieldCondition, logique de formulaire]
---

# Champs conditionnels

Un dialogue statique pose les mêmes questions à l'utilisateur à chaque fois. Un dialogue conditionnel pose les bonnes questions selon ce que l'utilisateur a déjà saisi — afficher **Coordonnées bancaires** uniquement quand **Mode de paiement** est `bank_transfer`, exiger **Motif** uniquement quand **Statut** est `cancelled`, verrouiller **Numéro de compte** en mode édition mais autoriser la modification en mode ajout.

Trois indicateurs sur une colonne (ou une surcharge par dialogue sur un champ) gèrent cela :

| Indicateur | Ce qu'il pilote |
|---|---|
| **`visible_when`** | Si le champ s'affiche. Les champs masqués ne lient pas de valeurs à l'enregistrement. |
| **`required_when`** | Si une valeur est obligatoire. |
| **`disabled_when`** | Si le champ est en lecture seule. |

Chacun est une liste de prédicats `FieldCondition` — sémantique **ET**, donc chaque prédicat doit correspondre pour que la règle se déclenche.

---

## La forme FieldCondition

```toml
{ field = "STATUS", value = "CANCELLED" }
# ou avec une liste — toute valeur qui correspond déclenche la règle
{ field = "PAYMENT_METHOD", value = ["bank_transfer", "sepa"] }
```

| Propriété | Rôle |
|---|---|
| **`field`** | L'autre champ du dialogue dont la valeur en direct pilote cette règle. Référencé par son nom de colonne (insensible à la casse). |
| **`value`** | La valeur attendue, ou une liste de valeurs (toute correspondance suffit). |

Plusieurs conditions dans la liste = ET. Pour OU des conditions, déclarer deux champs distincts avec la même règle conditionnelle (ou utiliser une condition unique avec une liste de valeurs).

---

## Où les définir

Deux couches portent les mêmes indicateurs :

| Couche | Quand |
|---|---|
| **Indication de colonne** *(onglet Colonnes)* | La règle s'applique à **chaque** dialogue qui expose cette colonne. Le bon défaut — la plupart des champs se comportent pareil entre dialogues. |
| **Champ par dialogue** *(Inspecteur → Règles conditionnelles)* | La règle s'applique uniquement à **ce** dialogue précis. À utiliser quand un dialogue a besoin d'un comportement différent du défaut au niveau colonne. |

Le runtime évalue d'abord la surcharge par champ ; si vide, il retombe sur le paramètre de l'indication de colonne.

---

## La section Règles conditionnelles de l'Inspecteur

Quand un champ est sélectionné sur le canevas du [Constructeur de dialogue](./dialog-builder.md), la section *Règles conditionnelles* de l'Inspecteur permet d'ajouter des prédicats pour chacun des trois indicateurs.

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="cf-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#cf-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Inspecteur · IBAN · Règles conditionnelles</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">visible_when (ET)</text>
  <rect x="40" y="100" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="120" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Champ</text>
  <rect x="120" y="110" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="130" y="125" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">PAYMENT_METHOD ▾</text>
  <text x="360" y="120" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Valeur</text>
  <rect x="420" y="110" width="280" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="430" y="125" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">bank_transfer, sepa</text>
  <rect x="720" y="110" width="22" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="731" y="125" fill="#ef4444" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="56" y="148" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">＋ Ajouter une condition</text>

  <text x="40" y="178" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">required_when (ET)</text>
  <rect x="40" y="190" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="210" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Champ</text>
  <rect x="120" y="200" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="130" y="215" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">PAYMENT_METHOD ▾</text>
  <text x="360" y="210" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Valeur</text>
  <rect x="420" y="200" width="280" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="430" y="215" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">bank_transfer</text>
  <text x="56" y="238" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">＋ Ajouter une condition</text>

  <text x="40" y="268" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">disabled_when (ET)</text>
  <rect x="40" y="280" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="300" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Champ</text>
  <rect x="120" y="290" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="130" y="305" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">STATUS ▾</text>
  <text x="360" y="300" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Valeur</text>
  <rect x="420" y="290" width="280" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="430" y="305" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">LOCKED, ARCHIVED</text>
  <text x="56" y="328" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">＋ Ajouter une condition</text>
</svg>

| Section | Rôle |
|---|---|
| **visible_when** | Affiche le champ uniquement quand chaque prédicat correspond. Vide = retombe sur l'indicateur statique `hidden`. |
| **required_when** | Rend le champ obligatoire uniquement quand chaque prédicat correspond. Vide = `required` décide. |
| **disabled_when** | Verrouille le champ uniquement quand chaque prédicat correspond. Vide = `disabled` décide. |

Le runtime réévalue les règles à chaque modification du formulaire — saisir dans `PAYMENT_METHOD`, les champs dépendants apparaissent / disparaissent / se verrouillent sans aller-retour.

---

## Exemples concrets

### Afficher des champs sous condition

Un dialogue *Paiement* avec ces colonnes :

- `PAYMENT_METHOD` — liste déroulante ENUM (`cash`, `bank_transfer`, `sepa`, `card`).
- `IBAN`, `BIC` — pertinents uniquement pour `bank_transfer` / `sepa`.
- `CARD_LAST4` — pertinent uniquement pour `card`.

Les règles :

| Colonne | `visible_when` |
|---|---|
| `IBAN` | `field=PAYMENT_METHOD, value=[bank_transfer, sepa]` |
| `BIC` | `field=PAYMENT_METHOD, value=[bank_transfer, sepa]` |
| `CARD_LAST4` | `field=PAYMENT_METHOD, value=card` |

L'utilisateur choisit `cash` — `IBAN` / `BIC` / `CARD_LAST4` disparaissent tous. Bascule sur `bank_transfer` — `IBAN` et `BIC` apparaissent, `CARD_LAST4` reste masqué.

### Exiger un motif à l'annulation

Un dialogue *Abonnement* où `CANCELLATION_REASON` n'est obligatoire que quand `STATUS = CANCELLED` :

| Colonne | `required_when` |
|---|---|
| `CANCELLATION_REASON` | `field=STATUS, value=CANCELLED` |

Le champ est toujours visible (pas de `visible_when`), toujours éditable (pas de `disabled_when`), mais le bouton *Enregistrer* refuse de soumettre tant que le champ n'a pas de valeur **si** `STATUS` est `CANCELLED`. Pour tout autre statut, un `CANCELLATION_REASON` vide passe sans souci.

### Verrouiller des champs en mode édition pour certaines lignes

Un dialogue *Client* où `TAX_ID` ne doit être éditable qu'à la création de la ligne (pas en modification) :

| Colonne | `disabled_when` |
|---|---|
| `TAX_ID` | (règle basée sur un marqueur qui distingue ajout et modification — typiquement un indicateur au niveau ligne comme `IS_FROZEN`) |

Quand `IS_FROZEN = Y` sur la ligne, le champ `TAX_ID` est en lecture seule. Sinon éditable. Le formulaire est le même ; le comportement s'adapte à la ligne.

Pour un strict « verrouiller en édition, autoriser en ajout » sans marqueur de ligne, utiliser les indicateurs `hide_on_add` / `hide_on_edit` par onglet ou le `disabled` de l'indication de colonne par champ (qui verrouille partout).

### ET multi-conditions

Un dialogue *Facture* où `EARLY_PAYMENT_DISCOUNT` ne doit être obligatoire que quand **à la fois** `STATUS = OPEN` ET `AMOUNT_DUE > 1000` :

La première condition est directe (`STATUS = OPEN`). La seconde non — `FieldCondition` vérifie l'égalité, pas la comparaison. Pour des seuils numériques, utiliser une colonne d'indicateur normalisée (ex. `HIGH_VALUE = Y` calculée dans la requête de lecture) et conditionner sur celle-ci.

Parfois, le mouvement le plus propre est une **règle dictionnaire** avec une valeur par défaut que l'utilisateur peut surcharger — laisser le formulaire calculer la remise et traiter le champ comme informatif plutôt que de verrouiller son enregistrement.

---

## Visible vs masqué — ce qui se passe à l'enregistrement

Un champ masqué par `visible_when` est **exclu de la charge utile d'enregistrement**. L'Enregistrer du dialogue n'envoie que les valeurs des champs actuellement visibles. La colonne de base de données du champ masqué :

- Conserve sa valeur existante (UPDATE — le champ manquant est omis de la clause SET).
- Prend la valeur NULL ou son défaut BD (INSERT — le champ manquant est omis de la liste des colonnes INSERT).

C'est l'**intention** de la visibilité conditionnelle — un champ qui n'est pas pertinent pour le choix de l'utilisateur ne doit pas accidentellement écraser la base de données avec des données obsolètes ou par défaut.

Pour les champs véritablement masqués mais obligatoires (ex. un `:LOGIN_USER` lié à l'enregistrement), utiliser la [liaison de paramètres](../queries/parameter-binding.md) sur la requête `_post` / `_put`, pas un champ de dialogue.

---

## Ordre de validation

Quand l'utilisateur clique sur *Enregistrer*, le dialogue vérifie les champs dans cet ordre :

1. **Les champs visibles avec `required = true`** (ou `required_when` qui correspond) doivent avoir une valeur.
2. La règle dictionnaire de chaque champ se déclenche (BOOLEAN, ENUM, LOOKUP, format).
3. La distribution Enregistrer déclenche la chaîne d'actions.

Une vérification d'obligation qui échoue affiche une erreur en ligne sur le champ, bloque l'enregistrement, ne déclenche pas la chaîne d'actions.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| `visible_when` référence un champ qui n'est sur aucun onglet du dialogue. | Le champ dépendant n'apparaît jamais (la valeur du champ source est indéfinie, aucune condition ne correspond). | Ajouter le champ source au dialogue ou changer la condition. |
| `visible_when` sur un champ `key`. | L'utilisateur ajoute une ligne sans clé — l'INSERT échoue. | Les champs clés ne doivent jamais être masqués sous condition. Les verrouiller, pas les masquer. |
| `required_when` correspond mais `visible_when` ne correspond pas. | Le champ est obligatoire ET masqué — l'utilisateur ne peut pas le remplir mais l'enregistrement refuse. | Synchroniser les deux conditions ou supprimer le `required_when`. |
| Liste de valeurs avec une coquille. | La règle ne correspond jamais. | Vérifier que les valeurs d'énumération correspondent exactement (sensible à la casse). |
| Condition qui référence le champ lui-même. | La protection anti-boucle s'active ; la règle est ignorée. | Les conditions référencent **d'autres** champs, jamais elles-mêmes. |

---

## Étapes suivantes

- [Actions et cycle de vie](./actions-and-lifecycle.md) — déclencher des actions au chargement, à l'enregistrement ou à l'annulation du formulaire.
- [Constructeur de dialogue](./dialog-builder.md) — le Constructeur visuel où l'on définit ces règles par champ.
- [Colonnes](./columns.md) — définir les mêmes règles au niveau de la colonne pour des défauts à l'échelle de l'écran.
