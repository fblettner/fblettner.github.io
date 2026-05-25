---
title: Hot-reload
description: "Every per-section TOML edit done in the Settings UI or pushed via POST /admin/reload is applied to the running framework without a restart. This page documents what reloads, what stays in flight and what genuinely requires a process restart."
keywords: [Liberty Framework, hot-reload, POST /admin/reload, Settings UI, registry, connectors, dictionary, screens, menus, dashboards, restart-required, app.toml]
---

# Hot-reload

The framework holds every per-section TOML in an in-memory **registry**: there is a connector registry, a dictionary registry, a screens registry, and so on. Each one can be rebuilt from disk on demand — the rebuild is what powers the **Save & reload** button of the Settings UI and the `POST /admin/reload` endpoint.

This page is the contract: what reloads, what doesn't, what happens to requests in flight, and what genuinely requires a process restart.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(50,215,75,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(50,215,75,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4ade80', marginBottom: '8px'}}>✓ Hot-reloadable</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>connectors · dictionary · screens · menus · dashboards · charts · jobs</div>
  </div>
  <div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#fb923c', marginBottom: '8px'}}>⚠ Partial reload</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>pool URL change — old connections drained as in-flight queries finish, new ones use the updated URL</div>
  </div>
  <div style={{border: '1px solid rgba(255,69,58,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(255,69,58,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#f87171', marginBottom: '8px'}}>✕ Restart required</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>app.toml · environment variables · auth backend · license key · master encryption key</div>
  </div>
</div>

---

## What hot-reload does

A reload is **scoped per section**. Saving in the *Connectors* tab triggers `POST /admin/reload?scope=connectors` — only the connector registry is rebuilt, every other registry is untouched. The endpoint also accepts `scope=all` (default), which rebuilds every per-section registry in dependency order: pools → connectors → dictionary → screens → dashboards → charts → menus → jobs.

The rebuild always follows the same three phases:

1. **Re-parse the TOML** from disk. A parse error stops the reload before any registry is replaced; the in-memory registry stays usable and the caller is told which line failed.
2. **Build the new registry off to the side.** Each entry is validated against its Pydantic model; an invalid entry is reported with its name and message. A second pass cross-checks references (a screen pointing at a non-existent connector, a menu leaf pointing at a non-existent screen) and refuses the reload when something is broken.
3. **Swap the registry atomically.** The new registry replaces the old one inside a single lock. Requests that already started against the old registry **finish on it**; new requests pick up the new one. There is no half-state where part of the request sees the old config and part sees the new one.

---

## What happens to in-flight requests

| Surface | In-flight behaviour |
|---|---|
| **SQL query** | The request finishes against the connector definition that was current when the request arrived. A re-fetch from the same browser tab uses the new one. |
| **HTTP endpoint** | Same — bound to the connector definition at request entry. |
| **Screen render** | The grid + dialog is bound to the screen entry at first render. A row click after a reload may open a dialog with a slightly newer column set; the framework re-fetches the screen definition on every dialog open. |
| **Menu render** | The sidebar re-renders **immediately** — a Socket.IO broadcast notifies every connected client to re-fetch `/api/menus`. |
| **Dashboard widget** | Same as a screen — the widget is bound at first render and re-fetched on the next refresh tick. |
| **Job in progress** | A running Nomaflow run uses the job definition it was started with. The next scheduled fire-time picks up the new definition. |
| **AI assistant** | The connector list (= tool list) is regenerated on the next user prompt. |

A reload **never aborts** an in-flight request and **never invalidates** a session token.

---

## Trigger paths

| Path | Who calls it | Scope |
|---|---|---|
| **Settings UI → Save & reload** | Operator | The section being edited. |
| **`POST /admin/reload`** | Operator or CI script with `settings:reload` | Defaults to `all`; `?scope=<section>` narrows it. |
| **Filesystem watcher** *(optional)* | The framework itself when `[app] watch_config = true` is set in `app.toml` | The section whose file changed. Useful in dev; not recommended in production where edits should go through the UI. |
| **CLI `liberty-admin reload`** | Operator via shell | Same as `POST /admin/reload`. |

The endpoint contract:

```text
POST /admin/reload?scope=connectors
Authorization: Bearer <token with settings:reload>

→ 200 OK
{
  "scope": "connectors",
  "reloaded_at": "2026-05-20T13:42:11Z",
  "entries": {"connectors": 38, "pools": 4}
}
```

A failed reload returns the diagnostic without touching the running registry:

```text
→ 422 Unprocessable Entity
{
  "scope": "connectors",
  "error": "connector 'crm-customers': pool 'crm-old' not found",
  "blame_file": "connectors.toml",
  "blame_line": 142
}
```

---

## What requires a restart

These keep the framework simple at startup; reloading them mid-flight would touch every running request.

| Trigger | Reason | Recovery |
|---|---|---|
| **`app.toml` edit** | Loaded once into the process state — auth backend, OIDC issuer, AI provider, master key are wired into singletons at startup. | `systemctl restart liberty-next` or the container equivalent. |
| **Any `LIBERTY_*` env var change** | Env vars are interpolated into `app.toml` at startup; the process never re-reads them. | Restart. |
| **JWT secret rotation** | A new secret would invalidate every existing token mid-flight. | Rolling restart — set the new secret on each replica in turn so user sessions migrate smoothly. |
| **Master key rotation** | Existing decrypted material in memory is fine, but new connector loads need the rotated key. | See [Encryption & secrets → rotation](./encryption-secrets.md#key-rotation). |
| **License key swap** | Feature gates are evaluated at startup against the JWT payload. | Restart. |
| **Backend code change** | Python modules are cached. | Restart. `./start.sh dev` does this automatically via `uvicorn --reload`. |

---

## Failure modes

| Symptom | Cause | What the framework does |
|---|---|---|
| **TOML parse error** | A trailing comma, unbalanced bracket. | Reload aborts at phase 1; the registry in memory is untouched. The Settings UI surfaces the offending line. |
| **Reference missing** | A menu leaf points at a screen that was just renamed or deleted. | Reload aborts at phase 2; the diagnostic names the menu leaf and the missing screen. Use *Rename* in the Connectors / Screens / Dictionary builders rather than editing identifiers by hand — it propagates the change across every referencing file. |
| **Validation error** | A new field with an invalid type (`port = "abc"`). | Reload aborts at phase 2; the Pydantic message is shown verbatim. |
| **Database unreachable** | A new pool URL points at a host that's down. | The pool is created lazily, so the reload itself succeeds; the first SQL call against the new pool fails with the connection error. The Settings UI's *Test* button catches this earlier. |
| **Empty TOML** | A `Save` cleared every entry. | Reload succeeds — the registry has zero entries. Every dependent surface (Connectors catalog, menu) becomes empty. Restore from the previous git commit. |

---

## Tips & best practices

- **Edit in the Settings UI, not on disk.** The UI runs the same validation pipeline before writing the file, so a builder save can never produce a file the reload would reject.
- **Use *Rename* across files.** Renaming a connector or a screen from the builder rewrites every reference in one transaction; renaming by hand in TOML risks an orphan reference.
- **Audit the reload log.** Every successful reload writes one INFO line per registry with the number of entries; a sudden drop in the count is the earliest signal that an operator's edit deleted more than intended.
- **Keep `watch_config` off in production.** A flapping filesystem watcher (`rsync`, `git pull` mid-day) can trigger a reload while only half the files are updated.
- **Restart on `app.toml` edits.** A failing JWT rotation is more visible than a silently-loaded stale value.
