export default `app/
├── layout.tsx              # Root layout (automatic)
├── page.tsx                # Home page (automatic route)
├── about/
│   └── page.tsx            # /about route (automatic)
├── contact/
│   └── page.tsx            # /contact route (automatic)
├── api/                    # Built-in API (same project)
│   ├── users/
│   │   └── route.ts        # /api/users endpoint
│   └── posts/
│       └── route.ts        # /api/posts endpoint
├── globals.css             # Global styles
└── components/             # Shared components
    ├── Header.tsx
    └── Footer.tsx

# Everything in one project - no separate backend needed`;
