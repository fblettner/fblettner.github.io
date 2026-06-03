---
title: Rapport quotidien
description: "Paramètres → Rapport quotidien planifie un email récurrent qui rassemble les erreurs d'intégration de la journée et joint la liste complète des évènements au format Excel. Plusieurs rapports peuvent être configurés par groupe de destinataires, chacun avec son heure d'envoi, sa fenêtre d'analyse, son filtre de sévérité et son routage par colonne — chaque équipe reçoit une coupe différente des mêmes données."
keywords: [NomaUBL, rapport quotidien, erreurs d'intégration, email, pièce jointe Excel, récurrent, planificateur, fenêtre d'analyse, filtre de sévérité, routage par colonne, société, activité, business unit, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapport quotidien

L'écran **Rapport quotidien** planifie un email récurrent qui regroupe toutes les erreurs d'intégration de la journée et joint la liste complète des évènements au format Excel. Le corps de l'email résume la période et les compteurs ; la pièce jointe contient exactement les mêmes données que l'export de l'onglet *Vue détaillée* de la page [Erreurs d'intégration](../../application/integration-errors.md) — mêmes colonnes, même structure.

L'objectif est opérationnel : au lieu de demander à une équipe d'ouvrir la SPA chaque matin pour vérifier les factures en échec, le rapport pousse les erreurs du jour vers leur boîte mail à heure fixe. Plusieurs rapports peuvent coexister pour que des équipes différentes reçoivent des coupes différentes des mêmes données — l'équipe comptabilité pour la société `ACME`, l'équipe opérations pour l'activité `VRAC`, l'équipe développement pour tout ce qui est de sévérité `FATAL`.

Cette page s'applique quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé. Les erreurs proviennent du pipeline de validation et sont enregistrées dans `F564236`, le format source est donc transparent ici.

:::info[Nouveauté 2026.06.02]
Cette page est entièrement nouvelle. Elle remplace le flux *Export* ad hoc de la page Erreurs d'intégration pour les destinataires planifiés — les opérateurs qui n'ouvrent pas la SPA chaque jour mais qui ont quand même besoin des données. Le flux d'export reste disponible pour un tri ponctuel.
:::

---

## Ouvrir l'éditeur

- Barre latérale → **Configuration → Système → Rapport quotidien**.
- Ou directement depuis la page [Erreurs d'intégration](../../application/integration-errors.md) → barre d'outils → *Envoyer au rapport…* quand l'opérateur veut câbler un email récurrent sur le jeu de filtres courant.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="590" rx="14" fill="url(#dd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport quotidien</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="80" height="28" rx="6" fill="url(#dd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="280" y="102" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">＋ Ajouter</text>

  <rect x="328" y="84" width="120" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="388" y="102" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Sévérité ▾</text>

  <rect x="456" y="84" width="140" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="464" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">☑ Activés uniquement</text>

  <rect x="704" y="84" width="78" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="743" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Rafraîchir</text>

  <rect x="240" y="128" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="148" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Comptabilité · ACME</text>
  <text x="252" y="164" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">accounting@acme.example · ops-acme@acme.example</text>
  <text x="252" y="184" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Chaque jour · 07:00 Europe/Paris · sur 1 jour · sévérité = ERROR / FATAL</text>
  <text x="252" y="200" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Filtres : KCO = 00070 · Activité = ISC</text>
  <rect x="252" y="214" width="56" height="20" rx="10" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="280" y="228" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ACTIVÉ</text>
  <rect x="314" y="214" width="78" height="20" rx="10" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="353" y="228" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">dernier envoi 02/06</text>
  <rect x="708" y="214" width="60" height="22" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="738" y="229" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Modifier</text>

  <rect x="240" y="262" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="282" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Opérations · VRAC</text>
  <text x="252" y="298" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">operations@example.com</text>
  <text x="252" y="318" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Chaque jour · 06:30 Europe/Paris · sur 2 jours · sévérité = all</text>
  <text x="252" y="334" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Filtres : Activité = VRAC</text>
  <rect x="252" y="348" width="56" height="20" rx="10" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="280" y="362" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ACTIVÉ</text>

  <rect x="240" y="396" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="416" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Dev — FATAL uniquement</text>
  <text x="252" y="432" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">dev-oncall@example.com</text>
  <text x="252" y="452" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Chaque jour · 08:00 Europe/Paris · sur 1 jour · sévérité = FATAL</text>
  <text x="252" y="468" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Filtres : (aucun — toutes sociétés)</text>
  <rect x="252" y="482" width="64" height="20" rx="10" fill="rgba(255,255,255,0.04)" stroke="#475569" strokeWidth="1"/>
  <text x="284" y="496" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">DÉSACTIVÉ</text>

  <text x="240" y="552" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Planning d'envoi</text>
  <line x1="240" y1="558" x2="788" y2="558" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="576" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">06:30  Opérations · VRAC          → operations@example.com         · 12 évènements · 4 factures</text>
  <text x="240" y="592" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">07:00  Comptabilité · ACME       → accounting@acme + ops-acme    · 7 évènements · 3 factures</text>

  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un rapport</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Un par groupe de destinataires</text>
  <line x1="200" y1="92" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dd-arrow)"/>

  <rect x="820" y="128" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Planning</text>
  <text x="830" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cron + fuseau</text>
  <line x1="820" y1="144" x2="788" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dd-arrow)"/>

  <rect x="820" y="226" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="241" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres d'égalité</text>
  <text x="830" y="254" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">KCO, Activité, Source, Règle, …</text>
  <line x1="820" y1="240" x2="788" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dd-arrow)"/>

  <rect x="20" y="396" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="411" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activer / désactiver</text>
  <text x="30" y="424" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Pause sans suppression</text>
  <line x1="200" y1="412" x2="240" y2="492" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dd-arrow)"/>

  <rect x="20" y="552" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="567" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Planning d'envoi</text>
  <text x="30" y="580" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Plan du jour + compteurs</text>
  <line x1="200" y1="568" x2="240" y2="578" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dd-arrow)"/>
</svg>

---

## Champs du rapport

Chaque rapport est une ligne du catalogue. Le panneau d'édition comporte quatre sections.

### 1. Identification

| Champ | Obligatoire | Description |
|---|---|---|
| **Nom** | oui | Texte libre. Affiché dans la liste du catalogue et en tête du corps de l'email. Exemple : *Comptabilité · ACME*. |
| **Destinataires** | oui | Une ou plusieurs adresses email, séparées par virgule ou point-virgule. Chaque adresse reçoit le même email — il n'y a pas de personnalisation par adresse ici ; créez un autre rapport si les destinataires doivent voir des coupes différentes. |
| **Activé** | oui (défaut : `on`) | Quand il vaut `off`, le rapport est conservé dans le catalogue mais ignoré au moment de l'envoi. Pratique pour mettre en pause un rapport pendant une fenêtre de maintenance sans perdre la configuration. |

### 2. Planning

| Champ | Obligatoire | Description |
|---|---|---|
| **Heure d'envoi** | oui (défaut : `07:00`) | Heure de la journée à laquelle le rapport s'exécute. Heures / minutes ; les secondes sont ignorées. |
| **Fuseau horaire** | oui (défaut : fuseau du serveur) | Un fuseau IANA (par exemple `Europe/Paris`). Chaque rapport tourne dans son propre fuseau, ce qui permet à une installation multi-régions d'envoyer un rapport à 07:00 Paris et un autre à 07:00 New York. |
| **Fenêtre d'analyse** | oui (défaut : `hier et aujourd'hui` = 1 jour) | Profondeur de la collecte d'évènements. Valeurs : `today` (jour courant), `1 day` (hier + aujourd'hui — la valeur par défaut), `7 days`, `30 days`, ou une valeur personnalisée `N days`. La fenêtre est glissante et se termine à l'heure d'envoi. |

### 3. Filtre de sévérité

Un petit groupe de pastilles identique à la barre d'outils des [Erreurs d'intégration](../../application/integration-errors.md) :

| Sévérité | Quand l'utiliser |
|---|---|
| `All` | L'équipe veut toutes les erreurs. |
| `FATAL` | Uniquement les arrêts critiques du pipeline — typiquement le canal dev / astreinte. |
| `ERROR` | Le jeu standard de production — échecs Schematron, rejets PA. |
| `WARNING` | Anomalies de moindre gravité qui ne bloquent pas la transmission (codes de TVA obsolètes, champs optionnels manquants). |
| `INFO` | Verbeux — utilisé typiquement pour les rapports de diagnostic en gestion d'incident. |

Choisissez **une seule** sévérité (ou `All`). Un rapport multi-sévérités correspond à deux lignes de rapport distinctes dans le catalogue.

### 4. Filtres d'égalité par colonne

Le rapport porte une liste de paires `(colonne, valeur)` qui restreignent le jeu d'évènements. Les colonnes prises en charge sont les mêmes que celles disponibles à l'égalité depuis les *List Views* de la page [Erreurs d'intégration](../../application/integration-errors.md) :

| Colonne | Exemple de valeur | Usage courant |
|---|---|---|
| **Société** (`KCO`) | `00070` | Un rapport par société sur une installation multi-sociétés. |
| **Code d'activité** | `ISC`, `VRAC`, `BIP` | Un rapport par activité métier. |
| **Source** | `EN16931`, `CIUSFR`, `FREXTIC`, `CPRO`, `XSD`, `UBL`, `INTEG` | Envoyer le jeu de validations UBL à l'équipe template, le jeu d'intégration à l'équipe ops. |
| **Règle** | `BR-CL-23`, `UBL_CREATION` | Surveiller une règle en échec précise. |
| **Business unit** | `MU-LYO`, `MU-PAR` | Routage par BU. |

Les filtres se combinent en **ET**. Filtres vides = toutes les lignes. Ajouter deux valeurs sur la même colonne demande deux rapports.

---

## À quoi ressemble l'email

Le corps résume la période, les compteurs et un top 5 des règles en échec :

```text title="Corps de l'email du rapport quotidien"
Subject: NomaUBL rapport quotidien — Comptabilité · ACME — 7 erreurs, 3 factures

Période :      sur 1 jour (2026-06-01 07:00 → 2026-06-02 07:00 Europe/Paris)
Filtres :      société = 00070, activité = ISC, sévérité = ERROR / FATAL
Évènements :   7
Factures :     3

Règles les plus en échec
  BR-CL-23    Le code devise doit suivre ISO 4217.                         5
  BR-FR-12    Le SIRET BT-46 doit être présent sur une facture B2B FR.     1
  PA_SEND     Soumission PA rejetée au niveau HTTP (timeout / 4xx / 5xx).  1

La liste complète des évènements est jointe (errors-2026-06-02.xlsx).
```

La pièce jointe est le même fichier Excel que celui exporté depuis l'onglet *Vue détaillée* des [Erreurs d'intégration](../../application/integration-errors.md) — chaque évènement de chaque facture dans le périmètre, avec des colonnes alignées sur le tableau.

Quand la période contient **zéro erreur**, le rapport est envoyé quand même avec un corps court *aucune erreur sur cette période* (sans pièce jointe). Les opérateurs ont demandé ce signal positif — savoir que le rapport s'est exécuté sans incident est en soi une information.

---

## Comment il s'exécute

Le planificateur est un démon interne à NomaUBL qui se réveille chaque minute et interroge le catalogue pour repérer les rapports dont la **prochaine heure d'envoi** vient de passer. La requête est rapide (le catalogue est petit) et sans état — l'horodatage du dernier envoi est enregistré sur la ligne elle-même.

| État | Description |
|---|---|
| `Activé = on` | Le prochain déclenchement de `<heure d'envoi>` dans `<fuseau>` collecte les évènements, construit l'Excel et envoie. Le badge *dernier envoi* de la ligne se met à jour. |
| `Activé = off` | La ligne du catalogue est ignorée à chaque tick. |
| Échec SMTP | L'envoi est retenté au tick suivant (une minute plus tard) jusqu'à 5 tentatives ; au-delà, l'échec est enregistré dans le [Journal de traitement](../../management/processing-log.md) avec l'erreur SMTP, et le rapport est marqué *échec* pour la journée. Renvoi manuel possible à tout moment via le bouton *Envoyer maintenant*. |

L'exécution du rapport lit la configuration SMTP depuis la section `smtp` de [Système → Global](./global.md) à l'échelle de la plateforme — le même SMTP qui alimente les [Règles de notification](../../management/notification-rules.md) et les notifications par facture. Vérifiez que ces identifiants fonctionnent avant de câbler un rapport quotidien.

### Bouton Envoyer maintenant

Chaque ligne du catalogue dispose d'un bouton *Envoyer maintenant* qui déclenche le rapport immédiatement, indépendamment de l'heure planifiée. La fenêtre, les filtres et la sévérité de la ligne sont utilisés tels quels. Pratique pour :

- Vérifier un rapport après l'avoir créé ou modifié.
- Pousser un envoi ponctuel après un incident — les mêmes données, envoyées maintenant au lieu d'attendre le tick suivant.

L'exécution *Envoyer maintenant* met aussi à jour le badge *dernier envoi*, ce qui n'empêche pas l'envoi planifié du jour de partir si l'horaire n'a pas encore été atteint.

---

## Conseils et bonnes pratiques

- **Un rapport par équipe, pas par destinataire.** Un seul rapport avec trois adresses en copie coûte moins cher à maintenir que trois rapports avec une adresse chacun — les coupes s'alignent en général par équipe, pas par individu.
- **Gardez la fenêtre d'analyse courte.** La valeur par défaut `1 day` est habituellement la bonne. Une fenêtre `7 days` revient à relire les mêmes erreurs chaque matin, ce qui dilue le signal.
- **Servez-vous du bouton *Activé* pour les fenêtres de maintenance.** Mettre un rapport en pause pendant une coupure planifiée évite qu'un flot d'erreurs attendues n'atteigne les destinataires. Réactivez quand la fenêtre se ferme.
- **Envoyer maintenant est le test fumée.** Après avoir créé ou modifié un rapport, cliquez sur *Envoyer maintenant*. L'email arrive en quelques secondes et confirme la configuration avant le prochain tick planifié.
- **Le routage par sévérité protège l'astreinte.** Un rapport FATAL-uniquement vers le canal d'astreinte + un rapport ERROR vers l'équipe production est la configuration habituelle — l'astreinte n'est pas noyée sous le bruit Schematron.

---

## Dépannage

| Symptôme | Cause probable | Correction |
|---|---|---|
| La ligne du rapport dans le catalogue est marquée *échec*. | Rejet SMTP (authentification, relais refusé, rebond destinataire). | Ouvrez le [Journal de traitement](../../management/processing-log.md), filtrez sur `daily-digest`, lisez l'erreur SMTP. Corrigez les identifiants [Global → SMTP](./global.md), puis cliquez sur *Envoyer maintenant*. |
| L'email est arrivé mais la pièce jointe est vide. | Le jeu de filtres ne trouve aucun évènement correspondant dans la fenêtre d'analyse. | Détendez un filtre (par exemple, retirez le code d'activité) ou étendez la fenêtre à `7 days` ; cliquez sur *Envoyer maintenant* pour revérifier. |
| La pièce jointe contient des erreurs plus anciennes que la fenêtre d'analyse. | La fenêtre d'analyse sélectionne d'abord les **factures** qui ont au moins une erreur dans la fenêtre, puis exporte **toutes** les erreurs de ces factures — c'est le même comportement que la [Vue détaillée](../../application/integration-errors.md#detailed-view). C'est intentionnel. | S'il vous faut un export strict à la fenêtre, faites-le manuellement depuis l'onglet *Par évènement*. |
| Deux destinataires reçoivent le même rapport en double. | Deux lignes de rapport dans le catalogue ont des listes de destinataires qui se recoupent. | Auditez le catalogue ; fusionnez ou dédoublonnez. |
| Le rapport part à la mauvaise heure. | Le fuseau horaire pointe sur la mauvaise zone. | Ouvrez le rapport, renseignez le bon fuseau IANA (`Europe/Paris`, `Africa/Casablanca`, …) et enregistrez. |
| Le formulaire a perdu les valeurs après Enregistrer. *(2026.05.x)* | Corrigé en 2026.06.02. | Mettez à jour vers la build courante — le formulaire se rafraîchit désormais depuis l'enregistrement fraîchement sauvegardé. |

---

## Pour aller plus loin

- [Erreurs d'intégration](../../application/integration-errors.md) — la page SPA que le rapport résume ; mêmes données, tri interactif.
- [Règles de notification](../../management/notification-rules.md) — notifications email par évènement (un email par facture qui correspond) ; utile quand la latence prime sur le récapitulatif quotidien.
- [Système → Global → SMTP](./global.md) — la configuration SMTP sortante que le rapport utilise.
- [Journal de traitement](../../management/processing-log.md) — diagnostics des envois de rapport en échec.
