---
title: Créer une requête personnalisée
description: "Écrire une requête isolée à la main — l'onglet Non classées, le formulaire d'éditeur, la bascule writable, le bloc params, l'éditeur SQL avec autocomplétion."
keywords: [Liberty Framework, requête personnalisée, SQL manuel, Non classées, QueryDef, writable, params]
---

# Créer une requête personnalisée

Quand l'assistant ne convient pas — analytique, rapports, jointures multi-tables, appels de procédures stockées, tout ce qui ne se projette pas 1 pour 1 sur une seule table — écrivez la requête à la main sous l'onglet **Non classées**.

Cette page parcourt le formulaire d'éditeur champ par champ, en s'appuyant sur la forme vérifiée du schéma `QueryDef`.

---

## Où le trouver

**Paramètres → Connecteurs → sélectionnez un connecteur → barre de modes : Non classées → ＋ Ajouter une requête**.

La page demande un nom, crée une requête `custom` vide et ouvre son éditeur.

---

## Le formulaire d'éditeur

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ce-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="440" rx="14" fill="url(#ce-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Connecteurs · [connectors.crm] · Non classées</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="60" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="70" y="94" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">← Retour</text>
  <text x="115" y="94" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">monthly_revenue</text>
  <rect x="720" y="76" width="70" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="755" y="93" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Renommer</text>
  <rect x="796" y="76" width="62" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="827" y="93" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Dupliquer</text>
  <rect x="864" y="76" width="64" height="26" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="896" y="93" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Supprimer</text>

  <text x="40" y="128" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">type</text>
  <rect x="200" y="116" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="131" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">custom ▾</text>

  <text x="40" y="160" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">writable</text>
  <rect x="200" y="148" width="20" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="234" y="162" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">SELECT seul quand inactif — activer pour INSERT / UPDATE / DELETE / CALL</text>

  <text x="40" y="194" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">sql</text>
  <rect x="200" y="184" width="730" height="160" rx="6" fill="rgba(0,0,0,0.40)" stroke="#334155"/>
  <text x="216" y="206" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="216" y="222" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  date_trunc('month', invoice_date) AS month,</text>
  <text x="216" y="238" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  SUM(total_ht) AS revenue</text>
  <text x="216" y="254" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">FROM</text>
  <text x="216" y="270" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  invoices</text>
  <text x="216" y="286" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">WHERE</text>
  <text x="216" y="302" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  invoice_date BETWEEN :from_date AND :to_date</text>
  <text x="216" y="318" fill="#7dd3fc" fontSize="11" fontFamily="ui-monospace, monospace">GROUP BY</text>
  <text x="216" y="334" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">  1 ORDER BY 1</text>

  <text x="40" y="368" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">params</text>
  <rect x="200" y="358" width="730" height="38" rx="6" fill="rgba(0,0,0,0.30)" stroke="#334155"/>
  <text x="216" y="380" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">from_date</text>
  <text x="320" y="380" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Début de période</text>
  <text x="450" y="380" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">default:</text>
  <text x="500" y="380" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-01-01</text>
  <text x="850" y="380" fill="#4a9eff" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">＋ Ajouter un paramètre</text>

  <text x="40" y="412" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">label · description</text>
  <text x="40" y="428" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">(Avancé)</text>
  <rect x="200" y="404" width="730" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="419" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Revenu mensuel · Total agrégé des factures par mois, filtre de période sur invoice_date</text>
</svg>

---

## Champ par champ

### `name`

En lecture seule dans l'éditeur. Le nom est fixé au clic sur *＋ Ajouter une requête* et est la clé de permission de la requête — `sql:<connector>:<name>`. Renommez via le bouton **Renommer** en haut (multi-fichiers — chaque référence d'écran/menu/dictionnaire est mise à jour en une seule fois ; refuse de s'exécuter sur des modifications locales non enregistrées).

Règles de nommage :

| Règle | Pourquoi |
|---|---|
| Lettres, chiffres, tirets bas. | Clé TOML, segment d'URL et chaîne de permission d'un seul coup. |
| Commence par une lettre ou un tiret bas. | Idem. |
| Évitez les suffixes `_get` / `_put` / `_post` / `_delete`. | L'onglet Tables le ramasserait et tenterait de le regrouper dans un jeu CRUD. |

Conventions de nommage qui passent à l'échelle :

| Motif | Exemple |
|---|---|
| `<entité>_<action>` | `customer_balance`, `invoice_send` |
| `<verbe>_<nom>` | `get_top_clients`, `mark_paid` |
| `report_<sujet>` | `report_monthly_revenue`, `report_overdue_invoices` |

### `type`

Liste déroulante — détermine le classement par onglet. Pour une requête isolée écrite à la main, conservez `custom`. Les autres valeurs déplacent la requête ailleurs sur la page :

| Valeur | Onglet |
|---|---|
| `custom` | Non classées (cette page). |
| `table` | Tables (utile uniquement quand le nom respecte la convention `<base>_<crud>`). |
| `sequence` | Séquences. |
| `lookup` | Recherches. |

Changer `type` ne réécrit pas la requête — seulement la page qui la classe. Pour les séquences et recherches, préférez la [fenêtre Scaffold](./sequences-and-lookups.md), qui écrit l'entrée du dictionnaire en parallèle.

### `writable`

Bascule booléenne.

| État | Autorisé |
|---|---|
| **Inactif** (défaut) | Instructions `SELECT` et CTE-seules. |
| **Actif** | `INSERT` / `UPDATE` / `DELETE` / `CALL` / `MERGE` / DDL — tout ce qui modifie la base. |

Laissez-le inactif pour les requêtes de lecture — le garde-fou refuse sinon toute exécution non-SELECT. L'Assistant CRUD la positionne déjà pour `_put` / `_post` / `_delete` ; sur une requête écrite à la main, activez-la vous-même au besoin.

### `sql`

L'éditeur SQL accepte une instruction unique (cas courant) ou une map par dialecte — voir [Variantes SQL par dialecte](./per-dialect-sql.md).

Trois fonctions offertes par l'éditeur :

| Fonction | Rôle |
|---|---|
| **Coloration syntaxique** | Mots-clés colorés ; parenthèses non appariées signalées. |
| **Autocomplétion** | Tables et colonnes provenant du pool du connecteur. Appuyez sur Ctrl+Espace pour l'invoquer. |
| **Placeholders `:name`** | Tout `:identifier` du SQL est reconnu comme paramètre lié — déclarez-le dans le bloc `params` ci-dessous. |

Quelques règles tirées de la façon dont le moteur lie les paramètres :

- Utilisez `:name` pour les paramètres, jamais l'interpolation littérale de chaîne. Le moteur les lie via le pilote SQLAlchemy — `'%' || :search || '%'` est bien le motif LIKE attendu, pas `'%' + search + '%'`.
- Le suffixe réservé `_ORIGINAL` est utilisé par l'Enregistrer du dialogue pour le filtrage WHERE de l'UPDATE (voir [Créer depuis une table de base](./create-from-database.md#why-name_original-on-update) pour la convention).
- Une seule instruction par requête. Pour des instructions chaînées, utilisez un `CALL` vers une procédure stockée ou découpez en plusieurs requêtes Liberty.

### `params`

La liste des paramètres déclarés — chaque `:placeholder` du SQL obtient une ligne. Chaque entrée porte :

| Champ | Rôle |
|---|---|
| **`name`** | Le nom du placeholder (sans les deux-points). Mis en correspondance sans tenir compte de la casse. |
| **`label`** | Ce que l'entrée de formulaire affiche au-dessus du champ. Retombe sur `name` quand vide. |
| **`default`** | Valeur pré-remplie. Vide signifie que l'appelant peut l'omettre (le moteur lie un `NULL` SQL). |

Ajouter des lignes ici ne modifie pas le SQL — cela indique simplement aux écrans et à l'assistant IA comment rendre une entrée pour chaque placeholder. Sautez ce bloc quand la requête n'a pas de `:placeholders` ; le moteur accepte des paramètres non déclarés à l'exécution (un dialogue de colonne peut lier n'importe quel `:column_name` qu'il rencontre).

Pour lier des valeurs depuis d'autres écrans/sources (un clic sur une ligne, un filtre parent, une action chaînée), voir [Liaison de paramètres](./parameter-binding.md).

### `label` (Avancé)

Nom court affiché dans les listes déroulantes ailleurs — le concepteur d'écran, le sélecteur de cible de menu, l'éditeur d'actions. Vaut par défaut le nom de la requête.

### `description` (Avancé)

Texte plus long. Apparaît dans la liste Tables sous le nom de base, et comme infobulle quand l'opérateur survole la requête dans le sélecteur de requête-lecture du concepteur d'écran.

---

## Actions de la barre haute

Les boutons en haut de l'éditeur de requête unique :

| Action | Rôle | Notes |
|---|---|---|
| **← Retour** | Renvoie à la liste Non classées (sans enregistrement). | Les modifications non enregistrées restent dans l'état modifié de la page — *Enregistrer* sur la barre d'outils du haut les persiste. |
| **✎ Renommer** | Renommage multi-fichiers. | Refuse sur des modifications locales non enregistrées ; met à jour chaque référence. |
| **⎘ Dupliquer** | Duplication d'une seule requête — demande un nouveau nom. | Suggestion par défaut `<name>_copy`. Voir [Dupliquer une requête ou un connecteur](./clone.md). |
| **🗑 Supprimer** | Retire la requête du connecteur. | Avec une fenêtre de confirmation. |

---

## Enregistrement et rechargement

L'**Enregistrer** au niveau page, en haut de la page Connecteurs, valide le fichier connecteur et déclenche un rechargement à chaud. La nouvelle requête est appelable immédiatement à `/api/sql/<connector>/<name>` (avec les paramètres liés en valeurs de query-string pour GET, en corps JSON pour les POST writable).

---

## Vérifier que la requête fonctionne

Le connecteur SQL ne propose pas d'onglet *Test de requête* dédié — la voie de test est l'une de ces trois :

| Voie | Quand |
|---|---|
| L'utiliser depuis un écran. | Quand l'étape suivante est de toute façon la construction de l'écran. |
| Appeler l'endpoint REST directement. | Pour un test rapide — `GET /api/sql/<connector>/<query>?from_date=2026-01-01&to_date=2026-01-31`. |
| Demander à l'assistant IA. | « Montre-moi le résultat de `monthly_revenue` pour le mois dernier » — l'assistant exécute la requête et retourne les lignes. Nécessite les permissions `ai:chat` et `sql:<connector>:<query>`. |

La voie REST est la plus rapide pour déboguer — les messages d'erreur reviennent tels quels et les paramètres passent par l'URL.

---

## Quand préférer cet outil à l'assistant

| Utiliser l'assistant | Utiliser l'éditeur personnalisé |
|---|---|
| La table existe en base et vous voulez les formes CRUD standard. | La requête joint plusieurs tables. |
| Vous voulez le câblage `:NAME_ORIGINAL` cohérent sur UPDATE. | La requête est un agrégat `GROUP BY`. |
| Vous voulez un `_delete` filtré sur la clé primaire. | La requête retourne une colonne dérivée que la table n'a pas. |
| | La requête est un appel de procédure stockée. |
| | La requête est une écriture qui n'est pas un simple UPDATE / INSERT / DELETE (un `MERGE`, un `TRUNCATE`). |

---

## Et ensuite

- [Dupliquer une requête ou un connecteur](./clone.md) — partir d'une requête existante plutôt que de zéro.
- [Liaison de paramètres](./parameter-binding.md) — donner aux paramètres `:placeholder` libellés, valeurs par défaut et sources liées.
- [Variantes SQL par dialecte](./per-dialect-sql.md) — livrer une requête unique avec des SQL différents sur Postgres et Oracle.
