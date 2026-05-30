---
title: Why Liberty Framework
description: "Liberty Framework is a low-code platform for building internal applications — admin tools, BI dashboards, integration glue, customer portals — without writing a frontend. Define data sources and screens in the Settings UI; the framework renders the grid, the edit dialog, the dashboard, the assistant."
keywords: [Liberty Framework, low-code, internal apps, admin tools, BI dashboards, why, getting started, overview]
---

# Why Liberty Framework

You have a database. Or a JD Edwards instance. Or a SaaS API your team needs to talk to. And what you want is a **clean, fast internal interface** to look at that data, edit it, drill into it, schedule things against it — without spending three months writing a React app for each one.

That's what Liberty Framework is for.

You install it once, point it at your data source, and define **what people should see** through a Settings UI: which queries feed which screens, which screens belong to which menu, which dashboards aggregate what. The framework handles everything else — rendering the grid, the edit dialog, the filters, the authentication, the role pruning, the export buttons, the audit columns, the assistant, the scheduled jobs.

A handful of concepts (a *pool*, a *connector*, a *screen*, a *dashboard*, a *menu*) compose to cover the surface most internal applications need: CRUD over databases, KPIs and charts, role-gated access, ETL pipelines, an AI assistant that can run your queries on demand.

---

## What problem it solves

Most teams end up writing the same kind of application over and over:

- **A grid that lists rows from a table**, with filters and pagination.
- **An edit dialog** that opens when you click a row, with the form fields the database carries.
- **A dashboard** with a few KPIs and charts on top of the same data.
- **A menu** that ties everything together.
- **Authentication** so only the right people see the right things.

Writing this in React (or Angular, or Vue) is a week of work per screen. Multiply by 20 screens per app, and 5 apps per team, and the math is brutal — most of the engineering hours go into wiring forms to APIs and APIs to databases, with very little of it surfacing as actual business logic.

The framework takes the opposite stance: the **schema** of every query is discovered at runtime from the database itself, the **layout** is described in a few clicks in the Settings UI, and the **rendering** — grid, dialog, dashboard, AI tool, REST surface — is the framework's job, not yours. You write SQL. You get a UI.

When something the framework doesn't cover comes up (a custom widget, a one-off page, a hand-tuned UX) the platform stays out of the way — you can wire in a React route, a custom Python step, or a raw HTTP endpoint.

---

## Who it's for

| Audience | Why they pick the framework |
|---|---|
| **Internal-tools teams** building admin apps over existing databases. | The CRUD-screen path is six clicks away; no time spent re-inventing it. |
| **JD Edwards / SAP / NetSuite operators** who need to administer their ERP from a modern UI without waiting on the vendor. | Connect to the ERP's pool, expose the right queries, drop a screen on top. |
| **BI / analytics teams** consolidating reports across systems. | Dashboards over named SQL queries, charts that reuse the data, no separate BI tool needed. |
| **Integration teams** that need a UI on top of ETL pipelines, scheduled jobs and webhook receivers. | Nomaflow runs the jobs, the framework gives them a UI; the AI assistant calls the same queries on demand. |
| **Software vendors** packaging customer-facing apps on top of a database product. | The framework is the chassis; you ship per-customer configuration as a portable zip. |

It's **less interesting** for:

- Public-facing consumer apps (the framework's UX is operator-oriented).
- Mobile apps (the SPA works on mobile but isn't built mobile-first).
- One-off marketing sites or content management — there are simpler tools.

---

## What makes it different

| Most low-code tools | Liberty Framework |
|---|---|
| Drag-and-drop form designer that generates a custom UI per page. | One coherent UI grammar — a grid + a dialog — applied across every screen. Faster to learn for users, faster to build for developers. |
| Proprietary backend that owns your data. | Your own database. Your own pool. The framework only reaches it through declared queries; export and migration are trivial. |
| You're tied to the vendor's hosting. | Self-hosted. systemd, Docker, Kubernetes — your call. |
| Schema declared by hand in the tool. | Schema discovered at runtime from the live query. Change the SQL, the UI follows. |
| Closed plugin model. | Open Python plugins, custom React routes, REST API, and a tool-use AI assistant that runs the same queries as the UI. |
| You pick a stack and learn it. | You already know SQL; the rest is checkboxes and dropdowns. |

The most important difference is the **schema-discovered** model: nothing about your data is duplicated in framework configuration. The connector knows the query; the database knows the columns. When a column changes, the UI reflects it on the next reload.

---

## Five concepts, one mental model

Everything the framework does is composed from five concepts:

| Concept | What it is | What it solves |
|---|---|---|
| **[Pool](../installation/python-server.md)** | A connection to a database (a SQLAlchemy URL + credentials). | "How do I reach this data?" |
| **[Connector](./connectors.md)** | A named set of queries / endpoints on top of a pool. | "What questions do I want to ask this data source?" |
| **[Screen](./build/screens/overview.md)** | A grid + edit dialog over a connector's queries. | "How do I let a person look at this and edit it?" |
| **[Dashboard](./dashboards.md)** | A layout of KPIs and charts over the same queries. | "How do I summarise this for someone who just wants the headline?" |
| **[Menu](./build/menus/overview.md)** | The sidebar tree that organises screens and dashboards into an app. | "How do I make this navigable?" |

Around those five sit the supporting layers: the [dictionary](./dictionary.md) for labels and formats, [authentication & roles](./build/secure/sign-in.md) for who-sees-what, [jobs](../nomaflow/overview.md) for scheduled work, [AI assistant](./ai-assistant.md) for natural-language access, [plugins](./apps/plugins.md) for custom Python.

Every concept page on this site opens with **what it is, why it exists, when you create one, how it fits with the others**. Once you've read those five, the framework's surface is essentially mapped.

---

## How to learn it

Three paths into the framework — pick whichever suits how you read.

### 1. Hands-on tutorials *(recommended)*

The **[Build a CRM tutorial](./tutorial-crm/01-setup.md)** is a six-step walkthrough that produces a working customer-relationship-management application — customers, deals, activities, a sales-pipeline dashboard, OIDC sign-in, role-based access, the AI assistant and a scheduled job. The domain is generic; no prior knowledge needed beyond SQL.

For a real-world ERP admin built on the framework, the packaged **[Nomajde](https://docs.nomana-it.fr/nomajde/)** app covers JD Edwards end-to-end out of the box — users, roles, security workbench, BIP queue, master data. Install it, point it at your JDE database, get a working admin without building anything yourself.

### 2. Use-case-driven

If you'd rather start from *what you want to build*, the **[What you can build](./what-you-can-build.md)** page lists every common use case (internal CRUD, admin tools, BI dashboards, integration glue, customer portals, workflow orchestration, ETL) with a one-paragraph "how the framework does it" plus a link to the relevant tutorial / cookbook recipe.

### 3. Reference-first

If you're the type who reads documentation top-to-bottom, the **[Getting Started](../installation/python-server.md)** section walks you through installation, the file layout, the Settings UI; then the **Concepts** section explains each primitive in depth.

---

## What's in the rest of these docs

| Section | What it covers |
|---|---|
| [Getting Started](../installation/python-server.md) | Install the framework, create your first app, understand the file layout. |
| [Tutorial — Build a CRM](./tutorial-crm/01-setup.md) | End-to-end CRM walkthrough. |
| [Configuration](./configuration/settings-ui.md) | Settings UI, framework settings, environment variables, hot-reload, encrypted secrets. |
| [Concepts](./connectors.md) | The five framework primitives + parameter binding and form conditions, each with a "What / Why / When" intro. |
| [Authentication](./build/secure/sign-in.md) | Local users, OIDC, JWT, roles, permissions, license keys. |
| [Apps & Plugins](./apps/overview.md) | Multi-app organisation, custom Python plugins, internationalisation. |
| [Jobs — Nomaflow](../nomaflow/overview.md) | Scheduled work, ETL pipelines, step types, run history. |
| [AI Assistant](./ai-assistant.md) | The tool-use assistant, how it surfaces connector queries. |
| [Cookbook](./cookbook/crud-existing-table.md) | Short recipes for common patterns — Excel export, file upload, OIDC, audit trail, etc. |
| [CLI reference](../references/cli.md) | `liberty-admin`, `liberty-connectors`, `liberty-crypto`, `liberty-license`. |
| [REST API reference](../references/rest-api.md) | Every endpoint, grouped by domain. |
| [Deployment](../installation/production.md) | systemd, container, Kubernetes — running the framework in production. |

---

## Frontend in one paragraph

React 19 + Vite + TypeScript, built once into `frontend/dist` and served as static by the FastAPI backend on the same port. Dark default with a light theme swap, `react-i18next` EN / FR, `lucide-react` icons, DM Sans, `@tanstack/react-table` for the grid, `react-markdown` + `remark-gfm` for the assistant, `@monaco-editor/react` for the in-app code editing. You don't write any of it — the framework renders everything off the configuration.

---

## Backend in one paragraph

Python 3.12, FastAPI, SQLAlchemy 2.0 async with asyncpg (PostgreSQL) + oracledb (Oracle, thin), Anthropic SDK for the AI assistant, authlib for OIDC, Argon2 for password hashing, cryptography for AES-256-GCM field encryption, APScheduler for cron jobs, Socket.IO for live updates. One process, one port, no companion daemons. You don't write Python unless you want a custom job step or an extension hook.

---

## Ready?

| If you want to… | Go to |
|---|---|
| **Build something now** | [Tutorial — Build a CRM](./tutorial-crm/01-setup.md). |
| **See what's possible first** | [What you can build](./what-you-can-build.md). |
| **Install the framework** | [Getting Started → Installation](../installation/python-server.md). |
| **Understand the concepts first** | [Concepts → Connectors](./connectors.md) is the natural entry point. |
| **Look up a specific field** | [Settings UI](./configuration/settings-ui.md) lists every builder; each Concepts page references the relevant editor. |
