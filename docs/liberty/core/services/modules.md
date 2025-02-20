# Modules Configuration

## Description
The `Modules` configuration determines which application features are enabled or disabled.

## Data Structure
| Field Name           | Type       | Description |
|----------------------|-----------|-------------|
| `MODULE_ID`        | `string` | Unique module identifier. |
| `MODULE_DESCRIPTION` | `string` | Description of the module. |
| `MODULE_ENABLED`   | `boolean` | Indicates whether the module is active. |
| `MODULE_PARAMS`    | `JSON`   | Additional configuration for the module. |

## Example Usage
```tsx
import { useAppContext } from "@nomana-it/liberty-core"

export const ModulesExample = () => {
  const { modulesProperties } = useAppContext();

  return (
    <div>
      <h2>Modules Status</h2>
      <ul>
        {Object.entries(modulesProperties).map(([key, module]) => (
          <li key={key}>
            <strong>{key}</strong>: {module.enabled ? "Enabled ✅" : "Disabled ❌"}
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