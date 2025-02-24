# Styled Main Components

## Description
The `Main` components are predefined styled main sections, providing a structured layout for application content.

## Props
The following `Main` variants are available:

| Component Name   | Description |
|-----------------|--------------------------------------------------|
| `Main_Content`  | The primary content wrapper that adapts when the drawer is open. |
| `Main_Login`  | A flexible container designed for login-related views. |

---

## Example Usage

### **Basic Styled Main Components**
```tsx
import { Main_Content, Main_Login } from '@nomana-it/liberty-core';

export const MainExample = () => {
  return (
    <>
      <Main_Content>
        <h1>Main Content Area</h1>
      </Main_Content>

      <Main_Login>
        <h2>Login Section</h2>
      </Main_Login>
    </>
  );
};
```

---

## **Styled Main Components**
- `Main_Content`
- `Main_Login`

---

## Notes
- These components ensure **consistent layout structure** across the application.
- `Main_Content` is optimized for **primary application views**.
- `Main_Login` provides a **flexible structure for login pages**.

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 