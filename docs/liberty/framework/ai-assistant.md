---
title: AI Assistant
description: "The framework exposes an Anthropic tool-use assistant at /chat. Every SQL query and HTTP endpoint of every connector the caller can run becomes a tool the assistant can pick. Setup with ANTHROPIC_API_KEY, the tool-generation contract, per-role tool gating and conversation history."
keywords: [Liberty Framework, AI assistant, chat, Anthropic, tool use, claude, connectors as tools, ANTHROPIC_API_KEY, conversation, /chat]
---

# AI Assistant

The framework ships a built-in **conversational assistant** at `/chat`. The assistant is an Anthropic Claude model with **tool use** enabled — every SQL query and HTTP endpoint of every connector the caller can run is exposed to the model as a tool. The user asks a question in natural language; the model picks the right tool, runs it, reads the result, and answers.

The integration is opt-in (no AI calls happen without an API key) and respects the framework's permission model — the assistant can only see and run what the calling user can see and run.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ai-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="ai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#ai-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">How a chat turn flows</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · USER PROMPT</text>
  <text x="160" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">natural-language question</text>

  <rect x="280" y="100" width="200" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · TOOL LIST</text>
  <text x="380" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">filtered by permission</text>

  <rect x="500" y="100" width="200" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · MODEL PICKS</text>
  <text x="600" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">connector + params</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · FRAMEWORK RUNS</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">same permission as direct call</text>

  <line x1="260" y1="130" x2="280" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ai-arrow)"/>
  <line x1="480" y1="130" x2="500" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ai-arrow)"/>
  <line x1="700" y1="130" x2="720" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ai-arrow)"/>

  <rect x="60" y="200" width="880" height="80" rx="10" fill="rgba(74,158,255,0.04)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="76" y="222" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · MODEL FORMULATES THE ANSWER</text>
  <text x="76" y="244" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">— reads the tool result, may call another tool to refine —</text>
  <text x="76" y="264" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">— streams the natural-language answer back to the chat pane —</text>
</svg>

---

## Setup

Two environment variables and one config block:

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

```toml
# app.toml
[ai]
provider = "anthropic"
api_key  = "${ANTHROPIC_API_KEY}"
model    = "claude-sonnet-4-6"
max_tokens = 4096
tool_concurrency = 4
```

| Field | Description |
|---|---|
| `provider` | `anthropic`. Only provider supported today. |
| `api_key` | API key. Always reference an env var — never inline. |
| `model` | Anthropic model id. Default `claude-sonnet-4-6`. Switch to `claude-opus-4-7` for higher reasoning effort, `claude-haiku-4-5` for cheaper / faster turns. |
| `max_tokens` | Cap per assistant response. Default 4096. |
| `tool_concurrency` | Max parallel tool calls per turn. Default 4. |

When `api_key` is empty or absent, the `/chat` page renders a "configure an API key to enable the assistant" notice. Every other feature of the framework keeps working.

---

## The tool generation contract

The framework builds the tool list passed to the model from the connector catalog. Each candidate becomes a tool definition with:

| Field | Source |
|---|---|
| `name` | Sanitised connector + query / endpoint identifier (`billing__invoices_for_period`, `crm__get_customer`). Lower snake_case to satisfy Anthropic's tool naming rules. |
| `description` | The connector's `description` + the query / endpoint's `description` from `connectors.toml`. The dictionary's localised labels are inlined. |
| `input_schema` | A JSON Schema derived from the query's `params` declaration — name, type, description (from `label`), required flag, enum (from `lookup`). |

Every tool call is **scoped to the calling user** — the framework verifies the user's permission on the underlying connector before executing, just like a direct REST call. A user without `sql:billing:invoices-for-period` never sees the corresponding tool in their chat session.

### What gets exposed

By default, every read-only query the user can run becomes a tool. Write queries are **excluded** unless the connector entry sets `expose_to_ai = true`. Two reasons:

- **Predictability** — the assistant occasionally hallucinates parameters; an unintended write is harder to recover from than an unintended read.
- **Audit clarity** — a chat-triggered write needs the same review path as a UI-triggered one.

For installs that want the assistant to be able to write, set `expose_to_ai = true` on the specific connectors / queries you want exposed, plus the explicit `ai:tool:<name>` permission per role.

---

## The `/chat` page

A two-column layout:

| Column | Content |
|---|---|
| **Left — conversation** | Message timeline. User messages on the right (blue), assistant messages on the left (grey). Tool calls are folded under expanders showing the tool name, the input params and the result count. |
| **Right — context** | The active conversation's metadata: turn count, total tokens consumed, the list of tools the model can pick from (filtered by permission). A toggle to clear the conversation. |

The input box at the bottom accepts plain text + `↵` to send + `⇧↵` for a newline.

### Conversation history

Conversations are persisted in `ly2_ai_conversations` + `ly2_ai_messages` against the calling user. Re-opening the `/chat` page resumes the most recent conversation; the toggle in the right column starts a fresh one.

The retention is configured under `[ai] history_days` in `app.toml` (default 30 days). Conversation deletion is a cascade — the messages, tool inputs and tool outputs go together.

### Sharing a conversation

A *Share* action on a finished conversation produces a read-only link consumable by anyone with the `ai:read-shared` permission. The shared view is **static** — it shows the conversation as-is, no further turns can be appended. Useful for handing off an investigation to a colleague.

---

## Tool-use limits

The model can call multiple tools per turn — sequentially or in parallel up to `tool_concurrency`. The framework enforces three hard limits to keep costs predictable:

| Limit | Default | Meaning |
|---|---|---|
| `max_tools_per_turn` | 10 | Past this, the framework refuses further tool calls in the current turn and instructs the model to finalise its answer. |
| `max_tokens_per_conversation` | 100 000 | Past this, the conversation is **closed** — the user can read it but not send new turns. A new conversation must be started. |
| `[ai.daily_limits].messages` | License-dependent | Total assistant turns per user per day. Surface a warning at 80%, refuse new turns at 100%. |

The limits are surfaced in the right column of the chat page — a token gauge and a daily counter.

---

## Permissions

| Code | Effect |
|---|---|
| `ai:chat` | Use the `/chat` page. Required for every interactive turn. |
| `ai:tool:<name>` | Use a specific tool. Wildcards: `ai:tool:billing__*` allows every billing tool. By default, the **same permission as the underlying connector** governs the tool — explicit `ai:tool:*` is only needed when the connector is exposed to the AI but you want to fence off a subset. |
| `ai:share` | Use the *Share* action to produce a read-only link. |
| `ai:read-shared` | Open a shared conversation. |
| `ai:write` | Use tools that the framework considers write-side (`expose_to_ai = true` on a write query). |

See [Roles & permissions](./build/secure/roles-and-permissions.md) for the role-assignment workflow.

---

## REST surface

For automation, the assistant is reachable directly via REST — same model, same tool list, same permissions:

```http
POST /ai/chat
Authorization: Bearer <token>
Content-Type: application/json

{
  "conversation_id": "c-1234",
  "message": "How many invoices did we issue in April?"
}
```

Response is **streamed** as `text/event-stream` (SSE) — one event per token chunk plus distinct events for tool calls, tool results and the final answer. A non-streaming variant is available at `/ai/chat?stream=false`.

`GET /ai/tools` lists the tools the calling user can invoke — the same list the model sees. Useful for debugging permission scoping.

---

## Tips & best practices

- **Write a good `description` on every connector and query.** The model picks tools based on the description; vague descriptions ("get data") confuse it. Two sentences in the user's language, naming the entity and the typical use case, work best.
- **Set explicit `enum` lookups on params.** A `status` param with `lookup = "invoice-statuses"` lets the model pick from the known set rather than inventing a value.
- **Cap `tool_concurrency` low in development.** Parallel tool calls produce concurrent database load that can mask issues that show up in production sequentially.
- **Use `claude-haiku-*` for cost-sensitive installs.** Haiku is significantly cheaper than Sonnet for the same chat surface; the trade-off is reasoning quality on multi-step questions.
- **Don't expose write queries by default.** Start with read-only; turn on `expose_to_ai = true` per write query as the team gets comfortable with the assistant's behaviour.
- **Audit the AI surface.** `GET /ai/tools` for an arbitrary role is the fastest sanity check before granting `ai:chat`.

---

## What's next

- [REST API → `/ai/*`](../references/rest-api.md#ai) — the chat endpoint contract.
- [Concepts → Connectors](./connectors.md) — `description` and `expose_to_ai` fields.
- [Authentication → Roles & permissions](./build/secure/roles-and-permissions.md) — the `ai:*` permission family.
- [Configuration → `app.toml`](./configuration/app-toml.md) — the `[ai]` block reference.
