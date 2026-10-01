---
title: Dossiers surveillés
description: "Les dossiers surveillés récupèrent les sorties PDF / XML de JD Edwards dans des répertoires montés, convertissent les PDF en XML en parallèle et lancent un lot par modèle de document — planifiés depuis global → Planification, à la demande depuis l'éditeur ou en ligne de commande."
keywords: [NomaUBL, dossiers surveillés, watch-folders, récupération PDF, pdf2xml, lot, planificateur, partage monté, fenêtre de recouvrement, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Dossiers surveillés

Le modèle système **Watched folders** permet à NomaUBL d'aller chercher les documents source directement dans des répertoires — typiquement le partage réseau où JD Edwards dépose ses sorties d'états — au lieu d'attendre qu'on les pousse dans le répertoire d'entrée. Chaque exécution parcourt les dossiers configurés, garde les nouveaux fichiers, **convertit les PDF en XML en parallèle** (les fichiers XML sont copiés tels quels) dans le répertoire d'entrée du modèle de document, puis lance **un lot par modèle**.

Il s'ouvre dans **Configuration → Système → Watched folders**. Le modèle est livré vide : rien ne s'exécute tant qu'aucun dossier n'est configuré ni aucun job planifié.

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

Chaque ligne du tableau est un dossier surveillé ; **＋ Add folder** ajoute une ligne, **×** la supprime.

| Colonne | Description |
|---|---|
| **Directory** | Le dossier à parcourir (par ex. `/data/mnt/jde_outputs`). |
| **Pattern** | Motif de nom des fichiers à récupérer (par ex. `R42565_*`). |
| **Template** | Le modèle de document qui traite les fichiers — ils sont déposés dans son répertoire d'entrée. |
| **Manifest** | Manifeste pdf2xml facultatif, utilisé pour convertir les PDF de ce dossier. |
| **Overlap h** | Fenêtre de recouvrement en heures (défaut `2`) : chaque exécution regarde les fichiers plus récents que le dernier scan **moins** cette fenêtre. |
| **Mount** | Coché, le répertoire doit être un partage monté — un point de montage non monté est signalé en erreur au lieu d'être lu comme vide. |
| **Last scan** | Le repère écrit à chaque exécution (instant UTC). Videz-le ou saisissez une date (`yyyy-MM-dd`, `yyyy-MM-ddTHH:mm:ss` en heure serveur, ou un instant ISO) pour reparcourir à partir de ce point. |

Au-dessus du tableau, **Parallel conversions** (défaut `4`) fixe le nombre de PDF convertis simultanément ; le lot garde son propre pool de traitement.

---

## Déroulement d'une exécution

1. **Lister** — chaque dossier est parcouru à la recherche des fichiers qui correspondent à son motif et sont plus récents que *dernier scan − recouvrement*. Un dossier parcouru pour la première fois, sans date, ne prend que la fenêtre de recouvrement — utilisez une date de rattrapage pour l'historique.
2. **Filtrer** — les fichiers déjà traités (nom de fichier source présent dans l'archive) ou déjà en attente au format XML dans le répertoire d'entrée du modèle sont écartés.
3. **Convertir** — les PDF sont convertis en XML en parallèle dans le répertoire d'entrée du modèle ; les XML sont copiés tels quels.
4. **Traiter** — un lot s'exécute par modèle, avec le parallélisme propre au lot.

La date de dernier scan avance à chaque exécution. Un fichier en échec est **réessayé** tant qu'il reste dans la fenêtre de recouvrement et signalé **par son nom** — il ne bloque jamais les autres.

---

## Exécuter maintenant

Le groupe **Run now** exécute la configuration enregistrée à la demande :

- **Dry run** — liste seulement ce qui serait converti et traité.
- **Scan and process** — lance la récupération complète.
- Une **date de rattrapage** facultative élargit la fenêtre de chaque dossier pour cette exécution uniquement.

---

## Planification et ligne de commande

- **Planifié** — dans [global → Planification → Batch Document Processing](./global.md), ajoutez un job de lot avec la source **Watched folders**, toutes les *N* minutes ou **chaque jour** à heure fixe. Le job peut cibler un seul dossier (choisi parmi les répertoires configurés) ou tous.
- **Ligne de commande** — `nomaubl.sh watch-folders <env> [--folder N] [--since <date>] [--dry-run] [--no-process]`.
- **API** — `POST /api/watch-folders/run`.

---

## Conseils & bonnes pratiques

- **Gardez un recouvrement plus long que le temps de copie.** Un fichier encore en cours d'écriture au passage du scan est repris à l'exécution suivante tant qu'il reste dans la fenêtre.
- **Cochez *Mount* sur les partages réseau.** Sinon, un partage non monté ressemble à un dossier vide et rien n'est traité, sans alerte.
- **Commencez par un dry run.** Il montre exactement quels fichiers une nouvelle ligne de dossier récupérerait avant toute conversion.
