---
description: "Liberty API — backend for Liberty Framework. JWT/OAuth2 authentication, database operations, modules and framework endpoints reference."
keywords: [Liberty API, REST API, FastAPI, JWT, OAuth2, authentication, framework backend]
---

# Liberty API

**Description:** 
**Liberty API** provides a powerful and scalable backend for managing authentication, 
database operations, and framework functionalities in the **Liberty Framework**. 

### 🔹 Key Features:
- **Authentication & Authorization**: Secure endpoints with JWT tokens and OAuth2.
- **Database Management**: Query, insert, update, and delete records across multiple pools.
- **Framework Controls**: Manage modules, applications, themes, and logs.
- **Security & Encryption**: Encrypt data and ensure safe database access.
- **Logging & Auditing**: Retrieve and analyze logs for security and debugging.

### 🔹 Authentication
- **`/api/auth/token`** - Generate a JWT token for authentication.
- **`/api/auth/user`** - Retrieve authenticated user details.

### 🔹 Database Operations
- **`/api/db/check`** - Validate database connection.
- **`/api/db/query`** - Retrieve, insert, update, or delete records.
- **`/api/db/audit/{table}/{user}`** - Audit changes on a specific table.

### 🔹 Framework Features
- **`/api/fmw/modules`** - Retrieve framework modules.
- **`/api/fmw/applications`** - Retrieve available applications.
- **`/api/fmw/themes`** - Manage application themes.

**🔗 Explore the API using Swagger UI (`/api/test`) or Redoc (`/api`).**


**Version:** 1.0.0

## Authentication

### AUTH - User

Retrieve user information.

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/auth/user`**

:::info[Query Parameters]
- **`user`** *(in query)*: User ID.
- **`pool`** *(in query)*: The database pool alias to retrieve the user. (e.g., `default`, `libnsx1`)
- **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
:::

**📥 Responses:**

<details>
<summary>Response `200`: Get user information</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [
            {
                "ROW_ID": 1,
                "USR_ID": "demo",
                "USR_PASSWORD": "ENC:...",
                "USR_NAME": "Demo User",
                "USR_EMAIL": "demo@liberty.fr",
                "USR_STATUS": "Y",
                "USR_ADMIN": "N",
                "USR_LANGUAGE": "fr",
                "USR_MODE": "light",
                "USR_READONLY": "Y",
                "USR_DASHBOARD": 1,
                "USR_THEME": "liberty"
            }
        ],
        "status": "success"
    }
    ```

</details>

<details>
<summary>Response `422`: Unprocessable Entity</summary>

- **Content-Type:** `application/json`

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Query execution failed: (sqlalchemy.exc.InvalidRequestError) A value is required for bind parameter"
    }
    ```

</details>

---

### AUTH - Token

Generate a JWT token for the user.

<span style={{background: 'blue', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>POST</span> **`/api/auth/token`**

:::info[Query Parameters]
- **`pool`** *(in query)*: The database pool alias to retrieve the user. (e.g., `default`, `libnsx1`)
- **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
- **`type`** *(in query)*: Authentication type, from database or using OIDC. Valid values: `database`, `oidc`
:::

:::info[Request Body]
- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "properties": {
            "user": {
                "type": "string",
                "title": "User"
            },
            "password": {
                "anyOf": [
                    {
                        "type": "string"
                    },
                    {
                        "type": "null"
                    }
                ],
                "title": "Password"
            }
        },
        "type": "object",
        "required": [
            "user",
            "password"
        ],
        "title": "LoginRequest"
    }
    ```
:::

**📥 Responses:**

<details>
<summary>Response `200`: Authentication successful, JWT token generated</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "access_token": "....",
        "token_type": "bearer",
        "status": "success",
        "message": "Authentication successful"
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Authentication failed"
    }
    ```

</details>

---

## Framework

### FMW - Applications

Retrieve Applications.

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/fmw/applications`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Get Applications Available</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "success",
        "pool": "default",
        "items": [
            {
                "ROW_ID": 1,
                "APPS_ID": 1,
                "APPS_NAME": "LIBERTY",
                "APPS_DESCRIPTION": "Framework Liberty",
                "APPS_POOL": "default",
                "APPS_OFFSET": 5000,
                "APPS_LIMIT": 10000,
                "APPS_VERSION": 500,
                "APPS_DASHBOARD": 1,
                "APPS_THEME": "liberty"
            },
            {
                "ROW_ID": 2,
                "APPS_ID": 2,
                "APPS_NAME": "NOMASX1",
                "APPS_DESCRIPTION": "Rights, licenses and SOD",
                "APPS_POOL": "default",
                "APPS_OFFSET": 5000,
                "APPS_LIMIT": 10000,
                "APPS_VERSION": 500,
                "APPS_DASHBOARD": 1,
                "APPS_THEME": "modernBluePurple"
            }
        ],
        "rowCount": 2,
        "meta_data": [
            {
                "name": "ROW_ID",
                "type": "int"
            },
            {
                "name": "MODULE_ID",
                "type": "str"
            },
            {
                "name": "MODULE_DESCRIPTION",
                "type": "str"
            },
            {
                "name": "MODULE_ENABLED",
                "type": "str"
            },
            {
                "name": "MODULE_PARAMS",
                "type": "UNKNOWN"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Query execution failed: (sqlalchemy.exc.InvalidRequestError) A value is required for bind parameter"
    }
    ```

</details>

---

### FMW - Modules

Retrieve Modules.

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/fmw/modules`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Get Modules Details</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "success",
        "pool": "default",
        "items": [
            {
                "ROW_ID": 1,
                "MODULE_ID": "menus",
                "MODULE_DESCRIPTION": "Enable Drawer Menus",
                "MODULE_ENABLED": "Y"
            },
            {
                "ROW_ID": 2,
                "MODULE_ID": "grafana",
                "MODULE_DESCRIPTION": "Enable Grafana Dashboard",
                "MODULE_ENABLED": "N"
            },
            {
                "ROW_ID": 3,
                "MODULE_ID": "dev",
                "MODULE_DESCRIPTION": "Enable Development Mode",
                "MODULE_ENABLED": "Y"
            },
            {
                "ROW_ID": 4,
                "MODULE_ID": "sentry",
                "MODULE_DESCRIPTION": "Enable Sentry",
                "MODULE_ENABLED": "N",
                "MODULE_PARAMS": {
                    "url": "https://sentry.io",
                    "replay": "false",
                    "clientid": "nomana",
                    "platform": "dev"
                }
            },
            {
                "ROW_ID": 5,
                "MODULE_ID": "debug",
                "MODULE_DESCRIPTION": "Enable Debug",
                "MODULE_ENABLED": "N"
            },
            {
                "ROW_ID": 6,
                "MODULE_ID": "login",
                "MODULE_DESCRIPTION": "Enable Embedded Login",
                "MODULE_ENABLED": "Y"
            }
        ],
        "rowCount": 6,
        "meta_data": [
            {
                "name": "ROW_ID",
                "type": "int"
            },
            {
                "name": "MODULE_ID",
                "type": "str"
            },
            {
                "name": "MODULE_DESCRIPTION",
                "type": "str"
            },
            {
                "name": "MODULE_ENABLED",
                "type": "str"
            },
            {
                "name": "MODULE_PARAMS",
                "type": "UNKNOWN"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Query execution failed: (sqlalchemy.exc.InvalidRequestError) A value is required for bind parameter"
    }
    ```

</details>

---

### FMW - Themes

Retrieve Themes Definition.

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/fmw/themes`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Get Themes Details</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "success",
        "pool": "default",
        "items": [
            {
                "ROW_ID": 1,
                "THM_NAME": "modernBluePurple",
                "TCL_KEY": "primary",
                "TCL_LIGHT": "#3f51b5",
                "TCL_DARK": "#673ab7"
            },
            {
                "ROW_ID": 2,
                "THM_NAME": "luxuryDarkGold",
                "TCL_KEY": "secondary",
                "TCL_LIGHT": "#607d8b",
                "TCL_DARK": "rgb(206, 203, 203)"
            }
        ],
        "rowCount": 2,
        "meta_data": [
            {
                "name": "ROW_ID",
                "type": "int"
            },
            {
                "name": "MODULE_ID",
                "type": "str"
            },
            {
                "name": "MODULE_DESCRIPTION",
                "type": "str"
            },
            {
                "name": "MODULE_ENABLED",
                "type": "str"
            },
            {
                "name": "MODULE_PARAMS",
                "type": "UNKNOWN"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Query execution failed: (sqlalchemy.exc.InvalidRequestError) A value is required for bind parameter"
    }
    ```

</details>

---

### FMW - Get logs

Get all current logs and upload to cache

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/logs`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Successful Response</summary>

- **Content-Type:** `application/json`

</details>

---

### FMW - Get log details

Get details for a log id from the cache

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/logs/details`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Successful Response</summary>

- **Content-Type:** `application/json`

</details>

---

### FMW - Encrypt

Encrypt the input received

<span style={{background: 'blue', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>POST</span> **`/api/fmw/encrypt`**

:::info[Query Parameters]
- **`plain_text`** *(in query)*: Text to be encrypted
:::

**📥 Responses:**

<details>
<summary>Response `200`: Encryption successful</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "encrypted": "ENC:wNMyALbXf....."
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Failed to encrypt data: (sqlalchemy.dialects.postgresql.asyncpg.ProgrammingError)"
    }
    ```

</details>

---

### FMW - Push logs

Push logs to files in json and plain text format

<span style={{background: 'blue', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>POST</span> **`/api/logs`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Successful Response</summary>

- **Content-Type:** `application/json`

</details>

---

## Database

### DATABASE - Check

Performs a basic check to ensure the database connection is functional. Returns the current date if the connection is successful.

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/db/check`**

:::info[Query Parameters]
- **`framework_pool`** *(in query)*: Pool alias to retrieve the database definition. (e.g., `default`, `libnsx1`). *(Default: `default`)*
- **`target_pool`** *(in query)*: Pool alias of the database to check. (e.g., `nomasx1`, `nomajde`). *(Default: `default`)*
:::

**📥 Responses:**

<details>
<summary>Response `200`: Database connection is successful</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "success",
        "rows": [
            {
                "ROW_ID": 1,
                "CURRENT_DATE": "2025-01-27T08:14:13.809494+00:00"
            }
        ],
        "rowCount": 1,
        "meta_data": [
            {
                "name": "ROW_ID",
                "type": "int"
            },
            {
                "name": "CURRENT_DATE",
                "type": "datetime"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Query execution failed: (sqlalchemy.dialects.postgresql.asyncpg.ProgrammingError)"
    }
    ```

</details>

---

### DATABASE - Close

Close all database connections for the specified pool alias.

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/db/close`**

:::info[Query Parameters]
- **`pool`** *(in query)*: Pool alias for the database to close. (e.g., `default`, `libnsx1`). *(Default: `default`)*
:::

**📥 Responses:**

<details>
<summary>Response `200`: Pool closed successfully</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "success",
        "message": "disconnected"
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Requested pool `alias` not found"
    }
    ```

</details>

---

### DATABASE - Open

Open a connection to the database using the specified pool alias.

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/db/open`**

:::info[Query Parameters]
- **`framework_pool`** *(in query)*: Pool alias to retrieve the database definition. (e.g., `default`, `libnsx1`). *(Default: `default`)*
- **`target_pool`** *(in query)*: Pool alias of the database to open. (e.g., `libnsx1`, `nomasx1`, `nomajde`). *(Default: `default`)*
:::

**📥 Responses:**

<details>
<summary>Response `200`: Pool opened successfully</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "success",
        "message": "connected"
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Requested pool `alias` not found"
    }
    ```

</details>

---

## Query

### QUERY - Select

Retrieve data or metadata from the database based on query parameters. Supports filtering, language and pagination.

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/db/query`**

:::info[Query Parameters]
- **`source`** *(in query)*: The source to retrieve the query definition. Valid values: `framework`, `query`
- **`type`** *(in query)*: The type of query, get data or metadata. Valid values: `table`, `columns`.
- **`pool`** *(in query)*: The database pool alias to retrieve the query definition. (e.g., `default`, `libnsx1`)
- **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
- **`query`** *(in query)*: The query ID to execute. (e.g., `1`, `2`)
- **`override_pool`** *(in query)*: Override the default pool set in the query definition. (e.g., `default`, `libnsx1`)
- **`q`** *(in query)*: Filters to apply to the query in JSON format (e.g., `[{'APPS_ID':{'=':10}, 'APPS_NAME':{'like':'LIBERTY%'} }]`).
- **`language`** *(in query)*: The language for query execution. (e.g., `en`, `fr`). *(Default: `en`)*
- **`offset`** *(in query)*: The number of rows to skip before starting to fetch. *(Default: `0`)*
- **`limit`** *(in query)*: The maximum number of rows to return. *(Default: `1000`)*
- **`params`** *(in query)*: Additional parameters in JSON format to replace variable in a query (e.g., `[{'APPS_ID': 10}]`).
:::

**📥 Responses:**

<details>
<summary>Response `200`: Data retrieved successfully</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [
            {
                "ROW_ID": 1,
                "DD_ID": "ACT_AUDIT_DATE",
                "DD_LABEL": "Date (Audit)"
            },
            {
                "ROW_ID": 2,
                "DD_ID": "ACT_ID",
                "DD_LABEL": "Action ID"
            }
        ],
        "status": "success",
        "metadata": [
            {
                "name": "ROW_ID",
                "type": "int"
            },
            {
                "name": "DD_ID",
                "type": "str"
            },
            {
                "name": "DD_LABEL",
                "type": "str"
            }
        ],
        "hasMore": true,
        "limit": 100,
        "offset": 0,
        "count": 2
    }
    ```

</details>

<details>
<summary>Response `400`: Bad Request</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Invalid JSON format in request query."
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": {
            "items": [
                {
                    "message": "Error: Example error message"
                }
            ],
            "status": "error",
            "hasMore": false,
            "limit": 100,
            "offset": 0,
            "count": 0,
            "query": "SELECT * FROM table_name"
        }
    }
    ```

</details>

---

### QUERY - Audit

Audit user actions on a table.

<span style={{background: 'blue', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>POST</span> **`/api/db/audit/{table}/{user}`**

:::info[Query Parameters]
- **`table`** *(in path)*: No description (**Required**)
- **`user`** *(in path)*: No description (**Required**)
:::

**📥 Responses:**

<details>
<summary>Response `200`: Data inserted/updated successfully</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [],
        "status": "success",
        "count": 0
    }
    ```

</details>

<details>
<summary>Response `400`: Bad Request</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Request body cannot be empty. JSON object with key-value pairs is required."
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": {
            "items": [
                {
                    "message": "Error: Query execution failed: Query execution failed: INSERT INTO...",
                    "line": {
                        "field1": "<string>",
                        "field2": "<string>"
                    }
                }
            ],
            "status": "error",
            "count": 0
        }
    }
    ```

</details>

---

### QUERY - Insert

Insert data into a table.

<span style={{background: 'blue', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>POST</span> **`/api/db/query`**

:::info[Query Parameters]
- **`source`** *(in query)*: The source to retrieve the query definition. Valid values: `framework`, `query`
- **`type`** *(in query)*: The type of query, get data or metadata. Valid values: `table`, `columns`.
- **`pool`** *(in query)*: The database pool alias to retrieve the query definition. (e.g., `default`, `libnsx1`)
- **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
- **`query`** *(in query)*: The query ID to execute. (e.g., `1`, `2`)
- **`override_pool`** *(in query)*: Override the default pool set in the query definition. (e.g., `default`, `libnsx1`)
:::

:::info[Request Body]
- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "type": "object",
        "description": "JSON object with key-value pairs is required.",
        "title": "Body"
    }
    ```
:::

**📥 Responses:**

<details>
<summary>Response `200`: Data inserted/updated successfully</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [],
        "status": "success",
        "count": 0
    }
    ```

</details>

<details>
<summary>Response `400`: Bad Request</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Request body cannot be empty."
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": {
            "items": [
                {
                    "message": "Error: Query execution failed: Query execution failed: INSERT INTO...",
                    "line": {
                        "field1": "<string>",
                        "field2": "<string>"
                    }
                }
            ],
            "status": "error",
            "count": 0
        }
    }
    ```

</details>

---

### QUERY - Update

Update data into a table.

<span style={{background: 'purple', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>PUT</span> **`/api/db/query`**

:::info[Query Parameters]
- **`source`** *(in query)*: The source to retrieve the query definition. Valid values: `framework`, `query`
- **`type`** *(in query)*: The type of query, get data or metadata. Valid values: `table`, `columns`.
- **`pool`** *(in query)*: The database pool alias to retrieve the query definition. (e.g., `default`, `libnsx1`)
- **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
- **`query`** *(in query)*: The query ID to execute. (e.g., `1`, `2`)
- **`override_pool`** *(in query)*: Override the default pool set in the query definition. (e.g., `default`, `libnsx1`)
:::

:::info[Request Body]
- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "type": "object",
        "description": "JSON object with key-value pairs is required.",
        "title": "Body"
    }
    ```
:::

**📥 Responses:**

<details>
<summary>Response `200`: Data inserted/updated successfully</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [],
        "status": "success",
        "count": 0
    }
    ```

</details>

<details>
<summary>Response `400`: Bad Request</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Request body cannot be empty. JSON object with key-value pairs is required."
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": {
            "items": [
                {
                    "message": "Error: Query execution failed: Query execution failed: INSERT INTO...",
                    "line": {
                        "field1": "<string>",
                        "field2": "<string>"
                    }
                }
            ],
            "status": "error",
            "count": 0
        }
    }
    ```

</details>

---

### QUERY - Delete

Delete data into a table.

<span style={{background: 'red', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>DELETE</span> **`/api/db/query`**

:::info[Query Parameters]
- **`source`** *(in query)*: The source to retrieve the query definition. Valid values: `framework`, `query`
- **`type`** *(in query)*: The type of query, get data or metadata. Valid values: `table`, `columns`.
- **`pool`** *(in query)*: The database pool alias to retrieve the query definition. (e.g., `default`, `libnsx1`)
- **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
- **`query`** *(in query)*: The query ID to execute. (e.g., `1`, `2`)
- **`override_pool`** *(in query)*: Override the default pool set in the query definition. (e.g., `default`, `libnsx1`)
:::

:::info[Request Body]
- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "type": "object",
        "description": "JSON object with key-value pairs is required.",
        "title": "Body"
    }
    ```
:::

**📥 Responses:**

<details>
<summary>Response `200`: Data inserted/updated successfully</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [],
        "status": "success",
        "count": 0
    }
    ```

</details>

<details>
<summary>Response `400`: Bad Request</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Request body cannot be empty. JSON object with key-value pairs is required."
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": {
            "items": [
                {
                    "message": "Error: Query execution failed: Query execution failed: INSERT INTO...",
                    "line": {
                        "field1": "<string>",
                        "field2": "<string>"
                    }
                }
            ],
            "status": "error",
            "count": 0
        }
    }
    ```

</details>

---

## Setup

### SETUP - Current

Get the current version deployed

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/setup/current`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Installation successful</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [],
        "status": "success",
        "count": 0
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Setup failed"
    }
    ```

</details>

---

### SETUP - Downgrade

Downgrade databases to a specific version

<span style={{background: 'blue', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>POST</span> **`/api/setup/downgrade/{version}`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Installation successful</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [],
        "status": "success",
        "count": 0
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Setup failed"
    }
    ```

</details>

---

### SETUP - Installation

Configure the postgres database.

<span style={{background: 'blue', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>POST</span> **`/api/setup/install`**

:::info[Query Parameters]
- **None**
:::

:::info[Request Body]
- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "properties": {
            "host": {
                "type": "string",
                "title": "Host"
            },
            "port": {
                "type": "integer",
                "title": "Port"
            },
            "database": {
                "type": "string",
                "title": "Database"
            },
            "user": {
                "type": "string",
                "title": "User"
            },
            "password": {
                "type": "string",
                "title": "Password"
            }
        },
        "type": "object",
        "required": [
            "host",
            "port",
            "database",
            "user",
            "password"
        ],
        "title": "SetupRequest"
    }
    ```
:::

**📥 Responses:**

<details>
<summary>Response `200`: Installation successful</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [],
        "status": "success",
        "count": 0
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Setup failed"
    }
    ```

</details>

---

### SETUP - Revision

Create a new revision for the database

<span style={{background: 'blue', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>POST</span> **`/api/setup/revision`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Installation successful</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [],
        "status": "success",
        "count": 0
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Setup failed"
    }
    ```

</details>

---

### SETUP - Upgrade

Upgrade databases to latest version

<span style={{background: 'blue', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>POST</span> **`/api/setup/upgrade`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Installation successful</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [],
        "status": "success",
        "count": 0
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Setup failed"
    }
    ```

</details>

---

## Export

### EXPORT - Repository for Deployment

Export all tables models and data.

<span style={{background: 'green', fontSize: '16px', paddingLeft: '10px', paddingRight: '10px'}}>GET</span> **`/api/export/repository`**

:::info[Query Parameters]
- **None**
:::

**📥 Responses:**

<details>
<summary>Response `200`: Installation successful</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "items": [],
        "status": "success",
        "count": 0
    }
    ```

</details>

<details>
<summary>Response `422`: Validation Error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "detail": [
            {
                "loc": [
                    "query",
                    "name"
                ],
                "msg": "field required",
                "type": "value_error.missing"
            },
            {
                "loc": [
                    "query",
                    "quantity"
                ],
                "msg": "value is not a valid integer",
                "type": "type_error.integer"
            }
        ]
    }
    ```

</details>

<details>
<summary>Response `500`: Internal server error</summary>

- **Content-Type:** `application/json`
  - **Example:**

    ```json
    {
        "status": "failed",
        "message": "Setup failed"
    }
    ```

</details>

---

