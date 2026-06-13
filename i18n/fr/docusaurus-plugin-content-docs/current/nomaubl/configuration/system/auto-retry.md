---
title: Reprise auto
description: "Paramètres → Reprise auto planifie un passage quotidien qui renvoie chaque facture dans un statut d'erreur technique choisi (par défaut 9904 à 3 h) vers la Plateforme Agréée. Sélecteur multi-statuts, fenêtre d'analyse optionnelle, cadencement par ligne, partagé avec la carte Échec d'envoi du Tableau de bord technique. Le ramassage nocturne pour les lots bloqués côté PA."
keywords: [NomaUBL, reprise auto, reprise nocturne, échec d'envoi, statut 9904, 9905, 9907, Plateforme Agréée, renvoi PA, passage planifié, cadencement, fenêtre d'analyse, JD Edwards, SAP, NetSuite, ERP sur mesure]
---

# Reprise auto

L'écran **Reprise auto** planifie un passage récurrent qui renvoie chaque facture dans un statut d'erreur technique choisi vers la Plateforme Agréée (PA). La ligne par défaut traite le statut `9904` (*Échec d'envoi*) chaque nuit à 3 h — le garde-fou du lot nocturne pour que tout ce qui reste bloqué côté PA en fin de journée soit repris avant la reprise des opérations le matin.

Plusieurs lignes peuvent coexister : une par combinaison (heure, liste de statuts). Le même chemin de code pilote le bouton manuel *Tout renvoyer N* sur la [carte Échec d'envoi du Tableau de bord technique](../../application/tech-dashboard.md#send-failed-row-2-span-4-20260603), si bien que le renvoi manuel et le renvoi planifié produisent des résultats identiques — l'un est déclenché à la main, l'autre par cron.

La page s'applique quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP sur mesure. Le renvoi lit `F564231` pour sélectionner les factures concernées et appelle l'api-connector PA configuré pour chacune ; le format source est transparent.

:::info[Nouveauté 2026.06.03]
La page est entièrement nouvelle. Elle se marie avec la nouvelle carte **Échec d'envoi** du Tableau de bord technique — le tableau de bord effectue le renvoi immédiat en un clic, la Reprise auto effectue le ramassage nocturne sans surveillance. Les deux utilisent le même moteur de renvoi et respectent le même cadencement par appel (par défaut 100 ms).
:::

---

## Ouvrir l'éditeur

- Barre latérale → **Configuration → Système → Reprise auto**.
- Ou depuis le [Tableau de bord technique](../../application/tech-dashboard.md) → carte *Échec d'envoi* → lien *Planifier une reprise…* (raccourci entre le bouton manuel et le catalogue).

---

## En un coup d'œil

<svg viewBox="0 0 1000 560" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ar-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ar-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ar-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="530" rx="14" fill="url(#ar-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Reprise auto</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="80" height="28" rx="6" fill="url(#ar-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="280" y="102" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">＋ Ajouter</text>

  <rect x="328" y="84" width="160" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="408" y="102" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Statuts (multi) ▾</text>

  <rect x="496" y="84" width="140" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="504" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">☑ Activés uniquement</text>

  <rect x="704" y="84" width="78" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="743" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Rafraîchir</text>

  <rect x="240" y="128" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="148" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Reprise nocturne des Échec d'envoi</text>
  <text x="252" y="164" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Renvoie toutes les factures en erreur technique vers la PA</text>
  <text x="252" y="184" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Chaque jour · 03:00 Europe/Paris · cadencement = 100 ms</text>
  <text x="252" y="200" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Statuts : 9904 (Échec d'envoi) · Fenêtre : 7 jours</text>
  <rect x="252" y="214" width="56" height="20" rx="10" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="280" y="228" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ACTIVÉ</text>
  <rect x="314" y="214" width="120" height="20" rx="10" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="374" y="228" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">dernier passage 03/06 · 12 renvoyées</text>
  <rect x="708" y="214" width="60" height="22" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="738" y="229" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Modifier</text>

  <rect x="240" y="262" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="282" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Reprise mi-journée des erreurs techniques</text>
  <text x="252" y="298" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Reprise horaire sur chaque seau d'erreur technique</text>
  <text x="252" y="318" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Chaque heure · décalage de 50 min · cadencement = 250 ms</text>
  <text x="252" y="334" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Statuts : 9904, 9905, 9907 · Fenêtre : 24 heures</text>
  <rect x="252" y="348" width="56" height="20" rx="10" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="280" y="362" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ACTIVÉ</text>

  <rect x="240" y="396" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="416" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Vidage après incident PA (déclenchement manuel)</text>
  <text x="252" y="432" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Vidage cadencé — réactiver après un incident PA</text>
  <text x="252" y="452" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Désactivé par défaut · cadencement = 50 ms</text>
  <text x="252" y="468" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Statuts : 9904, 9905, 9907, 213 · Fenêtre : 0 (aucun filtre)</text>
  <rect x="252" y="482" width="64" height="20" rx="10" fill="rgba(255,255,255,0.04)" stroke="#475569" strokeWidth="1"/>
  <text x="284" y="496" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">DÉSACTIVÉ</text>

  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une reprise</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Une ligne par planification</text>
  <line x1="200" y1="92" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>

  <rect x="820" y="128" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Planification de type cron</text>
  <text x="830" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Heure + minute + fuseau</text>
  <line x1="820" y1="144" x2="788" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>

  <rect x="820" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur multi-statuts</text>
  <text x="830" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Étiquetés Erreur – technique uniquement</text>
  <line x1="820" y1="254" x2="788" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>

  <rect x="20" y="396" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="411" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activer / désactiver</text>
  <text x="30" y="424" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Pause sans suppression</text>
  <line x1="200" y1="412" x2="240" y2="492" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
</svg>

---

## Champs d'une reprise

Chaque ligne est une entrée du catalogue. Le panneau d'édition comporte quatre sections.

### 1. Identification

| Champ | Obligatoire | Description |
|---|---|---|
| **Nom** | oui | Texte libre. Affiché dans la liste du catalogue et sur la carte Planificateur du Tableau de bord technique. Exemple : *Reprise nocturne des Échec d'envoi*. |
| **Description** | non | Légende d'une ligne pour aider les collègues à comprendre l'objet de la reprise. |
| **Activé** | oui (par défaut : `oui`) | Quand `non`, la ligne reste dans le catalogue mais le planificateur l'ignore. Utile pour mettre en pause pendant une fenêtre de maintenance ou un arrêt PA volontaire. |

### 2. Planification

| Champ | Obligatoire | Description |
|---|---|---|
| **Heure** | oui (par défaut : `03`) | Heure de la journée au format 24 h. La reprise se déclenche pile à cette heure. |
| **Minute** | non (par défaut : `00`) | Minute de l'heure. À utiliser pour répartir plusieurs reprises sur une heure et éviter qu'elles ne démarrent toutes à la même seconde. |
| **Fuseau horaire** | oui (par défaut : fuseau du serveur) | Fuseau IANA (ex. `Europe/Paris`). Chaque reprise s'exécute dans son propre fuseau, ce qui permet à une installation multi-régions d'échelonner les passages par région. |
| **Cadence** | oui (par défaut : `quotidienne`) | `quotidienne`, `horaire` ou `toutes les N heures`. Horaire + décalage de 50 minutes donne un passage à `00:50`, `01:50`, … — une installation chargée tire parti de la cadence plus élevée ; le défaut quotidien à 03:00 suffit dans la plupart des cas. |

### 3. Filtre de statuts

Le sélecteur multi-statuts ne liste que les statuts étiquetés **Erreur – technique** dans le [Catalogue des statuts](./statuses.md) :

| Code | Libellé | Quand il s'applique |
|---|---|---|
| `9904` | *Échec d'envoi* | Soumission PA rejetée au niveau HTTP (timeout, 4xx, 5xx). La cible de la reprise par défaut. |
| `9905` | *Échec en mode mock* | Identique à 9904 mais en mode mock. Visible en général uniquement durant les tests. |
| `9907` | *Échec de récupération de statut* | La soumission PA est arrivée mais l'interrogation du cycle de vie continue de tomber en erreur. |
| `213` | *Rejet technique PA* | Le côté PA a signalé un rejet technique après acceptation. |

Sélectionnez-en un ou plusieurs. Une seule ligne peut traiter tous les seaux d'erreur technique d'un coup — utile pour un unique passage nocturne qui couvre l'ensemble.

Les statuts d'erreur métier (`206`, `207`, `208`, …) ne sont **délibérément pas sélectionnables** ici — ils demandent une action de l'opérateur en amont, pas un renvoi aveugle. Le sélecteur impose cette contrainte.

### 4. Options de renvoi

| Champ | Défaut | Description |
|---|---|---|
| **Fenêtre d'analyse** | `0` *(aucun filtre temporel)* | Quand elle est définie, restreint la reprise aux factures dont le statut a été mis à jour pour la dernière fois dans la fenêtre (en heures ou en jours). `7 jours` est le réglage type pour *rattraper la dernière semaine* ; `0` signifie *toute facture dans le statut correspondant, quelle que soit son ancienneté*. |
| **Cadencement** | `100` ms | Délai entre deux appels PA. Aligné sur le bouton manuel *Tout renvoyer* du tableau de bord. À monter (250 ms, 500 ms) pour les installations où la PA limite agressivement le débit ; à baisser (50 ms) pour un vidage ponctuel après un incident PA. |
| **Nombre max de factures par exécution** | illimité | Plafonne la reprise à N factures pour borner la durée d'exécution sur les gros lots. La reprise prend d'abord les factures correspondantes les plus anciennes et s'arrête à N ; le reste est traité au passage planifié suivant. |

---

## Ce qui se passe à l'heure planifiée

Le planificateur est un démon interne à NomaUBL qui se réveille chaque minute et vérifie pour chaque ligne activée l'heure de *prochain déclenchement*. La requête est peu coûteuse ; le catalogue est petit.

| Étape | Description |
|---|---|
| **1. Sélection des factures** | `SELECT * FROM F564231 WHERE current_status IN (<status_list>)`, avec `last_update >= NOW() - <lookback>` en option et `LIMIT <max>` quand il est défini. Les plus anciennes d'abord. |
| **2. Renvoi unitaire** | Pour chaque facture, appel de la tâche `submit` de l'api-connector PA — même chemin de code que l'action *Envoyer* d'origine. La ligne de cycle de vie est mise à jour avec le nouveau statut. |
| **3. Cadencement** | Attente de `<throttle>` ms entre deux appels. |
| **4. Respect du Cancel** | La reprise contrôle un signal d'annulation entre deux factures — les opérateurs peuvent annuler depuis la carte Planificateur du tableau de bord sans attendre la fin de l'exécution. |
| **5. Journalisation du passage** | Écriture d'une ligne dans `F564237` avec le nom de la reprise, l'horodatage début / fin, le nombre traité / réussi / en échec. Visible dans le widget *Événements de processus en direct* du Tableau de bord technique. |

La progression du passage est aussi visible dans la [fenêtre de progression partagée](../../application/tech-dashboard.md#shared-progress-window) — même composant que le bouton manuel *Tout renvoyer*. Cliquez sur n'importe quelle reprise active dans la carte Planificateur pour l'ouvrir.

Quand le planificateur est hors ligne (serveur arrêté, JVM tombée) au moment où une ligne devait se déclencher, le passage est **passé silencieusement** — il n'y a pas de rejeu des passages manqués. La prochaine heure planifiée se déclenche normalement. Pour rattraper le travail manqué, lancez le *Tout renvoyer* manuel sur le tableau de bord ou déclenchez la ligne depuis le catalogue avec *Exécuter maintenant*.

### Bouton Exécuter maintenant

Chaque ligne du catalogue dispose d'un bouton *Exécuter maintenant* qui déclenche la reprise immédiatement, en utilisant la configuration actuelle de la ligne. Utile pour :

- Vérifier une nouvelle reprise avant de la laisser tourner sur sa planification.
- Rattraper un passage manqué après un redémarrage du serveur.
- Rattrapage ponctuel après un incident PA — activer une ligne *Vidage après incident PA* désactivée, *Exécuter maintenant*, puis la désactiver une fois terminé.

L'exécution déclenchée par *Exécuter maintenant* respecte le même cadencement, la même fenêtre d'analyse et la même liste de statuts qu'un passage planifié. Elle ne **fait pas** avancer la cadence du passage planifié — la prochaine heure planifiée se déclenche tout de même.

---

## Astuces et bonnes pratiques

- **Gardez seule la reprise par défaut à 03:00.** Elle couvre le cas le plus courant (lots nocturnes bloqués côté PA). Ajouter une ligne n'a de sens que pour une cadence différente ou un jeu de statuts différent.
- **Échelonnez les reprises avec un décalage de minute.** Deux reprises qui se déclenchent à `:00` se disputent les emplacements du pool de connexions. Étalez-les à `:00`, `:15`, `:30` pour lisser la charge.
- **Augmentez le cadencement quand la PA limite le débit.** Un `429 Too Many Requests` après quelques minutes de reprise est un indice pour pousser le cadencement à 250 ms ou 500 ms. Alignez-le sur le budget par seconde documenté par la PA.
- **Désactivez plutôt que supprimer pendant un arrêt connu.** Une ligne marquée *DÉSACTIVÉ* est intentionnelle et visible ; une ligne supprimée est invisible et facile à oublier une fois l'arrêt terminé.
- **Ne renvoyez pas les erreurs métier.** Le sélecteur le bloque. Si une facture est en `207` (*Contestée par le destinataire*), aucun renvoi n'y changera quoi que ce soit — seule une action de l'opérateur en amont le peut.
- **Utilisez le tableau de bord pour les coups uniques, la Reprise auto pour les habitudes.** Les deux chemins partagent le code ; ce qui diffère, c'est qui les déclenche. Un vidage ponctuel après un incident est un clic ; le garde-fou quotidien est une ligne.

---

## Dépannage

| Symptôme | Cause probable | Correctif |
|---|---|---|
| La ligne planifiée ne se déclenche pas. | La ligne est *DÉSACTIVÉE*. | Ouvrez la ligne, basculez *Activé* sur oui, enregistrez. |
| La ligne se déclenche mais traite zéro facture. | La liste de statuts et la fenêtre d'analyse combinées donnent zéro correspondance. | Inspectez la page [E-Invoicing](../../application/invoices.md) avec le même filtre de statuts ; élargissez la fenêtre ou assouplissez la liste de statuts. |
| La reprise se termine mais le décompte est très inférieur au nombre de la [carte Échec d'envoi](../../application/tech-dashboard.md#send-failed-row-2-span-4-20260603). | Le tableau de bord compte chaque `9904` sans tenir compte de l'âge ; une ligne avec une fenêtre de 7 jours ignore tout ce qui est plus ancien. | Soit retirez la fenêtre (`0` = aucun filtre), soit planifiez une seconde ligne avec une fenêtre plus large pour le stock ancien. |
| Erreurs `429 Too Many Requests` dans le journal d'exécution. | Limite de débit PA atteinte. | Augmentez le cadencement (par ex. 100 ms → 250 ms) sur la ligne et relancez. |
| Deux lignes ont toutes deux démarré à `03:00` et l'une a bloqué l'autre. | Aucun décalage de minute — elles ont sollicité le pool de connexions en même temps. | Échelonnez les lignes (`:00`, `:15`, `:30`). |
| Le bouton *Exécuter maintenant* est grisé. | La reprise est déjà en cours (un passage planifié ou un *Exécuter maintenant* précédent). | Ouvrez la carte Planificateur du tableau de bord → cliquez sur la ligne active → utilisez *Annuler* dans la fenêtre modale si besoin, ou attendez. |
| Le badge du dernier passage reste à *jamais* sur une nouvelle ligne. | L'heure de la ligne est dans le futur — elle ne s'est pas encore déclenchée — et aucun *Exécuter maintenant* n'a été cliqué. | Cliquez sur *Exécuter maintenant* pour vérifier la configuration ; le prochain passage planifié se déroulera normalement. |

---

## Pour aller plus loin

- [Tableau de bord technique → Échec d'envoi](../../application/tech-dashboard.md#send-failed-row-2-span-4-20260603) — le renvoi manuel en un clic ; même chemin de code, déclenché à la main.
- [Fenêtre de progression partagée](../../application/tech-dashboard.md#shared-progress-window) — la fenêtre modale qu'ouvre chaque opération longue.
- [E-Invoicing](./einvoicing.md) — l'api-connector PA que le renvoi appelle ; ajustez-y les délais d'attente et les nombres de tentatives.
- [Statuts](./statuses.md) — le catalogue des codes de statut, dont l'étiquette *Erreur – technique* qui filtre le sélecteur multi-statuts de cette page.
- [Digest quotidien](./daily-digest.md) — planifiez un e-mail quotidien qui résume les erreurs d'intégration ; complément utile à la Reprise auto pour que l'équipe d'astreinte voie ce que le passage n'a pas pu corriger.
