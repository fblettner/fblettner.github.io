---
layout: default
title: Enable SSL with Traefik
permalink: /liberty/technical/post-ssl
parent: Technical Guide
nav_order: 7
---

# Enable SSL with Traefik

By default, SSL is enabled with a self signed certificate. You have to copy your own certificates according to your domain

<iframe src="https://scribehow.com/embed/Enable_SSL_with_Traefik__OwYGZvfgQDu0cgiXULfgfg" width="100%" height="640" allowfullscreen frameborder="0"></iframe>

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

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-30/3f2e66cf-2f84-41b4-a722-5b386f24c472/ascreenshot.jpeg?tl_px=0,433&br_px=1719,1394&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=444,276)

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-30/33837bfe-be53-4a7d-bce3-7eb79c974342/ascreenshot.jpeg?tl_px=0,0&br_px=1719,961&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=484,221)

4. Click `file_upload` and replace the two files with your own certificates from your local drive

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-30/fb0cfd6d-b630-42a3-9bee-e9fd261ce550/ascreenshot.jpeg?tl_px=546,0&br_px=2266,961&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=929,4)

**Final Administrator Note**: After updating both files, it is required to restart the Rundeck service to apply the new settings. Use Portainer to restart the stack or only the Rundeck container