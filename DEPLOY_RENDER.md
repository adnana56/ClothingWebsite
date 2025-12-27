# Deploying to Render.com

Since you prefer Render, here is the complete setup.

## ⚠️ Database Constraint
**Render DOES NOT offer free MySQL databases.** They only offer PostgreSQL.
Since your app is built for **MySQL**, you have two options:
1.  **Option A (Recommended)**: Use a free MySQL database from **Aiven.io** or **Clever-Cloud.com** and connect it to Render.
2.  **Option B**: Create a generic Web Service on Render and connect it to your *existing* Railway database (if it's still running).

---

## Step 1: Create the Web Service
1.  Push the new `render.yaml` file to GitHub:
    *   `git add .`
    *   `git commit -m "add render config"`
    *   `git push`
2.  Go to [dashboard.render.com](https://dashboard.render.com/).
3.  Click **New +** -> **Blueprint**.
4.  Connect your `ClothingWebsite` repository.
5.  Render will detect `render.yaml`. Click **Apply**.

## Step 2: Configure Environment Variables
Render will ask you for values for the variables I defined in `render.yaml`.

You need a MySQL Database URL.
**If you don't have one, sign up for [Aiven Console](https://console.aiven.io/) (Free MySQL).**

Fill in the variables in Render Dashboard:
*   `SPRING_DATASOURCE_URL`: `jdbc:mysql://<HOST>:<PORT>/<DB_NAME>?useSSL=false`
*   `SPRING_DATASOURCE_USERNAME`: `<YOUR_USER>`
*   `SPRING_DATASOURCE_PASSWORD`: `<YOUR_PASSWORD>`

## Step 3: Success
Once deployed, Render will give you a URL (e.g. `https://clothing-store-backend.onrender.com`).
Update your Frontend `.env` with this new URL.
