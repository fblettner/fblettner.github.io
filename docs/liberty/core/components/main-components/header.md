# AppsHeader Component

## Description
The `AppsHeader` component provides a standard header with multiple actions such as:
- Opening a menu drawer
- Toggling dark mode
- Opening user settings
- Opening chat
- Signing out

## Props
| Prop                 | Type          | Description                    |
|----------------------|--------------|--------------------------------|
| `onToggleMenusDrawer` | `() => void` | Callback for opening the menu drawer |
| `onToggleDarkMode` | `() => void` | Callback for toggling dark mode |
| `onToggleUserSettings` | `() => void` | Callback for user settings |
| `onToggleChat` | `() => void` | Callback for opening chat |
| `onSignout` | `() => void` | Callback for signing out |

## Example Usage
```tsx
import { AppsHeader } from "liberty-core";

export const AppHeaderExample = () => {
  const onToggleMenusDrawer = () => {
    alert("Open Menu");
  };

  const onToggleDarkMode = () => {
    alert("Toggle Dark Mode");
  };

  const onToggleUserSettings = () => {
    alert("Open User Settings");
  };

  const onToggleChat = () => {
    alert("Open Chat");
  };

  const onSignout = () => {
    alert("Signout");
  };

  return (
    <AppsHeader
      onToggleMenusDrawer={onToggleMenusDrawer}
      onToggleDarkMode={onToggleDarkMode}
      onToggleChat={onToggleChat}
      onToggleUserSettings={onToggleUserSettings}
      onSignout={onSignout}
    />
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 