# Ongaku Light 🎵

<div align="center">
  
  ![Ongaku Light Banner](https://via.placeholder.com/1200x300/0078D7/FFFFFF?text=Ongaku+Light)

  [![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/aradchanka/ongaku-light)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-19.1-61DAFB.svg?logo=react&logoColor=white)](https://reactjs.org/)
  
</div>

A modern, lightweight music player web application built with React. Ongaku Light allows users to navigate a music library, explore artists and albums, and view details for individual tracks. **Note**: Currently, the application uses a mock server for data and simulated interactions; actual music playback functionality is limited to mock data.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Mock Server](#mock-server)
- [Project Structure](#project-structure)
- [Typechecking](#typechecking)
- [Contributing](#contributing)
- [Bug Reports and Feature Requests](#bug-reports-and-feature-requests)
- [License](#license)

## Features

- **Music Library Navigation**: Browse and discover music through intuitive "Explore" and "Library" sections
- **Artist Browsing**: View detailed artist profiles including biographies and top tracks
- **Album Exploration**: Browse albums by artist with cover art and release information
- **Track Details**: Access detailed information about individual tracks
- **Responsive Design**: Optimized layout for various screen sizes using Tailwind CSS
- **Mock Server Integration**: Simulated backend for development and testing

## Tech Stack

- **React** - A JavaScript library for building user interfaces
- **React Router** - Declarative routing for React applications
- **TypeScript** - JavaScript with syntax for types to enhance development experience
- **Vite** - Next generation frontend tooling for faster development
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development
- **Node.js** - JavaScript runtime for server-side applications
- **Docker** - Containerization for consistent development and deployment environments

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm (comes with Node.js) or yarn
- Git for version control

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aradchanka/ongaku-light.git
   cd ongaku-light
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode

Start the development server:

```bash
npm run dev
```

This will launch the application in development mode, typically accessible at `http://localhost:3000` (the exact URL will be displayed in your console).

#### Mock Server

To use the mock server for data (required for development):

```bash
npm run mock-server
```

This starts a simple HTTP server on port 8080 that serves mock data from the `mock-server/public` directory.

For full functionality, run both the development server and mock server concurrently (using separate terminal windows).

#### Building for Production

To create an optimized production build:

```bash
npm run build
```

#### Running in Production Mode

After building, serve the production files:

```bash
npm run start
```

This command will start a server to serve the optimized, static assets.

## Project Structure

```
ongaku-light/
├── app/                # Core application code (React components, routes, hooks, utils)
├── mock-server/        # Mock server and data files for development
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

This project uses TypeScript for static typing. To check for type errors:

```bash
npm run typecheck
```

This command will generate React Router types and then run the TypeScript compiler to verify type correctness across the project.

## Contributing

Contributions to Ongaku Light are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## Bug Reports and Feature Requests

Found a bug or have a feature request? Please open an issue on the GitHub repository with:

- For bugs: A clear description, steps to reproduce, expected behavior, and screenshots if applicable
- For feature requests: A clear description of the proposed feature and its benefits

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
