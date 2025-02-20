# ErrorBoundary Component

## Description
The `ErrorBoundary` component is a React class component that catches JavaScript errors anywhere in its child component tree. It prevents the entire application from crashing by displaying a fallback UI and logging the error using Sentry.

### Features:
- **Catches errors in the component tree** and prevents the app from breaking.
- **Uses Sentry for error reporting** when Sentry is available.
- **Provides a customizable fallback UI**.
- **Supports React class component lifecycle methods for error handling.**

## Props
| Prop      | Type      | Default | Description |
|-----------|----------|---------|-------------|
| `children` | `ReactNode` | - | Components wrapped inside the boundary. |
| `fallback` | `ReactNode` | - | Optional fallback UI when an error occurs. |

## Example Usage
```tsx
import { ErrorBoundary } from "@nomana-it/liberty-core"
import { MyComponent } from "./MyComponent";

export const MyApp = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <MyComponent />
    </ErrorBoundary>
  );
};
```

## Implementation
The `ErrorBoundary` component utilizes React lifecycle methods to catch and handle errors.
```tsx
import { Component, ErrorInfo, ReactNode } from "react";
import { Div } from "@ly_styles/Div";
import * as Sentry from "@sentry/react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    if (Sentry.getClient()) {
      Sentry.captureException(error);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <Div>An unexpected error has occurred.</Div>;
    }
    return this.props.children;
  }
}
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  