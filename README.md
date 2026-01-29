# BrainSlate

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

## Using this on your computer (step-by-step)

Follow these steps if you want to run BrainStack locally on your machine.

1) Install prerequisites

- Node.js (v18+) and npm or yarn
- A MongoDB server (either locally installed or a cloud provider such as MongoDB Atlas)

2) Prepare the backend environment

- Rename or copy `backend/.env.example` to `backend/.env` and fill in values.
- If you use MongoDB Atlas, create a cluster and then create a database user — copy your connection string and set `MONGO_URI` in `.env`.
- Upstash (optional but recommended for rate-limiting) — sign up and create a Redis REST instance. Add the provided `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` to your `.env`.

3) Run the backend

```bash
cd backend
npm install
# copy or create backend/.env using .env.example
npm run dev
```

The server logs will show the bind port (configured with `PORT`), and the API endpoints are under `/api/notes`.

4) Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open your browser at http://localhost:5173 (vite's default). The frontend is configured to call the backend at http://localhost:<PORT> — the backend's `PORT` value is used by the server.

Troubleshooting tips

- If the frontend cannot reach the API, make sure the backend is running and `PORT` is set in `backend/.env`.
- If you receive rate limiting errors, verify your Upstash credentials and Redis status.
- For database connection issues, check the `MONGO_URI` value and make sure your IP is allowed (Atlas) or MongoDB is running locally.

## Screenshots

Below are a few screenshots from the running frontend (located in `frontend/src/assets`). If you open the repo on GitHub these will render inline.

- Notes list / Home

	![Notes List](frontend/src/assets/Screenshot%202025-11-24%20at%2018.41.36.png)

- Create note

	![Create Note](frontend/src/assets/Screenshot%202025-11-24%20at%2018.45.32.png)

- Note detail

	![Note Detail](frontend/src/assets/Screenshot%202025-11-24%20at%2018.48.34.png)

- Rate-limited UI

	![Rate Limited UI](frontend/src/assets/Screenshot%202025-11-24%20at%2018.48.50.png)

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
Feel free to open issues or submit pull requests.
