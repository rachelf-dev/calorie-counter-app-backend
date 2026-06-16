# Calorie Counter Backend

Node.js + Express backend for the Calorie Counter app.

## Setup

Run `npm install`, copy `.env.example` to `.env`, then run `npm run dev`.

The API health endpoint is `GET /api/health`.

## Project Structure

`config/` MongoDB connection.
`controllers/` Request handlers.
`jobs/` Scheduled jobs.
`middleware/` Auth, admin, logger, upload middleware.
`models/` Mongoose models.
`routes/` Express routes.
`scripts/` Utility scripts, including CSV seed.
`services/` Email and chart services.
`uploads/` Uploaded profile images.
`data/` Product CSV file.
# Calorie Counter Backend

Node.js + Express backend for the Calorie Counter app.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

The API health endpoint is available at:

```text
GET /api/health
```

## Project Structure

```text
config/       MongoDB connection
controllers/  Request handlers
jobs/         Scheduled jobs
middleware/   Auth, admin, logger, upload middleware
models/       Mongoose models
routes/       Express routes
scripts/      Utility scripts, including CSV seed
services/     Email and chart services
uploads/      Uploaded profile images
data/         Product CSV file
```
