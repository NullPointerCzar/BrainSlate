# BrainStack

A simple full-stack note-taking application (React + Vite frontend, Express + MongoDB backend) with an Upstash-backed rate limiter.

## Table of contents
- About
- Features
- Project structure
- Requirements
- Environment variables
- Running the app (Development)
- Running the app (Production / Build)
- Contributing

## About
BrainStack is a minimal notes app demonstrating a small production-like stack: a React + Vite frontend and an Express backend using MongoDB for persistence and Upstash for lightweight rate limiting.

## Features
- Create, read, update and delete notes
- Basic request rate limiting on API
- Lightweight, opinionated code structure suitable for small demos / learning

## Project structure

Top-level folders:

```
backend/    # Express server and API
frontend/   # React + Vite single-page app
```

Backend highlights:
- `src/server.js` — main Express app
- `src/config/db.js` — MongoDB connection
- `src/config/upstash.js` — Upstash rate limiter setup

Frontend highlights:
- `src/main.jsx` — React entry
- `src/pages` and `src/components` — app pages and UI components

## Requirements
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB connection (local or cloud)

## Environment variables

Create a `.env` file in `backend/` and set these values:

- `PORT` — port the backend should listen on (e.g. `5000`)
- `MONGO_URI` — MongoDB connection URI
- Upstash credentials — the backend uses `Redis.fromEnv()` which will pick up Upstash variables from the environment. Typical Upstash envs are `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` (set according to your Upstash console).

## Running the app (Development)

Start the backend

```bash
cd backend
npm install
npm run dev
```

Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Open the frontend in your browser (vite usually runs at http://localhost:5173) and the backend logs will show the API server port.

## Running the app (Production / Build)

Build frontend and preview

```bash
cd frontend
npm run build
npm run preview
```

Run the backend in production

```bash
cd backend
npm install --production
npm start
```

## Contributing
Feel free to open issues or submit pull requests. If you want help adding tests or CI, I can add those next.

---

If you'd like, I can expand this README with screenshots, API documentation, or setup scripts for local development (docker / compose). What would you like added next?
