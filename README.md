# photos-app
Paginated viewing gallery of publicly available images.

## Overview
The client and server projects are broken into separate folders `client` and `server`.

### Webapp (/client)
- This is a basic react app created through create-react-app.
- `client` has linting (eslint) and formatting (prettier) setup
    - See `client`-specific build instructions below for how to run

### API (/server)
Inside of `server` you'll find an Express server.

## Getting started
1. In order to run locally you'll need to install depencies in both the root directory and `client`
- `yarn install` (root), then `yarn install` (/client)
2. Create an .env file inside of the /server directory and fill with the following:
PEXELS_API_KEY="{YOUR_PERSONAL_API_KEY_HERE}"
PEXELS_API_ENDPOINT="https://api.pexels.com/v1"
ORIGIN = *
CREDENTIALS = true


## Project build instructions
For running the full project (client + server) from the root directory:

### `yarn dev`
- Concurrently runs `yarn server` and `yarn client` below.
- The server code will compile and start up followed by [http://localhost:3001](http://localhost:3001) being opened up automatically in your browser.

### `yarn server`
- Concurrently compiles typescript server code in watch mode and starts express server
- Open [http://localhost:3001](http://localhost:3001) to hit it from the browser.
- The server will reload when you make changes.\
- You may also see any lint or loading errors in the console.

### `yarn client`
- Runs client react app (same as running `yarn start` from inside /client folder).
- See "Client build instructions" below for more info.

### `yarn build`
- Compiles typescript server code inside /dist output folder

## Client build instructions
For running the client separately without the server code from /client directory:

### `yarn start`
- Runs the app in the development mode.\
- [http://localhost:3000](http://localhost:3000) will be opened up automatically to view in your browser.
- The page will reload when you make changes.\
- You may also see any lint errors in the console.

### `yarn test`
- Launches the test runner in the interactive watch mode.\

### `yarn build`
- Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.\
- Your app is ready to be deployed!

### `yarn lint`
- Uses eslint rules (configured in /client/.eslintrc.json) to return linting errors/warnings in the console

### `yarn lint:fix`
- Uses eslint rules (configured in /client/.eslintrc.json) to return and fix linting errors/warnings in the console

### `yarn format`
- Uses prettier rules (configured in /client/.prettierrc) to format all client .ts files
