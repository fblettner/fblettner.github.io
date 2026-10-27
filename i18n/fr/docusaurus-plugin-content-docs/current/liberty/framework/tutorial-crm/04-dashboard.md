---
title: Étape 4 — Tableau de bord du pipeline commercial
description: "Ajouter au CRM un tableau de bord du pipeline : requêtes d'agrégation, indicateurs comparés à la période précédente, graphique en barres enregistré du pipeline par étape, table des dernières activités, et l'entrée de menu qui l'ouvre."
keywords: [Liberty Next, tutoriel, CRM, tableau de bord, indicateur, graphique, période, PERIOD_FROM, période précédente, widgets]
---

# Étape 4 — Tableau de bord du pipeline commercial

Un tableau de bord réunit le pipeline sur une page : montant en cours, montant gagné sur la période, nombre d'affaires en cours, pipeline par étape et dernières activités.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu4-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu4-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu4-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu4-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="360" rx="14" fill="url(#tu4-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline commercial</text>
  <rect x="480" y="30" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="44.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Ce mois-ci ▾</text>
  <rect x="930" y="30" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="44.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="235" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="92" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PIPELINE EN COURS</text>
  <text x="252" y="118" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">173 500</text>
  <rect x="485" y="74" width="235" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="497" y="92" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GAGNÉ</text>
  <text x="497" y="118" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">18 000</text>
  <text x="708" y="118" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▲ +12 %</text>
  <rect x="730" y="74" width="235" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="742" y="92" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AFFAIRES EN COURS</text>
  <text x="742" y="118" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <rect x="240" y="160" width="480" height="200" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="180" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline par étape</text>
  <rect x="295.2" y="319.4" width="89.6" height="12.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="295.2" y="319.4" width="89.6" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="340.0" y="343" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Qualifiée</text>
  <rect x="435.2" y="281.6" width="89.6" height="50.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="435.2" y="281.6" width="89.6" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="480.0" y="343" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Proposition</text>
  <rect x="575.2" y="206.0" width="89.6" height="126.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="575.2" y="206.0" width="89.6" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="620.0" y="343" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Négociation</text>
  <rect x="732" y="160" width="228" height="200" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="744" y="180" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernières activités</text>
  <text x="744" y="206" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="948" y="206" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Appel</text>
  <text x="744" y="230" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="948" y="230" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Réunion</text>
  <text x="744" y="254" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="948" y="254" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">E-mail</text>
  <rect x="10" y="58" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="20" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PERIOD_FROM / PERIOD_TO</text>
  <line x1="210" y1="75.0" x2="482" y2="53" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu4-arrow)"/>
  <rect x="10" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">KPI</text>
  <text x="20" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">somme, compte, comparaison</text>
  <line x1="210" y1="137.0" x2="240" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu4-arrow)"/>
  <rect x="10" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Graphique enregistré</text>
  <text x="20" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pipeline_by_stage</text>
  <line x1="210" y1="277.0" x2="240" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu4-arrow)"/>
  <rect x="1000" y="100" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période précédente</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">évolution sous le chiffre</text>
  <line x1="1000" y1="117.0" x2="710" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu4-arrow)"/>
  <rect x="1000" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Widget table</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">10 dernières lignes</text>
  <line x1="1000" y1="267.0" x2="960" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu4-arrow)"/>
</svg>

---

## Les requêtes

Dans **Paramètres → Connecteurs → crm → Requêtes**, **＋ Ajouter une requête** pour chacune :

```sql
-- open_deals_get — affaires en cours
SELECT ID, AMOUNT FROM deals WHERE STAGE NOT IN ('WON', 'LOST')

-- won_deals_get — affaires gagnées sur la période du tableau de bord
SELECT ID, AMOUNT, CLOSE_DATE FROM deals
WHERE STAGE = 'WON' AND CLOSE_DATE BETWEEN :PERIOD_FROM AND :PERIOD_TO

-- pipeline_by_stage_get — montant par étape
SELECT s.LABEL AS STAGE, s.ORD, SUM(d.AMOUNT) AS AMOUNT
FROM deals d JOIN deal_stages s ON s.CODE = d.STAGE
WHERE d.STAGE NOT IN ('WON', 'LOST')
GROUP BY s.LABEL, s.ORD ORDER BY s.ORD

-- recent_activities_get — dernières activités
SELECT a.HAPPENED_AT, c.NAME AS CUSTOMER, d.NAME AS DEAL, a.KIND, a.RECORDED_BY
FROM activities a JOIN deals d ON d.ID = a.DEAL_ID JOIN customers c ON c.ID = d.CUSTOMER_ID
ORDER BY a.HAPPENED_AT DESC
```

`:PERIOD_FROM` et `:PERIOD_TO` reçoivent la période choisie sur le tableau de bord.

---

## Le graphique

**Paramètres → Graphiques**, portée `crm`, **Add chart** :

| Onglet | Réglage |
|---|---|
| General | Identifiant `pipeline_by_stage`, libellé `Pipeline par étape`, requête `pipeline_by_stage_get`. |
| Chart | **Barres**, axe X `STAGE`, une série `AMOUNT`, agrégation **Somme**. |

Voir [Graphiques](../charts.md).

---

## Le tableau de bord

**Paramètres → Tableaux de bord**, application `crm`, ajouter un tableau de bord `pipeline`, titre `Pipeline commercial` :

- **Période** : **Add a period**, ouverture sur *Ce mois-ci*, colonne de date `CLOSE_DATE`.
- **Widgets** (**Add widget**), dans cet ordre :

| Widget | Réglages | Largeur |
|---|---|---|
| Indicateur *Pipeline en cours* | Requête `open_deals_get`, colonne `AMOUNT`, agrégation `sum`. | 4 |
| Indicateur *Gagné* | Requête `won_deals_get`, colonne `AMOUNT`, agrégation `sum`, **Compare with the previous period**. | 4 |
| Indicateur *Affaires en cours* | Requête `open_deals_get`, colonne `ID`, agrégation `count`. | 4 |
| Graphique | Le graphique enregistré `pipeline_by_stage`. | 8, hauteur 2 |
| Table *Dernières activités* | Requête `recent_activities_get`, 10 lignes au plus. | 4, hauteur 2 |

Enregistrer. Voir [Tableaux de bord](../dashboards.md).

---

## L'entrée de menu

**Paramètres → Menus**, application `crm`, en tête d'arborescence : **＋ Élément**, libellé `Pipeline`, type `dashboard`, cible `crm.pipeline`, icône `barchart`. La placer au-dessus du dossier *Ventes* et la désigner comme **home** du connecteur (Paramètres → Connecteurs → crm) pour que l'application s'ouvre dessus.

---

## Résultat à l'écran

Ouvrir **Pipeline** :

- les trois indicateurs ; *Gagné* affiche son évolution par rapport à la période précédente ;
- les barres du pipeline par étape ;
- les dernières activités, dont celle enregistrée à l'étape 3.

Passer la période sur *Cette année* : l'indicateur *Gagné* suit. **↻** recharge tous les widgets.

---

## Bilan

Un tableau de bord qui répond à la question « où en est le pipeline ? » sans ouvrir d'écran, sur les mêmes requêtes et les mêmes permissions que le reste de l'application.

→ **[Étape 5 — Rôles et connexion](./05-auth.md)** : qui voit quoi.
