# Enable SSL with Traefik

By default, SSL is enabled with a self signed certificate. You have to copy your own certificates according to your domain

## Prerequisites:
- `mkcert` installed to create a new self-signed certificate.
- Certificates for your domain

## Step 1: Copy your certificates files

1. Copy your certificates files to the server hosting Liberty Framework

2. Transfer you certificate to the Docker container
```bash
docker cp <your_certificate_directory>/cert.pem traefik:/etc/certs/cert.pem
docker cp <your_certificate_directory>/key.pem traefik:/etc/certs/key.pem
```

**Final Administrator Note**: Certificates must be transferred to the Docker container with each renewal

## Step2: Create a self-signed certificate (optional)

1. Connect to the server hosting Liberty Framework

2. Create a new self signed certificate
```bash
mkcert -key-file ./certs/key.pem -cert-file ./certs/cert.pem '<server_name>'
```

3. Transfer you certificate to the Docker container
```bash
docker cp ./certs/cert.pem traefik:/etc/certs/cert.pem
docker cp ./certs/key.pem traefik:/etc/certs/key.pem
```

**Final Administrator Note**: After updating both files, it is required to restart the Traefik service to apply the new settings.