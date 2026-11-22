---
title: Champs conditionnels
description: "Faire apparaître un champ de dialogue, le rendre obligatoire, le verrouiller ou lui imposer une valeur uniquement quand un autre champ a une valeur donnée — réglé sur la colonne dans le Concepteur d'écran de Liberty Next, avec des exemples."
keywords: [Liberty Next, champs conditionnels, visible_when, required_when, disabled_when, default_when, disable_on_edit, editable_when, éditeur d'écran, dialogue]
---

# Champs conditionnels

Un dialogue figé pose toujours les mêmes questions. Un dialogue conditionnel s'adapte aux choix déjà faits : afficher **IBAN** pour un virement uniquement, signaler **Motif d'annulation** comme obligatoire pour une commande annulée seulement, verrouiller le **Numéro de facture** une fois la facture créée.

Les réglages et leur comportement exact sont détaillés dans [Conditions de formulaire](../../form-conditions.md). Cette page en montre la mise en place.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cnd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cnd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cnd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cnd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="464" rx="14" fill="url(#cnd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran ·</text>
  <text x="367.648" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1011" y="32" width="69" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="981" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="993.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <text x="971" y="47" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">modifications non enregistrées</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QU'IL EST</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Clients</text>
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cnd-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 requête(s) d'enregistrem…</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cnd-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRILLE</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 colonne(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filtre(s) · 1 vue(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cnd-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHE</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 onglet(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 champ(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cnd-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 action(s) de barre d…</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 dans le menu de ligne ·…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cnd-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SORTIE</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">l'export de la grille</text>
  <rect x="238" y="146" width="162" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="239" y="147" width="62" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="270.0" y="160.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <line x1="302" y1="151" x2="302" y2="163" stroke="#334155" strokeWidth="1"/>
  <text x="324.0" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <line x1="346" y1="151" x2="346" y2="163" stroke="#334155" strokeWidth="1"/>
  <text x="373.0" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Résumé</text>
  <rect x="238" y="180" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="200" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="194" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="260" y="206" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="526" y="200" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="218" width="300" height="32" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="247" y="238" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="232" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">CANCELLATION_REASON</text>
  <text x="260" y="244" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Motif d'annulation</text>
  <text x="526" y="238" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="256" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="276" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="270" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">PAYMENT_METHOD</text>
  <text x="260" y="282" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Mode de paiement</text>
  <text x="526" y="276" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="294" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="314" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="308" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">IBAN</text>
  <text x="260" y="320" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">IBAN</text>
  <text x="526" y="314" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="332" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="352" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="346" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">INVOICE_NUMBER</text>
  <text x="260" y="358" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">N° de facture</text>
  <text x="526" y="352" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="554" y="180" width="528" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="564" y="190" width="508" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="570" y="193" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="631.0" y="207.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="ui-monospace, monospace">← CANCELLATION_REASON</text>
  <text x="702.764" y="207" fill="#94a3b8" fontSize="8.2" fontFamily="ui-monospace, monospace">≋ CANCELLATION_REASON  ›</text>
  <text x="830.78" y="207" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="ui-monospace, monospace">Required When: (new)</text>
  <text x="566" y="236" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FIELD ∗</text>
  <rect x="566" y="241" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="255.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="1058" y="255.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="566" y="275" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">The filter column whose value gates this column's visibility.</text>
  <text x="566" y="296" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VALUE ∗</text>
  <rect x="566" y="302" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="316.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">CANCELLED</text>
  <text x="1060" y="316.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="566" y="330" width="46" height="18" rx="4" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="589" y="342.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="566" y="362" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">The allowed value, or list of allowed values.</text>
  <text x="566" y="380" fill="#94a3b8" fontSize="8" fontStyle="italic" fontFamily="system-ui, sans-serif">depuis l'onglet Edit de la colonne :</text>
  <text x="591.0" y="400.3" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="645.0" y="400.3" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <text x="697.0" y="400.3" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <text x="744.5" y="400.3" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <rect x="769" y="388" width="37" height="18" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="787.5" y="400.3" fill="#4a9eff" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <text x="837.0" y="400.3" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <text x="566" y="422" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUIRED</text>
  <text x="619.4272" y="422" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">☐ disabled</text>
  <text x="716" y="422" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUIRED WHEN</text>
  <text x="797.8192" y="422" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="866" y="422" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DISABLED WHEN</text>
  <text x="947.8192" y="422" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">+ add</text>
  <line x1="220" y1="442" x2="1100" y2="442" stroke="#1f2937" strokeWidth="1"/>
  <rect x="990" y="452" width="92" height="22" rx="5" fill="url(#cnd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1036.0" y="466.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="911" y="452" width="71" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="946.5" y="466.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choisir la colonne</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le champ de la fiche</text>
  <line x1="200" y1="227.0" x2="238" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Edit ▸ Required when</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ add ouvre une condition</text>
  <line x1="200" y1="337.0" x2="566" y2="419" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="1120" y="182" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="197" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Retour à la colonne</text>
  <text x="1130" y="210" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le fil d'Ariane nomme le réglage</text>
  <line x1="1120" y1="199.0" x2="1062" y2="203" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="1120" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le champ qui décide</text>
  <text x="1130" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisi parmi les colonnes de l'écran</text>
  <line x1="1120" y1="249.0" x2="1070" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="1120" y="298" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ou plusieurs valeurs</text>
  <text x="1130" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'une suffit</text>
  <line x1="1120" y1="315.0" x2="1052" y2="313" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="1120" y="396" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="411" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Plusieurs conditions</text>
  <text x="1130" y="424" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">toutes doivent être vraies (ET)</text>
  <line x1="1120" y1="413.0" x2="1070" y2="419" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
</svg>

---

## Où les régler

Un champ de dialogue affiche une colonne de l'écran, et c'est la colonne qui porte tous les comportements — les mêmes réglages pilotent le dialogue et la grille. Dans le Concepteur d'écran :

1. À l'étape **Fiche**, cliquer sur le champ dans le [Constructeur de dialogue](./dialog-builder.md) — ou, à l'étape **Grille**, choisir la colonne dans **Colonnes**.
2. Les réglages de la colonne s'affichent, répartis en onglets (**Configuration de la colonne** dans l'Inspecteur) : les conditions se trouvent dans **Filter** (`visible_when`), **Edit** (`required_when`, `disabled_when`, `disable_on_add`, `disable_on_edit`), **Defaults** (`default_when`, `write_when`) et **Rules** (`rules_when`).
3. Sous le réglage, **+ add** ouvre une nouvelle condition dans le même panneau — son fil d'Ariane indique par exemple *Required When: (new)* : choisir le **Field** parmi les colonnes de l'écran et saisir la **Value**, ou plusieurs valeurs (**+ add** sous Value). Le fil d'Ariane ramène à la colonne.

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

À l'étape **Ce qu'il est** du Concepteur d'écran :

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
