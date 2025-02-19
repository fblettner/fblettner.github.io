# Alert Component

## Description
The `Alert` component provides a styled alert message with various severity levels. It can also be dismissible.

## Props
| Prop         | Type               | Default  | Description                                   |
|-------------|-------------------|----------|-----------------------------------------------|
| `variant`  | `"success" , "info" , "warning" , "error"` | `"info"`  | Defines the style and icon of the alert. |
| `dismissible` | `boolean` | `false` | Allows the alert to be dismissed. |
| `onClose` | `() => void` | `undefined` | Callback function when the alert is closed. |

## Example Usage
```tsx
import { Alert } from "liberty-core";

export const AlertExample = () => {
  return (
    <div>
      <Alert variant="success">This is a success alert!</Alert>
      <Alert variant="info">This is an info alert.</Alert>
      <Alert variant="warning" dismissible onClose={() => alert("Alert closed!")}>
        This is a dismissible warning alert.
      </Alert>
      <Alert variant="error">This is an error alert.</Alert>
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  