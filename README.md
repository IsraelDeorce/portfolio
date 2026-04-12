# Portfolio

My Portfolio app built with React, TypeScript, Vite, and a small Express server for serving the production bundle.

## Project Structure

- `src/`: frontend app source
- `public/`: static public assets such as the favicon
- `server/`: standalone Node.js Express server for production serving
- `dist/`: generated frontend build output

## Requirements

- Node.js `24.x`
- npm

## Run Locally

Install dependencies:

```bash
npm install
cd server && npm install
```

Start the frontend dev server:

```bash
npm run dev
```

This starts Vite for local frontend development.

## Production Build

Build the frontend bundle:

```bash
npm run build
```

Serve the built app with Express:

```bash
npm start
```

The Express server serves files from `dist/` and falls back to `index.html` for client-side routes.

## Testing

There is no formal automated test suite yet. For now, use these checks:

```bash
npm run build
npm start
```

Then open `http://localhost:3000` and verify:

- the page loads
- the favicon appears in the browser tab
- the bundled test asset renders on the page

## Docker

Build the production image:

```bash
docker build -t portfolio .
```

Run it locally:

```bash
docker run --rm -p 3000:3000 portfolio
```

The container uses the latest Node `24` Alpine image and starts the Express server on port `3000`.

To run it in the background with a name:

```bash
docker run -d --name portfolio-app -p 3000:3000 portfolio
```

To stop a running container:

```bash
docker stop portfolio-app
```

If you did not name the container, find it first:

```bash
docker ps
docker stop <container-id>
```
