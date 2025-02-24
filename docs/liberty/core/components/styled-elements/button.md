# Styled Button Components

## Description
The `Button` component in Liberty Core is a styled button that provides consistent theming and behavior across applications. The framework also includes multiple predefined `Button` components for specific use cases.

## Props
| Prop             | Type               | Default  | Description                                   |
|-----------------|-------------------|----------|-----------------------------------------------|
| `variant`  | `"text", "contained", "outlined"` | `"text"` | Defines the button's appearance. |
| `disabled` | `boolean` | `false` | Disables the button when set to true. |
| `size` | `"small", "medium", "large"`, `"medium"` | Defines the size of the button. |
| `onClick` | `() => void` | `undefined` | Callback function triggered when clicked. |

## Example Usage

### Basic Styled Button
```typescript
import { Button } from '@nomana-it/liberty-core';

export const StyledButtonExample = () => {
  return (
    <Button variant="contained">
      Click Me
    </Button>
  );
};
```

---

# Predefined Styled Buttons

Liberty Core provides a collection of predefined styled `Button` components to simplify UI development.

### **General Styled Buttons**
- `Button_Login`
- `Button_UISettings`
- `Button_TableImport`
- `Button_Tools`
- `Button_Popper`

### **Detailed Predefined Buttons**

#### **Button_Login**
Used for login forms with hover effects and scaling.

```tsx
import { Button_Login } from '@nomana-it/liberty-core';

<Button_Login variant="contained">
  Login
</Button_Login>
```

#### **Button_UISettings**
Styled button for user interface settings.

```tsx
import { Button_UISettings } from '@nomana-it/liberty-core';

<Button_UISettings variant="outlined">
  Settings
</Button_UISettings>
```

#### **Button_TableImport**
A button designed for importing data into tables.

```tsx
import { Button_TableImport } from '@nomana-it/liberty-core';

<Button_TableImport variant="contained">
  Import Data
</Button_TableImport>
```

#### **Button_Tools**
A prominent button for tool-related actions with custom padding and border-radius.

```tsx
import { Button_Tools } from '@nomana-it/liberty-core';

<Button_Tools variant="contained">
  Tools
</Button_Tools>
```

#### **Button_Popper**
A floating button positioned at the bottom-right corner of the UI.

```tsx
import { Button_Popper } from '@nomana-it/liberty-core';

<Button_Popper variant="contained">
  Popper Action
</Button_Popper>
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 
