# TODO App

A simple React-based TODO application.

## Tech Stack

- **Frontend:** React 16, Create React App (react-scripts 3.4.1)
- **Styling:** Bootstrap 4, react-bootstrap
- **Package Manager:** npm

## Project Structure

```
src/
  App.js         - Main component with TODO logic (add, delete, toggle)
  index.js       - React entry point
  App.css        - App styles
  index.css      - Global styles
public/
  index.html     - HTML template
```

## Running the App

The app runs on port 5000. The workflow command is:

```
NODE_OPTIONS=--openssl-legacy-provider PORT=5000 HOST=0.0.0.0 DANGEROUSLY_DISABLE_HOST_CHECK=true npm start
```

### Notes

- `NODE_OPTIONS=--openssl-legacy-provider` is required because react-scripts 3.x uses an older webpack that is incompatible with Node.js 20's OpenSSL defaults.
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` allows the Replit proxy to access the dev server.
- `HOST=0.0.0.0` binds to all interfaces for the preview pane.
