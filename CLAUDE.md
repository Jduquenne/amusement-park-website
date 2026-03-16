# Amusement Park Website — CLAUDE.md

Learning project built with Next.js: website for a fictional amusement park (Tivoli).
Educational goal: understand how Next.js App Router works compared to classic SPAs.

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
- **Types:** no `any`, use `unknown` or strict generics
- **Imports:** group in this order — `react` → `next` → external libraries → local files

### Path aliases (tsconfig.json)
- `@/*` → `src/*` (covers everything)

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
