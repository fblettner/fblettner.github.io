# Styled Typography Components

## Description
The `Typography` components are predefined styled wrappers based on the `Typography` component from Liberty Core. These components provide consistent styling for displaying text across different UI elements.

## Styled Typography Components

| Component Name      | Description |
|---------------------|--------------------------------------------------|
| `Typo_Loading`    | A styled text component for displaying loading messages. |
| `Typo_ListItemText` | A styled list item text with selection styles. |
| `Typo_ExportTitle` | A bold and stylized title for export sections. |
| `Typo_AppsName`    | A styled application name with a custom font. |

---

## Props

### **Typo_Loading**
| Prop           | Type                   | Default  | Description  |
|---------------|------------------------|----------|--------------|
| `color`     | `EStandardColor | string` | `inherit` | Custom text color. |
| `isThemeColor` | `boolean` | `false` | If true, applies the theme's default color. |

---

## Example Usage

### **Styled Loading Text**
```tsx
import { Typo_Loading } from '@nomana-it/liberty-core';

export const LoadingExample = () => {
  return (
    <Typo_Loading color="error" isThemeColor={false}>
      Loading, please wait...
    </Typo_Loading>
  );
};
```

### **Styled List Item Text**
```tsx
import { Typo_ListItemText } from '@nomana-it/liberty-core';

export const ListItemExample = () => {
  return (
    <Typo_ListItemText selected={true}>
      Selected List Item
    </Typo_ListItemText>
  );
};
```

---

## Notes
- **`Typo_Loading`** provides **consistent text styling** for **loading indicators**.
- **`Typo_ListItemText`** styles **list items** with bold highlights when selected.
- **`Typo_ExportTitle`** ensures **consistent styling** for **export titles**.
- **`Typo_AppsName`** customizes **application names** with a **unique font**.

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 