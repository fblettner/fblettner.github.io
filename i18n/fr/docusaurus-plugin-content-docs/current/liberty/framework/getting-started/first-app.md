---
title: Première application pas à pas
description: "Construire de bout en bout une application Liberty Next : un pool, un connecteur SQL et ses requêtes générées depuis une table, un écran avec une grille et un dialogue de modification, une entrée de menu — le tout depuis les Paramètres, appliqué sans redémarrage."
keywords: [Liberty Framework, première app, pas à pas, pool, connecteur, écran, menu, rechargement à chaud, UI Paramètres, dictionnaire, low-code]
---

# Première application pas à pas

Cette page part d'une installation vide pour aboutir à une application opérationnelle — une entrée du menu latéral qui ouvre une grille sur une table, avec un dialogue de modification. Tout se fait depuis les **Paramètres** (superutilisateur), sans aucune modification manuelle de fichier.

Quatre éléments, dans l'ordre — **pool → connecteur → écran → menu** — chacun enregistré et appliqué aussitôt.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="fa-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#fa-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">D'une installation vide à une entrée de menu utilisable — quatre étapes</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · POOL</text>
  <text x="160" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">connexion base de données</text>

  <rect x="280" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · CONNECTEUR</text>
  <text x="380" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">requêtes SQL nommées</text>

  <rect x="500" y="100" width="200" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · ÉCRAN</text>
  <text x="600" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">grille + dialogue de modification</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · MENU</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">entrée du menu latéral</text>

  <line x1="260" y1="130" x2="280" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fa-arrow)"/>
  <line x1="480" y1="130" x2="500" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fa-arrow)"/>
  <line x1="700" y1="130" x2="720" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fa-arrow)"/>
</svg>

L'exemple utilise le pool `default` et une petite table `tasks`.

---

## Étape 1 — Le pool \{#pool\}

Ouvrir **Paramètres → Pools**. L'installation a créé le pool `default` : sur une installation Docker, il pointe vers la base PostgreSQL fournie ; sur une installation Python sans PostgreSQL, vers un fichier SQLite local. Il suffit pour ce parcours. Pour travailler sur une autre base, ajouter un pool avec son URL — voir [Connecteurs](../connectors.md#pools).

Créer la table d'exemple avec n'importe quel client SQL connecté à cette base :

```sql
CREATE TABLE tasks (
  id        INTEGER PRIMARY KEY,
  title     VARCHAR(200) NOT NULL,
  status    VARCHAR(10)  NOT NULL DEFAULT 'open',
  due_date  DATE
);
INSERT INTO tasks (id, title, status, due_date) VALUES
  (1, 'Préparer le plan de sprint', 'open', '2026-06-10'),
  (2, 'Relire la pull request 42',  'done', '2026-06-05'),
  (3, 'Relancer le client',         'open', '2026-06-12');
```

---

## Étape 2 — Le connecteur et ses requêtes \{#connector\}

1. **Paramètres → Connecteurs → ＋ Connecteur** : nom `tasks`, type **SQL**, pool `default`. Enregistrer.
2. Avec `tasks` sélectionné, choisir **Tables** dans la barre de modes, puis **＋ Ajouter des requêtes → Générer depuis la BDD**.
3. Dans l'assistant CRUD, choisir la table `tasks`, garder toutes les colonnes, cocher **clé** sur `ID` et conserver les quatre instructions (SELECT, UPDATE, INSERT, DELETE).
4. Enregistrer. Le connecteur contient désormais `tasks_get`, `tasks_put`, `tasks_post` et `tasks_delete` :

```sql
SELECT ID, TITLE, STATUS, DUE_DATE FROM tasks
UPDATE tasks SET TITLE = :TITLE, STATUS = :STATUS, DUE_DATE = :DUE_DATE WHERE ID = :ID_ORIGINAL
```

Les colonnes sont lues dans la base à l'exécution de la requête ; rien d'autre n'est à déclarer. Voir [Créer depuis une table de la base](../build/queries/create-from-database.md).

---

## Étape 3 — L'écran \{#screen\}

1. **Paramètres → Écrans → ＋ Ajouter une portée**, choisir `tasks` : la pastille `tasks` apparaît.
2. **＋ Ajouter un écran**, identifiant `tasks`. Cliquer sur la nouvelle carte pour ouvrir l'éditeur d'écran.
3. Onglet **Général** : libellé `Tâches` ; cocher **Editable** pour la saisie dans la grille.
4. Onglet **Requêtes** : lecture `tasks_get`, mise à jour `tasks_put`, insertion `tasks_post`, suppression `tasks_delete`.
5. Onglet **Dialogue** : glisser les colonnes sur le formulaire.
6. **Enregistrer**.

Les colonnes de la grille viennent de la requête de lecture ; leurs libellés et formats, du [dictionnaire](../dictionary.md) quand des entrées existent (son bouton **Scan a table** les propose). L'[Assistant de création d'écran](../build/screen-assistant.md) réalise les étapes 2 et 3 en une fois pour une table.

---

## Étape 4 — L'entrée de menu \{#menu\}

1. **Paramètres → Menus → + Ajouter une portée**, choisir `tasks` : l'arborescence vide de l'application apparaît.
2. **＋ Élément**, puis dans l'inspecteur : libellé `Tâches`, type `screen`, cible `tasks_get` (l'écran construit dessus), icône `table`.
3. Enregistrer.

Maintenant doté d'un menu, `tasks` est une application : il apparaît dans le sélecteur d'application, et son menu latéral affiche **Tâches**. Un clic ouvre la grille : une ligne ouvre le dialogue de modification, **＋ Ajouter** un dialogue vide. Voir [Construire l'arbre](../build/menus/build-the-tree.md) et [Transformer un connecteur en application](../build/menus/make-connector-an-app.md).

---

## Résultat

- **Un pool** — la connexion à la base.
- **Un connecteur** — les quatre requêtes sur la table.
- **Un écran** — la grille et le dialogue sur ces requêtes.
- **Un menu** — l'entrée qui ouvre l'écran, et qui fait du connecteur une application.

Chaque enregistrement s'est appliqué sans redémarrage. Le pool et le connecteur sont enregistrés dans `connectors.toml`, l'écran dans `screens.toml`, le menu dans `menus.toml`.

---

## Pour aller plus loin

- [Structure du projet](./project-layout.md) — l'emplacement de ces fichiers.
- [Dictionnaire](../dictionary.md) — libellés, listes de valeurs et formats.
- [Rôles et permissions](../build/secure/roles-and-permissions.md) — qui peut ouvrir le nouvel écran.
- [Tutoriel CRM](../tutorial-crm/01-setup.md) — une application complète avec plusieurs écrans, un tableau de bord et des tâches.
