# Styled Paper Components

## Description
The `Paper` components are predefined styled wrappers based on the `Div` component. They provide structured and reusable layouts for different UI sections, such as login forms, dashboards, and dialogs.

## Styled Paper Components

| Component Name           | Description |
|-------------------------|--------------------------------------------------|
| `Paper_Login`        | A styled paper container for login forms. |
| `Paper_Table`        | A full-width, full-height wrapper for tables. |
| `Paper_TableDialog`  | A paper container for table dialogs. |
| `Paper_Dialogs`      | A flexible wrapper for dialog sections. |
| `Paper_Dashboard`    | A structured container for dashboard sections. |
| `Paper_UploadFile`   | A wrapper specifically for file upload areas. |
| `Paper_FormsAI`      | A styled container for FormsAI interface. |
| `Paper_TableToolbar` | A sticky toolbar for tables. |
| `Paper_DialogToolbar`| A styled toolbar for dialogs. |
| `Paper_FormsChart`   | A paper wrapper for charts. |
| `Paper_Popup`        | A popup-style modal container. |
| `Paper_FormsChat`    | A styled wrapper for FormsChat messages. |
| `Paper_TableTree`    | A structured container for tree-like table structures. |

---

## Example Usage

### **Basic Styled Paper Components**
```tsx
import { Paper_Login, Paper_Dashboard } from '@nomana-it/liberty-core';

export const PaperExample = () => {
  return (
    <>
      <Paper_Login>
        <h2>Login Form</h2>
      </Paper_Login>

      <Paper_Dashboard>
        <h1>Dashboard Content</h1>
      </Paper_Dashboard>
    </>
  );
};
```

---

## Notes
- These components ensure **consistent layout structure** across the application.
- `Paper_Login` provides a **semi-transparent** background with adaptive styling.
- `Paper_Table` and `Paper_TableDialog` are optimized for **data tables**.
- `Paper_FormsAI` and `Paper_FormsChat` enable **intelligent form processing** and **chat interactions**.

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 