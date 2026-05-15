---
title: Conflits — Avérés
description: "Conflits SoD confirmés par les traces du journal d'activité — l'utilisateur détient les droits ET les a effectivement exercés des deux côtés."
keywords: [Nomasx-1, applications, conflits, séparation des tâches, SoD, avérés, journal d'activité, preuve]
---

# Conflits — Avérés

L'écran **Conflits — Avérés** ne conserve que les lignes SoD pour lesquelles le journal d'activité prouve que l'utilisateur a **effectivement exercé** les deux activités incompatibles. La vue intersecte le jeu de *Détails* avec `SECURITY_ACTIVITY_LOG` via la table de cross-référence qui rattache chaque objet SoD aux tables source qu'il touche.

Une ligne ici n'est plus un conflit théorique — c'est un fait, avec des traces base de données des deux côtés.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodp-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#sodp-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflits · Avérés</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESSUS</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISQUE</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 1</text>
  <text x="520" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJ 1</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE 1</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 2</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJ 2</text>
  <text x="870" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE 2</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>
  <text x="340" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">JDOE</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="520" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND_ADMIN</text>
  <text x="700" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="790" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="870" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AP_APPROVER</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-02</text>
  <text x="340" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">JDOE</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO-MOD</text>
  <text x="520" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_OWNER</text>
  <text x="700" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RCT-APV</text>
  <text x="790" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4312</text>
  <text x="870" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_RECEIVER</text>

  <rect x="60" y="196" width="880" height="32" rx="8" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.30)" strokeWidth="1"/>
  <text x="72" y="218" fill="#f87171" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PREUVE</text>
  <text x="72" y="232" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">12 lignes sur 247 sont confirmées par le journal d'activité des deux côtés</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Trié par Processus · Risque · Util. · Activité 1 · Activité 2 — même structure que Détails</text>
</svg>

---

## Objectif de l'écran

La liste des conflits avérés répond à une question : **quels conflits ne sont pas que théoriques ?**

- **Priorité d'audit.** Les conflits avérés passent en tête de chaque plan de remédiation — comportement documenté, pas capacité hypothétique.
- **Nettoyage piloté par la preuve.** Chaque ligne dispose d'une preuve au niveau base, des deux côtés, via la table de cross-référence — utile quand un utilisateur conteste le constat.
- **Liste plus courte, échange plus pointu.** Quelques dizaines de lignes avérées sont plus simples à discuter avec le métier que les quelques centaines de lignes théoriques de *Détails*.

---

## Colonnes

Structure identique à *Conflits — Détails* (le jeu de données est un sous-ensemble strict). Se référer à cette page pour la documentation colonne par colonne. La seule différence est le filtre — les lignes avérées sont restreintes aux utilisateurs disposant de traces dans le journal d'activité **des deux côtés** du conflit, jointes via `SECURITY_XREF` et `SECURITY_ACTIVITY_LOG`.

---

## Conseils & bonnes pratiques

- **Démarrer chaque revue SoD trimestrielle ici.** Les lignes avérées sont celles à remédier absolument avant publication.
- **Recouper avec les *Transactions*** pour retrouver l'horodatage et le compte de transactions derrière chaque entrée.
- **Un utilisateur présent à la fois sur *Détails* et *Avérés* pour le même risque est le cas le plus urgent** — il a le droit et il l'a exercé. Documenter le contrôle compensatoire ou révoquer.
- **Un utilisateur sur *Détails* mais pas sur *Avérés*** est un *risque latent* — capacité sans usage. Mérite tout de même un nettoyage, en priorité inférieure.
