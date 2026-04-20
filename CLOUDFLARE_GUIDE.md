# Cloudflare Deployment Guide (via Tunnel)

Since this project requires a PHP server and a MySQL database, it cannot be hosted directly on Cloudflare Pages. Instead, we recommend using **Cloudflare Tunnel** to securely connect your local server to the Cloudflare network.

## Prerequisites
1. A Cloudflare account.
2. A domain pointed to Cloudflare.
3. [Cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/) installed on your machine.

---

## 🛠 Step 1: Run your Project
Ensure your project is running locally using Docker:
```bash
docker-compose up -d
```
The project should be accessible at `http://localhost:8080`.

---

## 🛠 Step 2: Set up the Tunnel

### Method A: Via Command Line (Quickest)
1. Authenticate cloudflared:
   ```bash
   cloudflared tunnel login
   ```
2. Create a tunnel:
   ```bash
   cloudflared tunnel create gym-system-tunnel
   ```
3. Route traffic to your tunnel:
   ```bash
   cloudflared tunnel route dns gym-system-tunnel gym.yourdomain.com
   ```
4. Run the tunnel:
   ```bash
   cloudflared tunnel run --url http://localhost:8080 gym-system-tunnel
   ```

### Method B: Via Cloudflare Dashboard (Recommended)
1. Go to **Zero Trust** in your Cloudflare Dashboard.
2. Navigate to **Networks** -> **Tunnels**.
3. Click **Create a Tunnel**.
4. Choose **Cloudflared** and give it a name.
5. Follow the instructions to install the connector on your machine.
6. In the **Public Hostname** tab:
   - **Subdomain**: `gym` (or whatever you prefer)
   - **Domain**: Select your domain.
   - **Service Type**: `HTTP`
   - **URL**: `localhost:8080`
7. Save the tunnel.

---

## ✅ Benefits
- **No Port Forwarding**: You don't need to open ports on your router.
- **Security**: Your origin IP is hidden behind Cloudflare.
- **SSL/TLS**: Cloudflare handles HTTPS automatically.
- **DDoS Protection**: Benefit from Cloudflare's global edge network.

## 🚀 Alternative: Cloud Hosting
If you want to move away from local hosting, you can deploy this Docker setup to:
- **DigitalOcean App Platform** (Supports Docker)
- **Railway.app** (Very easy Docker deployment)
- **Render.com**

For any of these, simply push this repository to GitHub and connect it to the service.
