# AppsMenus Component

The **AppsMenus** component provides a **dynamic, customizable menu system** for Liberty Core applications. It allows defining **nested menu structures** that can be overridden using the `getMenus` function in `AppProvider`.

## Overview
`AppsMenus` is the main navigation system for applications built with Liberty Core. It provides:
- **Multi-level navigation** for organizing modules and features.
- **Dynamic content** based on user roles and permissions.
- **Overridable API** to fully customize the menu structure.

## Props
| Prop                 | Type                         | Description |
|----------------------|----------------------------|-------------|
| `isOpen`          | `boolean`                 | Controls whether the menu drawer is open. |
| `onMenuSelect`    | `(component: ComponentProperties) => void` | Callback triggered when a menu item is selected. |
| `onToggleMenusDrawer` | `() => void`            | Toggles the menu drawer open or closed. |

## **Overriding Menu Content**
The menu system can be **customized** by passing a custom `getMenus` function to `AppProvider`.

### **Example Menu Structure**
Menus follow a **hierarchical structure**, where each menu item can have:
- **Children** (submenus)
- **Components assigned** for navigation
- **Attributes** controlling behavior

```tsx
export const menus = {
    "items": [
        {
            "LNG_ID": "en",
            "MENU_LABEL": "Application",
            "MENU_COMPONENT": null,
            "MENU_COMPONENT_ID": null,
            "KEY_ATTRIBUTES": "100001.",
            "MENU_PARENT_ID": "0",
            "MENU_CHILD_ID": "100001.",
            "MENU_LEVEL": 1,
            "AUT_RUN": "Y",
            "children": [
                {
                    "MENU_LABEL": "AppProvider",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100001,
                    "KEY_ATTRIBUTES": "100001.100001.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100001.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_AppProvider />
                },
                {
                    "MENU_LABEL": "Modules",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100002,
                    "KEY_ATTRIBUTES": "100001.100002.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100002.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_Modules />
                },                                                         
            ]
        }
    ],
    "status": "success"
};
```

### **How to Override in `AppProvider`**
To override the default menu, pass the function when setting up `AppProvider`:

```tsx
<AppProvider
    getModules={getModules}
    getApplications={getApplications}
    getToken={getToken}
    getUser={getUser}
    getMenus={async () => menus}  // Override default menus
    getDashboard={getDashboard}
>
    <AppsContent />
</AppProvider>
```

By overriding `getMenus`, you can **customize navigation dynamically** based on:
- **User roles** (e.g., different menus for admin and users).
- **Feature availability** (e.g., show or hide based on permissions).
- **Application state** (e.g., load menus dynamically from an API).

## Example Usage
```tsx
import { AppsMenus } from "liberty-core";

<AppsMenus 
    isOpen={true} 
    onMenuSelect={(component) => console.log(component)} 
    onToggleMenusDrawer={() => console.log("Toggle drawer")} 
/>
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 