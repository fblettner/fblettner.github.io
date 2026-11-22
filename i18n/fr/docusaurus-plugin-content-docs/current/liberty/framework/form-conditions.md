---
title: Conditions de formulaire
description: "Tous les réglages conditionnels d'une colonne d'écran — afficher, rendre obligatoire, verrouiller, imposer une valeur, changer de règle ou ne pas écrire selon la valeur d'un autre champ — et la règle editable_when qui verrouille des lignes entières. Une seule forme de condition : un champ et une valeur, combinés par ET."
keywords: [Liberty Next, conditions de formulaire, visible_when, required_when, disabled_when, default_when, rules_when, write_when, editable_when, disable_on_add, disable_on_edit, écrans, dialogue]
---

# Conditions de formulaire

Une colonne d'écran peut réagir à la valeur d'un autre champ de la même ligne : n'apparaître que pour un type d'enregistrement, devenir obligatoire, se verrouiller, prendre une valeur imposée, changer de liste de valeurs ou ne pas être écrite du tout. L'écran lui-même peut placer des lignes entières en lecture seule. Tous ces réglages reposent sur la même forme de condition.

La mise en œuvre pas à pas dans le Concepteur d'écran est décrite dans [Écrans → Champs conditionnels](./build/screens/conditional-fields.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 350" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fcd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fcd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fcd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="fcd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="306" rx="14" fill="url(#fcd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Factures</text>
  <rect x="1054" y="32" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="238.0" y="86" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STATUT</text>
  <rect x="238.0" y="94" width="416.0" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="248.0" y="112" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">Annulée</text>
  <text x="640.0" y="112" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="666.0" y="86" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MOTIF D'ANNULATION ∗</text>
  <rect x="666.0" y="94" width="416.0" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="676.0" y="112" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">Commande en double</text>
  <text x="238.0" y="148" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MODE DE PAIEMENT</text>
  <rect x="238.0" y="156" width="416.0" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="248.0" y="174" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">Virement</text>
  <text x="640.0" y="174" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="666.0" y="148" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">IBAN</text>
  <rect x="666.0" y="156" width="416.0" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="676.0" y="174" fill="#e2e8f0" fontSize="9.2" fontFamily="ui-monospace, monospace">FR76 0000 0000 0000 0000 0000 000</text>
  <text x="238.0" y="210" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENCOURS AUTORISÉ</text>
  <rect x="238.0" y="218" width="416.0" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="248.0" y="236" fill="#64748b" fontSize="9.2" fontFamily="ui-monospace, monospace">0</text>
  <text x="666.0" y="210" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">N° DE FACTURE</text>
  <rect x="666.0" y="218" width="416.0" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="676.0" y="236" fill="#64748b" fontSize="9.2" fontFamily="ui-monospace, monospace">00001-1042</text>
  <line x1="220" y1="274" x2="1100" y2="274" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1005" y="286" width="77" height="24" rx="5" fill="url(#fcd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1043.5" y="301.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="932" y="286" width="67" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="965.5" y="301.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="849" y="286" width="77" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="887.5" y="301.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <rect x="776" y="286" width="67" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="809.5" y="301.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="20" y="89" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="104" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">STATUS décide</text>
  <text x="30" y="117" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lu par required_ et default_when</text>
  <line x1="200" y1="106.0" x2="238.0" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="20" y="151" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PAYMENT_METHOD décide</text>
  <text x="30" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lu par le visible_when de l'IBAN</text>
  <line x1="200" y1="168.0" x2="238.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="20" y="213" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="228" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">default_when</text>
  <text x="30" y="241" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">STATUS = CANCELLED → 0, verrouillé</text>
  <line x1="200" y1="230.0" x2="238.0" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="1120" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">editable_when</text>
  <text x="1130" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur l'écran : ligne entière figée</text>
  <line x1="1120" y1="43.0" x2="980" y2="48" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="1120" y="89" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="104" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">required_when</text>
  <text x="1130" y="117" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">STATUS = CANCELLED → obligatoire ∗</text>
  <line x1="1120" y1="106.0" x2="1082" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="1120" y="151" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">visible_when</text>
  <text x="1130" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">IBAN seulement pour un virement</text>
  <line x1="1120" y1="168.0" x2="1082" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="1120" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">disable_on_edit</text>
  <text x="1130" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clé verrouillée une fois créée</text>
  <line x1="1120" y1="237.0" x2="1082" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
</svg>

---

## La condition \{#condition\}

Une condition désigne un **champ** de la même ligne et la **valeur** attendue — ou une liste de valeurs, dont une seule suffit :

```toml
{ field = "STATUS", value = "CANCELLED" }
{ field = "PAYMENT_METHOD", value = ["TRANSFER", "DIRECT_DEBIT"] }
```

Un réglage porte une liste de conditions : **toutes** doivent être remplies (ET). Les valeurs se comparent comme du texte, sans les espaces de début et de fin : un code complété par des espaces reste reconnu. Les noms de champs se comparent sans tenir compte de la casse.

Dans le Concepteur d'écran, chaque réglage est une liste rattachée à la colonne : **+ add** ouvre une condition, dont le champ (**Field**) se choisit parmi les colonnes de l'écran et dont la valeur (**Value**) peut être multiple.

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

Défini à l'étape **Ce qu'il est** du Concepteur d'écran, `editable_when` indique quand une ligne **existante** peut être modifiée ou supprimée :

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

- [Écrans → Champs conditionnels](./build/screens/conditional-fields.md) — les mettre en place dans le Concepteur d'écran, avec des exemples.
- [Écrans → Colonnes](./build/screens/columns.md) — les autres réglages d'une colonne.
- [Dictionnaire](./dictionary.md) — les règles héritées par une colonne.
