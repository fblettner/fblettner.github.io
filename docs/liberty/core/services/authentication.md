# Authentication & Token Management

## Description
The authentication system in Liberty Framework uses an access token mechanism. A user provides their credentials, and if authenticated, they receive an access token.

## Data Structure
### **Successful Response**
| Field Name   | Type   | Description |
|-------------|--------|-------------|
| `access_token`  | `string` | The generated token for the session. |
| `token_type`    | `string` | Type of token, usually `"bearer"`. |
| `status`       | `"success"` | Indicates authentication was successful. |
| `message`      | `string` | Message confirming login success. |

### **Failed Response (Login Error)**
| Field Name   | Type   | Description |
|-------------|--------|-------------|
| `access_token`  | `string` | Empty, as login failed. |
| `token_type`    | `string` | Type of token, usually `"bearer"`. |
| `status`       | `"failed"` | Indicates authentication failure. |
| `message`      | `string` | Error message `"loginError"`. |

### **Failed Response (Password Error)**
| Field Name   | Type   | Description |
|-------------|--------|-------------|
| `access_token`  | `string` | Empty, as authentication failed. |
| `token_type`    | `string` | Type of token, usually `"bearer"`. |
| `status`       | `"failed"` | Indicates authentication failure. |
| `message`      | `string` | Error message `"passwordError"`. |

## Example Usage
```tsx
import { getToken } from "@nomana-it/liberty-core"

export const AuthenticationExample = async () => {
  const response = await getToken("admin", "admin");

  if (response.status === "success") {
    console.log("Access Token:", response.access_token);
  } else {
    console.error("Authentication Failed:", response.message);
  }
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  