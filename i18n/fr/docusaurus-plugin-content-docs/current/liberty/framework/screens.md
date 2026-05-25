---
title: Écrans
description: "Un écran est la surface principale du framework pour un objet métier — une grille filtrable adossée à un connecteur, un dialogue d'édition inline avec onglets et champs, des actions par ligne et des colonnes d'audit optionnelles. Construit de bout en bout depuis Paramètres → Écrans avec un éditeur de disposition visuel."
keywords: [Liberty Framework, écran, grille, dialogue, onglet, champ, objet métier, audit, actions, menu de ligne, paramètres]
---

# Écrans

Un **écran** est la surface principale du framework pour un objet métier : une **grille** de lignes filtrable et triable, adossée à une requête de connecteur, avec un **dialogue d'édition** inline qui s'ouvre au clic sur une ligne. Tout ce que l'opérateur voit — les colonnes de la grille, la barre d'outils de filtres, les onglets du dialogue, les champs du formulaire, les actions par ligne, les boutons de la barre d'outils — est défini dans **Paramètres → Écrans** via l'éditeur visuel d'écran.

L'écran est l'endroit où la plupart des utilisateurs passent le plus de temps ; l'éditeur est en conséquence très complet.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="sc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="300" rx="14" fill="url(#sc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Un écran à l'exécution</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="520" height="220" rx="10" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRILLE</text>
  <rect x="76" y="136" width="488" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="86" y="154" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 Hier   Doc   Dct   Client   Statut ▾   ↻ Rafraîchir   + Ajouter</text>
  <rect x="76" y="172" width="488" height="22" rx="4" fill="rgba(255,255,255,0.03)"/>
  <text x="86" y="187" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DOC · DCT · KCO · CLIENT · TOTAL · STATUT</text>
  <rect x="76" y="200" width="488" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="86" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345 · RI · 00070 · Acme SA · 1 500,00 ·</text>
  <rect x="510" y="204" width="50" height="14" rx="7" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)"/>
  <text x="535" y="215" fill="#4ade80" fontSize="9" textAnchor="middle" fontWeight="700">Déposée</text>
  <rect x="76" y="228" width="488" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="86" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12346 · RI · 00070 · Globex · 1 020,00 ·</text>
  <rect x="510" y="232" width="50" height="14" rx="7" fill="rgba(0,122,255,0.10)" stroke="rgba(0,122,255,0.40)"/>
  <text x="535" y="243" fill="#60a5fa" fontSize="9" textAnchor="middle" fontWeight="700">En attente</text>
  <text x="86" y="278" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Clic sur une ligne → dialogue d'édition</text>

  <rect x="600" y="100" width="340" height="220" rx="10" fill="rgba(74,158,255,0.04)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="616" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DIALOGUE D'ÉDITION</text>
  <rect x="616" y="136" width="308" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="626" y="154" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Synthèse · Parties · Lignes · TVA · Historique</text>
  <text x="626" y="184" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Facture 12345</text>
  <text x="626" y="204" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Numéro de document  ·  12345</text>
  <text x="626" y="220" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Client  ·  Acme SA</text>
  <text x="626" y="236" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Statut     ·  Déposée</text>
  <rect x="616" y="276" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="656" y="294" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="708" y="276" width="80" height="26" rx="6" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="748" y="294" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
</svg>

---

## Paramètres → Écrans

Le catalogue liste chaque écran de l'installation — une ligne par écran, groupée par app.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Écrans</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>App ▾</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Nouvel écran</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1.2fr 70px 60px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Id</div><div>Titre</div><div>Connecteur / requête</div><div>Édition</div><div></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1.2fr 70px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>billing/invoices</div><div>Factures</div><div style={{fontFamily: 'ui-monospace, monospace', fontSize: '11px', opacity: 0.85}}>billing · invoices-list</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>modifiable</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1.2fr 70px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>billing/credit_notes</div><div>Avoirs</div><div style={{fontFamily: 'ui-monospace, monospace', fontSize: '11px', opacity: 0.85}}>billing · credit-notes-list</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>modifiable</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1.2fr 70px 60px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>crm/customers</div><div>Clients</div><div style={{fontFamily: 'ui-monospace, monospace', fontSize: '11px', opacity: 0.85}}>crm · customers-list</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.20)', fontSize: '10px', fontWeight: 600, opacity: 0.7}}>lecture seule</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
</div>

Cliquer sur *+ Nouvel écran* ou sur n'importe quelle ligne pour ouvrir l'éditeur d'écran.

---

## L'éditeur d'écran

L'éditeur est un éditeur multi-onglets — **Général**, **Connecteur de lecture**, **Grille**, **Dialogue**, **Actions**, **Permissions**. Chaque onglet couvre une facette de l'écran.

### Onglet Général

| Champ | Effet |
|---|---|
| **Id** | Identifiant d'écran sous la forme `app/nom` (par exemple `billing/invoices`). Apparaît dans l'URL (`/screens/billing/invoices`), le code de permission (`screen:billing:invoices`) et le sélecteur de menu. |
| **Titre** | Affiché en haut de la page et sur l'entrée de menu qui l'ouvre. Localisé via le dictionnaire. |
| **App** | Liste déroulante des apps déclarées dans l'installation. Pré-remplie à partir du préfixe d'*Id*. |
| **Description** | Texte libre — apparaît dans le catalogue et dans la description de l'outil pour l'assistant IA quand l'écran est exposé. |
| **Colonnes clés** | Multi-sélection de colonnes de la requête de lecture qui identifient de manière unique une ligne. Utilisées par le dialogue d'édition pour savoir quelle ligne mettre à jour / supprimer. |
| **Taille de page par défaut** | Lignes par page sur la grille. Par défaut 50. |
| **Modifiable** | Quand *activé*, les actions *Ajouter* / *Modifier* / *Supprimer* apparaissent dans la barre d'outils et le clic sur une ligne ouvre un dialogue modifiable. Quand *désactivé*, le dialogue s'ouvre en lecture seule. |

### Onglet Connecteur de lecture

| Champ | Effet |
|---|---|
| **Connecteur** | Liste déroulante des connecteurs SQL. Le connecteur choisi expose ses requêtes de lecture. |
| **Requête** | Liste déroulante des requêtes de lecture nommées sur le connecteur choisi. |
| **Paramètres** | Sous-formulaire alimenté par la barre d'outils de l'écran — voir [Liaison des paramètres](./query-params-binding.md). |
| **Tri par défaut** | Optionnel. Une colonne + une direction appliquées au premier chargement. |
| **Colonnes du catalogue** | Lecture seule — liste de chaque colonne que le framework a découverte lors de l'exécution *Tester* de la requête. Utilisée par le sélecteur de l'onglet *Grille*. |

Le bouton **▶ Aperçu** en haut de l'onglet exécute la requête contre le pool live et affiche les 50 premières lignes.

### Onglet Grille

C'est l'éditeur visuel de disposition. Les colonnes découvertes apparaissent dans une palette à gauche ; l'opérateur les glisse dans la disposition de grille à droite.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', gap: '14px'}}>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Catalogue</div>
      <div style={{fontSize: '11px', lineHeight: '1.9'}}>
        <div style={{opacity: 0.55, fontStyle: 'italic'}}>Glisser dans la grille →</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>doc</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>dct</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>kco</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>customer</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>total_ht</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>total_ttc</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>currency</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>status</div>
        <div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.5}}>review</div>
      </div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Disposition de la grille</div>
      <div style={{display: 'grid', gridTemplateColumns: '60px 50px 70px 1.2fr 90px 90px 60px 90px', padding: '6px 8px', textTransform: 'uppercase', letterSpacing: '0.04em', opacity: 0.7, fontSize: '10px', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
        <div>Doc</div><div>Dct</div><div>Kco</div><div>Client</div><div>Total HT</div><div>Total TTC</div><div>Dev.</div><div>Statut</div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '60px 50px 70px 1.2fr 90px 90px 60px 90px', padding: '6px 8px', fontSize: '11px', alignItems: 'center'}}>
        <div>12345</div><div>RI</div><div>00070</div><div>Acme Industries SA</div><div style={{textAlign: 'right'}}>1 250,00</div><div style={{textAlign: 'right'}}>1 500,00</div><div>EUR</div><div><span style={{padding: '2px 8px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.40)', background: 'rgba(50,215,75,0.10)', color: '#4ade80'}}>Déposée</span></div>
      </div>
      <div style={{marginTop: '8px', display: 'flex', gap: '8px', fontSize: '11px'}}>
        <span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontWeight: 700}}>+ Ajouter colonne</span>
        <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)'}}>Configurer la pagination</span>
      </div>
    </div>
  </div>
</div>

| Contrôle par colonne | Effet |
|---|---|
| **Poignée de glissement** | Réordonne les colonnes. |
| **Largeur** | Glisser le bord de la colonne pour redimensionner ; la taille est enregistrée. |
| **Libellé d'en-tête** | Par défaut le libellé du dictionnaire de la colonne. Surchargeable par écran. |
| **Surcharge de format** | Format optionnel par écran qui prime sur celui par défaut du dictionnaire. |
| **Triable / Filtrable** | Bascules. Quand *Filtrable* est activé, la colonne reçoit une saisie de filtre par colonne dans la barre d'outils. |
| **Visible par défaut** | Quand *désactivé*, la colonne existe dans le sélecteur *Ajouter colonne* (l'opérateur peut l'afficher à la demande) mais ne s'affiche pas d'emblée. |

La barre d'outils de l'écran (au-dessus de la grille à l'exécution) se compose automatiquement à partir des colonnes filtrables visibles, plus les boutons *Rafraîchir* et *Ajouter* / *Exporter*.

### Onglet Dialogue

Le dialogue est la modale qui s'ouvre au clic sur une ligne. Il prend en charge plusieurs **onglets** — *Synthèse*, *Lignes*, *TVA*, *Notes*, *Historique*, *PDF* sont fréquents — chacun avec son propre jeu de champs.

L'éditeur de dialogue expose :

| Section | Effet |
|---|---|
| **Onglets** | Liste réordonnable. Chaque onglet a un *Libellé* + une expression *Visible quand* — voir [Conditions de formulaire](./form-conditions.md). |
| **Champs** | Liste de champs par onglet. Chaque champ a une *Colonne* (liste déroulante des colonnes de la requête de lecture + des requêtes d'écriture), un *Widget* (auto depuis le type du dictionnaire, surchargeable) et les quatre emplacements de condition (*Visible quand*, *Obligatoire quand*, *Désactivé quand*, *Valeur par défaut*). |
| **Sous-grilles** | Un onglet peut héberger une **grille fille** à la place de champs — utile pour les "Lignes" d'une facture. La sous-grille pointe sur son propre connecteur de lecture et ses actions d'écriture. |

Le bouton *Aperçu* en haut ouvre le dialogue rempli avec la première ligne de la requête de lecture — moyen rapide de vérifier la disposition.

### Onglet Actions

Boutons qui apparaissent en pied du dialogue ou sur les lignes individuelles.

| Type d'action | Effet |
|---|---|
| **Enregistrer / Annuler** | Toujours présents sur les écrans modifiables. Le framework les câble automatiquement. |
| **Bouton personnalisé** | Appelle une requête d'écriture de connecteur avec la clé de la ligne + la charge du dialogue. Apparaît en pied du dialogue. |
| **Action par ligne** | Même idée mais sur chaque ligne de la grille — pratique pour des opérations ponctuelles (par exemple *Renvoyer à la PA*). |
| **Action en masse** | Visible quand l'opérateur multi-sélectionne des lignes dans la grille. Appelle le connecteur une fois par ligne sélectionnée. |

Chaque action personnalisée expose :

- *Libellé* + *Icône* + *Variante* (principale / secondaire / destructive).
- *Connecteur* + *Requête d'écriture*.
- *Confirmation* — dialogue optionnel avant l'exécution de l'action.
- Expression *Visible quand* — même syntaxe que les conditions de champ.

### Onglet Permissions

Synthèse en lecture seule des codes de permission générés par cet écran : `screen:<app>:<id>` plus le `sql:<connecteur>:<requête>` sous-jacent de la requête de lecture et de chaque action d'écriture.

---

## Colonnes d'audit

Un motif fréquent : suivre qui a créé / dernière mise à jour de chaque ligne. La voie recommandée :

1. Dans la requête de lecture, retourner `created_by`, `created_at`, `updated_by`, `updated_at`.
2. Dans le dictionnaire, marquer ces colonnes avec *Règle = LOOKUP* contre la table des utilisateurs (afin que les chips affichent des noms d'affichage, pas des identifiants d'utilisateur bruts).
3. Sur la requête d'écriture d'*Insertion*, fixer les *Valeurs par défaut côté formulaire* de ces colonnes à `LOGIN` + `SYSDATE`.
4. Sur la requête d'écriture de *Mise à jour*, fixer les valeurs par défaut sur `updated_by` + `updated_at`.
5. Masquer les colonnes d'audit du dialogue (ou les rendre en lecture seule) pour que les utilisateurs ne puissent pas les altérer.

Le framework exécute `LOGIN` et `SYSDATE` **côté serveur** au moment de l'enregistrement — voir [Dictionnaire → valeurs par défaut côté formulaire](./dictionary.md#form-layer-defaults).

---

## Verrouillage

Le framework prend en charge le **verrouillage d'enregistrement** pour empêcher deux opérateurs de modifier la même ligne simultanément. Quand *Modifiable* est activé, le dialogue acquiert un verrou sur la clé de la ligne à son ouverture ; un autre opérateur qui ouvre la même ligne voit une bannière ("verrouillé par Alice depuis 09:42") et le dialogue s'ouvre en lecture seule.

Les verrous expirent à la fermeture du dialogue, à l'expiration de la session ou après le *TTL de verrou* configuré sur l'écran. L'onglet *Technique* de Paramètres affiche chaque verrou actif — pratique quand un verrou périmé bloque une modification.

---

## Permissions

L'écran lui-même est verrouillé par `screen:<app>:<id>`. La requête de lecture sous-jacente hérite de `sql:<connecteur>:<requête>` et chaque action d'écriture hérite de `sql:<connecteur>:<requête>:write`. Un utilisateur sans la permission de lecture reçoit un 403 sur la navigation directe ; un utilisateur avec la lecture mais pas l'écriture voit l'écran en lecture seule (boutons Enregistrer / Ajouter / Supprimer masqués).

L'onglet d'éditeur d'écrans est verrouillé par `settings:screens`.

---

## Conseils et bonnes pratiques

- **Commencer par le connecteur de lecture.** Définir la requête, exécuter *Tester* pour découvrir le schéma, **puis** câbler l'écran. Itérer dans cet ordre est bien plus rapide que de rétroporter les colonnes.
- **User le dictionnaire à fond.** Une colonne avec une bonne entrée de dictionnaire n'a presque pas besoin de surcharges par écran ; une colonne sans entrée demande libellé, format et réglage de widget sur chaque écran qui l'utilise.
- **Garder le dialogue concentré.** Trois à cinq onglets par dialogue couvrent la plupart des cas. Un dialogue à douze onglets est le signe que l'entité est trop grosse — envisager de la découper en plusieurs écrans.
- **Rendre les colonnes d'audit en lecture seule sur chaque écran.** Combiné aux valeurs par défaut côté formulaire `LOGIN` / `SYSDATE`, cela donne une piste d'audit infalsifiable.
- **User *Action en masse* pour les opérations répétitives.** Un bouton *Renvoyer à la PA* qui traite une multi-sélection fait gagner des minutes par jour aux utilisateurs avancés.

---

## Sous le capot

Les définitions d'écran sont enregistrées dans `liberty-apps/config/screens.toml`. Les opérateurs **ne modifient pas ce fichier à la main** en exploitation normale ; l'éditeur d'écran est l'interface canonique. L'onglet *TOML brut* est l'échappatoire pour les rares cas où l'éditeur ne couvre pas un champ.

---

## Pour aller plus loin

- [Connecteurs](./connectors.md) — les requêtes de lecture + d'écriture que l'écran consomme.
- [Dictionnaire](./dictionary.md) — métadonnées de colonne qui façonnent la grille + le dialogue.
- [Conditions de formulaire](./form-conditions.md) — Visible quand / Obligatoire quand / Désactivé quand sur chaque champ.
- [Liaison des paramètres](./query-params-binding.md) — comment les saisies de la barre d'outils alimentent la requête.
- [Menus](./menus.md) — câbler l'écran dans la barre latérale.
