---
title: Champs conditionnels
description: "Faire apparaître un champ de dialogue, le rendre obligatoire, le verrouiller ou lui imposer une valeur uniquement quand un autre champ a une valeur donnée — réglé sur la colonne depuis l'inspecteur de l'éditeur d'écran, avec des exemples."
keywords: [Liberty Next, champs conditionnels, visible_when, required_when, disabled_when, default_when, disable_on_edit, editable_when, éditeur d'écran, dialogue]
---

# Champs conditionnels

Un dialogue figé pose toujours les mêmes questions. Un dialogue conditionnel s'adapte aux choix déjà faits : afficher **IBAN** pour un virement uniquement, signaler **Motif d'annulation** comme obligatoire pour une commande annulée seulement, verrouiller le **Numéro de facture** une fois la facture créée.

Les réglages et leur comportement exact sont détaillés dans [Conditions de formulaire](../../form-conditions.md). Cette page en montre la mise en place.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 370" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="340" rx="14" fill="url(#cfd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Éditeur d'écran · Dialogue</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="400" height="270" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet : Détails</text>
  <rect x="252" y="108" width="376" height="42" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="126" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="264" y="141" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">liste</text>
  <rect x="252" y="160" width="376" height="42" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="264" y="178" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CANCELLATION_REASON</text>
  <text x="264" y="193" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">conditionnel · obligatoire</text>
  <rect x="252" y="212" width="376" height="42" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="230" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">PAYMENT_METHOD</text>
  <text x="264" y="245" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">liste</text>
  <rect x="252" y="264" width="376" height="42" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="282" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">IBAN</text>
  <text x="264" y="297" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">conditionnel · visible</text>
  <text x="656" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">CANCELLATION_REASON</text>
  <text x="656" y="112" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Configuration de la colonne</text>
  <rect x="656" y="120" width="270" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="685.5" y="135.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <line x1="715" y1="125" x2="715" y2="139" stroke="#334155" strokeWidth="1"/>
  <text x="742.0" y="135.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <line x1="769" y1="125" x2="769" y2="139" stroke="#334155" strokeWidth="1"/>
  <text x="793.5" y="135.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <rect x="819" y="121" width="42" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="840.0" y="135.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <line x1="862" y1="125" x2="862" y2="139" stroke="#334155" strokeWidth="1"/>
  <text x="894.0" y="135.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <rect x="656" y="157" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="673" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">required</text>
  <text x="656" y="190" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">required_when</text>
  <rect x="656" y="198" width="300" height="30" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="666" y="217" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="756" y="217" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">=</text>
  <text x="776" y="217" fill="#4ade80" fontSize="9.5" fontFamily="ui-monospace, monospace">CANCELLED</text>
  <rect x="656" y="236" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="692.0" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <text x="656" y="284" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">disabled_when · disable_on_add · disable_on_edit</text>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choisir le champ</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">c'est la colonne de l'écran</text>
  <line x1="210" y1="167.0" x2="252" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfd-arrow)"/>
  <rect x="1000" y="110" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Edit</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">obligatoire / lecture seule</text>
  <line x1="1000" y1="127.0" x2="960" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfd-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une condition</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">champ = valeur, en ET</text>
  <line x1="1000" y1="217.0" x2="960" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfd-arrow)"/>
</svg>

---

## Où les régler

Un champ de dialogue affiche une colonne de l'écran, et c'est la colonne qui porte tous les comportements — les mêmes réglages pilotent le dialogue et la grille. Dans l'éditeur d'écran :

1. Ouvrir le dialogue dans le [Constructeur de dialogue](./dialog-builder.md) et cliquer sur le champ — ou sélectionner la colonne dans l'onglet **Colonnes**.
2. L'inspecteur affiche **Configuration de la colonne**, répartie en onglets : les conditions se trouvent dans **Filter** (`visible_when`), **Edit** (`required_when`, `disabled_when`, `disable_on_add`, `disable_on_edit`), **Defaults** (`default_when`, `write_when`) et **Rules** (`rules_when`).
3. Ajouter une ligne par condition : le **champ** (choisi parmi les colonnes de l'écran) et la **valeur**, ou plusieurs valeurs.

Toutes les lignes d'un même réglage doivent être remplies ensemble (ET). Pour un OU sur un même champ, lister les valeurs dans une seule condition.

---

## Exemples

### Afficher des champs pour un choix donné

Un dialogue *Paiement* où `PAYMENT_METHOD` est une liste (`CASH`, `TRANSFER`, `DIRECT_DEBIT`, `CARD`) :

| Colonne | `visible_when` |
|---|---|
| `IBAN` | `PAYMENT_METHOD` = `TRANSFER`, `DIRECT_DEBIT` |
| `BIC` | `PAYMENT_METHOD` = `TRANSFER`, `DIRECT_DEBIT` |
| `CARD_LAST4` | `PAYMENT_METHOD` = `CARD` |

Avec `CASH`, aucun des trois champs n'apparaît. Avec `TRANSFER`, `IBAN` et `BIC` s'affichent.

### Rendre un motif obligatoire à l'annulation

| Colonne | `required_when` |
|---|---|
| `CANCELLATION_REASON` | `STATUS` = `CANCELLED` |

Le champ reste toujours affiché ; il reçoit l'astérisque des champs obligatoires dès que le statut vaut `CANCELLED`.

### Verrouiller une clé après création

| Colonne | Réglage |
|---|---|
| `INVOICE_NUMBER` | `disable_on_edit` coché |

Le numéro se saisit à l'ajout de la facture, puis passe en lecture seule — dans le dialogue comme dans la grille. `disable_on_add` fait l'inverse, pour une valeur attribuée à la création.

### Imposer une valeur pour un type de ligne

| Colonne | `default_when` |
|---|---|
| `CREDIT_LIMIT` | `STATUS` = `CANCELLED` → valeur `0`, verrouillage actif |

Dès que le statut passe à `CANCELLED`, le plafond prend la valeur `0` et se verrouille. Avec **lock** désactivé, `0` est seulement proposé et reste modifiable.

### Placer les périodes clôturées en lecture seule

Dans l'onglet **Général** de l'éditeur d'écran :

| Réglage | Valeur |
|---|---|
| `editable_when` | `PERIOD_STATUS` = `OPEN`, `VALIDATED` |

Une ligne d'une période clôturée s'ouvre en consultation, et le serveur en refuse toute modification.

---

## Points d'attention

| Situation | Conséquence | Solution |
|---|---|---|
| Le champ déterminant ne figure pas dans le dialogue. | Le formulaire ignore sa valeur : la condition n'est jamais remplie et le champ dépendant reste masqué. | Ajouter le champ déterminant au dialogue, masqué ou non. |
| `visible_when` sur une colonne clé. | À l'ajout d'une ligne, la clé peut ne pas apparaître. | Verrouiller une clé (`disable_on_edit`) plutôt que la masquer. |
| `required_when` rempli alors que `visible_when` ne l'est pas. | Un champ masqué n'est jamais exigé : l'enregistrement passe avec le champ vide. | Aligner les deux conditions. |
| Une valeur orthographiée différemment. | La condition n'est jamais remplie : la comparaison est exacte (seuls les espaces autour sont ignorés). | Reprendre les codes stockés, pas leurs libellés. |
| Un seuil (`AMOUNT > 1000`). | Les conditions ne testent que l'égalité. | Renvoyer un indicateur depuis la requête de lecture (`HIGH_VALUE = 'Y'`) et tester cet indicateur. |

---

## Pour aller plus loin

- [Conditions de formulaire](../../form-conditions.md) — la liste complète des réglages et le lieu de chaque contrôle.
- [Colonnes](./columns.md) — les autres réglages d'une colonne.
- [Actions et cycle de vie](./actions-and-lifecycle.md) — déclencher des actions au chargement, à l'enregistrement ou à l'annulation du formulaire.
