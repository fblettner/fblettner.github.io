---
title: Applications
description: "Une application Liberty regroupe connecteurs, écrans, menus, tableaux de bord, graphiques et jobs autour d'un domaine métier. Les applications sont affichées dans le sélecteur d'espace de travail en haut de la barre latérale, éditées par entité depuis chaque onglet de Paramètres, et empaquetées en exports zip pour le transfert entre environnements."
keywords: [Liberty Framework, app, workspace, multi-tenant, app export, app import, settings, packaged app]
---

# Applications

:::info[Référence détaillée]
Cette page documente le modèle d'application de Liberty — comportement du sélecteur d'applications, export / import d'application packagée et motifs de permissions par application. Pour la mise en place orientée tâche — rendre un connecteur visible comme application dans le sélecteur — voir [Construire → Menus → Transformer un connecteur en application](../build/menus/make-connector-an-app.md).
:::

Une **application** Liberty est un **espace de noms** — un regroupement logique de connecteurs, écrans, menus, tableaux de bord, graphiques et jobs qui appartiennent à un domaine métier (CRM, facturation, administration JD Edwards, RH interne…). Le framework collecte le champ *Application* de chaque entité au chargement et affiche la liste obtenue dans le **sélecteur d'espace de travail** de l'en-tête — changer d'espace de travail change la barre latérale vers l'arbre de menus de cette application.

Les applications ne sont pas un concept séparé à câbler — chaque constructeur Paramètres propose une liste déroulante *Application* sur chaque entité. Cette page couvre le fonctionnement du sélecteur d'espace de travail, la manière d'empaqueter une application pour le transfert entre environnements et le motif de permission par application.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>SÉLECTEUR D'ESPACE DE TRAVAIL</div>
    <div style={{fontSize: '12px'}}>En haut de l'en-tête. Liste chaque application que l'appelant peut voir, triée par ordre d'affichage.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>CHAMP APPLICATION</div>
    <div style={{fontSize: '12px'}}>Chaque connecteur / écran / menu / graphique / tableau de bord / job en porte un. Défaut <code>_default</code>.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>PARAMÈTRES → APPLICATIONS</div>
    <div style={{fontSize: '12px'}}>Libellés conviviaux, icônes, ordre d'affichage — plus export / import zip pour le transfert entre environnements.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>PERMISSIONS</div>
    <div style={{fontSize: '12px'}}><code>{"sql:<app>-*:*"}</code>, <code>{"screen:<app>:*"}</code>, <code>{"menu:<app>:*"}</code> — un rôle par application garde les choses propres.</div>
  </div>
</div>

---

## Comment une application est créée

Les applications n'ont pas d'action "créer" qui leur soit propre. **Une application existe dès qu'une entité la référence.** Ouvrir *Paramètres → Connecteurs → Nouveau connecteur*, saisir `billing` dans le champ *Application* — `billing` est maintenant une application avec un connecteur. Ajouter un menu dans *Paramètres → Menus → Nouveau menu* avec la même valeur *Application*, et le sélecteur d'espace de travail commence à afficher *Billing*.

Pour donner à l'application un libellé convivial, une icône et un ordre d'affichage, l'onglet **Paramètres → Applications** fournit les métadonnées par application :

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Applications</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 12px', borderRadius: '6px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '11px', fontWeight: 600}}>↑ Importer une application</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Nouvelle application</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '40px 110px 1.4fr 70px 80px 60px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div></div><div>ID</div><div>Nom affiché</div><div>Icône</div><div>Ordre</div><div></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '40px 110px 1.4fr 70px 80px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>📜</div><div style={{fontFamily: 'ui-monospace, monospace'}}>billing</div><div>Billing</div><div>receipt</div><div>10</div><div style={{textAlign: 'right', opacity: 0.55}}>⬇ ✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '40px 110px 1.4fr 70px 80px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>👥</div><div style={{fontFamily: 'ui-monospace, monospace'}}>crm</div><div>CRM</div><div>users</div><div>20</div><div style={{textAlign: 'right', opacity: 0.55}}>⬇ ✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '40px 110px 1.4fr 70px 80px 60px', padding: '10px 14px', alignItems: 'center'}}>
    <div>📊</div><div style={{fontFamily: 'ui-monospace, monospace'}}>nomajde</div><div>NomaJDE</div><div>server</div><div>30</div><div style={{textAlign: 'right', opacity: 0.55}}>⬇ ✏️</div>
  </div>
</div>

| Champ | Effet |
|---|---|
| **ID** | L'identifiant de l'application — court, en kebab-case (`billing`, `crm`). Utilisé comme préfixe d'espace de noms partout. Le renommage déclenche une réécriture de chaque référence. |
| **Nom affiché** | Affiché dans le sélecteur d'espace de travail et comme en-tête de la barre latérale. Localisé via le dictionnaire. |
| **Icône** | Un nom d'[icône Lucide](https://lucide.dev/icons). Apparaît à côté du nom de l'espace de travail. |
| **Ordre** | Détermine la position dans le sélecteur d'espace de travail. Les nombres les plus bas en premier. |
| **Description** | Texte libre — apparaît comme info-bulle dans le sélecteur d'espace de travail. |

Actions par ligne :

- **⬇ Télécharger** — produit un zip de chaque entité qui porte l'identifiant de cette application (voir [Export / import](#export-import)).
- **✏️ Modifier** — ouvre l'éditeur de métadonnées.

Le framework fonctionne encore avec des applications qui n'ont pas d'entrée de métadonnées — le sélecteur d'espace de travail affiche alors l'identifiant brut au lieu du nom convivial.

---

## Le sélecteur d'espace de travail

L'en-tête affiche une puce d'espace de travail avec une liste déroulante. La liste déroulante liste chaque application dont l'utilisateur appelant peut voir au moins un menu (filtrée par les permissions par application), triée par *Ordre* puis alphabétiquement.

| Comportement | Quand |
|---|---|
| **Sélecteur visible** | Au moins deux applications ont des menus que l'appelant peut voir. |
| **Sélecteur masqué** | Une seule application (le cas par défaut pour les installations mono-locataire). |
| **Mémorisé par utilisateur** | Le dernier espace de travail choisi est enregistré dans `localStorage`. |

Un utilisateur avec la permission sur une seule application ne voit aucun sélecteur — le framework bascule directement sur cet espace de travail.

---

## Conventions par application

| Convention | Raison |
|---|---|
| **Un menu par application** dans *Paramètres → Menus*. L'*Application* du menu pilote la clé de l'espace de travail. | Déclarer un menu est ce qui rend l'espace de travail sélectionnable. |
| **Préfixer les connecteurs par l'application** (`billing-customers`, `crm-contacts`). | Garde le catalogue des connecteurs lisible et évite les collisions quand deux applications interrogent la même base. |
| **Mettre les identifiants d'écran dans l'espace de noms de l'application** (`billing/invoices`, `crm/customers`). | Le framework autorise le même identifiant d'écran dans deux applications ; l'espace de noms évite que le mauvais soit choisi. |
| **Les entrées de dictionnaire peuvent être partagées.** | Le dictionnaire est global par défaut — les libellés et tables de correspondance définis une fois sont référencés depuis chaque application. |
| **Les jobs sont dans l'espace de noms de l'application** (la liste déroulante *Application* du constructeur de jobs). | Garde le catalogue *Paramètres → Jobs* organisé ; les jobs transverses au framework sont sous `_default`. |

---

## Export / import \{#export-import\}

Les applications se déplacent entre environnements (dev → recette → prod) via le flux export / import de **Paramètres → Applications**.

### Exporter

Cliquer **⬇ Télécharger** sur une ligne d'application, ou ouvrir l'éditeur de métadonnées de l'application et utiliser l'action *Télécharger*. Le framework produit un zip qui contient :

| Chemin dans le zip | Contenu |
|---|---|
| `manifest.toml` | Métadonnées : identifiant d'application, version, horodatage d'export, dépendances (autres applications requises), version du framework compatible. |
| `connectors.toml` | Les entrées de connecteurs dont l'*Application* correspond. Plus les pools qu'ils référencent (un avertissement apparaît quand un pool est partagé avec une autre application). |
| `dictionary.toml` | Les entrées de dictionnaire référencées par les écrans de l'application (tables de correspondance, formats, libellés). |
| `screens.toml` | Les écrans de l'application. |
| `menus.toml` | L'arbre de menus de l'application. |
| `dashboards.toml` | Les tableaux de bord de l'application. |
| `charts.toml` | Les graphiques référencés par les tableaux de bord. |
| `jobs.toml` | Les jobs Nomaflow de l'application. |
| `plugins/` *(si présent)* | Le répertoire de plugins entier (callables Python personnalisés). |

Le zip est téléchargé par le navigateur. Pour les exports multi-applications, cocher les cases sur chaque ligne + *Exporter la sélection*.

### Importer

Cliquer **↑ Importer une application** en haut de l'onglet *Applications*. Une boîte de dialogue demande le fichier zip, puis affiche un **aperçu de diff** avant application :

| Section | Ce que l'aperçu affiche |
|---|---|
| **À ajouter** | Entités présentes dans le zip et absentes de l'installation. |
| **À remplacer** | Entités présentes dans les deux ; le diff est affiché en ligne ("changement de libellé", "colonne supplémentaire"). |
| **À refuser** | Collisions d'identifiants entre applications (par ex. le `billing` du zip entre en collision avec un écran existant). L'opérateur les clarifie avant *Confirmer*. |

*Confirmer* applique l'import en une transaction. Un échec revient en arrière ; l'installation reste sur son état précédent.

Pour les installations sous contrôle de version, le chemin plus simple est un **patch git** sur `liberty-apps` — la modification est relisible dans la PR, les imports partiels sont possibles et le retour arrière est `git revert`. Le flux zip concerne les installations qui ne partagent pas de dépôt git (applications client livrées par un fournisseur, données de démo).

---

## Applications fournisseur livrées

Certaines applications sont livrées pré-construites par Nomana-IT — **NomaUBL** (facturation électronique), **NomaSX-1** (maintenance de sécurité), **NomaJDE** (administration JD Edwards). Elles suivent la même convention : un identifiant d'application, un arbre de menus, des écrans, des tableaux de bord. Installer l'une d'elles est un ***Importer une application*** **gouverné par licence** — la liste `features.apps` de la clé de licence contrôle ce qui peut être importé.

Une application livrée est opaque pour le client au sens où le contenu est livré tel quel et est destiné à être utilisé tel quel, mais chaque entité reste **visible et modifiable** depuis l'interface Paramètres. Les modifications côté client survivent aux mises à jour fournisseur quand elles se trouvent dans un **espace de noms client séparé** (`billing-customer` à côté du `billing` du fournisseur) — voir [Déploiement → Mise à jour](../deployment/upgrading.md) pour la disposition recommandée.

---

## Permissions par application

Le moteur de rôles s'intègre aux applications via le motif générique `<surface>:<app>:*`. Une paire de rôles typique pour une installation à deux applications :

| Rôle | Permissions |
|---|---|
| **billing-user** | `sql:billing-*:*`, `screen:billing:*`, `menu:billing:*`, `dashboard:billing-*` |
| **crm-user** | `sql:crm-*:*`, `screen:crm:*`, `menu:crm:*`, `dashboard:crm-*` |

Un utilisateur qui porte les deux rôles voit les deux espaces de travail. Un utilisateur qui ne porte que `billing-user` voit l'espace de travail *Billing* et n'a pas connaissance de celui de *CRM*. Voir [Rôles et permissions](../build/secure/roles-and-permissions.md).

---

## Conseils et bonnes pratiques

- **Choisir tôt les identifiants d'application.** Renommer une application déclenche une réécriture de propagation, mais le chemin plus simple est de partir avec le bon nom. Les renommages sont pris en charge via l'action *Renommer* de l'éditeur d'Applications.
- **Utiliser l'application par défaut pour les installations mono-locataire.** Ne pas fabriquer un identifiant d'application juste pour remplir le champ.
- **Grouper les connecteurs par application même en partageant un pool.** Un `billing-invoices` + `billing-credits` qui interrogent le même pool `default` est plus clair qu'`invoices` + `credits`.
- **Garder les entrées de dictionnaire partagées.** Une table de correspondance `currency` définie une fois et référencée depuis `billing` et `crm` est préférable à deux définitions parallèles.
- **Exporter avant une mise à jour fournisseur sensible.** Un instantané `billing.zip` de l'état courant est un chemin de retour arrière en un clic si la nouvelle version fournisseur régresse.

---

## Sous le capot

Le champ *Application* de chaque entité est enregistré sur l'entité elle-même dans le TOML de section. Les métadonnées d'application (nom affiché, icône, ordre) sont enregistrées dans `dictionary.toml` → `apps`. Les opérateurs **ne modifient pas ces fichiers à la main** ; l'interface Paramètres est l'interface de référence. Le flux export / import fait des allers-retours par fichiers zip qui contiennent les mêmes extraits TOML ; l'onglet *Applications* est aussi la surface de référence pour cela.

---

## Pour aller plus loin

- [Plugins](./plugins.md) — callables Python personnalisés empaquetés avec les applications.
- [i18n](./i18n.md) — ajout de langues et packs de libellés par application.
- [Déploiement → Mise à jour](../deployment/upgrading.md) — déplacer les personnalisations client à travers les mises à jour de framework et d'applications fournisseur.
