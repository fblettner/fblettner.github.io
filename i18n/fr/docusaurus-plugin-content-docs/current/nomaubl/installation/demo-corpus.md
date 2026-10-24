---
title: Corpus de démonstration
description: "Remplir une instance de démonstration NomaUBL avec des données fictives mais réalistes — factures et avoirs émis à partir de fichiers UBL, de spools de type JDE et de PDF texte, factures fournisseurs, cycles de vie, enveloppes d'e-reporting et notifications — par les vraies chaînes de traitement, depuis Paramètres › Global ou la ligne de commande, et le réinitialiser en une étape."
keywords: [NomaUBL, démonstration, démo, données d'exemple, corpus, factures fictives, instance de démonstration, -demo, réinitialisation, formation, test, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Corpus de démonstration

Le **corpus de démonstration** remplit une instance de démonstration avec des données fictives mais réalistes, pour présenter ou tester chaque page de NomaUBL sans fichier client : factures et avoirs émis de toute nature, factures fournisseurs, cycles de vie avec statuts de plateforme, enveloppes d'e-reporting et notifications. Tout passe par les **vraies chaînes de traitement** — génération UBL, validation, archivage, journal des traitements — mais rien n'est envoyé à une plateforme. La même graine produit le même corpus, et une réinitialisation retire tout ce que la démonstration a créé.

:::warning[Instances de démonstration uniquement]
Le corpus ne peut être créé que sur une instance marquée **Demo instance = Y**. Ne jamais régler cette option sur une instance client.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1200 394" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="334" rx="14" fill="url(#dm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Global · Directories</text>
  <text x="240" y="80" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Demo instance</text>
  <rect x="420" y="66" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="80.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Y ▾</text>
  <rect x="240" y="100" width="720" height="170" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="254" y="122" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DEMO CORPUS</text>
  <text x="254" y="140" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Fills this instance with fictitious invoices through the real pipelines. Save the settings first; needs Update DB = Y.</text>
  <text x="254" y="169" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Invoices</text>
  <rect x="324" y="154" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="334" y="168.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">300</text>
  <text x="604" y="169" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Months</text>
  <rect x="674" y="154" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="684" y="168.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">6</text>
  <text x="832" y="169" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Period ending with the…</text>
  <text x="254" y="203" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Seed</text>
  <rect x="324" y="188" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="334" y="202.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">2026</text>
  <text x="482" y="203" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Same seed, same corpus.</text>
  <text x="604" y="203" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Sources</text>
  <rect x="674" y="188" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="684" y="202.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">ubl,jde,pdf,recv</text>
  <text x="832" y="203" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Any of ubl, jde, pdf, …</text>
  <rect x="254" y="230" width="134" height="26" rx="5" fill="url(#dm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="321.0" y="246.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fill the demo corpus</text>
  <rect x="396" y="230" width="139" height="26" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="465.5" y="246.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Reset the demo corpus</text>
  <rect x="240" y="292" width="170" height="46" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="325.0" y="312.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">demo_ubl</text>
  <text x="325.0" y="327.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">fichiers UBL</text>
  <rect x="420" y="292" width="170" height="46" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="505.0" y="312.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">demo_jde</text>
  <text x="505.0" y="327.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">spools type JDE</text>
  <rect x="600" y="292" width="170" height="46" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="685.0" y="312.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">demo_pdf</text>
  <text x="685.0" y="327.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF texte</text>
  <rect x="780" y="292" width="170" height="46" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="865.0" y="312.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">demo_received</text>
  <text x="865.0" y="327.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">factures fournisseurs</text>
  <rect x="20" y="62" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="77" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Instance de démonstration</text>
  <text x="30" y="90" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Y requis — jamais chez un client</text>
  <line x1="200" y1="79.0" x2="420" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dm-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Même graine, même corpus</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">démonstrations reproductibles</text>
  <line x1="200" y1="167.0" x2="324" y2="199" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dm-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches de fond</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remplir ou réinitialiser, avec progression</text>
  <line x1="200" y1="247.0" x2="254" y2="243" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dm-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sources</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">UBL, spool, PDF, reçues</text>
  <line x1="1000" y1="167.0" x2="824" y2="199" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dm-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre documents de démo</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par les vraies chaînes</text>
  <line x1="1000" y1="307.0" x2="960" y2="315" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dm-arrow)"/>
</svg>

---

## Prérequis

| Réglage | Emplacement | Valeur |
|---|---|---|
| **Demo instance** | [Paramètres › Global › Directories](../configuration/system/global.md) | `Y` |
| **Update DB** | Paramètres › Global › Processing | `Y` — les chaînes spool et PDF et le journal des traitements doivent écrire en base. |

Les feuilles de style de l'environnement doivent être installées (elles le sont après une [installation](./install-and-layout.md) standard).

---

## Contenu du corpus

| Document | Source | Contenu |
|---|---|---|
| `demo_ubl` | Fichiers UBL | Factures et avoirs émis couvrant les types de facture (380, 381, 384, 389, 261, 262), EN 16931 et le profil étendu français, les types de transaction (B2B, B2G, B2C, B2BINT, hors champ), toutes les catégories de TVA, remises et charges de document et de ligne, acomptes, bénéficiaires, représentants fiscaux, livraisons, moyens de paiement, pièces jointes et références. Paramétré avec la [post-transformation](../ubl-tools/post-transform.md) UBL vers CII. |
| `demo_jde` | Spools XML de type JDE | Plusieurs factures par fichier, par la chaîne XML ; le mapping, produit à partir du modèle livré, montre des chemins imbriqués, une constante, un total de TVA additionné, un champ trouvé n'importe où dans le bloc et un saut de ligne. |
| `demo_pdf` | PDF texte | Relus par la conversion PDF vers XML : deux blocs d'adresse, des lignes étiquetées, un tableau et des champs par expression régulière pour la clé du document. |
| `demo_received` | Factures fournisseurs UBL | Factures reçues de six fournisseurs français fictifs, conduites selon le parcours acheteur : mise à disposition, prise en charge, approuvée, en litige, refusée, payée. |

Autour d'eux :

- **Sociétés et clients** — cinq sociétés émettrices et trente acheteurs, fictifs, avec des identifiants valides (SIREN, numéro de TVA, IBAN).
- **Cycles de vie** — les factures destinées à la plateforme suivent des parcours datés réalistes : envoyée, en attente, déposée, non transmise, refusée, rejetée, en litige, suspendue, approuvée, payée, avec des échecs d'envoi et d'import et des renvois ; certaines sont marquées comme vues. Rien n'atteint une vraie plateforme.
- **Anomalies** — toutes les factures passent les contrôles français, sauf quelques-unes volontairement invalides pour illustrer les erreurs de validation.
- **E-reporting** — des enveloppes pour chaque mois terminé, produites par le vrai traitement d'e-reporting, puis conduites jusqu'à déposée, échec d'import ou rejetée.
- **Notifications** — une règle de notification limitée au portail pour les refus, rejets et échecs.

---

## Depuis les paramètres \{#from-the-settings\}

Quand *Demo instance* vaut `Y`, l'onglet **Directories** des [paramètres globaux](../configuration/system/global.md) affiche un bloc **Demo corpus** :

| Champ | Défaut | Description |
|---|---|---|
| **Invoices** | `300` | Nombre de factures produites. |
| **Months** | `6` | Période couverte, qui se termine au mois en cours. |
| **Seed** | `2026` | Même graine, même corpus. |
| **Sources** | `ubl,jde,pdf,recv` | Parmi `ubl`, `jde`, `pdf`, `recv` (factures reçues). |

**Fill the demo corpus** et **Reset the demo corpus** s'exécutent en tâche de fond avec la fenêtre de progression habituelle. La réinitialisation demande confirmation et retire toutes les factures, enveloppes, lignes de notification, fichiers et documents créés par la démonstration sur l'instance. Enregistrer les paramètres avant de remplir le corpus.

Ce bloc reste en anglais dans l'application.

---

## En ligne de commande

```bash
java -jar nomaubl.jar -demo /opt/nomaubl/demo/config/config.json [--seed N] [--invoices 300] [--companies 5] [--customers 30] [--from aaaa-MM] [--months 6] [--sources ubl,jde,pdf,recv] [--out <dossier>] [--reset] [--no-process] [--no-lifecycle]
```

| Option | Effet |
|---|---|
| **`--seed`**, **`--invoices`**, **`--months`**, **`--sources`** | Comme dans le bloc des paramètres. |
| **`--companies`** / **`--customers`** | Nombre de sociétés émettrices (5) et d'acheteurs (30). |
| **`--from <aaaa-MM>`** | Premier mois de la période, à la place de *Months* compté depuis aujourd'hui. |
| **`--out <dossier>`** | Dossier des fichiers produits. |
| **`--no-process`** | Produit les fichiers sans les traiter. |
| **`--no-lifecycle`** | Traite les factures sans conduire leur cycle de vie. |
| **`--reset`** | Retire tout ce que la démonstration a créé. |

Voir [Ligne de commande](../management/command-line.md#demo).

---

## Conseils & bonnes pratiques

- **Réserver un environnement de démonstration**, à côté de la recette et de la production, installé comme les autres ; ne régler *Demo instance* que sur lui.
- **Fixer la graine** pour une formation ou une démonstration enregistrée : les mêmes factures reviennent après une réinitialisation.
- **Réinitialiser avant de remplir de nouveau.** Un remplissage s'ajoute à l'existant ; une réinitialisation repart d'une base propre.
- **S'appuyer sur le corpus pour essayer un réglage** — un jeu de règles, une post-transformation, une règle de notification — sur des centaines de factures variées avant de toucher une instance client.
