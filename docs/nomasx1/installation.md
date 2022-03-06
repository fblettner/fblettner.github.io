---
layout: default
title: Installation
permalink: /nomasx1/installation
parent: NOMASX-1
nav_order: 1
---

## Installing NOMASX-1
1. [Requirements](#requirements)
1. [Install Podman](#podman)
1. [Enable service and check status](#service)
1. [Download components](#github)
1. [Start all containers](#containers)

---
TIP
{: .label .label-yellow .fs-5}

```scss
PODMAN is fastest way to install NOMASX-1. Even if it is possible to install each component separately, using podman is better because all is preconfigured
```

### Requirements
{: .textbox #requirements}
* RAM : 8Go
* DISK : 60 Go
* CPU : 2vCPU

{: .lh-0 }
The server should have an access to internet to download all images and applications sources from Github and Oracle Registry Container.

Podman works rootless, you can create a user to start all containers with a specific user and without using root
```scss
groupadd nomasx1
useradd -g nomasx1 nomasx1
```

### Install Podman
{: .textbox #podman}
```scss
dnf -y install podman podman-docker buildah skopeo dnf-utils zip unzip tar gzip git
dnf -y update
```
Add the user created previously to be able to start container rootless
```scss
touch /etc/subuid /etc/subgid
usermod --add-subuids 100000-165535 --add-subgids 100000-165535 nomasx1
podman system migrate
```

### Enable service and check status
{: .textbox #service}
```scss
systemctl enable --now podman.socket
systemctl status podman.socket
```

### Download components
{: .textbox #github}
The Repository is private because this application is under licence. Ask for credentials to download
```scss
git clone https://github.com/fblettner/nomasx1-containers.git
Enter login and password

cd nomasx1-containers/data
./getdata.sh (this will download and unzip the preconfigured Oracle Database)

Give rights for user inside the container
podman unshare chown -R 54321:54321 data/oradata
```

### Start all containers
{: .textbox #containers}
Login to OCI to be able to start all containers (this is a one time only task)
```scss
podman login https://lhr.ocir.io
Enter login and password
```

Start the containers
```scss
podman play kube nomasx1w.yaml --configmap .nomasx1.yaml,.rundeck.yaml
```
