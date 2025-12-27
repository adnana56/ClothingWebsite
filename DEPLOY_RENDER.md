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
5.  Render will detect `render.yaml` and automatically configure the backend service (including the `backend` root directory). Click **Apply**.

## Step 2: Configure Environment Variables
Render will ask you for values for the variables I defined in `render.yaml`.

## Step-by-Step: Setting up Free MySQL on Aiven

If you don't have a database, follow these steps to get a free one on Aiven:

1.  **Sign Up**: Go to [console.aiven.io](https://console.aiven.io/) and create an account.
2.  **Create Service**:
    *   Click **+ Create service**.
    *   Select **MySQL**.
    *   **Cloud**: Choose **Google Cloud** (it often has the best free tier availability) and a region (e.g., `us-east` or `europe-west`).
    *   **Service Plan**: Look for the **Free** plan (often labeled "Hobbyist" or "Free"). *Note: If asked for a credit card, you might be on a trial, but the free tier usually doesn't require it.*
    *   Name your service (e.g., `clothing-store-db`).
    *   Click **Create Service**.
3.  **Get Credentials**:
    *   Wait a moment for the service to start (Status: *Running*).
    *   On the **Overview** page, look for the **Connection information** section.
    *   You will see: `Host`, `Port`, `User`, `Password`, and `Service URI`.
    *   **Critical**: For Render, you need the individual values.

## Step 2: Configure Environment Variables in Render

When Render asks for Environment Variables (or in the "Environment" tab of your Web Service), enter these values using the info from Aiven:

*   **`SPRING_DATASOURCE_URL`**:
    *   Format: `jdbc:mysql://<HOST>:<PORT>/defaultdb?sslMode=REQUIRED`
    *   Replace `<HOST>` with the **Host** from Aiven.
    *   Replace `<PORT>` with the **Port** from Aiven.
    *   *Example: `jdbc:mysql://mysql-2b5a6c-myproject.aivencloud.com:12345/defaultdb?sslMode=REQUIRED`*
*   **`SPRING_DATASOURCE_USERNAME`**: Copy **User** from Aiven (usually `avnadmin`).
*   **`SPRING_DATASOURCE_PASSWORD`**: Copy **Password** from Aiven.

*Note: Aiven requires SSL, so keep `?sslMode=REQUIRED` at the end of the URL.*

---

## Step 3: Success
Once deployed, Render will give you a URL (e.g. `https://clothing-store-backend.onrender.com`).
Update your Frontend `.env` with this new URL.
