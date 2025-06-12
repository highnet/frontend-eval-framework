export default `# Automatic routing based on file structure
app/
├── page.tsx                 # → /
├── about/
│   └── page.tsx             # → /about
├── blog/
│   ├── page.tsx             # → /blog
│   └── [slug]/
│       └── page.tsx         # → /blog/[slug] (dynamic route)
└── api/
    └── users/
        └── route.ts         # → /api/users`;
