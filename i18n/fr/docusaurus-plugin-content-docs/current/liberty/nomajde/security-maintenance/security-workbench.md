---
title: Security Workbench
description: "Maintenir chaque entrée de sécurité JD Edwards — application, action, ligne, colonne, options de traitement, onglet, sortie, image — dans une grille unique avec édition en ligne."
keywords: [Nomajde, JD Edwards, sécurité JDE, Security Workbench, F00950, P00950, sécurité application, sécurité action, sécurité ligne, sécurité colonne, sécurité options de traitement]
---

# Security Workbench

L'écran **Security Workbench** est l'éditeur unique de chaque entrée de sécurité JD Edwards. Une ligne par `(Type de sécurité, Utilisateur / Rôle, Objet)`. Les mêmes données que le formulaire JDE *P00950 Work With User / Role Security* — mais sur une grille, avec filtres, tri et édition en masse.

Ajouter, modifier ou supprimer une entrée directement sur la ligne. La boîte de dialogue adapte ses champs au type de sécurité : nom d'objet et indicateurs d'action pour la sécurité application, item de données pour la sécurité colonne, codes d'action *De* / *À* pour la sécurité action, etc.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njsw-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#njsw-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Maintenance sécurité · Security Workbench</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CATÉGORIE</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL. / RÔLE</text>
  <text x="450" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="580" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATA ITEM</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EXÉC</text>
  <text x="750" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VOIR</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AJT</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MOD</text>
  <text x="900" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUP</text>

  <rect x="60" y="132" width="880" height="22" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">OBJECTS</text>
  <text x="200" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="280" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="450" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="580" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <circle cx="708" cy="143" r="4" fill="#22c55e"/>
  <circle cx="758" cy="143" r="4" fill="#22c55e"/>
  <circle cx="808" cy="143" r="4" fill="#22c55e"/>
  <circle cx="858" cy="143" r="4" fill="#22c55e"/>
  <circle cx="908" cy="143" r="4" fill="#ef4444"/>

  <rect x="60" y="156" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">OBJECTS</text>
  <text x="200" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="280" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="450" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="580" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VLDGJ</text>
  <text x="708" y="171" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <circle cx="758" cy="167" r="4" fill="#ef4444"/>
  <text x="808" y="171" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="858" y="171" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="908" y="171" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="180" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ALIAS</text>
  <text x="200" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">4</text>
  <text x="280" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC_BUYER</text>
  <text x="450" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="580" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPER</text>
  <text x="708" y="195" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="758" y="195" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <circle cx="808" cy="191" r="4" fill="#22c55e"/>
  <circle cx="858" cy="191" r="4" fill="#22c55e"/>
  <circle cx="908" cy="191" r="4" fill="#ef4444"/>

  <rect x="60" y="204" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">OTHERS</text>
  <text x="200" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">A</text>
  <text x="280" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC_BUYER</text>
  <text x="450" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="580" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PORLSE</text>
  <text x="708" y="219" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="758" y="219" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="808" y="219" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="858" y="219" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="908" y="219" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="240" width="880" height="32" rx="8" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="72" y="260" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIRE LES PASTILLES</text>
  <text x="72" y="272" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Vert = action autorisée · rouge = action interdite · tiret = la colonne ne s'applique pas à ce type de sécurité.</text>
</svg>

---

## Objectif de l'écran

Pour chaque entrée de sécurité présente dans JDE :

- **Chaque type de sécurité au même endroit.** Sécurité application, sécurité action, sécurité ligne, sécurité colonne, sécurité options de traitement, sécurité onglet — au lieu de formulaires séparés dans le security workbench JDE, chaque type est sur une grille filtrée par *Type*.
- **Les indicateurs d'action côte à côte.** *Exécuter*, *Voir*, *Ajouter*, *Modifier*, *Supprimer* — les pastilles d'autorisation par ligne sont visibles sans ouvrir l'enregistrement.
- **La boîte de dialogue s'adapte.** Seuls les champs qui s'appliquent au type de sécurité sélectionné sont affichés — nom d'objet pour la sécurité application, item de données pour la sécurité colonne, codes d'action *De* / *À* pour la sécurité action. Pas d'encombrement.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Catégorie** | `SEC_TYPE` — catégorie large. | `OBJECTS`, `ALIAS` ou `OTHERS` — regroupe les types de sécurité JDE dans les trois grands seaux que la boîte de dialogue utilise pour choisir les champs à afficher. |
| **Type** | `FSSETY` — code spécifique du type de sécurité. | Le type JDE : `1` pour application, `2` pour colonne, `3` pour option de traitement, `4` pour ligne, `5` pour onglet, `6` / `7` / `9` pour variantes d'options de traitement, `A` pour action, `S` pour solution explorer, etc. |
| **Utilisateur / Rôle** | `FSUSER` — identifiant JDE. | L'utilisateur ou le rôle concerné. |
| **Objet** | `FSOBNM` — nom de l'objet. | L'application, le formulaire ou la table concerné. |
| **Data Item** | `FSDTAI` — alias data item. | L'item du dictionnaire de données (pour la sécurité colonne et action). |
| **De / À** | `FSFRDV`, `FSTHDV` — plage d'action / version. | La plage de codes d'action (pour la sécurité action). |
| **Exéc / Voir / Ajt / Mod / Sup** | `FSRUN`, `FSVWYN`, `FSA`, `FSCHNG`, `FSDLT` — indicateurs `Y` / `N`. Affichés en pastilles vertes / rouges. | Autorisation par action. Un tiret signifie que l'action ne s'applique pas au type de sécurité de la ligne. |

Autres indicateurs JDE portés par la ligne mais masqués par défaut : install, OK, copie, mise à jour, marqueurs d'attention, code système, propriétaire, nom de fonction, numéro de fonction, exit ID, table ID, text ID, path — et les colonnes d'audit (programme, job, date, heure).

---

## Boîte de dialogue d'édition

Cliquer **Ajouter** dans la barre d'outils pour créer une nouvelle entrée de sécurité, ou double-cliquer une ligne pour la modifier. La boîte de dialogue tient sur un onglet, sur trois colonnes de large. Les champs affichés dépendent du *Type* — la boîte masque les colonnes qui ne s'appliquent pas.

| Champ | Quand il apparaît |
|---|---|
| **Catégorie** | Toujours — fixe la catégorie large (`OBJECTS`, `ALIAS`, `OTHERS`). |
| **Type** | Toujours — le type de sécurité JDE spécifique. Obligatoire. |
| **Utilisateur / Rôle** | Toujours. Obligatoire. La recherche est filtrée par la *Catégorie*. |
| **Objet** | Quand *Catégorie* vaut `ALIAS`, `OBJECTS` ou `OTHERS`. Obligatoire pour la plupart des types. |
| **Data Item** | Quand *Catégorie* vaut `ALIAS` ou `OTHERS` et que le type est colonne, action, ligne ou similaire. |
| **De — Action** | Types de sécurité action — début de la plage d'action. |
| **À — Action** | Quand *Type* = `4` (sécurité ligne sur alias) — fin de la plage d'action. |
| **Exécuter** | Types qui accordent *exécuter* (`3`, `6`, `7`, `9`, `A`, `B`, `M`, `S`). |
| **Voir** | Types qui accordent *voir* (`2`, `4`, `5`, `7`, `8`, `9`, `A`, `G`, `I`, `K`, `U`). |
| **Ajouter / Modifier / Supprimer** | Types de sécurité action — transforme la ligne en autorisation ou en interdiction. |
| **OK / Copier / Mettre à jour / Attention** | Codes d'action au niveau objet pour certains types JDE. |

La clé unique est la combinaison complète — JDE autorise plusieurs lignes pour le même `(Utilisateur, Objet)` quand le type de sécurité diffère.

---

## Édition en masse depuis la grille

Le security workbench est l'écran sur lequel l'administrateur sécurité passe le plus de temps — et la plus grande part du travail est répétitive : copier une entrée vers dix autres utilisateurs, basculer *Voir* de `Y` à `N` sur chaque ligne d'une application, interdire un formulaire sensible sur toute une famille de rôles. Nomajde gère cela directement sur la grille.

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njsw-bulk-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#njsw-bulk-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Édition en masse — trois motifs couverts par la grille</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="280" height="100" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="76" y="120" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉLECTION MULTIPLE</text>
  <text x="76" y="142" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Sélectionner N lignes, éditer une fois</text>
  <text x="76" y="158" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Cocher les lignes à modifier de la</text>
  <text x="76" y="172" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">même façon, modifier la colonne sur</text>
  <text x="76" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">une ligne, le changement s'applique à toutes.</text>

  <rect x="360" y="100" width="280" height="100" rx="10" fill="rgba(251,146,60,0.06)" stroke="rgba(251,146,60,0.30)" strokeWidth="1"/>
  <text x="376" y="120" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COPIE VERS UTILISATEUR / RÔLE</text>
  <text x="376" y="142" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Répliquer une ligne sur plusieurs cibles</text>
  <text x="376" y="158" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Clic droit sur une entrée, choisir la</text>
  <text x="376" y="172" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">liste des cibles, la même ligne est</text>
  <text x="376" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">insérée pour chacune.</text>

  <rect x="660" y="100" width="280" height="100" rx="10" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.30)" strokeWidth="1"/>
  <text x="676" y="120" fill="#22c55e" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UPLOAD EXCEL</text>
  <text x="676" y="142" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Des centaines de lignes en un import</text>
  <text x="676" y="158" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Exporter la grille, éditer hors ligne,</text>
  <text x="676" y="172" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">réimporter — le lot de l'intégrateur</text>
  <text x="676" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">devient actif en un clic.</text>
</svg>

| Motif | Quand l'utiliser |
|---|---|
| **Sélection multiple** | Cocher les lignes qui demandent le même changement (par exemple *Voir* à `N` sur cinq entrées de sécurité application pour le même rôle), puis modifier la colonne sur l'une des lignes cochées — le changement est écrit sur chaque ligne sélectionnée en un enregistrement. |
| **Copier vers utilisateur / rôle** | Clic droit sur une ligne, choisir *Copier vers utilisateur* ou *Copier vers rôle*, sélectionner la liste de cibles — la même entrée de sécurité est insérée pour chaque cible. À utiliser pour étendre une autorisation à un ensemble d'utilisateurs sans ressaisie. |
| **Upload Excel** | Exporter la grille (filtrée si nécessaire), modifier des centaines de lignes hors ligne, puis réimporter via l'action d'upload de la barre d'outils. Le formulaire *Ajouter* gère les lignes unitaires ; l'upload est fait pour les lots qui accompagnent un nouveau module. |

Chaque action en masse passe par les mêmes contrôles ligne par ligne que l'édition unitaire — un champ obligatoire manquant ou une combinaison d'indicateurs invalide arrête l'enregistrement, et l'opérateur voit quelle ligne a échoué.

---

## Colonnes dynamiques et filtres

La table security workbench porte plus de 35 colonnes, mais seul un sous-ensemble s'applique à chaque type de sécurité. La grille en tire parti en **masquant les colonnes qui ne s'appliquent pas** aux lignes actuellement visibles.

| Quand le filtre est | Les colonnes qui apparaissent | Les colonnes qui se masquent |
|---|---|---|
| *Type = 1* (Sécurité application) | Objet, Exéc, Voir, Ajt, Mod, Sup | Data Item, De / À action |
| *Type = 2* (Sécurité colonne) | Objet, Data Item, Voir, Mod | Exéc, Ajt, Sup, De / À |
| *Type = 3 / 6 / 7 / 9* (Options de traitement) | Objet, Exéc, Voir | Ajt, Mod, Sup, Data Item |
| *Type = 4* (Sécurité ligne) | Objet, Data Item, De / À, Voir, Ajt, Mod, Sup | (toutes les colonnes d'action visibles) |
| *Type = A* (Sécurité action) | Objet, Data Item, De action, Ajt, Mod | Voir, À action |

La même logique pilote la **boîte de dialogue d'édition** : quand le type est `2` (sécurité colonne), la boîte n'affiche que les champs utiles pour la sécurité colonne ; quand le type est `1` (sécurité application), elle bascule sur les colonnes application. Il n'y a jamais de champ obsolète à ignorer.

La visibilité des colonnes peut aussi être forcée manuellement via le bouton *Colonnes* de la barre d'outils — utile quand un administrateur souhaite voir une colonne précise sur tous les types pour un export d'audit.

---

## Suivi des modifications

Les changements de sécurité faits sur cet écran sont **captés dans le [paquet de modifications](../../nomaflow/change-packages.md) actif**, sous l'entité `security`. Chaque octroi, retrait ou édition en masse devient une entrée vérifiable : un changement du workbench se promeut du développement vers la production sous forme de lot relu, au lieu d'être réappliqué à la main.

C'est ce qui rend une promotion de sécurité JDE reproductible : associez-y le job [`nomajde-remerge-security`](../../nomaflow/bundled-jobs.md#nomajde-remerge-security), branché en étape post-application, pour que les rôles parents impactés soient re-dérivés sur la cible une fois les lignes du lot écrites.

---

## Conseils & bonnes pratiques

- **Filtrer sur *Type* d'abord** — l'écran porte chaque type de sécurité JDE, et le bon filtre (par exemple *Type = 1* pour la sécurité application) restreint à la fois les lignes et les colonnes visibles à une vue ciblée.
- **Sélection multiple avant l'édition en masse.** Maintenir *Maj* pour sélectionner une plage ou *Ctrl* pour cocher des lignes individuelles, puis éditer n'importe quelle colonne — le changement s'applique à chaque ligne sélectionnée.
- **Utiliser *Copier vers utilisateur / rôle*** pour étendre une ligne à une liste de cibles. Plus rapide qu'une ressaisie, et les copies portent automatiquement les colonnes d'audit standard.
- **Upload Excel** pour les lots de sécurité livrés par l'intégrateur. Le flux *Ajouter* gère les lignes unitaires ; l'upload est fait pour les dizaines de lignes qui accompagnent un nouveau module.
- **Une interdiction sur *Toutes actions* avec `Utilisateur = *PUBLIC` plus des autorisations ciblées sur les rôles** est le motif JDE standard. La grille permet de vérifier facilement que l'interdiction est en place pour chaque objet.
- **Après des changements en masse**, exécuter *Nomasx-1 → Applications → Droits* pour confirmer que les droits effectifs correspondent à l'intention — le workbench montre ce qui est paramétré, *Droits* montre ce que JDE calcule à la connexion.
