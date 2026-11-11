---
title: Formulaires de saisie
description: "Formulaires de saisie NomaUBL : éditeurs de facture simplifiés définis dans les Paramètres — champ par champ affiché, en lecture seule ou masqué, valeurs par défaut, champs obligatoires, alerte du jeu de règles — accordés par rôle, avec un sélecteur dans l'éditeur de facture."
keywords: [NomaUBL, formulaires de saisie, éditeur de facture, formulaire simplifié, champs obligatoires, valeurs par défaut, champs masqués, rôles, jeu de règles, EN 16931, promotion, JD Edwards, SAP, NetSuite, ERP sur mesure]
---

# Formulaires de saisie

Un **formulaire de saisie** est une version simplifiée de l'[éditeur de facture](../application/invoices.md#create-invoice) : pour chaque section et chaque champ, il décide si le champ est affiché, en lecture seule ou masqué, lui donne une valeur par défaut et peut le rendre obligatoire. Les formulaires s'accordent par rôle : un service client saisit ses factures sur un formulaire court tandis que la comptabilité garde l'éditeur complet.

Accès : **Paramètres → Add entry form** ; les formulaires figurent sous **Views & UI** en *Entry form: nom*. L'éditeur reste en anglais, à l'exception des noms de sections et de champs, qui suivent la langue de l'éditeur de facture.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 606" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ef-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ef-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ef-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ef-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="566" rx="14" fill="url(#ef-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Entry form: simple</text>
  <text x="240" y="74" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENTRY FORM</text>
  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL (ENGLISH)</text>
  <rect x="240" y="96" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="110.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Simple invoice</text>
  <text x="476" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL (FRENCH)</text>
  <rect x="476" y="96" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="110.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Facture simple</text>
  <rect x="712" y="96" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="748.0" y="110.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">👁 Preview</text>
  <text x="240" y="134" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Granted per role (Roles › Actions). A hidden field keeps its value.</text>
  <rect x="240" y="146" width="720" height="30" rx="6" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="252" y="165" fill="#fb923c" fontSize="9" fontFamily="system-ui, sans-serif">Required by the rule set EN 16931, but not editable in this form and without a value: Paiement › Moyen de paiement. Show the field…</text>
  <text x="240" y="200" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SECTIONS AND FIELDS</text>
  <rect x="240" y="210" width="720" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="230" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">▾  En-tête de la Facture</text>
  <text x="450" y="230" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">5/14 fields</text>
  <rect x="880" y="221" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M882.5,226.5 L884.8,228.8 L888.8,224" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="897" y="230" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Shown</text>
  <rect x="254" y="245" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="271" y="254" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Folded when the editor opens</text>
  <rect x="790" y="242" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="821.0" y="256.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Show all</text>
  <rect x="860" y="242" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="891.0" y="256.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Hide all</text>
  <text x="254" y="286" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">FIELD</text>
  <text x="444" y="286" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">IN THE FORM</text>
  <text x="694" y="286" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">REQUIRED</text>
  <text x="784" y="286" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">DEFAULT VALUE</text>
  <text x="254" y="310" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Numéro de facture</text>
  <rect x="444" y="298" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="445" y="299" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="468.5" y="311.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <line x1="493" y1="303" x2="493" y2="313" stroke="#334155" strokeWidth="1"/>
  <text x="527.5" y="311.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <line x1="562" y1="303" x2="562" y2="313" stroke="#334155" strokeWidth="1"/>
  <text x="589.0" y="311.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="303" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="312" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="298" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="311.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="254" y="337" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Date d'émission</text>
  <rect x="444" y="325" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="445" y="326" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="468.5" y="338.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <line x1="493" y1="330" x2="493" y2="340" stroke="#334155" strokeWidth="1"/>
  <text x="527.5" y="338.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <line x1="562" y1="330" x2="562" y2="340" stroke="#334155" strokeWidth="1"/>
  <text x="589.0" y="338.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="330" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M700.5,335.5 L702.8,337.8 L706.8,333" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="715" y="339" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="325" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="338.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">today</text>
  <text x="254" y="364" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Date d'échéance</text>
  <rect x="444" y="352" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="445" y="353" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="468.5" y="365.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <line x1="493" y1="357" x2="493" y2="367" stroke="#334155" strokeWidth="1"/>
  <text x="527.5" y="365.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <line x1="562" y1="357" x2="562" y2="367" stroke="#334155" strokeWidth="1"/>
  <text x="589.0" y="365.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="357" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="366" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="352" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="365.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">today+30</text>
  <text x="254" y="391" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Devise</text>
  <rect x="444" y="379" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="468.5" y="392.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <rect x="494" y="380" width="67" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="527.5" y="392.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <line x1="562" y1="384" x2="562" y2="394" stroke="#334155" strokeWidth="1"/>
  <text x="589.0" y="392.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="384" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="393" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="379" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="392.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">EUR</text>
  <text x="254" y="418" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Profil ID</text>
  <rect x="444" y="406" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="468.5" y="419.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <line x1="493" y1="411" x2="493" y2="421" stroke="#334155" strokeWidth="1"/>
  <text x="527.5" y="419.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <rect x="563" y="407" width="52" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="589.0" y="419.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="411" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="420" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="406" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="419.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="254" y="445" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Réf. Contrat</text>
  <rect x="444" y="433" width="172" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="468.5" y="446.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Shown</text>
  <line x1="493" y1="438" x2="493" y2="448" stroke="#334155" strokeWidth="1"/>
  <text x="527.5" y="446.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Read-only</text>
  <rect x="563" y="434" width="52" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="589.0" y="446.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Hidden</text>
  <rect x="698" y="438" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="447" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="784" y="433" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="446.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="472" width="720" height="30" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="491" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Client</text>
  <text x="450" y="491" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">6/15 fields</text>
  <rect x="880" y="482" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M882.5,487.5 L884.8,489.8 L888.8,485" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="897" y="491" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Shown</text>
  <rect x="240" y="508" width="720" height="30" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="527" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Livraison</text>
  <text x="450" y="527" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">0/9 fields</text>
  <rect x="880" y="518" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="897" y="527" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Shown</text>
  <rect x="240" y="544" width="720" height="30" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="563" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Lignes de Facture</text>
  <text x="450" y="563" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">7/14 fields</text>
  <text x="946" y="563" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Always shown</text>
  <rect x="20" y="86" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="101" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Libellés + aperçu</text>
  <text x="30" y="114" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'aperçu ouvre l'éditeur</text>
  <line x1="200" y1="103.0" x2="240" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Alerte du jeu de règles</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">obligatoire mais masqué, sans valeur</text>
  <line x1="200" y1="167.0" x2="240" y2="161" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Affiché · lecture seule · masqué</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un champ masqué garde sa valeur</text>
  <line x1="200" y1="347.0" x2="444" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
  <rect x="1000" y="214" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="229" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Section affichée</text>
  <text x="1010" y="242" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou repliée à l'ouverture</text>
  <line x1="1000" y1="231.0" x2="880" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Obligatoire + défaut</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">today, today+30, valeur de liste…</text>
  <line x1="1000" y1="347.0" x2="860" y2="334" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
  <rect x="1000" y="490" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="505" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections fixes</text>
  <text x="1010" y="518" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clés et lignes toujours affichées</text>
  <line x1="1000" y1="507.0" x2="920" y2="555" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ef-arrow)"/>
</svg>

---

## Création d'un formulaire

**Add entry form** demande un nom et une description ; le formulaire est enregistré sous `entry-form-<nom>`. Un nouveau formulaire reprend l'éditeur entier — toutes les sections et tous les champs affichés — et **Copy** duplique un formulaire existant.

| Champ | Description |
|---|---|
| **Label (English)** · **Label (French)** | Nom affiché dans le sélecteur de l'éditeur, dans la langue de l'utilisateur (anglais à défaut de libellé français). |
| **Preview** | Ouvre l'éditeur de facture sur le formulaire en l'état, avec l'enregistrement désactivé. |

---

## Sections et champs \{#fields\}

Une carte par section de l'éditeur de facture : en-tête, client, livraison, paiement, lignes… Chaque carte indique *champs affichés/total*, une case **Shown** pour masquer toute la section, **Folded when the editor opens**, et **Show all** / **Hide all**. *Clés du Document* et *Lignes de Facture* sont **Always shown** ; *Récapitulatif TVA* et *Totaux* sont calculés.

| Colonne | Description |
|---|---|
| **In the form** | **Shown** (affiché), **Read-only** (grisé, sans saisie) ou **Hidden** (masqué). Un champ masqué garde sa valeur et s'enregistre avec la facture : un formulaire simple ne fait jamais perdre les données d'une facture riche. |
| **Required** | L'enregistrement est refusé tant que le champ est vide — *Obligatoire : …* — pour les champs à valeur unique ; un champ de ligne est obligatoire sur chaque ligne. |
| **Default value** | Valeur d'une nouvelle facture (et de chaque nouvelle ligne pour les champs de ligne). Un champ de liste prend une valeur de sa liste ; une date accepte `today`, `today+N`, `today-N` ou une date. |

Une section ou un champ ajouté à l'éditeur après l'enregistrement du formulaire porte l'étiquette **new** ; tant que le formulaire n'est pas enregistré de nouveau, il est considéré comme masqué.

### Alertes \{#warnings\}

- Sous un champ : *Required, but the user cannot fill it and it has no default.* — obligatoire, non affiché, sans valeur par défaut.
- En haut : *Required by the rule set …, but not editable in this form and without a value: Section › Champ, … Show the field or give it a default, or the invoice fails validation.* Le contrôle s'appuie sur le [jeu de règles](../ubl-tools/xsl-editor.md) par défaut : chaque terme métier qu'il exige doit être affiché ou avoir une valeur.

---

## Dans l'éditeur de facture \{#in-the-editor\}

- L'éditeur s'ouvre sur le formulaire par défaut du rôle. Avec plusieurs formulaires accordés, un sélecteur dans son en-tête change de formulaire ; la saisie en cours est conservée et seuls les champs vides prennent les valeurs par défaut du nouveau formulaire.
- Les valeurs par défaut s'appliquent à une nouvelle facture et à chaque nouvelle ligne. L'ouverture d'une facture existante (modification, copie) conserve ses valeurs.
- Le contrôle des champs obligatoires s'ajoute à la validation XSD et Schematron, sans la remplacer. Un formulaire est une commodité de l'éditeur, pas une règle de sécurité : le serveur enregistre les champs masqués comme les autres.

---

## Accès \{#access\}

Dans l'[éditeur de rôles](./security/roles.md), onglet **Actions**, le bloc **Formulaires de saisie des factures** liste *Complet* (l'éditeur entier) et chaque formulaire. Cocher les formulaires que le rôle peut utiliser ; s'il y en a plusieurs, **S'ouvre sur** choisit celui sur lequel l'éditeur s'ouvre. Un rôle sans formulaire coché garde l'éditeur complet.

Les formulaires passent d'un environnement à l'autre par [promotion](../management/promotion.md) (type *Formulaire de saisie*) ; les droits des rôles restent propres à chaque environnement.

---

## Conseils & bonnes pratiques

- **Partir des champs que l'équipe saisit réellement.** Masquer le reste plutôt que le supprimer : les valeurs masquées restent sur la facture.
- **Donner une valeur par défaut aux valeurs constantes et les verrouiller.** Une devise, un moyen de paiement ou un profil en lecture seule avec une valeur par défaut évite les erreurs de saisie.
- **Lever chaque alerte du jeu de règles avant d'accorder le formulaire.** Un terme obligatoire que l'utilisateur ne peut pas renseigner produit des factures en échec de validation.
- **Passer par Preview après chaque modification.** L'aperçu montre l'éditeur tel que le rôle le verra.
