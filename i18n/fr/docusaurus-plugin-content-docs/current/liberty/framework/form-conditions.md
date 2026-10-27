---
title: Conditions de formulaire
description: "Tous les réglages conditionnels d'une colonne d'écran — afficher, rendre obligatoire, verrouiller, imposer une valeur, changer de règle ou ne pas écrire selon la valeur d'un autre champ — et la règle editable_when qui verrouille des lignes entières. Une seule forme de condition : un champ et une valeur, combinés par ET."
keywords: [Liberty Next, conditions de formulaire, visible_when, required_when, disabled_when, default_when, rules_when, write_when, editable_when, disable_on_add, disable_on_edit, écrans, dialogue]
---

# Conditions de formulaire

Une colonne d'écran peut réagir à la valeur d'un autre champ de la même ligne : n'apparaître que pour un type d'enregistrement, devenir obligatoire, se verrouiller, prendre une valeur imposée, changer de liste de valeurs ou ne pas être écrite du tout. L'écran lui-même peut placer des lignes entières en lecture seule. Tous ces réglages reposent sur la même forme de condition.

La mise en œuvre pas à pas dans l'éditeur d'écran est décrite dans [Écrans → Champs conditionnels](./build/screens/conditional-fields.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cnd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cnd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cnd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cnd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="14" width="680" height="360" rx="14" fill="url(#cnd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="280" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Facture 00001-1042</text>
  <line x1="280" y1="62" x2="920" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="280" y="95" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Statut</text>
  <rect x="480" y="80" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="94.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Annulée ▾</text>
  <text x="280" y="137" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Motif d'annulation ∗</text>
  <rect x="480" y="122" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="136.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Commande en double</text>
  <text x="280" y="179" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Mode de paiement</text>
  <rect x="480" y="164" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="178.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Virement ▾</text>
  <text x="280" y="221" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">IBAN</text>
  <rect x="480" y="206" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="220.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">FR76 0000 0000 0000 0000 0000 000</text>
  <text x="280" y="263" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">Plafond de crédit</text>
  <rect x="480" y="248" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="262.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">0</text>
  <text x="890" y="263" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">🔒</text>
  <text x="280" y="305" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">N° de facture</text>
  <rect x="480" y="290" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="304.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">00001-1042</text>
  <text x="890" y="305" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">🔒</text>
  <rect x="750" y="340" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="785.0" y="354.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="830" y="340" width="80" height="22" rx="5" fill="url(#cnd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="870.0" y="354.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="10" y="100" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">required_when</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">STATUS = CANCELLED → obligatoire</text>
  <line x1="240" y1="117.0" x2="280" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="10" y="200" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">visible_when</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">affiché si PAYMENT_METHOD = TRANSFER</text>
  <line x1="240" y1="217.0" x2="280" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="10" y="300" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">disable_on_edit</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clé verrouillée après création</text>
  <line x1="240" y1="317.0" x2="280" y2="304" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="970" y="220" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="980" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">default_when</text>
  <text x="980" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">STATUS = CANCELLED → 0, verrouillé</text>
  <line x1="970" y1="237.0" x2="920" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="970" y="80" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="980" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">editable_when</text>
  <text x="980" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur l'écran : ligne en lecture seule</text>
  <line x1="970" y1="97.0" x2="920" y2="46" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
</svg>

---

## La condition \{#condition\}

Une condition désigne un **champ** de la même ligne et la **valeur** attendue — ou une liste de valeurs, dont une seule suffit :

```toml
{ field = "STATUS", value = "CANCELLED" }
{ field = "PAYMENT_METHOD", value = ["TRANSFER", "DIRECT_DEBIT"] }
```

Un réglage porte une liste de conditions : **toutes** doivent être remplies (ET). Les valeurs se comparent comme du texte, sans les espaces de début et de fin : un code complété par des espaces reste reconnu. Les noms de champs se comparent sans tenir compte de la casse.

Dans l'éditeur d'écran, chaque réglage est une liste dans l'inspecteur de la colonne : une ligne par condition, le champ étant choisi parmi les colonnes de l'écran.

---

## Réglages d'une colonne \{#column-settings\}

| Réglage | Onglet de l'inspecteur | Effet |
|---|---|---|
| `visible_when` | Filter | **Dialogue** : le champ n'apparaît que tant que les conditions sont remplies par les valeurs du formulaire. **Grille** : la colonne disparaît quand un filtre de l'écran prend une valeur hors de la condition ; filtre vide, la colonne reste affichée. |
| `required` / `required_when` | Edit | Le champ est signalé obligatoire (astérisque), toujours ou seulement tant que les conditions sont remplies. |
| `disabled` / `disabled_when` | Edit | Le champ est en lecture seule, toujours ou seulement tant que les conditions sont remplies. |
| `disable_on_add` | Edit | Lecture seule à l'ajout d'une ligne, modifiable ensuite — pour une valeur attribuée à la création. |
| `disable_on_edit` | Edit | Lecture seule une fois la ligne créée — pour une clé qui ne doit plus changer. S'applique au dialogue et à la saisie dans la grille. |
| `default` | Defaults | La valeur proposée à l'ajout d'une ligne. |
| `default_when` | Defaults | Tant que sa condition est remplie, la colonne prend la valeur **default** indiquée et se verrouille. Avec **lock** désactivé, la valeur est seulement proposée et reste modifiable. Avec plusieurs règles, la première remplie l'emporte. Réappliqué à chaque changement du champ déterminant, dans le dialogue comme dans la grille. |
| `rules_when` | Rules | Tant que sa condition est remplie, la colonne utilise une autre règle — un autre lookup, une autre énumération ou un booléen, avec ses propres paramètres de lookup et valeurs renvoyées — ou aucune (saisie libre). La première règle remplie l'emporte ; à défaut, la règle de la colonne s'applique. |
| `write_when` | Defaults | La colonne n'est écrite que tant que les conditions sont remplies. Sinon, le serveur écrit une valeur neutre (vide ou 0) sans appliquer la valeur par défaut ni la règle du dictionnaire — pour un champ dénué de sens pour ce type de ligne. |

Un réglage fixe et sa version conditionnelle se combinent simplement : liste `_when` vide, l'indicateur fixe décide ; liste renseignée, les conditions décident.

---

## Réglage de l'écran — `editable_when` \{#editable-when\}

Défini dans l'onglet **Général** de l'éditeur d'écran, `editable_when` indique quand une ligne **existante** peut être modifiée ou supprimée :

```toml
editable_when = [{ field = "PERIOD_STATUS", value = ["OPEN", "VALIDATED"] }]
```

Une ligne qui ne remplit pas la condition passe en lecture seule : cellules non modifiables dans la grille, dialogue en consultation sans **Enregistrer** ni **Supprimer**. Le serveur refuse lui aussi toute modification de cette ligne. L'ajout de lignes n'est pas concerné.

---

## À l'enregistrement \{#save\}

- **Champs masqués** — en mise à jour, un champ masqué par `visible_when` n'est pas envoyé : la colonne garde sa valeur enregistrée. En insertion, un champ masqué n'est envoyé que s'il porte une valeur.
- **Champs verrouillés** — leur valeur est envoyée telle quelle.
- **Lieu du contrôle** — `visible_when`, `required_when`, `disabled_when`, `default_when` et `rules_when` agissent dans le navigateur, au fil de la saisie. `editable_when` et `write_when` sont aussi appliqués par le serveur, quelles que soient les valeurs envoyées.

---

## Fenêtres de saisie des actions \{#prompts\}

Les champs de la fenêtre de saisie d'une action acceptent `visible_when`, `required_when` et `disabled_when` sous la même forme, évalués sur les champs de cette fenêtre. Voir [Actions et cycle de vie](./build/screens/actions-and-lifecycle.md).

---

## Pour aller plus loin

- [Écrans → Champs conditionnels](./build/screens/conditional-fields.md) — les mettre en place dans l'éditeur d'écran, avec des exemples.
- [Écrans → Colonnes](./build/screens/columns.md) — les autres réglages d'une colonne.
- [Dictionnaire](./dictionary.md) — les règles héritées par une colonne.
