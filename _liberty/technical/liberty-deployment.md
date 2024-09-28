---
layout: default
title: Liberty Deployment Guide
permalink: /liberty/technical/liberty-deployment
parent: Technical Guide
nav_order: 4
---

# Deploying Liberty Framework with Portainer

This guide will walk you through deploying Liberty Framework using Portainer, based on the Compose file located at the following URL: [liberty-framework.yml](https://github.com/fblettner/liberty-public/blob/main/release/latest/liberty-framework.yml).

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Accessing Portainer](#accessing-portainer)
3. [Logging into a Custom Registry](#logging-into-a-custom-registry)
4. [Deploy the Stack](#deploy-the-stack)
5. [Verify Deployment](#verify-deployment)
6. [Additional Resources](#additional-resources)

## Prerequisites

Before you begin, ensure the following prerequisites are met:

- You have Docker and Portainer installed and running on your server.
- You have access to the Portainer web interface.

## Accessing Portainer

1. Open a web browser and navigate to the Portainer web interface. The URL typically looks like `http://your-server-ip:3000` or `https://your-server-ip:3443`.

2. Log in with your Portainer credentials.

## Logging into a Custom Registry

1. In the Portainer web interface, navigate to `Registries` from the sidebar.

2. Click on the `+ Add registry` button.

3. Provide the following details for your custom registry:
    - **Name:** A friendly name for your registry.
    - **URL:** The URL of your custom registry (e.g., `ghcr.io/fblettner`).
    - **Username:** Your registry username  (this user will be provided by Nomana-IT).
    - **Password:** Your registry password (this token will be provided by Nomana-IT).

4. After filling in the details, click on the `Add Registry` button to save the registry.

## Deploy the Stack

1. In the Portainer web interface, navigate to `Stacks` from the sidebar.

2. Click on the `+ Add Stack` button.

3. Provide a name for your stack in the `Name` field.

4. Under the `Git repository` tab:

    - Enter the **Repository URL**: 
      ```
      https://github.com/fblettner/liberty-public/blob/main/release/latest/liberty-framework.yml
      ```

    - Optionally, you can specify a repository reference (branch or tag). For example:
      ```
      main
      ```

    - In the **Compose path** field, specify:
      ```
      release/latest/liberty-framework.yml
      ```

5. Scroll down and click on the `Deploy the stack` button.

## Verify Deployment

1. Once the stack is deployed, navigate to `Containers` from the sidebar.

2. Verify that the containers listed in the Compose file are running.

3. Access the services through the designated ports to ensure everything is functioning as expected.

## Additional Resources

- [Portainer Documentation](https://documentation.portainer.io/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [GitHub Repository - liberty-framework.yml](https://github.com/fblettner/liberty-public/blob/main/release/latest/liberty-framework.yml)

---

By following this guide, you should be able to deploy Liberty Framework using Portainer seamlessly. If you run into any issues or have any questions, refer to the additional resources provided or reach out to the respective support communities.


## Summary

**URLs:**
- **Web Application:** `/`
- **API:** `/api`
- **PgAdmin:** `/pgadmin`
- **Rundeck:** `/rundeck`
- **OIDC:** `/oidc`
- **Filebrowser:** `/filebrowser`

**Services:**
- **node:** ghcr.io/fblettner/liberty-node:latest (Port 3002)
- **pg:** ghcr.io/fblettner/liberty-pg:latest (Port 5432)
- **pgadmin:** ghcr.io/fblettner/liberty-pgadmin:latest (Port 3003)
- **rundeck:** ghcr.io/fblettner/liberty-rundeck:latest (Port 4440)
- **oidc:** ghcr.io/fblettner/liberty-keycloak:latest (Port 8080)
- **filebrowser:** ghcr.io/fblettner/liberty-filebrowser:latest (Port 80)

Details of all Liberty Framework Services can be found [here](https://docs.nomana-it.fr/liberty/technical/architecture).

