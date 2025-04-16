# Nuxt Joyful Orlando Project

The project is based on the Nuxt 3 framework.
It is designed to be deployed as a static site. The server is needed for generating 
the static files, but it is not required for the deployment itself.

> [!IMPORTANT]
> This Nuxt project skips some best practices regarding component usage and code reuse
> in order to provide the easiest way for a non-Vue designer to work with it.
> Bootstrap classes can be used directly as in a standard Bootstrap project.
> Bootstrap JavaScript is **not** included.

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Setup Environment Variables
Create a `.env` file in the root directory and add the following variables:

```bash
AIRTABLE_ENDPOINT="the airtable endpoint"
AIRTABLE_API_KEY="the airtable API key"
AIRTABLE_BASE="the airtable base id"
````

You can create a personal airtable access token [here](https://airtable.com/create/tokens).
The token should have permissions to read the base you want to access:
`data.records:read` and `schema.bases:read`. 

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Package Contents
- `assets/`: Assets folder for compilation by the build tool:
	- `assets/fonts`: Font files
    - `assets/styles`: CSS files
    - `assets/webfonts`: FontAwesome webfonts
> [!NOTE]
> These are mostly files from the original design repository.

- `components/`: Vue components. Used minimally in order to maintain the standard bootstrap workflow.
- `composables/`: Vue composables.
- `layouts/default.vue`: Default layout of the app, all pages use it.
- `pages/`: Pages of the app. Each file in this folder corresponds to a route.
- `public/`: Static files. These files are copied to the root of the build folder, and will be served directly.
- `server/`: Server files.
	- `server/api/`: API routes. These routes are used to connect to Airtable and return the data to the client.
    - `server/client.ts`: Airtable client file that connects to the Airtable API.
- `tests/`: Tests folder. Contains tests for the app.
- `types/`: Types folder. Contains types for the app.
- `utils/`: Utility functions.
	- `utils/dateFormat.ts`: Date formatting function.

## Production

Build the application for production:

```bash
# npm
npm run generate
```

Locally preview production build:

```bash
# npm
npx serve .output/public 
```

## Testing
Run tests:

```bash
# npm
npm run test
```

Currently, only minimal tests are included, using vitest.
