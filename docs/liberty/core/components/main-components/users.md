# AppsUser Component

## Overview
The **AppsUser** component is a **user settings dialog** in Liberty Core. It allows users to **manage personal settings** such as themes, notifications, UI display mode, and authentication. 
This component is integrated within the `AppProvider` and can be overridden by defining a custom `getUser` function.

It supports:
- **Authentication & User Roles**
- **Personalization** (theme, language, dashboard)
- **Dark Mode & UI Preferences**
- **Notification Settings**
- **Overridable API for custom user data**

## Props
| Prop               | Type                         | Description |
|--------------------|----------------------------|-------------|
| `openDialog`    | `boolean`                 | Controls whether the settings dialog is open. |
| `setOpenDialog` | `(state: boolean) => void` | Function to toggle the settings dialog. |
| `onToggleDarkMode` | `() => void`           | Toggles between light and dark modes. |

## Example Usage
```tsx
import React, { useState } from "react";
import { AppsUser } from "@nomana-it/liberty-core"
import { Button } from "@ly_common/Button";

export const UserSettingsDialogExample = () => {
  const [isUserDialogOpen, setUserDialogOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setUserDialogOpen(true)}>Open User Settings</Button>
      <AppsUser 
        openDialog={isUserDialogOpen} 
        setOpenDialog={setUserDialogOpen} 
        onToggleDarkMode={() => console.log("Dark mode toggled")} 
      />
    </>
  );
};
```

### **How It Works**
1. Clicking the **"Open User Settings"** button opens the **AppsUser** dialog.
2. The user can **modify their preferences** inside the modal.
3. The changes persist, and **dark mode updates dynamically** when toggled.

---

## **Overriding User Data**
By default, **AppsUser** retrieves user settings internally. However, you can override the **user retrieval logic** with a custom `getUser` function.

### **Example User Data**
```tsx
import { EUsers, IUsersProps, UIDisplayMode } from "@nomana-it/liberty-core"

export const user = [
    {
        "USR_ID": "admin",
        "USR_PASSWORD": "admin",
        "USR_NAME": "Administrator",
        "USR_EMAIL": "admin@liberty.fr",
        "USR_STATUS": "Y",
        "USR_ADMIN": "Y",
        "USR_LANGUAGE": "en",
        "USR_MODE": "dark",
        "USR_READONLY": "N",
        "USR_DASHBOARD": 1,
        "USR_THEME": "liberty"
    },
    {
        "USR_ID": "demo",
        "USR_PASSWORD": "demo",
        "USR_NAME": "Demo User",
        "USR_EMAIL": "demo@liberty.fr",
        "USR_STATUS": "Y",
        "USR_ADMIN": "Y",
        "USR_LANGUAGE": "en",
        "USR_MODE": "dark",
        "USR_READONLY": "N",
        "USR_DASHBOARD": 1,
        "USR_THEME": "liberty"
    }
];

export const getUser = async (user_id: string) => {
    const current_user = user.find((user: any) => user.USR_ID === user_id);
    if (!current_user) {
        return {
            "items": [],
            "status": "failed",
        };
    }
    return {
        "items": [current_user],
        "status": "success",
    };
};

export const currentUser: IUsersProps = {
    [EUsers.status]: true,
    [EUsers.id]: "demo",
    [EUsers.name]: "Demo User",
    [EUsers.email]: "demo@liberty.fr",
    [EUsers.password]: "",
    [EUsers.admin]: "Y",
    [EUsers.language]: "en",
    [EUsers.displayMode]: UIDisplayMode.dark,
    [EUsers.darkMode]: true,
    [EUsers.readonly]: "N",
    [EUsers.dashboard]: undefined,
    [EUsers.theme]: "liberty"
};
```

### **How to Override in `AppProvider`**
To override the default user data, pass the function when setting up `AppProvider`:

```tsx
<AppProvider
    getModules={getModules}
    getApplications={getApplications}
    getToken={getToken}
    getUser={async () => getUser}  // Override default user retrieval
    getMenus={getMenus}
    getDashboard={getDashboard}
>
    <AppsContent />
</AppProvider>
```

By overriding `getUser`, you can:
- **Customize authentication logic** (e.g., external APIs, LDAP, etc.).
- **Implement different role-based configurations.**
- **Dynamically fetch user preferences** from external services.

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 