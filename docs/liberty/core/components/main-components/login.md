# AppsLogin Component

## Description
The `AppsLogin` component provides the authentication interface for Liberty Core applications. It supports:
- **Database & OIDC Authentication**: Works with both standard database login and OpenID Connect.
- **Multi-Application Selection**: Users can choose from available applications.
- **Session Management**: Automatically saves and restores the last used application.
- **Secure Authentication**: Uses encrypted passwords and token-based authentication.

## Features
- **User Credential Validation**: Authenticates users against the backend API.
- **Application Selection**: Displays available applications for login.
- **Persistent Sessions**: Stores last-used application in cookies for auto-selection.
- **Error Handling**: Displays error messages for login failures.
- **Loading State Management**: Shows loading indicator while fetching data.

## Example Usage
```tsx
import { AppProvider, AppsLogin } from "@nomana-it/liberty-core"

export const MyApp = () => {
  return (
    <AppProvider>
      <AppsLogin />
    </AppProvider>
  );
};
```

## Props
| Prop      | Type   | Default | Description |
|-----------|--------|---------|-------------|
| `auth`  | `AuthContext` | - | Handles authentication state and login methods. |
| `modulesProperties` | `ModulesProps` | - | Configuration for authentication and login mechanisms. |
| `getApplications` | `() => Promise<IAppsProps>` | - | Function to fetch available applications. |
| `getToken` | `() => Promise<TokenProps>` | - | Function to retrieve authentication token. |
| `getUser` | `() => Promise<UserProps>` | - | Function to fetch user details after authentication. |

## Login Process
1. **Fetch Available Applications**: Calls `getApplications` to retrieve available apps.
2. **Validate User Credentials**: Checks username/password against the authentication provider.
3. **Retrieve Authentication Token**: Uses `getToken` for secure token-based authentication.
4. **Fetch User Information**: Calls `getUser` to load user profile details.
5. **Connect to Selected Application**: Sets up session, WebSocket connection, and user permissions.

## Error Handling
The `AppsLogin` component provides built-in error messages for:
- **Invalid Credentials**: Displays "Incorrect username or password."
- **Missing Application Selection**: Prompts users to select an application.
- **Unexpected Errors**: Logs exceptions and displays a generic error message.

## Extensibility
Developers can override the default authentication functions in the **AppProvider** to integrate with custom backends.

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 