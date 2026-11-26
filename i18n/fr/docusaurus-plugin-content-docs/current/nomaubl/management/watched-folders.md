---
title: Dossiers surveillés
description: "Les dossiers surveillés récupèrent les sorties PDF / XML de JD Edwards dans des répertoires montés, convertissent les PDF en XML en parallèle et lancent un lot par document — planifiés comme lot sur la page Tâches planifiées, à la demande depuis la page ou en ligne de commande."
keywords: [NomaUBL, dossiers surveillés, watch-folders, récupération PDF, pdf2xml, lot, planificateur, partage monté, fenêtre de recouvrement, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Dossiers surveillés

La page **Dossiers surveillés** permet à NomaUBL d'aller chercher les documents source directement dans des répertoires — typiquement le partage réseau où JD Edwards dépose ses sorties d'états — au lieu d'attendre qu'on les pousse dans le répertoire d'entrée. Chaque exécution parcourt les dossiers configurés, garde les nouveaux fichiers, **convertit les PDF en XML en parallèle** (les fichiers XML et UBL sont copiés tels quels) dans le répertoire d'entrée du document, puis lance **un lot par modèle** — le lot en une seule JVM pour un modèle XML ou PDF, la boucle fichier par fichier pour un modèle UBL.

Elle s'ouvre depuis le menu latéral, dans **Gestion → Dossiers surveillés**, à côté des versions de fichiers — la page configure les dossiers, leur planification est un lot de la page [Tâches planifiées](../sync/scheduled-jobs/overview.md) ; **Enregistrer** et **Rafraîchir** se trouvent dans l'en-tête de la page. La configuration est livrée vide : rien ne s'exécute tant qu'aucun dossier n'est configuré ni aucun job planifié.

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

Chaque dossier surveillé est une **carte repliable** : son en-tête affiche le numéro, le répertoire et un résumé sur une ligne ; un clic l'ouvre, **×** supprime le dossier, **＋ Add folder** en ajoute un. Un dossier ouvert présente quatre cartes d'étape — **Folder**, **Document**, **Scan** et **Batch** — qui résument chacune leur réglage (répertoire et motif, document, fenêtre de parcours et dernier scan, mode du lot) ; un répertoire ou un document manquant s'affiche en rouge. Un clic sur une carte affiche ses champs en dessous. **Parallel conversions** (défaut `4`), au-dessus des cartes, fixe le nombre de PDF convertis simultanément ; le lot garde son propre pool de traitement.

<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="wfofr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="wfofr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="wfofr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="wfofr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="424" rx="14" fill="url(#wfofr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Dossiers surveillés</text>
  <rect x="800" y="34" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="840.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Rafraîchir</text>
  <rect x="886" y="34" width="74" height="22" rx="5" fill="url(#wfofr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="923.0" y="48.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="240" y="92" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Parallel conversions</text>
  <rect x="380" y="78" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="92.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">4</text>
  <rect x="240" y="110" width="720" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="130" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">#1</text>
  <text x="276" y="130" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">/data/mnt/jde_outputs</text>
  <text x="440" y="130" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">R42565_∗ → invoices · since last scan</text>
  <text x="942" y="130" fill="#f87171" fontSize="13" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="140" width="720" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="252" y="150" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="157" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268.0" y="168.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣</text>
  <text x="282" y="168.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FOLDER</text>
  <text x="261" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">/data/mnt/jde_outputs · R42…</text>
  <line x1="415" y1="172.0" x2="427" y2="172.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#wfofr-flow)"/>
  <rect x="430" y="150" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="438" y="157" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="446.0" y="168.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="460" y="168.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOCUMENT</text>
  <text x="439" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">invoices</text>
  <line x1="593" y1="172.0" x2="605" y2="172.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#wfofr-flow)"/>
  <rect x="608" y="150" width="162" height="44" rx="8" fill="rgba(255,159,10,0.14)" stroke="#fb923c" strokeWidth="1.3"/>
  <rect x="616" y="157" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="624.0" y="168.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⌕</text>
  <text x="638" y="168.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCAN</text>
  <text x="617" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Since last scan · 2026-11-2…</text>
  <line x1="771" y1="172.0" x2="783" y2="172.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#wfofr-flow)"/>
  <rect x="786" y="150" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="794" y="157" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="802.0" y="168.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="816" y="168.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BATCH</text>
  <text x="795" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">AUTO</text>
  <line x1="240" y1="204" x2="960" y2="204" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="230" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Window</text>
  <rect x="390" y="215" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="229.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Since last scan ▾</text>
  <text x="256" y="260" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Overlap (hours)</text>
  <rect x="390" y="245" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="259.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">2</text>
  <text x="256" y="290" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Last scan</text>
  <rect x="390" y="275" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="289.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">2026-11-25T22:00:00Z</text>
  <rect x="256" y="311" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M258.5,316.5 L260.8,318.8 L264.8,314" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="273" y="320" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Require mount</text>
  <rect x="240" y="372" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="391" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">#2</text>
  <text x="276" y="391" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">%APP_HOME%/%ENV%/input/credit_notes</text>
  <text x="540" y="391" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">→ credit_notes · input folder</text>
  <rect x="240" y="412" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.0" y="426.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add folder</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Conversions parallèles</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PDF convertis simultanément</text>
  <line x1="200" y1="97.0" x2="236" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wfofr-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes du dossier</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque carte affiche son état</text>
  <line x1="200" y1="177.0" x2="252" y2="175" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wfofr-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dossier replié</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic sur l'en-tête l'ouvre</text>
  <line x1="200" y1="397.0" x2="240" y2="387" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wfofr-arrow)"/>
  <rect x="1000" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En-tête du dossier</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">répertoire · résumé</text>
  <line x1="1000" y1="127.0" x2="930" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wfofr-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étape choisie</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses champs sous les cartes</text>
  <line x1="1000" y1="247.0" x2="620" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wfofr-arrow)"/>
</svg>

Les champs des cartes restent en anglais, comme dans l'application.

### Dossier (*Folder*)

| Champ | Description |
|---|---|
| **Directory** | Le dossier à parcourir — un partage monté ou un dossier local (par ex. `/data/mnt/jde_outputs`) ; `%APP_HOME%` / `%ENV%` acceptés. Quand il **est** le répertoire d'entrée du modèle, la ligne déclenche simplement le lot — voir [Mode répertoire d'entrée](#mode-repertoire-entree). |
| **Pattern** | Motif de nom des fichiers à récupérer (par ex. `R42565_*`). Par défaut `*.xml` sur le répertoire d'entrée du modèle. |

### Document

| Champ | Description |
|---|---|
| **Template** | Le document qui traite les fichiers — les modèles XML, PDF et UBL sont tous pris en charge. |
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
3. **Convertir** — les PDF sont convertis en XML en parallèle dans le répertoire d'entrée du modèle ; les fichiers XML et UBL sont copiés tels quels. Pour un [modèle à source PDF](./documents.md#extraction-pdf), tout PDF texte passe par les réglages d'extraction PDF du modèle au lieu du convertisseur JD Edwards.
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

- **Planifié** — sur la page [Tâches planifiées](../sync/scheduled-jobs/overview.md), **Nouvelle tâche → Lot** avec la source **Watched folders**, exécutée toutes les *N* minutes ou **chaque jour** à heure fixe. La tâche peut cibler un seul dossier (choisi parmi les répertoires configurés) ou tous. Les sources *Directory* et *BIP* restent disponibles.
- **Ligne de commande** — `nomaubl.sh watch-folders <env> [--folder N] [--since <date>] [--dry-run] [--no-process]`.
- **API** — `POST /api/watch-folders/run`.

---

## Conseils & bonnes pratiques

- **Garder un recouvrement plus long que le temps de copie.** Un fichier encore en cours d'écriture au passage du scan est repris à l'exécution suivante tant qu'il reste dans la fenêtre.
- **Cocher *Require mount* sur les partages réseau.** Sinon, un partage non monté ressemble à un dossier vide et rien n'est traité, sans alerte.
- **Commencer par un dry run.** Il montre exactement quels fichiers un nouveau dossier récupérerait avant toute conversion.
- **Un modèle, un seul jeu d'options de lot.** Deux dossiers qui alimentent le même modèle avec des options différentes sont traités avec les options de la première ligne.
