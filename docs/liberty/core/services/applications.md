# Applications Configuration

## Description
The `Applications Configuration` defines multiple applications within the Liberty Framework. Each application has specific settings such as offset, limit, version, dashboard, and theme.

## Data Structure
| Field Name       | Type       | Description |
|-----------------|-----------|-------------|
| `APPS_ID`        | `number` | Unique application identifier. |
| `APPS_NAME`      | `string` | The name of the application. |
| `APPS_DESCRIPTION` | `string` | Description of the application’s purpose. |
| `APPS_POOL`      | `string` | The database connection pool used by the application. |
| `APPS_OFFSET`    | `number` | The default offset value for queries. |
| `APPS_LIMIT`     | `number` | The maximum number of records per query. |
| `APPS_VERSION`   | `string` | The current version of the application. |
| `APPS_DASHBOARD` | `number | undefined` | The dashboard ID associated with the app. |
| `APPS_THEME`     | `string` | The theme applied to the application. |
| `APPS_SESSION`   | `string` | The session mode (e.g., `session`). |
| `APPS_JWT_TOKEN` | `string` | JWT token for authentication (if applicable). |

## Example Usage
```tsx
import { useAppContext } from "@nomana-it/liberty-core"

export const ApplicationsExample = () => {
  const { appsProperties } = useAppContext();

  return (
    <div>
      <h2>Available Applications</h2>
      <ul>
        {Object.entries(appsProperties).map(([key, app]) => (
          <li key={key}>
            <strong>{app.name}</strong> - {app.description} (Version: {app.version})
          </li>
        ))}
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