# Backend Deployment Guide (No Docker Required)

You want to deploy **without using Docker**. The best way to do this is to use **Railway** or **Render** with their "Native Build" features. They effectively build your Java app just like you do on your computer (`mvn package`).

---

## Recommended: Railway (Easiest)

Railway can automatically detect your Java code and build it using "Nixpacks" (no Dockerfile needed).

### Step 1: Prepare Your Code
1.  Make sure your code is on **GitHub**.
2.  (Optional) You can delete the `Dockerfile` in your backend folder if you want to be 100% sure it's not used, but you can also just ignore it.

### Step 2: Create Project on Railway
1.  Go to [railway.app](https://railway.app/) and login.
2.  Click **New Project** -> **Provision MySQL** (this gives you a database).

### Step 3: Deploy Backend
1.  Click **New** -> **GitHub Repo**.
2.  Select your `ClothingWebsite` repo.
3.  **Critical Step**: Configure the Root Directory.
    *   Click the new service card.
    *   Go to **Settings** -> **Root Directory**.
    *   Enter: `/backend`
    *   *Railway should automatically detect "Java" or "Checkmark" (Nixpacks).*

### Step 4: Configure Variables
1.  Go to **Variables** tab in your Backend Service.
2.  Add the connection details (Railway provides these from your MySQL service):
    *   `SPRING_DATASOURCE_URL`: `jdbc:mysql://${MYSQLHOST}:${MYSQLPORT}/${MYSQLDATABASE}`
    *   `SPRING_DATASOURCE_USERNAME`: `${MYSQLUSER}`
    *   `SPRING_DATASOURCE_PASSWORD`: `${MYSQLPASSWORD}`
    *   `PORT`: `8080`

### Step 5: Verify
1.  Railway will build your app (you'll see "Building with Nixpacks" in logs).
2.  Once active, go to **Settings** -> **Networking** -> **Generate Domain**.
3.  Use this URL for your Frontend (`REACT_APP_BACKEND_URL`).

---

## Troubleshooting

### Error: `Driver com.mysql.cj.jdbc.Driver claims to not accept jdbcUrl, jdbc:sqlserver://...`
**Problem:** Your `SPRING_DATASOURCE_URL` variable in Railway is wrong. It is pointing to a **SQL Server** database instead of MySQL.
**Fix:**
1.  Go to **Variables** tab in Railway.
2.  Find `SPRING_DATASOURCE_URL`.
3.  Change it to: `jdbc:mysql://${MYSQLHOST}:${MYSQLPORT}/${MYSQLDATABASE}`

### Error: `Application run failed` or `CrashLoopBackOff`
*   Check if `PORT` variable is set to `8080`.
*   Check if Database variables are correct.

---

## Step 6: How to Run / Verify the Project

Once the deployment is marked **Active (Green)** in Railway:

1.  **Access the Backend**:
    *   Click the link provided in the Railway Dashboard (e.g. `https://clothingwebsite-production.up.railway.app`).
    *   You might see a 404 or white page initially because the root `/` path might not have content.
    *   Try accessing a specific endpoint like `/allproducts`:
        `https://clothingwebsite-production.up.railway.app/allproducts`
        -> **If you see JSON data (products), IT IS WORKING!**

2.  **Connect Your Frontend**:
    *   **Locally**: Use `npm start`. It will now use the live backend because we updated your `.env` file.
    *   **Deployed Frontend (e.g. Vercel)**:
        *   Go to Vercel Settings -> Environment Variables.
        *   Update `REACT_APP_BACKEND_URL` to your new Railway URL.
        *   Redeploy the Frontend.

