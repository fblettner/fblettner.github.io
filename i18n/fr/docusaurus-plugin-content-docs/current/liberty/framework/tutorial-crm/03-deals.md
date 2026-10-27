---
title: Étape 3 — Affaires et relations
description: "Second écran du CRM : le dictionnaire apporte libellés et listes de valeurs (une énumération pour le statut client, des lookups pour le client et l'étape d'une affaire), l'écran Affaires rattache chaque affaire à son client, et les activités de l'affaire apparaissent dans un onglet de son dialogue."
keywords: [Liberty Next, tutoriel, CRM, affaires, dictionnaire, ENUM, LOOKUP, analyser une table, nested_table, param_binds]
---

# Étape 3 — Affaires et relations

Trois volets dans cette étape :

1. Le **dictionnaire** : des libellés communs à tous les écrans, et des listes de valeurs au lieu de texte libre.
2. L'écran **Affaires**, où chaque affaire choisit son client et son étape dans une liste.
3. Les **activités** de l'affaire, dans un onglet de son dialogue.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu3-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu3-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu3-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu3-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="310" rx="14" fill="url(#tu3-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Plateforme logistique</text>
  <rect x="240" y="58" width="137" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="271.5" y="73.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Affaire</text>
  <rect x="304" y="59" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="340.0" y="73.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Activités</text>
  <line x1="240" y1="92" x2="960" y2="92" stroke="#1f2937" strokeWidth="1"/>
  <rect x="880" y="102" width="80" height="22" rx="5" fill="url(#tu3-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="116.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <rect x="240" y="132" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="370" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTES</text>
  <text x="670" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE</text>
  <text x="810" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SAISI PAR</text>
  <rect x="240" y="164" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="169.0" width="41" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="270.5" y="180.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Appel</text>
  <text x="370" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Budget confirmé</text>
  <text x="670" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">27/10/2026 10:15</text>
  <text x="810" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ADMIN</text>
  <rect x="240" y="194" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="199.0" width="51" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="275.5" y="210.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Réunion</text>
  <text x="370" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Démo de la plateforme</text>
  <text x="670" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">20/10/2026 14:00</text>
  <text x="810" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BOB</text>
  <rect x="240" y="236" width="340" height="80" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="256" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Onglet Affaire (autre vue)</text>
  <text x="252" y="281" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Client</text>
  <rect x="342" y="266" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="280.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Beta SARL ▾</text>
  <text x="620" y="280" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Étape : Négociation · 120 000</text>
  <rect x="10" y="58" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet table imbriquée</text>
  <text x="20" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'écran des activités</text>
  <line x1="210" y1="75.0" x2="240" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu3-arrow)"/>
  <rect x="1000" y="100" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">DEAL_ID déjà renseigné</text>
  <line x1="1000" y1="117.0" x2="960" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu3-arrow)"/>
  <rect x="1000" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Saisi par</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;&#123;LOGIN&#125;&#125;</text>
  <line x1="1000" y1="197.0" x2="920" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu3-arrow)"/>
  <rect x="10" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lookup</text>
  <text x="20" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom du client, recherche</text>
  <line x1="210" y1="307.0" x2="400" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu3-arrow)"/>
</svg>

---

## Le dictionnaire

### Les entrées tirées des tables

**Paramètres → Dictionnaire**, choisir la portée `crm`, puis **Scan a table** (libellé anglais) :

1. Connecteur `crm`, table `customers`, **Scan** : une proposition par colonne, les manquantes cochées.
2. Renseigner le **Label** de chacune (`Nom`, `Secteur`, `Pays`, `Statut`, `E-mail`…), puis **Add**.
3. Même chose pour `deals` et `activities`.

Tous les écrans de l'application affichent désormais ces libellés — ceux saisis sur les colonnes de l'écran Clients à l'étape 2 peuvent être effacés.

### Le statut client — une énumération

Onglet **Énumérations**, **＋ Ajouter une énumération** `CUSTOMER_STATUS`, avec les valeurs `ACTIVE` (Actif), `PROSPECT` (Prospect), `INACTIVE` (Inactif). Puis sur l'entrée `STATUS` : **Rules** `ENUM`, **Rules values** `CUSTOMER_STATUS`.

La grille affiche *Actif* au lieu de `ACTIVE`, et le dialogue propose les trois valeurs.

### Le client d'une affaire — un lookup

Un lookup remplace un code (l'identifiant du client) par un libellé (son nom), à partir d'une requête.

1. **Paramètres → Connecteurs → crm → Lookups → ＋ Ajouter un lookup** : table `customers`, colonne valeur `ID`, colonne libellé `NAME`. L'assistant écrit la requête et le lookup `customers` du dictionnaire.
2. Même chose pour les étapes : table `deal_stages`, valeur `CODE`, libellé `LABEL`.
3. Dans le dictionnaire, entrée `CUSTOMER_ID` : **Rules** `LOOKUP`, **Rules values** `customers` ; entrée `STAGE` : **Rules** `LOOKUP`, **Rules values** `deal_stages`.

Enregistrer le dictionnaire. Voir [Dictionnaire](../dictionary.md) et [Séquences et lookups](../build/queries/sequences-and-lookups.md).

---

## L'écran Affaires

1. **Connecteurs → crm → Tables → ＋ Ajouter des requêtes → Générer depuis la BDD**, table `deals`, clé `ID`. Comme à l'étape 2, retirer `ID` de `deals_post`, et ajouter `UPDATED_AT = {{SYSTIMESTAMP}}` à `deals_put`.
2. **Écrans**, pastille `crm`, **＋ Ajouter un écran** `deals` : libellé `Affaires`, les quatre requêtes, **Importer depuis la requête de lecture** dans Colonnes, un onglet de dialogue `Affaire` avec `CUSTOMER_ID`, `NAME`, `STAGE`, `AMOUNT`, `CLOSE_DATE`, `OWNER`.
3. **Menus**, sous *Ventes* : une entrée `Affaires`, type `screen`, cible `deals_get`, icône `trendingup`.

La grille affiche le nom du client et le libellé de l'étape ; le dialogue les propose dans des listes avec recherche. Cocher **filter** sur `STAGE` et `CUSTOMER_ID` pour filtrer la grille sur ces colonnes.

---

## Les activités dans un onglet

Les activités d'une affaire apparaissent dans son dialogue, sous forme de grille.

### L'écran Activités

1. **Générer depuis la BDD** sur `activities`, clé `ID`. Dans `activities_post`, retirer `ID` et enregistrer l'auteur :

```sql
INSERT INTO activities (DEAL_ID, KIND, NOTES, HAPPENED_AT, RECORDED_BY)
VALUES (:DEAL_ID, :KIND, :NOTES, :HAPPENED_AT, {{LOGIN}})
```

2. Un écran `activities` sur ces requêtes, avec un dialogue contenant `KIND`, `NOTES`, `HAPPENED_AT`. Sa requête de lecture a besoin de l'identifiant de l'affaire — ajouter `WHERE DEAL_ID = :DEAL_ID` à `activities_get`.

### L'onglet

Dans l'écran `deals`, onglet **Dialogue**, **＋ Ajouter un onglet**, puis dans **Paramètres de l'onglet** :

| Réglage | Valeur |
|---|---|
| Libellé de l'onglet | `Activités` |
| Type d'onglet | *Table imbriquée* |
| Écran cible | `activities` |
| Liaisons de paramètres | colonne parent `ID` → paramètre `DEAL_ID` |

L'onglet affiche les activités de l'affaire ouverte ; **＋ Ajouter** y crée une activité dont `DEAL_ID` est déjà renseigné. Activer **hide_on_add** sur l'onglet : une affaire en cours de création n'a pas encore d'identifiant. Voir [Onglets imbriqués](../build/screens/nested-tabs.md).

---

## Résultat à l'écran

- **Clients** : le statut s'affiche par son libellé et se choisit dans une liste.
- **Affaires** : quatre affaires, avec leur client et leur étape ; filtrer sur *Négociation*.
- Ouvrir *Plateforme logistique*, onglet **Activités**, **＋ Ajouter** : enregistrer un appel. *Recorded by* contient le nom de l'utilisateur.

---

## Bilan

Deux écrans liés, des libellés et des listes de valeurs partagés par le dictionnaire, et des lignes enfants dans un dialogue.

→ **[Étape 4 — Tableau de bord](./04-dashboard.md)** : le pipeline d'un coup d'œil.
