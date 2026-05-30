---
title: Menus
description: "L'arborescence de la barre latérale — dossiers, feuilles, permissions. Construite depuis Paramètres → Menus avec un éditeur d'arbre par glisser-déposer ; chaque feuille pointe sur un écran, un tableau de bord, un endpoint ou une page externe, et l'arbre est élagué par appelant selon ses permissions effectives."
keywords: [Liberty Framework, menu, barre latérale, navigation, permission, dossier, feuille, écran, tableau de bord, endpoint, paramètres, espace de travail]
---

# Menus

Le **menu** est l'arborescence de la barre latérale que l'utilisateur voit sur la gauche de chaque page — dossiers, feuilles, icônes, badges. Le framework traite les menus par application : le menu de chaque application définit son espace de travail, et le sélecteur d'espace de travail en haut de l'en-tête permet de passer de l'un à l'autre.

Les menus sont construits et modifiés dans **Paramètres → Menus** avec un éditeur d'arbre par glisser-déposer. Chaque feuille pointe sur l'une de cinq cibles — un écran, un tableau de bord, un endpoint de connecteur, une page personnalisée ou un lien externe — et est **élaguée par appelant** afin que les utilisateurs ne voient que les entrées que leurs permissions ouvrent réellement.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="mn-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="mn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#mn-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">De l'éditeur à la barre latérale rendue — et l'élagage par appelant</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="260" height="160" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="190" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉDITEUR — Paramètres → Menus</text>
  <text x="80" y="152" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📂 Facturation</text>
  <text x="100" y="172" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Factures</text>
  <text x="100" y="190" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Avoirs</text>
  <text x="100" y="208" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📊 Tableau de bord</text>
  <text x="80" y="232" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📂 Administration</text>
  <text x="100" y="248" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Paramètres</text>

  <rect x="380" y="100" width="280" height="160" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="520" y="124" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILTRE DE PERMISSIONS</text>
  <text x="520" y="160" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">l'appelant a : viewer</text>
  <text x="520" y="186" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">screen:billing:invoices  ✓</text>
  <text x="520" y="202" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">screen:billing:credit_notes  ✓</text>
  <text x="520" y="218" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">dashboard:billing-overview  ✓</text>
  <text x="520" y="234" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">screen:admin:settings  ✕</text>

  <rect x="720" y="100" width="220" height="160" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BARRE LATÉRALE RENDUE</text>
  <text x="740" y="160" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📂 Facturation</text>
  <text x="760" y="180" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Factures</text>
  <text x="760" y="198" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📄 Avoirs</text>
  <text x="760" y="216" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📊 Tableau de bord</text>
  <text x="830" y="252" fill="#94a3b8" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">dossier Administration vide masqué</text>

  <line x1="320" y1="180" x2="380" y2="180" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#mn-arrow)"/>
  <line x1="660" y1="180" x2="720" y2="180" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#mn-arrow)"/>
</svg>

---

## Paramètres → Menus

La page liste chaque menu de l'installation — un par application (`billing`, `crm`, `nomajde`…), plus le menu spécial `_default` pour les entrées transverses au framework. Cliquer sur une ligne ouvre l'**éditeur d'arbre** à droite.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Menus → billing</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Aperçu en tant que ▾</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Enregistrer et recharger</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '50% 50%', minHeight: '240px'}}>
    <div style={{padding: '14px 16px', borderRight: '1px solid rgba(255,255,255,0.05)'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Arbre</div>
      <div style={{fontSize: '11px', lineHeight: '1.8'}}>
        <div style={{opacity: 0.5, marginRight: '6px', display: 'inline-block'}}>⋮⋮</div>📂 <b>Facturation</b>
        <div style={{paddingLeft: '24px'}}><span style={{opacity: 0.5, marginRight: '6px'}}>⋮⋮</span>📄 Factures</div>
        <div style={{paddingLeft: '24px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.30)', borderRadius: '4px', paddingTop: '2px', paddingBottom: '2px'}}><span style={{opacity: 0.5, marginRight: '6px'}}>⋮⋮</span>📄 Avoirs</div>
        <div style={{paddingLeft: '24px'}}><span style={{opacity: 0.5, marginRight: '6px'}}>⋮⋮</span>📊 Tableau de bord</div>
        <div style={{opacity: 0.5, marginRight: '6px', display: 'inline-block'}}>⋮⋮</div>📂 <b>Administration</b>
        <div style={{paddingLeft: '24px'}}><span style={{opacity: 0.5, marginRight: '6px'}}>⋮⋮</span>📄 Paramètres</div>
      </div>
      <div style={{marginTop: '12px'}}><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Ajouter dossier</span> <span style={{marginLeft: '6px', padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Ajouter feuille</span></div>
    </div>
    <div style={{padding: '14px 16px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Éditeur de feuille — Avoirs</div>
      <div style={{display: 'grid', gridTemplateColumns: '110px 1fr', rowGap: '8px', columnGap: '10px', alignItems: 'center'}}>
        <div style={{opacity: 0.75}}>Libellé</div><div><span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Avoirs</span></div>
        <div style={{opacity: 0.75}}>Type</div><div><span style={{padding: '3px 8px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '11px', fontWeight: 600}}>Écran ▾</span></div>
        <div style={{opacity: 0.75}}>Écran</div><div><span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>billing/credit_notes ▾</span></div>
        <div style={{opacity: 0.75}}>Icône</div><div><span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>file-x ▾</span></div>
        <div style={{opacity: 0.75}}>Badge</div><div><span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>—</span></div>
        <div style={{opacity: 0.75}}>Rôles</div><div><span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Tous</span></div>
      </div>
    </div>
  </div>
</div>

L'**éditeur d'arbre** à gauche accepte le glisser-déposer : réordonner des frères, déposer une feuille dans un dossier, déposer un dossier dans un autre dossier. La sélection met en évidence l'entrée dont les détails apparaissent dans l'**éditeur de feuille** à droite.

---

## Contrôles de l'arbre

| Contrôle | Effet |
|---|---|
| **Poignée ⋮⋮** sur chaque ligne | Poignée de glissement. Déposer sur un frère pour réordonner, sur un dossier pour imbriquer, sur la zone corbeille (en bas) pour supprimer. |
| **+ Ajouter dossier** | Insère un dossier vide sous la sélection courante. L'éditeur de dossier s'ouvre dans le panneau de l'éditeur de feuille — seuls les champs *Libellé* et *Icône*. |
| **+ Ajouter feuille** | Insère une nouvelle feuille sous la sélection courante. L'éditeur de feuille s'ouvre — voir [Éditeur de feuille](#leaf-editor). |
| **✕** sur une ligne | Supprime l'entrée. Une confirmation apparaît pour les dossiers qui contiennent des feuilles. |
| **Chevron ▼ / ▶** | Replier / déplier un dossier dans l'arbre (sans affecter l'ordre enregistré). |

La liste **Aperçu en tant que ▾** de la barre d'outils re-rend l'arbre tel qu'un rôle précis le verrait après élagage — un moyen rapide de vérifier qu'un viewer ne voit pas les entrées d'administration.

---

## Éditeur de feuille \{#leaf-editor}

Le panneau de droite présente les champs de la feuille sélectionnée :

| Champ | Effet |
|---|---|
| **Libellé** | Libellé d'affichage dans la barre latérale. Localisé via le dictionnaire. |
| **Type** | Ce que la feuille ouvre — voir [Types de feuille](#leaf-types) ci-dessous. Chaque type remodèle le sous-formulaire. |
| **Icône** | Un nom d'[icône Lucide](https://lucide.dev/icons). Une icône sensée est définie par défaut selon le type. |
| **Badge** | Optionnel. Texte statique ("Nouveau", "Beta") ou nom de requête connecteur qui retourne un nombre (par exemple un compteur de notifications non lues). |
| **Rôles** | Optionnel. Restreint la visibilité à une liste de rôles — barrière douce (UX). La **vérification de permission** sur l'écran / endpoint sous-jacent est la barrière dure. |
| **Description** | Texte libre — apparaît comme infobulle de la feuille au survol. |

Sous les champs communs, le sous-formulaire propre au *Type* apparaît.

---

## Types de feuille \{#leaf-types}

Cinq types sont pris en charge.

### Écran

| Champ | Effet |
|---|---|
| **Écran** | Liste déroulante des écrans définis sous [Paramètres → Écrans](./screens.md). Filtrée sur l'application à laquelle appartient le menu. |

La feuille ouvre la grille + le dialogue d'édition de l'écran. Code de permission dérivé : `screen:<app>:<screen_id>`.

### Tableau de bord

| Champ | Effet |
|---|---|
| **Tableau de bord** | Liste déroulante des tableaux de bord définis sous [Paramètres → Tableaux de bord](./dashboards.md). |

La feuille ouvre la mise en page du tableau de bord. Code de permission dérivé : `dashboard:<id>`.

### Endpoint

| Champ | Effet |
|---|---|
| **Connecteur** | Liste déroulante des connecteurs HTTP / API. |
| **Endpoint** | Liste déroulante des endpoints nommés du connecteur choisi. |
| **Paramètres** | Valeurs par défaut optionnelles pour les paramètres de l'endpoint. |

La feuille ouvre une **page d'exécution d'endpoint** qui affiche la forme de la requête, permet de remplir les paramètres et rend la réponse. Code de permission dérivé : `api:<connecteur>:<endpoint>`.

### Page (route React personnalisée)

| Champ | Effet |
|---|---|
| **Slug** | Le slug d'URL sous lequel la page est enregistrée. Les pages sont des composants React livrés par le framework ou un plugin — point d'extension pour une UI entièrement personnalisée. |

À utiliser avec parcimonie — la plupart des feuilles de menu doivent renvoyer à un écran ou un tableau de bord. Les pages personnalisées ne reprennent pas le chrome standard du framework (filtres, grille, dialogue) et coûtent plus cher à maintenir.

### Lien (URL externe)

| Champ | Effet |
|---|---|
| **URL** | URL externe. Ouvre dans un nouvel onglet du navigateur. |

Utile pour croiser les références entre applications connexes, documentation, portails de support. Pas de verrouillage de permission — visible par quiconque voit le dossier parent.

---

## Élagage par permission

Chaque feuille porte un code de permission implicite dérivé de son *Type* et de sa cible. Au rendu, le framework filtre l'arbre :

| L'appelant a la permission ? | Effet |
|---|---|
| **Oui** | La feuille s'affiche normalement. |
| **Non** | La feuille est masquée. |
| **Un dossier se retrouve vide après élagage** | Le dossier est masqué aussi. |
| **Un dossier avec au moins une feuille visible** | Le dossier s'affiche. |

L'élagage est **silencieux** — pas de message "vous n'avez pas accès". La raison : une barre latérale propre semble intentionnelle, un placeholder "accès refusé" semble cassé.

Deux couches s'empilent :

1. **Champ `Rôles` sur la feuille** — barrière douce. Utile quand deux feuilles pointent sur le même écran mais qu'on veut un libellé différent par rôle ; le champ *Rôles* masque chaque feuille aux appelants non concernés, mais une URL saisie à la main fonctionne quand même (c'est la barrière de permission en aval qui l'arrête).
2. **Code de permission dérivé de la cible** — barrière dure. Le framework refuse l'appel sous-jacent à un appelant sans le bon code, peu importe le chemin emprunté.

Pour la plupart des cas d'usage, le code de permission suffit — laisser *Rôles* vide.

---

## Sélecteur d'espace de travail

Chaque menu est par application. Le sélecteur d'espace de travail de l'en-tête liste chaque application dans laquelle l'appelant a au moins une feuille visible, trié par le champ *Ordre* des [métadonnées d'application](./apps/overview.md). Changer d'espace de travail bascule la barre latérale sur le menu de cette application.

Un utilisateur qui n'a accès qu'à une seule application ne voit pas de sélecteur — le framework va directement à cet espace de travail par défaut.

---

## Enregistrement et rechargement à chaud

*Enregistrer et recharger* écrit le changement et diffuse un événement Socket.IO à chaque client connecté ; la barre latérale se re-rend **immédiatement**, sans rafraîchissement. Les requêtes en vol ne sont pas affectées.

La liste **Aperçu en tant que ▾** de l'interface Paramètres est un contrôle de cohérence utile avant d'*Enregistrer* — basculer sur un rôle viewer et confirmer que les bonnes entrées apparaissent.

---

## Conseils et bonnes pratiques

- **Regrouper les feuilles par entité, pas par fréquence.** Un dossier *Facturation* avec tout ce qui touche à la facturation se parcourt plus facilement qu'un dossier "Quotidien" qui mélange des entités.
- **Utiliser les icônes avec parcimonie.** Les icônes sont des repères visuels pour la mémoire de l'**opérateur** — quelques icônes bien choisies battent une icône par feuille.
- **Ne pas se reposer sur le champ *Rôles*.** C'est un confort UX ; c'est le code de permission de la cible qui assure la sécurité. Garder la logique de barrière de rôle dans *Paramètres → Rôles*, pour que tout reste au même endroit.
- **Utiliser les badges pour les compteurs dynamiques.** Un badge *Validations en attente* qui affiche le compteur live depuis une requête de connecteur pousse l'opérateur à agir — bien meilleur qu'un libellé statique.
- **Prévisualiser avec le rôle le plus restreint avant d'enregistrer.** Le moyen le plus rapide de détecter une feuille d'administration accidentellement publique.

---

## Sous le capot

Les définitions de menu sont enregistrées dans `liberty-apps/config/menus.toml`. Les opérateurs **ne modifient pas ce fichier à la main** en exploitation normale ; l'éditeur d'arbre est l'interface de référence. L'onglet *TOML brut* est l'échappatoire pour les modifications avancées que l'éditeur ne couvre pas.

---

## Pour aller plus loin

- [Écrans](./screens.md) — la cible du type de feuille *Écran*.
- [Tableaux de bord](./dashboards.md) — la cible du type de feuille *Tableau de bord*.
- [Rôles et permissions](./auth/roles-permissions.md) — les codes contrôlés par l'élagage.
- [Applications](./apps/overview.md) — le sélecteur d'espace de travail qui bascule entre les menus.
