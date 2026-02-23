# Joyful Orlando

A Nuxt.js website promoting conscious wellness events in Orlando, FL.

## Architecture

- **Framework**: Nuxt 3 with SSR/ISR
- **Data Source**: Airtable (Events, Locations/Venues, Categories tables)
- **Styling**: Custom CSS + Bootstrap grid
- **Deployment**: Replit with ISR caching

## Key Directories

- `pages/` - Nuxt pages (events, venues, about, custom event landing pages)
- `components/` - Vue components (EventCard, CategoryButton, FloDeskSignUp)
- `composables/` - Shared state (useEvents, useLocations, useCategories)
- `server/api/` - API routes fetching from Airtable
- `types/` - TypeScript interfaces (IEvent, ILocation, ICategory)
- `assets/styles/` - Global CSS (style.css, responsive.css, all.css)
- `public/images/` - Static images

## Data Flow

1. Airtable tables → `server/api/*.ts` endpoints → composables → pages/components
2. Locations API fetches Name, Address, Logo fields; generates numeric slug (e.g., "1-urban-ashram")
3. Events reference locations via `locationId` (Airtable record ID)

## Pages

- `/` - Homepage with featured events
- `/events` - Browse all upcoming events with search and category filter
- `/event/[slug]` - Individual event detail with map
- `/venues/[slug]` - Venue detail page with logo, address, venue events, and map
- `/category/[categorySlug]` - Events filtered by category
- `/about` - Team profiles
- `/winter-solstice` - Custom event landing page with Humanitix ticketing
- `/fusionfest` - FusionFest event page (redirects to /events)

## Color Palette

- Purple: #9F64FC
- Orange: #FE7D15
- Sky Blue: #62CBFB
- Green: #01A652
- Pink: #FF839F

## Environment Variables

- `AIRTABLE_API_KEY` - Airtable API key
- `AIRTABLE_BASE` - Airtable base ID
- `AIRTABLE_ENDPOINT_URL` - Airtable endpoint (defaults to https://api.airtable.com)
- `GOOGLE_MAPS_API_KEY` - Google Maps Embed API key

## Dev Server

- Runs on port 5000, host 0.0.0.0
- Custom event pages (winter-solstice, fusionfest) use Humanitix iframe widgets that require onMounted reinitialization for SPA navigation
