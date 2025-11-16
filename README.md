# TailBlade WP

![Theme preview](./screenshot.png)

> Logos belong to their respective owners.

TailBlade WP is a WordPress starter theme that pairs Blade templating with a modern front-end toolchain.

Composer manages PHP dependencies, Tailwind CSS v4 handles styling, the scripts are written in TypeScript, Vite covers bundling and hot module replacement, and smooth routing & page transitions are powered by Barba.js.

## Tech Stack

- WordPress + BladeOne for templating
- Tailwind CSS v4 (`@tailwindcss/vite`)
- TypeScript + Vite
- Barba.js for SPA-style routing and transitions
- Composer for PHP dependencies, pnpm for Node tooling

## Getting Started

1. Install Node dependencies: `pnpm install`
2. Install PHP dependencies: `composer install`
3. Start the development server: `pnpm dev`

Vite runs on port `5173` by default. Ensure `VITE_ENVIRONMENT_TYPE` is set to `dev` in your WordPress configuration to enable hot reloading and Barba routing during development.

## Build & Deployment

- `pnpm build` – creates the production bundle in `dist/` and generates `manifest.json`
- `pnpm preview` – serves the production build locally for final checks  
  The production manifest is read by `includes/setup/vite.config.php` to enqueue hashed assets.

## Visualizer

The bundle visualizer is integrated using `rollup-plugin-visualizer`.  
A report is generated automatically during each build:

- After `pnpm build`, open the file:  
  **`stats.html`** (located in the root of the theme)
- The report shows:
  - bundle size breakdown
  - tree-shaken modules
  - imported dependencies
  - compressed size (gzip / brotli)

Useful for checking bundle weight and identifying heavy modules.

## Project Structure

- `functions.php` – boots BladeOne, registers helpers, and wires the Vite asset loader
- `includes/`
  - `setup/` – theme setup, vite loader, Blade config
  - `helpers/` – misc helpers
  - `posts/` – CPT logic
- `views/` – Blade templates (`layouts`, `partials/layout`, `partials/ui`, `pages`)
- `src/`
  - `scripts/core` – base classes, router, utils
  - `scripts/modules` – components
  - `scripts/pages` – page controllers
  - `styles/app.css` – Tailwind v4 entrypoint
  - `styles/css/` – custom vanilla CSS (`_fonts.css`, `_wysiwyg.css`)

## Routing & Transitions

`src/scripts/main.ts` registers pages and modules with Barba.js.  
Each page extends the shared `Page` base class and participates in lifecycle hooks for transitions and page-specific logic.

## Useful Notes

- ESLint (Airbnb base) runs during dev using `@nabla/vite-plugin-eslint`.
- Tailwind config lives directly in `app.css` via `@theme` / `@utility`.
- Blade template cache is stored in `/cache` — must be writable.
- Composer is configured to remove `composer.lock` during install/update to keep the theme distribution-friendly.
