# TranslationProvider Component

## Description
The `TranslationProvider` is a wrapper for internationalization (i18n) using **i18next** in the Liberty Framework. It ensures that translations are available across the application.

### Features
- Uses **i18next** for managing translations.
- Provides language switching support.
- Works seamlessly with the **AppProvider**.

## Props
| Prop       | Type       | Default | Description |
|-----------|-----------|---------|-------------|
| `children` | `ReactNode` | -       | Components wrapped by the translation provider. |

## Example Usage
To use the `TranslationProvider`, wrap it around your application inside **ReactDOM.createRoot**:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider, TranslationProvider } from "liberty-core";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <AppProvider useAuth={oidcUseAuth}>
        <TranslationProvider>
            <App />
        </TranslationProvider>
    </AppProvider>
  </React.StrictMode>
);
```

## Notes
- The `TranslationProvider` should always wrap the application **inside** the `AppProvider` to ensure translations are available globally.
- It integrates with **i18next**, and translations can be managed dynamically.
`;

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  