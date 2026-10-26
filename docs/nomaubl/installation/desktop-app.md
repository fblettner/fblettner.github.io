---
title: Desktop app
description: "Install NomaUBL as a desktop application on Windows and macOS from Chrome, Edge or Safari: its own window and icon, no browser bars, one app per environment named after it, always the server's version; HTTPS required."
keywords: [NomaUBL, desktop app, PWA, install, Chrome, Edge, Safari, Add to Dock, Windows, macOS, HTTPS, environment, JD Edwards, SAP, NetSuite, custom ERP]
---

# Desktop app

NomaUBL can be installed as a **desktop application** on Windows and macOS. The app opens in its own window with its own icon, without the browser's address bar and tabs, and appears in the Start menu, the Dock or the application launcher like any other program. It is the web application of the server, so it always shows the server's current version: nothing is installed on the computer apart from the shortcut, and an upgrade of the server reaches every user at once.

---

## Installing

| Browser | How |
|---|---|
| **Chrome** or **Edge** (Windows, macOS) | Open NomaUBL, then click the **Install** button in the address bar. |
| **Safari** (macOS) | Open NomaUBL, then **File › Add to Dock**. |

Each environment installs as **its own app**, named after the *Environment* of the [Global](../configuration/system/global.md) settings: `NomaUBL · TEST`, `NomaUBL · PD`… so a test and a production instance never get mixed up. The window keeps the dark title bar and the full NomaUBL logo as icon.

:::info[HTTPS required]
The browsers offer the installation only when the server is reached over **HTTPS** (or on `localhost`). Behind a reverse proxy, publish NomaUBL with a certificate — see [Service and systemd](./service-and-systemd.md).
:::

---

## What the app does not change

- **Same sign-in, same rights.** The app signs in like the browser and follows the user's role.
- **No offline mode.** Every screen is served by the server; without a connection to it, the app shows nothing.
- **Nothing to update on the computer.** It is uninstalled like any other installed app.
