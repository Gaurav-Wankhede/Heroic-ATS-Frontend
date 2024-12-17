# Frontend Application README

## About Project
This is the frontend application for the ATS platform. It is built using Next.js and includes features for user interface and interaction with the backend API.

## Steps to Install for Windows, Linux, Mac

1. **Install dependencies:**
    ```bash
    npm install
    ```
2. **Run the application:**
    ```bash
    npm run dev
    ```
    The application will start on `http://localhost:3000` by default.

## Running Locally

To run the application locally, you need to start the Next.js development server.

### Environment Variables

The frontend application uses environment variables to configure the connection to the backend API. These variables are defined in the `.env.local` file in the `frontend/` directory.

-   **`NEXT_PUBLIC_API_URL`**: The URL of the backend API.
    -   **File:** `frontend/.env.local`
    -   **Line:** `NEXT_PUBLIC_API_URL=Your_Backend_Deployed_Link`

If you are running the backend locally on a different port, you need to update this variable accordingly. For example:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Changing the Host and Port

-   **Host:** The default host is `localhost`. The Next.js development server listens on all available network interfaces.
-   **Port:** The default port is `3000`. You can change this by using the `-p` flag when starting the development server:
    ```bash
    npm run dev -- -p 4000
    ```
    This will start the application on `http://localhost:4000`.

### Configuration File

The `frontend/lib/config.ts` file contains configuration settings for the frontend application. Currently, it only exports the `NEXT_PUBLIC_API_URL` from the environment variables.

```typescript
// frontend/lib/config.ts
export const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
```

## Deployment Process on Vercel
The frontend is deployed on Vercel. The `next.config.js` file is configured to export the application as a static site, which is then deployed to Vercel.

## Deployed Links
frontend: https://heroic-ats-frontend.vercel.app/

## Follow for more:
Linkedin: https://www.linkedin.com/in/wankhede-gaurav/ 
Portfolio: https://gaurav-wankhede.vercel.app/
Instagram: https://www.instagram.com/_gaurav_wankhede_/
