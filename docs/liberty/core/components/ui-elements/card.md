# Card Component

## Description
The `Card` component is a versatile container that can display structured content, such as headers, actions, and clickable areas.

## Props
### `Card`
| Prop        | Type               | Default  | Description                                      |
|------------|-------------------|----------|--------------------------------------------------|
| `isSelected` | `boolean` | `false` | Adds a selected state style to the card. |

### `CardHeader`
| Prop        | Type               | Default  | Description                                      |
|------------|-------------------|----------|--------------------------------------------------|
| `title`  | `string`         | `""`    | The title displayed at the top of the card. |
| `action` | `ReactNode`       | `null`  | Additional action elements (e.g., buttons). |

### `CardContent`
| Prop        | Type               | Default  | Description                                      |
|------------|-------------------|----------|--------------------------------------------------|
| `children` | `ReactNode` | `null` | Content inside the card body. |

### `CardActionArea`
| Prop        | Type               | Default  | Description                                      |
|------------|-------------------|----------|--------------------------------------------------|
| `onClick` | `() => void` | `undefined` | Callback when the area is clicked. |
| `disabled` | `boolean` | `false` | Disables the action area. |
| `href` | `string` | `""` | Optional link instead of a button. |
| `target` | `"_blank" , "_self" , "_parent" , "_top"` | `undefined` | Specifies how the link opens. |

### `CardActions`
| Prop        | Type               | Default  | Description                                      |
|------------|-------------------|----------|--------------------------------------------------|
| `justifyContent` | `"flex-start" , "center" , "flex-end" , "space-between"` | `"flex-end"` | Controls the alignment of action buttons. |

## Example Usage
```tsx
import { Card, CardHeader, CardContent, CardActionArea, CardActions, Button } from "@nomana-it/liberty-core"

export const CardExample = () => {
  return (
    <Card isSelected={true}>
      <CardHeader title="Card Title" action={<Button variant="text">Edit</Button>} />
      <CardContent>
        This is the content inside the card. You can add text, images, or other elements here.
      </CardContent>
      <CardActionArea onClick={() => alert("Card Clicked!")}>
        Clickable Area
      </CardActionArea>
      <CardActions>
        <Button variant="contained" onClick={() => alert("Action Clicked!")}>Action</Button>
      </CardActions>
    </Card>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  