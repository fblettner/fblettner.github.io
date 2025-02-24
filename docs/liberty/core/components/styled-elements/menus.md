# Styled Menu Components

## Description
The `Menu_Filters` component is a styled version of the `Menu` component from Liberty Core. It is designed specifically for filter menus with auto-scroll behavior when content exceeds a defined height.

## Props
| Prop             | Type              | Default  | Description                                  |
|-----------------|------------------|----------|----------------------------------------------|
| `zIndex`      | `number`       | `undefined` | Defines the stacking order (z-index) for layering. |

## Example Usage

### Basic Styled Menu
```tsx
import { Menu_Filters } from '@nomana-it/liberty-core';

export const FilterMenuExample = () => {
  return (
    <Menu_Filters zIndex={1000}>
      {/* Menu items go here */}
    </Menu_Filters>
  );
};
```

---

## **Styled Menu Components**
- `Menu_Filters`: A specialized menu with scrollable content.

---

## Notes
- The menu automatically **adds a scrollbar** if content exceeds the defined height (`400px`).
- It **inherits theme properties** from the Liberty Core styling system.
  
## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 