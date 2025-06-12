export const nextjsAppRouterComparison = `app/
├── page.tsx            # / route
├── about/
│   └── page.tsx        # /about route
├── users/
│   ├── page.tsx        # /users route
│   └── [id]/
│       └── page.tsx    # /users/[id] route
├── blog/
│   ├── page.tsx        # /blog route
│   └── [slug]/
│       └── page.tsx    # /blog/[slug] route
└── not-found.tsx       # 404 page

# No configuration needed`;
