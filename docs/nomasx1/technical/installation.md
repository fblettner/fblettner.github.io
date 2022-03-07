---
layout: default
title: Installation
permalink: /nomasx1/technical/installation
parent: Technical Guide
grand_parent: NOMASX-1
nav_order: 2
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

### 1. Requirements
{: .textbox #requirements}
* RAM : 8Go
* DISK : 60 Go
* CPU : 2vCPU

{: .lh-0 }
The server should have an access to internet to download all images and applications sources from Github and Oracle Registry Container.

Podman works rootless, you can create a user to start all containers with a specific user and without using root
```bash
groupadd nomasx1
useradd -g nomasx1 nomasx1
```

Check if SELINUX is enabled and change mode to permissive
```bash
sestatus

SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
********************
** CHECK MODE **
Current mode:                   enforcing
Mode from config file:          enforcing
********************
Policy MLS status:              enabled
Policy deny_unknown status:     allowed
Memory protection checking:     actual (secure)
Max kernel policy version:      31
```

Set secure Linux to permissive by editing the "/etc/selinux/config" file, making sure the SELINUX flag is set as follows.
```bash
SELINUX=permissive
```
Once the change is complete, restart the server or run the following command.
```bash
setenforce Permissive
```

Disable firewall
```bash
systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld
```

### 2. Install Podman
{: .textbox #podman}
```bash
dnf -y install podman podman-docker buildah skopeo dnf-utils zip unzip tar gzip git
dnf -y update
```
Add the user created previously to be able to start container rootless
```bash
touch /etc/subuid /etc/subgid
usermod --add-subuids 100000-165535 --add-subgids 100000-165535 nomasx1
podman system migrate
```

### 3. Enable service and check status
{: .textbox #service}
```bash
systemctl enable --now podman.socket
systemctl status podman.socket
```

### 4. Download components
{: .textbox #github}
The Repository is private because this application is under licence. Ask for credentials to download
```bash
git clone https://github.com/fblettner/nomasx1-containers.git
Enter login and password

cd nomasx1-containers/data
./getdata.sh (this will download and unzip the preconfigured Oracle Database)

Give rights for user inside the container
podman unshare chown -R 54321:54321 data/oradata
```

### 5. Start all containers
{: .textbox #containers}
Login to OCI to be able to start all containers (this is a one time only task)
```bash
podman login https://lhr.ocir.io
Enter login and password
```

Start the containers
```bash
podman play kube nomasx1w.yaml --configmap .nomasx1.yaml,.rundeck.yaml
```
