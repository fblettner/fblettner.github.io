---
title: Conditions de formulaire
description: "Afficher, masquer, rendre obligatoire ou désactiver un champ en fonction des valeurs en direct des autres champs du même dialogue. L'éditeur d'écrans expose trois emplacements de condition par champ — Visible quand, Obligatoire quand, Désactivé quand — avec un éditeur d'expression qui suggère les noms de champs et donne un aperçu de l'évaluation."
keywords: [Liberty Framework, form conditions, visible when, required when, disabled when, conditional fields, screens, dialog, settings]
---

# Conditions de formulaire

La boîte de dialogue d'édition d'un écran est une liste à plat de champs. Certains champs n'ont de sens que quand d'autres ont une valeur spécifique — un *SLA personnalisé* qui n'apparaît que sur le plan *Enterprise*, un *Email du responsable* qui n'est obligatoire qu'au-delà de 20 % de remise. Le framework permet d'exprimer cela directement dans l'**éditeur d'écrans**, sur chaque champ, via trois emplacements :

| Emplacement | Effet |
|---|---|
| **Visible quand** | Le champ n'est rendu que quand l'expression est vraie. Quand elle est fausse, le champ est retiré du dialogue **et** écarté du payload d'enregistrement. |
| **Obligatoire quand** | Le champ obtient l'astérisque *obligatoire* et l'enregistrement est bloqué tant que la valeur n'est pas fournie. |
| **Désactivé quand** | Le champ est rendu mais grisé et en lecture seule. Sa valeur courante part quand même dans le payload d'enregistrement. |

Les trois emplacements sont indépendants — un champ peut être visible-et-obligatoire, visible-et-désactivé, ou les trois.

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '6px 0 10px', fontWeight: 700}}>Abonnement — dialogue d'édition</div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '10px', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{opacity: 0.7, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em'}}>Plan</div>
    <div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.45)', color: '#4a9eff', fontSize: '11px', fontWeight: 600}}>Enterprise ▾</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '10px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{opacity: 0.7, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em'}}>Sièges <span style={{color: '#f87171'}}>*</span></div>
    <div><span style={{padding: '4px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>250</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '10px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{opacity: 0.7, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em'}}>SLA personnalisé <span style={{fontSize: '10px', opacity: 0.55, fontStyle: 'italic'}}>(visible : plan = enterprise)</span></div>
    <div><span style={{padding: '4px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', fontSize: '11px'}}>Gold — 99,95 %</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '10px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{opacity: 0.7, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em'}}>Remise % <span style={{fontSize: '10px', opacity: 0.55, fontStyle: 'italic'}}>(désactivé : sièges &lt; 100)</span></div>
    <div><span style={{padding: '4px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.45}}>15</span></div>
  </div>
  <div style={{padding: '12px 0 0', display: 'flex', justifyContent: 'flex-end', gap: '6px'}}>
    <span style={{padding: '5px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Annuler</span>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Enregistrer</span>
  </div>
</div>

*SLA personnalisé* n'apparaît que sur le plan Enterprise ; *Remise %* est visible sur chaque plan mais verrouillé quand *Sièges* descend sous 100.

---

## Modifier une condition

Dans **Paramètres → Écrans**, ouvrir l'écran et cliquer sur le champ dans l'onglet *Champs*. L'éditeur de champ à droite expose les trois emplacements de condition, chacun avec un **éditeur d'expression** :

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '8px 0 10px', fontWeight: 700}}>Éditeur de champ — SLA personnalisé</div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1fr', rowGap: '10px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Nom</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>custom_sla</span></div>
    <div style={{opacity: 0.75}}>Libellé</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>SLA personnalisé</span></div>
    <div style={{opacity: 0.75}}>Type</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>string ▾</span></div>
    <div style={{opacity: 0.75}}>Visible quand</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.08)', border: '1px solid rgba(74,158,255,0.40)', fontSize: '11px', fontFamily: 'ui-monospace, monospace', color: '#60a5fa'}}>plan == 'enterprise'</span></div>
    <div style={{opacity: 0.75}}>Obligatoire quand</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.55, fontStyle: 'italic'}}>— toujours obligatoire quand visible —</span></div>
    <div style={{opacity: 0.75}}>Désactivé quand</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.55, fontStyle: 'italic'}}>—</span></div>
  </div>
</div>

Chaque emplacement d'expression :

- Suggère les **noms de champs** du même écran par auto-complétion.
- Valide la syntaxe en direct — une faute de frappe (`plan = 'enterprise'` au lieu de `==`) affiche un soulignement rouge avant l'enregistrement.
- Refuse les cycles à l'enregistrement (champ A visible-quand dépend de B, B dépend de A).

Le bouton *Tester* en haut de l'éditeur de champ ouvre un petit volet d'aperçu (voir [Tester les conditions](#testing) plus bas).

---

## Syntaxe des expressions

Le langage d'expression est petit et sûr — comparable à une clause SQL `WHERE` mais évalué côté client.

| Construction | Exemple |
|---|---|
| **Référence de champ** | `plan`, `seats`, `discount_pct`. Référence à la valeur courante du champ portant ce *Nom* dans le même dialogue. |
| **Littéraux** | `'enterprise'`, `5`, `true`, `false`, `null`. |
| **Comparaisons** | `==`, `!=`, `<`, `<=`, `>`, `>=`. |
| **Logique** | `&&`, `\|\|`, `!`. Parenthèses pour le groupement. |
| **Appartenance** | `plan in ['team', 'enterprise']`. |
| **Test de null** | `discount_pct == null` / `discount_pct != null`. |
| **Prédicats de chaîne** | `name.startsWith('FR-')`, `name.endsWith('.pdf')`, `name.includes('test')`. |
| **Longueur** | `tags.length > 0` (pour les champs *Multiple*). |
| **Contexte de session** | `session.user`, `session.lang`, `session.roles` — le même triplet disponible aux requêtes (voir [Liaison des paramètres → Contexte de session](./query-params-binding.md#session-context)). `session.roles` est un tableau — `'admin' in session.roles`. |

Le langage **n'a pas d'appels de fonction au-delà des prédicats listés** ni d'opérateurs arithmétiques autres que la comparaison. L'intention est « expression booléenne sur l'état du formulaire », pas un langage de script.

---

## Ordre d'évaluation

Les conditions sont ré-évaluées **à chaque changement de champ** dans le dialogue. Le framework exécute les trois emplacements pour chaque champ en parallèle ; le résultat est lu une fois chaque référence résolue. Ce que cela veut dire :

- **L'ordre dans lequel les champs sont listés n'a pas d'importance.** Un *Visible quand* sur le champ A peut référencer le champ B qui lui-même dépend du champ C — le résolveur exécute la passe complète une fois par changement.
- **Les cycles sont refusés à l'enregistrement** — l'éditeur nomme le cycle et pointe les champs en cause.
- **Les champs désactivés gardent leur valeur**, même si un *Visible quand* les masque ensuite. Basculer la visibilité off puis on ne remet pas la valeur à zéro.
- **Les champs masqués perdent leur valeur à l'enregistrement.** Le payload envoyé au connecteur ne contient que les champs visibles. Cela compte quand l'INSERT/UPDATE d'un connecteur attend `NULL` pour un champ absent plutôt que la valeur tapée précédemment.

---

## Interaction avec Défaut

| Scénario | Comportement |
|---|---|
| Champ avec *Défaut*, devient visible | La valeur par défaut est appliquée la première fois que le champ devient visible *si* il n'a pas encore de valeur. Le masquer puis le ré-afficher garde ce que l'utilisateur a tapé entre-temps. |
| Champ avec *Défaut*, devient masqué | La valeur n'est pas effacée en mémoire ; elle est écartée du payload d'enregistrement car le champ n'est plus rendu. |
| Champ sans *Défaut*, devient visible | Le champ se rend vide. |
| Champ avec *Défaut* `${session.user}`, devient visible | La valeur de session est substituée au moment de l'évaluation (même syntaxe que les valeurs par défaut de requête). |

Les valeurs par défaut côté serveur (`SEQUENCE`, `SYSDATE`, `LOGIN`, `PASSWORD` — voir [Dictionnaire](./dictionary.md)) sont appliquées à l'enregistrement et **n'interagissent pas** avec les conditions.

---

## Application côté serveur

Les conditions sont évaluées **côté client** pour l'UX en direct et **ré-évaluées côté serveur** à l'enregistrement pour se prémunir contre la manipulation. L'endpoint d'enregistrement :

1. Reçoit le payload de champ.
2. Réexécute chaque condition avec les valeurs du payload.
3. Refuse l'enregistrement quand un champ obligatoire-et-visible manque ou quand un champ désactivé est modifié (sa valeur dans le payload diffère de la valeur dernièrement envoyée au client).

Les conditions sont donc des **règles métier**, pas seulement des indices UX. Un utilisateur qui ouvre l'onglet réseau et modifie le payload directement bute sur la même validation que le formulaire.

---

## Tester les conditions \{#testing}

Le bouton **Tester** de l'éditeur de champ ouvre un petit volet d'aperçu : le dialogue rempli avec les valeurs de fixture issues du `_test_row` du connecteur (ou vide quand aucun n'est configuré) ; modifier les champs dont dépendent les conditions montre le comportement en direct.

Pour la logique non triviale, l'éditeur d'écran expose aussi un onglet **Cas de test**. Chaque cas de test est une paire `{ inputs, expected }` que le bouton *Exécuter les tests* rejoue :

| Cas de test | Entrées | Attendu |
|---|---|---|
| **starter-plan** | `plan = starter`, `seats = 5` | `custom_sla = hidden`, `discount_pct = disabled`, `manager_email = hidden` |
| **enterprise-with-discount** | `plan = enterprise`, `seats = 250`, `discount_pct = 25` | `custom_sla = visible`, `discount_pct = enabled`, `manager_email = visible+required` |

Le lanceur de tests affiche une coche verte par réussite, un diff rouge par échec. Les cas de test ne sont pas utilisés à l'exécution — ils documentent la logique du formulaire et survivent mieux aux refactorings que les vérifications visuelles.

---

## Permissions

`session.roles` est l'interrupteur au niveau ligne. Un champ que seuls les superutilisateurs doivent modifier devient :

```text
Désactivé quand :  'admin' not in session.roles
```

L'application côté serveur rend cela sûr — un utilisateur régulier qui modifie le payload réseau bute sur la même condition.

---

## Sous le capot

Les conditions sont enregistrées comme chaînes d'expression sur chaque champ de l'entrée d'écran. Les opérateurs **n'éditent pas le TOML sous-jacent à la main** ; l'éditeur de champ est l'interface canonique et valide chaque expression avant l'enregistrement.

---

## Pour aller plus loin

- [Concepts → Écrans](./screens.md) — où vit l'éditeur de champ, et les autres propriétés de champ.
- [Concepts → Dictionnaire](./dictionary.md) — règles de validation partagées qui se combinent avec ces conditions.
- [Liaison des paramètres](./query-params-binding.md) — comment les valeurs du dialogue circulent vers le connecteur à l'enregistrement.
