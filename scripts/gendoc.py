import json
from collections import defaultdict

# Load the OpenAPI JSON
with open("../json/liberty-api.json", "r") as f:
    openapi_data = json.load(f)

# Add background color for method
def method_with_style(method):
    color_map = {
        "GET": "green",    # Light green
        "POST": "blue",    # Light blue
        "PUT": "purple",   # Light purple
        "DELETE": "red",   # Light red
    }
    color = color_map.get(method.upper(), "inherit")  # Default to inherit color
    return f'<span style="background:{color}; font-size: 16px; padding-left: 10px; padding-right: 10px">{method.upper()}</span>'


# Initialize Markdown content
markdown = f"# {openapi_data['info']['title']}\n\n"
markdown += f"**Description:** {openapi_data['info']['description']}\n\n"
markdown += f"**Version:** {openapi_data['info']['version']}\n\n"

method_order = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]

# Sort paths and methods
paths = openapi_data["paths"]

# Group paths by tags
tagged_paths = defaultdict(list)
for path, methods in paths.items():
    for method, details in methods.items():
        tags = details.get("tags", ["Untagged"])  # Use "Untagged" if no tags are provided
        for tag in tags:
            tagged_paths[tag].append((path, method, details))

# Iterate through tags and their respective paths
for tag, endpoints in tagged_paths.items():
    markdown += f"## {tag}\n\n"  # Add tag as a section header

    # Sort endpoints by their method order and path
    endpoints = sorted(
        endpoints,
        key=lambda x: (method_order.index(x[1].upper()) if x[1].upper() in method_order else len(method_order), x[0])
    )

    for path, method, details in endpoints:
        method_with_bg = method_with_style(method)
        markdown += f"### {details.get('summary', 'No summary available')}\n\n"
        markdown += f"{details.get('description', 'No description available.')}\n\n"
        markdown += f"{method_with_bg} **`{path}`**\n\n"

        # Parameters Section
        markdown += "!!! abstract \"Query Parameters\"\n"
        if "parameters" in details:
            for param in details["parameters"]:
                required = " (**Required**)" if param.get("required", False) else ""
                default = f" *(Default: `{param['schema']['default']}`)*" if "default" in param["schema"] else ""
                markdown += f"    - **`{param['name']}`** *(in {param['in']})*: {param.get('description', 'No description')}{required}{default}\n"
        else:
            markdown += "    - **None**\n\n"

        # Request Body Section
        if "requestBody" in details:
            markdown += "!!! abstract \"Request Body\"\n"
            request_body = details["requestBody"]["content"]
            for content_type, body_details in request_body.items():
                markdown += f"    - **Content-Type:** `{content_type}`\n"
                body_json = json.dumps(body_details.get('schema', {}), indent=4)
                json_block = "\n".join([f"        {line}" for line in body_json.splitlines()])
                markdown += f"      - **Example:**\n\n"
                markdown += f"        ```json\n{json_block}\n        ```\n"

        # Responses Section
        markdown += "**📥 Responses:**\n\n"
        for status, response in details["responses"].items():
            # Determine the type of admonition based on the status code
            if str(status).startswith("2"):
                admonition_type = "success"
            elif str(status).startswith("4"):
                admonition_type = "warning"
            elif str(status).startswith("5"):
                admonition_type = "danger"
            else:
                admonition_type = "note"  # Default to 'note' for other status codes
            markdown += f"??? {admonition_type} \"Response `{status}`: {response.get('description', 'No description available.')}\"\n"
            if "content" in response:
                for content_type, content_details in response["content"].items():
                    markdown += f"    - **Content-Type:** `{content_type}`\n"
                    if "example" in content_details:
                        example_json = json.dumps(content_details["example"], indent=4)
                        # Ensure the JSON block is properly indented
                        json_block = "\n".join([f"        {line}" for line in example_json.splitlines()])
                        markdown += f"      - **Example:**\n\n"
                        markdown += f"        ```json\n{json_block}\n        ```\n"

        markdown += "\n---\n\n"


# Save to a Markdown file for MkDocs
with open("../docs/liberty/api/liberty-api.md", "w") as f:
    f.write(markdown)

print("API documentation exported to docs/liberty/api/liberty-api.md!")