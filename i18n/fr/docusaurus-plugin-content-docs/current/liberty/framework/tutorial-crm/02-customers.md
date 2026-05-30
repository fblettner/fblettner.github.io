---
title: Étape 2 — L'écran Clients
description: "Construisez le premier écran du CRM : un connecteur SQL qui lit + écrit la table customers, un écran qui le transforme en grille + dialogue d'édition, et une entrée de menu qui l'ouvre. Illustre le flux complet pool → connecteur → écran → menu."
keywords: [Liberty Framework, tutoriel, CRM, clients, connecteur, écran, menu, dialogue d'édition, paramètres]
---

# Étape 2 — L'écran Clients

Place au premier écran. Nous allons câbler la table `customers` en une interface opérationnelle : vue liste avec filtres, dialogue d'édition, enregistrement / ajout / suppression. Trois onglets de Paramètres concernés — *Connecteurs*, *Écrans*, *Menus* — environ 10 minutes de clics.

À la fin de cette étape, l'entrée *Clients* apparaît dans la barre latérale et cliquer sur une ligne ouvre un dialogue modifiable. Temps estimé : **15 minutes**.

---

## Ce que nous faisons et pourquoi

Le modèle mental du framework : **un connecteur sait dialoguer avec une source de données ; un écran sait la rendre ; un menu la rend accessible**. Trois concepts, trois onglets de Paramètres, dans cet ordre.

Pourquoi cet ordre compte :

1. Le **connecteur** porte le SQL — à la fois la requête de lecture qui alimente la grille et les requêtes d'écriture qui gèrent enregistrement / ajout / suppression. Il se définit en premier parce que tout en aval le référence.
2. L'**écran** enveloppe le connecteur en UI. Il a besoin que le connecteur existe déjà (l'écran le choisit dans une liste déroulante).
3. L'entrée de **menu** a besoin que l'écran existe déjà (même raison).

Sauter d'un onglet à l'autre n'est pas un problème — mais le flux naturel va de gauche à droite.

---

## Définir le connecteur customers

Ouvrez **Paramètres → Connecteurs → + Nouveau connecteur**.

### Sous-formulaire Connexion

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{fontWeight: 700, marginBottom: '10px'}}>Connexion</div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Nom</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>customers</span></div>
    <div style={{opacity: 0.75}}>App</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>crm ▾</span></div>
    <div style={{opacity: 0.75}}>Type</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '11px', fontWeight: 600}}>SQL ▾</span></div>
    <div style={{opacity: 0.75}}>Pool</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>default ▾</span></div>
    <div style={{opacity: 0.75}}>Description</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Comptes clients — lister, modifier, désactiver.</span></div>
  </div>
</div>

La *Description* compte plus qu'il n'y paraît : elle apparaît dans le catalogue, dans la liste d'outils de l'assistant IA (Étape 6) et comme infobulle quand d'autres opérateurs référencent ce connecteur. Deux phrases, dans la langue de l'utilisateur.

### Sous-formulaire Requêtes

Il nous faut quatre requêtes : une de lecture, trois d'écriture.

#### Requête de lecture — `list`

Cliquez sur **+ Ajouter une requête** dans la section *Requêtes*.

| Champ | Valeur |
|---|---|
| **Nom** | `list` |
| **Libellé** | `Lister les clients` |
| **Opération** | Lecture |
| **SQL** | La requête ci-dessous |
| **Description** | `Retourne chaque client avec son statut, son secteur et son contact principal.` |

```sql
SELECT id,
       name,
       industry,
       country,
       status,
       primary_email,
       created_at,
       updated_at
FROM   customers
ORDER BY name;
```

Cliquez sur **▶ Tester**. Le framework exécute la requête, affiche les trois lignes initiales et découvre le schéma. Huit chips de colonnes apparaissent en bas — `id`, `name`, `industry`, `country`, `status`, `primary_email`, `created_at`, `updated_at`. À retenir ; nous les utiliserons dans l'écran.

#### Requête d'écriture — `create`

Cliquez de nouveau sur **+ Ajouter une requête**.

| Champ | Valeur |
|---|---|
| **Nom** | `create` |
| **Opération** | Écriture |
| **SQL** | La requête ci-dessous |

```sql
INSERT INTO customers (name, industry, country, status, primary_email, created_by, created_at)
VALUES (:name, :industry, :country, :status, :primary_email, :session_user, CURRENT_TIMESTAMP)
RETURNING id;
```

À noter, `:session_user` — le placeholder que le framework lie à la claim `sub` du JWT (l'identifiant de l'utilisateur appelant). C'est ainsi que les colonnes d'audit se remplissent sans faire confiance au client.

Dans la sous-table **Paramètres**, déclarez `name`, `industry`, `country`, `status`, `primary_email` — tous en `string`, aucun obligatoire (le formulaire décidera).

#### Requête d'écriture — `update`

```sql
UPDATE customers
SET    name = :name,
       industry = :industry,
       country = :country,
       status = :status,
       primary_email = :primary_email,
       updated_by = :session_user,
       updated_at = CURRENT_TIMESTAMP
WHERE  id = :id;
```

Déclarez un paramètre `id` (`int`, obligatoire) et les cinq mêmes paramètres métier.

#### Requête d'écriture — `delete`

```sql
DELETE FROM customers WHERE id = :id;
```

Un seul paramètre — `id`, `int`, obligatoire.

### Enregistrer le connecteur

Cliquez sur **Enregistrer et recharger** en haut à droite. Le catalogue affiche désormais une ligne `customers` sous l'app *crm*, statut **Connecté**, avec **4 requêtes**.

### Ce qui vient de se passer

Vous avez créé la **première surface** du CRM : une définition réutilisable pour lire et écrire les données client. Tout ce qui aura besoin des données client à partir de maintenant — écrans, tableaux de bord, graphiques, tâches, l'assistant IA — référencera ce connecteur plutôt que de réécrire le SQL.

Les quatre requêtes ont aussi généré quatre **codes de permission** automatiquement :

- `sql:customers:list` — requis pour exécuter la requête de lecture.
- `sql:customers:create:write` / `sql:customers:update:write` / `sql:customers:delete:write` — requis pour chacune des opérations d'écriture.

Aujourd'hui l'utilisateur `admin` porte tous les codes via le joker `*`, donc rien n'est filtré. L'étape 5 introduit de vrais rôles.

---

## Construire l'écran Clients

Ouvrez **Paramètres → Écrans → + Nouvel écran**.

### Sous-formulaire Général

| Champ | Valeur |
|---|---|
| **Id** | `crm/customers` (Id de la forme `app/name`) |
| **Titre** | `Clients` |
| **App** | `crm` *(pré-rempli depuis l'Id)* |
| **Description** | `Liste des comptes clients avec dialogue d'édition en ligne.` |
| **Colonnes clés** | `id` *(multi-sélection ; un seul ici)* |
| **Taille de page par défaut** | `50` |
| **Modifiable** | ✓ *(activé — débloque Ajouter / Modifier / Supprimer)* |

### Sous-formulaire Connecteur de lecture

| Champ | Valeur |
|---|---|
| **Connecteur** | `customers` ▾ |
| **Requête** | `list` ▾ |
| **Tri par défaut** | `name`, ascendant |

Un bouton *Aperçu* en haut exécute la requête et affiche les colonnes découvertes. Nous en choisirons certaines juste après.

### Sous-formulaire Grille

Le framework propose les colonnes découvertes dans une palette à gauche ; glissez celles à conserver dans la mise en page à droite.

Pour une vue par défaut propre, incluez :

| Colonne | Libellé | Notes |
|---|---|---|
| `name` | Nom | Colonne large. |
| `industry` | Secteur | |
| `country` | Pays | |
| `primary_email` | E-mail | |
| `status` | Statut | Nous l'afficherons en chip coloré à l'[Étape 3](./03-deals.md) via le dictionnaire. |
| `updated_at` | Dernière modification | Aligné à droite. |

Laissez `id`, `created_at`, `created_by`, `updated_by` dans le catalogue (l'opérateur peut les ajouter à la demande) mais décochés dans la vue par défaut.

### Sous-formulaire Dialogue

L'onglet *Dialogue* définit ce qui se passe quand l'opérateur clique sur une ligne. Nous ajoutons **un onglet** (`Détails`) avec cinq champs.

| Champ | Colonne source | Widget | Notes |
|---|---|---|---|
| **Nom** | `name` | Texte | Obligatoire. |
| **Secteur** | `industry` | Texte | |
| **Pays** | `country` | Texte | Câblé à un lookup Pays à l'Étape 3 — pour l'instant, un simple champ texte. |
| **Statut** | `status` | Texte | Idem — deviendra une liste déroulante à l'Étape 3. |
| **E-mail principal** | `primary_email` | Texte | |

Le framework dérive le widget du type de colonne découvert (`string` → champ texte, `date` → sélecteur de date, etc.) ; pour l'instant, on garde les valeurs par défaut.

### Sous-formulaire Actions

Les boutons de la barre d'outils Ajouter / Modifier / Supprimer sont câblés automatiquement parce que *Modifiable* est activé. Il suffit de les pointer vers les bonnes requêtes d'écriture :

| Action | Connecteur / Requête |
|---|---|
| **Ajouter** | `customers` / `create` |
| **Enregistrer** *(sur le dialogue)* | `customers` / `update` |
| **Supprimer** | `customers` / `delete` |

### Enregistrer l'écran

**Enregistrer et recharger**. L'écran apparaît dans le catalogue. Pour le voir, il faut encore le câbler dans la barre latérale.

---

## Câbler le menu

Ouvrez **Paramètres → Menus**. Vous devriez voir une ou deux lignes — `_default` et peut-être un placeholder. Cliquez sur **+ Nouveau menu** s'il n'y a pas encore de menu `crm`.

Mettez le champ *App* du menu à `crm`. Le framework le reconnaît comme « le menu de l'espace de travail CRM » — une fois enregistré, le sélecteur d'espace de travail en haut de l'en-tête affiche **CRM** comme espace de travail.

Puis, dans l'éditeur d'arborescence du menu, **+ Ajouter une feuille** :

| Champ | Valeur |
|---|---|
| **Libellé** | `Clients` |
| **Type** | `Écran` |
| **Écran** | `crm/customers` ▾ |
| **Icône** | `users` *(n'importe quelle [icône Lucide](https://lucide.dev/icons))* |

**Enregistrer et recharger**. La barre latérale se met à jour immédiatement via Socket.IO. Le sélecteur d'espace de travail affiche maintenant **CRM** ; un clic dessus bascule la barre latérale vers une liste contenant **Clients**.

---

## Voir le résultat

Cliquez sur l'entrée **Clients** dans la barre latérale. Une grille s'affiche avec trois lignes — Acme, Globex, Initech.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
    <div style={{fontWeight: 700}}>Clients</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>↻ Rafraîchir</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Ajouter</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1.6fr 120px 80px 1.4fr 90px 130px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Nom</div><div>Secteur</div><div>Pays</div><div>E-mail</div><div>Statut</div><div>Dernière modification</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1.6fr 120px 80px 1.4fr 90px 130px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>Acme Industries SA</div><div>manufacturing</div><div>FR</div><div>contact@acme.example</div><div>active</div><div>—</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1.6fr 120px 80px 1.4fr 90px 130px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>Globex Logistics</div><div>logistics</div><div>DE</div><div>sales@globex.example</div><div>active</div><div>—</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1.6fr 120px 80px 1.4fr 90px 130px', padding: '10px 14px', alignItems: 'center'}}>
    <div>Initech Services</div><div>services</div><div>FR</div><div>hello@initech.example</div><div>active</div><div>—</div>
  </div>
</div>

Essayez :

- **Cliquez sur une ligne** → le dialogue d'édition s'ouvre avec les cinq champs remplis.
- **Modifiez un champ, cliquez sur Enregistrer** → la ligne se met à jour, la colonne *Dernière modification* reflète le changement.
- **Cliquez sur + Ajouter** → le dialogue s'ouvre vide pour un nouveau client.
- **Cliquez sur ✕ Supprimer dans le dialogue** → la ligne disparaît après confirmation.

---

## Ce que vous avez maintenant

Un écran Clients pleinement fonctionnel — lister, modifier, ajouter, supprimer — sans écrire la moindre ligne de code frontend. L'ensemble tient sur un connecteur + un écran + une entrée de menu, le tout défini dans l'interface Paramètres.

L'écran a encore des aspérités à polir dans les étapes suivantes :

- La colonne `status` est une chaîne libre. L'**Étape 3** la transforme en chip coloré via le dictionnaire.
- La colonne `country` est un code à deux lettres en texte libre. L'**Étape 3** la câble à une table de lookup pour que les utilisateurs choisissent dans une liste déroulante.
- Il n'y a pas de données liées (affaires, activités). L'**Étape 3** ajoute les Affaires avec une FK vers Clients et une sous-grille Activités.

→ **[Étape 3 — Affaires et relations](./03-deals.md)** — deuxième écran avec lookups FK + le dictionnaire + une sous-grille enfant.
