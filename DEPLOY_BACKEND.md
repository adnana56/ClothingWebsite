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

## Alternative: Render (Native Environment)

1.  Create a **Web Service** on Render.
2.  Connect your GitHub repo.
3.  **Root Directory**: `backend`
4.  **Runtime**: Select **Java** (Native Environment).
5.  **Build Command**: `mvn clean package -DskipTests`
6.  **Start Command**: `java -jar target/backend-0.0.1-SNAPSHOT.jar`
7.  Add Environment Variables for your database (you'll need an external MySQL database, e.g. from Aiven or Railway).

**Summary**: Railway is better here because it gives you the MySQL database for free/easily, whereas Render requires you to find your own.
