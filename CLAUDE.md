# Amusement Park Website — CLAUDE.md

Learning project built with Next.js: website for **Pawland**, a fictional cat-themed amusement park located in the fictional city of **Purrington**.
Educational goal: understand how Next.js App Router works compared to classic SPAs.

## Project Identity

- **Park name:** Pawland
- **Location:** Purrington (fictional city)
- **Concept:** The first amusement park entirely dedicated to cats — attractions, visuals and content all revolve around the cat universe
- **Tone:** Fun, whimsical, yet visually premium
- **Visuals:** Attraction images will be AI-generated (cats riding attractions)
- **Contact (fictional):** 12 Whisker Lane, Purrington — hello@pawland.fr

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (CSS-first, no `tailwind.config.js`)
- **Fonts:** Montserrat Black (headings) + Raleway Regular (body) via `next/font/google`
- **React:** v19 with Server Components by default

## Route Architecture

```
src/app/
├── layout.tsx          ← Root layout (HTML, body, fonts, metadata only)
├── page.tsx            ← Home page /
├── (guests)/           ← Guest route group (layout with header)
│   ├── layout.tsx      ← Applies GuestLayout (Header + main)
│   ├── attractions/    ← /attractions + /attractions/[id]
│   ├── tickets/        ← /tickets + /tickets/confirmation
│   ├── map/            ← /map
│   └── account/        ← /account + /account/profile + /account/orders
└── (admin)/            ← Admin route group (separate admin layout)
    ├── layout.tsx      ← Admin layout (future admin sidebar)
    └── admin/
        ├── dashboard/
        ├── attractions/ ← /admin/attractions + /admin/attractions/[id]/edit
        ├── tickets/
        └── users/
```

Parentheses `(guests)` and `(admin)` are Next.js **Route Groups**: they don't appear in the URL but allow different layouts per group.

## Folder Structure

```
src/
├── app/                  ← App Router (routes, layouts, pages)
├── components/
│   ├── layout/           ← Layouts (GuestLayout, AdminLayout...)
│   └── ui/               ← Reusable UI components (Header, Button, Card...)
├── hooks/                ← Custom React hooks
├── lib/                  ← Helpers, API wrappers, utilities
└── tests/                ← Unit and integration tests
```

## Conventions

### No comments
Never generate comments in code (no `//`, no `/* */`, no `{/* */}`). Code must be self-descriptive through clear naming. This rule applies to all project files.

### Naming — English only
All functions, components, classes, variables, and files must be named in **English**.

```tsx
const AccountPage = () => { ... }   // ✅
const ComptePage = () => { ... }    // ❌ French
```

### Unused parameters in dynamic pages

Dynamic route pages (`[id]`) receive `params` as props. If the parameter is unused (placeholder page), **do not declare it at all** in the function signature:

```tsx
const AttractionDetailPage = () => {   // ✅ unused params, not declared
    return <h1>Detail</h1>;
};

const AttractionDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {  // ❌ ESLint will fail
    return <h1>Detail</h1>;
};
```

When `params` is actually used, type it correctly with `Promise<{ id: string }>` (Next.js 15 — params are async).

`generateStaticParams` rules for static export (`output: 'export'`):
- Use **function declaration syntax** (not arrow function)
- Must return **at least one entry** — Next.js 15 rejects an empty array `[]`
- If the dynamic segment has children (e.g. `[id]/edit/`), put `generateStaticParams` in a `layout.tsx` at the `[id]` level, not in the child page

```tsx
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
    return [{ id: '1' }];
}
```

### Server Components vs Client Components
- **Default: Server Component** — no `'use client'` unless necessary
- Add `'use client'` **only** if the component uses:
  - `useState`, `useEffect`, `useRef` or other React hooks
  - Event handlers (`onClick`, `onChange`, etc.)
  - Browser APIs (`window`, `localStorage`, etc.)
- `Link` and `Image` from Next.js work in Server Components

### Tailwind CSS v4
- Configured via `globals.css` with `@import "tailwindcss"` — **no `tailwind.config.js`**
- PostCSS via `postcss.config.mjs` with `@tailwindcss/postcss`
- CSS custom properties in `:root` for theme colors
- Dark mode via `@media (prefers-color-scheme: dark)`

### Fonts
- Loaded in `src/app/layout.tsx` via `next/font/google`
- Injected as CSS variables: `--font-montserrat-black`, `--font-raleway-regular`
- Usage in CSS: `font-family: var(--font-montserrat-black)`
- Usage in Tailwind: configure `@theme` in `globals.css` if custom classes are needed

### Code Style

- **Functions:** arrow functions for components and callbacks
- **Return types:** annotate return types on utility functions and hooks — **not on React components** (TypeScript infers them, and `JSX.Element` is unreliable in some Next.js contexts)
- **Props:** always destructure props
- **Types:** no `any`, use `unknown` or strict generics; never use `as unknown as X` in components or hooks
- **Imports:** group in this order — `react` → `next` → external libraries → local files
- **Enums:** identifier must be in English — the string value can be in French (e.g. `MAINTENANCE = "Entretien"`, not `ENTRETIEN = "Entretien"`)

### Props interfaces

- Always named `<ComponentName>Props` (e.g. `AttractionCardProps`), co-located in the same file as the component
- Never use generic names like `interface Props`

```tsx
interface AttractionCardProps {   // ✅
    name: string;
}
interface Props {                  // ❌
    name: string;
}
```

### Component size and extraction

- **One component per file** when the component uses hooks or exceeds ~15 lines
- Inline sub-components are only acceptable for trivial, purely presentational wrappers with no hooks and no props interface
- The "used only once" argument never justifies keeping a component inline — extraction is about readability, not reuse count

### Business logic extraction

Never write business logic inline inside a component. Any computation that iterates over data, applies domain rules, or would be unit-testable in isolation must live in `lib/utils/` as a named, exported pure function.

The threshold is low: if a `useMemo` or handler body exceeds ~5 lines of logic, extract it.

```tsx
// ❌ 20-line reduce directly inside useMemo
const total = useMemo(() => attractions.filter(...).reduce(...), [attractions]);

// ✅ extract to lib/utils/attractionUtils.ts
export const getFilteredAttractions = (attractions: Attraction[], category: string) => { ... };
const total = useMemo(() => getFilteredAttractions(attractions, category), [attractions, category]);
```

### File types

- `.tsx` files must **only** contain React components
- Hooks → `.ts` files (`useXxx.ts`)
- Utilities, helpers, pure functions → `.ts` files
- **Exception**: Next.js special exports (`generateStaticParams`, `metadata`, `generateMetadata`) must live in the page/layout file — they are framework requirements, not violations

### React hooks (Client Components only)

- Always include every variable used inside `useEffect`/`useMemo`/`useCallback` in its deps array
- Define module-level constants outside the component so they are not deps
- Avoid `|| []` as a fallback directly in JSX or `useMemo` — it creates a new array reference on every render; use `useMemo` to stabilize it

### Path aliases (tsconfig.json)
- `@/*` → `src/*` (covers everything)

### Lint — zero tolerance

**`eslint-disable` comments are strictly forbidden.** Every lint error must be fixed at the root.

- **No empty `catch` blocks** — always explain why the error is intentionally ignored: `catch { /* reason */ }`
- **No ternary for side effects** — use `if/else` when the goal is mutation, not to produce a value

## Commands

```bash
npm run dev     # Development server (Turbopack)
npm run build   # Production build
npm run lint    # ESLint
```

### Static export — mandatory rules (`output: export`)

The project targets GitHub Pages via `output: "export"`. These constraints apply to the **entire** project:

- **Dynamic routes `[id]`**: must always have `generateStaticParams()` even if it returns `[]`
- **API Routes**: incompatible with static export, do not create any
- **`next/image`**: requires `unoptimized: true` (already configured)
- **`basePath`**: set to `/amusement-park-website` — required for GitHub Pages so assets resolve correctly under the subdirectory
- **Client-side redirects**: server-side `redirect()` does not work in static export — use `useRouter().replace()` inside a `useEffect` instead

Before suggesting a commit, always mentally verify these rules are respected. If in doubt, ask the user to run `npm run build` locally — it reproduces the GitHub Actions build exactly.

## Commit Convention

When I say **"commit"**, provide only the commit message — **do not execute any git command**.

The message must start with a prefix:

| Prefix | Usage |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `refactor:` | Refactoring without functional change |
| `style:` | Visual/CSS changes only |
| `chore:` | Config, dependencies, tooling |
| `docs:` | Documentation only |

Example: `feat: add navigation header with logo and links`

Commit messages must be written in **English**.

## Why Next.js vs React/Angular/Vue?

| Feature | Next.js | Classic SPA |
|---|---|---|
| SSR / SSG | Built-in | Complex to configure |
| Routing | File-based (App Router) | External library |
| Server Components | Yes (reduces client JS) | No |
| SEO | Excellent (server-rendered HTML) | Difficult |
| Image optimization | `next/image` built-in | Manual |
| Font optimization | `next/font` built-in | Manual |
| Code splitting | Automatic | Manual |

## Security

- Validate all server-side inputs (Server Actions)
- HTTPS-only cookies + CSRF tokens for sensitive forms
- Protect admin routes with middleware or session logic

## Tools to integrate (not yet installed)

| Tool | Usage |
|---|---|
| shadcn/ui | UI components (forms, cards, dialogs...) — `npx shadcn-ui@latest init` |
| TanStack Query | Data fetching — `QueryClientProvider` in `layout.tsx`, API logic in `lib/api/` |
| Prettier | Auto formatting — `npm run format` |
| Jest + RTL | Unit and integration tests — co-located or in `src/tests/` |

## TODO

- [ ] Guest pages (real content: attractions, tickets, map)
- [ ] Authentication (protected admin routes)
- [ ] Server Actions for data
- [ ] Admin sidebar/header
- [ ] Reusable UI components (Button, Card, Modal...)
- [ ] Install and configure shadcn/ui
- [ ] Install and configure TanStack Query
- [ ] Set up tests (Jest + RTL)
