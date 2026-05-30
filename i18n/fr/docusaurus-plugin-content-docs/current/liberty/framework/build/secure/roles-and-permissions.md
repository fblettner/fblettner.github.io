---
title: Rôles et permissions
description: "Composer les rôles avec le PermissionPicker — baseline (Aucun accès / Accès complet) plus règles d'autorisation / de refus par surface. La grammaire complète, l'ordre de résolution, les recettes standard."
keywords: [Liberty Framework, rôles, permissions, AccessBuilder, PermissionPicker, allow, deny, baseline, sql, menu, tableau de bord]
---

# Rôles et permissions

Un **rôle** dans Liberty est un nom + une liste de chaînes de permissions. Les utilisateurs reçoivent des rôles ; les rôles accordent ou refusent ce que les utilisateurs peuvent faire.

L'onglet Paramètres → Accès → Rôles est l'endroit où les construire. La page cache chaque détail des chaînes de permissions derrière un **PermissionPicker** — on ne tape pas `sql:crm:customers_get` ; on sélectionne **Requête → customers → customers_get** dans des listes déroulantes et le picker génère la chaîne.

---

## L'onglet Rôles

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ro-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#ro-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Accès</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="80" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Utilisateurs</text>
  <rect x="128" y="78" width="80" height="26" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="168" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🛡 Rôles</text>
  <rect x="880" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="920" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Ajouter un rôle</text>

  <rect x="40" y="118" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="140" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">admin</text>
  <text x="56" y="158" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Équivalent superutilisateur complet — baseline générique.</text>
  <rect x="850" y="130" width="100" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="900" y="145" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">Accès complet</text>

  <rect x="40" y="182" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="204" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">analyst</text>
  <text x="56" y="222" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Accès complet, sauf les opérations destructives.</text>
  <rect x="830" y="194" width="120" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="890" y="209" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">3 règles</text>

  <rect x="40" y="246" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="268" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">reader</text>
  <text x="56" y="286" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Lecture seule sur l'application crm.</text>
  <rect x="830" y="258" width="120" height="22" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="890" y="273" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">2 règles</text>

  <rect x="40" y="310" width="920" height="48" rx="8" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeDasharray="3,3"/>
  <text x="500" y="338" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Cliquer sur une ligne pour ouvrir l'éditeur de rôle.</text>
</svg>

Chaque carte montre l'identifiant du rôle, sa description et un décompte des règles d'autorisation / de refus (ou une pastille *Accès complet* quand la baseline est `*` sans restriction supplémentaire).

---

## L'éditeur de rôle

Cliquer sur une ligne de rôle pour ouvrir l'éditeur. Il comporte trois parties :

| Section | Notes |
|---|---|
| **Nom du rôle** | En lecture seule après création. Renommer demande de supprimer et de recréer avec le nouveau nom (pas de renommage transversal pour les rôles — les références chez les utilisateurs se mettent à jour automatiquement puisque les utilisateurs portent les noms de rôles, pas les identifiants). |
| **Description** | Texte libre. Affichée sur la carte. |
| **Permissions** | Le **PermissionPicker** — baseline + règles d'autorisation / de refus. |

---

## Le PermissionPicker — anatomie

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="pp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#pp-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Éditeur de rôle · analyst</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASELINE</text>
  <rect x="40" y="98" width="120" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="100" y="116" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘ Aucun accès</text>
  <rect x="168" y="98" width="120" height="28" rx="6" fill="rgba(34,197,94,0.20)" stroke="rgba(34,197,94,0.40)"/>
  <text x="228" y="116" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Accès complet</text>
  <text x="300" y="116" fill="#64748b" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">tout, moins les refus ci-dessous</text>

  <text x="40" y="160" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÈGLES</text>
  <rect x="40" y="170" width="320" height="24" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="50" y="186" fill="#ef4444" fontSize="11" fontFamily="ui-monospace, monospace">!sql:crm:customers_delete</text>
  <text x="340" y="186" fill="#ef4444" fontSize="11" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>

  <rect x="40" y="200" width="320" height="24" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="50" y="216" fill="#ef4444" fontSize="11" fontFamily="ui-monospace, monospace">!menu:crm:admin</text>
  <text x="340" y="216" fill="#ef4444" fontSize="11" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>

  <rect x="40" y="230" width="320" height="24" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="50" y="246" fill="#ef4444" fontSize="11" fontFamily="ui-monospace, monospace">!ai:chat</text>
  <text x="340" y="246" fill="#ef4444" fontSize="11" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>

  <line x1="20" y1="276" x2="980" y2="276" stroke="#1f2937"/>
  <text x="40" y="298" fill="#94a3b8" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AJOUTER UNE RÈGLE</text>

  <rect x="40" y="308" width="80" height="28" rx="6" fill="rgba(34,197,94,0.20)" stroke="rgba(34,197,94,0.40)"/>
  <text x="80" y="326" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Autoriser</text>
  <rect x="128" y="308" width="80" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="168" y="326" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘ Refuser</text>

  <rect x="216" y="308" width="140" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="226" y="326" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Menu ▾</text>

  <rect x="364" y="308" width="380" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="374" y="326" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">Sélectionnez un menu…</text>

  <rect x="752" y="308" width="80" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="792" y="326" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Ajouter</text>
</svg>

### La baseline

Deux boutons, mutuellement exclusifs :

| Baseline | Liste des permissions | Sémantique |
|---|---|---|
| **Aucun accès** | démarre vide | Rien n'est autorisé en dehors de ce qui est ajouté via des règles *Autoriser*. Le bon défaut pour les rôles **moindre privilège**. |
| **Accès complet** | démarre avec `["*"]` | Tout est autorisé en dehors de ce qui est retiré via des règles *Refuser*. Le bon défaut pour les rôles **proches du superutilisateur**. |

L'indication sous l'interrupteur lit soit *« rien, plus les autorisations ci-dessous »* soit *« tout, moins les refus ci-dessous »* selon le choix.

### La liste de règles

Chaque règle est une pastille colorée :

| Couleur de pastille | Signification |
|---|---|
| **Vert** | Une règle d'autorisation — `sql:crm:customers_get`, `menu:crm:pipeline`. |
| **Rouge** | Une règle de refus — les mêmes formes mais préfixées `!` en stockage (`!sql:crm:customers_delete`). |

Le ✕ de chaque pastille supprime la règle. La liste en haut du Picker est triée par ordre d'ajout.

### Ajouter une règle

Trois contrôles sous les pastilles :

| Contrôle | Ce qu'il fait |
|---|---|
| **Effet** (Autoriser / Refuser) | Interrupteur deux boutons. *Autoriser* ajoute la pastille sans préfixe `!` ; *Refuser* l'ajoute avec `!`. |
| **Type** | Liste déroulante — *Menu* / *Tableau de bord* / *Connecteur (toutes les requêtes)* / *Requête* / *Endpoint API* / *Assistant IA*. Pilote les éléments disponibles dans la liste suivante. |
| **Élément** | Une recherche-sélection alimentée selon le Type. Pour *Menu* il liste chaque élément de menu de chaque application ; pour *Connecteur* il liste les connecteurs SQL ; pour *Requête* il liste chaque requête nommée ; pour *Tableau de bord* il liste chaque identifiant de tableau de bord ; pour *Endpoint API* il liste les endpoints de chaque connecteur API ; pour *Assistant IA* il y a une entrée unique. |
| **＋ Ajouter** | Résout l'élément choisi en un ou plusieurs motifs de permissions, préfixe `!` si Refuser, ajoute à la liste de règles. |

Le picker prend en charge la **composition des motifs** afin d'éviter d'avoir à se rappeler la syntaxe `sql:<c>:<q>`. On raisonne en termes d'*« autoriser ce menu »* ou de *« refuser cette requête »* ; le stockage ressemble à `menu:crm:reports` ou `!sql:crm:customers_delete`.

### Les règles de menu ont une expansion particulière

Quand on autorise une règle **Menu**, le picker l'étend en **plusieurs** motifs de permissions :

- `menu:<app>:<id>` — pour que l'élément de menu apparaisse dans la navigation.
- `menu:<app>:<descendant_id>` — pour chaque feuille descendante (afin que les sous-menus apparaissent).
- `sql:<connector>:<target>` ou `api:<connector>:<target>` — pour la requête / le endpoint sous-jacent de chaque feuille descendante, afin que les écrans / endpoints fonctionnent réellement.

Une règle *Autoriser → Menu → Pipeline* accorde donc à l'utilisateur tout le dossier *Pipeline* et chaque écran qu'il contient, d'un seul geste. La même expansion s'applique sur *Refuser* — refuser *Menu → Admin* cache le dossier et refuse chaque écran qu'il contient.

Sans cette expansion, il faudrait ajouter une autorisation pour le menu *et* une autorisation séparée pour chaque requête sous-jacente — une corvée manuelle source d'erreurs. Le picker s'en charge.

---

## Ordre de résolution

Quand le framework vérifie une permission, il parcourt cet ordre :

1. **Vérification superutilisateur** — si l'utilisateur a `is_superuser = true`, tout est autorisé (règles de refus ignorées).
2. **Refus explicite** — si un `!<motif>` parmi les permissions cumulées des rôles de l'utilisateur correspond, rejet.
3. **Autorisation explicite** — si un motif non préfixé `!` correspond, autorisation.
4. **Refus par défaut** — sinon, rejet.

L'ordre compte. Une liste de permissions `["*", "!sql:crm:customers_delete"]` :

- `sql:crm:customers_get` → correspond à `*` (autorisation), aucun refus ne correspond → autorisé.
- `sql:crm:customers_delete` → correspond à `*` (autorisation) **et** correspond à `!sql:crm:customers_delete` (refus) → le refus l'emporte → rejeté.
- `sql:reporting:*` → correspond à `*` (autorisation), aucun refus ne correspond → autorisé.

---

## Syntaxe des motifs — la grammaire complète

Les chaînes de permissions utilisent des globs segmentés par deux-points :

| Opérateur | Signification | Exemple |
|---|---|---|
| `<mot>` | Segment littéral. | `sql`, `crm`, `customers_get`. |
| `*` (segment unique) | Correspond à un segment. | `sql:*:customers_get` correspond à `sql:crm:customers_get` et `sql:reporting:customers_get`. |
| `*` (en fin) | Correspond au reste. | `sql:crm:*` correspond à tout `sql:crm:<n'importe quoi>`. |
| `!<motif>` | Refus. | `!sql:crm:customers_delete`. |
| `*` (seul) | Caractère générique pour tout. | La baseline Accès complet. |
| `!*` | Refuser tout. | Rare ; en pratique un coupe-circuit. |

Les surfaces complètes :

| Motif | Accorde |
|---|---|
| `sql:<connector>:<query>` | Exécuter une requête SQL. |
| `sql:<connector>:*` | Exécuter toutes les requêtes SQL sur un connecteur. |
| `sql:*` | Exécuter toutes les requêtes SQL partout. |
| `api:<connector>:<endpoint>` | Appeler un endpoint API. |
| `api:<connector>:*` | Appeler chaque endpoint sur un connecteur. |
| `menu:<app>:<id>` | Voir un élément de menu (dossier ou feuille). |
| `menu:<app>:*` | Voir chaque élément de menu d'une application. |
| `dashboard:<id>` | Ouvrir un tableau de bord. |
| `ai:chat` | Utiliser l'assistant IA. |
| `*` | Tout. |

---

## Recettes de rôles standard

| Rôle | Baseline | Règles |
|---|---|---|
| **Superutilisateur** | Accès complet | (vide) — équivalent à activer `is_superuser` sur l'utilisateur. |
| **Lecteur sur l'application CRM** | Aucun accès | Autoriser → Menu → CRM (qui s'étend en `menu:crm:*` + `sql:crm:*` pour les requêtes de lecture). |
| **Utilisateur avancé CRM sauf suppression** | Accès complet | Refuser → Requête → `customers_delete`, `deals_delete`, `activities_delete`. |
| **Accès IA uniquement** | Aucun accès | Autoriser → Assistant IA. L'utilisateur se connecte et obtient la surface de chat IA mais ni menu ni écrans. |
| **Responsable des rapports** | Aucun accès | Autoriser → Menu → Reports + Autoriser → Tableau de bord → revenue_overview / pipeline_health / etc. |
| **Admin sans l'IA** | Accès complet | Refuser → Assistant IA. Tout le reste autorisé. |

Le Permissions Picker traite chaque cas via la même cascade Autoriser / Refuser / Type / Élément.

---

## Comment se composent les permissions effectives d'un utilisateur

Un utilisateur peut avoir **plusieurs rôles**. Le framework concatène les listes de permissions de chaque rôle — le refus l'emporte aussi entre rôles.

Exemple : Alice a à la fois `analyst` et `reporter` :

- `analyst.permissions = ["*", "!sql:crm:customers_delete"]`
- `reporter.permissions = ["sql:reporting:*", "menu:reporting:*"]`

Les permissions effectives d'Alice :
- `sql:crm:customers_get` → autorisé par `*` dans analyst.
- `sql:crm:customers_delete` → refusé par le `!sql:crm:customers_delete` d'`analyst` même si `*` l'autoriserait.
- `sql:reporting:monthly_revenue` → autorisé à la fois par `*` (analyst) et par `sql:reporting:*` (reporter) — redondant mais sans conséquence.

Aucun rôle ne peut « passer outre » le refus d'un autre rôle — le refus est définitif sur l'ensemble des rôles de l'utilisateur.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Autoriser un Menu sans réaliser qu'il accorde les requêtes sous-jacentes. | Un utilisateur a plus d'accès SQL qu'attendu. | Utiliser Autoriser → Requête pour un contrôle fin ; réserver Autoriser → Menu pour « accorder toute la section ». |
| Baseline Accès complet + quelques règles d'autorisation. | Les autorisations sont redondantes (la baseline les accorde déjà). | Choisir soit *Accès complet* (et refuser les exceptions), soit *Aucun accès* (et autoriser les spécificités). Pas les deux. |
| `!sql:crm:*` en pensant qu'il passera outre une autorisation héritée. | Le refus fonctionne — mais l'utilisateur n'a *aucun accès SQL sur crm* même quand d'autres rôles l'accordent. | Les refus sont absolus. À utiliser délibérément. |
| Renommer un rôle en modifiant le nom. | Le nom est en lecture seule après création. | Supprimer le rôle et le recréer avec le nouveau nom. Réattribuer les utilisateurs. |
| Oublier que les changements de JWT sont décalés. | Un utilisateur reçoit un nouveau rôle mais ne le voit pas pendant une heure. | L'utilisateur se déconnecte puis se reconnecte, ou attend le TTL du jeton d'accès. |

---

## Suite

- [Utilisateurs](./users.md) — attribuer les rôles aux utilisateurs.
- [Se connecter](./sign-in.md) — comment les utilisateurs obtiennent leurs JWT.
- [Secrets chiffrés](./encrypted-secrets.md) — couche indépendante ; orthogonale au RBAC.
