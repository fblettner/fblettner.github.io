---
layout: default
title: Updating Rundek Configuration
permalink: /liberty/technical/post-rundeck
parent: Technical Guide
nav_order: 6
---

# Updating Rundeck Framework Configuration Files

This guide provides essential instructions for updating the Rundeck Framework configuration files. This is a mandatory step to change the default configuration with your custom server name and domain. Please ensure you follow these steps carefully to avoid any configuration issues.

<iframe src="https://scribehow.com/embed/Updating_Rundeck_Framework_Configuration_Files__lJtYGAs7SUWeCvooCHfoFw" width="100%" height="640" allowfullscreen frameborder="0"></iframe>

## Prerequisites:
- Administrator access to FileBrowser.
- Correct server name and domain ready for input.

## Step 1: Access File Browser

1. Navigate to [https://&lt;your_server&gt;/filebrowser](https://liberty.nomana-it.fr/filebrowser/login)

   **Administrator Note**: Ensure that you replace `<your_server>` with the actual server IP or domain name where the FileBrowser is hosted.

2. Enter your credentials and click **Login**.

   ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-28/9fc30968-ed32-4ee6-a2f8-18c4f2c8cbc0/user_cropped_screenshot.jpeg?width=800)


   **Administrator Note**: If you are unsure of your credentials, please check with the system administrator or the setup documentation for the default credentials.

## Step 2: Locate the Rundeck Directory

3. Navigate to the `rundeck` directory to access the configuration settings.

   ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-28/b8a53ec7-cfde-44d4-a4ea-9c5e51a9a8d7/ascreenshot.jpeg?width=800)

   **Administrator Note**: Ensure you have the correct permissions to view and modify the files in this directory.

## Step 3: Edit the `framework.properties` File

4. Click on the `framework.properties` file to edit it.

   ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-28/bad8b33e-1efc-4934-befc-61d9da4cdbcf/ascreenshot.jpeg?width=800)

5. Modify the URL to replace it with your server name or domain name.

   ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-28/5ad190ef-bd52-4407-9ee7-277ac9f97208/user_cropped_screenshot.jpeg?width=800)

   **Administrator Note**: Be cautious when modifying URLs. Ensure that the domain is correctly formatted and accessible from the client machines. Example: `https://liberty.nomana-it.fr`. Avoid typos, as this can lead to connection issues.

6. Click **Save** and **Close** to return to the file browser.

   ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-28/33e79fff-725e-4176-b106-3c399f456386/ascreenshot.jpeg?width=800)

## Step 4: Edit the `rundeck-config.properties` File

7. Now, click on the `rundeck-config.properties` file to edit the domain configuration.

   ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-28/88671014-5f89-4321-8de9-9c9644f0fe7e/user_cropped_screenshot.jpeg?width=800)

8. Modify the URL with your server name or DNS.

   ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-28/9c2725c9-4be4-45d6-bbfc-596df0d988af/user_cropped_screenshot.jpeg?width=800)

   **Administrator Note**: Both configuration files (`framework.properties` and `rundeck-config.properties`) should have consistent URLs to prevent any mismatch in accessing the server. 
   **grails.serverURL must end by `/rundeck`**

9. Click **Save** and **Close** to return to the file browser.

   ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-28/68e36d94-cf4a-43e7-a755-bfcca9a60434/ascreenshot.jpeg?width=800)

---

**Final Administrator Note**: After updating both configuration files, it is required to restart the Rundeck service to apply the new settings. Use Portainer to restart the stack or only the Rundeck container
