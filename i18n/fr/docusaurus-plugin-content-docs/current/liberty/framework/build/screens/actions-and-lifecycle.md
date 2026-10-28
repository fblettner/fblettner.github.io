---
title: Actions et cycle de vie
description: "L'onglet Actions — hooks de dialogue (on_load / on_save / on_cancel), boutons de barre d'outils, hooks de ligne (on_insert / on_update / on_delete / on_duplicate), menu de ligne, types d'actions et leurs param_binds, saisies préalables, chaînes et actions partagées."
keywords: [Liberty Next, actions, on_load, on_save, on_cancel, on_insert, on_update, on_delete, on_duplicate, run_query, call_api, call_plugin, call_action, navigate, chain, param_binds, prompt_fields]
---

# Actions et cycle de vie

Un écran doté d'une grille et d'un dialogue couvre le circuit standard de lecture et d'écriture. Les **actions** et les **hooks** ajoutent tout le reste : exécuter une requête depuis un bouton, ouvrir une autre vue depuis une ligne, appeler une API ou un plugin après un enregistrement, rafraîchir la grille après une suppression.

Ils se règlent dans les onglets **Actions** et **Menu de ligne** de l'éditeur d'écran, avec partout la même forme d'action.

---

## Moments de déclenchement \{#groups\}

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="al-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#al-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran · crm.customers · Actions</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HOOKS DE DIALOGUE — déclenchés quand le formulaire est ouvert</text>
  <rect x="40" y="100" width="920" height="100" rx="8" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="56" y="122" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_load</text>
  <text x="56" y="138" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">S'exécute juste après le chargement des données de la ligne — utile pour rafraîchir un lookup ou précharger des lignes liées.</text>
  <text x="56" y="160" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_save</text>
  <text x="56" y="176" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">S'exécute après le succès de la mise à jour/insertion principale du dialogue — pour enchaîner d'autres écritures sur la même ligne.</text>

  <text x="40" y="220" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BARRE D'OUTILS — boutons au-dessus du tableau</text>
  <rect x="40" y="232" width="920" height="80" rx="8" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)"/>
  <text x="56" y="254" fill="#c084fc" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">actions</text>
  <text x="56" y="270" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">S'exécutent sans contexte de ligne — une saisie préalable peut demander des valeurs.</text>
  <text x="56" y="290" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">＋ Ajouter une action de barre d'outils</text>

  <text x="40" y="332" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HOOKS DE LIGNE — déclenchés après mutation d'une ligne</text>
  <rect x="40" y="344" width="920" height="80" rx="8" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.40)"/>
  <text x="56" y="366" fill="#22c55e" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_insert</text>
  <text x="56" y="380" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Après l'insertion d'une ligne (Enregistrer du dialogue ou Enregistrer en ligne de la grille).</text>
  <text x="56" y="396" fill="#22c55e" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_update · on_delete</text>
  <text x="56" y="410" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Après une modification / une suppression. Les param_binds lisent la ligne créée / supprimée.</text>
</svg>

| Groupe | Listes | Déclenchement | `source` lit dans |
|---|---|---|---|
| **Hooks de dialogue** | `on_load` | Une fois la ligne chargée (modification) ou les valeurs par défaut posées (ajout). | Le formulaire. |
| | `on_save` | Après le succès de l'insertion ou de la mise à jour principale du dialogue. | Le formulaire au moment de l'enregistrement. |
| | `on_cancel` | À la fermeture du dialogue sans enregistrement, avant sa fermeture ; une erreur le maintient ouvert. | Le formulaire. |
| **Barre d'outils** | `actions` | Chaque entrée est un bouton au-dessus de la grille. | Aucune ligne ; valeurs saisies dans `INPUT.<nom>`. |
| **Hooks de ligne** | `on_insert`, `on_update`, `on_delete` | Après le succès de l'écriture — depuis le dialogue ou la saisie en grille. | La ligne créée, ou la ligne supprimée. |
| | `on_duplicate` | À l'enregistrement d'une ligne dupliquée par le bouton **Duplicate** du dialogue, à la place de `on_insert`. | La nouvelle ligne, et la ligne d'origine sous `SOURCE_<colonne>`. |
| **Menu de ligne** *(onglet dédié)* | `row_menu` | Chaque entrée est un élément du menu d'une ligne : clic droit, ou poignée ⋯ en début de ligne. | La ligne cliquée. |

Un hook exécute sa liste dans l'ordre et s'arrête à la première erreur, sauf si une action a **stop_on_error** désactivé. Une entrée de barre d'outils ou de menu de ligne correspond à une seule action : pour enchaîner plusieurs étapes depuis un même bouton, passer par une `chain`.

Pour un clic simple sur une ligne, utiliser les réglages de **clic sur une ligne** de l'onglet Général (`row_click_screen` avec `row_click_binds`, ou `row_click_route`).

---

## Types d'actions \{#types\}

Chaque action porte un **id** (unique dans sa liste, et clé dans le contexte d'une chaîne), un **label** (texte du bouton) et **stop_on_error**.

| Type | Rôle | Champs principaux |
|---|---|---|
| **`run_query`** | Exécute une requête d'un connecteur, en lecture ou en écriture. | `connector`, `query`, `param_binds`, `bind_result` |
| **`call_api`** | Appelle un endpoint d'un connecteur API. | `connector`, `endpoint`, `param_binds`, `bind_result` |
| **`call_plugin`** | Appelle une fonction Python côté serveur (`module:fonction`), les mêmes points d'entrée que les étapes Nomaflow. | `callable`, `param_binds`, `bind_result` |
| **`call_action`** | Exécute une [action partagée](#shared) par son identifiant. | `ref`, `param_binds` |
| **`navigate`** | Ouvre une autre vue : un écran (`screen`) ou une requête (`to`), les `param_binds` lui étant transmis comme paramètres. | `connector`, `screen` ou `to`, `param_binds` |
| **`open_url`** | Ouvre une adresse externe — une autre application sur la fiche de la ligne. | `url`, `new_tab` |
| **`set_field`** | Écrit une valeur dans un champ du formulaire. | `target`, `value` ou `source` |
| **`confirm`** | Demande une confirmation ; **Annuler** arrête la chaîne. | `message`, `confirm_label`, `cancel_label` |
| **`notify`** | Affiche un message. | `message`, `tone` (`info` / `ok` / `warn` / `error`) |
| **`send_notification`** | Déclenche une règle de notification de type *action* (e-mail, cloche…). | `rule`, `param_binds` |
| **`refresh`** | Recharge la grille. | — |

`bind_result` conserve les lignes (ou la réponse) de l'étape dans le contexte de la chaîne : une étape suivante les lit avec `source = "<id>.first_row.<COLONNE>"`.

### Ouvrir une adresse externe \{#open-url\}

Une action **`open_url`** ouvre une autre application sur la fiche en cours — le formulaire JD Edwards d'une fiche du carnet d'adresses, un ticket du support. Elle peut figurer dans un menu de ligne, dans la barre d'outils, dans un onglet de dialogue, derrière une colonne de navigation ou dans une chaîne, et demander d'abord des valeurs.

- **`url`** est un modèle : `{COLONNE}` reprend la valeur d'une colonne de la ligne, d'un champ du formulaire, d'une valeur demandée ou d'une étape de la chaîne — `{step.first_row.X}` —, encodée pour une adresse ; `#LOGIN_USER#` et les autres variables intégrées sont remplies aussi. `https://helpdesk.example.com/tickets?customer={CUSTOMER_ID}`.
- Une adresse qui change d'une installation à l'autre s'écrit `#URL.NOM#` en tête : `#URL.JDE_WEB#/ShortcutLauncher?OID=P01012_W01012A&…`. Chaque installation fixe l'adresse une fois, dans [App → Adresses externes](../settings-app.md#external-urls) ; sans elle, l'action n'ouvre rien.
- **`new_tab`** : activé par défaut ; désactivé, l'adresse remplace la page.

Seules les adresses `http://`, `https://` et les chemins de ce serveur s'ouvrent ; tout le reste est refusé au chargement de la configuration, puis contrôlé de nouveau sur l'adresse remplie. Un menu de ligne dont la seule action est un `open_url` la déclenche depuis la poignée de ligne.

### La poignée de ligne et la navigation \{#drill\}

Un écran doté d'actions de menu de ligne affiche une petite poignée au début de chaque ligne, pour garder les actions à portée de main sur un tableau large :

- avec plusieurs actions, la poignée (**⋯**, *Actions de la ligne*) ouvre le même menu que le clic droit ;
- avec une seule action `navigate`, la poignée (une flèche de retour) la déclenche aussitôt — son infobulle reprend le libellé de l'action.

**Cellules en lien.** Le réglage **drill** d'une colonne (Liberty Next → Construire → Écrans, colonne, groupe *Display*) désigne une action `navigate` du menu de ligne : la valeur s'affiche comme un lien qui la déclenche pour la ligne — le code client ouvre le client, sans menu à ouvrir. Un écran dont le menu de ligne ne compte qu'une action `navigate` le fait de lui-même sur sa première colonne clé. Un nom d'action inconnu est refusé au chargement de la configuration.

**Où s'ouvre la cible.** Par défaut, une action `navigate` ouvre sa cible dans un nouvel onglet. Avec **Les navigations s'ouvrent dans l'onglet courant** dans [Liberty Next → Administrer → App](../settings-app.md#display), elle s'ouvre en panneau dans l'onglet courant, par-dessus la grille : un fil d'Ariane nomme chaque niveau, **Retour** revient au précédent, et la grille d'origine conserve ses lignes et ses filtres. Une navigation depuis le panneau s'imbrique de la même façon. Une action peut en décider elle-même avec `inline = true` (panneau) ou `inline = false` (nouvel onglet), dans `screens.toml`.

### Types composites

| Type | Rôle |
|---|---|
| **`chain`** | Une liste d'étapes exécutées dans l'ordre, avec un contexte commun. |
| **`if`** | Exécute `then_steps` ou `else_steps` selon une condition : une `source`, un opérateur (`equals`, `not_equals`, `has_rows`, `no_rows`, `truthy`, `falsy`, `greater_than`, `less_than`) et une `value`. |
| **`loop`** | Exécute `steps` pour chaque élément d'une liste tirée du contexte (en général les lignes d'une étape précédente). |
| **`return`** | Recopie des valeurs du contexte dans les champs du formulaire — en fin de chaîne, pour afficher des valeurs calculées. |

**Wrap in chain** place une action existante dans une `chain`, pour ajouter des étapes autour.

---

## Valeurs transmises à une action \{#binds\}

`run_query`, `call_api`, `call_plugin`, `call_action`, `navigate` et `send_notification` reçoivent une liste de `param_binds` : pour chaque paramètre de la cible, une **value** fixe, ou une **source** lue au moment de l'appel — colonne de la ligne, champ du formulaire, `INPUT.<nom>`, `<étape>.first_row.<COLONNE>`, ou une source intégrée comme `#LOGIN_USER#` / `#SYSDATE#` — avec une valeur **default** facultative. Voir [Liaison de paramètres](../queries/parameter-binding.md).

### Saisie préalable \{#prompt\}

`run_query`, `call_api`, `call_plugin`, `call_action`, `navigate` et `chain` peuvent ouvrir un petit formulaire **avant** de s'exécuter :

| Champ | Rôle |
|---|---|
| **prompt_fields** | Les valeurs à demander — chacune avec son nom, son libellé, son entrée du dictionnaire, sa valeur par défaut, ses indicateurs obligatoire / masqué / lecture seule et ses conditions. |
| **prompt_title** (et ses traductions) | Le titre de la fenêtre ; à défaut, le libellé de l'action. |
| **prompt_cols** | Le nombre de colonnes du formulaire (2 par défaut). |

Les valeurs saisies sont disponibles sous `INPUT.<nom>` pour l'action et pour toutes les étapes suivantes de la même chaîne. **Annuler** arrête la chaîne sans erreur.

---

## Actions partagées \{#shared\}

Une action utilisée par plusieurs écrans se définit une seule fois dans **Liberty Next → Construire → Actions** : un identifiant, un libellé, une description, des **params** déclarés, des **prompt_fields** facultatifs et ses **steps** (les mêmes types d'actions). La page liste les actions partagées avec **Find usages**, **Cloner** et **Supprimer** ; un clic sur une ligne ouvre le concepteur d'action.

Un écran l'exécute avec `call_action` : `ref` désigne l'action partagée, et ses `param_binds` alimentent les valeurs `INPUT.<param>` de l'action.

---

## Exemples

### Recalculer, puis recharger la grille

```toml
[[screens.crm.customers.actions]]
type  = "chain"
id    = "recompute"
label = "Recalculer les soldes"
steps = [
  { type = "run_query", id = "compute", connector = "crm", query = "compute_balances" },
  { type = "refresh",   id = "reload" },
  { type = "notify",    id = "done", message = "Soldes recalculés.", tone = "ok" },
]
```

### Confirmer avant de supprimer

```toml
[[screens.crm.customers.row_menu]]
type  = "chain"
id    = "delete_customer"
label = "Supprimer le client"
steps = [
  { type = "confirm", id = "ask", message = "Supprimer ce client et ses affaires ?", confirm_label = "Supprimer" },
  { type = "run_query", id = "delete", connector = "crm", query = "customers_delete",
    param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }] },
  { type = "refresh", id = "reload" },
]
```

**Annuler** sur la confirmation arrête la chaîne : rien n'est supprimé.

### Ouvrir les affaires d'un client

```toml
[[screens.crm.customers.row_menu]]
type        = "navigate"
id          = "view_deals"
label       = "Voir les affaires"
connector   = "crm"
screen      = "deals"
param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }]
```

L'écran **deals** s'ouvre avec ses filtres alimentés par les liaisons.

### Renseigner les colonnes d'audit

Pour des colonnes `CREATED_BY` / `CREATED_AT`, aucun hook n'est nécessaire : les règles `LOGIN` et `SYSDATE` du dictionnaire, ou les jetons `{{LOGIN}}` / `{{SYSTIMESTAMP}}` dans la requête d'insertion, les renseignent côté serveur — voir [Dictionnaire → Règles](../../dictionary.md#rules). Pour historiser chaque écriture dans une table, renseigner `audit_table` dans l'onglet Général.

---

## Enregistrement

Les onglets Actions et Menu de ligne modifient les listes de l'écran ; **Enregistrer** dans l'éditeur d'écran les écrit avec le reste de l'écran et recharge la configuration — le clic suivant exécute la nouvelle version.

---

## Erreurs fréquentes

| Erreur | Conséquence | Correction |
|---|---|---|
| Deux entrées de barre d'outils censées s'enchaîner. | Ce sont deux boutons distincts. | Regrouper les étapes dans une seule `chain`. |
| Une action de barre d'outils avec `source = "CUSTOMER_ID"`. | La barre d'outils n'a pas de ligne : la valeur est vide. | Déplacer l'action dans le menu de ligne, ou demander la valeur par une saisie préalable (`INPUT.CUSTOMER_ID`). |
| `confirm` placé après la suppression. | La question arrive une fois la ligne supprimée. | `confirm` en premier dans la chaîne. |
| Une étape lit `<id>.first_row.X` d'une étape sans `bind_result`. | La valeur est vide. | Activer `bind_result` sur l'étape qui produit les lignes. |
| `value = "#LOGIN_USER#"`. | Le texte est écrit tel quel. | Passer par `source`. |

---

## Pour aller plus loin

- [Onglets imbriqués](./nested-tabs.md) — intégrer le formulaire ou la grille d'un autre écran dans un onglet de dialogue.
- [Liaison de paramètres](../queries/parameter-binding.md) — `param_binds`, sources intégrées et jetons.
- [Notifications](../../../nomaflow/notifications.md) — les règles déclenchées par `send_notification`.
