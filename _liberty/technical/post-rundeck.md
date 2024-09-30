---
layout: default
title: Updating Rundek Configuration
permalink: /liberty/technical/post-rundeck
parent: Technical Guide
nav_order: 6
---

# Updating Rundeck Framework Configuration Files
This guide provides essential instructions for updating the Rundeck Framework configuration files. This is a mandatory step to change the default configuration with your custom server name and domain. Please ensure you follow these steps carefully to avoid any configuration issues.

## Step 1: Access File Browser


Tip: **[[Prerequisites:]]**

- Administrator access to FileBrowser.
- Correct server name and domain ready for input.


1\. Navigate to [[https://&lt;your_server&gt;/filebrowser]]\
Enter you credentials and click *Login*

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-30/83c4017f-7572-4b24-b1a9-10002368be46/user_cropped_screenshot.jpeg?tl_px=281,499&br_px=2000,1460&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,276)


Tip: **Administrator Note**: If you are unsure of your credentials, please check with the system administrator or the setup documentation for the default credentials.


## Step 2: Framework Properties


2\. Navigate to the [[rundeck]] directory to access the configuration settings.\
**Administrator Note**: Ensure you have the correct permissions to view and modify the files in this directory.\
Click on the [[framework.properties]] file to edit it.

![](https://colony-recorder.s3.amazonaws.com/files/2024-09-30/5d878d98-461b-40f7-b1a7-1e522e70f510/stack_animation.webp)


3\. Modify the URL to replace it with your server name or domain name.\
**Administrator Note**: Be cautious when modifying URLs. Ensure that the domain is correctly formatted and accessible from the client machines. Avoid typos, as this can lead to connection issues.\
After saving, click **Close** to return to the file browser.

![](https://colony-recorder.s3.amazonaws.com/files/2024-09-30/5f4f0670-6379-4a6e-a232-5fd5bdd19da9/stack_animation.webp)


## Step 3: Rundeck Config Properties


4\. click on the **[[rundeck-config.properties]]** file to edit the domain configuration.

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-09-28/88671014-5f89-4321-8de9-9c9644f0fe7e/user_cropped_screenshot.jpeg?tl_px=273,266&br_px=1992,1227&force_format=jpeg&q=100&width=1120.0)


5\. Modify the url with your server name or dns\
**Administrator Note**: Both configuration files ([[framework.properties]] and [[rundeck-config.properties]] ) should have consistent URLs to prevent any mismatch in accessing the server.\
**grails.serverURL must end by** [[/rundeck ]]\
After saving, click **Close**.

![](https://colony-recorder.s3.amazonaws.com/files/2024-09-30/a29f90e5-8b20-4cd2-b054-c1696c690dfb/stack_animation.webp)


Alert: **Final Administrator Note**: After updating both configuration files, it is required to restart the Rundeck service to apply the new settings. Use Portainer to restart the stack or only the Rundeck container