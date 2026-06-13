---
title: Accès au niveau de la ligne
description: "Recette — donner à chaque utilisateur l'accès à ses propres lignes. Le commercial ne voit que ses clients ; le tenant ne voit que ses données. Le placeholder :session_user et une clause WHERE par requête font le travail — aucun code applicatif, aucun middleware en plus."
keywords: [Liberty Framework, cookbook, row-level access, accès ligne, multi-tenant, session_user, sécurité, security]
---

# Accès au niveau de la ligne

## Le problème

Dans un CRM, les commerciaux ne doivent voir que leurs propres clients. Dans un SaaS multi-tenant, chaque client ne doit voir que ses propres données. Dans une application RH, un salarié ne doit voir que ses notes de frais (son manager voit celles de son équipe).

Vous ne voulez pas l'appliquer dans le frontend — trop facile à contourner. Vous ne voulez pas écrire un middleware d'autorisation par connecteur — trop facile à oublier. Vous voulez que ce soit la base de données qui le fasse.

## Le modèle

Chaque requête exécutée par le framework a accès à **`:session_user`** — un placeholder lié côté serveur à partir du JWT de l'appelant, jamais à partir du client. Ajouter `WHERE owner = :session_user` à une requête restreint les lignes que l'appelant peut voir, au niveau SQL, **sans aucun code de framework ou de client**.

Quelques variantes de la même idée :

| Cas d'usage | Prédicat |
|---|---|
| **Une ligne par propriétaire** | `WHERE owner = :session_user` |
| **Multi-tenant** | `WHERE tenant_id = (SELECT tenant FROM users WHERE id = :session_user)` |
| **Le manager voit son équipe** | `WHERE owner IN (SELECT id FROM users WHERE manager = :session_user OR id = :session_user)` |
| **Élévation par rôle** | `WHERE owner = :session_user OR :session_user IN ('admin', 'sales-manager')` |

Le système de permissions du framework reste en place — `sql:customers:list` continue de filtrer si l'appelant peut exécuter la requête. L'accès au niveau de la ligne restreint les **lignes renvoyées par cette requête**.

## La recette

### 1. Schéma — ajouter la colonne propriétaire

```sql
ALTER TABLE customers ADD COLUMN owner VARCHAR(64);
UPDATE customers SET owner = 'alice' WHERE …;   -- backfill existing rows
```

Le propriétaire est l'identifiant qui correspond à la claim `sub` du JWT — généralement le nom d'utilisateur, un e-mail ou un identifiant interne — choisissez-en un et restez cohérent.

### 2. Filtrer la requête de lecture

```sql
SELECT id, name, status, industry
FROM   customers
WHERE  owner = :session_user
ORDER  BY name;
```

Testez la requête en tant qu'utilisateur `admin` — résultat vide. Testez en tant qu'`alice` après lui avoir attribué la propriété de quelques lignes — seules ses lignes apparaissent.

### 3. Filtrer aussi les écritures

Le même schéma pour `UPDATE` et `DELETE` :

```sql
-- update
UPDATE customers SET name = :name, status = :status
WHERE id = :id AND owner = :session_user;

-- delete
DELETE FROM customers WHERE id = :id AND owner = :session_user;
```

Le garde `AND owner = :session_user` empêche l'appel API `DELETE /api/sql/customers/delete?id=42` d'aboutir quand la ligne 42 appartient à quelqu'un d'autre. La requête renvoie « 0 rows affected » ; le framework le traite comme un 404 et la réponse est exactement la même que « row doesn't exist ». Aucune fuite d'information.

### 4. Forcer le propriétaire à l'insertion

```sql
INSERT INTO customers (name, status, owner, created_at)
VALUES (:name, :status, :session_user, CURRENT_TIMESTAMP);
```

Remarquez `:session_user` au lieu de `:owner` — même si la charge utile du formulaire glisse un paramètre `owner`, le SQL l'ignore et utilise la valeur côté serveur. L'utilisateur ne peut créer que des lignes dont il est lui-même propriétaire.

### 5. Élévation par rôle

Quand le manager doit tout voir, levez le prédicat selon la liste des rôles du JWT :

```sql
SELECT id, name, status, industry, owner
FROM   customers
WHERE  owner = :session_user
   OR  'manager' = ANY(string_to_array(:session_roles, ','))
ORDER  BY name;
```

Le framework lie `:session_roles` (liste séparée par virgules des rôles de l'appelant) à chaque appel. L'expression « soit c'est la mienne, soit je suis manager » gère les deux cas dans une seule requête.

Pour Oracle / SQL Server, remplacez l'astuce avec le tableau par `INSTR(:session_roles, 'manager') > 0`.

## Modèle multi-tenant

Pour les applications SaaS / multi-tenant, le prédicat passe d'un propriétaire par ligne à un filtrage par tenant. Une configuration typique :

```sql
-- The tenant lookup needs to happen inside the query (we can't trust a 'tenant' parameter from the client)
WITH user_tenant AS (
  SELECT tenant_id FROM ly2_users WHERE username = :session_user
)
SELECT *
FROM   invoices
WHERE  tenant_id = (SELECT tenant_id FROM user_tenant);
```

Ou avec une claim JWT personnalisée — la couche OIDC du framework rend chaque claim disponible sous `:session_<claim_name>` :

```sql
WHERE tenant_id = :session_tenant_id
```

La claim `tenant_id` est définie par l'IdP / la couche SSO ; le framework la lie comme n'importe quelle autre valeur de session.

## Notes de performance

| Préoccupation | Atténuation |
|---|---|
| **Indexer la colonne `owner`** | Critique. Chaque requête de lecture filtre dessus ; un index fait passer d'une analyse complète à une recherche sur une seule ligne. |
| **Anti-pattern N+1** | Ne bouclez pas ligne par ligne dans l'application ; laissez une seule requête avec `WHERE owner = :session_user` renvoyer le bon ensemble. Le framework le fait naturellement. |
| **Vues matérialisées par tenant** | Pour des tenants volumineux, une vue par tenant (`vw_invoices_tenant_42`) peut être plus performante qu'un prédicat `WHERE` générique. Changez la cible de la requête du connecteur en conséquence. |

## Ce que cela vous donne

| Propriété | Pourquoi |
|---|---|
| **Le frontend ne peut pas contourner le filtre** | Le frontend ne voit jamais les lignes des autres utilisateurs ; le filtrage par ligne est en SQL. |
| **Les appels REST directs ne peuvent pas le contourner** | Le framework lie `:session_user` à partir du JWT vérifié, et non à partir du corps de la requête. |
| **L'assistant IA hérite du filtre** | Le même placeholder `:session_user` s'applique aux requêtes déclenchées par l'IA. Un admin demande « how many customers do I have? » → toutes les lignes. Un commercial pose la même question → seulement ses lignes. |
| **L'export Excel hérite du filtre** | Le point d'accès d'export exécute la même requête ; les lignes qu'il livre sont l'ensemble filtré. |
| **La piste d'audit est préservée** | `created_by = :session_user` enregistre qui a créé chaque ligne ; personne ne peut usurper l'identité. |

## Variantes

| Vous voulez… | Faites ceci |
|---|---|
| **Lignes publiques et privées dans la même table** | `WHERE owner = :session_user OR is_public = true`. |
| **Accès en lecture seule aux lignes d'autres propriétaires** | La requête de lecture n'a pas de `WHERE` ; les requêtes d'écriture, oui. Un commercial voit les clients de tout le monde mais ne peut modifier que les siens. |
| **Accès limité dans le temps** | `WHERE owner = :session_user OR (shared_until > CURRENT_TIMESTAMP AND shared_with = :session_user)` — la ligne redevient privée quand le partage expire. |
| **Visibilité de ligne par rôle** | Combinez `:session_user` avec `:session_roles` comme dans l'exemple du manager. Ou définissez des requêtes distinctes (`list-mine` / `list-team` / `list-all`) et filtrez chacune par son propre code de permission. |

## Pour aller plus loin

- [Authentification](../build/secure/sign-in.md) pour la liaison de `:session_user`.
- [Rôles et permissions](../build/secure/roles-and-permissions.md) pour la valeur `:session_roles` et les codes de permission par requête.
- [Cookbook → Piste d'audit](./audit-trail.md) pour le modèle complémentaire `created_by`.
