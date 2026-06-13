---
title: Actions et cycle de vie
description: "L'onglet Actions — boutons de barre d'outils, menu contextuel ligne, hooks de dialogue (on_load / on_save / on_cancel), hooks de ligne (on_insert / on_update / on_delete), et les sept types d'action principaux."
keywords: [Liberty Framework, actions, on_load, on_save, on_cancel, on_insert, on_update, on_delete, run_query, navigate, chain, ParamBind]
---

# Actions et cycle de vie

Un écran avec une grille + un dialogue couvre le flux CRUD *statique*. Un écran avec des **actions** et des **hooks de cycle de vie** l'étend à tout le reste — exécuter une requête personnalisée au clic d'un bouton, naviguer vers un autre écran au clic d'une ligne, déclencher un webhook après un enregistrement, rafraîchir après une suppression.

L'onglet **Actions** du Concepteur d'écran est l'endroit où tout cela se câble. Trois groupes, les mêmes formes d'action partout.

---

## Les trois groupes d'actions

L'onglet Actions organise chaque surface d'action en trois groupes :

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
  <text x="56" y="138" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">S'exécute juste après le chargement des données de la ligne — utile pour rafraîchir une recherche ou précharger des lignes liées.</text>
  <text x="56" y="160" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_save</text>
  <text x="56" y="176" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">S'exécute après le succès de la mise à jour/insertion principale du dialogue — chaîne des écritures supplémentaires sur la même ligne.</text>

  <text x="40" y="220" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BARRE D'OUTILS — boutons au-dessus du tableau</text>
  <rect x="40" y="232" width="920" height="80" rx="8" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)"/>
  <text x="56" y="254" fill="#c084fc" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">actions</text>
  <text x="56" y="270" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">S'exécutent indépendamment, sans contexte de ligne (ou la ligne actuellement sélectionnée quand l'une est mise en surbrillance).</text>
  <text x="56" y="290" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">＋ Ajouter une action de barre d'outils</text>

  <text x="40" y="332" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HOOKS DE LIGNE — déclenchés après mutation d'une ligne</text>
  <rect x="40" y="344" width="920" height="80" rx="8" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.40)"/>
  <text x="56" y="366" fill="#22c55e" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_insert</text>
  <text x="56" y="380" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Après l'insertion d'une ligne (Enregistrer du dialogue ou Enregistrer en ligne de la grille).</text>
  <text x="56" y="396" fill="#22c55e" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">on_update · on_delete</text>
  <text x="56" y="410" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Après une modification / une suppression. Les ParamBinds se résolvent contre les valeurs de la ligne nouvelle / supprimée.</text>
</svg>

| Groupe | Hooks | Quand ils se déclenchent | ParamBind se résout contre |
|---|---|---|---|
| **Hooks de dialogue** | `on_load`, `on_save`, `on_cancel` | Quand le formulaire est ouvert. | L'état en direct du formulaire. |
| **Barre d'outils** | `actions` (niveau écran) | L'utilisateur clique sur un bouton de la barre d'outils. | La ligne actuellement sélectionnée (vide si aucune). |
| **Hooks de ligne** | `on_insert`, `on_update`, `on_delete` | Après le succès d'une mutation — fonctionne aussi bien depuis l'Enregistrer du dialogue **que** depuis l'Enregistrer en ligne de la grille. | La nouvelle ligne (`on_insert` / `on_update`) ou la ligne supprimée (`on_delete`). |

Un onglet séparé — **Menu ligne** — porte `row_menu` : les actions affichées au clic droit sur une ligne. Les ParamBinds se résolvent contre la ligne **cliquée**.

---

## Les sept types d'action principaux

Chaque action a un champ `type` qui discrimine l'une des sept variantes principales (plus quatre variantes composites ci-dessous).

| Type | Rôle | Champs clés |
|---|---|---|
| **`run_query`** | Exécute une requête de connecteur (en écriture ou en lecture). | `connector`, `query`, `params` (ParamBinds). |
| **`call_api`** | Appelle un point de terminaison HTTP / API d'un connecteur. | `connector`, `endpoint`, `params`. |
| **`navigate`** | Ouvre un autre écran en modale, restreint par des ParamBinds. | `connector`, `screen`, `params`. |
| **`set_field`** | Change la valeur d'un champ du dialogue. | `field`, `value` (littéral ou `source` depuis un autre champ). |
| **`confirm`** | Demande confirmation à l'utilisateur ; bloque la chaîne sur Annuler. | `title`, `message`, `confirm_label`. |
| **`notify`** | Affiche un toast / bandeau. | `level` (`info` / `warning` / `error` / `success`), `message`. |
| **`refresh`** | Réexécute la requête de lecture de l'écran (recharge la grille). | *(sans champs)*. |

La liste déroulante *Type* de l'éditeur d'action liste les sept ; changer de type révèle les champs adaptés. Les listes déroulantes de cible s'alimentent depuis le registre en direct des connecteurs / écrans — changer la destination les rafraîchit.

---

## Les quatre types composites

Construits sur les sept principaux — utilisés pour exprimer des flux plus complexes en une seule entrée d'action plutôt que d'en assembler plusieurs.

| Type | Rôle |
|---|---|
| **`chain`** | Une séquence d'actions imbriquées, la sortie de chaque étape étant disponible pour la suivante via des références `<step_id>.first_row.<col>`. S'arrête à la première erreur sauf si une action met `stop_on_error = false`. |
| **`if`** | Branchement conditionnel à l'intérieur d'une chaîne — exécute les actions `then` quand la condition est vraie, les actions `else` sinon. |
| **`loop`** | Itère sur un tableau (typiquement le résultat d'un `run_query` précédent) et exécute le corps pour chaque élément. |
| **`return`** | Lie des valeurs du contexte de la chaîne en retour vers des champs du dialogue. Utilisé à la fin d'une chaîne pour faire remonter des valeurs calculées sur le formulaire. |

La plupart des écrans n'ont jamais besoin des composites — une liste plate de `run_query` + `refresh` + `notify` couvre 80 % des cas. Recourir à `chain` quand le même déclencheur doit lancer plusieurs requêtes qui partagent des valeurs intermédiaires ; à `if` / `loop` quand le flux branche ou itère véritablement.

---

## Contexte ParamBind à chaque déclenchement

Chaque action porte des `params` (ParamBinds). La liaison se résout différemment selon **où l'action se déclenche** :

| Où | `source` lit depuis |
|---|---|
| Barre d'outils (`actions`) | Les colonnes de la ligne actuellement sélectionnée. Si aucune ligne n'est sélectionnée, les sources se résolvent à NULL (sauf si un `default` est défini). |
| Menu ligne (`row_menu`) | Les colonnes de la ligne cliquée. |
| `on_load` du dialogue | L'état du formulaire juste chargé. |
| `on_save` du dialogue | L'état du formulaire à la soumission (après réussite de l'écriture principale). |
| `on_cancel` du dialogue | L'état du formulaire quand l'utilisateur a appuyé sur Annuler. |
| Ligne `on_insert` / `on_update` | Les valeurs de la nouvelle ligne. |
| Ligne `on_delete` | Les valeurs de la ligne supprimée. |
| À l'intérieur d'une `chain` | Le contexte de chaîne — `<previous_step_id>.first_row.<col>` lit la sortie de l'étape nommée. |

Les deux liaisons réservées — `#LOGIN_USER#` et `#SYSDATE#` — fonctionnent partout comme valeurs `source`. Voir [Liaison de paramètres](../queries/parameter-binding.md) pour la référence complète.

---

## Patrons courants

### Rafraîchir la grille après une écriture

L'action de barre d'outils la plus courante : exécuter une procédure stockée, puis recharger la grille pour que l'utilisateur voie le résultat.

```toml
[[screens.crm.customers.actions]]
type = "run_query"
id = "compute_balances"
connector = "crm"
query = "compute_balances_post"
label = "Recalculer les soldes"

[[screens.crm.customers.actions]]
type = "refresh"
id = "reload_grid"
```

Les deux actions sont des entrées distinctes — elles se déclenchent dans l'ordre. Si la première échoue (écriture rejetée, erreur réseau), la seconde ne se déclenche pas et la grille reste inchangée.

### Confirmer avant le destructeur

Une action *Supprimer la ligne* sur le menu contextuel ligne, soumise à une confirmation :

```toml
[[screens.crm.customers.row_menu]]
type = "confirm"
id = "confirm_delete"
title = "Supprimer le client ?"
message = "Cela supprime le client et toutes les affaires liées."

[[screens.crm.customers.row_menu]]
type = "run_query"
id = "do_delete"
connector = "crm"
query = "customers_delete"

[[screens.crm.customers.row_menu.params]]
param = "CUSTOMER_ID"
source = "CUSTOMER_ID"
```

Si l'utilisateur clique sur Annuler dans la confirmation, la chaîne s'arrête ; la suppression ne se déclenche pas.

### Estampiller les colonnes d'audit à l'insertion

L'écran a une colonne `CREATED_BY` que vous voulez remplir automatiquement avec l'utilisateur courant — mais le dialogue ne l'affiche pas (c'est une colonne d'audit masquée). Utiliser `on_insert` :

```toml
[[screens.crm.customers.on_insert]]
type = "run_query"
id = "stamp_audit"
connector = "crm"
query = "customers_stamp_audit"

[[screens.crm.customers.on_insert.params]]
param = "CUSTOMER_ID"
source = "CUSTOMER_ID"

[[screens.crm.customers.on_insert.params]]
param = "CREATED_BY"
source = "#LOGIN_USER#"
```

L'INSERT principal se déclenche d'abord ; en cas de succès, cet UPDATE d'estampillage d'audit se déclenche avec l'identifiant de la même ligne + l'utilisateur de la session. L'écran ne fait jamais remonter `CREATED_BY` dans le dialogue, mais la colonne se retrouve renseignée.

Pour la journalisation d'audit qui doit dupliquer **chaque** écriture, préférer `audit_table` sur l'onglet Général — il ajoute automatiquement les lignes `AUD_ACTION` / `AUD_USER` / `AUD_DATE` sans hooks explicites.

### Notifier en cas de succès

Câbler un `notify` après une action longue pour donner un retour à l'utilisateur :

```toml
[[screens.crm.customers.actions]]
type = "run_query"
id = "export_pdf"
connector = "crm"
query = "customers_export_pdf"
label = "Exporter au format PDF"

[[screens.crm.customers.actions]]
type = "notify"
id = "notify_done"
level = "success"
message = "Export terminé — voir vos téléchargements."
```

`level` accepte `info` / `warning` / `error` / `success` ; chacun s'affiche avec une couleur différente.

### Ouvrir un écran voisin avec filtres liés

`navigate` ouvre un autre écran en modale, restreint par les liaisons. Utile depuis un menu contextuel ligne :

```toml
[[screens.crm.customers.row_menu]]
type = "navigate"
id = "view_deals"
connector = "crm"
screen = "deals"
label = "Voir les affaires de ce client"

[[screens.crm.customers.row_menu.params]]
param = "CUSTOMER_ID"
source = "CUSTOMER_ID"
```

Le `CUSTOMER_ID` de la ligne cliquée se lie à la requête de lecture de l'écran deals ; la modale deals s'ouvre en n'affichant que les affaires de ce client.

Pour un clic gauche sur la ligne (pas un clic droit), utiliser plutôt le **comportement au clic sur une ligne** de l'onglet Général (`row_click_screen` + `row_click_binds`) — c'est la même forme, simplement déclenchée au clic.

---

## L'éditeur d'action

Chaque groupe d'actions a un bouton *＋ Ajouter une action*. Cliquer ajoute une ligne qui demande un identifiant d'action (qui doit être unique dans la liste). L'éditeur révèle les champs propres au type :

| Champ | Notes |
|---|---|
| **id** | Unique dans la liste d'actions. Utilisé comme clé du contexte de chaîne (`<id>.first_row.<col>`). |
| **type** | Liste déroulante — change les champs disponibles en dessous. |
| **Cible** | La requête / point de terminaison / écran sur lequel l'action opère (le libellé dépend du type : *Requête* pour `run_query`, *Point de terminaison* pour `call_api`, *Requête cible* pour `navigate`). |
| **Params** | Liste de ParamBinds. Cliquer sur *＋ Ajouter une liaison* pour en ajouter une. |
| **stop_on_error** | Quand faux, la chaîne continue même si cette action échoue. Vrai par défaut. |
| **prompt** | Liste optionnelle `PromptField` — fait remonter un formulaire de saisie avant le déclenchement de l'action (ex. demander un `END_DATE` à l'utilisateur avant d'exécuter un rapport). |

Le bouton **Encapsuler dans une chaîne** sur n'importe quelle action l'enveloppe dans une `chain` — utile quand on a démarré à plat et qu'on a maintenant besoin de logique conditionnelle ou d'une boucle.

---

## Flux d'enregistrement

L'onglet Actions modifie les listes `actions` / `row_menu` / `on_*` de l'écran ; l'*Enregistrer* du Concepteur d'écran valide toutes ensemble en une seule fois dans `screens.toml`. Le rechargement à chaud les prend en compte immédiatement — le prochain clic sur le bouton de la barre d'outils déclenche la chaîne d'actions mise à jour.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Chaîne `on_save` qui se déclenche avant l'écriture principale. | La chaîne tombe sur une condition de course — la ligne n'existe pas encore. | `on_save` se déclenche **après** la réussite de la mise à jour/insertion principale. Si la chaîne a besoin du nouvel identifiant de la ligne, le prendre depuis l'état du formulaire (ou utiliser `chain` avec le bon ordonnancement). |
| Action de barre d'outils avec `source = COLUMN` mais sans ligne sélectionnée. | La liaison se résout à NULL ; la requête échoue ou opère sur la mauvaise ligne. | Définir un `default` sur la liaison, ou déplacer l'action vers le menu ligne pour qu'elle se déclenche toujours avec une ligne en contexte. |
| `refresh` sans écriture préalable. | La grille se recharge mais rien n'a changé — UX déroutante. | Utiliser `refresh` après les écritures, ou quand une action externe (un acquittement de webhook) a changé les données affichées par la grille. |
| `confirm` après l'action destructive au lieu d'avant. | L'utilisateur obtient une invite « êtes-vous sûr ? » après que la suppression a déjà eu lieu. | `confirm` doit être la **première** action de la chaîne. |
| Estampillage de `CREATED_BY` dans `on_save` mais la colonne est obligatoire dans le dialogue. | L'Enregistrer du dialogue échoue car la colonne est vide. | Soit ne pas rendre la colonne obligatoire dans le dialogue (le hook la remplit), soit utiliser la règle `LOGIN` du dictionnaire sur la colonne pour pré-remplir au chargement du formulaire. |

---

## Étapes suivantes

- [Onglets imbriqués](./nested-tabs.md) — intégrer un formulaire d'enregistrement enfant ou une grille de lignes liées.
- [Liaison de paramètres](../queries/parameter-binding.md) — la référence complète des ParamBind.
- [Concepts → Écrans](./overview.md) — référence approfondie pour les types d'action et le cycle de vie.
