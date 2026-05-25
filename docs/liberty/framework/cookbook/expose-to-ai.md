---
title: Expose data to the AI assistant
description: "Recipe — decide which connectors the AI assistant can read, restrict writes, write a good tool description so the model picks the right query. The difference between a useful assistant and one that hallucinates."
keywords: [Liberty Framework, cookbook, AI, assistant, expose to AI, tool description, scoping]
---

# Expose data to the AI assistant

## The problem

The framework's AI assistant runs the same connector queries the UI does — but it can only pick the right tool if you tell it what each tool does. A connector exposed to the assistant with a vague description ("get data") will be picked at random; a connector with a clear two-sentence description will be picked correctly.

This recipe covers the **scoping** — which connectors the assistant sees, which write paths it can take, how to write descriptions the model uses.

## The pattern

Three layers of scoping, each independent:

| Layer | Where | Effect |
|---|---|---|
| **Per connector — Expose to AI** | Settings → Connectors → \<connector\> → Connection sub-form. | Off → none of the connector's queries appear in the tool list. |
| **Per query — Operation type** | Settings → Connectors → \<connector\> → \<query\> → Operation. | `Read` queries are exposed by default (when the connector toggle is on); `Write` queries require an extra opt-in. |
| **Per role — `ai:chat` + `ai:tool:<name>`** | Settings → Roles. | Even an exposed query is hidden from a caller without `ai:chat`. The fine-grained `ai:tool:<name>` permission lets you whitelist tools per role. |

Layered together, the assistant sees exactly what each user is supposed to see — no more, no less.

## The recipe

### 1. Set the connector's Expose to AI toggle

Open the connector. The *Connection* sub-form has an **Expose to AI assistant** toggle near the bottom. Defaults to *on* when you create a new connector.

Turn it **off** for connectors that hold:

- Sensitive data the assistant shouldn't surface (PII, financials past a threshold, anything the legal team has flagged).
- Internal framework / debugging connectors (`liberty-self`, technical-dashboard).
- Operational connectors that only make sense in a UI flow (the BIP resubmit from the JDE tutorial).

### 2. Write good query descriptions

Every read query has a **Description** field. The text is passed to the model as the tool's description. The model picks tools based on this string.

| Good | Bad |
|---|---|
| `Returns every invoice in a period with customer, amount, status. Use to answer questions about invoicing volume, recent invoices, status distribution.` | `Get invoices` |
| `Counts deals per stage of the sales pipeline. Use for pipeline-distribution questions.` | `Aggregate deals` |
| `Lists customer activities (calls, meetings, emails) ordered most-recent-first. Filter by customer or by date.` | `Activities` |

Two patterns work:

1. **What it returns** — one sentence describing the rows.
2. **When to use it** — one sentence pointing the model at the question shape it answers.

Both in the user's language (the assistant matches the language of the question).

### 3. Opt write queries in explicitly

Write queries are **excluded by default** even when the connector is exposed — the framework doesn't want the assistant doing unintended writes.

To opt a write query in:

| Setting | Effect |
|---|---|
| On the query → **Expose to AI assistant** toggle | When *on*, the query appears in the tool list with the `:write` suffix. |
| On roles that should be allowed to trigger AI writes | Add `ai:write` permission. |

Reserve this for **idempotent, low-risk** writes (a re-fetch of an external API, a flag toggle, a sync trigger). Never for `DELETE`s.

### 4. Per-role gating with `ai:tool:<name>`

For finer control, the `ai:tool:&lt;connector&gt;__&lt;query&gt;` permission gates each tool individually. By default, granting `ai:chat` exposes every read tool the user can run; adding `ai:tool:billing__*` restricts to billing.

Typical role recipes:

| Role | Permissions |
|---|---|
| `crm-viewer` | `ai:chat` + (implicit: every read tool they can run). |
| `crm-power-user` | `ai:chat` + `ai:tool:deals__*` + `ai:write`. The "write tools" only appear because of the explicit `ai:write`. |
| `data-analyst` | `ai:chat` only, but a much wider read-permission set on the underlying queries — the assistant inherits. |

### 5. Verify what each role sees

The endpoint `GET /ai/tools` returns the tool list as the calling user would see it. Use it to confirm scoping:

```bash
curl -H "Authorization: Bearer $(get_token alice)" \
     http://127.0.0.1:8000/ai/tools | jq '.[].name'
```

The list should match the user's read permissions. If a tool you expected is missing, check the connector's *Expose to AI* toggle + the user's permission on the underlying query.

## Common mistakes

| Mistake | Symptom |
|---|---|
| **Connector exposed but description empty** | Model picks random tools, hallucinates parameter names. |
| **Write query exposed without `ai:write` on any role** | The query appears in `GET /ai/tools` but the assistant refuses to call it ("you don't have permission to write"). |
| **Multiple queries with similar descriptions** | Model picks the first lexicographically and ignores the rest. Differentiate the descriptions. |
| **Description in one language, query in another** | The model gets confused. Match the connector's description language to the user's `session.lang`. |

## Variations

| You want… | Do this |
|---|---|
| **Limit AI to one app** | Don't `ai:chat` users from other apps. Or grant `ai:tool:crm__*` only. |
| **A daily cap on AI calls per user** | Set `[ai] max_messages_per_day` on the framework settings; the framework refuses past the cap. |
| **The model never to see real PII** | Mark the column `Rule = PASSWORD` on the dictionary entry — the AI gets `••••` in the tool result, not the underlying value. |
| **A specific connector exposed only to admin** | Set the underlying query's permission to `sql:financial:*` and only grant it to `admin`; `Expose to AI` can stay on — the framework filters. |

## What's next

- [AI Assistant](../ai-assistant.md) for the full chat surface.
- [Roles & permissions](../auth/roles-permissions.md) for the `ai:*` permission family.
- [CRM tutorial → Step 6](../tutorial-crm/06-ai-and-jobs.md) for a worked end-to-end setup.
