# Users Configuration

## Description
The `Users Configuration` defines user profiles within the Liberty Framework. Each user has settings such as their role, status, language, theme, and permissions.

## Data Structure
| Field Name       | Type       | Description |
|-----------------|-----------|-------------|
| `USR_ID`        | `string` | Unique user identifier. |
| `USR_PASSWORD`  | `string` | User’s password (hashed or stored securely). |
| `USR_NAME`      | `string` | The full name of the user. |
| `USR_EMAIL`     | `string` | The user’s email address. |
| `USR_STATUS`    | `"Y" | "N"` | Indicates if the user is active. |
| `USR_ADMIN`     | `"Y" | "N"` | Defines if the user has admin privileges. |
| `USR_LANGUAGE`  | `string` | Preferred language of the user. |
| `USR_MODE`      | `"dark" | "light"` | UI theme preference (dark/light mode). |
| `USR_READONLY`  | `"Y" | "N"` | Determines if the user has read-only access. |
| `USR_DASHBOARD` | `number | undefined` | The dashboard assigned to the user. |
| `USR_THEME`     | `string` | The theme applied to the user’s UI. |

## Example Usage
```tsx
import { useAppContext } from "@nomana-it/liberty-core"

export const UsersExample = () => {
  const { userProperties } = useAppContext();

  return (
    <div>
      <h2>Current User</h2>
      <ul>
        <li><strong>Name:</strong> {userProperties.name}</li>
        <li><strong>Email:</strong> {userProperties.email}</li>
        <li><strong>Theme:</strong> {userProperties.theme}</li>
      </ul>
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  