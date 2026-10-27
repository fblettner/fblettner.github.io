---
title: Liste de contrôle de production
description: "Ce qu'il faut vérifier avant de mettre un serveur Liberty Next en production : version fixée, HTTPS, mots de passe, secrets gardés hors du serveur, ports exposés, protection de la connexion, sauvegardes, journaux, supervision — et ce que les installations Docker livrées protègent déjà."
keywords: [Liberty Next, production, sécurisation, liste de contrôle, HTTPS, secrets, _FILE, non-root, port PostgreSQL, mot de passe Traefik, limitation des connexions, sauvegardes, journaux JSON, identifiant de requête, supervision]
---

# Liste de contrôle de production

Les installations livrées sont déjà sécurisées ; cette page liste ce qu'elles assurent déjà et ce qui reste à décider avant l'arrivée des utilisateurs. `./liberty doctor` (ou `liberty-ops doctor`) en contrôle l'essentiel — le lancer en dernier.

---

## Déjà assuré par les installations Docker \{#built-in\}

| Protection | Détail |
|---|---|
| Le serveur ne s'exécute pas en root | Le conteneur corrige le propriétaire de ses volumes, puis s'exécute sous `liberty` (uid 1000). `LIBERTY_RUN_AS_ROOT=1` désactive ce comportement. |
| PostgreSQL n'est pas sur le réseau | Publié uniquement sur `127.0.0.1`. `POSTGRES_BIND=0.0.0.0` dans `.env` l'ouvre — le protéger alors par un pare-feu. |
| Des secrets aléatoires par installation | Clé maître, secret JWT, mots de passe de PostgreSQL, de pgAdmin et du tableau de bord Traefik sont générés par l'installation. |
| Un HTTPS complet | Avec `./liberty ssl …`, le HTTP est redirigé vers HTTPS et des en-têtes de sécurité sont envoyés. |
| Un contrôle de santé qui a du sens | Le contrôle interroge la base (`/ready`), pas seulement le processus. |
| Limitation des connexions | Après 10 échecs de connexion pour un utilisateur en 5 minutes (50 depuis une même adresse), la connexion répond *429* pendant un moment. Voir [Connexion](../framework/build/secure/sign-in.md#throttle). |
| Pas de SQL dans les messages d'erreur | Les utilisateurs ordinaires reçoivent la ligne d'erreur de la base et un identifiant d'erreur ; la requête elle-même ne va dans le journal que si `debug_sql` est actif sur le pool. |
| Des images connues | Chaque image est fixée à une version, et chaque version est analysée avant publication pour détecter les vulnérabilités connues. |

---

## Avant la mise en service \{#checklist\}

- [ ] **Fixer la version** : `./liberty upgrade --tag <version>` — jamais `latest` en production. Voir [Mise à jour et retour arrière](./upgrading.md).
- [ ] **Activer le HTTPS** : `./liberty ssl letsencrypt …` ou `provided …`, ou un proxy inverse existant devant. Voir [HTTPS et Traefik](./traefik.md).
- [ ] **Changer et conserver les mots de passe** : celui d'`admin` (`liberty-admin set-password admin`), ceux de pgAdmin et du tableau de bord Traefik affichés par l'installation.
- [ ] **Garder les secrets hors du serveur** : une copie de `release/.env` (ou de `secrets.env`) dans un coffre-fort de secrets. Sans la clé maître, une configuration restaurée ne peut pas déchiffrer ses mots de passe. Pour des secrets Docker ou Kubernetes, fournir `LIBERTY_MASTER_KEY_FILE=/run/secrets/…` au lieu de la valeur.
- [ ] **Licence** collée dans **Paramètres → App → License**, et sa date d'expiration notée.
- [ ] **Connexion** : OpenID Connect configuré si l'entreprise dispose d'un fournisseur d'identité ([Connexion](../framework/build/secure/sign-in.md)) ; un second superutilisateur, pour qu'un mot de passe perdu ne bloque pas l'installation.
- [ ] **Rôles** revus : qui voit quels menus, et quelles lignes ([Rôles et permissions](../framework/build/secure/roles-and-permissions.md)).
- [ ] **Sauvegardes planifiées et copiées hors du serveur** ([Exploitation](./operations.md#backup)), et **une restauration testée**.
- [ ] **Outils** : Portainer et pgAdmin sont accessibles à la même adresse que l'application. Les retirer de l'ensemble, ou les restreindre dans Traefik, si personne n'en a besoin.
- [ ] **Notifications** : le compte SMTP dans **Paramètres → App → Notifications (email)** et une règle pour les tâches en échec ([Notifications](../nomaflow/notifications.md)).
- [ ] **Supervision** : une sonde externe sur `/ready` ([Points de santé](../monitoring/health-endpoints.md)).
- [ ] **`./liberty doctor` répond *no problems found***.

---

## Journaux \{#logs\}

- Chaque réponse porte un en-tête `X-Request-ID`, et chaque ligne de journal écrite pour cette requête porte le même identifiant : le communiquer en signalant un problème.
- Docker applique une rotation au journal du conteneur PostgreSQL (3 × 100 Mo). Pour les autres conteneurs, définir une rotation dans le démon Docker (`/etc/docker/daemon.json`).

---

## Une seule instance \{#replicas\}

Les mises à jour en temps réel (cloche des notifications, verrous d'enregistrement, réponses de l'assistant) sont tenues dans le processus du serveur, et la limitation des connexions compte par processus. Exécuter **une seule** instance de `liberty-next` : plusieurs répliques montreraient aux utilisateurs des états différents.
