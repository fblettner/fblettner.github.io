---
title: Capacités IA
description: "Assistant IA intégré à NomaUBL — répond aux questions sur le fonctionnement du produit en s'appuyant sur la documentation publique et aux questions sur les données opérationnelles (factures, statuts, erreurs de validation, dépôts e-reporting) via un jeu réduit d'outils en lecture seule. Réponses en flux, appels d'outils visibles, prise en charge du français et de l'anglais."
keywords: [NomaUBL, assistant IA, Claude, agentique, tool use, list_invoices, list_ereports, explain_status_code, validation_errors, web_fetch, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Capacités IA

L'**assistant IA** est un panneau de discussion intégré à NomaUBL. Deux familles de questions sont prises en charge :

- *Comment fonctionne le produit ?* — l'assistant consulte la documentation publique sur `docs.nomana-it.fr` et répond avec une synthèse sourcée.
- *Quel est l'état des données ?* — l'assistant interroge la base NomaUBL en **lecture seule** et restitue les lignes correspondantes : factures, statuts, erreurs de validation, dépôts e-reporting.

Les réponses sont diffusées en flux à mesure de leur génération ; chaque appel d'outil apparaît en ligne sous forme de pastille, garantissant la visibilité des actions effectuées. La langue de la réponse suit celle de la question — français ou anglais.

---

## Ouverture du panneau

- L'entrée **✦ AI Assistant** dans la barre de navigation (en haut à droite, pastille en dégradé violet) ouvre le panneau en tiroir latéral, lequel réduit l'espace de travail.
- Le sélecteur en haut du panneau permet de choisir un modèle. **Default** convient aux questions courantes ; les modèles plus puissants (Sonnet, Opus) offrent un raisonnement plus long, à un coût API supérieur.
- Touche **Entrée** pour envoyer, **Maj+Entrée** pour insérer un saut de ligne, **■** pour interrompre une réponse en cours.
- La fermeture du panneau réinitialise la conversation — l'assistant ne conserve aucun historique entre sessions.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aichat-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aichat-g-panel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f172a" stopOpacity="0.92"/><stop offset="100%" stopColor="#0a0e1a" stopOpacity="0.92"/></linearGradient>
    <linearGradient id="aichat-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <linearGradient id="aichat-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aichat-g-cta" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6d28d9"/><stop offset="100%" stopColor="#4a9eff"/></linearGradient>
  </defs>

  <rect x="240" y="20" width="540" height="580" rx="16" fill="url(#aichat-g-panel)" stroke="#1f2937" strokeWidth="1.4"/>

  <line x1="240" y1="68" x2="780" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="48" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">✦</text>
  <text x="284" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">AI Assistant</text>
  <rect x="640" y="32" width="86" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="47" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Default ▾</text>
  <rect x="734" y="32" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="48" fill="#64748b" fontSize="13" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="430" y="84" width="330" height="36" rx="10" fill="url(#aichat-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="446" y="106" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">quel est le problème pour la facture 10000 / RI / 00001 ?</text>

  <rect x="262" y="134" width="226" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="270" y="149" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">🔍</text>
  <text x="284" y="149" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">validation_errors</text>
  <text x="382" y="149" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">· doc=10000 dct=RI kco=00001</text>

  <rect x="262" y="170" width="406" height="170" rx="10" fill="url(#aichat-g-card)" stroke="#334155" strokeWidth="1"/>
  <text x="278" y="192" fill="#cbd5e1" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">Recherche des erreurs de validation pour cette facture…</text>
  <line x1="278" y1="202" x2="652" y2="202" stroke="#1f2937" strokeWidth="1"/>
  <text x="278" y="222" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">La facture 10000 / RI / 00001 échoue à un contrôle XSD.</text>
  <text x="278" y="244" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Problème</text>
  <text x="320" y="244" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Ordre des éléments UBL 2.1 — AdditionalDocument-</text>
  <text x="278" y="258" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">         Reference placé avant ProjectReference / Signature.</text>
  <text x="278" y="282" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cause probable</text>
  <text x="358" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Le XSL émet l'élément en ordre incorrect.</text>
  <text x="278" y="306" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recommandations</text>
  <text x="278" y="320" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">• vérifier la transformation JDE → UBL</text>
  <text x="278" y="332" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">• valider l'ordre face au schéma UBL 2.1</text>

  <rect x="262" y="354" width="78" height="20" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="270" y="368" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📋 Copy</text>

  <rect x="430" y="396" width="76" height="32" rx="9" fill="url(#aichat-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="468" y="416" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" textAnchor="middle">oui</text>

  <rect x="262" y="442" width="160" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="270" y="457" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">🔍</text>
  <text x="284" y="457" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">list_invoices</text>
  <text x="354" y="457" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">· kco=00001</text>

  <rect x="262" y="476" width="406" height="62" rx="10" fill="url(#aichat-g-card)" stroke="#334155" strokeWidth="1"/>
  <text x="278" y="496" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Statut de la facture 10000 / RI / 00001 — </text>
  <text x="278" y="510" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">client · 2025-02-01 · B2C · 140,70 € · </text>
  <text x="465" y="510" fill="#f87171" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">9905 — Échec de validation</text>
  <text x="278" y="528" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Bloquée depuis le 2025-02-01 sur l'erreur XSD ci-dessus.</text>

  <line x1="240" y1="558" x2="780" y2="558" stroke="#1f2937" strokeWidth="1"/>
  <rect x="262" y="568" width="440" height="26" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="585" fill="#475569" fontSize="11" fontFamily="system-ui, sans-serif">Posez votre question…</text>
  <rect x="710" y="568" width="38" height="26" rx="6" fill="url(#aichat-g-cta)"/>
  <text x="729" y="585" fill="#fff" fontSize="13" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>

  <rect x="20" y="32" width="180" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="50" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Barre de titre</text>
  <text x="30" y="65" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sélecteur de modèle · fermer</text>
  <line x1="200" y1="52" x2="240" y2="52" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="20" y="134" width="200" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="152" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Pastille d'appel d'outil</text>
  <text x="30" y="167" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom + filtres réellement utilisés</text>
  <line x1="220" y1="155" x2="262" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="20" y="240" width="200" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="258" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Réponse diffusée en flux</text>
  <text x="30" y="273" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Markdown · titres · tableaux</text>
  <line x1="220" y1="260" x2="262" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="20" y="354" width="200" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="372" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Copie de la réponse</text>
  <text x="30" y="387" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à coller dans un ticket / mail</text>
  <line x1="220" y1="370" x2="262" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="800" y="84" width="180" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="102" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Question utilisateur</text>
  <text x="810" y="117" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">texte libre · FR ou EN</text>
  <line x1="800" y1="105" x2="760" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="800" y="396" width="180" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="414" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Tour de relance</text>
  <text x="810" y="429" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">diagnostic multi-étapes</text>
  <line x1="800" y1="416" x2="510" y2="416" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="800" y="558" width="180" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="576" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Zone de saisie</text>
  <text x="810" y="591" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Entrée pour envoyer · ■ pour interrompre</text>
  <line x1="800" y1="580" x2="750" y2="580" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>
</svg>

Chaque action menée par l'assistant pour le compte de l'utilisateur apparaît sous forme de pastille 🔍 (consultation de données) ou 📖 (consultation de documentation), avec les filtres réellement utilisés affichés à côté. Aucune étape n'est cachée.

---

## Questions prises en charge

L'assistant est relié à deux sources d'information, toutes deux en lecture seule.

### Sur le produit

Toute page de la documentation publique (`docs.nomana-it.fr`) peut être consultée pour ancrer la réponse. Cas d'usage :

- doute sur le comportement d'une fonctionnalité (*« À quoi sert Replace = Skip sur Processing → XML ? »*) ;
- besoin d'une définition rapide pour un collègue (*« Différence entre flux 10.1 et 10.3 ? »*) ;
- rappel du cycle de vie officiel (*« Comment une facture passe-t-elle du statut 9900 au statut 10 ? »*).

La pastille associée est 📖 `web_fetch · <url>`.

### Sur les données

Quatre outils en lecture seule couvrent les questions opérationnelles courantes :

| Outil | Données retournées | Question typique |
|---|---|---|
| **`list_invoices`** | Jusqu'à 50 factures de F564231, avec filtres : code statut, société, routage BAR (B2B / B2BINT / B2C / B2G / OUTOFSCOPE), nom client (sous-chaîne), période d'émission. | *« Lister les factures en attente pour la société 00070 en EUR »*, *« Échecs d'envoi depuis lundi dernier »* |
| **`explain_status_code`** | Le nom de tag et les libellés FR / EN d'un code statut. Consulte le catalogue facture (1, 8, 10, 37, 9900–9907 …) et le catalogue e-reporting (9950–9957). | *« Que signifie 9906 ? »*, *« Statut 9954 ? »* |
| **`validation_errors`** | Jusqu'à 100 erreurs de F564236 pour un triplet `DOC + DCT + KCO` (niveau, source, règle, message — mêmes colonnes que la page [Erreurs d'intégration](./integration-errors.md)). | *« Quel est le problème pour la facture 10000 / RI / 00001 ? »* |
| **`list_ereports`** | Jusqu'à 50 dépôts de F564240 avec filtres : flux (10.1 / 10.3), société, code statut (9950–9957). | *« Les dix derniers dépôts 10.3 pour la société 00070 »*, *« Dépôts e-reporting en attente »* |

Le déclenchement est automatique — aucun appel manuel n'est nécessaire. Une garde de sécurité interrompt la boucle agentique au bout de **5 itérations d'outil par tour**, ce qui prévient toute séquence emballée susceptible d'épuiser le budget API.

---

## Exemples de conversation

Les transcriptions ci-dessous proviennent d'une session réelle. Le panneau fonctionne à l'identique en anglais.

### Exemple 1 — Diagnostic d'une facture isolée

> **Utilisateur**
> *quel est le problème pour la facture 10000 / RI / 00001*
>
> 🔍 **`validation_errors`** · `doc=10000 dct=RI kco=00001`
>
> **AI Assistant**
> *Je vais chercher les erreurs de validation pour cette facture.*
>
> La facture 10000 / RI / 00001 a une erreur de validation XSD :
>
> **Problème :** Structure UBL 2.1 invalide. L'élément `AdditionalDocumentReference` est trouvé à une position non autorisée.
>
> **Cause probable :** L'ordre des éléments dans le document UBL ne respecte pas le schéma. `AdditionalDocumentReference` devrait apparaître après `ProjectReference`, `Signature` ou `AccountingSupplierParty`.
>
> **Recommandations :**
> - Vérifier la transformation JD Edwards → UBL générée par NomaUBL.
> - S'assurer que les éléments UBL sont ordonnés conformément à la norme UBL 2.1.
> - Contrôler les données source dans JD Edwards (type de document, références additionnelles).
>
> *Souhaitez-vous que je consulte le statut global de cette facture ?* &nbsp;📋
>
> ---
>
> **Utilisateur**
> *oui*
>
> 🔍 **`list_invoices`** · `kco=00001`
>
> **AI Assistant**
>
> Statut de la facture 10000 / RI / 00001 :
>
> | Attribut | Valeur |
> |---|---|
> | Client | LE CLIENT |
> | Date d'émission | 2025-02-01 |
> | Type de document | B2C |
> | Montant HT | 130,00 € |
> | TVA | 10,70 € |
> | Montant TTC | 140,70 € |
> | Statut | 🔴 9905 — Échec de validation |
>
> **Récapitulatif :** la facture est bloquée en validation depuis le 1er février 2025 à cause de l'erreur XSD ci-dessus (élément `AdditionalDocumentReference` mal positionné).
>
> *Besoin d'aide pour corriger cette facture ?* &nbsp;📋

Un triplet (`DOC + DCT + KCO`) suffit pour amorcer le diagnostic. L'assistant enchaîne ses propres relances — d'abord la table de validation, puis l'en-tête de facture — et propose la prochaine étape utile.

### Exemple 2 — Comptage des échecs sur l'ensemble du parc

> **Utilisateur**
> *combien de factures au total ne sont pas valides ?*
>
> 🔍 **`list_invoices`** · `status=9905`
>
> **AI Assistant**
>
> **Résultat :** 50 factures en échec de validation (statut 9905).
>
> Les résultats affichent le maximum de **50 entrées**. Le nombre total exact peut être supérieur.
>
> **Répartition observée :**
> - Majorité : société 00002 (49 factures).
> - Minorité : société 00001 (1 facture) et autres.
> - Types de documents : surtout des `RI` (factures), 1 `RM` (facture d'avoir).
> - Période : principalement mars-avril 2026.
>
> **Recommandations :**
> - Vérifier si toutes ces factures sont touchées par le même problème XSD.
> - Examiner en priorité les données source de la société 00002.
> - Lancer un audit sur la transformation JD Edwards → UBL.
>
> *Voulez-vous que je vous montre les erreurs détaillées d'une autre facture pour confirmer si c'est le même problème ?* &nbsp;📋

Le plafond de 50 lignes sur `list_invoices` est intentionnel — pour un dénombrement exhaustif, la page [E-Invoicing](./invoices.md) reste l'outil approprié. L'assistant excelle à *caractériser* un problème (quelle société, quel type de document, quelle période), avant de renvoyer vers l'écran dédié pour la liste complète.

### Exemple 3 — Confirmation du motif

> **Utilisateur**
> *oui*
>
> 🔍 **`validation_errors`** · `doc=10001 dct=RI kco=00002`
>
> **AI Assistant**
>
> Intéressant — la facture 10001 / RI / 00002 n'a aucune erreur enregistrée en F564236.
>
> Cela signifie que :
> - soit l'erreur a été corrigée après une relance,
> - soit le statut 9905 vient d'une autre source (par exemple un rejet de la Plateforme Agréée),
> - soit la table d'erreurs n'a pas conservé la trace.
>
> *Pouvez-vous me préciser le statut courant de la facture 10001 / RI / 00002 ? Je peux le vérifier.* &nbsp;📋

Lorsqu'un outil ne renvoie rien, l'assistant le signale explicitement et propose la suite plutôt que de spéculer. *« Aucune erreur enregistrée »* sur une facture en 9905 constitue en soi un diagnostic utile.

---

## Lecture des réponses

- **Pastilles d'appel d'outil** — affichent les filtres *réellement* appliqués (`status=9906 dateFrom=2026-01-01 …`). En cas de résultat inattendu, la pastille fournit l'explication.
- **Rendu Markdown** — titres, listes à puces, fragments de code et tableaux apparaissent mis en forme dans le panneau, sans dump en texte brut.
- **Diffusion en flux** — la bulle se remplit à mesure que le modèle répond ; le bouton **■** interrompt proprement la diffusion sans clore la conversation.
- **📋 Copy** au pied de chaque réponse copie le Markdown brut dans le presse-papiers — pratique pour l'intégrer à un ticket ou à un courriel.

---

## Limites de l'assistant

- **Aucune écriture.** Aucun outil ne modifie la base. Les modifications de configuration, les relances de validation et les changements de statut restent hors périmètre.
- **Pas de navigation web ouverte.** La consultation documentaire est restreinte à la liste blanche définie par l'administrateur (`docs.nomana-it.fr` par défaut).
- **Pas de pièces jointes.** Le canal est purement textuel. Coller un UBL XML directement dans un message reste possible (dans la limite du contexte modèle), mais l'envoi de fichiers n'est pas pris en charge.
- **Aucune persistance.** La fermeture du panneau ou le rechargement de la page réinitialise le fil. La même question repartie d'un panneau vierge démarre une nouvelle conversation.
- **Pas de portée multi-instance.** Les outils en lecture seule ciblent la base associée à l'utilisateur authentifié — même périmètre que le reste de l'application.

L'administrateur peut désactiver entièrement les outils de données (l'assistant s'appuie alors uniquement sur la consultation documentaire), restreindre les domaines documentaires, surcharger les modèles par défaut ou modifier le prompt système — l'ensemble depuis le template *global*.

---

## Conseils & bonnes pratiques

- **Formuler la question, pas l'outil.** *« Lister les factures en attente pour la société 00070 en EUR »* suffit — il n'est pas nécessaire d'instruire explicitement l'appel à `list_invoices`.
- **Préciser les identifiants.** Pour les questions de validation, fournir le triplet complet (`DOC + DCT + KCO`) ; à défaut, l'assistant doit deviner ou appeler `list_invoices` au préalable.
- **Lire les pastilles d'outil.** Elles constituent la trace d'audit de la conversation.
- **Considérer le panneau comme une API externe.** Tout ce qui y est saisi est transmis au fournisseur de modèle — pas de clés API, pas de numéros de carte complets, pas de données personnelles au-delà de ce que la documentation publique contient déjà.
- **Pour les audits approfondis, revenir aux pages dédiées.** L'assistant est optimisé pour les recherches rapides et les explications. Pour les flux récurrents, les pages [Tableau de bord](./dashboard.md), [E-Invoicing](./invoices.md), [E-Reporting](./ereporting.md) et [Erreurs d'intégration](./integration-errors.md) restent la source de vérité.
