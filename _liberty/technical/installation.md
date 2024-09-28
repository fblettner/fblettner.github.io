---
layout: default
title: Installing Docker on Linux
permalink: /liberty/technical/installation
parent: Technical Guide
nav_order: 2
---


# Docker Installation Guide

This guide covers the installation of Docker and Docker Compose on **CentOS** and **Amazon Linux**. Follow the respective instructions based on your environment.

## Index

- [Docker Installation for CentOS](#docker-installation-for-centos)
  - [Prerequisites](#prerequisites)
  - [Step 1: Update System Packages](#step-1-update-system-packages)
  - [Step 2: Install Required Dependencies](#step-2-install-required-dependencies)
  - [Step 3: Set Up the Docker Repository](#step-3-set-up-the-docker-repository)
  - [Step 4: Install Docker](#step-4-install-docker)
  - [Step 5: Start and Enable Docker](#step-5-start-and-enable-docker)
  - [Step 6: Verify Docker Installation](#step-6-verify-docker-installation)
  - [Step 7: Install Docker Compose](#step-7-install-docker-compose)
  - [Step 8: Adding Your User to the Docker Group (Optional)](#step-8-adding-your-user-to-the-docker-group-optional)
  - [Uninstall Docker](#uninstall-docker)
- [Docker Installation for Amazon Linux OS](#docker-installation-for-amazon-linux-os)
  - [Prerequisites](#prerequisites-1)
  - [Step 1: Update System Packages](#step-1-update-system-packages-1)
  - [Step 2: Install Docker](#step-2-install-docker)
  - [Step 3: Start and Enable Docker](#step-3-start-and-enable-docker)
  - [Step 4: Verify Docker Installation](#step-4-verify-docker-installation)
  - [Step 5: Install Docker Compose](#step-5-install-docker-compose)
  - [Step 6: Adding Your User to the Docker Group (Optional)](#step-6-adding-your-user-to-the-docker-group-optional-1)
  - [Uninstall Docker](#uninstall-docker-1)
- [Conclusion](#conclusion)
- [References](#references)

## Docker Installation for CentOS

### Prerequisites

- CentOS 8 or higher
- Root or sudo access
- Minimum 2GB of RAM recommended, 8GB of RAM recommended for all Liberty Framework Services.

### Step 1: Update System Packages

Before starting the installation, update your system to ensure all packages are up-to-date.

```bash
sudo yum update -y
```

### Step 2: Install Required Dependencies

Install the necessary packages required to set up the Docker repository.

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

### Step 3: Set Up the Docker Repository

Add the Docker repository to your CentOS system.

```bash
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

### Step 4: Install Docker

Install Docker Engine, CLI, and Containerd.

```bash
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

### Step 5: Start and Enable Docker

Start the Docker service and enable it to start on boot.

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

### Step 6: Verify Docker Installation

Verify the installation by running a test Docker container.

```bash
sudo docker run hello-world
```

If the container runs and displays a welcome message, Docker is installed correctly.

### Step 7: Install Docker Compose

Download the current stable release of Docker Compose:

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -Po '"tag_name": "\K.*?(?=")')/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Apply executable permissions to the binary:

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

Verify that the installation was successful:

```bash
docker-compose --version
```

### Step 8: Adding Your User to the Docker Group (Optional)

To run Docker commands without `sudo`, add your user to the Docker group.

```bash
sudo usermod -aG docker $(whoami)
```

Log out and log back in to apply the group changes.

### Uninstall Docker

To remove Docker, the CLI, Containerd, and Docker Compose, use the following commands:

```bash
sudo yum remove docker-ce docker-ce-cli containerd.io
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
sudo rm /usr/local/bin/docker-compose
```

## Docker Installation for Amazon Linux OS

### Prerequisites

- Amazon Linux or Amazon Linux 2
- Root or sudo access

### Step 1: Update System Packages

First, ensure your system packages are up to date.

```bash
sudo yum update -y
```

### Step 2: Install Docker

Install Docker using the Amazon Linux Extras & yum package manager.

```bash
sudo amazon-linux-extras install docker -y
```

### Step 3: Start and Enable Docker

Start the Docker service and enable it to start on boot.

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

### Step 4: Verify Docker Installation

Verify the installation by running a test Docker container.

```bash
sudo docker run hello-world
```

If the container runs and displays a welcome message, Docker is installed correctly.

### Step 5: Install Docker Compose

Download the current stable release of Docker Compose:

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -Po '"tag_name": "\K.*?(?=")')/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Apply executable permissions to the binary:

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

Verify that the installation was successful:

```bash
docker-compose --version
```

### Step 6: Adding Your User to the Docker Group (Optional)

To run Docker commands without `sudo`, add your user to the Docker group.

```bash
sudo usermod -aG docker $(whoami)
```

Log out and log back in to apply the group changes.

### Uninstall Docker

To remove Docker, the CLI, Containerd, and Docker Compose, use the following commands:

```bash
sudo yum remove docker
sudo rm -rf /var/lib/docker
sudo rm /usr/local/bin/docker-compose
```

## Conclusion

You have successfully installed Docker and Docker Compose on your CentOS or Amazon Linux OS system. You can now begin deploying and managing your Docker containers for Liberty Framework.

## References

- [Docker Documentation](https://docs.docker.com/)
- [AWS Documentation](https://docs.aws.amazon.com/)
