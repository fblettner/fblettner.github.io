# Styled Stack Components

## Description
The `Stack` components are predefined styled wrappers based on the `Div` component. They provide structured and reusable layouts for arranging UI elements in a stack-like format.

## Styled Stack Components

| Component Name           | Description |
|-------------------------|--------------------------------------------------|
| `Stack_FormsTable`   | A structured stack container for FormsTable elements. |
| `Stack_Table`        | A full-width, full-height container for tables. |
| `Stack_Dialogs`      | A stack container for dialog sections. |
| `Stack_FormsAI`      | A structured stack for FormsAI interface. |
| `Stack_FormsChart`   | A stack container for chart layouts. |
| `Stack_SnackMessage` | A fixed-position stack for snack messages (notifications). |

---

## Example Usage

### **Basic Styled Stack Components**
```tsx
import { Stack_FormsTable, Stack_Dialogs } from '@nomana-it/liberty-core';

export const StackExample = () => {
  return (
    <>
      <Stack_FormsTable>
        <h2>Forms Table Content</h2>
      </Stack_FormsTable>

      <Stack_Dialogs>
        <h1>Dialog Content</h1>
      </Stack_Dialogs>
    </>
  );
};
```

---

## Notes
- These components ensure **consistent stacking behavior** across the application.
- `Stack_FormsTable` and `Stack_Table` provide **full-screen table support**.
- `Stack_FormsAI` and `Stack_FormsChart` enable **AI-driven form processing** and **visualizations**.
- `Stack_SnackMessage` is positioned **at the bottom right** for displaying notification messages.

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 
