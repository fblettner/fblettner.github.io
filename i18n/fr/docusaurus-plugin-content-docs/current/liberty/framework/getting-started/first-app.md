---
title: Première app pas à pas
description: "Construire une app Liberty fonctionnelle de bout en bout en moins de cinq minutes : déclarer un pool de base de données, définir un connecteur SQL, présenter un écran avec une grille + dialogue d'édition et l'intégrer dans le menu latéral — le tout depuis l'UI des Paramètres, le tout rechargé à chaud."
keywords: [Liberty Framework, première app, pas à pas, pool, connecteur, écran, menu, rechargement à chaud, UI Paramètres, dictionnaire, low-code]
---

# Première app pas à pas

Cette page vous guide d'une installation vide à une app fonctionnelle — une entrée de menu latéral qui ouvre une grille adossée à une requête SQL, avec un dialogue d'édition. Tout se fait depuis l'UI **Paramètres** in-app ; rien n'est édité à la main en TOML. La séquence complète prend **moins de cinq minutes** une fois le framework installé.

Vous toucherez quatre types de configuration dans l'ordre — **pool → connecteur → écran → menu** — chacun enregistré à chaud et rechargé par le framework dans le même onglet du navigateur.

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
  <text x="380" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">requête SQL nommée</text>

  <rect x="500" y="100" width="200" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · ÉCRAN</text>
  <text x="600" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">grille + dialogue d'édition</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · MENU</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">entrée du menu latéral</text>

  <line x1="260" y1="130" x2="280" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fa-arrow)"/>
  <line x1="480" y1="130" x2="500" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fa-arrow)"/>
  <line x1="700" y1="130" x2="720" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fa-arrow)"/>
</svg>

L'exemple utilise le pool SQLite intégré (`default`) et une petite table `tasks` — aucune base externe nécessaire.

---

## Étape 1 — Vérifier que le pool `default` existe

Ouvrez **Paramètres → Pools**. Sur une installation neuve, le pool `default` pointe déjà vers le fichier SQLite local (`liberty.db`). C'est suffisant pour ce parcours — aucune modification requise.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 700}}>Pools</div>
  <div style={{display: 'grid', gridTemplateColumns: '120px 1fr 120px 80px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontWeight: 600}}>default</div>
    <div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.85}}>sqlite+aiosqlite:///liberty.db</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>connecté</span></div>
    <div style={{textAlign: 'right'}}>✏️</div>
  </div>
</div>

Pour une installation réelle, basculez vers une URL PostgreSQL ou Oracle — tous les formats de chaîne de connexion et les options sont documentés dans [Configuration → Variables d'environnement](../configuration/environment-variables.md#liberty_db_url).

Créez ensuite la table d'exemple une seule fois via le shell SQLite :

```sql
CREATE TABLE tasks (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  title       TEXT    NOT NULL,
  status      TEXT    NOT NULL DEFAULT 'open',
  due_date    DATE,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO tasks(title, status, due_date) VALUES
  ('Draft sprint plan',      'open',   '2026-06-10'),
  ('Review pull request 42', 'done',   '2026-06-05'),
  ('Customer follow-up',     'open',   '2026-06-12');
```

---

## Étape 2 — Définir un connecteur SQL

Un connecteur est une **requête nommée sur un pool**. Ouvrez **Paramètres → Connecteurs → ➕ Nouveau connecteur** et remplissez :

| Champ | Valeur |
|---|---|
| **Nom** | `tasks` |
| **Pool** | `default` |
| **Type** | `sql` |
| **Requête de lecture** | `SELECT id, title, status, due_date FROM tasks ORDER BY due_date` |
| **Écriture — insert** | `INSERT INTO tasks(title, status, due_date) VALUES (:title, :status, :due_date)` |
| **Écriture — update** | `UPDATE tasks SET title = :title, status = :status, due_date = :due_date WHERE id = :id` |
| **Écriture — delete** | `DELETE FROM tasks WHERE id = :id` |

Le schéma de la requête de lecture est **découvert à l'exécution** — le framework demande à la base de données « quelles colonnes renvoie cette requête ? » la première fois que le connecteur est utilisé. Inutile de le déclarer à l'avance.

Cliquez sur **Enregistrer**. Le connecteur apparaît dans la page catalogue (ouvrez `/` dans un autre onglet pour le voir). [Connecteurs](../connectors.md) couvre toutes les options et les types de connecteurs HTTP / API.

---

## Étape 3 — Construire un écran sur le connecteur

Un écran enveloppe un connecteur dans une **grille + dialogue d'édition**. Ouvrez **Paramètres → Écrans → ➕ Nouvel écran** :

| Champ | Valeur |
|---|---|
| **App** | `tutorial` |
| **Identifiant d'écran** | `tasks` |
| **Titre** | `Tasks` |
| **Connecteur** | `tasks` |
| **Colonnes clés** | `id` |
| **Modifiable** | ✓ (active les actions Ajouter / Modifier / Supprimer) |

Les colonnes de la grille et le dialogue d'édition se déduisent automatiquement des colonnes de la requête de lecture. Pour ajouter des libellés localisés, des règles de validation ou des badges booléens, la prochaine étape est la page [Dictionnaire](../dictionary.md).

Cliquez sur **Enregistrer**, puis ouvrez l'URL `http://127.0.0.1:8000/screens/tutorial/tasks` — la grille est déjà active.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Tasks</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontWeight: 600}}>↻ Rafraîchir</span>
      <span style={{padding: '5px 12px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Ajouter</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 2fr 100px 110px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>ID</div><div>Titre</div><div>Statut</div><div>Échéance</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 2fr 100px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>1</div><div>Draft sprint plan</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>open</span></div>
    <div>10/06/2026</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 2fr 100px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>2</div><div>Review pull request 42</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>done</span></div>
    <div>05/06/2026</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 2fr 100px 110px', padding: '10px 14px', alignItems: 'center'}}>
    <div>3</div><div>Customer follow-up</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>open</span></div>
    <div>12/06/2026</div>
  </div>
</div>

Cliquez sur n'importe quelle ligne — le dialogue d'édition s'ouvre avec les quatre champs, **Enregistrer** déclenche la requête de mise à jour, **Supprimer** déclenche la requête de suppression, **+ Ajouter** ouvre un formulaire vide lié à la requête d'insertion.

[Écrans](../screens.md) couvre les onglets, les conditions par champ, les lectures/écritures inter-connecteurs et l'ensemble complet des options du dialogue.

---

## Étape 4 — Le brancher dans le menu latéral

Ouvrez **Paramètres → Menus → ➕ Nouvelle feuille** (ou étendez une arborescence existante) :

| Champ | Valeur |
|---|---|
| **Parent** | *Niveau racine* |
| **Libellé** | `Tasks` |
| **Type** | `query` |
| **Connecteur** | `tasks` |
| **Écran** | `tutorial/tasks` |
| **Icône** | `list-todo` *(n'importe quelle [icône Lucide](https://lucide.dev/icons))* |

Enregistrez. Le menu latéral se rafraîchit automatiquement — l'entrée **Tasks** apparaît avec l'icône et ouvre l'écran au clic. Le pipeline de rechargement à chaud du framework a propagé la nouvelle arborescence de menu sans redémarrage ; il en va de même pour toute édition dans Paramètres. Voir [Rechargement à chaud](../configuration/hot-reload.md) pour la mécanique exacte.

---

## Ce que vous avez maintenant

Une app fonctionnelle avec :

- **Un pool** qui détient la connexion à la base de données.
- **Un connecteur** qui porte les requêtes de lecture + écriture.
- **Un écran** qui transforme le connecteur en grille + dialogue d'édition.
- **Une entrée de menu** qui présente l'écran dans le menu latéral.

Quatre blocs TOML en coulisses — les quatre fichiers ont été mis à jour sur place sous `liberty-apps/config/`, aucun redémarrage nécessaire. Regardez-les avec `git diff` pour voir à quoi ressemble une édition typique.

---

## Pour aller plus loin

- [Structure du projet](./project-layout.md) — la cartographie des fichiers de `liberty-apps`.
- [Concepts → Connecteurs](../connectors.md) — HTTP, API, requêtes paramétrées, indications de schéma.
- [Concepts → Dictionnaire](../dictionary.md) — libellés, énumérations, lookups, règles de format.
- [Authentification → Rôles et permissions](../auth/roles-permissions.md) — restreindre le nouvel écran à un rôle spécifique.
- [UI des Paramètres](../configuration/settings-ui.md) — chaque éditeur en détail.
