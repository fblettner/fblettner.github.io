---
title: Écrans
description: "Un Screen décrit un objet métier : sa requête de lecture, ses requêtes d'écriture optionnelles, et un dialogue avec onglets et champs. Tout ce dont l'interface a besoin pour afficher la grille, le formulaire modal et les actions tient dans une seule entrée TOML."
keywords: [Liberty Next, écran, dialogue, onglet, champ, objet métier, ScreenDialog, audit, action, menu de ligne, condition]
---

# Écrans

Un **Screen** rassemble tout ce qu'il faut pour rendre un objet métier dans l'interface : la grille (alimentée par la `read_query`), les requêtes CRUD optionnelles, la définition du formulaire modal, le drapeau d'audit et le menu de ligne. Un Screen par objet métier — la grille, les onglets, les champs et les actions sont déclarés dans une seule entrée TOML.

Les écrans vivent dans `config/screens.toml`, organisés sous `[screens.<app>.<id>]`. Ils sont rechargeables à chaud avec le reste de la configuration.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="440" rx="14" fill="url(#sc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">📋 Utilisateurs · Grille</text>
  <rect x="690" y="30" width="90" height="22" rx="5" fill="url(#sc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="735" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">▶ Exécuter</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="82" width="540" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="98" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ID · NOM · EMAIL · STATUT · VILLE · ⋮</text>

  <rect x="240" y="110" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="124" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">42  ·  Anna Lefèvre  ·  anna@…  ·</text>
  <rect x="468" y="113" width="46" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="491" y="123" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="528" y="124" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Paris</text>
  <text x="764" y="124" fill="#64748b" fontSize="10">⋮</text>

  <rect x="240" y="134" width="540" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="148" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">43  ·  Marc Dupont   ·  marc@…  ·</text>
  <rect x="468" y="137" width="46" height="14" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="491" y="147" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactif</text>
  <text x="528" y="148" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Lyon</text>

  <rect x="240" y="158" width="540" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="172" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">44  ·  Léa Martin    ·  lea@…   ·</text>
  <rect x="468" y="161" width="46" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="491" y="171" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="528" y="172" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Marseille</text>

  <line x1="240" y1="196" x2="780" y2="196" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="208" width="540" height="240" rx="10" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="252" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIALOGUE · Utilisateur #42</text>
  <text x="752" y="232" fill="#64748b" fontSize="10" textAnchor="end">⛶ ✕</text>

  <rect x="252" y="244" width="74" height="22" rx="5" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="289" y="259" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Général</text>
  <rect x="330" y="244" width="80" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="370" y="259" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Adresse</text>
  <rect x="414" y="244" width="74" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="451" y="259" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit</text>

  <text x="252" y="290" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM *</text>
  <rect x="320" y="280" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="295" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">Anna Lefèvre</text>
  <text x="514" y="290" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUT *</text>
  <rect x="586" y="280" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="594" y="295" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">Actif ▾</text>

  <text x="252" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EMAIL</text>
  <rect x="320" y="312" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="327" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">anna@example.com</text>
  <text x="514" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VILLE</text>
  <rect x="586" y="312" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="594" y="327" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">PAR — Paris ▾</text>

  <text x="252" y="354" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADMIN <text fill="#64748b" fontStyle="italic">(visible_when: STATUT = Actif)</text></text>
  <rect x="320" y="344" width="20" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="330" y="354" fill="white" fontSize="10" textAnchor="middle">✓</text>

  <text x="252" y="384" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MOT DE PASSE <text fill="#64748b" fontStyle="italic">(règle PASSWORD)</text></text>
  <rect x="320" y="374" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="389" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">••••••••••</text>

  <rect x="240" y="412" width="120" height="28" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="300" y="430" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Annuler</text>
  <rect x="660" y="412" width="120" height="28" rx="6" fill="url(#sc-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="720" y="430" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">💾 Enregistrer</text>

  <rect x="20" y="110" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grille · read_query</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonnes typées au runtime</text>
  <line x1="220" y1="126" x2="240" y2="122" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sc-arrow)"/>

  <rect x="20" y="208" width="200" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="223" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dialogue · onglets</text>
  <text x="30" y="236" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cols, hide_on_add / edit</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">onglet audit automatique</text>
  <line x1="220" y1="232" x2="240" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sc-arrow)"/>

  <rect x="820" y="280" width="160" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choix du widget</text>
  <text x="830" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déterminé par la règle de colonne</text>
  <text x="830" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">BOOLEAN · ENUM · LOOKUP</text>
  <line x1="820" y1="298" x2="766" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sc-arrow)"/>

  <rect x="820" y="344" width="160" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="359" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Condition par champ</text>
  <text x="830" y="372" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">visible_when / required_when</text>
  <text x="830" y="384" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">évaluées sur l'état du formulaire</text>
  <line x1="820" y1="358" x2="500" y2="354" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sc-arrow)"/>
</svg>

---

## Déclarer un écran

```toml
[screens.myapp.users]
label        = "Users"
description  = "Application users"
read_query   = "users_get"            # requis
update_query = "users_put"
insert_query = "users_post"
delete_query = "users_delete"
auto_load    = true
audit        = true                   # ajoute l'onglet d'audit au dialogue
editable     = true                   # un clic sur une ligne ouvre le formulaire modal
uploadable   = true                   # active l'import Excel

[[screens.myapp.users.dialog.tabs]]
id    = "general"
label = "General"
cols  = 2
fields = [
  { column = "ID",       hidden = true },
  { column = "NAME",     required = true, colspan = 2 },
  { column = "EMAIL" },
  { column = "STATUS" },
  { column = "CITY" },
  { column = "ADMIN",    visible_when = [{ field = "STATUS", value = "Y" }] },
  { column = "PASSWORD", hide_on_edit = true },
]
```

Le champ `connector` est optionnel — il reprend par défaut le connecteur qui porte la `read_query`. Les écrans mixtes (un connecteur pour la lecture, un autre pour l'écriture) sont autorisés.

---

## Requêtes

Un Screen peut référencer jusqu'à quatre requêtes :

| Champ | Rôle | Permission |
|---|---|---|
| `read_query` | Le `SELECT` qui alimente la grille. Obligatoire. | `sql:<conn>:<read_query>` |
| `update_query` | Le `UPDATE` appelé sur *Enregistrer* en mode modification. Optionnel. | `sql:<conn>:<update_query>` + `writable = true` sur la requête |
| `insert_query` | Le `INSERT` appelé sur *Enregistrer* en mode création. Optionnel. | `sql:<conn>:<insert_query>` + `writable = true` |
| `delete_query` | Le `DELETE` appelé depuis le menu de ligne. Optionnel. | `sql:<conn>:<delete_query>` + `writable = true` |

Les requêtes que l'utilisateur peut effectivement exécuter sont renvoyées par `GET /api/screens/{app}/{id}` — l'interface React masque les boutons *Enregistrer*, *Ajouter* et *Supprimer* en conséquence.

---

## Dialogue

Le `dialog` décrit le formulaire modal. Il est défini **directement** sur l'écran — pas de seconde table à consulter.

### Onglets

```toml
[[screens.myapp.users.dialog.tabs]]
id           = "general"
label        = "General"
cols         = 2                # largeur de la grille CSS (2 = deux colonnes)
hide_on_add  = false
hide_on_edit = false
```

| Champ | Description |
|---|---|
| `id` | Identifiant de l'onglet — apparaît dans l'URL au clic. |
| `label` / `l` | Titre de l'onglet ; `l = { fr = "..." }` ajoute la traduction. |
| `cols` | Largeur de la grille CSS. Le `colspan` de chaque champ s'élargit dans cette grille. |
| `hide_on_add` / `hide_on_edit` | Masque l'onglet en mode création ou modification. |
| `fields` | Liste ordonnée de `ScreenField`. |

### Champs

```toml
fields = [
  { column = "NAME",     required = true },
  { column = "STATUS",   required = true, default = "Y" },
  { column = "PASSWORD", hide_on_edit = true, hidden_in_view = true },
  { column = "ADMIN",    visible_when  = [{ field = "STATUS", value = "Y" }],
                         required_when = [{ field = "ROLE",   value = ["admin", "owner"] }] },
]
```

Pour chaque champ :

| Champ | Effet |
|---|---|
| `column` | Colonne du résultat de `read_query`. Le widget est choisi d'après la règle de cette colonne (BOOLEAN → case à cocher, ENUM → `SearchSelect`, LOOKUP → `SearchSelect`, plus date / nombre / texte selon `format`/`type`). |
| `hidden` | Masque le champ. |
| `disabled` | Affiche un écho en lecture seule. |
| `required` | Marque le libellé d'un `*`. |
| `colspan` | Élargit dans la grille `cols` de l'onglet. |
| `default` | Valeur initiale à la création. |
| `hide_on_add` / `hide_on_edit` | Visibilité selon le mode (création ou modification). |
| `visible_when` / `required_when` / `disabled_when` | Conditions par champ (voir ci-dessous). |

### Conditions par champ

Chaque règle `*_when` se réfère à **un autre champ du même dialogue** (jamais à un filtre serveur). La règle se déclenche quand la valeur courante de ce champ dans le formulaire est égale à `value` (ou présente dans `value` quand c'est une liste). Plusieurs règles dans une même liste sont combinées en ET logique ; la règle est active quand toutes ses conditions sont vérifiées.

Les drapeaux statiques (`visible: false`, `required: false`, `disabled: false`) agissent comme valeur par défaut quand la liste `*_when` correspondante est vide.

---

## Audit

Avec `audit = true`, l'onglet **Audit** est ajouté automatiquement au dialogue. Il expose :

- `AUD_CREATED_BY` / `AUD_CREATED_AT`
- `AUD_UPDATED_BY` / `AUD_UPDATED_AT`

Ces champs sont remplis côté serveur à l'enregistrement, depuis `principal.username` et `SYSDATE`. L'onglet est en lecture seule.

---

## Actions et menu de ligne

| Champ | Rôle |
|---|---|
| `actions` | Boutons d'action en haut du dialogue qui déclenchent des appels connecteur. Même mécanique que les liaisons [Actions](/nomaubl/management/actions) de NomaUBL. *Slice 4 — runtime à venir.* |
| `row_menu` | Menu `⋮` par ligne dans la grille. *Slice 6 — runtime à venir.* |

Ces champs sont déjà présents dans le schéma `Screen` ; le runtime est en avance dans NomaUBL et est en cours de portage. Voir le fichier `docs/PLAN.md` du dépôt du framework pour l'ordre des slices.

---

## Endpoints REST

| Méthode | Chemin | Rôle |
|---|---|---|
| `GET` | `/api/screens` | Tous les écrans accessibles, regroupés par app (vue liste — sans le corps du dialogue ni les actions). |
| `GET` | `/api/screens/{app}` | Tous les écrans accessibles pour une app donnée. Renvoie `404` quand aucun écran ne survit au filtrage. |
| `GET` | `/api/screens/{app}/{id}` | L'écran complet, avec `dialog`, `actions` et `row_menu`. |

L'ensemble est **filtré par les permissions** : un écran dont l'utilisateur ne peut pas exécuter la `read_query` est masqué dans `GET /api/screens` et renvoie `403` sur la route par identifiant.

---

## Conseils & bonnes pratiques

- **Un écran par objet métier.** Résister à la tentation de regrouper plusieurs lectures dans le même écran : la grille est rapide, et un second écran avec son propre dialogue est plus lisible qu'un dialogue à douze onglets.
- **Marquer les champs vraiment obligatoires avec `required`.** Cela évite un aller-retour : le dialogue refuse d'enregistrer tant qu'un champ requis n'est pas rempli, au lieu de laisser le backend rejeter la ligne.
- **Les conditions par champ sont évaluées en direct.** `visible_when` / `required_when` / `disabled_when` sont attachées au champ et combinées en ET logique. Chaque règle ne référence qu'un autre champ du même dialogue, ce qui rend le comportement prévisible.
- **L'audit remplit lui-même l'utilisateur et l'horodatage.** Ne pas lier manuellement `AUD_CREATED_BY` ou `AUD_UPDATED_AT` à un champ de formulaire — ils sont renseignés côté serveur depuis le principal et `SYSDATE` au moment de l'enregistrement.
- **Les écrans inter-connecteurs sont légitimes.** Un écran qui lit dans `myapp` et écrit dans un connecteur d'audit est parfaitement supporté. Le choix du connecteur se fait sur la requête, pas sur l'écran.
