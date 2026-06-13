---
title: Récupération des statuts
description: "Récupérer les événements de cycle de vie depuis la Plateforme Agréée — codes XP Z12-012 200, 201, 206, 207, 210, 213… — et les appliquer à la table de cycle de vie locale et à l'en-tête de facture. Récupération incrémentale par horodatage repère."
keywords: [NomaUBL, sync, récupération des statuts, cycle de vie, XP Z12-012, événements de statut, 200, 201, 206, 207, 210, 213, F564231, F564235, horodatage repère, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Récupération des statuts

L'écran **Retrieve Statuses** récupère les **événements de cycle de vie** émis par la Plateforme Agréée — les codes définis par la réforme française de la facturation électronique (XP Z12-012) : `200` Déposée, `201` Mise à disposition, `206` Approuvée partiellement, `207` En litige, `210` Refusée, `213` Rejetée, et le reste du cycle. Chaque événement est ajouté à la table de cycle de vie locale et le statut courant de la facture est mis à jour.

Cet écran est **distinct de *Sync → Import*** :

- *Sync → Import* gère la **confirmation d'import asynchrone** consécutive à un dépôt réussi (`9906` → `10` / `9907`).
- *Retrieve Statuses* gère les **codes de cycle de vie** émis par la PA *après* l'import (`200`, `201`, `206`, `207`, `210`, `213`, …).

Les deux peuvent s'exécuter sur le même ordonnanceur avec des intervalles différents — voir *Conseils* ci-dessous.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — car la production des événements de cycle de vie est du ressort de la PA, indépendamment du système amont.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rsui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rsui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rsui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="360" rx="14" fill="url(#rsui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Retrieve Statuses</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Exécution</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Récupère les événements postérieurs au repère ; le repère avance après chaque exécution réussie.</text>

  <text x="240" y="132" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPÈRE</text>
  <rect x="340" y="122" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="450" y="137" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">2026-05-07T14:32:18Z</text>
  <text x="568" y="137" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">lastRetrievalDate — avance à chaque exécution réussie</text>

  <rect x="240" y="158" width="220" height="30" rx="6" fill="url(#rsui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="350" y="177" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">📥 Récupérer les statuts</text>
  <rect x="480" y="158" width="300" height="30" rx="6" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="495" y="177" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">✓ 24 événements · 18 appliqués · 6 doublons ignorés</text>

  <line x1="240" y1="208" x2="780" y2="208" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Résultats</text>

  <rect x="240" y="246" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="261" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEVERITY · MODULE · FACTURE · MESSAGE</text>

  <rect x="240" y="272" width="540" height="24" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="278" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="288" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="288" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PA · INV-2026-0142 · 201 Mise à disposition → cycle + en-tête mis à jour</text>

  <rect x="240" y="300" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="306" width="56" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="276" y="316" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">SUCCESS</text>
  <text x="312" y="316" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PA · INV-2026-0124 · 207 En litige (motif : écart de montant)</text>

  <rect x="240" y="328" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="334" width="56" height="14" rx="3" fill="rgba(148,163,184,0.18)" stroke="rgba(148,163,184,0.40)" strokeWidth="1"/>
  <text x="276" y="344" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">INFO</text>
  <text x="312" y="344" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Repère avancé à 2026-05-07T18:04:55Z</text>

  <rect x="20" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Repère temporel</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en lecture — n'avance que</text>
  <line x1="220" y1="135" x2="340" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>

  <rect x="820" y="158" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="173" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Résumé de l'exécution</text>
  <text x="830" y="186" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appliqués / ignorés</text>
  <line x1="820" y1="174" x2="780" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>

  <rect x="820" y="288" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="303" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Journal par événement</text>
  <text x="830" y="316" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cycle de vie + en-tête</text>
  <line x1="820" y1="304" x2="780" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>
</svg>

---

## Vue d'ensemble du pipeline

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="rs-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="rs-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="rs-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="40" y="20" width="240" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="160" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🖱 Retrieve Statuses</text>
  <text x="160" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">clic utilisateur</text>
  <rect x="40" y="110" width="240" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="160" y="134" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 Lecture du repère</text>
  <text x="160" y="152" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">last retrieval date</text>
  <line x1="160" y1="80" x2="160" y2="110" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <rect x="350" y="100" width="320" height="80" rx="10" fill="url(#rs-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="510" y="126" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 Appel endpoint PA</text>
  <text x="510" y="146" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">since = horodatage repère</text>
  <text x="510" y="164" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">codes = statuts configurés</text>
  <line x1="280" y1="140" x2="350" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <rect x="730" y="100" width="220" height="80" rx="10" fill="url(#rs-g-blue-strong)" stroke="#4a9eff" strokeWidth="2" strokeDasharray="6 3"/>
  <text x="840" y="128" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">🔁 Pour chaque événement</text>
  <text x="840" y="148" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">boucle</text>
  <line x1="670" y1="140" x2="730" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <rect x="40" y="240" width="380" height="80" rx="10" fill="url(#rs-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="230" y="266" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📜 Ajout au cycle de vie</text>
  <text x="230" y="286" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564235 — événement append-only</text>
  <text x="230" y="304" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">code · message · motif · action</text>
  <rect x="500" y="240" width="380" height="80" rx="10" fill="url(#rs-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="690" y="266" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 MAJ en-tête facture</text>
  <text x="690" y="286" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564231 — statut courant</text>
  <text x="690" y="304" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">= code de l'événement</text>
  <path d="M 840 180 L 840 220 L 230 220 L 230 240" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#rs-arrow)"/>
  <text x="510" y="213" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">par événement</text>
  <line x1="420" y1="280" x2="500" y2="280" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <path d="M 690 320 L 690 350 L 920 350 L 920 180" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#rs-arrow-slate)"/>
  <text x="930" y="270" fontSize="9" fill="#94a3b8" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">événement suivant</text>
  <rect x="350" y="380" width="220" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="460" y="404" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 Avance du repère</text>
  <text x="460" y="422" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">last retrieval date</text>
  <path d="M 950 140 L 980 140 L 980 360 L 460 360 L 460 380" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#rs-arrow-slate)"/>
  <text x="720" y="352" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">événements traités</text>
  <rect x="640" y="380" width="200" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="740" y="404" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Logs agrégés</text>
  <text x="740" y="422" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">synthèse UI</text>
  <line x1="570" y1="410" x2="640" y2="410" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
</svg>

Chaque exécution ne lit que les événements postérieurs à l'horodatage repère et l'avance après un passage réussi — l'exécution suivante reprend exactement là où la précédente s'est arrêtée.

---

## Déroulement

Chaque clic enchaîne quatre étapes :

1. **Lecture de l'horodatage repère.** La dernière date de récupération est conservée dans la configuration du template *e-invoicing*. Elle alimente le paramètre `since` de l'appel PA.
2. **Appel à l'endpoint d'événements PA.** La liste des codes de statut à interroger est configurée dans le même template (les *configured status names*). Par défaut, elle reprend l'ensemble des codes XP Z12-012 ; seuls les codes présents dans la liste sont retournés.
3. **Application de chaque événement.** Pour chaque événement renvoyé par la PA :
   - Une nouvelle ligne est ajoutée à la **table de cycle de vie** (`F564235`) — la trace complète de chaque statut traversé par la facture.
   - L'**en-tête de facture** (`F564231`) est mis à jour pour que le *statut courant* affiché dans la liste des factures corresponde au dernier événement reçu.
4. **Avance de l'horodatage repère.** La valeur `lastRetrievalDate` du template est mise à jour avec l'horodatage du dernier événement reçu. L'exécution suivante part de cet horodatage.

La table de cycle de vie est **en mode ajout seul** : chaque événement ajoute une ligne, aucune ligne n'est jamais modifiée ni supprimée. Relancer la récupération ne peut pas produire de doublon, l'horodatage repère n'avance que dans un seul sens.

---

## Statuts récupérés

Le cycle de vie couvre les codes **post-soumission** définis par XP Z12-012 — `200` à `228`, ainsi que `500` / `501`. La liste complète figure dans la [Référence des statuts](../references/status-reference.mdx) ; l'ensemble effectivement récupéré à chaque exécution est gouverné par la propriété *configured status names* du template *e-invoicing*.

Sous-ensembles courants :

- **Tous les codes** *(défaut)* — abonnement à toute la liste de référence. Adapté à tout déploiement qui demande une traçabilité complète.
- **Codes obligatoires uniquement** — récupération limitée aux codes obligatoires PPF (`200`, `201`, `213`, …). Réduit le volume sur les installations à très fort débit où les statuts intermédiaires ne sont pas exploités en aval.

Les codes `9906` / `9907` ne **font pas** partie de cette récupération — ce sont des statuts locaux NomaUBL liés à la confirmation d'import asynchrone, traités par *Sync → Import*.

---

## Exécution

Une seule section, un seul bouton.

| Élément | Description |
|---|---|
| **Retrieve Statuses** | Déclenche la récupération. Désactivé pendant l'exécution. |
| **Ligne de statut** | Message en ligne sous le bouton — vert en cas de succès, rouge en cas d'échec. |

La page n'a aucun paramètre : tous les événements postérieurs à l'horodatage repère, pour chaque code de la liste configurée, sont récupérés en un seul appel. Aucune sélection par facture.

---

## Résultats

La section **Results** affiche la table de logs structurée — une ligne par événement appliqué, plus les événements de niveau pipeline. Les colonnes correspondent aux autres tables de logs NomaUBL (`Severity / Module / Submodule / Message`).

Contenu typique d'une exécution réussie :

- Une ligne `INFO` indiquant le nombre d'événements renvoyés par la PA.
- Une ligne `INFO` ou `SUCCESS` par événement appliqué — clé de facture + nouveau code de statut.
- Une ligne `INFO` finale signalant le nouvel horodatage repère.

Quand un appel à la PA échoue pour des raisons de transport (réseau, expiration, identifiants), une ligne `ERROR` est journalisée et l'horodatage repère reste inchangé — la prochaine exécution repart du même `since`.

---

## Conseils & bonnes pratiques

- **Planifier la récupération.** L'*ordonnanceur en arrière-plan* de NomaUBL peut exécuter cette page périodiquement — voir la propriété `fetchStatusInterval` du template *e-invoicing* (valeur en minutes ; `0` désactive l'ordonnanceur). Toutes les 15 minutes à 1 heure est typique.
- **Distincte de *Sync → Import*.** *Import* gère la confirmation asynchrone post-soumission (`9906` → `10` / `9907`) ; *Retrieve Statuses* gère les codes de cycle de vie émis par la PA ensuite. Les deux peuvent s'exécuter sur le même ordonnanceur avec des intervalles différents.
- **L'horodatage repère n'avance que dans un sens.** Relancer la page n'a aucun effet sur les événements déjà appliqués. Pour rejouer une fenêtre (par ex. après restauration d'une sauvegarde de base ancienne), abaisser manuellement `lastRetrievalDate` dans le template *e-invoicing* — l'exécution suivante récupérera tous les événements depuis cette date.
- **Restreindre les codes configurés en cas de volume.** La liste par défaut couvre tous les codes de la réforme ; les installations à fort débit qui n'exploitent que les codes obligatoires PPF peuvent réduire la liste pour alléger la charge côté PA et côté local.
- **Le cycle de vie est la trace d'audit.** La table de cycle de vie (`F564235`) est en mode ajout seul et représente l'historique complet ; l'en-tête de facture (`F564231`) ne contient que le statut le plus récent. Pour instruire un litige ou retrouver une mise à jour PA manquante, c'est dans la table de cycle de vie qu'il faut chercher.
