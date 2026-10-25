---
title: Capacités IA
description: "L'assistant IA de NomaUBL — un panneau de conversation qui connaît la page et la facture ouvertes, répond à partir de la documentation NomaUBL, de la documentation générée de l'instance et de ses données (dossier de facture, chiffres d'une période, reste à traiter, cycle de vie, erreurs de validation, journal serveur, contrôles d'intégrité, annuaire), suit des procédures de diagnostic, propose des relances et se limite à la lecture."
keywords: [NomaUBL, assistant IA, Claude, outils, contexte, suggestions, relances, procédures de diagnostic, playbooks, search_docs, invoice_dossier, period_figures, instance_docs, server_log, lifecycle_history, validation_errors, Sonnet, Opus, Haiku, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Capacités IA

L'**Assistant IA** est un panneau de conversation intégré à NomaUBL. Il répond à trois types de questions :

- *Comment fonctionne le produit ?* — à partir de la documentation NomaUBL, indexée par le serveur, avec le titre et le lien de la page utilisée.
- *Comment cette instance est-elle paramétrée ?* — à partir du [rapport d'implémentation](reports/implementation-report.md) produit depuis la configuration de l'instance : documents, correspondances, règles, tâches, rôles.
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

<svg viewBox="0 0 1000 430" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ai-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ai-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="300" y="20" width="400" height="390" rx="14" fill="url(#ai-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="318" y="48" fill="#c084fc" fontSize="13" fontFamily="system-ui, sans-serif">✦</text>
  <text x="336" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Assistant IA</text>
  <rect x="522" y="32" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="532" y="46.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Par défaut ▾</text>
  <rect x="618" y="32" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="632.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="652" y="32" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="666.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <line x1="300" y1="66" x2="700" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="318" y="84" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Contexte :</text>
  <text x="372" y="84" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="430" y="72" width="123" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="491.5" y="84.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🧾 F2026-1203 · 210  ×</text>
  <line x1="300" y1="98" x2="700" y2="98" stroke="#1f2937" strokeWidth="1"/>
  <rect x="390" y="112" width="292" height="26" rx="10" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="536.0" y="129" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Pourquoi cette facture est-elle dans ce statut ?</text>
  <rect x="318" y="148" width="184" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="410.0" y="160.2" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🧭 load_playbook · refused-invoice</text>
  <rect x="318" y="172" width="184" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="410.0" y="184.2" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🧾 invoice_dossier · 1203 RI 00001</text>
  <rect x="318" y="198" width="364" height="104" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="330" y="220" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">La facture F2026-1203 a été refusée par l'acheteur</text>
  <text x="330" y="236" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">(statut 210) le 22/10/2026, motif PU_ERR —</text>
  <text x="330" y="252" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">prix unitaires incorrects.</text>
  <text x="330" y="274" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étape suivante : émettre un avoir interne,</text>
  <text x="330" y="292" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">puis une facture corrigée.   📋 Copier</text>
  <rect x="318" y="314" width="140" height="22" rx="11.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="388.0" y="328.2" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Montre son cycle de vie</text>
  <rect x="464" y="314" width="161" height="22" rx="11.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="544.5" y="328.2" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">D'autres refus ce mois-ci ?</text>
  <line x1="300" y1="350" x2="700" y2="350" stroke="#1f2937" strokeWidth="1"/>
  <rect x="318" y="362" width="324" height="28" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="328" y="379.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Une question sur cette facture, un réglage…</text>
  <rect x="648" y="362" width="34" height="28" rx="5" fill="url(#ai-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="665.0" y="379.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <rect x="20" y="70" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Barre de contexte</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">page + facture ouverte · × l'écarte</text>
  <line x1="240" y1="87.0" x2="430" y2="81" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="20" y="150" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pastilles d'outil</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque appel et ses filtres</text>
  <line x1="240" y1="167.0" x2="318" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="20" y="314" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="329" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Relances</text>
  <text x="30" y="342" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">proposées par la réponse · un clic</text>
  <line x1="240" y1="331.0" x2="318" y2="325" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="760" y="22" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="37" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle conversation</text>
  <text x="770" y="50" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sinon l'échange est conservé</text>
  <line x1="760" y1="39.0" x2="632" y2="56" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="760" y="100" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choix du modèle</text>
  <text x="770" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Par défaut · Sonnet · Opus · Fable · Haiku</text>
  <line x1="760" y1="117.0" x2="567" y2="56" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="760" y="220" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Réponse sourcée, lecture seule</text>
  <text x="770" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">documentation · instance · données</text>
  <line x1="760" y1="237.0" x2="682" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="760" y="360" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Entrée pour envoyer</text>
  <text x="770" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">■ interrompt la réponse</text>
  <line x1="760" y1="377.0" x2="682" y2="376" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
</svg>

| Élément | Rôle |
|---|---|
| **Choix du modèle** | *Par défaut* utilise le modèle défini par l'administrateur ; la liste propose Sonnet 5.5, Opus 5.5, Fable 5.1 et Haiku 4.5. Le choix est mémorisé dans le navigateur. |
| **+ Nouvelle conversation** | Efface la conversation. |
| **Barre de contexte** | La page affichée et, quand une fenêtre de facture est ouverte, une pastille avec le numéro et le statut de la facture. **×** sur la pastille écarte la facture de la conversation en cours. |
| **Pastilles d'outil** | Chaque outil appelé, avec les filtres reçus. |
| **📋 Copier** | Copie la réponse en Markdown, sans la ligne de relances. |
| **Domaines et questions** | Au-dessus de la zone de saisie : les relances de la dernière réponse, ou les quatre questions d'un domaine — voir [Contexte et questions de départ](#contexte-et-questions-de-départ). |

---

## Contexte et questions de départ

Chaque question part avec la **page affichée**, son **filtre de navigation** et la **facture ouverte** (document, type, société, numéro, statut, client). L'assistant considère que la question porte sur eux, sauf indication contraire.

Au-dessus de la zone de saisie, un **sélecteur de domaine** propose quatre questions par domaine. Une question qui se termine par *…* remplit seulement la zone de saisie, à compléter (un numéro de facture, un client).

| Domaine | Questions |
|---|---|
| **Cette facture** *(quand une facture est ouverte)* | *Pourquoi cette facture est-elle dans ce statut ?* · *Résume son cycle de vie* · *Que corriger pour la représenter ?* · *Quelles sont ses erreurs de validation ?* |
| **Période** | *Fais-moi la synthèse des factures de ce mois* · *Synthèse du mois dernier, comparée au mois précédent* · *Taux de dépôt et taux d'erreur de ce mois* · *Montants HT déposés ce mois, par société* |
| **Reste à traiter** | *Quelles factures attendent une action et que faire ?* · *Quelles factures refusées restent à traiter ?* · *Des factures en attente de la plateforme depuis plus de 2 jours ?* · *Quelles factures sont déposées mais non transmises ?* |
| **Factures** | *Quelles factures ont échoué cette semaine et pourquoi ?* · *Cherche la facture n° …* · *Factures du client …* · *Y a-t-il des doublons ce mois ?* |
| **Statuts & erreurs** | *Que signifie le statut 9906 ?* · *Que faire d'une facture refusée par le client ?* · *Que faire d'une facture rejetée par la plateforme ?* · *Que signifie la règle BR-FR-…* |
| **Configuration** | *Quels documents sont envoyés à la plateforme ?* · *Quelles règles de notification sont actives ?* · *Qui a accès à quoi (rôles et utilisateurs) ?* · *Comment est configurée la connexion à la plateforme ?* |
| **Documentation** | *Comment fonctionnent les dossiers surveillés ?* · *Comment fonctionne le e-reporting ?* · *Comment renvoyer ou retraiter une facture ?* · *Qu'est-ce qui a changé dans la dernière version ?* |
| **Technique** | *Des erreurs dans le journal serveur aujourd'hui ?* · *L'instance est-elle en bonne santé ?* · *Les tâches planifiées ont-elles toutes tourné ?* · *Lance les contrôles d'intégrité du mois* |

La page choisit le domaine de départ : **Cette facture** quand une facture est ouverte ; **Technique** sur le tableau de bord IT, le Diagnostic et les Tâches planifiées ; **Configuration** sur les Paramètres, Rôles, Utilisateurs, Développeur, Documents, Règles de notification, Actions et Dossiers surveillés ; **Documentation** sur les pages de référence et les notes de version ; **Période** partout ailleurs — la comptabilité et les ventes arrivent sur la période, l'informatique sur l'instance.

Chaque réponse se termine par **une à trois relances** : la réponse naturelle à une question posée par l'assistant, la vérification suivante ou une question plus approfondie. Elles remplacent les questions du domaine ; un clic sur un domaine les fait revenir.

---

## Ce qu'utilise l'assistant

### Documentation

| Outil | Pastille | Usage |
|---|---|---|
| **`search_docs`** | 📚 | Recherche dans la documentation NomaUBL, indexée par le serveur à partir de l'export texte intégral du site (`llms-full.txt`) ; renvoie les meilleures pages avec titre, URL et extrait. Appelé en premier pour toute question sur le produit. |
| **`read_doc_page`** | 📖 | Lit une page trouvée par `search_docs`, par tranches de 12 000 caractères pour les pages longues. |
| **`list_doc_pages`** | 📑 | La table des matières de la documentation, quand la recherche ne donne rien de pertinent. |
| **`instance_docs`** | 🔍 | Le [rapport d'implémentation](reports/implementation-report.md) de cette instance : table des matières, une section, ou une recherche dans les sections. Appelé en premier pour toute question sur le paramétrage de *cette* instance. |

La documentation est indexée par langue : une interface en français interroge les pages françaises, une interface en anglais les pages anglaises. L'index est actualisé toutes les six heures ; quand le site est injoignable, l'assistant utilise la copie de la documentation intégrée à l'application et le signale dans sa réponse.

L'assistant cite la page utilisée et en donne le lien. Il n'invente ni réglage, ni code de statut, ni URL : quand la documentation ne couvre pas un point, il le dit.

### Données de l'instance

| Outil | Pastille | Contenu renvoyé |
|---|---|---|
| **`invoice_dossier`** | 🧾 | Tout sur une facture en un appel : en-tête (statut, client, montants, dates, identifiant PA), lignes, ventilation de TVA, erreurs de validation et cycle de vie complet avec les motifs de la PA. |
| **`list_invoices`** | 🧾 | Jusqu'à 50 factures filtrées sur le statut, la société, le type de transaction (B2B / B2BINT / B2C / B2G / OUTOFSCOPE), le client, le numéro de facture (BT-1) et les dates d'émission. |
| **`lifecycle_history`** | 🕘 | Tous les événements de statut d'une facture, avec le motif de rejet de la PA, l'action attendue et la note de statut. |
| **`validation_errors`** | ⚠️ | Les erreurs de validation d'une facture (niveau, source, règle, message), comme dans les [Erreurs d'intégration](./diagnostics/integration-errors.md). |
| **`period_figures`** | 🔍 | La synthèse d'une période tirée du [rapport d'audit](reports/audit-report.md) : indicateurs avec la période précédente et l'écart, ventilation des factures traitées, constats, et reste à traiter toutes périodes confondues (par statut, société et ancienneté). Par défaut : le mois en cours. |
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
- **Pour une liste exhaustive, passer par les pages dédiées.** L'assistant caractérise un problème ; la liste [E-Invoicing](./invoices.md), le [Diagnostic](./diagnostics/overview.md) et les [Rapports](reports/overview.md) donnent la vue complète.
