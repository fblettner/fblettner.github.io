---
title: Clé de licence
description: "Le framework fonctionne sans licence sur son ensemble de fonctionnalités ouvertes. Les connecteurs sous licence, les applications livrées et les fonctionnalités premium sont déverrouillés par une clé signée RS256 définie dans Paramètres → Framework → Licence — consultée et vérifiée en direct depuis Paramètres → Licence."
keywords: [Liberty Framework, license key, RS256, JWT, feature gate, licensed connector, license verification, settings]
---

# Clé de licence

Le framework est **pleinement utilisable sans licence**. Chaque concept de la documentation — connecteurs, dictionnaire, écrans, menus, tableaux de bord, graphiques, jobs, authentification — fonctionne sur l'ensemble de fonctionnalités ouvertes sur une installation neuve.

Une **clé de licence** déverrouille un ensemble organisé d'intégrations supplémentaires : quelques connecteurs de qualité production (bases de données propriétaires, API personnalisées), des applications client livrées et des fonctionnalités avancées. La clé est définie dans **Paramètres → Framework → Licence** et son statut en direct est affiché sur la page dédiée **Paramètres → Licence**.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>FORMAT</div>
    <div style={{fontSize: '12px'}}>JWT signé RS256 (~600 caractères). Longue durée de vie (généralement un an).</div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>EMPLACEMENT</div>
    <div style={{fontSize: '12px'}}>Dans l'environnement (en dehors du disque). Référencée par son nom depuis le champ Licence.</div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>VÉRIFIÉE</div>
    <div style={{fontSize: '12px'}}>Une fois au démarrage. Une vérification échouée laisse le framework en <strong>mode restreint</strong> — les fonctionnalités ouvertes continuent de fonctionner.</div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>PORTÉE</div>
    <div style={{fontSize: '12px'}}>Connecteurs marqués <em>Sous licence</em>, applications client livrées, fonctionnalités IA premium.</div>
  </div>
</div>

---

## Paramètres → Licence

L'onglet dédié **Licence** est en lecture seule et présente l'état actuel.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Licence</div>
    <div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '11px', fontWeight: 700}}>● Acceptée</span></div>
  </div>
  <div style={{padding: '14px 16px', display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Client</div><div>Acme Corp</div>
    <div style={{opacity: 0.75}}>Édition</div><div>Enterprise</div>
    <div style={{opacity: 0.75}}>Instance</div><div style={{fontFamily: 'ui-monospace, monospace'}}>prod-eu-west</div>
    <div style={{opacity: 0.75}}>Expire</div><div>2026-05-19 <span style={{marginLeft: '8px', padding: '2px 8px', borderRadius: '999px', background: 'rgba(255,159,10,0.10)', border: '1px solid rgba(255,159,10,0.40)', color: '#fb923c', fontSize: '10px', fontWeight: 600}}>dans 30 jours</span></div>
    <div style={{opacity: 0.75, alignSelf: 'start', paddingTop: '4px'}}>Connecteurs sous licence</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600, marginRight: '4px'}}>jdedwards</span><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600, marginRight: '4px'}}>sap</span><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>snowflake</span></div>
    <div style={{opacity: 0.75, alignSelf: 'start', paddingTop: '4px'}}>Applications sous licence</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc', fontSize: '10px', fontWeight: 600, marginRight: '4px'}}>nomajde</span><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc', fontSize: '10px', fontWeight: 600}}>nomasx-1</span></div>
    <div style={{opacity: 0.75}}>Plafond utilisateurs</div><div>72 / 250 <span style={{marginLeft: '8px', opacity: 0.6}}>(29%)</span></div>
    <div style={{opacity: 0.75}}>Fournisseur IA</div><div>Anthropic · 2 110 / 5 000 messages aujourd'hui</div>
  </div>
  <div style={{padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'flex-end', gap: '6px'}}>
    <span style={{padding: '5px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>↻ Revérifier</span>
  </div>
</div>

| Champ | Source |
|---|---|
| **Statut** | `Acceptée` / `Rejetée — <raison>` / `Non configurée`. |
| **Client** | Le claim `customer` du JWT. |
| **Édition** | Le claim `edition`. |
| **Expire** | Le claim `exp`. Une puce d'avertissement apparaît 30 jours avant l'expiration. |
| **Connecteurs sous licence** | Liste issue de `features.connectors` de la clé. Un point rouge apparaît à côté des entrées qui ne sont pas réellement définies dans l'installation. |
| **Applications sous licence** | Même forme pour `features.apps`. |
| **Plafond utilisateurs** | Compte d'utilisateurs courant + plafond, avec une échelle de couleur 90% / 95% / 100%. |
| **Droits IA** | Fournisseurs autorisés + plafond quotidien de messages + usage courant. |
| **↻ Revérifier** | Relit la clé depuis l'environnement et revérifie la signature sans redémarrage. |

L'onglet est gouverné par `license:read`.

---

## Installer une clé

La clé est enregistrée dans l'**environnement** de l'hôte (en dehors du disque). Dans **Paramètres → Framework → Licence**, le champ *Clé de licence* enregistre le **nom de la variable d'environnement** qui porte le JWT, et non le JWT lui-même :

| Champ | Effet |
|---|---|
| **Clé de licence** | Référence à la variable d'environnement. Par défaut `${LIBERTY_LICENSE_KEY}`. |
| **Chemin de clé publique** | Surcharge facultative de la clé publique livrée. Utile lors de l'exécution avec une autorité de signature privée (partenaires OEM qui re-signent des clés). |

Installer une nouvelle clé sur un hôte :

1. Exporter le JWT sous la variable d'environnement : `export LIBERTY_LICENSE_KEY="eyJhbGciOi…"`.
2. Redémarrer le framework, ou cliquer *↻ Revérifier* sur l'onglet Licence — le framework relit la variable et revalide la signature sans redémarrage complet.

Le journal de démarrage imprime une ligne de confirmation :

```text
INFO  liberty.licensing  license accepted — customer="Acme Corp" edition="enterprise" expires=2026-05-19T00:00:00Z
```

Une mauvaise clé journalise l'échec et continue ; le framework entre en **mode restreint** :

```text
WARN  liberty.licensing  license rejected — reason="signature invalid"
WARN  liberty.licensing  running in restricted mode — licensed features disabled
```

En mode restreint :

- Chaque connecteur marqué *Sous licence* est masqué — il n'apparaît pas dans le catalogue, dans la liste des outils IA ni dans un menu.
- Les applications livrées dans le `features.apps` de la clé n'enregistrent pas leur contenu.
- L'onglet *Licence* affiche la raison du rejet et une bannière apparaît à travers l'en-tête.
- Chaque autre concept (connecteurs ouverts, écrans, menus, tableaux de bord, jobs, authentification) continue de fonctionner.

Le mode restreint est le **mode par défaut** sur une installation neuve sans clé — ce n'est pas un état d'erreur, c'est le mode non sous licence.

---

## Ce que contient un connecteur sous licence

Dans **Paramètres → Connecteurs**, chaque entrée a une bascule **Sous licence**. Quand elle est active, le connecteur ne charge que si son identifiant est présent dans le `features.connectors` de la clé. En mode restreint, la page Connecteurs liste le connecteur comme *Verrouillé — requiert la licence `<id>`* avec le reste de sa définition grisé.

C'est ce qui gouverne les connecteurs fournisseur livrés (JD Edwards, SAP, Snowflake, …). Le mécanisme est ouvert — les clients peuvent marquer leurs propres connecteurs *Sous licence* et livrer des clés à leurs propres clients s'ils distribuent des applications personnalisées.

---

## Vérifier une clé hors-ligne

La CLI `liberty-license` vérifie une clé sans démarrer le framework :

```bash
.venv/bin/liberty-license verify "$LIBERTY_LICENSE_KEY"
# license accepted
# customer="Acme Corp" edition="enterprise"
# expires=2026-05-19T00:00:00Z (in 30 days)
# features.connectors: [jdedwards, sap, snowflake]
# features.apps:       [nomajde, nomasx-1]
```

Sort en code non-zéro avec le diagnostic sur les clés mauvaises / expirées / à audience incorrecte. Voir [Référence CLI → `liberty-license`](../cli-reference.md#liberty-license) pour chaque option.

---

## Rotation et renouvellement

Une clé de renouvellement s'installe ainsi :

1. Exporter le nouveau JWT sous la variable d'environnement sur chaque hôte.
2. Redémarrer le framework, ou cliquer *↻ Revérifier*.

Pour les installations à haute disponibilité :

| Phase | Action |
|---|---|
| **30 jours avant l'expiration** | Demander la clé de renouvellement au fournisseur. La puce *Expire* de la clé actuelle passe au jaune. |
| **7 jours avant l'expiration** | Installer la nouvelle clé sur chaque réplique via votre outil de gestion des secrets. |
| **À l'expiration** | L'ancienne clé est naturellement rejetée ; la nouvelle prend le relais. Aucun redémarrage requis car la mise à jour glissante du secret a déjà eu lieu. |

---

## Modes d'échec

L'onglet Paramètres → Licence affiche directement le diagnostic. Rejets courants :

| Texte de statut | Cause | Résolution |
|---|---|---|
| `signature invalid` | Mauvaise clé publique, JWT altéré. | Vérifier à nouveau la clé. En cas d'autorité de signature partenaire, définir *Chemin de clé publique* sur sa clé. |
| `expired (2026-04-30)` | Horodatage `exp` dépassé. | Installer une clé renouvelée. |
| `audience mismatch` | Le JWT a été émis pour un autre produit. | Confirmer que le fournisseur a envoyé une clé Liberty. |
| `malformed` | La variable d'environnement ne contient pas un JWT valide (espace en trop, troncature accidentelle). | Réexporter la clé avec soin — copier depuis la source à l'identique. |
| `user cap reached` | Le `features.users.max` de la clé correspond au compte d'utilisateurs actuel. | Demander un plafond plus large, ou désactiver les utilisateurs inactifs. |

---

## Permissions

L'onglet *Licence* est gouverné par `license:read` (consultation) et `license:write` (revérifier, changer le chemin de clé publique). Le sous-formulaire *Framework → Licence* est gouverné par `settings:framework`.

---

## Conseils et bonnes pratiques

- **Traiter la clé comme une configuration, pas comme un secret profond.** Elle est signée et vérifiable côté récepteur ; la coller dans un fil Slack ne compromet rien. La conserver dans le gestionnaire de secrets par hygiène tout de même.
- **Définir *Chemin de clé publique* uniquement quand c'est nécessaire.** Le défaut fonctionne pour les clés émises par Nomana-IT — la surcharge concerne uniquement les déploiements partenaires / OEM.
- **Surveiller la puce d'expiration à 30 jours.** Renouveler tard signifie une courte fenêtre où les connecteurs sous licence disparaissent de l'interface.
- **Ne jamais éditer une clé à la main.** Un seul changement de caractère invalide la signature ; demander une nouvelle clé au fournisseur à la place.
- **Garder l'ensemble de fonctionnalités ouvertes auto-suffisant.** Une installation bien conçue doit rester utile en mode restreint — utiliser les connecteurs sous licence pour la différenciation, pas pour le flux principal.

---

## Sous le capot

Le contenu de la licence est conservé en mémoire uniquement après la lecture de la variable d'environnement. Le formulaire Paramètres → Framework enregistre le **nom de la variable d'environnement** + le chemin de clé publique facultatif ; le JWT lui-même n'atterrit jamais sur disque. Les paramètres sont enregistrés dans `config/app.toml` sous la section `[license]`.

---

## Pour aller plus loin

- [Authentification](./authentication.md) — JWT pour les utilisateurs (mécanisme différent, même format JWT).
- [Rôles et permissions](./roles-permissions.md) — `license:read` et le reste de la famille `settings:*`.
- [Configuration → Variables d'environnement](../configuration/environment-variables.md) — `LIBERTY_LICENSE_KEY` dans le contrat d'environnement.
