# Styled Tabs Components

## Description
The `Tabs` and `Tab` components are predefined styled wrappers based on the `Tabs` and `Tab` components from Liberty Core. These components provide consistent styling for tabbed navigation in dialogs.

## Styled Tabs Components

| Component Name      | Description |
|---------------------|--------------------------------------------------|
| `Tabs_Dialogs`   | A styled container for tabbed navigation inside dialogs. |
| `Tab_Dialogs`    | A styled tab with enhanced styles for dialog interactions. |

---

## Example Usage

### **Basic Styled Tabs**
```tsx
import { Tabs_Dialogs, Tab_Dialogs } from '@nomana-it/liberty-core';

export const TabsExample = () => {
  return (
    <Tabs_Dialogs>
      <Tab_Dialogs label="Tab 1" />
      <Tab_Dialogs label="Tab 2" />
      <Tab_Dialogs label="Tab 3" />
    </Tabs_Dialogs>
  );
};
```

---

## Notes
- **`Tabs_Dialogs`** ensures **consistent styling** for **dialog-based navigation**.
- **`Tab_Dialogs`** provides **customized styling** for tabs, including:
  - **Small Caps Font Variant**
  - **Padding & Border Radius**
  - **Box Shadows for Hover Effects**

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 