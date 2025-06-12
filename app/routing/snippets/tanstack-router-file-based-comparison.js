export const tanstackRouterFileBasedComparison = `routes/
├── __root.tsx          # Root layout
├── index.tsx           # / route
├── about.tsx           # /about route
├── users/
│   ├── index.tsx       # /users route
│   └── $userId.tsx     # /users/$userId route
└── blog/
    ├── index.tsx       # /blog route
    └── $slug.tsx       # /blog/$slug route

# Auto-generates routeTree.gen.ts with types`;
