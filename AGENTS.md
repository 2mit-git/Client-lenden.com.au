<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Lenden Epicurean — Agent Guide

This is the **Lenden Epicurean** website (`learn101`), a premium food & specialty-shop marketing site built with **Next.js 16**, **React 19**, **TypeScript**, and **Vanilla CSS Modules**. Read this entire file before touching any code.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Vanilla CSS Modules (`.module.css`) per component |
| Global Styles | `app/globals.css` (CSS custom properties only — no utility classes) |
| Animations | Framer Motion 12, `@tsparticles/react` + `@tsparticles/slim` |
| Icons | `react-icons` v5 |
| Fonts | Google Fonts via `next/font/google` — Inter (`--font-inter`) & Noto Serif (`--font-noto-serif`) |
| Deployment | Netlify |

---

## Project Structure

```
learn101/
├── app/
│   ├── globals.css          # Global CSS variables + resets
│   ├── layout.tsx           # Root layout — wraps everything in ThemeProvider + ThemeEffects
│   ├── page.tsx             # Home page
│   ├── poultry/             # /poultry route
│   ├── premium/             # /premium route
│   ├── rotisserie/          # /rotisserie route
│   └── seafood/             # /seafood route
├── components/              # All shared UI components (co-located with CSS Modules)
│   ├── Header.tsx / Header.module.css
│   ├── Footer.tsx / Footer.module.css
│   ├── ThemeEffects.tsx     # tsParticles ambient effects (client component)
│   └── ...
├── context/
│   └── ThemeContext.tsx     # Global theme state + CSS variable injection
├── public/                  # Static assets
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Theming System — CRITICAL

The entire site uses a **CSS custom-property theming system**. Never hardcode colours anywhere.

### How it works

1. **`context/ThemeContext.tsx`** — defines all themes and active theme state.
   - Themes are applied by writing CSS custom properties directly to `document.documentElement.style`.
   - Theme is persisted in `localStorage` under the key `lenden-theme`.
   - `ThemeProvider` wraps the entire app in `app/layout.tsx`.

2. **Available themes** (`ThemeKey` union type):
   - `default` — Lenden Classic (deep maroon + cream + gold)
   - `summer` — Summer Blaze (warm amber/orange)
   - `winter` — Arctic Frost (icy blue)
   - `christmas` — Christmas Eve (red + gold + green)
   - `eid` — Eid Mubarak (green + gold)

3. **CSS Custom Properties** — every component **must** consume these variables:

   | Variable | Purpose |
   |---|---|
   | `--epicurean-maroon` | Primary brand / heading colour |
   | `--cream-surface` | Page / section background |
   | `--golden-accent` | Accent, buttons, highlights |
   | `--text-primary` | Main body text |
   | `--text-secondary` | Subdued / caption text |
   | `--border-divider` | Borders and dividers |
   | `--surface-dim` | Slightly dimmed surface backgrounds |
   | `--white` | Pure white (theme-aware, avoid raw `#ffffff`) |
   | `--theme-glow` | Box-shadow / glow effects |
   | `--theme-gradient-from` | Gradient start colour |
   | `--theme-gradient-to` | Gradient end colour |
   | `--footer-bg` | Footer background |
   | `--surface-card` | Card / panel background |
   | `--text-on-card` | Text colour on cards |
   | `--text-on-dark` | Text colour on dark / coloured backgrounds |

4. **`components/ThemeEffects.tsx`** — renders ambient particle animations (tsParticles) per theme. Rendered at the root level above `{children}` so it is always global. Returns `null` for the `default` theme.

### Rules

- **Never hardcode a colour value** (hex, rgb, hsl). Always use a CSS variable from the list above.
- To add a new theme: add a key to `ThemeKey`, add a full `ThemeDefinition` object (all 14 variables required) to `themes`, and add a `case` to `ThemeEffects.tsx`.
- **`ThemeContext` is a client component** (`"use client"`). Never import it directly in a Server Component; pass theme values down as props or use a wrapping client component.

---

## Styling Conventions

- **CSS Modules only.** Each component has a co-located `ComponentName.module.css` file.
- **No inline styles** for anything themeable. Use CSS Modules + CSS variables.
- Inline styles are acceptable only for computed/dynamic values (e.g., particle container geometry in `ThemeEffects.tsx`).
- **No Tailwind utility classes** in JSX unless the user explicitly requests it.
- Global utility classes live in `app/globals.css` (`.container`, `.section-padding`, `.mb-*`).
- Responsive breakpoints: use standard media queries inside `.module.css` files. Common breakpoints used across the project: `768px`, `1024px`, `1280px`.

---

## Component Conventions

- All components under `components/` are **Server Components by default** unless they use hooks, browser APIs, or event handlers — in which case add `"use client"` at the top.
- Framer Motion: import from `"framer-motion"`. When defining variants, use explicit `Variants` typing from `"framer-motion"` to avoid TypeScript errors (this was a prior build issue).
- Page files (`app/**/page.tsx`) export a default React component. They may compose multiple components.
- Layout-level providers (`ThemeProvider`, `ThemeEffects`) are registered once in `app/layout.tsx` only.

---

## Commands

```bash
# Development server
npm run dev

# Production build (validate only if explicitly requested or debugging build errors)
npm run build

# Lint
npm run lint
```

> Always run `npm run build` after significant changes to catch TypeScript and Next.js compiler errors before finishing.

---

## Known Constraints & Past Issues

- **Framer Motion TypeScript errors**: Variant objects must be typed as `Variants` from `"framer-motion"`. Do not use inferred types on variant maps — cast explicitly if necessary. See past conversation `dcc303d4` for context.
- **Hydration**: `app/layout.tsx` uses `suppressHydrationWarning` on `<body>` to handle theme injection differences between server and client renders. Do not remove this.
- **tsParticles**: The engine must be initialised once via `initParticlesEngine` inside a `useEffect` with an empty dependency array. Never call `loadSlim` outside of this initialiser.
- **`ThemeContext` timing**: `ThemeProvider` uses a `mounted` guard before writing to `localStorage` and the DOM to prevent SSR mismatches. Preserve this pattern if modifying the provider.

---

## Adding New Pages or Sections

1. Create `app/<route>/page.tsx` for new routes.
2. Create components under `components/` with co-located CSS Modules.
3. Always consume CSS variables — never hardcode colours.
4. If the section has a dark/coloured background, use `--text-on-dark` for text and `--text-on-card` for card text.
5. Ensure the page exports correct `Metadata` for SEO (title + description).

---

## Admin Product Management

The `/product` route contains an all-in-one Admin Product Management dashboard.

- **Authentication**: JWT-based authentication via Supabase REST API. Session is managed via `AuthContext` (in-memory, clears on refresh).
- **Data Access**: Uses a custom `lib/supabaseClient.ts` wrapper around `fetch()` to call the Supabase REST API endpoints (`/rest/v1/*` and `/storage/v1/*`). No Supabase SDK (`@supabase/supabase-js`) is installed to keep the bundle small.
- **Architecture**: Single-page dashboard containing a branch selector, product grid, and full CRUD operations. Modals are used for creating/editing products (`ProductFormModal`) and deleting them (`ConfirmModal`).
- **Images**: Direct upload to Supabase Storage via `ImageUploader` component. `next.config.ts` allows `pmdpzdyzzhsdrakiwdds.supabase.co` remote patterns.
