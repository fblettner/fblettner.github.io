---
title: Créer une requête personnalisée
description: "Écrire une requête indépendante à la main — la vue Requêtes, le formulaire de l'éditeur, le switch writable, le bloc params, l'éditeur SQL avec autocomplétion et jetons."
keywords: [Liberty Next, requête personnalisée, SQL manuel, Requêtes, QueryDef, writable, params, jetons]
---

# Créer une requête personnalisée

Quand l'assistant CRUD ne convient pas — analyses, rapports, jointures sur plusieurs tables, appels de procédures stockées, tout ce qui ne correspond pas à une seule table — la requête s'écrit à la main dans la vue **Requêtes**.

Cette page détaille le formulaire de l'éditeur, champ par champ.

---

## Accès

**Liberty Next → Construire → Connecteurs → choix du connecteur → barre de modes : Requêtes → ＋ Ajouter une requête**.

La page demande un nom, crée une requête vide et ouvre son éditeur.

---

## Le formulaire de l'éditeur

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ce-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="440" rx="14" fill="url(#ce-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Connecteurs · [connectors.crm] · Requêtes</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="60" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="70" y="94" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">← Retour</text>
  <text x="115" y="94" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">monthly_revenue</text>
  <rect x="720" y="76" width="70" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="755" y="93" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Renommer</text>
  <rect x="796" y="76" width="62" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="827" y="93" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⎘ Cloner</text>
  <rect x="864" y="76" width="64" height="26" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="896" y="93" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑 Supprimer</text>

  <text x="40" y="128" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">name</text>
  <rect x="200" y="116" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="212" y="131" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">monthly_revenue</text>

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

Non modifiable dans l'éditeur. Le nom est fixé à la création et sert de clé de permission à la requête — `sql:<connecteur>:<nom>`. Il se change avec le bouton **Renommer** en haut de l'éditeur : toutes les références (écrans, menus, dictionnaire…) sont mises à jour en une fois ; l'opération est refusée tant que des modifications locales ne sont pas enregistrées.

Règles de nommage :

| Règle | Raison |
|---|---|
| Lettres, chiffres, tirets bas. | Le nom sert à la fois de clé TOML, de segment d'URL et de permission. |
| Commence par une lettre ou un tiret bas. | Idem. |

Conventions de nommage qui tiennent dans la durée :

| Motif | Exemple |
|---|---|
| `<entité>_<action>` | `customer_balance`, `invoice_send` |
| `<verbe>_<nom>` | `get_top_clients`, `mark_paid` |
| `report_<sujet>` | `report_monthly_revenue`, `report_overdue_invoices` |

### `writable`

Switch.

| État | Instructions acceptées |
|---|---|
| **Désactivé** (défaut) | `SELECT`, y compris avec des CTE. |
| **Activé** | `INSERT` / `UPDATE` / `DELETE` / `CALL` / `MERGE` / DDL — toute instruction qui modifie la base. |

Une requête de lecture le laisse désactivé : toute instruction autre qu'un SELECT est alors refusée. L'assistant CRUD l'active déjà pour `_put` / `_post` / `_delete` ; sur une requête écrite à la main, il s'active au besoin.

### `sql`

L'éditeur SQL accepte une instruction unique (cas courant) ou une variante par base de données — voir [Variantes SQL par dialecte](./per-dialect-sql.md).

Ce que propose l'éditeur :

| Fonction | Rôle |
|---|---|
| **Coloration syntaxique** | Mots-clés colorés. |
| **Autocomplétion** | Les tables après `FROM` / `JOIN` / `INTO` / `UPDATE`, les colonnes après `<table>.`, lues dans le pool du connecteur. Ctrl+Espace ouvre la liste. |
| **Token** | Insère une valeur renseignée par le serveur à l'exécution : `{{LOGIN}}`, `{{SYSDATE}}`, `{{SYSTIME}}`, `{{SYSTIMESTAMP}}`, `{{JDEDATE}}`, `{{JDETIME}}`, `{{PID}}`, `{{JOBN}}` — voir [Liaison des paramètres](./parameter-binding.md#tokens). |
| **Pool schemas** | Insère un jeton de schéma du pool, pour que le même SQL s'exécute sur le schéma d'un autre environnement. |
| **Paramètres `:nom`** | Tout `:identifiant` du SQL est un paramètre lié — à déclarer dans le bloc `params` ci-dessous. |

Quelques règles liées à la façon dont le moteur lie les paramètres :

- Les valeurs passent par des paramètres `:nom`, jamais par concaténation dans le texte SQL. Le moteur les lie par le pilote de la base : le motif LIKE s'écrit `'%' || :search || '%'`.
- Le suffixe `_ORIGINAL` est réservé : l'enregistrement du dialogue l'utilise pour la clause WHERE d'un UPDATE (voir [Créer depuis une table de la base](./create-from-database.md#why-name_original-on-update)).
- Une seule instruction par requête. Pour enchaîner plusieurs instructions, appeler une procédure stockée (`CALL`) ou répartir le travail sur plusieurs requêtes.

### `params`

La liste des paramètres déclarés — une ligne par `:nom` du SQL :

| Champ | Rôle |
|---|---|
| **`name`** | Le nom du paramètre, sans les deux-points. Comparé sans tenir compte de la casse. |
| **`label`** | Le libellé affiché au-dessus du champ de saisie. À défaut, `name`. |
| **`default`** | La valeur proposée. Vide : l'appelant peut l'omettre, et le moteur lie un `NULL`. |

Ces lignes ne modifient pas le SQL : elles indiquent aux écrans et à l'assistant IA comment présenter une saisie pour chaque paramètre. Une requête sans paramètre s'en passe ; le moteur accepte d'ailleurs des paramètres non déclarés (un dialogue peut lier n'importe quel `:nom_de_colonne`).

Pour lier des valeurs venant d'ailleurs (clic sur une ligne, filtre parent, action enchaînée), voir [Liaison des paramètres](./parameter-binding.md).

### `label` (Advanced)

Nom court affiché dans les listes déroulantes — éditeur d'écran, choix de la cible d'un menu, éditeur d'actions. À défaut, le nom de la requête.

### `description` (Advanced)

Texte plus long, affiché dans la liste Tables sous le nom de la table, et en infobulle dans le choix de la requête de lecture de l'éditeur d'écran.

---

## Boutons de l'éditeur

| Bouton | Rôle | Remarques |
|---|---|---|
| **← Retour** | Revient à la liste Requêtes, sans enregistrer. | Les modifications restent en attente — *Enregistrer* dans la barre du haut les écrit. |
| **Find usages** | Indique où la requête est utilisée (écrans, graphiques, tableaux de bord, dictionnaire…). | |
| **✎ Renommer** | Renomme la requête dans tous les fichiers. | Refusé si des modifications locales ne sont pas enregistrées ; met à jour chaque référence. |
| **Changer le type** | Déplace la requête vers Tables, Séquences ou Lookups. | Voir [les quatre types de requêtes](./overview.md#kinds). |
| **Déplacer** | Déplace la requête vers un autre connecteur SQL et réécrit les références. | |
| **⎘ Cloner** | Copie la requête sous un nouveau nom. | Nom proposé : `<nom>_copy`. Voir [Cloner une requête ou un connecteur](./clone.md). |
| **🗑 Supprimer** | Retire la requête du connecteur. | Après confirmation. |

---

## Enregistrement et rechargement

**Enregistrer**, en haut de la page Connecteurs, écrit le fichier du connecteur et recharge la configuration à chaud. La nouvelle requête répond aussitôt sur `/api/sql/<connecteur>/<nom>` (paramètres en query-string pour un GET, en corps JSON pour un POST sur une requête d'écriture).

---

## Vérifier la requête

Le connecteur SQL n'a pas d'onglet de test dédié ; trois moyens existent :

| Moyen | Usage |
|---|---|
| L'utiliser depuis un écran. | Quand l'écran est de toute façon l'étape suivante. |
| Appeler directement l'API REST. | Pour un contrôle rapide — `GET /api/sql/<connecteur>/<requête>?from_date=2026-01-01&to_date=2026-01-31`. |
| Interroger l'assistant IA. | « Montre-moi le résultat de `monthly_revenue` pour le mois dernier » — si le connecteur est ouvert à l'assistant, celui-ci exécute la requête de lecture et renvoie les lignes. |

L'API REST est le moyen le plus rapide pour le diagnostic : les messages d'erreur reviennent tels quels et les paramètres passent dans l'URL.

---

## Requête manuelle ou assistant CRUD

| Assistant CRUD | Éditeur de requête |
|---|---|
| La table existe dans la base et les quatre requêtes standard suffisent. | La requête joint plusieurs tables. |
| Le câblage `:NOM_ORIGINAL` de l'UPDATE doit rester homogène. | La requête est un agrégat `GROUP BY`. |
| Un `_delete` sur la clé primaire est attendu. | La requête renvoie une colonne calculée absente de la table. |
| | La requête appelle une procédure stockée. |
| | La requête écrit autrement qu'un simple UPDATE / INSERT / DELETE (`MERGE`, `TRUNCATE`). |

---

## Pour aller plus loin

- [Cloner une requête ou un connecteur](./clone.md) — partir d'une requête existante.
- [Liaison des paramètres](./parameter-binding.md) — libellés, valeurs par défaut et sources des paramètres `:nom`.
- [Variantes SQL par dialecte](./per-dialect-sql.md) — une même requête avec un SQL différent sous Postgres et sous Oracle.
