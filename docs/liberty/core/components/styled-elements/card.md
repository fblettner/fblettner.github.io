# Styled Card Components

## Description
The `Card` component in Liberty Core provides a customizable UI container with support for elevation, transitions, and interactions. The framework also includes multiple predefined `Card` components designed for specific use cases.

## Props
| Prop             | Type               | Default  | Description                                   |
|-----------------|-------------------|----------|-----------------------------------------------|
| `variant`  | `"outlined", "elevated"` | `"outlined"` | Defines the card's border and elevation. |
| `isSelected` | `boolean` | `false` | Highlights the card when selected. |
| `elevation` | `number` | `1` | Applies Material-like shadow elevation. |
| `onClick` | `() => void` | `undefined` | Callback function triggered when clicked. |

## Example Usage

### Basic Styled Card
```tsx
import { Card } from '@nomana-it/liberty-core';

export const StyledCardExample = () => {
  return (
    <Card elevation={2}>
      <CardContent>
        This is a styled card with elevation.
      </CardContent>
    </Card>
  );
};
```

---

# Predefined Styled Cards

Liberty Core provides a collection of predefined styled `Card` components to simplify UI development.

### **General Styled Cards**
- `Card_AppsLogin`
- `Card_Dashboard`
- `CardActionArea_FormsTools`

### **Detailed Predefined Cards**

#### **Card_AppsLogin**
A login card with a hover effect and primary color selection.

```tsx
import { Card_AppsLogin } from '@nomana-it/liberty-core';

<Card_AppsLogin isSelected={true}>
  <CardContent>Login Card</CardContent>
</Card_AppsLogin>
```

#### **Card_Dashboard**
A styled dashboard card with a border and flex support.

```tsx
import { Card_Dashboard } from '@nomana-it/liberty-core';

<Card_Dashboard>
  <CardContent>Dashboard Content</CardContent>
</Card_Dashboard>
```

#### **CardActionArea_FormsTools**
An interactive card action area for form tools.

```tsx
import { CardActionArea_FormsTools } from '@nomana-it/liberty-core';

<CardActionArea_FormsTools>
  <CardContent>Click Me</CardContent>
</CardActionArea_FormsTools>
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 