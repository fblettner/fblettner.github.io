---
title: Remises / charges
description: "NomaUBL Valeurs par défaut UBL — onglet Remises / charges : code motif par défaut choisi dans les listes UNTDID 5189 (remises) et 7161 (frais), motif par défaut et correspondance des codes source vers les codes UBL, pour les remises et frais du document et des lignes, et règles qui reprennent des lignes source (port, frais) en frais ou remises de document."
keywords: [NomaUBL, UBL, valeurs par défaut, remises, frais, charges, code motif, UNTDID 5189, UNTDID 7161, BT-97, BT-98, BT-104, BT-105, ChargeIndicator, JD Edwards, SAP, NetSuite, ERP sur mesure]
---

# Remises / charges

L'onglet **Remises / charges** règle la façon dont NomaUBL renseigne le **code motif** et le **motif** des remises et des frais, au niveau du document (BG-20 / BG-21) comme au niveau des lignes (BG-27 / BG-28) : codes source convertis en codes UNTDID 5189 / 7161, code par défaut si la source n'en donne pas, et libellé de la liste si la source ne donne pas de motif. Le fonctionnement est identique quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP sur mesure.

Le mécanisme de remplacement (valeurs partagées, ou remplacement pour un document) est décrit dans la [Vue d'ensemble](./overview.md).

---

## Deux blocs

| Bloc | Sens | Code / motif |
|---|---|---|
| **Remise (ChargeIndicator = false)** | Montant déduit | BT-98 / BT-140 (code), BT-97 / BT-139 (motif) |
| **Frais (ChargeIndicator = true)** | Montant ajouté | BT-105 / BT-145 (code), BT-104 / BT-144 (motif) |

Chaque bloc comporte les mêmes champs :

| Champ | Description |
|---|---|
| **Code motif** | Code par défaut, choisi dans la liste — motifs de remise (UNTDID 5189) ou motifs de frais (UNTDID 7161), affichés avec leur libellé. Utilisé quand la source ne donne pas de code. Le choix d'un code renseigne **Motif** avec son libellé, sauf si un texte a déjà été saisi. |
| **Motif** | Motif par défaut, utilisé avec le code par défaut (ou en l'absence de tout code). |
| **Correspondance des codes source** | Tableau **Code externe** → **Code UBL** : convertit un code du système source en code de la liste. Un code source absent du tableau est repris tel quel. |

Les deux listes sont livrées avec NomaUBL, en français et en anglais (*list-allowance-reasons*, *list-charge-reasons*), et figurent dans la zone *Custom data* des Paramètres.

---

## Choix du code et du motif \{#how-the-code-and-the-text-are-chosen\}

Pour chaque remise ou frais, au niveau du document ou de la ligne :

| | Règle |
|---|---|
| **Code** | Pas de code dans la source → le code par défaut. Sinon le code source, converti par la correspondance s'il y figure. |
| **Motif** | 1. Le motif de la source. 2. À défaut, le motif par défaut, si le code est le code par défaut ou s'il n'y a pas de code. 3. À défaut, le libellé du code dans la liste (libellé français). |

Le sens vient de l'*indicateur de frais* du mapping : le bloc Frais s'applique aux frais, le bloc Remise aux remises. Le mapping des remises et frais eux-mêmes — section *Document Allowances/Charges* au niveau du document et *Line Allowances/Charges* au niveau des lignes — est décrit sur la page [Éditeur XSL](../xsl-editor.md#variable-mapping).

---

## Lignes reprises en frais ou remise de document \{#lines-as-document-charges\}

Certaines lignes de la source ne sont pas des lignes de facture au sens de la norme : une ligne de port, des frais de manutention, une remise imprimée comme une ligne. Les règles de la section **Lignes reprises en frais ou remise de document** les désignent ; une ligne concernée quitte les lignes de facture et devient un frais (BG-21) ou une remise (BG-20) au niveau du document.

<svg viewBox="0 0 1200 346" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lac-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lac-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lac-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lac-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="312" rx="14" fill="url(#lac-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes reprises en frais ou remise de document</text>
  <line x1="240" y1="58" x2="960" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Règles</text>
  <text x="285.6" y="80" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">— Une ligne concernée quitte les lignes de facture et est totalisée par code motif et taux de TVA. La première règle…</text>
  <rect x="240" y="94" width="720" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="114" fill="#94a3b8" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="113" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Logique</text>
  <rect x="312" y="101" width="54" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="322" y="115.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">AND ▾</text>
  <text x="380" y="113" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Résultat</text>
  <rect x="428" y="101" width="84" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="115.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Frais ▾</text>
  <rect x="520" y="101" width="210" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="115.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">FC  Frais de transport ▾</text>
  <rect x="926" y="101" width="24" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="938.0" y="115.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="254" y="130" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ItemType</text>
  <rect x="412" y="130" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="422" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">= valeur ▾</text>
  <rect x="520" y="130" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">FRT</text>
  <rect x="608" y="130" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="619.0" y="144.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="254" y="156" width="137" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="322.5" y="169.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une condition</text>
  <rect x="240" y="192" width="720" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="212" fill="#94a3b8" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="211" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Logique</text>
  <rect x="312" y="199" width="54" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="322" y="213.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">AND ▾</text>
  <text x="380" y="211" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Résultat</text>
  <rect x="428" y="199" width="84" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="213.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Remise ▾</text>
  <rect x="520" y="199" width="210" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="213.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Code motif lu dans un champ de la ligne ▾</text>
  <rect x="738" y="199" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="213.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ReasonCode</text>
  <rect x="926" y="199" width="24" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="938.0" y="213.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="254" y="228" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="242.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">LineType</text>
  <rect x="412" y="228" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="422" y="242.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">= valeur ▾</text>
  <rect x="520" y="228" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="242.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">DISC</text>
  <rect x="608" y="228" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="619.0" y="242.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="254" y="254" width="137" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="322.5" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une condition</text>
  <rect x="240" y="292" width="184" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="332.0" y="306.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un groupe de règles</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La première l'emporte</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">poignée pour réordonner</text>
  <line x1="200" y1="113.0" x2="252" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Conditions sur la ligne</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">champ, opérateur, valeur</text>
  <line x1="200" y1="167.0" x2="254" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champ de la ligne</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">élément de la ligne source</text>
  <line x1="200" y1="267.0" x2="254" y2="239" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Frais ou remise</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">niveau document, BG-21 / BG-20</text>
  <line x1="1000" y1="77.0" x2="512" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
  <rect x="1000" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code motif</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liste, champ ou code par défaut</text>
  <line x1="1000" y1="147.0" x2="730" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code lu dans la ligne</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">converti par la correspondance</text>
  <line x1="1000" y1="247.0" x2="828" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
</svg>

### Règles

Chaque règle comporte une **Logique** (AND / OR entre ses conditions), ses conditions et un **Résultat** :

| Partie | Description |
|---|---|
| **Condition** | Un champ de la ligne — le nom d'un élément de la ligne source, cherché dans la ligne ou en dessous —, un opérateur et une valeur. Les opérateurs sont `> 0`, `< 0`, `≥ 0`, `≤ 0`, `= valeur`, `≠ valeur`, `non vide`, `vide`, `contient`, `ne contient pas`. **Ajouter une condition** en ajoute une. |
| **Résultat — nature** | **Frais** ou **Remise**. |
| **Résultat — code motif** | Un code de la liste (motifs de frais UNTDID 7161, motifs de remise UNTDID 5189), **Code motif lu dans un champ de la ligne** suivi du nom de ce champ, ou **Code motif par défaut** — le code par défaut du bloc correspondant ci-dessus. |

Les règles se lisent de haut en bas et la première qui correspond s'applique : la poignée ⠿ les réordonne, **Ajouter un groupe de règles** en ajoute une, la corbeille en retire une. Sans règle, toutes les lignes de la source restent des lignes de facture.

### Ce que reçoit la facture

- Les lignes concernées quittent les lignes de facture.
- Leurs montants sont totalisés par nature, code motif, catégorie et taux de TVA — le taux de la ligne, ou celui du document si la ligne n'en porte pas. Chaque groupe donne un frais ou une remise de document, pour son montant en valeur absolue ; un groupe dont le total est nul ne donne rien.
- Un code lu dans un champ passe par la **Correspondance des codes source** de son bloc, comme tout code source ; le motif suit les règles de [Choix du code et du motif](#how-the-code-and-the-text-are-chosen).
- Les totaux suivent : somme des lignes (BT-106), des remises (BT-107), des frais (BT-108) et les totaux qui en découlent.
- Le fichier source et le PDF lisible ne changent pas.

Les règles définies dans les valeurs partagées s'appliquent à tous les documents ; un document peut les surcharger avec le reste de l'onglet.

---

## Conseils & bonnes pratiques

- **Convertir les codes source plutôt que les motifs.** Un système source porte en général ses propres codes de remise ou de frais : une ligne de correspondance par code donne un code UNTDID valide et, par la liste, un motif lisible.
- **Renseigner un code par défaut pour chaque sens utilisé.** Sans code ni motif, une remise ou des frais ne respectent pas les règles EN 16931 sur les motifs.
- **Garder le motif par défaut cohérent avec le code par défaut.** Ce motif n'accompagne que ce code ; pour tout autre code, c'est le libellé de la liste qui s'applique.
- **Reprendre les lignes de port et de frais par une règle** plutôt que de modifier la source : la source et le PDF gardent la ligne, l'UBL porte un frais de document avec le bon code motif.
- **Un remplacement par document est rarement utile.** Le réserver à un document dont la source utilise ses propres codes.
