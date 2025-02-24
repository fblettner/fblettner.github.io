# Styled Icon Button Components

## Description
The `IconButton` components are predefined styled buttons built on top of the `IconButton` from Liberty Core. These buttons are customized for various use cases in UI interactions.

## Props
The following `IconButton` variants are available:

| Component Name             | Description |
|----------------------------|--------------------------------------------------|
| `IconButton_Contrast`  | A high-contrast icon button that scales on hover. |
| `IconButton_Menus`  | Positioned for menu interactions with hover effects. |
| `IconButton_ListBottom`  | A floating button at the bottom-right of the page. |
| `IconButton_TabClose`  | A circular button for closing tabs with hover effects. |
| `IconButton_Alert`  | A minimal button for alerts with centered alignment. |

---

## Example Usage

### **Basic Styled Icon Buttons**
```tsx
import { IconButton_Contrast, IconButton_Menus, IconButton_ListBottom } from '@nomana-it/liberty-core';

export const IconButtonExample = () => {
  return (
    <>
      <IconButton_Contrast>🔍</IconButton_Contrast>
      <IconButton_Menus>📋</IconButton_Menus>
      <IconButton_ListBottom>⬇️</IconButton_ListBottom>
    </>
  );
};
```

---

## **Styled Icon Button Components**
- `IconButton_Contrast`
- `IconButton_Menus`
- `IconButton_ListBottom`
- `IconButton_TabClose`
- `IconButton_Alert`

---

## Notes
- These components ensure **consistent styling** for icon buttons across the UI.
- They inherit all behaviors from the standard `IconButton` component.
- The hover effects **enhance usability** with scaling and color transitions.


## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 