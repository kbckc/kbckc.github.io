# AGENTS.md for kbckc.github.io

Static landing page for KBCKC, deployed to GitHub Pages.
Built with Vite, TypeScript, and Tailwind CSS styling.

## Build and Lint

Uses Yarn 4 as the package manager.

```sh
yarn install        # install dependencies
yarn dev            # local dev server (Vite)
yarn build          # type-check + production build → dist/
yarn preview        # preview production build locally
yarn lint           # ESLint (flat config)
```

Vite root is `src/`; built output goes to `dist/`.

## Code Style

ESLint enforces style. Key rules from the config:

- Single quotes, semicolons, trailing commas in multiline, 1tbs brace style
- TypeScript: `strictTypeChecked` + `stylisticTypeChecked` (typescript-eslint)
- HTML files are linted via `@html-eslint/parser`
- Tailwind class ordering enforced by `eslint-plugin-better-tailwindcss`

Always run `yarn lint` before considering changes complete.

## Architecture

- `src/index.html`: Entire page structure and navigation
- `src/main.ts`: Runtime behavior
- `src/style.css`: Tailwind entry point

## Conventions

- All source files live under `src/`. Do not add files outside `src/` unless they are config/tooling at the repo root.
- Keep `main.ts` focused on behavioral enhancements only; content belongs in `index.html`.
- The Skylight link (`#skylight-link`) is hidden by default and revealed by the Konami code; do not make it visible by default.
- When adding navigation links, match the existing `<a>` class pattern for consistent button styling.
- Do not commit real telemetry secrets; keep the Application Insights connection string placeholder and inject real values at deploy time.

---

This file must be kept up to date as changes to the app are made.
