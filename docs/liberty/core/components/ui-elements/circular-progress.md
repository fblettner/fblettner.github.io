# CircularProgress Component

## Description
The `CircularProgress` component displays a rotating loader, commonly used to indicate an ongoing operation.

## Props
| Prop         | Type            | Default  | Description                                   |
|-------------|----------------|----------|-----------------------------------------------|
| `size`      | `number`       | `40`     | Diameter of the spinner (in pixels). |
| `thickness` | `number`       | `4`      | Thickness of the circular border. |
| `color`     | `string`       | `theme.palette.primary.main` | Spinner color. |
| `trackColor` | `string`      | `theme.palette.text.primary` | Background track color. |
| `speed`     | `number`       | `1.2`    | Speed of rotation (in seconds per full spin). |

## Example Usage
```tsx
import { CircularProgress } from "@nomana-it/liberty-core"

export const CircularProgressExample = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <CircularProgress size={40} />
      <CircularProgress size={50} thickness={5} color="#ff4081" />
      <CircularProgress size={60} thickness={6} trackColor="gray" speed={2} />
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  