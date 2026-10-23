---
title: Dossiers surveillés
description: "Les dossiers surveillés récupèrent les sorties PDF / XML de JD Edwards dans des répertoires montés, convertissent les PDF en XML en parallèle et lancent un lot par modèle de document — planifiés depuis global → Planification, à la demande depuis la page ou en ligne de commande."
keywords: [NomaUBL, dossiers surveillés, watch-folders, récupération PDF, pdf2xml, lot, planificateur, partage monté, fenêtre de recouvrement, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Dossiers surveillés

La page **Dossiers surveillés** permet à NomaUBL d'aller chercher les documents source directement dans des répertoires — typiquement le partage réseau où JD Edwards dépose ses sorties d'états — au lieu d'attendre qu'on les pousse dans le répertoire d'entrée. Chaque exécution parcourt les dossiers configurés, garde les nouveaux fichiers, **convertit les PDF en XML en parallèle** (les fichiers XML et UBL sont copiés tels quels) dans le répertoire d'entrée du modèle de document, puis lance **un lot par modèle** — le lot en une seule JVM pour un modèle XML ou PDF, la boucle fichier par fichier pour un modèle UBL.

Elle s'ouvre depuis le menu latéral, dans **Synchronisation → Dossiers surveillés** ; **Enregistrer** et **Rafraîchir** se trouvent dans l'en-tête de la page. La configuration est livrée vide : rien ne s'exécute tant qu'aucun dossier n'est configuré ni aucun job planifié.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="wf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
  </defs>
  <rect x="20" y="70" width="200" height="150" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="120" y="98" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dossier surveillé</text>
  <text x="120" y="122" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">/data/mnt/jde_outputs</text>
  <text x="120" y="142" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">motif R42565_*</text>
  <text x="120" y="170" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">nouveaux depuis le dernier scan − recouvrement</text>
  <text x="120" y="188" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">déjà traités → écartés</text>

  <line x1="222" y1="145" x2="300" y2="145" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#wf-arrow)"/>

  <rect x="304" y="70" width="200" height="150" rx="12" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="404" y="98" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Conversion</text>
  <text x="404" y="124" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF → XML (pdf2xml)</text>
  <text x="404" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">en parallèle</text>
  <text x="404" y="170" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">XML copiés tels quels</text>

  <line x1="506" y1="145" x2="584" y2="145" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#wf-arrow)"/>

  <rect x="588" y="70" width="180" height="150" rx="12" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="678" y="98" fill="#cbd5e1" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Entrée du modèle</text>
  <text x="678" y="124" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">dirInput/invoices</text>

  <line x1="770" y1="145" x2="828" y2="145" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#wf-arrow)"/>

  <rect x="832" y="70" width="148" height="150" rx="12" fill="rgba(50,215,75,0.06)" stroke="rgba(50,215,75,0.45)" strokeWidth="1.2"/>
  <text x="906" y="98" fill="#4ade80" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Lot</text>
  <text x="906" y="124" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">un par modèle</text>
  <text x="906" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL · PDF · PA</text>
</svg>

---

## Dossiers

Chaque dossier surveillé est une **carte repliable** : son en-tête affiche le numéro, le répertoire et un résumé sur une ligne ; un clic l'ouvre, **×** supprime le dossier, **＋ Add folder** en ajoute un. **Parallel conversions** (défaut `4`), au-dessus des cartes, fixe le nombre de PDF convertis simultanément ; le lot garde son propre pool de traitement.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <span style={{fontSize: '14px', fontWeight: 700}}>Dossiers surveillés</span>
    <span style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)'}}>↻ Rafraîchir</span>
      <span style={{padding: '4px 12px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontWeight: 600}}>💾 Enregistrer</span>
    </span>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px'}}>
    <div style={{display: 'flex', gap: '10px', padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.08)', alignItems: 'center'}}>
      <span style={{fontFamily: 'monospace', opacity: 0.5}}>#1</span><span style={{fontFamily: 'monospace', fontWeight: 600}}>/data/mnt/jde_outputs</span><span style={{opacity: 0.6}}>R42565_* → invoices · since last scan</span><span style={{flex: 1}} /><span style={{color: '#f87171'}}>×</span>
    </div>
    <div style={{padding: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px'}}>
      <div><div style={{fontWeight: 700, opacity: 0.7, marginBottom: '4px'}}>Folder</div><div>Directory · Pattern · Template · Manifest</div></div>
      <div><div style={{fontWeight: 700, opacity: 0.7, marginBottom: '4px'}}>Scan</div><div>Window · Overlap (hours) · Last scan · Require mount</div></div>
      <div><div style={{fontWeight: 700, opacity: 0.7, marginBottom: '4px'}}>Batch</div><div>Replace · Send to PA · Mode</div></div>
    </div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', display: 'flex', gap: '10px', padding: '8px 10px'}}>
    <span style={{fontFamily: 'monospace', opacity: 0.5}}>#2</span><span style={{fontFamily: 'monospace', fontWeight: 600}}>%APP_HOME%/%ENV%/input/credit_notes</span><span style={{opacity: 0.6}}>→ credit_notes · input folder</span>
  </div>
  <span style={{opacity: 0.7}}>＋ Add folder</span>
</div>

Les champs des cartes restent en anglais, comme dans l'application.

### Dossier (*Folder*)

| Champ | Description |
|---|---|
| **Directory** | Le dossier à parcourir — un partage monté ou un dossier local (par ex. `/data/mnt/jde_outputs`) ; `%APP_HOME%` / `%ENV%` acceptés. Quand il **est** le répertoire d'entrée du modèle, la ligne déclenche simplement le lot — voir [Mode répertoire d'entrée](#mode-repertoire-entree). |
| **Pattern** | Motif de nom des fichiers à récupérer (par ex. `R42565_*`). Par défaut `*.xml` sur le répertoire d'entrée du modèle. |
| **Template** | Le modèle de document qui traite les fichiers — les modèles XML, PDF et UBL sont tous pris en charge. |
| **Manifest** | PDF JD Edwards uniquement : manifeste pdf2xml facultatif (échantillon XML natif JDE). Vide = mode alias DD. |

### Parcours (*Scan*)

| Champ | Description |
|---|---|
| **Window** | **Since last scan** *(défaut)* : les fichiers plus récents que le dernier scan moins le recouvrement. **All files** : tous les fichiers qui correspondent au motif, quelle que soit leur date, sans repère de date — seul le contrôle des fichiers déjà traités empêche un second passage. |
| **Overlap (hours)** | *Since last scan* uniquement — fenêtre de recouvrement sous le dernier scan (défaut `2`) ; un fichier en échec est réessayé tant qu'il reste dedans. |
| **Last scan** | *Since last scan* uniquement — le repère écrit à chaque exécution (instant UTC). Le vider ou saisir une date (`yyyy-MM-dd`, `yyyy-MM-ddTHH:mm:ss` en heure serveur, ou un instant ISO) fait reparcourir à partir de ce point ; un premier scan sans repère ne prend que le recouvrement. |
| **Require mount** | Coché, le répertoire doit être un partage monté — un point de montage non monté est signalé au lieu d'être lu comme vide. |

### Lot (*Batch*)

Les options du lot du modèle, comme sur un job planifié *Directory* :

| Champ | Description |
|---|---|
| **Replace** | Mode remplacement : un fichier déjà traité est repris. À éviter avec *All files*, sauf si les fichiers sont supprimés après traitement. |
| **Send to PA** | **Template settings** *(défaut)*, **Y – Force (UBL templates)** ou **N – Skip**. |
| **Mode** | Mode de traitement d'un lot XML : `AUTO` *(défaut, déterminé document par document)*, `SINGLE`, `BURST` ou `UBL`. |

Les dossiers qui alimentent le **même modèle** doivent porter les mêmes options de lot : la première ligne l'emporte, et un écart est journalisé.

---

## Déroulement d'une exécution

1. **Lister** — chaque dossier est parcouru à la recherche des fichiers qui correspondent à son motif — plus récents que *dernier scan − recouvrement*, ou tous avec *All files*. Un dossier parcouru pour la première fois, sans date, ne prend que la fenêtre de recouvrement — utiliser une date de rattrapage pour l'historique.
2. **Filtrer** — les fichiers déjà traités (nom de fichier source présent dans l'archive) ou déjà en attente au format XML dans le répertoire d'entrée du modèle sont écartés, sauf si le dossier est en mode remplacement.
3. **Convertir** — les PDF sont convertis en XML en parallèle dans le répertoire d'entrée du modèle ; les fichiers XML et UBL sont copiés tels quels. Pour un [modèle à source PDF](../management/documents.md#extraction-pdf), tout PDF texte passe par les réglages d'extraction PDF du modèle au lieu du convertisseur JD Edwards.
4. **Traiter** — une fois toutes les conversions faites, un lot s'exécute par modèle : le lot en une seule JVM pour un modèle XML ou PDF, avec le parallélisme propre au lot ; la boucle fichier par fichier pour un modèle UBL, les fichiers en échec étant déplacés dans le dossier des erreurs.

La date de dernier scan avance à chaque exécution. Un fichier en échec est **réessayé** tant qu'il reste dans la fenêtre de recouvrement et signalé **par son nom** — il ne bloque jamais les autres : dans un lot, un fichier en erreur est marqué en échec et déplacé dans le dossier des erreurs pendant que les autres fichiers se terminent.

**Un seul lot à la fois.** Le lot d'un modèle verrouille son répertoire d'entrée pendant toute sa durée : un second lot ne peut pas démarrer sur les mêmes fichiers. Un parcours manuel ou planifié qui trouve le répertoire verrouillé convertit quand même les nouveaux fichiers, laisse le traitement au lot en cours et le signale dans son journal.

### Mode répertoire d'entrée \{#mode-repertoire-entree\}

Un dossier dont le **Directory est le répertoire d'entrée du modèle** déclenche simplement le lot : ni copie, ni date, ni contrôle des fichiers déjà traités — le lot prend ce que contient le répertoire. C'est la forme « dossier surveillé » d'un job planifié *Directory*.

---

## Exécuter maintenant

Le groupe **Run now** exécute la configuration enregistrée à la demande :

- **Dry run** — liste seulement ce qui serait converti et traité.
- **Scan and process** — lance la récupération complète **en arrière-plan** : le journal de l'exécution s'affiche en direct sous les boutons, sans requête qui dépasse le délai du proxy.
- Une **date de rattrapage** facultative élargit la fenêtre de chaque dossier pour cette exécution uniquement.

---

## Planification et ligne de commande

- **Planifié** — dans [global → Planification → Batch Document Processing](../configuration/system/global.md), ajouter un job de lot avec la source **Watched folders**, toutes les *N* minutes ou **chaque jour** à heure fixe. Le job peut cibler un seul dossier (choisi parmi les répertoires configurés) ou tous. Les sources *Directory* et *BIP* restent disponibles.
- **Ligne de commande** — `nomaubl.sh watch-folders <env> [--folder N] [--since <date>] [--dry-run] [--no-process]`.
- **API** — `POST /api/watch-folders/run`.

---

## Conseils & bonnes pratiques

- **Garder un recouvrement plus long que le temps de copie.** Un fichier encore en cours d'écriture au passage du scan est repris à l'exécution suivante tant qu'il reste dans la fenêtre.
- **Cocher *Require mount* sur les partages réseau.** Sinon, un partage non monté ressemble à un dossier vide et rien n'est traité, sans alerte.
- **Commencer par un dry run.** Il montre exactement quels fichiers un nouveau dossier récupérerait avant toute conversion.
- **Un modèle, un seul jeu d'options de lot.** Deux dossiers qui alimentent le même modèle avec des options différentes sont traités avec les options de la première ligne.
