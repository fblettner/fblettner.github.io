---
date: 2024-11-26
authors:
  - fblettner
categories:
  - JD Edwards
hide:
  - footer 
---
# Setting Up a JD Edwards EnterpriseOne Trial Instance on Oracle Cloud

JD Edwards EnterpriseOne is a comprehensive ERP solution, and Oracle provides an easy way to deploy a trial instance via the Oracle Cloud Marketplace. This guide walks you through the steps to set up the JD Edwards EnterpriseOne Trial Edition.

The URL for accessing our Demo platform for JD Edwards EnterpriseOne and Studio are as follows:

- **EnterpriseOne**: [https://132.145.35.251:8080/jde/owhtml](https://132.145.35.251:8080/jde/owhtml)
- **Studio**: [https://132.145.35.251:7077/studio](https://132.145.35.251:7077/studio)
- **Server Manager**: [https://132.145.35.251:8998/manage](https://132.145.35.251:8998/manage)

### Login Credentials

Use the following credentials to access the instance:
```plaintext
# Login Credentials
User: demo
Password: nomana
```

## Prerequisites

Before starting, ensure you have the following:

- **Oracle Cloud Account**: An active subscription or free tier account with Oracle Cloud Infrastructure (OCI).

## Steps to Deploy the JD Edwards Trial Edition

### 1. Access the Oracle Cloud Marketplace

1. Go to the [Oracle Cloud Marketplace](https://cloudmarketplace.oracle.com/marketplace/oci).
2. Search for **JD Edwards EnterpriseOne Trial Edition**.
3. Open the listing to view detailed information.

![MARKETPLACE](/assets/jdedwards/trial-marketplace.png)

### 2. Deploy the Application

1. Click the **Get App** button on the listing page.
2. Log in with your Oracle Cloud Single Sign-On credentials.
3. Accept the Oracle Cloud Marketplace Terms of Service.
4. Select your OCI compartment and click **Launch Instance**.

![LAUNCH](/assets/jdedwards/trial-launch.png)

### 3. Configure the Instance

1. **Instance Details**:
    - Enter a name for your instance.
    - Select the compartment where the instance will reside.


![NAME](/assets/jdedwards/trial-name.png)

2. **Compute Shape**:
    - Choose a shape, such as `VM.Standard2.4`, that provides sufficient resources.

![SHAPE](/assets/jdedwards/trial-shape.png)

3. **Networking**:
    - Select an existing Virtual Cloud Network (VCN) and subnet or create a new one.
    - Assign a public IP address for external access.
4. **SSH Keys**:
    - Download SSH Key or upload your public SSH key to enable secure access to the instance.

![SSH](/assets/jdedwards/trial-ssh.png)

### 4. Launch the Instance

- Review all configuration settings.
- Click **Create** to launch the instance.

### 5. Access the JD Edwards Environment

1. Once the instance is running, connect to it via SSH:
    ```bash
    ssh -i <path_to_private_key> opc@<instance_public_ip>
    ```

Follow the assistant to enter all informations related to the instance (port, password)

![CONFIG](/assets/jdedwards/trial-config.png)

2. Open a web browser and navigate to the JD Edwards EnterpriseOne interface using the public IP address and port (default: `8080`).

    Example URL:
    ```
    http://<instance_public_ip>:8080
    ```

3. Log in with the default credentials or any credentials provided during setup.

## Additional Resources

- [JD Edwards EnterpriseOne Trial Edition - Oracle Cloud Marketplace](https://cloudmarketplace.oracle.com/marketplace/en_US/listing/51184836)
- [Oracle Cloud Infrastructure Documentation](https://docs.oracle.com/en/)

## Next Steps

After successfully deploying the trial instance, you can explore JD Edwards EnterpriseOne features such as:

- Configuring modules for your business needs.
- Testing integrations with other Oracle Cloud applications.
- Evaluating its scalability and performance in the cloud.

For further assistance, refer to the official documentation or consult Oracle support.