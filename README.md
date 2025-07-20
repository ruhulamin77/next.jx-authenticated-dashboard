# Next.js Authenticated Dashboard

This is an authenticated dashboard built with [Next.js](https://nextjs.org), featuring protected routes, login/logout functionality, and external user data fetching.

## Features

- **Authentication:** Login with credentials, token stored in HttpOnly cookie.
- **Protected Dashboard:** `/dashboard` route is protected by middleware.
- **Logout:** Secure logout clears authentication token.
- **External API:** Fetches user data from [ReqRes](https://reqres.in).
- **Tailwind CSS:** For rapid UI development.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` — Main app directory (pages, API routes)
- `components/` — Reusable React components
- `middleware.js` — Route protection logic
- `public/` — Static assets

## Authentication Flow

1. **Login:**

   - POST `/api/login` with email and password.
   - On success, sets a HttpOnly cookie (`token`).

2. **Protected Route:**

   - `/dashboard` is protected by [`middleware.js`](middleware.js).
   - Redirects to `/login` if not authenticated.

3. **Logout:**
   - POST `/api/logout` clears the token cookie and redirects to `/login`.

## Customization

- Edit `app/page.tsx` for the homepage.
- Update styles in `app/globals.css`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
