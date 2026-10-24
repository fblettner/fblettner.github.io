---
title: Capacités IA
description: "L'assistant IA de NomaUBL — un panneau de conversation qui connaît la page et la facture ouvertes, répond à partir de la documentation NomaUBL, de la documentation générée de l'instance et de ses données (dossier de facture, chiffres d'une période, reste à traiter, cycle de vie, erreurs de validation, journal serveur, contrôles d'intégrité, annuaire), suit des procédures de diagnostic, propose des relances et se limite à la lecture."
keywords: [NomaUBL, assistant IA, Claude, outils, contexte, suggestions, relances, procédures de diagnostic, playbooks, search_docs, invoice_dossier, period_figures, instance_docs, server_log, lifecycle_history, validation_errors, Sonnet, Opus, Haiku, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Capacités IA

L'**Assistant IA** est un panneau de conversation intégré à NomaUBL. Il répond à trois types de questions :

- *Comment fonctionne le produit ?* — à partir de la documentation NomaUBL, indexée par le serveur, avec le titre et le lien de la page utilisée.
- *Comment cette instance est-elle paramétrée ?* — à partir du [rapport d'implémentation](./implementation-report.md) produit depuis la configuration de l'instance : documents, correspondances, règles, tâches, rôles.
- *Où en sont mes données ?* — à partir de la base, en **lecture seule** : une facture complète, les chiffres d'une période, le reste à traiter, les erreurs, le journal serveur, les contrôles d'intégrité.

L'assistant connaît **la page affichée et la facture ouverte** : *« pourquoi cette facture est-elle refusée ? »* ne demande aucun numéro à saisir. Les réponses s'affichent au fil de leur rédaction ; chaque appel d'outil apparaît sous forme de pastille avec les filtres utilisés ; chaque réponse se termine par des **boutons de relance**. L'assistant fonctionne en français ou en anglais et suit la langue de la question.

---

## Ouvrir l'assistant

- Cliquer sur **✦ AI Assistant**, à droite de la barre supérieure. Le panneau s'ouvre en tiroir à côté de la page et reste utilisable quand une fenêtre de facture est ouverte.
- **Entrée** envoie la question, **Maj+Entrée** insère un saut de ligne, **■** interrompt la réponse en cours.
- **La conversation est conservée** à la fermeture du panneau ou au rechargement de la page (les 40 derniers messages, dans le navigateur). **+ Nouvelle conversation** repart de zéro.
- **Ouvrir une autre facture démarre une nouvelle conversation** : l'échange précédent portait sur une autre facture et induirait le modèle en erreur.

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '0', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '12.5px', maxWidth: '440px'}}>
  <div style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderBottom: '1px solid rgba(148,163,184,0.25)'}}>
    <span>✦</span><b style={{flex: 1}}>Assistant IA</b>
    <span style={{padding: '2px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Par défaut ▾</span>
    <span style={{padding: '2px 7px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>+</span>
    <span style={{padding: '2px 7px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>×</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderBottom: '1px solid rgba(148,163,184,0.25)', opacity: 0.85}}>
    <span>Contexte :</span><code>invoices</code>
    <span style={{padding: '1px 8px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>🧾 F2026-1203 · 210 ×</span>
  </div>
  <div style={{padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
    <div style={{alignSelf: 'flex-end', padding: '6px 10px', borderRadius: '10px', background: 'rgba(74,158,255,0.15)'}}>Pourquoi cette facture est-elle dans ce statut ?</div>
    <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
      <span style={{padding: '1px 8px', borderRadius: '999px', border: '1px solid rgba(148,163,184,0.3)', fontSize: '11px'}}>🧭 load_playbook · refused-invoice</span>
      <span style={{padding: '1px 8px', borderRadius: '999px', border: '1px solid rgba(148,163,184,0.3)', fontSize: '11px'}}>🧾 invoice_dossier · 1203 RI 00001</span>
    </div>
    <div style={{padding: '8px 10px', borderRadius: '10px', border: '1px solid rgba(148,163,184,0.25)', lineHeight: 1.5}}>
      <div>La facture <b>F2026-1203</b> a été <b>refusée par l'acheteur</b> (statut 210) le 22/10/2026, motif <code>PU_ERR</code> — prix unitaires incorrects.</div>
      <div><b>Étape suivante :</b> émettre un avoir interne, puis une facture corrigée.</div>
      <div style={{opacity: 0.6, marginTop: '4px'}}>📋 Copier</div>
    </div>
    <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
      <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>Montre son cycle de vie</span>
      <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>D'autres refus ce mois-ci ?</span>
    </div>
  </div>
  <div style={{display: 'flex', gap: '6px', padding: '10px 12px', borderTop: '1px solid rgba(148,163,184,0.25)'}}>
    <span style={{flex: 1, padding: '6px 10px', borderRadius: '8px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>Posez une question sur cette facture, un réglage, une erreur…</span>
    <span style={{padding: '6px 10px', borderRadius: '8px', background: '#4a9eff', color: '#fff'}}>➤</span>
  </div>
</div>

| Élément | Rôle |
|---|---|
| **Choix du modèle** | *Par défaut* utilise le modèle défini par l'administrateur ; la liste propose Sonnet 5.5, Opus 5.5, Fable 5.1 et Haiku 4.5. Le choix est mémorisé dans le navigateur. |
| **+ Nouvelle conversation** | Efface la conversation. |
| **Barre de contexte** | La page affichée et, quand une fenêtre de facture est ouverte, une pastille avec le numéro et le statut de la facture. **×** sur la pastille écarte la facture de la conversation en cours. |
| **Pastilles d'outil** | Chaque outil appelé, avec les filtres reçus. |
| **📋 Copier** | Copie la réponse en Markdown, sans la ligne de relances. |
| **Suggestions** | Au-dessus de la zone de saisie : les relances proposées par la dernière réponse ou, en début de conversation, trois questions adaptées à la page. |

---

## Contexte et suggestions

Chaque question part avec la **page affichée**, son **filtre de navigation** et la **facture ouverte** (document, type, société, numéro, statut, client). L'assistant considère que la question porte sur eux, sauf indication contraire.

En début de conversation, les suggestions dépendent de la page :

| Page | Suggestions |
|---|---|
| Une fenêtre de facture est ouverte | *Pourquoi cette facture est-elle dans ce statut ?* · *Résume son cycle de vie* · *Que corriger pour la représenter ?* |
| Tableau de bord IT, Journal serveur, Journal des traitements | *Des erreurs dans le journal serveur aujourd'hui ?* · *L'instance est-elle en bonne santé ?* · *Quelles factures ont échoué cette semaine et pourquoi ?* |
| Tableau de bord, E-Invoicing | *Fais-moi la synthèse des factures de ce mois* · *Quelles factures attendent une action et que faire ?* · *Quelles factures ont échoué cette semaine et pourquoi ?* |
| Rapports, E-Reporting | *Fais-moi la synthèse des factures de ce mois* · *Quelles factures attendent une action et que faire ?* · *Quels documents sont envoyés à la plateforme ?* |
| Paramètres, Rôles, Utilisateurs, Développeur, Documents, Règles de notification, Actions, Tâches planifiées | *Quels documents sont envoyés à la plateforme ?* · *Quelles règles de notification sont actives ?* · *Qu'est-ce qui a changé dans la dernière version ?* |
| Autres pages | *Fais-moi la synthèse des factures de ce mois* · *Que faire d'une facture refusée par le client ?* · *Quels documents sont envoyés à la plateforme ?* |

Chaque réponse se termine par **une à trois relances** : la réponse naturelle à une question posée par l'assistant, la vérification suivante ou une question plus approfondie. Elles remplacent les suggestions et s'envoient d'un clic.

---

## Ce qu'utilise l'assistant

### Documentation

| Outil | Pastille | Usage |
|---|---|---|
| **`search_docs`** | 📚 | Recherche dans la documentation NomaUBL, indexée par le serveur à partir de l'export texte intégral du site (`llms-full.txt`) ; renvoie les meilleures pages avec titre, URL et extrait. Appelé en premier pour toute question sur le produit. |
| **`read_doc_page`** | 📖 | Lit une page trouvée par `search_docs`, par tranches de 12 000 caractères pour les pages longues. |
| **`list_doc_pages`** | 📑 | La table des matières de la documentation, quand la recherche ne donne rien de pertinent. |
| **`instance_docs`** | 🔍 | Le [rapport d'implémentation](./implementation-report.md) de cette instance : table des matières, une section, ou une recherche dans les sections. Appelé en premier pour toute question sur le paramétrage de *cette* instance. |

L'assistant cite la page utilisée et en donne le lien. Il n'invente ni réglage, ni code de statut, ni URL : quand la documentation ne couvre pas un point, il le dit.

### Données de l'instance

| Outil | Pastille | Contenu renvoyé |
|---|---|---|
| **`invoice_dossier`** | 🧾 | Tout sur une facture en un appel : en-tête (statut, client, montants, dates, identifiant PA), lignes, ventilation de TVA, erreurs de validation et cycle de vie complet avec les motifs de la PA. |
| **`list_invoices`** | 🧾 | Jusqu'à 50 factures filtrées sur le statut, la société, le type de transaction (B2B / B2BINT / B2C / B2G / OUTOFSCOPE), le client, le numéro de facture (BT-1) et les dates d'émission. |
| **`lifecycle_history`** | 🕘 | Tous les événements de statut d'une facture, avec le motif de rejet de la PA, l'action attendue et la note de statut. |
| **`validation_errors`** | ⚠️ | Les erreurs de validation d'une facture (niveau, source, règle, message), comme dans les [Erreurs d'intégration](./diagnostics/integration-errors.md). |
| **`period_figures`** | 🔍 | La synthèse d'une période tirée du [rapport d'audit](./audit-report.md) : indicateurs avec la période précédente et l'écart, ventilation des factures traitées, constats, et reste à traiter toutes périodes confondues (par statut, société et ancienneté). Par défaut : le mois en cours. |
| **`dashboard_overview`** | 📊 | Les compteurs du [tableau de bord](./dashboard.md) sur une plage de dates. |
| **`tech_dashboard`** | 🩺 | L'état de l'instance, comme sur le [tableau de bord IT](./tech-dashboard.md) : JVM, tâches planifiées et dernières exécutions, échecs d'envoi, factures en attente, anomalies de configuration, volumétrie des tables. |
| **`server_log`** | 📜 | La fin du [journal serveur](./diagnostics/server-log.md), du plus récent au plus ancien, filtrée sur le niveau, le module et un texte. |
| **`integrity_checks`** | 🔎 | Les [contrôles d'intégrité](../configuration/system/integrity-reports.md) configurés et, pour un contrôle, son résultat sur une plage de dates. |
| **`list_ereports`** | 🔍 | Jusqu'à 50 traitements d'e-reporting filtrés sur le flux (10.1 / 10.3), la société et le statut. |
| **`explain_status_code`** | 🏷️ | Le nom et les libellés FR / EN d'un code de statut de facture ou d'e-reporting. |
| **`reason_codes`** | 📋 | Les motifs de rejet et actions attendues de la PA, avec leurs libellés. |
| **`edirectory_lookup`** | 🏢 | Une entreprise de l'[annuaire](./edirectory.md), par SIREN, SIRET ou raison sociale : données légales et lignes d'adressage. |
| **`template_settings`** | ⚙️ | Les réglages d'un modèle, secrets masqués. Demande la fonctionnalité *Settings access*. |

L'assistant reçoit aussi le **catalogue des statuts** à jour : *« en litige »*, *« refusée »* ou *« en attente de dépôt »* sont rattachés au bon code.

Les outils de données respectent les droits de l'utilisateur connecté : la visibilité par société du rôle s'applique aux factures, chiffres et reste à traiter consultés par l'assistant.

### Procédures de diagnostic

Pour un diagnostic, l'assistant charge d'abord la **procédure** correspondante (🧭 `load_playbook`), puis en suit les étapes. Les procédures fournies sont :

| Procédure | Diagnostic |
|---|---|
| `refused-invoice` | Une facture en attente d'action (213, 9905, 9907, 9904, 207, 208, 210, 221, 206) : ce qui a été refusé, ce qu'il faut corriger, comment la représenter — ou, pour un refus, l'avoir interne à émettre. |
| `backlog` | Ce qui attend encore une action, pour une société ou toutes : à corriger et renvoyer, réponse attendue par l'acheteur, en attente sur la plateforme, déposé mais non transmis. |
| `missing-invoice` | Une facture ou une tâche d'impression JDE qui n'est pas arrivée dans NomaUBL : l'étape en échec et ce qu'il faut lancer. |
| `ereporting-error` | Un traitement d'e-reporting en échec (9956 à 9959) : la donnée en cause et la correction. |
| `status-not-updated` | Une facture qui garde un ancien statut alors que la plateforme a avancé. |

L'administrateur peut ajouter des procédures ou en remplacer une sous le même nom, depuis le champ *Custom playbooks* des [paramètres globaux](../configuration/system/global.md) (onglet *AI*).

Au plus **10 appels d'outil** s'enchaînent pour une question. Quand un outil échoue, l'assistant indique l'outil, l'entrée et l'erreur.

---

## Exemples de conversation

### Diagnostiquer la facture ouverte

> **Utilisateur** — *(facture F2026-1203 ouverte)* Pourquoi cette facture est-elle dans ce statut ?
>
> 🧭 `load_playbook · refused-invoice` &nbsp; 🧾 `invoice_dossier · 1203 RI 00001`
>
> **Assistant IA** — La facture **F2026-1203** a été **refusée par l'acheteur** (statut 210) le 22/10/2026, motif `PU_ERR` — prix unitaires incorrects. Un refus impose un avoir interne : annuler la facture par un avoir, puis émettre une facture corrigée.
>
> *Relances :* `Montre son cycle de vie` · `D'autres refus ce mois-ci ?`

### Synthèse du mois

> **Utilisateur** — Fais-moi la synthèse des factures de ce mois
>
> 🔍 `period_figures · 2026-10-01 → 2026-10-24`
>
> **Assistant IA** — 1 240 factures traitées (+6 % sur septembre), 1 180 déposées, soit un taux de dépôt de 95 %. 38 attendent une action : 22 à corriger et renvoyer, 16 en attente d'une réponse à l'acheteur. Validation au premier passage : 97 %.
>
> | En attente | Nombre | La plus ancienne |
> |---|---|---|
> | 9905 — Échec de validation | 14 | 6 jours |
> | 213 — Rejetée | 8 | 3 jours |
> | 210 — Refusée | 16 | 9 jours |
>
> *Relances :* `Détaille les erreurs 9905` · `Quelles sociétés sont en retard ?`

### Fonctionnement du produit

> **Utilisateur** — Comment fonctionnent les dossiers surveillés ?
>
> 📚 `search_docs · watched folders` &nbsp; 📖 `read_doc_page · …/management/watched-folders`
>
> **Assistant IA** — Un dossier surveillé est parcouru selon une planification ; chaque nouveau fichier est traité avec le document qui lui est associé… *(Source : Dossiers surveillés — lien)*

---

## Limites de l'assistant

- **Aucune modification.** L'assistant se limite à la lecture. Pour un renvoi, un retraitement ou un changement de réglage, il indique l'écran à utiliser.
- **Pas d'accès au-delà des droits.** Les outils de données appliquent la visibilité par société du rôle, et les réglages demandent la fonctionnalité *Settings access*.
- **Pas de fichiers.** La conversation est textuelle : un court XML collé dans la question est lu, un fichier ne peut pas être joint.

L'administrateur définit la clé d'API, le modèle par défaut, la source de documentation, les procédures personnalisées, le prompt système et les outils depuis l'onglet *AI* des [paramètres globaux](../configuration/system/global.md).

---

## Conseils & bonnes pratiques

- **Ouvrir la facture, puis poser la question.** La pastille de contexte transmet la facture à l'assistant, sans rien saisir. **×** sur la pastille permet une question générale sans fermer la fenêtre.
- **Demander la synthèse d'une période en langage courant.** *« Ce mois-ci »*, *« le trimestre dernier »*, *« notre taux de dépôt »* : l'assistant lit les chiffres du rapport d'audit.
- **Cliquer sur les relances.** Elles poursuivent le diagnostic avec la vérification suivante.
- **Ouvrir une nouvelle conversation pour un nouveau sujet.** Un long échange sur un autre thème pèse sur les réponses.
- **Choisir un modèle plus puissant pour un diagnostic long**, le modèle par défaut pour les questions courantes.
- **Considérer le panneau comme un service externe.** Les questions et les résultats d'outil sont transmis au fournisseur du modèle ; éviter d'y coller des données personnelles que les écrans n'affichent pas déjà.
- **Pour une liste exhaustive, passer par les pages dédiées.** L'assistant caractérise un problème ; la liste [E-Invoicing](./invoices.md), le [Diagnostic](./diagnostics/overview.md) et les [Rapports](./reports.md) donnent la vue complète.
