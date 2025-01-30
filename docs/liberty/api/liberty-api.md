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

<span style="background:green; font-size: 16px; padding-left: 10px; padding-right: 10px">GET</span> **`/api/auth/user`**

!!! abstract "Query Parameters"
    - **`user`** *(in query)*: User ID.
    - **`pool`** *(in query)*: The database pool alias to retrieve the user. (e.g., `default`, `libnsx1`)
    - **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
**📥 Responses:**

??? success "Response `200`: Get user information"
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
??? warning "Response `422`: Unprocessable Entity"
    - **Content-Type:** `application/json`
??? danger "Response `500`: Internal server error"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Query execution failed: (sqlalchemy.exc.InvalidRequestError) A value is required for bind parameter"
        }
        ```

---

### AUTH - Token

Generate a JWT token for the user.

<span style="background:blue; font-size: 16px; padding-left: 10px; padding-right: 10px">POST</span> **`/api/auth/token`**

!!! abstract "Query Parameters"
    - **`pool`** *(in query)*: The database pool alias to retrieve the user. (e.g., `default`, `libnsx1`)
    - **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
    - **`type`** *(in query)*: Authentication type, from database or using OIDC. Valid values: `database`, `oidc`
!!! abstract "Request Body"
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
**📥 Responses:**

??? success "Response `200`: Authentication successful, JWT token generated"
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
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Authentication failed"
        }
        ```

---

## Framework

### FMW - Applications

Retrieve Applications.

<span style="background:green; font-size: 16px; padding-left: 10px; padding-right: 10px">GET</span> **`/api/fmw/applications`**

!!! abstract "Query Parameters"
    - **None**

**📥 Responses:**

??? success "Response `200`: Get Applications Available"
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
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Query execution failed: (sqlalchemy.exc.InvalidRequestError) A value is required for bind parameter"
        }
        ```

---

### FMW - Modules

Retrieve Modules.

<span style="background:green; font-size: 16px; padding-left: 10px; padding-right: 10px">GET</span> **`/api/fmw/modules`**

!!! abstract "Query Parameters"
    - **None**

**📥 Responses:**

??? success "Response `200`: Get Modules Details"
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
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Query execution failed: (sqlalchemy.exc.InvalidRequestError) A value is required for bind parameter"
        }
        ```

---

### FMW - Themes

Retrieve Themes Definition.

<span style="background:green; font-size: 16px; padding-left: 10px; padding-right: 10px">GET</span> **`/api/fmw/themes`**

!!! abstract "Query Parameters"
    - **None**

**📥 Responses:**

??? success "Response `200`: Get Themes Details"
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
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Query execution failed: (sqlalchemy.exc.InvalidRequestError) A value is required for bind parameter"
        }
        ```

---

### FMW - Get logs

Get all current logs and upload to cache

<span style="background:green; font-size: 16px; padding-left: 10px; padding-right: 10px">GET</span> **`/api/logs`**

!!! abstract "Query Parameters"
    - **None**

**📥 Responses:**

??? success "Response `200`: Successful Response"
    - **Content-Type:** `application/json`

---

### FMW - Get log details

Get details for a log id from the cache

<span style="background:green; font-size: 16px; padding-left: 10px; padding-right: 10px">GET</span> **`/api/logs/details`**

!!! abstract "Query Parameters"
    - **None**

**📥 Responses:**

??? success "Response `200`: Successful Response"
    - **Content-Type:** `application/json`

---

### FMW - Encrypt

Encrypt the input received

<span style="background:blue; font-size: 16px; padding-left: 10px; padding-right: 10px">POST</span> **`/api/fmw/encrypt`**

!!! abstract "Query Parameters"
    - **`plain_text`** *(in query)*: Text to be encrypted
**📥 Responses:**

??? success "Response `200`: Encryption successful"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "encrypted": "ENC:wNMyALbXf....."
        }
        ```
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Failed to encrypt data: (sqlalchemy.dialects.postgresql.asyncpg.ProgrammingError)"
        }
        ```

---

### FMW - Push logs

Push logs to files in json and plain text format

<span style="background:blue; font-size: 16px; padding-left: 10px; padding-right: 10px">POST</span> **`/api/logs`**

!!! abstract "Query Parameters"
    - **None**

**📥 Responses:**

??? success "Response `200`: Successful Response"
    - **Content-Type:** `application/json`

---

## Database

### DATABASE - Check

Performs a basic check to ensure the database connection is functional. Returns the current date if the connection is successful.

<span style="background:green; font-size: 16px; padding-left: 10px; padding-right: 10px">GET</span> **`/api/db/check`**

!!! abstract "Query Parameters"
    - **`framework_pool`** *(in query)*: Pool alias to retrieve the database definition. (e.g., `default`, `libnsx1`). *(Default: `default`)*
    - **`target_pool`** *(in query)*: Pool alias of the database to check. (e.g., `nomasx1`, `nomajde`). *(Default: `default`)*
**📥 Responses:**

??? success "Response `200`: Database connection is successful"
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
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Query execution failed: (sqlalchemy.dialects.postgresql.asyncpg.ProgrammingError)"
        }
        ```

---

### DATABASE - Close

Close all database connections for the specified pool alias.

<span style="background:green; font-size: 16px; padding-left: 10px; padding-right: 10px">GET</span> **`/api/db/close`**

!!! abstract "Query Parameters"
    - **`pool`** *(in query)*: Pool alias for the database to close. (e.g., `default`, `libnsx1`). *(Default: `default`)*
**📥 Responses:**

??? success "Response `200`: Pool closed successfully"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "success",
            "message": "disconnected"
        }
        ```
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Requested pool `alias` not found"
        }
        ```

---

### DATABASE - Open

Open a connection to the database using the specified pool alias.

<span style="background:green; font-size: 16px; padding-left: 10px; padding-right: 10px">GET</span> **`/api/db/open`**

!!! abstract "Query Parameters"
    - **`framework_pool`** *(in query)*: Pool alias to retrieve the database definition. (e.g., `default`, `libnsx1`). *(Default: `default`)*
    - **`target_pool`** *(in query)*: Pool alias of the database to open. (e.g., `libnsx1`, `nomasx1`, `nomajde`). *(Default: `default`)*
**📥 Responses:**

??? success "Response `200`: Pool opened successfully"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "success",
            "message": "connected"
        }
        ```
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Requested pool `alias` not found"
        }
        ```

---

## Query

### QUERY - Select

Retrieve data or metadata from the database based on query parameters. Supports filtering, language and pagination.

<span style="background:green; font-size: 16px; padding-left: 10px; padding-right: 10px">GET</span> **`/api/db/query`**

!!! abstract "Query Parameters"
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
**📥 Responses:**

??? success "Response `200`: Data retrieved successfully"
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
??? warning "Response `400`: Bad Request"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Invalid JSON format in request query."
        }
        ```
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
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

---

### QUERY - Audit

Audit user actions on a table.

<span style="background:blue; font-size: 16px; padding-left: 10px; padding-right: 10px">POST</span> **`/api/db/audit/{table}/{user}`**

!!! abstract "Query Parameters"
    - **`table`** *(in path)*: No description (**Required**)
    - **`user`** *(in path)*: No description (**Required**)
**📥 Responses:**

??? success "Response `200`: Data inserted/updated successfully"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "items": [],
            "status": "success",
            "count": 0
        }
        ```
??? warning "Response `400`: Bad Request"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Request body cannot be empty. JSON object with key-value pairs is required."
        }
        ```
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
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

---

### QUERY - Insert

Insert data into a table.

<span style="background:blue; font-size: 16px; padding-left: 10px; padding-right: 10px">POST</span> **`/api/db/query`**

!!! abstract "Query Parameters"
    - **`source`** *(in query)*: The source to retrieve the query definition. Valid values: `framework`, `query`
    - **`type`** *(in query)*: The type of query, get data or metadata. Valid values: `table`, `columns`.
    - **`pool`** *(in query)*: The database pool alias to retrieve the query definition. (e.g., `default`, `libnsx1`)
    - **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
    - **`query`** *(in query)*: The query ID to execute. (e.g., `1`, `2`)
    - **`override_pool`** *(in query)*: Override the default pool set in the query definition. (e.g., `default`, `libnsx1`)
!!! abstract "Request Body"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "type": "object",
            "description": "JSON object with key-value pairs is required.",
            "title": "Body"
        }
        ```
**📥 Responses:**

??? success "Response `200`: Data inserted/updated successfully"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "items": [],
            "status": "success",
            "count": 0
        }
        ```
??? warning "Response `400`: Bad Request"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Request body cannot be empty."
        }
        ```
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
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

---

### QUERY - Update

Update data into a table.

<span style="background:purple; font-size: 16px; padding-left: 10px; padding-right: 10px">PUT</span> **`/api/db/query`**

!!! abstract "Query Parameters"
    - **`source`** *(in query)*: The source to retrieve the query definition. Valid values: `framework`, `query`
    - **`type`** *(in query)*: The type of query, get data or metadata. Valid values: `table`, `columns`.
    - **`pool`** *(in query)*: The database pool alias to retrieve the query definition. (e.g., `default`, `libnsx1`)
    - **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
    - **`query`** *(in query)*: The query ID to execute. (e.g., `1`, `2`)
    - **`override_pool`** *(in query)*: Override the default pool set in the query definition. (e.g., `default`, `libnsx1`)
!!! abstract "Request Body"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "type": "object",
            "description": "JSON object with key-value pairs is required.",
            "title": "Body"
        }
        ```
**📥 Responses:**

??? success "Response `200`: Data inserted/updated successfully"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "items": [],
            "status": "success",
            "count": 0
        }
        ```
??? warning "Response `400`: Bad Request"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Request body cannot be empty. JSON object with key-value pairs is required."
        }
        ```
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
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

---

### QUERY - Delete

Delete data into a table.

<span style="background:red; font-size: 16px; padding-left: 10px; padding-right: 10px">DELETE</span> **`/api/db/query`**

!!! abstract "Query Parameters"
    - **`source`** *(in query)*: The source to retrieve the query definition. Valid values: `framework`, `query`
    - **`type`** *(in query)*: The type of query, get data or metadata. Valid values: `table`, `columns`.
    - **`pool`** *(in query)*: The database pool alias to retrieve the query definition. (e.g., `default`, `libnsx1`)
    - **`mode`** *(in query)*: The session mode, retrieve data from framework table or pool. Valid values: `framework`, `session`
    - **`query`** *(in query)*: The query ID to execute. (e.g., `1`, `2`)
    - **`override_pool`** *(in query)*: Override the default pool set in the query definition. (e.g., `default`, `libnsx1`)
!!! abstract "Request Body"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "type": "object",
            "description": "JSON object with key-value pairs is required.",
            "title": "Body"
        }
        ```
**📥 Responses:**

??? success "Response `200`: Data inserted/updated successfully"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "items": [],
            "status": "success",
            "count": 0
        }
        ```
??? warning "Response `400`: Bad Request"
    - **Content-Type:** `application/json`
      - **Example:**

        ```json
        {
            "status": "failed",
            "message": "Request body cannot be empty. JSON object with key-value pairs is required."
        }
        ```
??? warning "Response `422`: Validation Error"
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
??? danger "Response `500`: Internal server error"
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

---

