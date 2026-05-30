---
title: Étape 4 — Tableau de bord du pipeline commercial
description: "Posez un tableau de bord au-dessus des données Affaires existantes : quatre KPI, un graphique en barres empilées par étape, une table « activités récentes », tous partageant un filtre de période et permettant le drill-down vers l'écran Affaires. Illustre les tableaux de bord, les graphiques et la barre de filtres partagée."
keywords: [Liberty Framework, tutoriel, CRM, tableau de bord, KPI, graphique, drill-down, barre de filtres partagée]
---

# Étape 4 — Tableau de bord du pipeline commercial

Deux écrans couvrent la vue opérationnelle. Nous posons maintenant un **tableau de bord** par-dessus — la vue à vol d'oiseau attendue par les managers quand ils ouvrent le CRM le matin. Quatre KPI, un graphique, une table « activités récentes », tous partageant un filtre de période qui se propage à chaque panneau.

À la fin de cette étape, le CRM compte une page `Vue d'ensemble du pipeline` qui visualise les mêmes données de trois façons. Temps estimé : **15 minutes**.

---

## Ce que nous faisons et pourquoi

Un écran répond à « montre-moi les lignes » ; un tableau de bord répond à « **résume** les lignes ». Les deux s'alimentent des mêmes données — les requêtes du connecteur que nous avons déjà, plus quelques requêtes d'agrégation à ajouter.

Les [tableaux de bord](../dashboards.md) du framework sont une grille responsive 12 colonnes ; les [graphiques](../charts.md) enveloppent une requête SQL en une visualisation. Une **barre de filtres partagée** en haut du tableau de bord pousse une valeur (une période, une région, une étape) dans chaque panneau qui déclare le même paramètre. Le drill-down ouvre l'écran correspondant pré-filtré.

Nous allons construire :

| Panneau | Type | Source |
|---|---|---|
| **Valeur totale du pipeline** | Stat | Somme du `amount` des affaires ouvertes. |
| **Affaires gagnées sur la période** | Stat | Décompte des affaires `stage='won'` qui clôturent dans la période. |
| **Taille moyenne d'affaire** | Stat | Moyenne du `amount` sur la période. |
| **Taux de réussite** | Stat | Gagnées / (gagnées + perdues) sur la période. |
| **Pipeline par étape** | Graphique en barres | `GROUP BY stage` sur la période. |
| **Activités récentes** | Table | 10 dernières lignes de `activities`. |

---

## Ajouter les requêtes d'agrégation

Ouvrez **Paramètres → Connecteurs → deals → + Ajouter une requête** et ajoutez quatre requêtes de lecture.

### `pipeline-total`

```sql
SELECT COALESCE(SUM(amount), 0) AS total
FROM   deals
WHERE  stage NOT IN ('won', 'lost')
  AND  (:close_from IS NULL OR close_date >= :close_from)
  AND  (:close_to   IS NULL OR close_date <= :close_to);
```

Paramètres : `close_from` (date), `close_to` (date), aucun obligatoire.

### `deals-won`

```sql
SELECT COUNT(*) AS count
FROM   deals
WHERE  stage = 'won'
  AND  (:close_from IS NULL OR close_date >= :close_from)
  AND  (:close_to   IS NULL OR close_date <= :close_to);
```

### `avg-deal-size`

```sql
SELECT COALESCE(AVG(amount), 0) AS avg
FROM   deals
WHERE  stage = 'won'
  AND  (:close_from IS NULL OR close_date >= :close_from)
  AND  (:close_to   IS NULL OR close_date <= :close_to);
```

### `win-rate`

```sql
SELECT CASE
         WHEN COUNT(*) = 0 THEN 0
         ELSE 100.0 * SUM(CASE WHEN stage = 'won' THEN 1 ELSE 0 END) / COUNT(*)
       END AS pct
FROM   deals
WHERE  stage IN ('won', 'lost')
  AND  (:close_from IS NULL OR close_date >= :close_from)
  AND  (:close_to   IS NULL OR close_date <= :close_to);
```

### `by-stage`

```sql
SELECT stage, COUNT(*) AS count, SUM(amount) AS total
FROM   deals
WHERE  (:close_from IS NULL OR close_date >= :close_from)
  AND  (:close_to   IS NULL OR close_date <= :close_to)
GROUP BY stage
ORDER BY stage;
```

Testez chacune — elles retournent toutes des nombres compte tenu des données initiales. **Enregistrer et recharger**.

---

## Définir un graphique pour « Pipeline par étape »

Le **graphique** du framework est une définition réutilisable posée entre une requête SQL et un panneau de tableau de bord. Ouvrez **Paramètres → Graphiques → + Nouveau graphique** :

| Champ | Valeur |
|---|---|
| **Id** | `crm-pipeline-by-stage` |
| **Titre** | `Pipeline par étape` |
| **Type** | `Barre` |
| **Connecteur** | `deals` |
| **Requête** | `by-stage` |
| **Axe X** | `stage` (libellé `Étape`) — réglez le lookup sur `stages` pour que le graphique affiche les libellés lisibles avec leurs couleurs. |
| **Série** | Une série : champ `count`, libellé `Affaires`, couleur depuis la colonne couleur de l'étape. |
| **Group by** *(optionnel)* | Laisser vide. |

Cliquez sur **▶ Aperçu**. Un petit graphique en barres apparaît avec une barre par étape (les 4 lignes initiales produisent 4 barres).

**Enregistrer**.

---

## Construire le tableau de bord

**Paramètres → Tableaux de bord → + Nouveau tableau de bord** :

| Champ | Valeur |
|---|---|
| **Id** | `crm-pipeline-overview` |
| **Titre** | `Vue d'ensemble du pipeline` |
| **App** | `crm` |
| **Description** | `KPI du pipeline commercial et répartition par étape.` |

### Barre de filtres partagée

En haut de l'éditeur, ajoutez deux entrées de filtre dont chaque panneau héritera :

| Nom | Type | Défaut | Libellé |
|---|---|---|---|
| `close_from` | date | `${month.first}` | De |
| `close_to` | date | `${month.last}` | À |

Les jetons `${month.first}` et `${month.last}` se résolvent en premier / dernier jour du mois courant côté serveur — réévalués à chaque appel, pour que le tableau de bord suive le calendrier.

### Panneaux

Glissez depuis la palette vers la mise en page 12 colonnes :

#### Ligne 1 — quatre panneaux stat (3 colonnes chacun)

| Panneau | Type | Connecteur / Requête | Valeur | Format |
|---|---|---|---|---|
| **Valeur totale du pipeline** | Stat | `deals` / `pipeline-total` | `total` | `1 234,56 €` |
| **Affaires gagnées** | Stat | `deals` / `deals-won` | `count` | `1 234` |
| **Taille moyenne d'affaire** | Stat | `deals` / `avg-deal-size` | `avg` | `1 234,56 €` |
| **Taux de réussite** | Stat | `deals` / `win-rate` | `pct` | `12.3 %` |

Les surcharges de paramètres de chaque panneau stat héritent de la barre de filtres partagée — le framework câble `close_from` et `close_to` automatiquement.

#### Ligne 2 — Pipeline par étape (8 colonnes) + Activités récentes (4 colonnes)

| Panneau | Type | Source | Réglages |
|---|---|---|---|
| **Pipeline par étape** | Graphique | Le graphique `crm-pipeline-by-stage` que nous avons construit. | Écran de drill-down : `crm/deals` *(cliquer sur une barre ouvre l'écran Affaires pré-filtré sur cette étape)*. |
| **Activités récentes** | Table | Connecteur `activities`, requête `recent` à créer, qui retourne les 10 dernières lignes triées par `happened_at DESC`. | Action au clic : ouvrir `crm/deals` filtré sur le `deal_id` de l'activité. |

Pour la table *Activités récentes*, ajoutez une requête `activities.recent` :

```sql
SELECT a.kind, a.notes, a.happened_at, d.name AS deal_name, c.name AS customer_name
FROM   activities a
JOIN   deals d     ON d.id = a.deal_id
JOIN   customers c ON c.id = d.customer_id
ORDER BY a.happened_at DESC
LIMIT 10;
```

### Enregistrer et ajouter au menu

**Enregistrer** le tableau de bord.

Puis **Paramètres → Menus → crm** → **+ Ajouter une feuille** en haut de l'arborescence (pour en faire la première entrée vue par les utilisateurs) :

| Champ | Valeur |
|---|---|
| **Libellé** | `Vue d'ensemble du pipeline` |
| **Type** | `Tableau de bord` |
| **Tableau de bord** | `crm-pipeline-overview` |
| **Icône** | `bar-chart-3` |

**Enregistrer et recharger**.

---

## Voir le résultat

Cliquez sur **Vue d'ensemble du pipeline** dans la barre latérale. L'affichage attendu :

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '12px'}}>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>De : 01/05/2026</span>
    <span style={{marginLeft: '6px', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>À : 31/05/2026</span>
    <span style={{marginLeft: '6px', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>↻ Rafraîchir</span>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '14px'}}>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(74,158,255,0.06)', border: '1px solid rgba(74,158,255,0.30)'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '2px'}}>Total pipeline</div>
      <div style={{fontSize: '20px', fontWeight: 700, color: '#4a9eff'}}>173 500,00 €</div>
    </div>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(74,158,255,0.06)', border: '1px solid rgba(74,158,255,0.30)'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '2px'}}>Affaires gagnées</div>
      <div style={{fontSize: '20px', fontWeight: 700, color: '#4a9eff'}}>1</div>
    </div>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(74,158,255,0.06)', border: '1px solid rgba(74,158,255,0.30)'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '2px'}}>Taille moyenne</div>
      <div style={{fontSize: '20px', fontWeight: 700, color: '#4a9eff'}}>18 000,00 €</div>
    </div>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(74,158,255,0.06)', border: '1px solid rgba(74,158,255,0.30)'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '2px'}}>Taux de réussite</div>
      <div style={{fontSize: '20px', fontWeight: 700, color: '#4ade80'}}>100.0 %</div>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px'}}>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(192,132,252,0.06)', border: '1px solid rgba(192,132,252,0.30)', minHeight: '120px'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '8px'}}>Pipeline par étape</div>
      <div style={{fontSize: '10px', fontStyle: 'italic', opacity: 0.6}}>(graphique en barres — 4 barres, une par étape)</div>
    </div>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.30)'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '8px'}}>Activités récentes</div>
      <div style={{fontSize: '11px', lineHeight: '1.8'}}>📅 meeting · Globex Logistics<br/><span style={{opacity: 0.6, fontSize: '10px'}}>il y a 3 jours</span></div>
    </div>
  </div>
</div>

Essayez :

- **Cliquez sur une barre** → l'écran Affaires s'ouvre pré-filtré sur cette étape.
- **Cliquez sur une ligne dans Activités récentes** → le dialogue de l'affaire correspondante s'ouvre.
- **Modifiez les dates De / À** → chaque panneau se réaffiche.

---

## Ce que vous avez maintenant

Le CRM compte trois entrées navigables — vue d'ensemble, clients, affaires — qui couvrent le parcours complet « regarder les données / regarder les lignes ».

Deux choses manquent encore :

- Tout est réservé à l'admin. Les vraies applications ont besoin de **rôles** et idéalement d'une **connexion OIDC**. Étape 5.
- L'**assistant IA** du framework peut déjà répondre à des questions sur les données affaires (parce que *Exposer à l'IA* était activé par défaut) ; nous vérifierons et polirons. Le CRM bénéficie aussi d'une **tâche nocturne** qui signale les affaires stagnantes. Étape 6.

→ **[Étape 5 — Rôles et SSO](./05-auth.md)** — séparez les utilisateurs en rôles, câblez OIDC.
