# LoadingIndicator Component

## Description
The `LoadingIndicator` component provides a visual loading state indicator with a customizable message and color.

## Props

| Prop             | Type                                                                                          | Default   | Description |
|-----------------|-----------------------------------------------------------------------------------------------|-----------|-------------|
| `loadingMessage` | `string` | `t("loading")` | The message displayed below the loading spinner. Uses i18n by default. |
| `color` | `"primary" , "secondary" , "textSecondary" , "error" , "info" , "success" , "warning" , "textPrimary" , "textDisabled" , string` | `"primary"` | Defines the color of the loading message. Can be a theme color or a custom string. |

## Example Usage
```tsx
import { LoadingIndicator } from "@nomana-it/liberty-core"

export const LoadingIndicatorExample = () => {
  return (
    <div>
      <LoadingIndicator />
      <LoadingIndicator loadingMessage="Fetching data..." color="success" />
      <LoadingIndicator loadingMessage="Processing request..." color="warning" />
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  