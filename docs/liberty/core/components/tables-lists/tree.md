# Tree Component

## Description
The `Tree` component is used to display hierarchical data in an expandable and collapsible format.

## Props
| Prop           | Type                     | Default | Description                                      |
|---------------|------------------------|---------|--------------------------------------------------|
| `nodes`      | `TreeNode[]`          | `[]`   | Array of tree nodes to display.                 |
| `onDoubleClick` | `(event, node) => void` | `undefined` | Callback triggered on double-clicking a node. |
| `onMouseDown`  | `(event, node) => void` | `undefined` | Callback triggered when mouse is pressed.       |
| `onTouchStart` | `(event, node) => void` | `undefined` | Callback triggered when touch starts on a node. |
| `onTouchEnd`   | `() => void`         | `undefined` | Callback triggered when touch ends.            |

## Example Usage
```tsx
import { Tree } from "@nomana-it/liberty-core"

const treeData = [
  { id: "1", label: "Root", children: [
      { id: "1-1", label: "Child 1" },
      { id: "1-2", label: "Child 2", children: [
          { id: "1-2-1", label: "Grandchild 1" },
      ]},
  ]},
];

export const TreeExample = () => {
  return <Tree nodes={treeData} />;
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 