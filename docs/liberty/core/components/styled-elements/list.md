# Styled List Components

## Description
Liberty Core provides predefined styled list components to enhance UI consistency and usability.

- `List_StaticMenus` is a styled version of the standard `List`, ensuring that the content does not overflow.
- `ListItemButton_DynamicMenus` is an enhanced `ListItemButton` that dynamically adjusts its background when opened.

## Props

### **ListItemButton_DynamicMenus**
| Prop    | Type       | Default  | Description                                  |
|---------|-----------|----------|----------------------------------------------|
| `open`  | `boolean` | `false` | Controls the background change when expanded. |

## Example Usage

### **Basic Styled List**
```tsx
import { List_StaticMenus, ListItemButton_DynamicMenus } from '@nomana-it/liberty-core';

export const ListExample = () => {
  return (
    <List_StaticMenus>
      <ListItemButton_DynamicMenus open={true}>
        Dynamic List Item
      </ListItemButton_DynamicMenus>
    </List_StaticMenus>
  );
};
```

---

## **Styled List Components**
- `List_StaticMenus`: A non-overflowing styled list.
- `ListItemButton_DynamicMenus`: A dynamic list item button with background changes.

---

## Notes
- `ListItemButton_DynamicMenus` uses **opacity-based background change** when open.
- `List_StaticMenus` ensures list content remains **visually structured**.


## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 