# Dashboard Configuration

## Description
The **Dashboard Configuration** defines the structure and content of dashboards within the Liberty Core framework.  
A dashboard consists of **header metadata** and **content components** that can be dynamically rendered.

### Header Fields
| Field Name       | Type    | Description |
|-----------------|--------|-------------|
| `DSH_ID`      | Number | Unique identifier for the dashboard. |
| `DSH_LABEL`   | String | Name of the dashboard. |
| `DSH_ROW`     | Number | Number of rows in the layout. |
| `DSH_COLUMN`  | Number | Number of columns in the layout. |

### Content Fields
| Field Name         | Type    | Description |
|-------------------|--------|-------------|
| `DSH_ID`        | Number | Dashboard ID it belongs to. |
| `DSH_COL_ID`    | Number | Column identifier. |
| `DSH_DISPLAY_TITLE` | String | Whether to display the title ("Y" or "N"). |
| `DSH_TITLE`     | String | Title of the dashboard component. |
| `DSH_ROW`       | Number | Row position in the layout. |
| `DSH_COLUMN`    | Number | Column position in the layout. |
| `DSH_COMPONENT` | Enum   | Component type (e.g., `FormsContent`). |
| `DSH_CONTENT`   | JSX    | The actual component to be displayed. |

## Example Usage
```tsx
import { getDashboard } from "liberty-core";

export const DashboardExample = async () => {
  const dashboard = await getDashboard(1);

  return (
    <div>
      <h2>{dashboard?.header.DSH_LABEL}</h2>
      <ul>
        {dashboard?.content.map((item, index) => (
          <li key={index}>
            <strong>{item.DSH_TITLE}</strong> (Row: {item.DSH_ROW}, Column: {item.DSH_COLUMN})
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