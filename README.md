# Exhale TWC Website

A multi-page therapy practice website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm (included with Node.js)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure as needed:

| Variable       | Description                          | Default                 |
| -------------- | ------------------------------------ | ----------------------- |
| `VITE_API_URL` | Base URL for the Directus CMS API    | `http://localhost:8055` |

## Project Structure

```
src/
├── components/
│   ├── layout/     # Header, Footer, Layout
│   └── ui/         # Reusable UI components (Button, Card)
├── hooks/          # Custom React hooks
├── pages/          # Route-level page components
├── services/       # API client and service functions
├── types/          # Shared TypeScript types
├── utils/          # Utility functions (sanitization, etc.)
└── assets/         # Static assets (images)
```

## Backend (Directus CMS)

See [`docker/directus/`](docker/directus/) for the Docker Compose setup. Copy `docker/directus/.env.example` to `docker/directus/.env` and configure before starting.
