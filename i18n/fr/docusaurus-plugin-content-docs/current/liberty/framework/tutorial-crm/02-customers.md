---
title: Étape 2 — L'écran Clients
description: "Premier écran du CRM : les requêtes des clients générées par l'assistant CRUD, des colonnes d'audit renseignées par le serveur, un écran avec grille et dialogue de modification, et le menu qui fait du connecteur crm une application."
keywords: [Liberty Next, tutoriel, CRM, clients, assistant CRUD, écran, menu, dialogue, "{{LOGIN}}"]
---

# Étape 2 — L'écran Clients

La table `customers` devient un écran : une grille avec filtres, un dialogue de modification, l'ajout et la suppression. Trois endroits des Paramètres, dans cet ordre : **Connecteurs** (les requêtes), **Écrans** (l'interface), **Menus** (l'entrée qui l'ouvre).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 350" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu2-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu2-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu2-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu2-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="320" rx="14" fill="url(#tu2-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="170" height="300" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="44" width="150" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="325.0" y="58.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm ▾</text>
  <text x="254" y="98" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📁 Ventes</text>
  <rect x="250" y="108" width="150" height="24" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="124" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">👥 Clients</text>
  <text x="426" y="52" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="880" y="36" width="80" height="22" rx="5" fill="url(#tu2-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="50.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <rect x="426" y="70" width="534" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="436" y="87.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM</text>
  <text x="606" y="87.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SECTEUR</text>
  <text x="726" y="87.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAYS</text>
  <text x="796" y="87.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="896" y="87.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E-MAIL</text>
  <rect x="426" y="102" width="534" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="436" y="118.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME Industries</text>
  <text x="606" y="118.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Industrie</text>
  <text x="726" y="118.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="796" y="107.0" width="41" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="816.5" y="118.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="896" y="118.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">contact@…</text>
  <rect x="426" y="132" width="534" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="436" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="606" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Logistique</text>
  <text x="726" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="796" y="137.0" width="41" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="816.5" y="148.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="896" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ventes@…</text>
  <rect x="426" y="162" width="534" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="436" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="606" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Services</text>
  <text x="726" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">BE</text>
  <rect x="796" y="167.0" width="41" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="816.5" y="178.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="896" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">bonjour@…</text>
  <rect x="546" y="200" width="300" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="560" y="222" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · ACME Industries</text>
  <text x="560" y="247" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Nom</text>
  <rect x="660" y="232" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="670" y="246.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">ACME Industries</text>
  <text x="560" y="277" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Statut</text>
  <rect x="660" y="262" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="670" y="276.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">ACTIVE ▾</text>
  <rect x="760" y="292" width="80" height="22" rx="5" fill="url(#tu2-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="800.0" y="306.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="10" y="40" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'application crm</text>
  <text x="20" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a désormais un menu</text>
  <line x1="210" y1="57.0" x2="250" y2="55" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu2-arrow)"/>
  <rect x="10" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Entrée de menu</text>
  <text x="20" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type screen</text>
  <line x1="210" y1="137.0" x2="250" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu2-arrow)"/>
  <rect x="1000" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Requêtes générées</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">customers_get / _put / …</text>
  <line x1="1000" y1="107.0" x2="960" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu2-arrow)"/>
  <rect x="1000" y="260" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dialogue</text>
  <text x="1010" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">audit renseigné par le serveur</text>
  <line x1="1000" y1="277.0" x2="846" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu2-arrow)"/>
</svg>

---

## Les requêtes

1. **Liberty Next → Construire → Connecteurs**, sélectionner `crm`, choisir **Tables** dans la barre de modes.
2. **＋ Ajouter des requêtes → Générer depuis la BDD**, choisir la table `customers`.
3. Garder toutes les colonnes, cocher **clé** sur `ID`, conserver les quatre instructions. Enregistrer.

Le connecteur contient désormais `customers_get`, `customers_post`, `customers_put` et `customers_delete`. Deux ajustements dans l'éditeur de requête :

- **`customers_post`** — la base numérote les lignes (`SERIAL`) : retirer `ID` de l'insertion, et renseigner la création :

```sql
INSERT INTO customers (NAME, INDUSTRY, COUNTRY, STATUS, PRIMARY_EMAIL, CREATED_BY, CREATED_AT)
VALUES (:NAME, :INDUSTRY, :COUNTRY, :STATUS, :PRIMARY_EMAIL, {{LOGIN}}, {{SYSTIMESTAMP}})
```

- **`customers_put`** — ne pas toucher aux colonnes de création, et renseigner la modification :

```sql
UPDATE customers
SET NAME = :NAME, INDUSTRY = :INDUSTRY, COUNTRY = :COUNTRY, STATUS = :STATUS,
    PRIMARY_EMAIL = :PRIMARY_EMAIL, UPDATED_BY = {{LOGIN}}, UPDATED_AT = {{SYSTIMESTAMP}}
WHERE ID = :ID_ORIGINAL
```

`{{LOGIN}}` et `{{SYSTIMESTAMP}}` sont renseignés par le serveur — nom de l'utilisateur et heure courante — quelles que soient les valeurs envoyées par le formulaire. Enregistrer la page des connecteurs.

Chaque requête a sa propre permission — `sql:crm:customers_get`, `sql:crm:customers_put`… — utilisée à l'[étape 5](./05-auth.md). Les superutilisateurs les ont toutes.

---

## L'écran

1. **Liberty Next → Construire → Écrans → ＋ Ajouter une portée**, choisir `crm` : la pastille `crm` apparaît.
2. **＋ Ajouter un écran**, identifiant `customers`, puis cliquer sur la carte pour ouvrir l'éditeur d'écran.

| Onglet | Réglage |
|---|---|
| **Général** | Libellé `Clients`. |
| **Requêtes** | Lecture `customers_get`, mise à jour `customers_put`, insertion `customers_post`, suppression `customers_delete`. |
| **Colonnes** | **Importer depuis la requête de lecture**, puis : donner un libellé à chaque colonne, masquer `ID`, `CREATED_BY`, `CREATED_AT`, `UPDATED_BY` (**hidden**), cocher **filter** sur `STATUS`, `COUNTRY` et `INDUSTRY`. |
| **Dialogue** | Un onglet `Détails` avec `NAME`, `INDUSTRY`, `COUNTRY`, `STATUS`, `PRIMARY_EMAIL`. |

Enregistrer. Les libellés saisis sur les colonnes pourront ensuite passer dans le dictionnaire, qui sert tous les écrans — voir l'[étape 3](./03-deals.md).

---

## Le menu

1. **Liberty Next → Construire → Menus → + Ajouter une portée**, choisir `crm` : l'arborescence vide de l'application apparaît.
2. **＋ Dossier** : libellé `Ventes`, icône `briefcase`.
3. Sur le dossier, **Ajouter un enfant** : libellé `Clients`, type `screen`, cible `customers_get`, icône `users`.
4. Enregistrer.

`crm` a désormais un menu : c'est une **application**, proposée dans le sélecteur d'application en haut du menu latéral (à partir de deux applications). Son menu affiche **Ventes → Clients**.

---

## Résultat à l'écran

Ouvrir **Clients** : la grille présente ACME Industries, Beta SARL et Gamma SA.

- Un clic sur une ligne ouvre le dialogue avec les cinq champs ; en modifier un et **Enregistrer** — *Updated by* et *Updated at* sont renseignés (les afficher par le menu **Colonnes** de la grille).
- **＋ Ajouter** ouvre un dialogue vide pour un nouveau client.
- **Supprimer** dans le dialogue retire la ligne.

---

## Bilan

Un écran Clients — liste, filtres, ajout, modification, suppression — construit à partir d'une table, avec des colonnes d'audit renseignées par le serveur.

→ **[Étape 3 — Affaires et relations](./03-deals.md)** : listes de valeurs du dictionnaire, affaires liées aux clients, activités dans un onglet.
