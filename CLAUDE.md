# Amusement Park Website — CLAUDE.md

Projet d'apprentissage Next.js : site web pour un parc d'attractions fictif (Tivoli).
Objectif pédagogique : comprendre le fonctionnement de Next.js App Router vs SPA classique.

## Stack technique

- **Framework:** Next.js 15 (App Router)
- **Langage:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (CSS-first, pas de `tailwind.config.js`)
- **Fonts:** Montserrat Black (titres) + Raleway Regular (corps) via `next/font/google`
- **React:** v19 avec Server Components par défaut

## Architecture des routes

```
src/app/
├── layout.tsx          ← Root layout (HTML, body, fonts, metadata uniquement)
├── page.tsx            ← Page d'accueil /
├── (guests)/           ← Groupe de routes visiteurs (layout avec header)
│   ├── layout.tsx      ← Applique GuestLayout (Header + main)
│   ├── attractions/    ← /attractions + /attractions/[id]
│   ├── tickets/        ← /tickets + /tickets/confirmation
│   ├── map/            ← /map
│   └── account/        ← /account + /account/profil + /account/order
└── (admin)/            ← Groupe de routes admin (layout admin séparé)
    ├── layout.tsx      ← Layout admin (futur sidebar admin)
    └── admin/
        ├── dashboard/
        ├── attractions/ ← /admin/attractions + /admin/attractions/[id]/edit
        ├── tickets/
        └── users/
```

Les parenthèses `(guests)` et `(admin)` sont des **Route Groups** Next.js : ils n'apparaissent pas dans l'URL mais permettent d'appliquer des layouts différents.

## Structure des composants

```
src/components/
├── layout/
│   └── GuestLayout.tsx   ← Header + <main> wrapper (Server Component)
└── ui/
    └── Header.tsx        ← Navigation fixe (Server Component)
```

## Conventions importantes

### Pas de commentaires
Ne jamais générer de commentaires dans le code (ni `//`, ni `/* */`, ni `{/* */}`). Le code doit être auto-descriptif via des noms clairs. Cette règle s'applique à tous les fichiers du projet.



### Paramètres inutilisés dans les pages dynamiques

Les pages avec des segments dynamiques (`[id]`) reçoivent `params` en props. Si le paramètre n'est pas utilisé (page placeholder), **ne pas le déclarer du tout** dans la signature de la fonction :

```tsx
// ✅ Correct — params non utilisé, on ne le déclare pas
export default function AttractionDetailPage() {
    return <h1>Détail</h1>;
}

// ❌ Incorrect — ESLint @typescript-eslint/no-unused-vars va échouer
export default function AttractionDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return <h1>Détail</h1>;
}
```

Quand `params` est réellement utilisé, le typer correctement avec `Promise<{ id: string }>` (Next.js 15 — les params sont asynchrones).

### Server Components vs Client Components
- **Par défaut : Server Component** — pas de `'use client'` sauf si nécessaire
- Ajouter `'use client'` **uniquement** si le composant utilise :
  - `useState`, `useEffect`, `useRef` ou autres hooks React
  - Des event handlers (`onClick`, `onChange`, etc.)
  - Des APIs browser (`window`, `localStorage`, etc.)
- `Link`, `Image` de Next.js fonctionnent en Server Component

### Tailwind CSS v4
- Configuration via `globals.css` avec `@import "tailwindcss"` — **pas de `tailwind.config.js`**
- PostCSS via `postcss.config.mjs` avec `@tailwindcss/postcss`
- Variables CSS custom dans `:root` pour les couleurs du thème
- Dark mode via `@media (prefers-color-scheme: dark)`

### Fonts
- Chargées dans `src/app/layout.tsx` via `next/font/google`
- Injectées comme variables CSS : `--font-montserrat-black`, `--font-raleway-regular`
- Utilisation en CSS : `font-family: var(--font-montserrat-black)`
- Utilisation en Tailwind : configurer `@theme` dans `globals.css` si besoin de classes custom

### Path aliases (tsconfig.json)
- `@/*` → `src/*` (couvre tout)

## Commandes

```bash
npm run dev     # Serveur de développement (Turbopack)
npm run build   # Build de production
npm run lint    # ESLint
```

## Convention de commit

Quand je dis **"commit"**, fournir uniquement le message de commit — **ne pas exécuter de commande git**.

Le message doit commencer par un préfixe :

| Préfixe | Usage |
|---|---|
| `feat:` | Nouvelle fonctionnalité |
| `fix:` | Correction de bug |
| `refactor:` | Refactoring sans changement fonctionnel |
| `style:` | Changements purement visuels / CSS |
| `chore:` | Config, dépendances, outillage |
| `docs:` | Documentation uniquement |

Exemple : `feat: ajout du header de navigation avec logo et liens`

## Pourquoi Next.js vs React/Angular/Vue ?

| Fonctionnalité | Next.js | SPA classique |
|---|---|---|
| SSR / SSG | Natif | Complexe à configurer |
| Routing | Basé sur fichiers (App Router) | Bibliothèque externe |
| Server Components | Oui (réduit le JS client) | Non |
| SEO | Excellent (HTML rendu serveur) | Difficile |
| Image optimization | `next/image` natif | Manuel |
| Font optimization | `next/font` natif | Manuel |
| Code splitting | Automatique | Manuel |

## Ce qu'il reste à implémenter

- [ ] Pages guests (contenu réel : attractions, billets, carte)
- [ ] Authentification (routes protégées admin)
- [ ] API Routes ou Server Actions pour les données
- [ ] Sidebar/header admin
- [ ] Composants UI réutilisables (Button, Card, Modal...)
