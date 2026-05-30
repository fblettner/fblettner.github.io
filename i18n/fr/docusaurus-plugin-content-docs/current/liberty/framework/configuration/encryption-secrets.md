---
title: Chiffrement et secrets
description: "Les mots de passe de connecteurs, les jetons d'API et les secrets OIDC sont enregistrés chiffrés en AES-256-GCM. Chaque champ secret de l'interface Paramètres dispose d'un interrupteur de cadenas pour basculer entre clair et chiffré ; la clé maîtresse reste dans l'environnement, jamais sur disque. La rotation se fait en ligne via les clés héritées."
keywords: [Liberty Framework, chiffrement, secrets, AES-256-GCM, master key, settings, password, api_token, OIDC client secret, key rotation]
---

# Chiffrement et secrets

:::info[Référence détaillée]
Cette page documente le système de chiffrement dans son ensemble — séparation environnement / disque, sources de la clé maîtresse, procédure de rotation, conventions sur ce qu'il faut chiffrer. Pour le parcours orienté tâche dans l'interface — basculer l'interrupteur 🔒 sur un mot de passe de pool, un client secret OIDC, un jeton de connecteur API — voir [Construire → Sécurité → Secrets chiffrés](../build/secure/encrypted-secrets.md).
:::

Plusieurs paramètres portent des valeurs sensibles — mots de passe de pool, jetons d'authentification de connecteurs API, secret client OIDC. Le framework propose une primitive simple pour les protéger : tout champ secret de l'interface Paramètres dispose d'un **interrupteur de cadenas** qui bascule la saisie entre **texte clair** et **chiffré au repos**. Les valeurs chiffrées sont enregistrées sous forme de blocs opaques que seul le processus en cours d'exécution peut déchiffrer ; la **clé maîtresse** qui réalise le déchiffrement reste dans l'environnement de l'hôte, jamais sur disque.

Cette page couvre l'interrupteur dans l'interface, la clé maîtresse, la procédure de rotation des clés et la convention sur ce qui doit être chiffré et ce qui doit rester dans l'environnement.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#fb923c', marginBottom: '8px'}}>ENVIRONNEMENT</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>Clé maîtresse (AES-256 32 octets).<br/>Clé de signature JWT. Clé de licence. Clé d'API IA.<br/><em>Jamais sur disque.</em></div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>SUR DISQUE</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>Champs secrets enregistrés comme blocs opaques de chiffré.<br/>Versionnable dans git sans risque.</div>
  </div>
  <div style={{border: '1px solid rgba(50,215,75,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(50,215,75,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4ade80', marginBottom: '8px'}}>À L'EXÉCUTION</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>Déchiffrement paresseux à la première utilisation.<br/>Mise en cache pour la durée de vie du processus.</div>
  </div>
</div>

La clé maîtresse n'arrive jamais sur disque ; le bloc chiffré n'arrive jamais dans l'environnement. Les deux ne se rencontrent qu'au moment du déchiffrement, à l'intérieur du processus en cours.

---

## L'interrupteur de cadenas dans l'interface Paramètres

Tout champ marqué comme secret — *Mot de passe* d'un pool, *Jeton d'authentification* d'un connecteur, *Client secret* OIDC, *URL webhook* Slack, etc. — affiche une icône de cadenas à côté de la saisie. Cliquer dessus bascule le champ entre mode **clair** et **chiffré au repos**.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '0 0 10px', fontWeight: 700}}>Éditeur de pool — crm</div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '10px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>URL</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>postgresql+asyncpg://crm@db/crm</span></div>
    <div style={{opacity: 0.75}}>Utilisateur</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>crm_app</span></div>
    <div style={{opacity: 0.75}}>Mot de passe</div>
    <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(74,158,255,0.40)', background: 'rgba(74,158,255,0.06)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>cadenas chiffré ···············</span><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.7, marginLeft: '8px'}}>Révéler</span></div>
  </div>
</div>

| Mode | Effet à l'enregistrement |
|---|---|
| **Clair** | La valeur littérale est enregistrée. À n'utiliser que pour des valeurs par défaut non secrètes (par exemple un mot de passe vide sur un pool SQLite local). |
| **Chiffré au repos** | Le framework chiffre la valeur avec la clé maîtresse courante avant l'enregistrement. Le champ affiche *chiffré* + une rangée de points masqués. Modifier le champ écrase la valeur précédente (aucune révélation automatique). |

Un champ déjà en mode chiffré affiche un bouton **Révéler** (visible uniquement par les opérateurs qui ont `settings:reveal-secrets`). Cliquer dessus demande l'empreinte de la clé maîtresse en confirmation, puis affiche le texte clair déchiffré pendant 10 secondes. L'action *Révéler* est journalisée à l'audit.

Quelques champs — le *Client secret* OIDC, l'*URL webhook* Slack — ont l'interrupteur de cadenas **verrouillé sur On**. Le mode clair n'est pas proposé car la valeur est manifestement sensible.

---

## La clé maîtresse

La clé maîtresse est une **clé AES-256-GCM de 32 octets** que le framework charge depuis l'environnement au démarrage. La section *Framework → Chiffrement* de l'interface Paramètres configure **d'où** vient la clé, non sa valeur :

| Champ | Effet |
|---|---|
| **Clé maîtresse** | Nom de la variable d'environnement qui porte la clé. Défaut `${LIBERTY_MASTER_KEY}`. |
| **Clés héritées** | Liste de clés anciennes, utilisées **uniquement pour le déchiffrement** pendant une rotation. Les nouveaux chiffrements utilisent toujours *Clé maîtresse*. Cliquer sur *+ Ajouter clé héritée* pour ajouter une entrée — chaque entrée est un nom de variable d'environnement. |

Générer une clé fraîche avec la CLI [`liberty-crypto`](../cli-reference.md#liberty-crypto) :

```bash
.venv/bin/liberty-crypto genkey
# 7c4f1c2d8e3a6b9f0c1d4e5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c
```

L'exporter sous le nom de variable d'environnement configuré ci-dessus, redémarrer le framework, et chaque nouvel enregistrement qui passe par l'interrupteur de cadenas utilise la nouvelle clé.

Une empreinte de la clé maîtresse (SHA-256 de la clé) est affichée dans la section Paramètres → Framework → Chiffrement — utile pour confirmer que deux répliques partagent la même clé sans dévoiler la clé elle-même.

---

## Rotation de la clé maîtresse \{#key-rotation\}

Quand la clé maîtresse doit changer — politique annuelle, suspicion de fuite, changement d'opérateur — la rotation se fait **en ligne** :

| Phase | Action |
|---|---|
| **1. Générer une nouvelle clé** | `liberty-crypto genkey`. L'exporter sous un nouveau nom de variable d'environnement (par exemple `LIBERTY_MASTER_KEY_NEW`). |
| **2. Ajouter l'ancienne clé en héritée** | Dans *Paramètres → Framework → Chiffrement*, mettre *Clé maîtresse* sur le nouveau nom de variable d'environnement et ajouter l'ancien nom dans *Clés héritées*. **Enregistrer** — le framework déchiffre désormais avec l'une ou l'autre clé (essaie d'abord la maîtresse, puis chaque héritée dans l'ordre). |
| **3. Redémarrer** | Obligatoire car la clé maîtresse elle-même est lue au démarrage, pas à l'enregistrement-rechargement. |
| **4. Re-chiffrer chaque secret** | Exécuter `liberty-crypto rewrap` — voir ci-dessous — pour re-chiffrer chaque bloc enregistré avec la nouvelle maîtresse. Relançable sans risque ; sûr à rejouer. |
| **5. Retirer l'entrée héritée** | Une fois que *Rewrap* signale zéro bloc encore chiffré avec l'ancienne clé, retirer l'entrée héritée du formulaire Paramètres et désactiver l'ancienne variable d'environnement. Redémarrer. |

La commande `rewrap` :

```bash
.venv/bin/liberty-crypto rewrap
# 4 encrypted fields re-wrapped with the current master key
# 0 still using legacy keys
```

La commande parcourt chaque emplacement de stockage, déchiffre chaque bloc avec la clé qui fonctionne, et le re-chiffre avec la maîtresse courante. Relançable sans risque — un nouveau lancement produit un chiffré différent (nouveau nonce aléatoire) mais le texte clair reste inchangé.

---

## Ce qui se chiffre et ce qui reste dans l'environnement

La séparation est délibérée et mérite d'être suivie :

| Secret | Emplacement | Pourquoi |
|---|---|---|
| **Mot de passe de pool** | Chiffré au repos dans la définition du pool. | Réside à côté du pool — un seul changement de stockage met à jour les deux. |
| **Jeton d'auth de connecteur API** | Chiffré au repos sur le connecteur. | Même raison. |
| **Client secret OIDC** | Chiffré au repos sur le sous-formulaire OIDC. | Toujours chiffré (interrupteur verrouillé). |
| **Webhook Slack** | Chiffré au repos sur le sous-formulaire Notifications. | Idem. |
| **Clé d'API par application pour un connecteur HTTP** | Chiffré au repos sur le connecteur. | Idem qu'OIDC. |
| **Clé maîtresse** | Environnement uniquement. | Tout le mécanisme dépend du fait qu'elle ne touche jamais le disque. |
| **Clé de signature JWT** | Environnement uniquement. | Renouvelée indépendamment de la clé maîtresse. |
| **Clé de licence** | Environnement uniquement. | JWT signé en RS256, vérifiable avec une clé publique ; non sensible à divulguer, mais gardée dans l'environnement pour être remplaçable sans enregistrement. |
| **Clé d'API du fournisseur IA** | Environnement uniquement. | Convention dans l'écosystème Anthropic. |

Une règle simple : **tout ce qui a une portée liée à un seul connecteur / paramètre** passe par l'interrupteur de cadenas ; tout ce qui est global au framework va dans l'environnement.

---

## Permissions

| Code | Effet |
|---|---|
| `settings:framework` | Voir la section *Framework → Chiffrement*. |
| `settings:reveal-secrets` | Voir le bouton *Révéler* à côté des champs chiffrés. Journalisé à l'audit. |

L'affichage de l'*empreinte de la clé maîtresse* est visible par toute personne qui dispose de `settings:read` — elle n'est pas sensible par elle-même.

---

## Modes d'échec

| Symptôme | Cause | Récupération |
|---|---|---|
| `connector loaded, but password rejected by database` | Le bloc chiffré a été emballé avec une clé qui n'est plus dans *Clés héritées*. | Réintégrer l'ancienne clé en héritée, redémarrer, exécuter `liberty-crypto rewrap`, puis retirer l'ancienne clé. |
| `crypto: master key not set` au démarrage | La variable d'environnement configurée dans *Clé maîtresse* n'est pas définie et au moins un bloc chiffré existe. | Exporter la clé sous le bon nom ; ou basculer temporairement le champ en clair pour sauver l'installation. |
| `crypto: authentication tag mismatch` | Un bloc a été édité à la main, ou la mauvaise clé est chargée. | Re-chiffrer la valeur depuis la source en clair ; ne jamais éditer un chiffré à la main. |
| Bouton *Révéler* grisé | L'appelant n'a pas `settings:reveal-secrets`. | Accorder la permission (ou la refuser — les auditeurs ne devraient souvent pas révéler). |

---

## Conseils et bonnes pratiques

- **Générer la clé maîtresse avec `liberty-crypto genkey`.** Les clés artisanales sont un piège — 32 octets aléatoires depuis le PRNG du framework, c'est le chemin le plus simple et correct.
- **Utiliser le même nom de variable d'environnement sur les répliques.** Paramètres → Framework → Chiffrement enregistre le nom, pas la valeur — le même formulaire fonctionne sur chaque réplique tant que la variable d'environnement résout vers la même clé.
- **Exécuter `liberty-crypto rewrap` après chaque rotation.** Sinon les anciens blocs restent sur les clés héritées et la rotation n'est pas vraiment terminée.
- **Ne pas désactiver l'interrupteur de cadenas sur une valeur déjà chiffrée.** Repasser en clair dévoile la valeur sur disque ; l'opérateur doit confirmer et l'action est journalisée à l'audit.
- **Garder les clés héritées seulement aussi longtemps que nécessaire.** Passé un cycle de rotation, chaque bloc encore pertinent a été ré-emballé — l'entrée héritée peut être retirée.

---

## Sous le capot

Les valeurs chiffrées sont enregistrées comme blocs opaques préfixés `ENC:` à l'intérieur des fichiers TOML par section. Les opérateurs **ne modifient pas ces blocs à la main** ; l'interrupteur de cadenas est le seul chemin sûr. L'empreinte de la clé maîtresse est également enregistrée sur disque pour que le framework détecte une clé incompatible sur le mauvais hôte sans dévoiler la clé elle-même.

La CLI `liberty-crypto` est le seul chemin scripté pour les opérations avancées (rewrap, inspection d'empreinte, chiffrement manuel pour une mise en place pilotée par script).

---

## Pour aller plus loin

- [Variables d'environnement](./environment-variables.md) — y compris la variable d'environnement de la clé maîtresse.
- [Paramètres du framework](./app-toml.md) — la sous-section *Chiffrement*.
- [Référence CLI → liberty-crypto](../cli-reference.md#liberty-crypto) — chaque sous-commande.
- [Authentification](../build/secure/sign-in.md) — l'emplacement du client secret OIDC.
