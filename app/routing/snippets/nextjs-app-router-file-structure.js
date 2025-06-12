export const nextjsAppRouterFileStructure = `app/
├── layout.tsx          # Root layout (required)
├── page.tsx           # Home page (/)
├── loading.tsx        # Loading UI (optional)
├── error.tsx          # Error UI (optional)
├── not-found.tsx      # 404 page (optional)
├── about/
│   └── page.tsx       # About page (/about)
└── contact/
    └── page.tsx       # Contact page (/contact)

components/
└── navbar.tsx         # Shared navigation component`;
