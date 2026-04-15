

# About the Project: Pi-Server Monitor

This project is a custom-built, full-stack monitoring solution designed to track the health and status of a **Raspberry Pi 5** acting as a home server (**Homelab**).

<img width="836" height="624" alt="image" src="https://github.com/user-attachments/assets/7c7f3390-2184-490a-961e-7bb623fa09c7" />

The main goal is to ensure the server is operational ("alive") and maintaining safe operating temperatures, providing remote access to these metrics from anywhere in the world.

## 🏗️ Technical Stack

- **Frontend:** Next.js (App Router) & Tailwind CSS.
- **Backend as a Service:** Supabase (Database, Auth, and Edge Functions).
- **Hosting/Infrastructure:** Cloudflare Pages (via OpenNext).
- **Local Automation:** Bash scripting & Crontab.

## ⚙️ How it Works

### 1. The Heartbeat System (Local)
The Raspberry Pi runs a **Shell script** every 10 minutes via a **Cron job**. This script:
- Retrieves the current CPU temperature using system commands.
- Sends a `POST` request (via `curl`) to the Supabase REST API.
- Logs a "heartbeat" entry in the database.

### 2. Intelligent Alerting (Edge)
A **Supabase Edge Function** monitors the `heartbeat` table. 
- It is triggered to check for inactivity. 
- If no heartbeat is detected for more than **25 minutes**, the system automatically sends an **email alert** notifying that the server is likely down.

### 3. Monitoring Dashboard (Web)
The Next.js application serves as the command center:
- **Security:** Protected by **Supabase Auth**, ensuring only the owner can access the metrics.
- **Data Visualization:** Fetches data from Supabase to display:
    - Current server status (Online/Offline).
    - Latest recorded CPU temperature.
    - Average temperature over the last hour.
    - Timestamp of the last successful connection.

## 🧠 Learning Objectives
This project served as a deep dive into:
- **Remote Systems Management:** Handling hardware-to-cloud communication.
- **Serverless Architectures:** Utilizing Edge Functions for proactive monitoring.
- **Web Optimization:** Deploying Next.js applications on Cloudflare's global network.
- **Security Best Practices:** Implementing secure authentication and API key management in a Homelab environment.

---
*Developed by Martin — Computer Science Student & Developer.*
