# Theme Configuration

## Description
The **Theme Configuration** in Liberty Core defines the application's primary color scheme, typography, background styles, and dark mode behavior.

It provides a dynamic way to **override** and **customize** themes using the **AppProvider**.

## Theme Structure

### Theme Colors
| Key         | Light Mode Value | Dark Mode Value | Description |
|------------|----------------|----------------|-------------|
| `primary` | `#1976d2`  | `#607d8b`  | Primary brand color. |
| `secondary` | `#ff9800`  | `#ffc107`  | Secondary accent color. |
| `background` | Light gradient | Dark gradient | Defines the UI background. |
| `color` | `#333333`  | `#E1D9D1`  | Default text color. |

### Theme Fields
| Field Name       | Type    | Description |
|-----------------|--------|-------------|
| `palette.mode` | `"light" | "dark"` | Determines the color scheme. |
| `palette.primary.main` | `string` | Primary color. |
| `palette.secondary.main` | `string` | Secondary color. |
| `background.default` | `string` | Main background color. |
| `background.loginPage` | `string` | Background gradient for login page. |
| `spacing` | `(factor: number) => string` | Function to set spacing. |
| `shadows` | `string[]` | Shadow presets for components. |

## Example Usage
```tsx
import { AppProvider, LYThemeProvider } from "liberty-core";
import { theme } from "liberty-core";

export const ThemeExample = () => {
  return (
    <AppProvider>
      <LYThemeProvider customTheme={theme}>
        <MyApp />
      </LYThemeProvider>
    </AppProvider>
  );
};

const MyApp = () => {
  return (
    <div>
      <h2>Theming with Liberty Core</h2>
      <p>The theme is applied dynamically using the theme provider.</p>
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  