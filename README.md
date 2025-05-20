# React Music Player

This project is a web-based music player application built with React. It allows users to navigate a music library, explore different artists and albums, and view details for individual tracks.

## Key Features

*   Browse and discover music through "Explore" and "Library" sections.
*   View detailed information about artists.
*   Explore albums by specific artists.
*   See details for individual tracks.
*   (Note: Playback functionality may be available for tracks, but this is not explicitly confirmed by the current file structure.)

## Tech Stack

*   React
*   React Router
*   TypeScript
*   Vite
*   Tailwind CSS

## Getting Started

### Prerequisites

Ensure you have Node.js and npm (or a compatible package manager like Yarn) installed on your system.

### Installation & Setup

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

#### Development Mode

To run the application in development mode:

```bash
npm run dev
```

This will start a development server, typically accessible at `http://localhost:3000` (the exact port will be displayed in your console). The development server uses a mock API (`mock-server/`) which serves data from `tracks.json` to simulate a backend.

#### Building for Production

To build the application for production:

```bash
npm run build
```

#### Running in Production Mode

After building the application, you can serve the production build using:

```bash
npm run start
```
This command will start a server to serve the optimized, static assets.

## Project Structure

```
react-music-player/
├── app/                # Contains the core application code (React components, routes, hooks, utils)
├── mock-server/        # Includes a simple mock server and data (tracks.json) for development
├── public/             # Static assets like favicon.ico
├── .dockerignore       # Specifies intentionally untracked files for Docker
├── .gitignore          # Specifies intentionally untracked files for Git
├── Dockerfile          # Instructions for building a Docker image
├── README.md           # This file, providing project documentation
├── package-lock.json   # Records exact versions of dependencies
├── package.json        # Project metadata, dependencies, and scripts
├── react-router.config.ts # Configuration for React Router
├── tsconfig.json       # TypeScript compiler configuration
└── vite.config.ts      # Vite configuration file
```

## Typechecking

This project uses TypeScript for static typing. To check for type errors, run:

```bash
npm run typecheck
```
