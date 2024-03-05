# Project "Chat (Slack)"
[![Actions Status](https://github.com/Teihden/frontend-project-12/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Teihden/frontend-project-12/actions)
[![CI](https://github.com/Teihden/frontend-project-12/workflows/CI/badge.svg)](https://github.com/Teihden/frontend-project-12/actions/workflows/CI.yml)

## About

**"Chat (Slack)"** is real-time application, analog of Slack chat (simplified version) on React/Redux, using AJAX, REST, Websockets, React (with hooks) + Redux (@reduxjs/toolkit) + Formik.

## Render Deployment
[https://frontend-project-12-634s.onrender.com/](https://frontend-project-12-634s.onrender.com/)

## Usage

You should have Node.js installed before proceeding. Only test JS against v21 and on macOS.

```shell
# Clone the repo
git clone https://github.com/Teihden/frontend-project-12
cd frontend-project-12

# Runs the linter to check frontend code for errors and style violations.
make lint-frontend

# Performs installation of project dependencies from package.json
make ci

# Starts the development server for the frontend
make start-frontend

# Starts the development server for the backend
make start-backend

# Runs concurrent development for both frontend and backend in watch mode
make develop

# Cleans the frontend build directory (frontend/build) and runs the build process
make build

# Starts the server to serve the application in a production environment.
make server
```

