export default `# Create new Next.js project
npx create-next-app@latest my-next-app --typescript --tailwind --eslint --app

# Full-stack project structure with built-in features
my-next-app/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # File-based routing
│   └── api/                 # Built-in API routes
│       └── users/
│           └── route.ts     # Backend endpoints
├── components/              # Component directory
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS config
├── tsconfig.json           # TypeScript config
└── package.json`;
