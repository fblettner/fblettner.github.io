---
title: Expose data to the AI assistant
description: "Recipe — choose what the AI assistant reaches and help it pick the right query: the ai:chat permission, the allowed connectors, read queries only, the user's data scope, and query labels and descriptions written for the model."
keywords: [Liberty Next, cookbook, AI, assistant, ai:chat, allowed connectors, query description, data scope, sql_query]
---

# Expose data to the AI assistant

## The problem

The [AI assistant](../ai-assistant.md) answers questions by running the connectors' named queries. It must reach the right data — and only that — and pick the right query for each question.

## The pattern

| Layer | Setting | Effect |
|---|---|---|
| **Who** | The `ai:chat` permission, through a role. | Without it, the user has no assistant. |
| **Which connectors** | **Allowed connectors**, Liberty Next → Administer → App → AI Assistant. | Empty: every connector; otherwise only those listed. |
| **Which queries** | Read queries only. | Write queries are always refused; the assistant never writes SQL of its own. |
| **Which rows** | The user's rights and [data scope](../build/secure/roles-and-permissions.md#data-scope). | A query run by the assistant is checked like a screen's: the user sees the same rows. |
| **Which query to pick** | The queries' **label** and **description**. | The assistant reads them to choose. |

## The recipe

### 1. Grant the assistant

In **Liberty Next → Administer → Access → Roles**, give the users' role the *AI assistant* rule (`ai:chat`), in **Beyond the menus**. See [Roles & permissions](../build/secure/roles-and-permissions.md).

### 2. Limit the connectors

In **Liberty Next → Administer → App → AI Assistant**, fill **Allowed connectors** with the connectors whose data the assistant may read — for example the CRM's, without the HR one. Keep **API tool** off unless the endpoints only read.

### 3. Describe the queries

In **Liberty Next → Build → Connectors**, give each query the assistant should use a **label** and a **description** (Advanced tab). The assistant lists the connectors with their queries and descriptions, then picks one:

| Good | Weak |
|---|---|
| `Invoices of a period with customer, amount and status. For questions about invoicing volume, recent invoices, status breakdown.` | `Get invoices` |
| `Number of deals per pipeline stage. For pipeline breakdown questions.` | `Aggregate deals` |
| `Customer activities (calls, meetings, e-mails), most recent first. Parameter CUSTOMER_ID.` | `Activities` |

Two sentences are enough: **what the rows are**, and **which questions it answers**. Mention the parameters and their format.

### 4. Add dedicated queries

For the questions asked often — totals per company, per month — write a read query that computes them, rather than letting the assistant go through thousands of rows. Name its parameters clearly (`PERIOD_FROM`, `COMPANY`) and declare their labels.

### 5. Check

Sign in as a user of the role and ask a question the role should answer, then one it should not: the assistant shows the tools it used and the queries it ran.

## Common mistakes

| Mistake | Symptom |
|---|---|
| Queries without description | The assistant hesitates between similar queries, or picks the wrong one. |
| Several queries with the same description | Same. Make each description specific. |
| A sensitive connector left in an empty **Allowed connectors** list | The assistant may read it for any user who has rights on its queries. List the connectors explicitly. |
| Expecting the assistant to update data | Write queries are refused; changes go through screens and actions. |

## What's next

- [AI assistant](../ai-assistant.md) — the drawer, the tools, the settings.
- [Roles & permissions](../build/secure/roles-and-permissions.md) — `ai:chat` and the data scope.
- [App settings → AI Assistant](../build/settings-app.md#ai) — every setting.
