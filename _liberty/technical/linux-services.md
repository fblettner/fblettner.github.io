---
layout: default
title: Create Linux Services
permalink: /liberty/technical/linux-services
parent: Technical Guide
nav_order: 5
---

# Creating Systemd Services for Docker Compose

This guide will walk you through creating systemd services to manage your Docker Compose deployments. This ensures that your services start automatically on boot and can be managed easily using standard systemd commands.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Creating the Systemd Service for SVM](#creating-the-systemd-service-for-svm)
3. [Creating the Systemd Service for Liberty](#creating-the-systemd-service-for-liberty)
4. [Enabling and Starting the Services](#enabling-and-starting-the-services)
5. [Additional Resources](#additional-resources)

## Prerequisites

Before you begin, ensure the following prerequisites are met:

- You have Docker and Docker Compose installed on your server.
- You have completed the deployment steps for Liberty Framework using Docker Compose.

## Creating the Systemd Service for Admin Tools

1. Create a service file for `docker-admin`:

    ```sh
    sudo nano /etc/systemd/system/docker-admin.service
    ```

2. Paste the following content into the file:

    ```ini
    [Unit]
    Description=Liberty Admin Tools Service
    PartOf=docker.service
    After=docker.service

    [Service]
    Type=simple
    RemainAfterExit=true
    WorkingDirectory=/app/liberty-admin/
    ExecStart=/usr/local/bin/docker-compose -f /app/liberty-admin/docker-compose.yml start
    ExecStop=/usr/local/bin/docker-compose -f /app/liberty-admin/docker-compose.yml stop

    [Install]
    WantedBy=multi-user.target
    ```

3. Save and close the file.

## Creating the Systemd Service for Liberty Framework

1. Open a terminal.
2. Create a new directory:
    ```bash
    mkdir -p /app/liberty-framework
    cd /app/liberty-framework
    ```

3. Download the Docker Compose file from the provided URL, Using `curl`:
    ```bash
    curl -L -o docker-compose.yml https://github.com/fblettner/liberty-public/blob/main/release/latest/liberty-framework.yml
    ```

4. Create a service file for `docker-liberty`:

    ```sh
    sudo nano /etc/systemd/system/docker-liberty.service
    ```

5. Paste the following content into the file:

    ```ini
    [Unit]
    Description=Liberty Framework Service
    PartOf=docker.service
    After=docker.service

    [Service]
    Type=simple
    RemainAfterExit=true
    WorkingDirectory=/app/liberty/
    ExecStart=/usr/local/bin/docker-compose -f /app/liberty-framework/docker-compose.yml start
    ExecStop=/usr/local/bin/docker-compose -f /app/liberty-framework/liberty-compose.yaml stop

    [Install]
    WantedBy=multi-user.target
    ```

6. Save and close the file.

## Enabling and Starting the Services

1. Enable the created services to start on boot:

    ```sh
    sudo systemctl enable docker-liberty.service
    sudo systemctl enable docker-svm.service
    ```

2. Start the services immediately:

    ```sh
    sudo systemctl start docker-liberty.service
    sudo systemctl start docker-svm.service
    ```

3. Check the status of the services to ensure they are running:

    ```sh
    sudo systemctl status docker-liberty.service
    sudo systemctl status docker-svm.service
    ```

## Additional Resources

- [Systemd Documentation](https://www.freedesktop.org/wiki/Software/systemd/)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

By following this guide, you should be able to create and manage systemd services for your Docker Compose deployments seamlessly. If you run into any issues or have any questions, refer to the additional resources provided or reach out to the respective support communities.
