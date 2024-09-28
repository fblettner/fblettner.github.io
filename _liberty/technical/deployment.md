---
layout: default
title: Installation Tools Deployment Guide
permalink: /liberty/technical/deployment
parent: Technical Guide
nav_order: 3
---

# Deploying Installation Tools with Docker Compose

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Logging into Docker](#step-1-logging-into-docker)
3. [Step 2: Create a Directory for Deployment](#step-2-create-a-directory-for-deployment)
4. [Step 3: Download the Docker Compose File](#step-3-download-the-docker-compose-file)
5. [Step 4: Deploy the Docker Container using Docker Compose](#step-4-deploy-the-docker-container-using-docker-compose)
6. [Step 5: Verify the Deployment](#step-5-verify-the-deployment)
7. [Summary of Commands](#summary-of-commands)
8. [Accessing Services](#accessing-services)

## Prerequisites

Before we begin, ensure you have the following installed on your system:

1. **Docker** and **Docker Compose**: Installation instructions can be found [here](https://docs.nomana-it.fr/liberty/technical/installation).
3. **Git**: Installation instructions can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Step 1: Logging into Docker

To access a private Docker registry, you'll need to authenticate with your Docker credentials.

1. Log in to Docker:
    ```bash
    docker login
    ```
    Follow the prompts to enter your Docker username and password.

## Step 2: Create a Directory for Deployment

Create a directory where you will download and store the Docker Compose file.

1. Open a terminal.
2. Create a new directory:
    ```bash
    mkdir liberty-deployment
    cd liberty-deployment
    ```

## Step 3: Download the Docker Compose File

Next, download the Docker Compose file from the provided URL.

1. Using `curl`:
    ```bash
    curl -L -o docker-compose.yml https://raw.githubusercontent.com/fblettner/liberty-public/release/latest/liberty-admin.yml
    ```

2. Alternatively, using `wget`:
    ```bash
    wget -O docker-compose.yml https://raw.githubusercontent.com/fblettner/liberty-public/release/latest/liberty-admin.yml
    ```

## Step 4: Deploy the Docker Container using Docker Compose

Once you have the `docker-compose.yml` file downloaded into your `liberty-deployment` directory, use Docker Compose to deploy the container.

1. In the terminal, navigate to the `liberty-deployment` directory (if not already there):
    ```bash
    cd liberty-deployment
    ```

2. Deploy the Docker container:
    ```bash
    docker-compose up -d
    ```

This command will pull the necessary images from the registry (if they are not already available locally) and start the containers in detached mode.

## Step 5: Verify the Deployment

To ensure the deployment is successful, you can check the status of the containers.

1. List the running containers:
    ```bash
    docker ps
    ```

You should see the following containers running as defined in the `docker-compose.yml` file:

- **traefik**: This service is managing routing and load balancing, and exposes several endpoints for web (port 3000), websecure (port 3443), dashboard (port 8080), and database (port 5432).
- **portainer**: This service provides a UI for managing Docker environments, accessible via paths prefixed with `/portainer`.
- **error-pages**: This service handles error pages and is available to respond to general HTTP requests.


## Summary of Commands

```bash
# Log in to Docker
docker login

# Create and navigate to the deployment directory
mkdir liberty-deployment
cd liberty-deployment

# Download the Docker Compose file
curl -L -o docker-compose.yml https://raw.githubusercontent.com/fblettner/liberty-public/release/latest/liberty-admin.yml
# or using wget
wget -O docker-compose.yml https://raw.githubusercontent.com/fblettner/liberty-public/release/latest/liberty-admin.yml

# Deploy the Docker container
docker-compose up -d
```

## Accessing Services

After deployment, you can access the services with the following URLs:

- **Traefik Dashboard**: Accessible at http://<your_server_ip>:8080/dashboard/ (authentication may be required).
- **Portainer**: Accessible at http://<your_server_ip>:3000/portainer or https://<your_server_ip>:3443/portainer.

Replace <your_server_ip> with the IP address or hostname of your server.
Feel free to reach out if you have any further questions or run into any issues!