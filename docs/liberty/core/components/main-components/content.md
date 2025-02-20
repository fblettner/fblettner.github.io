# AppsContent Component

## Description
The `AppsContent` component is the **core layout container** for Liberty Core applications. It handles:

- **User Authentication**: Displays login screen if the user is not authenticated.
- **Navigation & Menu System**: Integrates `AppsMenus` for managing available application modules.
- **Tab Management**: Supports opening multiple application modules in tabs.
- **Dark Mode & Theme Switching**: Allows toggling between dark and light themes.
- **User Profile & Settings**: Opens user settings panel for profile modifications.
- **WebSocket Chat Integration**: Provides in-app chat functionalities.
- **Application Header**: Includes navigation buttons, logout options, and menu toggle.

## Features
- **Dynamic Tab Management**: Open, close, and switch between multiple application views.
- **Dashboard Support**: Automatically loads the user's default dashboard.
- **State Persistence**: Restores tabs after login/logout.
- **Event-Driven UI Updates**: Uses hooks to track user authentication and session changes.

## Example Usage
```tsx
import { AppProvider, AppsContent } from "@nomana-it/liberty-core"

export const MyApp = () => {
  return (
    <AppProvider>
      <AppsContent />
    </AppProvider>
  );
};
```

## Props
| Prop                   | Type                 | Default | Description |
|------------------------|----------------------|---------|-------------|
| `onToggleMenusDrawer` | `() => void`       | -       | Opens/closes the application side menu. |
| `onToggleDarkMode`    | `() => void`       | -       | Toggles dark/light mode. |
| `onToggleUserSettings`| `() => void`       | -       | Opens/closes the user settings dialog. |
| `onToggleChat`        | `() => void`       | -       | Opens/closes the WebSocket chat interface. |
| `onSignout`          | `() => void`       | -       | Logs out the current user. |

## Navigation
The **AppsContent** component is designed to work seamlessly with **Liberty Core's** navigation system. It relies on:
- `AppsMenus` for sidebar navigation.
- `AppsHeader` for top navigation controls.
- `TabContainer` for managing multiple open views.

## Default Behavior
When a user logs in:
1. **Checks for a default dashboard** (either from user settings or app settings).
2. **Loads the dashboard automatically** if available.
3. **Displays dynamic tabs** as the user navigates through the application.

If the user logs out:
1. **All tabs are cleared**.
2. **Login screen is displayed** until the user re-authenticates.

## Extensibility
Developers can override default behavior by modifying the `useAppContext` provider functions.

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 
