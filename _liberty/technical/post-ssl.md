---
layout: default
title: Enable SSL
permalink: /liberty/technical/post-ssl
parent: Technical Guide
nav_order: 7
---

# Enable SSL 

By default, SSL is enabled with a self signed certificate. You have to copy your own certificates according to your domain

## Prerequisites:
- Administrator access to FileBrowser.
- Certificates for you domain

## Step 1: Access File Browser

1. Navigate to [https://&lt;your_server&gt;/filebrowser](https://liberty.nomana-it.fr/filebrowser/login)

   **Administrator Note**: Ensure that you replace `<your_server>` with the actual server IP or domain name where the FileBrowser is hosted.

2. Enter your credentials and click **Login**.

   ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-28/9fc30968-ed32-4ee6-a2f8-18c4f2c8cbc0/user_cropped_screenshot.jpeg?width=800)


   **Administrator Note**: If you are unsure of your credentials, please check with the system administrator or the setup documentation for the default credentials.


## Step 2: Copy your certificates files

3. Navigate to the `traefik` and `certificates` directory to access the certificates files.
4. Replace the twoo files with your own certificates

**Final Administrator Note**: After updating both files, it is required to restart the Rundeck service to apply the new settings. Use Portainer to restart the stack or only the Rundeck container